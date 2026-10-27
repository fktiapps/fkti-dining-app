// Osaka sweep (2-mile circle around Dotonbori), batch 43 — ramen phase, nearest first (all OMNI).
//   + しじみラーメン Shi43屋 難波店 (Lake Shinji shijimi shio; the Shinsaibashi shop is already recorded separately)
//   + 麺屋 たにぐち 難波店 (chicken paitan and shellfish ramen, lunch only)
//   + 博多 一風堂 堀江店 (Ippudo; Horie-only shoyu tonkotsu)
//   + 王道家直系 我道家 OSAKA本店 (Yokohama iekei from 7 am to 3 am, opened Dec 2024)
// Skipped: 27150739 我と俺 — a once-a-week pop-up run inside 我道家 OSAKA on its day off; no listed hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 43);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27150739', 'A once-a-week, day-off pop-up operated inside 我道家 OSAKA (27146560) since July 2025 (reviews); Tabelog lists no hours, so a reliable record is not possible.');

// ================================================================ しじみラーメン Shi43屋 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27087581/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '15:00'], ['20:00', '00:30']);
  put({
    id: 'osaka_shijimi_ramen_shi43ya_namba', name: 'しじみラーメン Shi43屋 難波店 (Shijimi Ramen Shi43ya Namba)', category: 'OMNI',
    lat: 34.66523, lng: 135.505387, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso versions.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shijimi-clam broth, oyster paste, egg on the clam rice.',
    hours_raw: 'Tue–Sun and holidays 12:00–15:00 and 20:00–0:30; closed Monday (Tabelog). Cash only — no cards or e-money (Tabelog). At the very back of a mixed-use building — hard to find.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nambasennichimae 1-22, Nippo Kawaramachi Kaikan 1F — 3 min from Nippombashi Stn',
    cuisine: 'Shijimi-clam ramen · rich shijimi shio ¥1,100 (large +¥100), also miso and shoyu · Yamato shijimi from Lake Shinji, Shimane · low fat, light · cold ramen with shijimi and oyster paste · clam rice with egg · limited dashi-keema mazesoba (spring 2026) · 8 seats',
    website: null, gmaps: gm('しじみラーメン Shi43屋 難波店'), menu_url: null,
    notes: "[Ramen · Lake Shinji shijimi-clam ramen near Nippombashi] The Namba branch of Shi43ya, a shijimi-clam ramen shop, hidden at the very back of a mixed-use building three minutes from Nippombashi. The No. 1 order is the rich shijimi shio (¥1,100, September 2026), made with plenty of Yamato shijimi from Lake Shinji in Shimane: light, low in fat and packed with clam umami. There are miso and shoyu versions too, and the clam rice with egg is popular. One reviewer counts it among Namba's best clam-broth bowls. In summer the cold ramen with shijimi turns rich once you stir in the oyster paste. Spring 2026 brought a dashi-keema mazesoba with the curry shop Niji no Hotoke. It's light enough to finish a night out; open until 12:30 am. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 September 2015 (Tabelog); the chain\'s Shinsaibashi-suji shop is recorded separately (osaka_shijimi_ramen_shi43ya)', background: 'Shi43ya, a shijimi-ramen shop with several locations (April 2026 review).', philosophy: null, specialty: 'Shijimi-clam ramen.',
      anecdotes: [
        { text: '"This ramen is made with plenty of Yamato shijimi clams from Lake Shinji in Shimane Prefecture, featuring low fat and low calories for a light taste." — June 2026, rich shijimi shio.', source: R + 'B530408592/' },
        { text: '"The broth is packed with shijimi essence… this is undoubtedly one of the best clam broth ramen spots in the Namba area." — September 2026, ¥1,100.', source: R + 'B535660751/' },
      ],
      japanese_sources_summary: '食べログ: しじみラーメン Shi43屋 難波店、大阪市中央区難波千日前1-22 日宝河原町会館1F、06-6636-4438、予約不可、火〜日・祝12:00〜15:00・20:00〜翌0:30、月曜休み、カード・電子マネー不可、8席(カウンター6、2人テーブル1)、2015年9月4日開店。2026年の口コミ(4〜9月): 飲んだ後の締め、しじみと牡蠣の冷やしラーメン(しじみのうま味は軽く、牡蠣のペーストを混ぜると濃厚に)、閉館したユニバースの近く、期間限定で人気カレー店「Niji no Hotoke」監修のだしキーマまぜそば、しじみだしのたれ、何度来たかわからない常連、人気No.1の濃厚しじみ塩ラーメン、味噌と醤油も、島根県宍道湖産の大和しじみたっぷりで低脂肪・低カロリー、しじみご飯の卵のせ、濃厚しじみラーメン(塩)1,100円と大盛り100円、難波で一番の貝出汁ラーメンという声、雑居ビルの奥で見つけにくい。',
      confidence: 'medium', sources: [TB, R + 'B530408592/', R + 'B535660751/', R + 'B514993735/', R + 'B526716377/', R + 'B527976646/', R + 'B530631043/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio', 'miso', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Rich shijimi shio ramen ¥1,100 (September 2026).',
      chashu: null,
      notable_toppings: ['shijimi clams', 'oyster paste (cold ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Nippombashi\'s hidden shijimi bowl: Lake Shinji clams in a light, low-fat shio.',
      profile: { richness: 2, oiliness: 1, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B530408592/', '"Low fat and low calories for a light taste."'],
        oiliness: [R + 'B530408592/', '"Low fat" — placed low.'],
        clarity: [R + 'B535660751/', 'Shijimi shio; clarity not described — mid-scale (inferred).'],
        tare_strength: [R + 'B535660751/', '"The broth is packed with shijimi essence" — mid-scale.'],
        noodle_firmness: [R + 'B535660751/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B527976646/', '"The rich umami of the shijimi clams is packed into this broth" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B530408592/', R + 'B535660751/', R + 'B527976646/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash only; hard to find.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前1-22 日宝河原町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前1番22号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535660751/', R + 'B530408592/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rich shijimi shio ramen', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'shio'),
      it('', '', 'Large size', '+¥100', 'Options', 'no', 'no', 'September 2026.', 'oomori'),
      it('', '', 'Shijimi miso ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'miso'),
      it('', '', 'Shijimi shoyu ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'shoyu'),
      it('', '', 'Cold ramen with shijimi and oyster paste', '', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Clam rice with egg', '', 'Rice', 'no', 'no', 'June 2026.', 'shijimi_gohan'),
    ] }, {
    cuisine: 'しじみラーメン・濃厚しじみ塩1,100円(大盛り100円)、味噌と醤油も・島根県宍道湖産の大和しじみ・低脂肪であっさり・しじみと牡蠣ペーストの冷やしラーメン・しじみご飯の卵のせ・期間限定のだしキーマまぜそば(2026年春)・8席',
    neighborhood: '難波千日前1-22 日宝河原町会館1F。日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌の味も。',
    vegan_detail: 'ヴィーガンではありません。しじみのスープ、牡蠣のペースト、しじみご飯に卵。',
    notes: '[ラーメン・日本橋近くの宍道湖のしじみラーメン] しじみラーメンの店Shi43屋の難波店で、日本橋駅から3分、雑居ビルのいちばん奥に隠れています。人気No.1は濃厚しじみ塩(1,100円、2026年9月)で、島根県宍道湖産の大和しじみをたっぷり使い、あっさり低脂肪で貝のうま味がぎっしり。味噌と醤油もあり、しじみご飯の卵のせも人気。難波でも指折りの貝出汁ラーメンという声も。夏はしじみの冷やしラーメンで、牡蠣のペーストを混ぜると濃厚に。2026年春はカレー店Niji no Hotokeとのだしキーマまぜそばも。飲んだ後の締めにちょうどいい軽さで、深夜0時半まで。現金のみ。',
  });
}

// ================================================================ 麺屋 たにぐち 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131979/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_taniguchi_namba', name: '麺屋 たにぐち 難波店 (Menya Taniguchi Namba)', category: 'OMNI',
    lat: 34.664283, lng: 135.499833, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, shellfish and pork broths, chashu.',
    hours_raw: 'Daily 11:30–15:00 (Tabelog); a reviewer notes the space is an izakaya at night. Cash only — no cards, e-money or QR (Tabelog). Order verbally; choose noodle type and some toppings for free.',
    hours: ALL(day(['11:30', '15:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-15-23 (Naniwa-ku) — about 200 m from Namba Stn',
    cuisine: 'Lunchtime ramen · frothy, creamy chicken-paitan ramen and special version · shellfish-broth ramen · limited chicken-pork-clam shio ¥1,050 · choose your noodles (ultra-thin to …) · free toppings · about 8 counter seats',
    website: null, gmaps: gm('麺屋 たにぐち 難波店'), menu_url: null,
    notes: "[Ramen · lunchtime chicken paitan and shellfish broth west of Namba] A lunch-only ramen counter of about eight seats a short walk west of Namba Station; one reviewer recalls it as an izakaya by night. The house bowl is a frothy, creamy chicken paitan with fragrant, tender chashu and crunchy onions. There's also a shellfish-broth ramen that one diner drained to the last drop, and a limited chicken, pork and clam shio (¥1,050) that was on the salty side. You choose your noodles, down to ultra-thin, and some toppings are free. The Tennoji shop is the sister branch. Service is by verbal order; one August 2026 visitor had a rough exchange with the kitchen staff. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 September 2022 (Tabelog); there is also a Tennoji branch (August 2026 review)', background: 'Menya Taniguchi.', philosophy: null, specialty: 'Chicken-paitan ramen.',
      anecdotes: [
        { text: '"The frothy, creamy broth was visually striking and had a smooth texture that made it incredibly delicious. The chashu was fragrant and tender." — July 2026.', source: R + 'B532122280/' },
        { text: '"I really loved that I could choose my own toppings and noodle type!… The broth made with shellfish was incredibly delicious, and I ended up finishing the whole bowl of soup." — June 2026.', source: R + 'B529765740/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 たにぐち 難波店、大阪市浪速区難波中1-15-23、06-6631-6639、予約不可、毎日11:30〜15:00、カード・電子マネー・QR不可、禁煙、2022年9月26日開店。2026年の口コミ(5〜10月): 夜は居酒屋だった記憶、定番の鶏白湯ラーメン、無料のトッピング、細麺とやや濃いスープ、トッピングと麺を選べる、貝だしのスープを完飲、泡立つクリーミーなスープ、香ばしくやわらかいチャーシュー、シャキシャキの野菜と玉ねぎ、天王寺店にも行った、カウンター8席ほど、限定の鶏・豚・貝の塩ラーメン1,050円(極細麺、塩辛め)、特製鶏白湯、口頭注文で接客に不満の声、チャーシューと味玉がおいしい。',
      confidence: 'medium', sources: [TB, R + 'B532122280/', R + 'B529765740/', R + 'B533456494/', R + 'B527365979/', R + 'B537985841/', R + 'B533818934/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Choice of noodles; thin straight and ultra-thin (May–August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chicken-paitan ramen (May–October 2026).',
      chashu: 'Fragrant, tender chashu (July 2026).',
      notable_toppings: ['onion', 'crunchy vegetables', 'seasoned egg', 'free toppings'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'A frothy chicken paitan at a lunch-only counter west of Namba, noodles your way.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537985841/', '"A rich and creamy flavor unique to chicken paitan."'],
        oiliness: [R + 'B533456494/', 'The limited shio "looked a bit oily" — mid-scale.'],
        clarity: [R + 'B532122280/', '"The frothy, creamy broth" — opaque.'],
        tare_strength: [R + 'B527365979/', '"The slightly rich broth"; the limited shio "quite salty" (' + R + 'B533456494/) — mid-scale.'],
        noodle_firmness: [R + 'B533456494/', 'Ultra-thin straight noodles chosen — mid-scale.'],
        aroma_punch: [R + 'B532122280/', 'Not described as pungent — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B532122280/', R + 'B537985841/', R + 'B533456494/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Verbal ordering (noodle choice asked).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-15-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目15番23号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533456494/', R + 'B527365979/'],
    price_note: 'Only the limited shio price was captured (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Chicken-paitan ramen', '', 'Ramen', 'no', 'no', 'May–October 2026.', 'toripaitan'),
      it('', '', 'Special chicken-paitan ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'tokusei'),
      it('', '', 'Shellfish-broth ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'kai'),
      it('', '', 'Chicken, pork and clam shio ramen (limited)', '¥1,050', 'Limited', 'no', 'no', 'August 2026.', 'shio'),
    ] }, {
    cuisine: '昼だけのラーメン・泡立つクリーミーな鶏白湯ラーメンと特製・貝だしのラーメン・限定の鶏・豚・貝の塩1,050円・麺を選べる(極細など)・無料のトッピング・カウンター8席ほど',
    neighborhood: '難波中1-15-23(浪速区)。なんば駅から約200m',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、貝や豚のスープ、チャーシュー。',
    notes: '[ラーメン・なんばの西の昼の鶏白湯と貝だし] なんば駅から少し西にある、昼だけ営業の8席ほどのラーメンのカウンターで、夜は居酒屋だったと記憶する人も。看板は泡立つクリーミーな鶏白湯で、香ばしくやわらかいチャーシューとシャキシャキの玉ねぎ。貝だしのラーメンもあり、スープまで飲み干した人も。限定の鶏・豚・貝の塩(1,050円)は塩辛めだったそう。麺は極細まで選べ、トッピングの一部は無料。天王寺に姉妹店があります。注文は口頭で、2026年8月には厨房のスタッフとのやりとりに不満を持った人も。現金のみ。',
  });
}

// ================================================================ 博多 一風堂 堀江店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012137/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ippudo_horie', name: '博多 一風堂 堀江店 (Hakata Ippudo Horie)', category: 'OMNI',
    lat: 34.67198, lng: 135.496729, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, back fat, chashu, meat miso.',
    hours_raw: 'Daily 11:00–23:00, open year-round (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and e-money accepted. Toppings such as bean sprouts, takana and pickled ginger are now ordered on the touch panel (August 2026). Lines at lunch; evenings quieter.',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-1-12 — 3 min from Yotsubashi Stn',
    cuisine: 'Hakata Ippudo tonkotsu · Akamaru Shinaji ¥980 with spicy miso and fragrant oil · Shiromaru · Horie-only shoyu tonkotsu ¥950 with back fat and garlic chives on thicker noodles · tantan tsukemen ¥1,090 (limited) · meat-miso tsukemen · Hakata fried rice (small) ¥430 · extra noodles ¥150 · 39 seats',
    website: 'http://www.ippudo.com/', gmaps: gm('一風堂 堀江店'), menu_url: null,
    notes: "[Ramen · Ippudo in Minami-Horie, with a branch-only shoyu tonkotsu] Hakata Ippudo's Horie branch, three minutes from Yotsubashi. The customers are mostly international, and one reviewer felt they had walked into an overseas Ippudo. The classic Akamaru Shinaji (¥980) adds spicy miso and fragrant oil to the rich tonkotsu; the Shiromaru is the plain version. Exclusive to this branch is a shoyu tonkotsu (¥950) with soy, back fat and garlic chives on slightly thicker noodles; pair it with a small Hakata fried rice (¥430). Tsukemen fans get thick noodles in a red-oil meat-miso dip, or a limited tantan version (¥1,090). Extra noodles are ¥150, with bean sprouts, takana and pickled ginger now ordered on the touch panel. Staff service is well drilled.",
    chef_bio: { chef_name: null, roles: [], origin: 'Horie branch of Ippudo (Tabelog)', background: 'Hakata Ippudo chain (ippudo.com).', philosophy: null, specialty: 'Hakata tonkotsu; Horie-only shoyu tonkotsu.',
      anecdotes: [
        { text: '"This unique Shoyu Tonkotsu from the Ippudo Horie branch features a rich tonkotsu broth with a punch of soy sauce and back fat, paired with slightly thicker noodles than usual for Ippudo." — July 2026, ¥950.', source: R + 'B520941764/' },
        { text: '"The richness of the tonkotsu broth combined with the spicy miso and fragrant oil creates a depth of flavor that I really enjoy, different from the Shiromaru." — August 2026, Akamaru Shinaji ¥980.', source: R + 'B534793354/' },
      ],
      japanese_sources_summary: '食べログ: 博多 一風堂 堀江店、大阪市西区南堀江1-1-12、06-6537-6255、予約不可、毎日11:00〜23:00、年中無休、カード(VISA、Master、JCB、AMEX、Diners)・電子マネー可、39席(カウンター21、テーブル18)、公式 ippudo.com。2026年の口コミ(7〜10月): 客もスタッフもほぼ外国人で海外の店のよう、肉味噌の太麺つけ麺(赤い辛味油)、昼は行列で夜は空いている、教育の行き届いた接客、白丸と赤丸、醤油とんこつ950円(堀江店限定、背脂、ニラの香り、やや太い麺)と博多炒飯(小)430円、期間限定の担々つけ麺1,090円、赤丸新味980円と替え玉150円、もやし・高菜・紅しょうがはタッチパネルで注文。',
      confidence: 'medium', sources: [TB, R + 'B520941764/', R + 'B534793354/', R + 'B476426325/', R + 'B531280831/', R + 'B509241914/', R + 'B537907178/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['fragrant oil', 'back fat (shoyu tonkotsu)'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Hakata thin noodles; slightly thicker on the Horie shoyu tonkotsu; thick noodles for tsukemen (2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Akamaru Shinaji ¥980; Horie-only shoyu tonkotsu ¥950 (July–August 2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['spicy miso (Akamaru)', 'garlic chives', 'bean sprouts', 'takana', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Ippudo in Horie: the Akamaru standard, plus a branch-only back-fat shoyu tonkotsu.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534793354/', '"The richness of the tonkotsu broth combined with the spicy miso and fragrant oil."'],
        oiliness: [R + 'B520941764/', 'Back fat on the shoyu tonkotsu — mid-scale.'],
        clarity: [R + 'B534793354/', 'Tonkotsu — opaque.'],
        tare_strength: [R + 'B520941764/', '"A punch of soy sauce" (shoyu tonkotsu) — mid-scale.'],
        noodle_firmness: [R + 'B531280831/', 'Tsukemen noodles "chewy but not overly elastic" — mid-scale.'],
        aroma_punch: [R + 'B520941764/', '"The aroma of garlic chives really whets the appetite" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534793354/', R + 'B520941764/', R + 'B531280831/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly international customers and staff (August 2026); touch-panel ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-1-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目1番12号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520941764/', R + 'B534793354/', R + 'B531280831/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Akamaru Shinaji', '¥980', 'Ramen', 'no', 'no', 'August 2026.', 'akamaru'),
      it('', '', 'Shiromaru', '', 'Ramen', 'no', 'no', 'November 2025.', 'shiromaru'),
      it('', '', 'Shoyu tonkotsu (Horie only)', '¥950', 'Ramen', 'no', 'no', 'July 2026.', 'shoyu_tonkotsu'),
      it('', '', 'Tantan tsukemen (limited)', '¥1,090', 'Tsukemen', 'no', 'no', 'July 2026.', 'tantan_tsuke'),
      it('', '', 'Hakata fried rice (small)', '¥430', 'Sides', 'no', 'no', 'July 2026.', 'chahan'),
      it('替玉', 'kaedama', 'Extra noodles', '¥150', 'Options', 'no', 'vegan', 'August 2026.', 'kaedama'),
    ] }, {
    cuisine: '博多一風堂のとんこつ・辛味噌と香味油の赤丸新味980円・白丸・堀江店限定の醤油とんこつ950円(背脂、ニラ、やや太い麺)・期間限定の担々つけ麺1,090円・肉味噌のつけ麺・博多炒飯(小)430円・替え玉150円・39席',
    neighborhood: '南堀江1-1-12。四ツ橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、炒飯。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、背脂、チャーシュー、肉味噌。',
    notes: '[ラーメン・南堀江の一風堂、店舗限定の醤油とんこつも] 四ツ橋駅から3分の博多一風堂 堀江店。客の多くは海外からで、海外の一風堂に迷い込んだようという声も。定番の赤丸新味(980円)は濃厚なとんこつに辛味噌と香味油、白丸はそのシンプル版。この店だけの醤油とんこつ(950円)は醤油、背脂、ニラで、麺はやや太め。博多炒飯(小、430円)と一緒に。つけ麺なら赤い辛味油の肉味噌のつけ汁に太麺、期間限定の担々版(1,090円)も。替え玉は150円で、もやし、高菜、紅しょうがは今はタッチパネルで注文。接客はよく教育されています。',
  });
}

// ================================================================ 王道家直系 我道家 OSAKA本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146560/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:00', '03:00']);
  put({
    id: 'osaka_gadouya_iekei_minatomachi', name: '王道家直系 我道家 OSAKA本店 (Oudouya Chokkei Gadouya OSAKA)', category: 'OMNI',
    lat: 34.66839, lng: 135.495587, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-chicken broth, smoked chashu, horumon.',
    hours_raw: 'Tue–Sun 7:00–3:00; closed Monday and the day after a public holiday (open on a holiday Monday, closed the next day) (Tabelog). Ticket machine; cash only. Queues of ~15 after midnight with a 40-minute wait (October 2026); a fast-pass system is mentioned. Self-service water.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minatomachi 1-3-1, Minatomachi River Place B1F — 1 min from JR Namba Stn',
    cuisine: 'Yokohama iekei, direct line of Oudouya · ramen ¥1,000 with two big slices of chashu, spinach and three nori · smoked chashu ramen and chashu rice · Oudou ramen with rice · famous horumon fry · kara-age · firmness, richness and oil to order · unlimited garlic, chopped ginger and mayonnaise at the table · open from 7 am',
    website: null, gmaps: gm('王道家直系 我道家 OSAKA本店'), menu_url: null,
    notes: "[Ramen · Oudouya-line iekei by JR Namba, open from 7 am] A Yokohama iekei shop in the basement of Minatomachi River Place, a minute from JR Namba, in the direct line of the famous Oudouya. Open December 2024, it runs from 7 am to 3 am and still has a 15-person queue after midnight. The ramen (¥1,000) is a pork-bone soy broth with the sharp soy edge of the style and pork-and-chicken umami, on chewy medium-thick noodles, with two big slices of chashu, spinach and three nori sheets. The smoked chashu is the star of the chashu ramen and chashu rice. Order firmness, richness and oil to taste, then load up on the table garlic, chopped ginger and mayonnaise. The fried horumon is a known side. One devotee calls it Osaka's No. 1 iekei; the saltiness varies visit to visit. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 December 2024 (Tabelog)', background: 'A direct-line (直系) shop of Oudouya, the Yokohama iekei lineage (shop name).', philosophy: null, specialty: 'Iekei ramen; smoked chashu.',
      anecdotes: [
        { text: '"The broth is a pork bone soy sauce base, with fine oil floating on the surface. You can taste the strong presence of soy sauce typical of the Iekei style, along with the umami of pork and chicken. The noodles are medium-thick with a chewy texture." — October 2026, ramen ¥1,000.', source: R + 'B537577238/' },
        { text: '"The large slices of chashu covering the bowl are infused with a rich smoky aroma… the extensive selection of table condiments, including unlimited garlic, chopped ginger, and mayonnaise." — October 2026.', source: R + 'B537901908/' },
      ],
      japanese_sources_summary: '食べログ: 王道家直系 我道家 OSAKA本店、大阪市浪速区湊町1-3-1 リバープレイスB1F、予約不可、火〜日7:00〜翌3:00、月曜・祝日の翌日休み(月曜が祝日なら営業し翌日休み)、カード・電子マネー・QR不可、禁煙、湊町リバープレイスの駐車場、2024年12月28日開店。2026年の口コミ(10月ほか): チャーシュー麺(大)を全部普通で、ほうれん草たっぷり、スープは日によって濃さが違う、朝早く営業、王道らーめんとライス(中)と名物ホルモン揚げ、スープの調整、大阪No.1の家系という声、塩辛いときもある、ラーメン並1,000円(黒い丼に金の縁、茶色の濃いスープ、大きなチャーシュー2枚、ほうれん草、のり3枚、豚骨醤油、細かい油、醤油の強いキレと豚と鶏のうま味、中太のもちもち麺)、深夜0時過ぎに15人待ちで約40分、王道家認定のラーメン(硬め・普通)、味玉、小ライス、唐揚げは売り切れ、水はセルフ、燻製チャーシュー麺とチャーシューご飯、ファストパス制度、卓上ににんにく・刻み生姜・マヨネーズ入れ放題、丼の縁の汚れが気になる。',
      confidence: 'medium', sources: [TB, R + 'B537577238/', R + 'B537901908/', R + 'B535027199/', R + 'B535602088/', R + 'B537584089/', R + 'B504130112/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick chewy noodles; firmness to order (October 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Ramen (regular) ¥1,000 (October 2026).',
      chashu: 'Two large smoked chashu slices; finely sliced chashu on the rice (October 2026).',
      notable_toppings: ['spinach', 'nori (three sheets)', 'seasoned egg', 'garlic, chopped ginger, mayonnaise (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-chicken broth.' },
      pantheon: 'JR Namba\'s Oudouya-line iekei: sharp soy, smoked chashu, and a queue from 7 am to 3 am.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535027199/', '"The flavor of the broth was rich, and the chashu was also tasty."'],
        oiliness: [R + 'B537577238/', '"With fine oil floating on the surface"; oil to order — placed high.'],
        clarity: [R + 'B537577238/', '"A rich brown broth" — opaque.'],
        tare_strength: [R + 'B537577238/', '"The strong presence of soy sauce typical of the Iekei style"; "sometimes it can be a bit too salty" (' + R + 'B535602088/).'],
        noodle_firmness: [R + 'B537577238/', '"The noodles are medium-thick with a chewy texture."'],
        aroma_punch: [R + 'B537901908/', '"Infused with a rich smoky aroma"; unlimited garlic and ginger.'],
      },
      confidence: 'medium', sources: [R + 'B537577238/', R + 'B537901908/', R + 'B535602088/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization called out; queue system.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区湊町1-3-1 リバープレイス B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区湊町一丁目3番1号 (go) 88m — River Place is a large complex; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537577238/', R + 'B537901908/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen (regular)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen (smoked chashu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Chashu rice', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_gohan'),
      it('', '', 'Fried horumon', '', 'Sides', 'no', 'no', 'October 2026.', 'horumon'),
      it('', '', 'Seasoned egg', '', 'Toppings', 'ask', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '王道家直系の横浜家系・大きなチャーシュー2枚、ほうれん草、のり3枚のラーメン1,000円・燻製チャーシュー麺とチャーシューご飯・王道らーめんとライス・名物のホルモン揚げ・唐揚げ・硬さ、濃さ、油を選べる・卓上ににんにく、刻み生姜、マヨネーズ入れ放題・朝7時から',
    neighborhood: '湊町1-3-1 湊町リバープレイスB1F。JR難波駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚と鶏のスープ、燻製チャーシュー、ホルモン。',
    notes: '[ラーメン・JR難波そばの王道家直系の家系、朝7時から] JR難波駅から1分、湊町リバープレイスの地下にある横浜家系の店で、名店・王道家の直系。2024年12月開店、朝7時から翌朝3時まで営業し、深夜0時過ぎでも15人の行列。ラーメン(1,000円)は豚骨醤油で、家系らしい醤油のキレと豚と鶏のうま味、もちもちの中太麺に、大きなチャーシュー2枚、ほうれん草、のり3枚。主役は燻製チャーシューで、チャーシュー麺とチャーシューご飯で。硬さ、濃さ、油を好みで頼み、卓上のにんにく、刻み生姜、マヨネーズをたっぷり。ホルモン揚げも名物。大阪No.1の家系という熱心なファンも、塩加減は日によって違うという声も。現金のみ。',
  });
}

save();
