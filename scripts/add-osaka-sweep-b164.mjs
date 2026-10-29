// Osaka sweep (2-mile circle around Dotonbori), batch 164 — ramen phase.
//   + なにわ新風 日本橋総本店 (late-night ramen, tsukemen and abura-soba with a free side; by Ebisucho Stn)
//   + 麺屋 青空 通天閣店 (Hakata yatai tonkotsu and a Nara-stamina hybrid; near Tsutenkaku)
//   + らーめん 兆 (light garlic ramen ¥750, garlic optional; Hiranomachi)
//   + なにわの五味八珍ラーメン (Tenri-style negi ramen and Go Go Curry, open 10:00–04:00; Shinsekai)
//   Skipped chain branches: 27142663 一風堂 淀屋橋店, 27150832 中華そば 花京 阿波座店, 27073203 1968 古潭.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 164);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27142663', 'Chain branch: Hakata Ippudo already in data.');
skip('27150832', 'Chain branch: Chuka Soba Hanakyo (Taisho) already in data.');
skip('27073203', 'Chain branch: Kotan already in data.');

// ================================================================ なにわ新風 日本橋総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27099554/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_naniwa_shinpu_nipponbashi', name: 'なにわ新風 日本橋総本店 (Naniwa Shinpu Nipponbashi souhonten)', category: 'OMNI',
    lat: 34.655039, lng: 135.505741, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare; fried sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu, chicken and seafood broths; chashu.',
    hours_raw: 'Mon–Wed and Fri–Sun 18:00–02:00; closed Thu (Tabelog). No cards (Tabelog). No smoking 11:00–17:00; designated smoking area (Tabelog). A free side (croquette, fried shumai, kara-age or gyoza) above a set spend (2025–2026). Lines at times late at night (August 2026).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 5-5-19 — right by Ebisucho Stn exit 2',
    cuisine: 'Late-night ramen, wide menu · shoyu tonkotsu ¥980 · goma miso ¥980, spice to order · shio tori-ton ¥980, light and frothy · seafood tonkotsu with thin noodles · seafood tsukemen ¥1,100 with thick noodles and a bonito-rich dip · cold bukkake ramen with homemade chili oil, myoga and green onion · abura-soba with chashu, menma, egg yolk and nori · free croquette, fried shumai, kara-age or gyoza above a set spend · 28 seats: 8 at the counter',
    website: null, gmaps: gm('なにわ新風 日本橋総本店'), menu_url: null,
    notes: "[Ramen · late-night ramen and tsukemen by Ebisucho Station] A busy, casual ramen shop right by Ebisucho Station, open until 2 am, with a long menu and a line at times late in the evening. The seafood tsukemen (¥1,100) is the standout, thick noodles in a dip heavy with bonito; the shoyu tonkotsu and a gentle sesame miso (spice to order) are both ¥980, and the abura-soba with egg yolk has its loyal fans. Spend over a set amount and a croquette, fried shumai, kara-age or gyoza comes free. A good finish to a night out. Closed Thursdays; no cards.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Seafood tsukemen; tonkotsu ramen.',
      anecdotes: [
        { text: '"The dipping sauce has a rich flavor with a strong seafood essence. The umami from the bonito is prominent, and it pairs perfectly with the noodles." — August 2026, tsukemen.', source: R + 'B528958951/' },
        { text: '"The rich yet not overwhelming flavor of the pork bone broth, combined with the sharpness of soy sauce, created a comforting deliciousness…" — July 2026, Shoyu Tonkotsu ¥980.', source: R + 'B525792611/' },
      ],
      japanese_sources_summary: '食べログ: なにわ新風 日本橋総本店、大阪市浪速区日本橋5-5-19、恵美須町駅2番出口すぐ、月〜水・金〜日 18:00〜翌2:00、木曜休み、カード不可、チャージ料なし、28席 (カウンター8、2名テーブル2、4名テーブル4)、11:00〜17:00は禁煙、喫煙スペースあり。口コミ(2025年12月〜2026年9月): 醤油とんこつ980円、ごま味噌980円 (辛さを選べる)、塩鶏とん980円 (軽く泡立つ)、魚介とんこつと細麺、魚介つけ麺1,100円 (太麺、かつおの濃いつけ汁)、自家製ラー油とmyoga の冷やしぶっかけ、チャーシュー・メンマ・卵黄・刻み海苔の油そば、一定額以上でコロッケ・揚げ shumai・唐揚げ・餃子がサービス、夜遅くは行列も、飲んだあとの一杯に。',
      confidence: 'medium', sources: [TB, R + 'B525792611/', R + 'B528958951/', R + 'B533000430/', R + 'B534990622/', R + 'B535767860/', R + 'B535897307/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu', 'miso', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles for the ramen; thick noodles for the tsukemen; slightly high-water noodles in the shio tori-ton (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Seafood tsukemen, ¥1,100 (July 2026).',
      chashu: 'Low-temperature chashu, a little dry to one diner (September 2026).',
      notable_toppings: ['egg yolk', 'menma', 'myoga', 'chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and seafood broths.' },
      pantheon: 'Ebisucho\'s late-night bonito tsukemen with a free croquette on the side.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B525792611/', '"The rich yet not overwhelming flavor of the pork bone broth" — mid-scale.'],
        oiliness: [R + 'B535767860/', '"the light, frothy broth" (shio tori-ton) — mid-scale overall.'],
        clarity: [R + 'B533000430/', 'Seafood tonkotsu "looked quite rich" — placed low.'],
        tare_strength: [R + 'B525792611/', '"the sharpness of soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B525792611/', '"As I chewed the thick noodles, the aroma of wheat spread" (tsukemen) — mid-scale.'],
        aroma_punch: [R + 'B528958951/', '"The umami from the bonito is prominent" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B525792611/', R + 'B528958951/', R + 'B535767860/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; free side dish offered at the counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋5-5-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋五丁目5番19号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525792611/', R + 'B535767860/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seafood tsukemen', '¥1,100', 'Tsukemen', 'no', 'no', 'July 2026.', 'tsukemen'),
      it('', '', 'Shoyu tonkotsu ramen', '¥980', 'Ramen', 'no', 'no', 'July 2026.', 'shoyu_tonkotsu'),
      it('', '', 'Goma miso ramen (spice to order)', '¥980', 'Ramen', 'no', 'no', 'July 2026.', 'goma_miso'),
      it('', '', 'Shio tori-ton ramen', '¥980', 'Ramen', 'no', 'no', 'September 2026.', 'shio_toriton'),
      it('', '', 'Abura-soba', '', 'Abura-soba', 'no', 'no', 'September 2026.', 'abura'),
    ] }, {
    cuisine: '夜遅くまでのラーメン、メニューは豊富・醤油とんこつ980円・辛さを選べるごま味噌980円・軽く泡立つ塩鶏とん980円・細麺の魚介とんこつ・太麺とかつおの濃いつけ汁の魚介つけ麺1,100円・自家製ラー油とmyoga とねぎの冷やしぶっかけ・チャーシュー、メンマ、卵黄、刻み海苔の油そば・一定額以上でコロッケ、揚げ shumai、唐揚げ、餃子がサービス・28席: カウンター8席',
    neighborhood: '浪速区日本橋5-5-19。恵美須町駅2番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ、揚げ物。',
    vegan_detail: 'ヴィーガンではありません。とんこつ、鶏、魚介のスープ、チャーシュー。',
    notes: '[ラーメン・恵美須町駅すぐ、夜遅くまでのラーメンとつけ麺] 恵美須町駅すぐのにぎやかで気軽なラーメン店で、深夜2時まで、メニューが豊富で夜遅くは行列も。いちばんは魚介つけ麺 (1,100円) で、太麺をかつおの効いたつけ汁で。醤油とんこつと、辛さを選べるやさしいごま味噌はどちらも980円、卵黄の油そばにもファンがいる。一定額以上でコロッケ、揚げ shumai、唐揚げ、餃子のどれかがサービス。飲んだあとの締めに。木曜休み、カード不可。',
  });
}

// ================================================================ 麺屋 青空 通天閣店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27150382/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_aozora_tsutenkaku', name: '麺屋 青空 通天閣店 (Menya Aozora Tsutenkaku ten)', category: 'OMNI',
    lat: 34.654255, lng: 135.505906, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:00) (Tabelog). Cards, e-money and QR accepted (Tabelog). Multilingual QR or ticket ordering (April 2026). Moved here from Sennichimae-dori (April 2026 review).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 1-13-11 1F, near Tsutenkaku — 3 min from Ebisucho Stn exit 3',
    cuisine: 'Hakata tonkotsu ramen · Hakata Yatai Tonkotsu Ramen ¥900, foamy and not too rich, thin noodles · Shin Nara Tonkotsu Ramen ¥900, a Hakata–Nara stamina hybrid with spice to choose and extra pork · seven ramen in all · sets with fried rice and kara-age · seasoned egg · 18 seats at the counter and tables',
    website: null, gmaps: gm('麺屋 青空 通天閣店'), menu_url: null,
    notes: "[Ramen · Hakata tonkotsu near Tsutenkaku] A calm tonkotsu shop a block from Tsutenkaku, recently moved here from Sennichimae-dori, with multilingual QR ordering and every kind of payment. The Hakata Yatai Tonkotsu (¥900) is a foamy, well-balanced bowl on thin noodles that even a tonkotsu-shy diner enjoyed; the house original, Shin Nara Tonkotsu (¥900), crosses it with Nara stamina ramen, red with chili at the spicy setting and topped with extra pork. Sets add kara-age and fried rice, though one diner found the rice pre-made. Open 11:00–23:00 daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sister shop of the Nipponbashi branch; moved here from Sennichimae-dori (April and August 2026 reviews).', background: 'Tonkotsu ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Hakata tonkotsu; Shin Nara Tonkotsu.',
      anecdotes: [
        { text: '"The signature tonkotsu ramen features a fine foam and rich flavor that clings perfectly to the thin noodles…" — April 2026.', source: R + 'B527873432/' },
        { text: '"I ordered… [the] original \'Shin Nara Tonkotsu Ramen\' for JPY 900. It\'s said to combine the best of Hakata tonkotsu and Nara stamina ramen." — April 2026.', source: R + 'B527866073/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 青空 通天閣店、大阪市浪速区恵美須東1-13-11 1F、恵美須町駅3番出口から徒歩3分、毎日11:00〜23:00 (L.O. 22:00)、カード・電子マネー・QR可、18席。口コミ(2026年2〜8月): 千日前通から通天閣の近くに移転、日本橋の店の姉妹店、多言語の QR や券売機で注文、博多屋台とんこつラーメン900円 (泡立つ、濃すぎない、細麺)、博多とんこつと奈良のスタミナラーメンを合わせた新奈良とんこつラーメン900円 (辛さを選べる、肉が多め)、ラーメンは7種、唐揚げとチャーハンのセット、チャーハンは作り置きのようという声、半熟の味玉、とんこつの匂いが苦手でも大丈夫だったという声。',
      confidence: 'medium', sources: [TB, R + 'B523153768/', R + 'B527372202/', R + 'B527866073/', R + 'B527873432/', R + 'B533865787/', R + 'B535722907/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin Hakata noodles (2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'Hakata Yatai Tonkotsu Ramen, ¥900 (August 2026).',
      chashu: 'Large chashu with extra pork on the Shin Nara bowl (May 2026).',
      notable_toppings: ['chili flakes', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Tsutenkaku\'s Hakata tonkotsu with a Nara-stamina twist.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B523153768/', '"The Hakata ramen had a broth that wasn\'t too rich" — mid-scale.'],
        oiliness: [R + 'B527873432/', '"a fine foam and rich flavor" — mid-scale.'],
        clarity: [R + 'B527873432/', 'A foamy tonkotsu — placed low.'],
        tare_strength: [R + 'B533865787/', '"the authentic taste of Hakata Tonkotsu" — mid-scale.'],
        noodle_firmness: [R + 'B523153768/', '"the thin noodles were great as well" — mid-scale.'],
        aroma_punch: [R + 'B533865787/', '"I\'m a bit sensitive to the smell of tonkotsu, but I had no issues" — low.'],
      },
      confidence: 'medium', sources: [R + 'B527873432/', R + 'B523153768/', R + 'B527866073/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Multilingual signs and QR ordering (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東1-13-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須東一丁目13番11号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527866073/', R + 'B535722907/'],
    price_note: 'Prices from April–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hakata Yatai Tonkotsu Ramen', '¥900', 'Ramen', 'no', 'no', 'August 2026.', 'hakata'),
      it('', '', 'Shin Nara Tonkotsu Ramen (spice to choose)', '¥900', 'Ramen', 'no', 'no', 'April 2026.', 'shin_nara'),
      it('', '', 'Set with fried rice and kara-age', '', 'Sets', 'no', 'no', 'April 2026.', 'set'),
    ] }, {
    cuisine: '博多とんこつラーメン・博多屋台とんこつラーメン900円、泡立ち濃すぎない、細麺・博多と奈良のスタミナラーメンを合わせた新奈良とんこつラーメン900円、辛さを選べて肉が多め・ラーメンは全7種・チャーハンと唐揚げのセット・味玉・カウンターとテーブルで18席',
    neighborhood: '浪速区恵美須東1-13-11 1F、通天閣の近く。恵美須町駅3番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・通天閣近く、博多とんこつ] 通天閣から1ブロック、千日前通から移ってきた落ち着いたとんこつの店で、多言語の QR 注文、支払いもなんでも可。博多屋台とんこつ (900円) は泡立ってバランスのいい一杯で細麺、とんこつの匂いが苦手な人も平気だったという声。店のオリジナルの新奈良とんこつ (900円) は奈良のスタミナラーメンと合わせ、辛口は唐辛子で真っ赤、肉も多め。唐揚げとチャーハンのセットもあるが、チャーハンは作り置きのようという声も。毎日11時〜23時。',
  });
}

// ================================================================ らーめん 兆
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27065326/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'osaka_ramen_cho_hiranomachi', name: 'らーめん 兆 (Ramen Cho)', category: 'OMNI',
    lat: 34.687808, lng: 135.503702, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; chashu.',
    hours_raw: 'Mon–Sat 11:00–23:00; closed Sun and public holidays (Tabelog). Cash only (Tabelog). Garlic added only if you want it (2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 2-5-14, behind a clear vinyl entrance under a yellow sign — 5–6 min from Kitahama or Yodoyabashi Stn',
    cuisine: 'Light garlic ramen · ramen ¥750, garlic cloves at the bottom if you want them · ramen set meal ¥900 with rice and pickled daikon · chige ramen; miso ramen · seasoned egg · 22 seats: 4 at the counter, 18 upstairs',
    website: null, gmaps: gm('らーめん 兆'), menu_url: null,
    notes: "[Ramen · a light, cheap garlic ramen in the office district, Hiranomachi] A simple ramen shop behind a clear vinyl entrance and a bright yellow \"garlic ramen\" sign near Kitahama, with a tiny ground-floor counter and tables upstairs. The ramen (¥750) is light and old-fashioned, with flavorful soy-seasoned chashu; the owner asks whether you want garlic, which hides as whole cloves at the bottom of the bowl. Two diners found the garlic milder and the broth plainer than the sign promises, but it is cheap and easy after a night out. A ramen set with rice is ¥900. Cash only. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Neighborhood ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Light garlic ramen.',
      anecdotes: [
        { text: '"When you order ramen here, the owner kindly asks, \'Would you like garlic with that?\'… The ramen at this restaurant is very light." — May 2026, ramen ¥750.', source: R + 'B528898839/' },
        { text: '"The flavor was light… Hidden at the bottom were some garlic cloves, which added a nice punch when eaten. The chashu was well-seasoned with soy sauce, giving it a nostalgic taste." — July 2026, Ramen Set Meal ¥900.', source: R + 'B531305387/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 兆、大阪市中央区平野町2-5-14、淀屋橋駅から徒歩約6分、北浜駅から5分、月〜土 11:00〜23:00、日・祝休み、カード・電子マネー・QR不可、22席 (1階カウンター4、2階テーブル18)。口コミ(2026年5〜8月): 黄色い「にんにくラーメン」の看板と透明のビニールの入口、ラーメン750円 (あっさり、にんにくは入れるか聞いてくれる、丼の底ににんにくの粒)、ご飯と大根の漬物のラーメン定食900円、chige ラーメン、味噌ラーメン、味玉、醤油の効いたなつかしいチャーシュー、にんにくは思ったより弱いという声、スープがもう少し深ければという声、飲んだあとの一杯に。',
      confidence: 'medium', sources: [TB, R + 'B528898839/', R + 'B529374301/', R + 'B530080266/', R + 'B530808315/', R + 'B531305387/', R + 'B535055686/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles reminiscent of simple instant noodles to one diner (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen with garlic, ¥750 (May 2026).',
      chashu: 'Soy-seasoned chashu, flavorful and nostalgic (2026).',
      notable_toppings: ['garlic cloves', 'menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Hiranomachi\'s ¥750 light ramen with garlic cloves on request.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B528898839/', '"The ramen at this restaurant is very light" — low.'],
        oiliness: [R + 'B531305387/', '"The flavor was light" — low.'],
        clarity: [R + 'B530080266/', '"the broth could use a little more depth" — mid-scale.'],
        tare_strength: [R + 'B530080266/', '"the ramen was quite ordinary" — low.'],
        noodle_firmness: [R + 'B531305387/', '"the noodles reminded me of simple instant noodles" — low.'],
        aroma_punch: [R + 'B535055686/', '"I didn\'t find the garlic flavor as strong as I expected" — low.'],
      },
      confidence: 'medium', sources: [R + 'B528898839/', R + 'B531305387/', R + 'B530080266/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Garlic asked when you order (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区平野町2-5-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 兆 node/4793145726 2m; GSI 大阪府大阪市中央区平野町二丁目5番14号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528898839/', R + 'B531305387/'],
    price_note: 'Prices from May–August 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Ramen (garlic optional)', '¥750', 'Ramen', 'no', 'no', 'May 2026.', 'ramen'),
      it('', '', 'Ramen set meal with rice and pickled daikon', '¥900', 'Sets', 'no', 'no', 'July–August 2026.', 'teishoku'),
      it('', '', 'Chige ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'chige'),
    ] }, {
    cuisine: 'あっさりしたにんにくラーメン・ラーメン750円、希望すれば丼の底ににんにくの粒・ご飯と大根の漬物のラーメン定食900円・chige ラーメン、味噌ラーメン・味玉・22席: 1階カウンター4席、2階18席',
    neighborhood: '中央区平野町2-5-14、黄色い看板と透明のビニールの入口。北浜・淀屋橋駅から徒歩5〜6分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー。',
    notes: '[ラーメン・平野町、オフィス街のあっさり安いにんにくラーメン] 北浜近く、透明のビニールの入口と黄色い「にんにくラーメン」の看板が目印のシンプルなラーメン店で、1階は小さなカウンター、2階にテーブル。ラーメン (750円) はあっさりと昔風で、醤油の効いたチャーシューがおいしい。店主がにんにくを入れるか聞いてくれ、丼の底に粒で入っている。看板ほどにんにくは強くなくスープも素朴という声もあるが、安く、飲んだあとにも食べやすい。ご飯つきのセットは900円。現金のみ。日曜休み。',
  });
}

// ================================================================ なにわの五味八珍ラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27131084/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_naniwa_gomi_hatchin_ramen_shinsekai', name: 'なにわの五味八珍ラーメン (Naniwa no Gomi Hatchin Ramen)', category: 'OMNI',
    lat: 34.65206, lng: 135.505667, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; curry roux; fried cutlets and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat in the soup and curry.',
    hours_raw: 'Daily 10:00–04:00, open year-round (Tabelog). Cards, e-money and QR accepted (Tabelog). Ticket machine (September 2026).',
    hours: ALL(day(['10:00', '04:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ebisu-higashi 2-6-20 1F, at the foot of Tsutenkaku — 5 min from Shin-Imamiya Stn',
    cuisine: 'Stamina ramen and curry · negi ramen ¥1,150 (large ¥1,300): soy base with napa cabbage, chili and garlic, piled with green onion, thin curly noodles · regular ramen; spicy ramen · half fried rice ¥300; omu-chahan set; bone-in kara-age · Go Go Curry (Kanazawa-style curry), e.g. pork cutlet curry · 17 seats: 6 at the counter, tables at the back',
    website: null, gmaps: gm('なにわの五味八珍ラーメン'), menu_url: null,
    notes: "[Ramen · late-night stamina ramen and curry under Tsutenkaku] A small ramen shop at the foot of Tsutenkaku, open from 10 am until 4 am every day, that also serves Kanazawa-style Go Go Curry. The negi ramen (¥1,150) is a Tenri-style stamina bowl: a soy broth full of napa cabbage with a kick of chili and garlic, thin curly noodles and a heap of green onion; add a fluffy half fried rice for ¥300. The thick pork-cutlet curry, eaten with a fork, is the alternative. Tables at the back feel tucked away. One diner found the service inattentive. Every payment type accepted.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen shop that also serves Go Go Curry (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Stamina negi ramen; Kanazawa-style curry.',
      anecdotes: [
        { text: '"The soy sauce-based broth, packed with vegetables mainly consisting of napa cabbage, has a delightful kick of spiciness and a punch of garlic, reminiscent of the flavors found in Tenri ramen." — August 2026, Large Negi Ramen ¥1,300.', source: R + 'B536151707/' },
        { text: '"Although it\'s primarily a ramen shop, I was intrigued to find… [it serves] \'Gogo Curry,\' famous for its Kanazawa-style curry." — September 2026, pork cutlet curry.', source: R + 'B534846015/' },
      ],
      japanese_sources_summary: '食べログ: なにわの五味八珍ラーメン、大阪市浪速区恵美須東2-6-20 1F、新今宮駅から徒歩5分、毎日10:00〜翌4:00、年中無休、カード・電子マネー・QR可、17席 (カウンター6、テーブル11)、奥のテーブルは隠れ家のよう。口コミ(2026年6〜9月): 通天閣のふもと、ねぎラーメン1,150円 (大盛り1,300円、白菜の多い醤油ベースに唐辛子とにんにく、天理ラーメン風、細い縮れ麺、ねぎ山盛り)、ふつうのラーメン、辛いラーメン、半チャーハン300円、omu-chahan のセット、骨つき唐揚げ、金沢カレーの Go Go Curry (カツカレー)、券売機、接客がそっけなかったという声、夜遅くまで。',
      confidence: 'medium', sources: [TB, R + 'B529422688/', R + 'B531437002/', R + 'B532134086/', R + 'B532332391/', R + 'B534846015/', R + 'B536151707/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin, very curly noodles, cooked slightly soft (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Negi ramen, ¥1,150 (July 2026).',
      chashu: null,
      notable_toppings: ['green onion', 'napa cabbage', 'garlic', 'chili'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat in the soup.' },
      pantheon: 'Shinsekai\'s 4 am stamina negi ramen, with Kanazawa curry on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 2, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536151707/', '"packed with vegetables… a delightful kick of spiciness and a punch of garlic" — mid-scale.'],
        oiliness: [R + 'B532332391/', '"Light and refreshing with a soy sauce base" — low.'],
        clarity: [R + 'B536151707/', 'A soy broth with stir-fried napa cabbage and chili — placed low.'],
        tare_strength: [R + 'B532332391/', '"Light and refreshing with a soy sauce base" — mid-scale.'],
        noodle_firmness: [R + 'B536151707/', '"The thin noodles, cooked slightly softer, are quite curly" — low.'],
        aroma_punch: [R + 'B536151707/', '"a punch of garlic, reminiscent of… Tenri ramen" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536151707/', R + 'B532332391/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; tables at the back (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東2-6-20 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須東二丁目6番20号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532332391/', R + 'B536151707/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Negi ramen', '¥1,150', 'Ramen', 'no', 'no', 'July 2026; large ¥1,300.', 'negi'),
      it('', '', 'Half fried rice', '¥300', 'Sides', 'ask', 'no', 'August 2026.', 'chahan'),
      it('', '', 'Pork cutlet curry (Go Go Curry)', '', 'Curry', 'no', 'no', 'September 2026.', 'katsu_curry'),
    ] }, {
    cuisine: 'スタミナラーメンとカレー・ねぎラーメン1,150円 (大盛り1,300円): 白菜の多い醤油ベースに唐辛子とにんにく、ねぎ山盛り、細い縮れ麺・ふつうのラーメン、辛いラーメン・半チャーハン300円、omu-chahan のセット、骨つき唐揚げ・金沢カレーの Go Go Curry、たとえばカツカレー・17席: カウンター6席、奥にテーブル',
    neighborhood: '浪速区恵美須東2-6-20 1F、通天閣のふもと。新今宮駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、カレーのルー、カツや唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。スープとカレーに肉。',
    notes: '[ラーメン・新世界、通天閣のふもとの深夜のスタミナラーメンとカレー] 通天閣のふもとにある小さなラーメン店で、毎日朝10時から深夜4時まで、金沢カレーの Go Go Curryも出す。ねぎラーメン (1,150円) は天理風のスタミナ系で、白菜たっぷりの醤油スープに唐辛子とにんにくが効き、細い縮れ麺にねぎが山盛り。300円の半チャーハンもふわっとしておいしい。フォークで食べる濃いカツカレーもおすすめ。奥のテーブルは隠れ家のよう。接客がそっけないという声も。支払いはなんでも可。',
  });
}

save();
