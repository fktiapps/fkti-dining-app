// Osaka sweep (2-mile circle around Dotonbori), batch 82 — ramen phase (all OMNI).
//   + 友愛亭 (shoyu specialist with boxing-named bowls, Tabelog Ramen OSAKA 100 2023–2025)
//   + 麺や拓 (wafu tori-ton ramen in Kitahorie, Tabelog Ramen OSAKA 100 2023–2025)
//   + フラン軒 (chan-kei chuka soba in Honmachi; same operator site as Tori Soba Zagin)
//   + 麺や佑 (additive-free chicken-fish-pork ramen and tsukemen in Honmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 82);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 友愛亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27079226/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '17:30']);
  put({
    id: 'osaka_yuai_tei_nipponbashi', name: '友愛亭 (Yuai Tei)', category: 'OMNI',
    lat: 34.659616, lng: 135.505578, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth not described; chashu.',
    hours_raw: 'Tue–Sun 11:00–17:30 (L.O. 17:00); closed Monday; hours may change (Tabelog). Daytime only. Cards, e-money and QR accepted (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 4-12-1, Kyokujitsu Ryoko Bldg 1F — 4 min from Ebisucho Stn exit 1B',
    cuisine: 'Shoyu ramen specialist · bowls named like punches: Right Straight ¥1,050 (dark and light soy blend), Razor Punch, Heavy, Left Hook, Naniwa Joe, Takai da Cross · Unchained Custom +¥100: garlic, chive kimchi and habanero · chashu ramen ¥1,300 · toppings: menma, butter, soft-boiled egg, garlic · chashu rice bowl and mini bowl · rice ¥200 for a soup finish · 7 counter seats, 2 tables for 4',
    website: null, gmaps: gm('友愛亭 日本橋'), menu_url: null,
    notes: "[Ramen · Nipponbashi's Ramen 100 shoyu specialist, daytime only] A shoyu-ramen specialist near Ebisucho, open since 2014 and picked for Tabelog's Ramen OSAKA 100 from 2023 to 2025. Its six bowls are named like a boxer's punches. The classic Right Straight (¥1,050) blends dark and light soy into a rich, mellow, never-salty broth with a depth one regular could drink endlessly, over noodles with a good bite. Add the Unchained Custom (+¥100) of garlic, chive kimchi and habanero for a kick, or pile on menma, butter and a soft-boiled egg. The chashu is thick and tender, though one regular found it too fatty on recent visits. Order rice (¥200) to finish in the soup. Expect a line at lunch. Open 11:00 to 17:30 only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2014 (Tabelog)', background: 'Shoyu ramen specialist; Tabelog Ramen OSAKA 100 2023, 2024 and 2025.', philosophy: null, specialty: 'Right Straight shoyu ramen.',
      anecdotes: [
        { text: '"I ordered the classic Right Straight, which is a blend of dark and light soy sauce… The soy sauce ramen was delicious, with no salty taste at all, just the rich and mellow flavor of soy sauce." — October 2026.', source: R + 'B537201699/' },
        { text: '"I added the Unchained Custom for an extra JPY 100. The combination of garlic and chive kimchi with a kick of habanero elevates the flavor." — October 2026, Right Straight ¥1,050.', source: R + 'B490937284/' },
      ],
      japanese_sources_summary: '食べログ: 友愛亭、大阪市浪速区日本橋4-12-1 旭日旅行ビル 1F、恵美須町駅1B出口から徒歩4分、火〜日11:00〜17:30(L.O.17:00)、月曜休み、カード・電子マネー・QR可、15席(カウンター7、4人テーブル2)、禁煙、2014年6月1日開店、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2026年5〜10月): Right Straightとチャーシュー丼、チャーシューの脂が多すぎたという常連、16時過ぎは3人待ち、値上げ、Right Straight1,050円、Unchained Custom+100円(にんにく、ニラキムチ、ハバネロ)、もちもちの麺、チャーシューの赤身と脂、白ご飯、醤油ラーメン専門店、メンマ・チャーシュー・バター・半熟卵・にんにくのトッピング、奥深いスープ、歯ごたえのある細麺、メニューはRight Straight・Razor Punch・Heavy・Left Hook・Naniwa Joe・Takai da Cross、濃口と淡口の醤油のブレンド、塩辛くないまろやかな醤油、厚く柔らかいチャーシュー、チャーシュー入り1,300円、昼11時〜17時半の営業、ご飯200円でスープご飯に。',
      confidence: 'medium', sources: [TB, R + 'B537201699/', R + 'B490937284/', R + 'B486166257/', R + 'B528083042/', R + 'B537648266/', R + 'B538145863/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Chewy noodles with a nice bite; described as medium-thick by one diner and thin by another (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Right Straight, ¥1,050 (October 2026).',
      chashu: 'Thick and tender, lean and fat balanced; too fatty for one regular (September–October 2026).',
      notable_toppings: ['Unchained Custom (garlic, chive kimchi, habanero)', 'butter', 'menma', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; broth base not described.' },
      pantheon: 'Nipponbashi\'s Ramen 100 shoyu house: the Right Straight, dark and light soy in one mellow punch.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B528083042/', '"The depth of the broth here is remarkable."'],
        oiliness: [R + 'B537648266/', '"The flavor is surprisingly refreshing" — placed low.'],
        clarity: [R + 'B537648266/', 'Refreshing soy broth — placed high.'],
        tare_strength: [R + 'B537201699/', '"The rich and mellow flavor of soy sauce" — placed high.'],
        noodle_firmness: [R + 'B528083042/', '"The thin noodles that have a nice bite to them."'],
        aroma_punch: [R + 'B537648266/', '"Sweet, bitter, sour, and aromatic blend" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537201699/', R + 'B528083042/', R + 'B537648266/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and two tables; menu names in English-style wordplay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋4-12-1 旭日旅行ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋四丁目12番1号 (go) 15m; OSM 友愛亭 node/6349122186 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B490937284/', R + 'B537648266/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Right Straight', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'right_straight'),
      it('', '', 'Right Straight with chashu', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'right_straight_chashu'),
      it('', '', 'Unchained Custom', '+¥100', 'Toppings', 'no', 'no', 'Garlic, chive kimchi, habanero; October 2026.', 'unchained'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'July–October 2026.', 'chashu_don'),
      it('', '', 'Rice', '¥200', 'Rice', 'no', 'vegan', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '醤油ラーメン専門店・パンチの名前の一杯: Right Straight1,050円(濃口と淡口の醤油のブレンド)、Razor Punch、Heavy、Left Hook、Naniwa Joe、Takai da Cross・Unchained Custom+100円: にんにく、ニラキムチ、ハバネロ・チャーシュー入り1,300円・トッピング: メンマ、バター、半熟卵、にんにく・チャーシュー丼とミニ丼・スープに入れるご飯200円・カウンター7席、4人テーブル2卓',
    neighborhood: '浪速区日本橋4-12-1 旭日旅行ビル 1F。恵美須町駅1B出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。スープのベースは不明、チャーシュー。',
    notes: '[ラーメン・日本橋の昼だけの百名店の醤油] 恵美須町近くの醤油ラーメン専門店で、2014年開店、2023年から2025年まで食べログのラーメン OSAKA 百名店に選出。6種の一杯はボクサーのパンチの名前。定番のRight Straight(1,050円)は濃口と淡口の醤油を合わせた、まろやかで塩辛さのないスープで、常連が延々飲めるという奥深さ、歯ごたえのある麺。Unchained Custom(+100円)のにんにく、ニラキムチ、ハバネロでパンチを足すか、メンマ、バター、半熟卵をのせて。チャーシューは厚く柔らかいが、最近は脂が多すぎたという常連も。締めはご飯(200円)をスープに。昼は行列。営業は11時〜17時半のみ、月曜定休。',
  });
}

// ================================================================ 麺や拓
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27042868/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_menya_taku_kitahorie', name: '麺や拓 (Menya Taku)', category: 'OMNI',
    lat: 34.673022, lng: 135.490225, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork-bone and dashi broth; bonito flakes; chashu.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:00–15:00 and 18:00–22:00; closed Wednesday (Tabelog). Ticket machine outside (September–October 2026). No credit cards (Tabelog). Parking discount tickets (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 3-5-2 — 5 min from Nishi-Ohashi or Nishi-Nagahori Stn',
    cuisine: 'Wafu tori-ton ramen ¥1,000: chicken and pork-bone broth finished with Japanese dashi, soy base · extra meat ¥1,250 · thick, lightly torched chashu, half egg, green onion, shredded chili, nori with bonito flakes · thin straight noodles · tori-ton tsukemen on thick wheaty noodles · mazesoba · chashu rice bowl · black shichimi · 12 counter seats',
    website: null, gmaps: gm('麺や拓 北堀江'), menu_url: null,
    notes: "[Ramen · Kitahorie's Ramen 100 wafu tori-ton] A 12-seat counter in Kitahorie, open since 2009 and picked for Tabelog's Ramen OSAKA 100 in 2023, 2024 and 2025 (tenth in 2025, by one account). The signature wafu tori-ton (¥1,000) is a slightly thick blend of chicken and pork bone finished with Japanese dashi on a soy base: rich yet light, with bonito aroma. Thin straight noodles carry a fragrant wheat flavor. On top: thick chashu torched for smokiness, a half egg, green onion, shredded chili and nori heaped with bonito flakes, which scatter if you blow on the noodles. The tori-ton tsukemen comes on thick, wheaty noodles, and there's mazesoba. Buy a ticket outside. It fills fast around noon. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2009 (Tabelog)', background: 'Ramen and tsukemen shop (Tabelog, staff-maintained); Tabelog Ramen OSAKA 100 2023, 2024 and 2025.', philosophy: null, specialty: 'Wafu tori-ton ramen.',
      anecdotes: [
        { text: '"The broth seemed to be a blend of chicken and pork bone, finished with a Japanese-style dashi. It was slightly thick and rich yet still light, with a deep flavor that made it hard to stop using my spoon." — September 2026, wafu tori-ton with extra meat ¥1,250.', source: R + 'B535857475/' },
        { text: '"The dipping sauce was incredibly rich, packed with the concentrated flavors of chicken and pork… The noodles were thick and had a strong wheat aroma." — October 2026, tori-ton tsukemen.', source: R + 'B538057416/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺や拓、大阪市西区北堀江3-5-2、西大橋駅から南西へ徒歩5分、西長堀駅6番出口から5分、月・火・木〜日11:00〜15:00・18:00〜22:00、水曜休み、カード不可、カウンター12席、禁煙、駐車券あり、2009年7月7日開店、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2026年9〜10月): 百名店2025で10位、日曜昼前、店外の券売機、すぐ満席、和風鶏豚(肉増し)1,250円、チャーシュー・卵・ねぎ・糸唐辛子・海苔・鰹節、鶏と豚骨に和風だし、ややとろみ、細ストレート麺、炙ったような厚いチャーシュー、息を吹くと鰹節が飛ぶ、和風鶏豚1,000円、明るいスタッフ、鰹節の香り、中太ストレート麺という声、半熟卵、黒七味、鶏豚つけ麺、香りのよい太麺、まぜそば、チャーシュー丼。',
      confidence: 'medium', sources: [TB, R + 'B535857475/', R + 'B538057416/', R + 'B535937529/', R + 'B536852017/', R + 'B537202671/', R + 'B87059241/'] },
    ramen: {
      broth_base: ['chicken', 'tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles with a fragrant wheat flavor in the ramen (September 2026; medium-thick to one diner); thick noodles in the tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Wafu tori-ton ramen, ¥1,000; extra meat ¥1,250 (September–October 2026).',
      chashu: 'Thick, lightly torched for smokiness (September 2026).',
      notable_toppings: ['bonito flakes', 'shredded chili', 'nori', 'half egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork-bone broth.' },
      pantheon: 'Kitahorie\'s Ramen 100 counter: a chicken-pork broth finished with dashi and crowned with bonito.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535857475/', '"Slightly thick and rich yet still light."'],
        oiliness: [R + 'B535937529/', '"Rich yet not overwhelming" — mid-scale.'],
        clarity: [R + 'B535857475/', '"Slightly thick" — placed low.'],
        tare_strength: [R + 'B536852017/', '"Perfectly balanced with a savory soy sauce base" — mid-scale.'],
        noodle_firmness: [R + 'B536852017/', '"A firm, bouncy texture."'],
        aroma_punch: [R + 'B535937529/', '"The aroma of katsuobushi is delightful!" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B535857475/', R + 'B536852017/', R + 'B535937529/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; 12-seat counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江3-5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江三丁目5番2号 (go) 6m; OSM 麺や拓 node/10566145161 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535857475/', R + 'B536852017/'],
    price_note: 'Prices from September–October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Wafu tori-ton ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'wafu_toriton'),
      it('', '', 'Wafu tori-ton ramen, extra meat', '¥1,250', 'Ramen', 'no', 'no', 'September 2026.', 'wafu_toriton_niku'),
      it('', '', 'Tori-ton tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'toriton_tsukemen'),
      it('', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '和風鶏豚ラーメン1,000円: 鶏と豚骨のスープに和風だし、醤油ベース・肉増し1,250円・炙った厚いチャーシュー、半熟卵、ねぎ、糸唐辛子、鰹節をのせた海苔・細ストレート麺・小麦の香る太麺の鶏豚つけ麺・まぜそば・チャーシュー丼・黒七味・カウンター12席',
    neighborhood: '西区北堀江3-5-2。西大橋駅・西長堀駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚骨と和風だしのスープ、鰹節、チャーシュー。',
    notes: '[ラーメン・北堀江の百名店の和風鶏豚] 北堀江のカウンター12席の店で、2009年開店、2023、2024、2025年と食べログのラーメン OSAKA 百名店に選出(2025年は10位という声も)。看板の和風鶏豚(1,000円)は鶏と豚骨を合わせ、和風だしで仕上げた醤油ベースのややとろみのあるスープで、濃厚なのに軽く、鰹節が香る。細ストレート麺は小麦の香りがよい。炙って香ばしい厚いチャーシュー、半熟卵、ねぎ、糸唐辛子、鰹節をたっぷりのせた海苔がのり、麺を吹くと鰹節が飛ぶので注意。鶏豚つけ麺は小麦の香る太麺で、まぜそばも。食券は店外で。昼前後はすぐ満席に。水曜定休。',
  });
}

// ================================================================ フラン軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27118156/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://silver-grape.com/';
  put({
    id: 'osaka_furan_ken_honmachi', name: 'フラン軒 (Fran Ken)', category: 'OMNI',
    lat: 34.680208, lng: 135.501334, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; fried rice and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soy-sauce broth with chashu; niboshi vinegar.',
    hours_raw: 'Daily 11:00–22:30 (food L.O. 22:30); closed 30 December–3 January (Tabelog). Ticket machine in front (October 2026). Cards, transit IC and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitakyuhojimachi 3-5-3 — 5 min from Honmachi Stn',
    cuisine: 'Chan-kei chuka soba ¥800 · generous soy broth, flat noodles, tender chashu, fine menma, green onion · ajitama ¥150 · rice set ¥150 · zaru-style cold chuka ¥900 with niboshi vinegar · tsukemen · fried rice · grilled kara-age set · 9 counter seats, 5 tables',
    website: OWN, gmaps: gm('フラン軒 本町'), menu_url: null,
    notes: "[Ramen · Tokyo-style chan-kei chuka soba in Honmachi] A rare Osaka take on Tokyo's chan-kei chuka soba, five minutes from Honmachi, open since 2020 in a clean, stylish room; the operator site is the same as Tori Soba Zagin's. The chuka soba (¥800) comes with a generous pour of traditional soy broth over flat noodles, tender chashu, finely cut menma and crisp green onion; soak a ¥150 rice in it. One regular wished the noodles were chewier. The zaru-style cold chuka (¥900) dips straight, slippery noodles into a soy broth, brightened with the niboshi vinegar on the table. Tsukemen, fluffy, strongly seasoned fried rice and a grilled kara-age set fill out the menu. Lunch lines can move slowly. Open daily to 22:30.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 July 2020 (Tabelog)', background: 'Chan-kei chuka soba shop (Tabelog, staff-maintained); operator site silver-grape.com, shared with Tori Soba Zagin.', philosophy: null, specialty: 'Chan-kei chuka soba.',
      anecdotes: [
        { text: '"This is a type of ramen known as \'chan-kei\' that has been gaining popularity mainly in Tokyo… What first caught my eye was the soy sauce broth generously poured into the bowl, along with a hearty serving of chashu." — October 2026.', source: R + 'B538120993/' },
        { text: '"The noodles were flat, not too firm, and served lukewarm, but they were delicious on their own or with a splash of the niboshi vinegar from the table." — October 2026, cold chuka ¥900.', source: R + 'B476393107/' },
      ],
      japanese_sources_summary: '運営サイト silver-grape.com。食べログ(店舗会員): フラン軒、大阪市中央区北久宝寺町3-5-3、本町駅から304m、毎日11:00〜22:30(料理L.O.22:30)、12月30日〜1月3日休み、カード・交通系IC・PayPay可、29席(カウンター9、テーブル5)、2020年7月5日開店。口コミ(2026年6〜10月): チャーハンの甘み、11時開店で正午には満席、大阪では珍しい中華そば、薄切りのチャーシューと細切りのメンマ、店前の券売機、冷やし中華そば900円、白ねぎ、平打ち麺、卓上の煮干し酢、ちゃん系ラーメン、清潔でおしゃれな店内、中華そば800円、味玉150円、ライスセット150円、麺にもう少しこしが欲しいという声、つけ麺、ざる中華、ストレート麺、つけだれの酢、店員が親切、伝統的な醤油味、チャーシューはたっぷりで柔らかい、焼き唐揚げ定食、平日12時半に6人待ちで20分以上、たっぷりの醤油スープ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B538120993/', R + 'B476393107/', R + 'B437915678/', R + 'B521692089/', R + 'B537654679/', R + 'B537944435/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'flat', hydration: null, handmade: false, notes: 'Flat noodles; one regular wished for more chewiness (October 2026); straight noodles in the cold chuka.' },
      regional_style: ['Tokyo chuka soba ("chan-kei")'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Chuka soba, ¥800 (October 2026).',
      chashu: 'Tender and generous to one diner, thin-sliced to another (October 2026).',
      notable_toppings: ['fine menma', 'green onion', 'niboshi vinegar (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; broth base not described.' },
      pantheon: 'Honmachi\'s chan-kei: a generous soy broth over flat noodles, Tokyo style in Osaka.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537944435/', '"A traditional soy sauce flavor" — placed low.'],
        oiliness: [R + 'B537944435/', 'Traditional soy broth — placed low.'],
        clarity: [R + 'B538120993/', '"The soy sauce broth generously poured" — placed high.'],
        tare_strength: [R + 'B476393107/', '"The dipping sauce felt a bit salty at first" — placed high.'],
        noodle_firmness: [R + 'B521692089/', '"They could use a bit more chewiness and bounce."'],
        aroma_punch: [R + 'B537944435/', 'Traditional soy flavor — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B538120993/', R + 'B521692089/', R + 'B476393107/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; kind staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北久宝寺町3-5-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北久宝寺町三丁目5番3号 (go) 10m; OSM 中華そば フラン軒 node/11475924661 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521692089/', R + 'B476393107/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥800', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_soba'),
      it('', '', 'Ajitama', '¥150', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Rice set', '¥150', 'Rice', 'no', 'vegan', 'October 2026.', 'rice'),
      it('', '', 'Cold chuka (zaru style)', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'hiyashi'),
      it('', '', 'Grilled kara-age set', '', 'Sets', 'no', 'no', 'October 2026.', 'karaage_set'),
    ] }, {
    cuisine: 'ちゃん系の中華そば800円・たっぷりの醤油スープ、平打ち麺、柔らかいチャーシュー、細切りのメンマ、ねぎ・味玉150円・ライスセット150円・煮干し酢で食べるざる風の冷やし中華900円・つけ麺・チャーハン・焼き唐揚げ定食・カウンター9席、テーブル5卓',
    neighborhood: '中央区北久宝寺町3-5-3。本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーハンと唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー入りの醤油スープ、煮干し酢。',
    notes: '[ラーメン・本町の東京風ちゃん系中華そば] 東京のちゃん系中華そばを大阪で出す珍しい店で、本町から5分、2020年開店、清潔でおしゃれな店内。運営サイトは鶏Soba 座銀と同じ。中華そば(800円)はたっぷりの伝統的な醤油スープに平打ち麺、柔らかいチャーシュー、細切りのメンマ、しゃきっとしたねぎ。150円のご飯をスープに浸して。麺にもう少しこしが欲しいという常連も。ざる風の冷やし中華(900円)は、つるつるのストレート麺を醤油のつけだれに、卓上の煮干し酢でさっぱりと。つけ麺、ふんわりと味の濃いチャーハン、焼き唐揚げ定食も。昼の行列は進みが遅いことも。毎日22時半まで。',
  });
}

// ================================================================ 麺や佑
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27090650/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '15:00'], ['17:00', '21:30']), SU = day(['10:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_menya_yuu_honmachi', name: '麺や佑 (Menya Yuu)', category: 'OMNI',
    lat: 34.679565, lng: 135.498373, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based seasoning; takana rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, fish and pork broth; chashu.',
    hours_raw: 'Mon–Sat 10:00–15:00 and 17:00–21:30; Sun 10:00–15:00 and 17:00–21:00 (last entry at closing); closed 13–15 August and 31 December–3 January (Tabelog). Buy a ticket inside, then wait (October 2026). PayPay and Rakuten Pay accepted; no cards or e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamikyuhojimachi 4-5-15, New Life Midosuji Honmachi 101 — 5 min from Honmachi Stn',
    cuisine: 'Additive-free chicken, fish and pork ramen with thick straight noodles, topped with bonito flakes · chicken, fish and pork chashu ramen · tsukemen on thick curly noodles, regular or 500 g, with niboshi aroma · chicken paitan tsukemen with black vinegar · mazesoba · takana rice ¥90 · 11 counter seats',
    website: null, gmaps: gm('麺や佑 本町'), menu_url: null,
    notes: "[Ramen · additive-free tori-gyo-ton ramen and tsukemen in Honmachi] An 11-seat counter around an open kitchen near Honmachi, open since 2016 and busy with a line at lunch. Signed celebrity cards cover the walls. The house broth blends chicken, fish and pork without additives into a rich, slightly frothy soup where the fish stays in the background, now topped with bonito flakes. The ramen comes with thick straight noodles, and the chashu version piles on tender pork and green onion. Tsukemen is just as popular: thick curly noodles, regular or a hefty 500 g, with a fragrant niboshi dip. There's also a chicken paitan tsukemen sharpened with black vinegar, plus mazesoba. Add takana rice for ¥90. One diner found it decent but not distinctive. Buy a ticket inside, then wait.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 March 2016 (Tabelog)', background: 'Additive-free ramen and tsukemen shop (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Chicken, fish and pork ramen; tsukemen.',
      anecdotes: [
        { text: '"It was as rich and satisfying as ever, with a depth of flavor that made it hard to believe it was made without additives. The thick, straight noodles paired perfectly with the rich broth." — October 2026, chicken-fish-pork ramen with takana rice ¥90.', source: R + 'B490605535/' },
        { text: '"The noodles had a firm texture that paired perfectly with the rich chicken paitan dipping sauce. The sauce was dense yet had a nice tang from the black vinegar." — October 2026, chicken paitan tsukemen.', source: R + 'B537271616/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺や佑、大阪市中央区南久宝寺町4-5-15 ニューライフ御堂筋本町 101、本町駅から徒歩5分、心斎橋駅から8分、月〜土10:00〜15:00・17:00〜21:30、日10:00〜15:00・17:00〜21:00(閉店時刻までに入店)、8月13〜15日と12月31日〜1月3日休み、PayPay・楽天ペイ可、カード・電子マネー不可、カウンター11席、2016年3月3日開店。口コミ(2026年2〜10月): 平日12時半に10人待ち、券売機、つけ麺は並か500g、鶏魚豚ラーメンと高菜ご飯、鰹節がのるようになった、無添加とは思えない深い味、太ストレート麺、高菜ご飯90円、替え玉はなくなったかも、煮干しの香るつけ麺、重くない、ラーメンとつけ麺が同じくらい人気、店内で食券を買って待つ、まあまあという声、太ちぢれ麺の鶏白湯つけ麺、黒酢の酸味、スープ割り、鶏魚豚チャーシュー麺、厨房を囲むカウンター、少し泡立つスープ、細麺という声、魚はほのか、ねぎたっぷり、活気のあるスタッフ、有名人のサイン、関東風の味という声。',
      confidence: 'medium', sources: [TB, R + 'B490605535/', R + 'B537271616/', R + 'B536994746/', R + 'B537057181/', R + 'B537328711/', R + 'B537776812/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai', 'tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick straight noodles in the ramen (October 2026; thin to another diner); thick curly noodles in the tsukemen.' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'tori_paitan', 'mazesoba_aburasoba'],
      signature_bowl: 'Chicken, fish and pork ramen (February–October 2026); tsukemen.',
      chashu: 'Tender pork on the chashu ramen (October 2026).',
      notable_toppings: ['bonito flakes', 'green onion', 'takana rice (side)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken, fish and pork broth.' },
      pantheon: 'Honmachi\'s additive-free tori-gyo-ton: a frothy triple broth over thick noodles, with ¥90 takana rice.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B490605535/', '"As rich and satisfying as ever."'],
        oiliness: [R + 'B536994746/', '"The rich flavor of the soup was surprisingly not heavy at all" — mid-scale.'],
        clarity: [R + 'B537328711/', '"The broth was slightly frothy" — placed low.'],
        tare_strength: [R + 'B537328711/', '"A perfect blend of the three flavors" — mid-scale.'],
        noodle_firmness: [R + 'B537271616/', '"The noodles had a firm texture."'],
        aroma_punch: [R + 'B536994746/', '"The aroma of the niboshi… broth was incredibly fragrant" (tsukemen) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B490605535/', R + 'B537271616/', R + 'B537328711/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine inside; lively staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南久宝寺町4-5-15 ニューライフ御堂筋本町 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南久宝寺町四丁目5番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B490605535/', R + 'B537328711/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken, fish and pork ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'torigyoton'),
      it('', '', 'Chicken, fish and pork chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'torigyoton_chashu'),
      it('', '', 'Tsukemen (regular or 500 g)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Chicken paitan tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tori_paitan_tsukemen'),
      it('', '', 'Takana rice', '¥90', 'Rice', 'no', 'ask', 'October 2026.', 'takana_rice'),
    ] }, {
    cuisine: '無添加の鶏魚豚ラーメン、太ストレート麺に鰹節・鶏魚豚チャーシュー麺・太ちぢれ麺のつけ麺、並か500g、煮干しの香り・黒酢の効いた鶏白湯つけ麺・まぜそば・高菜ご飯90円・カウンター11席',
    neighborhood: '中央区南久宝寺町4-5-15 ニューライフ御堂筋本町 101。本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースの味付け、高菜ご飯。',
    vegan_detail: 'ヴィーガンではありません。鶏、魚、豚のスープ、チャーシュー。',
    notes: '[ラーメン・本町の無添加の鶏魚豚ラーメンとつけ麺] 本町近くの、厨房を囲むカウンター11席の店で、2016年開店、昼は行列。壁には有名人のサインがずらり。看板のスープは鶏、魚、豚を無添加で合わせた、少し泡立つ濃厚な一杯で、魚は控えめに後ろで効き、今は鰹節がのる。ラーメンは太ストレート麺で、チャーシュー麺は柔らかい豚肉とねぎがたっぷり。つけ麺も同じくらい人気で、太ちぢれ麺は並かたっぷり500g、煮干しの香るつけ汁。黒酢で引き締めた鶏白湯つけ麺、まぜそばも。高菜ご飯は90円。まあまあで個性に欠けるという声も。店内で食券を買ってから待つ。',
  });
}

save();
