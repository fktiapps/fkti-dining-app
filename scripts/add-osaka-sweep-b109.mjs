// Osaka sweep (2-mile circle around Dotonbori), batch 109 — ramen phase (all OMNI).
//   + らーめん香澄 阿波座本店 (niboshi chuka soba with back fat and niboshi mazesoba; Tabelog Ramen 100 2017–2025; Kyomachibori)
//   + 唯一無二のらぁ麺専門店 イ袋ワシづかみ (shoyu on medium-thick curly noodles, karasumi chilled mazesoba; Tabelog Ramen 100 2024–2025; Shitennoji)
//   + 進化驀進 京町堀本店 (tonkotsu and black tonkotsu, free rice at lunch; Kyomachibori)
//   + 岡本商店 北浜店 (chicken nikomi paitan, chicken-seafood, full toppings +¥300; Kitahama basement)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 109);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らーめん香澄 阿波座本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27065090/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://ramen-kasumi.co.jp';
  const L = ['11:00', '15:00'];
  put({
    id: 'osaka_ramen_kasumi_awaza', name: 'らーめん香澄 阿波座本店 (Ramen Kasumi Awaza Honten)', category: 'OMNI',
    lat: 34.684975, lng: 135.48937, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare and mazesoba sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi broth with back fat; chashu; egg.',
    hours_raw: 'Mon–Wed and public holidays 11:00–15:00 and 18:00–23:00; Thu 08:00–15:00 and 18:00–22:00; Fri 08:00–15:00 and 18:00–23:00; Sat 09:00–15:00 and 18:00–23:00; Sun 09:00–23:00 straight through; open year-round (Tabelog). Ticket machine inside; chairs for the line outside; self-service water; paper aprons (September 2026). Cards, IC cards, e-money and QR incl. Alipay and WeChat Pay accepted (Tabelog).',
    hours: { 0: day(L, ['18:00', '23:00']), 1: day(L, ['18:00', '23:00']), 2: day(L, ['18:00', '23:00']), 3: day(['08:00', '15:00'], ['18:00', '22:00']), 4: day(['08:00', '15:00'], ['18:00', '23:00']), 5: day(['09:00', '15:00'], ['18:00', '23:00']), 6: day(['09:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyomachibori 2-12-13 — 5 min from Awaza Stn exit 1',
    cuisine: 'Niboshi chuka soba and mazesoba · niboshi ramen ¥950: mild soy base, niboshi with a pleasant bitterness, a little back fat, medium-thick curly noodles, lean chashu · ajitama niboshi ramen · special niboshi chuka soba ¥1,250 · special niboshi mazesoba ¥1,300: sweet-savory soy and concentrated niboshi sauce, wide curly Menya Teigaku noodles from Kyoto, block chashu and low-temperature rare chashu, menma, white and green onion, ichimi, seasoned egg · rice · 7 counter seats',
    website: OWN, gmaps: gm('らーめん香澄 阿波座本店'), menu_url: null,
    notes: "[Ramen · niboshi chuka soba with back fat, on Tabelog's Ramen 100 since 2017, in Kyomachibori] A seven-seat counter near Awaza, open since 2012 and picked for Tabelog's Ramen 100 every year from 2017 to 2025, with early-morning hours from Thursday to Sunday and late nights most days. The niboshi ramen (¥950) is gentler than the name suggests: a mild soy base with floating back fat and a pleasant niboshi bitterness, on medium-thick curly noodles; one diner thought of Yamagata ramen. The special niboshi mazesoba (¥1,300) is the other draw: sweet-savory soy and concentrated niboshi over wide, chewy curly noodles from Kyoto's Menya Teigaku, piled with block and rare chashu; one diner said the regular version would do. There can be a line at night, with chairs outside. Cards, e-money and QR accepted. A second shop is in Nakazakicho.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 May 2012 (Tabelog)', background: 'Niboshi ramen shop; main branch, with a second shop in Nakazakicho (October 2026 review). Tabelog Ramen 100 (WEST 2017–2022, OSAKA 2023–2025).', philosophy: null, specialty: 'Niboshi chuka soba; niboshi mazesoba.',
      anecdotes: [
        { text: '"The broth was a mild soy sauce base, leaving a pleasant niboshi bitterness in the aftertaste… The presence of back fat and curly noodles gave me the impression that it might be reminiscent of Yamagata-style ramen." — October 2026, niboshi ramen ¥950.', source: R + 'B537933594/' },
        { text: '"The noodles are wide, flat noodles from the long-established noodle shop \'Menya Teigaku\' in Kyoto. With a slight curl, they hold the sauce well, offering a chewy texture and a firm bite." — October 2026, special niboshi mazesoba ¥1,300.', source: R + 'B537184086/' },
      ],
      japanese_sources_summary: '食べログ: らーめん香澄 阿波座本店、大阪市西区京町堀2-12-13、阿波座駅1番出口から徒歩約5分、月〜水・祝・祝前日 11:00〜15:00・18:00〜23:00、木 8:00〜15:00・18:00〜22:00、金 8:00〜15:00・18:00〜23:00、土 9:00〜15:00・18:00〜23:00、日 9:00〜23:00通し、年中無休、カード・電子マネー・QR(Alipay、WeChat Pay含む)可、カウンター7席、2012年5月7日開店、食べログ ラーメン百名店 2017〜2025。口コミ(2026年9〜10月): 味玉煮干しラーメン、少し太めの縮れ麺、まぜそばとご飯を頼む客が多い、外に待ち用の椅子、店内の券売機、特製煮干し中華そば1,250円、セルフの水、紙エプロン、背脂でまろやかな煮干し、中太の縮れ麺、あっさりしたチャーシュー、特製煮干しまぜそば1,300円、醤油ベースに濃い煮干し、一味、京都の老舗製麺所Menya Teigakuの幅広の縮れ麺、塊のチャーシューとレアチャーシュー、白ねぎ・青ねぎ、メンマ、味玉、深夜でも5〜6人の行列、雨の後は待ちなし、中崎町にも店舗、煮干しラーメン950円、やさしい醤油ベースにほろ苦い煮干しの後味、山形ラーメンのようという声。',
      confidence: 'medium', sources: [TB, R + 'B535051481/', R + 'B537184086/', R + 'B537277916/', R + 'B537353956/', R + 'B537709630/', R + 'B537933594/'] },
    ramen: {
      broth_base: ['niboshi'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly noodles in the ramen; wide curly Menya Teigaku noodles in the mazesoba (October 2026).' },
      regional_style: [], sub_genre: ['niboshi', 'mazesoba_aburasoba'],
      signature_bowl: 'Niboshi ramen ¥950; special niboshi mazesoba ¥1,300 (October 2026).',
      chashu: 'Lean chashu in the ramen; block and low-temperature rare chashu in the special mazesoba (October 2026).',
      notable_toppings: ['back fat', 'seasoned egg', 'ichimi (mazesoba)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Niboshi and back fat.' },
      pantheon: 'Awaza\'s Ramen 100 regular since 2017: gentle back-fat niboshi chuka soba and a meaty niboshi mazesoba, open from 8 am late in the week.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537353956/', '"Rich in niboshi flavor yet light and refreshing" — mid-scale.'],
        oiliness: [R + 'B537353956/', '"Its floating back fat" — mid-scale.'],
        clarity: [R + 'B537933594/', 'Mild soy base with back fat; no remark on clarity — mid-scale.'],
        tare_strength: [R + 'B537933594/', '"A mild soy sauce base" — placed low.'],
        noodle_firmness: [R + 'B537353956/', '"Thick, curly noodles, their chewy texture"; "a firm bite" (B537184086) — placed high.'],
        aroma_punch: [R + 'B537933594/', '"The gentle niboshi flavor"; "a pleasant niboshi bitterness" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537353956/', R + 'B537933594/', R + 'B537184086/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cards, IC and QR incl. Alipay and WeChat Pay (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区京町堀2-12-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Ramen 100 2025); reviews dated October 2026; OSM node らーめん香澄 1 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区京町堀二丁目12番13号 (go) 7m; OSM node/5761317624 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535051481/', R + 'B537184086/', R + 'B537933594/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Niboshi ramen', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi'),
      it('', '', 'Ajitama niboshi ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Special niboshi chuka soba', '¥1,250', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei'),
      it('', '', 'Special niboshi mazesoba', '¥1,300', 'Mazesoba', 'no', 'no', 'October 2026.', 'tokusei_maze'),
      it('', '', 'Niboshi mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'maze'),
    ] }, {
    cuisine: '煮干しの中華そばとまぜそば・煮干しラーメン950円: やさしい醤油ベース、ほろ苦い煮干し、少しの背脂、中太の縮れ麺、あっさりしたチャーシュー・味玉煮干しラーメン・特製煮干し中華そば1,250円・特製煮干しまぜそば1,300円: 甘辛い醤油と濃い煮干しのたれ、京都のMenya Teigakuの幅広の縮れ麺、塊のチャーシューと低温調理のレアチャーシュー、メンマ、白ねぎ・青ねぎ、一味、味玉・ご飯・カウンター7席',
    neighborhood: '西区京町堀2-12-13。阿波座駅1番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれとまぜそばのたれ。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの煮干しスープ、チャーシュー、卵。',
    notes: '[ラーメン・京町堀、2017年から食べログ百名店の背脂煮干し中華そば] 阿波座近くのカウンター7席の店で、2012年開店、2017年から2025年まで毎年食べログ ラーメン百名店に選出、木〜日は朝から、ほぼ毎日夜遅くまで営業。煮干しラーメン(950円)は名前ほど強くなく、やさしい醤油ベースに背脂が浮き、心地よい煮干しのほろ苦さ、中太の縮れ麺。山形ラーメンを思い出したという声も。もう一つの目当ては特製煮干しまぜそば(1,300円): 甘辛い醤油と濃い煮干しのたれを京都のMenya Teigakuの幅広でもちもちの縮れ麺に、塊とレアのチャーシューを山盛りで。普通のまぜそばで十分だったという人も。夜は行列ができることも、外に椅子あり。カード、電子マネー、QR可。中崎町にも店舗。',
  });
}

// ================================================================ 唯一無二のらぁ麺専門店 イ袋ワシづかみ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27127973/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ibukuro_washizukami_shitennoji', name: '唯一無二のらぁ麺専門店 イ袋ワシづかみ (Yuiitsu Muni no Ramen Senmon Ten Ibukuro Washizukami)', category: 'OMNI',
    lat: 34.656596, lng: 135.518782, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; wontons; fish powder.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi; back fat; beef tendon and clams in the shio; karasumi; egg sauce.',
    hours_raw: 'Daily 11:00–15:30 (L.O. 15:00) and 18:00–22:00 (L.O. 21:30); hours may change (Tabelog). Order by number and pay first, cash on the counter (October 2026). Cash only: no cards, e-money or QR (Tabelog). Waits of about 10 minutes at noon (October 2026).',
    hours: ALL(day(['11:00', '15:30'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shitennoji 2-2-7 (Tennoji-ku) — 5 min from Shitennoji-mae Yuhigaoka Stn, 10 min from Kintetsu Uehommachi',
    cuisine: 'Shoyu ramen on medium-thick curly noodles, and mazesoba · shoyu ramen: light, niboshi umami; with wontons and seasoned egg ¥1,250 · rich shoyu ramen: strong garlic, aosa seaweed, fish powder to add, back-fat topping · shio ramen with beef tendon, clams and niboshi · Inazuma chuka soba and Inazuma mazesoba: chili, sansho and black pepper with sweet soy and back fat · chilled mazesoba with karasumi, green onion and niboshi, warm egg sauce added halfway · rice with salted kombu and egg · 8 seats: a small counter and a table for four',
    website: null, gmaps: gm('イ袋ワシづかみ 四天王寺'), menu_url: null,
    notes: "[Ramen · shoyu on medium-thick curly noodles and karasumi mazesoba, by Shitennoji] A tiny eight-seat shop near Shitennoji, open since 2022 and picked for Tabelog's Ramen 100 in 2024 and 2025. The noodles are the point: robust, flat, medium-thick and curly, which one diner was \"a bit moved\" to find. The shoyu ramen is light with niboshi umami (¥1,250 with wontons and egg); the rich shoyu adds a strong garlic hit, aosa seaweed and fish powder to stir in. For heat, the Inazuma chuka soba and mazesoba layer chili, sansho and black pepper over sweet soy and back fat. A repeat diner's favorite is the chilled mazesoba with karasumi, green onion and niboshi, finished with a warm egg sauce, though the shio with beef tendon, clams and niboshi may top it. Seats are few, so expect a short wait at noon. Pay first, cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 February 2022 (Tabelog)', background: 'Ramen shop; Tabelog Ramen OSAKA 100, 2024 and 2025 (Tabelog).', philosophy: null, specialty: 'Shoyu ramen on medium-thick curly noodles; mazesoba.',
      anecdotes: [
        { text: '"It was light yet flavorful, with a nice umami from the niboshi (dried sardines). Then came the medium-thick curly noodles. I was a bit moved to encounter such a perfect noodle." — October 2026, shoyu ramen with wontons and egg ¥1,250.', source: R + 'B537615245/' },
        { text: '"With a combination of chili peppers, sansho pepper, and black pepper, the spices amplify the flavors, while the sweetness of the soy sauce and back fat accelerates the stimulation." — October 2026, Inazuma chuka soba.', source: R + 'B537437541/' },
      ],
      japanese_sources_summary: '食べログ: 唯一無二のらぁ麺専門店 イ袋ワシづかみ、大阪市天王寺区四天王寺2-2-7、谷町線四天王寺前夕陽ヶ丘駅から徒歩5分、近鉄上本町駅から10分、天王寺駅から15分、毎日11:00〜15:30(L.O. 15:00)・18:00〜22:00(L.O. 21:30)、カード・電子マネー・QR不可、8席(カウンター4、4人席1)、2022年2月21日開店、食べログ ラーメン OSAKA 百名店 2024・2025。口コミ(2026年8〜10月): からすみとねぎと煮干しの冷やしまぜそば、途中で温かい卵のたれ、牛すじと蛤と煮干しの塩ラーメン、相席、濃厚醤油ラーメンに味玉、中太の縮れ麺、あおさ、塩昆布と卵のご飯、稲妻まぜそば(大盛)、白飯、やや辛い、もちもちの麺、外で10分待ち、稲妻中華そば、唐辛子・山椒・黒胡椒、甘い醤油と背脂、前払い、番号で注文、カウンター3席と4人席1という声、ワンタンと味玉の醤油ラーメン1,250円、あっさりで煮干しの旨み、平打ちの中太縮れ麺、背脂トッピング、濃厚醤油のチャーシュー、にんにくが強い、魚粉で味変、駅から少し遠い。',
      confidence: 'medium', sources: [TB, R + 'B533959389/', R + 'B537379909/', R + 'B537429533/', R + 'B537437541/', R + 'B537615245/', R + 'B538016402/'] },
    ramen: {
      broth_base: ['niboshi'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Flat, medium-thick curly noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shoyu ramen with wontons and seasoned egg, ¥1,250 (October 2026).',
      chashu: 'Chashu topping on the rich shoyu (October 2026).',
      notable_toppings: ['aosa seaweed', 'wontons', 'back fat', 'karasumi (chilled mazesoba)', 'fish powder'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Niboshi; back fat.' },
      pantheon: 'Shitennoji\'s noodle-first Ramen 100 shop: medium-thick curly noodles in light or garlicky shoyu, and a karasumi chilled mazesoba.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537615245/', 'Shoyu "light yet flavorful"; rich shoyu "deliciously rich" (B538016402) — mid-scale.'],
        oiliness: [R + 'B537437541/', 'Back fat in the Inazuma; back-fat topping offered (B537615245) — mid-scale.'],
        clarity: [R + 'B537615245/', 'No diner remark on clarity — mid-scale.'],
        tare_strength: [R + 'B537437541/', '"The sweetness of the soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B537615245/', 'Noodles "robust"; "chewy" (B537429533) — placed high.'],
        aroma_punch: [R + 'B538016402/', 'Rich shoyu "with a strong garlic flavor" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537615245/', R + 'B538016402/', R + 'B537437541/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by menu number; prepay in cash (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区四天王寺2-2-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Ramen 100 2025); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区四天王寺二丁目2番7号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533959389/', R + 'B537429533/', R + 'B537615245/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen with wontons and seasoned egg', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu_wonton'),
      it('', '', 'Rich shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'nouko_shoyu'),
      it('', '', 'Shio ramen with beef tendon, clams and niboshi', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Inazuma chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'inazuma_chuka'),
      it('稲妻まぜそば', '', 'Inazuma mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'inazuma_maze'),
      it('', '', 'Chilled mazesoba with karasumi, green onion and niboshi', '', 'Mazesoba', 'no', 'no', 'August–October 2026.', 'karasumi_maze'),
      it('', '', 'Rice with salted kombu and egg', '', 'Rice', 'no', 'no', 'October 2026.', 'shiokombu_tamago'),
    ] }, {
    cuisine: '中太の縮れ麺の醤油ラーメンとまぜそば・醤油ラーメン: あっさりで煮干しの旨み、ワンタンと味玉入りで1,250円・濃厚醤油ラーメン: にんにくが強く、あおさ、魚粉で味変、背脂トッピング・牛すじ、蛤、煮干しの塩ラーメン・稲妻中華そばと稲妻まぜそば: 唐辛子、山椒、黒胡椒に甘い醤油と背脂・からすみ、ねぎ、煮干しの冷やしまぜそば、途中で温かい卵のたれ・塩昆布と卵のご飯・8席: 小さなカウンターと4人席',
    neighborhood: '天王寺区四天王寺2-2-7。四天王寺前夕陽ヶ丘駅から徒歩5分、近鉄上本町から10分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、ワンタン、魚粉。',
    vegan_detail: 'ヴィーガンではありません。煮干し、背脂、塩ラーメンの牛すじと蛤、からすみ、卵のたれ。',
    notes: '[ラーメン・四天王寺近く、中太縮れ麺の醤油とからすみのまぜそば] 四天王寺近くの8席の小さな店で、2022年開店、食べログ ラーメン百名店 2024・2025に選出。主役は麺: 平打ちで中太のしっかりした縮れ麺で、出会えて「ちょっと感動した」という声。醤油ラーメンはあっさりで煮干しの旨み(ワンタンと味玉入りで1,250円)、濃厚醤油はにんにくがしっかり効き、あおさと、途中で入れる魚粉付き。辛いのが好きなら、甘い醤油と背脂に唐辛子、山椒、黒胡椒を重ねた稲妻の中華そばとまぜそばを。何度も通う人のお気に入りはからすみ、ねぎ、煮干しの冷やしまぜそばで、途中で温かい卵のたれを。ただ牛すじ、蛤、煮干しの塩ラーメンの方が上かもという声も。席が少なく、昼は少し待つことも。前払いで現金のみ。',
  });
}

// ================================================================ 進化驀進 京町堀本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27065591/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '16:00'], ['18:00', '23:59']); const WE = day(['11:00', '14:30']);
  put({
    id: 'osaka_shinka_bakushin_kyomachibori', name: '進化驀進 京町堀本店 (Shinka Bakushin Kyomachibori Honten)', category: 'OMNI',
    lat: 34.687508, lng: 135.497542, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; tsukudani and pickles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth (with seafood, one diner thought); chashu.',
    hours_raw: 'Mon–Thu 11:00–16:00 and 18:00–24:00; Fri–Sun 11:00–14:30; hours may change (Tabelog). Free self-serve rice with pickles, tsukudani and takana at lunch; rice can sell out (2026 reviews). Cards incl. UnionPay, IC cards, iD, QUICPay and QR incl. WeChat Pay accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyomachibori 1-3-1, Kyosei Bldg 2F — 414 m from Higobashi Stn',
    cuisine: 'Tonkotsu ramen with free rice · tonkotsu ramen ¥950: rich, grainy pork-bone broth, not too salty, thick firm noodles, smoky belly-block chashu and loin chashu · black tonkotsu · tsukemen · free self-serve rice with pickled greens, tsukudani and takana at lunch · garlic and chili powder at the table · 7 counter seats and six tables',
    website: null, gmaps: gm('進化驀進 京町堀本店'), menu_url: null,
    notes: "[Ramen · rich tonkotsu with free rice at lunch near Higobashi] A second-floor ramen shop near Higobashi with flashy decor, open since 2012 and the main branch of its name. The tonkotsu ramen (¥950) is a rich, slightly grainy pork-bone soup with a pleasant pork aroma, deep but not too salty, on thick, firm noodles; one diner tasted seafood in it too. Two chashu come with it: a smoky, sweet-fatted belly block and a meaty loin. At lunch the rice is free and self-serve, with pickled greens, tsukudani and takana; one diner had two bowls, and when it sold out the staff found some leftovers. Add garlic and chili powder from the table. The black tonkotsu seemed the more popular order to one diner. Open until midnight Monday to Thursday, lunch only Friday to Sunday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 April 2012 (Tabelog)', background: 'Tonkotsu ramen shop, main branch (Tabelog).', philosophy: null, specialty: 'Tonkotsu ramen; black tonkotsu.',
      anecdotes: [
        { text: '"I could definitely taste the strong flavor of pork bone. However, while it has depth, it\'s not overly salty, with a strong umami and a grainy texture from the fat… The noodles are thick and have a firm bite." — September 2026, tonkotsu ramen ¥950.', source: R + 'B534918311/' },
        { text: '"There were two types of chashu: the belly block was tender and had a pleasant sweetness from the fat, while the loin was packed with robust meat flavor." — September 2026.', source: R + 'B535063825/' },
      ],
      japanese_sources_summary: '食べログ: 進化驀進 京町堀本店、大阪市西区京町堀1-3-1 京清ビル 2F、肥後橋から414m、月〜木 11:00〜16:00・18:00〜24:00、金〜日 11:00〜14:30、カード(銀聯含む)・交通系IC・iD・QUICPay・QR(WeChat Pay含む)可、25席(カウンター7、2人席3、4人席3)、2012年4月20日開店。口コミ(2026年5〜9月): 豚骨ラーメン、黒豚骨が多い、ご飯おかわり自由、豚骨ラーメン950円、セルフのご飯と漬物、豚と魚介のスープのよう、2種のチャーシュー、燻製香のブロックチャーシュー、ご飯が売り切れでも残りを出してくれた、卓上ににんにくが欲しいという声、派手な内装、濃厚だが塩辛くない、脂のざらつき、太く硬めの麺、日曜昼は空いていた、豚の香り、にんにくと一味で味変、もちもちの麺、バラのブロックは甘い脂、ロースは肉の旨み、ご飯2杯、漬物と高菜、佃煮とにんにくは無料、1,000円以下の昼、つけ麺も。',
      confidence: 'medium', sources: [TB, R + 'B528024352/', R + 'B531325680/', R + 'B534382557/', R + 'B534918311/', R + 'B535063825/', R + 'B536083126/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles with a firm bite (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Tonkotsu ramen, ¥950 (July–September 2026).',
      chashu: 'Smoky pork-belly block chashu and loin chashu (July–September 2026).',
      notable_toppings: ['free rice (lunch)', 'takana', 'garlic', 'chili powder'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Higobashi\'s rich, grainy tonkotsu with two chashu and free rice at lunch.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534918311/', '"The strong flavor of pork bone… it has depth" — placed high.'],
        oiliness: [R + 'B534918311/', '"A grainy texture from the fat" — placed high.'],
        clarity: [R + 'B534918311/', 'Grainy tonkotsu that "looks quite rich" — bottom of scale.'],
        tare_strength: [R + 'B534918311/', '"Not overly salty" — mid-scale.'],
        noodle_firmness: [R + 'B534918311/', '"Thick and have a firm bite" — placed high.'],
        aroma_punch: [R + 'B535063825/', '"Filled the air with a delightful pork aroma… a slight unique scent" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B534918311/', R + 'B535063825/', R + 'B531325680/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve rice at lunch; cards, UnionPay and WeChat Pay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区京町堀1-3-1 京清ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026; OSM node 進化驀進 8 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区京町堀一丁目3番1号 (go) 5m; OSM node/5724228521 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531325680/', R + 'B534918311/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥950', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
      it('', '', 'Black tonkotsu ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'kuro_tonkotsu'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
      it('', '', 'Rice (free at lunch, self-serve)', '¥0', 'Rice', 'ask', 'ask', 'July–September 2026.', 'rice'),
    ] }, {
    cuisine: 'ご飯無料の豚骨ラーメン・豚骨ラーメン950円: 濃厚で脂のざらつきのある豚骨、塩辛すぎない、太く硬めの麺、燻製香のバラのブロックチャーシューとロースのチャーシュー・黒豚骨・つけ麺・昼はセルフのご飯が無料、漬物、佃煮、高菜付き・卓上ににんにくと一味・カウンター7席とテーブル6卓',
    neighborhood: '西区京町堀1-3-1 京清ビル 2F。肥後橋駅から414m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、佃煮と漬物。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ(魚介も入っているようという声)、チャーシュー。',
    notes: '[ラーメン・肥後橋近く、昼はご飯無料の濃厚豚骨] 肥後橋近くのビル2階、派手な内装のラーメン店で、2012年開店、この名前の本店。豚骨ラーメン(950円)は濃厚で少しざらつきのある豚骨スープに心地よい豚の香り、深みがあるのに塩辛すぎず、太く硬めの麺。魚介も感じたという声も。チャーシューは2種: 燻製香で脂の甘いバラのブロックと、肉の旨みのロース。昼はご飯が無料のセルフで、漬物、佃煮、高菜付き。2杯食べた人も、売り切れの日にスタッフが残りを出してくれたという声も。卓上のにんにくと一味で味変を。黒豚骨の方が人気に見えたという声。月〜木は深夜0時まで、金〜日は昼のみ。',
  });
}

// ================================================================ 岡本商店 北浜店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27117124/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30']);
  put({
    id: 'osaka_okamoto_shoten_kitahama', name: '岡本商店 北浜店 (Okamoto Shoten Kitahama)', category: 'OMNI',
    lat: 34.687627, lng: 135.505482, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu; kara-age rice bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; seafood broth; chashu; egg.',
    hours_raw: 'Mon–Sat 11:00–14:30; closed Sun; hours may change (Tabelog). Free mini rice bowl if you arrive by 11:30; almond tofu or black coffee after 13:30 (September–October 2026). Full by 11:15 one September day. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 2-3-12, basement — 425 m from Kitahama Stn',
    cuisine: 'Chicken ramen at lunch · chicken nikomi ramen ¥900: thick, creamy chicken paitan with sweet chicken fat, thin or medium-thick noodles · chicken and seafood ramen ¥900 · chicken shoyu ramen · tsukemen, large 300 g ¥1,000 (2024) · full toppings +¥300: grilled and rare chashu, seasoned egg, nori, green onion · free mini rice bowl (chashu and others) by 11:30 · kara-age rice bowl · almond tofu or black coffee after 13:30 · 7 counter seats and tables',
    website: null, gmaps: gm('岡本商店 北浜店'), menu_url: null,
    notes: "[Ramen · thick chicken paitan and full toppings at lunch in Kitahama] A bright basement ramen shop in the Kitahama office district, open since 2020 for lunch Monday to Saturday; one September day it was full by 11:15. Arrive by 11:30 for a free mini rice bowl. The chicken nikomi ramen (¥900) is a thick, creamy chicken paitan with a sweet chicken-fat finish that doesn't feel heavy afterward; pick thin or medium-thick noodles. The chicken and seafood (¥900) is flavorful but not too heavy. For +¥300 the full toppings bury the noodles in grilled and rare chashu, egg, nori and green onion. Tsukemen and a chicken shoyu round out the menu. After 13:30 you get almond tofu or a black coffee on the house. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 April 2020 (Tabelog)', background: 'Chicken ramen shop, Kitahama branch (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Chicken nikomi ramen.',
      anecdotes: [
        { text: '"The broth is a rich chicken paitan, simmered to perfection. It has a thick, creamy texture that concentrates the umami of the chicken, with a lingering sweetness from the fat." — September 2026, chicken nikomi ramen ¥900.', source: R + 'B536058206/' },
        { text: '"I arrived around 11:15, but it was already full… I was informed that a mini rice bowl would come with it until 11:30." — September 2026.', source: R + 'B535731681/' },
      ],
      japanese_sources_summary: '食べログ: 岡本商店 北浜店、大阪市中央区平野町2-3-12、北浜から425m、月〜土 11:00〜14:30、日休み、カード・電子マネー・QR不可、15席(カウンター7、テーブル8)、2020年4月6日開店。口コミ(2024年10月〜2026年10月): 11時過ぎに4人待ち、11時半までに来るとミニ丼が無料、ラーメンとチャーシュー丼、地下の目立たない場所、つけ麺大300g 1,000円(2024年)、ねぎ増し無料(2024年)、11時15分で満席、鶏煮込みラーメン900円、鶏脂の甘み、細麺か中太麺、炙りかレアのチャーシュー、味玉、硬めのメンマ、食後に重くない、鶏醤油、鶏魚介、つけ麺、醤油ラーメンと唐揚げ丼、清潔、親切なスタッフ、濃厚な鶏白湯、全部のせ+300円で2種のチャーシュー・味玉・海苔・ねぎ、期間限定の杏仁豆腐、13時半以降は杏仁豆腐かブラックコーヒーのサービス、鶏魚介ラーメン900円は重すぎない。',
      confidence: 'medium', sources: [TB, R + 'B493462973/', R + 'B535731681/', R + 'B535798011/', R + 'B536058206/', R + 'B536755028/', R + 'B538060002/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Choice of thin or medium-thick noodles (September–October 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'tsukemen'],
      signature_bowl: 'Chicken nikomi ramen, ¥900 (September 2026).',
      chashu: 'Grilled and rare chashu (September–October 2026).',
      notable_toppings: ['full toppings (+¥300)', 'seasoned egg', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Kitahama\'s basement chicken nikomi paitan at ¥900, with a free mini rice bowl for early birds.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536058206/', '"A thick, creamy texture that concentrates the umami of the chicken" — placed high.'],
        oiliness: [R + 'B535731681/', '"The sweetness of the chicken fat"; not "too heavy" — mid-scale.'],
        clarity: [R + 'B536058206/', '"A rich chicken paitan" — bottom of scale.'],
        tare_strength: [R + 'B535731681/', '"Some might find it lacking in punch" — mid-scale.'],
        noodle_firmness: [R + 'B535731681/', 'Thin noodles "had the perfect firmness"; medium "chewy" (B536755028) — mid-scale.'],
        aroma_punch: [R + 'B535731681/', 'Grilled chashu\'s "smoky aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535731681/', R + 'B536058206/', R + 'B536755028/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; counter and tables (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区平野町2-3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区平野町二丁目3番12号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536058206/', R + 'B536755028/', R + 'B493462973/'],
    price_note: 'Prices from September–October 2026 reviews; tsukemen from 2024.', last_checked: TODAY, items: [
      it('', '', 'Chicken nikomi ramen', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'nikomi'),
      it('', '', 'Chicken and seafood ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'tori_gyokai'),
      it('', '', 'Chicken shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tori_shoyu'),
      it('', '', 'Full toppings', '+¥300', 'Toppings', 'no', 'no', 'October 2026.', 'zenbu'),
      it('', '', 'Tsukemen, large (300 g)', '¥1,000', 'Tsukemen', 'no', 'no', 'October 2024.', 'tsukemen'),
      it('', '', 'Kara-age rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'karaage_don'),
    ] }, {
    cuisine: '昼の鶏のラーメン・鶏煮込みラーメン900円: とろりと濃い鶏白湯に甘い鶏脂、細麺か中太麺・鶏魚介ラーメン900円・鶏醤油ラーメン・つけ麺、大300gで1,000円(2024年)・全部のせ+300円: 炙りとレアのチャーシュー、味玉、海苔、ねぎ・11時半までは無料のミニ丼(チャーシューなど)・唐揚げ丼・13時半以降は杏仁豆腐かブラックコーヒー・カウンター7席とテーブル',
    neighborhood: '中央区平野町2-3-12、地下。北浜駅から425m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油、唐揚げ丼。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、魚介のスープ、チャーシュー、卵。',
    notes: '[ラーメン・北浜、昼の濃厚鶏白湯と全部のせ] 北浜のオフィス街、ビル地下の明るいラーメン店で、2020年開店、月〜土の昼のみ、9月のある日は11時15分に満席。11時半までに入ると無料のミニ丼付き。鶏煮込みラーメン(900円)はとろりとクリーミーな鶏白湯に鶏脂の甘い余韻、食後に重くならない。麺は細麺か中太麺を選べる。鶏魚介(900円)は風味豊かで重すぎない。+300円の全部のせは炙りとレアのチャーシュー、卵、海苔、ねぎで麺が隠れるほど。つけ麺と鶏醤油も。13時半以降は杏仁豆腐かブラックコーヒーのサービス。現金のみ。',
  });
}

save();
