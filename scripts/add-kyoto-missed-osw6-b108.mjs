// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 108.
//   + en (8-seat Italian wine bar at the entrance of the Shijo-Omiya drinking streets; open to 02:00) — rest
//   + 浜ちゃん (tiny counter in the Rido dining alley by Karasuma-Shichijo; drink plus an omakase three-dish plate) — rest
//   + すみれ珈琲 (coffee stand in a 100-year-old house west of Kyoto Station, run by an archaeological excavation company; since 2025) — rest
//   + あけ美 (8-seat homestyle-cooking counter with karaoke in the Rido dining alley; about 20 years) — rest
//   - お好み焼はここやねん 四条大宮店 (26020894), 本格焼肉 チファジャ 京都駅前店 (26034700): skipped — chains (27 and 6 shops).
//   - クリーム フェスト 京都駅前店 (26037730), 京都チーズケーキ博物館 (26044228): skipped — retail food shops (Greg 11-07 ruling).
//   - OM Sky Terrace (26043220): skipped — too thin to verify (operator not confirmed).
//   - ほりかわ 京都東急ホテル店 (26028490): skipped — big-chain hotel venue (Tokyu Hotels).
//   Rest tier, nearest-first from `next rest 2000` in this lane (core and notable have nothing left). Fetched by this worker
//   with fetchshop.mjs (Tabelog /en/, 3 s between requests). 京もつ鍋ホルモン朱々 京都四条大宮店 (26029372), next in the queue
//   after ほりかわ, is left undrafted and unskipped for the integrator: group size unresolved (at least four 朱々 shops in
//   Kyoto, Osaka and Okayama on gurunavi; its own site speaks of a 「朱々グループ」 without a count).
//   Dedupe (2026-11-26): none of the four is in data/kyoto.json (name, Tabelog id, address) or in another worker's pending
//   script (osw1-b109, osw13-b137, osw2-b98).
//   Chain / group checks: en, 浜ちゃん and あけ美 are single shops (Tabelog). すみれ珈琲 is the one café of an excavation company
//   (Leaf KYOTO; Tabelog reviews); no other shop found.
//   Romaji: en is written in Latin letters by the shop's Tabelog listing (reading エン). すみれ珈琲 uses the shop's Instagram
//   handle (sumire.coffee). None for 浜ちゃん or あけ美 — Tabelog's English names (Hama Chan, Akemi) are not a source, and the
//   owners' names are not given in any human-written source; names stay in kana/kanji with whole-string gloss entries.
//   Pins: Tabelog points, except 浜ちゃん, whose Tabelog point is 1.8 m from kyoto_izakaya_rido_26015142 — offset ~7 m west.
//   No halal claims; no owner deaths; no posting bans. Single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-108');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ en
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26024608/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '02:00']);
  put({
    id: 'kyoto_en_shijo_omiya', name: 'en', category: 'OMNI',
    lat: 35.004786, lng: 135.749067, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Pasta and pizza are on the menu (2015, 2019, 2025 reviews), and a gratin was a September 2024 dish; small plates like prosciutto and salads are also served.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. Dishes reviewers had are mostly cheese, meat or seafood — prosciutto, a scallop and crab-miso gratin, a blue-cheese potato salad (2022–25); baked vegetables and a bagna cauda were on an older menu (2015).',
    hours_raw: 'Monday–Saturday 18:30–02:00; closed Sunday; hours may change (Tabelog). Cards accepted, QR not (Tabelog). 8 seats: 4 at the counter, 4 in the hall; smoking allowed; no minors; no parking (Tabelog). No restroom inside — guests use a shared one outside (April 2021, January 2025). 5 minutes’ walk from Hankyu Omiya Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — 5 min from Hankyu Omiya Stn',
    cuisine: 'Small Italian bar for wine and small plates (2022–25 reviews) · glass of wine ¥600, a good deal for a quick drink after work (September 2024, April 2025); bottles from about ¥2,000 (April 2025); a wide range of drinks and plenty of bottles (September 2024) · scallop and broccoli gratin with crab miso ¥900 (September 2024) · seasonal prosciutto sliced in front of you, and authentic pasta (January 2025) · prosciutto, and a potato salad of blue cheese and smoked pickled daikon (June 2022) · many unusual small plates, some in smaller portions (April 2025) · older menus: homemade pizza baked from dough kneaded in-house, ¥500 draft beer, wine and sangria (November 2014); baked vegetables, Spanish omelette, tomato-braised tripe and bagna cauda (March 2015) · about ¥3,000–4,000 a head (Tabelog average)',
    website: null, gmaps: gm('en 京都 中京区錦大宮町148'), menu_url: null,
    notes: '[Italian bar · Shijo-Omiya] A bright, glass-fronted little wine bar at the entrance of the Shijo-Omiya drinking streets: ¥600 glasses of wine, bottles from about ¥2,000, prosciutto sliced to order, pasta and inventive small plates, at a counter and a few seats. Open 18:30–02:00; closed Sunday. No restroom inside (a shared one outside).',
    chef_bio: { chef_name: null, roles: ['owner (reviews)'], origin: null,
      background: 'A long-running bar: reviews go back to July 2014, when a diner who left shopping bags behind was treated very kindly by the owner. A November 2014 visitor found it run by one man alone and praised the young owner’s service. Later reviewers describe a stylish bar with a handsome owner and many regulars (January 2025), and friendly, lively staff (September 2024, April 2025); glass doors let you see inside before going in (2019).',
      philosophy: null, specialty: 'Wine by the glass and small Italian plates; seasonal prosciutto.',
      anecdotes: [
        { text: 'In July 2014 the entrance carried a sign welcoming guests to drop in for just one drink.', source: R + 'B111398151/' },
        { text: 'A January 2025 reviewer advised coming with someone who knows the place, since there are many regulars, and using the restroom before arriving.', source: R + 'B503196534/' },
      ],
      japanese_sources_summary: '食べログ: en (エン)、バル・ダイニングバー、阪急大宮駅から徒歩5分、月〜土18:30〜翌2:00、日曜休み、カード可、QR 不可、8席 (カウンター4席、ホール4席)、喫煙可、未成年は入店不可、駐車場なし。口コミ (2014年7月〜2026年1月、英語): グラスワイン600円、ボトルは2,000円ほどから、帆立とブロッコリーのカニ味噌グラタン900円、目の前で切る季節の生ハム、パスタ、トイレは外の共用。',
      confidence: 'medium', sources: [TB, R + 'B111398151/', R + 'B112313298/', R + 'B91374740/', R + 'B330706646/', R + 'B436651560/', R + 'B450766732/', R + 'B492396613/', R + 'B503196534/', R + 'B504846907/', R + 'B505240993/', R + 'B520922830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found; Tabelog warns phone service may be Japanese only. Small and regular-heavy, but reviewers found it easy to walk into.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦大宮町148',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026 (the last with text April 2025).' },
    pin_source: `Tabelog ${TB} (35.004786, 135.749067); GSI 錦大宮町148 (lot) 35.004391, 135.749161, about 45 m; nearest pin kyoto_tsubomi_omiya at 10 m (錦大宮町152); not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492396613/', R + 'B504846907/'],
    price_note: 'No published menu; review prices (September 2024, April 2025).', last_checked: TODAY, items: [
      it('', '', 'Glass of wine (white or red)', '¥600', 'Drinks', 'ask', 'ask', 'September 2024, April 2025.', 'glass_wine'),
      it('', '', 'Scallop and broccoli gratin with crab miso', '¥900', 'Small plates', 'ask', 'no', 'September 2024.', 'crab_miso_gratin'),
    ] }, {
    cuisine: 'ワインと小皿の小さなイタリアンバル (2022〜2025年の口コミ)・グラスワイン600円、仕事帰りの1杯にお得 (2024年9月、2025年4月)。ボトルは2,000円ほどから (2025年4月)。飲み物の種類が多く、ボトルワインも豊富 (2024年9月)・帆立とブロッコリーのカニ味噌グラタン900円 (2024年9月)・目の前で切る季節の生ハム、本格的なパスタ (2025年1月)・生ハム、ブルーチーズといぶりがっこのポテトサラダ (2022年6月)・ほかでは見ない小皿が多く、少なめの量のものも (2025年4月)・以前のメニュー: 店で生地をこねて焼く自家製ピザ、生ビール・グラスワイン・サングリア各500円 (2014年11月)。焼き野菜、スパニッシュオムレツ、トリッパのトマト煮込み、バーニャカウダ (2015年3月)・ひとり3,000〜4,000円ほど (食べログの平均)',
    neighborhood: '四条大宮。阪急大宮駅から徒歩5分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。パスタとピザがあり (2015年、2019年、2025年の口コミ)、2024年9月にはグラタンも。生ハムやサラダなどの小皿もある。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。口コミに出てくる料理は生ハム、帆立とカニ味噌のグラタン、ブルーチーズのポテトサラダなどチーズ、肉、魚介が中心 (2022〜2025年)。以前のメニューには焼き野菜やバーニャカウダも (2015年)。',
    notes: '[イタリアンバル・四条大宮] 四条大宮の飲み屋街の入り口、ガラス張りで明るい小さなワインバー。グラスワイン600円、ボトルは2,000円ほどから、注文してから切る生ハム、パスタ、工夫のある小皿。カウンターと数席のみ。18:30〜翌2:00、日曜休み。店内にトイレはなく、外の共用トイレ。',
  });
}

// ================================================================ 浜ちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26009506/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hamachan_rido', name: '浜ちゃん', category: 'OMNI',
    lat: 34.989011, lng: 135.758650, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. There is no menu to choose from: each drink comes with a small plate of three dishes picked by the owner — vinegared octopus, spleen with ponzu and fried saury (January 2022), a green-onion omelette (September 2025) — and ponzu and frying are both involved.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: there is no menu to choose from, and the omakase small plates reviewers describe are octopus, spleen, saury and egg dishes (2022, 2025). No vegan claim.',
    hours_raw: 'Hours not given on Tabelog or in reviews. Reservations taken; private hire possible (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed; no parking (Tabelog). A tiny counter that fills with about five people (September 2025). In the Rido dining alley (リド飲食街) on the south side of Shichijo-dori west of Karasuma, about 10 minutes’ walk from Kyoto Station; the alley’s toilets are shared and outside (December 2025). 422 m from Kyoto Station (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Rido dining alley, Karasuma-Shichijo — 10 min from Kyoto Stn',
    cuisine: 'A tiny izakaya counter in the Rido style: no menu to choose from — order a drink and a small plate of three dishes comes with it (August 2026) · sake at room temperature with three omakase dishes, ¥1,200 including tax (November 2026); a drink with an appetizer set for ¥1,000 (January 2022) · dishes have included vinegared octopus, spleen with ponzu and fried saury (January 2022), a homemade green-onion omelette (September 2025), and kaki-pea crackers; more snacks come when the plate is empty (August 2026) · drinks: room-temperature junmai sake (January 2022), shochu with water (November 2022), local shochu from the owner’s home town in Kumamoto (December 2025 photo caption), a sweet-potato shochu highball and a VO brandy highball (September 2025), and large bottles of Classic Lager beer only (December 2025) · about ¥1,000–5,000 a head (2022–26 reviews)',
    website: null, gmaps: gm('浜ちゃん 京都 下京区七条通烏丸西入東境町180 リド飲食街'), menu_url: null,
    notes: '[Izakaya · Rido dining alley, Karasuma-Shichijo] A tiny counter bar in the post-war Rido dining alley, ten minutes from Kyoto Station: no menu — order a drink and the owner sets down a plate of three small dishes (sake with three dishes was ¥1,200 in November 2026), then chat over shochu from the owner’s home town in Kumamoto. Fits about five. Cash only; hours not published.',
    chef_bio: { chef_name: null, roles: ['owner (reviews)'], origin: 'Hitoyoshi, Kumamoto (December 2025 review photo caption)',
      background: 'A counter shop run by the owner alone (November 2022). A December 2025 reviewer’s photo caption says the owner is from Hitoyoshi in Kumamoto and has the local shochu sent specially. Reviewers describe a laid-back, friendly owner (September 2025), a warm, laid-back owner of few words who chimes in now and then while watching TV (August 2026), a very kind voice (January 2022), and a Showa-retro feel (November 2022). A December 2025 visitor heard stories of old Kyoto and the lively past of the Rido alley; reviewers write that the alley dates from shortly after the war (September 2025).',
      philosophy: null, specialty: 'A drink with an omakase plate of three small dishes; shochu from Kumamoto.',
      anecdotes: [
        { text: 'A September 2025 visitor asked for a highball, got a sweet-potato shochu highball by mistake, laughed it off, and then had a VO brandy highball instead.', source: R + 'B514550717/' },
        { text: 'In January 2022 the owner set down three dishes from the five on the counter without a word being said, and the reviewer and the owner ended up watching a TV eating contest together.', source: R + 'B445428420/' },
      ],
      japanese_sources_summary: '食べログ: 浜ちゃん、居酒屋、京都市下京区七条通烏丸西入東境町180、京都駅から422m、営業時間の記載なし、予約可、貸切可、カード・電子マネー・QR 不可、喫煙可、駐車場なし。口コミ (2015年9月〜2026年11月、英語、写真説明は日本語): リド飲食街の小さなカウンターの店、店主ひとりで営む (2022年11月)、メニューはなく飲み物を頼むと三品盛りのつまみ、常温の日本酒と三品で1,200円 (2026年11月)、写真説明「熊本・人吉出身で地元の焼酎をわざわざ取り寄せられてます。」(2025年12月)、ビールはクラシックラガーの大瓶のみ。',
      confidence: 'medium', sources: [TB, R + 'B445428420/', R + 'B456088448/', R + 'B514550717/', R + 'B518749927/', R + 'B533998081/', R + 'B539566385/'] },
    cultural_comfort: { level: 'japanese', note: 'No English evidence found; there is no menu, and the draw is conversation with the owner. Tabelog lists no hours.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入東境町180 リド飲食街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989011, 135.758716) is 1.8 m from kyoto_izakaya_rido_26015142 (same lot, 東境町180, Rido dining alley), so offset about 6 m west to (34.989011, 135.758650), like kyoto_mannam_rido; distances after the offset: kyoto_izakaya_rido_26015142 7.1 m, kyoto_mannam_rido 8.0 m, kyoto_sakenoateya_jijibaba 10.5 m, kyoto_akemi_rido (this batch) 12.2 m; GSI 東境町180 (lot) 34.989056, 135.759064, about 38 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B539566385/', R + 'B445428420/'],
    price_note: 'No menu; review prices (January 2022, November 2026).', last_checked: TODAY, items: [
      it('', '', 'Room-temperature sake with three omakase dishes', '¥1,200', 'Set', 'ask', 'no', 'November 2026, tax included.', 'sake_three_dishes'),
    ] }, {
    cuisine: 'リド流の小さな居酒屋のカウンター。選ぶメニューはなく、飲み物を頼むと三品盛りの小皿が付く (2026年8月)・常温の日本酒とおまかせ三品で税込1,200円 (2026年11月)。飲み物とお通しのセットで1,000円 (2022年1月)・料理は酢だこ、ポン酢の一品、サンマの揚げ物 (2022年1月)、手作りのネギ入り卵焼き (2025年9月)、柿ピーなど。皿が空くとまた何か出てくる (2026年8月)・飲み物: 常温の純米酒 (2022年1月)、焼酎の水割り (2022年11月)、店主の地元・熊本の焼酎 (2025年12月の写真説明)、芋焼酎のハイボールと VO ブランデーのハイボール (2025年9月)、ビールは Classic Lager の大瓶のみ (2025年12月)・ひとり1,000〜5,000円ほど (2022〜2026年の口コミ)',
    neighborhood: 'リド飲食街、烏丸七条。京都駅から徒歩10分',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。選ぶメニューはなく、飲み物ごとに店主が選んだ三品の小皿が出る。酢だこ、ポン酢の一品、サンマの揚げ物 (2022年1月)、ネギ入り卵焼き (2025年9月) など、ポン酢や揚げ物もある。',
    vegan_detail: 'ヴィーガン不可。選ぶメニューはなく、口コミに出てくるおまかせの小皿はタコ、内臓、サンマ、卵の料理 (2022年、2025年)。ヴィーガンの記載なし。',
    notes: '[居酒屋・リド飲食街、烏丸七条] 京都駅から徒歩10分、戦後すぐからのリド飲食街にある小さなカウンターの店。メニューはなく、飲み物を頼むと店主が三品の小皿を出してくれる (2026年11月は日本酒と三品で1,200円)。店主の地元・熊本の焼酎を飲みながらおしゃべりを。5人ほどで満席。現金のみ。営業時間の記載なし。',
  });
}

// ================================================================ すみれ珈琲
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26043472/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/?p=165685', LEAF_EN = 'https://www.leafkyoto.net/en/?p=165685', IG = 'https://www.instagram.com/sumire.coffee/';
  const W = day(['07:00', '13:00']), E = day(['09:00', '16:00']);
  put({
    id: 'kyoto_sumire_coffee_tatsumicho', name: 'すみれ珈琲 (Sumire Coffee)', category: 'OMNI',
    lat: 34.990073, lng: 135.756633, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. The food is baked goods — cookies, buttermilk scones and a Brazilian-style bread — and sandwiches (Leaf KYOTO; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. Black coffee is the core of the menu; the cookies are buttery (August 2025), the hot chocolate comes with vanilla ice cream (November 2025), and café au lait uses milk. Sandwiches and scones use vegetables from a nearby greengrocer (Leaf KYOTO); other ingredients not stated.',
    hours_raw: 'Weekdays 7:00–13:00; Saturday, Sunday and public holidays 9:00–16:00; closed Wednesday (Tabelog; Leaf KYOTO). Mainly take-out, with a small eat-in space where you sit side by side; order outside first, then sit (September 2025, March 2026). Non-smoking; no private rooms; no parking; no e-money (Tabelog). Photography is not allowed in some parts of the shop (Leaf KYOTO). Opened 12 July 2025 (Tabelog; Leaf KYOTO). About 9 minutes’ walk from the central gate of Kyoto Station, 7 minutes from the 烏丸七条 bus stop (Leaf KYOTO).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Shichijo — west of Kyoto Station',
    cuisine: 'Coffee stand with a few seats · ice-brewed coffee ¥600; cookies ¥150, plain or cocoa, shaped like haniwa and dogu figures; sandwiches and scones made with vegetables from a nearby greengrocer (Leaf KYOTO, prices including tax) · an original blend from IOLITE COFFEE ROASTERS in Karasuma; iced café au lait ¥650 and the “freshly excavated” cookie ¥150 (August and September 2025) · hot chocolate with homemade vanilla ice cream, and “Mochi Pit”, a Brazilian-style bread (November 2025) · hand-drip coffee, described on the menu as a refreshing balance of bitterness and sweetness, and a small, not-too-sweet buttermilk scone (March 2026)',
    website: null, gmaps: gm('すみれ珈琲 京都 下京区新町通七条上ル辰巳町747-8'), menu_url: null,
    notes: '[Café · Shinmachi-Shichijo, near Kyoto Station] A coffee stand in a renovated house over 100 years old, run by an archaeological excavation company: while your coffee is made you can look at tiles and other finds dug up during the renovation. Ice-brewed coffee, café au lait, scones and haniwa-shaped cookies (¥150). Mostly take-out, a few seats. Weekdays 7:00–13:00, weekends 9:00–16:00; closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Leaf KYOTO: the café is run by a company that excavates and surveys archaeological sites (「遺跡の発掘・調査を行う会社が運営しており」); the interior is over 100 years old, and the company took it apart and renovated it itself, then put the finds from that work on display; the name comes from すみれ商店, a shop the owner’s grandmother once ran in Nara Prefecture. Reviewers: the concept is “less than a museum, more than everyday life” (August 2025); an exhibition of the company’s research — excavation plans, photos and stories from the president, who is also a field investigator (September 2025).',
      philosophy: '“Less than a museum, more than everyday life” (the café’s concept, as quoted in an August 2025 review).', specialty: 'Ice-brewed and hand-drip coffee; haniwa- and dogu-shaped cookies.',
      anecdotes: [
        { text: 'A September 2025 visitor gave up once after arriving at 16:00, closing time, and came back another Sunday at 14:30.', source: R + 'B515077606/' },
        { text: 'A November 2025 visitor had long wanted to come but kept missing the 13:00 weekday close.', source: R + 'B520592278/' },
      ],
      japanese_sources_summary: 'Leaf KYOTO: すみれ珈琲、京都市下京区新町通七条上ル辰巳町747-8、遺跡の発掘・調査を行う会社が運営、築100年以上の建物を自社で解体・改修、改修で出てきた出土品を展示、店主の祖母が奈良県で営んでいた「すみれ商店」から屋号、氷出しコーヒー600円、クッキー150円 (プレーン・ココア)、近くの八百屋の野菜を使ったサンドイッチとスコーン、平日7:00〜13:00、土日・祝日9:00〜16:00、水曜休み、一部撮影禁止、2025年7月12日オープン、Instagram sumire.coffee。食べログ: すみれ珈琲、コーヒースタンド、全席禁煙。口コミ (2025年8月〜2026年6月、英語): IOLITE COFFEE ROASTERS のオリジナルブレンド、アイスカフェオレ650円、ホットチョコレート、バターミルクスコーン、テイクアウト中心で小さなイートイン。',
      confidence: 'medium', sources: [TB, LEAF, LEAF_EN, IG, R + 'B511400856/', R + 'B515077606/', R + 'B520592278/', R + 'B523863296/', R + 'B530300339/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found. Order at the counter outside before sitting down.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通七条上ル辰巳町747-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Leaf KYOTO article (opened July 2025); Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (34.990073, 135.756633); GSI 辰巳町747 (lot) 34.990261, 135.756577, about 21 m; nearest pin ChIJZ_y58k0JAWAR6qGE5DN3lfU (GYUMON Kyoto) at 17 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [LEAF, R + 'B511400856/'],
    price_note: 'Leaf KYOTO prices (tax included, 2025) and review prices (August–September 2025).', last_checked: TODAY, items: [
      it('氷出しコーヒー', '', 'Ice-brewed coffee', '¥600', 'Coffee', 'ask', 'ask', 'Leaf KYOTO.', 'ice_brewed_coffee'),
      it('クッキー', '', 'Cookie (plain or cocoa)', '¥150', 'Sweets', 'ask', 'ask', 'Leaf KYOTO; haniwa and dogu shapes.', 'cookie'),
      it('', '', 'Iced café au lait', '¥650', 'Coffee', 'ask', 'no', 'August and September 2025.', 'iced_cafe_au_lait'),
    ] }, {
    cuisine: '数席のあるコーヒースタンド・氷出しコーヒー600円、クッキー150円 (プレーン・ココア、埴輪や土偶の形)、近くの八百屋の野菜を使ったサンドイッチとスコーン (Leaf KYOTO、税込)・烏丸の IOLITE COFFEE ROASTERS のオリジナルブレンド。アイスカフェオレ650円と「掘りたて」のクッキー150円 (2025年8月・9月)・自家製バニラアイス付きのホットチョコレート、ブラジル風のパン「Mochi Pit」 (2025年11月)・メニューに苦みと甘みのバランスがすっきりとあるハンドドリップコーヒー、小さめで甘さ控えめのバターミルクスコーン (2026年3月)',
    neighborhood: '新町七条。京都駅の西',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。食べ物はクッキー、バターミルクスコーン、ブラジル風のパンなどの焼き菓子とサンドイッチ (Leaf KYOTO、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。メニューの中心はコーヒー。クッキーはバターの風味 (2025年8月)、ホットチョコレートにはバニラアイス (2025年11月)、カフェオレには牛乳。サンドイッチとスコーンには近くの八百屋の野菜 (Leaf KYOTO)。ほかの材料は記載なし。',
    notes: '[カフェ・新町七条、京都駅の近く] 遺跡の発掘・調査の会社が営む、築100年以上の建物を改修したコーヒースタンド。コーヒーを待つあいだ、改修中に出てきた瓦などの出土品を見られる。氷出しコーヒー、カフェオレ、スコーン、埴輪形のクッキー (150円)。テイクアウト中心で数席のみ。平日7:00〜13:00、土日・祝日9:00〜16:00、水曜休み。',
  });
}

// ================================================================ あけ美
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26011480/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '02:00']);
  put({
    id: 'kyoto_akemi_rido', name: 'あけ美', category: 'OMNI',
    lat: 34.988924, lng: 135.758732, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim. Homestyle dishes from a whiteboard — mini hamburg steak with ponzu, dashi-rolled omelette, grilled atsuage, lotus-root kinpira, sake-lees soup — and a macaroni-salad appetizer (2022–26 reviews); seasonings not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. Most dishes reviewers had contain meat, egg or dashi — hamburg steak, dashi-rolled omelette, lotus root and pork kinpira (2023–26); grilled konjac and grilled aburaage were on the board in November 2022, ingredients not stated.',
    hours_raw: 'Monday–Saturday 18:30–02:00; closed Sunday (Tabelog; the same in a September 2026 review). A December 2023 reviewer gives about 18:30 to midnight, closed Sundays and public holidays. Reservations taken (Tabelog). Cash only: no cards or e-money (Tabelog; December 2023). 8 seats at the counter; karaoke; smoking allowed; no parking (Tabelog); a 24-hour coin car park nearby at 東境町184 (September 2026). Often full of regulars; newcomers are welcomed when a seat is free (June 2026). The dashi-rolled omelette is not made when the shop is busy (September 2026). In the Rido dining alley (リド飲食街) on the south side of Shichijo-dori about 100 m west of Karasuma-Shichijo, a few minutes from Kyoto Station (2022–26 reviews); 413 m from Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Rido dining alley, Karasuma-Shichijo — near Kyoto Stn',
    cuisine: 'Homestyle cooking at a counter with karaoke, the menu on a whiteboard (September 2025, September 2026); the shop bills its food as amateur cooking (November 2022, March 2024) · appetizer: homemade macaroni salad with a hint of mustard (September 2025, September 2026); lotus root kinpira (September 2022), lotus root and pork kinpira (2023) · handmade mini hamburg steak ¥500, eaten with ponzu (September 2025, September 2026), served even around 23:00 (June 2026) · dashi-rolled omelette ¥700 and grilled atsuage ¥500 (September 2026); grilled konjac and grilled aburaage ¥500 each (November 2022); fried eggplant in dashi (2023) · sake-lees soup (kasu-jiru), the house favourite, in a generous bowl (December 2023, September 2026) · drinks: draft beer, highballs, a sweet-potato shochu with soda, sake (2022–26) · about ¥1,000–5,000 a head (2022–26 reviews)',
    website: null, gmaps: gm('あけ美 京都 下京区烏丸七条西入 リド飲食街'), menu_url: null,
    notes: '[Izakaya · Rido dining alley, Karasuma-Shichijo] An eight-seat counter at the edge of the Rido dining alley near Kyoto Station, open for about twenty years: the owner cooks homestyle dishes from a whiteboard — mini hamburg steak with ponzu (¥500), dashi-rolled omelette, sake-lees soup — and there is karaoke. Newcomers welcome when there is a seat. Cash only; 18:30–02:00; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['owner (reviews)'], origin: null,
      background: 'Reviewers date the shop to about 2003 — “serving the community for 22 years” (September 2025), over 20 years with 8 seats (September 2026). Run by an energetic owner (December 2024) who cooks the homemade dishes (February 2023), with a husky voice reviewers remark on (September 2022, September 2026); a September 2025 visitor heard the owner tell how the shop came to open and found it a touching story. The owner saw a first-timer off outside (September 2022), keeps an eye on guests and suggests heading home when it is time (December 2024). Many reviewers mention a counter full of friendly regulars (2022–26). The Rido alley, reviewers write, dates from the early 1950s and is said to be named after the Lido cabaret in Paris (September 2026).',
      philosophy: null, specialty: 'Homestyle small dishes — mini hamburg steak, dashi-rolled omelette, sake-lees soup; karaoke.',
      anecdotes: [
        { text: 'A September 2022 first-timer sang about five Southern All Stars songs at the owner’s request as the regulars arrived and filled the counter.', source: R + 'B454828986/' },
        { text: 'In September 2026 a regular warned a newcomer that the owner skips the dashi-rolled omelette when busy; after the regular left, the newcomer asked anyway and was told “just wait a moment”.', source: R + 'B538397822/' },
        { text: 'On a full Thursday in November 2026 a regular who arrived to no seat gave up a place to a visitor and left; the owner, a little flustered, charged the visitor ¥1,000 for a drink and appetizer.', source: R + 'B539566470/' },
      ],
      japanese_sources_summary: '食べログ: あけ美、京都市下京区烏丸七条西入、京都駅から413m、月〜土18:30〜翌2:00、日曜休み、予約可、カード・電子マネー不可、8席、カラオケ、喫煙可、駐車場なし。口コミ (2022年9月〜2026年11月、英語、写真説明の一部は日本語): リド飲食街の家庭料理の店、ホワイトボードの品書き、お通しは手作りのマカロニサラダ、写真説明「小さなハンバーグ(※手作りですと書いてある) 500円」、だし巻き700円、粕汁、カラオケ、常連が多い、2003年ごろからの店。',
      confidence: 'medium', sources: [TB, R + 'B454828986/', R + 'B457296603/', R + 'B460950195/', R + 'B476729598/', R + 'B483598021/', R + 'B487346026/', R + 'B497234326/', R + 'B513884781/', R + 'B530700421/', R + 'B536805779/', R + 'B538397822/', R + 'B539566470/'] },
    cultural_comfort: { level: 'japanese', note: 'No English evidence found; the menu is a handwritten whiteboard, and the counter is mostly regulars. Booking by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区烏丸七条西入 リド飲食街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.988924, 135.758732); Tabelog gives no lot number (烏丸七条西入), the Rido alley is 東境町180: GSI 東境町180 (lot) 34.989056, 135.759064, about 34 m; nearest pins kyoto_izakaya_rido_26015142 11.2 m and kyoto_hamachan_rido (this batch) 12.2 m; not cross-checked with OSM (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538397822/', R + 'B457296603/'],
    price_note: 'No published menu; whiteboard prices from reviews (November 2022, September 2026).', last_checked: TODAY, items: [
      it('小さなハンバーグ', '', 'Mini hamburg steak (handmade)', '¥500', 'Small plates', 'ask', 'no', 'September 2026.', 'mini_hamburg'),
      it('だし巻き', '', 'Dashi-rolled omelette', '¥700', 'Small plates', 'ask', 'no', 'September 2026; not made when busy.', 'dashimaki'),
      it('', '', 'Grilled atsuage', '¥500', 'Small plates', 'ask', 'ask', 'September 2026.', 'yaki_atsuage'),
    ] }, {
    cuisine: 'カラオケのあるカウンターの家庭料理の店。品書きはホワイトボード (2025年9月、2026年9月)。素人の料理をうたう店 (2022年11月、2024年3月)・お通し: からしの効いた手作りのマカロニサラダ (2025年9月、2026年9月)。れんこんのきんぴら (2022年9月)、れんこんと豚肉のきんぴら (2023年)・手作りの小さなハンバーグ500円、ポン酢で (2025年9月、2026年9月)。夜11時ごろでも食べられる (2026年6月)・だし巻き700円、厚揚げ焼き500円 (2026年9月)。こんにゃく焼き、油揚げ焼き各500円 (2022年11月)。揚げなすのだし浸し (2023年)・名物の粕汁、たっぷりの器で (2023年12月、2026年9月)・飲み物: 生ビール、ハイボール、芋焼酎のソーダ割り、日本酒 (2022〜2026年)・ひとり1,000〜5,000円ほど (2022〜2026年の口コミ)',
    neighborhood: 'リド飲食街、烏丸七条。京都駅の近く',
    gf_detail: 'GF — 要確認。グルテンフリーの記載なし。ホワイトボードの家庭料理: ポン酢で食べる小さなハンバーグ、だし巻き、厚揚げ焼き、れんこんのきんぴら、粕汁。お通しはマカロニサラダ (2022〜2026年の口コミ)。味付けは記載なし。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。口コミに出てくる料理の多くは肉、卵、だしを使う: ハンバーグ、だし巻き、れんこんと豚肉のきんぴら (2023〜2026年)。2022年11月にはこんにゃく焼きと油揚げ焼きもあったが、材料は記載なし。',
    notes: '[居酒屋・リド飲食街、烏丸七条] 京都駅の近く、リド飲食街の端にある8席のカウンター。20年ほど続く店で、店主がホワイトボードの家庭料理 (小さなハンバーグ500円、だし巻き、粕汁など) を作り、カラオケもある。席が空いていれば初めてでも歓迎。現金のみ。18:30〜翌2:00、日曜休み。',
  });
}

// ================================================================ skips
skip('26020894', 'chain: お好み焼はここやねん 四条大宮店 is one of 27 お好み焼はここやねん shops in Shiga, Kyoto, Osaka, Hyogo, Nara, Wakayama, Gifu and Mie (Hot Pepper brand page hotpepper.jp/gstr01200/, read 2026-11-26).');
skip('26034700', 'chain: 本格焼肉 チファジャ 京都駅前店 is one of 6 チファジャ shops (三条河原町本店, 四条河原町, 烏丸仏光寺, 南草津, 京都駅前, 甲府湯村; chifaja.com, read 2026-11-26), run by クーデションカンパニー, which also runs たかばしラーメン (cudetion.com).');
skip('26037730', 'retail food shop (Greg 11-07 ruling): クリーム フェスト 京都駅前店 is a soft-serve counter (Tabelog: soft serve, opened 2022-06-01; reviews describe ordering at the counter and taking it away), not historic, no GF or vegan claim; one of 4 Cream Fest shops (cream-fest.com/shops/).');
skip('26044228', 'retail food shop (Greg 11-07 ruling): 京都チーズケーキ博物館 is a cheesecake shop (Tabelog: Cake, opened 2025-12-21; open Fri–Sun afternoons), mostly take-out with a small eat-in floor upstairs (2026 reviews); no meals, not historic, no GF or vegan claim.');
skip('26043220', 'too thin to verify: OM Sky Terrace is a rooftop bar on ENTERTAINMENT HUB KYOTO (Tabelog); three short 2025–26 reviews that disagree on the food (Mexican per the listing, “Spanish” per one review); its own site (entertainment-hub-kyoto.com) returns 403 and the operator is not confirmed (the building’s karaoke floor is a ジャンカラ shop, jankara.ne.jp/ehub/kyo, which lists “OM” as a venue in the building).');
skip('26028490', 'big-chain hotel venue (Greg 11-08 ruling): ほりかわ is a bar of the Kyoto Tokyu Hotel (Tabelog address 「京都東急ホテル」; website tokyuhotels.co.jp/kyoto-h/restaurant/horikawa/), a Tokyu Hotels property.');

save();
