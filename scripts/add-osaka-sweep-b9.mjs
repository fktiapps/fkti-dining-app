// Osaka sweep (2-mile circle around Dotonbori), batch 9 — ramen phase, nearest first (all OMNI).
//   + 夢彩庵 心斎橋店 (shijimi-clam tsukemen and truffle egg rice, midnight to 5 am)
//   + らーめん亀王 道頓堀店 (Kyushu tonkotsu, toro chashu, tomato ramen; smoking allowed)
//   + ホルモンらーめん 8910 千日前店 (offal ramen in a bubbling clay pot, 24 h, cash only)
//   + 宮崎麺屋 からから 東心斎橋店 (Miyazaki karamen with egg, chives and minced meat; spice levels; 24 h)
// Skipped: 神戸牛ステーキらーめん麓の宮 なんば千日前店 (27153093).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 9);

skip('27153093', 'Four reviews: one is about yakiniku (April 2024), the rest mostly about burgers; nothing usable on the ramen.');

// ================================================================ 夢彩庵 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141115/'; const R = TB + 'dtlrvwlst/';
  const late = day(['00:00', '05:00']), fs = day(['20:00', '05:00']);
  put({
    id: 'osaka_musai_an_shinsaibashi', name: '夢彩庵 心斎橋店 (Musai An Shinsaibashi)', category: 'OMNI',
    lat: 34.670375, lng: 135.50299, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat tsukemen noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shijimi-clam and seafood broth, egg.',
    hours_raw: 'Sun–Thu, holidays and the days around them: 0:00–5:00; Fri–Sat 20:00–5:00 (Tabelog). A late-night shop: "only opens at midnight" (May 2025). Cash only (no cards, e-money or QR, per Tabelog).',
    hours: { 0: late, 1: late, 2: late, 3: late, 4: fs, 5: fs, 6: late }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-11, Honma Bldg 2F — in the Minami nightlife streets',
    cuisine: 'Shijimi-clam tsukemen · clam cream dipping sauce · shijimi paste · noodles warmed on request · soup-wari to finish · truffle egg rice with freshly shaved truffle · midnight to 5 am · ¥2,000–3,000',
    website: null, gmaps: gm('夢彩庵 心斎橋店'), menu_url: null,
    notes: "[Tsukemen · clam tsukemen after midnight in Higashi-Shinsaibashi] A 12-seat, second-floor tsukemen shop that opens at midnight (8 pm on Fridays and Saturdays) and runs to 5 am. A rich shijimi-clam broth, lighter than the usual thick tsukemen, feeds a smooth dip for silky noodles. There's a clam cream version and a shijimi paste, the noodles can be warmed, and a broth is poured in to finish. The other signature is rice topped with egg and freshly shaved truffle. One diner credits the concept to a charismatic figure from the Shinshu (Nagano) ramen scene. Regulars come after drinking, and queues form late. Expect ¥2,000–3,000 a head. Cash only. It changed its name before March 2025.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2023 (Tabelog); renamed before March 2025 (review)', background: 'A February 2026 reviewer says it is "produced by a charismatic figure in the Shinshu ramen scene" — not named in any source.', philosophy: null, specialty: 'Shijimi-clam tsukemen; truffle egg rice.',
      anecdotes: [
        { text: '"The tsukemen here is unlike any other, the flavor of the shijimi clam broth is rich and satisfying! The shijimi paste is also incredibly tasty!" — May 2025.', source: R + 'B506763601/' },
        { text: '"You can enjoy a rice bowl topped with freshly shaved truffles and eggs… The light and refreshing broth is perfect after a night of drinking." — June 2026.', source: R + 'B530272655/' },
      ],
      japanese_sources_summary: '食べログ: 夢彩庵 心斎橋店、大阪市中央区東心斎橋2-7-11 ほんまビル2F、12席、日〜木・祝・祝前日・祝後日0:00〜5:00、金土20:00〜5:00、予約不可、カード・電子マネー・QR決済不可、禁煙、2023年12月1日開店。口コミ(2025年3月〜2026年6月): 店名変更後の初訪問、トリュフのつけ麺、デート向きの上品な店、あっさりめのつけ麺、麺を温めてくれる(あつもり)、スープ割り、トリュフ卵かけご飯、しじみのスープが濃厚、しじみペースト、魚介の濃厚なつけ麺、なめらかな麺、深夜0時開店、値段は高め、信州ラーメン界のカリスマのプロデュース、あさりクリームソース、行列、飲んだ後に。',
      confidence: 'medium', sources: [TB, R + 'B506763601/', R + 'B530272655/', R + 'B503592562/', R + 'B526024781/', R + 'B507864904/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Smooth tsukemen noodles; warmed on request (March 2025).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Shijimi-clam tsukemen; truffle egg rice (2025–2026).',
      chashu: null,
      notable_toppings: ['shijimi paste', 'clam cream sauce', 'truffle egg rice (side)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and seafood broth.' },
      pantheon: 'Minami\'s after-midnight clam tsukemen: a shijimi broth lighter than the thick-dip norm, a clam cream variant, and truffle egg rice on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B506763601/', '"The flavor of the shijimi clam broth is rich and satisfying"; "a lighter tsukemen" (' + R + 'B503592562/).'],
        oiliness: [R + 'B530272655/', '"The light and refreshing broth" — placed low (inferred).'],
        clarity: [R + 'B530272655/', 'Clam broth described as light; not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B507864904/', '"The tsukemen with a rich seafood broth was absolutely delicious."'],
        noodle_firmness: [R + 'B507864904/', '"The noodles were so smooth and easy to eat"; no firmness described — mid-scale.'],
        aroma_punch: [R + 'B530272655/', 'Freshly shaved truffle on the rice; clam aroma — mid-scale (inferred).'],
      },
      confidence: 'low', sources: [R + 'B506763601/', R + 'B530272655/', R + 'B503592562/', R + 'B507864904/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night only; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-11 ほんまビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506763601/', R + 'B530272655/'],
    price_note: 'No dish prices captured; reviewers spent ¥2,000–2,999 (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Shijimi-clam tsukemen', '', 'Tsukemen', 'no', 'no', 'May 2025.', 'shijimi_tsukemen'),
      it('', '', 'Clam cream tsukemen', '', 'Tsukemen', 'no', 'no', 'February 2026.', 'clam_cream'),
      it('', '', 'Truffle egg over rice', '', 'Rice', 'no', 'no', 'June 2026.', 'truffle_tkg'),
    ] }, {
    cuisine: 'しじみのつけ麺・あさりクリームのつけだれ・しじみペースト・麺を温めてもらえる・締めのスープ割り・削りたてトリュフの卵かけご飯・深夜0時〜朝5時・2,000〜3,000円',
    neighborhood: '東心斎橋2-7-11 ほんまビル2F、ミナミの夜の街',
    gf_detail: 'グルテンフリーではありません。小麦のつけ麺。',
    vegan_detail: 'ヴィーガンではありません。しじみや魚介のスープ、卵。',
    notes: '[つけ麺・東心斎橋の深夜のしじみつけ麺] ビル2階の12席のつけ麺店で、深夜0時(金土は20時)から朝5時まで。濃厚なしじみのスープは普通の濃いつけ麺より軽めで、なめらかな麺によく合います。あさりクリームのつけ麺やしじみペーストもあり、麺は温めてもらえ、締めはスープ割り。もう一つの名物は、卵と削りたてのトリュフをのせたご飯。信州ラーメン界のカリスマのプロデュースという客も。飲んだ後の常連が多く、夜遅くには行列も。1人2,000〜3,000円ほど。現金のみ。2025年3月より前に店名が変わっています。',
  });
}

// ================================================================ らーめん亀王 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27045535/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://urc.jp/tonbori/tonbori.html';
  put({
    id: 'osaka_ramen_kio_dotonbori', name: 'らーめん亀王 道頓堀店 (Ramen Kio Dotonbori)', category: 'OMNI',
    lat: 34.668641, lng: 135.499444, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu; tomato ramen is not described as plant-based.',
    hours_raw: 'Two sources disagree. Official shop page: weekdays and holidays 11:30–2:00 (L.O. 1:30), Fri, Sat and nights before holidays 11:30–4:00 (L.O. 3:30), open year-round. Tabelog: Mon–Thu 11:00–2:30, Fri–Sun and nights before holidays 11:00–4:30. Either way, open until the small hours. No credit cards. Smoking allowed (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-2-17, Chūbei Bldg 1F — the western stretch of Dotonbori',
    cuisine: 'Kyushu tonkotsu with thin Hakata-style noodles · thick, melting "toro chashu" · tomato ramen and tomato tsukemen · red miso chashu ramen · salt tonkotsu "Kio ramen" · Kyushu abura-soba · hot gyoza · multilingual menus · smoking allowed',
    website: OWN, gmaps: gm('らーめん亀王 道頓堀店'), menu_url: null,
    notes: "[Ramen · Kyushu tonkotsu and tomato ramen on Dotonbori] A 15-seat branch of the Kio chain on the western stretch of Dotonbori, open until 2 or 4 am, where queues are often entirely overseas visitors (lately many from Korea). The menus come in several languages. Its pride is a thick, melting \"toro chashu\", which even a diner unmoved by the plain noodles called exceptional. The base is a standard Kyushu tonkotsu with very thin Hakata-style noodles. Alongside it are red miso chashu, a salt tonkotsu, and the house favourite, tomato ramen or tomato tsukemen: bright acidity, gentle sweetness and umami, closer to soup pasta than ramen, as one diner put it. There's also a Kyushu-style abura-soba and hot, juicy gyoza. Smoking is allowed, and cards are not.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori branch of らーめん亀王 (official site urc.jp)', background: 'Kio chain; the shop page touts thick chashu and hot gyoza.', philosophy: null, specialty: 'Toro chashu; tomato ramen.',
      anecdotes: [
        { text: '"The biggest surprise was the quality of the chashu (braised pork). It was incredibly tender, melting in my mouth… On the other hand, I found the noodles to be quite average." — February 2026.', source: R + 'B526682878/' },
        { text: '"The first aroma that hits you is a delightful blend of refreshing tomato acidity and subtle sweetness… The broth is not too heavy." — June 2026, tomato ramen and tomato tsukemen.', source: R + 'B529895552/' },
      ],
      japanese_sources_summary: '公式(urc.jp): らーめん亀王 道頓堀店、大阪市中央区道頓堀2-2-17 忠兵衛ビル1F、06-6484-0090、平日・祝日11:30〜翌2:00(L.O.1:30)、金土祝前日11:30〜翌4:00(L.O.3:30)、年中無休、ぶ厚いちゃーしゅうと熱々ギョウザ、元祖九州油そば。食べログ: 15席(カウンター8、テーブル7)、月〜木11:00〜翌2:30、金土日祝前日11:00〜翌4:30、カード不可、喫煙可、「関西最強のトロチャーシュー」。口コミ(2025年10月〜2026年8月): トマトラーメンはスープパスタのよう、九州ラーメン、とろけるチャーシュー、麺は普通、外国人旅行者ばかりの行列、赤味噌チャーシューメン、博多らしい極細麺、多言語メニュー、スタッフは店長以外外国人、標準的な豚骨、脂の多いチャーシュー、トマトラーメンとトマトつけ麺、韓国で人気、亀王ラーメン(塩豚骨)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B526682878/', R + 'B529895552/', R + 'B527181248/', R + 'B529282939/', R + 'B514738732/', R + 'B534548591/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shio', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Very thin Hakata-style noodles; firmness can be chosen; extra noodles (April 2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Toro chashu ramen; tomato ramen (2025–2026).',
      chashu: 'Thick, melting "toro chashu" — "incredibly tender… the seasoning was rich" (February 2026); fatty (May 2026).',
      notable_toppings: ['toro chashu', 'egg', 'tomato (tomato ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'The western-Dotonbori Kyushu shop where the chashu outshines the bowl: melting toro chashu on thin Hakata noodles, or a bright tomato ramen for a change.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B529282939/', '"The taste was a standard tonkotsu flavor"; "rich flavor" (' + R + 'B534548591/).'],
        oiliness: [R + 'B529282939/', 'Chashu "fat content was quite rich"; broth oiliness not described — mid-scale.'],
        clarity: [R + 'B529282939/', 'Kyushu tonkotsu — opaque.'],
        tare_strength: [R + 'B527181248/', '"The broth was delicious" (red miso); no strength described — mid-scale (inferred).'],
        noodle_firmness: [R + 'B527181248/', 'Firm noodles ordered; "typical of Hakata ramen, making them easy to eat."'],
        aroma_punch: [R + 'B529895552/', 'Tomato version: "refreshing tomato acidity and subtle sweetness"; tonkotsu described as standard — placed low-mid.'],
      },
      confidence: 'medium', sources: [R + 'B526682878/', R + 'B527181248/', R + 'B529282939/', R + 'B529895552/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Menus in several languages (April 2026); mostly overseas customers.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-2-17 忠兵衛ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official shop page current; reviews dated October 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目2番17号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527181248/', R + 'B529895552/', OWN],
    price_note: 'No prices captured; dishes from 2025–2026 reviews and the official page.', last_checked: TODAY, items: [
      it('', '', 'Tomato ramen', '', 'Ramen', 'no', 'no', 'October 2025, June 2026.', 'tomato_ramen'),
      it('', '', 'Tomato tsukemen', '', 'Tsukemen', 'no', 'no', 'June 2026.', 'tomato_tsukemen'),
      it('', '', 'Red miso chashu ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'red_miso'),
      it('亀王ラーメン', '', 'Kio ramen (salt tonkotsu)', '', 'Ramen', 'no', 'no', 'August 2026.', 'kio_ramen'),
      it('元祖九州油そば', '', 'Kyushu-style abura-soba', '', 'Noodles', 'no', 'no', 'Official page.', 'abura_soba'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'Official page.', 'gyoza'),
    ] }, {
    cuisine: '博多らしい極細麺の九州豚骨・ぶ厚くとろけるトロチャーシュー・トマトラーメンとトマトつけ麺・赤味噌チャーシューメン・塩豚骨の亀王ラーメン・九州油そば・熱々の餃子・多言語メニュー・喫煙可',
    neighborhood: '道頓堀2-2-17 忠兵衛ビル1F、道頓堀の西側',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。トマトラーメンも植物性とは書かれていません。',
    notes: '[ラーメン・道頓堀の九州豚骨とトマトラーメン] 道頓堀の西側にある亀王の15席の店で、深夜2時か4時まで。行列は海外からの客ばかりのことも多く(最近は韓国からの客も)、メニューは多言語。自慢はぶ厚くとろける「トロチャーシュー」で、麺は普通だと感じた客も、チャーシューは格別と評価。ベースは標準的な九州豚骨に博多らしい極細麺。赤味噌チャーシューメン、塩豚骨、店の人気のトマトラーメンやトマトつけ麺も。トマトはさわやかな酸味とやさしい甘み、うまみがあり、ラーメンよりスープパスタに近いという客も。九州の油そばや熱々の餃子も。喫煙可、カードは使えません。',
  });
}

// ================================================================ ホルモンらーめん 8910 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132256/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_horumon_ramen_8910_sennichimae', name: 'ホルモンらーめん 8910 千日前店 (Horumon Ramen 8910 Sennichimae)', category: 'OMNI',
    lat: 34.667863, lng: 135.503231, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal (horumon) in a meat broth; kalbi rice bowl.',
    hours_raw: 'Open 24 hours; closing days not fixed (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-8-16, in the Sennichimae shopping arcade — between Namba and Nippombashi',
    cuisine: 'Horumon (offal) ramen bubbling in a clay pot · red (spicy, most popular) or white · tender, fluffy horumon · corn topping · finish with rice as risotto or porridge · kalbi rice bowl · 24 h · cash only',
    website: 'http://8910.sunlar333-pinoko.com/', gmaps: gm('ホルモンらーめん 8910 千日前店'), menu_url: null,
    notes: "[Ramen · offal ramen in a bubbling clay pot, round the clock] A small, 24-hour Sennichimae-arcade branch of Horumon Ramen 8910, whose main shop is in Shimoshinjo, Higashiyodogawa. The bowl arrives bubbling in a clay pot that keeps it hot to the end, loaded with tender, fluffy horumon in a hearty broth with no off-odour. Choose red (spicy, the popular one) or white. One diner liked it topped with corn. The shop nudges you to finish with rice in the broth, risotto- or porridge-style. A salt-seasoned kalbi rice bowl is the alternative. It's like a one-person hot pot, good after drinks or, as one inspector found, for an early breakfast. Rarely crowded. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 October 2022 (Tabelog)', background: 'Sennichimae branch; a September 2026 reviewer says the main shop is in Shimoshinjo, Higashiyodogawa Ward.', philosophy: null, specialty: 'Horumon ramen.',
      anecdotes: [
        { text: '"I could choose between red and white, and since red is the most popular, I went with that… The ramen was bubbling away! The high heat retention kept the ramen warm, and the Horumon was incredibly tender." — October 2026.', source: R + 'B536919784/' },
        { text: '"The atmosphere suggested that making a risotto or porridge with the ramen broth was highly recommended… I enjoyed the rich flavor of the broth without any unpleasant odor from the Horumon." — August 2026.', source: R + 'B533987628/' },
      ],
      japanese_sources_summary: '食べログ: ホルモンらーめん 8910 千日前店、大阪市中央区千日前1-8-16、24時間営業、不定休、カード・電子マネー・QR決済不可、禁煙、2022年10月8日開店、サイト 8910.sunlar333-pinoko.com。2026年の口コミ(8〜10月): ホルモンらーめんとカルビ丼(塩)、スープでリゾットや雑炊がおすすめの雰囲気、臭みのない濃厚なスープ、熱々、千日前商店街のアーケード、本店は東淀川区下新庄、店は広くなく空いていることが多い、最初は薄めだがちょうどいい、赤と白を選べる(赤が人気)、土鍋でぐつぐつ、やわらかいホルモン、一人鍋のよう、朝早く開いている、辛さとふわふわのホルモン、24時間、コーンのトッピング、飲んだ後に。',
      confidence: 'medium', sources: [TB, R + 'B536919784/', R + 'B533987628/', R + 'B536015215/', R + 'B537561825/', R + 'B537869089/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Red horumon ramen in a clay pot (October 2026).',
      chashu: null,
      notable_toppings: ['horumon (offal)', 'corn'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Offal and meat broth.' },
      pantheon: 'Sennichimae\'s 24-hour one-person offal hot pot: horumon ramen bubbling in clay, red for heat, finished as porridge.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536641057/', '"A rich bowl of ramen where the flavors of the horumon blend beautifully into the hearty broth"; one found it light at first (' + R + 'B536015215/).'],
        oiliness: [R + 'B536641057/', 'Hearty offal broth; oil not described — mid-scale (inferred).'],
        clarity: [R + 'B536641057/', 'A "hearty broth" with offal — not clear (inferred).'],
        tare_strength: [R + 'B536015215/', '"At first, I thought the broth was a bit on the light side, but… it to be just right."'],
        noodle_firmness: [R + 'B536641057/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B537561825/', '"The spicy flavor pairs perfectly with the fluffy texture of the horumon" (red).'],
      },
      confidence: 'low', sources: [R + 'B536641057/', R + 'B536015215/', R + 'B537561825/', R + 'B536919784/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small arcade shop; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番16号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536919784/', R + 'B533987628/'],
    price_note: 'No prices captured; dishes from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('ホルモンらーめん(赤)', '', 'Horumon ramen, red (spicy)', '', 'Ramen', 'no', 'no', 'October 2026.', 'horumon_red'),
      it('ホルモンらーめん(白)', '', 'Horumon ramen, white', '', 'Ramen', 'no', 'no', 'October 2026.', 'horumon_white'),
      it('', '', 'Kalbi rice bowl (salt)', '', 'Rice', 'no', 'no', 'August 2026.', 'kalbi_don'),
    ] }, {
    cuisine: '土鍋でぐつぐつのホルモンらーめん・赤(辛口、人気)か白・やわらかくふわふわのホルモン・コーンのトッピング・締めはご飯でリゾットや雑炊に・カルビ丼・24時間・現金のみ',
    neighborhood: '千日前1-8-16、千日前商店街のアーケード。なんばと日本橋の間',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。肉のスープにホルモン、カルビ丼。',
    notes: '[ラーメン・24時間、土鍋でぐつぐつのホルモンらーめん] 千日前商店街のアーケードにある、24時間営業のホルモンらーめん8910の小さな支店で、本店は東淀川区の下新庄。土鍋でぐつぐつ煮立ったまま出てきて最後まで熱く、臭みのない濃いスープにやわらかくふわふわのホルモンがたっぷり。赤(辛口で人気)か白を選べます。コーンのトッピングがお気に入りの客も。締めはスープにご飯を入れてリゾットや雑炊にするのが店のおすすめ。塩味のカルビ丼もあります。一人鍋のようで、飲んだ後や、朝早い朝食にも。空いていることが多い店です。現金のみ。',
  });
}

// ================================================================ 宮崎麺屋 からから 東心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27058260/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_miyazaki_menya_karakara_higashishinsaibashi', name: '宮崎麺屋 からから 東心斎橋店 (Miyazaki Menya Karakara)', category: 'OMNI',
    lat: 34.670385, lng: 135.503238, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles by default, and the broth is not described as wheat-free. Konjac noodles can be chosen, but ask about the soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat and egg in the karamen; meat broth.',
    hours_raw: 'Open 24 hours; closed only over New Year (Tabelog and a September 2026 review). QR payments accepted; no cards or e-money (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-8 (Sōemonchō) — 10 min from Shinsaibashi or Namba Stn',
    cuisine: 'Miyazaki-style karamen: red, spicy broth with fluffy egg, garlic chives and minced meat · spice levels (up to 100) · konjac noodles option · tender pork topping · Hokkaido "100-year" miso ramen · omurice · 24 h, two floors',
    website: null, gmaps: gm('宮崎麺屋 からから 東心斎橋店'), menu_url: null,
    notes: "[Ramen · Miyazaki karamen round the clock in Sōemonchō] A 24-hour, two-floor, 23-seat karamen shop in the Sōemonchō nightlife streets, since 2011. The signature karakara noodles arrive bright red under fluffy scrambled egg, garlic chives and minced meat, with real umami behind the heat and the egg adding creaminess. Pick your spice level, up to 100 (regulars brag about levels 30, 50 and 100), and your noodles, including konjac. Add tender pork if you like. For milder tastes there's a Hokkaido \"100-year\" miso ramen, and a cult omurice that one 2 am regular orders instead of noodles. It is kept cool inside, anticipating the heat. A post-drinks staple. The street outside can feel rough late at night.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 May 2011 (Tabelog)', background: 'Higashi-Shinsaibashi branch of Miyazaki Menya Karakara (Tabelog listing name).', philosophy: null, specialty: 'Miyazaki karamen.',
      anecdotes: [
        { text: '"A bright red bowl filled with fluffy eggs! It also had chives and minced meat… Unlike ramen that relies solely on spiciness, this one had a rich umami flavor." — September 2026.', source: R + 'B536415972/' },
        { text: '"I could choose the type of noodles and the level of spiciness, so I opted for konjac noodles with a spiciness level of 50 and added some tender pork as a topping." — September 2026.', source: R + 'B536565404/' },
      ],
      japanese_sources_summary: '食べログ: 宮崎麺屋 からから 東心斎橋店、大阪市中央区東心斎橋2-7-8、06-6484-6132、23席、24時間営業、年末年始のみ休み、予約不可、カード・電子マネー不可、QR決済可、禁煙、2011年5月22日開店。店の紹介: 心斎橋・なんば駅から徒歩10分以内、辛いもの好きには看板の「辛麺」、マイルド派には「味噌ラーメン」。2026年の口コミ(9〜10月): 30辛、50辛、100辛、こんにゃく麺、真っ赤な器にふわふわの卵、ニラ、ミンチ、辛さだけでなくうま味、北海道百年味噌ラーメン、1階と2階、店内は涼しい、やわらかい豚のトッピング、オムライスが人気、深夜2時の宗右衛門町、外は少し物騒。',
      confidence: 'medium', sources: [TB, R + 'B536415972/', R + 'B536565404/', R + 'B535441694/', R + 'B538077437/', R + 'B536368921/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodle type can be chosen, including konjac noodles (September 2026).' },
      regional_style: ['Miyazaki karamen'], sub_genre: ['ramen'],
      signature_bowl: 'からから麺 (karakara noodles), spice level of choice (September 2026).',
      chashu: 'Optional tender pork topping (September 2026).',
      notable_toppings: ['fluffy egg', 'garlic chives', 'minced meat', 'chili'],
      gf: { status: 'no', note: 'Wheat noodles by default; konjac option, broth unconfirmed.' },
      vegan: { status: 'no', note: 'Minced meat and egg.' },
      pantheon: 'Sōemonchō\'s all-night Miyazaki karamen: a red, chili-laced broth softened by clouds of egg, garlic chives and minced meat, heat dialled up to 100.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B536415972/', '"With plenty of eggs mixed in, it added a creaminess."'],
        oiliness: [R + 'B536415972/', 'Oil not described — mid-scale (inferred).'],
        clarity: [R + 'B536415972/', '"A bright red bowl filled with fluffy eggs" — not clear (inferred).'],
        tare_strength: [R + 'B537088304/', '"The flavor was rich and delicious"; "a rich umami flavor" (' + R + 'B536415972/).'],
        noodle_firmness: [R + 'B536565404/', 'Noodle type chosen (konjac); firmness not described — mid-scale.'],
        aroma_punch: [R + 'B535441694/', 'Spice levels to 100 ("I could easily handle the 100 Karas!"); garlic chives (' + R + 'B536415972/).'],
      },
      confidence: 'medium', sources: [R + 'B536415972/', R + 'B536565404/', R + 'B535441694/', R + 'B537088304/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose spice level and noodles when ordering.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番8号 (go) 0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536415972/', R + 'B536565404/'],
    price_note: 'No prices captured; dishes from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('辛麺', 'karamen', 'Karakara noodles (Miyazaki karamen), spice level of choice', '', 'Ramen', 'no', 'no', 'September 2026.', 'karamen'),
      it('', '', 'Konjac-noodle karamen', '', 'Ramen', 'ask', 'no', 'Konjac noodles; ask about the broth (September 2026).', 'konjac_karamen'),
      it('', '', 'Hokkaido 100-year miso ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'miso_ramen'),
      it('オムライス', 'omuraisu', 'Omurice', '', 'Rice', 'ask', 'no', 'October 2026.', 'omurice'),
    ] }, {
    cuisine: '宮崎の辛麺: ふわふわ卵、ニラ、ミンチの赤い辛いスープ・辛さを選べる(100辛まで)・こんにゃく麺も・やわらかい豚のトッピング・北海道百年味噌ラーメン・オムライス・24時間、2フロア',
    neighborhood: '東心斎橋2-7-8(宗右衛門町)。心斎橋・なんば駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。標準は小麦の麺で、スープも小麦不使用とは書かれていません。こんにゃく麺も選べますが、スープは確認を。',
    vegan_detail: 'ヴィーガンではありません。辛麺にミンチと卵、肉のスープ。',
    notes: '[ラーメン・宗右衛門町の24時間の宮崎辛麺] 2011年から宗右衛門町の夜の街にある、24時間営業、2フロア23席の辛麺の店。看板のからから麺は真っ赤なスープにふわふわの卵、ニラ、ミンチで、辛さの奥にしっかりうま味があり、卵がまろやかさを加えます。辛さは100辛まで選べ(30辛、50辛、100辛を自慢する常連も)、麺はこんにゃく麺も。やわらかい豚のトッピングも。マイルド派には北海道百年味噌ラーメン、深夜2時に麺の代わりに頼む常連もいる人気のオムライスも。辛さに備えてか店内は涼しめ。飲んだ後の定番。深夜の外の通りは少し物騒に感じることも。',
  });
}

save();
