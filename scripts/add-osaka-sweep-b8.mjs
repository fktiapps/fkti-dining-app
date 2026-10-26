// Osaka sweep (2-mile circle around Dotonbori), batch 8 — vegan/GF from the FMGF seeds, nearest first.
// No Tabelog ids, so pins are the FMGF point cross-checked by GSI and no queue-status rows are written.
//   + 松阪牛焼肉M 道頓堀千日前店 (all house sauces GF, per the manager) — GF options, queue high
//   + ABENO HUB (rice-flour okonomiyaki; wheat gyoza on the same griddle) — GF options, not queued
//   + OKO Fun Okonomiyaki Bar (one-person GF okonomiyaki bar; old domain now a gambling site, not linked) — GF options, not queued
//   + 茶屋しずく (organic-matcha sweets; GF steamed matcha cake) — GF options, not queued
// FMGF review dates are relative on the page (read 2026-10-26) and are given here as months.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 8);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';

// ================================================================ 松阪牛焼肉M 道頓堀千日前店
{
  const FM = 'https://www.findmeglutenfree.com/biz/matsusaka-m/6118126901395456';
  const OWN = 'https://matsusaka-projects.com/shop/doutonbori/';
  const wk = day(['17:00', '23:00']), we = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_matsusakagyu_yakiniku_m_sennichimae', name: '松阪牛焼肉M 道頓堀千日前店 (Matsusakagyu Yakiniku M Dotonbori Sennichimae)', category: 'GF',
    lat: 34.668053, lng: 135.503436, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Replying to reviews on FindMeGlutenFree, the general manager says every one of the house sauces is gluten-free, and staff show diners the labelled gluten-free soy sauce bottle. Celiac reviewers (August–October 2026) report non-GF items in set courses swapped out. One says the restaurant is "almost completely gf (except soup)", so ask about soups. The restaurant also says a staff member who serves here has celiac disease. This is a shared yakiniku kitchen, not a gluten-free one. Say you are celiac when you book.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'A Matsusaka-beef yakiniku restaurant; no vegan dishes are described. FMGF users tag it "good vegetarian options", but nothing specific is reported.',
    hours_raw: 'Dinner daily 17:00–23:00 (L.O. 22:30); lunch Sat, Sun and holidays 12:00–15:00 (L.O. 14:30). No fixed closing day, but it may close depending on circumstances (official page). Book online.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-11, Kamigata Bldg 2F, just off the Sennichimae shopping street — 3 min from Namba Walk exit B20',
    cuisine: 'Matsusaka-beef yakiniku courses · all house sauces gluten-free (per the manager) · labelled GF soy sauce · private and semi-private rooms, hall for up to 32 · lift, wheelchair access',
    website: OWN, gmaps: gm('松阪牛焼肉M 道頓堀千日前店'), menu_url: OWN,
    notes: '[Yakiniku · gluten-free Matsusaka beef off Sennichimae] The Dotonbori-Sennichimae branch of Yakiniku M, on the second floor of a building just off the Sennichimae shopping street, about 100 m east of its Hōzenji Yokochō sister. It is larger than its sisters: 14 tables, seven of them in private rooms, curtained semi-private seating, a hall for groups of up to 32, a lift, and wheelchair access to the table. Matsusaka-beef courses are grilled at the table. For celiac diners the draw is the sauces, which the general manager says are all gluten-free. Staff even bring out the labelled soy sauce bottle, and one server who is celiac comes up again and again in reviews. Reviewers had non-GF set-course items swapped, though one notes the soup is the exception. Dinner daily, plus weekend lunch.',
    chef_bio: { chef_name: 'Kenji Urata', roles: ['general manager and chef (signs the FMGF owner replies)'], origin: 'Dotonbori-Sennichimae branch of Matsusakagyu Yakiniku M (official page)', background: 'Part of the Matsusakagyu Yakiniku M group run by 株式会社ライトハウス (Righthouse), a registered member of the Matsusaka beef association (official site).', philosophy: '"Safety and peace of mind are the essential foundations of great food and genuine hospitality." (owner reply on FMGF)', specialty: 'Matsusaka beef; gluten-free house sauces.',
      anecdotes: [
        { text: '"They even showed us the bottle of sauce they use, clearly labelled, for added reassurance." — FMGF review, October 2026, Matsusaka beef premium course.', source: FM },
        { text: '"All of our special sauces are completely gluten-free, crafted through countless trials and improvements to ensure they are as delicious as they are safe." — the general manager, replying on FMGF, August 2026.', source: FM },
        { text: '"Very good yakiniku and the store is almost completely gf (except soup)." — FMGF review, September 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(matsusaka-projects.com): 松阪牛焼肉M 道頓堀千日前店、〒542-0074 大阪市中央区千日前1-7-11 上方ビル2F、06-4963-2994、なんばウオークB20出口徒歩3分、法善寺横丁店から東へ約100m、ディナー17:00〜23:00(L.O.22:30)、土日祝ランチ12:00〜15:00(L.O.14:30)、定休日なし(休業の場合あり)、テーブル14(個室7)、大広間32名まで、エレベーター、車いす可、「グルテンフリー」のタグ、カード・PayPay可、株式会社ライトハウス(松阪肉牛協会指定第92号正規会員)。FindMeGlutenFree: たれはすべてグルテンフリー(総支配人兼シェフ Kenji Urata の返信)、グルテンフリー醤油のボトルを見せてくれる、セットの非GFの品を差し替え、スープ以外ほぼグルテンフリーとの声、セリアック病のスタッフがいる、2026年8〜10月の口コミ。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'english', note: 'FMGF reviewers describe fluent English-speaking staff; book online.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '"The store is almost completely gf (except soup)." — FMGF review, September 2026; a shared yakiniku kitchen.', source: FM }],
      soy_sauce_wheat: [{ text: 'Staff show the labelled gluten-free soy sauce bottle (FMGF review, October 2026).', source: FM }],
      vegan_cross_contact: [],
      staff_allergy_handling: [
        { text: 'Owner reply on FMGF: the house sauces are all gluten-free; the restaurant says a staff member has celiac disease and guides gluten-free diners.', source: FM },
        { text: '"The items in the set menu that were not GF they substituted!" — FMGF review, August 2026.', source: FM },
      ],
      positives: [
        { text: 'Celiac reviewers through October 2026 report careful, knowledgeable service and the sauces confirmed gluten-free.', source: FM },
        { text: 'The official branch page tags the restaurant グルテンフリー (gluten-free).', source: OWN },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0074 大阪府大阪市中央区千日前1-7-11 上方ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official branch page current; FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM, OWN],
    price_note: 'No prices captured; the official page lists course, yakiniku, à la carte and drinks sections. GF per the manager\'s statement that all sauces are gluten-free; ask about soups.', last_checked: TODAY, items: [
      it('', '', 'Matsusaka beef premium course', '', 'Courses', 'ask', 'no', 'FMGF review, October 2026.', 'premium_course'),
      it('', '', 'Matsusaka beef yakiniku (à la carte)', '', 'Yakiniku', 'ask', 'no', 'House sauces gluten-free per the manager.', 'yakiniku'),
      it('', '', 'Soup', '', 'Sides', 'ask', 'no', '"Almost completely gf (except soup)" — September 2026.', 'soup'),
    ] }, {
    cuisine: '松阪牛の焼肉コース・店のたれはすべてグルテンフリー(総支配人による)・ラベル付きのグルテンフリー醤油・個室と半個室、32名までの大広間・エレベーター、車いす可',
    neighborhood: '千日前1-7-11 上方ビル2F、千日前商店街から少し入ったところ。なんばウオークB20出口から徒歩3分',
    gf_detail: 'FindMeGlutenFreeの口コミへの返信で、総支配人が店のたれはすべてグルテンフリーだとしており、スタッフがグルテンフリー醤油のラベル付きのボトルを見せてくれます。セリアック病の客(2026年8〜10月)は、セットのグルテンフリーでない品を差し替えてもらったと報告。「スープ以外はほぼグルテンフリー」という声もあるので、スープは確認を。セリアック病のスタッフもいると店は書いています。焼肉の厨房は共用で、グルテンフリーの厨房ではありません。予約時にセリアック病であることを伝えてください。',
    vegan_detail: '松阪牛の焼肉店で、ヴィーガンの料理は書かれていません。FMGFでは「ベジタリアンの選択肢」のタグがありますが、具体的な報告はありません。',
    notes: '[焼肉・千日前裏のグルテンフリー松阪牛] 焼肉Mの道頓堀千日前店で、千日前商店街から少し入ったビルの2階、法善寺横丁店から東へ約100m。系列の中では広く、テーブル14(個室7)、カーテンで仕切る半個室、32名までの大広間、エレベーターがあり、車いすのまま席まで案内してもらえます。松阪牛のコースを席で焼きます。セリアック病の客のお目当てはたれで、総支配人によるとすべてグルテンフリー。ラベル付きの醤油のボトルまで見せてくれ、セリアック病のスタッフの名前が口コミに何度も登場します。セットの非グルテンフリーの品は差し替えてもらえますが、スープは例外という声も。ディナーは毎日、ランチは土日祝。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, OWN],
    why: "Own claim (general manager and chef, replying on FMGF, 2026): 'All of our special sauces are completely gluten-free'; a staff member with celiac disease guides GF diners; the official branch page tags it グルテンフリー. Independent first-hand corroboration: FindMeGlutenFree, celiac reviewers August–October 2026 — labelled GF soy sauce shown at the table, non-GF set items substituted, no problems reported. 'high' rather than 'dedicated': a shared yakiniku kitchen; one reviewer says it is 'almost completely gf (except soup)'; sister branch Hōzenji Hanare (queued the same day) is the better-documented one. Questions: which soups and sides contain wheat? Separate grill nets for GF orders?",
  });
}

// ================================================================ ABENO HUB
{
  const FM = 'https://www.findmeglutenfree.com/biz/abeno-hub/6735010306850816';
  const OWN = 'https://yoyaku-abenohub.com/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'osaka_abeno_hub_namba', name: 'ABENO HUB', category: 'GF',
    lat: 34.667763, lng: 135.499039, cuisine_type: 'okonomiyaki',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The okonomiyaki is gluten-free, per the restaurant: 「国産米粉を使用したグルテンフリーのお好み焼き」, made with 100% Koshihikari rice flour and cooked in olive oil. The yakisoba uses Akitakomachi rice-flour noodles. FMGF reviewers say it is made with gluten-free soy sauce and that a flyer explains the gluten-free options. The gyoza are made with wheat, and in October 2026 a celiac reviewer saw them cooked on the same griddle as the gluten-free food. FMGF marks it NOT a dedicated gluten-free facility. Skip the gyoza and ask about the griddle.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The restaurant describes a vegetable-based sauce, but okonomiyaki batter usually contains egg and often dashi, and no vegan option is described.',
    hours_raw: 'Tue–Fri 17:00–23:00; Sat 14:00–23:00 (one block of the official page says Sat 17:00); food L.O. 22:00, drinks 22:30; closed Mon and Sun (official site). Online booking gets priority.',
    hours: { 0: [], 1: d, 2: d, 3: d, 4: d, 5: day(['14:00', '23:00']), 6: [] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 2-3-26, Nakatani Bldg 1F — 3–8 min from the Namba stations, about 5 min from the Glico sign',
    cuisine: 'Gluten-free rice-flour okonomiyaki (100% Koshihikari) · rice-flour yakisoba · cooked in olive oil with a vegetable-based sauce · okonomiyaki ~¥1,100 · GF potato salad and pudding · organic wine, British organic tea · smoking on the terrace',
    website: OWN, gmaps: gm('ABENO HUB 難波'), menu_url: null,
    notes: '[Okonomiyaki · gluten-free rice-flour okonomiyaki near the Glico sign] A casual bar-restaurant about five minutes from the Glico running man, with what it calls British roots: organic wine, European-style chūhai and British organic tea alongside beer and whisky. The okonomiyaki is made from 100% domestic Koshihikari rice flour, cooked in olive oil with a vegetable-based sauce, and gluten-free, and the yakisoba uses rice-flour noodles. Celiac reviewers love it ("the best okonomiyaki I\'ve ever had – really good ginger flavour and only 1100 yen", October 2026), along with a GF potato salad and pudding. The gyoza are wheat and share the griddle, so skip them. Usually there\'s no queue when nearby okonomiyaki places have long lines. The chef-owner speaks good English, and ordering is by app. Smoking only on the outside terrace.',
    chef_bio: { chef_name: null, roles: [], origin: 'Namba 2-chōme (official site)', background: 'Describes itself as having British roots (英国にルーツを持つ当店); FMGF reviewers describe a chef-owner who speaks good English, sometimes running the room alone.', philosophy: '「グルテンフリーで、食後も軽やかな粉もんです」 (official site).', specialty: 'Rice-flour okonomiyaki and yakisoba.',
      anecdotes: [
        { text: '"We had the best okonamyaki I\'ve ever had - really good ginger flavour and only 1100 yen. The gf was clearly explained on a flyer at the start. Note that the gyoza are made with wheat flour." — FMGF review, October 2026.', source: FM },
        { text: '"The place is not 100% gluten free but the okonomiaki is and its made with gluten free soy sauce, and instead of wheat flour… rice flour." — FMGF review, 2025.', source: FM },
      ],
      japanese_sources_summary: '公式(yoyaku-abenohub.com): ABENO HUB、大阪市中央区難波2-3-26 中谷ビル1F、06-6211-0575、各線難波駅から徒歩3〜8分、火〜金17:00〜23:00・土14:00〜23:00(別の欄では土17:00〜)、L.O.料理22:00・ドリンク22:30、月曜・日曜定休、予約可(サイトからの予約優先)、40席(カウンター5、テーブル7卓)、半個室、貸切可、カード・電子マネー・QR決済可、分煙(店外テラスで喫煙可)、平均3,000〜3,999円。国産コシヒカリ100％の米粉のグルテンフリーお好み焼き、あきたこまち米粉麺の焼きそば、オリーブオイルで調理、野菜ベースのソース、英国にルーツ、オーガニックワイン、英国のオーガニック紅茶。FindMeGlutenFree: グルテンフリー専門ではない、餃子は小麦で同じ鉄板(2026年10月)、お好み焼き1,100円、フライヤーで説明、注文はアプリ、英語が話せるシェフ兼オーナー、グルテンフリーのポテトサラダとプリン、行列なし。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'english', note: 'FMGF reviewers: the chef-owner speaks good English; a flyer explains the GF options; app ordering.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '"Only thing that appeared to not be gluten free was the gyoza. Gyoza seemed to be cooked on same grill as gf items." — FMGF review, October 2026.', source: FM }],
      soy_sauce_wheat: [{ text: 'Okonomiyaki made with gluten-free soy sauce (FMGF review, 2025).', source: FM }],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: '"The chef was knowledgeable about celiac disease." — FMGF review, July 2026.', source: FM }],
      positives: [{ text: 'Own description: gluten-free okonomiyaki from 100% domestic Koshihikari rice flour; rice-flour yakisoba noodles.', source: OWN }],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波2-3-26 中谷ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site current; FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波二丁目3番26号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, FM],
    price_note: 'One price from an October 2026 FMGF review; dishes from the official site and FMGF.', last_checked: TODAY, items: [
      it('お好み焼き', 'okonomiyaki', 'Gluten-free rice-flour okonomiyaki', '¥1,100', 'Okonomiyaki', 'gf', 'ask', 'Per the restaurant; October 2026 price.', 'okonomiyaki'),
      it('焼きそば', 'yakisoba', 'Rice-flour-noodle yakisoba', '', 'Noodles', 'gf', 'ask', 'Akitakomachi rice-flour noodles (official site).', 'yakisoba'),
      it('', '', 'Potato salad', '', 'Sides', 'gf', 'ask', 'FMGF, June 2026.', 'potato_salad'),
      it('', '', 'Pudding', '', 'Dessert', 'gf', 'ask', 'FMGF, June 2026.', 'pudding'),
      it('餃子', 'gyōza', 'Gyoza (wheat wrappers)', '', 'Sides', 'no', 'ask', 'Wheat; reportedly cooked on the shared griddle (October 2026).', 'gyoza'),
    ] }, {
    cuisine: '米粉のグルテンフリーお好み焼き(国産コシヒカリ100％)・米粉麺の焼きそば・オリーブオイルと野菜ベースのソース・お好み焼き約1,100円・グルテンフリーのポテトサラダとプリン・オーガニックワイン、英国のオーガニック紅茶・テラスで喫煙可',
    neighborhood: '難波2-3-26 中谷ビル1F。難波の各駅から徒歩3〜8分、グリコの看板から約5分',
    gf_detail: '店によるとお好み焼きはグルテンフリーで、「国産米粉を使用したグルテンフリーのお好み焼き」(国産コシヒカリ100％の米粉、オリーブオイルで調理)。焼きそばはあきたこまちの米粉麺。FMGFの口コミでは、グルテンフリーの醤油を使い、グルテンフリーのメニューはチラシで説明されるとのこと。餃子は小麦で、2026年10月にはセリアック病の客がグルテンフリーの料理と同じ鉄板で焼かれているのを見ています。FMGFではグルテンフリー専門ではないとされています。餃子は避け、鉄板について確認を。',
    vegan_detail: '要確認。ソースは野菜ベースとされていますが、お好み焼きの生地にはふつう卵やだしが入り、ヴィーガンの選択肢は書かれていません。',
    notes: '[お好み焼き・グリコ看板近くの米粉のグルテンフリーお好み焼き] グリコの看板から歩いて5分ほどの気軽なバー兼レストランで、「英国にルーツ」を持つとして、ビールやウイスキーのほかオーガニックワイン、ヨーロッパ風のチューハイ、英国のオーガニック紅茶も。お好み焼きは国産コシヒカリ100％の米粉をオリーブオイルで焼き、野菜ベースのソースでグルテンフリー。焼きそばも米粉麺です。セリアック病の客の評価は高く(「今までで最高のお好み焼き、生姜が効いて1,100円」2026年10月)、グルテンフリーのポテトサラダやプリンも。餃子は小麦で鉄板も共用なので避けて。近くのお好み焼き店に長い行列ができていても、ここはたいてい待ちなし。シェフ兼オーナーは英語が上手で、注文はアプリ。喫煙は店外のテラスのみ。',
  });
}

// ================================================================ OKO Fun Okonomiyaki Bar
{
  const FM = 'https://www.findmeglutenfree.com/biz/oko/6416950664757248';
  put({
    id: 'osaka_oko_fun_okonomiyaki_bar', name: 'OKO - Fun Okonomiyaki Bar', category: 'GF',
    lat: 34.668781, lng: 135.498155, cuisine_type: 'okonomiyaki',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'A one-person okonomiyaki bar with a clearly marked gluten-free menu (about five GF okonomiyaki plus GF gyoza, fries and beer) and gluten-free soy sauce. FMGF reviewers (about 145 reviews) report gluten-free stickers on dishes and separate griddles and utensils, and some call it coeliac safe. It is NOT a dedicated gluten-free facility (FMGF), and in April 2026 a symptomatic celiac reported a bad reaction after eating only items from the GF menu. Tell the owner-chef you are celiac and weigh the risk.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Reviewers report vegan options and a choice of vegetable and mixed-bean toppings for the okonomiyaki (August 2026). Ask whether the batter and sauce for the vegan version are free of egg and dashi.',
    hours_raw: 'No hours published. Reviewers: opens around 18:00 (a 40-minute wait at 18:05 in September 2026). Queue before opening; a single person cooks and serves. Self-service drinks ¥100 (bring coins). An FMGF tip from December 2025 said "permanently closed", but reviews continue through October 2026.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 2-4-13, the western end of Dotonbori near Namba Stn; tables upstairs',
    cuisine: 'Gluten-free okonomiyaki (about five choices: beef and onion, triple meat, mushroom and sausage …) · choose vegetable and bean toppings · huge portions (a medium feeds most) · GF gyoza and fries · GF beer · ¥100 self-service drinks · one-woman show',
    website: null, gmaps: gm('OKO Fun Okonomiyaki Bar 道頓堀'), menu_url: null,
    notes: '[Okonomiyaki · a one-person gluten-free okonomiyaki bar on Dotonbori] A small, wildly decorated okonomiyaki bar at the western end of Dotonbori, run single-handed by its owner-chef, Shiho, and one of the most-collected gluten-free spots in Osaka on FMGF (59 public collections). Order at the counter from a clearly marked menu, find a table upstairs (some have a view), clear it yourself, and listen for your number. Drinks are self-service for ¥100 a go. There are about five gluten-free okonomiyaki (beef and onion, triple meat, mushroom and sausage), or build your own with vegetables and beans. Portions are huge, so a medium is plenty. The GF gyoza and fries are favourites. Queue before the roughly 6 pm opening. One woman does everything, so waits of 40 minutes or more are normal. One symptomatic celiac reacted in 2026, so it is not risk-free.',
    chef_bio: { chef_name: 'Shiho', roles: ['owner-chef (FMGF reviewers)'], origin: 'Dotonbori 2-chōme', background: 'FMGF reviewers describe an owner who runs the whole restaurant alone — cooking, the counter and the room.', philosophy: null, specialty: 'Gluten-free okonomiyaki and gyoza.',
      anecdotes: [
        { text: '"The owner Shiho is so fun! The food was absolutely delicious. The owner / chef knows exactly what is and isn\'t GF. Food came out clearly labeled… Bring 100 yen coins for drinks!" — FMGF review, October 2026.', source: FM },
        { text: '"I ordered the mushroom and sausage size medium, MASSIVE serve for medium… we arrived at 6:05pm and had a 40 minute wait to order." — FMGF review, September 2026.', source: FM },
        { text: '"I ordered from a GF menu, just the items that were supposed to be safe… Got a bad glutenning." — FMGF review, April 2026; the reviewer adds that separate utensils and grill are used.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: OKO - Fun Okonomiyaki Bar、大阪市中央区道頓堀2-4-13、090-5897-3366、グルテンフリーのメニューあり、グルテンフリー専門ではない、59の公開コレクション。口コミ(2026年10月まで): オーナー兼シェフの Shiho さんが1人で営業、カウンターで注文して2階の席へ、番号で呼ばれる、自分で片付け、セルフのドリンク100円、グルテンフリーのお好み焼き約5種(牛と玉ねぎ、トリプルミート、きのことソーセージ)、野菜や豆のトッピングを選べる、量が多い(Mで十分)、グルテンフリーの餃子とポテト、グルテンフリーのビール、ヴィーガンの選択肢、グルテンフリーのシール、別の調理器具と鉄板、18時ごろ開店で行列、18:05で40分待ち、2026年4月にセリアック病の客が反応、2025年12月に「閉店」というチップがあるが口コミは続いている。旧公式ドメイン oko-osaka.com は現在無関係のサイト。',
      confidence: 'medium', sources: [FM] },
    cultural_comfort: { level: 'english', note: 'English menu and an owner fluent with gluten-free terms; order at the counter, self-service drinks.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility."', source: FM },
        { text: 'A symptomatic celiac reported a bad reaction after eating only GF-menu items (FMGF review, April 2026).', source: FM },
      ],
      soy_sauce_wheat: [{ text: 'Gluten-free soy sauce available (FMGF review, September 2026).', source: FM }],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: '"Owner/chef was very knowledgeable of GF terms and confirmed our order with us (1 gf, 1 not)." — FMGF review, October 2026.', source: FM }],
      positives: [
        { text: 'GF dishes come out with a gluten-free sticker; reviewers report dedicated gluten-free griddles (May 2026).', source: FM },
        { text: 'Clearly marked gluten-free menu; many celiac reviewers report no problems.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-4-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026, after a December 2025 "permanently closed" tip; the old domain oko-osaka.com now serves an unrelated gambling site, so no website is linked.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目4番13号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured except ¥100 self-service drinks; dishes from 2026 FMGF reviews.', last_checked: TODAY, items: [
      it('', '', 'Gluten-free okonomiyaki: beef and onion', '', 'Okonomiyaki', 'gf', 'no', 'FMGF, April 2026.', 'beef_onion'),
      it('', '', 'Gluten-free okonomiyaki: triple meat', '', 'Okonomiyaki', 'gf', 'no', 'FMGF, April 2026.', 'triple_meat'),
      it('', '', 'Gluten-free okonomiyaki: mushroom and sausage', '', 'Okonomiyaki', 'gf', 'no', 'FMGF, September 2026.', 'mushroom_sausage'),
      it('', '', 'Build-your-own okonomiyaki with vegetable and bean toppings', '', 'Okonomiyaki', 'gf', 'ask', 'FMGF, August 2026.', 'veg_okonomiyaki'),
      it('', '', 'Gluten-free gyoza', '', 'Sides', 'gf', 'ask', 'FMGF, 2026.', 'gf_gyoza'),
      it('', '', 'Fries', '', 'Sides', 'gf', 'ask', 'FMGF, June 2026.', 'fries'),
      it('', '', 'Self-service drinks', '¥100', 'Drinks', 'ask', 'ask', 'FMGF, October 2026; GF beer available.', 'drinks'),
    ] }, {
    cuisine: 'グルテンフリーのお好み焼き(約5種: 牛と玉ねぎ、トリプルミート、きのことソーセージなど)・野菜と豆のトッピングを選べる・大盛り(Mで十分)・グルテンフリーの餃子とポテト・グルテンフリーのビール・セルフのドリンク100円・1人営業',
    neighborhood: '道頓堀2-4-13、なんば駅近くの道頓堀の西端。席は2階',
    gf_detail: 'オーナー1人で営業するお好み焼きバーで、グルテンフリーのメニューがはっきり表示され(グルテンフリーのお好み焼き約5種と、グルテンフリーの餃子、ポテト、ビール)、グルテンフリーの醤油もあります。FMGFの口コミ(約145件)では、料理にグルテンフリーのシールが付き、鉄板や調理器具を分けているとの報告があり、セリアック病でも安全という声も。ただしFMGFではグルテンフリー専門ではないとされ、2026年4月には症状の出るセリアック病の客がグルテンフリーのメニューだけを食べて強い反応が出たと報告しています。オーナー兼シェフにセリアック病であることを伝え、リスクを考えて判断を。',
    vegan_detail: 'ヴィーガンの選択肢があり、お好み焼きに野菜や豆のトッピングを選べるとの口コミ(2026年8月)。ヴィーガン用の生地やソースに卵やだしが入っていないか確認を。',
    notes: '[お好み焼き・道頓堀の1人で切り盛りするグルテンフリーのお好み焼きバー] 道頓堀の西端にある、にぎやかに飾られた小さなお好み焼きバーで、オーナー兼シェフの Shiho さんが1人で営業。FMGFでは大阪で特に多くのコレクションに入るグルテンフリーの店です(公開コレクション59)。カウンターで表示のはっきりしたメニューから注文し、2階の席(眺めのいい席も)を見つけ、自分で片付け、番号で呼ばれます。ドリンクはセルフで1杯100円。グルテンフリーのお好み焼きは約5種(牛と玉ねぎ、トリプルミート、きのことソーセージ)で、野菜や豆で自分好みにも。量が多く、Mで十分。グルテンフリーの餃子やポテトも人気。18時ごろの開店前に並んで。1人ですべてこなすので40分以上の待ちは普通です。2026年には症状の出たセリアック病の客もいて、リスクがゼロではありません。',
  });
}

// ================================================================ 茶屋しずく
{
  const FM = 'https://www.findmeglutenfree.com/biz/cha-ya-shizuku/5818700207095808';
  const OWN = 'https://www.roman-gp.com/';
  put({
    id: 'osaka_chaya_shizuku_namba', name: '茶屋しずく (CHA-YA SHIZUKU)', category: 'GF',
    lat: 34.665276, lng: 135.50206, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The signature 抹茶ふかしパウン (steamed matcha cake) is made without wheat flour and is gluten-free, per the operating company. FMGF reviewers also report gluten-free ice cream cones and soft serve. In September 2026 staff confirmed the matcha is gluten-free and there is no oat milk on the menu. FMGF marks it NOT a dedicated gluten-free facility, so ask about the other sweets.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Soy-milk matcha latte is available (September 2026); FMGF users tag "good vegan options", but whether the steamed cake or soft serve contain egg or dairy is not stated.',
    hours_raw: 'Hours not found in any source captured. Check before going.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-14 (the 赤垣屋 main-shop address), south of Namba Stn',
    cuisine: 'Organic-matcha sweets from the group\'s own Kagoshima farm · gluten-free steamed matcha cake (抹茶ふかしパウン), served fresh from the steamer · GF ice cream cones and soft serve · matcha latte (soy milk available) · takeaway',
    website: OWN, gmaps: gm('茶屋しずく なんば'), menu_url: null,
    notes: '[Sweets · gluten-free steamed matcha cake south of Namba] A small matcha-sweets shop from the ROMAN TALE restaurant group, using organic matcha (rare in Japan) from the group\'s own Kagoshima farm. The signature is the 抹茶ふかしパウン, a lightly sweet, chewy yet fluffy steamed matcha cake served hot from the bamboo steamer and made without wheat flour, so it is gluten-free. Celiac visitors keep coming back for it: one ate it every day of a stay, another three times on one trip. There are also gluten-free ice cream cones, soft serve and an excellent matcha latte, with soy milk and no oat milk. Takeaway too. Hours aren\'t published in the sources we found, so check.',
    chef_bio: { chef_name: null, roles: [], origin: 'Namba shop (official group site: 大阪市中央区難波3-2-14)', background: 'A café brand of 株式会社ROMAN TALE (ロマンテイル), split off from 岡山フードサービス株式会社; its café brands use produce from the group farms, such as Kagoshima Chiran tea and sweet potatoes (official site).', philosophy: '「鹿児島県のグループ農場で育てたオーガニック抹茶のスイーツ専門店」 (official site).', specialty: 'Steamed matcha cake (抹茶ふかしパウン).',
      anecdotes: [
        { text: '「看板商品として開発した『抹茶ふかしパウン』は、せいろから蒸したて、できたてをご提供」 — and 「小麦粉を使わずグルテンフリーで仕上げている」 (official site).', source: OWN },
        { text: '"They confirmed their matcha is gluten free and there\'s no oat milk on the menu so no cross contamination concerns there!" — FMGF review, September 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(roman-gp.com、株式会社ROMAN TALE): 茶屋しずく、鹿児島県のグループ農場で育てたオーガニック抹茶のスイーツ専門店、看板の「抹茶ふかしパウン」はせいろから蒸したて、甘さ控えめ、もっちりふわっと軽い、小麦粉を使わずグルテンフリー、日本ではほとんど育てられていない希少なオーガニック抹茶、なんば店 大阪市中央区難波3-2-14、抹茶×ピスタチオフェア(10月19日)。岡山フードサービス株式会社から独立。FindMeGlutenFree: グルテンフリーのメニューあり、グルテンフリー専門ではない、グルテンフリーのコーン(2026年10月)、蒸し抹茶ケーキ、抹茶ラテ(豆乳)、抹茶はグルテンフリーと確認・オーツミルクなし(2026年9月)、ソフトクリーム、毎日通った客も。営業時間は見つからず。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter shop; takeaway.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility."', source: FM }],
      soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Staff confirmed the matcha is gluten-free; no oat milk on the menu (FMGF review, September 2026).', source: FM }],
      positives: [{ text: 'Own statement: the signature steamed matcha cake is made without wheat flour and is gluten-free.', source: OWN }],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Listed as the Namba shop on the operator\'s site (with an October fair notice); FMGF review from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番14号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('抹茶ふかしパウン', '', 'Steamed matcha cake', '', 'Sweets', 'gf', 'ask', 'Gluten-free per the operator.', 'fukashi_paun'),
      it('', '', 'Soft serve in a gluten-free cone', '', 'Sweets', 'gf', 'ask', 'FMGF, October 2026.', 'soft_serve'),
      it('', '', 'Matcha latte (soy milk available)', '', 'Drinks', 'gf', 'ask', 'Matcha confirmed GF (FMGF, September 2026).', 'matcha_latte'),
    ] }, {
    cuisine: '自社の鹿児島の農場のオーガニック抹茶のスイーツ・せいろで蒸したてのグルテンフリー「抹茶ふかしパウン」・グルテンフリーのコーンとソフトクリーム・抹茶ラテ(豆乳可)・持ち帰り',
    neighborhood: '難波3-2-14(赤垣屋 本店の住所)、なんば駅の南',
    gf_detail: '運営会社によると、看板の「抹茶ふかしパウン」は小麦粉を使わずグルテンフリー。FMGFの口コミではグルテンフリーのアイスのコーンやソフトクリームも。2026年9月には抹茶がグルテンフリーで、オーツミルクはメニューにないと確認した客がいます。FMGFではグルテンフリー専門ではないとされているので、ほかのスイーツは確認を。',
    vegan_detail: '要確認。豆乳の抹茶ラテがあります(2026年9月)。FMGFでは「ヴィーガンの選択肢」のタグがありますが、蒸しケーキやソフトクリームに卵や乳製品が入るかは書かれていません。',
    notes: '[スイーツ・なんばの南のグルテンフリー蒸し抹茶ケーキ] ロマンテイルの店で、グループの鹿児島の農場で育てた、日本では珍しいオーガニック抹茶のスイーツの店。看板の「抹茶ふかしパウン」は甘さ控えめで、もっちりなのにふわっと軽い蒸しケーキで、せいろから蒸したてを出し、小麦粉を使わないのでグルテンフリー。セリアック病の旅行者のリピートが多く、滞在中毎日通った客や、1回の旅行で3回来た客も。グルテンフリーのアイスのコーン、ソフトクリーム、評判の抹茶ラテ(豆乳あり、オーツミルクなし)も。持ち帰り可。営業時間は見つかった情報になかったので確認を。',
  });
}

save();
