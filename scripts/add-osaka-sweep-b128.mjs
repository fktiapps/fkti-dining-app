// Osaka sweep (2-mile circle around Dotonbori), batch 128 — mom / small-shop phase (all OMNI).
//   + 趣味焼肉ばばあ (counter yakiniku with raw-meat plates, open to 5:00 most nights; Higashi-Shinsaibashi 3F)
//   + イルピアット (counter Italian since 2004, famous assorted antipasti and wine; Higashi-Shinsaibashi)
//   + 魚菜屋 常峰 (small seafood kappo: sashimi platters, winter crab, sukiyaki spring rolls, sake; 2F)
//   + Wine Bar NOAM (wine bar since 2019, ~10 by the glass and a choose-your-wine pairing course; 2F, same building as Jidori Nabe Miura)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 128);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 趣味焼肉ばばあ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27131928/'; const R = TB + 'dtlrvwlst/';
  const L = day(['17:00', '05:00']);
  put({
    id: 'osaka_shumi_yakiniku_babaa_higashishinsaibashi', name: '趣味焼肉ばばあ (Shumi Yakiniku Babaa)', category: 'OMNI',
    lat: 34.67326, lng: 135.503276, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based yakiniku sauces; cold noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and offal throughout; raw-meat dishes; egg yolk.',
    hours_raw: 'Mon, Thu–Sun 17:00–05:00; Tue 17:00–24:00; closed Wed (Tabelog). Popular; reserve, even same day (October 2026). Cards and QR (PayPay, d Barai) accepted; no e-money; smoking allowed (Tabelog).',
    hours: { 0: L, 1: day(['17:00', '23:59']), 3: L, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-3, Groove Shinsaibashi East 3F — 5 min from Shinsaibashi and Nagahoribashi Stns',
    cuisine: 'Counter yakiniku, à la carte · raw-meat plates: outside-skirt yukhoe, heart sashimi, omasum sashimi · grilled liver · grill: thick-cut tongue (a special thick tongue off the menu), outside skirt, hanging tender, loin, "tsunami" · rare shabu-roast with sweet-spicy sauce and egg yolk, grilled by staff and served as a mini rice bowl · urute (trachea) yubiki · napa cabbage kimchi, offal stew · to finish: Morioka cold noodles with sudachi, ramen, outside-skirt fried rice · choice of sauces · long drink list · 12 counter seats',
    website: null, gmaps: gm('趣味焼肉ばばあ'), menu_url: null,
    notes: "[Yakiniku · lively counter yakiniku open until 5 am, Higashi-Shinsaibashi] A twelve-seat, all-counter yakiniku on a third floor five minutes from Shinsaibashi, open since 2022 and until 5:00 on most nights, so it works after the last train. It's à la carte, with a run of raw-meat plates (outside-skirt yukhoe, heart and omasum sashimi) before the grill: thick-cut tongue over charcoal, outside skirt and hanging tender. Don't skip the rare shabu-roast, which staff grill and serve over rice with egg yolk. Finish with Morioka cold noodles, ramen or the outside-skirt fried rice. Two diners rate the value highly for the quality. It fills up, so book. Smoking allowed. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 September 2022 (Tabelog); has a sister restaurant (September 2026 review).', background: 'Counter yakiniku (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Counter yakiniku with raw-meat plates; late-night hours.',
      anecdotes: [
        { text: '"The Rare Shabu-Roast was incredibly delicious! The thinly sliced roast melted in my mouth, and the sweet and spicy sauce coated it perfectly… The staff grilled it for us and served it as a mini rice bowl." — October 2026.', source: R + 'B536832913/' },
        { text: '"I grill the thick tongue slowly over the charcoal grill… It\'s thick yet incredibly tender… You definitely need to have some white rice to go with it." — September 2026.', source: R + 'B536893052/' },
      ],
      japanese_sources_summary: '食べログ: 趣味焼肉ばばあ、大阪市中央区東心斎橋1-17-3 Groove心斎橋East 3F、長堀橋駅・心斎橋駅から徒歩5分、月・木〜日 17:00〜翌5:00、火 17:00〜24:00、水休み、カード・QR (PayPay、d払い) 可、電子マネー不可、カウンター12席、喫煙可、2022年9月16日開店。口コミ(2026年9〜10月): 姉妹店あり、アラカルト、生肉メニューが多い (ハラミのユッケ、ハツ刺し、センマイ刺し、焼きレバー)、厚切りタン (メニューにない特上の厚切りも)、ハラミ、サガリ、ロース、Tsunami、レアしゃぶロースは甘辛いたれと卵黄で、店の人が焼いてミニ丼に、Urute no Yubiki、白菜キムチ、ホルモン煮込み、締めのMorioka の冷麺とすだち、ラーメン、ハラミ炒飯、たれを選べる、飲み物が豊富、活気のあるカウンター、終電後でも行ける、予約がおすすめ、コスパが良い、親切な店員。',
      confidence: 'medium', sources: [TB, R + 'B535873409/', R + 'B535905945/', R + 'B536117464/', R + 'B536832913/', R + 'B536893052/', R + 'B538165601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Energetic staff; à la carte ordering (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-3 Groove心斎橋East 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番3号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536832913/', R + 'B536893052/', R + 'B535905945/'],
    price_note: 'No prices in the reviews; JPY 5,000–7,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Outside-skirt yukhoe (raw)', '', 'Raw', 'no', 'no', 'October 2026.', 'yukhoe'),
      it('', '', 'Heart sashimi (raw)', '', 'Raw', 'ask', 'no', 'October 2026.', 'hatsu_sashi'),
      it('', '', 'Omasum sashimi (raw)', '', 'Raw', 'ask', 'no', 'October 2026.', 'senmai'),
      it('', '', 'Thick-cut tongue', '', 'Grill', 'ask', 'no', 'October 2026.', 'atsugiri_tan'),
      it('', '', 'Outside skirt', '', 'Grill', 'ask', 'no', 'October 2026.', 'harami'),
      it('', '', 'Rare shabu-roast with egg yolk, as a mini rice bowl', '', 'Grill', 'no', 'no', 'October 2026.', 'shabu_roast'),
      it('', '', 'Morioka cold noodles', '', 'To finish', 'no', 'no', 'October 2026.', 'reimen'),
      it('', '', 'Outside-skirt fried rice', '', 'To finish', 'no', 'no', 'September 2026.', 'harami_chahan'),
    ] }, {
    cuisine: 'カウンターの焼肉、アラカルト・生肉: ハラミのユッケ、ハツ刺し、センマイ刺し、焼きレバー・焼き: 厚切りタン (メニューにない特上の厚切りも)、ハラミ、サガリ、ロース、Tsunami・甘辛いたれと卵黄のレアしゃぶロース、店の人が焼いてミニ丼に・Urute no Yubiki・白菜キムチ、ホルモン煮込み・締め: すだちのMorioka の冷麺、ラーメン、ハラミ炒飯・たれを選べる・飲み物が豊富・カウンター12席',
    neighborhood: '中央区東心斎橋1-17-3 Groove心斎橋East 3F。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。醤油ベースの焼肉のたれ、冷麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモンばかり、生肉の料理、卵黄。',
    notes: '[焼肉・東心斎橋、朝5時まで開くにぎやかなカウンター焼肉] 心斎橋から5分のビル3階、全12席がカウンターの焼肉店で、2022年開店、ほとんどの夜は朝5時まで営業するので終電後でも行ける。アラカルトで、焼く前に生肉の皿 (ハラミのユッケ、ハツ刺し、センマイ刺し) が並び、炭火で厚切りタン、ハラミ、サガリ。外せないのはレアしゃぶロースで、店の人が焼いて卵黄とご飯にのせてくれる。締めはMorioka の冷麺、ラーメン、ハラミ炒飯。質の割にお得という声。すぐ埋まるので予約を。喫煙可。水曜休み。',
  });
}

// ================================================================ イルピアット
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27010127/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ilpiatto.info/honten/';
  const L = day(['17:00', '01:00']);
  put({
    id: 'osaka_il_piatto_higashishinsaibashi', name: 'イルピアット (Il Piatto)', category: 'OMNI',
    lat: 34.672632, lng: 135.505043, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta; pizza; risotto may be stock-based — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese, seafood, duck and beef; cod roe in the antipasti.',
    hours_raw: 'Mon, Wed–Sat and days before public holidays 17:00–01:00; Sun and public holidays 17:00–22:00; closed Tue; Sunday-before-holiday hours by phone (Tabelog). Reservations recommended (Tabelog). Seat charge ¥200 per person, ¥250 when booked online (Tabelog). Cards and PayPay accepted; no e-money; no smoking, ashtray at the entrance (Tabelog).',
    hours: { 0: L, 2: L, 3: L, 4: L, 5: L, 6: day(['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-6-30, Shimizumachi Bldg 1F — 3 min from Nagahoribashi Stn exit 7',
    cuisine: 'Counter Italian and wine · signature assorted antipasti, more than ten items · herb-butter baked cod roe · pasta: freshly grated Genovese, cheese-loaded, squid ink, limited fresh porcini peperoncino · seafood bouillabaisse · four-cheese pizza, anchovy and garlic pizza · roast duck · roast black wagyu inside round · risotto to finish · wines by the glass and bottle, picked to taste · counter seats; private use for 8–10',
    website: OWN, gmaps: gm('イルピアット'), menu_url: null,
    notes: "[Italian · counter Italian famous for its antipasti platter, Higashi-Shinsaibashi] A small, lively counter Italian a few minutes from Nagahoribashi, open since 2004 and usually full, so book. The star is the assorted antipasti: more than ten creative little dishes, enough alone with a glass of wine, and one diner saw neighbors do just that. Beyond it, try the roast duck, the black wagyu roast, a seafood bouillabaisse or squid ink pasta in generous portions, and finish with risotto. Staff pick wines to your taste, including some not on the list. One diner found the Genovese short on basil and the pizza ordinary. Seating is a little cramped. ¥200 seat charge. Open until 1:00; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 July 2004 (Tabelog)', background: 'Counter Italian restaurant; expanded into the space next door (September 2026 review).', philosophy: null, specialty: 'Assorted antipasti; Italian with wine.',
      anecdotes: [
        { text: '"The signature appetizer assortment featured over 10 different items. It was visually stunning, with each dish showcasing creativity, making it the most memorable part of our meal." — September 2026.', source: R + 'B536412910/' },
        { text: '"There were many types of wine available, and when I mentioned my preferences… options that weren\'t on the list." — September 2026.', source: R + 'B536472102/' },
      ],
      japanese_sources_summary: '食べログ: イルピアット、大阪市中央区東心斎橋1-6-30 清水町ビル1F、長堀橋駅7番出口から徒歩3分、月・水〜土・祝前日 17:00〜翌1:00、日・祝 17:00〜22:00、火休み、予約がおすすめ、席料1人200円 (ネット予約は250円)、カード・PayPay 可、電子マネー不可、禁煙 (入口に灰皿)、8〜10名で貸切可、2004年7月28日開店、公式サイトあり。口コミ(2021年〜2026年10月): 名物の前菜盛り合わせ (10品以上)、鴨のロースト、締めのリゾット、たらこのハーブバター焼き、チーズたっぷりのパスタ、隣の区画に広げた大きなカウンター、にぎやかな雰囲気、削りたてのジェノベーゼは バジルの香りが弱く麺は硬めという声、4種のチーズのピザ、黒毛和牛のロースト、好みを伝えるとリストにないワインも、期間限定の生ポルチーニのペペロンチーノ、魚介のブイヤベースとイカ墨のパスタは量が多い、席は少し狭い、気配りのある店員、アンチョビとにんにくのピザ、見送り、見つけにくい場所、コスパが良い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B444519448/', R + 'B536412910/', R + 'B536472102/', R + 'B536819380/', R + 'B537838631/', R + 'B538161228/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; staff help choose wine (September–October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-30 清水町ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.672608, 135.505043); same building as Menya Kirameki (osaka_menya_kirameki_higashishinsaibashi), pin set ~7 m north of it so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目6番30号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536412910/', R + 'B536819380/', R + 'B444519448/'],
    price_note: 'Few prices in the reviews; JPY 5,000–7,999 average (Tabelog); ¥200 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Signature assorted antipasti', '', 'Antipasti', 'no', 'no', 'September–October 2026.', 'antipasto'),
      it('', '', 'Freshly grated Genovese pasta', '', 'Pasta', 'no', 'no', 'September 2026.', 'genovese'),
      it('', '', 'Squid ink pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'nero'),
      it('', '', 'Seafood bouillabaisse', '', 'Mains', 'ask', 'no', 'October 2026.', 'bouillabaisse'),
      it('', '', 'Roast duck', '', 'Mains', 'ask', 'no', 'October 2026.', 'duck'),
      it('', '', 'Roast black wagyu inside round', '', 'Mains', 'ask', 'no', 'September 2026.', 'wagyu'),
      it('', '', 'Four-cheese pizza', '', 'Pizza', 'no', 'no', 'September 2026.', 'quattro'),
      it('', '', 'Risotto', '', 'To finish', 'ask', 'no', 'October 2026.', 'risotto'),
    ] }, {
    cuisine: 'カウンターのイタリアンとワイン・名物の前菜盛り合わせ (10品以上)・たらこのハーブバター焼き・パスタ: 削りたてのジェノベーゼ、チーズたっぷり、イカ墨、期間限定の生ポルチーニのペペロンチーノ・魚介のブイヤベース・4種のチーズのピザ、アンチョビとにんにくのピザ・鴨のロースト・黒毛和牛のロースト・締めのリゾット・好みに合わせて選ぶグラスとボトルのワイン・カウンター席、8〜10名で貸切可',
    neighborhood: '中央区東心斎橋1-6-30 清水町ビル1F。長堀橋駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。パスタ、ピザ、リゾットはだしを確認。',
    vegan_detail: 'ヴィーガンではありません。チーズ、魚介、鴨と牛肉、前菜のたらこ。',
    notes: '[イタリアン・東心斎橋、前菜盛り合わせが名物のカウンターイタリアン] 長堀橋から数分の小さくにぎやかなカウンターのイタリアンで、2004年開店、いつも満席なので予約を。主役は前菜盛り合わせ: 10品以上の工夫を凝らした小皿で、ワインとこれだけでも満足でき、そうして帰る客を見たという声も。ほかに鴨のロースト、黒毛和牛のロースト、量の多い魚介のブイヤベースやイカ墨のパスタ、締めはリゾット。ワインは好みを伝えるとリストにないものも出してくれる。ジェノベーゼはバジルが弱く、ピザは普通だったという声も。席は少し狭い。席料200円。深夜1時まで、火曜休み。',
  });
}

// ================================================================ 魚菜屋 常峰
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099334/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sakanayatsunemine.wixsite.com/index';
  const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_sakanaya_tsunemine_higashishinsaibashi', name: '魚菜屋 常峰 (Sakanaya Tsunemine)', category: 'OMNI',
    lat: 34.673299, lng: 135.503494, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and fried dishes; soy and ponzu; sukiyaki; udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood throughout; beef and pork; dashi.',
    hours_raw: 'Mon–Sat 17:00–24:00; closed Sun (Tabelog). Reservations recommended (December 2025). Cards and PayPay accepted; no e-money; smoking allowed (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-23, Sumiyoshi Bldg 2F — 4 min from Shinsaibashi Stn',
    cuisine: 'Seafood kappo-izakaya · assorted sashimi, omakase sashimi; fugu sashimi platter in season · winter crab (tagged), crab miso · crab course; seasonal course: white-fish tempura with ume and shiso, sashimi, crab, grilled yellowtail collar, fried shrimp, beef steak, anko hot pot · hamo hot pot · grilled eel · sukiyaki, with udon to finish · sukiyaki-style spring rolls · salt pork with miso, pork with ponzu · beef tataki with ponzu · beef tendon stew · young corn tempura in its husk, burdock tempura, stuffed fried lotus root · shrimp mayo · fruit tomato, tamagoyaki, broccoli namul · karasumi · sake, whisky (Yamazaki, Chita, Macallan) · 6 counter seats and 4 tables',
    website: OWN, gmaps: gm('魚菜屋 常峰'), menu_url: null,
    notes: "[Seafood · small seafood kappo with sashimi, crab and sake, Higashi-Shinsaibashi] A small, calm second-floor kappo-izakaya near Shinsaibashi, with six counter seats and four tables, built around fish: generous sashimi platters (fugu in season), and in winter, tagged crab with its miso, alone or as a course. The rest of the menu ranges wide: sukiyaki with udon to finish, sukiyaki-style spring rolls, salt pork with miso, beef tataki with ponzu, beef tendon stew, and seasonal tempura such as whole young corn fried in its husk. A good sake list plus Japanese whiskies. Expect about ¥7,000–10,000 per person. Friendly service. Book ahead; smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Seafood kappo-izakaya (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Sashimi; winter crab; seasonal Japanese dishes.',
      anecdotes: [
        { text: '"The assorted sashimi, salt pork with miso, and spring rolls styled like sukiyaki are all consistently high-quality and delicious dishes, no matter when I visit." — September 2026.', source: R + 'B503131047/' },
        { text: '"The tempura of young corn was delicious… fried it whole, including the husks, allowing me to enjoy its crispy texture and sweetness." — June 2026.', source: R + 'B530627765/' },
      ],
      japanese_sources_summary: '食べログ: 魚菜屋 常峰、大阪市中央区東心斎橋1-14-23 住吉ビル2F、心斎橋駅から徒歩4分、長堀橋駅から徒歩5分、月〜土 17:00〜24:00、日休み、カード・PayPay 可、電子マネー不可、12席、喫煙可、公式サイトあり。口コミ(2025年1月〜2026年9月): 刺身の盛り合わせ、塩豚の味噌、すき焼き風の春巻き、からすみ、豚ポン酢、牛たたきポン酢、フルーツトマト、だし巻き、ふぐ入りの刺身盛り、カニ身の大盛り、ピンクのタグのカニとカニ味噌のコース、白身魚の梅しそ天ぷら、ブリカマ焼き、エビフライ、牛ステーキ、あんこう鍋、ごぼう天ぷら、ブロッコリーのナムル、日本酒が豊富、皮ごと揚げたヤングコーンの天ぷら、山崎・知多・マッカランなどのウイスキー、ハモ鍋、うなぎの蒲焼き、エビマヨ、れんこんのはさみ揚げ、すき焼きと締めのうどん、カウンター6席とテーブル4卓、予約がおすすめ、落ち着いた雰囲気、気さくな店長、1人7,000〜10,000円ほど。',
      confidence: 'medium', sources: [TB, OWN, R + 'B503131047/', R + 'B516828560/', R + 'B517967516/', R + 'B527008456/', R + 'B530627765/', R + 'B535369397/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm room; friendly manager (November 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-23 住吉ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番23号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503131047/', R + 'B535369397/', R + 'B516828560/'],
    price_note: 'No dish prices in the reviews; about ¥7,000–10,000 per person (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'September 2026.', 'sashimi'),
      it('', '', 'Crab (winter) and crab course', '', 'Seasonal', 'ask', 'no', 'February 2026.', 'kani'),
      it('', '', 'Sukiyaki-style spring rolls', '', 'Dishes', 'no', 'no', 'September 2026.', 'harumaki'),
      it('', '', 'Salt pork with miso', '', 'Dishes', 'no', 'no', 'September 2026.', 'shiobuta'),
      it('', '', 'Beef tataki with ponzu', '', 'Dishes', 'no', 'no', 'May 2025.', 'gyu_tataki'),
      it('', '', 'Young corn tempura (in its husk)', '', 'Tempura', 'no', 'ask', 'June 2026.', 'corn_ten'),
      it('', '', 'Sukiyaki with udon to finish', '', 'Hot pot', 'no', 'no', 'September 2026.', 'sukiyaki'),
    ] }, {
    cuisine: '魚介の割烹居酒屋・刺身の盛り合わせ、おまかせの刺身、時季はふぐ入り・冬のタグ付きのカニ、カニ味噌・カニのコース、季節のコース: 白身魚の梅しそ天ぷら、刺身、カニ、ブリカマ焼き、エビフライ、牛ステーキ、あんこう鍋・ハモ鍋・うなぎの蒲焼き・すき焼きと締めのうどん・すき焼き風の春巻き・塩豚の味噌、豚ポン酢・牛たたきポン酢・牛すじ煮込み・皮ごと揚げたヤングコーンの天ぷら、ごぼうの天ぷら、れんこんのはさみ揚げ・エビマヨ・フルーツトマト、だし巻き、ブロッコリーのナムル・からすみ・日本酒、ウイスキー (Yamazaki、Chita、Macallan)・カウンター6席とテーブル4卓',
    neighborhood: '中央区東心斎橋1-14-23 住吉ビル2F。心斎橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。天ぷらと揚げ物、醤油とポン酢、すき焼き、うどん。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、牛肉と豚肉、だし。',
    notes: '[魚介・東心斎橋、刺身とカニと日本酒の小さな割烹] 心斎橋近くのビル2階、カウンター6席とテーブル4卓の落ち着いた割烹居酒屋で、軸は魚: たっぷりの刺身の盛り合わせ (時季はふぐも)、冬はタグ付きのカニとカニ味噌を単品かコースで。ほかの料理も幅広く、締めにうどんのすき焼き、すき焼き風の春巻き、塩豚の味噌、牛たたきポン酢、牛すじ煮込み、皮ごと揚げたヤングコーンなど季節の天ぷら。日本酒が充実し、国産ウイスキーも。1人7,000〜10,000円ほど。気さくな接客。予約を。喫煙可。日曜休み。',
  });
}

// ================================================================ Wine Bar NOAM
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27110361/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.winebar-noam.com';
  const L = day(['17:00', '02:00']); const S = day(['17:00', '23:59']);
  put({
    id: 'osaka_wine_bar_noam_higashishinsaibashi', name: 'Wine Bar NOAM', category: 'OMNI',
    lat: 34.673277, lng: 135.502684, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: bruschetta; egg sandwich; soba crackers; pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mascarpone, egg, abalone and tartare on the food menu; ask about the wines.',
    hours_raw: 'Mon–Sat 17:00–02:00 (last order food 01:00, drinks 01:30); Sun and public holidays 17:00–24:00 (last order food 23:00, drinks 23:30); closing days not fixed (Tabelog). Service charge ¥880 per person (Tabelog). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-27, Nippo New Columbus Bldg 2F — 5 min from Shinsaibashi Stn',
    cuisine: 'Wine bar · Champagne, white and red by the glass, about ten open at a time, from affordable to robust · pairing course with dinner: two wines offered at each step to choose from · food: egg sandwich, strawberry and mascarpone caprese, beef tartare, abalone bruschetta, cold pasta · snacks: soba crackers, coconut chips · 8 counter seats, high tables and booths for 2–6',
    website: OWN, gmaps: gm('Wine Bar NOAM'), menu_url: null,
    notes: "[Wine bar · relaxed wine bar with a choose-your-wine pairing course, Higashi-Shinsaibashi] A chic second-floor wine bar near Shinsaibashi, open since 2019 until 2:00, with an eight-seat counter plus high tables and booths. You can't see in from outside, but the welcome is calm and kind. About ten wines are open by the glass at any time, from easy Champagne to bigger reds, and the three wine staff will steer you. For dinner, the pairing course offers two wines at each step and lets you pick. Food goes beyond snacks: the egg sandwich has fans, along with abalone bruschetta, tartare and a strawberry-mascarpone caprese. Easy to visit alone or as a second stop. ¥880 service charge per person.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 April 2019 (Tabelog)', background: 'Wine bar run by three wine staff (September 2026 review).', philosophy: null, specialty: 'Wines by the glass; pairing course.',
      anecdotes: [
        { text: '"For the pairings… two wine options each time, allowing you to choose your preference… around 10 different wines open by the glass…" — July 2026, pairing course with dinner.', source: R + 'B532114093/' },
        { text: '"…a wide selection of champagne, white, and red wines by the glass, ranging from affordable options to more robust bottles…" — September 2026.', source: R + 'B535450918/' },
      ],
      japanese_sources_summary: '食べログ: Wine Bar NOAM、大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 2F、心斎橋駅から徒歩5分、長堀橋駅から徒歩6分、月〜土 17:00〜翌2:00 (L.O. 料理1:00、ドリンク1:30)、日・祝 17:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、定休日不定、サービス料880円、カード・PayPay 可、電子マネー不可、20席 (カウンター8、ハイテーブル、2〜6名のボックス)、2019年4月7日開店、公式サイトあり。口コミ(2025年5月〜2026年9月): グラスのシャンパン、白、赤、そばせんべいとココナッツチップス、いちごとマスカルポーネのカプレーゼ、外から中が見えないが店の人は親切で落ち着いている、ワイン以外も豊富、たまごサンド、二軒目に、ディナー付きのペアリングコースは毎回2種から選べる、グラスで10種ほど、落ち着いたカウンター、タルタル、アワビのブルスケッタ、冷製パスタ、3人のワインスタッフ、一人でも行きやすい。',
      confidence: 'medium', sources: [TB, OWN, R + 'B507194757/', R + 'B528245473/', R + 'B528378953/', R + 'B532114093/', R + 'B534470768/', R + 'B535450918/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm, kind staff; easy solo (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.67334, 135.502684); same building as Sarunokoshikake (osaka_iketako_sarunokoshikake, 7F) and Jidori Nabe Miura (5F, offset north), pin offset ~7 m south so the three do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目17番27号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532114093/', R + 'B535450918/', R + 'B528245473/'],
    price_note: 'No prices in the reviews; ¥880 service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Wine by the glass (about ten open)', '', 'Wine', 'ask', 'ask', 'September 2026.', 'glass'),
      it('', '', 'Pairing course with dinner', '', 'Courses', 'no', 'no', 'July 2026.', 'pairing'),
      it('', '', 'Egg sandwich', '', 'Food', 'no', 'no', 'May 2026.', 'tamago_sando'),
      it('', '', 'Strawberry and mascarpone caprese', '', 'Food', 'ask', 'no', 'May 2025.', 'caprese'),
      it('', '', 'Abalone bruschetta', '', 'Food', 'no', 'no', 'August 2026.', 'bruschetta'),
    ] }, {
    cuisine: 'ワインバー・グラスのシャンパン、白、赤を常時10種ほど、手頃なものからしっかりしたものまで・ディナー付きのペアリングコース: 毎回2種のワインから選べる・料理: たまごサンド、いちごとマスカルポーネのカプレーゼ、タルタル、アワビのブルスケッタ、冷製パスタ・つまみ: そばせんべい、ココナッツチップス・カウンター8席、ハイテーブル、2〜6名のボックス',
    neighborhood: '中央区東心斎橋1-17-27 日宝ニューコロンブスビル 2F。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ブルスケッタ、たまごサンド、そばせんべい、パスタ。',
    vegan_detail: 'ヴィーガンではありません。マスカルポーネ、卵、アワビ、タルタル。ワインは確認を。',
    notes: '[ワインバー・東心斎橋、ワインを選べるペアリングコースのある気軽なワインバー] 心斎橋近くのビル2階にある落ち着いたワインバーで、2019年開店、深夜2時まで、カウンター8席とハイテーブル、ボックス席。外から中は見えないが、迎えは穏やかで親切。グラスで常時10種ほど、軽いシャンパンからしっかりした赤まで、3人のワインスタッフが案内してくれる。ディナーのペアリングコースは毎回2種から好きな方を選べる。料理もつまみ以上で、たまごサンドが好評、アワビのブルスケッタ、タルタル、いちごとマスカルポーネのカプレーゼも。一人でも、二軒目にも。サービス料1人880円。',
  });
}

save();
