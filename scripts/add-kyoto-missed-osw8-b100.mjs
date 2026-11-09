// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 100 (2026-11-08).
//   + 茶ろん 瑞庵 Salon Zuian (kakigori and Japanese sweets café by Heian Shrine's great torii; rest)
//   + しゃぶしゃぶ･すきやき かおる Shabushabu Sukiyaki Kaoru (wagyu and sea-bream shabu-shabu, Aneyakoji-Aburakoji; rest)
//   + 鰻割烹まえはら Unagi Kappou Maehara (eel kappo with unagi shabu-shabu, Ryogaemachi-Nijo; rest)
//   + ポルトガル料理 ビバリオ VIVARIO (Portuguese restaurant, Kawaramachi-Marutamachi; rest)
//   + きん安 Kin Yasu (neighbourhood set-meal and izakaya house, Takeyamachi-Ainomachi; rest)
//   Rest list (mod 6 = 1) after batch 99, nearest-first — skipped:
//   - おるぼーんパートII 26043151: thin listing (no reviews).
//   - 小倉山荘 平安神宮前店 26018167: chain — 小倉山荘 lists about 45 shops, around 20 directly run
//     (ogurasansou.jp.net/store, 2026-11-08); also a retail rice-cracker shop.
//   - 楽膳柿沼 26042341: thin listing (4 reviews).
//   (ステーキハウス 听 京都本店 26022499 sits in the lane but 听 is already ruled a chain — left for the queue's next pass.)
//   Flag: かおる's invoice number belongs to 株式会社バルテック, a Tokyo company (NTA register); its other restaurants were not
//   found in a search — drafted; please confirm it is not a large parent.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the five is in data
//   (main 387909ee, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-100');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26043151/', 'thin listing: no reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26018167/', 'chain: 小倉山荘 — about 45 shops listed, around 20 directly run (ogurasansou.jp.net/store, 2026-11-08); also a retail rice-cracker shop');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26042341/', 'thin listing: 4 reviews');

// ================================================================ 茶ろん 瑞庵 Salon Zuian
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001745/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '17:00']); const WE = day(['11:00', '18:00']);
  put({
    id: 'kyoto_saron_zuian_okazaki', name: '茶ろん 瑞庵 (Salon Zuian)', category: 'OMNI',
    lat: 35.011434547872696, lng: 135.78255835041145, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kakigori with matcha and red beans and shiratama may suit, but somen and lunch dishes contain wheat; no gluten information (2024–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kuromitsu kintoki ice and plain matcha may suit; many ices and shakes use condensed milk or ice cream (2024–2025 reviews).',
    hours_raw: 'Monday–Friday 10:00–17:00; Saturday, Sunday and holidays 11:00–18:00; open all year; a lunch in a Japanese-style room 11:00–15:00 of a meal, sweets and matcha for ¥4,000 (Tabelog). Reservations accepted (Tabelog). No cards; QR accepted (Tabelog). Smoking allowed (Tabelog). By the great torii of Heian Shrine, a few minutes from the Kyocera Museum of Art (2024–2025 reviews).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, by Heian Shrine',
    cuisine: 'Japanese-sweets café and tea salon near Okazaki’s museums (2022–2025 reviews) · kakigori: Uji cream kintoki ¥1,100, kuromitsu kintoki ¥880, strawberry with shiratama; Uji kintoki with free extra condensed milk (August 2024; June 2025) · matcha shiratama shake ¥770, kinako drinks, coffee, zenzai (May 2022–September 2025) · somen ¥935, ¥1,100 with a drink (May 2024) · Japanese-room lunch of a meal, sweets and matcha ¥4,000 (Tabelog) · under ¥1,000–2,000 (Tabelog)',
    website: 'http://www.a-dos.ne.jp/map/sakyo/zuian/', gmaps: gm('茶ろん 瑞庵 岡崎'), menu_url: null,
    notes: '[Japanese sweets · by Heian Shrine] A quiet, friendly tea salon beside the great torii: classic crunchy kakigori such as Uji cream kintoki, matcha shiratama shakes and good coffee, plus somen and a ¥4,000 tatami-room lunch. Handy after the Kyocera Museum. Open all year; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a quieter Japanese café by the large torii of Heian Shrine, with friendly staff and classic kakigori, a favourite break for visitors to the Kyocera Museum of Art and the shrine (2022–2025 reviews).',
      philosophy: null, specialty: 'Kakigori; matcha drinks.',
      anecdotes: [
        { text: 'A July 2022 museum-goer waiting for a timed Pompeii tour found classic crunchy shaved ice, unlike the pricey fluffy kind around Gion.', source: R + 'B451280302/' },
        { text: 'A June 2025 visitor after Heian Shrine was pleased to be offered extra condensed milk free on the Uji kintoki.', source: R + 'B508113635/' },
        { text: 'A September 2025 friend recommended it as quieter than the popular cafés nearby; the matcha shiratama shake did not disappoint.', source: R + 'B514918364/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処・カフェ、左京区岡崎円勝寺町140-5、東山駅から364m、月〜金 10:00〜17:00、土・日・祝日 11:00〜18:00、年中無休、座敷のランチ 11:00〜15:00 (食事・甘味・抹茶で4,000円)、予約可、カード不可、QR 可、喫煙可。口コミ (2022年5月〜2025年9月、英語): 平安神宮の大鳥居のそば、京セラ美術館の近く、宇治クリーム金時1,100円、黒蜜金時880円、いちごのかき氷 (白玉)、練乳の追加は無料 (2025年6月)、抹茶白玉シェイク770円、コーヒー、ぜんざい、そうめん935円 (飲み物セット1,100円)、親切なスタッフ、静か。',
      confidence: 'medium', sources: [TB, R + 'B449573008/', R + 'B451280302/', R + 'B477496379/', R + 'B484530099/', R + 'B485903328/', R + 'B487783684/', R + 'B490985483/', R + 'B508113635/', R + 'B514918364/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No cards (QR OK); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町140-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2025.' },
    pin_source: `Tabelog ${TB} (35.011435, 135.782558); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町140番地 (lot) 33 m; nearest existing record 23.4 m (kyoto_ristorante_dono); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490985483/', R + 'B514918364/'],
    price_note: 'Prices from August 2024 and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Uji cream kintoki kakigori', '¥1,100', 'Kakigori', 'ask', 'no', 'August 2024.', 'ujikintoki'),
      it('', '', 'Kuromitsu kintoki kakigori', '¥880', 'Kakigori', 'ask', 'ask', 'August 2024.', 'kuromitsu'),
      it('', '', 'Matcha shiratama shake', '¥770', 'Drinks', 'ask', 'no', 'September 2025.', 'shake'),
    ] }, {
    cuisine: '岡崎の美術館近くの甘味処と茶房 (2022〜2025年の口コミ)・かき氷: 宇治クリーム金時1,100円、黒蜜金時880円、白玉のいちご、宇治金時は練乳の追加が無料 (2024年8月、2025年6月)・抹茶白玉シェイク770円、きなこの飲み物、コーヒー、ぜんざい (2022年5月〜2025年9月)・そうめん935円、飲み物付き1,100円 (2024年5月)・座敷のランチ (食事・甘味・抹茶) 4,000円 (食べログ)・1,000〜2,000円未満 (食べログ)',
    neighborhood: '岡崎、平安神宮のそば',
    gf_detail: '要確認。抹茶とあずき、白玉のかき氷は合う可能性があるが、そうめんや昼の料理は小麦。グルテンの情報はない (2024〜2025年の口コミ)。',
    vegan_detail: '要確認。黒蜜金時や抹茶は合う可能性があるが、多くのかき氷やシェイクは練乳やアイス (2024〜2025年の口コミ)。',
    notes: '[甘味・平安神宮のそば] 大鳥居のそばの静かで親切な茶房。宇治クリーム金時などの昔ながらのかき氷、抹茶白玉シェイク、おいしいコーヒー、そうめんや4,000円の座敷のランチも。京セラ美術館の帰りに。年中無休、喫煙可。',
  });
}

// ================================================================ しゃぶしゃぶ･すきやき かおる Kaoru
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26042833/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_shabu_sukiyaki_kaoru', name: 'しゃぶしゃぶ･すきやき かおる (Shabushabu Sukiyaki Kaoru)', category: 'OMNI',
    lat: 35.00974507786466, lng: 135.7539599804144, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shabu-shabu meat and sea bream may suit with a plain dip, but sukiyaki warishita and the spicy beef hot pot use soy, and sukiyaki includes wheat gluten (fu) (September 2025). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and sea-bream hot pots (Tabelog; 2025 reviews).',
    hours_raw: 'Tuesday–Saturday and holidays 12:00–14:00 and 17:00–22:00; closed Sunday and Monday; also seasonal closures and New Year (Tabelog). Reservations accepted; phone for 12 or more (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 24 seats: 20 at tables, 4 at the counter (Tabelog). Courses bring starters, meat sushi, sashimi and the hot-pot vegetables to the table at once (December 2025). Near Aneyakoji-Aburakoji; 5 min walk from Nijojo-mae Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aneyakoji-Aburakoji, near Nijo Castle',
    cuisine: 'Wagyu and sea-bream shabu-shabu with a special spicy beef hot-pot broth, and sukiyaki (Tabelog) · sukiyaki course with starters, meat sushi and sashimi (December 2025) · lunch: beef sukiyaki gozen with yuba, clear soup and pickles; a ¥880 ramen set (July–September 2025) · lunch about ¥4,000–5,000, dinner about ¥8,000–10,000 (Tabelog)',
    website: null, gmaps: gm('しゃぶしゃぶ すきやき かおる 姉小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Shabu-shabu and sukiyaki · near Nijo Castle] A calm, smart room for wagyu and sea-bream shabu-shabu, a spicy beef hot pot and sukiyaki courses with meat sushi, plus good-value lunch sets. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Per Tabelog: a shabu-shabu and sukiyaki restaurant where the head chef selects the wagyu and sea bream. Its invoice registration is held by 株式会社バルテック, a Tokyo company (NTA register). Reviewers in 2025 found a clean, beautifully decorated room (July 2025).',
      philosophy: null, specialty: 'Wagyu and sea-bream shabu-shabu.',
      anecdotes: [
        { text: 'A July 2025 office worker on a business lunch found the room empty, cool and beautiful, and had a ¥880 ramen set from a sukiyaki house.', source: R + 'B511204070/' },
        { text: 'A September 2025 diner liked the beef sukiyaki gozen with yuba, clear soup and pickles.', source: R + 'B513536780/' },
        { text: 'A December 2025 course guest enjoyed the meat but wished the dishes had not all arrived at once.', source: R + 'B519212918/' },
      ],
      japanese_sources_summary: '食べログ: しゃぶしゃぶ・すき焼き・ステーキ、中京区姉小路通油小路東入宮木町461、二条城前駅から徒歩5分、火〜土・祝日 12:00〜14:00、17:00〜22:00、日・月休み、季節の休みと年末年始、予約可 (12名以上は電話で)、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、24席 (テーブル20、カウンター4)、紹介文 (英訳): 料理長が選ぶ和牛と鯛のしゃぶしゃぶ、特製の辛い牛鍋のだし。インボイス登録は株式会社バルテック (国税庁、東京)。口コミ (2025年7月〜2026年8月、英語): すき焼きのコース (前菜、肉寿司、刺身)、昼の牛すき焼き御膳 (ゆば、すまし汁、漬物)、880円のラーメンセット、きれいな店内。',
      confidence: 'low', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1011101010480', R + 'B509768528/', R + 'B511204070/', R + 'B513536780/', R + 'B519212918/', R + 'B534619074/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路通油小路東入宮木町461',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009745, 135.753960); cross-checked: GSI 京都府京都市中京区宮木町461番地 (lot) 11 m; nearest existing record 39.2 m (kyoto_nihonshu_satoshi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511204070/'],
    price_note: 'Price from a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Ramen set (lunch)', '¥880', 'Lunch', 'no', 'no', 'July 2025.', 'ramen'),
      it('', '', 'Beef sukiyaki gozen (lunch)', '', 'Lunch', 'no', 'no', 'September 2025.', 'sukiyaki'),
    ] }, {
    cuisine: '和牛と鯛のしゃぶしゃぶ、特製の辛い牛鍋、すき焼き (食べログ)・前菜、肉寿司、刺身のすき焼きのコース (2025年12月)・昼はゆば、すまし汁、漬物の牛すき焼き御膳、880円のラーメンセット (2025年7〜9月)・昼4,000〜5,000円ほど、夜8,000〜10,000円ほど (食べログ)',
    neighborhood: '姉小路油小路、二条城の近く',
    gf_detail: '要確認。しゃぶしゃぶの肉や鯛はたれ次第で合う可能性があるが、すき焼きの割下や辛い牛鍋は醤油、すき焼きに麩 (2025年9月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛と鯛の鍋 (食べログ、2025年の口コミ)。',
    notes: '[しゃぶしゃぶとすき焼き・二条城の近く] 落ち着いたきれいな店で、和牛と鯛のしゃぶしゃぶ、辛い牛鍋、肉寿司付きのすき焼きのコース、お得な昼の定食も。日・月休み。',
  });
}

// ================================================================ 鰻割烹まえはら Unagi Kappou Maehara
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006371/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://maehara-kyoto.com/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_unagi_kappou_maehara', name: '鰻割烹まえはら (Unagi Kappou Maehara)', category: 'OMNI',
    lat: 35.0143915269944, lng: 135.75858202672845, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shirayaki (unsauced grilled eel) and eel sashimi-style dishes may suit, but kabayaki tare and the shabu-shabu broth use soy (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 11:30–14:00 (last order 13:30) and 17:00–22:00 (last order 21:00); closing days not fixed (Tabelog). Reservations accepted; courses by the evening before (Tabelog). Service charge 10% at dinner (Tabelog original ディナータイムは奉仕料10％別途頂戴しております). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, Alipay); no e-money (Tabelog). 23 seats: a 7-seat counter and three private rooms for 4 with sunken kotatsu, up to 12; non-smoking, smoking area outside; parking for 3 (Tabelog). 4 min walk from Marutamachi Stn, 5 min from the Imperial Palace (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ryogaemachi-Nijo, south of the Imperial Palace',
    cuisine: 'Eel kappo of rare domestic eel grilled over binchotan, known for unagi shabu-shabu and kaiseki (Tabelog; 2025–2026 reviews) · Kanto-style steamed-then-grilled unaju; shirayaki; the Genpei-ju of half kabayaki, half shirayaki; hitsumabushi; female-eel boxes (July 2025–October 2026) · lunch-only unagi kaiseki with grilled-eel sashimi, eel soup, eel roll and salad, ending in an eel box (July 2026) · occasional wild eel (June 2026) · lunch about ¥5,000–8,000, dinner about ¥8,000–20,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('鰻割烹まえはら'), menu_url: WEB,
    notes: '[Eel kappo · south of the Imperial Palace] A calm eel house of rare domestic eel over binchotan: Kanto-style unaju, shirayaki, the half-and-half Genpei-ju, signature unagi shabu-shabu and a lunch eel kaiseki. Courses by the evening before. 10% service at dinner.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'Per Tabelog: a traditional kaiseki restaurant using only rare domestic eel, whose signature is unagi shabu-shabu, with counter seats and private kotatsu rooms near the Imperial Palace; it describes itself as a Michelin-starred restaurant. Reviewers in 2025–2026 note Kanto-style steaming and female eel.',
      philosophy: 'Bring out the natural flavour of rare domestic eel (Tabelog).', specialty: 'Unagi shabu-shabu; Kanto-style unaju.',
      anecdotes: [
        { text: 'A September 2025 Tokyo-born diner, taken for a birthday, had a first proper unaju and learned that female eel is rare.', source: R + 'B513295680/' },
        { text: 'A long-time regular in September 2025 came back for Kanto-style steamed eel after disappointing shirayaki elsewhere.', source: R + 'B500588269/' },
        { text: 'A June 2026 guest who tried wild eel found it tasted like a true river fish, with a hint of moss.', source: R + 'B530854033/' },
      ],
      japanese_sources_summary: '食べログ: うなぎ・日本料理・しゃぶしゃぶ、中京区両替町通ニ条上ル北小路町108-1、丸太町駅から徒歩4分、毎日 11:30〜14:00 (L.O.13:30)、17:00〜22:00 (L.O.21:00)、不定休、予約可 (コースは前日の夕方まで)、ディナータイムは奉仕料10％別途頂戴しております、カード (VISA・Master・JCB・AMEX・Diners)・QR (PayPay・Alipay) 可、電子マネー不可、23席 (カウンター7、4名の個室3、12名まで)、禁煙 (外に喫煙所)、駐車場3台、紹介文 (英訳): 希少な国産うなぎ、看板の「うなぎしゃぶしゃぶ」、懐石、ミシュランの星の店。口コミ (2025年7月〜2026年10月、英語): 備長炭、関東風の蒸し、うな重、白焼き、源平重 (蒲焼きと白焼きの半分ずつ)、ひつまぶし、雌のうなぎ、昼のうなぎ懐石 (焼いたうなぎの造り、うなぎの汁、う巻き、サラダ、うな重)、天然うなぎ (2026年6月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B500588269/', R + 'B509413039/', R + 'B513295680/', R + 'B517480788/', R + 'B518292308/', R + 'B520359566/', R + 'B526729431/', R + 'B527193410/', R + 'B530854033/', R + 'B537732536/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% service at dinner; book courses by the evening before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通ニ条上ル北小路町108-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014392, 135.758582); cross-checked: GSI 京都府京都市中京区北小路町108番地 (lot) 13 m; nearest existing record 48.0 m (kyoto_grill_demi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509413039/'],
    price_note: 'No item prices captured from the sources.', last_checked: TODAY, items: [
      it('', '', 'Genpei-ju (half kabayaki, half shirayaki)', '', 'Eel', 'no', 'no', 'July 2025.', 'genpei'),
      it('', '', 'Unagi shabu-shabu', '', 'Eel', 'ask', 'no', 'Tabelog; the signature dish.', 'shabu'),
    ] }, {
    cuisine: '希少な国産うなぎを備長炭で焼く、うなぎしゃぶしゃぶと懐石で知られる鰻割烹 (食べログ、2025〜2026年の口コミ)・関東風の蒸してから焼くうな重、白焼き、蒲焼きと白焼き半分ずつの源平重、ひつまぶし、雌うなぎの重 (2025年7月〜2026年10月)・焼いたうなぎの造り、うなぎの汁、う巻き、サラダ、うな重の昼のみのうなぎ懐石 (2026年7月)・天然うなぎも (2026年6月)・昼5,000〜8,000円ほど、夜8,000〜20,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '両替町二条、御所の南',
    gf_detail: '要確認。白焼きや焼いたうなぎの造りは合う可能性があるが、蒲焼きのたれやしゃぶしゃぶのだしは醤油 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。うなぎの店 (食べログ、2025〜2026年の口コミ)。',
    notes: '[鰻割烹・御所の南] 希少な国産うなぎを備長炭で焼く落ち着いた店。関東風のうな重、白焼き、半分ずつの源平重、看板のうなぎしゃぶしゃぶ、昼のうなぎ懐石。コースは前日の夕方までに。夜はサービス料10%。',
  });
}

// ================================================================ ポルトガル料理 ビバリオ VIVARIO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26032201/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.vivario.jp/restaurant.html';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_vivario_portuguese', name: 'ポルトガル料理 ビバリオ (VIVARIO)', category: 'OMNI',
    lat: 35.017333837059546, lng: 135.7699600793181, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Stews, risotto and the cassava-flour side may suit, but croquettes are breaded and bread is homemade wheat bread (2023–2025 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hummus and a black-bean dish appear, but most dishes are fish or meat (2023–2025 reviews).',
    hours_raw: 'Wednesday–Sunday 17:00–22:00; closed Monday and Tuesday; hours may change (Tabelog). Reservations advised — the chef cooks alone and it can be full (Tabelog; October 2025). Cards, iD and QR (Tabelog). Counter seating; non-smoking; English menu (Tabelog). Kawaramachi Sky Mansion, 5 min walk from Jingu-Marutamachi Stn (Tabelog). Opened 6 April 2019 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi',
    cuisine: 'Portuguese home cooking — said by a reviewer to be the only Portuguese restaurant in Kyoto (June 2024) · salt-cod croquettes and the salt-cod and potato bake Bacalhau à Gomes de Sá; hummus; seafood nanban (August 2023–June 2024) · black-bean dish with toasted cassava flour; duck rice; sausage and kale soup; seasonal rabbit and chestnut stew; fried monkfish (July–October 2025) · homemade bread, desserts and Portuguese wine (2024–2025 reviews) · about ¥3,000–5,000 (Tabelog; 2024–2025 reviews)',
    website: WEB, gmaps: gm('ポルトガル料理 ビバリオ'), menu_url: WEB,
    notes: '[Portuguese · Kawaramachi-Marutamachi] A rare Portuguese kitchen with a one-man chef who explains every dish: salt-cod croquettes and bacalhau bake, duck rice, kale soup, seasonal stews and homemade bread with Portuguese wine. Book. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a Portuguese restaurant opened 6 April 2019 where the chef works solo, explains the dishes carefully and bakes the bread (2023–2025 reviews).',
      philosophy: null, specialty: 'Salt-cod dishes; duck rice.',
      anecdotes: [
        { text: 'A first-timer in August 2023 found the solo chef friendly and attentive, and paired cod croquettes and hummus with house white wine.', source: R + 'B470006241/' },
        { text: 'An October 2025 family came back for the seasonal rabbit and chestnut stew, fried monkfish and kale soup.', source: R + 'B515126495/' },
        { text: 'An October 2025 pair found it fully booked that night, and singled out the duck risotto.', source: R + 'B517086926/' },
      ],
      japanese_sources_summary: '食べログ: ポルトガル料理・ヨーロッパ料理・コロッケ、上京区駒之町561-4 河原町スカイマンション、神宮丸太町駅から徒歩5分、水〜日 17:00〜22:00、月・火休み、予約可、カード・iD・QR 可、カウンター、禁煙、英語のメニュー、2019年4月6日開店、公式サイトあり。口コミ (2023年8月〜2026年5月、英語): 京都で唯一のポルトガル料理店との声 (2024年6月)、一人で営むシェフのていねいな説明、干し鱈のコロッケ、干し鱈とじゃがいもの料理、フムス、魚介の南蛮、黒豆の料理とキャッサバ粉、鴨のごはん、ソーセージとケールのスープ、季節のうさぎと栗の煮込み、あんこうのフライ、自家製パン、デザート、ポルトガルワイン。',
      confidence: 'medium', sources: [TB, WEB, R + 'B470006241/', R + 'B485376464/', R + 'B486300473/', R + 'B488456030/', R + 'B502905597/', R + 'B510679187/', R + 'B515126495/', R + 'B517063422/', R + 'B517086926/', R + 'B527736295/'] },
    cultural_comfort: { level: 'english', note: 'English menu; book ahead; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区駒之町561-4 河原町スカイマンション',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.017334, 135.769960); cross-checked: GSI 京都府京都市上京区駒之町561番地 (lot) 27 m; nearest existing record 14.3 m (kyoto_reine_des_pres); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485376464/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Salt-cod croquettes', '', 'Starters', 'no', 'no', 'June 2024.', 'bacalhau_croquette'),
      it('', '', 'Bacalhau à Gomes de Sá', '', 'Mains', 'ask', 'no', 'May 2024.', 'gomes'),
    ] }, {
    cuisine: 'ポルトガルの家庭料理、京都で唯一のポルトガル料理店との声 (2024年6月)・干し鱈のコロッケ、干し鱈とじゃがいもの料理、フムス、魚介の南蛮 (2023年8月〜2024年6月)・キャッサバ粉を添えた黒豆の料理、鴨のごはん、ソーセージとケールのスープ、季節のうさぎと栗の煮込み、あんこうのフライ (2025年7〜10月)・自家製パン、デザート、ポルトガルワイン (2024〜2025年の口コミ)・3,000〜5,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '河原町丸太町',
    gf_detail: '要確認。煮込み、リゾット、キャッサバ粉は合う可能性があるが、コロッケは衣、パンは自家製の小麦 (2023〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。フムスや黒豆の料理もあるが、ほとんどは魚か肉 (2023〜2025年の口コミ)。',
    notes: '[ポルトガル料理・河原町丸太町] 一品ずつ説明してくれる一人のシェフの珍しいポルトガル料理。干し鱈のコロッケと干し鱈の料理、鴨のごはん、ケールのスープ、季節の煮込み、自家製パンにポルトガルワイン。予約を。月・火休み。',
  });
}

// ================================================================ きん安 Kin Yasu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26010445/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_kinyasu_takeyamachi', name: 'きん安 (Kin Yasu)', category: 'OMNI',
    lat: 35.01616315786306, lng: 135.76177343047377, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for most dishes: tonkatsu, katsudon, tempura and kara-age in wheat batter, soy-based sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals and dashi (2025–2026 reviews).',
    hours_raw: 'Lunch Monday–Friday 11:00–14:00 (last order 13:40); dinner Monday–Saturday 17:30–23:00 (last order 22:15); closed Sunday, holidays and the second Saturday of the month, so Saturday is left out (Tabelog). Reservations accepted (Tabelog). Cover ¥260 at dinner (Tabelog original お通し代260円). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 40 seats: counter, tables, and a large tatami room at the back with sunken kotatsu (Tabelog; May 2025). Busy at lunch; waits of about 20 minutes (May 2026). 3 min walk from Marutamachi Stn (February 2025).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takeyamachi-Ainomachi, near Marutamachi',
    cuisine: 'Long-loved local Japanese restaurant: generous weekday lunch sets and evening izakaya and kaiseki (2025–2026 reviews) · daily lunch set ¥990 like a bento of many small dishes; select lunch such as tonkatsu with rice ¥900; lunch set ¥930 (January 2025–May 2026) · omurice ¥950 with mini salad; nostalgic katsudon; the off-menu “Daimyo-don” ¥1,000 of tonkatsu, shrimp tempura and kara-age (February 2025–September 2026) · evenings: mini kaiseki with all-you-can-drink (April 2025) · lunch about ¥1,000; dinner more (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('きん安 竹屋町 間之町'), menu_url: null,
    notes: '[Set meals and izakaya · near Marutamachi] A homely, long-standing local favourite: bento-like daily lunch sets for about ¥1,000, katsudon, omurice and the secret “Daimyo-don” stacked with tonkatsu, tempura and kara-age, and evening mini kaiseki. ¥260 cover at night. Closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per reviewers: a beloved neighbourhood set-meal restaurant near the Imperial Palace with many solo regulars, a narrow entrance opening into a deep machiya with tatami and kotatsu seats, and a bustling team of about four at lunch (2025–2026 reviews).',
      philosophy: null, specialty: 'Daily lunch set; Daimyo-don.',
      anecdotes: [
        { text: 'A June 2025 diner asked shyly for the off-menu Daimyo-don and was told, “Yes, we do!” — katsudon topped with shrimp tempura and kara-age, scented with sansho.', source: R + 'B508932144/' },
        { text: 'A March 2026 regular ducking out of heavy rain made the 13:30 last order for a ¥900 tonkatsu lunch.', source: R + 'B464557515/' },
        { text: 'A May 2026 family all had the ¥990 daily lunch, a bento-like spread of side dishes.', source: R + 'B529181264/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区竹屋町間之町東入楠木町618、丸太町駅から207m、昼 月〜金 11:00〜14:00 (L.O.13:40)、夜 月〜土 17:30〜23:00 (L.O.22:15)、日・祝日と第2土曜休み、予約可、お通し代260円、カード (JCB・AMEX・Diners)・電子マネー・QR 可、40席、貸切可。口コミ (2025年1月〜2026年9月、英語): 地元で愛される定食の店、一人客が多い、細い入口の奥に座敷と掘りごたつ、日替わり990円 (弁当のような小鉢)、とんかつ定食900円、昼の定食930円、オムライス950円、かつ丼、メニューにない「Daimyo 丼」1,000円 (とんかつ、えびの天ぷら、唐揚げ、山椒)、夜は飲み放題付きのミニ懐石。',
      confidence: 'medium', sources: [TB, R + 'B464557515/', R + 'B499361813/', R + 'B500731858/', R + 'B505622402/', R + 'B506547917/', R + 'B508932144/', R + 'B514391917/', R + 'B522367494/', R + 'B524001516/', R + 'B529181264/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥260 cover at dinner; busy at lunch; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区竹屋町間之町東入楠木町618',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016163, 135.761773); GSI could not match 楠木町618, so the Tabelog pin is kept unconfirmed; nearest existing record 19.0 m (kyoto_aoike); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529181264/', R + 'B500731858/', R + 'B524001516/'],
    price_note: 'Prices from February 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set', '¥990', 'Lunch', 'no', 'no', 'May 2026.', 'higawari'),
      it('', '', 'Daimyo-don (off-menu)', '¥1,000', 'Lunch', 'no', 'no', 'February 2025.', 'daimyo'),
      it('', '', 'Omurice with mini salad', '¥950', 'Lunch', 'no', 'no', 'September 2026.', 'omurice'),
    ] }, {
    cuisine: '平日の昼のたっぷりの定食と夜の居酒屋や懐石の、長く愛される町の和食の店 (2025〜2026年の口コミ)・弁当のような小鉢の日替わり990円、とんかつとご飯のセレクトランチ900円、昼の定食930円 (2025年1月〜2026年5月)・ミニサラダ付きのオムライス950円、懐かしいかつ丼、とんかつ・えびの天ぷら・唐揚げのメニューにない「Daimyo 丼」1,000円 (2025年2月〜2026年9月)・夜は飲み放題付きのミニ懐石 (2025年4月)・昼1,000円ほど、夜はそれ以上 (食べログ、2025〜2026年の口コミ)',
    neighborhood: '竹屋町間之町、丸太町の近く',
    gf_detail: 'ほとんどグルテンフリー不可。とんかつ、かつ丼、天ぷら、唐揚げの小麦の衣、醤油のたれ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚の定食とだし (2025〜2026年の口コミ)。',
    notes: '[定食と居酒屋・丸太町の近く] 長く続く家庭的な地元の人気店。1,000円ほどの弁当のような日替わり、かつ丼、オムライス、とんかつ・えびの天ぷら・唐揚げの隠しメニュー「Daimyo 丼」、夜はミニ懐石。夜はお通し260円。日曜休み。',
  });
}

save();
