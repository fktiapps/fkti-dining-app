// Osaka sweep (2-mile circle around Dotonbori), batch 110 — mom / small-shop phase (all OMNI).
//   + 玉製家 (made-to-order ohagi, takeaway only, from 14:00 until sold out; Tabelog sweets 100; Sennichimae)
//   + PIENO vivace (small Italian bar: uni pasta, carpaccio, wine; Ura-Namba)
//   + わびすけ 難波本店 (obanzai counter izakaya; ¥900 niku dashimaki lunch with long lines; Ura-Namba)
//   + 天ぷら 心斎橋 一哲 (counter tempura courses, shaved-ice dessert; Shinsaibashi-suji)
//   + 鳥しん (Hakata mizutaki and yakitori since 2007; Higashi-Shinsaibashi alley)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 110);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 玉製家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001576/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyokusei_ya_sennichimae', name: '玉製家 (Gyokusei Ya)', category: 'OMNI',
    lat: 34.667307, lng: 135.505098, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ohagi are glutinous rice with red-bean paste or kinako, but no source lists the ingredients or the kitchen\'s handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Red-bean and kinako ohagi contain no obvious animal products, but no source lists the ingredients.',
    hours_raw: 'From 14:00 until sold out; closed Wed, Thu, Sun and public holidays, open during the equinox and Obon weeks (Tabelog). No fixed closing time; one diner joined the line at 16:00 and waited two hours (October 2026). Lines of about 40 by opening and waits of 1¾–2 hours (October 2026). Takeaway only. Cash only: no cards, e-money or QR (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-4-4 — 99 m from Nippombashi Stn (exit B28 from Namba Walk)',
    cuisine: 'Ohagi, made to order, takeaway only · box of 6 ¥1,170: choose up to two of koshian (smooth red bean), tsubuan (chunky red bean) and kinako (roasted soybean flour) · small pieces of soft, lightly crushed glutinous rice · gentle sweetness with a hint of salt in the anko; fine kinako · kinako best the same day, anko until the next morning',
    website: null, gmaps: gm('玉製家 千日前'), menu_url: null,
    notes: "[Sweets · made-to-order ohagi with a two-hour line, by Nippombashi] A small, long-standing ohagi shop off Sennichimae-dori (often called Tamaseiya), picked for Tabelog's sweets lists from 2017 to 2026, that opens at 14:00 four days a week and closes when it sells out. There's one thing to buy: a box of six small ohagi (¥1,170), choosing up to two of smooth red bean, chunky red bean and kinako, made fresh after you order, so the line is slow; October diners waited one and three-quarter to two hours, and about 40 people were queued by opening. The anko is gently sweet with a touch of salt, the kinako fine, the rice soft and lightly crushed, and even people who dislike ohagi like them. Eat the kinako ones the same day; anko keeps until the next morning. Takeaway only, cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ohagi shop; Tabelog sweets 100 (2017–2022) and Japanese sweets WEST 100 (2023, 2026) (Tabelog).', philosophy: null, specialty: 'Ohagi.',
      anecdotes: [
        { text: '"I arrived at 1:20 PM, 40 minutes before opening, and there were already about 20 people in line… by opening time, around 40 people were waiting." — October 2026.', source: R + 'B536839426/' },
        { text: '"The soybean flour is pleasantly sweet, and the red bean paste has a gentle sweetness with a hint of salt. The soft texture… combined with the chewy, slightly crushed glutinous rice is simply delightful!" — October 2026.', source: R + 'B537896168/' },
      ],
      japanese_sources_summary: '食べログ: 玉製家、大阪市中央区千日前1-4-4、日本橋駅B28出口から99m、14:00〜売り切れ次第終了、水・木・日・祝休み(彼岸・お盆は営業)、カード・電子マネー・QR不可、持ち帰りのみ、食べログ スイーツ百名店 2017〜2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ(2026年10月): 開店40分前に約20人、開店時に約40人、3時10分に順番、6個入りでこしあん3つときなこ3つ、3種から2種まで、注文後に作る、甘すぎずやさしい、4時間後でもおいしい、雨の中2時間待ち、つぶあんきなこ・こしあんきなこ各6個1,170円、きなこは当日、あんは翌日まで、手土産に喜ばれる、おはぎが苦手な人も好きになる、1時間45分待ち、売り切れ直前、素朴なあん、餅のようになめらか、6個でも小ぶりで食べきれる、あんにほのかな塩気、少しつぶしたもち米、きなこが細かい、16時から2時間待ち。',
      confidence: 'medium', sources: [TB, R + 'B536839426/', R + 'B537423160/', R + 'B537571154/', R + 'B537694364/', R + 'B537896168/', R + 'B538053198/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter after the line; takeaway only (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-4-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Japanese sweets WEST 100, 2026); reviews dated October 2026; OSM node 玉製家 4 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目4番4号 (go) 8m; OSM node/6401998900 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537423160/', R + 'B538053198/'],
    price_note: 'Price from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ohagi, box of 6 (choose up to two of koshian, tsubuan, kinako)', '¥1,170', 'Ohagi', 'ask', 'ask', 'October 2026.', 'ohagi6'),
    ] }, {
    cuisine: '注文を受けてから作るおはぎ、持ち帰りのみ・6個入り1,170円: こしあん、つぶあん、きなこの3種から2種まで・小ぶりで柔らかく少しつぶしたもち米・あんはやさしい甘さにほのかな塩気、きなこは細かい・きなこは当日、あんは翌朝まで',
    neighborhood: '中央区千日前1-4-4。日本橋駅(なんばウォークB28出口)から99m',
    gf_detail: '要確認。おはぎはもち米にあんやきなこですが、材料や調理の扱いを示す情報源はありません。',
    vegan_detail: '要確認。あんときなこのおはぎに明らかな動物性の材料はありませんが、材料を示す情報源はありません。',
    notes: '[和菓子・日本橋近く、2時間並ぶ注文製のおはぎ] 千日前通りから少し入った昔からの小さなおはぎの店で、2017年から2026年にかけて食べログの百名店に選出、週4日14時に開いて売り切れで終わり。買えるのはひとつ: 小ぶりのおはぎ6個入り(1,170円)、こしあん、つぶあん、きなこから2種まで。注文後に作るので列はゆっくりで、10月は1時間45分から2時間待ち、開店時に約40人並んでいたという声。あんはやさしい甘さにほのかな塩気、きなこは細かく、もち米は柔らかく少しつぶしてあり、おはぎが苦手な人も好きになるという声。きなこは当日、あんは翌朝までに。持ち帰りのみ、現金のみ。',
  });
}

// ================================================================ PIENO vivace
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27044332/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.yasumaru.co.jp/pieno_vivace.php';
  const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_pieno_vivace_namba', name: 'PIENO vivace (ピエーノヴィヴァーチェ)', category: 'OMNI',
    lat: 34.666891, lng: 135.498516, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta and pizza are the core; baguette with the ajillo; spring-roll wrappers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: uni cream pasta, carpaccio, prosciutto, burrata, beef.',
    hours_raw: 'Wed–Mon 17:00–24:00 (L.O. 23:00); closed Tue (Tabelog). Small: reserve for Friday and Saturday evenings and for tables; call for the counter with three or more (Tabelog; 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay accepted (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-8-2, Daiko Center 1F, at the end of the street by the Hanshin Expressway — 2 min from Namba Stn exit 21',
    cuisine: 'Italian bar · signature uni cream pasta ¥1,188 · three-fish carpaccio (sea bream, yellowtail, salmon) ¥1,298 · seasonal fruit and mascarpone prosciutto spring rolls ¥1,078 · beef skirt teppan steak ¥1,408 · oyster ajillo with baguette · prosciutto salad · burrata · pizza with a runny egg · roast beef tartare · Genovese, tomato-cream and other pastas cooked firm · handwritten daily specials · homemade sangria; wine list with descriptions · 10 counter seats and a semi-private room for about 10',
    website: OWN, gmaps: gm('PIENO vivace 難波'), menu_url: null,
    notes: "[Italian · uni pasta, carpaccio and wine in a tiny Ura-Namba bar] A small, nearly always full Italian bar at the end of a backstreet in Ura-Namba, open since 2009 and one of several PIENO shops. It shares the main shop's menu, so start with the three-fish carpaccio (¥1,298) and the fig, mascarpone and prosciutto spring rolls, add the oyster ajillo or a skirt steak, and finish with the signature uni cream pasta (¥1,188). Pasta comes firm; one diner came back ten years on for the unchanged Genovese. Handwritten specials change daily, the wine list explains itself, and the sangria is homemade. One diner spent about ¥5,000 with drinks, another about ¥8,000 with two bottles of red between two. It's cramped, so skip it with big luggage and reserve for Friday or Saturday evenings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 October 2009 (Tabelog)', background: 'One of the PIENO Italian bars run by the Yasumaru group, which lists several PIENO shops in Namba and one in Kochi (official site yasumaru.co.jp).', philosophy: null, specialty: 'Uni cream pasta; seafood carpaccio.',
      anecdotes: [
        { text: '"The basic menu is the same as the main Pieno location, but there are many handwritten daily specials. The signature dish at Pieno is the sea urchin pasta… The carpaccio here is a standout, made with fresh seafood." — August 2026.', source: R + 'B502050873/' },
        { text: '"I particularly recommend the Genovese pasta. I used to come here just to eat this pasta ten years ago. I was really happy to see it still on the menu and that the taste remained the same." — October 2026.', source: R + 'B536815395/' },
      ],
      japanese_sources_summary: '公式 yasumaru.co.jp: PIENO vivace、大阪市中央区難波4-8-2 大幸センター 1F、20席(カウンター10、半個室約10)、15名以上で貸切可、系列にPIENO、PIENO villa、PIENO di cibo、PIENO festa、高知のPIENO settimo、ENO cafe、肉屋まるはち。食べログ: なんば駅21番出口から徒歩2分、毎日17:00〜24:00(L.O. 23:00)、火休み、3名以上のカウンター利用は電話で、カード・PayPay可、2009年10月4日開店。口コミ(2025年2月〜2026年10月): 裏なんばの通りの突き当たり、阪神高速の見える場所、ほぼ満席、金土の18時半〜19時は予約なしでは難しい、本店と同じ基本メニューに手書きの日替わり、名物の雲丹パスタ、カルパッチョ、アヒージョ、生ハムサラダ、自家製サングリア、パスタは固めの茹で加減、アクアパッツァ、ブッラータ、半熟卵のピザ、トマトクリームパスタ、3号店、高知にも店、ローストビーフのタルタル、一人5,000円ほど、ジェノベーゼを10年前から、赤ワイン2本で一人約8,000円、ワインの説明付き、鮮魚3種のカルパッチョ1,298円(鯛、鰤、サーモン)、季節のフルーツとマスカルポーネの生春巻き1,078円(生ハム、無花果)、牛ハラミの鉄板焼き1,408円、牡蠣のアヒージョとバゲット、雲丹のパスタ1,188円、狭いカウンター、ワインが豊富、量が多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B502050873/', R + 'B532197831/', R + 'B534095164/', R + 'B536815395/', R + 'B537554482/', R + 'B537712296/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wine list with descriptions (October 2026); cards and PayPay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-8-2 大幸センター 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and group site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目8番2号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537554482/'],
    price_note: 'Prices from a July 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Uni cream pasta', '¥1,188', 'Pasta', 'no', 'no', 'July 2026.', 'uni_pasta'),
      it('', '', 'Three-fish carpaccio', '¥1,298', 'Antipasti', 'no', 'no', 'July 2026.', 'carpaccio'),
      it('', '', 'Seasonal fruit and mascarpone prosciutto spring rolls', '¥1,078', 'Antipasti', 'no', 'no', 'July 2026.', 'harumaki'),
      it('', '', 'Beef skirt teppan steak', '¥1,408', 'Meat', 'no', 'no', 'July 2026.', 'harami'),
      it('', '', 'Oyster ajillo with baguette', '', 'Antipasti', 'no', 'no', 'July 2026.', 'ajillo'),
      it('', '', 'Genovese pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'genovese'),
      it('', '', 'Homemade sangria', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'sangria'),
    ] }, {
    cuisine: 'イタリアンバル・名物の雲丹のクリームパスタ1,188円・鮮魚3種のカルパッチョ(鯛、鰤、サーモン)1,298円・季節のフルーツとマスカルポーネと生ハムの生春巻き1,078円・牛ハラミの鉄板ステーキ1,408円・牡蠣のアヒージョとバゲット・生ハムサラダ・ブッラータ・半熟卵のピザ・ローストビーフのタルタル・固めに茹でるジェノベーゼ、トマトクリームなどのパスタ・手書きの日替わり・自家製サングリア、説明付きのワインリスト・カウンター10席と約10席の半個室',
    neighborhood: '中央区難波4-8-2 大幸センター 1F、阪神高速沿いの通りの突き当たり。なんば駅21番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。パスタとピザが中心、アヒージョのバゲット、春巻きの皮。',
    vegan_detail: 'ヴィーガンではありません。雲丹のクリームパスタ、カルパッチョ、生ハム、ブッラータ、牛肉。',
    notes: '[イタリアン・裏なんばの小さなバルで雲丹パスタ、カルパッチョ、ワイン] 裏なんばの路地の突き当たり、いつもほぼ満席の小さなイタリアンバルで、2009年開店、PIENOの系列店のひとつ。本店と同じメニューなので、まずは鮮魚3種のカルパッチョ(1,298円)と無花果、マスカルポーネ、生ハムの生春巻きを、牡蠣のアヒージョかハラミステーキを加えて、締めは名物の雲丹のクリームパスタ(1,188円)。パスタは固めの茹で加減で、10年ぶりに変わらぬジェノベーゼを食べに来た人も。手書きの日替わりは毎日変わり、ワインリストは説明付き、サングリアは自家製。飲み物込みで一人約5,000円という声、赤ワイン2本を2人で空けて一人約8,000円という声も。狭いので大きな荷物の日は避け、金土の夜は予約を。',
  });
}

// ================================================================ わびすけ 難波本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27119089/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:30', '23:30']);
  put({
    id: 'osaka_wabisuke_namba', name: 'わびすけ 難波本店 (Wabisuke Namba Honten)', category: 'OMNI',
    lat: 34.666724, lng: 135.498642, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dashi-soy seasoning throughout; kara-age, ham katsu, fried horse mackerel and tempura; spaghetti salad.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi in the obanzai and omelet; beef, pork miso soup, seafood.',
    hours_raw: 'Mon–Sat 11:30–15:00 (L.O. 14:30; lunch ends when sold out) and 17:30–23:30 (L.O. 23:00); Sun 17:30–23:30 (Tabelog). Lunch lines of 10–20 from before opening; staff take orders in the line (September–October 2026). Evenings are easier. PayPay accepted; no cards or e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['17:30', '23:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-8-3, in the Ura-Namba backstreets — 80 m from Osaka-Namba Stn',
    cuisine: 'Obanzai counter izakaya · lunch set ¥900: one main from six (niku dashimaki — fluffy dashi omelet topped with beef — kara-age and others) with 3–4 obanzai, a little sashimi, tonjiru and rice with refills; beer set swaps rice for a draft · evening: assorted obanzai "5 kinds" (often six) · dashimaki or wagyu tamagoyaki · thick-cut ham katsu · chikuwa tempura with shibazuke tartare · squid tentacles with aosa mayo · fried horse mackerel · mentaiko and aosa spaghetti salad · red shrimp with vinegar miso · niku tofu · tongue steak · onigiri and tonjiru set · highballs, Hachijo-jima shochu · 12 counter seats',
    website: null, gmaps: gm('わびすけ 難波本店'), menu_url: null,
    notes: "[Izakaya · obanzai counter with a ¥900 niku dashimaki lunch in Ura-Namba] A twelve-seat counter in the Ura-Namba backstreets, open since 2020, that is two places in one. At lunch the line forms before opening for the ¥900 set: pick one of six mains, most famously the niku dashimaki, a fluffy, freshly rolled dashi omelet topped with sweet-savory beef, with obanzai, a little sashimi, a big bowl of tonjiru and rice refills; or swap the rice for a draft beer. Staff take your order in the line. At night it's an easier, friendly izakaya: the \"five\" obanzai platter that one regular says usually comes with six, thick-cut ham katsu, chikuwa tempura with shibazuke tartare, the dashimaki again, and highballs. It's the main shop of its name. PayPay or cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2020 (Tabelog)', background: 'Obanzai izakaya, main shop (Tabelog; 2020–2026 reviews).', philosophy: null, specialty: 'Obanzai; niku dashimaki.',
      anecdotes: [
        { text: '"The meat dashimaki set meal is priced at JPY 900 and includes the main dish, four types of daily obanzai, pickles, and a hearty pork miso soup… The fluffy dashimaki, perfectly cooked without any burnt edges, pairs wonderfully with the richly flavored beef." — November 2025.', source: R + 'B517558847/' },
        { text: '"As usual, the assorted obanzai came with 6 types instead of 5, which was a nice surprise!" — October 2026, a ninth visit.', source: R + 'B449973094/' },
      ],
      japanese_sources_summary: '食べログ: わびすけ 難波本店、大阪市中央区難波4-8-3、なんば駅から徒歩3分、大阪難波から80m、月〜土 11:30〜15:00(L.O. 14:30、売り切れ次第終了)・17:30〜23:30(L.O. 23:00)、日 17:30〜23:30、予約可、カード・電子マネー不可、PayPay可、カウンター12席、2020年8月1日開店。口コミ(2020年8月〜2026年10月): 裏なんばのカウンターの居酒屋、おばんざい5種盛り(いつも6種)、厚切りハムカツ、ハイボール、明太子とあおさのスパゲッティサラダ、ちくわ天のしば漬けタルタル、おにぎりと豚汁のセット、げそ天のあおさマヨ、だし巻き、肉吸い、赤海老の酢味噌、アジフライ、白身魚のゆかりとかつお節、肉豆腐、タン焼き、八丈島の焼酎、昼は行列、マスターとスタッフが気さく、名物のだし巻き、Kuro Kirishimaのソーダ割り、肉だし巻き定食900円(メイン、日替わりおばんざい4種、漬物、豚汁)、30分待ち、日曜11時45分に約20人で40分待ち、並んでいる間に人数と注文を確認、6種のメイン、刺身少し、ご飯おかわり可、夜は待たずに入れた、和牛の玉子焼き、土曜11時10分に8人、ご飯の代わりにビールのセット、唐揚げビール定食900円、開店10分前に10人。',
      confidence: 'medium', sources: [TB, R + 'B449973094/', R + 'B517558847/', R + 'B536808071/', R + 'B537157136/', R + 'B537534525/', R + 'B537725440/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders taken in the lunch line; friendly staff (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-8-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目8番3号 (go) 4m; next door to PIENO vivace (~20 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536808071/', R + 'B537534525/', R + 'B537725440/'],
    price_note: 'Lunch prices from September–October 2026 reviews; evening prices not reported.', last_checked: TODAY, items: [
      it('', '', 'Niku dashimaki set meal (lunch)', '¥900', 'Lunch', 'no', 'no', 'October 2026; rice refills.', 'niku_dashimaki'),
      it('', '', 'Kara-age beer set (lunch, beer instead of rice)', '¥900', 'Lunch', 'no', 'no', 'October 2026.', 'karaage_beer'),
      it('', '', 'Assorted obanzai, 5 kinds', '', 'Evening', 'no', 'no', 'October 2026.', 'obanzai5'),
      it('', '', 'Thick-cut ham katsu', '', 'Evening', 'no', 'no', 'October 2026.', 'ham_katsu'),
      it('', '', 'Dashimaki tamago', '', 'Evening', 'no', 'no', 'September 2026.', 'dashimaki'),
      it('', '', 'Chikuwa tempura with shibazuke tartare', '', 'Evening', 'no', 'no', 'March 2026.', 'chikuwa_ten'),
      it('', '', 'Onigiri and tonjiru set', '', 'Evening', 'no', 'no', 'March 2026.', 'onigiri_set'),
    ] }, {
    cuisine: 'おばんざいのカウンター居酒屋・昼の定食900円: 6種から選ぶメイン(ふわふわのだし巻きに甘辛い牛肉をのせた肉だし巻き、唐揚げなど)におばんざい3〜4種、刺身少し、豚汁、ご飯おかわり可、ご飯を生ビールに替えるビールセットも・夜: おばんざい「5種」盛り(よく6種)・だし巻きや和牛の玉子焼き・厚切りハムカツ・ちくわ天のしば漬けタルタル・げそ天のあおさマヨ・アジフライ・明太子とあおさのスパゲッティサラダ・赤海老の酢味噌・肉豆腐・タン焼き・おにぎりと豚汁のセット・ハイボール、八丈島の焼酎・カウンター12席',
    neighborhood: '中央区難波4-8-3、裏なんばの路地。大阪難波駅から80m',
    gf_detail: 'グルテンフリーではありません。全体に出汁と醤油の味付け、唐揚げ、ハムカツ、アジフライ、天ぷら、スパゲッティサラダ。',
    vegan_detail: 'ヴィーガンではありません。おばんざいとだし巻きの出汁、牛肉、豚汁、魚介。',
    notes: '[居酒屋・裏なんば、900円の肉だし巻き定食のおばんざいカウンター] 裏なんばの路地のカウンター12席の店で、2020年開店、昼と夜でふたつの顔。昼は開店前から900円の定食に行列: 6種のメインから選び、いちばん有名なのはふわふわの焼きたてだし巻きに甘辛い牛肉をのせた肉だし巻き、おばんざい、少しの刺身、大きな豚汁、ご飯おかわり付き。ご飯を生ビールに替えることも。注文は並んでいる間に。夜は入りやすく気さくな居酒屋で、常連いわくいつも6種出てくる「5種」のおばんざい盛り、厚切りハムカツ、しば漬けタルタルのちくわ天、だし巻き、ハイボールを。この名前の本店。PayPayか現金。',
  });
}

// ================================================================ 天ぷら 心斎橋 一哲
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27107991/'; const R = TB + 'dtlrvwlst/';
  const DN = ['17:30', '22:00']; const L = ['11:30', '14:00'];
  put({
    id: 'osaka_tempura_shinsaibashi_ittetsu', name: '天ぷら 心斎橋 一哲 (Tempura Shinsaibashi Ittetsu)', category: 'OMNI',
    lat: 34.672504, lng: 135.502234, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour tempura batter is the meal; tentsuyu dipping sauce; curry finish option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, fish, wagyu and sea urchin in the course; ikura rice.',
    hours_raw: 'Wed–Thu 17:30–22:00 (food L.O. 20:30); Fri–Sun and public holidays 11:30–14:00 (food L.O. 13:00) and 17:30–22:00 (L.O. 20:30); closed Mon and Tue (next day if a holiday) (Tabelog). 10% service charge; same-day cancellation fee (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) accepted; no e-money or QR (Tabelog).',
    hours: { 2: day(DN), 3: day(DN), 4: day(L, DN), 5: day(L, DN), 6: day(L, DN) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-5-3, Hoei Bldg 1F — 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Counter tempura courses · lunch courses ¥7,700 (with a drink) and ¥10,000; spend up to ¥15,000–20,000 (reviews) · the day\'s ingredients shown first · course opens with two shrimp, crisp shrimp heads · seasonal fish and vegetables, sweet potato (Beni Haruka), autumn matsutake as tempura or dobin-mushi with scallop and ginkgo · three salts and tentsuyu, with a suggestion for each piece · finish: four choices incl. tendon and curry; freshly cooked rice with ikura · dessert: fluffy shaved ice of slow-frozen house ice and dandelion coffee · 8 counter seats and a table for four',
    website: null, gmaps: gm('天ぷら 心斎橋 一哲'), menu_url: null,
    notes: "[Tempura · counter tempura courses with a shaved-ice finish in Shinsaibashi] A calm twelve-seat tempura counter on Shinsaibashi-suji, open since 2018, the second shop of Tempura Osakaya Kusatetsu in Fukushima. Courses begin with a look at the day's ingredients, then two shrimp, fried one piece at a time in front of you, with three salts and tentsuyu and a suggestion for each. In autumn there's matsutake as tempura or a dobin-mushi with scallop and ginkgo, and one diner called the Beni Haruka sweet potato the best tempura sweet potato ever eaten. Finish with tendon, curry or rice with ikura, then a fluffy shaved ice and dandelion coffee. Lunch on Friday to Sunday is the way in: courses from ¥7,700 with a drink, or ¥10,000; reviewers' spend ran up to ¥15,000–20,000. Explanations are thorough. 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 November 2018 (Tabelog)', background: 'Second shop of Tempura Osakaya Kusatetsu in Fukushima, Osaka (August and October 2026 reviews).', philosophy: 'Ingredients such as Nagasaki live shrimp, A5 wagyu fillet, Nemuro sea urchin and young ayu; house-treated water adjusted per ingredient; shaved ice from house ice frozen over two days (as listed by an October 2026 reviewer).', specialty: 'Tempura course; shaved-ice dessert.',
      anecdotes: [
        { text: '"First, they present the tempura options for the day… There are three types of salt and a dipping sauce available… The course began with two shrimp… The dessert was quite unique, featuring shaved ice and dandelion coffee." — September 2026, lunch course ¥7,700.', source: R + 'B536381934/' },
        { text: '"I was offered a choice between tempura and dobin mushi for the matsutake mushroom… the sweet potato (today it was Beni Haruka) was the best tempura sweet potato I have ever had!" — October 2026, lunch.', source: R + 'B537661164/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 心斎橋 一哲、大阪市中央区心斎橋筋1-5-3 宝栄ビル 1F、御堂筋線心斎橋駅6番出口から徒歩3分、水・木 17:30〜22:00、金〜日・祝 11:30〜14:00・17:30〜22:00、月・火休み(祝日の場合は翌日)、サービス料10%、当日キャンセル料、カード可、電子マネー・QR不可、12席(カウンター8、テーブル4)、2018年11月20日開店。口コミ(2026年8〜10月): 姉妹店、ランチコース10,000円、海老、かき氷のデザート、福島の天ぷら Osakaya Kusatetsuの2号店、ランチコース7,700円(ドリンク1杯付き)、最初にその日の素材を見せる、塩3種と天つゆ、どれで食べるかおすすめ、海老2尾から、締めは天丼やカレーなど4種から、かき氷とたんぽぽコーヒー、長崎の活け海老、A5の黒毛和牛ヒレ、根室などの雲丹、稚鮎、自家製の活性水、海老の頭、2日かけて凍らせた自家製氷のかき氷、松茸は天ぷらか土瓶蒸し、帆立と銀杏、炊きたてご飯にいくら、紅はるかのさつまいも、丁寧な説明、誕生日のデザート。',
      confidence: 'medium', sources: [TB, R + 'B534180543/', R + 'B534806924/', R + 'B536381934/', R + 'B537318736/', R + 'B537661164/', R + 'B538018702/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Thorough explanations of each ingredient (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-5-3 宝栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026; OSM node 天ぷら 心斎橋 一哲 1 m.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目5番3号 (go) 7m; OSM node/7983259902 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534180543/', R + 'B536381934/'],
    price_note: 'Lunch course prices from August–September 2026 reviews; plus 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch tempura course (with a drink)', '¥7,700', 'Course', 'no', 'no', 'September 2026.', 'lunch_7700'),
      it('', '', 'Lunch tempura course', '¥10,000', 'Course', 'no', 'no', 'August 2026.', 'lunch_10000'),
      it('', '', 'Matsutake dobin-mushi (autumn, add-on)', '', 'Seasonal', 'no', 'no', 'October 2026.', 'dobin'),
    ] }, {
    cuisine: 'カウンターの天ぷらのコース・昼のコース7,700円(ドリンク付き)と10,000円、15,000〜20,000円という声も・最初にその日の素材を見せる・海老2尾から、香ばしい海老の頭・旬の魚と野菜、紅はるかのさつまいも、秋は松茸を天ぷらか帆立と銀杏の土瓶蒸しで・塩3種と天つゆ、一品ごとにおすすめ・締めは天丼やカレーなど4種、炊きたてご飯にいくら・デザートはゆっくり凍らせた自家製氷のふわふわのかき氷とたんぽぽコーヒー・カウンター8席と4人席',
    neighborhood: '中央区心斎橋筋1-5-3 宝栄ビル 1F。心斎橋駅6番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦粉の天ぷらの衣が中心、天つゆ、締めのカレー。',
    vegan_detail: 'ヴィーガンではありません。コースに海老、魚、和牛、雲丹、いくらご飯。',
    notes: '[天ぷら・心斎橋、かき氷で締めるカウンターの天ぷらコース] 心斎橋筋の落ち着いた12席の天ぷらのカウンターで、2018年開店、福島の天ぷら Osakaya Kusatetsuの2号店。コースはその日の素材を見せてから始まり、海老2尾、目の前で一品ずつ揚げ、塩3種と天つゆ、それぞれのおすすめ付き。秋は松茸を天ぷらか帆立と銀杏の土瓶蒸しで、紅はるかのさつまいもを人生でいちばんと書いた人も。締めは天丼、カレー、いくらご飯から、そしてふわふわのかき氷とたんぽぽコーヒー。入りやすいのは金〜日の昼: ドリンク付き7,700円か10,000円のコース、15,000〜20,000円使ったという声も。説明が丁寧。サービス料10%。',
  });
}

// ================================================================ 鳥しん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012744/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_tori_shin_higashi_shinsaibashi', name: '鳥しん (Tori Shin)', category: 'OMNI',
    lat: 34.671326, lng: 135.504549, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on skewers; ponzu; fried gizzards and tulip wings; noodle finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken in every course; chicken-bone mizutaki broth.',
    hours_raw: 'Mon–Sat and days before/after holidays 18:00–24:00, from 17:00 with a reservation; closed Sun and public holidays; may close early when ingredients run out (Tabelog). Seating limited to 2½ hours when busy; three-item otoshi ¥660 (Tabelog). Cards incl. UnionPay, QUICPay and QR accepted (Tabelog). Lively and loud (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-4-19, Tamayamachi Galaxy Bldg No. 3 1F, down an alley — 5 min from Nipponbashi Stn, 7 min from Shinsaibashi or Namba',
    cuisine: 'Hakata mizutaki and yakitori · Hakata mizutaki (reserve ahead): rich, creamy collagen broth that arrives as a solid block and melts, yuzu-kosho and ponzu on the side, zosui or noodles to finish · chicken sashimi, five kinds · chicken tataki · salt-grilled skewers; tsukune with egg yolk · fried tulip wings · fried gizzards · grilled rice balls · otoshi of three ¥660 · 7 counter seats, 12 at tables',
    website: null, gmaps: gm('鳥しん 東心斎橋'), menu_url: null,
    notes: "[Yakitori · Hakata mizutaki and yakitori down a Higashi-Shinsaibashi alley] A busy chicken restaurant tucked down an alley in Higashi-Shinsaibashi, running since 2007 and often hard to book. The hot pot is the reason to come: a Hakata mizutaki whose rich, creamy collagen broth arrives as a solid block and melts in the pot, deep and gentle with tender chicken; finish with zosui or noodles, and reserve it ahead. Around it, there's a five-kind chicken sashimi plate with no off flavors, tataki, salt-grilled skewers, tsukune with egg yolk, fried gizzards and fried tulip wings the size of a KFC piece. Portions are big. Service is quick and the room loud enough that one diner couldn't hear the table. Seating is capped at 2½ hours when busy; ¥660 otoshi.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 October 2007 (Tabelog)', background: 'Yakitori and mizutaki restaurant (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Hakata mizutaki; yakitori.',
      anecdotes: [
        { text: '"The recommended hot pot features a broth rich in chicken flavor, delivering a deep and gentle taste from the very first bite… worth visiting primarily for the hot pot." — April 2026.', source: R + 'B138089103/' },
        { text: '"The broth for the hot pot comes in a solid block! As it melts, it transforms into a rich and flavorful broth. I also love the fried chicken gizzards here." — September 2025.', source: R + 'B514577744/' },
      ],
      japanese_sources_summary: '食べログ: 鳥しん、大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館1F、御堂筋線心斎橋・なんば駅から徒歩7分、日本橋駅から5分、長堀橋から393m、月〜土・祝前日・祝後日 18:00〜24:00(予約客は17:00から)、日・祝休み、食材がなくなり次第閉店の場合あり、混雑時は2時間30分制、ネット予約は電話で確認、お通し3種660円、カード(銀聯含む)・QUICPay・QR可、19席(カウンター7、テーブル12)、2007年10月10日開店。口コミ(2025年9月〜2026年10月): 鶏の旨みたっぷりの鍋、締めはご飯か麺、焼き鳥も安定、鍋のスープは固形で溶けると濃厚に、砂肝の唐揚げ、接客が気持ちいい、人気の博多水炊きは予約で、濃厚な白湯、お造り5種は臭みなし、塩の串、卵黄の月見つくね、柚子胡椒とポン酢、2人で満腹、路地の奥の隠れ家、コラーゲン鍋、人気でなかなか入れない、一品が大きい、チューリップ、雑炊、当日予約できた、たたき、焼きおにぎり、提供が早い、スタッフの声が大きい。',
      confidence: 'medium', sources: [TB, R + 'B138089103/', R + 'B514577744/', R + 'B517306123/', R + 'B518246637/', R + 'B518406519/', R + 'B538077118/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online bookings are confirmed by phone (Tabelog); quick service (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目4番19号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517306123/', R + 'B518406519/', R + 'B538077118/'],
    price_note: 'Item prices not reported; spend about ¥5,000–8,000 per person (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Hakata mizutaki (reserve ahead)', '', 'Hot pot', 'no', 'no', 'November 2025.', 'mizutaki'),
      it('', '', 'Chicken sashimi, five kinds', '', 'Sashimi', 'no', 'no', 'November 2025.', 'sashimi5'),
      it('', '', 'Tsukune with egg yolk', '', 'Skewers', 'no', 'no', 'November 2025.', 'tsukune'),
      it('', '', 'Fried tulip wings', '', 'Fried', 'no', 'no', 'October 2025.', 'tulip'),
      it('', '', 'Fried gizzards', '', 'Fried', 'no', 'no', 'September 2025.', 'sunagimo'),
      it('', '', 'Chicken tataki', '', 'Sashimi', 'no', 'no', 'October 2026.', 'tataki'),
      it('', '', 'Grilled rice balls', '', 'Rice', 'no', 'no', 'October 2026.', 'yaki_onigiri'),
      it('', '', 'Otoshi (three kinds)', '¥660', 'Charge', 'no', 'no', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '博多水炊きと焼き鳥・博多水炊き(要予約): 固形で届き溶けると濃厚でクリーミーなコラーゲンのスープ、柚子胡椒とポン酢、締めは雑炊か麺・鶏のお造り5種・鶏のたたき・塩の串、卵黄の月見つくね・チューリップの唐揚げ・砂肝の唐揚げ・焼きおにぎり・お通し3種660円・カウンター7席、テーブル12席',
    neighborhood: '中央区東心斎橋2-4-19 玉屋町ギャラクシービル3号館 1F、路地の奥。日本橋駅から5分、心斎橋・なんばから7分',
    gf_detail: 'グルテンフリーではありません。串のたれ、ポン酢、砂肝とチューリップの唐揚げ、締めの麺。',
    vegan_detail: 'ヴィーガンではありません。どの料理も鶏、鶏ガラの水炊きのスープ。',
    notes: '[焼き鳥・東心斎橋の路地の奥、博多水炊きと焼き鳥] 東心斎橋の路地の奥にあるにぎやかな鶏料理の店で、2007年から、予約が取りにくいことも。目当ては鍋: 濃厚でクリーミーなコラーゲンのスープが固形で届き鍋で溶ける博多水炊きで、深くやさしい味に柔らかい鶏。締めは雑炊か麺、水炊きは予約を。ほかに臭みのない鶏のお造り5種、たたき、塩の串、卵黄の月見つくね、砂肝の唐揚げ、ケンタッキーほどの大きさのチューリップの唐揚げ。量は多め。提供は早く、店内は同じテーブルの声が聞こえないほどにぎやかという声も。混雑時は2時間半制、お通し660円。',
  });
}

save();
