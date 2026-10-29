// Osaka sweep (2-mile circle around Dotonbori), batch 160 — ramen phase.
//   + COLAVOLTA (late-night ramen izakaya: tomato ramen, curry ramen, tsukemen, winged gyoza; Ikutamamaecho)
//   + 希望新風 谷町七丁目店 (abura-soba in four colors, ¥680 on Sundays, free kimchi; Tanimachi 7-chome)
//   + 汁なし担担麺専門 キング軒 大阪本町店 (Hiroshima-style soupless tantanmen, spice 1–4; Senba Center Bldg)
//   + 龍 (Beijing-style neighborhood Chinese since 1970: curry champon, gomoku yakimeshi; Sakuragawa) — cuisine 'other'
//   Skipped chain branches: 27027169 九州らーめん亀王 谷九店, 27078686 きりん寺 大阪総本店.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 160);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27027169', 'Chain branch: Kyushu Ramen Kio already in data.');
skip('27078686', 'Chain branch: Kirinji already in data.');

// ================================================================ COLAVOLTA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27087199/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:45', '14:30'];
  put({
    id: 'osaka_colavolta_ikutamamaecho', name: 'COLAVOLTA', category: 'OMNI',
    lat: 34.663106, lng: 135.515295, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broths, chashu and chicken; tomato ramen broth not described — ask.',
    hours_raw: 'Sun, Mon and public holidays 18:30–00:30 (last order 24:00); Tue 11:45–14:30 and 18:30–00:30; Wed–Thu 11:45–14:30 and 18:30–01:30 (last order 01:00); Fri–Sat 11:45–14:30 and 18:30–02:30 (last order 02:00); daily changes on Instagram (Tabelog). 20% late-night charge from 22:00 (Tabelog). No cards; PayPay and Alipay accepted (Tabelog). Private-hire banquet course with 2 hours of drinks ¥3,980 (June 2026).',
    hours: { 0: day(['18:30', '00:30']), 1: day(L, ['18:30', '00:30']), 2: day(L, ['18:30', '01:30']), 3: day(L, ['18:30', '01:30']), 4: day(L, ['18:30', '02:30']), 5: day(L, ['18:30', '02:30']), 6: day(['18:30', '00:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ikutamamaecho 4-20, Renajia Shitennoji 1F — 5 min south of Tanimachi 9-chome Stn exit 5',
    cuisine: 'Ramen izakaya, late · tomato ramen made with eight tomatoes · curry ramen; keema curry ramen with thin or thick noodles · tsukemen with a choice of dip, e.g. thick spicy; limited mushroom tsukemen with balsamic · cold salt lemon ramen (summer) · dinner set ¥1,000: keema curry ramen and grilled-chashu rice bowl · winged grilled gyoza; kara-age with tartar; grilled salted tomato with garlic chips; fries with a choice of salt; butter-soy potatoes; fried rice · 34 seats: 9 at the counter',
    website: null, gmaps: gm('COLAVOLTA'), menu_url: null,
    notes: "[Ramen · a late-night ramen izakaya near Tanimachi 9-chome] A stylish ramen bar south of Tanimachi 9-chome that stays open until 2:30 am at weekends and works as well for a drink as for noodles. The bowls are inventive: a tomato ramen made with eight tomatoes, curry and keema curry ramen, tsukemen with a choice of dip, and a properly chilled salt-lemon ramen in summer. Snack first on crisp winged gyoza, kara-age with tartar or grilled salted tomato with garlic chips. A ¥1,000 dinner set pairs keema curry ramen with a grilled-chashu bowl. Note the 20% surcharge after 10 pm. One diner found the tsukemen dip salty.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen izakaya (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Tomato ramen; curry ramen; tsukemen.',
      anecdotes: [
        { text: '"When I passed by the tomato ramen made with 8 tomatoes, it caught my eye… Even as someone who isn\'t a fan of raw tomatoes, I found the tomato broth to be delicious." — June 2026.', source: R + 'B531343492/' },
        { text: '"The dipping sauce was a butter sautéed mushroom purée, and it was absolutely delicious!" — October 2026, limited mushroom tsukemen.', source: R + 'B521251759/' },
      ],
      japanese_sources_summary: '食べログ: COLAVOLTA、大阪市天王寺区生玉前町4-20 レナジア四天王寺 1F、谷町九丁目駅5番出口から南へ徒歩5分、日・月・祝 18:30〜翌0:30 (L.O. 0:00)、火 11:45〜14:30・18:30〜翌0:30、水・木 11:45〜14:30・18:30〜翌1:30 (L.O. 1:00)、金・土 11:45〜14:30・18:30〜翌2:30 (L.O. 2:00)、日々の営業は Instagram で、22時から深夜料金20%、カード不可、PayPay・Alipay 可、34席 (カウンター9、テーブル24)。口コミ(2026年1〜10月): 8個のトマトのトマトラーメン、カレーラーメン、キーマカレーラーメン (細麺か太麺)、つけ麺 (つけ汁を選べる、濃厚な辛いものなど、限定のきのこのつけ麺にバルサミコ)、夏の冷やし塩レモンラーメン、夜のセット1,000円 (キーマカレーラーメンと炙りチャーシュー丼)、羽根つき焼き餃子、タルタルの唐揚げ、焼き塩トマトとガーリックチップ、塩を選べるフライドポテト、バター醤油のポテト、チャーハン、貸切の宴会コース (2時間飲み放題3,980円)、クーポン、つけ汁がしょっぱいという声。',
      confidence: 'medium', sources: [TB, R + 'B422320836/', R + 'B521251759/', R + 'B528314122/', R + 'B529657256/', R + 'B531343492/', R + 'B532854444/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin or thick noodles on some bowls; the thin are thinner than expected (May 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Tomato ramen made with eight tomatoes (June 2026).',
      chashu: 'Grilled chashu rice bowl, generously topped (May 2026).',
      notable_toppings: ['tomato', 'keema curry', 'lemon', 'mushroom purée'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Broths not described; meat toppings.' },
      pantheon: 'Tanimachi\'s late-night tomato and curry ramen bar, gyoza first.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B521251759/', '"a rich flavor reminiscent of carbonara" (mushroom tsukemen) — mid-scale.'],
        oiliness: [R + 'B532854444/', 'Chilled salt-lemon ramen felt light "without the usual guilt" — low.'],
        clarity: [R + 'B531343492/', 'Tomato and curry broths — placed low.'],
        tare_strength: [R + 'B521251759/', '"It was tasty, but a bit salty" (thick spicy tsukemen dip) — placed high.'],
        noodle_firmness: [R + 'B531343492/', '"The noodles were incredibly enjoyable" — mid-scale (no firmness stated).'],
        aroma_punch: [R + 'B528314122/', '"It definitely felt like keema curry" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B531343492/', R + 'B521251759/', R + 'B528314122/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; 20% late-night charge after 22:00 (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区生玉前町4-20 レナジア四天王寺 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区生玉前町4番20号 (go) 6m; OSM COLAVOLTA node/4580515693 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528314122/', R + 'B422320836/'],
    price_note: 'Prices from May–June 2026 reviews; 20% surcharge from 22:00.', last_checked: TODAY, items: [
      it('', '', 'Tomato ramen', '', 'Ramen', 'no', 'ask', 'June 2026.', 'tomato'),
      it('', '', 'Dinner set: keema curry ramen and grilled-chashu rice bowl', '¥1,000', 'Sets', 'no', 'no', 'May 2026.', 'set'),
      it('', '', 'Tsukemen (choice of dip)', '', 'Tsukemen', 'no', 'no', 'September–October 2026.', 'tsukemen'),
      it('', '', 'Winged grilled gyoza', '', 'Sides', 'no', 'no', 'June–August 2026.', 'gyoza'),
      it('', '', 'Banquet course with 2-hour drinks (private hire)', '¥3,980', 'Courses', 'no', 'no', 'June 2026.', 'banquet'),
    ] }, {
    cuisine: '夜遅くまでのラーメン居酒屋・8個のトマトのトマトラーメン・カレーラーメン、細麺か太麺のキーマカレーラーメン・つけ汁を選べるつけ麺 (濃厚な辛いものなど)、限定のきのこのつけ麺にバルサミコ・夏は冷やし塩レモンラーメン・夜のセット1,000円: キーマカレーラーメンと炙りチャーシュー丼・羽根つき焼き餃子、タルタルの唐揚げ、焼き塩トマトとガーリックチップ、塩を選べるポテト、バター醤油のポテト、チャーハン・34席: カウンター9席',
    neighborhood: '天王寺区生玉前町4-20 レナジア四天王寺 1F。谷町九丁目駅5番出口から南へ徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシューや鶏。トマトラーメンのスープは不明なので確認を。',
    notes: '[ラーメン・谷町九丁目近く、夜遅くまでのラーメン居酒屋] 谷町九丁目の南にあるおしゃれなラーメンバルで、週末は深夜2時半まで、麺にもお酒にも使える。一杯は個性的: 8個のトマトを使ったトマトラーメン、カレーやキーマカレーのラーメン、つけ汁を選べるつけ麺、夏はしっかり冷えた塩レモンラーメン。まずはパリッとした羽根つき餃子、タルタルの唐揚げ、ガーリックチップの焼き塩トマトを。1,000円の夜のセットはキーマカレーラーメンと炙りチャーシュー丼。22時以降は20%の深夜料金に注意。つけ汁がしょっぱいという声も。',
  });
}

// ================================================================ 希望新風 谷町七丁目店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27090424/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00']); const LD = day(['11:30', '14:00'], ['18:00', '22:00']); const SUN = day(['11:30', '15:00'], ['16:00', '19:00']);
  put({
    id: 'osaka_kibou_shinpuu_tanimachi7', name: '希望新風 谷町七丁目店 (Kibou Shinpuu Tanimachi nanachome ten)', category: 'OMNI',
    lat: 34.672351, lng: 135.51644, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-based tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; tare not described.',
    hours_raw: 'Tue–Wed 11:30–14:00; Thu–Fri 11:30–14:00 and 18:00–22:00; Sun and public holidays 11:30–15:00 and 16:00–19:00; closed Mon and Sat, New Year, some Golden Week and Obon days and other irregular days (Tabelog). Cards, e-money and QR accepted; lunch set price quoted for cash (September 2026).',
    hours: { 1: L, 2: L, 3: LD, 4: LD, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanimachi 7-3-4, Shin-Tanimachi Daisan Bldg 1F, by the Tanimachi 7-chome crossing — 5 min from Tanimachi 6-chome Stn',
    cuisine: 'Abura-soba · abura-soba in black (the basic), red, white and pink; Chinese soba; chicken sesame soba · thick, chewy noodles with menma and chashu · weekday lunch set ¥990 (cash): a noodle bowl plus kara-age, fried rice or rice; more sides for a little more · black abura-soba ¥680 on Sundays and holidays (¥850 usually) · large mazesoba with half takikomi fried rice ¥1,030 · free kimchi and takana at the table; chili oil and vinegar · 16 seats',
    website: null, gmaps: gm('希望新風 谷町七丁目店'), menu_url: null,
    notes: "[Abura-soba · cheap abura-soba with free kimchi, Tanimachi 7-chome] A small, friendly abura-soba shop at the Tanimachi 7-chome crossing. The bowls come in colors, black being the basic, on thick, chewy noodles with menma and chashu; mix in the free kimchi, chili oil and vinegar as you go. Sundays and holidays are the bargain, with black abura-soba at ¥680, and weekday lunch sets run ¥990 with kara-age, fried rice or rice. The noodles are the strength: two diners found the fried rice and kara-age disappointing, so keep it to noodles. Hours are limited and closed Mondays and Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Abura-soba shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"On Sundays, the abura soba is a great deal! At just JPY 680 for a serving, you can enjoy unlimited free kimchi, which makes it incredibly delicious when you add some chili oil and vinegar!" — July 2026.', source: R + 'B531790131/' },
        { text: '"During lunch on weekdays, you can choose one dish from options like abura soba (black, red, white, or pink), Chinese soba, or chicken sesame soba, along with an additional item… for JPY 990." — September 2026.', source: R + 'B536529901/' },
      ],
      japanese_sources_summary: '食べログ: 希望新風 谷町七丁目店、大阪市中央区谷町7-3-4 新谷町第三ビル 1F、谷町六丁目駅から354m、火・水 11:30〜14:00、木・金 11:30〜14:00・18:00〜22:00、日・祝 11:30〜15:00・16:00〜19:00、月・土休み、年末年始・GW やお盆の一部・不定休、カード・電子マネー・QR可、16席 (カウンター8、テーブル8)。口コミ(2026年3〜9月): 谷町七丁目の交差点、油そば (黒・赤・白・ピンク)、中華そば、鶏ごまそば、太くもちもちの麺にメンマとチャーシュー、平日の昼は麺と唐揚げ・チャーハン・ご飯から1品で990円 (現金)、日・祝は黒の油そば680円 (ふだんは850円)、まぜそば大盛りと炊き込みチャーハン半分で1,030円、キムチと高菜は無料、卓上にラー油と酢、チャーハンや唐揚げはいまひとつという声、気さくな接客。',
      confidence: 'medium', sources: [TB, R + 'B525095330/', R + 'B525520682/', R + 'B526901281/', R + 'B529993585/', R + 'B531790131/', R + 'B536529901/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick, chewy noodles (2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Black abura-soba, ¥850 (¥680 on Sundays and holidays) (2026).',
      chashu: 'A little chashu with menma (April 2026).',
      notable_toppings: ['menma', 'kimchi', 'takana'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Tanimachi 7-chome\'s color-coded abura-soba, cheapest on a Sunday.',
      profile: { richness: 2, oiliness: 3, clarity: 1, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B529993585/', '"The white mixed soba was rich but a bit on the lighter side in terms of flavor" — low.'],
        oiliness: [R + 'B526901281/', 'Abura-soba — placed mid for the style (no oiliness described).'],
        clarity: [R + 'B526901281/', 'A brothless bowl — placed low.'],
        tare_strength: [R + 'B529993585/', '"a bit on the lighter side in terms of flavor, so I adjusted it with the table condiments" — low.'],
        noodle_firmness: [R + 'B536529901/', '"The noodles were chewy and delicious" — placed high.'],
        aroma_punch: [R + 'B531790131/', 'Kimchi, chili oil and vinegar added at the table — low on its own.'],
      },
      confidence: 'medium', sources: [R + 'B536529901/', R + 'B529993585/', R + 'B526901281/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly service (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町7-3-4 新谷町第三ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町七丁目3番4号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536529901/', R + 'B526901281/', R + 'B525520682/'],
    price_note: 'Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black abura-soba', '¥850', 'Abura-soba', 'no', 'no', '¥680 on Sundays and holidays (April–July 2026).', 'black'),
      it('', '', 'Weekday lunch set: noodles plus one side', '¥990', 'Sets', 'no', 'no', 'Cash price (September 2026).', 'lunch'),
      it('', '', 'Large mazesoba with half takikomi fried rice', '¥1,030', 'Sets', 'no', 'no', 'April 2026.', 'maze_set'),
    ] }, {
    cuisine: '油そば・油そばは黒 (基本)、赤、白、ピンク、中華そば、鶏ごまそば・太くもちもちの麺にメンマとチャーシュー・平日の昼のセット990円 (現金): 麺に唐揚げ・チャーハン・ご飯から1品、少し足せば2〜3品・日・祝は黒の油そば680円 (ふだんは850円)・まぜそば大盛りと炊き込みチャーハン半分で1,030円・キムチと高菜は無料、卓上にラー油と酢・16席',
    neighborhood: '中央区谷町7-3-4 新谷町第三ビル 1F、谷町七丁目の交差点。谷町六丁目駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、たれの材料は不明。',
    notes: '[油そば・谷町七丁目、無料のキムチつきの手ごろな油そば] 谷町七丁目の交差点にある小さく気さくな油そばの店。一杯は色分けされ、黒が基本で、太くもちもちの麺にメンマとチャーシュー。無料のキムチ、ラー油、酢を足しながら混ぜて。お得なのは日曜と祝日で黒の油そばが680円、平日の昼は唐揚げ・チャーハン・ご飯つきのセットが990円。強みは麺で、チャーハンや唐揚げはいまひとつという声が2件あるので、麺だけでも。営業時間は短めで、月・土曜休み。',
  });
}

// ================================================================ 汁なし担担麺専門 キング軒 大阪本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27155219/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '21:00']);
  put({
    id: 'osaka_king_ken_honmachi', name: '汁なし担担麺専門 キング軒 大阪本町店 (Shirunashi Tantanmen Senmon King Ken Oosaka honmachi ten)', category: 'OMNI',
    lat: 34.681754, lng: 135.500814, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; the sauce ingredients are not described — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso on every bowl.',
    hours_raw: 'Mon–Fri 11:00–21:00 (last order 20:30); Sat 11:00–15:00 (last order 14:30); closed Sun and public holidays (Tabelog). Opened March 2026 (September 2026 review). Ticket machine outside; spice level chosen at the machine (2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 3-3-9, Senba Center Bldg No. 9 B2F, tucked away — 1 min from Honmachi Stn',
    cuisine: 'Hiroshima-style soupless tantanmen · regular ¥800 at spice level 1–4 (2 is standard); King size double portion ¥1,150 · thin, firm curly noodles over sesame sauce with meat miso and green onion; mix 30 times · toppings: cilantro, celery ¥150, onsen egg ¥100 · half rice ¥100 to finish with leftover sauce, tantan-rice sauce and vinegar · evening set with mapo tofu · table Sichuan pepper (freshly ground), sliced chilies, vinegar · 18 seats: 12 at the counter',
    website: null, gmaps: gm('汁なし担担麺専門 キング軒 大阪本町店'), menu_url: null,
    notes: "[Tantanmen · Hiroshima-style soupless tantanmen, Senba] The Osaka branch of a Hiroshima soupless-tantanmen shop, opened in March 2026 in the basement of the Senba Center Building by Honmachi Station. Pick a spice level from 1 to 4 at the ticket machine (2 is the standard and balances heat and numbing well), then mix the thin, firm curly noodles with the sesame sauce, meat miso and green onion thirty times before eating. Grind on extra Sichuan pepper, add cilantro if you like it heaped, and finish by putting half rice (¥100) into the leftover sauce with a splash of vinegar. A bowl is ¥800. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Osaka branch of a soupless-tantanmen shop from Hiroshima, opened March 2026 (September 2026 reviews).', background: 'Soupless tantanmen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Soupless tantanmen.',
      anecdotes: [
        { text: '"Following the restaurant\'s recommendation, I mixed everything thoroughly for over 30 times until the sauce was no longer visible." — September 2026, 2 Spicy (regular) ¥800 with half rice ¥100.', source: R + 'B535587189/' },
        { text: '"The noodles are firm and have a nice chew, with a thin curly texture." — October 2026, Spicy Shirunashi Tantanmen (Level 3) ¥800.', source: R + 'B526962438/' },
      ],
      japanese_sources_summary: '食べログ: 汁なし担担麺専門 キング軒 大阪本町店、大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F、本町駅から187m、月〜金 11:00〜21:00 (L.O. 20:30)、土 11:00〜15:00 (L.O. 14:30)、日・祝休み、カード・電子マネー・QR可、18席 (カウンター12、テーブル6)。口コミ(2026年4〜10月): 広島の汁なし担担麺の店の大阪店、2026年3月開店、店の外の券売機で辛さ1〜4を選ぶ (2辛が標準)、並800円、倍のキング1,150円、細く硬めの縮れ麺、ごまだれ、肉味噌、ねぎ、30回以上混ぜる、パクチー、セロリ150円、温玉100円、半ライス100円で残ったたれにご飯 (担担ご飯のたれと酢)、夜は麻婆豆腐の定食、卓上に挽きたての花椒、刻み唐辛子、酢。',
      confidence: 'medium', sources: [TB, R + 'B526962438/', R + 'B535382949/', R + 'B535587189/', R + 'B535652899/', R + 'B536226985/', R + 'B537752043/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['sesame'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin, firm, curly noodles with a strong bite; King size doubles the portion (2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'mazesoba_aburasoba'],
      signature_bowl: 'Soupless tantanmen, spice level 2, ¥800 (September 2026).',
      chashu: null,
      notable_toppings: ['meat miso', 'green onion', 'cilantro', 'onsen egg', 'Sichuan pepper'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso.' },
      pantheon: 'Honmachi\'s Hiroshima soupless tantanmen: mix thirty times, then rice in the sauce.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B535587189/', '"the sweet and spicy meat miso harmonized perfectly" — mid-scale.'],
        oiliness: [R + 'B537752043/', 'Sesame sauce and meat miso coat the noodles — mid-scale.'],
        clarity: [R + 'B535652899/', '"Once mixed, the broth disappeared" — soupless, placed low.'],
        tare_strength: [R + 'B537752043/', '"the flavor of the wheat pairs beautifully with the rich sauce" — placed high.'],
        noodle_firmness: [R + 'B526962438/', '"firm, thin, and curly with a strong bite" — placed high.'],
        aroma_punch: [R + 'B535382949/', '"The aroma of Sichuan pepper is fantastic" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B526962438/', R + 'B535587189/', R + 'B535382949/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; how-to-eat guide in the shop (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区船場中央三丁目3番9号 (go) 16m — Tabelog point kept (basement of the long Senba Center building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535587189/', R + 'B535382949/', R + 'B526962438/'],
    price_note: 'Prices from April–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Soupless tantanmen, regular (spice 1–4)', '¥800', 'Tantanmen', 'no', 'no', 'September–October 2026.', 'regular'),
      it('', '', 'Soupless tantanmen, King size', '¥1,150', 'Tantanmen', 'no', 'no', 'September 2026.', 'king'),
      it('', '', 'Half rice', '¥100', 'Sides', 'ask', 'ask', 'April–September 2026.', 'rice'),
      it('', '', 'Onsen egg', '¥100', 'Toppings', 'ask', 'no', 'April 2026.', 'egg'),
      it('', '', 'Celery', '¥150', 'Toppings', 'ask', 'ask', 'October 2026.', 'celery'),
    ] }, {
    cuisine: '広島の汁なし担担麺・並800円、辛さは1〜4 (2辛が標準)、倍のキング1,150円・細く硬めの縮れ麺にごまだれ、肉味噌、ねぎ、30回混ぜる・トッピング: パクチー、セロリ150円、温玉100円・半ライス100円で残ったたれに担担ご飯のたれと酢・夜は麻婆豆腐の定食・卓上に挽きたての花椒、刻み唐辛子、酢・18席: カウンター12席',
    neighborhood: '中央区船場中央3-3-9 船場センタービル9号館 B2F、奥まった場所。本町駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの材料は不明なので確認を。',
    vegan_detail: 'ヴィーガンではありません。どの一杯にも肉味噌。',
    notes: '[担担麺・船場、広島の汁なし担担麺] 広島の汁なし担担麺の店の大阪店で、2026年3月に本町駅すぐの船場センタービルの地下に開店。券売機で辛さを1〜4から選び (標準の2辛は辛さと痺れのバランスがいい)、細く硬めの縮れ麺をごまだれ、肉味噌、ねぎと30回混ぜてから食べる。挽きたての花椒を足し、好みでパクチーを山盛りに、最後は残ったたれに半ライス (100円) と酢を。並は800円。日曜休み。',
  });
}

// ================================================================ 龍
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27001049/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '21:00']);
  put({
    id: 'osaka_ron_sakuragawa', name: '龍 (Ron)', category: 'OMNI',
    lat: 34.668295, lng: 135.487609, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: noodles, gyoza, fried cutlets and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and egg throughout.',
    hours_raw: 'Mon and Wed–Sun 11:30–21:00; closed Tue (Tabelog). Cash only (Tabelog; August 2026). Gyoza half price on Fridays (October 2026). Founded 1970 (September 2026 review).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sakuragawa 3-1-28, on Sennichimae-dori — 1 min from Sakuragawa Stn',
    cuisine: 'Beijing-style neighborhood Chinese since 1970 · gomoku yakimeshi ¥940; yakisoba ¥770; handmade gyoza, six for ¥420 (half price Fridays) · curry champon / curry ramen set with fried rice about ¥1,150 · Chinese-style katsudon with a sweet ankake sauce ¥940 · pork tendon; mapo harusame · food samples in the window, menus on the walls · 45 seats at tables and on tatami',
    website: null, gmaps: gm('龍'), menu_url: null,
    notes: "[Chinese · a Beijing-style neighborhood Chinese since 1970, Sakuragawa] A busy, old-school neighborhood Chinese restaurant a minute from Sakuragawa Station, open since 1970, with plastic food samples in the window, menus on the walls, tables and tatami, and a lunchtime crowd of office workers. Food comes fast and the seasoning is lighter than typical neighborhood Chinese. Try the gomoku yakimeshi with its firm grains, the thin-noodled curry champon set, or the Chinese-style katsudon in a sweet ankake sauce; the handmade gyoza are half price on Fridays. Cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1970 (September 2026 review).', background: 'Neighborhood Chinese restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Fried rice; curry champon; gyoza.',
      anecdotes: [
        { text: '"Founded in 1970, this establishment has over 50 years of history as a popular Beijing-style Chinese restaurant." — September 2026.', source: R + 'B535120705/' },
        { text: '"…the Gomoku Yakimeshi here has perfectly cooked grains that are lively and firm… the seasoning is light, resulting in a refreshing finish." — October 2026, Gomoku Yakimeshi ¥940.', source: R + 'B538203483/' },
      ],
      japanese_sources_summary: '食べログ: 龍、大阪市浪速区桜川3-1-28、桜川駅から徒歩1分、汐見橋駅から2分、月・水〜日 11:30〜21:00、火曜休み、カード・電子マネー・QR不可、45席。口コミ(2026年8〜10月): 1970年創業の北京風の町中華、千日前通に面する、食品サンプルのショーケースと壁のメニュー、テーブルと座敷、昼は会社員でにぎわう、提供が早い、五目ヤキメシ(940円)、ヤキソバ(770円)、手作りのぎょうざ(6個 420円、金曜は半額)、カレーちゃんぽん・カレーラーメンのセット約1,150円 (細麺)、中華風あんかけの katsudon940円、豚すじ、mapo harusame、味つけはあっさりめ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B534604633/', R + 'B535120705/', R + 'B536585932/', R + 'B536855723/', R + 'B537390093/', R + 'B538203483/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food samples in the window; quick service (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区桜川3-1-28',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区桜川三丁目1番28号 (go) 7m; next door to Isshinya (15 m), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538203483/', R + 'B536855723/', R + 'B534604633/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('五目ヤキメシ', '', 'Gomoku yakimeshi (fried rice)', '¥940', 'Rice', 'ask', 'no', 'October 2026.', 'yakimeshi'),
      it('ヤキソバ', '', 'Yakisoba', '¥770', 'Noodles', 'no', 'no', 'October 2026.', 'yakisoba'),
      it('ぎょうざ', '', 'Handmade gyoza, six', '¥420', 'Dumplings', 'no', 'no', 'October 2026; half price Fridays.', 'gyoza'),
      it('', '', 'Curry champon set with half fried rice', '¥1,155', 'Sets', 'no', 'no', 'October 2026.', 'curry_champon'),
      it('', '', 'Chinese-style ankake katsudon', '¥940', 'Rice', 'no', 'no', 'August 2026.', 'katsudon'),
    ] }, {
    cuisine: '1970年からの北京風の町中華・五目ヤキメシ940円、ヤキソバ770円、手作りのぎょうざ6個420円 (金曜は半額)・カレーの champon やカレーラーメンとチャーハンのセット約1,150円・甘いあんかけの中華風の katsudon940円・豚すじ、mapo harusame・窓に食品サンプル、壁にメニュー・テーブルと座敷で45席',
    neighborhood: '浪速区桜川3-1-28、千日前通沿い。桜川駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。麺、餃子、揚げたかつ、醤油のあん。',
    vegan_detail: 'ヴィーガンではありません。どれも肉や卵を使う。',
    notes: '[中華・桜川、1970年からの北京風の町中華] 桜川駅から1分、1970年からのにぎやかな昔ながらの町中華で、窓に食品サンプル、壁にメニュー、テーブルと座敷、昼は会社員でいっぱい。提供は早く、味つけはふつうの町中華よりあっさりめ。粒の立った五目ヤキメシ、細麺のカレーの champon のセット、甘いあんかけの中華風の katsudonを。手作りのぎょうざは金曜は半額。現金のみ。火曜休み。',
  });
}

save();
