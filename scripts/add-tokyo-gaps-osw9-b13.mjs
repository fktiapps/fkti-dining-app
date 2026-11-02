// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 13.
//   + 虎峰 Koho (small-plates Cantonese and Sichuan counter, 20-dish signature course; reopened at Roppongi 3-14-16 in May 2026)
//   + バンコク Bangkok (Thai restaurant of 35+ years; ¥1,100 lunch sets with soup, salad and dessert)
//   + 味満ん Ajiman (fugu since 1981, Tabelog Award Silver 2026; referral-only — listed per Greg's ruling of 2026-11-02)
//   + プロヴィジョン Provision (members-only "subscription restaurant", French-based; monthly fee covers food and drink)
//   Chain check: none is in data/tokyo, osaka or kyoto by name, Tabelog id or address (the two "Bangkok" records in data are
//   バンコクスパイス 新宿店 and バンコク ピーナッツ食堂, different shops). Koho moved in May 2026; its old listing is not in data.
//   Pins: Bangkok (2F) and Ajiman (1F) share ＷＯＯビル (3-8-8) with Tabelog points 1 m apart, so Bangkok is offset ~8 m
//   south-east, away from Sushi Kappou 3 (3-8-7) and Miyake Akira (3-8-12). Tabelog URLs copied from each listing.txt line 1.
//   No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 虎峰
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13321646/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.koho-roppongi.com';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_koho_roppongi', name: '虎峰 (Koho)', category: 'OMNI',
    lat: 35.662699, lng: 139.734563, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a set course with dumplings, shumai, xiaolongbao, kadaif-wrapped shrimp and Hong Kong noodles (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of duck, chicken, seafood, ham and shark fin.',
    hours_raw: 'Daily: lunch 12:00–14:00 (food last order 12:00), dinner 18:00–22:00 (food last order 20:00) (Tabelog). Phone before 15:00. Courses only, booked ahead. 10% service charge, included in course prices. 14 seats, counter only; private hire up to 20. Non-smoking. No children. Please do not wear perfume. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others). Dishes use alcohol — say so when booking if you cannot have it; no changes after arrival. Reopened here 28 May 2026 (Tabelog) after moving within Roppongi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-14-16, ペンタビル 1F, in a back alley off Enma-zaka — 5 min from Roppongi Stn exit 5 (Oedo line), 8 min from exit 3 (Hibiya line)',
    cuisine: 'Small-plate Chinese courses rooted in Cantonese cooking with Sichuan flavours, Japanese seasonal ingredients and Western touches (Tabelog shop text; 2026 reviews) · courses (Tabelog, incl. 10% service): chef\'s omakase lunch with a celebratory drink ¥9,800; Premium Course with Ise lobster ¥25,800; Christmas course with Shanghai crab ¥33,000 (24–27 December) · Signature Course, 20 dishes, ¥15,800; dinner from ¥12,000; free-flow drinks ¥8,200 (October 2026) · signature dishes in 2026: figs with Jinhua ham and burrata; Peking duck with apple instead of cucumber; eel with aged Shaoxing wine; three dim sum (shrimp and black truffle, wild boar shumai with Italian herbs, porcini xiaolongbao); Shinshu chicken wings stuffed with foie gras or a cashew filling in a pot of chillies; matsutake superior broth; truffle shrimp mayonnaise in kadaif; Omi duck with black vinegar and Shine Muscat; Kesennuma shark-fin clay-pot rice in golden broth; shiso-myoga fried rice; Hong Kong noodles with yuzu pepper; Keemun tea pudding · wine, tea and alcohol pairings',
    website: SITE, gmaps: gm('虎峰 六本木3-14-16'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Roppongi, a 20-small-plate Cantonese–Sichuan counter] A dark, stage-like 14-seat counter in a back alley off Enma-zaka, which moved here in May 2026. Koho serves Chinese food as a long run of small plates — 20 dishes in the ¥15,800 Signature Course — mixing Cantonese technique, Sichuan heat and Japanese seasonal produce: Peking duck wrapped with apple instead of cucumber, a steamer of three dim sum, chicken wings stuffed with foie gras and buried in chillies, Omi duck with black vinegar and Shine Muscat, and a shark-fin clay-pot rice to finish. Diners in 2026 praised the variety and the value for the level; one reviewer says the shop opened in 2016 and pioneered this small-plate style. Lunch omakase ¥9,800; no children, no perfume.",
    chef_bio: { chef_name: 'Yuki Kaneko (executive chef, as written in the Tabelog shop text)', roles: ['Executive chef (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text, executive chef Yuki Kaneko graduated from the Osaka Abeno Tsuji Culinary Institute, learned Chinese cooking at Heichinrou, then at the one-star SENSE at the Mandarin Oriental Tokyo, and was head chef at Series in Azabudai, which gained a Michelin star eight months after opening and kept it five years in a row. An October 2026 reviewer was welcomed by "Chef Kato Kazuaki, who took over after the move". Another October 2026 reviewer says Koho opened in 2016, is a regular Tabelog Award winner and moved in May 2026. The name joins "tiger" (a talent) and "peak" (Tabelog shop text).',
      philosophy: 'Nurture talent and aim for the highest peak; Cantonese delights with the excitement of Sichuan, one plate at a time (Tabelog shop text).', specialty: 'Small-plate Cantonese–Sichuan course; Peking duck with apple.',
      anecdotes: [
        { text: '"The Peking duck was delicious, paired with apples instead of the usual cucumber, showcasing a refreshing twist." — October 2026, Signature Course ¥15,800.', source: R + 'B537670604/' },
        { text: '"It’s very hot, but if you can handle it, definitely try it fresh out of the fryer!" — October 2026, chicken wing with foie gras.', source: R + 'B538018619/' },
        { text: '"The dishes were served in small portions, allowing for a delightful experience, and each dish was original and incredibly delicious." — October 2026, first visit since the move.', source: R + 'B538126780/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 虎峰、港区六本木3-14-16 ペンタビル1F、大江戸線六本木駅5番出口から徒歩5分、日比谷線3番出口から8分、毎日12:00〜14:00、18:00〜22:00、サービス料10%、14席 (カウンターのみ)、貸切20名まで、禁煙、子ども不可、香水は控える、カード・電子マネー・QR可、2026年5月28日オープン。店の紹介: 広東料理の技に四川の刺激、世界のエッセンス、総料理長 Yuki Kaneko (Tsuji の学校、Heichinrou、SENSE、Series)、ワインとお茶のペアリング。コース: 昼のおまかせ9,800円、Premium Course 25,800円、クリスマス33,000円。口コミ(2026年9月〜10月): シグネチャーコース20品15,800円、北京ダックはりんごで、点心3種、手羽先のフォアグラ詰め、鴨の黒酢、ふかひれの土鍋ご飯、移転後の料理長は Kato Kazuaki という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536221555/', R + 'B536296211/', R + 'B537670604/', R + 'B537741428/', R + 'B538018619/', R + 'B538074708/', R + 'B538115572/', R + 'B538126780/', R + 'B538179261/', R + 'B538200713/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at the counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-14-16 ペンタビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing at the new address (opened 28 May 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662699, 139.734563); GSI 東京都港区六本木三丁目14番 (lot) 29m; nearest records Izakadokoro Tamura (33 m) and Misomebore (39 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537670604/', R + 'B538115572/'],
    price_note: 'Course prices from Tabelog (tax and 10% service included) and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s omakase lunch course with one celebratory drink', '¥9,800', 'Course', 'no', 'no', 'Tabelog.', 'lunch_omakase'),
      it('', '', 'Signature Course, 20 dishes (shark-fin clay-pot rice)', '¥15,800', 'Course', 'no', 'no', 'October 2026 reviews.', 'signature'),
      it('', '', 'Premium Course with Ise lobster', '¥25,800', 'Course', 'no', 'no', 'Tabelog.', 'premium'),
      it('', '', 'Free-flow drinks', '¥8,200', 'Drinks', '', '', 'October 2026 review.', 'free_flow'),
    ] }, {
    cuisine: '広東料理を土台に四川の辛さ、日本の季節の食材、西洋の要素を加えた小皿の中国料理のコース (食べログの店の紹介、2026年の口コミ)・コース (食べログ、サービス料10%込み): 乾杯の1ドリンク付きの昼のおまかせ9,800円、Ise の伊勢海老の Premium Course 25,800円、上海蟹のクリスマスコース33,000円 (12月24〜27日)・20品のシグネチャーコース15,800円、夜は12,000円から、フリーフロー8,200円 (2026年10月)・2026年の料理: 無花果と Jinhua ハムとブッラータ、きゅうりの代わりにりんごの北京ダック、熟成紹興酒の鰻、点心3種 (海老と黒トリュフ、イタリアンハーブの猪の焼売、ポルチーニの小籠包)、唐辛子の鍋に入ったフォアグラかカシューナッツ詰めの Shinshu の手羽先、松茸の上湯、カダイフで包んだトリュフの海老マヨ、黒酢とシャインマスカットの Omi の鴨、Kesennuma のふかひれの土鍋ご飯、大葉と茗荷のチャーハン、柚子胡椒の香港麺、キームン紅茶のプリン・ワインやお茶のペアリング',
    neighborhood: '六本木3-14-16 ペンタビル1F、Enma-zaka から入った路地。六本木駅5番出口 (大江戸線) から徒歩5分、3番出口 (日比谷線) から8分',
    gf_detail: 'グルテンフリー不可。コースに餃子、焼売、小籠包、カダイフの海老、香港麺 (2026年10月)。',
    vegan_detail: 'ヴィーガン不可。鴨、鶏、魚介、ハム、ふかひれのコース。',
    notes: '[中国料理・六本木、20皿の小皿で味わう広東と四川のカウンター] Enma-zaka から入った路地、舞台のような厨房を囲む薄暗い14席のカウンターで、2026年5月にここへ移転。20品のシグネチャーコース (15,800円) で、広東の技、四川の辛さ、日本の旬を小皿で次々に出す。きゅうりの代わりにりんごで巻く北京ダック、蒸籠の点心3種、唐辛子に埋もれたフォアグラ詰めの手羽先、黒酢とシャインマスカットの Omi の鴨、締めのふかひれの土鍋ご飯。2026年の客は品数の多さとこの水準での値頃感を称え、2016年の開店で小皿スタイルの先駆けだと書く客も。昼のおまかせ9,800円。子ども不可、香水は控えて。',
  });
}

// ================================================================ バンコク
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001348/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_bangkok_roppongi', name: 'バンコク (Bangkok)', category: 'OMNI',
    lat: 35.663263, lng: 139.734787, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many dishes are rice or rice noodles, but Pad See Ew is seasoned with soy sauce (October 2026) and nothing is called gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the lunch dishes are chicken, pork or shrimp and no vegan dishes are described.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last order 14:00) and 17:00–23:00 (last order 22:00); closed Sundays (Tabelog). Lunch is cash only (two July 2026 reviews); Tabelog lists cards (VISA, Master, JCB, AMEX, Diners, UnionPay), no e-money or QR. Busy at lunch, with a queue at times (July 2026). 28 seats at tables; private hire for 20–50. Non-smoking. Children and strollers welcome. Takeout. Staff from overseas who speak good Japanese (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-8-8, 六本木ＷＯＯビル 2F, in a back alley — 2 min from Roppongi Stn exit 5',
    cuisine: 'Thai food of more than 35 years, with flavours the shop says were preserved by chefs of the Thai Embassy (Tabelog shop text) · lunch ¥1,100 (large ¥1,200) with soup, small salad and dessert: green curry, Gapao rice with a fried egg, Thai-style fried noodles with shrimp, Tom Yum fried rice, pork bifun ramen, shrimp Tom Yum noodles; half-and-half Gapao and green curry ¥1,100; a mini green curry or Gapao +¥200 (July and October 2026); Pad See Ew · dinner: fresh spring rolls, soft-shell crab curry (Pad Poo Pah), beef salad, Tom Yum Goong, Yum Woon Sen, Khao Niew (July–August 2026); a spicy spring-rain-noodle salad and steamed chicken rice (Tabelog shop text) · courses: Light Course of six favourites ¥3,000; Luxurious Bangkok Course of nine dishes; Northeastern Thai Course for spice lovers (Tabelog shop text) · wine and cocktails',
    website: null, gmaps: gm('バンコク 六本木3-8-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Thai · Roppongi, a 35-year-old Thai restaurant with ¥1,100 lunch sets] On the second floor of a building in a Roppongi back alley, a calm, homely 28-seat room that has served Thai food for more than 35 years. Lunch is the draw: ¥1,100 for green curry, Gapao rice with a fried egg, Tom Yum noodles or the half-and-half of Gapao and green curry, each with soup, salad and dessert — and a mini curry for ¥200 more. Diners in 2026 call it authentic, properly spicy and excellent value; one found the green curry a little salty. In the evening there is soft-shell crab curry, Tom Yum Goong and courses from ¥3,000. Lunch is cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text describes more than 35 years of authentic flavours preserved by chefs of the Thai Embassy, with lighter dishes too. July 2026 diners describe staff from overseas who speak good Japanese and are attentive. No one is named in the sources read.',
      philosophy: 'Authentic, colourful Thai food in a homely space, with lighter dishes for those who avoid heavy ethnic food (Tabelog shop text).', specialty: 'Half-and-half Gapao and green curry lunch.',
      anecdotes: [
        { text: '"The Gapao had a solid spiciness, with the aroma of basil and a zesty flavor that made the rice irresistible." — July 2026, half-and-half lunch.', source: R + 'B531539609/' },
        { text: '"A great perk is that for an additional JPY 200, you can add a mini Green Curry or mini Gapao Rice." — July 2026.', source: R + 'B532227717/' },
        { text: '"The green curry was a bit salty, but it was fine for summer." — July 2026.', source: R + 'B531520945/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): バンコク、港区六本木3-8-8 六本木ＷＯＯビル2F、六本木駅5番出口から徒歩2分、月〜土11:30〜14:30 (L.O.14:00)、17:00〜23:00 (L.O.22:00)、日休み、28席 (テーブル)、貸切20〜50名、禁煙、カード可、子ども・ベビーカー可、テイクアウト、ベジタリアンメニューあり。店の紹介: 35年以上続く、タイ大使館のシェフが守ってきた本場の味、Light Course 6品3,000円などのコース。口コミ(2026年6月〜10月): 昼は1,100円 (大盛り1,200円) でスープ、サラダ、デザート付き、Gapao とグリーンカレーのハーフ&ハーフ、ミニカレー+200円、昼は現金のみ、Pad See Ew、夜はソフトシェルクラブのカレー、Tom Yum Goong、海外出身で日本語の上手なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B410035202/', R + 'B529795822/', R + 'B530981970/', R + 'B531520945/', R + 'B531539609/', R + 'B531758977/', R + 'B532049048/', R + 'B532227717/', R + 'B533159112/', R + 'B537499095/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff from overseas who speak good Japanese (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-8-8 六本木ＷＯＯビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663313, 139.734727), 1 m from Ajiman (tokyo_ajiman_roppongi, same building, 1F), so offset ~8 m south-east, away from Sushi Kappou 3 (now 25 m) and Miyake Akira (27 m); GSI 東京都港区六本木三丁目8番 (lot) 44m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532227717/', R + 'B537499095/', TB],
    price_note: 'Lunch prices from July and October 2026 reviews; course price from the Tabelog shop text.', last_checked: TODAY, items: [
      it('', '', 'Lunch: half-and-half Gapao rice and green curry, with soup, salad, dessert', '¥1,100', 'Lunch', 'ask', 'no', 'July and October 2026 reviews.', 'half_half'),
      it('', '', 'Lunch: green curry, Tom Yum noodles or fried noodles, regular / large', '¥1,100 / ¥1,200', 'Lunch', 'ask', 'no', 'July 2026 review.', 'lunch_main'),
      it('', '', 'Add a mini green curry or mini Gapao rice', '¥200', 'Lunch', 'ask', 'no', 'July 2026 review.', 'mini_add'),
      it('', '', 'Light Course, six popular dishes', '¥3,000', 'Course', 'ask', 'no', 'Tabelog shop text.', 'light_course'),
    ] }, {
    cuisine: '35年以上、タイ大使館のシェフが守ってきたという本場のタイ料理 (食べログの店の紹介)・昼は1,100円 (大盛り1,200円) でスープ、小さなサラダ、デザート付き: グリーンカレー、目玉焼きの Gapao ライス、海老のタイ風焼きそば、Tom Yum の炒飯、豚肉のビーフンのラーメン、海老の Tom Yum 麺。Gapao とグリーンカレーのハーフ&ハーフ1,100円、ミニグリーンカレーかミニ Gapao は+200円 (2026年7月・10月)。Pad See Ew・夜: 生春巻き、ソフトシェルクラブのカレー (Pad Poo Pah)、牛肉のサラダ、Tom Yum Goong、Yum Woon Sen、Khao Niew (2026年7〜8月)。辛い春雨のサラダ、蒸し鶏のご飯 (食べログの店の紹介)・コース: 人気の6品の Light Course 3,000円、9品の豪華なコース、辛いものが好きな人向けのタイ東北部のコース (食べログの店の紹介)・ワインとカクテル',
    neighborhood: '六本木3-8-8 六本木ＷＯＯビル2F、路地裏。六本木駅5番出口から徒歩2分',
    gf_detail: '要確認。米や米の麺の料理が多いが、Pad See Ew は醤油で味付け (2026年10月)。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、昼の料理は鶏、豚、海老で、ヴィーガンの料理の記載はない。',
    notes: '[タイ料理・六本木、1,100円の昼のセットで35年のタイ料理] 六本木の路地裏、ビルの2階の落ち着いた28席の店で、35年以上タイ料理を出している。目当ては昼で、グリーンカレー、目玉焼きの Gapao ライス、Tom Yum の麺、Gapao とグリーンカレーのハーフ&ハーフがどれもスープ、サラダ、デザート付きで1,100円、ミニカレーは+200円。2026年の客は本場の味、しっかりした辛さ、安さを称え、グリーンカレーが少ししょっぱいという声も。夜はソフトシェルクラブのカレー、Tom Yum Goong、3,000円からのコース。昼は現金のみ、日曜休み。',
  });
}

// ================================================================ 味満ん
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001332/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:59']);
  put({
    id: 'tokyo_ajiman_roppongi', name: '味満ん (Ajiman)', category: 'OMNI',
    lat: 35.66332, lng: 139.734735, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fugu sashimi is eaten with house ponzu and a liver sauce, and the menu includes kara-age (2026 reviews); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu restaurant — sashimi, kara-age, hot pot and zosui of fugu.',
    hours_raw: '18:00–24:00 (Tabelog). Seasonal: closed in July and August; open every day from September to March; closed Sundays from April to June; hours may change, so check first (Tabelog). Reviewers nonetheless report visits in July 2026. Reservations by referral only — no first-time bookings, and only regular customers can book (2025–2026 reviews). Cash only: no cards, e-money or QR. 12 seats at the counter plus tatami private rooms for 2 to 20; whole-shop hire up to 20. Non-smoking. À la carte or an omakase course; about ¥40,000–¥100,000 a head in reviews.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-8-8, ＷＯＯビル 1F, in a back alley — about 5–10 min from Roppongi Stn',
    cuisine: 'Fugu specialist since 1981 (2026 reviews) · thick-cut sashimi of wild Japanese fugu, aged, with chives and momiji ponzu, or a sharp house ponzu with plenty of kabosu, or dipped in a liver sauce with green onion and daikon · nikogori, grilled and fried shirako, salt-grilled fugu, large juicy fugu kara-age, fugu hot pot, zosui to finish · also seasonal fish, squid sashimi, miso-saba, shirasu and yam salad, bettara-zuke · hirezake (fin sake) and shirako sake (2026 reviews) · about ¥50,000 per head with drinks at night (March 2026)',
    website: null, gmaps: gm('味満ん 六本木3-8-8'), menu_url: null,
    notes: "[Fugu · Roppongi, a referral-only fugu house since 1981] An old-fashioned, Showa-feeling fugu restaurant in a Roppongi back alley — a counter and tatami rooms — that has served pufferfish since 1981 and won Tabelog Award Silver in 2026. Wild fugu of around 1.8 kg is aged and cut into famously thick sashimi, eaten with kabosu ponzu or a rich liver sauce, followed by grilled shirako, huge fugu kara-age, hot pot and zosui, with hirezake throughout. Regulars come back season after season, some more than twenty times. Bookings are by referral only — new guests cannot reserve — and it is cash only. Closed in July and August, and on Sundays from April to June, per Tabelog.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Established in 1981 (March and May 2026 reviews). A May 2026 reviewer calls it family-run and says it once held a Michelin star. Regulars mention chatting with the chef and the owner at the counter (July 2026). The Tabelog Award: Silver 2019, 2020, 2022 and 2026; Bronze 2021, 2023, 2024 and 2025 (Tabelog). No one is named in the sources read.',
      philosophy: null, specialty: 'Thick-cut wild fugu sashimi with liver sauce; fugu kara-age.',
      anecdotes: [
        { text: '"It turns out that only regular customers can make reservations now, and if you\'re not on the list, you can\'t book a table." — June 2025 visit.', source: R + 'B111219185/' },
        { text: '"Dipping the fugu sashimi in that rich liver sauce is truly blissful. The slices are thick and incredibly satisfying." — March 2026.', source: R + 'B450838297/' },
        { text: '"The fried fugu was juicy, comparable to fried chicken, it was unbelievably delicious." — April 2026.', source: R + 'B525882621/' },
      ],
      japanese_sources_summary: '食べログ: 味満ん、港区六本木3-8-8 ＷＯＯビル1F、六本木駅から10分、18:00〜24:00、7月と8月は休み、9月〜3月は無休、4月〜6月は日曜休み、変わることもあるので要確認、カード・電子マネー・QR不可、12席、個室 (2〜20名)、座敷、貸切20名まで、禁煙、The Tabelog Award Silver 2019・2020・2022・2026、Bronze 2021・2023・2024・2025。口コミ(2025年〜2026年7月): 1981年創業、紹介のみで新規の予約は不可、現金のみ、厚切りのてっさ、肝の漬けだれ、かぼすの自家製ポン酢、白子焼き、唐揚げ、鍋、雑炊、ひれ酒、家族経営、夜は飲み物込みで1人約50,000円。',
      confidence: 'medium', sources: [TB, R + 'B111219185/', R + 'B412568098/', R + 'B450838297/', R + 'B474239552/', R + 'B496621373/', R + 'B524786751/', R + 'B525882621/', R + 'B529759552/', R + 'B534671973/', R + 'B537320425/'] },
    cultural_comfort: { level: 'guide_only', note: 'Referral-only: a regular must introduce you; no first-time bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-8-8 ＷＯＯビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with The Tabelog Award 2026 Silver; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.663320, 139.734735); GSI 東京都港区六本木三丁目8番 (lot) 44m; Bangkok (tokyo_bangkok_roppongi, same building, 2F) is the one offset; Sushi Kappou 3 (3-8-7) is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B412568098/', R + 'B525882621/'],
    price_note: 'No menu prices are published; a March 2026 regular paid about ¥50,000 a head with drinks.', last_checked: TODAY, items: [
      it('', '', 'Fugu sashimi with ponzu and liver sauce', '', 'Fugu', 'ask', 'no', '2026 reviews.', 'tessa'),
      it('', '', 'Fugu kara-age', '', 'Fugu', 'ask', 'no', '2026 reviews.', 'karaage'),
      it('ひれ酒', '', 'Hirezake (fugu fin sake)', '', 'Drinks', '', 'no', 'June 2026 review.', 'hirezake'),
    ] }, {
    cuisine: '1981年創業のふぐ専門店 (2026年の口コミ)・熟成させた天然のふぐの厚切りの刺身を、あさつきともみじポン酢、かぼすたっぷりの自家製ポン酢か、ねぎと大根おろしの肝の漬けだれで・煮こごり、白子の焼きと揚げ、ふぐの塩焼き、大きくジューシーなふぐの唐揚げ、ふぐ鍋、締めの雑炊・旬の魚、いか刺身、鯖の味噌煮、しらすと長芋のサラダ、べったら漬けも・ひれ酒、白子酒 (2026年の口コミ)・夜は飲み物込みで1人約50,000円 (2026年3月)',
    neighborhood: '六本木3-8-8 ＷＯＯビル1F、路地裏。六本木駅から5〜10分',
    gf_detail: '要確認。ふぐ刺しは自家製ポン酢や肝のたれで食べ、唐揚げもある (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。ふぐの刺身、唐揚げ、鍋、雑炊の店。',
    notes: '[ふぐ・六本木、1981年からの紹介制のふぐ料理店] 六本木の路地裏、カウンターと座敷の昭和の雰囲気のふぐ料理店。1981年からふぐ一筋で、The Tabelog Award 2026 Silver。1.8kgほどの天然ふぐを熟成させて厚く切る刺身を、かぼすのポン酢か濃厚な肝のたれで食べ、白子焼き、大きなふぐの唐揚げ、鍋、雑炊と続き、ひれ酒を傾ける。常連は季節ごとに通い、20回以上来ている人も。予約は紹介のみで新規は不可、支払いは現金のみ。食べログによれば7月と8月は休み、4月〜6月は日曜休み。',
  });
}

// ================================================================ プロヴィジョン
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13193138/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://provision-tokyo.com/';
  const H = day(['18:00', '23:59']);
  put({
    id: 'tokyo_provision_roppongi', name: 'プロヴィジョン (Provision)', category: 'OMNI',
    lat: 35.664872, lng: 139.732319, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-based à la carte with pasta, risotto, gratin and gyoza on the menu (2026 reviews); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The dishes described are meat, seafood and cheese; salad and sorbet also appear (January 2026). No vegan dishes are described.',
    hours_raw: 'Tabelog: daily 18:00–24:00. The official site gives 18:00–2:00, with phone calls from 15:00; hours here follow Tabelog and are marked irregular. Members only: a "subscription restaurant" entered by fingerprint. The monthly fee covers almost all food and drink for the member and up to three guests, any number of visits: Unison ¥55,000 a month, De Luxe ¥88,000 a month incl. caviar, foie gras and truffle dishes (official site, tax included); some wines and premium items cost extra. Fees are charged monthly to a registered credit card, nothing is paid on the day; application through the official site. Drinks keep being refilled with the same drink unless you say otherwise (2026 reviews). 20 seats. Non-smoking. BYO drinks possible (Tabelog). Opened 18 February 2016 (Tabelog); a subscription restaurant since autumn 2017 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-5-13, 3F (Reve六本木 per the official site), a back alley between Midtown and Roppongi crossing — 2 min from Roppongi Stn exit 7',
    cuisine: 'French-based creative cooking that changes with the seasons, with wine and champagne by the glass (official site; 2026 reviews) · à la carte and all-you-can-eat and drink within the membership, premium items marked extra: clams steamed in white wine, the house speciality, then a cheese risotto with Ezo abalone made in the clam broth; Russian caviar; jamón serrano; domestic ostrich fillet with sea urchin and egg yolk; scallop tartare and caviar tart; chilled corn soup; truffle-scented shrimp gyoza; beef and eggplant gratin with Sichuan pepper; roast duck; ribeye Chaliapin steak with wasabi; aglio e olio (May 2026) · tripe, bagna càuda, wild boar, venison, yuzu sorbet (January 2026); lobster and scallops with chimichurri (August 2026); goat cheese (August 2026)',
    website: SITE, gmaps: gm('Provision 六本木4-5-13'), menu_url: SITE,
    notes: "[French · Roppongi, a members-only subscription restaurant] A plain, unsigned third floor between Midtown and Roppongi crossing, opened by fingerprint: Provision has been a \"subscription restaurant\" since 2017, where a monthly fee — ¥55,000, or ¥88,000 to include caviar, foie gras and truffle dishes — covers nearly everything a member and up to three guests eat and drink, with no limit on visits. The cooking is French-based and seasonal: the house clams steamed in white wine, then risotto in the clam broth, ostrich with sea urchin, game in winter, and glasses that are refilled until you say stop. Guests of members in 2025–2026 enjoyed the concept and the food, though one found nothing mind-blowing. Members and invited guests only; apply on the official site.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: opened in winter 2016 as "a restaurant that conveys the present", and relaunched in autumn 2017 as a subscription restaurant; featured on Fuji TV\'s "ポップUP！" (October 2022) and in LEON (March 2022 issue). An August 2026 reviewer also mentions the TV show "Matsuko & Ariyoshi Karisome Tengoku". An October 2025 diner found the master friendly and entertaining. No one is named in the sources read.',
      philosophy: 'Drop in any time, like a newspaper subscription, and enjoy wine and food with friends as often as you like (official site).', specialty: 'Clams steamed in white wine; clam-broth risotto.',
      anecdotes: [
        { text: '"The entrance opens with a fingerprint authentication system, which adds an exciting touch." — December 2025.', source: R + 'B519924951/' },
        { text: '"One standout dish was the restaurant\'s specialty, "Clams Steamed in White Wine."" — May 2026.', source: R + 'B528912329/' },
        { text: '"As for drinks, … the same beverage is continuously poured unless you specify otherwise." — August 2026.', source: R + 'B533417196/' },
      ],
      japanese_sources_summary: '公式サイト (provision-tokyo.com): 六本木 大人のフレンチレストラン Provision、2016年冬に六本木交差点やミッドタウンからすぐの路地裏に開店、2017年秋にサブスクリプションレストランに。会員制の扉は指紋登録、月額会費のみでほぼすべての飲食: Unison (会員含め4名まで) 月55,000円、De Luxe (会員含め4名まで) 月88,000円 (キャビア、フォアグラ、トリュフも)、一部追加料金、クレジットカードで毎月自動決済、年会費一括も。営業18:00〜翌2:00、電話は15時から。港区六本木4-5-13 Reve六本木3F、六本木駅7番出口徒歩2分。食べログ: 毎日18:00〜24:00、20席、禁煙、持ち込み可、2016年2月18日オープン。口コミ(2025年10月〜2026年10月): 指紋認証の入口、白ワイン蒸しの蛤、蛤の出汁のリゾット、飲み物は言わないと同じものが注がれ続ける。',
      confidence: 'medium', sources: [TB, SITE, R + 'B514855346/', R + 'B515622412/', R + 'B519924951/', R + 'B520301686/', R + 'B528396900/', R + 'B528912329/', R + 'B530542999/', R + 'B533417196/', R + 'B533514027/', R + 'B538198665/'] },
    cultural_comfort: { level: 'guide_only', note: 'Members and invited guests only; entry by fingerprint.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-5-13 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (© 2016–2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664872, 139.732319); GSI 東京都港区六本木四丁目5番 (lot) 20m; Sushi Yuu Tsumugi (4-5-11) is 17 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Monthly membership fees from the official site (tax included); nothing is paid per visit.', last_checked: TODAY, items: [
      it('', '', 'Membership "Unison": food and drink for member + up to 3, per month', '¥55,000', 'Membership', 'ask', 'ask', 'Official site; some items extra.', 'unison'),
      it('', '', 'Membership "De Luxe": incl. caviar, foie gras, truffle dishes, per month', '¥88,000', 'Membership', 'ask', 'ask', 'Official site; some limited wines extra.', 'deluxe'),
      it('', '', 'Clams steamed in white wine (house speciality)', '', 'À la carte', 'ask', 'no', 'May 2026 review.', 'clams'),
    ] }, {
    cuisine: '季節で変わるフレンチを基調とした創作料理と、グラスのワインやシャンパン (公式サイト、2026年の口コミ)・会費内でアラカルトの食べ放題・飲み放題、高級品は追加料金: 名物の蛤の白ワイン蒸しと、その出汁で作る Ezo の鮑のチーズリゾット、ロシアのキャビア、ハモン・セラーノ、国産のダチョウのフィレ肉の雲丹と卵黄のせ、帆立のタルタルとキャビアのタルト、冷たいコーンスープ、トリュフが香る海老餃子、花椒の香る牛肉と茄子のグラタン、鴨のロースト、山葵を添えたリブロースのシャリアピンステーキ、アーリオ・オーリオ (2026年5月)・トリッパ、バーニャカウダ、猪、鹿、柚子のソルベ (2026年1月)、オマール海老と帆立のチミチュリソース (2026年8月)、山羊のチーズ (2026年8月)',
    neighborhood: '六本木4-5-13 3F (公式サイトでは Reve六本木)、Midtown と六本木交差点の間の路地裏。六本木駅7番出口から徒歩2分',
    gf_detail: '要確認。フレンチ基調のアラカルトで、パスタ、リゾット、グラタン、餃子も (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: '要確認。肉、魚介、チーズの料理が中心で、サラダやソルベもある (2026年1月)。ヴィーガンの料理の記載はない。',
    notes: '[フレンチ・六本木、会員制のサブスクリプションレストラン] Midtown と六本木交差点の間、看板のない3階を指紋で開ける。Provision は2017年から「サブスクリプションレストラン」で、月額会費 (55,000円、キャビア、フォアグラ、トリュフも含めると88,000円) で、会員と同伴3名までが何度来てもほぼすべての飲食を楽しめる。料理はフレンチ基調で季節替わり: 名物の蛤の白ワイン蒸し、その出汁のリゾット、雲丹をのせたダチョウ、冬のジビエ。グラスは止めるまで注がれ続ける。2025〜2026年に会員に連れられた客は仕組みと料理を楽しみ、驚くほどではないという声も。会員と同伴者のみ、入会は公式サイトから。',
  });
}

save();
