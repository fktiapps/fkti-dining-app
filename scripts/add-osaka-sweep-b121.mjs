// Osaka sweep (2-mile circle around Dotonbori), batch 121 — ramen phase (all OMNI).
//   + 北浜 ニカク食堂 (Niigata-style back-fat niboshi chuka soba on thick curly noodles; reopened March 2026; Koraibashi)
//   + 九条まんてん (clear jidori-and-kombu shoyu and shio, summer chilled bowls; one-person counter; Kujo) — mom_and_pop
//   + 麺屋 TAKA (clear niboshi-chicken chuka soba on homemade flat noodles, TKM; one-person; Tosabori) — mom_and_pop
//   + 豚になる (Jiro-style ramen, soupless ramen and cold TKM, no call needed; Edobori)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 121);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 北浜 ニカク食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27155075/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:30', '00:30']); const SA = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_kitahama_nikaku_shokudo', name: '北浜 ニカク食堂 (Kitahama Nikaku Shokudo)', category: 'OMNI',
    lat: 34.689275, lng: 135.509037, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare; naruto fish cake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork clear soup and niboshi; back fat; pork chashu.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:30–00:30; Sat and public holidays 11:30–15:00 and 17:30–21:00; closed Sun (Tabelog). Reopened 2 March 2026 under a new name and menu (October 2026 review). Cards (VISA, Master), IC cards and iD accepted; no QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Koraibashi 1-3-2 — 5 min from Kitahama Stn',
    cuisine: 'Niigata-style back-fat niboshi chuka soba · ajitama Niigata back-fat niboshi chuka soba ¥1,140: pork clear soup with strong niboshi and soy, plenty of back fat, minced onion, iwanori seaweed, thick wavy low-hydration noodles cooked a bit firm, a large slice of pork-shoulder chashu · chuka soba ¥890, light or rich ("mattari"): seafood-soy on pork bone with back fat, pork-belly chashu, white negi, menma, naruto · thick curly noodles from Menya Teigaku in Kyoto · grilled soy egg +¥150 · chashu-egg rice bowl ¥500 · 13 counter seats',
    website: null, gmaps: gm('北浜 ニカク食堂'), menu_url: null,
    notes: "[Ramen · Niigata-style back-fat niboshi chuka soba in Kitahama] A thirteen-seat counter a few minutes from Kitahama, reopened in March 2026 with a new name and menu, serving a style that one diner calls hard to find in Osaka: Niigata back-fat niboshi chuka soba. The bowl (¥1,140 with a seasoned egg) is a pork clear soup with a strong niboshi hit and soy, buried in back fat, minced onion and iwanori seaweed, over thick, wavy, low-hydration noodles you chew more than slurp, under a big, tender slice of pork-shoulder chashu. A plainer chuka soba (¥890) comes light or rich. Add the chashu-egg rice bowl (¥500). The broth can run salty; one diner couldn't finish it one day. Open until 00:30 on weeknights. Cards and IC accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Reopened 2 March 2026 under this name, formerly "Niboshi Chuka Soba Kourai no Hishou" (October 2026 review).', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Niigata-style back-fat niboshi chuka soba.',
      anecdotes: [
        { text: '"The broth is made from pork clear soup and niboshi (dried sardines) with a soy sauce base. Topped with generous amounts of backfat, minced onions, and black seaweed… The noodles are thick, wavy, and low-hydration, providing a chewy texture." — September 2026, ajitama back-fat niboshi chuka soba ¥1,140.', source: R + 'B524619698/' },
        { text: '"I took a sip of the clear broth topped with a generous amount of back fat… It has a seafood soy sauce flavor based on pork bone. The distinctive noodles are thick, curly noodles made by \'Menya Teigaku\' in Kyoto." — October 2026, chuka soba ¥890.', source: R + 'B538124254/' },
      ],
      japanese_sources_summary: '食べログ: 北浜 ニカク食堂、大阪市中央区高麗橋1-3-2、北浜駅から高麗橋経由で徒歩5分、月〜金 11:30〜15:00・17:30〜翌0:30、土・祝 11:30〜15:00・17:30〜21:00、日休み、カード(VISA、Master)・交通系IC・iD可、QR不可、カウンター13席。口コミ(2026年3〜10月): 味玉新潟背脂煮干し中華そば1,140円とチャーシュー玉子丼500円、豚の清湯と煮干しの醤油、たっぷりの背脂、刻み玉ねぎ、岩のり、太い縮れの低加水麺、肩ロースの大きなチャーシュー、塩辛い日もあったという声、大阪では珍しい、中華そばのまったり、新潟ラーメン、2026年3月2日に「Niboshi Chuka Soba Kourai no Hishou」から店名とメニューを変えて再開、中華そば(並)890円、あっさりとこってり、豚バラのチャーシュー、白ねぎ、メンマ、なると、豚骨ベースの魚介醤油、京都のMenya Teigakuの太い縮れ麺、焼き醤油玉子150円。',
      confidence: 'medium', sources: [TB, R + 'B524619698/', R + 'B536618911/', R + 'B536662301/', R + 'B537412079/', R + 'B538124254/'] },
    ramen: {
      broth_base: ['pork', 'niboshi'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: 'low', handmade: false, notes: 'Thick curly low-hydration noodles from Menya Teigaku, cooked a bit firm (2026).' },
      regional_style: [], sub_genre: ['niboshi', 'ramen'],
      signature_bowl: 'Ajitama Niigata back-fat niboshi chuka soba, ¥1,140 (September 2026).',
      chashu: 'Large, tender pork-shoulder chashu; pork belly in the chuka soba (2026).',
      notable_toppings: ['back fat', 'minced onion', 'iwanori seaweed', 'grilled soy egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and niboshi.' },
      pantheon: 'Kitahama\'s rare-for-Osaka Niigata back-fat niboshi on thick, chewy curly noodles.',
      profile: { richness: 4, oiliness: 4, clarity: 3, tare_strength: 4, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B524619698/', '"A deep richness that is delicious" — placed high.'],
        oiliness: [R + 'B524619698/', '"Generous amounts of backfat" — placed high.'],
        clarity: [R + 'B538124254/', '"The clear broth topped with a generous amount of back fat" — mid-scale.'],
        tare_strength: [R + 'B536662301/', '"The saltiness is quite strong"; "quite salty" one day (B524619698) — placed high.'],
        noodle_firmness: [R + 'B524619698/', '"It feels like you\'re really chewing through the noodles" — top of scale.'],
        aroma_punch: [R + 'B524619698/', '"The flavor of the niboshi is strong" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B524619698/', R + 'B538124254/', R + 'B536662301/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; cards and IC accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高麗橋1-3-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reopened March 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高麗橋一丁目3番2号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524619698/', R + 'B538124254/'],
    price_note: 'Prices from March–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajitama Niigata back-fat niboshi chuka soba', '¥1,140', 'Ramen', 'no', 'no', 'September 2026.', 'niigata'),
      it('', '', 'Chuka soba, light or rich', '¥890', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Grilled soy egg', '+¥150', 'Toppings', 'no', 'no', 'October 2026.', 'yaki_tamago'),
      it('', '', 'Chashu-egg rice bowl', '¥500', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
    ] }, {
    cuisine: '新潟風の背脂煮干し中華そば・味玉新潟背脂煮干し中華そば1,140円: 煮干しが強い豚の清湯に醤油、たっぷりの背脂、刻み玉ねぎ、岩のり、やや固めに茹でた太い縮れの低加水麺、大きな肩ロースのチャーシュー・中華そば890円、あっさりかまったり: 豚骨ベースの魚介醤油に背脂、豚バラのチャーシュー、白ねぎ、メンマ、なると・京都のMenya Teigakuの太い縮れ麺・焼き醤油玉子+150円・チャーシュー玉子丼500円・カウンター13席',
    neighborhood: '中央区高麗橋1-3-2。北浜駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、なると。',
    vegan_detail: 'ヴィーガンではありません。豚の清湯と煮干し、背脂、豚のチャーシュー。',
    notes: '[ラーメン・北浜、新潟風の背脂煮干し中華そば] 北浜から数分のカウンター13席の店で、2026年3月に店名とメニューを変えて再開、大阪では珍しいという新潟の背脂煮干し中華そばを出す。一杯(味玉入り1,140円)は煮干しがガツンと効く豚の清湯に醤油、背脂、刻み玉ねぎ、岩のりがたっぷり、すするより噛む太く縮れた低加水麺に、大きく柔らかい肩ロースのチャーシュー。シンプルな中華そば(890円)はあっさりかまったりで。チャーシュー玉子丼(500円)も。スープが塩辛い日もあり、飲み切れなかったという声も。平日は深夜0時半まで。カード、IC可。',
  });
}

// ================================================================ 九条まんてん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27136832/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00']; const WD = day(L, ['18:00', '21:00']); const WE = day(L, ['17:00', '21:00']);
  put({
    id: 'osaka_kujo_manten', name: '九条まんてん (Kujo Manten)', category: 'OMNI',
    lat: 34.675078, lng: 135.476599, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: jidori chicken broth with seafood dashi; chashu; egg.',
    hours_raw: 'Tue, Wed, Fri 11:00–15:00 and 18:00–21:00; Thu 11:00–15:00; Sat–Sun 11:00–15:00 and 17:00–21:00; closed Mon; hours may change (Tabelog). Usually run by one person, so waits when busy (August 2026). Order and pay in cash first (2026). No cards, e-money or QR (Tabelog). Specials announced by SMS.',
    hours: { 1: WD, 2: WD, 3: day(L), 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kujo 1-11-17 (Nishi-ku), a little hard to find — 3 min from Kujo Stn',
    cuisine: 'Clear-broth shoyu and shio · shoyu ramen: Tajima chicken and Tanba black chicken with real kombu and a delicate seafood dashi, firm straight noodles mixed in Kyoto (Teigaku), pink rare chashu · shio ramen · summer chilled shio ramen ¥1,200: medium-thick straight noodles, rare pork and chicken chashu, chopped onion, half an egg, yuzu, tomato ice cubes · weekend limited chilled hamo and sudachi ramen ¥1,200 · tamago-kake gohan with a branded egg; rice bowl · 5 counter seats and two tables',
    website: null, gmaps: gm('九条まんてん'), menu_url: null,
    notes: "[Ramen · clear jidori shoyu and shio, and inventive summer chilled bowls, by Kujo] A small, slightly hidden counter three minutes from Kujo, open since 2023 and usually run by one cook who chats with guests and has adjusted a recipe in response to guest feedback. The broth is a clear soup of Tajima chicken and Tanba black chicken with real kombu and a delicate seafood dashi; the shoyu ramen is deep enough to drink to the last drop, with firm straight noodles and pink rare chashu. Pair it with the tamago-kake gohan, made with a branded egg. Summer brings the stars: a chilled shio ramen (¥1,200) with tomato ice cubes and two chashu, and a weekend chilled hamo ramen with sudachi, best tried on the spoon first. With one person cooking, expect waits when it's busy. Order and pay in cash up front.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 June 2023 (Tabelog)', background: 'Clear-broth ramen shop usually run by one person (August 2026 review; Tabelog).', philosophy: 'Tajima chicken, Tanba black chicken and real kombu; noodles made with a Kyoto (Teigaku) vacuum mixer (August 2026 review).', specialty: 'Clear-broth shoyu and shio; chilled ramen.',
      anecdotes: [
        { text: '"The broth, rich with the concentrated umami of free-range chicken, combined with a delicate seafood dashi and the depth of soy sauce, creates an incredibly delicious experience… The beautifully pink rare chashu is moist and tender." — August 2026, shoyu ramen.', source: R + 'B533165493/' },
        { text: '"It featured medium-thick straight noodles, three slices of rare chashu, three slices of chicken chashu, finely chopped onions, half a seasoned egg, three tomato-flavored ice cubes, menma, green onions, and yuzu." — August 2026, chilled shio ramen ¥1,200.', source: R + 'B528615162/' },
      ],
      japanese_sources_summary: '食べログ: 九条まんてん、大阪市西区九条1-11-17、中央線九条駅から徒歩3分、火・水・金 11:00〜15:00・18:00〜21:00、木 11:00〜15:00、土日 11:00〜15:00・17:00〜21:00、月休み、カード・電子マネー・QR不可、12席(カウンター5、テーブル)、2023年6月24日開店。口コミ(2026年7〜9月): 週末限定の鱧とすだちの冷やし1,200円(SMSで告知)、前払い、鱧の出汁、すだちはまずレンゲで、スープの氷、店主との会話、冷やし塩ラーメン1,200円(中太ストレート麺、レアチャーシュー、鶏チャーシュー、刻み玉ねぎ、味玉半分、トマトの氷、メンマ、ねぎ、柚子)、声を受けてトマトの濃さを調整、普段は一人で営業で混むと時間がかかる、清湯スープとこだわりの麺、醤油ラーメンと卵かけご飯(銘柄卵「Musou Maru」)、地鶏の旨みと繊細な魚介出汁、ピンクのレアチャーシュー、固めのストレート麺、現金のみ、冷やし塩は限定で売り切れ、塩ラーメンと丼、少し見つけにくい、但馬の鶏、丹波の黒鶏、本物の昆布、京都のTeigakuの真空ミキサー。',
      confidence: 'medium', sources: [TB, R + 'B528615162/', R + 'B532705844/', R + 'B533165493/', R + 'B534041012/', R + 'B535542910/', R + 'B535669643/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Firm straight noodles; medium-thick straight in the chilled shio (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen; summer chilled shio ramen ¥1,200 (2026).',
      chashu: 'Pink rare pork chashu and chicken chashu (August 2026).',
      notable_toppings: ['chopped onion', 'yuzu', 'tomato ice cubes (chilled)', 'tamago-kake gohan'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Kujo\'s one-cook clear jidori-and-kombu shoyu, with inventive chilled bowls in summer.',
      profile: { richness: 3, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533165493/', '"Rich with the concentrated umami of free-range chicken" yet clear — mid-scale.'],
        oiliness: [R + 'B534041012/', '"With its light ingredients and broth" — placed low.'],
        clarity: [R + 'B532705844/', 'A shop that "specializes in clear broth ramen" — top of scale.'],
        tare_strength: [R + 'B533165493/', '"The depth of soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B533165493/', '"The firm, straight noodles" — placed high.'],
        aroma_punch: [R + 'B533165493/', '"A refined aroma of dashi wafts through the air" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B533165493/', R + 'B528615162/', R + 'B532705844/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chatty owner; order verbally and pay first (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区九条1-11-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区九条一丁目11番17号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528615162/', R + 'B533165493/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu'),
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shio'),
      it('', '', 'Chilled shio ramen (summer, limited)', '¥1,200', 'Limited', 'no', 'no', 'August 2026.', 'hiyashi_shio'),
      it('', '', 'Chilled hamo and sudachi ramen (weekend, limited)', '¥1,200', 'Limited', 'no', 'no', 'August 2026.', 'hamo'),
      it('', '', 'Tamago-kake gohan', '', 'Rice', 'ask', 'ask', 'August 2026.', 'tkg'),
    ] }, {
    cuisine: '清湯の醤油と塩・醤油ラーメン: 但馬の鶏と丹波の黒鶏に本物の昆布と繊細な魚介出汁、京都(Teigaku)で練った固めのストレート麺、ピンクのレアチャーシュー・塩ラーメン・夏の冷やし塩ラーメン1,200円: 中太ストレート麺、豚と鶏のレアチャーシュー、刻み玉ねぎ、味玉半分、柚子、トマトの氷・週末限定の鱧とすだちの冷やし1,200円・銘柄卵の卵かけご飯、丼・カウンター5席とテーブル2卓',
    neighborhood: '西区九条1-11-17、やや見つけにくい。九条駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と塩のたれ。',
    vegan_detail: 'ヴィーガンではありません。地鶏のスープと魚介出汁、チャーシュー、卵。',
    notes: '[ラーメン・九条駅近く、地鶏の清湯の醤油と塩、夏の独創的な冷やし] 九条から3分、少し隠れた小さなカウンターの店で、2023年開店、ふだんは一人で切り盛りし、客と話しながら声を受けて味を調整することも。スープは但馬の鶏と丹波の黒鶏に本物の昆布と繊細な魚介出汁の清湯で、醤油ラーメンは最後の一滴まで飲みたくなる深さ、固めのストレート麺とピンクのレアチャーシュー。銘柄卵の卵かけご飯と一緒に。夏が見せ場: トマトの氷と2種のチャーシューの冷やし塩ラーメン(1,200円)と、すだちはまずレンゲで試すのがおすすめの週末限定の鱧の冷やし。一人で作るので混むと待つことも。注文と現金での支払いは先に。',
  });
}

// ================================================================ 麺屋 TAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27090920/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_menya_taka_tosabori', name: '麺屋 TAKA (Menya TAKA)', category: 'OMNI',
    lat: 34.685696, lng: 135.484884, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; soy and shio tare; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone, pork-bone and niboshi broth; chashu; eggs.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:30–14:30 and 18:00–22:00; closed Wed; occasionally closes early; hours may change (Tabelog). Run by one person; ticket machine; no lunch-specific menu; noodle firmness cannot be chosen (2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tosabori 3-3-21 (Nishi-ku) — 6 min from Awaza Stn exit 9',
    cuisine: 'Clear niboshi-chicken chuka soba on homemade noodles · chuka soba ¥1,000: clear soy broth of chicken bones, pork bones and niboshi, homemade medium flat straight high-hydration noodles, four thin slices of chashu, chopped onion, green onion · shio ramen with two kinds of chashu (¥930 in 2024) · shoyu with seasoned egg, large available · TKM (tamago-kake men) ¥1,000: flat noodles dressed in niboshi broth with two eggs · tantanmen · mazemen · fried rice ¥500 · "Hashi Niku Don" mini rice bowl · 11 seats at an L-shaped counter',
    website: null, gmaps: gm('麺屋 TAKA 土佐堀'), menu_url: null,
    notes: "[Ramen · clear niboshi chuka soba on homemade flat noodles, by Awaza] A one-person, eleven-seat L-shaped counter near Awaza, open since 2016, where \"simple is best\": the chuka soba (¥1,000) is a beautifully clear soy broth of chicken bones, pork bones and niboshi on homemade flat, straight, high-hydration noodles that are smooth with a wheat aroma, topped with thin chashu and chopped onion, which reminds one diner of Hachioji ramen. Add pepper to sharpen it. For a change, the TKM mixes those flat noodles with niboshi broth and two eggs, and there's a shio, a mazemen and a tantanmen. Fried rice (¥500) and a small rice bowl round it out. Firmness can't be chosen, and the shop sometimes closes early. Cash only; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 March 2016 (Tabelog)', background: 'Ramen counter run by one person (June 2026 review; Tabelog).', philosophy: null, specialty: 'Chuka soba; homemade noodles.',
      anecdotes: [
        { text: '"Soup: A clear soy sauce broth made from chicken bones, pork bones, and niboshi (dried sardines). The noodles are medium-sized, flat, and straight with a smooth texture." — May 2026, chuka soba ¥1,000.', source: R + 'B311127798/' },
        { text: '"The noodles are homemade, medium-thick, and flat. They have a lovely wheat aroma and a smooth texture… With chopped onions mixed in, it might remind you of Hachioji ramen." — August 2026.', source: R + 'B534537449/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 TAKA、大阪市西区土佐堀3-3-21、阿波座から491m、月・火・木〜日 11:30〜14:30・18:00〜22:00、水休み、早じまいあり、カード・電子マネー・QR不可、カウンター11席、2016年3月14日開店。口コミ(2024年10月〜2026年8月): 中華そば1,000円、阿波座駅9番出口から徒歩約6分、鶏ガラ・豚骨・煮干しの澄んだ醤油スープ、中くらいの平打ちストレート麺、硬さは選べない、薄いチャーシュー4枚、刻み玉ねぎ、ねぎ、L字のカウンター約10席、多加水のなめらかな麺、玉子かけ麺(TKM)1,000円(卵2個、煮干しの香り)、担々麺、まぜ麺、塩930円(2024年)、2種のチャーシュー、中華そばと炒飯500円、ランチメニューなし、ワンオペ、ミニ丼は「Hashi Niku Don」に、醤油ラーメン大盛りに味玉、やさしいスープ、シンプルが一番、煮干しのあっさりスープ、胡椒で味が締まる、自家製の中太平打ち麺、小麦の香り、刻み玉ねぎで八王子ラーメンのよう。',
      confidence: 'medium', sources: [TB, R + 'B311127798/', R + 'B488549516/', R + 'B530581092/', R + 'B532180965/', R + 'B533266042/', R + 'B534537449/'] },
    ramen: {
      broth_base: ['chicken', 'pork', 'niboshi'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: 'high', handmade: true, notes: 'Homemade medium flat straight high-hydration noodles; firmness not selectable (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba', 'niboshi'],
      signature_bowl: 'Chuka soba, ¥1,000 (May–June 2026).',
      chashu: 'Thin chashu, four slices (May 2026); two kinds in the shio (2024).',
      notable_toppings: ['chopped onion', 'green onion', 'pepper'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken, pork and niboshi.' },
      pantheon: 'Awaza\'s one-person \'simple is best\' clear niboshi chuka soba on homemade flat noodles.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534537449/', '"Light and refreshing" — placed low.'],
        oiliness: [R + 'B533266042/', '"The broth was light" — placed low.'],
        clarity: [R + 'B311127798/', '"The beautiful clear broth" — top of scale.'],
        tare_strength: [R + 'B530581092/', '"The soy sauce has a rich flavor" — mid-scale.'],
        noodle_firmness: [R + 'B530581092/', '"The noodles have a nice chewiness"; smooth (B311127798) — mid-scale.'],
        aroma_punch: [R + 'B488549516/', '"The aroma of niboshi burst forth" (TKM) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B311127798/', R + 'B534537449/', R + 'B530581092/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; one-person counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区土佐堀3-3-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区土佐堀三丁目3番21号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B311127798/', R + 'B488549516/', R + 'B530581092/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥1,000', 'Ramen', 'no', 'no', 'June 2026.', 'chuka'),
      it('', '', 'Shio ramen', '¥930', 'Ramen', 'no', 'no', 'October 2024.', 'shio'),
      it('', '', 'TKM (tamago-kake men)', '¥1,000', 'Mazesoba', 'no', 'no', 'April 2026.', 'tkm'),
      it('', '', 'Tantanmen', '', 'Ramen', 'no', 'no', 'October 2025.', 'tantan'),
      it('', '', 'Fried rice', '¥500', 'Rice', 'no', 'no', 'June 2026.', 'chahan'),
    ] }, {
    cuisine: '自家製麺の澄んだ煮干しと鶏の中華そば・中華そば1,000円: 鶏ガラ、豚骨、煮干しの澄んだ醤油スープ、自家製の中くらいの平打ちストレート多加水麺、薄いチャーシュー4枚、刻み玉ねぎ、ねぎ・2種のチャーシューの塩ラーメン(2024年は930円)・味玉の醤油、大盛りも・TKM(玉子かけ麺)1,000円: 煮干しのスープをまとう平打ち麺に卵2個・担々麺・まぜ麺・炒飯500円・「Hashi Niku Don」のミニ丼・L字のカウンター11席',
    neighborhood: '西区土佐堀3-3-21。阿波座駅9番出口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。小麦の自家製麺、醤油と塩のたれ、炒飯。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラ、豚骨、煮干しのスープ、チャーシュー、卵。',
    notes: '[ラーメン・阿波座近く、自家製平打ち麺の澄んだ煮干し中華そば] 阿波座近く、一人で営むL字のカウンター11席の店で、2016年開店、まさに「シンプルが一番」: 中華そば(1,000円)は鶏ガラ、豚骨、煮干しの美しく澄んだ醤油スープに、小麦の香るなめらかな自家製の平打ちストレート多加水麺、薄いチャーシューと刻み玉ねぎで、八王子ラーメンを思い出したという声。胡椒で味を締めて。気分を変えるならTKMで、平打ち麺に煮干しのスープと卵2個を混ぜて。塩、まぜ麺、担々麺も。炒飯(500円)と小さな丼も。麺の硬さは選べず、早じまいの日も。現金のみ、水曜休み。',
  });
}

// ================================================================ 豚になる
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27145934/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_buta_ni_naru_edobori', name: '豚になる (Buta ni Naru)', category: 'OMNI',
    lat: 34.689379, lng: 135.492899, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare; mayonnaise topping.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth; back fat; pork chashu; egg.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:30) and 18:00–22:00 (L.O. 21:30); hours may change (Tabelog). Buy a ticket and enter in order; no Jiro-style call needed (2026). Rarely a wait at lunch (September 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Edobori 1-23-27 (Nishi-ku) — 378 m from Higobashi Stn',
    cuisine: 'Jiro-style ramen, beginner-friendly · ramen 200 g: sharp soy, sweetness from noodles and vegetables, unseasoned back fat, firm, lean pork; vegetables up to double-extra; garlic and fat to order · soupless ramen 200 g ¥1,100 · cold TKM (tamago-kake men) · soupless tantanmen with meat sauce, onsen egg and bok choy · toppings incl. mayonnaise, pork scraps, thick chashu, raw egg, black pepper · chashu rice set; extra rice · 13 counter seats',
    website: null, gmaps: gm('豚になる 江戸堀'), menu_url: null,
    notes: "[Ramen · beginner-friendly Jiro-style ramen in Edobori] A thirteen-seat counter near Higobashi, open since November 2024, serving Jiro-style ramen without the rituals: you buy a ticket, enter in order and skip the topping call. The standard 200 g bowl has a sharp soy flavor balanced by the sweetness of noodles and vegetables, which go up to double-extra; the fat is unseasoned, so eat it with the noodles, and the pork is firm and lean. The soupless ramen (¥1,100) is a repeat diner's order, the cold TKM coats the noodles in egg, and the soupless tantanmen with an onsen egg is properly spicy. Pile on mayonnaise, pork scraps or a raw egg if you want the full effect. Lunch rarely has a wait. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 November 2024 (Tabelog)', background: 'Jiro-style ramen shop; Instagram @butaninaru1 (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Jiro-style ramen; soupless ramen.',
      anecdotes: [
        { text: '"The flavor is characterized by a sharp soy sauce taste. The sweetness from the noodles and vegetables balances it out nicely. The fat is unseasoned, so it\'s better enjoyed together with the noodles and broth." — September 2026, ramen 200 g.', source: R + 'B536699161/' },
        { text: '"It operates on a ticket system, has no special ordering calls, making it beginner-friendly." — October 2026, soupless ramen 200 g ¥1,100.', source: R + 'B524862436/' },
      ],
      japanese_sources_summary: '食べログ: 豚になる、大阪市西区江戸堀1-23-27、肥後橋から378m、毎日11:00〜15:00(L.O. 14:30)・18:00〜22:00(L.O. 21:30)、カード・電子マネー・QR不可、カウンター13席、2024年11月24日開店。口コミ(2025年9月〜2026年10月): 土佐堀の二郎系、汁なし200g 1,100円、食券制でコールなし、初心者向け、もちもちの麺、山盛りのもやし、マヨネーズ、豚の切れ端、厚いチャーシュー、生卵、黒胡椒、汁なし担々麺(肉味噌、温泉卵、青梗菜)、にんにくなし・野菜増し・脂増し、ロット制はなく食券を買った順、昼はほぼ待たない、麺は標準200g、野菜はマシマシまで、醤油のキレ、麺と野菜の甘み、脂は味付けなし、豚は小さめで脂が少なく締まった食感、チャーシューご飯セット、冷やしTKM、追い飯。',
      confidence: 'medium', sources: [TB, R + 'B524862436/', R + 'B534050393/', R + 'B536699161/', R + 'B536951626/', R + 'B537399209/', R + 'B538193858/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, firm, chewy noodles, 200 g standard (2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'mazesoba_aburasoba', 'shiru_nashi_tantanmen'],
      signature_bowl: 'Ramen 200 g; soupless ramen 200 g ¥1,100 (2026).',
      chashu: 'Firm, lean pork, smallish by default; thick chashu topping (2026).',
      notable_toppings: ['bean sprouts', 'back fat', 'garlic', 'mayonnaise', 'raw egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth; back fat.' },
      pantheon: 'Edobori\'s no-call Jiro bowl: sharp soy, firm lean pork and vegetables up to double-extra.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B538193858/', '"The flavor was rich" — placed high.'],
        oiliness: [R + 'B536699161/', 'Extra back fat, unseasoned — placed high.'],
        clarity: [R + 'B534050393/', 'Jiro-style pork broth — bottom of scale.'],
        tare_strength: [R + 'B536699161/', '"A sharp soy sauce taste" — placed high.'],
        noodle_firmness: [R + 'B538193858/', '"The noodles were firm"; "chewy" (B524862436) — placed high.'],
        aroma_punch: [R + 'B534050393/', 'Black pepper "wild Jiro-style flair"; garlic to order — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536699161/', R + 'B524862436/', R + 'B538193858/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'No Jiro-style call; ticket machine (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-23-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目23番27号 (go) 4m; ~17 m from Dakishimetai; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524862436/', R + 'B536699161/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ramen (200 g)', '', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Soupless ramen (200 g)', '¥1,100', 'Mazesoba', 'no', 'no', 'October 2026.', 'shirunashi'),
      it('', '', 'Cold TKM', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'tkm'),
      it('', '', 'Soupless tantanmen', '', 'Mazesoba', 'no', 'no', 'August 2026.', 'tantan'),
      it('', '', 'Chashu rice set', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_set'),
    ] }, {
    cuisine: '初心者向けの二郎系ラーメン・ラーメン200g: キレのある醤油、麺と野菜の甘み、味付けなしの背脂、締まった赤身の豚、野菜はマシマシまで、にんにくと脂はお好みで・汁なし200g 1,100円・冷やしTKM(玉子かけ麺)・肉味噌、温泉卵、青梗菜の汁なし担々麺・トッピングにマヨネーズ、豚の切れ端、厚いチャーシュー、生卵、黒胡椒・チャーシューご飯セット、追い飯・カウンター13席',
    neighborhood: '西区江戸堀1-23-27。肥後橋駅から378m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、マヨネーズのトッピング。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、豚のチャーシュー、卵。',
    notes: '[ラーメン・江戸堀、初心者向けの二郎系] 肥後橋近くのカウンター13席の店で、2024年11月開店、儀式なしの二郎系: 食券を買い、順番に入り、コールもいらない。標準の200gはキレのある醤油を麺と野菜の甘みが受け止め、野菜はマシマシまで。脂は味付けなしなので麺と一緒に、豚は締まった赤身。汁なし(1,100円)は通う人の定番、冷やしTKMは卵をまとった麺、温泉卵の汁なし担々麺はしっかり辛い。マヨネーズ、豚の切れ端、生卵でとことん。昼はほとんど待たない。現金のみ。',
  });
}

save();
