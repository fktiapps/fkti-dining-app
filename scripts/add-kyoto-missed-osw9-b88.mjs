// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 88.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 鮨 今井 — no 2025–26 review (latest March 2023)
//   + 志ぐれ Shigure (Kyoto bento and yudofu inside Maruyama Park)
//   - 焼菓子 ヒビノ — retail food shop (Greg 11-07 ruling): a take-home baked-goods shop opened November 2024, no seating listed,
//     no sourced founding history or GF/vegan options
//   + NATURE CURRY 創龍 Soryu (spice-curry counter at Higashiyama-Sanjo)
//   - ICHI no FUNAIRI The shop — Tabelog marks it temporarily closed; no 2025–26 review (latest August 2024)
//   + 京都串でん Kyoto Kushiden (kushiage and oden basement izakaya by City Hall)
//   - 肴と海鮮 ともしびセカンド — branch of a brand already in data: ともしび (隠れ酒場ともしび3rd; queue-status 26036332)
//   + 豆屋源蔵 Mameya Genzo (tofu and yuba Kyoto cuisine on a Kamo River deck; since 2010)
//   Brand checks: none of 志ぐれ, 創龍, 串でん or 豆屋源蔵 is in data or queue-status by name; no sister shop found for 豆屋源蔵
//   (ozmall, Hot Pepper, Walkerplus). None is a THAN or WILL brand. None is in a hotel.
//   Service charges from Tabelog's Japanese original: 志ぐれ 「無し」; 創龍, 串でん and 豆屋源蔵 have no section (豆屋源蔵 asks one drink
//   a person).
//   Pins (checked against main, hidden records included): 志ぐれ's address is "円山公園内" with no lot, and 豆屋源蔵's lot resolves only
//   to the town on GSI, so both use loc_approx 'single'; 豆屋源蔵 moved 1m W (5.5m from kyoto_nihon_ryori_sakuragawa); the rest
//   ≥ 21m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022611', 'no 2025–26 review (the latest fetched review is from March 2023)');
skip('26042147', 'retail food shop (Greg 11-07 ruling): 焼菓子 ヒビノ is a take-home baked-goods shop (opened November 2024; no seating listed); no sourced founding history and no sourced GF or vegan options');
skip('26035403', 'Tabelog marks it temporarily closed; no 2025–26 review (latest August 2024)');
skip('26040377', 'branch of a brand already in data: ともしび (隠れ酒場ともしび3rd; see queue-status 26036332)');

// ================================================================ 志ぐれ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005349/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.shigure.jp/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'kyoto_shigure_maruyama_park', name: '志ぐれ (Shigure)', category: 'OMNI',
    lat: 35.00486, lng: 135.779375, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu with condiments that include bonito flakes, vegetable tempura and yuba (December 2025 review); soy and dashi are likely.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The yudofu bento has tofu, yuba and vegetable tempura (December 2025 review), but the condiments include bonito flakes and dashi is likely.',
    hours_raw: 'Tue–Sun and holidays 11:00–22:00 (L.O. 21:00); closed Mondays (Tabelog). No cover charge (Tabelog Japanese original 「無し」). Cards, e-money and QR (Tabelog). 86 seats: 16 at tables and 70 on tatami; private rooms with tables; non-smoking (Tabelog; December 2025 review). Booking through the website (April 2026 review). Inside Maruyama Park beside Yasaka Shrine, 8 min from Gion-Shijo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, beside Yasaka Shrine — 8 min from Gion-Shijo Stn',
    cuisine: 'Kyoto bento and courses in Maruyama Park: the yudofu bento of hassun, layered yuba, vegetable tempura and yudofu with yukari rice (December 2025); the yudofu set ¥3,000 (February 2026); the Shigure, Hyotan and Maruyama bentos with free rice refills (2026); Kyoto courses of sea bream, duck, turnip and a crab kamameshi (January 2026); simmered sea-bream head with ponzu (April 2025); lunch about ¥3,000–5,000',
    website: WEB, gmaps: gm('志ぐれ 円山公園'), menu_url: null,
    notes: '[Kyoto cuisine · Maruyama Park] A large traditional restaurant inside Maruyama Park by Yasaka Shrine, serving colourful Kyoto bentos, yudofu sets and courses with park and cherry-blossom views; tatami rooms and private rooms with chairs. Lunch about ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A Kyoto restaurant inside Maruyama Park, used for sightseeing lunches and family gatherings (2025–26 reviews).',
      philosophy: null,
      specialty: 'Yudofu bento; Shigure bento.',
      anecdotes: [
        { text: 'A December 2025 guest in kimono booked a private room with chairs and turned the bento\'s vegetable tempura into a mini tempura bowl over the rice.', source: R + 'B519266598/' },
        { text: 'A January 2026 diner was offered free rice refills and, it being New Year, free ozoni.', source: R + 'B520135527/' },
        { text: 'A March 2026 visitor came in cherry-blossom season for tempura and a small hot pot with the blossoms outside.', source: R + 'B525984916/' },
      ],
      japanese_sources_summary: '食べログ: 志ぐれ、日本料理・鍋、東山区祇園町北側 円山公園内、京阪祇園四条駅から徒歩8分、火〜日・祝日 11:00〜22:00 (L.O. 21:00)、月曜休み、チャージなし、カード・電子マネー・QR 可、86席 (テーブル16、座敷70)、禁煙。口コミ (2025〜2026年、英語): 円山公園の中、八坂神社の近く、湯豆腐の弁当、湯豆腐の定食3,000円 (2026年2月)、Shigure の弁当、ご飯のおかわり無料、京料理のコース、桜の季節。',
      confidence: 'medium', sources: [TB, WEB, R + 'B504840962/', R + 'B519266598/', R + 'B520135527/', R + 'B522173878/', R + 'B522979783/', R + 'B525984916/', R + 'B527146170/', R + 'B531362360/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms with chairs available (December 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町北側円山公園内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004860, 135.779375); the address is "inside Maruyama Park" with no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522979783/'],
    price_note: 'Set price from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yudofu set', '¥3,000', 'Lunch', 'ask', 'ask', 'February 2026 review.', 'yudofu'),
      it('', '', 'Shigure bento', '', 'Lunch', 'ask', 'no', 'January and February 2026 reviews.', 'shigure_bento'),
    ] }, {
    cuisine: '円山公園の京都の弁当とコース: 八寸、湯葉、野菜の揚げ物、湯豆腐とゆかりご飯の湯豆腐の弁当 (2025年12月)、湯豆腐の定食3,000円 (2026年2月)、ご飯のおかわり無料の Shigure、Hyotan、Maruyama の弁当 (2026年)、鯛、鴨、かぶ、蟹の釜飯の京料理のコース (2026年1月)、鯛のあら炊きのポン酢 (2025年4月)、昼は3,000〜5,000円ほど',
    neighborhood: '円山公園、八坂神社のそば。祇園四条駅から徒歩8分',
    gf_detail: '要確認。かつお節を含む薬味の湯豆腐、野菜の揚げ物、湯葉 (2025年12月の口コミ)。醤油と出汁を使う可能性が高い。',
    vegan_detail: '要確認。湯豆腐の弁当に豆腐、湯葉、野菜の揚げ物 (2025年12月の口コミ)。薬味にかつお節、出汁を使う可能性が高い。',
    notes: '[京料理・円山公園] 八坂神社のそば、円山公園の中の大きな料理店。色とりどりの京都の弁当、湯豆腐、コースを公園や桜を眺めながら。座敷と椅子の個室。昼は3,000〜5,000円ほど。',
  });
}

// ================================================================ NATURE CURRY 創龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037059/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00']); const WE = day(['11:30', '17:00']);
  put({
    id: 'kyoto_nature_curry_soryu', name: 'NATURE CURRY 創龍 (Soryu)', category: 'OMNI',
    lat: 35.007246, lng: 135.778531, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries with cumin rice and fried vegetables (2025–26 reviews); whether the curries contain flour is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork curry and a keema of beef, pork and soy meat (February 2026 review).',
    hours_raw: 'Tue and Wed 11:30–15:00 (L.O. 14:30); Sat and Sun 11:30–17:00 (L.O. 16:30); closed Mon, Thu, Fri and holidays (Tabelog). Bookings are released to the next guest if late (Tabelog). PayPay only — no cards or e-money (Tabelog). 10 seats; non-smoking (Tabelog). 5 min from Higashiyama Stn (Tabelog).',
    hours: { 1: WD, 2: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — 5 min from Higashiyama Stn',
    cuisine: 'Spice curry with plenty of vegetables: three curries — domestic pork, a keema of beef, pork and soy meat, and one more — singly or as two or three on a plate (two for ¥1,600, November 2025), with cumin rice, fried lotus root, pepper and courgette and carrot salad (February 2026); chicken confit topping (March 2025); cheese pudding with cardamom syrup +¥200 (November 2025); craft cola',
    website: null, gmaps: gm('NATURE CURRY 創龍'), menu_url: null,
    notes: '[Curry · Higashiyama-Sanjo] A bright ten-seat spice-curry counter near Awata Shrine: gentle, vegetable-rich pork and keema curries on cumin rice, cardamom cheese pudding, and an owner fond of jokes. About ¥1,600; PayPay only; open four days a week.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner serves with jokes (March 2025 review).',
      philosophy: 'Healthy, gentle spice curry with lots of vegetables (2025–26 reviews).',
      specialty: 'Two- or three-curry plate.',
      anecdotes: [
        { text: 'An October 2025 hiker came down from Daigonzan starving and had the three-curry plate with craft cola.', source: R + 'B515399931/' },
        { text: 'A March 2025 goshuin collector added chicken confit to the curry and got the owner\'s jokes as a side.', source: R + 'B489986639/' },
      ],
      japanese_sources_summary: '食べログ: NATURE CURRY 創龍、カレー・インドカレー、東山区稲荷町南組575、地下鉄東山駅から徒歩5分、火・水 11:30〜15:00、土・日 11:30〜17:00、月・木・金・祝日休み、PayPay のみ、カード・電子マネー不可、10席、禁煙。口コミ (2025〜2026年、英語): 3種のカレー、2種の盛り合わせ1,600円、国産豚のポークカレー、牛肉、豚肉、大豆ミートのキーマ、クミンライス、野菜の素揚げ、カルダモンのチーズプリン、冗談好きの店主。',
      confidence: 'medium', sources: [TB, R + 'B489986639/', R + 'B515383179/', R + 'B515399931/', R + 'B516828792/', R + 'B518581344/', R + 'B534288195/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'PayPay only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区稲荷町南組575',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.007246, 135.778531); cross-checked: GSI 京都府京都市東山区稲荷町南組575番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516828792/'],
    price_note: 'Prices from a November 2025 review; PayPay only.', last_checked: TODAY, items: [
      it('', '', 'Two-curry plate (pork and keema)', '¥1,600', 'Curry', 'ask', 'no', 'November 2025 review.', 'two_curry'),
      it('', '', 'Cheese pudding with cardamom syrup (with a curry)', '+¥200', 'Dessert', 'ask', 'no', 'November 2025 review.', 'pudding'),
    ] }, {
    cuisine: '野菜たっぷりのスパイスカレー: 国産豚のポーク、牛・豚・大豆ミートのキーマなど3種、1種か2〜3種盛り (2種1,600円、2025年11月)、クミンライス、れんこん、ピーマン、ズッキーニの素揚げとキャロットラペ (2026年2月)、鶏のコンフィのトッピング (2025年3月)、カルダモンシロップのチーズプリン +200円 (2025年11月)、クラフトコーラ',
    neighborhood: '東山駅から徒歩5分',
    gf_detail: '要確認。スパイスカレー、クミンライス、野菜の素揚げ (2025〜26年の口コミ)。カレーの小麦粉の有無は不明。',
    vegan_detail: 'ヴィーガン不可。ポークカレーと、牛・豚・大豆ミートのキーマ (2026年2月の口コミ)。',
    notes: '[カレー・東山] 明るい10席のスパイスカレーの店。やさしく野菜の多いポークとキーマをクミンライスで、カルダモンのチーズプリン、冗談好きの店主。1,600円ほど、PayPay のみ、週4日営業。',
  });
}

// ================================================================ 京都串でん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019725/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kusiden.owst.jp/';
  const D = day(['17:30', '22:30']);
  put({
    id: 'kyoto_kushiden_teramachi_oike', name: '京都串でん (Kyoto Kushiden)', category: 'OMNI',
    lat: 35.012116, lng: 135.767081, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden broth and fish cakes such as chikuwa and satsuma-age usually contain wheat or soy; kushiage is battered (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden of egg and fish cakes, chicken liver, sausage (2024–26 reviews).',
    hours_raw: 'Daily 17:30–22:30; irregular closures (Tabelog). Cards; no e-money (Tabelog). 30 seats with counter and sunken seating, private rooms for 6–8; smoking allowed (Tabelog; May 2026 review). Basement of the Bain Oak Mets building on Teramachi north of Oike, behind City Hall, 2 min from Kyoto Shiyakusho-mae (Tabelog; May 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Oike, behind City Hall — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kushiage and Kyoto-style oden, with summer oden from June (Tabelog): egg, chikuwa and onion satsuma-age oden (May 2026), miso oden (February 2026); obanzai such as komatsuna ohitashi, simmered chicken liver, black dashimaki, ochazuke (February 2026); a giant sausage (August 2024); sake and shochu; about ¥2,000–7,000',
    website: WEB, gmaps: gm('京都串でん 寺町御池'), menu_url: null,
    notes: '[Oden & kushiage · City Hall] A retro basement izakaya behind Kyoto City Hall for broth-soaked Kyoto oden, freshly fried skewers and obanzai, with summer oden too. Smoking allowed; about ¥3,000–7,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A May 2026 reviewer heard the owner is a cooking YouTuber.',
      philosophy: null,
      specialty: 'Oden; onion satsuma-age.',
      anecdotes: [
        { text: 'A May 2026 diner went back for seconds of the onion satsuma-age after the broth-soaked egg and chikuwa.', source: R + 'B527760138/' },
        { text: 'An August 2024 visitor, already full, was stunned by a sausage the size of a giant Schärfe Wurst.', source: R + 'B490637665/' },
      ],
      japanese_sources_summary: '食べログ: 京都串でん、串揚げ・居酒屋・鍋、中京区上本能寺前町470 バインオークメッツ B1F、京都市役所前駅から徒歩2分、毎日 17:30〜22:30、不定休、カード可、電子マネー不可、30席、個室あり、喫煙可、6月から夏のおでん (紹介文、英訳)。口コミ (2024〜2026年、英語): 京都らしいおでん、卵、ちくわ、玉ねぎのさつま揚げ、味噌おでん、小松菜のおひたし、黒いだし巻き、店主は料理の YouTuber と聞いた (2026年5月)。',
      confidence: 'low', sources: [TB, WEB, R + 'B490637665/', R + 'B523198210/', R + 'B527760138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed inside (Tabelog; May 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町御池上ル上本能寺前町470 バインオークメッツ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated February and May 2026.' },
    pin_source: `Tabelog ${TB} (35.012116, 135.767081); cross-checked: GSI 京都府京都市中京区上本能寺前町470番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527760138/', R + 'B523198210/'],
    price_note: 'No item prices in reviews; Tabelog average ¥2,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style oden (egg, chikuwa, satsuma-age)', '', 'Oden', 'ask', 'no', 'May 2026 review.', 'oden'),
      it('', '', 'Kushiage skewers', '', 'Kushiage', 'no', 'no', 'Tabelog.', 'kushiage'),
    ] }, {
    cuisine: '串揚げと京都らしいおでん、6月からは夏のおでん (食べログ): 卵、ちくわ、玉ねぎのさつま揚げ (2026年5月)、味噌おでん (2026年2月)、小松菜のおひたし、鶏レバーの煮物、黒いだし巻き、お茶漬け (2026年2月)、大きなソーセージ (2024年8月)、日本酒と焼酎、2,000〜7,000円ほど',
    neighborhood: '寺町御池、市役所の裏。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。おでんの出汁とちくわ、さつま揚げは小麦や醤油を含むことが多い。串揚げは衣つき (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵と練り物のおでん、鶏レバー、ソーセージ (2024〜26年の口コミ)。',
    notes: '[おでんと串揚げ・市役所] 京都市役所の裏の地下のレトロな居酒屋。出汁のしみた京都らしいおでん、揚げたての串、おばんざい、夏のおでんも。喫煙可、3,000〜7,000円ほど。',
  });
}

// ================================================================ 豆屋源蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000945/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.mameyagenzo.co.jp';
  const OZ = 'https://www.ozmall.co.jp/restaurant/7776/';
  const D = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_mameya_genzo', name: '豆屋源蔵 (Mameya Genzo)', category: 'OMNI',
    lat: 35.012221, lng: 135.770613, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu, yuba and soy-milk hot pot are the core, but nama-fu (wheat gluten), miso and yuba tempura appear on the courses (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu-centred courses of yuba, sesame tofu and soy-milk hot pot (2026 reviews), but they also include sashimi, eel and roast beef, and dashi is likely.',
    hours_raw: 'Daily 11:30–14:30 and 17:00–22:00; closing days not fixed (Mondays) (Tabelog). One drink per person; same-day cancellations, date changes and fewer guests are charged in full — tell the shop by 3 pm the day before (Tabelog). Cards; no e-money or QR (Tabelog). 60 seats, 30 of them on the Kamo River deck in season; counter, tatami and terrace; non-smoking (Tabelog). On Kiyamachi by the Takase River, in a building that keeps traces of a former teahouse and inn, 3 min from Kyoto Shiyakusho-mae (Tabelog; ozmall; August 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Nijo, by the Kamo River — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto cuisine of house-made tofu, yuba and miso (ozmall): the tofu course ¥7,700 (June 2026); the Takasegawa kaiseki with nama-fu dengaku, sesame tofu and soy-milk hot pot (May and August 2026); the Mizukawa course; a tofu and yuba hot pot with sashimi, grilled dishes and roast beef (July 2026); yuba tempura (August 2026); tofu gozen at lunch (September 2026); about ¥6,000–15,000',
    website: WEB, gmaps: gm('豆屋源蔵 木屋町'), menu_url: null,
    notes: '[Tofu kaiseki · Kiyamachi] A Kiyamachi house in a former teahouse building serving house-made tofu, yuba and soy-milk hot pot as Kyoto courses, on a Kamo River deck in summer. About ¥7,700–15,000; strict cancellation policy.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 August 2010 (Tabelog), in a building that keeps traces of a former teahouse and inn, making its own tofu, yuba and miso (ozmall).',
      philosophy: 'Kyoto cuisine built on soybeans — house-made tofu, yuba and miso (ozmall).',
      specialty: 'Tofu kaiseki; soy-milk hot pot.',
      anecdotes: [
        { text: 'A July 2026 party celebrated a friend\'s 70th birthday on the river deck as the sky cleared after a typhoon.', source: R + 'B531059488/' },
        { text: 'An August 2026 couple started indoors because of heavy rain, and the staff moved the table outside when the weather cleared.', source: R + 'B534252832/' },
        { text: 'A May 2026 visitor was given a blanket as the river grew chilly at sunset and remembered the nama-fu dengaku most.', source: R + 'B527955056/' },
      ],
      japanese_sources_summary: '食べログ: 豆屋源蔵、日本料理・豆腐料理、中京区上樵木町490-1、京都市役所前駅から徒歩3分、毎日 11:30〜14:30・17:00〜22:00、不定休 (月曜)、ワンドリンク制、当日キャンセル・日時変更・人数減は100%、カード可、電子マネー・QR 不可、60席 (納涼床30席)、禁煙、2010年8月1日オープン。オズモール: 自家製の豆腐、湯葉、味噌の京料理、元お茶屋と旅館の名残の建物、鴨川の納涼床。口コミ (2026年、英語): 豆腐のコース7,700円、生麩の田楽、胡麻豆腐、豆乳鍋、湯葉の揚げ物。',
      confidence: 'medium', sources: [TB, WEB, OZ, R + 'B527955056/', R + 'B530913572/', R + 'B531059488/', R + 'B534252832/', R + 'B534322881/', R + 'B536145747/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; full charge for late changes (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区上樵木町490-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and ozmall; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB} (35.012221, 135.770624), moved 1m W to clear kyoto_nihon_ryori_sakuragawa (5.5m); GSI resolves 上樵木町490 only to the town, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530913572/'],
    price_note: 'Course price from a June 2026 review; one drink per person.', last_checked: TODAY, items: [
      it('', '', 'Tofu course', '¥7,700', 'Courses', 'ask', 'ask', 'June 2026 review.', 'tofu_course'),
      it('', '', 'Takasegawa kaiseki', '', 'Courses', 'ask', 'no', 'May and August 2026 reviews.', 'takasegawa'),
      it('', '', 'Tofu gozen (lunch)', '', 'Lunch', 'ask', 'ask', 'September 2026 review.', 'gozen'),
    ] }, {
    cuisine: '自家製の豆腐、湯葉、味噌の京料理 (オズモール): 豆腐のコース7,700円 (2026年6月)、生麩の田楽、胡麻豆腐、豆乳鍋の Takasegawa の懐石 (2026年5月・8月)、Mizukawa のコース、刺身や焼き物、ローストビーフのある豆腐と湯葉の鍋 (2026年7月)、湯葉の揚げ物 (2026年8月)、昼は豆腐の御膳 (2026年9月)、6,000〜15,000円ほど',
    neighborhood: '木屋町二条、鴨川のそば。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。豆腐、湯葉、豆乳鍋が中心だが、コースに生麩、味噌、湯葉の揚げ物 (2026年の口コミ)。',
    vegan_detail: '要確認。湯葉、胡麻豆腐、豆乳鍋の豆腐中心のコース (2026年の口コミ) だが、刺身、鰻、ローストビーフもあり、出汁を使う可能性が高い。',
    notes: '[豆腐の京料理・木屋町] 元お茶屋の建物の木屋町の店。自家製の豆腐、湯葉、豆乳鍋の京料理のコースを、夏は鴨川の納涼床で。7,700〜15,000円ほど、キャンセル規定は厳しめ。',
  });
}

save();
