// Osaka sweep (2-mile circle around Dotonbori), batch 4 — ramen phase, nearest first (all OMNI).
//   + どうとんぼり神座 千日前店 (Kamukura's Sennichimae counter shop; 9:00–7:00)
//   + 楊國福 マーラータン 大阪心斎橋店 (build-your-own malatang chain — Tabelog tags it ramen)
//   + 餃子工房ちびすけ 南心斎橋店 (gyoza izakaya with a Jirō-style ramen; smoking allowed)
//   + ラーメンまこと屋 心斎橋店 (beef-bone "gyū-paitan" ramen, 24 h)
// Skipped: By Tres 麺や まぜそば 龍神 (27146070; nothing since January 2025), 一号艇 なんば店 (27139966; two reviews, one in 2025).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 4);

skip('27146070', 'Seven reviews, December 2024–January 2025; nothing since.');
skip('27139966', 'Two reviews (December 2023, November 2025); too thin to describe.');

// ================================================================ どうとんぼり神座 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001561/'; const R = TB + 'dtlrvwlst/';
  const d = day(['09:00', '07:00']);
  put({
    id: 'osaka_kamukura_sennichimae', name: 'どうとんぼり神座 千日前店 (Dotonbori Kamukura Sennichimae)', category: 'OMNI',
    lat: 34.668437, lng: 135.50303, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sets add kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu and pork; the vegetable ramen still uses the house broth, which is not described as plant-based.',
    hours_raw: 'Daily 9:00–7:00 next morning (Tabelog). Ticket machine in front.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-32, Sennichimae side, across from Ichiran — 5 min from Namba Stn',
    cuisine: 'Kamukura’s Sennichimae counter shop · light, slightly sweet broth with plenty of napa cabbage · vegetable ramen ¥1,110 · ramen, kara-age and rice set ~¥1,350 · cold pork-shabu ume-shiso ramen (summer) · open 22 h',
    website: 'https://kamukura.co.jp/', gmaps: gm('どうとんぼり神座 千日前店'), menu_url: null,
    notes: "[Ramen · Kamukura on the Sennichimae side] A 40-seat, counter-only Kamukura across from Ichiran on Dotonbori's Sennichimae end, open 9:00 to 7:00 the next morning. The narrow room has a one-way flow, so it's not for lingering. Fans call it Osaka soul food from before the chain went national: a light, slightly sweet, almost Western-style broth loaded with napa cabbage, the kind people want after drinking instead of heavy tonkotsu. One diner insists it tastes different from other branches. Try the vegetable ramen (¥1,110) or the ramen, kara-age and rice set (about ¥1,350); summer brought a cold pork-shabu ramen with ume, shiso and grated daikon (¥1,250). Buy a ticket at the machine out front. Service can be flat late at night, and one summer visitor found the cabbage bitter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae branch of Dotonbori Kamukura (Tabelog listing name)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Napa-cabbage ramen.',
      anecdotes: [
        { text: '"This ramen features a slightly sweet broth filled with plenty of cabbage, a delightful Western-style soup that I’ve loved for years. Although it has now become a nationwide chain, it used to be exclusive to Namba." — August 2026, ramen set with kara-age and rice (about ¥1,350).', source: R + 'B533672708/' },
        { text: '"The ramen was delicious, with the sweetness of the vegetables and the lightness of the broth soothing my stomach after drinking." — September 2026.', source: R + 'B536095788/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 千日前店、大阪市中央区道頓堀1-6-32、なんば駅から289m、40席、毎日9:00〜翌7:00、予約不可、公式サイト kamukura.co.jp。2026年の口コミ: 神座か金龍かの論争、千日前店は3年ぶり、一蘭の40分待ちを避けて向かいのこの店へ朝8時50分、野菜ラーメン1,110円、スープが止まらない、キャベツ(白菜)がたっぷり、夏は白菜に苦みとの声、チャーシューがおいしい、ほんのり甘い洋風のスープ、昔はなんばだけの店、唐揚げとご飯のセット約1,350円、冷やし梅しそおろし豚しゃぶ1,250円(券売機)、冷房が強い、飲んだ後に優しいあっさりラーメン、券売機、若いスタッフの接客が暗いとの声、カウンターのみの細長い店で一方通行、チェーンでも味が違う。',
      confidence: 'medium', sources: [TB, R + 'B533672708/', R + 'B536095788/', R + 'B533623094/', R + 'B534779941/', R + 'B536380846/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"Slippery" noodles (August 2026); thick noodles in the summer cold ramen (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'おいしいラーメン (delicious ramen); 野菜ラーメン (vegetable ramen) ¥1,110 (August 2026).',
      chashu: 'Chashu and pork bits ("delicious").',
      notable_toppings: ['napa cabbage', 'carrot (vegetable ramen)', 'pork'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork; house broth not described as plant-based.' },
      pantheon: 'Kamukura where it began, in Namba: a light, slightly sweet, almost Western soup buried in napa cabbage, the bowl Minami reaches for after drinking instead of tonkotsu.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536095788/', '"The sweetness of the vegetables and the lightness of the broth."'],
        oiliness: [R + 'B536095788/', '"Something lighter and more soothing" than tonkotsu.'],
        clarity: [R + 'B533672708/', '"A slightly sweet broth… a delightful Western-style soup" — not described as clear or cloudy; placed mid-scale.'],
        tare_strength: [R + 'B533672708/', '"A slightly sweet broth filled with plenty of cabbage."'],
        noodle_firmness: [R + 'B533623094/', '"The noodles were slippery, but not really to my taste."'],
        aroma_punch: [R + 'B536095788/', 'Gentle, soothing bowl; no source describes a strong aroma.'],
      },
      confidence: 'medium', sources: [R + 'B536095788/', R + 'B533672708/', R + 'B533623094/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-6-32',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番 (lot) 84m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533623094/', R + 'B533672708/', R + 'B534779941/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('野菜ラーメン', 'yasai rāmen', 'Vegetable ramen', '¥1,110', 'Ramen', 'no', 'no', 'August 2026.', 'yasai'),
      it('おいしいラーメン 唐揚げ・ご飯セット', '', 'Ramen with kara-age and rice set', '¥1,350', 'Sets', 'no', 'no', 'About, August 2026.', 'set'),
      it('冷やし梅しそおろし豚しゃぶ', '', 'Cold pork-shabu ramen with ume, shiso and grated daikon (summer)', '¥1,250', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi_buta'),
    ] }, {
    cuisine: '神座の千日前のカウンター店・白菜たっぷりのほんのり甘いあっさりスープ・野菜ラーメン1,110円・ラーメンと唐揚げとご飯のセット約1,350円・夏の冷やし梅しそ豚しゃぶ・22時間営業',
    neighborhood: '道頓堀1-6-32、千日前側、一蘭の向かい。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。セットには唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシューや豚肉。野菜ラーメンも店のスープを使い、植物性とは書かれていません。',
    notes: '[ラーメン・千日前側の神座] 道頓堀の千日前寄り、一蘭の向かいにある40席のカウンターだけの神座で、朝9時から翌朝7時まで。細長い店内は一方通行なので長居には向きません。全国チェーンになる前の大阪のソウルフードと呼ぶファンも多く、白菜たっぷりのあっさりほんのり甘い洋風のスープは、飲んだ後に重い豚骨の代わりに食べたくなる一杯。他の店とは味が違うという客も。野菜ラーメン(1,110円)や、ラーメンと唐揚げとご飯のセット(約1,350円)、夏は梅しそおろしの冷やし豚しゃぶラーメン(1,250円)も。店前の券売機で食券を。深夜の接客がそっけない、夏の白菜が苦かったという声も。',
  });
}

// ================================================================ 楊國福 マーラータン 大阪心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131686/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:30']);
  put({
    id: 'osaka_yang_guo_fu_malatang_shinsaibashi', name: '楊國福 マーラータン 大阪心斎橋店 (Yang Guo Fu Malatang Shinsaibashi)', category: 'OMNI',
    lat: 34.670263, lng: 135.500779, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You build the bowl yourself from vegetables, mushrooms, meat, seafood, fish cakes and noodles (including vermicelli), but the mala, tomato and sesame broths are not described and fish cakes and some noodles contain wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. You can choose only vegetables and mushrooms, but the broths (mala, tomato) and sesame sauce are not described.',
    hours_raw: 'Daily 11:00–21:30 (Tabelog). Pick ingredients into a bowl, pay by weight, then join the seating queue.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-6-16 1F — 5 min from Shinsaibashi or Nipponbashi Stn',
    cuisine: 'Chinese malatang chain · fill a bowl with vegetables, mushrooms, meat, seafood and noodles, priced by weight · mala, tomato or mild broths · adjustable spice · sesame sauce · queues',
    website: null, gmaps: gm('楊國福マーラータン 大阪心斎橋店'), menu_url: null,
    notes: "[Chinese · build-your-own malatang in Shinsaibashi] A busy branch of the Yang Guo Fu malatang chain, open since 2022, with 31 seats and queues even mid-afternoon. With tongs you fill a bowl from a spread of vegetables, mushrooms, mountain jellyfish, wood ear, meat, squid, quail eggs, fish cakes and noodles (including vermicelli). The cashier weighs it to set the price, and you pick the spice level and broth. One diner prefers the tomato broth, which tastes almost like tomato ramen; another tamed the heat with sesame sauce. Even spice level one is quite spicy. Choose and pay before you join the seating line. Staff are largely from overseas, so Japanese may be limited.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2022 (Tabelog)', background: 'Branch of the Yang Guo Fu malatang chain (Tabelog listing name).', philosophy: null, specialty: 'Malatang priced by weight.',
      anecdotes: [
        { text: '"At the restaurant, you use tongs to add your choice of ingredients—vegetables, seafood, meat, fish cakes, and noodles—into a special bowl… and then you hand the bowl to the cashier, who weighs it to determine the price." — September 2026.', source: R + 'B534973900/' },
        { text: '"I definitely preferred the tomato version over the normal one… it tastes almost like a tomato ramen soup." — September 2026.', source: R + 'B535918398/' },
      ],
      japanese_sources_summary: '食べログ: 楊國福マーラータン 大阪心斎橋店、大阪市中央区心斎橋筋2-6-16 1F、心斎橋駅・日本橋駅徒歩5分、31席、毎日11:00〜21:30、予約不可、2022年7月1日開店。2026年の口コミ(8〜10月): 開店前から並ぶ、先に具材を選んで注文してから席の列へ、好きな具を好きなだけ(キクラゲ、春雨など)、スパイスの効いたスープ、辛さを調整できる、トングで野菜・魚介・肉・練り物・麺をボウルに入れてレジで計量して値段が決まる、牛肉・うずら・イカ・キクラゲ・エリンギ・えのき、昼過ぎでも混む、客の9割が女性、トマト味がおすすめ、トマトラーメンのよう、春雨、スタッフは外国人で日本語が通じにくい、辛さ1でもかなり辛い、ごまだれで辛さを和らげる、野菜が多く糖質が少ない。',
      confidence: 'medium', sources: [TB, R + 'B534973900/', R + 'B535918398/', R + 'B533878224/', R + 'B534762364/', R + 'B537094699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose and pay first; staff may speak little Japanese.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-6-16 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目6番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534973900/'],
    price_note: 'Priced by the weight of the bowl you fill (no prices captured).', last_checked: TODAY, items: [
      it('麻辣湯', 'mārātan', 'Malatang: your choice of ingredients, mala broth, priced by weight', '', 'Malatang', 'ask', 'ask', '2026.', 'malatang'),
      it('トマト麻辣湯', '', 'Tomato-broth malatang', '', 'Malatang', 'ask', 'ask', 'September 2026.', 'tomato'),
    ] }, {
    cuisine: '中国の麻辣湯チェーン・野菜、きのこ、肉、魚介、麺をボウルに入れて重さで値段・麻辣、トマト、マイルドなスープ・辛さを調整・ごまだれ・行列',
    neighborhood: '心斎橋筋2-6-16 1F。心斎橋駅・日本橋駅から徒歩5分',
    gf_detail: '要確認。野菜、きのこ、肉、魚介、練り物、麺(春雨も)から自分で選びますが、麻辣やトマト、ごまのスープの中身は書かれておらず、練り物や麺の一部は小麦を含みます。',
    vegan_detail: '要確認。野菜やきのこだけを選ぶこともできますが、スープ(麻辣、トマト)やごまだれの中身は書かれていません。',
    notes: '[中華・心斎橋で自分で選ぶ麻辣湯] 2022年開店、昼過ぎでも行列ができる31席の楊國福マーラータンの店。トングで野菜、きのこ、キクラゲ、肉、イカ、うずら、練り物、麺(春雨も)をボウルに入れ、レジで重さを量って値段が決まり、辛さとスープを選びます。トマトスープはトマトラーメンのようでおすすめという客も、ごまだれで辛さを和らげた客も。辛さ1でもかなり辛め。席の列に並ぶ前に具材を選んで会計を。スタッフは海外出身が多く、日本語は通じにくいこともあります。',
  });
}

// ================================================================ 餃子工房ちびすけ 南心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125874/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyoza_chibisuke_minamishinsaibashi', name: '餃子工房ちびすけ 南心斎橋店 (Gyoza Kobo Chibisuke)', category: 'OMNI',
    lat: 34.670387, lng: 135.502146, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, Jirō-style ramen and tantanmen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, pork-bone miso ramen, ginger pork; Osaka-style gyoza come with bonito flakes and mayonnaise.',
    hours_raw: 'Tabelog lists 18:00–11:00 daily (overnight), irregular closures; 2026 reviewers also describe lunch and 4 pm visits, so check before going. Smoking allowed (April 2026 review).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-2-10, Shin-Nihon Mitsudera Bldg 1F — 6–7 min from Shinsaibashi Stn',
    cuisine: 'Gyoza izakaya · Osaka-style gyoza with sauce, mayo, green onion and bonito · shiso and garlic gyoza · Jirō-style ramen ¥1,100 · tantanmen · cheap set meals (ginger pork ¥900) · open late · smoking allowed',
    website: null, gmaps: gm('餃子工房ちびすけ 南心斎橋店'), menu_url: null,
    notes: "[Gyoza izakaya · late-night gyoza and a Jirō-style bowl in Minami-Senba] A casual 34-seat gyoza izakaya, since 2021, with tables and three private rooms, open late and busy with overseas visitors. Order Osaka-style gyoza, dressed in sauce, mayonnaise, green onion and bonito flakes, or shiso, garlic or plain gyoza, with dashimaki and shrimp chilli-mayo. There's also a Jirō-style ramen (¥1,100): a rich pork-bone miso broth with thick, flat, high-hydration noodles under pork belly, cabbage and bean sprouts. Set meals are cheap (ginger pork ¥900), and dishes come fast. One diner found the food more \"not bad\" than delicious. Smoking is allowed inside. Tabelog's listed hours (18:00–11:00) don't match the lunch visits reviewers describe, so check.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 October 2021 (Tabelog)', background: 'Minami-Shinsaibashi branch (Tabelog listing name); no source names the operator.', philosophy: null, specialty: 'Gyoza; Jirō-style ramen.',
      anecdotes: [
        { text: '"Jiro-style Ramen JPY 1100… Broth: Rich miso soup based on pork bone. Noodles: Slightly thick, flat, straight noodles with a high water content. Toppings: Pork belly, cabbage, and bean sprouts… Smoking is allowed in the restaurant." — April 2026.', source: R + 'B526555448/' },
        { text: '"I ordered Osaka-style gyoza (served with sauce, mayonnaise, green onions, and bonito flakes), garlic gyoza, dashimaki (Japanese omelette), and shrimp chili mayonnaise, along with about four beers." — June 2026, around 4 pm.', source: R + 'B530626161/' },
      ],
      japanese_sources_summary: '食べログ: 餃子工房ちびすけ 南心斎橋店、大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル1F-9、なんば駅から399m、34席(2名テーブル2、4名テーブル4、4名個室3)、営業時間18:00〜11:00、不定休、予約可、2021年10月25日開店。2025〜2026年の口コミ: 定食が安い、味は「悪くない」程度、スタッフは親切、インバウンド客の多いランチ、生姜焼き定食900円、ジャンクなメニューで安く提供が早い、しそ餃子、餃子と担々麺、二郎系ラーメン1,100円(豚骨ベースの濃厚な味噌、やや太い平打ちストレートの多加水麺、豚バラ・キャベツ・もやし)、店内喫煙可、大阪餃子(ソース・マヨ・ねぎ・かつお節)、にんにく餃子、だし巻き、エビチリマヨ、平日の午後は外国人客が中心、深夜まで開いていて二軒目に。',
      confidence: 'medium', sources: [TB, R + 'B526555448/', R + 'B530626161/', R + 'B513004465/', R + 'B523436210/', R + 'B532020604/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed inside; casual.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル 1F-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526555448/', R + 'B513004465/'],
    price_note: 'Prices from February and April 2026 reviews.', last_checked: TODAY, items: [
      it('大阪餃子', '', 'Osaka-style gyoza (sauce, mayo, green onion, bonito)', '', 'Gyoza', 'no', 'no', 'June 2026.', 'osaka_gyoza'),
      it('しそ餃子', '', 'Shiso gyoza', '', 'Gyoza', 'no', 'no', 'February 2026.', 'shiso_gyoza'),
      it('二郎系ラーメン', 'jirō-kei rāmen', 'Jirō-style ramen (pork-bone miso)', '¥1,100', 'Noodles', 'no', 'no', 'April 2026.', 'jiro_ramen'),
      it('生姜焼き定食', '', 'Ginger pork set meal', '¥900', 'Set meals', 'no', 'no', 'February 2026.', 'shogayaki'),
    ] }, {
    cuisine: '餃子の居酒屋・ソース・マヨ・ねぎ・かつお節の大阪餃子・しそやにんにくの餃子・二郎系ラーメン1,100円・担々麺・安い定食(生姜焼き900円)・深夜まで・喫煙可',
    neighborhood: '心斎橋筋2-2-10 新日本三ツ寺ビル1F。心斎橋駅から徒歩6〜7分',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、二郎系ラーメン、担々麺。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、豚骨ベースの味噌ラーメン、生姜焼き。大阪餃子にはかつお節とマヨネーズ。',
    notes: '[餃子居酒屋・南船場の深夜の餃子と二郎系] 2021年からある気軽な34席の餃子居酒屋で、テーブルと個室3つ、深夜まで開いていて海外からの客で賑わいます。ソース、マヨネーズ、ねぎ、かつお節の大阪餃子や、しそ、にんにく、普通の餃子に、だし巻きやエビチリマヨを。二郎系ラーメン(1,100円)もあり、豚骨ベースの濃厚な味噌スープに、やや太い平打ちの多加水麺、豚バラ、キャベツ、もやし。定食は安く(生姜焼き900円)、提供も早い。おいしいというより「悪くない」という声も。店内喫煙可。食べログの営業時間(18:00〜11:00)は口コミの昼の訪問と合わないので確認を。',
  });
}

// ================================================================ ラーメンまこと屋 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27062026/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_makotoya_shinsaibashi', name: 'ラーメンまこと屋 心斎橋店 (Ramen Makotoya Shinsaibashi)', category: 'OMNI',
    lat: 34.670333, lng: 135.500796, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a beef-bone broth; Morioka cold noodles and fried rice too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, pork chashu, egg.',
    hours_raw: 'Open 24 hours, every day (Tabelog). Ticket machine at the entrance.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-6-16, three doors east of Mitsudera off Midōsuji — 5 min from Shinsaibashi Stn',
    cuisine: 'Beef-bone "gyū-paitan" ramen · spicy red beef white-soup ramen with soft egg · thin noodles, choose firmness · table garlic, garlic chips, pickled ginger, sesame · Morioka cold noodles ¥1,010 · 24 h',
    website: null, gmaps: gm('ラーメンまこと屋 心斎橋店'), menu_url: null,
    notes: "[Ramen · beef-bone white soup, all night] An 18-seat counter, since 2011, three doors east of Mitsudera, serving Makotoya's beef-bone \"gyū-paitan\" around the clock. Regulars go when they want something that isn't miso, shoyu or shio. The beef broth is rich and smooth but not heavy, with a beefy aroma and sweetness that clings to thin noodles (choose your firmness). The favourite is the spicy red version with soft-boiled egg, chashu, wood ear, bean sprouts and green onion in a red bowl. Doctor it at the table with fresh garlic, garlic chips, pickled ginger and white sesame. Morioka cold noodles were ¥1,010 in August 2026. Buy a ticket at the machine by the door; one visitor found the street queue was for the malatang shop nearby.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 November 2011 (Tabelog)', background: 'Shinsaibashi branch of Makotoya (Tabelog listing name).', philosophy: null, specialty: 'Beef-bone white-soup ramen.',
      anecdotes: [
        { text: '"Their beef bone ramen has a unique flavor profile, with noodles that carry the aroma and sweetness of beef… I ordered my favorite, the spicy red beef bone white soup ramen, paired with fried rice." — September 2026.', source: R + 'B520513549/' },
        { text: '"The ramen features a rich and smooth broth that truly captures the essence of beef bones. It\'s flavorful without being too heavy, and the thin noodles pair perfectly with it." — August 2026.', source: R + 'B534655415/' },
      ],
      japanese_sources_summary: '食べログ: ラーメンまこと屋 心斎橋店、大阪市中央区心斎橋筋2-6-16(御堂筋から三津寺の東3軒目)、心斎橋駅徒歩5分、18席(カウンター)、24時間営業、予約不可、2011年11月27日開店。2026年の口コミ: 味噌・醤油・塩以外が食べたいときの牛骨ラーメン、牛の香りと甘み、辛味噌の赤い牛白湯とチャーハン、赤い器、半熟玉子・チャーシュー・キクラゲ・もやし・ねぎ・特製の辛いたれ、刺激的な辛さ、券売機、盛岡冷麺1,010円、行列は隣の麻辣湯の店、牛骨の濃厚でなめらかなスープ、重すぎない、細麺、柔らかいチャーシュー、飲んだ後の一杯、麺の硬さを選べる、卓上の白ごま・生にんにく・紅生姜・ガーリックチップ、濃厚だがくどくない。',
      confidence: 'medium', sources: [TB, R + 'B520513549/', R + 'B534655415/', R + 'B529871969/', R + 'B533365220/', R + 'B536256358/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: ['other'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles; firmness can be chosen (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Spicy red beef white-soup ramen with soft-boiled egg (2026).',
      chashu: 'Tender pork chashu.',
      notable_toppings: ['soft-boiled egg', 'wood ear', 'bean sprouts', 'green onion', 'table garlic chips', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'The all-night beef bowl off Midōsuji: a rich, smooth beef-bone white soup with beefy sweetness, best spiked red and loaded with fresh garlic and garlic chips from the table.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534655415/', '"A rich and smooth broth that truly captures the essence of beef bones."'],
        oiliness: [R + 'B534655415/', '"Flavorful without being too heavy"; "The richness was just right, not overwhelming" (' + R + 'B536256358/).'],
        clarity: [R + 'B529871969/', 'A "beef white soup" (paitan) — opaque.'],
        tare_strength: [R + 'B536256358/', '"The broth was rich and clung beautifully to the noodles… not overwhelming at all."'],
        noodle_firmness: [R + 'B536256358/', '"You can choose the firmness of the noodles"; thin noodles (' + R + 'B534655415/).'],
        aroma_punch: [R + 'B520513549/', '"Noodles that carry the aroma and sweetness of beef"; the spicy red version has "a sharp, stimulating spiciness" (' + R + 'B533365220/).'],
      },
      confidence: 'medium', sources: [R + 'B534655415/', R + 'B536256358/', R + 'B520513549/', R + 'B533365220/', R + 'B529871969/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-6-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目6番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533453091/', R + 'B529871969/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Spicy red beef white-soup ramen with soft-boiled egg', '', 'Ramen', 'no', 'no', 'August 2026.', 'spicy_red'),
      it('', '', 'Beef white-soup ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'gyu_paitan'),
      it('盛岡冷麺', 'Morioka reimen', 'Morioka cold noodles', '¥1,010', 'Noodles', 'no', 'no', 'August 2026.', 'morioka_reimen'),
    ] }, {
    cuisine: '牛骨の「牛白湯」ラーメン・半熟玉子の辛味噌の赤い牛白湯・細麺で硬さを選べる・卓上のにんにく、ガーリックチップ、紅生姜、ごま・盛岡冷麺1,010円・24時間',
    neighborhood: '心斎橋筋2-6-16、御堂筋から三津寺の東3軒目。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。牛骨スープに小麦の麺。盛岡冷麺やチャーハンも。',
    vegan_detail: 'ヴィーガンではありません。牛骨スープ、豚のチャーシュー、卵。',
    notes: '[ラーメン・夜通しの牛骨白湯] 2011年から、三津寺から3軒東にある18席のカウンターで、まこと屋の牛骨の「牛白湯」を24時間出しています。味噌、醤油、塩以外が食べたいときに行くという常連も。牛のスープは濃厚でなめらかなのに重くなく、牛の香りと甘みが細麺(硬さを選べる)に絡みます。人気は辛い赤の牛白湯で、赤い器に半熟玉子、チャーシュー、キクラゲ、もやし、ねぎ。卓上の生にんにく、ガーリックチップ、紅生姜、白ごまで味を変えて。盛岡冷麺は2026年8月で1,010円。入口の券売機で食券を。通りの行列は近くの麻辣湯の店のものだったという客も。',
  });
}

save();
