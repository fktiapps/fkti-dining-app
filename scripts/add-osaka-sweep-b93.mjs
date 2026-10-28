// Osaka sweep (2-mile circle around Dotonbori), batch 93 — ramen phase (all OMNI).
//   + 麺ふたり (niboshi shio/shoyu, sea-bream-and-clam shio, two-person shop; Uehommachi) — mom_and_pop
//   + 麺乃家 (since 2002, house noodles, light shoyu and seasonal shio bowls; Uehommachi)
//   + 麺食堂 コハクドリ (shijimi-clam shio, chicken soba, chashu-heavy abura soba; Honmachi)
//   + 喜多方食堂 ハイハイタウン店 (Kitakata ramen with curly noodles plus tuna rice bowls; Uehommachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 93);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺ふたり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27152048/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'osaka_men_futari_uehommachi', name: '麺ふたり (Men Futari)', category: 'OMNI',
    lat: 34.667099, lng: 135.518771, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare in the shoyu bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi, chicken, sea bream and clam broths; chashu.',
    hours_raw: 'Mon and Wed–Sun 11:00–14:30 and 18:00–21:30; closed Tuesdays and some other days (posted on social media) (Tabelog). Self-serve water; pay at the register after eating. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uehonmachi-nishi 5-2-18 — 1 min from Osaka-Uehommachi Stn and Tanimachi 9-chome Stn exit 7',
    cuisine: 'Niboshi shio ramen ¥1,200 · niboshi shoyu ramen ¥1,200: clear niboshi-and-chicken soy broth with a slight acidity · sea bream and clam shio ramen ¥1,450 · shio tsukemen ¥1,350 (limited; large ¥1,450): dip of clear chicken, seafood and domestic clam broth, house-made flat Haruyutaka-wheat noodles · medium-thin straight noodles in the ramen · rare chashu, fine menma, chopped onion, white negi, nori · sea bream rice with sesame · sake · no table condiments · 8 counter seats, 2 tables',
    website: null, gmaps: gm('麺ふたり 上本町'), menu_url: null,
    notes: "[Ramen · niboshi and clam shio by two people at Uehommachi] A fresh, stylish little shop a minute from Osaka-Uehommachi, open since September 2025 and run by two, the owner and one staff member per a regular. The broths are the point: niboshi shio or shoyu (¥1,200) with the sardine umami balanced, never overwhelming, and the shoyu showing a slight acidity; a sea bream and clam shio (¥1,450); and a limited shio tsukemen (¥1,350) whose dip blends clear chicken, seafood and domestic clam broth, with smooth house-made flat noodles of Haruyutaka wheat worth tasting with just salt first. Rare chashu turns tender in the hot broth. Add the sesame-scented sea bream rice. One regular reports a bronze at the Ramen Walker Grand Prix Kansai 2026. No table condiments; pay after. One October diner found service slow and the tsukemen noodles stuck together. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 September 2025 (Tabelog)', background: 'Ramen shop run by the owner and one staff member (October 2026 review).', philosophy: null, specialty: 'Niboshi shio; clam shio tsukemen.',
      anecdotes: [
        { text: '"The Shio Tsukemen features firm, smooth, flat, medium-thick straight noodles paired with a dipping sauce made from a blend of chicken clear broth, seafood stock, and domestic clam broth." — October 2026, shio tsukemen large ¥1,450.', source: R + 'B519549506/' },
        { text: '"The umami of the niboshi (dried sardines) was prominent, and the balance with the saltiness was exquisite. However, the niboshi flavor wasn\'t overwhelming." — October 2026, niboshi shio ramen.', source: R + 'B537581877/' },
      ],
      japanese_sources_summary: '食べログ: 麺ふたり、大阪市中央区上本町西5-2-18、大阪上本町駅・谷町九丁目駅7番出口から徒歩1分、月水木金土日11:00〜14:30・18:00〜21:30、火曜定休ほかSNSで告知、カード・電子マネー・QR不可、14席(カウンター8、2人掛けと4人掛けのテーブル)、禁煙、2025年9月22日開店。口コミ(2026年10月): 塩つけ麺大盛り1,450円、硬めでつるつるの平打ち中太ストレート麺、鶏清湯・魚介・国産蛤のつけ汁、しっとりしたチャーシュー2枚、メニューは煮干し塩・煮干し醤油・鯛と蛤の塩・数量限定の塩つけ麺、卓上調味料なし、食後に入口のレジで会計、カウンター8席とテーブル、店主とスタッフ1人、ラーメンWalkerグランプリ関西2026で銅賞という声、煮干し醤油1,200円、中細ストレート麺、煮干しと鶏の澄んだ醤油、ほのかな酸味、レアチャーシュー、細切りメンマ、玉ねぎ、煮干し塩、鯛めし(胡麻)、鯛と蛤の塩1,450円、塩つけ麺1,350円、セルフの水、提供が遅く麺がくっついていたという声、白ねぎ、海苔、日本酒、ハルユタカの自家製平打ち麺、まず塩で。',
      confidence: 'medium', sources: [TB, R + 'B519549506/', R + 'B537581877/', R + 'B537841771/', R + 'B537940488/', R + 'B537953860/', R + 'B538003778/'] },
    ramen: {
      broth_base: ['niboshi', 'chicken', 'shellfish'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: true, notes: 'Medium-thin straight in the ramen; house-made flat Haruyutaka-wheat noodles in the tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'tsukemen'],
      signature_bowl: 'Niboshi shio ramen, ¥1,200 (October 2026).',
      chashu: 'Rare chashu, tender in the hot broth (October 2026).',
      notable_toppings: ['fine menma', 'chopped onion', 'white negi', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi, chicken and clam broth.' },
      pantheon: 'Uehommachi\'s two-person niboshi shop: balanced sardine shio and a clam-broth shio tsukemen.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B519549506/', 'Niboshi shoyu with "the rich umami flavor of the niboshi" — mid-scale.'],
        oiliness: [R + 'B519549506/', '"Just the right amount of oil and salt" — placed low.'],
        clarity: [R + 'B519549506/', '"A clear soy sauce base made from niboshi and chicken."'],
        tare_strength: [R + 'B537581877/', '"The balance with the saltiness was exquisite" — mid-scale.'],
        noodle_firmness: [R + 'B519549506/', '"Firm, smooth, flat" tsukemen noodles; ramen noodles "chewy… a nice bounce."'],
        aroma_punch: [R + 'B537581877/', '"The umami of the niboshi was prominent" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B519549506/', R + 'B537581877/', R + 'B537953860/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter, pay after; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区上本町西5-2-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区上本町西五丁目2番18号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537841771/', R + 'B519549506/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Niboshi shio ramen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi_shio'),
      it('', '', 'Niboshi shoyu ramen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi_shoyu'),
      it('', '', 'Sea bream and clam shio ramen', '¥1,450', 'Ramen', 'no', 'no', 'October 2026.', 'tai_hamaguri'),
      it('', '', 'Shio tsukemen (limited)', '¥1,350', 'Tsukemen', 'no', 'no', 'Large ¥1,450; October 2026.', 'shio_tsukemen'),
      it('', '', 'Sea bream rice', '', 'Rice', 'no', 'no', 'October 2026.', 'taimeshi'),
    ] }, {
    cuisine: '煮干し塩ラーメン1,200円・煮干し醤油ラーメン1,200円: 煮干しと鶏の澄んだ醤油にほのかな酸味・鯛と蛤の塩ラーメン1,450円・塩つけ麺1,350円(数量限定、大盛り1,450円): 鶏清湯、魚介、国産蛤のつけ汁にハルユタカの自家製平打ち麺・ラーメンは中細ストレート麺・レアチャーシュー、細切りメンマ、玉ねぎ、白ねぎ、海苔・胡麻の香る鯛めし・日本酒・卓上調味料なし・カウンター8席、テーブル2卓',
    neighborhood: '中央区上本町西5-2-18。大阪上本町駅・谷町九丁目駅7番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油ラーメンの醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。煮干し、鶏、鯛、蛤のスープ、チャーシュー。',
    notes: '[ラーメン・上本町、ふたりで営む煮干しと蛤の塩] 大阪上本町駅から1分の新しくおしゃれな小さな店で、2025年9月開店、店名どおりふたりで営む。主役はスープで、煮干しの塩か醤油(1,200円)は煮干しの旨味がほどよく、醤油はほのかな酸味。鯛と蛤の塩(1,450円)、数量限定の塩つけ麺(1,350円)は鶏清湯と魚介、国産蛤を合わせたつけ汁に、ハルユタカのつるつるの自家製平打ち麺で、まずは塩だけで。レアチャーシューは熱いスープで柔らかく。胡麻香る鯛めしも。ラーメンWalkerグランプリ関西2026で銅賞という常連の声も。卓上調味料はなく、会計は食後。10月には提供が遅く、つけ麺の麺がくっついていたという声も。火曜定休。',
  });
}

// ================================================================ 麺乃家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27000948/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ja-jp.facebook.com/uehommachimennoya';
  const D = day(['11:30', '14:30'], ['18:00', '21:30']);
  put({
    id: 'osaka_men_no_ya_uehommachi', name: '麺乃家 (Men no Ya)', category: 'OMNI',
    lat: 34.668582, lng: 135.519507, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare; gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, pork and chicken chashu.',
    hours_raw: 'Mon and Wed–Sun 11:30–14:30 and 18:00–21:30; closed Tuesdays; hours may change (Tabelog). Ticket machine at the entrance. PayPay and au PAY accepted; no cards or e-money (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uehonmachi-nishi 5-1-6, 1F — 3 min north of Osaka-Uehommachi Stn exit 8',
    cuisine: 'House-made noodles since 2006 · Men no Ya ramen, original flavor ¥1,050: light, refreshing shoyu with moist chashu and spinach · rich shio ramen · extra noodles ¥180; one seasonal bowl the same price in small, medium or large · Manpuku set +¥480 with gyoza, kara-age and rice · seasonal: chilled chicken shio with Hida tomato and Tokushima sudachi ¥1,500, cold "adult" aemen with shiso, myoga and Senshu water eggplant ¥1,500, Banshu Hyakujitsu chicken shio, curry tsukemen, shio mazemen with rice to finish · seasoned egg ¥150 · ginger and Sichuan-pepper oil to add · 9 counter seats, 4 at a table',
    website: OWN, gmaps: gm('麺乃家 上本町'), menu_url: null,
    notes: "[Ramen · a 2002 Uehommachi shop with house noodles and seasonal shio bowls] A neighborhood ramen shop a few minutes from Osaka-Uehommachi, open since 2002 and making its own noodles since 2006, with regulars logging dozens of visits. The everyday bowl is the original ramen (¥1,050), a light, refreshing shoyu with moist chashu and spinach, gentle on the body; the Manpuku set (+¥480) adds gyoza, kara-age and rice. The real draw is the rotating limited menu, with careful sourcing: chilled chicken shio topped with thick Hida tomato and Tokushima sudachi (¥1,500), a cold \"adult\" aemen with shiso, myoga and Senshu water eggplant, a Banshu Hyakujitsu chicken shio with chicken ham, curry tsukemen. Smooth, glossy house noodles; one seasonal bowl cost the same in any size. Add ginger or Sichuan-pepper oil. On one rainy Sunday, families lined up soon after opening. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2002; house-made noodles since 2006 (September 2026 review).', background: 'Neighborhood ramen shop (Tabelog; Facebook page).', philosophy: null, specialty: 'House-made noodles; seasonal shio bowls.',
      anecdotes: [
        { text: '"The clear broth is paired with glossy noodles, topped with thick slices of Hida tomatoes and Tokushima sudachi… The homemade noodles glide smoothly down the throat, with a satisfying bounce when bitten into." — September 2026, chilled chicken shio with tomato and sudachi (large) ¥1,500.', source: R + 'B60626854/' },
        { text: '"I ordered the Men no Ya Ramen Original Flavor for JPY 1,050, which has a light and refreshing soy sauce taste… The broth was truly refreshing, and the noodles were smooth and chewy." — October 2026.', source: R + 'B536764240/' },
      ],
      japanese_sources_summary: '食べログ: 麺乃家、大阪市中央区上本町西5-1-6 寛永ビル1F、大阪上本町駅8番出口から北へ徒歩3分、月水木金土日11:30〜14:30・18:00〜21:30、火曜定休、PayPay・au PAY可、カード・電子マネー不可、13席(カウンター9、テーブル4)、禁煙、Facebookページ。口コミ(2026年7〜10月): 播州百日どりの鶏塩ラーメン(限定)、細いストレート麺、鶏ハム、肩ロースのチャーシュー、トマト、乾燥わかめ、すだち、麺1.5玉、ご飯にスープ、カレーつけ麺、短めの麺、夏から秋のメニュー、塩まぜ麺と濃厚塩ラーメン、締めにご飯、大人の和え麺、生姜と花椒油で味変、食券制、丁寧な接客、日曜開店直後から家族連れで行列、麺乃家ラーメン元味1,050円はあっさり醤油、満腹セット+480円で餃子・唐揚げ・ご飯、替え玉180円、ほうれん草、やさしい一杯、2002年開店、2006年から自家製麺、店頭右に券売機、夏限定の冷やし鶏塩ラーメン トマトすだち(大)1,500円、小中大同額、飛騨トマト、徳島のすだち、京丹後・久美浜の8年熟成わかめ、冷やし大人の和え麺1,500円、味玉150円、紫蘇と茗荷、泉州水なす、花椒油、スープ割り、山椒油の冷やし鶏塩。',
      confidence: 'medium', sources: [TB, OWN, R + 'B60626854/', R + 'B536764240/', R + 'B465363177/', R + 'B509762101/', R + 'B535900736/', R + 'B65888052/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made thin straight noodles, smooth and glossy (July–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Men no Ya ramen, original flavor, ¥1,050 (October 2026).',
      chashu: 'Moist pork shoulder chashu; chicken ham in the chicken shio (October 2026).',
      notable_toppings: ['spinach', 'Hida tomato (seasonal)', 'sudachi (seasonal)', 'Sichuan-pepper oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Uehommachi\'s 2002 noodle-making veteran: a gentle shoyu year-round and carefully sourced seasonal shio.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536764240/', '"A gentle, body-friendly bowl of ramen" — placed low.'],
        oiliness: [R + 'B536764240/', '"The broth was truly refreshing" — placed low.'],
        clarity: [R + 'B60626854/', '"The clear broth is paired with glossy noodles."'],
        tare_strength: [R + 'B60626854/', '"No sharp saltiness" — placed low.'],
        noodle_firmness: [R + 'B60626854/', '"A satisfying bounce when bitten into."'],
        aroma_punch: [R + 'B535900736/', 'Ginger and pepper oil "expanded dramatically" the aroma — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B60626854/', R + 'B536764240/', R + 'B465363177/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; friendly service (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区上本町西5-1-6 寛永ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区上本町西五丁目1番6号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536764240/', R + 'B60626854/', R + 'B65888052/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Men no Ya ramen, original flavor', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'moto_aji'),
      it('', '', 'Manpuku set (gyoza, kara-age, rice)', '+¥480', 'Sets', 'no', 'no', 'October 2026.', 'manpuku'),
      it('', '', 'Extra noodles', '¥180', 'Toppings', 'no', 'no', 'October 2026.', 'kaedama'),
      it('', '', 'Rich shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'noko_shio'),
      it('', '', 'Seasonal limited bowl (e.g. chilled chicken shio)', '¥1,500', 'Seasonal', 'no', 'no', 'September 2026.', 'gentei'),
    ] }, {
    cuisine: '2006年から自家製麺・麺乃家ラーメン元味1,050円: しっとりしたチャーシューとほうれん草のあっさり醤油・濃厚塩ラーメン・替え玉180円、小中大同額の限定も・満腹セット+480円で餃子、唐揚げ、ご飯・季節限定: 飛騨トマトと徳島のすだちの冷やし鶏塩1,500円、紫蘇・茗荷・泉州水なすの冷やし大人の和え麺1,500円、播州百日どりの鶏塩、カレーつけ麺、締めにご飯の塩まぜ麺・味玉150円・生姜と花椒油で味変・カウンター9席、テーブル4席',
    neighborhood: '中央区上本町西5-1-6 1F。大阪上本町駅8番出口から北へ徒歩3分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ、餃子と唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・上本町、2002年からの自家製麺と季節の塩] 大阪上本町から数分の町のラーメン店で、2002年開店、2006年から自家製麺、通った回数が数十回という常連も。ふだんの一杯は元味ラーメン(1,050円)で、しっとりしたチャーシューとほうれん草のあっさり醤油、体にやさしい。満腹セット(+480円)で餃子、唐揚げ、ご飯付き。本当の魅力は入れ替わる限定メニューで、食材選びも丁寧: 厚切りの飛騨トマトと徳島のすだちの冷やし鶏塩(1,500円)、紫蘇、茗荷、泉州水なすの冷やし大人の和え麺、鶏ハムの播州百日どりの鶏塩、カレーつけ麺。つややかな自家製麺、サイズを問わず同額の限定もあった。生姜や花椒油で味変を。雨の日曜でも開店後すぐ家族連れで行列ができたという声。火曜定休。',
  });
}

// ================================================================ 麺食堂 コハクドリ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27136613/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_men_shokudo_kohakudori_honmachi', name: '麺食堂 コハクドリ (Men Shokudo Kohakudori)', category: 'OMNI',
    lat: 34.683187, lng: 135.498274, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; chashu rice bowl sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shijimi-clam and chicken broths, chashu.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00 and 17:30–23:00; Sun 11:00–15:00 and 17:00–22:00 (Tabelog, staff-maintained). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['11:00', '15:00'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Honmachi 4-8-6 — 2 min from Honmachi Stn',
    cuisine: 'Shio shijimi ramen ¥880, the signature: clear shijimi-clam broth with perilla leaf and medium-thick curly noodles · special shio shijimi with two thick chashu · chicken soba: jidori chicken with a sharp shoyu, thin straight noodles, low-temperature chashu, soft menma · abura soba / mazesoba heaped with chashu, small rice included · grilled diced chashu rice bowl with green onion and nori · 9 seats',
    website: null, gmaps: gm('麺食堂 コハクドリ 本町'), menu_url: null,
    notes: "[Ramen · shijimi-clam shio and chicken soba by Honmachi] A small nine-seat shop two minutes from Honmachi, open since 2023 and, per one diner, from the same group as Subarushinbashi in Sakaisuji-Honmachi. The signature is the shio shijimi ramen (¥880): a light, clear broth with strong shijimi-clam umami and a perilla-leaf accent on medium-thick curly noodles; one diner found it a little sweet and samey by the end. The chicken soba is the other side, jidori chicken deepening with each sip under a sharp soy, on thin straight noodles with low-temperature chashu. Chashu is generous everywhere, especially in the abura soba, which comes with a small rice. Add the grilled diced chashu rice bowl. Open until 23:00; bowls are made with care, so allow ten minutes. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 June 2023 (Tabelog)', background: 'Ramen shop (Tabelog, staff-maintained); same group as Subarushinbashi, per a December 2025 review.', philosophy: null, specialty: 'Shio shijimi ramen; chicken soba.',
      anecdotes: [
        { text: '"After taking a sip of the broth, a strong umami flavor based on shijimi clams flooded my palate. The medium-thick curly noodles paired perfectly with the broth." — October 2026, shio shijimi ramen ¥880.', source: R + 'B537200136/' },
        { text: '"Taking a sip of the soup, the rich flavor of the jidori chicken gradually spreads, followed closely by the sharpness of the soy sauce… The noodles are thin and straight." — September 2026, chicken soba.', source: R + 'B536377026/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺食堂 コハクドリ、大阪市中央区本町4-8-6、本町駅から徒歩2分、月〜土祝11:00〜15:00・17:30〜23:00、日11:00〜15:00・17:00〜22:00、カード・電子マネー・QR不可、9席、禁煙、2023年6月5日開店。口コミ(2025年12月〜2026年10月): 油そば・まぜそばにたっぷりのチャーシュー、小ライス付き、澄んだスープのラーメン、チャーシュー丼、堺筋本町のSubarushinbashiと同じグループという声、22時でも客、3種のスープのブレンドのような澄んだ味、地鶏の旨味とキレのある醤油、細ストレート麺、低温調理のチャーシュー、柔らかいメンマ、炙ったサイコロチャーシュー丼にねぎと刻み海苔、塩しじみラーメン、大葉、あっさり、塩しじみラーメン880円、中太の縮れ麺、特製塩しじみ、2種の厚いチャーシュー、甘めで後半は単調という声、丁寧に作るので少し時間がかかる。',
      confidence: 'medium', sources: [TB, R + 'B537200136/', R + 'B536377026/', R + 'B521920136/', R + 'B536203243/', R + 'B536682308/', R + 'B537439269/'] },
    ramen: {
      broth_base: ['shellfish', 'chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly in the shijimi shio; thin straight in the chicken soba (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shio shijimi ramen, ¥880 (October 2026).',
      chashu: 'Two thick kinds; low-temperature chashu in the chicken soba (September–October 2026).',
      notable_toppings: ['perilla leaf', 'soft menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and chicken broth.' },
      pantheon: 'Honmachi\'s shijimi shio: a clear clam broth with perilla on curly noodles, for under ¥900.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536682308/', '"The ramen was quite light" — placed low.'],
        oiliness: [R + 'B536682308/', '"Refreshing taste" — placed low.'],
        clarity: [R + 'B536203243/', '"The broth was clear yet flavorful" — placed high.'],
        tare_strength: [R + 'B537439269/', '"The sweet broth became a bit monotonous" — mid-scale.'],
        noodle_firmness: [R + 'B536203243/', '"Just the right amount of chewiness" — mid-scale.'],
        aroma_punch: [R + 'B537200136/', '"A strong umami flavor based on shijimi clams" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537200136/', R + 'B536682308/', R + 'B536203243/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区本町4-8-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区本町四丁目8番6号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537200136/', R + 'B536377026/', R + 'B521920136/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shio shijimi ramen', '¥880', 'Ramen', 'no', 'no', 'October 2026.', 'shio_shijimi'),
      it('', '', 'Special shio shijimi ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shijimi'),
      it('', '', 'Chicken soba (shoyu)', '', 'Ramen', 'no', 'no', 'September 2026.', 'tori_soba'),
      it('', '', 'Abura soba with chashu', '', 'Mazesoba', 'no', 'no', 'Small rice included; September 2026.', 'aburasoba'),
      it('', '', 'Grilled chashu rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
    ] }, {
    cuisine: '看板の塩しじみラーメン880円: 大葉を添えた澄んだしじみのスープに中太の縮れ麺・厚いチャーシュー2種の特製塩しじみ・鶏そば: 地鶏にキレのある醤油、細ストレート麺、低温調理のチャーシュー、柔らかいメンマ・チャーシューたっぷりの油そば・まぜそば、小ライス付き・ねぎと海苔の炙りサイコロチャーシュー丼・9席',
    neighborhood: '中央区本町4-8-6。本町駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーシュー丼のたれ。',
    vegan_detail: 'ヴィーガンではありません。しじみと鶏のスープ、チャーシュー。',
    notes: '[ラーメン・本町、しじみの塩と地鶏そば] 本町駅から2分の9席の小さな店で、2023年開店、堺筋本町のSubarushinbashiと同じグループという声も。看板は塩しじみラーメン(880円)で、しじみの旨味が強い軽く澄んだスープに大葉、中太の縮れ麺。甘めで後半は単調だったという声も。もう一方は鶏そばで、地鶏の旨味が飲むほどに深まりキレのある醤油、細ストレート麺に低温調理のチャーシュー。チャーシューはどれもたっぷりで、特に油そばは山盛りで小ライス付き。炙りサイコロチャーシュー丼も。23時まで営業、丁寧に作るので10分ほど見て。現金のみ。',
  });
}

// ================================================================ 喜多方食堂 ハイハイタウン店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27117348/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kitakata_shokudo_haihai_town', name: '喜多方食堂 ハイハイタウン店 (Kitakata Shokudo Haihai Town)', category: 'OMNI',
    lat: 34.665345, lng: 135.518713, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork back fat, chashu, tuna rice bowls.',
    hours_raw: 'Daily 11:00–22:00; irregular holidays (Tabelog, staff-maintained). Ticket machine; PayPay if you tell the staff (October 2026).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uehonmachi 6-3-31, Haihai Town 1F (Tennoji-ku) — by Osaka-Uehommachi Stn north exit, 1 min from Tanimachi 9-chome Stn',
    cuisine: 'Kitakata ramen with curly high-hydration noodles · kura-dashi shoyu ramen, light or rich with back fat · kura-dashi miso ramen · harihari ramen in autumn and winter: Rokutoku pork belly, mizuna, yuzu, ginger · chilled tantanmen in summer · Kitakata ramen with toro-taku (tuna and pickled daikon) rice bowl · negitoro yukke rice bowl set ¥1,350 · tuna display at the counter · 24 seats',
    website: null, gmaps: gm('喜多方食堂 ハイハイタウン'), menu_url: null,
    notes: "[Ramen · Kitakata curly-noodle ramen with tuna rice bowls at Uehommachi] One of the few places in Osaka for Kitakata-style ramen, on the ground floor of Haihai Town by Osaka-Uehommachi Station, open since 2020. The kura-dashi shoyu comes light or rich: the rich version floats back fat but still drinks light, with the classic curly, high-hydration Kitakata noodles and chashu. There's a miso too. The house pairing is ramen with a tuna rice bowl from the counter's tuna display, toro-taku or negitoro yukke (¥1,350 as a set; one diner wanted more negitoro); a sign suggests eating the cold bowl first. Seasonal bowls rotate: harihari ramen with pork belly, mizuna and yuzu in autumn and winter, chilled tantanmen in summer. Open daily 11:00–22:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 May 2020 (Tabelog)', background: 'Kitakata ramen shop (Tabelog, staff-maintained).', philosophy: null, specialty: 'Kitakata ramen with tuna rice bowls.',
      anecdotes: [
        { text: '"The soy sauce broth was rich with a generous amount of back fat floating on top, but thanks to the mizuna and seasonings, it didn\'t feel heavy… The noodles were the characteristic curly, high-hydration type found in Kitakata ramen." — October 2026, harihari ramen.', source: R + 'B466335481/' },
        { text: '"The broth is light despite being packed with back fat, and I love the curly noodles and the chashu." — October 2026, shoyu ramen (rich).', source: R + 'B510258637/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 喜多方食堂 ハイハイタウン店、大阪市天王寺区上本町6-3-31 ハイハイタウン 1F、大阪上本町駅(ハイハイタウン北口)すぐ、谷町九丁目駅から徒歩1分、毎日11:00〜22:00、不定休、24席、2020年5月7日開店、喜多方ラーメン×トロたく。口コミ(2025年9月〜2026年10月): 蔵出し醤油ラーメン(こってり)とねぎとろユッケ丼1,350円、背脂、ねぎとろが少なめという声、秋冬限定のはりはりラーメン(豚バラ、柚子皮、ねぎ、生姜、水菜)、背脂たっぷりでも重くない、喜多方の多加水縮れ麺、夏限定の冷やし担々麺、チャーシュー・肉味噌・うずら・玉ねぎ・ナッツ・卵黄、平打ち麺、数少ない本格的な喜多方ラーメン、トロたく丼とのセット、冷たいものから先にと壁に、味噌ラーメン、ねぎ増し、マグロのディスプレイ、蔵出し味噌(こってり)、券売機、PayPayはスタッフに伝える、六穀豚のはりはりラーメン。',
      confidence: 'medium', sources: [TB, R + 'B466335481/', R + 'B510258637/', R + 'B459400796/', R + 'B536640856/', R + 'B537061765/', R + 'B537715729/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu', 'miso'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: null, shape: 'wavy', hydration: 'high', handmade: false, notes: 'Curly high-hydration Kitakata-style noodles (October 2026).' },
      regional_style: ['Kitakata'], sub_genre: ['ramen'],
      signature_bowl: 'Kura-dashi shoyu ramen, light or rich (October 2026).',
      chashu: 'Chashu; pork belly in the harihari ramen (October 2026).',
      notable_toppings: ['back fat (rich)', 'menma', 'green onion', 'mizuna and yuzu (harihari)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Back fat and chashu.' },
      pantheon: 'Uehommachi\'s Kitakata outpost: curly high-hydration noodles in back-fat shoyu, with a tuna bowl on the side.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B510258637/', '"The broth is light despite being packed with back fat" — mid-scale.'],
        oiliness: [R + 'B466335481/', '"A generous amount of back fat floating on top" but "didn\'t feel heavy" — mid-scale.'],
        clarity: [R + 'B510258637/', 'Light shoyu under back fat — mid-scale.'],
        tare_strength: [R + 'B466335481/', '"The flavors of richness and sweetness" — mid-scale.'],
        noodle_firmness: [R + 'B466335481/', '"Curly, high-hydration" noodles — mid-scale.'],
        aroma_punch: [R + 'B536640856/', '"A comforting bowl" one can "eat every day" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B466335481/', R + 'B510258637/', R + 'B536640856/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町6-3-31 ハイハイタウン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上本町六丁目3番31号 (go) 78m — large complex, Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B459400796/', R + 'B466335481/', R + 'B510258637/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kura-dashi shoyu ramen (light or rich)', '', 'Ramen', 'no', 'no', 'October 2026.', 'kuradashi_shoyu'),
      it('', '', 'Kura-dashi miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kuradashi_miso'),
      it('', '', 'Harihari ramen (autumn–winter)', '', 'Seasonal', 'no', 'no', 'October 2026.', 'harihari'),
      it('', '', 'Shoyu ramen with negitoro yukke rice bowl', '¥1,350', 'Sets', 'no', 'no', 'October 2026.', 'negitoro_set'),
    ] }, {
    cuisine: '多加水の縮れ麺の喜多方ラーメン・蔵出し醤油ラーメン、あっさりか背脂のこってり・蔵出し味噌ラーメン・秋冬のはりはりラーメン: 六穀豚の豚バラ、水菜、柚子、生姜・夏の冷やし担々麺・トロたく(マグロとたくあん)丼と喜多方ラーメン・ねぎとろユッケ丼のセット1,350円・カウンターにマグロのディスプレイ・24席',
    neighborhood: '天王寺区上本町6-3-31 ハイハイタウン1F。大阪上本町駅北口すぐ、谷町九丁目駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚の背脂、チャーシュー、マグロの丼。',
    notes: '[ラーメン・上本町、喜多方の縮れ麺ラーメンとマグロ丼] 大阪では数少ない喜多方ラーメンの店で、大阪上本町駅そばのハイハイタウン1階、2020年開店。蔵出し醤油はあっさりかこってりで、こってりは背脂が浮いても軽く飲め、喜多方らしい多加水の縮れ麺とチャーシュー。味噌もある。店のおすすめはラーメンとカウンターのマグロのディスプレイからのマグロ丼で、トロたくかねぎとろユッケ(セットで1,350円、ねぎとろが少なめという声も)。冷たい丼から先にと壁に書いてある。季節のメニューも替わり、秋冬は豚バラ、水菜、柚子のはりはりラーメン、夏は冷やし担々麺。毎日11時〜22時。',
  });
}

save();
