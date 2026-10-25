// Ginza Station half-mile sweep (805 m), batch 61 — the four fetched in b60 (all OMNI).
//   + トウキョウ エールワークス ステーション タップルーム エキュートエディション有楽町店 (Itabashi brewery's taproom under the tracks)
//   + 釜あげスパゲッティ すぱじろう 銀座店 (soup-style spaghetti chain)
//   + カンティーナ シチリアーナ トゥット イル マーレ 銀座4丁目 (Sicilian branch; main shop listed Bib Gourmand per Tabelog)
//   + 銀座ZION (basement Italian bar for parties; operator restaurantinnovation.jp)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ TOKYO ALEWORKS
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13250415/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:00']);
  put({
    id: 'tokyo_aleworks_yurakucho', name: 'トウキョウ エールワークス ステーション タップルーム エキュートエディション有楽町店 (TOKYO ALEWORKS STATION TAPROOM)', category: 'OMNI',
    lat: 35.675231, lng: 139.763166,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer taproom (barley beer) serving burgers on buns; no gluten-free beer or option is mentioned. Tabelog notes allergy information is available — ask for it.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: beef burgers, roast beef and potato salad; no vegan option is mentioned.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). Cards, IC and QR accepted. Standing area plus tables.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Under the JR tracks at Yūrakuchō Stn, ecute EDITION Yurakucho — 1 min from JR Yūrakuchō',
    cuisine: 'Brewery taproom · 11 taps from its own Itabashi brewery · 100%-beef burgers, roast beef · tasting flights', cuisine_type: 'other',
    website: 'https://tokyoaleworks.com/taprooms/', gmaps: gm('TOKYO ALEWORKS STATION TAPROOM 有楽町'), menu_url: null,
    notes: "[Craft beer · under the Yūrakuchō tracks] The station taproom of Tokyo Aleworks, a brewery based in Itabashi, open since 2020 under the elevated JR tracks a minute from Yūrakuchō Station. Forty places: a short counter, tables and a standing area. Eleven taps rotate daily, and a three-beer flight is the easy way in, though it can sell out. A September 2026 flight was Tasty IPA, Downtown Tokyo Brown and Yoyogi Lazy Hazy. Food is 100%-beef burgers, roast beef (the staff recommendation) and Japanese-style potato salad. Many customers are visitors from abroad, and it works as a quick stop after an event at the Forum. One regular finds the beers less refined than they'd like. Tabelog notes allergy information is available.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 August 2020 (Tabelog)', background: 'Taproom of the Tokyo Aleworks brewery (Itabashi).', philosophy: '"Be The Craft Revolution" (Tabelog listing).', specialty: 'House craft beer; burgers.',
      anecdotes: [
        { text: '"I ordered a flight of three craft beers: Tasty IPA, Downtown Tokyo Brown, Yoyogi Lazy Hazy and a Japanese-style potato salad!" — September 2026.', source: R + 'B535782180/' },
        { text: '"The recommended food is the roast beef, and it was delicious!" — October 2026.', source: R + 'B537945936/' },
      ],
      japanese_sources_summary: '食べログ: TOKYO ALEWORKS STATION TAPROOM エキュートエディション有楽町店、千代田区有楽町2-9-7 JR東日本有楽町駅高架下 エキュートエディション有楽町、JR有楽町駅から徒歩1分、40席(カウンター5・テーブル19・立ち16)、毎日11:00〜23:00、カード・IC・QR可、2020年8月31日開店、アレルギー表示あり。店の紹介: 板橋の自社醸造所から直送のクラフトビール、日替わり11タップ、牛100%パティのバーガー。2026年の口コミ: 3種の飲み比べ(Tasty IPA、Downtown Tokyo Brown、Yoyogi Lazy Hazy)、和風ポテトサラダ、おすすめのローストビーフ、飲み比べセットは品切れのことも、外国人客が多い、ビールは物足りないとの声も。',
      confidence: 'medium', sources: [TB, R + 'B535782180/', R + 'B537945936/', R + 'B537000993/', R + 'B536114972/'] },
    cultural_comfort: { level: 'english', note: 'Popular with visitors from abroad; casual bar service.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-9-7 JR東日本有楽町駅高架下 エキュートエディション有楽町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目9番7号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535782180/', R + 'B537945936/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–3,000.', last_checked: TODAY, items: [
      it('クラフトビール3種飲み比べ', '', 'Three-beer tasting flight (e.g. Tasty IPA, Downtown Tokyo Brown, Yoyogi Lazy Hazy)', '', 'Beer', 'no', 'ask', 'September 2026.', 'flight'),
      it('ローストビーフ', 'roosuto biifu', 'Roast beef', '', 'Food', 'ask', 'no', '', 'roast_beef'),
      it('ハンバーガー', 'hanbaagaa', '100%-beef patty burger', '', 'Food', 'no', 'no', '', 'burger'),
    ] }, {
    cuisine: 'ブルワリーのタップルーム・板橋の自社醸造所から11タップ・牛100%のバーガー、ローストビーフ・飲み比べ',
    neighborhood: 'JR有楽町駅の高架下、エキュートエディション有楽町。JR有楽町駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。大麦のクラフトビールとバンズのバーガーの店で、グルテンフリーのビールや料理は書かれていません。食べログにはアレルギー表示ありとあるので確認を。',
    vegan_detail: '記述上はヴィーガンではありません。牛肉のバーガー、ローストビーフ、ポテトサラダで、ヴィーガンの選択肢は書かれていません。',
    notes: '[クラフトビール・有楽町の高架下] 板橋に醸造所を持つ Tokyo Aleworks の駅のタップルームで、2020年からJR有楽町駅から1分の高架下に。短いカウンター、テーブル、立ち飲みスペースで40人。日替わりの11タップで、まずは3種の飲み比べがおすすめですが、品切れのことも。2026年9月の飲み比べは Tasty IPA、Downtown Tokyo Brown、Yoyogi Lazy Hazy。料理は牛100%パティのバーガー、スタッフおすすめのローストビーフ、和風ポテトサラダなど。外国人客が多く、フォーラム帰りの一杯にも。ビールがやや物足りないという常連の声も。食べログにはアレルギー表示ありと記載。',
  });
}

// ================================================================ すぱじろう 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13111925/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_spajiro_ginza3', name: '釜あげスパゲッティ すぱじろう 銀座店', category: 'OMNI',
    lat: 35.673283, lng: 139.765996,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-spaghetti chain (boiled-to-order spaghetti, soup pastas, baguette); no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: squid, chicken, cream and cod-roe pastas; no vegan option is mentioned.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog; may change). No table charge. Cards (JCB, AMEX) and e-money accepted; no QR. Takeout.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ōkura Bekkan 1F–2F — 2 min from Ginza-itchōme exit 5, 3 min from Ginza Stn B2',
    cuisine: 'Kamaage-spaghetti chain · garlicky peperoncino, soup pastas, seasonal cream pasta · large sizes · ¥1,000–2,000', cuisine_type: 'other',
    website: 'http://www.spajiro.com/index.html', gmaps: gm('すぱじろう 銀座店 銀座3-4-1'), menu_url: null,
    notes: "[Chain · boiled-to-order spaghetti] A busy 44-seat branch of the Supajiro chain, open since 2010, with a counter that feels like a ramen shop. The house style is kama-age spaghetti boiled to order, often in a loose, soupy sauce. October 2026 diners had a garlicky spear-squid and spinach peperoncino with lemon, a seasonal chicken, mushroom and sanshō cream pasta, and a garlic tomato soup pasta, in large sizes. Reviews are split: fans call it consistently decent, while one diner waited 40 minutes for dry, oily pasta. About ¥1,000–2,000; no table charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 June 2010 (Tabelog); chain branch', background: 'Chain-run.', philosophy: null, specialty: 'Soup-style spaghetti.',
      anecdotes: [
        { text: '"I ordered the seasonal pasta: a cream pasta with chicken, mushrooms, and sansho pepper, as well as a garlic-infused tomato-based soup pasta." — October 2026.', source: R + 'B537406764/' },
        { text: '"This time, it took 40 minutes for my order to arrive, which was surprising!" — October 2026.', source: R + 'B537663577/' },
      ],
      japanese_sources_summary: '食べログ: 釜あげスパゲッティ すぱじろう 銀座店、銀座3-4-1 大倉別館1F・2F、銀座一丁目駅5番出口から徒歩2分、44席、毎日11:00〜22:00、チャージなし、カード(JCB・AMEX)・電子マネー可、QR不可、テイクアウト可、2010年6月2日開店、公式サイト spajiro.com。2026年10月の口コミ: ヤリイカとほうれん草のペペロンチーノ(ニンニクたっぷり、レモン付き)、季節の鶏とキノコと山椒のクリーム、ニンニクの効いたトマトのスープパスタ、大盛り、ラーメン店のようなカウンター、スープパスタのようなゆるいソース、提供に40分かかった・パスタが油っぽかったとの声も、1,000〜2,000円。',
      confidence: 'medium', sources: [TB, R + 'B483394926/', R + 'B537406764/', R + 'B537570756/', R + 'B537663577/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick chain; counter seats; can be slow at peak.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-4-1 大倉別館 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目4番1号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483394926/', R + 'B537406764/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–2,000.', last_checked: TODAY, items: [
      it('ヤリイカとほうれん草のペペロンチーノ', '', 'Spear-squid and spinach peperoncino with lemon', '', 'Pasta', 'no', 'no', 'October 2026.', 'squid_peperoncino'),
      it('鶏とキノコと山椒のクリーム', '', 'Seasonal chicken, mushroom and sanshō cream pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'sansho_cream'),
      it('トマトのスープパスタ', '', 'Garlic tomato soup pasta', '', 'Pasta', 'no', 'ask', '', 'tomato_soup_pasta'),
    ] }, {
    cuisine: '釜あげスパゲッティのチェーン・ニンニクの効いたペペロンチーノ、スープパスタ、季節のクリーム・大盛り・1,000〜2,000円',
    neighborhood: '銀座三丁目、大倉別館1F・2F。銀座一丁目駅5番出口から徒歩2分、銀座駅B2出口から3分',
    gf_detail: 'グルテンフリーではありません。小麦のスパゲッティのチェーン(釜あげ、スープパスタ、バゲット)で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。イカ、鶏、クリーム、たらこのパスタなどで、ヴィーガンの選択肢は書かれていません。',
    notes: '[チェーン・釜あげスパゲッティ] 2010年開店、すぱじろうチェーンのにぎやかな44席の店で、ラーメン店のようなカウンター。ゆでたての釜あげスパゲッティで、ソースはスープパスタのようにゆるめのことが多い。2026年10月の客は、ニンニクたっぷりでレモンを添えたヤリイカとほうれん草のペペロンチーノ、季節の鶏とキノコと山椒のクリーム、ニンニクの効いたトマトのスープパスタなどを大盛りで。評価は分かれ、いつも安定しているというファンがいる一方、40分待たされて油っぽいパスタだったという声も。1,000〜2,000円ほど、チャージなし。',
  });
}

// ================================================================ トゥット イル マーレ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13160565/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_tutto_il_mare_ginza4', name: 'カンティーナ シチリアーナ トゥット イル マーレ 銀座4丁目 (Cantina Siciliana Tutto Il Mare)', category: 'OMNI',
    lat: 35.669673, lng: 139.76912,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the specialty is homemade busiate pasta, couscous is wheat and lunches come with focaccia; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: red-shrimp sauce, seafood couscous, bistecca.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:30) and 17:00–22:30 (L.O. 21:30); closed over New Year (Tabelog). ¥400 dinner cover; one-drink order per a 2026 review. Cards and PayPay accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme behind the Kabuki-za, 4-13-3 2F–3F — 3 min from Higashi-Ginza Stn exit 3',
    cuisine: 'Sicilian trattoria · homemade busiate with red-shrimp sauce, Trapani seafood couscous · lunch sets ¥2,000–3,000', cuisine_type: 'other',
    website: 'https://www.cantinasiciliana.jp/tutto_ii_mare', gmaps: gm('トゥット イル マーレ 銀座4-13-3'), menu_url: null,
    notes: "[Sicilian · behind the Kabuki-za] A 48-seat Sicilian restaurant over two floors of a small pink house behind the Kabuki-za, open since 2013. It is a branch: Tabelog notes the main shop has been listed as a Michelin Bib Gourmand. The specialty is homemade busiate (twisted pasta) in a rich red-shrimp sauce, alongside Trapani-style seafood couscous. Weekday lunch sets come with focaccia and a big salad: a traditional Sicilian tomato pasta with orange cake, or a lean bistecca with plenty of potatoes. Free-flow party plans with Peroni on draft fill the third floor. One October 2026 diner found the tables cramped and noisy, the service slow and the one-drink rule costly at about ¥800 for a soft drink. ¥400 cover at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2013 (Tabelog); branch of Cantina Siciliana', background: 'Multi-shop group; main shop listed Bib Gourmand per Tabelog.', philosophy: null, specialty: 'Busiate with red-shrimp sauce; seafood couscous.',
      anecdotes: [
        { text: '"I wanted to try the traditional Sicilian pasta, and it was generously topped with tomato sauce. Focaccia came with it." — October 2026, lunch.', source: R + 'B537747085/' },
        { text: '"Since it operates on a one-drink policy, I had to order a drink, and even soft drinks were around JPY 800." — October 2026.', source: R + 'B537693473/' },
      ],
      japanese_sources_summary: '食べログ: カンティーナ シチリアーナ トゥット イル マーレ 銀座4丁目、銀座4-13-3 2F(2階22席・3階26席)、東銀座駅3番出口から木挽町通りを進み、ピンクの一軒家、48席、毎日11:30〜15:00・17:00〜22:30、年末年始休、ディナーのみコペルト400円、カード・PayPay可、2013年9月20日開店。店の紹介: 歌舞伎座裏のシチリア料理、名物は赤海老の濃厚ソースと自家製ブジアーテ、トラーパニ名物の魚介のクスクス、本店はミシュランのビブグルマン掲載。2026年10月の口コミ: 3階貸切の飲み放題(ペローニの生)、パスタ2種のコース、ランチの伝統的なシチリアのパスタとフォカッチャ、オレンジケーキ、ビステッカとじゃがいも、席が狭く騒がしい・提供が遅い・ワンドリンク制でソフトドリンク約800円との声。',
      confidence: 'medium', sources: [TB, R + 'B537747085/', R + 'B537772668/', R + 'B537561648/', R + 'B537693473/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-drink order; can be noisy with parties.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-13-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目13番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537747085/', R + 'B537772668/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–5,000. Party plans from ¥6,500 (Tabelog).', last_checked: TODAY, items: [
      it('赤海老の濃厚ソース 自家製ブジアーテ', '', 'Homemade busiate with rich red-shrimp sauce', '', 'Pasta', 'no', 'no', 'The specialty.', 'busiate'),
      it('トラーパニ風 魚介のクスクス', '', 'Trapani-style seafood couscous', '', 'Mains', 'no', 'no', '', 'couscous'),
      it('ビステッカのランチセット', '', 'Bistecca lunch set with potatoes and focaccia', '', 'Lunch', 'no', 'no', 'October 2026.', 'bistecca'),
    ] }, {
    cuisine: 'シチリア料理・赤海老ソースの自家製ブジアーテ、トラーパニの魚介のクスクス・ランチセット2,000〜3,000円ほど',
    neighborhood: '銀座四丁目、歌舞伎座の裏、4-13-3の2〜3F。東銀座駅3番出口から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。名物は自家製のブジアーテ、クスクスも小麦、ランチにはフォカッチャが付き、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。赤海老のソース、魚介のクスクス、ビステッカ。',
    notes: '[シチリア料理・歌舞伎座の裏] 歌舞伎座裏のピンクの一軒家、2〜3階の48席のシチリア料理店で、2013年開店。系列店で、食べログによれば本店はミシュランのビブグルマンに掲載されたとのこと。名物は濃厚な赤海老のソースと自家製ブジアーテ(ねじったパスタ)、トラーパニ名物の魚介のクスクスも。平日のランチはフォカッチャとたっぷりのサラダ付きで、伝統的なシチリアのトマトのパスタとオレンジケーキや、じゃがいもたっぷりの赤身のビステッカなど。3階はペローニの生がある飲み放題の貸切にも。2026年10月には、席が狭く騒がしい、提供が遅い、ワンドリンク制でソフトドリンクが約800円と高いという声も。夜はコペルト400円。',
  });
}

// ================================================================ 銀座ZION
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13124292/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_ginza_zion_ginza5', name: '銀座ZION (ザイオン)', category: 'OMNI',
    lat: 35.670533, lng: 139.765641,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a party-style Italian bar of pizza, ajillo with bread and paella courses; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Wagyu, seafood paella, four-cheese pizza, Camembert and mentaiko ajillo.',
    hours_raw: 'Daily 17:00–23:00 (food L.O. 22:00, drinks 22:30); closed over New Year (Tabelog). ¥600 appetizer charge and 10% service. Cards accepted; no e-money or QR.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Koti Bldg B1 — 1 min from Ginza Stn exit A5 toward the Kabuki-za',
    cuisine: 'Casual Italian bar for parties · grilled black Wagyu, seafood paella, pizza · ¥5,000 two-hour free-flow courses', cuisine_type: 'other',
    website: 'https://www.restaurantinnovation.jp/', gmaps: gm('銀座ZION 銀座5-9-1'), menu_url: null,
    notes: "[Italian bar · parties a minute from Ginza Station] A 48-seat basement Italian bar with café-style sofa seating, built for welcome, farewell and birthday parties, with projector and microphone. The whole place can be booked for ¥40,000. Courses with two-hour free-flow cost about ¥5,000, with grilled black Wagyu, a seafood paella diners rate, chewy-crust pizza such as quattro formaggi, and a Camembert and mentaiko ajillo. Free-flow drinks are basic: one diner found only Asahi Super Dry and a weak highball. There is a single restroom, and large groups can make it hot and loud. ¥600 appetizer and 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 March 2011 (Tabelog)', background: 'Operator website restaurantinnovation.jp (company).', philosophy: null, specialty: 'Paella; party courses.',
      anecdotes: [
        { text: '"The Camembert and mentaiko ajillo, as well as the Quattro Formaggi pizza, were overflowing with cheese." — June 2026.', source: R + 'B530287099/' },
        { text: '"For JPY 5000, a 2-hour all-you-can-drink option is reasonable." — September 2026.', source: R + 'B537235415/' },
      ],
      japanese_sources_summary: '食べログ: 銀座ZION(ザイオン)、銀座5-9-1 銀座コティビルB1、銀座駅A5出口から歌舞伎座方面へ徒歩1分、48席(ソファ席あり)、毎日17:00〜23:00、年末年始休、お通し600円・サービス料10%、カード可・電子マネーとQR不可、2011年3月18日開店、運営サイト restaurantinnovation.jp。店の紹介: 海外のカフェ風の内装、黒毛和牛のグリル、魚介のパエリア、歓送迎会の貸切(40,000円)、プロジェクターとマイク。2026年の口コミ: カマンベールと明太子のアヒージョ、クアトロフォルマッジ、もちもちのピザ生地、パエリア、2時間飲み放題付き5,000円、ドリンクはアサヒスーパードライのみでハイボールは今ひとつ、トイレは1つ、団体で暑く騒がしいとの声。',
      confidence: 'low', sources: [TB, R + 'B530287099/', R + 'B532743661/', R + 'B534968385/', R + 'B537235415/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Party venue; can be loud.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-1 銀座コティビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番1号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537235415/', R + 'B530287099/'],
    price_note: 'Course price from a September 2026 review; private hire from Tabelog.', last_checked: TODAY, items: [
      it('2時間飲み放題付きコース', '', 'Course with 2-hour free-flow', '¥5,000', 'Courses', 'no', 'no', 'September 2026.', 'course'),
      it('魚介のパエリア', 'gyokai no paeria', 'Seafood paella', '', 'Mains', 'ask', 'no', '', 'paella'),
      it('カマンベールと明太子のアヒージョ', '', 'Camembert and mentaiko ajillo', '', 'Appetizers', 'ask', 'no', '', 'ajillo'),
    ] }, {
    cuisine: 'パーティー向けの気軽なイタリアンバル・黒毛和牛のグリル、魚介のパエリア、ピザ・2時間飲み放題付きコース5,000円',
    neighborhood: '銀座五丁目、銀座コティビルB1。銀座駅A5出口から歌舞伎座方面へ徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。ピザ、パン付きのアヒージョ、パエリアのコースのパーティー向けイタリアンバルで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。和牛、魚介のパエリア、4種チーズのピザ、カマンベールと明太子のアヒージョ。',
    notes: '[イタリアンバル・銀座駅から1分のパーティー会場] 海外のカフェのようなソファ席がある地下の48席のイタリアンバルで、歓送迎会や誕生日会向け、プロジェクターとマイクもあり、40,000円で貸切も。2時間飲み放題付きのコースは5,000円ほどで、黒毛和牛のグリル、評判の魚介のパエリア、もちもち生地のクアトロフォルマッジなどのピザ、カマンベールと明太子のアヒージョ。飲み放題のドリンクはシンプルで、ビールはアサヒスーパードライのみ、ハイボールは今ひとつだったという声も。トイレは1つで、団体が入ると暑く騒がしくなることも。お通し600円、サービス料10%。',
  });
}

save();
