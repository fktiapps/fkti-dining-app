// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 91.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - すき焼き 肉のひろ重 室町 — chain: 肉のひろ重, five or more shops (sister shops 26043469, 26040619, 26042658 already skipped)
//   - ホテルヴィアイン 京都四条室町 — not a restaurant: the hotel's own listing (check-in and check-out hours), and Via Inn is a
//     national hotel chain
//   + 高台寺 松葉亭 Kodaiji Matsubatei (tea-porridge and yudofu sets in a machiya below Kodaiji, run by the okami)
//   + 北京料理 華友菜館 Kayu Saikan (Beijing home-style Chinese in a basement off Muromachi)
//   + もなかスタンド Monaka Stand (teppan baru near Karasuma)
//   + 万両 Manryo (obanzai bento and bar counter in the Furukawa-cho arcade)
//   - ジュヴァンセル 御池店 — retail food shop (Greg 11-07 ruling): a take-away cake shop (Tabelog: "takeaway specialty") of a
//     Kyoto patisserie with about four shops; no sourced founding date or GF/vegan options
//   + 甘味処 乃あん Kanmidokoro Noan (Japanese-sweets tea stop by Entoku-in below Kodaiji)
//   Brand checks: none of 松葉亭, 華友菜館, もなかスタンド, 万両 or 乃あん is in data or queue-status by name; a Tabelog search for
//   もなかスタンド finds only this shop. None is a THAN or WILL brand. None is in a hotel.
//   Service charges: no Tabelog section for any of the five.
//   Pins (checked against main, hidden records included): 松葉亭 ("高台寺南門前") and 万両 ("古川町商店街中央") have no lot number, so both
//   use loc_approx 'single'; 華友菜館 moved 4m S (2.5m from kyoto_ippin_hashinaga); もなかスタンド moved 4m SE (2.7m from
//   kyoto_smoke_grill_lotus); 乃あん ≥ 17m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040245', 'chain: 肉のひろ重, five or more shops (sister shops 26043469, 26040619 and 26042658 already skipped as a chain)');
skip('26021789', 'not a restaurant: the Tabelog listing is ホテルヴィアイン 京都四条室町 itself (check-in 15:00, check-out 10:00), and Via Inn is a national hotel chain');
skip('26005835', 'retail food shop (Greg 11-07 ruling): ジュヴァンセル 御池店 is a take-away cake shop (Tabelog: takeaway specialty) of a Kyoto patisserie with about four shops (macaro-ni); no sourced founding date and no sourced GF or vegan options');

// ================================================================ 高台寺 松葉亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019311/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '17:00']);
  put({
    id: 'kyoto_kodaiji_matsubatei', name: '高台寺 松葉亭 (Kodaiji Matsubatei)', category: 'OMNI',
    lat: 34.999132, lng: 135.778932, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tea porridge, yudofu, yuba and dashimaki (2025–26 reviews); soy and dashi are likely.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tea porridge, yudofu and yuba (2025–26 reviews), but dashi, dashimaki and chirimen sansho (fish) appear.',
    hours_raw: 'Daily 11:30–14:30 (meals) and 14:30–17:00 (café); irregular closures; hours may change (Tabelog). Evening courses by arrangement and private use (August 2025 review). QR payments; no e-money (Tabelog). 8 seats; shoes off in a machiya, past a small garden and alley (Tabelog; 2026 reviews). By the south gate of Kodaiji, near the Yasaka pagoda (Tabelog; November 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji, south gate — near the Yasaka pagoda',
    cuisine: 'Kyoto home-style sets in a quiet machiya: tea porridge of Kyoto bancha with yudofu, yuba and dashimaki (¥3,000 set, April 2026; September 2026), a tea-porridge gozen with house-made yuba, chirimen sansho and shiitake kombu (November 2025); warm warabi mochi with matcha in the afternoon (January 2026); courses with clear dashi soups by arrangement (2025–26); about ¥2,000–5,000',
    website: null, gmaps: gm('高台寺 松葉亭'), menu_url: null,
    notes: '[Tea porridge & yudofu · Kodaiji] A tiny, hushed machiya below Kodaiji, reached through a garden alley, where a kind okami serves Kyoto bancha tea porridge, yudofu and yuba sets, and warabi mochi with matcha in the afternoon. About ¥2,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Okami (unnamed)'], origin: null,
      background: 'A kind okami welcomes guests (September 2026 review); the yuba, chirimen sansho and shiitake kombu are made in house and sold as souvenirs (November 2025 review).',
      philosophy: 'Honest Kyoto cooking that respects the ingredients and the season (April 2026 review).',
      specialty: 'Tea porridge with yudofu.',
      anecdotes: [
        { text: 'A January 2026 walker was sent in by a departing customer\'s enthusiastic recommendation and lingered an hour over warm warabi mochi and matcha.', source: R + 'B521470448/' },
        { text: 'An August 2025 guest, recommended by the okami of an inn, found the whole place reserved for the party, in a private room, for an evening course.', source: R + 'B512619438/' },
      ],
      japanese_sources_summary: '食べログ: 高台寺 松葉亭、日本料理・喫茶店、東山区高台寺南門前、毎日 11:30〜14:30・14:30〜17:00、不定休、QR 可、電子マネー不可、8席。口コミ (2025〜2026年、英語): 庭と路地の奥の町家、京番茶の茶粥と湯豆腐、湯葉、だし巻き、3,000円のセット (2026年4月)、自家製の湯葉・ちりめん山椒・しいたけ昆布をお土産に、温かいわらび餅と抹茶、やさしい女将。',
      confidence: 'medium', sources: [TB, R + 'B512619438/', R + 'B517698559/', R + 'B521470448/', R + 'B525937192/', R + 'B528164935/', R + 'B535880087/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; very quiet room (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区高台寺南門前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999132, 135.778932); the address "高台寺南門前" has no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525937192/'],
    price_note: 'Set price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tea porridge and yudofu set', '¥3,000', 'Sets', 'ask', 'ask', 'April 2026 review.', 'chagayu'),
      it('', '', 'Warm warabi mochi with matcha', '', 'Café', 'ask', 'ask', 'January 2026 review.', 'warabi'),
    ] }, {
    cuisine: '静かな町家の京都の家庭料理のセット: 京番茶の茶粥に湯豆腐、湯葉、だし巻き (3,000円のセット、2026年4月・9月)、自家製の湯葉、ちりめん山椒、しいたけ昆布の茶粥の御膳 (2025年11月)、午後は温かいわらび餅と抹茶 (2026年1月)、相談すれば澄んだ出汁の椀物のコースも (2025〜26年)、2,000〜5,000円ほど',
    neighborhood: '高台寺の南門前。八坂の塔のそば',
    gf_detail: '要確認。茶粥、湯豆腐、湯葉、だし巻き (2025〜26年の口コミ)。醤油と出汁を使う可能性が高い。',
    vegan_detail: '要確認。茶粥、湯豆腐、湯葉 (2025〜26年の口コミ) だが、出汁、だし巻き、ちりめん山椒 (魚) もある。',
    notes: '[茶粥と湯豆腐・高台寺] 高台寺の下、庭の路地を抜けた静かな小さな町家。やさしい女将が京番茶の茶粥、湯豆腐、湯葉のセット、午後はわらび餅と抹茶を出す。2,000〜5,000円ほど。',
  });
}

// ================================================================ 北京料理 華友菜館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004875/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '13:45'], ['17:30', '21:30']); const DN = day(['17:30', '21:30']);
  put({
    id: 'kyoto_pekin_ryori_kayu_saikan', name: '北京料理 華友菜館 (Kayu Saikan)', category: 'OMNI',
    lat: 35.006186, lng: 135.757944, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dumplings, noodles, spring rolls and soy-sauced stir-fries (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, shrimp and duck dishes (2025–26 reviews).',
    hours_raw: 'Tue–Fri and the days around holidays 11:30–13:45 (L.O. 13:30) and 17:30–21:30 (L.O. 21:00); Sat, Sun and holidays 17:30–21:30; closed Mondays; Obon break 10–13 August (Tabelog). Lunch: two ¥1,000 sets on a board; lunch is cash only (January 2025 review). Cards at dinner; no e-money or QR (Tabelog). 25 seats: 5 at the counter and 20 at tables; non-smoking (Tabelog). Basement of the Murotako Building at Muromachi-Takoyakushi, by stairs or lift (Tabelog; 2025 reviews).',
    hours: { 1: LD, 2: LD, 3: LD, 4: LD, 5: DN, 6: DN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Takoyakushi — 5 min from Karasuma or Shijo Stn',
    cuisine: 'Beijing home-style Chinese by Chinese chefs: two ¥1,000 lunch sets such as shrimp fried rice with beef noodle soup, Beijing cold noodles with fried rice, or mapo tofu (2025–26); boiled dumplings, homemade spring rolls, winter melon and meatball stew, deep-fried monkfish, crisp yakisoba, shrimp chilli, century egg, roast-duck fried rice, sweet-and-sour pork (2025–26)',
    website: null, gmaps: gm('北京料理 華友菜館 室町'), menu_url: null,
    notes: '[Beijing Chinese · Muromachi] A basement local favourite near Shijo-Karasuma where Chinese chefs cook Beijing home-style dishes: boiled dumplings, homemade spring rolls and a ¥1,000 lunch set of two dishes. Mostly older regulars; about ¥1,000 lunch, ¥2,000–3,000 dinner.',
    chef_bio: { chef_name: null, roles: ['Chinese chefs (unnamed)'], origin: null,
      background: 'Local Beijing home-style cooking made by Chinese chefs (September 2026 review), with mostly older local regulars (January 2026 review).',
      philosophy: null,
      specialty: 'Boiled dumplings; ¥1,000 lunch sets.',
      anecdotes: [
        { text: 'A May 2025 business traveller had the ¥1,000 beef ramen and shrimp fried rice set, and the owner called the lift and saw the guest off.', source: R + 'B506438521/' },
        { text: 'A January 2026 diner came back a month later for the boiled dumplings missed the first time, plus monkfish from the blackboard.', source: R + 'B519252204/' },
      ],
      japanese_sources_summary: '食べログ: 北京料理 華友菜館、中華料理、中京区、室町蛸薬師、地下1階、阪急烏丸駅から徒歩5分、火〜金・祝日の前日・祝日の翌日 11:30〜13:45・17:30〜21:30、土日・祝日 17:30〜21:30、月曜休み、カード可、電子マネー・QR 不可、25席 (カウンター5)、禁煙。口コミ (2025〜2026年、英語): 中国の料理人の北京の家庭料理、昼は2種の定食1,000円 (昼は現金のみ)、水餃子、自家製の春巻き、冬瓜と肉団子の煮込み、あんこうの唐揚げ、地元の年配の常連。',
      confidence: 'medium', sources: [TB, R + 'B500760670/', R + 'B502790610/', R + 'B506073426/', R + 'B506438521/', R + 'B510419831/', R + 'B519252204/', R + 'B530610093/', R + 'B534930448/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch menu on a board; lunch cash only (January 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通り蛸薬師上ル鯉山町535 室蛸ビルＢ１階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006222, 135.757944), moved 4m S to clear kyoto_ippin_hashinaga (2.5m); cross-checked: GSI 京都府京都市中京区鯉山町535番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506073426/', R + 'B534930448/'],
    price_note: 'Lunch price from 2025–26 reviews; lunch cash only.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (two choices daily)', '¥1,000', 'Lunch', 'no', 'no', '2025–26 reviews.', 'lunch'),
      it('', '', 'Boiled dumplings', '', 'Dumplings', 'no', 'no', '2025–26 reviews.', 'suigyoza'),
    ] }, {
    cuisine: '中国人の料理人の北京の家庭料理: 海老チャーハンと牛肉の麺、北京の冷麺とチャーハン、麻婆豆腐など2種の昼の定食1,000円 (2025〜26年)、水餃子、自家製の春巻き、冬瓜と肉団子の煮込み、あんこうの唐揚げ、パリパリの焼きそば、海老チリ、ピータン、ローストダックのチャーハン、酢豚 (2025〜26年)',
    neighborhood: '室町蛸薬師。烏丸駅か四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。餃子、麺、春巻き、醤油の炒め物 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、牛、海老、鴨の料理 (2025〜26年の口コミ)。',
    notes: '[北京料理・室町] 四条烏丸の近くの地下の地元の人気店。中国人の料理人が北京の家庭料理を作る。水餃子、自家製の春巻き、2品の昼の定食1,000円。年配の常連が多い。昼は1,000円、夜は2,000〜3,000円ほど。',
  });
}

// ================================================================ もなかスタンド
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038019/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_monaka_stand', name: 'もなかスタンド (Monaka Stand)', category: 'OMNI',
    lat: 35.004283, lng: 135.757512, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan dishes such as outside skirt and corn butter may suit; fried rice, kara-age and tempura are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan meat and seafood dishes (2025–26 reviews).',
    hours_raw: 'Daily 17:00–24:00 (food L.O. 23:00, drinks 23:30); closing days may vary (Tabelog). Children under junior-high age and pets: call ahead; online-only bookings may be refused (Tabelog). Cards, e-money and QR (Tabelog). 36 seats, counter included (Tabelog; August 2025 review). On a narrow bar street near Karasuma, 2 min from Hankyu Karasuma exit 26 or Shijo exit 2 (Tabelog; February 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, north side — 2 min from Karasuma Stn',
    cuisine: 'Casual teppan baru: outside skirt steak and fresh spring rolls (March 2026); Kujo-negi rolled in pork belly, nama-fu, hamo tempura, kara-age (May 2026); garlic fried rice, corn butter, potato salad (August 2025); sushi rolls; an a la carte all-you-can-drink option (March 2026); about ¥3,000–5,000',
    website: null, gmaps: gm('もなかスタンド 烏丸'), menu_url: null,
    notes: '[Teppan bar · Shijo-Karasuma] A lively, modern teppan baru on a bar alley by Karasuma: outside skirt, Kujo-negi pork rolls, Kyoto touches like nama-fu and hamo, and an all-you-can-drink option with a la carte. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A teppanyaki-led bar with a wide drinks list (2025–26 reviews).',
      philosophy: null,
      specialty: 'Teppan outside skirt; Kujo-negi pork rolls.',
      anecdotes: [
        { text: 'A May 2026 pair ordered nama-fu and hamo tempura before realising the place specialises in teppan, then tried the Kujo-negi pork rolls.', source: R + 'B528743148/' },
        { text: 'A March 2026 visitor, turned away on an earlier Friday because it was full, finally got in for outside skirt and spring rolls.', source: R + 'B524868345/' },
      ],
      japanese_sources_summary: '食べログ: もなかスタンド、バル・鉄板焼き、中京区観音堂町468 1F、阪急烏丸駅26番出口・地下鉄四条駅2番出口から徒歩2分、毎日 17:00〜24:00、休みは変わる場合あり、子供とペットは電話で相談、カード・電子マネー・QR 可、36席。口コミ (2025〜2026年、英語): 鉄板焼きのバル、ハラミ、生春巻き、Kujo ねぎの豚バラ巻き、生麩、hamo の揚げ物、ガーリックライス、アラカルトの飲み放題。',
      confidence: 'medium', sources: [TB, R + 'B511580306/', R + 'B524220190/', R + 'B524634207/', R + 'B524868345/', R + 'B528743148/', R + 'B534744481/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Call ahead with children or pets (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音堂町468 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004308, 135.757481), moved 4m SE to clear kyoto_smoke_grill_lotus (2.7m); cross-checked: GSI 京都府京都市中京区観音堂町468番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524868345/'],
    price_note: 'No item prices in reviews; reviews give ¥3,000–5,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Teppan outside skirt', '', 'Teppan', 'ask', 'no', 'March 2026 review.', 'harami'),
      it('', '', 'Kujo-negi rolled in pork belly', '', 'Teppan', 'ask', 'no', 'May 2026 review.', 'negi_maki'),
    ] }, {
    cuisine: '気軽な鉄板のバル: ハラミと生春巻き (2026年3月)、Kujo ねぎの豚バラ巻き、生麩、hamo の揚げ物、唐揚げ (2026年5月)、ガーリックライス、コーンバター、ポテトサラダ (2025年8月)、巻き寿司、アラカルトの飲み放題 (2026年3月)、3,000〜5,000円ほど',
    neighborhood: '四条烏丸の北。烏丸駅から徒歩2分',
    gf_detail: '要確認。ハラミやコーンバターなどの鉄板焼きは合う可能性がある。ガーリックライス、唐揚げ、揚げ物もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介の鉄板焼き (2025〜26年の口コミ)。',
    notes: '[鉄板バル・四条烏丸] 烏丸の飲み屋の路地のにぎやかでモダンな鉄板のバル。ハラミ、Kujo ねぎの豚バラ巻き、生麩や hamo などの京都らしい料理、アラカルトの飲み放題も。3,000〜5,000円ほど。',
  });
}

// ================================================================ 万両
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017829/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.furukawacho.com/information/古川町-万両/';
  put({
    id: 'kyoto_manryo_furukawacho', name: '万両 (Manryo)', category: 'OMNI',
    lat: 35.008233, lng: 135.778796, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Home-style obanzai and bentos with soy and dashi; curry and udon are wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bentos with a meat or fish main, such as braised mackerel (August 2026 review).',
    hours_raw: 'Hours not given on Tabelog. Open at lunch, including on a Sunday and during Obon (August 2025 and August 2026 reviews). Regulars drink at the counter (August 2025 review). No e-money or QR (Tabelog). Counter seats; sake and shochu (Tabelog). In the middle of the Furukawa-cho arcade, near Higashiyama Stn (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Furukawa-cho arcade — near Higashiyama Stn',
    cuisine: 'Community obanzai shop: a lunch bento with a choice of meat or fish main such as braised mackerel, home-style obanzai sides, and coffee, tea or shaved ice after (August 2026); daily bento, curry and cold udon (August 2025); sake and shochu at the counter; about ¥1,000–2,000',
    website: WEB, gmaps: gm('万両 古川町商店街'), menu_url: null,
    notes: '[Obanzai · Furukawa-cho] A neighbourhood obanzai counter in the old Furukawa-cho arcade: home-style bento lunches with a fish or meat main and a sweet or coffee to finish, and regulars with a drink at the counter. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A community-focused obanzai shop in the Furukawa-cho arcade (August 2026 review).',
      philosophy: null,
      specialty: 'Obanzai bento.',
      anecdotes: [
        { text: 'An August 2026 family, out during Obon, chose shaved ice for the children as the after-lunch treat and got tea sweets too.', source: R + 'B533807080/' },
        { text: 'An August 2025 visitor found it open on a Sunday when most of the arcade was shut, with regulars drinking at the counter.', source: R + 'B512459215/' },
      ],
      japanese_sources_summary: '食べログ: 万両、食堂・喫茶店・惣菜、東山区の商店街の中ほど、地下鉄東山駅から147m、電子マネー・QR 不可、カウンター席、日本酒・焼酎。口コミ (2025〜2026年、英語): 地域のおばんざいの店、肉か魚を選べる弁当 (サバの煮付けなど)、食後にコーヒー・紅茶・かき氷、カレー、冷たいうどん、カウンターで飲む常連。',
      confidence: 'low', sources: [TB, WEB, R + 'B512459215/', R + 'B533807080/'] },
    cultural_comfort: { level: 'japanese', note: 'A local neighbourhood counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区古川町商店街街中央',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the arcade site; reviews dated August 2025 and August 2026.' },
    pin_source: `Tabelog ${TB} (35.008233, 135.778796); the address is "the middle of the Furukawa-cho arcade" with no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533807080/'],
    price_note: 'No prices in reviews; Tabelog average ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Obanzai bento (meat or fish main)', '', 'Lunch', 'ask', 'no', 'August 2026 review.', 'bento'),
    ] }, {
    cuisine: '地域のおばんざいの店: サバの煮付けなど肉か魚を選べる昼の弁当、家庭的なおばんざい、食後にコーヒー・紅茶・かき氷 (2026年8月)、日替わりの弁当、カレー、冷たいうどん (2025年8月)、カウンターで日本酒と焼酎、1,000〜2,000円ほど',
    neighborhood: '古川町商店街。東山駅の近く',
    gf_detail: '要確認。醤油と出汁の家庭的なおばんざいと弁当。カレーとうどんは小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。サバの煮付けなど肉か魚の弁当 (2026年8月の口コミ)。',
    notes: '[おばんざい・古川町] 古川町商店街の地元のおばんざいのカウンター。魚か肉を選べる家庭的な弁当の昼ごはんに食後の甘味やコーヒー、カウンターで飲む常連。1,000〜2,000円ほど。',
  });
}

// ================================================================ 甘味処 乃あん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036837/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '17:00']);
  put({
    id: 'kyoto_kanmidokoro_noan', name: '甘味処 乃あん (Kanmidokoro Noan)', category: 'OMNI',
    lat: 35.000712, lng: 135.779854, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi, zenzai with mochi, anmitsu and soft serve (2025–26 reviews); ingredients not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Warabi mochi with kinako and kuromitsu and zenzai (2025 reviews) may suit; soft serve and parfaits contain dairy.',
    hours_raw: 'Daily 10:00–17:00; hours may change (Tabelog). No bookings (Tabelog). Cards, Suica and QR (Tabelog). 10 seats inside plus outdoor seats under a red parasol on a hearth-style terrace; non-smoking (Tabelog; November 2025 reviews). By Entoku-in and the Kodaiji museum on Shimogawara (Tabelog; November 2025 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji, by Entoku-in — between Yasaka Shrine and Kiyomizu',
    cuisine: 'Japanese sweets for a sightseeing break: zenzai with Tanba dainagon beans and toasted mochi of Hamanaka rice, and warabi mochi of real bracken starch with kuromitsu, served with sencha (November 2025); matcha and milk soft serve, a parfait with shiratama and azuki (2025–26); matcha and chestnut daifuku set (November 2025); anmitsu and shaved ice in summer (2025–26); under ¥1,000',
    website: null, gmaps: gm('甘味処 乃あん 高台寺'), menu_url: null,
    notes: '[Japanese sweets · Kodaiji] A small tea stop by Entoku-in for zenzai with toasted mochi, real-bracken warabi mochi with kuromitsu, matcha soft serve and shaved ice in summer, with outdoor seats under a red parasol. Under ¥1,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 November 2021 (Tabelog). A sign at the shop reads "Kodaiji\'s favourite" (May 2025 review).',
      philosophy: null,
      specialty: 'Zenzai with toasted mochi; warabi mochi.',
      anecdotes: [
        { text: 'A November 2025 couple, back from Entoku-in, sat under a red parasol on red stools for very soft warabi mochi.', source: R + 'B531548316/' },
        { text: 'A March 2026 visitor stopped for matcha soft serve after paying respects at Sanmen Daikokuten.', source: R + 'B524028691/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処 乃あん、甘味処、東山区、高台寺の近く、毎日 10:00〜17:00、予約不可、カード・Suica・QR 可、10席、禁煙、2021年11月1日オープン。口コミ (2025〜2026年、英語): 圓徳院と高台寺の美術館のそば、Tanba の大納言と Hamanaka の米の餅のぜんざい、本わらび粉と黒蜜のわらび餅、煎茶つき、抹茶とミルクのソフトクリーム、白玉とあずきのパフェ、夏はかき氷、屋外の赤い傘の席。',
      confidence: 'medium', sources: [TB, R + 'B504824617/', R + 'B506146559/', R + 'B517551360/', R + 'B517721170/', R + 'B524028691/', R + 'B527294461/', R + 'B529921134/', R + 'B531548316/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many sightseers; outdoor seats (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原町530',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.000712, 135.779854); cross-checked: GSI 京都府京都市東山区下河原町530番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517721170/'],
    price_note: 'No item prices in reviews; under ¥1,000 a head (Tabelog reviews).', last_checked: TODAY, items: [
      it('', '', 'Zenzai with toasted mochi (with sencha)', '', 'Sweets', 'ask', 'ask', 'November 2025 review.', 'zenzai'),
      it('', '', 'Warabi mochi with kuromitsu (with sencha)', '', 'Sweets', 'ask', 'ask', 'November 2025 and May 2026 reviews.', 'warabi'),
      it('', '', 'Matcha soft serve', '', 'Sweets', 'ask', 'no', '2025–26 reviews.', 'soft'),
    ] }, {
    cuisine: '観光の休憩の甘味: Tanba の大納言と Hamanaka の米の焼いた餅のぜんざい、本わらび粉と黒蜜のわらび餅、煎茶つき (2025年11月)、抹茶とミルクのソフトクリーム、白玉とあずきのパフェ (2025〜26年)、抹茶と栗の大福のセット (2025年11月)、夏はあんみつとかき氷 (2025〜26年)、1,000円以内',
    neighborhood: '高台寺、圓徳院のそば。八坂神社と清水の間',
    gf_detail: '要確認。わらび餅、餅入りのぜんざい、あんみつ、ソフトクリーム (2025〜26年の口コミ)。原材料は不明。',
    vegan_detail: '要確認。きなこと黒蜜のわらび餅とぜんざい (2025年の口コミ) は合う可能性がある。ソフトクリームとパフェは乳製品入り。',
    notes: '[甘味・高台寺] 圓徳院のそばの小さな甘味処。焼き餅のぜんざい、本わらび粉の黒蜜のわらび餅、抹茶のソフトクリーム、夏はかき氷。赤い傘の屋外の席も。1,000円以内。',
  });
}

save();
