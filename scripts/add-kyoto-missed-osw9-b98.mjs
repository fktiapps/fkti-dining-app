// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 98.
// Core and notable have nothing left in the lane; rest list, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 田淵薬膳研究所 — the chef's counter of ルーデンス (LUDENS), already covered by kyoto_ludens (same address_ja 夷町560-8)
//   + 京富庵 Kyotomian (Omi black-chicken mizutaki and chicken kaiseki in a machiya off Aburakoji-Shijo; since April 2010)
//   - DECOの朝ご飯 — too thin to verify: a Sunday/Monday breakfast pop-up inside another shop; no hours on Tabelog; two Sept 2025 reviews
//   + cité (café with light-roast coffee and pound cakes at the front of a vintage shop, near Shichijo Stn)
//   + 高島麦酒 Takashima Brewery (taproom for its own Shiga spring-water craft beer, north of Kyoto Stn)
//   + IL TOBANCHI (dog-friendly Italian bar in a renovated machiya on Ogawa-dori south of Sanjo; since July 2012)
//   Brand checks: queue-status.jsonl and data/*.json grepped for 富庵, Kyotomian, TOBANCHI, トバンキ, 高島麦酒, Takashima, cité, DECO, 田淵
//   — no earlier rulings; web search for IL TOBANCHI and 高島麦酒 shows one shop each.
//   Service charges (Tabelog Japanese original): IL TOBANCHI お1人様１ドリンク制、クレジットカードは4000円以上; 高島麦酒 チャージ料無し.
//   Pins: Tabelog /en/ geo; nearest main records 25–95m; no offsets (not OSM-checked: the integrator pin-checks this round).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043959', 'covered by kyoto_ludens: 田淵薬膳研究所 is the chef\'s counter of ルーデンス (LUDENS) at the same address (夷町560-8); the LUDENS record\'s hours_raw already describes "Chef\'s counter \\"田淵薬膳研究所\\"", and an April 2026 review says the chef works upstairs while the sommelier runs the ground floor');
skip('26043761', 'too thin to verify: a breakfast pop-up on Sundays and Mondays inside another shop (September 2025 reviews); Tabelog gives no hours; only two reviews, both September 2025');

// ================================================================ 京富庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26016029/'; const R = TB + 'dtlrvwlst/';
  const OS = 'https://kyotomian.main.jp/'; const OM = OS + 'menu.html';
  const D = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyotomian_aburakoji', name: '京富庵 (Kyotomian)', category: 'MOM_AND_POP',
    lat: 35.00402664250484, lng: 135.75360668601556, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The mizutaki broth is made with chicken, soy sauce and garlic (March 2026 review) and the ponzu is house-made (December 2024); tempura, chicken katsu, fried tsukune, udon and curry are on the menu (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — chicken hot pots, chicken sashimi and chicken rice bowls (official site; 2024–26 reviews).',
    hours_raw: 'Mon–Wed and Fri–Sun 11:30–14:30 and 17:00–22:00 (L.O. 21:30); closed Thursdays, but open on Thursdays for bookings of 8 or more (Tabelog; the official site gives the same hours and Thursday closing). New Year on the official site: 30 Dec 17:00–22:00, 31 Dec 17:00–21:00, closed 1–2 Jan, 3 Jan 17:00–22:00, 6 Jan closed in lieu. Bookings taken; 100% fee for same-day cancellations (Tabelog). Cards accepted, no e-money or QR (Tabelog). 30 seats: counter, tables, sunken kotatsu seats on the ground floor and private tatami rooms upstairs; the upper floor can be booked whole (Tabelog). Shoes off inside (December 2024 review). Children welcome; okuizome (baby\'s first meal) celebrations (Tabelog). Down a narrow lane behind a noren on Aburakoji-dori north of Shijo; 6–7 min from Shijo-Omiya or Shijo-Karasuma (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburakoji-Shijo — 6 min from Shijo-Omiya',
    cuisine: 'Chicken restaurant: Omi black-chicken (近江黒鶏) mizutaki course ¥8,800 — soup, hassun, fried tsukune, chicken wings, zosui, dessert; sukiyaki ¥8,800; chicken chanko ¥6,050; Yasaka course ¥5,500; owner\'s omakase course ¥8,800 (official site, tax incl.). Lunch: chicken sashimi and tempura set ¥1,980; toriwasa-don, oyako-don, yakitori-don, tsukune-don, chicken katsu-don, chicken hamburg, curry udon ¥1,650 each; Nishiki course ¥2,750 (official site). Toriwasa-don ¥1,540 with soup, side, red miso soup, pickles and sorbet (June 2026); oyako-don ¥1,650 (November 2026); hiyashi ramen with chicken chashu (July 2026); autumn course with matsutake dobin-mushi and matsutake rice (October 2026); omakase course with all-you-can-drink ¥11,000 (November 2026)',
    website: OS, gmaps: gm('京富庵 京都 油小路'), menu_url: OM,
    notes: '[Chicken · Aburakoji-Shijo] A machiya at the end of a softly lit stone path, where staff cook the Omi black-chicken mizutaki at the table and finish it with a creamy zosui. Lunch is chicken rice bowls — toriwasa-don and oyako-don — at about ¥1,650; dinner courses about ¥5,500–11,000.',
    chef_bio: { chef_name: '宇野 富雄', roles: ['大将 (head chef), named on the official site'], origin: null,
      background: 'Opened 24 April 2010 (Tabelog). A July 2026 reviewer writes that the owner comes from the famous "Hachi Ki An" (the review\'s English) and makes good obanzai.',
      philosophy: 'Kyoto dining at a price everyone can enjoy, in a space for children and elders alike (official site).',
      specialty: 'Omi black-chicken mizutaki; toriwasa-don; oyako-don.',
      anecdotes: [
        { text: 'A November 2026 diner had the oyako-don at lunch and came back that evening with three business partners for the ¥11,000 omakase with all-you-can-drink — and called it the best oyako-don of more than 50 years.', source: R + 'B539972939/' },
        { text: 'In September 2025 the lingering summer heat kept chicken sashimi off the menu, so a sightseer had the toriwasa-don instead and planned to return in winter for the sashimi.', source: R + 'B514571110/' },
        { text: 'A family booked an upstairs private room in February 2026 for a daughter\'s okuizome, with the okuizome course for the baby and the Yasaka course for the adults.', source: R + 'B523219143/' },
        { text: 'A March 2026 couple enjoyed the Nishiki lunch course but were not pleased with how staff handled the dishes when clearing.', source: R + 'B525209894/' },
      ],
      japanese_sources_summary: '公式サイト: 京富庵 [きょうとみあん]、京都 鶏料理、中京区油小路通四条上る藤本町560番地、大将 宇野 富雄、11:30〜14:30・17:00〜22:00、木曜定休。名物 水炊き [近江黒鶏] 8,800円 (スープ、八寸、つくね揚げ、手羽先、雑炊、デザート)、すき焼き 8,800円、とりのちゃんこ 6,050円、コース 八坂 5,500円、店主のお勧め 8,800円。昼御膳: とりわさ丼、親子丼、焼き鳥丼、つくね丼 各1,650円、コース 錦 2,750円 (税込)。食べログ: 30席、カード可、2010年4月24日オープン、お食い初め。口コミ (2024〜2026年、英語): 小路の奥の町屋、お店の人が鍋を仕上げる、自家製のポン酢、雑炊、とりわさ丼1,540円 (2026年6月)、親子丼1,650円 (2026年11月)。',
      confidence: 'medium', sources: [OS, OM, TB, R + 'B497681660/', R + 'B514571110/', R + 'B522111194/', R + 'B523219143/', R + 'B524071525/', R + 'B525209894/', R + 'B528325306/', R + 'B530092221/', R + 'B531373921/', R + 'B536435633/', R + 'B536937182/', R + 'B539972939/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook the hot pot at the table and say when to eat (2024–26 reviews); phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油小路通四条上ル藤本町560',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current hours; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004027, 135.753607); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OM, R + 'B530092221/', R + 'B539972939/'],
    price_note: 'Official site menu (tax included), read November 2026; a June 2026 review paid ¥1,540 for the toriwasa-don.', last_checked: TODAY, items: [
      it('水炊き [近江黒鶏]', '', 'Mizutaki course, Omi black chicken', '¥8,800', 'Course', 'ask', 'no', 'Soup, hassun, fried tsukune, chicken wings, zosui, dessert.', 'mizutaki'),
      it('すき焼き [近江黒鶏]', '', 'Sukiyaki course, Omi black chicken', '¥8,800', 'Course', 'ask', 'no', 'Official site.', 'sukiyaki'),
      it('とりのちゃんこ [近江黒鶏]', '', 'Chicken chanko course', '¥6,050', 'Course', 'ask', 'no', 'Official site.', 'chanko'),
      it('コース 八坂', '', 'Yasaka course', '¥5,500', 'Course', 'ask', 'no', 'Official site.', 'yasaka'),
      it('とりわさ丼', '', 'Toriwasa-don (chicken with wasabi)', '¥1,650', 'Lunch', 'ask', 'no', 'Official site; ¥1,540 in a June 2026 review.', 'toriwasa'),
      it('親子丼', '', 'Oyako-don', '¥1,650', 'Lunch', 'ask', 'no', 'Official site; same price in a November 2026 review.', 'oyakodon'),
      it('コース 錦', '', 'Nishiki lunch course', '¥2,750', 'Lunch', 'ask', 'no', 'Official site.', 'nishiki'),
    ] }, {
    cuisine: '鶏料理: 名物の近江黒鶏の水炊き 8,800円 (スープ、八寸、つくね揚げ、手羽先、雑炊、デザート)、すき焼き 8,800円、とりのちゃんこ 6,050円、コース 八坂 5,500円、店主のお勧めのコース 8,800円 (公式サイト、税込)。昼はとりのお造りと天ぷらの御膳 1,980円、とりわさ丼、親子丼、焼き鳥丼、つくね丼、とりカツ丼、チキンハンバーグ、カレーうどん 各1,650円、コース 錦 2,750円 (公式サイト)。とりわさ丼 1,540円 (スープ、小鉢、赤だし、香の物、シャーベットつき、2026年6月)、親子丼 1,650円 (2026年11月)、鶏チャーシューの冷やしラーメン (2026年7月)、秋の松茸の土瓶蒸しと松茸ごはんのコース (2026年10月)、飲み放題つきのおまかせコース 11,000円 (2026年11月)',
    neighborhood: '油小路四条。四条大宮駅から徒歩6分',
    gf_detail: '要確認。水炊きのスープは鶏としょうゆとにんにく (2026年3月の口コミ)、ポン酢は自家製 (2024年12月)。天ぷら、とりカツ、つくね揚げ、カレーうどんなどもある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。鶏料理の店。鶏の鍋、とりのお造り、鶏の丼 (公式サイト、2024〜26年の口コミ)。',
    notes: '[鶏料理・油小路四条] 小路の奥、やわらかな灯りの石畳の先の町屋。近江黒鶏の水炊きはお店の人が卓で仕上げ、最後はとろりとした雑炊。昼はとりわさ丼や親子丼が1,650円ほど、夜のコースは5,500〜11,000円ほど。',
  });
}

// ================================================================ cité
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041445/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:30', '17:00']);
  put({
    id: 'kyoto_cite_cafe_shichijo', name: 'cité', category: 'OMNI',
    lat: 34.99126494264729, lng: 135.76480424143094, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee and lattes with pound cakes and a chestnut cake (2024–26 reviews); no ingredient information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and iced coffee (2025–26 reviews); lattes use milk unless a substitute is offered (not stated); cake ingredients not stated.',
    hours_raw: 'Mon and Thu–Sun 8:30–17:00; closed Tuesdays and Wednesdays; closing days may vary; hours and closing days may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No reservations (Tabelog). Café seats at the front, a vintage shop of clothing, accessories and tableware at the back; takeaway coffee (2025–26 reviews). 350 m from Shichijo Stn (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shichijo — 350 m from Shichijo Stn',
    cuisine: 'Coffee from about five beans, mostly light roasts: hot café latte ¥600 and chestnut cake ¥440 (January 2025); cortado (May 2026); iced coffee with almond pound cake (May 2026); strawberry iced latte with orange-chocolate pound cake (April 2024)',
    website: null, gmaps: gm('cité カフェ 下京区 紺屋町'), menu_url: null,
    notes: '[Café · Shichijo] A coffee counter at the front of a vintage shop: light-roast lattes, a cortado and simple pound cakes, with clothes from vintage T-shirts to CELINE to browse while you wait. Under ¥1,000; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A café in front of a vintage shop selling clothing, accessories and tableware (2025–26 reviews).',
      philosophy: null,
      specialty: 'Light-roast coffee; pound cakes.',
      anecdotes: [
        { text: 'A May 2026 visitor browsed racks from CELINE to vintage T-shirts while the coffee was made, then took it to go for a walk along the Kamo River.', source: R + 'B527962603/' },
        { text: 'In April 2024 a passer-by asked about the hours, came back later, and drank a strawberry iced latte on a chair outside.', source: R + 'B487391920/' },
        { text: 'A February 2025 visitor liked the coffee but warned that the chairs were wobbly.', source: R + 'B503566413/' },
      ],
      japanese_sources_summary: '食べログ: cité、カフェ、下京区紺屋町375-4、七条駅から350m、月・木〜日 8:30〜17:00、火・水休み、休みは変わることがある、現金のみ、予約不可。口コミ (2024〜2026年、英語): 前がカフェで奥が古着と雑貨の店、浅煎り中心の豆が5種ほど、カフェラテ600円、栗のケーキ440円 (2025年1月)、コルタード、アーモンドのパウンドケーキ (2026年5月)、持ち帰りも。',
      confidence: 'medium', sources: [TB, R + 'B487391920/', R + 'B495166497/', R + 'B503566413/', R + 'B527616003/', R + 'B527962603/', R + 'B529570761/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm, kind staff (May 2026 review); order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区紺屋町375-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; three reviews dated May 2026.' },
    pin_source: `Tabelog ${TB} (34.991265, 135.764804); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495166497/'],
    price_note: 'Prices from a January 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Hot café latte', '¥600', 'Drinks', 'ask', 'ask', 'January 2025 review.', 'latte'),
      it('', '', 'Chestnut cake', '¥440', 'Sweets', 'ask', 'ask', 'January 2025 review.', 'chestnut_cake'),
    ] }, {
    cuisine: 'コーヒー、浅煎り中心の豆が5種ほど: ホットのカフェラテ600円と栗のケーキ440円 (2025年1月)、コルタード (2026年5月)、アイスコーヒーとアーモンドのパウンドケーキ (2026年5月)、いちごのアイスラテとオレンジとチョコのパウンドケーキ (2024年4月)',
    neighborhood: '七条。七条駅から350m',
    gf_detail: '要確認。コーヒーとラテ、パウンドケーキや栗のケーキ (2024〜26年の口コミ)。材料の情報はない。',
    vegan_detail: '要確認。ブラックとアイスコーヒー (2025〜26年の口コミ)。ラテは牛乳入り、ほかのミルクがあるかは不明。ケーキの材料も不明。',
    notes: '[カフェ・七条] 古着屋の店先のコーヒーカウンター。浅煎りのラテやコルタードと素朴なパウンドケーキ。待つ間にヴィンテージの T シャツから CELINE まで見て回れる。1,000円以下、現金のみ。',
  });
}

// ================================================================ 高島麦酒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26032967/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ001284510/'; const IG = 'https://www.instagram.com/takashimabrewerybeer/';
  const D = day(['14:00', '20:00']);
  put({
    id: 'kyoto_takashima_brewery_gojo', name: '高島麦酒 (Takashima Brewery)', category: 'OMNI',
    lat: 34.99255806787781, lng: 135.7609961002359, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer taproom — IPA, pale ale, weizen and porter (Hot Pepper); ask about the sake and cocktails.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Beer, sake and cocktails; snacks not described in recent reviews.',
    hours_raw: 'Wed–Sun 14:00–20:00 (L.O. 19:30), per the shop\'s Instagram post of 31 July 2026 (shown on Hot Pepper); Tabelog and Hot Pepper list Wed–Sun 12:30–18:30 (L.O. 18:00). Closed Mondays, Tuesdays and holidays (Tabelog). No cover charge (Tabelog; Hot Pepper) — a March 2024 reviewer paid a ¥300 charge. Cards, e-money and PayPay; also LINE Pay, WeChat Pay, Alipay and UnionPay (Tabelog). 21 seats (8 at the counter, 13 at tables) and a terrace; non-smoking; takeaway (Tabelog; Hot Pepper). On the ground floor of Racine home 京都, a hotel, about 10 min north of Kyoto Stn along Higashinotoin-dori, 338 m from Gojo Stn (Tabelog; March 2024 review).',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, north of Kyoto Stn — 338 m from Gojo Stn',
    cuisine: 'House craft beer brewed with 生水, the spring water of Harie in Takashima, Shiga: four taps — IPA, pale ale, weizen, porter — half ¥900 / pint ¥1,200, four-beer tasting set ¥1,500, Takashima sake ¥700 a glass (Hot Pepper menu); IPA half ¥700 (March 2024); strawberry beer and a three-beer tasting (May 2026); ale and cocktails (August 2026); seasonal apple beer from September 2026 (Instagram)',
    website: IG, gmaps: gm('高島麦酒 京都 上珠数屋町'), menu_url: HP,
    notes: '[Craft beer · north of Kyoto Stn] A small taproom on the ground floor of a hotel, pouring its own beer brewed with Harie spring water from Takashima, Shiga, plus Takashima sake — with denim clothing for sale alongside. Half pints about ¥900; no cover charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'In 2020–21 reviews the shop was a sake bar of Shiga food — ton-chan-yaki ¥700, cheese funazushi ¥600 (March 2021), a six-sake tasting of 40ml cups ¥1,300 (October 2020). An October 2020 reviewer wrote that the owner runs an apparel company and started the bar beside that shop; a March 2021 reviewer met the owner and learned the owner is from Ehime. By March 2024 it poured its own Takashima beer (review). Denim clothing and bags are sold in the shop (March 2025 review).',
      philosophy: 'Drop in for just one drink on a walk or on the way home from work (Tabelog; Hot Pepper).',
      specialty: 'House craft beer; Takashima sake.',
      anecdotes: [
        { text: 'A March 2025 visitor came for the craft beer and left with several pieces of denim clothing and a bag.', source: R + 'B504499788/' },
        { text: 'In May 2026 the dark beer was sold out, so a three-beer tasting became a comparison of two — the strawberry beer was the favourite.', source: R + 'B535919497/' },
        { text: 'A March 2024 visitor found the IPA light on hops and was put off by the ¥300 charge with a dish of kaki-pi.', source: R + 'B481927721/' },
      ],
      japanese_sources_summary: '食べログ: 高島麦酒、ビアバー、下京区上珠数屋町334 Racine home 京都 1F、五条駅から338m、水〜日 12:30〜18:30、月・火・祝日休み、チャージ料無し、カード・電子マネー・PayPay 可、21席、テラス、禁煙。ホットペッパー: 滋賀県高島市の針江の湧水「生水」で仕込んだクラフトビール、IPA、Pale Ale、Weizen、Porter の4種、ハーフ900円、パイント1,200円、4種飲み比べ1,500円、日本酒グラス700円、ノーチャージ。Instagram (2026年7月31日): 水〜日 14:00〜20:00 (L.O. 19:30)。口コミ (英語): 2020〜21年は滋賀の料理と日本酒の店、2024年3月には自家製ビール、デニムの服も販売 (2025年3月)、いちごのビール (2026年5月)。',
      confidence: 'medium', sources: [TB, HP, IG, R + 'B431361674/', R + 'B436272310/', R + 'B481927721/', R + 'B504499788/', R + 'B533899826/', R + 'B535919497/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Solo drinkers welcome at the counter (Hot Pepper); payment by WeChat Pay, Alipay and UnionPay (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上珠数屋町334 Racine home 京都 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Instagram posts through September 2026 (shown on Hot Pepper); Tabelog reviews dated August 2026.' },
    pin_source: `Tabelog ${TB} (34.992558, 135.760996); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [HP],
    price_note: 'Hot Pepper menu (tax included), read November 2026; a March 2024 review paid ¥700 for an IPA half.', last_checked: TODAY, items: [
      it('', '', 'House craft beer, half / pint', '¥900 / ¥1,200', 'Drinks', 'no', 'ask', 'IPA, pale ale, weizen, porter (Hot Pepper).', 'beer'),
      it('４種飲み比べセット', '', 'Four-beer tasting set', '¥1,500', 'Drinks', 'no', 'ask', 'Hot Pepper.', 'tasting'),
      it('日本酒グラス', '', 'Takashima sake, by the glass', '¥700', 'Drinks', 'ask', 'ask', 'Hot Pepper.', 'sake'),
    ] }, {
    cuisine: '針江 (滋賀県高島市) の湧水「生水」で仕込んだ自家製クラフトビール: IPA、ペールエール、ヴァイツェン、ポーターの4種をタップで、ハーフ900円、パイント1,200円、4種飲み比べ1,500円、高島の日本酒グラス700円 (ホットペッパーのメニュー)。IPA ハーフ700円 (2024年3月)、いちごのビールと3種の飲み比べ (2026年5月)、エールとカクテル (2026年8月)、2026年9月から季節のリンゴビール (Instagram)',
    neighborhood: '東洞院、京都駅の北。五条駅から338m',
    gf_detail: 'グルテンフリー不可。クラフトビールの店。IPA、ペールエール、ヴァイツェン、ポーター (ホットペッパー)。日本酒とカクテルは要確認。',
    vegan_detail: '要確認。ビール、日本酒、カクテル。最近の口コミにつまみの記述はない。',
    notes: '[クラフトビール・京都駅の北] ホテルの1階の小さなタップルーム。滋賀県高島市の針江の湧水で仕込んだ自家製ビールと高島の日本酒。デニムの服も売っている。ハーフ900円ほど、チャージなし。',
  });
}

// ================================================================ IL TOBANCHI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26020487/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:30']);
  put({
    id: 'kyoto_il_tobanchi_sanjo', name: 'IL TOBANCHI', category: 'OMNI',
    lat: 35.00821780786578, lng: 135.75445844039868, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta and pizza are central (2024–26 reviews); an ajillo, seseri sautéed in lemon butter and an appetizer platter of potato salad, ratatouille and pâté also appear (November 2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ratatouille on the appetizer platter (November 2025) and grilled Manganji peppers (topped with cheese, August 2026); most dishes have meat, seafood or cheese.',
    hours_raw: 'Mon–Sat and holidays 18:00–22:30 (L.O. 21:30); closed Sundays, or the following Monday when it is a substitute holiday (Tabelog). Often fully booked — book ahead (2025–26 reviews). One drink per person; cards only for bills of ¥4,000 or more; e-money and QR accepted (Tabelog). 31 seats: counter of 7 and tables on the ground floor, tables and a sofa upstairs (Tabelog); a November 2025 reviewer booking through a reservation site saw a ¥7,000 minimum spend for second-floor tables. Dogs welcome inside and on the terrace: say the size and number of dogs when booking, bring a café mat, diapers and a leash; dogs may come in a cart; the shop takes no responsibility for animal allergies or accidents (Tabelog). Children welcome; non-smoking (Tabelog). On Ogawa-dori just south of Sanjo, about 10 min from Nijojo-mae Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ogawa-Sanjo, near Nijo Castle — 10 min from Nijojo-mae Stn',
    cuisine: 'Italian bar plates: a seven-item appetizer platter (smoked daikon potato salad, ratatouille, pâté), seseri sautéed in lemon butter, red snow crab and avocado pizza, carbonara (November 2025); Gorgonzola cream pasta, ajillo, peach cider (November 2024 and 2025); course with all-you-can-drink ¥5,500 (December 2025); orange wine (March 2026); grilled Manganji peppers with cheese, Margherita pizza (August 2026); full bottles of wine; Coco Gourmet meals for dogs (Tabelog)',
    website: null, gmaps: gm('IL TOBANCHI 京都 小川通三条'), menu_url: null,
    notes: '[Italian · Ogawa-Sanjo] A renovated machiya near Nijo Castle where dogs sit in with their owners: an appetizer platter, pizzas and pastas, wine by the bottle, and dog meals too. Often fully booked; about ¥4,000–6,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 2 July 2012 (Tabelog). A stylish renovation of a Kyoto townhouse (November 2024 and March 2026 reviews).',
      philosophy: null,
      specialty: 'Appetizer platter; pasta and pizza; dog-friendly dining.',
      anecdotes: [
        { text: 'In November 2024, when a couple said they were dining with their dog, the meat came without salt and pepper.', source: R + 'B495260340/' },
        { text: 'A June 2026 traveller\'s dog came in a cart, so the staff set a table on the ground floor.', source: R + 'B530726890/' },
        { text: 'A February 2026 pair found the pasta too salty and the appetizer platter disappointing — about ¥9,000 for two with pizza and three drinks — but were glad to sit indoors with their dog.', source: R + 'B523000988/' },
        { text: 'A November 2025 diner felt the background music, with ad breaks, did not suit the room.', source: R + 'B518195038/' },
      ],
      japanese_sources_summary: '食べログ: IL TOBANCHI (イル トバンキ)、バル・イタリアン・バー、中京区小川通三条下る猩々町123、月〜土・祝日 18:00〜22:30 (L.O. 21:30)、日曜休み (振替休日は翌月曜休み)、お1人様1ドリンク制、カードは4,000円以上、31席、犬と一緒に入れる (カフェマット、犬用のおむつ、リード)、犬用のごはん、2012年7月2日オープン。口コミ (2024〜2026年、英語): 町家を改装、前菜の盛り合わせ7種、ゴルゴンゾーラのクリームパスタ、カルボナーラ、ピザ、飲み放題つきのコース5,500円 (2025年12月)、満席のことが多い。',
      confidence: 'medium', sources: [TB, R + 'B495260340/', R + 'B503259133/', R + 'B517628759/', R + 'B517675393/', R + 'B518195038/', R + 'B523000988/', R + 'B526391514/', R + 'B528685966/', R + 'B530726890/', R + 'B534020661/', R + 'B539086992/', R + 'B539337782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff, to dog owners and others alike (March 2025 review); phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区小川通三条下る猩々町123',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008218, 135.754458); not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517628759/'],
    price_note: 'From a December 2025 review; other prices not given in reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,500', 'Course', 'ask', 'ask', 'December 2025 review.', 'course_nomihodai'),
    ] }, {
    cuisine: 'イタリアンのバルの料理: 7種の前菜の盛り合わせ (燻製の大根のポテトサラダ、ラタトゥイユ、パテ)、せせりのレモンバターソテー、紅ズワイガニとアボカドのピザ、カルボナーラ (2025年11月)、ゴルゴンゾーラのクリームパスタ、アヒージョ、ピーチサイダー (2024年11月と2025年11月)、飲み放題つきのコース5,500円 (2025年12月)、オレンジワイン (2026年3月)、万願寺とうがらしのチーズ焼き、マルゲリータ (2026年8月)、ボトルワイン、犬用の Coco Gourmet のごはん (食べログ)',
    neighborhood: '小川三条、二条城の近く。二条城前駅から徒歩10分',
    gf_detail: '要確認。パスタとピザが中心 (2024〜26年の口コミ)。アヒージョ、せせりのレモンバターソテー、ポテトサラダ・ラタトゥイユ・パテの前菜 (2025年11月)。',
    vegan_detail: '要確認。前菜のラタトゥイユ (2025年11月)、万願寺とうがらしの焼き物 (チーズのせ、2026年8月)。ほとんどの料理に肉、魚介、チーズ。',
    notes: '[イタリアン・小川三条] 二条城の近く、改装した町家で犬と一緒に食事ができる店。前菜の盛り合わせ、ピザとパスタ、ボトルワイン、犬用のごはんも。満席のことが多い、4,000〜6,000円ほど。',
  });
}

save();
