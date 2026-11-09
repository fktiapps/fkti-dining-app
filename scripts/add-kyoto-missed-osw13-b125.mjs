// Kyoto priority (kyoto-missed), worker osw13, batch 125 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: しきぶ, お食事処 相生, Il Vicoletto, ilifune. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-125');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

// ================================================================ しきぶ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006052/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '20:00']);
  put({
    id: 'kyoto_shikibu_sushi', name: 'しきぶ (Shikibu)', category: 'OMNI',
    lat: 35.016713, lng: 135.769832, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: nigiri with soy sauce, simmered dishes with soy-based glazes, and kabura-mushi with a thickened sauce (2023–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter of fish and shellfish, with duck and crab dishes (2023–2025 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 17:00–20:00; closed Monday; hours may change. Reviewers have arrived around or after 20:00 and found it busy (November 2023; November 2025), so the 20:00 may be the last entry — check. Reservations taken, including same day (November 2023). Not omakase: order sushi and seasonal dishes à la carte. About ¥15,000–30,000 per person. Cards: JCB, AMEX, Diners; e-money accepted. Counter and a tatami room; non-smoking. Near Nakamachi-dori south of Marutamachi, 271 m from Jingu-Marutamachi.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakamachi-dori south of Marutamachi — 271 m from Jingu-Marutamachi',
    cuisine: 'A family-run neighbourhood sushi counter where you order sushi and seasonal Kyoto dishes à la carte rather than omakase, focused on fresh white fish (Tabelog; 2020–2025 reviews) · nigiri of sea bream, flounder, toro, anago, clam and negitoro; simmered clams; mackerel sushi cut to the thickness you like (2023–2025) · sashimi such as conger eel with plum and wasabi soy, squid, and horse mackerel marinated with chili for three years (September 2022) · kabura-mushi in winter; roast duck breast with mustard (2023–2024) · grilled sweetfish; boiled shrimp; octopus; mozuku; konowata; karasumi (2022–2025) · crab sunomono; grilled fugu (November 2025)',
    website: null, gmaps: gm('しきぶ 寿司 丸太町'), menu_url: null,
    notes: '[Sushi · Marutamachi, a family town sushi bar] A warm, busy family sushi counter where you order freely: white-fish nigiri with sudachi, mackerel sushi cut to your liking, and seasonal Kyoto plates like kabura-mushi and duck. About ¥15,000–30,000. Book ahead. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'Reviewers call it family-owned and welcoming (January 2023, January 2024), with a friendly chef and owner (November 2025) and a room full of regulars and diners celebrating occasions. One regular has brought her mother for years, including a New Year\'s Eve dinner in 2020.',
      philosophy: null,
      specialty: 'À la carte town sushi; white fish; Kyoto winter dishes.',
      anecdotes: [
        { text: 'January 2023: "The sushi here isn\'t the aged Edo-style; it\'s rather focused on freshness… The restaurant is family-owned, which adds to the warm and welcoming atmosphere."', source: R + 'B417744163/' },
        { text: 'January 2024: "First of all, it\'s not an omakase or a course meal!!… It\'s a restaurant where you can enjoy your food just the way you like."', source: R + 'B478555475/' },
        { text: 'March 2025: "You can enjoy the mackerel sushi at your preferred thickness, depending on your appetite."', source: R + 'B503481621/' },
      ],
      japanese_sources_summary: '食べログ: しきぶ、寿司・日本料理、上京区中町通丸太町下る駒之町555、神宮丸太町から271m、火〜日17:00〜20:00、月曜休み、予約可、カード (JCB・AMEX・Diners)・電子マネー可、カウンター・座敷、禁煙。口コミ (2020年12月〜2025年11月、英語): 家族経営の町の寿司屋、おまかせではなくアラカルト、白身中心の新鮮な寿司、鯛、ひらめ、トロ、穴子、はまぐり、ねぎとろ、煮はまぐり、好みの厚さの鯖寿司、conger eelの梅肉、唐辛子に3年漬けたあじ、冬のかぶら蒸し、鴨の胸肉のローストの辛子添え、鮎の塩焼き、ゆでえび、このわた、からすみ、かにの酢の物、焼きふぐ、当日予約で20時ごろの来店も、気さくな大将と店主。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B417744163', 'B454280101', 'B474620399', 'B478555475', 'B491327391', 'B496896160', 'B502927829', 'B503481621', 'B517693775'])) },
    cultural_comfort: { level: 'japanese', note: 'Order à la carte at the counter; regulars\' town sushi bar.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区中町通丸太町下る駒之町555',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and November 2025.' },
    pin_source: `Tabelog ${TB} (35.016713, 135.769832); GSI lot 京都府京都市上京区駒之町555番地 about 45m away; nearest pin kyoto_le_cadeau_marutamachi 41.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B417744163/', R + 'B454280101/', R + 'B503481621/'],
    price_note: 'No dish prices given; about ¥15,000–30,000 per person (2022–2025 reviews).', last_checked: TODAY, items: [
      it('', '', 'Nigiri (à la carte)', '', 'Sushi', 'no', 'no', '2023–2025.', 'nigiri'),
      it('', '', 'Mackerel sushi (cut to order)', '', 'Sushi', 'ask', 'no', 'March 2025.', 'saba_zushi'),
      it('', '', 'Kabura-mushi (winter)', '', 'Seasonal', 'no', 'no', 'January 2023 and December 2024.', 'kaburamushi'),
      it('', '', 'Roast duck breast', '', 'Seasonal', 'ask', 'no', '2022–2023.', 'kamo_roast'),
    ] }, {
    cuisine: 'おまかせではなく寿司と京都の季節の料理をアラカルトで頼む、家族経営の町の寿司屋。新鮮な白身が中心 (食べログ、2020〜2025年の口コミ)・鯛、ひらめ、トロ、穴子、はまぐり、ねぎとろの握り、煮はまぐり、好みの厚さに切る鯖寿司 (2023〜2025年)・conger eelの梅肉とわさびじょうゆ、いか、唐辛子に3年漬けたあじなどの刺身 (2022年9月)・冬のかぶら蒸し、鴨の胸肉のローストの辛子添え (2023〜2024年)・鮎の塩焼き、ゆでえび、たこ、もずく、このわた、からすみ (2022〜2025年)・かにの酢の物、焼きふぐ (2025年11月)',
    neighborhood: '中町通、丸太町の南。神宮丸太町から271m',
    gf_detail: 'グルテンフリーではない: しょうゆの握り、しょうゆのたれの煮物、あんかけのかぶら蒸し (2023〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚介の寿司屋で、鴨やかにの料理もある (2023〜2025年の口コミ)。',
    notes: '[寿司・丸太町、家族の町の寿司屋] 自由に頼める、温かくにぎわう家族の寿司カウンター。すだちで食べる白身の握り、好みの厚さに切る鯖寿司、かぶら蒸しや鴨など京都の季節の一品。15,000〜30,000円ほど。予約を。月曜休み。',
  });
}

// ================================================================ お食事処 相生
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26011260/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_aioi_okazaki', name: 'お食事処 相生 (Oshokuji-dokoro Aioi)', category: 'OMNI',
    lat: 35.014153, lng: 135.778533, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade wheat udon, soba, katsu and tempura bowls with soy-based dashi (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, egg-and-chicken bowls, cutlets and meat curry udon (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 11:00–14:00 and 17:00–20:00; closed Sunday; hours may change. No reservations; full at lunch and when events are on at Miyako Messe or ROHM Theatre — a 30-minute wait in October 2026. Cash only. SMOKING ALLOWED (Tabelog). 40 seats: seven tables for four and three raised tatami tables. Set meals in the evening too. Staff do their best in English (May 2026). Near Okazaki Park, 525 m from Higashiyama Station, 5 min from Miyako Messe.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, near Miyako Messe — 525 m from Higashiyama',
    cuisine: 'A Showa-era neighbourhood diner run by an elderly couple, serving handmade udon and soba with rice-bowl sets at around ¥1,000 (Tabelog; 2025–2026 reviews) · tempura-and-egg bowl set with udon or soba ¥1,100 (December 2025) · kinugasa-don (fried tofu and egg) with udon, sansho on the side (2025–2026) · kitsune-don with shippoku udon ¥1,100 (September 2026); mini kitsune-don with tanuki udon (February 2026) · katsudon and udon set; chicken nanban or chicken katsu set meals; daily set meal (2025–2026) · cold soba and inari ¥970; meat curry udon ¥670 (July 2026); udon with sukiyaki and rice (May 2026)',
    website: null, gmaps: gm('お食事処 相生 岡崎'), menu_url: null,
    notes: '[Shokudo · Okazaki, a Showa diner by Miyako Messe] A retro, always-busy local diner where an older couple serve handmade thin udon or flat soba with bowls of katsudon, kitsune-don or kinugasa-don, most sets around ¥1,000–1,100. Cash only. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed elderly couple)'], origin: null,
      background: 'A December 2025 reviewer describes kind, attentive service from an elderly couple and a long-loved room full of regulars; an August 2026 regular notes that many vegetables come from the owner\'s own garden in "Ikakura", and wall signs say the udon and soba are handmade (September 2026). Criticisms: an over-fried chicken nanban (December 2025), a light cold-soba dip and a mild curry udon (July 2026).',
      philosophy: null,
      specialty: 'Handmade udon and soba with rice-bowl sets.',
      anecdotes: [
        { text: 'December 2025: "The interior has a calm Japanese atmosphere, and the kind and attentive service from the elderly couple left a strong impression."', source: R + 'B518502766/' },
        { text: 'September 2026: "It\'s rare to find thin udon that\'s close to Inaniwa style. Since it\'s handmade, it has a nice chewiness, unlike the soft udon typical in Kyoto."', source: R + 'B535731457/' },
        { text: 'July 2026: "The dipping sauce for the cold soba was a bit on the light side… The curry udon had no spiciness at all!"', source: R + 'B537403714/' },
      ],
      japanese_sources_summary: '食べログ: お食事処 相生、食堂・うどん・そば、左京区岡崎徳成町15-14、東山から525m、月〜土11:00〜14:00・17:00〜20:00、日曜休み、予約不可、カード・電子マネー・QR不可、40席 (4人掛けテーブル7・小上がり3)、喫煙可。口コミ (2025年10月〜2026年10月、英語): みやこめっせ近くの昭和の食堂、年配の夫婦が営む (2025年12月)、手打ちのうどんとそば、天ぷらの玉子とじ丼セット1,100円、きぬがさ丼 (粉山椒付き)、きつね丼としっぽくうどん1,100円、カツ丼とうどん、チキン南蛮定食、チキンカツ定食、ざるそばといなり970円、肉カレーうどん670円、野菜は店主の「Ikakura」の畑から (2026年8月)、イベント時は30分待ち (2026年10月)、英語で頑張って対応。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B514780263', 'B517500921', 'B517944430', 'B518502766', 'B518675856', 'B518844079', 'B522008608', 'B529254832', 'B531462692', 'B535731457', 'B537403714', 'B538389392'])) },
    cultural_comfort: { level: 'japanese', note: 'Busy local diner; cash only; smoking allowed; staff try English.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区岡崎徳成町15-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014153, 135.778533); GSI lot 京都府京都市左京区岡崎徳成町15番地 about 16m away; nearest pin kyoto_karako_higashiyama_nijo 42.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518502766/', R + 'B535731457/', R + 'B537403714/'],
    price_note: 'Prices from December 2025 – September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura-and-egg bowl set with udon or soba', '¥1,100', 'Set meal', 'no', 'no', 'December 2025.', 'tentoji_set'),
      it('', '', 'Kitsune-don and shippoku udon set', '¥1,100', 'Set meal', 'no', 'no', 'September 2026.', 'kitsune_shippoku'),
      it('', '', 'Kinugasa-don with udon', '', 'Set meal', 'no', 'no', '2025–2026.', 'kinugasa_don'),
      it('', '', 'Cold soba and inari', '¥970', 'Noodles', 'no', 'no', 'July 2026.', 'zaru_inari'),
      it('', '', 'Meat curry udon', '¥670', 'Noodles', 'no', 'no', 'July 2026.', 'niku_curry_udon'),
    ] }, {
    cuisine: '年配の夫婦が営む昭和の町の食堂。手打ちのうどんとそばに丼を合わせたセットが1,000円ほど (食べログ、2025〜2026年の口コミ)・天ぷらの玉子とじ丼とうどんかそばのセット1,100円 (2025年12月)・粉山椒を添えたきぬがさ丼とうどん (2025〜2026年)・きつね丼としっぽくうどん1,100円 (2026年9月)、ミニきつね丼とたぬきうどん (2026年2月)・カツ丼とうどん、チキン南蛮やチキンカツの定食、日替わり定食 (2025〜2026年)・ざるそばといなり970円、肉カレーうどん670円 (2026年7月)、すき焼きのうどんとご飯 (2026年5月)',
    neighborhood: '岡崎、みやこめっせの近く。東山から525m',
    gf_detail: 'グルテンフリーではない: 手打ちの小麦のうどん、そば、カツや天ぷらの丼、しょうゆのだし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしのつゆ、卵と鶏の丼、カツ、肉カレーうどん (2025〜2026年の口コミ)。',
    notes: '[食堂・岡崎、みやこめっせ近くの昭和の食堂] いつもにぎわうレトロな町の食堂。年配の夫婦が手打ちの細いうどんや平打ちのそばに、カツ丼、きつね丼、きぬがさ丼を合わせ、セットはほとんど1,000〜1,100円。現金のみ。喫煙可。日曜休み。',
  });
}

// ================================================================ Il Vicoletto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044668/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '15:00'], D = ['18:00', '22:00'];
  put({
    id: 'kyoto_il_vicoletto', name: 'Il Vicoletto', category: 'OMNI',
    lat: 35.014927, lng: 135.760636, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include pasta, gnocchi and fried fish (May 2026); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, octopus, pork and meringue desserts (May 2026).',
    hours_raw: 'Tabelog: Tue–Sat, public holidays and days before/after holidays 12:00–15:00 and 18:00–22:00; Sun 12:00–15:00; closed Monday. Reservations only. Lunch course ¥8,800 (May 2026); dinner course with wine pairing under ¥20,000 (June 2026). 11 seats: 7 at the counter facing the kitchen, 4 at private tables. Non-smoking. Cards; no e-money or QR codes. Opened in 2026, down a back alley 205 m from Marutamachi Station.',
    hours: { 1: [L, D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D], 6: [L] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A back alley near Marutamachi — 205 m from the station',
    cuisine: 'A new 11-seat Italian counter serving seafood-leaning tasting courses, with the kitchen in view (Tabelog; May–June 2026 reviews) · lunch course ¥8,800: four-part antipasto with onion panna cotta; fried Spanish mackerel; octopus pasta in oil; lotus-root gnocchi in consommé; pork; strawberries and meringue (May 2026) · dinner course, with wine pairing under ¥20,000 (June 2026)',
    website: null, gmaps: gm('Il Vicoletto 京都 丸太町'), menu_url: null,
    notes: '[Italian · Marutamachi, a new alley counter] A tucked-away 11-seat Italian opened in 2026: watch the chefs at the counter as courses of fish, handmade pasta and pork come out. Lunch ¥8,800; dinner with wine pairing under ¥20,000. Reservations only. Closed Monday; Sunday lunch only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Newly opened in 2026 (May and June 2026 reviews); diners watch the chefs cook from the counter. Only two reviews so far; one May 2026 diner felt the lunch price could be a little lower.',
      philosophy: null,
      specialty: 'Italian tasting courses; seafood.',
      anecdotes: [
        { text: 'May 2026: "The appetizer was an assorted platter of four different dishes. The onion panna cotta, in particular, was sweet and delicious… However, since it was lunch, I felt it would have been even better if the price were a bit more reasonable."', source: R + 'B527467107/' },
        { text: 'June 2026: "The course menu, even with wine pairing, stays under JPY 20,000, which offers great satisfaction considering the quality."', source: R + 'B529431143/' },
      ],
      japanese_sources_summary: '食べログ: Il Vicoletto、イタリアン・イノベーティブ、中京区東九軒町331 1F、地下鉄丸太町駅から徒歩5分、火〜土・祝日・祝日の前日・祝日の翌日12:00〜15:00・18:00〜22:00、日12:00〜15:00、月曜休み、完全予約制、11席 (カウンター7・個室のテーブル4)、禁煙、カード可、電子マネー・QR不可、魚にこだわる。口コミ (2026年5〜6月、英語、2件): 路地の新しいイタリアン、昼のコース8,800円 (前菜4種と玉ねぎのパンナコッタ、鰆のフリット、たこのオイルパスタ、れんこんのニョッキのコンソメ、豚、いちごとメレンゲ)、夜はワインのペアリング込みで20,000円未満、カウンターで調理が見える、昼は少し高いとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B527467107', 'B529431143'])) },
    cultural_comfort: { level: 'friendly', note: 'Reservations only; counter view of the kitchen.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東九軒町331 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (new in 2026) with reviews dated May and June 2026.' },
    pin_source: `Tabelog ${TB} (35.014927, 135.760636); GSI lot 京都府京都市中京区東九軒町331番地 about 9m away; nearest pin kyoto_friandise_karasuma (hidden) 32.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527467107/', R + 'B529431143/'],
    price_note: 'Course prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥8,800', 'Course', 'no', 'no', 'May 2026.', 'lunch_course'),
      it('', '', 'Dinner course with wine pairing', 'under ¥20,000', 'Course', 'no', 'no', 'June 2026.', 'dinner_course'),
    ] }, {
    cuisine: 'キッチンが見える、2026年開店の11席のイタリアンのカウンター。魚介中心のコース (食べログ、2026年5〜6月の口コミ)・昼のコース8,800円: 玉ねぎのパンナコッタなど前菜4種、鰆のフリット、たこのオイルパスタ、れんこんのニョッキのコンソメ、豚、いちごとメレンゲ (2026年5月)・夜のコース、ワインのペアリング込みで20,000円未満 (2026年6月)',
    neighborhood: '丸太町近くの路地。駅から205m',
    gf_detail: 'グルテンフリーではない: コースにパスタ、ニョッキ、魚のフリット (2026年5月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚、たこ、豚、メレンゲのデザートのコース (2026年5月)。',
    notes: '[イタリアン・丸太町、路地の新しいカウンター] 2026年に開いた路地の奥の11席のイタリアン。カウンターで料理人の手元を見ながら、魚、手作りのパスタ、豚のコースを。昼8,800円、夜はワインのペアリング込みで20,000円未満。完全予約制。月曜休み、日曜は昼のみ。',
  });
}

// ================================================================ ilifune
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026218/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_ilifune', name: 'ilifune', category: 'OMNI',
    lat: 35.016798, lng: 135.768639, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta and a mostly Italian small-plate menu (2021–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: game meats (venison, wild boar), carpaccio, anchovy and heshiko dishes (2021–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sun and public holidays 18:00–25:00 (food L.O. 24:00, drinks 24:30); closed Tuesday and irregular days. Chef\'s omakase until 21:00 — full course ¥5,000, half ¥3,500 (book ahead; same-day course orders may not be possible); à la carte all night, and only à la carte after 21:00. Seat charge 「お一人様 ¥300」 (¥300 per person, Tabelog Japanese original). 14 seats: 6 at the counter, 8 at tables. No smoking until 22:00, then heated tobacco only. Cards; no e-money or QR codes. 1 min from the Kawaramachi-Marutamachi bus stop; 3 min from Jingu-Marutamachi.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Marutamachi — 3 min from Jingu-Marutamachi',
    cuisine: 'A late-opening casual Italian specialising in wild game, with an affordable chef\'s omakase and a drinker\'s à la carte (Tabelog; 2021–2026 reviews) · omakase until 21:00: full ¥5,000, half (five dishes) ¥3,500 (2024–2025) · venison and wild boar, mild and tender; dishes pairing fruit with the main ingredient (2024–2025) · white mapo tofu made with game; dishes from the owner\'s home prefecture, Oita (July 2025) · anchovy cabbage; heshiko with cream cheese (May 2026) · carpaccio; pasta (August 2026)',
    website: null, gmaps: gm('ilifune 河原町丸太町'), menu_url: null,
    notes: '[Italian · Kawaramachi-Marutamachi, wild game till 1 am] A relaxed counter-and-tables Italian known for gentle, non-gamey venison and boar: a five-dish half omakase for ¥3,500 early on, then drinker\'s plates like anchovy cabbage and heshiko cream cheese until late. ¥300 seat charge. About ¥3,500–6,000. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; from Oita)'], origin: 'Oita',
      background: 'A July 2025 reviewer notes the menu mixes Italian and European cooking with Chinese dishes and specialities from the owner\'s hometown of Oita. Reviewers praise staff who explain each game meat and suggest easy ones for beginners (October 2021), shared plates portioned for the group, and good wine suggestions (2025).',
      philosophy: null,
      specialty: 'Wild-game Italian; omakase.',
      anecdotes: [
        { text: 'June 2024: "The half course with 5 dishes for JPY 3500 is more than enough to fill you up. I thought the game meat might have a strong taste, but the boar meat I tried was completely odorless, even the fat."', source: R + 'B487591458/' },
        { text: 'July 2025: "One unique dish was the white mapo tofu made with game meat. While the menu primarily features Italian and European cuisine, there are also Chinese dishes and specialties from the owner\'s hometown of Oita."', source: R + 'B510766252/' },
        { text: 'May 2026: "This Italian restaurant is rare in the area for staying open late… like anchovy cabbage and heshiko cream cheese."', source: R + 'B530386629/' },
      ],
      japanese_sources_summary: '食べログ: ilifune、イタリアン・ジビエ・パスタ、上京区東土御門町347、神宮丸太町から徒歩3分、河原町丸太町から1分、月・水〜日・祝日18:00〜25:00 (料理L.O.24:00)、火曜休み、不定休、おまかせコース (フル5,000円・ハーフ3,500円、21時まで)、アラカルトあり、チャージ「お一人様 ¥300」、14席 (カウンター6・テーブル8)、22時までは禁煙、その後は加熱式たばこのみ、カード可。口コミ (2017年〜2026年8月、英語): ジビエのイタリアン、臭みのない鹿や猪、ハーフコース5品3,500円、果物と合わせた料理、ジビエの白い麻婆豆腐、店主の故郷の大分の料理 (2025年7月)、アンチョビキャベツ、へしことクリームチーズ、カルパッチョ、パスタ、遅くまで開いている。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B445361791', 'B470305073', 'B487591458', 'B495275283', 'B510766252', 'B515598609', 'B518031132', 'B529313099', 'B530386629', 'B533525899'])) },
    cultural_comfort: { level: 'friendly', note: 'Staff explain the game meats; ¥300 seat charge; heated tobacco after 22:00.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区東土御門町347',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.016798, 135.768639); GSI lot 京都府京都市上京区東土御門町347番地 about 21m away; nearest pin kyoto_le_14e_marutamachi 44.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B487591458/', R + 'B530386629/'],
    price_note: 'Course prices from Tabelog (until 21:00); ¥300 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase full course', '¥5,000', 'Course', 'no', 'no', 'Tabelog listing; until 21:00.', 'omakase_full'),
      it('', '', 'Omakase half course (5 dishes)', '¥3,500', 'Course', 'no', 'no', 'Tabelog listing; 2024–2025 reviews.', 'omakase_half'),
      it('', '', 'Game meat (venison or wild boar)', '', 'Main', 'ask', 'no', '2024–2025.', 'gibier'),
      it('', '', 'Heshiko with cream cheese', '', 'Small plate', 'ask', 'no', 'May 2026.', 'heshiko_cheese'),
    ] }, {
    cuisine: '夜遅くまで開くジビエが得意な気軽なイタリアン。手頃なおまかせと、飲む人向けのアラカルト (食べログ、2021〜2026年の口コミ)・21時までのおまかせ: フル5,000円、ハーフ (5品) 3,500円 (2024〜2025年)・臭みがなく柔らかい鹿と猪、主素材に果物を合わせた料理 (2024〜2025年)・ジビエの白い麻婆豆腐、店主の故郷の大分の料理 (2025年7月)・アンチョビキャベツ、へしことクリームチーズ (2026年5月)・カルパッチョ、パスタ (2026年8月)',
    neighborhood: '河原町丸太町。神宮丸太町から徒歩3分',
    gf_detail: 'グルテンフリーではない: パスタと、イタリアン中心の小皿 (2021〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 鹿や猪のジビエ、カルパッチョ、アンチョビやへしこの料理 (2021〜2026年の口コミ)。',
    notes: '[イタリアン・河原町丸太町、夜1時までジビエ] カウンターとテーブルの気軽なイタリアン。臭みのない鹿や猪が評判で、早い時間は5品3,500円のハーフのおまかせ、遅くまでアンチョビキャベツやへしことクリームチーズなど飲む人向けの皿。チャージ300円。3,500〜6,000円ほど。火曜休み。',
  });
}

save();
