// Ginza Station half-mile sweep (805 m), batch 11 — ramen. Researched 2026-10-24.
//   + Blood Moon -Tokyo design noodles- (owner Takanashi Tomoyoshi, Shimbashi-born ex-Ginza bartender; MOM_AND_POP)
//   + 新橋ニューともちん (Kōenji Tomochin store no. 4) · 家系ラーメン 王道乃印 新橋 (王道家 group brand)
//   + 天鳳 新橋店 (Fujio Food System; Wakayama chuka soba)
// Sources: san-tatsu (2023, 2024), PR TIMES (王道家 group, 2026), fujiofood.com, Tabelog /en/ listings + dated 2026
// reviews. Pins: Tabelog geo + GSI (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ Blood Moon
{
  const ST = 'https://san-tatsu.jp/articles/231380/'; const SC = 'https://san-tatsu.jp/collects/212989/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13264363/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '16:00'], ['17:00', '23:30']);
  put({
    id: 'tokyo_blood_moon_shimbashi', name: 'Blood Moon -Tokyo design noodles- (ブラッド ムーン)', category: 'MOM_AND_POP',
    lat: 35.668407, lng: 139.756876,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The noodles are wheat, including whole-wheat thin and medium-thick noodles made with Kanno Seimen. The meat miso is seasoned with Chinese soy sauce, the jarichi pork cutlet is fried in a soy-ginger marinade, and there is a soy-sauce chuka soba. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The tantan soup is built on chicken and dried ingredients with shijimi clams, kombu and shiitake, under a sesame-cashew paste, and is topped with minced domestic pork. The night-only bowl adds a large fried chicken cutlet.',
    hours_raw: 'Mon–Fri 11:30–16:00 and 17:00–23:30 (L.O. 23:00); Sat 11:30–15:00; closed Sundays (Tabelog). Cash only; the ticket machine took only older banknotes in 2026.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shimbashi 1-chōme, an alley off Sotobori-dōri next to Daiwa Roynet Hotel Shimbashi — 2 min from Shimbashi SL Square',
    cuisine: 'Tantanmen (sesame, Sichuan pepper) with soup, dry and as tsukemen · wooden-barrel shoyu chuka soba · Chinese dining bar upstairs', cuisine_type: 'ramen',
    website: null, gmaps: gm('Blood Moon Tokyo design noodles 新橋1-17-6'), menu_url: null,
    notes: "[Mom & Pop · tantanmen and a bar] Takanashi Tomoyoshi grew up in Shimbashi, worked as a bartender in Ginza, and in 2021 opened this 'neo ramen' shop in his home neighbourhood, because he liked the idea of ramen with drinks. Eight counter seats downstairs and a Chinese dining bar upstairs, marked by a tantanmen lantern next to the Daiwa Roynet Hotel. He asked an old friend, the owner of the Kinshichō tantanmen shop noodle house 錦鯉, to produce a tantanmen that goes with alcohol. It is built on a house paste of freshly ground sesame and cashew, a soup of chicken, dried ingredients, shijimi clams, Hokkaidō kombu and shiitake, minced domestic pork, and a chilli oil of four chillies. Noodles were developed with Kanno Seimen, with whole wheat in them. There is also a dry tantanmen with hand-massaged medium-thick noodles, a tantan tsukemen with black vinegar, a shoyu chuka soba, and a night-only 'Tōgenkyō' tantanmen with a fried chicken cutlet. Spice and numbness levels are adjustable. Try the ¥300 jarichi, a ginger-soy pork cutlet, dropped into the soup like pāko-men.",
    chef_bio: {
      chef_name: '高梨朋良 (Takanashi Tomoyoshi)', roles: ['owner'],
      origin: 'Shimbashi 1-chōme; opened 10 July 2021 (Tabelog)',
      background: 'Born and raised in Shimbashi; previously a bartender in Ginza. The tantanmen was produced by the owner of noodle house 錦鯉 (Kinshichō), an old acquaintance.',
      philosophy: '「お酒とラーメンの組み合わせは面白いな、という発想から私の地元・新橋にこの店をオープンしました」',
      specialty: 'Mala tantanmen on a house sesame-cashew paste; dry tantanmen; tantan tsukemen; drinks matched by a bartender.',
      anecdotes: [
        { text: '「バーテンダーの知識を生かしてラーメンと創作中華に合うお酒も提供しています」', source: ST },
        { text: 'The jarichi (thin pork-loin cutlet, ¥300) idea came from pāko-men: 「担々麺に入れてもすごくおいしいんですよ」.', source: ST },
        { text: 'He met the writer in a pressed three-piece suit.', source: ST },
        { text: 'September 2026: the night-only Tōgenkyō tantanmen came with a big jīpái chicken cutlet fried to order and crisp fried noodles.', source: R + 'B534956603/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.3.22 / 2024.3.8): Blood Moon-Tokyo design noodles-、新橋駅前SL広場から徒歩2分、ダイワロイネットホテル新橋の隣。オーナー高梨朋良さん(新橋で生まれ育ち、元銀座のバーテンダー)が2021年に開店。錦糸町『noodle house錦鯉』のオーナーが担々麺をプロデュース。麻辣担々麺950円(自家挽き練りゴマ・カシューナッツ・ネギ油の芝麻醬、鶏と乾物にシジミ・北海道産真昆布・シイタケ、国産豚粗挽き肉味噌、4種の唐辛子のラー油)、担々つけ麺1,000円(黒酢)、汁なし担々麺は中太麺を手揉み、菅野製麺所と共同開発の全粒粉入り細麺・中太麺、木桶仕込み醤油の中華そば、ジャリチ300円。1階カウンター8席、2階は中華ダイニングBar。食べログ: 月〜金11:30〜16:00・17:00〜23:30、土〜15:00、日休、現金のみ、2021年7月10日オープン。',
      confidence: 'high', sources: [ST, SC, TB, R + 'B534956603/', R + 'B536175760/', R + 'B536324074/', R + 'B537194004/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine that, in 2026, accepted only older banknotes — bring coins or old notes. Spice and numbness levels chosen per bowl. Eight counter seats; tables upstairs.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Whole-wheat thin and medium-thick noodles (菅野製麺所); jarichi cutlet fried to order.', source: ST }],
      soy_sauce_wheat: [{ text: 'Meat miso seasoned with Chinese soy sauce; jarichi marinated in a soy-based sauce.', source: ST }],
      vegan_cross_contact: [{ text: 'Soup of chicken and dried ingredients with shijimi clams; minced pork topping.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'gyokai', 'vegetable'], broth_texture: null, tare: ['other'], aroma_oil: ['chili oil', 'negi oil'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Whole-wheat thin noodles for tantanmen; hand-massaged medium-thick for the dry tantanmen; straight thick for tsukemen (Kanno Seimen).' },
      regional_style: [], sub_genre: ['tantanmen', 'shirunashi tantanmen', 'tsukemen', 'chuka soba'],
      signature_bowl: '麻辣担々麺 (mala tantanmen) — ¥950 (2023).',
      chashu: null,
      notable_toppings: ['minced pork miso', 'nira', 'komatsuna', 'thread chilli', 'jarichi pork cutlet (+¥300)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and clam soup, pork miso.' },
      pantheon: "A Shimbashi-born bartender's tantanmen for drinking: a sesame-and-cashew soup over chicken, shijimi and kombu, four-chilli oil, whole-wheat noodles — and a ginger-soy pork cutlet to sink into it.",
      profile: { richness: 4, oiliness: 3, clarity: 0, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [ST, '「濃厚なゴマのコクと芳醇な香りがたっぷり」, yet 「しつこいというのではなく、ほどよくキレのある」.'],
        oiliness: [ST, 'Sesame paste with negi oil and four-chilli rāyu; "You can also adjust the spiciness and numbing sensation" (' + R + 'B536175760/).'],
        clarity: [ST, 'An opaque sesame (芝麻醬) soup.'],
        tare_strength: MID,
        noodle_firmness: [ST, 'Whole-wheat noodles 「それでいてつるりとした喉越し」.'],
        aroma_punch: [R + 'B534749066/', 'The fragrant Sichuan peppercorns waft through the air.'],
      },
      confidence: 'medium', sources: [ST, R + 'B534749066/', R + 'B536175760/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-17-6 ASK新橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目17番 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B534956603/', R + 'B536175760/', R + 'B537194004/'],
    price_note: 'Prices from the 2023 san-tatsu feature; other dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('麻辣担々麺', 'maara tantanmen', 'Mala tantanmen', '¥950', 'Ramen', 'no', 'no', '2023 price.', 'mala_tantanmen'),
      it('汁なし担々麺', 'shirunashi tantanmen', 'Dry tantanmen', '', 'Ramen', 'no', 'no', '', 'dry_tantanmen'),
      it('担々つけ麺', 'tantan tsukemen', 'Tantan tsukemen', '¥1,000', 'Ramen', 'no', 'no', '2023 price.', 'tantan_tsukemen'),
      it('中華そば', 'chuuka soba', 'Chuka soba (wooden-barrel shoyu)', '', 'Ramen', 'no', 'no', '', 'chuka_soba'),
      it('桃源郷担々麺', 'tougenkyou tantanmen', 'Tōgenkyō tantanmen (night only; fried chicken cutlet, fried noodles)', '', 'Ramen', 'no', 'no', 'September 2026.', 'togenkyo_tantanmen'),
      it('ジャリチ', 'jarichi', 'Jarichi (thin ginger-soy pork-loin cutlet)', '¥300', 'Toppings', 'no', 'no', '2023 price.', 'jarichi'),
      it('', '', 'Soft-boiled-egg rice (lunch special)', '', 'Rice', 'ask', 'no', 'September 2026.', 'egg_rice'),
    ] }, {
    cuisine: '担々麺(ゴマ・花椒)・汁なし・つけ麺・木桶仕込み醤油の中華そば・2階は中華ダイニングBar',
    neighborhood: '新橋一丁目、外堀通りから1本入った路地、ダイワロイネットホテル新橋の隣。SL広場から徒歩2分',
    gf_detail: 'グルテンフリーではありません。麺は小麦で、菅野製麺所と共同開発の全粒粉入りの細麺・中太麺。肉味噌は中国醤油で味付けし、ジャリチは醤油ベースのタレに漬けて揚げ、醤油の中華そばもあります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。担々スープは鶏と乾物にシジミ・昆布・シイタケを重ね、ゴマとカシューナッツの芝麻醬をのせ、国産豚の肉味噌がのります。夜限定の一杯には大きな鶏の揚げ物ものります。',
    notes: '[個人店・担々麺とバー] 新橋で生まれ育ち、銀座でバーテンダーをしていた高梨朋良さんが「お酒とラーメンの組み合わせは面白い」と、2021年に地元・新橋に開いたネオラーメン店。1階はカウンター8席、2階は中華ダイニングBarで、ダイワロイネットホテルの隣の担々麺の提灯が目印です。旧知の錦糸町『noodle house錦鯉』のオーナーが酒に合う担々麺をプロデュース。自家挽き練りゴマとカシューナッツの芝麻醬、鶏と乾物・シジミ・北海道産真昆布・シイタケのスープ、国産豚の肉味噌、4種の唐辛子のラー油。麺は菅野製麺所と共同開発した全粒粉入り。手揉み中太麺の汁なし担々麺、黒酢の担々つけ麺、醤油の中華そば、夜限定で鶏排がのる「桃源郷担々麺」も。辛さと痺れは調整可能。300円のジャリチ(生姜醤油の豚ロース唐揚げ)をパーコー麺のように沈めるのがおすすめです。',
  });
}

// ================================================================ 新橋ニューともちん
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13288533/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['08:00', '17:00']);
  put({
    id: 'tokyo_shimbashi_new_tomochin', name: '新橋ニューともちん (Shimbashi New Tomochin)', category: 'OMNI',
    lat: 35.666222, lng: 139.759546,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The only dish is chuka soba: wheat noodles in a shoyu-coloured pork soup. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The single bowl is a pork-flavoured soy-sauce soup with chashu. Wakame is the only topping, and rice is free.',
    hours_raw: 'Weekdays 08:00–17:00; holidays 10:00–16:00; closed Saturdays and Sundays (Tabelog). A Tabelog notice says regular hours resume from 9:30 from 28 October. Cash only; ticket machine.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 B1F — 1 min from Shimbashi Stn',
    cuisine: 'Standing-counter chuka soba · one bowl, wakame, free rice', cuisine_type: 'ramen',
    website: null, gmaps: gm('新橋ニューともちん 新橋駅前ビル'), menu_url: null,
    notes: "[Ramen · standing counter] The fourth shop of Kōenji's Tomochin Ramen (Tabelog), opened September 2023 in the basement of the Shimbashi Ekimae Building, and a famous morning-to-afternoon queue. Six standing places at the counter, one dish: chuka soba for ¥850, with wakame for ¥100 and free, refillable rice; hand over the yellow rice ticket with your ramen ticket. The soup is a clear soy colour with a thin layer of pork fat, light but meaty, and regulars add wakame and soften the green onions in the hot oil. 2026 diners were split between those who call it the pinnacle of morning ramen and those who found it mild.",
    chef_bio: {
      chef_name: null, roles: ['branch of 高円寺「ともちんラーメン」 (store no. 4)'],
      origin: 'Shimbashi Ekimae Bldg B1F; opened 29 September 2023 (Tabelog)',
      background: 'Tabelog lists it as Kōenji "Tomochin Ramen" store no. 4; a 2026 diner also mentions a Kawasaki shop. No source names the operator.',
      philosophy: null,
      specialty: 'One chuka soba with free rice.',
      anecdotes: [
        { text: '"The menu only offers Chuka Soba (JPY 850) and a topping of wakame (JPY 100). Plus, the free rice can be refilled!" — and a queue of four or five at 10:35 a.m. on a weekday.', source: R + 'B537425237/' },
        { text: '"Most regulars were adding extra wakame and enjoying free rice… I was dipping the green onions into the hot oil to soften them."', source: R + 'B537350438/' },
      ],
      japanese_sources_summary: '食べログ: 新橋ニューともちん、新橋駅前ビルB1F、平日8:00〜17:00、祝10:00〜16:00、土日休、10月28日から9:30開店の通常営業に戻る旨の告知、現金のみ、6席、2023年9月29日オープン、備考「高円寺『ともちんラーメン』4号店」。2026年10月の口コミ: 中華そば850円・わかめ100円・ライス無料(おかわり可)、立ち食いカウンター。',
      confidence: 'low', sources: [TB, R + 'B528993286/', R + 'B537350438/', R + 'B537425237/', R + 'B537689802/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter only; buy at the ticket machine (cash, coins or ¥1,000 notes) and put the yellow free-rice ticket down with it. Self-serve water and paper aprons.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'One wheat-noodle chuka soba is the only dish.', source: R + 'B528993286/' }],
      soy_sauce_wheat: [{ text: 'A clear soy-sauce-coloured broth.', source: R + 'B528993286/' }],
      vegan_cross_contact: [{ text: 'Broth with a thin layer of fat and a rich pork flavour; chashu.', source: R + 'B528993286/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Described as firm (2026).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: '中華そば (chuka soba) — ¥850 with free rice (October 2026).',
      chashu: 'Pork chashu; one 2026 diner found it flavourless.',
      notable_toppings: ['wakame (+¥100)', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork soup.' },
      pantheon: 'A standing-only basement counter with one bowl and a queue: clear soy chuka soba under a skin of hot pork fat, wakame to soak it up, and free rice for the chashu.',
      profile: { richness: 2, oiliness: 3, clarity: 4, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B528993286/', 'Light yet develops a deep richness with each sip.'],
        oiliness: [R + 'B528993286/', 'A thin layer of fat on the surface; diners soften green onions "in the hot oil" (' + R + 'B537350438/).'],
        clarity: [R + 'B528993286/', 'The broth has a clear soy sauce color.'],
        tare_strength: [R + 'B537894087/', 'The flavor is quite mild compared to other similar shops.'],
        noodle_firmness: [R + 'B537425237/', 'The golden broth clings perfectly to the firm noodles.'],
        aroma_punch: [R + 'B537894087/', 'Mild; "the broth seems to lack depth."'],
      },
      confidence: 'low', sources: [R + 'B528993286/', R + 'B537350438/', R + 'B537425237/', R + 'B537894087/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 6m. Same Tabelog building point as はるちゃんラーメン (1F) — both shops are in this building; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'medium', sources: [R + 'B537425237/', R + 'B537689802/'],
    price_note: 'Two October 2026 diners report the whole menu: chuka soba ¥850, wakame ¥100, free rice.', last_checked: TODAY, items: [
      it('中華そば', 'chuuka soba', 'Chuka soba', '¥850', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('わかめ', 'wakame', 'Wakame topping', '¥100', 'Toppings', 'ask', 'ask', '', 'wakame'),
      it('ライス', 'raisu', 'Rice (free, refillable)', '¥0', 'Rice', 'ask', 'ask', '', 'free_rice'),
    ] }, {
    cuisine: '立ち食いの中華そば・一品のみ・わかめ・ライス無料',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館B1F。新橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。メニューは中華そば1品のみで、醤油色の豚のスープに小麦の麺です。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。一杯は豚の旨味の醤油スープにチャーシュー。トッピングはわかめのみで、ライスは無料です。',
    notes: '[ラーメン・立ち食い] 食べログによると高円寺「ともちんラーメン」の4号店で、2023年9月に新橋駅前ビルの地下に開業。朝から午後まで行列ができる店です。立ち食いカウンター6人分、メニューは中華そば850円の1品で、わかめ100円、ライスは無料でおかわり可(ラーメンの食券と一緒に黄色いライス券を置く)。スープは澄んだ醤油色に薄く豚の脂が浮き、あっさりながら肉の旨味がしっかり。常連はわかめを足し、熱い油でねぎをしんなりさせて食べます。2026年の口コミは「朝ラーの頂点」から「味が薄い」まで分かれています。',
  });
}

// ================================================================ 家系ラーメン 王道乃印 新橋
{
  const PR = 'https://prtimes.jp/main/html/rd/p/000000001.000187957.html';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13309137/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '04:00']), we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_odo_no_shirushi_shimbashi', name: '家系ラーメン 王道乃印 新橋 (Iekei Rāmen Ōdō no Shirushi)', category: 'OMNI',
    lat: 35.668188, lng: 139.756663,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Iekei ramen on wheat noodles in a pork-bone soup with a sharp tare. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A rich pork-bone (tonkotsu) soup with smoky, rare chashu; nori, spinach and white leek are the toppings.',
    hours_raw: 'Mon–Fri 11:00–04:00 (next day); Sat, Sun & holidays 11:00–22:00 (Tabelog). Cash only; ticket machine.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shimbashi 1-chōme — 3–4 min from Shimbashi Stn',
    cuisine: 'Iekei ramen of the 王道家 (Ōdōya) group · open to 4 a.m. on weekdays', cuisine_type: 'ramen',
    website: null, gmaps: gm('家系ラーメン 王道乃印 新橋'), menu_url: null,
    notes: "[Ramen · iekei, Ōdōya group] A 15-seat Shimbashi shop of 王道乃印, a brand of the Ōdōya iekei group (other 王道乃印 shops include Kashiwa and, from 24 October 2026, Ōta in Gunma; a 2026 diner also mentions Akihabara). Opened May 2025. The bowl is a rich, marrow-heavy pork-bone soup with a sharp tare, medium-thick noodles, smoky rare chashu, nori and spinach; noodle firmness, richness and oil are set to taste. Grated garlic and ginger are free on the table. Ramen ¥950 and rice ¥150 in October 2026. Open until 4 a.m. on weekdays. A regular in 2026 found it less busy than before and the noodles changed; another called it a lighter Ōdōya.",
    chef_bio: {
      chef_name: null, roles: ['shop of the 王道家 group brand 王道乃印'],
      origin: 'Shimbashi 1-chōme; opened 7 May 2025 (Tabelog)',
      background: '王道乃印 is a brand within the 王道家 (Ōdōya) iekei group; group shops train new owners in the group kitchens (PR TIMES, 2026). No source names this shop\'s operator.',
      philosophy: null,
      specialty: 'Ōdōya-style iekei; special ramen with three slices of chashu, nori and spinach.',
      anecdotes: [
        { text: '"A lighter version of Oudouya. It\'s smoother than the original, yet it captures the richness of the meat flavor, the sharpness of the tare… However, it does leave you extremely thirsty."', source: R + 'B537436516/' },
        { text: 'A diner expecting three slices of chashu got four: "I must have used up my luck on something trivial."', source: R + 'B537356366/' },
      ],
      japanese_sources_summary: 'PR TIMES(2026年): 「王道乃印 野上家」は王道家系列として群馬県太田市に2026年10月24日オープン、王道乃印 柏店で研修、ラーメン950円・王道乃印ラーメン1,450円。食べログ: 王道乃印 新橋、2025年5月7日オープン、平日11:00〜翌4:00、土日祝11:00〜22:00、15席、現金のみ。2026年の口コミ: ラーメン950円・ライス150円、特製+半ライス1,550円、白髪ねぎラーメン海苔増し1,300円、燻製香のレアチャーシュー、にんにく・生姜は卓上で無料。',
      confidence: 'medium', sources: [PR, TB, R + 'B537286897/', R + 'B537436516/', R + 'B537701370/', R + 'B507205615/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only); preferences for firmness, richness and oil. Self-serve water and paper aprons; compact seating.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Medium-thick wheat noodles.', source: R + 'B537286897/' }],
      soy_sauce_wheat: [{ text: 'Iekei pork-bone soup with a sharp tare (kaeshi).', source: R + 'B537436516/' }],
      vegan_cross_contact: [{ text: 'Rich pork-bone soup with marrow; smoky rare chashu.', source: R + 'B537500613/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: null, tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick; one 2026 regular felt they had changed and turned rubbery.' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン (iekei) — ¥950; special with half rice ¥1,550 (October 2026).',
      chashu: 'Smoky, rare chashu; three slices on the chashu and special bowls.',
      notable_toppings: ['nori', 'spinach', 'white leek', 'free grated garlic and ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'The Ōdōya iekei line, open until 4 a.m. by Shimbashi station: a marrow-rich pork-bone soup with a sharp tare, smoky rare chashu, spinach and nori, and as much garlic as you dare.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537500613/', 'The broth has a rich pork flavor and a nice marrow essence; "a lighter version of Oudouya" (' + R + 'B537436516/).'],
        oiliness: MID,
        clarity: [R + 'B537500613/', 'A marrow-rich pork-bone broth.'],
        tare_strength: [R + 'B537436516/', 'The sharpness of the tare… it does leave you extremely thirsty.'],
        noodle_firmness: [R + 'B537286897/', 'The noodles were medium-thick and tasty.'],
        aroma_punch: [R + 'B537701370/', 'The broth has a unique aroma; the chashu is smoky (' + R + 'B537286897/).'],
      },
      confidence: 'low', sources: [R + 'B537500613/', R + 'B537436516/', R + 'B537286897/', R + 'B537701370/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-16-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目16番 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537701370/', R + 'B537286897/', R + 'B537500613/', R + 'B537356366/'],
    price_note: 'No menu read. Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'raamen', 'Ramen (iekei)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('チャーシューメン', 'chaashuumen', 'Chashu ramen (3 slices)', '', 'Ramen', 'no', 'no', '', 'chashu_ramen'),
      it('白髪ねぎラーメン', 'shiraga negi raamen', 'White-leek ramen', '', 'Ramen', 'no', 'no', '¥1,300 with extra nori (October 2026).', 'negi_ramen'),
      it('特製ラーメン', 'tokusei raamen', 'Special ramen', '', 'Ramen', 'no', 'no', '¥1,550 with half rice (October 2026).', 'tokusei_ramen'),
      it('ライス', 'raisu', 'Rice', '¥150', 'Rice', 'ask', 'ask', '', 'rice'),
    ] }, {
    cuisine: '王道家グループの家系ラーメン・平日は深夜4時まで',
    neighborhood: '新橋一丁目。新橋駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではありません。豚骨スープにキレのあるタレ、小麦の麺の家系ラーメンです。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。濃厚な豚骨スープに燻製香のレアチャーシュー、トッピングは海苔・ほうれん草・白髪ねぎです。',
    notes: '[ラーメン・家系・王道家グループ] 王道家グループのブランド「王道乃印」の新橋店で、15席、2025年5月開業(王道乃印は柏や、2026年10月24日開業の群馬・太田にもあり、口コミでは秋葉原店にも言及)。髄の旨味が濃い豚骨スープにキレのあるタレ、中太麺、燻製香のレアチャーシュー、海苔とほうれん草。麺の硬さ・味の濃さ・油の量は好みで。卓上のおろしにんにくと生姜は無料。2026年10月はラーメン950円・ライス150円。平日は深夜4時まで営業。2026年の常連は以前より空いていて麺が変わったと書き、別の客は「王道家のライト版」と評しています。',
  });
}

// ================================================================ 天鳳 新橋店
{
  const OWN = 'https://www.fujiofood.com/shop_search/cat168/shop_3855.php';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13274943/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '22:00']), we = day(['11:00', '15:00']);
  put({
    id: 'tokyo_tenhou_shimbashi', name: '天鳳 新橋店 (Tenhō, Shimbashi)', category: 'OMNI',
    lat: 35.667028, lng: 139.760263,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Wakayama-style chuka soba on thin wheat noodles, tsukemen, shumai and karaage. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The chuka soba carries plenty of chashu, the tsukemen dip is described as strongly animal-based, and the sets add shumai and karaage.',
    hours_raw: 'Weekdays 11:00–22:00; Sat, Sun & holidays 11:00–15:00 (Tabelog). The operator lists weekdays 11:00–22:00, open daily. E-money and PayPay accepted; no cards.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 1-chōme, Ōmi Bldg 1F — 2–3 min from Shimbashi Stn',
    cuisine: 'Wakayama chuka soba · tsukemen · ramen, shumai and karaage sets', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('天鳳 新橋店 新橋1-8-6'), menu_url: null,
    notes: "[Ramen · Wakayama chuka soba] A Shimbashi branch of 天鳳, a brand of Fujio Food System, selling Wakayama-style chuka soba under that name on the sign. The bowl looks rich, with thin noodles and plenty of chashu; diners in 2026 disagreed on whether it was light or heavy. The tsukemen (¥920 in October 2026) has medium-thick straight noodles, three thick slices of pork belly and cubed grilled chashu. Sets pair the ramen with shumai, rice and karaage. Quiet in the afternoon, with regulars on a daytime chūhai.",
    chef_bio: {
      chef_name: null, roles: ['brand of 株式会社フジオフードシステム'],
      origin: 'Shimbashi 1-chōme; opening year not found',
      background: 'Listed on the Fujio Food System site as 天鳳 新橋店.',
      philosophy: null,
      specialty: 'Wakayama chuka soba; tsukemen with pork belly; A/C sets with shumai and karaage.',
      anecdotes: [
        { text: 'An October 2026 diner who ate Wakayama chuka soba daily on a business trip 40 years ago came in on the strength of the sign alone.', source: R + 'B536608583/' },
        { text: '"The manager seemed to be from Wakayama, as he spoke in a Kansai dialect."', source: R + 'B537037171/' },
      ],
      japanese_sources_summary: 'フジオフードシステム公式: 天鳳 新橋店、港区新橋1-8-6、平日11:00〜22:00、無休。食べログ: 平日11:00〜22:00、土日祝11:00〜15:00、電子マネー・PayPay可。2026年10月の口コミ: 和歌山中華そば、細麺、チャーシューたっぷり、つけ麺920円(中太ストレート麺、豚バラ厚切り3枚と角切り焼豚)、Aセット(ラーメン・焼売・ライス)、Cセット(焼売3個・唐揚げ3個)。',
      confidence: 'medium', sources: [OWN, TB, R + 'B536608583/', R + 'B537142411/', R + 'B537397231/', R + 'B537576290/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet chain shop; many non-Japanese staff and customers (2026). E-money and PayPay.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thin wheat noodles; karaage and shumai in the sets.', source: R + 'B537894613/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Tsukemen dip with strong umami from animal ingredients.', source: R + 'B537397231/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: [], broth_texture: null, tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles "similar to Hakata ramen" for chuka soba; medium-thick straight for tsukemen.' },
      regional_style: ['Wakayama'], sub_genre: ['chuka soba', 'tsukemen'],
      signature_bowl: '和歌山中華そば (Wakayama chuka soba); tsukemen ¥920 (October 2026).',
      chashu: 'Generous; three thick pork-belly slices plus cubed grilled chashu on the tsukemen.',
      notable_toppings: ['menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Animal-based soup.' },
      pantheon: 'A chain take on Wakayama chuka soba by Shimbashi station: a rich-looking bowl of thin noodles and plenty of pork, with shumai on the side.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537142411/', 'The broth was quite thick, making it challenging to finish; another diner found it "quite light" (' + R + 'B537576290/).'],
        oiliness: MID,
        clarity: [R + 'B537142411/', 'The broth looked rich and flavorful.'],
        tare_strength: [R + 'B537037171/', 'Just the right amount of saltiness.'],
        noodle_firmness: MID,
        aroma_punch: MID,
      },
      confidence: 'low', sources: [R + 'B537142411/', R + 'B537576290/', R + 'B537037171/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-8-6 近江ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator shop page live; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目8番 (lot) 20m; OSM node 10570223962 「天鳳」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537397231/', R + 'B537576290/', R + 'B537894613/'],
    price_note: 'No menu read. Dishes from October 2026 reviews; one price.', last_checked: TODAY, items: [
      it('和歌山中華そば', 'wakayama chuuka soba', 'Wakayama chuka soba', '', 'Ramen', 'no', 'no', '', 'wakayama_chuka_soba'),
      it('つけ麺', 'tsukemen', 'Tsukemen (pork belly, cubed chashu)', '¥920', 'Ramen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('Aセット', 'ee setto', 'A set: Wakayama ramen, shumai, rice', '', 'Set', 'no', 'no', '', 'a_set'),
      it('Cセット', 'shii setto', 'C set: chuka soba, 3 shumai, 3 karaage', '', 'Set', 'no', 'no', '', 'c_set'),
      it('焼売', 'shuumai', 'Shumai', '', 'Sides', 'no', 'no', '', 'shumai'),
    ] }, {
    cuisine: '和歌山中華そば・つけ麺・焼売と唐揚げのセット',
    neighborhood: '新橋一丁目、近江ビル1F。新橋駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺の和歌山風中華そば、つけ麺、焼売、唐揚げ。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。中華そばにはチャーシューがたっぷりのり、つけ汁は動物系の旨味が強いとされ、セットには焼売と唐揚げが付きます。',
    notes: '[ラーメン・和歌山中華そば] フジオフードシステムのブランド「天鳳」の新橋店で、看板に和歌山中華そばを掲げます。見た目は濃厚で、細麺にチャーシューたっぷり。2026年の口コミでは、あっさりか濃いかで評価が分かれています。つけ麺(2026年10月で920円)は中太ストレート麺に厚切り豚バラ3枚と角切り焼豚。ラーメンに焼売・ライス・唐揚げを合わせたセットもあります。午後は静かで、昼からチューハイを飲む常連も。',
  });
}

save();
