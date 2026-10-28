// Osaka sweep (2-mile circle around Dotonbori), batch 120 — ramen phase (all OMNI).
//   + 鶏soba 座銀 本店 (whipped chicken-paitan tori soba with fried burdock; Tabelog Ramen 100 2020–2025; Edobori)
//   + 鯛担麺専門店 抱きしめ鯛 (sea bream tantanmen with tai-meshi to finish, monthly limited bowls; Edobori)
//   + Ramen ThreE (clam-broth shio and shoyu with three chashu, Suriyan, seasonal shellfish bowls; Higobashi)
//   + 小僧またおまえか。土佐堀店 (fish-powder tonkotsu-gyokai ramen and mazesoba, large free; Edobori)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 120);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鶏soba 座銀 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27079112/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://silver-grape.com/';
  put({
    id: 'osaka_tori_soba_zagin_honten', name: '鶏soba 座銀 本店 (Tori Soba Zagin Honten)', category: 'OMNI',
    lat: 34.689621, lng: 135.495065, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shio and shoyu tare; fried burdock topping.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; chicken and pork chashu.',
    hours_raw: 'Daily 10:30–22:30 (food L.O. 22:00); closed 30 December–3 January (Tabelog). Buy a ticket at the machine outside, then queue; staff manage the line. Serve yourself from the high counter (October 2026). Lines at lunch and before noon; quieter in the rain or on holiday afternoons (2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['10:30', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Edobori 1-19-2 (Nishi-ku) — 2 min from Higobashi Stn exit 8',
    cuisine: 'Whipped chicken paitan · tori soba (shio) ¥1,000: creamy, frothy chicken soup whipped before serving, thin straight noodles, low-temperature chicken and pork chashu, crisp fried burdock that softens in the soup · tori soba shoyu ¥1,000 · rich shio version with bok choy · chicken tsuke soba with a thick, concentrated chicken dip · large noodles +¥150 · 12 counter seats',
    website: OWN, gmaps: gm('鶏soba 座銀 本店 肥後橋'), menu_url: null,
    notes: "[Ramen · whipped chicken paitan with fried burdock, on Tabelog's Ramen 100 since 2020, Higobashi] The original Zagin, a twelve-seat counter two minutes from Higobashi and on Tabelog's Ramen 100 every year from 2020 to 2025. The tori soba (¥1,000) is a chicken paitan whipped to a creamy froth before it's served, on thin straight noodles with low-temperature chicken and pork chashu and a tangle of fried burdock that turns from crunchy to soft as it soaks (one diner found the burdock missing on one visit); an eleven-visit regular calls it a favorite ramen in Osaka. There's a shoyu version and a chicken tsuke soba with a thick, concentrated dip; one regular found the rich shio and the shoyu less special than the original. Buy a ticket outside, then queue; staff are calm and polite. Open 10:30 to 22:30 every day. Cash only. The Niboshi branch is also in this guide.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 May 2014 (Tabelog)', background: 'Main branch of the Zagin chicken-ramen shops; Tabelog Ramen 100 (WEST 2020–2022, OSAKA 2023–2025) (Tabelog; official site silver-grape.com).', philosophy: null, specialty: 'Tori soba (chicken paitan).',
      anecdotes: [
        { text: '"The noodles are thin, cooked perfectly without being overdone. The broth is whipped before serving… There are two slices of chashu (chicken and pork), both cooked at low temperatures." — October 2026, chicken shio soba ¥1,000.', source: R + 'B538117667/' },
        { text: '"The creamy, frothy soup was consistently delicious, and the fried burdock root topping added a fun twist… it transitioned from crunchy to soft as it soaked in the broth." — October 2026.', source: R + 'B537712447/' },
      ],
      japanese_sources_summary: '食べログ: 鶏soba 座銀 本店、大阪市西区江戸堀1-19-2、四つ橋線肥後橋駅8番出口から徒歩2分、毎日10:30〜22:30(L.O. 22:00)、閉店間際も歓迎、12月30日〜1月3日休み、カード・電子マネー・QR不可、カウンター12席、2014年5月26日開店、公式 silver-grape.com、食べログ ラーメン百名店(WEST 2020〜2022、OSAKA 2023〜2025)。口コミ(2026年1〜10月): 鶏つけそばの濃厚なつけ汁、揚げごぼうがなくなったという声と、あるという声、11回通う人の大阪で一番好きなラーメン、2種のチャーシュー、塩の鶏白湯、醤油は塩辛くトッピングと接客が以前より劣るという声、濃厚塩は青梗菜で薄まるという声、1,000円を超える、18時前に1人待ち、7〜8分で提供、鶏と豚のチャーシュー、昼前から行列、入口の券売機、スタッフが列を案内、厨房の丁寧な言葉遣い、泡立てたクリーミーなスープ、揚げごぼうは浸かるとパリパリからしっとりへ、鶏塩そば1,000円、大盛り+150円、カウンターのみ、高いカウンターから自分で受け取る、細麺、提供前に泡立てる、低温調理のチャーシュー2枚、鶏そば醤油1,000円、塩加減がちょうどいい。',
      confidence: 'high', sources: [TB, OWN, R + 'B419941906/', R + 'B483335400/', R + 'B537120644/', R + 'B537712447/', R + 'B538117667/', R + 'B538152461/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles; large +¥150 (October 2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'tsukemen'],
      signature_bowl: 'Tori soba (shio), ¥1,000 (October 2026).',
      chashu: 'Low-temperature chicken and pork chashu (October 2026).',
      notable_toppings: ['fried burdock', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Higobashi\'s Ramen 100 regular: frothy whipped chicken paitan under a tangle of fried burdock.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537712447/', '"The creamy, frothy soup" — placed high.'],
        oiliness: [R + 'B538152461/', '"Incredibly creamy with a perfect balance of saltiness" — mid-scale.'],
        clarity: [R + 'B538117667/', '"The broth is whipped before serving" — bottom of scale.'],
        tare_strength: [R + 'B538152461/', '"A perfect balance of saltiness"; shoyu "a bit salty" (B483335400) — mid-scale.'],
        noodle_firmness: [R + 'B538117667/', '"Cooked perfectly without being overdone" — mid-scale.'],
        aroma_punch: [R + 'B537712447/', 'Fried burdock adds "a fun twist" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B538117667/', R + 'B537712447/', R + 'B538152461/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; staff guide the line; self-service from the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-19-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Ramen 100 2025); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目19番2号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538117667/', R + 'B538152461/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tori soba (shio)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Tori soba shoyu', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Rich shio tori soba', '', 'Ramen', 'no', 'no', 'July 2026.', 'nouko_shio'),
      it('', '', 'Chicken tsuke soba', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsuke'),
      it('', '', 'Large noodles', '+¥150', 'Toppings', 'no', 'no', 'October 2026.', 'oomori'),
    ] }, {
    cuisine: '泡立てた鶏白湯・鶏そば(塩)1,000円: 提供前に泡立てるクリーミーな鶏スープ、細いストレート麺、低温調理の鶏と豚のチャーシュー、スープに浸かるとしっとりするカリカリの揚げごぼう・鶏そば醤油1,000円・青梗菜の濃厚塩・濃厚な鶏のつけ汁の鶏つけそば・大盛り+150円・カウンター12席',
    neighborhood: '西区江戸堀1-19-2。肥後橋駅8番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩と醤油のたれ、揚げごぼう。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、鶏と豚のチャーシュー。',
    notes: '[ラーメン・肥後橋、2020年から食べログ百名店の泡立てた鶏白湯と揚げごぼう] 座銀の本店で、肥後橋から2分のカウンター12席、2020年から2025年まで毎年食べログ ラーメン百名店に選出。鶏そば(1,000円)は提供前にクリーミーに泡立てた鶏白湯に、細いストレート麺、低温調理の鶏と豚のチャーシュー、スープに浸かるとパリパリからしっとりに変わる揚げごぼう(なかった日もあったという声)。11回通う人には大阪で一番好きなラーメン。醤油や、濃厚なつけ汁の鶏つけそばも。濃厚塩や醤油は元の塩ほどではないという常連の声も。食券を外で買ってから並び、スタッフは落ち着いて丁寧。毎日10時半〜22時半。現金のみ。にぼし店もこのガイドに掲載。',
  });
}

// ================================================================ 鯛担麺専門店 抱きしめ鯛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27106100/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://taitanmendakishimetai.com';
  const WD = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_tai_tanmen_dakishimetai', name: '鯛担麺専門店 抱きしめ鯛 (Tai Tanmen Senmon Ten Dakishimetai)', category: 'OMNI',
    lat: 34.689233, lng: 135.492963, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sesame-paste tantan tare; shredded fried potato.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream broth; meat miso; pork and chicken chashu.',
    hours_raw: 'Mon–Sat 11:00–15:00 (L.O. 14:30) and 17:30–22:00 (L.O. 21:30); Sun 11:00–16:30 (L.O. 16:00) and 17:30–21:00 (L.O. 20:30); open year-round; closes when the soup runs out (Tabelog). Buy a ticket first; waiting chairs outside; line from about 11:30 (2026). PayPay accepted; no cards or e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['11:00', '16:30'], ['17:30', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Edobori 1-23-21, Viera Edobori 1F (Nishi-ku) — 5 min from Higobashi Stn exit 2',
    cuisine: 'Sea bream tantanmen · tai tanmen ¥960: creamy sea bream (Uwajima) and sesame soup with spice and numbing to order, medium-thick wavy noodles, meat miso, mizuna, rare pork and chicken chashu, menma, shredded fried potato, crisp lotus root with balsamic · tai tanmen + tai-meshi set ¥1,200: finish the sea-bream rice with the soup like a risotto, then with poured tai dashi like ochazuke · soupless tai tanmen lunch set ¥1,200 · seasoned egg +¥150 · monthly limited bowls ¥1,600, e.g. crab and porcini bisque (October), chilled scallop and basil (August) · 4 counter seats and tables',
    website: OWN, gmaps: gm('抱きしめ鯛 江戸堀'), menu_url: null,
    notes: "[Ramen · sea bream tantanmen with a tai-meshi finish, near Higobashi] A popular tantanmen shop near Higobashi, open since 2018, which one review describes as crossing Japanese sea bream dashi, Sichuan tantanmen and French technique. The tai tanmen (¥960) is a creamy soup of Uwajima sea bream and sesame, heat and numbing to order (level 2 is moderate, level 3 genuinely hot), over chewy wavy noodles with meat miso, rare chashu, mizuna and shredded fried potato. Order the set with tai-meshi (¥1,200): eat some plain, add soup for a risotto, then pour on the free tai dashi for ochazuke. A soupless version and a ¥1,600 monthly special, such as crab and porcini bisque, keep one four-visit diner coming back. One diner barely tasted the sea bream in the noodles, but loved the rice. Buy a ticket and expect a short line after 11:30.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2018 (Tabelog)', background: 'Tai tanmen specialist (official site taitanmendakishimetai.com; Tabelog).', philosophy: 'Japanese sea bream dashi with Sichuan dandan noodles and French techniques; Uwajima sea bream (October 2026 review).', specialty: 'Tai tanmen; tai-meshi.',
      anecdotes: [
        { text: '"The soup is a spicy broth based on sea bream, paired with medium-thick wavy noodles. The toppings include meat miso, mizuna greens, pork and chicken chashu, menma (bamboo shoots), and shredded fried potatoes." — October 2026, tai tanmen level 2 ¥960.', source: R + 'B408501998/' },
        { text: '"I enjoyed it in three stages: first as is, then adding the soup for a risotto-like experience, and finally pouring the Tai broth over it for a delightful ochazuke." — October 2026, tai-meshi set.', source: R + 'B537740574/' },
      ],
      japanese_sources_summary: '公式 taitanmendakishimetai.com。食べログ: 鯛担麺専門店 抱きしめ鯛、大阪市西区江戸堀1-23-21 ビエラ江戸堀 1F、肥後橋駅2番出口から徒歩5分、月〜土 11:00〜15:00(L.O. 14:30)・17:30〜22:00(L.O. 21:30)、日 11:00〜16:30・17:30〜21:00、スープがなくなり次第終了、無休、カード・電子マネー不可、PayPay可、2018年8月1日開店。口コミ(2022年11月〜2026年10月): 鯛担麺 辛さ2 960円、味玉150円、鯛ベースの辛いスープ、中太の縮れ麺、肉味噌、水菜、豚と鶏のチャーシュー、メンマ、細切りの揚げポテト、辛さ3はかなり辛い、外に待ち椅子、食券を先に、鯛担麺と鯛めしのランチセット、月替わり限定(10月は蟹とポルチーニ1,600円、8月は冷やし帆立とバジル1,600円)、海老のクアトロチーズ(コラボ)、鯛めしセット1,200円、鯛めしにスープをかけて茶漬けに、汁なし鯛担麺ランチセット1,200円、鯛出汁は飲み放題、鯛めしは高レベル、11時半に行列、麺がもちもち、ポテトやレアチャーシュー、麺では鯛をあまり感じないという声、ジャスミンライスのようなふわふわの鯛めし、宇和島の鯛、胡麻、バルサミコの蓮根チップ、低温調理のレアチャーシュー、辛さと痺れを調整。',
      confidence: 'medium', sources: [TB, OWN, R + 'B408501998/', R + 'B519517414/', R + 'B537386394/', R + 'B537623700/', R + 'B537740574/', R + 'B538209750/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick wavy chewy noodles (October 2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'shiru_nashi_tantanmen'],
      signature_bowl: 'Tai tanmen ¥960; with tai-meshi ¥1,200 (October 2026).',
      chashu: 'Rare pork and chicken chashu (October 2026).',
      notable_toppings: ['meat miso', 'shredded fried potato', 'mizuna', 'balsamic lotus root', 'tai-meshi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Sea bream broth; meat.' },
      pantheon: 'Higobashi\'s sea bream tantanmen, finished as risotto and ochazuke over tai-meshi.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537740574/', '"The soup was rich" — placed high.'],
        oiliness: [R + 'B408501998/', 'Spicy tantan soup; no remark on oil — mid-scale.'],
        clarity: [R + 'B538209750/', '"The creamy broth, reminiscent of espuma" — bottom of scale.'],
        tare_strength: [R + 'B537740574/', '"I didn\'t really taste the sea bream in the ramen" — mid-scale.'],
        noodle_firmness: [R + 'B537740574/', '"The noodles had a wonderful chewy texture" — placed high.'],
        aroma_punch: [R + 'B408501998/', 'Level 2 "moderately spicy", level 3 "quite spicy" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B408501998/', R + 'B537740574/', R + 'B538209750/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the menu at the ticket machine; self-service water and aprons (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-23-21 ビエラ江戸堀 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026; OSM node 抱きしめ鯛 7 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目23番21号 (go) 18m; OSM node/5800178353 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B408501998/', R + 'B519517414/', R + 'B537386394/', R + 'B537623700/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tai tanmen', '¥960', 'Tantanmen', 'no', 'no', 'October 2026; heat to order.', 'tai_tanmen'),
      it('', '', 'Tai tanmen + tai-meshi set', '¥1,200', 'Sets', 'no', 'no', 'October 2026.', 'taimeshi_set'),
      it('', '', 'Soupless tai tanmen lunch set', '¥1,200', 'Sets', 'no', 'no', 'October 2026.', 'shirunashi'),
      it('', '', 'Monthly limited bowl (e.g. crab and porcini)', '¥1,600', 'Limited', 'no', 'no', 'October 2026.', 'gentei'),
      it('', '', 'Seasoned egg', '+¥150', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '鯛担麺・鯛担麺960円: 宇和島の鯛と胡麻のクリーミーなスープ、辛さと痺れを調整、中太の縮れ麺、肉味噌、水菜、豚と鶏のレアチャーシュー、メンマ、細切りの揚げポテト、バルサミコの蓮根チップ・鯛担麺と鯛めしのセット1,200円: スープでリゾット風に、鯛出汁をかけて茶漬けに・汁なし鯛担麺ランチセット1,200円・味玉+150円・月替わり限定1,600円(10月は蟹とポルチーニのビスク、8月は冷やし帆立とバジル)・カウンター4席とテーブル',
    neighborhood: '西区江戸堀1-23-21 ビエラ江戸堀 1F。肥後橋駅2番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、練り胡麻の担々麺のたれ、細切りの揚げポテト。',
    vegan_detail: 'ヴィーガンではありません。鯛のスープ、肉味噌、豚と鶏のチャーシュー。',
    notes: '[ラーメン・肥後橋近く、鯛めしで締める鯛担麺] 肥後橋近くの人気の担々麺の店で、2018年開店、和の鯛出汁と四川の担々麺とフレンチの技法の掛け合わせという声。鯛担麺(960円)は宇和島の鯛と胡麻のクリーミーなスープで、辛さと痺れは選べ(2はほどよく、3はしっかり辛い)、もちもちの縮れ麺に肉味噌、レアチャーシュー、水菜、細切りの揚げポテト。鯛めし付きのセット(1,200円)がおすすめ: まずそのまま、次にスープでリゾット風、最後に無料の鯛出汁をかけて茶漬けに。汁なしや月替わりの1,600円の限定(蟹とポルチーニのビスクなど)もあり、4回通う人も。麺では鯛をあまり感じなかったが鯛めしは絶品という声。食券を買い、11時半を過ぎると少し並ぶ。',
  });
}

// ================================================================ Ramen ThreE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27128310/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://ramenthree.com/';
  const WD = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_ramen_three_higobashi', name: 'Ramen ThreE', category: 'OMNI',
    lat: 34.690174, lng: 135.497384, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shio and shoyu tare; clam tsukudani rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam and bonito broth; three kinds of chashu; egg.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:30–23:00; Sat and public holidays 11:00–15:00; closed Sun (Tabelog). Ticket machine; a wait of about 15 minutes at weekday noon (October 2026). Cards (VISA, Master), IC cards, iD and QR incl. Alipay and WeChat Pay accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Edobori 1-4-23 (Nishi-ku) — 1 min from Higobashi Stn, 5 from Yodoyabashi',
    cuisine: 'Clam-broth ramen · clam ramen, shio or shoyu (special ¥1,200): clear broth of clams, thin noodles, chopped onion, thick menma, green onion, seasoned egg, three kinds of low-temperature chashu · clam and Kyoto bonito chuka soba, special ¥1,150 · "Suriyan" ¥1,000: cold clam-shoyu bowl with two egg yolks, two chashu and green onion · lunch rice dishes ¥100 (clam tsukudani rice to finish as chazuke); roast pork rice ¥350 · seasonal: Ise lobster and shellfish ramen with truffle butter, sea bream paitan, chilled oyster, sweet shrimp and clam tsukemen, crab and shellfish miso mazesoba · table: "sanmi" spice · counter and tables, 18 seats',
    website: OWN, gmaps: gm('Ramen ThreE 肥後橋'), menu_url: null,
    notes: "[Ramen · clam-broth ramen with three kinds of chashu, by Higobashi] A quiet, café-like ramen shop a minute from Higobashi, open since 2022, built on clam broth. The clam ramen comes clear and light in shio or shoyu, rich in shellfish umami, over thin noodles with crunchy chopped onion, thick menma and three kinds of low-temperature chashu; one repeat diner, after trying everything, still names the clam and Kyoto bonito chuka soba (special ¥1,150) the one everyone will like. At lunch any rice is ¥100: take the clam rice and pour the last of the soup over it as chazuke. Seasonal bowls rotate, from Ise lobster with truffle butter to chilled oyster and the cold Suriyan with two egg yolks. One diner found the plain clam ramen monotonous. Expect a short wait at weekday noon. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 March 2022 (Tabelog)', background: 'Clam-broth ramen shop (official site ramenthree.com; Tabelog).', philosophy: null, specialty: 'Clam-broth ramen.',
      anecdotes: [
        { text: '"The three types of chashu are cooked at low temperatures, making them thick and moist, while the thin noodles pair well with the clear broth, allowing you to enjoy the lightness typical of shio ramen along with the rich umami of the shellfish." — October 2026, special clam ramen ¥1,200.', source: R + 'B537288922/' },
        { text: '"After finishing the noodles, I poured the leftover soup over the Finishing Clam Rice. It turned into a clam broth chazuke, and the flavors of the asari (clam) tsukudani, rice crackers, seaweed, and rice filled my mouth." — October 2026, Suriyan ¥1,000.', source: R + 'B538084677/' },
      ],
      japanese_sources_summary: '公式 ramenthree.com。食べログ: Ramen ThreE、大阪市西区江戸堀1-4-23、四つ橋線肥後橋駅から徒歩1分、淀屋橋から5分、月〜金 11:00〜15:00・17:30〜23:00、土・祝 11:00〜15:00、日休み、カード(VISA、Master)・交通系IC・iD・QR(Alipay、WeChat Pay含む)可、18席(カウンター8、2人席5)、2022年3月1日開店。口コミ(2024年12月〜2026年10月): 蛤と京鰹の中華そば、伊勢海老と貝のラーメンにトリュフバター、鯛白湯ラーメン、Suriyan(すりやん)、冷やし牡蠣ラーメン、甘海老と蛤のつけ麺(昆布水)、蟹と貝の濃厚味噌まぜそば、定番の蛤ラーメン、玉ねぎ、太いメンマ、2種のチャーシュー、味玉、限定の蛤のまぜそば、白ご飯50円で締め、冷やし(伊勢海老とロブスターの海老出汁)、3種の貝と牛骨の特製ラーメン、あっさり蛤ラーメンは貝の味が控えめで単調という声、3種のチャーシュー、醤油と塩、甘辛い蛤ご飯100円、特製蛤ラーメン1,200円、締めの蛤ご飯、静かで落ち着いた店内、低温調理のチャーシュー、細麺、卓上の「三味」、平日昼に15分待ち、カフェのようなおしゃれな店内、昼はご飯もの100円、特製蛤と京鰹の中華そば1,150円、焼豚ご飯350円、すりやん1,000円(卵黄2個、チャーシュー2枚、ねぎ)、冷たい蛤醤油のスープ、締めの蛤ご飯100円で茶漬けに。',
      confidence: 'medium', sources: [TB, OWN, R + 'B498373512/', R + 'B536960018/', R + 'B537093186/', R + 'B537288922/', R + 'B537462811/', R + 'B538084677/'] },
    ramen: {
      broth_base: ['shellfish', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles; medium-thin straight in the Suriyan (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Clam ramen (shio or shoyu); clam and Kyoto bonito chuka soba (2026).',
      chashu: 'Three kinds of low-temperature chashu, thick and moist (October 2026).',
      notable_toppings: ['chopped onion', 'thick menma', 'seasoned egg', 'clam rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Higobashi\'s clear clam-broth ramen with three chashu and a ¥100 clam rice chazuke finish.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537288922/', '"The lightness typical of shio ramen" — placed low.'],
        oiliness: [R + 'B498373512/', 'Clam mazesoba "not greasy at all" (2025) — placed low.'],
        clarity: [R + 'B537288922/', '"The clear broth" — top of scale.'],
        tare_strength: [R + 'B537462811/', '"A strong umami flavor from the clams and is very easy to drink" — mid-scale.'],
        noodle_firmness: [R + 'B538084677/', '"Have a great texture" — mid-scale.'],
        aroma_punch: [R + 'B536960018/', '"A pleasant clam aroma" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537288922/', R + 'B537462811/', R + 'B536960018/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cards, Alipay and WeChat Pay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-4-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目4番23号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537288922/', R + 'B537462811/', R + 'B538084677/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special clam ramen (shio or shoyu)', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_hamaguri'),
      it('', '', 'Special clam and Kyoto bonito chuka soba', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'kyo_katsuo'),
      it('', '', 'Suriyan (cold clam-shoyu with two egg yolks)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'suriyan'),
      it('', '', 'Clam rice to finish (lunch)', '¥100', 'Rice', 'no', 'no', 'October 2026.', 'shime_gohan'),
      it('', '', 'Roast pork rice', '¥350', 'Rice', 'no', 'no', 'October 2026.', 'yakibuta_gohan'),
      it('', '', 'Ise lobster and shellfish ramen (seasonal)', '', 'Limited', 'no', 'no', 'October 2026.', 'ise_ebi'),
    ] }, {
    cuisine: '蛤出汁のラーメン・蛤ラーメン、塩か醤油(特製1,200円): 澄んだ蛤のスープ、細麺、刻み玉ねぎ、太いメンマ、ねぎ、味玉、低温調理の3種のチャーシュー・特製蛤と京鰹の中華そば1,150円・「Suriyan」1,000円: 卵黄2個、チャーシュー2枚、ねぎの冷たい蛤醤油の一杯・昼はご飯もの100円(締めの蛤ご飯を茶漬けに)、焼豚ご飯350円・季節限定: トリュフバターの伊勢海老と貝のラーメン、鯛白湯、冷やし牡蠣、甘海老と蛤のつけ麺、蟹と貝の味噌まぜそば・卓上に「三味」・カウンターとテーブル18席',
    neighborhood: '西区江戸堀1-4-23。肥後橋駅から徒歩1分、淀屋橋から5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩と醤油のたれ、蛤の佃煮ご飯。',
    vegan_detail: 'ヴィーガンではありません。蛤と鰹のスープ、3種のチャーシュー、卵。',
    notes: '[ラーメン・肥後橋近く、3種のチャーシューの蛤出汁ラーメン] 肥後橋から1分、カフェのような静かなラーメン店で、2022年開店、土台は蛤の出汁。蛤ラーメンは塩か醤油で、澄んで軽く貝の旨みたっぷり、細麺にシャキシャキの刻み玉ねぎ、太いメンマ、低温調理の3種のチャーシュー。全部試した常連は、誰もがおいしいと思うのは蛤と京鰹の中華そば(特製1,150円)だという。昼はご飯ものが100円: 締めの蛤ご飯に残ったスープをかけて茶漬けに。季節限定は伊勢海老のトリュフバターから冷やし牡蠣、卵黄2個の冷たいSuriyanまで入れ替わる。素の蛤ラーメンは単調だったという声も。平日の昼は少し待つ。カード、QR可。',
  });
}

// ================================================================ 小僧またおまえか。土佐堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27121500/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://kozou53.jp/';
  put({
    id: 'osaka_kozou_mata_omae_ka_tosabori', name: '小僧またおまえか。土佐堀店 (Kozou Mata Omae Ka. Tosabori)', category: 'OMNI',
    lat: 34.688828, lng: 135.49229, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; fish powder blends.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu and seafood broth; fish powder; chashu; egg.',
    hours_raw: 'Daily 11:00–22:00 (food L.O. 21:30); open year-round (Tabelog). Large noodles free (2025–2026 reviews). PayPay and Rakuten Pay accepted; no cards or e-money (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Edobori 1-24-10, Higobashi Harada Bldg 1F (Nishi-ku) — 8 min from Higobashi Stn',
    cuisine: 'Tonkotsu-gyokai ramen and mazesoba with fish powder · Kozou ramen ¥1,000, large free: thick, creamy but not heavy tonkotsu-seafood soup heaped with fish powder · tonkotsu-gyokai mazesoba ¥1,150, the most popular: rich sauce, egg, chashu, chopped onion, fish powder; mix from the bottom · limited: chashu zaru chuka with free noodles up to 350 g, chilled negi chuka ¥1,000, yuzu shio · garlic and many condiments to change it up · 7 counter seats and two tables',
    website: OWN, gmaps: gm('小僧またおまえか 土佐堀店'), menu_url: null,
    notes: "[Ramen · fish-powder tonkotsu-gyokai ramen and mazesoba, large free, near Higobashi] A thirteen-seat branch of the Kozou ramen shops on the Edobori side of Higobashi, open daily since 2021, and one diner's monthly habit. The Kozou ramen (¥1,000) is a thick, creamy tonkotsu-seafood soup heaped with fish powder, rich but not heavy enough to stop you finishing it; the large size costs nothing extra. The tonkotsu-gyokai mazesoba (¥1,150), billed as the most popular, gets the same fish powder with egg, chashu and chopped onion; mix it well from the bottom and add garlic from the table. One diner found the mazesoba a bit sweet and preferred the ramen. Seasonal specials rotate, from a chilled negi chuka to a chashu zaru chuka with up to 350 g of free noodles. Open 11:00 to 22:00 every day; PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 February 2021 (Tabelog)', background: 'Tosabori branch of the Kozou ramen shops (official site kozou53.jp; October 2026 review).', philosophy: null, specialty: 'Tonkotsu-gyokai ramen and mazesoba.',
      anecdotes: [
        { text: '"Packed with fish powder, the rich tonkotsu broth is thick and creamy, yet not heavy at all! Before I knew it, I had finished the entire bowl of soup!" — September 2026, Kozou ramen ¥1,000.', source: R + 'B536313104/' },
        { text: '"I mixed it well to coat everything with the rich sauce, and it was a real treat. The egg and chashu (braised pork) were both incredibly satisfying." — October 2026, tonkotsu-gyokai mazesoba ¥1,150.', source: R + 'B463628985/' },
      ],
      japanese_sources_summary: '公式 kozou53.jp。食べログ: 小僧またおまえか。土佐堀店、大阪市西区江戸堀1-24-10 肥後橋原田ビル 1F、四つ橋線肥後橋駅から徒歩8分、京阪中之島駅から10分、毎日11:00〜22:00(L.O. 21:30)、無休、カード・電子マネー不可、QR(PayPay、楽天ペイ)可、13席(カウンター7、4人席1、2人席1)、2021年2月16日開店。口コミ(2022年9月〜2026年10月): 月に一度通う、小僧ラーメンは昼は大盛り無料で1,000円、魚介ベースで軽いのにコク、濃厚な煮干し、深い丼に戻った、990円、950円(2025年)、柚子塩ラーメン(季節)、豚骨魚介まぜそば1,150円、ざる中華1,250円(限定)、豚骨まぜそば990円(2024年)、にんにく、チャーシューざる中華は麺350gまで無料、冷やしねぎ中華大盛り1,000円、マヨと酢で味変、魚粉たっぷりの濃厚でクリーミーな豚骨、刻み玉ねぎ、味変の調味料が豊富、まぜそばは甘めでパンチが足りないという声、人気No.1の汁なし豚骨魚介まぜそば、底からよく混ぜる、にんにくで味変、小僧の系列店。',
      confidence: 'medium', sources: [TB, OWN, R + 'B458838189/', R + 'B463628985/', R + 'B530494074/', R + 'B536313104/', R + 'B537306657/', R + 'B537699084/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Large free; up to 350 g free in the zaru chuka (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Kozou ramen ¥1,000; tonkotsu-gyokai mazesoba ¥1,150 (2026).',
      chashu: 'Chashu in the ramen and mazesoba (2026).',
      notable_toppings: ['fish powder', 'chopped onion', 'garlic', 'egg (mazesoba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and seafood broth.' },
      pantheon: 'Higobashi\'s fish-powder-heaped tonkotsu-gyokai ramen and mazesoba, large for free.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536313104/', '"Thick and creamy, yet not heavy at all" — placed high.'],
        oiliness: [R + 'B458838189/', '"A light yet rich flavor" — mid-scale.'],
        clarity: [R + 'B536313104/', '"Thick and creamy" tonkotsu — bottom of scale.'],
        tare_strength: [R + 'B537306657/', 'Mazesoba "somewhat sweet… lacked that strong punch" — mid-scale.'],
        noodle_firmness: [R + 'B458838189/', 'No diner remark on firmness — mid-scale.'],
        aroma_punch: [R + 'B536313104/', '"Packed with fish powder" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536313104/', R + 'B458838189/', R + 'B537306657/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; plenty of table condiments (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-24-10 肥後橋原田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目24番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B458838189/', R + 'B536313104/', R + 'B530494074/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kozou ramen (large free)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'kozou'),
      it('', '', 'Tonkotsu-gyokai mazesoba', '¥1,150', 'Mazesoba', 'no', 'no', 'October 2026.', 'maze'),
      it('', '', 'Chashu zaru chuka (limited)', '', 'Limited', 'no', 'no', 'October 2026; noodles to 350 g free.', 'zaru'),
      it('', '', 'Chilled negi chuka, large (limited)', '¥1,000', 'Limited', 'no', 'no', 'July 2026.', 'hiyashi_negi'),
    ] }, {
    cuisine: '魚粉たっぷりの豚骨魚介ラーメンとまぜそば・小僧ラーメン1,000円、大盛り無料: 魚粉を山ほどのせた、濃厚でクリーミーなのに重くない豚骨魚介・人気No.1の豚骨魚介まぜそば1,150円: 濃いたれ、卵、チャーシュー、刻み玉ねぎ、魚粉、底から混ぜて・限定: 麺350gまで無料のチャーシューざる中華、冷やしねぎ中華1,000円、柚子塩・にんにくなど味変の調味料が豊富・カウンター7席とテーブル2卓',
    neighborhood: '西区江戸堀1-24-10 肥後橋原田ビル 1F。肥後橋駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、魚粉のブレンド。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のスープ、魚粉、チャーシュー、卵。',
    notes: '[ラーメン・肥後橋近く、魚粉たっぷりの豚骨魚介、大盛り無料] 肥後橋の江戸堀側、小僧の系列のカウンターとテーブル13席の店で、2021年から無休、月に一度通う人も。小僧ラーメン(1,000円)は魚粉を山ほどのせた濃厚でクリーミーな豚骨魚介で、濃いのに重くなくスープまで飲み干せる。大盛りは無料。人気No.1の豚骨魚介まぜそば(1,150円)も同じ魚粉に卵、チャーシュー、刻み玉ねぎ。底からよく混ぜ、卓上のにんにくを足して。まぜそばはやや甘めでラーメンの方が好きという声も。季節限定は冷やしねぎ中華から、麺350gまで無料のチャーシューざる中華まで入れ替わる。毎日11時〜22時、PayPay可。',
  });
}

save();
