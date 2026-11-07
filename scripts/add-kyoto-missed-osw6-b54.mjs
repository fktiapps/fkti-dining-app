// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 54.
//   + 桶屋久次郎 Okeya Kyujiro (theatrical omakase counter, Nishikiyamachi) — skipped in osw6-53, drafted per the coordinator:
//     a small group (Montreal, Vancouver, Toronto, Kyoto) is not a large parent, and being based abroad does not count.
//   + 京の魚 擔 Kyo no Sakana Katsugi (fish kaiseki in private rooms, Kiyamachi; dogs welcome by arrangement) — rest
//   + 18 PREMIER BAR (all-you-can-drink darts bar open to 5 am, Kiyamachi) — rest
//   + 黒毛和牛タンとハラミ 焼肉龍 Yakiniku Ryu (A5 wagyu tongue and skirt yakiniku, all-you-can-eat courses, Kawaramachi) — rest
//   Rest tier, nearest-first from `next rest 2000`.
//   Same-name counts first (2026-11-07): 桶屋久次郎 — one in Japan; a May 2026 review lists Montreal (2020), Vancouver (2022)
//   and Toronto (2024). 擔 — one. 18 PREMIER BAR — one. 焼肉龍 — two (this shop and Namba Sennichimae), a pair.
//   None is in data/kyoto.json by name or address.
//   Service charges per Tabelog's Japanese original: 桶屋 「サービス料10％」; 擔 「アラカルトの場合：席料1100円」; 18 PREMIER BAR none
//   listed; 焼肉龍 「※12/4.5.11〜1/5まで年末年始料金として10％頂いてます」. No halal claims; no owner deaths.
//   Pins: 擔 and 18 PREMIER BAR share the 弥栄ビル木屋町 at 鍋屋町217 with kyoto_sosaku_ryori_soju_kiyamachi (0.1–4.7 m), and
//   桶屋 sat 1.1 m from kyoto_sumibi_kotepan; each new pin is offset 6–8 m and the offset is stated in pin_source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 桶屋久次郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044618/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://okeyakyujiro.jp/';
  const L = day(['11:30', '15:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_okeya_kyujiro', name: '桶屋久次郎 (Okeya Kyujiro)', category: 'OMNI',
    lat: 35.004901, lng: 135.770007, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A set omakase of sushi, tempura, shabu-shabu and soba (May 2026); tempura and soba usually contain wheat. Tell the restaurant about allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood omakase of sushi, tempura and shabu-shabu (May 2026).',
    hours_raw: 'Wed–Sat: lunch "Ochakase" afternoon tea 11:30–15:30, dinner 17:00–22:00; closed Sunday to Tuesday (Tabelog). Reservation only, online, with a credit card; cancel at least 48 hours ahead; groups of 5 or more pay in full in advance (Tabelog). Service charge 10% (Tabelog, Japanese text: 「サービス料10％」). Cards incl. UnionPay; no e-money or QR (Tabelog). 12 counter seats (Tabelog). Non-smoking (Tabelog). Hard to find — staff meet guests at the entrance at the booked time (April 2026). Off Nishikiyamachi north of Shijo, 3 min from Kyoto-Kawaramachi and Gion-Shijo (Tabelog).',
    hours: { 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikiyamachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'A "theatre-style" omakase in which food, sound, aroma and performance are staged together (Tabelog) · a two-hour sequence of sushi, tempura, shabu-shabu and soba, ending with matcha (May 2026) · a sasagiri bamboo-leaf carving demonstration (May 2026) · lunch "Ochakase": afternoon tea with a matcha experience and hands-on wagashi making (April and May 2026)',
    website: OF, gmaps: gm('桶屋久次郎 京都'), menu_url: TB,
    notes: '[Theatrical omakase · Nishikiyamachi, sushi as a stage show] A 12-seat counter where a curtain rises on a two-hour staged omakase — sushi, tempura, shabu-shabu, soba and matcha, with bamboo-leaf carving and lantern light — from a group whose Montreal, Vancouver and Toronto restaurants have Michelin recognition. Lunch is a hands-on matcha and wagashi afternoon tea. English-speaking staff. Wed–Sat, booking online only; 10% service charge.',
    chef_bio: { chef_name: null, roles: ['Founder Matsuda (given name not in the sources), from Mie Prefecture (May 2026 review)'], origin: 'Mie Prefecture (founder; May 2026 review)',
      background: 'Per Tabelog: a sensory dining experience from a chef behind a Michelin one-star restaurant, with a theatre-style omakase dinner and an "Ochakase" afternoon tea. A May 2026 review says the group was founded by Matsuda, from Mie, and opened in Montreal in 2020 (featured in Quebec\'s first Michelin selection in 2025), Vancouver in 2022 (one Michelin star within a year) and Toronto in 2024 (Michelin-listed in its first year), before Kyoto.',
      philosophy: 'Food, sound, aroma and performance combined into one experience (Tabelog).', specialty: 'Theatre-style omakase.',
      anecdotes: [
        { text: 'A May 2026 diner describes staff in traditional dress leading guests into a lantern-lit room, then a black curtain rising a minute after sitting down.', source: R + 'B528225911/' },
        { text: 'A May 2026 host who usually interprets for overseas guests found every staff member spoke English and knew the details.', source: R + 'B526662036/' },
        { text: 'An October 2026 diner found the food better than expected — and the bill high.', source: R + 'B538039020/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・日本料理、中京区西木屋町通四条上る紙屋町367、阪急京都河原町駅・京阪祇園四条駅から徒歩約3分、水〜土11:30〜15:30と17:00〜22:00、日月火休み、完全予約制 (オンライン、カード必須、48時間前までのキャンセル、5名以上は前払いとサービス料20%)、サービス料10%、カウンター12席、禁煙、ミシュラン一つ星の店を手がけたシェフ、劇場型のおまかせディナー、昼は「Ochakase」のアフタヌーンティー。口コミ (2026年4月〜10月、英語): 創業者は三重出身の Matsuda、モントリオール (2020年)、バンクーバー (2022年)、トロント (2024年)、寿司、天ぷら、しゃぶしゃぶ、そば、抹茶、sasagiri の実演、和菓子作り、英語が通じる。複数の口コミ (2026年4月・5月) で海外からの客が多いとある。',
      confidence: 'medium', sources: [TB, OF, R + 'B526662036/', R + 'B527666604/', R + 'B528225911/', R + 'B528836661/', R + 'B538039020/'] },
    cultural_comfort: { level: 'english', note: 'Staff speak English (May 2026); book online with a card; arrive on time — staff meet guests at the entrance. Several reviews (April and May 2026) say most guests come from overseas.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通四条上る紙屋町367',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004901, 135.770073), offset 6 m west to clear kyoto_sumibi_kotepan (1.1 m away at the Tabelog point); cross-checked: GSI 京都府京都市中京区紙屋町367番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B527666604/'],
    price_note: 'No set prices published in the sources; Tabelog\'s budget is ¥30,000–39,999 at dinner and ¥15,000–19,999 at lunch; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Theatre-style omakase dinner', '', 'Dinner', 'ask', 'no', 'May 2026.', 'omakase'),
      it('', '', '"Ochakase" afternoon tea with matcha and wagashi making', '', 'Lunch', 'ask', 'ask', 'April and May 2026.', 'ochakase'),
    ] }, {
    cuisine: '料理、音、香り、演出を組み合わせた「劇場型」のおまかせ (食べログ)・寿司、天ぷら、しゃぶしゃぶ、そば、最後に抹茶の2時間のコース (2026年5月)・sasagiri の実演 (2026年5月)・昼は抹茶体験と和菓子作りのアフタヌーンティー「Ochakase」 (2026年4月・5月)',
    neighborhood: '西木屋町、四条の北。京都河原町駅',
    gf_detail: '要確認。寿司、天ぷら、しゃぶしゃぶ、そばのおまかせ (2026年5月)。天ぷらとそばはふつう小麦を含む。アレルギーは予約時に伝えて (食べログ)。',
    vegan_detail: 'ヴィーガン不可。寿司、天ぷら、しゃぶしゃぶの魚介のおまかせ (2026年5月)。',
    notes: '[劇場型のおまかせ・西木屋町、舞台のような寿司] 12席のカウンターで幕が上がり、寿司、天ぷら、しゃぶしゃぶ、そば、抹茶へと続く2時間の演出付きのおまかせ。sasagiri や提灯の灯り。モントリオール、バンクーバー、トロントの店がミシュランに選ばれたグループ。昼は抹茶と和菓子作りのアフタヌーンティー。英語が通じる。水〜土、予約はオンラインのみ、サービス料10%。',
  });
}

// ================================================================ 京の魚 擔
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027038/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kyo_no_sakana_katsugi', name: '京の魚 擔 (Kyo no Sakana Katsugi)', category: 'OMNI',
    lat: 35.004745, lng: 135.770663, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish courses with sashimi, grilled fish and ankake dishes (2024–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant — sashimi, grilled fish, dashi ankake (2024–26 reviews).',
    hours_raw: 'Daily 17:00–22:30 (last order food 21:00, drinks 21:30; courses to 21:00); closed irregularly (Tabelog). Reservations accepted; 50% cancellation fee the day before, 100% on the day; call ahead to bring children or pets (Tabelog). Table charge ¥1,100 when ordering à la carte (Tabelog, Japanese text: 「アラカルトの場合：席料1100円」). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 22 seats, mostly private rooms, on the second floor of a building (Tabelog; November 2023; January 2026). Heated tobacco only, in a smoking area; wheelchair accessible (Tabelog). Dogs allowed in private rooms with notice, for a fee (Tabelog; June and July 2024). On Kiyamachi north of Shijo, 2 min from Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Seasonal fish courses named after the Kyoto fish carriers of old, with sake mainly from Kyoto (Tabelog) · courses of sashimi, grilled fish and refined ankake dishes (July 2024); ¥10,000 courses with all-you-can-drink (November 2024; January 2026) · New Year osechi dishes (January 2026) · beautifully presented seasonal sashimi (January 2026)',
    website: null, gmaps: gm('京の魚 擔 木屋町'), menu_url: TB,
    notes: '[Fish kaiseki · Kiyamachi, private rooms (dogs welcome)] A second-floor fish restaurant on Kiyamachi, named after Kyoto\'s old fish carriers, serving seasonal sashimi, grilled fish and ankake dishes as courses in private rooms, with Kyoto sake. Well suited to business dinners and groups — and dogs can join in a private room by arrangement. ¥1,100 table charge à la carte.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese restaurant on Kiyamachi whose name, Katsugi, comes from the fishmongers who once carried live fish into Kyoto; seasonal dishes with fine fish and mainly Kyoto sake, in private rooms; pets welcome with notice.',
      philosophy: null, specialty: 'Seasonal fish courses.',
      anecdotes: [
        { text: 'A July 2024 visitor brought a dog to a private room and was grateful for the air conditioning and the help charging a phone.', source: R + 'B488903088/' },
        { text: 'A March 2024 host chose it for a Muslim friend who does not eat pork, because the menu centres on fish.', source: R + 'B481287558/' },
        { text: 'A December 2024 family gathering found the dishes excellent but the pacing slow — three and a half hours to dessert.', source: R + 'B496629495/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋・海鮮、中京区四条木屋町上ル鍋屋町217、阪急河原町駅から徒歩2分、毎日17:00〜22:30 (L.O. 料理21:00、ドリンク21:30)、不定休、予約可、キャンセル料あり、子供やペットは事前に電話で、アラカルトの場合は席料1100円、カード可、22席、個室、加熱式たばこの喫煙所、車椅子可、店名は京都に生きた魚を運んだ人たち (Katsugi) から、旬の魚と京都の日本酒。口コミ (2023年11月〜2026年1月、英語): 刺身、焼き魚、餡かけ、飲み放題付き10,000円のコース、お節、犬と個室で、料理の間隔が長いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B474316686/', R + 'B481287558/', R + 'B488686138/', R + 'B488903088/', R + 'B496079738/', R + 'B496629495/', R + 'B511106108/', R + 'B516244242/', R + 'B520395093/', R + 'B520693727/', R + 'B521277599/', R + 'B521808368/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course and a private room; tell the restaurant ahead if bringing a dog or children. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条木屋町上ル鍋屋町217',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.004690, 135.770663), offset 6 m north: the same building holds kyoto_sosaku_ryori_soju_kiyamachi (4.7 m) and 18 PREMIER BAR; cross-checked: GSI 京都府京都市中京区鍋屋町217番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496079738/', R + 'B521277599/'],
    price_note: 'Course price from November 2024 and January 2026 reviews; ¥1,100 table charge à la carte.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥10,000', 'Courses', 'ask', 'no', 'November 2024; January 2026.', 'course_nomihodai'),
      it('', '', 'Table charge (à la carte)', '¥1,100', 'Charge', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: '京都に魚を運んだ人たち (Katsugi) にちなんだ店名の旬の魚の料理、京都中心の日本酒 (食べログ)・刺身、焼き魚、上品な餡かけのコース (2024年7月)、飲み放題付き10,000円のコース (2024年11月、2026年1月)・正月はお節の料理 (2026年1月)・盛り付けの美しい旬の刺身 (2026年1月)',
    neighborhood: '木屋町、四条の北。京都河原町駅',
    gf_detail: '要確認。刺身、焼き魚、餡かけの魚のコース (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き魚、出汁の餡かけの魚の店 (2024〜2026年の口コミ)。',
    notes: '[魚の会席・木屋町、個室 (犬も可)] 木屋町のビル2階、京に魚を運んだ人たち (Katsugi) にちなむ魚料理の店。旬の刺身、焼き魚、餡かけのコースを個室で京都の日本酒と。接待や宴会に向き、事前に伝えれば犬も個室で一緒に。アラカルトは席料1,100円。',
  });
}

// ================================================================ 18 PREMIER BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042266/'; const R = TB + 'dtlrvwlst/';
  const H = day(['21:00', '05:00']);
  put({
    id: 'kyoto_18_premier_bar', name: '18 PREMIER BAR', category: 'OMNI',
    lat: 35.004681, lng: 135.770792, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks bar — beer, highballs, cocktails, wine, shochu (2025 reviews); beer contains gluten; no food information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the sources (2025 reviews).',
    hours_raw: '21:00–5:00; closed Tuesday; hours may change (Tabelog; May 2025). Reservations accepted (Tabelog). Cards accepted; no e-money or QR (Tabelog). Smoking allowed (Tabelog). All-you-can-drink pricing differs by gender and for students, per May–June 2025 reviews: men from ¥3,500, women from ¥2,500 (women ¥1,000 for one hour), students ¥2,000 with ID; a two-hour limit on Fridays, weekends and holidays (May 2025). Darts, karaoke rooms and a VIP room with a ¥5,000 charge (May and June 2025). Yaei Building Kiyamachi 3F, north of Shijo, 2 min from Kyoto-Kawaramachi (Tabelog; May 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Cheap all-you-can-drink and cocktails until morning (2025 reviews) · highballs, peach fizz, Passoa pineapple, gin and tonic, red and white wine, sours, whisky, shochu (May–June 2025) · original champagne with the VIP room (June 2025)',
    website: null, gmaps: gm('18 PREMIER BAR 木屋町'), menu_url: TB,
    notes: '[Bar · Kiyamachi, all-you-can-drink until 5 am] A neon-lit third-floor bar off Kiyamachi with graffiti walls, darts, karaoke rooms and a VIP room, built around cheap free-time all-you-can-drink — priced differently for men, women and students — and open until 5:00. Smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a bar on the third floor of the Yaei Building on Kiyamachi, open late. Reviews in 2025 describe neon and graffiti decor, darts, karaoke rooms and a VIP room.',
      philosophy: null, specialty: 'All-you-can-drink; darts.',
      anecdotes: [
        { text: 'An April 2025 visitor brought friends from abroad here for an after-party following a day of sightseeing.', source: R + 'B505876592/' },
        { text: 'A June 2025 pair, mindful of the last train, had one drink each under the wall-to-wall graffiti.', source: R + 'B509033350/' },
        { text: 'A June 2025 visitor returning to Kiyamachi after fifteen years found the street transformed, and ended the night here.', source: R + 'B509520494/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区鍋屋町217 弥栄ビル木屋町 3F、21:00〜翌5:00、火曜休み、予約可、カード可、喫煙可。口コミ (2025年4月〜8月、英語): ネオンとグラフィティの内装、ダーツ、カラオケの部屋、VIP ルーム (チャージ5,000円、オリジナルのシャンパン)、時間無制限の飲み放題は男性3,500円から、女性2,500円から、女性1時間1,000円、学生2,000円、金土日祝は2時間制、ハイボール、カクテル、ワイン、焼酎。',
      confidence: 'medium', sources: [TB, R + 'B503842351/', R + 'B505876592/', R + 'B506470154/', R + 'B507437630/', R + 'B507812038/', R + 'B507958223/', R + 'B508201916/', R + 'B508943624/', R + 'B509024659/', R + 'B509033350/', R + 'B509441523/', R + 'B509520494/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for the all-you-can-drink plan; smoking allowed; open very late. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町217 弥栄ビル木屋町 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2025.' },
    pin_source: `Tabelog ${TB} (35.004681, 135.770712), offset 7 m east: kyoto_sosaku_ryori_soju_kiyamachi in the same building sits 0.1 m away; cross-checked: GSI 京都府京都市中京区鍋屋町217番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507437630/', R + 'B509024659/'],
    price_note: 'Prices from May–June 2025 reviews; pricing differs by gender and for students.', last_checked: TODAY, items: [
      it('', '', 'Free-time all-you-can-drink (men / women / students)', '¥3,500 / ¥2,500 / ¥2,000', 'Drinks', 'ask', 'ask', 'May–June 2025.', 'nomihodai'),
      it('', '', 'All-you-can-drink, women, one hour', '¥1,000', 'Drinks', 'ask', 'ask', 'May 2025.', 'nomihodai_1h'),
      it('', '', 'VIP room charge (with original champagne)', '¥5,000', 'Charge', '', '', 'June 2025.', 'vip'),
    ] }, {
    cuisine: '朝まで、手頃な飲み放題とカクテル (2025年の口コミ)・ハイボール、ピーチフィズ、Passoa のパイン、ジントニック、赤白ワイン、サワー、ウイスキー、焼酎 (2025年5月〜6月)・VIP ルームにはオリジナルのシャンパン (2025年6月)',
    neighborhood: '木屋町、四条の北。京都河原町駅',
    gf_detail: '要確認。ビール、ハイボール、カクテル、ワイン、焼酎のバー (2025年の口コミ)。ビールはグルテンを含む。料理の情報はない。',
    vegan_detail: '要確認。口コミには飲み物しか出てこない (2025年の口コミ)。',
    notes: '[バー・木屋町、朝5時まで飲み放題] 木屋町のビル3階、ネオンとグラフィティの壁にダーツ、カラオケの部屋、VIP ルーム。男女と学生で料金の違う時間無制限の飲み放題が手頃で、朝5時まで。喫煙可。火曜休み。',
  });
}

// ================================================================ 黒毛和牛タンとハラミ 焼肉龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042170/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_ryu_kawaramachi', name: '黒毛和牛タンとハラミ 焼肉龍 (Yakiniku Ryu)', category: 'OMNI',
    lat: 35.005361, lng: 135.769561, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled wagyu with sauces, plus chijimi, kimchi and namul (September–October 2026); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2026 reviews).',
    hours_raw: 'Daily 16:00–23:00 (last order food 22:00, drinks 22:30); open all year (Tabelog). Reservations accepted; bookings more than 15 minutes late without notice are cancelled (Tabelog). Year-end surcharge of 10% in December and to 5 January (Tabelog, Japanese text: 「※12/4.5.11〜1/5まで年末年始料金として10％頂いてます」). Cards (VISA, Master, JCB, Diners) and PayPay; no e-money (Tabelog). 51 seats over two floors (5F and 6F) with sofa seating and a terrace (Tabelog; October 2026). Non-smoking (Tabelog). On Kawaramachi north of Shijo, 2 min from Kyoto-Kawaramachi (Tabelog; September 2026). Opened 9 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'A5 black wagyu yakiniku built around tongue and skirt (Tabelog; 2026 reviews) · "Hakuryu" all-you-can-eat course ¥4,500, about 95 items, soft-drink free flow +¥500 (September–October 2026) · beef tongue, "Negi Volcano" tongue, kalbi, skirt, loin, sirloin, offal (September–October 2026) · tongue sashimi, tongue yukhoe, egg-topped yukhoe, beef tataki (October–November 2026) · kimchi, namul, chijimi, corn butter, wakame soup, seasonal sorbet (September–October 2026)',
    website: null, gmaps: gm('焼肉龍 河原町'), menu_url: TB,
    notes: '[Wagyu yakiniku · Kawaramachi, tongue and skirt] A two-floor yakiniku above Kawaramachi specialising in A5 black wagyu tongue and skirt, best known for the ¥4,500 "Hakuryu" all-you-can-eat course of some 95 items, from tongue sashimi and yukhoe to kalbi and loin. Open daily from 16:00; 10% surcharge over the New Year period.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a yakiniku restaurant specialising in black wagyu tongue and skirt, opened in December 2024 on the fifth and sixth floors of a Kawaramachi building; a sister shop is in Namba Sennichimae.',
      philosophy: null, specialty: 'Wagyu tongue and skirt; all-you-can-eat course.',
      anecdotes: [
        { text: 'An October 2026 diner, driving afterwards, appreciated the ¥500 soft-drink free flow with the Hakuryu course.', source: R + 'B537406537/' },
        { text: 'An October 2026 visitor named the "revolutionary" skirt the best of the course.', source: R + 'B538368041/' },
        { text: 'An October 2026 pair arriving late on a rainy night found the floor nearly empty and had most orders within five minutes.', source: R + 'B536822470/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・居酒屋、中京区河原町通四条上ル2塩屋町336 志津屋四条河原町ビル 5F・6F、毎日16:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、年中無休、予約可 (15分以上の遅刻は自動キャンセル)、年末年始料金10%、カード・PayPay 可、51席、禁煙、2024年12月9日オープン。口コミ (2026年9月〜11月、英語): A5の黒毛和牛、タンとハラミ、Hakuryu の食べ放題コース4,500円 (約95品)、ソフトドリンク飲み放題+500円、ネギのタン、カルビ、ロース、タン刺し、タンのユッケ、炙り、キムチ、ナムル、チヂミ、コーンバター、わかめスープ、シャーベット。',
      confidence: 'medium', sources: [TB, R + 'B535361187/', R + 'B535727278/', R + 'B535942132/', R + 'B536822470/', R + 'B537347952/', R + 'B537406537/', R + 'B537639097/', R + 'B538334630/', R + 'B538368041/', R + 'B538608508/', R + 'B538638534/', R + 'B538753889/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The all-you-can-eat course is the easy order; arrive on time — late bookings are cancelled after 15 minutes. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上ル2塩屋町336 志津屋四条河原町ビル 5F・6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005361, 135.769561); cross-checked: GSI 京都府京都市中京区塩屋町336番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535361187/', R + 'B537406537/', R + 'B538608508/'],
    price_note: 'Course price from September–October 2026 reviews; 10% surcharge over the New Year period.', last_checked: TODAY, items: [
      it('', '', '"Hakuryu" all-you-can-eat course (about 95 items)', '¥4,500', 'Courses', 'ask', 'no', 'September–October 2026.', 'hakuryu'),
      it('', '', 'Soft-drink free flow', '+¥500', 'Drinks', '', '', 'With a course; September–October 2026.', 'soft_nomihodai'),
      it('', '', 'Beef tongue yukhoe', '', 'À la carte', 'ask', 'no', 'October 2026.', 'tan_yukhoe'),
    ] }, {
    cuisine: 'タンとハラミが中心の A5の黒毛和牛の焼肉 (食べログ、2026年の口コミ)・約95品の「Hakuryu」食べ放題コース4,500円、ソフトドリンク飲み放題+500円 (2026年9月〜10月)・牛タン、ネギのタン、カルビ、ハラミ、ロース、サーロイン、ホルモン (2026年9月〜10月)・タン刺し、タンのユッケ、卵黄のユッケ、牛のたたき (2026年10月〜11月)・キムチ、ナムル、チヂミ、コーンバター、わかめスープ、季節のシャーベット (2026年9月〜10月)',
    neighborhood: '河原町、四条の北。京都河原町駅',
    gf_detail: '要確認。たれで焼く和牛、チヂミ、キムチ、ナムル (2026年9月〜10月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (2026年の口コミ)。',
    notes: '[和牛焼肉・河原町、タンとハラミ] 河原町のビル5〜6階、A5の黒毛和牛のタンとハラミが専門の焼肉店。約95品の4,500円の「Hakuryu」食べ放題が看板で、タン刺しやユッケからカルビ、ロースまで。毎日16時から。年末年始は10%加算。',
  });
}

save();
