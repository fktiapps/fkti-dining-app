// Osaka sweep (2-mile circle around Dotonbori), batch 75 — ramen phase (all OMNI).
//   + 天下一品 心斎橋店 (new kotteri branch, opened August 2026; tablet ordering)
//   + ラーメン虎と龍 日本橋店 (Kurume and Hakata tonkotsu in Kozu; new owner from August 2025)
//   + Mr.R (late-night tantanmen and izakaya counter, 8 seats)
//   + 牛一嘴 蘭州牛肉拉麺屋 (hand-pulled Lanzhou beef noodles, free noodle refills → other)
//   + 8ppy麻辣湯 (pick-your-own mala tang in Namba Parks → other)
//   - skip three listings with 0–1 reviews
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 75);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27159110', '麺処 なごみ: 0 reviews on Tabelog');
skip('27133340', '湯火功夫 島之内店: 0 reviews on Tabelog');
skip('27159267', '独一家: 1 review on Tabelog');

// ================================================================ 天下一品 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27158154/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tenka_ippin_shinsaibashi', name: '天下一品 心斎橋店 (Tenka Ippin Shinsaibashi)', category: 'OMNI',
    lat: 34.67659, lng: 135.50128, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-seasoned broth; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth, chashu.',
    hours_raw: 'Daily 11:00–23:30 (L.O. 23:00); hours may change (Tabelog). Tablet ordering at the table (October 2026). Cards and QR (PayPay, Alipay, WeChat Pay) accepted; no e-money (Tabelog).',
    hours: ALL(day(['11:00', '23:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisenba 3-11-2, Shinsaibashi shopping district — 3 min from Shinsaibashi Stn',
    cuisine: 'Tenka Ippin kotteri ramen · kotteri regular ¥920 · kotteri MAX · assari, yatai no aji, miso and shio · thin straight noodles, firmness to order · free extra green onion · kimchi and fried rice set ¥460 · gyoza set · spicy miso, chili oil, pepper and ramen sauce on the table · 14 counter seats plus tables',
    website: null, gmaps: gm('天下一品 心斎橋店'), menu_url: null,
    notes: "[Ramen · a new Tenka Ippin branch in the Shinsaibashi shopping district] A clean, new Tenka Ippin that opened in August 2026 three minutes from Shinsaibashi Station, with counter and table seats and ordering by tablet. The kotteri (¥920) is the classic thick broth of chicken bones and vegetables seasoned with soy, deep in chicken and a little salty, over thin straight noodles you can order extra firm. Stir in the spicy miso from the table. One diner found the extra-rich MAX just gooey and wished for the regular. There's also assari, yatai no aji, miso and shio, plus a kimchi and fried rice set (¥460). About twenty diners were already in at 2:15 pm on one visit. Open until 23:30 daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 August 2026 (Tabelog)', background: 'Branch of the Tenka Ippin chain (October 2026 reviews).', philosophy: null, specialty: 'Kotteri ramen.',
      anecdotes: [
        { text: '"A rich broth made from chicken bones and vegetables, seasoned with soy sauce. The thick, flavorful broth had a deep chicken essence with a slightly salty and creamy taste." — October 2026, kotteri regular.', source: R + 'B537896173/' },
        { text: '"Adding spicy miso to the thick, flavorful broth made it even more delicious." — October 2026.', source: R + 'B537197816/' },
      ],
      japanese_sources_summary: '食べログ: 天下一品 心斎橋店、大阪市中央区南船場3-11-2、心斎橋から183m、毎日11:00〜23:30(L.O.23:00)、カード・QR可、電子マネー不可、カウンター14席とテーブル18席、禁煙、2026年8月23日開店。口コミ(2026年10月): こってりの太麺とねぎ多め無料、豚山が改装中で天下一品に、熱々の麺、心斎橋の商店街の新店、辛味噌を足す、味玉ラーメン(こってりMAX)と半チャーハンと餃子定食、MAXはどろどろで普通がよかったという声、清潔できれいな店、タブレット注文、こってり並920円とキムチチャーハン定食460円、麺はカタめ、鶏ガラと野菜の醤油味、やや塩気、こってり・こってりMAX・あっさり・屋台の味・味噌・塩、卓上に胡椒・塩・辛味噌・ラー油・ラーメンのたれ・餃子のたれ、天下一品祭り2026、無料券で大盛り。',
      confidence: 'medium', sources: [TB, R + 'B537896173/', R + 'B537197816/', R + 'B537358049/', R + 'B536887786/', R + 'B538017171/', R + 'B537358186/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, firmness to order (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kotteri ramen, regular ¥920 (October 2026).',
      chashu: null,
      notable_toppings: ['green onion (extra free)', 'spicy miso (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-bone broth.' },
      pantheon: 'Shinsaibashi\'s new Tenka Ippin: the thick chicken kotteri, with spicy miso on the table.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537197816/', '"Since it was quite rich, I felt very thirsty afterward."'],
        oiliness: [R + 'B537896173/', '"It felt smoother than I remembered" — mid-scale.'],
        clarity: [R + 'B537358049/', 'Extra-rich version "thick and gooey" — placed low.'],
        tare_strength: [R + 'B537896173/', '"Slightly salty and creamy" — mid-scale.'],
        noodle_firmness: [R + 'B537896173/', 'Ordered extra firm; "a firm texture" — mid-scale as served by default.'],
        aroma_punch: [R + 'B537896173/', '"A deep chicken essence" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537896173/', R + 'B537197816/', R + 'B537358049/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering at the table (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-11-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened August 2026; six reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目11番2号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537896173/'],
    price_note: 'Prices from an October 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Kotteri ramen (regular)', '¥920', 'Ramen', 'no', 'no', 'October 2026.', 'kotteri'),
      it('', '', 'Kotteri MAX', '', 'Ramen', 'no', 'no', 'October 2026.', 'kotteri_max'),
      it('', '', 'Kimchi and fried rice set', '¥460', 'Sets', 'no', 'no', 'October 2026.', 'kimchi_chahan_set'),
      it('', '', 'Gyoza set', '', 'Sets', 'no', 'no', 'October 2026.', 'gyoza_set'),
    ] }, {
    cuisine: '天下一品のこってりラーメン・こってり並920円・こってりMAX・あっさり、屋台の味、味噌、塩・麺の硬さを選べる細ストレート麺・ねぎ増し無料・キムチチャーハン定食460円・餃子定食・卓上に辛味噌、ラー油、胡椒、ラーメンのたれ・カウンター14席とテーブル',
    neighborhood: '中央区南船場3-11-2、心斎橋の商店街。心斎橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油で味付けしたスープ、餃子とチャーハン。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、チャーシュー。',
    notes: '[ラーメン・心斎橋の商店街の天下一品の新店] 2026年8月に心斎橋駅から3分の場所に開店した、きれいな天下一品の新店で、カウンターとテーブル席、注文はタブレット。こってり(920円)は鶏ガラと野菜を醤油で味付けした定番の濃厚スープで、鶏の旨みが深くやや塩気があり、細ストレート麺はカタめにもできる。卓上の辛味噌を溶かして。さらに濃厚なMAXはどろどろなだけで普通がよかったという声も。あっさり、屋台の味、味噌、塩、キムチチャーハン定食(460円)も。14時15分で約20人の客がいた日も。毎日23時30分まで。',
  });
}

// ================================================================ ラーメン虎と龍 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27051177/'; const R = TB + 'dtlrvwlst/';
  const F = day(['11:00', '15:00'], ['17:00', '23:00']), SU = day(['11:00', '15:00']);
  put({
    id: 'osaka_tora_to_ryu_nipponbashi', name: 'ラーメン虎と龍 日本橋店 (Ramen Tora to Ryu Nipponbashi)', category: 'OMNI',
    lat: 34.666656, lng: 135.509966, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tonkotsu; gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Mon, Tue and Thu–Sat 11:00–15:00 and 17:00–23:00; Sun 11:00–15:00; closed Wednesday; hours may change (Tabelog). Lunch hours added after the owner changed in August 2025 (January 2026 review). Ticket machine. QR accepted; no cards or e-money (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: F, 1: F, 3: F, 4: F, 5: F, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kozu 3-2-33 — 5 min from Kintetsu Nipponbashi Stn',
    cuisine: 'Kyushu tonkotsu · Hakuryu, the basic rich tonkotsu ¥900 · White Dragon, a Kurume tonkotsu · Hakata-style White Tiger · Kuro Ryu, rich with garlic · rich broth in white, red or black · very thin straight noodles, extra noodles · chashu, kikurage, green onion, black garlic oil · white rice ¥150 at lunch · gyoza · kara-age set · pickled ginger, spicy takana and sesame on the counter · 13 counter seats',
    website: null, gmaps: gm('ラーメン虎と龍 日本橋店'), menu_url: null,
    notes: "[Ramen · Kurume and Hakata tonkotsu in Kozu] A 13-seat tonkotsu counter near Nipponbashi, open since 2010; the owner changed in August 2025 and lunch was added. The rich broth comes white, red or black. Hakuryu, the basic rich tonkotsu (¥900), is soy-seasoned, a little oily and properly salty over very thin, firm straight noodles. The White Dragon is a Kurume tonkotsu with a red chili paste in the center, the White Tiger is Hakata-style, and the Kuro Ryu is the garlic version; one diner had black garlic oil. Toppings are chashu (thin and fatty), crunchy kikurage and green onion; pickled ginger, spicy takana and sesame sit on the counter. Add rice (¥150 at lunch), extra noodles, or garlicky gyoza. Service is quick, and it's often quiet. Closed Wednesdays; Sunday is lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2010 (Tabelog); owner changed August 2025 (January 2026 review)', background: 'Kyushu tonkotsu counter (2026 reviews).', philosophy: null, specialty: 'Kurume and Hakata tonkotsu.',
      anecdotes: [
        { text: '"The rich tonkotsu ramen (Hakuryu) features extremely thin straight noodles cooked to a firm texture, and the broth is a soy sauce-based tonkotsu with a slightly higher oil content and just the right amount of saltiness." — January 2026.', source: R + 'B410318606/' },
        { text: '"The wood ear mushrooms had a nice crunch and added great flavor. The chashu was thinly sliced and fatty." — April 2026, tonkotsu with black garlic oil.', source: R + 'B526408494/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン虎と龍 日本橋店、大阪市中央区高津3-2-33、近鉄日本橋から352m、月・火・木・金・土11:00〜15:00・17:00〜23:00、日11:00〜15:00、水曜休み、QR可、カード・電子マネー不可、喫煙可、2010年7月7日開店。口コミ(2026年1〜6月): 昼営業、券売機、濃厚豚骨Hakuryu900円、ランチのライス150円、極細ストレート麺をカタめで、醤油ベースの豚骨、やや油多め、ちょうどよい塩気、紅しょうが・辛子高菜・すりごま、カウンター13席、一人で切り盛り、2025年8月にオーナーが替わり営業時間も変わった、白・赤・黒、Hakata風のWhite Tiger、Kurume豚骨、チャーシュー・きくらげ・ねぎ、赤い辛味噌、ニンニクの効いた餃子、Kuro Ryuとライスと唐揚げセット、提供が速い、黒マー油の豚骨、薄く脂の多いチャーシュー、替え玉。',
      confidence: 'medium', sources: [TB, R + 'B410318606/', R + 'B526408494/', R + 'B514306962/', R + 'B520812388/', R + 'B525074122/', R + 'B529430366/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['mayu'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Extremely thin straight noodles, firm; firmness to order; extra noodles (January–June 2026).' },
      regional_style: ['Kurume tonkotsu', 'Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'Hakuryu rich tonkotsu, ¥900 (January 2026).',
      chashu: 'Thin and fatty (April 2026).',
      notable_toppings: ['kikurage', 'black garlic oil', 'red chili paste', 'spicy takana (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kozu\'s tiger-and-dragon counter: Kurume and Hakata tonkotsu in white, black and red.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B410318606/', '"The thick broth allows you to fully appreciate the rich flavor of the pork bone."'],
        oiliness: [R + 'B410318606/', '"A slightly higher oil content" — placed high.'],
        clarity: [R + 'B410318606/', 'Thick tonkotsu — placed low.'],
        tare_strength: [R + 'B410318606/', '"Just the right amount of saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B410318606/', '"Extremely thin straight noodles cooked to a firm texture."'],
        aroma_punch: [R + 'B529430366/', '"No distinct tonkotsu smell in the restaurant," but rich in the bowl — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B410318606/', R + 'B526408494/', R + 'B529430366/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; 13-seat counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津3-2-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津三丁目2番33号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B410318606/', R + 'B525074122/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hakuryu rich tonkotsu ramen', '¥900', 'Ramen', 'no', 'no', 'January 2026.', 'hakuryu'),
      it('', '', 'White Tiger (Hakata-style)', '', 'Ramen', 'no', 'no', 'June 2026.', 'white_tiger'),
      it('', '', 'Kuro Ryu (rich, with garlic)', '', 'Ramen', 'no', 'no', 'March–June 2026.', 'kuro_ryu'),
      it('', '', 'White rice (lunch set A)', '¥150', 'Rice', 'no', 'vegan', 'January 2026.', 'rice'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'January 2026.', 'gyoza'),
    ] }, {
    cuisine: '九州の豚骨・基本の濃厚豚骨Hakuryu900円・Kurume豚骨のWhite Dragon・Hakata風のWhite Tiger・にんにくの効いた濃厚なKuro Ryu・濃厚スープは白、赤、黒・極細ストレート麺、替え玉・チャーシュー、きくらげ、ねぎ、黒マー油・昼はライス150円・餃子・唐揚げセット・卓上に紅しょうが、辛子高菜、すりごま・カウンター13席',
    neighborhood: '中央区高津3-2-33。近鉄日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースの豚骨、餃子と唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・高津のKurumeとHakataの豚骨] 日本橋近くのカウンター13席の豚骨の店で、2010年開店、2025年8月にオーナーが替わり昼営業も始まった。濃厚スープは白、赤、黒。基本の濃厚豚骨Hakuryu(900円)は醤油ベース、やや油多めでほどよい塩気、極細ストレート麺をカタめで。White Dragonは中央に赤い辛味噌がのるKurume豚骨、White TigerはHakata風、Kuro Ryuはにんにく入りで、黒マー油の一杯を食べた人も。具はチャーシュー(薄く脂多め)、こりこりのきくらげ、ねぎ。カウンターには紅しょうが、辛子高菜、すりごま。ライス(昼150円)、替え玉、ニンニクの効いた餃子も。提供は速く、空いていることも多い。水曜定休、日曜は昼のみ。',
  });
}

// ================================================================ Mr.R
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139446/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mr_r_kozu', name: 'Mr.R', category: 'OMNI',
    lat: 34.667659, lng: 135.510842, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso and dried shrimp on the tantanmen.',
    hours_raw: 'Overnight hours. Tabelog lists Mon, Thu, Fri 18:00–6:00; Tue 11:00–18:00; Wed, Sat, Sun 11:00–6:00, and notes reservations from 20:00 and opening until 10:00; reviews describe roughly 20:00 or 22:00 to 8:00–10:00 (2024–2026). Check before going. Cards and QR accepted; no e-money (Tabelog). Heated tobacco only in a designated area (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kozu 2-1-15, just off Matsuyamachi-suji — 5 min from Nipponbashi or Tanimachi 9-chome Stn',
    cuisine: 'Late-night tantanmen and izakaya · soup tantanmen, white sesame ¥1,000 or black sesame ¥1,000–1,100 · brothless tantanmen on thick wavy noodles · spice levels, level 5 +¥100 · Sichuan pepper and homemade chili oil · meat miso, dried shrimp, mizuna, takuan, nuts · extra noodles · kara-age · seasoned egg · 5 counter seats, 3 table seats',
    website: null, gmaps: gm('Mr.R 高津 担々麺'), menu_url: null,
    notes: "[Ramen · an overnight tantanmen counter off Matsuyamachi-suji] An eight-seat tantanmen shop and izakaya that opens in the evening and runs into the next morning, so it feeds night-shift workers and late drinkers. The soup tantanmen comes white or black (¥1,000; ¥1,100 for the black in August 2026). The white is sesame-rich but surprisingly light; the black is thick and jet-black. Both numb with Sichuan pepper and homemade chili oil, over thin straight noodles topped with meat miso, dried shrimp, mizuna and takuan, which one diner likened to a laksa note. There's a brothless version on thick wavy noodles, spice up to level 5, extra noodles, and a garlicky kara-age. Water comes scented with orange peel. Hours shift, so check first.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 November 2023 (Tabelog)', background: 'Tantanmen shop and izakaya with overnight hours (2024–2026 reviews).', philosophy: null, specialty: 'White and black sesame tantanmen.',
      anecdotes: [
        { text: '"The rich and thick black sesame broth had an intense numbing spiciness. The noodles were thin and straight… The takuan added an unexpected yet delightful touch." — April 2026, black soup tantanmen, level 4.', source: R + 'B498083997/' },
        { text: '"Surprisingly, even though it had a strong sesame flavor, it was quite light and easy to eat." — August 2025, white soup tantanmen.', source: R + 'B511749569/' },
      ],
      japanese_sources_summary: '食べログ: Mr.R、大阪市中央区高津2-1-15、日本橋駅・谷町九丁目駅から徒歩5分、月・木・金18:00〜翌6:00、火11:00〜18:00、水・土・日11:00〜翌6:00、20時から予約可・10時まで営業との記載、カード・QR可、電子マネー不可、8席(カウンター5、テーブル3)、加熱式たばこのみ喫煙所、2023年11月21日開店。口コミ(2024年12月〜2026年8月): 汁あり担々麺の黒1,000円、辛さ4、濃厚な黒ごまのスープ、しびれ、細ストレート麺、肉味噌・干しえび・水菜・たくあん、22時〜10時の営業、白のレベル5と味玉、汁なし担々麺の白は太ちぢれ麺、レベル5は+100円、20時〜翌10時、すりごまたっぷり、えびでラクサ風、にんにくの効いた唐揚げ、夏は冷やしも、夜勤の休憩に、オレンジピールの水、自家製ラー油と花椒、替え玉、居酒屋兼担々麺、20時〜8時、店員が気さく、黒の担々麺1,100円、松屋町筋から少し入った場所。',
      confidence: 'medium', sources: [TB, R + 'B498083997/', R + 'B511749569/', R + 'B510739262/', R + 'B528529898/', R + 'B529736314/', R + 'B533435018/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: ['rayu'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles in the soup tantanmen; thick wavy noodles in the brothless (December 2024–April 2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'shiru_nashi_tantanmen'],
      signature_bowl: 'Soup tantanmen, white or black, ¥1,000 (May 2026); black ¥1,100 (August 2026).',
      chashu: null,
      notable_toppings: ['meat miso', 'dried shrimp', 'takuan', 'mizuna', 'nuts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso and dried shrimp.' },
      pantheon: 'Kozu\'s overnight tantanmen: white or jet-black sesame, numbing, with takuan for crunch.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B498083997/', '"The rich and thick black sesame broth."'],
        oiliness: [R + 'B511749569/', '"Quite light and easy to eat" (white) — mid-scale.'],
        clarity: [R + 'B529736314/', '"A thick, jet-black broth" — placed low.'],
        tare_strength: [R + 'B529736314/', '"The intense flavor of sesame spread across my palate" — mid-scale.'],
        noodle_firmness: [R + 'B511749569/', '"The noodles were thin and clung well to the soup" — mid-scale.'],
        aroma_punch: [R + 'B498083997/', '"An intense numbing spiciness."'],
      },
      confidence: 'medium', sources: [R + 'B498083997/', R + 'B511749569/', R + 'B529736314/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight seats; friendly izakaya-style staff (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津2-1-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津二丁目1番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529736314/', R + 'B533435018/'],
    price_note: 'Prices from April–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Soup tantanmen, white', '', 'Tantanmen', 'no', 'no', 'May 2026.', 'tantan_shiro'),
      it('', '', 'Soup tantanmen, black', '¥1,000', 'Tantanmen', 'no', 'no', '¥1,100 in August 2026.', 'tantan_kuro'),
      it('', '', 'Brothless tantanmen', '', 'Tantanmen', 'no', 'no', 'December 2024.', 'shirunashi'),
      it('', '', 'Spice level 5', '+¥100', 'Options', 'no', 'no', 'December 2024.', 'level5'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'July 2025.', 'karaage'),
    ] }, {
    cuisine: '深夜の担々麺と居酒屋・汁あり担々麺、白ごま1,000円か黒ごま1,000〜1,100円・太ちぢれ麺の汁なし担々麺・辛さを選べる、レベル5は+100円・花椒と自家製ラー油・肉味噌、干しえび、水菜、たくあん、ナッツ・替え玉・唐揚げ・味玉・カウンター5席、テーブル3席',
    neighborhood: '中央区高津2-1-15、松屋町筋から少し入った場所。日本橋駅・谷町九丁目駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。担々麺に肉味噌と干しえび。',
    notes: '[ラーメン・松屋町筋近くの夜通しの担々麺] 夜に開いて翌朝まで営業する8席の担々麺と居酒屋の店で、夜勤の人や飲んだ後の客に。汁あり担々麺は白か黒(1,000円、2026年8月は黒が1,100円)。白はごまが濃いのに意外と軽く、黒は濃厚で真っ黒。どちらも花椒と自家製ラー油でしびれ、細ストレート麺に肉味噌、干しえび、水菜、たくあんがのり、ラクサのようと感じた人も。太ちぢれ麺の汁なし、辛さはレベル5まで、替え玉、にんにくの効いた唐揚げも。水はオレンジピールの香り。営業時間は変わるので事前に確認を。',
  });
}

// ================================================================ 牛一嘴 蘭州牛肉拉麺屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27140533/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://niuyizui-jp.com';
  put({
    id: 'osaka_gyuu_isshi_lanzhou', name: '牛一嘴 蘭州牛肉拉麺屋 (Gyuu Isshi Lanzhou Gyuniku Ramen Ya)', category: 'OMNI',
    lat: 34.676186, lng: 135.506145, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-pulled wheat noodles; gyoza and dumplings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth and beef.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 22:00) (Tabelog). Order and pay at a vending machine; QR accepted (September 2026). Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others) accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-3-7, Kasamatsu Bldg — 3 min from Nagahoribashi Stn',
    cuisine: 'Hand-pulled Lanzhou beef noodle soup ¥950 · free unlimited noodle refills · six to ten noodle widths, from 1 mm to extra-wide flat · clear beef-bone broth · beef, daikon, garlic shoots, cilantro · spice level to order, chili oil and black vinegar on the table · lunch set B ¥1,000 with three gyoza and a small vegetable dish · sour soup dumplings with shrimp · cumin beef burger · beef skewers · bang bang chicken · 79 seats',
    website: OWN, gmaps: gm('牛一嘴 蘭州牛肉拉麺屋 南船場'), menu_url: null,
    notes: "[Chinese · hand-pulled Lanzhou beef noodles with free refills near Nagahoribashi] A spacious 79-seat Lanzhou beef-noodle shop open since 2024, where a noodle maker stretches and twists the dough after you order, a show in itself. The beef noodle soup (¥950) is a light, clear broth of beef bones and meat with beef, daikon, garlic shoots and cilantro. Pick the noodle width, from 1 mm threads to extra-wide flat ribbons like lasagna sheets, and refills are free and unlimited. Spice comes to order; add chili oil and the black vinegar the wall recommends. Lunch set B (¥1,000) adds three gyoza and a small vegetable dish. There are also shrimp dumplings in sour soup, a cumin beef burger and beef skewers. It's busy at lunch, and the room has an overseas feel.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 February 2024 (Tabelog)', background: 'Lanzhou beef noodle shop (Tabelog, staff-maintained); official site niuyizui-jp.com.', philosophy: null, specialty: 'Hand-pulled Lanzhou beef noodle soup.',
      anecdotes: [
        { text: '"Soon enough, I received noodles that were truly massive, resembling bandages, and I added them to the remaining broth… it was amusing, like eating lasagna sheets. Yet, it was delicious." — September 2026, free extra-wide noodle refill.', source: R + 'B535651776/' },
        { text: '"Watching the noodle chef in the kitchen skillfully stretch and twist the dough was captivating." — September 2026.', source: R + 'B536556430/' },
      ],
      japanese_sources_summary: '公式 niuyizui-jp.com。食べログ(店舗会員): 牛一嘴 蘭州牛肉拉麺屋、大阪市中央区南船場2-3-7 加佐松ビル、長堀橋駅から徒歩3分、毎日11:00〜22:00(L.O.22:00)、カード・電子マネー・QR可、79席(カウンター・テーブル)、禁煙、車椅子可、Wi-Fi、2024年2月20日開店。口コミ(2026年9月): 8種の麺の替え玉が無料で無制限、ラーメン950円、ランチは餃子かご飯を150円で追加、牛骨スープ、辛さを調整、Lunch Set B(餃子3個と小皿の野菜炒め)、中太麺、券売機で注文と会計、注文後に手打ち、見た目ほど辛くない、卓上のラー油と黒酢、牛チャーシュー・ニンニクの芽・パクチー・大根、極太の平打ち麺はラザニアのよう、日本語がほとんど聞こえない、ソフトドリンク無料、酸辣スープの海老水餃子、Set B 1,000円、6種ほどの麺、スープは澄んでいて辛口のフォーのよう、約80席、麺職人の手延べ、辛くない蘭州牛肉麺、棒棒鶏、クミン牛肉バーガー、牛肉串5本、1mmの極細麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535651776/', R + 'B536556430/', R + 'B535607290/', R + 'B535982207/', R + 'B536115561/', R + 'B536259921/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at a vending machine; mostly overseas diners (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-3-7 加佐松ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目3番7号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535607290/', R + 'B536259921/'],
    price_note: 'Prices from September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Lanzhou beef noodle soup', '¥950', 'Noodles', 'no', 'no', 'Free unlimited noodle refills; September 2026.', 'lanzhou'),
      it('', '', 'Lunch set B (noodles, three gyoza, small vegetable dish)', '¥1,000', 'Sets', 'no', 'no', 'September 2026.', 'set_b'),
      it('', '', 'Sour soup dumplings with shrimp', '', 'Sides', 'no', 'no', 'September 2026.', 'suantang_jiaozi'),
      it('', '', 'Cumin beef burger', '', 'Sides', 'no', 'no', 'September 2026.', 'cumin_burger'),
      it('', '', 'Beef skewers (5)', '', 'Sides', 'ask', 'no', 'September 2026.', 'beef_kushi'),
    ] }, {
    cuisine: '手延べの蘭州牛肉麺950円・麺の替え玉は無料で無制限・1mmの極細から極太の平打ちまで6〜10種の麺・澄んだ牛骨スープ・牛肉、大根、ニンニクの芽、パクチー・辛さを選べる、卓上にラー油と黒酢・餃子3個と野菜の小皿が付くランチのSet B 1,000円・酸辣スープの海老水餃子・クミン牛肉バーガー・牛肉串・棒棒鶏・79席',
    neighborhood: '中央区南船場2-3-7 加佐松ビル。長堀橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の手延べ麺、餃子と水餃子。',
    vegan_detail: 'ヴィーガンではありません。牛骨のスープと牛肉。',
    notes: '[中華・長堀橋近くの替え玉無料の手延べ蘭州牛肉麺] 2024年開店の79席の広い蘭州牛肉麺の店で、注文を受けてから麺職人が生地を延ばしてねじる様子はそれだけで見もの。牛肉麺(950円)は牛骨と肉の澄んだ軽いスープに、牛肉、大根、ニンニクの芽、パクチー。麺の太さは1mmの極細からラザニアのような極太の平打ちまで選べ、替え玉は無料で無制限。辛さは注文時に、ラー油や壁の貼り紙がすすめる黒酢も足して。ランチのSet B(1,000円)は餃子3個と野菜の小皿付き。酸辣スープの海老水餃子、クミン牛肉バーガー、牛肉串も。昼は混み合い、店内は海外のような雰囲気。',
  });
}

// ================================================================ 8ppy麻辣湯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27128472/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.nambaparks.com/floor/f06/f06_17.html';
  put({
    id: 'osaka_8ppy_mala_tang_namba_parks', name: '8ppy麻辣湯 (8ppy Mala Tang)', category: 'OMNI',
    lat: 34.661622, lng: 135.50176, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: broth and seasonings not described; mochi and noodle options vary.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: the broth base is not described. Vegetables, fungi and noodles are picked individually; ask about the broth.',
    hours_raw: 'Daily 11:00–21:30; hours may change (Tabelog). Order by marking a sheet at the table and pay at the end (September 2026). Cards (AMEX), e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Parks 6F, Nambanaka 2-10-70 — by Nankai Namba Stn',
    cuisine: 'Pick-your-own mala tang · mark noodles, broth, ingredients and sides on a sheet · spice level to order · thick sweet potato noodles, vermicelli · mulukhiyah, white fungus, king oyster mushroom, tomato, cilantro, mochi · herbal, numbing broth · garlic, black vinegar and Sichuan pepper oil on the table · pork shabu-shabu rice bowl · about ¥1,500 for seven items',
    website: OWN, gmaps: gm('8ppy麻辣湯 なんばパークス'), menu_url: null,
    notes: "[Chinese · build-your-own mala tang in Namba Parks] A small, cramped mala-tang counter on the sixth floor of Namba Parks, around since before the mala-tang boom packed with young women on one visit. Mark your noodles, broth, ingredients, sides and spice level on a sheet at the table; it's slower than the usual line-and-grab, which suits first-timers, though the small print makes the total hard to add up. One regular builds a bowl of mulukhiyah, white fungus, king oyster mushroom, tomato and cilantro with thick sweet-potato noodles (seven items ran ¥1,500 in August 2026). The broth tastes strongly herbal, with an addictive numbing heat, and garlic, black vinegar and Sichuan pepper oil wait on the table. Portions can feel small; add a pork shabu-shabu rice bowl if hungry.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Mala tang shop in Namba Parks; "around long before the mala tang craze" (August 2026 review).', philosophy: null, specialty: 'Pick-your-own mala tang.',
      anecdotes: [
        { text: '"I can\'t resist the reliable mulukhiyah, white fungus, king oyster mushrooms, tomatoes, and cilantro. I always get the thick sweet potato noodles at level 2!! It was JPY 1500 for 7 items!" — August 2026.', source: R + 'B525248428/' },
        { text: '"On the table, you\'ll find garlic, black vinegar, and Sichuan pepper oil, which allows for some great flavor customization!" — August 2026.', source: R + 'B533510702/' },
      ],
      japanese_sources_summary: '食べログ: 8ppy麻辣湯、大阪市浪速区難波中2-10-70 なんばパークス 6F、なんばから215m、毎日11:00〜21:30、カード(AMEX)・電子マネー・QR可、禁煙。口コミ(2026年7〜9月): 毎日でも食べられる、何年も通う、モロヘイヤ・白きくらげ・エリンギ・トマト・パクチー、太いさつまいも麺、辛さ2、7品で1,500円、辛さを選べる、卓上の味変、テーブルの用紙に記入して注文、小さな字で合計がわかりにくい、薬膳の風味、ブーム前からある、ニンニク・黒酢・花椒油、量は少なめ、若い女性で満席、春雨、立ち食いそば屋のように狭い、1,500円ほど、豚しゃぶご飯、もち。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525248428/', R + 'B533510702/', R + 'B533000013/', R + 'B535162836/', R + 'B535587562/', R + 'B531217290/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by marking a Japanese sheet at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-70 なんばパークス 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目10番70号 (go) 99m (inside Namba Parks); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525248428/', R + 'B535587562/'],
    price_note: 'Priced by item; about ¥1,500 for seven items (August–September 2026).', last_checked: TODAY, items: [
      it('', '', 'Mala tang, pick your own ingredients', '', 'Mala tang', 'no', 'ask', 'Broth base not described; August–September 2026.', 'malatang'),
      it('', '', 'Pork shabu-shabu rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'butashabu_don'),
    ] }, {
    cuisine: '具を選ぶ麻辣湯・麺、スープ、具、サイドを用紙に記入・辛さを選べる・太いさつまいも麺、春雨・モロヘイヤ、白きくらげ、エリンギ、トマト、パクチー、もち・薬膳の風味のしびれるスープ・卓上にニンニク、黒酢、花椒油・豚しゃぶご飯・7品で1,500円ほど',
    neighborhood: 'なんばパークス 6F、浪速区難波中2-10-70。南海なんば駅すぐ',
    gf_detail: '実際にはグルテンフリーではありません。スープや調味料の中身は不明、もちや麺の種類もさまざま。',
    vegan_detail: 'そのままではヴィーガンではありません。スープのベースは不明。野菜、きのこ、麺は個別に選べるので、スープについて確認を。',
    notes: '[中華・なんばパークスの具を選ぶ麻辣湯] なんばパークス6階の小さく狭い麻辣湯の店で、ブーム前からあり、若い女性で満席だった日も。テーブルの用紙に麺、スープ、具、サイド、辛さを記入して注文。並んで具を取る方式よりゆっくり選べて初めてでも安心だが、字が小さく合計はわかりにくい。ある常連はモロヘイヤ、白きくらげ、エリンギ、トマト、パクチーに太いさつまいも麺(2026年8月は7品で1,500円)。スープは薬膳の風味が強く、やみつきになるしびれる辛さで、卓上にはニンニク、黒酢、花椒油。量は少なめに感じることも。お腹が空いていれば豚しゃぶご飯を。',
  });
}

save();
