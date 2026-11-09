// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 87.
//   + うないち Unaichi (Kansai-style eel at Teramachi-Nijo, opened April 2026)
//   + ブリスケロニー 四条烏丸 Brisket RONY (black-wagyu chadolbaki on a teppan, Shinmachi south of Nishikikoji)
//   + 佳久 Kakyu (casual creative Kyoto cooking on Oshikoji, counter, tatami and an upstairs floor)
//   - 京だんご 藤菜美 高台寺店, THE TASTE, 京八坂: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032898 (skipped), 26034614 (skipped),
//   26045054, 26013692 (skipped), 26032844, 26003456.
//   queue-status.jsonl grepped for each brand (藤菜美, THE TASTE, 京八坂, うないち, 佳久, ブリスケ): 藤菜美 has earlier
//   rulings (26025740, 26027247).
//   Data check (current main, hidden included): none of the three drafted is in data/kyoto.json by Tabelog id, name or romaji.
//   Same-name count (same brand or operator only): うないち — one shop in Kyoto; other “Una Ichi” eel shops elsewhere in
//   Japan are not linked to this one by any source, operator unknown — drafted, flagged. ブリスケロニー — invoice holder
//   MASTERMIND株式会社 (下京区堀之内町263, NTA register via the receipt invoice number on Tabelog); no other shop of that
//   operator found — drafted, flagged. 佳久 — one shop. Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against the Japanese original: うないち なし (Tabelog; the English line wrongly says a service
//   charge applies); none listed for ブリスケロニー or 佳久. A single September 2026 reviewer at ブリスケロニー reports
//   unexplained seat and service fees on the bill — one review only, so not in the record; flagged in the report.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032898', '京だんご 藤菜美 高台寺店: a chain — eight Fujinami shops in a Tabelog name search (same ruling as 26025740)');
skip('26034614', 'large parent: Mitsui Fudosan hotel — THE TASTE is the restaurant of sequence KYOTO GOJO, run by 株式会社三井不動産ホテルマネジメント (hotel site footer, checked 2026-11-08)');
skip('26013692', '京八坂: too thin — one short May 2026 review; the rest date from 2024 or earlier');

// ================================================================ うないち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045054/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_unaichi_teramachi_nijo', name: 'うないち (Unaichi)', category: 'OMNI',
    lat: 35.013113, lng: 135.768044, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel on rice with a sweet sauce; the sauce ingredients are not stated (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (Tabelog; 2026 reviews).',
    hours_raw: '11:00–15:00 and 17:00–21:00 daily; hours may change (Tabelog). No service charge (Tabelog, original なし; the English line says otherwise). Cards; QR incl. Alipay and WeChat Pay (Tabelog). 19 seats: six at the counter and two tables of four (May and July 2026), plus a private room for six (Tabelog; September 2026). Non-smoking (Tabelog). 5 min from Kyoto-Shiyakusho-mae station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo east of Teramachi — 5 min from Kyoto-Shiyakusho-mae',
    cuisine: 'Kansai-style eel, opened 25 April 2026 (May 2026) · split and grilled without steaming, head on, crisp skin and soft flesh, extra sauce at the table (July and September 2026) · unaju with half, one or two eels, ¥3,300 / ¥5,500 / ¥10,000; hitsumabushi ¥3,700 / ¥5,900 / ¥10,500 (July 2026)',
    website: null, gmaps: gm('うないち 京都 二条'), menu_url: TB + 'dtlmenu/',
    notes: '[Eel · Teramachi-Nijo, opened 2026] A new eel shop (April 2026) a few minutes from Kyoto City Hall, grilling Kansai-style — no steaming, so the skin comes out crisp. Unaju from ¥3,300 for half an eel; hitsumabushi too. Counter, two tables and a private room for six; open for lunch and dinner every day. Flagged: operator unknown.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Opened on 25 April 2026 (May 2026 review). No operator or chef was found.',
      philosophy: null, specialty: 'Kansai-style grilled eel: unaju and hitsumabushi.',
      anecdotes: [
        { text: 'A May 2026 reviewer went straight after the 25 April opening and found the grilling already steady.', source: R + 'B528143356/' },
        { text: 'A September 2026 family of three took the private room and ordered one whole-eel unaju and two half-eel ones.', source: R + 'B536295022/' },
      ],
      japanese_sources_summary: '食べログ: うないち、うなぎ、中京区二条通寺町東入ル榎木町92-7 佐野ビル、地下鉄京都市役所前駅から徒歩5分、毎日 11:00〜15:00・17:00〜21:00、サービス料なし、カード・QR (Alipay、WeChat Pay含む) 可、19席、個室6名、禁煙。口コミ (2026年、英語): 2026年4月25日開店、関西風で蒸さずに焼く、頭付き、カウンター6席と4人掛けテーブル2卓、うな重 (並・半尾 3,300円、上・1尾 5,500円、特上・2尾 10,000円)、ひつまぶし (3,700円、5,900円、10,500円)、たれの追加可。',
      confidence: 'low', sources: [TB, R + 'B528143356/', R + 'B529202835/', R + 'B530654687/', R + 'B531917347/', R + 'B533617165/', R + 'B536289405/', R + 'B536295022/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple menu of eel bowls; Alipay and WeChat Pay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通寺町東入ル榎木町92-7 佐野ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened April 2026; reviews dated May to September 2026.' },
    pin_source: `Tabelog ${TB} (35.013113, 135.768044); cross-checked: GSI 京都府京都市中京区榎木町92番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531917347/', R + 'B536295022/'],
    price_note: 'Prices from a July 2026 review; a September 2026 review gives the same ¥3,300 and ¥5,500 bowls but calls the whole-eel one “premium”. No service charge.', last_checked: TODAY, items: [
      it('', '', 'Unaju, half an eel', '¥3,300', 'Unaju', 'ask', 'no', 'July and September 2026.', 'unaju_half'),
      it('', '', 'Unaju, one whole eel', '¥5,500', 'Unaju', 'ask', 'no', 'July and September 2026.', 'unaju_whole'),
      it('', '', 'Unaju, two eels', '¥10,000', 'Unaju', 'ask', 'no', 'July 2026.', 'unaju_two'),
      it('', '', 'Hitsumabushi, half an eel', '¥3,700', 'Hitsumabushi', 'ask', 'no', 'July 2026.', 'hitsu_half'),
      it('', '', 'Hitsumabushi, one whole eel', '¥5,900', 'Hitsumabushi', 'ask', 'no', 'July 2026.', 'hitsu_whole'),
    ] }, {
    cuisine: '関西風のうなぎ、2026年4月25日開店 (2026年5月)・蒸さずに開いて焼く、頭付き、皮はパリッと身はふっくら、たれは卓上で追加可 (2026年7・9月)・うな重 半尾・1尾・2尾 3,300円/5,500円/10,000円、ひつまぶし 3,700円/5,900円/10,500円 (2026年7月)',
    neighborhood: '寺町の東、二条通。京都市役所前から徒歩5分',
    gf_detail: '要確認。甘いたれのうなぎをご飯に載せる。たれの材料は書かれていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。うなぎの専門店 (食べログ、2026年の口コミ)。',
    notes: '[うなぎ・寺町二条、2026年開店] 京都市役所から数分、2026年4月に開いたうなぎの店。蒸さない関西風で皮はパリッと焼き上がる。うな重は半尾3,300円から、ひつまぶしも。カウンター、テーブル2卓、6名の個室。昼も夜も毎日営業。運営会社は不明 (要確認)。',
  });
}

// ================================================================ ブリスケロニー 四条烏丸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_brisket_rony_shijo_karasuma', name: 'ブリスケロニー 四条烏丸 (Brisket RONY Shijo Karasuma)', category: 'OMNI',
    lat: 35.004419, lng: 135.757023, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thin-sliced brisket grilled on a teppan with house sauces, Korean pancake, fried rice; sauce ingredients are not stated (Tabelog menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable set (¥2,500) appears in a September 2026 review, but everything is cooked on the shared beef teppan with dashi-rolled egg; nothing is described as vegan (Tabelog menu; 2026 reviews).',
    hours_raw: '17:30–24:00 daily incl. public holidays; food last orders 23:45; closed irregularly (Tabelog). Cards, e-money and QR (Tabelog). 29 table seats on two floors; first-floor tables are small (Tabelog; October 2026). Designated smoking area inside (Tabelog). In a back lane close to Shijo station (May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi south of Nishikikoji — near Shijo station',
    cuisine: 'Chadolbaki — black-wagyu brisket from Ohashitei in Miyagawa-cho, sliced paper-thin and grilled on a dome teppan, ¥1,800 a head (Tabelog menu) · scallop set ¥2,800; vegetable set ¥2,500 (September 2026) · free-refill dashi-rolled egg cooked round the grill ¥600; takana-mentaiko fried rice ¥900 (Tabelog menu) · 120-minute all-you-can-drink chadolbaki plan ¥6,500 (May 2026)',
    website: null, gmaps: gm('ブリスケロニー 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Korean brisket grill · Shijo-Karasuma lane] A specialist in chadolbaki: paper-thin black-wagyu brisket grilled on a domed teppan with house condiments, dashi-rolled egg cooking round the edge with free refills, and fried rice to finish. Staff grill the first round and show how to eat it. Popular — book ahead. Flagged: operator MASTERMIND株式会社, other shops not found.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A March 2026 reviewer says the owner travelled through Korea to recreate this style of chadolbaki. The receipt invoice number on Tabelog belongs to MASTERMIND株式会社 (下京区).',
      philosophy: null, specialty: 'Black-wagyu chadolbaki on a domed teppan.',
      anecdotes: [
        { text: 'An October 2026 party of three noted bags handed out to keep belongings clear of oil spatter, and the fat draining off the domed grill.', source: R + 'B537249239/' },
        { text: 'A September 2026 first-timer, brought by a regular, found a short queue before opening.', source: R + 'B535756919/' },
      ],
      japanese_sources_summary: '食べログ: ブリスケロニー 四条烏丸、韓国料理・居酒屋、中京区新町通錦小路下ル小結棚町434-4、毎日 17:30〜24:00 (料理L.O. 23:45)、不定休、カード・電子マネー・QR可、テーブル29席、店内に喫煙所。メニュー: Miyagawa-cho の Ohashitei の黒毛和牛ブリスケットをプロトン凍結で極薄切りにしたチャドルバギ 1人1,800円、ホタテセット2,800円、だし巻き食べ放題600円、高菜明太炒飯900円。適格請求書: MASTERMIND株式会社 (下京区堀之内町263)。口コミ (2026年、英語): 店主は韓国を巡ってこの味を再現、野菜セット2,500円、120分飲み放題プラン6,500円、ドーム型の鉄板、2階は広いが1階のテーブルは小さい、予約で満席。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B525077472/', R + 'B527625924/', R + 'B529018832/', R + 'B535756919/', R + 'B536338404/', R + 'B537249239/', R + 'B537514208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill the first round and explain the set.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通錦小路下ル小結棚町434-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated March to October 2026.' },
    pin_source: `Tabelog ${TB} (35.004419, 135.757023); cross-checked: GSI 京都府京都市中京区小結棚町434番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B535756919/'],
    price_note: 'Prices from the Tabelog menu (shop-supplied) and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu chadolbaki (per person)', '¥1,800', 'Teppan', 'ask', 'no', 'Tabelog menu.', 'chadolbaki'),
      it('', '', 'Scallop set (per person)', '¥2,800', 'Teppan', 'ask', 'no', 'Tabelog menu; September 2026.', 'scallop_set'),
      it('', '', 'Vegetable set (per person)', '¥2,500', 'Teppan', 'ask', 'ask', 'September 2026.', 'veggie_set'),
      it('', '', 'Dashi-rolled egg, free refills', '¥600', 'Teppan', 'ask', 'no', 'Tabelog menu.', 'dashimaki'),
      it('', '', 'Korean pancake', '¥550', 'Side dishes', 'no', 'ask', 'Tabelog menu.', 'jeon'),
      it('', '', 'Takana-mentaiko fried rice', '¥900', 'Rice', 'ask', 'no', 'Tabelog menu.', 'fried_rice'),
    ] }, {
    cuisine: 'チャドルバギ。Miyagawa-cho の Ohashitei の黒毛和牛ブリスケットを極薄に切り、ドーム型の鉄板で焼く、1人1,800円 (食べログのメニュー)・ホタテセット2,800円、野菜セット2,500円 (2026年9月)・鉄板の周りで焼くだし巻き、おかわり自由600円、高菜明太炒飯900円 (食べログのメニュー)・120分飲み放題付きチャドルバギのプラン6,500円 (2026年5月)',
    neighborhood: '錦小路の南、新町通。四条駅の近く',
    gf_detail: '要確認。極薄のブリスケットを自家製のたれで鉄板焼き、チヂミ、炒飯。たれの材料は書かれていない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: '要確認。野菜セット (2,500円) が2026年9月の口コミにあるが、牛肉と同じ鉄板でだし巻きと一緒に焼く。ヴィーガンと書かれた品はない (食べログのメニュー、2026年の口コミ)。',
    notes: '[韓国の牛ブリスケット焼き・四条烏丸の路地] チャドルバギの専門店。極薄の黒毛和牛ブリスケットを自家製の薬味とともにドーム型の鉄板で焼き、周りではだし巻きが焼ける (おかわり自由)、締めは炒飯。最初はスタッフが焼いて食べ方を教えてくれる。人気なので予約を。運営はMASTERMIND株式会社、ほかの店舗は見つからず (要確認)。',
  });
}

// ================================================================ 佳久
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003456/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kakyu_oshikoji', name: '佳久 (Kakyu)', category: 'OMNI',
    lat: 35.012314, lng: 135.763523, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto dishes in dashi, white miso soup, sashimi, grilled fish, fried dishes, duck soba and mackerel sushi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dishes built on dashi, with fish, duck and seafood (2025–2026 reviews).',
    hours_raw: '17:30–23:00; closed the first and third Sundays of each month (Tabelog). Cards: JCB, AMEX and Diners only; no e-money or QR (Tabelog). 60 seats: a counter of about six to eight, a tatami room at the back (shoes off) and a second floor with tables (Tabelog; January 2025, April and September 2026). Private rooms (Tabelog). Non-smoking (Tabelog). About 10 min on foot from Karasuma-Oike, in a narrow lane (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji west of Yanagibaba — 10 min from Karasuma-Oike',
    cuisine: 'Creative Japanese and casual kaiseki à la carte, with daily specials unpriced on the board (Tabelog; April 2026) · Kyoto white miso soup, sea cucumber, crab, charcoal-grilled shiitake, a mini curry to finish (January 2025) · peas rice; new burdock and chicken hot pot; fried asparagus and conger eel; white-miso grilled Spanish mackerel (May 2025) · sashimi platter, fried oysters, grilled rice balls with plum (November 2025) · homemade karasumi; sawara sashimi; water eggplant (April 2026) · roast duck with figs; grilled sweet sea bream; duck soba; pressed mackerel sushi (September 2026)',
    website: null, gmaps: gm('佳久 押小路'), menu_url: TB,
    notes: '[Kyoto cooking · Oshikoji, counter and tatami] A local favourite down a narrow lane near Karasuma-Oike: a long à la carte menu of Kyoto dishes to go with drinks — sashimi, white miso soup, grilled fish, homemade karasumi, duck soba to finish — at prices well below a formal kaiseki. Counter, tatami room and an upstairs floor; JCB, AMEX and Diners only.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Reviewers describe a humble, friendly head chef with a craftsman’s seriousness (April 2026), working with young staff in front of many regulars (January 2025).',
      philosophy: 'A place where customers can drop in often, rather than an expensive kaiseki (April 2026 reviewer’s impression).', specialty: 'Dashi-based Kyoto dishes; homemade karasumi.',
      anecdotes: [
        { text: 'An April 2026 group on a second stop had homemade karasumi, sawara sashimi, water eggplant and two sakes upstairs for about ¥3,000 each.', source: R + 'B527234331/' },
        { text: 'A September 2026 business traveller, brought by a local, expected duck nanban soba and got a rich, creamy noodle bowl instead.', source: R + 'B534878792/' },
      ],
      japanese_sources_summary: '食べログ: 佳久 (かきゅう)、創作料理・日本料理、中京区押小路通柳馬場西入ル竹屋町169-2、17:30〜23:00、第1・第3日曜定休、カードはJCB・AMEX・Diners、電子マネー・QR不可、60席、個室あり、禁煙、夜の予算8,000〜9,999円。口コミ (2025〜2026年、英語): 大将と若いスタッフ、常連で満席、2階席もある、京の白味噌汁、なまこ、蟹、炭火の椎茸、締めのミニカレー、豆ご飯、新ごぼうと鶏の鍋、自家製からすみ、鰆の刺身、水茄子、鴨とイチジク、甘鯛、鴨そば、鯖の押し寿司、日替わりは値段の表示なし、カウンター6〜8席と奥に座敷。',
      confidence: 'low', sources: [TB, R + 'B499700643/', R + 'B499716380/', R + 'B506629125/', R + 'B511010994/', R + 'B516399465/', R + 'B527234331/', R + 'B534878792/'] },
    cultural_comfort: { level: 'japanese', note: 'Daily specials have no prices shown; shoes off in the tatami room; JCB, AMEX and Diners only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通柳馬場西入ル竹屋町169-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to September 2026. The listed site kakyu.net did not respond.' },
    pin_source: `Tabelog ${TB} (35.012314, 135.763523); cross-checked: GSI 京都府京都市中京区竹屋町169番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527234331/', R + 'B534878792/'],
    price_note: 'No menu prices found; daily specials are unpriced. Reviewers spent ¥3,000–¥10,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Homemade karasumi with daikon', '', 'Small plates', 'ask', 'no', 'April 2026.', 'karasumi'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'January and November 2025.', 'sashimi'),
      it('', '', 'Kyoto white miso soup', '', 'Soup', 'ask', 'no', 'January 2025.', 'shiromiso'),
      it('', '', 'Duck soba (to finish)', '', 'Rice and noodles', 'ask', 'no', 'September 2026.', 'kamo_soba'),
      it('', '', 'Pressed mackerel sushi', '', 'Rice and noodles', 'ask', 'no', 'September 2026.', 'saba_sushi'),
    ] }, {
    cuisine: '創作の和食、気軽な会席をアラカルトで、日替わりは値段の表示なし (食べログ、2026年4月)・京の白味噌汁、なまこ、蟹、炭火の椎茸、締めのミニカレー (2025年1月)・豆ご飯、新ごぼうと鶏の鍋、アスパラガスなどの揚げ物、鰆の白味噌焼き (2025年5月)・刺身の盛り合わせ、カキフライ、梅のたれの焼きおにぎり (2025年11月)・自家製からすみ、鰆の刺身、水茄子 (2026年4月)・鴨とイチジク、甘鯛の焼き物、鴨そば、鯖の押し寿司 (2026年9月)',
    neighborhood: '押小路通の柳馬場の西。烏丸御池から徒歩10分',
    gf_detail: '要確認。出汁の京料理、白味噌汁、刺身、焼き魚、揚げ物、鴨そば、鯖寿司。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁が基本で、魚、鴨、魚介 (2025〜2026年の口コミ)。',
    notes: '[京料理・押小路、カウンターと座敷] 烏丸御池近くの細い路地にある地元で人気の店。刺身、白味噌汁、焼き魚、自家製からすみ、締めの鴨そばなど、酒に合う京料理のアラカルトが豊富で、本格的な会席よりずっと手頃。カウンター、座敷、2階席。カードはJCB・AMEX・Dinersのみ。',
  });
}

save();
