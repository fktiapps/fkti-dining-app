// Osaka sweep (2-mile circle around Dotonbori), batch 19 — ramen phase, nearest first (all OMNI).
//   + みな麺 なんばウォーク店 (Jinrui Mina Menrui's "water and soy sauce" shoyu in Namba Walk; pin chōme-level)
//   + 富喜製麺研究所 心斎橋店 (Kumamoto noodle-maker's kombu-water tsukemen, 21:00–6:00)
//   + たぶっちゃん (Sichuan-street tantanmen and yatai shoyu, cash only)
//   + 札幌らーめん獅子王 心斎橋店 (Sapporo miso with grated potato, open through the night)
// Skipped: 浪速屋 27137593 (newest review Sept 2024), 真鯛らーめん まるき 周防町店 27137665 (newest Feb 2025),
//          中国料理 小面当家 難波店 27102753 (3 reviews).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 19);

skip('27137593', 'Newest review is September 2024 (others August 2023); current operation unverified.');
skip('27137665', 'Five reviews, newest February 2025; current operation unverified.');
skip('27102753', 'Three reviews only; too thin to describe.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ みな麺 なんばウォーク店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132823/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_minamen_namba_walk', name: 'みな麺 なんばウォーク店 (Minamen Namba Walk)', category: 'OMNI',
    lat: 34.667592, lng: 135.498385, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles in a soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu (pork and chicken); bonito in the cold ramen.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30). Closed one Wednesday in most odd-numbered months (in 2026: 1 and 21 Jan, 18 Mar, 20 May, 15 Jul, 16 Sep, 18 Nov); short hours 31 Dec and 2 Jan (Tabelog). Pay at the entrance; cards accepted.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk (underground) 1-bangai north street, Namba 2-chōme — 3 min west of Kintetsu Osaka-Namba',
    cuisine: 'Jinrui Mina Menrui\'s offshoot · shoyu ramen made from "just water and soy sauce" ¥990, clear yet intensely savoury · rare pork and chicken chashu · whole-wheat noodles · chilled "kin-kin" noodles with bonito broth and chili oil ¥970 · seared chashu rice ¥330 · free rice refills · 14 seats',
    website: null, gmaps: gm('みな麺 なんばウォーク店'), menu_url: null,
    notes: "[Ramen · Jinrui Mina Menrui's water-and-soy-sauce shoyu, under Namba] A 14-seat counter in the Namba Walk underground mall, the first shop of a newer brand from Osaka's famous queue magnet Jinrui Mina Menrui, since April 2023. The signature shoyu ramen (¥990, October 2026) is made, the shop says, from just water and soy sauce, with no stock. It pours clear, but reviewers find it punchy and deep with umami. Expect chewy whole-wheat noodles, beautifully rare pork and carefully cooked chicken chashu. Summer brings the ice-cold \"kin-kin\" noodles in a bonito broth drizzled with chili oil (¥970). Rice refills are free, and the special toppings add a free half serving of noodles. Pay at the entrance. One diner felt the bowl looked half-empty.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 April 2023 (Tabelog)', background: 'The next brand of the Osaka ramen shop Jinrui Mina Menrui (Tabelog introduction: "Minna Mina Menrui"); a direct branch, per an October 2026 review.', philosophy: '"A simple yet rich soy sauce flavor made with just \'water and soy sauce,\' without any broth" (Tabelog introduction).', specialty: 'Water-and-soy-sauce shoyu ramen.',
      anecdotes: [
        { text: '"Perfect bowl with chewy whole wheat noodles, punchy bonito broth, and beautifully rare chashu!… unlimited rice refills for free, and with special and premium toppings, you can even get a half serving of extra noodles for free." — October 2026.', source: R + 'B537678579/' },
        { text: '"I ordered the \'Chilled Kin-Kin Noodles\' for JPY 970… the soup was ice-cold, paired with thin straight noodles, three slices of chicken breast, and drizzled with chili oil. I love the cold, bonito-flavored broth!" — September 2026.', source: R + 'B530444258/' },
      ],
      japanese_sources_summary: '食べログ: みな麺 なんばウォーク店、大阪市中央区難波2丁目 なんばウォーク1番街北通り、14席、毎日11:00〜22:00(L.O.21:30)、2026年の休業日は1/1・1/21・3/18・5/20・7/15・9/16・11/18(奇数月の第3水曜、3月は第2水曜)、12/31は18時、1/2は20時まで、禁煙(施設の喫煙所)、カード・電子マネー可、2023年4月14日開店。店の紹介: 行列の人気店「人類みな麺類」の次のブランドの1号店、出汁を使わず「水と醤油」だけの醤油ラーメン。2026年の口コミ(9〜10月): 冷やしキンキン麺970円(細ストレート麺、鶏むね3枚、ラー油、鰹のスープ)、炙りチャーシュー丼330円、特製の醤油ラーメン、澄んだスープにうま味の爆発、低温調理のチャーシュー、入口で会計、清澄醤油ラーメン990円、ご飯おかわり無料、特製・極上トッピングで替え玉半分無料、全粒粉の麺、レアチャーシュー、鶏チャーシュー、丼の半分ほどの量という声。',
      confidence: 'medium', sources: [TB, R + 'B537678579/', R + 'B530444258/', R + 'B536193351/', R + 'B537085758/', R + 'B537987124/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: false, notes: 'Chewy whole-wheat noodles (October 2026); thin straight in the cold ramen (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen ("water and soy sauce") ¥990 (October 2026).',
      chashu: 'Rare pork chashu and low-temperature chicken chashu (2026).',
      notable_toppings: ['rare pork chashu', 'chicken chashu', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Jinrui Mina Menrui\'s minimalist dare under Namba: a stockless water-and-soy-sauce shoyu that pours clear and hits deep, with rare chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536193351/', '"Despite its light mouthfeel, it never feels lacking."'],
        oiliness: [R + 'B536193351/', 'Light mouthfeel — placed low (inferred).'],
        clarity: [R + 'B536193351/', '"A refined, clear broth at first glance"; "transparent beauty" (' + R + 'B537085758/).'],
        tare_strength: [R + 'B537987124/', '"The broth was incredibly punchy."'],
        noodle_firmness: [R + 'B537678579/', '"Chewy whole wheat noodles."'],
        aroma_punch: [R + 'B537678579/', '"Punchy bonito broth" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536193351/', R + 'B537678579/', R + 'B537987124/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay at the entrance; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波2丁目 なんばウォーク 1番街北通り',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区難波二丁目 (chōme, 88m) and OSM has no match, so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537085758/', R + 'B530444258/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen ("water and soy sauce")', '¥990', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Chilled "kin-kin" noodles (bonito broth, chili oil)', '¥970', 'Seasonal', 'no', 'no', 'September 2026.', 'kinkin'),
      it('', '', 'Seared chashu rice bowl', '¥330', 'Rice', 'no', 'no', 'September 2026.', 'aburi_chashu_don'),
    ] }, {
    cuisine: '人類みな麺類の新ブランド・出汁を使わない「水と醤油」の醤油ラーメン990円、澄んでいるのにうま味が濃い・豚と鶏のレアチャーシュー・全粒粉の麺・鰹のスープとラー油の冷やし麺970円・炙りチャーシュー丼330円・ご飯おかわり無料・14席',
    neighborhood: 'なんばウォーク(地下街)1番街北通り、難波2丁目。近鉄大阪難波駅から西へ3分',
    gf_detail: 'グルテンフリーではありません。醤油スープに全粒粉の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚と鶏のチャーシュー、冷やしは鰹のスープ。',
    notes: '[ラーメン・なんば地下の人類みな麺類の水と醤油の一杯] なんばウォークの地下街にある14席のカウンターで、大阪の行列店「人類みな麺類」の新ブランドの1号店、2023年4月から。看板の醤油ラーメン(990円、2026年10月)は店によると出汁を使わず水と醤油だけ。透き通っていますが、口コミではパンチがあり深いうま味があるとのこと。もちもちの全粒粉の麺に、美しいレアの豚チャーシューと丁寧な鶏チャーシュー。夏は鰹のスープにラー油をたらしたキンキンに冷えた冷やし麺(970円)。ご飯のおかわりは無料で、特製トッピングなら替え玉半分も無料。入口で会計を。丼が半分しか埋まっていないように見えたという客も。',
  });
}

// ================================================================ 富喜製麺研究所 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27150414/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://fuuki-noodle-lab.jp/';
  const d = day(['21:00', '06:00']);
  put({
    id: 'osaka_fuki_seimen_kenkyusho_shinsaibashi', name: '富喜製麺研究所 心斎橋店 (Fuki Seimen Kenkyusho Shinsaibashi)', category: 'OMNI',
    lat: 34.671816, lng: 135.502905, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made whole-wheat noodles; soy-sauce dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito-soy dipping sauce, chashu.',
    hours_raw: 'Tue–Sun 21:00–6:00; closed Mondays (Tabelog). A July 2026 reviewer gives Sundays as the closing day instead, so check. Mobile ordering at the seat. Smoking allowed (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-29, in the Minami nightlife streets',
    cuisine: 'Kumamoto noodle-maker\'s shop · kombu-water tsukemen with bonito-kombu dip ¥1,100 (large +¥150) · flat whole-wheat noodles · sudachi to finish · chuka soba · "Guilty Jirō" · rice dishes and sides · 9 pm–6 am',
    website: OWN, gmaps: gm('富喜製麺研究所 心斎橋店'), menu_url: null,
    notes: "[Tsukemen · a noodle-maker's kombu-water tsukemen, all night] A late-night branch of Fuki Seimen Kenkyusho, a noodle maker with roots in Kumamoto and shops in Tokyo and Osaka, open in Shinsaibashi since June 2025. After the Fukai branch closed in May 2026, it became the only Osaka shop. The draw is the noodles: flat, chewy whole-wheat noodles served soaking in kombu water, so taste a couple plain first. The bonito-kombu tsukemen (¥1,100, July 2026) comes with a sweetish, katsuo-forward soy dip that the kombu water doesn't dilute. Squeeze in sudachi as you go. There's also a chuka soba whose broth one diner finished, and a popular \"Guilty Jirō\". Order on your phone at the seat. Open 9 pm to 6 am; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 June 2025 (Tabelog)', background: 'Fuki Seimen Kenkyusho, a noodle maker with shops in Kumamoto, Tokyo and Osaka (official site title); a June 2026 reviewer calls it a direct branch of a long-established Kumamoto noodle shop and says the first Osaka shop (Fukai) closed on 24 May 2026.', philosophy: null, specialty: 'Kombu-water tsukemen; house-made noodles.',
      anecdotes: [
        { text: '"Katsuo Kombu Water Tsukemen JPY 1,100… They were flat, made with whole wheat, and had a nice chew—delicious! The dipping sauce was on the sweeter side, with a strong katsuo soy sauce flavor that didn\'t get diluted by the kombu water." — July 2026.', source: R + 'B514820143/' },
        { text: '"You can really tell this is a shop directly operated by a noodle manufacturer." — June 2026.', source: R + 'B530346638/' },
      ],
      japanese_sources_summary: '食べログ: 富喜製麺研究所 心斎橋店、大阪市中央区東心斎橋2-8-29、火〜日21:00〜翌6:00、月曜定休、喫煙可、カード・QR決済可、2025年6月27日開店、公式 fuuki-noodle-lab.jp(熊本・東京・大阪のラーメン・つけ麺・まぜそば)。2026年の口コミ(5〜7月): 鰹昆布水つけ麺1,100円、大盛150円、モバイルオーダー、昆布水に浸かった全粒粉の平打ち麺、甘めで鰹醤油の強いつけ汁、すだち、日曜定休との記載(7月)、深夜3時、ギルティ二郎が人気、中華そば、麺のもちもち、熊本の老舗製麺所の直営、大阪1号店の深井店は2026年5月24日閉店、ご飯ものやサイドも、夏ラーメン2026。',
      confidence: 'medium', sources: [TB, OWN, R + 'B514820143/', R + 'B530346638/', R + 'B531879444/', R + 'B529149790/', R + 'B531374130/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'flat', hydration: null, handmade: true, notes: 'Flat whole-wheat noodles soaked in kombu water, made by the noodle maker (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'jiro_kei'],
      signature_bowl: 'Bonito-kombu water tsukemen ¥1,100 (July 2026).',
      chashu: 'Chashu ("you could really feel the care", June 2026).',
      notable_toppings: ['kombu water', 'sudachi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Bonito dip.' },
      pantheon: 'A noodle maker\'s night shift in Shinsaibashi: flat whole-wheat noodles in kombu water, dipped in a sweet, katsuo-forward soy, finished with sudachi.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531374130/', '"Overall, it was light and easy to eat."'],
        oiliness: [R + 'B530346638/', '"Rich in umami without being too heavy."'],
        clarity: [R + 'B514820143/', '"In the summer, I really crave a clear broth" — kombu water.'],
        tare_strength: [R + 'B514820143/', '"A strong katsuo soy sauce flavor that didn\'t get diluted by the kombu water."'],
        noodle_firmness: [R + 'B514820143/', '"They were flat, made with whole wheat, and had a nice chew."'],
        aroma_punch: [R + 'B514820143/', 'Katsuo-forward dip; sudachi added — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B514820143/', R + 'B530346638/', R + 'B531374130/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering at the seat.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番29号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514820143/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Bonito-kombu water tsukemen', '¥1,100', 'Tsukemen', 'no', 'no', 'July 2026.', 'kombusui_tsukemen'),
      it('', '', 'Large noodles', '¥150', 'Extras', 'no', 'no', 'July 2026.', 'omori'),
      it('中華そば', 'chūka soba', 'Chuka soba', '', 'Ramen', 'no', 'no', 'May 2026.', 'chuka_soba'),
      it('', '', '"Guilty Jirō"', '', 'Ramen', 'no', 'no', 'May 2026.', 'guilty_jiro'),
    ] }, {
    cuisine: '熊本の製麺所の店・鰹昆布のつけ汁の昆布水つけ麺1,100円(大盛+150円)・全粒粉の平打ち麺・締めにすだち・中華そば・「ギルティ二郎」・ご飯ものとサイド・夜9時〜朝6時',
    neighborhood: '東心斎橋2-8-29、ミナミの夜の街',
    gf_detail: 'グルテンフリーではありません。全粒粉の自家製麺、醤油のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。鰹醤油のつけ汁、チャーシュー。',
    notes: '[つけ麺・夜通しの製麺所の昆布水つけ麺] 熊本にルーツを持ち東京と大阪にも店を出す製麺所、富喜製麺研究所の深夜営業の店で、2025年6月から心斎橋に。2026年5月に深井店が閉店し、大阪で唯一の店になりました。主役は麺で、昆布水に浸かったもちもちの全粒粉の平打ち麺。まずは数本そのまま味わって。鰹昆布のつけ麺(1,100円、2026年7月)は甘めで鰹の効いた醤油のつけ汁で、昆布水でも薄まりません。途中ですだちを。スープまで飲み干したという中華そばや、人気の「ギルティ二郎」も。注文は席でスマホから。夜9時から朝6時、喫煙可。',
  });
}

// ================================================================ たぶっちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27080445/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '01:00']);
  put({
    id: 'osaka_tabucchan_sennichimae', name: 'たぶっちゃん (Tabucchan)', category: 'OMNI',
    lat: 34.668251, lng: 135.505099, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat, egg, cheese.',
    hours_raw: 'Mon–Fri 17:00–1:00; Sat 17:00–23:30; closed Sundays and holidays (Tabelog). Cash only; smoking allowed (Tabelog). Queues at peak times, but turnover is quick.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:00', '23:30']), 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-6-1, the Nippombashi side of Sennichimae; a few outdoor seats',
    cuisine: 'Tantanmen specialist · Sichuan street-style dan dan with minced meat, garlic chives and bean sprouts · yatai-style shoyu ramen with Sichuan pepper and thin noodles · raw egg, cheese and big cilantro toppings · ¥1,150 with cheese · 13 seats · cash only',
    website: null, gmaps: gm('たぶっちゃん 千日前'), menu_url: null,
    notes: "[Ramen · Sichuan tantanmen on the Nippombashi side] A 13-seat tantanmen shop with a few outdoor seats, dinner only, with queues that move fast. Ask the owner, who will steer you: in October 2026 the advice was to skip the Taiwan, Shanghai and Hong Kong options and order the Sichuan street-style dan dan, with a sharp chili-and-Sichuan-pepper heat over deep umami, under minced meat, garlic chives and bean sprouts. It cost ¥1,150 with cheese. Tame it with a raw egg or cheese, or go all in with extra cilantro. The yatai-style shoyu ramen also carries Sichuan pepper, over thin noodles. Portions are big, so come before you are too full. Cash only, smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 June 2014 (Tabelog)', background: 'Owner-run tantanmen and izakaya counter (reviews); no source names the owner.', philosophy: null, specialty: 'Sichuan street-style tantanmen.',
      anecdotes: [
        { text: '"The owner informed me that the options from Taiwan, Shanghai, and Hong Kong are not good. So, I ordered the Sichuan Street-style Dan Dan Noodles with cheese. The total came to JPY 1150, tax included." — October 2026.', source: R + 'B536952442/' },
        { text: '"I tried the Tabucchan Yatai-style Soy Sauce Ramen. The broth had a nice kick from the Sichuan pepper while still being flavorful, and the noodles were thin." — September 2026.', source: R + 'B536334337/' },
      ],
      japanese_sources_summary: '食べログ: たぶっちゃん、大阪市中央区千日前1-6-1、13席、月〜金17:00〜翌1:00、土17:00〜23:30、日祝定休、カード・電子マネー・QR決済不可、喫煙可、2014年6月14日開店、ジャンルは担々麺・居酒屋。2026年の口コミ(7〜10月): 濃厚でうま味のあるスープ、しっかりした辛さ、量が多い、平日でも少し行列だが回転が早い、醤油ベース、担々麺は2種類とトッピング多数、生卵でクリーミー、屋台風醤油ラーメン(花椒、細麺)、店主が台湾・上海・香港はおいしくないと教えてくれた、四川屋台風担々麺チーズ入り1,150円、ひき肉・ニラ・もやし、パクチー大盛りと生卵、外の席、鋭い辛さとうま味、卵やチーズでマイルドに。',
      confidence: 'medium', sources: [TB, R + 'B536952442/', R + 'B536334337/', R + 'B534418524/', R + 'B537974996/', R + 'B537381045/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other', 'shoyu'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles in the yatai shoyu (September 2026); "average" noodles in the dan dan (October 2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'ramen'],
      signature_bowl: 'Sichuan street-style dan dan noodles; ¥1,150 with cheese (October 2026).',
      chashu: null,
      notable_toppings: ['minced meat', 'garlic chives', 'bean sprouts', 'raw egg', 'cheese', 'cilantro'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Sennichimae\'s owner-steered tantanmen: sharp Sichuan street-style heat over deep umami, softened with raw egg or cheese.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B534418524/', '"The rich and flavorful broth is packed with umami."'],
        oiliness: [R + 'B537974996/', 'Oil not described directly — mid-scale (inferred).'],
        clarity: [R + 'B534418524/', 'Rich tantanmen broth — opaque (inferred).'],
        tare_strength: [R + 'B534418524/', '"Despite the bold seasoning, it was enjoyable until the very last bite."'],
        noodle_firmness: [R + 'B536952442/', '"The noodles were average" — mid-scale.'],
        aroma_punch: [R + 'B537974996/', '"A sharp spiciness spread throughout my mouth."'],
      },
      confidence: 'medium', sources: [R + 'B534418524/', R + 'B537974996/', R + 'B536952442/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash only; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536952442/', R + 'B536334337/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sichuan street-style dan dan noodles (with cheese)', '¥1,150', 'Noodles', 'no', 'no', 'October 2026.', 'sichuan_tantan'),
      it('', '', 'Yatai-style shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'yatai_shoyu'),
      it('', '', 'Toppings: raw egg, cheese, extra cilantro', '', 'Toppings', 'ask', 'ask', '2026.', 'toppings'),
    ] }, {
    cuisine: '担々麺の専門店・ひき肉、ニラ、もやしの四川屋台風担々麺・花椒の効いた細麺の屋台風醤油ラーメン・生卵、チーズ、パクチー大盛りのトッピング・チーズ入りで1,150円・13席・現金のみ',
    neighborhood: '千日前1-6-1、千日前の日本橋側。外の席も少し',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。ひき肉、卵、チーズ。',
    notes: '[ラーメン・日本橋寄りの四川担々麺] 外の席も少しある13席の担々麺の店で、夜だけの営業、行列ができても回転は早い。店主に聞くと教えてくれ、2026年10月には台湾、上海、香港は外して四川屋台風を、とのこと。唐辛子と花椒の鋭い辛さの奥に深いうま味があり、ひき肉、ニラ、もやしがのります。チーズ入りで1,150円。生卵やチーズでマイルドにするか、パクチー大盛りで攻めるか。屋台風の醤油ラーメンも花椒が効いた細麺。量が多いので、満腹になる前に来るのがおすすめ。現金のみ、喫煙可。',
  });
}

// ================================================================ 札幌らーめん獅子王 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27091623/'; const R = TB + 'dtlrvwlst/';
  const a = day(['18:00', '06:00']), w = day(['18:00', '08:00']), f = day(['18:00', '14:00']);
  put({
    id: 'osaka_sapporo_ramen_shishio_shinsaibashi', name: '札幌らーめん獅子王 心斎橋店 (Sapporo Ramen Shishio)', category: 'OMNI',
    lat: 34.670819, lng: 135.504525, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken broth, lard, chashu.',
    hours_raw: 'Mon, Tue, Sun 18:00–6:00 (L.O. 5:30); Wed–Thu 18:00–8:00 (L.O. 7:30); Fri, Sat and nights before holidays 18:00–14:00 next day (L.O. 13:30). Closed for cleaning on the 1st and 3rd Wednesdays (Tabelog). Ticket machine at the entrance.',
    hours: { 0: a, 1: a, 2: w, 3: w, 4: f, 5: f, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-3-21, NIPPO Tamayachō Kaikan 1F — near Kintetsu Nippombashi',
    cuisine: 'Sapporo miso ramen ¥1,170 · pork-bone and chicken-wing broth thickened with grated potato · lard cap keeps it piping hot · medium-thick curly yellow noodles · grilled chashu, menma, corn, green onion · ajitama +¥160 · spicy miso · 14-seat counter, open through the night',
    website: null, gmaps: gm('札幌らーめん獅子王 心斎橋店'), menu_url: null,
    notes: "[Ramen · Sapporo miso through the night in Higashi-Shinsaibashi] A 14-seat counter serving Sapporo-style miso ramen from 6 pm until morning, and on Friday and Saturday nights until 2 pm the next day. The broth is pork bone and chicken wings simmered long, with miso and a twist: grated potato thickens it to a velvety, potage-like body. A cap of lard keeps it scalding. Medium-thick, curly yellow noodles hold it well, topped with grilled chashu, menma, corn and green onion. The miso ramen was ¥1,170 and an ajitama ¥160 in October 2026. The spicy version isn't very spicy. Buy a ticket at the door. It gets crowded late, but turnover is quick.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 May 2016 (Tabelog)', background: 'Tabelog introduction: "Wild yet Mild… The Ultimate Sapporo Miso Ramen Makes Its Debut in Osaka", broth of pork bones and chicken wings, grated potato, medium-thick high-hydration curly noodles.', philosophy: null, specialty: 'Sapporo miso ramen.',
      anecdotes: [
        { text: '"The miso soup, based on pork and chicken bones, had grated potatoes mixed in, giving it a creamy, velvety texture. The noodles were medium-thick, curly, and had a delightful chewiness." — October 2026, miso ramen ¥1,170, ajitama ¥160.', source: R + 'B537464654/' },
        { text: '"A layer of lard on the surface helps retain the heat, keeping the soup at a high temperature… the addition of corn and garlic enhances the aftertaste." — September 2026.', source: R + 'B537006792/' },
      ],
      japanese_sources_summary: '食べログ: 札幌らーめん獅子王 心斎橋店、大阪市中央区東心斎橋2-3-21 NIPPO玉屋町会館1F、14席(カウンター)、月火日18:00〜翌6:00(L.O.5:30)、水木18:00〜翌8:00(L.O.7:30)、金土祝前日18:00〜翌14:00(L.O.13:30)、第1・第3水曜は清掃のため休み、禁煙、カード・電子マネー可、2016年5月20日開店。店の紹介: ワイルドなのにマイルド、豚骨と鶏ガラ(手羽)を長時間煮込んだスープ、刻み玉ねぎ、すりおろしたじゃがいもでとろみ、中太の多加水ちぢれ麺。2026年の口コミ(9〜10月): 入口の券売機、満席で少し待つ、濃厚でちぢれ麺、椎茸の酢、札幌らしい濃い味噌、ほのかな辛さ、中太麺、ラードで熱々、コーンとにんにく、焼きチャーシュー・メンマ・ねぎ・コーン、深夜2時、半熟玉子の味噌ラーメン、辛いものはあまり辛くない、近鉄日本橋駅近く、味噌ラーメン1,170円、味玉160円。',
      confidence: 'medium', sources: [TB, R + 'B537464654/', R + 'B537006792/', R + 'B536469550/', R + 'B536325580/', R + 'B537236610/'] },
    ramen: {
      broth_base: ['pork', 'chicken'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: ['lard'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'curly', hydration: 'high', handmade: false, notes: 'Medium-thick, high-hydration curly yellow noodles, firm and chewy (Tabelog; 2026).' },
      regional_style: ['Sapporo'], sub_genre: ['ramen'],
      signature_bowl: 'Miso ramen ¥1,170 (October 2026).',
      chashu: 'Grilled chashu with char, fat melting into the soup (September 2026).',
      notable_toppings: ['corn', 'menma', 'green onion', 'grated potato (in the soup)', 'lard'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken broth, lard.' },
      pantheon: 'Higashi-Shinsaibashi\'s Sapporo miso that runs till morning: a lard-capped, potato-thickened miso broth over curly yellow noodles, corn on top.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537464654/', 'Grated potato gives "a creamy, velvety texture".'],
        oiliness: [R + 'B537006792/', '"A layer of lard on the surface helps retain the heat."'],
        clarity: [R + 'B537006792/', '"High-temperature, high-viscosity soup" — opaque.'],
        tare_strength: [R + 'B537006792/', '"The miso has a higher salt concentration."'],
        noodle_firmness: [R + 'B537006792/', '"The noodles have a firm, chewy texture."'],
        aroma_punch: [R + 'B536469550/', '"A hint of spice"; corn and garlic in the aftertaste (' + R + 'B537006792/).'],
      },
      confidence: 'medium', sources: [R + 'B537464654/', R + 'B537006792/', R + 'B536469550/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-3-21 NIPPO玉屋町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目3番21号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537464654/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Miso ramen', '¥1,170', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
      it('', '', 'Seasoned egg topping', '¥160', 'Toppings', 'gf', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Spicy miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kara_miso'),
    ] }, {
    cuisine: '札幌味噌ラーメン1,170円・豚骨と鶏手羽のスープをすりおろしたじゃがいもでとろみ・ラードで熱々・中太のちぢれた黄色い麺・焼きチャーシュー、メンマ、コーン、ねぎ・味玉+160円・辛味噌・カウンター14席、夜通し営業',
    neighborhood: '東心斎橋2-3-21 NIPPO玉屋町会館1F、近鉄日本橋駅近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌のスープ。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏のスープ、ラード、チャーシュー。',
    notes: '[ラーメン・東心斎橋の夜通しの札幌味噌] 夕方6時から朝まで、金土の夜は翌日の昼2時まで開いている14席のカウンターで、札幌風の味噌ラーメン。豚骨と鶏手羽を長く煮込んだスープに味噌、そしてすりおろしたじゃがいもでポタージュのようなとろみ。ラードの膜で熱々のまま。中太のちぢれた黄色い麺がよく絡み、焼きチャーシュー、メンマ、コーン、ねぎ。2026年10月は味噌ラーメン1,170円、味玉160円。辛いものはあまり辛くないという声。入口の券売機で食券を。深夜は混みますが回転は早めです。',
  });
}

save();
