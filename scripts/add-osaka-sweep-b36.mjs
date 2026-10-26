// Osaka sweep (2-mile circle around Dotonbori), batch 36 — ramen phase, nearest first (all OMNI).
//   + 麻婆麺専門店 麻仁 心斎橋店 (mala mabo ramen, evenings to 6 am)
//   + らーめん 醤 大丸心斎橋店 (Sakai's Ramen Jan in the Daimaru B2F food hall)
//   + 人類みなウチのラーメン (clam-broth and miso ramen, opened Oct 2025)
//   + MAREN 心斎橋 (chicken-paitan mazesoba, opened Jun 2026, to 6 am)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 36);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27130600', 'Tabelog listing with 0 reviews; current operation unverified.');
skip('27009847', 'Newest of six reviews is December 2025 (others July–December 2025); current operation unverified — re-check later.');

// ================================================================ 麻婆麺専門店 麻仁 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27127935/'; const R = TB + 'dtlrvwlst/';
  const N = day(['18:00', '06:00']);
  put({
    id: 'osaka_mabomen_majin_shinsaibashi', name: '麻婆麺専門店 麻仁 心斎橋店 (Mabo Men Senmon Ten Majin)', category: 'OMNI',
    lat: 34.672064, lng: 135.505041, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; gyoza, dim sum.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-broth base; meat in the mabo.',
    hours_raw: 'Mon–Sat 18:00–6:00 (Tabelog lists Mon 18:00–24:00, Tue–Sat 0:00–6:00 and 18:00–24:00, Sun 0:00–6:00). Cards, e-money and QR accepted. One reviewer notes smoking was allowed (October 2026).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-6-10 — about 300 m from Nagahoribashi Stn',
    cuisine: 'Mabo-ramen specialist · mala mabo ramen ¥1,300 on thick noodles · "Hell" mabo ramen (fiercely hot) · medicinal-herb mabo ramen with cilantro · chicken-broth base · dim sum set, gyoza, kara-age · highballs · 15 seats · open until 6 am',
    website: null, gmaps: gm('麻婆麺専門店 麻仁 心斎橋'), menu_url: null,
    notes: "[Ramen · late-night mala mabo ramen in Higashi-Shinsaibashi] A 15-seat mabo-ramen specialist that opens at 6 pm and stays open until 6 am, a late-night oasis for drinkers. The mala mabo ramen (¥1,300, July 2026) is rich, spicy mabo over thick noodles that has reviewers sweating from face to scalp. The \"Hell\" version is hotter still, and a medicinal-herb mabo comes with cilantro and a gritty, herbal, slightly sweet sauce. The base is chicken broth. With gyoza, kara-age or a dim sum set and a highball, it works as a nightcap meal. One reviewer says the original shop closed and only this branch remains. Not everyone is won over; one mabo-ramen hunter wanted more depth.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 January 2022 (Tabelog)', background: 'A July 2026 reviewer says the original location closed and only the Shinsaibashi branch remains.', philosophy: null, specialty: 'Mala mabo ramen.',
      anecdotes: [
        { text: '"The rich and spicy Mabo Tofu pairs perfectly with the thick noodles… The intense flavors make me break into a sweat." — July 2026, mala mabo ramen ¥1,300.', source: R + 'B532694107/' },
        { text: '"I wrapped up my meal with the medicinal herbal Mabo ramen topped with cilantro." — July 2026.', source: R + 'B532640469/' },
      ],
      japanese_sources_summary: '食べログ: 麻婆麺専門店 麻仁 心斎橋店、大阪市中央区東心斎橋1-6-10、06-6125-5758、予約不可、月18:00〜24:00、火〜土0:00〜6:00・18:00〜24:00、日0:00〜6:00、カード・電子マネー・QR決済可、15席(カウンター7、4人テーブル2)、2022年1月17日開店。2026年の口コミ(7〜10月): 麻辣麻婆ラーメンと小ライス、地獄麻婆ラーメンは辛すぎた、飲んだ後のオアシス、顔や首や頭から汗、たれは甘め、薬膳の風味が強くざらっとした食感、点心セットとハイボール、喫煙できるラーメン店、朝まで営業、餃子と唐揚げ、パクチーのせ薬膳麻婆ラーメン、麻辣麻婆ラーメン1,300円、本店は閉店し心斎橋店だけが残ったという話、太麺、鶏ガラベース、辛い系や薬膳系、麻婆に深みが欲しいという声。',
      confidence: 'medium', sources: [TB, R + 'B532694107/', R + 'B532640469/', R + 'B503136974/', R + 'B531805267/', R + 'B446609977/', R + 'B537049235/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Mala mabo ramen ¥1,300 (July 2026).',
      chashu: null,
      notable_toppings: ['mabo tofu', 'cilantro (medicinal-herb version)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth; meat mabo.' },
      pantheon: 'Higashi-Shinsaibashi\'s 6 am mala mabo ramen: thick noodles under a sweat-inducing mapo.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B532694107/', '"The rich and spicy Mabo Tofu pairs perfectly with the thick noodles."'],
        oiliness: [R + 'B532694107/', 'Oil not described — mid-scale (inferred).'],
        clarity: [R + 'B532694107/', 'Mabo-topped bowl — opaque (inferred).'],
        tare_strength: [R + 'B532694107/', '"The intense flavors make me break into a sweat."'],
        noodle_firmness: [R + 'B532694107/', 'Thick noodles; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B503136974/', '"Quite spicy with its mala flavor… I started sweating from my face, neck, and scalp."'],
      },
      confidence: 'medium', sources: [R + 'B532694107/', R + 'B503136974/', R + 'B531805267/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night counter; smoking reported (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532694107/', R + 'B446609977/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mala mabo ramen', '¥1,300', 'Mabo ramen', 'no', 'no', 'July 2026.', 'mala'),
      it('', '', '"Hell" mabo ramen', '', 'Mabo ramen', 'no', 'no', 'October 2026.', 'jigoku'),
      it('', '', 'Medicinal-herb mabo ramen with cilantro', '', 'Mabo ramen', 'no', 'no', 'July 2026.', 'yakuzen'),
      it('', '', 'Dim sum set', '', 'Sides', 'no', 'no', 'October 2026.', 'dimsum'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'July 2026.', 'gyoza'),
    ] }, {
    cuisine: '麻婆麺専門店・太麺の麻辣麻婆ラーメン1,300円・激辛の地獄麻婆ラーメン・パクチーのせ薬膳麻婆ラーメン・鶏ガラベース・点心セット、餃子、唐揚げ・ハイボール・15席・朝6時まで',
    neighborhood: '東心斎橋1-6-10。長堀橋駅から約300m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、餃子、点心。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラベース、麻婆に肉。',
    notes: '[ラーメン・東心斎橋の深夜の麻辣麻婆ラーメン] 夕方6時に開いて朝6時まで営業する15席の麻婆麺専門店で、飲む人の深夜のオアシス。麻辣麻婆ラーメン(1,300円、2026年7月)は濃くて辛い麻婆が太麺にかかり、顔から頭まで汗をかくという声。「地獄」はさらに辛く、薬膳麻婆はパクチーのせで、ざらっとした薬膳の風味とやや甘めのたれ。ベースは鶏ガラ。餃子や唐揚げ、点心セットとハイボールで締めの一杯に。本店は閉店してこの店だけが残ったという口コミも。麻婆に深みが欲しかったという麻婆ラーメン好きもいます。',
  });
}

// ================================================================ らーめん 醤 大丸心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27131784/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_jan_daimaru_shinsaibashi', name: 'らーめん 醤 大丸心斎橋店 (Ramen Jan Daimaru Shinsaibashi)', category: 'OMNI',
    lat: 34.673174, lng: 135.500999, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based broth; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork in the Jan ramen, tonkotsu ramen, roast pork, kara-age.',
    hours_raw: 'Daily 11:00–20:00 (Tabelog; follows the department store). Cards, e-money and QR accepted. No reservations.',
    hours: ALL(day(['11:00', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Shinsaibashi B2F food hall (Shinsaibashi-suji 1-7-1)',
    cuisine: 'Sakai City\'s Ramen Jan · spicy "Jan ramen" with napa cabbage, chives and pork · negi ramen ¥970 · tonkotsu ramen · Jankara (signature kara-age) · Jankara set and Manpuku set (Tianjin rice, kara-age) · limited curry-tsukemen collaborations',
    website: null, gmaps: gm('らーめん 醤 大丸心斎橋'), menu_url: null,
    notes: "[Ramen · Sakai's spicy Jan ramen in the Daimaru food hall] The Daimaru Shinsaibashi branch of Ramen Jan, a ramen shop from Sakai City, in the B2F food hall, handy mid-shopping. The house \"Jan ramen\" has a pleasant spicy kick, then the sweetness of napa cabbage and chives and the richness of pork; one reviewer credits a secret sauce perfected over 30 years. The negi ramen (¥970, August 2026) is a refreshing soy base under a heap of white leek, though one reviewer found it very salty. Sets add the signature Jankara kara-age, crisp and very juicy, or the Manpuku set with fluffy Tianjin rice. In August 2026 there was a limited curry tsukemen. Busy with international shoppers.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2022 (Tabelog); the chain began in Sakai City (August 2026 review)', background: 'Ramen Jan, a Sakai ramen shop; a reviewer mentions a secret sauce refined over more than thirty years (July 2026).', philosophy: null, specialty: 'Spicy Jan ramen; Jankara kara-age.',
      anecdotes: [
        { text: '"Taking a sip of the broth revealed a pleasantly spicy kick, followed by the sweetness of the vegetables and the richness of the pork filling my mouth." — July 2026, Jan ramen.', source: R + 'B531556127/' },
        { text: '"I ordered the Negi Ramen (JPY 970)… the broth was a refreshing soy sauce base… However, the soup was quite salty." — August 2026.', source: R + 'B533845650/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 醤 大丸心斎橋店、大阪市中央区心斎橋筋1-7-1 大丸心斎橋店B2F、06-6226-7872、予約不可、毎日11:00〜20:00、カード・電子マネー・QR決済可、禁煙、2022年9月20日開店。2026年の口コミ(6〜8月): 期間限定の吉本カレーとのコラボの野菜たっぷりとんこつカレーつけ麺(8月5〜25日)、とんこつラーメンの満腹セット(天津飯、唐揚げ)、きくらげと紅しょうが、海外客が多い、ジャンカラセット(唐揚げ「ジャンから」2個とご飯)、醤ラーメン(ピリ辛、白菜とニラ、豚のうま味、30年以上の秘伝のたれ)、天津飯、名物ジャンから、堺市発祥、ねぎラーメン970円(白ねぎたっぷり、あっさり醤油、かなりしょっぱい)、地下2階のフードホール。',
      confidence: 'medium', sources: [TB, R + 'B531556127/', R + 'B533845650/', R + 'B530465943/', R + 'B456903763/', R + 'B533767930/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Jan ramen" with napa cabbage and chives (July 2026); negi ramen ¥970 (August 2026).',
      chashu: 'Thick roast pork on the limited curry tsukemen (August 2026).',
      notable_toppings: ['napa cabbage', 'garlic chives', 'white leek (negi ramen)', 'kikurage', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork.' },
      pantheon: 'Sakai\'s spicy cabbage-and-chive Jan ramen, two floors under Daimaru.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531556127/', '"The richness of the pork filling my mouth."'],
        oiliness: [R + 'B531266429/', '"A rich yet easy-to-drink broth" — mid-scale.'],
        clarity: [R + 'B531556127/', 'Pork-rich spicy broth; clarity not described — below mid (inferred).'],
        tare_strength: [R + 'B533845650/', '"The soup was quite salty."'],
        noodle_firmness: [R + 'B531266429/', 'Noodles "pair well with the soup"; firmness not described — mid-scale.'],
        aroma_punch: [R + 'B531556127/', '"A pleasantly spicy kick" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B531556127/', R + 'B533845650/', R + 'B531266429/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store food hall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目7番1号 (go) 38m; OSM 大丸 心斎橋店 南館 way/161875242 76m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533845650/', R + 'B531556127/'],
    price_note: 'Price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Jan ramen"', '', 'Ramen', 'no', 'no', 'July 2026.', 'jan'),
      it('', '', 'Negi ramen', '¥970', 'Ramen', 'no', 'no', 'August 2026.', 'negi'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'tonkotsu'),
      it('', '', 'Jankara (signature kara-age)', '', 'Sides', 'no', 'no', 'August 2026.', 'jankara'),
      it('', '', 'Tianjin rice', '', 'Rice', 'no', 'no', 'August 2026.', 'tenshin'),
    ] }, {
    cuisine: '堺市発祥のらーめん 醤・白菜、ニラ、豚のピリ辛の醤ラーメン・ねぎラーメン970円・とんこつラーメン・名物唐揚げのジャンから・ジャンカラセットと満腹セット(天津飯、唐揚げ)・期間限定のカレーつけ麺のコラボ',
    neighborhood: '大丸心斎橋店B2Fのフードホール(心斎橋筋1-7-1)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのスープ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。醤ラーメンに豚、とんこつラーメン、焼豚、唐揚げ。',
    notes: '[ラーメン・大丸のフードホールの堺のピリ辛醤ラーメン] 堺市発祥のらーめん 醤の大丸心斎橋店で、地下2階のフードホールにあり、買い物の途中に便利。看板の「醤ラーメン」はピリッと辛く、白菜とニラの甘み、豚のコク。30年以上かけた秘伝のたれだという口コミも。ねぎラーメン(970円、2026年8月)は白ねぎたっぷりのあっさり醤油ですが、かなりしょっぱいという声も。セットには名物の唐揚げ「ジャンから」(カリッと非常にジューシー)や、ふわふわの天津飯の満腹セット。2026年8月は期間限定のカレーつけ麺も。海外の買い物客でにぎわいます。',
  });
}

// ================================================================ 人類みなウチのラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152791/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_jinrui_mina_uchi_no_ramen', name: '人類みなウチのラーメン (Jinrui Mina Uchi no Ramen)', category: 'OMNI',
    lat: 34.67294, lng: 135.503395, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth, chashu, mentaiko.',
    hours_raw: 'Daily 11:00–22:30 (Tabelog). Reservations taken. Cards, e-money and QR accepted.',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-14-18 — about 300 m from Nagahoribashi Stn',
    cuisine: 'Clam-broth ramen and miso ramen · "normal" shellfish (clam) broth ramen · house-recommended miso ramen · limited chilled ramen ¥1,280 (July 2026) with rare chashu on curly thick noodles · mentaiko rice',
    website: null, gmaps: gm('人類みなウチのラーメン 東心斎橋'), menu_url: null,
    notes: "[Ramen · clam broth and miso in Higashi-Shinsaibashi] A ramen shop open since October 2025, with two lines: a clam-broth ramen and a miso ramen the shop recommends. One reviewer compares the miso to Tadokoro's; another, who knew an earlier shop, was glad to find the miso back; a third finished every drop of the clam bowl late at night. A July 2026 chilled ramen (¥1,280) paired a Japanese-style dashi with chilled curly thick noodles, rare chashu, shiso and a seasoned egg. Opinions are mixed: August 2026 visitors found the clam broth standard and the service silent and unwelcoming, and the mentaiko rice is from a tube.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 October 2025 (Tabelog)', background: 'A June 2026 reviewer links it to an earlier shop whose miso ramen left the menu and returned after renovation.', philosophy: null, specialty: 'Clam-broth ramen; miso ramen.',
      anecdotes: [
        { text: '"I tried the limited cold ramen at Jinrui Mina Uchi no Ramen for JPY 1280. The broth had a refreshing yet rich flavor from the Japanese-style dashi, paired with perfectly chilled, curly thick noodles." — July 2026.', source: R + 'B531156685/' },
        { text: '"I ordered the normal shellfish broth ramen. It was quite delicious! I even finished the entire broth." — June 2026.', source: R + 'B530068770/' },
      ],
      japanese_sources_summary: '食べログ: 人類みなウチのラーメン、大阪市中央区東心斎橋1-14-18、080-3441-6891、予約可、毎日11:00〜22:30、カード・電子マネー・QR決済可、2025年10月27日開店。2026年の口コミ(6〜8月): 夜11時ごろでも先客、普通の貝出汁ラーメンでスープまで完飲、おすすめの味噌ラーメンは田所商店に似た味、期間限定の冷やしラーメン1,280円(和風だし、冷たいちぢれ太麺、薄切りのレアチャーシュー、ねぎ、大葉、かいわれ、メンマ、味玉)、改装後に味噌が復活して喜ぶ声、貝出汁は普通で明太子ご飯はチューブという声、安っぽい装飾、無言の接客で再訪しないという声。',
      confidence: 'low', sources: [TB, R + 'B531156685/', R + 'B530068770/', R + 'B530619782/', R + 'B531983443/', R + 'B534411520/', R + 'B534528159/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Curly thick noodles on the chilled ramen (July 2026); others not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Clam-broth ramen; miso ramen (June 2026).',
      chashu: 'Thinly sliced rare chashu (July 2026).',
      notable_toppings: ['seasoned egg', 'menma', 'shiso (chilled)', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s two-track shop: a clam-broth bowl and a Tadokoro-like miso.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B531156685/', '"A refreshing yet rich flavor from the Japanese-style dashi" (chilled) — mid-scale.'],
        oiliness: [R + 'B530068770/', 'Not described — mid-scale (inferred).'],
        clarity: [R + 'B530619782/', 'Miso broth — below mid (inferred).'],
        tare_strength: [R + 'B530619782/', 'Miso "similar to Tadokoro Ramen" — mid-scale.'],
        noodle_firmness: [R + 'B531156685/', 'Chilled curly thick noodles — mid-scale.'],
        aroma_punch: [R + 'B534411520/', 'Clam broth "pretty standard" — placed low.'],
      },
      confidence: 'low', sources: [R + 'B531156685/', R + 'B530068770/', R + 'B530619782/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet service (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番18号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531156685/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Clam-broth ramen (normal)', '', 'Ramen', 'no', 'no', 'June 2026.', 'kai'),
      it('味噌ラーメン', 'miso rāmen', 'Miso ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'miso'),
      it('', '', 'Chilled ramen (limited)', '¥1,280', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi'),
      it('', '', 'Mentaiko rice', '', 'Rice', 'no', 'no', 'August 2026.', 'mentai'),
    ] }, {
    cuisine: '貝出汁ラーメンと味噌ラーメン・「普通」の貝出汁ラーメン・店おすすめの味噌ラーメン・期間限定の冷やしラーメン1,280円(2026年7月、ちぢれ太麺にレアチャーシュー)・明太子ご飯',
    neighborhood: '東心斎橋1-14-18。長堀橋駅から約300m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌だれ。',
    vegan_detail: 'ヴィーガンではありません。貝出汁、チャーシュー、明太子。',
    notes: '[ラーメン・東心斎橋の貝出汁と味噌] 2025年10月に開店したラーメン店で、貝出汁ラーメンと、店がすすめる味噌ラーメンの2本立て。味噌は田所商店に似ているという人、以前の店を知っていて味噌の復活を喜ぶ人、夜遅くに貝出汁をスープまで飲み干した人も。2026年7月の冷やしラーメン(1,280円)は和風だしに冷たいちぢれ太麺、レアチャーシュー、大葉、味玉。評価は分かれ、8月には貝出汁は普通、接客は無言でそっけない、明太子ご飯はチューブという声も。',
  });
}

// ================================================================ MAREN 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27156464/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_maren_shinsaibashi', name: 'MAREN 心斎橋 (MAREN Shinsaibashi)', category: 'OMNI',
    lat: 34.673084, lng: 135.503229, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and chicken oil in the sauce, chashu, egg yolk.',
    hours_raw: 'Daily 11:00–6:00 (Tabelog); late-night prices are slightly higher (October 2026). Electronic ticket machine — even the paper apron is ordered there. Cards, e-money and QR accepted.',
    hours: ALL(day(['11:00', '06:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-5 — 3 min from Shinsaibashi Stn',
    cuisine: 'Chicken-paitan mazesoba from Kitashinchi · shoyu mazesoba ¥1,050 (special soy sauce, chicken paitan, chicken oil, egg yolk) · chashu shoyu mazesoba ¥1,180 · chicken-salt mazesoba with shiso oil · seafood chicken-paitan noodles ¥1,100 · thick Tsurumi Seimen noodles · mini rice to finish · 23 seats · open to 6 am',
    website: null, gmaps: gm('MAREN 心斎橋'), menu_url: null,
    notes: "[Ramen · chicken-paitan mazesoba until 6 am in Shinsaibashi] A branch of MAREN, a mazesoba shop with its main store in Kitashinchi, open since June 2026 from 11 am to 6 am. It's roomier and nicer than a typical ramen counter, and most customers are visitors from abroad. The shoyu mazesoba (¥1,050) piles chashu, menma, onion, sprouts, mitsuba and egg yolk over thick, chewy Tsurumi Seimen noodles in a special soy sauce with chicken paitan and chicken oil. Mix hard, then add the mini rice to the leftovers. The chashu version (¥1,180) adds block, chicken-breast and thin-sliced chashu with a strong garlic punch. There's also a chicken-salt mazesoba with shiso oil, and a seafood chicken-paitan soup noodle (¥1,100). Order at the machine; late-night prices are slightly higher.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2026 (Tabelog); main store in Kitashinchi, with a Shibuya shop (October 2026 review)', background: 'MAREN; noodles by Tsurumi Seimen (October 2026 review).', philosophy: null, specialty: 'Chicken-paitan mazesoba.',
      anecdotes: [
        { text: '"The sauce consisted of a special soy sauce, chicken white broth, and chicken oil… The noodles, made by Tsuru-mi Seimen, were thick and had a delightful chewiness." — October 2026, shoyu mazesoba ¥1,050.', source: R + 'B536900710/' },
        { text: '"The garlic flavor was quite strong, giving it a punchy taste." — October 2026, chashu shoyu mazesoba.', source: R + 'B536744898/' },
      ],
      japanese_sources_summary: '食べログ: MAREN 心斎橋、大阪市中央区東心斎橋1-17-5、06-4560-7887、予約不可、毎日11:00〜翌6:00、カード・電子マネー・QR決済可、23席、2026年6月1日開店。2026年の口コミ(9〜10月): 土曜の夜も待ちなし、海外客が多い(約8割という声)、チャーシュー醤油まぜそば1,180円(塊・鶏むね・薄切りのチャーシューと卵、にんにくが強くパンチがある)、醤油まぜそば1,050円(チャーシュー、メンマ、玉ねぎ、かいわれ、三つ葉、卵黄、特製醤油と鶏白湯と鶏油のたれ)、Tsurumi Seimenの太麺はもちもち、ミニライスを残りに入れて、北新地が本店で渋谷にも店、朝6時まで、電子券売機、深夜料金は少し高め、鶏塩まぜそば大葉オイル、魚介鶏白湯そば1,100円、甘い玉ねぎ、元気なスタッフ、紙エプロンも券売機で。',
      confidence: 'medium', sources: [TB, R + 'B536900710/', R + 'B536744898/', R + 'B536934556/', R + 'B537074548/', R + 'B537931383/', R + 'B537116539/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: ['chicken oil', 'shiso oil'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy Tsurumi Seimen noodles, rich in wheat flavor (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen', 'tori_paitan'],
      signature_bowl: 'Shoyu mazesoba ¥1,050 (October 2026).',
      chashu: 'Block, chicken-breast and thin-sliced chashu (October 2026).',
      notable_toppings: ['egg yolk', 'menma', 'onion', 'radish sprouts', 'mitsuba', 'mini rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken paitan and chicken oil.' },
      pantheon: 'Shinsaibashi\'s 6 am chicken-paitan mazesoba: thick Tsurumi noodles in soy, paitan and chicken oil, rice to finish.',
      profile: { richness: 4, oiliness: 4, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537116539/', '"The rich flavor resonated throughout my body."'],
        oiliness: [R + 'B536900710/', 'Sauce of special soy sauce, chicken white broth and chicken oil — placed high.'],
        clarity: [R + 'B536900710/', 'Soupless mazesoba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B537931383/', '"The flavor of the broth clung nicely to the noodles" — mid-scale.'],
        noodle_firmness: [R + 'B536900710/', '"Thick and had a delightful chewiness, rich in wheat flavor."'],
        aroma_punch: [R + 'B536744898/', '"The garlic flavor was quite strong, giving it a punchy taste."'],
      },
      confidence: 'medium', sources: [R + 'B536900710/', R + 'B536744898/', R + 'B537116539/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Electronic ticket machine; mostly overseas customers (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened June 2026; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536900710/', R + 'B536744898/', R + 'B537074548/'],
    price_note: 'Daytime prices from October 2026 reviews; late-night prices are slightly higher.', last_checked: TODAY, items: [
      it('', '', 'Shoyu mazesoba', '¥1,050', 'Mazesoba', 'no', 'no', 'October 2026.', 'shoyu_maze'),
      it('', '', 'Chashu shoyu mazesoba', '¥1,180', 'Mazesoba', 'no', 'no', 'October 2026.', 'chashu_maze'),
      it('', '', 'Chicken-salt mazesoba with shiso oil', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'torishio'),
      it('', '', 'Seafood chicken-paitan noodles', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'gyokai_paitan'),
    ] }, {
    cuisine: '北新地発の鶏白湯まぜそば・醤油まぜそば1,050円(特製醤油、鶏白湯、鶏油、卵黄)・チャーシュー醤油まぜそば1,180円・鶏塩まぜそば大葉オイル・魚介鶏白湯そば1,100円・Tsurumi Seimenの太麺・締めにミニライス・23席・朝6時まで',
    neighborhood: '東心斎橋1-17-5。心斎橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油。',
    vegan_detail: 'ヴィーガンではありません。たれに鶏白湯と鶏油、チャーシュー、卵黄。',
    notes: '[ラーメン・心斎橋の朝6時までの鶏白湯まぜそば] 北新地に本店があるまぜそばの店MARENの心斎橋店で、2026年6月開店、朝11時から翌朝6時まで。普通のラーメン店より広くおしゃれで、客の多くは海外から。醤油まぜそば(1,050円)はTsurumi Seimenのもちもちの太麺に、特製醤油と鶏白湯と鶏油のたれ、チャーシュー、メンマ、玉ねぎ、かいわれ、三つ葉、卵黄を山盛り。よく混ぜ、残りにミニライスを。チャーシュー版(1,180円)は塊、鶏むね、薄切りのチャーシューで、にんにくがパンチあり。大葉オイルの鶏塩まぜそば、魚介鶏白湯のスープ麺(1,100円)も。注文は券売機で、深夜料金は少し高め。',
  });
}

save();
