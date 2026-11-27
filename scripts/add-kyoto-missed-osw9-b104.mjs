// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 104.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   + HOTEL KUU KYOTO (breakfast buffet facing Higashi Honganji; open to non-guests; one-hotel local operator 株式会社インセンティア)
//   - 若菜屋 御池本店 — chain (six shops on the official store page), and a take-home wagashi shop
//   + 大将割烹 マルキュウ (couple-run fish set meals and izakaya near Kawaramachi-Marutamachi, opened 1 November 2020)
//   + シノン (CHINON) (owner-chef French bistro by Nijo Castle, opened 11 November 2019)
//   + 割烹料理 福やす (machiya kappo by Ebisugawa-dori, opened 4 August 2023)
//   Brand checks: data/kyoto.json grepped for the five Tabelog ids, KUU, 卓屋町, 若菜屋, マルキュウ, シノン, CHINON, 福やす and the
//   addresses (俵屋町436, 古城町369, 花立町274) — no records. Pending osw* scripts name none of these ids.
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-104');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022923', 'chain: 若菜屋 runs six shops (御池本店, 四条祇園店, 四条西洞院店, 亀岡店 with the factory, 深草店, 醍醐店) per its official store page www.wakanaya.jp/store.html (read 2026-11-26), and it is a take-home wagashi shop; founded 昭和2年 (1927) per www.wakanaya.jp/company.html, but the 5+-shop chain rule applies before the historic-retail ruling');

// ================================================================ HOTEL KUU KYOTO (breakfast buffet)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041163/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hotelkuu.jp/'; const REST = SITE + 'restaurant.html'; const CO = SITE + 'company.html'; const BATH = SITE + 'daytrip.html';
  const D = day(['07:00', '10:00']);
  put({
    id: 'kyoto_hotel_kuu_breakfast_higashihonganji', name: 'HOTEL KUU KYOTO', category: 'OMNI',
    lat: 34.99100644787867, lng: 135.76057649022053, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A buffet of sushi, Kyoto obanzai and Western dishes that includes tempura, grilled nama-fu (wheat gluten) dengaku, KUU black curry and several house natural-yeast breads (April 2024 and September 2025 reviews); no gluten or allergy information on the official site.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The October 2026 fair menu on the official site marked one dish ヴィーガン (vegan): a turnip steak. Reviews also mention an organic vegetable salad, pickles and a soy-milk medicinal porridge (April and September 2024), but no other dish is labelled and ingredients are not listed.',
    hours_raw: 'Breakfast 7:00–10:00, WEST 1F, 40 seats (official site). Breakfast ¥2,800 tax included; a bath-and-breakfast set ¥3,280 tax included from 20 June 2026, earlier ¥2,980 (official site). Open to non-guests: a September 2024 reviewer wrote that both guests and non-guests can book, same-day walk-ins included; a September 2025 reviewer wrote that non-guests can have breakfast alone or with the bath and saw quite a few people who had come in from outside; the official site\'s breakfast booking link goes to no-room breakfast plans. Day-use bath: large bath ¥1,200, small bath ¥1,000 tax included from 20 June 2026, ¥100 off with your own towel; entry 6:00–9:30 and 15:00–21:30, tickets from the machine at the front desk (official site). The large and small baths swap between men and women daily (September 2024 review). Cards and QR payments accepted (Tabelog). No hotel parking; nearby coin parking (official FAQ). Children\'s chairs in limited number, ask ahead (official FAQ). Across from Higashi Honganji, about 7 min walk from Kyoto Station (September 2024 and September 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Facing Higashi Honganji, between Kyoto Station and Gojo — 496 m from Gojo Stn',
    cuisine: 'A breakfast buffet of Kyoto obanzai (official site: 「朝食は京都の滋味深いおばんざいをご用意。」), with most dishes made in-house by the chef (official site). Seen in reviews: nigiri sushi, organic vegetable salad, natural-yeast breads, pickles, tempura, dashimaki tamago, nama-fu dengaku, the signature KUU black curry, tea sweets and cake, pudding, house vanilla ice cream and sakura mizu-yokan (April 2024); omelettes cooked to order (February and April 2024; fillings of your choice, September 2026); a monthly fair menu — in September 2024 braised mochi pork, autumn eggplant baked with miso and cheese, grape canapés, dashimaki with pickled ginger, soy-milk medicinal porridge and brown-sugar pudding; yuba and rice porridge (November 2026); red-vinegar sushi rice (August 2026); desserts such as pudding or tart brought to the table on order (November 2026). Official site: the October 2026 fair listed chicken steak with salsa romesco, braised mochi pork belly with a simmered egg, salmon chan-chan-yaki, a vegan turnip steak, house pressed ham, squid and taro simmered together, mushrooms pickled with garlic chives, and grilled pear with mozzarella; the order-only house dessert of the month is pumpkin brûlée.',
    website: SITE, gmaps: gm('HOTEL KUU KYOTO 朝食 東本願寺'), menu_url: REST,
    notes: '[Breakfast buffet · Higashi Honganji] The ground-floor breakfast room of a small design hotel facing Higashi Honganji, open to non-guests: a ¥2,800 buffet of Kyoto obanzai, sushi, house breads and desserts such as an old-fashioned firm pudding, mostly made in-house, with omelettes to order and a monthly fair menu. Pair it with the hotel\'s day-use bath. 7:00–10:00 daily.',
    chef_bio: { chef_name: null, roles: [], origin: 'Kyoto',
      background: 'The official site introduces the breakfast chef without a name: born in Kyoto City, 26 years of cooking, from French restaurants, with further training in Italian cooking and at a bakery, making most of the buffet in-house and known for original desserts. The hotel is run by 株式会社インセンティア, founded September 1956, whose businesses are hotel operation, restaurants and travel planning; its company page names no other hotel (official site). Reviewers note many foreign guests (April 2024, September 2026).',
      philosophy: 'The official site: a restaurant looking out on Higashi Honganji, pairing organic Kyoto vegetables with Japanese organic wines; breakfast of 「京のおばんざい」, gentle on the body, to start the day.',
      specialty: 'Obanzai breakfast buffet; old-fashioned pudding; KUU black curry.',
      anecdotes: [
        { text: 'A September 2024 visitor arrived early for the 7:00 opening, prayed at Higashi Honganji first, then took the buffet-and-bath plan, and suggested it as a stop after arriving on a night bus.', source: R + 'B492807679/' },
        { text: 'An April 2024 diner found the room small and the buffet on the light side, with nigiri sushi among the Japanese dishes because of the many foreign guests, but liked the made-to-order omelette and the pudding served on request.', source: R + 'B484253030/' },
        { text: 'A September 2025 guest lingered nearly two hours over the bite-sized dishes while looking out at Higashi Honganji.', source: R + 'B513542115/' },
        { text: 'An April 2025 visitor came for the buffet and bath to ease a tired body after a night bus.', source: R + 'B504117739/' },
      ],
      japanese_sources_summary: '公式サイト: HOTEL KUU KYOTO、下京区不明門通正面下る卓屋町58番地。レストランの朝食「京のおばんざいを味わう朝食」7:00〜10:00、WEST 1F、40席、2,800円 (税込)。お風呂朝食セット3,280円 (税込、2026年6月20日から。それまでは2,980円)。シェフの紹介: 京都市出身、料理歴26年、フレンチレストラン出身、イタリアンやパン屋でも修行、ビュッフェのほとんどの料理を自家製手作りで提供、オリジナルデザートも得意。10月の神無月フェア: 若鶏のステーキ サルサロメスコ、もち豚の角煮と煮卵、サーモンのちゃんちゃん焼き、ヴィーガンの蕪のステーキ、もち豚の自家製プレスハム、烏賊と里芋の煮物、いろいろキノコのニラ漬け、焼き梨とモッツアレラチーズ。月の自家製オーダーデザートは南瓜のブリュレ。日帰り入浴: 大浴場1,200円、小浴場1,000円 (税込、2026年6月20日から)、受付6:00〜9:30と15:00〜21:30。会社概要: 株式会社インセンティア、創業1956年9月、ホテル運営・飲食店の経営、旅行・ツアーの企画。食べログ: カード可、QR可。口コミ (2024〜2026年、英語): 宿泊者以外も予約でき当日も可 (2024年9月)、外から朝食だけの人も多い (2025年9月)、すし、おばんざい、生麩田楽、だし巻き、KUU の黒カレー、焼きたてのオムレツ、昔ながらのかためのプリン。',
      confidence: 'medium', sources: [SITE, REST, CO, BATH, SITE + 'faq.html', TB, R + 'B484253030/', R + 'B485152556/', R + 'B492807679/', R + 'B504117739/', R + 'B513542115/', R + 'B520175519/', R + 'B535665625/', R + 'B536630686/', R + 'B539823878/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A hotel breakfast room used by many foreign guests (April 2024 and September 2026 reviews); buffet service. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区不明門通正面下る卓屋町58',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with 2026 prices and an October 2026 fair menu; Tabelog listing; review dated November 2026.' },
    pin_source: `Tabelog ${TB} (34.991006, 135.760576); nearest record kyoto_bistro_kizano (卓屋町66-1) about 38 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [REST, SITE, R + 'B492807679/'],
    price_note: 'Prices from the official restaurant page, tax included (seen November 2026); dishes change with the monthly fair.', last_checked: TODAY, items: [
      it('朝食ビュッフェ', '', 'Breakfast buffet', '¥2,800', 'Breakfast', 'ask', 'ask', 'Official site, tax included.', 'breakfast_buffet'),
      it('お風呂朝食セット', '', 'Bath and breakfast set', '¥3,280', 'Breakfast', 'ask', 'ask', 'Official site, tax included, from 20 June 2026.', 'bath_breakfast_set'),
      it('蕪のステーキ', '', 'Turnip steak (marked vegan)', '', 'Breakfast', 'ask', 'ask', 'Official site, October 2026 fair menu; marked ヴィーガン.', 'kabu_steak'),
      it('南瓜のブリュレ', '', 'Pumpkin brûlée (order-only house dessert of the month)', '', 'Dessert', 'ask', 'ask', 'Official site.', 'kabocha_brulee'),
    ] }, {
    cuisine: '京のおばんざいの朝食ビュッフェ (公式サイト「朝食は京都の滋味深いおばんざいをご用意。」)。ほとんどの料理をシェフが自家製手作り (公式サイト)。口コミの料理: にぎりずし、有機野菜のサラダ、天然酵母のパン、漬物、天ぷら、だし巻き、生麩田楽、名物の KUU の黒カレー、お茶菓子とケーキ、プリン、自家製バニラアイス、桜の水ようかん (2024年4月)。注文で焼くオムレツ (2024年2月と4月、2026年9月は具を選べる)。月替わりのフェア: 2024年9月はもち豚の煮込み、秋なすの味噌チーズ焼き、ぶどうのカナッペ、だし巻き、豆乳の薬膳がゆ、黒糖プリン。湯葉とおかゆ (2026年11月)。赤酢のすし飯 (2026年8月)。注文するとプリンやタルトを席まで (2026年11月)。公式サイト: 2026年10月のフェアは若鶏のステーキ サルサロメスコ、もち豚の角煮と煮卵、サーモンのちゃんちゃん焼き、ヴィーガンの蕪のステーキ、もち豚の自家製プレスハム、烏賊と里芋の煮物、いろいろキノコのニラ漬け、焼き梨とモッツアレラチーズ。月の自家製オーダーデザートは南瓜のブリュレ。',
    neighborhood: '東本願寺の正面、京都駅と五条のあいだ。五条駅から496m',
    gf_detail: '要確認。すし、京のおばんざい、洋食のビュッフェで、天ぷら、生麩田楽、KUU の黒カレー、何種類かの自家製天然酵母パンがある (2024年4月と2025年9月の口コミ)。公式サイトにグルテンやアレルギーの情報はない。',
    vegan_detail: '要確認。公式サイトの2026年10月のフェアでは、蕪のステーキにヴィーガンの印。口コミには有機野菜のサラダ、漬物、豆乳の薬膳がゆもある (2024年4月と9月)。ただしほかの料理に印はなく、材料も書かれていない。',
    notes: '[朝食ビュッフェ・東本願寺] 東本願寺の正面に建つ小さなデザインホテルの1階の朝食会場。宿泊しなくても利用できる。京のおばんざい、すし、自家製パン、昔ながらのかためのプリンなどのデザート、ほとんどが自家製で2,800円。注文で焼くオムレツと月替わりのフェア。日帰り入浴と合わせても。毎日7時から10時。',
  });
}

// ================================================================ 大将割烹 マルキュウ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26036399/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_marukyu_tb26036399_kawaramachi_marutamachi', name: '大将割烹 マルキュウ', category: 'OMNI',
    lat: 35.018301177864245, lng: 135.76971790048984, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fish, sashimi, simmered fish in a sweet soy sauce, tempura, fried oysters and oden with fu (wheat gluten) (2024–2026 reviews); no gluten or allergy information on Tabelog.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant whose set meals centre on sashimi and grilled or simmered fish with miso soup (2024–2026 reviews); no vegan dish mentioned.',
    hours_raw: 'Tabelog: Tue–Sun 12:00–15:00 (L.O. 14:00) and 17:00–22:00 (L.O. 21:00); closed Mondays; may close temporarily. A March 2026 review copied different hours: Tue–Sat 12:00–15:00 (L.O. 14:30), Sunday 12:00–22:00 (L.O. 21:00, last entry 20:30), closed Mondays. Lunch is set meals only; in the evening set meals and à la carte (February 2025 review); one drink per person at dinner (March 2026 review). Reservations taken (Tabelog). Payment: Tabelog lists no cards or e-money, QR by PayPay only; the March 2026 review lists cash, cards, QR and e-money. 15 seats with a counter (Tabelog; 16 seats in the March 2026 review); shoes off before sitting at the counter (November 2026 review). Non-smoking; no parking, coin parking nearby (Tabelog). 5 min walk from Keihan Jingu-Marutamachi Stn, 15 min from Marutamachi subway Stn (Tabelog). Opened 1 November 2020 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of the Kamo River near Kawaramachi-Marutamachi — 232 m from Jingu-Marutamachi Stn',
    cuisine: 'Fish set meals and an evening izakaya menu, with a handwritten blackboard menu outside (July 2025 review). Seen in reviews: grilled fish and sashimi set (September 2024); tempura of green beans, Moroccan green beans, Awaji anago about 20 cm long, white eggplant, hamo and okra, oden with yuba, grilled ume and fu, a quick-drink set and an evening set meal, and a Kinshi Masamune junmai sake from Fushimi (November 2024); simmered baby flatfish with roe and sashimi ¥1,480, with miso soup and free rice refills (January 2025); fried oysters with house tartar sauce set (February 2025); assorted sashimi and grilled fish set ¥1,800, a mini version ¥1,350, and a free-range chicken tempura curry rice bowl on the menu (July 2025); medium fatty tuna sashimi wrapped in nori and fried oysters (February 2026); seafood rice bowl ¥2,500 and a pot of bancha ¥660 (March 2026); grilled fatty salted mackerel and sashimi with rice refills (March 2026); grilled fish and sashimi set ¥1,380 with a choice of kamasu, salted mackerel or tachiuo, chicken tempura with tartar sauce ¥1,100 and spare ribs ¥1,680 (September 2026); hokke and sashimi set about ¥1,500 (November 2026). Reviewers paid ¥1,000–2,000 at lunch and ¥3,000–6,000 at dinner (2025–2026).',
    website: null, gmaps: gm('大将割烹 マルキュウ 京都 俵屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Fish set meals · Kawaramachi-Marutamachi] A small counter run by a couple near Kawaramachi-Marutamachi: fresh sashimi with grilled or simmered fish at lunch for about ¥1,400–1,800 with free rice refills, and in the evening tempura, oden, fried oysters and sake. Popular with regulars; closed Mondays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by a couple, with a homely feel and warm exchanges with regulars (July 2025 review). Opened 1 November 2020 (Tabelog). An April 2026 reviewer heard the chef, a keen angler, chatting with regulars about octopus fishing and a planned trip to Akashi; a November 2026 reviewer credited the quality of the fish to the owner\'s dedication.',
      philosophy: null,
      specialty: 'Grilled fish and sashimi set meals; seafood rice bowl.',
      anecdotes: [
        { text: 'A July 2025 diner ordered the ¥1,800 sashimi and grilled fish set, was served the mini version, and at the till the couple apologised and charged ¥1,350 instead.', source: R + 'B509581007/' },
        { text: 'A lunchtime regular who came every two weeks tried the evening for the first time in November 2024, with Awaji anago and white eggplant tempura and oden of yuba and fu.', source: R + 'B493755033/' },
        { text: 'At the till in April 2026 a diner mentioned growing up on Awaji Island eating sea bream, conger eel and octopus every day, after hearing the chef talk about octopus fishing.', source: R + 'B526613210/' },
        { text: 'On a Sunday just after noon in September 2026 the room was almost full; the diner watched regulars check the day\'s fish and order the spare ribs instead.', source: R + 'B536361182/' },
      ],
      japanese_sources_summary: '食べログ: 大将割烹 マルキュウ、居酒屋、上京区俵屋町436-3 1F、京阪「神宮丸太町駅」から徒歩5分。火〜日 12:00〜15:00 (L.O. 14:00)、17:00〜22:00 (L.O. 21:00)、月曜休み。予約可、カード・電子マネー不可、QRは PayPay、15席 (カウンターあり)、貸切可、禁煙、駐車場なし (近くにコインパーキング)、オープン 2020年11月1日。口コミ (2024〜2026年、英語): 夫婦で営む家庭的な店 (2025年7月)、店の前に手書きの黒板のメニュー、昼は定食のみ、夜は定食と一品料理、夜はワンドリンク制 (2026年3月)、ごはんのおかわり自由。焼き魚と刺身の定食1,380〜1,800円、子持ちガレイの煮付けと刺身1,480円、カキフライ定食、海鮮丼2,500円、天ぷら、おでん、とり天のタルタル1,100円、スペアリブ1,680円。',
      confidence: 'medium', sources: [TB, R + 'B491507229/', R + 'B493755033/', R + 'B500649001/', R + 'B502199505/', R + 'B509581007/', R + 'B522214923/', R + 'B524723886/', R + 'B526613210/', R + 'B526742765/', R + 'B536361182/', R + 'B538470517/'] },
    cultural_comfort: { level: 'japanese', note: 'A small counter of regulars with a handwritten Japanese blackboard menu (July 2025 review); no English menu noted. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区俵屋町436-3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March, April, September and November 2026.' },
    pin_source: `Tabelog ${TB} (35.018301, 135.769718); nearest record kyoto_bifuu_tainan_tears2 (桝屋町359) about 28 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536361182/', R + 'B524723886/', R + 'B502199505/', R + 'B509581007/'],
    price_note: 'Prices from 2025–2026 reviews; no menu prices on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Grilled fish and sashimi set (kamasu, salted mackerel or tachiuo)', '¥1,380', 'Set meal', 'ask', 'no', 'September 2026 review.', 'grilled_fish_sashimi_set'),
      it('', '', 'Assorted sashimi and grilled fish set (mini ¥1,350)', '¥1,800', 'Set meal', 'ask', 'no', 'July 2025 review.', 'sashimi_grilled_fish_set'),
      it('', '', 'Simmered baby flatfish with roe and sashimi', '¥1,480', 'Set meal', 'ask', 'no', 'January 2025 review.', 'karei_nitsuke'),
      it('', '', 'Seafood rice bowl', '¥2,500', 'Donburi', 'ask', 'no', 'March and September 2026 reviews.', 'kaisendon'),
      it('', '', 'Chicken tempura with tartar sauce', '¥1,100', 'Set meal', 'no', 'no', 'September 2026 review; battered.', 'toriten_tartar'),
      it('', '', 'Spare ribs', '¥1,680', 'Set meal', 'ask', 'no', 'September 2026 review.', 'spare_ribs'),
      it('', '', 'Pot of bancha tea', '¥660', 'Drinks', 'ask', 'ask', 'March 2026 review.', 'bancha_pot'),
    ] }, {
    cuisine: '魚の定食と夜の居酒屋のメニュー。店の前に手書きの黒板のメニュー (2025年7月の口コミ)。口コミの料理: 焼き魚と刺身の定食 (2024年9月)。いんげん、モロッコいんげん、20cmほどの Awaji のあなご、白なす、はも、オクラの天ぷら、湯葉と焼き梅と麩のおでん、ちょい飲みのセットと夜の定食、Fushimi の Kinshi Masamune の純米酒 (2024年11月)。子持ちガレイの煮付けと刺身1,480円、味噌汁とごはんのおかわり自由 (2025年1月)。自家製タルタルのカキフライ定食 (2025年2月)。刺身の盛り合わせと焼き魚の定食1,800円、ミニは1,350円、メニューに地鶏の天ぷらのカレー丼 (2025年7月)。中トロの刺身の海苔巻きとカキフライ (2026年2月)。海鮮丼2,500円と番茶のポット660円 (2026年3月)。脂ののった塩サバの焼き魚と刺身、ごはんのおかわり (2026年3月)。カマス、塩サバ、タチウオから選ぶ焼き魚と刺身の定食1,380円、とり天のタルタル1,100円、スペアリブ1,680円 (2026年9月)。ホッケと刺身の定食、1,500円ほど (2026年11月)。口コミでは昼ひとり1,000〜2,000円、夜3,000〜6,000円 (2025〜2026年)。',
    neighborhood: '鴨川の西、河原町丸太町の近く。神宮丸太町駅から232m',
    gf_detail: '要確認。焼き魚、刺身、甘辛い煮付け、天ぷら、カキフライ、麩の入るおでん (2024〜2026年の口コミ)。食べログにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身と焼き魚や煮魚に味噌汁がつく定食が中心の魚の店 (2024〜2026年の口コミ)。ヴィーガンの料理は書かれていない。',
    notes: '[魚の定食・河原町丸太町] 河原町丸太町の近く、夫婦で営む小さなカウンターの店。昼は新鮮な刺身と焼き魚や煮魚の定食がおよそ1,400〜1,800円でごはんのおかわり自由。夜は天ぷら、おでん、カキフライと日本酒。常連の多い店。月曜休み。',
  });
}

// ================================================================ シノン (CHINON)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033153/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://chinon.shop/';
  const DIN = ['17:30', '22:00'];
  const WD = day(DIN); const SUN = day(['12:00', '14:30'], DIN);
  put({
    id: 'kyoto_chinon_nijojo_kojocho', name: 'シノン (CHINON)', category: 'MOM_AND_POP',
    lat: 35.012313837057754, lng: 135.75427957927837, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. House bread with every lunch, a Kamo eggplant gratin, seafood risotto, terrine and sauced meat dishes (official menu; 2022 and 2023 reviews); no gluten or allergy information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan dish is marked; the menu is built on meat, fish, oysters, foie gras and cheese (official menu). The gazpacho, a chilled tomato and vegetable soup, has no ingredient list, and the lunch soups have been consommé or potage (2022 and 2023 reviews).',
    hours_raw: 'Official site: dinner 17:30–22:00 (its information section gives 17:30–23:00, last order 22:00); lunch on Sundays 12:00–14:30 (last order 14:00; the top of the page says 12:00–14:00), and Monday–Saturday lunch for two or more by reservation made by the day before; closed irregularly. Tabelog gives 12:00–14:30 and 17:30–22:00 every day, with Mon–Sat lunch by reservation the day before. Children aged 10 and under are declined (official site; Tabelog: 5th grade and above). One drink per person (official menu). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 12 seats: counter and tables (Tabelog). Non-smoking; wheelchair accessible; BYO and takeout listed; no parking, coin parking nearby (Tabelog). On the north-east corner of Ogawa-dori and Oshikoji-dori, 8 min walk west of Karasuma-Oike Stn (official site). Opened 11 November 2019 (official site; Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ogawa-Oshikoji, east of Nijo Castle — 376 m from Nijojo-mae Stn',
    cuisine: 'French bistro cooking with seasonal Kyoto ingredients (official site). À la carte, tax included (official menu updated 2 August 2024): gazpacho ¥880, house country terrine ¥2,090, Amakusa rock oysters raw ¥1,540 or grilled ¥1,650, house roast ham ¥2,090, foie gras terrine with brioche ¥4,400, hamo and manganji pepper ajillo ¥2,200, Kamo eggplant gratin ¥1,980 (half ¥1,100), baked escargots ¥2,310, seafood risotto ¥2,420, sauté of bone-in Kyoto pork ¥4,290, braised Japanese beef cheek ¥4,290, roast lamb with grain-mustard sauce ¥4,400; omakase course from two people ¥6,600. Lunch "Le Déjeuner" ¥2,750 (menu updated 7 July 2022): salad, potage, meat or fish of the day, dessert, house bread, coffee or tea. Wines include a Chinon red, Chablis and Sancerre by the bottle, glass wine ¥990, and Eikun junmai sake ¥880 (official menu). Seen in reviews: a blackboard menu, onion gratin soup, house ham and Japanese sirloin (March 2020); a ¥1,800 lunch with three house breads, focaccia, rosemary and walnut (January 2022); Le Déjeuner of gimpo carpaccio, chilled mushroom potage, house sausage and baba au rhum (September 2023); omakase at ¥6,000, ¥8,000 or ¥10,000 before tax — sea bream carpaccio, pâté, gazpacho, a fish course, beef cheek braised in wine and peach compote (August 2024); lamb chops (September 2024); beef cheek stew and country terrine (December 2024); sea bream and scallop carpaccio and a firm pudding (August 2025).',
    website: SITE, gmaps: gm('シノン CHINON 京都 古城町 フレンチ'), menu_url: SITE,
    notes: '[French bistro · Nijo Castle] A twelve-seat corner bistro east of Nijo Castle where the owner-chef, who trained in France from age 19, cooks and serves alone: terrines, Amakusa rock oysters, Kamo eggplant gratin and braised beef cheek à la carte, or an omakase course from ¥6,600. Dinner nightly; lunch on Sundays, other days by reservation.',
    chef_bio: { chef_name: '坂由紀夫', roles: ['Owner-chef'], origin: null,
      background: 'The official profile: owner-chef 坂由紀夫 went alone to France at 19, trained in hotels and restaurants there and qualified as a cook, returned to Japan at 25, and worked in Kyoto, Tokyo and Osaka in French and also Italian restaurants and a steakhouse. Opened CHINON on 11 November 2019 (official site). The chef cooks and serves single-handed, so dishes can take time when busy (August 2024 review). Reviewers describe a chef of rugged looks with a warm smile (May 2023), kind and approachable (September 2024) and friendly (November 2025).',
      philosophy: 'The official site: authentic French cooking by a France-trained chef with seasonal Kyoto ingredients, in a space of hospitality.',
      specialty: 'Country terrine; braised beef cheek; omakase course.',
      anecdotes: [
        { text: 'On a Sunday in January 2022 a diner came just after 13:30, the only customer, and had the ¥1,800 lunch with a house sausage and three kinds of house bread.', source: R + 'B445561961/' },
        { text: 'During Obon in August 2024 a couple walked in around 20:00 without a booking and, after a late lunch, chose the smallest omakase course, ¥6,600 with tax.', source: R + 'B490281770/' },
        { text: 'A family of nine celebrated a birthday here in September 2024, finishing with lamb chops and house desserts.', source: R + 'B492791798/' },
        { text: 'A diner who manages two or three visits a year wrote in November 2025 of a tempting à la carte menu and a friendly chef.', source: R + 'B517665180/' },
      ],
      japanese_sources_summary: '公式サイト: フランス料理 シノン (CHINON)、中京区古城町369-3、小川通り押小路通り北東角、地下鉄烏丸御池駅より西へ徒歩8分。2019年11月11日オープン。オーナシェフ 坂由紀夫: 19歳で単身フランスへ、ホテル、レストランで修行、調理師免許取得、25歳で帰国、京都、東京、大阪でフランス料理のほかイタリア料理、ステーキハウスで経験を積む。ディナー17:30〜22:00 (ご案内の欄は17:30〜23:00、22:00ラストオーダー)、ランチは日曜12:00〜14:30、月〜土曜は前日までに2名以上で予約、不定休、10歳以下の子どもは遠慮。アラカルト (2024年8月2日更新、税込): ガスパッチョ880円、自家製田舎風テリーヌ2,090円、天草産岩牡蛎 生1,540円・焼き1,650円、鱧と万願寺唐辛子のアヒージョ2,200円、鴨茄子のグラタン1,980円、国産牛のほほ肉の煮込み4,290円、仔羊のロースト4,400円、お任せコース (2名から) 6,600円、ひとりワンドリンク。ランチ2,750円。食べログ: カード可、PayPay、12席、禁煙、車椅子可。口コミ (2020〜2025年、英語): シェフがひとりで料理とサービス (2024年8月)、テリーヌ、ほほ肉の煮込み、ラムチョップ、かためのプリン。',
      confidence: 'medium', sources: [SITE, TB, R + 'B425612371/', R + 'B445561961/', R + 'B465042669/', R + 'B470906687/', R + 'B490281770/', R + 'B492791798/', R + 'B497607387/', R + 'B512063360/', R + 'B517665180/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu dish names in French and Japanese (official site); the chef trained in France (official site). Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区古城町369-3',
    existence: { status: 'probable', checked: TODAY, note: 'Official site with a menu updated August 2024; Tabelog listing; latest review dated November 2025.' },
    pin_source: `Tabelog ${TB} (35.012314, 135.754280); nearest record kyoto_shishiou (古城町367-14) about 12 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official menu, tax included (à la carte updated 2 August 2024; lunch updated 7 July 2022).', last_checked: TODAY, items: [
      it('自家製田舎風テリーヌ', '', 'House country terrine', '¥2,090', 'À la carte', 'ask', 'no', 'Official menu.', 'terrine_campagne'),
      it('天草産 岩牡蛎', '', 'Amakusa rock oysters, raw / grilled', '¥1,540 / ¥1,650', 'À la carte', 'ask', 'no', 'Official menu.', 'iwagaki'),
      it('鴨茄子のグラタン', '', 'Kamo eggplant gratin (half ¥1,100)', '¥1,980', 'À la carte', 'ask', 'no', 'Official menu.', 'kamonasu_gratin'),
      it('海の幸のリゾット', '', 'Seafood risotto', '¥2,420', 'À la carte', 'ask', 'no', 'Official menu.', 'risotto'),
      it('国産牛のほほ肉の煮込み', '', 'Braised Japanese beef cheek', '¥4,290', 'Main', 'ask', 'no', 'Official menu.', 'beef_cheek'),
      it('仔羊のロースト 粒マスタードのソース', '', 'Roast lamb with grain-mustard sauce', '¥4,400', 'Main', 'ask', 'no', 'Official menu.', 'lamb_roast'),
      it('お任せコース料理', '', 'Omakase course (from two people)', '¥6,600', 'Course', 'ask', 'no', 'Official menu.', 'omakase_course'),
      it('ランチ', '', 'Le Déjeuner lunch: salad, potage, meat or fish, dessert, house bread, coffee or tea', '¥2,750', 'Lunch', 'no', 'no', 'Official menu (updated 2022); comes with house bread.', 'lunch_dejeuner'),
      it('ガスパッチョ', '', 'Gazpacho (chilled tomato and vegetable soup)', '¥880', 'À la carte', 'ask', 'ask', 'Official menu; no ingredient list.', 'gazpacho'),
    ] }, {
    cuisine: '京都の旬の食材のフランス料理のビストロ (公式サイト)。アラカルト、税込 (2024年8月2日更新): ガスパッチョ880円、自家製田舎風テリーヌ2,090円、天草産岩牡蛎 生1,540円・焼き1,650円、自家製のロースハム2,090円、フォアグラのテリーヌとブリオッシュ4,400円、鱧と万願寺唐辛子のアヒージョ2,200円、鴨茄子のグラタン1,980円 (半分1,100円)、エスカルゴのオーブン焼き2,310円、海の幸のリゾット2,420円、京都産骨付きポークのソテー4,290円、国産牛のほほ肉の煮込み4,290円、仔羊のロースト 粒マスタードのソース4,400円、お任せコース料理 (2名から) 6,600円。ランチ2,750円 (2022年7月7日更新): 本日の色々サラダ、本日のポタージュ、本日のお肉料理またはお魚料理、本日のデザート、自家製パン、コーヒーまたは紅茶。シノンの赤、シャブリ、サンセールなどのワイン、グラスワイン990円、英勲の純米酒880円 (公式サイト)。口コミの料理: 黒板のメニュー、オニオングラタンスープ、自家製ハム、国産のサーロイン (2020年3月)。1,800円のランチ、自家製パンはフォカッチャ、ローズマリー、くるみの3種 (2022年1月)。ランチの Le Dejeuner、Gimpou のカルパッチョ、冷たいきのこのポタージュ、自家製ソーセージ、ババ・オ・ラム (2023年9月)。税抜6,000円、8,000円、10,000円のお任せ、鯛のカルパッチョ、パテ、ガスパッチョ、魚料理、牛ほほ肉の赤ワイン煮、桃のコンポート (2024年8月)。ラムチョップ (2024年9月)。牛ほほ肉の煮込みと田舎風テリーヌ (2024年12月)。鯛とホタテのカルパッチョ、かためのプリン (2025年8月)。',
    neighborhood: '二条城の東、小川押小路。二条城前駅から376m',
    gf_detail: '要確認。ランチには自家製パン、鴨茄子のグラタン、海の幸のリゾット、テリーヌ、ソースの肉料理 (公式のメニュー、2022年と2023年の口コミ)。グルテンやアレルギーの情報はない。',
    vegan_detail: '要確認。ヴィーガンの印のある料理はなく、肉、魚、牡蠣、フォアグラ、チーズの料理が中心 (公式のメニュー)。冷たいトマトと野菜のスープのガスパッチョは材料が書かれておらず、ランチのスープはコンソメやポタージュ (2022年と2023年の口コミ)。',
    notes: '[フレンチ・二条城] 二条城の東、12席の角のビストロ。19歳でフランスに渡ったオーナーシェフがひとりで料理とサービス。テリーヌ、天草産の岩牡蛎、鴨茄子のグラタン、牛ほほ肉の煮込みをアラカルトで、または6,600円からのお任せコース。ディナーは毎晩、ランチは日曜、ほかの日は予約で。',
  });
}

// ================================================================ 割烹料理 福やす
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039927/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kappo_tb26039927_ebisugawa', name: '割烹料理 福やす', category: 'OMNI',
    lat: 35.01497605786242, lng: 135.7573581704649, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tempura, fried yam, grilled nama-fu, ponzu, Saikyo-miso grilled fish and red miso soup with wheat-gluten fu (2024–2026 reviews); no gluten or allergy information on Tabelog.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo (Tabelog lists it as particular about fish) whose courses and lunch sets include sashimi, fugu and miso soups (2023–2026 reviews); no vegan option mentioned.',
    hours_raw: 'Tabelog: every day 11:00–14:00 (L.O. 13:30) and 17:00–22:00 (L.O. food 21:00, drinks 21:30); closed irregularly. Reservations taken (Tabelog). The menu with prices is shown outside (September and November 2024 reviews). Courses (Tabelog): ¥6,800 (7 dishes), ¥8,500 (8 dishes) and ¥13,500 (9 dishes, with Kuroge wagyu), plus hot-pot courses; à la carte also possible (December 2025 review). 16 seats: 6 at the counter, a table for two and two four-seat tables; partitioned rooms for 2–8, tatami and sunken seating (Tabelog); a tatami room at the back for 6–8 looking onto a small garden (October 2023, July 2025 and January 2026 reviews). Children welcome; wheelchair accessible; non-smoking; no parking (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 265 m from Marutamachi subway Stn; about 5 min walk (Tabelog; July 2025 review). Opened 4 August 2023 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori between Karasuma-Oike, Marutamachi and Nijo Castle — 265 m from Marutamachi Stn',
    cuisine: 'Kyoto kappo in a machiya, with a Shoki figure on the roof (November 2024 review). Dinner courses at ¥6,800, ¥8,500 and ¥13,500 (Tabelog) or à la carte. Seen in reviews: a ¥7,000 chicken hot-pot course of white miso soup with beef and root vegetables, sashimi of tuna, horse mackerel and fugu, grilled black cod, the chicken hot pot as tsukune and tataki, udon or zosui to finish and persimmon (December 2024); a fugu course adjusted on request (December 2023); firefly squid and fugu jelly, fatty tuna sashimi, fried yam with yuzu, clay-pot rice with sea bream, fuki and kinome and house sesame sorbet (March 2025); cod and salmon-roe custard, simmered conger eel, a small hot pot, lily-bulb dumpling, salt-grilled Kyoto red chicken, fugu with ponzu, grilled nama-fu and fried pork fillet (December 2025); new-ginger rice to finish (May 2026). Lunch gozen with a hassun of obanzai: fried conger eel (August 2023), sweetfish and vegetable tempura (July 2024), gozen of the day with shrimp kakiage ¥1,850 (November 2024), Saikyo-yaki gozen ¥2,100 and shrimp tempura gozen ¥2,000 (July 2025), a tuna seafood bowl (August 2025), chicken and vegetable tempura (November 2025). Reviewers paid ¥1,000–3,000 at lunch and ¥8,000–15,000 at dinner (2024–2026).',
    website: null, gmaps: gm('割烹料理 福やす 京都 夷川通 花立町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kappo · Ebisugawa] A sixteen-seat machiya kappo by Ebisugawa-dori, opened in 2023: lunch gozen of tempura or grilled fish with a lacquer box of obanzai for about ¥2,000, and dinner courses from ¥6,800 with fish, fugu and winter hot pots, or à la carte. A counter, tatami rooms and a small garden.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 4 August 2023 (Tabelog). A May 2025 reviewer who had been head chef at a Kyoto restaurant more than ten years earlier wrote that the owner had cooked the simmered dishes there before opening this place. A December 2025 reviewer gave the owner\'s age as 45, quiet at work in a relaxed room; earlier reviewers found the chef cheerful (October 2023) and attentive, swapping a dessert on request (September 2024). An August 2023 reviewer appreciated the owner\'s stance of not leaning on gourmet sites, so that regulars do not find it hard to get in.',
      philosophy: null,
      specialty: 'Lunch gozen with hassun of obanzai; seasonal kappo courses; chicken hot pot in winter.',
      anecdotes: [
        { text: 'A diner who held a year-end party here in December 2024 took the staff\'s recommendation of the ¥7,000 chicken hot-pot course and found the generous portions a challenge for a fifty-something, finishing with a small serving of thin udon.', source: R + 'B470571562/' },
        { text: 'In May 2025 a former head chef dropped in for lunch alone; the owner, a former colleague not seen for about eight years, looked surprised and then broke into a big smile.', source: R + 'B515504043/' },
        { text: 'A March 2025 first-timer shared sake and takikomi gohan passed along by the regulars at the counter.', source: R + 'B503786585/' },
        { text: 'On a hot July 2025 day a diner squeezed in a ¥2,100 Saikyo-yaki gozen of flounder before going back to hospital for afternoon tests.', source: R + 'B509810495/' },
      ],
      japanese_sources_summary: '食べログ: 割烹料理 福やす、日本料理、中京区夷川通衣棚東入花立町274、丸太町駅から265m。毎日 11:00〜14:00 (L.O. 13:30)、17:00〜22:00 (L.O. 料理21:00、ドリンク21:30)、不定休。予約可、カード可、PayPay、電子マネー不可、16席 (カウンター6席)、仕切りのある個室 (2〜8名)、座敷、掘りごたつ、車椅子可、禁煙、子ども可、駐車場なし、魚にこだわる。オープン 2023年8月4日。コース6,800円 (7品)、8,500円 (8品)、黒毛和牛の入る13,500円 (9品)、鍋のコースも。口コミ (2023〜2026年、英語): 町家の割烹、屋根に Shoki の像、奥の座敷から小さな庭、昼は八寸のおばんざいのつく御膳 (1,850〜2,100円)、夜はふぐ、鶏鍋のコース7,000円、土鍋ごはん、店主は45歳 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B470571562/', R + 'B474438351/', R + 'B485905638/', R + 'B496810094/', R + 'B503786585/', R + 'B509810495/', R + 'B511081816/', R + 'B515146613/', R + 'B515504043/', R + 'B516507446/', R + 'B520443183/', R + 'B531368006/'] },
    cultural_comfort: { level: 'japanese', note: 'A Japanese kappo of regulars; no English menu noted. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通衣棚東入花立町274',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with courses; reviews dated January and May 2026.' },
    pin_source: `Tabelog ${TB} (35.014976, 135.757358); nearest record kyoto_focacceria_chucho (花立町271) about 23 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B470571562/', R + 'B496810094/', R + 'B509810495/'],
    price_note: 'Course prices from Tabelog (seen November 2026); lunch prices from 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course, 7 dishes', '¥6,800', 'Course', 'ask', 'no', 'Tabelog.', 'course_6800'),
      it('', '', 'Course, 8 dishes', '¥8,500', 'Course', 'ask', 'no', 'Tabelog.', 'course_8500'),
      it('', '', 'Course, 9 dishes with Kuroge wagyu', '¥13,500', 'Course', 'ask', 'no', 'Tabelog.', 'course_13500'),
      it('', '', 'Chicken hot-pot course', '¥7,000', 'Course', 'ask', 'no', 'December 2024 review.', 'tori_nabe_course'),
      it('', '', 'Gozen of the day (with hassun of obanzai)', '¥1,850', 'Lunch', 'ask', 'no', 'November 2024 review.', 'higawari_gozen'),
      it('', '', 'Saikyo-yaki gozen', '¥2,100', 'Lunch', 'ask', 'no', 'July 2025 review.', 'saikyoyaki_gozen'),
      it('', '', 'Shrimp tempura gozen', '¥2,000', 'Lunch', 'no', 'no', 'July 2025 review; battered.', 'ebiten_gozen'),
    ] }, {
    cuisine: '町家の京都の割烹、屋根に Shoki の像 (2024年11月の口コミ)。夜はコース6,800円、8,500円、13,500円 (食べログ) か一品料理。口コミの料理: 7,000円の鶏鍋のコース、牛肉と根菜の白味噌の椀、まぐろとあじとふぐの刺身、銀だらの焼き物、つくねとたたきの鶏鍋、しめのうどんか雑炊、柿 (2024年12月)。好みに合わせたふぐのコース (2023年12月)。ホタルイカとふぐの先付、トロの刺身、柚子の香る山芋の揚げ物、鯛とふきと木の芽の土鍋ごはん、自家製のごまのシャーベット (2025年3月)。鱈といくらの茶碗蒸し、穴子の煮物、小鍋、百合根の団子、鶏の塩焼き、ふぐのポン酢、焼き生麩、豚ヒレの揚げ物 (2025年12月)。しめの新生姜ごはん (2026年5月)。昼は八寸のおばんざいのつく御膳: 穴子の揚げ物 (2023年8月)、鮎と野菜の天ぷら (2024年7月)、えびのかき揚げの日替わり御膳1,850円 (2024年11月)、西京焼き御膳2,100円とえび天御膳2,000円 (2025年7月)、まぐろの海鮮丼 (2025年8月)、鶏と野菜の天ぷら (2025年11月)。口コミでは昼ひとり1,000〜3,000円、夜8,000〜15,000円 (2024〜2026年)。',
    neighborhood: '夷川通、烏丸御池と丸太町と二条城のあいだ。丸太町駅から265m',
    gf_detail: '要確認。天ぷら、山芋の揚げ物、焼き生麩、ポン酢、西京焼き、麩の入る赤だし (2024〜2026年の口コミ)。食べログにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚にこだわる割烹 (食べログ) で、コースも昼の御膳も刺身、ふぐ、味噌汁が入る (2023〜2026年の口コミ)。ヴィーガンの対応は書かれていない。',
    notes: '[割烹・夷川通] 夷川通の町家の16席の割烹、2023年開店。昼は天ぷらや焼き魚に漆の箱のおばんざいがつく御膳がおよそ2,000円。夜は6,800円からのコースで魚、ふぐ、冬は鍋、一品料理も。カウンター、座敷、小さな庭。',
  });
}

save();
