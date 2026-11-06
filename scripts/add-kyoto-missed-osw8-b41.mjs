// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 41.
//   + トマトさん Tomato San (couple-run yoshoku and curry in Shimabara, over 40 years; core list)
//   + 懐石フランス料理 グルマン橘 Gourmand Tachibana (RIHGA Royal Hotel Kyoto's kaiseki-French counter; core list)
//   + 奥丹 清水 Okutan Kiyomizu (yudofu with a garden on the slope to Kiyomizu-dera; notable list)
//   + ル・タン Cafe Restaurant Le Temps (Hotel Granvia Kyoto's buffet café over Kyoto Station; notable list)
//   - スターバックス コーヒー JR京都駅 新幹線改札内店 26034049 (core): national chain.
//   - 江戸前寿司 魚がし日本一 京都ポルタ亰店 26043223 (core): chain — four 魚がし日本一 shops in our crawls (Kyoto Porta,
//     Shin-Osaka, Akasaka, Okachimachi), and zatsuneta.com (opened 2026-11-06) says the operator Nippan opened the first
//     shop at Shinbashi in 1989 as "Japan's first standing-sushi chain" — five shops at least.
//   - マールブランシュ 八条口店 26007103 (core): chain — six マールブランシュ shops in our crawls (Isetan café and shop,
//     Asty, Daimaru, Kyoto Tower Sando, Hachijoguchi).
//   Picked 2026-11-06 after batch 40. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: 26034049,
//   26043223, 26007103 (skipped), トマトさん 26018509, グルマン橘 26000881. `next notable 200`: 奥丹 清水 26001625, ル・タン
//   26001955. Same-name check, same brand or operator only: トマトさん — one. グルマン橘 — one; a RIHGA Royal Hotel Kyoto
//   restaurant, like 鉄板焼 葵 and Top of Kyoto already in data (hotel restaurants are drafted). 奥丹 — one in our crawls.
//   ル・タン — one; Hotel Granvia Kyoto's café restaurant, like 京林泉 already in data. None of the four is in
//   data/kyoto.json: grep by name and address (二人司町2, 松明町1 B1F, 清水3-340, ホテルグランヴィア京都 2F) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26034049/', 'national chain: Starbucks');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26043223/', 'chain: 魚がし日本一 — 4 shops in our crawls plus the Shinbashi first shop (zatsuneta.com); a standing-sushi chain');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26007103/', 'chain: マールブランシュ — 6 shops in our crawls');

// ================================================================ トマトさん Tomato San
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26018509/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_tomato_san_shimabara', name: 'トマトさん (Tomato San)', category: 'OMNI',
    lat: 34.992651, lng: 135.746098, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: curry roux, breaded cutlets and fritters, spaghetti and yakisoba (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu mince curry, hamburg steak, chicken and shrimp dishes, omelettes (2024–2026 reviews).',
    hours_raw: 'Monday, Thursday–Sunday 11:30–14:30 (last order 13:30) and 17:00–20:30 (last order 19:30); closed Tuesday and Wednesday; hours may change (Tabelog). No reservations (Tabelog). Cash only (Tabelog; July 2024). 10 counter seats; non-smoking; takeaway (Tabelog). The menu has varied: curry only for a time in 2024, set lunches again by 2025–2026 (2024–2026 reviews). A red-tomato noren on a white ground in the Shimabara shopping street, a 150-year-old building near the Kyoto Aquarium; about 500 m from Tanbaguchi Stn (Tabelog; January and October 2024).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimabara shopping street — near the Kyoto Aquarium, 7 min walk from Tanbaguchi Stn',
    cuisine: 'Homely yoshoku and curry from a couple who once ran a French restaurant (January 2024) · lunches ¥1,000–1,700 with salad and its homemade dressing, rice and sometimes miso soup: special lunch of shrimp fritters and chicken cutlet ¥1,300, braised hamburg ¥1,200, teriyaki chicken set ¥1,000, luncheon of hamburg and ebi fry with dashimaki (January 2024–March 2026) · the "Spielberg": a cheese-filled hamburg inside an omelette (January 2024) · curries ¥980: wagyu mince, grilled chicken, shrimp, with a spicy sauce on the side; large +¥200; homemade iced coffee (July–October 2024) · spaghetti and yakisoba on the menu too (January 2024) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('トマトさん 島原 洋食'), menu_url: null,
    notes: '[Yoshoku · Shimabara, couple-run for over 40 years] A ten-seat counter under a red-tomato noren in old Shimabara, run by a cheerful couple who chat with every guest: crisp shrimp fritters and chicken cutlet, braised mini hamburgs, the cheese-in-hamburg omelette called the Spielberg, and a wagyu mince curry, all with a salad in homemade dressing. The menu shifts over time. Cash only; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed), together for over 40 years, formerly running a French restaurant (January 2024 reviews)'], origin: null,
      background: 'Per Tabelog: a yoshoku counter in Shimabara. Reviewers in January 2024 describe a couple who previously owned a French restaurant and have run this place for over 40 years in a 150-year-old building; later reviewers note a curry-only period in 2024 and a broader lunch menu again by 2025–2026.',
      philosophy: null, specialty: 'Spielberg (cheese hamburg omelette); curry.',
      anecdotes: [
        { text: 'A January 2024 guest found everyone else at the counter was a regular chatting happily with the owner.', source: R + 'B478877120/' },
        { text: 'A July 2024 diner ordered the curry large for ¥200 more — and regretted it, the portion was so big.', source: R + 'B488693680/' },
        { text: 'A July 2024 returnee, back after over a decade, was served a homemade iced coffee after the ¥980 curry.', source: R + 'B90386202/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、下京区二人司町2、Tanbaguchi 駅から486m、月・木〜日 11:30〜14:30 (L.O.13:30)・17:00〜20:30 (L.O.19:30)、火・水定休、予約不可、カード・電子マネー・QR 不可、10席、禁煙、テイクアウト。口コミ (2024年1月〜2026年3月、英語): 島原、京都水族館の近く、白地に赤いトマトののれん、築150年の建物、元フレンチの店の夫婦が40年以上営む、手作りドレッシングのサラダ、ランチ1,000〜1,700円、スペシャルランチ1,300円 (海老フリッターとチキンカツ)、煮込みハンバーグ1,200円、照り焼きチキン1,000円、ハンバーグと海老フライとだし巻き、チーズ入りハンバーグのオムレツ「Spielberg」、カレー980円 (和牛ミンチ、焼きチキン、海老)、大盛り+200円、自家製アイスコーヒー、スパゲティと焼きそば、一時はカレーのみ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B266189660/', R + 'B470455920/', R + 'B478571679/', R + 'B478877120/', R + 'B488490589/', R + 'B488693680/', R + 'B489424525/', R + 'B494127615/', R + 'B496611021/', R + 'B90386202/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; friendly owners; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区二人司町2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review March 2026.' },
    pin_source: `Tabelog ${TB} (34.992651, 135.746098); cross-checked: GSI 京都府京都市下京区二人司町2番地 (lot) 19 m; nearest Kyoto record 144 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B266189660/', R + 'B90386202/'],
    price_note: 'Prices from 2024–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Special lunch (shrimp fritters, chicken cutlet)', '¥1,300', 'Lunch', 'no', 'no', 'March 2026.', 'special_lunch'),
      it('', '', 'Braised hamburg lunch', '¥1,200', 'Lunch', 'no', 'no', 'March 2026.', 'nikomi_hamburg'),
      it('', '', 'Wagyu mince curry', '¥980', 'Curry', 'no', 'no', 'July 2024.', 'wagyu_curry'),
    ] }, {
    cuisine: '元フレンチの店の夫婦の家庭的な洋食とカレー (2024年1月)・ランチは1,000〜1,700円、手作りドレッシングのサラダとご飯、ときに味噌汁: 海老フリッターとチキンカツのスペシャルランチ1,300円、煮込みハンバーグ1,200円、照り焼きチキン1,000円、ハンバーグと海老フライとだし巻きのランチョン (2024年1月〜2026年3月)・チーズ入りハンバーグをオムレツで包む「Spielberg」(2024年1月)・カレー980円: 和牛ミンチ、焼きチキン、海老、辛いソースを添えて、大盛り+200円、自家製アイスコーヒー (2024年7〜10月)・スパゲティや焼きそばも (2024年1月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '島原の商店街。京都水族館の近く、Tanbaguchi 駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。カレーのルウ、衣のカツやフリッター、スパゲティ、焼きそば (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛ミンチのカレー、ハンバーグ、鶏や海老の料理、オムレツ (2024〜2026年の口コミ)。',
    notes: '[洋食・島原、夫婦で40年以上] 島原の赤いトマトののれんのカウンター10席。明るい夫婦がどの客とも話をする。カリッとした海老フリッターとチキンカツ、ミニハンバーグの煮込み、チーズ入りハンバーグのオムレツ「Spielberg」、和牛ミンチのカレー、どれも手作りドレッシングのサラダ付き。メニューは時期で変わる。現金のみ、火・水曜休み。',
  });
}

// ================================================================ 懐石フランス料理 グルマン橘 Gourmand Tachibana
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000881/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['12:00', '15:30'], ['17:00', '21:30']); const WE = day(['11:30', '15:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_gourmand_tachibana_rihga', name: '懐石フランス料理 グルマン橘 (Gourmand Tachibana, RIHGA Royal Hotel Kyoto)', category: 'OMNI',
    lat: 34.986476, lng: 135.752492, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses of French dishes with Japanese ingredients and tea, plus walnut bread, cutlets and desserts; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of salmon, sea bream, Tanba chicken and pork, wagyu, foie gras and eel (2025–2026 reviews).',
    hours_raw: 'Monday–Friday 12:00–15:30 and 17:00–21:30; Saturday–Sunday 11:30–15:30 and 17:00–21:30; last orders 14:30 and 20:00; irregular closing days, see the hotel website (Tabelog). Reservations accepted, online too (Tabelog; May 2026). A 15% service charge (Tabelog original サービス料１5％). Courses such as Miyako, Mai, Tokyo and Tachibana at lunch from about ¥5,000, with member prices (2025–2026 reviews). 28 seats, mainly a counter facing the chef, and private rooms for 4–30 (fee) (Tabelog; May 2026). Cards, e-money and QR (Tabelog). B1F of RIHGA Royal Hotel Kyoto; hotel parking free for 3 hours with a ¥4,000 spend from 1 April 2026; 7 min walk west of Kyoto Station (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'RIHGA Royal Hotel Kyoto B1F — 7 min walk west of Kyoto Station',
    cuisine: 'French courses in a kaiseki style at a counter, with Japanese ingredients and tea through the dishes (2025–2026 reviews) · lunch courses from about ¥5,000 with appetiser, special dish, soup, fish, meat, rice, dessert and coffee; upgrades such as wagyu strip loin or fillet (September 2025–June 2026) · e.g. salmon tartare with celeriac mousse, shiitake stuffed with chicken and chestnut, sea bream with white-wine mushroom sauce, parrotfish, mozzarella tonkatsu, Tanba pork in shiso with plum sauce (September 2025) · dinner with wine pairing: eel and foie gras, smoked managatsuo, walnut bread with hojicha butter and yuzu marmalade (April 2026) · a five-dessert finish (September 2025) · lunch ¥6,000–8,000, dinner ¥10,000–15,000 (Tabelog)',
    website: null, gmaps: gm('グルマン橘 リーガロイヤルホテル京都'), menu_url: null,
    notes: '[Kaiseki French · RIHGA Royal Hotel Kyoto B1F] A counter of French cooking in kaiseki rhythm at the RIHGA Royal near Kyoto Station: seasonal Japanese ingredients and tea woven into salmon tartare, chestnut-stuffed shiitake, sea bream and wagyu, with good-value lunch courses and a sommelier-led wine pairing at dinner. Private rooms suit family occasions. Plus 15% service. Hotel parking deal.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen at the counter (chef unnamed)', 'Sommelier Yoshinaga (April 2026 review)'], origin: null,
      background: 'Per Tabelog: the kaiseki-style French restaurant of RIHGA Royal Hotel Kyoto; registered as an official listing by the operator. An April 2026 reviewer recalls monthly wine events here over ten years ago hosted by sommelier Yoshinaga, who has since moved up but still served as sommelier that night, and notes the chef has changed since then.',
      philosophy: 'Kyoto ingredients with the richness of French cuisine (April 2026 review).', specialty: 'Kaiseki-style French course.',
      anecdotes: [
        { text: 'A September 2025 couple, celebrating the second of two yearly anniversaries, received complimentary ice cream and flowers.', source: R + 'B513737700/' },
        { text: 'In September 2025 a family chose a private room here for the formal meeting of both sides before a wedding.', source: R + 'B523134878/' },
        { text: 'An April 2026 guest, back after a decade, was served by sommelier Yoshinaga, who had hosted monthly wine evenings years before.', source: R + 'B526885840/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・洋食、下京区松明町1 リーガロイヤルホテル京都 B1F、JR京都駅から西へ徒歩約7分、月〜金 12:00〜15:30・17:00〜21:30、土日 11:30〜15:30・17:00〜21:30 (L.O.14:30・20:00)、不定休、予約可、サービス料15%、28席、個室 (4〜30名、別料金)、カード・電子マネー・QR 可、ホテルの駐車場は2026年4月1日から4,000円以上の利用で3時間無料。口コミ (2025年9月〜2026年9月、英語): カウンターが中心、日本の食材とお茶を使うフレンチ、ランチのコース (Miyako、Mai、Tokyo、Tachibana など) 5,000円ほどから、会員価格、和牛のサーロインやフィレへの変更、サーモンのタルタルとセロリアックのムース、鶏と栗の椎茸、鯛の白ワインときのこのソース、ブダイ、モッツァレラのとんかつ、Tanba の豚の大葉とチーズ巻き、夜はワインペアリング、鰻とフォアグラ、まながつおの燻製、胡桃のパンとほうじ茶バター、5種のデザート、ソムリエの Yoshinaga さん、両家の顔合わせ、記念日のサービス。',
      confidence: 'medium', sources: [TB, R + 'B478262574/', R + 'B513737700/', R + 'B514482696/', R + 'B523134878/', R + 'B526885840/', R + 'B528289908/', R + 'B531838560/', R + 'B536616636/', R + 'B537014219/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; book online; 15% service; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松明町1 リーガロイヤルホテル京都 Ｂ１Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.986476, 135.752492); cross-checked: GSI 京都府京都市下京区松明町1番地 (lot) 32 m; kyoto_top_of_kyoto_rihga (same hotel, 14F) is 39 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514482696/'],
    price_note: 'Lunch course price from a September 2025 review (member price); plus 15% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetiser to coffee)', '¥5,000', 'Lunch', 'ask', 'no', 'About; September 2025.', 'lunch_course'),
    ] }, {
    cuisine: 'カウンターで懐石の流れで出すフランス料理、日本の食材とお茶を料理に使う (2025〜2026年の口コミ)・ランチのコースは5,000円ほどから、前菜、スペシャリテ、スープ、魚、肉、ご飯、デザート、コーヒー、和牛のサーロインやフィレへの変更も (2025年9月〜2026年6月)・例: サーモンのタルタルとセロリアックのムース、鶏と栗を詰めた椎茸、鯛の白ワインときのこのソース、ブダイ、モッツァレラのとんかつ、Tanba の豚の大葉巻きと梅のソース (2025年9月)・夜はワインペアリング: 鰻とフォアグラ、まながつおの燻製、ほうじ茶バターと柚子のマーマレードの胡桃のパン (2026年4月)・締めに5種のデザート (2025年9月)・昼6,000〜8,000円、夜10,000〜15,000円 (食べログ)',
    neighborhood: 'リーガロイヤルホテル京都の地下1階。京都駅から西へ徒歩7分',
    gf_detail: '要確認。日本の食材とお茶を使うフランス料理のコースに、胡桃のパン、カツ、デザート。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。サーモン、鯛、Tanba の鶏や豚、和牛、フォアグラ、鰻のコース (2025〜2026年の口コミ)。',
    notes: '[懐石フレンチ・リーガロイヤルホテル京都の地下] 京都駅近くのリーガロイヤルの、懐石の流れのフランス料理のカウンター。季節の日本の食材とお茶をサーモンのタルタル、栗を詰めた椎茸、鯛、和牛に取り入れる。ランチのコースはお得、夜はソムリエのワインペアリング。個室は家族の集まりに。別にサービス料15%。ホテルの駐車場の特典あり。',
  });
}

// ================================================================ 奥丹 清水 Okutan Kiyomizu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001625/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.tofuokutan.info/';
  const WD = day(['11:00', '16:00']); const WE = day(['11:00', '17:00']);
  put({
    id: 'kyoto_okutan_kiyomizu', name: '奥丹 清水 (Okutan Kiyomizu)', category: 'OMNI',
    lat: 34.997984, lng: 135.780788, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu in kombu water is simple, but the dipping sauce is soy-based and the set includes tempura and miso dengaku; ramen is served from 14:30 (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The set is tofu, sesame tofu, dengaku, tempura and tororo with a kombu broth, but the dipping sauce\'s base is not stated and no vegan information is given (2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday 11:00–16:00; Saturday–Sunday 11:00–17:00; closed Thursday (Tabelog). Reservations accepted and advised at weekends (Tabelog; October 2026). Ramen from 14:30 (September 2026). Cash only (Tabelog; March and August 2026). 120 seats on tatami, shoes off, with private rooms facing the garden; designated smoking area (Tabelog; 2026 reviews). On the approach to Kiyomizu-dera, Kiyomizu 3-chome; about 15 min walk from Gion-Shijo Stn (Tabelog; June 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'On the approach to Kiyomizu-dera — 15 min walk from Gion-Shijo Stn',
    cuisine: 'Long-established yudofu restaurant in an old building with a garden (2026 reviews) · Okimari set ¥4,400: yudofu of silken tofu in kombu dashi, sesame tofu, dengaku, vegetable tempura, tororo (March–October 2026) · Mukashi tofu set ¥5,500, with a firmer old-style tofu (March and August 2026) · ramen from 14:30 (September 2026) · sake (Tabelog) · about ¥4,000–5,000 (Tabelog)',
    website: WEB, gmaps: gm('奥丹 清水'), menu_url: null,
    notes: '[Yudofu · on the slope to Kiyomizu-dera, garden rooms] A historic tofu house on the Kiyomizu approach, calm inside despite the crowds: a set of silky yudofu in kombu broth with sesame tofu, dengaku, tempura and tororo for ¥4,400, or a firmer old-style tofu for ¥5,500, eaten on tatami with views of the garden — glorious in cherry and maple seasons. Some find it pricey for what it is. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a tofu and Japanese-cuisine restaurant near Kiyomizu-dera with tatami and private rooms; registered as an official listing by the operator. Reviewers in 2026 call it a long-established yudofu restaurant in a historic building with a well-kept garden; a March 2026 reviewer was told one private room has been visited by the Emperor.',
      philosophy: null, specialty: 'Yudofu; mukashi tofu.',
      anecdotes: [
        { text: 'A March 2026 party of three generations was shown to a private room said to have been visited by the Emperor.', source: R + 'B535607193/' },
        { text: 'A September 2026 repeat visitor was surprised to find ramen served from 14:30.', source: R + 'B511673024/' },
        { text: 'A May 2026 guest found the food underwhelming for ¥4,400 with no dessert, and the new ramen out of keeping with a yudofu house.', source: R + 'B528706652/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理・日本料理、東山区清水3-340、祇園四条駅1番出口から徒歩約15分、月〜水・金 11:00〜16:00、土日 11:00〜17:00、木曜定休、予約可、カード・電子マネー・QR 不可、120席、座敷、個室、分煙、テイクアウト、日本酒にこだわる。口コミ (2026年3月〜10月、英語): 清水寺の参道、歴史ある建物、庭、靴を脱ぐ、「Okimari」のセット4,400円 (絹ごしの湯豆腐、昆布だし、胡麻豆腐、田楽、天ぷら、とろろ)、「Mukashi tofu」のセット5,500円 (固めの豆腐)、14時半からラーメン、現金のみ、週末は予約がおすすめ、天皇が訪れた個室という話 (2026年3月)、割高との声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B511673024/', R + 'B524352239/', R + 'B525021153/', R + 'B525084288/', R + 'B525452734/', R + 'B528706652/', R + 'B530275485/', R + 'B533757282/', R + 'B535607193/', R + 'B536760649/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off, tatami; set courses; book at weekends; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水3-340',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997984, 135.780788); GSI matches only 京都府京都市東山区清水三丁目 (chome), 100 m away, so loc_precise false; kyoto_kasagiya_ninenzaka is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535607193/', R + 'B536760649/'],
    price_note: 'Set prices from 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Okimari set (yudofu, sesame tofu, dengaku, tempura, tororo)', '¥4,400', 'Sets', 'ask', 'ask', 'October 2026.', 'okimari'),
      it('', '', 'Mukashi tofu set (firm old-style tofu)', '¥5,500', 'Sets', 'ask', 'ask', 'March 2026.', 'mukashi_tofu'),
    ] }, {
    cuisine: '庭のある古い建物の、老舗の湯豆腐の店 (2026年の口コミ)・「Okimari」のセット4,400円: 昆布だしの絹ごしの湯豆腐、胡麻豆腐、田楽、野菜の天ぷら、とろろ (2026年3〜10月)・「Mukashi tofu」のセット5,500円、固めの昔ながらの豆腐 (2026年3月・8月)・14時半からはラーメン (2026年9月)・日本酒 (食べログ)・4,000〜5,000円ほど (食べログ)',
    neighborhood: '清水寺への参道。祇園四条駅から徒歩15分',
    gf_detail: '要確認。昆布の湯の湯豆腐はシンプルだが、つけだれは醤油系で、セットに天ぷらと味噌の田楽がある。14時半からはラーメンも (2026年の口コミ)。',
    vegan_detail: '要確認。豆腐、胡麻豆腐、田楽、天ぷら、とろろと昆布だしのセットだが、つけだれのベースは不明で、ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[湯豆腐・清水寺への坂、庭の座敷] 清水の参道の歴史ある豆腐の店。外のにぎわいがうそのように静か。昆布だしのなめらかな湯豆腐に胡麻豆腐、田楽、天ぷら、とろろで4,400円、固めの「Mukashi tofu」は5,500円。座敷から庭を眺め、桜と紅葉の季節は格別。割高と感じる人も。現金のみ、木曜休み。',
  });
}

// ================================================================ ル・タン Cafe Restaurant Le Temps
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001955/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['06:30', '15:00'], ['17:30', '22:00']); const WE = day(['06:30', '22:00']);
  put({
    id: 'kyoto_le_temps_granvia', name: 'ル・タン (Cafe Restaurant Le Temps, Hotel Granvia Kyoto)', category: 'OMNI',
    lat: 34.985840, lng: 135.760166, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A large buffet of Japanese and Western dishes, cakes and breads; ask staff about ingredients; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A shojin (vegetarian) tempura with tororo soup was served in October 2026, and Kyoto vegetables appear at breakfast, but most of the buffet uses meat, fish, eggs and dairy (2026 reviews).',
    hours_raw: 'Monday–Thursday and around holidays 6:30–15:00 (last order 14:30) and 17:30–22:00 (last order 21:00); Friday–Sunday and holidays 6:30–22:00 (last order 21:00); open year-round; from 7 May to 31 August 2026, 6:30–22:00 daily with dinner buffets of 120 minutes (Tabelog). Reservations accepted; holiday prices differ (Tabelog). A 15% service charge (Tabelog original サービス料15％). Lunch buffet 90 minutes (September 2026). 164 seats (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 2F of Hotel Granvia Kyoto, right of the JR Kyoto Station central gate; 2 hours\' parking at the station building east car park with a meal (Tabelog; September 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hotel Granvia Kyoto 2F, in JR Kyoto Station',
    cuisine: 'Hotel buffet café from breakfast to dinner (Tabelog; 2026 reviews) · breakfast buffet: grilled Kyoto vegetables, obanzai, sea bream chazuke, roast wagyu, hash browns, omelettes made to order with five fillings (August–October 2026) · lunch and dinner buffets of Japanese and Western dishes incl. sushi, tempura, roast beef, salads, pizza, pasta, curry, fried rice, shumai (September–October 2026) · seasonal sweets buffets, e.g. autumn with muscat, pear, Tanba chestnut and hojicha, and Halloween (September–October 2026) · café use with cakes from the showcase; cakes to take away (October 2026) · about ¥5,000–10,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('ル・タン ホテルグランヴィア京都'), menu_url: null,
    notes: '[Hotel buffet · Hotel Granvia, inside Kyoto Station] The bright, roomy buffet café of the Granvia over Kyoto Station: a lavish breakfast with omelettes to order and roast wagyu from 6:30, Japanese and Western buffets at lunch and dinner, seasonal sweets buffets, and cakes for a quiet tea. Busy at opening; one guest found drink service slow. Plus 15% service. Open daily.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the café restaurant of Hotel Granvia Kyoto, directly connected to JR Kyoto Station; registered as an official listing by the operator. Reviewers in 2026 describe a popular buffet with many overseas guests, a line at the 6:30 opening (September 2026), and a live kitchen for omelettes (August 2026).',
      philosophy: null, specialty: 'Breakfast buffet; sweets buffet.',
      anecdotes: [
        { text: 'A September 2026 visitor arriving at the 6:30 opening found about ten people already in line.', source: R + 'B534919371/' },
        { text: 'An October 2026 guest choosing between this and the Hilton buffet came here for the reviews, and found the meat and tempura strong but the drink service slow.', source: R + 'B536865159/' },
        { text: 'A September 2026 diner with food allergies had to pick carefully across the buffet.', source: R + 'B535839217/' },
      ],
      japanese_sources_summary: '食べログ: ビュッフェ・カフェ・ケーキ、下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 2F、JR京都駅中央改札の右、月〜木・祝前日・祝翌日 6:30〜15:00 (L.O.14:30)・17:30〜22:00 (L.O.21:00)、金土日祝 6:30〜22:00 (L.O.21:00)、無休、2026年5月7日〜8月31日は6:30〜22:00、ディナーブッフェは120分制、予約可、年末年始は料金が変わる、サービス料15%、164席、カード・電子マネー・QR 可。口コミ (2026年8月〜10月、英語): 京野菜の焼き物、おばんざい、鯛茶漬け、黒毛和牛のロースト、ハッシュドポテト、5種から選べるオムレツ、寿司、天ぷら、ローストビーフ、ピザ、パスタ、カレー、焼売、季節のスイーツブッフェ (秋、ハロウィン)、ショーケースのケーキでカフェ利用、ケーキの持ち帰り、精進天ぷらととろろ汁、ランチは90分、朝6時半から行列、外国人客が多い、駐車場2時間無料、ドリンクが遅いとの声。',
      confidence: 'medium', sources: [TB, R + 'B518633885/', R + 'B534853496/', R + 'B534919371/', R + 'B535309915/', R + 'B535839217/', R + 'B536230217/', R + 'B536865159/', R + 'B537691757/', R + 'B537993528/', R + 'B538365767/'] },
    cultural_comfort: { level: 'english', note: 'Hotel buffet; book ahead at weekends; 15% service; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル ＪＲ京都駅中央口 ホテルグランヴィア京都 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985840, 135.760166); the address has no lot number and GSI's nearest match (東塩小路町901) is 186 m away, so loc_precise false; inside JR Kyoto Station; kyoto_tsukumo_udon_shiokoji is 9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; about ¥5,000–10,000 (Tabelog; 2026 reviews); plus 15% service.', last_checked: TODAY, items: [
      it('', '', 'Breakfast buffet', '', 'Buffet', 'ask', 'ask', 'From 6:30.', 'breakfast_buffet'),
      it('', '', 'Seasonal sweets buffet', '', 'Buffet', 'no', 'no', 'September–October 2026.', 'sweets_buffet'),
    ] }, {
    cuisine: '朝から夜までのホテルのブッフェカフェ (食べログ、2026年の口コミ)・朝食ブッフェ: 京野菜の焼き物、おばんざい、鯛茶漬け、黒毛和牛のロースト、ハッシュドポテト、5種から選べるその場で作るオムレツ (2026年8〜10月)・昼と夜の和洋のブッフェ: 寿司、天ぷら、ローストビーフ、サラダ、ピザ、パスタ、カレー、チャーハン、焼売 (2026年9〜10月)・季節のスイーツブッフェ、例: マスカット、梨、Tanba の栗、ほうじ茶の秋、ハロウィン (2026年9〜10月)・ショーケースのケーキでカフェ利用、ケーキの持ち帰り (2026年10月)・5,000〜10,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: 'JR京都駅のホテルグランヴィア京都の2階',
    gf_detail: '要確認。和洋の料理、ケーキ、パンの大きなブッフェ。原材料はスタッフに確認を。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。2026年10月に精進天ぷらととろろ汁があり、朝食に京野菜もあるが、ブッフェの多くは肉、魚、卵、乳製品を使う (2026年の口コミ)。',
    notes: '[ホテルのブッフェ・京都駅のグランヴィア] 京都駅のグランヴィアの明るく広いブッフェカフェ。朝6時半からその場で作るオムレツや和牛のローストの豪華な朝食、昼と夜は和洋のブッフェ、季節のスイーツブッフェ、静かにケーキと紅茶も。開店時は混む。ドリンクが遅かったという客も。別にサービス料15%。無休。',
  });
}

save();
