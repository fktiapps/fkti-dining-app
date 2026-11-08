// Kyoto priority (kyoto-missed), worker osw13, batch 105 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 焼肉ホルモン萬正, 真ん中, 味の店 京は菜, la princesse kyoto.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-105');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26028858', 'already in data: ぎおん川勝 (祇園町北側297) is the pickle shop whose eat-in chazuke room ぶぶ家 is listed as kyoto_bubuya_gion (Tabelog 26000405, same address); the shop listing adds only pickle retail');
skip('26011866', 'chain: ホリーズカフェ 本能寺会館店 — ホリーズカフェ already ruled a chain (osw8-51: 16 shops in our crawls)');
skip('26000820', 'big-chain hotel venue (Greg 11-08 ruling): Main Bar Darley is in ホテル日航プリンセス京都 2F (Tabelog address), a Nikko-brand hotel of Okura Nikko Hotels');
skip('26014494', 'big-chain hotel venue (Greg 11-08 ruling): Teppanyaki Hoeien is in ホテル日航プリンセス京都 2F (Tabelog address), a Nikko-brand hotel of Okura Nikko Hotels');

// ================================================================ 焼肉ホルモン萬正
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037132/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_horumon_mansei', name: '焼肉ホルモン萬正 (Yakiniku Horumon Mansei)', category: 'OMNI',
    lat: 35.010224, lng: 135.771234, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku with marinades and the Kyoto-style "arai-dare" dipping sauce, Morioka cold noodles and dan dan noodles (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and offal (horumon) yakiniku house; kimchi and cold noodles are the only non-meat dishes reviewers name (2026).',
    hours_raw: 'Tabelog: daily 17:00–22:00 (food L.O. 21:00). Reservations taken; Saturday opening was full by 17:00 (July 2026). Cover 「チャージ料300円」 (Tabelog Japanese original; a September 2026 reviewer paid ¥330 incl. tax). 100 seats, including a counter, tatami rooms on the 2nd floor and summer riverside seats on the Kamo River noryo-yuka (no smoking there); private hire for 20–50. Designated smoking area. Cards, IC cards, e-money and QR. English menu. Children welcome. Wheelchair accessible. At the end of the Kamiyashiya bridge (as a September 2026 reviewer spells it) off Kiyamachi, just north of Sanjo; 5 min from Keihan Sanjo. Opened 6 January 2022. Operator 株式会社ORIZON BLUE PARTNERS (NTA invoice register).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi just north of Sanjo, on the Kamo River — 5 min walk from Sanjo (Keihan)',
    cuisine: 'A busy, casual yakiniku and horumon house on the Kamo River, with summer riverside seats (Tabelog; 2026 reviews) · grilled yukhoe ¥1,780; tongue assortment (four cuts) ¥2,580; today\'s wagyu assortment ¥2,780; cheek ¥980; tetchan ¥880; large lemon sour ¥700 (September 2026) · regular kalbi ¥880 (September 2026) · Kawadoko course ¥6,000 (August 2026); Kyoto summer course ¥6,600 · tongue, loin, kalbi, heart, tripe, liver, lung, omasum sashimi · fresh kimchi; Morioka cold noodles; yukgaejang soup; beef tendon with ponzu (2026) · meat dipped in a light broth with grated daikon ("arai-dare")',
    website: null, gmaps: gm('焼肉ホルモン萬正 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku & horumon · Kiyamachi on the Kamo River, a lantern-lit riverside grill] A lively, good-value yakiniku house by the Sanjo bridges — wagyu, tongue flights and a long list of offal, dipped Kyoto-style in a light daikon broth — with fresh kimchi and cold noodles, and riverside seats on the summer yuka. About ¥5,000–8,000 a head. ¥300 cover.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)', 'Operator: 株式会社ORIZON BLUE PARTNERS (NTA invoice register)'], origin: null,
      background: 'Opened 6 January 2022 (Tabelog). Reviewers in 2026 describe numerous young staff — some of them high-school students, a November 2026 reviewer learned — who were friendly and attentive, a crowd of students and tourists, and signed celebrity photos on the walls. Criticism: rice served long before the meat on a busy night (July 2026), small insects at the riverside seats early in the evening (August 2026), and very large portions on courses (July and November 2026).',
      philosophy: null,
      specialty: 'Horumon and wagyu yakiniku with Kyoto-style arai-dare; fresh kimchi.',
      anecdotes: [
        { text: 'September 2026: "The horumon and fatty cuts are perfectly finished with a refreshing Kyoto-style \'Arai-dare\' sauce! Dipping the meat into the broth with grated daikon makes it even more delicious."', source: R + 'B535124592/' },
        { text: 'August 2026: "I was seated right by the river, and it was a delight to enjoy Yakiniku while watching people leisurely stroll or sit by the riverside."', source: R + 'B534803160/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉ホルモン萬正、焼肉・居酒屋・韓国料理、中京区上大阪町518、京阪三条駅から徒歩約5分、毎日17:00〜22:00 (料理L.O.21:00)、予約可、原文で「チャージ料300円」、100席、2階に座敷、納涼床は禁煙、貸切20〜50名、分煙、カード・交通系IC・電子マネー・QR可、英語メニュー、子供可、車椅子可、2022年1月6日オープン。インボイス登録は株式会社ORIZON BLUE PARTNERS (国税庁)。口コミ (2026年7月〜11月、英語): あぶりユッケ1,780円、タンの盛り合わせ2,580円、本日の和牛盛り合わせ2,780円、ツラミ980円、テッチャン880円、カルビ880円、川床コース6,000円、京都の夏のコース6,600円、洗いだれ (大根おろしのだし)、生キムチ、盛岡冷麺、ユッケジャン、高校生のスタッフも、芸能人のサイン、ご飯が肉より先に出た (2026年7月)、川床の虫 (2026年8月)、コースの量が多い。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001040434'].concat(rv(R, ['B531425178', 'B532194208', 'B532883233', 'B534188569', 'B534197562', 'B534803160', 'B535124592', 'B535321333', 'B535641657', 'B537662637', 'B538796658', 'B538879676'])) },
    cultural_comfort: { level: 'some_english', note: 'English menu (Tabelog); ¥300 cover; summer riverside seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪町518',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October and November 2026.' },
    pin_source: `Tabelog ${TB} (35.010224, 135.771234); GSI lot 京都府京都市中京区上大阪町518番地 about 44m away; nearest pin kyoto_nankuru_shokudo 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535124592/', R + 'B534803160/'],
    price_note: 'Prices from August and September 2026 reviews; ¥300 cover.', last_checked: TODAY, items: [
      it('', '', 'Tongue assortment (four cuts)', '¥2,580', 'Yakiniku', 'ask', 'no', 'September 2026.', 'tongue_assortment'),
      it('', '', 'Today\'s wagyu assortment (loin, round, kalbi)', '¥2,780', 'Yakiniku', 'ask', 'no', 'September 2026.', 'wagyu_assortment'),
      it('', '', 'Grilled yukhoe', '¥1,780', 'Yakiniku', 'no', 'no', 'September 2026.', 'aburi_yukhoe'),
      it('', '', 'Tetchan (large intestine)', '¥880', 'Horumon', 'no', 'no', 'September 2026.', 'tetchan'),
      it('', '', 'Kawadoko course (summer riverside)', '¥6,000', 'Course', 'no', 'no', 'August 2026.', 'kawadoko_course'),
    ] }, {
    cuisine: '夏は納涼床もある鴨川沿いのにぎやかな大衆焼肉・ホルモン店 (食べログ、2026年の口コミ)・あぶりユッケ1,780円、タンの盛り合わせ (4部位) 2,580円、本日の和牛盛り合わせ2,780円、ツラミ980円、テッチャン880円、レモンサワー大700円 (2026年9月)・カルビ880円 (2026年9月)・川床コース6,000円 (2026年8月)、京都の夏のコース6,600円・タン、ロース、カルビ、ハツ、もつ、レバー、肺、センマイ刺し・生キムチ、盛岡冷麺、ユッケジャン、牛すじポン酢 (2026年)・大根おろしのだしにくぐらせる「洗いだれ」',
    neighborhood: '三条のすぐ北、鴨川沿いの木屋町。京阪三条から徒歩5分',
    gf_detail: 'グルテンフリーではない: たれの焼肉、京風の「洗いだれ」、盛岡冷麺、担々麺 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛とホルモンの焼肉店。肉以外で口コミに出るのはキムチと冷麺だけ (2026年)。',
    notes: '[焼肉・ホルモン・鴨川沿いの木屋町、提灯の灯る川床の焼肉] 三条の橋のそばの、にぎやかで手頃な焼肉店。和牛、タンの食べ比べ、豊富なホルモンを京風の大根おろしのだしにくぐらせて。生キムチや冷麺も、夏は川床の席も。一人5,000〜8,000円ほど。チャージ300円。',
  });
}

// ================================================================ 真ん中
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004888/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_mannaka_higashinotoin', name: '真ん中 (Mannaka)', category: 'OMNI',
    lat: 35.00731, lng: 135.761224, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an izakaya menu of kara-age, kushikatsu, tempura, handmade gyoza and kimchi chige with ramen (2011–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, chicken wings, pork kimchi, oden with egg (2011–2025 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 17:30–23:30 (L.O. 23:00); closed Sunday and holidays. Reservations taken. No credit cards; PayPay accepted (Tabelog). 24 seats: 5 at the counter, tatami and tables; private hire up to 20. Smoking allowed, so under-20s are not admitted (Tabelog). 2nd floor of the ロイヤルプラザビル at the southeast corner of Higashinotoin and Rokkaku; 7 min walk from Karasuma, Shijo or Karasuma-Oike stations. A 2016 reviewer says it moved here from Muromachi, under a different name, about ten years earlier.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin-Rokkaku, near Rokkakudo — 7 min walk from Karasuma',
    cuisine: 'A long-running homely izakaya named for the Heso-ishi "navel stone" at Rokkakudo, with five or six kinds of daily fish, Kyoto obanzai and 15+ local sakes (Tabelog; 2007–2026 reviews) · assorted oden (five), pork kimchi, handmade vegetable gyoza, stir-fried spinach (December 2024; ¥4,840 for two with drinks) · Nagoya-style sweet chicken wings; tempura (November 2025) · sashimi platter; kara-age; dashimaki with Kujo leeks (2011) · kushikatsu; "nekomanma" rice with bonito, salmon and egg yolk (2016) · local sake such as Kaze no Mori (August 2023)',
    website: 'http://www.kyoto-mannaka.com', gmaps: gm('真ん中 東洞院六角 居酒屋'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Higashinotoin-Rokkaku near Rokkakudo, a landlady\'s second-floor local] A cozy, smoke-friendly second-floor izakaya in the very middle of Kyoto: daily fish, obanzai, oden, sweet chicken wings and a good run of local sake, poured to overflowing by a warm landlady. About ¥3,000–5,000. Smoking allowed; adults only. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; called the landlady by a November 2025 reviewer)'], origin: null,
      background: 'Reviewers since 2007 describe a homely, calm izakaya; an October 2011 reviewer mentions the owner and, apparently, her son, and a November 2025 reviewer the warm landlady who pours sake until it overflows. A 2016 reviewer says it moved from Muromachi-dori, under a different name, about ten years before. The name comes from the Heso-ishi stone at Rokkakudo (Chohoji), the symbolic centre of Kyoto (Tabelog). Criticism: food slows when it is busy (2011); a 2007 reviewer found the seasoning a little sweet; smoking is allowed.',
      philosophy: null,
      specialty: 'Daily fish; obanzai; oden; local sake.',
      anecdotes: [
        { text: 'November 2025: "When I ordered Japanese sake, they poured it generously until it overflowed from the cup, which was a delightful traditional touch. The friendly conversations with the warm owner made for a relaxing and enjoyable experience."', source: R + 'B516642207/' },
        { text: 'December 2024: "The Japanese radish is incredibly delicious, soaked well in the broth… Please note that this place allows smoking."', source: R + 'B497828525/' },
      ],
      japanese_sources_summary: '食べログ: 真ん中、居酒屋・焼酎バー・魚介料理、中京区東洞院六角南東角 ロイヤルプラザビル2F、阪急烏丸駅・地下鉄四条駅・烏丸御池駅から徒歩7分、月〜土17:30〜23:30 (L.O.23:00)、日曜・祝日休み、予約可、カード不可・PayPay可、24席、貸切20名まで、喫煙可のため未成年は入店不可、公式サイト kyoto-mannaka.com、Rokkakudoのへそ石にちなむ名前、日替わりの魚5〜6種とおばんざい、地酒15種以上。口コミ (2007年7月〜2026年6月、英語): おでん5種、豚キムチ、手作り餃子、ほうれん草炒め (2024年12月)、名古屋風の甘い手羽先、天ぷら、なみなみ注ぐ日本酒、温かい女将 (2025年11月)、刺身の盛り合わせ、唐揚げ、Kujoねぎのだし巻き (2011年)、串カツ、ねこまんま (2016年)、Muromachi通から移転 (2016年の口コミ)、店主と息子さんらしき人 (2011年10月)。',
      confidence: 'medium', sources: [TB, 'http://www.kyoto-mannaka.com'].concat(rv(R, ['B116117427', 'B116927344', 'B118685369', 'B144733982', 'B191106625', 'B470136294', 'B495302579', 'B497828525', 'B516642207', 'B530239340'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoking allowed; adults only; no cards (PayPay OK).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区東洞院六角南東角 ロイヤルプラザビル２Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated November 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} gives (35.007309, 135.761531), about 34m east of the Royal Plaza building that la princesse kyoto's listing places at 御射山町260 (the same "ロイヤルプラザビル 2F, southeast corner of Rokkaku and Higashinotoin"); the address has no lot, so placed in that building 6m east of the la princesse pin at (35.00731, 135.761224) and marked approximate; nearest existing pin kyoto_rakkansha 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497828525/'],
    price_note: 'A December 2024 bill of ¥4,840 for two with drinks; no item prices.', last_checked: TODAY, items: [
      it('', '', 'Assorted oden (5 kinds)', null, 'Oden', 'ask', 'no', 'December 2024.', 'oden_moriawase'),
      it('', '', 'Handmade gyoza', null, 'Small dish', 'no', 'no', 'December 2024.', 'gyoza'),
      it('', '', 'Chicken wings (sweet Nagoya style)', null, 'Fried', 'no', 'no', 'November 2025.', 'tebasaki'),
      it('', '', 'Sashimi platter', null, 'Sashimi', 'ask', 'no', '2011; December 2024.', 'sashimi_moriawase'),
    ] }, {
    cuisine: 'Rokkakudoのへそ石にちなんだ名の、家庭的な老舗居酒屋。日替わりの魚5〜6種、京のおばんざい、地酒15種以上 (食べログ、2007〜2026年の口コミ)・おでん5種、豚キムチ、手作りの野菜餃子、ほうれん草炒め (2024年12月、2人で飲み物込み4,840円)・名古屋風の甘い手羽先、天ぷら (2025年11月)・刺身の盛り合わせ、唐揚げ、Kujoねぎのだし巻き (2011年)・串カツ、かつお節・鮭・卵黄の「ねこまんま」 (2016年)・地酒 (2023年8月)',
    neighborhood: 'Rokkakudo近くの東洞院六角。烏丸から徒歩7分',
    gf_detail: 'グルテンフリーではない: 唐揚げ、串カツ、天ぷら、手作り餃子、キムチチゲとラーメンなどの居酒屋メニュー (2011〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、手羽先、豚キムチ、卵入りのおでん (2011〜2025年の口コミ)。',
    notes: '[居酒屋・Rokkakudo近くの東洞院六角、女将の2階の店] 京都のまん中にある、たばこも吸える2階の居心地のいい居酒屋。日替わりの魚、おばんざい、おでん、甘い手羽先、地酒を温かい女将がなみなみと注いでくれる。3,000〜5,000円ほど。喫煙可、未成年不可。日曜休み。',
  });
}

// ================================================================ 味の店 京は菜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041020/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_aji_no_mise_kyowasai', name: '味の店 京は菜 (Aji no Mise Kyo wa Sai)', category: 'OMNI',
    lat: 34.996236, lng: 135.769278, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: steamed Western dishes alongside pasta, cutlets (rare cutlet, mentai-cheese chicken cutlet), demi-glace omelet, fried rice and curry (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: roast beef, hamburg steak, pork bossam and seafood. Steamed seasonal vegetables (seiro-mushi) are on the menu — ask what they are served with (2024–2026).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 17:30–24:00 (food L.O. 23:00, drinks 23:30); closed Wednesday and over New Year. Reservations taken. Cards, iD and QR. 25 seats: 9 at the counter, 16 in a tatami room (low tables, not sunken); private room. Heated tobacco only; an outdoor ashtray for cigarettes. Children welcome, with a kids\' menu. Staff spoke English (August 2026). 1 min walk from Keihan Kiyomizu-Gojo. Opened 10 April 2024. Run by 合同会社Rmeet (NTA invoice register; rmeet-kyoto.com).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawasuji 8-chome by Kiyomizu-Gojo — 1 min walk from Kiyomizu-Gojo',
    cuisine: 'A small izakaya of steamed (seiro-mushi) Western dishes — roast beef is the signature — plus pasta and seasonal specials on a blackboard (Tabelog; 2024–2026 reviews) · steamed seasonal vegetables ¥1,380; pork bossam ¥1,280; roast beef ¥2,500; fried rice ¥1,580 (September 2026) · hamburg steak course ¥5,500 (August 2026) · steamed hamburg steak, steamed pasta, demi-glace omelet, cutlets, pudding (2025) · summer pasta with conger eel and octopus (July 2025) · mentai-cheese chicken cutlet; chicken neck peperoncino (November 2024) · venison sausage; kara-age; all-you-can-drink courses (2026)',
    website: 'https://rmeet-kyoto.com/', gmaps: gm('味の店 京は菜 清水五条'), menu_url: TB + 'dtlmenu/',
    notes: '[Steamed yoshoku izakaya · by Kiyomizu-Gojo Station, a counter and tatami room] A friendly late-night spot a minute from Kiyomizu-Gojo that steams its roast beef, hamburg and vegetables in seiro baskets, with seasonal pastas and cutlets; about ¥4,000–8,000. English-speaking staff. Open to midnight; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)', 'Operator: 合同会社Rmeet'], origin: null,
      background: 'Opened 10 April 2024 (Tabelog). Operated by 合同会社Rmeet, whose site says the company began with ロジオク, a roast-beef restaurant born during the pandemic (rmeet-kyoto.com). Reviewers describe kind, attentive staff and regulars. Criticism: a September 2026 reviewer found the roast beef tough for the price and the fried rice too strongly seasoned; an August 2026 reviewer with a tatami booking was seated at the counter, and the course differed from the Tabelog description.',
      philosophy: null,
      specialty: 'Steamed roast beef; seiro-steamed vegetables; seasonal pasta.',
      anecdotes: [
        { text: 'November 2024: "I had no idea steamed dishes could be this delicious! … But the true highlight of this restaurant is the pasta!"', source: R + 'B494887003/' },
        { text: 'August 2026: "Most of the customers in the restaurant were foreigners, and the staff provided excellent service in English, which was impressive."', source: R + 'B533153633/' },
      ],
      japanese_sources_summary: '食べログ: 味の店 京は菜、居酒屋・イタリアン・洋食、東山区宮川筋8-423-2、京阪清水五条駅から徒歩1分、月・火・木〜日・祝日17:30〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、水曜休み、年末年始休み、予約可、カード・iD・QR可、25席 (カウンター9・座敷16)、個室あり、加熱式たばこのみ (紙巻きは屋外に灰皿)、子供可・キッズメニューあり、2024年4月10日オープン、公式サイト rmeet-kyoto.com (合同会社Rmeet、ロジオクから始まった会社)。口コミ (2024年5月〜2026年10月、英語): 野菜のせいろ蒸し1,380円、豚のポッサム1,280円、ローストビーフ2,500円、焼き飯1,580円 (2026年9月)、ハンバーグのコース5,500円 (2026年8月)、蒸しハンバーグ、蒸しパスタ、デミオムレツ、カツ、プリン、conger eelとたこの夏のパスタ、明太チーズのチキンカツ、ネックのペペロンチーノ、鹿肉のソーセージ、飲み放題のコース、英語での接客 (2026年8月)、ローストビーフが硬い・焼き飯が濃いとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, 'https://rmeet-kyoto.com/'].concat(rv(R, ['B484992219', 'B494887003', 'B495972107', 'B510661940', 'B517382085', 'B527962766', 'B529150634', 'B532995590', 'B533153633', 'B535654044', 'B536306296', 'B538285137'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Staff served in English (August 2026); counter and tatami room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋8-423-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August, September and October 2026.' },
    pin_source: `Tabelog ${TB} (34.996236, 135.769278); GSI lot 京都府京都市東山区宮川筋八丁目423番地 about 12m away; nearest pin kyoto_sushi_kappou_miyuki 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536306296/', R + 'B533153633/'],
    price_note: 'Prices from August and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Steamed seasonal vegetables (seiro-mushi)', '¥1,380', 'Steamed', 'ask', 'ask', 'September 2026.', 'yasai_seiromushi'),
      it('', '', 'Roast beef', '¥2,500', 'Main', 'ask', 'no', 'September 2026.', 'roast_beef'),
      it('', '', 'Pork bossam', '¥1,280', 'Main', 'ask', 'no', 'September 2026.', 'pork_bossam'),
      it('', '', 'Fried rice', '¥1,580', 'Rice', 'no', 'no', 'September 2026.', 'yakimeshi'),
      it('', '', 'Hamburg steak course', '¥5,500', 'Course', 'no', 'no', 'August 2026.', 'hamburg_course'),
    ] }, {
    cuisine: 'せいろで蒸す洋食が中心の小さな居酒屋。看板はローストビーフ、パスタや黒板の季節のおすすめも (食べログ、2024〜2026年の口コミ)・野菜のせいろ蒸し1,380円、豚のポッサム1,280円、ローストビーフ2,500円、焼き飯1,580円 (2026年9月)・ハンバーグのコース5,500円 (2026年8月)・蒸しハンバーグ、蒸しパスタ、デミオムレツ、カツ、プリン (2025年)・たこと夏野菜の夏のパスタ (2025年7月)・明太チーズのチキンカツ、ネックと青菜のペペロンチーノ (2024年11月)・鹿肉のソーセージ、唐揚げ、飲み放題のコース (2026年)',
    neighborhood: '清水五条駅そばの宮川筋8丁目。清水五条から徒歩1分',
    gf_detail: 'グルテンフリーではない: 蒸し料理のほかにパスタ、カツ (レアカツ、明太チーズのチキンカツ)、デミオムレツ、焼き飯、カレー (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ローストビーフ、ハンバーグ、豚のポッサム、魚介。野菜のせいろ蒸しはあるが、添えるたれは要確認 (2024〜2026年)。',
    notes: '[せいろ蒸しの洋食居酒屋・清水五条駅前、カウンターと座敷] 清水五条から1分の、深夜まで開く気さくな店。ローストビーフやハンバーグ、野菜をせいろで蒸し、季節のパスタやカツも。4,000〜8,000円ほど。英語で接客。深夜0時まで、水曜休み。',
  });
}

// ================================================================ la princesse kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035086/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_la_princesse', name: 'la princesse kyoto', category: 'OMNI',
    lat: 35.00731, lng: 135.761158, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: white omurice with a red-wine demi sauce (or a spice-curry version), fig mille-feuille and chocolate desserts (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice of white-yolk eggs with Parmigiano and a sauce of veal, lamb and red wine; oyster-flavored rice (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–15:00 (L.O. 14:30) and 17:00–22:00; closed on irregular days; a café course runs 13:00–15:30 (August 2026 review). Reservations taken. Cards and PayPay. 30 seats with private rooms for 2–8; private hire for 20–50. Non-smoking. Pets welcome (in a carrier if other guests are present). Children welcome, with baby mats and children\'s cutlery (May 2026). 2nd floor of the Royal Plaza building at the southeast corner of Rokkaku and Higashinotoin, above a tantanmen shop; 5 min walk from Karasuma-Oike (Tabelog). Opened 1 December 2020.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Rokkaku near Karasuma-Oike — 5 min walk from Karasuma-Oike',
    cuisine: 'A princess-themed café-restaurant of antiques, chandeliers and tiaras, known for its all-white omurice (Tabelog; 2024–2026 reviews) · white omurice of white-yolk eggs and Parmigiano with a red-wine sauce ¥1,320 (August 2024); a spice-curry version · white omurice set A (warm vegetables, omurice, cold-brew tea) ¥2,000; set B with dessert and tea ¥2,400; set C ¥2,700 (2026) · fig crunch mille-feuille; chocolate glaze (2026) · birthday lunch plan with Hokkaido veal ¥3,300 (September 2026) · oysters and craft beer at dinner; wine (August 2026)',
    website: null, gmaps: gm('la princesse kyoto'), menu_url: TB + 'dtlmenu/',
    notes: '[Princess-theme café · Higashinotoin-Rokkaku, white omurice under a tiara] An antique-filled second-floor room where you can borrow a tiara and eat a strikingly white omurice crowned with a little crown, with fig mille-feuille and jam-sweetened cold-brew tea; lunch sets ¥2,000–2,700. Dogs welcome. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 December 2020 (Tabelog). Reviewers describe antique furniture, Renoir paintings, violins and tiaras to borrow for photos, friendly staff and a crowd of birthday parties, girls\' lunches and some men. Criticism: hard to find (August 2026); a modest-looking portion (June 2026).',
      philosophy: null,
      specialty: 'White omurice; fig mille-feuille.',
      anecdotes: [
        { text: 'June 2026: "When the White Omurice arrived, I was surprised by how incredibly white it was—much whiter than I had imagined."', source: R + 'B530505273/' },
        { text: 'September 2026: "Crowns and tiaras are available for free rental, allowing you to wear them for memorable photos during your celebration."', source: R + 'B535207922/' },
      ],
      japanese_sources_summary: '食べログ: la princesse kyoto、フレンチ・バル・イタリアン、中京区御射山町260 ロイヤルプラザビル2F、地下鉄烏丸御池駅から徒歩5分 (六角通と東洞院通の交差点の南東角、1階は担々麺店とカフェ)、毎日12:00〜15:00 (L.O.14:30)・17:00〜22:00、不定休、予約可、カード・PayPay可、30席、個室 (2〜8名)、貸切20〜50名、禁煙、ペット可 (他の客がいる時はケージで)、子供可、2020年12月1日オープン。口コミ (2024年8月〜2026年9月、英語): 白い卵とパルミジャーノの白いオムライス1,320円 (2024年8月)、スパイスカレー版、白いオムライスのセットA 2,000円・B 2,400円・C 2,700円、いちじくのミルフィーユ、チョコレートのグラサージュ、ジャム入りの水出し紅茶、北海道の仔牛の誕生日ランチ3,300円、夜は牡蠣とクラフトビール、アンティークの内装、ティアラの貸し出し、犬も可、場所がわかりにくいとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B492584331', 'B528815428', 'B529637090', 'B529859507', 'B530097679', 'B530505273', 'B532635291', 'B534339857', 'B534667080', 'B534747721', 'B534863361', 'B535207922'])) },
    cultural_comfort: { level: 'japanese', note: 'Pets and children welcome; tiaras to borrow for photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御射山町260 ロイヤルプラザビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.00731, 135.761158); GSI lot 京都府京都市中京区御射山町260番地 about 14m away; 真ん中 (same building) placed 6m east; nearest existing pin kyoto_rakkansha 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492584331/', R + 'B534667080/', R + 'B534747721/'],
    price_note: 'Prices from August 2024 and June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White omurice', '¥1,320', 'Main', 'no', 'no', 'August 2024.', 'white_omurice'),
      it('', '', 'White omurice set A (vegetables, omurice, cold-brew tea)', '¥2,000', 'Set', 'no', 'no', 'August 2026.', 'omurice_set_a'),
      it('', '', 'White omurice set B (with dessert and tea)', '¥2,400', 'Set', 'no', 'no', 'June 2026.', 'omurice_set_b'),
      it('', '', 'White omurice set C (appetizers, omurice, dessert, tea)', '¥2,700', 'Set', 'no', 'no', 'July 2026.', 'omurice_set_c'),
    ] }, {
    cuisine: 'アンティークとシャンデリア、ティアラのある「お姫さま」がテーマのカフェレストラン。真っ白なオムライスが名物 (食べログ、2024〜2026年の口コミ)・白い卵とパルミジャーノの白いオムライス、赤ワインのソース1,320円 (2024年8月)、スパイスカレー版も・白いオムライスのセットA (温野菜、オムライス、水出し紅茶) 2,000円、デザートと紅茶付きのセットB 2,400円、セットC 2,700円 (2026年)・いちじくのクランチミルフィーユ、チョコレートのグラサージュ (2026年)・北海道の仔牛の誕生日ランチプラン3,300円 (2026年9月)・夜は牡蠣とクラフトビール、ワイン (2026年8月)',
    neighborhood: '烏丸御池近くの東洞院六角。烏丸御池から徒歩5分',
    gf_detail: 'グルテンフリーではない: 赤ワインのドミソースの白いオムライス (スパイスカレー版も)、いちじくのミルフィーユ、チョコレートのデザート (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 白い黄身の卵とパルミジャーノのオムライス、仔牛・羊・赤ワインのソース、牡蠣のうまみのご飯 (2024〜2026年の口コミ)。',
    notes: '[プリンセスがテーマのカフェ・東洞院六角、ティアラの白いオムライス] アンティークに囲まれた2階の部屋で、ティアラを借りて、小さな王冠をのせた真っ白なオムライスを。いちじくのミルフィーユやジャム入りの水出し紅茶も。ランチセットは2,000〜2,700円。犬も可。毎日営業。',
  });
}

save();
