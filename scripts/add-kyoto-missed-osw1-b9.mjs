// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 9.
//   + イタメシOliva Itameshi Oliva (third-floor Italian off Pontocho with Wakasa produce; since 2017)
//   + 麺喰金家 Men Kui Kin Ya (handmade flat-udon shop in Miyagawacho)
//   + カフェ デ コラソン cafe de corazon (eight-seat roastery café in Kamigyo, run by a couple; Cafe WEST Tabelog 100 2025)
//   + SONGBIRD COFFEE (café of a Kyoto design studio near Nijo Castle; curry and egg sandwich; Cafe WEST Tabelog 100 2025)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26029340, 26024018);
//   from `next notable 200`: 26022566, then 26042042 (amam dacotan 京都) was left undrafted for the integrator to decide
//   (see the report: a brand of PEACE PUT, which also runs I'm donut?; the group size is not established in a source I
//   could read), then 26013578. None is in data/kyoto.json: grep by name (Oliva, 金家/Kin Ya, コラソン/corazon,
//   SONGBIRD/ソングバード) and address (下樵木町202-4, 博多町112, 革堂町593, 西竹屋町529) found none.
//   Nearest existing pins: kyoto_pontocho_tabakoya 11.6 m from Oliva (same building: Tabakoya's address_ja is
//   "京都府京都市中京区木屋町通四条上ル2-下樵木町202-3", Oliva's "下樵木町202-4-1 先斗町たばこやビル 3F");
//   kyoto_samgyetang_tottori 22.5 m from Kin Ya; kyr_imadegawa_mazesoba_sensh 417 m from corazon; kyoto_kuriya 142 m from SONGBIRD.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イタメシOliva
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029340/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']); const HT = day(['19:00', '24:00']);
  put({
    id: 'kyoto_itameshi_oliva', name: 'イタメシOliva (Itameshi Oliva)', category: 'OMNI',
    lat: 35.005778, lng: 135.771049, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, risotto, gratin with bread and fried olives stuffed with meat dominate; carpaccio, prosciutto and roasts are also served; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most dishes use seafood, meat or cheese; seasonal vegetable and fruit appetizers appear, but no vegan dish is named (Tabelog; 2024–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Friday–Sunday 17:00–24:00; Thursday 19:00–24:00; closed Wednesday (Tabelog). Reservations by phone (Tabelog) or Instagram DM (June 2026); a ¥1,000 per-person fee for same-day no-shows; at least one food item and one drink each; a 120-minute limit when busy (Tabelog). 12 seats: a 5-seat counter and small tables (Tabelog). Prices shown before tax; no charge (Tabelog). Cards and e-money (Tabelog). English menu (Tabelog). Third floor of the 先斗町たばこやビル: from Pontocho, take alley no. 15 on the north side and the lift to 3F (Tabelog). 3 min from Kawaramachi Stn (Tabelog). Opened 2 August 2017 (Tabelog).',
    hours: { 0: H, 1: H, 3: HT, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho alley no. 15, north of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Small Italian using fish and seasonal produce from Wakasa in Obama, Fukui, the owner\'s home town; risotto of Wakasa rice (Tabelog; 2024–2025 reviews) · antipasto platter, prosciutto and mozzarella, seasonal prosciutto with cheese and strawberry, pork pâté, fried olives stuffed with meat · pasta: peperoncino, seaweed aglio e olio, mussel pasta, firefly squid and fuki-no-tou linguine · squid-ink risotto, gorgonzola risotto · oyster gratin, eggplant and porcini cheese bake · roast duck, roast beef, lamb steak · panna cotta · Italian beers and wine (2024–2026 reviews) · about ¥14,000 for two with a bottle of wine (July 2025)',
    website: null, gmaps: gm('イタメシOliva 先斗町'), menu_url: null,
    notes: '[Italian · Pontocho, a third-floor hideaway with Wakasa produce] A twelve-seat Italian up a lift in the Tabakoya building, reached from Pontocho\'s alley no. 15. The owner-chef is from Obama in Fukui and builds the menu around Wakasa fish, seasonal produce and Wakasa rice: start with the antipasto platter or prosciutto and mozzarella, then the squid-ink risotto, a seasonal pasta, oyster gratin or the lamb steak, and panna cotta. Portions are generous and good for sharing; the owner will cook off-menu on request. About ¥14,000 for two with wine (July 2025). Book by phone; closed Wednesday, open to midnight.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; November 2024 reviews: "The owner is from Obama in Fukui", "The owner-chef is friendly")'], origin: 'Obama, Fukui Prefecture (November 2024 and February 2025 reviews).',
      background: 'Tabelog\'s introduction describes fresh seafood and seasonal ingredients from Wakasa in Obama City, Fukui Prefecture, and risotto of Wakasa rice. Tabelog gives the opening as 2 August 2017.',
      philosophy: null, specialty: 'Squid-ink risotto; seasonal pasta; fried stuffed olives.',
      anecdotes: [
        { text: 'A July 2025 diner found the owner running the room alone because the staff member was off sick, with four groups in.', source: R + 'B510786368/' },
        { text: 'A November 2024 regular named the squid-ink risotto "a flavor bomb" and the meat-stuffed fried olives a perfect match for Italian beer.', source: R + 'B498645481/' },
        { text: 'A May 2025 reviewer notes the place is popular with foreign tourists, so phone booking is essential, and that the owner will make dishes not on the menu.', source: R + 'B507545936/' },
      ],
      japanese_sources_summary: '食べログ: イタメシOliva、イタリアン・バル・居酒屋、中京区下樵木町202-4-1 先斗町たばこやビル 3F、河原町駅から徒歩約3分、月火金土日 17:00〜24:00、木 19:00〜24:00、水曜休み、電話予約、当日の無断キャンセルは1人1,000円、1人1品1ドリンク以上、混雑時120分制、12席、禁煙、カード・電子マネー可、英語メニュー、税別表記、2017年8月2日オープン。店の紹介 (英訳): Fukui の Obama の Wakasa の鮮魚と旬の食材、Wakasa の米のリゾット、先斗町の15番路地。口コミ (2024〜2026年、英語): 店主は Obama 出身、ペペロンチーノ、イカスミのリゾット、オリーブの肉詰めフライ、牡蠣のグラタン、ラムステーキ、パンナコッタ、2人でワイン1本と約14,000円。',
      confidence: 'medium', sources: [TB, R + 'B472281357/', R + 'B498645481/', R + 'B502936838/', R + 'B507545936/', R + 'B510786368/', R + 'B521409911/', R + 'B524847035/', R + 'B525361676/', R + 'B527537933/', R + 'B529585173/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); popular with visitors from abroad; book by phone or Instagram DM.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町202-4-1 先斗町たばこやビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005778, 135.771049); cross-checked: GSI 京都府京都市中京区下樵木町202番地 (lot) 24m; same building as kyoto_pontocho_tabakoya, 11.6 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510786368/'],
    price_note: 'No menu read; one July 2025 bill (¥14,000 for two with a bottle of wine).', last_checked: TODAY, items: [
      it('', '', 'Squid-ink risotto', '', 'Risotto', 'ask', 'no', 'November 2024.', 'nero_risotto'),
      it('', '', 'Fried olives stuffed with meat', '', 'Small plates', 'no', 'no', 'November 2024.', 'olive_ascolane'),
      it('', '', 'Oyster gratin', '', 'Small plates', 'no', 'no', 'January 2026.', 'oyster_gratin'),
    ] }, {
    cuisine: '店主の故郷 Fukui の Obama にある Wakasa の魚と旬の食材を使う小さなイタリアン、Wakasa の米のリゾット (食べログ、2024〜2025年の口コミ)・前菜の盛り合わせ、生ハムとモッツァレラ、季節の生ハムとチーズといちご、豚のパテ、オリーブの肉詰めフライ・パスタ: ペペロンチーノ、海藻のアーリオオーリオ、ムール貝のパスタ、ホタルイカとふきのとうのリングイネ・イカスミのリゾット、ゴルゴンゾーラのリゾット・牡蠣のグラタン、茄子とポルチーニのチーズ焼き・鴨のロースト、ローストビーフ、ラムステーキ・パンナコッタ・イタリアのビールとワイン (2024〜2026年の口コミ)・2人でワイン1本と約14,000円 (2025年7月)',
    neighborhood: '四条の北、先斗町の15番路地。河原町駅から徒歩3分',
    gf_detail: '要確認。パスタ、リゾット、パンを添えたグラタン、肉詰めのオリーブのフライが中心で、カルパッチョ、生ハム、ローストもある。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ほとんどの料理に魚介、肉、チーズを使う。季節の野菜や果物の前菜はあるが、ヴィーガンの料理名は出てこない (食べログ、2024〜2026年の口コミ)。',
    notes: '[イタリアン・先斗町、Wakasa の食材の3階の隠れ家] 先斗町の15番路地から入る、たばこやビルのエレベーターで上がる12席のイタリアン。オーナーシェフは Fukui の Obama 出身で、Wakasa の魚、旬の食材、Wakasa の米を中心にメニューを組む。前菜の盛り合わせや生ハムとモッツァレラから、イカスミのリゾット、季節のパスタ、牡蠣のグラタン、ラムステーキ、パンナコッタへ。量は多めで取り分け向き、頼めばメニューにない料理も。2人でワインを入れて約14,000円 (2025年7月)。電話で予約、水曜休み、24時まで。',
  });
}

// ================================================================ 麺喰金家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024018/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:40'], ['18:00', '19:40']);
  put({
    id: 'kyoto_men_kui_kin_ya', name: '麺喰金家 (Men Kui Kin Ya)', category: 'OMNI',
    lat: 35.001816, lng: 135.772051, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade wheat udon and battered tempura and kushikatsu (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A February 2025 reviewer says the shop offers vegan options and English menus, but the standard broth is bonito and kombu dashi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Monday–Wednesday, Saturday and Sunday 11:30–15:40 and 18:00–19:40; closed Thursday and Friday. An October 2025 review instead gives 11:30–20:00 (last order 19:30), closed Monday (or the next day after a holiday). No reservations; queues at times (Tabelog; 2025–2026 reviews). 15 seats (7 counter, two tables for 4); non-smoking (Tabelog). No cards; e-money and QR payments accepted (Tabelog). On a corner of the Miyagawacho tea-house streets, marked by a large lantern; 5 min from Gion-Shijo Stn (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 2: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawacho, south of Shijo east of the Kamo River — 5 min from Gion-Shijo Stn',
    cuisine: 'Handmade udon: thin, flat, glossy "hirauchi" noodles of Kyoto wheat, made by the owner, in a clear bonito-and-kombu broth (Tabelog; 2025–2026 reviews) · kake udon ¥650 (June 2026) · tanuki udon ¥1,150 (August 2026) · Kujo negi tempura with cold udon set ¥1,300, raw egg +¥250 (October 2025) · kamo negi tempura udon, kama-tama udon · tempura à la carte, e.g. burdock or onion ¥180, chicken (kashiwa) tempura, eggplant tempura · tempura rice bowl with a large shrimp, chicken tempura bowl · tamago kake gohan · kushikatsu (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('麺喰金家 京都'), menu_url: null,
    notes: '[Udon · Miyagawacho, handmade flat udon by the tea houses] A small handmade-udon counter on a corner of Miyagawacho\'s tea-house streets, under a big lantern, five minutes from Gion-Shijo Stn. The owner makes the noodles: thin, flat and glossy, from Kyoto wheat, boiled to order and served in a clear bonito-and-kombu broth. Kake udon from ¥650; the Kujo negi tempura with cold udon (¥1,300) and the tempura bowls are the popular orders. Reviews split on the tempura — some find it light and crisp, an August 2026 diner found it greasy — but agree on the noodles. Many guests are visitors from abroad; English menu. Hours vary between sources; check before going.',
    chef_bio: { chef_name: null, roles: ['Owner, who researches and makes the noodles by hand (Tabelog)'], origin: null,
      background: 'Per Tabelog\'s introduction: the owner researches and makes the noodles by hand; tempura and kushikatsu are specialities; the shop sits in Miyagawacho among tea houses. An April 2025 reviewer saw the udon being made, to the delight of tourists.',
      philosophy: null, specialty: 'Handmade flat udon; Kujo negi tempura.',
      anecdotes: [
        { text: 'A February 2025 reviewer noted that 70–80% of the customers were from abroad and that the shop offers English menus and vegan options.', source: R + 'B500794242/' },
        { text: 'An August 2026 diner praised the flat Kyoto-wheat udon but found the tempura greasy and the chicken tough: "Just come for the udon."', source: R + 'B533428449/' },
        { text: 'An August 2026 visitor liked the burdock and onion tempura (¥180 each) so much with a little salt that it never went into the udon.', source: R + 'B533563544/' },
      ],
      japanese_sources_summary: '食べログ: 麺喰金家、うどん、東山区博多町112-2、祇園四条駅から徒歩5分、月火水土日 11:30〜15:40・18:00〜19:40、木金休み、予約不可、15席 (カウンター7、4人テーブル2)、禁煙、カード不可、電子マネー・QR 可。店の紹介 (英訳): 店主が研究を重ねた手打ちの麺、天ぷらと串カツ、宮川町のお茶屋の並ぶ通り。口コミ (2025〜2026年、英語): 京都の小麦の平打ち麺、かつおと昆布の澄んだ出汁、かけうどん650円、たぬきうどん1,150円、九条ねぎの天ぷらと冷やしうどんのセット1,300円、天丼、卵かけご飯、英語メニュー、ヴィーガン対応、海外からの客が多い、2025年10月の口コミでは11:30〜20:00 (L.O. 19:30)・月曜休み。',
      confidence: 'medium', sources: [TB, R + 'B500794242/', R + 'B505079209/', R + 'B516579331/', R + 'B517718878/', R + 'B528368907/', R + 'B528372593/', R + 'B530615636/', R + 'B530685816/', R + 'B533428449/', R + 'B533563544/'] },
    cultural_comfort: { level: 'english', note: 'English menu (February 2025); most guests are from abroad; no cards, but e-money and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区博多町112-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001816, 135.772051); cross-checked: GSI 京都府京都市東山区博多町112番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530685816/', R + 'B533563544/', R + 'B516579331/'],
    price_note: 'No menu read; prices from October 2025 – August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kake udon', '¥650', 'Udon', 'no', 'no', 'June 2026.', 'kake_udon'),
      it('', '', 'Tanuki udon (hot)', '¥1,150', 'Udon', 'no', 'no', 'August 2026.', 'tanuki_udon'),
      it('', '', 'Kujo negi tempura with cold udon', '¥1,300', 'Udon', 'no', 'ask', 'October 2025; raw egg +¥250.', 'kujo_negi_tempura_udon'),
      it('', '', 'Burdock or onion tempura', '¥180', 'Tempura', 'no', 'ask', 'August 2026.', 'yasai_tempura'),
    ] }, {
    cuisine: '手打ちうどん: 店主が打つ京都の小麦の細く平たいつやのある「平打ち」麺を、かつおと昆布の澄んだ出汁で (食べログ、2025〜2026年の口コミ)・かけうどん650円 (2026年6月)・たぬきうどん1,150円 (2026年8月)・九条ねぎの天ぷらと冷やしうどんのセット1,300円、生卵+250円 (2025年10月)・鴨ねぎ天うどん、釜玉うどん・天ぷらの単品、たとえばごぼうや玉ねぎ180円、かしわ天、茄子天・大きな海老の天丼、鶏天丼・卵かけご飯・串カツ (食べログ、2025〜2026年の口コミ)',
    neighborhood: '宮川町、四条の南、鴨川の東。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。手打ちの小麦のうどん、衣をつけた天ぷらと串カツ (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。2025年2月の口コミはヴィーガン対応と英語メニューがあるとするが、ふつうの出汁はかつおと昆布 (2025〜2026年の口コミ)。',
    notes: '[うどん・宮川町、お茶屋の町の手打ち平打ちうどん] 祇園四条駅から5分、宮川町のお茶屋の並ぶ通りの角、大きな提灯の小さな手打ちうどんの店。麺は店主が打つ京都の小麦の細く平たいつやのある麺で、注文ごとにゆで、かつおと昆布の澄んだ出汁で。かけうどんは650円から、人気は九条ねぎの天ぷらと冷やしうどん (1,300円) や天丼。天ぷらは軽くさくさくという声と、2026年8月の油っぽいという声に分かれるが、麺の評価は一致。海外からの客が多く英語メニューあり。営業時間は情報源で違うので確認を。',
  });
}

// ================================================================ カフェ デ コラソン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022566/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://cafe-de-corazon.com/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_cafe_de_corazon', name: 'カフェ デ コラソン (cafe de corazon)', category: 'MOM_AND_POP',
    lat: 35.026479, lng: 135.75427, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. House-made tarts, cheesecake, cookies, parfaits, French toast and toast; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee suits, but the sweets use cream, cheese and eggs (2026 reviews).',
    hours_raw: '10:00–17:00, Monday–Saturday; closed Sunday and the third Monday (Tabelog). No seat reservations, but cakes can be held (Tabelog). Cash only (Tabelog: payment changed to cash only; September 2026). 8 counter seats; non-smoking; one parking space (Tabelog; October 2026). Takeaway: coffee beans, baked goods, coffee jelly (Tabelog; September 2026). 8–9 min walk from Imadegawa Stn (2026 reviews). Opened 12 June 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishijin residential streets — 8 min walk from Imadegawa Stn',
    cuisine: 'Roastery café: about 20 house-roasted beans from light to dark, hand-picked to remove defects, brewed with care (September 2026) · single origins such as Guatemala SHB ¥880 (August 2026), Peru and Uganda; Italian blend; coffee from ¥930 and iced coffee ¥930 (October 2026); coffee soda, iced milk ¥750 · sweets by the owner\'s wife, a pastry chef: cheesecake ¥450, seasonal tarts, seasonal parfaits (white peach in summer), nougat glacé with plum ¥680, vanilla crescent cookies, coffee jelly (2026 reviews) · lunch such as toast and weekday French toast (September 2026)',
    website: SITE, gmaps: gm('cafe de corazon 京都'), menu_url: SITE,
    notes: '[Café · Nishijin, an eight-seat roastery counter] A counter café in a residential lane of Nishijin, opened in 2012 by Katsushi Kawaguchi, who trained and served as manager at the famed Cafe Bach in Tokyo\'s Minami-Senju, with the owner\'s wife, a pastry chef. About 20 house-roasted, hand-sorted beans are brewed to order; cakes, tarts and seasonal parfaits come from the wife\'s oven; seasonal paintings change on the walls. Coffee from about ¥930 (October 2026), cheesecake ¥450. Eight seats, no seat bookings, cash only. Closed Sunday and the third Monday.',
    chef_bio: { chef_name: 'Katsushi Kawaguchi (romaji from a September 2026 review; the kanji is not in a source)', roles: ['Owner and roaster (September 2026 review: "The owner, Katsushi Kawaguchi, trained at ... Cafe Bach")', 'The owner\'s wife, a pastry chef, makes the sweets (September 2026 review)'], origin: null,
      background: 'Per September 2026 reviews: the owner trained at Cafe Bach in Minami-Senju, Tokyo, and served as its manager; the owner\'s wife, originally from Kyoto and a pastry chef, makes the sweets; the café roasts on the same type of roaster as Cafe Bach. One September 2026 reviewer gives the founding of this shop as 2002; Tabelog gives the opening as 12 June 2012. An August 2026 reviewer mentions a second shop, cafe de corazon Nino, in Nijo. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Hand-sorted house-roasted coffee; seasonal tarts and parfaits.',
      anecdotes: [
        { text: 'A September 2026 regular (22 visits) noted the seasonal paintings on the walls — a Gion Matsuri float earlier, chrysanthemums for the Chōyō festival in September.', source: R + 'B122967695/' },
        { text: 'A September 2026 visitor bought the coffee jelly to take away; it separated before reaching the hotel but still tasted delicious.', source: R + 'B536422142/' },
        { text: 'An October 2026 diner found coffee from ¥930 a bit pricey but enjoyed it from a Wedgwood mug and a long chat with the owner.', source: R + 'B538250191/' },
      ],
      japanese_sources_summary: '食べログ: カフェ デ コラソン (cafe de corazon)、カフェ、上京区革堂町593-15、今出川駅から604m、月〜土 10:00〜17:00、日曜と第3月曜休み、席の予約不可 (ケーキの取り置きは可)、現金のみに変更、カウンター8席、禁煙、駐車場1台、テイクアウト可、2012年6月12日オープン、カフェ WEST 百名店 2025。公式サイト (cafe-de-corazon.com): 自家焙煎珈琲と手作りお菓子のお店、コーヒー豆とお菓子のオンラインショップ。口コミ (2026年、英語): 店主 Katsushi Kawaguchi は Minami-Senju の Cafe Bach で修業し店長も務めた、パティシエの奥さん、約20種の豆、ハンドピック、チーズケーキ450円、季節のタルトとパフェ、コーヒー930円から、二条に2号店 Nino。',
      confidence: 'medium', sources: [TB, SITE, R + 'B122967695/', R + 'B476989800/', R + 'B534215350/', R + 'B535206856/', R + 'B535330263/', R + 'B535615870/', R + 'B536274668/', R + 'B536422142/', R + 'B537482162/', R + 'B538250191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight counter seats; cash only; cakes can be held by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区革堂町593-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the shop\'s online store; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.026479, 135.754270); cross-checked: GSI 京都府京都市上京区革堂町593番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534215350/', R + 'B535206856/', R + 'B537482162/'],
    price_note: 'No menu read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Guatemala SHB (medium roast)', '¥880', 'Coffee', '', '', 'August 2026.', 'guatemala'),
      it('', '', 'Iced coffee', '¥930', 'Coffee', '', '', 'October 2026.', 'iced_coffee'),
      it('', '', 'Cheesecake', '¥450', 'Sweets', 'ask', 'no', 'August, October 2026.', 'cheesecake'),
      it('', '', 'Nougat glacé with plum', '¥680', 'Sweets', 'ask', 'no', 'August 2026.', 'nougat_glace'),
    ] }, {
    cuisine: '自家焙煎のカフェ: 浅煎りから深煎りまで約20種、欠点豆をハンドピックで除き、丁寧に淹れる (2026年9月)・グアテマラ SHB 880円 (2026年8月)、ペルー、ウガンダなどのシングルオリジン、イタリアンブレンド、コーヒーは930円から、アイスコーヒー930円 (2026年10月)、コーヒーソーダ、アイスミルク750円・パティシエの奥さんのお菓子: チーズケーキ450円、季節のタルト、季節のパフェ (夏は白桃)、梅のヌガーグラッセ680円、バニラの三日月形クッキー、コーヒーゼリー (2026年の口コミ)・トーストや平日のフレンチトーストなどの軽食 (2026年9月)',
    neighborhood: '西陣の住宅街。今出川駅から徒歩8分',
    gf_detail: '要確認。自家製のタルト、チーズケーキ、クッキー、パフェ、フレンチトースト、トースト。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーは合うが、お菓子はクリーム、チーズ、卵を使う (2026年の口コミ)。',
    notes: '[カフェ・西陣、8席の自家焙煎のカウンター] 西陣の住宅街の路地にあるカウンターだけのカフェ。Tokyo の Minami-Senju の Cafe Bach で修業し店長も務めた Katsushi Kawaguchi と、パティシエの奥さんが2012年に開いた。約20種の自家焙煎でハンドピックした豆を注文ごとに淹れ、ケーキ、タルト、季節のパフェは奥さんの手作り。壁の季節の絵も替わる。コーヒーは約930円から (2026年10月)、チーズケーキ450円。8席で席の予約は不可、現金のみ。日曜と第3月曜休み。',
  });
}

// ================================================================ SONGBIRD COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26013578/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:30']);
  put({
    id: 'kyoto_songbird_coffee', name: 'SONGBIRD COFFEE', category: 'OMNI',
    lat: 35.01626, lng: 135.752236, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature curry comes with rice, fried onions and a soft-boiled egg, while the egg sandwiches use buttered bread; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature dishes are built on egg (the thick omelette sandwich, the curry\'s soft-boiled egg), with butter, cheese and chicken (2026 reviews).',
    hours_raw: '10:00–18:30, last order 18:00; closed Thursday; hours may change (Tabelog). No reservations; a wait at lunch (October 2026). 25 seats: a counter of single boxes, tables for 2, 4 and 6; non-smoking; children and prams welcome (Tabelog; October, November 2026). Cards, IC cards and QR payments (Tabelog). Egg sandwiches to take away (October 2026). Second floor of SONGBIRD DESIGN STORE, near Nijo Castle; 7–8 min from Nijojo-mae Stn (Tabelog; 2026 reviews). Opened 16 May 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori east of Horikawa, near Nijo Castle — 8 min from Nijojo-mae Stn',
    cuisine: 'Café above a furniture and design shop, known for its curry and egg sandwich (2026 reviews) · SONGBIRD curry: rice moulded into a cylinder like a nest, topped with a soft-boiled egg and fried onions; fried-egg curry; cheese topping · egg sandwich with a hot, thick, fluffy omelette on buttered bread, with marinated carrots and yogurt ¥1,350; egg and tuna, egg and roast chicken sandwiches · half-and-half lunch (half curry, half egg sandwich) ¥1,650 · butter yokan, cheesecake · coffee from roasters around Japan, e.g. "Café Vivant Dimanche" of Kamakura: iced coffee ¥750–850; hojicha banana shake ¥900 (2026 reviews)',
    website: 'http://www.songbird-design.jp/', gmaps: gm('SONGBIRD COFFEE 京都'), menu_url: null,
    notes: '[Café · Nijo Castle, curry and egg sandwiches above a design store] A café on the second floor of SONGBIRD DESIGN STORE near Nijo Castle, furnished with the studio\'s own furniture and goods (some for sale). The two dishes everyone orders are the SONGBIRD curry — a cylinder of rice crowned with a soft-boiled egg and crisp onions — and the hot, thick egg sandwich on buttered bread; the half-and-half lunch (¥1,650) gets both. Coffee comes from roasters around Japan; the hojicha banana shake is a big glass. Expect a short queue at lunch. Open 10:00–18:30, closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Run with SONGBIRD DESIGN STORE, a Kyoto interior and furniture studio (Tabelog address; October 2026 reviews)'], origin: null,
      background: 'An October 2026 reviewer describes the café as designed by an interior designer and furnished with original furniture and décor; another notes that the company also runs a furniture store and sells some of the café\'s items. Tabelog gives the opening as 16 May 2009. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'SONGBIRD curry; egg sandwich.',
      anecdotes: [
        { text: 'An October 2026 diner rated the egg sandwich as good as the one at Yamamoto Kissa and bought a coaster and a sticker in the shop.', source: R + 'B537412264/' },
        { text: 'A November 2026 visitor sat in a single-person box at the counter and had an iced coffee from "Café Vivant Dimanche" of Kamakura (¥850), too big to finish, so half went into a takeaway cup.', source: R + 'B538452281/' },
        { text: 'An October 2026 regular compares the egg sandwich with those of "Maduragu" and "Tirol".', source: R + 'B527778799/' },
      ],
      japanese_sources_summary: '食べログ: SONGBIRD COFFEE、カフェ・カレー、中京区竹屋町通堀川東入西竹屋町529 SONGBIRD DESIGN STORE. 2F、二条城前駅から516m、10:00〜18:30 (L.O. 18:00)、木曜休み、予約不可、25席、禁煙、カード・電子マネー・QR 可、テイクアウト可、子ども・ベビーカー歓迎、2009年5月16日オープン、カフェ WEST 百名店 2025。口コミ (2026年、英語): インテリアデザイナーが手がけた店、家具店も運営、SONGBIRD カレー (筒形のご飯に半熟卵とフライドオニオン)、厚焼き卵のたまごサンド1,350円、ハーフ&ハーフランチ1,650円、全国のロースターのコーヒー、ほうじ茶バナナシェイク900円、バター羊羹、チーズケーキ。',
      confidence: 'medium', sources: [TB, R + 'B527778799/', R + 'B535435871/', R + 'B535616243/', R + 'B536106078/', R + 'B537325526/', R + 'B537412264/', R + 'B537993569/', R + 'B538296237/', R + 'B538363824/', R + 'B538452281/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; cards and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通堀川東入西竹屋町529 SONGBIRD DESIGN STORE. 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.016260, 135.752236); cross-checked: GSI 京都府京都市中京区西竹屋町529番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537325526/', R + 'B538296237/', R + 'B536106078/'],
    price_note: 'No menu read; prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Half-and-half lunch (half SONGBIRD curry, half egg sandwich)', '¥1,650', 'Lunch', 'ask', 'no', 'October 2026.', 'half_and_half'),
      it('', '', 'Egg sandwich with marinated carrots and yogurt', '¥1,350', 'Sandwiches', 'no', 'no', 'October 2026; also to take away.', 'egg_sandwich'),
      it('', '', 'Hojicha banana shake', '¥900', 'Drinks', '', 'ask', 'September 2026.', 'hojicha_banana_shake'),
      it('', '', 'Iced coffee', '¥750', 'Drinks', '', '', 'October 2026 (¥850 for a guest roaster, November 2026).', 'iced_coffee'),
    ] }, {
    cuisine: '家具とデザインの店の上のカフェ。カレーとたまごサンドで知られる (2026年の口コミ)・SONGBIRD カレー: 巣のように筒形にしたご飯に半熟卵とフライドオニオン、目玉焼きのカレー、チーズトッピング・熱々の厚焼き卵をバターのパンにはさんだたまごサンド、キャロットラペとヨーグルト付き1,350円、卵とツナ、卵とローストチキンのサンド・ハーフ&ハーフランチ (カレー半分とたまごサンド半分) 1,650円・バター羊羹、チーズケーキ・全国のロースターのコーヒー、たとえば Kamakura の「Café Vivant Dimanche」、アイスコーヒー750〜850円、ほうじ茶バナナシェイク900円 (2026年の口コミ)',
    neighborhood: '堀川の東の竹屋町通、二条城の近く。二条城前駅から徒歩8分',
    gf_detail: '要確認。看板のカレーはご飯にフライドオニオンと半熟卵、たまごサンドはバターを塗ったパン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。看板料理は卵が中心 (厚焼き卵のサンド、カレーの半熟卵) で、バター、チーズ、鶏肉も使う (2026年の口コミ)。',
    notes: '[カフェ・二条城、デザインの店の上のカレーとたまごサンド] 二条城の近く、SONGBIRD DESIGN STORE の2階のカフェ。店のオリジナル家具や雑貨でしつらえ、一部は買える。みんなが頼むのは、筒形のご飯に半熟卵とさくさくの玉ねぎをのせた SONGBIRD カレーと、熱々の厚焼き卵をバターのパンにはさんだたまごサンド。両方食べるならハーフ&ハーフランチ (1,650円)。コーヒーは全国のロースターから、ほうじ茶バナナシェイクは大きなグラス。昼は少し並ぶ。10時〜18時半、木曜休み。',
  });
}

save();
