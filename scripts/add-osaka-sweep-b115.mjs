// Osaka sweep (2-mile circle around Dotonbori), batch 115 — ramen phase (all OMNI).
//   + まぜそば 寿寿寿 (seafood mazesoba under Shin-Imamiya Station by the Nankai gates; open 11:00–23:00)
//   + 鶏soba 鶏と麺 (parent-chicken shoyu tori soba with yuzu, RED and BLACK versions, to 02:00; Taisho 2F)
//   + 中華そば ニューまるちゃん (weekday-lunch chuka soba with ¥250 unlimited rice, mentaiko and eggs; Doshomachi 2F)
//   + 八仙楼 (late-night tonkotsu: Tenryu ramen, shio tonkotsu, back-fat ramen, to midnight; Shin-Imamiya)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 115);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ まぜそば 寿寿寿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27132573/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mazesoba_jujuju_shin_imamiya', name: 'まぜそば 寿寿寿 (Maze-soba Jujuju)', category: 'OMNI',
    lat: 34.650043, lng: 135.500439, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based mazesoba sauce; kara-age; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood sauce; chashu; egg; fish powder.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Ticket machine; rice with the mazesoba is an option you must select (default is without) (October 2026). One diner found the machine slow to take cash (July 2026). Cards (VISA, Master), IC cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Haginochaya 1-2-24 (Nishinari-ku), under Shin-Imamiya Station in front of the Nankai ticket gates — 34 m from Shin-Imamiya',
    cuisine: 'Mazesoba and chuka ramen at the station · seafood mazesoba ¥900, large +¥100: pork-bone and seafood-stock sauce on the sweet side, chewy noodles, soft-boiled egg, menma, diced chashu, fish powder, green onion; rice to finish if you select it · noodles described as "Jumian" from a long-established Shin-Imamiya noodle maker · Taiwanese mazesoba · chuka ramen: nostalgic shoyu with chashu, menma, green onion, nori · kara-age, gyoza, rice · kombu vinegar, chili oil and shichimi on the table · counter and tables',
    website: null, gmaps: gm('まぜそば 寿寿寿 新今宮'), menu_url: null,
    notes: "[Ramen · seafood mazesoba right by the Nankai gates at Shin-Imamiya] A new, clean noodle shop under Shin-Imamiya Station, steps from the Nankai ticket gates and open 11:00 to 23:00, so it's an easy stop before or after a train. The seafood mazesoba (¥900) mixes chewy noodles with a slightly sweet pork-bone and seafood sauce, egg, diced chashu and fish powder; select rice on the machine if you want to finish the sauce with it, and change it up with the table's kombu vinegar or chili oil. One diner wanted more seafood flavor. The chuka ramen is a nostalgic shoyu, easy to share with a child; staff brought a family separate plates and cups. Kara-age and gyoza fill out the menu. Reviews are mixed: one diner found it mediocre and the machine fussy with cash. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 October 2022 (Tabelog)', background: 'Mazesoba shop at Shin-Imamiya Station (Tabelog; 2026 reviews).', philosophy: '"Jumian," noodles from a long-established Shin-Imamiya maker, once made only for celebrations (as described by a July 2026 diner).', specialty: 'Seafood mazesoba.',
      anecdotes: [
        { text: '"The regular size is JPY 900, and the large size is an additional JPY 100. It came with a boiled egg, menma (bamboo shoots), diced chashu (braised pork), fish powder, and green onions… The noodles were chewy." — October 2026, seafood mazesoba.', source: R + 'B536673125/' },
        { text: '"The ramen had a nostalgic feel with its soy sauce base, topped with chashu, menma, green onions, and nori—a simple yet satisfying bowl." — July 2026, chuka ramen.', source: R + 'B533946910/' },
      ],
      japanese_sources_summary: '食べログ: まぜそば 寿寿寿、大阪市西成区萩之茶屋1-2-24、新今宮から34m、毎日11:00〜23:00、カード(VISA、Master)・交通系IC・電子マネー・QR可、2022年10月25日開店。口コミ(2026年7〜10月): 券売機に現金を入れにくかったという声、味は普通という声、締めのご飯が黄ばんでいたという声、駅近、ご飯のサービス、南海新今宮駅の改札すぐ、中華ラーメンは懐かしい醤油味(チャーシュー、メンマ、ねぎ、海苔)、子ども用の取り皿とコップ、カウンターとテーブル、人気は豚骨と魚介の魚介まぜそば、新今宮の老舗製麺所の祝いの席用だった麺「Jumian」という声、唐揚げ、餃子、台湾まぜそば、魚介出汁まぜそば並900円・大盛り+100円、ゆで卵、メンマ、角切りチャーシュー、魚粉、ねぎ、もちもちの麺、魚介感がもう少し欲しい、卓上にラー油と七味、新しくきれいな店内、券売機、ご飯の有無を選ぶ(初期設定はなし)、甘めのたれ、麺の量が多い、昆布酢とラー油で味変。',
      confidence: 'medium', sources: [TB, R + 'B532754462/', R + 'B533802075/', R + 'B533946910/', R + 'B536067187/', R + 'B536673125/', R + 'B537576871/'] },
    ramen: {
      broth_base: ['pork', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Chewy noodles, a generous portion (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Seafood mazesoba, ¥900 (October 2026).',
      chashu: 'Diced chashu in the mazesoba; sliced in the chuka ramen (2026).',
      notable_toppings: ['fish powder', 'soft-boiled egg', 'kombu vinegar', 'chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood sauce.' },
      pantheon: 'Shin-Imamiya\'s station-gate seafood mazesoba, open until 11 pm.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537576871/', 'Sauce "on the sweeter side" — mid-scale.'],
        oiliness: [R + 'B536673125/', 'No diner remark on oil — mid-scale.'],
        clarity: [R + 'B536673125/', 'Brothless mazesoba — bottom of scale.'],
        tare_strength: [R + 'B537576871/', '"The sauce was on the sweeter side" — mid-scale.'],
        noodle_firmness: [R + 'B536673125/', '"The noodles were chewy" — placed high.'],
        aroma_punch: [R + 'B536673125/', '"I wished for a bit more seafood flavor" — placed low.'],
      },
      confidence: 'low', sources: [R + 'B536673125/', R + 'B537576871/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cards and QR; family-friendly with separate plates for a child (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西成区萩之茶屋1-2-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西成区萩之茶屋一丁目2番24号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536673125/', R + 'B533946910/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seafood mazesoba', '¥900', 'Mazesoba', 'no', 'no', 'October 2026; large +¥100.', 'gyokai_maze'),
      it('', '', 'Taiwanese mazesoba', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'taiwan'),
      it('', '', 'Chuka ramen (shoyu)', '', 'Ramen', 'no', 'no', 'July 2026.', 'chuka'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'October 2026.', 'karaage'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '駅のまぜそばと中華ラーメン・魚介まぜそば900円、大盛り+100円: 甘めの豚骨と魚介出汁のたれ、もちもちの麺、ゆで卵、メンマ、角切りチャーシュー、魚粉、ねぎ、ご飯は選べば締めに・新今宮の老舗製麺所の「Jumian」という麺・台湾まぜそば・中華ラーメン: チャーシュー、メンマ、ねぎ、海苔の懐かしい醤油・唐揚げ、餃子、ご飯・卓上に昆布酢、ラー油、七味・カウンターとテーブル',
    neighborhood: '西成区萩之茶屋1-2-24、新今宮駅の下、南海の改札前。新今宮から34m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのまぜそばのたれ、唐揚げ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のたれ、チャーシュー、卵、魚粉。',
    notes: '[ラーメン・新今宮、南海の改札すぐの魚介まぜそば] 新今宮駅の下、南海の改札から数歩の新しくきれいな麺の店で、11時〜23時営業、電車の前後に立ち寄りやすい。魚介まぜそば(900円)はもちもちの麺にほんのり甘い豚骨と魚介のたれ、卵、角切りチャーシュー、魚粉を混ぜて。たれをご飯で締めたいなら券売機でご飯を選んで、途中で卓上の昆布酢やラー油で味変を。魚介感がもう少し欲しいという声も。中華ラーメンは懐かしい醤油味で、子どもとも分けやすく、家族連れに取り皿とコップを出してくれたという声。唐揚げや餃子も。評価は分かれ、味は普通、券売機の現金が面倒という声も。カード、QR可。',
  });
}

// ================================================================ 鶏soba 鶏と麺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27137633/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tori_soba_tori_to_men_taisho', name: '鶏soba 鶏と麺 (Tori Soba Tori to Men)', category: 'OMNI',
    lat: 34.664553, lng: 135.478339, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: egg-rich wheat noodles; Kochi and Osaka soy-sauce tare; cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: parent-chicken broth; chicken chashu; egg noodles.',
    hours_raw: 'Daily 11:00–14:00 and 17:00–02:00; closing days vary (Tabelog). Lines after Kyocera Dome games; limited chicken paitan often sold out (2025–2026). Self-service water. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '14:00'], ['17:00', '02:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sangenya-higashi 1-18-9, 2F (Taisho-ku) — 193 m from Taisho Stn, toward Kyocera Dome',
    cuisine: 'Parent-chicken shoyu tori soba · tori soba normal ¥900: soy broth of long-simmered parent-hen bones with Kochi and Osaka soy, served piping hot, yuzu, medium-thin straight egg-rich noodles, chicken chashu, crunchy shredded chicken · tori soba RED ¥950 (+¥50 extra spicy) · tori soba BLACK ¥950 with garlic and black pepper · special yuzu shio tori ramen ¥1,100 · tori mazesoba ¥1,100 with plenty of garlic · limited chicken paitan · summer Korean-style cold noodles ¥1,000 · mini chashu rice bowl, large ¥550 · chicken chazuke set ¥550 · bottled Akaboshi and Asahi ¥660',
    website: null, gmaps: gm('鶏soba 鶏と麺 大正'), menu_url: null,
    notes: "[Ramen · parent-chicken shoyu tori soba until 2 am, near Kyocera Dome] A second-floor chicken-ramen counter between Taisho Station and Kyocera Dome, open since 2023 and open until 2 am, so baseball crowds line the stairs after games. One diner traced the style to the nabeyaki ramen of Susaki in Kochi. The tori soba (¥900) is a piping-hot soy broth of long-simmered parent-hen bones with Kochi and Osaka soy and a bright hit of yuzu, on medium-thin straight egg noodles; one diner found the yuzu overpowering. The BLACK version packs garlic and black pepper; RED brings heat; the yuzu shio and a garlicky tori mazesoba fill out the menu. Finish with a chicken chazuke (¥550) or a mini chashu bowl. The limited chicken paitan often sells out. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 August 2023 (Tabelog)', background: 'Chicken ramen shop; Susaki (Kochi) nabeyaki-ramen style, per a June 2026 diner.', philosophy: 'Broth of parent-chicken bones simmered a long time; tare of Kochi and Osaka soy; served piping hot (June 2026 review).', specialty: 'Tori soba.',
      anecdotes: [
        { text: '"The broth is a soy sauce base made by simmering chicken bones from parent chickens for a long time. It uses soy sauce from both Kochi and Osaka for the tare, and it is served piping hot." — June 2026, tori soba normal.', source: R + 'B530760098/' },
        { text: '"I ordered the Chicken Soba Black for JPY 950… The garlic and black pepper really packed a punch, and the garlic flavor was delicious. It definitely got richer as I continued eating." — July 2025.', source: R + 'B500840063/' },
      ],
      japanese_sources_summary: '食べログ: 鶏soba 鶏と麺、大阪市大正区三軒家東1-18-9 2F、大正から193m、毎日11:00〜14:00・17:00〜翌2:00、不定休、カード・電子マネー・QR不可、2023年8月4日開店。口コミ(2025年7月〜2026年9月): 特製柚子塩鶏ラーメン1,100円、鶏そばRED 950円(辛さ+50円)、鶏まぜそば1,100円、ミニチャーシュー丼大550円、赤星660円、にんにくたっぷりのまぜそば、ほぐした鶏チャーシュー、階段に6人待ち、京セラドームの試合後、限定の鶏白湯は売り切れ、鶏そばBLACK 950円(にんにくと黒胡椒)、鶏そば普通900円、鶏茶漬けのDセット550円、あっさりで食べやすいスープ、鶏ガラ、柚子、卵の多い黄色い麺、水はセルフ、高知県須崎市の鍋焼きラーメンという声、親鶏の鶏ガラを長時間炊いた醤油、高知と大阪の醤油のたれ、熱々で提供、中細ストレート麺、柚子が強すぎるという声、卓上に白胡椒、鶏白湯ベースのものに柚子皮と鶏チャーシューとカリカリの鶏、2階、韓国風の冷麺1,000円(キムチ、卵、チャーシュー)、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B500840063/', R + 'B524605237/', R + 'B525328720/', R + 'B530760098/', R + 'B531516371/', R + 'B532373080/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight egg-rich yellow noodles (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Tori soba normal, ¥900 (June 2026); BLACK ¥950.',
      chashu: 'Chicken chashu and crunchy shredded chicken (July 2026).',
      notable_toppings: ['yuzu', 'garlic and black pepper (BLACK)', 'shredded chicken'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Taisho\'s piping-hot parent-chicken shoyu with yuzu, open until 2 am for the Dome crowd.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B524605237/', '"Light and refreshing, making it easy to eat a lot" — placed low.'],
        oiliness: [R + 'B524605237/', '"Light and refreshing" — placed low.'],
        clarity: [R + 'B530760098/', 'Soy-sauce chintan of parent-chicken bones — placed high.'],
        tare_strength: [R + 'B525328720/', '"Flavorful with a strong chicken essence" — mid-scale.'],
        noodle_firmness: [R + 'B530760098/', '"A nice texture" in medium-thin straight noodles — mid-scale.'],
        aroma_punch: [R + 'B530760098/', '"The flavor of yuzu… a bit overpowering" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B530760098/', R + 'B524605237/', R + 'B525328720/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Second-floor counter; self-service water; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家東1-18-9 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家東一丁目18番9号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500840063/', R + 'B532373080/'],
    price_note: 'Prices from July 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tori soba (normal)', '¥900', 'Ramen', 'no', 'no', 'July 2025.', 'normal'),
      it('', '', 'Tori soba RED', '¥950', 'Ramen', 'no', 'no', 'September 2026; extra spicy +¥50.', 'red'),
      it('', '', 'Tori soba BLACK', '¥950', 'Ramen', 'no', 'no', 'July 2025.', 'black'),
      it('', '', 'Special yuzu shio tori ramen', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'yuzu_shio'),
      it('', '', 'Tori mazesoba', '¥1,100', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Korean-style cold noodles (summer)', '¥1,000', 'Noodles', 'no', 'no', 'July 2026.', 'reimen'),
      it('', '', 'Mini chashu rice bowl, large', '¥550', 'Rice', 'no', 'no', 'September 2026.', 'mini_don'),
      it('', '', 'Chicken chazuke set', '¥550', 'Rice', 'no', 'no', 'July 2025.', 'chazuke'),
    ] }, {
    cuisine: '親鶏の醤油の鶏そば・鶏そば普通900円: 長時間炊いた親鶏の鶏ガラに高知と大阪の醤油、熱々、柚子、卵の多い中細ストレート麺、鶏チャーシュー、カリカリのほぐし鶏・鶏そばRED 950円(辛さ増し+50円)・にんにくと黒胡椒の鶏そばBLACK 950円・特製柚子塩鶏ラーメン1,100円・にんにくたっぷりの鶏まぜそば1,100円・限定の鶏白湯・夏は韓国風の冷麺1,000円・ミニチャーシュー丼大550円・鶏茶漬けのセット550円・瓶の赤星とアサヒ660円',
    neighborhood: '大正区三軒家東1-18-9 2F。大正駅から193m、京セラドーム方面',
    gf_detail: 'グルテンフリーではありません。卵の多い小麦の麺、高知と大阪の醤油のたれ、冷麺。',
    vegan_detail: 'ヴィーガンではありません。親鶏のスープ、鶏チャーシュー、卵麺。',
    notes: '[ラーメン・京セラドーム近く、深夜2時までの親鶏醤油の鶏そば] 大正駅と京セラドームの間、2階にある鶏ラーメンの店で、2023年開店、深夜2時まで営業、試合後は野球帰りの客が階段に並ぶ。高知県須崎の鍋焼きラーメンの流れという声。鶏そば(900円)は長時間炊いた親鶏の鶏ガラに高知と大阪の醤油の熱々のスープ、柚子がさわやかに効き、卵の多い中細ストレート麺。柚子が強すぎたという人も。BLACKはにんにくと黒胡椒、REDは辛さ、ほかに柚子塩とにんにくたっぷりの鶏まぜそば。締めは鶏茶漬け(550円)かミニチャーシュー丼で。限定の鶏白湯はよく売り切れる。現金のみ。',
  });
}

// ================================================================ 中華そば ニューまるちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27139412/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00']);
  put({
    id: 'osaka_chuka_soba_new_maruchan_doshomachi', name: '中華そば ニューまるちゃん (Chuka Soba New Maruchan)', category: 'OMNI',
    lat: 34.688631, lng: 135.498072, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sweet soy broth; ramen tare on the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back fat; chashu; raw egg; mentaiko.',
    hours_raw: 'Mon–Fri 11:00–14:00 (L.O. 13:30); closed Sat, Sun and public holidays (Tabelog). A bar at night (April 2026). Ticket machine without pictures; self-service rice bar (2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Doshomachi 4-7-7, Shin-Yokobori Bldg 2F, next to Inakura — 3 min from Higobashi, 5 min from Yodoyabashi',
    cuisine: 'Weekday-lunch chuka soba with an all-you-can-eat rice bar · chuka soba ¥750: sweet, Kyushu-style soy broth, straight noodles · back-fat ramen · back-fat mazesoba with raw egg ¥950, garlic none / a little / regular · spicy chuka soba · "Stanira" soba: garlic chives, chili, ginger, raw egg, plenty of chashu, bean sprouts, nori · Jiro-style ramen · +¥250: unlimited rice, mentaiko, raw eggs, seasoned nori and furikake (also on its own) · table: ramen tare, apple vinegar, pepper, pickled garlic, shichimi · counter and two tables',
    website: null, gmaps: gm('中華そば ニューまるちゃん 道修町'), menu_url: null,
    notes: "[Ramen · weekday-lunch chuka soba with ¥250 unlimited mentaiko rice, near Higobashi] A retro-signed, second-floor bar near Higobashi that becomes a ramen shop at weekday lunch. The famous draw is the rice bar: add ¥250 and help yourself to unlimited rice, mentaiko, raw eggs, nori and furikake, and you can order it alone. The chuka soba (¥750) is a sweet, Kyushu-style soy broth on straight noodles that pairs well with all that rice. Heartier options include a back-fat mazesoba with raw egg (¥950, garlic to taste) and the Stanira soba, a spicy, garlicky bowl of garlic chives, chili and ginger. Noodles run soft; one diner plans to ask for them firmer. The ticket machine has no pictures, so decide before the lunch rush. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Bar at night, ramen shop at weekday lunch (April 2026 review; Tabelog).', philosophy: null, specialty: 'Chuka soba; all-you-can-eat mentaiko rice.',
      anecdotes: [
        { text: '"For an additional JPY 250, you can enjoy all-you-can-eat rice and mentaiko! There were also raw eggs, furikake, and nori available." — April 2026, back-fat mazesoba ¥950.', source: R + 'B525950922/' },
        { text: '"The broth is on the sweeter side. It tastes like a sweet soy sauce from Kyushu. The noodles are straight." — September 2026, chuka soba ¥750.', source: R + 'B536527729/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば ニューまるちゃん、大阪市中央区道修町4-7-7 新横堀ビル 2F、肥後橋駅から徒歩3分、淀屋橋駅から5分、月〜金 11:00〜14:00(L.O. 13:30)、土日祝休み、予約可、カード・電子マネー・QR不可。口コミ(2026年3〜10月): 背脂ラーメン、明太子と卵の食べ放題、和風の醤油、夜はバーで昼はラーメン、券売機に写真がない、背脂まぜそば(生卵)950円、+250円でご飯と明太子が食べ放題、生卵・ふりかけ・海苔、にんにくはなし・少し・普通、太めで少し縮れた麺、セルフ、ほんのり甘いスープ、明太子ご飯、1,000円で大満足、Inakuraの隣、レトロなポップな看板、都会的な内装、奥にカウンター、テーブル2卓、大きなテレビ、卓上にラーメンのたれ・りんご酢・ラーメンこしょう・にんにく漬け・七味、中華そば、辛い中華そば、濃厚豚脂ラーメン、豚脂まぜそば、二郎系、Staniraそば(ニラ、唐辛子、生卵、生姜、にんにく)、柔らかめの中華麺、チャーシューたっぷり、もやし、海苔、気前のいい店主、麺が柔らかい、食べ放題だけの注文も可、中華そば750円、明太TKGの食べ放題250円、九州の甘い醤油のよう、ストレート麺。',
      confidence: 'medium', sources: [TB, R + 'B524579256/', R + 'B525950922/', R + 'B532877004/', R + 'B533172118/', R + 'B533891035/', R + 'B536527729/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: false, notes: 'Straight, fairly soft noodles in the chuka soba; thick slightly curly in the mazesoba (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba', 'jiro_kei'],
      signature_bowl: 'Chuka soba, ¥750 (September 2026).',
      chashu: 'Plenty of chashu in the Stanira soba (August 2026).',
      notable_toppings: ['all-you-can-eat mentaiko rice', 'raw egg', 'garlic chives'],
      gf: { status: 'no', note: 'Wheat noodles; soy broth.' },
      vegan: { status: 'no', note: 'Back fat; chashu.' },
      pantheon: 'Higobashi\'s weekday-lunch sweet-soy chuka soba with a ¥250 all-you-can-eat mentaiko rice bar.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B532877004/', '"The slightly sweet broth paired well with the noodles" — mid-scale.'],
        oiliness: [R + 'B524579256/', 'Back-fat ramen offered; no remark on oil — mid-scale.'],
        clarity: [R + 'B524579256/', '"A Japanese-style soy sauce"; no remark on clarity — mid-scale.'],
        tare_strength: [R + 'B536527729/', '"On the sweeter side… a sweet soy sauce from Kyushu" — mid-scale.'],
        noodle_firmness: [R + 'B533891035/', '"The noodles were quite soft" — placed low.'],
        aroma_punch: [R + 'B533172118/', 'Stanira soba "refreshingly spicy with hints of garlic, chili, and even ginger" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B536527729/', R + 'B533891035/', R + 'B532877004/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with no pictures; self-service rice bar (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道修町4-7-7 新横堀ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道修町四丁目7番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525950922/', R + 'B536527729/'],
    price_note: 'Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥750', 'Ramen', 'no', 'no', 'September 2026.', 'chuka'),
      it('', '', 'Back-fat mazesoba with raw egg', '¥950', 'Mazesoba', 'no', 'no', 'April 2026.', 'seabura_maze'),
      it('', '', 'Back-fat ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'seabura'),
      it('', '', 'Stanira soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'stanira'),
      it('', '', 'All-you-can-eat rice, mentaiko, eggs, nori, furikake', '+¥250', 'Rice', 'no', 'no', 'September 2026.', 'tabehoudai'),
    ] }, {
    cuisine: '平日昼の中華そばとご飯の食べ放題・中華そば750円: 九州風の甘い醤油、ストレート麺・背脂ラーメン・生卵の背脂まぜそば950円、にんにくはなし・少し・普通・辛い中華そば・「Stanira」そば: ニラ、唐辛子、生姜、生卵、たっぷりのチャーシュー、もやし、海苔・二郎系ラーメン・+250円でご飯、明太子、生卵、味付け海苔、ふりかけが食べ放題(単品も可)・卓上にラーメンのたれ、りんご酢、胡椒、にんにく漬け、七味・カウンターとテーブル2卓',
    neighborhood: '中央区道修町4-7-7 新横堀ビル 2F、Inakuraの隣。肥後橋から徒歩3分、淀屋橋から5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、甘い醤油のスープ、卓上のラーメンのたれ。',
    vegan_detail: 'ヴィーガンではありません。背脂、チャーシュー、生卵、明太子。',
    notes: '[ラーメン・肥後橋近く、250円で明太子ご飯食べ放題の平日昼の中華そば] 肥後橋近く、レトロな看板のビル2階のバーが平日の昼だけラーメン店に。名物はご飯の食べ放題: +250円でご飯、明太子、生卵、海苔、ふりかけが取り放題、これだけの注文も可。中華そば(750円)は九州風の甘い醤油にストレート麺で、ご飯がすすむ。がっつりなら生卵の背脂まぜそば(950円、にんにくはお好みで)や、ニラ、唐辛子、生姜の辛くてにんにくの効いたStaniraそばを。麺は柔らかめで、次は固めを頼んでみたいという声。券売機に写真がないので、昼の混雑前に決めておくと安心。現金のみ。',
  });
}

// ================================================================ 八仙楼
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27089487/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:59']);
  put({
    id: 'osaka_hassen_ro_shin_imamiya', name: '八仙楼 (Hassen Ro)', category: 'OMNI',
    lat: 34.649204, lng: 135.501656, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare; gyoza; fried rice seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; back fat; pork-belly chashu.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:00–24:00; closed Wed (Tabelog). Busiest at 22:00–23:00 (2026 reviews). Extra noodles available. Cash only: no cards (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Haginochaya 1-4-1, Taiyo Bldg 1F (Nishinari-ku) — 3 min from Nankai/JR Shin-Imamiya Stn, near Shinsekai',
    cuisine: 'Late-night tonkotsu ramen · Tenryu ramen, the recommendation: rich tonkotsu shoyu, melt-in-the-mouth chashu · classic ramen under a layer of fine back fat: rich pork-bone flavor yet not heavy, two thick slices of pork-belly chashu, plenty of green onion · lighter shio tonkotsu · chuka soba · miso ramen · ramen and fried rice set ¥1,150 · gyoza · extra noodles · bottled Asahi Super Dry · 13 counter seats',
    website: null, gmaps: gm('八仙楼 新今宮'), menu_url: null,
    notes: "[Ramen · late-night tonkotsu near Shin-Imamiya and Shinsekai] A thirteen-seat counter a few minutes from Shin-Imamiya, open since 2015 from 11:00 to midnight and packed late in the evening, when it serves as a finishing bowl after a night out. The recommended Tenryu ramen is a rich tonkotsu shoyu with melt-in-the-mouth chashu; the classic bowl floats a layer of fine back fat over a pork-bone soup that is rich but not heavy, with two thick slices of pork belly. The shio tonkotsu is the lighter choice. Pair it with gyoza or the ramen and fried rice set (¥1,150), or order extra noodles. One nine-visit regular says every ramen here is good. Close to Shinsekai and busy with visitors, but not a tourist trap, one diner felt. Cash only; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 December 2015 (Tabelog)', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Tenryu ramen; tonkotsu.',
      anecdotes: [
        { text: '"I tried the recommended Tenryu Ramen, which had a rich tonkotsu soy sauce flavor and melt-in-your-mouth chashu—it was delicious." — September 2026.', source: R + 'B514133737/' },
        { text: '"The surface of the broth is generously covered with fine back fat… Surprisingly, it\'s not too heavy despite its appearance, and the broth has a solid depth and umami." — August 2026, classic ramen.', source: R + 'B536126082/' },
      ],
      japanese_sources_summary: '食べログ: 八仙楼、大阪市西成区萩之茶屋1-4-1 太陽ビル 1F、南海・JR新今宮駅から徒歩3分、月・火・木〜日 11:00〜24:00、水休み、カード不可、13席、2015年12月10日開店。口コミ(2026年8〜10月): 深夜のラーメン、23時にほぼ満席、アサヒスーパードライの中瓶、塩豚骨ラーメン、どのラーメンもおいしいという声、22時に入店、中華そば、柔らかいチャーシュー、おすすめのTenryuラーメン(濃厚な豚骨醤油、とろけるチャーシュー)、カウンターのみでほぼ満席、飲んだ後の締め、豚骨ラーメンは濃厚、替え玉あり、日曜23時前に3人で、餃子3皿、居酒屋使いも、背脂たっぷりの定番ラーメン、豚骨の旨みと脂の甘み、見た目ほど重くない、厚い豚バラチャーシュー2枚、刻みねぎたっぷり、インバウンド客で混雑、ラーメン炒飯セット1,150円、量が多い、塩豚骨はあっさり、炒飯はやや塩辛め、観光客向けではないという声、味噌ラーメンは濃厚、餃子。',
      confidence: 'medium', sources: [TB, R + 'B514133737/', R + 'B533802120/', R + 'B534712557/', R + 'B536126082/', R + 'B536151518/', R + 'B537855445/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Extra noodles available (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tenryu ramen (August–September 2026).',
      chashu: 'Melt-in-the-mouth chashu; two thick slices of pork belly in the classic bowl (2026).',
      notable_toppings: ['back fat', 'green onion', 'gyoza on the side'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Shin-Imamiya\'s midnight tonkotsu: the Tenryu ramen and a back-fat classic for after the drinks.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B514133737/', 'Tenryu "a rich tonkotsu soy sauce flavor" — placed high.'],
        oiliness: [R + 'B536126082/', '"Generously covered with fine back fat" — placed high.'],
        clarity: [R + 'B533802120/', '"The tonkotsu ramen… was rich" — bottom of scale.'],
        tare_strength: [R + 'B514133737/', '"The broth was just the right richness" — mid-scale.'],
        noodle_firmness: [R + 'B514133737/', '"I really liked the noodles"; no remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B536126082/', '"The rich flavor of pork bone and the sweetness of the fat" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B514133737/', R + 'B536126082/', R + 'B533802120/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy with visitors near Shinsekai; efficient service (August–September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西成区萩之茶屋1-4-1 太陽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026. Listed website (arakawapork.com) has expired.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西成区萩之茶屋一丁目4番1号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514133737/', R + 'B536151518/'],
    price_note: 'Set price from a September 2026 review; others not reported.', last_checked: TODAY, items: [
      it('', '', 'Tenryu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tenryu'),
      it('', '', 'Classic back-fat ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'classic'),
      it('', '', 'Shio tonkotsu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio_tonkotsu'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
      it('', '', 'Ramen and fried rice set', '¥1,150', 'Sets', 'no', 'no', 'September 2026.', 'chahan_set'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: '深夜の豚骨ラーメン・おすすめのTenryuラーメン: 濃厚な豚骨醤油、とろけるチャーシュー・細かい背脂が浮く定番ラーメン: 豚骨の旨みは濃いのに重くない、厚い豚バラチャーシュー2枚、刻みねぎたっぷり・あっさりの塩豚骨・中華そば・味噌ラーメン・ラーメン炒飯セット1,150円・餃子・替え玉・瓶のアサヒスーパードライ・カウンター13席',
    neighborhood: '西成区萩之茶屋1-4-1 太陽ビル 1F。南海・JR新今宮駅から徒歩3分、新世界の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ、餃子、炒飯の味付け。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、豚バラチャーシュー。',
    notes: '[ラーメン・新今宮と新世界の近く、深夜の豚骨] 新今宮から数分のカウンター13席の店で、2015年開店、11時から深夜0時まで、夜遅くは飲んだ後の締めの一杯で満席に。おすすめのTenryuラーメンは濃厚な豚骨醤油にとろけるチャーシュー。定番は細かい背脂が浮く濃いのに重くない豚骨スープに、厚い豚バラチャーシュー2枚。軽めなら塩豚骨を。餃子やラーメン炒飯セット(1,150円)、替え玉も。9回通う常連はどのラーメンもおいしいという。新世界に近く観光客も多いが、観光客向けの店ではないと感じたという声。現金のみ、水曜休み。',
  });
}

save();
