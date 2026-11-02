// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 21.
//   + 魚屋スタンドふじ Sakanaya Stand Fuji (cheap fish izakaya in 新なにわ大食堂 at the Midosuji north gate of Shin-Osaka Station)
//   + 大阪焼肉 松屋 新大阪店 Osaka Yakiniku Matsuya (stone-plate harami in Shin-Osaka Station, from the shop that coined "harami")
//   + 魚料理 ふじい Sakana Ryori Fujii (fish restaurant with private rooms; ten-dish lunch sets, sea bream rice)
//   + 大養軒 Daiyou Ken (local Chinese diner in Higashimikuni famous for its omurice)
//   - skipped 27067834 立喰酒場 金獅子 西中島南方店: same-concept branch of a brand already in data
//     (osaka_tachigui_sakaba_kinjishi_shinsaibashi_parco), per the integrator, 2026-11-02.
//   Lane check: every id above is even. Taken in notable-queue order after the skip.
//   Chain check:
//   - 大阪焼肉 松屋 (integrator asked for this check): the operator's brand page (matsuya-gr.com, read 2026-11-02) lists one shop under
//     the 大阪焼肉 松屋 brand, this one in Shin-Osaka Station; Matsuya Co. runs other brands, which are sister concepts, not branches
//     (Greg, 2026-11-02). It is unrelated to the Matsuya gyudon chain skipped in batch 17. Drafted.
//   - Stand Fuji: an October 2026 review says the brand "has several locations around Osaka"; web search (2026-11-02) finds the
//     Tennoji main shop (Stand Fuji 本店, with a sister Bistro Stand Fuji) and 魚屋スタンドふじ子 at LUCUA Osaka (similar name, link not
//     confirmed). Three same-concept shops at most = small group, kept; none is in data. Flagged in the report.
//   - 魚料理 ふじい: no other shop named. No source links it to osaka_sushi_kappou_fujii_nishinakajima (same name, same district,
//     different concept); kept separate and noted.
//   - Daiyou Ken: no other shop named.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Pins: Stand Fuji's Tabelog point sits by the subway north gate, 189 m from GSI's point for 西中島5-15-5, so it is loc_approx 'single'.
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27067834', 'same-concept branch of a brand already in data: Tachigui Sakaba Kinjishi (osaka_tachigui_sakaba_kinjishi_shinsaibashi_parco); integrator ruling 2026-11-02');

// ================================================================ 魚屋スタンドふじ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27091130/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '23:00']);
  put({
    id: 'osaka_sakanaya_stand_fuji_shin_osaka', name: '魚屋スタンドふじ (Sakanaya Stand Fuji)', category: 'OMNI',
    lat: 34.73348, lng: 135.498922, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi comes with soy sauce, and there are fried shrimp, tempura and other fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; the shop makes its dashi from bonito and kombu (Tabelog shop text).',
    hours_raw: 'Daily 11:30–23:00; open all year (Tabelog). No reservations (Tabelog); expect a wait of 10–30 minutes in the evening, less at lunch (September–October 2026). Cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog; September 2026). 50 seats: 34 at a long counter and four tables for four; non-smoking; children welcome (Tabelog). Lunch items sell out by about 13:30 (September 2026). Opened 30 March 2016 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-15-5, inside 新なにわ大食堂, directly by the north ticket gate of the subway Shin-Osaka Stn (use stairs A or B from the Midosuji Line) (Tabelog)',
    cuisine: 'Cheap fish izakaya supplied by a fishmonger: the owner buys fish each morning, and the staff make dashi from bonito and kombu and prepare everything in house (Tabelog shop text) · "rumoured" assorted fish platter ¥980 (September 2026); returning-season katsuo sashimi with chiai (September–October 2026); sashimi platter for two (October 2026) · dashimaki with grated daikon, fried shrimp, salt-grilled fish collar, oden, simmered sea bream, Fuji potato salad, black-soybean edamame (2026) · "Sakanaya Don" to finish (September 2026) · lunch: sashimi and grilled mackerel set ¥1,000, rice free up to large, refills ¥100 (September 2026) · cheap sake, e.g. Hakurakusei special junmai (September 2026)',
    website: 'http://shinnaniwadaisyokudo.jp/', gmaps: gm('魚屋スタンドふじ 新大阪'), menu_url: null,
    notes: "[Izakaya · Shin-Osaka Station, cheap, good fish at the subway gate] A long-counter fish izakaya inside the station by the Midosuji north gate, run by a fishmonger who buys each morning, and busy from lunch to 23:00 with people waiting for trains (2026). Start with the ¥980 assorted fish platter or the katsuo sashimi, add a juicy dashimaki and salt-grilled collar, and finish with the Sakanaya Don, with cheap sake throughout (2026). Lunch is a ¥1,000 sashimi and grilled-fish set with free large rice (September 2026). Expect a 10–30 minute wait in the evening; no bookings. Open every day.",
    chef_bio: { chef_name: null, roles: ['Fishmonger owner and kitchen staff (unnamed)'], origin: null, background: 'Tabelog shop text: a fish restaurant supplied directly by a fishery; the fishmonger owner buys fresh fish each morning, and skilled cooks make dashi from bonito and kombu, peel and devein shrimp, and keep to the basics; "stand" refers to standing-bar prices, though everyone sits. Opened 30 March 2016 (Tabelog). An October 2026 diner says the brand has several shops around Osaka; another mentions the Tennoji shop (September 2026).', philosophy: 'Plenty of good fish at standing-bar prices (Tabelog shop text).', specialty: 'Assorted fish platter; Sakanaya Don.',
      anecdotes: [
        { text: '"The freshly made dashi-maki (Japanese omelette) was incredibly fluffy, and when cut, the broth oozed out, making it absolutely delicious." — October 2026.', source: R + 'B537290406/' },
        { text: '"I ordered the sashimi and grilled mackerel set meal for JPY 1,000. While rice is free up to a large size, I opted for a medium size." — September 2026.', source: R + 'B536273412/' },
        { text: '"The dish I highly recommend here is the Sakanaya Don. After enjoying the fish, this is a must-try to wrap up your meal." — September 2026.', source: R + 'B479588895/' },
      ],
      japanese_sources_summary: '食べログ: 魚屋スタンドふじ、海鮮・居酒屋、大阪市淀川区西中島5-15-5 新なにわ大食堂、地下鉄 新大阪駅の北改札直結 (御堂筋線からは A か B の階段で)、毎日11:30〜23:00、無休、予約不可、カード・電子マネー・QR (Alipay、WeChat Pay など) 可、50席 (カウンター34、4人テーブル4)、禁煙、子ども可、2016年3月30日オープン、サイト shinnaniwadaisyokudo.jp。店の紹介: 漁業直送の魚の店、魚屋の店主が毎朝仕入れ、だしは鰹と昆布、エビの殻むきも店で、「スタンド」は立ち飲みの値段の意味で席はある、新幹線の待ち時間に昼から飲める。口コミ (2026年7〜10月): 夜は10〜30分待つことも、昼は回転が早い、うわさの魚の盛り合わせ980円、戻りガツオの刺身と血合い、2人前の刺身盛り、だし巻き、エビフライ、カマの塩焼き、おでん、鯛の煮付け、ふじのポテサラ、黒豆の枝豆、しめの「Sakanaya Don」、ランチの刺身と焼きサバの定食1,000円 (ごはん大盛りまで無料、おかわり100円)、昼は13時半ごろに売り切れも、日本酒が安い (Hakurakusei の特別純米)、大阪にいくつか店がある、天王寺の店という声も。',
      confidence: 'medium', sources: [TB, R + 'B266388599/', R + 'B479588895/', R + 'B531353839/', R + 'B536273412/', R + 'B536469120/', R + 'B536526329/', R + 'B536900690/', R + 'B537290406/', R + 'B537323823/', R + 'B537704647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station izakaya used to travellers; queue at the door; Alipay and WeChat Pay accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市淀川区西中島5-15-5 新なにわ大食堂',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目15番5号 (go) is 189 m away; Tabelog's point sits at the subway north gate, which matches "directly connected to the North Ticket Gate", so the Tabelog point is kept as loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536526329/', R + 'B536273412/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted fish platter', '¥980', 'Sashimi', 'ask', 'no', 'September 2026.', 'sakana_mori'),
      it('', '', 'Lunch: sashimi and grilled mackerel set', '¥1,000', 'Lunch', 'ask', 'no', 'September 2026; free rice up to large.', 'lunch_sashimi_saba'),
      it('', '', 'Dashimaki tamago', '', 'Dishes', 'ask', 'no', 'October 2026.', 'dashimaki'),
      it('', '', 'Sakanaya Don', '', 'Rice', 'ask', 'no', 'September 2026.', 'sakanaya_don'),
    ] }, {
    cuisine: '魚屋が仕入れる安い魚の居酒屋: 店主が毎朝魚を仕入れ、だしは鰹と昆布、下ごしらえはすべて店で (食べログの店の紹介)・「うわさの」魚の盛り合わせ980円 (2026年9月)。戻りガツオの刺身と血合い (2026年9〜10月)。2人前の刺身盛り (2026年10月)・大根おろしをのせただし巻き、エビフライ、カマの塩焼き、おでん、鯛の煮付け、ふじのポテサラ、黒豆の枝豆 (2026年)・しめに「Sakanaya Don」(2026年9月)・ランチ: 刺身と焼きサバの定食1,000円、ごはんは大盛りまで無料、おかわり100円 (2026年9月)・日本酒が安い、たとえば Hakurakusei の特別純米 (2026年9月)',
    neighborhood: '西中島5-15-5、新なにわ大食堂の中。地下鉄 新大阪駅の北改札直結 (御堂筋線からは A か B の階段で) (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。刺身は醤油で、エビフライや天ぷらなどの揚げ物もある。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、だしは鰹と昆布 (食べログの店の紹介)。',
    notes: '[居酒屋・新大阪駅、地下鉄の改札そばの安くておいしい魚] 新大阪駅の御堂筋線の北改札そばにある、長いカウンターの魚の居酒屋。毎朝仕入れる魚屋が営み、昼から23時まで新幹線を待つ人でにぎわう (2026年)。まずは980円の魚の盛り合わせかカツオの刺身、じゅわっとしただし巻きとカマの塩焼きを足して、しめはSakanaya Don。日本酒は安い (2026年)。ランチは刺身と焼き魚の1,000円の定食で、ごはん大盛り無料 (2026年9月)。夜は10〜30分待つことも。予約不可。毎日営業。',
  });
}

// ================================================================ 大阪焼肉 松屋 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27019108/'; const R = TB + 'dtlrvwlst/'; const W = 'https://www.matsuya-gr.com/brand/%E5%A4%A7%E9%98%AA%E7%84%BC%E8%82%89%E6%9D%BE%E5%B1%8B/';
  const D = day(['10:00', '22:00']);
  put({
    id: 'osaka_osaka_yakiniku_matsuya_shin_osaka', name: '大阪焼肉 松屋 新大阪店 (Osaka Yakiniku Matsuya Shin-Osaka Ten)', category: 'OMNI',
    lat: 34.733489, lng: 135.499775, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the meat is served in a thick, sweet marinade sauce (2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant.',
    hours_raw: 'Daily 10:00–22:00 (last order 21:30), following Alde Shin-Osaka; lunch menu 10:00–17:00 (Tabelog; shop site). No reservations (Tabelog). Cards, e-money and QR accepted (Tabelog). 36 seats on Tabelog, 32 on the shop site, counter and tables; non-smoking; wheelchair accessible; children welcome (Tabelog; shop site). No grills at the table: the meat arrives sizzling on a stone or iron plate (2026). Takeout yakiniku bento (shop site). Opened 10 January 2020 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, Alde Shin-Osaka on the 2nd floor of JR Shin-Osaka Station, a short stair down from the Shinkansen gates (Tabelog; October 2026)',
    cuisine: 'Station yakiniku served on a hot stone plate rather than grilled at the table (shop site; 2026) · reviewers say the shop coined the cut name "harami" (October 2026) · original harami, thick and tender, in a sweet, light sauce with onions, carrots, okra and corn underneath; doubanjiang on the side (2026) · lunch: original harami lunch, 140 g, ¥1,628 (October 2026); harami and Shin-Osaka horumon lunch ¥1,280 plus tax (September 2026); "Man\'s" lunch with 1.5 times the meat (2026); free rice refills (2026) · à la carte by weight: horumon 150 g, salted tongue 80 g with grated daikon (October 2026); harami 180 g (October 2026) · yakiniku bento to take on the train (shop site)',
    website: W, gmaps: gm('大阪焼肉 松屋 新大阪店'), menu_url: null,
    notes: "[Yakiniku · Shin-Osaka Station, sizzling harami before the Shinkansen] A compact yakiniku counter in Alde Shin-Osaka, one floor below the Shinkansen gates, where the meat comes to you sizzling on a stone plate instead of a grill (2026). Reviewers say this is the house that coined the name \"harami\": the thick, tender original harami in a sweet, light sauce, with free rice refills at lunch, is the order (2026). Lunch runs ¥1,280–1,628 until 17:00; the bento travels well (2026; shop site). Open 10:00 to 22:00 every day.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop site (Matsuya Co.): the brand\'s only shop, inside Shin-Osaka Station, sending Matsuya\'s Osaka yakiniku to visitors from all over Japan; the stone plate makes the meat especially fragrant and tender. Opened 10 January 2020 (Tabelog). Reviewers: "This is the birthplace of the Outside Skirt, and the name was coined by this establishment" (October 2026).', philosophy: 'Stone-plate cooking for fragrance and tenderness (shop site).', specialty: 'Original harami.',
      anecdotes: [
        { text: '"This place is said to be the first to sell the thin part of the cow\'s diaphragm known as \'Harami.\'" — October 2026, original harami and Shin-Osaka horumon.', source: R + 'B538167715/' },
        { text: '"The signature dish, \'Original Outside Skirt,\' is thickly sliced and juicy!" — September 2026, harami and horumon lunch for JPY 1,280 plus tax.', source: R + 'B536174536/' },
        { text: '"The outside skirt was thick, tender, and juicy, and the marinade was well-balanced without being overly sweet." — October 2026, harami 180 g.', source: R + 'B538036634/' },
      ],
      japanese_sources_summary: '食べログ: 大阪焼肉 松屋 新大阪店、焼肉・ホルモン、大阪市淀川区西中島5-16-1 JR東海新大阪駅 2F アルデ新大阪、新大阪駅のすぐそば、毎日10:00〜22:00 (L.O. 21:30)、ランチは10:00〜17:00、予約不可、カード・電子マネー・QR 可、36席、禁煙、車いす可、子ども可、テイクアウト、2020年1月10日オープン。店のサイト (松屋グループ): 大阪焼肉 松屋の店は新大阪駅のこの1軒、石盤で焼くので香ばしくやわらかい、焼肉弁当も、32席。口コミ (2026年9〜10月): テーブルに網はなく、石盤や鉄板でじゅうじゅうのまま出てくる、「ハラミ」という名前を広めた店という声、Original Harami は厚切りでやわらかく、甘くて軽いタレ、下に玉ねぎ、にんじん、オクラ、コーン、豆板醤も、Original Harami のランチ140g 1,628円、ハラミと Shin-Osaka Horumon のランチ1,280円 (税別)、肉1.5倍の「Man\'s」ランチ、ごはんおかわり無料、ホルモン150g、塩タン80g と大根おろし、ハラミ180g。',
      confidence: 'medium', sources: [TB, W, R + 'B490389994/', R + 'B536174536/', R + 'B536294430/', R + 'B536527084/', R + 'B536760289/', R + 'B537874547/', R + 'B537969466/', R + 'B538036634/', R + 'B538167715/', R + 'B538443208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station restaurant used to travellers; meat comes cooked on a hot plate. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 2F アルデ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 89m — GSI places the whole Shin-Osaka Station block; Tabelog's point is inside the station, about 35 m from osaka_ryukishin_leo_shin_osaka (also 2F Alde) and above osaka_messe_kuma_shin_osaka (1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538443208/', R + 'B536174536/', R + 'B490389994/'],
    price_note: 'Lunch prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original harami lunch, 140 g', '¥1,628', 'Lunch', 'no', 'no', 'October 2026.', 'harami_lunch'),
      it('', '', 'Harami and Shin-Osaka horumon lunch', '¥1,280 + tax', 'Lunch', 'no', 'no', 'September 2026.', 'harami_horumon_lunch'),
      it('', '', 'Horumon, 150 g', '', 'À la carte', 'no', 'no', 'October 2026.', 'horumon'),
      it('', '', 'Salted tongue, 80 g', '', 'À la carte', 'ask', 'no', 'October 2026.', 'shio_tan'),
    ] }, {
    cuisine: 'テーブルで焼かず、熱い石盤で出す駅の焼肉 (店のサイト。2026年)・「ハラミ」という名前を広めた店という口コミ (2026年10月)・Original Harami: 厚切りでやわらかく、甘くて軽いタレ、下に玉ねぎ、にんじん、オクラ、コーン。豆板醤も添えて (2026年)・ランチ: Original Harami のランチ140g 1,628円 (2026年10月)。ハラミと Shin-Osaka Horumon のランチ1,280円 (税別) (2026年9月)。肉1.5倍の「Man\'s」ランチ (2026年)。ごはんおかわり無料 (2026年)・グラムで注文: ホルモン150g、塩タン80g と大根おろし (2026年10月)。ハラミ180g (2026年10月)・新幹線で食べる焼肉弁当 (店のサイト)',
    neighborhood: '西中島5-16-1、JR 新大阪駅2階のアルデ新大阪。新幹線の改札から階段を少し下りたところ (食べログ。2026年10月)',
    gf_detail: 'グルテンフリーではありません。肉は甘くて濃いタレで出てくる (2026年)。',
    vegan_detail: 'ヴィーガンではありません。焼肉の店。',
    notes: '[焼肉・新大阪駅、新幹線の前にじゅうじゅうのハラミ] 新幹線の改札の1階下、アルデ新大阪の小さな焼肉の店で、網で焼かずに、熱い石盤でじゅうじゅうのまま出てくる (2026年)。「ハラミ」の名前を広めた店だといわれ、頼むなら厚切りでやわらかい Original Harami を甘くて軽いタレで。ランチはごはんおかわり無料 (2026年)。ランチは17時まで1,280〜1,628円。弁当は持ち帰りにも (2026年。店のサイト)。毎日10時から22時。',
  });
}

// ================================================================ 魚料理 ふじい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27117256/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_sakana_ryori_fujii_nishinakajima', name: '魚料理 ふじい (Sakana Ryori Fujii)', category: 'OMNI',
    lat: 34.727551, lng: 135.49961, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, grilled fish and sea bream rice, but also tempura, kara-age and chicken nanban.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30); irregular closing days (Tabelog). Reservations accepted; change or cancel online by 14:00 the day before, same-day course cancellations charged 100%; courses booked by 23:00 two days ahead (Tabelog). Cards accepted; no e-money or QR (Tabelog). 65 seats: counter, tatami and sunken seating, a private room for 5–10; smoking allowed, including at the table (Tabelog; August 2026). Takeout (Tabelog). Opened 15 April 2020 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-22-2 — 3 min from Nishinakajima-Minamigata Stn, 4 min from Hankyu Minamikata Stn (Tabelog); look for the large white lantern (October 2026)',
    cuisine: 'Fish and Japanese dishes (2026) · lunch: "Fujii Gozen" with about ten small dishes, sashimi, kara-age, grilled salmon, mozuku, mentaiko, tamagoyaki, simmered dishes (August–October 2026); salted salmon set, large rice free (September 2026); meat options too (September 2026) · dinner courses, e.g. "Take": sashimi, grilled fish, clam and fresh wakame shabu-shabu, tempura and sea bream rice cooked in a clay pot, often enough to take home (October 2026); hassun served in individual portions (October 2026) · à la carte: sashimi, grilled shirako, grilled squid tentacles, chicken nanban, grilled mackerel (2026) · sake (Tabelog) · dinner about ¥6,000–10,000 a head (2026)',
    website: null, gmaps: gm('魚料理 ふじい 西中島'), menu_url: null,
    notes: "[Fish · Nishinakajima, ten-dish lunch sets and clay-pot sea bream rice] A large fish restaurant behind a big white lantern near Nishinakajima-Minamigata, with counter, tatami rooms and a private room that suits business dinners (October 2026). Lunch is the Fujii Gozen, about ten small dishes from sashimi to kara-age, like a ryokan breakfast (2026). At night take a course: sashimi, grilled fish, clam shabu-shabu, tempura and a clay-pot sea bream rice big enough to take home (October 2026). About ¥6,000–10,000 a head at night. Smoking is allowed at the table.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 15 April 2020 (Tabelog). Reviewers: a calm Japanese room used for business dinners, with attentive service (October 2026). No source links it to the nearby 寿司割烹 ふじい (osaka_sushi_kappou_fujii_nishinakajima).', philosophy: null, specialty: 'Fujii Gozen; sea bream rice.',
      anecdotes: [
        { text: '"The highlight of the meal for me was the Tai Meshi (Sea Bream Rice)." — August 2026, a business dinner for four.', source: R + 'B483542900/' },
        { text: '"I had the Fujii Gozen set with ten different side dishes." — August 2026.', source: R + 'B534320359/' },
        { text: '"The sea bream rice was also made in a clay pot, served hot, and the portion was generous, making it great that I could take some home." — October 2026.', source: R + 'B537828501/' },
      ],
      japanese_sources_summary: '食べログ: 魚料理 ふじい、海鮮・寿司・居酒屋、大阪市淀川区西中島3-22-2、西中島南方駅から徒歩3分、阪急 南方駅から徒歩4分、毎日11:30〜15:00 (L.O. 14:30)、17:00〜23:00 (L.O. 22:30)、不定休、予約可、変更やキャンセルは前日14時までネットで、当日のコースのキャンセルは100%、コースは2日前の23時までに予約、カード可、電子マネー・QR 不可、65席 (カウンター、座敷、掘りごたつ)、5〜10人の個室、喫煙可、テイクアウト、2020年4月15日オープン。口コミ (2025年10月〜2026年10月): 大きな白い提灯、ランチの「Fujii Gozen」は小鉢約10品 (刺身、から揚げ、焼き鮭、もずく、明太子、卵焼き、煮物)、塩鮭の定食 (ごはん大盛り無料)、肉のメニューも、夜は「Take」のコース (刺身、焼き魚、ハマグリと生わかめのしゃぶしゃぶ、天ぷら、土鍋の鯛めし、持ち帰りも)、八寸は一人ずつ、焼き白子、イカゲソ焼き、チキン南蛮、焼きサバ、日本酒、夜はひとり約6,000〜10,000円、個室は接待向き、テーブルでたばこが吸える。',
      confidence: 'medium', sources: [TB, R + 'B483542900/', R + 'B516755119/', R + 'B534320359/', R + 'B534538911/', R + 'B535534064/', R + 'B536623978/', R + 'B536626820/', R + 'B537285696/', R + 'B537564748/', R + 'B537828501/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses two days ahead; private room for groups; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-22-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目22番2号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534320359/', R + 'B536626820/'],
    price_note: 'No dish prices in the reviews; lunch ¥1,000–1,999, dinner about ¥6,000–10,000 a head (Tabelog; 2026).', last_checked: TODAY, items: [
      it('', '', 'Fujii Gozen (lunch set with about ten small dishes)', '', 'Lunch', 'ask', 'no', 'August–October 2026.', 'fujii_gozen'),
      it('', '', 'Salted salmon set', '', 'Lunch', 'ask', 'no', 'September 2026.', 'shiozake_teishoku'),
      it('', '', 'Sea bream rice in a clay pot', '', 'Rice', 'ask', 'no', 'August and October 2026.', 'taimeshi'),
      it('', '', 'Grilled shirako', '', 'À la carte', 'ask', 'no', 'January and September 2026.', 'yaki_shirako'),
    ] }, {
    cuisine: '魚料理と和食 (2026年)・ランチ: 刺身、から揚げ、焼き鮭、もずく、明太子、卵焼き、煮物など小鉢約10品の「Fujii Gozen」(2026年8〜10月)。塩鮭の定食、ごはん大盛り無料 (2026年9月)。肉のメニューも (2026年9月)・夜のコース、たとえば「Take」: 刺身、焼き魚、ハマグリと生わかめのしゃぶしゃぶ、天ぷら、土鍋の鯛めし。鯛めしは持ち帰れるほどの量 (2026年10月)。八寸は一人ずつ盛って (2026年10月)・一品: 刺身、焼き白子、イカゲソ焼き、チキン南蛮、焼きサバ (2026年)・日本酒 (食べログ)・夜はひとり約6,000〜10,000円 (2026年)',
    neighborhood: '西中島3-22-2。西中島南方駅から徒歩3分、阪急 南方駅から徒歩4分 (食べログ)。大きな白い提灯が目印 (2026年10月)',
    gf_detail: '要確認。グルテンの情報なし。刺身、焼き魚、鯛めしのほか、天ぷら、から揚げ、チキン南蛮もある。',
    vegan_detail: 'ヴィーガンではありません。魚料理の店。',
    notes: '[魚料理・西中島、小鉢10品のランチと土鍋の鯛めし] 西中島南方駅の近く、大きな白い提灯の奥の大きな魚料理の店で、カウンター、座敷、個室があり接待にも向く (2026年10月)。ランチは「Fujii Gozen」で、刺身からから揚げまで小鉢約10品、旅館の朝ごはんのよう (2026年)。夜はコースで、刺身、焼き魚、ハマグリのしゃぶしゃぶ、天ぷら、持ち帰れるほどの土鍋の鯛めし (2026年10月)。夜はひとり約6,000〜10,000円。テーブルでたばこが吸える。',
  });
}

// ================================================================ 大養軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27006812/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['16:00', '23:00']);
  put({
    id: 'osaka_daiyouken_higashimikuni', name: '大養軒 (Daiyou Ken)', category: 'OMNI',
    lat: 34.74058, lng: 135.495617, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, gyoza, kara-age and wok dishes with soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice with chicken rice and pork, chicken-broth ramen, gyoza.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–15:00 (last order 14:30) and 16:00–23:00 (last order 22:30); closed Wednesday; hours may change (Tabelog). No reservations; cash only (Tabelog). 22 seats: 5 at the counter and four tables for four; non-smoking; children welcome; takeout (Tabelog). A short line at weekday noon (2026). One September 2026 diner found the room tired and the restroom a Japanese-style squat toilet, hard for anyone with limited mobility.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '東三国4-12-3 — about 7 min from Higashi-Mikuni Stn (Tabelog); paid parking next door (Tabelog)',
    cuisine: 'Local Japanese-Chinese diner (2026) · omurice, the dish most tables order: wok-fried ketchup chicken rice with pork in a thin omelette, with egg soup ¥780, large +¥180 (October 2026); large ¥960 (September 2026) · omurice with half ramen (light, salty chicken broth) ¥1,120 (October 2026) · gyoza, eight to a plate (October 2026); large meatballs in sweet-and-sour sauce (October 2026); kara-age set; stir-fried liver with garlic chives (October 2026) · also cold noodles, champon, katsudon, miso ramen, yakiniku bento (2026) · sets come with a salad of kaiware, macaroni salad with raisins, three pickles and soup (October 2026) · draft beer, gyoza and omurice for ¥1,800 (October 2026)',
    website: null, gmaps: gm('大養軒 東三国'), menu_url: null,
    notes: "[Chinese · Higashimikuni, the local diner everyone visits for omurice] A busy, old-style Japanese-Chinese diner near Higashi-Mikuni Station, where nearly every table orders the omurice: ketchup chicken rice fried in a wok and wrapped in a thin omelette, ¥780 with egg soup, or ¥1,120 with a half ramen (October 2026). Add gyoza or the big sweet-and-sour meatballs, and a beer; regulars praise the little extras, from raisin macaroni salad to three pickles (October 2026). Expect a short line at noon. Cash only; closed Wednesday; open to 23:00.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: a long-standing local Japanese-Chinese diner (October 2026); a busy room of solo diners, families and local regulars (September 2026); prices up since 2023 (October 2026).', philosophy: null, specialty: 'Omurice.',
      anecdotes: [
        { text: '"However, the Omurice is quite popular, with nearly half the customers ordering it." — October 2026, omurice and half ramen for JPY 1,120.', source: R + 'B468889548/' },
        { text: '"This classic Omurice features fragrant chicken rice stir-fried in a Chinese wok, wrapped in a perfectly cooked thin omelet." — October 2026.', source: R + 'B537009458/' },
        { text: '"I love the little touches like the salad with kaiware (daikon sprouts), macaroni salad with raisins (surprising!), and purple onions." — October 2026, kara-age set.', source: R + 'B533635329/' },
      ],
      japanese_sources_summary: '食べログ: 大養軒、中華料理・オムライス・餃子、大阪市淀川区東三国4-12-3、東三国駅から徒歩約7分、月・火・木〜日11:30〜15:00 (L.O. 14:30)、16:00〜23:00 (L.O. 22:30)、水曜休み、予約不可、現金のみ、22席 (カウンター5、4人テーブル4)、禁煙、子ども可、テイクアウト、となりにコインパーキング。口コミ (2026年4〜10月): 町の中華、半分くらいの客がオムライス、中華鍋で炒めたケチャップのチキンライスに豚肉、薄焼き卵、卵スープつき780円、大盛り180円、大盛り960円、オムライスと半ラーメン (あっさり塩気のある鶏ガラ) 1,120円、餃子は8個、大きな肉団子の甘酢あん、から揚げ定食、レバニラ炒め、冷麺、ちゃんぽん、カツ丼、味噌ラーメン、焼肉弁当、かいわれのサラダ、レーズン入りのマカロニサラダ、漬物3種、スープ、生ビールと餃子とオムライスで1,800円、昼は少し並ぶ、店とトイレが古く和式という声。',
      confidence: 'medium', sources: [TB, R + 'B468889548/', R + 'B499579816/', R + 'B499669633/', R + 'B533635329/', R + 'B535568730/', R + 'B536281912/', R + 'B536394951/', R + 'B537009458/', R + 'B537568086/', R + 'B537998874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Plastic food samples in the window (October 2026); cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-12-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目12番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499579816/', R + 'B468889548/', R + 'B537568086/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omurice with egg soup', '¥780', 'Omurice', 'no', 'no', 'October 2026; large +¥180.', 'omurice'),
      it('', '', 'Omurice and half ramen', '¥1,120', 'Sets', 'no', 'no', 'October 2026.', 'omurice_half_ramen'),
      it('', '', 'Gyoza (8 pieces)', '', 'Dishes', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Meatballs in sweet-and-sour sauce', '', 'Dishes', 'no', 'no', 'October 2026.', 'nikudango'),
    ] }, {
    cuisine: '町の中華 (2026年)・ほとんどのテーブルが頼むオムライス: 中華鍋で炒めたケチャップのチキンライスに豚肉、薄焼き卵で包んで、卵スープつき780円、大盛り180円 (2026年10月)。大盛り960円 (2026年9月)・オムライスと半ラーメン (あっさり塩気のある鶏ガラ) 1,120円 (2026年10月)・餃子は1皿8個 (2026年10月)。大きな肉団子の甘酢あん (2026年10月)。から揚げ定食。レバニラ炒め (2026年10月)・冷麺、ちゃんぽん、カツ丼、味噌ラーメン、焼肉弁当も (2026年)・定食にはかいわれのサラダ、レーズン入りのマカロニサラダ、漬物3種、スープ (2026年10月)・生ビールと餃子とオムライスで1,800円 (2026年10月)',
    neighborhood: '東三国4-12-3。東三国駅から徒歩約7分 (食べログ)。となりにコインパーキング (食べログ)',
    gf_detail: 'グルテンフリーではありません。ラーメン、餃子、から揚げ、醤油味の炒め物。',
    vegan_detail: 'ヴィーガンではありません。チキンライスと豚肉のオムライス、鶏ガラのラーメン、餃子。',
    notes: '[中華・東三国、みんながオムライスを食べに来る町の中華] 東三国駅の近くの、昔ながらのにぎやかな町の中華で、ほとんどのテーブルがオムライスを頼む: 中華鍋で炒めたケチャップのチキンライスを薄焼き卵で包み、卵スープつきで780円、半ラーメンをつけて1,120円 (2026年10月)。餃子や大きな肉団子の甘酢あんとビールも。レーズン入りのマカロニサラダや漬物3種などのちょっとしたおまけが常連に人気 (2026年10月)。昼は少し並ぶ。現金のみ。水曜休み。夜11時まで。',
  });
}

save();
