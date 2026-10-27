// Osaka sweep (2-mile circle around Dotonbori), batch 64 — ramen phase (all OMNI).
//   + 元祖油堂 クリスタ長堀店 (abura-soba with free large sizes and free drinks, opened February 2026)
//   + ラーメン 横綱 クリスタ長堀店 (Yokozuna tonkotsu with unlimited green onion; pin approximate)
//   + 三豊麺 なんば日本橋店 (rich seafood tsukemen, large and extra-large free)
//   + 鴻翔 (weekday Chinese by Nagahoribashi: white-sesame tantanmen, mapo tofu — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 64);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 元祖油堂 クリスタ長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27154289/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.ganso-aburado.com/';
  put({
    id: 'osaka_ganso_aburado_crysta_nagahori', name: '元祖油堂 クリスタ長堀店 (Ganso Abura Do Kurisuta Nagahori)', category: 'OMNI',
    lat: 34.675712, lng: 135.501253, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; sauce not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg yolk, cheese, chashu; sauce not described.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). Ticket machine (October 2026). Free large portions, free drinks (cold water, oolong, jasmine tea, fruit water) and paper aprons (September–October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Crysta Nagahori underground mall (Minamisenba 3-12) — near Shinsaibashi Stn',
    cuisine: 'Abura-soba chain · chewy medium-thick noodles in a slightly sweet sauce · "A" with egg yolk and parmesan · "B" · spicy miso · cheese set ¥1,000 · large and extra-large free; jumbo (from 450 g) extra · free onion, pickled ginger and garlic, plus a wide condiment bar · chili oil and vinegar · rice to finish in the sauce and soup to turn it into ramen · free drinks',
    website: OWN, gmaps: gm('元祖油堂 クリスタ長堀'), menu_url: null,
    notes: "[Abura-soba · free-large abura-soba in Crysta Nagahori] A branch of the Ganso Aburado abura-soba chain in the Crysta Nagahori underground mall near Shinsaibashi, open since February 2026 and handy on a rainy day. The noodles are chewy and medium-thick in a slightly sweet, not-too-oily sauce; the \"A\" version with egg yolk and parmesan tastes almost like carbonara, and there's a spicy miso too. Large and extra-large are free, so many go big; a paid jumbo comes in a basin-sized bowl, though one diner found its toppings sparse. Grab free onion, pickled ginger and garlic, play with chili oil and vinegar, then add rice to the leftover sauce or ask for soup to finish it as ramen. Free drinks (jasmine and oolong tea, fruit water) and paper aprons make it good value. A cheese set is ¥1,000 (October 2026). Open daily until 11 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 February 2026 (Tabelog)', background: 'Ganso Aburado abura-soba chain, with a shop at Haneda Airport (September 2026 review); official site ganso-aburado.com.', philosophy: null, specialty: 'Abura-soba with free large sizes.',
      anecdotes: [
        { text: '"You can get extra-large portions of noodles for free… At the counter, there are garlic, onions, pickled ginger, and a variety of flavors to customize your dish." — September 2026.', source: R + 'B536028125/' },
        { text: '"My impression was the same as last time: the sauce is slightly sweet, and the oiliness is a bit less than expected… The medium-thick noodles are chewy and pair well with the sauce." — October 2026, Abura Soba B, jumbo.', source: R + 'B526928200/' },
      ],
      japanese_sources_summary: '公式 ganso-aburado.com。食べログ: 元祖油堂 クリスタ長堀店、大阪市中央区南船場3-12 長堀地下街3、心斎橋駅から104m、毎日11:00〜23:00、カード・電子マネー・QR可、2026年2月16日開店。口コミ(2026年9〜10月): 油そばB(ジャンボ、海苔、マヨ)、券売機、ジャンボは洗面器のような器で3玉(公式では450g〜)、たれは少し甘めで油は思ったより少なめ、ラー油と酢、調味料が豊富、もちもちの中太麺、ジャンボのわりに具が少ないという声、追い飯、セルフの冷水・烏龍茶・ジャスミン茶・デトックスウォーター、紙エプロン、大盛り・特盛り無料、にんにく・玉ねぎ・紅しょうが、締めのスープ、羽田空港の店、辛味噌、チーズセット1,000円、パスタの粉のような風味、カルボナーラのよう、A(卵黄とパルメザン)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536028125/', R + 'B526928200/', R + 'B536070122/', R + 'B536275860/', R + 'B537302157/', R + 'B538157931/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Chewy medium-thick noodles; large and extra-large free (September–October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Abura-soba "A" with egg yolk and parmesan (October 2026).',
      chashu: null,
      notable_toppings: ['egg yolk', 'parmesan', 'onion', 'pickled ginger', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Egg yolk and cheese.' },
      pantheon: 'Crysta Nagahori\'s free-large abura-soba: slightly sweet sauce, carbonara-like "A", and a free drink bar.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536028125/', '"The sauce is rich" — mid-scale.'],
        oiliness: [R + 'B526928200/', '"The oiliness is a bit less than expected."'],
        clarity: [R + 'B526928200/', 'Soupless noodles; not applicable — mid-scale.'],
        tare_strength: [R + 'B526928200/', '"The sauce is slightly sweet" — mid-scale.'],
        noodle_firmness: [R + 'B536275860/', '"The chewy thick noodles."'],
        aroma_punch: [R + 'B536028125/', 'Garlic and onion added at will — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B526928200/', R + 'B536028125/', R + 'B536275860/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service extras.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-12 長堀地下街3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); opened February 2026; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目12番 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537302157/', R + 'B538157931/', R + 'B526928200/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Abura-soba A (egg yolk, parmesan)', '', 'Abura-soba', 'no', 'no', 'October 2026; large free.', 'a'),
      it('', '', 'Abura-soba B', '', 'Abura-soba', 'no', 'no', 'October 2026.', 'b'),
      it('', '', 'Spicy miso abura-soba', '', 'Abura-soba', 'no', 'no', 'September 2026.', 'karamiso'),
      it('', '', 'Cheese set', '¥1,000', 'Sets', 'no', 'no', 'October 2026.', 'cheese'),
      it('', '', 'Jumbo size', '', 'Options', 'no', 'no', 'October 2026; from 450 g.', 'jumbo'),
    ] }, {
    cuisine: '油そばのチェーン・少し甘めのたれにもちもちの中太麺・卵黄とパルメザンの「A」・「B」・辛味噌・チーズセット1,000円・大盛り・特盛り無料、ジャンボ(450g〜)は有料・無料の玉ねぎ、紅しょうが、にんにくと豊富な調味料・ラー油と酢・残ったたれに追い飯、スープでラーメン風にも・無料のドリンク',
    neighborhood: 'クリスタ長堀の地下街(南船場3-12)。心斎橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の中太麺、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。卵黄、チーズ、チャーシュー、たれの中身は不明。',
    notes: '[油そば・クリスタ長堀の大盛り無料の油そば] 心斎橋近くのクリスタ長堀の地下街にある元祖油堂の店で、2026年2月開店、雨の日にも便利。麺はもちもちの中太で、たれは少し甘めで油は控えめ。卵黄とパルメザンの「A」はカルボナーラのようで、辛味噌も。大盛りと特盛りは無料なので大きめを頼む人が多く、有料のジャンボは洗面器のような器で出てきますが、具が少なめだったという声も。無料の玉ねぎ、紅しょうが、にんにくをのせ、ラー油や酢で味を変え、最後は残ったたれにご飯を入れるか、スープを頼んでラーメン風に。ジャスミン茶や烏龍茶、フルーツウォーターなどの無料ドリンクや紙エプロンもあり、お得感があります。チーズセットは1,000円(2026年10月)。毎日23時まで。',
  });
}

// ================================================================ ラーメン 横綱 クリスタ長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27110187/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.4527.com/';
  put({
    id: 'osaka_ramen_yokozuna_crysta_nagahori', name: 'ラーメン 横綱 クリスタ長堀店 (Ramen Yokozuna Kurisuta Nagahori)', category: 'OMNI',
    lat: 34.675229, lng: 135.498795, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Daily 11:00–21:45; closed when Crysta Nagahori closes; hours may change (Tabelog). Tablet ordering at every seat (October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '21:45'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Crysta Nagahori WEST TOWN, underground (Minamisenba 4) — 2 min from Shinsaibashi Stn',
    cuisine: 'Yokozuna-chain tonkotsu ramen · ramen, large ¥930 (October 2026) · chashu ramen loaded with chashu · vegetable ramen · noodle firmness to order · unlimited free domestic green onion · spicy seasoning and chili garlic on the table · gyoza and fried rice · tablet ordering · 54 seats',
    website: OWN, gmaps: gm('ラーメン横綱 クリスタ長堀'), menu_url: null,
    notes: "[Ramen · Yokozuna's unlimited-green-onion tonkotsu in Crysta Nagahori] A 54-seat branch of the Ramen Yokozuna chain in the Crysta Nagahori underground mall, two minutes from Shinsaibashi and cool in summer. Regulars come back for the unlimited free green onion (domestic, one notes), piling it on until the bowl is mostly leek. The tonkotsu has a characteristic smell some love, and noodles can be ordered firm. A large ramen was ¥930 in October 2026, still under ¥1,000, and the chashu ramen comes loaded. The table's spicy seasoning and chili garlic change the bowl halfway through. One diner found the vegetable ramen too fatty. Gyoza and fried rice are on the side, and you order on a tablet.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 March 2019 (Tabelog)', background: 'Ramen Yokozuna chain (4527.com).', philosophy: null, specialty: 'Tonkotsu ramen with unlimited green onion.',
      anecdotes: [
        { text: '"Large Ramen. JPY 930. The price has gone up a bit, but it\'s still under JPY 1,000 for a large size… The unlimited green onions are definitely the best feature of Yokozuna. Plus, they are domestic!" — October 2026, ninth visit.', source: R + 'B493011574/' },
        { text: '"It does have a strong smell, but that\'s part of the charm, I suppose." — September 2026, chashu ramen.', source: R + 'B536321531/' },
      ],
      japanese_sources_summary: '公式 4527.com。食べログ: ラーメン 横綱 クリスタ長堀店、大阪市中央区南船場4 長堀地下街7 クリスタ長堀WEST TOWN、心斎橋駅から徒歩2分、毎日11:00〜21:45、休みはクリスタ長堀に準じる、カード・電子マネー・QR可、54席(カウンター16、6人テーブル3、4人テーブル5)、禁煙、2019年3月18日開店。口コミ(2026年8〜10月): ラーメン大930円、ねぎ入れ放題(国産)、チャーシュー麺大、変わらない味、ねぎを大量に入れてスープでやわらかく、卓上の辛味、野菜ラーメンは脂っこいという声、チャーシューたっぷりでコスパがいい、においは強めだが魅力、席ごとのタブレット注文、硬め、ニンニク辛子、餃子と炒飯。',
      confidence: 'medium', sources: [TB, OWN, R + 'B493011574/', R + 'B536321531/', R + 'B503269164/', R + 'B533685157/', R + 'B536180804/', R + 'B536824010/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Firmness to order (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen (large ¥930) with unlimited green onion (October 2026).',
      chashu: 'Generous on the chashu ramen (September 2026).',
      notable_toppings: ['unlimited green onion', 'spicy seasoning', 'chili garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Crysta Nagahori\'s Yokozuna: everyday tonkotsu under a mountain of free green onion.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536824010/', '"I was craving a rich ramen" — mid-scale.'],
        oiliness: [R + 'B536180804/', 'Vegetable ramen "quite fatty" — mid-scale for the standard bowl.'],
        clarity: [R + 'B536321531/', 'Tonkotsu — placed low.'],
        tare_strength: [R + 'B503269164/', '"The consistent flavor" — mid-scale.'],
        noodle_firmness: [R + 'B536824010/', 'Ordered firm — mid-scale.'],
        aroma_punch: [R + 'B536321531/', '"It does have a strong smell."'],
      },
      confidence: 'low', sources: [R + 'B536321531/', R + 'B536824010/', R + 'B493011574/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering at every seat.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区南船場4 長堀地下街7 クリスタ長堀 WEST TOWN',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区南船場四丁目 (chōme, 142m), so the pin is approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493011574/', R + 'B503269164/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ramen (large)', '¥930', 'Ramen', 'no', 'no', 'October 2026.', 'oomori'),
      it('', '', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'chashu_men'),
      it('', '', 'Vegetable ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'yasai'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'March 2025.', 'gyoza'),
      it('', '', 'Fried rice', '', 'Sides', 'no', 'no', 'March 2025.', 'chahan'),
    ] }, {
    cuisine: '横綱の豚骨ラーメン・ラーメン大930円(2026年10月)・チャーシューたっぷりのチャーシュー麺・野菜ラーメン・麺の硬さを選べる・国産ねぎ入れ放題・卓上の辛味とニンニク辛子・餃子と炒飯・タブレット注文・54席',
    neighborhood: 'クリスタ長堀WEST TOWNの地下街(南船場4)。心斎橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子と炒飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・クリスタ長堀の横綱のねぎ入れ放題の豚骨] 心斎橋から2分、夏も涼しいクリスタ長堀の地下街にあるラーメン横綱の54席の店。常連のお目当ては無料で入れ放題の国産ねぎで、丼がほとんどねぎになるまで盛る人も。豚骨は独特のにおいがあり、それが魅力という声も。麺は硬めも選べます。ラーメン大は2026年10月で930円とまだ1,000円以下で、チャーシュー麺はたっぷり。卓上の辛味やニンニク辛子で途中から味を変えて。野菜ラーメンは脂っこかったという人も。餃子や炒飯もあり、注文はタブレットで。',
  });
}

// ================================================================ 三豊麺 なんば日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084110/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sanpomen.jp/';
  put({
    id: 'osaka_sanpoumen_namba_nipponbashi', name: '三豊麺 なんば日本橋店 (Sanpou Men Namba Nipponbashi)', category: 'OMNI',
    lat: 34.663025, lng: 135.505016, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; fish-powder dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and pork dip, chashu.',
    hours_raw: 'Daily 11:00–23:00, open year-round (Tabelog). Tsukemen can take 12 minutes or more to boil at busy times (August 2026). Cards (inside), e-money and QR accepted (Tabelog; September 2026).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-1-23, Naniwa — about 6 min from Namba or Nippombashi Stn',
    cuisine: 'Rich seafood tsukemen with large and extra-large at the same price (extra-large adds 100 ml of dip) · thick, glossy, very chewy noodles · hot, thick dip with fish powder · red special rich seafood tsukemen ¥1,400 · thick menma, diced chashu · chashu-mayo rice bowl ¥290 · black tonkotsu ramen · shiro ajitama ramen · 19 seats over two floors',
    website: OWN, gmaps: gm('三豊麺 なんば日本橋'), menu_url: null,
    notes: "[Tsukemen · free-upsize rich seafood tsukemen between Namba and Nippombashi] A 19-seat tsukemen shop across two floors, about six minutes from both Namba and Nippombashi, open since 2015. The draw is value: large and extra-large tsukemen cost the same as regular, and extra-large even comes with 100 ml more dip. The noodles are thick, glossy and intensely chewy, and the dip is piping hot, thick and fish-powder forward, with thick menma and diced chashu. The red special rich seafood tsukemen is ¥1,400 (October 2026), and a chashu-mayo bowl is ¥290; mind the portions, as one pair barely finished. There's also black tonkotsu ramen. Waits for boiling can run past 12 minutes at lunch, and one diner got a lukewarm dip. Cards are accepted inside.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 March 2015 (Tabelog)', background: 'Sanpou Men tsukemen; official site sanpomen.jp (Tabelog).', philosophy: null, specialty: 'Rich seafood tsukemen.',
      anecdotes: [
        { text: '"They had an intense chewiness and elasticity, with a delightful aroma. The dipping sauce was piping hot and thick." — August 2026, extra-large seafood tsukemen.', source: R + 'B477663726/' },
        { text: '"Since the extra-large portion was free, I went for that! The soup also had an additional 100ml for free with the extra-large." — September 2026.', source: R + 'B536986893/' },
      ],
      japanese_sources_summary: '公式 sanpomen.jp。食べログ: 三豊麺 なんば日本橋店、大阪市浪速区難波中2-1-23、なんば駅・日本橋駅から徒歩6分、毎日11:00〜23:00、年中無休、カード・電子マネー・QR可、19席(1階カウンター7、2階カウンター8とテーブル4)、禁煙、2015年3月10日開店。口コミ(2025年10月〜2026年10月): 大盛りも同じ値段、平日の昼に外で待つ人、つけ麺は茹で時間がかかる、特盛り魚介つけ麺、PayPay、艶のある極太麺、強いコシ、熱々で濃厚なつけ汁、つけ汁がぬるかったという声、辛くて魚粉の効いたつけ麺、チャーシュー丼290円、量が多い、黒豚骨ラーメン、皆つけ麺を注文、現金のみに見えたが店内でカードも可、特盛り無料でスープ100ml増量、赤の特製濃厚魚介つけ麺1,400円、チャーシューマヨ丼290円、太いメンマと角切りチャーシュー、半熟でない卵。',
      confidence: 'medium', sources: [TB, OWN, R + 'B477663726/', R + 'B536986893/', R + 'B537643321/', R + 'B516956266/', R + 'B525374072/', R + 'B516452182/'] },
    ramen: {
      broth_base: ['gyokai', 'tonkotsu'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, glossy, very chewy noodles; large and extra-large free (August–October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Red special rich seafood tsukemen, ¥1,400 (October 2026).',
      chashu: 'Diced chashu in the dip (October 2026).',
      notable_toppings: ['thick menma', 'fish powder', 'diced chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood dip.' },
      pantheon: 'Namba\'s free-upsize tsukemen: thick, chewy noodles in a hot, fish-powder-heavy dip.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B477663726/', '"The dipping sauce was piping hot and thick."'],
        oiliness: [R + 'B537643321/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B477663726/', 'A thick dip — opaque.'],
        tare_strength: [R + 'B537643321/', '"The broth is flavorful."'],
        noodle_firmness: [R + 'B477663726/', '"An intense chewiness and elasticity."'],
        aroma_punch: [R + 'B516956266/', '"A strong fish powder flavor."'],
      },
      confidence: 'medium', sources: [R + 'B477663726/', R + 'B537643321/', R + 'B516956266/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter on two floors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-1-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目1番23号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537643321/', R + 'B536986893/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Red special rich seafood tsukemen', '¥1,400', 'Tsukemen', 'no', 'no', 'October 2026; large free.', 'aka_tokusei'),
      it('', '', 'Seafood tsukemen (extra-large free)', '', 'Tsukemen', 'no', 'no', 'August–September 2026.', 'gyokai_tsuke'),
      it('', '', 'Chashu-mayo rice bowl', '¥290', 'Rice', 'no', 'no', 'October 2026.', 'chashu_mayo'),
      it('', '', 'Black tonkotsu ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'kuro'),
    ] }, {
    cuisine: '濃厚魚介つけ麺、大盛り・特盛りは同じ値段(特盛りはつけ汁100ml増し)・艶のある極太麺でコシが強い・魚粉の効いた熱々で濃厚なつけ汁・赤の特製濃厚魚介つけ麺1,400円・太いメンマと角切りチャーシュー・チャーシューマヨ丼290円・黒豚骨ラーメン・白の味玉ラーメン・2フロアで19席',
    neighborhood: '浪速区難波中2-1-23。なんば駅・日本橋駅から徒歩約6分',
    gf_detail: 'グルテンフリーではありません。小麦の極太麺、魚粉のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。魚介と豚のつけ汁、チャーシュー。',
    notes: '[つけ麺・なんばと日本橋の間の大盛り無料の濃厚魚介つけ麺] なんば駅と日本橋駅のどちらからも6分ほど、2フロアで19席のつけ麺店で、2015年開店。魅力はお得さで、大盛りも特盛りも同じ値段、特盛りはつけ汁も100ml増し。艶のある極太麺はコシが強く香りがよく、つけ汁は熱々で濃厚、魚粉が効き、太いメンマと角切りチャーシュー入り。赤の特製濃厚魚介つけ麺は1,400円(2026年10月)、チャーシューマヨ丼は290円。量が多く、2人でなんとか食べきったという声も。黒豚骨ラーメンもあり。昼は茹で時間で12分以上待つこともあり、つけ汁がぬるかったという人も。カードは店内で使えます。',
  });
}

// ================================================================ 鴻翔
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27056378/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_koushou_shimanouchi', name: '鴻翔 (Koushou)', category: 'OMNI',
    lat: 34.673466, lng: 135.507198, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy- and bean-paste Sichuan sauces; fried chicken.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken and gyoza; mapo and broths not described.',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:30) and 17:00–23:00 (L.O. 22:00); closed weekends and holidays (Tabelog). One person runs lunch, so food can take a while (May 2025). Cash only: no cards or e-money (Tabelog; April 2026). Smoking allowed at lunch only (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 1-21-32, 1F — 30 m east of Nagahoribashi Stn',
    cuisine: 'Neighborhood Chinese · white-sesame tantanmen and Sichuan dan dan noodles · Sichuan mapo tofu, more numbing than hot, under ¥1,000 · yurinchi (fried chicken with citrus sauce) ¥850 with free large rice · fried-chicken and mapo tofu lunch sets · gyoza (evenings) · menma · stir-fried bok choy with ginger · 4 counter seats and 5 tables',
    website: null, gmaps: gm('鴻翔 島之内'), menu_url: null,
    notes: "[Chinese · a weekday Chinese diner by Nagahoribashi] A local-style Chinese diner 30 m from Nagahoribashi Station, open weekdays only and packed at lunch. The signature is a white-sesame tantanmen, and the Sichuan dan dan noodles bring real Sichuan pepper. The mapo tofu is thick and oily, mildly hot but intensely numbing, and under ¥1,000; one diner ordered extra rice for it. The yurinchi (¥850, April 2026) is a generous, freshly fried chicken with a tangy citrus sauce, and large rice is free. Evenings add gyoza, a surprisingly good menma and ginger-stir-fried bok choy. The owner is friendly, but one person runs lunch, so tables can sit uncleared and food takes time. Cash only; smoking allowed at lunch. Closed weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shimanouchi 1-chōme (Tabelog)', background: 'Weekday Chinese diner; lunch run by one person (May 2025 review).', philosophy: null, specialty: 'White-sesame tantanmen; mapo tofu.',
      anecdotes: [
        { text: '"In summer, they offer dishes like the fried chicken set and mapo tofu set, but the real highlight is the white sesame tantanmen." — July 2026.', source: R + 'B504227453/' },
        { text: '"The Mapo Tofu has a strong thickness and is quite oily. The spiciness is mild, but the numbing sensation is intense!" — August 2025.', source: R + 'B517799412/' },
      ],
      japanese_sources_summary: '食べログ: 鴻翔、大阪市中央区島之内1-21-32 田舎ビル1F、堺筋線長堀橋駅から東へ30m、月〜金11:30〜15:00(L.O.14:30)・17:00〜23:00(L.O.22:00)、土日祝休み、カード・電子マネー不可、24席(カウンター4、4人テーブル5)、喫煙可(昼のみ)。口コミ(2025年5月〜2026年10月): 昼はひとりで営業で時間がかかる、四川担担麺、花椒、昼は満席、夏は唐揚げ定食や麻婆豆腐定食、看板は白ごま担担麺、週末休み、夜は餃子、メンマ、麻婆豆腐はとろみと油が強く辛さは控えめで痺れが強い、1,000円以下、ニラ、店内が暑い、青梗菜の生姜炒め、気さくな店主、テーブルに前の客の食器が残る、油淋鶏850円、揚げたて、量が多い、ご飯大盛り無料、柑橘のたれ、現金のみ、四川風の麻婆、スープは少し塩辛い。',
      confidence: 'medium', sources: [TB, R + 'B504227453/', R + 'B517799412/', R + 'B404114769/', R + 'B520443177/', R + 'B526746594/', R + 'B537396277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local diner; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-21-32 田舎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目21番32号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526746594/', R + 'B517799412/', R + 'B504227453/'],
    price_note: 'Prices from August 2025 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White-sesame tantanmen', '', 'Noodles', 'no', 'no', 'July 2026.', 'shiro_tantan'),
      it('', '', 'Sichuan dan dan noodles', '', 'Noodles', 'no', 'no', 'May 2025.', 'tantan'),
      it('', '', 'Mapo tofu', '', 'Mains', 'no', 'no', 'October 2026; under ¥1,000 (August 2025).', 'mapo'),
      it('', '', 'Yurinchi (fried chicken, citrus sauce)', '¥850', 'Mains', 'no', 'no', 'April 2026; large rice free.', 'yurinchi'),
      it('', '', 'Stir-fried bok choy with ginger', '', 'Vegetables', 'ask', 'ask', 'January 2026.', 'chingensai'),
      it('', '', 'Gyoza (evenings)', '', 'Sides', 'no', 'no', 'March 2026.', 'gyoza'),
    ] }, {
    cuisine: '町の中華・白ごま担担麺と四川担担麺・辛さより痺れの強い四川の麻婆豆腐、1,000円以下・油淋鶏850円(柑橘のたれ、ご飯大盛り無料)・唐揚げや麻婆豆腐の昼定食・餃子(夜)・メンマ・青梗菜の生姜炒め・カウンター4席とテーブル5卓',
    neighborhood: '島之内1-21-32 田舎ビル1F。長堀橋駅から東へ30m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や豆板醤の四川のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。唐揚げや餃子、麻婆やスープの中身は不明。',
    notes: '[中華・長堀橋そばの平日だけの町中華] 長堀橋駅から30mにある町中華の店で、営業は平日のみ、昼は満席に。看板は白ごま担担麺で、四川担担麺は花椒がしっかり。麻婆豆腐はとろみと油が強く、辛さは控えめで痺れが強烈、1,000円以下。ご飯を追加した人も。油淋鶏(850円、2026年4月)は揚げたてで量が多く、柑橘のたれが爽やか、ご飯大盛りは無料。夜は餃子、意外なほどおいしいメンマ、青梗菜の生姜炒めも。店主は気さくですが、昼はひとりで回すので、テーブルが片付いていなかったり時間がかかったりも。現金のみ、昼は喫煙可。土日祝休み。',
  });
}

save();
