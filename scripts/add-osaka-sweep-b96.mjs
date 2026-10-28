// Osaka sweep (2-mile circle around Dotonbori), batch 96 — ramen phase (all OMNI).
//   + 中華そば 福笑門 (machi-chuka-style shoyu ramen with sets, free extra sprouts at lunch; Uehommachi)
//   + 麺屋 ラパス (ramen-meets-pasta: clam and chicken paitan on flat noodles; Sakaisuji-Honmachi)
//   + 町田商店 本町店 (Yokohama iekei chain, free rice until 18:00; open to midnight; Honmachi)
//   + BUTAKIN 上本町店 (beginner-friendly Jiro-style, 250–500 g, garlic mayo; Uehommachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 96);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華そば 福笑門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27092559/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_chuka_soba_fukuemon_uehommachi', name: '中華そば 福笑門 (Chuka Soba Fukuemon)', category: 'OMNI',
    lat: 34.667256, lng: 135.519648, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broth, back fat, chashu.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–22:00; closed Sundays; hours may change (Tabelog). Cards (JCB, AMEX, Diners), e-money and QR accepted (Tabelog). Register as a LINE friend for a free soft-boiled egg (August 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uehonmachi 5-7-18, 1F (Tennoji-ku) — 1 min from Osaka-Uehommachi Stn exit 11',
    cuisine: 'Shoyu chuka soba: chicken and seafood broth with a strong soy edge, medium-thin straight low-hydration noodles, three slices of chashu, menma, bean sprouts, green onion · free extra sprouts and onion at lunch · extra back-fat "gokuuma" shoyu · Fukuemon special, large ¥1,200 · shoyu ramen and gyoza set ¥1,200 · small fried rice set · dry tantanmen · tsukemen · beer set with chashu, kara-age, zaru soba · grated garlic on the table · 10 counter seats, a table',
    website: null, gmaps: gm('中華そば 福笑門 上本町'), menu_url: null,
    notes: "[Ramen · a homey shoyu chuka soba with sets by Uehommachi] A red-neon, graffiti-windowed ramen shop a minute from Osaka-Uehommachi, open since 2016, with the broad menu and sets of a neighborhood Chinese diner and a loyal crowd of regulars. The shoyu chuka soba is a chicken-and-seafood broth with a strong, nostalgic soy edge, gentle rather than salty, on medium-thin low-hydration noodles with three slices of chashu, menma, sprouts and green onion; at lunch, extra sprouts and onion are free. For more richness there's a back-fat version. Sets add gyoza or a small soy-dark fried rice (¥1,200 with gyoza), and evenings bring a beer set with fatty chashu. Grated garlic is on the table. Service is attentive. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 June 2016 (Tabelog)', background: 'Ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shoyu chuka soba with sets.',
      anecdotes: [
        { text: '"The chicken and seafood broth had a gentle flavor, not overly salty, and was accompanied by three slices of chashu, plenty of menma, bean sprouts, and green onions. The noodles were low-hydration, with a nice chewy texture." — October 2026, shoyu ramen with small fried rice.', source: R + 'B516923771/' },
        { text: '"The broth had a strong soy sauce flavor, reminiscent of chicken and pork-based soups you might find in Kyoto, which felt nostalgic to me. The noodles were medium-thin and straight." — September 2026, shoyu ramen and gyoza set.', source: R + 'B202608061/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば 福笑門、大阪市天王寺区上本町5-7-18 西川ビル1F、大阪上本町駅11番出口から徒歩1分、谷町九丁目駅8番出口から徒歩2分、月〜土11:00〜15:00・17:00〜22:00、日曜定休、カード(JCB、AMEX、Diners)・電子マネー・QR可、15席(カウンター10、テーブル1)、半個室、禁煙、電源あり、2016年6月11日開店。口コミ(2026年2〜10月): 赤いネオン、落書きの窓、卓上に調味料、町中華のようなメニュー、醤油ラーメンと餃子セット1,200円、ねぎと麺の硬さを聞かれる、京都のような鶏ガラと豚の醤油、中細ストレート麺、チャーシュー・メンマ・ねぎ、薄皮の餃子、常連が多い、ビールセット、小唐揚げ、ざるそば、柚子チューハイ、脂の多いチャーシュー、半チャーハンセット、もやしとねぎ増し、鶏と魚介のやさしいスープ、チャーシュー3枚、低加水麺、醤油の香ばしいチャーハン、汁なし担々麺と焼き餃子のセット、昼はもやしとねぎの増量無料、福笑門大盛り全部のせ1,200円、丁寧な接客、瓶のサッポロラガー、背脂増しの醤油、LINE友だちで味玉、卓上におろしにんにく、極旨背脂ラーメン、細麺。',
      confidence: 'medium', sources: [TB, R + 'B516923771/', R + 'B202608061/', R + 'B345382138/', R + 'B523027125/', R + 'B533953336/', R + 'B535315642/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: 'low', handmade: false, notes: 'Medium-thin straight low-hydration noodles, chewy (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen, set with gyoza ¥1,200 (2026).',
      chashu: 'Three slices of thin pork belly, fatty (August–October 2026).',
      notable_toppings: ['bean sprouts (free extra at lunch)', 'green onion', 'menma', 'grated garlic (table)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Uehommachi\'s nostalgic shoyu chuka soba, best as a set with gyoza or fried rice.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B523027125/', '"It\'s rich and delicious" — mid-scale.'],
        oiliness: [R + 'B535315642/', 'Back-fat version "wasn\'t overly rich" — mid-scale.'],
        clarity: [R + 'B516923771/', '"A gentle flavor" shoyu — mid-scale.'],
        tare_strength: [R + 'B202608061/', '"The broth had a strong soy sauce flavor" — placed high.'],
        noodle_firmness: [R + 'B516923771/', '"Low-hydration, with a nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B533953336/', 'Grated garlic on the table for "an extra punch" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B516923771/', R + 'B202608061/', R + 'B523027125/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Attentive service (September–October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町5-7-18 西川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上本町五丁目7番18号 (go) 1m; OSM 福笑門 node/6298644088 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523027125/', R + 'B533953336/', R + 'B516923771/'],
    price_note: 'Prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen and gyoza set', '¥1,200', 'Sets', 'no', 'no', 'February 2026.', 'gyoza_set'),
      it('', '', 'Fukuemon special, large', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Extra back-fat shoyu with small fried rice', '¥1,150', 'Sets', 'no', 'no', 'Double sprouts and onion; August 2026.', 'seabura_set'),
      it('', '', 'Dry tantanmen', '', 'Noodles', 'no', 'no', 'June 2026.', 'shirunashi'),
    ] }, {
    cuisine: '醤油の中華そば: 鶏と魚介のスープに醤油がしっかり、中細ストレートの低加水麺、チャーシュー3枚、メンマ、もやし、ねぎ・昼はもやしとねぎの増量無料・背脂の極旨醤油・福笑門大盛り全部のせ1,200円・醤油ラーメンと餃子のセット1,200円・半チャーハンのセット・汁なし担々麺・つけ麺・チャーシューのビールセット、唐揚げ、ざるそば・卓上におろしにんにく・カウンター10席とテーブル',
    neighborhood: '天王寺区上本町5-7-18 1F。大阪上本町駅11番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子とチャーハン。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚介のスープ、背脂、チャーシュー。',
    notes: '[ラーメン・上本町、セットが充実したアットホームな醤油中華そば] 大阪上本町から1分、赤いネオンと落書きの窓のラーメン店で、2016年開店、町中華のような幅広いメニューとセット、常連が多い。醤油の中華そばは鶏と魚介のスープに懐かしいしっかりした醤油、塩辛くはなくやさしく、中細の低加水麺にチャーシュー3枚、メンマ、もやし、ねぎ。昼はもやしとねぎの増量が無料。こってりなら背脂の一杯も。セットは餃子か、醤油色の半チャーハン(餃子セットは1,200円)、夜は脂ののったチャーシューのビールセットも。卓上におろしにんにく。接客は丁寧。日曜定休。',
  });
}

// ================================================================ 麺屋 ラパス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27143280/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '21:00']), WE = day(['11:30', '15:00'], ['18:00', '20:30']);
  put({
    id: 'osaka_menya_rapasu_minamihonmachi', name: '麺屋 ラパス (Menya Rapasu)', category: 'OMNI',
    lat: 34.682308, lng: 135.504912, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: flat wheat noodles of pasta flour.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam dashi and chicken paitan, chashu, chicken.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 18:00–21:00; Sat–Sun 11:30–15:00 and 18:00–20:30; hours may change (Tabelog). QR ordering at the table. Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamihonmachi 2-3-11 — about 2 min from Sakaisuji-Hommachi Stn',
    cuisine: 'Ramen-meets-pasta ("Rapasu") · Asari Rapasu ¥1,230: clam dashi and chicken paitan on flat, wide, chewy noodles, with chashu, chicken, clams, yuzu and lemon · deluxe or SP Asari Rapasu ¥1,580 with seasoned egg · original ramen: creamy chicken paitan with spinach, minced onion, nori and rare chashu · Chicken Junkie · tsukemen · seasoned egg ¥130 · tomato-cheese rice to finish (LINE perk)',
    website: null, gmaps: gm('麺屋 ラパス 南本町'), menu_url: null,
    notes: "[Ramen · clam paitan \"Rapasu\", ramen meets pasta, by Sakaisuji-Honmachi] A stylish little shop near Sakaisuji-Honmachi, open since 2024 and popular on social media, that crosses ramen with pasta. The Asari Rapasu (¥1,230; the SP version ¥1,580) is a mild, Western-leaning broth of clam dashi and chicken paitan on flat, wide, chewy noodles, with chashu, tender chicken, clams, yuzu and a squeeze of lemon; diners compare it to a Western-style mazesoba. The original ramen is a creamy but light chicken paitan with spinach, minced onion and rare chashu. Finish with tomato-cheese rice. One diner found the concept more fun than memorable. Order by QR code; the owner and staff are friendly and happy to explain the menu.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 July 2024 (Tabelog)', background: 'Ramen-and-pasta fusion shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Asari Rapasu (clam paitan).',
      anecdotes: [
        { text: '"The noodles are flat, wide, and made from wheat flour intended for pasta, giving them a wonderfully chewy texture. The broth is a mild blend of clam dashi and chicken paitan." — October 2026, SP Asari Rapasu ¥1,580.', source: R + 'B503461302/' },
        { text: '"The broth is packed with the rich flavor of clams, and the noodles have a delightful pasta-like texture!… I also enjoyed the tomato cheese rice to finish off the meal." — October 2026, Asari Rapasu ¥1,230.', source: R + 'B537534327/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 ラパス、大阪市中央区南本町2-3-11、堺筋本町駅から143m、月〜金11:30〜15:00・18:00〜21:00、土日11:30〜15:00・18:00〜20:30、カード・電子マネー・QR可、2024年7月8日開店。口コミ(2025年3月〜2026年10月): ラーメンとパスタの融合、QRで注文、SPあさりラパス1,580円、パスタ用小麦の平打ち幅広麺、あさりだしと鶏白湯、洋風まぜそばのよう、チャーシュー・鶏・あさり・味玉・柚子・ねぎ、DXチキンジャンキー、SNSで話題、印象に残らなかったという声、あさりラパス並1,230円、味玉130円、LINE特典のトマトチーズご飯、おしゃれな店、店主が感じよい、作品のような器、レモン、鶏チャーシュー、スタッフが説明してくれる、元祖ラーメン(鶏白湯、ほうれん草、玉ねぎ、海苔3枚、レアチャーシュー)、濃厚でクリーミーだが軽い、つけ麺、DXあさりラパス、柚子。',
      confidence: 'medium', sources: [TB, R + 'B503461302/', R + 'B537534327/', R + 'B537457902/', R + 'B537548717/', R + 'B538104316/', R + 'B538160556/'] },
    ramen: {
      broth_base: ['shellfish', 'chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Flat, wide, chewy noodles of pasta flour (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Asari Rapasu, ¥1,230 (October 2026).',
      chashu: 'Pork chashu and tender chicken chashu (October 2026).',
      notable_toppings: ['clams', 'yuzu', 'lemon', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and chicken broth.' },
      pantheon: 'Sakaisuji-Honmachi\'s ramen-pasta hybrid: clam paitan on flat, wide pasta-flour noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538160556/', '"Rich yet leaving a clean aftertaste" — mid-scale.'],
        oiliness: [R + 'B538104316/', '"Rich and creamy, yet surprisingly light" — placed low.'],
        clarity: [R + 'B538104316/', '"Beige chicken paitan broth" — placed low.'],
        tare_strength: [R + 'B503461302/', '"A mild blend of clam dashi and chicken paitan" — mid-scale.'],
        noodle_firmness: [R + 'B503461302/', '"A wonderfully chewy texture."'],
        aroma_punch: [R + 'B538160556/', '"The yuzu on top added a refreshing touch" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B503461302/', R + 'B538104316/', R + 'B538160556/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; staff explain the menu (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町2-3-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町二丁目3番11号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537534327/', R + 'B503461302/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Asari Rapasu', '¥1,230', 'Ramen', 'no', 'no', 'October 2026.', 'asari'),
      it('', '', 'SP Asari Rapasu', '¥1,580', 'Ramen', 'no', 'no', 'October 2026.', 'asari_sp'),
      it('', '', 'Original ramen (chicken paitan)', '', 'Ramen', 'no', 'no', 'October 2026.', 'ganso'),
      it('', '', 'Seasoned egg', '¥130', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: 'ラーメンとパスタの融合「ラパス」・あさりラパス1,230円: あさりだしと鶏白湯に平打ちの幅広もちもち麺、チャーシュー、鶏、あさり、柚子、レモン・味玉付きのDXやSPあさりラパス1,580円・元祖ラーメン: ほうれん草、刻み玉ねぎ、海苔、レアチャーシューのクリーミーな鶏白湯・チキンジャンキー・つけ麺・味玉130円・締めのトマトチーズご飯(LINE特典)',
    neighborhood: '中央区南本町2-3-11。堺筋本町駅から徒歩2分ほど',
    gf_detail: 'グルテンフリーではありません。パスタ用小麦の平打ち麺。',
    vegan_detail: 'ヴィーガンではありません。あさりだしと鶏白湯、チャーシュー、鶏肉。',
    notes: '[ラーメン・堺筋本町、あさり白湯の「ラパス」、ラーメン×パスタ] 堺筋本町近くのおしゃれな小さな店で、2024年開店、SNSで話題、ラーメンとパスタを掛け合わせる。あさりラパス(1,230円、SPは1,580円)は、あさりだしと鶏白湯の洋風寄りのまろやかなスープに平打ちの幅広もちもち麺、チャーシュー、柔らかい鶏、あさり、柚子、レモンをひと搾り。洋風のまぜそばのようという声。元祖ラーメンはクリーミーなのに軽い鶏白湯に、ほうれん草、刻み玉ねぎ、レアチャーシュー。締めはトマトチーズご飯で。発想は面白いが印象に残らなかったという声も。注文はQRコード、店主もスタッフも気さくでメニューを説明してくれる。',
  });
}

// ================================================================ 町田商店 本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27134369/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://shop.machidashoten.com/japan/detail/132005/';
  put({
    id: 'osaka_machida_shoten_honmachi', name: '町田商店 本町店 (Machida Shoten Honmachi)', category: 'OMNI',
    lat: 34.682598, lng: 135.501653, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Daily 11:00–24:00 (Tabelog, staff-maintained; October 2026). Ticket machine. Transit IC cards accepted; no credit cards or QR (Tabelog). Free rice until 18:00 (October 2026); app members get free toppings.',
    hours: ALL(day(['11:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamihonmachi 3-3-17, 1F — 1 min from Honmachi Stn exit 9',
    cuisine: 'Yokohama iekei chain shop · ramen ¥880: thick tonkotsu-shoyu with spinach, nori and chashu, thick noodles · set firmness, richness and fat · ajitama ramen, negi chashu ramen, shio tonkotsu · free rice until 18:00 with Kyuchan pickles · free onion, pickled ginger and more on the counter · app Gold members get free toppings · 16 counter seats',
    website: OWN, gmaps: gm('町田商店 本町店'), menu_url: null,
    notes: "[Ramen · a reliable Yokohama iekei chain bowl by Honmachi, to midnight] The Honmachi shop of the Machida Shoten iekei chain, a minute from Honmachi exit 9, open since 2023 and lined up at lunch. The ramen (¥880) is a punchy tonkotsu-shoyu with thick noodles, spinach, nori and chashu; set your firmness, richness and fat when you order, and note the regular is salty for some. The value draw: rice is free until 18:00, and one regular dips the nori in the soup and wraps the rice with the counter's pickles, onions and ginger. App members at Gold rank get toppings free. Consistent rather than surprising, which one regular sees as the point. Open daily until midnight; transit IC cards only, no credit cards.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 January 2023 (Tabelog)', background: 'Branch of the Machida Shoten iekei ramen chain (official shop page; Tabelog, staff-maintained).', philosophy: null, specialty: 'Iekei tonkotsu-shoyu ramen.',
      anecdotes: [
        { text: '"A punchy, flavorful Iekei ramen with a firm texture and rich taste! The thick pork bone soy sauce broth is best enjoyed by dipping the nori into it and eating it with rice." — October 2026, ramen ¥880 with free rice.', source: R + 'B512060494/' },
        { text: '"The pickles served with rice, along with the onions and ginger in the ramen, are truly abundant and incredibly delicious! It\'s no surprise that there\'s always a line during lunch." — September 2026.', source: R + 'B512902969/' },
      ],
      japanese_sources_summary: '公式 shop.machidashoten.com。食べログ(店舗会員): 町田商店 本町店、大阪市中央区南本町3-3-17、本町駅9番出口から徒歩1分、毎日11:00〜24:00、交通系ICのみ可、カード・QR不可、カウンター16席、禁煙、2023年1月29日開店。口コミ(2026年3〜10月): 家系ラーメン(並)880円、硬め・濃いめ・麺少なめ、18時までライス無料、ゴールド特典の海苔、豚骨醤油に海苔を浸してご飯、変わらない味、ご飯にキューちゃん漬け、玉ねぎと生姜がたっぷり、昼はいつも行列、チェーンの良さ、ランチセット880円、味玉ラーメン、玉ねぎと紅しょうが、普通でも少ししょっぱい、塩豚骨、ネギチャーシュー麺、アプリのゴールドでトッピング無料、チャーシューが薄くなった気がする、マイルドで油少なめ、太麺、ほうれん草、海苔。',
      confidence: 'medium', sources: [TB, OWN, R + 'B512060494/', R + 'B512902969/', R + 'B536318322/', R + 'B537345825/', R + 'B537482756/', R + 'B538106991/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick iekei noodles; firmness to order (October 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Ramen, regular, ¥880 (October 2026).',
      chashu: 'Chashu, a little thinner than before to one regular (September 2026).',
      notable_toppings: ['spinach', 'nori', 'free onion and pickled ginger', 'Kyuchan pickles'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Honmachi\'s late-night iekei: thick tonkotsu-shoyu and free rice until 18:00.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538106991/', '"The rich and flavorful tonkotsu soy sauce broth" — placed high.'],
        oiliness: [R + 'B537345825/', '"The amount of oil is minimal" (set lighter) — mid-scale.'],
        clarity: [R + 'B512060494/', '"The thick pork bone soy sauce broth" — placed low.'],
        tare_strength: [R + 'B536318322/', '"Even the regular was a bit salty" — placed high.'],
        noodle_firmness: [R + 'B512060494/', 'Ordered "firm"; "a firm texture" — placed high.'],
        aroma_punch: [R + 'B512902969/', 'Onions and ginger "truly abundant" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B512060494/', R + 'B536318322/', R + 'B538106991/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; chain app perks; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町3-3-17 丸松ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026. Same building as Menya Buttoku Ikero (B1F).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町三丁目3番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512060494/', R + 'B512902969/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (regular)', '¥880', 'Ramen', 'no', 'no', 'Free rice until 18:00; October 2026.', 'ramen'),
      it('', '', 'Ajitama ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Negi chashu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'negi_chashu'),
      it('', '', 'Shio tonkotsu', '', 'Ramen', 'no', 'no', 'September 2026.', 'shio'),
    ] }, {
    cuisine: '横浜家系のチェーン店・ラーメン880円: 太麺に濃い豚骨醤油、ほうれん草、海苔、チャーシュー・硬さ、濃さ、脂を選べる・味玉ラーメン、ネギチャーシュー麺、塩豚骨・18時までライス無料、キューちゃん漬けと・カウンターに無料の玉ねぎや紅しょうが・アプリのゴールド会員はトッピング無料・カウンター16席',
    neighborhood: '中央区南本町3-3-17 丸松ビル1F。本町駅9番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・本町、深夜まで営業の安定の横浜家系チェーン] 家系チェーン町田商店の本町店で、本町駅9番出口から1分、2023年開店、昼は行列。ラーメン(880円)は太麺にパンチのある豚骨醤油、ほうれん草、海苔、チャーシュー。注文時に硬さ、濃さ、脂を選べ、普通でもしょっぱく感じる人も。お得なのは18時までのライス無料で、海苔をスープに浸し、カウンターの漬物、玉ねぎ、生姜とご飯を巻くという常連も。アプリのゴールド会員はトッピング無料。驚きより安定、それが良さという常連の声。毎日深夜0時まで、交通系ICのみ、クレジットカード不可。',
  });
}

// ================================================================ BUTAKIN 上本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27147355/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_butakin_uehommachi', name: 'BUTAKIN 上本町店 (BUTAKIN Uehommachi)', category: 'OMNI',
    lat: 34.666646, lng: 135.517987, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-forward broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, thick pork.',
    hours_raw: 'Daily 11:00–21:30 (Tabelog, staff-maintained). Ticket machine at the entrance; call garlic, vegetables and fat when you hand it over. Cards (VISA, Master, Diners) and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '2 min from Osaka-Uehommachi Stn (東平 2-5-5, 1F)',
    cuisine: 'Jiro-style ramen · small 250 g ¥1,100, large 375 g ¥1,200, extra-large 500 g · call garlic, vegetables and fat · thick chewy noodles, soy-forward pork broth, thick pork, bean sprouts and cabbage · garlic mayo +¥100 · spicy fried garlic · back-fat rice bowl · 18 counter seats, 3 tables for two',
    website: null, gmaps: gm('BUTAKIN 上本町'), menu_url: null,
    notes: "[Ramen · a beginner-friendly Jiro-style bowl by Uehommachi] A Jiro-style shop two minutes from Osaka-Uehommachi, open since February 2025, with a relaxed atmosphere that diners call easy for first-timers. Sizes start big: the small is 250 g of thick, chewy, wheaty noodles (¥1,100), the large 375 g (¥1,200), the extra-large 500 g. Buy a ticket, then call your garlic, vegetables and fat; vegetables run a bit light by Jiro standards unless you ask for more. The broth leans soy over pork, with a touch of sweetness, under thick pork, bean sprouts and cabbage. Garlic mayo (+¥100) and spicy fried garlic push it further into junk-food territory, and the back-fat rice bowl is a guilty side. One diner could not add garlic on a daytime visit. Busy at lunch; open daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 February 2025 (Tabelog)', background: 'Jiro-style ramen shop (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Jiro-style ramen with garlic mayo.',
      anecdotes: [
        { text: '"Despite being called \'small,\' the Small Ramen boasts an impressive 250g of noodles… The thick, chewy noodles have a robust wheat flavor that pairs perfectly with the rich broth." — October 2026.', source: R + 'B538039457/' },
        { text: '"The seasoning is still stronger on the soy sauce side than the pork bone flavor. It pairs well with the chewy noodles. I\'ve recently been hooked on the spicy fried garlic." — October 2026.', source: R + 'B514229567/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): BUTAKIN 上本町店、大阪市中央区東平2-5-5 盛川ビル 1F、上本町駅から徒歩2分、毎日11:00〜21:30、カード(VISA、Master、Diners)・PayPay可、電子マネー不可、24席(カウンター18、2人掛けテーブル3)、禁煙、2025年2月16日開店。口コミ(2026年10月): 二郎系、食券でヤサイ・ニンニク・アブラを選ぶ、昼はニンニクを入れられなかったという声、野菜は少なめ、醤油の甘みが増した、豚骨より醤油寄り、もちもちの麺、辛いフライドガーリック、にんにくマヨ、濃厚なたれ、小・大・特大、入口の券売機、カウンターとテーブル、大ラーメン375g 1,200円、小250g、特大500g、初心者にもやさしい雰囲気、昼のピークを外すのがおすすめ、背脂丼、太くもちもちで小麦の香る麺、小ラーメン1,100円、にんにくマヨ+100円、厚い豚、もやしとキャベツ。',
      confidence: 'medium', sources: [TB, R + 'B538039457/', R + 'B514229567/', R + 'B536959573/', R + 'B537003314/', R + 'B537708972/', R + 'B538070855/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy, wheaty noodles; 250–500 g (October 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei'],
      signature_bowl: 'Small ramen, 250 g, ¥1,100 (October 2026).',
      chashu: 'Thick pork (October 2026).',
      notable_toppings: ['bean sprouts', 'cabbage', 'garlic', 'back fat', 'garlic mayo', 'spicy fried garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth and back fat.' },
      pantheon: 'Uehommachi\'s friendly Jiro: soy-forward pork broth, thick noodles and garlic mayo.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B538039457/', '"The rich broth" with "a lightness" — placed high.'],
        oiliness: [R + 'B536959573/', '"Despite its heaviness" with garlic mayo — placed high.'],
        clarity: [R + 'B536959573/', '"The rich, thick sauce" — placed low.'],
        tare_strength: [R + 'B514229567/', '"Stronger on the soy sauce side than the pork bone" — placed high.'],
        noodle_firmness: [R + 'B538039457/', '"The thick, chewy noodles have a robust wheat flavor."'],
        aroma_punch: [R + 'B538070855/', 'Extra garlic plus garlic mayo — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B538039457/', R + 'B514229567/', R + 'B538070855/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed for Jiro-style first-timers (October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東平2-5-5 盛川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東平二丁目5番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537708972/', R + 'B538070855/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Small ramen (250 g)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'sho'),
      it('', '', 'Large ramen (375 g)', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'dai'),
      it('', '', 'Extra-large ramen (500 g)', '', 'Ramen', 'no', 'no', 'October 2026.', 'tokudai'),
      it('', '', 'Garlic mayo topping', '+¥100', 'Toppings', 'no', 'no', 'October 2026.', 'ninniku_mayo'),
      it('', '', 'Back-fat rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'abura_don'),
    ] }, {
    cuisine: '二郎系ラーメン・小250g 1,100円、大375g 1,200円、特大500g・ニンニク、ヤサイ、アブラをコール・もちもちの太麺、醤油寄りの豚のスープ、厚い豚、もやしとキャベツ・にんにくマヨ+100円・辛いフライドガーリック・背脂丼・カウンター18席、2人掛けテーブル3卓',
    neighborhood: '中央区東平2-5-5 1F。大阪上本町駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油寄りのスープ。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、厚い豚。',
    notes: '[ラーメン・上本町、初心者にもやさしい二郎系] 大阪上本町から2分の二郎系の店で、2025年2月開店、ピリピリした空気が少なく初めてでも入りやすいという声。量は多めからで、小でも小麦の香るもちもちの太麺が250g(1,100円)、大は375g(1,200円)、特大は500g。食券を買ってニンニク、ヤサイ、アブラをコール。野菜は二郎系としては少なめなので増しても。スープは豚より醤油寄りでほんのり甘く、厚い豚、もやし、キャベツ。にんにくマヨ(+100円)や辛いフライドガーリックでさらにジャンクに、背脂丼も背徳のサイド。昼はニンニクを入れられなかったという声も。昼は混む、無休。',
  });
}

save();
