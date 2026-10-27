// Osaka sweep (2-mile circle around Dotonbori), batch 57 — ramen phase, nearest first (all OMNI).
//   + 麺屋 丈六 なんば店 (Tabelog 100 every year 2017–2025, 7-seat Takaida-style black chuka soba)
//   + 天地人 日本橋店 (Fukuchan-group shoyu ramen by Kuromon, open to 3 am)
//   + 麺屋 まるきゅう (8 am–3 am noodle shop: tsukemen with udon, soba or Chinese noodles — filed 'udon_soba')
//   + 俺たちのカレー家 (10-seat Osaka-style curry on Nansan-dori — filed 'curry')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 57);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺屋 丈六 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084754/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://jouroku.blog.fc2.com/';
  const D = day(['11:30', '15:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_menya_joroku_namba', name: '麺屋 丈六 なんば店 (Menya Joroku Namba)', category: 'OMNI',
    lat: 34.66368, lng: 135.504869, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; dark shoyu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; broth not described as meat-free; niboshi in the shio.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:30–15:00 and 18:00–21:00; closed Wednesday. On the first Sunday of the month: 7:00–10:00 and 11:30–15:00, no evening service (Tabelog). Temporary closures posted on the shop\'s blog. Lines at lunch, with a waiting area (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 6-16 — down a narrow alley, about 4 min from NGK; Nippombashi Stn exit 5',
    cuisine: 'Takaida-style chuka soba, Tabelog Ramen 100 every year 2017–2025 · near-black shoyu broth that is lighter than it looks, black pepper, medium-thick straight noodles, thin chashu, menma, green onion · small ¥900, regular ¥1,000 · hayazushi ¥200, wrapped in leaves from Wakayama · shrimp shio ramen with sakura shrimp and niboshi · first-Sunday morning ramen · 7 counter seats',
    website: OWN, gmaps: gm('麺屋 丈六 なんば'), menu_url: null,
    notes: "[Ramen · Takaida-style black chuka soba, a Tabelog 100 regular] A seven-seat counter down a narrow alley near NGK, named to Tabelog's ramen 100 every year from 2017 to 2025, with lines and a waiting area at lunch. It opened in 2008 at Tempozan Marketplace and moved to Namba in 2010. The chuka soba is Takaida-style: a broth that looks nearly black and smells strongly of soy, yet drinks lighter and less salty than you'd expect, with black pepper on top. Medium-thick straight noodles soak it up, with thin chashu, menma and green onion. A small is ¥900 and a regular ¥1,000 (October 2026). Add the ¥200 hayazushi, vinegared rice wrapped in leaves from Wakayama. There's also a shrimp shio with sakura shrimp and niboshi, limited bowls such as a garlic ramen on special days, and on the first Sunday of the month it opens at 7 am for morning ramen. A Hokkaido visitor found the soy too assertive. Cash only; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2008 at Tempozan Marketplace 2F; moved to Namba 23 December 2010; renamed Menya Joroku 1 March 2015 (Tabelog)', background: 'Tabelog Ramen WEST/OSAKA 100, 2017–2025 (Tabelog); official blog jouroku.blog.fc2.com.', philosophy: null, specialty: 'Takaida-style chuka soba.',
      anecdotes: [
        { text: '"While the broth looked pitch black, which made me think it would be overly salty, I was amazed by the rich flavor that didn\'t taste salty at all!" — October 2026, chuka soba.', source: R + 'B537588247/' },
        { text: '"The Hayazushi is wrapped in the leaves of the Koshiji plant from Wakayama… The vinegared rice is firm, making it easy to eat quickly." — October 2026, hayazushi ¥200 and chuka soba (regular) ¥1,000.', source: R + 'B537924163/' },
      ],
      japanese_sources_summary: '公式ブログ jouroku.blog.fc2.com。食べログ: 麺屋 丈六 なんば店、大阪市中央区難波千日前6-16、地下鉄日本橋駅5番出口から徒歩6分、月・火・木〜日11:30〜15:00・18:00〜21:00、水曜休み、毎月第1日曜は7:00〜10:00・11:30〜15:00で夜営業なし、臨時休業はブログで、予約不可、カード・電子マネー・QR不可、7席(カウンター)、禁煙、食べログ3.73、ラーメン百名店2017〜2025、2008年12月21日に天保山マーケットプレース2階で開店、2010年12月23日になんばへ移転、2015年3月1日に「麺屋 丈六」に改名。口コミ(2026年10月): 海老の塩ラーメン(煮干しのやさしいコク、桜えび)、記念日限定のにんにくラーメン、真っ黒に見えるが塩辛くないスープ、中太の麺、中華そば小、伝統的な大阪のラーメン、中華そば小900円、NGKから徒歩4分、濃い醤油色のスープに黒胡椒、見た目ほど重くない、中太ストレート麺、薄切りチャーシュー、ねぎ、メンマ、北海道の人には醤油が強く感じたという声、Takaida系の中華そば、ほぼ黒いスープ、味玉、細い路地、行列と待合スペース、早すし200円(和歌山の葉で包む)、中華そば並1,000円。',
      confidence: 'high', sources: [TB, OWN, R + 'B537588247/', R + 'B537924163/', R + 'B537687702/', R + 'B537677099/', R + 'B537795704/', R + 'B128171816/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles, chewy (October 2026).' },
      regional_style: ['Osaka black shoyu'], sub_genre: ['chuka soba'],
      signature_bowl: 'Chuka soba, small ¥900 / regular ¥1,000 (October 2026).',
      chashu: 'Thin slices (October 2026).',
      notable_toppings: ['black pepper', 'menma', 'green onion', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; broth not described.' },
      pantheon: 'Namba\'s Takaida-style landmark: a near-black shoyu that drinks lighter than it looks, at a seven-seat alley counter.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537588247/', '"Despite its appearance, the broth was surprisingly light" — mid-scale.'],
        oiliness: [R + 'B537795704/', '"A fine layer of oil floated on the surface" — placed low.'],
        clarity: [R + 'B537795704/', '"The nearly black soup" — placed low.'],
        tare_strength: [R + 'B537687702/', '"The flavor of soy sauce was prominent"; "a bit salty" (B537677099).'],
        noodle_firmness: [R + 'B537677099/', '"Medium-thick and straight, with a nice chewy texture."'],
        aroma_punch: [R + 'B537687702/', '"The black pepper sprinkled on top provided a nice accent"; prominent soy.'],
      },
      confidence: 'medium', sources: [R + 'B537588247/', R + 'B537687702/', R + 'B537677099/', R + 'B537795704/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; queue in the waiting area.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前6-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前6番16号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537687702/', R + 'B537924163/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (small)', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_s'),
      it('', '', 'Chuka soba (regular)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Hayazushi (leaf-wrapped sushi)', '¥200', 'Sides', 'ask', 'ask', 'October 2026.', 'hayazushi'),
      it('', '', 'Shrimp shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'ebi_shio'),
    ] }, {
    cuisine: 'Takaida系の中華そば、食べログラーメン百名店2017〜2025・見た目より軽いほぼ黒い醤油スープ、黒胡椒、中太ストレート麺、薄切りチャーシュー、メンマ、ねぎ・小900円、並1,000円・和歌山の葉で包んだ早すし200円・桜えびと煮干しの海老塩ラーメン・第1日曜の朝ラー・カウンター7席',
    neighborhood: '難波千日前6-16。細い路地の奥、NGKから徒歩約4分、日本橋駅5番出口',
    gf_detail: 'グルテンフリーではありません。小麦の麺、濃い醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、スープの中身は不明、塩には煮干し。',
    notes: '[ラーメン・百名店常連のTakaida系の黒い中華そば] NGKの近く、細い路地の奥にあるカウンター7席の店で、2017年から2025年まで毎年食べログラーメン百名店に選出、昼は行列で待合スペースも。2008年に天保山マーケットプレースで開店し、2010年になんばへ移転。中華そばはTakaida系で、ほぼ黒く見えて醤油の香りが強いのに、飲むと思ったより軽く塩辛くなく、上には黒胡椒。中太のストレート麺がスープをよく吸い、薄切りのチャーシュー、メンマ、ねぎ。小900円、並1,000円(2026年10月)。和歌山の葉で包んだ酢飯の早すし(200円)もぜひ。桜えびと煮干しの海老塩や、特別な日の限定のにんにくラーメンもあり、毎月第1日曜は朝7時から朝ラー。北海道から来た人には醤油が強すぎたという声も。現金のみ、水曜定休。',
  });
}

// ================================================================ 天地人 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27035023/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.fukuchan.co.jp/index.html';
  const D = day(['11:00', '03:00']);
  put({
    id: 'osaka_tenchijin_nipponbashi', name: '天地人 日本橋店 (Tenchi Jin Nipponbashi)', category: 'OMNI',
    lat: 34.664714, lng: 135.506251, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork-bone broth, chashu.',
    hours_raw: 'Tue–Sun 11:00–3:00 am; closed Monday; closes when sold out; hours may change (Tabelog). Ticket machine. No reservations. No cards or e-money; QR accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 2-4-10, Nippombashi UK Bldg 1F — near Kuromon Market, about 3 min from Nippombashi Stn',
    cuisine: 'Fukuchan-group shoyu ramen · Japanese-style ramen ¥880 from a chicken and pork-bone shoyu broth, medium straight noodles, one slice of chashu, menma, nori and a heap of white and green onion · tsukemen with a lighter dip and thinner noodles, thick pork-belly chashu · pork rice bowl (not late at night) · kimchi or menma ¥150 · canned beer ¥400 · pickled ginger on the counter · 12 seats at an L-shaped counter',
    website: OWN, gmaps: gm('天地人 日本橋店'), menu_url: null,
    notes: "[Ramen · late-night Fukuchan-group shoyu ramen by Kuromon] A 12-seat L-shaped counter near Kuromon Market from the Fukuchan group, the sister of Fukuchan Ramen and Otoko Juku, open until 3 am. The basic Japanese-style ramen (¥880, April and September 2026) is a mild shoyu on chicken and pork bones with medium straight noodles, a thick slice of chashu, menma, nori and plenty of white and green onion. It's crowd-pleasing rather than distinctive. One regular prefers the tsukemen, with a lighter-than-usual dip, thinner noodles and thick, chilled pork-belly chashu. The pork rice bowl is a favorite but isn't served late at night. Sides are just ramen toppings (¥150), and drinks just canned beer (¥400). Prices run higher than at the second branch, with no free extra noodles. Smoking is allowed. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 March 2009 (Tabelog)', background: 'Tenchijin, a Fukuchan-group brand (fukuchan.co.jp); sister of Fukuchan Ramen and Otoko Juku (April 2026 review).', philosophy: null, specialty: 'Shoyu ramen; tsukemen.',
      anecdotes: [
        { text: '"Broth: A soy sauce base made from chicken and pork bones. Noodles: Medium-sized straight noodles. Toppings: One slice of chashu, menma, one sheet of grilled nori, and a generous amount of white and chopped green onions." — April 2026, Japanese-style ramen ¥880.', source: R + 'B526013916/' },
        { text: '"It has a lighter broth, which makes it a bit unique. The noodles are thinner, and it feels more like ramen that has been transformed into tsukemen." — July 2026, tsukemen.', source: R + 'B532319361/' },
      ],
      japanese_sources_summary: '公式 fukuchan.co.jp。食べログ: 天地人 日本橋店、大阪市中央区日本橋2-4-10 日本橋UKビル1F、日本橋駅から徒歩3分、火〜日11:00〜翌3:00、月曜休み、売り切れ次第終了、予約不可、カード・電子マネー不可、QR可、12席(カウンターのみ)、喫煙可、2009年3月4日開店、食券制。口コミ(2026年4〜9月): 和風ラーメン880円、鶏ガラと豚骨の醤油、中細ストレート麺、チャーシュー1枚、メンマ、焼き海苔、たっぷりの白ねぎと青ねぎ、卓上に紅しょうが、L字カウンター12席、福ちゃんラーメンや男塾の姉妹店、2号店より高めで替え玉無料なし、黒門市場の訪日客向け、マイルドで万人向け、つけ麺はあっさりしたつけ汁と細めの麺、豚バラのチャーシューは冷やして厚切り、豚丼は深夜は提供なし、深い旨みのスープと硬めの麺、深夜2時に、トッピングのキムチやメンマ150円、缶ビール400円、スタッフにやる気がないように感じたという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B526013916/', R + 'B532319361/', R + 'B533801522/', R + 'B534922057/', R + 'B535328781/'] },
    ramen: {
      broth_base: ['chicken', 'pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium straight noodles (April 2026); thinner noodles for the tsukemen (July 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Japanese-style ramen, ¥880 (April and September 2026).',
      chashu: 'One thick slice on the ramen; thick chilled pork belly on the tsukemen (July–September 2026).',
      notable_toppings: ['white and green onion', 'menma', 'nori', 'pickled ginger (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork-bone broth.' },
      pantheon: 'Kuromon\'s 3 am shoyu: Fukuchan-group chicken-and-pork ramen under a heap of white and green onion.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B526013916/', '"The flavor is mild and likely to appeal to the general public" — mid-scale.'],
        oiliness: [R + 'B526013916/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B526013916/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B526013916/', 'Mild shoyu — mid-scale.'],
        noodle_firmness: [R + 'B533801522/', '"Noodles with a satisfying and firm texture."'],
        aroma_punch: [R + 'B533801522/', '"An enticing rich aroma" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B526013916/', R + 'B533801522/', R + 'B532319361/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; geared to Kuromon visitors (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-4-10 日本橋UKビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目4番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526013916/', R + 'B535328781/'],
    price_note: 'Prices from April and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Japanese-style ramen', '¥880', 'Ramen', 'no', 'no', 'April and September 2026.', 'wafu'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'July 2026.', 'tsuke'),
      it('', '', 'Pork rice bowl', '', 'Rice', 'no', 'no', 'July 2026; not served late at night.', 'butadon'),
      it('', '', 'Kimchi or menma topping', '¥150', 'Toppings', 'ask', 'ask', 'September 2026.', 'topping'),
      it('', '', 'Canned beer (350 ml)', '¥400', 'Drinks', 'no', 'vegan', 'September 2026.', 'beer'),
    ] }, {
    cuisine: '福ちゃんグループの醤油ラーメン・和風ラーメン880円(鶏ガラと豚骨の醤油、中細ストレート麺、チャーシュー1枚、メンマ、海苔、たっぷりの白ねぎと青ねぎ)・あっさりしたつけ汁と細めの麺のつけ麺、厚切りの豚バラチャーシュー・豚丼(深夜はなし)・キムチやメンマ150円・缶ビール400円・卓上に紅しょうが・L字カウンター12席',
    neighborhood: '日本橋2-4-10 日本橋UKビル1F。黒門市場の近く、日本橋駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・黒門近くの深夜3時までの福ちゃんグループの醤油ラーメン] 黒門市場の近くにあるL字カウンター12席の店で、福ちゃんラーメンや男塾の姉妹店、深夜3時まで営業。基本の和風ラーメン(880円、2026年4月・9月)は鶏ガラと豚骨のマイルドな醤油で、中細のストレート麺に厚めのチャーシュー1枚、メンマ、海苔、たっぷりの白ねぎと青ねぎ。個性より万人向けの味。通う人にはつけ麺派もいて、つけ汁はあっさりめ、麺は細め、冷やした厚切りの豚バラチャーシュー。豚丼も人気ですが深夜は出ません。サイドはラーメンのトッピング(150円)だけ、飲み物は缶ビール(400円)だけ。2号店より値段は高めで替え玉無料もありません。喫煙可。月曜定休。',
  });
}

// ================================================================ 麺屋 まるきゅう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27115940/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:00', '03:00']);
  put({
    id: 'osaka_menya_marukyu_shimanouchi', name: '麺屋 まるきゅう (Menya Marukyu)', category: 'OMNI',
    lat: 34.673432, lng: 135.506438, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and Chinese noodles; soba likely blended; katsu; dipping sauce not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, offal and katsu; fish powder in the dip (July 2026).',
    hours_raw: 'Mon–Sat 8:00–3:00 am; closed Sunday; hours may change (Tabelog). Ticket machine; choose your noodles when seated. Tabelog lists no cards or e-money, with QR accepted; an October 2026 reviewer paid by PayPay or card. Delivery via Demae-can (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 1-21-24, First K Bldg 1F — a short walk from Nagahoribashi Stn',
    cuisine: 'Noodle shop open 8 am to 3 am · four tsukemen (duck, motsu, special and more) with your choice of thick udon, thin udon, Chinese noodles or soba · duck tsukemen with grilled leek and lemon · motsu tsukemen · katsu udon with mizuna · ramen · counter seats, self-service',
    website: null, gmaps: gm('麺屋 まるきゅう 島之内'), menu_url: null,
    notes: "[Noodles · an 8 am–3 am tsukemen and udon shop by Nagahoribashi] A self-service noodle counter a short walk from Nagahoribashi, open from 8 in the morning until 3 at night, so it works for breakfast, lunch or the last stop of the evening. There are four tsukemen, and you pick the noodle when you sit down: thick udon, thin udon, Chinese noodles or soba. Several reviewers pick the Chinese noodles. The motsu tsukemen comes with plenty of offal in a seafood-tinged dip, and the duck tsukemen has duck slices, grilled leek and lemon. There's also katsu udon with mizuna, and ramen. Opinions vary: one diner found the duck dip very sweet and watched staff mix it from cartons. Another noted prices have gone up. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shimanouchi 1-chōme, near Nagahoribashi (Tabelog)', background: 'Udon-and-tsukemen shop with a choice of four noodles (July–August 2026 reviews).', philosophy: null, specialty: 'Tsukemen with a choice of noodle; katsu udon.',
      anecdotes: [
        { text: '"There were four options: thick udon, thin udon, Chinese noodles, and soba. I was in the mood for ramen this morning, so I chose the Chinese noodles." — July 2026, duck tsukemen at 8 am.', source: R + 'B532303712/' },
        { text: '"There was plenty of motsu (offal) in it, and it had a delicious seafood-like flavor!" — August 2026, motsu tsukemen with Chinese noodles.', source: R + 'B533160312/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 まるきゅう、大阪市中央区島之内1-21-24 ファーストKビル1F、長堀橋駅から124m、月〜土8:00〜翌3:00、日曜休み、予約可、カード・電子マネー不可、QR可、禁煙。口コミ(2026年5〜10月): カウンター席が多いうどん店、特製つけ麺(中華麺)、うどん・そば・中華麺から選べる、朝まで営業、カツうどんに水菜、値上がりを感じたという声、朝8時の鴨つけ麺、太いうどん・細いうどん・中華麺・そばの4種、太い平打ちの麺、鴨4切れ・レモン・焼きねぎ・刻みねぎ、つけ汁がとても甘く魚粉の風味、紙パックのつゆを量って混ぜていたという声、ラーメン、セルフサービスで回転が早い、4種のつけ麺、もつつけ麺は魚介の風味、鴨と中華麺は合わなかったという声、PayPayやカードが使えた、出前館でも。',
      confidence: 'low', sources: [TB, R + 'B532303712/', R + 'B533160312/', R + 'B494527118/', R + 'B529309580/', R + 'B532532243/', R + 'B536995997/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; noodle choice asked at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-21-24 ファーストKビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目21番24号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532303712/', R + 'B533160312/', R + 'B529309580/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Duck tsukemen', '', 'Tsukemen', 'no', 'no', 'July and October 2026; choice of noodle.', 'kamo'),
      it('', '', 'Motsu tsukemen', '', 'Tsukemen', 'no', 'no', 'August 2026.', 'motsu'),
      it('', '', 'Special tsukemen', '', 'Tsukemen', 'no', 'no', 'July 2026.', 'tokusei'),
      it('', '', 'Katsu udon', '', 'Udon', 'no', 'no', 'May 2026.', 'katsu_udon'),
      it('', '', 'Ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'ramen'),
    ] }, {
    cuisine: '朝8時から深夜3時までの麺の店・4種のつけ麺(鴨、もつ、特製など)は太いうどん、細いうどん、中華麺、そばから選べる・焼きねぎとレモンの鴨つけ麺・もつつけ麺・水菜のカツうどん・ラーメン・カウンター席、セルフサービス',
    neighborhood: '島之内1-21-24 ファーストKビル1F。長堀橋駅から歩いてすぐ',
    gf_detail: 'グルテンフリーではありません。小麦のうどんと中華麺、そばもつなぎ入りの可能性、カツ、つけ汁の中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鴨、もつ、カツ、つけ汁に魚粉(2026年7月)。',
    notes: '[麺・長堀橋近くの朝8時から深夜3時までのつけ麺とうどん] 長堀橋駅から歩いてすぐのセルフサービスの麺のカウンターで、朝8時から深夜3時まで営業、朝食にも昼にも、夜の締めにも。つけ麺は4種で、席に着いたら麺を選びます。太いうどん、細いうどん、中華麺、そば。中華麺を選ぶ人が多め。もつつけ麺は魚介の風味のつけ汁にもつがたっぷり、鴨つけ麺は鴨、焼きねぎ、レモン入り。水菜のカツうどんやラーメンも。評価は分かれ、鴨のつけ汁がとても甘く、紙パックから量って混ぜているのを見たという人も。値上がりを感じたという声も。日曜定休。',
  });
}

// ================================================================ 俺たちのカレー家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27091332/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '16:30'], ['17:30', '22:30']), SA = day(['11:00', '22:00']), SU = day(['11:00', '21:45']);
  put({
    id: 'osaka_oretachi_no_curry_ya_namba', name: '俺たちのカレー家 (Oretachi no Curry Ya)', category: 'OMNI',
    lat: 34.663279, lng: 135.503567, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Japanese curry sauce is usually roux-thickened; breaded cutlets and fried shrimp.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, shrimp, sausage, cheese and egg; curry base not described.',
    hours_raw: 'Mon–Fri 11:00–16:30 and 17:30–22:30; Sat 11:00–22:00; Sun 11:00–21:45; open year-round; hours may change (Tabelog). Ticket machine linked to the kitchen; wait outside when full (August 2026). No cards; e-money and QR accepted (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 14-13, on Nansan-dori — about 3 min from Nankai Namba Stn',
    cuisine: 'Osaka-style curry rice, sweet then spicy, thick and rich · pork cutlet curry ¥930 · large katsu curry with sausage ¥1,400 · fried-shrimp curry with the curry kept off the shrimp · chicken curry · toppings: pork or chicken cutlet, soft-boiled egg, cheese, Kujo green onion, spinach, sausage · pickles, shallots and English-labeled sauces on the counter · 10 seats at an L-shaped counter',
    website: null, gmaps: gm('俺たちのカレー家 難波'), menu_url: null,
    notes: "[Curry · a 10-seat Osaka-style curry counter on Nansan-dori] A narrow ten-seat curry counter on Nansan-dori, three minutes from Nankai Namba, open since 2016 and busy with visitors from abroad. The curry is Osaka-style: thick and rich, sweet up front and then a gentle spice, with a nostalgic, European-style depth. The pork cutlet curry is fried to order and was ¥930 in July 2026. One diner had a large katsu curry with sausage for ¥1,400. Fried-shrimp curry comes with the curry kept off the shrimp so the coating stays crisp. Toppings run from cheese and soft-boiled egg to Kujo green onion and spinach. \"Medium spicy\" is mild, and there's chili sauce on the counter, along with pickles and English-labeled sauces. The ticket machine sends your order straight to the kitchen, so food comes fast. Open every day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 April 2016 (Tabelog)', background: 'Ticket-machine curry counter on Nansan-dori (July–September 2026 reviews).', philosophy: null, specialty: 'Pork cutlet curry.',
      anecdotes: [
        { text: '"It has a nostalgic flavor reminiscent of traditional European-style curry. The sauce has a nice richness, starting with a hint of sweetness, followed by a gentle spice that lingers." — July 2026, pork cutlet curry ¥930.', source: R + 'B532169012/' },
        { text: '"The \'Ebi Fry\' came with two pieces, and I appreciated that the curry was not poured over them." — August 2026, fried-shrimp curry with a soft-boiled egg.', source: R + 'B534538624/' },
      ],
      japanese_sources_summary: '食べログ: 俺たちのカレー家、大阪市中央区難波千日前14-13、南海なんば駅から徒歩3分、月〜金11:00〜16:30・17:30〜22:30、土11:00〜22:00、日11:00〜21:45、年中無休、予約不可、カード不可、電子マネー・QR可、10席(カウンター)、禁煙、2016年4月4日開店。口コミ(2026年3〜9月): 肉がほろほろのチーズのカレー、甘すぎないルー、席は少し狭い、カツカレー930円、懐かしい欧風カレーのような味、甘みのあとにやさしい辛さ、揚げたてのカツ、卓上の漬物、券売機で回転が早い、Nansan通りのカウンターの店、大盛りカツカレーとソーセージ1,400円、甘めでとろみのあるルー、外国人客が多い、チリソース、大盛りチキンカレーにチーズ、中辛でもマイルド、卓上のソースに英語表記、エビフライカレーと半熟卵、L字カウンター10席でスタッフ2人、券売機が厨房と連動、エビフライにルーがかかっていない、大阪風のカレーライス、トッピング(とんかつ、チキンカツ、半熟卵、チーズ、九条ねぎ、ほうれん草、ソーセージ)。',
      confidence: 'medium', sources: [TB, R + 'B532169012/', R + 'B534538624/', R + 'B536082015/', R + 'B532459144/', R + 'B534354826/', R + 'B525213870/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; English-labeled sauces on the counter (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番13号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532169012/', R + 'B532459144/', R + 'B534538624/'],
    price_note: 'Prices from July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork cutlet curry', '¥930', 'Curry', 'no', 'no', 'July 2026.', 'katsu'),
      it('', '', 'Large katsu curry with sausage', '¥1,400', 'Curry', 'no', 'no', 'July 2026.', 'katsu_sausage'),
      it('', '', 'Fried-shrimp curry', '', 'Curry', 'no', 'no', 'August 2026.', 'ebifry'),
      it('', '', 'Chicken curry', '', 'Curry', 'no', 'no', 'August 2026.', 'chicken'),
      it('', '', 'Soft-boiled egg (topping)', '', 'Toppings', 'ask', 'no', 'August 2026.', 'egg'),
    ] }, {
    cuisine: '甘さのあとに辛さが来る、とろみのある濃厚な大阪風カレーライス・カツカレー930円・大盛りカツカレーとソーセージ1,400円・ルーをかけないエビフライカレー・チキンカレー・トッピング(とんかつ、チキンカツ、半熟卵、チーズ、九条ねぎ、ほうれん草、ソーセージ)・卓上に漬物と英語表記のソース・L字カウンター10席',
    neighborhood: '難波千日前14-13、Nansan通り。南海なんば駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。日本のカレーのルーは小麦粉でとろみをつけることが多く、カツやエビフライも。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、海老、ソーセージ、チーズ、卵。ルーの中身は不明。',
    notes: '[カレー・Nansan通りの10席の大阪風カレー] 南海なんば駅から3分、Nansan通りにある細長いカウンター10席のカレー店で、2016年開店、海外からの客でにぎわいます。カレーは大阪風で、とろみがあって濃厚、最初に甘さ、それからやさしい辛さが来る、懐かしい欧風のような味わい。カツカレーは注文後に揚げるカツで、2026年7月で930円。大盛りカツカレーにソーセージで1,400円という人も。エビフライカレーは衣がサクッとしたままになるよう、ルーがかかっていません。トッピングはチーズや半熟卵から九条ねぎ、ほうれん草まで。「中辛」はマイルドで、卓上にはチリソース、漬物、英語表記のソースも。券売機が厨房とつながっていて提供は早め。年中無休。',
  });
}

save();
