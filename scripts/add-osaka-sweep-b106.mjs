// Osaka sweep (2-mile circle around Dotonbori), batch 106 — ramen phase (all OMNI).
//   + 麺や 夢中 (light Hakata tonkotsu ¥700, lunch ramen + rice ¥800; Dia Palace B1F, Uchihonmachi; one-person shop)
//   + 藍丹らーめん (salty shoyu and shio, vegetable noodles and tantanmen, lunch only; Kawaramachi)
//   + 麺や 修 (thick chicken paitan, summer chilled sea bream shio; one-chef counter by Uehommachi)
//   + 未来軒 (tantanmen in several flavors plus Chinese plates, from 2025; Kawaramachi)
//   Skipped: 煮干しラーメン にーぼ 27120055 (newest review May 2025; existence not confirmable).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 106);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27120055', 'Newest Tabelog review is May 2025 and none in 2026; existence not confirmable. Re-check later.');

// ================================================================ 麺や 夢中
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27122132/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_menya_muchu_uchihonmachi', name: '麺や 夢中 (Menya Muchu)', category: 'OMNI',
    lat: 34.68325, lng: 135.5122, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tonkotsu-shoyu and tantanmen variations.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth in every bowl; chashu; mentaiko rice.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:30–23:00; closed Sun and public holidays; closes if no customers by 22:00; hours may change (Tabelog). Order verbally (May 2024). Rice sometimes sold out (2024, June 2026). Cards (VISA, Master, JCB, AMEX), IC cards, iD, QUICPay, PayPay, d Barai and au PAY accepted (Tabelog). Reservations possible by phone (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Uchihonmachi 2-3-8, Dia Palace Bldg B1F — 474 m from Tanimachi 4-chome Stn',
    cuisine: 'Light Hakata-style tonkotsu · tonkotsu ramen ¥700: milky, light, creamy pork-bone broth, straight thin noodles cooked to your firmness, grilled chashu, green onion, bean sprouts · variations on the same base: tonkotsu shoyu, garlic with sliced garlic, butter, spicy, tomato ramen with halved tomatoes, tantanmen · extra noodles ¥100 · lunch: any regular ramen + mentaiko rice, diced chashu rice or white rice ¥800 · two tables and about seven counter seats',
    website: null, gmaps: gm('麺や 夢中 内本町'), menu_url: null,
    notes: "[Ramen · light Hakata tonkotsu for ¥700 in the Dia Palace basement] A small, one-person ramen shop in the basement of the Dia Palace building in Uchihonmachi, the same building as Choro and Menya Odashi to Niku to, open since 2021. The tonkotsu ramen (¥700) is a milky but light, creamy pork-bone soup with very little odor, on straight thin Kyushu-style noodles cooked to the firmness you ask for. Everything else is a variation on that base: tonkotsu shoyu, sliced-garlic, butter, spicy, a tomato ramen and tantanmen. At lunch, ¥800 gets any regular ramen with mentaiko rice, diced chashu rice or plain rice, though the rice sometimes runs out. One diner found the staff attentive in explaining things to overseas visitors. It's light rather than heavy, so one diner wished it were more filling. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 March 2021 (Tabelog)', background: 'Ramen shop run by one person (June 2025 review; Tabelog).', philosophy: null, specialty: 'Hakata-style tonkotsu ramen and variations.',
      anecdotes: [
        { text: '"It had a milky broth, three slices of grilled chashu, green onions, and bean sprouts… it was a light and creamy tonkotsu soup… straight thin noodles, quite a generous portion!" — May 2024, tonkotsu ramen ¥700.', source: R + 'B485383331/' },
        { text: '"The richness is kept in check, resulting in a creamy pork bone soup without any heaviness or unpleasant odors… The noodles were thin with a nice snap." — June 2025, tomato ramen.', source: R + 'B508019890/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 夢中、大阪市中央区内本町2-3-8 ダイアパレス本町ビル B1F、谷町四丁目から474m、月〜土 11:30〜14:00・17:30〜23:00、日・祝休み、22時までに客がいなければ閉店、予約可、カード(VISA、Master、JCB、AMEX)・交通系IC・iD・QUICPay・PayPay・d払い・au PAY可、2021年3月15日開店。口コミ(2022年12月〜2026年6月): 昼はラーメンとご飯(明太子ご飯、角切りチャーシューご飯、白ご飯から)で800円、豚骨、バター、にんにく、辛い、豚骨醤油、麺の硬さを選べる、細麺、スライスにんにく、担々麺、豚骨ラーメン700円、口頭注文、乳白色のスープ、焼きチャーシュー3枚、ねぎ、もやし、軽くクリーミー、ストレート細麺で量が多い、替え玉100円、豚骨臭がない、博多風、外国人客に丁寧に説明、替え玉が速い、ご飯が売り切れ、トマトラーメン(半分に切ったトマト約8個)、一人で切り盛り、九州風の細麺、テーブル2卓とカウンター約7席、軽くてもう少しボリュームが欲しいという声。',
      confidence: 'medium', sources: [TB, R + 'B451136934/', R + 'B485383331/', R + 'B494142761/', R + 'B508019890/', R + 'B520001765/', R + 'B530722475/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'light',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Straight thin Kyushu-style noodles, firmness to order; extra noodles ¥100 (2024–2025).' },
      regional_style: ['Hakata'], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Tonkotsu ramen, ¥700 (May 2024; June 2026).',
      chashu: 'Grilled chashu, three slices; a little salty to one diner (May 2024).',
      notable_toppings: ['sliced garlic', 'bean sprouts', 'halved tomatoes (tomato ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Uchihonmachi\'s ¥700 light Hakata tonkotsu in a basement, with a ¥800 ramen-and-rice lunch.',
      profile: { richness: 2, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B530722475/', '"It was tonkotsu, but quite light" — placed low.'],
        oiliness: [R + 'B508019890/', '"Without any heaviness" — placed low.'],
        clarity: [R + 'B485383331/', '"It had a milky broth" — bottom of scale.'],
        tare_strength: [R + 'B520001765/', '"Rich and flavorful tonkotsu"; no diner remark on tare strength — mid-scale.'],
        noodle_firmness: [R + 'B508019890/', '"Thin with a nice snap"; firmness to order (B451136934) — placed high.'],
        aroma_punch: [R + 'B520001765/', '"With very little odor" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B485383331/', R + 'B508019890/', R + 'B520001765/', R + 'B530722475/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff attentive in explaining to overseas visitors (October 2024); cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区内本町2-3-8 ダイアパレス本町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内本町二丁目3番8号 (go) 13m; same building as Choro and Menya Odashi to Niku to, pin offset ~11 m west so the three do not stack; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B451136934/', R + 'B485383331/', R + 'B530722475/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥700', 'Ramen', 'no', 'no', 'May 2024; June 2026.', 'tonkotsu'),
      it('', '', 'Tonkotsu shoyu ramen', '', 'Ramen', 'no', 'no', 'August 2025.', 'tonkotsu_shoyu'),
      it('', '', 'Garlic ramen', '', 'Ramen', 'no', 'no', 'August 2024.', 'garlic'),
      it('', '', 'Tomato ramen', '', 'Ramen', 'no', 'no', 'June 2025.', 'tomato'),
      it('', '', 'Lunch: regular ramen + rice (mentaiko, diced chashu or white)', '¥800', 'Sets', 'no', 'no', 'August 2024.', 'lunch_set'),
      it('', '', 'Extra noodles', '¥100', 'Extra noodles', 'no', 'no', 'May 2024.', 'kaedama'),
    ] }, {
    cuisine: '軽い博多風豚骨・豚骨ラーメン700円: 乳白色で軽くクリーミーな豚骨スープ、好みの硬さのストレート細麺、焼きチャーシュー、ねぎ、もやし・同じスープの豚骨醤油、スライスにんにくのにんにく、バター、辛い、半分に切ったトマトのトマトラーメン、担々麺・替え玉100円・昼はラーメンに明太子ご飯、角切りチャーシューご飯か白ご飯で800円・テーブル2卓とカウンター約7席',
    neighborhood: '中央区内本町2-3-8 ダイアパレス本町ビル B1F。谷町四丁目駅から474m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、豚骨醤油や担々麺など。',
    vegan_detail: 'ヴィーガンではありません。どの一杯も豚骨スープ、チャーシュー、明太子ご飯。',
    notes: '[ラーメン・ダイアパレス地下、700円の軽い博多豚骨] 内本町のダイアパレスビル地下、一人で切り盛りする小さなラーメン店で、ちょろ、麺や おだしとにくとと同じビル、2021年開店。豚骨ラーメン(700円)は乳白色でも軽くクリーミー、臭みのほとんどない豚骨スープに、好みの硬さで茹でる九州風のストレート細麺。ほかは同じスープの変化形: 豚骨醤油、スライスにんにく、バター、辛い、トマトラーメン、担々麺。昼は800円で好きなラーメンに明太子ご飯、角切りチャーシューご飯か白ご飯、ただしご飯が売り切れの日も。外国人客に丁寧に説明していたという声。重くなく軽いので、もう少しボリュームが欲しいという声も。カード、QR可。',
  });
}

// ================================================================ 藍丹らーめん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27110058/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'osaka_rantan_ramen_kawaramachi', name: '藍丹らーめん (Rantan Ramen)', category: 'OMNI',
    lat: 34.685785, lng: 135.505456, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; crab sticks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and pork broth (one diner\'s read); chashu; egg.',
    hours_raw: 'Mon–Sat 11:30–15:00; closed Sun and public holidays; hours may change (Tabelog). Ticket machine outside the entrance; self-service water. Quieter around 12:30 (October 2025). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi 2-3-15, set back inside the building — 404 m from Sakaisuji-Hommachi Stn',
    cuisine: 'Lunch-only ramen counter · shoyu ramen: salty seafood-and-pork broth, thick grilled chashu, egg · shio ramen: strong salt and pepper, two slices of chashu, menma, wood ear, green onion, egg, spinach, nori · vegetable noodles, large ¥950: crab sticks, wood ear, roast pork · tantanmen ¥900, mild heat · sour-spicy noodles ¥900 topped with fresh tomato · rice the only side · about 15 counter seats facing the wall',
    website: null, gmaps: gm('藍丹らーめん 瓦町'), menu_url: null,
    notes: "[Ramen · salty shoyu and shio, vegetable noodles and tantanmen at lunch in Honmachi] A bright, clean lunch-only counter of about 15 wall-facing seats under Chinese-style lanterns, a little inside its building near Sakaisuji-Honmachi, open since 2019. The ramen runs salty: the shoyu is a seafood-and-pork broth \"for those who enjoy bold flavors\" with thick grilled chashu, and the shio hits hard with salt and pepper, which one diner likened to a much-upgraded Sugakiya. Beyond those there are vegetable noodles (¥950 large) with crab sticks and wood ear, a mild tantanmen (¥900) for the heat-shy, and sour-spicy noodles (¥900) topped with fresh tomato. Buy the ticket at the machine outside; water is self-service. Lunch is quieter by about 12:30. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 January 2019 (Tabelog)', background: 'Ramen counter (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Shoyu and shio ramen; vegetable noodles; tantanmen.',
      anecdotes: [
        { text: '"The broth seemed to be a seafood and pork blend. It had a relatively strong salty taste, but it wasn\'t overwhelming… Those who enjoy bold flavors might like it!" — September 2025, shoyu ramen.', source: R + 'B514582472/' },
        { text: '"I found the saltiness to be quite strong with a noticeable pepper kick… While the salt flavor hits hard, it was nice that it didn\'t leave an unpleasant aftertaste." — March 2026, shio ramen.', source: R + 'B524552889/' },
      ],
      japanese_sources_summary: '食べログ: 藍丹らーめん、大阪市中央区瓦町2-3-15、堺筋本町から404m、月〜土 11:30〜15:00、日・祝休み、カード・電子マネー・QR不可、2019年1月7日開店。口コミ(2025年9月〜2026年9月): ビルの少し奥で見つけにくい、カウンターのみ、店外の券売機、水とおしぼりはセルフ、醤油ラーメン、サイドはご飯のみ、魚介と豚のスープのよう、塩気は強めだがきつくない、焼いた厚いチャーシュー、野菜麺大盛り950円(カニカマ、きくらげ、焼豚)、12時半ごろは空く、担々麺900円は辛すぎない、大きな看板、壁向きのカウンター約15席、明るく清潔、中国風の提灯、塩ラーメン(チャーシュー2枚、メンマ、きくらげ、ねぎ、卵、ほうれん草、海苔)、塩気が強く胡椒が効く、Sugakiyaの上位版のようという声、後味は悪くない、酸辣麺900円に生のトマト、辛すぎず酸味もちょうどいい、冷麺で知られるという声、丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B514582472/', R + 'B519554682/', R + 'B524552889/', R + 'B529062717/', R + 'B535368141/'] },
    ramen: {
      broth_base: ['gyokai', 'pork'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: null },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Shoyu ramen, the top-left ticket button (September 2025).',
      chashu: 'Thick grilled chashu, slightly dry (September 2025).',
      notable_toppings: ['wood ear', 'spinach', 'fresh tomato (sour-spicy noodles)', 'crab sticks (vegetable noodles)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Seafood and pork broth.' },
      pantheon: 'Sakaisuji-Honmachi\'s lunch-only lantern-lit counter: bold, salty shoyu and peppery shio.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 5, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B529062717/', '"It might just be rich in umami" (sour-spicy noodles) — mid-scale.'],
        oiliness: [R + 'B524552889/', 'No diner remark on oil — mid-scale.'],
        clarity: [R + 'B524552889/', 'No diner remark on clarity — mid-scale.'],
        tare_strength: [R + 'B524552889/', '"The saltiness to be quite strong"; "relatively strong salty taste" (B514582472) — top of scale.'],
        noodle_firmness: [R + 'B519554682/', '"The noodles were quite good too"; no remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B524552889/', '"A noticeable pepper kick" — placed high.'],
      },
      confidence: 'low', sources: [R + 'B514582472/', R + 'B524552889/', R + 'B529062717/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; attentive staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区瓦町2-3-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦町二丁目3番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514582472/', R + 'B519554682/', R + 'B529062717/'],
    price_note: 'Prices from October 2025–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2025.', 'shoyu'),
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'shio'),
      it('', '', 'Vegetable noodles, large', '¥950', 'Ramen', 'no', 'no', 'October 2025.', 'yasai_men'),
      it('', '', 'Tantanmen', '¥900', 'Ramen', 'no', 'no', 'October 2025.', 'tantanmen'),
      it('', '', 'Sour-spicy noodles with fresh tomato', '¥900', 'Ramen', 'no', 'no', 'May 2026.', 'suanla'),
      it('', '', 'Rice', '', 'Sides', 'ask', 'ask', 'September 2025.', 'rice'),
    ] }, {
    cuisine: '昼のみのラーメンのカウンター・醤油ラーメン: 塩気のある魚介と豚のスープ、焼いた厚いチャーシュー、卵・塩ラーメン: 強い塩気と胡椒、チャーシュー2枚、メンマ、きくらげ、ねぎ、卵、ほうれん草、海苔・野菜麺大盛り950円: カニカマ、きくらげ、焼豚・担々麺900円、辛さ控えめ・生のトマトをのせた酸辣麺900円・サイドはご飯のみ・壁向きのカウンター約15席',
    neighborhood: '中央区瓦町2-3-15、ビルの少し奥。堺筋本町駅から404m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、カニカマ。',
    vegan_detail: 'ヴィーガンではありません。魚介と豚のスープ(ある客の見立て)、チャーシュー、卵。',
    notes: '[ラーメン・本町、昼のみ、塩気の強い醤油と塩、野菜麺と担々麺] 堺筋本町近く、ビルの少し奥にある、中国風の提灯の下に壁向きのカウンター約15席が並ぶ明るく清潔な昼のみの店で、2019年開店。ラーメンは塩気が強め: 醤油は魚介と豚のスープで「濃い味が好きな人に」、焼いた厚いチャーシュー入り。塩は塩と胡椒がしっかり効き、Sugakiyaの上位版のようと書いた人も。ほかにカニカマときくらげの野菜麺(大盛り950円)、辛いのが苦手な人向けの控えめな担々麺(900円)、生のトマトをのせた酸辣麺(900円)。食券は店外の券売機で、水はセルフ。昼は12時半ごろには空く。現金のみ。',
  });
}

// ================================================================ 麺や 修
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27120790/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00']; const F = day(L, ['17:30', '20:00']);
  put({
    id: 'osaka_menya_shu_uehommachi', name: '麺や 修 (Menya Shu)', category: 'OMNI',
    lat: 34.666231, lng: 135.522986, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; spicy miso condiment; mazesoba sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; sea bream broth; chashu; bonito flakes.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–14:00 and 17:30–20:00; Wed and Sat 11:00–14:00 only; closed Sun; hours may change (Tabelog). 2024–2025 reviews gave evenings to 21:00 and listed public holidays as closed. Order on the sheet at your seat; pay after eating, cash only (2024–2025 reviews; Tabelog).',
    hours: { 0: F, 1: F, 2: day(L), 3: F, 4: F, 5: day(L) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Kozu-cho 11-7 (Tennoji-ku) — 334 m from Osaka-Uehommachi Stn',
    cuisine: 'Chicken paitan, one chef · chicken paitan ramen ¥850: thick, velvety, concentrated paitan on smooth straight thin noodles, tender chashu, long menma, soft-boiled egg (+¥150), red onion, crisp green onion, bonito flakes; spicy miso on the side · an even richer, thicker paitan · chuka soba · warm mazesoba ¥850 · summer: chilled sea bream shio ramen ¥850 with chicken breast, egg, naruto, kaiware and yuzu salt (limited) · rice ¥100 · about 8 counter seats',
    website: null, gmaps: gm('麺や 修 東高津町'), menu_url: null,
    notes: "[Ramen · thick chicken paitan from a one-chef counter by Uehommachi] A clean, eight-seat counter a few minutes from Uehommachi where one chef cooks fast, open since 2020. The chicken paitan (¥850) is thick and velvety, \"rich yet not overwhelming\" to one diner, with smooth straight thin noodles, tender chashu, long menma, red onion and bonito flakes. Stir in the spicy miso on the side little by little; it's hot. For more, there's an even richer, thicker paitan; a chuka soba one diner prefers; and a warm mazesoba. In summer, a chilled sea bream shio ramen with yuzu salt sells in limited numbers. Finish the soup with ¥100 rice. Mark your order on the sheet at the counter and pay cash after. One diner hit clumps of salt. Lunch only on Wednesday and Saturday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2020 (Tabelog)', background: 'Ramen counter run by one chef (October 2026 review; Tabelog).', philosophy: null, specialty: 'Chicken paitan; summer chilled sea bream shio.',
      anecdotes: [
        { text: '"The rich, creamy broth with a concentration level of 8 was thick and velvety, a truly luxurious white soup… The scattered bonito flakes added a vibrant aroma." — October 2024, rich chicken paitan.', source: R + 'B492231439/' },
        { text: '"The rich flavor of the chicken broth paired perfectly with Menya Teikaku\'s smooth, straight, thin noodles… my preference still leans towards the \'Chuka Soba.\'" — August 2026, chicken paitan ¥850.', source: R + 'B533953716/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 修、大阪市天王寺区東高津町11-7、大阪上本町から334m、月・火・木・金 11:00〜14:00・17:30〜20:00、水・土 11:00〜14:00、日休み、カード・電子マネー・QR不可、2020年12月15日開店。口コミ(2024年9月〜2026年10月): 卓上の注文用紙に記入、後払い・現金のみ、カウンター約8席、夏限定の冷やし鯛塩ラーメン850円(鶏むね、半熟卵、メンマ、なると、かいわれ、柚子塩)、細いストレート麺、提供が速い、濃厚鶏白湯ラーメン(濃度8)はとろりと濃い、柔らかいチャーシュー、長いメンマ、紫玉ねぎ、揚げねぎ、かつお節、味変の辛味噌はかなり辛い、ご飯100円、さらに濃い濃厚鶏白湯もある、冷やし鯛そば1,100円(2024年、1日10食)に焼いた鯛、塩の塊で塩辛いことがあったという声、温かいまぜそば850円、カウンターのみで清潔、店主が気さく、濃厚だがくどくない、鶏白湯850円と味玉150円、Menya Teikakuの細麺、中華そば、一人で営業。',
      confidence: 'medium', sources: [TB, R + 'B492231439/', R + 'B513027653/', R + 'B525534062/', R + 'B529063534/', R + 'B533953716/', R + 'B538079011/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'rich',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Smooth straight thin noodles from Menya Teikaku (August 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Chicken paitan ramen, ¥850 (August 2026).',
      chashu: 'Very tender chashu (October 2024).',
      notable_toppings: ['bonito flakes', 'long menma', 'spicy miso', 'red onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Uehommachi\'s one-chef chicken paitan, thick and velvety, with a summer chilled sea bream shio.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B529063534/', '"Rich yet not overwhelming"; "thick and velvety" (B492231439) — placed high.'],
        oiliness: [R + 'B538079011/', 'No diner remark on oil — mid-scale.'],
        clarity: [R + 'B492231439/', '"Thick and velvety, a truly luxurious white soup" — bottom of scale.'],
        tare_strength: [R + 'B513027653/', '"A clump of salt that makes it taste overly salty" at moments — mid-scale.'],
        noodle_firmness: [R + 'B533953716/', '"Smooth, straight, thin noodles" — mid-scale.'],
        aroma_punch: [R + 'B492231439/', '"Bonito flakes added a vibrant aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B492231439/', R + 'B529063534/', R + 'B533953716/', R + 'B538079011/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Written order sheet at the seat; friendly owner (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区東高津町11-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区東高津町11番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B492231439/', R + 'B525534062/', R + 'B533953716/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '¥850', 'Ramen', 'no', 'no', 'August 2026.', 'tori_paitan'),
      it('', '', 'Extra-rich thick chicken paitan ramen', '', 'Ramen', 'no', 'no', 'October 2024.', 'nouko_paitan'),
      it('', '', 'Chuka soba', '', 'Ramen', 'no', 'no', 'August 2026.', 'chuka_soba'),
      it('', '', 'Mazesoba (warm)', '¥850', 'Ramen', 'no', 'no', 'April 2026.', 'mazesoba'),
      it('', '', 'Chilled sea bream shio ramen (summer, limited)', '¥850', 'Ramen', 'no', 'no', 'August 2025.', 'hiyashi_tai'),
      it('', '', 'Soft-boiled egg', '¥150', 'Toppings', 'no', 'no', 'August 2026.', 'egg'),
      it('', '', 'Rice', '¥100', 'Sides', 'ask', 'ask', 'October 2024.', 'rice'),
    ] }, {
    cuisine: '鶏白湯、店主一人・鶏白湯ラーメン850円: とろりと濃い鶏白湯になめらかなストレート細麺、柔らかいチャーシュー、長いメンマ、半熟卵(+150円)、紫玉ねぎ、揚げねぎ、かつお節、辛味噌を別添え・さらに濃い濃厚鶏白湯・中華そば・温かいまぜそば850円・夏は鶏むね、卵、なると、かいわれ、柚子塩の冷やし鯛塩ラーメン850円(数量限定)・ご飯100円・カウンター約8席',
    neighborhood: '天王寺区東高津町11-7。大阪上本町駅から334m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、辛味噌、まぜそばのたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、鯛のスープ、チャーシュー、かつお節。',
    notes: '[ラーメン・上本町、店主一人の濃厚鶏白湯] 上本町から数分、店主一人が手早く作る清潔なカウンター8席ほどの店で、2020年開店。鶏白湯(850円)はとろりと濃く、「濃厚だがくどくない」という声、なめらかなストレート細麺に柔らかいチャーシュー、長いメンマ、紫玉ねぎ、かつお節。別添えの辛味噌は辛いので少しずつ。もっと濃いのが好きならさらに濃い濃厚鶏白湯、中華そば派の人も、温かいまぜそばも。夏は柚子塩の冷やし鯛塩ラーメンを数量限定で。残ったスープにご飯(100円)を。注文は卓上の用紙に書き、支払いは食後に現金で。塩の塊に当たったという声も。水・土は昼のみ。',
  });
}

// ================================================================ 未来軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27152761/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_mirai_ken_kawaramachi', name: '未来軒 (Mirai Ken)', category: 'OMNI',
    lat: 34.686225, lng: 135.504829, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; meat sauce; miso and shoyu flavors; Chinese dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced-meat sauce on the tantanmen; mapo tofu; pork stir-fry.',
    hours_raw: 'Mon–Sat 11:30–15:00 and 17:00–22:00; closed Sun and public holidays; hours may change (Tabelog). Three groups ahead at 11:40 one day; quiet around 13:00 (2026 reviews). Cards, e-money and QR accepted (Tabelog). Reservations possible (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi 2-4-10, neon sign, entrance set back from the street — 467 m from Sakaisuji-Hommachi Stn',
    cuisine: 'Tantanmen shop with Chinese plates · tantanmen "Moto-Aji" (original) ¥950: generous minced-meat sauce, bean sprouts and greens, rich, mild heat, fairly thin noodles · "Shin-Aji" and miso tantanmen · shoyu tanmen, suanshu (sour-spicy) tanmen · summer chilled rich spicy tantanmen ¥1,200 on curly noodles (limited) · half tantanmen · half fried rice sets · mapo tofu, stir-fried pork and bean sprouts · lemon sours · 5 counter seats, tables and outside terrace seats',
    website: null, gmaps: gm('未来軒 瓦町'), menu_url: null,
    notes: "[Ramen · tantanmen in several flavors near Sakaisuji-Honmachi] A tantanmen shop behind a neon sign, opened in October 2025, that one diner learned is a sister shop of the Honmachi Chinese restaurant Koyouju. Start with the \"Moto-Aji\" original (¥950): a rich, only mildly spicy soup under a generous minced-meat sauce, bean sprouts and greens, on fairly thin noodles; one diner couldn't stop drinking the soup, which changes as the meat sauce mixes in. There are also \"Shin-Aji\" and miso versions, a shoyu tanmen and a sour-spicy suanshu tanmen; in summer a chilled spicy tantanmen (¥1,200) ran, though one diner wanted more heat. It also works as a casual Chinese spot: one diner had mapo tofu, pork and bean-sprout stir-fry, a half tantanmen and two lemon sours at 8 pm for under ¥2,500. Counter, tables and a terrace. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 October 2025 (Tabelog)', background: 'Tantanmen shop; one diner learned it is a sister shop of the Chinese restaurant Koyouju in Honmachi (September 2026 review).', philosophy: null, specialty: 'Tantanmen.',
      anecdotes: [
        { text: '"It was topped generously with meat sauce… it\'s interesting how the flavor of the soup changes depending on where you drink it from. When I scooped some meat sauce and drank it, the richness of the meat added a different dimension." — September 2026, Moto-Aji ¥950.', source: R + 'B535720262/' },
        { text: '"It had a distinctive aroma that was a bit unusual, but it quickly blended into a harmonious flavor. On the other hand, the noodles were quite thin." — October 2026.', source: R + 'B536605871/' },
      ],
      japanese_sources_summary: '食べログ: 未来軒、大阪市中央区瓦町2-4-10、堺筋本町から467m、月〜土 11:30〜15:00・17:00〜22:00、日・祝休み、予約可、カード・電子マネー・QR可、2025年10月16日開店。口コミ(2026年4〜10月): 夜はにぎわう、豚もやし炒め、麻婆豆腐、担々麺ハーフ、レモンサワー2杯で2,500円未満、担々麺は辛すぎずコクがある、本格的な中華の味という声、期間限定の冷やし担々麺はもちもちの麺、半炒飯セット、冷やし濃厚辛担々麺1,200円は縮れ麺、もっと辛くてもという声、担々麺Moto-Aji 950円、肉みそたっぷり、もやしと青菜、スープが止まらない、Shin-Aji、味噌、醤油タンメン、酸辣タンメン、本町の中華料理店Koyoujuの姉妹店と知ったという声、ネオンの看板、入口は通りから少し奥、11時40分で3組待ち、カウンター5席、4人席5卓、2人席3卓、外のテラス席、独特の香り、麺はかなり細い。',
      confidence: 'medium', sources: [TB, R + 'B526561371/', R + 'B529869443/', R + 'B530943405/', R + 'B533352966/', R + 'B535720262/', R + 'B536605871/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'rich',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Fairly thin noodles in the hot tantanmen (October 2026); curly noodles in the chilled version (August 2026).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Tantanmen Moto-Aji, ¥950 (September–October 2026).',
      chashu: null,
      notable_toppings: ['minced-meat sauce', 'bean sprouts', 'greens'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat sauce.' },
      pantheon: 'Honmachi\'s tantanmen shop with a soup you keep drinking, and Chinese plates at night.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B526561371/', '"Easy to eat and had a rich flavor" — placed high.'],
        oiliness: [R + 'B535720262/', 'No diner remark on oil — mid-scale.'],
        clarity: [R + 'B535720262/', 'No diner remark on clarity — mid-scale.'],
        tare_strength: [R + 'B536605871/', '"Spiciness wasn\'t overwhelming"; no remark on salt — mid-scale.'],
        noodle_firmness: [R + 'B530943405/', '"Wonderfully chewy" (chilled) but "quite thin" (B536605871) — mid-scale.'],
        aroma_punch: [R + 'B536605871/', '"A distinctive aroma that was a bit unusual" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B526561371/', R + 'B535720262/', R + 'B536605871/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Seat yourself; cards and QR accepted (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区瓦町2-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦町二丁目4番10号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526561371/', R + 'B533352966/', R + 'B535720262/'],
    price_note: 'Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tantanmen Moto-Aji (original)', '¥950', 'Tantanmen', 'no', 'no', 'September 2026.', 'moto_aji'),
      it('', '', 'Tantanmen Shin-Aji', '', 'Tantanmen', 'no', 'no', 'September 2026.', 'shin_aji'),
      it('', '', 'Miso tantanmen', '', 'Tantanmen', 'no', 'no', 'September 2026.', 'miso_tantan'),
      it('', '', 'Shoyu tanmen', '', 'Noodles', 'no', 'no', 'September 2026.', 'shoyu_tanmen'),
      it('', '', 'Suanshu (sour-spicy) tanmen', '', 'Noodles', 'no', 'no', 'September 2026.', 'suanla_tanmen'),
      it('', '', 'Chilled rich spicy tantanmen (summer, limited)', '¥1,200', 'Tantanmen', 'no', 'no', 'August 2026.', 'hiyashi_tantan'),
      it('', '', 'Mapo tofu', '', 'Chinese dishes', 'no', 'no', 'April 2026.', 'mapo'),
      it('', '', 'Stir-fried pork and bean sprouts', '', 'Chinese dishes', 'no', 'no', 'April 2026.', 'buta_moyashi'),
    ] }, {
    cuisine: '担々麺の店、中華の一品も・担々麺Moto-Aji 950円: たっぷりの肉みそ、もやし、青菜、コクがあり辛さ控えめ、やや細い麺・Shin-Ajiと味噌の担々麺・醤油タンメン、酸辣タンメン・夏は縮れ麺の冷やし濃厚辛担々麺1,200円(期間限定)・担々麺ハーフ・半炒飯のセット・麻婆豆腐、豚もやし炒め・レモンサワー・カウンター5席、テーブルと外のテラス席',
    neighborhood: '中央区瓦町2-4-10、ネオンの看板、入口は通りから少し奥。堺筋本町駅から467m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、肉みそ、味噌と醤油の味、中華料理。',
    vegan_detail: 'ヴィーガンではありません。担々麺の肉みそ、麻婆豆腐、豚肉の炒め物。',
    notes: '[ラーメン・堺筋本町近く、何種類もの担々麺] ネオンの看板が目印の担々麺の店で、2025年10月開店、本町の中華料理店Koyoujuの姉妹店と知ったという声。まずは元祖の「Moto-Aji」(950円)を: たっぷりの肉みそ、もやし、青菜の下にコクがあり辛さ控えめのスープ、やや細い麺。肉みそが混ざるにつれて味が変わり、スープが止まらなかったという声。「Shin-Aji」、味噌、醤油タンメン、酸辣タンメンも。夏は冷やし辛担々麺(1,200円)、もっと辛くてもという声も。気軽な中華の店としても使え、夜8時に麻婆豆腐、豚もやし炒め、担々麺ハーフ、レモンサワー2杯で2,500円未満だったという声。カウンター、テーブル、テラス。カード、QR可。',
  });
}

save();
