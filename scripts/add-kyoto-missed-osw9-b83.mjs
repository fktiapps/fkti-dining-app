// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 83.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - もともともとや — no reviews
//   + 祇園寿司 Sushi and Bar SPOT (late-night sushi counter with jazz in Gion Shinbashi)
//   + GION TACHINOMI 山根子 Yamaneko (Kyoto craft beer and sake in a 150-year-old former teahouse; since 2023)
//   + 臼松 Usumatsu (Kiyamachi izakaya for gyoza and oden)
//   - Matricaria — retail food shop (Greg 11-07 ruling): a take-home patisserie open Fri and Sat only, opened November 2024;
//     not historic, and no sourced gluten-free or vegan options
//   - 博多もつ鍋 やまや 四条烏丸店 — chain: やまや, a national mentaiko and motsunabe brand with many shops
//   Brand checks: none of もともともとや, SPOT, 山根子, 臼松 or Matricaria is in data or queue-status by name (the もともと
//   hit in data is another word; the SPOT hit is LIVE SPOT RAG); a Tabelog search for 臼松 / Usumatsu finds only this shop;
//   gion-yamaneko.com names no sister shops. None is a THAN brand (than.co.jp/brands). None is in a hotel.
//   Service charges from Tabelog's Japanese original: 臼松 「おひとり様385円（税込）」; SPOT and 山根子 have no section.
//   Pins (checked against main, hidden records included): 臼松's address has no lot number and its Tabelog point was 2.9m
//   from kyoto_umemura_kiyamachi, so it is moved 8m ENE with loc_approx 'single'; SPOT and 山根子 ≥ 10m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045747', 'no reviews');
skip('26042159', 'retail food shop (Greg 11-07 ruling): Matricaria is a take-home patisserie (cakes and individually wrapped baked goods, open Fri and Sat only, reservations for cakes) opened November 2024; not historic, no sourced GF or vegan options');
skip('26022515', 'chain: 博多もつ鍋 やまや, a national mentaiko and motsunabe brand with many shops');

// ================================================================ 祇園寿司 Sushi and Bar SPOT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016581/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '25:00']);
  put({
    id: 'kyoto_gion_sushi_spot', name: '祇園寿司 Sushi and Bar SPOT', category: 'OMNI',
    lat: 35.005767, lng: 135.776884, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and sashimi are often served with soy sauce; tempura is also on the menu (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi bar.',
    hours_raw: 'Mon–Sat 18:00–01:00; closed Sundays and holidays (Tabelog). Cards (JCB, AMEX); no e-money (Tabelog). Counter seats only (February 2026 review). Smoking allowed (Tabelog). Ground floor of the Higashi-Shinbashi Building on Shinbashi-dori east of Hanamikoji (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, east of Hanamikoji — 7 min from Gion-Shijo Stn',
    cuisine: 'Sushi and drinks to jazz: fish bought at the market, sushi, sashimi and tempura (Tabelog); no fixed menu in 2022 — an omakase of small dishes and sushi, scaled to taste (July 2022, July 2023); a la carte for a whole-counter booking (February 2026); about ¥8,000–15,000',
    website: null, gmaps: gm('祇園寿司 Sushi and Bar SPOT'), menu_url: null,
    notes: '[Sushi bar · Gion] A small late-night sushi counter with jazz on Shinbashi, open to 1 am: market fish as omakase or a la carte with drinks — a relaxed second or last stop. About ¥8,000–15,000; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A chef who looks stern but is kind and funny (July 2022 review).',
      philosophy: 'Fresh fish from the market at reasonable prices, with jazz (Tabelog).',
      specialty: 'Omakase sushi with drinks.',
      anecdotes: [
        { text: 'A July 2022 guest was told there was no rice left, asked for just one dish instead, and found it excellent.', source: R + 'B452920212/' },
        { text: 'A February 2026 group of friends booked the whole counter and ordered a la carte, finding every dish good value.', source: R + 'B523575531/' },
      ],
      japanese_sources_summary: '食べログ: 祇園寿司 Sushi and Bar SPOT、寿司・バー、東山区林下町427 東新橋ビル1F、月〜土 18:00〜翌1:00、日曜・祝日休み、カード可 (JCB・AMEX)、電子マネー不可、喫煙可、新鮮な仕入れの魚、ジャズ、寿司、刺身、てんぷら (紹介文、英訳)。口コミ (2022〜2026年、英語): メニューのないおまかせ (2022年7月)、ふたりで約2万円 (2023年7月)、カウンターのみ、アラカルトで貸切 (2026年2月)。',
      confidence: 'low', sources: [TB, R + 'B452920212/', R + 'B467776190/', R + 'B473638689/', R + 'B523575531/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; no fixed menu at times.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通花見小路東入ル林下町427 東新橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.005767, 135.776884); cross-checked: GSI 京都府京都市東山区林下町427番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B467776190/'],
    price_note: 'No item prices; a July 2023 review gives just over ¥20,000 for two with two drinks each.', last_checked: TODAY, items: [
      it('', '', 'Omakase (small dishes and sushi)', '', 'Omakase', 'ask', 'no', '2022–23 reviews.', 'omakase'),
    ] }, {
    cuisine: 'ジャズを聴きながら寿司とお酒: 市場から仕入れる魚の寿司、刺身、てんぷら (食べログ)、2022年はメニューのないおまかせで小皿と寿司、量は好みで調整 (2022年7月、2023年7月)、貸切でアラカルト (2026年2月)、8,000〜15,000円ほど',
    neighborhood: '祇園新橋、花見小路の東。祇園四条駅から徒歩7分',
    gf_detail: '要確認。寿司と刺身は醤油を使うことが多い。てんぷらもある (食べログ)。',
    vegan_detail: 'ヴィーガン不可。寿司のバー。',
    notes: '[寿司バー・祇園] 新橋の深夜1時までのジャズの流れる小さな寿司のカウンター。市場の魚をおまかせかアラカルトでお酒と。2軒目や締めに気軽に。8,000〜15,000円ほど、喫煙可。',
  });
}

// ================================================================ GION TACHINOMI 山根子
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039351/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.gion-yamaneko.com/';
  const D = day(['13:00', '23:00']);
  put({
    id: 'kyoto_gion_tachinomi_yamaneko', name: 'GION TACHINOMI 山根子 (Yamaneko)', category: 'OMNI',
    lat: 35.004901, lng: 135.777194, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Craft beer is wheat or barley; the original doburoku is rice, koji and water only (own site); food includes gyoza and okonomiyaki (May 2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Sake and doburoku (rice, koji, water — own site); snacks are mostly fish or meat.',
    hours_raw: 'Daily 13:00–23:00; hours may change (Tabelog). Order and pay at the counter; standing tables plus chairs, tables and sofas (2025 reviews). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). In a 150-year-old former teahouse behind Gion Kaikan, by the west alley of Gion Kagetsu (own site; 2025 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, behind Gion Kaikan — 7 min from Gion-Shijo Stn',
    cuisine: 'Kyoto craft beer from seven or eight taps (Nishijin Brewery, Kyoto Beer Lab, Kyoto Brewing), with tasting sets and a Kyoto Beer Lab collaboration beer (2025–26); an original doburoku of rice, koji and water (own site); Kyoto sake and whiskey (October 2026); dried fish to grill yourself on a shichirin, with ingredients from Tango (own site); oil sardines from Miyazu (August 2025); gyoza and okonomiyaki (May 2025); sausage platter (April 2026); beers about ¥1,000–1,100 (2025–26)',
    website: WEB, gmaps: gm('GION TACHINOMI 山根子'), menu_url: null,
    notes: '[Craft beer · Gion] An all-Kyoto drinks bar in a 150-year-old former teahouse behind Gion Kaikan: eight local craft taps, its own doburoku, Kyoto sake and shichirin-grilled snacks, open from 1 pm. Popular with visitors; about ¥1,500–4,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 22 April 2023 (Tabelog) in a 150-year-old former teahouse (own site; November 2025 review).',
      philosophy: 'Everything from Kyoto — beer, sake and whiskey (October 2026 review); food with ingredients from Tango (own site).',
      specialty: 'Kyoto craft beer on tap; shichirin-grilled dried fish.',
      anecdotes: [
        { text: 'An October 2025 guest at the doburoku set was treated to sake by three overseas visitors drinking at the entrance.', source: R + 'B515889361/' },
        { text: 'An August 2026 regular tried a low-alcohol lemon ale from Nishijin Brewery and a Kyoto Beer Lab collaboration made for the bar.', source: R + 'B495784683/' },
        { text: 'An April 2026 pair were the only Japanese customers, surrounded by visitors from abroad.', source: R + 'B528541763/' },
      ],
      japanese_sources_summary: '食べログ: GION TACHINOMI 山根子、立ち飲み、東山区祇園町北側321-1、毎日 13:00〜23:00、カード・電子マネー・QR 可、禁煙、2023年4月22日オープン。公式サイト: 築150年の元お茶屋、クラフトビール8タップ、米と麹と水だけのオリジナルのどぶろく、七輪で焼く乾物、Tango の食材。口コミ (2025〜2026年、英語): Gion Kaikan の裏、京都のクラフトビール (Nishijin Brewery、Kyoto Beer Lab、Kyoto Brewing)、ビール、日本酒、ウイスキーはすべて京都 (2026年10月)、Miyazu のオイルサーディン、餃子とお好み焼き、海外の客が多い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B495784683/', R + 'B506848469/', R + 'B512210290/', R + 'B515889361/', R + 'B519553451/', R + 'B520349856/', R + 'B525672391/', R + 'B528541763/', R + 'B529393301/', R + 'B534407114/'] },
    cultural_comfort: { level: 'english', note: 'Mostly overseas guests; detailed beer descriptions and tasting before ordering (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側321-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004901, 135.777194); cross-checked: GSI 京都府京都市東山区祇園町北側321番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495784683/', R + 'B515889361/', R + 'B520349856/'],
    price_note: 'Prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto craft beer (small)', '¥1,000–1,100', 'Beer', 'no', 'ask', 'August 2026 and November 2025 reviews.', 'craft_beer'),
      it('', '', 'Doburoku set (draft and pasteurised)', '¥1,500', 'Sake', 'ask', 'ask', 'October 2025 review; rice, koji and water only (own site).', 'doburoku'),
      it('', '', 'Dried fish to grill on a shichirin', '', 'Snacks', 'ask', 'no', 'Own site.', 'himono'),
    ] }, {
    cuisine: '7〜8タップの京都のクラフトビール (Nishijin Brewery、Kyoto Beer Lab、Kyoto Brewing)、飲み比べと Kyoto Beer Lab とのコラボビール (2025〜26年)、米・麹・水だけのオリジナルのどぶろく (公式サイト)、京都の日本酒とウイスキー (2026年10月)、七輪で自分で焼く乾物、食材は Tango から (公式サイト)、Miyazu のオイルサーディン (2025年8月)、餃子とお好み焼き (2025年5月)、ソーセージの盛り合わせ (2026年4月)、ビールは1,000〜1,100円ほど (2025〜26年)',
    neighborhood: '祇園、Gion Kaikan の裏。祇園四条駅から徒歩7分',
    gf_detail: '要確認。クラフトビールは麦。オリジナルのどぶろくは米・麹・水だけ (公式サイト)。料理は餃子やお好み焼きなど (2025年5月)。',
    vegan_detail: '要確認。日本酒とどぶろく (米・麹・水、公式サイト)。つまみの多くは魚か肉。',
    notes: '[クラフトビール・祇園] Gion Kaikan の裏の築150年の元お茶屋で、すべて京都の飲み物を。8タップの地元のクラフトビール、オリジナルのどぶろく、京都の日本酒、七輪で焼くつまみ。昼1時から。海外の客に人気、1,500〜4,000円ほど。',
  });
}

// ================================================================ 臼松
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004053/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '24:00']);
  put({
    id: 'kyoto_usumatsu_kiyamachi', name: '臼松 (Usumatsu)', category: 'OMNI',
    lat: 35.010321, lng: 135.770822, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza are the specialty (wheat wrappers); oden is in a Kyoto-style dashi (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: gyoza with fillings such as mentaiko and octopus, and oden with beef tendon in dashi (2024–26 reviews).',
    hours_raw: 'Mon, Wed–Sun 18:00–24:00 (food L.O. 23:00, drinks 23:30); closed Tuesdays, which may change around holidays (Tabelog). Cover charge ¥385 a person (Tabelog Japanese original 「おひとり様385円（税込）」). Cards, e-money and QR (Tabelog). 28 seats: a sunken counter and tatami tables; non-smoking (Tabelog; August 2026 review). Pairs may be moved to the counter when busy (Tabelog). On Kiyamachi north of Sanjo, 3 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Sanjo — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Gyoza and oden izakaya: the signature Kujo-negi gyoza, pan-fried or deep-fried gyoza ¥490 for six, cheese, shiso-mentaiko, taco and ponzu or miso-sauce gyoza (2025–26); Kyoto-dashi oden, five kinds ¥900, beef tendon and daikon (2025–26); seasonal plates — firefly squid with vinegar miso ¥680, sardines simmered with sansho ¥580 (March 2026), Kamo aubergine agedashi, smoked salmon belly (August 2025), saury with sansho, ginkgo, dashimaki (October 2025); about ¥3,000–5,000',
    website: null, gmaps: gm('臼松 木屋町'), menu_url: null,
    notes: '[Gyoza & oden · Kiyamachi] A classic Kiyamachi izakaya with a sunken counter and tatami: crisp, juicy Kujo-negi gyoza, deep Kyoto-dashi oden and cheap seasonal plates. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Known for oden and gyoza, as the sign outside says (September 2026 review). Kind staff (July 2025 review).',
      philosophy: null,
      specialty: 'Kujo-negi gyoza; oden.',
      anecdotes: [
        { text: 'A July 2025 couple asked whether the oden platter could be shared, and the staff cut every piece in half to share.', source: R + 'B510132390/' },
        { text: 'An August 2026 guest, turned away from several places on a Saturday night, got in without a booking and was steered to the Kujo-negi gyoza and oden.', source: R + 'B533299548/' },
        { text: 'A December 2025 visitor liked the fluffy filling of the fried gyoza in broth as a closing dish.', source: R + 'B528171028/' },
      ],
      japanese_sources_summary: '食べログ: 臼松、居酒屋・餃子・おでん、中京区の木屋町、三条の北、京阪三条駅から徒歩5分、京都市役所前駅から徒歩3分、月・水〜日 18:00〜24:00、火曜休み (祝日や連休は変更あり)、お通し385円 (税込)、カード・電子マネー・QR 可、28席、半個室、禁煙。口コミ (2024〜2026年、英語): Kujo ねぎの餃子、焼き餃子と揚げ餃子 6個490円、おでん5種900円 (2026年3月)、京都の出汁のおでん、牛すじと大根、ホタルイカの酢味噌、座敷とカウンター。',
      confidence: 'medium', sources: [TB, R + 'B497264718/', R + 'B500690395/', R + 'B510132390/', R + 'B512479316/', R + 'B515160538/', R + 'B524177413/', R + 'B528171028/', R + 'B533299548/', R + 'B535321295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off for the tatami; counter is a sunken kotatsu style (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通三条上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010293, 135.770741), moved 8m ENE to clear kyoto_umemura_kiyamachi (2.9m); the address has no lot number (GSI resolves only to the ward), so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524177413/'],
    price_note: 'Prices from a March 2026 review; ¥385 cover per person.', last_checked: TODAY, items: [
      it('', '', 'Pan-fried gyoza (6)', '¥490', 'Gyoza', 'no', 'no', 'March 2026 review.', 'yaki_gyoza'),
      it('', '', 'Deep-fried gyoza (6)', '¥490', 'Gyoza', 'no', 'no', 'March 2026 review.', 'age_gyoza'),
      it('', '', 'Assorted oden (5 kinds)', '¥900', 'Oden', 'ask', 'no', 'March 2026 review.', 'oden'),
      it('', '', 'Firefly squid with vinegar miso', '¥680', 'Seasonal', 'ask', 'no', 'March 2026 review.', 'hotaruika'),
      it('', '', 'Sardines simmered with sansho', '¥580', 'Seasonal', 'ask', 'no', 'March 2026 review.', 'iwashi'),
    ] }, {
    cuisine: '餃子とおでんの居酒屋: 名物のKujo ねぎの餃子、焼き餃子と揚げ餃子 6個490円、チーズ、しそ明太、タコ、ポン酢や味噌だれの餃子 (2025〜26年)、京都の出汁のおでん5種900円、牛すじと大根 (2025〜26年)、季節の料理 — ホタルイカの酢味噌680円、いわしの山椒煮580円 (2026年3月)、Kamo なすの揚げ出し、サーモンハラスの燻製焼き (2025年8月)、サンマの山椒煮、銀杏、だし巻き (2025年10月)、3,000〜5,000円ほど',
    neighborhood: '木屋町、三条の北。京都市役所前駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。名物は餃子 (小麦の皮)。おでんは京都の出汁 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。明太子やタコの餃子、牛すじと出汁のおでん (2024〜26年の口コミ)。',
    notes: '[餃子とおでん・木屋町] 掘りごたつのカウンターと座敷のある木屋町の昔ながらの居酒屋。パリッとジューシーなKujo ねぎの餃子、京都の出汁がしみたおでん、手ごろな季節の料理。3,000〜5,000円ほど。',
  });
}

save();
