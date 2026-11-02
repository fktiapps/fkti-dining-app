// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 9.
//   + ちろり Chirori (ten-seat one-man sake and fish counter since 2003, once a Michelin Bib Gourmand per 2017 diners; open to 1 a.m.)
//   + らーめん あっ。 Ramen A. (owner Sato's late-night ramen pub at Higashi-Mikuni with Yamagata cold meat soba; no ramen block, see below)
//   + 燻バール でく Ibushi Bar Deku (smoked-food bar by Minamikata station; until 5 a.m. on Fridays)
//   + 中華料理 福香源 Chinese Fukukogen (70-seat Chinese canteen, ¥700–850 lunch sets and a 58-dish buffet; opened March 2024)
//   - skipped 大阪らーめん研究所 27054091: chain; the listing's website is that of アストジャパン (fukuchan.co.jp), the 50-year-old company
//     behind 大阪ふくちぁん, 福福らーめん, 麺屋ふくちぁん, ラーメン男塾！！ and other brands (site read 2026-11-02).
//   Chain check of the four added: Chirori, Ramen A. and Deku: one shop each (Tabelog; reviews). Fukukogen: no sister shop named; BUT its
//   58-dish buffet ("Popular Authentic Chinese Cuisine with 58 Dishes ◆ Sweet and Sour Pork, Soup Dumplings, Shrimp in Chili Sauce, Twice-Cooked
//   Pork, etc.", August 2025 review) is worded like the buffet of osaka_chinese_komandou_nishinakajima (that record's cuisine: "two-hour
//   all-you-can-order buffets of 50 dishes (sweet and sour pork, soup dumplings, shrimp chili, twice-cooked pork …)"; its Tabelog text says
//   "58 Types of Order Buffet"). A shared operator is possible but unproven; flagged for the integrator.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Ramen A. shares 東三国4-19-40 with the skipped 大阪らーめん研究所.
//   Deku (西中島3-13-5) and Fukukogen (3-13-1) are 21 m apart, different buildings.
//   No ramen block for Ramen A.: its reviews describe the shio broth as clear and gentle (2019) and the meat soba, but nothing recent on oiliness
//   or noodle firmness for the ramen; left off rather than guessed.
//   open_late per the 2026-11-02 brief: Chirori (to 01:00), Ramen A. (to 02:00) and Deku (to 24:00, Fri 05:00) true; Fukukogen (to 23:00) false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27054091', 'chain: 大阪らーめん研究所 links アストジャパン (fukuchan.co.jp), the company behind 大阪ふくちぁん, 福福らーめん, 麺屋ふくちぁん and ラーメン男塾！！');

// ================================================================ ちろり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27000771/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_chirori_nishinakajima', name: 'ちろり (Chirori)', category: 'OMNI',
    lat: 34.726809, lng: 135.495425, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi with soy sauce, tempura (lotus root, conger eel, smelt), fried tofu and simmered dishes; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya; vegetable dishes such as grilled manganji peppers come soaked in dashi (2017).',
    hours_raw: 'Tue–Sun 17:00–01:00; closed Monday; hours may change (Tabelog). Rare in Nishinakajima for opening on Sundays (September 2025); it may close earlier than listed, so arrive early (January 2025). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). About 10 counter seats; smoking allowed (Tabelog). Dishes can take time when busy, as one person does everything (January 2025). Opened 8 August 2003 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-11-24, ground floor of 第１ユーリハイツ, in a residential street across from a hotel, 3–6 min from Nishinakajima-Minamigata Stn (Tabelog; 2016–2017 reviews)',
    cuisine: 'Izakaya and dining bar of fish, seasonal dishes and carefully chosen sake, shochu and wine (Tabelog; reviews) · 2025: assorted sashimi, grilled sardines, sanma simmered with plum, shirasu rice with raw egg (July and September 2025) · from 2016–2017 menus: lotus-root tempura cut thick, conger-eel tempura, freshly fried thick tofu, marinated young horse mackerel, grilled manganji peppers in dashi, Kochi fruit tomato, Tosa shuto, mini shirasu bowl with egg, root-vegetable beef stew, ¥400–1,000 a dish · unfiltered sake from around Japan and shochu such as 尾久の碧玉 (2017)',
    website: null, gmaps: gm('ちろり 西中島 居酒屋'), menu_url: null,
    notes: "[Izakaya · Nishinakajima, a one-man sake and fish counter] A dim, ten-seat counter in a residential street west of Nishinakajima-Minamigata, open since 2003 and in the 2010s a Michelin Bib Gourmand, according to diners at the time (2017). One person cooks and pours everything (January 2025): seasonal fish as sashimi or grilled, thick-cut lotus-root tempura, and a deep list of sake, shochu and wine. Open until 1 a.m. and on Sundays, rare locally (September 2025). The owner divides opinion: friendly and careful to one diner (September 2025), brusque to another the same month, and one 2017 visitor noted the cook is a bartender by background. Expect waits when it is busy, and call ahead.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), runs the bar alone (January 2025 review)'], origin: null,
      background: 'Per the Tabelog listing: izakaya and dining bar, about 10 counter seats, opened 8 August 2003. Per reviews: "This is a bar run by a single person, serving delicious food and drinks" (January 2025); "The friendly owner carefully prepares each dish to pair perfectly with the drinks" (September 2025); "the owner, who has a unique personality, runs the place [alone]" and one diner was upset by the service (September 2025); "the chef must have trained in traditional Japanese cuisine, but it turns out [the cook] is exclusively a bartender" (October 2016); "Chirori, the former Michelin Bib Gourmand" (February 2017); "Since the chef handles everything alone, the counter gets busy quickly" (April 2017).',
      philosophy: null, specialty: 'Seasonal fish; lotus-root tempura; sake and shochu.',
      anecdotes: [
        { text: '"Since it\'s just one person managing everything, the food may take a bit longer to come out when it gets busy. Some menu items may be sold out, but that adds to the charm." — January 2025.', source: R + 'B501030211/' },
        { text: '"I visited this place, which is rare for being open on Sundays in Nishinakajima." — September 2025, assorted sashimi and sanma simmered with plum.', source: R + 'B514074899/' },
        { text: '"The lotus root was huge! It was perfectly fluffy, showcasing the skill of the chef." — April 2017.', source: R + 'B261336224/' },
      ],
      japanese_sources_summary: '食べログ: ちろり、居酒屋・ダイニングバー、大阪市淀川区西中島4-11-24 第１ユーリハイツ 1F、西中島南方駅から徒歩3分、火〜日17:00〜翌1:00、月曜休み、予約可、カード可、カウンター約10席、喫煙可、日本酒・焼酎・ワインにこだわり、魚にこだわり、2003年8月8日オープン。口コミ(2016年〜2025年): ホテルの向かいの住宅街、暗めのカウンター、ひとりで営業、売り切れも、刺身の盛り合わせ、イワシの塩焼き、サンマの梅煮、しらすごはんに生卵 (2025年)、2017年の写真の説明: 尾久の碧玉、ゆがきたて空豆、お刺身盛り合わせ、高知県産フルーツトマト、土佐の酒盗、レンコンのてんぷら、万願寺とうがらしの焼きびたし、ミニシラス丼卵のせ。かつてのミシュランのビブグルマン (2017年の口コミ)、店主の人柄は好き嫌いが分かれる。',
      confidence: 'low', sources: [TB, R + 'B224997950/', R + 'B261336224/', R + 'B292458396/', R + 'B302880114/', R + 'B325460653/', R + 'B501030211/', R + 'B514074899/', R + 'B520865096/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small counter run by one person; call ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-11-24 第１ユーリハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; most recent reviews September 2025 (none yet in 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目11番24号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B261336224/', R + 'B224997950/', R + 'B325460653/'],
    price_note: 'Dish prices from 2016–2017 reviews (old); 2025 reviews give no prices.', last_checked: TODAY, items: [
      it('レンコンのてんぷら', '', 'Lotus-root tempura, cut thick', '¥700', 'Dishes', 'no', 'ask', 'April 2017 price.', 'renkon_tempura'),
      it('お刺身盛り合わせ', '', 'Assorted sashimi', '', 'Fish', 'ask', 'no', 'April 2017; September 2025.', 'sashimi_moriawase'),
      it('ミニシラス丼卵のせ', '', 'Mini shirasu rice bowl with egg', '¥650', 'Rice', 'ask', 'no', 'April 2017 price; July 2025.', 'shirasu_don'),
      it('万願寺とうがらしの焼きびたし', '', 'Grilled manganji peppers soaked in dashi', '¥600', 'Dishes', 'ask', 'no', 'April 2017 price.', 'manganji'),
    ] }, {
    cuisine: '魚と季節の料理、厳選した日本酒、焼酎、ワインの居酒屋とダイニングバー (食べログ、口コミ)・2025年: 刺身の盛り合わせ、イワシの塩焼き、サンマの梅煮、しらすごはんに生卵 (2025年7月、9月)・2016〜2017年のメニューから: 厚切りのレンコンのてんぷら、穴子の天ぷら、揚げたての厚揚げ、小アジの南蛮漬け、万願寺とうがらしの焼きびたし、高知県産フルーツトマト、土佐の酒盗、ミニシラス丼卵のせ、根菜と牛肉の煮込み、1品400〜1,000円・全国のにごり酒や、尾久の碧玉などの焼酎 (2017年)',
    neighborhood: '西中島4-11-24、第１ユーリハイツの1階。ホテルの向かいの住宅街で、西中島南方駅から3〜6分 (食べログ、2016〜2017年の口コミ)',
    gf_detail: '要確認。グルテンの情報なし。醤油で食べる刺身、天ぷら (レンコン、穴子、ワカサギ)、厚揚げ、煮物。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚が中心の居酒屋で、万願寺とうがらしの焼きびたしなど野菜もだしにひたす (2017年)。',
    notes: '[居酒屋・西中島、店主ひとりの日本酒と魚のカウンター] 西中島南方の西、住宅街にある暗めの10席のカウンターで、2003年から。2017年の口コミではかつてミシュランのビブグルマンだったという。料理もお酒もひとりで (2025年1月): 季節の魚の刺身や焼き魚、厚切りのレンコンのてんぷら、そして日本酒、焼酎、ワインがたくさん。深夜1時まで、日曜も開いていて、このあたりではめずらしい (2025年9月)。店主の評価は分かれ、ていねいで気さくだという人 (2025年9月) も、同じ月に接客がきつかったという人も。2017年の客によると、料理をするのはもとはバーテンダー。混むと料理に時間がかかるので、電話してから行くのがおすすめ。',
  });
}

// ================================================================ らーめん あっ。
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27078509/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '02:00']); const S = day(['16:00', '02:00']);
  put({
    id: 'osaka_ramen_a_higashimikuni', name: 'らーめん あっ。 (Ramen A.)', category: 'MOM_AND_POP',
    lat: 34.740248, lng: 135.495127, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles and buckwheat-and-wheat soba; kara-age, squid tempura and gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broths and bonito soba broth, chicken chashu.',
    hours_raw: 'Mon–Fri 11:30–02:00; Sat and holidays 16:00–02:00; closed Sunday (Tabelog). Lunch is served by one person, so expect about 20 minutes when it is full (January 2026). Reservations accepted; parties and surprise birthday set-ups (Tabelog). No credit cards (Tabelog). 22 seats, tables and sofas; smoking allowed throughout, lunch included (Tabelog; June 2024, August 2026). Opened 14 April 2014 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-19-40, a few minutes from exit 5 of Higashi-Mikuni Stn: west at the udon shop, north at the FamilyMart and first light (Tabelog)',
    cuisine: 'Ramen pub of shio ramen and Yamagata-style meat soba (Tabelog; reviews) · shio ramen, a clear, gentle broth with cabbage (June 2019); chicken shio ramen (March 2024, February 2026); also shoyu, tonkotsu, miso and dandan noodles, and odd ones like miso curry milk ramen (2017–2019) · Yamagata cold meat soba of thick dark soba, free-range chicken and a sweetish bonito broth, created by the owner over two years of trials (February 2022); cold or hot (2025–2026) · lunch sets: A, chicken soba with squid tempura, rice, kimchi and kara-age (January 2026); squid-leg tempura rice with two salt-kara-age and a side ¥1,290 (February 2026); cold chicken chuka soba with salt kara-age, kimchi, rice and cold tofu ¥1,000 (August 2026) · salt kara-age, gyoza, grilled xiao long bao (Tabelog; 2025–2026)',
    website: null, gmaps: gm('らーめん あっ。 東三国'), menu_url: null,
    notes: "[Ramen · Higashi-Mikuni, a late-night ramen pub with Yamagata meat soba] A 22-seat ramen pub a few minutes from Higashi-Mikuni Station, open since 2014 until 2 a.m., where owner Sato cooks alone. The house bowl was a clear, gentle shio ramen; now the regulars come for the Yamagata-style cold meat soba Sato spent two years developing (2022): thick dark soba, chewy free-range chicken and a sweetish bonito broth, cold or hot. Lunch sets pile on squid tempura, salt kara-age, kimchi and rice for about ¥1,000–1,300 (2026), so allow 20 minutes when it is full. Late at night it is a place to drink, with salt kara-age and grilled xiao long bao. Smoking is allowed throughout; no credit cards; closed Sundays.",
    chef_bio: { chef_name: 'Sato (surname as given in a February 2022 review)', roles: ['Owner-chef, runs the shop alone (January 2026 review)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a ramen shop for gatherings and surprises as well as solo diners, with shio ramen, original dandan noodles, fried chicken, gyoza and grilled xiao long bao; opened 14 April 2014. Per reviews: "the highly anticipated Yamagata Soba created by the owner, Mr. Sato. [The owner] shared that it took about two years of trial and error to develop the recipe and find the right parent chicken. The soba is freshly made every morning and cooked to order" (February 2022); "Since it\'s a one-person operation, it took some time" (January 2026); "The owner is a great person!" (April 2025); "The dynamic owner presents a delicate arrangement" (October 2025).',
      philosophy: null, specialty: 'Yamagata cold meat soba; shio ramen; salt kara-age.',
      anecdotes: [
        { text: '"[The owner] shared that it took about two years of trial and error to develop the recipe and find the right parent chicken." — February 2022, Yamagata soba cold ¥600, hot ¥800.', source: R + 'B446122885/' },
        { text: '"I ordered the cold meat soba from Yamagata, and it was just as delicious as the ones from authentic Yamagata restaurants." — November 2025.', source: R + 'B519597259/' },
        { text: '"The clear, colorless broth is, as the name suggests, incredibly gentle in flavor." — June 2019, shio ramen.', source: R + 'B416616847/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): らーめん あっ。、ラーメン・居酒屋・中華料理、大阪市淀川区東三国4-19-40、東三国駅5番出口から数分、月〜金11:30〜翌2:00、土・祝16:00〜翌2:00、日曜休み、予約可、カード不可、22席、喫煙可、2014年4月14日オープン、宴会やサプライズにも、塩ラーメンとオリジナルの担々麺、kara-age、gyoza、焼き小籠包。口コミ(2017年〜2026年8月): 澄んだやさしい塩ラーメン、鶏塩ラーメン、醤油、とんこつ、みそ、担々麺、みそカレーミルク、店主の Sato さんが2年かけて作った Yamagata の冷たい肉そば (太い黒いそば、親鶏、甘めのカツオだし)、ゲソ天、塩 kara-age、ランチ1,000〜1,290円、ひとりで営業、店内喫煙可、深夜まで。',
      confidence: 'medium', sources: [TB, R + 'B416616847/', R + 'B446122885/', R + 'B481932212/', R + 'B486245526/', R + 'B505149608/', R + 'B519597259/', R + 'B520415918/', R + 'B525637647/', R + 'B532676748/', R + 'B533123813/', R + 'B57285625/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person cooks and serves; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-19-40',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目19番40号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525637647/', R + 'B533123813/', R + 'B446122885/'],
    price_note: 'Prices from 2026 reviews; the soba prices are from February 2022.', last_checked: TODAY, items: [
      it('', '', 'Yamagata cold meat soba (cold or hot)', '', 'Soba', 'no', 'no', '2025–2026 (¥600 cold, ¥800 hot in 2022).', 'yamagata_niku_soba'),
      it('', '', 'Chicken shio ramen', '', 'Ramen', 'no', 'no', 'March 2024; February 2026.', 'tori_shio'),
      it('', '', 'Cold chicken chuka soba set with salt kara-age, kimchi, rice, tofu', '¥1,000', 'Lunch', 'no', 'no', 'August 2026.', 'hiyashi_set'),
      it('', '', 'Squid-leg tempura rice with two salt kara-age and a side', '¥1,290', 'Lunch', 'no', 'no', 'February 2026.', 'geso_lunch'),
    ] }, {
    cuisine: '塩ラーメンと Yamagata の肉そばのラーメン居酒屋 (食べログ、口コミ)・澄んだやさしい塩ラーメンにキャベツ (2019年6月)。鶏塩ラーメン (2024年3月、2026年2月)。醤油、とんこつ、みそ、担々麺、みそカレーミルクラーメンなど変わり種も (2017〜2019年)・店主が2年かけて作った Yamagata の冷たい肉そば: 太い黒いそば、地鶏、甘めのカツオのだし (2022年2月)。冷たいのも温かいのも (2025〜2026年)・ランチ: A は鶏そばにゲソ天、ごはん、キムチ、kara-age (2026年1月)。ゲソ天ごはんに塩 kara-age 2個と小鉢1,290円 (2026年2月)。冷たい鶏の中華そばに塩 kara-age、キムチ、ごはん、冷奴1,000円 (2026年8月)・塩 kara-age、gyoza、焼き小籠包 (食べログ、2025〜2026年)',
    neighborhood: '東三国4-19-40、東三国駅5番出口から数分: うどん屋の角を西へ、ファミリーマートと最初の信号を北へ (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦のラーメンの麺と、そば粉と小麦のそば。サイドに kara-age、ゲソ天、gyoza。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープとカツオのそばのだし、鶏のチャーシュー。',
    notes: '[ラーメン・東三国、深夜までのラーメン居酒屋と Yamagata の肉そば] 東三国駅から数分の22席のラーメン居酒屋で、2014年から深夜2時まで、店主の Sato さんがひとりで作っている。看板は澄んだやさしい塩ラーメンだったが、今の常連のお目当ては、Sato さんが2年かけて作った Yamagata の冷たい肉そば (2022年): 太い黒いそば、かみごたえのある地鶏、甘めのカツオのだしで、冷たいのも温かいのも。ランチはゲソ天、塩 kara-age、キムチ、ごはんがついて約1,000〜1,300円 (2026年)。満席なら20分ほど待つ覚悟で。夜は塩 kara-age や焼き小籠包で飲む店。店内は全席喫煙可、カード不可、日曜休み。',
  });
}

// ================================================================ 燻バール でく
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27071339/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '00:00']);
  put({
    id: 'osaka_ibushi_bar_deku_nishinakajima', name: '燻バール でく (Ibushi Bar Deku)', category: 'OMNI',
    lat: 34.726522, lng: 135.499964, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Smoked platters, salads and ajillo with baguette, karasumi peperoncino and cream pasta, fried salmon and spice kara-age; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: smoked duck, salmon, quail eggs, cheese and meat dominate; a smoked pickled plum and nuts are among the few plant items.',
    hours_raw: 'Mon–Thu and Sat 17:30–24:00 (food last order 23:00, drinks 23:30); Fri 17:30–05:00 (food last order 04:00, drinks 04:30); closed Sunday (Tabelog). Reservations accepted until 15:00 on the day; often fully booked (Tabelog; May 2026). A smoking venue, so no entry under 20 (Tabelog). Daily smoked otoshi ¥330 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 20 seats with counter seats; whole hire up to 20 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: day(['17:30', '05:00']), 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-13-5, 2nd floor of 富家ビル, east of Shin-Midosuji — 3 min from Nishinakajima-Minamigata or Hankyu Minamikata Stn (Tabelog; April 2025)',
    cuisine: 'Smoked food and drinks (Tabelog: izakaya, bar, creative) · smoked assorted platter: nuts, pickled plum, salmon, quail eggs, pickles, duck, chicken ham, cheese, shishamo, Unzen ham; M size ¥1,680 (2025–2026) · truffle-scented smoked potato salad ¥550, spice kara-age ¥750, smoked-oil ajillo ¥1,100 with baguette (December 2025) · smoked oysters in oil, smoked black-wagyu tataki, smoked raisin butter, smoked corned-beef yukke (2025) · karasumi peperoncino, the most popular pasta (February 2026) · courses with all-you-can-drink from ¥5,000: platter, salad, ajillo, a meat main, pasta, dessert (2025–2026) · Islay whiskies such as Bowmore and Laphroaig, American wines, smoked sours and a smoked-plum highball (2025–2026)',
    website: null, gmaps: gm('燻バール でく 西中島'), menu_url: null,
    notes: "[Smoked bar · Nishinakajima-Minamigata, everything smoked] A small second-floor bar by Minamikata and Nishinakajima-Minamigata stations where nearly everything is smoked in-house, from the welcome otoshi to the sour. Start with the assorted platter of smoked duck, salmon, quail eggs, cheese, nuts and a smoky pickled plum, then the smoked-oil ajillo with baguette and the karasumi peperoncino one regular always orders (2023–2026). Islay whiskies and wine suit the food. Courses with all-you-can-drink start at ¥5,000 and fill the room for office parties; book, ideally ahead, since same-day tables are hard to get (2025–2026). Smoking is allowed, so no one under 20 is admitted. Open until midnight, and until 5 a.m. on Fridays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); one in the kitchen and one on the floor on a February 2026 night'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a smoked-food bar, a smoking venue with no entry under 20, a daily smoked otoshi, same-day bookings until 15:00. Per reviews: "a smoked cuisine specialty bar" with "homemade smoked dishes" and "American wines and single malt whiskies" (April 2025); "There was one staff member in the kitchen and another on the floor, both of whom were friendly and attentive" (February 2026); "The staff is very friendly and provides detailed explanations of the dishes" (September 2025).',
      philosophy: null, specialty: 'Smoked assorted platter; smoked-oil ajillo; karasumi peperoncino.',
      anecdotes: [
        { text: '"Upon entering, I was immediately greeted by the strong aroma of smoked dishes. However, I quickly got used to it; after about 15 minutes, I hardly noticed it anymore." — March 2026, an all-you-can-drink course.', source: R + 'B524594573/' },
        { text: '"I had never tried pickled plum before, and it was an acquired taste that made for a nice palate cleanser." — November 2025, smoked platter with Islay whiskies.', source: R + 'B517874216/' },
        { text: '"The smoked plum highball was the best!" — August 2026.', source: R + 'B534164927/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 燻バール でく、居酒屋・バル・創作料理、大阪市淀川区西中島3-13-5 富家ビル 2F、西中島南方駅と Hankyu Minamikata 駅から徒歩3分、月〜木・土17:30〜24:00、金17:30〜翌5:00、日曜休み、当日の予約は15時まで、喫煙可能店のため20歳未満は入店不可、日替わりの燻製お付き出し330円 (税込)、カード・電子マネー・QR 可、20席、貸切20名まで。口コミ(2025年4月〜2026年8月): 燻製の盛り合わせ (ナッツ、梅干し、サーモン、うずら卵、ピクルス、鴨、鶏ハム、チーズ、ししゃも、Unzen のハム)、M サイズ1,680円、トリュフ香る燻製ポテサラ550円、スパイス kara-age 750円、燻製オイルのアヒージョ1,100円とバゲット、牡蠣のオイル漬け、黒毛和牛のたたき、レーズンバター、からすみのペペロンチーノ、5,000円からの飲み放題のコース、Islay のウイスキー、アメリカのワイン、燻製サワー、燻製梅のハイボール、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B471622296/', R + 'B504234070/', R + 'B506355287/', R + 'B514262519/', R + 'B517874216/', R + 'B518246130/', R + 'B519591136/', R + 'B524594573/', R + 'B530611958/', R + 'B534164927/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; over-20s only (smoking venue). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-13-5 富家ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目13番5号 (go) 5m; 21 m from Chinese Fukukogen (3-13-1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518246130/', TB],
    price_note: 'Prices from the Tabelog listing and a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Smoked assorted platter, M size', '¥1,680', 'Smoked', 'ask', 'no', 'December 2025.', 'kunsei_moriawase'),
      it('', '', 'Smoked-oil ajillo with baguette', '¥1,100', 'Dishes', 'no', 'no', 'December 2025.', 'ajillo'),
      it('', '', 'Truffle-scented smoked potato salad', '¥550', 'Dishes', 'ask', 'no', 'December 2025.', 'potato_salad'),
      it('', '', 'Karasumi peperoncino', '', 'Pasta', 'no', 'no', 'February 2026.', 'karasumi_pasta'),
      it('日替わりの燻製お付き出し', '', 'Daily smoked otoshi (cover)', '¥330', 'Cover', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '燻製の料理とお酒 (食べログ: 居酒屋、バル、創作料理)・燻製の盛り合わせ: ナッツ、梅干し、サーモン、うずら卵、ピクルス、鴨、鶏ハム、チーズ、ししゃも、Unzen のハム。M サイズ1,680円 (2025〜2026年)・トリュフ香る燻製ポテトサラダ550円、スパイス kara-age 750円、燻製オイルのアヒージョ1,100円にバゲット (2025年12月)・牡蠣のオイル漬け、黒毛和牛のたたき、レーズンバター、コンビーフのユッケ、すべて燻製 (2025年)・いちばん人気のからすみのペペロンチーノ (2026年2月)・5,000円からの飲み放題のコース: 盛り合わせ、サラダ、アヒージョ、肉のメイン、パスタ、デザート (2025〜2026年)・Bowmore や Laphroaig などの Islay のウイスキー、アメリカのワイン、燻製サワー、燻製梅のハイボール (2025〜2026年)',
    neighborhood: '西中島3-13-5、富家ビルの2階、Shin-Midosuji の東側。西中島南方駅と Hankyu Minamikata 駅から徒歩3分 (食べログ、2025年4月)',
    gf_detail: '要確認。グルテンの情報なし。燻製の盛り合わせ、サラダ、バゲットつきのアヒージョ、からすみのペペロンチーノとクリームパスタ、サーモンのフライ、スパイス kara-age。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。燻製の鴨、サーモン、うずら卵、チーズ、肉が中心で、植物性は燻製の梅干しやナッツくらい。',
    notes: '[燻製バル・西中島南方、すべてが燻製] Hankyu Minamikata 駅と西中島南方駅のそば、ビルの2階の小さなバルで、お通しからサワーまで、ほとんどすべてを店で燻製にしている。まずは燻製の鴨、サーモン、うずら卵、チーズ、ナッツ、スモーキーな梅干しの盛り合わせ、それから燻製オイルのアヒージョとバゲット、いつも頼むという常連もいるからすみのペペロンチーノ。料理には Islay のウイスキーやワインが合う。飲み放題のコースは5,000円からで、会社の宴会でいっぱいになるので予約を。当日はとりにくい (2025〜2026年)。喫煙可なので20歳未満は入れない。深夜0時まで、金曜は朝5時まで。',
  });
}

// ================================================================ 中華料理 福香源
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27140527/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_chinese_fukukogen_nishinakajima', name: '中華料理 福香源 (Chinese Fukukogen)', category: 'OMNI',
    lat: 34.726467, lng: 135.500187, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A Chinese menu of noodles, knife-cut noodles, gyoza, kara-age and sauced stir-fries; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese dishes built on pork, chicken, beef and seafood; no vegan dish is named.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30); closed Sunday (Tabelog). Lunch fills both floors by noon on weekdays; tables may be shared (2025–2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards and PayPay (Tabelog). 70 seats at tables over two floors; non-smoking (Tabelog; August 2025). Opened in March 2024 (May 2024 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-13-1, 2 min from Hankyu Minamikata or Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Chinese, mainly Sichuan (August 2025) · daily lunch sets ¥700–850 with large rice free: mapo tofu with kara-age or ebi mayo ¥750 (July and September 2026), eight-treasure stir-fry with salad, fried gyoza, soup and pickles ¥750 (April 2026), green pepper beef ¥800 (May 2025), sweet and sour pork or shrimp chili ¥850 (June 2026), hachibao sai ¥800 (June 2026), chive and pork ¥750 (May 2026) · shark-fin-sauce fried rice set with kara-age, gyoza, salad, soup, pickles and almond tofu ¥1,000 (April 2026) · noodle sets: mapo knife-cut noodles ¥800 (March 2026), Taiwanese ramen with half fried rice ¥750, cold noodles with mini fried rice, chicken shio ramen (2025–2026) · steamed chicken with scallion oil ¥650 (August 2026) · two-hour all-you-can-eat-and-drink of 58 dishes ¥3,630, starting with four dishes (August and October 2025)',
    website: null, gmaps: gm('中華料理 福香源 西中島'), menu_url: null,
    notes: "[Chinese · Nishinakajima-Minamigata, a ¥750 lunch canteen] A 70-seat, two-floor Chinese restaurant two minutes from Minamikata and Nishinakajima-Minamigata stations, opened in 2024 and full of office workers at lunch for daily sets at ¥700–850: mapo tofu with kara-age or ebi mayo, eight-treasure stir-fry, green pepper beef, each with soup, small sides and free large rice (2025–2026). Knife-cut noodles with mapo are a sleeper hit (March 2026). Evenings turn to banquets on a two-hour, 58-dish all-you-can-eat-and-drink plan (¥3,630, 2025) with Sichuan dishes and bottled beer. Flavours run from mild to numbing. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Chinese, izakaya and ramen, 70 seats, banquets. Per reviews: "This restaurant opened in March 2024" (May 2024); "Featuring 58 dishes mainly from Sichuan cuisine" on the all-you-can-eat plan (August 2025); "The staff moved efficiently and provided attentive service" (August 2025).',
      philosophy: null, specialty: '¥750 lunch sets; 58-dish all-you-can-eat banquet.',
      anecdotes: [
        { text: '"The main offerings are Chinese lunch sets priced around JPY 750 to 900, which is incredibly affordable these days." — September 2026, kara-age and mapo tofu set ¥750.', source: R + 'B506299672/' },
        { text: '"I was drawn to the knife-cut noodle menu posted on the wall. I ordered the Mapo Knife-Cut Noodles for JPY 800." — March 2026.', source: R + 'B524206361/' },
        { text: '"There was no music playing, and the customers were quite quiet, so there were several moments of silence during conversations, which was funny." — August 2026, steamed chicken with scallion oil ¥650.', source: R + 'B534970056/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中華料理 福香源、中華料理・居酒屋・ラーメン、大阪市淀川区西中島3-13-1、Hankyu Minamikata 駅と西中島南方駅から徒歩約2分、月〜土・祝11:00〜15:00 (L.O.14:30)、17:00〜23:00 (L.O.22:30)、日曜休み、予約可、カード・交通系 IC・PayPay 可、70席 (テーブル)、禁煙。口コミ(2024年5月〜2026年10月): 2024年3月オープン、日替わりランチ700〜850円、ごはん大盛り無料、麻婆豆腐と kara-age やエビマヨ、八宝菜、ピーマンと牛肉の炒め物、酢豚、エビチリ、ニラと豚、フカヒレあんかけチャーハンのセット1,000円、麻婆刀削麺800円、台湾ラーメンと半チャーハン、冷麺、鶏塩ラーメン、ネギ油の蒸し鶏650円、58品の2時間食べ飲み放題3,630円、四川料理が中心、昼は2階まで満席。',
      confidence: 'medium', sources: [TB, R + 'B485371420/', R + 'B506299672/', R + 'B512099604/', R + 'B513540067/', R + 'B524206361/', R + 'B527136964/', R + 'B529327170/', R + 'B531160647/', R + 'B534033446/', R + 'B534970056/', R + 'B537889490/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy lunch canteen; tables may be shared. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-13-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目13番1号 (go) 7m; 21 m from Ibushi Bar Deku (3-13-5); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B506299672/', R + 'B485371420/', R + 'B513540067/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (e.g. mapo tofu and kara-age)', '¥750', 'Lunch', 'ask', 'no', 'September 2026.', 'higawari_lunch'),
      it('', '', 'Shark-fin-sauce fried rice set', '¥1,000', 'Lunch', 'ask', 'no', 'April 2026.', 'fukahire_chahan'),
      it('', '', 'Mapo knife-cut noodles', '¥800', 'Noodles', 'no', 'no', 'March 2026.', 'mapo_daoxiaomian'),
      it('', '', 'Steamed chicken with scallion oil', '¥650', 'Dishes', 'ask', 'no', 'August 2026.', 'negi_mushidori'),
      it('', '', 'Two-hour all-you-can-eat-and-drink, 58 dishes', '¥3,630', 'Courses', 'ask', 'no', 'August and October 2025.', 'tabenomi'),
    ] }, {
    cuisine: '四川料理が中心の中華 (2025年8月)・日替わりランチ700〜850円、ごはん大盛り無料: 麻婆豆腐と kara-age かエビマヨ750円 (2026年7月、9月)、サラダ、焼き gyoza、スープ、漬物つきの八宝菜750円 (2026年4月)、ピーマンと牛肉の炒め物800円 (2025年5月)、酢豚かエビチリ850円 (2026年6月)、八宝菜800円 (2026年6月)、ニラと豚750円 (2026年5月)・kara-age、gyoza、サラダ、スープ、漬物、杏仁豆腐つきのフカヒレあんかけチャーハンのセット1,000円 (2026年4月)・麺のセット: 麻婆の刀削麺800円 (2026年3月)、台湾ラーメンと半チャーハン750円、冷麺とミニチャーハン、鶏塩ラーメン (2025〜2026年)・ネギ油の蒸し鶏650円 (2026年8月)・58品の2時間食べ飲み放題3,630円、最初に4品 (2025年8月、10月)',
    neighborhood: '西中島3-13-1、Hankyu Minamikata 駅と西中島南方駅から2分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。麺、刀削麺、gyoza、kara-age、たれをからめた炒め物などの中華で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、牛肉、海鮮の中華で、ヴィーガンの料理はない。',
    notes: '[中華・西中島南方、750円ランチの町の中華] Hankyu Minamikata 駅と西中島南方駅から2分、2階建て70席の中華料理店で、2024年に開いた。昼は会社員でいっぱいになり、700〜850円の日替わりのセット: 麻婆豆腐と kara-age かエビマヨ、八宝菜、ピーマンと牛肉の炒め物などに、スープ、小鉢、ごはん大盛り無料 (2025〜2026年)。麻婆の刀削麺は隠れた人気 (2026年3月)。夜は58品の2時間食べ飲み放題 (3,630円、2025年) で四川料理と瓶ビールの宴会に。味はやさしいものからしびれるものまで。日曜休み。',
  });
}

save();
