// Osaka sweep (2-mile circle around Dotonbori), batch 69 — ramen phase (all OMNI).
//   + 油そば専門店 春日亭 日本橋オタロード店 (abura-soba with back fat and spicy "lava" specials)
//   + 陳麻家 長堀橋店 (tantanmen and mapo rice sets by Nagahoribashi)
//   + 三田製麺所 なんばCITY店 (tsukemen, 200–500 g same price; separate from the Sennichimae record; pin approximate)
//   + 金麦 難波店 (Kinmugi's second shop: chicken paitan ramen and tsukemen)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 69);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 春日亭 日本橋オタロード店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27108605/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.kasugatei.com';
  put({
    id: 'osaka_kasugatei_nipponbashi_otaroad', name: '油そば専門店 春日亭 日本橋オタロード店 (Abura-soba Senmon Ten Kasuga Tei Nipponbashi Ota Rodo)', category: 'OMNI',
    lat: 34.662238, lng: 135.505389, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back fat, chicken and pork chashu, diced meat.',
    hours_raw: 'Daily 11:00–21:30; hours may change (Tabelog). Weekday lunch service adds rice or ice cream (September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 3-8-26, Naniwa — on the Otaroad side, about 10 min from Nankai Namba Stn',
    cuisine: 'Abura-soba specialist · shoyu abura-soba with medium-thick curly noodles, back fat, cabbage and bean sprouts · chicken-and-pork (aburi) abura-soba, special large available · limited spicy bowls: "Shakunetsu no Rei" and the hotter "Yogan" cold tantan abura-soba with diced meat · ajitama · garlic, mayonnaise, chili oil and vinegar to finish · a small ginger soup first · rice with raw egg · weekday lunch rice or ice cream · 8 counter seats and a table for four',
    website: OWN, gmaps: gm('春日亭 日本橋オタロード'), menu_url: null,
    notes: "[Abura-soba · back-fat abura-soba on the Otaroad side of Nippombashi] A 12-seat abura-soba specialist toward Otaroad, open since 2018, small inside but with repeat visitors. Mix the bowl from the bottom: medium-thick curly noodles in a shoyu sauce with back fat, crunchy cabbage and bean sprouts, and chashu that isn't greasy. A couple of newcomers expected heavy and found it surprisingly light. Then work through garlic, mayonnaise, chili oil and vinegar. The chicken-and-pork version adds seared meat, and spicy limited bowls run from \"Shakunetsu no Rei\" to the hotter \"Yogan\" cold tantan with diced meat, which left one diner's mouth sore. A small ginger soup comes first, and weekday lunch adds rice or ice cream. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 December 2018 (Tabelog)', background: 'Kasugatei abura-soba shops; official site kasugatei.com (Tabelog).', philosophy: null, specialty: 'Shoyu abura-soba with back fat.',
      anecdotes: [
        { text: '"The chashu is not greasy but has just the right amount of fat, and the cabbage and bean sprouts are crunchy. Above all, the medium-thick curly noodles pair perfectly with the back fat." — September 2026, special large chicken-and-pork abura-soba.', source: R + 'B534778214/' },
        { text: '"At first, I was a bit wary, thinking it might be too greasy based on the photos. But it was surprisingly light!" — October 2026.', source: R + 'B537848390/' },
      ],
      japanese_sources_summary: '公式 kasugatei.com。食べログ: 油そば専門店 春日亭 日本橋オタロード店、大阪市浪速区日本橋3-8-26、南海なんば駅から徒歩約10分、毎日11:00〜21:30、カード・電子マネー・QR不可、12席(カウンター8、4人テーブル1)、禁煙、2018年12月22日開店。口コミ(2026年7〜10月): 醤油油そば並と味玉、底から混ぜる、にんにくとマヨ、酢、店は狭いが通いたくなる味、スタッフの雰囲気がいい、肉がやわらかい、灼熱の冷、溶岩の坦々油そば(冷)と角切り肉のトッピング、灼熱より辛い、炙り鶏豚、特盛りの鶏豚油そば、食前の生姜の効いたスープ、チャーシューは脂がちょうどいい、キャベツともやしがシャキシャキ、中太のちぢれ麺と背脂、にんにく・ラー油・酢、平日のランチサービス(ライスかアイス)、卵かけご飯、あっさりめという声、見た目より軽い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534778214/', R + 'B537848390/', R + 'B521701714/', R + 'B531854209/', R + 'B532594809/', R + 'B535463102/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thick curly noodles (September 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Shoyu abura-soba (July 2026); chicken-and-pork abura-soba (September 2026).',
      chashu: 'Not greasy, just enough fat (September 2026).',
      notable_toppings: ['back fat', 'cabbage', 'bean sprouts', 'garlic', 'mayonnaise'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Back fat and chashu.' },
      pantheon: 'Otaroad\'s abura-soba: curly noodles, back fat and crunchy cabbage, lighter than the photos suggest.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537848390/', '"Surprisingly light"; "a light flavor" (B535463102) — mid-scale.'],
        oiliness: [R + 'B534778214/', 'Back fat, but chashu "not greasy" — mid-scale.'],
        clarity: [R + 'B534778214/', 'Soupless noodles; not applicable — mid-scale.'],
        tare_strength: [R + 'B531854209/', '"The seasoning is just right" — mid-scale.'],
        noodle_firmness: [R + 'B534778214/', 'Medium-thick curly — mid-scale.'],
        aroma_punch: [R + 'B534778214/', '"Plenty of garlic, chili oil, and a splash of vinegar."'],
      },
      confidence: 'medium', sources: [R + 'B534778214/', R + 'B537848390/', R + 'B531854209/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋3-8-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋三丁目8番26号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521701714/', R + 'B534778214/', R + 'B532594809/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Shoyu abura-soba', '', 'Abura-soba', 'no', 'no', 'July 2026.', 'shoyu'),
      it('', '', 'Chicken-and-pork abura-soba', '', 'Abura-soba', 'no', 'no', 'September 2026.', 'torobuta'),
      it('', '', 'Yogan cold tantan abura-soba (limited)', '', 'Limited', 'no', 'no', 'August 2026.', 'yogan'),
      it('', '', 'Rice with raw egg', '', 'Rice', 'ask', 'no', 'September 2026.', 'tkg'),
    ] }, {
    cuisine: '油そば専門店・中太のちぢれ麺に醤油のたれ、背脂、キャベツ、もやしの醤油油そば・炙り鶏豚の油そば、特盛りも・限定の辛い「灼熱の冷」と、さらに辛い角切り肉の「溶岩」の冷やし坦々油そば・味玉・にんにく、マヨ、ラー油、酢で仕上げ・最初に小さな生姜のスープ・卵かけご飯・平日ランチはライスかアイス・カウンター8席と4人テーブル1つ',
    neighborhood: '浪速区日本橋3-8-26。オタロード側、南海なんば駅から徒歩約10分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。背脂、鶏と豚のチャーシュー、角切り肉。',
    notes: '[油そば・日本橋オタロード側の背脂の油そば] オタロード側にある12席の油そば専門店で、2018年開店、狭いながら通う人もいる店。底からよく混ぜて食べる一杯で、中太のちぢれ麺に醤油のたれ、背脂、シャキシャキのキャベツともやし、脂っぽすぎないチャーシュー。重いと思いきや意外と軽かったという人も。続けてにんにく、マヨ、ラー油、酢で味を変えて。鶏豚は炙った肉付きで、限定の辛いメニューは「灼熱の冷」から、さらに辛い角切り肉入りの冷やし坦々「溶岩」まで。食べた後しばらく口がひりひりしたという人も。最初に小さな生姜のスープが出て、平日ランチはライスかアイス付き。現金のみ。',
  });
}

// ================================================================ 陳麻家 長堀橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27020057/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://zoo-jp.com/shop/chinmaya/';
  put({
    id: 'osaka_chinmaya_nagahoribashi', name: '陳麻家 長堀橋店 (Chinmaya Nagahoribashi)', category: 'OMNI',
    lat: 34.674845, lng: 135.507238, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sesame and doubanjiang sauces; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso on the tantanmen; mapo with meat; fried rice.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:30) and 17:00–24:00 (L.O. 23:30); closed over New Year (Tabelog). Crowded at lunch (August 2026). Cards, PayPay and Alipay accepted; no e-money (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 1-18-16, 1F — about 1 min east of Nagahoribashi Stn exit 3',
    cuisine: 'Tantanmen and mapo from the Chinmaya chain · sesame-rich tantanmen with spice levels, thin noodles · spicy tantanmen ¥1,200 · mapo ramen · chilled tantanmen with watercress, green onion, cucumber and meat miso · sets with half fried rice, mapo rice ("Chinma rice") or Tianjin rice; half sizes · fried rice ¥880 · gyoza · water spinach · draft beer ¥500 · 32 seats',
    website: OWN, gmaps: gm('陳麻家 長堀橋'), menu_url: null,
    notes: "[Tantanmen · tantanmen and mapo rice sets by Nagahoribashi] A branch of the Chinmaya tantanmen-and-mapo chain a minute from Nagahoribashi Station, open until midnight and busy with office workers at lunch. The tantanmen is creamy with sesame and milder than its level suggests; one regular finds it a touch sweet alone and pairs it with the numbing mapo rice bowl in a half set. Sets add half fried rice, mapo rice or Tianjin rice, and half sizes keep it manageable. There's a mapo ramen too, and in summer a chilled tantanmen over ice with watercress, cucumber and meat miso. Some found the thin noodles clumped and the fried rice light; the spicy tantanmen (¥1,200, September 2026) gets its heat from chili oil. A long menu of sides like gyoza and water spinach makes it a drinking stop too.",
    chef_bio: { chef_name: null, roles: [], origin: 'Nagahoribashi branch (Tabelog)', background: 'Chinmaya tantanmen and mapo chain (zoo-jp.com).', philosophy: null, specialty: 'Tantanmen with mapo rice.',
      anecdotes: [
        { text: '"The tantanmen on its own might be a bit sweet, but when paired with the spicy mapo tofu rice bowl, it creates an incredible balance." — September 2026, half set.', source: R + 'B518874954/' },
        { text: '"The Dandan noodles were marked as level 2 in spiciness, but they were milder than I expected… The sesame flavor was prominent, providing a rich and creamy taste." — July 2026, set with half fried rice.', source: R + 'B529764535/' },
      ],
      japanese_sources_summary: '公式 zoo-jp.com/shop/chinmaya。食べログ: 陳麻家 長堀橋店、大阪市中央区島之内1-18-16 アルコール販売ビル1F、長堀橋駅3番出口から東へ約1分、毎日11:00〜15:00(L.O.14:30)・17:00〜24:00(L.O.23:30)、年末年始休み、カード・PayPay・Alipay可、電子マネー不可、32席。口コミ(2026年6〜10月): 担々麺だけだと少し甘いが辛い麻婆丼と合わせるとちょうどいい、ハーフセット、麻婆ラーメン、昼は混む、夜8時は空いている、冷麺はごまだれが濃いめ、炒飯や天津飯のセット、空芯菜と餃子、メニューが豊富、スープが飲み干せる、冷やし担々麺(クレソン、ねぎ、きゅうり、肉味噌)、ミニ麻婆丼(陳麻飯)、担々麺セット(並と半炒飯)、2辛でもマイルド、ごまが濃厚でクリーミー、細麺がくっついていたという声、炒飯は軽め、辛旨担々麺1,200円・炒飯880円・生ビール500円、辛さはラー油で旨みは少なめという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B518874954/', R + 'B529764535/', R + 'B522844793/', R + 'B529719498/', R + 'B533462012/', R + 'B536693197/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Unusually thin noodles that can clump (August 2026); firm chilled noodles on the cold tantanmen (June 2026).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Tantanmen set with half fried rice or mapo rice (July–September 2026).',
      chashu: null,
      notable_toppings: ['meat miso', 'watercress (chilled)', 'cucumber (chilled)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso.' },
      pantheon: 'Nagahoribashi\'s Chinmaya: creamy sesame tantanmen paired with a numbing mapo rice bowl.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B529764535/', '"The sesame flavor was prominent, providing a rich and creamy taste."'],
        oiliness: [R + 'B536693197/', 'Heat "from chili oil" — mid-scale.'],
        clarity: [R + 'B529764535/', 'Creamy sesame soup — opaque.'],
        tare_strength: [R + 'B518874954/', '"A bit sweet" on its own — mid-scale.'],
        noodle_firmness: [R + 'B533462012/', '"The noodles clumped together"; "a bit softer than usual" (B518874954) — placed low.'],
        aroma_punch: [R + 'B529764535/', '"Milder than I expected" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B529764535/', R + 'B518874954/', R + 'B533462012/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain shop; open to midnight.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-18-16 アルコール販売ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目18番16号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536693197/', R + 'B529764535/', R + 'B533462012/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Spicy tantanmen', '¥1,200', 'Noodles', 'no', 'no', 'September 2026.', 'karauma'),
      it('', '', 'Tantanmen set (half fried rice, mapo rice or Tianjin rice)', '', 'Sets', 'no', 'no', 'July–September 2026.', 'set'),
      it('', '', 'Mapo ramen', '', 'Noodles', 'no', 'no', 'August 2026.', 'mapo_ramen'),
      it('', '', 'Chilled tantanmen', '', 'Seasonal', 'no', 'no', 'June 2026.', 'hiyashi'),
      it('', '', 'Fried rice', '¥880', 'Rice', 'no', 'no', 'September 2026.', 'chahan'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'June and October 2026.', 'gyoza'),
    ] }, {
    cuisine: '陳麻家の担々麺と麻婆・辛さを選べるごまの濃厚な担々麺、細麺・辛旨担々麺1,200円・麻婆ラーメン・クレソン、ねぎ、きゅうり、肉味噌の冷やし担々麺・半炒飯、麻婆丼(陳麻飯)、天津飯のセット、ハーフサイズも・炒飯880円・餃子・空芯菜・生ビール500円・32席',
    neighborhood: '島之内1-18-16 アルコール販売ビル1F。長堀橋駅3番出口から東へ約1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、ごまだれや豆板醤、餃子と炒飯。',
    vegan_detail: 'ヴィーガンではありません。担々麺に肉味噌、麻婆に肉、炒飯。',
    notes: '[担々麺・長堀橋の担々麺と麻婆丼のセット] 長堀橋駅から1分の陳麻家の店で、深夜0時まで営業、昼は会社員でにぎわいます。担々麺はごまが濃厚でクリーミー、表示の辛さより穏やか。単品では少し甘いので、痺れる麻婆丼とのハーフセットがちょうどいいという常連も。セットは半炒飯、麻婆丼、天津飯から選べ、ハーフサイズもあり。麻婆ラーメンや、夏は氷を浮かべてクレソン、きゅうり、肉味噌をのせた冷やし担々麺も。細麺がくっついていた、炒飯が軽めだったという声や、辛旨担々麺(1,200円、2026年9月)の辛さはラー油頼みという声も。餃子や空芯菜など一品も多く、一杯飲みにも。',
  });
}

// ================================================================ 三田製麺所 なんばCITY店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27107856/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://mita-seimen.jp/';
  const W = day(['11:00', '22:00']), E = day(['10:30', '22:00']);
  put({
    id: 'osaka_mita_seimenjo_namba_city', name: '三田製麺所 なんばCITY店 (Mita Seimenjo Namba CITY)', category: 'OMNI',
    lat: 34.662054, lng: 135.502959, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; dips not described for wheat; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rich pork-and-seafood dip, sea-bream shio, chashu.',
    hours_raw: 'Mon–Fri 11:00–22:00; Sat–Sun 10:30–22:00 (L.O. 21:30) (Tabelog). Order by QR code or smartphone app (September 2026). Cards and Suica-type IC cards accepted; no QR payment (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba CITY South Building 1F (Namba 5-1-60) — about 3 min from Namba Stn',
    cuisine: 'Mita Seimenjo tsukemen chain · rich tsukemen, spicy tsukemen, chilled sea-bream shio tsukemen with yuzu peel · 200–500 g of noodles for the same price · hot or cold noodles · medium-thick straight noodles with a strong wheat flavor · all-toppings free with a coupon on the 3rd of each month · kara-age · mostly tables, 44 seats',
    website: OWN, gmaps: gm('三田製麺所 なんばCITY'), menu_url: null,
    notes: "[Tsukemen · Mita Seimenjo inside Namba CITY] A 44-seat branch of the Mita Seimenjo tsukemen chain on the first floor of Namba CITY's South Building, a separate shop from the chain's Sennichimae branch. It's rarely crowded. Order by QR code; noodles are boiled fresh, so allow 10 minutes or more. The big perk: anything from 200 g to 500 g of noodles costs the same. Wheaty, medium-thick noodles go with a reliable rich tsukemen, a spicy version, or a light chilled sea-bream shio tsukemen with yuzu peel; you can choose hot or cold noodles. On the 3rd of each month a coupon makes all toppings free. The kara-age is better than you'd expect. One diner found the toppings ice-cold with cold noodles, and another the chashu a little tough.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 November 2018 (Tabelog)', background: 'Mita Seimenjo tsukemen chain (mita-seimen.jp).', philosophy: null, specialty: 'Tsukemen with free upsizing.',
      anecdotes: [
        { text: '"You can choose between 200g to 500g of noodles for the same price!… The sea bream broth is perfect for those who prefer a lighter taste! The yuzu peel and seaweed added a nice touch." — August 2026, chilled sea-bream shio tsukemen with all toppings.', source: R + 'B532958756/' },
        { text: '"I chose the rich tsukemen and was amazed that I could even select the temperature of the noodles… The taste was reliably good, though I was disappointed that the chashu was a bit tough." — September 2026.', source: R + 'B536550206/' },
      ],
      japanese_sources_summary: '公式 mita-seimen.jp。食べログ: 三田製麺所 なんばCITY店、大阪市中央区難波5-1-60 なんばCITY南館1F、なんば駅から徒歩約3分、月〜金11:00〜22:00、土・日10:30〜22:00(L.O.21:30)、カード・交通系IC・iD可、QR不可、44席、禁煙、2018年11月8日開店。口コミ(2026年7〜9月): なんばCITY南館1階、空いていることが多い、テーブルとカウンター、QRコードで注文、提供に少し時間、味は普通という声、麺がおいしく量が多い、唐揚げも専門店並み、冷やし鯛塩つけ麺の全部のせ、毎月3日はクーポンで全部のせ無料、200g〜500gまで同じ値段、中太ストレート麺、鯛のあっさりしたスープ、柚子の皮と海苔、大盛り無料、小麦の風味、スマホアプリで注文、麺の温度を選べる、チャーシューが少し硬い、辛つけ麺の全部のせ大盛り、冷たい麺で具まで冷たくつけ汁がすぐ冷める。',
      confidence: 'medium', sources: [TB, OWN, R + 'B532958756/', R + 'B536550206/', R + 'B529829954/', R + 'B531854079/', R + 'B536518841/', R + 'B536729987/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles with a strong wheat flavor; 200–500 g same price; hot or cold (August–September 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Rich tsukemen (September 2026).',
      chashu: 'A little tough (September 2026).',
      notable_toppings: ['ajitama', 'menma', 'yuzu peel (sea-bream shio)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-seafood dip.' },
      pantheon: 'Namba CITY\'s Mita Seimenjo: wheaty tsukemen from 200 to 500 g for one price, rich, spicy or sea-bream shio.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536550206/', '"The rich tsukemen… reliably good."'],
        oiliness: [R + 'B536550206/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B536550206/', 'Rich dip — opaque.'],
        tare_strength: [R + 'B536518841/', '"The dipping sauce was also tasty" — mid-scale.'],
        noodle_firmness: [R + 'B536518841/', '"A rich wheat flavor and were quite filling."'],
        aroma_punch: [R + 'B532958756/', '"Easy to eat without any strong flavors" (sea-bream shio) — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B536550206/', R + 'B536518841/', R + 'B532958756/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR or app ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波5-1-60 なんばCITY南館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 361m — the lot spans Namba CITY and the station, so the pin is approximate (Tabelog point); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532958756/', R + 'B536550206/', R + 'B536729987/'],
    price_note: 'No prices captured; noodle size 200–500 g at one price.', last_checked: TODAY, items: [
      it('', '', 'Rich tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'noko'),
      it('', '', 'Spicy tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'kara'),
      it('', '', 'Chilled sea-bream shio tsukemen', '', 'Tsukemen', 'no', 'no', 'August 2026.', 'tai_shio'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'July 2026.', 'karaage'),
    ] }, {
    cuisine: '三田製麺所のつけ麺・濃厚つけ麺、辛つけ麺、柚子の皮の冷やし鯛塩つけ麺・麺は200〜500gまで同じ値段・麺は温かいか冷たいか選べる・小麦の香る中太ストレート麺・毎月3日はクーポンで全部のせ無料・唐揚げ・テーブル中心で44席',
    neighborhood: 'なんばCITY南館1F(難波5-1-60)。なんば駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の中太麺、つけ汁の小麦は不明、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介の濃厚なつけ汁、鯛塩、チャーシュー。',
    notes: '[つけ麺・なんばCITYの三田製麺所] なんばCITY南館1階にある三田製麺所の44席の店で、千日前の店とは別。混んでいることは少なめ。注文はQRコードで、麺は茹でたてなので10分以上かかることも。うれしいのは麺が200gから500gまで同じ値段なこと。小麦の香る中太麺に、安定の濃厚つけ麺、辛つけ麺、柚子の皮が香るあっさりした冷やし鯛塩つけ麺から選び、麺は温かいか冷たいかも選べます。毎月3日はクーポンで全部のせが無料。唐揚げも意外とおいしい。冷たい麺だと具まで冷たかった、チャーシューが少し硬かったという声も。',
  });
}

// ================================================================ 金麦 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151643/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_kinmugi_namba', name: '金麦 難波店 (Kinmugi Namba)', category: 'OMNI',
    lat: 34.662013, lng: 135.500699, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, chicken and pork chashu.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:30) and 17:30–22:00 (L.O. 21:30); hours may change (Tabelog). Touch-panel ticket machine (August–October 2026). No reservations. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-8-91, Nakagawa Bldg 1F — about 2 min from Nankai Namba Stn west exit',
    cuisine: 'Kinmugi\'s second shop · creamy, frothy chicken paitan ramen ¥1,000 with rare-ish chicken and pork chashu and a soft-boiled egg · chicken paitan tsukemen ¥1,100 (large +¥150) with chilled thick curly noodles · ajitama ¥150 · yodare-chicken rice bowl ¥300 · summer chilled corn-potage noodles ¥1,400 · 18 seats',
    website: null, gmaps: gm('金麦 難波店'), menu_url: null,
    notes: "[Ramen · Kinmugi's chicken paitan by Nankai Namba] The second shop of Kinmugi, after the Amerikamura original, opened in September 2025 on a back street two minutes from Nankai Namba's west exit, with a clean, elegant interior and good service. The chicken paitan ramen (¥1,000, August–October 2026) is creamy and frothy, sweet and gentle rather than heavy, with chicken and pork chashu and a well-cooked soft-boiled egg. The tsukemen (¥1,100, large +¥150) pairs a light, foamy paitan dip with chilled thick curly noodles. Add a ¥300 yodare-chicken rice bowl. Summer brought a chilled corn-potage noodle with sweet potato, broccoli and chicken. There's sometimes a short line. Buy at the touch-panel machine; cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2025 (Tabelog)', background: 'Second Kinmugi shop after the Amerikamura branch, run by Mugikyu Co., Ltd. (October 2026 review).', philosophy: null, specialty: 'Chicken paitan ramen and tsukemen.',
      anecdotes: [
        { text: '"The chicken paitan ramen arrived, looking rich and creamy, reminiscent of a stew, with a beautifully cooked soft-boiled egg… both chicken and pork chashu." — August 2026, ramen ¥1,000 and yodare-chicken rice bowl ¥300.', source: R + 'B534615423/' },
        { text: '"The dipping sauce was a light and frothy chicken paitan, paired with thick noodles that had a nice bite after being chilled in cold water." — September 2026, tsukemen ¥1,100.', source: R + 'B535061805/' },
      ],
      japanese_sources_summary: '食べログ: 金麦 難波店、大阪市浪速区難波中2-8-91 中川ビル1F、なんば駅から200m、毎日11:00〜15:00(L.O.14:30)・17:30〜22:00(L.O.21:30)、カード・電子マネー・QR可、18席、2025年9月1日開店。口コミ(2026年8〜10月): 券売機、冷やしコーンスープ麺1,400円(さつまいも、ブロッコリー、コーン、刻んだ鶏、濃厚なコーンポタージュ、細いストレート麺)、鶏白湯ラーメン1,000円、よだれ鶏丼300円、なんばパークスの近く、タッチパネルの券売機、シチューのような濃厚でクリーミーなスープ、半熟卵、鶏と豚のチャーシュー、鶏白湯つけ麺1,100円・大盛り150円・味玉150円、あっさりで泡立つつけ汁、冷水で締めた太麺、少しレアのチャーシュー2種、裏通りでも上品な店内、接客がいい、カールした麺、やさしく甘みのある鶏スープ、硬めの麺、外国人客も、アメ村店に続く2号店、株式会社麦休、PayPay。',
      confidence: 'medium', sources: [TB, R + 'B534615423/', R + 'B535061805/', R + 'B534469662/', R + 'B536741289/', R + 'B536850102/', R + 'B536892772/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'curly', hydration: null, handmade: false, notes: 'Thick curly noodles on the tsukemen; firm noodles on the ramen (September–October 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'tsukemen'],
      signature_bowl: 'Chicken paitan ramen, ¥1,000 (August–October 2026).',
      chashu: 'Chicken and pork, slightly rare (August–September 2026).',
      notable_toppings: ['soft-boiled egg', 'chicken chashu', 'pork chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken paitan.' },
      pantheon: 'Namba\'s Kinmugi: a creamy, frothy chicken paitan that stays gentle, with two rare-ish chashu.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534615423/', '"Rich and creamy, reminiscent of a stew."'],
        oiliness: [R + 'B536850102/', '"A gentle chicken broth, sweet and refreshing" — placed low.'],
        clarity: [R + 'B534615423/', 'Creamy paitan — opaque.'],
        tare_strength: [R + 'B536850102/', '"Gentle" — placed low.'],
        noodle_firmness: [R + 'B536850102/', '"The noodles were firm and easy to slurp."'],
        aroma_punch: [R + 'B535061805/', '"A light and frothy chicken paitan" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B534615423/', R + 'B536850102/', R + 'B535061805/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-8-91 中川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; opened September 2025; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番91号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534615423/', R + 'B535061805/', R + 'B534469662/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'August–October 2026.', 'tori_paitan'),
      it('', '', 'Chicken paitan tsukemen', '¥1,100', 'Tsukemen', 'no', 'no', 'September 2026; large +¥150.', 'tsuke'),
      it('', '', 'Ajitama', '¥150', 'Toppings', 'ask', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Yodare-chicken rice bowl', '¥300', 'Rice', 'no', 'no', 'August 2026.', 'yodare'),
      it('', '', 'Chilled corn-potage noodles (summer)', '¥1,400', 'Seasonal', 'no', 'no', 'August 2026.', 'corn'),
    ] }, {
    cuisine: '金麦の2号店・泡立つクリーミーな鶏白湯ラーメン1,000円、少しレアの鶏と豚のチャーシューと半熟卵・鶏白湯つけ麺1,100円(大盛り+150円)、冷水で締めた太いちぢれ麺・味玉150円・よだれ鶏丼300円・夏の冷やしコーンポタージュ麺1,400円・18席',
    neighborhood: '浪速区難波中2-8-91 中川ビル1F。南海なんば駅西口から徒歩約2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、鶏と豚のチャーシュー。',
    notes: '[ラーメン・南海なんば近くの金麦の鶏白湯] アメ村の本店に続く金麦の2号店で、2025年9月に南海なんば駅西口から2分の裏通りに開店、清潔で上品な店内と気持ちのいい接客。鶏白湯ラーメン(1,000円、2026年8〜10月)はクリーミーで泡立ち、重すぎず甘くやさしい味わいで、鶏と豚のチャーシューにきれいな半熟卵。つけ麺(1,100円、大盛り+150円)はあっさりした泡立つ鶏白湯のつけ汁に、冷水で締めた太いちぢれ麺。300円のよだれ鶏丼も。夏はさつまいも、ブロッコリー、鶏をのせた冷やしコーンポタージュ麺も出ていました。少し並ぶこともあります。タッチパネルの券売機で、カードやPayPayも可。',
  });
}

save();
