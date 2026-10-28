// Osaka sweep (2-mile circle around Dotonbori), batch 132 — ramen phase (all OMNI).
//   + ツケメン ロッキー (seafood-tonkotsu tsukemen on thick chewy noodles, soup refill; Tenmabashi)
//   + 焼飯と麺 (fried rice and light chuka soba sets, ticket on 1F, seats up steep stairs; Tenmabashi)
//   + 中華レストラン味一 (local Chinese since 1985: Imazato-style sauce yakisoba, lunch sets; Tsuruhashi Stn)
//   + 上方レインボー (inventive six-seat ramen on homemade fettuccine-style noodles, Shoyu Animal, rotating tsukemen; Momodani)
//   - skipped 煮干しらーめん 玉五郎 鶴橋店 27020435: chain branch; 玉五郎 黒門本店 is already in data.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 132);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27020435', 'chain branch: 煮干しらーめん 玉五郎 黒門本店 (osaka_niboshi_ramen_tamagoro_kuromon) already in data');

// ================================================================ ツケメン ロッキー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27128018/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tsukemen_rocky_tenmabashi', name: 'ツケメン ロッキー (Tsukemen Rocky)', category: 'OMNI',
    lat: 34.688342, lng: 135.518079, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-based dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and pork-bone dipping sauce; chashu; egg.',
    hours_raw: 'Daily 11:00–21:00; hours may change (Tabelog). Ticket machine; PayPay or Rakuten Pay accepted, so tell staff if paying by PayPay (October 2026). No cards or e-money (Tabelog).',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanimachi 1-3-19 — 3 min from Tenmabashi Stn exit 3',
    cuisine: 'Tsukemen · tsukemen ¥1,000: thick, chewy noodles with a rich seafood and pork-bone dip holding chunks of chashu · special tsukemen: two thick slices of chashu, two nori, seasoned egg · kara (spicy) tsukemen · chashu topping ¥350 (grilled, thick-cut) · large +¥100 · green onion topping · yuzu shichimi on the table · soup refill to finish',
    website: null, gmaps: gm('ツケメン ロッキー'), menu_url: null,
    notes: "[Tsukemen · seafood-tonkotsu tsukemen near Tenmabashi] A tsukemen shop a few minutes from Tenmabashi, open since 2022, that one diner calls the place for tsukemen in the area. The thick, chewy noodles come neatly laid out next to a rich seafood and pork-bone dip with chunks of chashu in it; the special (two big slices of chashu, nori and an egg) is the full version, and a spicy kara tsukemen is the alternative. Add the grilled, thick-cut chashu topping (¥350) and yuzu shichimi from the table, then ask for soup to dilute the last of the dip. Two diners found the dip went lukewarm quickly. Large is ¥100 more. Ticket machine; PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 February 2022 (Tabelog); has a sister restaurant (October 2026 review).', background: 'Tsukemen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Seafood-tonkotsu tsukemen.',
      anecdotes: [
        { text: '"The satisfying tsukemen paired with the seafood-based dipping sauce was absolutely delightful. Adding yuzu shichimi gave it a nice accent, making it even tastier." — September 2026, tsukemen ¥1,000, chashu ¥350, large ¥100.', source: R + 'B535535057/' },
        { text: '"The flavor was a delightful seafood and pork bone broth… There was chashu in the soup, but the topping was grilled and cut a bit thicker, which made it delicious." — October 2026, large tsukemen with chashu.', source: R + 'B536681401/' },
      ],
      japanese_sources_summary: '食べログ: ツケメン ロッキー、大阪市中央区谷町1-3-19、天満橋から126m、毎日11:00〜21:00、カード・電子マネー不可、QR (PayPay、楽天ペイ) 可、2022年2月11日開店。口コミ(2026年8〜10月): 魚介豚骨の濃いつけ汁、つけ汁の中にもチャーシュー、太くもちもちの麺、つけ麺1,000円、チャーシュー350円 (焼いて厚めに切ったもの)、大盛り100円 (以前は無料)、特製つけ麺 (チャーシュー2枚、海苔2枚、味玉)、辛いつけ麺 (Kara)、ねぎのトッピング、卓上の柚子七味、スープ割り、券売機、PayPay は店員に伝える、つけ汁がすぐぬるくなるという声が二つ、姉妹店がある、天満橋でつけ麺ならここという声、Ramen Jet に似ているという声。',
      confidence: 'medium', sources: [TB, R + 'B534276193/', R + 'B535535057/', R + 'B536681401/', R + 'B536709466/', R + 'B537612576/', R + 'B537613160/'] },
    ramen: {
      broth_base: ['gyokai', 'tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Impressively thick, chewy noodles (2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Special tsukemen (2026).',
      chashu: 'Two large slices; the grilled, thick-cut topping is a step up (2026).',
      notable_toppings: ['grilled chashu', 'nori', 'seasoned egg', 'green onion', 'yuzu shichimi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood and pork broth.' },
      pantheon: 'Tenmabashi\'s go-to seafood-tonkotsu tsukemen on thick, chewy noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534276193/', '"The rich seafood and pork bone broth is my favorite!" — placed high.'],
        oiliness: [R + 'B537612576/', '"The dipping sauce is rich and flavorful"; no review calls it oily — mid-scale.'],
        clarity: [R + 'B536681401/', 'A thick seafood and pork-bone dip — bottom of scale.'],
        tare_strength: [R + 'B537612576/', '"The dipping sauce is rich and flavorful" — placed high.'],
        noodle_firmness: [R + 'B537612576/', '"The noodles are impressively thick"; "chewy, and satisfying" (B535535057) — top of scale.'],
        aroma_punch: [R + 'B535535057/', '"The ultimate seafood Tsukemen" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B535535057/', R + 'B536681401/', R + 'B537612576/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; tell staff when paying by PayPay (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町1-3-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町一丁目3番19号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535535057/', R + 'B537613160/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen', '¥1,000', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('', '', 'Special tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Kara (spicy) tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'kara'),
      it('', '', 'Chashu topping', '¥350', 'Toppings', 'no', 'no', 'September 2026.', 'chashu'),
      it('', '', 'Large noodles', '+¥100', 'Toppings', 'no', 'no', 'September 2026.', 'large'),
    ] }, {
    cuisine: 'つけ麺・つけ麺1,000円: 太くもちもちの麺に、チャーシューのかけらが入った濃い魚介豚骨のつけ汁・特製つけ麺: 厚いチャーシュー2枚、海苔2枚、味玉・辛いつけ麺 (Kara)・チャーシューのトッピング350円 (焼いて厚めに切ったもの)・大盛り+100円・ねぎのトッピング・卓上の柚子七味・締めのスープ割り',
    neighborhood: '中央区谷町1-3-19。天満橋駅3番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油ベースのつけ汁。',
    vegan_detail: 'ヴィーガンではありません。魚介豚骨のつけ汁、チャーシュー、卵。',
    notes: '[つけ麺・天満橋近く、魚介豚骨のつけ麺] 天満橋から数分のつけ麺の店で、2022年開店、このあたりでつけ麺ならここという声も。きれいに盛った太くもちもちの麺に、チャーシューのかけらが入った濃い魚介豚骨のつけ汁。全部のせなら特製 (大きなチャーシュー2枚、海苔、味玉)、辛いのが好きなら辛いつけ麺 (Kara)。焼いて厚く切ったチャーシュー(350円)と卓上の柚子七味を足し、最後はスープ割りで。つけ汁がすぐぬるくなるという声が二つ。大盛りは100円増し。券売機、PayPay 可。',
  });
}

// ================================================================ 焼飯と麺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27142222/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:30', '21:00']); const WE = day(['11:00', '21:00']);
  put({
    id: 'osaka_yakimeshi_to_men_tenmabashi', name: '焼飯と麺 (Yakimeshi to Men)', category: 'OMNI',
    lat: 34.689518, lng: 135.517753, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu soup; seasoned fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; rare chashu; chashu and egg in the fried rice.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:30–21:00; Sat, Sun and public holidays 11:00–21:00 (Tabelog). Ticket machine on 1F, cash only, no ¥5,000 or ¥10,000 notes (August 2026); seating up a narrow, steep staircase on 2F; water and dish return are self-service (2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Otemae 1-6-3 — 44 m from Tenmabashi Stn',
    cuisine: 'Fried rice and chuka soba · chuka soba: light shoyu soup, thin straight noodles with a soba-like bite, two slices of rare chashu, thick menma, white and green onion · chuka soba and half yakimeshi set ¥1,280–1,290 · seasoned egg topping · yakimeshi (fried rice) with green onion, chashu and egg, fragrant and fluffy · 4 counter seats and 5 tables for two',
    website: null, gmaps: gm('焼飯と麺'), menu_url: null,
    notes: "[Ramen · fried rice and light chuka soba by Tenmabashi] A small shop right by Tenmabashi Station, open since 2024, whose banner and name put the fried rice first. Buy a ticket downstairs (cash, no big notes), then climb a steep, narrow staircase to the seats. The usual order is the set (¥1,280–1,290): a light shoyu chuka soba on thin, straight noodles with a soba-like bite, rare chashu and thick menma, plus half a plate of fragrant, fluffy fried rice. Opinions split: several diners call the fried rice the reason to come, while others found both mild, and one saw the set cost ¥980 a week earlier. Water and dish return are self-service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 May 2024 (Tabelog)', background: 'Fried rice and chuka soba shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Yakimeshi (fried rice); light chuka soba.',
      anecdotes: [
        { text: '"The noodles had a texture more similar to soba than ramen, and the broth was on the lighter side… The fried rice, on the other hand, was rich in flavor and to my liking." — August 2026, fried rice set.', source: R + 'B534660920/' },
        { text: '"The ramen featured thin straight noodles topped with white and green onions, two thick pieces of menma (bamboo shoots), and two slices of rare chashu…" — September 2026, ramen and half fried rice set ¥1,290.', source: R + 'B535135013/' },
      ],
      japanese_sources_summary: '食べログ: 焼飯と麺、大阪市中央区大手前1-6-3、天満橋から44m、月〜金 11:00〜15:00・17:30〜21:00、土日祝 11:00〜21:00、カード・電子マネー・QR不可、14席 (カウンター4、2人掛けテーブル5)、2024年5月13日開店。口コミ(2026年8〜10月): 1階は券売機 (現金のみ、5千円札・1万円札不可)、2階が客席で階段が急で狭い、水と返却はセルフ、中華そばと半焼飯のセット1,280〜1,290円 (前の週は980円だったという声)、細いストレート麺はそばのような食感、あっさりの醤油スープ、レアチャーシュー2枚、太いメンマ、白ねぎと青ねぎ、味玉、焼飯はねぎ・チャーシュー・卵で香ばしくふわっと、焼飯が目当てという声と、どちらも薄味という声、のぼりは焼飯。',
      confidence: 'medium', sources: [TB, R + 'B534114655/', R + 'B534660920/', R + 'B535135013/', R + 'B535660309/', R + 'B536813462/', R + 'B538075205/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles with a soba-like texture (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba and half yakimeshi set, ¥1,290 (September 2026).',
      chashu: 'Two slices of rare chashu (September 2026).',
      notable_toppings: ['thick menma', 'white and green onion', 'seasoned egg', 'half fried rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Tenmabashi\'s fried-rice-first counter, with a light shoyu chuka soba alongside.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534660920/', '"The broth was on the lighter side" — placed low.'],
        oiliness: [R + 'B536813462/', '"The ramen is a light, Chinese-style soba" — placed low.'],
        clarity: [R + 'B536813462/', 'A light shoyu chuka soba — placed high.'],
        tare_strength: [R + 'B535135013/', '"The soy sauce flavor… lacking in richness, with a rather mild taste" — placed low.'],
        noodle_firmness: [R + 'B535135013/', '"The texture and mouthfeel of the noodles were good" — mid-scale.'],
        aroma_punch: [R + 'B535135013/', '"A rather mild taste" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B534660920/', R + 'B535135013/', R + 'B536813462/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service water and dish return; steep stairs (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区大手前1-6-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区大手前一丁目6番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534114655/', R + 'B535135013/', R + 'B535660309/'],
    price_note: 'Prices from August–October 2026 reviews; one diner saw the set at ¥980 a week before ¥1,280.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba and half yakimeshi set', '¥1,280–1,290', 'Sets', 'no', 'no', 'August–September 2026.', 'set'),
      it('', '', 'Chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Yakimeshi (fried rice)', '', 'Rice', 'no', 'no', 'October 2026.', 'yakimeshi'),
      it('', '', 'Seasoned egg', '', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '焼飯と中華そば・中華そば: あっさりの醤油スープ、そばのような食感の細いストレート麺、レアチャーシュー2枚、太いメンマ、白ねぎと青ねぎ・中華そばと半焼飯のセット1,280〜1,290円・味玉のトッピング・焼飯はねぎ、チャーシュー、卵で香ばしくふわっと・カウンター4席と2人掛けテーブル5卓',
    neighborhood: '中央区大手前1-6-3。天満橋駅から44m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ、味付けした焼飯。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、レアチャーシュー、焼飯のチャーシューと卵。',
    notes: '[ラーメン・天満橋近く、焼飯とあっさり中華そば] 天満橋駅のすぐそばの小さな店で、2024年開店、のぼりも店名も主役は焼飯。食券は1階で (現金のみ、大きなお札は不可)、急で狭い階段を上って2階の席へ。定番はセット (1,280〜1,290円): 細いストレート麺がそばのような食感のあっさり醤油の中華そばにレアチャーシューと太いメンマ、香ばしくふわっとした半焼飯。評価は分かれ、焼飯目当てという声が多い一方、どちらも薄味という声や、前の週は980円だったという声も。水と返却はセルフ。',
  });
}

// ================================================================ 中華レストラン味一
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27042184/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '21:00']);
  put({
    id: 'osaka_chuka_restaurant_ajiichi_tsuruhashi', name: '中華レストラン味一 (Chuka Restaurant Ajiichi)', category: 'OMNI',
    lat: 34.665899, lng: 135.529871, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakisoba noodles and sauce; battered kara-age; sweet and sour sauce; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp, squid, crab and chicken dishes; egg.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sun 11:00–21:00; closed Wed and Sat; hours may change (Tabelog). Order verbally (May 2026). Cards accepted; no e-money or QR; smoking allowed (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimoajiharacho 1-20 (Tennoji-ku), on the main street — 1 min from Tsuruhashi Stn',
    cuisine: 'Local Chinese · special sauce yakisoba ¥1,000 in the Imazato yakisoba style: thick noodles, pork, cabbage, onion, green pepper, big and small shrimp, squid, fried egg, shredded nori · lunch set B ¥1,080: sweet and sour pork, kara-age, crab omelet, rice, soup · lunch set A: sweet and sour pork, mapo tofu, shrimp tempura, char siu · crab fried rice ¥800 · gyoza ¥370 · mixed noodle soup · green pepper and pork stir-fry · counter on 1F, tables on 2F, 32 seats',
    website: null, gmaps: gm('中華レストラン味一'), menu_url: null,
    notes: "[Chinese · a station-front local Chinese since 1985, Tsuruhashi] A long-running local Chinese restaurant a minute from Tsuruhashi Station, with a classic red counter downstairs and tables upstairs, open since 1985. The specialty is a sauce yakisoba in the style of Osaka's Imazato yakisoba (¥1,000): thick noodles in a rich sauce with pork, shrimp, squid, green pepper and a fried egg on top. Lunch sets are the other draw, such as set B (¥1,080) with standout sweet and sour pork, kara-age and a crab omelet. There's also crab fried rice (¥800), gyoza (¥370) and noodle soups. One diner found the kara-age batter tempura-like, another the portions small. Cards accepted; smoking allowed. Closed Wednesdays and Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1985 (May 2026 reviews).', background: 'Local Chinese restaurant (Tabelog; 2026 reviews).', philosophy: 'Yakisoba with roots in Imazato yakisoba (May 2026 reviews).', specialty: 'Sauce yakisoba; lunch sets.',
      anecdotes: [
        { text: '"This local specialty, \'Imazato Yakisoba,\' features pork, cabbage, onions, and custom thick noodles stir-fried in a rich sauce, topped with green peppers, large shrimp, small shrimp, a fried egg, shredded nori, and squid." — May 2026, special sauce yakisoba ¥1,000.', source: R + 'B528326829/' },
        { text: '"I was impressed by the high level of the sweet and sour pork! The sauce was so rich that I felt it was the star of the set." — May 2026, set B ¥1,080.', source: R + 'B528866675/' },
      ],
      japanese_sources_summary: '食べログ: 中華レストラン味一、大阪市天王寺区下味原町1-20、地下鉄・JR鶴橋駅から徒歩1分、月・火・木・金・日 11:00〜21:00、水・土休み、カード可、電子マネー・QR不可、32席、貸切可、喫煙可。口コミ(2026年4〜8月): 1985年創業の町中華、Imazato yakisoba がルーツの特製ソース焼きそば1,000円 (太麺、豚、キャベツ、玉ねぎ、ピーマン、大小のエビ、イカ、目玉焼き、刻み海苔)、人気のBランチ1,080円 (酢豚、唐揚げ、かに玉、ご飯、スープ)、Aランチ (酢豚、麻婆豆腐、エビの天ぷら、チャーシュー)、かにチャーハン800円、餃子370円、五目麺、ピーマンと豚の炒め、1階は赤いカウンター、2階はテーブル、口頭で注文、唐揚げの衣が天ぷらのようで苦手という声、量が少なめという声、卓上の餃子のたれ、ラー油、ソース、胡椒。',
      confidence: 'medium', sources: [TB, R + 'B527269817/', R + 'B528326829/', R + 'B528866675/', R + 'B528924359/', R + 'B529192738/', R + 'B534527340/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; cards accepted (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区下味原町1-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区下味原町1番20号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528326829/', R + 'B528866675/', R + 'B528924359/'],
    price_note: 'Prices from April–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special sauce yakisoba', '¥1,000', 'Noodles', 'no', 'no', 'May 2026.', 'yakisoba'),
      it('', '', 'Lunch set B (sweet and sour pork, kara-age, crab omelet)', '¥1,080', 'Lunch', 'no', 'no', 'May 2026.', 'set_b'),
      it('', '', 'Lunch set A (sweet and sour pork, mapo tofu, shrimp tempura, char siu)', '', 'Lunch', 'no', 'no', 'August 2026.', 'set_a'),
      it('', '', 'Crab fried rice', '¥800', 'Rice', 'no', 'no', 'May 2026.', 'kani_chahan'),
      it('', '', 'Gyoza', '¥370', 'Dishes', 'no', 'no', 'May 2026.', 'gyoza'),
    ] }, {
    cuisine: '町中華・Imazato yakisoba の流れをくむ特製ソース焼きそば1,000円: 太麺、豚、キャベツ、玉ねぎ、ピーマン、大小のエビ、イカ、目玉焼き、刻み海苔・Bランチ1,080円: 酢豚、唐揚げ、かに玉、ご飯、スープ・Aランチ: 酢豚、麻婆豆腐、エビの天ぷら、チャーシュー・かにチャーハン800円・餃子370円・五目麺・ピーマンと豚の炒め・1階カウンター、2階テーブル、32席',
    neighborhood: '天王寺区下味原町1-20、大通り沿い。鶴橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。焼きそばの麺とソース、衣の唐揚げ、酢豚のあん、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚、エビ、イカ、カニ、鶏の料理、卵。',
    notes: '[中華・鶴橋駅前、1985年創業の町中華] 鶴橋駅から1分、1階は昔ながらの赤いカウンター、2階はテーブルの町中華で、1985年創業。名物は大阪の Imazato yakisoba の流れをくむソース焼きそば(1,000円): 濃いソースの太麺に豚、エビ、イカ、ピーマン、上に目玉焼き。ランチセットも人気で、Bランチ(1,080円)は酢豚が際立ち、唐揚げとかに玉付き。かにチャーハン(800円)、餃子(370円)、麺類も。唐揚げの衣が天ぷらのようだったという声や、量が少なめという声も。カード可、喫煙可。水・土曜休み。',
  });
}

// ================================================================ 上方レインボー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27116315/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_kamigata_rainbow_momodani', name: '上方レインボー (Kamigata Rainbow)', category: 'OMNI',
    lat: 34.654799, lng: 135.52591, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; shoyu tare; curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood broths; pork chashu; iriko; eel bones in a limited tsukemen.',
    hours_raw: 'Mon–Wed, Fri–Sun 11:00–15:00 and 18:00–22:00; closed Thu; temporary closures posted on social media (Tabelog). Order on a tablet (October 2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Katsuyama 4-6-3 (Tennoji-ku) — 5 min from JR Momodani Stn south exit',
    cuisine: 'Inventive ramen · Shoyu Animal ¥1,600: rich, sweet umami from an animal-based broth · iriko soba shoyu ¥1,000 · shio ramen ¥1,000 · Antoki no Shio ¥1,600 with tangy red onion · Neo Shio Ramen Apple (when available) · curry ramen with seafood stock and beef fat · homemade flat, thick "fettuccine" noodles · rotating limited tsukemen, e.g. Aka Buta DDX autumn pear tsukemen ¥1,600, black pork and unagi dashi wasabi tsukemen ¥1,400, fig and octopus summer salt tsukemen ¥1,600, tantan tsukemen · chicken paitan now and then · Aka Buta DDX chashu, 2 slices ¥500 · Ajitama Arokana ¥200 · Kurobuta rice ¥400 · Rainbow wonton · large +¥200 · 6 seats',
    website: null, gmaps: gm('上方レインボー'), menu_url: null,
    notes: "[Ramen · inventive six-seat ramen on homemade fettuccine noodles, Momodani] A six-seat shop with a storefront that doesn't look like a ramen shop, five minutes from Momodani, open since 2020. The menu has a steady core and a stream of playful limited bowls. The standout for several diners is the Shoyu Animal (¥1,600), a deep, sweet, umami-heavy animal broth; the iriko shoyu and shio (¥1,000 each) are simpler. The limited tsukemen use homemade flat, thick fettuccine-style noodles, such as a pear and Aka Buta DDX pork tsukemen, an unagi dashi version or a fig and octopus salt dip. Staff suggest trying the noodles first with just salt and lemon. Check Instagram for the current menu. Order on the tablet. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 February 2020 (Tabelog)', background: 'Ramen shop with a rotating limited menu (Tabelog; 2025–2026 reviews).', philosophy: 'Homemade flat, thick fettuccine-style noodles; recommends tasting them with salt and lemon first (October 2026 reviews).', specialty: 'Shoyu Animal; limited tsukemen.',
      anecdotes: [
        { text: '"The dipping sauce was a pork bone-based soy sauce with a slight tang… The noodles were homemade flat, thick fettuccine-style, with a nice chewy texture… Adding salt and wasabi to the noodles provided a great accent." — October 2026, Aka Buta DDX autumn pear tsukemen ¥1,600.', source: R + 'B501792176/' },
        { text: '"I just love this soup too much!! The rich umami and sweetness from the animal-based broth are incredible!" — October 2026, Shoyu Animal ¥1,600.', source: R + 'B526506947/' },
      ],
      japanese_sources_summary: '食べログ: 上方レインボー、大阪市天王寺区勝山4-6-3、JR桃谷駅南口から徒歩5分、月〜水・金〜日 11:00〜15:00・18:00〜22:00、木休み、臨時休業はSNSで告知、カード可、電子マネー・QR不可、6席、2020年2月24日開店。口コミ(2025年11月〜2026年10月): 醤油アニマル1,600円 (動物系スープの濃い旨みと甘み)、いりこ醤油1,000円、塩ラーメン1,000円、Antoki no Shio 1,600円 (酸味のある赤玉ねぎ)、Neo Shio Ramen Apple、カレーラーメン (魚介の出汁と牛脂)、自家製の平打ち太麺 (フェットチーネ風)、期間限定のつけ麺 (Aka Buta DDX と秋の梨のつけ麺1,600円、黒豚とうなぎ出汁のわさびつけ麺1,400円、いちじくとタコの夏の塩つけ麺1,600円、担々つけ麺)、ときどき鶏白湯、Aka Buta DDX チャーシュー2枚500円、Ajitama Arokana 200円、Kurobuta rice 400円、Rainbow wonton、大盛り200円 (無料の日も)、タブレットで注文、麺はまず塩とレモンでとすすめられる、うなぎのつけ麺が少し生臭く感じたという声、ラーメン店に見えない外観。',
      confidence: 'medium', sources: [TB, R + 'B501792176/', R + 'B526506947/', R + 'B536913251/', R + 'B537043074/', R + 'B537193174/', R + 'B537382483/'] },
    ramen: {
      broth_base: ['pork', 'chicken'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: true, notes: 'Homemade flat, thick fettuccine-style noodles in the tsukemen; special flat noodles in some limited bowls (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Shoyu Animal, ¥1,600 (October 2026).',
      chashu: 'Aka Buta DDX pork chashu, chewy block-cut (October 2026).',
      notable_toppings: ['Ajitama Arokana', 'red onion', 'wasabi and lemon for the noodles', 'Kurobuta rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat and seafood broths.' },
      pantheon: 'Momodani\'s playful six-seat lab: Shoyu Animal and homemade fettuccine tsukemen.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B526506947/', '"The rich umami and sweetness from the animal-based broth" (Shoyu Animal) — placed high.'],
        oiliness: [R + 'B537193174/', '"The shoyu animal had a gentle broth" — mid-scale.'],
        clarity: [R + 'B537193174/', 'A "gentle broth" in the Shoyu Animal; richer tsukemen dips — mid-scale.'],
        tare_strength: [R + 'B537043074/', '"The saltiness was just right" (shio ramen) — mid-scale.'],
        noodle_firmness: [R + 'B501792176/', '"Homemade flat, thick fettuccine-style, with a nice chewy texture" — placed high.'],
        aroma_punch: [R + 'B536913251/', 'Inventive limited bowls; "a creamy texture and a hint of spiciness" (tantan tsukemen) — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B526506947/', R + 'B501792176/', R + 'B537193174/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; staff explain how to eat the noodles (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区勝山4-6-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区勝山四丁目6番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501792176/', R + 'B526506947/', R + 'B537043074/'],
    price_note: 'Prices from November 2025–October 2026 reviews; limited bowls rotate.', last_checked: TODAY, items: [
      it('醤油アニマル', 'Shoyu Animal', 'Shoyu Animal', '¥1,600', 'Ramen', 'no', 'no', 'October 2026 photo caption.', 'shoyu_animal'),
      it('いりこ醤油', '', 'Iriko soba shoyu', '¥1,000', 'Ramen', 'no', 'no', 'November 2025; October 2026 photo caption.', 'iriko'),
      it('', '', 'Shio ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Antoki no Shio', '¥1,600', 'Ramen', 'no', 'no', 'April 2026.', 'antoki'),
      it('カレーラーメン', '', 'Curry ramen', '', 'Ramen', 'no', 'no', 'October 2026 photo caption.', 'curry'),
      it('', '', 'Limited tsukemen (rotating)', '¥1,400–1,600', 'Limited', 'no', 'no', 'August–October 2026.', 'gentei'),
      it('', '', 'Kurobuta rice', '¥400', 'Rice', 'no', 'no', 'October 2026.', 'kurobuta_rice'),
      it('', '', 'Large noodles', '+¥200', 'Toppings', 'no', 'no', 'October 2026.', 'large'),
    ] }, {
    cuisine: '独創的なラーメン・醤油アニマル1,600円: 動物系スープの濃い旨みと甘み・いりこ醤油1,000円・塩ラーメン1,000円・酸味のある赤玉ねぎの Antoki no Shio 1,600円・Neo Shio Ramen Apple (ある日だけ)・魚介の出汁と牛脂のカレーラーメン・自家製の平打ち太麺 (フェットチーネ風)・入れ替わる限定つけ麺: Aka Buta DDX と秋の梨のつけ麺1,600円、黒豚とうなぎ出汁のわさびつけ麺1,400円、いちじくとタコの夏の塩つけ麺1,600円、担々つけ麺・ときどき鶏白湯・Aka Buta DDX チャーシュー2枚500円・Ajitama Arokana 200円・Kurobuta rice 400円・Rainbow wonton・大盛り+200円・6席',
    neighborhood: '天王寺区勝山4-6-3。JR桃谷駅南口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ、カレー。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介のスープ、豚のチャーシュー、いりこ、限定つけ麺のうなぎの骨。',
    notes: '[ラーメン・桃谷、自家製フェットチーネ麺の独創的なラーメン] 桃谷から5分、ラーメン店に見えない外観の6席の店で、2020年開店。定番の柱と、遊び心のある限定が次々に出る。何人もが一番に挙げるのは醤油アニマル(1,600円)で、動物系スープの深く甘い旨みたっぷり、いりこ醤油と塩(各1,000円)はシンプル。限定のつけ麺は自家製の平打ち太麺 (フェットチーネ風) で、梨と Aka Buta DDX の豚のつけ麺、うなぎ出汁、いちじくとタコの塩つけ汁など。麺はまず塩とレモンでとすすめられる。今のメニューは Instagram で確認を。注文はタブレット。木曜休み。',
  });
}

save();
