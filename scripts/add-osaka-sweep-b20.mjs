// Osaka sweep (2-mile circle around Dotonbori), batch 20 — vegan/GF: the last three FMGF seeds with
// coordinates, plus one Tabelog "Vegan options" listing from queue.mjs next vegan.
//   + Comeconoco Gluten-free Laboratory & Cafe (rice-flour GF sweets and bread, Tenmabashi) — GF options, queue dedicated
//   + crepe aimer (rice-flour crêpes by Osaka Castle) — GF options, not queued
//   + Mexico Kitchen Bar Mu (corn tortillas; chef flags the wheat dishes) — GF options, not queued
//   + ぼてぢゅう本店 道頓堀 (okonomiyaki; Tabelog flags vegan options) — OMNI, Tabelog id → queue-status row
// FMGF now serves a Cloudflare challenge to curl as well; heys (2,622 m), HACCHA BOOTH (3,098 m) and FOLK茶菓
// (3,151 m) are inside the circle by GSI geocode but have no saved page — left for a later source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 20);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [] };

// ================================================================ Comeconoco
{
  const FM = 'https://www.findmeglutenfree.com/biz/comeconoco/5674026062708736';
  const OWN = 'https://comeconoco.com/';
  const d = day(['11:00', '17:00']);
  put({
    id: 'osaka_comeconoco_tenmabashi', name: 'Comeconoco Gluten-free Laboratory & Cafe 大阪天満橋店', category: 'GF',
    lat: 34.688786, lng: 135.513221, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The café calls itself a gluten-free specialist in sweets and bread made from domestic rice flour (「国産米粉を使用した、グルテンフリーなお菓子専門店」). FMGF marks it "Reported to be dedicated gluten-free", with a dedicated GF kitchen space reported, and celiac reviewers (October 2026) praise the sandwiches, croque monsieur and French toast. Confirm when ordering.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The café menu includes bacon, ham-and-cheese croque monsieur and dairy sweets; no vegan item is described.',
    hours_raw: 'Eat-in and takeaway Wed–Sat 11:00–17:00; rice-flour baking classes on irregular days (official site).',
    hours: { 0: [], 1: [], 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimamachi 2-2-3, Sunheim Tenmabashi 101 — between Tenmabashi and Kitahama',
    cuisine: 'Gluten-free rice-flour café and baking school · croque monsieur lunch set · sandwiches and toasties · French toast plate with bacon · scones, cakes, carrot cake, cream puffs, tarts · afternoon tea · matcha espresso latte · takeaway treats',
    website: OWN, gmaps: gm('Comeconoco 天満橋'), menu_url: null,
    notes: '[Café · a gluten-free rice-flour café in Tenmabashi] A small café and baking school near Tenmabashi built entirely around domestic rice flour: gluten-free sweets, bread and a brunch-and-lunch menu that celiac visitors rave about. One called the sandwiches "the best I\'ve ever eaten". Try the croque monsieur lunch set, which a mixed GF and non-GF table loved equally, or the French toast plate with bacon and greens, with a matcha espresso latte. The case holds scones, cakes, carrot cake, cream puffs and tarts to take away, and there is afternoon tea. Small, but turnover is quick. Open Wednesday to Saturday, 11 to 5.',
    chef_bio: { chef_name: null, roles: [], origin: 'Shimamachi 2-chōme (official site)', background: 'A rice-flour sweets café and baking class ("Comeconoco Laboratory Cafe") with an online shop.', philosophy: '「日本のお米の魅力を発信する、あたらしいスイーツのお店」 (official site).', specialty: 'Gluten-free rice-flour sweets and bread.',
      anecdotes: [
        { text: '"We had lunch here today - we all had the Croque monsieur lunch set. Wowee. 2 of us are GF and 2 aren\'t and we all equally loved it." — FMGF review, October 2026.', source: FM },
        { text: '「国産米粉を使用した、グルテンフリーなお菓子専門店です」 (official site).', source: OWN },
      ],
      japanese_sources_summary: '公式(comeconoco.com): Comeconoco Laboratory Cafe、〒540-0034 大阪市中央区島町2-2-3、天満橋・北浜のグルテンフリー米粉カフェとお菓子教室、国産米粉のグルテンフリーなお菓子とパンの専門店、イートイン・テイクアウトは水〜土11:00〜17:00、お菓子教室は不定休、オンラインショップ。FindMeGlutenFree: グルテンフリー専門と報告、グルテンフリー専用の厨房スペースの報告、2026年10月の口コミ: フレンチトーストとベーコン、抹茶エスプレッソラテ、最高のサンドイッチ、クロックムッシュのランチセット、デザート、小さいが回転が早い、持ち帰り可。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'english', note: 'English page on the official site; popular with overseas celiac travellers.' },
    safety: { ...SAFETY0,
      positives: [
        { text: 'Own statement: gluten-free sweets specialist using domestic rice flour (official site).', source: OWN },
        { text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; dedicated GF kitchen space reported.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒540-0034 大阪府大阪市中央区島町2-2-3 サンハイム天満橋 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区島町二丁目2番3号 (go) 3m; OSM node/6387292387 「Comeconoco Laboratory & Cafe」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM, OWN],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Croque monsieur lunch set', '', 'Lunch', 'gf', 'no', 'October 2026.', 'croque'),
      it('', '', 'French toast plate with bacon and greens', '', 'Brunch', 'gf', 'no', 'October 2026.', 'french_toast'),
      it('', '', 'Rice-flour cakes, scones and pastries (takeaway)', '', 'Sweets', 'gf', 'ask', 'Official site; FMGF.', 'sweets'),
      it('', '', 'Matcha espresso latte', '', 'Drinks', 'ask', 'ask', 'October 2026.', 'matcha_latte'),
    ] }, {
    cuisine: 'グルテンフリーの米粉カフェとお菓子教室・クロックムッシュのランチセット・サンドイッチとホットサンド・ベーコン付きのフレンチトースト・スコーン、ケーキ、キャロットケーキ、シュークリーム、タルト・アフタヌーンティー・抹茶エスプレッソラテ・持ち帰りのお菓子',
    neighborhood: '島町2-2-3 サンハイム天満橋101、天満橋と北浜の間',
    gf_detail: '店は「国産米粉を使用した、グルテンフリーなお菓子専門店」としています。FMGFでは「グルテンフリー専門と報告」とされ、専用の厨房スペースの報告もあり、セリアック病の客(2026年10月)はサンドイッチ、クロックムッシュ、フレンチトーストを絶賛しています。注文時に確認を。',
    vegan_detail: '要確認。カフェのメニューにはベーコン、ハムとチーズのクロックムッシュ、乳製品のお菓子があり、ヴィーガンの品は書かれていません。',
    notes: '[カフェ・天満橋のグルテンフリー米粉カフェ] 天満橋近くの小さなカフェ兼お菓子教室で、すべて国産米粉のグルテンフリー。お菓子、パン、ブランチやランチのメニューがあり、セリアック病の客に大人気で、「今までで最高のサンドイッチ」という声も。グルテンフリーの人もそうでない人も同じく気に入ったクロックムッシュのランチセットや、ベーコンと野菜のフレンチトーストに抹茶エスプレッソラテを。ケースにはスコーン、ケーキ、キャロットケーキ、シュークリーム、タルトが並び持ち帰りも、アフタヌーンティーも。小さな店ですが回転は早め。水曜から土曜の11時〜17時。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [OWN, FM],
    why: "Own claim (comeconoco.com): 「国産米粉を使用した、グルテンフリーなお菓子専門店」 and a rice-flour sweets-and-bread specialist. Independent first-hand corroboration: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', dedicated GF kitchen space reported, celiac reviewers October 2026. Open question: the own claim names sweets and bread; the savoury café menu (croque monsieur, bacon) is not described on the site. Ask: is every ingredient (ham, sauces, soy) gluten-free, and is any wheat product brought in?",
  });
}

// ================================================================ crepe aimer
{
  const FM = 'https://www.findmeglutenfree.com/biz/crepe-aimer/6117796237148160';
  const FB = 'https://www.facebook.com/crepe.aimer';
  put({
    id: 'osaka_crepe_aimer_otedori', name: 'crepe aimer (クレープ エメ)', category: 'GF',
    lat: 34.685772, lng: 135.51582, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'Rice-flour crêpes. Most of the menu is marked gluten-free, sweet and savoury, and the owner is knowledgeable about gluten. A March 2026 reviewer understood the place to be gluten-free except the custard "and maybe a few other items". FMGF marks it NOT a dedicated facility, though users also report dedicated GF kitchen space and fryer. Avoid custard fillings and check the marks.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Crêpes are usually made with egg and milk; no vegan option is described.',
    hours_raw: 'No hours captured (Facebook only). Pay outside, eat standing inside (November 2025).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ōtedōri 1-2-1, near Osaka Castle',
    cuisine: 'Rice-flour crêpes, most marked gluten-free · savoury (Margherita, Bismarck) and sweet · seasonal strawberry daifuku crêpe · ice cream · coffee · standing room',
    website: FB, gmaps: gm('crepe aimer 大手通'), menu_url: null,
    notes: '[Sweets · gluten-free rice-flour crêpes by Osaka Castle] A small crêpe stand near Osaka Castle, a good stop after the castle, making crêpes from rice flour. Most of the sweet and savoury menu is marked gluten-free. Reviewers start savoury with a Margherita or a Bismarck and finish with the seasonal strawberry-daifuku crêpe or ice cream. Pay outside and eat standing inside. The owner knows gluten well, but the custard is not gluten-free. One diner missed classic French flavours like strawberry or Nutella.',
    chef_bio: { chef_name: null, roles: [], origin: 'Ōtedōri 1-chōme, near Osaka Castle', background: 'A rice-flour crêpe shop (Facebook crepe.aimer); FMGF reviewers describe a knowledgeable owner. No source names the owner.', philosophy: null, specialty: 'Rice-flour crêpes.',
      anecdotes: [
        { text: '"The owner was very knowledgeable about gluten and the facility was gluten free save the custard and maybe a few other items." — FMGF review, March 2026.', source: FM },
        { text: '"Started wit the Margeritha, then Bismark and the seasonal Strawberry Daifuku." — FMGF review, April 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: crepe aimer(クレープ エメ)、大阪市中央区大手通1-2-1、06-6943-0333、Facebook crepe.aimer、グルテンフリーのメニューあり、グルテンフリー専門ではない、専用フライヤー・専用の厨房スペースの報告。口コミ(2025年11月〜2026年8月): 米粉のクレープ、メニューのほとんどがグルテンフリー、スタッフは親切で詳しい、フランスらしい味ではないという声(苺やヌテラがない)、甘いのも塩味のも、表示あり、マルゲリータ、ビスマルク、季節の苺大福、大阪城の近く、ドリンクとアイス、店主はグルテンに詳しくカスタード以外はグルテンフリー、外で支払い中で立って食べる。',
      confidence: 'low', sources: [FM, FB] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu marks gluten-free items; standing room.' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'Custard (and possibly a few other items) is not gluten-free (FMGF review, March 2026); FMGF: "NOT a dedicated gluten-free facility".', source: FM }],
      staff_allergy_handling: [{ text: '"The owner was very knowledgeable about gluten." — FMGF review, March 2026.', source: FM }],
      positives: [{ text: 'Rice-flour crêpes; most menu items marked gluten-free (FMGF reviews, 2026).', source: FM }],
      confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区大手通1-2-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews through August 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区大手通一丁目2番1号 (go) 6m; OSM node/6886072020 「crepe aimer」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Margherita crêpe (savoury)', '', 'Crêpes', 'gf', 'no', 'April 2026.', 'margherita'),
      it('', '', 'Bismarck crêpe (savoury)', '', 'Crêpes', 'gf', 'no', 'April 2026.', 'bismarck'),
      it('', '', 'Seasonal strawberry daifuku crêpe', '', 'Crêpes', 'ask', 'ask', 'April 2026.', 'ichigo_daifuku'),
      it('', '', 'Custard crêpes', '', 'Crêpes', 'no', 'no', 'Custard is not gluten-free (March 2026).', 'custard'),
    ] }, {
    cuisine: '米粉のクレープ、ほとんどにグルテンフリーの表示・塩味(マルゲリータ、ビスマルク)と甘いもの・季節の苺大福クレープ・アイス・コーヒー・立って食べる',
    neighborhood: '大手通1-2-1、大阪城の近く',
    gf_detail: '米粉のクレープ。甘いものも塩味もメニューのほとんどにグルテンフリーの表示があり、店主はグルテンに詳しい。2026年3月の客によると、カスタード「とほかにいくつか」以外はグルテンフリー。FMGFではグルテンフリー専門ではないとされますが、専用の厨房スペースやフライヤーの報告もあります。カスタードは避け、表示を確認して。',
    vegan_detail: '要確認。クレープはふつう卵と牛乳を使い、ヴィーガンの選択肢は書かれていません。',
    notes: '[スイーツ・大阪城そばのグルテンフリー米粉クレープ] 大阪城の近く、城の帰りに寄りやすい小さなクレープの店で、生地は米粉。甘いものも塩味もメニューのほとんどにグルテンフリーの表示があります。まず塩味のマルゲリータやビスマルクから始め、締めは季節の苺大福のクレープやアイスで。支払いは外で、中で立って食べます。店主はグルテンに詳しいですが、カスタードはグルテンフリーではありません。苺やヌテラのような定番のフランスの味がないという客も。',
  });
}

// ================================================================ Mexico Kitchen Bar Mu
{
  const FM = 'https://www.findmeglutenfree.com/biz/mu/5333315918102528';
  const OWN = 'http://mu-mexico-osaka.jimdo.com/';
  put({
    id: 'osaka_mexico_kitchen_bar_mu', name: 'Mexico Kitchen Bar Mu', category: 'GF',
    lat: 34.683258, lng: 135.51022, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'No gluten-free menu, but most dishes are gluten-free because the tacos use corn tortillas, and the chef points out what is not. In May 2026 those were the jalapeño poppers, burrito, fried-shrimp taco, quesadilla and mole. There is a gluten-free chocolate cake. It is a shared kitchen with no dedicated fryer (FMGF). Ask the chef before ordering.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pork and beef tacos and cheese dominate; no vegan dish is described.',
    hours_raw: 'No hours captured. Bar counter; sometimes run by one person (October 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Honmachibashi 5-2, Chūō-ku — near Sakaisuji-Hommachi / Tanimachi 4-chōme',
    cuisine: 'Mexican kitchen bar · corn-tortilla tacos (pork, beef, corned beef) · nachos · GF chocolate cake · mango margarita sour, tequila highballs · chef flags the wheat dishes (burrito, quesadilla, fried-shrimp taco, jalapeño poppers, mole) · small plates',
    website: OWN, gmaps: gm('Mexico Kitchen Bar Mu 本町橋'), menu_url: null,
    notes: "[Mexican · a gluten-friendly taco bar in Honmachibashi] A small Mexican kitchen bar where the menu isn't marked, but much of it is naturally gluten-free thanks to corn tortillas. The chef (sometimes running the place alone) will point out the exceptions: in May 2026, the jalapeño poppers, burrito, fried-shrimp taco, quesadilla and mole. Celiac reviewers order the nachos (\"best I've ever eaten out\"), pork, beef and corned-beef tacos, and a gluten-free chocolate cake, with a mango margarita sour or tequila highball. Portions are small, so order several plates. It's a shared kitchen with no dedicated fryer, though reviewers report no reactions.",
    chef_bio: { chef_name: null, roles: [], origin: 'Honmachibashi, Chūō-ku', background: 'A Mexican kitchen bar (mu-mexico-osaka.jimdo.com); FMGF reviewers describe chefs who know which dishes contain wheat. No source names them.', philosophy: null, specialty: 'Corn-tortilla tacos; nachos.',
      anecdotes: [
        { text: '"The chef pointed out everything that contained gluten on the menu (jalapeño poppers, burrito, fried shrimp taco, quesadilla, and molé). The portions here are on the smaller side." — FMGF review, May 2026.', source: FM },
        { text: '"Menu not marked gluten free but staff can point it out. Tacos made with corn flour… Had nachos, tacos and chocolate cake." — FMGF review, April 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: Mexico Kitchen Bar Mu、大阪市中央区本町橋5-2、06-6944-1920、公式 mu-mexico-osaka.jimdo.com、グルテンフリーのメニューはないが選択肢あり、グルテンフリー専門ではない、専用フライヤーなし。口コミ(2025年〜2026年10月): 1人で切り盛りしていた日も、グルテンフリーの選択肢が多い、最高のナチョス、タコス、マンゴーマルガリータサワー、ブリトーはGFでない、シェフがグルテンを含む品(ハラペーニョポッパー、ブリトー、エビフライのタコス、ケサディーヤ、モレ)を教えてくれた、量は少なめ、ナチョスとコンビーフのタコス、グルテンフリーのチョコレートケーキ、トウモロコシ粉のタコス、厨房は共用、テキーラハイボール。',
      confidence: 'medium', sources: [FM, OWN] },
    cultural_comfort: { level: 'english', note: 'Chefs explain which dishes contain wheat (2025–2026).' },
    safety: { ...SAFETY0, dedicated_fryer: false,
      gf_cross_contamination: [{ text: '"The kitchens is the same for gluten free and normal food." — FMGF review, 2025; FMGF lists no dedicated fryer.', source: FM }],
      staff_allergy_handling: [{ text: 'The chef points out every dish containing gluten (FMGF review, May 2026).', source: FM }],
      positives: [{ text: 'Corn-tortilla tacos; reviewers report no symptoms (April 2026).', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区本町橋5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF review from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区本町橋5番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Corn-tortilla tacos (pork, beef, corned beef)', '', 'Tacos', 'gf', 'no', 'April–May 2026.', 'tacos'),
      it('', '', 'Nachos', '', 'Small plates', 'gf', 'ask', 'May 2026.', 'nachos'),
      it('', '', 'Gluten-free chocolate cake', '', 'Dessert', 'gf', 'ask', 'April 2026.', 'choc_cake'),
      it('', '', 'Burrito / quesadilla / fried-shrimp taco / jalapeño poppers / mole', '', 'Not GF', 'no', 'ask', 'Contain gluten, per the chef (May 2026).', 'not_gf'),
    ] }, {
    cuisine: 'メキシコ料理のキッチンバー・トウモロコシのトルティーヤのタコス(豚、牛、コンビーフ)・ナチョス・グルテンフリーのチョコレートケーキ・マンゴーマルガリータサワー、テキーラハイボール・小麦を含む料理(ブリトー、ケサディーヤ、エビフライのタコス、ハラペーニョポッパー、モレ)はシェフが教えてくれる・小皿',
    neighborhood: '中央区本町橋5-2、堺筋本町・谷町四丁目の近く',
    gf_detail: 'グルテンフリーのメニューはありませんが、タコスはトウモロコシのトルティーヤなので多くの料理がグルテンフリーで、シェフが例外を教えてくれます。2026年5月はハラペーニョポッパー、ブリトー、エビフライのタコス、ケサディーヤ、モレがグルテンを含むとのこと。グルテンフリーのチョコレートケーキも。厨房は共用で専用フライヤーはありません(FMGF)。注文前にシェフに確認を。',
    vegan_detail: '要確認。豚や牛のタコスとチーズが中心で、ヴィーガンの料理は書かれていません。',
    notes: '[メキシコ料理・本町橋のグルテンフリーに優しいタコスのバー] 小さなメキシコ料理のキッチンバーで、メニューに表示はありませんが、トウモロコシのトルティーヤのおかげで多くが元からグルテンフリー。シェフ(1人で切り盛りする日も)が例外を教えてくれ、2026年5月はハラペーニョポッパー、ブリトー、エビフライのタコス、ケサディーヤ、モレ。セリアック病の客はナチョス(「今まで外で食べた中で最高」)、豚、牛、コンビーフのタコス、グルテンフリーのチョコレートケーキを、マンゴーマルガリータサワーやテキーラハイボールと一緒に。量は少なめなので何皿か頼んで。厨房は共用で専用フライヤーはありませんが、症状が出たという報告はありません。',
  });
}

// ================================================================ ぼてぢゅう本店 道頓堀
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27019076/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_botejyu_honten_dotonbori', name: 'ぼてぢゅう本店 道頓堀 (Botejyu Honten Dotonbori)', category: 'OMNI',
    lat: 34.668837, lng: 135.501772, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour okonomiyaki batter, yakisoba, takoyaki; sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "Vegan options" for this restaurant, but no review describes a vegan dish, and okonomiyaki usually contains egg, dashi and pork or seafood.',
    hours_raw: 'Daily 11:00–1:00 (Tabelog). Menus in about four languages (August 2026).',
    hours: { 0: day(['11:00', '01:00']), 1: day(['11:00', '01:00']), 2: day(['11:00', '01:00']), 3: day(['11:00', '01:00']), 4: day(['11:00', '01:00']), 5: day(['11:00', '01:00']), 6: day(['11:00', '01:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-15, Comrade Dōton Bldg 2F — by the Glico sign',
    cuisine: 'Okonomiyaki from the house that claims the original "modern-yaki" (with noodles) · modern-yaki ¥1,850 (pork, shrimp, squid) · cheese-tama with potato and mentaiko ¥1,350 · takoyaki, akashiyaki · yakisoba, garlic rice · teppan counter · 94 seats',
    website: null, gmaps: gm('ぼてぢゅう本店 道頓堀'), menu_url: null,
    notes: "[Okonomiyaki · Botejyu's Dotonbori main shop] The 94-seat main shop of Botejyu, which says it has passed down its okonomiyaki and mayonnaise for over 78 years and calls its \"modern-yaki\" (okonomiyaki layered with noodles) the original. It sits upstairs by the Glico sign, with a live teppan counter. Most customers and staff are now from overseas, and the menus come in about four languages. The okonomiyaki is cooked elsewhere and finished on your table grill with a rich, sweet sauce and mayonnaise. Order the classic modern-yaki with pork, shrimp and squid (¥1,850, August 2026) or the cheese-tama with potato and mentaiko (¥1,350). Portions are big, so start with one each. Regulars note prices have climbed. Tabelog lists vegan options; ask.",
    chef_bio: { chef_name: null, roles: [], origin: 'Botejyu main shop (Tabelog listing name)', background: 'Tabelog introduction: "Original Okonomiyaki and Mayonnaise Passed Down for Over 78 Years Since Its Establishment" and "The Original \'Ganso Modern Yaki\' from Botejyu".', philosophy: null, specialty: 'Modern-yaki okonomiyaki.',
      anecdotes: [
        { text: '"Modern-yaki: JPY 1,850; Cheese-tama: JPY 1,350. The classic modern-yaki with pork, shrimp, and squid was delicious, featuring a rich and sweet sauce." — August 2026.', source: R + 'B534446451/' },
        { text: '"There is a teppan grill at the table, but the staff brings over the finished dish prepared elsewhere… it would be difficult to finish a whole one by yourself unless you are very hungry." — August 2026.', source: R + 'B533133665/' },
      ],
      japanese_sources_summary: '食べログ: ぼてぢゅう本店 道頓堀、大阪市中央区道頓堀1-6-15 Comradeドウトンビル2F、94席(鉄板ライブカウンター10、カウンター8、テーブル18卓76席)、毎日11:00〜翌1:00、禁煙、カード・電子マネー可、こだわり: ヴィーガンメニューあり。店の紹介: 創業78年以上受け継ぐお好み焼きとマヨネーズ、元祖モダン焼き。2026年の口コミ(8〜10月): 客の半分は外国人、メニューは約4か国語、鉄板の席に別で焼いたものを持ってくる、濃くて味が強い、量が多い、モダン焼き・明石焼き・角ハイボール、スタッフも海外出身、モダン焼き1,850円(豚・えび・いか)、チーズ玉(じゃがいも・明太ソース)1,350円、甘いソースとマヨネーズ、枝豆のガーリックオイル、ガーリックライス、なんばのぼてぢゅうとは違うとの声、値段が高くなった。',
      confidence: 'medium', sources: [TB, R + 'B534446451/', R + 'B533133665/', R + 'B534365152/', R + 'B536166569/', R + 'B537096792/'] },
    cultural_comfort: { level: 'english', note: 'Menus in about four languages; mostly overseas customers (August 2026).' },
    safety: { ...SAFETY0, confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-15 Comradeドウトンビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534446451/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Modern-yaki (okonomiyaki with noodles; pork, shrimp, squid)', '¥1,850', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'modern_yaki'),
      it('', '', 'Cheese-tama (potato, mentaiko sauce)', '¥1,350', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'cheese_tama'),
      it('', '', 'Akashiyaki', '', 'Sides', 'no', 'no', 'August 2026.', 'akashiyaki'),
      it('', '', 'Takoyaki', '', 'Sides', 'no', 'no', 'September 2026.', 'takoyaki'),
      it('', '', 'Edamame with garlic oil', '', 'Sides', 'ask', 'ask', 'September 2026.', 'edamame'),
    ] }, {
    cuisine: '「元祖モダン焼き」をうたう店のお好み焼き・モダン焼き1,850円(豚、えび、いか)・じゃがいもと明太ソースのチーズ玉1,350円・たこ焼き、明石焼き・焼きそば、ガーリックライス・鉄板カウンター・94席',
    neighborhood: '道頓堀1-6-15 Comradeドウトンビル2F、グリコの看板のそば',
    gf_detail: 'グルテンフリーではありません。小麦粉のお好み焼きの生地、焼きそば、たこ焼き、ソース。',
    vegan_detail: '要確認。食べログには「ヴィーガンメニューあり」とありますが、口コミにヴィーガンの料理は出てこず、お好み焼きにはふつう卵、だし、豚肉や魚介が入ります。',
    notes: '[お好み焼き・道頓堀のぼてぢゅう本店] 創業から78年以上お好み焼きとマヨネーズを受け継ぎ、「元祖モダン焼き」(麺を重ねたお好み焼き)をうたうぼてぢゅうの94席の本店。グリコの看板のそばの2階で、鉄板のライブカウンターも。今は客もスタッフも海外の人が多く、メニューは約4か国語。お好み焼きは別で焼いたものを席の鉄板で仕上げ、甘く濃いソースとマヨネーズで。定番の豚、えび、いかのモダン焼き(1,850円、2026年8月)か、じゃがいもと明太ソースのチーズ玉(1,350円)を。量が多いので1人1枚から。値段が上がったという常連も。食べログにはヴィーガンメニューありの表示があるので確認を。',
  });
}

save();
