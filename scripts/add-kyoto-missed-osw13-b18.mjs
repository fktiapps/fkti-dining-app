// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 18.
//   + 焼肉やまちゃん Yakiniku Yamachan (course-only yakiniku, a sister of Tomikoji Yamagishi; since 2021)
//   + オテルドゥオガワ Hotel De Ogawa (no-reservation counter izakaya, a sister of Shokudo Ogawa; since May 2024)
//   + ヴェーナ Vena (Daiki Hayakawa's Italian in a century-old townhouse near Marutamachi; since 2016)
//   + 祇園 一道 Gion Ichido (Chef Seki's teppan kaiseki counter on Nawate, run by a couple; since 2011)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 17).
//   None is in data/kyoto.json: grep by name (やまちゃん/Yamachan, オテル/Hotel De Ogawa, ヴェーナ/Vena, 一道/Ichido) and
//   address (蛸屋町157-11, 船頭町230, 鏡屋町46-3, 祇園町南側589) found nothing; mp_ogawa is an unrelated udon shop.
//   Neighbours: Hotel De Ogawa 14 m from mp_kiko; Vena 26 m from kyoto_radice_marutamachi — no stacking.
//   Group check: Yakiniku Yamachan and Hotel De Ogawa are sister concepts of other restaurants not in data (Greg,
//   2026-11-02: sister concepts are drafted as their own shops). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼肉やまちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035839/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_yakiniku_yamachan', name: '焼肉やまちゃん (Yakiniku Yamachan)', category: 'OMNI',
    lat: 35.006115, lng: 135.766069, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Meats come with sauces including a sweet yukhoe sauce and miso, and the course ends with curry or cold noodles; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef course.',
    hours_raw: '17:00–22:30 (last food order 21:30), Mon, Tue and Thu–Sun and holidays; closed Wednesday (Tabelog). Reservations accepted, on Tabelog or by phone; one July 2026 diner booked 62 days ahead, others got same-day seats on weekdays (2026 reviews). Course only: omakase ¥13,500 tax included (July–October 2026). 22 seats: a counter of 12 divided into pairs, and two private rooms for 3–4 and 4–6 (Tabelog; September 2026). You grill your own meat (June 2026). Smoking area outside (Tabelog). Cards incl. UnionPay (Tabelog). 8 min from Karasuma or Kawaramachi Stn (Tabelog). Opened 2 April 2021 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Central Kyoto between Karasuma and Kawaramachi — 8 min from either station',
    cuisine: 'Course-only yakiniku of top-grade beef, grilled yourself at counters divided into pairs (2026 reviews) · omakase ¥13,500 tax included (2026) · signatures: a yukhoe shaped like a cow with egg yolk and a sweet sauce; thick tongue fresh enough to serve rare; a shabu-shabu of strip loin with Kujo negi; white tripe sashimi; skirt steak, including with miso sauce; kimchi and namul (2026 reviews) · finish with curry or cold noodles in three sizes, then milk pudding',
    website: null, gmaps: gm('焼肉やまちゃん 京都'), menu_url: null,
    notes: "[Yakiniku · Shijo-Karasuma, course yakiniku from a Kyoto restaurant family] A sister of the Kyoto restaurant Tomikoji Yamagishi, run by the founder's brother according to an October 2026 review, serving one omakase yakiniku course at counters split into private pairs. It opens with a yukhoe shaped like a little cow, then thick tongue, a strip-loin shabu-shabu with Kujo negi, tripe sashimi and skirt steak, ending with curry or cold noodles and milk pudding. ¥13,500 including tax is good value, and diners say the seasoning lets the meat speak. Book on Tabelog; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Sister restaurant of Tomikoji Yamagishi, run by the founder\'s brother (October 2026 review); no names in a source'], origin: null,
      background: 'Per 2026 reviews: a sister restaurant of the Kyoto restaurant Tomikoji Yamagishi (one June 2026 review says the Washoku Yamaki group); course only; opened 2 April 2021. Tabelog Yakiniku WEST "Tabelog 100" 2021–2023, 2025 and Grill WEST 2024, 2026. A long-standing regular (41 visits by July 2026) praises the improving sauces.',
      philosophy: null, specialty: 'Cow-shaped yukhoe; thick tongue; skirt steak.',
      anecdotes: [
        { text: '"The first dish served was a cute beef-shaped yukhoe." — August 2026.', source: R + 'B533691663/' },
        { text: '"The counter has dividers for every two seats, reminiscent of Ichiran style." — September 2026.', source: R + 'B535109804/' },
        { text: '"Honestly, it didn’t resonate with me at all." — October 2026, on the ¥13,500 course.', source: R + 'B538072343/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉やまちゃん、焼肉・日本料理、中京区蛸屋町157-11、烏丸駅・河原町駅から徒歩8分、月・火・木〜日・祝 17:00〜22:30 (L.O.21:30)、水曜休み、予約可、22席 (カウンター12、テーブル10)、1階に個室2室、店外に喫煙所、カード可、2021年4月2日オープン、焼肉 WEST 百名店 2021〜2023・2025、肉料理 WEST 百名店 2024・2026。口コミ (2026年5〜10月、英語): Tomikoji Yamagishi の姉妹店、コースのみ13,500円 (税込)、牛の形のユッケ、厚切りのタン、自分で焼くスタイル、二人ずつ仕切られたカウンター。',
      confidence: 'medium', sources: [TB, R + 'B437135826/', R + 'B528592298/', R + 'B529866091/', R + 'B532112580/', R + 'B533691663/', R + 'B534193711/', R + 'B535109804/', R + 'B535992857/', R + 'B537740046/', R + 'B538072343/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set course; grill it yourself; book on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸屋町157-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Grill WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.006115, 135.766069); cross-checked: GSI 京都府京都市中京区蛸屋町157番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532112580/', R + 'B533691663/'],
    price_note: 'Course price from July–August 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase yakiniku course', '¥13,500', 'Course', 'ask', 'no', 'July–October 2026.', 'omakase'),
    ] }, {
    cuisine: '自分で焼くコースのみの焼肉。二人ずつ仕切られたカウンター (2026年の口コミ)・おまかせ13,500円 (税込、2026年)・名物: 卵黄と甘いたれの牛の形のユッケ、レアでも食べられる厚切りのタン、九条ねぎとロースのしゃぶしゃぶ、白センマイの刺身、味噌だれも選べるハラミ、キムチとナムル (2026年の口コミ)・締めはカレーか冷麺 (大・中・小)、ミルクプリン',
    neighborhood: '烏丸と河原町の間。どちらの駅からも徒歩8分',
    gf_detail: '予約時に要確認。甘いユッケのたれや味噌だれなどを使い、締めはカレーか冷麺。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。牛肉のコース。',
    notes: '[焼肉・四条烏丸、京都の名店の一家のコース焼肉] 2026年10月の口コミによれば京都の名店 Tomikoji Yamagishi の姉妹店で、創業者の弟が営む。二人ずつ仕切られたカウンターでおまかせの焼肉コースを一つだけ。牛の形のかわいいユッケに始まり、厚切りのタン、九条ねぎとロースのしゃぶしゃぶ、センマイの刺身、ハラミ、締めにカレーか冷麺とミルクプリン。税込13,500円はお値打ちで、肉を生かす控えめな味付けと評判。予約は食べログで、水曜休み。',
  });
}

// ================================================================ オテルドゥオガワ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041273/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '22:00']);
  put({
    id: 'kyoto_hotel_de_ogawa', name: 'オテルドゥオガワ (Hotel De Ogawa)', category: 'MOM_AND_POP',
    lat: 35.002634, lng: 135.770326, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte izakaya dishes include fried chicken, Matsutake fry, pasta and fried rice alongside sashimi and simmered dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki-trained izakaya built on dashi, fish and chicken (2026 reviews).',
    hours_raw: '14:00–22:00 (last order 21:00), Tue–Sun; closed Monday (Tabelog). No reservations and no waiting line: walk in and take a seat if one is free; no groups (Tabelog; September 2026). Opening at 14:00 is the best chance (2026 reviews). 8 counter seats (Tabelog). Non-smoking (Tabelog). Cash only (Tabelog). The blackboard menu shows no prices (August 2026). On the ground floor of a hotel on Nishi-Kiyamachi south of Shijo, 177 m from Gion-Shijo Stn (Tabelog; October 2026). Opened May 2024 (October 2026 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Kiyamachi south of Shijo, unsigned on a hotel\'s ground floor — a short walk from Gion-Shijo Stn',
    cuisine: 'À la carte izakaya cooking with kaiseki technique, from a blackboard menu without prices (2026 reviews) · signatures inherited from the parent shop: bone-in fried chicken with yuzu pepper, dashimaki, jako fried rice (October 2026) · also karasumi mochi, chicken wings, duck ham, sashimi platters and anago sashimi, Matsutake fry, fried guji, squid shumai, mackerel sushi, boiled octopus, simmered tofu, mentaiko pasta and the chef\'s own "My Napolitan" (August–October 2026) · shochu, sake, draft beer · diners spend about ¥4,000–9,999',
    website: null, gmaps: gm('オテルドゥオガワ 京都'), menu_url: null,
    notes: "[Izakaya · Kiyamachi, the walk-in spin-off of a hard-to-book kappo] Right next to the hard-to-book Shokudo Ogawa, its sister has eight counter seats, no sign, no reservations and no queue: arrive (ideally at the 14:00 opening) and sit if there is room. Chef Hiroto Haeo, seven years under Shintaro Ogawa, cooks the parent shop's classics — bone-in fried chicken, dashimaki, jako fried rice — alongside karasumi mochi, Matsutake fry and a ketchupy Napolitan. The blackboard shows no prices; most spend ¥5,000–9,000. Cash only; closed Mondays.",
    chef_bio: { chef_name: 'Hiroto Haeo (October 2026 review; no kanji in a source)', roles: ['Head of the kitchen (October 2026 review)'], origin: null,
      background: 'Per an October 2026 review: opened in May 2024 next to its parent Shokudo Ogawa on Nishi-Kiyamachi, on the ground floor of a hotel (hence the French "Hôtel"); the kitchen is run by Hiroto Haeo, who trained for seven years under Shintaro Ogawa of Shokudo Ogawa, and keeps the parent shop\'s fried chicken, dashimaki and jako fried rice. Tabelog Izakaya WEST "Tabelog 100" 2025, 2026.',
      philosophy: null, specialty: 'Bone-in fried chicken; jako fried rice; karasumi mochi.',
      anecdotes: [
        { text: '"Hotel De Ogawa is an izakaya that does not accept reservations or allow waiting in line." — September 2026.', source: R + 'B536849720/' },
        { text: '"A restaurant that couldn’t take reservations has now opened one that doesn’t accept them at all." — October 2026.', source: R + 'B537546600/' },
        { text: '"For JPY 6000, I had a draft beer, karasumi mochi, a three-piece sashimi platter, half a serving of Japanese sake, and fried matsutake mushrooms, which seems a bit pricey overall." — August 2026.', source: R + 'B534686622/' },
      ],
      japanese_sources_summary: '食べログ: オテルドゥオガワ、居酒屋、下京区西木屋町通四条下る船頭町230、祇園四条駅から177m、火〜日 14:00〜22:00 (L.O.21:00)、月曜休み、予約不可、団体不可、カウンター8席、カード不可、居酒屋 WEST 百名店 2025・2026。口コミ (2026年5〜10月、英語): Shokudo Ogawa の姉妹店、ホテルの1階で看板なし、予約も行列もなし、2024年5月開業、Shintaro Ogawa のもとで7年修業した Hiroto Haeo さん、骨付きの唐揚げ、だし巻き、じゃこチャーハン、からすみ餅、値段のない黒板メニュー。',
      confidence: 'medium', sources: [TB, R + 'B527264505/', R + 'B533185888/', R + 'B533621458/', R + 'B533939963/', R + 'B533961609/', R + 'B534391858/', R + 'B534686622/', R + 'B535706964/', R + 'B536849720/', R + 'B537546600/'] },
    cultural_comfort: { level: 'japanese', note: 'Walk-in only, eight seats, a Japanese blackboard menu without prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町通四条下る船頭町230',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002634, 135.770326); cross-checked: GSI 京都府京都市下京区船頭町230番地 (lot) 25m; mp_kiko is 14 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534686622/', R + 'B535706964/'],
    price_note: 'No prices are shown on the menu; diners report ¥4,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Bone-in fried chicken', '', 'À la carte', 'no', 'no', '2026 reviews.', 'karaage'),
      it('', '', 'Karasumi mochi', '', 'À la carte', 'ask', 'no', '2026 reviews.', 'karasumi_mochi'),
      it('', '', 'Jako fried rice', '', 'À la carte', 'ask', 'no', 'August and October 2026.', 'jako_fried_rice'),
    ] }, {
    cuisine: '値段のない黒板メニューから一品で頼む、懐石の技の居酒屋料理 (2026年の口コミ)・本店ゆずりの名物: 柚子胡椒の骨付きの唐揚げ、だし巻き、じゃこチャーハン (2026年10月)・ほかにからすみ餅、手羽、鴨ハム、お造りの盛り合わせや穴子の刺身、松茸のフライ、ぐじの唐揚げ、いかしゅうまい、鯖寿司、たこの煮物、厚揚げの煮物、明太子パスタ、店独自の「My Napolitan」(2026年8〜10月)・焼酎、日本酒、生ビール・予算は約4,000〜9,999円',
    neighborhood: '四条の南の西木屋町、看板のないホテルの1階。祇園四条駅からすぐ',
    gf_detail: '要確認。一品料理に唐揚げ、松茸のフライ、パスタ、チャーハンもあり、お造りや煮物も。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁、魚、鶏が基本の懐石出身の居酒屋 (2026年の口コミ)。',
    notes: '[居酒屋・木屋町、予約の取れない割烹の飛び込み専用の姉妹店] 予約困難で知られる Shokudo Ogawa の隣、看板もなくカウンター8席の姉妹店は、予約も行列もなし。行って (できれば14時の開店時に) 空いていれば座れる。Shintaro Ogawa のもとで7年修業した Hiroto Haeo さんが、本店ゆずりの骨付きの唐揚げ、だし巻き、じゃこチャーハンに、からすみ餅、松茸のフライ、ケチャップのナポリタンも作る。黒板に値段はなく、多くは5,000〜9,000円ほど。現金のみ、月曜休み。',
  });
}

// ================================================================ ヴェーナ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028480/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_vena', name: 'ヴェーナ (Vena)', category: 'MOM_AND_POP',
    lat: 35.015174, lng: 135.758138, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Courses include house pasta, raviolone and bread; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, shellfish, wagyu and pork (2025–2026 reviews).',
    hours_raw: 'Lunch with last entry at 12:00–13:00 on Mon, Tue, Sat, Sun and holidays; dinner from 17:30 with last entry 21:00; closed Wednesday (Tabelog). No closing times are published, so no hours are stored. Reservation only, by phone (075-255-8757) or Pocket Concierge (Tabelog). Lunch course ¥12,000 and dinner course ¥24,000 including tax and service (Tabelog remarks, undated); a March 2026 dinner with wine pairing came to about ¥36,000. 26 seats: a counter of 10 on the ground floor and two private rooms for up to 8 upstairs (Tabelog). Non-smoking; ashtray outside (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 6 min from Marutamachi Stn (Tabelog). Opened 20 December 2016 (January 2026 review).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Karasuma-Marutamachi, a century-old townhouse with a garden — 6 min from Marutamachi Stn',
    cuisine: 'Italian courses built on Kyoto ingredients — "what if there were a state called Kyoto in Italy?" — with wine or non-alcohol pairings by the sommelier (January 2026 review) · lunch ¥12,000, dinner ¥24,000 tax and service included (Tabelog) · June 2026 dinner: new-onion capellini with torigai; striped jack tartare; fried young Lake Biwa ayu with burrata; seared sirloin carpaccio with summer truffle; hairy crab and sea urchin tagliolini; corn risotto with chorizo; Omi beef fillet; "Sun Egg" pudding with milk gelato · also raviolone with oozing yolk in the colder months, clam and edamame gratin, truffles shaved at the table, house grissini and bread · a cellar of wine by the door',
    website: null, gmaps: gm('ヴェーナ 京都'), menu_url: null,
    notes: "[Italian · Marutamachi, Kyoto as an Italian region] In a hundred-year-old townhouse near Karasuma-Marutamachi, chef Daiki Hayakawa, from the Kyoto Italian Il Ghiottone, cooks as if Kyoto were a region of Italy, and sommelier Yoji Ikemoto pairs from a cellar you walk past on the way in. Ten seats at a single-slab counter face a small garden; two private rooms are upstairs. Expect dishes like fried young Lake Biwa ayu with burrata, hairy-crab tagliolini and Omi beef, finished with the \"Sun Egg\" pudding. 2026 reviewers call it Michelin-starred. Lunch ¥12,000, dinner ¥24,000 all in; book by phone or Pocket Concierge; closed Wednesdays.",
    chef_bio: { chef_name: 'Daiki Hayakawa (January 2026 review: "Chef Daiki Hayakawa"; no kanji in a source)', roles: ['Chef', 'Sommelier Yoji Ikemoto, co-founder (January 2026 review)'], origin: null,
      background: 'Per a January 2026 review: opened in December 2016 by chef Daiki Hayakawa, trained at the Kyoto Italian Il Ghiottone, with sommelier Yoji Ikemoto, on the concept "what if there were a state called Kyoto in Italy?", in a 100-year-old townhouse. 2026 reviews call it Michelin one-starred. Tabelog Italian WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: '"What if there were a state called Kyoto in Italy?" (January 2026 review).', specialty: 'Seasonal Kyoto-Italian courses; raviolone; "Sun Egg" pudding.',
      anecdotes: [
        { text: '"This year, I\'ve been to Italian restaurants about 90 times, but this place left the most lasting impression on me." — September 2026.', source: R + 'B279739935/' },
        { text: '"With a spacious counter overlooking a traditional town house garden, the ambiance is truly top-notch." — March 2026.', source: R + 'B525412095/' },
        { text: '"Everything was delicious, and the performance of shaving truffles right in front of us was truly impressive." — December 2025.', source: R + 'B522461063/' },
      ],
      japanese_sources_summary: '食べログ: ヴェーナ、イタリアン、中京区鏡屋町46-3、丸太町駅から徒歩約6分、昼12:00〜13:00最終入店 (月・火・土・日・祝のみ)、夜17:30〜21:00最終入店、水曜休み、予約のみ、Pocket Concierge で予約可、ランチコース12,000円・ディナーコース24,000円 (税・サ込)、26席 (1階カウンター10、2階に8名までの個室2室)、カード可、イタリアン WEST 百名店 2021・2023・2025。口コミ (2025年12月〜2026年9月、英語): Il Ghiottone 出身の Daiki Hayakawa シェフとソムリエの Yoji Ikemoto、「イタリアに京都州があったら」、築100年の町家、ミシュラン一つ星、ペアリング。',
      confidence: 'medium', sources: [TB, R + 'B279739935/', R + 'B518923629/', R + 'B519264165/', R + 'B520899601/', R + 'B522461063/', R + 'B525412095/', R + 'B531015802/', R + 'B531310790/', R + 'B531414082/', R + 'B536355756/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses with pairings explained; book via Pocket Concierge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鏡屋町46-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.015174, 135.758138); cross-checked: GSI 京都府京都市中京区鏡屋町46番地 (lot) 46m; kyoto_radice_marutamachi is 26 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog remarks (undated; tax and service included).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (Mon, Tue, Sat, Sun, holidays)', '¥12,000', 'Course', 'ask', 'no', 'Tabelog.', 'lunch'),
      it('', '', 'Dinner course', '¥24,000', 'Course', 'ask', 'no', 'Tabelog.', 'dinner'),
    ] }, {
    cuisine: '京都の食材で組み立てるイタリアンのコース。「イタリアに京都州があったら」、ソムリエのワインやノンアルコールのペアリング付き (2026年1月の口コミ)・昼12,000円、夜24,000円 (税・サ込、食べログ)・2026年6月のディナー: 新玉ねぎと鳥貝のカッペリーニ、縞鯵のタルタル、琵琶湖の稚鮎のフリットとブッラータ、夏トリュフの炙りサーロインのカルパッチョ、毛蟹と雲丹のタリオリーニ、とうもろこしとチョリソのリゾット、近江牛のフィレ、ミルクジェラートのプリン「Sun Egg」・寒い時期の黄身のとろけるラヴィオローネ、蛤と枝豆のグラタン、目の前で削るトリュフ、自家製のグリッシーニとパン・入口にワインセラー',
    neighborhood: '烏丸丸太町の近く、庭のある築100年の町家。丸太町駅から徒歩6分',
    gf_detail: '予約時に要確認。自家製パスタ、ラヴィオローネ、パンがあるコース。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、和牛、豚のコース (2025〜2026年の口コミ)。',
    notes: '[イタリアン・丸太町、イタリアの京都州] 烏丸丸太町近くの築100年の町家で、京都のイタリアン Il Ghiottone 出身の Daiki Hayakawa シェフが京都がイタリアの一州だったらという発想で料理し、ソムリエの Yoji Ikemoto さんが入口のワインセラーから合わせる。一枚板のカウンター10席が小さな庭に面し、2階に個室が2室。琵琶湖の稚鮎のフリットとブッラータ、毛蟹のタリオリーニ、近江牛、締めにプリンの「Sun Egg」など。2026年の口コミではミシュランの星付き。昼12,000円、夜24,000円 (税・サ込)、予約は電話か Pocket Concierge で、水曜休み。',
  });
}

// ================================================================ 祇園 一道
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018265/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_gion_ichido', name: '祇園 一道 (Gion Ichido)', category: 'MOM_AND_POP',
    lat: 35.003608, lng: 135.773161, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A teppan omakase with yakisoba-style noodles, sauces such as chili and peanut, and garlic rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a course of seafood, beef and foie gras (2026 reviews).',
    hours_raw: '18:00–22:30; closed Thursday and one irregular day a month (Tabelog). Reservation only, by phone 075-561-1949 (Tabelog). Omakase course ¥30,000 before tax, plus up to ¥10,000 in some seasons (Tabelog); diners report ¥40,000–49,999 with drinks, and an October 2025 couple paid ¥105,000 including drinks they found pricey. Portion size is asked at the start (October 2025). 8 counter seats (Tabelog). Non-smoking; smoking space at the entrance (Tabelog). Cards (JCB, AMEX, Diners) (Tabelog). On the east side of Nawate-dori just south of Shijo, 5 min from Gion-Shijo Stn (Tabelog). Opened 5 June 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, on Nawate-dori just south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Creative teppan kaiseki: a Japanese base with Western touches, cooked on the griddle before you (2026 reviews) · omakase ¥30,000 before tax, up to ¥10,000 more in some seasons (Tabelog) · October 2026: ikura sticky rice; caramelised black fig with truffle; rare Spanish mackerel with caviar and ginkgo; beef tongue in white miso; steamed abalone with sea urchin; Matsutake fried noodles; a hamburg of tenderloin and foie gras with wasabi; tenderloin steak · earlier in 2026: Ise lobster in chili sauce, grilled milt yakisoba, kombu-cured firefly-squid yakisoba, Omi beef with bamboo shoots in white miso, sukiyaki, garlic rice, house ice cream · champagne and wine pairings',
    website: null, gmaps: gm('祇園 一道'), menu_url: null,
    notes: "[Teppanyaki · Gion, a couple's teppan kaiseki counter] Just off Shijo on Nawate-dori, eight seats face the griddle run by a husband-and-wife team, where owner-chef Seki cooks a long omakase — teppan as kaiseki, a Japanese base with Western touches: Spanish mackerel with caviar, beef tongue in white miso, Matsutake fried noodles, Ise lobster in chili sauce, a tenderloin-and-foie-gras hamburg and garlic rice. Portions are generous; you are asked your appetite at the start. ¥30,000 before tax, more in some seasons, and drinks add up. Book by phone; closed Thursdays.",
    chef_bio: { chef_name: 'Seki (surname only; March 2026 review: "Chef Seki, the owner")', roles: ['Owner-chef (March 2026 review)'], origin: null,
      background: 'Per an October 2026 review: counter-only and run by a husband-and-wife team, the chef cooking in front of guests. Tabelog: opened 5 June 2011; The Tabelog Award 2021 Bronze; Steak and Teppanyaki "Tabelog 100" 2022 and WEST 2024, 2025.',
      philosophy: null, specialty: 'Teppan kaiseki; firefly-squid yakisoba; tenderloin and foie gras hamburg.',
      anecdotes: [
        { text: '"The restaurant features only a counter and is run by a husband-and-wife team." — October 2026.', source: R + 'B537525388/' },
        { text: '"In particular, I loved the yakisoba made with kombu-cured firefly squid" — March 2026.', source: R + 'B440116338/' },
        { text: '"I felt the drink prices were a bit high, especially since we didn\'t even order a bottle." — October 2025.', source: R + 'B515455899/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 一道、鉄板焼き・日本料理・ステーキ、東山区祇園町南側589 ぎをん松本ビル1階、祇園四条駅から徒歩5分、四条 Nawate の交差点を下がった東側、月〜水・金〜日 18:00〜22:30、木曜と月1回の不定休、予約のみ、コース30,000円 (税別、季節により最大10,000円増)、カウンター8席、カード可、2011年6月5日オープン、The Tabelog Award 2021 Bronze、ステーキ・鉄板焼き百名店 2022、WEST 2024・2025。口コミ (2025年2月〜2026年10月、英語): 店主の Seki シェフ、夫婦で営むカウンター、創作の鉄板懐石、ホタルイカの焼きそば、伊勢海老のチリソース、量が多い。',
      confidence: 'medium', sources: [TB, R + 'B199813251/', R + 'B440116338/', R + 'B479985339/', R + 'B504371521/', R + 'B504908883/', R + 'B515455899/', R + 'B525884881/', R + 'B526654714/', R + 'B526748136/', R + 'B537525388/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the griddle; say how hungry you are at the start.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側589 ぎをん松本ビル1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003608, 135.773161); cross-checked: GSI 京都府京都市東山区祇園町南側589番地 (lot) 78m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog (before tax).', last_checked: TODAY, items: [
      it('', '', 'Omakase teppan course', '¥30,000 + tax', 'Course', 'ask', 'no', 'Tabelog; up to ¥10,000 more in some seasons.', 'omakase'),
    ] }, {
    cuisine: '和をベースに洋を取り入れた創作の鉄板懐石を目の前の鉄板で (2026年の口コミ)・おまかせ30,000円 (税別、季節により最大10,000円増、食べログ)・2026年10月: いくらのおこわ、トリュフを添えた黒いちじくのキャラメリゼ、キャビアと銀杏の鰆のレア焼き、牛タンの白味噌仕立て、蒸し鮑と雲丹、松茸の揚げそば、フィレとフォアグラと山葵のハンバーグ、フィレステーキ・2026年のほかの日: 伊勢海老のチリソース、白子の焼きそば、昆布締めのホタルイカの焼きそば、近江牛と筍の白味噌、すき焼き、ガーリックライス、自家製アイス・シャンパンやワインのペアリング',
    neighborhood: '祇園、四条のすぐ南の Nawate 通。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。焼きそばのような麺、チリやピーナッツのソース、ガーリックライスのある鉄板のおまかせ。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、牛肉、フォアグラのコース (2026年の口コミ)。',
    notes: '[鉄板焼き・祇園、夫婦の鉄板懐石のカウンター] 四条から Nawate 通を少し下がったところ、8席のカウンターの前の鉄板で、夫婦で営み、店主の Seki シェフが長いおまかせを焼く。和をベースに洋を取り入れた鉄板懐石: キャビアをのせた鰆、白味噌仕立ての牛タン、松茸の揚げそば、伊勢海老のチリソース、フィレとフォアグラのハンバーグ、ガーリックライス。量が多く、最初に食べる量を聞かれる。税別30,000円で季節により高くなり、飲み物もかさむ。予約は電話で、木曜休み。',
  });
}

save();
