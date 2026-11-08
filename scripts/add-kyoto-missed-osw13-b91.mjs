// Kyoto priority (kyoto-missed), worker osw13, batch 91 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 鮨 なかむら, 祇園ししし, 花咲 錦店, 山庄.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26029122', 'chain: ウェンディーズ・ファーストキッチン 京都大丸前店 is a branch of the national Wendy\'s / First Kitchen chain');

// ================================================================ 鮨 なかむら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028432/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']); const LD = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_sushi_nakamura_gion', name: '鮨 なかむら (Sushi Nakamura)', category: 'OMNI',
    lat: 35.005207, lng: 135.774278, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-marinated tuna, nikiri soy and cooked appetizers in the omakase (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon and Wed 18:00–23:00; Tue, Thu, Fri, Sat 12:00–15:00 and 18:00–23:00 (food last order 13:30 / 21:00); closed Sunday. Reservations taken — same-day seats were available (September 2023; August 2026). Service charge 10% — Tabelog, Japanese original 「サービス料10%」. 10 counter seats. Designated smoking area. Cards; no e-money or QR. 4th floor of ミユキビル, Suekichi-cho, Gion.',
    hours: { 0: D, 1: LD, 2: D, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Suekichi-cho, north Gion — 3 min walk from Gion-Shijo',
    cuisine: 'The Kyoto branch of the Roppongi (Tokyo) Edomae sushi bar Sushi Nakamura, with red-vinegar rice and a 10-seat counter (2023–2026 reviews) · omakase of four or so tsumami then nigiri: clam soup, vinegared sprats, straw-smoked bonito, grilled sawara or managatsuo, octopus with daikon, aged sashimi; sea-bream battera; marinated lean tuna; a futomaki to take home (2024–2026) · lunch course ¥12,000 (August 2026); dinner omakase ¥21,000 (October 2026) · sake, shochu and wine, including a sweet white aperitif (February 2026)',
    website: null, gmaps: gm('鮨 なかむら 祇園 末吉町'), menu_url: null,
    notes: '[Edomae sushi · Suekichi-cho, Gion, the Kyoto branch of Roppongi\'s Nakamura] A high-ceilinged 4th-floor counter carrying the red-vinegar style of Tokyo\'s Sushi Nakamura: aged and marinated fish, smoky bonito and battera, with a young head chef; in October 2026 a chef explained each piece in English. Lunch ¥12,000, dinner ¥21,000 plus 10% service. Some find the flavours strong or the pace slow. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Reviewers call it a branch of Sushi Nakamura in Roppongi, Tokyo (September 2024; January and September 2026), whose owner trained at Kichijo before turning to sushi (January 2024). The Kyoto counter is run by a young head chef — "thirty years old" in September 2024 — and in October 2026 by a chef "who was foreign" and explained each piece in English. Criticism: small rice and toppings for the price (September 2023), slow service with "many dull moments" (February 2026), and flavours "quite strong" (January 2026).',
      philosophy: null,
      specialty: 'Edomae red-vinegar nigiri; marinated tuna.',
      anecdotes: [
        { text: 'September 2026: "The restaurant\'s decor, side dishes, and sushi were all true to the original branch… At the same time, the chef\'s unique touches and innovations provided a different kind of enjoyment."', source: R + 'B535027416/' },
        { text: 'October 2026: "The chef, who was foreign, kindly explained each part in English, considering our needs."', source: R + 'B538721271/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 なかむら、寿司・日本料理・魚介料理、東山区末吉町80-11 ミユキビル 4F、祇園四条駅から徒歩3分、月・水 18:00〜23:00、火・木・金・土 12:00〜15:00・18:00〜23:00 (L.O. 13:30・21:00)、日曜休み、予約可、原文で「サービス料10%」、カウンター10席、喫煙所あり、カード可、電子マネー・QR不可、法人会員。口コミ (2023年4月〜2026年10月、英語): 六本木の鮨 なかむらの支店、赤酢のシャリ、おまかせ、はまぐりのお椀、きびなごの酢締め、藁焼きのかつお、鰆やまながつおの焼き物、たこと大根、熟成の刺身、鯛のバッテラ、まぐろの漬け、お土産の太巻き、昼のコース12,000円 (2026年8月)、夜のおまかせ21,000円 (2026年10月)、若い大将、英語での説明 (2026年10月)、シャリやネタが小さい (2023年9月)、提供が遅い (2026年2月)、味が濃い (2026年1月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B466380317', 'B472337494', 'B477434984', 'B477591405', 'B491732965', 'B522597978', 'B524331133', 'B524945857', 'B534218937', 'B535027416', 'B536301198', 'B538721271'])) },
    cultural_comfort: { level: 'english', note: 'Chef explained in English (October 2026); 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町80-11 ミユキビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005207, 135.774278); cross-checked: GSI 京都府京都市東山区末吉町80番地 (lot) 52m; nearest pin kyoto_pizzeria_30_gion 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534218937/', R + 'B538721271/'],
    price_note: 'Course prices from August and October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥12,000', 'Course', 'no', 'no', 'August 2026.', 'lunch_omakase'),
      it('', '', 'Dinner omakase', '¥21,000', 'Course', 'no', 'no', 'October 2026.', 'dinner_omakase'),
    ] }, {
    cuisine: '東京・六本木の江戸前鮨 鮨 なかむらの京都店。赤酢のシャリ、カウンター10席 (2023〜2026年の口コミ)・つまみ4品ほどのあとにぎり: はまぐりのお椀、きびなごの酢締め、藁焼きのかつお、鰆やまながつおの焼き物、たこと大根、熟成の刺身、鯛のバッテラ、まぐろの漬け、お土産の太巻き (2024〜2026年)・昼のコース12,000円 (2026年8月)、夜のおまかせ21,000円 (2026年10月)・日本酒、焼酎、ワイン、食前の甘口白ワインも (2026年2月)',
    neighborhood: '祇園北側の末吉町。祇園四条から徒歩3分',
    gf_detail: 'グルテンフリーではない: まぐろの漬け、煮切り醤油、火を通したつまみ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 江戸前鮨のおまかせ (食べログ、口コミ)。',
    notes: '[江戸前鮨・祇園末吉町、六本木のなかむらの京都店] 天井の高いビル4階のカウンターで、東京の鮨 なかむらの赤酢の流儀を受け継ぐ。熟成や漬けの魚、藁焼きのかつお、バッテラ、若い大将、英語で説明してくれたという声も (2026年10月)。昼12,000円、夜21,000円、サービス料10%。味が濃い、間が長いという声も。日曜休み。',
  });
}

// ================================================================ 祇園ししし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038578/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_shishishi', name: '祇園ししし (Gion Shishishi)', category: 'OMNI',
    lat: 35.00434, lng: 135.774601, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, soba and soy-based dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Japanese cooking with dashi (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00; closed Sunday. An April 2026 reviewer says soba is served until about 3 am on Fridays and Saturdays. Reservations taken. Appetizer ¥2,000 — Tabelog, Japanese original 「お通し：2000円」. 14 seats: an L-shaped counter of about 8–10 and a raised sunken-kotatsu room for four. Non-smoking; English menu; wheelchair access; free Wi-Fi. Cards and e-money; no QR. Ground floor of 備前屋ビル, Tominaga-cho. Opened 1 October 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominaga-cho, Gion — 3 min walk from Gion-Shijo',
    cuisine: 'A young Kikunoi-trained chef\'s Gion counter for omakase or à la carte Japanese food, open late (2024–2026 reviews) · omakase of about six dishes for around ¥10,000; à la carte too (August 2024; April 2026) · sea bream in a spicy oil "hell"; grilled gurnard, a speciality; mackerel sushi; ayu clay-pot rice (July 2024) · kombu-cured sashimi; red shrimp in Shaoxing wine; fuki-no-tou and broad-bean tempura (2025–2026) · shrimp taro with bottarga; bottarga soba; soft roe, crab, ginkgo (December 2025) · Kansai and Okayama sake, half servings; bottled beer only (2025–2026)',
    website: null, gmaps: gm('祇園ししし 富永町'), menu_url: null,
    notes: '[Japanese · Tominaga-cho, Gion, a Kikunoi-trained chef till late] A small L-counter in the heart of Gion where a young Kikunoi-trained chef cooks a roughly ¥10,000 six-dish omakase or à la carte — sea bream in chilli oil, grilled gurnard, bottarga soba — with Okayama sake in half pours, and late soba on weekends. ¥2,000 appetizer charge. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 1 October 2022 (Tabelog). Reviewers say the young chef trained at Kikunoi (July 2024), "sources high-quality ingredients from local markets" (August 2024), and will cook from ingredients on display on request (May 2025); he works with part-time staff, a team of students in September 2025. One December 2025 group regretted that only bottled beer was served.',
      philosophy: null,
      specialty: 'Omakase; grilled gurnard; bottarga soba.',
      anecdotes: [
        { text: 'August 2024: "Unlike many spots in Gion that close by 8 or 9 PM, this place stays open later."', source: R + 'B490651353/' },
        { text: 'May 2025: "when we expressed interest in some of the ingredients on display, he creatively prepared dishes for us."', source: R + 'B523593104/' },
      ],
      japanese_sources_summary: '食べログ: 祇園ししし、日本料理・魚介料理・創作料理、東山区富永町127 備前屋ビル 1F、京阪祇園四条駅から徒歩3分、月〜土 18:00〜23:00、日曜休み、予約可、原文で「お通し：2000円」、14席 (カウンター10、4名の個室)、禁煙、英語メニュー、車椅子可、カード・電子マネー可、QR不可、2022年10月1日オープン、法人会員。口コミ (2024年7月〜2026年4月、英語): 菊乃井で修業した若い料理人、L字のカウンターと小上がり、おまかせ6品ほどで約1万円、アラカルトも、鯛の辛いオイル、名物のほうぼうの焼き物、さば寿司、鮎の土鍋ご飯、昆布締めの刺身、赤えびの紹興酒漬け、ふきのとうとそら豆の天ぷら、海老芋のからすみ、からすみそば、白子、かに、銀杏、関西や岡山の日本酒、半量も、金・土は深夜3時ごろまでそば (2026年4月)、生ビールはなく瓶のみ (2025年12月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B461414875', 'B489020166', 'B490651353', 'B492393698', 'B503517883', 'B514373248', 'B519023462', 'B519900781', 'B521255762', 'B522580335', 'B523593104', 'B526466699'])) },
    cultural_comfort: { level: 'english', note: 'English menu; ¥2,000 appetizer charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町127 備前屋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.004340, 135.774601); cross-checked: GSI 京都府京都市東山区富永町127番地 (lot) 15m; nearest pin kyoto_gion_tempura_bansan 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526466699/'],
    price_note: 'Omakase about ¥10,000 (April 2026); ¥2,000 appetizer charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase (about six dishes)', '≈¥10,000', 'Course', 'no', 'no', 'April 2026.', 'omakase'),
      it('', '', 'Bottarga soba', null, 'Noodles', 'no', 'no', 'December 2025.', 'karasumi_soba'),
      it('', '', 'Grilled gurnard', null, 'Grilled', 'ask', 'no', 'July 2024.', 'grilled_gurnard'),
    ] }, {
    cuisine: '菊乃井で修業した若い料理人の祇園のカウンター、おまかせかアラカルトで夜遅くまで (2024〜2026年の口コミ)・おまかせ6品ほどで約1万円、アラカルトも (2024年8月、2026年4月)・鯛の辛いオイル、名物のほうぼうの焼き物、さば寿司、鮎の土鍋ご飯 (2024年7月)・昆布締めの刺身、赤えびの紹興酒漬け、ふきのとうとそら豆の天ぷら (2025〜2026年)・海老芋のからすみ、からすみそば、白子、かに、銀杏 (2025年12月)・関西や岡山の日本酒、半量でも、ビールは瓶のみ (2025〜2026年)',
    neighborhood: '祇園の富永町。祇園四条から徒歩3分',
    gf_detail: 'グルテンフリーではない: 天ぷら、そば、醤油を使う料理 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚とだしの日本料理 (2024〜2026年の口コミ)。',
    notes: '[日本料理・祇園富永町、菊乃井出身の料理人と夜遅くまで] 祇園の中心の小さなL字カウンター。菊乃井で修業した若い料理人が、約1万円のおまかせ6品かアラカルトで、鯛の辛いオイル、ほうぼうの焼き物、からすみそばなどを。岡山の日本酒を半量で、週末は深夜までそばも。お通し2,000円。日曜休み。',
  });
}

// ================================================================ 花咲 錦店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012688/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-hanasaki.com/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_hanasaki_nishiki', name: '花咲 錦店 (Hanasaki Nishiki)', category: 'OMNI',
    lat: 35.004458, lng: 135.763215, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, sushi with soy, ankake and saikyo-miso dishes in the courses (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led kaiseki with dashi; Kyoto beef, hamo and crab courses (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–15:00 (food last order 13:30) and 17:30–22:00 (food last order 20:00); closing days not fixed. Reservations taken; private rooms from ¥6,000 at lunch and ¥10,000 at dinner — book early. Service charge 10% — Tabelog, Japanese original 「サービス料10％」. 40 seats with tatami and sunken seating; private rooms for 2–30. Designated smoking area. Cards and PayPay; no e-money. Down a narrow passage in a renovated kimono shop on Sakaimachi above Shijo, a minute from Nishiki Market. One of four 花咲 shops in Kyoto, including a 祇園本店 and a Miyakawa-cho shop (web listings; November 2025 and November 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi above Shijo, by Nishiki Market — 5 min walk from Karasuma / Shijo',
    cuisine: 'A Kyoto kaiseki house in a renovated kimono shop by Nishiki Market (official site; 2025–2026 reviews) · weekday bento in three tiers with sashimi and tempura ¥2,200 (October 2025) · Kashiwagi course of appetizers, sashimi, clear soup, grilled, simmered, tempura, sushi and dessert ¥3,850 (February 2026); Aoi course ¥7,620 with a drink (December 2025); Ukifune course ¥11,000 (November 2026) · hamo kaiseki and hamo shabu-shabu course ¥15,000, with charcoal-grilled hamo and Inaniwa udon (June 2026) · other courses: suppon, sukiyaki, shabu-shabu, yudofu; tetchiri and crab shabu in winter (June 2026) · Kyoto-pickle sushi to finish (December 2025; April 2026) · sake from ¥1,100 for 180 ml (November 2026)',
    website: SITE, gmaps: gm('花咲 錦店 堺町四条上る'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Sakaimachi by Nishiki Market, private rooms at fair prices] A quiet kaiseki house in an old kimono shop down a passage off Nishiki, with private tatami rooms and a ladder of courses from a ¥2,200 weekday bento to hamo and winter fugu feasts. 10% service. One April 2026 diner found the staff unsmiling and the food dull; most praise the value.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Part of the 花咲 group, which has four shops in Kyoto including the Gion main shop (web listings); reviewers in 2025–2026 also mention a Miyakawa-cho branch. Reviewers praise the value, the private rooms and the hamo courses; criticism: unfriendly staff and "quite dull" flavours, including a shrimp tempura wrapped in mochi-like batter and a pickle sushi that "wasn\'t tasty at all" (April 2026), a slow middle of the lunch course (December 2025), and pricier drinks (November 2025; November 2026).',
      philosophy: null,
      specialty: 'Kyoto kaiseki courses; hamo in summer.',
      anecdotes: [
        { text: 'February 2026: "We booked the recommended Kashiwagi Course… all for JPY 3,850, which is a great deal considering the location! The restaurant is a renovated kimono shop."', source: R + 'B523278935/' },
        { text: 'June 2026: "the staff grilled it over charcoal and served it with a squeeze of sudachi and either salt or plum ponzu."', source: R + 'B531618709/' },
      ],
      japanese_sources_summary: '食べログ: 花咲 錦店、日本料理・豆腐料理、中京区堺町通四条上る八百屋町549、阪急烏丸駅・地下鉄四条駅から徒歩5分、毎日 11:30〜15:00 (L.O. 13:30)・17:30〜22:00 (L.O. 20:00)、不定休、予約可、個室の会席は昼6,000円・夜10,000円から、原文で「サービス料10％」、40席、座敷・掘りごたつ、個室 (2〜30名)、カード・PayPay可、法人会員。花咲は京都市内に4店舗 (祇園本店ほか)。口コミ (2025年4月〜2026年11月、英語): 呉服屋を改装、錦市場から1分、平日の三段の弁当2,200円、柏木コース3,850円、葵コース7,620円 (ドリンク込み)、浮舟コース11,000円、鱧会席と鱧しゃぶコース15,000円、炭火の焼き鱧、稲庭うどん、すっぽん・すき焼き・しゃぶしゃぶ・湯豆腐のコース、冬はてっちりとかにしゃぶ、締めの京漬物の寿司、日本酒は180ml 1,100円から、宮川町の店も、無愛想で味がぼんやりとの声 (2026年4月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B506034205', 'B507032027', 'B514963892', 'B517831210', 'B519916128', 'B523278935', 'B526328584', 'B527199336', 'B531056601', 'B531618709', 'B531980470', 'B538613788'])) },
    cultural_comfort: { level: 'japanese', note: 'Private tatami rooms; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通四条上る八百屋町549',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004458, 135.763215); cross-checked: GSI 京都府京都市中京区八百屋町549番地 (lot) 14m; nearest pin vm_yume_ya 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514963892/', R + 'B523278935/', R + 'B538613788/', R + 'B531618709/'],
    price_note: 'Prices from 2025–2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Weekday bento', '¥2,200', 'Lunch', 'no', 'no', 'October 2025.', 'bento'),
      it('', '', 'Kashiwagi course', '¥3,850', 'Course', 'no', 'no', 'February 2026.', 'course_kashiwagi'),
      it('', '', 'Ukifune course', '¥11,000', 'Course', 'no', 'no', 'November 2026.', 'course_ukifune'),
      it('', '', 'Hamo shabu-shabu course', '¥15,000', 'Course', 'no', 'no', 'June 2026.', 'hamo_shabu'),
    ] }, {
    cuisine: '錦市場そばの呉服屋を改装した京料理の店 (公式サイト、2025〜2026年の口コミ)・刺身と天ぷらの入った平日の三段の弁当2,200円 (2025年10月)・先付、刺身、お吸い物、焼き物、炊き合わせ、天ぷら、寿司、デザートの柏木コース3,850円 (2026年2月)、ドリンク込みで葵コース7,620円 (2025年12月)、浮舟コース11,000円 (2026年11月)・炭火の焼き鱧と稲庭うどんの鱧会席・鱧しゃぶコース15,000円 (2026年6月)・ほかにすっぽん、すき焼き、しゃぶしゃぶ、湯豆腐、冬はてっちりとかにしゃぶ (2026年6月)・締めに京漬物の寿司 (2025年12月、2026年4月)・日本酒は180mlで1,100円から (2026年11月)',
    neighborhood: '堺町四条上ル、錦市場のそば。烏丸・四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: コースに天ぷら、醤油の寿司、あんかけ、西京焼き (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚とだしの会席、京都牛、鱧やかにのコース (2025〜2026年の口コミ)。',
    notes: '[京料理・錦市場そばの堺町、手頃な個室の会席] 錦から入った路地の奥、元呉服屋の静かな会席の店。座敷の個室があり、平日2,200円の弁当から鱧や冬のふぐのコースまで。サービス料10%。店員が無愛想で味がぼんやりという声も (2026年4月) あるが、多くは値段の割によいという。',
  });
}

// ================================================================ 山庄
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027016/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_yamasho_nishiki_market', name: '山庄 (Yama Sho)', category: 'OMNI',
    lat: 35.005093, lng: 135.763432, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-glazed grilled squid and octopus skewers; fried octopus (2020–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood skewer stall (reviews).',
    hours_raw: 'Tabelog: Mon–Sat 10:00–17:30; closed Sunday; hours may change. Cash only per Tabelog (no cards, e-money or QR). A take-away seafood stall in Nishiki Market just east of Sakaimachi, by Hankyu Karasuma exit 16 (March 2025); no seating — eating while walking is banned in the market, so eat at the stall (2020; March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, just east of Sakaimachi — by Hankyu Karasuma exit 16',
    cuisine: 'A Nishiki Market stall for seafood skewers torched to order (2020–2026 reviews) · tako-tamago, baby octopus with a quail egg in the head ¥450 (March 2025) · grilled squid ¥350 (March 2025); yari-ika with roe ¥250 for a large (January 2020); spicy baby squid with roe ¥150 (April and September 2022) · deep-fried octopus; scallops (March 2026) · a small beer (September 2023)',
    website: null, gmaps: gm('山庄 錦市場'), menu_url: null,
    notes: '[Seafood skewers · Nishiki Market at Sakaimachi, tako-tamago torched to order] A stand-and-eat stall in Nishiki Market near Sakaimachi where the owners torch octopus, squid and scallop skewers as you order — the quail-egg tako-tamago is the one to try, about ¥450. Cash only. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed)'], origin: null,
      background: 'Reviewers since 2020 describe a skewer stall that torches each order, with a reviewer in November 2024 finding it the cheapest of several tako-tamago sellers and one in March 2026 meeting "the two owners", who chatted while busy. Reviewers note the market\'s ban on eating while walking; the stall provides a bin (March 2025).',
      philosophy: null,
      specialty: 'Tako-tamago; grilled squid.',
      anecdotes: [
        { text: 'March 2025: "While there are many places selling Tako Tamago, I recommend this one because they serve it grilled!"', source: R + 'B503064771/' },
        { text: 'March 2026: "Despite being busy, the two owners took the time to chat with me."', source: R + 'B524784581/' },
      ],
      japanese_sources_summary: '食べログ: 山庄、その他、中京区錦小路通堺町東入ル菊屋町534、烏丸から328m、月〜土 10:00〜17:30、日曜休み、時間は変わることがある、予約不可、カード・電子マネー・QR不可。口コミ (2020年1月〜2026年3月、英語): 錦市場の串の店、注文ごとにバーナーで炙る、うずら卵入りのたこたまご450円、焼きいか350円、子持ちのやりいか (大) 250円、子持ちの辛いいか150円、たこの唐揚げ、ほたて、小さいビール、店先で食べる (食べ歩き禁止)、阪急烏丸駅16番出口すぐ、ふたりの店主 (2026年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B423543281', 'B432226650', 'B442883155', 'B448665081', 'B454292941', 'B471600740', 'B496127240', 'B503064771', 'B524784581'])) },
    cultural_comfort: { level: 'japanese', note: 'Take-away stall; cash only; eat at the stall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通堺町東入ル菊屋町534',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a review dated March 2026.' },
    pin_source: `Tabelog ${TB} (35.005055, 135.763385), offset 6m north-east because kyoto_fuka_nishiki (菊屋町534-1) sits 2.9m from the Tabelog point — now 7.3m from it; cross-checked: GSI 京都府京都市中京区菊屋町534番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503064771/', R + 'B448665081/'],
    price_note: 'Prices from 2020–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tako-tamago (baby octopus with quail egg)', '¥450', 'Skewers', 'no', 'no', 'March 2025.', 'tako_tamago'),
      it('', '', 'Grilled squid', '¥350', 'Skewers', 'no', 'no', 'March 2025.', 'grilled_squid'),
      it('', '', 'Spicy baby squid with roe', '¥150', 'Skewers', 'no', 'no', 'April 2022.', 'baby_squid'),
    ] }, {
    cuisine: '注文ごとにバーナーで炙る錦市場の海鮮串の店 (2020〜2026年の口コミ)・うずら卵を頭に入れた小だこのたこたまご450円 (2025年3月)・焼きいか350円 (2025年3月)、子持ちのやりいか (大) 250円 (2020年1月)、子持ちの辛い小いか150円 (2022年4月・9月)・たこの唐揚げ、ほたて (2026年3月)・小さいビール (2023年9月)',
    neighborhood: '錦市場、堺町の東。阪急烏丸駅16番出口すぐ',
    gf_detail: 'グルテンフリーではない: 醤油だれの焼きいかやたこの串、たこの唐揚げ (2020〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海鮮の串の店 (口コミ)。',
    notes: '[海鮮の串・錦市場の堺町近く、注文ごとに炙るたこたまご] 錦市場の堺町近くの立ち食いの店で、店主がたこ、いか、ほたての串を注文ごとにバーナーで炙る。うずら卵入りのたこたまご (約450円) がおすすめ。現金のみ。日曜休み。',
  });
}

save();
