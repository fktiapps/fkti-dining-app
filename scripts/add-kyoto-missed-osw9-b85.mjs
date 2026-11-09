// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 85.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + CL FASHION & CAFE (jockey Christophe Lemaire's boutique and horse-racing café; since November 2025)
//   + 彦八 Hikohachi (sushi and seafood izakaya by Higashiyama Yasui; platinum seafood bowl lunch)
//   - 京うな和本店 祇園八坂 — chain: うな和, five or more shops (sister shops 26034563 and 26041736 already skipped)
//   - ル フィナンシェ ドゥ ラ リジェール — retail food shop (Greg 11-07 ruling): a take-home financier shop with no seating
//     listed, no sourced founding date or family history, and no sourced GF or vegan options
//   + カラスマカリー Karasuma Curry (lunch curry in a basement live house, run by the owner alone)
//   - KYOTO 1er BAKERY with cuisine — no 2025–26 review (latest July 2024)
//   - カフェ・ベローチェ 烏丸蛸薬師店 — chain: Caffè Veloce, a national café chain
//   Not processed: からすま京都ホテル オリゾンテ (26020361) — the hotel's own buffet; left for a ruling on whether Karasuma
//   Kyoto Hotel counts as a big-chain hotel.
//   Brand checks: none of CL FASHION, 彦八 or カラスマカリー is in data or queue-status by name; none is a THAN brand; none is in
//   a hotel.
//   Service charges from Tabelog's Japanese original: 彦八 「お通し代300円〜500円」; CL and カラスマカリー have no section.
//   Pins (checked against main, hidden records included): 彦八 moved 3m NW (3.9m from kyoto_higashiyama_yaoi_honten);
//   the other two ≥ 24m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045207', 'chain: 京うな和本店 — five or more うな和 shops (sister shops 26034563 and 26041736 already skipped as a chain)');
skip('26036483', 'retail food shop (Greg 11-07 ruling): a take-home financier shop (gift boxes, individually wrapped; no seating listed); no sourced founding date or family history, no sourced GF or vegan options');
skip('26036195', 'no 2025–26 review (the latest fetched review is from July 2024)');
skip('26011859', 'chain: カフェ・ベローチェ (Caffè Veloce), a national café chain');

// ================================================================ CL FASHION & CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043965/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.c-lemaire.co.jp';
  const D = day(['11:00', '18:00']);
  put({
    id: 'kyoto_cl_fashion_cafe', name: 'CL FASHION & CAFE', category: 'OMNI',
    lat: 35.009468, lng: 135.763355, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinks with macarons, crème brûlée, nougat or parfait (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and tea; the desserts have egg or dairy (2026 reviews).',
    hours_raw: 'Mon, Thu–Sun 11:00–18:00; closed Tuesdays and Wednesdays; hours may change (Tabelog). Two sets: a drink, or a drink with dessert (July 2026 review); staff seat guests and take orders at the table (March 2026 review). Cards (AMEX); no e-money or QR (Tabelog). Non-smoking (Tabelog). Café on the ground floor with racing trophies; the boutique upstairs (March 2026 review). 5 min from Karasuma-Oike (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-Sanjo — 5 min from Karasuma-Oike Stn',
    cuisine: 'Horse-racing café: the drink-and-macaron "Track 1" set ¥900 (September 2026), drink-and-dessert sets with crème brûlée, mascarpone, nougat, a strawberry sundae or almond brûlée (2026), lemon macarons with cappuccino in cups designed by Lemaire (August 2026); about ¥1,000–3,000',
    website: WEB, gmaps: gm('CL FASHION & CAFE 京都'), menu_url: null,
    notes: '[Café · Sakaimachi] The boutique café of JRA jockey Christophe Lemaire: tables numbered like furlong poles, live racing on screen, trophies, saddles and whips to see, and dessert sets with coffee. A must for racing fans; about ¥1,000–3,000.',
    chef_bio: { chef_name: null, roles: ['Brand store of jockey Christophe Lemaire'], origin: null,
      background: 'Opened 6 November 2025 (Tabelog) as the boutique and café of JRA jockey Christophe Lemaire (February and March 2026 reviews). Trophies from races abroad, saddles, whips and racing silks on display (2026 reviews).',
      philosophy: null,
      specialty: 'Drink and dessert sets; racing exhibits.',
      anecdotes: [
        { text: 'A March 2026 visitor was eating a strawberry sundae when Lemaire walked in, and got a handshake and a photo.', source: R + 'B524016763/' },
        { text: 'An August 2026 pair arrived at opening, held a jockey\'s whip for a photo, and sat at the table marked for the 2-furlong pole.', source: R + 'B534517694/' },
        { text: 'A September 2026 fan, turned away by a queue on the first try, came back and watched the Green Channel racing broadcast over ginger ale and macarons.', source: R + 'B517585678/' },
      ],
      japanese_sources_summary: '食べログ: CL FASHION & CAFE、カフェ、中京区大阪材木町690-3、烏丸御池駅から徒歩5分、月・木〜日 11:00〜18:00、火・水曜休み、カード可 (AMEX)、電子マネー・QR 不可、禁煙、2025年11月6日オープン。口コミ (2026年、英語): JRA の騎手 Christophe Lemaire のブティックとカフェ、競馬の中継、ハロン棒のような席番号、トロフィー、鞍や鞭の展示、飲み物とマカロンのセット900円 (2026年9月)、クレームブリュレ、イチゴのサンデー。',
      confidence: 'medium', sources: [TB, WEB, R + 'B517585678/', R + 'B523454532/', R + 'B523846127/', R + 'B524016763/', R + 'B530934820/', R + 'B531159540/', R + 'B531556777/', R + 'B534517694/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the exhibits and seat guests (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大阪材木町690-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009468, 135.763355); cross-checked: GSI 京都府京都市中京区大阪材木町690番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517585678/'],
    price_note: 'Set price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Track 1: drink and macarons', '¥900', 'Sets', 'ask', 'ask', 'September 2026 review.', 'track1'),
      it('', '', 'Drink and dessert set (crème brûlée, sundae and others)', '', 'Sets', 'ask', 'no', '2026 reviews.', 'dessert_set'),
    ] }, {
    cuisine: '競馬のカフェ: 飲み物とマカロンの「Track 1」900円 (2026年9月)、クレームブリュレ、マスカルポーネ、ヌガー、イチゴのサンデー、アーモンドのブリュレの飲み物とデザートのセット (2026年)、Lemaire のデザインのカップでカプチーノとレモンのマカロン (2026年8月)、1,000〜3,000円ほど',
    neighborhood: '堺町三条。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。飲み物とマカロン、クレームブリュレ、ヌガー、パフェ (2026年の口コミ)。',
    vegan_detail: '要確認。コーヒーと紅茶。デザートは卵か乳製品入り (2026年の口コミ)。',
    notes: '[カフェ・堺町] JRA の騎手 Christophe Lemaire のブティックのカフェ。ハロン棒のような席番号、競馬の中継、トロフィーや鞍、鞭の展示、コーヒーとデザートのセット。競馬ファンに。1,000〜3,000円ほど。',
  });
}

// ================================================================ 彦八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016449/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://hikohachi.studio.site/';
  const D = day(['11:45', '14:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_hikohachi_higashiyama', name: '彦八 (Hikohachi)', category: 'OMNI',
    lat: 35.000438, lng: 135.777313, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and sashimi are often served with soy sauce; the lunch set includes tempura (April 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, seafood bowls and grilled fish (2025–26 reviews).',
    hours_raw: 'Lunch 11:45–14:00 (L.O. 13:45); dinner 17:30–22:30 (L.O. 21:30); closed Mondays, but open 31 December and 1 January (Tabelog). Cover ¥300–500 (Tabelog Japanese original 「お通し代300円〜500円」). Cards; no e-money or QR (Tabelog). 16 seats: 5 at the counter, 4 at tables, 6 at sunken kotatsu; private rooms; non-smoking (Tabelog). Two-hour all-you-can-drink for ¥2,000 with banquet courses (April 2026 review). 1 min from the Higashiyama Yasui bus stop (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama Yasui, south of Yasaka Shrine — 1 min from the bus stop',
    cuisine: 'Sushi, seafood and izakaya dishes: the Platinum seafood bowl set of 14 toppings (sea urchin, salmon roe, tuna, salmon, shrimp, scallop) with tempura, small dishes and red miso soup at lunch (April 2026); sashimi, grilled dishes and tempura at the counter (January 2025); banquet courses with a ¥2,000 drinks option (April 2026); about ¥3,000–4,000 at lunch, ¥6,000–8,000 at dinner',
    website: WEB, gmaps: gm('彦八 東山安井'), menu_url: null,
    notes: '[Sushi · Higashiyama Yasui] A traditional-fronted sushi and seafood izakaya between Kiyomizu and Gion: a showy 14-topping seafood bowl set at lunch, sushi, sashimi and tempura by night, with a golf-loving chef at the counter. Reviews are mixed on service.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A chef who loves golf and talks about it at the counter (January 2025 review).',
      philosophy: null,
      specialty: 'Platinum seafood bowl set.',
      anecdotes: [
        { text: 'An April 2026 sightseer, coming from Kiyomizu-dera and Ishibe-koji, was struck by the 14-topping seafood bowl the moment it arrived.', source: R + 'B525665488/' },
        { text: 'A January 2025 guest at the counter found the hospitality warm and the golf talk with the chef fun.', source: R + 'B500113070/' },
        { text: 'A January 2026 repeat visitor was put off by a drunk customer and found the business style pushy.', source: R + 'B487509762/' },
      ],
      japanese_sources_summary: '食べログ: 彦八、寿司・魚介料理・居酒屋、東山区毘沙門町44 1F、市バス東山安井から徒歩1分、昼 11:45〜14:00 (L.O. 13:45)、夜 17:30〜22:30 (L.O. 21:30)、月曜休み (12月31日と1月1日は営業)、お通し300〜500円、カード可、電子マネー・QR 不可、16席、個室あり、禁煙。口コミ (2025〜2026年、英語): 14種の具の海鮮丼のセットに揚げ物、小鉢、赤だし (2026年4月)、ゴルフ好きの料理人 (2025年1月)、宴会コースに2時間飲み放題2,000円。',
      confidence: 'low', sources: [TB, WEB, R + 'B487509762/', R + 'B500113070/', R + 'B525665488/', R + 'B526601123/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, tables and private rooms; tourist-friendly lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区毘沙門町44 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.000419, 135.777336), moved 3m NW to clear kyoto_higashiyama_yaoi_honten (3.9m); cross-checked: GSI 京都府京都市東山区毘沙門町44番地 (lot) 100m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525665488/', R + 'B526601123/'],
    price_note: 'No item prices; reviews give ¥3,000–4,000 at lunch; ¥300–500 cover.', last_checked: TODAY, items: [
      it('', '', 'Platinum seafood bowl set (with tempura, small dishes, red miso soup)', '', 'Lunch', 'ask', 'no', 'April 2026 reviews.', 'platinum_don'),
    ] }, {
    cuisine: '寿司、魚介、居酒屋の料理: 雲丹、いくら、マグロ、サーモン、海老、ホタテなど14種の具の海鮮丼に揚げ物、小鉢、赤だしのランチのセット (2026年4月)、カウンターで刺身、焼き物、揚げ物 (2025年1月)、宴会コースに2,000円の飲み放題 (2026年4月)、昼は3,000〜4,000円、夜は6,000〜8,000円ほど',
    neighborhood: '東山安井、八坂神社の南。バス停から徒歩1分',
    gf_detail: '要確認。寿司と刺身は醤油を使うことが多い。ランチのセットに揚げ物 (2026年4月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、海鮮丼、焼き魚 (2025〜26年の口コミ)。',
    notes: '[寿司・東山安井] 清水と祇園の間の和の構えの寿司と魚介の居酒屋。昼は14種の具の豪華な海鮮丼のセット、夜は寿司、刺身、揚げ物。ゴルフ好きの料理人のカウンター。接客の評価は分かれる。',
  });
}

// ================================================================ カラスマカリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033777/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30']);
  put({
    id: 'kyoto_karasuma_curry', name: 'カラスマカリー (Karasuma Curry)', category: 'OMNI',
    lat: 35.006071, lng: 135.759863, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries with coconut milk (October 2025); whether the roux uses flour is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken curry and pork keema only (2025–26 reviews).',
    hours_raw: 'Lunch Mon–Sat 11:30–14:30; closed Sundays; Saturdays and holidays are not fixed — check Instagram (Tabelog). At night the space is a live house (2025 reviews). Cards, e-money and QR (Tabelog). 22 seats at tables; heated tobacco only in a smoking area (Tabelog). Basement of the Karasuma Daisan Star Building at Karasuma-Takoyakushi, 2 blocks north of Shijo-Karasuma (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Takoyakushi — 2 blocks north of Shijo-Karasuma',
    cuisine: 'Lunch curry, three choices: chunky chicken curry, spicy pork keema with bell pepper and coconut milk, or the combination of both ¥1,200 (2025–26); egg topping; pickled ginger and takuan instead of fukujinzuke (July 2026); generous rice',
    website: null, gmaps: gm('カラスマカリー 烏丸蛸薬師'), menu_url: null,
    notes: '[Curry · Karasuma] A lunch-only curry counter in a basement live house, with a drum kit on stage and rock videos on the screen: chicken curry, pork keema or both for ¥1,200, served by the owner alone.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner runs the place alone and keeps refilling water (July 2025 review); the room is a live house and bar at night (2025 reviews).',
      philosophy: null,
      specialty: 'Combination curry (chicken and pork keema).',
      anecdotes: [
        { text: 'A May 2025 visitor walked down to find a stage with a drum set and 20-year-old music videos on the projector.', source: R + 'B506207770/' },
        { text: 'A July 2026 diner looked up the song on the screen — Journey\'s "Open Arms" — over a chicken curry.', source: R + 'B532540355/' },
      ],
      japanese_sources_summary: '食べログ: カラスマカリー、カレー・洋食・インド料理、中京区手洗水町646-2 烏丸第三スタービル B1F、烏丸蛸薬師の南東、月〜土 11:30〜14:30、日曜休み、土曜と祝日は不定 (Instagram で告知)、カード・電子マネー・QR 可、22席、加熱式たばこのみ喫煙所。口コミ (2025〜2026年、英語): 夜はライブハウス、チキンカレー、ポークキーマ、あいがけ1,200円、店主が一人で営む (2025年7月)。',
      confidence: 'medium', sources: [TB, R + 'B503975728/', R + 'B506207770/', R + 'B510465276/', R + 'B515690909/', R + 'B515958700/', R + 'B523686079/', R + 'B532540355/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Three-item menu; easy to order.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区手洗水町646-2 烏丸第三スタービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006071, 135.759863); cross-checked: GSI 京都府京都市中京区手洗水町646番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510465276/', R + 'B523686079/'],
    price_note: 'Price from July 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Combination curry (chicken and pork keema)', '¥1,200', 'Curry', 'ask', 'no', 'July 2025 and March 2026 reviews.', 'combo'),
      it('', '', 'Chicken curry', '', 'Curry', 'ask', 'no', '2025–26 reviews.', 'chicken'),
      it('', '', 'Pork keema curry', '', 'Curry', 'ask', 'no', '2025–26 reviews.', 'keema'),
    ] }, {
    cuisine: '昼のカレー3種: 大きな鶏肉のチキンカレー、ピーマンとココナッツミルクの辛めのポークキーマ、両方のあいがけ1,200円 (2025〜26年)、卵のトッピング、福神漬けの代わりに紅しょうがとたくあん (2026年7月)、多めのご飯',
    neighborhood: '烏丸蛸薬師。四条烏丸から北へ2筋',
    gf_detail: '要確認。ココナッツミルクのスパイスカレー (2025年10月)。ルウの小麦粉の有無は不明。',
    vegan_detail: 'ヴィーガン不可。チキンカレーとポークキーマのみ (2025〜26年の口コミ)。',
    notes: '[カレー・烏丸] 地下のライブハウスの昼だけのカレー。ステージにドラム、スクリーンにロックの映像。チキン、ポークキーマ、あいがけ1,200円を店主が一人で。',
  });
}

save();
