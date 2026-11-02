// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 15.
//   + 麺処 ほりばた Men Dokoro Horibata (beef-bone shio and charred-niboshi shoyu ramen by Hankyu Mikuni, a one-man shop since March 2024; ramen block)
//   + 手作り餃子 橋郷館 Tezukuri Gyoza Hashizato Kan (handmade Chinese gyoza, boiled, steamed or fried, run by a couple, between Juso and Minamikata)
//   + 朝挽豚専門店 ぶった 三国駅前店 Asabiki Buta Senmon Ten Butta (morning-butchered pork skewers behind a plastic curtain by Hankyu Mikuni)
//   + 味園 Misono (one-man neighbourhood Chinese by Hankyu Mikuni, ankake katsudon and ¥950 set meals)
//   - skipped 焼鳥と焼野菜 ぎんすけ 27077943: chain; Gurunavi lists 緑地公園店, JR尼崎店 and 中津店 besides Mikuni (web search 2026-11-02), and a March 2026
//     review says "Don't underestimate it just because it's a chain!"
//   - skipped カリトロ三国 27004767: chain; a February 2024 review: "With multiple locations in Toyonaka and Yodogawa ... expanded to Umeda", and the
//     sweep list holds 鉄板焼 カリトロ 十三本店 (十三本町1-20-5).
//   Chain check of the four added:
//   - Butta: a two-shop group; the sweep list also holds 朝挽豚専門店 ぶった 西中島店 (27049205, 西中島3-16-16, odd id, this lane). Kept as a small group
//     not yet in data; 27049205 should be skipped as a branch when the lane reaches it. Flagged.
//   - Horibata: the shop blog says 魚菜処 ほりばた ran three izakaya (此花, 豊中, 三国) for about 25 years before this one became a ramen shop in
//     March 2024; only the ramen shop is listed now. Hashizato Kan and Misono: one shop each (Tabelog; reviews).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); no record within 60 m of any of the four.
//   Ramen block for Horibata on the signature beef-bone shio. Butta is a pork-skewer izakaya with miso ramen as a finisher: cuisine_type izakaya, no block.
//   open_late per the brief: Butta to 24:00 set true; Horibata 22:00, Hashizato Kan 22:00 and Misono 21:00 set false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27077943', 'chain: 焼鳥と焼野菜 ぎんすけ, also 緑地公園店, JR尼崎店 and 中津店 (Gurunavi, web search 2026-11-02)');
skip('27004767', 'chain: カリトロ, several shops in Toyonaka, Yodogawa and Umeda (February 2024 review); 鉄板焼 カリトロ 十三本店 in the sweep list');

// ================================================================ 麺処 ほりばた
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27092395/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://nonbei-horibata.heart-g.net/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_men_dokoro_horibata_mikuni', name: '麺処 ほりばた (Men Dokoro Horibata)', category: 'OMNI',
    lat: 34.738241, lng: 135.48428, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles from Saitama; shoyu and shio-koji seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone or niboshi broth; beef and pork chashu.',
    hours_raw: 'Mon–Sat and holidays 11:30–14:00 and 17:30–22:00; closed Sunday (Tabelog). The shop blog posts extra closures and holidays. No reservations; no cards, e-money or QR (Tabelog); tickets from a cash machine (2024–2025). 8 counter seats (Tabelog); a 2025 diner also saw two tables. Non-smoking; wheelchair accessible; children welcome (Tabelog). Reopened as a ramen shop on 7 March 2024 (reviews; shop blog); the Tabelog opening date, 26 May 2016, is from the izakaya before it.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '三国本町3-27-8 岩崎ビル 1F, 2 min from Hankyu Mikuni, a little inside the shopping street (Tabelog; 2025)',
    cuisine: 'Two ramen (shop blog; reviews) · beef-bone shio ramen: a clear golden broth of beef bones with beef fat, seasoned with homemade shio-koji, topped with rare beef-round chashu, menma, green onion and chili threads; ¥850 (2024), ¥890 (2025), large ¥990 (April 2026) · charred-niboshi shoyu ramen: a dark broth finished with hot oil poured from a pan, topped with pork chashu, menma, red onion and yuzu peel; ¥850 (2024), ¥890 (2025) · noodles from Saitama, thin or thick (medium-thick, wavy) to choose (2024–2026) · seasonal: chilled ramen in summer; rich chicken-paitan shoyu ramen from 5 October 2026, ¥950, ¥1,050 with seasoned egg, ¥1,250 special (shop blog) · toppings: seasoned egg ¥120, rare beef chashu +¥250, pork belly chashu +¥200, menma +¥150 (2024–2025) · rice of organic Akita Komachi from Akita farmers (shop blog; March 2025); chashu rice bowl ¥350 (June 2024) · on the counter: pepper, yuzu kosho, and homemade garlic-chive chili (2024–2025)',
    website: BLOG, gmaps: gm('麺処 ほりばた 三国本町'), menu_url: null,
    notes: '[Ramen · Hankyu Mikuni, one man’s beef-bone shio near the station] An 8-seat counter two minutes from Hankyu Mikuni, where the owner, after some 25 years running the Horibata izakaya, turned the Mikuni shop into a ramen bar in March 2024 and now works it alone. The signature is a rare thing in Osaka, a beef-bone shio: a clear, gentle golden broth with homemade shio-koji, slices of rare beef chashu and Saitama noodles, thin or thick (¥890, 2025). The charred-niboshi shoyu, finished with sizzling oil, is the bolder bowl; autumn 2026 brings a rich chicken-paitan shoyu. Cash tickets; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, working alone (unnamed)'], origin: null,
      background: 'Per the shop blog (nonbei-horibata.heart-g.net, read 2026-11-02): 魚菜処 ほりばた ran three izakaya, in 此花, 豊中 and 三国, for about 25 years; during the COVID-19 years the owner turned to take-home recipes and frozen food by mail, and to the ramen long wanted; "as a cook" the owner used what was learned running izakaya to change what the shop serves, reopening as 麺処 ほりばた in March 2024. Per reviews: the owner "previously ran a Japanese restaurant", buys ingredients directly from Okayama and makes the shio-koji and soy sauce (March 2025); a school friend says the owner, who had no ramen training, "had been making various broths since [the] days in the seafood business" (August 2025); "The owner runs the place alone" (October 2024); "The owner was also incredibly friendly" (November 2024).',
      philosophy: '"A beloved local establishment" built on years as a cook (Tabelog).', specialty: 'Beef-bone shio ramen; charred-niboshi shoyu ramen.',
      anecdotes: [
        { text: '"The broth is clear and, as it looks, very gentle and smooth. You can feel a slight saltiness in the aftertaste." — May 2024, beef-bone shio ¥850.', source: R + 'B475730858/' },
        { text: '"My companion ordered the grilled niboshi, which came topped with piping hot umami oil drizzled from a skillet." — September 2024.', source: R + 'B492103122/' },
        { text: '"This restaurant offers a rare opportunity to enjoy beef bone ramen in Osaka, a specialty that’s popular in parts of Tottori and Yamaguchi." — July 2024.', source: R + 'B488718652/' },
      ],
      japanese_sources_summary: '店のブログ: 「魚菜処 ほりばた」は此花店、豊中店、三国店の3店舗で約25年間居酒屋を営み、コロナ禍で持ち帰りレシピや冷凍食品の通販、そして自分が出したかったラーメンを考えるようになり、料理職人として居酒屋で学んだ知識を生かして、2024年3月に「麺処 ほりばた」として新たな姿に、銀シャリは有機肥料の秋田産あきたこまち、限定の濃厚鶏白湯醤油らーめん950円 (味玉1,050円、特製1,250円) を2026年10月5日から、夏季限定の冷やしらーめん。食べログ: 麺処 ほりばた、ラーメン、大阪市淀川区三国本町3-27-8 岩崎ビル 1F、阪急三国駅から徒歩2分、月〜土・祝11:30〜14:00、17:30〜22:00、日曜休み、予約不可、カード・電子マネー・QR 不可、カウンター8席、禁煙、車いす可。口コミ (2024年5月〜2026年4月): 2024年3月7日に居酒屋からラーメン店に、牛骨の塩ラーメン850〜890円、Kogashi Niboshi の醤油ラーメン850〜890円、自家製の塩麹、牛のレアチャーシュー、埼玉の麺、細麺か太麺、店主がひとりで切り盛り、もとは和食の料理人、券売機。',
      confidence: 'medium', sources: [BLOG, TB, R + 'B475730858/', R + 'B484749077/', R + 'B484957996/', R + 'B486671308/', R + 'B488718652/', R + 'B492103122/', R + 'B493549170/', R + 'B493794966/', R + 'B504204579/', R + 'B511034036/', R + 'B513056009/', R + 'B516258704/', R + 'B525460543/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance (2024–2025). No English evidence found.' },
    safety: SAFETY0,
    ramen: {
      broth_base: ['beef'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Noodles from Saitama, chewy and bouncy (May 2024); choose thin (straight) or thick (medium-thick, flat and wavy) (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Beef-bone shio ramen, ¥890 (2025).',
      chashu: 'Rare beef-round chashu like roast beef, two or three slices, with the shio; pork chashu with the shoyu (2024–2026).',
      notable_toppings: ['rare beef chashu', 'menma', 'chili threads', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth; beef chashu.' },
      pantheon: 'Hankyu Mikuni’s one-man beef-bone shio: a clear golden broth and rare beef chashu.',
      profile: { richness: 2, oiliness: 3, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B493549170/', '"The beef bone broth is light (not watery)"; "lacks richness and depth" (B525460543) — placed low.'],
        oiliness: [R + 'B525460543/', '"The oil content is moderate, likely from beef fat."'],
        clarity: [R + 'B492103122/', '"The beautiful beef chashu floating on the clear broth"; "The broth is clear" (B475730858).'],
        tare_strength: [R + 'B486671308/', '"The seasoning was strong with a punch of salt", against "a slight saltiness in the aftertaste" (B475730858) and "a bit weak" (B525460543) — mid-scale.'],
        noodle_firmness: [R + 'B525460543/', '"The texture is bouncy and has a decent chew"; "chewy and bouncy" (B484749077) — mid-scale.'],
        aroma_punch: [R + 'B493794966/', '"The salt version didn’t have as strong of a beef bone flavor as the soy sauce, and it was deliciously clear" — placed low.'],
      },
    },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区三国本町3-27-8 岩崎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop blog with an October 2026 post; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区三国本町三丁目27番8号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511034036/', R + 'B513056009/', R + 'B525460543/', BLOG],
    price_note: 'Prices from 2025–2026 reviews and the shop blog.', last_checked: TODAY, items: [
      it('', '', 'Beef-bone shio ramen', '¥890', 'Ramen', 'no', 'no', 'August 2025.', 'gyukotsu_shio_ramen'),
      it('', '', 'Charred-niboshi shoyu ramen ("Kogashi Niboshi")', '¥890', 'Ramen', 'no', 'no', 'September 2025.', 'kogashi_niboshi_shoyu'),
      it('濃厚鶏白湯醤油らーめん', '', 'Rich chicken-paitan shoyu ramen (limited, from 5 October 2026)', '¥950', 'Ramen', 'no', 'no', 'Shop blog.', 'tori_paitan_shoyu'),
      it('', '', 'Seasoned egg', '¥120', 'Toppings', 'no', 'no', '2025–2026.', 'ajitama'),
    ] }, {
    cuisine: 'ラーメンは2種 (店のブログ、口コミ)・牛骨の塩ラーメン: 牛骨に牛脂の澄んだ金色のスープを自家製の塩麹で、牛もものレアチャーシュー、メンマ、ねぎ、糸唐辛子。850円 (2024年)、890円 (2025年)、大盛り990円 (2026年4月)・Kogashi Niboshi の醤油ラーメン: 黒っぽいスープに鍋から熱い油をかけて仕上げ、豚のチャーシュー、メンマ、紫玉ねぎ、ゆずの皮。850円 (2024年)、890円 (2025年)・麺は埼玉から、細麺か太麺 (中太の平打ちちぢれ) を選べる (2024〜2026年)・限定: 夏は冷やしらーめん。2026年10月5日から濃厚鶏白湯醤油らーめん950円、味玉1,050円、特製1,250円 (店のブログ)・トッピング: 味玉120円、牛のレアチャーシュー250円増し、豚バラのチャーシュー200円増し、メンマ150円増し (2024〜2025年)・ごはんは有機肥料の秋田産あきたこまち (店のブログ、2025年3月)。チャーシュー丼350円 (2024年6月)・卓上にこしょう、柚子胡椒、自家製のニラと唐辛子の薬味 (2024〜2025年)',
    neighborhood: '三国本町3-27-8 岩崎ビル 1F、阪急三国駅から2分、商店街から少し入ったところ (食べログ、2025年)',
    gf_detail: 'グルテンフリーではありません。埼玉の小麦の麺。醤油と塩麹で味つけ。',
    vegan_detail: 'ヴィーガンではありません。牛骨か煮干しのスープ。牛と豚のチャーシュー。',
    notes: '[ラーメン・阪急三国、店主ひとりの牛骨塩] 阪急三国駅から2分、カウンター8席のラーメン店。居酒屋「ほりばた」を約25年営んだ店主が、2024年3月に三国の店をラーメン店に変え、いまはひとりで切り盛りする。看板は大阪では珍しい牛骨の塩ラーメン: 自家製の塩麹で仕上げる澄んだやさしい金色のスープに、牛のレアチャーシューと埼玉の麺、細麺か太麺 (890円、2025年)。鍋の熱い油で仕上げるKogashi Niboshi の醤油は、よりパンチのある一杯。2026年の秋は濃厚鶏白湯醤油も。券売機は現金。日曜休み。',
  });
}

// ================================================================ 手作り餃子 橋郷館
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27131219/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_tezukuri_gyoza_hashizato_kan_kikawanishi', name: '手作り餃子 橋郷館 (Tezukuri Gyoza Hashizato Kan)', category: 'OMNI',
    lat: 34.722733, lng: 135.490345, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade wheat gyoza skins, zhajiangmian; soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp and scallop fillings; meat in most stir-fries.',
    hours_raw: 'Mon and Wed–Sun 11:00–22:00; closed Tuesday (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR (PayPay and others) (Tabelog). 19 seats: 7 at the counter and 12 at tables; private hire up to 20; non-smoking, smoking space outside; wheelchair accessible; power outlets (Tabelog). Coin parking nearby; one diner used a nearby supermarket’s affiliated parking (Tabelog; November 2025). Opened 16 July 2022 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '木川西2-1-14, on Yodogawa-dori about halfway between Juso (13 min) and Nishinakajima-Minamigata (15 min); bus 93 from Osaka Station to 木川西2丁目 (Tabelog; November 2024)',
    cuisine: 'Handmade gyoza with Chinese dishes and drinks (Tabelog) · gyoza fried, steamed or boiled, in many fillings: pork and cabbage, pork and green onion, pork and shiitake, pork and lotus root, pork and garlic, pork and cilantro, pork and cheese, garlic chives and shrimp, scallop, myoga, mapo-tofu gyoza; seasonal fillings such as bamboo shoot (2023–2026) · fried pork and cabbage gyoza ¥560; steamed pork and garlic ¥540; boiled pork and lotus root ¥560 (2023–2024) · chewy skins and a herb aroma; aged black vinegar on the table (2024–2025) · set meals ¥780 at lunch: six or ten gyoza, mapo tofu (Liu Mama’s, spice to order), crispy shredded potato, green pepper and pork, nagaimo stir-fry, with rice, pickles and soup (2024–2025); boiled gyoza set ¥1,000 (June 2026) · quick-drink set ¥1,000: saliva chicken, gyoza and a beer (2023–2025) · zhajiangmian, Sichuan pork, tomato and egg ¥650, shrimp and broccoli, century-egg tofu, kimchi (2024–2026) · all-you-can-drink; fruit sours, Shaoxing wine, homemade plum drink (2025–2026)',
    website: 'http://www.morymoryliu.com/', gmaps: gm('手作り餃子 橋郷館 木川西'), menu_url: null,
    notes: '[Gyoza · Juso and Minamikata, a couple’s handmade gyoza in every style] A 19-seat gyoza shop on Yodogawa-dori between Juso and Nishinakajima-Minamigata, opened in 2022 and run by a couple. Every gyoza is made by hand with a chewy skin, and you choose both the filling, from pork and shiitake to myoga or mapo tofu, and whether it comes fried, steamed or boiled. Lunch sets of gyoza or Liu Mama’s mapo tofu are ¥780 with rice and soup (2025); in the evening a ¥1,000 quick-drink set and all-you-can-drink with fruit sours or Shaoxing wine. Open 11:00–22:00; closed Tuesdays; cards and PayPay.',
    chef_bio: { chef_name: null, roles: ['Couple running the shop (unnamed)'], origin: null,
      background: 'Per Tabelog: handmade gyoza, Chinese and izakaya; opened 16 July 2022; website morymoryliu.com (no content returned, 2026-11-02). Per reviews: "it was run by just a couple" and each batch appears to be made fresh to order (April 2024); "a small, personal gyoza shop" (November 2024); "All handmade by authentic Chinese chefs" (June 2026); a diner who came with "someone with Chinese roots" was told it was very good (March 2025); the mapo tofu set is named "Liu Mama’s" (November 2025); spice adjusted on request (November 2024).',
      philosophy: '"The best gyoza in life is here" (shop sign, as quoted in a November 2024 review).', specialty: 'Handmade gyoza, fried, steamed or boiled.',
      anecdotes: [
        { text: '"The restaurant had a spacious interior with a Chinese-like ambiance, and it was run by just a couple." — April 2024.', source: R + 'B483305440/' },
        { text: '"There was a delightful aroma of herbs unique to Chinese and Taiwanese cuisine." — March 2025, ¥780 gyoza set.', source: R + 'B504112627/' },
        { text: '"The myoga steamed gyoza had just the right amount of myoga flavor, was very chewy, and absolutely delightful." — May 2026.', source: R + 'B528411061/' },
      ],
      japanese_sources_summary: '食べログ: 手作り餃子 橋郷館、居酒屋・餃子・中華料理、大阪市淀川区木川西2-1-14、十三駅から徒歩約13分、西中島南方駅から15分、大阪駅から93番のバスで木川西2丁目、月・水〜日11:00〜22:00、火曜休み、予約可、カード・電子マネー・QR 可、19席 (カウンター7、テーブル12)、貸切20名まで、禁煙、店外に喫煙所、車いす可、2022年7月16日オープン。口コミ (2023年12月〜2026年6月): 夫婦で営む、焼き・蒸し・水餃子を選べる、豚とキャベツ、豚とねぎ、豚としいたけ、豚とれんこん、豚とにんにく、豚とパクチー、豚とチーズ、ニラとエビ、ホタテ、みょうが、麻婆豆腐の餃子、季節のたけのこ、もちもちの皮、熟成黒酢、昼の定食780円 (餃子6個か10個、Liu Mama の麻婆豆腐、じゃがいもの細切り炒め、ピーマンと豚、長いも炒め)、水餃子の定食1,000円、Quick Drink Set 1,000円 (よだれ鶏、餃子、ビール)、ジャージャー麺、トマトと卵の炒め物650円、エビとブロッコリー、ピータン豆腐、飲み放題、フルーツサワー、紹興酒、自家製の梅のドリンク。',
      confidence: 'medium', sources: [TB, R + 'B481116375/', R + 'B483305440/', R + 'B493911126/', R + 'B496302282/', R + 'B496541372/', R + 'B496651444/', R + 'B504112627/', R + 'B504626680/', R + 'B508862473/', R + 'B511657304/', R + 'B517162247/', R + 'B526927296/', R + 'B528411061/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Run by Chinese cooks (June 2026); wheelchair accessible (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区木川西2-1-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区木川西二丁目1番14号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B504112627/', R + 'B517162247/', R + 'B504626680/', R + 'B496302282/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gyoza set meal (six or ten pieces) with rice and soup', '¥780', 'Lunch', 'no', 'no', 'March 2025.', 'gyoza_teishoku'),
      it('', '', 'Liu Mama’s mapo tofu set meal', '¥780', 'Lunch', 'no', 'no', 'November 2025.', 'mapo_teishoku'),
      it('', '', 'Boiled gyoza set meal', '¥1,000', 'Sets', 'no', 'no', 'June 2026.', 'suigyoza_teishoku'),
      it('', '', 'Fried pork and cabbage gyoza', '¥560', 'Gyoza', 'no', 'no', 'November 2024.', 'yaki_gyoza'),
      it('', '', 'Quick-drink set: saliva chicken, gyoza and a drink', '¥1,000', 'Sets', 'no', 'no', '2023–2025.', 'choinomi_set'),
    ] }, {
    cuisine: '手作りの餃子に中華料理とお酒 (食べログ)・餃子は焼き、蒸し、水餃子から選べ、具も多い: 豚とキャベツ、豚とねぎ、豚としいたけ、豚とれんこん、豚とにんにく、豚とパクチー、豚とチーズ、ニラとエビ、ホタテ、みょうが、麻婆豆腐の餃子、季節のたけのこなど (2023〜2026年)・豚とキャベツの焼き餃子560円、豚とにんにくの蒸し餃子540円、豚とれんこんの水餃子560円 (2023〜2024年)・もちもちの皮にハーブの香り。卓上に熟成黒酢 (2024〜2025年)・昼の定食780円: 餃子6個か10個、Liu Mama の麻婆豆腐 (辛さは注文で)、じゃがいもの細切り炒め、ピーマンと豚、長いもの炒め物に、ごはん、漬物、スープ (2024〜2025年)。水餃子の定食1,000円 (2026年6月)・Quick Drink Set 1,000円: よだれ鶏、餃子、ビール (2023〜2025年)・ジャージャー麺、四川風の豚、トマトと卵の炒め物650円、エビとブロッコリー、ピータン豆腐、キムチ (2024〜2026年)・飲み放題、フルーツサワー、紹興酒、自家製の梅のドリンク (2025〜2026年)',
    neighborhood: '木川西2-1-14、淀川通り沿い、十三 (13分) と西中島南方 (15分) のほぼ中間。大阪駅から93番のバスで木川西2丁目 (食べログ、2024年11月)',
    gf_detail: 'グルテンフリーではありません。手作りの小麦の餃子の皮、ジャージャー麺。醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。豚、エビ、ホタテの具。炒め物の多くに肉。',
    notes: '[餃子・十三と南方のあいだ、夫婦の手作り餃子をどの焼き方でも] 淀川通り沿い、十三と西中島南方のあいだにある19席の餃子の店で、2022年開店、夫婦で営む。餃子はすべて手作りで皮はもちもち。豚としいたけからみょうがや麻婆豆腐まで具を選び、焼き、蒸し、水餃子も選べる。昼は餃子か Liu Mama の麻婆豆腐の定食が、ごはんとスープつきで780円 (2025年)。夜は1,000円の Quick Drink Set や、フルーツサワーや紹興酒の飲み放題も。11時から22時。火曜休み。カード、PayPay 可。',
  });
}

// ================================================================ 朝挽豚専門店 ぶった 三国駅前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27040409/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_asabiki_buta_butta_mikuni', name: '朝挽豚専門店 ぶった 三国駅前店 (Asabiki Buta Senmon Ten Butta Mikuni)', category: 'OMNI',
    lat: 34.73853, lng: 135.48381, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kara-age and fried pork, miso ramen; skewers with salt or sauce, ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork skewers and offal, horse sashimi, pork ramen.',
    hours_raw: 'Mon, Wed–Sun and holidays 18:00–24:00 (food last order 23:00, drinks 23:30); closed Tuesday; may close early when ingredients run out (Tabelog). Phone reservations from 16:30 (Tabelog). No cards, e-money or QR (Tabelog). 18 seats: 14 at tables, 4 at the counter, the counter under a plastic curtain at the front and the tables through a door on the far side (Tabelog; December 2021). Smoking allowed, so no one under 20 is admitted (Tabelog). Coin parking nearby (Tabelog). A 2021 review saw weekend lunch from 12:00; the current listing is evenings only.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '西三国3-4-9, 1 min from the north exit of Hankyu Mikuni, at the entrance to the Santiful Mikuni shopping street (Tabelog; December 2021)',
    cuisine: 'Morning-butchered pork, grilled on skewers (Tabelog; reviews) · skewers ¥150–250 each: liver with salt, heart, kashira (head meat), harami, tanshira, intestine, rectum ("teppou"), lips, throat, pork neck, tsukune with egg yolk (2014–2026); omakase five skewers ¥770 (November 2024) · roast pork skewers from ¥90 (December 2025) · braised pork belly, two large pieces ¥600 (September 2026); tender braised pig trotters simmered in front of you (September 2024) · kara-age, fried pork, crispy potato salad, black edamame, horse sashimi (2024–2026) · miso and spicy miso ramen as a finisher, with ground pork, cabbage and bean sprouts, spice and numbing levels to order; spicy miso ¥880 before tax (October 2022) · Hoppy (black ¥400), highballs, sake, shochu, wine (2024–2026)',
    website: null, gmaps: gm('朝挽豚専門店 ぶった 三国駅前店'), menu_url: null,
    notes: '[Izakaya · Hankyu Mikuni, morning-butchered pork skewers behind a plastic curtain] An 18-seat yakiton bar a minute from Hankyu Mikuni, at the mouth of the shopping street, its counter sealed off by a plastic curtain like a street stall. The pork is butchered that morning, and the skewers run from the familiar to lips, throat and rectum, most at ¥170–250 (2026); regulars swear by the barely-cooked liver with salt, and a spicy miso ramen closes the night. Hoppy, rare in Osaka, is on tap, the TV shows baseball and the walls hold wrestlers’ autographs. Open 18:00 to midnight; closed Tuesdays; cash only; smoking allowed, so adults only.',
    chef_bio: { chef_name: null, roles: ['Owner at the grill (unnamed)'], origin: null,
      background: 'Per Tabelog: a morning-butchered pork specialist with offal, pork dishes and ramen; adults only because smoking is allowed. A sister shop, 朝挽豚専門店 ぶった 西中島店, appears in the sweep list. Per reviews: "They offer a wide selection of horumon, including almost everything from the pig’s mouth to its rear end" (March 2014); the ramen banner first went up during the 2021 state of emergency (August–December 2021); "greeted by the owner as I took my seat at the counter" (September 2024); wrestlers’ autographs and Hanshin Tigers support on show (2024–2025); "The owner was very kind" (May 2026, a regular on the eighth visit).',
      philosophy: null, specialty: 'Morning-butchered pork skewers; salt-grilled liver.',
      anecdotes: [
        { text: '"Even though it’s skewered, it was like raw liver! And it’s pork!" — May 2026, liver ¥150.', source: R + 'B474722139/' },
        { text: '"It’s rare to find Hoppy in Osaka, and the fresh pork offal available here is diverse, so I often visit." — September 2024.', source: R + 'B497128011/' },
        { text: '"The kakuni (braised pork belly) came with two large pieces for just JPY 600." — September 2026.', source: R + 'B536145220/' },
      ],
      japanese_sources_summary: '食べログ: 朝挽豚専門店 ぶった 三国駅前店、ホルモン・豚料理・ラーメン、大阪市淀川区西三国3-4-9、阪急三国駅北口から徒歩約1分、月・水〜日・祝18:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、火曜休み、食材がなくなれば閉店も、電話予約は16:30から、カード・電子マネー・QR 不可、18席 (テーブル14、カウンター4)、喫煙可のため未成年は入店不可。口コミ (2013年〜2026年9月): Santiful Mikuni の入口、ビニールシートのカウンター、口からお尻まで豚のホルモン、レバー塩、ハツ、kashira、ハラミ、tanshira、teppou、くちびる、のど、卵黄つきのつくね、串は170〜250円、おまかせ5本770円、焼豚90円から、角煮2切れ600円、豚足の煮込み、唐揚げ、ポテトサラダ、黒枝豆、馬刺し、締めの味噌ラーメンと辛味噌ラーメン (辛さとしびれを選べる)、ホッピー、店主はやさしい、プロレスのサイン、阪神タイガース。',
      confidence: 'medium', sources: [TB, R + 'B444079231/', R + 'B444615985/', R + 'B455248245/', R + 'B474558070/', R + 'B474722139/', R + 'B497128011/', R + 'B516033011/', R + 'B518877130/', R + 'B522375762/', R + 'B536145220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for solo drinkers (February 2026); adults only (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西三国3-4-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西三国三丁目4番9号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B474722139/', R + 'B536145220/', R + 'B455248245/'],
    price_note: 'Prices from 2022–2026 reviews (the 2022 ramen price before tax).', last_checked: TODAY, items: [
      it('', '', 'Pork skewers (kashira, harami, tanshira and more)', '¥170', 'Skewers', 'ask', 'no', 'May 2026.', 'buta_kushi'),
      it('', '', 'Liver skewer', '¥150', 'Skewers', 'ask', 'no', 'May 2026.', 'reba_kushi'),
      it('', '', 'Braised pork belly, two pieces', '¥600', 'Small dishes', 'ask', 'no', 'September 2026.', 'kakuni'),
      it('', '', 'Spicy miso ramen', '¥880', 'Ramen', 'no', 'no', 'October 2022 (before tax).', 'kara_miso_ramen'),
      it('', '', 'Hoppy (black)', '¥400', 'Drinks', 'ask', 'ask', 'May 2026.', 'hoppy_black'),
    ] }, {
    cuisine: '朝挽きの豚を串焼きで (食べログ、口コミ)・串は1本150〜250円: レバー塩、ハツ、kashira、ハラミ、tanshira、ホルモン、teppou、くちびる、のど、ネック、卵黄つきのつくね (2014〜2026年)。おまかせ5本770円 (2024年11月)・焼豚は90円から (2025年12月)・角煮2切れ600円 (2026年9月)。目の前の鍋で煮る豚足 (2024年9月)・唐揚げ、豚の揚げ物、ポテトサラダ、黒枝豆、馬刺し (2024〜2026年)・締めに味噌ラーメンと辛味噌ラーメン。ひき肉、キャベツ、もやし、辛さとしびれは注文で。辛味噌880円、税別 (2022年10月)・ホッピー (黒400円)、ハイボール、日本酒、焼酎、ワイン (2024〜2026年)',
    neighborhood: '西三国3-4-9、阪急三国駅北口から1分、Santiful Mikuni の商店街の入口 (食べログ、2021年12月)',
    gf_detail: 'グルテンフリーではありません。唐揚げ、豚の揚げ物、味噌ラーメン。串は塩かたれ、確認を。',
    vegan_detail: 'ヴィーガンではありません。豚の串とホルモン、馬刺し、豚のラーメン。',
    notes: '[居酒屋・阪急三国、ビニールの向こうの朝挽き豚の串] 阪急三国駅から1分、商店街の入口にある18席のやきとん屋で、カウンターは屋台のようにビニールシートで囲われる。豚はその朝につぶしたもので、串は定番から、くちびる、のど、teppou まで、たいてい170〜250円 (2026年)。常連が推すのは、ほとんど生のようなレバー塩。締めは辛味噌ラーメン。大阪では珍しいホッピーがあり、テレビは野球、壁にはプロレスラーのサイン。18時から深夜0時まで。火曜休み。現金のみ。喫煙可のため成人のみ。',
  });
}

// ================================================================ 味園
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27020741/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_misono_niitaka', name: '味園 (Misono)', category: 'OMNI',
    lat: 34.73311, lng: 135.482241, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded katsu, kara-age, ramen and yakisoba; soy and oyster-sauce stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, shrimp and egg in the sets; ramen broth.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–21:00; closed Sunday (Tabelog). No reservations; no cards, e-money or QR (Tabelog). 16 seats: a counter of about 8 facing the kitchen and three small tables for two (Tabelog; July 2026). Smoking allowed (Tabelog). No parking; coin parking nearby (July 2026). Packed at weekday lunch with office workers (2025–2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '新高1-5-3, south of Hankyu Mikuni, just off Route 176 (Tabelog; July and October 2026)',
    cuisine: 'Neighbourhood Chinese (reviews) · katsudon with a Chinese ankake sauce, the regulars’ favourite; ¥650 (2022); mapo katsudon ¥750 (April 2025), ¥900 (September 2026) · set meals with rice and soup: Chinese set of sweet and sour pork, shrimp tempura and omelette ¥950 (October 2026); Misono set of stir-fried mixed vegetables, kara-age and omelette ¥900–950 (2026); grilled set with yakisoba and kara-age ¥850 (2026); sweet and sour pork set ¥800, tonkatsu set ¥700, stamina set ¥700 (December 2025); liver and garlic chives set (2026) · service lunch ¥600 (2023–2024) · a la carte: chuka-don, tenshinhan and yakisoba ¥550 each; fried rice, medium ¥500 (December 2025) · miso ramen ¥700 with thick chashu, minced meat and a soft-boiled egg (July 2026); ankake noodles; tenshinhan and ramen set ¥800 (2025–2026) · shrimp in ketchup sauce, gyoza; daily bento (2025–2026)',
    website: null, gmaps: gm('味園 新高 中華'), menu_url: null,
    notes: '[Chinese · Hankyu Mikuni, a one-man neighbourhood Chinese with ankake katsudon] A 16-seat local Chinese kitchen just south of Hankyu Mikuni off Route 176, where one cook works a big open kitchen behind the counter and the menu covers the wall (2026). Regulars come for the katsudon under a Chinese ankake sauce or its mapo-tofu version (¥900, 2026), or for set meals of sweet and sour pork, shrimp tempura and omelette with rice and soup for ¥950. Food comes out in minutes and the prices stay low. Lunch is packed with office workers; cash only; smoking allowed; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, working alone (unnamed)'], origin: null,
      background: 'Per reviews: "Despite being a one-person operation, the large kitchen allows for a wide variety of dishes" (October 2026); "I could see the owner moving swiftly from the counter, and my dish arrived quickly" (September 2026); "a long-established local Chinese restaurant tucked away just off Route 176" (October 2026); "This popular restaurant is always packed during lunch hours" (December 2025); "Despite rising ingredient prices, [the shop continues] to maintain these low prices" (April 2025).',
      philosophy: null, specialty: 'Ankake katsudon; mapo katsudon; set meals.',
      anecdotes: [
        { text: '"It felt like a collaboration between Chukadon and Katsudon." — October 2025.', source: R + 'B515019323/' },
        { text: '"I was amazed at how quickly everything arrived—within 5 to 10 minutes after ordering!" — July 2026.', source: R + 'B532626132/' },
        { text: '"The runny yolk of the soft-boiled egg perfectly clings to the noodles, making it incredibly tasty." — July 2026, miso ramen ¥700, a regular on the tenth visit.', source: R + 'B342328955/' },
      ],
      japanese_sources_summary: '食べログ: 味園、中華料理、大阪市淀川区新高1-5-3、三国駅から456m、月〜土11:00〜15:00、17:00〜21:00、日曜休み、予約不可、カード・電子マネー・QR 不可、16席、喫煙可。口コミ (2022年〜2026年10月): 国道176号から少し入った老舗の町中華、ひとりで切り盛り、あんかけのカツ丼650円 (2022年)、麻婆カツ丼750〜900円、中華定食 (酢豚、エビ天、卵焼き) 950円、味園定食 (野菜の炒め物、唐揚げ、卵焼き) 900〜950円、焼きそばと唐揚げの定食850円、酢豚定食800円、とんかつ定食700円、スタミナ定食700円、レバニラ定食、サービスランチ600円、中華丼・天津飯・焼きそば各550円、チャーハン (中) 500円、味噌ラーメン700円、あんかけ麺、天津飯とラーメンのセット800円、エビのケチャップ炒め、餃子、日替わり弁当、提供が早い、昼はサラリーマンでいっぱい。',
      confidence: 'medium', sources: [TB, R + 'B342328955/', R + 'B454385144/', R + 'B471000578/', R + 'B513456064/', R + 'B515019323/', R + 'B518542146/', R + 'B525854961/', R + 'B531831540/', R + 'B532626132/', R + 'B536217968/', R + 'B536709808/', R + 'B537470047/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu written on the wall above the kitchen (December 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区新高1-5-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区新高一丁目5番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537470047/', R + 'B536709808/', R + 'B518542146/', R + 'B342328955/'],
    price_note: 'Prices from December 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mapo katsudon', '¥900', 'Rice bowls', 'no', 'no', 'September 2026.', 'mapo_katsudon'),
      it('', '', 'Chinese set: sweet and sour pork, shrimp tempura, omelette, rice and soup', '¥950', 'Set meals', 'no', 'no', 'October 2026.', 'chuka_teishoku'),
      it('味噌ラーメン', '', 'Miso ramen', '¥700', 'Noodles', 'no', 'no', 'July 2026.', 'miso_ramen'),
      it('', '', 'Chuka-don, tenshinhan or yakisoba', '¥550', 'A la carte', 'no', 'no', 'December 2025.', 'chukadon'),
    ] }, {
    cuisine: '町の中華 (口コミ)・常連の人気は中華風のあんかけをかけたカツ丼。650円 (2022年)。麻婆カツ丼750円 (2025年4月)、900円 (2026年9月)・ごはんとスープつきの定食: 酢豚、エビの天ぷら、卵焼きの中華定食950円 (2026年10月)。野菜の炒め物、唐揚げ、卵焼きの味園定食900〜950円 (2026年)。焼きそばと唐揚げの定食850円 (2026年)。酢豚定食800円、とんかつ定食700円、スタミナ定食700円 (2025年12月)。レバニラ定食 (2026年)・サービスランチ600円 (2023〜2024年)・一品: 中華丼、天津飯、焼きそば各550円。チャーハン (中) 500円 (2025年12月)・味噌ラーメン700円、厚いチャーシュー、ひき肉、半熟卵 (2026年7月)。あんかけ麺。天津飯とラーメンのセット800円 (2025〜2026年)・エビのケチャップ炒め、餃子。日替わりの弁当 (2025〜2026年)',
    neighborhood: '新高1-5-3、阪急三国駅の南、国道176号から少し入ったところ (食べログ、2026年7月・10月)',
    gf_detail: 'グルテンフリーではありません。衣のカツ、唐揚げ、ラーメン、焼きそば。醤油やオイスターソースの炒め物。',
    vegan_detail: 'ヴィーガンではありません。定食には豚、鶏、エビ、卵。ラーメンのスープ。',
    notes: '[中華・阪急三国、店主ひとりの町中華とあんかけカツ丼] 阪急三国駅の南、国道176号から少し入った16席の町の中華で、カウンターの奥の広い厨房をひとりで回し、壁一面にメニュー (2026年)。常連の目当ては中華あんをかけたカツ丼か、その麻婆豆腐版 (900円、2026年)、または酢豚、エビの天ぷら、卵焼きにごはんとスープの950円の定食。数分で出てきて、値段は安いまま。昼はサラリーマンでいっぱい。現金のみ。喫煙可。日曜休み。',
  });
}

save();
