// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 19.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   - PIZZA SALVATORE CUOMO & GRILL 京都 (26006433) skipped: chain — 7 SALVATORE CUOMO shops in the Tabelog crawl.
//   + おやじ Oyaji (yakisoba counter since 1957 near Kiyomizu-Gojo, run by a mother and daughter)
//   + 祇園 いわさ起 Gion Iwasaki (Kyoto cuisine counter on Higashi-Matsuchikoji; since 2016)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 即今藤本 Sokkon Fujimoto (Kyoto kaiseki in an old townhouse near the Imperial Palace; since 2024) — flagged: asks diners not
//     to post photos of the dishes on social media (see below).
//   + ワインと和食 みくり Wine to Washoku Mikuri (kaiseki with wine pairings by a master sommelier; since 2015)
//   None is in data/kyoto.json: grep by id, name (おやじ/Oyaji — ラーメン親爺 and くそオヤジ are other shops, いわさ起/Iwasaki — 御所
//   岩さき and イワサキタンメン are other shops, 即今/Sokkon, 藤本 — 京料理 藤本 is a different chef at 神明町, みくり/Mikuri) and address
//   (北御門町259, 祇園町南側570-183, 松本町580, 東生洲町38) found none.
//   Same-name counts (Samboa ruling): おやじ — one exact listing (the other おやじ… names are unrelated shops); いわさ起, 即今藤本 — one
//   each; みくり — 2 (ワインと和食 みくり and みくり 桑) — a small pair, drafted.
//   Posting rule: several 即今藤本 reviewers say photos of the dishes may not be posted on social media (the chef wants guests to meet
//   the food first by taste and smell). That is a rule about food photos, not a request to keep the shop off gourmet sites — it has
//   an official Tabelog listing with reservations — so it is drafted, recorded and flagged.
//   Service charges checked against Tabelog’s Japanese original: いわさ起 「サービス料10％」; みくり 「サービス料10％」 (the official site
//   says its prices include tax and service); おやじ and 即今藤本 none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26006433', 'chain: 7 SALVATORE CUOMO shops in the Tabelog crawl (PIZZA SALVATORE CUOMO & GRILL 京都, PIZZA SALVATORE CUOMO 四谷, PIZZA SALVATORE CUOMO 梅田, SALVATORE CUOMO & BAR 人形町, SALVATORE CUOMO & BAR 心斎橋, ザ キッチン サルヴァトーレ クオモ 京都, ゼックスウエスト サルヴァトーレ クオモブロス)');

// ================================================================ おやじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000595/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '13:00']); const B = day(['11:00', '13:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_yakisoba_oyaji', name: 'おやじ (Oyaji)', category: 'OMNI',
    lat: 34.99811, lng: 135.771802, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a yakisoba shop — wheat noodles with sauce, plus chikuwa (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: noodles are cooked in chicken broth with squid and chikuwa, and toppings include pork, beef tendon and egg (April 2026).',
    hours_raw: '11:00–13:00 Monday, Tuesday and Thursday; 11:00–13:00 and 18:00–20:00 Friday to Sunday; closed Wednesday and the first Sunday of each month (Tabelog). No bookings; queues and early sell-outs at the short lunch hours (2025–26 reviews). 10 counter seats round the teppan (about 8 in practice); non-smoking; cash only; take-away (Tabelog; April 2026). No phone use inside, no video, and photos only of the finished dish (Tabelog remarks; October 2025, June 2026). Order by writing noodles and toppings on a slip of paper (2026 reviews). In an old candy-shop-like house near Kenninji and the Daikoku-yu bathhouse; 5 min from Kiyomizu-Gojo Stn (Tabelog; January and April 2026). Founded 1957 (April 2026 reviews).',
    hours: { 0: A, 1: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Kenninji, south of Gion — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Yakisoba only, cooked on the teppan in front of you and eaten off it (2025–26 reviews) · chewy fresh noodles boiled for about ten seconds in chicken broth with cabbage, squid and chikuwa, then fried in a light-coloured but punchy sweet house sauce; sauce or salt; order by the number of servings — two servings for ¥1,000 to take away (June 2026) · toppings such as pork, beef tendon and egg; rice · curry powder, a spicy sauce and pickled ginger on the side · crispy bits from the griddle saved for you (2026 reviews)',
    website: null, gmaps: gm('おやじ 焼きそば 北御門町'), menu_url: TB,
    notes: "[Yakisoba · Kenninji, a 1957 griddle counter] A tiny yakisoba-only counter near Kenninji, open since 1957 and now run by a mother and daughter who took it over from the founder. Write your order on a slip — servings, plus pork, beef tendon or egg — and the two fry fresh noodles, cabbage, squid and chikuwa in a sweet, punchy house sauce on the teppan in front of you; add curry powder or spicy sauce. Lunch is only 11:00–13:00 (evenings Friday–Sunday), queues are common, and phones and video are not allowed. Cash only.",
    chef_bio: { chef_name: null, roles: ['Run by a mother and daughter, not named (October 2025; April and May 2026 reviews)'], origin: null,
      background: 'Per April 2026 reviewers: founded in 1957, first serving okonomiyaki and later only yakisoba; run by a mother and daughter who inherited it from the grandfather. Reviewers describe a brusque but warm style, with the staff gathering the noodles together as the plate runs low and saving the crispy bits.',
      philosophy: null,
      specialty: 'Yakisoba with house sauce.',
      anecdotes: [
        { text: 'An October 2025 visitor saw a "no video" sign and was told only photos of the finished dish were allowed.', source: R + 'B517725410/' },
        { text: 'A June 2026 take-away customer was given the crispy bits from the teppan wrapped in foil.', source: R + 'B530484495/' },
        { text: 'A May 2025 couple came back after nine years and arrived right at opening.', source: R + 'B111217261/' },
      ],
      japanese_sources_summary: '食べログ: おやじ、焼きそば、東山区北御門町259、清水五条駅から徒歩5分、月・火・木 11:00〜13:00、金・土・日 11:00〜13:00・18:00〜20:00、水曜と第1日曜休み、予約不可、10席 (カウンターのみ)、禁煙、カード不可、テイクアウト、携帯電話の使用禁止。口コミ (2025〜2026年、英語): 1957年創業、お好み焼きから焼きそば専門に、母と娘が祖父から受け継ぐ、紙に書いて注文、鶏ガラスープで麺をさっと茹でる、キャベツ・イカ・ちくわ、甘めの独特のソース、豚・すじ・卵のトッピング、カレー粉と辛いソース、2人前1,000円 (持ち帰り)、動画禁止・写真は出来上がりのみ。',
      confidence: 'medium', sources: [TB, R + 'B111217261/', R + 'B515758590/', R + 'B517725410/', R + 'B517945852/', R + 'B520410670/', R + 'B523295209/', R + 'B526093888/', R + 'B527766469/', R + 'B529321271/', R + 'B530475429/', R + 'B530484495/', R + 'B531571201/'] },
    cultural_comfort: { level: 'japanese', note: 'Written order slips; no phones or video inside; cash only; short hours.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区北御門町259',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.99811, 135.771802); cross-checked: GSI 京都府京都市東山区北御門町259番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530484495/'],
    price_note: 'Only a June 2026 take-away price is published.', last_checked: TODAY, items: [
      it('焼きそば', 'yakisoba', 'Yakisoba, two servings (take-away)', '¥1,000', 'Yakisoba', 'no', 'no', 'June 2026.', 'yakisoba'),
    ] }, {
    cuisine: '焼きそばだけ、目の前の鉄板で焼いてそのまま鉄板で食べる (2025〜2026年の口コミ)・もちもちの生麺を鶏ガラスープで10秒ほど茹で、キャベツ、イカ、ちくわと、色は淡いがパンチのある甘めの自家製ソースで焼く。ソースか塩。人前で注文し、持ち帰りは2人前1,000円 (2026年6月)・豚、すじ、卵などのトッピング、ご飯・カレー粉、辛いソース、紅生姜を別に・鉄板のおこげも取っておいてくれる (2026年の口コミ)',
    neighborhood: '祇園の南、建仁寺の近く。清水五条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。焼きそばの店で、小麦の麺にソース、ちくわも (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。麺は鶏ガラスープで茹で、イカとちくわ入り、トッピングは豚、すじ、卵など (2026年4月)。',
    notes: '[焼きそば・建仁寺、1957年からの鉄板のカウンター] 建仁寺近くの焼きそばだけの小さなカウンター。1957年創業で、今は創業者から受け継いだ母と娘が営む。紙に人前とトッピング (豚、すじ、卵) を書いて渡すと、目の前の鉄板で生麺、キャベツ、イカ、ちくわを甘くパンチのある自家製ソースで焼いてくれる。カレー粉や辛いソースもどうぞ。昼は11時〜13時だけ (金〜日は夜も)、行列も多く、携帯電話と動画は禁止。現金のみ。',
  });
}

// ================================================================ 祇園 いわさ起
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027859/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_gion_iwasaki', name: '祇園 いわさ起 (Gion Iwasaki)', category: 'OMNI',
    lat: 35.002606, lng: 135.776277, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki with dashi and soy, including fried sesame tofu with sauce; no gluten information is published (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki of fish, hamo and sea bream (2025–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00) and dinner 18:00–21:00 (last order 20:00), every day; closed irregularly (Tabelog). Bookings taken; lunch fills with bookings at opening (July 2026). Service charge 10% (Tabelog’s Japanese original: サービス料10％); a lunch of ¥9,600 included tax and service (October 2026). 11 seats: a counter of 7 and one table; non-smoking with a smoking area inside; children by prior arrangement, ideally older primary-school age (Tabelog). Cash only (Tabelog; October 2026). On Higashi-Matsuchikoji, two or three lanes east of Hanamikoji; 5 min from Gion-Shijo Stn (January and August 2026). Opened 21 April 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Matsuchikoji, east of Hanamikoji in Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki with deep dashi and seasonal produce (2025–26 reviews) · lunch courses ¥8,000, ¥10,000 and ¥14,000 (October 2026); lunch ¥9,600 including tax and service, the lightest course (October 2026) · dishes reviewers had: seasonal hassun, scallop shinjo soup, sashimi of sea bream, horse mackerel and squid, new-potato soup with shrimp, hamo, grilled Lake Biwa trout, grilled barracuda with sauce, sea bream collar soup, fried sesame tofu with sauce, rice with young ginger and chirimen or as onigiri, warm pudding to finish',
    website: null, gmaps: gm('祇園 いわさ起'), menu_url: TB,
    notes: "[Kaiseki · Gion, a counter on a back lane] An eleven-seat Kyoto-cuisine counter on a dim lane east of Hanamikoji, opened in 2016 and, per reviewers, holding a Michelin star and listed in OAD 2026. Courses lean on rich dashi — scallop shinjo soup, hamo, sea bream collar soup, a fried sesame tofu — with seasonal rice, sometimes as onigiri, and a warm pudding that diners rave about. Lunch from about ¥8,000–9,600, dinner around ¥15,000. Cash only; 10% service.",
    chef_bio: { chef_name: null, roles: ['Owner and head chef, not named (December 2025 – October 2026 reviews)'], origin: null,
      background: 'Opened 21 April 2016 (Tabelog). Reviewers note a Michelin star (December 2025, August 2026) and a listing in OAD Top Restaurants 2026 (August 2026), and praise the hospitality of the head chef and the owner, who decorates dishes with seasonal leaves such as persimmon (October 2026). One regular finds the flavours closer to Kanto than typical light Kyoto seasoning (April 2026).',
      philosophy: null,
      specialty: 'Dashi-led kaiseki; warm pudding.',
      anecdotes: [
        { text: 'An October 2026 regular on a fourth visit noted the owner had sourced persimmon leaves to decorate the dishes.', source: R + 'B517366082/' },
        { text: 'A December 2025 diner had the closing rice customised for each person.', source: R + 'B525067728/' },
        { text: 'An October 2026 diner and a regular at the next table both found the sea bream sashimi cut a bit thick.', source: R + 'B538224070/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 いわさ起、日本料理、東山区祗園町南側570-183、祇園四条駅から徒歩5分、12:00〜15:00 (L.O. 14:00)・18:00〜21:00 (L.O. 20:00)、不定休、予約可、カード不可、サービス料10%、11席 (カウンター7、テーブル4)、禁煙 (店内に喫煙所)、子どもは事前確認、2016年4月21日オープン。口コミ (2025〜2026年、英語): ミシュランの星、OAD 2026、東松竹小路、昼のコース8,000円・10,000円・14,000円、昼9,600円 (税サ込)、帆立しんじょうのお椀、鱧、鯛のあら炊きのお吸い物、胡麻豆腐の揚げ出し、温かいプリン、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B508098863/', R + 'B517366082/', R + 'B520637753/', R + 'B520735661/', R + 'B520845584/', R + 'B525067728/', R + 'B525224576/', R + 'B531279425/', R + 'B531548848/', R + 'B532720374/', R + 'B533626207/', R + 'B538224070/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; cash only; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-183',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002606, 135.776277); GSI matched 京都府京都市東山区祇園町南側570番地 (lot) only 233m away — a large lot block, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517366082/', R + 'B538224070/'],
    price_note: 'Course prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki course', '¥8,000', 'Lunch', 'ask', 'no', 'Also ¥10,000 and ¥14,000; ¥9,600 including tax and service in another October 2026 review.', 'lunch_course'),
    ] }, {
    cuisine: '深いだしと季節の食材の京料理の会席 (2025〜2026年の口コミ)・昼のコース8,000円、10,000円、14,000円 (2026年10月)、いちばん軽い昼のコースは税サ込9,600円 (2026年10月)・口コミの料理: 季節の八寸、帆立しんじょうのお椀、鯛・鯵・イカのお造り、海老の新じゃがのすり流し、鱧、琵琶湖のマスの焼き物、カマスの焼き物のソース、鯛のあらのお吸い物、胡麻豆腐の揚げ出し、新生姜とちりめんのご飯やおにぎり、締めの温かいプリン',
    neighborhood: '祇園、花見小路の東の東松竹小路。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。だしと醤油の京料理の会席で、胡麻豆腐の揚げ出しもある。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしの会席で、魚、鱧、鯛 (2025〜2026年の口コミ)。',
    notes: '[日本料理・祇園、路地のカウンター] 花見小路の東の薄暗い路地にある11席の京料理のカウンター。2016年開店で、口コミによればミシュランの星を持ち OAD 2026 にも掲載。帆立しんじょうのお椀、鱧、鯛のあらのお吸い物、胡麻豆腐の揚げ出しなど濃いだしが軸で、季節のご飯はおにぎりになることも、締めの温かいプリンが大評判。昼は8,000〜9,600円ほどから、夜は15,000円ほど。現金のみ、サービス料10%。',
  });
}

// ================================================================ 即今藤本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041209/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7810604335372';
  const H = day(['12:00', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_sokkon_fujimoto', name: '即今藤本 (Sokkon Fujimoto)', category: 'MOM_AND_POP',
    lat: 35.015303, lng: 135.766816, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki with well-water dashi and soy; the closing noodles (nyumen, lemon soba) are wheat or buckwheat; no gluten information is published (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki of dashi, fish, eel, turtle, shark fin and beef (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–14:00 and dinner 18:00–21:30; closed Wednesday, Obon and the New Year holidays; lunch booked by phone (Tabelog). Reservation only. Several reviewers say photos of the dishes may not be posted on social media — the chef explains guests should meet the food first by sight, smell and taste (2024–26 reviews). 9 counter seats and a private room for 4–5 by arrangement; non-smoking; cards and UnionPay; BYO; children of middle-school age and up order the adult menu (Tabelog). In a renovated house of about 80 years with a garden, down a narrow lane off Gokomachi-dori north of Ebisugawa; a well was dug for the dashi (May 2024; July 2026). About 5 min from Kyoto-Shiyakusho-mae or Marutamachi Stn (Tabelog). Opened 7 May 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi-dori north of Ebisugawa, south of the Imperial Palace — 5 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Kyoto kaiseki of 11–14 dishes, with well-water dashi and Kinu Hikari rice (2024–26 reviews) · lunch about ¥15,000–20,000, dinner about ¥30,000–40,000 (Tabelog budgets; a ¥15,000 course in February 2026) · summer: abalone with mozuku and okra, sweet sea bream chimaki sushi in a handwritten wrapper, Kamo eggplant and shark fin in white miso, hamo shabu-shabu with nori soy, charcoal-grilled ayu, corn tempura (July 2026) · autumn: soft-shell crab and ikura in vinegar jelly, turtle soup with a full-moon egg tofu, matsutake from two regions side by side, homemade karasumi, chestnuts, white rice, nyumen, fruit and kuzu-yaki (September 2026) · lemon soba in place of red miso, beef (September 2025) · sake such as Juyondai and Kokuryu',
    website: null, gmaps: gm('即今藤本 御幸町'), menu_url: TB,
    notes: "[Kaiseki · Goshominami, a chef's renovated townhouse] A nine-seat kaiseki counter in an 80-year-old house with a garden, down a lane off Gokomachi-dori, opened in May 2024 by chef 藤本 宏和 — trained at the late, legendary Sakurada and head chef of Awata Sanso before going independent, per reviewers — who even dug a well for the dashi. Expect 11–14 seasonal dishes such as sea bream chimaki sushi, hamo shabu-shabu or matsutake compared side by side, and a warm, joking chef. Note: the shop asks guests not to post photos of the dishes on social media. Dinner about ¥30,000–40,000; Michelin star per reviewers. Closed Wednesday.",
    chef_bio: { chef_name: '藤本 宏和', roles: ['Owner-chef (the invoice holder)'], origin: 'Hiroshima (July 2026 review).',
      background: 'The invoice register lists an individual, 藤本 宏和, for the shop’s invoice number. Per a September 2026 reviewer: the chef trained at the renowned Sakurada, still talked about after its closing, then served as head chef at Awata Sanso of the Kyoto Hotel Okura before going independent, and works with apprentices. A July 2026 reviewer says the chef is from Hiroshima, and reviewers in July 2026 note a newly won Michelin star. A May 2024 regular found the cooking evolved beyond the chef’s earlier shop, with a well dug for the dashi and Kinu Hikari rice. Opened 7 May 2024 (Tabelog). Names of earlier restaurants known only in Latin letters from English reviews.',
      philosophy: 'Per a May 2026 reviewer: the chef asks that dish photos not be shared, so later guests meet each dish through sight, smell and taste rather than a picture.',
      specialty: 'Seasonal kaiseki; sweet sea bream chimaki sushi; well-water dashi.',
      anecdotes: [
        { text: 'A July 2026 diner took home the sweet sea bream chimaki wrapper, handwritten by the owner, as a keepsake.', source: R + 'B532600132/' },
        { text: 'A party of three in September 2025 ate rice and meat with second helpings over three and a half hours, paying a little over ¥114,000 in total.', source: R + 'B513199647/' },
        { text: 'A February 2026 diner paired a ¥15,000 course with about ¥24,000 of sake, including Juyondai, and recommends it for younger guests.', source: R + 'B522235417/' },
      ],
      japanese_sources_summary: '食べログ: 即今藤本、日本料理、中京区御幸町通夷川上ル松本町580-1、京都市役所前駅・丸太町駅から徒歩約5分、12:00〜14:00・18:00〜21:30、水曜・お盆・年末年始休み、昼の予約は電話、完全予約制、9席 (カウンター)、個室 (4〜5名、要相談)、禁煙、カード・銀聯 可、持ち込み可、中学生以上は大人と同じコース、2024年5月7日オープン、インボイス: 藤本 宏和 (個人)。口コミ (2022〜2026年、英語): 料理の写真の SNS 投稿は不可、井戸を掘っただし、Kinu Hikari の米、築80年の町家と庭、Hiroshima 出身、Sakurada と Awata Sanso、ミシュランの星、甘鯛のちまき寿司、鱧しゃぶ、松茸、すっぽん、にゅうめん。',
      confidence: 'medium', sources: [TB, INV, R + 'B485394916/', R + 'B485456848/', R + 'B513199647/', R + 'B517556428/', R + 'B522235417/', R + 'B529144989/', R + 'B531462523/', R + 'B532600132/', R + 'B534140682/', R + 'B535776056/', R + 'B536179238/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; do not post photos of the dishes on social media (house request).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通夷川上ル松本町580-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.015303, 135.766816); cross-checked: GSI 京都府京都市中京区松本町580番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522235417/'],
    price_note: 'No menu published; a ¥15,000 course in a February 2026 review; Tabelog budget dinner ¥30,000–39,999.', last_checked: TODAY, items: [
      it('', 'omakase', 'Kaiseki course', '¥15,000', 'Course', 'ask', 'no', 'February 2026; dinner usually ¥30,000–40,000 per Tabelog budget.', 'course'),
    ] }, {
    cuisine: '井戸水のだしと Kinu Hikari の米の、11〜14品の京料理の会席 (2024〜2026年の口コミ)・昼は15,000〜20,000円ほど、夜は30,000〜40,000円ほど (食べログの予算、2026年2月は15,000円のコース)・夏: 鮑ともずくとオクラ、手書きの包み紙の甘鯛のちまき寿司、賀茂茄子とフカヒレの白味噌、鱧しゃぶの海苔醤油、炭火の鮎、とうもろこしの天ぷら (2026年7月)・秋: ソフトシェルクラブといくらの酢のジュレ、満月の玉子豆腐のすっぽんのお椀、2つの産地の松茸の食べ比べ、自家製からすみ、栗、白ご飯、にゅうめん、果物、葛焼き (2026年9月)・赤だしの代わりのレモン蕎麦、牛肉 (2025年9月)・十四代、黒龍などの日本酒',
    neighborhood: '御所の南、夷川の北の御幸町通。京都市役所前駅から徒歩5分',
    gf_detail: '予約時に要確認。井戸水のだしと醤油の京料理の会席で、締めの麺 (にゅうめん、レモン蕎麦) は小麦や蕎麦。グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、魚、鰻、すっぽん、フカヒレ、牛肉の会席 (2024〜2026年の口コミ)。',
    notes: '[日本料理・御所南、料理人が改装した町家] 御幸町通から入る路地の、庭のある築80年の家の9席の会席のカウンター。口コミによれば、伝説の Sakurada で修業し Awata Sanso の料理長を務めた藤本宏和さんが2024年5月に開き、だしのために井戸まで掘った。甘鯛のちまき寿司、鱧しゃぶ、松茸の食べ比べなど季節の11〜14品と、冗談好きのあたたかい大将。注意: 料理の写真の SNS 投稿はご遠慮くださいとのこと。夜は30,000〜40,000円ほど、口コミではミシュランの星。水曜休み。',
  });
}

// ================================================================ ワインと和食 みくり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025729/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mikuri-kyoto.com/'; const COURSE = SITE + 'course.html'; const WINE = SITE + 'wine.html';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810757480799';
  const H = day(['12:00', '15:00'], ['18:30', '23:00']);
  put({
    id: 'kyoto_wine_to_washoku_mikuri', name: 'ワインと和食 みくり (Wine to Washoku Mikuri)', category: 'MOM_AND_POP',
    lat: 35.013088, lng: 135.771059, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the site asks guests to state allergies and dislikes for the whole party in advance. The kaiseki includes a fried course (tempura) and soy-based dishes (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kaiseki with dashi (official site; 2026 reviews).',
    hours_raw: 'Lunch from 12:00 and dinner from 18:30, everyone starting together; closed Monday, plus irregular days twice a month, Obon and New Year (Tabelog; the official site posts closed days each month). Omakase course only, by phone or web booking; no email bookings; no children under 13; cancellation 50% the day before and 100% on the day (official site). Service charge 10% (Tabelog’s Japanese original: サービス料10％); the official site says its prices include tax and service. 19 seats: a 7-seat counter on the 1st floor (recommended for first visits) and three sofa tables for four upstairs, bookable as a private floor for about 10 (official site). Cards, e-money and QR (Tabelog). Three buildings east of the Kiyamachi-Nijo crossing, opposite The Ritz-Carlton, Kyoto; 5–7 min from Kyoto-Shiyakusho-mae Stn exit 2 (Tabelog; official site). Opened 4 June 2015 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori by Kiyamachi, opposite The Ritz-Carlton — 5 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Kaiseki-style omakase built to pair with wine, by an owner-sommelier and a kaiseki chef (official site) · dinner omakase ¥22,000 including tax and service: sakizuke, fried dish, owan, hassun, sashimi, a palate break, grilled dish, a hearty dish, donabe rice and dessert (official course page) · lunch course ¥8,800 (January 2026), about ¥10,000 (July 2026) · wine pairing ¥11,000 (8 glasses, about 500 ml), half pairing ¥8,000 (4 glasses); also sake and Uji gyokuro (official site) · dishes reviewers had: live ayu shown before cooking, grilled katsuo with yellow chives, hamo soup with myoga and ume, kinmedai, maitake tempura with Champagne, kamado rice with five accompaniments and refills (2026 reviews)',
    website: SITE, gmaps: gm('ワインと和食 みくり 二条'), menu_url: COURSE,
    notes: "[Kaiseki & wine · Kiyamachi-Nijo, Japanese food paired by a master sommelier] A two-floor restaurant opposite The Ritz-Carlton where 西別當 選 — a sommelier of over forty years and once chef sommelier of Ginza L'Ecrin — pairs a glass of wine with each course of chef 西 正希's seasonal kaiseki: hamo, grilled katsuo, maitake tempura with Champagne, and kamado rice with side dishes and refills. Dinner omakase ¥22,000 plus pairing (¥8,000–11,000); lunch from about ¥8,800 is the easy way in. Everyone starts together; no under-13s. Closed Monday.",
    chef_bio: { chef_name: '西別當 選 (Nishibetto Erabu) and 西 正希 (Nishi Masaki)', roles: ['Owner-sommelier 西別當 選 (the invoice holder; master sommelier); chef 西 正希'], origin: 'Owner: Kagoshima; chef: Mie (official site).',
      background: 'Per the official site: owner-sommelier 西別當 選, born 1956 in Kagoshima, joined Kobe’s Kitano Club in 1976, trained ten years in service and wine at Kyoto’s French restaurant Lyon, became chef sommelier of the grand maison Ginza L’Ecrin in 1989, later worked in hotels, was chef sommelier and manager at 粟田山荘 in 2014 and opened this restaurant in 2015; in February 2016 the owner became the first sommelier honoured as one of Kyoto Prefecture’s outstanding craftsmen (現代の名工). Chef 西 正希, born 1975 in Mie, trained 14 years at a kaiseki restaurant in Kobe and then at a two-Michelin-star ryotei in Mie. The invoice register lists 西別當 選. A July 2026 reviewer calls the owner a former president of the Kyoto Sommelier Association. Sister shop: みくり 桑 (Tabelog crawl).',
      philosophy: 'Per the official site: "どんな料理にも相性の良いワインは、世界のどこかに必ずある" — somewhere in the world there is always a wine that suits any dish.',
      specialty: 'Kaiseki with wine pairing; kamado rice.',
      anecdotes: [
        { text: 'A November 2026 diner who phoned to book a solo lunch was told bookings are for two or three, so gathered friends and booked for three online.', source: R + 'B538736012/' },
        { text: 'A June 2026 diner was shown a live ayu at the start of the meal before it was cooked.', source: R + 'B530117705/' },
        { text: 'A June 2026 lunch guest found service slow, stretching the meal to about two and a half hours.', source: R + 'B530565456/' },
      ],
      japanese_sources_summary: '公式サイト (mikuri-kyoto.com): ワインと和食 みくり、京都市役所前駅出口2より徒歩5分、京都三条・木屋町エリア、ソムリエ歴40年以上のオーナー、おまかせコースのみの予約制、1F カウンター7席、2F 4名掛けテーブル3卓 (10名前後で貸切)、予約は電話又は WEB (メール不可)、アレルギーは事前に、一斉スタート、13歳未満不可、キャンセル料 前日50%・当日100%、とある日のおまかせコース22,000円 (税・サービス料込み: 先付・揚物・椀物・八寸・お造り・凌ぎ・焼物・強肴・土鍋ご飯・水物)、ワインペアリング11,000円 (8種類・約500ml)、ハーフ8,000円 (4種類)、地酒や宇治玉露、シェフ 西 正希 (1975年三重県生まれ、神戸の会席料理店で14年、三重のミシュラン2つ星の料亭)、オーナーソムリエ 西別當 選 (1956年鹿児島県生まれ、神戸北野クラブ、京都のフランス料理リヨンで10年、1989年銀座レカンのシェフソムリエ、2014年粟田山荘のシェフソムリエ兼支配人、2015年に開業、2016年京都府の現代の名工)、マスターソムリエ。食べログ: 日本料理・ワインバー、中京区東生洲町38-1、木屋町二条の交差点から東へ3軒目、ザ・リッツ・カールトン京都の向かい、ランチ12:00〜・ディナー18:30〜、月曜と月2回不定休、サービス料10%、19席、カード・電子マネー・QR 可、インボイス: 西別當 選、2015年6月4日オープン。',
      confidence: 'medium', sources: [TB, SITE, COURSE, WINE, INV, R + 'B384692553/', R + 'B468163071/', R + 'B529132052/', R + 'B530117705/', R + 'B530565456/', R + 'B530615938/', R + 'B531476340/', R + 'B531811817/', R + 'B531977675/', R + 'B532765177/', R + 'B532853591/', R + 'B538736012/'] },
    cultural_comfort: { level: 'english', note: 'English site; everyone starts together; no children under 13; cancellation fees.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東生洲町38-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closed days) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013088, 135.771059); cross-checked: GSI 京都府京都市中京区東生洲町38番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE],
    price_note: 'Official course page (tax and service included).', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase', 'Dinner omakase kaiseki', '¥22,000', 'Course', 'ask', 'no', 'Example of a day’s course.', 'omakase'),
      it('ワインペアリング', '', 'Wine pairing (8 glasses, about 500 ml)', '¥11,000', 'Drinks', '', '', 'Half pairing ¥8,000.', 'pairing'),
    ] }, {
    cuisine: 'オーナーソムリエと会席の料理長による、ワインに合わせる会席仕立てのおまかせ (公式サイト)・夜のおまかせコース22,000円 (税・サービス料込み): 先付、揚物、椀物、八寸、お造り、凌ぎ、焼物、強肴、土鍋ご飯、水物 (公式のコースページ)・昼のコース8,800円 (2026年1月)、約10,000円 (2026年7月)・ワインペアリング11,000円 (8種類、約500ml)、ハーフ8,000円 (4種類)、日本酒や宇治玉露も (公式サイト)・口コミの料理: 料理前に見せてくれる活きた鮎、黄ニラを添えた鰹の焼き霜、茗荷と梅の鱧のお椀、金目鯛、シャンパーニュと舞茸の天ぷら、5種のご飯のお供とおかわり自由のかまどご飯 (2026年の口コミ)',
    neighborhood: '木屋町の二条通、ザ・リッツ・カールトン京都の向かい。京都市役所前駅から徒歩5分',
    gf_detail: '予約時に要確認。サイトではアレルギーや苦手な食材を同行者の分も事前に伝えるよう案内している。会席には揚物 (天ぷら) や醤油を使う料理がある (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心のだしの会席 (公式サイト、2026年の口コミ)。',
    notes: '[会席とワイン・木屋町二条、マスターソムリエが合わせる和食] ザ・リッツ・カールトン京都の向かいにある2階建ての店。ソムリエ歴40年以上で銀座レカンのシェフソムリエも務めた西別當選さんが、西正希料理長の季節の会席の一皿ごとにワインを1杯ずつ合わせる: 鱧、鰹の焼き霜、シャンパーニュと舞茸の天ぷら、ご飯のお供とおかわりのかまどご飯。夜のおまかせは22,000円にペアリング (8,000〜11,000円)、気軽に試すなら昼の8,800円ほどから。一斉スタート、13歳未満不可。月曜休み。',
  });
}

save();
