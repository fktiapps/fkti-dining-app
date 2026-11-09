// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 84.
//   + 湯波半老舗 Yuba Han Shinise (yuba maker since 1716, takeaway only; coordinator lead under Greg's 11-08 back-fill ruling) — rest
//   + WINDY (coffee-only kissaten since 1972, roasting its own beans since 1982, near Gojo) — rest
//   - skip 26013946 プチブラウン (thin: no review since December 2024)
//   - skip 26005192 進々堂 三条店 (chain; earlier ruling 26016962)
//   - skip 26032066 さち福や SUINA室町店 (chain)
//   - skip 26019340 京山城屋 (retail food shop, Greg 11-07 ruling)
//   - skip 26032036 蕎麦酒場 清修庵 (chain: 17 清修庵 shops)
//   + 餃子と煮込み 魚屋鮨しん Gyoza to Nikomi Sakana-ya Sushi Shin (gyoza, beef-tendon stew and a sushi counter in SUINA Muromachi) — rest
//   - skip 26024968 大八寿司 (thin: two one-line 2026 reviews)
//   + Tea Lounge ISOLA (16-dish obanzai lunch with self-roasted tea, Shijo-Muromachi) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl and the THAN brand list
//   (than.co.jp/brands, read 2026-11-08): no THAN matches. Earlier rulings found: 進々堂 (26016962, chain); 鮨しん 富小路 and
//   季節料理鮨しん (skipped as same-concept branches of 錦 鮨しん 本店); ISOLA — Caffè Terrace ISOLA is in data.
//   Same-name counts (2026-11-08): 湯波半 — one. WINDY — one. 魚屋鮨しん — the shop's own site (gyoza-nikomi.com) lists only the
//   gyoza counter and the 8-seat sushi counter at SUINA Muromachi; nothing sourced ties it to 錦 鮨しん (whose site lists one shop),
//   and it is a gyoza-and-stew counter, not the same concept. Tea Lounge ISOLA — one; Caffè Terrace ISOLA (Daimaru 8F, in data) is a
//   sweets café "from the team behind" it, a different concept (ten-sweet gozen vs a 16-dish savoury obanzai lunch).
//   None of the four drafted is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013946', 'thin: プチブラウン has no Tabelog review since December 2024 (https://tabelog.com/en/kyoto/A2601/A260301/26013946/).');
skip('26005192', 'chain: 進々堂 bakery cafés (earlier ruling on 26016962) (https://tabelog.com/en/kyoto/A2601/A260202/26005192/).');
skip('26032066', 'chain: さち福や is a set-meal chain — a May 2026 reviewer calls it part of a nationwide chain and a September 2026 reviewer a set-meal chain (https://tabelog.com/en/kyoto/A2601/A260201/26032066/dtlrvwlst/B528701105/; https://tabelog.com/en/kyoto/A2601/A260201/26032066/).');
skip('26019340', 'retail food shop (Greg 11-07 ruling): 京山城屋 is a dried-goods shop with a shichimi-blending workshop; no founding date is sourced beyond a 2023 reviewer’s "over 110 years", and no GF/vegan claim (https://www.kyo-yama.jp/; https://tabelog.com/en/kyoto/A2601/A260202/26019340/).');
skip('26032036', 'chain: 株式会社清修庵 lists 17 清修庵 soba shops in Kyoto, Osaka, Hyogo, Shiga, Nara, Wakayama and Mie (https://www.seisyuan.co.jp/shopinfo/; https://tabelog.com/en/kyoto/A2601/A260201/26032036/).');
skip('26024968', 'thin: 大八寿司 has two 2025–26 Tabelog reviews, both one or two lines — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260201/26024968/).');

// ================================================================ 湯波半老舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001334/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.yubahan.com/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_yubahan_shinise', name: '湯波半老舗 (Yuba Han Shinise)', category: 'OMNI',
    lat: 35.011606, lng: 135.765702, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop describes yuba as the film that forms on heated soy milk made from soybeans (shop site); no sauce is sold with it in the sources, and no allergen or cross-contact information is given. Bring your own wheat-free soy sauce.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain yuba is made from soy milk (shop site), but no vegan claim is sourced; botan yuba is wrapped around ginkgo nuts and lily bulb (shop site) — ask how it is seasoned.',
    hours_raw: 'Takeaway only — a yuba maker and shop, no seating. Mon–Wed and Fri–Sun 8:00–17:00; closed Thursday (Tabelog; shop site). Yuba is ready by about 10:00, and calling ahead to reserve is advised (May 2026); botan yuba must be reserved (shop site). Bring a cooler bag and ice packs — the fresh yuba must be kept cold (June 2025, May 2026). Cash only: no cards or e-money (Tabelog). Shipping within Japan on request (shop site). Founded 1716 (yubahan.com); family succession not sourced. On Fuyamachi-dori, north of Oike, about five minutes from Kyoto Shiyakusho-mae Station exit 9 (shop site).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Fuyamachi, north of Oike — Kyoto City Hall',
    cuisine: 'Yuba maker and shop founded 1716, takeaway only · sashimi yuba ¥1,620 (June 2025) · samples offered while you wait (June 2025) · shop list: sashimi yuba ¥1,500 a length, kumiage yuba ¥1,200 a pack, hikiage yuba ¥1,000 for five sheets, botan yuba (ginkgo and lily bulb wrapped in yuba) ¥300 each, all before tax',
    website: SITE, gmaps: gm('湯波半老舗 京都 麩屋町'), menu_url: SITE,
    notes: '[Yuba · takeaway · Fuyamachi-Oike] A yuba maker founded in 1716, selling fresh yuba to take away from a workshop-like shop on Fuyamachi north of Oike: sashimi yuba, kumiage yuba, sheet yuba, and botan yuba by reservation. Samples while you wait. No seating. Cash only; bring a cooler bag. Closed Thursday. Founded 1716 (yubahan.com); family succession not sourced.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: 「1716年（享保元年）創業のゆばの製造・小売専門店」, a yuba maker and retailer founded in 1716, making yuba by the stone-mill method handed down since its founding. Family succession not sourced.',
      philosophy: 'Per the shop site: yuba made by the stone-ground method passed down since the founding.', specialty: 'Sashimi yuba; kumiage yuba; botan yuba.',
      anecdotes: [
        { text: 'A June 2025 visitor found the noren up but no one in front; after calling out, an older woman came out, offered three kinds of yuba to taste, and sold a pack of sashimi yuba for ¥1,620, carried home in a cooler bag.', source: R + 'B508984922/' },
        { text: 'A May 2026 visitor advises calling ahead, as the shop does not look open even with the noren up, and buying a cooler bag before going; the yuba is ready by about 10:00.', source: R + 'B528522264/' },
      ],
      japanese_sources_summary: '公式サイト: 1716年（享保元年）創業のゆばの製造・小売専門店、創業以来の石臼挽きの製法、さしみゆば1棹1,500円・汲み上げゆば1パック1,200円・引き上げゆば5枚1,000円・牡丹ゆば1個300円 (税抜)、牡丹ゆばは要予約、8時〜17時、木曜定休、地方発送可、京都市役所前駅9番出口から徒歩5分。食べログ: 豆腐料理、中京区麩屋町通御池上ル上白山町250、カード・電子マネー不可。口コミ (2025年6月・2026年5月、英語): 試食あり、さしみゆば1,620円、保冷バッグと保冷剤が必要、10時ごろにはゆばができている、事前に電話で予約するとよい。家族の継承の情報はなし。',
      confidence: 'medium', sources: [SITE, TB, R + 'B508984922/', R + 'B528522264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only. Call out at the door if no one is in front; samples are offered. Bring cash and a cooler bag. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通御池上ル上白山町250',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with current prices and hours; Tabelog reviews dated June 2025 and May 2026.' },
    pin_source: `Tabelog ${TB} (35.011606, 135.765702); cross-checked: GSI 京都府京都市中京区上白山町250番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B508984922/'],
    price_note: 'Shop-site prices are before tax; a June 2025 reviewer paid ¥1,620 for sashimi yuba.', last_checked: TODAY, items: [
      it('', '', 'Sashimi yuba (one length)', '¥1,500 + tax', 'Yuba', 'ask', 'ask', 'Shop site; ¥1,620 paid in June 2025.', 'sashimi_yuba'),
      it('', '', 'Kumiage yuba (one pack)', '¥1,200 + tax', 'Yuba', 'ask', 'ask', 'Shop site.', 'kumiage_yuba'),
      it('', '', 'Hikiage yuba (five sheets)', '¥1,000 + tax', 'Yuba', 'ask', 'ask', 'Shop site.', 'hikiage_yuba'),
      it('', '', 'Botan yuba (ginkgo and lily bulb wrapped in yuba), reservation needed', '¥300 + tax', 'Yuba', 'ask', 'ask', 'Shop site.', 'botan_yuba'),
    ] }, {
    cuisine: '1716年創業のゆばの製造・小売の店、持ち帰りのみ・さしみゆば1,620円 (2025年6月)・待つ間に試食 (2025年6月)・公式サイトの品目: さしみゆば1棹1,500円、汲み上げゆば1パック1,200円、引き上げゆば5枚1,000円、銀杏と百合根を包んだ牡丹ゆば1個300円 (いずれも税抜)',
    neighborhood: '麩屋町、御池の北。京都市役所前',
    gf_detail: '要確認。ゆばは大豆から作った豆乳を温めて表面にできる膜 (公式サイト)。たれの情報はなく、アレルゲンや交差接触の情報もなし。小麦不使用の醤油を持参するとよい。',
    vegan_detail: '要確認。ゆばは豆乳から作る (公式サイト) が、ヴィーガンの記載はない。牡丹ゆばは銀杏と百合根を包んだもの (公式サイト)。味付けを確認を。',
    notes: '[ゆば・持ち帰り・麩屋町御池] 1716年創業のゆばの店。麩屋町通御池上ルの工房のような店で、さしみゆば、汲み上げゆば、引き上げゆば、予約制の牡丹ゆばを持ち帰りで。待つ間に試食あり。席はなし。現金のみ、保冷バッグを持参。木曜休み。創業1716年 (yubahan.com)、家族の継承の情報はなし。',
  });
}

// ================================================================ WINDY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26011954/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '16:00']);
  put({
    id: 'kyoto_windy_coffee', name: 'WINDY', category: 'OMNI',
    lat: 34.994961, lng: 135.770036, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee-only menu (April 2025, April 2026); the coffee ice cream’s ingredients are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee only; blend coffee comes with dairy-type creamers (April 2025), and the Wiener coffee with whipped cream (December 2024). Black coffee is the safe order; no vegan claim is sourced.',
    hours_raw: 'Mon–Sat 7:00–16:00; closed Sunday and holidays; may change (Tabelog). Cash only (Tabelog; April 2025). No PCs or tablets (April 2025). Counter and tables for two to four, on the second floor of a small building (Tabelog; April 2025). About seven minutes on foot from the Kawaramachi Gojo bus stop (April 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Honmachi, near Gojo — Higashiyama',
    cuisine: 'Coffee-only kissaten, opened 1972, roasting its own beans since 1982 (April 2025) · house-roasted blend, flannel-drip brewed, ¥650 (April 2026) · blend with two creamers in gold-rimmed floral cups; coffee ice cream (April 2025) · Wiener coffee ¥850 and Guatemala ¥800 (December 2024)',
    website: 'http://www.eonet.ne.jp/~windy-i/', gmaps: gm('WINDY コーヒー 京都 東山 本町'), menu_url: TB,
    notes: '[Kissaten · Gojo, Higashiyama] A coffee-only kissaten upstairs near Gojo, open since 1972 and roasting its own beans since 1982: a mild, deep house blend brewed through cloth, single origins and coffee ice cream, with talk about roasting from the master. Opens at 7:00, closes at 16:00; cash only; no laptops.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), who roasts the beans (April 2026)'], origin: null,
      background: 'Per reviews: opened in 1972 and began roasting its own beans in 1982 (April 2025); run by an older couple (December 2024).',
      philosophy: null, specialty: 'House-roasted blend.',
      anecdotes: [
        { text: 'An April 2026 visitor had the house blend for ¥650 — dark in colour but mild — and talked roasting with the master.', source: R + 'B525693564/' },
        { text: 'An April 2025 visitor came on a weekday at 14:30, after a museum at Shichijo, and had the blend in a gold-rimmed floral cup in a quiet room.', source: R + 'B505820475/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区本町1-48 本町ビル2F、月〜土7:00〜16:00、日曜・祝日休み、カード・電子マネー・QR 不可、カウンター席とテーブル席。口コミ (2024年12月〜2026年4月、英語): 1972年開業、1982年から自家焙煎、現金のみ、パソコン・タブレットの使用不可、コーヒーだけのメニュー、コーヒーアイス、ブレンドにクリーム2つ、金縁の花柄のカップ、ネルドリップ、ウインナーコーヒー850円、グアテマラ800円、年配の夫婦が営む、ブレンド650円、マスターと焙煎の話。',
      confidence: 'medium', sources: [TB, 'http://www.eonet.ne.jp/~windy-i/', R + 'B497716118/', R + 'B505820475/', R + 'B525693564/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; leave the laptop in the bag. Coffee only — no food beyond coffee ice cream. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区本町1-48 本町ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.994961, 135.770036); GSI matched only 京都府京都市東山区本町一丁目 (chome, no lot) 8m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525693564/', R + 'B497716118/'],
    price_note: 'Prices from December 2024 and April 2026; reviewers report under ¥1,000 per person.', last_checked: TODAY, items: [
      it('', '', 'Blend coffee (house-roasted)', '¥650', 'Coffee', 'ask', 'ask', 'April 2026.', 'blend'),
      it('', '', 'Wiener coffee', '¥850', 'Coffee', 'ask', 'no', 'December 2024; whipped cream.', 'wiener'),
      it('', '', 'Guatemala', '¥800', 'Coffee', 'ask', 'ask', 'December 2024.', 'guatemala'),
      it('', '', 'Coffee ice cream', '', 'Coffee', 'ask', 'ask', 'April 2025.', 'coffee_ice'),
    ] }, {
    cuisine: '1972年開業、1982年から自家焙煎のコーヒーだけの喫茶店 (2025年4月)・ネルドリップの自家焙煎ブレンド650円 (2026年4月)・クリーム2つ付きのブレンドを金縁の花柄のカップで、コーヒーアイス (2025年4月)・ウインナーコーヒー850円、グアテマラ800円 (2024年12月)',
    neighborhood: '本町、五条の近く。東山',
    gf_detail: '要確認。コーヒーだけのメニュー (2025年4月・2026年4月)。コーヒーアイスの材料の情報なし。',
    vegan_detail: '要確認。コーヒーのみ。ブレンドにはクリームが付き (2025年4月)、ウインナーコーヒーはホイップクリーム (2024年12月)。ブラックが無難。ヴィーガンの記載はない。',
    notes: '[喫茶店・五条、東山] 五条近くの2階にあるコーヒーだけの喫茶店。1972年開業、1982年から自家焙煎。ネルで淹れるまろやかで深いブレンド、ストレート、コーヒーアイス。マスターと焙煎の話も。7時開店、16時閉店。現金のみ、パソコン不可。',
  });
}

// ================================================================ 餃子と煮込み 魚屋鮨しん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031988/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://gyoza-nikomi.com';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gyoza_nikomi_sakanaya_sushi_shin', name: '餃子と煮込み 魚屋鮨しん (Gyoza to Nikomi Sakana-ya Sushi Shin)', category: 'OMNI',
    lat: 35.00351, lng: 135.758728, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapped gyoza, miso and vinegar dipping sauces, soy-simmered beef-tendon stew, kara-age, sushi with soy sauce (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat gyoza, beef-tendon stew with egg, kara-age, fish sushi (2025–26 reviews).',
    hours_raw: 'Daily 11:00–15:00 (last order 14:00) and 17:00–22:00 (last order 21:00); closed New Year’s Day (Tabelog). Two counters under one roof: Gyoza to Nikomi (31 seats — 17 at the counter, 14 at tables) and the 8-seat Sakana-ya Sushi Shin sushi counter (shop site); sushi can be ordered from the gyoza side on a paper sheet (July 2026). The limited lunch can sell out (June 2026); busy at lunch (September 2026). Cards and e-money; no QR (Tabelog). On the first floor of SUINA Muromachi, Shijo-Muromachi, about three minutes from Karasuma and Shijo stations (shop site; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'SUINA Muromachi, Shijo-Muromachi — Shijo Karasuma',
    cuisine: 'Gyoza-and-stew counter with a small sushi counter alongside · gyoza and nikomi set ¥1,200 (March 2026) to ¥1,300 (June 2026), with a large rice portion at no extra cost (April 2026) · gyoza with house miso sauce or vinegar and pepper (April and July 2026) · beef-tendon stew on a sizzling plate with a soft-boiled egg, whole chilled tomato (August 2026) · iron-pan gyoza set (October 2026) · nigiri at the U-shaped sushi counter (June, July and September 2026)',
    website: SITE, gmaps: gm('餃子と煮込み 魚屋鮨しん SUINA室町'), menu_url: TB,
    notes: '[Gyoza & sushi · SUINA Muromachi] Two counters on the ground floor of SUINA Muromachi at Shijo-Muromachi: gyoza with miso or vinegar-and-pepper dips and beef-tendon stew as rice sets, and a small U-shaped sushi counter with generous nigiri and a friendly chef. Sushi can be ordered from the gyoza side. Open daily, lunch and dinner.',
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed), described as friendly (September 2026)'], origin: null,
      background: 'Per the shop site and reviews: a gyoza-and-stew counter and an 8-seat sushi counter side by side at SUINA Muromachi, the Kyoto Keizai Center building opened in 2019 (July 2026).',
      philosophy: null, specialty: 'Gyoza and beef-tendon stew; nigiri.',
      anecdotes: [
        { text: 'A March 2026 regular on an eighth visit had the gyoza and nikomi set for ¥1,200, with a choice of miso, vinegar-soy or yuzu dips, and found the stew packed with meat.', source: R + 'B481988465/' },
        { text: 'A July 2026 diner came in through the gyoza noren and found a paper sheet at the counter for ordering sushi from next door.', source: R + 'B532465569/' },
      ],
      japanese_sources_summary: '公式サイト: 餃子と煮込み31席 (カウンター17席・テーブル14席)、魚屋鮨しんカウンター8席、下京区四条室町東入函谷鉾町78 SUINA室町1F。食べログ: 居酒屋・餃子・寿司、毎日11:00〜15:00 (L.O.14:00)・17:00〜22:00 (L.O.21:00)、元日休み、カード・電子マネー可、QR 不可、2019年3月16日オープン。口コミ (2025年7月〜2026年10月、英語): 餃子と煮込み定食1,200〜1,300円、味噌だれと酢こしょう、ご飯大盛り無料、鉄板の牛すじ煮込みに半熟卵、冷やしトマト、紙で寿司も注文できる、コの字のカウンターの寿司、ネタが大きく気さくな大将、限定ランチは売り切れも、鉄板の餃子の定食。',
      confidence: 'medium', sources: [SITE, TB, R + 'B481988465/', R + 'B526900272/', R + 'B529276462/', R + 'B529489261/', R + 'B532465569/', R + 'B533228057/', R + 'B533315110/', R + 'B536849365/', R + 'B538811635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Solo diners usually sit at the counter; ask for the paper sheet to order sushi from the gyoza side. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条室町東入る函谷鉾町78 SUINA室町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated through October 2026.' },
    pin_source: `GSI 京都府京都市下京区函谷鉾町78番地 (lot) (35.003510, 135.758728) — SUINA Muromachi; Tabelog ${TB} plots 35.002800, 135.758299, 88m south across Shijo-dori, so the GSI lot point is used; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481988465/', R + 'B529276462/'],
    price_note: 'Set prices from March and June 2026; reviewers report ¥1,000–1,999 at lunch and more at the sushi counter at night.', last_checked: TODAY, items: [
      it('', '', 'Gyoza and nikomi (beef-tendon stew) set', '¥1,300', 'Sets', 'no', 'no', 'June 2026; ¥1,200 in March 2026.', 'gyoza_nikomi_set'),
      it('', '', 'Iron-pan gyoza set', '', 'Sets', 'no', 'no', 'October 2026.', 'teppan_gyoza_set'),
      it('', '', 'Beef-tendon stew with soft-boiled egg', '', 'Nikomi', 'no', 'no', 'August 2026.', 'gyusuji'),
      it('', '', 'Nigiri', '', 'Sushi', 'no', 'no', 'June–September 2026.', 'nigiri'),
    ] }, {
    cuisine: '寿司の小さなカウンターを併設した餃子と煮込みの店・餃子と煮込みの定食1,200円 (2026年3月)〜1,300円 (2026年6月)、ご飯大盛り無料 (2026年4月)・自家製の味噌だれや酢こしょうで食べる餃子 (2026年4月・7月)・鉄板にのった半熟卵入りの牛すじ煮込み、丸ごとの冷やしトマト (2026年8月)・鉄板の餃子の定食 (2026年10月)・コの字カウンターの握り (2026年6月・7月・9月)',
    neighborhood: 'SUINA室町、四条室町。四条烏丸',
    gf_detail: 'グルテンフリーではない。小麦の皮の餃子、味噌や酢のたれ、醤油で煮た牛すじ煮込み、唐揚げ、醤油で食べる寿司 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の餃子、卵入りの牛すじ煮込み、唐揚げ、魚の寿司 (2025〜2026年の口コミ)。',
    notes: '[餃子・寿司・SUINA室町] 四条室町のSUINA室町1階に並ぶ二つのカウンター。味噌だれや酢こしょうで食べる餃子と牛すじ煮込みの定食、ネタの大きい握りと気さくな大将のコの字の寿司カウンター。餃子側からも寿司を注文できる。毎日昼と夜に営業。',
  });
}

// ================================================================ Tea Lounge ISOLA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042602/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.tealounge-isola.com/';
  const H = day(['11:30', '19:00']);
  put({
    id: 'kyoto_tea_lounge_isola', name: 'Tea Lounge ISOLA (ティーラウンジ イゾラ)', category: 'OMNI',
    lat: 35.003919, lng: 135.758198, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: 16 small obanzai with miso soup, Saikyo-miso grilled fish, rice balls with meat miso, and parfaits with crushed pie and granola (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the gozen centres on grilled salmon and includes meat miso and Caprese; parfaits use ice cream and cream (2025–26 reviews).',
    hours_raw: 'Daily 11:30–19:00 (last order 18:00) (Tabelog). The colourful gozen lunch is served in two seatings, 11:30 and 13:30; the dango and mochi set is reserved for after 15:00 (Tabelog). Reserve on the website — weekday walk-ins were turned away (April 2026), and a Sunday was fully booked a month ahead (June 2026). Cards, e-money and QR (Tabelog). 22 seats with sofas and a terrace; free Wi-Fi; wheelchair accessible; children welcome (Tabelog). Second floor of the MOKU KYOTO building at Shijo-Muromachi; Gion Matsuri floats can be seen from the window seats (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Muromachi — Shijo Karasuma',
    cuisine: 'Tea lounge with a 16-dish obanzai lunch and tea you roast yourself · 16-variety colourful gozen with tea ¥3,300: bite-size Japanese and Western obanzai, Saikyo-yaki or Aomori salmon, charcoal-grilled rice balls, rice balls with meat miso, miso soup, dessert (2026 reviews) · tea leaves roasted over charcoal at the table, or a cold-tea tasting in summer (June and July 2026) · whole-peach parfait ¥2,200 (July and August 2026)',
    website: SITE, gmaps: gm('Tea Lounge ISOLA 京都 四条室町'), menu_url: TB,
    notes: '[Obanzai lunch & tea · Shijo-Muromachi] A second-floor tea lounge at Shijo-Muromachi serving a colourful lunch of 16 bite-size obanzai with grilled salmon, charcoal-grilled rice balls and miso soup, with tea you roast yourself over charcoal; seasonal parfaits in the afternoon. Lunch seatings at 11:30 and 13:30 — book online. Caffè Terrace ISOLA at Daimaru is its sister café.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a tea lounge on the second floor of the MOKU KYOTO building at Shijo-Muromachi, opened 3 March 2025. Caffè Terrace ISOLA at Daimaru Kyoto, already listed, comes from the same team.',
      philosophy: 'Per Tabelog: self-roasted tea enjoyed with all the senses, after the Zen phrase "reidan jichi".', specialty: '16-variety obanzai gozen with self-roasted tea.',
      anecdotes: [
        { text: 'A June 2026 diner who booked a month ahead roasted tea leaves in a pot over charcoal for about a minute, with the staff explaining in a Kyoto accent; walk-ins were sent to the 13:30 seating.', source: R + 'B530679898/' },
        { text: 'A July 2026 repeat visitor, back after a year, noted the dishes change with the seasons and that the window seats look onto the Gion Matsuri floats.', source: R + 'B512611072/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区函谷鉾町77 MOKU KYOTOビル2F、毎日11:30〜19:00 (L.O.18:00)、彩り御膳は11:30と13:30の二部制、団子と餅のセットは15時以降予約可、ウェブ予約、カード・電子マネー・QR 可、22席、テラス席、無料 Wi-Fi、車椅子可、子ども可、2025年3月3日オープン、禅の言葉にちなむ、自分で焙じるお茶。口コミ (2026年4月〜10月、英語): 16種のおばんざいの彩り御膳とお茶のセット3,300円、西京焼きや青森のサーモン、炭火の焼きおにぎり、肉味噌のおにぎり、味噌汁、デザート、炭火で茶葉を焙じる、夏は冷茶の飲み比べ、平日も予約なしでは入れない、窓から祇園祭の山鉾、丸ごと桃のパフェ2,200円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B512611072/', R + 'B526463998/', R + 'B526971901/', R + 'B530515710/', R + 'B530679898/', R + 'B532928767/', R + 'B536459646/', R + 'B538060301/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the 11:30 or 13:30 lunch seating online; the staff walk you through roasting the tea. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区函谷鉾町77 MOKU KYOTOビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003919, 135.758198); cross-checked: GSI 京都府京都市下京区函谷鉾町77番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536459646/', R + 'B532928767/'],
    price_note: 'Prices from 2026 reviews; reviewers report ¥3,000–3,999 per person at lunch.', last_checked: TODAY, items: [
      it('', '', '16-variety colourful gozen with tea', '¥3,300', 'Lunch', 'no', 'no', 'June–September 2026.', 'irodori_gozen'),
      it('', '', 'Whole-peach parfait (seasonal)', '¥2,200', 'Sweets', 'no', 'no', 'July 2026.', 'peach_parfait'),
    ] }, {
    cuisine: '16品のおばんざいの昼食と自分で焙じるお茶のティーラウンジ・お茶付き16種の彩り御膳3,300円: 一口サイズの和洋のおばんざい、西京焼きや青森のサーモン、炭火の焼きおにぎり、肉味噌のおにぎり、味噌汁、デザート (2026年の口コミ)・席で炭火で焙じる茶葉、夏は冷茶の飲み比べ (2026年6月・7月)・丸ごと桃のパフェ2,200円 (2026年7月・8月)',
    neighborhood: '四条室町。四条烏丸',
    gf_detail: 'グルテンフリーではない。16品の小さなおばんざいと味噌汁、西京焼き、肉味噌のおにぎり、パイやグラノーラのパフェ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。御膳は焼いたサーモンが中心で、肉味噌やカプレーゼも。パフェはアイスとクリーム (2025〜2026年の口コミ)。',
    notes: '[おばんざいの昼食とお茶・四条室町] 四条室町のビル2階のティーラウンジ。一口サイズのおばんざい16品に焼き鮭、炭火の焼きおにぎり、味噌汁の彩り御膳を、自分で炭火で焙じるお茶と。午後は季節のパフェ。昼は11:30と13:30の二部制、ウェブで予約を。大丸のCaffè Terrace ISOLAは姉妹店。',
  });
}

save();
