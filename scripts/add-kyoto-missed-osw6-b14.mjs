// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 14.
//   + とんちんかん Okonomiyaki Tonchinkan (monjayaki and okonomiyaki, 3rd floor on Kawaramachi Rokkaku)
//   + Arbrin (French bistro and lunch buffet in YUGEN Kyoto Shijo hotel)
//   + 料 かわしま Ryo Kawashima (one-chef 8-seat kappo at Karasuma Oike; booked a year or more ahead)
//   + 祇園 まんま GION MANMA (8-seat Gion kappo with straw grilling, in Rakuen Koji)
//   - skip 26040610 米処いなもと (relocation pending; see below)
//   Same-name counts first (coordinator, 2026-11-05): とんちんかん — single shop (Gurunavi lists one); Arbrin — the
//   restaurant of one hotel, no hotel record in data; 料 かわしま and 祇園 まんま — single shops.
//   Taken on 2026-11-05: `next core 200` gave とんちんかん 26003620 and Arbrin 26044180; `next notable 200` gave
//   料 かわしま 26038522, 米処いなもと 26040610 (skipped), 祇園 まんま 26030998.
//   None of the four is in data/kyoto.json: grep by name and address (松ケ枝町464/大文字ビル, 鍵屋町218/YUGEN, 塗師屋町333,
//   祇園町北側347-108) found none. 祇園 まんま shares Rakuen Koji with kyoto_gion_endo (address_ja "…祇園町北側347-118
//   楽宴小路内", 14 m) and kyoto_yassan_gion ("…祇園町北側347", 21 m).
//   Greg's rulings: 料 かわしま is not taking new bookings easily (waits of one to two years) — listed with the booking
//   route (2026-11-02). No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040610', 'relocation pending: an October 2026 Tabelog review (B536880992) is headed "I’m glad I visited before the relocation!" and looks forward to the new location; the listing says phone lines are currently closed; no new address found. Revisit once the move is listed.');

// ================================================================ とんちんかん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003620/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:30']);
  put({
    id: 'kyoto_tonchinkan', name: 'とんちんかん (Okonomiyaki Tonchinkan)', category: 'OMNI',
    lat: 35.007762, lng: 135.768418, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, monjayaki, yakisoba and betayaki are wheat-batter or wheat-noodle dishes cooked on shared teppan with sauce (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the monjayaki is made with a bonito and kombu dashi and most dishes carry pork, squid or beef tendon (Tabelog; June 2026).',
    hours_raw: '11:30–22:30 (last order 22:00) daily; closed irregularly (Tabelog). Reservations accepted (Tabelog); walk-ins found seats on a Saturday afternoon (October 2026). The kitchen cooks the dishes and brings them nearly ready (May–October 2026). Third floor up stairs, no lift (June and August 2026). 44 seats including a tatami room; private hire for 20–50; smoking allowed; cards and PayPay (Tabelog). On Rokkaku-dori west of Kawaramachi; 5 min from Sanjo, Kawaramachi and Kyoto Shiyakusho-mae Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku-dori west of Kawaramachi, 3rd floor — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Okonomiyaki and monjayaki — rare in Kyoto — on Kawaramachi for about 20 years (Tabelog, shop text) · monjayaki ¥850 plus toppings, e.g. squid, mentaiko and Baby Star, beef tendon and green onion, mentaiko-mochi-cheese; "Tonchi" monja, rice monja (September 2026; 2026 reviews) · okonomiyaki mix ¥1,199, Hiroshima-style, modern-yaki, betayaki, sujitama, ikatama ¥891 · yakisoba mix ¥1,199, pork yakisoba ¥902, curry yakisoba, omusoba, negiyaki with beef tendon ¥902 · grilled squid tentacles ¥693, baked cheese potatoes ¥671 (August–September 2026) · large portions +¥200–300 (October 2026)',
    website: 'http://kyoto-tonchinkan.com/', gmaps: gm('とんちんかん 河原町 お好み焼'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki & monja · Kawaramachi, Tokyo-style monja up three flights] A retro, third-floor teppan shop on Rokkaku, cheap for central Kyoto, that has served monjayaki — rare in the city — for two decades or more. Start with a monja of squid, mentaiko and Baby Star (¥850 base), then a mixed okonomiyaki, betayaki or yakisoba (about ¥900–1,200); the kitchen brings them almost ready to finish on your griddle. Portions are modest; one October 2026 diner thought the mixes tasted pre-made. Smoking allowed; no lift. Open daily 11:30–22:30.",
    chef_bio: { chef_name: null, roles: ['Restaurant; no staff named'], origin: null,
      background: 'Per Tabelog (the shop’s own text): open on Kawaramachi for 20 years, serving authentic monjayaki, rare in Kyoto, with a fluffy batter of its own blend, and gives the opening day as 4 March 2000; a September 2026 reviewer gives the founding as 27 years ago. A June 2026 reviewer says the name comes from a nickname given to the mischievous previous owner.',
      philosophy: null, specialty: 'Monjayaki; okonomiyaki.',
      anecdotes: [
        { text: 'An October 2026 diner felt dishes arrived pre-prepared rather than off the teppan and suspected frozen mixes, likening the taste to a festival stall.', source: R + 'B537179280/' },
        { text: '"The interior may not be the cleanest, but the service is quick, and the dishes come out promptly!" — August 2026.', source: R + 'B533562821/' },
        { text: '"By the way, the name "Tonchinkan" comes from a nickname given to the previous owner, who was quite a mischievous character." — June 2026.', source: R + 'B531266043/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き・もんじゃ焼き・居酒屋、中京区河原町通六角西入ル松ケ枝町464 大文字ビル 3F、三条駅・河原町駅・京都市役所前駅から徒歩5分、毎日11:30〜22:30 (L.O. 22:00)、不定休、予約可、44席、座敷、貸切20〜50名、喫煙可、カード・PayPay 可、ベジタリアンメニューあり、開店日2000年3月4日、河原町で20年、京都では珍しい本格もんじゃ、ふわふわの生地。口コミ (2026年5〜10月、英語): もんじゃ850円 (いか・明太子・Baby Star、すじねぎ、明太もちチーズ)、ミックス焼1,199円、焼そば、ねぎ焼すじ902円、いか玉891円、エレベーターなしの3階、創業27年という声、店名は先代のあだ名、作り置き・冷凍のようだという声、量は少なめ。',
      confidence: 'medium', sources: [TB, R + 'B528831349/', R + 'B531266043/', R + 'B531568334/', R + 'B532014604/', R + 'B532055373/', R + 'B533562821/', R + 'B534311290/', R + 'B534912889/', R + 'B535176335/', R + 'B536573426/', R + 'B537179280/', R + 'B538379110/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu; dishes come ready to finish on the griddle; cards and PayPay; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通六角西入ル松ケ枝町464 大文字ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007762, 135.768418); cross-checked: GSI 京都府京都市中京区松ケ枝町464番地 (lot) 9m; 5.6 m from kyoto_kotowari (松ケ枝町463, next lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536573426/', R + 'B533562821/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Monjayaki (base; toppings extra)', '¥850', 'Monja', 'no', 'no', 'September 2026.', 'monjayaki'),
      it('', '', 'Okonomiyaki mix', '¥1,199', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'okonomiyaki_mix'),
      it('', '', 'Yakisoba mix', '¥1,199', 'Yakisoba', 'no', 'no', 'September 2026.', 'yakisoba_mix'),
      it('', '', 'Negiyaki with beef tendon', '¥902', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'negiyaki_suji'),
      it('', '', 'Ikatama (squid okonomiyaki)', '¥891', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'ikatama'),
    ] }, {
    cuisine: '河原町で20年ほどのお好み焼きと、京都では珍しいもんじゃ焼き (食べログの店の紹介)・もんじゃ850円にトッピング: いか・明太子・Baby Star、すじとねぎ、明太もちチーズなど。Tonchi もんじゃ、ごはんもんじゃ (2026年9月、2026年の口コミ)・ミックス焼1,199円、広島風、モダン焼、ベタ焼、すじ玉、いか玉891円・焼そばミックス1,199円、豚焼そば902円、カレー焼そば、オムそば、すじねぎ焼902円・げそ焼693円、チーズポテト焼671円 (2026年8〜9月)・大盛りは+200〜300円 (2026年10月)',
    neighborhood: '河原町の西の六角通、3階。京都市役所前駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。お好み焼き、もんじゃ、焼そば、ベタ焼は小麦の生地か麺で、同じ鉄板でソースを使う (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、もんじゃはかつおと昆布の出汁で、多くの料理に豚、いか、牛すじが入る (食べログ、2026年6月)。',
    notes: '[お好み焼き・もんじゃ・河原町、階段を上がる東京風もんじゃ] 六角通のビルの3階、レトロな鉄板の店。京都の中心にしては安く、京都では珍しいもんじゃを20年以上出している。いか・明太子・Baby Starのもんじゃ (ベース850円) から、ミックスのお好み焼き、ベタ焼、焼そば (約900〜1,200円) へ。店がほぼ焼き上げて持ってきて、鉄板で仕上げる。量は控えめで、2026年10月の客は作り置きのようだと書く。喫煙可、エレベーターなし。毎日11時30分〜22時30分。',
  });
}

// ================================================================ Arbrin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044180/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '10:30'], ['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_arbrin_yugen', name: 'Arbrin', category: 'OMNI',
    lat: 34.999913, lng: 135.765788, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The lunch buffet is bread, pasta, quiche-style dishes and desserts alongside salads and vegetables; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the buffet is vegetable-led, but it also carries prosciutto, pâté, mussels and cheesecake (Tabelog; 2026 reviews).',
    hours_raw: 'Breakfast 7:30–10:30 (last order 10:00), lunch 11:30–15:00 (last order 14:00; buffet until 14:30), dinner 17:00–22:00 (last orders food 21:00, drinks 22:00), daily (Tabelog). Lunch is a buffet with one main dish chosen from 6–8, for 90 minutes; book ahead — online slots fill and the restaurant asks diners not to phone on fully booked days (Tabelog; September–October 2026). No birthday plates at lunch (Tabelog). Dinner charge ¥500; dinner courses need one drink each (Tabelog). 50 seats with an open kitchen; private hire up to 50; non-smoking; wheelchair accessible; cards, IC cards, e-money and QR (Tabelog). Ground floor of the hotel YUGEN Kyoto Shijo on Takatsuji; 6 min from Kyoto Kawaramachi Stn (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji west of Kawaramachi, in YUGEN Kyoto Shijo — 6 min from Kyoto Kawaramachi Stn',
    cuisine: 'French regional cooking and wine in a hotel restaurant, by a chef with over 20 years’ experience (Tabelog, shop text) · lunch: one main from 6–8 — Bolognese with penne, carbonara, crab tomato cream pasta (+¥300), saury peperoncino, strip-loin steak, onion gratin soup, pâté de campagne — with a buffet of salads, vegetable dishes with Kyoto white miso and nama-fu dengaku, mussels steamed in white wine, chicken pâté, prosciutto, chilled pumpkin soup, breads and croissants, Basque cheesecake (August–October 2026) · breakfast and dinner à la carte and courses with world wines and sake (Tabelog)',
    website: null, gmaps: gm('Arbrin YUGEN Kyoto Shijo'), menu_url: TB + 'dtlmenu/',
    notes: "[French bistro · Kawaramachi, a vegetable-led lunch buffet] The glass-walled restaurant of the hotel YUGEN Kyoto Shijo, with an open kitchen and a lunch formula that fills up: pick one main — Bolognese, carbonara, a steak or onion gratin soup — and help yourself to a buffet of vegetable dishes, prosciutto, pâté, mussels, breads and Basque cheesecake, for 90 minutes. Lunch bills run about ¥2,000–4,000. Breakfast from 7:30 and French dinners with wine too. Book online; one September 2026 diner found the room tight, with staff carrying dishes taking the aisles.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; chef unnamed (over 20 years’ experience per Tabelog)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a casual French regional restaurant on the first floor of the hotel, with an open kitchen run by a chef of over 20 years, seasonal Kyoto ingredients, and wines from around the world and domestic sake; private hire for up to 50.',
      philosophy: null, specialty: 'Lunch buffet with a main.',
      anecdotes: [
        { text: 'A September 2026 diner wanted more dessert choice and felt rushed when plates were cleared straight away.', source: R + 'B535369031/' },
        { text: 'An October 2026 diner found 90 minutes too short to try everything wanted.', source: R + 'B537064004/' },
        { text: 'An October 2026 diner, crowded at the buffet by a large group, was kindly offered extra time by the staff.', source: R + 'B538481789/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・フレンチ・ワインバー、下京区鍵屋町218 YUGEN Kyoto shijo 1F、京都河原町駅から徒歩約6分、毎日 7:30〜10:30 (L.O. 10:00)・11:30〜15:00 (L.O. 14:00、ビュッフェは14:30まで)・17:00〜22:00 (L.O. 料理21:00、ドリンク22:00)、予約可 (満席の日の電話は控えて)、ランチのバースデープレートなし、ディナーのみチャージ500円、ディナーコースは1ドリンク制、50席、禁煙、車椅子可、カード・電子マネー・QR 可、ベジタリアンメニューあり、ホテル1階のフランス郷土料理とワイン、20年以上のシェフ。口コミ (2026年8〜10月、英語): メインを選ぶランチビュッフェ (ボロネーゼ、カルボナーラ、蟹のトマトクリーム +300円、ステーキ、オニオングラタンスープ)、野菜中心、京都の白味噌、生麩田楽、ムール貝、生ハム、バスクチーズケーキ、90分制、要予約。',
      confidence: 'medium', sources: [TB, R + 'B535369031/', R + 'B535500725/', R + 'B535566316/', R + 'B535658344/', R + 'B535710388/', R + 'B536110028/', R + 'B536359547/', R + 'B536492282/', R + 'B536696197/', R + 'B536720011/', R + 'B537064004/', R + 'B538481789/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch online; choose a main, then help yourself; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区鍵屋町218 YUGEN Kyoto shijo 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999913, 135.765788); cross-checked: GSI 京都府京都市下京区鍵屋町218番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535710388/', TB],
    price_note: 'Lunch prices not read exactly (reviews give ¥2,000–4,000 a head); the crab pasta supplement is from September 2026; dinner charge ¥500 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch: buffet with one main (pasta, steak, soup or pâté)', 'about ¥2,000–4,000', 'Lunch', 'ask', 'ask', '2026 reviews.', 'lunch_buffet'),
      it('', '', 'Crab tomato cream pasta (lunch main supplement)', '+¥300', 'Lunch', 'no', 'no', 'September 2026.', 'crab_pasta'),
      it('', '', 'Dinner charge', '¥500', 'Charge', '', '', 'Tabelog.', 'dinner_charge'),
    ] }, {
    cuisine: '20年以上のシェフによる、ホテルのレストランのフランス郷土料理とワイン (食べログの店の紹介)・ランチ: 6〜8種からメインを1品 (ペンネのボロネーゼ、カルボナーラ、蟹のトマトクリーム +300円、秋刀魚のペペロンチーノ、ステーキ、オニオングラタンスープ、パテ・ド・カンパーニュ) とビュッフェ: サラダ、京都の白味噌の野菜料理、生麩田楽、ムール貝の白ワイン蒸し、鶏のパテ、生ハム、かぼちゃの冷製スープ、パンとクロワッサン、バスクチーズケーキ (2026年8〜10月)・朝食、夜のアラカルトとコース、世界のワインと日本酒 (食べログ)',
    neighborhood: '河原町の西の高辻、YUGEN Kyoto Shijo の1階。京都河原町駅から徒歩6分',
    gf_detail: '要確認。ランチビュッフェにはパン、パスタ、デザートのほかサラダや野菜料理。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、ビュッフェは野菜中心だが、生ハム、パテ、ムール貝、チーズケーキもある (食べログ、2026年の口コミ)。',
    notes: '[フレンチビストロ・河原町、野菜中心のランチビュッフェ] ホテル YUGEN Kyoto Shijo のガラス張りのレストラン。オープンキッチンで、ランチは人気。ボロネーゼ、カルボナーラ、ステーキ、オニオングラタンスープなどからメインを1品選び、野菜料理、生ハム、パテ、ムール貝、パン、バスクチーズケーキのビュッフェを90分。ランチは1人2,000〜4,000円ほど。朝7時30分からの朝食や、ワインとフレンチの夜も。予約はオンラインで。2026年9月の客は店内が狭く、料理を運ぶスタッフで通路がふさがると書く。',
  });
}

// ================================================================ 料 かわしま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038522/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_ryo_kawashima', name: '料 かわしま (Ryo Kawashima)', category: 'MOM_AND_POP',
    lat: 35.011814, lng: 135.760289, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, and tell the restaurant in advance about allergies and dislikes for every guest (Tabelog). The course uses dashi and soy, with a fried shrimp-and-yam dish, udon in one dish and sushi (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kaiseki with dashi (2025–26 reviews).',
    hours_raw: 'One sitting: all guests start together at 18:00; closed Sunday and Monday (Tabelog). Reservation only; the next free dates have been one and a half to two years away, with cancellation slots appearing on TableCheck (May 2026); a January 2026 diner heard it was not taking new reservations. Phone or message only Tuesday–Saturday 12:00–17:00 (Tabelog). Tell the restaurant in advance of allergies and dislikes for every guest (Tabelog). 8 counter seats (6 bookable online; 7–8 for private hire) (Tabelog). Non-smoking; cards and e-money (Tabelog). A renovated townhouse just north of Oike-dori, 3 min from Karasuma Oike Stn (Tabelog; March 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Oike-dori — 3 min from Karasuma Oike Stn',
    cuisine: 'One-chef kappo course of seasonal fish (2025–26 reviews) · evening course ¥20,000 plus drinks (May 2026) · opens with a rice porridge (eel tsukudani, clam and Brussels sprouts, koppe crab); Densuke conger eel, firefly squid from Hyogo then Toyama, tuna sashimi with shungiku and sesame, grouper soup, lily bulb with karasumi, swordfish with sesame tofu, saba sushi, anago sushi, sekogani rice (2025–26 reviews) · two clay-pot rices to finish — plain white rice with six accompaniments such as karasumi, ikura and egg-yolk soy, and a flavoured one (2025–26 reviews) · sake; Heartland beer (December 2025)',
    website: null, gmaps: gm('料 かわしま 烏丸御池'), menu_url: null,
    notes: "[Kappo · Karasuma Oike, one chef and eight seats] A townhouse counter near Karasuma Oike where chef Kawashima cooks a single fish-led course for eight, all starting at 18:00: a gentle opening porridge, Densuke conger eel, firefly squid, lily bulb with karasumi, and a finish of clay-pot rice with half a dozen accompaniments. It is ¥20,000 before drinks, a price one three-time diner calls reasonable, and the waiting list runs a year or two. Watch TableCheck for cancellations, and phone only Tuesday–Saturday 12:00–17:00. Closed Sunday and Monday.",
    chef_bio: { chef_name: 'Kawashima', roles: ['Owner-chef who runs the 8 seats alone (2026 reviews; surname only)'], origin: null,
      background: 'A March 2026 reviewer says the restaurant opened in September 2022 in a renovated Kyoto townhouse; reviewers describe chef Kawashima as gentle and kind (May 2026), running all eight seats single-handed (January and August 2026), and showing guests how the dashi is made (July 2026).',
      philosophy: null, specialty: 'Seasonal fish course; clay-pot rice.',
      anecdotes: [
        { text: '"I made a reservation targeting cancellation slots through table check, as the next available booking is a year and a half away." — May 2026.', source: R + 'B518127498/' },
        { text: 'A January 2026 diner, brought by a regular, heard the restaurant was not accepting new reservations and found the seasoning a little mild for those who like stronger flavours.', source: R + 'B521043206/' },
        { text: '"I look forward to my next visit in 2028." — April 2026.', source: R + 'B468374466/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区車屋町通御池上ル塗師屋町333-2、烏丸御池駅から徒歩3分、18:00 一斉スタート、日曜・月曜休み、完全予約制、アレルギーや苦手なものは事前に、連絡は火〜土の12:00〜17:00、8席 (オンライン予約は6席まで)、禁煙、カード・電子マネー可。口コミ (2025年2月〜2026年8月、英語): 2022年9月開店、町家を改装、夜のコース20,000円、雑炊 (鰻の佃煮、蛤、雌のずわい蟹 (Koppe))、Densuke の穴子、ホタルイカ (Hyogo のちに Toyama)、百合根とからすみ、鯖寿司、穴子寿司、土鍋ご飯と6種のご飯のお供、予約は1年半〜2年待ち、TableCheck のキャンセル枠、一人で営む大将。',
      confidence: 'medium', sources: [TB, R + 'B463399129/', R + 'B468374466/', R + 'B483862158/', R + 'B498949809/', R + 'B515522760/', R + 'B517410278/', R + 'B518127498/', R + 'B521043206/', R + 'B528181322/', R + 'B533654412/', R + 'B533749020/', R + 'B536728293/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via TableCheck (watch for cancellations); phone Tue–Sat 12:00–17:00; arrive for the 18:00 start.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks guests to tell it in advance about allergies and disliked ingredients for themselves and their companions.', source: TB, verified: TODAY }] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区車屋町通御池上ル塗師屋町333-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011814, 135.760289); cross-checked: GSI 京都府京都市中京区塗師屋町333番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518127498/'],
    price_note: 'Course price from a May 2026 review; drinks extra.', last_checked: TODAY, items: [
      it('', '', 'Evening course (18:00 start)', '¥20,000', 'Course', 'ask', 'no', 'May 2026.', 'evening_course'),
      it('', '', 'Clay-pot rice with six accompaniments', '', 'Course', 'ask', 'no', '2025–26.', 'donabe_gohan'),
    ] }, {
    cuisine: '一人の大将の季節の魚の割烹コース (2025〜2026年の口コミ)・夜のコース20,000円と飲み物 (2026年5月)・最初は雑炊 (鰻の佃煮、蛤と芽キャベツ、雌のずわい蟹 (Koppe))、Densuke の穴子、Hyogo のちに Toyama のホタルイカ、春菊と胡麻のまぐろの刺身、クエの椀、百合根とからすみ、かじきと胡麻豆腐、鯖寿司、穴子寿司、雌のずわい蟹 (Sekokani) のご飯 (2025〜2026年の口コミ)・締めは2種の土鍋ご飯: からすみ、いくら、卵黄醤油など6種のお供の白ご飯と炊き込み (2025〜2026年の口コミ)・日本酒、ハートランドビール (2025年12月)',
    neighborhood: '御池の北の車屋町。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。アレルギーや苦手なものは同行者の分も事前に伝えること (食べログ)。出汁と醤油のコースで、海老と山芋の揚げ物、うどん入りの一品、寿司もある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心で出汁を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[割烹・烏丸御池、大将一人と8席] 烏丸御池近くの町家のカウンター。かわしまさんが8人に魚中心のコースを一斉に18時から出す。やさしい雑炊に始まり、Densuke の穴子、ホタルイカ、百合根とからすみ、締めは6種のお供の土鍋ご飯。飲み物別で20,000円、3回通った客は良心的な価格と書く。予約は1〜2年待ち。TableCheck のキャンセル枠を狙い、電話は火〜土の12時〜17時に。日曜・月曜休み。',
  });
}

// ================================================================ 祇園 まんま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030998/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_manma', name: '祇園 まんま (GION MANMA)', category: 'OMNI',
    lat: 35.004968, lng: 135.775808, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo cooking with dashi and soy, saba sushi, shrimp shinjo and Saikyo-miso marinated fish; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shrimp, conger eel and beef dishes with dashi (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–13:00 by reservation only, courses booked by the day before; dinner 17:00–22:00; closed Sunday; may close early (Tabelog). Reservations accepted (Tabelog). Omakase course or à la carte — three recommended dishes first, then order (May 2026). 8 counter seats facing the charcoal grill and a small courtyard (Tabelog; October 2025). Non-smoking; cards (Tabelog). In the Rakuen Koji alley, Gion north of Shijo; 3 min from the Gion bus stop, 7 min from Gion-Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rakuen Koji, Gion north of Shijo — 7 min from Gion-Shijo Stn',
    cuisine: 'Gion kappo with a charcoal grill and straw-searing, as a course or à la carte (2025–26 reviews) · straw-seared bonito, Akashi sawara, Awaji mackerel and conger eel, kuruma-shrimp shinjo in soup, sashimi of squid and shrimp with fried shrimp heads, salt-grilled onaga sea bream, Saikyo-miso mutsu, saba sushi, simmered octopus with lotus root, Omi beef tenderloin grilled in front of you (2025–26 reviews) · course ¥20,680 (December 2025); bills about ¥15,000–30,000 a head (2025–26 reviews) · sake',
    website: null, gmaps: gm('祇園 まんま 楽宴小路'), menu_url: null,
    notes: "[Kappo · Gion, straw-seared fish in Rakuen Koji] An 8-seat counter down Gion's Rakuen Koji, where the chef sears bonito over burning straw and grills on charcoal in full view, with a little courtyard behind. Have the omakase or go à la carte after three starters: Akashi sawara, Awaji conger eel, shrimp shinjo, salt-grilled sea bream and Omi beef. Opened in 2018 by a chef trained at Takada Hassho in Gifu; reviewers mention a Michelin listing. About ¥15,000–30,000 a head. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: 'Kagawa Prefecture (August 2026 review)',
      background: 'Per an August 2026 reviewer: the owner, from Kagawa, trained at the renowned "Takada Hassho" in Gifu before opening GION MANMA in 2018; the name expresses the wish that guests enjoy seasonal ingredients as they are. A November 2025 reviewer counted three chefs for seven counter seats; a November 2025 reviewer calls it Michelin-listed and an October 2026 reviewer Michelin-starred.',
      philosophy: 'Per an August 2026 reviewer: seasonal delicacies enjoyed "just as they are, in their purest form."',
      specialty: 'Straw-seared bonito; charcoal-grilled fish.',
      anecdotes: [
        { text: 'An October 2026 diner was troubled by visible food waste — anything slightly imperfect was discarded.', source: R + 'B538015402/' },
        { text: '"Conversations over the counter are enjoyable, and the chef’s personality is delightful." — September 2026.', source: R + 'B535312958/' },
        { text: 'A May 2026 diner watched Omi beef tenderloin grilled in front of the counter after ordering straw-seared bonito.', source: R + 'B538118998/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町北側347-108 楽宴小路内、祇園四条駅から徒歩約7分、祇園バス停から約3分、月〜土 11:30〜13:00 (昼は前日までの予約制のコース)・17:00〜22:00、日曜休み、早じまいあり、予約可、カウンター8席、禁煙、カード可。口コミ (2025年10月〜2026年10月、英語): 2018年開店、店主は Kagawa 出身で Gifu の Takada Hassho で修業、店名は旬をそのままに、藁焼きのかつお、Akashi の鰆、Awaji の鯖と穴子、車海老のしんじょ、Onaga の塩焼き、西京焼き、鯖寿司、Omi の牛肉ヒレ、おまかせとアラカルト、ミシュラン掲載との記述、食材の廃棄が気になったという声。',
      confidence: 'medium', sources: [TB, R + 'B478560727/', R + 'B516050066/', R + 'B517196134/', R + 'B519622442/', R + 'B527704648/', R + 'B530455210/', R + 'B531680432/', R + 'B535312958/', R + 'B535829888/', R + 'B536266528/', R + 'B538015402/', R + 'B538118998/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (lunch by the day before); omakase or à la carte; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-108 楽宴小路内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004968, 135.775808); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 24m; 14 m from kyoto_gion_endo (楽宴小路内); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519622442/', R + 'B478560727/'],
    price_note: 'Course price from a December 2025 review; bills of about ¥15,000–30,000 a head in 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chef’s omakase course', '¥20,680', 'Course', 'ask', 'no', 'December 2025.', 'omakase'),
      it('', '', 'Straw-seared bonito', '', 'À la carte', 'ask', 'no', '2026.', 'katsuo_warayaki'),
      it('', '', 'Saba sushi', '', 'À la carte', 'ask', 'no', 'September 2026.', 'saba_sushi'),
    ] }, {
    cuisine: '炭火と藁焼きの祇園の割烹。コースかアラカルト (2025〜2026年の口コミ)・藁焼きのかつお、Akashi の鰆、Awaji の鯖と穴子、車海老のしんじょの椀、いかと海老の刺身と海老の頭の揚げ物、Onaga の塩焼き、むつの西京焼き、鯖寿司、蛸と蓮根の炊いたん、目の前で焼く Omi の牛肉のヒレ (2025〜2026年の口コミ)・コース20,680円 (2025年12月)、1人約15,000〜30,000円 (2025〜2026年の口コミ)・日本酒',
    neighborhood: '四条の北の祇園、楽宴小路。祇園四条駅から徒歩7分',
    gf_detail: '要確認。出汁と醤油の割烹料理、鯖寿司、海老しんじょ、西京焼き。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、海老、穴子、牛肉の料理と出汁 (2025〜2026年の口コミ)。',
    notes: '[割烹・祇園、楽宴小路の藁焼き] 祇園の楽宴小路の奥、カウンター8席。目の前でかつおを藁で炙り、炭火で焼く。奥には小さな坪庭。おまかせか、最初の3品のあとアラカルトで、Akashi の鰆、Awaji の穴子、海老しんじょ、Onaga の塩焼き、Omi の牛肉を。Gifu の Takada Hassho で修業した店主が2018年に開店。ミシュラン掲載という口コミも。1人約15,000〜30,000円。日曜休み。',
  });
}

save();
