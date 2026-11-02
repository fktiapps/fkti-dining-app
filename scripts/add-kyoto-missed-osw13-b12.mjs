// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 12.
//   + 森林食堂 Shinrin Shokudo (spice-curry house near Nijo that began as a travelling curry caterer; since 2012)
//   + VELROSIER (Yuji Iwasaki's innovative Chinese, Ashiya 2014 → Kawaramachi 2019; two Michelin stars per a 2026 review)
//   + 焼鳥 京都橘 Yakitori Kyoto Tachibana (坂田知紀's Takasaka-chicken yakitori counter near Kyoto City Hall; since 2021)
//   + 実伶 Mirei (Yuuzou Nakao's à la carte kappo counter by Marutamachi; since 2016)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 11).
//   None is in data/kyoto.json: grep by name (森林/Shinrin, VELROSIER, 京都橘/Tachibana, 実伶/Mirei) and address
//   (内畑町24, 稲荷町318 2F, 橘町612, 亀屋町143) found none of them. VELROSIER shares GOOD NATURE STATION 2F with
//   kyoto_takayama_kawaramachi (23 m) and is 17 m from kyr_chuka_soba_roku; Tachibana is 12 m from Vegginy — no stacking.
//   Chain check: single shops. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 森林食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26020410/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://shinrin-syokudo.com/';
  const H = day(['11:30', '14:30'], ['18:00', '20:00']);
  put({
    id: 'kyoto_shinrin_shokudo', name: '森林食堂 (Shinrin Shokudo)', category: 'OMNI',
    lat: 35.014339, lng: 135.739226, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries on multigrain rice, but the daily line-up changes and some plates carry fried or battered toppings such as hamo tempura (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The 2026 curries were meat- or fish-based (chicken, pork, duck, wild boar, bonito soup), with egg salad on the plate; no vegan curry is mentioned.',
    hours_raw: 'Lunch 11:30–14:30 and dinner 18:00–20:00 (Tabelog); open irregularly, also closing for catering jobs — check the business calendar on the official site, where a blank day means closed (official site; Tabelog). Reservations accepted (Tabelog). Queues are common and food takes time, so allow extra (2026 reviews). 22 seats: a counter of 4, tables for 8, and a private tatami room for about 10 (Tabelog). Non-smoking (Tabelog). Cash only: no cards, e-money or QR (Tabelog). About 10 min on foot from Nijo Stn (Tabelog). Opened 24 March 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishinokyo, a quiet residential street north of Nijo Stn, behind a front full of plants — about 10 min on foot',
    cuisine: 'Spice curry: a daily set of two or three curries on one big plate with multigrain rice, pickles and side dishes, written up in a handwritten booklet (2026 reviews) · examples: grape-fed pork keema with spinach and a bonito soup curry ¥1,950; Kyushu chicken keema with lotus root and bamboo shoots; a hamo curry with hamo tempura; squid-ink duck keema; salmon, mushroom and eggplant; wild boar; black wagyu beef tendon; three-curry plates ¥2,050–2,450 (August–October 2026 reviews) · daily toppings such as tandoori chicken, braised pork belly or marinated bonito · peach lassi about ¥900; collaboration beers with a brewery, ¥850–900 · diners spend about ¥2,000–3,999',
    website: SITE, gmaps: gm('森林食堂 京都'), menu_url: null,
    notes: "[Curry · Nijo, Kyoto's forest of spice curry] A travelling curry caterer that put down roots in 2012, in a house near Nijo whose front is a thicket of plants and whose room is full of greenery, dried flowers and folk craft. The menu changes daily: two or three curries share a long plate with multigrain rice and a crowd of small sides — perhaps pork keema with spinach, a coconut bonito-soup curry, and the house squid-ink duck keema. Expect a queue and a wait for plates that look like artwork. Opening days are irregular (it closes for catering jobs), so check the online calendar first. About ¥2,000–2,500; cash only.",
    chef_bio: { chef_name: null, roles: ['Run by an owner who is not named in the sources (2026 reviews mention "the female owner" and friendly staff)'], origin: null,
      background: 'Per the official site: "the travelling curry caterer that became a shop", now nearly 14 years as a shop; a list of events from 2006–2010 at galleries and live houses in Kyoto, Osaka, Shiga and Kobe; the concept is to pour the spirit of making things into the spices, the way an artist wrestles with material. Tabelog: opened 24 March 2012; Curry "Tabelog 100" 2017, 2018, 2022 and Curry WEST 2019, 2020, 2023, 2024, 2026.',
      philosophy: 'To make a one-of-a-kind, beloved curry with the maker\'s spirit poured in with the spices (official site).', specialty: 'Multi-curry plates; squid-ink duck keema.',
      anecdotes: [
        { text: '"The interior is surrounded by plants and folk crafts, creating a friendly and calming atmosphere—very nice." — September 2026.', source: R + 'B534920221/' },
        { text: '"However, the operating hours are quite irregular. It is essential to check the website for business days and hours before visiting." — September 2026.', source: R + 'B535917405/' },
        { text: '"Waiting time melts away with smiles at this forest restaurant." — October 2026.', source: R + 'B537770314/' },
      ],
      japanese_sources_summary: '公式サイト (shinrin-syokudo.com): 「出張ケータリングカレー、森林食堂が店舗化してもうすぐ14年」、「店舗化しちゃった、出張カレー屋」、アーティストが物質と格闘するようにモノづくり精神をスパイスと共に注ぐ、不定休なのでカレンダーを確認、空欄や営業時間の記載がない日は休み、出張カレーのために閉めることあり、中京区西ノ京内畑町24-4、2006〜2010年のイベント出店。食べログ: カレー、11:30〜14:30・18:00〜20:00、不定休、予約可、22席 (カウンター4、テーブル8、座敷の個室約10名)、カード・電子マネー・QR 不可、2012年3月24日オープン、カレー 百名店 2017・2018・2022、カレー WEST 百名店 2019・2020・2023・2024・2026。口コミ (2026年8〜10月、英語): 植物に囲まれた店内、日替わりの2〜3種盛り、イカスミの鴨キーマ、行列と待ち時間。',
      confidence: 'medium', sources: [SITE, 'http://shinrin-syokudo.com/?page_id=294', TB, R + 'B423791945/', R + 'B534920221/', R + 'B535100933/', R + 'B535917405/', R + 'B536060418/', R + 'B536318393/', R + 'B536941756/', R + 'B537169364/', R + 'B537738318/', R + 'B537770314/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Daily set plates from a handwritten Japanese booklet; check the online calendar before going.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京内畑町24-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with its business calendar; Tabelog reviews dated through October 2026; Curry WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.014339, 135.739226); cross-checked: GSI 京都府京都市中京区西ノ京内畑町24番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B423791945/', R + 'B535917405/', R + 'B537169364/'],
    price_note: 'No published prices; from September–October 2026 reviews (the menu changes daily).', last_checked: TODAY, items: [
      it('', '', 'Two-curry plate of the day (e.g. pork keema with spinach and bonito soup curry)', '¥1,950', 'Curry', 'ask', 'ask', 'October 2026.', 'two_curry'),
      it('', '', 'Three-curry plate of the day', '¥2,050–2,450', 'Curry', 'ask', 'ask', 'September–October 2026.', 'three_curry'),
      it('', '', 'Peach lassi', '¥900', 'Drinks', '', 'no', 'August 2026, about ¥900.', 'peach_lassi'),
    ] }, {
    cuisine: 'スパイスカレー。日替わりの2〜3種のカレーを、雑穀ご飯、ピクルス、副菜と一緒に大皿で、手書きの冊子のメニューから (2026年の口コミ)・例: 豚の粗挽きキーマとほうれん草、鰹のスープカレーで1,950円、九州の鶏のキーマに蓮根と筍、hamo の天ぷらをのせたカレー、イカスミの鴨キーマ、鮭ときのこと茄子、猪、黒毛和牛の牛すじ、3種盛り2,050〜2,450円 (2026年8〜10月の口コミ)・日替わりのトッピング (タンドリーチキン、豚の kakuni、鰹の漬けなど)・桃のラッシー約900円、ブルワリーとのコラボビール850〜900円・予算は約2,000〜3,999円',
    neighborhood: '西ノ京、二条駅の北の静かな住宅街、植物に覆われた店構え。徒歩約10分',
    gf_detail: '要確認。雑穀ご飯のスパイスカレーだが、日替わりで、hamo の天ぷらなど揚げ物や衣付きのトッピングがのる日もある (2026年の口コミ)。',
    vegan_detail: '要確認。2026年のカレーは肉か魚が中心 (鶏、豚、鴨、猪、鰹のスープ) で、皿には卵のサラダも。ヴィーガンのカレーの記載はない。',
    notes: '[カレー・二条、森のようなスパイスカレーの店] 出張カレー屋が2012年に店を構えた。二条駅近くの一軒家で、店先は植物に覆われ、店内も緑やドライフラワー、民芸品でいっぱい。メニューは日替わりで、長い皿に2〜3種のカレーと雑穀ご飯、たくさんの副菜が並ぶ。たとえば豚のキーマとほうれん草、ココナッツの効いた鰹のスープカレー、名物のイカスミの鴨キーマ。行列と、作品のような皿を待つ時間は覚悟を。営業日は不定で出張カレーの日は休むので、ネットのカレンダーを先に確認。2,000〜2,500円ほど、現金のみ。',
  });
}

// ================================================================ VELROSIER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033284/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.vel-rosier.com/'; const COURSE = 'http://www.vel-rosier.com/course.html';
  const TC = 'https://www.tablecheck.com/shops/vel-rosier/reserve';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_velrosier', name: 'VELROSIER', category: 'MOM_AND_POP',
    lat: 35.002447, lng: 135.768759, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the booking page says the restaurant does not offer gluten-free menus; the courses include gyoza and spring-roll wrappers and house noodles of seven kinds of domestic wheat (TableCheck; 2026 reviews). Allergies must be declared at booking; no changes on the day (TableCheck).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the booking page says no vegan, vegetarian or pescatarian menus are offered (TableCheck).',
    hours_raw: 'Lunch 12:00–15:00 (enter by 13:00) and dinner 18:00–22:00 (enter by 19:00); closed Wednesday (official site); further closing days are posted each month — November 2026: 3, 4, 11, 12, 18, 25 (Tabelog). Reservation only, online through TableCheck (official site); parties of 9 or more by phone, 075-744-6984 (TableCheck). Same-day cancellation is charged in full (TableCheck). Children only if they can eat the full course seated like adults (TableCheck). Lunch ¥11,000 or ¥20,000, dinner ¥22,000, tax included, plus 10% service; shark-fin courses ¥30,000 (lunch) and ¥32,000 (dinner) (official site; TableCheck). 16 seats; non-smoking; wheelchair accessible (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). GOOD NATURE STATION 2F, 2 min from Kyoto-Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi, second floor of GOOD NATURE STATION just south of Shijo — 2 min from Kyoto-Kawaramachi Stn',
    cuisine: 'Innovative Chinese omakase built on "add on" cooking — combining ingredients to create new tastes (Tabelog shop text; 2026 reviews) · lunch ¥11,000 or ¥20,000, dinner ¥22,000, shark-fin courses ¥30,000/¥32,000, tax included, +10% service (official site; TableCheck) · a drink pairing of Shaoxing wine, sake, champagne and wine (May and July 2026; a small pairing ¥9,000) · signatures: foie gras monaka with physalis (hozuki) jam; a deconstructed gyoza of chive chawanmushi under "chive snow"; Cantonese char siu with fried bonito; soup xiao long bao; almond tofu (2026 reviews) · autumn 2026: Matsutake soup dumplings, tuna and caviar spring roll, Shanghai crab with flat noodles of seven domestic wheats, pork loin with lotus root cake and flower buns',
    website: SITE, gmaps: gm('VELROSIER 京都'), menu_url: COURSE,
    notes: "[Chinese · Kawaramachi, two-star creative Chinese behind a cell-like door] Through a barred, jail-like entrance off a Kawaramachi complex into a dark, sleek room with an open kitchen: owner-chef Yuji Iwasaki, ten years in hotel Chinese kitchens, opened in Ashiya in 2014 and moved here in 2019, and an October 2026 diner notes two Michelin stars since 2023. The chef's \"add on\" style layers flavours: foie gras monaka with hozuki jam, a gyoza rebuilt as chive custard under chive snow, char siu with fried bonito, almond tofu many call the best they've had. Portions are big. Lunch from ¥11,000 plus 10%; book on TableCheck. No vegetarian or gluten-free menus.",
    chef_bio: { chef_name: 'Yuji Iwasaki (岩崎祐司; official site: "YUJI IWASAKI")', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site: ten years at a hotel Chinese restaurant, then opened VELROSIER in Ashiya-Kurakuen in 2014 and moved it to Kawaramachi, Kyoto in 2019. An October 2026 review adds that it earned a second Michelin star in 2023, the first Chinese restaurant in Kansai to do so; the Tabelog shop text calls it "Kansai\'s first Chinese restaurant with two Michelin stars". Tabelog Chinese WEST "Tabelog 100" 2021, 2023, 2024, 2026.',
      philosophy: '"Add on": building new tastes by combining ingredients, judging their compatibility, components and textures; traditional Chinese cooking seen from a Japanese perspective (Tabelog shop text).', specialty: 'Foie gras monaka; deconstructed gyoza; almond tofu.',
      anecdotes: [
        { text: '"The entrance of the restaurant resembles a jail cell, perhaps suggesting that once you enter, you won\'t want to leave!" — July 2026.', source: R + 'B531186399/' },
        { text: '"I think my favorite was the foie gras monaka." — August 2026.', source: R + 'B534328823/' },
        { text: '"With baked meringue, chocolate powder, and various textures, this is the most delicious almond tofu I have ever had." — October 2026.', source: R + 'B537764015/' },
      ],
      japanese_sources_summary: '公式サイト (vel-rosier.com): 岩崎祐司 (YUJI IWASAKI)、10年間ホテルの中華料理店で研鑽した後、2014年に芦屋・苦楽園で VELROSIER を開業、2019年に京都河原町に移転、昼12:00〜15:00 (13:00までに入店)、夜18:00〜22:00 (19:00までに入店)、定休日は毎週水曜日、Dejeuner 11,000円・20,000円、Diner 22,000円 (税込、サービス料10%)、紹興酒・ワイン・中国茶。TableCheck: フカヒレ付きの昼30,000円・夜32,000円、アレルギーは予約時に全員分を明記、当日の変更不可、ヴィーガン・ベジタリアン・ペスカタリアン・グルテンフリー向けのメニューは提供していない、子どもは大人と同条件で、当日キャンセルは全額。食べログ: 中華・イノベーティブ、GOOD NATURE STATION 2F、16席、車椅子可、中国料理 WEST 百名店 2021・2023・2024・2026。口コミ (2026年5〜10月、英語): ミシュラン二つ星、フォアグラの monaka、「add on」、量が多い。',
      confidence: 'medium', sources: [SITE, COURSE, TC, TB, R + 'B471643856/', R + 'B527382707/', R + 'B527505068/', R + 'B530702695/', R + 'B531186399/', R + 'B534328823/', R + 'B536027902/', R + 'B537045316/', R + 'B537764015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking on TableCheck and an English page on the official site; dishes are explained as they arrive (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2丁目稲荷町318-6 GOOD NATURE STATION 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and TableCheck booking page; Tabelog lists November–December 2026 closing days; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002447, 135.768759); cross-checked: GSI 京都府京都市下京区稲荷町318番地 (lot) 36m; same building as kyoto_takayama_kawaramachi (23 m) — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [COURSE, TC],
    price_note: 'Official course page and TableCheck (read November 2026); tax included, plus 10% service.', last_checked: TODAY, items: [
      it('Dejeuner 11,000', '', 'Lunch omakase', '¥11,000', 'Course', 'no', 'no', 'Official site; +10% service.', 'lunch_11000'),
      it('Dejeuner 20,000', '', 'Lunch omakase', '¥20,000', 'Course', 'no', 'no', 'Official site; +10% service.', 'lunch_20000'),
      it('Diner 22,000', '', 'Dinner omakase', '¥22,000', 'Course', 'no', 'no', 'Official site; +10% service.', 'dinner_22000'),
      it('', '', 'Lunch with shark fin', '¥30,000', 'Course', 'no', 'no', 'TableCheck; +10% service.', 'lunch_shark_fin'),
      it('', '', 'Dinner with shark fin', '¥32,000', 'Course', 'no', 'no', 'TableCheck; +10% service.', 'dinner_shark_fin'),
    ] }, {
    cuisine: '素材を組み合わせて新しい味を生む「add on」のイノベーティブな中華のおまかせ (食べログの店舗紹介、2026年の口コミ)・昼11,000円・20,000円、夜22,000円、フカヒレ付きは30,000円・32,000円、税込、別途サービス料10% (公式サイト、TableCheck)・紹興酒、日本酒、シャンパン、ワインのペアリング (2026年5月・7月、スモールは9,000円)・名物: hozuki のジャムを添えたフォアグラの monaka、ニラの chawanmushi にニラの雪をかけた餃子の再構築、焼いた鰹と広東風チャーシュー、スープの xiao long bao、杏仁豆腐 (2026年の口コミ)・2026年秋: Matsutake のスープの xiao long bao、マグロとキャビアの春巻き、Shanghai crab と国産小麦7種の平打ち麺、豚ロースと蓮根餅と花巻',
    neighborhood: '河原町、四条のすぐ南の GOOD NATURE STATION の2階。京都河原町駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。予約ページにグルテンフリー向けのメニューは提供していないとあり、餃子や春巻きの皮、国産小麦7種の自家製麺も出る (TableCheck、2026年の口コミ)。アレルギーは予約時に申告、当日の変更は不可 (TableCheck)。',
    vegan_detail: 'ヴィーガンではありません。予約ページにヴィーガン、ベジタリアン、ペスカタリアン向けのメニューは提供していないとある (TableCheck)。',
    notes: '[中華・河原町、牢屋のような扉の奥の二つ星の創作中華] 河原町の複合施設の、格子の入った牢屋のような入口を抜けると、暗くシャープな空間にオープンキッチン。オーナーシェフの岩崎祐司さんはホテルの中華で10年、2014年に芦屋で開業し2019年にここへ移転。2026年10月の口コミによれば2023年からミシュラン二つ星。「add on」の発想で味を重ねる: hozuki のジャムのフォアグラの monaka、ニラの chawanmushi にニラの雪をかけた餃子、焼いた鰹と合わせたチャーシュー、一番おいしいという声の多い杏仁豆腐。量は多め。昼11,000円から、別途10%。予約は TableCheck で。ベジタリアンやグルテンフリーのメニューはない。',
  });
}

// ================================================================ 焼鳥 京都橘
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036590/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyototachibana.com'; const COURSE = 'https://www.kyototachibana.com/course.html';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_yakitori_kyoto_tachibana', name: '焼鳥 京都橘 (Yakitori Kyoto Tachibana)', category: 'MOM_AND_POP',
    lat: 35.01206, lng: 135.766019, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: skewers are salt-grilled, but the course ends with chicken-broth ramen and includes a kombu-cured chicken nigiri (official site; 2026 reviews). The site has no allergy note and asks guests to phone ahead.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase from sashimi to skewers and ramen.',
    hours_raw: 'From October 2026, two dinner seatings daily (closing time not given; stored to 22:30 as on Tabelog\'s earlier weekend second seating): 18:00 (full course) and 20:30 (shorter course, irregular, booked gradually; grilled by someone other than head chef Sakata); closed irregularly, posted on Instagram (Tabelog; official site). Reservation only, on TableCheck or by phone 075-741-6666; same-day seats by phone 11:00–15:00 (official site). Cancellation fees from 10 days before (30%, then 50% and 100%); no proxy bookings; no strong perfume; children if they can eat the adult course (official site). 10 counter seats; private hire for 8–10 (official site; Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); service charge 10% (Tabelog). Basement of バインオークAiina, 3 min from Kyoto Shiyakusho-mae Stn (official site). Opened November 2021 (official site).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori near Kyoto City Hall, in a basement — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Yakitori omakase of Takasaka chicken (高坂鶏), a premium bird the official site says can be eaten raw: starter, sashimi, nine skewers, five small dishes, a palate cleanser, rice and dessert, ¥16,500 tax included (official site), plus 10% service (Tabelog) · dishes named on the site: chicken-broth chawanmushi, house pickles, kombu-cured breast nigiri, white-liver pâté, seasonal clay-pot rice, chicken-broth ramen · October 2026: white liver sashimi with sesame oil, sashimi of thigh, breast and gizzard, breast with kinome, negima, tsukune with Grana Padano, wings, tail, chicken soboro rice and ramen · liver and heart as extras (August 2026) · wine (mostly crisp whites) and seasonal sake',
    website: SITE, gmaps: gm('焼鳥 京都橘'), menu_url: COURSE,
    notes: "[Yakitori · Kyoto City Hall, Takasaka chicken by a former kaiseki cook] A spotless ten-seat basement counter where owner 坂田知紀, who trained in sushi and kaiseki before falling for Takasaka chicken, grills one long omakase: raw white liver as creamy as cheese, chicken sashimi, nine skewers with crisp skin and moist meat, a kombu-cured breast nigiri and a finish of chicken ramen. A smokeless grill keeps your clothes clean. Diners call the chef warm; one was seen off at the door. Two seatings, 18:00 and a shorter 20:30. ¥16,500 plus 10% service; book on TableCheck.",
    chef_bio: { chef_name: '坂田知紀 (official site: "店主 坂田 知紀"; reviews give the surname as Sakata; no romaji for the given name)', roles: ['Owner-chef, at the grill (official site; October 2026 review: "Grill Master: Sakata")'], origin: null,
      background: 'Per the official site: trained for years in sushi and kaiseki restaurants before turning to yakitori after falling for Takasaka chicken; opened in Nakagyo-ku in November 2021; Tabelog Yakitori WEST "Tabelog 100" 2023–2025; Michelin Guide Kyoto Osaka 2025 selected restaurant. A September 2026 diner reports the grill is smokeless so guests can wear nice clothes.',
      philosophy: null, specialty: 'Takasaka chicken skewers; white liver; chicken ramen.',
      anecdotes: [
        { text: '"On the way out, the owner kindly saw us off, making for a heartwarming experience." — August 2026.', source: R + 'B534045141/' },
        { text: '"They use a smoke-free grill because they want women to feel comfortable wearing nice clothes." — September 2026.', source: R + 'B535163215/' },
        { text: '"The first surprise was the white liver sashimi. It was incredibly creamy!" — October 2026.', source: R + 'B537597113/' },
      ],
      japanese_sources_summary: '公式サイト (kyototachibana.com): 焼鳥 京都橘 (やきとり きょうとたちばな)、店主 坂田知紀、鮨や懐石の店で修業を重ね、高坂鶏に惚れ込み焼鳥へ、2021年11月に中京区で開業、焼き鳥 WEST 百名店 2023〜2025、ミシュランガイド京都・大阪2025 セレクテッドレストラン、京都高坂鶏おまかせフルコース16,500円 (税込): 先付け、お造り、串9本、一品5品、お口直し、〆のご飯もの、デザート、鶏出汁の茶碗蒸し、ささみの昆布締め握り、白肝レバーパテ、季節の土鍋ご飯、鶏出汁ラーメン、完全予約制、TableCheck と電話、当日は11:00〜15:00に電話、キャンセルは11日前まで、代理予約不可、強い香水は控えて、押小路通御幸町西入橘町612 バインオークAiina B1F。食べログ: 焼鳥、10月から毎日18:00と20:30 (ショートコース、坂田以外が焼く)、不定休は Instagram、10席、サービス料10%。口コミ (2026年8〜10月、英語): 白肝の刺身、ぱりっとした皮、煙の出ない焼き台、見送る大将。',
      confidence: 'medium', sources: [SITE, COURSE, TB, R + 'B528698120/', R + 'B534045141/', R + 'B534138209/', R + 'B535163215/', R + 'B536208454/', R + 'B536574950/', R + 'B537560264/', R + 'B537597113/', R + 'B537895138/', R + 'B538494695/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the counter; book on TableCheck; mention allergies by phone beforehand.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通御幸町西入橘町612 バインオークAiina B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog with October 2026 seating times; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012060, 135.766019); cross-checked: GSI 京都府京都市中京区橘町612番地 (lot) 5m; Vegginy is 12 m away — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [COURSE, TB],
    price_note: 'Official course page (tax included; read November 2026); 10% service per Tabelog.', last_checked: TODAY, items: [
      it('京都高坂鶏おまかせフルコース', '', 'Kyoto Takasaka chicken omakase full course', '¥16,500', 'Course', 'ask', 'no', 'Official site; +10% service (Tabelog).', 'omakase'),
      it('お造り盛り合わせ', '', 'Chicken sashimi assortment (request when booking)', '', 'Extras', 'ask', 'no', 'Official site.', 'sashimi'),
    ] }, {
    cuisine: '生でも食べられるという高坂鶏の焼鳥のおまかせ: 先付け、お造り、串9本、一品5品、お口直し、〆のご飯もの、デザートで16,500円 (税込、公式サイト)、別途サービス料10% (食べログ)・公式サイトにある料理: 鶏出汁の茶碗蒸し、自家製ピクルス、ささみの昆布締め握り、白肝レバーパテ、季節の土鍋ご飯、鶏出汁ラーメン・2026年10月: ごま油の白肝の刺身、もも・むね・砂肝の刺身、kinome のむね、negima、Grana Padano のつくね、手羽、ぼんじり、soboro のご飯とラーメン・レバーやハツは追加で (2026年8月)・ワイン (主にすっきりした白) と季節の日本酒',
    neighborhood: '京都市役所近くの押小路通、地下の店。京都市役所前駅から徒歩3分',
    gf_detail: '予約時に要確認。串は塩焼きだが、コースの締めは鶏出汁ラーメンで、ささみの昆布締め握りも出る (公式サイト、2026年の口コミ)。サイトにアレルギーの記載はなく、事前の電話を勧めている。',
    vegan_detail: 'ヴィーガンではありません。刺身から串、ラーメンまで鶏のおまかせ。',
    notes: '[焼鳥・京都市役所近く、懐石出身の大将の高坂鶏] 清潔な地下の10席のカウンター。鮨や懐石で修業し、高坂鶏に惚れ込んだ店主の坂田知紀さんが長いおまかせを焼く: チーズのようにクリーミーな白肝の刺身、鶏の刺身、皮はぱりっと身はしっとりの串9本、ささみの昆布締め握り、締めに鶏のラーメン。煙の出ない焼き台で服ににおいが付かない。大将は温かく、店の外まで見送ってくれたという声も。18時と、短めの20時半の2部制。16,500円に10%のサービス料、予約は TableCheck で。',
  });
}

// ================================================================ 実伶
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027469/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_mirei', name: '実伶 (Mirei)', category: 'MOM_AND_POP',
    lat: 35.016151, lng: 135.758464, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dishes are ordered one by one from about 50, so sashimi, grilled fish or a dobin-mushi can be chosen; fried dishes and handmade soba are also on the menu (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kyoto kappo built on dashi and fish; vegetable dishes such as dashi-simmered ones use dashi (2026 reviews).',
    hours_raw: '17:00–22:00 (last order 21:30), two seatings: 17:00–19:00 and 19:30 to closing; closed Wednesday and about one other day a month (Tabelog). Reservation only, by phone 075-251-2007 (Tabelog); a September 2026 diner found bookings relatively easy. Counter only, 9 seats; no lunch, no private room (Tabelog). Guests 20 and over at the counter; no very casual clothes (Tabelog). Charge ¥4,000 before tax, including the appetiser (Tabelog). Same-day cancellation fee ¥10,000 (à la carte) or ¥20,000 (course); a no-show after 20 minutes is cancelled (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 3 min from Marutamachi Stn (Tabelog). Opened 8 May 2016 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori by Karasuma-Marutamachi, in a townhouse — 3 min from Marutamachi Stn',
    cuisine: 'Kyoto kappo ordered à la carte from about 50 dishes a day, in the portions you want; courses on request (Tabelog shop text; 2026 reviews) · charge ¥4,000 including the appetiser (Tabelog) · seasonal: white sweet sea bream from Yawatahama and Wakayama, Matsutake in autumn, Matsuba crab in winter (Tabelog shop text) · June 2026: hamo, guji, young Lake Biwa ayu, Kuwana clams, Kamo eggplant with kinome miso, fried horse mackerel and rock oysters, hamo rice, soba to finish · autumn 2026: Matsutake dobin-mushi with white sweet sea bream, new-season sanma, handmade soba, ayu kara-age, fried oysters, beef cutlet, grilled anago · sake and a short wine list · diners spend about ¥15,000–29,999',
    website: null, gmaps: gm('実伶 京都'), menu_url: null,
    notes: "[Kappo · Marutamachi, kaiseki-grade cooking à la carte] A nine-seat counter in a quiet townhouse where you build your own meal from some fifty dishes on an artfully written menu — a little sashimi, a dobin-mushi of Matsutake and sweet sea bream in autumn, a fried horse mackerel, handmade soba to finish — in half portions if you like. Chef Yuuzou Nakao cooks with a small team; diners call the chef young, unpretentious and easy to talk to. Book by phone for one of two seatings (17:00 or 19:30); a ¥4,000 charge covers the opening dishes, and most spend ¥20,000–30,000. Adults only.",
    chef_bio: { chef_name: 'Yuuzou Nakao (Tabelog shop page; no kanji in a source)', roles: ['Head chef (Tabelog shop page; January 2026 review: "The head chef is quite young")'], origin: null,
      background: 'Per the shop-maintained Tabelog page: about 50 à la carte dishes a day, because the chef believes customers can enjoy dishes that match the day\'s mood in the portions they want, and it is easy to order sashimi or a grilled dish late with a drink; classical and modern Kyoto cooking; a room inspired by the simplicity of Millet\'s paintings. Opened 8 May 2016; lunch and private-room service ended; Tabelog Award 2022 Bronze; Japanese cuisine WEST "Tabelog 100" 2021 (Tabelog).',
      philosophy: 'Let guests choose dishes for the day\'s mood, in the amount they want (Tabelog shop page).', specialty: 'À la carte Kyoto kappo; fried sweet sea bream; handmade soba.',
      anecdotes: [
        { text: '"The head chef is quite young and, in a good way, lacks the typical “head chef” demeanor, making him easy to talk to." — January 2026.', source: R + 'B520701179/' },
        { text: '"Orders at each table are varied, but the appetizers are served first, so it’s best to arrive on time for your reservation." — June 2026, a tenth visit.', source: R + 'B472114767/' },
        { text: '"The chef\'s unpretentious service adds to the comfortable atmosphere." — September 2026.', source: R + 'B520701179/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 実伶、日本料理、中京区竹屋町通室町東入亀屋町143-2、丸太町駅から徒歩約3分、17:00〜22:00 (L.O.21:30)、2部制 (17:00〜19:00、19:30〜)、水曜と月1回ほど休み、予約のみ、カウンター9席のみ、昼の予約と個室は終了、チャージ (先付込み) 4,000円税別、当日キャンセルは一品料理10,000円・コース20,000円、20分連絡がなければキャンセル扱い、カウンターは20歳以上、ラフすぎる服装は不可、2016年5月8日オープン、The Tabelog Award 2022 Bronze、日本料理 WEST 百名店 2021、毎日約50品の一品料理、料理長 Yuuzou Nakao。口コミ (2026年1〜10月、英語): 好きなものを好きなだけ、Matsutake の dobin-mushi、手打ちの soba、若く気さくな料理長、2部制。',
      confidence: 'medium', sources: [TB, R + 'B465377518/', R + 'B472114767/', R + 'B513716782/', R + 'B520701179/', R + 'B533427140/', R + 'B534638375/', R + 'B535760522/', R + 'B536055897/', R + 'B537736516/', R + 'B538262809/'] },
    cultural_comfort: { level: 'japanese', note: 'A menu of about 50 dishes ordered one by one; booking by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通室町東入亀屋町143-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016151, 135.758464); cross-checked: GSI 京都府京都市中京区亀屋町143番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B513716782/'],
    price_note: 'Charge from Tabelog; dish prices are not published; an April 2026 à la carte dinner came to about ¥20,000.', last_checked: TODAY, items: [
      it('チャージ (先付込み)', '', 'Charge including the appetiser, per person', '¥4,000 + tax', 'Charge', '', '', 'Tabelog.', 'charge'),
      it('', '', 'Matsutake dobin-mushi with white sweet sea bream (autumn)', '', 'À la carte', 'ask', 'no', 'September 2026.', 'dobin_mushi'),
      it('', '', 'Handmade soba to finish', '', 'À la carte', 'no', 'no', 'September 2026.', 'soba'),
    ] }, {
    cuisine: '一日約50品から好きなものを好きな量だけ一品で頼む京都の割烹、コースも相談可 (食べログの店舗紹介、2026年の口コミ)・チャージ4,000円 (先付込み、食べログ)・旬: Yawatahama や Wakayama の白甘鯛、秋の Matsutake、冬の Matsuba crab (食べログの店舗紹介)・2026年6月: hamo、guji、Lake Biwa の稚鮎、Kuwana の蛤、kinome 味噌の Kamo の茄子、鯵フライ、岩牡蠣フライ、hamo のご飯、締めの soba・2026年秋: 白甘鯛と Matsutake の dobin-mushi、新物の sanma、手打ちの soba、鮎の kara-age、牡蠣フライ、ビフカツ、焼いた anago・日本酒と少しのワイン・予算は約15,000〜29,999円',
    neighborhood: '烏丸丸太町の竹屋町通、町家の店。丸太町駅から徒歩3分',
    gf_detail: '要確認。約50品から一品ずつ選ぶので、お造り、焼き魚、dobin-mushi などを選べる。揚げ物や手打ちの soba もある (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁と魚が中心の京都の割烹で、野菜の料理も出汁を使う (2026年の口コミ)。',
    notes: '[割烹・丸太町、懐石の腕を一品で] 静かな町家の9席のカウンター。美しく書かれた品書きの約50品から自分で組み立てる: 少しのお造り、秋は Matsutake と白甘鯛の dobin-mushi、鯵フライ、締めに手打ちの soba と、半量でも頼める。料理長の Yuuzou Nakao さんがチームと腕をふるい、若く気取らず話しやすいという声。予約は電話で、17時か19時半の2部制。先付込みのチャージ4,000円、多くは20,000〜30,000円ほど。20歳以上のみ。',
  });
}

save();
