// Osaka sweep (2-mile circle around Dotonbori), batch 142 — ramen phase, last candidates inside the circle (all OMNI).
//   + 担々麺屋 オッソちゃん (tom yum tantanmen with a board of toppings and flavor-changers; lunch only; Abeno)
//   + 元祖 ニンニクラーメン 寺田町 (late-night garlic ramen under a yellow awning, cucumber kimchi; Teradacho)
//   + らーめん 桐麺 天王寺店 (Kiritama: homemade flat noodles with salt tare and raw egg, rich tsukemen; Abeno)
//   - skipped 横浜家系ラーメン 独覚家 27117701: Machida Shoten chain; 町田商店 本町 is already in data.
//   - skipped 3 shops with too few reviews to verify (みたす 13, 麺屋 春煕 3, 豚安ラーメン 4).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 142);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27117701', 'chain branch: Machida Shoten group; 町田商店 本町 (osaka_machida_shoten_honmachi) already in data');
skip('27159332', 'only 13 reviews; too few to verify a full record');
skip('27123772', 'only 3 reviews; too few to verify a full record');
skip('27160076', 'only 4 reviews; too few to verify a full record');

// ================================================================ 担々麺屋 オッソちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27151025/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00']);
  put({
    id: 'osaka_tantanmen_ya_osso_chan_abeno', name: '担々麺屋 オッソちゃん (Tantan-men Ya Osso Chan)', category: 'OMNI',
    lat: 34.643344, lng: 135.515345, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; sesame and chili pastes; meat miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso; tom yum base; egg; pig\'s feet and khao man gai on the board.',
    hours_raw: 'Mon–Sat 11:00 until sold out (listed to 15:00); closed Sun and irregular days, posted on Instagram; hours may vary on event days (Tabelog). Order by placing menu chips on a board and handing it over (2026). Cash only (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsuzakicho 2-3-20 (Abeno-ku) — 265 m from Kintetsu Osaka-Abenobashi Stn',
    cuisine: 'Tom yum tantanmen · tom yum tantanmen ¥1,200 (¥1,100 at lunch): spicy, numbing, sour-sweet broth with strong Sichuan pepper, thin flexible noodles, meat miso; large noodles · toppings: cilantro, soft-boiled egg, onion; three toppings brought one bowl to ¥1,660 · whiteboard specials such as spicy green onion, shredded pig\'s feet, khao man gai · jasmine rice · fragrant chili oil and many flavor-changers, with spare plates for trying them · about 8 counter seats and tables by the door',
    website: null, gmaps: gm('担々麺屋 オッソちゃん'), menu_url: null,
    notes: "[Ramen · tom yum tantanmen with a play board of toppings, Abeno] A small, lively shop near Abenobashi that fills within minutes of its 11:00 opening, serving one thing above all: tom yum tantanmen (¥1,100 at lunch). The broth is spicy, numbing, sour and a little sweet, with a strong Sichuan-pepper tingle, on thin, flexible noodles with meat miso. Ordering is a game: slot colored menu chips into a board and hand it over, adding cilantro, egg or onion, or a whiteboard special like shredded pig's feet. Then work through the flavor-changers and the fragrant chili oil, on spare plates provided. Staff walk first-timers through it. It's properly hot. Lunch only, until sold out; closed Sundays. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tantanmen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Tom yum tantanmen.',
      anecdotes: [
        { text: '"The broth is definitely a mix of Tom Yum and tantanmen, with a strong kick from the Sichuan peppercorns that gives a tingling sensation… Mixing this chili oil into the broth, along with the meat miso, cilantro, onions, and noodles…" — October 2026.', source: R + 'B538046722/' },
        { text: '"Instead of a traditional menu, there are plastic chips with the menu items printed on them. You insert one into an order board and hand it to [staff]." — September 2026, tom yum tantanmen with three toppings, ¥1,660.', source: R + 'B536341341/' },
      ],
      japanese_sources_summary: '食べログ: 担々麺屋 オッソちゃん、大阪市阿倍野区松崎町2-3-20、大阪阿部野橋から265m、月〜土 11:00〜売り切れまで (15:00 とも)、日休み、不定休あり (Instagram で告知)、イベントの日は変更あり、カード・電子マネー・QR不可。口コミ(2026年5〜10月): SNS で知られる店、11時の開店から5分で満席、トムヤム担々麺1,200円 (昼は1,100円)、辛くてしびれて酸っぱく少し甘い、花椒が強い、しなやかな細麺、肉味噌、麺大盛り、パクチー・味玉・玉ねぎのトッピングで1,660円、ホワイトボードのおすすめ (辛いねぎ、豚足の細切り、カオマンガイ)、ジャスミンライス、香りのいいラー油と味変の調味料が多く、取り皿もある、メニューのチップを注文板に差して渡す、初めてでも店の人が説明してくれる、カウンター8席ほどと入口近くのテーブル、辛いのが苦手な人には辛すぎるかも。',
      confidence: 'medium', sources: [TB, R + 'B528271871/', R + 'B536097902/', R + 'B536341341/', R + 'B536775907/', R + 'B538046722/', R + 'B538174631/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['sesame'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, flexible noodles; large size available (2026).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Tom yum tantanmen, ¥1,200 (¥1,100 at lunch) (2026).',
      chashu: null,
      notable_toppings: ['meat miso', 'cilantro', 'soft-boiled egg', 'onion', 'chili oil', 'jasmine rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso.' },
      pantheon: 'Abeno\'s tom yum tantanmen, ordered by chips and tuned with a tray of flavor-changers.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B528271871/', '"The broth is tasty and has a nice level of spiciness" — mid-scale.'],
        oiliness: [R + 'B538046722/', '"The fragrant chili oil for flavor enhancement is incredibly delicious" — mid-scale.'],
        clarity: [R + 'B538046722/', 'A tantanmen broth with meat miso and chili oil — placed low.'],
        tare_strength: [R + 'B538046722/', '"Spicy, Delicious, Sour, Sweet, and Numbing" — placed high.'],
        noodle_firmness: [R + 'B538046722/', '"The sharp, thin noodles are flexible" — mid-scale.'],
        aroma_punch: [R + 'B538046722/', '"A strong kick from the Sichuan peppercorns that gives a tingling sensation" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B538046722/', R + 'B528271871/', R + 'B536097902/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Unusual chip-board ordering, but staff explain it (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区松崎町2-3-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区松崎町二丁目3番20号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528271871/', R + 'B536341341/'],
    price_note: 'Prices from May–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tom yum tantanmen', '¥1,200 (¥1,100 lunch)', 'Tantanmen', 'no', 'no', 'May 2026.', 'tomyum'),
      it('', '', 'Toppings: cilantro, soft-boiled egg, onion', '', 'Toppings', 'ask', 'ask', 'September 2026.', 'toppings'),
      it('', '', 'Shredded pig\'s feet (board special)', '', 'Sides', 'ask', 'no', 'October 2026.', 'tonsoku'),
      it('', '', 'Jasmine rice', '', 'Rice', 'ask', 'ask', 'September 2026.', 'jasmine'),
    ] }, {
    cuisine: 'トムヤム担々麺・トムヤム担々麺1,200円 (昼は1,100円): 辛くてしびれて酸っぱく少し甘い、花椒が強いスープ、しなやかな細麺、肉味噌、麺大盛りも・トッピング: パクチー、味玉、玉ねぎ、3つで1杯1,660円・ホワイトボードのおすすめ: 辛いねぎ、豚足の細切り、カオマンガイ・ジャスミンライス・香りのいいラー油と多くの味変、試す取り皿も・カウンター8席ほどと入口近くのテーブル',
    neighborhood: '阿倍野区松崎町2-3-20。近鉄大阪阿部野橋駅から265m',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、ごまと唐辛子のペースト、肉味噌。',
    vegan_detail: 'ヴィーガンではありません。肉味噌、トムヤムのベース、卵、ボードの豚足やカオマンガイ。',
    notes: '[ラーメン・阿倍野、トッピングを板で選ぶトムヤム担々麺] 阿部野橋近くの小さくにぎやかな店で、11時の開店から数分で満席、看板はなんといってもトムヤム担々麺 (昼は1,100円)。スープは辛く、しびれ、酸っぱく、少し甘く、花椒がビリッと効き、しなやかな細麺に肉味噌。注文は遊び心があり、色付きのメニューのチップを板に差して渡し、パクチー、卵、玉ねぎ、豚足の細切りなどホワイトボードのおすすめを足す。あとは用意された取り皿で味変と香りのいいラー油を試していく。初めてでも店の人が教えてくれる。しっかり辛い。昼のみ、売り切れまで、日曜休み。現金のみ。',
  });
}

// ================================================================ 元祖 ニンニクラーメン 寺田町
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27059194/'; const R = TB + 'dtlrvwlst/';
  const A = day(['18:00', '02:00']); const B = day(['18:00', '03:00']);
  put({
    id: 'osaka_ganso_ninniku_ramen_teradacho', name: '元祖 ニンニクラーメン 寺田町 (Ganso Ninniku Ramen Teradacho)', category: 'OMNI',
    lat: 34.648852, lng: 135.523435, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; miso; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup; chashu; egg.',
    hours_raw: 'Mon–Thu 18:00–02:00; Fri–Sat 18:00–03:00; closed Sun; hours may change (Tabelog). One April 2026 diner noted it now closes at 23:00, so check. Cash only; smoking allowed (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Daido 4-10-4 (Tennoji-ku), under a yellow awning with red lanterns — in front of JR Teradacho Stn',
    cuisine: 'Garlic ramen · ninniku (garlic) ramen: light pork-bone soup loaded with chopped garlic, smooth, curly medium-thick noodles · miso chashu ramen ¥1,100 · chashu ramen ¥1,100 · kimchi ramen ¥900 · boiled egg · extra noodles ¥300 · gyoza ¥300 · small rice ¥150, served with kimchi · cucumber kimchi (oi kimchi) · a "no-noodle set" of chashu, sprouts, kimchi, rice and broth · counter',
    website: null, gmaps: gm('元祖 ニンニクラーメン 寺田町'), menu_url: null,
    notes: "[Ramen · late-night garlic ramen by Teradacho Station] An old-school, evening-only garlic ramen shop right in front of Teradacho, behind a yellow awning, red lanterns and a red noren, often full after 22:00. The house ninniku ramen is a surprisingly light pork-bone soup under a heap of chopped garlic, on smooth, curly noodles, a classic finish after a night out; there's also miso chashu (¥1,100) and kimchi ramen (¥900). Order the cucumber kimchi: addictive and the real star for one diner. Rice comes with kimchi, and gyoza are ¥300. Several diners wanted even more garlic, so ask. Hours have reportedly shortened, so check before going late. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Garlic ramen shop open in the evening (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Garlic ramen.',
      anecdotes: [
        { text: '"The broth is rich with pork bone and plenty of garlic, yet surprisingly light. But the real star is the cucumber kimchi, which I believe is a type of oi kimchi—it\'s delicious and addictive!" — June 2026, garlic ramen.', source: R + 'B531923718/' },
        { text: '"The ramen was packed with garlic and had a light pork bone broth. The noodles were smooth and curly, and it was delicious!" — October 2026.', source: R + 'B537732854/' },
      ],
      japanese_sources_summary: '食べログ: 元祖 ニンニクラーメン 寺田町、大阪市天王寺区大道4-10-4、寺田町から109m、月〜木 18:00〜翌2:00、金・土 18:00〜翌3:00、日休み、カード・電子マネー・QR不可、喫煙可。口コミ(2026年4〜10月): 寺田町駅前、黄色いテントに赤い文字、赤ちょうちん、赤いのれん、夜のみ、22時過ぎもほぼ満席、ニンニクラーメン (写真) はたっぷりの刻みにんにくとあっさりの豚骨スープ、なめらかな縮れた中太麺、味噌チャーシューラーメン1,100円、チャーシューラーメン1,100円、キムチラーメン900円、ゆで卵、替え玉300円、餃子300円、小ライス150円 (キムチ付き)、きゅうりのキムチ (オイキムチ)、チャーシュー・もやし・キムチ・ご飯・スープの「麺なし定食」、にんにくをもっと欲しいという声、今は23時に閉まるという声 (2026年4月)、温かい接客。',
      confidence: 'medium', sources: [TB, R + 'B526707484/', R + 'B528934423/', R + 'B530736948/', R + 'B531923718/', R + 'B535647148/', R + 'B537732854/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Smooth, curly medium-thick noodles, slightly firm (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ninniku (garlic) ramen (2026).',
      chashu: 'Chashu ramen and miso chashu ramen (2026).',
      notable_toppings: ['chopped garlic', 'kimchi', 'cucumber kimchi', 'boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Teradacho\'s late-night garlic ramen with a side of cucumber kimchi.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B526707484/', '"The broth was light and refreshing, perfect for sipping after a long day" — placed low.'],
        oiliness: [R + 'B531923718/', '"Yet surprisingly light" — placed low.'],
        clarity: [R + 'B537732854/', '"A light pork bone broth" — mid-scale.'],
        tare_strength: [R + 'B531923718/', '"The broth is rich with pork bone and plenty of garlic" — mid-scale.'],
        noodle_firmness: [R + 'B526707484/', '"The noodles were medium-thick and slightly firm" — mid-scale.'],
        aroma_punch: [R + 'B528934423/', '"The garlic is abundant and my mouth is on fire!" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B526707484/', R + 'B531923718/', R + 'B528934423/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; staff accommodating, e.g. a shared bowl with a spare plate (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区大道4-10-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区大道四丁目10番4号 (go) 12m; Chuka Soba Shuki at 4-10-6 pins ~7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526707484/', R + 'B528934423/', R + 'B530736948/'],
    price_note: 'Prices from April–June 2026 reviews.', last_checked: TODAY, items: [
      it('ニンニクラーメン', '', 'Garlic ramen', '', 'Ramen', 'no', 'no', 'June 2026 photo caption.', 'ninniku'),
      it('', '', 'Miso chashu ramen', '¥1,100', 'Ramen', 'no', 'no', 'April 2026.', 'miso_chashu'),
      it('', '', 'Chashu ramen', '¥1,100', 'Ramen', 'no', 'no', 'May 2026.', 'chashu'),
      it('', '', 'Kimchi ramen', '¥900', 'Ramen', 'no', 'no', 'June 2026.', 'kimchi'),
      it('', '', 'Gyoza', '¥300', 'Sides', 'no', 'no', 'April–June 2026.', 'gyoza'),
      it('', '', 'Cucumber kimchi', '', 'Sides', 'ask', 'ask', 'June 2026.', 'oi_kimchi'),
      it('', '', 'Small rice (with kimchi)', '¥150', 'Rice', 'ask', 'ask', 'May 2026.', 'rice'),
    ] }, {
    cuisine: 'にんにくラーメン・ニンニクラーメン: たっぷりの刻みにんにくをのせたあっさりの豚骨スープ、なめらかな縮れた中太麺・味噌チャーシューラーメン1,100円・チャーシューラーメン1,100円・キムチラーメン900円・ゆで卵・替え玉300円・餃子300円・小ライス150円 (キムチ付き)・きゅうりのキムチ (オイキムチ)・チャーシュー、もやし、キムチ、ご飯、スープの「麺なし定食」・カウンター',
    neighborhood: '天王寺区大道4-10-4、黄色いテントと赤ちょうちんが目印。JR寺田町駅前',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、味噌、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、卵。',
    notes: '[ラーメン・寺田町駅前、夜遅くまでのにんにくラーメン] 寺田町駅の目の前、黄色いテントに赤ちょうちんと赤いのれんの昔ながらの店で、夜のみ営業、22時を過ぎてもほぼ満席。看板のニンニクラーメンは意外にあっさりした豚骨スープに刻みにんにくを山ほどのせ、なめらかな縮れ麺で、飲んだ後の締めにぴったり。味噌チャーシュー (1,100円) やキムチラーメン (900円) も。きゅうりのキムチはぜひ: やみつきで、これが主役という声も。ご飯にはキムチが付き、餃子は300円。にんにくをもっと欲しいという声が複数あるので頼んでみて。営業時間が短くなったという声もあるので、遅く行くなら確認を。現金のみ、喫煙可。',
  });
}

// ================================================================ らーめん 桐麺 天王寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27159196/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_kirimen_tennoji', name: 'らーめん 桐麺 天王寺店 (Ramen Kirimen Tennoji)', category: 'OMNI',
    lat: 34.642564, lng: 135.512225, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; salt tare; tsukemen dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: raw egg; chashu; meat-based tsukemen dip.',
    hours_raw: 'Mon–Wed, Fri–Sun 11:00–15:00 and 18:00–22:00 (last order 21:45); closed Thu; hours may change (Tabelog). Buy a ticket, then queue; waits of about 15 minutes at peak (October 2026). E-money accepted; no cards or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Abenosuji 3-5-23 (Abeno-ku) — 66 m from Abeno Stn',
    cuisine: 'Kiritama and tsukemen · Kiritama (Kirimen) ¥1,000: homemade flat noodles with a special salt sauce and a raw egg underneath, mixed like kama-tama; served cold too (Kiritama cold); 1.5 servings at no extra charge · rich tsukemen, 1.5 servings free; chashu and menma in the dip · Kiridon: chashu, menma and green onion over rice; with Kiritama cold as a set ¥1,480 · chashu topping · counter seats',
    website: null, gmaps: gm('らーめん 桐麺 天王寺店'), menu_url: null,
    notes: "[Ramen · Kiritama egg-and-salt noodles and rich tsukemen, Abeno] A small Tennoji branch of the noodle-focused Kirimen, opened in September 2026 near Abeno Station, with short lines at peak times. The signature Kiritama is noodles first: homemade flat noodles, firm, smooth and wheaty, tossed with a special salt sauce and the raw egg hidden underneath, kama-tama style; taste the noodles alone, then mix. It comes hot or cold, and 1.5 servings cost the same. The rich tsukemen, also free at 1.5 servings, has chashu and menma in the dip. The Kiridon chashu rice bowl finishes it off. One diner found the egg-and-sauce mix uneven and another the chashu fatty. Ticket machine first, then queue. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 September 2026 (Tabelog); a branch of Kirimen (October 2026 review).', background: 'Ramen and tsukemen shop focused on its homemade noodles (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kiritama; rich tsukemen.',
      anecdotes: [
        { text: '"This bowl features cold, homemade noodles combined with carefully selected eggs and a special sauce, creating an ultimate and simple dish. You can truly enjoy the overwhelming firmness, smooth texture, and the natural sweetness and umami of the wheat…" — October 2026, Kiritama cold, 1.5 servings, with Kiridon set ¥1,480.', source: R + 'B538148957/' },
        { text: '"The noodles had a delightful wheat aroma and were delicious! When I tried the dipping sauce, it was rich and satisfying…" — October 2026, rich tsukemen, 1.5 servings.', source: R + 'B537613692/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 桐麺 天王寺店、大阪市阿倍野区阿倍野筋3-5-23、阿倍野から66m、月〜水・金〜日 11:00〜15:00・18:00〜22:00 (L.O. 21:45)、木休み、電子マネー可、カード・QR不可、2026年9月14日開店。口コミ(2026年10月): 桐麺の天王寺店、看板の桐玉 (自家製の平打ち麺に特製の塩だれ、下に生卵、釜玉風に混ぜる)、桐玉冷 (写真)、1.5玉まで同じ値段、まず麺だけで、濃厚つけ麺 (1.5玉無料、つけ汁にチャーシューとメンマ)、桐丼 (写真; チャーシュー、メンマ、ねぎのご飯)、桐玉冷と桐丼のセット1,480円、チャーシューのトッピングは脂が多いという声、卵とたれの混ざり具合がいまひとつという声、券売機で買ってから並ぶ、小さな店で15分ほど待つ、カウンター席。',
      confidence: 'medium', sources: [TB, R + 'B537613692/', R + 'B537923105/', R + 'B538055239/', R + 'B538082425/', R + 'B538148957/', R + 'B538218290/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: true, notes: 'Homemade flat noodles, firm and smooth with strong wheat flavor; 1.5 servings at the same price (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'tsukemen'],
      signature_bowl: 'Kiritama (salt tare and raw egg), ¥1,000 (October 2026).',
      chashu: 'Chashu in the tsukemen dip and on the Kiridon; the topping slices run fatty (October 2026).',
      notable_toppings: ['raw egg', 'salt tare', 'chashu', 'menma', 'Kiridon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Raw egg.' },
      pantheon: 'Abeno\'s noodle-first Kiritama: homemade flat noodles, salt tare and a raw egg.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 5, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538082425/', '"It was rich but not overwhelming, making it easy to eat" (tsukemen) — mid-scale.'],
        oiliness: [R + 'B538055239/', '"Flat noodles that are easy to slurp, paired with a salt-based sauce and a raw egg" — placed low.'],
        clarity: [R + 'B538148957/', 'A sauce-and-egg noodle dish, no clear soup — placed low.'],
        tare_strength: [R + 'B537923105/', '"Once we mixed in the salt sauce and the egg… the first bite was absolutely exquisite" — mid-scale.'],
        noodle_firmness: [R + 'B538148957/', '"The overwhelming firmness, smooth texture" — top of scale.'],
        aroma_punch: [R + 'B537613692/', '"The noodles had a delightful wheat aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B538148957/', R + 'B537613692/', R + 'B538082425/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, then queue; counter seats suit solo diners (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋3-5-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋三丁目5番23号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538148957/', R + 'B538055239/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kiritama (salt tare and raw egg)', '¥1,000', 'Noodles', 'no', 'no', 'October 2026.', 'kiritama'),
      it('桐玉冷', '', 'Kiritama cold', '', 'Noodles', 'no', 'no', 'October 2026 photo caption.', 'kiritama_cold'),
      it('', '', 'Rich tsukemen (1.5 servings free)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('桐丼', '', 'Kiridon (chashu rice bowl)', '', 'Rice', 'no', 'no', 'October 2026 photo caption.', 'kiridon'),
      it('', '', 'Kiritama cold and Kiridon set', '¥1,480', 'Sets', 'no', 'no', 'October 2026.', 'set'),
    ] }, {
    cuisine: '桐玉とつけ麺・桐玉 1,000円: 自家製の平打ち麺に特製の塩だれ、下に生卵、釜玉風に混ぜる、冷たい桐玉冷も、1.5玉まで同じ値段・濃厚つけ麺、1.5玉無料、つけ汁にチャーシューとメンマ・桐丼: チャーシュー、メンマ、ねぎのご飯、桐玉冷とのセット1,480円・チャーシューのトッピング・カウンター席',
    neighborhood: '阿倍野区阿倍野筋3-5-23。阿倍野駅から66m',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、塩のたれ、つけ汁。',
    vegan_detail: 'ヴィーガンではありません。生卵、チャーシュー、肉のつけ汁。',
    notes: '[ラーメン・阿倍野、卵と塩の桐玉と濃厚つけ麺] 麺にこだわる桐麺の天王寺店で、2026年9月に阿倍野駅近くに開店、混む時間は短い行列。看板の桐玉は麺が主役: 硬めでなめらかな、小麦の香る自家製の平打ち麺に特製の塩だれと、下に隠れた生卵を釜玉風に混ぜる。まず麺だけで味わってから混ぜて。温かいのと冷たい桐玉冷があり、1.5玉まで同じ値段。濃厚つけ麺も1.5玉無料で、つけ汁にチャーシューとメンマ。桐丼で締めを。卵とたれの混ざりがいまひとつ、チャーシューが脂っぽいという声も。券売機で買ってから並ぶ。木曜休み。',
  });
}

save();
