// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 22.
//   + 京中華 牧定 Kyoto Chuka Makisada (a brother duo's eight-seat Chinese omakase near Karasuma-Oike; since 2022)
//   + 茶房いせはん Sabo Isehan (azuki-and-matcha sweets café facing Demachi Futaba)
//   + 本家月餅家直正 Honke Gepaikeya Naomasa (takeaway wagashi on Kiyamachi, known for bean-filled warabi mochi)
//   + 今西軒 Imanishi Ken (ohagi by Gojo, open until sold out)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 21).
//   None is in data/kyoto.json: grep by name (牧定/Makisada, いせはん/Isehan, 月餅家/Naomasa, 今西軒/Imanishi) and
//   address (瓦町565-5, 青龍町242, 上大阪町530, 横諏訪町312) found none. kyr_ramen_makisada (ラーメン まきさだ) is
//   160 m away: a June 2026 review of 牧定 mentions the father's ramen shop, so it is a family sister concept, drafted
//   separately (Greg, 2026-11-02). Sabo Isehan is 33 m from kyoto_demachi_futaba; Makisada 15 m from
//   vm_indo_shokudo_tadka_tadka — not stacked. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京中華 牧定
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038357/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_kyoto_chuka_makisada', name: '京中華 牧定 (Kyoto Chuka Makisada)', category: 'OMNI',
    lat: 35.012313, lng: 135.762198, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Chinese omakase with soy and fermented sauces, shrimp mayonnaise, Peking duck pancakes and fried rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, shark fin, duck and beef throughout (2026 reviews).',
    hours_raw: '18:00–21:00, everyone starting together at 18:00; Mon, Tue and Thu–Sun; closed Wednesday (Tabelog; March 2026). Reservation only (Tabelog); the next booking can be six to nine months away (March and August 2026), though cancellations come up (July 2026). Omakase ¥19,800 (March 2026) or ¥22,000 (August 2026); diners report ¥20,000–39,999. 8 counter seats (Tabelog). Non-smoking; smoking in the garden (Tabelog). Cash only (Tabelog). 5 min from Karasuma-Oike or Kyoto Shiyakusho-mae Stn (Tabelog). Opened 7 November 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura-dori south of Nijo, between Karasuma-Oike and City Hall — 5 min from either station',
    cuisine: 'Kyoto-style Chinese omakase that brings in Japanese ingredients and seasons (2026 reviews) · omakase ¥19,800–22,000 (2026) · October 2026: Ise lobster sashimi with fresh chili and fish sauce; shark-fin soup with scallop broth, Kyoto Matsutake and crispy rice; sweet-spicy cashews; Peking duck with pear, watercress and fried burdock · other 2026 dishes: Botan shrimp and sea urchin in Shaoxing marinade, Spanish mackerel with sea-urchin cream, Mie clams, Ise lobster with shrimp mayonnaise, sirloin cap, fried rice with firefly squid and abalone, Peking duck with seasonal peaches, seared shark fin · warm Shaoxing wine with dried plums; wine',
    website: null, gmaps: gm('京中華 牧定'), menu_url: null,
    notes: "[Chinese · Karasuma-Oike, the brothers' Kyoto-Chinese counter] Eight seats, one 18:00 start and a pair of young brothers behind the counter, cooking a Kyoto-leaning Chinese omakase: Ise lobster sashimi with chili and fish sauce, shark-fin soup with Kyoto Matsutake, Peking duck wrapped with seasonal fruit, fried rice to finish. Diners praise the easy atmosphere and the brothers' banter as much as the food. The catch is booking — six to nine months ahead, though cancellations surface. About ¥20,000–22,000; cash only; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Run by two brothers (2026 reviews); not named in the sources'], origin: null,
      background: 'Per 2026 reviews: a counter run by a young brother duo; a June 2026 review mentions their father\'s ramen shop (Ramen Makisada, kyr_ramen_makisada, is nearby); a March 2026 review lists it as a "Selected Restaurant 2025". Tabelog: opened 7 November 2022; Chinese WEST "Tabelog 100" 2024, 2026.',
      philosophy: null, specialty: 'Peking duck with seasonal fruit; shark fin.',
      anecdotes: [
        { text: '"As I was leaving, I asked to make a reservation for next time, and they told me it was for April next year, nine months away..." — August 2026.', source: R + 'B469602113/' },
        { text: '"A cozy local Chinese restaurant with great brotherly harmony" — October 2026, a twelfth visit.', source: R + 'B474449337/' },
        { text: '"The flavors might be a bit strong, but they pair well with drinks." — May 2026.', source: R + 'B528162954/' },
      ],
      japanese_sources_summary: '食べログ: 京中華 牧定、中華、中京区高倉二条下る瓦町565-5、京都市役所前駅・烏丸御池駅から徒歩5分、月・火・木〜日 18:00〜21:00、水曜休み、予約のみ、カウンター8席、庭で喫煙可、カード不可、2022年11月7日オープン、中国料理 WEST 百名店 2024・2026。口コミ (2026年1〜10月、英語): 若い兄弟の店、18時一斉スタート、おまかせ19,800〜22,000円、伊勢海老、フカヒレ、季節の果物の北京ダック、次の予約は6〜9か月先、父のラーメン店。',
      confidence: 'medium', sources: [TB, R + 'B469602113/', R + 'B474449337/', R + 'B480451925/', R + 'B484831640/', R + 'B506509216/', R + 'B520534359/', R + 'B524516184/', R + 'B525105155/', R + 'B528162954/', R + 'B529444442/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the counter; book many months ahead or ask about cancellations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉二条下る瓦町565-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.012313, 135.762198); cross-checked: GSI 京都府京都市中京区瓦町565番地 (lot) 61m; vm_indo_shokudo_tadka_tadka is 15 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524516184/', R + 'B469602113/'],
    price_note: 'No published prices; from March and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥19,800–22,000', 'Course', 'ask', 'no', 'March 2026 ¥19,800; August 2026 ¥22,000.', 'omakase'),
    ] }, {
    cuisine: '日本の食材や季節を取り入れた京都らしい中華のおまかせ (2026年の口コミ)・おまかせ19,800〜22,000円 (2026年)・2026年10月: 生唐辛子と魚醤の伊勢海老の刺身、帆立のスープと京都の松茸とおこげのフカヒレのスープ、甘辛いカシューナッツ、梨・クレソン・揚げごぼうの北京ダック・ほかの2026年の料理: 紹興酒漬けのボタン海老と雲丹、雲丹クリームの鰆、Mie の蛤、伊勢海老のエビマヨ、sirloin cap、ホタルイカと鮑の炒飯、季節の桃の北京ダック、炙ったフカヒレ・干し梅を入れた紹興酒のお湯割り、ワイン',
    neighborhood: '二条の南の高倉通、烏丸御池と市役所の間。どちらの駅からも徒歩5分',
    gf_detail: '予約時に要確認。醤油や発酵調味料のソース、エビマヨ、北京ダックの皮、炒飯のある中華のおまかせ。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、フカヒレ、鴨、牛肉を使う (2026年の口コミ)。',
    notes: '[中華・烏丸御池、兄弟の京中華のカウンター] 8席、18時一斉スタート、カウンターには若い兄弟。生唐辛子と魚醤の伊勢海老の刺身、京都の松茸のフカヒレのスープ、季節の果物で巻く北京ダック、締めの炒飯と、京都らしい中華のおまかせ。料理と同じくらい、気さくな雰囲気と兄弟の掛け合いが好評。難関は予約で、6〜9か月先、キャンセル待ちが出ることも。20,000〜22,000円ほど、現金のみ、水曜休み。',
  });
}

// ================================================================ 茶房いせはん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001023/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.isehan.demachi.jp/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_sabo_isehan', name: '茶房いせはん (Sabo Isehan)', category: 'OMNI',
    lat: 35.029948, lng: 135.769936, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice, anmitsu, zenzai and matcha are mostly bean, agar and rice-flour sweets, but the parfait has soba cookies and the monaka is a wafer; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Azuki, agar, matcha and shiratama may suit; soft serve, condensed milk and cream do not (2026 reviews).',
    hours_raw: '11:00–18:30 (last order 18:00); closed Tuesday unless a holiday (Tabelog). No reservations (Tabelog); a short wait at busy times (September 2026). 26 seats (Tabelog). Non-smoking (Tabelog). Cards, UnionPay and many QR payments (Tabelog). Parking validation for nearby car parks with a ¥1,500+ purchase (Tabelog). 5 min from Demachiyanagi Stn; 1 min from the Kawaramachi-Imadegawa bus stop; across the road from Demachi Futaba (Tabelog; September 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachi, on Kawaramachi-dori across from Demachi Futaba — 5 min from Demachiyanagi Stn',
    cuisine: 'Japanese sweets café of azuki and matcha, using Uji matcha syrup and Tanba dainagon azuki (October 2026 review) · kakigori such as Uji milk kintoki and anmitsu ice; anmitsu ¥950 with cream, shiratama anmitsu; chilled zenzai with matcha jelly; matcha parfait ¥1,600; freshly whisked matcha with monaka ¥900; mini soft serve with a drink (2026 reviews) · sweets to take away · diners spend about ¥1,000–1,999',
    website: SITE, gmaps: gm('茶房いせはん'), menu_url: null,
    notes: "[Sweets · Demachi, azuki and matcha across from Futaba] While the queue snakes outside Demachi Futaba, many locals cross the road to this calm sweets café for bowls of azuki and matcha: generous Tanba dainagon beans cooked soft but whole, Uji matcha syrup over shaved ice, chilled zenzai with matcha jelly, anmitsu with soft serve. Matcha is whisked to order and served with a monaka. A good stop after Shimogamo Shrine or Kibune. Around ¥1,000–1,600; cards and QR payments accepted; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Sweets café; no person is named in the sources'], origin: null,
      background: 'Per an October 2026 review: uses Uji matcha from a long-established tea shop and Tanba dainagon azuki. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Azuki kakigori; anmitsu; chilled zenzai.',
      anecdotes: [
        { text: '"The beans are cooked to perfection, maintaining their shape while being soft, and the gentle sweetness is exquisite." — September 2026.', source: R + 'B537058920/' },
        { text: '"There were hardly any inbound tourists; it was mostly locals. Meanwhile, the nearby Demachi Futaba had a long line." — October 2026.', source: R + 'B538452483/' },
        { text: '"The matcha is prepared one cup at a time upon ordering" — September 2026.', source: R + 'B537751732/' },
      ],
      japanese_sources_summary: '食べログ: 茶房いせはん、甘味処・かき氷・カフェ、上京区青龍町242、出町柳駅から徒歩5分、河原町今出川バス停から徒歩1分、月・水〜日・祝 11:00〜18:30 (L.O.18:00)、火曜休み (祝日は営業)、予約不可、26席、カード・各種 QR 決済可、近くの駐車場の割引券、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜10月、英語): Uji の抹茶、Tanba の大納言小豆、かき氷、あんみつ、冷やしぜんざい、点てたての抹茶と最中、地元の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536066889/', R + 'B536297998/', R + 'B536463522/', R + 'B536708169/', R + 'B537022426/', R + 'B537058920/', R + 'B537137240/', R + 'B537677654/', R + 'B537751732/', R + 'B538452483/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区青龍町242',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.029948, 135.769936); cross-checked: GSI 京都府京都市上京区青龍町 (town only, no lot) 224m — pin stays on the Tabelog point; kyoto_demachi_futaba is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537022426/', R + 'B537751732/', R + 'B538452483/'],
    price_note: 'No price list read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cream anmitsu', '¥950', 'Sweets', 'ask', 'no', 'October 2026.', 'anmitsu'),
      it('', '', 'Matcha with monaka', '¥900', 'Sweets', 'ask', 'ask', 'September 2026.', 'matcha_monaka'),
      it('', '', 'Matcha parfait', '¥1,600', 'Sweets', 'no', 'no', 'October 2026; includes soba cookies.', 'parfait'),
    ] }, {
    cuisine: 'Uji の抹茶のシロップと Tanba の大納言小豆を使う甘味処 (2026年10月の口コミ)・Uji ミルク金時やあんみつ氷などのかき氷、クリームあんみつ950円、白玉あんみつ、抹茶ゼリーの冷やしぜんざい、抹茶パフェ1,600円、点てたての抹茶と最中900円、ミニソフトとドリンク (2026年の口コミ)・持ち帰りの菓子も・予算は約1,000〜1,999円',
    neighborhood: '出町、出町ふたばの向かいの河原町通。出町柳駅から徒歩5分',
    gf_detail: '要確認。かき氷、あんみつ、ぜんざい、抹茶は主に豆、寒天、白玉の甘味だが、パフェにはそばクッキー、最中は皮がある。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。小豆、寒天、抹茶、白玉は合うかもしれないが、ソフトクリーム、練乳、クリームは不可 (2026年の口コミ)。',
    notes: '[甘味・出町、ふたばの向かいの小豆と抹茶] 出町ふたばに行列ができる間、地元の人の多くは向かいの落ち着いた甘味処へ: 形を保ったまま柔らかく炊いた Tanba の大納言小豆、Uji の抹茶のシロップのかき氷、抹茶ゼリーの冷やしぜんざい、ソフトクリームのあんみつ。抹茶は注文ごとに点て、最中が付く。Shimogamo Shrine や Kibune の帰りにも。1,000〜1,600円ほど、カードや QR 決済可、火曜休み。',
  });
}

// ================================================================ 本家月餅家直正
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002393/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_honke_gepaikeya_naomasa', name: '本家月餅家直正 (Honke Gepaikeya Naomasa)', category: 'OMNI',
    lat: 35.009435, lng: 135.770639, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The warabi mochi is described as made with real bracken starch, filled with bean paste and coated in kinako; other sweets vary; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and starch sweets are likely candidates, but no ingredient list is published (2026 reviews).',
    hours_raw: '10:30–18:00, Mon, Tue and Fri–Sun; closed Wednesday and Thursday (Tabelog). Takeaway only (Tabelog). The warabi mochi is usually ready from 12:30 and sells out to reservations — phone ahead (075-231-0175) or reserve in person the day before; same-day reservations are sometimes possible (September 2026 reviews). Eat it the same day (September 2026). Cash only (Tabelog). On Kiyamachi-dori just north of Sanjo, 155 m from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori just north of Sanjo — a short walk from Sanjo Stn',
    cuisine: 'Takeaway wagashi from a long-established shop, said to date from 1804 (September 2026 review) · the famous warabi mochi: soft bracken-starch mochi filled with smooth bean paste and coated in unsweetened kinako, three for ¥940 (September 2026) · also aobimochi, kuzuyu with sweet red-bean soup, and other seasonal wagashi (August 2026)',
    website: null, gmaps: gm('本家月餅家直正'), menu_url: null,
    notes: "[Wagashi · Kiyamachi-Sanjo, the warabi mochi worth reserving] A small, old-fashioned sweets shop on Kiyamachi whose warabi mochi is the draw: melting bracken-starch mochi wrapped around plenty of smooth bean paste and buried in fragrant kinako, three for ¥940. It is made for the day and goes to reservations first, ready from about 12:30, so phone ahead or reserve the day before; walk-ins often find only a sample in the case. Staff are warm. Eat it the same day. Cash only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Long-established confectioner; no person is named in the sources'], origin: null,
      background: 'Per a September 2026 review: a long-established wagashi shop said to date from 1804, making warabi mochi with real bracken starch; takeaway only. Tabelog Sweets "Tabelog 100" 2017, Sweets WEST 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Bean-filled warabi mochi.',
      anecdotes: [
        { text: '"When I asked for a pack of three, I was told there was only one available." — August 2026.', source: R + 'B534652083/' },
        { text: '"Today, they were fully booked, so they could only offer it from 3 PM." — September 2026.', source: R + 'B535547373/' },
        { text: '"Most importantly, the staff were very friendly, making this a place I definitely want to revisit." — September 2026.', source: R + 'B535002435/' },
      ],
      japanese_sources_summary: '食べログ: 本家月餅家直正、和菓子、中京区木屋町通三条上ル上大阪町530、三条駅から155m、月・火・金〜日 10:30〜18:00、水・木休み、持ち帰りのみ、予約可、カード不可、スイーツ百名店 2017、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年8〜9月、英語): 1804年創業という老舗、こし餡入りのわらび餅3個940円、12時半から、予約で売り切れ、電話か前日に予約、当日中に、親切な店員。',
      confidence: 'medium', sources: [TB, R + 'B534652083/', R + 'B535002435/', R + 'B535075629/', R + 'B535081233/', R + 'B535297860/', R + 'B535547373/', R + 'B536064463/', R + 'B536154553/', R + 'B536449178/', R + 'B536680124/'] },
    cultural_comfort: { level: 'relay', note: 'Reserve the warabi mochi by phone or in person the day before; a Japanese speaker helps.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上ル上大阪町530',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.009435, 135.770639); cross-checked: GSI 京都府京都市中京区上大阪町530番地 (lot) 59m; kyr_chuka_soba_rantan is 24 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536449178/'],
    price_note: 'No price list read; from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Warabi mochi with bean paste and kinako, 3 pieces', '¥940', 'Wagashi', 'ask', 'ask', 'September 2026; reserve ahead.', 'warabi_mochi'),
    ] }, {
    cuisine: '1804年創業という老舗の持ち帰りの和菓子 (2026年9月の口コミ)・名物のわらび餅: 本わらび粉の柔らかい餅でこし餡を包み、無糖のきなこをまぶす、3個940円 (2026年9月)・ほかに aobimochi、ぜんざいの葛湯、季節の和菓子 (2026年8月)',
    neighborhood: '三条のすぐ北の木屋町通。三条駅からすぐ',
    gf_detail: '要確認。わらび餅は本わらび粉でこし餡を包みきなこをまぶすという。ほかの菓子は品による。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。餡や澱粉の菓子は候補になりそうだが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・木屋町三条、予約してでも買いたいわらび餅] 木屋町の小さな昔ながらの和菓子屋のお目当てはわらび餅: とろける本わらびの餅でたっぷりのこし餡を包み、香ばしいきなこに埋もれさせて、3個940円。当日分は予約が優先で12時半ごろから、電話か前日に予約を。飛び込みではショーケースに見本しかないことも。店員は温かい。当日中に。現金のみ、水・木曜休み。',
  });
}

// ================================================================ 今西軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002101/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_imanishi_ken', name: '今西軒 (Imanishi Ken)', category: 'OMNI',
    lat: 34.995447, lng: 135.758922, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ohagi are glutinous rice with bean paste or kinako; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Rice, azuki and kinako ohagi are likely candidates, but no ingredient list is published (2026 reviews).',
    hours_raw: 'From 9:30 until sold out — 8:00 during the equinox weeks; closed Tuesday and the first, third and fifth Monday, and both Monday and Tuesday in July and August (Tabelog). With no fixed closing time, no hours are stored. A queue of 15–20 forms before opening; kinako sells out first (September–October 2026). Reservations accepted by 14:00 (Tabelog). Takeaway. Cash only (Tabelog). 1–2 min from Gojo Stn exit 4 (Tabelog). The shop closed in 1995 and reopened in 2002 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Just west of Karasuma-Gojo, on a side street — 1–2 min from Gojo Stn',
    cuisine: 'Ohagi only, in three kinds — kinako, koshian (smooth bean paste) and tsubuan (chunky) — ¥240 each, three for ¥720 (September–October 2026) · soft, partly mashed glutinous rice and mildly sweet paste',
    website: null, gmaps: gm('今西軒 京都'), menu_url: null,
    notes: "[Wagashi · Gojo, the ohagi queue] A tiny shop a minute from Gojo Station that makes just three kinds of ohagi — kinako, smooth bean paste and chunky bean paste — at ¥240 each, until they are gone. The rice is soft and only partly mashed, the paste gently sweet; the kinako goes first, often before 10:00. Expect 15–20 people waiting at the 9:30 opening (8:00 around the equinox), or reserve before 14:00. Cash only; closed Tuesdays and some Mondays, and both days in July and August.",
    chef_bio: { chef_name: null, roles: ['Small family-scale wagashi shop; no person is named in the sources'], origin: null,
      background: 'Tabelog: the shop closed in 1995 and reopened in 2002; opens early during the equinox weeks; Sweets WEST "Tabelog 100" 2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Ohagi (kinako, koshian, tsubuan).',
      anecdotes: [
        { text: '"I arrived at 9:10 AM, 20 minutes before opening. There were already over 20 people in line!" — October 2026.', source: R + 'B537152331/' },
        { text: '"This was the most delicious ohagi I have ever had." — September 2026.', source: R + 'B536095536/' },
        { text: '"Given that I had to line up so early in the morning, I think I might pass next time." — September 2026.', source: R + 'B536451327/' },
      ],
      japanese_sources_summary: '食べログ: 今西軒、和菓子、下京区烏丸五条西入ル一筋目下ル横諏訪町312、五条駅4番出口から徒歩1〜2分、9:30〜売り切れ次第終了、火曜と第1・3・5月曜休み (7・8月は月・火休み)、彼岸の期間は8時から、予約は14時まで、カード不可、1995年に一時閉店し2002年に再開、スイーツ WEST 百名店 2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜10月、英語): おはぎはきなこ・こしあん・つぶあんの3種で各240円、開店前から15〜20人の行列、きなこから売り切れる。',
      confidence: 'medium', sources: [TB, R + 'B535906151/', R + 'B536095536/', R + 'B536195715/', R + 'B536327115/', R + 'B536369744/', R + 'B536451327/', R + 'B537149252/', R + 'B537152331/', R + 'B537457900/', R + 'B538242273/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue and point; three kinds only; reserve before 14:00 if you can.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸五条西入ル一筋目下ル横諏訪町312',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995447, 135.758922); cross-checked: GSI 京都府京都市下京区横諏訪町312番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536327115/', R + 'B538242273/'],
    price_note: 'From September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ohagi, kinako', '¥240', 'Ohagi', 'ask', 'ask', 'October 2026.', 'kinako'),
      it('', '', 'Ohagi, koshian (smooth bean paste)', '¥240', 'Ohagi', 'ask', 'ask', 'October 2026.', 'koshian'),
      it('', '', 'Ohagi, tsubuan (chunky bean paste)', '¥240', 'Ohagi', 'ask', 'ask', 'September 2026.', 'tsubuan'),
    ] }, {
    cuisine: 'おはぎだけ、きなこ・こしあん・つぶあんの3種、各240円、3個720円 (2026年9〜10月)・柔らかく半殺しのもち米と甘さ控えめの餡',
    neighborhood: '烏丸五条のすぐ西、脇の通り。五条駅から徒歩1〜2分',
    gf_detail: '要確認。もち米に餡やきなこのおはぎ。原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。米、小豆、きなこのおはぎは候補になりそうだが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・五条、おはぎの行列] 五条駅から1分の小さな店で、おはぎを3種だけ、きなこ、こしあん、つぶあんを各240円、なくなるまで。米は柔らかく半殺し、餡は甘さ控えめ。きなこが最初に売り切れ、10時前のことも。9時半の開店 (彼岸は8時) に15〜20人が並ぶので、14時までに予約するのも手。現金のみ、火曜と一部の月曜休み、7・8月は月・火曜休み。',
  });
}

save();
