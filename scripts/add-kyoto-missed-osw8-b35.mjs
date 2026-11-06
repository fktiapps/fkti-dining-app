// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 35.
//   + 喫茶いのん Kissa Inon (café inside a flower shop by the Kamo River at Marutamachi; core list)
//   + 竹久 Takehisa (eight-seat omakase counter by Marutamachi Stn, ayu and chestnut seasons; core list)
//   + ルボンディー REBONDIE (Ichijoji bakery, cornet filled to order; notable list)
//   + 下鴨 大登龍 Shimogamo Daitoryu (local Chinese, yakiniku and Korean near Shimogamo Shrine; notable list)
//   Picked 2026-11-06 after batch 34. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087, 26026909 were
//   skipped in batch 30; 喫茶いのん 26018287, 竹久 26025049. `next notable 200`: 26023579 and 26041687 skipped earlier;
//   ルボンディー 26003959, 下鴨 大登龍 26024167. Same-name check, same brand or operator only: one of each in our crawls
//   (登龍 麻布店 in Tokyo is a different name with no stated link). None of the four is in data/kyoto.json: grep by name
//   and address (俵屋町463, 亀屋町141, 梅ノ木町54, 宮崎町123) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 喫茶いのん Kissa Inon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018287/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kissa_inon_marutamachi', name: '喫茶いのん (Kissa Inon)', category: 'OMNI',
    lat: 35.017783, lng: 135.770778, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the signature is an egg sandwich on soft bread (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic herbal teas, coffee and a ginger-muscat float appear, but food centres on egg sandwiches and coffee jelly with ice cream (2025–2026 reviews).',
    hours_raw: 'From 10:30, lunch from 11:00; closing time not listed; closed Tuesday and some irregular days; hours may change (Tabelog). No reservations (Tabelog). 20 seats incl. a counter and a large shared table; terrace seats where pets are allowed; non-smoking (Tabelog; November 2025). Cash, and PayPay per an April 2026 review; no cards (Tabelog). Picnic sets for rent to take to the riverbank (June 2026). Inside a flower shop on Marutamachi-dori by the Kamo River, east of Higashi-Sanbongi; about 140 m from Jingu-Marutamachi Stn (Tabelog; 2025–2026 reviews).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi by the Kamo River — near Jingu-Marutamachi Stn',
    cuisine: 'Café in a working flower shop, with fresh and dried flowers all around (2025–2026 reviews) · egg sandwich ¥880: a fluffy dashimaki in soft, lightly toasted bread with homemade grain mustard (November 2025–September 2026) · coffee jelly with ice cream; organic herbal tea ¥650 (tulsi); Earl Grey iced tea; a ginger and muscat sorbet float (October 2025–September 2026) · bouquets from about ¥2,000 made to your budget (September 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('喫茶いのん 京都 丸太町'), menu_url: null,
    notes: '[Café · flower shop by the Kamo River, Marutamachi] A little café inside a flower shop a step from the Kamo River: watch walkers and joggers from the counter over an egg sandwich of fluffy dashimaki with crunchy homemade mustard, coffee jelly or a herbal tea, surrounded by fresh and dried flowers. Pick up a bouquet, or rent a picnic set for the riverbank. Pets welcome on the terrace. From 10:30; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Café and florist staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a coffee shop with a flower shop on site, near Jingu-Marutamachi, with terrace seats open to pets. Reviewers describe a former flower shop that still sells flowers (November 2025), many regulars (July 2026), and staff who build bouquets around a guest\'s taste and budget (September 2026).',
      philosophy: null, specialty: 'Egg sandwich; coffee jelly.',
      anecdotes: [
        { text: 'A November 2025 visitor was served the egg sandwich untoasted that day because the bread was freshly baked and fluffy.', source: R + 'B517960017/' },
        { text: 'A June 2026 guest saw young people borrow picnic sets and carry takeaway food down to the Kamo River.', source: R + 'B533646980/' },
        { text: 'A September 2026 visitor ordered a bouquet, chatted while it was made, then took photos by the river.', source: R + 'B536211874/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・カフェ、上京区丸太町通東三本木東入ル俵屋町463、神宮丸太町駅から140m、10:30から、ランチは11:00から、火曜と不定休、予約不可、20席、カウンター、禁煙、カード・電子マネー・QR 不可、花屋を併設、テラス席はペット可。口コミ (2024年12月〜2026年9月、英語): 鴨川のそば、生花とドライフラワーに囲まれた店内、玉子サンド880円 (ふわふわのだし巻き、自家製の粒マスタード)、コーヒーゼリー (アイス添え)、オーガニックのハーブティー650円 (Tulsi)、アールグレイのアイスティー、生姜とマスカットのシャーベットのフロート、ピクニックセットの貸し出し、花束は2,000円ほどから予算に合わせて、PayPay 可 (2026年4月の口コミ)、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B497499826/', R + 'B498216377/', R + 'B517907867/', R + 'B517960017/', R + 'B525346459/', R + 'B527320653/', R + 'B531041616/', R + 'B533646980/', R + 'B535135879/', R + 'B536211874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; cash or PayPay; flowers sold too.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区丸太町通東三本木東入ル俵屋町463',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017783, 135.770778); cross-checked: GSI 京都府京都市上京区俵屋町463番地 (lot) 22 m; nearest Kyoto record 71 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517960017/'],
    price_note: 'Prices from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Egg sandwich (dashimaki, homemade mustard)', '¥880', 'Food', 'no', 'no', 'November 2025.', 'egg_sando'),
      it('', '', 'Organic herbal tea', '¥650', 'Drinks', 'ask', 'ask', 'November 2025.', 'herbal_tea'),
    ] }, {
    cuisine: '生花とドライフラワーに囲まれた、営業中の花屋の中のカフェ (2025〜2026年の口コミ)・玉子サンド880円: ふわふわのだし巻きを軽く焼いた柔らかいパンに、自家製の粒マスタード (2025年11月〜2026年9月)・アイス添えのコーヒーゼリー、オーガニックのハーブティー650円 (Tulsi)、アールグレイのアイスティー、生姜とマスカットのシャーベットのフロート (2025年10月〜2026年9月)・予算に合わせて作る2,000円ほどからの花束 (2026年9月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '鴨川沿いの丸太町。神宮丸太町駅の近く',
    gf_detail: 'グルテンフリー不可。名物は柔らかいパンの玉子サンド (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。オーガニックのハーブティー、コーヒー、生姜とマスカットのフロートはあるが、食べ物は玉子サンドやアイス添えのコーヒーゼリーが中心 (2025〜2026年の口コミ)。',
    notes: '[カフェ・鴨川沿いの花屋、丸太町] 鴨川のすぐそば、花屋の中の小さなカフェ。カウンターから散歩やジョギングの人を眺めつつ、ふわふわのだし巻きと自家製のつぶつぶマスタードの玉子サンド、コーヒーゼリー、ハーブティーを。店内は生花とドライフラワーでいっぱい。花束を頼んだり、ピクニックセットを借りて河原へ出たりも。テラスはペット可。10時半から、火曜休み。',
  });
}

// ================================================================ 竹久 Takehisa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025049/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_takehisa_marutamachi', name: '竹久 (Takehisa)', category: 'OMNI',
    lat: 35.016328, lng: 135.758499, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of hassun, sashimi, dobin-mushi, grilled ayu and clay-pot rice, seasoned with miso and soy; fried figs in spring-roll pastry appear (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led Japanese omakase — ayu, conger eel, sashimi, sweet shrimp (2024–2026 reviews).',
    hours_raw: 'Daily 12:00–14:30 (last entry 13:00) and 17:30–22:30 (last entry 19:00); irregular closing days (Tabelog). Reservation only (Tabelog). No service charge or cover charge (Tabelog original サービス料、チャージ料なし). Omakase about ¥12,000–14,000 (2024–2025 reviews). Cash only — no cards, e-money or QR (Tabelog). 8 counter seats; shoes off at the entrance; private hire up to 20; non-smoking (Tabelog; October 2024). On Takeyamachi-dori east of Muromachi; 3 min walk west from Marutamachi Stn exit 5 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori east of Muromachi — 3 min walk from Marutamachi Stn',
    cuisine: 'Seasonal Japanese omakase at an eight-seat counter, strong on fish (Tabelog; 2024–2026 reviews) · omakase about ¥12,000–14,000, e.g. persimmon in white-miso dressing, a hassun of poached pear, black-bean edamame, ayu with roe and miso-cured egg yolk; sashimi with fresh-grated wasabi; dobin-mushi or a matsutake soup; large fluffy conger eel; grilled ayu (October 2024; September 2025) · figs fried in spring-roll pastry, simmered sanma, homemade simmered green plums (September 2025) · large Hyogo sweet shrimp, chestnut rice, a warm chestnut kinton to finish (December 2025; October 2026) · wild taranome the chef forages in the mountains each spring (March 2026) · sake; plum-wine soda; seasonal green-plum soda (2024–2025 reviews)',
    website: null, gmaps: gm('竹久 京都 竹屋町 室町'), menu_url: null,
    notes: '[Japanese omakase · Takeyamachi Muromachi near Marutamachi] A shoes-off, eight-seat counter cooking the Kyoto seasons into one omakase of about ¥12,000–14,000: grilled ayu with roe in late summer, matsutake and conger eel in autumn, chestnut rice and a warm chestnut kinton, and in spring wild taranome the chef gathers in the mountains. No service charge. Cash only; reservation only.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who forages wild mountain vegetables in spring (March 2026 review)'], origin: null,
      background: 'Per Tabelog: a reservation-only, eight-seat counter for adults to enjoy seasonal ingredients; registered as an official listing by the shop. A March 2026 reviewer writes that the chef goes into the mountains to gather taranome, so some days there is none; an October 2024 reviewer notes summer heat had delayed both ayu and chestnuts that year; the summer noren is white (September 2025).',
      philosophy: 'A hidden place for adults to savour seasonal ingredients (Tabelog).', specialty: 'Ayu with roe; chestnut rice.',
      anecdotes: [
        { text: 'One regular has logged over sixty visits on Tabelog, returning several times in October 2026 for the overlap of ayu with roe and chestnuts.', source: R + 'B125144471/' },
        { text: 'An October 2024 guest heard of the chestnut rice at a dinner a year earlier and waited a full season to try it.', source: R + 'B495012836/' },
        { text: 'A September 2025 guest was astonished to find matsutake at this price, the first of the year.', source: R + 'B501175635/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区竹屋町通室町東入亀屋町141-1、地下鉄丸太町駅5番出口から西へ徒歩約3分、12:00〜14:30 (最終入店13:00)、17:30〜22:30 (最終入店19:00)、不定休、完全予約制、サービス料・チャージ料なし、カード・電子マネー・QR 不可、8席 (カウンター)、貸切20名まで、禁煙、旬の食材を味わう大人の隠れ家。口コミ (2024年10月〜2026年10月、英語): 靴を脱いで上がる、おまかせ12,000〜14,000円ほど、柿の白和え、八寸 (洋梨のコンポート、黒豆の枝豆、子持ち鮎、黄身の味噌漬け)、お造り (おろしたてのわさび)、土瓶蒸し、松茸のお椀、鱧、鮎の塩焼き、無花果の春巻き揚げ、秋刀魚の煮物、青梅の甘露煮、兵庫の甘海老、栗ご飯、温かい栗きんとん、シェフが山で採る天然のたらの芽 (2026年3月)、夏は白いのれん、青梅のソーダ、梅酒ソーダ。',
      confidence: 'medium', sources: [TB, R + 'B125144471/', R + 'B371302544/', R + 'B493584666/', R + 'B495012836/', R + 'B501175635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; shoes off; one omakase; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通室町東入亀屋町141-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016328, 135.758499); cross-checked: GSI 京都府京都市中京区亀屋町141番地 (lot) 4 m; kyoto_mirei is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495012836/', R + 'B501175635/'],
    price_note: 'Course prices from October 2024 and September 2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥12,000–14,000', 'Course', 'ask', 'no', '2024–2025 reviews.', 'omakase'),
    ] }, {
    cuisine: '魚に強い、8席のカウンターの季節の日本料理のおまかせ (食べログ、2024〜2026年の口コミ)・おまかせは12,000〜14,000円ほど、例: 柿の白和え、八寸 (洋梨のコンポート、黒豆の枝豆、子持ち鮎、黄身の味噌漬け)、おろしたてのわさびのお造り、土瓶蒸しや松茸のお椀、大きくふわふわの鱧、鮎の塩焼き (2024年10月、2025年9月)・無花果の春巻き揚げ、秋刀魚の煮物、自家製の青梅の甘露煮 (2025年9月)・兵庫の大きな甘海老、栗ご飯、締めの温かい栗きんとん (2025年12月、2026年10月)・春はシェフが山で採る天然のたらの芽 (2026年3月)・日本酒、梅酒ソーダ、季節の青梅のソーダ (2024〜2025年の口コミ)',
    neighborhood: '室町の東の竹屋町通。丸太町駅から徒歩3分',
    gf_detail: '要確認。八寸、お造り、土瓶蒸し、鮎の塩焼き、土鍋ご飯のおまかせで、味噌や醤油を使う。無花果の春巻き揚げも (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮎、鱧、お造り、甘海老など魚中心の日本料理のおまかせ (2024〜2026年の口コミ)。',
    notes: '[日本料理のおまかせ・丸太町近くの竹屋町室町] 靴を脱いで上がる8席のカウンター。京都の季節を12,000〜14,000円ほどのおまかせ一つで: 晩夏は子持ち鮎の塩焼き、秋は松茸と鱧、栗ご飯と温かい栗きんとん、春はシェフ自ら山で採る天然のたらの芽。サービス料なし。現金のみ、完全予約制。',
  });
}

// ================================================================ ルボンディー REBONDIE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003959/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '18:00']);
  put({
    id: 'kyoto_rebondie_ichijoji', name: 'ルボンディー (REBONDIE)', category: 'OMNI',
    lat: 35.040609, lng: 135.786980, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a wheat bakery of cornets, croissants, loaves and filled breads (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Country bread and baguettes may suit, but there is no ingredient information; most items use butter, cream, cheese, egg or meat (2024–2026 reviews).',
    hours_raw: 'Friday–Wednesday 7:00–18:00; closed Thursday; hours may change (Tabelog). The cornets often sell out by midday (2025–2026 reviews). Reservations (orders) accepted; reserved items are set aside (Tabelog; April 2026). No cards; e-money and QR incl. PayPay (Tabelog; March 2025). Takeaway; no parking — coin parking nearby (Tabelog; April and October 2026). A red-roofed shop on the 1F of North Point M in Ichijoji Umenoki-cho; near the Ichijoji Umenoki-cho bus stop, about 7 min from Ichijoji Stn on the Eizan line (Tabelog; June 2025, April 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ichijoji Umenoki-cho — 7 min walk from Ichijoji Stn (Eizan)',
    cuisine: 'Neighbourhood boulangerie (2024–2026 reviews) · signature cornet crisp ¥227, filled with fresh cream at the till — two of three creams can be mixed (November 2024; May 2026) · premium sliced loaf ¥443, croissant ¥216, anpan ¥205, French peanut bread ¥194, salted-butter bread ¥217, butter coupe (March 2025–February 2026) · fleur of stewed apple and custard ¥227, cream bun ¥227, kinako doughnut ¥119, twist doughnut ¥173 (2025–2026 reviews) · savoury: spinach and salmon quiche ¥410 (weekends), pizza bread ¥238, eggplant gratin ¥238, French spiced bacon, sausage French, frank doughnut, French egg sandwich with mentaiko (2025–2026 reviews) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('ルボンディー REBONDIE 一乗寺'), menu_url: null,
    notes: '[Bakery · Ichijoji, red roof] A red-roofed Ichijoji bakery known for its crisp cornet, filled with fresh cream at the till while you wait — come before noon or it is gone. Around it: a premium sliced loaf, croissants, salted-butter rolls, French peanut bread, weekend quiche and plenty of savoury breads such as spiced bacon, eggplant gratin and a mentaiko egg sandwich. PayPay but no cards. From 7:00; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Bakers and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a bread and sandwich shop in Ichijoji with takeaway; orders by reservation. Reviewers describe the signature cornet filled at the register (November 2024), items set aside for reservations (April 2026), and breads fresh from the oven through the morning (July 2025).',
      philosophy: null, specialty: 'Cornet crisp.',
      anecdotes: [
        { text: 'A July 2025 pair walked in at 9:30 just as the sausage French came out of the oven, and split one while it was hot.', source: R + 'B509451466/' },
        { text: 'A May 2026 visitor arriving around 13:00 grabbed one of the last cornets and had it filled with two creams.', source: R + 'B528928492/' },
      ],
      japanese_sources_summary: '食べログ: パン・サンドイッチ、左京区一乗寺梅ノ木町54-1 ノースポイントM 1F、叡山電鉄「茶山」か「一乗寺」、市バス「一乗寺梅ノ木町」、金〜水 7:00〜18:00、木曜定休、予約可、カード不可、電子マネー・QR 可、禁煙、駐車場なし、テイクアウト。口コミ (2024年11月〜2026年10月、英語): 赤い屋根、名物のCorne Crisp 227円 (レジで生クリームを詰める、3種から2種のハーフ&ハーフも)、昼までに売り切れることが多い、プレミアム食パン5枚443円、クロワッサン216円、あんぱん205円、French Peanut 194円、塩バターパン217円、Butter Coupe、りんごとカスタードの Fleur 227円、クリームパン227円、きなこドーナツ119円、ツイストドーナツ173円、ほうれん草とサーモンのキッシュ410円 (週末)、ピザパン238円、茄子のグラタン238円、French Spiced Bacon、ソーセージフランス、フランクドーナツ、明太子の玉子サンド、PayPay 可。',
      confidence: 'medium', sources: [TB, R + 'B496086538/', R + 'B498874699/', R + 'B502632217/', R + 'B504472729/', R + 'B508415574/', R + 'B509451466/', R + 'B522520681/', R + 'B526742613/', R + 'B528928492/', R + 'B538301868/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick from the shelves; cornets filled at the till; PayPay or e-money, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区一乗寺梅ノ木町54-1 ノースポイントＭ １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.040609, 135.786980); cross-checked: GSI 京都府京都市左京区一乗寺梅ノ木町54番地 (lot) 32 m; nearest Kyoto record 289 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496086538/', R + 'B502632217/'],
    price_note: 'Prices from 2024–2025 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Cornet crisp with fresh cream', '¥227', 'Sweet breads', 'no', 'no', 'Filled at the till.', 'cornet'),
      it('', '', 'Premium sliced loaf (5 slices)', '¥443', 'Bread', 'no', 'ask', 'March 2025.', 'shokupan'),
      it('', '', 'Croissant', '¥216', 'Viennoiserie', 'no', 'no', 'March 2025.', 'croissant'),
      it('', '', 'Spinach and salmon quiche', '¥410', 'Savoury', 'no', 'no', 'Weekends only.', 'quiche'),
    ] }, {
    cuisine: '町のブーランジェリー (2024〜2026年の口コミ)・名物のCorne Crisp 227円、レジで生クリームを詰める、3種のクリームから2種を合わせることも (2024年11月、2026年5月)・プレミアム食パン443円、クロワッサン216円、あんぱん205円、French Peanut 194円、塩バターパン217円、Butter Coupe (2025年3月〜2026年2月)・煮りんごとカスタードの Fleur 227円、クリームパン227円、きなこドーナツ119円、ツイストドーナツ173円 (2025〜2026年の口コミ)・惣菜パン: ほうれん草とサーモンのキッシュ410円 (週末)、ピザパン238円、茄子のグラタン238円、French Spiced Bacon、ソーセージフランス、フランクドーナツ、明太子の玉子サンド (2025〜2026年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '一乗寺梅ノ木町。叡山電鉄一乗寺駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。コルネ、クロワッサン、食パン、惣菜パンの小麦のパン屋 (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。カンパーニュやバゲットは合うかもしれないが原材料の情報はない。多くはバター、クリーム、チーズ、卵、肉を使う (2024〜2026年の口コミ)。',
    notes: '[パン・一乗寺、赤い屋根] 赤い屋根の一乗寺のパン屋。名物はレジで生クリームを詰めてくれるサクサクのコルネで、昼前には売り切れる。ほかにプレミアム食パン、クロワッサン、塩バターパン、French Peanut、週末のキッシュ、スパイスベーコンや茄子のグラタン、明太子の玉子サンドなど惣菜パンも豊富。PayPay 可、カード不可。7時から、木曜休み。',
  });
}

// ================================================================ 下鴨 大登龍 Shimogamo Daitoryu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26024167/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_shimogamo_daitoryu', name: '下鴨 大登龍 (Shimogamo Daitoryu)', category: 'OMNI',
    lat: 35.033006, lng: 135.770452, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: Chinese dishes in soy-based sauces, gyoza, spring rolls, fried rice and noodles alongside yakiniku with dipping sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese, Korean and yakiniku dishes built on pork, beef, shrimp and egg (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday–Sunday 17:00–23:00; closed Wednesday and Thursday; hours may change (Tabelog). Reservations accepted and advised (Tabelog; December 2025, May 2026). Cash only — no cards, e-money or QR (Tabelog). Counter, tables and tatami rooms; non-smoking; children welcome; 3 parking spaces in front (Tabelog; December 2025). Shimogamo, near Shimogamo Shrine; about 380 m from Demachiyanagi Stn (Tabelog; January 2026). Leftovers can be taken home (June 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shimogamo, near Shimogamo Shrine — 5 min walk from Demachiyanagi Stn',
    cuisine: 'Long-running local Chinese restaurant that also serves Korean dishes, Hong Kong dishes and yakiniku (2025–2026 reviews) · Chinese: homemade spring rolls, gyoza, black fried rice, seafood fried rice with sauce, shrimp mayo, chicken with cashews, Sichuan steamed pork, sweet and sour pork, mapo tofu, clam noodles, stir-fried egg with pork and wood ear (2025–2026 reviews) · yakiniku: thick salted tongue, kalbi, wagyu upper belly, skirt, liver, an assorted lean platter (2025–2026 reviews) · Korean: tteok, kimchi, Chamisul soju; a dried-tofu salad (August 2025) · about ¥3,000–5,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('下鴨 大登龍 京都'), menu_url: null,
    notes: '[Chinese and yakiniku · Shimogamo, local favourite] A busy, family-filled neighbourhood restaurant near Shimogamo Shrine that does three things at once: wok-loud local Chinese (black fried rice, homemade spring rolls, Sichuan steamed pork, mapo tofu), yakiniku of thick tongue and lean cuts, and Korean plates with soju. Fast, generous and cash only; one 2026 guest found the tongue tough and the steamed pork heavy. Book ahead. Evenings; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: Chinese, yakiniku and tripe near Demachiyanagi with tatami rooms and parking. Reviewers in 2025–2026 call it a long-established local Chinese restaurant that also offers Hong Kong and Korean dishes and yakiniku (August 2025; July 2026), with dishes served astonishingly fast to the sound of high-heat woks (July 2026).',
      philosophy: null, specialty: 'Black fried rice; thick salted tongue.',
      anecdotes: [
        { text: 'Every Obon a group of local classmates holds its reunion here — August 2025 and again in August 2026.', source: R + 'B511967606/' },
        { text: 'A June 2026 solo diner who over-ordered was offered a box for the leftovers.', source: R + 'B529366161/' },
        { text: 'A January 2026 visitor had long noticed the car park always full before finally coming for the fried rice and gyoza.', source: R + 'B520668175/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・焼肉・ホルモン、左京区下鴨宮崎町123、出町柳駅から376m、月・火・金〜日 17:00〜23:00、水・木曜定休、予約可、カード・電子マネー・QR 不可、カウンター、座敷、禁煙、子ども可、駐車場3台。口コミ (2025年8月〜2026年9月、英語): 下鴨神社の近く、昔からの町の中華、香港と韓国の料理も、焼肉も、自家製の春巻き、餃子、黒チャーハン、あんかけの海鮮チャーハン、エビマヨ、鶏とカシューナッツ、四川風の蒸し豚、酢豚、麻婆豆腐、あさりの麺、豚と木耳の卵炒め、厚切りの塩タン、カルビ、和牛の上バラ、ハラミ、レバー、赤身の盛り合わせ、トック、キムチ、Chamisul、干し豆腐のサラダ、提供が早い、残りは持ち帰り可、予約がおすすめ、タンが硬く蒸し豚が重いとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B195935372/', R + 'B511967606/', R + 'B518599195/', R + 'B520668175/', R + 'B524637175/', R + 'B528534281/', R + 'B528909869/', R + 'B529366161/', R + 'B532171023/', R + 'B535690511/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Long menu in Japanese; book ahead; cash only; parking for three cars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨宮崎町123',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.033006, 135.770452); cross-checked: GSI 京都府京都市左京区下鴨宮崎町123番地 (lot) 88 m; nearest Kyoto record 228 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524637175/', R + 'B532171023/'],
    price_note: 'No item prices read; about ¥3,000–5,000 (Tabelog; 2026 reviews). Cash only.', last_checked: TODAY, items: [
      it('', '', 'Black fried rice', '', 'Chinese', 'no', 'no', 'Signature; 2026 reviews.', 'black_fried_rice'),
      it('', '', 'Homemade spring rolls', '', 'Chinese', 'no', 'no', '2025–2026 reviews.', 'harumaki'),
      it('', '', 'Thick salted tongue', '', 'Yakiniku', 'ask', 'no', '2025–2026 reviews.', 'atsugiri_tan'),
    ] }, {
    cuisine: '韓国料理、香港の料理、焼肉も出す、昔からの町の中華料理店 (2025〜2026年の口コミ)・中華: 自家製の春巻き、餃子、黒チャーハン、あんかけの海鮮チャーハン、エビマヨ、鶏とカシューナッツ、四川風の蒸し豚、酢豚、麻婆豆腐、あさりの麺、豚と木耳の卵炒め (2025〜2026年の口コミ)・焼肉: 厚切りの塩タン、カルビ、和牛の上バラ、ハラミ、レバー、赤身の盛り合わせ (2025〜2026年の口コミ)・韓国: トック、キムチ、Chamisul、干し豆腐のサラダ (2025年8月)・3,000〜5,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '下鴨神社の近くの下鴨。出町柳駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。醤油系のたれの中華、餃子、春巻き、チャーハン、麺と、たれで食べる焼肉 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、牛、海老、卵の中華、韓国料理、焼肉 (2025〜2026年の口コミ)。',
    notes: '[中華と焼肉・下鴨、地元の人気店] 下鴨神社近くの、家族連れでにぎわう町の店。強火の鍋の音が響く町中華 (黒チャーハン、自家製の春巻き、四川風の蒸し豚、麻婆豆腐)、厚切りタンや赤身の焼肉、焼酎と韓国の皿の三本立て。早くてたっぷり、現金のみ。2026年の客の一人はタンが硬く蒸し豚が重いと感じた。予約を。夜のみ、水・木曜休み。',
  });
}

save();
