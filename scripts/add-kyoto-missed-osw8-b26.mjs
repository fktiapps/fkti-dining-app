// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 26.
//   + 春夏秋冬ざこや Shunkashuto Zakoya (couple-run fish counter of the Zakoya group, Karasuma Oike; core list)
//   + 鮨ざこや Sushi Zakoya (five-seat referral-only sushi counter of the same group, same building; core list)
//   + 一品料理 高倉 Ippin Ryori Takakura (family-run à la carte counter by Kawaramachi Ebisugawa; notable list)
//   + 燻 Kemuri (smoked-food izakaya in a machiya near Shijo Karasuma; notable list)
//   Picked 2026-11-05 after batch 25. `queue.mjs kyoto-missed next core 200`: どんぐり 四条烏丸店 26002363 (skipped, chain),
//   春夏秋冬ざこや 26029159, 鮨ざこや 26028817. `next notable 200`: 一品料理 高倉 26018131, アラビカ 京都 東山 26024353
//   (skipped, chain), 燻 26012683. Same-name check first, same brand or operator only: the Zakoya group runs 春夏秋冬ざこや,
//   鮨ざこや and ブイヤベースのお店 プチポワソン (in data as kyoto_petit_poisson_bouillabaisse) per an August 2025 review —
//   different concepts of a small group, so both ざこや shops are drafted as sister concepts; no other 一品料理 高倉 or 燻
//   business in our crawls (the many 高倉-named shops and the Tokyo 燻 are unrelated). None of the four is in data/kyoto.json:
//   grep by name and address (三文字町200 ミックナカムラ 2F, 西革堂町205, 善長寺町128) found none — 三文字町200 also holds
//   kyoto_fleur_de_farine on the ground floor.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002363', 'どんぐり 四条烏丸店: one of the Kyoto okonomiyaki chain どんぐり — our crawls hold 5 same-brand shops (26002363 四条烏丸店, 26005291 京都駅前店, 26021429 京都駅前・東店, 26021995 四条寺町店, 26026992 四条大宮店) — 5+ same-name shops count as a chain (Greg, 2026-11-05). (喫茶どんぐり and 蕎麦と地酒 どんぐり are unrelated.)');
skip('26024353', 'アラビカ 京都 東山: a shop of the coffee chain % ARABICA — the brand cites more than 210 stores worldwide, with three in Kyoto (Higashiyama, Arashiyama, Fujii Daimaru), and our crawls also hold アラビカ東京 麻布台ヒルズ4F店 13291787 — 5+ shops of one brand (Greg, 2026-11-05).');

// ================================================================ 春夏秋冬ざこや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029159/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_shunkashuto_zakoya', name: '春夏秋冬ざこや (Shunkashuto Zakoya)', category: 'OMNI',
    lat: 35.008407, lng: 135.761239, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish-focused courses with dashi, soy-based dishes, fried anglerfish and takikomi rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses — sashimi, grilled fish, eel, sweetfish — with dashi (2026 reviews).',
    hours_raw: 'Monday to Saturday 11:30–14:00 and 17:30–23:00, last dinner seating 21:00; closed Sunday (Tabelog). Reservation only, by the day before; fixed start times (Tabelog; September 2026). Two fish-focused courses, ¥6,500 and ¥8,800, at lunch and dinner (March–June 2026). 10 seats at a U-shaped counter; private hire up to 20; non-smoking (Tabelog; March 2026). Cards (Tabelog). Second floor of ミックナカムラ on Higashinotoin south of Sanjo; 4 min walk from Karasuma Oike Stn (exit 5 is easiest) (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin south of Sanjo, 2nd floor — 4 min walk from Karasuma Oike Stn',
    cuisine: 'Fish-focused omakase counter of about ten dishes, two courses ¥6,500 and ¥8,800 (2026 reviews) · e.g. tofu mousse, sweetfish simmered with sansho, escargot in butter, yellowtail sashimi, blue-cheese chawanmushi, sweetfish with edamame sauce, grilled eel, matsutake soup, autumn salmon rice, yatsuhashi sorbet (October 2026); gurnard grilled with crisp scales, sanma rice with Fushimi peppers (September 2026); fried anglerfish, yatsuhashi ice cream (September 2026) · leftover takikomi rice made into onigiri (June, September 2026) · a sake list with tastings before ordering (March, June 2026) · about ¥8,000–15,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('春夏秋冬ざこや 京都'), menu_url: null,
    notes: '[Fish counter · Higashinotoin Sanjo, a couple\'s omakase] A ten-seat U-shaped counter near Karasuma Oike where a couple serve fish-focused omakase courses of about ten dishes for ¥6,500 or ¥8,800, lunch or dinner: crisp-scaled grilled gurnard, eel, sweetfish, blue-cheese chawanmushi, a seasonal rice whose leftovers come back as onigiri, and a yatsuhashi sorbet. Taste the sake before you order. Book by the day before. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['A couple (unnamed), per a March 2026 review', 'Manager'], origin: null,
      background: 'Reviewers in 2026 describe "the lovely couple who runs the place" (March 2026), the owner\'s meticulous craftsmanship and sincere service (March 2026), a manager who explains each dish (March 2026), and staff who explain the sake breweries and styles (June 2026). An August 2025 review of 鮨ざこや places it in the Zakoya group with 鮨ざこや and Petit Poisson.',
      philosophy: null, specialty: 'Fish omakase; grilled fish with crisp scales.',
      anecdotes: [
        { text: '"I appreciated the service of being able to taste the Japanese sake before ordering it, which was a nice touch." — March 2026.', source: R + 'B508341909/' },
        { text: 'A June 2026 birthday diner, too full for the last rice, had it made into onigiri to take home.', source: R + 'B530143516/' },
        { text: '"It would be nice to have a few more options for white wine." — September 2026.', source: R + 'B535457626/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・魚介料理、中京区東洞院三条下ル三文字町200 ミックナカムラ2F、烏丸御池駅から徒歩4分、月〜土 11:30〜14:00・17:30〜23:00 (夜は21時が最終入店)、日曜休み、完全予約制 (前日まで)、10席 (カウンター)、貸切20名まで、禁煙、カード可。口コミ (2026年3月〜10月、英語): 魚中心の2つのコース6,500円・8,800円、昼も夜も、コの字のカウンター、夫婦で営む (2026年3月)、日本酒は試飲してから選べる、豆腐のムース、鮎の山椒煮、エスカルゴのバター、ぶりのお造り、ブルーチーズの茶碗蒸し、鰻の焼き物、松茸のお吸い物、秋鮭のご飯、八ツ橋のシャーベット、ほうぼうの鱗焼き、さんまと伏見とうがらしのご飯、あんこうの唐揚げ、残ったご飯はおにぎりに、白ワインの種類がもう少しあればとの声。',
      confidence: 'medium', sources: [TB, R + 'B508341909/', R + 'B524708760/', R + 'B525504283/', R + 'B527593320/', R + 'B530143516/', R + 'B530951157/', R + 'B535457626/', R + 'B536361770/', R + 'B536823762/', R + 'B537136491/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by the day before; set courses; sake tastings offered; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区東洞院三条下ル三文字町200 ミックナカムラ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008407, 135.761239); cross-checked: GSI 京都府京都市中京区三文字町200番地 (lot) 54 m; kyoto_fleur_de_farine (1F of the same building) is 10 m away and 鮨ざこや 6 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508341909/', R + 'B530951157/'],
    price_note: 'Course prices from March and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fish course', '¥6,500', 'Course', 'ask', 'no', 'Lunch or dinner.', 'course_6500'),
      it('', '', 'Fish course', '¥8,800', 'Course', 'ask', 'no', 'Lunch or dinner.', 'course_8800'),
    ] }, {
    cuisine: '約10品の魚中心のおまかせのカウンター、コースは6,500円と8,800円の2つ (2026年の口コミ)・例: 豆腐のムース、鮎の山椒煮、エスカルゴのバター、ぶりのお造り、ブルーチーズの茶碗蒸し、鮎の枝豆ソース、鰻の焼き物、松茸のお吸い物、秋鮭のご飯、八ツ橋のシャーベット (2026年10月)、鱗をぱりっと焼いたほうぼう、さんまと伏見とうがらしのご飯 (2026年9月)、あんこうの唐揚げ、八ツ橋のアイス (2026年9月)・残った炊き込みご飯はおにぎりに (2026年6月、9月)・試飲してから選べる日本酒 (2026年3月、6月)・8,000〜15,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '三条の南の東洞院通、ビル2階。烏丸御池駅から徒歩4分',
    gf_detail: '要確認。だし、醤油を使う料理、あんこうの唐揚げ、炊き込みご飯のある魚中心のコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、焼き魚、鰻、鮎、だしの魚のコース (2026年の口コミ)。',
    notes: '[魚のカウンター・東洞院三条、夫婦のおまかせ] 烏丸御池近くのコの字のカウンター10席で、夫婦が約10品の魚中心のおまかせを昼も夜も6,500円か8,800円で出す: 鱗をぱりっと焼いたほうぼう、鰻、鮎、ブルーチーズの茶碗蒸し、残りはおにぎりにしてくれる季節のご飯、八ツ橋のシャーベット。日本酒は試飲してから選べる。前日までに予約を。日曜休み。',
  });
}

// ================================================================ 鮨ざこや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028817/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.zacoya.com/zacoya/detail.html?id=200';
  put({
    id: 'kyoto_sushi_zakoya', name: '鮨ざこや (Sushi Zakoya)', category: 'OMNI',
    lat: 35.008440, lng: 135.761190, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae nigiri and small dishes with soy sauce, nikiri and kombu curing; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter of fish, shellfish and sea urchin (2025–2026 reviews).',
    hours_raw: 'Reservation only; irregular closures; no hours published (Tabelog); dinner usually from 18:00 (August 2026). Referral- or membership-based: Tabelog lists no phone number, and reviewers describe "a referral-only basis" (August 2025), "By Invitation Only" (February 2026) and "reservation-only and membership-based" (April 2025). A 15-piece nigiri course (April 2026); bills about ¥8,000–15,000 (Tabelog; 2025–2026 reviews). 5 counter seats and a private room for about five; private hire for up to six; non-smoking (Tabelog; April 2026). Cards (VISA, Master, JCB, AMEX) (Tabelog). Dress code: very light clothing is not appropriate (Tabelog). An unmarked room in ミックナカムラ (2F) on Higashinotoin south of Sanjo; 5 min walk from Karasuma Oike Stn (Tabelog; February 2026).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin south of Sanjo, 2nd floor — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Five-seat Edomae sushi counter of the Zakoya group, by a chef who trained in Tokyo (March 2026; August 2025) · a nigiri course of about 15 pieces with small dishes, aged fish (2025–2026 reviews) · e.g. seared hamo, Akashi sea bream, baigai, isaki, kohada with yuzu, nori-wrapped ebi, yari-ika with sea urchin (August 2025); seared sawara, kombu-cured sea bream, akagai (March 2026); sanma and shima-aji (August 2026); sea urchin heaped on at the counter, eaten with salt (October 2026) · sake such as Saku "Kami no Ho" and Dassai; a peach liqueur (2025–2026 reviews)',
    website: WEB, gmaps: gm('鮨ざこや 京都'), menu_url: null,
    notes: '[Sushi · Higashinotoin Sanjo, five seats by referral] A hidden five-seat Edomae counter (and a small private room) of the Zakoya group, behind an unmarked door: a Tokyo-trained chef serves about fifteen pieces of aged-fish nigiri — kombu-cured sea bream, kohada, sea urchin on squid — with good-value sake, for roughly ¥8,000–15,000. It works by referral: no phone number is published, and reviewers came by introduction or membership. Smart dress.',
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed), trained in Tokyo'], origin: null,
      background: 'Reviewers describe a chef who honed the craft in Tokyo (March 2026), a counter of five with a private room, and a shop of the Zakoya group, which also runs 春夏秋冬ざこや and Petit Poisson (August 2025; February 2026); access is by referral or membership, with no public phone number (2025–2026 reviews).',
      philosophy: null, specialty: 'Aged-fish Edomae nigiri.',
      anecdotes: [
        { text: 'An August 2025 diner placed it amid Kyoto\'s "sushi bubble" of ¥30,000–50,000 omakase as a referral-only counter known for reasonable prices and high satisfaction.', source: R + 'B513498564/' },
        { text: 'An August 2026 regular\'s group booked the whole counter on a Sunday, when it usually closes; everyone talked in Chinese and the chef joined in easily.', source: R + 'B426147983/' },
        { text: '"A sushi restaurant that feels like a \'secret club,\' yet serves absolutely wonderful sushi without any hint of mystery!" — April 2026.', source: R + 'B525422664/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区東洞院三条下ル三文字町200 ミックナカムラ2F、烏丸御池駅から徒歩5分、不定休、完全予約制、電話番号の掲載なし、5席、個室あり、貸切可、禁煙、カード可、ドレスコード (極端な軽装は不可)。口コミ (2025年4月〜2026年10月、英語): ざこやグループ (春夏秋冬ざこや、プチポワソン)、紹介制・会員制、東京で修業した料理人、握り15貫ほどのコース、熟成した魚、鱧の焼霜、Akashi の鯛、ばい貝、いさき、柚子のこはだ、海老の海苔巻き、やりいかとうに、さわら、昆布締めの鯛、赤貝、さんま、しまあじ、うにを塩で、Saku「Kami no Ho」、Dassai、桃のリキュール。',
      confidence: 'medium', sources: [TB, WEB, R + 'B426147983/', R + 'B476766959/', R + 'B483740232/', R + 'B509171294/', R + 'B513498564/', R + 'B523473746/', R + 'B525422664/', R + 'B528405314/', R + 'B530794130/', R + 'B538444955/'] },
    cultural_comfort: { level: 'relay', note: 'By referral or membership — no public phone number; ask someone who knows the shop or a concierge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院三条下ル三文字町200 ミックナカムラ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008399, 135.761230) lies 1 m from 春夏秋冬ざこや (same floor of ミックナカムラ) and 4.7 m from kyoto_fleur_de_farine; pin moved ~5 m north-west to (35.008440, 135.761190); GSI 京都府京都市中京区三文字町200番地 (lot) 59 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525422664/', R + 'B513498564/'],
    price_note: 'No prices read; bills about ¥8,000–15,000 (Tabelog; 2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Nigiri course (about 15 pieces)', '', 'Course', 'ask', 'no', 'April 2026.', 'nigiri_course'),
    ] }, {
    cuisine: 'ざこやグループの5席の江戸前鮨のカウンター。東京で修業した料理人 (2026年3月、2025年8月)・熟成させた魚の握り15貫ほどのコースと小皿 (2025〜2026年の口コミ)・例: 鱧の焼霜、Akashi の鯛、ばい貝、いさき、柚子のこはだ、海老の海苔巻き、うにをのせたやりいか (2025年8月)、さわらの炙り、昆布締めの鯛、赤貝 (2026年3月)、さんまとしまあじ (2026年8月)、目の前でたっぷりのせるうにを塩で (2026年10月)・Saku「Kami no Ho」、Dassai などの日本酒、桃のリキュール (2025〜2026年の口コミ)',
    neighborhood: '三条の南の東洞院通、ビル2階。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。醤油、煮切り、昆布締めを使う江戸前の握りと小皿。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、うにの鮨のカウンター (2025〜2026年の口コミ)。',
    notes: '[鮨・東洞院三条、紹介制の5席] ざこやグループの、看板のない扉の奥のカウンター5席 (と小さな個室) の江戸前鮨。東京で修業した料理人が熟成させた魚の握りを15貫ほど出す: 昆布締めの鯛、こはだ、うにをのせたいかなど。手頃な日本酒とともに8,000〜15,000円ほど。紹介制で、電話番号は公開されておらず、口コミの客は紹介か会員で訪れている。服装はきちんと。',
  });
}

// ================================================================ 一品料理 高倉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018131/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_ippin_ryori_takakura', name: '一品料理 高倉 (Ippin Ryori Takakura)', category: 'OMNI',
    lat: 35.014547, lng: 135.768681, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte Japanese dishes including tempura, fried dishes with wheat gluten, agedashi, nanban-zuke and tonkatsu chazuke; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable dishes such as agedashi eggplant, fried bamboo shoots, sesame tofu and nanban-zuke appear, but dashi and fish run through most of the menu (2025–2026 reviews).',
    hours_raw: 'Tuesday to Friday 17:30–22:00; closed Saturday, Sunday and Monday; hours may change (Tabelog). Reservations open on the same date one month ahead (the next day if that is a closing day); no bookings for three or more (Tabelog). Fully booked most nights — call at 16:30 a month ahead (February 2025). Cash only — no cards, e-money or QR (Tabelog). 9 counter seats and 2 tables; non-smoking (Tabelog). On Ebisugawa-dori west of Kawaramachi; 5 min walk from the Kawaramachi Marutamachi bus stop or Kyoto Shiyakusho-mae Stn (Tabelog; April 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa west of Kawaramachi — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Family-run counter of à la carte dishes written on paper strips above the counter and taken down once sold out — Japanese, with some Italian touches (2025–2026 reviews) · e.g. sea bream shirako with ponzu ¥1,000, yuba sashimi with canola flowers and wakame ¥850 (April 2026); sweet-shrimp and sea-bream sashimi, deep-fried ayu, fried maitake with fu (September 2025); beef shabu-shabu, fried bamboo shoots, agedashi eggplant, fresh yuba rice (April 2026); vegetable nanban-zuke, avocado and nagaimo with fuki miso (June 2026); eel tempura, sesame tofu, tonkatsu chazuke (July 2026) · sake and shochu, no wine (Tabelog; July 2026) · about ¥4,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('一品料理 高倉 夷川'), menu_url: null,
    notes: '[À la carte counter · Ebisugawa Kawaramachi, kaiseki taste at izakaya prices] A small family-run counter near City Hall where the day\'s dishes hang on paper strips and come down once sold out: shirako ponzu, yuba sashimi, fried bamboo shoots, agedashi eggplant, eel tempura, a celebrated sesame tofu and tonkatsu chazuke, mostly around ¥1,000. Regulars call it kaiseki-level at izakaya prices, so it is booked out: reservations open a month ahead, two people max. Cash only. Open Tuesday to Friday.',
    chef_bio: { chef_name: null, roles: ['Family-run (unnamed)'], origin: null,
      background: 'A February 2025 reviewer: "The counter is run by a family, and it seems to be popular among the locals." Reviewers describe a menu that changes with the seasons and the chef\'s choices, dishes on paper strips removed once sold out, and long-standing regulars (2025–2026 reviews).',
      philosophy: null, specialty: 'Seasonal à la carte; sesame tofu; tonkatsu chazuke.',
      anecdotes: [
        { text: 'A February 2025 visitor came with a son to the restaurant the parents had visited every year.', source: R + 'B501668322/' },
        { text: '"The taste is at the level of a kaiseki restaurant, but the prices are those of an izakaya." — February 2026.', source: R + 'B522785600/' },
        { text: 'An April 2026 regular of eight years was thrilled the fresh-yuba rice was back — though missed the old version served with wasabi.', source: R + 'B502926611/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区夷川通河原町西入西革堂町205 1F、河原町丸太町バス停から徒歩5分、火〜金 17:30〜22:00、土・日・月休み、予約は前月の同日から (定休日なら翌日)、3名以上の予約不可、現金のみ、カウンター9席とテーブル2卓、禁煙。口コミ (2025年2月〜2026年7月、英語): 家族で営むカウンター、品書きは短冊でカウンターの上に、売り切れると外す、和食に少しイタリアンも、ワインはなし、鯛の白子ポン酢1,000円、湯葉のお造りと菜の花とわかめの柚子胡椒850円、甘海老と鯛のお造り、鮎の唐揚げ、舞茸と麩の揚げ物、牛しゃぶ、筍の唐揚げ、揚げ出し茄子、生湯葉ご飯、野菜の南蛮漬け、アボカドと長芋のふき味噌、鰻の天ぷら、胡麻豆腐、とんかつ茶漬け、懐石の味で居酒屋の値段、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B225833171/', R + 'B501668322/', R + 'B502202434/', R + 'B502926611/', R + 'B514655387/', R + 'B522785600/', R + 'B523986025/', R + 'B526233103/', R + 'B529499629/', R + 'B531450064/'] },
    cultural_comfort: { level: 'japanese', note: 'Menu on hand-written paper strips; book by phone a month ahead, two people max; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区夷川通河原町西入西革堂町205 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.014547, 135.768681); cross-checked: GSI 京都府京都市中京区西革堂町205番地 (lot) 53 m; kyoto_niku_ryori_shibuya is 36 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523986025/'],
    price_note: 'Prices from an April 2026 review; most dishes around ¥1,000.', last_checked: TODAY, items: [
      it('', '', 'Sea bream shirako with ponzu', '¥1,000', 'À la carte', 'ask', 'no', 'April 2026.', 'shirako_ponzu'),
      it('', '', 'Yuba sashimi with canola flowers and wakame, yuzu pepper', '¥850', 'À la carte', 'ask', 'ask', 'April 2026.', 'yuba_sashimi'),
      it('', '', 'Sesame tofu', '', 'À la carte', 'ask', 'ask', 'July 2026.', 'goma_dofu'),
      it('', '', 'Tonkatsu chazuke', '', 'Rice', 'no', 'no', 'July 2026.', 'tonkatsu_chazuke'),
    ] }, {
    cuisine: '家族で営むカウンター。品書きはカウンターの上の短冊で、売り切れると外す。和食に少しイタリアンも (2025〜2026年の口コミ)・例: 鯛の白子ポン酢1,000円、湯葉のお造りと菜の花とわかめの柚子胡椒850円 (2026年4月)、甘海老と鯛のお造り、鮎の唐揚げ、舞茸と麩の揚げ物 (2025年9月)、牛しゃぶ、筍の唐揚げ、揚げ出し茄子、生湯葉ご飯 (2026年4月)、野菜の南蛮漬け、アボカドと長芋のふき味噌 (2026年6月)、鰻の天ぷら、胡麻豆腐、とんかつ茶漬け (2026年7月)・日本酒と焼酎、ワインはなし (食べログ、2026年7月)・4,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町の西、夷川通。市役所前駅から徒歩5分',
    gf_detail: '要確認。天ぷら、麩の揚げ物、揚げ出し、南蛮漬け、とんかつ茶漬けなどの一品料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。揚げ出し茄子、筍の唐揚げ、胡麻豆腐、南蛮漬けなど野菜の料理もあるが、多くの料理にだしや魚を使う (2025〜2026年の口コミ)。',
    notes: '[一品料理・夷川河原町、懐石の味を居酒屋の値段で] 市役所近くの家族で営む小さなカウンター。その日の料理は短冊に書かれ、売り切れると外される: 白子ポン酢、湯葉のお造り、筍の唐揚げ、揚げ出し茄子、鰻の天ぷら、評判の胡麻豆腐、とんかつ茶漬けなど、多くは1,000円前後。常連は懐石の味で居酒屋の値段と言い、予約は埋まりがち: 予約は1か月前から、2名まで。現金のみ。火〜金のみ営業。',
  });
}

// ================================================================ 燻
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012683/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kemuri_smoked', name: '燻 (Kemuri)', category: 'OMNI',
    lat: 35.002454, lng: 135.756803, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Smoked dishes including fried gyoza, pizza, nama-fu, hanpen with crab-miso sauce and ochazuke; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Smoked yuba, nama-fu, takuan and salad appear, but bacon, cheese, sashimi, chicken and fish cake run through the menu (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 17:00–23:00 (last order 22:30) (Tabelog). Reservations accepted; same-day calls often work (July and September 2026). Orders by QR code (July, September 2026). 34 seats incl. counter, semi-private L-shaped seats on two floors and sunken-kotatsu private rooms for 2–4; private hire up to 20; non-smoking (Tabelog; September 2026). Cards (JCB, AMEX) and PayPay (Tabelog). A renovated machiya on Ayanokoji west of Muromachi; 3 min walk from Karasuma Stn (Hankyu) (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji west of Muromachi — 3 min walk from Karasuma Stn',
    cuisine: 'Izakaya of house-smoked dishes over mild hickory chips in a renovated machiya, finishing with kamado rice of Kyohoku aigamo rice (Tabelog) · smoked appetiser platter; smoked bacon, cheese, nama-fu, yuba, fried gyoza (Tabelog; 2026 reviews) · smoked hanpen with crab-miso sauce, smoked sashimi, smoked takuan, smoked ochazuke, smoked hojicha (October 2026) · grilled stingray fin, pizza, grilled chicken, salad (June 2026) · kamado rice such as salmon and mushroom with butter-soy (Tabelog) · sake, wine, whisky — e.g. Laphroaig and Yamazaki 12 at ¥1,200 (Tabelog; October 2026) · about ¥3,000–6,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('燻 京都 綾小路 燻製'), menu_url: null,
    notes: '[Smoked izakaya · Ayanokoji Muromachi, everything over hickory] A renovated machiya near Shijo Karasuma devoted to house-smoked food: a smoked appetiser platter, smoked nama-fu and yuba, hanpen with crab-miso sauce, smoked sashimi and takuan, even smoked hojicha and ochazuke — with a closing kamado rice and good-value malts (Laphroaig, Yamazaki 12 at ¥1,200). Counter, semi-private seats and kotatsu rooms. QR ordering. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a modern space in a renovated machiya specialising in homemade smoked dishes over mild hickory chips, from bacon and cheese to nama-fu, yuba and fried gyoza, with kamado rice of Kyohoku aigamo rice and a list of sake, wine and whisky. Reviewers in 2026 praise attentive staff and note QR-code ordering.',
      philosophy: 'Smoking for the aroma, not just preservation (Tabelog).', specialty: 'Smoked appetiser platter; smoked nama-fu; kamado rice.',
      anecdotes: [
        { text: 'A July 2026 visitor, escaping the Gion Matsuri crowds with a last-minute booking, found the machiya a calm place to rest.', source: R + 'B531803989/' },
        { text: '"The takuan has a flavor reminiscent of iburigakko, and smoking the sashimi changes its profile" — October 2026, from a whisky lover pleased by the ¥1,200 malts.', source: R + 'B537837278/' },
        { text: '"Ordering is done via QR code, which can be a bit cumbersome, but the food is served promptly." — July 2026.', source: R + 'B532536225/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理・ダイニングバー、下京区綾小路通室町西入善長寺町128、阪急烏丸駅から徒歩3分、毎日 17:00〜23:00 (L.O.22:30)、予約可、34席、掘りごたつの個室 (2〜4名)、貸切20名まで、禁煙、カード (JCB、AMEX)・PayPay 可、町家を改装したモダンな空間、マイルドなヒッコリーチップの自家製燻製 (ベーコン、チーズ、生麩、湯葉、揚げ餃子)、Kyohoku の合鴨米の釜炊きご飯 (鮭ときのこのバター醤油など)、日本酒・ワイン・ウイスキー。口コミ (2026年6月〜10月、英語): 燻製の前菜盛り合わせ、燻製はんぺんの蟹味噌ソース焼き、燻製の刺身、燻製たくあん、燻製茶漬け、燻製ほうじ茶、えいひれ、ピザ、焼き鳥、Laphroaig や Yamazaki 12年が1,200円、注文は QR コード、スタッフの対応が良い、祇園祭の日に当日予約。',
      confidence: 'medium', sources: [TB, R + 'B50357890/', R + 'B531038383/', R + 'B531803989/', R + 'B532536225/', R + 'B533957158/', R + 'B536551308/', R + 'B536858510/', R + 'B537311690/', R + 'B537837278/', R + 'B538400274/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; same-day calls often work; cards (JCB, AMEX) and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通室町西入善長寺町128',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002454, 135.756803); cross-checked: GSI 京都府京都市下京区善長寺町128番地 (lot) 56 m; kyoto_gohandokoro_yaosada is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537837278/'],
    price_note: 'No menu prices read except whisky (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Smoked appetiser platter', '', 'Smoked', 'ask', 'ask', '', 'smoked_platter'),
      it('', '', 'Smoked hanpen with crab-miso sauce', '', 'Smoked', 'ask', 'no', 'October 2026.', 'smoked_hanpen'),
      it('', '', 'Kamado rice (e.g. salmon and mushroom butter-soy)', '', 'Rice', 'ask', 'no', 'Tabelog.', 'kamado_rice'),
      it('', '', 'Single malt (Laphroaig, Yamazaki 12)', '¥1,200', 'Drinks', 'ask', 'ask', 'October 2026.', 'malt'),
    ] }, {
    cuisine: '町家を改装した、マイルドなヒッコリーチップで燻した自家製の燻製の居酒屋。締めは Kyohoku の合鴨米の釜炊きご飯 (食べログ)・燻製の前菜盛り合わせ、ベーコン、チーズ、生麩、湯葉、揚げ餃子の燻製 (食べログ、2026年の口コミ)・燻製はんぺんの蟹味噌ソース焼き、燻製の刺身、燻製たくあん、燻製茶漬け、燻製ほうじ茶 (2026年10月)・えいひれ、ピザ、焼き鳥、サラダ (2026年6月)・鮭ときのこのバター醤油などの釜炊きご飯 (食べログ)・日本酒、ワイン、ウイスキー (Laphroaig や Yamazaki 12年が1,200円) (食べログ、2026年10月)・3,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '室町の西、綾小路通。烏丸駅から徒歩3分',
    gf_detail: '要確認。揚げ餃子、ピザ、生麩、はんぺんの蟹味噌ソース、茶漬けなどの燻製料理。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。燻製の湯葉、生麩、たくあん、サラダはあるが、ベーコン、チーズ、刺身、鶏、はんぺんが多い (食べログ、2026年の口コミ)。',
    notes: '[燻製の居酒屋・綾小路室町、ヒッコリーで燻す] 四条烏丸近くの町家を改装した燻製の店: 燻製の前菜盛り合わせ、燻製の生麩や湯葉、はんぺんの蟹味噌ソース、燻製の刺身やたくあん、燻製ほうじ茶や茶漬けまで。締めは釜炊きご飯、モルトは Laphroaig や Yamazaki 12年が1,200円と手頃。カウンター、半個室、掘りごたつの個室。注文は QR コード。無休。',
  });
}

save();
