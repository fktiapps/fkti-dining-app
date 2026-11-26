// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 99.
// Core and notable have nothing left in the lane; rest list, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 本家西尾八ッ橋 清水坂店 — large parent (same ruling as 26027207, 26007170)
//   + Knode (café in an alley near the Imperial Palace; the Kyoto shop of Kanazawa's MORON CAFE team; since December 2025)
//   - 秦家 — no 2025–26 review (one review, September 2019)
//   - ほっかほっか亭 五条西洞院店 — chain (nationwide bento chain)
//   + 和洋割烹 竹泉 (obanzai and kappo counter on Sanjo east of Shirakawa bridge)
//   - パティスリー レ モワノー — retail food shop (takeaway patisserie, opened 2019; no GF/vegan options sourced)
//   + 多幸金 Takokin (oden kappo south of Marutamachi; noren dated Taisho 12 in a reviewer's photo caption)
//   - シャルキュトリー リンデンバーム — retail food shop (takeaway charcuterie, opened 2024 at this address)
//   ~ えびす楽庵 清水販売店 (26022197) — left open for the integrator: a takeaway steamed-bun stand on Kiyomizu-zaka with a May 2025 review; unsure whether the retail ruling covers it
//   - マールブランシュ 清水坂店 — large parent (Roman Life / Malebranche, per the brief)
//   + 吟味屋 菜々色 (izakaya of obanzai, sashimi and sake in an old building at Ayanokoji-Samegai)
//   Brand checks: data/*.json grepped for Knode, MORON, 竹泉, 多幸金, Takokin, 吟味屋, Ginmiya, Dish&Soul — only kz_petra_bake_coffee
//   (Kanazawa) names MORON CAFE; web searches found no other 竹泉 / 多幸金 shops. 吟味屋: the Tabelog remarks give a "2nd store" phone
//   and a March 2026 review mentions a "Kaku" shop nearby — a group of at least two, none in data (flagged).
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017115', 'large parent: 本家西尾八ッ橋 清水坂店 is a shop of the yatsuhashi maker 本家西尾八ッ橋, which lists about a dozen shops (same ruling as 26027207 and 26007170)');
skip('26018051', 'no review in 2025–26: one Tabelog review, from a September 2019 visit');
skip('26035919', 'chain: ほっかほっか亭 is a nationwide bento chain');
skip('26033099', 'retail food shop (Greg 11-07 ruling): パティスリー レ モワノー is a takeaway-only patisserie opened 3 October 2019 (Tabelog); no GF or vegan options sourced');
skip('26041277', 'retail food shop (Greg 11-07 ruling): シャルキュトリー リンデンバーム is a takeaway-only charcuterie and deli, at this address since 7 May 2024 (Tabelog); no GF or vegan options sourced');
skip('26017655', 'large parent: マールブランシュ 清水坂店 is a gift shop of Malebranche (Roman Life), on the brief\'s large-parent list');

// ================================================================ Knode
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044307/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '18:00']);
  put({
    id: 'kyoto_knode_marutamachi', name: 'Knode', category: 'OMNI',
    lat: 35.015492677864096, lng: 135.7636659004657, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Open sandwiches on bakery bread and French toast are wheat (2026 reviews); a March 2026 reviewer had a rice-flour banana cake, but its other ingredients were not given.',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'Limited: a January 2026 reviewer bought a vegan chocolate-chip cookie (¥320) from the baked goods; the breakfasts are egg, bacon and cheese dishes and the cakes are not described as vegan.',
    hours_raw: 'Daily 9:00–18:00 (Tabelog). No reservations (Tabelog). Cashless only — cash not accepted (January and November 2026 reviews); Tabelog lists VISA, e-money and QR. No service charge (Tabelog, original text なし). One order per person to eat in (May 2026 review). Few seats: a counter and tables for four (Tabelog; March 2026 review), and a courtyard terrace with a weeping cherry (January 2026 review). Non-smoking; takeaway (Tabelog). At the end of a narrow alley behind a street sign, 393 m from Marutamachi Stn, near the Imperial Palace (Tabelog; 2026 reviews). Opened 21 December 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi, near the Imperial Palace — 393 m from Marutamachi Stn',
    cuisine: 'Breakfast and café: scrambled-egg open sandwich on Yoshida Bakery bread ¥1,280, French toast with bacon ¥1,280, Americano ¥580, homemade lemonade ¥650 (May 2026); French toast with grapes ¥1,380, onion gratin soup ¥820, hot café latte ¥670 (November 2026); avocado topping on the open sandwich (September 2026); carrot cake with walnuts ¥620, cheesecake ¥620, café latte ¥650 (January and June 2026); rice-flour banana cake with organic bananas and Kenyan drip coffee (March 2026); muffins, café mocha, vegan cookies',
    website: null, gmaps: gm('Knode カフェ 京都 丸太町'), menu_url: null,
    notes: '[Café · Marutamachi] Down a narrow alley near the Imperial Palace, the Kyoto shop of the Kanazawa team behind MORON CAFE: scrambled-egg open sandwiches on Yoshida Bakery bread, French toast and carrot cake, with a small courtyard terrace. About ¥1,000–2,000; cashless only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 21 December 2025 (Tabelog). 2026 reviewers call it the second shop of MORON CAFE, a popular café in Kanazawa, Ishikawa, with the same French toast. The Kanazawa record kz_petra_bake_coffee (PETRA BAKE&COFFEE) calls that shop "the second venture from the team behind the well-loved MORON CAFE in the Nagamachi samurai district", so this may be the team\'s third shop.',
      philosophy: null,
      specialty: 'Scrambled-egg open sandwich; French toast; carrot cake.',
      anecdotes: [
        { text: 'Arriving early on a February 2026 weekday, a diner found one person preparing everything; the scrambled egg and tomato open sandwich took a while but was excellent, though the onion soup came with a big piece of bread rather than croutons and was a little salty.', source: R + 'B522734981/' },
        { text: 'A January 2026 visitor, too full for the carrot cake, picked a vegan cookie on a whim and found the chocolate chips made it.', source: R + 'B520365667/' },
        { text: 'Reviewers in January, October and November 2026 noted many visitors from overseas — about 80% of the customers on one November visit.', source: R + 'B539568842/' },
        { text: 'An October 2026 visitor sat out on the courtyard terrace, though the air-conditioning unit was noisy there.', source: R + 'B537582764/' },
      ],
      japanese_sources_summary: '食べログ: Knode (ノード)、カフェ、中京区、丸太町駅から393m、毎日 9:00〜18:00、予約不可、カウンター席、禁煙、テイクアウト、2025年12月21日オープン。口コミ (2026年、英語): 金沢の人気店 MORON CAFE の2号店、細い路地の奥、坪庭のテラス、Yoshida Bakery のパン、スクランブルエッグのオープンサンド1,280円、ベーコンのフレンチトースト1,280円 (2026年5月)、キャロットケーキ620円、カフェラテ650円 (2026年6月)、米粉のバナナケーキ (2026年3月)、ヴィーガンクッキー320円 (2026年1月)、現金不可。',
      confidence: 'medium', sources: [TB, R + 'B520365667/', R + 'B520594335/', R + 'B522734981/', R + 'B522969146/', R + 'B524460315/', R + 'B524660804/', R + 'B525434361/', R + 'B530037099/', R + 'B531677964/', R + 'B535234488/', R + 'B536351371/', R + 'B537582764/', R + 'B539568842/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (2026 reviews); attentive service at busy times (February 2026 review); cashless payment only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区5-232',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.015493, 135.763666); Tabelog's address 京都府京都市中京区5-232 has no town name; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531677964/', R + 'B539568842/', R + 'B530037099/', R + 'B520365667/'],
    price_note: 'Prices from 2026 reviews (tax included where stated); the November 2026 French toast was ¥1,380 against ¥1,280 in May.', last_checked: TODAY, items: [
      it('', '', 'Scrambled-egg open sandwich', '¥1,280', 'Breakfast', 'no', 'no', 'May 2026 review; avocado topping extra (September 2026).', 'open_sandwich'),
      it('', '', 'French toast (bacon)', '¥1,280', 'Breakfast', 'no', 'no', 'May 2026 review; French toast ¥1,380 in November 2026.', 'french_toast'),
      it('', '', 'Onion gratin soup', '¥820', 'Breakfast', 'no', 'ask', 'November 2026 review.', 'onion_soup'),
      it('', '', 'Carrot cake', '¥620', 'Sweets', 'ask', 'ask', 'June 2026 review.', 'carrot_cake'),
      it('', '', 'Vegan cookie', '¥320', 'Sweets', 'ask', 'vegan', 'January 2026 review.', 'vegan_cookie'),
      it('', '', 'Café latte', '¥650', 'Drinks', 'ask', 'no', 'January and June 2026 reviews; hot latte ¥670 in November 2026.', 'latte'),
    ] }, {
    cuisine: '朝ごはんとカフェ: Yoshida Bakery のパンのスクランブルエッグのオープンサンド1,280円、ベーコンのフレンチトースト1,280円、アメリカーノ580円、自家製レモネード650円 (2026年5月)、ぶどうのフレンチトースト1,380円、オニオングラタンスープ820円、ホットのカフェラテ670円 (2026年11月)、オープンサンドにアボカドのトッピング (2026年9月)、くるみのキャロットケーキ620円、チーズケーキ620円、カフェラテ650円 (2026年1月と6月)、有機バナナの米粉のバナナケーキとケニアのドリップコーヒー (2026年3月)、マフィン、カフェモカ、ヴィーガンクッキー',
    neighborhood: '丸太町、御所の近く。丸太町駅から393m',
    gf_detail: '要確認。パンのオープンサンドとフレンチトーストは小麦 (2026年の口コミ)。米粉のバナナケーキ (2026年3月) はほかの材料が不明。',
    vegan_detail: '少しだけ。焼き菓子のヴィーガンのチョコチップクッキー (320円、2026年1月の口コミ)。朝ごはんは卵、ベーコン、チーズの料理で、ケーキはヴィーガンとは書かれていない。',
    notes: '[カフェ・丸太町] 御所の近く、細い路地の奥。金沢の MORON CAFE のチームの京都の店。Yoshida Bakery のパンのスクランブルエッグのオープンサンド、フレンチトースト、キャロットケーキ、小さな坪庭のテラス。1,000〜2,000円ほど、現金不可。',
  });
}

// ================================================================ 和洋割烹 竹泉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014175/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kappo_tb26014175_sanjo', name: '和洋割烹 竹泉', category: 'OMNI',
    lat: 35.00914766787434, lng: 135.78317549038792, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai simmered in bonito dashi (September 2010 review) and with soy sauce; tempura (octopus, vegetables, dried squid, tripe) and kushi-katsu have appeared on the menu (2009–2023 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai are simmered in bonito dashi (September 2010 review); sashimi, chicken and beef dishes (2022–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–22:00; closed Mondays (Tabelog). Reservations taken; private use possible (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats: a counter of 6 and a sunken kotatsu room for 10–14 (Tabelog). Non-smoking (Tabelog). The menu has no prices (October 2026 review); the hot pot may need booking (October 2017 review). Takeaway (September 2022 review). On the ground floor of 春秋ビル on Sanjo-dori just east of Jingumichi, 350 m (5 min) from Higashiyama Stn (Tabelog; October 2009 review). Reviews from 2009–2011 describe ¥1,000 lunch sets; Tabelog now lists dinner only.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo near Jingumichi, south of Heian Shrine — 350 m from Higashiyama Stn',
    cuisine: 'Obanzai and kappo: about 20 obanzai laid out on the counter (March 2012); grilled nama-fu with yuzu miso, sashimi of bonito, sea bream and octopus, purple-podded Tanba black-soybean edamame (October 2026); Kyoto-vegetable obanzai (December 2025); tripe tempura with a sauce perfected over ten years, when fresh tripe is in (May 2023); simmered chicken liver, Kujo leek stir-fried with chicken neck, lily-bulb cheese bake, grilled nama-fu, dried-squid tempura, beef and komatsuna in oyster sauce, onigiri (September 2022); steak and hot pot (October 2017); lotus-root kinpira (2017, 2022). Dinner about ¥5,000–10,000 per person in reviews; the October 2026 reviewer spent ¥8,000–9,999',
    website: null, gmaps: gm('和洋割烹 竹泉 京都 三条'), menu_url: null,
    notes: '[Obanzai · Sanjo-Jingumichi] A small counter on Sanjo near Heian Shrine with a row of obanzai on display and kappo dishes from the kitchen — Kyoto vegetables, grilled nama-fu with yuzu miso, sashimi. A friendly owner runs the room; no prices on the menu, about ¥6,000–10,000; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewed on Tabelog since October 2009, when a ¥1,000 lunch set with five small dishes and coffee drew local regulars (2009–2011 reviews). A 2010 reviewer saw "kushi" (skewers) on the sign. An October 2017 reviewer describes a friendly, handsome chef and a charming woman owner; a September 2022 regular names the friendliness and care of the owner as the best thing about the place.',
      philosophy: null,
      specialty: 'Obanzai of Kyoto vegetables; kappo dishes; tripe tempura.',
      anecdotes: [
        { text: 'An October 2026 traveller asked about a purple pod on the counter and the owner explained it was a Tanba black-soybean variety grown to eat as edamame.', source: R + 'B536771613/' },
        { text: 'A family that holds a thank-you dinner here for a work crew left the six-person menu to the owner in September 2022 and, when the men wanted more rice, asked for onigiri — about ¥30,000 for six.', source: R + 'B435499397/' },
        { text: 'A December 2025 walk-in was welcomed without a booking and planned to come back for the hot pot.', source: R + 'B518184946/' },
        { text: 'A June 2011 visitor found the staff hurried and the grilled fish of the ¥1,000 set disappointing.', source: R + 'B112308167/' },
      ],
      japanese_sources_summary: '食べログ: 和洋割烹 竹泉、日本料理、東山区三条通白川橋東入三丁目夷町160-1 春秋ビル 1F、東山駅から徒歩5分、火〜日 17:00〜22:00、月曜休み、予約可、カード・電子マネー・QR 不可、20席 (カウンター6席、掘りごたつ10〜14名)、禁煙。口コミ (英語): カウンターのおばんざい、京野菜 (2025年12月)、生麩の柚子味噌焼き、かつお・鯛・たこのお造り (2026年10月)、メニューに値段なし、明るい女将、2009〜2011年は1,000円の昼定食。',
      confidence: 'medium', sources: [TB, R + 'B112286923/', R + 'B112308167/', R + 'B112935859/', R + 'B112026494/', R + 'B337929023/', R + 'B435499397/', R + 'B465469990/', R + 'B518184946/', R + 'B536771613/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No prices on the menu; the owner explains the dishes (October 2026 review); phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通白川橋東入三丁目夷町160-1 春秋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025 and October 2026.' },
    pin_source: `Tabelog ${TB} (35.009148, 135.783175); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B435499397/', R + 'B536771613/'],
    price_note: 'The menu has no prices (October 2026 review); dishes from 2022–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Obanzai from the counter', null, 'Small dishes', 'ask', 'no', '2025–26 reviews.', 'obanzai'),
      it('', '', 'Grilled nama-fu with yuzu miso', null, 'Small dishes', 'no', 'ask', 'October 2026 review; nama-fu is wheat gluten.', 'namafu'),
      it('', '', 'Sashimi (bonito, sea bream, octopus)', null, 'Sashimi', 'ask', 'no', 'October 2026 review.', 'sashimi'),
      it('', '', 'Kujo leek stir-fried with chicken neck', null, 'Main', 'ask', 'no', 'September 2022 review.', 'kujo_negi_chicken'),
      it('', '', 'Dried-squid tempura', null, 'Main', 'no', 'no', 'September 2022 review.', 'squid_tempura'),
    ] }, {
    cuisine: 'おばんざいと割烹: カウンターに20種ほどのおばんざい (2012年3月)、生麩の柚子味噌焼き、かつお・鯛・たこのお造り、丹波黒豆の紫の枝豆 (2026年10月)、京野菜のおばんざい (2025年12月)、新鮮なものがある日だけの tripe の天ぷらと10年かけたたれ (2023年5月)、鶏レバーの煮物、九条ねぎと鶏せせりの炒め、ゆり根のチーズ焼き、焼き生麩、するめの天ぷら、牛肉と小松菜のオイスターソース炒め、おにぎり (2022年9月)、ステーキと鍋 (2017年10月)、れんこんのきんぴら (2017年と2022年)。夜は1人5,000〜10,000円ほど、2026年10月の口コミは8,000〜9,999円',
    neighborhood: '三条、神宮道の近く、平安神宮の南。東山駅から350m',
    gf_detail: '要確認。おばんざいはかつおだし (2010年9月の口コミ) としょうゆ。天ぷら (たこ、野菜、するめ、tripe) と串カツも出ていた (2009〜2023年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。おばんざいはかつおだし (2010年9月の口コミ)。お造り、鶏、牛の料理 (2022〜26年の口コミ)。',
    notes: '[おばんざい・三条神宮道] 平安神宮の近く、三条通の小さなカウンター。おばんざいが並び、厨房から割烹の料理。京野菜、生麩の柚子味噌焼き、お造り。気さくな女将の店。メニューに値段はなく、6,000〜10,000円ほど、現金のみ。',
  });
}

// ================================================================ 多幸金
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002613/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_takokin_marutamachi', name: '多幸金 (Takokin)', category: 'OMNI',
    lat: 35.016572057865375, lng: 135.76983205047225, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden simmered in dashi (2016–22 reviews) and seasonal kappo dishes including tempura of wild vegetables and shrimp (April 2021) and karasumi mochi; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi with fish cake, octopus and beef tendon; sashimi and fish dishes (2016–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–22:00; closed Mondays (Tabelog). Reservations taken; private rooms and private use (Tabelog). Cards: VISA, Master, JCB, AMEX, Diners; no QR (Tabelog). 37 seats: counter and tatami room (Tabelog). Bring-your-own drinks listed (Tabelog). 281 m from Jingu-Marutamachi Stn, south of Marutamachi-dori (Tabelog). The website on Tabelog, takokin.jp, did not resolve in November 2026.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Marutamachi — 281 m from Jingu-Marutamachi Stn',
    cuisine: 'Oden kappo: oden of daikon, tofu, shirataki, cabbage rolls, fresh yuba, octopus, shumai, potato and fried tofu, with beef tendon (August 2022); appetizers, sea bream sashimi, crab, rice porridge, oden, cabbage rolls and shumai (February 2024); oden, conger eel wrapped around asparagus and guji rice (October 2026); bamboo shoots with kinome miso, kombu-cured sea bream, wild-vegetable and shrimp tempura, karasumi mochi (April 2021); hot sake in a small barrel-shaped vessel. Spending per person ¥8,000–9,999 (2016–2022 reviews), ¥20,000–29,999 (April 2025) and ¥15,000–19,999 (October 2026)',
    website: null, gmaps: gm('多幸金 京都 丸太町'), menu_url: null,
    notes: '[Oden · Marutamachi] A long-running oden kappo with a counter and tatami room: oden in a refined dashi alongside seasonal Kyoto dishes — hamo, guji, karasumi mochi. About ¥15,000–30,000 per person in 2025–26 reviews.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A July 2009 reviewer captioned a photo of the noren "大正12年の 歴史あるのれん" (a historic noren from Taisho 12, i.e. 1923). A regular of more than 15 years by 2016 describes a young proprietress joining in (2016 review) and the head chef and a young chef behind the counter (April 2021); an August 2022 diner was glad to see the owner and the proprietress again.',
      philosophy: null,
      specialty: 'Oden; seasonal kappo dishes.',
      anecdotes: [
        { text: 'A regular who comes every spring for the bamboo shoots with kinome miso noted that the karasumi mochi is made differently from the Wakuden style (April 2021).', source: R + 'B117423122/' },
        { text: 'A February 2024 diner brought a grandmother, who finished every dish of an eclectic meal of sashimi, crab, porridge and oden.', source: R + 'B478808777/' },
        { text: 'Back after five years in August 2022, a business traveller drank a bottle of Premium Malt\'s at the counter and finished with a cup of the oden broth.', source: R + 'B453004420/' },
      ],
      japanese_sources_summary: '食べログ: 多幸金、日本料理・おでん、上京区中町通丸太町下ル駒之町559-20、神宮丸太町駅から281m、火〜日 17:00〜22:00、月曜休み、予約可、カード可、37席、カウンターと座敷、個室あり、ウェブサイト takokin.jp。口コミ (英語): おでん割烹、だしのおでん、季節の料理、からすみ餅 (2021年4月)、大将と若い料理人、若女将、のれんの写真に「大正12年の 歴史あるのれん」(2009年7月の口コミ)、1人15,000〜19,999円 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B117423122/', R + 'B117647458/', R + 'B422781703/', R + 'B453004420/', R + 'B478808777/', R + 'B507018776/', R + 'B537065243/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tatami-room dining; phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区中町通丸太町下ル駒之町559-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog reviews from visits in April 2025, December 2025 and October 2026; the website takokin.jp did not resolve (November 2026).' },
    pin_source: `Tabelog ${TB} (35.016572, 135.769832); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B453004420/', R + 'B537065243/'],
    price_note: 'No item prices in sources; per-person spending from reviews.', last_checked: TODAY, items: [
      it('おでん', '', 'Oden (daikon, yuba, octopus, cabbage rolls, shumai…)', null, 'Oden', 'ask', 'no', 'August 2022 and October 2026 reviews.', 'oden'),
      it('', '', 'Beef tendon stew', null, 'Small dishes', 'ask', 'no', 'August 2022 review.', 'gyusuji'),
      it('', '', 'Guji rice', null, 'Rice', 'ask', 'no', 'October 2026 review.', 'guji_rice'),
      it('', '', 'Karasumi mochi', null, 'Small dishes', 'ask', 'no', 'April 2021 review.', 'karasumi_mochi'),
    ] }, {
    cuisine: 'おでん割烹: 大根、豆腐、しらたき、ロールキャベツ、生湯葉、たこ、しゅうまい、じゃがいも、ひろうすのおでんと牛すじ (2022年8月)、前菜、鯛のお造り、かに、おかゆ、おでん、ロールキャベツ、しゅうまい (2024年2月)、おでん、穴子のアスパラ巻き、ぐじのごはん (2026年10月)、たけのこの木の芽味噌、鯛の昆布じめ、山菜とえびの天ぷら、からすみ餅 (2021年4月)、小さな樽の器の熱燗。1人8,000〜9,999円 (2016〜2022年の口コミ)、20,000〜29,999円 (2025年4月)、15,000〜19,999円 (2026年10月)',
    neighborhood: '丸太町の南。神宮丸太町駅から281m',
    gf_detail: '要確認。だしで炊くおでん (2016〜22年の口コミ) と季節の割烹料理、山菜とえびの天ぷら (2021年4月)、からすみ餅。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。だしのおでんに練り物、たこ、牛すじ。お造りと魚の料理 (2016〜26年の口コミ)。',
    notes: '[おでん・丸太町] カウンターと座敷のおでん割烹の老舗。上品なだしのおでんと、鱧、ぐじ、からすみ餅など京都の季節の料理。2025〜26年の口コミでは1人15,000〜30,000円ほど。',
  });
}

// ================================================================ 吟味屋 菜々色
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26015615/'; const R = TB + 'dtlrvwlst/';
  const D = day(['16:30', '23:00']);
  put({
    id: 'kyoto_izakaya_tb26015615_ayanokoji', name: '吟味屋 菜々色', category: 'OMNI',
    lat: 35.00251158611131, lng: 135.7528308291167, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi comes with soy-sauce jelly (March 2025) or garlic miso (October 2026); fried dishes include toro katsu, eel and cheese spring rolls, satsuma-age and fried saury (2025 reviews); obanzai in dashi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, eel, fish cakes, chicken (2025–26 reviews); vegetables come simmered in dashi (October 2026).',
    hours_raw: 'Daily 16:30–23:00 (L.O. 22:00); closing days irregular — phone 080-4234-2434 (Tabelog). Banquet menus for groups of 10 or more from 12:30 by booking (Tabelog). Reservations taken and recommended at weekends (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money; no cover charge (Tabelog). 40 seats: a small counter and a 10-seat room on the ground floor, tables for up to 12 and private rooms for up to 30 upstairs; the whole shop can be booked (Tabelog). Smoking allowed at the ground-floor counter; the upstairs tables are non-smoking (Tabelog). Children welcome; BYO drinks listed (Tabelog). The shop says its website and app are no longer updated (Tabelog). On the north corner just east of Ayanokoji-Samegai, 7 min from Shijo or Karasuma Stn, 367 m from Omiya Stn (Tabelog). Operated by Dish&Soul株式会社 (invoice register T3130001054970; Tabelog remarks).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji-Samegai, Shijo-Horikawa — 367 m from Omiya Stn',
    cuisine: 'Izakaya of sashimi, obanzai and sake: course ¥4,000 (January 2026); sashimi with garlic miso, eggplant in dashi, sake on all-you-can-drink (October 2026); house-made thick fried tofu, koshiabura tempura off the menu (May 2026); sashimi of seared yellowtail, octopus, squid and negitoro, grilled squid tentacles with shichimi, satsuma-age with mozzarella (October 2025); toro katsu, eel and cheese spring rolls, chicken karaage with ponzu, fried saury, fried white eggplant, salted onigiri (September 2025); Kyoto cucumber, agedashi tofu, yakisoba (June 2025); steamed chicken with kinome miso, clams steamed in sake, fried stingray cheek (April 2025); sashimi with soy-sauce jelly (March 2025). About ¥5,000–8,000 per person',
    website: null, gmaps: gm('吟味屋 菜々色 京都 綾小路'), menu_url: null,
    notes: '[Izakaya · Ayanokoji-Samegai] A two-storey izakaya in an old building near Shijo-Horikawa: sashimi with garlic miso, obanzai, satsuma-age with mozzarella and eel spring rolls, many sakes and lively staff banter. About ¥5,000–8,000; open to 23:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by Dish&Soul株式会社 (registered invoice issuer from 1 October 2023, head office 下京区西綾小路西半町83, NTA register). The Tabelog remarks give a phone number for a second shop, and a March 2026 reviewer describes this as the table-seat shop of 吟味屋 a couple of doors from the "Kaku" shop (the review\'s English). A March 2025 guest was brought by a friend who has been coming for over 20 years; an April 2025 reviewer guessed from the food why it has lasted so long. Reviewers describe the building as an old house with a traditional exterior (September and November 2025).',
      philosophy: null,
      specialty: 'Sashimi; obanzai; satsuma-age with mozzarella; toro katsu.',
      anecdotes: [
        { text: 'A family that came in during heavy rain in March 2025 was given fish-bone crackers on the house.', source: R + 'B503755100/' },
        { text: 'In October 2026 a business traveller found the eggplant in dashi so good as to want ten servings, and enjoyed the staff\'s Kansai banter and the music.', source: R + 'B537674936/' },
        { text: 'A March 2026 diner found the all-you-can-drink course of obanzai-style starters, sashimi and chicken soup neither good nor bad, and suggested ordering à la carte at the counter instead.', source: R + 'B474802407/' },
        { text: 'At a February 2025 banquet the yam with wasabi was a hit but the edamame was oily.', source: R + 'B502205805/' },
        { text: 'The restaurant was full on a May 2026 visit and the food was slow, but the staff kept the table informed throughout.', source: R + 'B527993662/' },
      ],
      japanese_sources_summary: '食べログ: 吟味屋 菜々色、居酒屋・海鮮・野菜料理、下京区綾小路醒ケ井東入ル北角、大宮駅から367m、毎日 16:30〜23:00 (L.O. 22:00)、不定休、10名以上の宴会は12:30から予約で、40席 (2階のテーブルと個室、1階のカウンター)、1階カウンターは喫煙可、カード・PayPay 可、チャージなし、ホームページとアプリの更新は終了、Dish&Soul株式会社。適格請求書発行事業者: Dish&Soul株式会社 (令和5年10月1日登録)。口コミ (2025〜2026年、英語): お造りとにんにく味噌、しょうゆのジュレ、おばんざい、モッツァレラ入りのさつま揚げ、うなぎとチーズの春巻き、トロカツ、4,000円のコース (2026年1月)、日本酒の飲み放題。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001054970', R + 'B474802407/', R + 'B485217250/', R + 'B502205805/', R + 'B503323835/', R + 'B503755100/', R + 'B505619393/', R + 'B508572707/', R + 'B513092711/', R + 'B513341105/', R + 'B515806496/', R + 'B518250889/', R + 'B520983574/', R + 'B527993662/', R + 'B537674936/', R + 'B538658200/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain and recommend dishes, including off-menu ones (2025 reviews); phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路醒ケ井東入ル北角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002512, 135.752831); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520983574/', R + 'B513092711/', R + 'B513341105/'],
    price_note: 'Course price from a January 2026 review; other dishes from 2025–26 reviews without prices.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥4,000', 'Course', 'ask', 'no', 'January 2026 review.', 'course'),
      it('', '', 'Assorted sashimi', null, 'Sashimi', 'ask', 'no', 'With garlic miso (October 2026) or soy-sauce jelly (March 2025).', 'sashimi'),
      it('', '', 'Satsuma-age with mozzarella', null, 'Fried', 'ask', 'no', 'September–November 2025 reviews.', 'satsumaage'),
      it('', '', 'Toro katsu', null, 'Fried', 'no', 'no', 'September 2025 review.', 'toro_katsu'),
      it('', '', 'Eel and cheese spring rolls', null, 'Fried', 'no', 'no', 'April and September 2025 reviews.', 'eel_harumaki'),
    ] }, {
    cuisine: 'お造り、おばんざい、日本酒の居酒屋: コース4,000円 (2026年1月)、お造りとにんにく味噌、なすの煮びたし、日本酒の飲み放題 (2026年10月)、自家製の厚揚げ、メニューにないこしあぶらの天ぷら (2026年5月)、ぶりのたたき・たこ・いか・ねぎトロのお造り、げその七味焼き、モッツァレラ入りのさつま揚げ (2025年10月)、トロカツ、うなぎとチーズの春巻き、鶏の唐揚げのポン酢、さんまの唐揚げ、白なすの揚げ物、塩むすび (2025年9月)、京きゅうり、揚げ出し豆腐、焼きそば (2025年6月)、蒸し鶏の木の芽味噌、あさりの酒蒸し、あかえいのほほ肉の唐揚げ (2025年4月)、お造りとしょうゆのジュレ (2025年3月)。1人5,000〜8,000円ほど',
    neighborhood: '綾小路醒ケ井、四条堀川。大宮駅から367m',
    gf_detail: '要確認。お造りにしょうゆのジュレ (2025年3月) やにんにく味噌 (2026年10月)。揚げ物はトロカツ、うなぎとチーズの春巻き、さつま揚げ、さんまの唐揚げ (2025年の口コミ)。おばんざいはだし。',
    vegan_detail: 'ヴィーガン不可。海鮮の居酒屋。お造り、うなぎ、練り物、鶏 (2025〜26年の口コミ)。野菜もだしで炊く (2026年10月)。',
    notes: '[居酒屋・綾小路醒ケ井] 四条堀川の近く、古い建物の2階建ての居酒屋。にんにく味噌のお造り、おばんざい、モッツァレラ入りのさつま揚げ、うなぎの春巻き、日本酒が多く、お店の人の掛け合いも楽しい。5,000〜8,000円ほど、23時まで。',
  });
}

save();
