// Osaka sweep (2-mile circle around Dotonbori), batch 126 — ramen phase (all OMNI).
//   + 味噌ラーメン越 (rich miso ramen on thick curly noodles, free large; opened February 2026; Edobori)
//   + イワシトルネード (weekly-changing ramen, cold clam and tororo bowls with mini takikomi rice; bar by night; Kitahama B1F) — mom_and_pop
//   + ラーメン フクロウ (emulsified Jiro-style tonkotsu, toppings chosen at the ticket panel; cash only; Tsuruhashi)
//   + まんかい 天満橋店 (Hakata tonkotsu and tomato tonkotsu "Tomaton", free takana; Tenmabashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 126);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 味噌ラーメン越
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27154741/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '21:30']);
  put({
    id: 'osaka_miso_ramen_etsu_edobori', name: '味噌ラーメン越 (Miso Ramen Etsu)', category: 'OMNI',
    lat: 34.689616, lng: 135.493184, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; chashu; seasoned egg.',
    hours_raw: 'Mon–Fri 11:00–15:00 (last order 14:30) and 18:00–21:30; Sat 11:00–15:00; closed Sun and public holidays (Tabelog). Ticket machine takes cash or PayPay (September 2026). Cards and QR (incl. Alipay, WeChat Pay) accepted; no e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Edobori 1-23-31 (Nishi-ku) — 4 min from Higobashi Stn',
    cuisine: 'Miso ramen · miso ramen: rich, slightly sweet miso soup with a thin layer of oil, medium-thick curly noodles, thick chashu; large size free · ajitama miso ramen ¥1,150 · tamago-kake gohan · rice · 8 counter seats on 1F, tables and 4 counter seats on 2F',
    website: null, gmaps: gm('味噌ラーメン越'), menu_url: null,
    notes: "[Ramen · rich miso ramen on thick curly noodles, Edobori] A two-floor miso ramen shop four minutes from Higobashi, open since February 2026, in an area where one diner calls proper miso ramen rare. The miso soup is rich and a little sweet under a thin layer of oil, clinging to medium-thick curly noodles that are firm and chewy, with thick, meaty chashu. The ajitama miso ramen (¥1,150) adds a soft, well-seasoned egg. A large size costs nothing extra, and there's tamago-kake gohan. One diner found a link to Miso Noodle Koji of the Tsukemen Ide brand; another got a lukewarm bowl. Ticket machine (cash or PayPay).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened February 2026 (October 2026 review); said by one diner to be related to Miso Noodle Koji of the Tsukemen Ide brand (August 2026).', background: 'Miso ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Miso ramen.',
      anecdotes: [
        { text: '"I was immediately impressed by the broth—rich and slightly sweet with a thin layer of oil. The medium-thick curly noodles had a great chewiness and were very satisfying. The chashu was perfectly thick…" — September 2026, miso ramen, large free.', source: R + 'B534901211/' },
        { text: '"The broth is rich and flavorful, and the medium-thick noodles are firm and well-soaked with taste… the ajitama (flavored egg) is just the way I like it—soft-boiled and tasty!" — October 2026, ajitama miso ramen.', source: R + 'B536949100/' },
      ],
      japanese_sources_summary: '食べログ: 味噌ラーメン越、大阪市西区江戸堀1-23-31、肥後橋駅から徒歩4分、月〜金 11:00〜15:00 (L.O. 14:30)・18:00〜21:30、土 11:00〜15:00、日・祝休み、カード・QR (Alipay、WeChat Pay を含む) 可、電子マネー不可、18席 (1階カウンター8、2階テーブルとカウンター4)。口コミ(2026年8〜10月): この辺りでは珍しい本格的な味噌ラーメン、大盛り無料、券売機は現金と PayPay、濃厚でやや甘い味噌スープと薄い油の層、中太の縮れ麺のもちもち感、厚いチャーシュー、味玉味噌ラーメン1,150円、半熟の味玉、卵かけご飯、2026年2月開店、Tsukemen Ide ブランドの Miso Noodle Koji と関係があるという声、ぬるくて普通だったという声、清潔な店内。',
      confidence: 'medium', sources: [TB, R + 'B534901211/', R + 'B535408463/', R + 'B535427063/', R + 'B535812306/', R + 'B536949100/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly noodles, firm and chewy (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ajitama miso ramen, ¥1,150 (September 2026).',
      chashu: 'Thick, chewy, meaty chashu (2026).',
      notable_toppings: ['seasoned egg', 'free large size', 'tamago-kake gohan'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Edobori\'s rich, slightly sweet miso ramen on thick curly noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535812306/', '"The rich miso broth perfectly clings to the thick noodles" — placed high.'],
        oiliness: [R + 'B534901211/', '"Rich and slightly sweet with a thin layer of oil" — mid-scale.'],
        clarity: [R + 'B535812306/', 'A "rich miso broth" — placed low.'],
        tare_strength: [R + 'B536949100/', '"The broth is rich and flavorful" — placed high.'],
        noodle_firmness: [R + 'B536949100/', '"The medium-thick noodles are firm" — placed high.'],
        aroma_punch: [R + 'B535427063/', '"The flavor was just okay" (one diner); others call it rich — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534901211/', R + 'B535812306/', R + 'B536949100/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; friendly send-off (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-23-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目23番31号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534901211/', R + 'B535427063/', R + 'B536949100/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Miso ramen (large free)', '', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Ajitama miso ramen', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'ajitama_miso'),
      it('', '', 'Tamago-kake gohan', '', 'Rice', 'ask', 'no', 'October 2026.', 'tkg'),
      it('', '', 'Rice', '', 'Rice', 'ask', 'ask', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '味噌ラーメン・味噌ラーメン: 濃厚でやや甘い味噌スープに薄い油の層、中太の縮れ麺、厚いチャーシュー、大盛り無料・味玉味噌ラーメン1,150円・卵かけご飯・ご飯・1階カウンター8席、2階はテーブルとカウンター4席',
    neighborhood: '西区江戸堀1-23-31。肥後橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー、味玉。',
    notes: '[ラーメン・江戸堀、太い縮れ麺の濃厚味噌] 肥後橋から4分、2フロアの味噌ラーメンの店で、2026年2月開店、この辺りでは本格的な味噌ラーメンは珍しいという声も。味噌スープは濃厚でやや甘く、薄く油が張り、硬めでもちもちの中太縮れ麺によくからみ、厚く肉々しいチャーシュー。味玉味噌ラーメン(1,150円)は半熟でしっかり味の染みた卵入り。大盛りは無料、卵かけご飯も。Tsukemen Ide ブランドの Miso Noodle Koji と関係があると調べた人がいる一方、ぬるい一杯だったという声も。食券は券売機で (現金か PayPay)。',
  });
}

// ================================================================ イワシトルネード
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27152142/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30']; const WD = day(L, ['19:00', '23:00']);
  put({
    id: 'osaka_iwashi_tornado_kitahama', name: 'イワシトルネード (Iwashi Tornado)', category: 'OMNI',
    lat: 34.689764, lng: 135.510003, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare; seasoned rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam and seafood broths; shrimp; chicken and gizzard toppings; fish powder.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last order 14:00) and 19:00–23:00; Sun 11:30–14:30 (last order 14:00); hours may change (Tabelog). Ramen at lunch; the space runs as the bar BULLSEYE at night (October 2026). Menu changes weekly; check the shop Instagram (August 2026). Order verbally; no ticket machine. PayPay only; no cards or e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(L) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitahama-Higashi 5-4, Koshin Kitahama B1F — 353 m from Kitahama Stn',
    cuisine: 'Weekly-changing ramen · cold or warm seafood-broth clear shio or shoyu ramen ¥1,200 with mini takikomi rice: slightly wavy medium-thick noodles, chicken breast, grilled pork, sliced seaweed, chopped onion, radish sprouts · chilled clam broth ramen · chilled tororo ramen ¥1,100: flat medium-thick noodles, grated yam, chicken breast chashu, grilled gizzards, red onion, kaiware · chilled ume-kombu ramen with gizzard confit and chicken thigh, fish powder ¥1,100 · shrimp shio (miso) paitan ramen ¥1,100–1,200 with a hint of curry · curry-flavored chicken paitan ramen ¥1,100 · Heartland beer ¥700 · whiskey bar counter',
    website: null, gmaps: gm('イワシトルネード'), menu_url: null,
    notes: "[Ramen · weekly-changing ramen in a Kitahama basement bar] A hidden basement counter near Kitahama, open since September 2025: by day it serves ramen, by night it is the whiskey bar BULLSEYE. The menu changes every week (check Instagram) and leans on seafood broths and spice. Past bowls include a chilled seafood-broth clear shio with grilled pork and chicken breast, a chilled clam ramen whose deep, clear broth one diner found astonishing, a chilled tororo ramen with grilled gizzards, and a shrimp paitan with a hint of curry. Many come with a mini takikomi rice; pour the leftover broth over it. One diner disliked the seasoning powder on a cold bowl. One person ran it on an August visit, and bowls took 10–15 minutes. PayPay only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened September 2025 (October 2026 review; first anniversary September 2026).', background: 'Ramen at lunch in the basement bar BULLSEYE (October 2026 review).', philosophy: null, specialty: 'Weekly-changing ramen; chilled seafood-broth bowls.',
      anecdotes: [
        { text: '"The broth had a deep, rich, and transparent umami flavor that was just incredible… Adding something like chive and ginger oil made it even better!!" — August 2026, chilled clam broth ramen.', source: R + 'B534080977/' },
        { text: '"The restaurant operates as a bar called \'BULLSEYE\' and serves lunch and dinner. Upon entering, I was greeted by a counter lined with whiskey bottles…" — October 2026, chilled tororo ramen ¥1,100.', source: R + 'B537558727/' },
      ],
      japanese_sources_summary: '食べログ: イワシトルネード、大阪市中央区北浜東5-4 コーシン北浜 B1F、北浜駅から353m、月〜土 11:30〜14:30 (L.O. 14:00)・19:00〜23:00、日 11:30〜14:30、カード・電子マネー不可、QRは PayPay 可、子ども歓迎。口コミ(2026年1〜10月): オフィス街の隠れた地下の店、昼はラーメン、夜はバー BULLSEYE、ウイスキーの並ぶカウンター、メニューは毎週替わりで Instagram で確認、口頭で注文、券売機なし、貝出汁の塩ラーメンと炊き込みご飯1,200円、残りのスープをご飯にかけてお茶漬け風に、カレー風味の鶏白湯ラーメン1,100円、Heartland ビール700円、冷やしの魚介出汁の清湯塩 (冷たいか温かいか、醤油も)、やや縮れた中太麺、鶏むね、焼いた豚、刻み海苔、玉ねぎ、かいわれ、冷やし貝出汁ラーメンの深く澄んだ旨み、ニラと生姜の油、冷やしとろろラーメン1,100円 (平打ちの中太麺、とろろ、鶏むね、焼いた砂肝、赤玉ねぎ、かいわれ、仕上げの粉が苦手という声)、梅昆布の冷やし (砂肝のコンフィ、鶏もも、魚粉)、エビ味噌白湯ラーメン1,200円とカレーの風味、1周年の味玉サービス、一人で営業していた日、提供まで10〜15分。',
      confidence: 'medium', sources: [TB, R + 'B521653367/', R + 'B534068117/', R + 'B534080977/', R + 'B534728027/', R + 'B535359665/', R + 'B537558727/'] },
    ramen: {
      broth_base: ['shellfish', 'gyokai', 'chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Medium-thick flat or slightly wavy noodles in the cold bowls; thin noodles in the curry paitan (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'No fixed signature: the menu changes weekly; chilled seafood-broth shio and chilled tororo ramen in 2026.',
      chashu: 'Moist chicken breast, grilled pork, grilled gizzards and chicken thigh (2026).',
      notable_toppings: ['mini takikomi rice', 'grated yam (tororo)', 'grilled gizzards', 'kaiware', 'red onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood broth.' },
      pantheon: 'Kitahama\'s weekly-changing basement ramen, best for chilled seafood-broth bowls with takikomi rice.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534068117/', '"It was a light yet deeply flavorful chilled ramen" — placed low.'],
        oiliness: [R + 'B534728027/', '"The broth was light and refreshing" — placed low.'],
        clarity: [R + 'B534080977/', '"A deep, rich, and transparent umami flavor" — placed high.'],
        tare_strength: [R + 'B534068117/', '"A mild saltiness created a gentle taste" — placed low.'],
        noodle_firmness: [R + 'B534728027/', '"The flat noodles were well-chilled and firm" — placed high.'],
        aroma_punch: [R + 'B534728027/', '"The broth had a unique spice flavor" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534068117/', R + 'B534080977/', R + 'B534728027/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally at the bar counter; friendly and easy to talk to (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区北浜東5-4 コーシン北浜 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北浜東5番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521653367/', R + 'B534068117/', R + 'B537558727/'],
    price_note: 'Prices from January–October 2026 reviews; the menu changes weekly.', last_checked: TODAY, items: [
      it('', '', 'Seafood-broth clear shio or shoyu ramen, cold or warm, with mini takikomi rice', '¥1,200', 'Ramen', 'no', 'no', 'August 2026.', 'gyokai_shio'),
      it('', '', 'Chilled tororo ramen with mini takikomi rice', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'tororo'),
      it('', '', 'Shrimp shio paitan ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'ebi_paitan'),
      it('', '', 'Curry-flavored chicken paitan ramen', '¥1,100', 'Ramen', 'no', 'no', 'January 2026.', 'curry_paitan'),
      it('', '', 'Heartland beer, small bottle', '¥700', 'Drinks', 'no', 'ask', 'January 2026.', 'beer'),
    ] }, {
    cuisine: '毎週替わりのラーメン・冷たいか温かいかを選べる魚介出汁の清湯塩か醤油 1,200円、小さな炊き込みご飯付き: やや縮れた中太麺、鶏むね、焼いた豚、刻み海苔、玉ねぎ、かいわれ・冷やし貝出汁ラーメン・冷やしとろろラーメン1,100円: 平打ちの中太麺、とろろ、鶏むねのチャーシュー、焼いた砂肝、赤玉ねぎ、かいわれ・砂肝のコンフィと鶏もも、魚粉の梅昆布の冷やし1,100円・カレーの風味のエビ白湯ラーメン1,100〜1,200円・カレー風味の鶏白湯ラーメン1,100円・Heartland ビール700円・ウイスキーの並ぶバーカウンター',
    neighborhood: '中央区北浜東5-4 コーシン北浜 B1F。北浜駅から353m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩と醤油のたれ、炊き込みご飯。',
    vegan_detail: 'ヴィーガンではありません。貝と魚介の出汁、エビ、鶏と砂肝のトッピング、魚粉。',
    notes: '[ラーメン・北浜の地下バーで毎週替わるラーメン] 北浜近くの地下にある隠れた店で、2025年9月開店、昼はラーメン、夜はウイスキーバー BULLSEYE。メニューは毎週替わり (Instagram で確認)、魚介出汁とスパイスが軸。これまでの一杯は、焼いた豚と鶏むねの冷やし魚介出汁の清湯塩、深く澄んだスープに驚いたという声の冷やし貝出汁ラーメン、焼いた砂肝の冷やしとろろラーメン、カレーがほのかに香るエビ白湯など。多くは小さな炊き込みご飯付きで、残ったスープをかけて。冷やしの仕上げの粉が苦手という声も。8月は一人で営業していて、提供まで10〜15分かかった。支払いは PayPay のみ。',
  });
}

// ================================================================ ラーメン フクロウ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27114247/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_fukurou_tsuruhashi', name: 'ラーメン フクロウ (Ramen Fukurou)', category: 'OMNI',
    lat: 34.666315, lng: 135.529122, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare; seasoned back fat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: emulsified pork-bone soup; back fat; pork; quail and raw eggs.',
    hours_raw: 'Daily 11:00–14:00 and 18:00–22:00; hours may change (Tabelog). Lines at opening, often 10–20 people; queue so the entrance stays clear on a narrow street with bike traffic (2021–2026). Buy tickets and pick garlic, vegetables and fat on the touch panel; no call (2026). Cash only since 30 January 2026 (2026 reviews).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Funahashicho 15-24 (Tennoji-ku) — 181 m from Tsuruhashi Stn',
    cuisine: 'Emulsified Jiro-style ramen · Fukurou ramen: creamy, emulsified tonkotsu soup, slightly sweet and not too salty, bean sprouts and cabbage, medium-thick flat straight noodles, tender chashu; garlic, vegetables and seasoned back fat to taste · mini 150 g ¥1,000 · 200 g ¥1,100 · 250 g +¥100 · 300 g +¥150 · miso ramen ¥1,050 · soupless ramen · tsukemen · summer chilled chuka · extra chashu slice +¥200 · spicy minced meat +¥200 · quail eggs · raw egg · extra vegetables in a side bowl +¥150 · table: vinegar, fish powder, pepper, chili · 8 counter seats',
    website: null, gmaps: gm('ラーメン フクロウ'), menu_url: null,
    notes: "[Ramen · emulsified Jiro-style tonkotsu by Tsuruhashi] An eight-seat counter a few minutes from Tsuruhashi, open since 2019, which one diner with more than twenty visits calls the best Jiro-style ramen in Kansai. Unlike the usual soy-heavy Jiro bowl, the soup is a creamy, emulsified tonkotsu, slightly sweet and not too salty, so even extra back fat goes down easily. Noodles are medium-thick, flat and straight, smooth rather than chewy. Pick the noodle weight (150–300 g) and your garlic, vegetables and fat on the touch panel, so there's no call to learn; extra vegetables can water the soup down. There's also miso, soupless and tsukemen. Vinegar or fish powder from the table changes the flavor. Expect a line at opening; keep the narrow sidewalk clear. Cash only. Kept clean.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2019 (Tabelog); a second brand of Menya Fukuhara in Higashinari (2022–2026 reviews).', background: 'Jiro-style ramen counter (Tabelog; 2021–2026 reviews).', philosophy: null, specialty: 'Emulsified Jiro-style tonkotsu.',
      anecdotes: [
        { text: '"Unlike other Jiro-style ramen, this one wasn\'t overly greasy, and the emulsified broth was of high quality. The thick noodles were also quite impressive." — December 2022.', source: R + 'B440039244/' },
        { text: '"The noodles were thick and smooth without any chewiness, yet they had a nice texture… I felt like I could drink the broth to the last drop." — October 2026, 250 g, no garlic, extra vegetables and back fat.', source: R + 'B537347672/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン フクロウ、大阪市天王寺区舟橋町15-24、鶴橋から181m、毎日11:00〜14:00・18:00〜22:00、カード・電子マネー・QR不可、カウンター8席、2019年11月1日開店。口コミ(2021〜2026年): 乳化した豚骨の二郎系、やや甘く塩辛すぎない、関西一の二郎系という声、東成の麺屋 Fukuhara のセカンドブランド、ロボクープで作るスープ、中太の平打ちストレート麺はもちもちより滑らか、柔らかいチャーシュー、ミニ150g 1,000円、200g 1,100円、250g +100円、300g +150円、味噌ラーメン1,050円、汁なし、つけ麺、夏の冷やし中華、チャーシュー1枚+200円、辛い肉味噌+200円、うずら卵、生卵、野菜増しの別皿+150円、タッチパネルの券売機でトッピングを選びコールなし、2026年1月30日から現金のみ、開店時に10〜20人の行列、狭い歩道で自転車が多く入口をふさがないよう並ぶ、清潔な店内、野菜を増やすとスープが薄まるという声、スタッフによって味や提供時間にばらつきがあるという声、卓上の酢、魚粉、胡椒、唐辛子。',
      confidence: 'high', sources: [TB, R + 'B440039244/', R + 'B461485232/', R + 'B529584052/', R + 'B534430069/', R + 'B535857415/', R + 'B537347672/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: true, notes: 'Thick homemade noodles (2022 reviews); medium-thick, flat and straight, smooth rather than chewy (2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'ramen'],
      signature_bowl: 'Fukurou ramen, 200 g, ¥1,100 (October 2026).',
      chashu: 'Tender, well-marinated pork chashu, one slice standard (2026).',
      notable_toppings: ['garlic', 'bean sprouts and cabbage', 'seasoned back fat', 'quail eggs', 'spicy minced meat'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Tsuruhashi\'s creamy emulsified Jiro: rich, not greasy, not too salty.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 2, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B529584052/', '"The rich, thick broth is incredibly delicious" — top of scale.'],
        oiliness: [R + 'B440039244/', '"Wasn\'t overly greasy" for Jiro-style, with back fat to taste — placed high.'],
        clarity: [R + 'B529584052/', '"I absolutely love the creamy Jiro-style ramen" — bottom of scale.'],
        tare_strength: [R + 'B529584052/', '"It\'s mild and not overly salty" (June 2026) — placed low.'],
        noodle_firmness: [R + 'B537347672/', '"Thick and smooth without any chewiness, yet they had a nice texture" — mid-scale.'],
        aroma_punch: [R + 'B440039244/', '"Delivering a powerful garlic punch" (December 2022, with extra garlic) — placed high.'],
      },
      confidence: 'high', sources: [R + 'B440039244/', R + 'B529584052/', R + 'B537347672/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Toppings chosen on the touch panel, no call needed; good for Jiro beginners (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区舟橋町15-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区舟橋町15番24号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529584052/', R + 'B534430069/', R + 'B537347672/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fukurou ramen, mini 150 g', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'mini'),
      it('', '', 'Fukurou ramen, 200 g', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'regular'),
      it('', '', 'Noodles 250 g / 300 g', '+¥100 / +¥150', 'Ramen', 'no', 'no', 'September–October 2026.', 'size_up'),
      it('', '', 'Miso ramen', '¥1,050', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Soupless ramen', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'shirunashi'),
      it('', '', 'Extra chashu slice', '+¥200', 'Toppings', 'no', 'no', 'September 2026.', 'chashu'),
      it('', '', 'Spicy minced meat', '+¥200', 'Toppings', 'no', 'no', 'June 2026.', 'karaniku'),
      it('', '', 'Extra vegetables, side bowl', '+¥150', 'Toppings', 'ask', 'ask', 'September 2026.', 'yasai'),
    ] }, {
    cuisine: '乳化した二郎系ラーメン・フクロウラーメン: クリーミーに乳化した豚骨スープ、やや甘く塩辛すぎない、もやしとキャベツ、中太の平打ちストレート麺、柔らかいチャーシュー、にんにく・野菜・味付き背脂はお好みで・ミニ150g 1,000円・200g 1,100円・250g +100円・300g +150円・味噌ラーメン1,050円・汁なし・つけ麺・夏の冷やし中華・チャーシュー1枚+200円・辛い肉味噌+200円・うずら卵・生卵・野菜増しの別皿+150円・卓上: 酢、魚粉、胡椒、唐辛子・カウンター8席',
    neighborhood: '天王寺区舟橋町15-24。鶴橋駅から181m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、味付き背脂。',
    vegan_detail: 'ヴィーガンではありません。乳化した豚骨スープ、背脂、豚、うずら卵と生卵。',
    notes: '[ラーメン・鶴橋近く、乳化した豚骨の二郎系] 鶴橋から数分のカウンター8席の店で、2019年開店、20回以上通う人が関西一の二郎系と呼ぶ。醤油の強いよくある二郎と違い、スープはクリーミーに乳化した豚骨で、やや甘く塩辛すぎないので、背脂増しでも食べやすい。麺は中太の平打ちストレートで、もちもちより滑らか。麺量 (150〜300g) とにんにく・野菜・脂はタッチパネルで選ぶのでコールを覚えなくていいが、野菜を増やすとスープが薄まることも。味噌、汁なし、つけ麺も。卓上の酢や魚粉で味変。開店時は行列、狭い歩道をふさがないように。現金のみ。店内は清潔。',
  });
}

// ================================================================ まんかい 天満橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27086725/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ramen-mankai.com/';
  const A = day(['11:00', '23:00']); const B = day(['11:00', '16:00'], ['17:30', '23:00']); const S = day(['11:00', '22:00']);
  put({
    id: 'osaka_mankai_tenmabashi', name: 'まんかい 天満橋店 (Mankai Tenmabashi)', category: 'OMNI',
    lat: 34.688119, lng: 135.516976, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tare; spicy takana.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup with back fat; chashu; egg.',
    hours_raw: 'Mon, Wed, Sat 11:00–23:00 (last order 22:45); Thu–Fri 11:00–16:00 (last order 15:45) and 17:30–23:00 (last order 22:45); Sun and public holidays 11:00–22:00 (last order 21:45); closed Tue and 30 December–2 January (Tabelog). Ticket machine inside (October 2026). Cash only (Tabelog).',
    hours: { 0: A, 2: A, 3: B, 4: B, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Tanimachi 1-5-9 — 1 min from Tenmabashi Stn exit 4',
    cuisine: 'Hakata tonkotsu ramen · Jun Ton (pure tonkotsu): pork head bones, knuckles, backbones and back fat simmered 15 hours, clear of odor; very thin straight low-hydration noodles, firmness to order; belly and thigh chashu, wood ear; with egg ¥1,130 · Tomaton (tomato tonkotsu): pork bone with a spicy tomato sauce and garlic; with rice ¥1,250, with egg and rice ¥1,400 · shio tonkotsu · half kaedama ¥140 · free spicy takana, ground sesame, pickled ginger · 8 counter seats and a long shared table',
    website: OWN, gmaps: gm('まんかい 天満橋店'), menu_url: null,
    notes: "[Ramen · Hakata tonkotsu and tomato tonkotsu by Tenmabashi] A Hakata-style tonkotsu shop a minute from Tenmabashi exit 4, open since 2015, with a counter and one long shared table. The Jun Ton is the straight Hakata bowl: pork head bones, knuckles and back fat simmered for 15 hours into a clean, odor-free soup, on very thin, low-hydration noodles ordered firm or harder, with belly and thigh chashu. The pick of one long-time diner is the Tomaton, tonkotsu with a spicy tomato and garlic sauce that one compares to soup pasta, though two others found it ordinary. Half kaedama is ¥140. Spicy takana is free; one diner had to ask for it. Ticket machine; cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 July 2015 (Tabelog)', background: 'Hakata-style tonkotsu ramen shop, Tenmabashi branch (Tabelog; 2024–2026 reviews).', philosophy: 'Pork head bones, knuckles, backbones and back fat simmered 15 hours (October 2026 review).', specialty: 'Hakata tonkotsu; tomato tonkotsu.',
      anecdotes: [
        { text: '"The broth is made by simmering pork head bones, knuckles, backbones, and back fat for 15 hours, resulting in a clear and flavorful taste without any unpleasant odors… The noodles are extremely thin and straight with low water content…" — October 2026, Jun Ton with egg ¥1,130.', source: R + 'B517760692/' },
        { text: '"The noodles are wonderfully slippery, reminiscent of soup pasta, and the garlic-infused broth packs a punch." — September 2026, Tomaton.', source: R + 'B536262856/' },
      ],
      japanese_sources_summary: '食べログ: まんかい 天満橋店、大阪市中央区谷町1-5-9、天満橋駅4番出口から徒歩1分、月・水・土 11:00〜23:00、木・金 11:00〜16:00・17:30〜23:00、日・祝 11:00〜22:00、火休み、年末年始休み、カード・電子マネー・QR不可、17席 (カウンター8、テーブル9)、2015年7月29日開店、公式サイトあり。口コミ(2024〜2026年): 博多純系豚骨ラーメン、Jun Ton 味玉1,130円、豚の頭骨・ゲンコツ・背骨・背脂を15時間炊いた臭みのないスープ、極細ストレートの低加水麺、バリカタ、バラともものチャーシュー、きくらげ、Tomaton (トマト豚骨) ライス付き1,250円、味玉とライスで1,400円、2024年はトマトン1,050円とライス200円、辛いトマトソース、にんにく、スープパスタのよう、普通だったという声、塩豚骨、替え玉半分140円、辛子高菜食べ放題 (卓上になく頼んだ日も)、すりごま、紅しょうが、店内の券売機、大きな相席テーブル。',
      confidence: 'medium', sources: [TB, OWN, R + 'B410185557/', R + 'B517760692/', R + 'B533108247/', R + 'B535081985/', R + 'B536262856/', R + 'B536491198/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'low', handmade: false, notes: 'Very thin, straight, low-hydration Hakata noodles; firmness to order (October 2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'Jun Ton (pure tonkotsu) with egg, ¥1,130; Tomaton (tomato tonkotsu) (2026).',
      chashu: 'Pork belly and thigh chashu (October 2026).',
      notable_toppings: ['wood ear', 'free spicy takana', 'ground sesame', 'pickled ginger', 'half kaedama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Tenmabashi\'s 15-hour Hakata tonkotsu, plus the garlicky tomato Tomaton.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 5, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533108247/', '"A well-balanced tonkotsu ramen" — mid-scale.'],
        oiliness: [R + 'B517760692/', 'Back fat in the soup, "without any unpleasant odors" — mid-scale.'],
        clarity: [R + 'B517760692/', 'A pork-bone paitan; "clear" describes the taste ("a clear and flavorful taste") — placed low.'],
        tare_strength: [R + 'B535081985/', '"The broth, rich in pork flavor, was absolutely fantastic" — mid-scale.'],
        noodle_firmness: [R + 'B517760692/', '"Extremely thin and straight with low water content… a delightful firm texture," ordered very firm — top of scale.'],
        aroma_punch: [R + 'B536262856/', '"The garlic-infused broth packs a punch" (Tomaton); the Jun Ton is cleaner — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B517760692/', R + 'B533108247/', R + 'B536262856/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; noodle firmness to order (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町1-5-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町一丁目5番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B410185557/', R + 'B517760692/', R + 'B533108247/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Jun Ton (pure tonkotsu) with egg', '¥1,130', 'Ramen', 'no', 'no', 'October 2026.', 'junton'),
      it('', '', 'Tomaton (tomato tonkotsu) with rice', '¥1,250', 'Ramen', 'no', 'no', 'September 2026.', 'tomaton'),
      it('', '', 'Tomaton with egg and rice', '¥1,400', 'Ramen', 'no', 'no', 'November 2025.', 'tomaton_egg'),
      it('', '', 'Shio tonkotsu', '', 'Ramen', 'no', 'no', 'July 2026.', 'shio'),
      it('', '', 'Half kaedama', '¥140', 'Toppings', 'no', 'no', 'July 2026.', 'kaedama_half'),
    ] }, {
    cuisine: '博多豚骨ラーメン・Jun Ton (純豚骨): 豚の頭骨、ゲンコツ、背骨、背脂を15時間炊いた臭みのないスープ、極細ストレートの低加水麺は硬さを選べる、バラともものチャーシュー、きくらげ、味玉入り1,130円・Tomaton (トマト豚骨): 豚骨に辛いトマトソースとにんにく、ライス付き1,250円、味玉とライスで1,400円・塩豚骨・替え玉半分140円・辛子高菜、すりごま、紅しょうがは無料・カウンター8席と大きな相席テーブル',
    neighborhood: '中央区谷町1-5-9。天満橋駅4番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、たれ、辛子高菜。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの豚骨スープ、チャーシュー、卵。',
    notes: '[ラーメン・天満橋近く、博多豚骨とトマト豚骨] 天満橋4番出口から1分、2015年開店の博多豚骨の店で、カウンターと大きな相席テーブル。Jun Ton は王道の博多の一杯: 豚の頭骨、ゲンコツ、背脂を15時間炊いた臭みのないすっきりしたスープに、硬めかそれ以上で頼む極細の低加水麺、バラともものチャーシュー。長く通う人の一番は Tomaton で、辛いトマトとにんにくのソースを合わせた豚骨はスープパスタのようという声も、普通だったという声も二つ。替え玉半分は140円。辛子高菜は無料 (頼まないと出なかった日も)。券売機、現金のみ。火曜休み。',
  });
}

save();
