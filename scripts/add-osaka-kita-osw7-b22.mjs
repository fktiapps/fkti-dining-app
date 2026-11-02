// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 22.
//   + パシオン・エ・ナチュール アルデ新大阪駅店 Passion et Nature (natural-wine Italian bar in Alde Shin-Osaka, about 250 wines)
//   + 麺つるり Men Tsururi (Himi udon in the food court outside Shin-Osaka's east gate, from 7:00)
//   + 象印銀白弁当 Zojirushi Ginpaku Bento (Zojirushi's flame-cooked-rice bento shop outside the east gate)
//   + 豚中島南方 Buta Nakajima Minamikata (yakiton and pork sashimi, Nishinakajima)
//   + FIX for batch 20 (integrator request, 2026-11-02), run after save(): menu names known only from English reviews back in Latin in JA:
//     osaka_sakana_ryori_anono_higashimikuni あのの御膳 → Anono Gozen; osaka_robata_dokoro_isshin_higashimikuni ガチャ焼き → Gacha-yaki.
//     鶏重 stays (generic). Idempotent.
//   Lane check: every id above is even. The first four even ids of `next notable 80 shin-osaka`; no skips.
//   Chain check:
//   - Passion et Nature: its site (passion-shinosaka.com, read 2026-11-02) shows only this shop; it links to an operator site
//     (booworld) whose other brands, if any, would be sister concepts. Drafted.
//   - Zojirushi Ginpaku Bento: sister concept of osaka_zojirushi_shokudo_namba (integrator, 2026-11-02); no other Ginpaku Bento shop named.
//   - Buta Nakajima Minamikata: the operator's brand page (butanaka.com, read 2026-11-02) lists one shop; a sister PIZZA Ichiro is a
//     different concept (Tabelog remarks).
//   - Men Tsururi: no other shop named; web search (2026-11-02) found none.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ パシオン・エ・ナチュール
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27053794/'; const R = TB + 'dtlrvwlst/'; const W = 'https://passion-shinosaka.com/';
  const D = day(['10:30', '22:30']);
  put({
    id: 'osaka_passion_et_nature_shin_osaka', name: 'パシオン・エ・ナチュール アルデ新大阪駅店 (Passion et Nature)', category: 'OMNI',
    lat: 34.733272, lng: 135.499127, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: pizza, pasta, beef-cutlet sandwiches and fried lunch plates. Ask about salads and steak.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-led Italian bar.',
    hours_raw: 'Daily 10:30–22:30 (food last order 21:30, drinks 22:00); closed only when Alde Shin-Osaka closes; shorter hours at New Year (Tabelog; shop site). Lunch until about 16:30, but may end early when food runs out (September 2026). Reservations accepted, and needed in the evening (Tabelog; September 2026). Cards, e-money and QR accepted (Tabelog). 34 seats with sofa seating; non-smoking; children welcome, though the shop is wine-led (Tabelog). Sommelier; English menu (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-16-1, inside Alde Shin-Osaka on the 2nd floor of JR Shin-Osaka Station, right by the subway middle gate (Exit 5) (Tabelog; shop site)',
    cuisine: 'Italian bar of natural wine and meat: about 250 natural wines, each chosen by staff who visited the makers (shop site) · shoulder-loin steak, margherita, natural wine with an appetiser platter, beef-cutlet sandwich ("a must"), fresh salads (shop site) · evening: appetiser platter, carpaccio, cheese penne, risotto, pizza, pasta, a la carte outside skirt (2026) · lunch plates: "Passion A" mixed lunch of hamburg steak, fried shrimp and rice ¥1,330 (September 2026); beef cutlet and fried shrimp set; hamburg steak and steak; hamburg steak, fried shrimp, corn cream croquette and roast beef (September–October 2026) · Japanese and classic wines; sake and cocktails (Tabelog; August 2026) · dinner about ¥4,000–6,000 a head (2026)',
    website: W, gmaps: gm('パシオン・エ・ナチュール 新大阪'), menu_url: W,
    notes: "[Italian · Shin-Osaka Station, natural wine before the Shinkansen] A small, busy bar at the far end of Alde Shin-Osaka, inside the station, with about 250 natural wines picked by staff who visited the makers, and casual meat-led Italian food to match (shop site). Travellers come for a bottle and an appetiser platter, carpaccio or pizza before a train; orders arrive fast (2026). Lunch is hearty Western plates such as hamburg steak with fried shrimp, about ¥1,300 (2026). Book in the evening, when it fills. Open 10:30 to 22:30 every day; English menu.",
    chef_bio: { chef_name: null, roles: ['Sommelier and staff (unnamed)'], origin: null, background: 'Shop site: Passion et Nature began from a wish to share the lifelong work and feelings of natural-wine makers; every wine is one the staff have experienced first-hand, chosen to suit the food. Tabelog: a sommelier is on staff. Reviewers: friendly staff, varying by person (September 2026).', philosophy: '"Honmamon" natural wine with food to match, in a casual bar (shop site).', specialty: 'Natural wine with an appetiser platter; beef-cutlet sandwich.',
      anecdotes: [
        { text: '"Located at the far end of Alde, this cozy little shop offers a wide selection of wines, from classics to Japanese varieties, which made me excited to step inside!" — August 2026, appetiser platter and cheese penne.', source: R + 'B535380139/' },
        { text: '"Since I had pre-ordered an assortment of appetizers for the number of people in my party, they were served immediately upon our arrival." — September 2026.', source: R + 'B535334827/' },
        { text: '"I had the Passion A Mixed Lunch for JPY 1,330. It included a plate with hamburger steak, shrimp fry, and a serving of rice." — September 2026.', source: R + 'B535987324/' },
      ],
      japanese_sources_summary: '食べログ: パシオン・エ・ナチュール アルデ新大阪駅店、ダイニングバー・ワインバー・イタリアン、大阪市淀川区西中島5-16-1 アルデ新大阪、地下鉄 新大阪駅の中改札 (5番出口) のすぐそば、毎日10:30〜22:30 (L.O. 料理21:30、ドリンク22:00)、休みは施設に準じる、予約可、カード・電子マネー・QR 可、34席、ソファ席、禁煙、子ども可 (ワインの店)、ソムリエ、英語のメニュー。店のサイト: 自然派ワインとお肉のイタリアンバル、自然派ワイン約250種類はすべてスタッフがワインを造る人を訪ねて選んだ「ほんまもん」、肩ロースのステーキ、マルゲリータ、前菜盛り、牛カツサンドはマスト、新鮮野菜のサラダ、ランチもいろいろ、テイクアウト。口コミ (2026年8〜10月): アルデのいちばん奥の小さな店、日本のワインも、前菜盛り、カルパッチョ、チーズのペンネ、リゾット、ピザ、パスタ、ハラミ、ランチは16:30までだが売り切れで早じまいも、「Passion A」のミックスランチ (ハンバーグ、エビフライ、ごはん) 1,330円、牛カツとエビフライ、ハンバーグとステーキ、ハンバーグ、エビフライ、コーンクリームコロッケ、ローストビーフ、夜は予約でいっぱい、新幹線の前にさっと、値段はやや高めという声。',
      confidence: 'medium', sources: [TB, W, R + 'B535071949/', R + 'B535246248/', R + 'B535334827/', R + 'B535380139/', R + 'B535987324/', R + 'B536156262/', R + 'B536795516/', R + 'B537267800/', R + 'B538267914/', R + 'B538531808/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; sommelier on staff; station bar used to travellers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 アルデ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 141m — GSI places the whole Shin-Osaka Station block; Tabelog's point is at the west end of Alde, about 60 m from osaka_osaka_yakiniku_matsuya_shin_osaka (also Alde 2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [W, R + 'B535987324/'],
    price_note: 'One lunch price from a September 2026 review; dishes from the shop site.', last_checked: TODAY, items: [
      it('', '', 'Passion A mixed lunch (hamburg steak, fried shrimp, rice)', '¥1,330', 'Lunch', 'no', 'no', 'September 2026.', 'passion_a'),
      it('', '', 'Beef-cutlet sandwich', '', 'Food', 'no', 'no', 'Shop site.', 'gyukatsu_sando'),
      it('', '', 'Shoulder-loin steak', '', 'Food', 'ask', 'no', 'Shop site.', 'kataroosu_steak'),
      it('', '', 'Appetiser platter', '', 'Food', 'ask', 'ask', 'Shop site; 2026.', 'antipasto'),
    ] }, {
    cuisine: '自然派ワインと肉のイタリアンバル: 自然派ワイン約250種類、どれもスタッフがワインを造る人を訪ねて選んだもの (店のサイト)・肩ロースのステーキ、マルゲリータ、自然派ワインと前菜盛り、牛カツサンド (「マスト」)、新鮮野菜のサラダ (店のサイト)・夜: 前菜盛り、カルパッチョ、チーズのペンネ、リゾット、ピザ、パスタ、一品のハラミ (2026年)・ランチのプレート: ハンバーグ、エビフライ、ごはんの「Passion A」ミックスランチ1,330円 (2026年9月)。牛カツとエビフライのセット。ハンバーグとステーキ。ハンバーグ、エビフライ、コーンクリームコロッケ、ローストビーフ (2026年9〜10月)・日本のワインや定番のワイン。日本酒とカクテル (食べログ。2026年8月)・夜はひとり約4,000〜6,000円 (2026年)',
    neighborhood: '西中島5-16-1、JR 新大阪駅2階のアルデ新大阪の中。地下鉄の中改札 (5番出口) のすぐそば (食べログ。店のサイト)',
    gf_detail: 'メニューとしてはグルテンフリーではありません。ピザ、パスタ、牛カツサンド、揚げ物のランチプレート。サラダやステーキは要確認。',
    vegan_detail: 'ヴィーガンではありません。肉が中心のイタリアンバル。',
    notes: '[イタリアン・新大阪駅、新幹線の前に自然派ワイン] 駅の中、アルデ新大阪のいちばん奥にある小さくてにぎやかなバル。ワインを造る人を訪ねたスタッフが選んだ自然派ワインが約250種類あり、料理は肉が中心の気軽なイタリアン (店のサイト)。旅の人は電車の前にボトルと前菜盛り、カルパッチョやピザを。料理が出るのが早い (2026年)。ランチはハンバーグとエビフライなどの洋食のプレートで約1,300円 (2026年)。夜は混むので予約を。毎日10時半から22時半。英語のメニューあり。',
  });
}

// ================================================================ 麺つるり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27122048/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:00', '22:00']);
  put({
    id: 'osaka_men_tsururi_shin_osaka', name: '麺つるり (Men Tsururi)', category: 'OMNI',
    lat: 34.733643, lng: 135.501705, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cold broth is made with flying-fish (ago) dashi (October 2026), and toppings include chikuwa tempura and bonito flakes.',
    hours_raw: 'Daily 7:00–22:00 (Tabelog). Counter service in a small food court (Ekimaru Kitchen) just outside the JR Shin-Osaka east gate; a buzzer calls you when the bowl is ready, about 7–8 minutes (2026). No reservations; cards, e-money and QR accepted (Tabelog). Non-smoking; children welcome (Tabelog). Busy at peak times (October 2026). Opened 16 March 2021 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, JR Shin-Osaka Station, in the food court outside the east ticket gate near the Shinkansen gates (Tabelog; October 2026)',
    cuisine: 'Himi udon, the thin, flat, hand-stretched udon of Himi in Toyama: smooth and slightly firm, between somen and regular udon (September–October 2026) · chiku-tama tempura (chikuwa and egg tempura) udon, hot or cold, ¥1,050 as bukkake (October 2026), also as a set with takikomi rice (September 2026) · kake udon with takikomi rice ¥920 (September 2026); kakiage zaru udon ¥940 (October 2026); "gotsu" kakiage bukkake with a huge kakiage (October 2026) · breakfast set of udon with a mini rice bowl (egg on rice with bonito, or takana mentaiko) ¥650 (September–October 2026) · burdock rice and mentaiko-takana rice sets (October 2026)',
    website: 'https://shinosaka.ekimaru.com/shopguide/detail/12', gmaps: gm('麺つるり 新大阪駅'), menu_url: null,
    notes: "[Udon · Shin-Osaka Station, Himi udon by the Shinkansen gate] A quick-service udon counter in the food court just outside Shin-Osaka's east gate serving Himi udon from Toyama, thin, flat and hand-stretched, slippery and lightly firm (2026). The order is chiku-tama tempura bukkake, cold, with chikuwa and a runny egg tempura in a light flying-fish broth, about ¥1,050 (October 2026). From 7:00 there is a ¥650 breakfast set of udon and a small rice bowl (2026). Order, take a buzzer, and eat in a few minutes before your train. Open daily to 22:00.",
    chef_bio: { chef_name: null, roles: ['Counter staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 16 March 2021 in the Ekimaru food court at Shin-Osaka Station (Tabelog). Reviewers: Himi udon, one of Japan\'s three famous udon, rare in Osaka (September–October 2026).', philosophy: null, specialty: 'Chiku-tama tempura bukkake (cold).',
      anecdotes: [
        { text: '"The cold broth, made with flying fish dashi, had a light and pleasant flavor." — October 2026, chiku-tama tempura bukkake for JPY 1,050.', source: R + 'B537060739/' },
        { text: '"This udon is made from Himi udon, which is not very common, and the noodles are thin—slightly thicker than somen." — September 2026, chiku-tama tempura udon set, cold.', source: R + 'B535969371/' },
        { text: '"I ordered a set of udon and tamago kake gohan (rice with raw egg), which was an incredible deal!" — October 2026, breakfast set for JPY 650.', source: R + 'B536937767/' },
      ],
      japanese_sources_summary: '食べログ: 麺つるり、うどん、大阪市淀川区西中島5-16-1、JR 新大阪駅の東改札の外、毎日7:00〜22:00、予約不可、カード・電子マネー・QR 可、禁煙、子ども可、2021年3月16日オープン、サイト shinosaka.ekimaru.com。口コミ (2026年9〜10月): 改札の外のフードコート、Himi のうどんで細くて平たい手延べ、つるつるで少しコシ、ちく玉天うどん (温かいのも冷たいのも)、ちく玉天ぶっかけ1,050円、冷たいつゆはあごだし、かけうどんと炊き込みごはんのセット920円、かき揚げざるうどん940円、大きなかき揚げの「Gotsu」かき揚げぶっかけ、朝のセット650円 (うどんとかつお節の卵かけごはんか高菜明太)、ごぼうごはんのセット、ブザーで呼ばれる、7〜8分で出る、混む時間あり。',
      confidence: 'medium', sources: [TB, R + 'B535969371/', R + 'B536170505/', R + 'B536630749/', R + 'B536937767/', R + 'B537060739/', R + 'B537082941/', R + 'B537259490/', R + 'B537535375/', R + 'B538145679/', R + 'B538166329/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court counter: order, take a buzzer, collect your tray. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 107m — GSI places the whole Shin-Osaka Station block; Tabelog's point is by the east gate, about 23 m from osaka_zojirushi_ginpaku_bento_shin_osaka and 40 m from osaka_ganso_umeda_mix_juice_shin_osaka; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537060739/', R + 'B536170505/', R + 'B536630749/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chiku-tama tempura bukkake (cold)', '¥1,050', 'Udon', 'no', 'no', 'October 2026.', 'chikutama_bukkake'),
      it('', '', 'Kake udon and takikomi rice set', '¥920', 'Sets', 'no', 'no', 'September 2026.', 'kake_set'),
      it('', '', 'Kakiage zaru udon', '¥940', 'Udon', 'no', 'no', 'October 2026.', 'kakiage_zaru'),
      it('', '', 'Breakfast set: udon and a mini rice bowl', '¥650', 'Breakfast', 'no', 'no', 'October 2026.', 'morning_set'),
    ] }, {
    cuisine: 'Himi のうどん: 細くて平たい手延べで、つるつる、少しコシがあり、そうめんと普通のうどんのあいだくらい (2026年9〜10月)・ちくわとたまごの天ぷらのちく玉天うどん、温かいのも冷たいのも。ぶっかけで1,050円 (2026年10月)。炊き込みごはんのセットも (2026年9月)・かけうどんと炊き込みごはん920円 (2026年9月)。かき揚げざるうどん940円 (2026年10月)。大きなかき揚げの「Gotsu」かき揚げぶっかけ (2026年10月)・朝のセット: うどんにミニの丼 (かつお節の卵かけごはんか高菜明太) で650円 (2026年9〜10月)・ごぼうごはんや明太高菜ごはんのセット (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅、新幹線の改札に近い東改札の外のフードコート (食べログ。2026年10月)',
    gf_detail: 'グルテンフリーではありません。小麦のうどんと天ぷら。',
    vegan_detail: 'ヴィーガンではありません。冷たいつゆはあごだし (2026年10月)、ちくわ天やかつお節ものる。',
    notes: '[うどん・新大阪駅、新幹線の改札のそばの Himi のうどん] 新大阪駅の東改札を出てすぐのフードコートにある、すぐ出てくるうどんのカウンター。富山の Himi のうどんで、細くて平たい手延べ、つるつるで少しコシ (2026年)。頼むなら冷たいちく玉天ぶっかけで、ちくわ天ととろりとしたたまご天にあごだしの軽いつゆ、約1,050円 (2026年10月)。朝7時からは、うどんと小さな丼の650円の朝のセット (2026年)。注文してブザーを受け取り、電車の前に数分で。毎日22時まで。',
  });
}

// ================================================================ 象印銀白弁当
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27121776/'; const R = TB + 'dtlrvwlst/'; const W = 'https://www.zojirushi-ginpakubento.com/';
  const D = day(['07:30', '21:30']);
  put({
    id: 'osaka_zojirushi_ginpaku_bento_shin_osaka', name: '象印銀白弁当 (Zojirushi Ginpaku Bento)', category: 'OMNI',
    lat: 34.733569, lng: 135.501472, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Bento sides include kara-age, tempura, fritters and hamburg steak; the rice itself is plain.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. There is a vegetarian bento with tofu hamburg steak and vegetables (October 2026), but it also has thick omelette, so it is not vegan as served.',
    hours_raw: 'Daily 7:30–21:30; may close when the facility does (Tabelog). Takeout only; orders take a few to about ten minutes, so allow time before your train; lines near noon (September 2026). Reservations accepted (Tabelog). Cards, e-money and QR accepted; double JR West WESTER points on Wednesdays (Tabelog; August 2026). Opened 16 March 2021 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, JR Shin-Osaka Station 3F, outside the east ticket gate (Tabelog), in the Ekimarche shopping area outside the JR gates (August 2026)',
    cuisine: 'Bento built around rice from Zojirushi, the rice-cooker maker: all rice cooked in its top "Enbutaiki" cooker; white rice a blend chosen by five-star rice meister Masato Kaneko to stay good when cool (Tabelog shop text) · choose white rice (warm) or brown or "health-support" rice (room temperature), regular or large free (2026) · Japanese-style bento with kara-age, grilled silver salmon, dashimaki, lotus-root tempura and greens ¥1,500 (September 2026); mountain bento with chicken and hamburg steak ¥1,750 (September 2026); seafood bento with salmon and white-fish fritters (October 2026); vegetarian bento of tofu hamburg steak, sautéed vegetables, simmered lotus root and thick omelette (October 2026); Tajima beef bento; namabushi (bonito) bento (2026)',
    website: W, gmaps: gm('象印銀白弁当 新大阪'), menu_url: null,
    notes: "[Bento · Shin-Osaka Station, flame-cooked-rice bento for the train] Zojirushi, the rice-cooker maker, runs this bento counter outside Shin-Osaka's east gate to show off its rice: everything is cooked in its top cooker, a blend picked to taste good cold (Tabelog shop text). Choose warm white rice or room-temperature brown rice and a bento of Japanese sides, fish, meat or a vegetarian box, ¥1,500–1,750 (2026). Reviewers call it the best rice they have had in a bento; portions are modest and prices not low (2026). Allow ten minutes at lunchtime. Sister to Zojirushi Shokudo in Namba.",
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null, background: 'Tabelog shop text: Zojirushi wants more people to know how good rice can be; all rice is cooked in its high-end "Enbutaiki" rice cooker, and the white rice is an original blend chosen by five-star rice meister Masato Kaneko to stay delicious when cooled. Opened 16 March 2021 (Tabelog). Sister concept of Zojirushi Shokudo (osaka_zojirushi_shokudo_namba).', philosophy: 'Delicious rice with sides that go with rice (Tabelog shop text).', specialty: 'Japanese-style bento; vegetarian bento.',
      anecdotes: [
        { text: '"I had it after a little while, but this was the first time I thought the rice in a bento was so delicious. It was that good!" — October 2026, seafood bento.', source: R + 'B537004028/' },
        { text: '"Since it takes a little time from ordering to receiving your meal, I recommend arriving with plenty of time before your Shinkansen departure." — September 2026.', source: R + 'B531663475/' },
        { text: '"It featured tofu hamburgers, sautéed vegetables, simmered lotus root, and thick omelets—all visually appealing and delicious." — October 2026, vegetarian bento.', source: R + 'B537386212/' },
      ],
      japanese_sources_summary: '食べログ: 象印銀白弁当、弁当、大阪市淀川区西中島5-16-1 JR新大阪駅 3F 東改札外、毎日7:30〜21:30、施設の都合で休みも、予約可、カード・電子マネー・QR 可、テイクアウト、2021年3月16日オープン。店の紹介: ごはんのほんとうのおいしさを知ってほしい、ごはんはすべて象印の最上位の炊飯ジャー「Enbutaiki」で炊く、白米は五つ星お米マイスター Masato Kaneko が選んだオリジナルブレンドで冷めてもおいしい、ごはんに合うおかず。口コミ (2026年2〜10月): 白米 (温かい) か玄米やhealth-support のお米 (常温)、普通か大盛り (無料)、和風弁当1,500円 (から揚げ、銀鮭の塩焼き、だし巻き、れんこんの天ぷら、青菜)、鶏とハンバーグの弁当1,750円、鮭と白身のフライの弁当、ベジタリアン弁当 (豆腐ハンバーグ、野菜のソテー、れんこんの煮物、厚焼き卵)、Tajima 牛の弁当、なまぶし弁当、注文から受け取りまで少しかかる、昼は行列、量は少なめで値段は安くない、水曜は WESTER ポイント2倍。',
      confidence: 'medium', sources: [TB, W, R + 'B516989709/', R + 'B522691488/', R + 'B531663475/', R + 'B533997148/', R + 'B535216060/', R + 'B536283711/', R + 'B536504720/', R + 'B537004028/', R + 'B537386212/', R + 'B537562063/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeout counter; choose rice type and temperature. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR新大阪駅 3F 東改札外',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 84m — GSI places the whole Shin-Osaka Station block; Tabelog's point is outside the east gate, about 23 m from osaka_men_tsururi_shin_osaka and 20 m from osaka_ganso_umeda_mix_juice_shin_osaka; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516989709/', R + 'B536283711/', R + 'B537386212/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Japanese-style bento', '¥1,500', 'Bento', 'no', 'no', 'September–October 2026.', 'washoku_bento'),
      it('', '', 'Mountain bento (chicken and hamburg steak)', '¥1,750', 'Bento', 'no', 'no', 'September 2026.', 'yama_bento'),
      it('', '', 'Seafood bento', '', 'Bento', 'no', 'no', 'October 2026.', 'umi_bento'),
      it('', '', 'Vegetarian bento', '', 'Bento', 'ask', 'no', 'October 2026; contains omelette.', 'veg_bento'),
    ] }, {
    cuisine: '炊飯ジャーの象印のごはんが主役の弁当: ごはんはすべて最上位の炊飯ジャー「Enbutaiki」で炊き、白米は五つ星お米マイスター Masato Kaneko が冷めてもおいしいように選んだブレンド (食べログの店の紹介)・白米 (温かい) か、玄米やhealth-support のお米 (常温)、普通か大盛りを無料で選ぶ (2026年)・から揚げ、銀鮭の塩焼き、だし巻き、れんこんの天ぷら、青菜の和風弁当1,500円 (2026年9月)。鶏とハンバーグの弁当1,750円 (2026年9月)。鮭と白身のフライの弁当 (2026年10月)。豆腐ハンバーグ、野菜のソテー、れんこんの煮物、厚焼き卵のベジタリアン弁当 (2026年10月)。Tajima 牛の弁当。なまぶしの弁当 (2026年)',
    neighborhood: '西中島5-16-1、JR 新大阪駅3階、東改札の外 (食べログ)。JR の改札の外のエキマルシェのエリア (2026年8月)',
    gf_detail: '要確認。グルテンの情報なし。おかずにはから揚げ、天ぷら、フライ、ハンバーグ。ごはんそのものは白米。',
    vegan_detail: '要確認。豆腐ハンバーグと野菜のベジタリアン弁当がある (2026年10月) が、厚焼き卵も入るので、そのままではヴィーガンではない。',
    notes: '[弁当・新大阪駅、列車で食べるEnbutaikiのごはんの弁当] 炊飯ジャーの象印が新大阪駅の東改札の外で営む弁当のカウンターで、主役はごはん。すべて最上位の炊飯ジャーで炊き、冷めてもおいしいブレンドを選んでいる (食べログの店の紹介)。温かい白米か常温の玄米を選び、和のおかず、魚、肉、ベジタリアンの弁当から、1,500〜1,750円 (2026年)。弁当でいちばんおいしいごはんという声も。量は控えめで値段は安くない (2026年)。昼は10分ほどみておく。なんばの象印食堂の姉妹店。',
  });
}

// ================================================================ 豚中島南方
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27088710/'; const R = TB + 'dtlrvwlst/'; const W = 'https://www.butanaka.com/brands/butanakajima/shops/nishinakajima/';
  const D = day(['17:00', '00:00']);
  put({
    id: 'osaka_buta_nakajima_minamikata_nishinakajima', name: '豚中島南方 (Buta Nakajima Minamikata)', category: 'OMNI',
    lat: 34.726326, lng: 135.496691, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or sauce; tsukune with sauce or cheese (June 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork yakiton restaurant.',
    hours_raw: 'Daily 17:00–24:00 (last order 23:30); irregular closing days (Tabelog). Reservations recommended; phone to ask for a seat type (Tabelog; August 2026). Cards, e-money and QR accepted; ¥400 a head charge, waived for course bookings (Tabelog). 25 seats with counter; smoking allowed; can be smoky from the grill (Tabelog; August 2026). Order by QR code (June 2026). Opened 2 November 2015 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-7-8, 2nd floor of サンコープラザ, up the stairs — 2 min from Nishinakajima-Minamigata Stn, 3 min from Hankyu Minamikata Stn (Tabelog; September 2026)',
    cuisine: 'Yakiton: grilled pork skewers of many cuts (2026) · "omakase five skewers", brought five of a kind at a time (July–August 2026); pork harami (June and October 2026); "kimo-spe" liver skewer (August 2026); tsukune with sauce or cheese (June 2026) · pork sashimi, low-temperature cooked, a four-kind platter of tongue, stomach, heart and uterus (August–October 2026) · homemade offal stew (July 2026) · appetiser of seasonal vegetables with miso (June and September 2026) · sake, shochu, wine, sours; courses with all-you-can-drink (Tabelog; 2026) · about ¥4,000–5,000 a head (2026)',
    website: W, gmaps: gm('豚中島南方 西中島'), menu_url: null,
    notes: "[Yakiton · Nishinakajima, pork skewers and pork sashimi up a flight of stairs] A small, smoky, always-busy yakiton bar on a second floor near Nishinakajima-Minamigata, all about pork (2026). Start with the seasonal vegetables and miso, try the low-temperature pork sashimi platter (tongue, stomach, heart and uterus), then order the omakase five skewers, with the rich harami and the \"kimo-spe\" liver as favourites (2026). About ¥4,000–5,000 a head; ¥400 cover unless you book a course. Book ahead; smoking allowed. Open every night to midnight.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond a note on its sister shop, PIZZA Ichiro, a stone-oven vegetable-pizza shop in Nishinakajima; opened 2 November 2015 (Tabelog). Operator brand page: butanaka.com. Reviewers: yakiton is rare in Kansai (August 2026).', philosophy: null, specialty: 'Omakase five skewers; pork sashimi.',
      anecdotes: [
        { text: '"Personally, I really enjoyed the harami (pork skirt)." — June 2026, five-kind yakitori platter.', source: R + 'B530382615/' },
        { text: '"This dish allows you to savor rare cuts of pork as sashimi, including tongue, stomach, heart, and uterus, making it fun to compare the different offerings of the day." — August 2026, four-kind sashimi platter.', source: R + 'B536362647/' },
        { text: '"The fat was so tasty that I couldn\'t stop eating!" — August 2026, first yakiton.', source: R + 'B534503362/' },
      ],
      japanese_sources_summary: '食べログ: 豚中島南方、居酒屋・焼き鳥・焼肉、大阪市淀川区西中島4-7-8 サンコープラザ 2F、西中島南方駅から徒歩2分、阪急 南方駅から徒歩3分、毎日17:00〜24:00 (L.O. 23:30)、不定休、予約可 (席の種類は電話で)、カード・電子マネー・QR 可、チャージ1人400円 (コース予約はなし)、25席、喫煙可、飲み放題のコース、2015年11月2日オープン、姉妹店に石窯の野菜のピザの「PIZZA Ichiro」、ブランドのサイト butanaka.com。口コミ (2026年6〜10月): 豚の焼きとん、注文は QR、お通しは季節の野菜と味噌、おまかせ5本は同じ部位が5本ずつ、豚ハラミ、「kimo-spe」、つくねはタレかチーズ、低温調理の豚の刺身の4種盛り (タン、ガツ、ハツ、子宮)、自家製のもつ煮込み、煙が多い、席はせまい、いつも満席なので予約を、ひとり約4,000〜5,000円、関西では焼きとんはめずらしい。',
      confidence: 'medium', sources: [TB, W, R + 'B530382615/', R + 'B531336529/', R + 'B531999825/', R + 'B534503362/', R + 'B536276190/', R + 'B536362647/', R + 'B536434339/', R + 'B536564228/', R + 'B537930732/', R + 'B538344792/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; book ahead; smoky and smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-7-8 サンコープラザ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目7番8号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531999825/', R + 'B536362647/'],
    price_note: 'No dish prices in the reviews; about ¥4,000–5,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase five skewers', '', 'Skewers', 'ask', 'no', 'July–August 2026.', 'omakase_5'),
      it('', '', 'Pork sashimi, four kinds', '', 'Sashimi', 'ask', 'no', 'August 2026.', 'butasashi_4'),
      it('', '', 'Pork harami skewer', '', 'Skewers', 'ask', 'no', 'June and October 2026.', 'harami'),
      it('', '', 'Homemade offal stew', '', 'Dishes', 'ask', 'no', 'July 2026.', 'motsuni'),
    ] }, {
    cuisine: '焼きとん: いろいろな部位の豚の串焼き (2026年)・「おまかせ5本」は同じ部位が5本ずつ出てくる (2026年7〜8月)。豚ハラミ (2026年6月と10月)。レバーの「kimo-spe」(2026年8月)。つくねはタレかチーズ (2026年6月)・低温調理の豚の刺身、タン、ガツ、ハツ、子宮の4種盛り (2026年8〜10月)・自家製のもつ煮込み (2026年7月)・お通しは季節の野菜と味噌 (2026年6月と9月)・日本酒、焼酎、ワイン、サワー。飲み放題のコース (食べログ。2026年)・ひとり約4,000〜5,000円 (2026年)',
    neighborhood: '西中島4-7-8、サンコープラザの2階、階段を上がって。西中島南方駅から徒歩2分、阪急 南方駅から徒歩3分 (食べログ。2026年9月)',
    gf_detail: '要確認。グルテンの情報なし。串は塩かタレ、つくねはタレかチーズ (2026年6月)。',
    vegan_detail: 'ヴィーガンではありません。豚の焼きとんの店。',
    notes: '[焼きとん・西中島、階段を上がった先の豚の串と豚の刺身] 西中島南方駅の近く、2階にある小さくて煙たい、いつも満席の焼きとんの店で、豚づくし (2026年)。まずは季節の野菜と味噌、低温調理の豚の刺身の盛り合わせ (タン、ガツ、ハツ、子宮)、それからおまかせの串5本。人気はこってりしたハラミとレバーの「kimo-spe」(2026年)。ひとり約4,000〜5,000円。コースを予約しなければチャージ400円。予約を。喫煙可。毎晩夜12時まで。',
  });
}

save();

// ================================================================ FIX for batch 20 (runs after save(); idempotent)
{
  const { readLang, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);
  const FIX = {
    osaka_sakana_ryori_anono_higashimikuni: [['あのの御膳', 'Anono Gozen']],
    osaka_robata_dokoro_isshin_higashimikuni: [['ガチャ焼き', 'Gacha-yaki']],
  };
  const swap = (s, pairs) => { let n = 0; for (const [a, b] of pairs) { n += s.split(a).length - 1; s = s.split(a).join(b); } return [s, n]; };
  const file = 'data/osaka.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
  const ja = readLang('osaka', 'ja');
  let total = 0;
  for (const [id, pairs] of Object.entries(FIX)) {
    const p = d.places.find(x => x.id === id);
    if (!p) throw new Error('b20 fix: missing record ' + id);
    let n;
    [p.chef_bio.japanese_sources_summary, n] = swap(p.chef_bio.japanese_sources_summary, pairs);
    if (n) console.log(`b20 fix ${id}: chef_bio.japanese_sources_summary ${n}`); total += n;
    for (const [k, v] of Object.entries(ja[id] || {})) {
      if (typeof v !== 'string') continue;
      [ja[id][k], n] = swap(v, pairs);
      if (n) { console.log(`b20 fix ${id}: ja.${k} ${n}`); total += n; }
    }
  }
  if (total) { fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d)); writeLang('osaka', 'ja', ja); }
  console.log(`b20 fix: replaced ${total}`);
}
