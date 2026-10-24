// Ginza Station half-mile sweep (805 m), batch 10 — ramen. Researched 2026-10-24.
//   + 貝出汁らぁ麺 しらはら (lunch ramen of a shellfish izakaya; operator not established)
//   + 鮨とラーメン うおがしや 新橋 (sushi-and-ramen franchise from Yokohama market)
//   + 麺屋NOBUNAGA 京橋店 (株式会社NOBUNAGA, 1st of 4 shops) · 横浜家系らーめん 河埜家 (owner Kōno Jōji, ex-Budōka
//     Kichijōji; opened under Mujaki Foods' company-funded "trust" scheme → not tagged mom-and-pop)
// Skipped: 風月食堂 尾和 (2026 lunch is curry and ginger pork only), 伊太そば (250-seat food-hall venue).
// Sources: uogashiya.com, ramen-nobunaga.com (menu, about), san-tatsu press release, PR TIMES (Mujaki Foods),
// Tabelog /en/ listings + dated 2026 reviews. Pins: Tabelog geo + GSI. Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ 貝出汁らぁ麺 しらはら
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13281791/'; const R = TB + 'dtlrvwlst/';
  const l = day(['11:30', '14:00']);
  put({
    id: 'tokyo_kaidashi_ramen_shirahara', name: '貝出汁らぁ麺 しらはら (Kaidashi Rāmen Shirahara)', category: 'OMNI',
    lat: 35.666304, lng: 139.759623,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. One ramen on wheat noodles, sold alone or as a set with five pieces of red-vinegar sushi served with soy sauce. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is a shellfish broth, finished by steeping a basket of bonito flakes in it, and the set adds fish sushi.',
    hours_raw: 'Mon–Sat 11:30–14:00 (lunch only); closed Sundays (Tabelog). PayPay accepted; no cards.',
    hours: { 0: l, 1: l, 2: l, 3: l, 4: l, 5: l }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 (basement per a 2026 diner) — 2 min from Shimbashi Stn',
    cuisine: 'Shellfish-broth ramen with oi-katsuo (bonito steeped at the table) · ramen and five-piece red-vinegar sushi set', cuisine_type: 'ramen',
    website: null, gmaps: gm('貝出汁らぁ麺 しらはら 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Ramen · shellfish broth, lunch only] By night this space in the Shimbashi Ekimae Building is a shellfish-and-sashimi izakaya; at lunch it turns into a ramen counter with one bowl. The soup is a shellfish (kai-dashi) broth, and each bowl comes with a little basket of bonito flakes: dip it for about ten seconds, then lift it out. Order it alone or in a ¥1,500 set with five pieces of sushi on red-vinegar rice. Diners call the soup light and refreshing but full of flavour, and the turnover is quick because there is so little to choose from.",
    chef_bio: {
      chef_name: null, roles: ['lunch service of a shellfish and sashimi izakaya (operator not established)'],
      origin: 'Shimbashi Ekimae Bldg No. 1; opening year not found',
      background: 'A June 2026 diner says the izakaya 「貝出汁 刺身専門店 しらはら」 serves shellfish and sashimi at night and becomes 「貝出汁らぁ麺 しらはら」 by day. No source names the owner or company.',
      philosophy: null,
      specialty: 'Oi-katsuo shellfish ramen; ramen with five pieces of red-vinegar sushi.',
      anecdotes: [
        { text: '"The bonito flakes in the basket are to be dissolved for just 10 seconds before being lifted out. It felt less like eating ramen and more like savoring a truly delicious broth."', source: R + 'B532537345/' },
        { text: 'A diner on a typhoon day was the only customer at 1:15 p.m. — and still could not decide whether ramen and sushi belong together.', source: R + 'B529329987/' },
      ],
      japanese_sources_summary: '食べログ: 貝出汁らぁ麺 しらはら、新橋駅前ビル1号館、月〜土11:30〜14:00、日休、カード不可・PayPay可。2026年の口コミ: 夜は「貝出汁 刺身専門店 しらはら」、昼は「貝出汁らぁ麺 しらはら」。追いかつお貝出汁らぁ麺と赤酢の寿司5貫のセット1,500円、ラーメン単品も可。鰹節のかごは約10秒浸して引き上げる。',
      confidence: 'low', sources: [TB, R + 'B529329987/', R + 'B532537345/', R + 'B531923528/', R + 'B523791176/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Two choices only — ramen, or ramen with five sushi — so ordering is easy. Quick lunch turnover; PayPay accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Ramen and sushi from one counter; the sushi is served topped with soy sauce.', source: R + 'B530933611/' }],
      soy_sauce_wheat: [{ text: 'Sushi topped with soy sauce.', source: R + 'B530933611/' }],
      vegan_cross_contact: [{ text: 'Shellfish broth with bonito flakes steeped in the bowl.', source: R + 'B532537345/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['gyokai'], broth_texture: null, tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '追いかつお貝出汁らぁ麺 (oi-katsuo shellfish ramen) with five red-vinegar sushi — ¥1,500 (June 2026).',
      chashu: null,
      notable_toppings: ['basket of bonito flakes to steep'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish and bonito broth.' },
      pantheon: 'An izakaya by night, a one-bowl lunch counter by day: shellfish broth you finish yourself with a ten-second dip of bonito flakes, and five pieces of red-vinegar sushi on the side.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B530933611/', 'A light and flavorful ramen; "refreshing yet packed with flavor" (' + R + 'B520390963/).'],
        oiliness: [R + 'B530933611/', 'A light and flavorful ramen.'],
        clarity: MID,
        tare_strength: MID,
        noodle_firmness: MID,
        aroma_punch: [R + 'B531923528/', 'Mixing in some bonito flakes halfway through really enhanced the umami.'],
      },
      confidence: 'low', sources: [R + 'B530933611/', R + 'B520390963/', R + 'B531923528/', R + 'B532537345/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 6m; same building as どさん娘 and はるちゃんラーメン, pinned separately; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [R + 'B529329987/', R + 'B531923528/', R + 'B532537345/'],
    price_note: 'Diners report only two choices: the ramen, or the ramen with five sushi (¥1,500, June 2026).', last_checked: TODAY, items: [
      it('追いかつお貝出汁らぁ麺', 'oikatsuo kaidashi raamen', 'Oi-katsuo shellfish ramen', '', 'Ramen', 'no', 'no', '', 'kaidashi_ramen'),
      it('追いかつお貝出汁らぁ麺 赤酢寿司5貫セット', 'oikatsuo kaidashi raamen akazu sushi gokan setto', 'Shellfish ramen with five red-vinegar sushi', '¥1,500', 'Set', 'no', 'no', 'June 2026.', 'ramen_sushi_set'),
    ] }, {
    cuisine: '追いかつおの貝出汁ラーメン・ラーメンと赤酢寿司5貫のセット',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館(2026年の口コミでは地下)。新橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦麺のラーメン1種類を、単品か、醤油をのせた赤酢の寿司5貫とのセットで出します。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは貝出汁に鰹節のかごを浸して仕上げ、セットには魚の寿司が付きます。',
    notes: '[ラーメン・貝出汁・昼のみ] 新橋駅前ビルの貝と刺身の居酒屋が、昼だけラーメン1種類の店になります。スープは貝出汁で、小さなかごに入った鰹節を約10秒浸して引き上げるのが流儀。単品か、赤酢のシャリの寿司5貫とのセット(1,500円)を選びます。あっさり爽やかだけど旨味がしっかりという声が多く、選択肢が少ないぶん回転も速い店です。',
  });
}

// ================================================================ 鮨とラーメン うおがしや 新橋
{
  const OWN = 'https://uogashiya.com/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13299613/'; const R = TB + 'dtlrvwlst/';
  const a = day(['07:00', '05:00']);
  put({
    id: 'tokyo_uogashiya_shimbashi', name: '鮨とラーメン うおがしや 新橋 (Sushi to Rāmen Uogashiya, Shimbashi)', category: 'OMNI',
    lat: 35.667681, lng: 139.758254,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The ramen is medium-thick curly wheat noodles in a salty bonito broth. The sushi is nigiri on red-vinegar rice; no source says whether it is served with soy sauce or what that is made from. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The ramen is a bonito (katsuo) broth finished with more bonito flakes, topped with chashu, and the other half of the menu is fish sushi.',
    hours_raw: 'Daily 07:00–05:00 (next morning); closed 1–3 January (Tabelog). Cards, e-money and QR accepted. Ticket machine outside.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi 1-chōme, street level — 1–2 min from Shimbashi Stn',
    cuisine: 'Sushi and ramen · oi-katsuo bonito ramen · nigiri on red-vinegar rice, fish from Toyosu and Yokohama markets', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('鮨とラーメン うおがしや 新橋'), menu_url: null,
    notes: "[Ramen + sushi · nearly 24 hours] The Shimbashi branch, opened August 2024, of a sushi-and-ramen chain whose head shop is in Yokohama's central wholesale market. It now has shops in Shibuya, Noge, Tsuruyachō and Minato Mirai, and is selling franchises. The fish comes straight from Toyosu and the Yokohama market, and the nigiri is on red-vinegar rice. The ramen is 追いかつお: a salty bonito broth with medium-thick curly noodles, two slices of chashu, nori, menma, radish sprouts and negi. A tea strainer of bonito flakes, shaved in the shop, is stirred in for about ten seconds. The ramen-and-five-nigiri set was ¥1,500 in October 2026, and the ramen alone ¥890. Ten counter seats; buy a ticket outside; open from 7 a.m. to 5 a.m.",
    chef_bio: {
      chef_name: null, roles: ['sushi-and-ramen chain (head shop at Yokohama Central Wholesale Market; franchising)'],
      origin: 'Shimbashi branch opened 3 August 2024 (Tabelog)',
      background: 'The brand lists shops in Shimbashi and Shibuya (Tokyo) and its head shop at the Yokohama Central Wholesale Market, plus Noge, Tsuruyachō, Minato Mirai and Yokohama Landmark. It advertises franchises on its site.',
      philosophy: '「豊洲市場・横浜市中央卸売市場より直接仕入れ」 — fish bought directly from the Toyosu and Yokohama wholesale markets.',
      specialty: 'Oi-katsuo ramen with five-piece nigiri sets; bluefin tuna nigiri.',
      anecdotes: [
        { text: 'The brand gives away one chūtoro nigiri on the 10th of every month (shop Instagram feed on its site).', source: OWN },
        { text: '"As soon as I walked in, I was greeted by the wonderful aroma of bonito flakes, which they seemed to be shaving right there in the restaurant."', source: R + 'B537616766/' },
        { text: 'October 2026: "Inside the tea strainer, there are bonito flakes, which you mix for about 10 seconds to enhance the broth\'s flavor" — Oikatsuo ramen ¥890.', source: R + 'B537740009/' },
      ],
      japanese_sources_summary: '公式(uogashiya.com): 鮨とラーメン うおがしや、店舗は新橋・渋谷(東京)、本店(横浜中央卸売市場)・野毛・鶴屋町・みなとみらい一番街・横浜ランドマーク(神奈川)。豊洲市場・横浜市中央卸売市場より直接仕入れ、お鮨とラーメンのセット1,000円台〜、フランチャイズ募集。食べログ: 新橋店 2024年8月3日オープン、毎日7:00〜翌5:00、1/1〜3休、10席、カード・電子マネー・QR可。2026年10月の口コミ: 追いかつお890円、寿司5貫セット1,500円、中太縮れ麺、チャーシュー・海苔・メンマ・かいわれ・ねぎ、茶こしの鰹節。',
      confidence: 'medium', sources: [OWN, TB, R + 'B537740009/', R + 'B537616766/', R + 'B537502377/', R + 'B537485504/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine outside, then sit at one of ten counter seats. All payment types accepted; open almost round the clock.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Medium-thick curly wheat noodles; sushi made at the same counter.', source: R + 'B537740009/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Bonito broth with bonito flakes stirred in; chashu on the ramen.', source: R + 'B537740009/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['gyokai'], broth_texture: null, tare: ['shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly, chewy noodles.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '追いかつお (oi-katsuo ramen) — ¥890; with five nigiri ¥1,500 (October 2026).',
      chashu: 'Two slices.',
      notable_toppings: ['bonito flakes in a tea strainer', 'nori', 'menma', 'kaiware radish sprouts', 'negi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Bonito broth.' },
      pantheon: 'Market sushi and a bonito ramen under one roof from 7 a.m. to 5 a.m.: a salty katsuo broth you deepen with a strainer of fresh-shaved flakes, five nigiri on red-vinegar rice beside it.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537430259/', 'The ultimate light finishing ramen… a gentle yet profound flavor.'],
        oiliness: [R + 'B537430259/', 'Light finishing ramen.'],
        clarity: [R + 'B537430259/', 'An exquisite golden soup.'],
        tare_strength: [R + 'B537485504/', 'The ramen broth was a bit salty.'],
        noodle_firmness: [R + 'B535895072/', 'The noodles are chewy.'],
        aroma_punch: [R + 'B537616766/', 'Greeted by the wonderful aroma of bonito flakes.'],
      },
      confidence: 'medium', sources: [R + 'B537430259/', R + 'B537485504/', R + 'B535895072/', R + 'B537616766/', R + 'B537740009/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-13-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Brand site lists the Shimbashi shop; Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目13番 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OWN, R + 'B537740009/', R + 'B537485504/', R + 'B537502377/'],
    price_note: 'No menu read. Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('追いかつお', 'oikatsuo', 'Oi-katsuo ramen (bonito broth, chashu, nori, menma, kaiware)', '¥890', 'Ramen', 'no', 'no', 'October 2026.', 'oikatsuo_ramen'),
      it('追いかつおラーメン にぎり5貫セット', 'oikatsuo raamen nigiri gokan setto', 'Oi-katsuo ramen with five nigiri', '¥1,500', 'Set', 'no', 'no', 'October 2026.', 'ramen_nigiri_set'),
      it('本鮪にぎり5貫', 'honmaguro nigiri gokan', 'Five bluefin tuna nigiri', '', 'Sushi', 'ask', 'no', 'Red-vinegar rice; soy not documented.', 'bluefin_nigiri'),
      it('肉増し', 'niku mashi', 'Extra chashu', '', 'Toppings', 'ask', 'no', '', 'extra_chashu'),
    ] }, {
    cuisine: '鮨とラーメン・追いかつおラーメン・豊洲と横浜市場の魚を赤酢シャリで',
    neighborhood: '新橋一丁目、路面店。新橋駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。ラーメンは塩気のある鰹出汁に小麦の中太縮れ麺。寿司は赤酢のシャリのにぎりですが、醤油を付けるか、その原料は書かれていません。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。ラーメンは鰹出汁にさらに鰹節を加え、チャーシューがのります。もう半分のメニューは魚の寿司です。',
    notes: '[ラーメン+寿司・ほぼ24時間] 横浜中央卸売市場に本店を置く鮨とラーメンのチェーンの新橋店で、2024年8月開業。渋谷・野毛・鶴屋町・みなとみらいにも店があり、フランチャイズも募集しています。魚は豊洲と横浜の市場から直接仕入れ、にぎりは赤酢のシャリ。ラーメンは「追いかつお」で、塩気のある鰹出汁に中太縮れ麺、チャーシュー2枚、海苔、メンマ、かいわれ、ねぎ。店で削る鰹節を茶こしに入れ、約10秒スープに浸します。2026年10月はラーメンとにぎり5貫のセットが1,500円、ラーメン単品890円。カウンター10席、食券は店外の券売機で。朝7時から翌朝5時まで営業。',
  });
}

// ================================================================ 麺屋NOBUNAGA 京橋店
{
  const OWN = 'https://ramen-nobunaga.com/'; const MENU = OWN + 'menu/'; const ABOUT = OWN + 'about/';
  const PR = 'https://san-tatsu.jp/pressrelease/502648/';
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130202/13304145/'; const R = TB + 'dtlrvwlst/';
  const a = day(['10:00', '03:00']);
  put({
    id: 'tokyo_menya_nobunaga_kyobashi', name: '麺屋NOBUNAGA 京橋店 (Menya NOBUNAGA, Kyōbashi)', category: 'OMNI',
    lat: 35.676363, lng: 139.770523,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Every bowl uses the house curly wheat noodles in a rich seafood-and-chicken paitan. Fried karaage and abura-soba are also on the menu. Tabelog notes that allergy information is available, so ask the staff, but no gluten-free noodle is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is chicken paitan with seafood, simmered for 48 hours, and is finished with seafood powder and shrimp oil. The bowls carry chicken chashu, and a wagyu-and-truffle ramen is on the menu.',
    hours_raw: 'Daily 10:00–03:00 (next day); closing days may vary (Tabelog). All cards, IC, e-money and QR accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyōbashi 2-chōme, street level — 30 sec from Kyōbashi Stn (Ginza line)',
    cuisine: 'Rich seafood chicken paitan (gyokai tori-paitan) · tsukemen · late night', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('麺屋NOBUNAGA 京橋店'), menu_url: MENU,
    notes: "[Ramen · seafood chicken paitan, late night] The first shop, opened December 2024, of 麺屋NOBUNAGA, which now has four: Kyōbashi, Kayabachō, Shintomichō and a Tsukiji flagship, 'SHOGUN', that also serves tempura courses. The bowl is a 48-hour seafood chicken paitan, milky white turning golden, with the company's own curly noodles and chicken chashu. The all-toppings bowl adds egg, nori, seafood powder, shrimp oil, crisp onion and mizuna; a squeeze of lemon cuts the richness. Tsukemen are served at Kyōbashi, Kayabachō and Shintomichō only. Open from 10 a.m. to 3 a.m., it fills late at night, much of the crowd from overseas. Founder Usuda Noriyasu is a former Maritime Self-Defense Force sailor who became an izakaya-industry manager and trainer.",
    chef_bio: {
      chef_name: '薄田典靖 (Usuda Noriyasu, founder and CEO of 株式会社NOBUNAGA)', roles: ['founder / company representative — not the cook at this shop'],
      origin: 'Kyōbashi, first shop, December 2024; four shops by March 2026',
      background: 'Born in Saga in 1987, Usuda served in the Maritime Self-Defense Force, including a 2008 Indian Ocean deployment, then joined the izakaya company Teppen, where he became a store manager and company president. He founded DLE Holdings in 2016 and runs restaurants, salons and corporate training.',
      philosophy: '「世界に感動の一杯を届ける」 — to deliver a moving bowl to the world, with seafood chicken paitan as the house genre.',
      specialty: 'NOBUNAGA all-toppings ramen; 48-hour seafood chicken paitan; spicy-miso limited editions.',
      anecdotes: [
        { text: 'The menu calls the all-toppings bowl more than ten elements: chicken chashu, house egg, nori, and 「隠し味として散りばめられた魚介の粉末や海老から抽出した油」.', source: MENU },
        { text: 'An October 2026 diner at 10:30 p.m. found every seat taken; "very popular among international visitors."', source: R + 'B537126504/' },
        { text: 'Another found the all-toppings tsukemen satisfying at first, but "towards the end, the greasiness became a bit overwhelming."', source: R + 'B537645549/' },
      ],
      japanese_sources_summary: '公式(ramen-nobunaga.com): 濃厚魚介鶏白湯、独自製法で48時間煮込んだスープ、オリジナルのちぢれ麺、鶏チャーシュー、自家製の卵、魚介の粉末、海老油など10種類以上の具材。つけ麺は京橋店・茅場町店・新富町限定。築地店SHOGUNは天麩羅お任せコース。代表取締役・薄田典靖(1987年佐賀生まれ、海上自衛隊、株式会社てっぺん、DLEホールディングス設立)。さんたつ掲載リリース: 運営 株式会社NOBUNAGA、2024年12月京橋で1号店。2026年3月新富町に4号店。食べログ: 毎日10:00〜翌3:00、20席、各種決済可、アレルギー表示あり。口コミ: 全部乗せ1,580〜1,650円、味玉ラーメン1,150円。',
      confidence: 'high', sources: [MENU, ABOUT, PR, TB, R + 'B537088983/', R + 'B537126504/', R + 'B537287131/'],
    },
    cultural_comfort: { level: 'english', note: 'English site and a largely international late-night crowd; all payment types; allergy information available (Tabelog). Expect a short queue after 8 p.m.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Original curly wheat noodles in every bowl.', source: MENU }, { text: 'Freshly fried karaage served as a side.', source: R + 'B537522223/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Seafood chicken paitan finished with seafood powder and shrimp oil.', source: MENU }],
      staff_allergy_handling: [{ text: 'Tabelog lists "Allergy information available".', source: TB }],
      positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: ['shrimp'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Original curly noodles, medium-thick and chewy.' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'NOBUNAGA全部乗せラーメン (all-toppings seafood chicken paitan) — ¥1,580–1,650 in October 2026.',
      chashu: 'Tender chicken chashu.',
      notable_toppings: ['seasoned egg', 'mizuna', 'fried onion', 'sakura shrimp', 'seafood powder', 'shrimp oil', 'lemon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood paitan.' },
      pantheon: 'A late-night Kyōbashi crowd-puller from an ex-navy restaurateur: a 48-hour seafood chicken paitan, creamy white going gold, loaded with shrimp oil, seafood powder and mizuna, until 3 a.m.',
      profile: { richness: 4, oiliness: 3, clarity: 0, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537522223/', 'Packed with chicken essence… full-bodied; "a well-balanced richness that isn\'t too heavy" (' + R + 'B536975533/).'],
        oiliness: [R + 'B536836419/', 'The broth wasn\'t too greasy; another diner found the tsukemen greasy by the end (' + R + 'B537645549/).'],
        clarity: [R + 'B536975533/', 'The thick, cloudy broth.'],
        tare_strength: MID,
        noodle_firmness: [R + 'B537522223/', 'The noodles are medium-thick and have a chewy texture.'],
        aroma_punch: [MENU, 'Seafood powder and shrimp oil (海老から抽出した油); garlic and sakura shrimp on the all-toppings bowl (' + R + 'B537126504/).'],
      },
      confidence: 'medium', sources: [MENU, R + 'B537522223/', R + 'B536975533/', R + 'B536836419/', R + 'B537126504/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0031 東京都中央区京橋2-5-2 A・M京橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live (2026 news); Tabelog reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区京橋二丁目5番2号 (go) 23m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [MENU, R + 'B537088983/', R + 'B537126504/', R + 'B537287131/'],
    price_note: 'Dishes from the official menu, which lists no prices; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('NOBUNAGA全部乗せラーメン', 'nobunaga zenbu nose raamen', 'NOBUNAGA all-toppings ramen', '¥1,650', 'Ramen', 'no', 'no', 'October 2026 (¥1,580 in another review).', 'all_toppings_ramen'),
      it('NOBUNAGAラーメン', 'nobunaga raamen', 'NOBUNAGA ramen (seafood chicken paitan)', '', 'Ramen', 'no', 'no', '', 'nobunaga_ramen'),
      it('NOBUNAGA味玉ラーメン', 'nobunaga ajitama raamen', 'NOBUNAGA seasoned-egg ramen', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_ramen'),
      it('NOBUNAGAラーメン辛味', 'nobunaga raamen karami', 'NOBUNAGA spicy ramen', '', 'Ramen', 'no', 'no', '', 'spicy_ramen'),
      it('NOBUNAGA冷やしラーメン', 'nobunaga hiyashi raamen', 'NOBUNAGA chilled ramen', '', 'Ramen', 'no', 'no', '', 'chilled_ramen'),
      it('和牛と黒トリュフの金箔ラーメン', 'wagyuu to kuro toryufu no kinpaku raamen', 'Wagyu, black truffle and gold-leaf ramen', '', 'Ramen', 'no', 'no', '', 'wagyu_truffle_ramen'),
      it('NOBUNAGAつけ麺', 'nobunaga tsukemen', 'NOBUNAGA tsukemen', '', 'Ramen', 'no', 'no', 'Kyōbashi, Kayabachō and Shintomichō only.', 'tsukemen'),
      it('唐揚げ', 'karaage', 'Karaage (fried chicken)', '', 'Sides', 'no', 'no', 'October 2026 review.', 'karaage'),
    ] }, {
    cuisine: '濃厚魚介鶏白湯・つけ麺・深夜営業',
    neighborhood: '京橋二丁目、路面店。銀座線京橋駅から徒歩30秒',
    gf_detail: 'グルテンフリーではありません。どの一杯も自家オリジナルの小麦のちぢれ麺に濃厚魚介鶏白湯で、唐揚げや油そばもあります。食べログにはアレルギー表示ありとあるので店で確認してください。ただしグルテンフリーの麺はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは魚介入りの鶏白湯を48時間煮込み、魚介の粉末と海老油で仕上げます。鶏チャーシューがのり、和牛とトリュフのラーメンもあります。',
    notes: '[ラーメン・濃厚魚介鶏白湯・深夜] 2024年12月に開いた麺屋NOBUNAGAの1号店。現在は京橋・茅場町・新富町と、天麩羅のコースも出す築地の旗艦店「SHOGUN」の4店舗です。48時間煮込んだ濃厚魚介鶏白湯は乳白色から黄金色へと変わる色合いで、オリジナルのちぢれ麺と鶏チャーシュー。全部乗せには卵・海苔・魚介の粉末・海老油・揚げ玉ねぎ・水菜がのり、レモンで後味がさっぱりします。つけ麺は京橋・茅場町・新富町限定。朝10時から深夜3時まで営業し、夜遅くは海外からの客でいっぱいになります。創業者の薄田典靖氏は元海上自衛官で、居酒屋業界の店長・経営者を経た人物です。',
  });
}

// ================================================================ 横浜家系らーめん 河埜家
{
  const PR = 'https://prtimes.jp/main/html/rd/p/000000032.000045707.html';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13323175/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '21:30']);
  put({
    id: 'tokyo_iekei_kounoya_ginza', name: '横浜家系らーめん 河埜家 (Yokohama Iekei Rāmen Kōnoya)', category: 'OMNI',
    lat: 35.673186, lng: 139.769221,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Iekei ramen: curly wheat noodles in a pork-bone soy-sauce soup with chicken oil. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is a dark-brown pork-bone stock in the style of Budōka, made rounder with chicken oil, and the bowls carry thick chashu.',
    hours_raw: 'Mon–Sat 11:00–21:30; Sun 11:00–18:00 (Tabelog). Cash only; ticket machine.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: day(['11:00', '18:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme — 1 min (87 m) from Ginza-itchōme Stn exit 10',
    cuisine: 'Yokohama iekei (tonkotsu-shoyu with chicken oil) in the Budōka line · noodles, richness and oil to order', cuisine_type: 'ramen',
    website: null, gmaps: gm('横浜家系らーめん 河埜家 銀座1-13-9'), menu_url: null,
    notes: "[Ramen · iekei, Budōka line] Opened 10 June 2026 by Kōno Jōji, 'George' to regulars, who spent a decade as manager of the Kichijōji shop of Budōka, the Tokyo iekei shop people travel from other prefectures for. His soup is Budōka's dark, deep pork-bone stock, of which the press release says 300 kg of bones go into a pot boiled hard, rounded off with chicken oil. Order noodle firmness, richness and oil at the counter. Ramen is ¥900 and rice ¥100, cheap for Ginza; soak the nori in the soup and wrap the rice in it. He wants to build 'a Ginza ordinary people can use every day'. The shop opened under the 'trust' scheme of Mujaki Foods, a restaurant-support company that pays the opening costs, so it is company-backed rather than independently owned. Sixteen L-shaped counter seats; diners in 2026 were split on the strong, slightly smoky soup.",
    chef_bio: {
      chef_name: '河埜丈士 (Kōno Jōji, owner-chef)', roles: ['owner-chef', 'former manager of 武道家 Kichijōji (about 10 years)'],
      origin: 'Ginza 1-chōme; opened 10 June 2026',
      background: 'Joined Budōka as a teenager, became manager of its Kichijōji shop at the end of his 26th year and ran it for about ten years. He went independent through Mujaki Foods\' "Toranavi" trust system, which covers the full opening cost and lets individuals open in areas they could not otherwise afford; Ginza was the location offered.',
      philosophy: '「庶民が普段使いできる銀座。それを目指します」; and at the door, as in Kichijōji: 「いってらっしゃい」「おかえり」「またね」「また明日」.',
      specialty: 'Budōka-style dark pork-bone iekei with chicken oil; nori-wrapped rice.',
      anecdotes: [
        { text: '「武道家に入ったのが10代の頃で、初日からいきなり大将に怒鳴られたんです」', source: PR },
        { text: '「武道家ベースの濃厚な茶褐色のスープに、鶏油を合わせてまろやかさを足して…麺とスープが絡んで、別々にならない最高の一杯を作ろうとしています」 — before opening.', source: PR },
        { text: 'Walking through Kichijōji, people call out "Ah, you\'re George, right?" — the press release on the manager regulars came to see.', source: PR },
        { text: 'October 2026: a regular of the Budōka chain wrote that it "definitely carries on the signature richness of Budoka… a bit milder, but that makes it even better."', source: R + 'B537663721/' },
      ],
      japanese_sources_summary: 'PR TIMES(ムジャキフーズ、2026年): 「河埜家」2026年6月10日銀座オープン、ムジャキフーズのトラスト方式(開業資金を全額負担する「トラナビ」)。店主・河埜丈士(こうの じょうじ)氏、武道家吉祥寺店を10年率いた店長、10代で武道家入社、26歳の終わりに店長。300キロの豚骨を強火で炊く濃厚な茶褐色のスープに鶏油。「庶民が普段使いできる銀座」。食べログ: 月〜土11:00〜21:30、日11:00〜18:00、現金のみ。2026年の口コミ: ラーメン900円・中1,000円・ライス100円・特製中1,350円・味玉1,000円・海苔350円、麺の硬さ・味の濃さ・油の量を選択、L字カウンター16席。',
      confidence: 'high', sources: [PR, TB, R + 'B536708886/', R + 'B537483455/', R + 'B537663721/', R + 'B530029401/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; you are then asked your preferred noodle firmness, richness and oil. Self-serve water; cash only; 16 counter seats.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Curly wheat noodles.', source: R + 'B537014375/' }],
      soy_sauce_wheat: [{ text: 'Iekei soup: pork-bone base with chicken oil (tare not described).', source: PR }],
      vegan_cross_contact: [{ text: 'Pork-bone soup with chicken oil.', source: PR }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['pork'], broth_texture: 'paitan', tare: [], aroma_oil: ['chicken oil'], richness: 'kotteri',
      noodles: { thickness: null, shape: 'wavy', hydration: null, handmade: false, notes: 'Curly noodles; firmness to order.' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン with nori and rice — ramen ¥900, rice ¥100 (October 2026); 特製 medium ¥1,350.',
      chashu: 'Thick, tender chashu.',
      notable_toppings: ['nori', 'spinach', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: "A Kichijōji iekei manager known to ramen fans, now in Ginza: Budōka's dark, hard-boiled pork-bone soup rounded with chicken oil, nori to wrap your rice, and ¥900 a bowl a block from Ginza-itchōme.",
      profile: { richness: 5, oiliness: 4, clarity: 0, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536841913/', 'The broth is thick and rich, with concentrated flavors; 「濃厚で深みのある茶褐色のスープ」 (' + PR + ').'],
        oiliness: [PR, '鶏油を合わせてまろやかさを足して; oil level is chosen per bowl.'],
        clarity: [PR, 'A dark-brown (茶褐色) pork-bone soup.'],
        tare_strength: [R + 'B530136435/', 'In terms of flavor, it\'s on the heavier side.'],
        noodle_firmness: [R + 'B537483455/', 'The noodles had a great chewiness, especially since I requested them firm (firmness is chosen per bowl).'],
        aroma_punch: [R + 'B530029401/', 'A burnt smell… a bit smoky (almost burnt) — a point diners disagreed on.'],
      },
      confidence: 'medium', sources: [PR, R + 'B536841913/', R + 'B530136435/', R + 'B537483455/', R + 'B530029401/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-13-9 栄楽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened June 2026; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目13番9号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536708886/', R + 'B536841913/', R + 'B537483455/', R + 'B537757328/', R + 'B530136435/'],
    price_note: 'No menu read. Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'raamen', 'Ramen (regular)', '¥900', 'Ramen', 'no', 'no', 'Medium ¥1,000.', 'ramen'),
      it('味玉ラーメン', 'ajitama raamen', 'Seasoned-egg ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_ramen'),
      it('特製ラーメン(中)', 'tokusei raamen chuu', 'Special ramen, medium', '¥1,350', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_ramen'),
      it('ライス', 'raisu', 'Rice', '¥100', 'Rice', 'ask', 'ask', '', 'rice'),
      it('海苔', 'nori', 'Nori topping', '¥350', 'Toppings', 'ask', 'ask', '', 'nori'),
      it('ほうれん草', 'hourensou', 'Spinach topping', '', 'Toppings', 'ask', 'ask', '', 'spinach'),
    ] }, {
    cuisine: '武道家系の横浜家系(豚骨醤油・鶏油)・麺の硬さ・味の濃さ・油の量を選べる',
    neighborhood: '銀座一丁目。銀座一丁目駅10番出口から徒歩1分(87m)',
    gf_detail: 'グルテンフリーではありません。家系ラーメンで、豚骨醤油に鶏油のスープに小麦の縮れ麺。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは武道家ベースの茶褐色の豚骨に鶏油を合わせたもので、厚いチャーシューがのります。',
    notes: '[ラーメン・家系・武道家の系譜] 他県からも客が来る東京の家系ラーメン「武道家」の吉祥寺店を約10年率いた河埜丈士(常連には「ジョージさん」)が、2026年6月10日に開いた店。プレスリリースによれば、300キロの豚骨を強火で炊く武道家ゆずりの濃厚な茶褐色のスープに、鶏油でまろやかさを足しています。麺の硬さ・味の濃さ・油の量をカウンターで伝え、ラーメン900円・ライス100円と銀座では安価。海苔をスープに浸してご飯を巻くのが定番です。目指すのは「庶民が普段使いできる銀座」。開業資金を全額負担する飲食店支援会社ムジャキフーズの「トラスト方式」で開業しており、独立系の個人店ではなく企業の支援を受けた店です。L字カウンター16席。2026年の口コミでは、濃く少しスモーキーなスープの評価が分かれています。',
  });
}

save();
