// Osaka sweep (2-mile circle around Dotonbori), batch 15 — ramen phase, nearest first (all OMNI).
//   + 麺やkotetsu 難波 (clear chicken shio ramen, a spicy challenge bowl and gyoza; closed Tue)
//   + 麺屋 猿のすけ (creamy chicken paitan and miso paitan, 10:00–4:00)
//   + 小洞天 (since 1971: clear chicken shio ramen, wontons and hand-made gyoza; 18:00–24:00)
//   + 千日前 やすだや 本店 (bite-sized Osaka gyoza — filed 'gyoza', no ramen block)
// Skipped: 鉄板こてこて 27097939 (3 reviews), 世紀末の小麦祭り 本店 27139984 (newest review Sept 2024).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 15);

skip('27097939', 'Three reviews only; too thin to describe.');
skip('27139984', 'Newest review is September 2024 and the address now reads "OSAKA RAMEN BUILDING B1F"; current operation unverified.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ 麺やkotetsu 難波
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27082467/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '02:00']);
  put({
    id: 'osaka_menya_kotetsu_namba', name: '麺やkotetsu 難波 (Menya Kotetsu Namba)', category: 'OMNI',
    lat: 34.667411, lng: 135.503832, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth with niboshi, chashu, egg.',
    hours_raw: 'Mon and Wed–Sun 17:00–2:00; closed Tuesdays (Tabelog). Cards and e-money accepted.',
    hours: { 0: d, 1: [], 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-9-9, a back alley of Namba — red lanterns and a yellow noren',
    cuisine: 'Clear golden chicken shio ramen (special ¥1,550) · chicken-and-niboshi shoyu ¥950 · tantanmen (special ¥1,650) · "Kotetsu special spicy ramen" challenge · big juicy gyoza (2 for ¥350) · 8-seat counter · to 2 am',
    website: null, gmaps: gm('麺やkotetsu 難波'), menu_url: null,
    notes: "[Ramen · clear chicken shio in a Sennichimae back alley] An 8-seat counter behind red lanterns and a yellow noren in a Namba back alley, once a gyoza shop and now a ramen bar as well. The favourite is the special chicken shio ramen (¥1,550, August 2026): a clear, golden broth bursting with chicken, salty but drinkable to the last drop, with smooth thin noodles, thick tender chashu, sweet thick menma and a soy-steeped egg. The shoyu (¥950) is chicken with a hint of niboshi on slightly thicker noodles. There's a rich sesame tantanmen (special ¥1,650) and a red \"special spicy ramen\" challenge that few finish. Gyoza come two to a plate (¥350) and are big and juicy. Service can feel rushed. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae 1-chōme', background: 'Formerly a gyoza restaurant that added ramen (September 2026 review).', philosophy: null, specialty: 'Chicken shio ramen; gyoza.',
      anecdotes: [
        { text: '"The clear, golden broth bursts with chicken flavor the moment you take a sip. Despite its slightly stronger saltiness, it\'s not overwhelming." — August 2026, special chicken shio ramen.', source: R + 'B534795647/' },
        { text: '"Special Chicken Sio Ramen: JPY 1,550… Gyoza (2 pieces): JPY 350… Shoyu Ramen: JPY 950… The chicken broth is rich with a strong soy sauce flavor and a hint of sweetness from the niboshi." — August 2026.', source: R + 'B534279582/' },
      ],
      japanese_sources_summary: '食べログ: 麺やkotetsu 難波、大阪市中央区千日前1-9-9、8席(カウンター)、月水〜日・祝17:00〜翌2:00、火曜定休、禁煙、カード・電子マネー可。2026年の口コミ(8〜9月): 特製鶏塩ラーメン1,550円(なめらかな細ストレート麺、太めの甘いメンマ、醤油の香りの味玉、厚くやわらかいチャーシュー、ねぎと白ねぎ)、餃子2個350円(大きくジューシー)、醤油ラーメン950円(やや太いストレート麺、鶏と煮干し)、透き通った金色のスープ、もとは餃子専門店、赤提灯と黄色ののれん、激辛チャレンジラーメン、特製担々麺1,650円(ごまが濃い)、注文を急かされる、50円玉のお釣り。',
      confidence: 'medium', sources: [TB, R + 'B534795647/', R + 'B534279582/', R + 'B535738613/', R + 'B535254904/', R + 'B536159506/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Smooth thin straight noodles (shio); slightly thicker straight for shoyu (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Special chicken shio ramen ¥1,550 (August 2026).',
      chashu: 'Thick-cut, "incredibly tender" (August 2026).',
      notable_toppings: ['thick sweet menma', 'soy-marinated egg', 'green and white onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'The yellow-noren back-alley counter in Sennichimae: a clear, golden, salt-forward chicken shio, with a red challenge bowl for the brave.',
      profile: { richness: 3, oiliness: 2, clarity: 5, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535738613/', '"The broth, rich in chicken flavor, has a light yet satisfying taste with a refreshing aftertaste."'],
        oiliness: [R + 'B535738613/', 'Light, refreshing broth — placed low (inferred).'],
        clarity: [R + 'B534795647/', '"The clear, golden broth."'],
        tare_strength: [R + 'B534795647/', '"Despite its slightly stronger saltiness, it\'s not overwhelming"; "a stronger saltiness" (' + R + 'B534279582/).'],
        noodle_firmness: [R + 'B534795647/', '"The thin, straight noodles are chewy."'],
        aroma_punch: [R + 'B534795647/', '"Bursts with chicken flavor the moment you take a sip."'],
      },
      confidence: 'medium', sources: [R + 'B534795647/', R + 'B534279582/', R + 'B535738613/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; quick ordering expected.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-9-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目9番9号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534279582/', R + 'B536159506/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special chicken shio ramen', '¥1,550', 'Ramen', 'no', 'no', 'August 2026.', 'tokusei_torishio'),
      it('', '', 'Shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu'),
      it('', '', 'Special tantanmen', '¥1,650', 'Ramen', 'no', 'no', 'September 2026.', 'tantanmen'),
      it('', '', 'Kotetsu special spicy ramen (challenge)', '', 'Ramen', 'no', 'no', 'September 2026.', 'spicy_challenge'),
      it('餃子', 'gyōza', 'Gyoza (2 pieces)', '¥350', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: '透き通った金色の鶏塩ラーメン(特製1,550円)・鶏と煮干しの醤油950円・担々麺(特製1,650円)・激辛チャレンジラーメン・大きくジューシーな餃子(2個350円)・カウンター8席・深夜2時まで',
    neighborhood: '千日前1-9-9、なんばの裏路地。赤提灯と黄色ののれん',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。鶏と煮干しのスープ、チャーシュー、卵。',
    notes: '[ラーメン・千日前の裏路地の透き通った鶏塩] なんばの裏路地、赤提灯と黄色ののれんの奥にある8席のカウンターで、もとは餃子の店、今はラーメンも。人気は特製鶏塩ラーメン(1,550円、2026年8月)で、透き通った金色のスープは鶏のうま味があふれ、塩気は強めでも最後まで飲めます。なめらかな細麺、厚くやわらかいチャーシュー、甘い太めのメンマ、醤油の効いた味玉。醤油(950円)は鶏に煮干しがほんのり香り、やや太めの麺。ごまの濃い担々麺(特製1,650円)や、完食できる人が少ない真っ赤な激辛チャレンジも。餃子は2個で350円、大きくてジューシー。注文を急かされることも。火曜定休。',
  });
}

// ================================================================ 麺屋 猿のすけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122723/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_sarunosuke_higashishinsaibashi', name: '麺屋 猿のすけ (Menya Sarunosuke)', category: 'OMNI',
    lat: 34.670363, lng: 135.504116, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tempura and katsu toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth, chashu.',
    hours_raw: 'Daily 10:00–4:00 next morning (Tabelog). Order at a multilingual tablet / ticket machine at the entrance. Cards and e-money accepted.',
    hours: ALL(day(['10:00', '04:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-10, Kyōya Bldg 1F — a few minutes from Shinsaibashi Stn',
    cuisine: 'Creamy, potage-like chicken paitan · miso paitan ¥1,200 with a bold miso · rich curry chicken paitan · chicken-katsu curry paitan, shrimp-tempura and crispy-chicken ramen · pork and chicken chashu, mizuna, red onion, thread chili · mini chashu bowl · 10-seat counter · 10 am–4 am',
    website: null, gmaps: gm('麺屋 猿のすけ 東心斎橋'), menu_url: null,
    notes: "[Ramen · creamy chicken paitan, morning to 4 am] A 10-seat counter in Higashi-Shinsaibashi, open from 10 am to 4 am, with queues of mostly overseas visitors and a \"How to Eat Ramen\" sign. The base is a creamy chicken paitan, \"reminiscent of a velvety soup\", over chewy, slightly thick noodles. It comes with pork chashu, chicken breast, mizuna, white and red onion, thread chili and sesame. The miso paitan (¥1,200, June 2026) leans hard into miso, and the rich curry paitan blends cream and spice. Novelties include a chicken-katsu curry paitan and ramen with shrimp tempura or crispy chicken. Add a mini chashu bowl, and pepper or vinegar from the table. Order at the multilingual tablet by the door.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Shinsaibashi 2-chōme', background: 'Signage reads "Creamy Chicken Paitan MISO Ramen SARUNOSUKE" (June 2026 review); no source names the operator.', philosophy: null, specialty: 'Creamy chicken paitan.',
      anecdotes: [
        { text: '"The \'Chicken Paitan Ramen\' had a creamy and rich flavor, reminiscent of a velvety soup with a deep umami taste. The noodles were slightly thick and had a chewy texture." — June 2026.', source: R + 'B530927600/' },
        { text: '"I was pleasantly surprised by the bold miso flavor—it was incredibly delicious! Many miso white soup ramens I\'ve had before had a weak miso taste." — June 2026, miso paitan ¥1,200.', source: R + 'B529789786/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 猿のすけ、大阪市中央区東心斎橋2-6-10 京谷ビル1F、12席(カウンター)、毎日10:00〜翌4:00、禁煙、カード・電子マネー可。2026年の口コミ(6〜10月): 濃厚カレー鶏白湯と鶏チャーシュー、紫玉ねぎ、半熟玉子、中太麺、味噌白湯ラーメン1,200円(券売機、細ストレート麺、チャーシュー、メンマ、新玉ねぎ、水菜、白ねぎ、糸唐辛子、味噌がしっかり)、多言語のタブレットで注文、カウンター10席、ポタージュのような鶏白湯、ミニチャーシュー丼、豚チャーシュー・鶏むね・水菜・白玉ねぎ・紫玉ねぎ・糸唐辛子・ごま、卓上の黒胡椒・七味・酢、「ラーメンの食べ方」の案内、外国人客の行列、チキンカツカレー白湯、海老天2本のラーメン、クリスピーチキンのラーメン。',
      confidence: 'medium', sources: [TB, R + 'B530927600/', R + 'B529789786/', R + 'B529774038/', R + 'B537409637/', R + 'B534709335/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Slightly thick, chewy noodles (June 2026); thin straight in the miso paitan (June 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chicken paitan ramen; miso paitan ramen ¥1,200 (June 2026).',
      chashu: 'Pork chashu and chicken breast chashu (June 2026).',
      notable_toppings: ['mizuna', 'red and white onion', 'thread chili', 'sesame', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken paitan.' },
      pantheon: 'Higashi-Shinsaibashi\'s morning-to-4-am chicken paitan: velvety as potage, best with a hard miso edge or a curry kick.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B530927600/', '"A creamy and rich flavor, reminiscent of a velvety soup."'],
        oiliness: [R + 'B529774038/', '"The broth maintained a smooth texture until the end" — oil not described; mid-scale (inferred).'],
        clarity: [R + 'B530927600/', 'Creamy paitan — opaque.'],
        tare_strength: [R + 'B529789786/', '"This restaurant really emphasizes the miso."'],
        noodle_firmness: [R + 'B529789786/', '"The noodles had a chewy texture."'],
        aroma_punch: [R + 'B529774038/', 'Curry version: "the spicy flavor of the curry"; thread chili on top.'],
      },
      confidence: 'medium', sources: [R + 'B530927600/', R + 'B529789786/', R + 'B529774038/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Multilingual ordering tablet and a "How to Eat Ramen" sign (June 2026).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-10 京谷ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529789786/', R + 'B537409637/'],
    price_note: 'One price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'June–October 2026.', 'toripaitan'),
      it('', '', 'Miso paitan ramen', '¥1,200', 'Ramen', 'no', 'no', 'June 2026.', 'miso_paitan'),
      it('', '', 'Rich curry chicken paitan ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'curry_paitan'),
      it('', '', 'Chicken-katsu curry paitan / shrimp-tempura ramen / crispy-chicken ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'novelty'),
      it('', '', 'Mini chashu rice bowl', '', 'Rice', 'no', 'no', 'June 2026.', 'mini_chashu_don'),
    ] }, {
    cuisine: 'ポタージュのようなクリーミーな鶏白湯・味噌がしっかりの味噌白湯1,200円・濃厚カレー鶏白湯・チキンカツカレー白湯、海老天やクリスピーチキンのラーメン・豚と鶏のチャーシュー、水菜、紫玉ねぎ、糸唐辛子・ミニチャーシュー丼・カウンター10席・朝10時〜深夜4時',
    neighborhood: '東心斎橋2-6-10 京谷ビル1F。心斎橋駅から数分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、天ぷらやカツのトッピング。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープ、チャーシュー。',
    notes: '[ラーメン・朝から深夜4時までのクリーミーな鶏白湯] 東心斎橋にある10席のカウンターで、朝10時から深夜4時まで。行列はほとんど海外からの客で、「ラーメンの食べ方」の案内もあります。ベースは「ポタージュのよう」なクリーミーな鶏白湯で、もちもちのやや太い麺に豚チャーシュー、鶏むね、水菜、白と紫の玉ねぎ、糸唐辛子、ごま。味噌白湯(1,200円、2026年6月)は味噌がしっかり効き、濃厚カレーはクリーミーさと辛さが一体に。チキンカツカレー白湯や海老天、クリスピーチキンのラーメンなど変わり種も。ミニチャーシュー丼と卓上の胡椒や酢も。入口の多言語タブレットで注文を。',
  });
}

// ================================================================ 小洞天
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001197/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:59']);
  put({
    id: 'osaka_shodoten_sennichimae', name: '小洞天 (Shodoten)', category: 'OMNI',
    lat: 34.668159, lng: 135.504572, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, wontons and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth, chashu, wontons.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sundays and holidays (Tabelog). Cash only (no cards, e-money or QR, per Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-6-10, Senju Bldg 1F, a back alley of Ura-Namba',
    cuisine: 'Since 1971: clear chicken-bone shio ramen · chashu ramen ¥1,200 · wonton noodles ¥1,100 · hand-made gyoza (8 for ¥400) · bottled beer · 11-seat counter · the classic late-night finish',
    website: null, gmaps: gm('小洞天 千日前'), menu_url: null,
    notes: "[Ramen · Minami's 1971 shio ramen and gyoza counter] An 11-seat counter in a back-alley building in Ura-Namba, serving ramen and gyoza since 1971 and still a classic end to a night of drinking. The ramen is a clear, gentle chicken-bone shio, made by pouring a yellow tare into the bowl, then the sparkling broth, with sesame, bean sprouts, green onion and thin straight noodles. The chashu ramen was ¥1,200 in September 2026, and the wonton noodles ¥1,100. The hand-made gyoza (8 for ¥400) are light and chewy, and media favourites. Wontons are made fresh and can sell out. One regular has visited more than 140 times. It was long run by a married couple; the owner now trains a younger team. Evenings only, closed Sundays, cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1971 (October 2026 review); "55 years" (September 2026 review)', background: 'Run by a husband-and-wife team before the pandemic, then by the owner with newly trained young staff (January 2025 and September 2026 reviews); no source names the owner.', philosophy: null, specialty: 'Clear shio ramen; hand-made gyoza and wontons.',
      anecdotes: [
        { text: '"When I poured the yellow tare and then the broth, the clear chicken broth sparkled with sesame seeds. This is it!! This is what I wanted to eat!" — September 2026, chashu ramen ¥1,200, gyoza 8 for ¥400.', source: R + 'B311515732/' },
        { text: '"This restaurant, established in 1971, specializes in ramen and gyoza. They serve a light shio ramen with a clear broth and gyoza made from scratch by the chef." — October 2026 (the reviewer\'s 141st visit).', source: R + 'B277041888/' },
      ],
      japanese_sources_summary: '食べログ: 小洞天、大阪市中央区千日前1-6-10 千寿ビル1F、11席(カウンターのみ)、月〜土18:00〜24:00、日祝定休、カード・電子マネー・QR決済不可、喫煙可。口コミ(2025年1月〜2026年10月): 1971年創業のラーメンと餃子の店、澄んだあっさりの塩ラーメン、店主手作りの餃子、141回目の訪問、55年続く店、飲んだ後の締め、コロナ前は夫婦で営業し今は店主が若いスタッフを育てている、ワンタンは売り切れることも、チャーシュー麺1,200円(2025年1月は950円)、餃子8個400円、黄色いたれに澄んだ鶏ガラスープとごま、もやしとねぎ、ワンタンチャーシューメン、ワンタン麺1,100円、細ストレート麺、塩のかえし、鶏ガラ、メディアにも出た餃子。',
      confidence: 'medium', sources: [TB, R + 'B311515732/', R + 'B277041888/', R + 'B537070247/', R + 'B537772524/', R + 'B536838262/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: ['chicken oil'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chashu ramen ¥1,200; wonton noodles ¥1,100 (September–October 2026).',
      chashu: 'Chashu (chashu ramen).',
      notable_toppings: ['sesame', 'bean sprouts', 'green onion', 'wontons'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-bone broth.' },
      pantheon: 'Ura-Namba since 1971: a sparkling, gentle chicken shio over a yellow tare, with hand-made gyoza and wontons, the night\'s last stop.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 2, noodle_firmness: 3, aroma_punch: 1 },
      profile_basis: {
        richness: [R + 'B311515732/', '"The light and gentle broth is full of umami."'],
        oiliness: [R + 'B311515732/', '"The chicken oil blends perfectly with the chicken bones" (January 2025 visit) — light.'],
        clarity: [R + 'B537772524/', 'Style: "Clear Soup"; "the clear chicken broth sparkled" (' + R + 'B311515732/).'],
        tare_strength: [R + 'B536838262/', '"The ramen has a very gentle flavor."'],
        noodle_firmness: [R + 'B537772524/', 'Thin straight noodles; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B537070247/', '"The broth was clear and light" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B311515732/', R + 'B537772524/', R + 'B536838262/', R + 'B537070247/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'japanese', note: 'An old-school counter; cash only; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-10 千寿ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番10号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B311515732/', R + 'B537070247/'],
    price_note: 'Prices from September–October 2026 reviews (chashu ramen was ¥950 in January 2025).', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Shio ramen (clear chicken broth)', '', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('チャーシュー麺', 'chāshū-men', 'Chashu ramen', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'chashumen'),
      it('ワンタン麺', 'wantan-men', 'Wonton noodles', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'wonton'),
      it('餃子', 'gyōza', 'Gyoza (8 pieces)', '¥400', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '1971年から: 澄んだ鶏ガラの塩ラーメン・チャーシュー麺1,200円・ワンタン麺1,100円・手作りの餃子(8個400円)・瓶ビール・カウンター11席・夜の締めの定番',
    neighborhood: '千日前1-6-10 千寿ビル1F、裏なんばの路地',
    gf_detail: 'グルテンフリーではありません。小麦の麺、ワンタン、餃子。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、チャーシュー、ワンタン。',
    notes: '[ラーメン・ミナミの1971年からの塩ラーメンと餃子] 裏なんばの路地のビルにある11席のカウンターで、1971年からラーメンと餃子を出し、今も飲んだ後の締めの定番。ラーメンは澄んだやさしい鶏ガラの塩で、丼に黄色いたれを入れてからきらめくスープを注ぎ、ごま、もやし、ねぎ、細ストレート麺。チャーシュー麺は2026年9月で1,200円、ワンタン麺は1,100円。手作りの餃子(8個400円)は軽くもちもちで、メディアにもたびたび登場。ワンタンは作りたてで売り切れることも。140回以上通う常連も。長く夫婦で営んできた店で、今は店主が若いスタッフを育てています。夜だけの営業で日曜休み、現金のみ。',
  });
}

// ================================================================ 千日前 やすだや 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27070348/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://www.yasuda-ya.jp/';
  const n = day(['16:00', '23:59']), late = day(['16:00', '03:00']);
  put({
    id: 'osaka_sennichimae_yasudaya_honten', name: '千日前 やすだや 本店 (Sennichimae Yasudaya)', category: 'OMNI',
    lat: 34.667346, lng: 135.503826, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp and squid gyoza. A vegetable gyoza exists (October 2026) but its wrapper and filling are not described.',
    hours_raw: 'Mon, Wed, Thu, Sun and holidays 16:00–24:00 (L.O. 23:30); Fri, Sat and nights before holidays 16:00–3:00 (L.O. 2:00); closed Tuesdays; holiday-period hours vary (Tabelog). Smoking allowed (Tabelog). Multilingual menus (October 2026).',
    hours: { 0: n, 1: [], 2: n, 3: n, 4: late, 5: late, 6: n }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-9-8, Ōzawa Bldg, across from Amza',
    cuisine: 'Bite-sized Osaka gyoza · original garlic gyoza ¥450–500 · juicy shrimp gyoza ¥550 (try with salt) · squid, potato-cheese and vegetable gyoza · salted tamago rice ¥990 · draft beer ¥600 · late nights · smoking allowed',
    website: OWN, gmaps: gm('千日前 やすだや 本店'), menu_url: null,
    notes: "[Gyoza · bite-sized Osaka gyoza across from Amza] The main shop of Yasudaya, an 18-seat gyoza izakaya across from Amza in Sennichimae, open late and lively, with multilingual menus. The gyoza are small enough to eat in one bite, so order several kinds. The original garlic gyoza (¥450–500 in October 2026) has a crisp, thin skin and a strong garlic punch. The juicy shrimp gyoza (¥550) is best with salt, as staff suggest. There are also squid, potato-cheese and vegetable versions. One diner found the potato-cheese and vegetable ones not to their taste. Wash them down with ¥600 draft beer and finish with salted tamago rice (¥990). Tables are cramped and service can be distracted. Smoking allowed, closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop (Tabelog); the first Sennichimae Yasudaya opened in June 2011 (Tabelog remarks)', background: 'Yasudaya gyoza (yasuda-ya.jp); Tabelog introduction: "A Man Devoted to Gyoza! Crafted by a Naniwa Artisan".', philosophy: null, specialty: 'Bite-sized gyoza.',
      anecdotes: [
        { text: '"Original Garlic Gyoza JPY 450… These gyoza feature a crispy thin skin filled with a strong punch of garlic… Juicy Shrimp Gyoza JPY 550… The staff recommended enjoying it with salt." — October 2026.', source: R + 'B536796314/' },
        { text: '"We ordered 4 servings of regular pan-fried gyoza, 1 serving each of squid gyoza and shrimp gyoza… Osaka-style gyoza is perfect on its own!" — September 2026.', source: R + 'B536387140/' },
      ],
      japanese_sources_summary: '食べログ: 千日前 やすだや 本店、大阪市中央区千日前1-9-8 大ざわビル、18席(カウンター8、テーブル10)、月水木日祝16:00〜24:00(L.O.23:30)、金土祝前日16:00〜翌3:00(L.O.2:00)、火曜定休、喫煙可、カード可(VISA、JCB)、2013年10月1日開店、2011年6月に千日前やすだや1号店、公式 yasuda-ya.jp、「餃子に命をかけた男!浪花の職人が作る一口餃子」。2026年の口コミ(9〜10月): 一口餃子、焼き餃子4人前、いか餃子、えび餃子、ねぎとチャーシューの盛り合わせ、酢を多めに、シャンディガフ600円、にんにく餃子500円(別の客は450円)、ポテトチーズ餃子500円、野菜餃子は口に合わなかった、店員が気が利かない、テーブルが狭い、アムザの向かい、生ビール600円、ぷりぷり海老餃子550円(塩で)、あっさり塩たまごご飯990円、多言語メニュー、外国人客が多い、提供が早い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536796314/', R + 'B536387140/', R + 'B536611870/', R + 'B537071704/', R + 'B537758669/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual menus; many overseas customers (October 2026).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-9-8 大ざわビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目9番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536796314/', R + 'B536611870/'],
    price_note: 'Prices from October 2026 reviews (two reviews give ¥450 and ¥500 for the garlic gyoza).', last_checked: TODAY, items: [
      it('', '', 'Original garlic gyoza', '¥450', 'Gyoza', 'no', 'no', 'October 2026; another October review says ¥500.', 'garlic_gyoza'),
      it('', '', 'Juicy shrimp gyoza', '¥550', 'Gyoza', 'no', 'no', 'October 2026.', 'shrimp_gyoza'),
      it('', '', 'Potato-cheese gyoza', '¥500', 'Gyoza', 'no', 'no', 'October 2026.', 'potato_cheese'),
      it('', '', 'Squid gyoza', '', 'Gyoza', 'no', 'no', 'September 2026.', 'squid_gyoza'),
      it('', '', 'Salted tamago rice', '¥990', 'Rice', 'ask', 'no', 'October 2026.', 'tamago_rice'),
      it('生ビール', 'nama bīru', 'Draft beer', '¥600', 'Drinks', 'no', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '一口サイズの大阪の餃子・元祖にんにく餃子450〜500円・ぷりぷり海老餃子550円(塩で)・いか、ポテトチーズ、野菜の餃子・あっさり塩たまごご飯990円・生ビール600円・深夜まで・喫煙可',
    neighborhood: '千日前1-9-8 大ざわビル、アムザの向かい',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子。',
    vegan_detail: 'ヴィーガンではありません。豚肉、えび、いかの餃子。野菜餃子もありますが(2026年10月)、皮や具の中身は書かれていません。',
    notes: '[餃子・アムザ向かいの一口餃子] 千日前のアムザの向かいにある、やすだやの本店で18席の餃子居酒屋。深夜まで開いていてにぎやか、メニューは多言語。一口で食べられる小さな餃子なので、何種類も頼んで。元祖にんにく餃子(2026年10月で450〜500円)は薄くパリッとした皮ににんにくがガツンと効き、ぷりぷり海老餃子(550円)は店員のすすめどおり塩で。いか、ポテトチーズ、野菜の餃子も。ポテトチーズと野菜は口に合わなかったという客も。600円の生ビールで流し込み、締めはあっさり塩たまごご飯(990円)。テーブルは狭く、接客が行き届かないことも。喫煙可、火曜定休。',
  });
}

save();
