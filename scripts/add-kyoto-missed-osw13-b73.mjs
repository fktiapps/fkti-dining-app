// Kyoto priority (kyoto-missed), worker osw13, batch 73 — lane: Tabelog id mod 6 = 0.
// Core: VIETNAM FRENCH XUAN, 日本料理 藤井, DiDi, Pongee's Table.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041482', 'brand already in data: 麺屋 極鶏 円町店 is a branch of 麺屋 極鶏, already in kyoto.json as kyr_menya_gokkei_ichijoji_ho (一乗寺本店); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');

// ================================================================ VIETNAM FRENCH XUAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26023710/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.xuan.jp/';
  const H = day(['11:30', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_vietnam_french_xuan', name: 'VIETNAM FRENCH XUAN (スアン)', category: 'OMNI',
    lat: 35.029063, lng: 135.788793, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: rice-noodle pho and rice-paper spring rolls, but fried spring rolls, sauces and desserts are not described for wheat (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the shop says it cannot take vegetarian or vegan requests, and meat is used in the broth so it cannot be removed (Tabelog).',
    hours_raw: 'Tabelog: 11:30–15:00 and 18:00–21:30 (last order 21:00); closed Tuesday, with some Mondays and Wednesdays off and closures for sourcing or family events — monthly closing days on the official site and Instagram. Booking advised (July 2026); à la carte orders, groups of 7+ and private hire by phone; 30 minutes late without notice counts as a cancellation, with a fee. No vegetarian or vegan requests. Children 1 and over order a kids\' set or a drink; call ahead with small children (Tabelog). 15 seats: 7 at the counter, 8 at tables; private room up to 20. Non-smoking. Cards (incl. UnionPay), e-money, QR. A white three-storey house with greenery, two blocks along the Shirakawa canal from Shirakawa-Imadegawa; 3 min from the Ginkakuji-michi bus stop. Moved here 20 April 2014 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, by the Shirakawa canal — 3 min from Ginkakuji-michi bus stop',
    cuisine: 'Southern Vietnamese cooking with French touches and Kyoto vegetables, in a house by the Shirakawa canal (official site; 2025–2026 reviews) · "Enjoy" 11-dish lunch ¥2,860: a leaf-shaped platter of six starters — fresh and fried spring rolls, green-papaya salad, marinated salmon, water spinach, bitter melon with chicken, pickled lotus stems — then pho (chicken or chashu; shrimp or beef +¥100–150), desserts and Vietnamese coffee or lotus tea (2025–2026 reviews) · coriander served on the side · dinner courses, banh xeo, seasonal "Vietnamese pho hot pot" from mid-November 2026 (official site)',
    website: SITE, gmaps: gm('VIETNAM FRENCH XUAN 北白川'), menu_url: SITE,
    notes: '[Vietnamese · Kitashirakawa, Vietnamese-French in a canal-side house] A small Vietnamese-French restaurant in a white house by the Shirakawa canal, near the Philosopher\'s Path: an 11-dish lunch of six pretty starters, a gentle collagen-rich pho and desserts for about ¥2,900, made with Kyoto farm vegetables, and warm hosts who talk about Vietnam. No vegetarian or vegan requests. Book; closed Tuesday and some other days.',
    chef_bio: { chef_name: null, roles: ['Producer: フォン (named on the official site); the chef is not named'], origin: 'Southern Vietnam (the producer\'s home cooking, per the official site)',
      background: 'Per the official site, XUAN began in Tokyo\'s Nihonbashi in 1997, opened as VIETNAM FRENCH XUAN on Gokomachi in Nakagyo-ku in 2001, and moved to Kitashirakawa in 2014. Its cooking is based on the southern Vietnamese food the producer, フォン, grew up with, using produce from Kyoto farms and fishing ports, Asuka in Nara, and ingredients sourced in Vietnam; it also runs a sweets and ao dai brand, リンホア, and Vietnam tours. Reviewers in 2026 describe a chef and a lady who explain each dish and chat with guests, and the mezzanine sells made-to-order ao dai (Tabelog).',
      philosophy: 'From the site: using fresh ingredients as they are, cooked in the way of Vietnamese daily life (official site, paraphrased).',
      specialty: 'Eleven-dish lunch; chicken pho.',
      anecdotes: [
        { text: 'January 2026: "the hospitality from the chef and the lady was wonderful… We ended up diving into some interesting conversations about hobbies."', source: R + 'B521438000/' },
        { text: 'April 2026: "I used to visit Xuan several times before it moved, and I had no idea it had relocated to such a lovely house!"', source: R + 'B526955837/' },
      ],
      japanese_sources_summary: '公式サイト: 京野菜で彩るベトナムフレンチレストラン、1997年に東京日本橋で誕生、2001年に京都市中京区御幸町で「VIETNAM FRENCH XUAN－スアン－」として開店、2014年に京都北白川へ移転、プロデューサーのフォン氏が育ったベトナム南部の料理がベース、京都の農園と漁港や奈良明日香村などの食材と現地調達の素材、スイーツとアオザイのブランド「リンホア」、ベトナムツアー、2026年11月中旬頃から「越南フォー鍋」、今月の休業日。食べログ: VIETNAM FRENCH XUAN、ベトナム料理、左京区北白川久保田町56-1、銀閣寺道バス停から徒歩3分、11:30〜15:00・18:00〜21:30 (L.O. 21:00)、火曜休み (月・水も不定)、ベジタリアン・ヴィーガン対応不可・出汁に肉を使うため肉抜き不可、7名以上と貸切は電話、30分以上の無断遅刻はキャンセル料、1歳以上は子供セットか飲み物を、15席 (カウンター7、テーブル8)、個室 (20名まで)、禁煙、カード・電子マネー・QR可、中二階でアオザイのオーダーとベトナム雑貨、2014年4月20日オープン。口コミ (2025年9月〜2026年8月、英語): 11品のランチ (2,860円)、生春巻・揚げ春巻・青パパイヤのサラダ・サーモンのマリネ・空芯菜・ゴーヤと鶏の炒め・蓮の茎の前菜6種、フォーは鶏かチャーシュー (海老・牛は+100〜150円)、デザート、ベトナムコーヒーか蓮茶、パクチーは別添え、シェフと女性のもてなし、予約が必要。',
      confidence: 'high', sources: [SITE, TB, R + 'B513554382/', R + 'B517065465/', R + 'B519755873/', R + 'B521438000/', R + 'B522877118/', R + 'B525173341/', R + 'B526388850/', R + 'B526955837/', R + 'B531199062/', R + 'B532759642/', R + 'B534149688/', R + 'B534188477/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hosts explain each dish; no vegetarian or vegan changes; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川久保田町56-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news for November 2026); Tabelog reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.029063, 135.788793); cross-checked: GSI 京都府京都市左京区北白川久保田町56番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534188477/', R + 'B519755873/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Enjoy" 11-dish lunch set (starters, pho, desserts, drink)', '¥2,860', 'Lunch', 'ask', 'no', 'August 2026.', 'vietnamese_set'),
      it('', '', 'Pho upgrade: shrimp or beef', '+¥100–150', 'Lunch', 'ask', 'no', 'December 2025; August 2026.', 'pho'),
    ] }, {
    cuisine: '白川疏水沿いの家で、京野菜を使いフレンチの要素も入れたベトナム南部の料理 (公式サイト、2025〜2026年の口コミ)・11品の「Enjoy」ランチ2,860円。葉の形の皿に生春巻、揚げ春巻、青パパイヤのサラダ、サーモンのマリネ、空芯菜、ゴーヤと鶏の炒め、蓮の茎の6種の前菜、フォー (鶏かチャーシュー、海老や牛は+100〜150円)、デザート、ベトナムコーヒーか蓮茶 (2025〜2026年の口コミ)・パクチーは別添え・夜はコース、バインセオ、2026年11月中旬から季節の「越南フォー鍋」(公式サイト)',
    neighborhood: '北白川、白川疏水のそば。銀閣寺道バス停から徒歩3分',
    gf_detail: '要確認: 米の麺のフォーやライスペーパーの生春巻だが、揚げ春巻、たれ、デザートの小麦については書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ベジタリアン・ヴィーガンには対応できず、出汁に肉を使うので肉抜きもできない (食べログ)。',
    notes: '[ベトナム料理・北白川、疏水沿いの家のベトナムフレンチ] 哲学の道に近い白川疏水沿いの白い家の小さなベトナムフレンチ。きれいな前菜6種、やさしいコラーゲンたっぷりのフォー、デザートの11品のランチが約2,900円、京都の農園の野菜で。ベトナムの話をしてくれる温かいもてなし。ベジタリアン・ヴィーガンの対応はなし。予約を。火曜ほか休み。',
  });
}

// ================================================================ 日本料理 藤井
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26030328/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto-fujii.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_nihon_ryori_fujii_ginkakuji', name: '日本料理 藤井 (Nihon Ryori Fujii)', category: 'OMNI',
    lat: 35.024661, lng: 135.795646, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the shop asks for allergies and dislikes at booking (official site); courses include tempura (sesame-tofu tempura is a signature) and soy- and dashi-based dishes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every meal starts from a kombu-and-bonito dashi (official site; January 2025); fish courses such as hamo and sea bream.',
    hours_raw: 'Official site: last entry 11:30–13:30 for lunch and 17:00–20:00 for dinner (Tabelog: 11:30–15:00, 17:00–22:00); closed Wednesday. Book online or by phone; tell the shop about allergies, dislikes and wishes when booking. Kaiseki at three prices — ¥8,000, ¥15,000 and ¥20,000+ — plus consumption tax and a 10% service charge (official site). Cancellation fees: 30% two days before, 50% the day before, 100% on the day (official site). 18 seats: counter and private rooms (one for 4; up to 20). Non-smoking. Cards (Visa, Master) and QR; no e-money. No parking. A renovated old house a minute from the Philosopher\'s Path; 7 min walk from Honen-in, 8 min from Ginkaku-ji (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Philosopher\'s Path, below Ginkaku-ji — 1 min from the Minamidacho bus stop',
    cuisine: 'Seasonal Kyoto kaiseki that begins with a cup of dashi, in an old house by the Philosopher\'s Path (official site; 2023–2026 reviews) · no fixed menu — courses change monthly at ¥8,000, ¥15,000 and ¥20,000+ (plus tax and 10% service) (official site) · signature fried sesame tofu; hamo and eel in summer; firefly squid, bamboo shoots and cherry salmon in spring; sea bream rice with sesame sauce; a New Year appetizer platter (2024–2026 reviews) · house shibazuke pickles for sale (July 2026); a separate pudding shop, 日本料理 藤井のぷりん, on Shijo-Teramachi (Tabelog)',
    website: SITE, gmaps: gm('日本料理 藤井 浄土寺上南田町'), menu_url: SITE,
    notes: '[Kaiseki · Philosopher\'s Path, dashi first] A calm kaiseki restaurant in a renovated house a minute from the Philosopher\'s Path, where every meal opens with a cup of dashi: monthly courses from ¥8,000 at lunch, with fried sesame tofu and summer hamo the dishes people remember, at a counter facing the chef or in rooms overlooking maples. Reviewers mention a Michelin star (2024–2025). Plus 10% service; cancellation fees. Closed Wednesday.',
    chef_bio: { chef_name: '藤井 孝之輔', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site, 藤井 孝之輔 trained at 高台寺 和久傳 and 櫻川, became head chef of 水円 in Gion-Yasaka, and opened 日本料理 藤井 near Ginkaku-ji in February 2018; the hobbies listed are skiing, futsal and driving. The site describes the cooking as "質実、枯淡" — plain and austere — for newcomers to Japanese food and connoisseurs alike. Reviewers from 2023 to 2026 describe a stylishly renovated old house where every table looks onto seasonal plants, a counter facing the chef, careful tableware, and a one-Michelin-star rating (February 2024; January 2025).',
      philosophy: 'From the site: "日本料理 藤井での食事のはじまりは、出汁から。全ての料理の礎です。" (a meal here begins with dashi — the foundation of every dish).',
      specialty: 'Fried sesame tofu; hamo.',
      anecdotes: [
        { text: 'January 2025: "Upon sitting down, I was first served today\'s dashi (broth), which I believe was made with kombu kelp and katsuo (bonito)."', source: R + 'B459412515/' },
        { text: 'February 2024: "Points were deducted for not accepting invoices and phone responsiveness, but the taste is undoubtedly exceptional."', source: R + 'B479070039/' },
      ],
      japanese_sources_summary: '公式サイト: 日本料理 藤井、食事のはじまりは出汁から、全ての料理の礎、おしながきはなく月ごとに内容をかえる、苦手なもの・アレルギー・要望は予約時に、質実・枯淡、銀閣寺・哲学の道の近く、左京区浄土寺上南田町九十一、水曜定休、最終入店 11:30〜13:30・17:00〜20:00、会席は8,000円・15,000円・20,000円〜、別途消費税とサービス料10%、キャンセル料 (2日前30%、前日50%、当日100%)、駐車場なし、哲学の道より徒歩1分、店主 藤井 孝之輔は「高台寺 和久傳」「櫻川」などで修行し祇園・八坂「水円」の料理長を経て2018年2月に開店、趣味はスキー・フットサル・ドライブ。食べログ: 日本料理 藤井、18席、個室 (4名、20名まで)、禁煙、カード (VISA・Master)・QR可、電子マネー不可、姉妹店に日本料理 藤井のぷりん (四条寺町)。口コミ (2023年10月〜2026年7月、英語): 最初に昆布と鰹の出汁、胡麻豆腐の天ぷら、鱧、鰻、ホタルイカ、筍、桜鱒、鯛の胡麻だれご飯、お正月の八寸、紅葉の見える個室、ミシュラン一つ星という声、柴漬けの販売、インボイスと電話対応で減点という声。',
      confidence: 'high', sources: [SITE, TB, R + 'B459412515/', R + 'B473752247/', R + 'B477422540/', R + 'B479070039/', R + 'B485039753/', R + 'B495703810/', R + 'B497564819/', R + 'B512049005/', R + 'B518120995/', R + 'B525576788/', R + 'B531154431/', R + 'B531448684/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; state allergies when booking; 10% service; cancellation fees.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺上南田町91',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (June 2026 menu notice); Tabelog reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.024661, 135.795646); cross-checked: GSI 京都府京都市左京区浄土寺上南田町91番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Official site: three kaiseki prices, plus consumption tax and 10% service.', last_checked: TODAY, items: [
      it('会席', '', 'Kaiseki course', '¥8,000', 'Course', 'ask', 'no', 'Official site; plus tax and 10% service.', 'kaiseki_course'),
      it('会席', '', 'Kaiseki course', '¥15,000', 'Course', 'ask', 'no', 'Official site; plus tax and 10% service.', 'kaiseki_course'),
      it('会席', '', 'Kaiseki course', 'from ¥20,000', 'Course', 'ask', 'no', 'Official site; plus tax and 10% service.', 'kaiseki_course'),
    ] }, {
    cuisine: '哲学の道そばの古い家で、一杯の出汁から始まる京都の季節の会席 (公式サイト、2023〜2026年の口コミ)・おしながきはなく月替わりで、8,000円・15,000円・20,000円〜 (別途税とサービス料10%) (公式サイト)・名物の胡麻豆腐の揚げ物、夏は鱧と鰻、春はホタルイカ・筍・桜鱒、鯛の胡麻だれご飯、お正月の八寸 (2024〜2026年の口コミ)・自家製の柴漬けの販売 (2026年7月)。姉妹店のプリンの店「日本料理 藤井のぷりん」が四条寺町に (食べログ)',
    neighborhood: '哲学の道、銀閣寺の下。南田町バス停から徒歩1分',
    gf_detail: '要確認: アレルギーや苦手なものは予約時に伝える (公式サイト)。名物の胡麻豆腐の天ぷらなど揚げ物や、醤油・出汁の料理がある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 食事は昆布と鰹の出汁から始まる (公式サイト、2025年1月)。鱧や鯛などの魚の料理。',
    notes: '[会席・哲学の道、まず出汁から] 哲学の道から1分の改装した家の落ち着いた会席の店で、食事は一杯の出汁から。昼は8,000円からの月替わりのコース、胡麻豆腐の揚げ物と夏の鱧が印象に残る。カウンターで料理人と向き合うか、紅葉の見える個室で。ミシュラン一つ星という声も (2024〜2025年)。サービス料10%、キャンセル料あり。水曜休み。',
  });
}

// ================================================================ DiDi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001822/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_didi_mototanaka', name: 'レストラン ディディ (DiDi)', category: 'OMNI',
    lat: 35.035368, lng: 135.781236, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Indian-style curries with white or brown rice, but roux, cakes and the Thai and green curries are not described for wheat (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: a vegetable curry set is on the menu (May 2023), but the korma uses fresh cream and other curries are chicken (2022–2023 reviews).',
    hours_raw: 'Tabelog: 11:00–22:00 (last order 21:30); closed Wednesday and Thursday (the next day when either is a public holiday). No reservations. 18 seats; non-smoking; children welcome; take-away. Cash only: no cards, e-money or QR (Tabelog). 1 min walk from Eizan Railway Mototanaka Stn.',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Mototanaka — 1 min walk from Eizan Railway Mototanaka Stn',
    cuisine: 'A long-standing neighbourhood curry house by Mototanaka Station, Indian-leaning with a few Thai curries (2016–2025 reviews) · chicken curry; North Indian korma of coconut and fresh cream, regular ¥1,100, large ¥1,200 (September 2022); vegetable curry set ¥1,000 with achaar (May 2023); Thai curry; green curry with konjac (April 2025) · white or brown rice; a meat-and-potato side; flowers on every table (2023) · home-made cakes: carrot cake with nuts, apple crumble (April 2025)',
    website: null, gmaps: gm('DiDi 元田中 カレー'), menu_url: null,
    notes: '[Curry · Mototanaka, a decades-old neighbourhood curry house] A small curry house a minute from Mototanaka Station on the Eizan line: well-balanced Indian-style chicken, korma and vegetable curries with white or brown rice, a green curry with konjac, and home-made carrot cake and apple crumble. A diner back after 20 years found the taste and staff unchanged (October 2025); another found it just okay (October 2023). Cash only; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2016 to 2025 describe a long-running local curry house with flowers on each table and the same staff over decades; one diner returning after about 20 years found it unchanged (October 2025).',
      philosophy: null,
      specialty: 'Chicken curry; korma.',
      anecdotes: [
        { text: 'October 2025: "I visited after about 20 years… It\'s spicy, but the heat dissipates quickly… The pleasant spiciness and the familiar atmosphere created by the same staff made me emotional."', source: R + 'B516215076/' },
        { text: 'September 2022: "The balance of spices is excellent; nothing stands out excessively, yet the spices are aromatic."', source: R + 'B453856312/' },
        { text: 'October 2023: "It\'s just okay."', source: R + 'B473121326/' },
      ],
      japanese_sources_summary: '食べログ: レストラン ディディ (DiDi)、インドカレー・インド料理、左京区田中大久保町22、叡山電鉄元田中駅から徒歩1分、11:00〜22:00 (L.O. 21:30)、水・木休み (祝日なら翌日)、予約不可、18席、禁煙、子供可、持ち帰り可、カード・電子マネー・QR不可。口コミ (2016年5月〜2025年10月、英語): チキンカレー、北インドのコルマ (ココナッツと生クリーム、並1,100円・大1,200円)、野菜カレーのセット1,000円とアチャール、タイカレー、こんにゃく入りのグリーンカレー、白米か玄米、肉じゃがのような付け合わせ、テーブルに花、キャロットケーキ、アップルクランブル、20年ぶりでも同じ味と同じスタッフという声、まあまあという声、アチャールが酸っぱいという声。',
      confidence: 'low', sources: [TB, R + 'B445929457/', R + 'B453856312/', R + 'B461672742/', R + 'B473121326/', R + 'B504473172/', R + 'B516215076/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local curry house; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中大久保町22',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing; latest review October 2025.' },
    pin_source: `Tabelog ${TB} (35.035368, 135.781236); cross-checked: GSI 京都府京都市左京区田中大久保町22番地 (lot) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B453856312/', R + 'B461672742/'],
    price_note: 'Prices from 2022–2023 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'North Indian korma curry (regular / large)', '¥1,100 / ¥1,200', 'Curry', 'ask', 'no', 'September 2022.', 'curry'),
      it('', '', 'Vegetable curry set with achaar', '¥1,000', 'Curry', 'ask', 'ask', 'May 2023.', 'curry'),
    ] }, {
    cuisine: '元田中駅そばの昔からの町のカレー店。インド寄りでタイカレーも少し (2016〜2025年の口コミ)・チキンカレー、ココナッツと生クリームの北インドのコルマ 並1,100円・大1,200円 (2022年9月)、アチャール付きの野菜カレーのセット1,000円 (2023年5月)、タイカレー、こんにゃく入りのグリーンカレー (2025年4月)・白米か玄米、肉じゃがのような付け合わせ、テーブルに花 (2023年)・自家製ケーキのナッツ入りキャロットケーキ、アップルクランブル (2025年4月)',
    neighborhood: '元田中。叡山電鉄元田中駅から徒歩1分',
    gf_detail: '要確認: 白米か玄米のインド風カレーだが、ルー、ケーキ、タイカレーやグリーンカレーの小麦については書かれていない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認: 野菜カレーのセットがある (2023年5月) が、コルマは生クリーム入りで、ほかのカレーは鶏 (2022〜2023年の口コミ)。',
    notes: '[カレー・元田中、昔からの町のカレー店] 叡山電鉄の元田中駅から1分の小さなカレー店。バランスのよいインド風のチキン、コルマ、野菜のカレーを白米か玄米で、こんにゃく入りのグリーンカレー、自家製のキャロットケーキやアップルクランブルも。20年ぶりでも味もスタッフも変わらないという声 (2025年10月) や、まあまあという声 (2023年10月) も。現金のみ、水・木休み。',
  });
}

// ================================================================ ポンジーズテーブル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018490/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ameblo.jp/pongeestable/';
  const A = day(['11:30', '21:00']), W = day(['11:00', '21:00']);
  put({
    id: 'kyoto_pongees_table_senbon', name: 'ポンジーズテーブル (Pongee\'s Table)', category: 'OMNI',
    lat: 35.031536, lng: 135.742225, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pancakes, fried shrimp, aji and oyster fry, karaage, gratin and demi-glace (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, fried meat and fish, omurice, custard pancakes (2022–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Sat, Sun 11:30–21:00; Wed 11:00–21:00; closed Friday and irregular days (see the blog). Lunch 11:30–15:00; tea time 11:30–21:00 and dinner 18:00–21:00 (last orders 20:00). Reservations taken. 18 seats: a 4-seat counter, tables and two low tatami tables. No smoking until 15:00, then a designated smoking area. Children welcome. Cash only: no cards, e-money or QR (Tabelog). Waits at busy times (July 2024). On Senbon-dori just north of Imadegawa, at the Senbon-Kamidachiuri bus stop.',
    hours: { 0: A, 1: A, 2: W, 3: A, 5: A, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senbon-Kamidachiuri, north of Kitano Tenmangu — at the bus stop',
    cuisine: 'A yoshoku-and-pancake café in a renovated Kyoto townhouse, about 15 years on Senbon-dori (2022–2026 reviews) · combination plates — pick two or three of about ten: demi-glace hamburg, fried shrimp, ginger pork, karaage, aji fry, oyster fry, chicken with green-onion ponzu — with miso soup and multigrain rice, about ¥1,400 (May 2026); a "night lunch" version in the evening (July 2026) · hamburg omurice with demi-glace and cheese; curry and tomato gratin; shiso pasta (2023–2026) · pancakes such as custard brûlée; hojicha latte +¥200 with a meal (2023–2024)',
    website: SITE, gmaps: gm('ポンジーズテーブル 千本'), menu_url: null,
    notes: '[Yoshoku · Senbon-Imadegawa, pick-your-own plates and pancakes] A homely yoshoku café in a renovated townhouse on Senbon-dori near Kitano Tenmangu: pick two or three of hamburg, fried shrimp, ginger pork or karaage with rice and miso soup for about ¥1,400, or hamburg omurice and pancakes. Diners mention waits and hard-to-flag service (March 2023, July 2024) and so-so coffee (November 2023). Cash only; closed Friday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2022 to 2026 describe a renovated Kyoto townhouse with chair and tatami seating, a home-like feel, and a fifteenth anniversary in July 2026. A regular has logged 17 visits since 2015 (Tabelog).',
      philosophy: null,
      specialty: 'Choose-your-sides plate; hamburg omurice.',
      anecdotes: [
        { text: 'July 2024: "I had to wait quite a while outside the restaurant, and even after entering, I had to wait to place my order and for the food to arrive."', source: R + 'B519525425/' },
        { text: 'July 2026: the "night lunch" of kara-age, ebi fry and hamburg "felt like an adult version of a kids\' meal, which was fun… It seems they are celebrating their 15th anniversary!"', source: R + 'B532948908/' },
        { text: 'March 2023: "The taste and presentation were good, but the service was lacking. It was hard to get their attention."', source: R + 'B462853777/' },
      ],
      japanese_sources_summary: '食べログ: ポンジーズテーブル、パンケーキ・洋食、上京区千本通五辻上る牡丹鉾町567-1、市バス千本上立売すぐ、月火木土日 11:30〜21:00・水 11:00〜21:00、金曜休み、不定休はブログで、ランチ11:30〜15:00、ティータイム11:30〜21:00、ディナー18:00〜21:00 (L.O. 20:00)、予約可、18席 (カウンター4、テーブル、座卓2)、15時まで禁煙・以降は喫煙所、子供可、カード・電子マネー・QR不可。口コミ (2022年3月〜2026年7月、英語): 10種ほどから2〜3品選ぶ盛り合わせ (デミのハンバーグ、海老フライ、生姜焼き、唐揚げ、アジフライ、カキフライ、鶏のねぎポン酢) と味噌汁と雑穀米で約1,400円、夜の「夜ランチ」、デミのハンバーグオムライスとチーズ、カレーとトマトのグラタン、大葉のパスタ、カスタードブリュレのパンケーキ、ほうじ茶ラテ+200円、京町家を改装、15周年、待ち時間が長いという声、店員を呼びにくいという声、コーヒーはいまひとつという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B288298683/', R + 'B461991168/', R + 'B462853777/', R + 'B465324127/', R + 'B475032424/', R + 'B476448700/', R + 'B493781345/', R + 'B519525425/', R + 'B521964781/', R + 'B527482736/', R + 'B532948908/'] },
    cultural_comfort: { level: 'japanese', note: 'Homely local café; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区千本通五辻上る牡丹鉾町567-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.031536, 135.742225); cross-checked: GSI 京都府京都市上京区牡丹鉾町567番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527482736/', R + 'B476448700/'],
    price_note: 'Prices from 2023–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Combination plate (hamburg + two fried shrimp), salad, rice, miso soup', '¥1,400', 'Plates', 'no', 'no', 'May 2026.', 'yoshoku_plate'),
      it('', '', 'Hojicha latte (with a meal)', '+¥200', 'Drinks', 'ask', 'no', 'December 2023.', 'latte'),
    ] }, {
    cuisine: '千本通で15年ほどになる、京町家を改装した洋食とパンケーキのカフェ (2022〜2026年の口コミ)・10種ほどから2〜3品選ぶ盛り合わせ。デミのハンバーグ、海老フライ、生姜焼き、唐揚げ、アジフライ、カキフライ、鶏のねぎポン酢に味噌汁と雑穀米で約1,400円 (2026年5月)。夜は「夜ランチ」(2026年7月)・デミとチーズのハンバーグオムライス、カレーやトマトのグラタン、大葉のパスタ (2023〜2026年)・カスタードブリュレなどのパンケーキ。食事とほうじ茶ラテ+200円 (2023〜2024年)',
    neighborhood: '千本上立売、北野天満宮の北。バス停すぐ',
    gf_detail: 'グルテンフリーではない: パンケーキ、海老・アジ・カキのフライ、唐揚げ、グラタン、デミグラス (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ハンバーグ、肉や魚の揚げ物、オムライス、カスタードのパンケーキ (2022〜2026年の口コミ)。',
    notes: '[洋食・千本今出川、選べるおかずとパンケーキ] 北野天満宮近くの千本通の改装した町家の家庭的な洋食カフェ。ハンバーグ、海老フライ、生姜焼き、唐揚げから2〜3品選んでご飯と味噌汁で約1,400円、ハンバーグオムライスやパンケーキも。待ち時間が長く店員を呼びにくいという声 (2023年3月、2024年7月) や、コーヒーはいまひとつという声 (2023年11月) も。現金のみ、金曜休み。',
  });
}

save();
