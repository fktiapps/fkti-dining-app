// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 13.
//   + 洋風居酒屋ざきやま Yofu Izakaya Zakiyama (Western-style izakaya counter near Shijo-Karasuma, open to 2:00)  [core]
//   + 菓子wabiya 西花見小路店 Kashi wabiya (rice-flour crêpes and cheese soufflé in a Gion alley; 2025)          [core]
//   + ぎをん今 Gion Kon (Gion kappo: referral-only at night; eel and turtle-ramen lunches, hot-pot dinners)     [notable]
//   + 中満 Nakamitsu (6-seat kappo south of the Imperial Palace; called Michelin-starred in 2025; since 2024)         [notable]
//   - ケンゾーエステイトワイナリー 祇園店 26026031 skipped (brand in data)
//   Same-name counts first: ざきやま 1; 菓子wabiya — 3 shops on its own site (大阪髙島屋店, 京都髙島屋店, 西花見小路店),
//   the sweets arm of 侘家古暦堂 (one restaurant plus wabiya and 薬味wabiya on its site), none in data — a small group;
//   今 and 中満 — one each; ケンゾーエステイトワイナリー — 祇園, 六本木ヒルズ and 大阪 in our crawl, 銀座 in data.
//   Taken in queue order on 2026-11-05: core 26039945, 26026031 (skip), 26043851; notable 26001275, 26041739. None of
//   the four drafted is in data/kyoto.json by name or address.
//   Pins: 中満's Tabelog point is 3.8 m from kyoto_cucina_italiana_todo (三本木五丁目496-3, the next lot), so 中満 is moved
//   ~5.5 m south. ぎをん今's GSI lot point (祇園町南側570, a large lot) is 155 m away, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026031', 'ケンゾーエステイトワイナリー 祇園店: a same-concept branch of a brand already in data — tokyo_kenzo_estate_winery_ginza ("KENZO ESTATE WINERY 銀座店"); our crawls also list 六本木ヒルズ店 (13162087) and 大阪 (27061846)');

// ================================================================ 洋風居酒屋ざきやま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039945/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yofu-izakaya-zakiyama2026.com';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_yofu_izakaya_zakiyama', name: '洋風居酒屋ざきやま (Yofu Izakaya Zakiyama)', category: 'OMNI',
    lat: 35.002563, lng: 135.763604, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative Italian-style plates, pasta and risotto (half sizes), fritters and gratin; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable plates such as broccoli aglio e olio, roasted spring cabbage and water-eggplant salad appear, but most dishes are fish, Omi beef, duck or cheese (2026 reviews).',
    hours_raw: '18:00–2:00 (food last order 1:30); closed Wednesday; closing days not fixed (Tabelog; official site). Bookings online; ¥3,000 a head for cancellations within 24 hours (official site). Seat charge ¥500 including a starter (Tabelog). 14 counter seats; e-cigarettes only; cards, IC cards and QR (Tabelog). On Ayanokoji, about 5 min from Hankyu Karasuma Stn (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji near Shijo-Karasuma — 5 min from Hankyu Karasuma Stn',
    cuisine: 'Creative Italian-style izakaya: market fish, Omi beef, half-size pasta and risotto, over 50 whiskies (mainly Japanese) and wines (Tabelog; official site) · omakase course ¥3,000 and chef’s course ¥6,000 (official site) · low-temperature duck loin, spare ribs, sea bass carpaccio with garlic sauce, sea-bream milt sauté, soft-shell crab fritters, burrata, half-size carbonara, hamo and tsurumurasaki pasta, anago peperoncino, gratin · tiramisu, Basque cheesecake (2026 reviews)',
    website: SITE, gmaps: gm('洋風居酒屋ざきやま'), menu_url: SITE,
    notes: "[Western-style izakaya · Ayanokoji near Shijo-Karasuma, open to 2 am] A dim, stylish 14-seat counter serving creative Italian plates to go with drinks — duck loin, carpaccio, fritters, half-size pastas — and a deep shelf of Japanese whisky, until 2 in the morning. Courses from ¥3,000; ¥500 seat charge. Easy for solo diners or a second stop. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 4 September 2023 (Tabelog). Per the operator: seasonal creative Italian cooking with Omi beef and fresh seafood bought daily at the market; half-size pasta and risotto; over 50 whiskies, mainly Japanese.',
      philosophy: null, specialty: 'Half-size pasta; Omi beef; Japanese whisky.',
      anecdotes: [
        { text: 'A March 2026 regular called the tiramisu "absolutely exquisite".', source: R + 'B483164700/' },
        { text: 'A reservation was possible "even late at night" — September 2026.', source: R + 'B536419279/' },
        { text: 'Half portions made it easy to order alone at the counter — April 2026.', source: R + 'B526887453/' },
      ],
      japanese_sources_summary: '公式サイト (yofu-izakaya-zakiyama2026.com): 洋風居酒屋ざきやま、モダンな空間で楽しむ洋風料理とお酒、毎日市場で仕入れる鮮魚、牛肉のロースト、ハーフサイズ、ウイスキーと日本酒、18:00〜26:00 (日月火木金土・祝)、おまかせコース3,000円、シェフおすすめコース6,000円、24時間前を過ぎたキャンセルは1人3,000円。食べログ: 居酒屋・イタリアン、下京区綾材木町201-2、阪急烏丸駅から徒歩約5分、月火木〜日・祝 18:00〜2:00 (料理 L.O. 1:30)、水曜休み、不定休、席料 (突き出し込み) 500円、14席、電子たばこのみ可、カード・電子マネー・QR 可、2023年9月4日オープン、近江牛と鮮魚の創作イタリアン、国産中心に50種以上のウイスキー。口コミ (2026年3〜9月、英語): 鴨ロース、スペアリブ、カルパッチョ、ソフトシェルクラブのフリット、ハーフのカルボナーラ、鱧のパスタ、ティラミス、バスクチーズケーキ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B483164700/', R + 'B513948943/', R + 'B524250313/', R + 'B524529475/', R + 'B525405024/', R + 'B525515921/', R + 'B526887453/', R + 'B527494683/', R + 'B530328246/', R + 'B536419279/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; book online; ¥500 seat charge; late opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾材木町201-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002563, 135.763604); cross-checked: GSI 京都府京都市下京区綾材木町201番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Course prices from the official site (read 2026-11-05); à la carte prices not read.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course (2 starters, pasta, risotto, main, dessert)', '¥3,000', 'Courses', 'no', 'no', '', 'omakase_3000'),
      it('シェフおすすめコース', '', 'Chef’s recommended course', '¥6,000', 'Courses', 'ask', 'no', '', 'chef_course_6000'),
      it('', '', 'Seat charge incl. starter', '¥500', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '創作イタリアンの洋風居酒屋: 市場の魚、近江牛、ハーフサイズのパスタとリゾット、国産中心のウイスキー50種以上とワイン (食べログ、公式サイト)・おまかせコース3,000円、シェフおすすめコース6,000円 (公式サイト)・低温調理の鴨ロース、スペアリブ、ガーリックソースのすずきのカルパッチョ、鯛の白子のソテー、ソフトシェルクラブのフリット、ブッラータ、ハーフのカルボナーラ、鱧とつるむらさきのパスタ、穴子のペペロンチーノ、グラタン・ティラミス、バスクチーズケーキ (2026年の口コミ)',
    neighborhood: '四条烏丸近くの綾小路。阪急烏丸駅から徒歩5分',
    gf_detail: '要確認。創作イタリアンの皿、パスタとリゾット (ハーフあり)、フリット、グラタン。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。ブロッコリーのアーリオオーリオ、春キャベツのロースト、水なすのサラダなど野菜の皿もあるが、多くは魚、近江牛、鴨、チーズ (2026年の口コミ)。',
    notes: '[洋風居酒屋・四条烏丸の綾小路、深夜2時まで] 薄暗くおしゃれな14席のカウンターで、酒に合う創作イタリアンの皿 (鴨ロース、カルパッチョ、フリット、ハーフのパスタ) と国産ウイスキーの棚。深夜2時まで。コースは3,000円から、席料500円。一人や2軒目にも。水曜休み。',
  });
}

// ================================================================ 菓子wabiya 西花見小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043851/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kashi.wabiya.com/'; const PARENT = 'https://wabiya.com/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_kashi_wabiya_nishihanamikoji', name: '菓子wabiya 西花見小路店 (Kashi wabiya Nishi-Hanamikoji)', category: 'OMNI',
    lat: 35.00322, lng: 135.774512, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A May 2026 reviewer says the crêpes are made from rice flour, but the shop does not say so and the cookies, tuiles and nougat are not described; no gluten information (2026 reviews; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the signatures are egg-and-cheese soufflé, egg pudding cake and crêpes with caramel, cream and ice cream (official site; 2026 reviews).',
    hours_raw: 'Shop 10:00–17:00; café 11:00–17:00 (last order 16:30); closed Wednesday (Tabelog). Café seats can be booked (Tabelog; May 2026). Six counter seats in the back, facing the crêpe griddle; English menu; non-smoking; cards, IC cards and PayPay (Tabelog). In an alley just west of Hanamikoji, south of Shijo; 5 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'An alley just west of Hanamikoji, south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Gion sweets shop and six-seat crêpe counter from the Hanamikoji restaurant 侘家古暦堂 (official site; Tabelog) · "Gohobi" (reward) crêpes made to order with caramel finished on the spot: red-egg caramel, hojicha and Tanba chestnut; savoury "gochiso" crêpes such as hojicha with prosciutto and persimmon, or fig, cheese and basil (official site; 2026 reviews) · cheese soufflé "chef’s hat" ¥303, Tanba-chestnut version ¥454 (autumn); red-egg pudding cake; tuiles, nut cookies, amber nougat bar (official site) · kakigori in summer; coffee charcoal-roasted by Ogawa Coffee (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('菓子wabiya 西花見小路店'), menu_url: SITE,
    notes: "[Sweets & crêpes · Gion, off Hanamikoji] A small sweets shop in a quiet Gion alley from the 20-year-old Hanamikoji restaurant 侘家古暦堂, with six counter seats at the back where crêpes are cooked to order and finished with caramel made in front of you — chestnut and hojicha in autumn, or savoury prosciutto and persimmon. To take away: the 'chef's hat' cheese soufflé (¥303). Opened 2025. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Operator: 侘家古暦堂 (restaurant group); no person named'], origin: null,
      background: 'Opened 29 October 2025 (Tabelog). Per the official site: the sweets arm of 侘家古暦堂, a restaurant on Hanamikoji for 20 years, made by its head chef and a pâtissier together; shops at Osaka Takashimaya, Kyoto Takashimaya and this Nishi-Hanamikoji shop. The parent’s site also lists the restaurant 侘家古暦堂 祇園花見小路本店, wabiya and 薬味wabiya.',
      philosophy: 'Per the official site: "自然に、丹念に、素を活かす" — naturally and carefully, making the most of the ingredients.',
      specialty: 'Gohobi crêpes; chef’s-hat cheese soufflé.',
      anecdotes: [
        { text: 'A September 2026 return visitor came back just for the hojicha and chestnut crêpe — and finished it "in seconds".', source: R + 'B523492146/' },
        { text: 'Soon after opening the staff seemed unsteady and service slow until another person took over the crêpes — September 2026.', source: R + 'B536814438/' },
        { text: 'After the Miyako Odori, an April 2026 buyer found the staff helpful with a larger takeaway order.', source: R + 'B526709481/' },
      ],
      japanese_sources_summary: '公式サイト (kashi.wabiya.com): 菓子wabiya、京都花見小路で料理店を営む侘家古暦堂から、料理長とパティシエが対話を重ねたお菓子、自然に丹念に素を活かす、チーズスフレ 料理長の帽子 303円、丹波栗 454円 (秋限定)、赤たまごの匠プリンケーキ、薄玻璃チュイル、ナッツクッキー 祇園このみ、琥珀ヌガーバー、ご褒美クレープ (ほうじ茶 丹波栗、赤たまごキャラメル)、ご馳走クレープ ほうじ茶 生ハム&柿 (西花見小路店限定)、大阪髙島屋店・京都髙島屋店・西花見小路店。食べログ: スイーツ・クレープ・ガレット、東山区祇園町南側570-123、物販 10:00〜17:00、カフェ 11:00〜17:00 (L.O. 16:30)、水曜休み、予約可、6席 (カウンターのみ)、英語メニュー、禁煙、カード・電子マネー・PayPay 可、2025年10月29日オープン、小川珈琲の炭火焙煎コーヒー。口コミ (2026年4〜10月、英語): 米粉のクレープ、目の前で作るキャラメル、かき氷、無花果とチーズとバジルのクレープ。',
      confidence: 'medium', sources: [TB, SITE, PARENT, R + 'B523492146/', R + 'B526709481/', R + 'B527228853/', R + 'B527982127/', R + 'B533247003/', R + 'B536537358/', R + 'B536814438/', R + 'B537367537/', R + 'B538217088/', R + 'B538678875/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seats facing the griddle; book the café.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-123',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 news) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003220, 135.774512); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 62m; 18 m from kyoto_gion_matayoshi on the same lot (570-123); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Soufflé prices from the official site (with tax, read 2026-11-05); crêpe prices not read.', last_checked: TODAY, items: [
      it('チーズスフレ 料理長の帽子', '', 'Chef’s-hat cheese soufflé', '¥303', 'Cakes', 'ask', 'no', '', 'chef_hat_souffle'),
      it('チーズスフレ 料理長の帽子 丹波栗', '', 'Chef’s-hat cheese soufflé, Tanba chestnut (autumn)', '¥454', 'Cakes', 'ask', 'no', 'Until end of November 2026.', 'chef_hat_souffle_chestnut'),
      it('ご褒美クレープ 赤たまごキャラメル', '', 'Reward crêpe, red-egg caramel', '', 'Café', 'ask', 'no', '', 'gohobi_caramel'),
      it('ご馳走クレープ ほうじ茶 生ハム＆柿', '', 'Savoury crêpe, hojicha with prosciutto and persimmon (this shop only)', '', 'Café', 'ask', 'no', '', 'gochiso_persimmon'),
    ] }, {
    cuisine: '花見小路の料理店、侘家古暦堂のお菓子の店と6席のクレープのカウンター (公式サイト、食べログ)・注文ごとに焼き、目の前で作るキャラメルで仕上げるご褒美クレープ: 赤たまごキャラメル、ほうじ茶と丹波栗。ほうじ茶の生ハムと柿や、無花果とチーズとバジルのご馳走クレープも (公式サイト、2026年の口コミ)・チーズスフレ 料理長の帽子303円、丹波栗454円 (秋)、赤たまごの匠プリンケーキ、チュイル、ナッツクッキー、琥珀ヌガーバー (公式サイト)・夏はかき氷、小川珈琲の炭火焙煎コーヒー (食べログ、2026年の口コミ)',
    neighborhood: '四条の南、花見小路のすぐ西の路地。祇園四条駅から徒歩5分',
    gf_detail: '要確認。2026年5月の口コミにはクレープは米粉とあるが、店の説明にはなく、クッキー、チュイル、ヌガーの原材料も書かれていない。グルテンの情報はない (2026年の口コミ、公式サイト)。',
    vegan_detail: '実際にはヴィーガン不可。看板は卵とチーズのスフレ、卵のプリンケーキ、キャラメルやクリーム、アイスのクレープ (公式サイト、2026年の口コミ)。',
    notes: '[菓子とクレープ・祇園、花見小路のそば] 花見小路で20年続く料理店、侘家古暦堂の菓子の店で、祇園の静かな路地にある。奥の6席のカウンターでは注文ごとにクレープを焼き、目の前で作るキャラメルで仕上げる。秋は栗とほうじ茶、生ハムと柿の塩味のものも。持ち帰りは料理長の帽子の形のチーズスフレ (303円)。2025年開店、水曜休み。',
  });
}

// ================================================================ ぎをん今
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001275/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-kon.com/';
  const L = day(['12:00', '14:00']);
  put({
    id: 'kyoto_gion_kon', name: 'ぎをん今 (Gion Kon)', category: 'OMNI',
    lat: 35.002958, lng: 135.775531, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Unadon with its sauce, soft-shelled-turtle ramen, hot pots and kappo dishes on dashi; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, soft-shelled turtle, fish and beef dishes (official site; 2026 reviews).',
    hours_raw: 'Lunch in two sittings, 12:00 and 13:00, by booking (phone, Instagram DM or online); hot-pot dinner from 17:30 by booking; the evening kappo is referral-only (完全紹介制) and takes no bookings from new guests; closing days irregular — calendar on the official site (official site; 2026 reviews). 50% cancellation charge from three days before, 100% on the day (official site; Tabelog). Lunch about ¥5,000–10,000; hot-pot course from ¥10,000 (official site). 26 seats incl. counter, tatami and private rooms; private hire for 10 or more; separate smoking area; JCB, AMEX and Diners (official site; Tabelog). Takeaway eel sushi and inari, ordered ahead and collected at lunch (official site). Gion south of Shijo; 5 min from Gion-Shijo Stn (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo (Gion-machi Minamigawa) — 5 min from Gion-Shijo Stn',
    cuisine: 'Gion kappo that is "ichigen-san okotowari" at night, opening its doors at lunch and for hot-pot dinners (official site) · lunch: unadon with charcoal-grilled eel, soft-shelled-turtle (suppon) ramen, a mini eel course (2026 reviews) · hot-pot course from ¥10,000 (official site) · evening kappo à la carte for introduced guests: karasumi, matsutake dobin-mushi with hamo, fried abalone, Kagoshima or Kumamoto beef fillet, bamboo-shoot or eel rice (2026 reviews) · takeaway: eel sushi with a whole Hamanako eel ¥8,100 (half ¥4,320), two-bite inari ¥2,376 (official site)',
    website: SITE, gmaps: gm('ぎをん今 祇園'), menu_url: SITE,
    notes: "[Kappo · Gion, a referral-only house that opens at lunch] A long-established Gion kappo that only takes introduced guests at night — but anyone can book its two lunch sittings for a charcoal-grilled unadon or a soft-shelled-turtle ramen (about ¥5,000–10,000), or a hot-pot dinner from ¥10,000. Book by phone, Instagram or online; irregular closing days. Takeaway eel sushi made with a whole Hamanako eel.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per the official site: seasonal ingredients made by hand by its craftsmen; a long-established kappo where newcomers are declined ("一見さんお断り") and evening kappo is by introduction only. Per 2026 reviews: lunch was opened to everyone, and hot-pot dinners on the second floor can now be booked online.',
      philosophy: null, specialty: 'Unadon; suppon ramen; seasonal kappo.',
      anecdotes: [
        { text: 'A regular was taught again how to squeeze kabosu over the matsutake dobin-mushi — October 2026.', source: R + 'B485450958/' },
        { text: 'A first-timer invited in July 2026 found orders slow on a busy night but the owner’s warm personality charming.', source: R + 'B537920837/' },
        { text: 'A June 2026 couple split the lunch menu: unadon for the eel lover, suppon ramen for the other.', source: R + 'B530316404/' },
      ],
      japanese_sources_summary: '公式サイト (gion-kon.com): ぎをん今、四季折々の食材を職人が手作り、一見さんお断りの老舗割烹、東山区祇園町南側570-6、不定休、お昼ごはん 12:00〜・13:00〜 (2部制)、鍋の夜ごはん 17:30〜 (要予約)、夜の割烹料理は完全紹介制で予約不可、予算 ランチ5,000〜10,000円・鍋コース10,000円〜、カード (JCB・AMEX・Diners)、予約は Instagram DM も可、貸切10名以上、個室あり、分煙、キャンセルは3日前から50%・当日100%、お持ち帰り: 浜名湖産鰻の鰻寿し1本8,100円・半分4,320円、二口お稲荷2,376円。食べログ: 日本料理・うなぎ、祇園四条駅から徒歩5分、夜は予約のみ、26席、個室。口コミ (2026年4〜10月、英語): 鰻丼、すっぽんラーメン、鰻のミニコース、からすみ、松茸の土瓶蒸し、鮑の唐揚げ、牛フィレ、ランチは誰でも予約可、夜は紹介制。',
      confidence: 'medium', sources: [TB, SITE, R + 'B112698725/', R + 'B263672110/', R + 'B485450958/', R + 'B512379156/', R + 'B512508899/', R + 'B527212822/', R + 'B530316404/', R + 'B536674389/', R + 'B537402631/', R + 'B537920837/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch or the hot-pot dinner; evening kappo is by introduction only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (opening calendar) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002958, 135.775531); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 155m — beyond 150 m on a large lot, so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Takeaway prices and budget ranges from the official site (read 2026-11-05).', last_checked: TODAY, items: [
      it('鰻寿し', '', 'Eel sushi, a whole Hamanako eel (takeaway)', '¥8,100', 'Takeaway', 'ask', 'no', 'Half ¥4,320; order ahead.', 'unagi_zushi'),
      it('二口お稲荷', '', 'Two-bite inari (takeaway)', '¥2,376', 'Takeaway', 'ask', 'ask', 'Order ahead.', 'futakuchi_inari'),
      it('', '', 'Lunch: unadon or suppon ramen', '', 'Lunch', 'ask', 'no', 'About ¥5,000–10,000 (official budget).', 'lunch'),
      it('鍋コース', '', 'Hot-pot dinner course', '¥10,000~', 'Dinner', 'ask', 'no', 'Booking required.', 'nabe_course'),
    ] }, {
    cuisine: '夜は一見さんお断りの祇園の割烹で、昼と鍋の夜に門を開く (公式サイト)・昼: 炭火で焼く鰻の鰻丼、すっぽんラーメン、鰻のミニコース (2026年の口コミ)・鍋コース10,000円から (公式サイト)・紹介客向けの夜の割烹のアラカルト: からすみ、鱧入りの松茸の土瓶蒸し、鮑の唐揚げ、鹿児島や熊本の牛フィレ、筍ご飯や鰻ご飯 (2026年の口コミ)・持ち帰り: 浜名湖産の鰻を丸ごと使う鰻寿し8,100円 (半分4,320円)、二口お稲荷2,376円 (公式サイト)',
    neighborhood: '四条の南の祇園 (祇園町南側)。祇園四条駅から徒歩5分',
    gf_detail: '要確認。たれの鰻丼、すっぽんラーメン、鍋、出汁の割烹料理。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻、すっぽん、魚、牛肉の料理 (公式サイト、2026年の口コミ)。',
    notes: '[割烹・祇園、昼だけ門を開く紹介制の店] 夜は紹介客だけを迎える祇園の老舗割烹だが、2部制の昼は誰でも予約でき、炭火焼きの鰻丼やすっぽんラーメン (5,000〜10,000円ほど)、夜は1万円からの鍋も。予約は電話、Instagram、オンラインで。不定休。浜名湖産の鰻を丸ごと使った鰻寿しの持ち帰りも。',
  });
}

// ================================================================ 中満
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041739/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://nakamitsu-kyoto.com/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_nakamitsu', name: '中満 (Nakamitsu)', category: 'MOM_AND_POP',
    lat: 35.015078, lng: 135.760966, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. An omakase Kyoto course built on dashi, white miso and soy, with tempura; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase course of crab, fish, fugu and dashi (2024–26 reviews).',
    hours_raw: 'Dinner from 18:00, all guests starting together; Wednesday closed (irregular) (Tabelog; official site, which gives 17:00). Reservation only; online for the 18:00 start, by phone for other times, for one person or more than six (Tabelog). Omakase course ¥25,000 with tax (November–December 2024); 10% service (Tabelog). Junior-high age and up; shoes off — wear socks (Tabelog). 6 counter seats (a March 2026 reviewer heard of plans to grow to 8); private hire for up to 20; non-smoking; cards accepted (Tabelog). 5 min from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanbonki, south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'Kyoto omakase at a six-seat counter, mostly local seasonal ingredients chosen by the owner (official site; Tabelog) · one course, about ¥25,000 (2024 reviews) · dishes in 2024–26 reviews: steamed crab and egg custard, Awaji saba sushi, honmoroko, kōbako crab, white-miso soup with ebi-imo, grilled fugu milt, karasumi mochi, Akashi sea bream, steamed amadai with turnip, fig tempura, sakura-shrimp rice',
    website: SITE, gmaps: gm('中満 京都 三本木'), menu_url: null,
    notes: "[Kyoto kappo · south of the Imperial Palace, six seats and a Michelin star] A six-seat counter in a quiet street near the palace, opened in 2024 by a husband-and-wife team — the chef trained at Tomikoji Yamakishi and Anku; an August 2025 reviewer calls it Michelin-starred. One omakase of seasonal Kyoto cooking — crab, fugu milt, saba sushi — for about ¥25,000 + 10%. Shoes off; all guests start at 18:00. Closed Wednesday.",
    chef_bio: { chef_name: 'Keijiro Nakamitsu', roles: ['Owner-chef (September 2026 review; the official site says the owner chooses the ingredients)'], origin: 'Shiga Prefecture (an August 2026 review says the couple is from Shiga).',
      background: 'Opened 24 September 2024 (Tabelog), in the former premises of Hijiwata (November 2024 review). Per 2026 reviews: the owner-chef trained at Tomikoji Yamakishi and Anku; the shop is run by a husband-and-wife team, with a third staff member by August 2026; an August 2025 reviewer calls it Michelin-starred.',
      philosophy: 'Per the official site: seasonal ingredients, mostly local, selected by the owner; tradition given new life; heartfelt hospitality in a calm Japanese room.',
      specialty: 'Seasonal omakase; saba sushi.',
      anecdotes: [
        { text: 'A December 2024 diner found the dishes a bit salty, better with wine, and singled out the sakura-shrimp rice.', source: R + 'B496860616/' },
        { text: '"The couple who runs the restaurant were also wonderful, and I enjoyed our conversation." — January 2026.', source: R + 'B518245846/' },
        { text: 'Reservations can sometimes be had at short notice — January 2026.', source: R + 'B500308423/' },
      ],
      japanese_sources_summary: '公式サイト (nakamitsu-kyoto.com): 中満、御所南の日本料理、地元産を中心に店主自ら厳選した旬の素材、伝統に新たな息吹、前室からカウンターの部屋へ、中京区三本木五丁目496-2、17:00より (水曜不定休)、オンライン予約または電話。食べログ: 日本料理、丸太町駅から徒歩5分、18:00〜22:00、水曜休み、完全予約制、一斉スタート (オンラインは18時のみ)、6席 (カウンター)、貸切20人、サービス料10%、中学生以上で大人と同じ料理を食べられる方のみ、靴を脱いで入店、禁煙、カード可、2024年9月24日オープン。口コミ (2024年11月〜2026年9月、英語): おまかせ25,000円 (税込)、店主 Keijiro Nakamitsu と奥様、Tomikoji Yamakishi と Anku で修業、ミシュランの星付き (2025年8月の口コミ)、蒸し蟹と茶碗蒸し、淡路の鯖寿司、香箱蟹、白味噌の椀、ふぐの白子、桜海老ご飯、滋賀県出身の夫婦。',
      confidence: 'medium', sources: [TB, SITE, R + 'B495334744/', R + 'B496860616/', R + 'B500308423/', R + 'B511436939/', R + 'B518245846/', R + 'B518385232/', R + 'B524960602/', R + 'B526785472/', R + 'B534621316/', R + 'B537432479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; everyone starts at 18:00; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三本木5-496-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.015128, 135.760966), moved ~5.5 m south to 35.015078 because kyoto_cucina_italiana_todo (三本木五丁目496-3) is pinned 3.8 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区三本木町五丁目496番地 (lot) 22m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495334744/', R + 'B496860616/'],
    price_note: 'No menu read; course price from November–December 2024 reviews (tax included); 10% service per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Omakase dinner course', '¥25,000', 'Courses', 'ask', 'no', '2024 reviews; plus 10% service.', 'omakase'),
    ] }, {
    cuisine: '6席のカウンターの京料理のおまかせ。食材は地元産を中心に店主が厳選 (公式サイト、食べログ)・コースのみ、25,000円ほど (2024年の口コミ)・2024〜26年の口コミに出る料理: 蒸し蟹と茶碗蒸し、淡路の鯖寿司、もろこ、香箱蟹、海老芋の白味噌椀、ふぐの白子焼き、からすみ餅、明石の鯛、甘鯛のかぶら蒸し、無花果の天ぷら、桜海老ご飯',
    neighborhood: '御所南の三本木。丸太町駅から徒歩5分',
    gf_detail: '予約時に要確認。出汁、白味噌、醤油を土台にしたおまかせの京料理で、天ぷらも出る。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。蟹、魚、ふぐ、出汁のおまかせコース (2024〜26年の口コミ)。',
    notes: '[京料理・御所南、6席とミシュランの星] 御所近くの静かな通りにある6席のカウンターで、2024年開店。Tomikoji Yamakishi と Anku で修業した料理人が奥様と営む。2025年8月の口コミはミシュランの星付きと書く。旬の京料理のおまかせ一本 (蟹、ふぐの白子、鯖寿司など) で2万5千円ほど+10%。靴を脱いで上がり、全員18時スタート。水曜休み。',
  });
}

save();
