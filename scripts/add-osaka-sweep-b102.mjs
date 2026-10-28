// Osaka sweep (2-mile circle around Dotonbori), batch 102 — ramen phase (all OMNI).
//   + 中華そば うえまち (Tabelog Ramen 100 every year since 2018; Kadoya-style shoyu and tsukemen; Tanimachi 6)
//   + Ramen 辻 (Tabelog Ramen 100 2019, 2023–25; frothy chicken paitan shio or shoyu; Tanimachi 4)
//   + 貝と地鶏だしのらぁ麺 ちょろ (clam and jidori clear ramen with butter and grilled nori; Uchihonmachi)
//   + 人生夢路 徳麺 (fish-only broth chuka soba, house noodles, oyster mazesoba; Tanimachi 4)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 102);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華そば うえまち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27069769/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['18:00', '21:00']);
  put({
    id: 'osaka_chuka_soba_uemachi', name: '中華そば うえまち (Chuka Soba Uemachi)', category: 'OMNI',
    lat: 34.676911, lng: 135.521033, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth, three kinds of chashu.',
    hours_raw: 'Tue–Sun 11:00–14:30 and 18:00–21:00; closed Mondays including holidays; evening service may be skipped when ingredients run out; until sold out; closures on X (Tabelog). Cash only: no cards, e-money or QR (Tabelog). One October 2026 diner heard it will relocate soon, so check before going.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uemachi A-22 (Chuo-ku) — 4 min from Tanimachi 6-chome Stn exit 7',
    cuisine: 'Tabelog Ramen WEST 100 (2018–2022) and OSAKA 100 (2023–2025) · Kadoya-style chuka soba · tsukemen ¥1,450: glossy, smooth whole-grain flat house noodles, a dip of soy with sweet, spicy and sour notes, three kinds of chashu, white leek, menma · shoyu chuka soba: sharp soy in a clear broth · mazesoba · limited chicken-and-pork bowls · 8 counter seats',
    website: null, gmaps: gm('中華そば うえまち 上町'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 Kadoya-style tsukemen and shoyu near Tanimachi 6-chome] An eight-seat counter near Tanimachi 6-chome, open since 2012 and on Tabelog's ramen 100 every year since 2018, often described as an original take on the Kadoya Shokudo style. Many diners order the tsukemen (¥1,450): glossy, smooth whole-grain flat noodles worth tasting plain, and a dip that balances soy with sweetness, gentle heat and acidity, with three kinds of well-cooked chashu; one regular has been 63 times. The shoyu chuka soba is a sharp soy in a clear, clean broth, salty to some. There's a mazesoba and limited chicken-and-pork bowls. Expect 10 to 30 minutes in line at lunch. One diner heard a move is coming, so check X before going. Closed Mondays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 December 2012 (Tabelog)', background: 'Ramen counter in the Kadoya Shokudo style (2026 reviews); Tabelog Ramen WEST 100 2018–2022, OSAKA 100 2023–2025.', philosophy: null, specialty: 'Tsukemen; shoyu chuka soba.',
      anecdotes: [
        { text: '"The glossy, smooth, whole grain flat noodles are a delight to eat, making you want to enjoy them on their own… When dipped in the broth, they have a subtle acidity that adds a touch of elegance. The three types of chashu… are well-cooked and flavorful." — October 2026, tsukemen ¥1,450.', source: R + 'B537799229/' },
        { text: '"The dipping sauce combined the umami of soy sauce with a pleasant acidity and a hint of spiciness, creating a refreshing yet deep taste." — October 2026.', source: R + 'B516128231/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば うえまち、大阪市中央区上町A番22号、谷町六丁目駅7番出口から徒歩4分、火〜日11:00〜14:30・18:00〜21:00、月曜定休(祝日も)、食材切れで夜営業なしの日あり、売り切れ次第終了、臨時休業はX、カード・電子マネー・QR不可、カウンター8席、2012年12月17日開店、食べログ ラーメン WEST 百名店2018〜2022、OSAKA 百名店2023〜2025。口コミ(2026年3〜10月): 63回目、つけ麺、甘み・辛み・酸味のバランスのつけ汁、もちもちの麺、とろけるチャーシュー、カドヤ系が一番、自家製麺、醤油の旨味に酸味とほのかな辛さ、平日13時に5人で10分、日曜12:15に11人で24分、現金のみ、つけ麺1,450円、つやのある全粒粉の平打ち麺、チャーシュー3種、白ねぎ、メンマ、カドヤ食堂の流れをくみつつ独自、醤油中華そば、キレのある醤油と澄んだスープ、限定の鶏豚とまぜそば、平日13時前に6人で30分待ち、醤油ラーメンはやや塩辛い、近く移転するらしいという声。',
      confidence: 'medium', sources: [TB, R + 'B537799229/', R + 'B516128231/', R + 'B463287043/', R + 'B537587495/', R + 'B537980750/', R + 'B538191552/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: true, notes: 'House-made glossy, smooth whole-grain flat noodles in the tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Tsukemen, ¥1,450 (October 2026).',
      chashu: 'Three kinds of chashu (October 2026).',
      notable_toppings: ['white leek', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Meat broth and chashu.' },
      pantheon: 'Tanimachi\'s Kadoya-lineage tsukemen: sweet-spicy-sour soy dip and glossy whole-grain noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B516128231/', '"A refreshing yet deep taste" — mid-scale.'],
        oiliness: [R + 'B516128231/', '"Refreshing" dip — placed low.'],
        clarity: [R + 'B537980750/', 'Shoyu chuka soba with "the refreshing clear broth" — mid-scale overall.'],
        tare_strength: [R + 'B537980750/', '"The sharpness of the soy sauce" — placed high.'],
        noodle_firmness: [R + 'B463287043/', '"The noodles are wonderfully chewy."'],
        aroma_punch: [R + 'B537799229/', '"A subtle acidity that adds a touch of elegance" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537799229/', R + 'B516128231/', R + 'B537980750/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter with a line; cash only; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区上町A番22号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026. A possible relocation was mentioned by one diner (October 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区上町A番22号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537799229/', R + 'B537980750/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen', '¥1,450', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Shoyu chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'mazesoba'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2018〜2022)、OSAKA 百名店(2023〜2025)・カドヤ系の中華そば・つけ麺1,450円: つやのある自家製の全粒粉平打ち麺、甘み・辛み・酸味のある醤油のつけ汁、3種のチャーシュー、白ねぎ、メンマ・醤油の中華そば: 澄んだスープにキレのある醤油・まぜそば・限定の鶏豚・カウンター8席',
    neighborhood: '中央区上町A番22号。谷町六丁目駅7番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、3種のチャーシュー。',
    notes: '[ラーメン・谷町六丁目近く、百名店のカドヤ系つけ麺と醤油] 谷町六丁目近くのカウンター8席の店で、2012年開店、2018年から毎年食べログのラーメン百名店に選ばれ、カドヤ食堂の流れをくみつつ独自の一杯と言われる。多くの客が頼むのはつけ麺(1,450円)で、そのままでも食べたいつややかな全粒粉の平打ち麺に、醤油に甘み、ほのかな辛さ、酸味が調和したつけ汁、よく煮た3種のチャーシュー。63回通う常連も。醤油の中華そばは澄んだすっきりしたスープにキレのある醤油で、しょっぱく感じる人も。まぜそばや限定の鶏豚も。昼は10〜30分並ぶことが多い。移転が近いという声もあるのでXを確認して。月曜定休、現金のみ。',
  });
}

// ================================================================ Ramen 辻
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27092793/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:30', '21:15']);
  put({
    id: 'osaka_ramen_tsuji_yariyamachi', name: 'Ramen 辻 (Ramen Tsuji)', category: 'OMNI',
    lat: 34.682831, lng: 135.515859, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shio or soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, pork and chicken chashu, pig\'s trotters, egg yolk.',
    hours_raw: 'Mon–Sat 11:30–14:30 and 17:30–21:15; Sun and holidays 11:30–21:15; open year-round (Tabelog, staff-maintained). Updates on X and Instagram. PayPay accepted; no cards or e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['11:30', '21:15']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yariyamachi 1-1-10, 1F — 2 min from Tanimachi 4-chome Stn exit 3',
    cuisine: 'Tabelog Ramen WEST 100 (2019) and OSAKA 100 (2023–2025) · refined, frothy chicken paitan in shio or shoyu · semi-special shio ¥1,550 · special with Kirishima black pork chashu and chopped pig\'s trotters that melt into the soup · low-temperature pork and chicken chashu, chopped purple onion · thin, chewy noodles · chashu rice bowl with a Ryu no Tamago yolk · limited sour-spicy chicken paitan jangmen with horumon · 8 seats',
    website: null, gmaps: gm('Ramen 辻 鎗屋町'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 frothy chicken paitan by Tanimachi 4-chome] A small, clean counter two minutes from Tanimachi 4-chome, open since 2016 and on Tabelog's Ramen OSAKA 100 from 2023 to 2025, with a line from opening most days. The chicken paitan is refined rather than heavy, frothy and free of chicken funk, in shio or shoyu, on thin, chewy noodles, with moist low-temperature pork and chicken chashu and a sharp accent of purple onion. The special adds Kirishima black pork and chopped pig's trotters that melt into the soup and make it much richer; the semi-special shio is ¥1,550. Get the chashu rice bowl with its deep-orange egg yolk. Limited bowls appear on social media, such as a sour-spicy jangmen best with horumon. Many overseas visitors; PayPay accepted. Open daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 June 2016 (Tabelog)', background: 'Chicken paitan ramen counter (Tabelog, staff-maintained); Tabelog Ramen WEST 100 2019, OSAKA 100 2023–2025.', philosophy: null, specialty: 'Chicken paitan; special with pig\'s trotters.',
      anecdotes: [
        { text: '"The low-temperature cooked pork and chicken chashu are moist and juicy, with finely chopped purple onions adding a perfect accent. The broth is surprisingly not too rich and has no chicken odor. The noodles are thin but have a chewy texture." — October 2026, semi-special shio ¥1,550.', source: R + 'B209326721/' },
        { text: '"The chicken paitan was refined and elegant… Once the chopped pig\'s trotters melt into the broth, it becomes incredibly rich and flavorful." — October 2026, special shoyu.', source: R + 'B537893400/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): Ramen 辻、大阪市中央区鎗屋町1-1-10 山大ビル1F、谷町四丁目駅3番出口から徒歩2分、月〜土11:30〜14:30・17:30〜21:15、日祝11:30〜21:15、年中無休、PayPay可、カード・電子マネー不可、8席、禁煙、2016年6月29日開店、XとInstagramで発信、食べログ ラーメン WEST 百名店2019、OSAKA 百名店2023・2024・2025。口コミ(2026年10月): 平日18:40に6人待ち、準特製塩ラーメン1,550円、カウンター7席で回転が早い、提供5分、低温調理の豚と鶏のチャーシュー、刻んだ紫玉ねぎ、濃すぎず鶏の臭みがない、細いがもちもちの麺、鶏白湯にチャーシューたっぷり、チャーシュー丼、いつもは行列、PayPay可、上品な鶏白湯、塩か醤油、特製醤油に刻んだ豚足、溶けると濃厚に、霧島黒豚のチャーシュー、龍のたまごのチャーシュー丼、限定の鶏白湯酸辣ジャンメンにホルモン、にんにく・生姜・スパイス、開店直後で入れたが帰りは行列、海外の客が多い、泡立つ口当たり、鶏白湯の塩は見た目より軽い、豚と鶏のチャーシュー2枚ずつ、2種のねぎ。',
      confidence: 'medium', sources: [TB, R + 'B209326721/', R + 'B537893400/', R + 'B537481151/', R + 'B537968115/', R + 'B538018014/', R + 'B538091290/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin but chewy noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chicken paitan shio, semi-special ¥1,550 (October 2026).',
      chashu: 'Low-temperature pork and chicken chashu; Kirishima black pork in the specials (October 2026).',
      notable_toppings: ['purple onion', 'chopped pig\'s trotters (special)', 'two kinds of green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tanimachi 4-chome\'s Tabelog 100 paitan: elegant, frothy chicken, richer with melted pig\'s trotters.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B209326721/', '"The broth is surprisingly not too rich" — mid-scale.'],
        oiliness: [R + 'B538091290/', '"It was lighter than it looked" — placed low.'],
        clarity: [R + 'B538018014/', '"The frothy texture" of the paitan — placed low.'],
        tare_strength: [R + 'B537893400/', '"Refined and elegant" — mid-scale.'],
        noodle_firmness: [R + 'B209326721/', '"Thin but have a chewy texture."'],
        aroma_punch: [R + 'B209326721/', '"Finely chopped purple onions adding a perfect accent" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B209326721/', R + 'B537893400/', R + 'B538091290/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas customers (October 2026); PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区鎗屋町1-1-10 山大ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区鎗屋町一丁目1番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B209326721/', R + 'B537893400/', R + 'B537968115/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen (shio or shoyu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'tori_paitan'),
      it('', '', 'Semi-special shio ramen', '¥1,550', 'Ramen', 'no', 'no', 'October 2026.', 'jun_tokusei'),
      it('', '', 'Special with pig\'s trotters', '', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
      it('', '', 'Limited sour-spicy chicken paitan jangmen', '', 'Limited', 'no', 'no', 'Horumon recommended; October 2026.', 'jangmen'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2019)、OSAKA 百名店(2023〜2025)・上品で泡立つ鶏白湯、塩か醤油・準特製塩1,550円・霧島黒豚のチャーシューと刻んだ豚足が溶ける特製・低温調理の豚と鶏のチャーシュー、刻んだ紫玉ねぎ・もちもちの細麺・龍のたまごの卵黄をのせたチャーシュー丼・限定の鶏白湯酸辣ジャンメンにホルモン・8席',
    neighborhood: '中央区鎗屋町1-1-10 1F。谷町四丁目駅3番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩か醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、豚と鶏のチャーシュー、豚足、卵黄。',
    notes: '[ラーメン・谷町四丁目、百名店の泡立つ鶏白湯] 谷町四丁目から2分の小さくきれいなカウンターで、2016年開店、2023〜2025年に食べログのラーメン OSAKA 百名店、たいてい開店から行列。鶏白湯は重さより上品さで、泡立ち鶏の臭みがなく、塩か醤油で、もちもちの細麺にしっとりした低温調理の豚と鶏のチャーシュー、刻んだ紫玉ねぎがアクセント。特製は霧島黒豚と刻んだ豚足が加わり、溶けるとぐっと濃厚に。準特製塩は1,550円。濃いオレンジの卵黄のチャーシュー丼もぜひ。SNSで告知される限定もあり、ホルモン入りの酸辣ジャンメンなど。海外の客も多い、PayPay可。無休。',
  });
}

// ================================================================ 貝と地鶏だしのらぁ麺 ちょろ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27124019/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://j-choro.com/';
  put({
    id: 'osaka_kai_to_jidori_choro_uchihonmachi', name: '貝と地鶏だしのらぁ麺 ちょろ (Kai to Jidori Dashi no Raa Men Choro)', category: 'OMNI',
    lat: 34.683283, lng: 135.512325, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (regular or whole-grain); soy tare in the shoyu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam and jidori chicken broth, pork, egg in the noodles, butter.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:40) and 17:30–22:00 (L.O. 21:30); open year-round (Tabelog, staff-maintained). Cards, e-money and QR accepted (Tabelog). Lunch: larger noodles and a small rice free (October 2026).',
    hours: ALL(day(['11:00', '15:00'], ['17:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uchihonmachi 2-3-8, Dia Palace Bldg 213 — 5 min from Tanimachi 4-chome Stn exit 3',
    cuisine: 'Clear clam and jidori chicken ramen · Choro raa men ¥950, original shio or shellfish shoyu · choose horo-horo braised pork or rare chashu · 120 g, or 145 g "Choro-mori" noodles made with Sanuki jidori egg, free at lunch · regular medium-thin or whole-grain smooth noodles · soft-boiled egg, tender menma, kaiware · self-serve butter, grilled nori and nori · Okuizumo sansho and hajikami to add · small rice at lunch for a buttery risotto finish · half grilled-chashu rice bowl ¥380 · 6 counter seats, 4 tables',
    website: OWN, gmaps: gm('貝と地鶏だしのらぁ麺 ちょろ'), menu_url: null,
    notes: "[Ramen · clam and jidori clear ramen with a butter-risotto finish near Tanimachi 4-chome] A calm, roomy second-floor ramen shop in a building of eateries near Tanimachi 4-chome, open since 2021, easy to walk into alone. The Choro raa men (¥950) is a clear broth of clam and jidori chicken with strong umami and an elegant, gentle finish, in original shio (the staff's suggestion) or shellfish shoyu; pick melt-soft braised pork or rare chashu, and regular or smooth whole-grain noodles. At lunch the bigger \"Choro-mori\" portion and a small rice are free. Half the fun is the self-serve butter, grilled nori and Okuizumo sansho: add them midway, then drop the rice, the rest of the egg and a pat of butter into the broth for a risotto. Those wanting a big punch may find it subtle. Open daily; cards accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 August 2021 (Tabelog)', background: 'Ramen shop (official site j-choro.com; Tabelog, staff-maintained).', philosophy: null, specialty: 'Clam and jidori chicken clear ramen.',
      anecdotes: [
        { text: '"When the ramen was served, the clear broth released a delightful aroma of shellfish that whetted my appetite… For the finale, I took the half-eaten soft-boiled egg and broth, added the rice and butter, and topped it off with a sheet of grilled nori, transforming it into a risotto-style dish." — October 2026, special Choro ramen.', source: R + 'B537885047/' },
        { text: '"The clear broth was served in a white bowl, beautifully garnished with large chashu slices, tender menma, and vibrant kaiware sprouts. Upon tasting, the broth had a strong umami flavor, presenting a refined and gentle taste overall." — October 2026, Choro raa men ¥950.', source: R + 'B538074021/' },
      ],
      japanese_sources_summary: '公式 j-choro.com。食べログ(店舗会員): 貝と地鶏だしのらぁ麺 ちょろ、大阪市中央区内本町2-3-8 ダイアパレスビル 213、谷町四丁目駅3番出口・堺筋本町駅13番出口から徒歩5分、毎日11:00〜15:00(L.O.14:40)・17:30〜22:00(L.O.21:30)、年中無休、カード・電子マネー・QR可、18席(カウンター6、4人掛け2卓、2人掛け2卓)、2021年8月15日開店。口コミ(2026年10月): 上品なラーメン、海苔とバター、丁寧な接客、塩味のほろほろチャーシュー、全粒粉のつるつる麺がおすすめ、中細ストレート麺、特製ちょろらぁ麺は塩をすすめられた、昼はちょろ盛りが無料、ほろほろ煮豚かレアチャーシュー、昼は80gのご飯、バター・焼き海苔・海苔は自由に、奥出雲の山椒とはじかみ、貝の香りの澄んだスープ、柔らかいメンマ、半熟卵、締めはリゾット風、土曜夜は1分待ち、ちょろ盛り20g増し、ダイアパレスビル2階、広く開放的で落ち着いた店内、ちょろらぁ麺(貝醤油)950円、まかない炙りチャーシュー丼(ハーフ)380円、元祖塩、並120gかちょろ盛り145g(讃岐の地鶏卵入り)、白い器、かいわれ、キャッシュレス可、パンチを求める人には物足りないかもという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537885047/', R + 'B538074021/', R + 'B537352354/', R + 'B537574784/', R + 'B538029873/', R + 'B538049911/'] },
    ramen: {
      broth_base: ['shellfish', 'chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight, or smooth whole-grain; 120 g or 145 g with Sanuki jidori egg (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Choro raa men, ¥950, shio or shellfish shoyu (October 2026).',
      chashu: 'Horo-horo braised pork or rare chashu (October 2026).',
      notable_toppings: ['butter (self-serve)', 'grilled nori', 'Okuizumo sansho', 'kaiware', 'tender menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and chicken broth.' },
      pantheon: 'Uchihonmachi\'s clam-and-jidori clear ramen, ending in a buttery rice risotto.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B538074021/', '"A refined and gentle taste overall" — placed low.'],
        oiliness: [R + 'B538074021/', 'Light and elegant — placed low.'],
        clarity: [R + 'B538074021/', '"The clear broth was served in a white bowl."'],
        tare_strength: [R + 'B537574784/', '"The balance of saltiness was good" — mid-scale.'],
        noodle_firmness: [R + 'B537574784/', 'Whole-grain noodles "slippery and chewy" — mid-scale.'],
        aroma_punch: [R + 'B537885047/', '"A delightful aroma of shellfish" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537885047/', R + 'B538074021/', R + 'B537574784/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff recommend options; cashless payment (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区内本町2-3-8 ダイアパレスビル 213',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026. Same building as Chuka Men Shokudo Kameyoshi (1F).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内本町二丁目3番8号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538049911/', R + 'B538074021/', R + 'B537885047/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Choro raa men (shio or shellfish shoyu)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'choro'),
      it('', '', 'Special Choro raa men', '', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Half grilled-chashu rice bowl', '¥380', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '貝と地鶏の澄んだラーメン・ちょろらぁ麺950円、元祖塩か貝醤油・ほろほろ煮豚かレアチャーシューを選ぶ・並120gか讃岐の地鶏卵を練り込んだちょろ盛り145g、昼は無料・中細麺か全粒粉のつるつる麺・半熟卵、柔らかいメンマ、かいわれ・バター、焼き海苔、海苔はセルフ・奥出雲の山椒とはじかみ・昼は小ライスでバターのリゾット風に・まかない炙りチャーシュー丼ハーフ380円・カウンター6席、テーブル4卓',
    neighborhood: '中央区内本町2-3-8 ダイアパレスビル213。谷町四丁目駅3番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺(通常か全粒粉)、醤油の醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。貝と地鶏のスープ、豚肉、麺に卵、バター。',
    notes: '[ラーメン・谷町四丁目近く、貝と地鶏の澄んだスープとバターのリゾット締め] 谷町四丁目近くの飲食店が入るビル2階、広く落ち着いたラーメン店で、2021年開店、ひとりでも入りやすい。ちょろらぁ麺(950円)は貝と地鶏の澄んだスープで旨味が強く上品でやさしい後味、元祖塩(店員のおすすめ)か貝醤油で。ほろほろの煮豚かレアチャーシュー、通常か全粒粉のつるつる麺を選ぶ。昼は大盛りのちょろ盛りと小ライスが無料。セルフのバター、焼き海苔、奥出雲の山椒を途中で足し、最後はご飯と残りの卵とバターをスープに入れてリゾットに。パンチを求める人には控えめかも。無休、カード可。',
  });
}

// ================================================================ 人生夢路 徳麺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27088994/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00']);
  put({
    id: 'osaka_jinsei_yumeji_tokumen_tokuimachi', name: '人生夢路 徳麺 (Jinsei Yumeji Tokumen)', category: 'OMNI',
    lat: 34.684042, lng: 135.514378, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soup has no meat but is niboshi and bonito-based; beef and chicken chashu, oysters and offal in the mazesoba.',
    hours_raw: 'Mon–Sat 11:00–14:00; closed Sundays and holidays; until sold out; updates on X (Tabelog, staff-maintained). Ticket machine. PayPay, Rakuten Pay and au PAY accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokuimachi 2-2-14 — 5 min from Tanimachi 4-chome Stn exit 4',
    cuisine: 'Chuka soba in a seafood-only soup with no meat stock and no chemical seasonings · chuka soba ¥1,000, rich or light soy: niboshi, katsuobushi and kombu, slightly oily and deep · house-made medium-thin, nearly straight noodles with whole-wheat flecks · rare chuck-roll and chicken-breast chashu · seasoned egg, menma, green onion · mazesoba: oyster with nori, or horumon with sweet-spicy colon ¥1,400 · rice to finish the mazesoba · 9 counter seats',
    website: null, gmaps: gm('人生夢路 徳麺 徳井町'), menu_url: null,
    notes: "[Ramen · a seafood-only chuka soba with house noodles near Tanimachi 4-chome] A cozy, wood-fronted nine-seat counter near Tanimachi 4-chome, open since 2015 and lunch only, whose soup uses no meat stock and no chemical seasonings. The chuka soba (¥1,000) is a deep, slightly oily broth of niboshi, katsuobushi and kombu; choose rich or light soy (rich is the punchier pick). House-made medium-thin noodles, flecked with whole wheat, pick up the broth well, and the two rare chashu (beef chuck roll and chicken breast) are tender. For something bigger, one regular swears by the mazesoba, oyster with nori or horumon with sweet-spicy colon (¥1,400), finished with rice like a risotto. The owner is attentive. One diner found the light version unremarkable. Lunch Monday to Saturday, until sold out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 November 2015 (Tabelog)', background: 'Ramen counter with a seafood-only, additive-free soup and house noodles (Tabelog, staff-maintained).', philosophy: 'Seafood broth without meat stock; no chemical seasonings; house-made noodles (Tabelog listing).', specialty: 'Seafood chuka soba; oyster mazesoba.',
      anecdotes: [
        { text: '"The piping hot broth had a slight oiliness, with a harmonious blend of niboshi (dried sardines) and katsuobushi (dried bonito flakes), supported by kombu kelp, creating a rich and thick base… The homemade noodles, which are almost straight and medium-thin, were smooth." — August 2026, chuka soba ¥1,000, rich soy.', source: R + 'B533389178/' },
        { text: '"This time, I ordered the oyster mazesoba. The seaweed adds a nice accent and enhances the ocean flavor. It\'s rich but incredibly delicious. At the end, I added rice, and it felt like a risotto." — April 2026.', source: R + 'B357162240/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 人生夢路 徳麺、大阪市中央区徳井町2-2-14、谷町四丁目駅4番出口から徒歩5分、月〜土11:00〜14:00、日祝休み、売り切れ次第終了、営業情報はTwitter、PayPay・楽天ペイ・au PAY可、カード・電子マネー不可、カウンター9席、禁煙、2015年11月16日開店、動物系不使用の魚介スープ、自家製麺、化学調味料不使用の中華そば。口コミ(2026年3〜9月): 上品な醤油ラーメンとまぜそば、限定も、ホルモンまぜそばのマルチョウ1,400円、甘辛いマルチョウたっぷり、牡蠣とコロ(ホルモン)のまぜそば、ご飯を入れるとリゾットのよう、海苔が海の香り、店主が丁寧で感じがよい、具だくさんのまぜそばに酢、木の外観、カウンターのみ、開店直後は待ちなし、券売機の中華そば1,000円、濃口を選ぶ、熱々のスープに少し油、煮干しと鰹節に昆布、とろみのある深い味、自家製のほぼストレートの中細麺、全粒粉のような粒、肩ロースのレアと鶏胸のレアのチャーシュー、半熟の味玉、メンマ、ねぎ、淡口か濃口を選べる、澄んだスープ、淡口は特に印象がなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B533389178/', R + 'B357162240/', R + 'B530831060/', R + 'B534983931/', R + 'B535133566/', R + 'B536709931/'] },
    ramen: {
      broth_base: ['niboshi', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made, nearly straight medium-thin noodles with whole-wheat flecks (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'mazesoba_aburasoba'],
      signature_bowl: 'Chuka soba, rich or light soy, ¥1,000 (August–October 2026).',
      chashu: 'Rare beef chuck roll and rare chicken breast (August 2026).',
      notable_toppings: ['seasoned egg', 'menma', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Fish broth; meat chashu.' },
      pantheon: 'Tanimachi\'s meat-stock-free niboshi-bonito chuka soba on house noodles, lunch only.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B533389178/', '"A rich and thick base" (rich soy) — mid-scale.'],
        oiliness: [R + 'B533389178/', '"A slight oiliness" — mid-scale.'],
        clarity: [R + 'B535133566/', '"The clear soup was incredibly delicious" (light soy) — mid-scale.'],
        tare_strength: [R + 'B534983931/', '"Simple yet had a deep flavor" — mid-scale.'],
        noodle_firmness: [R + 'B533389178/', '"A nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B533389178/', '"A harmonious blend of niboshi and katsuobushi" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B533389178/', R + 'B534983931/', R + 'B535133566/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; choose rich or light soy when handing it over (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区徳井町2-2-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区徳井町二丁目2番14号 (go) 10m; OSM 徳麺 node/6401604585 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533389178/', R + 'B357162240/', R + 'B535133566/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (rich or light soy)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Oyster mazesoba', '', 'Mazesoba', 'no', 'no', 'April 2026.', 'kaki_mazesoba'),
      it('', '', 'Horumon mazesoba (colon)', '¥1,400', 'Mazesoba', 'no', 'no', 'September 2026.', 'horumon_mazesoba'),
    ] }, {
    cuisine: '動物系を使わない魚介スープ、化学調味料不使用の中華そば・中華そば1,000円、濃口か淡口: 煮干し、鰹節、昆布、ほんのり油で深い味・全粒粉の粒が見える自家製の中細ほぼストレート麺・牛肩ロースと鶏胸のレアチャーシュー・味玉、メンマ、ねぎ・まぜそば: 海苔の牡蠣、甘辛いマルチョウのホルモン1,400円・まぜそばの締めにご飯・カウンター9席',
    neighborhood: '中央区徳井町2-2-14。谷町四丁目駅4番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。スープは肉を使わないが煮干しと鰹節、牛と鶏のチャーシュー、まぜそばの牡蠣やホルモン。',
    notes: '[ラーメン・谷町四丁目近く、肉を使わない魚介の中華そばと自家製麺] 谷町四丁目近くの木の外観のカウンター9席の店で、2015年開店、昼のみ、スープは動物系も化学調味料も使わない。中華そば(1,000円)は煮干し、鰹節、昆布の深くほんのり油の浮く一杯で、濃口か淡口を選べ、濃口がよりパンチあり。全粒粉の粒が見える自家製の中細麺はスープをよく持ち上げ、牛肩ロースと鶏胸の2種のレアチャーシューは柔らかい。しっかり食べたいなら常連が推すまぜそばを、海苔の牡蠣か甘辛いマルチョウのホルモン(1,400円)、最後はご飯でリゾット風に。店主は丁寧。淡口は印象が薄かったという声も。月〜土の昼のみ、売り切れ次第終了。',
  });
}

save();
