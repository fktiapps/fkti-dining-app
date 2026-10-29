// Osaka sweep (2-mile circle around Dotonbori), batch 156 — ramen phase (reopened after b155).
//   + 台湾まぜそば・台湾ラーメン 薫 (¥750 Taiwanese ramen and mazesoba, free large size; Den Den Town)
//   + ラーメン革命 (aged-shoyu ramen in five styles, plus iekei tonkotsu and tantanmen; Minami-Senba)
//   + クセが強い麺屋 れいわ (JoJo-themed performance ramen, ¥2,000 bowls, long waits; Hakurocho; same address as Men to Mugen no Kanosei Honmachi, offset)
//   + 味の源 麻辣湯 (pick-your-own malatang in a sesame-rich broth; Motomachi) — cuisine 'other', no ramen block, as for other malatang records
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 156);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 台湾まぜそば・台湾ラーメン 薫
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27098461/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_taiwan_ramen_kun_nipponbashi', name: '台湾まぜそば・台湾ラーメン 薫 (Taiwanese Maze-soba Taiwan Ramen Kun)', category: 'OMNI',
    lat: 34.660546, lng: 135.505088, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat on the Taiwanese ramen and mazesoba; tonkotsu broth.',
    hours_raw: 'Daily 11:00–21:00, open year-round (Tabelog). Cash only; the ticket machine does not take new notes or old ¥500 coins, so ask staff for change (January 2025).',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 4-15-11, in Den Den Town on the Ota Road side street — about 7 min from Nankai Namba',
    cuisine: 'Taiwanese ramen and mazesoba · Taiwanese ramen ¥750: soy-sauce broth with spicy minced meat on thin noodles; spice adjustable; super-spicy option · Taiwanese mazesoba with minced meat, onion, green onion, menma and peanuts; rice offered to finish · gentle tonkotsu ramen for those avoiding heat · rice-bowl sets, e.g. with a grilled-pork bowl · large size free · fried onions and vinegar on the table · 18 seats: 8 at the 1F counter, more upstairs',
    website: null, gmaps: gm('台湾まぜそば・台湾ラーメン 薫'), menu_url: null,
    notes: "[Ramen · cheap Taiwanese ramen and mazesoba in Den Den Town] A simple ticket-machine noodle shop on a side street of Den Den Town, with a counter downstairs and more seats upstairs. The Taiwanese ramen is a bargain at ¥750: a soy-sauce broth that grows richer as the spicy minced meat seeps in, over thin noodles with good bite, milder than the chain versions and adjustable up to super spicy. The mazesoba comes with minced meat, onion and crunchy peanuts, with free fried onions on the table and rice offered at the end. Not into heat? There's a gentle tonkotsu ramen. Large size is free. Cash only. Open every day.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Taiwanese ramen and mazesoba shop (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Taiwanese ramen; Taiwanese mazesoba.',
      anecdotes: [
        { text: '"The soy sauce broth was perfectly spicy, and the slightly thin noodles had a great texture… They offer spice adjustments, and the large size is free…" — December 2025, super spicy Taiwanese ramen ¥750.', source: R + 'B519108543/' },
        { text: '"The mazesoba came with minced meat, onions, green onions, bamboo shoots, and peanuts in a standard style." — January 2025.', source: R + 'B499173892/' },
      ],
      japanese_sources_summary: '食べログ: 台湾まぜそば・台湾ラーメン 薫、大阪市浪速区日本橋4-15-11、日本橋のでんでんタウンのオタロード側、毎日11:00〜21:00、年中無休、カード・電子マネー・QR不可、18席 (1階カウンター8、2階カウンター6とテーブル4)。口コミ(2024年9月〜2026年6月): 台湾ラーメン750円 (醤油のスープにピリ辛のひき肉、細めの麺、辛さ調整可、激辛も)、台湾まぜそば (ひき肉、玉ねぎ、ねぎ、メンマ、ピーナッツ、最後にご飯をすすめてくれる)、やさしいとんこつラーメン、焼豚丼とのセット、大盛り無料、卓上にフライドオニオンと酢、券売機は新札と旧500円玉が使えないので店の人に両替を。',
      confidence: 'medium', sources: [TB, R + 'B491493215/', R + 'B499173892/', R + 'B499518886/', R + 'B513297582/', R + 'B519108543/', R + 'B530111493/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, easy-to-slurp noodles with slight bite; large size free (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Taiwanese ramen, ¥750 (December 2025–June 2026).',
      chashu: 'Grilled-pork rice bowl in a set (September 2024).',
      notable_toppings: ['spicy minced meat', 'peanuts', 'green onion', 'menma', 'fried onions'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Den Den Town\'s ¥750 Taiwanese ramen, with the spice dial left to you.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B491493215/', '"a little lacking in spice and was somewhat mild at first, but… the flavor from the minced meat infused into the broth" — mid-scale.'],
        oiliness: [R + 'B530111493/', '"thin and easy to slurp, perfectly complementing the mildly spicy broth" — low.'],
        clarity: [R + 'B519108543/', '"The soy sauce broth" — mid-scale (no cloudiness stated).'],
        tare_strength: [R + 'B519108543/', '"The soy sauce broth was perfectly spicy" — mid-scale.'],
        noodle_firmness: [R + 'B513297582/', '"I loved the slight al dente texture" — mid-scale.'],
        aroma_punch: [R + 'B530111493/', '"Compared to certain chain restaurants, the spiciness here is milder" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B519108543/', R + 'B530111493/', R + 'B491493215/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-serve water (January 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋4-15-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋四丁目15番11号 (go) 5m; OSM 薫 node/5492513621 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519108543/', R + 'B530111493/'],
    price_note: 'Prices from December 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Taiwanese ramen', '¥750', 'Ramen', 'no', 'no', 'June 2026; large free.', 'taiwan'),
      it('', '', 'Taiwanese mazesoba', '', 'Mazesoba', 'no', 'no', 'January 2025.', 'maze'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'September 2025.', 'tonkotsu'),
    ] }, {
    cuisine: '台湾ラーメンと台湾まぜそば・台湾ラーメン750円: 醤油のスープにピリ辛のひき肉、細めの麺、辛さ調整可、激辛も・ひき肉、玉ねぎ、ねぎ、メンマ、ピーナッツの台湾まぜそば、最後にご飯をすすめてくれる・辛くないやさしいとんこつラーメン・焼豚丼などとのセット・大盛り無料・卓上にフライドオニオンと酢・18席: 1階カウンター8席、2階にも',
    neighborhood: '浪速区日本橋4-15-11、でんでんタウンのオタロード側の脇道。南海なんばから徒歩7分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。台湾ラーメンとまぜそばにひき肉、とんこつのスープ。',
    notes: '[ラーメン・でんでんタウンの安い台湾ラーメンと台湾まぜそば] でんでんタウンの脇道にある券売機のシンプルな麺の店で、1階はカウンター、2階にも席。台湾ラーメンは750円とお得: ピリ辛のひき肉がしみてだんだん深くなる醤油のスープに、歯ごたえのいい細麺。チェーン店より辛さは控えめで、激辛まで調整できる。まぜそばはひき肉、玉ねぎ、カリッとしたピーナッツ入り、卓上のフライドオニオンは自由に、最後にご飯もすすめてくれる。辛いのが苦手ならやさしいとんこつラーメンを。大盛り無料。現金のみ。年中無休。',
  });
}

// ================================================================ ラーメン革命
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140466/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://www.instagram.com/ra_menkakumei';
  const LD = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_ramen_kakumei_minamisenba', name: 'ラーメン革命 (Ramen Kakumei)', category: 'OMNI',
    lat: 34.677666, lng: 135.50725, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and seafood broth; back fat; chashu.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–22:00 (last order 21:30); Sun 11:00–15:00 (Tabelog). Opened 5 February 2024 (Tabelog). Cash only; ticket machine (Tabelog; 2026). Family friendly; children welcome (Tabelog). Stamp card (May 2026).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD, 6: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-15-5 — about 5 min from Nagahoribashi Stn, east of Sakaisuji',
    cuisine: 'Ramen · aged shoyu ramen in five styles: plain, katsuo, yuzu (¥900), back fat (e.g. back fat with ajitama ¥1,020) and black · broth of chicken bones and seafood · iekei-style tonkotsu ramen; rich back-fat ramen · thick tantanmen · seasonal limited bowls, e.g. chilled ago-dashi ramen with duck chashu ¥950 (summer 2026), bubble shrimp ramen · medium-thick straight noodles · table: black pepper, shichimi, special soy sauce, spicy garlic chives · chashu rice bowl · 24 seats: 6 at the counter, tables for 2 and 4',
    website: IG, gmaps: gm('ラーメン革命'), menu_url: null,
    notes: "[Ramen · aged-shoyu ramen five ways, Minami-Senba] A bright, roomy ramen shop near Nagahoribashi, open since early 2024, with tables as well as a counter and a family-friendly feel. The house bowl is aged shoyu ramen on a chicken-and-seafood broth, in five styles: plain, with katsuo, with yuzu (¥900), with back fat, or black. The back-fat versions are lighter than they look, and the spicy garlic chives on the table give them a punch. There's also an iekei-style tonkotsu and a thick tantanmen, plus seasonal specials such as a chilled ago-dashi ramen with duck chashu in summer. Ticket machine, cash only; staff are lively and quick.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 February 2024 (Tabelog); produced by a ramen company that started in Shiga (April 2026 review).', background: 'Ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Aged shoyu ramen.',
      anecdotes: [
        { text: '"The broth is made from chicken bones and seafood, with a refined soy sauce flavor enhanced by a hint of yuzu…" — April 2026, Aged Soy Sauce Ramen with Yuzu ¥900.', source: R + 'B510361953/' },
        { text: '"Oh, surprisingly, it was quite light! The base was a chicken broth shoyu ramen, and the back fat added some saltiness and richness, but it still felt light and gentle." — August 2026, Back Fat Ajitama ¥1,020.', source: R + 'B534710124/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン革命、大阪市中央区南船場1-15-5、長堀橋駅から356m、月〜土 11:00〜15:00・17:00〜22:00 (L.O. 21:30)、日 11:00〜15:00、2024年2月5日開店、カード・電子マネー・QR不可、24席 (カウンター6、テーブル18)、子ども連れ歓迎、Instagram あり。口コミ(2025年7月〜2026年9月): 熟成醤油ラーメン5種 (ノーマル、かつお、柚子900円、背脂 (背脂味玉1,020円)、ブラック)、鶏ガラと魚介のスープ、家系とんこつ、濃厚背脂、濃厚担々麺、季節限定 (冷やしあごだしラーメン950円、鴨チャーシュー、2026年夏)、泡の海老ラーメン、中太のストレート麺、卓上に黒こしょう、七味、特製醤油、辛いニラ、チャーシュー丼、スタンプカード、元気で手際のいい店の人、背脂でも軽いという声。',
      confidence: 'medium', sources: [TB, IG, R + 'B510361953/', R + 'B528436645/', R + 'B528720324/', R + 'B528747782/', R + 'B534710124/', R + 'B535334248/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick, straight, chewy noodles (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Aged shoyu ramen with back fat (e.g. back fat ajitama ¥1,020) or yuzu (¥900) (2026).',
      chashu: 'Pork chashu "free of any unpleasant odors"; duck chashu on the summer chilled bowl (2026).',
      notable_toppings: ['back fat', 'yuzu', 'katsuo', 'seasoned egg', 'spicy garlic chives'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood broth.' },
      pantheon: 'Nagahoribashi\'s aged-shoyu ramen, five ways, back fat lighter than it looks.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535334248/', '"so flavorful without being heavy" — mid-scale.'],
        oiliness: [R + 'B528436645/', '"the richness of the back fat… satisfying without being too heavy" — mid-scale.'],
        clarity: [R + 'B510361953/', '"a refined soy sauce flavor" on a chicken-and-seafood shoyu — placed high.'],
        tare_strength: [R + 'B510361953/', '"a sharp soy sauce base, resulting in a refreshing aftertaste" (July 2025 visit) — placed high.'],
        noodle_firmness: [R + 'B510361953/', '"medium-thick and straight with a nice chewiness" — placed high.'],
        aroma_punch: [R + 'B510361953/', '"enhanced by a hint of yuzu" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B510361953/', R + 'B534710124/', R + 'B528436645/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; tables for families (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-15-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目15番5号 (go) 8m; OSM ラーメン革命 node/8117996317 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510361953/', R + 'B534710124/', R + 'B528720324/'],
    price_note: 'Prices from April–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aged shoyu ramen with yuzu', '¥900', 'Ramen', 'no', 'no', 'April 2026.', 'yuzu'),
      it('', '', 'Back fat ajitama ramen', '¥1,020', 'Ramen', 'no', 'no', 'August 2026.', 'seabura'),
      it('', '', 'Aged shoyu ramen with katsuo', '', 'Ramen', 'no', 'no', 'July 2025.', 'katsuo'),
      it('', '', 'Iekei tonkotsu ramen', '', 'Ramen', 'no', 'no', '2025–2026.', 'iekei'),
      it('', '', 'Chilled ago-dashi ramen with duck chashu (seasonal)', '¥950', 'Limited', 'no', 'no', 'May–June 2026.', 'hiyashi'),
    ] }, {
    cuisine: 'ラーメン・熟成醤油ラーメン5種: ノーマル、かつお、柚子 (900円)、背脂 (たとえば背脂味玉1,020円)、ブラック・鶏ガラと魚介のスープ・家系とんこつ、濃厚背脂・濃厚担々麺・季節限定、たとえば鴨チャーシューの冷やしあごだしラーメン950円 (2026年夏)、泡の海老ラーメン・中太のストレート麺・卓上に黒こしょう、七味、特製醤油、辛いニラ・チャーシュー丼・24席: カウンター6席、2名と4名のテーブル',
    neighborhood: '中央区南船場1-15-5、堺筋の東。長堀橋駅から徒歩5分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと魚介のスープ、背脂、チャーシュー。',
    notes: '[ラーメン・南船場、5つの味の熟成醤油ラーメン] 長堀橋近くの明るく広いラーメン店で、2024年はじめの開店、カウンターのほかテーブルもあり子ども連れにも。看板は鶏と魚介のスープの熟成醤油ラーメンで、ノーマル、かつお、柚子 (900円)、背脂、ブラックの5種。背脂は見た目より軽く、卓上の辛いニラで締まる。家系風のとんこつや濃厚な担々麺もあり、夏は鴨チャーシューの冷やしあごだしラーメンなど季節限定も。券売機、現金のみ。店の人は元気で手際がいい。',
  });
}

// ================================================================ クセが強い麺屋 れいわ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27110897/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '23:00']);
  put({
    id: 'osaka_kuse_ga_tsuyoi_menya_reiwa_hakurocho', name: 'クセが強い麺屋 れいわ (Kuse ga Tsuyoi Menya Reiwa)', category: 'OMNI',
    lat: 34.678813, lng: 135.498044, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; cheese topping.',
    hours_raw: 'Tabelog lists Tue–Sat 12:00–14:00 and 19:00–23:00, closed Sun–Mon, with lunch sometimes unavailable; a September 2026 visitor found lunch not served and the evening running 19:00 until sold out. Waits of one to two hours; no reservations; cash only (2026). One group served at a time, about an hour each.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Hakurocho 4-7-1 — near Honmachi Stn',
    cuisine: 'Themed performance ramen · every ramen ¥2,000 with free extra noodles and toppings (e.g. cheese, seaweed): miso tonkotsu, cilantro ramen · mazesoba ¥1,500, e.g. tomato mazesoba with free rice, cheese and kimchi · a ¥1,000 no-lose prize lottery · 9 counter seats',
    website: null, gmaps: gm('クセが強い麺屋 れいわ'), menu_url: null,
    notes: "[Ramen · a JoJo-themed performance ramen counter, Hakurocho] Less a ramen shop than an attraction: nine counter seats in a room filled with figures from JoJo's Bizarre Adventure, where the owner drains noodles shouting the manga's catchphrases and serves each bowl in character. Every ramen is ¥2,000 with free extra noodles and toppings; the miso tonkotsu is rich and creamy, the cilantro ramen very strong, and the tomato mazesoba (¥1,500) comes with free rice, cheese and kimchi. A ¥1,000 prize lottery never loses. Groups are served in turn, so expect to queue one to two hours from before 7 pm. Cash only. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Themed performance ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Miso tonkotsu ramen; tomato mazesoba.',
      anecdotes: [
        { text: '"Since… ramen [is served] one group at a time with a performance, the turnover isn\'t fast, and with only 9 seats, you can expect an additional hour for every 9 people waiting." — September 2026.', source: R + 'B536238387/' },
        { text: '"I ordered the Tomato Mazesoba, and I was delighted to receive free rice, cheese, and kimchi!" — March 2026.', source: R + 'B524386571/' },
      ],
      japanese_sources_summary: '食べログ: クセが強い麺屋 れいわ、大阪市中央区博労町4-7-1、本町駅から364m、火〜土 12:00〜14:00・19:00〜23:00 (昼は休むことあり)、日・月休み、カード・電子マネー・QR不可、カウンター9席。口コミ(2026年3〜10月): JoJo のフィギュアだらけの店内、店主がキャラクターになりきって麺の湯切りやせりふとともに出す、ラーメンはどれも2,000円 (替え玉とトッピングは無料、チーズ・海苔など)、みそ豚骨 (濃厚でクリーミー)、パクチーラーメン、まぜそば1,500円 (トマトのまぜそばにご飯・チーズ・キムチ無料)、1,000円のはずれなしのくじ、1組ずつで1組1時間ほど、予約不可で1〜2時間待ち、現金のみ、2026年9月は昼の営業なしで夜19時から売り切れまで。',
      confidence: 'medium', sources: [TB, R + 'B524231395/', R + 'B524386571/', R + 'B530920381/', R + 'B532146041/', R + 'B536238387/', R + 'B537474463/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles not described; extra noodles free (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Miso tonkotsu ramen, ¥2,000 (September 2026).',
      chashu: null,
      notable_toppings: ['cheese', 'seaweed', 'cilantro', 'tomato', 'kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Hakurocho\'s JoJo-themed miso tonkotsu, served in character after a two-hour queue.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536238387/', '"The Miso Tonkotsu had no pork smell and was rich, creamy, and delicious!" — high.'],
        oiliness: [R + 'B536238387/', 'Rich and creamy tonkotsu, no oiliness described — mid-scale.'],
        clarity: [R + 'B536238387/', 'A creamy miso tonkotsu — placed low.'],
        tare_strength: [R + 'B524231395/', '"The ramen had a distinct personality" — mid-scale (tare not described).'],
        noodle_firmness: [R + 'B536238387/', 'Noodles not described — mid-scale by default.'],
        aroma_punch: [R + 'B536238387/', '"Even as a cilantro lover, I found the Cilantro Ramen quite strong in flavor!" — placed high.'],
      },
      confidence: 'low', sources: [R + 'B536238387/', R + 'B524231395/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Long queue; performance in Japanese (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町4-7-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.67875, 135.498044); same address as Men to Mugen no Kanosei Honmachi (osaka_men_to_mugen_no_kanosei_honmachi), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区博労町四丁目7番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536238387/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('みそ豚骨', '', 'Miso tonkotsu ramen', '¥2,000', 'Ramen', 'no', 'no', 'September 2026; extra noodles free.', 'miso'),
      it('', '', 'Cilantro ramen', '¥2,000', 'Ramen', 'no', 'no', 'September 2026.', 'cilantro'),
      it('', '', 'Mazesoba (e.g. tomato)', '¥1,500', 'Mazesoba', 'no', 'no', 'March–September 2026.', 'maze'),
      it('', '', 'Prize lottery', '¥1,000', 'Extras', 'ask', 'ask', 'September 2026.', 'lottery'),
    ] }, {
    cuisine: 'テーマのある演出のラーメン・ラーメンはどれも2,000円、替え玉とトッピング (チーズ、海苔など) は無料: みそ豚骨、パクチーラーメン・まぜそば1,500円、たとえばご飯・チーズ・キムチが無料のトマトのまぜそば・1,000円のはずれなしのくじ・カウンター9席',
    neighborhood: '中央区博労町4-7-1。本町駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チーズのトッピング。',
    notes: '[ラーメン・博労町、JoJo の世界の演出つきラーメン] ラーメン店というよりアトラクション: JoJo のフィギュアに囲まれたカウンター9席で、店主が作品の決めぜりふを叫びながら湯切りし、キャラクターになりきって一杯ずつ出す。ラーメンはどれも2,000円で替え玉とトッピングは無料、みそ豚骨は濃厚でクリーミー、パクチーラーメンはかなり強烈、トマトのまぜそば (1,500円) にはご飯・チーズ・キムチが無料。1,000円のくじははずれなし。1組ずつなので19時前から1〜2時間並ぶ覚悟を。現金のみ。日・月曜休み。',
  });
}

// ================================================================ 味の源 麻辣湯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27117865/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ajinomoto_malatang_motomachi', name: '味の源 麻辣湯 (Ajinomoto Mala Tang)', category: 'OMNI',
    lat: 34.661074, lng: 135.497619, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: most noodle choices are wheat; the sesame broth and fish cakes are not described — ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: you choose vegetables, tofu and noodles yourself, but whether the broth uses meat stock is not stated.',
    hours_raw: 'Daily 11:00–23:00; irregular closings (Tabelog). Pay after eating (October 2026). No cards; PayPay only for e-payment (Tabelog). Paper aprons provided (2026).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Motomachi 2-8-11, between Namba and Daikokucho — about 10 min from Nankai Namba',
    cuisine: 'Malatang · pick ingredients from a chilled case, individually packed at fixed prices: napa cabbage, bok choy, komatsuna, lettuce, okra, lotus root, wood ear, enoki, egg tofu, quail eggs, fish cakes, beef and other meats · noodles: instant, thin or thick Chinese noodles, egg noodles, vermicelli · rich, sesame-heavy broth with separate numbing and spice levels · black vinegar on the table · rice; buns · bottled beer ¥600 · typically ¥1,200–1,700',
    website: null, gmaps: gm('味の源 麻辣湯'), menu_url: null,
    notes: "[Malatang · a sesame-rich malatang worth the walk, Motomachi] A pick-your-own malatang shop between Namba and Daikokucho, a little out of the way, so there's rarely a queue. Fill a bowl from the case of individually priced ingredients, from napa cabbage, okra and lotus root to egg tofu, quail eggs and beef, choose your noodles, from instant to chewy thick ones, then set the numbing and spice levels separately. The broth is unusually rich in sesame, closer to dan dan noodles, and a splash of the black vinegar halfway through makes it creamier. A bowl typically runs ¥1,200–1,700. Pay after eating. Open daily until 11 pm.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Malatang shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Sesame-rich malatang.',
      anecdotes: [
        { text: '"The flavor is reminiscent of dan dan noodles, with a rich sesame taste that is incredibly intense!" — October 2026.', source: R + 'B537824792/' },
        { text: '"The individually packaged ingredients were clearly priced, making it easy to understand. I realized that the fixed pricing, rather than weight-based pricing, is likely what makes it so popular." — October 2026.', source: R + 'B537322667/' },
      ],
      japanese_sources_summary: '食べログ: 味の源 麻辣湯、大阪市浪速区元町2-8-11、南海なんば駅から徒歩10分、毎日11:00〜23:00、不定休、カード不可、電子マネーは PayPay のみ。口コミ(2025年11月〜2026年10月): なんばと大国町のあいだ、行列は少ない、ケースから具を選ぶ (個包装で定額: 白菜、チンゲン菜、komatsuna、レタス、オクラ、れんこん、きくらげ、enoki、卵豆腐、うずらの卵、練り物、牛肉など)、麺はインスタント麺、細麺・太麺の中華麺、卵麺、春雨から、ごまの濃いスープ、痺れと辛さは別々に選べる、卓上の黒酢、ご飯、bun、瓶ビール600円、紙のエプロン、後払い、ひとり1,200〜1,700円ほど。',
      confidence: 'medium', sources: [TB, R + 'B440480755/', R + 'B531291938/', R + 'B534487518/', R + 'B536021819/', R + 'B537322667/', R + 'B537824792/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick ingredients yourself; pay after (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町2-8-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町二丁目8番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B440480755/', R + 'B531291938/', R + 'B537322667/'],
    price_note: 'Bowls ¥1,200–1,710 in 2026 reviews; beer ¥600.', last_checked: TODAY, items: [
      it('', '', 'Malatang, ingredients and noodles of your choice', '~¥1,200–1,700', 'Malatang', 'no', 'ask', 'March–October 2026.', 'malatang'),
      it('', '', 'Bottled beer', '¥600', 'Drinks', 'no', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '麻辣湯・冷蔵ケースから個包装で定額の具を選ぶ: 白菜、チンゲン菜、komatsuna、レタス、オクラ、れんこん、きくらげ、enoki、卵豆腐、うずらの卵、練り物、牛肉などの肉・麺はインスタント麺、細麺か太麺の中華麺、卵麺、春雨・ごまの濃いスープ、痺れと辛さは別々に・卓上に黒酢・ご飯、bun・瓶ビール600円・ひとり1,200〜1,700円ほど',
    neighborhood: '浪速区元町2-8-11、なんばと大国町のあいだ。南海なんばから徒歩10分ほど',
    gf_detail: 'グルテンフリーではありません。麺はほとんど小麦、ごまのスープや練り物の材料は不明なので確認を。',
    vegan_detail: '確認を。野菜、豆腐、麺は自分で選べるが、スープに肉のだしを使うかは書かれていない。',
    notes: '[麻辣湯・元町、歩いてでも行きたいごまの濃い麻辣湯] なんばと大国町のあいだにある具を選ぶ麻辣湯の店で、少し外れた場所なのであまり並ばない。個別に値段のついたケースから、白菜、オクラ、れんこんから卵豆腐、うずらの卵、牛肉まで選び、インスタント麺からもちもちの太麺まで麺を選んで、痺れと辛さを別々に決める。スープはごまがとても濃く担々麺に近く、途中で黒酢を足すとまろやかに。ひとり1,200〜1,700円ほど。後払い。毎日23時まで。',
  });
}

save();
