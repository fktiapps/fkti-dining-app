// Osaka sweep (2-mile circle around Dotonbori), batch 139 — ramen phase (all OMNI).
//   + ラーメン人生JET600 (ultra-rich chicken paitan tori soba on homemade noodles, a JET branch since 2011; Tamatsukuri)
//   + 麺処 全て (spoon-standing rich chicken soba, kombu-water tsukemen, monthly limited bowls; lunch only; Momodani Koreatown)
//   + らーめん なんぞ屋 (chicken-and-pork white broth in fish, curry, spicy and garlic versions; run by two people; Momodani) — mom_and_pop
//   + 大連閣 (alley-side local Chinese of about 60 years: ¥500 ramen, hand-rolled gyoza, yakisoba; run by two people; Kujo) — mom_and_pop
//   - skipped ふく流らーめん 轍 総本家 27088045: chain; ふく流らーめん 轍 本町本店 is already in data.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 139);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27088045', 'chain: ふく流らーめん 轍 本町本店 (osaka_fukuryu_ramen_wadachi_honmachi) already in data');

// ================================================================ ラーメン人生JET600
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27059047/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_jinsei_jet600_tamatsukuri', name: 'ラーメン人生JET600 (Ramen Jinsei JET 600)', category: 'OMNI',
    lat: 34.674176, lng: 135.534389, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan with seafood; pork chashu and back fat; naruto; egg.',
    hours_raw: 'Daily 11:00–15:00 and 18:00–22:00; closed over the New Year; hours may change (Tabelog). Ticket machine by the entrance; known for lines (October 2026). Cash only; ashtray outside (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Obase 1-3-2 (Higashinari-ku), a little east along Nagahori-dori — 2 min from JR Tamatsukuri Stn',
    cuisine: 'Rich chicken paitan · tori soba (chicken noodle soup): chicken bones and hen simmered 10+ hours with seafood into an ultra-rich chicken paitan, special soy, homemade medium-thick straight noodles of domestic wheat, thin chashu, menma, naruto, white onion, mitsuba; seasoned egg topping · shoyu ramen, special ¥1,400 with four chashu and an egg · aburi buta soba ¥950 · curry ramen · limited bowls such as Royal Pork chashu noodle ¥1,700 (Kirishima pork) and Royal Pork back-fat noodle, summer zaru soba · pork rice · bottled beer ¥600 · 9 counter seats and 2 tables',
    website: null, gmaps: gm('ラーメン人生JET600'), menu_url: null,
    notes: "[Ramen · ultra-rich chicken paitan tori soba by Tamatsukuri] A branch of Ramen Jinsei JET from Fukushima, open here since 2011 and known for lines. The signature tori soba is an ultra-rich chicken paitan, simmered over ten hours with seafood for depth, on homemade medium-thick noodles of domestic wheat with thin chashu, naruto, white onion and mitsuba: intense, yet balanced enough that it doesn't wear you out. A lighter shoyu ramen (special ¥1,400) and an aburi buta soba (¥950) are the alternatives, and limited bowls like the Royal Pork chashu noodle (¥1,700) come and go. One diner found the shoyu good but pricey. Ticket machine by the door; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 July 2011 (Tabelog); a branch of Ramen Jinsei JET in Fukushima, Osaka (October 2026 review).', background: 'Chicken paitan ramen shop (Tabelog; 2026 reviews).', philosophy: 'Chicken bones and hen simmered over 10 hours; homemade noodles of domestic wheat (October 2026 reviews).', specialty: 'Rich chicken paitan tori soba.',
      anecdotes: [
        { text: '"The soup is made by simmering chicken bones and water for over 10 hours, adding seafood to concentrate the flavors, resulting in an ultra-rich chicken paitan broth… homemade medium-thick straight noodles…" — October 2026, tori soba.', source: R + 'B537910301/' },
        { text: '"The chicken simmered ramen… was rich yet not overwhelming, perfectly balanced with the light chashu. The thick broth clung beautifully to the noodles…" — October 2026.', source: R + 'B538028324/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン人生JET600、大阪市東成区東小橋1-3-2、JR玉造駅から徒歩2分、毎日11:00〜15:00・18:00〜22:00、年末年始休み、カード・電子マネー・QR不可、17席 (カウンター9、4人掛けテーブル2)、店外に灰皿、2011年7月18日開店。口コミ(2026年7〜10月): 福島区の Ramen Jinsei JET の店、行列の人気店、鶏ガラと親鶏を10時間以上炊き魚介で深めた超濃厚な鶏白湯の鶏そば、特製醤油、国産小麦の自家製中太ストレート麺、薄いチャーシュー、メンマ、なると、白ねぎ、三つ葉、味玉、醤油ラーメン (特製1,400円、チャーシュー4枚と味玉)、Aburi Buta Soba950円、カレーラーメン、限定のRoyal Pork のチャーシュー麺1,700円 (Kirishima の豚)、Royal Pork の背脂麺、夏の Zaru soba、豚ご飯、瓶ビール600円、入口の券売機、醤油は値段の割にという声。',
      confidence: 'medium', sources: [TB, R + 'B497913651/', R + 'B537901415/', R + 'B537910301/', R + 'B538028324/', R + 'B538192798/', R + 'B9939797/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade medium-thick straight noodles of domestic wheat, chewy and smooth (2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen'],
      signature_bowl: 'Tori soba (chicken noodle soup) (October 2026).',
      chashu: 'Thin-sliced chashu; Royal Pork chashu in limited bowls (2026).',
      notable_toppings: ['naruto', 'white onion', 'mitsuba', 'menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tamatsukuri\'s 10-hour chicken paitan on homemade domestic-wheat noodles.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537910301/', '"An ultra-rich chicken paitan broth" — top of scale.'],
        oiliness: [R + 'B538028324/', '"Rich yet not overwhelming" — mid-scale.'],
        clarity: [R + 'B538028324/', '"The thick broth clung beautifully to the noodles" — bottom of scale.'],
        tare_strength: [R + 'B497913651/', '"The soy sauce isn\'t too strong" (Royal Pork, clear soup) — mid-scale.'],
        noodle_firmness: [R + 'B537910301/', '"Providing a chewy texture that emphasizes a smooth mouthfeel" — placed high.'],
        aroma_punch: [R + 'B537910301/', '"The intense chicken flavor fills your mouth, followed by a burst of seafood essence" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537910301/', R + 'B538028324/', R + 'B9939797/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東成区東小橋1-3-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東成区東小橋一丁目3番2号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B497913651/', R + 'B537901415/', R + 'B537910301/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tori soba (rich chicken paitan)', '', 'Ramen', 'no', 'no', 'October 2026.', 'torisoba'),
      it('', '', 'Special shoyu ramen', '¥1,400', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Aburi buta soba', '¥950', 'Ramen', 'no', 'no', 'July 2026.', 'abuributa'),
      it('', '', 'Royal Pork chashu noodle (limited)', '¥1,700', 'Limited', 'no', 'no', 'October 2026.', 'royal'),
      it('', '', 'Curry ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'curry'),
      it('', '', 'Pork rice', '', 'Rice', 'no', 'no', 'October 2026.', 'butameshi'),
      it('', '', 'Bottled beer', '¥600', 'Drinks', 'no', 'ask', 'July 2026.', 'beer'),
    ] }, {
    cuisine: '濃厚鶏白湯・鶏そば: 鶏ガラと親鶏を10時間以上炊き、魚介で深めた超濃厚な鶏白湯に特製醤油、国産小麦の自家製中太ストレート麺、薄いチャーシュー、メンマ、なると、白ねぎ、三つ葉、味玉のトッピング・醤油ラーメン、特製はチャーシュー4枚と味玉で1,400円・Aburi Buta Soba950円・カレーラーメン・限定: Kirishima の豚のRoyal Pork のチャーシュー麺1,700円、Royal Pork の背脂麺、夏の Zaru soba・豚ご飯・瓶ビール600円・カウンター9席とテーブル2卓',
    neighborhood: '東成区東小橋1-3-2、長堀通を少し東へ。JR玉造駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。魚介入りの鶏白湯、豚のチャーシューと背脂、なると、卵。',
    notes: '[ラーメン・玉造近く、超濃厚な鶏白湯の鶏そば] 福島の Ramen Jinsei JET の店で、2011年からここで営業、行列で知られる。看板の鶏そばは10時間以上炊いて魚介で深みを出した超濃厚な鶏白湯で、国産小麦の自家製中太麺に薄いチャーシュー、なると、白ねぎ、三つ葉。濃いのに疲れない釣り合い。軽めの醤油ラーメン (特製1,400円) やAburi Buta Soba (950円) もあり、Royal Pork のチャーシュー麺 (1,700円) などの限定も入れ替わる。醤油はおいしいが値段の割にという声も。入口の券売機、現金のみ。',
  });
}

// ================================================================ 麺処 全て
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27146800/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '16:00']);
  put({
    id: 'osaka_mendokoro_subete_momodani', name: '麺処 全て (Mendokoro Subete)', category: 'OMNI',
    lat: 34.66023, lng: 135.533207, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; strong soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rich chicken soup; seafood dashi; pork chashu; egg.',
    hours_raw: 'Mon, Tue, Thu–Sun 10:00–16:00, may close early when sold out; closed Wed; hours may change (Tabelog). Lines of 20 at opening on holidays; about 40 minutes to a bowl (October 2026). Cash only (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Momodani 2-17-12 (Ikuno-ku), facing Koreatown — 527 m from JR Momodani Stn',
    cuisine: 'Ultra-rich chicken soba · rich chicken soba ¥1,050 (large ¥1,150–1,250): a chicken soup so thick a ladle stands in it, dark, sharp soy, medium-thick noodles, rare pork shoulder and belly or thigh chashu, square-cut menma, green onion, diced onion and green pepper · chopped Aomori garlic topping · rich tsukemen, large ¥1,400: oily rich chicken, soy and seafood dip, thick flat noodles in kombu water, katsuobushi powder on the side, chashu served apart · limited bowls: grilled-sanma soba with chicken paitan, sudachi and shiso (large ¥1,400) and sanma soboro rice ¥300; chilled mackerel niboshi ramen; rich chicken soba curry on the 20th · pork yukke rice ¥550 · seasoned egg ¥150 · free Tsuruhashi kimchi · bottled beer · 8 counter seats',
    website: null, gmaps: gm('麺処 全て'), menu_url: null,
    notes: "[Ramen · spoon-standing rich chicken soba by Momodani Koreatown] A clean, stylish eight-seat counter facing Koreatown near Momodani, open since January 2025, lunch hours only, with lines of 20 at opening on holidays. The rich chicken soba (¥1,050) is so thick the ladle stands upright, dark with sharp soy and deeply chicken, clinging to every noodle, brightened by diced onion and green pepper; add chopped Aomori garlic. The kombu-water tsukemen and monthly limited bowls (grilled sanma soba, chilled mackerel niboshi, a curry version on the 20th) are worth chasing. Free Tsuruhashi kimchi on the side. Two diners found the noodles too soft. One diner noted a Bib Gourmand. Cash only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 January 2025 (Tabelog)', background: 'Rich chicken ramen counter (Tabelog; 2025–2026 reviews); one diner mentions a Michelin Bib Gourmand listing (May 2026 review).', philosophy: null, specialty: 'Ultra-rich chicken soba; kombu-water tsukemen; limited bowls.',
      anecdotes: [
        { text: '"The broth was incredibly thick, so much so that the ladle stood upright in it. Despite its richness, it had no unpleasant odor…" — October 2026, rich chicken soba with egg and garlic, ¥1,300.', source: R + 'B515842765/' },
        { text: '"The broth is made from a generous amount of grilled fresh sanma from Hokkaido combined with chicken paitan… The sanma flavor is so strong that it almost overpowers the chicken." — October 2026, rich grilled-sanma soba, large ¥1,400.', source: R + 'B503317362/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 全て、大阪市生野区桃谷2-17-12、桃谷から527m、月・火・木〜日 10:00〜16:00 (売り切れ次第終了)、水休み、カード・電子マネー・QR不可、カウンター8席、2025年1月11日開店。口コミ(2025年3月〜2026年10月): コリアタウンの前、昼のみ、休日は開店前に20人ほどの行列で40分待ち、濃厚鶏そば1,050円 (大盛り1,150〜1,250円、レンゲが立つほどの濃さ、濃い醤油のキレ、中太麺、豚肩ロースのレアと豚バラかもものチャーシュー、角切りのメンマ、ねぎ、刻み玉ねぎとピーマン)、青森産の刻みにんにく、濃厚つけ麺 (大盛り1,400円、油の多い鶏と醤油と魚介のつけ汁、昆布水に浸した太い平打ち麺、別皿の節粉、別盛りのチャーシュー)、限定の焼きさんまそば (北海道のさんまと鶏白湯、すだち、大葉、大盛り1,400円) とさんまそぼろご飯300円、冷やしのサバ煮干しラーメン、20日限定の濃厚鶏そばカレー、豚ユッケ丼550円、味玉150円、無料の鶴橋キムチ、瓶ビール、麺が柔らかめという声が二つ、ビブグルマンに載ったという声、清潔でおしゃれな店内。',
      confidence: 'medium', sources: [TB, R + 'B503317362/', R + 'B503809814/', R + 'B515842765/', R + 'B537455549/', R + 'B537736810/', R + 'B537796697/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles, cooked soft; thick flat noodles in kombu water for the tsukemen (2025–2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'tsukemen'],
      signature_bowl: 'Rich chicken soba, ¥1,050 (October 2026).',
      chashu: 'Rare pork shoulder with pork belly or thigh (2025–2026).',
      notable_toppings: ['diced onion', 'green pepper', 'square-cut menma', 'Aomori garlic', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Momodani\'s spoon-standing chicken soba, lunch only, by Koreatown.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 2, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B515842765/', '"So thick that the ladle stood upright in it" — top of scale.'],
        oiliness: [R + 'B503317362/', '"Rich and creamy, with a high oil content" (March 2025) — placed high.'],
        clarity: [R + 'B537796697/', '"The soup was so thick that I could almost stand my chopsticks in it" — bottom of scale.'],
        tare_strength: [R + 'B503317362/', '"A strong soy sauce flavor… a sharp soy sauce" (March 2025) — placed high.'],
        noodle_firmness: [R + 'B537455549/', '"The noodles were a bit too soft for my liking" — placed low.'],
        aroma_punch: [R + 'B537796697/', '"You can really taste the umami of the chicken, and it\'s quite impactful!" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B515842765/', R + 'B537796697/', R + 'B537455549/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; long holiday lines; cash only (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市生野区桃谷2-17-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市生野区桃谷二丁目17番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503317362/', R + 'B537736810/', R + 'B515842765/'],
    price_note: 'Prices from 2025–October 2026 reviews; limited bowls change monthly.', last_checked: TODAY, items: [
      it('', '', 'Rich chicken soba', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'noko_tori'),
      it('', '', 'Rich tsukemen, large', '¥1,400', 'Tsukemen', 'no', 'no', 'April 2026.', 'tsukemen'),
      it('', '', 'Rich grilled-sanma soba, large (limited)', '¥1,400', 'Limited', 'no', 'no', 'October 2026.', 'sanma'),
      it('', '', 'Sanma soboro rice', '¥300', 'Rice', 'no', 'no', 'October 2026.', 'sanma_soboro'),
      it('', '', 'Pork yukke rice bowl', '¥550', 'Rice', 'no', 'no', 'March 2025.', 'yukke'),
      it('', '', 'Seasoned egg', '+¥150', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '超濃厚な鶏そば・濃厚鶏そば1,050円 (大盛り1,150〜1,250円): レンゲが立つほど濃い鶏のスープ、黒く濃い醤油のキレ、中太麺、豚肩ロースのレアと豚バラかもものチャーシュー、角切りのメンマ、ねぎ、刻み玉ねぎとピーマン・青森産の刻みにんにくのトッピング・濃厚つけ麺、大盛り1,400円: 油の多い濃厚な鶏と醤油と魚介のつけ汁、昆布水に浸した太い平打ち麺、別皿の節粉、別盛りのチャーシュー・限定: 鶏白湯にすだちと大葉の焼きさんまそば (大盛り1,400円) とさんまそぼろご飯300円、冷やしのサバ煮干しラーメン、20日の濃厚鶏そばカレー・豚ユッケ丼550円・味玉150円・無料の鶴橋キムチ・瓶ビール・カウンター8席',
    neighborhood: '生野区桃谷2-17-12、コリアタウンの前。桃谷駅から527m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、強い醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。濃厚な鶏のスープ、魚介のだし、豚のチャーシュー、卵。',
    notes: '[ラーメン・桃谷のコリアタウン前、レンゲが立つ濃厚鶏そば] 桃谷近く、コリアタウンの前にある清潔でおしゃれなカウンター8席の店で、2025年1月開店、昼のみ営業、休日は開店時に20人ほど並ぶ。濃厚鶏そば (1,050円) はレンゲが立つほど濃く、黒い醤油のキレと深い鶏の旨みが麺の一本一本にからみ、刻み玉ねぎとピーマンが爽やかさを足す。青森産の刻みにんにくも。昆布水つけ麺や月替わりの限定 (焼きさんまそば、冷やしのサバ煮干し、20日のカレー) も狙いたい。鶴橋のキムチは無料。麺が柔らかめという声が二つ。ビブグルマンに載ったという声も。現金のみ。水曜休み。',
  });
}

// ================================================================ らーめん なんぞ屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27087978/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_nanzoya_momodani', name: 'らーめん なんぞ屋 (Ramen Nanzoya)', category: 'OMNI',
    lat: 34.661972, lng: 135.533635, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; curry roux; tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-and-pork white broth; fish; chashu; egg.',
    hours_raw: 'Mon, Wed–Sun 11:00–15:00 (last order 14:45) and 18:00–22:00 (last order 21:30); closed Tue (Tabelog). One ramen per person (October 2026). Cash only (Tabelog). Run by two people (June 2026).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Momodani 2-6-16 (Ikuno-ku) — 6 min from Kintetsu Tsuruhashi Stn east exit',
    cuisine: 'Chicken-and-pork white broth ramen · chicken-and-pork ramen: milky, mild-textured, creamy chicken and pork paitan · chicken-and-pork fish ramen · spicy chicken-and-pork ramen · chicken-and-pork curry ramen ¥1,000, spice to order · curry tsukemen · chicken-and-pork garlic ramen, garlic-heavy · chicken-and-pork vegetable ramen ¥1,060 · light shoyu ramen with bean sprouts · homemade medium-thick noodles; standout menma; tender chashu · chashu rice bowl · 5 counter seats and 2 tables',
    website: null, gmaps: gm('らーめん なんぞ屋'), menu_url: null,
    notes: "[Ramen · chicken-and-pork white broth in many versions, Momodani] A small eleven-seat neighborhood ramen shop between Tsuruhashi and Momodani, open since 2015 and run by two people. Everything builds on a creamy, milky chicken-and-pork paitan: plain, with fish, spicy, garlic-loaded, with vegetables (¥1,060) or as a curry ramen (¥1,000) whose spices sit nicely on the broth; there's also a curry tsukemen and a light shoyu. Homemade medium-thick noodles are chewy, the chashu is tender, and the menma is unusually good. One diner found the spicy version short on broth flavor and recommends the plain. Add a chashu rice bowl. One ramen per person. Cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 October 2015 (Tabelog)', background: 'Neighborhood ramen shop run by two people (June 2026 review).', philosophy: null, specialty: 'Chicken-and-pork white-broth ramen in several styles.',
      anecdotes: [
        { text: '"It\'s a blend of chicken and pork white broth with curry. It\'s creamy and rich, with the umami of the chicken and pork perfectly complemented by the curry spices!… And surprisingly, the menma at Nanzoya is exceptional." — June 2026, chicken-and-pork curry ramen ¥1,000.', source: R + 'B138401637/' },
        { text: '"As soon as the bowl arrived, the aroma of garlic filled the air… The broth, rich with the flavors of chicken and pork, paired perfectly with the garlic." — June 2026, chicken-and-pork garlic ramen.', source: R + 'B530365561/' },
      ],
      japanese_sources_summary: '食べログ: らーめん なんぞ屋、大阪市生野区桃谷2-6-16、近鉄鶴橋駅東口から徒歩6分、月・水〜日 11:00〜15:00 (L.O. 14:45)・18:00〜22:00 (L.O. 21:30)、火休み、カード・電子マネー・QR不可、11席 (カウンター5、2人掛け1、4人掛け1)、2015年10月4日開店。口コミ(2025年9月〜2026年10月): 鶏と豚の白湯 が土台、鶏と豚のラーメン、鶏と豚の魚、辛い鶏と豚の、鶏と豚のカレーラーメン1,000円 (辛さを選べる)、カレーつけ麺、にんにくたっぷりの鶏と豚のにんにくラーメン、鶏と豚の野菜ラーメン1,060円、もやしのあっさり醤油ラーメン、自家製の中太麺、柔らかいチャーシュー、メンマが絶品、チャーシュー丼、一人一杯、二人で営業、辛い鶏と豚のは鶏と豚の味が弱かったという声、乳白色でまろやかなスープ。',
      confidence: 'medium', sources: [TB, R + 'B138401637/', R + 'B508710101/', R + 'B530135251/', R + 'B530365561/', R + 'B532000685/', R + 'B537955464/'] },
    ramen: {
      broth_base: ['chicken', 'pork'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade medium-thick noodles, chewy; one diner described them as thin and straight (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Chicken-and-pork ramen; chicken-and-pork curry ramen ¥1,000 (2026).',
      chashu: 'Very tender, well-seasoned chashu (June 2026).',
      notable_toppings: ['menma', 'garlic', 'vegetables', 'curry', 'chashu rice bowl'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork broth.' },
      pantheon: 'Momodani\'s two-person chicken-and-pork paitan shop, from plain to curry to garlic.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B138401637/', '"It\'s creamy and rich" — placed high.'],
        oiliness: [R + 'B138401637/', '"Looked thick, with a low oil content" — placed low.'],
        clarity: [R + 'B532000685/', '"The base soup was milky" — bottom of scale.'],
        tare_strength: [R + 'B532000685/', '"A mild texture… a comforting and subtle deliciousness" — mid-scale.'],
        noodle_firmness: [R + 'B138401637/', '"The homemade medium-thick noodles were chewy" — placed high.'],
        aroma_punch: [R + 'B530365561/', 'Garlic version "filled the air"; plain is subtle — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B138401637/', R + 'B532000685/', R + 'B530365561/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cozy counter; one ramen per person (October 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市生野区桃谷2-6-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市生野区桃谷二丁目6番16号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B138401637/', R + 'B532000685/'],
    price_note: 'Prices from June–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-and-pork ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tonpaku'),
      it('', '', 'Chicken-and-pork curry ramen', '¥1,000', 'Ramen', 'no', 'no', 'June–July 2026.', 'curry'),
      it('', '', 'Chicken-and-pork garlic ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'garlic'),
      it('', '', 'Chicken-and-pork vegetable ramen', '¥1,060', 'Ramen', 'no', 'no', 'July 2026.', 'yasai'),
      it('', '', 'Spicy chicken-and-pork ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kara'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
    ] }, {
    cuisine: '鶏と豚の白湯のラーメン・鶏と豚のラーメン: 乳白色でまろやかな、クリーミーな鶏と豚の白湯・鶏と豚の魚介ラーメン・辛い鶏と豚のラーメン・鶏と豚のカレーラーメン1,000円 (辛さを選べる)・カレーつけ麺・にんにくたっぷりの鶏と豚のにんにくラーメン・鶏と豚の野菜ラーメン1,060円・もやしのあっさり醤油ラーメン・自家製の中太麺、絶品のメンマ、柔らかいチャーシュー・チャーシュー丼・カウンター5席とテーブル2卓',
    neighborhood: '生野区桃谷2-6-16。近鉄鶴橋駅東口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、カレーのルウ、たれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚の白湯、魚介、チャーシュー、卵。',
    notes: '[ラーメン・桃谷、いろいろな形で味わう鶏と豚の白湯] 鶴橋と桃谷の間にある11席の小さな町のラーメン店で、2015年開店、二人で営業。どれもクリーミーで乳白色の鶏と豚の白湯が土台: そのまま、魚介入り、辛い、にんにくたっぷり、野菜入り (1,060円)、スパイスがスープに合うカレーラーメン (1,000円)。カレーつけ麺やあっさり醤油も。自家製の中太麺はもちもち、チャーシューは柔らかく、メンマが格別。辛い鶏と豚のはスープの味が弱く、ふつうのがいいという声も。チャーシュー丼も。一人一杯。現金のみ。火曜休み。',
  });
}

// ================================================================ 大連閣
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27052965/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:00', '19:00']);
  put({
    id: 'osaka_dairen_kaku_kujo', name: '大連閣 (Dairen Kaku)', category: 'OMNI',
    lat: 34.67687, lng: 135.471222, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-rolled gyoza wrappers; wheat noodles; sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp and jellyfish; meat broth.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:00–19:00; Sun 11:30–14:00; hours may change (Tabelog). One August 2026 review gives 11:30–20:00 and irregular closings. Look for the red noren: if it hangs, the shop is open (Tabelog). Cash only (Tabelog). Run by two people (2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['11:30', '14:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kujo 3-4-2 (Nishi-ku), off the shopping street in an alley, hard to find — about 3 min from Kujo Stn',
    cuisine: 'Old-style local Chinese · ramen ¥500: light broth with black pepper and a touch of garlic oil, thin noodles, bean sprouts, green onion, menma, thick chashu · gyoza made to order with wrappers rolled on the spot, ten bite-size pieces, crisp bottoms; chili oil · yakisoba ¥550, the sauce made first and the boiled noodles cooked in it, with vegetables, meat and shrimp · fried rice ¥550 with pork, shrimp and pickled ginger · wonton noodles · chuka-don · roast pork · chilled chuka ¥700 with jellyfish, canned mandarin and real mustard · large beer ¥600 · 7 counter seats',
    website: null, gmaps: gm('大連閣'), menu_url: null,
    notes: "[Chinese · a 60-year-old alley Chinese counter with ¥500 ramen, Kujo] A seven-seat counter tucked into an alley off the Kujo shopping street, about 60 years old by one diner's count and run by two people whose easy banter is part of the charm. The gyoza are made after you order, wrappers rolled on the spot, ten bite-size pieces with crisp bottoms. The ramen (¥500) is a light, peppery bowl with thick chashu; the yakisoba (¥550) is cooked in a sauce made first, so it's moist rather than fried. There's also fried rice, wonton noodles, a chuka-don and, in summer, a chilled chuka with jellyfish and real mustard. Prices are remarkably low. Short hours; look for the red noren. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'About 60 years in business (August 2026 review).', background: 'Local Chinese counter run by two people (2026 reviews).', philosophy: null, specialty: 'Made-to-order gyoza; ramen; yakisoba.',
      anecdotes: [
        { text: '"The gyoza is made fresh after the order is placed, with the skin rolled out and the filling wrapped inside… The crispy sear and the chewy outer skin make it another dish that pairs well with drinks." — July 2026.', source: R + 'B431317715/' },
        { text: '"A classic bowl topped with bean sprouts, green onions, menma (bamboo shoots), and chashu (braised pork). The broth has a light flavor with a hint of black pepper, which paired well with the thin noodles." — August 2026, ramen ¥500.', source: R + 'B486696578/' },
      ],
      japanese_sources_summary: '食べログ: 大連閣、大阪市西区九条3-4-2、九条駅から西九条方面へ約700m、商店街の切れ目を右に、赤いのれんが出ていれば営業中、初めてだと見つけにくい、月〜土 11:30〜14:00・17:00〜19:00、日 11:30〜14:00、カード・電子マネー・QR不可、カウンター7席。口コミ(2020年10月〜2026年10月): 創業60年ほどという声、二人で営業、ラーメン500円 (あっさりで黒胡椒とにんにく油、細麺、もやし、ねぎ、メンマ、厚いチャーシュー)、注文後に皮を伸ばして包む餃子 (ひと口サイズ10個、底はカリッと)、自家製のラー油、焼きそば550円 (先にソースを作りゆでた麺を合わせる、野菜、肉、エビ)、炒飯550円 (豚、エビ、ねぎ、紅しょうが)、ワンタン麺、中華丼、焼豚、冷やし中華700円 (くらげ、缶詰のみかん、チューブではないからし)、大瓶ビール600円、現金のみ、2026年8月は11:30〜20:00と定休日不定という声。',
      confidence: 'medium', sources: [TB, R + 'B431317715/', R + 'B486696578/', R + 'B520217012/', R + 'B533137566/', R + 'B534518792/', R + 'B534661827/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally at the counter; warm send-off (2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区九条3-4-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区九条三丁目4番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B486696578/', R + 'B534518792/', R + 'B431317715/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥500', 'Noodles', 'no', 'no', 'August 2026.', 'ramen'),
      it('', '', 'Gyoza (10 bite-size, made to order)', '', 'Dishes', 'no', 'no', 'July 2026.', 'gyoza'),
      it('', '', 'Yakisoba', '¥550', 'Noodles', 'no', 'no', 'August 2026.', 'yakisoba'),
      it('', '', 'Fried rice', '¥550', 'Rice', 'no', 'no', 'August 2026.', 'chahan'),
      it('', '', 'Wonton noodles', '', 'Noodles', 'no', 'no', 'October 2026.', 'wonton'),
      it('', '', 'Chilled chuka (summer)', '¥700', 'Noodles', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Large bottled beer', '¥600', 'Drinks', 'no', 'ask', 'August 2026.', 'beer'),
    ] }, {
    cuisine: '昔ながらの町中華・ラーメン500円: 黒胡椒とにんにく油のあっさりスープ、細麺、もやし、ねぎ、メンマ、厚いチャーシュー・注文後に皮を伸ばして包む餃子、ひと口サイズ10個、底はカリッと、ラー油・先にソースを作りゆでた麺を合わせる焼きそば550円、野菜、肉、エビ・豚、エビ、紅しょうがの炒飯550円・ワンタン麺・中華丼・焼豚・夏はくらげ、缶詰のみかん、チューブではないからしの冷やし中華700円・大瓶ビール600円・カウンター7席',
    neighborhood: '西区九条3-4-2、商店街から入った路地で見つけにくい。九条駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。その場で伸ばす餃子の皮、小麦の麺、ソース。',
    vegan_detail: 'ヴィーガンではありません。豚、エビ、くらげ、肉のスープ。',
    notes: '[中華・九条、500円のラーメンがある60年続く路地の町中華] 九条の商店街から路地に入ったところにあるカウンター7席の店で、60年ほど続くという声もあり、二人で営業、その掛け合いも魅力。餃子は注文を受けてから皮を伸ばして包み、ひと口サイズが10個で底はカリッと。ラーメン(500円)は胡椒の効いたあっさりの一杯に厚いチャーシュー、焼きそば(550円)は先にソースを作ってから麺を合わせるので、焼くというよりしっとり。炒飯、ワンタン麺、中華丼、夏はくらげとチューブではないからしの冷やし中華も。値段が驚くほど安い。営業時間は短く、赤いのれんが目印。現金のみ。',
  });
}

save();
