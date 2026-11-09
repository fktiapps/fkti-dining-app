// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 91 (2026-11-08).
//   + ANNEX (Goan and South Indian small plates and veg meals, Matsubara-Shinmachi; rest)
//   + しじみ Shijimi (kushikatsu and Tango-coast izakaya, Ebisugawa-Kawaramachi; rest)
//   + 京大和 Kyo Yamato (kaiseki ryotei founded 1877 beside Kodaiji, sharing grounds with Park Hyatt Kyoto; rest)
//   + cafe 我楽苦多 cafe Garakuta (roaster café on Ninenzaka; rest)
//   Rest list (mod 6 = 1) after batch 90, nearest-first — skipped:
//   - 肉バル 牛兵衛 烏丸店 26044219: chain — 牛兵衛 (Hot Pepper's chain page lists 牛兵衛 shops across several prefectures,
//     including the Kyoto 四条大宮店).
//   - ザ リビングルーム 26033329: big-chain hotel (Greg 11-08) — lounge of Park Hyatt Kyoto, whose other venues are hidden
//     as chain-hotel.
//   - ホステル 京都 絆 26037601: thin listing (1 review).
//   - ワイン食堂 Sette 26045599: thin listing (1 review).
//   Flag: 京大和 shares its grounds with Park Hyatt Kyoto, but reviewers say the ryotei and the hotel operate independently
//   (September 2021), and precious.jp describes the hotel as built on the ryotei's grounds — drafted as an independent
//   restaurant; it also serves Park Hyatt guests breakfast (November 2021).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the four is in
//   data (main b0cca5be, hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26044219/', 'chain: 牛兵衛 — Hot Pepper’s chain page lists 牛兵衛 shops across several prefectures, including Kyoto 四条大宮店');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26033329/', 'big-chain hotel (Greg 11-08): The Living Room, the lounge of Park Hyatt Kyoto (other Park Hyatt venues hidden as chain-hotel)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26037601/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26045599/', 'thin listing: 1 review');

// ================================================================ ANNEX
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044717/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']); const B = day(['11:00', '14:00'], ['17:00', '22:00']); const L = day(['11:00', '14:00']);
  put({
    id: 'kyoto_annex_matsubara', name: 'ANNEX', category: 'OMNI',
    lat: 34.9989345378724, lng: 135.75673902030329, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice meals, sambar and lentil dishes may suit, but breads contain wheat and fried dishes may be battered (2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetarian meal set (VEG MEALS) with lentil sambar and vegetable sides is served at lunch; whether it uses ghee or dairy is not stated (March–May 2026).',
    hours_raw: 'Tuesday 17:00–22:00; Wednesday–Saturday and holidays 11:00–14:00 and 17:00–22:00; Sunday 11:00–14:00; closed Monday; temporary closures announced on Instagram (Tabelog). Reservations accepted, including by Instagram message on the day (Tabelog; September 2026). Cards (VISA, Master, JCB), e-money and QR (Tabelog). Counter seating; non-smoking (Tabelog). Opened 20 March 2026 (Tabelog). On Matsubara-dori east of Shinmachi; about 8 min walk from Shijo or Gojo Stn.',
    hours: { 1: D, 2: B, 3: B, 4: B, 5: B, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-Shinmachi',
    cuisine: 'Indian food as small plates to go with drinks, centred on Goa on India’s west coast, in a stylish spice-bar room (2026 reviews) · lunch: VEG MEALS ¥1,500 with sambar and rice, one free refill; chicken curry; chai ¥300 (March–May 2026) · evening: Shakti chicken, chicken 65, spice omelette, sundal, achaar, bread; cumin-scented jeera rice; a wide drinks list incl. Campari and shochu soda (May–September 2026) · lunch about ¥1,500–2,000, dinner about ¥3,000–4,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('ANNEX 京都 松原 インド'), menu_url: null,
    notes: '[Indian · Matsubara-Shinmachi] A spice bar for Goan and South Indian small plates with drinks — Shakti chicken, chicken 65, spice omelette — and a good-value vegetarian meals set at lunch with a free refill of sambar and rice. Opened March 2026. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: the owner fell for Goa during 70 days of travel in India and opened ANNEX on 20 March 2026 around the idea of Indian food as drinking snacks (March–July 2026).',
      philosophy: 'Indian cuisine as small plates to go with drinks (March 2026).', specialty: 'Goan small plates; VEG MEALS.',
      anecdotes: [
        { text: 'A July 2026 diner heard that the owner travelled India for 70 days and was captivated by Goa, the former Portuguese colony.', source: R + 'B532639699/' },
        { text: 'A May 2026 lunch guest worked through the VEG MEALS plate with the menu’s notes, starting with the mild, deep lentil sambar.', source: R + 'B528720447/' },
        { text: 'A September 2026 regular on a seventh visit tried a cumin-heavy, fluffy fried rice of egg and green peas.', source: R + 'B524738924/' },
      ],
      japanese_sources_summary: '食べログ: インドカレー・バー、下京区松原通新町東入中野之町160 1F、火 17:00〜22:00、水〜土・祝日 11:00〜14:00、17:00〜22:00、日 11:00〜14:00、月曜休み、臨時休業はインスタグラムで、予約可、カード (VISA・Master・JCB)・電子マネー・QR 可、カウンター、禁煙、2026年3月20日開店。口コミ (2026年3〜9月、英語): 「おつまみとしてのインド料理」、インド西海岸のゴアの料理が中心、70日間インドを旅した店主、昼の VEG MEALS 1,500円 (サンバルとご飯のおかわり1回無料)、チキンカレー、チャイ300円、夜はシャクティチキン、チキン65、スパイスオムレツ、スンダル、アチャール、パン、クミンの炒めご飯、カンパリなどお酒が豊富、当日インスタグラムで予約。',
      confidence: 'medium', sources: [TB, R + 'B524738924/', R + 'B524990499/', R + 'B525049112/', R + 'B526388522/', R + 'B528720447/', R + 'B528870842/', R + 'B532639699/', R + 'B535425238/', R + 'B536057021/', R + 'B538007869/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by Instagram message; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区松原通新町東入中野之町160 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened March 2026; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998935, 135.756739); cross-checked: GSI 京都府京都市下京区中野之町160番地 (lot) 66 m; nearest existing record 15.1 m (kyoto_comfy_matcha); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524990499/', R + 'B528720447/'],
    price_note: 'Prices from March and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'VEG MEALS (vegetarian meal set, lunch)', '¥1,500', 'Lunch', 'ask', 'ask', 'May 2026; one free refill of sambar and rice.', 'vegmeals'),
      it('', '', 'Chai', '¥300', 'Drinks', 'ask', 'no', 'March 2026.', 'chai'),
    ] }, {
    cuisine: 'ゴアを中心とした「おつまみとしてのインド料理」、スパイスバーのようなおしゃれな店 (2026年の口コミ)・昼はサンバルとご飯のおかわり1回無料の VEG MEALS 1,500円、チキンカレー、チャイ300円 (2026年3〜5月)・夜はシャクティチキン、チキン65、スパイスオムレツ、スンダル、アチャール、パン、クミンの香る炒めご飯、カンパリや焼酎ソーダなどお酒が豊富 (2026年5〜9月)・昼1,500〜2,000円ほど、夜3,000〜4,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '松原新町',
    gf_detail: '要確認。ご飯の定食、サンバル、豆料理は合う可能性があるが、パンは小麦、揚げ物は衣の可能性 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。昼に豆のサンバルと野菜のおかずのベジタリアン定食 (VEG MEALS) があるが、ギーや乳製品の使用は不明 (2026年3〜5月)。',
    notes: '[インド料理・松原新町] ゴアと南インドの小皿をお酒と楽しむスパイスバー (シャクティチキン、チキン65、スパイスオムレツ)。昼はサンバルとご飯をおかわりできるお得なベジタリアンの定食。2026年3月開店。月曜休み。',
  });
}

// ================================================================ しじみ Shijimi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007025/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '24:00']); const T = day(['18:00', '24:00']);
  put({
    id: 'kyoto_shijimi_ebisugawa', name: 'しじみ (Shijimi)', category: 'OMNI',
    lat: 35.01452307759668, lng: 135.76864562933488, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kushikatsu in breadcrumbs, croquettes and shumai; seasonings use soy (2011–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried skewers, fish from Kyotango, wild boar and dashi dishes (2011–2025 reviews).',
    hours_raw: 'Monday–Wednesday, Friday and Saturday 17:00–24:00; Thursday 18:00–24:00; closed Sunday and holidays (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 8 counter seats, plus a small back room for about four (Tabelog; June 2025). Smoking allowed (Tabelog). Look for the red lantern on the north side of Ebisugawa-dori just west of Kawaramachi, in a residential street (March 2019). 10 min walk from Kyoto Shiyakusho-mae Stn.',
    hours: { 0: A, 1: A, 2: A, 3: T, 4: A, 5: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ebisugawa-Kawaramachi',
    cuisine: 'Homey Showa-style izakaya of kushikatsu and ingredients from the Tango coast (2011–2025 reviews) · kushikatsu such as shrimp, beef croquette and cream croquette, each about ¥130–350 (July 2013; March 2016) · fish from Kyotango, dried genge, fried skate, salted oden, obanzai, a few wild-boar dishes (2011–2024 reviews) · shumai (June 2025) · about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('しじみ 夷川 河原町 串カツ'), menu_url: null,
    notes: '[Kushikatsu izakaya · Ebisugawa-Kawaramachi, cash only] A tiny red-lantern counter where the owner, from the Tango coast, fries kushikatsu and cooks fish and vegetables from Kyotango, with obanzai and shumai. Homey and unhurried. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: 'Amino, Kyotango (Kyoto Prefecture) (March 2011 review)',
      background: 'Per reviewers: run by a woman from Amino in northern Kyoto Prefecture, serving kushikatsu, Amino-area ingredients and obanzai (March 2011); earlier run by two women (2012–2013), and more recently by a young owner alone, quick and attentive and happy to chat (March 2019; October 2024).',
      philosophy: null, specialty: 'Kushikatsu; Kyotango fish.',
      anecdotes: [
        { text: 'A March 2016 neighbour who had long walked past finally came in and tried dried genge fish for the first time — fluffy and juicy.', source: R + 'B87219338/' },
        { text: 'An October 2024 visitor marvelled at how quickly the owner, working alone, turned out carefully made dishes from Kyotango ingredients.', source: R + 'B493811171/' },
        { text: 'A June 2025 diner squeezed into the back room for four and liked the shumai at a very homey izakaya.', source: R + 'B508851448/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区夷川通河原町西入ル北側 真崎ビル 1F、市役所前駅から徒歩10分、月〜水・金・土 17:00〜24:00、木 18:00〜24:00、日・祝日休み、予約可、カード・電子マネー・QR 不可、カウンター8席、喫煙可。口コミ (2011年3月〜2025年6月、英語): 京丹後の網野町出身の女性の店 (2011年)、串カツ (えび、牛肉コロッケ、クリームコロッケなど、1本130〜350円ほど)、京丹後の魚、げんげの干物、えいのから揚げ、塩おでん、おばんざい、いのししの料理、しゅうまい、赤ちょうちん、昭和レトロ、奥に4人ほどの小部屋、店主が一人で手早く (2024年10月)。',
      confidence: 'low', sources: [TB, R + 'B6892814/', R + 'B129839810/', R + 'B111217045/', R + 'B118244906/', R + 'B87219338/', R + 'B203421256/', R + 'B414996379/', R + 'B493811171/', R + 'B508851448/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; eight seats; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区夷川通河原町西入ル北側 真崎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review June 2025.' },
    pin_source: `Tabelog ${TB} (35.014523, 135.768646); the address gives no town or lot and GSI matches only the ward, so the Tabelog pin is kept unconfirmed; nearest existing record 4.2 m (kyoto_ippin_ryori_takakura); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B111217045/'],
    price_note: 'Kushikatsu price range from a 2013 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu (per skewer)', '¥130–350', 'Fried', 'no', 'no', 'July 2013.', 'kushikatsu'),
      it('', '', 'Shumai', '', 'Small dishes', 'no', 'no', 'June 2025.', 'shumai'),
    ] }, {
    cuisine: '串カツと丹後の食材の家庭的な昭和の居酒屋 (2011〜2025年の口コミ)・えび、牛肉コロッケ、クリームコロッケなどの串カツ、1本130〜350円ほど (2013年7月、2016年3月)・京丹後の魚、げんげの干物、えいのから揚げ、塩おでん、おばんざい、いのししの料理 (2011〜2024年の口コミ)・しゅうまい (2025年6月)・3,000〜5,000円ほど (食べログ)',
    neighborhood: '夷川河原町',
    gf_detail: 'グルテンフリー不可。パン粉の串カツ、コロッケ、しゅうまい、味付けに醤油 (2011〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。串揚げ、京丹後の魚、いのしし、だしの料理 (2011〜2025年の口コミ)。',
    notes: '[串カツの居酒屋・夷川河原町、現金のみ] 赤ちょうちんの小さなカウンター。丹後出身の店主が串カツを揚げ、京丹後の魚や野菜、おばんざい、しゅうまいも。家庭的でのんびり。喫煙可。日曜休み。',
  });
}

// ================================================================ 京大和 Kyo Yamato
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001277/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.kyoyamato.com/'; const PR = 'https://precious.jp/articles/-/17833';
  const H = day(['11:30', '13:00'], ['17:00', '19:00']);
  put({
    id: 'kyoto_kyo_yamato', name: '京大和 (Kyo Yamato)', category: 'OMNI',
    lat: 34.99922573788008, lng: 135.78141797028894, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Kyoto kaiseki of seasonal ingredients with dashi and soy throughout; the kitchen adjusted portion size for a June 2026 guest (official site; 2021–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki ryotei of fish and dashi (official site; 2021–2026 reviews).',
    hours_raw: 'Lunch from 11:30 (last entry 13:00) and dinner from 17:00 (last entry 19:00); closed Wednesday, subject to change (official site). The times shown are seating windows, not closing times. Tabelog gives slightly different hours (11:30–14:00 and 17:30–19:00, irregular closing, 29 December–2 January closed), so the hours are marked irregular. Reservation only (Tabelog). Lunch ¥22,000 or ¥38,500; bento ¥16,500 for 10 or more; dinner ¥38,500, ¥49,500 or ¥66,000, tax included, plus a 15% service charge (official site). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). Private tatami rooms for 2 to 30+, a large garden, views of the Yasaka Pagoda and the city; parking (Tabelog; 2022–2026 reviews). Beside Kodaiji, sharing grounds with Park Hyatt Kyoto (precious.jp).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji, Higashiyama',
    cuisine: 'Kyoto kaiseki of seasonal ingredients in a ryotei founded in 1877, in private tatami rooms over a garden (official site; precious.jp; 2021–2026 reviews) · lunch courses ¥22,000 and ¥38,500; dinner courses ¥38,500–66,000, plus 15% service (official site) · refined, traditional flavours; portions adjusted on request (2017–2026 reviews) · a clay-pot rice breakfast for Park Hyatt guests (November 2021) · Michelin-starred per reviewers (September 2021; June 2026)',
    website: WEB, gmaps: gm('京大和 高台寺'), menu_url: WEB,
    notes: '[Kaiseki ryotei · beside Kodaiji] A historic ryotei of 1877 on the slope by Kodaiji — garden, private tatami rooms and views over the Yasaka Pagoda and the city — serving seasonal Kyoto kaiseki. Reservation only; 15% service on top. Shares its grounds with, but is run apart from, Park Hyatt Kyoto. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'Per the official site, precious.jp and reviewers: a Kyoto ryotei founded in 1877 (Meiji 10), on whose grounds Park Hyatt Kyoto opened; reviewers say the ryotei and the hotel operate independently (September 2021). It hosts family celebrations, memorials and wedding meetings (2017–2022), and the owner greets guests with soft, attentive care (February 2024). The owner told a March 2024 guest that the Suikokan room was a gathering place for Sanjo Sanetomi, Katsura Kogoro, Sakamoto Ryoma and other figures.',
      philosophy: 'Seasonal ingredients in elegant Kyoto kaiseki (official site).', specialty: 'Seasonal kaiseki.',
      anecdotes: [
        { text: 'A March 2024 lunch guest was told by the owner that the Suikokan room once gathered Sanjo Sanetomi, Katsura Kogoro and Sakamoto Ryoma.', source: R + 'B481895742/' },
        { text: 'A January 2024 couple had the window opened a little so the couple could hear rain and birds while dining.', source: R + 'B480135179/' },
        { text: 'A family of many years has marked children’s milestones, birthdays and memorials here (December 2017).', source: R + 'B318054980/' },
      ],
      japanese_sources_summary: '公式サイト: 「平安より悠久の時を刻む 京都・東山の料亭」、「四季折々の旬の食材の 京の雅なる懐石へ」、昼食 11:30〜13:00 (最終入店)、夕食 17:00〜19:00 (最終入店)、水曜定休 (変更の場合あり)、昼 22,000円・38,500円、お弁当16,500円 (10名以上)、夜 38,500円・49,500円・66,000円 (税込)、別途サービス料15%。precious.jp: 「明治10年創業の料亭「京大和」の敷地内に開業した」パーク ハイアット 京都。食べログ: 日本料理、東山区高台寺南桝屋町359、完全予約制、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー可、2〜30名以上の個室、禁煙、駐車場あり、12月29日〜1月2日休み。口コミ (2017年〜2026年6月、英語): 家族の祝い事や法事、庭と八坂の塔や市内の眺め、ホテルとは別に営業 (2021年9月)、ホテルの客の朝食 (2021年11月)、Suikokan の間の由来 (2024年3月)、美しい店主の気配り (2024年2月)、ミシュランの星との声。',
      confidence: 'medium', sources: [TB, WEB, PR, R + 'B318054980/', R + 'B442895660/', R + 'B443709274/', R + 'B448294679/', R + 'B449811476/', R + 'B455136901/', R + 'B480135179/', R + 'B481895742/', R + 'B506533832/', R + 'B531806552/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; 15% service charge; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺南桝屋町359',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (34.999226, 135.781418); cross-checked: GSI 京都府京都市東山区桝屋町359番地 (lot) 37 m; nearest existing record 57.2 m (kyoto_yasaka_park_hyatt, hidden); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB],
    price_note: 'Official prices, tax included; 15% service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki', '¥22,000', 'Lunch', 'ask', 'no', 'Also ¥38,500.', 'lunch'),
      it('', '', 'Dinner kaiseki', '¥38,500', 'Dinner', 'ask', 'no', 'Also ¥49,500 and ¥66,000.', 'dinner'),
      it('', '', 'Bento (10 or more)', '¥16,500', 'Lunch', 'ask', 'no', 'Groups of 10 or more.', 'bento'),
    ] }, {
    cuisine: '明治10年創業の料亭で、庭に面した座敷で旬の京懐石 (公式サイト、precious.jp、2021〜2026年の口コミ)・昼のコース22,000円と38,500円、夜のコース38,500〜66,000円、別途サービス料15% (公式サイト)・上品で伝統的な味、量の調整にも応じる (2017〜2026年の口コミ)・パーク ハイアットの宿泊客には土鍋ごはんの朝食 (2021年11月)・ミシュランの星との声 (2021年9月、2026年6月)',
    neighborhood: '高台寺、東山',
    gf_detail: '予約時に要確認。だしと醤油を使う旬の京懐石。2026年6月の客には量を調整 (公式サイト、2021〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚とだしの懐石の料亭 (公式サイト、2021〜2026年の口コミ)。',
    notes: '[懐石の料亭・高台寺のそば] 高台寺の坂の明治10年創業の料亭。庭、座敷の個室、八坂の塔と市内の眺め、旬の京懐石。完全予約制、別途サービス料15%。パーク ハイアット 京都と敷地を共にするが別の営業。水曜休み。',
  });
}

// ================================================================ cafe 我楽苦多 cafe Garakuta
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26009035/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://kyoto-garakuta.com/';
  const L = day(['11:00', '18:00']); const S = day(['11:00', '17:00']);
  put({
    id: 'kyoto_cafe_garakuta_ninenzaka', name: 'cafe 我楽苦多 (cafe Garakuta)', category: 'OMNI',
    lat: 34.99817023788059, lng: 135.7809243902786, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee drinks; other menu items are not described (2014–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black and iced coffee are plant-based; lattes use milk; no plant milk mentioned (2019–2025 reviews).',
    hours_raw: 'Monday, Thursday, Saturday and Sunday 11:00–18:00; Tuesday and Wednesday 11:00–17:00; closed Friday; hours may change (Tabelog). No reservations (Tabelog). Cash only — no cards or e-money (Tabelog). 15 seats with an open terrace; non-smoking (Tabelog). Beans roasted on site and sold; English spoken well by staff (August 2025). Traditional-style toilet (February 2017). On Ninenzaka, 3 min walk from Kodaiji and 5 min from Kiyomizu-dera (Tabelog).',
    hours: { 0: L, 1: S, 2: S, 3: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ninenzaka',
    cuisine: 'Coffee-roasting café on Ninenzaka behind a striking ukiyo-e and paper-umbrella front (2014–2026 reviews) · freshly roasted, rich and bitter drip coffee; iced coffee; double café latte (April 2019–November 2025) · coffee beans to take home (2023–2025 reviews) · under ¥1,000 (Tabelog)',
    website: WEB, gmaps: gm('cafe 我楽苦多 二年坂'), menu_url: null,
    notes: '[Coffee · Ninenzaka, cash only] A little roastery café just down from the busiest photo spot on Ninenzaka: freshly roasted, deep and bitter coffee, iced coffee and lattes, beans to take away, jazz playing and English-speaking staff. Closed Friday.',
    chef_bio: { chef_name: null, roles: ['Roaster and baristas (unnamed)'], origin: null,
      background: 'Per reviewers: a café on Ninenzaka with a “coffee roasting workshop” sign, roasting beans on the spot and selling the beans, popular with overseas visitors and served by English-speaking staff (2019–2026 reviews).',
      philosophy: null, specialty: 'House-roasted coffee.',
      anecdotes: [
        { text: 'An April 2019 visitor watched beans roasted on the spot and called the rich, deep, bitter cup what coffee should be.', source: R + 'B414434179/' },
        { text: 'A September 2025 sightseer skipped the long queue at a famous café nearby, drawn in by the roasting aroma.', source: R + 'B514650601/' },
        { text: 'A November 2014 visitor expected tatami behind the ukiyo-e front and found a sleek modern interior instead.', source: R + 'B71941437/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・喫茶店、東山区高台寺桝屋町350-21、高台寺から徒歩3分、清水寺から徒歩5分、月・木・土・日 11:00〜18:00、火・水 11:00〜17:00、金曜休み、予約不可、カード・電子マネー不可、15席、テラス、禁煙、公式サイトあり。口コミ (2014年11月〜2026年3月、英語): 二年坂のカフェ、浮世絵と和傘の外観、店内は現代的、「珈琲焙煎所」の看板、目の前で焙煎、濃く深い苦み、アイスコーヒー、ダブルのカフェラテ、豆の販売、ジャズ、海外の客が多く英語の上手なスタッフ (2025年8月)、和式のトイレ (2017年)。',
      confidence: 'low', sources: [TB, WEB, R + 'B71941437/', R + 'B250099719/', R + 'B414434179/', R + 'B472232046/', R + 'B513664074/', R + 'B514650601/', R + 'B517575460/', R + 'B525243244/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff; cash only; terrace seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺桝屋町350-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through March 2026.' },
    pin_source: `Tabelog ${TB} (34.998170, 135.780924); cross-checked: GSI 京都府京都市東山区桝屋町350番地 (lot) 69 m — a large lot block on the slope; nearest existing record 9.6 m (kyoto_kasagiya_ninenzaka); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513664074/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'House-roasted drip coffee', '', 'Coffee', 'ask', 'vegan', 'April 2019.', 'drip'),
      it('', '', 'Iced coffee', '', 'Coffee', 'ask', 'vegan', 'August 2025.', 'iced'),
    ] }, {
    cuisine: '浮世絵と和傘の外観の二年坂の自家焙煎のカフェ (2014〜2026年の口コミ)・焙煎したての濃く苦みのあるドリップ、アイスコーヒー、ダブルのカフェラテ (2019年4月〜2025年11月)・持ち帰りのコーヒー豆 (2023〜2025年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '二年坂',
    gf_detail: '要確認。コーヒーの飲み物。ほかのメニューの説明はない (2014〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。ブラックやアイスのコーヒーは植物性、ラテは牛乳。植物性ミルクの記載はない (2019〜2025年の口コミ)。',
    notes: '[コーヒー・二年坂、現金のみ] 二年坂の撮影スポットのすぐ下の小さな焙煎所のカフェ。焙煎したての深く苦いコーヒー、アイスコーヒーやラテ、豆の持ち帰り、ジャズ、英語の話せるスタッフ。金曜休み。',
  });
}

save();
