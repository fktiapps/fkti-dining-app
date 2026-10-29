// Osaka sweep (2-mile circle around Dotonbori), batch 159 — ramen phase.
//   + Ramen 華 (truffle-scented chicken paitan, rich shoyu, aged salt; Shinmachi by Nishi-Ohashi)
//   + 横浜家系ラーメン 一新家 (Yokohama iekei, customizable, free table toppings, open past midnight; Sakuragawa)
//   + 中国料理 孫悟空 (neighborhood Chinese lunch: ¥800 shrimp or beef egg rice bowls, champon; Minami-Senba) — cuisine 'other'; same building as Sake Pan Tsutsumi, offset
//   + 華 (cheap Chinese set lunches with mini ramen, all-you-can-eat evenings, since 2006; Shinmachi) — cuisine 'other'
//   Skipped chain branches: 27140367 きりん寺 せんば心斎橋店, 27090821 三豊麺 ～斬～ 堺筋店, 27140686 どうとんぼり神座 せんば店.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 159);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27140367', 'Chain branch: Kirinji already in data.');
skip('27090821', 'Chain branch: Sanpo Men already in data.');
skip('27140686', 'Chain branch: Dotonbori Kamukura already in data.');

// ================================================================ Ramen 華
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136450/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_hana_shinmachi', name: 'Ramen 華 (Ramen Hana)', category: 'OMNI',
    lat: 34.677882, lng: 135.493589, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; shoyu tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth; chashu.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–21:30; open year-round (Tabelog). Cash only (Tabelog). Family friendly; children welcome (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-33-16, Nippo Shinmachi Bldg 1F — 1 min from Nishi-Ohashi Stn',
    cuisine: 'Chicken paitan ramen · chicken paitan ramen ¥1,000, thick and potage-like, with truffle sauce, kaiware, low-temperature chashu and menma; lemon and black pepper to change it up · special version · rich shoyu ramen; aged salt ramen; tsukemen · chilled chicken paitan ¥1,050 (summer) · evening beer set ¥800: kara-age, draft beer and menma · fried rice · thin whole-wheat noodles; extra noodles · 27 seats',
    website: null, gmaps: gm('Ramen 華'), menu_url: null,
    notes: "[Ramen · truffle-scented chicken paitan by Nishi-Ohashi] A clean, stylish and roomy ramen shop a minute from Nishi-Ohashi Station, family friendly and open every day. The house bowl is a thick, creamy chicken paitan (¥1,000), almost potage-like, lifted with a truffle sauce and served with lemon and black pepper to change the flavor; thin whole-wheat noodles hold it well. There's also a rich shoyu, an aged salt, tsukemen and a chilled paitan in summer. In the evening, a ¥800 set of kara-age, draft beer and good menma is a bargain. Two diners found the chashu tough. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen shop (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Chicken paitan ramen.',
      anecdotes: [
        { text: '"I was informed that… truffle sauce [is used], and indeed, a lovely truffle aroma wafted up as soon as it was served. The broth is quite thick…" — September 2026, chicken paitan ramen ¥1,000.', source: R + 'B536128115/' },
        { text: '"Kara-age, draft beer, and menma for just JPY 800!" — August 2026, evening beer set.', source: R + 'B534247455/' },
      ],
      japanese_sources_summary: '食べログ: Ramen 華、大阪市西区新町1-33-16 日宝新町ビル 1F、西大橋駅から徒歩1分、毎日11:00〜15:00 (L.O. 14:30)・17:00〜21:30、年中無休、カード・電子マネー・QR不可、27席、子ども連れ歓迎。口コミ(2023年7月〜2026年10月): 清潔でおしゃれな広い店、鶏白湯ラーメン1,000円 (ポタージュのように濃い、トリュフのソース、かいわれ、低温調理のチャーシュー、メンマ、レモンと黒こしょうで味変)、特製、濃厚醤油、熟成塩、つけ麺、夏の冷やし鶏白湯1,050円、夜のビールセット800円 (唐揚げ、生ビール、メンマ)、チャーハン、全粒粉の細麺、替え玉、チャーシューが硬かったという声。',
      confidence: 'medium', sources: [TB, R + 'B467798244/', R + 'B534003792/', R + 'B534247455/', R + 'B536128115/', R + 'B536444017/', R + 'B536832382/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: ['truffle'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Slightly thin whole-wheat noodles; extra noodles available (2023–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tsukemen'],
      signature_bowl: 'Chicken paitan ramen with truffle sauce, ¥1,000 (September 2026).',
      chashu: 'Low-temperature chashu; two diners found it tough or overcooked (August–September 2026).',
      notable_toppings: ['truffle sauce', 'kaiware', 'menma', 'lemon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Nishi-Ohashi\'s potage-thick chicken paitan with a breath of truffle.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536128115/', '"The broth is quite thick, with a strong sweetness and umami from the chicken paitan" — high.'],
        oiliness: [R + 'B467798244/', '"The creamy broth was rich yet free of any gamey aftertaste" — mid-scale.'],
        clarity: [R + 'B536128115/', '"a texture reminiscent of corn soup… more of a potage feel" — placed low.'],
        tare_strength: [R + 'B536444017/', '"The soy sauce flavor is well-balanced" (rich shoyu) — mid-scale.'],
        noodle_firmness: [R + 'B467798244/', '"slightly thinner, made with whole wheat flour… a satisfying texture" — mid-scale.'],
        aroma_punch: [R + 'B536128115/', '"a lovely truffle aroma wafted up as soon as it was served" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536128115/', R + 'B467798244/', R + 'B536832382/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Roomy and family friendly (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-33-16 日宝新町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目33番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536128115/', R + 'B467798244/', R + 'B534247455/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'paitan'),
      it('', '', 'Chilled chicken paitan (summer)', '¥1,050', 'Ramen', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Rich shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
      it('', '', 'Evening beer set: kara-age, draft beer, menma', '¥800', 'Sets', 'no', 'no', 'August 2026.', 'beer_set'),
    ] }, {
    cuisine: '鶏白湯ラーメン・鶏白湯ラーメン1,000円: ポタージュのように濃く、トリュフのソース、かいわれ、低温調理のチャーシュー、メンマ、レモンと黒こしょうで味変・特製も・濃厚醤油ラーメン、熟成塩ラーメン、つけ麺・夏の冷やし鶏白湯1,050円・夜のビールセット800円: 唐揚げ、生ビール、メンマ・チャーハン・全粒粉の細麺、替え玉・27席',
    neighborhood: '西区新町1-33-16 日宝新町ビル 1F。西大橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。全粒粉の麺、醤油のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープ、チャーシュー。',
    notes: '[ラーメン・西大橋、トリュフが香る鶏白湯] 西大橋駅から1分、清潔でおしゃれな広いラーメン店で、子ども連れにもよく、年中無休。看板はポタージュのように濃くクリーミーな鶏白湯 (1,000円) で、トリュフのソースが香り、レモンと黒こしょうで味を変えられ、全粒粉の細麺がよくからむ。濃厚醤油、熟成塩、つけ麺、夏は冷やしの鶏白湯も。夜は唐揚げ、生ビール、おいしいメンマの800円のセットがお得。チャーシューが硬いという声も2件。現金のみ。',
  });
}

// ================================================================ 横浜家系ラーメン 一新家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27117691/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_iekei_isshinya_sakuragawa', name: '横浜家系ラーメン 一新家 (Yokohama Iekei Ramen Isshinya)', category: 'OMNI',
    lat: 34.668264, lng: 135.487772, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; kara-age and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Daily 11:30–00:30 (last order 24:00); closed New Year\'s Eve and Day (Tabelog). Cash only (Tabelog). Free table toppings; app with a free topping and coupons (2025–2026).',
    hours: ALL(day(['11:30', '00:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sakuragawa 3-1-29, on Sennichimae-dori at the Sakuragawa crossing — by Sakuragawa Stn exit 4',
    cuisine: 'Yokohama iekei ramen · tonkotsu shoyu or shio; choose noodle firmness, richness and oil · thick wavy noodles (thin available) · chashu, quail eggs, spinach, nori · MAX ramen; negi ramen shio ¥1,060 (+¥100 medium); tantanmen ¥980; miso ramen · rice set with refills; kara-age set; gyoza · free on the table: Kyu-chan pickles, sliced ginger, grated garlic, coarse black pepper, chopped onion, sesame · 23 seats: 7 at the counter',
    website: null, gmaps: gm('横浜家系ラーメン 一新家'), menu_url: null,
    notes: "[Ramen · Yokohama iekei by the Sakuragawa crossing, open past midnight] A friendly Yokohama iekei shop on Sennichimae-dori, open until 00:30 every day, with a counter and tables. Order the tonkotsu shoyu (or shio) the iekei way, setting noodle firmness, richness and oil, on thick wavy noodles with chashu, quail eggs, spinach and nori; it's rich but not heavy. Then raid the free toppings: chopped onion, garlic, ginger, pickles and pepper. There's also a negi shio ramen and a sesame-heavy tantanmen. A rice set comes with refills, and the shop's app hands out free toppings and side-dish coupons. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yokohama iekei ramen shop (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Iekei tonkotsu shoyu ramen.',
      anecdotes: [
        { text: '"The broth is consistently satisfying, rich yet not too heavy, making it easy to finish every drop." — December 2025.', source: R + 'B490209187/' },
        { text: '"You can customize the noodle firmness, broth richness, and amount of back fat. They even offer free toppings and unlimited rice with the rice set…" — May 2025.', source: R + 'B507299092/' },
      ],
      japanese_sources_summary: '食べログ: 横浜家系ラーメン 一新家、大阪市浪速区桜川3-1-29、阪神桜川駅4番出口すぐ、千日前通沿い、毎日11:30〜翌0:30 (L.O. 0:00)、大晦日と元日休み、カード・電子マネー・QR不可、23席 (カウンター7、テーブル16)、卓上のキューちゃん・刻み生姜・おろしにんにく・粗挽き黒コショウなどは無料。口コミ(2023年10月〜2026年8月): とんこつ醤油か塩、麺の硬さ・味の濃さ・油の量を選べる、太い縮れ麺 (細麺も)、チャーシュー、うずらの卵、ほうれん草、海苔、MAX ラーメン、ねぎラーメン塩1,060円 (中盛り+100円)、担々麺980円、味噌ラーメン、ご飯おかわり自由のライスセット、唐揚げセット、餃子、刻み玉ねぎやごまも無料、アプリで無料トッピングとクーポン、気さくな店の人。',
      confidence: 'medium', sources: [TB, R + 'B472943728/', R + 'B490209187/', R + 'B507299092/', R + 'B521049304/', R + 'B526560288/', R + 'B533526403/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Thick, curly noodles; firmness to order; thin noodles also offered (2023–2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Iekei tonkotsu shoyu ramen, customized (2025–2026).',
      chashu: 'Chashu with quail eggs, spinach and nori (2023–2026).',
      notable_toppings: ['quail eggs', 'spinach', 'nori', 'chopped onion', 'grated garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Sakuragawa\'s late-night iekei, built to order with a counter of free toppings.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B490209187/', '"The rich tonkotsu soy sauce broth pairs perfectly with the chewy noodles" — high.'],
        oiliness: [R + 'B507299092/', 'Oil and back fat adjustable; one diner orders "extra fat" — placed high for the style.'],
        clarity: [R + 'B472943728/', '"a slightly thick tonkotsu shoyu broth" — placed low.'],
        tare_strength: [R + 'B490209187/', '"I always order it with a rich flavor" — placed high (adjustable).'],
        noodle_firmness: [R + 'B472943728/', '"The thick, curly noodles"; firm on request — placed high.'],
        aroma_punch: [R + 'B526560288/', 'Garlic, ginger and onion added at the table — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B490209187/', R + 'B472943728/', R + 'B507299092/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order firmness, richness and oil; free toppings (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区桜川3-1-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区桜川三丁目1番29号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B472943728/', R + 'B526560288/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Iekei shoyu ramen with rice set', '~¥1,000', 'Ramen', 'no', 'no', 'June 2026.', 'shoyu_set'),
      it('', '', 'Negi ramen shio', '¥1,060', 'Ramen', 'no', 'no', 'August 2026; medium +¥100.', 'negi'),
      it('', '', 'Tantanmen', '¥980', 'Ramen', 'no', 'no', 'June 2026.', 'tantan'),
      it('', '', 'Kara-age set', '', 'Sets', 'no', 'no', 'June 2026.', 'karaage'),
    ] }, {
    cuisine: '横浜家系ラーメン・とんこつ醤油か塩、麺の硬さ、味の濃さ、油の量を選べる・太い縮れ麺 (細麺も)・チャーシュー、うずらの卵、ほうれん草、海苔・MAX ラーメン、ねぎラーメン塩1,060円 (中盛り+100円)、担々麺980円、味噌ラーメン・おかわりできるライスセット、唐揚げセット、餃子・卓上は無料: キューちゃん、刻み生姜、おろしにんにく、粗挽き黒こしょう、刻み玉ねぎ、ごま・23席: カウンター7席',
    neighborhood: '浪速区桜川3-1-29、千日前通の桜川交差点。桜川駅4番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げと餃子。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・桜川交差点の横浜家系、深夜まで] 千日前通沿いの気さくな横浜家系の店で、毎日深夜0時半まで、カウンターとテーブル。とんこつ醤油 (か塩) を家系らしく麺の硬さ・味の濃さ・油の量を指定して、太い縮れ麺にチャーシュー、うずらの卵、ほうれん草、海苔。濃いのに重くない。あとは無料のトッピング: 刻み玉ねぎ、にんにく、生姜、漬物、こしょう。ねぎの塩ラーメンやごまの濃い担々麺も。ライスセットはおかわりでき、店のアプリで無料トッピングやサイドのクーポンも。現金のみ。',
  });
}

// ================================================================ 中国料理 孫悟空
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092490/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_son_goku_minamisenba', name: '中国料理 孫悟空 (Chinese Son Goku)', category: 'OMNI',
    lat: 34.676867, lng: 135.507534, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried shrimp; soy-based sauces; noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, beef and egg dishes.',
    hours_raw: 'No hours on Tabelog. One diner notes opening at 11:30 and closed Sundays, holidays and Mondays (August 2026). Lines after noon on weekdays (April 2026). Cash only (Tabelog). No smoking 11:00–13:00 on weekdays (Tabelog). Prices may differ slightly from the menu after recent rises (August 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-13-15, Nagahori Sanei Bldg 1F — 3 min from Nagahoribashi Stn',
    cuisine: 'Neighborhood Chinese lunch · shrimp and egg rice bowl (fried shrimp under fluffy egg in a tenshin-style sauce) ¥800–880 · beef and egg rice bowl ¥800 · seafood and egg rice bowl ¥800 · ankake champon ¥880 · soy-sauce yakisoba · sara udon · daily specials, e.g. mapo tofu · table salt, pepper, vinegar, sauce and soy sauce',
    website: null, gmaps: gm('中国料理 孫悟空'), menu_url: null,
    notes: "[Chinese · ¥800 egg rice bowls at a busy lunch counter, Minami-Senba] A popular neighborhood Chinese lunch spot near Nagahoribashi where office workers queue after noon. The house dishes are the egg rice bowls, about ¥800: fluffy egg in a sweet tenshin-style sauce over rice, topped with crisp fried shrimp or generous beef; one repeat diner prefers the beef. There's also a vegetable-packed ankake champon (season it with the table vinegar and pepper), a soy-sauce yakisoba and sara udon. Hours aren't listed; one diner notes it opens at 11:30 and closes Sundays, Mondays and holidays. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chinese restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shrimp and beef egg rice bowls.',
      anecdotes: [
        { text: '"The shrimp and egg rice bowl features fluffy eggs and crispy fried shrimp served over a bed of rice on a flat plate." — April 2026, ¥880.', source: R + 'B525461850/' },
        { text: '"The egg was perfectly wobbly, and the sauce paired with the beef was nicely spiced." — October 2026, Beef and Egg Rice Bowl ¥800.', source: R + 'B537879183/' },
      ],
      japanese_sources_summary: '食べログ: 中国料理 孫悟空、大阪市中央区南船場1-13-15 長堀三栄ビル1F、長堀橋駅から徒歩3分、営業時間の記載なし、カード・電子マネー・QR不可、平日11:00〜13:00は禁煙。口コミ(2026年1〜10月): 平日の昼過ぎには行列、海老と卵の丼800〜880円 (ふわふわの卵と天津風のあん、揚げ海老)、牛肉と卵の丼800円、海鮮と卵の丼800円、あんかけの champon880円、醤油の yakisoba、sara udon、日替わり (mapo tofuなど)、卓上に塩・こしょう・酢・ソース・醤油、11:30開店、日・祝・月休みという声、値上げでメニューと値段が少し違うことも。',
      confidence: 'medium', sources: [TB, R + 'B521612261/', R + 'B524902468/', R + 'B525461850/', R + 'B528395914/', R + 'B534466562/', R + 'B537879183/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-13-15 長堀三栄ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.67693, 135.507534); same building as Sake Pan Tsutsumi (osaka_sake_pan_tsutsumi_minamisenba), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区南船場一丁目13番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528395914/', R + 'B537879183/', R + 'B534466562/'],
    price_note: 'Prices from April–October 2026 reviews; menu prices may lag rises.', last_checked: TODAY, items: [
      it('', '', 'Shrimp and egg rice bowl', '¥800–880', 'Rice bowls', 'no', 'no', 'April–May 2026.', 'ebitama'),
      it('', '', 'Beef and egg rice bowl', '¥800', 'Rice bowls', 'no', 'no', 'October 2026.', 'gyutama'),
      it('', '', 'Seafood and egg rice bowl', '¥800', 'Rice bowls', 'no', 'no', 'October 2026.', 'kaisen'),
      it('', '', 'Ankake champon', '¥880', 'Noodles', 'no', 'no', 'August 2026.', 'champon'),
    ] }, {
    cuisine: '町の中華の昼・海老と卵の丼 (ふわふわの卵と天津風のあんに揚げ海老) 800〜880円・牛肉と卵の丼800円・海鮮と卵の丼800円・あんかけの champon880円・醤油の yakisoba・sara udon・日替わり (mapo tofuなど)・卓上に塩、こしょう、酢、ソース、醤油',
    neighborhood: '中央区南船場1-13-15 長堀三栄ビル1F。長堀橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。揚げ海老、醤油のあん、麺。',
    vegan_detail: 'ヴィーガンではありません。海老、牛肉、卵の料理。',
    notes: '[中華・南船場、800円の卵の丼でにぎわう昼の中華] 長堀橋近くの人気の町の中華で、昼過ぎには会社員が並ぶ。看板は卵の丼で約800円: ふわふわの卵に甘い天津風のあんをかけ、からっと揚げた海老か、たっぷりの牛肉をのせる。牛肉のほうが好きというリピーターも。野菜たっぷりのあんかけの champon (卓上の酢とこしょうで味を足して)、醤油の yakisoba、sara udonも。営業時間の記載はなく、11:30開店、日・月・祝休みという声。現金のみ。',
  });
}

// ================================================================ 華
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27006809/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_chinese_hana_shinmachi', name: '華 (Hana)', category: 'OMNI',
    lat: 34.676916, lng: 135.496633, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen and spring rolls; soy-based stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat stir-fries and meat broths.',
    hours_raw: 'Mon–Sat 11:30–14:30 and 17:00–23:00 (last order 22:30); public holidays 11:30–14:30 and 17:00–22:00 (last order 21:30); closed Sun (Tabelog). Cash only (Tabelog). Smoking allowed (Tabelog). Evening all-you-can-eat-and-drink ¥3,580 (August 2026). Open since 2006 (October 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-8-3, on a back street — 2 min from Yotsubashi Stn exit 2',
    cuisine: 'Budget Chinese · lunch set meals with soup, pickles and often a mini ramen and spring rolls: mapo tofu rice bowl set ¥600; stir-fried green peppers and pork set ¥800; eight-treasure stir-fry set; miso ramen set with fried rice ¥850; spicy miso ramen set (spice to order); tenshin and chuka rice bowl sets · evenings: table-order all-you-can-eat and drink ¥3,580 · 60 seats, semi-private areas',
    website: null, gmaps: gm('華'), menu_url: null,
    notes: "[Chinese · big-portion budget Chinese lunches since 2006, Shinmachi] A large, unfussy Chinese restaurant on a back street near Yotsubashi, around for about twenty years and full of office workers at lunch. The appeal is volume for the price: a mapo tofu rice bowl set for ¥600, or a stir-fry set around ¥800 that comes with soup, a mini ramen, spring rolls and pickles. The spicy miso ramen set is properly hot; ask to adjust. Side dishes sometimes differ from the menu photos, and one diner found the taste just average. Evenings run a table-order all-you-can-eat-and-drink for ¥3,580. Cash only; smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Open since about 2006 (October 2026 review).', background: 'Chinese restaurant (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Budget set meals.',
      anecdotes: [
        { text: '"The Mapo Tofu was slightly spicy and rich in flavor, and it came with spring rolls and a salad as the day\'s fried dish, along with soup and pickles—all for just JPY 600, tax included!" — January 2026, Mapo Tofu Rice Bowl Set Meal.', source: R + 'B521501889/' },
        { text: '"With the stir-fried green peppers and pork, rice, soup, Chinese noodles, and spring rolls, the volume for JPY 800 was quite impressive." — August 2026.', source: R + 'B533951257/' },
      ],
      japanese_sources_summary: '食べログ: 華、大阪市西区新町1-8-3、四ツ橋駅2番出口から徒歩2分、月〜土 11:30〜14:30・17:00〜23:00 (L.O. 22:30)、祝 11:30〜14:30・17:00〜22:00 (L.O. 21:30)、日曜休み、カード・電子マネー・QR不可、喫煙可、60席、半個室。口コミ(2025年3月〜2026年10月): 2006年ごろからある裏通りの中華、昼は会社員でいっぱい、mapo tofu の丼の定食600円、ピーマンと豚の炒め定食800円 (ご飯、スープ、ミニラーメン、春巻き)、八宝菜の定食、味噌ラーメンとチャーハンのセット850円、辛い味噌ラーメンの定食 (辛さを頼める)、天津飯や中華丼の定食、夜はテーブルオーダーの食べ飲み放題3,580円、小鉢がメニューの写真と違うこともある、味は普通という声。',
      confidence: 'medium', sources: [TB, R + 'B504026635/', R + 'B521501889/', R + 'B530084945/', R + 'B533951257/', R + 'B534109540/', R + 'B536802590/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches; ask to adjust spice (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-8-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市西区新町一丁目8番3号 (go) 28m — Tabelog point kept (back-street shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521501889/', R + 'B533951257/', R + 'B534109540/'],
    price_note: 'Prices from January–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu rice bowl set', '¥600', 'Lunch sets', 'no', 'no', 'January 2026.', 'mabo'),
      it('', '', 'Stir-fried green peppers and pork set', '¥800', 'Lunch sets', 'no', 'no', 'August 2026.', 'chinjao'),
      it('', '', 'Miso ramen set with fried rice', '¥850', 'Lunch sets', 'no', 'no', 'August 2026.', 'miso_set'),
      it('', '', 'All-you-can-eat and drink (evening)', '¥3,580', 'Dinner', 'no', 'no', 'August 2026.', 'tabehoudai'),
    ] }, {
    cuisine: '手ごろな中華・昼の定食はスープ、漬物、ミニラーメンや春巻きつきのことが多い: mapo tofu の丼の定食600円、ピーマンと豚の炒め定食800円、八宝菜の定食、チャーハンつきの味噌ラーメンのセット850円、辛い味噌ラーメンの定食 (辛さは頼める)、天津飯や中華丼の定食・夜はテーブルオーダーの食べ飲み放題3,580円・60席、半個室',
    neighborhood: '西区新町1-8-3、裏通り。四ツ橋駅2番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。ラーメンと春巻き、醤油の炒め物。',
    vegan_detail: 'ヴィーガンではありません。肉の炒め物と肉のスープ。',
    notes: '[中華・新町、2006年からの量たっぷりの手ごろな昼の中華] 四ツ橋近くの裏通りにある大きな気取らない中華で、20年ほど続き、昼は会社員でいっぱい。魅力は値段のわりの量: mapo tofu の丼の定食が600円、800円ほどの炒め物の定食にはスープ、ミニラーメン、春巻き、漬物がつく。辛い味噌ラーメンの定食はしっかり辛いので調整を頼んで。小鉢がメニューの写真と違うこともあり、味は普通という声も。夜はテーブルオーダーの食べ飲み放題3,580円。現金のみ、喫煙可。日曜休み。',
  });
}

save();
