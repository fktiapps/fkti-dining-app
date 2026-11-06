// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 20.
//   + 米々庵 Maimai An (late-night onigiri counter in Gion, to 4 a.m.)
//   + Common Well (Melbourne-style café of HOTEL RINGS KYOTO, Sakaimachi Rokkaku)
//   + 鳥彌三 Tori Yasa (mizutaki house since 1788 by the Kamo River)
//   + BRON RONNERY (Kyoto-style French in the hotel THE SCREEN, near the Imperial Palace)
//   - skip 26029396 スプリングバレーブルワリー 京都 (sub-brand of a large parent)
//   Same-name counts first (2026-11-05): 米々庵 — one; Common Well — one; 鳥彌三 — one ("Tori yasa" in Kanagawa is 鳥弥三,
//   a different yakitori shop); BRON RONNERY — one. Neither hotel (HOTEL RINGS KYOTO, THE SCREEN) has a record in data,
//   so their restaurants are drafted.
//   Taken on 2026-11-05: `next core 200` gave 米々庵 26013442 and Common Well 26036506; `next notable 200` gave Spring Valley
//   Brewery (skipped), then 鳥彌三 26000764 and BRON RONNERY 26005684. None is in data/kyoto.json: grep by name and address
//   (富永町 ゴールドビル, 甲屋町393, 斉藤町136, 下御霊前町640-1) found none. Service charges per Tabelog's Japanese original:
//   Common Well 「サービス料、チャージ料なし」; 米々庵, 鳥彌三, BRON RONNERY none listed (BRON RONNERY's private room ¥1,100).
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029396', 'sub-brand of a large parent: Spring Valley Brewery is the craft-beer brand of Kirin Brewery, with brewpubs in Tokyo, Kyoto and elsewhere.');

// ================================================================ 米々庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '04:00']);
  put({
    id: 'kyoto_maimaian_gion', name: '米々庵 (Maimai An)', category: 'OMNI',
    lat: 35.00437, lng: 135.775311, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The onigiri themselves are rice, but fillings, oden, miso soups and many side dishes use soy and dashi, and there are fried dishes (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as a whole: most fillings are fish or meat, and the soups and oden use dashi (2024–26 reviews). A plain "shiro" onigiri exists — ask.',
    hours_raw: '19:00–4:00; closed Sunday and public holidays (Tabelog). Reservations accepted; fills up after midnight (Tabelog; September 2025). 13 seats at an L-shaped counter (Tabelog; January 2026). Smoking allowed (Tabelog). Cards (JCB, AMEX, Diners only); no e-money or QR (Tabelog). East of Hanamikoji, Gion; 322 m from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, east of Hanamikoji — 322 m from Gion-Shijo Stn',
    cuisine: 'Late-night onigiri counter with izakaya dishes; onigiri of Uonuma Koshihikari rice and Echigo water (official site; 2024–26 reviews) · small onigiri, about 20 fillings — plain "shiro", salmon, mentaiko, simmered beef, ikura, horse mackerel with sansho, anago, chicken curry, ume — ¥150 each (March and May 2024) · dashimaki ¥500, grilled gyoza ¥500, red miso soup ¥400 (March 2024); pork miso soup, clam miso soup, sake-lees soup (2024–25 reviews) · winter oden, five pieces ¥1,000; chicken breast and cheese katsu ¥600 (November 2025) · sashimi platter, steamed clams in sake, fried small potatoes with minced-meat sauce, agedashi tofu, miso-stir-fried offal, beef tendon (2024–25 reviews)',
    website: 'http://maimaian.com/', gmaps: gm('米々庵 祇園 おにぎり'), menu_url: null,
    notes: "[Onigiri & izakaya · Gion, rice balls till 4 a.m.] A small L-shaped counter east of Hanamikoji where Gion's night ends: bite-size onigiri of Uonuma Koshihikari — about 20 fillings at around ¥150 each — with red miso or pork miso soup, dashimaki and, in winter, oden. Come early for drinks and sashimi, or after midnight when it fills up. Smoking allowed. 19:00–4:00, closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Master behind the counter (unnamed)'], origin: null,
      background: 'Per the official site: onigiri made with Uonuma Koshihikari rice and water from Echigo. Reviewers describe a quiet master shaping the rice balls at the counter (November 2025), many regulars and a welcome for travellers (May 2024), and a shop open for several years (April 2025).',
      philosophy: null, specialty: 'Small onigiri; late-night side dishes.',
      anecdotes: [
        { text: 'A December 2023 diner loved the onigiri but found the fried taro too salty.', source: R + 'B477624942/' },
        { text: '"Isn’t JPY 150 for an onigiri incredibly cheap? I wonder if prices have gone up due to inflation now..." — March 2024.', source: R + 'B527460909/' },
        { text: 'A September 2025 diner arrived about 1 a.m. and was seated at once; within 30 minutes the counter was full.', source: R + 'B514436979/' },
      ],
      japanese_sources_summary: '公式サイト (maimaian.com): 京都 祇園 米々庵 (まいまいあん)、魚沼産こしひかりと越後の名水を使ったおにぎり。食べログ: 日本料理・おにぎり、東山区花見小路富永町東入ル ゴールドビル1F、祇園四条駅から322m、月〜土 19:00〜翌4:00、日曜・祝日休み、予約可、13席、喫煙可、カード可 (JCB・AMEX・Diners)。口コミ (2023年12月〜2026年1月、英語): 小さなおにぎり約20種、1個150円 (2024年)、だし巻き500円、赤だし400円、冬のおでん5品1,000円、鶏むねのチーズカツ600円、L字のカウンター、深夜に満席、里芋の唐揚げが塩辛かったという声。',
      confidence: 'medium', sources: [TB, 'http://maimaian.com/', R + 'B296198989/', R + 'B436440845/', R + 'B477624942/', R + 'B484795900/', R + 'B495612314/', R + 'B497068505/', R + 'B500547738/', R + 'B505196644/', R + 'B514436979/', R + 'B517676594/', R + 'B517981401/', R + 'B527460909/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order onigiri by filling at the counter; JCB, AMEX or Diners only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路富永町東入ル ゴールドビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.004370, 135.775311); the address has no lot number and GSI resolves only the town 京都府京都市東山区富永町 (94 m away), so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527460909/', R + 'B484795900/', R + 'B296198989/'],
    price_note: 'Prices from March 2024–November 2025 reviews; may have risen since.', last_checked: TODAY, items: [
      it('', '', 'Small onigiri (about 20 fillings), each', '¥150', 'Onigiri', 'ask', 'ask', 'March and May 2024.', 'onigiri'),
      it('', '', 'Dashimaki', '¥500', 'Side dishes', 'ask', 'no', 'March 2024.', 'dashimaki'),
      it('', '', 'Red miso soup', '¥400', 'Soup', 'ask', 'no', 'March 2024.', 'akadashi'),
      it('', '', 'Oden, five pieces (winter)', '¥1,000', 'Side dishes', 'ask', 'no', 'November 2025.', 'oden_5'),
    ] }, {
    cuisine: '深夜のおにぎりと居酒屋料理のカウンター。魚沼産こしひかりと越後の名水のおにぎり (公式サイト、2024〜2026年の口コミ)・小さなおにぎり約20種 (白、鮭、明太子、牛肉、いくら、鯵の山椒、穴子、チキンカレー、梅など) 1個150円 (2024年3月・5月)・だし巻き500円、焼き餃子500円、赤だし400円 (2024年3月)。豚汁、あさりの味噌汁、粕汁 (2024〜2025年の口コミ)・冬のおでん5品1,000円、鶏むねのチーズカツ600円 (2025年11月)・刺身の盛り合わせ、あさりの酒蒸し、小芋の唐揚げのそぼろあん、揚げ出し豆腐、ホルモンの味噌炒め、牛すじ (2024〜2025年の口コミ)',
    neighborhood: '祇園、花見小路の東。祇園四条駅から322m',
    gf_detail: '要確認。おにぎり自体は米だが、具やおでん、味噌汁、多くの料理に醤油と出汁を使い、揚げ物もある (2024〜2026年の口コミ)。',
    vegan_detail: '全体としてはヴィーガン不可。具の多くは魚か肉で、汁物とおでんは出汁 (2024〜2026年の口コミ)。白のおにぎりはあるので確認を。',
    notes: '[おにぎり・居酒屋・祇園、朝4時までのおにぎり] 花見小路の東の小さな L 字のカウンター。祇園の夜の締めの店で、魚沼産こしひかりのひと口おにぎりは具が約20種、1個150円ほど。赤だしや豚汁、だし巻き、冬はおでんと。早い時間は刺身で一杯、深夜0時過ぎは満席になる。喫煙可。19時〜翌4時、日曜休み。',
  });
}

// ================================================================ Common Well
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036506/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '22:00']);
  put({
    id: 'kyoto_common_well', name: 'Common Well', category: 'OMNI',
    lat: 35.006549, lng: 135.763449, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Breakfast plates come with toast and baguette, and the cakes and tarts are baked; no gluten information (2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'A September 2026 diner found a solid vegan menu, with vegan butter for the bread; soy and oat milk are offered for coffee (December 2024; September 2026).',
    hours_raw: '7:00–22:00 daily, open year-round: breakfast 7:00–11:30, lunch 11:30–15:00, café 15:00–18:00, dinner 18:00–22:00 (last orders food 20:30, drinks 21:30) (Tabelog). Reservations accepted (Tabelog). No service charge or cover (Tabelog, Japanese text: 「サービス料、チャージ料なし」). 33 seats — counter, a big shared table, tables and a low table — and a terrace; private hire up to 20 (Tabelog; June 2026). Cards and IC cards (Tabelog); a September 2026 diner also paid by QR. The café of HOTEL RINGS KYOTO, next door; on Sakaimachi-dori south of Rokkaku, near Nishiki Market; 7 min from Karasuma Stn (Tabelog; 2026 reviews). Opened 28 September 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi Rokkaku, near Nishiki Market — 7 min from Karasuma Stn',
    cuisine: 'Melbourne-style specialty coffee — beans, extraction, milk and foam made to order — produced by a barista who twice won the world latte-art championship and opened ten cafés in Melbourne (official site) · flat white, long black, white flat, cold brew, decaf, soy and oat milk, charcoal latte ¥650, fig cream latte (2024–26 reviews) · breakfast: regular plate of salad, poached egg, bacon and sausage, minestrone, toast, baguette and yogurt with a drink ¥2,300 (August–September 2026) · carrot cake ¥550, nut tart, chocolate gâteau; apple-mango smoothie (2026 reviews; Tabelog) · lunch, afternoon tea and dinner menus (Tabelog)',
    website: 'https://www.hotel-rings.com/cafe/', gmaps: gm('Common Well 京都 堺町'), menu_url: null,
    notes: "[Café · Nishiki area, Melbourne coffee from 7 a.m. to 10 p.m.] The café of HOTEL RINGS KYOTO, a bright space round a big wooden table near Nishiki Market, serving Melbourne-style coffee made to your spec — flat white, long black, decaf, soy or oat milk — under a world latte-art champion's direction. A hearty breakfast plate (¥2,300) from 7:00, cakes all day, and a calm late café until 22:00. A vegan menu too. No service charge.",
    chef_bio: { chef_name: null, roles: ['Hotel café; coffee produced by a champion barista (official site)'], origin: null,
      background: 'Per the official site: the café of HOTEL RINGS KYOTO, with Melbourne-style specialty coffee produced by a barista who twice won the world latte-art championship, placed at world championships five years running, and produced ten cafés in Melbourne over seven years. Opened 28 September 2021 (Tabelog).',
      philosophy: null, specialty: 'Melbourne-style coffee; breakfast plates.',
      anecdotes: [
        { text: 'An August 2026 diner liked the breakfast plate but found the moromi-miso salad dressing a little salty.', source: R + 'B533288901/' },
        { text: 'A September 2026 diner found the fig cream latte low on fig flavour but enjoyable for the mascarpone and espresso.', source: R + 'B536489176/' },
        { text: 'A latte and chocolate gâteau came to about ¥1,200 — good value for Kyoto, an October 2026 diner felt.', source: R + 'B538063036/' },
      ],
      japanese_sources_summary: '公式サイト (hotel-rings.com/cafe): メルボルンスタイルのスペシャリティコーヒー、豆の種類や抽出方法、ミルクの量や温度、泡の質感までカスタマイズ、ラテアート世界大会で2度優勝し、メルボルンで7年間に10店舗のカフェをプロデュースしたバリスタ。食べログ: カフェ、中京区堺町通六角下る甲屋町393、烏丸駅から徒歩7分、毎日7:00〜22:00 (朝食7:00〜11:30、ランチ11:30〜15:00、カフェ15:00〜18:00、ディナー18:00〜22:00)、年中無休、予約可、サービス料・チャージ料なし、33席、貸切20名まで、カード・交通系IC可、2021年9月28日オープン。口コミ (2024年12月〜2026年10月、英語): フラットホワイト、デカフェ、豆乳とオーツミルク、レギュラープレート2,300円、キャロットケーキ、ヴィーガンメニュー、海外の客が多い、ドレッシングがやや塩辛いという声。',
      confidence: 'medium', sources: [TB, 'https://www.hotel-rings.com/cafe/', R + 'B496563235/', R + 'B530535827/', R + 'B532110769/', R + 'B532112258/', R + 'B533288901/', R + 'B535048596/', R + 'B535598596/', R + 'B536410024/', R + 'B536489176/', R + 'B536819893/', R + 'B537747359/', R + 'B538063036/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order coffee to your spec at the counter; cards and IC cards; many international guests.' },
    safety: { ...SAFETY0, positives: [{ text: 'A September 2026 diner found a solid vegan menu, with vegan butter served for the bread.', source: R + 'B535598596/', verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通六角下る甲屋町393',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official hotel site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006549, 135.763449); cross-checked: GSI 京都府京都市中京区甲屋町393番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535048596/', TB],
    price_note: 'Prices from 2026 reviews and Tabelog review summaries; no service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Regular breakfast plate with a drink', '¥2,300', 'Breakfast', 'no', 'no', 'August–September 2026.', 'regular_plate'),
      it('', '', 'Carrot cake', '¥550', 'Cakes', 'no', 'ask', 'Tabelog review.', 'carrot_cake'),
      it('', '', 'Charcoal latte', '¥650', 'Coffee', '', 'ask', 'Tabelog review; soy or oat milk available.', 'charcoal_latte'),
    ] }, {
    cuisine: '豆、抽出、ミルク、泡まで好みに合わせるメルボルンスタイルのスペシャリティコーヒー。ラテアート世界大会で2度優勝し、メルボルンで10店舗のカフェを手がけたバリスタのプロデュース (公式サイト)・フラットホワイト、ロングブラック、ホワイトフラット、コールドブリュー、デカフェ、豆乳とオーツミルク、チャコールラテ650円、いちじくのクリームラテ (2024〜2026年の口コミ)・朝食: サラダ、ポーチドエッグ、ベーコンとソーセージ、ミネストローネ、トーストとバゲット、ヨーグルト、飲み物のレギュラープレート2,300円 (2026年8〜9月)・キャロットケーキ550円、ナッツのタルト、ガトーショコラ、アップルマンゴーのスムージー (2026年の口コミ、食べログ)・ランチ、アフタヌーンティー、ディナー (食べログ)',
    neighborhood: '堺町六角、錦市場の近く。烏丸駅から徒歩7分',
    gf_detail: '要確認。朝食のプレートにはトーストとバゲットが付き、ケーキやタルトは焼き菓子。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '2026年9月の客によれば、ヴィーガンメニューがしっかりあり、パンにはヴィーガンバター。コーヒーには豆乳とオーツミルクも (2024年12月、2026年9月)。',
    notes: '[カフェ・錦近く、朝7時から夜10時までのメルボルンコーヒー] HOTEL RINGS KYOTO のカフェ。錦市場の近く、大きな木のテーブルを囲む明るい店で、ラテアートの世界王者のプロデュースによるメルボルンスタイルのコーヒーを好みどおりに: フラットホワイト、ロングブラック、デカフェ、豆乳やオーツミルク。7時からしっかりした朝食プレート (2,300円)、一日中ケーキ、22時まで落ち着いた夜カフェにも。ヴィーガンメニューあり。サービス料なし。',
  });
}

// ================================================================ 鳥彌三
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000764/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_toriyasa', name: '鳥彌三 (Tori Yasa)', category: 'OMNI',
    lat: 35.00207, lng: 135.770328, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mizutaki in a chicken-bone broth with house-made ponzu and grilled mochi, finished as zosui or chicken soba; courses add sushi and fried fish (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken mizutaki house; the broth is boiled from chicken bones (Tabelog).',
    hours_raw: 'Lunch 11:00–16:00 (last food order 14:30) and dinner 17:00–22:00 (last food order 20:00); closed Tuesday and Wednesday (Tabelog; official site). Reservation only (Tabelog); a same-day set menu may be offered on arrival (October 2026). Not suitable for guests under 18 (Tabelog). Lunch ¥4,800 with one drink — chicken soba or chicken zosui after broth and appetizers (May and September 2026); dinner mizutaki courses about ¥15,000–30,000 a head (2026 reviews). 30 seats with a counter facing a small garden, private rooms for 2–8, and riverside seating by the Kamo in summer (Tabelog; May–July 2026). Non-smoking; cards (Tabelog). English-speaking staff (October 2026). By the Kamo River south of Shijo; 3 min from Kyoto Kawaramachi and Gion-Shijo Stns (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Kamo River, south of Shijo — 3 min from Gion-Shijo Stn',
    cuisine: 'Mizutaki house founded in 1788 in a building that is a registered tangible cultural property (official site; Tabelog) · white chicken broth boiled at high heat from bones, with bone-in chicken, handmade grilled mochi and ponzu, finished with zosui (Tabelog, shop text) · dinner courses: chicken-skin crackers of Daisen chicken, simmered eel, chicken liver, chawanmushi, grilled barracuda sushi, fried amadai with karasumi, mizutaki and zosui, pudding (October 2026); crisp grilled chicken skin, broth with quail egg (August 2026) · lunch ¥4,800: broth, appetizers and chicken soba with chicken, breast and duck chashu, or chicken zosui, with a drink (May–September 2026)',
    website: 'https://toriyasa.jp/', gmaps: gm('鳥彌三 水炊き 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Mizutaki · Kamo riverside, since 1788] A mizutaki house founded in 1788 by the Kamo River south of Shijo, in a heritage building with a garden-view counter, private rooms and summer riverside seats. The rich white chicken broth, boiled from bones, is the point — sip it first, cook the chicken in it, and finish with zosui. Lunch, newly added after a recent renovation, is ¥4,800 with a drink; dinner courses run about ¥15,000–30,000. Reservation only; adults only. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Long-running family house (unnamed); an October 2026 diner heard it has passed to the ninth generation'], origin: null,
      background: 'Per the official site: founded in 1788, it began as a poultry shop opened by the first-generation 彌助; the second generation, 彌三郎, began serving chicken dishes upstairs, and the building has kept its appearance since the founding. Tabelog’s shop text says the mizutaki was loved by Sakamoto Ryoma. Reviewers note a recent renovation and the start of lunch (May and July 2026), and an October 2026 diner heard the business had passed to the ninth generation.',
      philosophy: null, specialty: 'Mizutaki in a white chicken broth; zosui.',
      anecdotes: [
        { text: 'A July 2026 diner in a yukata, kept off the riverside by the weather, ate the mizutaki in a cool tatami room; the broth is simmered for three days.', source: R + 'B532023563/' },
        { text: 'A September 2026 diner contrasted it with Hakata mizutaki: this one uses chicken breast.', source: R + 'B535905751/' },
        { text: 'A July 2026 lunch guest was served iced hojicha in a wine glass and a taste of the broth before choosing soba or zosui (Japanese review).', source: R + 'B533006209/' },
      ],
      japanese_sources_summary: '公式サイト (toriyasa.jp): 創業天明八年 (1788年)、木屋町の水炊き料亭、初代彌助の「かしわ屋」が起源、二代目彌三郎が店でさばいた鶏で二階で鶏料理を出し始めた、創業以来変わらない建物、昼 11:00〜16:00・夜 17:00〜22:00。食べログ: 水炊き・鶏料理・日本料理、下京区西石垣通四条下ル斉藤町136、京都河原町駅・祇園四条駅から徒歩3分、火・水曜休み、完全予約制、18歳未満は不向き、30席、個室 2〜8名、夏は納涼の席、禁煙、カード可、登録有形文化財、Sakamoto Ryoma が愛した水炊き、白濁スープ、焼き餅とポン酢は自家製、締めの雑炊。口コミ (2026年5〜10月): 昼4,800円 (鶏そばか雑炊、1ドリンク)、改装してランチを開始、川沿いの席、Daisen 鶏の皮せんべい、夜のコース、九代目に代替わりしたという声、英語が通じる。',
      confidence: 'medium', sources: [TB, 'https://toriyasa.jp/', R + 'B528105430/', R + 'B528368401/', R + 'B529010809/', R + 'B531174566/', R + 'B532023563/', R + 'B532305586/', R + 'B533006209/', R + 'B533746080/', R + 'B535473912/', R + 'B535905751/', R + 'B536698389/', R + 'B536983413/'] },
    cultural_comfort: { level: 'none_needed', note: 'Book ahead; staff speak good English and explain the course; adults only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西石垣通四条下ル斉藤町136',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002070, 135.770328); cross-checked: GSI 京都府京都市下京区斎藤町136番地 (lot, via the 斎 variant of 斉藤町) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528105430/', R + 'B535473912/'],
    price_note: 'Lunch price from May and September 2026 reviews; dinner courses about ¥15,000–30,000 a head in 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: broth, appetizers, chicken soba or zosui, one drink', '¥4,800', 'Lunch', 'ask', 'no', 'May and September 2026.', 'lunch_set'),
      it('', '', 'Mizutaki dinner course with zosui', 'about ¥15,000–30,000', 'Dinner', 'ask', 'no', '2026 reviews.', 'mizutaki_course'),
    ] }, {
    cuisine: '1788年創業、登録有形文化財の建物の水炊きの店 (公式サイト、食べログ)・鶏ガラを強火で炊いた白濁スープに骨付きの鶏、自家製の焼き餅とポン酢、締めは雑炊 (食べログの店の紹介)・夜のコース: Daisen の鶏の皮せんべい、鰻の煮物、鶏レバー、茶碗蒸し、かますの焼き寿司、甘鯛のからすみ揚げ、水炊きと雑炊、プリン (2026年10月)。パリパリの鶏皮焼き、うずらの卵を溶いたスープ (2026年8月)・昼4,800円: スープ、前菜、親鶏・胸・鴨のチャーシューの鶏そばか鶏雑炊、飲み物付き (2026年5〜9月)',
    neighborhood: '四条の南、川沿いの西石垣。祇園四条駅から徒歩3分',
    gf_detail: '要確認。鶏ガラスープの水炊きに自家製ポン酢と焼き餅、締めは雑炊か鶏そば。コースには寿司や揚げ物も (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の水炊きの店で、スープは鶏ガラを炊く (食べログ)。',
    notes: '[水炊き・川沿い、1788年から] 四条の南、川沿いの西石垣で1788年に創業した水炊きの店。登録有形文化財の建物に、庭を望むカウンター、個室、夏は川沿いの席。主役は鶏ガラを炊いた白濁スープで、まずスープを味わい、鶏を炊いて、雑炊で締める。最近の改装で始まった昼は飲み物付き4,800円、夜のコースは1人15,000〜30,000円ほど。完全予約制、18歳未満は不向き。火・水曜休み。',
  });
}

// ================================================================ BRON RONNERY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005684/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_bron_ronnery', name: 'BRON RONNERY', category: 'MOM_AND_POP',
    lat: 35.017133, lng: 135.767069, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the restaurant asks for allergies and dietary needs at reservation (Tabelog). Courses include bread with refills, soups and desserts (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking (Tabelog). Courses feature Kyoto vegetables but are built around fish and meat (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 13:30) and dinner 17:30–22:00 (last order 20:00), daily (Tabelog). Reservations accepted; give allergies and dietary needs when booking (Tabelog). Dinner "Menu Ronronne" of 11 dishes ¥15,730 (Tabelog); lunch courses about ¥3,000–5,000, a 5-dish short course, and a fish-and-meat lunch (2026 reviews). Private room with a sunken kotatsu and garden view for 4, ¥1,100 (Tabelog; August 2026). 40 seats (36 at tables) on the basement floor of the hotel THE SCREEN (Tabelog; June 2026). Cards and PayPay (Tabelog). Near the Imperial Palace; 5 min from Jingu-Marutamachi and Marutamachi Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi near the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'Kyoto-style French served on distinctive tableware, eaten with chopsticks, in a room painted by the artist Tetsuei Nakamura (Tabelog, shop text) · dinner "Menu Ronronne" of 11 dishes ¥15,730 by chef Yasumasa Nakahira (Tabelog) · lunch courses: terrine with salad, seasonal soups such as chilled corn or pumpkin potage, fish from the Kyoto Central Market such as pan-seared sea bream, Miyazaki beef or outside skirt, dessert trio with coffee (June–September 2026) · squid tartare, fried conger eel (June 2026) · birthday message plates drawn by the pastry chef (June and August 2026)',
    website: 'https://www.screen-hotel.jp/restaurant', gmaps: gm('BRON RONNERY THE SCREEN 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[French · near the Imperial Palace, Kyoto-style French in a design hotel] The basement restaurant of the design hotel THE SCREEN, where chef Yasumasa Nakahira serves Kyoto-vegetable French to eat with chopsticks, in a room painted by Tetsuei Nakamura. Lunch courses (about ¥3,000–5,000) are good value; the 11-dish dinner is ¥15,730. Book the garden-view kotatsu room (¥1,100) and ask for a message plate — the pastry work is the talk of reviews. Service can be patchy. Open daily.",
    chef_bio: { chef_name: 'Yasumasa Nakahira', roles: ['Chef (Tabelog, set-menu text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Kyoto-style French in a Japanese space painted by the artist Tetsuei Nakamura, with seasonal ingredients on distinctive tableware, eaten with chopsticks; the 11-dish Menu Ronronne is by chef Yasumasa Nakahira. The hotel THE SCREEN is run by 株式会社トレーダー愛 (official site). Reviewers single out a pastry chef for the dessert plates (August 2026).',
      philosophy: null, specialty: 'Kyoto-vegetable French courses; dessert plates.',
      anecdotes: [
        { text: 'A July 2026 diner had to point out that the bread never reached one of three guests.', source: R + 'B531765536/' },
        { text: 'A June 2026 diner liked the seasoning and the tender steak but found the portions small for men.', source: R + 'B530591900/' },
        { text: 'A June 2026 diner, there for a birthday, called the message plate the best artwork ever seen on one.', source: R + 'B530934784/' },
      ],
      japanese_sources_summary: '公式サイト (screen-hotel.jp): ホテル THE SCREEN、運営会社は株式会社トレーダー愛。食べログ: フレンチ・ステーキ、中京区下御霊前町640-1 THE SCREEN 内、神宮丸太町駅・丸太町駅から徒歩5分、昼 11:30〜15:00 (L.O. 13:30)・夜 17:30〜22:00 (L.O. 20:00)、予約可、アレルギーは予約時に、夜の Menu Ronronne 11品15,730円 (シェフ Yasumasa Nakahira)、40席、掘りごたつの個室 (4名、1,100円)、カード・PayPay 可、画家 Tetsuei Nakamura の空間で箸で食べる京風フレンチ。口コミ (2026年6〜10月、英語): ホテルの地下、昼のコース約3,000〜5,000円、京都中央市場の魚、Miyazaki の牛肉、メッセージプレートが見事、パンが一人に来なかったという声、量が少ないという声。',
      confidence: 'medium', sources: [TB, 'https://www.screen-hotel.jp/', R + 'B530092900/', R + 'B530591900/', R + 'B530934784/', R + 'B531765536/', R + 'B534147206/', R + 'B534503058/', R + 'B535383314/', R + 'B535711450/', R + 'B536867819/', R + 'B537924101/', R + 'B538103973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; give allergies when booking; cards and PayPay.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks guests to give food allergies and dietary needs when booking.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下御霊前町640-1 THE SCREEN 内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official hotel site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017133, 135.767069); cross-checked: GSI 京都府京都市中京区下御霊前町640番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Dinner course price from the Tabelog set-menu page (tax included); lunch range from 2026 reviews; private room fee from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Menu Ronronne (11 dishes, dinner)', '¥15,730', 'Dinner', 'ask', 'ask', 'Tabelog.', 'menu_ronronne'),
      it('', '', 'Lunch course (appetizer, soup, fish, meat, dessert)', 'about ¥3,000–5,000', 'Lunch', 'ask', 'ask', '2026 reviews.', 'lunch_course'),
      it('', '', 'Private room fee (sunken kotatsu, 4 guests)', '¥1,100', 'Charge', '', '', 'Tabelog.', 'private_room_fee'),
    ] }, {
    cuisine: '画家 Tetsuei Nakamura が描いた空間で、個性ある器に盛り、箸で食べる京風フレンチ (食べログの店の紹介)・夜の Menu Ronronne 11品15,730円、シェフ Yasumasa Nakahira (食べログ)・昼のコース: テリーヌとサラダ、冷たいとうもろこしやかぼちゃのポタージュなど季節のスープ、京都の中央市場の魚 (鯛のポワレなど)、Miyazaki の牛肉やハラミ、デザート3種とコーヒー (2026年6〜9月)・イカのタルタル、穴子のフリット (2026年6月)・パティシエが描く誕生日のメッセージプレート (2026年6月・8月)',
    neighborhood: '御所の近く。丸太町駅から徒歩5分',
    gf_detail: '要確認。アレルギーや食事制限は予約時に伝えること (食べログ)。コースにはおかわりできるパン、スープ、デザートが付く (2026年の口コミ)。',
    vegan_detail: '予約時に確認を (食べログ)。京野菜を使うが、魚と肉が中心のコース (2026年の口コミ)。',
    notes: '[フレンチ・御所近く、デザインホテルの京風フレンチ] デザインホテル THE SCREEN の地下のレストラン。シェフ Yasumasa Nakahira が京野菜のフレンチを、画家 Tetsuei Nakamura が描いた空間で、箸で食べられるように出す。昼のコースは約3,000〜5,000円と割安、夜の11品は15,730円。庭を望む掘りごたつの個室 (1,100円) や、評判のメッセージプレートも。接客にむらがあるという声も。年中無休。',
  });
}

save();
