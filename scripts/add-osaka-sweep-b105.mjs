// Osaka sweep (2-mile circle around Dotonbori), batch 105 — ramen phase (all OMNI).
//   + 麺や おだしとにくと (chicken paitan of three chickens, pork and wagyu tendon; clam shoyu; wagyu sushi; Uchihonmachi)
//   + 麺屋 國丸 靱公園前店 (miso ramen chain: seared Hokkaido 100-year miso, Kyushu barley miso; Utsubo Park)
//   + 麺道部 (chicken paitan and thick chashu set meals since 2011; Uchihonmachi)
//   + 麺屋 やま 本町店 (clear, slightly sweet shoyu and an umakara bowl, to 06:00 Fri–Sat; Kawaramachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 105);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺や おだしとにくと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27145470/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'osaka_menya_odashi_to_niku_to_uchihonmachi', name: '麺や おだしとにくと (Menya Odashi to Niku to)', category: 'OMNI',
    lat: 34.68318, lng: 135.51238, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare of six soy sauces; mayo rice bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork and wagyu-tendon broth; clam dashi; chashu; wagyu sushi.',
    hours_raw: 'Tue–Sat and public holidays 11:30–15:00 (L.O. 14:30); closed Mon and Sun; if Monday is a holiday, closed the next Tuesday (Tabelog, staff-maintained). One diner found it closed before last order (September 2026). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uchihonmachi 2-3-8, Dia Palace Bldg 1F — 5 min from Sakaisuji-Honmachi or Tanimachi 4-chome Stn',
    cuisine: 'Chicken paitan and clam shoyu, lunch only · rich chicken paitan shoyu ¥900: "triple soup" of Kuro Satsuma, Chiran and Ooyama chicken, Yamagata pork and Kuroge wagyu tendon, tare of six soy sauces · paitan shio ¥900 with four salts · Sichuan-pepper spicy paitan ¥900 with house chili oil and garlic oil · chicken and clam shoyu ¥900: light shoyu with a hint of clam dashi, thin noodles, yuzu · seared chashu-mayo rice bowl ¥300 · seared Kuroge wagyu roast sushi ¥400 · niboshi-cheese aedama ¥300, extra noodles ¥100 · summer cold tantanmen with yodare-dori in soy milk ¥1,200 (limited) · 14 seats',
    website: null, gmaps: gm('麺や おだしとにくと 内本町'), menu_url: MENU,
    notes: "[Ramen · chicken paitan and clam shoyu, with wagyu sushi, by Tanimachi 4-chome] A lunch-only shop on the ground floor of the Dia Palace building in Uchihonmachi (the clam-and-chicken ramen shop Choro is upstairs), open since November 2024. Every regular bowl is ¥900. The paitan, the shop says, is a \"triple soup\" of three chickens, Yamagata pork and Kuroge wagyu tendon; one diner smelled a neighbor's bowl and called the aroma \"comparable to tonkotsu ramen.\" For something lighter, the chicken and clam shoyu comes with thin noodles and yuzu. Add the ¥400 wagyu roast sushi, seared in front of you, or the ¥300 seared chashu-mayo rice bowl. A soy-milk cold tantanmen with yodare-dori chicken ran in summer 2026 and drew raves, though one diner found it bland. Lunch only, closed Sunday and Monday, cash only; one diner found it closed before last order.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 November 2024 (Tabelog)', background: 'Ramen shop (Tabelog, staff-maintained; 2026 reviews).', philosophy: 'Paitan "triple soup" of Kuro Satsuma, Chiran and Ooyama chicken, Yamagata pork and Kuroge wagyu tendon, simmered in "π water"; tare of six soy sauces (Tabelog menu, August 2026).', specialty: 'Chicken paitan; chicken and clam shoyu; wagyu sushi.',
      anecdotes: [
        { text: '"The chicken paitan ramen that the person next to me ordered had an incredible aroma, comparable to tonkotsu ramen. The meat sushi is grilled right in front of you." — September 2026.', source: R + 'B534992702/' },
        { text: '"Shoyu Ramen with a rich taste of shellfish, and the thin noodles were easy to slurp. The combination with yuzu was outstanding." — October 2026.', source: R + 'B537713906/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺や おだしとにくと、大阪市中央区内本町2-3-8 ダイアパレスビル本町 1F、堺筋本町駅・谷町四丁目駅から徒歩5分、火〜土・祝 11:30〜15:00(L.O. 14:30)、月・日休み(月曜祝日は翌火曜休み)、カード・電子マネー・QR不可、14席、禁煙、2024年11月5日開店。メニュー(2026年8月): 濃厚な鶏白湯の醤油900円(3種の鶏、山形の豚、黒毛和牛の牛すじのトリプルスープ、特製の水、6種の醤油のたれ)、同塩900円(4種の塩)、山椒の辛い鶏白湯900円(自家製ラー油、ガーリックオイル)、鶏と貝の醤油900円(あっさり、鶏と貝の出汁)、炙りチャーシューマヨ丼300円、黒毛和牛の炙り寿司400円、煮干しとチーズの和え玉300円、替え玉100円。口コミ(2026年8〜10月): 期間限定のよだれ鶏の豆乳冷やし担々麺1,200円、味玉100円、自家製ラー油の香り、もちもちの平麺、ナッツ、フライドオニオン、豆乳が強く担々麺らしさが薄いという声、隣の鶏白湯は豚骨並みの香り、肉寿司は目の前で炙る、ラストオーダー前に閉まっていた日、券売機、同じビルにちょろ、貝の旨みの醤油ラーメンに細麺と柚子。',
      confidence: 'medium', sources: [TB, MENU, R + 'B534627808/', R + 'B534992702/', R + 'B535258579/', R + 'B535693259/', R + 'B536016190/', R + 'B537713906/'] },
    ramen: {
      broth_base: ['chicken', 'pork', 'beef', 'shellfish'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: ['chili oil', 'garlic oil'], richness: 'rich',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles in the clam shoyu (October 2026); chewy flat noodles in the summer cold tantanmen (September 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen'],
      signature_bowl: 'Rich chicken paitan shoyu, ¥900 (Tabelog menu, August 2026).',
      chashu: 'Seared chashu in the chashu-mayo rice bowl (Tabelog menu); diner liked the chashu with rice (September 2026).',
      notable_toppings: ['yuzu', 'seared Kuroge wagyu sushi', 'niboshi-cheese aedama'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken, pork and beef broth.' },
      pantheon: 'Uchihonmachi\'s ¥900 chicken paitan of three chickens, pork and wagyu tendon, with seared wagyu sushi on the side.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535693259/', '"The broth was rich in flavor" — placed high.'],
        oiliness: [MENU, 'Spicy paitan "topped generously with our homemade chili oil, garlic oil"; no diner remark on oil — mid-scale.'],
        clarity: [MENU, 'Cloudy paitan alongside a "light yet flavorful" clam shoyu — mid-scale.'],
        tare_strength: [R + 'B537713906/', '"Shoyu Ramen with a rich taste of shellfish" — mid-scale.'],
        noodle_firmness: [R + 'B534992702/', '"The noodles are chewy and have a great bounce" (cold tantanmen) — placed high.'],
        aroma_punch: [R + 'B534992702/', 'Paitan "had an incredible aroma, comparable to tonkotsu ramen" — placed high.'],
      },
      confidence: 'medium', sources: [MENU, R + 'B534992702/', R + 'B537713906/', R + 'B535693259/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区内本町2-3-8 ダイアパレスビル本町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained, menu updated August 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内本町二丁目3番8号 (go) 15m; same building as Choro (osaka_kai_to_jidori_choro_uchihonmachi), pin offset ~7 m so the two do not stack; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B534627808/', R + 'B536016190/'],
    price_note: 'Prices from the Tabelog menu (August 2026) and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich chicken paitan ramen, shoyu', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu, August 2026.', 'paitan_shoyu'),
      it('', '', 'Rich chicken paitan ramen, shio', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu, August 2026.', 'paitan_shio'),
      it('', '', 'Sichuan-pepper spicy chicken paitan ramen', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu, August 2026.', 'spicy_paitan'),
      it('', '', 'Chicken and clam shoyu ramen', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu, August 2026.', 'kai_shoyu'),
      it('', '', 'Yodare-dori soy-milk cold tantanmen (summer, limited)', '¥1,200', 'Ramen', 'no', 'no', 'August–October 2026; limited.', 'hiyashi_tantan'),
      it('', '', 'Seared chashu-mayo rice bowl', '¥300', 'Rice', 'no', 'no', 'Tabelog menu, August 2026.', 'chashu_mayo_don'),
      it('', '', 'Seared Kuroge wagyu roast sushi', '¥400', 'Rice', 'no', 'no', 'Tabelog menu, August 2026.', 'wagyu_sushi'),
      it('', '', 'Niboshi and cheese aedama', '¥300', 'Extra noodles', 'no', 'no', 'Tabelog menu, August 2026.', 'aedama'),
      it('', '', 'Extra noodles', '¥100', 'Extra noodles', 'no', 'no', 'Tabelog menu, August 2026.', 'kaedama'),
    ] }, {
    cuisine: '鶏白湯と貝の醤油、昼のみ・濃厚な鶏白湯の醤油900円: 3種の鶏、山形の豚、黒毛和牛の牛すじの「トリプルスープ」、6種の醤油のたれ・4種の塩の鶏白湯の塩900円・自家製ラー油とガーリックオイルの山椒の辛い鶏白湯900円・鶏と貝の醤油ラーメン900円: 貝の出汁がほのかなあっさり醤油、細麺、柚子・炙りチャーシューマヨ丼300円・黒毛和牛の炙り寿司400円・煮干しとチーズの和え玉300円、替え玉100円・夏はよだれ鶏の豆乳冷やし担々麺1,200円(期間限定)・14席',
    neighborhood: '中央区内本町2-3-8 ダイアパレスビル本町 1F。堺筋本町駅・谷町四丁目駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、6種の醤油のたれ、マヨ丼。',
    vegan_detail: 'ヴィーガンではありません。鶏、豚、黒毛和牛の牛すじのスープ、貝の出汁、チャーシュー、和牛の寿司。',
    notes: '[ラーメン・谷町四丁目、鶏白湯と貝の醤油、和牛の寿司も] 内本町のダイアパレスビル1階、昼のみの店で(貝と地鶏のラーメン店ちょろが上の階に)、2024年11月開店。ラーメンはどれも900円。鶏白湯は店によれば3種の鶏、山形の豚、黒毛和牛の牛すじの「トリプルスープ」で、隣の一杯の香りを「豚骨ラーメン並み」と書いた人も。軽めなら鶏と貝の醤油を、細麺と柚子で。目の前で炙る和牛の炙り寿司(400円)か炙りチャーシューマヨ丼(300円)を添えて。2026年夏はよだれ鶏の豆乳冷やし担々麺が大好評、薄いと感じた人も。昼のみ、日・月休み、現金のみ。ラストオーダー前に閉まっていたという声も。',
  });
}

// ================================================================ 麺屋 國丸 靱公園前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27124548/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://kunimaru.net/'; const OMENU = OWN + 'menu/'; const OSHOP = OWN + 'shoplist/'; const OPOL = OWN + 'policy/';
  put({
    id: 'osaka_menya_kunimaru_utsubo_koen_mae', name: '麺屋 國丸 靱公園前店 (Menya Kunimaru Utsubo Koen Mae)', category: 'OMNI',
    lat: 34.685406, lng: 135.497175, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the chain says its noodles contain wheat and egg; miso tare; katsu; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg noodles; chashu, katsu and beef-offal toppings.',
    hours_raw: 'Daily 11:00–16:00 and 17:30–22:00 (L.O. 21:30), no fixed holiday (official shop list). Tabelog lists the evening as 17:30–20:00; a diner ate after 20:00 (October 2026). Allergen information posted in store (official). E-money and QR accepted; no credit cards (Tabelog).',
    hours: ALL(day(['11:00', '16:00'], ['17:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Utsubo-honmachi 1-6-14, 1F, in front of Utsubo Park — 409 m from Hommachi Stn',
    cuisine: 'Miso ramen specialist (chain) · Hokkaido 100-year miso ramen: aged, salty Hokkaido red miso, seared to deepen it · butter-corn version, with half fried rice ¥1,500 · samurai ramen with egg, katsu and thick chashu · spicy miso ¥980, three heat levels · gin no maro miso: mild Kyushu barley miso · kin no aburi miso: three-year red miso seared with white wine, almond and sansho, katsu option · beef-offal miso · medium-thick egg noodles or whole-wheat noodles · lunch sets about ¥900 with fried rice or rice · gyoza · kids\' miso ramen · 20 seats',
    website: OWN, gmaps: gm('麺屋 國丸 靱公園前店'), menu_url: OMENU,
    notes: "[Ramen · miso ramen specialist facing Utsubo Park] A branch of a miso-only ramen chain in front of Utsubo Park, open since 2021 with plenty of tables. The base is the chain's Hokkaido 100-year miso, a salty aged red miso it sears to draw out depth; one diner found it rich and robust, \"perfect for when you're craving a rich bowl.\" If that's too strong for you, the silver miso uses a milder Kyushu barley miso, though one diner found it too mild. The gold miso is seared with white wine, almond and sansho; a spicy miso (¥980) comes in three heats. Lunch sets run about ¥900 with fried rice or plain rice, though one diner found the set ramen too simple and another warned off the fried rice. There's a kids' miso ramen too. Lunch can draw a short line.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 August 2021 (Tabelog)', background: 'Branch of the miso-ramen-only chain Menya Kunimaru (official site kunimaru.net).', philosophy: '"Miso is a health food": four base misos, seared to draw out richness and aroma; medium-thick egg noodles and whole-wheat noodles (official site).', specialty: 'Hokkaido 100-year miso ramen.',
      anecdotes: [
        { text: '"The broth has a rich and robust flavor, showcasing the depth and umami of the miso… Despite its strong seasoning, the ramen is well-balanced." — October 2026, Hokkaido 100-year miso ramen.', source: R + 'B537095646/' },
        { text: '"It has a mild miso flavor, and if you\'re looking for a rich and deep miso ramen… I recommend the 100-Year Miso Ramen instead." — June 2026, silver miso ramen.', source: R + 'B530780626/' },
      ],
      japanese_sources_summary: '公式 kunimaru.net(味噌ラーメン専門店 麺屋・國丸): 北海道百年味噌・信州真田味噌・金の炙り味噌・辛味噌を基本に炙りでコクを出す、北海道百年味噌は長期熟成の濃厚赤味噌で塩味と辛味が強い、北海道百年味噌サムライラーメン(味玉・カツ・男気チャーシュー)、北海道百年味噌味玉ラーメン、牛モツ味噌ラーメン、金の炙り味噌(三年熟成の北海道産赤味噌を白ワイン・アーモンド・山椒と炙った薬膳味噌)、金の炙り味噌カツラーメン、銀のまろ味噌(九州麦味噌)、辛味噌は辛・大辛・激辛、お子様味噌ラーメン、麺には小麦や卵を使用、店頭にアレルゲン表示、たまご麺と全粒粉麺。店舗案内: 靱公園前店、大阪市西区靱本町1-6-14-1階、平日・土日祝 11:00〜16:00・17:30〜22:00(LO 21:30)、定休日なし。食べログ: 本町駅から409m、カード不可、電子マネー・QR可、20席、2021年8月5日開店。口コミ(2025年12月〜2026年10月): 辛味噌に味噌の塊、餃子、北海道百年味噌ラーメン、銀のまろ味噌はやさしい味、炒飯はおすすめしないという声、テーブル席が多い、北海道百年味噌バターコーン+半炒飯セット1,500円、辛味噌ラーメン980円、平日昼に行列、待ち時間に応じた割引券、ランチセット2種約900円(炒飯かご飯)、セットのラーメンはシンプルすぎ、濃厚でしっかりした味噌。',
      confidence: 'medium', sources: [TB, OWN, OMENU, OSHOP, OPOL, R + 'B519798263/', R + 'B530780626/', R + 'B536471542/', R + 'B536618889/', R + 'B537025756/', R + 'B537095646/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso'], aroma_oil: [], richness: 'rich',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Medium-thick chewy egg noodles, or whole-wheat noodles (official site).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Hokkaido 100-year miso ramen (official site; 2025–2026 reviews).',
      chashu: 'Seared chashu and thick "otokogi" chashu toppings (official site).',
      notable_toppings: ['butter corn', 'katsu', 'beef offal', 'seasoned egg'],
      gf: { status: 'no', note: 'Noodles contain wheat and egg (official).' },
      vegan: { status: 'no', note: 'Egg noodles; meat toppings.' },
      pantheon: 'Utsubo Park\'s miso-only counter: seared Hokkaido 100-year miso, with a milder Kyushu barley miso for the cautious.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537095646/', '"A rich and robust flavor" — placed high.'],
        oiliness: [OMENU, 'Butter and butter-corn toppings offered; no diner remark on oil — mid-scale.'],
        clarity: [R + 'B537095646/', '"The thick miso soup" — bottom of scale.'],
        tare_strength: [R + 'B537095646/', '"Despite its strong seasoning, the ramen is well-balanced" — placed high.'],
        noodle_firmness: [OPOL, 'Chain describes "mochi-mochi" medium-thick egg noodles — mid-scale.'],
        aroma_punch: [R + 'B537095646/', '"With each sip, the aroma fills your mouth" — placed high.'],
      },
      confidence: 'medium', sources: [OMENU, OPOL, R + 'B537095646/', R + 'B530780626/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain with plenty of tables; kids\' menu (official).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergen information posted in store; ask staff (official site).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区靱本町1-6-14 1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Listed on the official shop list; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区靱本町一丁目6番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OMENU, R + 'B536618889/', R + 'B537025756/'],
    price_note: 'Menu from the official site; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('北海道百年味噌ラーメン', '', 'Hokkaido 100-year miso ramen', '', 'Ramen', 'no', 'no', 'Official menu.', 'hyakunen_miso'),
      it('', '', 'Hokkaido 100-year miso butter corn ramen + half fried rice set', '¥1,500', 'Sets', 'no', 'no', 'October 2026.', 'butter_corn_set'),
      it('北海道百年味噌サムライラーメン', '', 'Samurai ramen (egg, katsu, chashu)', '', 'Ramen', 'no', 'no', 'Official menu.', 'samurai'),
      it('辛味噌ラーメン', '', 'Spicy miso ramen', '¥980', 'Ramen', 'no', 'no', 'October 2026; three heat levels (official).', 'kara_miso'),
      it('銀のまろ味噌ラーメン', '', 'Silver mild miso ramen (Kyushu barley miso)', '', 'Ramen', 'no', 'no', 'Official menu.', 'gin_miso'),
      it('金の炙り味噌カツラーメン', '', 'Gold seared miso katsu ramen', '', 'Ramen', 'no', 'no', 'Official menu.', 'kin_miso_katsu'),
      it('牛モツ味噌ラーメン', '', 'Beef offal miso ramen', '', 'Ramen', 'no', 'no', 'Official menu.', 'motsu_miso'),
      it('', '', 'Lunch set (fried rice or rice)', 'about ¥900', 'Sets', 'no', 'no', 'October 2026.', 'lunch_set'),
      it('お子様味噌ラーメン', '', 'Kids\' miso ramen', '', 'Kids', 'no', 'no', 'Official menu.', 'kids'),
    ] }, {
    cuisine: '味噌ラーメン専門店(チェーン)・北海道百年味噌ラーメン: 塩味の強い熟成の北海道赤味噌を炙って深みを出す・バターコーン、半炒飯セット1,500円・味玉、カツ、男気チャーシューのサムライラーメン・辛味噌980円、辛さ3段階・銀のまろ味噌: やさしい九州の麦味噌・金の炙り味噌: 三年熟成の赤味噌を白ワイン、アーモンド、山椒と炙る、カツも・牛モツ味噌・中太のたまご麺か全粒粉麺・ランチセット約900円、炒飯かご飯・餃子・お子様味噌ラーメン・20席',
    neighborhood: '西区靱本町1-6-14 1階、靱公園の前。本町駅から409m',
    gf_detail: 'グルテンフリーではありません。チェーンによると麺に小麦と卵を使用。味噌のたれ、カツ、餃子。',
    vegan_detail: 'ヴィーガンではありません。たまご麺、チャーシュー、カツ、牛モツ。',
    notes: '[ラーメン・靱公園の前、味噌ラーメン専門店] 靱公園の向かい、味噌だけのラーメンチェーンの店で、2021年開店、テーブル席が多い。基本はチェーンの北海道百年味噌で、塩味の強い熟成赤味噌を炙って深みを出す。「濃厚な一杯が食べたいときにぴったり」としっかりした味を評価する声。強すぎるなら銀のまろ味噌を、九州の麦味噌でやさしい味、ただしやさしすぎるという声も。金の炙り味噌は白ワイン、アーモンド、山椒と炙り、辛味噌(980円)は辛さ3段階。ランチセットは約900円で炒飯かご飯、ただしセットのラーメンはシンプルすぎ、炒飯はすすめないという声も。お子様味噌ラーメンも。昼は短い行列も。',
  });
}

// ================================================================ 麺道部
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27058778/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_men_dobu_uchihonmachi', name: '麺道部 (Men Dobu)', category: 'OMNI',
    lat: 34.683586, lng: 135.512402, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu; mayonnaise on the chashu set meal.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; pork-belly chashu; egg.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:30) and 18:00–22:00 (L.O. 21:30); hours may change (Tabelog). Ticket machine outside takes ¥1,000 notes only; ask staff for change (August 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uchihonmachi 2-4-10 — 5 min from Sakaisuji-Honmachi Stn (Chuo Line) or Tanimachi 4-chome',
    cuisine: 'Chicken paitan and chashu set meals · ajitama chicken paitan ramen ¥1,000: rich but light chicken paitan, thick-cut pork-belly chashu · classic ramen · Taiwanese mazesoba · chashu-egg set meal, large ¥1,300: chashu with mayonnaise and black pepper, a round mound of rice; the 150 g set came with kimchi and soup · 150 g chashu set · free large noodles or rice at lunch · about 10 counter seats',
    website: null, gmaps: gm('麺道部 内本町'), menu_url: null,
    notes: "[Ramen · chicken paitan and big chashu set meals in Uchihonmachi] A small counter of about 10 seats a few minutes from Sakaisuji-Honmachi, running since 2011 and specializing in chicken paitan. The ajitama paitan (¥1,000) is rich yet relatively light, with thick-cut pork-belly chashu; at lunch you get a free large serving of noodles or rice. The other draw is the chashu set meal: 150 g or 250 g of chashu with mayonnaise and black pepper, a neatly rounded mound of rice, kimchi and soup, ¥1,300 for the large. There are also a classic ramen one diner found nostalgic, and Taiwanese mazesoba. Buy tickets at the machine outside; it takes ¥1,000 notes only. Snug, so not for groups. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2011 (Tabelog)', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chicken paitan; chashu set meal.',
      anecdotes: [
        { text: '"The broth is rich yet has a relatively light mouthfeel, allowing you to fully enjoy the flavor of the chicken!" — August 2026, ajitama chicken paitan ¥1,000.', source: R + 'B533412205/' },
        { text: '"I chose the 150g option, which came with plenty of flavorful chashu, mayonnaise, kimchi, and soup… The rice was beautifully shaped into a perfect round mound." — August 2026.', source: R + 'B533866004/' },
      ],
      japanese_sources_summary: '食べログ: 麺道部、大阪市中央区内本町2-4-10、中央線堺筋本町駅から徒歩約5分、谷町四丁目から473m、毎日11:00〜15:00(L.O. 14:30)・18:00〜22:00(L.O. 21:30)、カード・電子マネー・QR不可、10席、カウンター、禁煙、2011年7月1日開店。口コミ(2026年7〜9月): チャーシュー玉子定食大1,300円(チャーシュー250g、大盛りご飯)、店外の券売機、昼は麺大盛りかご飯が無料、鶏白湯ラーメンにチャーシュー、白醤油ラーメン、厚切りのバラチャーシュー、鶏白湯専門、カウンター10席ほど、味玉鶏白湯ラーメン1,000円、濃厚だが比較的軽い口当たり、狭く大人数には不向き、チャーシュー定食150g、マヨネーズ、キムチ、スープ、丸く盛ったご飯、券売機は千円札のみ・両替は店内で、黒胡椒、閉店間際、台湾まぜそば、懐かしいラーメン。',
      confidence: 'medium', sources: [TB, R + 'B531665955/', R + 'B531916473/', R + 'B533412205/', R + 'B533866004/', R + 'B534811446/', R + 'B536508188/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Free large serving at lunch (July 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Ajitama chicken paitan ramen, ¥1,000 (August 2026).',
      chashu: 'Thick-cut pork-belly chashu (July–August 2026).',
      notable_toppings: ['seasoned egg', 'thick pork-belly chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Uchihonmachi\'s chicken paitan counter since 2011, as known for its 250 g chashu rice set as its bowls.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533412205/', '"Rich yet has a relatively light mouthfeel" — mid-scale.'],
        oiliness: [R + 'B533412205/', '"A relatively light mouthfeel" — placed low.'],
        clarity: [R + 'B533412205/', 'Chicken paitan broth — placed low.'],
        tare_strength: [R + 'B536508188/', 'Classic ramen "delicious and comforting"; no diner remark on tare strength — mid-scale.'],
        noodle_firmness: [R + 'B531916473/', 'No diner remark on noodle texture — mid-scale.'],
        aroma_punch: [R + 'B533412205/', '"Fully enjoy the flavor of the chicken" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B533412205/', R + 'B531916473/', R + 'B536508188/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff give change (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区内本町2-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026; OSM node 内本町麺道部 11 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内本町二丁目4番10号 (go) 6m; OSM node/4653233452 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531665955/', R + 'B533412205/', R + 'B533866004/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajitama chicken paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'August 2026.', 'ajitama_paitan'),
      it('', '', 'Ramen (classic)', '', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Taiwanese mazesoba', '', 'Ramen', 'no', 'no', 'September 2026.', 'taiwan_mazesoba'),
      it('', '', 'Chashu-egg set meal, large (250 g chashu)', '¥1,300', 'Set meals', 'no', 'no', 'July 2026.', 'chashu_teishoku_l'),
      it('', '', 'Chashu set meal (150 g)', '', 'Set meals', 'no', 'no', 'August 2026.', 'chashu_teishoku'),
    ] }, {
    cuisine: '鶏白湯とチャーシュー定食・味玉鶏白湯ラーメン1,000円: 濃厚だが軽い鶏白湯、厚切りの豚バラチャーシュー・昔ながらのラーメン・台湾まぜそば・チャーシュー玉子定食大1,300円: チャーシュー250gにマヨネーズと黒胡椒、丸く盛ったご飯、150gの定食にはキムチとスープ・チャーシュー150gの定食・昼は麺大盛りかご飯が無料・カウンター約10席',
    neighborhood: '中央区内本町2-4-10。堺筋本町駅(中央線)・谷町四丁目駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油、チャーシュー定食のマヨネーズ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、豚バラチャーシュー、卵。',
    notes: '[ラーメン・内本町、鶏白湯と大盛りチャーシュー定食] 堺筋本町から数分、カウンター10席ほどの小さな店で、2011年から続く鶏白湯の専門店。味玉鶏白湯(1,000円)は濃厚なのに比較的軽く、厚切りの豚バラチャーシュー入り。昼は麺大盛りかご飯が無料。もう一つの目当てはチャーシュー定食で、150gか250gのチャーシューにマヨネーズと黒胡椒、きれいに丸く盛ったご飯、キムチとスープ、大は1,300円。懐かしいと評された昔ながらのラーメン、台湾まぜそばも。食券は店外の券売機で、千円札のみ。狭いので大人数には不向き。現金のみ。',
  });
}

// ================================================================ 麺屋 やま 本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27132323/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00'];
  put({
    id: 'osaka_menya_yama_honmachi', name: '麺屋 やま 本町店 (Menya Yama Honmachi)', category: 'OMNI',
    lat: 34.685607, lng: 135.507579, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; seafood in the seafood shoyu; no plant-based bowl reported.',
    hours_raw: 'Mon–Thu 11:00–15:00 and 18:00–23:00; Fri–Sat 11:00–15:00 and 18:00–06:00 next morning; Sun 11:00–15:00 and 18:00–23:00; hours may change (Tabelog). Ticket machine. Tabelog lists cash only; a September 2026 diner reports non-cash payment is now accepted.',
    hours: { 0: day(L, ['18:00', '23:00']), 1: day(L, ['18:00', '23:00']), 2: day(L, ['18:00', '23:00']), 3: day(L, ['18:00', '23:00']), 4: day(L, ['18:00', '06:00']), 5: day(L, ['18:00', '06:00']), 6: day(L, ['18:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi 1-4-1 — 5 min from Sakaisuji-Honmachi Stn',
    cuisine: 'Shoyu ramen, open late · signature shoyu ramen ¥950: clear, gentle broth with a slightly sweet shoyu, chashu, menma, red onion and chili; flat noodles +¥100; garlic served on the side · "umakara" spicy ramen ¥990: slightly sweet shoyu with chili · choose noodle firmness, yuzu peel, garlic, green onion and onion · seafood shoyu ramen · tantanmen; chilled tantanmen in summer · miso ramen with flat noodles · free rice at lunch · counter and tables',
    website: null, gmaps: gm('麺屋 やま 本町店'), menu_url: null,
    notes: "[Ramen · clear, slightly sweet shoyu until 6 am Fri–Sat in Honmachi] A busy office-district ramen shop near Sakaisuji-Honmachi with good turnover at lunch and late hours: until 23:00 most nights and 06:00 into Saturday and Sunday. The signature shoyu ramen (¥950) is a clear, gentle broth with a hint of sweetness in the soy, with chashu, menma, red onion and chili; flat noodles are ¥100 more, and the garlic comes on the side; one diner found it changed the bowl a lot. You choose noodle firmness and add-ons like yuzu peel and onion. The \"umakara\" (¥990) adds a stronger chili kick to that sweet shoyu. There's also a seafood shoyu, a tantanmen one diner came back for four times (chilled in summer), and a miso ramen. Free rice at lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 October 2022 (Tabelog)', background: 'Ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shoyu ramen; umakara ramen; tantanmen.',
      anecdotes: [
        { text: '"The broth was indeed clear and gentle, with a hint of sweetness in the shoyu flavor… I added a bit of garlic, but it significantly changed the taste, so I prefer it without. I\'m glad it was served separately." — August 2026, shoyu ramen ¥950.', source: R + 'B535922667/' },
        { text: '"The spiciness from the chili was stronger than I expected. The base broth seems to use a slightly sweet soy sauce." — September 2026, umakara ramen ¥990.', source: R + 'B536053076/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 やま 本町店、大阪市中央区瓦町1-4-1、堺筋本町から387m、月〜木 11:00〜15:00・18:00〜23:00、金 11:00〜15:00・18:00〜24:00、土 0:00〜6:00・11:00〜15:00・18:00〜24:00、日 0:00〜6:00・11:00〜15:00・18:00〜23:00、カード・電子マネー・QR不可、14席、禁煙、2022年10月12日開店。口コミ(2026年3〜10月): 現金以外も使えるようになったという声(9月)、新しい券売機は現金のみだったという声(8月)、期間限定の冷やし担々麺、担々麺、オフィス街で回転が速い、辛すぎない、海鮮醤油ラーメンはやさしい旨み、日曜22時半、醤油ラーメン950円、平打ち麺+100円、チャーシュー、ねぎ、メンマ、紫玉ねぎ、唐辛子、にんにくは別添え、透き通ったやさしいスープに甘めの醤油、旨辛ラーメン990円、麺の硬さ・柚子皮・にんにく・ねぎ・玉ねぎを選べる、唐辛子の辛さが強め、甘めの醤油、写真のキャプション「あの旨辛ラーメン」、味噌ラーメン、昼はご飯無料、平打ち麺。',
      confidence: 'medium', sources: [TB, R + 'B524153481/', R + 'B535257714/', R + 'B535922667/', R + 'B536053076/', R + 'B536618923/', R + 'B537783245/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'light',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Medium flat noodles +¥100, firmness to order (August–September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Shoyu ramen, ¥950 (August–October 2026).',
      chashu: 'Tender chashu (September 2026).',
      notable_toppings: ['red onion', 'dried chili', 'grated garlic on the side', 'yuzu peel'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Honmachi\'s late-night clear shoyu with a sweet edge, garlic on the side, open to 6 am on weekends.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535922667/', '"Clear and gentle" — placed low.'],
        oiliness: [R + 'B535257714/', '"Despite its light texture, the taste is robust" (seafood shoyu) — placed low.'],
        clarity: [R + 'B535922667/', '"The broth was indeed clear" — placed high.'],
        tare_strength: [R + 'B536618923/', '"A rich soy sauce flavor and umami" with "a hint of sweetness" (B535922667) — mid-scale.'],
        noodle_firmness: [R + 'B535922667/', '"The medium flat noodles were firm and just right" — placed high.'],
        aroma_punch: [R + 'B535922667/', 'Gentle base; garlic served separately — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535922667/', R + 'B536053076/', R + 'B536618923/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; toppings chosen at the counter (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区瓦町1-4-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦町一丁目4番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535922667/', R + 'B536053076/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen (signature)', '¥950', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu'),
      it('', '', 'Flat noodles upgrade', '+¥100', 'Toppings', 'no', 'no', 'August 2026.', 'hirauchi'),
      it('あの旨辛ラーメン', '', 'Umakara spicy ramen', '¥990', 'Ramen', 'no', 'no', 'September 2026.', 'umakara'),
      it('', '', 'Seafood shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'seafood_shoyu'),
      it('', '', 'Tantanmen', '', 'Ramen', 'no', 'no', 'March 2026.', 'tantanmen'),
      it('', '', 'Chilled tantanmen (limited)', '', 'Ramen', 'no', 'no', 'September 2026.', 'hiyashi_tantan'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
    ] }, {
    cuisine: '深夜まで営業の醤油ラーメン・看板の醤油ラーメン950円: 透き通ったやさしいスープに甘めの醤油、チャーシュー、メンマ、紫玉ねぎ、唐辛子、平打ち麺は+100円、にんにくは別添え・あの旨辛ラーメン990円: 甘めの醤油に唐辛子・麺の硬さ、柚子皮、にんにく、ねぎ、玉ねぎを選べる・海鮮醤油ラーメン・担々麺、夏は冷やし担々麺・平打ち麺の味噌ラーメン・昼はご飯無料・カウンターとテーブル',
    neighborhood: '中央区瓦町1-4-1。堺筋本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、海鮮醤油の魚介。植物性の一杯の報告なし。',
    notes: '[ラーメン・本町、金土は朝6時まで、透き通った甘めの醤油] 堺筋本町近くのオフィス街のにぎわうラーメン店で、昼は回転が速く、夜も遅くまで: ほぼ毎晩23時まで、土曜と日曜の朝は6時まで。看板の醤油ラーメン(950円)は透き通ったやさしいスープにほんのり甘い醤油、チャーシュー、メンマ、紫玉ねぎ、唐辛子。平打ち麺は+100円、にんにくは別添えで、入れると味が大きく変わったという声。麺の硬さや柚子皮、玉ねぎなども選べる。あの旨辛ラーメン(990円)は甘い醤油に強めの唐辛子。海鮮醤油、4回通った人もいる担々麺(夏は冷やし)、味噌ラーメンも。昼はご飯無料。',
  });
}

save();
