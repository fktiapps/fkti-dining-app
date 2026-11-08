// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 81 (2026-11-08).
//   + 近幸 Kinko (fish shop with a standing bar and grilled-fish bento, Gojo Ohashi; rest — has an eat-in counter, so not
//     treated as a retail-only shop)
//   + 嗜好飲料研究所 サンガインセンス本店 Sanga Incense (incense shop with a scented-coffee café, Yanaginobamba-Oike; rest)
//   + 風雲児 Fuuunji (Showa-style Japanese izakaya, Teramachi-Oike; rest)
//   + 風見鶏 烏丸六角店 Kazamidori (yakitori and course izakaya, Karasuma-Rokkaku; rest)
//   Rest list (mod 6 = 1) after batch 80, nearest-first — skipped:
//   - 美濃吉 烏丸四条店 26003077: chain — 美濃吉 group, nine or more same-name shops (same call as 26001001, 26035757).
//   - 串焼 満天 六角編 26040943: sub-brand of a large parent — 満天 of ファンインターナショナル (same call as 26027381).
//   - 食童 箸ずめ 26025415: no review dated 2025–26 (latest July 2024).
//   - BURGER REVOLUTION KYOTO 祇園店 26045323: thin listing, 1 review.
//   Brand check: queue-status.jsonl grepped for 近幸, サンガ, 風雲児, 風見鶏 — no entries. 風見鶏: a Tabelog name search shows only
//   unrelated businesses of that name. None of the four is in data (main 2004d572, hidden records included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26003077/', 'chain: 美濃吉 group — nine or more same-name shops; same call as 26001001 and 26035757');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26040943/', 'sub-brand of a large parent: 串焼き 満天 of ファンインターナショナル; same call as 26027381');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26025415/', 'no review dated 2025–26: the newest Tabelog review is from July 2024');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26045323/', 'thin listing: 1 review');

// ================================================================ 近幸 Kinko
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030695/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.kinko-gojo.jp/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_kinko_gojo', name: '近幸 (Kinko)', category: 'OMNI',
    lat: 34.995833007878254, lng: 135.7689186802634, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and plainly grilled fish may suit, but saikyo-miso fish, simmered fish, tempura and fried squid are not wheat-free; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fishmonger (2025–2026 reviews).',
    hours_raw: 'Shop: Monday, Tuesday and Thursday–Saturday 10:00–19:00; closed Wednesday and Sunday, announced monthly on Instagram and in the shop (Tabelog). Standing bar from 11:30, closing around 17:00; bento from 11:30 and often sold out (December 2025–October 2026). No reservations (Tabelog). Cards (VISA, Master, AMEX), e-money and QR (Tabelog). Choose from the showcase and pay, then eat at the standing counter or take away (June 2026). At the east end of Gojo Ohashi on Route 1, by exit 4 of Keihan Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo Ohashi, east end',
    cuisine: 'Fourth-generation Kyoto fishmonger with a standing bar and fish bento (2025–2026 reviews) · saikyo-miso grilled sablefish bento ¥1,750, mackerel bento ¥1,150, salmon; nori-ben (December 2025–October 2026) · at the standing counter: sashimi such as kanpachi, shima-aji, flounder, bluefin tuna and spear squid; simmered flounder ¥680, tuna sukimi ¥580, tempura, grilled hamo, grilled mackerel; draught beer, hot sake, lemon sour ¥400 (December 2025–October 2026) · about ¥1,000–4,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('近幸 五条大橋'), menu_url: null,
    notes: '[Fishmonger with standing bar · Gojo Ohashi] A fourth-generation fish shop by Gojo bridge where you pick sashimi, simmered or grilled fish from the case and eat it at the standing counter with a beer — or take away the famous saikyo-miso sablefish bento for a Kamo riverside picnic. Bento sell out; closed Wednesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Fishmonger family (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: a popular fresh-fish shop at the east end of Gojo Ohashi selling fresh and processed seafood and side dishes, recently with an eat-in standing corner (December 2025); an October 2026 reviewer calls it a fresh fish shop in business for four generations.',
      philosophy: null, specialty: 'Saikyo-miso sablefish bento.',
      anecdotes: [
        { text: 'A December 2025 regular spent over ¥10,000 in thirty minutes at the standing bar on sashimi and saikyo-miso fish to take home.', source: R + 'B518549868/' },
        { text: 'A May 2026 visitor took the ¥1,750 sablefish bento for a picnic by the Kamo, the rich fish perfect with rice and sake.', source: R + 'B528136533/' },
        { text: 'An October 2026 visitor found the famous bento sold out but enjoyed hamo tempura and sashimi with a beer.', source: R + 'B537338017/' },
      ],
      japanese_sources_summary: '食べログ: 惣菜・デリ・コロッケ、東山区五条通大橋東入東橋詰町1、京阪清水五条駅4番出口すぐ、月・火・木〜土 10:00〜19:00、水・日休み (毎月 Instagram と店頭で告知)、予約不可、カード (VISA・Master・AMEX)・電子マネー・QR 可、公式サイトあり。口コミ (2025年12月〜2026年10月、英語): 五条大橋の東詰の人気の鮮魚店、鮮魚・加工品・惣菜、店内の立ち飲み (11:30 から、17 時ごろまで)、ショーケースから選んで会計、銀だらの西京焼き弁当1,750円、鯖の弁当1,150円、鮭、のり弁 (11:30 から)、カンパチ・しまあじ・ひらめ・本まぐろ・やりいかの刺身、かれいの煮付け680円、まぐろのすき身580円、天ぷら、焼き鱧、焼き鯖、生ビール、熱燗、レモンサワー400円、弁当は売り切れが多い、4代続く鮮魚店との声 (2026年10月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B422759162/', R + 'B518549868/', R + 'B520636286/', R + 'B522498342/', R + 'B525752300/', R + 'B528136533/', R + 'B531200237/', R + 'B534764339/', R + 'B537013900/', R + 'B537338017/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick from the case and pay; standing counter or take away; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条通大橋東入東橋詰町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995833, 135.768919); cross-checked: GSI 京都府京都市東山区東橋詰町1番地 (lot) 3 m; nearest existing record 38.8 m (kyoto_sushi_kappou_miyuki); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528136533/', R + 'B534764339/', R + 'B522498342/'],
    price_note: 'Prices from February–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Saikyo-miso grilled sablefish bento', '¥1,750', 'Bento', 'no', 'no', 'May 2026; sells out.', 'gindara'),
      it('', '', 'Grilled mackerel bento', '¥1,150', 'Bento', 'ask', 'no', 'August 2026.', 'saba'),
      it('', '', 'Simmered flounder', '¥680', 'Standing bar', 'no', 'no', 'February 2026.', 'karei'),
    ] }, {
    cuisine: '立ち飲みと魚の弁当もある4代続く京都の鮮魚店 (2025〜2026年の口コミ)・銀だらの西京焼き弁当1,750円、鯖の弁当1,150円、鮭、のり弁 (2025年12月〜2026年10月)・立ち飲みでカンパチ、しまあじ、ひらめ、本まぐろ、やりいかの刺身、かれいの煮付け680円、まぐろのすき身580円、天ぷら、焼き鱧、焼き鯖、生ビール、熱燗、レモンサワー400円 (2025年12月〜2026年10月)・1,000〜4,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '五条大橋の東詰',
    gf_detail: '要確認。刺身や塩焼きの魚は合う可能性があるが、西京焼き、煮魚、天ぷら、いかの揚げ物は小麦なしではない。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮮魚店 (2025〜2026年の口コミ)。',
    notes: '[鮮魚店と立ち飲み・五条大橋] 五条大橋のそばの4代続く魚屋。ショーケースから刺身や煮魚、焼き魚を選んで立ち飲みでビールと、または名物の銀だらの西京焼き弁当を持って鴨川でピクニック。弁当は売り切れることも。水・日休み。',
  });
}

// ================================================================ 嗜好飲料研究所 サンガインセンス本店 Sanga Incense
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043601/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_sanga_incense_cafe', name: '嗜好飲料研究所 サンガインセンス本店 (Sanga Incense)', category: 'OMNI',
    lat: 35.00992843786766, lng: 135.76376998040942, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Drinks only — scented coffees, teas and non-alcoholic drinks (2025–2026 reviews); plain coffee and tea are gluten-free, but ask about each flavouring.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Drinks only; black coffee and tea are plant-based, but chai and some drinks may use milk — ask (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Sunday 11:00–18:00; closed Wednesday (Tabelog). No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money (iD, QUICPay) and QR (PayPay, Rakuten Pay, Alipay, WeChat Pay) (Tabelog). Seven seats looking onto a courtyard; two signature coffees are for drinking in only, the rest can be taken away (Tabelog; September 2025). An incense maker\'s shop in a townhouse described as 120 years old, moved here from Goshonai (November 2025). Yanaginobamba below Oike; 5 min walk from Karasuma-Oike or Kyoto Shiyakusho-mae Stn (Tabelog). Opened 22 August 2025 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanaginobamba, below Oike',
    cuisine: 'Café inside an incense maker\'s shop, serving drinks scented with the same edible natural aromatics used in its incense (2025–2026 reviews) · scented coffees on dark-roast beans — e.g. "Gourmand", in-store-only "Special 2" — high-caffeine scented coffee, scented teas, chai ice ¥800, an "absinthe (myrrh)" drink, non-alcoholic scented drinks; testers to smell before ordering (September 2025–October 2026) · about ¥800–2,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('サンガインセンス 柳馬場'), menu_url: null,
    notes: '[Scent café · Yanaginobamba-Oike, townhouse] An incense maker\'s townhouse shop with a seven-seat café over a courtyard, serving coffee and drinks blended with edible natural aromatics — smell the testers, then sip a "Gourmand" ice coffee or chai while the staff explain the scents. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: Sanga Incense, an incense brand "that satisfies curiosity through scent", moved from Goshonai into a renovated Kyoto townhouse (said to be 120 years old) and opened this café, the Shiko Inryo Kenkyujo main store, in 2025 (Tabelog: 22 August 2025); its natural incense comes in 18 scents (November 2025).',
      philosophy: 'Curiosity satisfied through scent (November 2025).', specialty: 'Scented coffee.',
      anecdotes: [
        { text: 'A September 2025 visitor sampled the scented coffees, then took one of the two drink-in-only specials to the courtyard view.', source: R + 'B513636265/' },
        { text: 'A March 2026 first-of-the-day guest had the room to themselves with jazz playing, and found the coffee as good as a specialty roaster\'s.', source: R + 'B523809829/' },
        { text: 'A May 2026 visitor found the smoky, herbal "absinthe (myrrh)" more a scent to savour than a juice — not for everyone.', source: R + 'B527868857/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区柳馬場通御池下ル柳八幡町77、烏丸御池駅3-1出口・市役所前駅8番出口から徒歩5分、月・火・木〜日・祝日 11:00〜18:00、水曜休み、予約不可、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー (iD・QUICPay)・QR (PayPay・楽天ペイ・Alipay・WeChat Pay) 可、7席、2025年8月22日開店。口コミ (2025年9月〜2026年10月、英語): 香のブランド「サンガインセンス」の店内のカフェ、Goshonai から移転、築120年の町家を改装 (2025年11月)、天然素材の香18種、食べられる天然の香料を合わせたコーヒー、ダークローストの豆、「Gourmand」、店内限定の「Special 2」、高カフェインのコーヒー、香りのお茶、チャイのアイス800円、「Absinthe (Myrrh)」、ノンアルコールのドリンク、テスターで香りを確かめる、中庭、ていねいな説明。',
      confidence: 'medium', sources: [TB, R + 'B513552826/', R + 'B513636265/', R + 'B514563785/', R + 'B514635559/', R + 'B516410094/', R + 'B523809829/', R + 'B527868857/', R + 'B529263159/', R + 'B530018890/', R + 'B538054704/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seven seats; staff explain each scent; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通御池下ル柳八幡町77',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened August 2025; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009928, 135.763770); cross-checked: GSI 京都府京都市中京区柳八幡町77番地 (lot) 43 m; nearest existing record 22.6 m (kyoto_yanaginobamba_hondatei); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514635559/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chai, iced', '¥800', 'Drinks', 'ask', 'ask', 'March 2026.', 'chai'),
      it('', '', 'Scented coffee (in-store special)', '', 'Drinks', 'gf', 'ask', 'September 2025; June 2026.', 'scented_coffee'),
    ] }, {
    cuisine: '香の店の中のカフェで、香に使う食べられる天然の香料を合わせた飲み物 (2025〜2026年の口コミ)・ダークローストの豆の香りのコーヒー (「Gourmand」、店内限定の「Special 2」など)、高カフェインのコーヒー、香りのお茶、チャイのアイス800円、「Absinthe (Myrrh)」、ノンアルコールのドリンク、注文前にテスターで香りを確かめる (2025年9月〜2026年10月)・800〜2,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '柳馬場、御池の南',
    gf_detail: '飲み物のみ。香りのコーヒー、お茶、ノンアルコールのドリンク (2025〜2026年の口コミ)。コーヒーやお茶そのものはグルテンフリーだが、香料ごとに確認を。',
    vegan_detail: '飲み物のみ。ブラックコーヒーとお茶は植物性。チャイなど牛乳を使うものもあるので確認を (2025〜2026年の口コミ)。',
    notes: '[香りのカフェ・柳馬場御池、町家] 香の店の町家に、中庭を望む7席のカフェ。食べられる天然の香料を合わせたコーヒーや飲み物を、テスターで香りを確かめてから、店員の説明を聞きつつ。水曜休み。',
  });
}

// ================================================================ 風雲児 Fuuunji
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025859/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_fuuunji_teramachi', name: '風雲児 (Fuuunji)', category: 'OMNI',
    lat: 35.01115786191341, lng: 135.76749643527157, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: karaage, gyoza, tempura and chijimi (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, fugu, hamo and chicken (2023–2026 reviews).',
    hours_raw: 'Daily 17:00–24:00 (last order 23:00); closing days irregular (Tabelog). Reviewers also describe weekday lunch sets popular with City Hall staff (July 2023; May 2025) — lunch hours are not on Tabelog. Reservations accepted; the whole-hamo course is limited, so book (August 2026). Cards (JCB, AMEX, Diners) (Tabelog). 29 seats at the counter, tables and a tatami room (Tabelog; January 2025). Smoking allowed (Tabelog; February 2026). Tomitaya building 1F on Teramachi above Oike, facing City Hall; about 120 m from Kyoto Shiyakusho-mae Stn (Tabelog; May 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Oike, opposite City Hall',
    cuisine: 'Showa-flavoured Japanese izakaya of seasonal fish (2023–2026 reviews) · winter torafugu sashimi, grilled fugu and fugu hot pot with zosui; summer whole-hamo course of sashimi, seared hamo, tempura, bone crackers and shabu-shabu; grilled tuna with onion, garlic and rock salt (July 2025–December 2025) · omelette, karaage, gyoza including Awaji onion gyoza, seafood chijimi, fried octopus, grilled octopus with ponzu, yellowtail sashimi; shochu and hot sake (2023–2026 reviews) · weekday lunch: daily special, karaage set, tuna sashimi set (2023; May 2025) · about ¥3,000–9,000 (2024–2026 reviews)',
    website: null, gmaps: gm('風雲児 寺町御池'), menu_url: null,
    notes: '[Izakaya · Teramachi-Oike, opposite City Hall] A homely, Showa-style izakaya facing City Hall: fugu courses in winter, a whole-hamo course in summer, and everyday favourites — omelette, gyoza, chijimi, grilled tuna — with hot sake. Smoking allowed. City Hall staff come for weekday lunch.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: a casual, homely Japanese izakaya in front of Kyoto City Hall, with lunch sets popular with city staff and seasonal courses of fugu and hamo (2023–2026 reviews).',
      philosophy: null, specialty: 'Fugu course; whole-hamo course.',
      anecdotes: [
        { text: 'A December 2025 regular celebrated the start of the fugu season: torafugu sashimi, grilled fugu, hot pot and zosui to finish.', source: R + 'B197152841/' },
        { text: 'An August 2026 pair shared the whole-hamo course — sashimi, seared, tempura, bone crackers and shabu-shabu — the only hamo of the day.', source: R + 'B510986740/' },
        { text: 'A February 2026 pair came in from the cold for hot sake, found the cigarette smoke off-putting at first, and settled in at the counter.', source: R + 'B523068286/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区寺町通御池上ル上本能寺町484 トミタヤビル 1F、市役所前から115m、毎日 17:00〜24:00 (L.O.23:00)、不定休、予約可、カード (JCB・AMEX・Diners) 可、29席、喫煙可。口コミ (2023年7月〜2026年8月、英語): 市役所の向かい、平日の昼は市役所の職員に人気の定食 (日替わり、唐揚げ、まぐろの刺身)、冬はとらふぐの刺身・焼きふぐ・鍋・雑炊、夏は鱧一本のコース (造り、焼き霜、天ぷら、骨せんべい、しゃぶしゃぶ)、玉ねぎ・にんにく・岩塩のまぐろの炙り、卵焼き、唐揚げ、淡路の玉ねぎ餃子、海鮮チヂミ、たこの唐揚げ、たこのポン酢焼き、ぶりの造り、焼酎、熱燗、座敷あり、昭和の気取らない居酒屋、たばこのにおい (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B197152841/', R + 'B468504736/', R + 'B468663754/', R + 'B485488979/', R + 'B501842602/', R + 'B506429135/', R + 'B510986740/', R + 'B523068286/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; homely counter and tatami; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区寺町通御池上ル上本能寺町484 トミタヤビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011158, 135.767496); GSI matches only the town 上本能寺前町 (60 m), not the lot, so the Tabelog pin is kept; nearest existing record 70.7 m (kyoto_kameya_yoshinaga); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510986740/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Whole-hamo course', '', 'Courses', 'no', 'no', 'July 2025; August 2026; limited.', 'hamo'),
      it('', '', 'Fugu course', '', 'Courses', 'no', 'no', 'December 2025.', 'fugu'),
    ] }, {
    cuisine: '季節の魚の昭和風の和の居酒屋 (2023〜2026年の口コミ)・冬はとらふぐの刺身、焼きふぐ、ふぐ鍋と雑炊、夏は鱧一本のコース (造り、焼き霜、天ぷら、骨せんべい、しゃぶしゃぶ)、玉ねぎ・にんにく・岩塩のまぐろの炙り (2025年7〜12月)・卵焼き、唐揚げ、淡路の玉ねぎ餃子、海鮮チヂミ、たこの唐揚げ、たこのポン酢焼き、ぶりの造り、焼酎、熱燗 (2023〜2026年の口コミ)・平日の昼は日替わり、唐揚げ定食、まぐろの刺身定食 (2023年、2025年5月)・3,000〜9,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '寺町御池、市役所の向かい',
    gf_detail: 'グルテンフリー不可。唐揚げ、餃子、天ぷら、チヂミ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、ふぐ、鱧、鶏 (2023〜2026年の口コミ)。',
    notes: '[居酒屋・寺町御池、市役所の向かい] 市役所の向かいの昭和風の家庭的な居酒屋。冬はふぐのコース、夏は鱧一本のコース、普段は卵焼き、餃子、チヂミ、まぐろの炙りを熱燗で。喫煙可。平日の昼は市役所の職員も。',
  });
}

// ================================================================ 風見鶏 烏丸六角店 Kazamidori
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017489/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '25:00']);
  put({
    id: 'kyoto_kazamidori_karasuma_rokkaku', name: '風見鶏 烏丸六角店 (Kazamidori)', category: 'OMNI',
    lat: 35.00744959786828, lng: 135.76075215038645, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: karaage, tare yakitori, chanko and zosui (2018–2024 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, sashimi and hot pot (2018–2024 reviews).',
    hours_raw: 'Daily 17:00–1:00 (last order 0:30); open all year, with occasional unexpected closures — phone ahead (Tabelog). Reservations by the day before; changes after confirmation incur cancellation fees; you may be seated at the counter (Tabelog). Seat charge ¥440 per person, not on courses (Tabelog original 席料お1人様 440円 ※コース注文時は除く). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). Semi-private room including the counter for groups; bring-your-own allowed (February 2025). Smoking allowed (June 2024). Daiki Rokkaku building 1F, Rokkaku east of Karasuma; 3–5 min walk from Karasuma-Oike, Shijo or Karasuma Stn (Tabelog). Opened 16 February 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Rokkaku',
    cuisine: 'Yakitori and creative izakaya geared to groups (Tabelog; 2018–2025 reviews) · yakitori such as liver, karaage, sashimi platters, agedashi tofu, buri daikon, chanko nabe and zosui (2018–2024 reviews) · all-you-can-drink courses around ¥4,000 (2018–2024 reviews) · about ¥4,000–6,000 (Tabelog)',
    website: null, gmaps: gm('風見鶏 烏丸六角'), menu_url: null,
    notes: '[Yakitori izakaya · Karasuma-Rokkaku, till 1 a.m.] A late-opening yakitori izakaya near Karasuma, popular for group parties: all-you-can-drink courses of sashimi, yakitori, karaage and chanko hot pot. Book by the day before; ¥440 seat charge à la carte. Smoking allowed. Some 2024 reviewers found the course portions thin.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakitori and creative izakaya opened 16 February 2011 on Rokkaku east of Karasuma, open all year until late, taking group bookings.',
      philosophy: null, specialty: 'Yakitori; party courses.',
      anecdotes: [
        { text: 'A December 2024 year-end party had chanko, karaage and sashimi with quick drink service and strong drinks.', source: R + 'B497148279/' },
        { text: 'A February 2025 large group was given a semi-private area including the counter, with bring-your-own allowed.', source: R + 'B500716816/' },
        { text: 'A July 2024 group on the premium all-you-can-drink course found one skewer of yakitori each too little.', source: R + 'B487939375/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼き鳥・創作料理、中京区六角通烏丸東入ル堂之前町230-2 大輝六角ビル 1F、阪急烏丸駅・地下鉄四条駅から徒歩5分、烏丸御池駅から徒歩3分、毎日 17:00〜翌1:00 (L.O.0:30)、年中無休 (臨時休業あり、事前に確認を)、予約は前日まで、確定後の変更やキャンセルは料金がかかる、カウンターになることも、席料1人440円 (コースは除く)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、2011年2月16日開店。口コミ (2018年11月〜2025年10月、英語): 飲み放題付きのコース4,000円ほど (サラダ、刺身の盛り合わせ、唐揚げ、レバーの焼き鳥、揚げ出し豆腐、ぶり大根、鍋、雑炊)、ちゃんこ鍋、喫煙可 (2024年6月)、持ち込み可 (2025年2月)、焼き鳥が少ないとの声と早く帰るよう促されたとの声 (2024年)。',
      confidence: 'low', sources: [TB, R + 'B402294887/', R + 'B451654954/', R + 'B478465329/', R + 'B487420598/', R + 'B487939375/', R + 'B497148279/', R + 'B500716816/', R + 'B514672716/', R + 'B514851979/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥440 seat charge à la carte; book by the day before; smoking allowed; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通烏丸東入ル堂之前町230-2 大輝六角ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2025.' },
    pin_source: `Tabelog ${TB} (35.007450, 135.760752); cross-checked: GSI 京都府京都市中京区堂之前町230番地 (lot) 47 m; nearest existing record 19.5 m (kyoto_anji_karasuma_rokkaku); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B478465329/', TB],
    price_note: 'Course price from a January 2024 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥4,000', 'Courses', 'no', 'no', 'January 2024.', 'course'),
      it('', '', 'Seat charge (not on courses)', '¥440', 'Charge', 'ask', 'no', 'Tabelog.', 'seat'),
    ] }, {
    cuisine: '団体向けの焼き鳥と創作料理の居酒屋 (食べログ、2018〜2025年の口コミ)・レバーなどの焼き鳥、唐揚げ、刺身の盛り合わせ、揚げ出し豆腐、ぶり大根、ちゃんこ鍋と雑炊 (2018〜2024年の口コミ)・飲み放題付きのコース4,000円ほど (2018〜2024年の口コミ)・4,000〜6,000円ほど (食べログ)',
    neighborhood: '烏丸六角',
    gf_detail: 'グルテンフリー不可。唐揚げ、たれの焼き鳥、ちゃんこ、雑炊 (2018〜2024年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、刺身、鍋 (2018〜2024年の口コミ)。',
    notes: '[焼き鳥の居酒屋・烏丸六角、深夜1時まで] 烏丸近くの遅くまで開く、宴会に人気の焼き鳥の居酒屋。刺身、焼き鳥、唐揚げ、ちゃんこ鍋の飲み放題付きコース。予約は前日まで、アラカルトは席料440円。喫煙可。2024年にはコースの量が少ないという声も。',
  });
}

save();
