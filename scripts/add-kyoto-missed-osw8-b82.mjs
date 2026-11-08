// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 82 (2026-11-08).
//   + 26ダイニング COCON KARASUMA店 26 Dining (Kyoto-producer izakaya and daytime soba, Shijo-Karasuma; rest)
//   + 祇園円山 かがり火 Gion Maruyama Kagaribi (yudofu and sukiyaki in Maruyama Park; rest)
//   + やまだるま Yamadaruma (sake and fish izakaya with cheap lunches, Karasuma-Rokkaku basement; rest)
//   + bake and treat (bakery café in a townhouse, Karasuma-Nishiki; rest)
//   Rest list (mod 6 = 1) after batch 81, nearest-first — skipped:
//   - クリスピー クリーム ドーナツ コトチカ四条店 26031979: chain.
//   Brand check: queue-status.jsonl grepped for 26ダイニング, かがり火, やまだるま, Bake&Treat — no entries. 26ダイニング is run by the
//   Yojiya group (2026 reviews), a Kyoto company with cafés; two 26ダイニング shops in our crawls — drafted as a local group's
//   concept, flagged. やまだるま has one sister, 京都七条焼肉酒場 やまだるま — small, drafted. None of the four is in data (main
//   2fa1905a, hidden records included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26031979/', 'chain: Krispy Kreme Doughnuts');

// ================================================================ 26ダイニング COCON KARASUMA店 26 Dining
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043787/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.26dining-kyoto.com/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_26_dining_cocon_karasuma', name: '26ダイニング COCON KARASUMA店 (26 Dining)', category: 'OMNI',
    lat: 35.00312945787061, lng: 135.75943643034378, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soba (domestic wheat with buckwheat), tempura, karaage and chikuwa (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto vegetables and tofu feature, e.g. steamed seasonal vegetables, but oden and most plates use dashi, chicken or pork (2026 reviews).',
    hours_raw: 'Daily 15:00–23:00 (last order 22:00) (Tabelog); reviewers describe soba by day, with meal tickets bought first, and an izakaya at night (June–September 2026). Reservations accepted; a booking is cancelled if no contact 30 minutes after the time (Tabelog). Charge ¥550 incl. tax (Tabelog original チャージ料550円（税込み）). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 32 seats: 8 at the counter, 14 at tables, a private room for 10 (Tabelog). Non-smoking; smoking area nearby (Tabelog). COCON KARASUMA B1F, linked to Hankyu Karasuma and Shijo Stns (Tabelog). Opened 26 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, COCON KARASUMA B1F',
    cuisine: 'Izakaya of ingredients and sake from Kyoto Prefecture\'s 26 municipalities, by the Yojiya group (2026 reviews) · chilled oden of a whole tomato, Kyotanba pork with crunchy vegetables ¥880, steamed seasonal vegetables ¥1,080, white chikuwa ¥580, pon-karaage of Kyoto chicken ¥720, chicken sashimi, corn-silk tempura, eggplant tempura and shrimp kakiage (July–September 2026) · daytime zaru soba of domestic buckwheat and wheat (September 2026) · courses about ¥4,500; ASOBI pale ale and Kyoto sake (2026 reviews) · about ¥3,000–6,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('26ダイニング COCON KARASUMA'), menu_url: null,
    notes: '[Kyoto-producer izakaya · Shijo-Karasuma, COCON B1F] A stylish basement izakaya built around produce, chicken, pork and sake from all 26 municipalities of Kyoto Prefecture: steamed vegetables, whole-tomato oden, Tanba pork, chicken sashimi and tempura. Soba by day. ¥550 charge. Some found it pricey for the portions.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: opened 26 November 2025 in COCON KARASUMA; a concept of the Yojiya group named for Kyoto Prefecture\'s 26 cities and towns, with menus that introduce the producers (May–September 2026). Our crawls hold a second 26ダイニング near Kyoto City Hall.',
      philosophy: 'Ingredients and sake from Kyoto Prefecture\'s producers (2026 reviews).', specialty: 'Steamed Kyoto vegetables; Tanba pork oden.',
      anecdotes: [
        { text: 'A September 2026 visitor noticed magnets at the entrance marking where each ingredient came from, and a menu cover of fragrant Kyoto wood.', source: R + 'B534845092/' },
        { text: 'An August 2026 diner on the ¥4,500 course found the stream of small plates more than enough.', source: R + 'B534443382/' },
        { text: 'A May 2026 guest found the taste average and the Kyoto vegetables ordinary for the price.', source: R + 'B528158587/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん・天ぷら、下京区水銀屋町620 COCON KARASUMA B1F、阪急烏丸駅23・25番出口と地下鉄四条駅2番出口直結、毎日 15:00〜23:00 (L.O.22:00)、予約可 (30分連絡なしはキャンセル)、チャージ料550円 (税込)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、32席 (カウンター8、テーブル14、個室10)、禁煙 (近くに喫煙所)、2025年11月26日開店、公式サイトあり。口コミ (2025年12月〜2026年10月、英語): Yojiya グループ、京都府の26市町村にちなむ名前、京都の生産者の食材と酒、トマト丸ごとの冷やしおでん、京丹波の豚とシャキシャキ野菜880円、季節の蒸し野菜1,080円、白ちくわ580円、京の鶏のポン唐揚げ720円、鶏の刺身、とうもろこしのひげの天ぷら、なすの天ぷら、海老のかき揚げ、昼は国産のそば、コース4,500円、ASOBI ペールエール、値段のわりに普通との声 (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B518333775/', R + 'B528158587/', R + 'B528823323/', R + 'B530206989/', R + 'B532089200/', R + 'B532445403/', R + 'B534443382/', R + 'B534516967/', R + 'B534845092/', R + 'B535796447/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥550 charge; non-smoking; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区水銀屋町620 COCON KARASUMA B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003129, 135.759436); cross-checked: GSI 京都府京都市下京区水銀屋町620番地 (lot) 14 m; nearest existing record 27.4 m (kyoto_old_hong_kong_restaurant, same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534516967/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kyotanba pork with crunchy vegetables', '¥880', 'Small plates', 'ask', 'no', 'August 2026.', 'tanba_pork'),
      it('', '', 'Steamed seasonal vegetables', '¥1,080', 'Small plates', 'ask', 'ask', 'August 2026.', 'steamed_veg'),
      it('', '', 'Pon-karaage of Kyoto chicken', '¥720', 'Small plates', 'no', 'no', 'August 2026.', 'karaage'),
    ] }, {
    cuisine: 'Yojiya グループの、京都府26市町村の食材と酒の居酒屋 (2026年の口コミ)・トマト丸ごとの冷やしおでん、京丹波の豚とシャキシャキ野菜880円、季節の蒸し野菜1,080円、白ちくわ580円、京の鶏のポン唐揚げ720円、鶏の刺身、とうもろこしのひげの天ぷら、なすの天ぷら、海老のかき揚げ (2026年7〜9月)・昼は国産のそば粉と小麦のざるそば (2026年9月)・コース4,500円ほど、ASOBI ペールエール、京都の酒 (2026年の口コミ)・3,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸、COCON KARASUMA 地下1階',
    gf_detail: 'グルテンフリー不可。そば (国産のそば粉と小麦)、天ぷら、唐揚げ、ちくわ (2026年の口コミ)。',
    vegan_detail: '要確認。京野菜と豆腐が多く、季節の蒸し野菜もあるが、おでんなど多くはだし、鶏、豚を使う (2026年の口コミ)。',
    notes: '[京都の生産者の居酒屋・四条烏丸、COCON 地下] 京都府の全26市町村の野菜、鶏、豚、酒を使うおしゃれな地下の居酒屋。蒸し野菜、トマト丸ごとのおでん、丹波の豚、鶏の刺身、天ぷら。昼はそば。チャージ550円。量のわりに高いという声も。',
  });
}

// ================================================================ 祇園円山 かがり火 Gion Maruyama Kagaribi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001967/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.gion-kagaribi.com/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_gion_maruyama_kagaribi', name: '祇園円山 かがり火 (Gion Maruyama Kagaribi)', category: 'OMNI',
    lat: 35.00503392787541, lng: 135.77834390034977, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu is tofu in hot water, but it comes with ponzu, and sukiyaki uses a soy-sugar sauce; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Yudofu is tofu, served with green onion and ponzu (February 2024); the dashi and the rest of the course may not be plant-based.',
    hours_raw: 'Daily 11:00–21:00; closing days irregular (Tabelog). Reservations accepted; often booked out by groups (Tabelog; February and May 2024). Cards (JCB, AMEX, Diners) (Tabelog). 200 seats in tatami rooms; private rooms and private hire (Tabelog). Inside Maruyama Park, north of the city car park, near Yasaka Shrine; entered past a large lantern (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, by Yasaka Shrine',
    cuisine: 'Yudofu, sukiyaki and eel in tatami rooms in Maruyama Park (Tabelog; 2024–2026 reviews) · yudofu of about a block of tofu each with green onion and ponzu; sukiyaki courses of well-marbled beef with grilled tofu, napa cabbage, bean sprouts and green onion in a sweet sauce, dipped in egg; a sweet to finish (February 2024–October 2026) · about ¥4,000–8,000 (Tabelog; 2024–2025 reviews)',
    website: WEB, gmaps: gm('祇園円山 かがり火'), menu_url: null,
    notes: '[Yudofu and sukiyaki · Maruyama Park] A large tatami restaurant in the greenery of Maruyama Park, reached past a big lantern: Kyoto yudofu lunches and sukiyaki courses of good beef, popular with tour groups and business lunches. Book ahead. One 2024 visitor found the yudofu plain.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a 200-seat restaurant of tofu dishes, sukiyaki and eel in Maruyama Park, used by tour groups, company gatherings and business lunches (2017–2026 reviews).',
      philosophy: null, specialty: 'Yudofu; sukiyaki.',
      anecdotes: [
        { text: 'A September 2026 business-lunch guest came in past the large lantern for sukiyaki dipped in egg in a quiet tatami room.', source: R + 'B535349883/' },
        { text: 'An October 2026 company meeting had yudofu for lunch, then a stroll in Maruyama Park before work.', source: R + 'B538145247/' },
        { text: 'A February 2024 tour-group diner found a generous block of tofu each but only green onion and ponzu to season it.', source: R + 'B479487420/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理・すき焼き・うなぎ、東山区円山公園市営駐車場北 祇園町北側350、毎日 11:00〜21:00、不定休、予約可、カード (JCB・AMEX・Diners) 可、200席、座敷、個室、貸切可、公式サイトあり。口コミ (2017年4月〜2026年10月、英語): 円山公園の緑の中、大きな提灯をくぐって入る、団体の予約で満席のことも、湯豆腐 (ひとり豆腐1丁ほど、ねぎとポン酢)、すき焼きのコース (霜降りの牛肉、焼き豆腐、白菜、もやし、ねぎ、甘い割下、卵)、最後に甘味、会社の会合や商談の昼食に、湯豆腐の味が単調だったとの声 (2024年2月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B265250049/', R + 'B479487420/', R + 'B485214370/', R + 'B499892956/', R + 'B499911408/', R + 'B500273876/', R + 'B535349883/', R + 'B538145247/', R + 'B538482521/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tatami rooms; book ahead; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区円山公園市営駐車場北祇園町北側350',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005034, 135.778344); GSI resolves 祇園町北側350 only to the ward (109 m), so the Tabelog pin is kept; nearest existing record 34.9 m (ChIJRfX-EbQJAWARggCjwthBbCY); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535349883/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki course', '', 'Courses', 'no', 'no', '2024–2026 reviews.', 'sukiyaki'),
      it('', '', 'Yudofu', '', 'Tofu', 'ask', 'ask', 'February 2024; October 2026.', 'yudofu'),
    ] }, {
    cuisine: '円山公園の座敷で湯豆腐、すき焼き、うなぎ (食べログ、2024〜2026年の口コミ)・ひとり豆腐1丁ほどの湯豆腐とねぎ・ポン酢、霜降りの牛肉に焼き豆腐、白菜、もやし、ねぎの甘い割下のすき焼きのコースを卵で、最後に甘味 (2024年2月〜2026年10月)・4,000〜8,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '円山公園、八坂神社のそば',
    gf_detail: '要確認。湯豆腐は湯で温めた豆腐だがポン酢を添え、すき焼きは醤油と砂糖の割下。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。湯豆腐は豆腐にねぎとポン酢 (2024年2月)。だしやコースのほかの料理は植物性でない可能性。',
    notes: '[湯豆腐とすき焼き・円山公園] 大きな提灯をくぐる、円山公園の緑の中の大きな座敷の店。京の湯豆腐の昼食や、よい牛肉のすき焼きのコースで、団体客や商談の昼に人気。予約がおすすめ。2024年には湯豆腐が単調という声も。',
  });
}

// ================================================================ やまだるま Yamadaruma
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004367/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:30'], ['17:00', '23:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yamadaruma_rokkaku', name: 'やまだるま (Yamadaruma)', category: 'OMNI',
    lat: 35.00734064699137, lng: 135.76044247463156, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: katsudon, karaage and ginger-pork sets at lunch, soy-based plates at night (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, firefly squid and pork or chicken lunch sets (2025–2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–13:30 (last order 13:30) and 17:00–23:00 (last order 22:30); Saturday 17:00–23:00 (Tabelog). Tabelog also lists Sunday 17:00–23:00 but gives Sunday as the closing day (and Monday when it is a holiday), so Sunday is left out here. Lunch not bookable; dinner reservations accepted (Tabelog). Appetizer ¥330, not on course bookings (Tabelog original 付きだし330円(コース予約除く)). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, d Barai); no e-money (Tabelog). 38 seats (Tabelog). Smoking allowed, including at lunch; some seats can be non-smoking (Tabelog; October 2026). Basement of the Daiki Rokkaku building, Rokkaku east of Karasuma; 4 min walk from Karasuma-Oike Stn (Tabelog; December 2024).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Rokkaku, basement',
    cuisine: 'Basement izakaya of fish and sake by the glass, with cheap weekday lunches (Tabelog; 2024–2026 reviews) · lunch sets around ¥850–900 with free refills of rice and miso soup: katsudon, katsuni, ginger pork, karaage, a daily special such as chicken with sansho (February–November 2026) · at night: sashimi platters, dashimaki, an obanzai platter, firefly squid, octopus in vinegar; many sakes by the glass (April 2025; October 2026) · lunch under ¥1,000, dinner about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('やまだるま 烏丸六角'), menu_url: null,
    notes: '[Izakaya · Karasuma-Rokkaku basement] A smoke-friendly basement izakaya near Karasuma: weekday lunch sets of katsudon or the daily special for about ¥900 with unlimited rice, and at night sashimi, dashimaki and a long list of sake by the glass. ¥330 appetizer. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a basement izakaya of fish and Japanese sake on Rokkaku east of Karasuma, popular for value weekday lunches, with smoking allowed (2024–2026 reviews). Our crawls hold a sister, 京都七条焼肉酒場 やまだるま.',
      philosophy: null, specialty: 'Katsudon lunch set; sake by the glass.',
      anecdotes: [
        { text: 'A November 2026 regular praised the ¥900 katsudon set with a salad and all-you-can-eat rice and miso soup.', source: R + 'B509786405/' },
        { text: 'An April 2025 smoker came looking for an izakaya where smoking is still allowed, and found the food safe and tasty.', source: R + 'B506010167/' },
        { text: 'An October 2026 lunch guest was impressed by the value of the daily set, though the smoke clung to a suit.', source: R + 'B538245358/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・日本酒バー、中京区烏丸六角東入堂之前町230-2 大輝六角ビル B1F、月〜金 11:30〜13:30 (L.O.13:30)、17:00〜23:00 (L.O.22:30)、土 17:00〜23:00、日曜も記載あるが定休日は日曜 (月曜祝日の場合は月曜)、昼の予約は不可、付きだし330円 (コース予約除く)、カード (VISA・Master・JCB・AMEX・Diners)・QR (PayPay・d払い) 可、電子マネー不可、38席、喫煙可 (一部禁煙可)。口コミ (2024年12月〜2026年11月、英語): 地下の居酒屋、平日の昼の定食 (かつ丼、かつ煮、豚の生姜焼き、唐揚げ、日替わり) 850〜900円、ご飯と味噌汁のおかわり自由、夜は刺身の盛り合わせ、だし巻き、おばんざいの盛り合わせ、ほたるいか、たこ酢、グラスの日本酒が豊富、昼も喫煙可で服ににおいがつく (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B497693593/', R + 'B504363638/', R + 'B506010167/', R + 'B509786405/', R + 'B522395342/', R + 'B526076292/', R + 'B533890737/', R + 'B533943992/', R + 'B538245358/', R + 'B538568082/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; lunch not bookable; ¥330 appetizer at night; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸六角東入堂之前町230-2 大輝六角ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007341, 135.760442); cross-checked: GSI 京都府京都市中京区堂之前町230番地 (lot) 41 m; nearest existing record 28.3 m (kyoto_mashiro_rokkaku); kyoto_kazamidori_karasuma_rokkaku (same building, 1F) is 30.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526076292/', R + 'B522395342/', TB],
    price_note: 'Prices from February and April 2026 reviews; appetizer from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Katsudon lunch set', '¥900', 'Lunch', 'no', 'no', 'April 2026; rice and miso soup refills free.', 'katsudon'),
      it('', '', 'Daily lunch set', '¥850', 'Lunch', 'ask', 'no', 'February 2026.', 'daily'),
      it('', '', 'Appetizer (not on courses)', '¥330', 'Charge', 'ask', 'no', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: '魚と日本酒の地下の居酒屋で、平日の昼は安い定食 (食べログ、2024〜2026年の口コミ)・ご飯と味噌汁おかわり自由の850〜900円ほどの定食: かつ丼、かつ煮、豚の生姜焼き、唐揚げ、山椒の鶏などの日替わり (2026年2〜11月)・夜は刺身の盛り合わせ、だし巻き、おばんざいの盛り合わせ、ほたるいか、たこ酢、グラスの日本酒が豊富 (2025年4月、2026年10月)・昼1,000円未満、夜3,000〜5,000円ほど (食べログ)',
    neighborhood: '烏丸六角、地下',
    gf_detail: 'グルテンフリー不可。昼のかつ丼、唐揚げ、生姜焼き、夜の醤油味の料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、ほたるいか、豚や鶏の定食 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・烏丸六角の地下] 烏丸近くの喫煙できる地下の居酒屋。平日の昼はご飯おかわり自由で900円ほどのかつ丼や日替わりの定食、夜は刺身、だし巻き、グラスで選べる豊富な日本酒。付きだし330円。日曜休み。',
  });
}

// ================================================================ bake and treat
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042365/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.bakeandtreat.com/';
  const H = day(['09:00', '22:00']);
  put({
    id: 'kyoto_bake_and_treat', name: 'bake and treat', category: 'OMNI',
    lat: 35.00486503786937, lng: 135.75903928036158, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sandwiches, Basque cheesecake, carrot cake, tiramisu and granola (September–October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheesecakes, cream cakes and yogurt (September 2026).',
    hours_raw: 'Daily 9:00–22:00 (last order 21:30); closing days irregular; hours may change (Tabelog). No reservations (Tabelog). Cards, e-money and QR (Tabelog). Counter and table seats in a wooden townhouse interior with a small garden at the back (September–October 2026). A 5 min walk from Shijo-Karasuma, on Nishikikoji west of Karasuma (Tabelog; September 2026). Opened 13 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Nishiki, west of Karasuma',
    cuisine: 'All-day café of homemade sweets and sandwiches in a townhouse (2026 reviews) · breakfast of granola and yogurt; light sandwiches on bread from 968 with tomato sauce (September 2026) · Basque cheesecake including pumpkin, frozen two-layer tiramisu, carrot cake with fresh cream, kakigori glass parfaits such as mango (September–October 2026) · flat white and American coffee (September 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('bake and treat 京都'), menu_url: null,
    notes: '[Café · Karasuma-Nishiki, townhouse, 9 a.m.–10 p.m.] A warm wooden townhouse café near Shijo-Karasuma open from breakfast to late evening: granola and sandwiches in the morning, then Basque cheesecakes, frozen tiramisu, carrot cake and kakigori parfaits with a flat white, looking onto a small garden.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a café opened 13 December 2024 in a renovated townhouse near Shijo-Karasuma, specialising in homemade sweets and sandwiches (September–October 2026).',
      philosophy: null, specialty: 'Basque cheesecake; sandwiches.',
      anecdotes: [
        { text: 'A September 2026 visitor, recovering from a health check, had a light sandwich on bread from 968, a rare flat white and a mild carrot cake made with fresh cream.', source: R + 'B534992179/' },
        { text: 'A September 2026 pair shared the frozen tiramisu — crunchy then fluffy — and a caramelised Basque cheesecake with American coffee.', source: R + 'B536324071/' },
        { text: 'A September 2026 guest, curious since it opened two years before, had a mango kakigori glass parfait by the window onto the garden.', source: R + 'B538421932/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区占出山町314-2、毎日 9:00〜22:00 (L.O.21:30)、不定休、予約不可、カード・電子マネー・QR 可、2024年12月13日開店、公式サイトあり。口コミ (2026年9月〜10月、英語): 町家を生かした木のぬくもりの店内、奥に小さな庭、カウンターとテーブル席、手作りの菓子とサンドイッチ、朝はグラノーラとヨーグルト、968 のパンのサンドイッチとトマトソース、バスクチーズケーキ (かぼちゃも)、フローズンティラミス、生クリームのキャロットケーキ、マンゴーのかき氷のグラスパフェ、フラットホワイト、アメリカンコーヒー、四条烏丸から徒歩5分。',
      confidence: 'medium', sources: [TB, WEB, R + 'B534941594/', R + 'B534992179/', R + 'B535615250/', R + 'B535965763/', R + 'B536033339/', R + 'B536324071/', R + 'B536392568/', R + 'B536961207/', R + 'B538421932/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open from breakfast to evening; no reservations; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区占出山町314-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004865, 135.759039); cross-checked: GSI 京都府京都市中京区占出山町314番地 (lot) 22 m; nearest existing record 15.3 m (kyoto_manmaru_no_tsuki); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536324071/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Basque cheesecake', '', 'Sweets', 'no', 'no', 'September–October 2026.', 'basque'),
      it('', '', 'Frozen tiramisu', '', 'Sweets', 'no', 'no', 'September 2026.', 'tiramisu'),
    ] }, {
    cuisine: '町家の、手作りの菓子とサンドイッチの一日中開いているカフェ (2026年の口コミ)・朝のグラノーラとヨーグルト、968 のパンにトマトソースの軽いサンドイッチ (2026年9月)・かぼちゃなどのバスクチーズケーキ、2層のフローズンティラミス、生クリームのキャロットケーキ、マンゴーなどかき氷のグラスパフェ (2026年9〜10月)・フラットホワイト、アメリカンコーヒー (2026年9月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '烏丸錦、烏丸の西',
    gf_detail: 'グルテンフリー不可。サンドイッチ、バスクチーズケーキ、キャロットケーキ、ティラミス、グラノーラ (2026年9〜10月)。',
    vegan_detail: 'ヴィーガン不可。チーズケーキ、生クリームのケーキ、ヨーグルト (2026年9月)。',
    notes: '[カフェ・烏丸錦、町家、朝9時〜夜10時] 四条烏丸近くの、朝から夜まで開く木のぬくもりの町家カフェ。朝はグラノーラやサンドイッチ、その後はバスクチーズケーキ、フローズンティラミス、キャロットケーキ、かき氷のパフェをフラットホワイトとともに、小さな庭を眺めながら。',
  });
}

save();
