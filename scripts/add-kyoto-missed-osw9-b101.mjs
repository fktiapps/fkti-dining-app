// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 101.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   - なか卯 烏丸夷川店 — national chain
//   + 富易流行 (kappo-style casual kaiseki in a townhouse on Sanjo west of Aburanokoji; opened 19 July 2026)
//   + お食事処 さくら (noodle and rice-bowl dining room above the 桜士堂 souvenir shop on Kiyomizu-zaka)
//   + 亀屋伊織 (tea-ceremony dry-sweets maker on Nijo, founded in the early 1600s; by reservation, takeaway only)
//   - Vermillion - station. — same-concept branch of Vermillion Cafe, already in data
//   - patisserie an du temps pour la maison kyoto — retail food shop
//   + 而今 平たて (Jikon Hiratate; kappo near Marutamachi Stn, opened 15 April 2022)
//   Brand checks: data/kyoto.json grepped for 富易流行, お食事処 さくら, 桜士堂, 亀屋伊織, 而今, 平たて — no records;
//   Vermillion → ChIJ7V6ukxUPAWAR1z7SkqVGAA0 "Vermillion Cafe (Fushimi Inari)". No other worker's pending
//   script (osw1 b106, osw6 b105, osw8 b107, osw13 b134) names an id in this lane.
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-101');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018543', 'national chain: なか卯 (beef-bowl and udon chain) — 烏丸夷川店 is one branch');
skip('26043641', 'same-concept branch of a brand already in data: Vermillion - station. (opened 9 September 2025) is a sister café of Vermillion Cafe by Fushimi Inari (ChIJ7V6ukxUPAWAR1z7SkqVGAA0); an August 2026 review counts four Vermillion locations around Fushimi Inari and Kyoto Station');
skip('26041157', 'retail food shop (Greg 11-07 ruling): patisserie an du temps pour la maison kyoto is a takeaway French patisserie on Gokomachi, moved from Nagoya and opened 30 April 2024 (Tabelog); not historic, no GF or vegan options sourced (2026 reviews)');

// ================================================================ 富易流行
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26045363/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '13:30'], ['17:30', '22:30']); const N = day(['17:30', '22:30']);
  put({
    id: 'kyoto_kappo_tb26045363_sanjo', name: '富易流行', category: 'OMNI',
    lat: 35.00854369705486, lng: 135.75331896685262, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu has fried horse mackerel, an eel cutlet, a croquette, spring rolls, a tuna sandwich and pasta, and dishes with Saikyo miso and soy-based teriyaki (Tabelog menu, October 2026); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kaiseki menu with dashi tamagoyaki, and the lunch set comes with red miso soup (Tabelog menu; November 2026 review). Grilled vegetables and sesame tofu are on the menu, but nothing is described as vegan.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:30–13:30 (last seating and L.O. 13:00) and 17:30–22:30 (L.O. 22:00); Thu, public holidays and the days before and after them 17:30–22:30 only; closed Wednesdays (Tabelog, official information). Lunch began in October 2026, four months after opening (November 2026 review). Reservations taken; guests of middle-school age and older only (Tabelog). Courses (tax included): ¥8,000 and ¥10,000, ten dishes each, 2–14 people; a ¥7,000 plan for one group a day in the private room upstairs, eight dishes with 120 minutes of self-serve drinks, 4–10 people (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and iD; no QR (Tabelog). 20 seats: 14 at the counter and a private room for six; private use up to 20 (Tabelog). Non-smoking, with a smoking spot in the courtyard for one person at a time (Tabelog). On Sanjo-dori west of Aburanokoji, 8 min walk from Nijojo-mae Stn, 472 m (Tabelog). Opened 19 July 2026 (Tabelog).',
    hours: { 0: L, 1: L, 3: N, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori west of Aburanokoji, east of Horikawa — 472 m from Nijojo-mae Stn',
    cuisine: 'Casual kaiseki mixing Japanese cooking with Italian and Chinese touches, in a townhouse with a small courtyard garden (Tabelog, official information). À la carte (Tabelog menu, October 2026, tax included): smoked bonito tataki ¥1,800, live sea bream sashimi ¥1,600, bluefin tuna sashimi with tekka maki ¥2,200; vinegared swimming crab with pear and daikon ¥1,800, simmered Kyoto duck breast ¥1,500, bang bang chicken ¥700, mouth-watering chicken ¥800, dashi tamagoyaki ¥800, sesame tofu ¥350, shrimp chilli spring roll ¥900, eel cutlet ¥900; over charcoal: chicken thigh ¥1,200, kombu-cured pork loin ¥1,500, Miyazaki beef sirloin cap ¥3,000, sweetfish ¥2,500, yellowtail teriyaki ¥1,200, half an eel ¥3,000, vegetables ¥800 each; small hot pots for two of soft-shelled turtle or shark fin ¥2,600, hamo yanagawa ¥2,000, mapo tofu ¥1,400, hamo and matsutake ¥3,000; to finish, maitake and hamo takikomi rice ¥1,200 (about 30 min), hamo sushi ¥900, pasta ¥1,200, spiced chicken curry ¥800; ice cream ¥500. Seasonal sake (Tabelog). Lunch set ¥2,800: three obanzai, charcoal-grilled yellowtail, salmon or mackerel, clay-pot rice with free refills and red miso soup (October and November 2026 reviews). A July 2026 diner had two appetizers, potato salad, a summer-vegetable tomato stew and the chicken curry for ¥3,000–3,999.',
    website: null, gmaps: gm('富易流行 京都 三条油小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Kaiseki · Sanjo] A new townhouse restaurant on Sanjo near Aburanokoji (July 2026): an L-shaped counter in front of the charcoal grill and a courtyard at the back, with ¥8,000–10,000 courses or à la carte mixing Kyoto cooking with Chinese and Italian dishes at night, and a ¥2,800 grilled-fish lunch with obanzai and refills of clay-pot rice. Closed Wednesdays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 19 July 2026 (Tabelog). The shop\'s own Tabelog text describes kaiseki that keeps its tradition while taking in new elements, with Italian and Chinese flavours alongside Japanese cooking. A July 2026 reviewer wrote that the chef trained at a well-known Kyoto restaurant and that the name stands for the idea of constant change.',
      philosophy: 'The shop\'s Tabelog text: kaiseki that evolves by taking in new things while keeping its essence and tradition, without formality.',
      specialty: 'Charcoal-grilled fish and meat; small hot pots of soft-shelled turtle or shark fin; the grilled-fish lunch.',
      anecdotes: [
        { text: 'A November 2026 couple came in off the Sanjo shopping street after seeing the lunch menu outside; watching the big salmon grilled over charcoal at the counter, the two swapped pieces of salmon and yellowtail, and the staff showed them the private room off the courtyard.', source: R + 'B539162748/' },
        { text: 'An October 2026 first-timer praised the room, the food and the friendly staff, called the ¥2,800 lunch with unlimited clay-pot rice a great deal, and liked the look of the Japanese–Western dinner menu.', source: R + 'B537173439/' },
        { text: 'A November 2026 diner liked the sesame tofu among the obanzai and the tender, crisp-skinned grilled fish.', source: R + 'B539981680/' },
      ],
      japanese_sources_summary: '食べログ (店舗の公式情報): 富易流行、日本料理・創作料理・海鮮、中京区三条通油小路西入ル橋東詰町27、二条城前駅から徒歩8分 (472m)、月火金土日 11:30〜13:30 (L.O. 13:00)・17:30〜22:30 (L.O. 22:00)、木曜と祝日・祝前日・祝後日は夜のみ、水曜休み、予約可、中学生以上、コース8,000円と10,000円 (10品)、2階の個室の飲み放題つきプラン7,000円、カード・iD 可、20席 (カウンター14席、6名の個室)、中庭に喫煙所、2026年7月19日オープン。京町家の割烹、和食にイタリアンと中華の要素、炭火焼き、季節の日本酒。口コミ (2026年7月〜11月、英語): 京都の名店で修業した料理人、昼の定食2,800円 (おばんざい3品、ぶり・サーモン・さばの炭火焼き、土鍋ごはんのおかわり自由、赤だし)、昼の営業は10月から、L字のカウンター、中庭と個室。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B533020511/', R + 'B537005760/', R + 'B537173439/', R + 'B538886046/', R + 'B539162748/', R + 'B539981680/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses bookable on Tabelog; phone service may be Japanese only (Tabelog). Friendly staff (October 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通油小路西入ル橋東詰町27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 19 October 2026); reviews dated July–November 2026.' },
    pin_source: `Tabelog ${TB} (35.008544, 135.753319); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB, R + 'B537173439/'],
    price_note: 'Tabelog menu, tax included (updated 19 October 2026; dish names are Tabelog\'s English); course prices from Tabelog; lunch set price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course, ten dishes', '¥8,000', 'Courses', 'ask', 'no', 'Tabelog; 2–14 people.', 'course_8000'),
      it('', '', 'Course, ten dishes', '¥10,000', 'Courses', 'ask', 'no', 'Tabelog; 2–14 people.', 'course_10000'),
      it('', '', 'Lunch set (three obanzai, charcoal-grilled fish, clay-pot rice, red miso soup)', '¥2,800', 'Lunch', 'ask', 'no', 'October and November 2026 reviews; rice refills free.', 'lunch_set'),
      it('', '', 'Smoked bonito tataki', '¥1,800', 'Sashimi', 'ask', 'no', 'Tabelog menu.', 'katsuo_tataki'),
      it('', '', 'Sesame tofu (1 piece)', '¥350', 'À la carte', 'ask', 'ask', 'Tabelog menu.', 'goma_dofu'),
      it('', '', 'Dashi tamagoyaki', '¥800', 'À la carte', 'ask', 'no', 'Tabelog menu.', 'dashimaki'),
      it('', '', 'Charcoal-grilled Miyazaki beef sirloin cap', '¥3,000', 'Charcoal-grilled', 'ask', 'no', 'Tabelog menu.', 'beef_sirloin'),
      it('', '', 'Soft-shelled turtle small hot pot (for two)', '¥2,600', 'Hot pots', 'ask', 'no', 'Tabelog menu.', 'suppon_nabe'),
      it('', '', 'Maitake and hamo takikomi rice', '¥1,200', 'Finish', 'ask', 'no', 'Tabelog menu; about 30 minutes.', 'takikomi_gohan'),
      it('', '', 'Spiced chicken curry', '¥800', 'Finish', 'ask', 'no', 'Tabelog menu; also July 2026 review.', 'chicken_curry'),
    ] }, {
    cuisine: '京町家の小さな中庭のある店で、和食にイタリアンと中華の要素を取り入れた気軽な会席 (食べログの店舗の公式情報)。一品 (食べログのメニュー、2026年10月、税込): 燻製のかつおのたたき1,800円、活け鯛の刺身1,600円、本まぐろの刺身と鉄火巻2,200円、渡り蟹と梨と大根の酢の物1,800円、京都の鴨の胸肉の煮物1,500円、バンバンジー700円、よだれ鶏800円、だし巻き800円、ごま豆腐350円、海老チリの春巻き900円、うなぎのカツ900円。炭火焼き: 鶏もも1,200円、昆布締めの豚ロース1,500円、宮崎牛のサーロイン3,000円、鮎2,500円、ぶりの照り焼き1,200円、うなぎ半身3,000円、野菜各800円。2人前の小鍋: すっぽんかふかひれ2,600円、はもの柳川2,000円、麻婆豆腐1,400円、はもと松茸3,000円。しめ: 舞茸とはもの炊き込みごはん1,200円 (30分ほど)、はも寿司900円、パスタ1,200円、スパイスチキンカレー800円。アイス500円。季節の日本酒 (食べログ)。昼の定食2,800円: おばんざい3品、ぶり・サーモン・さばから選ぶ炭火焼き、土鍋ごはん (おかわり自由)、赤だし (2026年10月と11月の口コミ)。2026年7月の口コミでは前菜2品、ポテトサラダ、夏野菜のトマト煮、チキンカレーで3,000〜3,999円。',
    neighborhood: '三条通の油小路の西、堀川の東。二条城前駅から472m',
    gf_detail: '要確認。あじフライ、うなぎのカツ、コロッケ、春巻き、ツナサンド、パスタ、西京味噌や照り焼きの料理がある (食べログのメニュー、2026年10月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚が中心の会席で、だし巻きがあり、昼の定食は赤だしつき (食べログのメニュー、2026年11月の口コミ)。焼き野菜やごま豆腐もあるが、ヴィーガンとは書かれていない。',
    notes: '[会席・三条] 三条通の油小路近く、2026年7月にできた町家の店。炭火の焼き台の前のL字のカウンターと奥の中庭。夜は8,000〜10,000円のコースか一品で、京料理に中華やイタリアンを合わせた料理。昼はおばんざいと土鍋ごはんおかわり自由の焼き魚の定食が2,800円。水曜休み。',
  });
}

// ================================================================ お食事処 さくら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025197/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.oshido.com/';
  const D = day(['10:00', '17:00']);
  put({
    id: 'kyoto_sakura_tb26025197_kiyomizu', name: 'お食事処 さくら', category: 'OMNI',
    lat: 34.995372537077515, lng: 135.78251287908745, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a menu of wheat udon, soba, tempura, katsu-don and curry (Tabelog menu, 2017); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon and soba in dashi broth, rice bowls with egg, chicken, crab, eel or pork; the yuba rice bowl contains chicken (January 2026 review).',
    hours_raw: 'Daily 10:00–17:00, closing days not fixed (Tabelog, official information); the same listing carries an older notice of shortened hours, 11:00–16:00 (L.O. 15:30), during the COVID-19 period. No reservations (Tabelog). Cards (VISA, Master, AMEX); no e-money (Tabelog). No service charge (Tabelog, original text なし). 46 seats: a shared counter of six, six tables for four and four tatami rooms for four (Tabelog). Non-smoking (Tabelog). Children and babies welcome (Tabelog). Upstairs from the 桜士堂 (OSHIDO) souvenir and accessories shop on the Kiyomizu-dera approach, with window seats looking down on the street (Tabelog; May 2022 and December 2024 reviews); 8 min from the Kiyomizu-michi bus stop, 18 min walk from Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-zaka, on the approach to Kiyomizu-dera — 18 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Noodles and rice bowls for sightseers (Tabelog menu, last updated 4 April 2017, then 8% tax included): tsukimi and kitsune udon ¥740 (and a "flower" udon and soba, ¥740), tempura udon ¥1,010, zaru udon ¥790; wild-vegetable, nishin, tempura and yamakake soba ¥1,010, zaru soba ¥790; light Japanese-style ramen with house roast pork ¥950, cold ramen in summer ¥1,010; egg bowl ¥790, oyako-don and crab bowl ¥1,010, katsu-don ¥1,060, tempura bowl ¥1,220, eel bowl ¥1,620; curry rice ¥900, katsu curry ¥1,060. The owner\'s site adds 京ゆば丼, 抹茶ガトーショコラ, ぜんざい, coffee, tea and cakes. Reviews: yuba bowl with soba (November 2025); yuba bowl with chicken in a thick broth, about 15 min to make (January 2026); nishin soba (February 2026); kitsune udon with chopped fried tofu (February 2025, April 2026); yamakake udon (May 2026); yuba udon (December 2024); matcha beer and katsu-don (August 2024); tempura soba (November 2015).',
    website: SITE, gmaps: gm('お食事処 さくら 桜士堂 清水'), menu_url: TB + 'dtlmenu/',
    notes: '[Udon & soba · Kiyomizu-zaka] A big upstairs dining room above a souvenir shop on the way to Kiyomizu-dera: kitsune udon, nishin soba, yuba rice bowls and katsu-don, with window seats over the crowds on the approach. Quick, plain and around ¥1,000–2,000; one reviewer found the udon very poor, others liked the yuba bowl and herring soba.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The dining room is the second floor of 京みやげ 桜士堂, a Kyoto souvenir and traditional-accessories shop founded in 1887 (Meiji 20) according to its own site (oshido.com); Tabelog lists the shop below and the dining room above.',
      philosophy: null,
      specialty: 'Yuba rice bowl; nishin soba; kitsune udon.',
      anecdotes: [
        { text: 'Coming back from a New Year shrine visit to Kiyomizu in January 2026, a diner was seated at once (groups were waiting minutes later), chose the yuba bowl over katsu-don, and was told it would take about 15 minutes; it arrived together with a companion\'s order.', source: R + 'B520057428/' },
        { text: 'A February 2026 visitor with no expectations found the herring in the nishin soba carefully deboned and the broth rich, though the soba itself was average.', source: R + 'B523426176/' },
        { text: 'In April 2026 the room was nearly empty; the staff had to be called over, but the cook kept glancing across, which made it easier for a shy diner.', source: R + 'B526429426/' },
        { text: 'An October 2024 group who all ordered udon called it the least tasty udon the reviewer had ever eaten, with no chewiness at all.', source: R + 'B494103635/' },
      ],
      japanese_sources_summary: '食べログ (店舗の公式情報): お食事処 さくら、定食・カフェ・日本料理、東山区清水1-276 桜士堂 2F、清水五条駅から徒歩18分、バス停「清水道」から8分、毎日 10:00〜17:00、不定休 (新型コロナの時期は11:00〜16:00)、予約不可、カード可、サービス料なし、46席 (相席のカウンター6席、テーブル、座敷)、禁煙、子ども可。1階は京みやげと和装小物の桜士堂、2階が食事処。メニュー (2017年4月更新): うどん、そば、和風の中華そば、丼物、カレー。桜士堂の公式サイト: 創業明治20年 (1887年)、各種うどん・そば・丼物からカレーライスまで、京ゆば丼、抹茶ガトーショコラ。口コミ (2015〜2026年、英語): 窓ぎわの席から参道を見下ろす、ゆば丼、にしんそば、きつねうどん、山かけうどん、抹茶ビール。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', SITE, R + 'B449353284/', R + 'B490828967/', R + 'B491665186/', R + 'B494103635/', R + 'B500753153/', R + 'B503319903/', R + 'B517168305/', R + 'B520057428/', R + 'B523426176/', R + 'B526429426/', R + 'B529208756/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy sightseeing stop on the Kiyomizu approach with a menu posted outside (January 2026 review); the server was very nice (May 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1-276 桜士堂 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through May 2026; the owner\'s site (oshido.com) describes the dining room.' },
    pin_source: `Tabelog ${TB} (34.995373, 135.782513); nearest record kyoto_saryo_kiraku (清水1-280 朝日堂本店2F) about 8 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Tabelog menu, last updated 4 April 2017, with 8% tax included; current prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Kitsune udon', '¥740', 'Udon', 'no', 'no', 'Tabelog menu (2017); February 2025 and April 2026 reviews.', 'kitsune_udon'),
      it('', '', 'Tempura udon', '¥1,010', 'Udon', 'no', 'no', 'Tabelog menu (2017).', 'tempura_udon'),
      it('', '', 'Nishin soba', '¥1,010', 'Soba', 'no', 'no', 'Tabelog menu (2017); February 2026 review.', 'nishin_soba'),
      it('', '', 'Yamakake soba', '¥1,010', 'Soba', 'no', 'no', 'Tabelog menu (2017).', 'yamakake_soba'),
      it('', '', 'Japanese-style ramen', '¥950', 'Noodles', 'no', 'no', 'Tabelog menu (2017); light broth, house roast pork.', 'chuka_soba'),
      it('', '', 'Oyako-don', '¥1,010', 'Rice bowls', 'ask', 'no', 'Tabelog menu (2017).', 'oyakodon'),
      it('', '', 'Katsu-don', '¥1,060', 'Rice bowls', 'no', 'no', 'Tabelog menu (2017); August 2024 review.', 'katsudon'),
      it('', '', 'Eel rice bowl', '¥1,620', 'Rice bowls', 'ask', 'no', 'Tabelog menu (2017).', 'unadon'),
      it('京ゆば丼', '', 'Kyoto yuba rice bowl', '', 'Rice bowls', 'ask', 'no', 'Owner\'s site; with chicken (January 2026 review).', 'yuba_don'),
      it('', '', 'Curry rice', '¥900', 'Light meals', 'no', 'no', 'Tabelog menu (2017).', 'curry_rice'),
    ] }, {
    cuisine: '観光客向けのうどん、そば、丼物 (食べログのメニュー、2017年4月4日更新、当時の8%の税込): 月見・きつねうどん740円、天ぷらうどん1,010円、ざるうどん790円、山菜・にしん・天ぷら・山かけそば1,010円、ざるそば790円、あっさりした和風の中華そば (自家製チャーシュー) 950円、夏の冷やし中華1,010円、玉子丼790円、親子丼・かに丼1,010円、カツ丼1,060円、天丼1,220円、うな丼1,620円、カレーライス900円、カツカレー1,060円。桜士堂の公式サイトには京ゆば丼、抹茶ガトーショコラ、ぜんざい、コーヒー、紅茶、ケーキも。口コミ: ゆば丼とそば (2025年11月)、鶏肉の入ったとろみのあるだしのゆば丼、15分ほどかかる (2026年1月)、にしんそば (2026年2月)、刻んだ油揚げのきつねうどん (2025年2月、2026年4月)、山かけうどん (2026年5月)、湯葉のうどん (2024年12月)、抹茶ビールとカツ丼 (2024年8月)、天ぷらそば (2015年11月)。',
    neighborhood: '清水坂、清水寺への参道。清水五条駅から徒歩18分',
    gf_detail: 'グルテンフリー不可。小麦のうどん、そば、天ぷら、カツ丼、カレー (食べログのメニュー、2017年)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。うどんとそばはだし、丼物は卵、鶏肉、かに、うなぎ、豚肉。ゆば丼にも鶏肉が入る (2026年1月の口コミ)。',
    notes: '[うどん・そば・清水坂] 清水寺への参道、みやげ物店の2階の広い食事処。きつねうどん、にしんそば、ゆば丼、カツ丼。窓ぎわの席から参道の人波を見下ろせる。手早く素朴で1,000〜2,000円ほど。うどんを酷評する口コミもあるが、ゆば丼やにしんそばをほめる口コミも。',
  });
}

// ================================================================ 亀屋伊織
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007221/'; const R = TB + 'dtlrvwlst/';
  const WARAKU = 'https://intojapanwaraku.com/travel/1377/';
  const D = day(['09:00', '16:00']);
  put({
    id: 'kyoto_kameya_iori_nijo', name: '亀屋伊織 (Kameya Iori)', category: 'OMNI',
    lat: 35.01357504786326, lng: 135.75721823045083, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dry sweets for the tea ceremony — sugar candy, pressed sugar sweets and senbei wafers (2013–2023 reviews); no ingredient or gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Sugar candy and pressed sugar sweets (2015–2023 reviews); no ingredient information.',
    hours_raw: 'Takeaway only, by reservation only: 9:00–16:00, closing days not fixed (Tabelog). Order by phone in advance (a January 2018 reviewer called about ten days ahead); the reviewer of March 2023 had heard that the shop asks about the size of the tea gathering, the host\'s intentions, the utensils and the matcha. The basic order is a set of two or three kinds of dry sweets for a tea gathering, usually from about ten portions, five at the least (Tabelog). A January 2018 regular warned that first-time visitors are not welcomed; first-time buyers in January 2018 and March 2023 ordered by phone and were served. No cards (Tabelog). No branches, no delivery and no samples (2018 and 2023 reviews). On Nijo-dori east of Shinmachi, a black-and-white noren at the door; 376 m from Karasuma-Oike Stn (Tabelog; January 2018 review). Founded in the early 1600s (Waraku, July 2014 issue); family succession: a July 2013 reviewer calls it family-run, and a January 2019 reviewer spoke to the previous owner.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of Shinmachi, near Nijo Castle and the Imperial Palace — 376 m from Karasuma-Oike Stn',
    cuisine: 'Dry sweets (higashi) for the tea ceremony only, made to order for each gathering and season (Waraku, July 2014; 2013–2023 reviews): sugar candy made without starch syrup, which melts almost at once (October 2015, March 2023), pressed sugar sweets, and senbei wafers. Orders seen: seasonal omakase of two kinds for ten people ¥2,484 (January 2018, a pink plum-shaped pressed sweet and green leaves); a 20-piece set of senbei and sugar sweets ¥5,000 (July 2013); the January set of three kinds with plum and pine needles (January 2018); fox-mask senbei and a twisted red-and-white candy for the first Uma-day festival at Fushimi Inari on 2 February (February 2019).',
    website: null, gmaps: gm('亀屋伊織 京都 二条通新町'), menu_url: null,
    notes: '[Tea sweets · Nijo] A Kyoto confectioner making only dry sweets for the tea ceremony since the early 1600s: delicate sugar candy, pressed sugar sweets and senbei, made to order for each gathering. Phone ahead (usually ten portions or more), collect at the townhouse on Nijo; no shop window, no branches, no samples. Takeaway only.',
    chef_bio: { chef_name: '山田和市', roles: ['Owner'], origin: null,
      background: 'Founded in the early 1600s; by oral tradition the name 伊織 was granted when the shop offered a sweet called 「木の葉」 to the third shogun, Tokugawa Iemitsu; it has made nothing but dry sweets for tea gatherings for 400 years; the owner is 山田和市 (Waraku, July 2014 issue, reprinted 21 August 2019). A March 2023 reviewer adds that the founding year is not known because records were lost to fires and upheavals. A July 2013 reviewer calls it a family-run business keeping traditional methods; a January 2019 reviewer, who first came with a grandmother, recalled the previous owner explaining that some sweets harden quickly, so the work must be fast and exact.',
      philosophy: 'Only sweets for tea, each made to suit the season and the theme of the gathering (Waraku; 2013 and 2018 reviews).',
      specialty: 'Sugar candy; pressed sugar sweets; senbei for tea.',
      anecdotes: [
        { text: 'A January 2018 buyer booked by phone about ten days ahead and, hearing the sweets were for tea with friends, was recommended a pressed sugar sweet and a candy; collected in a calm room of earthen floor and tatami with a charcoal hibachi, scrolls and a paulownia chest, but no showcase.', source: R + 'B251214629/' },
        { text: 'An Urasenke student in October 2015 wrote that the sugar candy is processed until it is not sticky at all, so it melts at once — the host offers it just before serving thin tea.', source: R + 'B293286399/' },
        { text: 'In February 2019 a buyer was set aside fox-mask senbei, with eyes drawn on with a hot iron, and a twisted red-and-white candy for the first Uma festival at Fushimi Inari, kept in a paulownia chest.', source: R + 'B57658941/' },
        { text: 'A March 2023 first-timer, after hesitating for years over the questions the shop asks when booking, finally ordered, bringing matcha from a historic Kyoto tea shop.', source: R + 'B315593542/' },
      ],
      japanese_sources_summary: '食べログ: 亀屋伊織、和菓子、中京区二条通新町東入ル、烏丸御池駅から376m、9:00〜16:00、不定休 (完全予約制)、カード不可、テイクアウト。茶会用の干菓子の販売が基本で、2〜3種から選び、通常は10人前ほどから、5人前から応じる。和樂 (2014年7月号、2019年8月21日掲載): 創業1600年代初め、茶会に出される干菓子のみをつくり続けて400年、徳川家光公に「木の葉」という菓子を献上して「伊織」の名を賜ったという口伝、主人は山田和市さん、要予約。口コミ (2008〜2025年): 家族で営む (2013年7月)、支店も配送もない、見本なし (2018年、2023年)、有平糖、落雁、煎餅、季節のおまかせ2種10人前2,484円 (2018年1月)、20個のセット5,000円 (2013年7月)、先代の話 (2019年1月)、一見は難しいという声 (2018年1月)。',
      confidence: 'medium', sources: [TB, WARAKU, R + 'B111442784/', R + 'B142378549/', R + 'B251214629/', R + 'B293286399/', R + 'B302397628/', R + 'B315593542/', R + 'B319035195/', R + 'B411123289/', R + 'B459431193/', R + 'B516418047/', R + 'B57658941/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone orders only, and the shop asks about the tea gathering when booking (March 2023 review); phone service may be Japanese only (Tabelog). One January 2018 reviewer says first-time visitors are not welcomed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区二条通新町東入ル',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no official information); latest review dated November 2025; Waraku article reprinted August 2019.' },
    pin_source: `Tabelog ${TB} (35.013575, 135.757218); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B251214629/', R + 'B111442784/', TB],
    price_note: 'No current prices; January 2018 and July 2013 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase dry sweets, two kinds, ten portions', '¥2,484', 'Tea sweets', 'ask', 'ask', 'January 2018 review; by order only.', 'higashi_omakase'),
      it('', '', 'Set of 20 senbei and sugar sweets', '¥5,000', 'Tea sweets', 'ask', 'ask', 'July 2013 review.', 'higashi_set20'),
      it('有平糖', '', 'Sugar candy', '', 'Tea sweets', 'ask', 'ask', 'October 2015 and March 2023 reviews; made without starch syrup.', 'aruheito'),
    ] }, {
    cuisine: '茶道の干菓子のみを、茶会と季節に合わせて注文で作る (和樂、2014年7月号。2013〜2023年の口コミ): 水あめを使わない、口に入れるとすぐ溶ける有平糖 (2015年10月、2023年3月)、落雁、煎餅。口コミの注文: 季節のおまかせ2種10人前2,484円、ピンクの梅の形の落雁と緑の木の葉 (2018年1月)、煎餅と砂糖菓子20個のセット5,000円 (2013年7月)、梅と松葉の1月の3種 (2018年1月)、伏見稲荷大社の2月2日の祭の Fox Mask の煎餅と紅白のねじった飴 (2019年2月)。',
    neighborhood: '二条通の新町の東、二条城と御所の近く。烏丸御池駅から376m',
    gf_detail: '要確認。茶道の干菓子 (有平糖、落雁、煎餅、2013〜2023年の口コミ)。材料やグルテンの情報はない。',
    vegan_detail: '要確認。有平糖と落雁 (2015〜2023年の口コミ)。材料の情報はない。',
    notes: '[茶の干菓子・二条] 1600年代初めから茶道の干菓子だけを作る京都の店。口どけのよい有平糖、落雁、煎餅を、茶会ごとに注文で作る。電話で予約 (通常10人前ほどから) し、二条通の町家で受け取る。ショーケースも支店も見本もない。持ち帰りのみ。',
  });
}

// ================================================================ 而今 平たて
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037491/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/gourmet/1089668'; const WARAKU = 'https://intojapanwaraku.com/travel/254188/';
  const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/jikon-hiratate';
  const W = day(['17:00', '22:00']); const E = day(['15:00', '22:00']);
  put({
    id: 'kyoto_jikon_hiratate_marutamachi', name: '而今 平たて (Jikon Hiratate)', category: 'OMNI',
    lat: 35.01563515786295, lng: 135.76035197046943, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried white shrimp dusted with shrimp powder and fried eggplant appear in several reviews, and a sukiyaki appeared in January 2025 (2022–25 reviews); no gluten information. The shop asks guests to state allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kappo, and the shop says it cannot change the menu for guests who do not eat fish (Tabelog).',
    hours_raw: 'Tue–Fri, public holidays and the days before and after them 17:00–22:00; Sat–Sun 15:00–22:00 (food L.O. 21:00); closed Mondays, plus a longer break once a month — ask the shop (Tabelog; Michelin Guide). Reservations taken; state any allergies; no strong perfume (Tabelog). The shop\'s note for visitors from overseas: guests who cannot communicate in Japanese are served the course only; there are no English-speaking staff; changes other than for allergies may not be possible on the day, and the menu cannot be changed for guests who do not like fish (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 11 seats: 7 at the counter and a semi-private room for 2–4 (Tabelog). Non-smoking; smoking outside (Tabelog). 2 min walk from Exit 5 of Marutamachi Stn, 124 m (Tabelog). Opened 15 April 2022 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just south-east of Marutamachi Stn (Karasuma), Nakagyo — 124 m from Marutamachi Stn',
    cuisine: 'Kappo of seasonal fish, à la carte or an omakase course: two seasonal dishes come first, then guests order freely (Tabelog; Michelin Guide). Prices: matsutake and white tilefish steamed in sake for two ¥6,000, swimming crab and wood ear with chrysanthemum jelly ¥2,800, autumn mackerel kizushi with Shine Muscat ¥1,800, sake from ¥1,000 a gō (Serai, September 2022); about ¥17,000 a person à la carte, a seven-dish course from ¥16,000 (Waraku, prices as of September 2024). Signature clay-pot rice, with barracuda and burdock in autumn (Waraku); 「鮎と新生姜」 and 「煮穴子と実山椒」 (Waraku). Reviews: new-onion mousse, seared kampachi, fried eggplant, clay-pot rice with baby sardines, tea pudding (May 2022); fried white shrimp with shrimp powder, junsai in vinegar, corn and scallop mixed rice (July 2022); new-onion mousse with firefly squid, seared bonito, whale bacon, sake by the half-gō (April 2024); sea bream and bamboo shoot clay-pot rice (February 2024); crab and new potatoes, abalone, grilled sweetfish sushi, peach compote with sudachi (August 2024); conger eel, surf clam and sweet shrimp, sea urchin, fried Kamo eggplant (July 2025); fruit shira-ae, grilled conger eel, sea bream kamameshi (January 2025). ¥15,000–29,999 a person (2023–25 reviews).',
    website: null, gmaps: gm('而今 平たて 京都'), menu_url: null,
    notes: '[Kappo · Marutamachi] An eleven-seat kappo by Marutamachi Stn, opened in 2022 by a former head chef of the Pontocho kappo 余志屋別館: seasonal fish in surprising pairings, fried white shrimp, fruit shira-ae and clay-pot rice, à la carte after two opening dishes or as a course. About ¥15,000–20,000; guests who do not speak Japanese get the course only.',
    chef_bio: { chef_name: 'Ryosuke Hiratate (平舘亮祐)', roles: ['Owner-chef'], origin: null,
      background: 'The owner, 平舘亮祐 (ひらたてりょうすけ, Waraku), trained at Japanese restaurants including the traditional 西陣魚新 and was then head chef of 余志屋別館 in Pontocho (Serai, September 2022); Waraku describes 余志屋 (よしや) 別館 as a kappo known for kamameshi. The owner was 38 in September 2022 (Serai) and 40 at the time of the Waraku article (2023 issue). Serai names 前田真空 as front-of-house. The shop\'s Tabelog text gives 18 years in Japanese cuisine. Opened 15 April 2022 (Tabelog).',
      philosophy: '而今 means living each present moment to the full; ingredients are chosen with care and paired in creative ways, such as a fruit shira-ae (Michelin Guide).',
      specialty: 'Ingredient pairings; fried white shrimp with shrimp powder; clay-pot rice.',
      anecdotes: [
        { text: 'A July 2022 couple booked the counter for a late hour, waited in the semi-private room and were offered the counter when it freed up, but stayed put; when the two could not choose between corn and scallop mixed rice, the shop made both. The review is titled "a welcoming kappo run by a lovely couple".', source: R + 'B451676050/' },
        { text: 'A June 2024 first-timer at the counter felt neglected: the owner and a female staff member talked only with the regulars on both sides once the dishes were served, and the sake list was short.', source: R + 'B490516173/' },
        { text: 'An October 2024 group of three spent three hours in the semi-private room, ordering seven dishes à la carte with six glasses of sake recommended along the way, for just over ¥66,000.', source: R + 'B494040513/' },
        { text: 'A diner who had to dash for the Shinkansen after an August 2024 dinner came back with a friend from Osaka in July 2025 for the hot uzaku.', source: R + 'B490481727/' },
        { text: 'In September 2022 the dishes were slow enough that the diner gave up on a few orders; there was no draught beer and the semi-private room was cold. By November 2024 the same diner found the service faster but missed the Chinese touches of the earlier visit.', source: R + 'B536648400/' },
      ],
      japanese_sources_summary: '食べログ (店舗の公式情報): 而今 平たて、日本料理、中京区少将井御旅町352-1、丸太町駅5番出口から徒歩2分 (124m)、火〜金・祝日・祝前日・祝後日 17:00〜22:00、土日 15:00〜22:00 (料理L.O. 21:00)、月曜休み、月に一度の連休、予約可、アレルギーは予約時に、香水は控える、日本語での会話が難しい方はコースのみ、英語のできるスタッフはいない、魚が苦手な方への変更は不可、カード可、11席 (カウンター7席、2〜4名の半個室)、禁煙、2022年4月15日オープン。サライ (2022年9月17日、取材・文 中井シノブ): 店主の平舘亮祐さん (38歳)、『西陣魚新』など和食店で修業ののち先斗町『余志屋別館』の料理長、接客担当の前田真空さん、松茸と白ぐじの酒蒸し (2人前) 6000円、「渡り蟹ときくらげ 菊花のジュレ」2800円、秋鯖のきずしとシャインマスカット1800円、日本酒 (1合) 1000円から。和樂 (2024年10月16日、2023年10・11月号より): 而今 平たて (じこん ひらたて)、店主・平舘亮祐 (ひらたてりょうすけ) さん、現在40歳、前職は釜飯で知られる割烹「余志屋 (よしや) 別館」の料理長、看板料理の土鍋ごはん、アラカルトでひとり17,000円前後、コースは7品で16,000円から (2024年9月時点)。ミシュランガイド: 而今とは、今一瞬を懸命に生きる意味。口コミ (2022〜2025年、英語): 最初に季節の2品、あとは好みで注文、白えびの揚げ物、土鍋ごはん、ご夫婦で営むという口コミの題 (2022年7月)、常連とばかり話していたという声 (2024年6月)。',
      confidence: 'high', sources: [TB, SERAI, WARAKU, MICH, R + 'B448926324/', R + 'B451676050/', R + 'B480568200/', R + 'B483471577/', R + 'B490481727/', R + 'B490516173/', R + 'B493002296/', R + 'B493656642/', R + 'B494040513/', R + 'B499925893/', R + 'B513710717/', R + 'B536648400/'] },
    cultural_comfort: { level: 'japanese', note: 'The shop\'s own note: guests who cannot communicate in Japanese are served the course only, and there are no English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区少将井御旅町352-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; Michelin Guide listing; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.015635, 135.760352); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SERAI, WARAKU],
    price_note: 'Dish prices from Serai (September 2022); course and average spend from Waraku (prices as of September 2024).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, seven dishes (from)', '¥16,000', 'Courses', 'ask', 'no', 'Waraku, prices as of September 2024.', 'course'),
      it('松茸と白ぐじの酒蒸し', '', 'Matsutake and white tilefish steamed in sake (for two)', '¥6,000', 'À la carte', 'ask', 'no', 'Serai, September 2022.', 'matsutake_guji'),
      it('渡り蟹ときくらげ 菊花のジュレ', '', 'Swimming crab and wood ear with chrysanthemum jelly', '¥2,800', 'À la carte', 'ask', 'no', 'Serai, September 2022.', 'watarigani_jelly'),
      it('', '', 'Autumn mackerel kizushi with Shine Muscat', '¥1,800', 'À la carte', 'ask', 'no', 'Serai, September 2022.', 'saba_kizushi'),
      it('', '', 'Fried white shrimp with shrimp powder', '', 'À la carte', 'no', 'no', '2022–25 reviews.', 'shiraebi_fry'),
      it('', '', 'Clay-pot rice', '', 'Finish', 'ask', 'no', 'Waraku; 2022–25 reviews; seasonal ingredients.', 'donabe_gohan'),
      it('', '', 'Sake, per gō (from)', '¥1,000', 'Drinks', 'ask', 'ask', 'Serai, September 2022.', 'sake'),
    ] }, {
    cuisine: '季節の魚の割烹。最初に季節の2品が出て、あとはアラカルトで好みに注文するか、おまかせのコース (食べログ、ミシュランガイド)。値段: 松茸と白ぐじの酒蒸し (2人前) 6,000円、渡り蟹ときくらげ 菊花のジュレ2,800円、秋鯖のきずしとシャインマスカット1,800円、日本酒1合1,000円から (サライ、2022年9月)。アラカルトでひとり17,000円前後、コースは7品で16,000円から (和樂、2024年9月時点)。看板料理の土鍋ごはん、秋は「かますとごぼう」、「鮎と新生姜」「煮穴子と実山椒」 (和樂)。口コミ: 新玉ねぎのムース、かんぱちのたたき、揚げなす、しらすの土鍋ごはん、お茶のプリン (2022年5月)、白えびの揚げ物にえびの粉、じゅんさいの酢の物、とうもろこしとほたての混ぜごはん (2022年7月)、新玉ねぎのムースとほたるいか、かつおのたたき、くじらのベーコン、日本酒は半合で (2024年4月)、鯛とたけのこの土鍋ごはん (2024年2月)、かにと新じゃが、あわび、焼き鮎の寿司、桃のコンポートとすだち (2024年8月)、はも、ほっき貝と甘えび、うに、賀茂なすの揚げ物 (2025年7月)、フルーツの白和え、焼き穴子、鯛の釜飯 (2025年1月)。ひとり15,000〜29,999円 (2023〜25年の口コミ)。',
    neighborhood: '丸太町駅 (烏丸) のすぐ南東、中京区。丸太町駅から124m',
    gf_detail: '要確認。白えびの揚げ物や揚げなすがいくつかの口コミに出てきて、2025年1月にはすき焼きも (2022〜25年の口コミ)。グルテンの情報はない。アレルギーは予約時に伝えるよう店が求めている (食べログ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心の割烹で、魚が苦手な方への献立の変更はできないと店が書いている (食べログ)。',
    notes: '[割烹・丸太町] 丸太町駅のそばの11席の割烹。先斗町の余志屋別館の料理長だった店主が2022年に開いた店。季節の魚の意外な組み合わせ、白えびの揚げ物、フルーツの白和え、土鍋ごはん。最初の2品のあとアラカルトか、コースで。15,000〜20,000円ほど。日本語での会話が難しい方はコースのみ。',
  });
}

save();
