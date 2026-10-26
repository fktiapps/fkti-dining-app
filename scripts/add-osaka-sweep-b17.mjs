// Osaka sweep (2-mile circle around Dotonbori), batch 17 — vegan/GF from the FMGF seeds.
// No Tabelog ids, so pins are the FMGF point cross-checked by GSI and no queue-status rows are written.
//   + PANCAKE & books bibliothèque (Namba Parks; every pancake batter can be made GF) — GF options, not queued
//   + ChocoLatta (gluten-free gâteau-chocolat specialist, Karahori) — GF options, queue dedicated
//   + OSAKA ENGINE RAMEN (GF rice-noodle ramen with dedicated cooker and marked bowls) — GF options, queue high
//   + Shinsekai Paprika Shokudo (vegan, GF except the soy meat) — vegan full, GF options, queue high
// Not taken: Hotel Morning Box (a hotel).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 17);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [] };

// ================================================================ PANCAKE & books bibliothèque
{
  const FM = 'https://www.findmeglutenfree.com/biz/pancake-and-books/6712859694596096';
  const OWN = 'http://www.bibliotheque.ne.jp/pancake/';
  put({
    id: 'osaka_pancake_and_books_namba_parks', name: 'PANCAKE & books bibliothèque なんばパークス', category: 'GF',
    lat: 34.661552, lng: 135.5021, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Every pancake batter can be made gluten-free, and a separate card lists the toppings to avoid (FMGF reviews, July–October 2026). Staff clean the pan and utensils on request, and a dedicated GF waffle iron is reported. It is NOT a dedicated gluten-free facility: the café itself warns that cross-contamination can occur, and there is no dedicated fryer. Ask for a freshly cleaned pan.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pancakes, butter, eggs Benedict and ricotta dishes dominate; no vegan option is described.',
    hours_raw: 'No hours captured (official page did not load). Inside Namba Parks, 4F.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Parks 4F, Nanbanaka 2-10-70, Naniwa-ku — above Nankai Namba Stn',
    cuisine: 'Fluffy soufflé-style pancakes (true butter, berry, fruit and nut, savoury ricotta and salmon) · any batter made gluten-free · eggs Benedict, burgers, crème brûlée · matcha · a GF toppings card',
    website: OWN, gmaps: gm('PANCAKE & books bibliothèque なんばパークス'), menu_url: null,
    notes: "[Café · gluten-free pancakes in Namba Parks] A pancake café on the 4th floor of Namba Parks where any pancake batter can be made gluten-free. Staff hand over a card listing the toppings to avoid and will clean the pan and utensils if you ask. Celiac reviewers report fluffy, delicious stacks: the true butter, berry, fruit and nut, and a savoury ricotta and salmon. The matcha is excellent. It is not a GF kitchen and says so, so ask for the cleaned pan.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba Parks 4F', background: 'A PANCAKE & books bibliothèque café (bibliotheque.ne.jp); no source names the operator.', philosophy: null, specialty: 'Pancakes, made gluten-free on request.',
      anecdotes: [
        { text: '"Although not a dedicated GF facility, they have a good understanding of risks and requirements. All pancake batters can be made GF and they inform you of unsuitable toppings. They clean pans and utensils when requested." — FMGF review, October 2026.', source: FM },
        { text: '"They note that they aren\'t strictly GF so cross contamination can occur, however they\'re happy to cook on a newly cleaned surface if required. The card they provide around ingredients/toppings to avoid was also really helpful." — FMGF review, August 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: PANCAKE & books bibliothèque、大阪市浪速区難波中2-10-70 なんばパークス4階、06-4395-5757、グルテンフリーのメニューあり、グルテンフリー専門ではない、グルテンフリー専用ワッフルメーカーの報告、専用フライヤーなし。口コミ(2026年7〜10月): パンケーキの生地はすべてグルテンフリーにできる、合わないトッピングを教えてくれる、頼めばフライパンと器具を洗ってくれる、ふわふわ、トゥルーバター、フルーツとナッツ、ベリー、リコッタとサーモン、抹茶、グルテンフリーの注意点を書いたカード、アレルギーへの配慮。営業時間は取得できず。',
      confidence: 'medium', sources: [FM, OWN] },
    cultural_comfort: { level: 'english', note: 'Staff explain GF options with a card (2026).' },
    safety: { ...SAFETY0, dedicated_fryer: false,
      gf_cross_contamination: [{ text: 'Not strictly GF: "cross contamination can occur", per the café (FMGF review, August 2026).', source: FM }],
      staff_allergy_handling: [{ text: 'Pans and utensils cleaned on request; a card lists unsuitable toppings (FMGF reviews, 2026).', source: FM }],
      positives: [{ text: 'All pancake batters can be made gluten-free (FMGF review, October 2026); dedicated GF waffle iron reported.', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-70 なんばパークス 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目10番70号 (go) 123m — Namba Parks is a large complex; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'True butter pancakes (GF batter on request)', '', 'Pancakes', 'gf', 'no', 'August 2026.', 'true_butter'),
      it('', '', 'Berry pancakes (GF batter on request)', '', 'Pancakes', 'gf', 'ask', 'August 2026.', 'berry'),
      it('', '', 'Ricotta and salmon savoury pancakes (GF batter on request)', '', 'Pancakes', 'gf', 'no', 'August 2026.', 'ricotta_salmon'),
      it('', '', 'Matcha', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'matcha'),
    ] }, {
    cuisine: 'ふわふわのパンケーキ(トゥルーバター、ベリー、フルーツとナッツ、リコッタとサーモン)・どの生地もグルテンフリーにできる・エッグベネディクト、バーガー、クレームブリュレ・抹茶・グルテンフリーのトッピングのカード',
    neighborhood: 'なんばパークス4F、浪速区難波中2-10-70。南海なんば駅の上',
    gf_detail: 'FMGFの口コミ(2026年7〜10月)によると、パンケーキの生地はどれもグルテンフリーにでき、避けるべきトッピングを書いたカードもあります。頼めばフライパンと器具を洗ってくれ、グルテンフリー専用のワッフルメーカーの報告も。グルテンフリー専門の店ではなく、店自身もコンタミの可能性があると伝えており、専用フライヤーもありません。洗ったフライパンでと頼んで。',
    vegan_detail: '要確認。パンケーキ、バター、エッグベネディクト、リコッタの料理が中心で、ヴィーガンの選択肢は書かれていません。',
    notes: '[カフェ・なんばパークスのグルテンフリーのパンケーキ] なんばパークス4階のパンケーキカフェで、どのパンケーキの生地もグルテンフリーにできます。避けるべきトッピングを書いたカードを渡してくれ、頼めばフライパンと器具を洗ってくれます。セリアック病の客によると、トゥルーバター、ベリー、フルーツとナッツ、塩味のリコッタとサーモンなど、ふわふわでおいしいとのこと。抹茶も絶品。グルテンフリーの厨房ではないと店も伝えているので、洗ったフライパンでと頼んで。',
  });
}

// ================================================================ ChocoLatta
{
  const FM = 'https://www.findmeglutenfree.com/biz/chocolatta/4712382087168000';
  const OWN = 'https://chocolatta.jp/';
  put({
    id: 'osaka_chocolatta_karahori', name: 'ChocoLatta (ショコラッタ)', category: 'GF',
    lat: 34.671292, lng: 135.511939, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop calls itself a gluten-free gâteau-chocolat specialist (「グルテンフリーのガトーショコラ専門店」), made with naturally grown domestic rice flour and no wheat flour. FMGF marks it "Reported to be dedicated gluten-free", and celiac reviewers (October 2026) describe an entirely gluten-free menu: French toast, waffles, sandwiches, BLAT, bagels. Confirm, as the menu has grown beyond cakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the gâteau chocolat uses fermented butter (official site); bacon, sausage and egg dishes.',
    hours_raw: 'Official site: Mon–Sat 12:00–20:30, Sun 11:30–19:00, irregular closing days (announced on the blog). But FMGF reviewers in October 2026 describe early-opening breakfast, so the hours may have changed; check Instagram (@chocolatta2013).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawarayamachi 2-12-15, Matsuyamachi Grand Heights 1F — the retro Karahori area near Tanimachi 6-chōme',
    cuisine: 'Gluten-free gâteau chocolat (rice flour, cane sugar, organic French and sustainable Belgian chocolate) · gluten-free breakfast: French toast, waffles, BLAT with egg, sandwiches, bagels · takeaway and online shop',
    website: OWN, gmaps: gm('ショコラッタ 瓦屋町'), menu_url: null,
    notes: '[Sweets · a gluten-free gâteau-chocolat café in Karahori] A small café in the retro Karahori district that began as a gluten-free gâteau-chocolat specialist. Its chocolate cake is made with naturally grown domestic rice flour, cane sugar, fermented butter and organic French and sustainable Belgian chocolate. It now also serves a gluten-free breakfast-and-lunch menu that celiac visitors rave about: French toast ("absolutely incredible"), waffles, a BLAT with egg, bacon and sausage plates, chicken sandwiches to take away. It is run by one person, so food can take a while, and it is pricey (about ¥5,000 for two plates and two coffees, October 2026). Only a few tables.',
    chef_bio: { chef_name: null, roles: [], origin: 'Karahori (Tanimachi 6-chōme), since at least 2013 (Instagram handle chocolatta2013)', background: 'A gluten-free gâteau-chocolat shop with a café space, takeaway and an online shop; FMGF reviewers say one person runs it.', philosophy: '「食と健康は心の在り方だ」と気づくことで人生は豊かになる (official concept).', specialty: 'Gluten-free gâteau chocolat.',
      anecdotes: [
        { text: '「ショコラッタのガトーショコラはグルテンフリー。小麦粉不使用なので口当たりも良く、発酵バターの風味ときび砂糖の旨みが…」 (official site).', source: OWN },
        { text: '"The menu is entirely gluten free, and offers good options including bacon, sausage, sandwiches, french toast and waffles… costing about 5,000 Yen (after tax) for two plates and two coffees." — FMGF review, October 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(chocolatta.jp): ショコラッタ、〒542-0066 大阪市中央区瓦屋町2-12-15 松屋町グランドハイツ1F、06-6761-6565、月〜土12:00〜20:30・日11:30〜19:00、不定休(ブログで告知)、グルテンフリーのガトーショコラ専門店、小麦粉不使用、国産自然栽培米粉・きび砂糖・フランス産オーガニックチョコ・ベルギー産チョコ、発酵バター、カフェとテイクアウト、オンラインショップ、空堀エリア。FindMeGlutenFree: グルテンフリー専門と報告、2026年10月の口コミ: フレンチトースト、メニューはすべてグルテンフリー、ベーコン・ソーセージ・サンド・ワッフル、朝早く開いている、1人で営業で時間がかかる、2皿とコーヒー2杯で約5,000円、BLATと卵、持ち帰りのチキンサンド、席は少ない。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'english', note: 'Popular with overseas celiac travellers; few tables.' },
    safety: { ...SAFETY0,
      positives: [
        { text: 'Own statement: gluten-free gâteau chocolat, no wheat flour, rice flour base (official site).', source: OWN },
        { text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; dedicated GF kitchen reported.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0066 大阪府大阪市中央区瓦屋町2-12-15 松屋町グランドハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live (© 2026); FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区瓦屋町二丁目12番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, FM],
    price_note: 'No item prices captured; about ¥5,000 for two plates and two coffees (October 2026).', last_checked: TODAY, items: [
      it('ガトーショコラ', 'gâteau chocolat', 'Gluten-free gâteau chocolat', '', 'Cakes', 'gf', 'no', 'Official site; fermented butter.', 'gateau'),
      it('', '', 'French toast', '', 'Breakfast', 'gf', 'no', 'October 2026.', 'french_toast'),
      it('', '', 'BLAT with egg', '', 'Breakfast', 'gf', 'no', 'October 2026.', 'blat'),
      it('', '', 'Chicken sandwich (takeaway)', '', 'Sandwiches', 'gf', 'no', 'October 2026.', 'chicken_sandwich'),
    ] }, {
    cuisine: 'グルテンフリーのガトーショコラ(米粉、きび砂糖、フランス産オーガニックとベルギー産のチョコ)・グルテンフリーの朝食: フレンチトースト、ワッフル、卵入りBLAT、サンドイッチ、ベーグル・持ち帰りとオンラインショップ',
    neighborhood: '瓦屋町2-12-15 松屋町グランドハイツ1F、谷町六丁目近くのレトロな空堀エリア',
    gf_detail: '店は「グルテンフリーのガトーショコラ専門店」で、国産の自然栽培米粉を使い小麦粉不使用。FMGFでは「グルテンフリー専門と報告」とされ、セリアック病の客(2026年10月)はフレンチトースト、ワッフル、サンドイッチ、BLAT、ベーグルなどメニューがすべてグルテンフリーと書いています。ケーキ以外にメニューが広がっているので確認を。',
    vegan_detail: 'ヴィーガンではありません。ガトーショコラに発酵バター(公式)、ベーコン、ソーセージ、卵の料理。',
    notes: '[スイーツ・空堀のグルテンフリーのガトーショコラのカフェ] レトロな空堀の町にある小さなカフェで、もとはグルテンフリーのガトーショコラの専門店。ガトーショコラは国産の自然栽培米粉、きび砂糖、発酵バター、フランス産オーガニックとサステナブルなベルギー産のチョコで作ります。今はグルテンフリーの朝食やランチもあり、セリアック病の客に大人気。フレンチトースト(「最高」)、ワッフル、卵入りBLAT、ベーコンやソーセージの皿、持ち帰りのチキンサンド。1人で切り盛りしているので時間がかかることも。値段は高めで、2皿とコーヒー2杯で約5,000円(2026年10月)。テーブルは少なめ。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [OWN, FM],
    why: "Own claim (chocolatta.jp): 「グルテンフリーのガトーショコラ専門店」, 「小麦粉不使用」, rice-flour base. Independent first-hand corroboration: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', dedicated GF kitchen reported, celiac reviewers October 2026 calling the whole breakfast menu gluten-free. Open questions: the own claim is about the cakes; the café menu (bread, bagels, bacon, sausage) is not described on the site; official hours (12:00 opening) conflict with reviewers' early breakfast. Ask: is every bread, bagel and sauce gluten-free, and is anything with wheat brought in?",
  });
}

// ================================================================ OSAKA ENGINE RAMEN
{
  const FM = 'https://www.findmeglutenfree.com/biz/osaka-engine/5028429292765184';
  const IG = 'https://www.instagram.com/osakaengine_ramen/';
  put({
    id: 'osaka_engine_ramen_honmachi', name: 'OSAKA ENGINE RAMEN', category: 'GF',
    lat: 34.683975, lng: 135.506257, cuisine_type: 'ramen',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Every ramen can be made with gluten-free rice noodles (extra charge), and gluten-free soy sauce, dumplings, beer and desserts are available. The restaurant tells FindMeGlutenFree it uses "a dedicated cooking machine and separate equipment for our gluten-free noodles" and "specially designated bowls for gluten-free orders". Celiac reviewers (through October 2026) describe GF-marked bowls, GF coasters and tags, and knowledgeable staff. It is not a dedicated gluten-free kitchen (August 2026 review). Ask for the GF version explicitly.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'A vegan "zesty" ramen is on the menu (October 2026). Ask whether the broth and tare are fully plant-based.',
    hours_raw: 'No hours captured (Instagram only). Lunch and dinner reported. Reservations recommended (FMGF users).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Azuchimachi 2-2-15, Houser Sakaisuji Honmachi Ekimae Bldg 1F — by Sakaisuji-Hommachi Stn',
    cuisine: 'Ramen made gluten-free on request (rice noodles) · "zesty #1" ramen, black garlic ramen, rich miso · vegan zesty ramen · tender pork chashu · GF gyoza · GF beer, sake tasting, plum wine · GF desserts and gelato · GF-marked bowls · counter and a private room',
    website: IG, gmaps: gm('OSAKA ENGINE RAMEN 堺筋本町'), menu_url: null,
    notes: "[Ramen · gluten-free ramen near Sakaisuji-Hommachi] A lively ramen bar by Sakaisuji-Hommachi Station that has become a celiac favourite (152 reviews on FMGF). Every ramen can be made with gluten-free rice noodles, cooked in a dedicated machine with separate equipment, and served in a specially marked bowl. Celiac diners get GF tags and coasters. Reviewers love the zesty #1 ramen, the black garlic ramen and a rich miso, all with very tender pork, plus GF gyoza, GF beer and desserts, and a sake tasting. A vegan zesty ramen is also available. Sit at the counter for the show, or book the private room for a group. It is not a dedicated GF kitchen, but the staff are exceptionally knowledgeable.",
    chef_bio: { chef_name: null, roles: [], origin: 'Azuchimachi 2-chōme', background: 'Instagram @osakaengine_ramen; owner statement on FMGF about dedicated GF noodle equipment. No source names the chef.', philosophy: null, specialty: 'Ramen with gluten-free rice noodles.',
      anecdotes: [
        { text: '"We use a dedicated cooking machine and separate equipment for our gluten-free noodles, completely apart from those used for regular noodles. We have also introduced specially designated bowls for gluten-free orders." — the restaurant, on FMGF.', source: FM },
        { text: '"I had the black garlic ramen which was delicious… The gf ramen comes out in a specially marked bowl. My beer had a \'no gluten\' coaster." — FMGF review, October 2026.', source: FM },
        { text: '"You have to ask for gluten-free rice noodles and there is an additional charge. They have gluten-free soy sauce." — FMGF review, August 2026, miso ramen.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: OSAKA ENGINE RAMEN、大阪市中央区安土町2-2-15 ハウザー堺筋本町駅前ビル1F、06-7636-8802、Instagram @osakaengine_ramen、グルテンフリーのメニューあり、評価152件。店の説明: グルテンフリーの麺には専用の調理機と器具を使い、グルテンフリー用の専用の器で提供。口コミ(2026年8〜10月): 日本で一番のラーメン、メニューに表示、すべてグルテンフリーにできる、グルテンフリーのビール・餃子・デザート、黒にんにくラーメン、ヴィーガンのゼスティ、専用の器とノーグルテンのコースター、グルテンフリーのタグ、個室、ゼスティ#1、日本酒の飲み比べ、梅酒、グルテンフリー専門ではない、グルテンフリーの米粉麺は追加料金、味噌ラーメン、やわらかいチャーシュー、カウンター。',
      confidence: 'medium', sources: [FM, IG] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso', 'other'], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Wheat noodles or gluten-free rice noodles (extra charge), cooked in a dedicated machine (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Zesty #1 ramen; black garlic ramen (October 2026).',
      chashu: 'Pork slices, "so incredibly tender" (October 2026).',
      notable_toppings: ['black garlic oil (black garlic ramen)', 'GF gyoza (side)'],
      gf: { status: 'options', note: 'Gluten-free rice noodles and GF soy sauce on request; dedicated noodle cooker and marked bowls (own statement).' },
      vegan: { status: 'options', note: 'Vegan zesty ramen (October 2026).' },
      pantheon: 'The celiac traveller\'s ramen night in Osaka: zesty and black-garlic bowls on gluten-free rice noodles from a dedicated cooker, in bowls marked GF.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [FM, '"The noodles were a nice texture and broth was very rich" (October 2026); miso "had a rich, delicious texture" (August 2026).'],
        oiliness: [FM, 'Oil not described — mid-scale (inferred).'],
        clarity: [FM, 'Rich broths; not described as clear — placed low (inferred).'],
        tare_strength: [FM, 'Seasoning strength not described — mid-scale (inferred).'],
        noodle_firmness: [FM, '"The noodles were a nice texture" — mid-scale.'],
        aroma_punch: [FM, 'Black garlic and "zesty" ramen ("nourishing and flavorful") — placed high.'],
      },
      confidence: 'low', sources: [FM], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Staff very knowledgeable about celiac disease; English-friendly (2026).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: '"The restaurant is not dedicated gluten-free but the staff is very knowledgeable and aware of dietary restrictions." — FMGF review, August 2026.', source: FM }],
      soy_sauce_wheat: [{ text: 'Gluten-free soy sauce available (FMGF review, August 2026).', source: FM }],
      staff_allergy_handling: [{ text: 'Own statement: dedicated cooking machine and separate equipment for GF noodles; designated GF bowls; strict procedures.', source: FM }],
      positives: [{ text: 'GF-marked bowls, GF coasters and tags for celiac guests (FMGF reviews, 2026).', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区安土町2-2-15 ハウザー堺筋本町駅前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区安土町二丁目2番15号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured; GF rice noodles carry an extra charge (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Zesty #1 ramen (GF rice noodles on request)', '', 'Ramen', 'gf', 'ask', 'October 2026.', 'zesty'),
      it('', '', 'Black garlic ramen (GF rice noodles on request)', '', 'Ramen', 'gf', 'no', 'October 2026.', 'black_garlic'),
      it('', '', 'Miso ramen (GF rice noodles on request)', '', 'Ramen', 'gf', 'ask', 'August 2026.', 'miso'),
      it('', '', 'Vegan zesty ramen', '', 'Ramen', 'ask', 'vegan', 'October 2026.', 'vegan_zesty'),
      it('', '', 'Gluten-free gyoza', '', 'Sides', 'gf', 'no', 'October 2026.', 'gf_gyoza'),
      it('', '', 'Gluten-free beer', '', 'Drinks', 'gf', 'ask', 'October 2026.', 'gf_beer'),
    ] }, {
    cuisine: '頼めばグルテンフリーにできるラーメン(米粉麺)・「ゼスティ#1」、黒にんにく、濃厚な味噌・ヴィーガンのゼスティ・やわらかい豚チャーシュー・グルテンフリーの餃子・グルテンフリーのビール、日本酒の飲み比べ、梅酒・グルテンフリーのデザートとジェラート・グルテンフリー専用の器・カウンターと個室',
    neighborhood: '安土町2-2-15 ハウザー堺筋本町駅前ビル1F。堺筋本町駅すぐ',
    gf_detail: 'どのラーメンもグルテンフリーの米粉麺にでき(追加料金)、グルテンフリーの醤油、餃子、ビール、デザートもあります。店はFindMeGlutenFreeで、グルテンフリーの麺には「専用の調理機と別の器具」を使い、グルテンフリー用の「専用の器」で出すと説明。セリアック病の客(2026年10月まで)は、グルテンフリー表示の器、コースターやタグ、知識のあるスタッフを報告しています。グルテンフリー専門の厨房ではありません(2026年8月の口コミ)。はっきりグルテンフリーで注文を。',
    vegan_detail: 'ヴィーガンの「ゼスティ」ラーメンがあります(2026年10月)。スープとたれが完全に植物性か確認を。',
    notes: '[ラーメン・堺筋本町のグルテンフリーのラーメン] 堺筋本町駅そばのにぎやかなラーメンバーで、セリアック病の旅行者には日本で一番の食事の一つに挙げられる店(FMGFの口コミ152件)。どのラーメンもグルテンフリーの米粉麺にでき、専用の調理機と器具で茹で、専用の器で出てきます。セリアック病の客にはグルテンフリーのタグやコースターも。人気はゼスティ#1、黒にんにくラーメン、濃厚な味噌で、豚チャーシューはとてもやわらか。グルテンフリーの餃子、ビール、デザート、日本酒の飲み比べも。ヴィーガンのゼスティも。カウンターで調理を見るか、グループなら個室を予約。グルテンフリー専門の厨房ではありませんが、スタッフの知識は抜群です。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, IG],
    why: "Own claim on FMGF: dedicated cooking machine and separate equipment for GF noodles, designated GF bowls, strict procedures. Independent first-hand corroboration: FindMeGlutenFree, 152 reviews, celiac reviewers through October 2026 — GF-marked bowls, GF tags and coasters, knowledgeable staff, no reactions reported; GF soy sauce, gyoza, beer. 'high' rather than 'dedicated': a shared kitchen serving wheat noodles; GF noodles must be requested. Ask: are the broths, tares and oils gluten-free (miso, black garlic oil), and the gyoza fried separately?",
  });
}

// ================================================================ Shinsekai Paprika Shokudo
{
  const FM = 'https://www.findmeglutenfree.com/biz/shinsekai-paprika/5125795932143616';
  const IG = 'https://www.instagram.com/shinsekai.paprika_vegan/';
  put({
    id: 'osaka_shinsekai_paprika_shokudo', name: 'Shinsekai Paprika Shokudo Vegan&Gluten-Free', category: 'BOTH',
    lat: 34.650524, lng: 135.50603, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'FMGF marks it "Reported to be dedicated gluten-free", and celiac reviewers describe nearly everything as gluten-free, with gluten-free soy sauce and a dedicated fryer reported. The exception is the soy meat, which contains gluten and is clearly marked on the menu (2024–2025 reviews). Regular beer is also sold alongside GF beer. Avoid the soy-meat dishes and confirm.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'A vegan restaurant: reviewers describe the whole menu as vegan (2024–2026), including takoyaki, kushikatsu and ramen.',
    hours_raw: 'No hours captured; "check the opening times" (FMGF review, April 2026). Order by QR code; English menu.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 3-4-5, Naniwa-ku, down an alley in Shinsekai',
    cuisine: 'Vegan, gluten-free Osaka street food · takoyaki · kushikatsu (eggplant, pumpkin) · mixed vegetable tempura · ramen · fried mochi · fried avocado · cinnamon doughnuts · GF soy sauce and GF beer · QR ordering',
    website: IG, gmaps: gm('新世界 パプリカ食堂'), menu_url: null,
    notes: '[Vegan · vegan, gluten-free Osaka street food in Shinsekai] A small, women-run vegan kitchen down a Shinsekai alley serving Osaka\'s street-food classics without meat or gluten: takoyaki that tastes like the real thing, kushikatsu skewers (eggplant, pumpkin), mixed vegetable tempura, ramen, fried mochi (one diner ordered it four times), fried avocado and cinnamon doughnuts. Everything is labelled, the soy sauce is gluten-free, and there is GF beer. The only gluten is in the soy meat, which is clearly marked. Order by QR code from an English menu. Affordable. Hours vary, so check before going.',
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsekai, Naniwa-ku', background: 'A vegan restaurant on Instagram as @shinsekai.paprika_vegan; an FMGF reviewer describes it as women-run (April 2026). No source names the owner.', philosophy: null, specialty: 'Vegan, gluten-free takoyaki and kushikatsu.',
      anecdotes: [
        { text: '"For kushikatsu I got the eggplant and pumpkin one. It was soo delicious with the sauce… everything on the menu is labeled gluten free." — FMGF review, June 2026.', source: FM },
        { text: '"All gluten free except the soy meat (clearly marked on the menu)." — FMGF review, 2025.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: Shinsekai Paprika Shokudo Vegan&Gluten-Free、大阪市浪速区恵美須東3-4-5、06-6567-9376、Instagram @shinsekai.paprika_vegan、グルテンフリー専門と報告、専用フライヤーの報告。口コミ(2024年〜2026年10月): グルテンフリーのビール、QRコードで注文、すべて表示あり、ベジタリアンのたこ焼き、なすとかぼちゃの串カツ、揚げた野菜、天ぷら、醤油はすべてグルテンフリー、シナモンドーナツ、英語メニュー、女性が営む店、手作りでグルテンフリーかつヴィーガン、大豆ミート以外はグルテンフリー(表示あり)、ラーメン、揚げたアボカド、揚げ餅、手頃な値段、営業時間を確認。',
      confidence: 'medium', sources: [FM, IG] },
    cultural_comfort: { level: 'english', note: 'English menu and QR ordering (April 2026).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [
        { text: 'The soy meat is not gluten-free (clearly marked on the menu; 2024–2025 reviews).', source: FM },
        { text: 'Regular beer is sold alongside gluten-free beer (FMGF review, August 2026).', source: FM },
      ],
      soy_sauce_wheat: [{ text: '"The soy sauce is all gluten free!" — FMGF review, April 2026.', source: FM }],
      positives: [{ text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; dedicated GF fryer reported; menu labels GF and vegan items.', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東3-4-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF review from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市浪速区恵美須東三丁目4番5号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured; reviewers call it affordable.', last_checked: TODAY, items: [
      it('', '', 'Vegan, gluten-free takoyaki', '', 'Street food', 'gf', 'vegan', 'July 2026.', 'takoyaki'),
      it('', '', 'Kushikatsu (eggplant, pumpkin)', '', 'Street food', 'gf', 'vegan', 'June 2026.', 'kushikatsu'),
      it('', '', 'Mixed vegetable tempura', '', 'Mains', 'gf', 'vegan', 'April 2026.', 'tempura'),
      it('', '', 'Ramen', '', 'Noodles', 'gf', 'vegan', '2024.', 'ramen'),
      it('', '', 'Fried mochi', '', 'Sides', 'gf', 'vegan', '2024.', 'fried_mochi'),
      it('', '', 'Cinnamon doughnuts', '', 'Dessert', 'gf', 'vegan', 'April 2026.', 'doughnuts'),
      it('', '', 'Soy-meat dishes', '', 'Mains', 'no', 'vegan', 'Soy meat contains gluten — marked on the menu.', 'soy_meat'),
    ] }, {
    cuisine: 'ヴィーガン・グルテンフリーの大阪の粉もんと屋台料理・たこ焼き・串カツ(なす、かぼちゃ)・野菜の天ぷら盛り合わせ・ラーメン・揚げ餅・揚げアボカド・シナモンドーナツ・グルテンフリーの醤油とビール・QRで注文',
    neighborhood: '浪速区恵美須東3-4-5、新世界の路地',
    gf_detail: 'FMGFでは「グルテンフリー専門と報告」とされ、セリアック病の客はほぼすべてグルテンフリーで、醤油もグルテンフリー、専用フライヤーの報告もあります。例外は大豆ミートでグルテンを含み、メニューにはっきり表示されています(2024〜2025年の口コミ)。グルテンフリーのビールのほか普通のビールも。大豆ミートの料理は避け、確認を。',
    vegan_detail: 'ヴィーガンの店で、口コミではたこ焼き、串カツ、ラーメンを含めメニューはすべてヴィーガン(2024〜2026年)。',
    notes: '[ヴィーガン・新世界のヴィーガン・グルテンフリーの大阪屋台料理] 新世界の路地にある、女性が営む小さなヴィーガンの店で、大阪の屋台の定番を肉もグルテンもなしで出しています。本物のようなたこ焼き、串カツ(なす、かぼちゃ)、野菜の天ぷら盛り合わせ、ラーメン、揚げ餅(4回頼んだ客も)、揚げアボカド、シナモンドーナツ。すべて表示があり、醤油はグルテンフリー、グルテンフリーのビールも。グルテンを含むのははっきり表示された大豆ミートだけ。英語メニューからQRコードで注文。手頃な値段。営業時間は変わるので確認してから。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, IG],
    why: "Independent first-hand corroboration: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers 2024–October 2026, everything labelled, GF soy sauce, dedicated fryer reported. 'high' rather than 'dedicated': the soy meat contains gluten (clearly marked) and regular beer is served; no own statement captured (Instagram only). Ask: is the soy meat fried in the same oil, and prepared on separate surfaces?",
  });
}

save();
