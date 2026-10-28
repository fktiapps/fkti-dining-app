// Osaka sweep (2-mile circle around Dotonbori), batch 123 — ramen phase (all OMNI).
//   + らーめん 極 本店 (light tonkotsu in white, black or red, and the egg-topped "char-rice"; by Tennoji)
//   + 中華そば 辻 (punchy chili-and-garlic chuka soba, beef horumon bowl, sour-spicy djanmen; Tenmabashi)
//   + 家系ラーメン 船場家 (lighter iekei on Inoue Seimen noodles, smoked thigh chashu, free lunch rice; Tsuruhashi)
//   + MAREN 肥後橋 (shoyu and chicken-shio mazesoba with a mini rice to finish; Higobashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 123);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らーめん 極 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27004895/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ramen-goku.osaka/';
  put({
    id: 'osaka_ramen_goku_honten', name: 'らーめん 極 本店 (Ramen Goku Honten)', category: 'OMNI',
    lat: 34.647824, lng: 135.509333, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice with sauces on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; back fat; chashu; egg on the char-rice.',
    hours_raw: 'Daily 11:00–22:00; closing days not fixed; hours may change (Tabelog). Buy tickets at the machine outside (September 2026). Cash or PayPay; no cards or e-money (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Asahimachi 1-1-26 (Abeno-ku), Uemura Abeno Bldg 1F — about 5 min from Tennoji Stn',
    cuisine: 'Tonkotsu ramen and "char-rice" · tonkotsu ramen in three styles: shiro (white), kuro (with black garlic oil) or aka (red); free extra back fat; wood ear mushroom; about five slices of chashu · Manpuku set: ramen + small char-rice · char-rice: fried rice topped with a fluffy omelet, lightly seasoned so you add the sauces on the table · chashu chuka soba ¥1,300: thick noodles, seasoned menma · free half-size kaedama until 15:00 on weekdays · free toppings: pickled ginger, spicy takana, grated garlic, fried onion, mayonnaise · 9 counter seats',
    website: OWN, gmaps: gm('らーめん 極 本店'), menu_url: null,
    notes: "[Ramen · light tonkotsu and egg-topped char-rice by Tennoji] A nine-seat, dimly lit counter about five minutes from Tennoji, known for its char-rice: fried rice under a fluffy omelet, seasoned lightly on purpose so you finish it with the garlic or wasabi sauces on the table. The tonkotsu comes white, black (with black garlic oil) or red, and one diner found it lighter and less salty than expected, closer to Mokkosu than Hakata; it comes with about five slices of chashu and wood ear mushroom. Extra back fat is free, and so are pickled ginger, spicy takana, grated garlic, fried onion and mayonnaise. The Manpuku set pairs a bowl with a small char-rice. A chashu chuka soba (¥1,300) on thick noodles is the other option. Free half-size kaedama until 15:00 on weekdays. Buy tickets at the machine outside; cash or PayPay only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tonkotsu ramen shop, main store (Tabelog; 2026 reviews).', philosophy: '"A shop that seriously makes pork bone soup" (shop phrase quoted in an October 2026 review).', specialty: 'Tonkotsu ramen in three styles; char-rice.',
      anecdotes: [
        { text: '"The ramen is tonkotsu and you can choose from white, black, or red. I opted for the black with black garlic oil… The char rice, which is fried rice topped with an omelet, was incredibly tasty. The omelet was fluffy…" — September 2026, Manpuku set.', source: R + 'B535357531/' },
        { text: '"The flavor was lighter and less salty than I expected, resembling more of a Mokkosu style than Hakata. I ordered extra fat, but it wasn\'t overwhelming…" — September 2026.', source: R + 'B535340243/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 極 本店、大阪市阿倍野区旭町1-1-26 ウエムラあべのビル 1F、天王寺駅から約5分、動物園前駅から約5分、毎日11:00〜22:00、定休日不定、カード・電子マネー不可、QRはPayPay可、カウンター9席。口コミ(2026年9〜10月): Char-rice で知られる豚骨ラーメンの本店、外の券売機、Manpuku Set (ラーメンと小さな Char-rice)、豚骨は Shiro、Kuro (黒にんにく油)、Aka の3種、背脂増し無料、きくらげ、チャーシュー約5枚、博多より Mokkosu に近いあっさりで塩気控えめ、平日15時まで半替え玉無料、卓上に黒胡椒、山椒、ごま、唐辛子とご飯用の3種のソース、無料トッピングに紅しょうが、辛子高菜、おろしにんにく、フライドオニオン、マヨネーズ、Char-rice はふわふわのオムレツをのせた薄味の炒めご飯、店員が親切、チャーシュー中華そば1,300円は太麺と味付きメンマ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535340243/', R + 'B535357531/', R + 'B536142211/', R + 'B536879403/', R + 'B537822391/', R + 'B537951578/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['back fat', 'black garlic oil (kuro)'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Free half-size kaedama until 15:00 on weekdays; thick noodles in the chashu chuka soba (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu ramen (shiro, kuro or aka) with char-rice in the Manpuku set (2026).',
      chashu: 'Large, tender chashu, about five slices (2026).',
      notable_toppings: ['free back fat', 'wood ear mushroom', 'spicy takana', 'pickled ginger', 'fried onion', 'mayonnaise'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Tennoji\'s light three-color tonkotsu, best known for the omelet-topped char-rice.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536142211/', '"It wasn\'t greasy or overwhelmingly rich, striking a nice balance" — mid-scale.'],
        oiliness: [R + 'B535340243/', '"I ordered extra fat, but it wasn\'t overwhelming" — mid-scale.'],
        clarity: [R + 'B536879403/', '"The ramen has a rich tonkotsu taste" — a pork-bone paitan, placed low.'],
        tare_strength: [R + 'B535340243/', '"Lighter and less salty than I expected" — placed low.'],
        noodle_firmness: [R + 'B537951578/', '"The noodles were thick" (chuka soba); no review describes firmness — mid-scale.'],
        aroma_punch: [R + 'B535357531/', '"The black with black garlic oil. It was delicious, but just at a normal level" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535340243/', R + 'B536142211/', R + 'B536879403/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; friendly staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区旭町1-1-26 ウエムラあべのビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区旭町一丁目1番26号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535357531/', R + 'B536879403/', R + 'B537951578/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen: shiro, kuro (black garlic oil) or aka', '', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
      it('', '', 'Manpuku set (ramen + small char-rice)', '', 'Sets', 'no', 'no', 'October 2026.', 'manpuku'),
      it('', '', 'Char-rice (fried rice topped with an omelet)', '', 'Rice', 'no', 'no', 'Sauces on the table. September 2026.', 'char_rice'),
      it('', '', 'Chashu chuka soba', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'chashu_chuka'),
      it('', '', 'Half-size kaedama (weekdays until 15:00)', 'Free', 'Toppings', 'no', 'no', 'September 2026.', 'kaedama'),
    ] }, {
    cuisine: '豚骨ラーメンと Char-rice・豚骨ラーメンは Shiro、Kuro (黒にんにく油)、Aka の3種、背脂増し無料、きくらげ、チャーシュー約5枚・Manpuku Set: ラーメンと小さな Char-rice・Char-rice: ふわふわのオムレツをのせた炒めご飯、薄味なので卓上のソースで・チャーシュー中華そば1,300円: 太麺、味付きメンマ・平日15時まで半替え玉無料・無料トッピング: 紅しょうが、辛子高菜、おろしにんにく、フライドオニオン、マヨネーズ・カウンター9席',
    neighborhood: '阿倍野区旭町1-1-26 ウエムラあべのビル 1F。天王寺駅から約5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、卓上のソースで味をつける炒めご飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー、Char-rice の卵。',
    notes: '[ラーメン・天王寺近く、あっさり豚骨とオムレツのせの Char-rice] 天王寺から5分ほど、照明を落としたカウンター9席の店で、名物は Char-rice: ふわふわのオムレツをのせた炒めご飯で、わざと薄味にしてあり、卓上のにんにくやわさびのソースで仕上げる。豚骨は Shiro、Kuro (黒にんにく油)、Aka の3種で、思ったよりあっさりで塩気も控えめ、博多より Mokkosu に近いという声も。チャーシューは5枚ほど、きくらげ入り。背脂増しは無料、紅しょうが、辛子高菜、おろしにんにく、フライドオニオン、マヨネーズも無料。Manpuku Set はラーメンと小さな Char-rice の組み合わせ。太麺のチャーシュー中華そば(1,300円)も。平日15時までは半替え玉が無料。食券は外の券売機で、現金か PayPay のみ。',
  });
}

// ================================================================ 中華そば 辻
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27135527/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:15'], ['17:30', '21:15']);
  put({
    id: 'osaka_chuka_soba_tsuji_tenmabashi', name: '中華そば 辻 (Chuka Soba Tsuji)', category: 'OMNI',
    lat: 34.687967, lng: 135.516844, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce soup; chili oil.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; beef horumon; chashu; egg yolk and quail eggs.',
    hours_raw: 'Daily 11:00–14:15 and 17:30–21:15; closed the evening of the third Tuesday each month; occasional temporary closures, check Google Maps (Tabelog). Check in on the touch panel out front, then buy a ticket inside (2026). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tsurigane-cho 1-1-1 — 1 min from Tenmabashi Stn exit 4',
    cuisine: 'Spicy, punchy chuka soba · chuka soba: shoyu with chili and fresh garlic; egg yolk and extra meat toppings · spicy beef horumon chuka soba · limited Bachiro with noodles from another long-standing brand: ¥1,100 with extra bean sprouts, dark soy, plenty of chashu; extra quail eggs or horumon · special sour and spicy djanmen ¥1,800 (extra heat and chili oil to ¥2,050) · summer special chilled tantan mazesoba with quail eggs and kimchi · meat-taku rice bowl ¥550 · Dragon\'s Egg TKG · 7 counter seats and two tables for two',
    website: null, gmaps: gm('中華そば 辻'), menu_url: null,
    notes: "[Ramen · punchy chili-and-garlic chuka soba by Tenmabashi] An eleven-seat shop a minute from Tenmabashi, open since 2023 and now busy thanks to social media: check in on the touch panel out front and expect a wait (about 25 minutes to get in, one August lunch). The chuka soba is shoyu loaded with chili and fresh garlic; one diner calls this kind of punch rare in Kansai, where Mongolian Tanmen Nakamoto has no shops, while another found it a fairly standard shoyu with chili. The beef horumon chuka soba brings more chili and garlic, and one diner found the sour and spicy djanmen (¥1,800) rich to the last bite. Limited bowls rotate: Bachiro (¥1,100 with extra sprouts) on borrowed noodles, and a chilled tantan mazesoba in summer. Add a meat-taku rice bowl (¥550). Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 April 2023 (Tabelog)', background: 'Chuka soba shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Spicy chuka soba with chili and garlic; limited bowls.',
      anecdotes: [
        { text: '"The Chuka Soba here is known for its spiciness, featuring chili peppers as a highlight. I ordered the spicy Chuka Soba with beef offal in a large size." — August 2026; about 25 minutes in line to get inside.', source: R + 'B534547150/' },
        { text: '"I added some garlic from the table and got ready to dig in. This chuka soba seemed like it was made just for someone like me, who loves garlic and chili." — October 2026, beef horumon chuka soba.', source: R + 'B538175756/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば 辻、大阪市中央区釣鐘町1-1-1、天満橋駅④出口から徒歩1分、毎日11:00〜14:15・17:30〜21:15、毎月第3火曜の夜は休み、臨時休業あり、カード・電子マネー・QR (Alipay、WeChat Pay を含む) 可、11席(カウンター7、2人掛けテーブル2)、2023年4月11日開店。口コミ(2026年5〜10月): 店前のタッチパネルで受付、店内で食券、SNSで人気になり行列、約25分で入店、唐辛子が主役の辛い中華そば、牛ホルモンの中華そば大盛り、関西では珍しいパンチ、Mongolian Tanmen Nakamoto との比較、限定のバチ郎 (もやし増し1,100円、別ブランドの麺、濃口醤油、たっぷりのチャーシュー)、バチ郎 うずら増し、バチ郎 ホルモン増し、龍のたまごのTKG、肉タク丼550円、バッチバチ牛ホル中華そば、夏の冷やし担々まぜそば (特製はうずら卵とキムチ)、特製酸辣ジャンメン1,800円、唐辛子と生にんにくの醤油ラーメンで普通だったという声、卵黄、卓上のにんにく、ストレートの細麺を出す Mokkosu を思い出したという声、豚の火入れや脂にばらつきがあったという声。',
      confidence: 'medium', sources: [TB, R + 'B464220264/', R + 'B534547150/', R + 'B537674359/', R + 'B537752862/', R + 'B537889927/', R + 'B538175756/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Limited Bachiro used noodles from another long-standing brand (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Spicy beef horumon chuka soba (2026).',
      chashu: 'Plenty of tasty chashu on the Bachiro (October 2026).',
      notable_toppings: ['chili', 'fresh garlic', 'beef horumon', 'egg yolk', 'bean sprouts', 'quail eggs'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth and horumon.' },
      pantheon: 'Tenmabashi\'s chili-and-garlic punch bowl, a rare kind of heat for Kansai.',
      profile: { richness: 3, oiliness: 4, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537752862/', '"The flavor wasn\'t particularly bold; it was a standard shoyu ramen" (one diner) — mid-scale.'],
        oiliness: [R + 'B464220264/', '"Tonight, the fat is quite rich" — placed high.'],
        clarity: [R + 'B537674359/', '"The dark soy sauce was quite delicious"; no review describes the soup as clear or cloudy — mid-scale.'],
        tare_strength: [R + 'B537674359/', '"The dark soy sauce was quite delicious" — placed high.'],
        noodle_firmness: [R + 'B464220264/', '"They really cling to the sauce" (Bachiro noodles); firmness not described — mid-scale.'],
        aroma_punch: [R + 'B534547150/', '"The spiciness and punch are incredible" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B534547150/', R + 'B537674359/', R + 'B537752862/', R + 'B464220264/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Digital check-in out front, and staff came out to explain it (October 2026); ticket inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区釣鐘町1-1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区釣鐘町一丁目1番1号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B464220264/', R + 'B537674359/', R + 'B537889927/'],
    price_note: 'Prices from May–October 2026 reviews; limited bowls rotate.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (chili and fresh garlic)', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('バッチバチ牛ホル中華そば', '', 'Spicy beef horumon chuka soba', '', 'Ramen', 'no', 'no', 'June 2026 photo caption.', 'gyuhoru'),
      it('バチ郎', 'Bachiro', 'Bachiro, extra bean sprouts (limited)', '¥1,100', 'Limited', 'no', 'no', 'October 2026.', 'bachiro'),
      it('', '', 'Special sour and spicy djanmen', '¥1,800', 'Ramen', 'no', 'no', 'October 2026.', 'djanmen'),
      it('', '', 'Special chilled tantan mazesoba (summer)', '', 'Limited', 'no', 'no', 'Quail eggs and kimchi. May–July 2026.', 'hiyashi_tantan'),
      it('肉タク丼', '', 'Meat-taku rice bowl', '¥550', 'Rice', 'ask', 'no', 'October 2026.', 'nikutaku'),
      it('龍のたまごのTKG', '', 'Dragon\'s Egg TKG (tamago-kake gohan)', '', 'Rice', 'ask', 'no', 'June–October 2026.', 'tkg'),
    ] }, {
    cuisine: 'パンチのある辛い中華そば・中華そば: 唐辛子と生にんにくの醤油、卵黄、肉増し・バッチバチ牛ホル中華そば・限定のバチ郎は別ブランドの麺で、もやし増し1,100円、濃口醤油、たっぷりのチャーシュー、うずら増しやホルモン増し・特製酸辣ジャンメン1,800円 (辛さ増しとラー油で2,050円)・夏の特製冷やし担々まぜそば、うずら卵とキムチ・肉タク丼550円・龍のたまごのTKG・カウンター7席と2人掛けテーブル2卓',
    neighborhood: '中央区釣鐘町1-1-1。天満橋駅④出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ、ラー油。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、牛ホルモン、チャーシュー、卵黄とうずら卵。',
    notes: '[ラーメン・天満橋近く、唐辛子とにんにくのパンチ中華そば] 天満橋から1分、11席の店で、2023年開店、SNSで人気になり、店前のタッチパネルで受付して待つ (8月の昼は入店まで約25分)。中華そばは唐辛子と生にんにくを効かせた醤油で、Mongolian Tanmen Nakamoto のない関西ではこのパンチは珍しいという声もあれば、唐辛子入りの普通の醤油ラーメンだったという声も。バッチバチ牛ホル中華そばは唐辛子とにんにくがさらに効き、特製酸辣ジャンメン(1,800円)は最後まで濃い味が続いたという声も。限定は入れ替わり、別ブランドの麺のバチ郎(もやし増し1,100円)や夏の冷やし担々まぜそばも。肉タク丼(550円)も。カード、QR可。',
  });
}

// ================================================================ 家系ラーメン 船場家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27149798/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_iekei_semba_ya_tsuruhashi', name: '家系ラーメン 船場家 (Iekei Ramen Semba Ya)', category: 'OMNI',
    lat: 34.66798, lng: 135.527819, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; doubanjiang on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken broth; chicken oil; pork chashu; egg.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00 (last order 22:30); hours may change (Tabelog). Free rice (100 or 150 g) at lunch; no refills (2026). Buy tickets at the machine; state noodle firmness, flavor strength and oil when handing it over. Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ajiharacho 4-8 (Tennoji-ku) — about 10 min walk from Tsuruhashi Stn',
    cuisine: 'Yokohama-style iekei ramen · ramen: pork bones and chicken carcasses with a mild soy tare, chicken oil, medium-thick short noodles from Inoue Seimen, smoked oven-roasted pork-thigh chashu and shredded chashu, komatsuna, negi, nori; noodles, flavor and oil to order · jō ramen ¥1,000: extra chashu, two more nori, half a seasoned egg · chashu ramen ¥1,100 · fresh spinach instead +¥50 · chopped onion ¥100 · rice free at lunch (100 or 150 g), 200 g ¥100 · table: doubanjiang, garlic, ginger, vinegar, sesame, ramen pepper, pickled cucumber, furikake · 8 counter seats',
    website: null, gmaps: gm('家系ラーメン 船場家'), menu_url: null,
    notes: "[Ramen · lighter iekei with smoked chashu by Tsuruhashi] An eight-seat counter about ten minutes from Tsuruhashi, open since May 2025, with lines on weekends. The broth of pork bones and chicken carcasses is creamy and rich but easy to drink, with a mild soy tare and chicken oil, over chewy medium-thick short noodles from Inoue Seimen; order firmness, flavor and oil to taste. Smoked, oven-roasted thigh chashu (firm and meaty) and shredded chashu sit with komatsuna and nori. The jō ramen (¥1,000) adds chashu, nori and half an egg. Rice is free at lunch; top it with the pickled cucumber and furikake, and finish with doubanjiang from the table. One diner calls it possibly the best iekei in Osaka; another found the broth thinner and the chashu dry on a later visit. Staff see you off at the door.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 May 2025 (Tabelog)', background: 'Iekei ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Iekei ramen with smoked thigh chashu.',
      anecdotes: [
        { text: '"The broth, made from simmered pork bones and chicken carcasses, has a rich umami flavor. It strikes a nice balance with a mild soy sauce taste, making it easy to drink… The noodles are medium-thick, short noodles from Inoue Seimen…" — September 2026, jō ramen ¥1,000.', source: R + 'B517062817/' },
        { text: '"The noodles were thick and had a strong texture, giving a firm impression with less chewiness. The chashu was moist and tender, with a perfect contrast of smoky flavor and meaty goodness." — October 2026, firm noodles and extra oil.', source: R + 'B537670440/' },
      ],
      japanese_sources_summary: '食べログ: 家系ラーメン 船場家、大阪市天王寺区味原町4-8、鶴橋から398m、毎日11:00〜15:00・17:00〜23:00 (L.O. 22:30)、カード・電子マネー・QR可、カウンター8席、2025年5月31日開店。口コミ(2026年8〜10月): 豚骨と鶏ガラのスープ、マイルドな醤油、Inoue Seimen の中太の短い麺、燻製したオーブン焼きの豚もものチャーシューと刻みチャーシュー、小松菜、ねぎ、海苔、10月24・25日だけ豚バラのチャーシュー、チャーシューラーメン1,100円、Jō Ramen 1,000円 (チャーシュー1枚、海苔2枚、味玉半分を追加)、昼はライス100gか150gが無料、おかわりなし、ほうれん草に変更50円、刻み玉ねぎ100円、ライス200g 100円、卓上に豆板醤、にんにく、生姜、酢、ごま、ラーメンペッパー、きゅうりの漬物、ふりかけ、麺の硬さ・味の濃さ・油の量を選べる、明るく丁寧な接客、見送り、週末は行列、クリーミーで濃厚なスープ、Rokukaku-ya に似ているという声、大阪の家系で一番かもという声、2回目はスープが薄くチャーシューが乾いていたという声、券売機。',
      confidence: 'medium', sources: [TB, R + 'B517062817/', R + 'B535604242/', R + 'B537359091/', R + 'B537582804/', R + 'B537670440/', R + 'B538096886/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick short noodles from Inoue Seimen; firmness to order (2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Jō ramen, ¥1,000 (October 2026).',
      chashu: 'Smoked, oven-roasted pork-thigh chashu plus shredded chashu; pork belly on special days (2026).',
      notable_toppings: ['komatsuna or fresh spinach', 'nori', 'half seasoned egg', 'chopped onion', 'doubanjiang'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken broth.' },
      pantheon: 'Tsuruhashi\'s easy-drinking iekei with smoky thigh chashu and free lunch rice.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537582804/', '"A deliciously easy-to-eat Iekei ramen without being too rich" — mid-scale.'],
        oiliness: [R + 'B537670440/', '"The chicken oil and chashu were very delicious"; oil level to order — mid-scale.'],
        clarity: [R + 'B537359091/', '"The broth is creamy and rich" — bottom of scale.'],
        tare_strength: [R + 'B517062817/', '"A mild soy sauce taste, making it easy to drink" — mid-scale.'],
        noodle_firmness: [R + 'B537670440/', '"The noodles were thick and had a strong texture, giving a firm impression" — placed high.'],
        aroma_punch: [R + 'B538096886/', '"A rich soy sauce flavor with a strong pork bone essence" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B517062817/', R + 'B537670440/', R + 'B537359091/', R + 'B537582804/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; bright, friendly service (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区味原町4-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区味原町4番8号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517062817/', R + 'B537582804/', R + 'B537670440/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Jō ramen (extra chashu, nori, half egg)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'jo'),
      it('', '', 'Chashu ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Fresh spinach instead of komatsuna', '+¥50', 'Toppings', 'no', 'no', 'October 2026.', 'spinach'),
      it('', '', 'Chopped onion', '¥100', 'Toppings', 'no', 'no', 'October 2026.', 'onion'),
      it('', '', 'Rice, 100 or 150 g (lunch)', 'Free', 'Rice', 'ask', 'ask', 'October 2026.', 'rice_free'),
      it('', '', 'Rice, 200 g', '¥100', 'Rice', 'ask', 'ask', 'October 2026.', 'rice_200'),
    ] }, {
    cuisine: '横浜の家系ラーメン・ラーメン: 豚骨と鶏ガラにマイルドな醤油、鶏油、Inoue Seimen の中太の短い麺、燻製したオーブン焼きの豚ももチャーシューと刻みチャーシュー、小松菜、ねぎ、海苔、麺・味・油はお好みで・Jō Ramen 1,000円: チャーシュー、海苔2枚、味玉半分を追加・チャーシューラーメン1,100円・ほうれん草に変更+50円・刻み玉ねぎ100円・昼はライス無料 (100gか150g)、200gは100円・卓上: 豆板醤、にんにく、生姜、酢、ごま、ラーメンペッパー、きゅうりの漬物、ふりかけ・カウンター8席',
    neighborhood: '天王寺区味原町4-8。鶴橋駅から徒歩約10分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、卓上の豆板醤。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏ガラのスープ、鶏油、豚のチャーシュー、卵。',
    notes: '[ラーメン・鶴橋近く、燻製チャーシューの軽めの家系] 鶴橋から10分ほど、カウンター8席の店で、2025年5月開店、週末は行列。豚骨と鶏ガラのスープはクリーミーで濃厚なのに飲みやすく、マイルドな醤油と鶏油、Inoue Seimen の中太の短い麺はもちもち、硬さ・味・油はお好みで。燻製してオーブンで焼いたもものチャーシュー (締まって肉々しい) と刻みチャーシューに小松菜と海苔。Jō Ramen (1,000円) はチャーシュー、海苔、味玉半分を追加。昼はライス無料、きゅうりの漬物やふりかけをのせて、最後は卓上の豆板醤で。大阪の家系で一番かもという声がある一方、2回目はスープが薄くチャーシューが乾いていたという声も。帰りは店の人が見送ってくれる。',
  });
}

// ================================================================ MAREN 肥後橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27135313/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_maren_higobashi', name: 'MAREN 肥後橋 (MAREN Higobashi)', category: 'OMNI',
    lat: 34.690897, lng: 135.495733, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken sauces and paitan; chashu; seasoned egg; niboshi vinegar.',
    hours_raw: 'Daily 10:30–22:00 (Tabelog). Order on the touch panel; long lines after 12:00 at lunch (2026). Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['10:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Edobori 1-15-7 (Nishi-ku) — by Higobashi Stn exit 9',
    cuisine: 'Mazesoba · shoyu mazesoba ¥980: thick noodles in a rich but not heavy sauce, small scoop of rice to mix in at the end · chicken shio mazesoba with shiso, with a mini rice · chicken shoyu chashu mazesoba · chicken paitan ramen · seasoned egg +¥150 · niboshi vinegar to change the flavor · 11 seats',
    website: null, gmaps: gm('MAREN 肥後橋'), menu_url: null,
    notes: "[Ramen · tidy mazesoba with a rice finish at Higobashi] An eleven-seat shop right by Higobashi exit 9, open since April 2023 and part of MAREN, the mazesoba shop with a branch in Shinsaibashi. The shoyu mazesoba (¥980) coats thick, chewy noodles in a sauce that's rich but not heavy and arrives neatly arranged; add niboshi vinegar halfway, then mix the small scoop of rice into what's left. The chicken shio mazesoba gets its lift from shiso, and there's a chicken shoyu chashu version. The chicken paitan ramen is less loved: one diner saw it made from powders blended into a clear liquid on an IH burner. Order on the touch panel. Lines build after 12:00, so go early or late. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2023 (Tabelog)', background: 'Mazesoba shop; sister shop of MAREN Shinsaibashi (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shoyu and chicken mazesoba.',
      anecdotes: [
        { text: '"The thick noodles are coated in a flavorful sauce that\'s delicious! It\'s rich but not too heavy… I added some niboshi vinegar for a flavor change, which made it even smoother!" — October 2026, shoyu mazesoba.', source: R + 'B537419886/' },
        { text: '"To finish off, you can mix in a small plate of rice, which is so tasty that I can\'t help but finish it all…" — September 2026, shoyu mazesoba ¥980.', source: R + 'B535215150/' },
      ],
      japanese_sources_summary: '食べログ: MAREN 肥後橋、大阪市西区江戸堀1-15-7、四つ橋線肥後橋駅9番出口から69m、毎日10:30〜22:00、カード・電子マネー・QR可、11席、2023年4月1日開店。口コミ(2026年8〜10月): 醤油まぜそば980円、太麺に濃厚だが重すぎないたれ、途中で煮干し酢、最後に小さなご飯を混ぜる、鶏塩まぜそば (ミニご飯付き) は大葉の風味ともちもちの麺、味玉150円、タッチパネルで注文、鶏醤油チャーシューまぜそばは見た目がおしゃれでマイルド、たれがたっぷり、12時を過ぎると行列、昼は時間をずらすのがおすすめ、グッズ、鶏白湯はIHの小鍋で透明な液体に粉を混ぜて作っていたという声、近くの Zagin が行列でこちらへという声。',
      confidence: 'medium', sources: [TB, R + 'B464425849/', R + 'B533079984/', R + 'B534222387/', R + 'B535215150/', R + 'B536622041/', R + 'B537419886/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy noodles in the mazesoba (2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen', 'tori_paitan'],
      signature_bowl: 'Shoyu mazesoba, ¥980 (September 2026).',
      chashu: 'Chashu on the chicken shoyu chashu mazesoba (August 2026).',
      notable_toppings: ['shiso', 'seasoned egg', 'niboshi vinegar', 'mini rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-based sauce.' },
      pantheon: 'Higobashi\'s neat shoyu mazesoba with niboshi vinegar and a rice finish.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537419886/', '"It\'s rich but not too heavy, making it easy to eat" — mid-scale.'],
        oiliness: [R + 'B533079984/', '"A milder flavor that is well-balanced" — mid-scale.'],
        clarity: [R + 'B533079984/', '"The sauce was generous" — a mazesoba sauce, no clear soup; placed low.'],
        tare_strength: [R + 'B537419886/', '"Coated in a flavorful sauce"; "a milder flavor" (B533079984) — mid-scale.'],
        noodle_firmness: [R + 'B534222387/', '"The chewy noodles were delicious" — placed high.'],
        aroma_punch: [R + 'B534222387/', '"The flavor of the shiso leaves" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537419886/', R + 'B533079984/', R + 'B534222387/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering, easy to follow (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-15-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目15番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535215150/', R + 'B534222387/', R + 'B533079984/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu mazesoba (with a small rice)', '¥980', 'Mazesoba', 'no', 'no', 'September 2026.', 'shoyu_maze'),
      it('', '', 'Chicken shio mazesoba (with a mini rice)', '', 'Mazesoba', 'no', 'no', 'August 2026.', 'tori_shio_maze'),
      it('', '', 'Chicken shoyu chashu mazesoba', '', 'Mazesoba', 'no', 'no', 'August 2026.', 'chashu_maze'),
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'paitan'),
      it('', '', 'Seasoned egg', '+¥150', 'Toppings', 'no', 'no', 'August 2026.', 'ajitama'),
    ] }, {
    cuisine: 'まぜそば・醤油まぜそば980円: 太麺に濃厚だが重すぎないたれ、最後に小さなご飯を混ぜる・大葉の鶏塩まぜそば、ミニご飯付き・鶏醤油チャーシューまぜそば・鶏白湯ラーメン・味玉+150円・味変に煮干し酢・11席',
    neighborhood: '西区江戸堀1-15-7。肥後橋駅9番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のたれと鶏白湯、チャーシュー、味玉、煮干し酢。',
    notes: '[ラーメン・肥後橋、ご飯で締める端正なまぜそば] 肥後橋9番出口すぐの11席の店で、2023年4月開店、心斎橋にも店がある MAREN の一軒。醤油まぜそば(980円)は濃厚だが重すぎないたれがもちもちの太麺にからみ、盛り付けもきれい。途中で煮干し酢を足し、最後に小さなご飯を残りに混ぜる。鶏塩まぜそばは大葉が効き、鶏醤油チャーシューまぜそばも。鶏白湯ラーメンは評価が分かれ、IHの小鍋で透明な液体に粉を混ぜて作っていたという声も。注文はタッチパネル。12時を過ぎると行列ができるので早めか遅めに。カード、QR可。',
  });
}

save();
