// Ginza Station half-mile sweep (805 m), batch 22 — mom-and-pop discovery via ASCII.jp's "レトロさんぽ" series.
//   + 中国料理 宝龍 (under the Yūrakuchō tracks since 1967; owner Uei Keiichi → MOM_AND_POP)
//   + ジュン 喫茶室 (Kōtsū Kaikan 3F since 1965; run by the founder's daughter, Ms Fukuda → MOM_AND_POP)
// Checked and skipped: 珈琲館 紅鹿舎 (pizza-toast originator, 1957 — Tabelog "Relocated"; diners report its last day
// was 28 February 2026). 阿蘇, 菊亭, 甘味おかめ, 福亭 have no named owner (or are company-run); 菊亭/阿蘇 ids not found.
// Sources: ASCII.jp レトロさんぽ #6 (2023), #22 (2025); Tabelog /en/ listings + 2026 reviews. Pins: Tabelog + GSI + OSM.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const MID = [null, 'Not described in any source read; scored at the midpoint.'];

// ================================================================ 中国料理 宝龍
{
  const AS = 'https://ascii.jp/elem/000/004/257/4257005/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13044306/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '23:50']), we = day(['11:00', '21:30']);
  put({
    id: 'tokyo_chugoku_ryori_horyu_yurakucho', name: '中国料理 宝龍 (Chūgoku Ryōri Hōryū)', category: 'MOM_AND_POP',
    lat: 35.675108, lng: 139.763772,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The noodles are wheat (regular Chinese noodles, medium-thick for miso ramen, a separate noodle for tsukemen), the shōyu ramen is a soy broth, gyoza wrappers are wheat, and the stir-fries come in sweet-savoury sauces. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The ramen broth is chicken frames with pork and flying fish; gyoza are pork and cabbage; set meals are pork, chicken and liver stir-fries.',
    hours_raw: 'Mon–Fri 11:00–23:50; Sat, Sun & holidays 11:00–21:30; open all day without a break (Tabelog). No cards.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yūrakuchō 2-chōme, under the tracks by the Kyōbashi exit — 10 seconds from Yūrakuchō Stn',
    cuisine: 'Machi-chūka since 1967 · old-style shōyu ramen with half fried rice · set meals · house chilli oil', cuisine_type: 'ramen',
    website: null, gmaps: gm('中国料理 宝龍 有楽町2-9-16'), menu_url: null,
    notes: "[Mom & Pop · machi-chūka under the tracks] A neighbourhood Chinese restaurant under the JR viaduct by Yūrakuchō's Kyōbashi exit, ten seconds from the station. It opened here in 1967; before that it was a food stall in the 'sushiya yokochō' that stood where the Tokyo Kōtsū Kaikan is now. Owner Uei Keiichi says there's no single best-seller, because regulars all have their own orders, but jokes the free house chilli oil (garlic and chilli, also sold in jars) might be it. Cooks of twenty years and more use different noodles for shōyu, miso and tsukemen, and there are monthly specials. Prices are station-cheap: shōyu ramen ¥650, or ¥750 with half fried rice; noodles ¥650–900, a dozen set meals ¥850–950 with rice, soup, pickles and seasoned nori; gyoza ¥550 with a Sichuan-pepper salt (2025). Open all day without a break.",
    chef_bio: {
      chef_name: '上井恵一 (Uei Keiichi, owner)', roles: ['owner'],
      origin: 'At Yūrakuchō 2-9-16 since 1967; predecessor was a food shop in the former すしや横丁',
      background: 'ASCII.jp (March 2025) interviewed the owner, Uei Keiichi; the kitchen staff are veterans of over twenty years.',
      philosophy: null,
      specialty: 'Shōyu ramen with half fried rice; egg and wood-ear stir-fry; house chilli oil.',
      anecdotes: [
        { text: '「もしかしたら、一番人気はこのラー油かも」 — the owner on the free house chilli oil, which regulars ask for as soon as they order a drink.', source: AS },
        { text: 'The gyoza come with a house Sichuan-pepper salt, invented because the filling (napa cabbage, cabbage, chives, pork) is sweet enough to want something clean.', source: AS },
        { text: 'October 2026: a large ramen costs only ¥100 more, and with half fried rice "I was completely satisfied for just JPY 1000".', source: R + 'B537378464/' },
      ],
      japanese_sources_summary: 'ASCII.jp「レトロさんぽ」第22回(2025.3.14): 中国料理 宝龍、JR有楽町駅京橋口すぐのガード下、1967年創業、前身は東京交通会館完成前の「すしや横丁」の食べ物屋、店主・上井恵一さん、醤油ラーメンセット750円(醤油ラーメン650円＋半チャーハン)、スープは鶏ガラ主体に豚とトビウオ、チャーシュー・メンマ・ホウレン草・ゆで玉子、麺類650〜900円、定食850〜950円(ご飯・スープ・漬物・味付け海苔)、玉子とキクラゲの炒め850円、焼き餃子550円(花椒塩)、自家製ラー油(小500円・大1,000円)、厨房は20年以上のベテラン、味噌ラーメンは中太麺、通し営業。食べログ: 有楽町2-9-16、32席、平日11:00〜23:50、土日祝〜21:30。',
      confidence: 'high', sources: [AS, TB, R + 'B521914796/', R + 'B537378464/', R + 'B537442627/', R + 'B537087328/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Wall menus in Japanese; ask staff for the chilli oil pot. Open all day; quick service.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Different noodles for regular, miso (medium-thick) and tsukemen; gyoza.', source: AS }],
      soy_sauce_wheat: [{ text: 'Mellow shōyu broth; sweet-savoury stir-fry sauces.', source: AS }],
      vegan_cross_contact: [{ text: 'Broth of chicken frames with pork and flying fish.', source: AS }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'pork', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Regular Chinese noodles for shōyu ramen; medium-thick for miso; a separate noodle for tsukemen. Smooth going down.' },
      regional_style: [], sub_genre: ['chuka soba', 'machi-chuka'],
      signature_bowl: '醤油ラーメンセット (shōyu ramen with half fried rice) — ¥750 (2025).',
      chashu: 'Soft pork chashu.',
      notable_toppings: ['menma', 'spinach', 'boiled egg', 'free house chilli oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken, pork and flying-fish broth.' },
      pantheon: "Shōwa shōyu ramen ten seconds from Yūrakuchō Station: a clear, mellow chicken-pork-and-flying-fish broth with spinach and egg, half fried rice for ¥100 more, and a pot of house chilli oil on request.",
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [AS, '「あっさり、まろやかな醤油味」 with 「奥深い味わい」.'],
        oiliness: [R + 'B521914796/', 'A light broth that was simple yet easy to enjoy (shio).'],
        clarity: [AS, '「透き通ったスープ」.'],
        tare_strength: [AS, 'A mild, mellow shōyu (まろやかな醤油味).'],
        noodle_firmness: MID,
        aroma_punch: [AS, 'A gentle, old-fashioned bowl; chilli oil is added at the table.'],
      },
      confidence: 'medium', sources: [AS, R + 'B521914796/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-9-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目9番16号 (go) 10m; OSM node 1992017312 「宝龍」 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [AS, R + 'B537442627/', R + 'B537378464/'],
    price_note: 'Prices from the March 2025 ASCII.jp feature; the stir-fry price was ¥900 in October 2026.', last_checked: TODAY, items: [
      it('醤油ラーメンセット', 'shouyu raamen setto', 'Shōyu ramen with half fried rice', '¥750', 'Noodles', 'no', 'no', '2025.', 'shoyu_ramen_set'),
      it('醤油ラーメン', 'shouyu raamen', 'Shōyu ramen', '¥650', 'Noodles', 'no', 'no', 'Large +¥100.', 'shoyu_ramen'),
      it('塩ラーメン', 'shio raamen', 'Shio ramen', '', 'Noodles', 'no', 'no', '', 'shio_ramen'),
      it('玉子とキクラゲの炒め定食', 'tamago to kikurage no itame teishoku', 'Egg and wood-ear stir-fry set', '¥850', 'Set meals', 'no', 'no', '¥900 in October 2026.', 'egg_kikurage_set'),
      it('焼き餃子', 'yaki gyouza', 'Pan-fried gyoza with Sichuan-pepper salt', '¥550', 'Sides', 'no', 'no', '', 'gyoza'),
      it('五目チャーハン', 'gomoku chaahan', 'Five-ingredient fried rice', '', 'Rice', 'ask', 'no', '', 'gomoku_fried_rice'),
      it('自家製ラー油', 'jikasei raayu', 'House chilli oil (free at table; jars to buy)', '¥500', 'Retail', 'ask', 'ask', 'Small jar ¥500, large ¥1,000.', 'chilli_oil'),
    ] }, {
    cuisine: '1967年創業の町中華・昔ながらの醤油ラーメンと半チャーハン・定食・自家製ラー油',
    neighborhood: '有楽町二丁目、京橋口のガード下。有楽町駅から徒歩10秒',
    gf_detail: 'グルテンフリーではありません。麺は小麦(一般的な中華麺、味噌ラーメンは中太麺、つけ麺は専用麺)、醤油ラーメンは醤油のスープ、餃子の皮も小麦、炒め物は甘辛いタレです。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。ラーメンのスープは鶏ガラ主体に豚とトビウオ、餃子は豚とキャベツ、定食は豚・鶏・レバーの炒め物です。',
    notes: '[個人店・ガード下の町中華] 有楽町駅京橋口のガード下、駅から10秒の町中華。1967年にここで創業し、前身は東京交通会館ができる前の「すしや横丁」の食べ物屋だったそう。店主の上井恵一さんは、常連それぞれに定番があるので一番人気は決められないと言いつつ、「もしかしたら一番人気はこのラー油かも」と笑います(にんにくと唐辛子の自家製で無料、瓶詰めの販売も)。20年以上のベテランが厨房に立ち、醤油・味噌・つけ麺で麺を使い分け、月替わりの定食や麺も。値段は駅前とは思えず、醤油ラーメン650円・半チャーハン付き750円、麺類650〜900円、ご飯・スープ・漬物・味付け海苔付きの定食12種ほどが850〜950円、花椒塩で食べる焼き餃子550円(2025年)。通し営業です。',
  });
}

// ================================================================ ジュン 喫茶室
{
  const AS = 'https://ascii.jp/elem/000/004/158/4158091/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13076013/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '18:00']);
  put({
    id: 'tokyo_jun_kissashitsu_yurakucho', name: 'ジュン 喫茶室 (Jun Kissashitsu)', category: 'MOM_AND_POP',
    lat: 35.675093, lng: 139.764319,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice: butter toast, omurice, omu-hayashi and cakes, none described as gluten-free. Coffee and plain drinks contain no gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: butter toast, banana milk float with soft-serve, omurice with shrimp. Black coffee is plant-only.',
    hours_raw: 'Daily 11:00–18:00; closed on building closure days (Tabelog). Cash only.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, Tokyo Kōtsū Kaikan 3F — 1 min from Yūrakuchō Stn',
    cuisine: 'Jun-kissa since 1965 · window seats over the Shinkansen · butter toast, omurice, banana milk float', cuisine_type: 'kissaten',
    website: null, gmaps: gm('ジュン 喫茶室 東京交通会館3階'), menu_url: null,
    notes: "[Mom & Pop · the kissaten above the Shinkansen] A spacious jun-kissa on the quiet third floor of the Tokyo Kōtsū Kaikan, open since the building opened in 1965 and now run by the founder's daughter, Ms Fukuda, who still brings the menus herself. The room was renovated about thirty-five years before 2023 and feels clean, with Shōwa touches, and the novelist Ijūin Shizuka's autograph hangs on the wall. Ask for a window table or the terrace: the Shinkansen glides past slowly just outside. Orders run from crisp butter toast and a banana milk float with vanilla soft-serve to omu-hayashi and a 'surprising omurice' with a shrimp-and-mushroom risotto inside (¥1,100, 2026). A good escape when the basement queues are long.",
    chef_bio: {
      chef_name: '福田 (Ms Fukuda, owner — daughter of the founder; given name not in sources)', roles: ['owner (2nd generation)'],
      origin: 'Opened with the Tokyo Kōtsū Kaikan, 1965',
      background: 'ASCII.jp (September 2023): the founder\'s daughter, Fukuda, has taken over the shop; the interior was renewed about 35 years earlier.',
      philosophy: null,
      specialty: 'Butter toast; banana milk float; omu-hayashi.',
      anecdotes: [
        { text: '窓側＆テラス席は窓から新幹線が見える特等席！', source: AS },
        { text: '作家の伊集院静さんのサインが飾ってありました！', source: AS },
        { text: 'A September 2026 diner found the basement packed and came up to the third floor, where a window seat gave a view of the Shinkansen "running at a slower speed".', source: R + 'B536205069/' },
      ],
      japanese_sources_summary: 'ASCII.jp「レトロさんぽ」第6回(2023.9.22): ジュン 喫茶室、東京交通会館3階、1965年創業(交通会館の開業と同時)、創業者の娘・福田さんが継ぐ、35年前に内装リニューアル、伊集院静さんのサイン、窓側とテラス席から新幹線、バタートースト、バナナミルクフロート(バニラソフト)。食べログ: 有楽町2-10-1、50席、毎日11:00〜18:00、現金のみ。2026年の口コミ: びっくりオムライス1,100円(海老とキノコのリゾット風)、オムハヤシ、アイスコーヒー。',
      confidence: 'medium', sources: [AS, TB, R + 'B535686515/', R + 'B536048162/', R + 'B536205069/', R + 'B534294596/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Spacious and usually without a queue; ask for the window or terrace. Cash only.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Banana milk float topped with vanilla soft-serve.', source: AS }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目10番 (lot) 16m; same building as キッチン大正軒, ローヤル and ひょっとこ (own Tabelog geo each); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [AS, R + 'B535686515/', R + 'B536048162/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('バタートースト', 'bataa toosuto', 'Butter toast', '', 'Food', 'no', 'no', '', 'butter_toast'),
      it('バナナミルクフロート', 'banana miruku furooto', 'Banana milk float with vanilla soft-serve', '', 'Drinks', 'ask', 'no', '', 'banana_float'),
      it('びっくりオムライス', 'bikkuri omuraisu', '"Surprising" omurice (shrimp-and-mushroom risotto inside)', '¥1,100', 'Food', 'no', 'no', 'September 2026.', 'bikkuri_omurice'),
      it('オムハヤシ', 'omu hayashi', 'Omu-hayashi', '', 'Food', 'no', 'no', '', 'omu_hayashi'),
      it('アイスコーヒー', 'aisu koohii', 'Iced coffee', '', 'Drinks', 'gf', 'vegan', 'Black.', 'iced_coffee'),
    ] }, {
    cuisine: '1965年開業の純喫茶・新幹線が見える窓際の席・バタートースト・オムライス・バナナミルクフロート',
    neighborhood: '有楽町二丁目、東京交通会館3F。有楽町駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。バタートースト、オムライス、オムハヤシ、ケーキなどで、グルテンフリーとされるものはありません。コーヒーやシンプルな飲み物はグルテンを含みません。',
    vegan_detail: '記述上はヴィーガンではありません。バタートースト、ソフトクリームのバナナミルクフロート、海老入りのオムライス。ブラックコーヒーは植物性のみです。',
    notes: '[個人店・新幹線の見える喫茶店] 東京交通会館の落ち着いた3階にある広々とした純喫茶で、1965年の開館と同時に開業。現在は創業者の娘の福田さんが継ぎ、自らメニューを運んでくれます。2023年の35年前に内装をリニューアルしたので清潔感があり、昭和の雰囲気も残り、作家・伊集院静さんのサインも飾られています。窓際の席かテラスを頼めば、すぐ外を新幹線がゆっくり通り過ぎます。サクサクのバタートースト、バニラソフトをのせたバナナミルクフロート、オムハヤシ、中に海老とキノコのリゾット風のご飯が入った「びっくりオムライス」(2026年で1,100円)など。地下が行列のときの避難先にも。',
  });
}

save();
