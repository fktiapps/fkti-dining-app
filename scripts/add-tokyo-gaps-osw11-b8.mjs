// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 8.
//   + 火の豚 人形町駅前店 Hi no Buta (7-seat Jiro-style ramen with a mapo "Fusion" bowl; directly run by the Kuki head shop)
//   + 麺屋 音 人形町店 Menya Oto (10-seat niboshi ramen, branch of a Kitasenju shop; since 2023)
//   + かつ好 Katsu Yoshi (tonkatsu in a renovated house; Tabelog Tonkatsu 100 six times)
//   + 鮨 こいけ Sushi Koike (8-seat sushi counter with a ¥3,850 lunch; since 2023)
//   - skipped 13115282 日高屋, 13294682 いろり庵きらく, 13309975 ちょいおでん (chains; reasons in skip() below)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 12 ningyocho` (main repo, 2026-11-02), nearest first:
//   Hi no Buta 46 m (ramen, 7 seats), Menya Oto 78 m (ramen, 10 seats), Katsu Yoshi 88 m (19 seats), Sushi Koike 99 m (8 seats),
//   after the three chain skips.
//   Dedupe. None is in data/tokyo.json by name or address. Shared addresses: Menya Oto and tokyo_bunbuku_ningyocho are both
//   日本橋人形町2-6-12 (address_ja "東京都中央区日本橋人形町2-6-12 渡辺ビル 2F〜3F"; pins 7 m apart); Sushi Koike and
//   tokyo_ankit_no_kimochi_ningyocho are both 1-4-13 (address_ja "東京都中央区日本橋人形町1-4-13"; 14 m apart).
//   Chain check. Hi no Buta: the head shop is 蒙麺火の豚 in Kuki, Saitama; the Ningyocho shop is directly run, not a
//   franchise (nlab.itmedia.co.jp, 30 March 2018) — two shops. Menya Oto: branch of a Kitasenju main shop, social accounts
//   shared "across all locations" (Tabelog) — a small group, none in data. Katsu Yoshi, Sushi Koike: single shops.
//   Ramen blocks left off for Hi no Buta and Menya Oto: neither shop's reviews describe all six profile dimensions (Hi no Buta:
//   no clarity or aroma; Menya Oto: no oiliness) (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13115282', 'chain branch: 日高屋 already in data (placeholder tokyo3__316 日高屋 新宿区役所前店)');
skip('13294682', 'chain branch: いろり庵きらく already in data (tokyo_iroriann_kiraku_soba_sui)');
skip('13309975', 'chain branch: ちょいおでん — the chain\'s site (choioden.com) lists 14 shops from Sapporo to Kanto, with Sendai opening in October 2026 and Fuchinobe in April 2026; a September 2026 reviewer calls it an "expanding restaurant chain" — rapidly expanding');

// ================================================================ 火の豚 人形町駅前店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13218617/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const NLAB = 'https://nlab.itmedia.co.jp/cont/articles/3277322/';
  const H = day(['11:00', '15:00'], ['17:30', '21:00']); const SUN = day(['11:00', '15:00']);
  put({
    id: 'tokyo_hi_no_buta_ningyocho', name: '火の豚 人形町駅前店 (Hi no Buta Ningyocho Ekimae)', category: 'OMNI',
    lat: 35.686245, lng: 139.781685, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a Jiro-style bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, pork chashu and a meat mapo sauce on the Fusion.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:30–21:00 (last order 20:45); Sun 11:00–15:00 (last order 14:45); hours may change (Tabelog). Buy a ticket and pay by PayPay — no cards or e-money (Tabelog; 2026 reviews). 7 counter seats, cramped (September 2026). The shop asks queuers not to block the neighbours\' doors or the apartment entrance and to fold back at "Kamiya" (Tabelog). Delivery riders pick up orders (October 2026). Opened 26 February 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-7-14 — 1 min from Ningyocho Stn exit A5 (Hibiya Line, Toei Asakusa Line), 5 min from Suitengumae Stn exit 8',
    cuisine: 'Jiro-style ramen: bean sprouts and cabbage piled on thick noodles with thick pork, toppings called at the counter — garlic, ginger, extra vegetables, fish powder, fried bits (2026 reviews) · ramen ¥950 (October 2026) · signature "Fusion": Jiro-style meets Nakamoto-style Mongolian tanmen, with a spicy mapo-tofu sauce on the vegetables, ¥1,000 (2026), ¥1,050 without broth (September 2026); mapo can come on a separate plate (October 2026) · dry noodles ¥1,000, default 250 g (July 2026) · rotating limited dishes: chilled Chinese noodles ¥1,000 (September 2026), a sauce yakisoba-style bowl (October 2026), tsukemen, a shrimp limited (August 2026) · extra chashu +¥150 (October 2026)',
    website: TB, gmaps: gm('火の豚 人形町'), menu_url: MENU,
    notes: "[Ramen · Ningyocho, a Jiro-meets-Nakamoto bowl at a 7-seat counter] Ningyocho's only Jiro-style ramen shop (September 2026), seven cramped counter stools a minute from exit A5. The owner trained at both Ramen Jiro and Nakamoto (nlab, 2018; July 2026 review) and fused them in the house \"Fusion\": a mountain of bean sprouts and thick pork over thick noodles, crowned with spicy mapo tofu. Call garlic, ginger and extra vegetables when asked. The plain ramen (¥950) and dry noodles are there too, plus a rotating limited bowl — chilled noodles in summer, a yakisoba bowl in October 2026. Opinions split. Fans praise the thick tender pork and the mapo, while October 2026 diners found the broth weak and the noodles thinner and drier than they remembered. Two September and October 2026 diners found the service curt. Expect a short queue at lunch; PayPay only. The head shop is in Kuki, Saitama, and this one is directly run.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; trained at Ramen Jiro and Nakamoto, per nlab 2018 and a July 2026 review)'], origin: null,
      background: 'Per nlab (ITmedia), 30 March 2018: the head shop is 蒙麺火の豚 in Kuki, Saitama; the Ningyocho shop is directly run, not a franchise; the owner trained at both Jiro and Nakamoto; the "Fusion" is the signature. Opened 26 February 2018 (Tabelog). An October 2026 diner who had not visited for four years found the niboshi ramen gone and limited bowls rotating.',
      philosophy: null, specialty: 'The Fusion: Jiro-style ramen with Nakamoto-style mapo.',
      anecdotes: [
        { text: '"The \'Fusion\' combines Jiro-style with Mongolian flavors, featuring a small amount of tofu on top of bean sprouts, covered in a spicy mapo tofu sauce." — September 2026, ¥1,050.', source: R + 'B532595894/' },
        { text: '"However, even after mixing it well, the flavor was weak and lacked richness." — October 2026, ramen ¥950.', source: R + 'B537482885/' },
        { text: '"The pork was thick and tender—so tasty!" — July 2026, Fusion ¥1,000, tenth visit.', source: R + 'B451072960/' },
      ],
      japanese_sources_summary: 'nlab (ITmedia、2018年3月30日): 火の豚の本店は埼玉県久喜市の「蒙麺火の豚」、人形町の店舗はのれん分けではなく直営店、店主は二郎・中本の両方で修行、目玉メニューは「フュージョン」。食べログ: 火の豚 人形町駅前店、ラーメン、人形町3-7-14、人形町駅A5出口から徒歩1分、月〜土11:00〜15:00、17:30〜21:00、日11:00〜15:00、カード・電子マネー不可、PayPay可、7席 (カウンターのみ)、2018年2月26日オープン、並ぶときは両隣の店の前に並ばない。口コミ(2026年2月〜10月): 人形町で唯一の二郎系、フュージョン1,000円・汁なし1,050円、ラーメン950円、にんにく、生姜、野菜増しのコール、厚くて柔らかい豚、限定の冷やし中華や焼きそば、味が薄いという声や接客がそっけないという声も。',
      confidence: 'medium', sources: [TB, MENU, NLAB, R + 'B451072960/', R + 'B532595894/', R + 'B534379500/', R + 'B535387678/', R + 'B535577022/', R + 'B535606721/', R + 'B536962723/', R + 'B537482885/', R + 'B537793064/', R + 'B538040391/'] },
    cultural_comfort: { level: 'japanese', note: 'Ticket machine and Jiro-style topping calls (garlic, vegetables) when the staff ask; cramped counter (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-7-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686245, 139.781685); cross-checked: GSI 東京都中央区日本橋人形町三丁目7番14号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B451072960/', R + 'B532595894/', R + 'B537482885/'],
    price_note: 'Prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (Jiro-style)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Fusion: Jiro-style ramen with spicy mapo sauce', '¥1,000', 'Ramen', 'no', 'no', 'February–July 2026.', 'fusion'),
      it('', '', 'Fusion, no broth', '¥1,050', 'Ramen', 'no', 'no', 'September 2026.', 'fusion_shirunashi'),
      it('', '', 'Dry noodles (250 g)', '¥1,000', 'Ramen', 'no', 'no', 'July 2026.', 'shirunashi'),
      it('', '', 'Chilled Chinese noodles (summer limited)', '¥1,000', 'Limited', 'no', 'no', 'September 2026.', 'hiyashi'),
    ] }, {
    cuisine: '二郎系のラーメン: 太麺にもやしとキャベツを山盛りにし、厚い豚、トッピングはコールで (にんにく、生姜、野菜増し、魚粉、揚げ玉) (2026年の口コミ)・ラーメン950円 (2026年10月)・看板は二郎系と中本風のタンメンを合わせた「フュージョン」、野菜に辛い麻婆豆腐のあん、1,000円 (2026年)、汁なし1,050円 (2026年9月)、麻婆は別皿にもできる (2026年10月)・汁なし1,000円、標準250g (2026年7月)・入れ替わる限定: 冷やし中華1,000円 (2026年9月)、ソース焼きそば風 (2026年10月)、つけ麺、海老の限定 (2026年8月)・チャーシュー追加+150円 (2026年10月)',
    neighborhood: '日本橋人形町3-7-14。人形町駅A5出口から徒歩1分 (日比谷線、都営浅草線)、水天宮前駅8番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 二郎系の小麦の太麺。',
    vegan_detail: 'ヴィーガンではない: 豚骨スープ、豚のチャーシュー、フュージョンには肉の入った麻婆のあん。',
    notes: '[ラーメン・人形町、7席のカウンターの二郎×中本の一杯] 人形町で唯一の二郎系 (2026年9月)、A5出口から1分の窮屈な7席のカウンター。店主は二郎と中本の両方で修業し (nlab 2018年、2026年7月の口コミ)、看板の「フュージョン」で合わせた: 太麺に山盛りのもやしと厚い豚、そこに辛い麻婆豆腐。聞かれたら、にんにく、生姜、野菜増しをコール。普通のラーメン (950円) や汁なし、冷やし中華や2026年10月の焼きそばなど入れ替わる限定も。評価は分かれ、厚く柔らかい豚と麻婆を褒める常連もいれば、2026年10月にはスープが薄く麺が細く乾いた感じになったという声も。2026年9月と10月には接客がそっけないという声も。昼は少し並ぶ。PayPay のみ。本店は埼玉県久喜市で、この店は直営。',
  });
}

// ================================================================ 麺屋 音 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13286352/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'tokyo_menya_oto_ningyocho', name: '麺屋 音 人形町店 (Menya Oto Ningyocho)', category: 'OMNI',
    lat: 35.686053, lng: 139.782999, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles in a soy-sauce and niboshi broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dried-sardine (niboshi) broth with pork chashu.',
    hours_raw: 'Daily 11:00–22:30; closed only over the New Year (Tabelog). Ticket machine; cash only — no cards, e-money or QR (Tabelog; August 2026). 10 counter seats; non-smoking; children welcome (Tabelog). Regular, large or extra noodles at no extra charge, and a free topping that changes by weekday (August–October 2026). Opened 15 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-12 — 2 min from Ningyocho Stn exit A3 (Hibiya Line, Toei Asakusa Line); Bunbuku is upstairs at the same address',
    cuisine: 'Niboshi (dried-sardine) ramen with house-made noodles and a soup the shop takes three days to make (Tabelog) · light niboshi soba ¥890; with seasoned egg ¥990; special ¥1,290 · original rich ("cement"-grey) niboshi ramen ¥990; with egg ¥1,090; special ¥1,290 · hand-kneaded chuka soba ¥950 · niboshi abura-soba ¥890–1,190 · tsukemen and a summer chilled niboshi ramen (2026 reviews) (prices from the Tabelog menu, tax included, updated September 2026; checked against August–October 2026 reviews) · free large portion or extra noodles; weekday free topping such as green onion or nori · draft beer ¥190 with a ramen (Tabelog) · table condiments: sansho, yuzu pepper, Korean chili (August 2026)',
    website: TB, gmaps: gm('麺屋 音 人形町'), menu_url: MENU,
    notes: "[Ramen · Ningyocho, niboshi ramen from a Kitasenju favourite] A ten-seat counter two minutes from Ningyocho station, the branch of a popular Kitasenju niboshi shop (Tabelog), open every day from 11:00 to 22:30. Two soups to choose from. The light niboshi soba (¥890) is a clean soy-sauce bowl that one August 2026 diner found barely tasted of sardine. The original rich niboshi ramen (¥990) is cement-grey but, reviewers say, balanced rather than overpowering. Both come with thin, straight house-made noodles that snap when bitten, chashu, menma and yuzu peel. A larger portion or extra noodles cost nothing, and there's a free topping that changes by day. Cash only via a ticket machine. One August 2026 diner was put off by stained paper aprons.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Tabelog\'s shop text: the main store in Kitasenju is a popular spot (Tabelog 3.69); soup crafted by skilled artisans over three days; house-made noodles without preservatives; the social-media account is shared across all locations. Opened 15 June 2023 (Tabelog).',
      philosophy: null, specialty: 'Light and rich niboshi ramen; house-made noodles.',
      anecdotes: [
        { text: '"The broth had the characteristic grayish hue of niboshi (dried sardines), but it wasn\'t the overly thick and rich type." — October 2026, original rich niboshi ramen ¥990.', source: R + 'B493089502/' },
        { text: '"The broth was a light soy sauce flavor, and I didn\'t really taste the niboshi (dried sardines)." — August 2026, seasoned-egg light niboshi soba ¥990.', source: R + 'B534080325/' },
        { text: '"When I requested a paper apron, the first one had stains that looked like soup splatters." — August 2026.', source: R + 'B533430452/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 音 人形町店、ラーメン、つけ麺、日本橋人形町2-6-12、人形町駅A3出口から徒歩2分、毎日11:00〜22:30 (年末年始以外)、予約不可、カード・電子マネー・QR不可、10席、禁煙、子ども可、2023年6月15日オープン、Kitasenju の本店は食べログ3.69、3日かけて作るスープ、無添加の自家製麺、SNSは全店共通。メニュー (2026年9月): 淡麗煮干しそば890円、味玉990円、特製1,290円、元祖濃厚煮干しそば990円、味玉1,090円、特製1,290円、手揉み中華そば950円、煮干し油そば890円〜1,190円。口コミ(2026年7月〜10月): セメントのような灰色の濃厚煮干し、濃すぎずバランスが良い、淡麗は醤油が前に出て煮干しは弱いという声、細いストレートの自家製麺、並・大盛り・替え玉無料、曜日ごとのトッピングサービス、紙エプロンの汚れが気になったという声も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B483654087/', R + 'B493089502/', R + 'B533306375/', R + 'B533430452/', R + 'B533714999/', R + 'B533992032/', R + 'B534080325/', R + 'B534090384/', R + 'B534877458/', R + 'B536668001/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with a short menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a menu updated September 2026; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686053, 139.782999); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番12号 (go) 8m. Same address as Bunbuku (tokyo_bunbuku_ningyocho, address_ja "東京都中央区日本橋人形町2-6-12 渡辺ビル 2F〜3F"), 7 m away; Ningyocho Nanafuku (2-6-11) is 4 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B493089502/', R + 'B483654087/'],
    price_note: 'Prices from the Tabelog menu (tax included; updated 18 September 2026), matching August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Light niboshi soba', '¥890', 'Ramen', 'no', 'no', 'Tabelog menu; August 2026.', 'tanrei'),
      it('', '', 'Original rich niboshi ramen', '¥990', 'Ramen', 'no', 'no', 'Tabelog menu; October 2026.', 'noukou'),
      it('', '', 'Hand-kneaded chuka soba', '¥950', 'Ramen', 'no', 'no', 'Tabelog menu.', 'chuka_soba'),
      it('', '', 'Niboshi abura-soba', '¥890', 'Abura-soba', 'no', 'no', 'Tabelog menu.', 'abura_soba'),
    ] }, {
    cuisine: '自家製麺と3日かけて作るスープの煮干しラーメン (食べログ)・淡麗煮干しそば890円、味玉990円、特製1,290円・元祖濃厚煮干しそば (セメントのような灰色) 990円、味玉1,090円、特製1,290円・手揉み中華そば950円・煮干し油そば890〜1,190円・つけ麺、夏は冷やし煮干し (2026年の口コミ) (値段は食べログのメニュー、税込み、2026年9月更新。2026年8月〜10月の口コミで確認)・大盛りか替え玉が無料、曜日ごとの無料トッピング (ねぎ、海苔など)・ラーメンと一緒なら生ビール190円 (食べログ)・卓上に山椒、柚子胡椒、韓国唐辛子 (2026年8月)',
    neighborhood: '日本橋人形町2-6-12。人形町駅A3出口から徒歩2分 (日比谷線、都営浅草線)。同じ番地の上の階に文福',
    gf_detail: 'グルテンフリーではない: 醤油と煮干しのスープに自家製の小麦の麺。',
    vegan_detail: 'ヴィーガンではない: 煮干しのスープと豚のチャーシュー。',
    notes: '[ラーメン・人形町、Kitasenju の人気店の煮干しラーメン] 人形町駅から2分、10席のカウンターで、Kitasenju の人気の煮干しラーメン店の人形町店 (食べログ)。毎日11時〜22時半。スープは2種類: 淡麗煮干しそば (890円) はすっきりした醤油の一杯で、2026年8月には煮干しをほとんど感じなかったという人も。元祖濃厚煮干し (990円) はセメントのような灰色だが、口コミではくどくなくバランスが良いという。どちらも細いストレートの自家製麺で歯切れが良く、チャーシュー、メンマ、柚子皮。大盛りや替え玉は無料、曜日ごとの無料トッピングも。食券機で現金のみ。2026年8月には紙エプロンの汚れが気になったという声も。',
  });
}

// ================================================================ かつ好
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13204633/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'http://katuyoshi.com/';
  const H = day(['11:30', '14:00'], ['17:30', '20:30']);
  put({
    id: 'tokyo_katsu_yoshi_ningyocho', name: 'かつ好 (Katsu Yoshi)', category: 'OMNI',
    lat: 35.686236, lng: 139.781214, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried cutlets, croquettes and fried shrimp.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork tonkatsu restaurant.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:30–20:30; closed Sunday; hours may change (Tabelog). Reservations accepted and advised — a line forms before 11:30 on weekdays, and phones can be hard to get through (October 2026). Cards (JCB, AMEX, Diners only); no e-money or QR (Tabelog). 19 seats: 7 at the ground-floor counter in front of the fryer, 12 at tables upstairs (Tabelog). Non-smoking. In a renovated old house down an alley (October 2026). Opened 1 November 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-4-11, a renovated house in a back alley — 2 min from Ningyocho Stn (Hibiya Line, Toei Asakusa Line), 6 min from Suitengumae Stn',
    cuisine: 'Tonkatsu fried to order at the counter; loin and fillet priced the same by weight (October 2026) · loin or fillet 110 g ¥1,925, 150 g about ¥2,360, 200 g ¥3,245 (October 2026); the Tabelog menu (August 2023) shows loin from ¥1,705 and fillet from ¥1,925, special 250 g ¥4,015–4,290 · rice and pickles ¥330 (free large portion and refills), miso soup ¥275; no set meals — order separately (October 2026) · course A ¥4,950: onion salad, croquette, simmered fillet, loin or fillet katsu, rice and miso soup, soft-shell-turtle curry, matcha ice cream (October 2026) · shabu-maki katsu, fillet katsu with fried shrimp and croquette, fried kuruma prawn and oysters, soft-shell-turtle curry ¥660 (Tabelog menu) · dip in sauce, salt (pink or plum), wasabi soy sauce, lemon or mustard; nuka pickles (2026 reviews) · sake and wine',
    website: SITE, gmaps: gm('かつ好 人形町'), menu_url: MENU,
    notes: "[Tonkatsu · Ningyocho, a celebrated tonkatsu counter in a renovated house] A tonkatsu restaurant in a renovated old house down an alley near Ningyocho station, on Tabelog's Tonkatsu 100 list six times between 2018 and 2026. Sit at the seven-seat counter downstairs to watch each cutlet breaded and fried; tables are upstairs. Loin and fillet cost the same by weight (¥1,925 for 110 g in October 2026), with rice and nuka pickles ordered separately and refilled free. The meat comes rosy, tender and sweet-fatted under a light crust, eaten with salt, plum salt, sauce or wasabi soy. A ¥4,950 course adds a croquette, simmered fillet and a soft-shell-turtle curry to pour over the last of the katsu. Book: a line forms before opening. One October 2026 diner found the batter heavier than before. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; "carefully prepares and fries each piece at the counter", October 2026 review)'], origin: null,
      background: 'Opened 1 November 2016 (Tabelog). Selected for Tabelog Tonkatsu 100 in 2018, 2019, 2021, 2022, 2024 and 2026. An October 2026 reviewer describes it as recognised by the Michelin Bib Gourmand; that is the reviewer\'s claim. Website katuyoshi.com (Tabelog).',
      philosophy: null, specialty: 'Loin and fillet tonkatsu by weight; soft-shell-turtle curry.',
      anecdotes: [
        { text: '"I was pleasantly surprised to find that the pork loin cutlet and tenderloin cutlet were offered in equal portions at nearly the same price (usually, the tenderloin is more expensive)." — October 2026.', source: R + 'B537304212/' },
        { text: '"To finish off, the soft-shelled turtle curry was served, transforming the tonkatsu and rice into a delightful soft-shelled turtle katsu curry." — October 2026, course A ¥4,950.', source: R + 'B537684520/' },
        { text: '"At 11:30, there was already a line before opening. I was the seventh in line but was seated during the first round." — October 2026.', source: R + 'B538126762/' },
      ],
      japanese_sources_summary: '食べログ: かつ好、とんかつ、日本橋人形町3-4-11、人形町駅から徒歩2分、月〜土11:30〜14:00、17:30〜20:30、日曜休み、予約可、カード (JCB、AMEX、Diners)、電子マネー・QR不可、19席 (1階カウンター7席、2階テーブル12席)、禁煙、古民家、2016年11月1日オープン、とんかつ 百名店 2018・2019・2021・2022・2024・2026、ホームページ katuyoshi.com。メニュー (2023年8月): ロースかつ110g 1,705円から、ヒレかつ110g 1,925円から、特選250g 4,015円・4,290円、しゃぶ巻きかつ、すっぽんカレー660円。口コミ(2026年10月): ロースとヒレが同じ値段、ご飯と漬物330円 (大盛り・おかわり無料)、味噌汁275円、定食はなく単品で、Aコース4,950円 (オニオンサラダ、コロッケ、ヒレの煮物、とんかつ、すっぽんカレー、抹茶アイス)、塩、梅塩、ソース、わさび醤油、開店前から行列、予約がおすすめ、衣が多かったという声も。',
      confidence: 'medium', sources: [TB, MENU, SITE, R + 'B537009130/', R + 'B537304212/', R + 'B537507072/', R + 'B537684520/', R + 'B537801414/', R + 'B538066961/', R + 'B538126762/', R + 'B538148875/', R + 'B538160684/', R + 'B538239859/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order cutlet and weight, then rice and soup separately (October 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-4-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the 2026 Tonkatsu 100 selection; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.686236, 139.781214); cross-checked: GSI 東京都中央区日本橋人形町三丁目4番11号 (go) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537009130/', R + 'B537684520/', MENU],
    price_note: 'Prices from October 2026 reviews; the Tabelog menu dates from August 2023 and shows lower loin prices.', last_checked: TODAY, items: [
      it('', '', 'Loin or fillet katsu, 110 g', '¥1,925', 'Tonkatsu', 'no', 'no', 'October 2026 (same price for both).', 'katsu_110'),
      it('', '', 'Loin or fillet katsu, 200 g', '¥3,245', 'Tonkatsu', 'no', 'no', 'October 2026.', 'katsu_200'),
      it('', '', 'Rice and pickles (free large portion and refills)', '¥330', 'Sides', 'ask', 'ask', 'October 2026.', 'rice'),
      it('', '', 'Miso soup', '¥275', 'Sides', 'ask', 'no', 'October 2026.', 'miso'),
      it('', '', 'Course A: salad, croquette, simmered fillet, katsu, turtle curry, ice cream', '¥4,950', 'Courses', 'no', 'no', 'October 2026.', 'course_a'),
      it('', '', 'Soft-shell-turtle curry', '¥660', 'Curry', 'no', 'no', 'Tabelog menu (2023).', 'suppon_curry'),
    ] }, {
    cuisine: 'カウンターで注文ごとに揚げるとんかつ。ロースとヒレは重さで同じ値段 (2026年10月)・ロースかヒレ110g 1,925円、150g 約2,360円、200g 3,245円 (2026年10月)。食べログのメニュー (2023年8月) ではロース1,705円から、ヒレ1,925円から、特選250g 4,015〜4,290円・ご飯と漬物330円 (大盛り・おかわり無料)、味噌汁275円。定食はなく単品で (2026年10月)・Aコース4,950円: オニオンサラダ、コロッケ、ヒレの煮物、ロースかヒレのかつ、ご飯と味噌汁、すっぽんカレー、抹茶アイス (2026年10月)・しゃぶ巻きかつ、ヒレかつと海老フライとコロッケ、車海老や牡蠣のフライ、すっぽんカレー660円 (食べログのメニュー)・ソース、塩 (ピンクや梅)、わさび醤油、レモン、からしで。ぬか漬け (2026年の口コミ)・日本酒とワイン',
    neighborhood: '日本橋人形町3-4-11、裏路地の改装した古民家。人形町駅から徒歩2分 (日比谷線、都営浅草線)、水天宮前駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: 衣をつけて揚げるかつ、コロッケ、海老フライ。',
    vegan_detail: 'ヴィーガンではない: 豚のとんかつの店。',
    notes: '[とんかつ・人形町、改装した古民家の名高いとんかつのカウンター] 人形町駅近くの路地の、古民家を改装したとんかつ店で、食べログ とんかつ 百名店に2018年から2026年まで6回。1階の7席のカウンターに座れば、衣をつけて揚げるところが目の前に。テーブルは2階。ロースとヒレは重さで同じ値段 (2026年10月に110gで1,925円) で、ご飯とぬか漬けは別に頼み、おかわりは無料。肉はほんのり桃色で柔らかく、脂が甘く、軽い衣。塩、梅塩、ソース、わさび醤油で。4,950円のコースにはコロッケ、ヒレの煮物、最後のかつにかけるすっぽんカレーも。開店前から並ぶので予約を。2026年10月には衣が前より多かったという声も。日曜休み。',
  });
}

// ================================================================ 鮨 こいけ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13278181/'; const R = TB + 'dtlrvwlst/';
  const TUE = day(['17:00', '22:00']); const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_sushi_koike_ningyocho', name: '鮨 こいけ (Sushi Koike)', category: 'OMNI',
    lat: 35.685523, lng: 139.781611, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A set of chawanmushi, tamagoyaki, nigiri, a mini eel bowl, miso soup and a roll; the eel, marinated tuna and soup use soy-based seasonings, and nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish sushi counter.',
    hours_raw: 'Tue 17:00–22:00; Wed–Sun 11:30–14:00 (last order 13:30) and 17:00–22:00 (last order 21:30); closed Monday; hours may change (Tabelog). Reservations essential, online via Ikkyu; lunch is booked up about a month ahead (2026 reviews). Cards; no e-money or QR (Tabelog). 8 seats at an L-shaped counter; second floor, stairs only (Tabelog; April 2026). Non-smoking. Opened 16 May 2023 (September 2026 review).',
    hours: { 1: TUE, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-4-13, 重本ビル 2F, behind the Ningyocho crossing towards Koami Shrine — 3 min from Ningyocho Stn',
    cuisine: 'Neighbourhood sushi counter with thick-cut toppings and large rice (2026 reviews) · lunch (Tabelog, October 2026): the "usual" ¥3,850 — chawanmushi, tamagoyaki, about eight nigiri such as kombu-cured sea bream, Shiogama chutoro and marinated akami, a mini eel bowl, miso soup and negitoro roll; lunch omakase ¥7,150 · dinner: nigiri course ¥12,100; omakase ¥16,500, about two-thirds small dishes, made for sake drinkers (August 2026) · extras in 2026: Irish bluefin toro, fugu-milt rice bowl, akagai, sweet shrimp and uni · house-made kanpyo and gari; extra-large rice on request (2026 reviews) · sake by the half-gō',
    website: TB, gmaps: gm('鮨 こいけ 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Ningyocho, an eight-seat counter with a ¥3,850 sushi lunch] Up a flight of stairs behind the Ningyocho crossing, an eight-seat L-shaped counter opened in 2023 by a chef from a sushi bar near Marunouchi's Nijubashi (September 2026). The cheerful chef and the warmth of the room keep diners coming back; one has been 31 times. The draw is lunch. For ¥3,850 the \"usual\" brings chawanmushi, tamagoyaki, about eight thick-cut nigiri on generous rice, a mini eel bowl, miso soup and a negitoro roll. It books out about a month ahead, so reserve on Ikkyu. Dinner is a ¥12,100 nigiri course or a ¥16,500 omakase heavy on small dishes for sake drinkers. A June 2026 regular says it lacks high-end finesse but shines on value. Lunch Wednesday to Sunday; closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; "the chef here comes from a sushi bar near Marunouchi Nijubashi", September 2026 review)'], origin: null,
      background: 'Opened 16 May 2023 (September 2026 review). Two accounts of who runs it: an April 2026 regular describes the chef and two women on staff; a September 2026 reviewer calls it "run by a husband-and-wife team"; an October 2026 diner mentions "the chef and the owner". Prices on Tabelog as of October 2026: lunch "usual" ¥3,850, lunch omakase ¥7,150, dinner nigiri ¥12,100, dinner omakase ¥16,500.',
      philosophy: null, specialty: 'The ¥3,850 "usual" sushi lunch; thick-cut toppings.',
      anecdotes: [
        { text: '"The fish is thick, the rice is slightly larger, and the wasabi served is of excellent quality." — August 2026, fifth visit.', source: R + 'B519323419/' },
        { text: '"Two-thirds of the course consists of appetizers, making it a heavenly sushi spot for those who enjoy drinking." — August 2026, omakase.', source: R + 'B534750649/' },
        { text: '"While it may not have the technical finesse of high-end establishments, this place stands out for its quality at such a reasonable price." — June 2026.', source: R + 'B519323419/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 こいけ、寿司、海鮮、日本橋人形町1-4-13 重本ビル 2F、人形町駅から徒歩3分、火17:00〜22:00、水〜日11:30〜14:00、17:00〜22:00、月曜休み、カード可、電子マネー・QR不可、8席 (カウンター)、禁煙、2026年10月の値段: 昼「いつもの」3,850円、昼のおまかせ7,150円、夜の握り12,100円、夜のおまかせ16,500円。口コミ(2026年3月〜10月): 予約は Ikkyu で、昼は1か月先まで埋まる、茶碗蒸し、玉子焼き、握り8貫ほど、ミニ鰻丼、味噌汁、ねぎとろ巻き、ネタが厚くしゃりが大きめ、自家製のかんぴょうとガリ、大将と女性スタッフ2人という声と夫婦で営むという声、Marunouchi Nijubashi 近くの鮨屋の出身、2023年5月16日オープン。',
      confidence: 'medium', sources: [TB, R + 'B467245481/', R + 'B518927435/', R + 'B519323419/', R + 'B527109629/', R + 'B532180256/', R + 'B532831081/', R + 'B534750649/', R + 'B535369765/', R + 'B536635211/', R + 'B537303982/'] },
    cultural_comfort: { level: 'japanese', note: 'Set lunch and omakase; booking through Ikkyu (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-4-13 重本ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with October 2026 prices; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685523, 139.781611); cross-checked: GSI 東京都中央区日本橋人形町一丁目4番13号 (go) 10m. Same lot as Ankit no Kimochi (tokyo_ankit_no_kimochi_ningyocho, address_ja "東京都中央区日本橋人形町1-4-13"), 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B467245481/'],
    price_note: 'Prices from Tabelog (as of October 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch "usual": chawanmushi, tamagoyaki, ~8 nigiri, mini eel bowl, miso soup, roll', '¥3,850', 'Lunch', 'ask', 'no', 'Tabelog; October 2026.', 'itsumo'),
      it('', '', 'Lunch omakase', '¥7,150', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_omakase'),
      it('', '', 'Dinner nigiri course', '¥12,100', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_nigiri'),
      it('', '', 'Dinner omakase', '¥16,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_omakase'),
    ] }, {
    cuisine: 'ネタが厚くしゃりが大きめの町の鮨のカウンター (2026年の口コミ)・昼 (食べログ、2026年10月): 「いつもの」3,850円 — 茶碗蒸し、玉子焼き、昆布締めの鯛、Shiogama の中トロ、漬けの赤身など握り8貫ほど、ミニ鰻丼、味噌汁、ねぎとろ巻き。昼のおまかせ7,150円・夜: 握りのコース12,100円、おまかせ16,500円は3分の2ほどが一品で、日本酒を飲む人向け (2026年8月)・2026年の追加: アイルランドの本鮪のトロ、ふぐ白子の丼、赤貝、甘海老と雲丹・自家製のかんぴょうとガリ、頼めばしゃりを大きく (2026年の口コミ)・日本酒は半合から',
    neighborhood: '日本橋人形町1-4-13 重本ビル 2F、人形町交差点の裏手、Koami 神社の方へ。人形町駅から徒歩3分',
    gf_detail: '予約時に要確認。茶碗蒸し、玉子焼き、握り、ミニ鰻丼、味噌汁、巻物のセットで、鰻、漬けの鮪、汁は醤油などの調味料を使い、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚介の鮨のカウンター。',
    notes: '[鮨・人形町、3,850円の鮨ランチの8席のカウンター] 人形町交差点の裏手、階段を上がった8席のL字のカウンターで、2023年にMarunouchi Nijubashi 近くの鮨屋出身の大将が開いた (2026年9月)。明るい大将と温かい雰囲気で通う人が多く、31回来た人も。人気は昼で、3,850円の「いつもの」には茶碗蒸し、玉子焼き、厚切りのネタと大きめのしゃりの握り8貫ほど、ミニ鰻丼、味噌汁、ねぎとろ巻き。1か月ほど先まで埋まるのでIkkyu で予約を。夜は12,100円の握りか、日本酒向けに一品の多い16,500円のおまかせ。2026年6月の常連は高級店の技はないが値段の割にすばらしいと書く。昼は水曜〜日曜、月曜休み。',
  });
}

save();
