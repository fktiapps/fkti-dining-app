// Ginza Station half-mile sweep (805 m), batch 16 — hidden placeholders researched in place. Researched 2026-10-24.
//   ~ tokyo3__111      竹葉亭 銀座店 (unagi; branch of the Chikuyōtei group)
//   ~ tokyo3_higash_56 銀座 四代目 高橋屋 → TAKAHASHIYA 銀座店 (unagi; main shop in Sugito, Saitama)
//   ~ tokyo3_ginza_50  銀座 玉ゐ (anago box rice; Ginza branch of Nihonbashi Tamai)
//   ~ tokyo3__86       中村藤吉本店 銀座店 (Uji tea café, GINZA SIX)
// Tabelog ids found via the /en/ area-genre lists (A130101). Still hidden: 銀座 小十 (not in those lists), わんぱく,
// 築地玉寿司 本店, すし鮮 総本店. Sources: Tabelog /en/ listings + dated 2026 reviews, Mitsui Shopping Park (交詢ビル),
// tokichi.jp. Pins: Tabelog geo + GSI (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 竹葉亭 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002552/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:30'], ['16:30', '21:30']), we = day(['11:30', '16:00'], ['16:30', '21:30']);
  put({
    id: 'tokyo3__111', name: '竹葉亭 銀座店 (Chikuyōtei, Ginza)', category: 'OMNI',
    lat: 35.670821, lng: 139.765273,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The eel is basted in a soy-based kabayaki sauce, and the menu also has tempura and shrimp cake. Sea-bream chazuke comes with a sesame sauce whose ingredients are not published. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. An eel house: unajū, eel omelette, liver soup, sea-bream chazuke and sashimi. Eggplant miso is one of the few plant dishes mentioned, and its dashi is not described.',
    hours_raw: 'Mon–Fri 11:30–15:30 (L.O. 14:30) and 16:30–21:30 (L.O. 20:00); Sat, Sun & holidays 11:30–16:00 (L.O. 15:00) and 16:30–21:30; closed 1st and 3rd Mondays (Tabelog). No reservations; take a number at the touch panel and watch the wait on your phone.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme on Harumi-dōri, near the 4-chōme crossing — 1 min from Ginza Stn exit A5',
    cuisine: 'Unagi (Kantō style) · sea-bream chazuke · eel omelette · tempura', cuisine_type: 'unagi',
    website: null, gmaps: gm('竹葉亭 銀座店 銀座5-8-3'), menu_url: null,
    notes: "[Unagi · long-established] The Ginza 5-chōme branch of 竹葉亭, a long-established eel house with a branch in the Sogo department store in Yokohama. Seventy seats over three floors: tables in the basement and on the ground floor, tatami upstairs. The eel is Kantō style, steamed and fluffy, with a sauce diners call refined and not too sweet. Order unajū with liver soup, or the eel bentō (¥4,620 in October 2026), plus eel omelette, dashi-rolled egg, eggplant miso and sashimi. The sea-bream chazuke with sesame sauce is the lighter classic: rice from a wooden tub, sesame-dressed sea bream, then tea. No reservations; take a number at the touch panel and check the wait on your phone.",
    chef_bio: {
      chef_name: null, roles: ['Ginza branch of 竹葉亭'],
      origin: 'Ginza 5-8-3; founding history not read from a primary source',
      background: 'A 2026 diner notes the brand also has a shop in Sogo Yokohama; diners call it a historic, long-established restaurant. No source read gives the founding date.',
      philosophy: null,
      specialty: 'Kantō-style unajū; sea-bream chazuke; eel omelette.',
      anecdotes: [
        { text: '"The rice is served in a wooden container, and you serve it yourself into your bowl. First, I tried the sea bream with sesame sauce together with the rice."', source: R + 'B537372499/' },
        { text: '"You can issue a ticket using a touch panel, and check the wait time on your smartphone, making it convenient to stroll around Ginza."', source: R + 'B536142848/' },
      ],
      japanese_sources_summary: '食べログ: 竹葉亭 銀座店、銀座5-8-3、70席(地下テーブル24・1階テーブル18・2階座敷28)、平日11:30〜15:30・16:30〜21:30、土日祝11:30〜16:00・16:30〜21:30、第1・3月曜休、予約不可、カード・QR可、サービス料なし。2026年の口コミ: 鰻重と肝吸い、うなぎ弁当4,620円、う巻き、だし巻き、茄子味噌、鯛茶漬け(胡麻だれ)、関東風のふわふわの鰻、上品なタレ、そごう横浜にも店舗、タッチパネルで整理券。',
      confidence: 'medium', sources: [TB, R + 'B537372499/', R + 'B536142848/', R + 'B537655577/', R + 'B534882360/', R + 'B536204063/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Number tickets from a touch panel, wait time on your phone; tables and a tatami floor. Cards and QR accepted; no service charge.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Freshly fried shrimp cake and tempura on the menu.', source: R + 'B534882360/' }],
      soy_sauce_wheat: [{ text: 'The eel sauce has "a refined taste" of soy sauce.', source: R + 'B536204063/' }],
      vegan_cross_contact: [{ text: 'Unajū with liver soup; eel omelette.', source: R + 'B536134575/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-8-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目8番3号 (go) 3m; OSM node 13567041143 「竹葉亭」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537655577/', R + 'B536134575/', R + 'B537372499/', R + 'B534882360/', R + 'B536204063/'],
    price_note: 'No menu read. Dishes from September–October 2026 reviews; one price.', last_checked: TODAY, items: [
      it('鰻重', 'unajuu', 'Unajū (eel over rice) with liver soup', '', 'Unagi', 'no', 'no', '', 'unaju'),
      it('うなぎ弁当', 'unagi bentou', 'Eel bentō', '¥4,620', 'Unagi', 'no', 'no', 'October 2026.', 'unagi_bento'),
      it('う巻き', 'umaki', 'Eel omelette', '', 'Small plates', 'no', 'no', '', 'umaki'),
      it('鯛茶漬け', 'tai chazuke', 'Sea-bream chazuke with sesame sauce', '', 'Rice', 'ask', 'no', '', 'tai_chazuke'),
      it('だし巻き玉子', 'dashimaki tamago', 'Dashi-rolled omelette', '', 'Small plates', 'ask', 'no', '', 'dashimaki'),
      it('茄子味噌', 'nasu miso', 'Eggplant with miso', '', 'Small plates', 'ask', 'ask', '', 'nasu_miso'),
      it('', '', 'Shrimp cake (fried)', '', 'Small plates', 'no', 'no', '', 'shrimp_cake'),
    ] }, {
    cuisine: '鰻(関東風)・鯛茶漬け・う巻き・天ぷら',
    neighborhood: '銀座五丁目、晴海通り沿い、四丁目交差点の近く。銀座駅A5出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。鰻は醤油ベースの蒲焼のタレで焼き、天ぷらや海老しんじょうもあります。鯛茶漬けの胡麻だれの材料は公表されていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。鰻の店で、鰻重、う巻き、肝吸い、鯛茶漬け、刺身。植物性の料理として口コミにあるのは茄子味噌くらいで、その出汁は書かれていません。',
    notes: '[鰻・老舗] 老舗の鰻屋「竹葉亭」の銀座五丁目店で、そごう横浜にも店があります。地下と1階はテーブル、2階は座敷の3フロア70席。鰻は蒸してふっくらの関東風で、タレは甘すぎず上品と評判。鰻重と肝吸い、うなぎ弁当(2026年10月で4,620円)、う巻き、だし巻き、茄子味噌、刺身など。軽めの定番は胡麻だれの鯛茶漬けで、おひつのご飯に胡麻だれの鯛をのせ、最後はお茶で。予約不可で、タッチパネルで整理券を取り、待ち時間をスマホで確認できます。',
  });
}

// ================================================================ TAKAHASHIYA 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13262334/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '16:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo3_higash_56', name: 'TAKAHASHIYA 銀座店 (Ginza Yondaime Takahashiya)', category: 'OMNI',
    lat: 35.670171, lng: 139.767951,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free as served: the kabayaki and unajū use a soy-based sauce. The shiroyaki (eel grilled without sauce) is eaten with salt, wasabi or egg yolk, which is the nearest thing to a wheat-free dish, but no source says the kitchen keeps it free of the sauce or the soy. Ask.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. An eel specialist that shows you the live eel before preparing it; courses add sashimi such as tuna and sea urchin.',
    hours_raw: 'Tue–Sun 11:30–16:00 (food L.O. 15:00) and 17:00–22:00 (food L.O. 21:00); closed Mondays, plus some Tuesdays (Tabelog). Reservations via TableCheck; walk-ins welcome. Cards accepted; prices include tax, no service charge.',
    hours: { 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, beside the Kabuki-za stage door (VORT Ginza East II 4F) — 1 min from Higashi-Ginza Stn',
    cuisine: 'Unagi from live eel · shiroyaki and kabayaki · eel kaiseki · Michelin-listed', cuisine_type: 'unagi',
    website: null, gmaps: gm('TAKAHASHIYA 銀座店 VORT銀座イーストII'), menu_url: null,
    notes: "[Unagi · prepared from live eel] The Ginza branch, opened August 2021 beside the Kabuki-za stage door, of an eel house whose main shop is in Sugito, Saitama; diners describe it as in business since the early Meiji era and known for wild eel. Tabelog lists it in the Michelin Guide Tokyo. The eel is brought to the table alive before it is prepared: 2026 diners describe 400 g 'blue eel' (aounagi) from Mikawa-Isshiki over charcoal, Kantō (steamed) or Kansai (direct-grilled) style, and in season wild eel with firmer, leaner flesh. The restaurant's own notes say the rice is sun-dried hazagake rice. Unadon set ¥5,800 and freshly-cut eel set ¥8,800 (with shiroyaki), plus kaiseki courses. Salt, wasabi and egg yolk accompany the shiroyaki.",
    chef_bio: {
      chef_name: null, roles: ['Ginza branch of 四代目 高橋屋 (main shop: Sugito, Saitama)'],
      origin: 'Ginza branch opened 14 August 2021 (Tabelog)',
      background: 'The restaurant\'s Tabelog note describes it as an eel specialist based on the Mitsui group\'s 料亭 松野茶屋 and "Ginza Koju". Diners mention the main shop in Sugito and a history from the early Meiji period. Tabelog lists a corporate invoice number (T5030001051893).',
      philosophy: null,
      specialty: 'Freshly-cut eel set with shiroyaki; aounagi from Mikawa-Isshiki; wild eel in season.',
      anecdotes: [
        { text: '"They show you the live eel before preparing and grilling it. The eel is a magnificent blue eel from Mikawa Isshiki, weighing an impressive 400g. They use charcoal."', source: R + 'B537860159/' },
        { text: 'A diner who knew the Sugito main shop came to Ginza for the white-grilled eel set (¥8,800) as farmed eel came into season.', source: R + 'B536230253/' },
        { text: 'The fourth-generation kaiseki course opens with a bucket of live eel; you choose grilled or steamed.', source: R + 'B537054677/' },
      ],
      japanese_sources_summary: '食べログ(店舗情報): TAKAHASHIYA 銀座店、銀座4-12-1 VORT銀座イーストⅡビル4F、歌舞伎座楽屋口の隣、2021年8月14日オープン、火〜日11:30〜16:00・17:00〜22:00、月休、うな丼御膳5,800円・活き〆うなぎ御膳8,800円(人気)、青うなぎ、はざかけ米、三井グループの「料亭 松野茶屋」と「銀座 Koju」を基にした鰻専門店、ミシュランガイド東京、税込・サービス料なし、適格請求書T5030001051893。2026年の口コミ: 本店は埼玉・杉戸、明治初期創業、天然鰻、三河一色の青うなぎ400g、炭火、関東風・関西風、四代目懐石コース、白焼きは塩・わさび・卵黄。',
      confidence: 'medium', sources: [TB, R + 'B537860159/', R + 'B536230253/', R + 'B537054677/', R + 'B537265946/', R + 'B520747209/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck or walk in; the live eel is shown at the table. Cards accepted; tax-inclusive prices.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Kabayaki and shiroyaki grilled over the same charcoal.', source: R + 'B537265946/' }],
      soy_sauce_wheat: [{ text: 'Kabayaki (grilled with sauce) alongside shiroyaki served with salt.', source: R + 'B537265946/' }],
      vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-12-1 VORT銀座イーストⅡビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目12番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB, R + 'B537860159/', R + 'B536230253/', R + 'B537054677/'],
    price_note: 'The two set prices come from the restaurant\'s own Tabelog notes (tax included).', last_checked: TODAY, items: [
      it('うな丼御膳', 'unadon gozen', 'Unadon set', '¥5,800', 'Unagi', 'no', 'no', 'Restaurant notes.', 'unadon_set'),
      it('活き〆うなぎ御膳', 'ikijime unagi gozen', 'Freshly-cut eel set with shiroyaki (popular)', '¥8,800', 'Unagi', 'no', 'no', 'Restaurant notes.', 'ikijime_set'),
      it('白焼き', 'shirayaki', 'Shiroyaki (grilled without sauce; salt, wasabi, egg yolk)', '', 'Unagi', 'ask', 'no', 'Nearest to wheat-free; ask.', 'shirayaki'),
      it('', '', 'Fourth-generation kaiseki course', '', 'Course', 'no', 'no', 'October 2026.', 'kaiseki_course'),
    ] }, {
    cuisine: '活き鰻のうなぎ・白焼きと蒲焼・鰻懐石・ミシュラン掲載',
    neighborhood: '銀座四丁目、歌舞伎座の楽屋口の隣(VORT銀座イーストⅡ 4F)。東銀座駅から徒歩1分',
    gf_detail: 'そのままではグルテンフリーではありません。蒲焼や鰻丼は醤油ベースのタレ。白焼き(タレなし)は塩・わさび・卵黄で食べるので最も小麦に近づかない料理ですが、タレや醤油から分けているかはどの情報源にもありません。確認してください。',
    vegan_detail: 'ヴィーガンではありません。生きた鰻を見せてから捌く鰻専門店で、コースにはまぐろや雲丹などの刺身も入ります。',
    notes: '[鰻・活き〆] 埼玉・杉戸に本店を置く鰻屋の銀座店で、2021年8月に歌舞伎座の楽屋口の隣に開業。口コミでは明治初期からの老舗で天然鰻で知られ、食べログにはミシュランガイド東京掲載とあります。鰻は生きた姿を見せてから捌き、2026年の口コミでは三河一色の400gの青うなぎを炭火で、関東風(蒸し)か関西風(地焼き)、季節には脂の少ない締まった天然鰻も。店の案内によれば米ははざかけ米。うな丼御膳5,800円、白焼き付きの活き〆うなぎ御膳8,800円のほか懐石コースも。白焼きには塩・わさび・卵黄が添えられます。',
  });
}

// ================================================================ 銀座 玉ゐ
{
  const MS = 'https://mitsui-shopping-park.com/urban/kojun/store/600015.html';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13185471/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '14:30'], ['17:00', '21:30']), we = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo3_ginza_50', name: '銀座 玉ゐ (Ginza Tamai)', category: 'OMNI',
    lat: 35.67012, lng: 139.762819,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The anago box rice is finished with a sweet soy-based sauce, the menu includes anago tempura, and the dashi-chazuke broth is not described. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A conger-eel (anago) restaurant: box rice, sashimi, tempura and anago-broth chazuke.',
    hours_raw: 'Mon–Fri 11:00–14:30 (L.O. 14:00) and 17:00–21:30 (L.O. 21:00); Sat, Sun & holidays 11:00–15:00 (L.O. 14:30) and 17:00–21:30; irregular closing days (Tabelog). Evening appetiser charge ¥500. Cards and PayPay.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Kōjun Bldg 4F (Barneys building) — 3 min from Ginza Stn exit A1',
    cuisine: 'Anago (conger eel) box rice — simmered or grilled · anago sashimi and tempura · dashi chazuke', cuisine_type: 'unagi',
    website: MS, gmaps: gm('銀座 玉ゐ 交詢ビル'), menu_url: null,
    notes: "[Anago · box rice] The Ginza branch, opened August 2015 in the Kōjun Building, of Nihonbashi Tamai, an anago specialist. The dish is hako-meshi: wild conger eel over rice in a box, either nikomi (simmered, soft and fluffy) or yakiage (grilled, fragrant), or ai-no-se with both. Chūbako was ¥3,800 in September 2026; add an anago-broth chazuke (¥200) poured from an iron kettle to finish. There is anago sashimi, crunchy like fugu, anago tempura, and an ikada bentō. Diners who know eel find anago lighter and less fatty. Forty seats with a counter of six; ¥500 appetiser charge at dinner.",
    chef_bio: {
      chef_name: null, roles: ['Ginza branch of 日本橋 玉ゐ'],
      origin: 'Ginza branch opened 5 August 2015 (Tabelog); main shop in Nihonbashi',
      background: 'A 2026 diner refers to the Nihonbashi main store. Tabelog lists a corporate invoice number (T8010001092920).',
      philosophy: null,
      specialty: 'Anago hako-meshi, simmered or grilled; anago sashimi.',
      anecdotes: [
        { text: 'The Kōjun Building page: 「天然のあなごを使った箱めしは、ふんわりとした柔らかさを楽しめる煮上げと、香ばしい風味を楽しめる焼き上げの二通りからお選びいただけます」', source: MS },
        { text: '"I was surprised to see that they also have anago sashimi!… It reminded me a bit of fugu sashimi!"', source: R + 'B481791641/' },
        { text: 'A diner brought her mother, who likes eel but prefers anago because it has less fat.', source: R + 'B537562416/' },
      ],
      japanese_sources_summary: '三井ショッピングパーク(交詢ビル): 銀座 玉ゐ、天然のあなごの箱めし、煮上げと焼き上げ、平日11:00〜14:30・17:00〜21:30。食べログ: 交詢ビル4F、2015年8月5日オープン、40席(カウンター6・テーブル34)、夜のみお通し500円、不定休、カード・PayPay可、適格請求書T8010001092920。2026年の口コミ: 中箱3,800円・あいのせ、出汁茶漬け200円(鉄瓶)、穴子刺身、穴子天ぷら、いかだ弁当、本店は日本橋。',
      confidence: 'medium', sources: [MS, TB, R + 'B535946167/', R + 'B481791641/', R + 'B537396692/', R + 'B537144072/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat the box rice; reservations taken. ¥500 appetiser charge at dinner.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Anago tempura on the menu.', source: R + 'B535873282/' }],
      soy_sauce_wheat: [{ text: 'The box rice is "generously sauced".', source: R + 'B537396692/' }],
      vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-8-7 交詢ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Kōjun Building store page live; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目8番7号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MS, R + 'B535946167/', R + 'B481791641/', R + 'B537144072/'],
    price_note: 'No menu read. Two prices from a September 2026 review.', last_checked: TODAY, items: [
      it('箱めし 中箱', 'hakomeshi chuubako', 'Anago box rice, medium (simmered, grilled or both)', '¥3,800', 'Anago', 'no', 'no', 'September 2026.', 'hakomeshi_chu'),
      it('出汁茶漬け', 'dashi chazuke', 'Anago-broth chazuke add-on', '¥200', 'Anago', 'ask', 'no', '', 'dashi_chazuke'),
      it('穴子刺身', 'anago sashimi', 'Anago sashimi', '', 'Small plates', 'ask', 'no', '', 'anago_sashimi'),
      it('穴子天ぷら', 'anago tenpura', 'Anago tempura', '', 'Small plates', 'no', 'no', '', 'anago_tempura'),
      it('いかだ弁当', 'ikada bentou', 'Ikada bentō (anago, pickles, miso soup)', '', 'Anago', 'no', 'no', '', 'ikada_bento'),
    ] }, {
    cuisine: '穴子の箱めし(煮上げ・焼き上げ)・穴子の刺身と天ぷら・出汁茶漬け',
    neighborhood: '銀座六丁目、交詢ビル4F。銀座駅A1出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。穴子の箱めしは醤油ベースの甘いタレで仕上げ、穴子の天ぷらもあり、出汁茶漬けの出汁は書かれていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。穴子の店で、箱めし、刺身、天ぷら、穴子出汁の茶漬け。',
    notes: '[穴子・箱めし] 日本橋の穴子専門店「玉ゐ」の銀座店で、2015年8月に交詢ビルに開業。名物は箱めしで、天然の穴子をふんわりの「煮上げ」か香ばしい「焼き上げ」、両方の「あいのせ」から選びます。2026年9月は中箱3,800円、締めは鉄瓶で注ぐ穴子出汁の茶漬け(200円)。ふぐのような歯ごたえの穴子の刺身、穴子天ぷら、いかだ弁当も。鰻好きにも、脂が少なく軽いと好評です。40席(カウンター6)、夜はお通し500円。',
  });
}

// ================================================================ 中村藤吉本店 銀座店
{
  const OWN = 'https://tokichi.jp/pages/ginza-store-page';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13207589/'; const R = TB + 'dtlrvwlst/';
  const a = day(['10:30', '20:30']);
  put({
    id: 'tokyo3__86', name: '中村藤吉本店 銀座店 (Nakamura Tōkichi, Ginza)', category: 'OMNI',
    lat: 35.669893, lng: 139.764457,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The tea itself is gluten-free, and the nama-cha jelly (tea jelly) is a likely candidate, but no source gives ingredients or allergen information. Parfaits and baked items may contain wheat. Check each item.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. Teas (served cold-brewed, then with hot water) are plant-only, but the parfaits and matcha ice cream may use dairy and the source gives no ingredients.',
    hours_raw: 'Daily 10:30–20:30 (L.O. 19:45), with GINZA SIX (Tabelog). Cards (VISA), e-money and QR accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, GINZA SIX 4F — 2 min from Ginza Stn',
    cuisine: 'Uji tea café · matcha parfaits, nama-cha jelly, anmitsu · tea-only menu', cuisine_type: 'cafe',
    website: OWN, gmaps: gm('中村藤吉本店 銀座店 GINZA SIX'), menu_url: OWN,
    notes: "[Tea café · Uji matcha] The GINZA SIX café, opened April 2017, of 中村藤吉本店, the Uji tea house. The menu is tea and tea sweets only, with no coffee or juice; one 2026 diner liked that commitment. Each guest gets a cold-brewed green tea, then hot water for refills. Diners order the matcha parfait, nama-cha jelly (matcha or hōjicha), anmitsu and matcha ice cream, and buy jelly sets and baked sweets to take home. Busy with overseas visitors; come at the 10:30 opening to avoid the afternoon queue.",
    chef_bio: {
      chef_name: null, roles: ['Ginza café of 中村藤吉本店 (Uji tea merchant)'],
      origin: 'Opened 20 April 2017 (Tabelog), GINZA SIX 4F',
      background: 'A branch café of the Uji tea house 中村藤吉本店; its site lists the Ginza store with menu and take-home sweets.',
      philosophy: null,
      specialty: 'Matcha parfaits; nama-cha jelly; tea service.',
      anecdotes: [
        { text: '"The menu is exclusively tea-based, with no escape options like coffee or juice. This commitment really shows their seriousness."', source: R + 'B535812892/' },
        { text: '"The first cup is cold-brewed, and for the second cup and beyond, you can refill it with hot water."', source: R + 'B535792294/' },
      ],
      japanese_sources_summary: '公式(tokichi.jp): 中村藤吉本店 銀座店、GINZA SIX 4F、生茶ゼリイ、マルトベイク、生茶ゼリイ詰合せ。食べログ: 2017年4月20日オープン、50席、毎日10:30〜20:30、カフェ・かき氷。2026年の口コミ: 抹茶パフェ、ほうじ茶生茶ゼリイ、あんみつ、抹茶アイス、水出し茶のサービス、お茶のみのメニュー、海外客が多く午後は行列。',
      confidence: 'medium', sources: [OWN, TB, R + 'B535812892/', R + 'B535792294/', R + 'B536104932/', R + 'B535637818/'],
    },
    cultural_comfort: { level: 'english', note: 'Department-store café, busy with overseas visitors; queue in the afternoon. Cards (VISA), e-money and QR.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [],
      confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official store page live; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座六丁目10番1号 (go) 112m — GINZA SIX fills a whole block, so the GSI point is the block, not the shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B535637818/', R + 'B536104932/', R + 'B535812892/'],
    price_note: 'No prices read. Items from the official store page and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special matcha parfait', '', 'Sweets', 'ask', 'ask', '', 'matcha_parfait'),
      it('生茶ゼリイ', 'namacha zerii', 'Nama-cha jelly (matcha or hōjicha)', '', 'Sweets', 'ask', 'ask', '', 'namacha_jelly'),
      it('あんみつ', 'anmitsu', 'Anmitsu', '', 'Sweets', 'ask', 'ask', '', 'anmitsu'),
      it('', '', 'Matcha ice cream', '', 'Sweets', 'ask', 'ask', '', 'matcha_ice_cream'),
      it('', '', 'Tea service (cold-brewed first cup)', '', 'Drinks', 'gf', 'vegan', 'Plain tea.', 'tea_service'),
    ] }, {
    cuisine: '宇治茶のカフェ・抹茶パフェ・生茶ゼリイ・あんみつ・お茶のみのメニュー',
    neighborhood: '銀座六丁目、GINZA SIX 4F。銀座駅から徒歩2分',
    gf_detail: '要確認。お茶そのものはグルテンを含まず、生茶ゼリイは候補になりそうですが、材料やアレルゲンの情報はどの情報源にもありません。パフェや焼き菓子は小麦を含む可能性があります。品ごとに確認してください。',
    vegan_detail: '要確認。お茶(最初は水出し、以降はお湯で)は植物性のみですが、パフェや抹茶アイスに乳製品を使う可能性があり、材料の情報はありません。',
    notes: '[お茶カフェ・宇治抹茶] 宇治の茶商「中村藤吉本店」のGINZA SIX店で、2017年4月開業。メニューはお茶とお茶のスイーツだけで、コーヒーやジュースはなく、2026年の口コミにはその徹底ぶりを評価する声も。最初に水出しの緑茶が出て、おかわりはお湯で。抹茶パフェ、生茶ゼリイ(抹茶・ほうじ茶)、あんみつ、抹茶アイスなど、持ち帰り用のゼリイの詰合せや焼き菓子も。海外からの客で混み合い、午後の行列を避けるなら10:30の開店時がおすすめです。',
  });
}

save();
