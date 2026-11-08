// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 72.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + するがや祇園下里 Surugaya Gion Shimosato (sweets and hiyashi-ame maker founded 1818 as a branch of 総本家駿河屋; family of 下里 —
//     retail food shop drafted under Greg's 2026-11-07 ruling: particularly historic and family-run)
//   - Café Haleine — big-chain hotel (Hotel Vista Premio, Vista Hotel group) (Greg 2026-11-08)
//   + 焼肉ほるもん大五郎 Yakiniku Horumon Daigoro (late-night yakiniku and horumon on Kiritoshi in Gion, to 3 am)
//   + 焼肉処 竜宝 Yakiniku-dokoro Ryuho (basement yakiniku on Kiyamachi near Sanjo, open 20:00–08:00)
//   - マノワール28 manoir28 — invitation-only wine bar, not open to the public
//   None of the three is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; no offsets needed. 竜宝: GSI resolves 大黒町71 to a different 大黒町 514 m away, so the pin is
//   marked approximate. Each pin is 10 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041545', 'Café Haleine: large parent: Vista Hotel group hotel — on the ground floor of Hotel Vista Premio Kyoto Kawaramachi-dori (Tabelog), a national hotel chain (Greg 2026-11-08 big-chain hotel ruling)');
skip('26032533', 'マノワール28 manoir28: an invitation-only wine bar (Tabelog remarks) — not open to the public; not drafted');

// ================================================================ するがや祇園下里
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017425/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gionshimosato.com/';
  const ABOUT = SITE + 'pages/about';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_surugaya_gion_shimosato', name: 'するがや祇園下里 (Surugaya Gion Shimosato)', category: 'OMNI',
    lat: 35.00516384787393, lng: 135.77393486035416, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ginger hiyashi-ame and ame-yu drinks, candies and bean brittle; monaka have wafer shells. Ingredients per product are not published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ginger-syrup drinks, candies and soybean brittle may be plant-based, but ingredients are not published; the ice cream is not vegan (official site; reviews).',
    hours_raw: 'Takeaway shop: 11:00–18:00, closed Wednesday; closed on some festival days, posted on Instagram (Tabelog; July 2026). Hiyashi-ame and ame-yu can be sampled or drunk in the shop with tea (2024–2026 reviews). Cards and e-money accepted (Tabelog). Popular sweets such as Otsutsu sell out — reserving ahead is advised (March 2024; January 2025). In a registered cultural property, the 下里家住宅, built in 1895 as an ochaya, on Sueyoshi-cho in Gion (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Sueyoshi-cho — near Gion-Shijo Stn',
    cuisine: 'Gion sweets maker founded 1818, a branch of 総本家駿河屋 (official site) · hiyashi-ame (chilled ginger syrup drink) ¥400 in the shop (March 2024); concentrate to take home from ¥350 (official site); hiyashi-ame soda, gin or whisky soda, matcha hiyashi-ame (2024–2025) · 祇園豆平糖 soybean brittle, created by the third generation; 大つゝ large ginger candies loved by maiko and geiko (official site; 2025) · monaka filled to order (January 2025); hiyashi-ame ice cream in summer (February 2026)',
    website: SITE, gmaps: gm('するがや祇園下里'), menu_url: SITE,
    notes: "[Sweets · Gion Sueyoshi-cho, a 1818 candy house] A family sweets shop founded in 1818 as a branch of the great Surugaya, in an 1895 former teahouse that is a registered cultural property. Try the gently gingery hiyashi-ame (about ¥400) in the shop, then take home soybean brittle or the big Otsutsu candies beloved of maiko. Takeaway; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['下里 family business'], origin: null,
      background: 'The official site says the shop was founded in 1818 (Bunsei 1) as a branch of 総本家駿河屋, first selling neri-yokan taught by the head house; the third generation created 祇園豆平糖, inspired by candy sold at Yasaka Shrine, and the family crest dates at least to the fourth generation, 孝太郎. A March 2024 reviewer says the business had paused and its building was for sale, until the owner’s daughter bought it back and reopened.',
      philosophy: 'Simple sweets need true technique; to carry Gion’s charm and Kyoto scenery into the future together with the historic building (official site).',
      specialty: 'Hiyashi-ame; 祇園豆平糖; 大つゝ.',
      anecdotes: [
        { text: 'A March 2024 visitor on the way to Kabuki at Minami-za found the sweets sold out and had a cold hiyashi-ame instead.', source: R + 'B482009795/' },
        { text: 'An August 2024 guest learned that ginger cools the body when cold and warms it when hot, over a hiyashi-ame gin soda.', source: R + 'B490138787/' },
        { text: 'A January 2025 visitor watched the monaka being filled with red bean paste on the spot.', source: R + 'B499214847/' },
      ],
      japanese_sources_summary: '公式サイト: するがや祇園下里、文政元年 (1818年) に総本家駿河屋の別家として創業、本家から伝授された煉羊羹を主に商い、3代目が八坂神社境内の「かんかん飴」から「祇園豆平糖」を考案、飴菓子を販売、4代目孝太郎の代からの紋、花街・祇園の末吉町、生姜など上質な素材、舞妓・芸妓や芸事の方々に愛される、京都市登録有形文化財「下里家住宅」(明治28年 (1895) にお茶屋として建築)、商品: ひやしあめ・あめ湯、大つゝ、祇園豆平糖、アイスクリーム、ひやしあめ濃縮350円から、歌舞伎座の顔見世で販売。食べログ: 和菓子、京都市東山区末吉町80、月火木〜日 11:00〜18:00、水曜定休、カード・電子マネー可。口コミ (2024〜2026年、英語): 一時休業し建物が売りに出されたが店主の娘が買い戻して再開、ひやしあめ400円、ひやしあめのジンソーダやウイスキー、抹茶ひやしあめ、あめ湯、もなかはその場であんを詰める、大つゝは売り切れが多く予約がおすすめ、試飲できる、祇園祭の時期は休みも。',
      confidence: 'medium', sources: [SITE, ABOUT, TB, R + 'B482009795/', R + 'B487414474/', R + 'B490138787/', R + 'B494067736/', R + 'B499214847/', R + 'B501913759/', R + 'B506498655/', R + 'B519011369/', R + 'B523139254/', R + 'B531457024/', R + 'B534236588/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway; tastings offered; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町80',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news to November 2026) and Tabelog listing; reviews dated through August 2026. Drafted under Greg’s 2026-11-07 retail-food ruling: founded 1818, run by the 下里 family through the generations.' },
    pin_source: `Tabelog ${TB} (35.005164, 135.773935); cross-checked: GSI 京都府京都市東山区末吉町80番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B482009795/'],
    price_note: 'In-shop drink price from a March 2024 review; concentrate price from the official site (November 2026).', last_checked: TODAY, items: [
      it('ひやしあめ', '', 'Hiyashi-ame (chilled ginger syrup drink), in the shop', '¥400', 'Drinks', 'ask', 'ask', 'March 2024.', 'hiyashiame'),
      it('ひやしあめ濃縮', '', 'Hiyashi-ame concentrate to take home', '¥350', 'Takeaway', 'ask', 'ask', 'From ¥350.', 'concentrate'),
      it('祇園豆平糖', '', 'Gion mame-heito (soybean brittle)', '', 'Takeaway', 'ask', 'ask', '', 'mameheito'),
      it('大つゝ', '', 'Otsutsu (large ginger candy)', '', 'Takeaway', 'ask', 'ask', 'Often sells out; reserve.', 'otsutsu'),
    ] }, {
    cuisine: '1818年創業、総本家駿河屋の別家の祇園の菓子司 (公式サイト)・ひやしあめ (冷たい生姜の飲み物) は店内で400円 (2024年3月)、持ち帰りの濃縮は350円から (公式サイト)、ひやしあめのソーダ、ジンやウイスキーのソーダ割り、抹茶ひやしあめ (2024〜2025年)・3代目が考案した祇園豆平糖、舞妓や芸妓に愛される大きな生姜飴「大つゝ」 (公式サイト、2025年)・その場であんを詰めるもなか (2025年1月)、夏はひやしあめアイス (2026年2月)',
    neighborhood: '祇園、末吉町。祇園四条駅の近く',
    gf_detail: '要確認。生姜のひやしあめとあめ湯、飴、豆平糖。もなかの皮もある。商品ごとの原材料は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。生姜の飲み物、飴、豆平糖は植物性の可能性があるが原材料は非公開。アイスクリームはヴィーガン不可 (公式サイト、口コミ)。',
    notes: '[菓子・祇園末吉町、1818年からの飴の店] 1818年に総本家駿河屋の別家として創業した家族の菓子司。登録有形文化財の明治28年のお茶屋の建物。やさしい生姜のひやしあめ (400円ほど) を店で味わい、豆平糖や舞妓さんに愛される大つゝを持ち帰りに。持ち帰りが中心、水曜休み。',
  });
}

// ================================================================ 焼肉ほるもん大五郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024703/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '03:00']), SU = day(['18:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_horumon_daigoro', name: '焼肉ほるもん大五郎 (Yakiniku Horumon Daigoro)', category: 'OMNI',
    lat: 35.00424336787463, lng: 135.77429608034458, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku, horumon and raw-meat dishes with sauces and salt; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and horumon restaurant (Tabelog).',
    hours_raw: '18:00–03:00 (last order 02:00) Monday–Saturday; 18:00–23:00 (last order 22:00) Sunday and holidays (Tabelog). Reservations taken; a monthly wine-pairing evening in the private room, booked by phone or Instagram (Tabelog menu). Cards accepted; no e-money (Tabelog). 30 seats with a private room; designated smoking area (Tabelog). On Kiritoshi in Gion, north of Shijo (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Kiritoshi north of Shijo — near Gion-Shijo Stn',
    cuisine: 'Gion yakiniku and horumon open to 3 am (Tabelog; reviews) · kuroge wagyu horumon from ¥880 — small intestine, red tripe, heart, sweetbreads; heart sashimi ¥980; tsukami yukhoe ¥1,280; premium mino ¥1,180 (Tabelog menu, December 2024) · salted tongue ¥1,980, thick-cut premium tongue ¥3,480, outside skirt ¥1,680 (Tabelog menu) · meat sushi, yukhoe, Spencer roll, seared top blade; avocado with nori tsukudani, kimchi (2024–2026) · courses and a monthly six-wine pairing dinner (Tabelog menu; October 2024)',
    website: null, gmaps: gm('焼肉ほるもん大五郎 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Gion Kiritoshi, horumon till 3 am] A small, lively Gion yakiniku house run by chef Daigoro Yamamoto, with fresh kuroge-wagyu horumon from ¥880, raw-meat dishes and thick-cut tongue — and open until 3 am for the after-drinks crowd. A monthly wine-pairing dinner too. Earlier on Sundays.",
    chef_bio: { chef_name: 'Daigoro Yamamoto', roles: ['Chef'], origin: null,
      background: 'The Tabelog menu names chef Daigoro Yamamoto, who chooses the dishes for the monthly wine-pairing evening. A January 2025 reviewer describes the owner as a former professional boxer.',
      philosophy: null,
      specialty: 'Fresh wagyu horumon; thick-cut premium tongue.',
      anecdotes: [
        { text: 'A January 2025 guest came at midnight after talking meat with the owner and got so caught up in conversation that few photos were taken.', source: R + 'B499232400/' },
        { text: 'An October 2024 first-timer had the thick-cut tongue grilled to the right point by the chef.', source: R + 'B500516762/' },
        { text: 'An April 2026 diner wandered in after 2 am and was impressed by the fresh horumon sashimi.', source: R + 'B526595981/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉ほるもん大五郎、焼肉・ホルモン・冷麺、京都市東山区祇園町北側254-9 切通しOKIビル1F、月〜土 18:00〜翌3:00 (L.O.2:00)、日曜・祝日 18:00〜23:00 (L.O.22:00)、予約可、カード可、電子マネー不可、30席、個室あり、分煙。メニュー (2024年12月): 毎月のワインペアリング会 (料理長 (Daigoro Yamamoto) が選ぶ、6種のワイン)、黒毛和牛のホルモン880円から (小腸、赤センマイ、ハツなど)、ハツ刺し980円、ツカミのユッケ1,280円、上ミノ1,180円、塩タン1,980円、極厚上タン3,480円、ハラミ1,680円。口コミ (2024〜2026年、英語): 深夜3時まで、肉寿司、ユッケ、スペンサーロール、ミスジの炙り、アボカドと海苔の佃煮、キムチ、コース、元プロボクサーの店主、新鮮なホルモンの刺身、祇園にしては手頃という声も高めという声も。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B485692401/', R + 'B488689219/', R + 'B499232400/', R + 'B500516762/', R + 'B502600879/', R + 'B503483986/', R + 'B504402135/', R + 'B523336852/', R + 'B526595981/', R + 'B534796897/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側254-9 切通しOKIビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated December 2024); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004243, 135.774296); cross-checked: GSI 京都府京都市東山区祇園町北側254番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated December 2024, tax included).', last_checked: TODAY, items: [
      it('', '', 'Kuroge wagyu small intestine', '¥880', 'Horumon', 'ask', 'no', '', 'kobukuro'),
      it('', '', 'Heart sashimi', '¥980', 'Raw', 'ask', 'no', '', 'hatsu_sashi'),
      it('', '', 'Salted tongue', '¥1,980', 'Meat', 'ask', 'no', '', 'shio_tan'),
      it('', '', 'Thick-cut premium tongue', '¥3,480', 'Meat', 'ask', 'no', '', 'atsugiri_tan'),
      it('', '', 'Outside skirt', '¥1,680', 'Meat', 'ask', 'no', '', 'harami'),
    ] }, {
    cuisine: '深夜3時まで開く祇園の焼肉とホルモン (食べログ、口コミ)・黒毛和牛のホルモン880円から、小腸、赤センマイ、ハツ、ハツ刺し980円、ツカミのユッケ1,280円、上ミノ1,180円 (食べログのメニュー、2024年12月)・塩タン1,980円、極厚上タン3,480円、ハラミ1,680円 (食べログのメニュー)・肉寿司、ユッケ、スペンサーロール、ミスジの炙り、アボカドと海苔の佃煮、キムチ (2024〜2026年)・コースと毎月の6種ワインのペアリングの会 (食べログのメニュー、2024年10月)',
    neighborhood: '祇園、切通しの四条上ル。祇園四条駅の近く',
    gf_detail: '要確認。タレや塩の焼肉、ホルモン、生肉料理。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉とホルモンの店 (食べログ)。',
    notes: '[焼肉・祇園切通し、深夜3時までのホルモン] 料理長が腕をふるう、にぎやかな祇園の小さな焼肉店。新鮮な黒毛和牛のホルモンは880円から、生肉料理、極厚のタン。飲んだあとにも深夜3時まで。毎月のワインペアリングの会も。日曜・祝日は早じまい。',
  });
}

// ================================================================ 焼肉処 竜宝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035797/'; const R = TB + 'dtlrvwlst/';
  const H = day(['20:00', '08:00']);
  put({
    id: 'kyoto_yakiniku_dokoro_ryuho', name: '焼肉処 竜宝 (Yakiniku-dokoro Ryuho)', category: 'OMNI',
    lat: 35.00787611787101, lng: 135.7701755803842, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with salt or sauce, tongue yukhoe, kimchi; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant (Tabelog).',
    hours_raw: '20:00–08:00 daily except Wednesday, including holidays (Tabelog). Busiest after 2 am; quiet from 20:00 to midnight (September 2024; July 2025). Cards, e-money and QR accepted (Tabelog). 22 seats: tatami tables for 4 and 6 and a 2-seat counter; smoking allowed (Tabelog). In the basement of the Kiyamachi BEST BILD building — the lift opens into the restaurant — on Kiyamachi south of Sanjo (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo',
    cuisine: 'All-night yakiniku in a Kiyamachi basement (reviews) · loin and kalbi from ¥1,100, premium ¥1,700, special ¥2,300; bone-in kalbi ¥1,200; salted tongue ¥1,100, special tongue ¥2,200; outside skirt ¥1,500–2,500; tsukami and red tetchan ¥900 (Tabelog menu, 2022; same premium and skirt prices in January 2024 reviews) · beef-tongue yukhoe, raw-meat dishes, kimchi (2023–2025)',
    website: null, gmaps: gm('焼肉処 竜宝 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Kiyamachi near Sanjo, from 8 pm to 8 am] A hidden basement yakiniku on Kiyamachi that runs all night — quiet in the evening, busy after 2 am. Generous loin, kalbi and skirt from about ¥1,100 a plate, salted tongue and tongue yukhoe, on tatami tables. Smoking allowed; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2022–2025) describe a yakiniku restaurant in the basement of a Kiyamachi building of clubs and bars, open from 8 pm until 8 am, with fun staff and good-value meat.',
      philosophy: null,
      specialty: 'Late-night yakiniku.',
      anecdotes: [
        { text: 'A July 2025 visitor at 11 pm found one table taken and was told it fills after midnight.', source: R + 'B510028380/' },
        { text: 'A February 2025 horumon craving after a night out ended here with loin and bone-in kalbi.', source: R + 'B501861197/' },
        { text: 'A December 2023 guest singled out the beef-tongue yukhoe.', source: R + 'B476127321/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉処 竜宝、焼肉・ホルモン・韓国料理、京都市中京区木屋町通三条下る大黒町71 木屋町BEST.BILD B1F、月火木〜日・祝日 20:00〜翌8:00、水曜定休、カード・電子マネー・QR可、22席 (座敷4名×2、6名×2、カウンター2)、喫煙可。メニュー (2022年): ロース1,100円・上ロース1,700円・特選ロース2,300円、カルビ同、骨付きカルビ1,200円、塩タン1,100円、ねぎタン1,200円、特選タン2,200円、ハラミ1,500円・上ハラミ1,800円・特上ハラミ2,500円、上ミノ1,400円、ツカミ・赤テッチャン900円。口コミ (2022〜2025年、英語): 朝8時まで、2時過ぎに混む、エレベーターを降りるとすぐ店、牛タンのユッケ、生肉、キムチ、楽しいスタッフ、手頃な値段。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B454955755/', R + 'B476127321/', R + 'B478020904/', R + 'B486278415/', R + 'B492311996/', R + 'B492607375/', R + 'B498394698/', R + 'B500632093/', R + 'B501861197/', R + 'B510028380/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open all night; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通三条下る大黒町71 木屋町BEST.BILD B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.007876, 135.770176); GSI 京都府京都市中京区大黒町71 resolves to a different 大黒町 514m away — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B478020904/'],
    price_note: 'Prices from the Tabelog menu (July 2022, tax included), matched by January 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium loin', '¥1,700', 'Meat', 'ask', 'no', '', 'jo_rosu'),
      it('', '', 'Premium kalbi', '¥1,700', 'Meat', 'ask', 'no', '', 'jo_karubi'),
      it('', '', 'Salted tongue', '¥1,100', 'Meat', 'ask', 'no', '', 'shio_tan'),
      it('', '', 'Premium outside skirt', '¥1,800', 'Meat', 'ask', 'no', '', 'jo_harami'),
      it('', '', 'Bone-in kalbi', '¥1,200', 'Meat', 'ask', 'no', '', 'honetsuki'),
    ] }, {
    cuisine: '木屋町の地下の夜通しの焼肉 (口コミ)・ロースとカルビ1,100円から、上1,700円、特選2,300円、骨付きカルビ1,200円、塩タン1,100円、特選タン2,200円、ハラミ1,500〜2,500円、ツカミと赤テッチャン900円 (食べログのメニュー、2022年。2024年1月の口コミでも上と上ハラミは同じ値段)・牛タンのユッケ、生肉、キムチ (2023〜2025年)',
    neighborhood: '木屋町の三条下ル',
    gf_detail: '要確認。塩やタレの焼肉、牛タンのユッケ、キムチ。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉店 (食べログ)。',
    notes: '[焼肉・木屋町の三条下ル、夜8時から朝8時] 木屋町のビルの地下、夜通し開く隠れ家の焼肉。夜早めは静か、2時過ぎににぎわう。ロース、カルビ、ハラミは1,100円ほどから、塩タンや牛タンのユッケ、座敷のテーブルで。喫煙可、水曜休み。',
  });
}

save();
