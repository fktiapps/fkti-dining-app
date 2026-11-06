// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 35.
//   + COMFY (matcha stand run by two sisters, Gojo Muromachi)
//   + もうやん Mouyan (weekday-lunch soba counter, 90% and 100% buckwheat, Karasuma Oike)
//   + 割烹 たん義 Kappo Tanyoshi (family kappo since 1964 in Gion Shinmonzen; summer hamo-don)
//   + いなせや Inaseya (standing bar by Kyoto Stn)
//   - skip 26001526 鉄板焼 燔 (Kyoto Brighton Hotel closes at the end of November 2026 — flagged)
//   Same-name counts first, per brand or operator (2026-11-06): COMFY — one. もうやん — one in Kyoto (moved from Kitayama to
//   Karasuma Oike); the Tokyo curry chain もうやんカレー is unrelated. たん義 — one; per its own site the founder’s elder brother
//   received a noren from たん熊 in 1951 and opened たん新, and the founder went independent from たん新 in 1964 as たん義, a
//   family business since; the たん熊 records in data (本家たん熊, たん熊北店) are separate businesses. いなせや — Gurunavi
//   lists 立ちのみいなせや 京都駅前店 and a kushiage いなせや in Joyo, and Tabelog shows 立呑み いなせや in Kyobashi and
//   Umeda (Osaka); an October 2026 review says the operator, Gallant, runs various restaurants in Kyoto. No source shows
//   five or more of the same brand — drafted and flagged.
//   Taken on 2026-11-06: `next core 200` (lane) gave COMFY 26039026 and もうやん 26000362; `next notable 200` (lane) gave
//   燔 26001526 (skip), たん義 26001628 and いなせや 26026420. None is in data/kyoto.json: grep by name and address
//   (藪下町35-2, 西押小路町110-3, 西之町210-2, 真苧屋町220-8) found none.
//   Service charges: いなせや 「なし」 (Tabelog); たん義 5% on dinner courses (official site, お献立); COMFY and もうやん none
//   listed. No halal claims. Owner death: たん義’s founder died in November 1998, per the okami on the official site —
//   recorded as the succession fact (Greg 2026-11-06).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001526', 'closing within weeks (flagged for a ruling): 鉄板焼 燔 is the teppanyaki of the Kyoto Brighton Hotel, which ends operations at the end of November 2026 for a full renovation and plans to reopen in winter 2028 under a Hilton brand (Travel Voice, October 2025: https://www.travelvoice.jp/20251008-158516); September 2026 reviews (https://tabelog.com/en/kyoto/A2601/A260202/26001526/dtlrvwlst/B508925504/, B536034458) also mention the closure.');

// ================================================================ COMFY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039026/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_comfy_matcha', name: 'COMFY', category: 'OMNI',
    lat: 34.999036, lng: 135.756629, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and hojicha drinks, banana cake and frozen yogurt (2024–26 reviews); no gluten information.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some: lattes can be made with oat milk (July 2025), and matcha soda and matcha tonic contain no dairy (2025–26 reviews). Ask about the sweetener and the cakes.',
    hours_raw: 'Mon, Fri–Sun 11:00–20:00; closed Tuesday–Thursday (Tabelog). No reservations (Tabelog). Cards, e-money and QR (Tabelog). Mostly take-away: about 7 seats on a long bench and a small bench, no tables (Tabelog; January 2026), and you can drink inside if you ask (July 2026). Non-smoking (Tabelog). In a quiet residential street near Gojo; 491 m from Gojo Stn (Tabelog). Opened 3 March 2023 (Tabelog).',
    hours: { 0: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo Muromachi, a residential lane — 491 m from Gojo Stn',
    cuisine: 'A Japanese-tea stand: matcha whisked to order in an open kitchen, in regular, strong or double strength, sweetened or not (2025–26 reviews) · matcha latte ¥700 (January 2026); hojicha latte; oat milk on request (July 2025) · matcha tonic ¥650 (June 2025), hojicha tonic, matcha soda (July 2026), matcha banana juice (2024–25) · banana cake, frozen yogurt (2025–26 reviews) · the matcha is YUGEN’s Okumidori from Wazuka (January 2026)',
    website: null, gmaps: gm('COMFY matcha 京都 藪下町'), menu_url: TB,
    notes: '[Matcha stand · Gojo, two sisters’ tea counter in a quiet lane] A stone-and-concrete tea stand a few minutes from the busy streets, run by two sisters who whisk matcha to order — choose the strength and sweetness — for lattes (oat milk on request), matcha soda and tonic, plus banana cake. Mostly take-away, with a bench inside. Closed Tuesday to Thursday.',
    chef_bio: { chef_name: null, roles: ['Run by two sisters, named Sakuna and Nanami in a January 2026 review'], origin: null,
      background: 'Per a January 2026 review: the elder sister, Sakuna, worked in product development at BOOK AND BED TOKYO, and the younger, Nanami, is a pastry chef; the two opened the tea stand together on 3 March 2023. A March 2026 regular noted its third anniversary.',
      philosophy: null, specialty: 'Matcha latte; matcha tonic.',
      anecdotes: [
        { text: 'A January 2026 regular was served alone by "a stylish and beautiful lady", who made the matcha latte a little sweeter on request.', source: R + 'B461822305/' },
        { text: 'A July 2026 visitor walking in 39 °C heat had a matcha soda made with freshly whisked tea, and was drawn into easy conversation by the sisters.', source: R + 'B533280991/' },
        { text: 'An October 2025 visitor recommended it as a quiet place to taste matcha away from the crowded tourist tea shops.', source: R + 'B514956120/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区藪下町35-2、五条駅から491m、月・金〜日11:00〜20:00、火〜木休み、予約不可、カード・電子マネー・QR 可、ベンチ約7席、禁煙、テイクアウト、2023年3月3日オープン。口コミ (2024年11月〜2026年7月、英語): 姉妹で営む抹茶のスタンド、濃さ (普通・濃いめ・ダブル) と甘さを選べる、抹茶ラテ700円、抹茶トニック650円、抹茶ソーダ、抹茶バナナジュース、オーツミルクに変更可、バナナケーキ、和束の YUGEN の抹茶 (おくみどり)。',
      confidence: 'medium', sources: [TB, R + 'B461822305/', R + 'B495361394/', R + 'B500121957/', R + 'B505244085/', R + 'B505778918/', R + 'B508086658/', R + 'B509454001/', R + 'B514956120/', R + 'B523310766/', R + 'B525462622/', R + 'B533280991/', R + 'B534531311/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter and choose strength and sweetness; friendly staff who chat with first-timers (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区藪下町35-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999036, 135.756629); cross-checked: GSI 京都府京都市下京区藪下町35番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B461822305/', R + 'B508086658/', R + 'B509454001/'],
    price_note: 'Prices from June 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Matcha latte', '¥700', 'Drinks', 'ask', 'ask', 'January 2026; oat milk on request (July 2025).', 'matcha_latte'),
      it('', '', 'Matcha tonic', '¥650', 'Drinks', 'ask', 'vegan', 'June 2025.', 'matcha_tonic'),
      it('', '', 'Matcha soda', '', 'Drinks', 'ask', 'vegan', 'July 2026.', 'matcha_soda'),
      it('', '', 'Banana cake', '', 'Sweets', 'ask', 'ask', '2025 reviews.', 'banana_cake'),
    ] }, {
    cuisine: '日本茶のスタンド: 注文ごとにオープンキッチンで点てる抹茶。濃さは普通・濃いめ・ダブル、甘さも選べる (2025〜2026年の口コミ)・抹茶ラテ700円 (2026年1月)、ほうじ茶ラテ、オーツミルクに変更可 (2025年7月)・抹茶トニック650円 (2025年6月)、ほうじ茶トニック、抹茶ソーダ (2026年7月)、抹茶バナナジュース (2024〜2025年)・バナナケーキ、フローズンヨーグルト (2025〜2026年の口コミ)・抹茶は和束の YUGEN のおくみどり (2026年1月)',
    neighborhood: '五条室町、住宅街の路地。五条駅から491m',
    gf_detail: '要確認。抹茶とほうじ茶の飲み物、バナナケーキ、フローズンヨーグルト (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '一部あり。ラテはオーツミルクにでき (2025年7月)、抹茶ソーダと抹茶トニックは乳製品なし (2025〜2026年の口コミ)。甘味料とケーキは要確認。',
    notes: '[抹茶スタンド・五条、姉妹の営む路地のお茶] 大通りから数分の静かな路地にある、石とコンクリートのお茶のスタンド。姉妹が注文ごとに抹茶を点て、濃さと甘さを選べるラテ (オーツミルクも可)、抹茶ソーダ、トニック、バナナケーキを出す。持ち帰りが中心で、店内はベンチのみ。火〜木休み。',
  });
}

// ================================================================ もうやん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000362/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00']);
  put({
    id: 'kyoto_mouyan_soba', name: 'もうやん (Mouyan)', category: 'OMNI',
    lat: 35.01221, lng: 135.760373, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The regular soba is 90% buckwheat and the juwari 100% (September 2026), but the dipping sauce and broths are soy-based, and tempura and chikuwa tempura are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dipping sauce rich in bonito dashi (March 2026); herring and chikuwa on the menu.',
    hours_raw: 'Weekdays 11:00–14:00, closing when the soba sells out; closed Saturday, Sunday and holidays, with occasional extra closures (Tabelog). No reservations (Tabelog); 8 counter seats fill fast, and the juwari can sell out by 12:20 (July and October 2026). No cards or e-money; PayPay accepted (Tabelog). Non-smoking; please do not bring children (Tabelog). 1 min from Karasuma Oike Stn (Tabelog). Moved here from Kitayama (Tabelog, shop text).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike — 1 min from Karasuma Oike Stn',
    cuisine: 'Thin handmade soba, 90% buckwheat, or 100% buckwheat juwari for +¥400; large +¥300 (September 2026) · juwari mori ¥1,000 (July and October 2026), eaten with salt or a bonito-rich dipping sauce, then thick soba-yu (2025–26 reviews) · ume soba with the plum on the side (January and August 2026), spicy grated-radish soba ¥1,000 (July 2026), tempura zaru soba (September 2026) · chikuwa tempura ¥800 (July 2026) · soba-tofu and herring with eggplant to go with sake, shochu or beer at lunch (July 2026) · no rice dishes (October 2026)',
    website: 'http://www.mouyan.com/', gmaps: gm('もうやん 蕎麦 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba · Karasuma Oike, a weekday-lunch counter] Eight counter seats a minute from Karasuma Oike Stn, open only on weekday lunchtimes until the soba runs out: thin 90% or 100% buckwheat noodles with salt or a bonito-rich sauce, then thick soba-yu, from ¥1,000. Chikuwa tempura and soba-tofu go well with a lunchtime sake. Arrive by noon — the juwari sells out. No children.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), with a helper serving (February 2026)'], origin: null,
      background: 'Per Tabelog: a soba and creative restaurant opened 17 June 2016, which moved from Kitayama to Karasuma Oike (shop text).',
      philosophy: null, specialty: 'Juwari mori soba.',
      anecdotes: [
        { text: 'A February 2026 diner found the noodles beautifully even and the juwari a little crumbly, while the owner chatted with a regular throughout.', source: R + 'B522285984/' },
        { text: 'A July 2026 diner took one of the last three seats at 11:30; people arriving later were turned away.', source: R + 'B532156114/' },
        { text: 'An October 2026 diner saw the juwari mori sell out by 12:20 and noted there are no rice dishes.', source: R + 'B537293752/' },
      ],
      japanese_sources_summary: '食べログ: そば・創作料理、中京区西押小路町110-3、烏丸御池駅から徒歩1分、平日11:00〜14:00 (売り切れ次第終了)、土日祝休み、予約不可、カード・電子マネー不可・PayPay 可、カウンター8席、禁煙、子供不可、2016年6月17日オープン、北山から烏丸御池へ移転。口コミ (2025年11月〜2026年10月、英語): 細い九割蕎麦と十割蕎麦 (+400円)、大盛り+300円、十割もり1,000円、塩とつゆで、濃い蕎麦湯、梅蕎麦、辛味大根の蕎麦1,000円、天ざる、ちくわ天800円、蕎麦豆腐、にしんと茄子、昼から酒、ご飯ものはない、十割は早く売り切れる。',
      confidence: 'medium', sources: [TB, R + 'B517804377/', R + 'B522082538/', R + 'B522285984/', R + 'B523764684/', R + 'B524917509/', R + 'B532156114/', R + 'B532209054/', R + 'B532379133/', R + 'B533933425/', R + 'B535332161/', R + 'B536621410/', R + 'B537293752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in early for a counter seat; order soba by type and size. Adults only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西押小路町110-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012210, 135.760373); cross-checked: GSI 京都府京都市中京区西押小路町110番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532379133/', R + 'B532156114/', R + 'B535332161/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Juwari mori soba (100% buckwheat)', '¥1,000', 'Soba', 'ask', 'no', 'July and October 2026.', 'juwari_mori'),
      it('', '', 'Spicy grated-radish soba', '¥1,000', 'Soba', 'ask', 'no', 'July 2026.', 'karami_soba'),
      it('', '', 'Chikuwa tempura', '¥800', 'Sides', 'no', 'no', 'July 2026.', 'chikuwa_ten'),
      it('', '', 'Large portion', '+¥300', 'Soba', '', '', 'September 2026.', 'oomori'),
    ] }, {
    cuisine: '細い手打ちの九割蕎麦、十割は400円増し、大盛り300円増し (2026年9月)・十割もり1,000円 (2026年7月・10月)、塩か鰹の効いたつゆで、最後に濃い蕎麦湯 (2025〜2026年の口コミ)・梅を別に添える梅蕎麦 (2026年1月・8月)、辛味大根の蕎麦1,000円 (2026年7月)、天ざる (2026年9月)・ちくわ天800円 (2026年7月)・蕎麦豆腐、にしんと茄子を、昼から酒や焼酎、ビールと (2026年7月)・ご飯ものはない (2026年10月)',
    neighborhood: '烏丸御池。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。普通の蕎麦は九割、十割は十割 (2026年9月) だが、つゆや出汁は醤油を使い、天ぷらやちくわ天もある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。つゆは鰹の出汁が効く (2026年3月)。にしんやちくわもある。',
    notes: '[蕎麦・烏丸御池、平日昼だけのカウンター] 烏丸御池駅から1分、カウンター8席。平日の昼だけ、蕎麦がなくなるまで営業。細い九割か十割の蕎麦を塩か鰹の効いたつゆで、最後は濃い蕎麦湯。1,000円から。ちくわ天や蕎麦豆腐で昼酒も。十割は売り切れるので昼までに。子供不可。',
  });
}

// ================================================================ 割烹 たん義
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001628/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://tanyoshi.com/';
  const H = day(['12:00', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_kappo_tanyoshi', name: '割烹 たん義 (Kappo Tanyoshi)', category: 'MOM_AND_POP',
    lat: 35.006467, lng: 135.774362, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo cooking with soy-based sauces — the hamo-don sauce is a recipe kept for three generations (July 2022) — and tempura and kakiage on the menu (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kappo — clear soups, simmered dishes, duck manju, hamo (official site; 2017–26 reviews).',
    hours_raw: '12:00–14:00 and 17:00–20:00; closed Friday and Sunday (Tabelog). The official site gives 12:00–21:00, closed Sunday and holidays — check by phone. Reservations by phone; lunch set menus and the summer hamo-don need a reservation (official site; 2023–24 reviews). Lunch prices include tax and service; dinner courses are plus tax and a 5% service charge (official site). Cards (JCB, AMEX, Diners), no e-money or QR (Tabelog). A one-piece Kiso-cypress counter downstairs, tatami rooms upstairs (official site; July 2017). Non-smoking (Tabelog). On Shinmonzen west of Hanamikoji, through the lane beside Tatsumi Daimyojin; a few minutes from Yasaka Shrine and Minamiza (official site). Take-away boxes by reservation (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinmonzen, by Tatsumi Daimyojin — 314 m from Sanjo Keihan Stn',
    cuisine: 'Old-style Gion kappo (official site) · summer hamo-don, June to about the end of September, ¥2,500 with pickles and clear soup — the hamo boned and grilled to order (official site; 2017–26 reviews) · lunch: たん義 bento, shokado bento, kakiage-don and other rice bowls (official site; July 2022, October 2024) · dinner kaiseki: full course ¥10,000 and mini course ¥7,500, both with sashimi, simmered dish, grilled dish, duck manju and more, ending in rolled sushi, soup, pickles and dessert (official site) · à la carte from kakiage and arataki to hamo somen, kumiage yuba, dengaku, dashimaki and duck loin (official site) · take-away: shokado ¥4,000, たん義 bento ¥3,000, hamo-don ¥2,500 (official site)',
    website: OF, gmaps: gm('割烹 たん義 祇園'), menu_url: OF + 'menu/',
    notes: '[Kappo · Gion Shinmonzen, three generations in a Kyoto-cypress counter] A family kappo in the Gion alleys since 1964, its founder trained in the たん熊 line, now run by the founder’s daughter as okami and the okami’s son as third-generation chef. Come in summer for the hamo-don (¥2,500), the hamo boned in front of you at the one-piece cypress counter; dinner kaiseki from ¥7,500. Reach it through the lane beside Tatsumi Daimyojin. Book ahead.',
    chef_bio: { chef_name: '三津川 義弘', roles: ['Third-generation chef since 2015 (official site)', 'Okami: 三津川 都, second generation (official site)'], origin: null,
      background: 'Per the official site (あゆみ, written by the okami 三津川 都): the founder 三津川 義夫, born in Otsu in 1926, apprenticed at the Kyoto restaurant 三田尻 in 1940, served in a navy air unit in the war, and trained again afterwards. In 1951 the founder’s elder brother, also a cook, was granted a noren by たん熊 and opened たん新 in Gion Shinbashi; in April 1964 the founder went independent and opened たん義. After the founder died in November 1998, aged 73, the founder’s only daughter, the okami 三津川 都 (born 1953), carried on the shop and its flavours; the okami’s son 三津川 義弘 took over as third generation in 2015. The one-piece counter was cut from a single Kiso cypress made to order at the opening.',
      philosophy: 'Passing on the good traditions of Kyoto kappo and the founder’s flavours (official site).', specialty: 'Summer hamo-don; duck manju.',
      anecdotes: [
        { text: 'A July 2025 diner at the counter watched the hamo being boned right in front of the seat.', source: R + 'B510685065/' },
        { text: 'A September 2025 diner, the only guest in the midday heat, chatted with the owner and the young chef, and was shown a little lane to Tatsumi Bridge on the way out.', source: R + 'B513887474/' },
        { text: 'An April 2025 diner has been coming for more than 30 years and calls it the one place Kyoto feels incomplete without.', source: R + 'B505820023/' },
      ],
      japanese_sources_summary: '公式サイト: 割烹 たん義、創業60年、初代 三津川義夫 (大正15年大津生まれ、昭和15年に京都料理店「三田尻」へ奉公)、昭和26年に実兄がたん熊からのれん分けで「たん新」を祇園新橋に開店、昭和39年4月に「たん新」から独立し「たん義」を開店、平成10年11月に初代が73才で亡くなり一人娘の女将 三津川都が継ぎ、平成27年に息子の義弘が三代目、木曽檜一枚板のカウンター、新門前通花見小路西入ル (辰巳大明神横の間道)、12:00〜21:00、日曜・祝日休み、昼の献立 (税・サービス料込み、要予約)、夏季限定の鱧丼2,500円、夜の会席 フルコース10,000円・ミニコース7,500円 (税・サービス料5%別)、一品料理、持ち帰りの松花堂4,000円・たん義弁当3,000円。食べログ: 日本料理、東山区西之町210-2、12:00〜14:00・17:00〜20:00、金日休み、予約可、カード可 (JCB・AMEX・Diners)、禁煙。口コミ (2017年7月〜2026年6月、英語): 鱧丼、目の前の骨切り、かき揚げ丼、おまかせの会席、親切な店主と若い料理人。',
      confidence: 'high', sources: [TB, OF, OF + 'history/', OF + 'menu/', OF + 'access/', R + 'B280727505/', R + 'B282557713/', R + 'B452629474/', R + 'B453055174/', R + 'B471243305/', R + 'B473045082/', R + 'B493087825/', R + 'B505820023/', R + 'B510685065/', R + 'B513808518/', R + 'B513887474/', R + 'B531062612/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone, and reserve the hamo-don ahead; counter or tatami. Friendly owner and staff (2025 reviews). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西之町210-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.006467, 135.774362); cross-checked: GSI 京都府京都市東山区西之町210番地 (lot) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OF + 'menu/'],
    price_note: 'Official menu page (accessed 2026-11-06): lunch prices include tax and service; dinner courses are plus tax and 5% service.', last_checked: TODAY, items: [
      it('', '', 'Hamo-don (summer, with pickles and soup)', '¥2,500', 'Lunch', 'ask', 'no', 'June to about end of September; reserve (official site).', 'hamo_don'),
      it('', '', 'Full kaiseki course', '¥10,000', 'Dinner', 'ask', 'no', 'Plus tax and 5% service (official site).', 'full_course'),
      it('', '', 'Mini kaiseki course', '¥7,500', 'Dinner', 'ask', 'no', 'Plus tax and 5% service (official site).', 'mini_course'),
      it('', '', 'Shokado bento (take-away)', '¥4,000', 'Take-away', 'ask', 'no', 'By reservation (official site).', 'shokado'),
      it('', '', 'Kakiage-don', '', 'Lunch', 'no', 'no', 'October 2024; official site.', 'kakiage_don'),
    ] }, {
    cuisine: '古きよき祇園の割烹 (公式サイト)・夏季限定 (6月〜9月末頃) の鱧丼2,500円、香の物と吸物付き。鱧は注文ごとに骨切りして焼く (公式サイト、2017〜2026年の口コミ)・昼はたん義弁当、松花堂弁当、かき揚げ丼などの丼 (公式サイト、2022年7月、2024年10月)・夜の会席はフルコース10,000円とミニコース7,500円。造り、炊合せ、焼物、鴨万寿など、最後はのり巻、吸物、香の物、デザート (公式サイト)・一品料理はかき揚、荒炊から鱧そうめん、くみ上げゆば、田楽、出し巻、鴨ロースまで (公式サイト)・持ち帰りは松花堂4,000円、たん義弁当3,000円、鱧丼2,500円 (公式サイト)',
    neighborhood: '祇園新門前、辰巳大明神のそば。三条京阪駅から314m',
    gf_detail: '要確認。醤油のたれを使う割烹で、鱧丼のたれは三代受け継いだもの (2022年7月)。天ぷらやかき揚げもある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。出汁の割烹 (吸物、炊合せ、鴨万寿、鱧) (公式サイト、2017〜2026年の口コミ)。',
    notes: '[割烹・祇園新門前、木曽檜のカウンターで三代] 1964年から祇園の路地で続く家族の割烹。初代はたん熊の流れで修業し、今は一人娘の女将と、その息子の三代目が営む。夏は鱧丼 (2,500円) を、一枚板の檜のカウンターで目の前の骨切りとともに。夜の会席は7,500円から。辰巳大明神横の間道から。予約を。',
  });
}

// ================================================================ いなせや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026420/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '23:30']); const WE = day(['11:30', '23:30']);
  put({
    id: 'kyoto_tachinomi_inaseya', name: 'いなせや (Inaseya)', category: 'OMNI',
    lat: 34.989017, lng: 135.760955, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: ham katsu, fried horse mackerel, spring rolls (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood standing bar — sashimi, beef tataki, dashimaki, chicken (2026 reviews).',
    hours_raw: 'Tue–Fri 15:00–23:30; Sat, Sun and holidays 11:30–23:30; last order 23:00; closed Monday (Tuesday if Monday is a holiday) (Tabelog). No reservations (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). No service charge (Tabelog, Japanese text: 「なし」). Standing only; mobile ordering (October 2026). Smoking allowed (Tabelog; October 2026). Popular dishes such as beef tataki and potato salad sell out by about 17:00–18:00 (October and November 2026). On Higashinotoin south of Shichijo; 6–7 min from Kyoto Stn (Tabelog). Opened 24 September 2015 (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashinotoin Shichijo — 6 min from Kyoto Stn',
    cuisine: 'A bright, cheap standing bar for seafood and drinking snacks (Tabelog; 2026 reviews) · draft beer ¥350, potato salad ¥320, ham katsu ¥280, fried horse mackerel ¥290 (November 2026) · signature beef tataki and spring rolls, best ordered early (October 2026) · tuna sashimi, nakaochi tuna, dashimaki, anchovy potatoes, octopus with wasabi, chicken heart, tsukune with green pepper (October 2026) · highballs and sours (October–November 2026)',
    website: null, gmaps: gm('立ちのみいなせや 京都駅前店'), menu_url: TB,
    notes: '[Standing bar · Kyoto Stn, seafood snacks for a few hundred yen] A bright, clean standing bar a short walk from Kyoto Stn: draft beer for ¥350 and snacks around ¥300 — ham katsu, fried horse mackerel, potato salad — plus beef tataki, sashimi and dashimaki. Crowded from early evening with commuters and solo drinkers; the popular plates sell out, so go early. Cash only; smoking allowed. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a standing bar and seafood shop opened 24 September 2015. An October 2026 review says it is run by Gallant, which operates various restaurants in Kyoto, under the concept of "a clean and open standing bar" for all ages and genders.',
      philosophy: '"A clean and open standing bar" (October 2026 review).', specialty: 'Beef tataki; ham katsu.',
      anecdotes: [
        { text: 'A November 2026 visitor had beer, potato salad, ham katsu and fried horse mackerel for ¥1,240 in all.', source: R + 'B538616438/' },
        { text: 'An October 2026 visitor at 18:00 found the beef tataki and spring rolls already gone and plans to come at 15:00 next time.', source: R + 'B536793967/' },
        { text: 'An October 2026 visitor noticed many women drinking alone and a crowd mostly in its 20s and 30s.', source: R + 'B537525671/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み・海鮮、下京区東洞院通七条下ル真苧屋町220-8、京都駅から徒歩6〜7分、火〜金15:00〜23:30、土日祝11:30〜23:30 (L.O. 23:00)、月曜休み (祝日の場合は火曜)、予約不可、カード・電子マネー・QR 不可、サービス料なし、立ち飲み、喫煙可、2015年9月24日オープン。口コミ (2026年10月〜11月、英語): 生ビール350円、ポテトサラダ320円、ハムカツ280円、アジフライ290円、牛たたき、春巻き、鮪の刺身、中落ち、だし巻き、タコわさ、モバイルオーダー、早い時間に売り切れ、運営はギャラント (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B495536515/', R + 'B536787944/', R + 'B536793967/', R + 'B536981346/', R + 'B537240201/', R + 'B537345010/', R + 'B537525671/', R + 'B537697574/', R + 'B537890246/', R + 'B538417511/', R + 'B538551429/', R + 'B538616438/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Stand at the counter and order on your phone; cash only; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通七条下ル真苧屋町220-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989017, 135.760955); cross-checked: GSI 京都府京都市下京区真苧屋町220番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538616438/'],
    price_note: 'Prices from a November 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Draft beer', '¥350', 'Drinks', 'no', 'ask', 'November 2026.', 'draft_beer'),
      it('', '', 'Potato salad', '¥320', 'Snacks', 'ask', 'ask', 'November 2026.', 'potato_salad'),
      it('', '', 'Ham katsu', '¥280', 'Fried', 'no', 'no', 'November 2026.', 'ham_katsu'),
      it('', '', 'Fried horse mackerel', '¥290', 'Fried', 'no', 'no', 'November 2026.', 'aji_fry'),
      it('', '', 'Beef tataki', '', 'Signature', 'ask', 'no', 'Sells out early (October 2026).', 'beef_tataki'),
    ] }, {
    cuisine: '明るく安い、海鮮と酒の肴の立ち飲み (食べログ、2026年の口コミ)・生ビール350円、ポテトサラダ320円、ハムカツ280円、アジフライ290円 (2026年11月)・名物の牛たたきと春巻きは早めに (2026年10月)・鮪の刺身、中落ち、だし巻き、アンチョビポテト、タコわさ、ハツ、ピーマンのつくね (2026年10月)・ハイボールやサワー (2026年10月〜11月)',
    neighborhood: '東洞院七条。京都駅から徒歩6分',
    gf_detail: 'グルテンフリーではない。ハムカツ、アジフライ、春巻き (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、牛たたき、だし巻き、鶏の海鮮の立ち飲み (2026年の口コミ)。',
    notes: '[立ち飲み・京都駅、数百円の海鮮の肴] 京都駅から少し歩く、明るく清潔な立ち飲み。生ビール350円、肴は300円前後 (ハムカツ、アジフライ、ポテトサラダ)、牛たたき、刺身、だし巻きも。夕方から仕事帰りや一人飲みで混み、人気の皿は売り切れるので早めに。現金のみ、喫煙可。月曜休み。',
  });
}

save();
