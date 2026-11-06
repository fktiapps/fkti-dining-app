// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 13.
//   + 祇をん 萬屋 Gion Yorozuya (negi udon in a Gion back street; 14 seats, cash only)
//   + 祇園 肉料理おか Gion Nikuryori Oka (8-seat aged-beef kaiseki counter, chef Yoshitaka Oka)
//   + Gibier MIYAMA (game-meat course with all-you-can-order à la carte, chef Futa Kanda; Gion Kitagawa)
//   + 京都 いと Kyoto Ito (Kyoto–French kaiseki in a 100-year-old townhouse by Higashi Hongan-ji, chef Shohei Noguchi)
//   - skip 26000206 虎屋菓寮 京都一条店 (sub-brand of a large parent; see below)
//   Same-name counts first (coordinator, 2026-11-05): 萬屋 — the Tokyo 萬屋 おかげさん in data is an unrelated shop; no other
//   Gion Yorozuya found. 肉料理おか, Gibier MIYAMA and 京都 いと: single shops. Gibier MIYAMA's second shop, お料理 MIYAMA
//   (kyoto_oryori_miyama), is already in data — a different format (standing bar) of a 2-shop group, so Gibier MIYAMA is
//   drafted as a sister concept (Greg, 2026-11-02). 京都 いと is unrelated to kyoto_itookashi (京都 いとおかし).
//   Taken on 2026-11-05: `next core 200` gave 萬屋 26000254 and 肉料理おか 26036578; `next notable 200` gave 虎屋菓寮
//   26000206 (skipped), Gibier MIYAMA 26034466 and 京都 いと 26031706.
//   None of the four is in data/kyoto.json: grep by name and address (小松町555, 祇園町南側577, 祇園町北側279, 中居町112)
//   found none. No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000206', 'sub-brand of a large parent (Greg, 2026-11-05): 虎屋菓寮 is the café brand of the confectioner とらや (Toraya); its Kyoto Ichijo shop page (toraya-group.co.jp/shops/shop-55) lists it as a directly run shop with the とらや store, and names the Akasaka shop as another.');

// ================================================================ 祇をん 萬屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000254/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:30', '15:00'], ['17:30', '19:00']); const S = day(['12:30', '15:30']);
  put({
    id: 'kyoto_gion_yorozuya', name: '祇をん 萬屋 (Gion Yorozuya)', category: 'OMNI',
    lat: 35.002766, lng: 135.773994, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon in a soy-seasoned dashi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is kombu and bonito dashi, and toppings include duck, chicken and egg (2026 reviews).',
    hours_raw: 'Monday–Saturday 12:30–15:00 and 17:30–19:00 (last order 18:40); Sunday and holidays 12:30–15:30; closed irregularly (Tabelog). No reservations; queues are common — waits of an hour to 1 h 20 min in October and November 2026, none at quiet times (June–August 2026). No shared tables: 14 seats at three tables for four and one for two; single diners get a table for four (Tabelog; October 2026). Some rice bowls are not served every day (November 2026). Cash only; non-smoking; a "no mobile phones" sign on the tables, photos allowed (Tabelog). Wheelchair accessible (Tabelog). On a narrow back street that cars use as a shortcut — take care while queuing — between Hanamikoji and Kennin-ji; 3 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: S }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion back street off Hanamikoji, by Kennin-ji — 3 min from Gion-Shijo Stn',
    cuisine: 'Kyoto udon shop (2026 reviews) · signature negi udon heaped with Kujo negi, with grated ginger, ¥1,500 (July 2026) · kitsune udon, cold natto udon, duck and negi udon in winter · rice bowls: oyako-don, kinugasa-don (2026 reviews) · thin, soft Kyoto-style udon in a kombu and bonito dashi',
    website: null, gmaps: gm('祇をん 萬屋 ねぎうどん'), menu_url: null,
    notes: "[Udon · Gion, a mountain of Kujo negi] A small udon shop on a Gion back street near Kennin-ji, its walls hung with fans bearing maiko names, known for one bowl: negi udon (¥1,500), soft Kyoto noodles under a heap of Kujo negi in a bonito dashi, sharpened with grated ginger. Kitsune udon and rice bowls such as oyako-don are the alternatives. No bookings and no shared tables, so expect a queue — up to an hour or more in autumn 2026. Cash only; lunch daily, short evenings except Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Reviewers in 2026 mention Michelin recognition (Bib Gourmand or Plate, per different reviewers), appearances on the TBS programme "Jinsei Saikō Restaurant", maiko fans on the walls, and a kind owner (August 2026).',
      philosophy: null, specialty: 'Negi udon.',
      anecdotes: [
        { text: '"I arrived at 12:30 PM and found 8 people ahead of me, which meant I waited about 1 hour and 20 minutes to be seated." — October 2026.', source: R + 'B536753084/' },
        { text: '"The owner was very kind and provided excellent service." — August 2026.', source: R + 'B534168620/' },
        { text: 'A July 2026 diner found the oyako-don a little strongly seasoned.', source: R + 'B532653441/' },
      ],
      japanese_sources_summary: '食べログ: うどん・日本料理、東山区花見小路四条下ル二筋目西入ル小松町555-1、京阪祇園四条駅6番出口から徒歩3分、月〜土 12:30〜15:00・17:30〜19:00 (L.O. 18:40)、日祝 12:30〜15:30、不定休、予約不可、14席 (4人席3卓、2人席1卓、1人でも4人席)、現金のみ、禁煙、卓上に携帯電話禁止の掲示 (撮影は可)、車椅子可。口コミ (2026年4〜11月、英語): ねぎうどん1,500円、九条ねぎ、生姜、きつねうどん、冷やし納豆うどん、親子丼、衣笠丼、ミシュランの掲載、テレビ「Jinsei Saikō Restaurant」、舞妓の名を入れた飾り、相席なし、1時間以上の行列、建仁寺の裏の路地。',
      confidence: 'medium', sources: [TB, R + 'B129052384/', R + 'B352462491/', R + 'B388364004/', R + 'B526585339/', R + 'B531189155/', R + 'B532143394/', R + 'B532320348/', R + 'B532653441/', R + 'B532686167/', R + 'B534168620/', R + 'B536301775/', R + 'B536753084/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside; no shared tables; keep phones away; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区花見小路四条下ル二筋目西入ル小松町555-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002766, 135.773994); cross-checked: GSI 京都府京都市東山区小松町555番地 (lot) 68m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532320348/'],
    price_note: 'Only the negi udon price was read (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Negi udon (Kujo negi, grated ginger)', '¥1,500', 'Udon', 'no', 'no', 'July 2026.', 'negi_udon'),
      it('', '', 'Kitsune udon', '', 'Udon', 'no', 'no', 'August 2026.', 'kitsune_udon'),
      it('', '', 'Oyako-don', '', 'Rice', 'ask', 'no', 'July 2026.', 'oyakodon'),
    ] }, {
    cuisine: '京都のうどん屋 (2026年の口コミ)・名物のねぎうどん: 九条ねぎがたっぷり、おろし生姜、1,500円 (2026年7月)・きつねうどん、冷やし納豆うどん、冬は鴨ねぎうどん・丼: 親子丼、衣笠丼 (2026年の口コミ)・昆布とかつおの出汁にやわらかい京風の細めのうどん',
    neighborhood: '建仁寺近く、花見小路の裏の祇園の路地。祇園四条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。小麦のうどんと醤油の出汁 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁は昆布とかつお、具に鴨、鶏、卵 (2026年の口コミ)。',
    notes: '[うどん・祇園、九条ねぎの山] 建仁寺近くの祇園の路地にある小さなうどん屋。壁には舞妓の名を入れた飾り。名物はねぎうどん (1,500円) で、やわらかい京都のうどんに九条ねぎを山盛り、かつおの出汁におろし生姜。きつねうどんや親子丼なども。予約不可、相席なしで行列は必至、2026年秋は1時間以上待ったという声も。現金のみ。昼は毎日、日曜以外は夕方も短く営業。',
  });
}

// ================================================================ 祇園 肉料理おか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036578/'; const R = TB + 'dtlrvwlst/';
  const A = day(['12:00', '15:00'], ['16:00', '18:30'], ['19:00', '22:30']); const B = day(['16:00', '18:30'], ['19:00', '22:30']);
  put({
    id: 'kyoto_gion_nikuryori_oka', name: '祇園 肉料理おか (Gion Nikuryori Oka)', category: 'MOM_AND_POP',
    lat: 35.003515, lng: 135.774078, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, and tell the restaurant about allergies in advance (Tabelog). The courses include a breaded "Oka katsu", croquettes, pasta and curry alongside charcoal-grilled meat (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef kaiseki of aged and charcoal-grilled meat (Tabelog; 2024–26 reviews).',
    hours_raw: 'Monday, Thursday, Saturday, Sunday 12:00–15:00, 16:00–18:30 and 19:00–22:30; Wednesday and Friday 16:00–18:30 and 19:00–22:30; closed Tuesday and irregularly (Tabelog). Reservation only; bookings with an unreachable phone number may be cancelled; allergies in advance (Tabelog). 10% service charge (Tabelog). 8 counter seats facing the grill, with a small garden at the back (Tabelog; September 2024). Staff speak English (September 2026). Non-smoking; cards (Tabelog). In Yayoi alley, Gion south of Shijo; 5 min from Gion-Shijo Stn (Tabelog; September 2024).',
    hours: { 0: A, 2: B, 3: A, 4: B, 5: A, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion south of Shijo, Yayoi alley — 5 min from Gion-Shijo Stn',
    cuisine: 'Meat kaiseki of aged beef grilled slowly over charcoal and firewood (Tabelog, shop text) · the shop text names pure Tajima beef; reviewers list Omi beef from Fukunaga in Shiga, Kobe beef, Tokachi beef aged 70 days and Iwate Kanzaki beef (2025) · "Oka katsu" of Chateaubriand, Omi beef tartare styled as a Kyoto garden, chilled Omi beef shabu-shabu with yuba, congee of snow-aged potatoes and Omi beef, aged-meat steaks, beef consommé, pâté, spicy pasta, curry, seasonal desserts (2024–26 reviews) · dinner bills about ¥30,000–50,000 a head; lunch course ¥13,200 in 2024; occasional Sunday fan lunches "Oka Shokudo" with chicken katsu and croquettes (August 2026)',
    website: null, gmaps: gm('祇園 肉料理おか'), menu_url: TB + 'dtlmenu/',
    notes: "[Meat kaiseki · Gion, aged beef over charcoal] An 8-seat counter in a Gion alley where chef Yoshitaka Oka, a meat griller of over 20 years, cooks aged beef slowly over charcoal and firewood as a kaiseki course: Omi beef tartare laid out like a Kyoto garden, the Chateaubriand 'Oka katsu', and aged steaks from several farms, between soups and seasonal small dishes. Dinner runs about ¥30,000–50,000 a head plus 10% service. Reservation only; closed Tuesday. Aged meat has a distinct aroma — one regular warns it isn't for everyone.",
    chef_bio: { chef_name: 'Yoshitaka Oka', roles: ['Chef (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): chef Yoshitaka Oka has over 20 years of grilling beef in Gion, butchering bone-in meat and cooking it slowly over charcoal and firewood; guests call the chef the "Meat Griller". A July 2025 reviewer says the restaurant was originally based in Shiga before moving to Kyoto; a March 2025 regular had visited before the relocation. An April 2025 reviewer learned the beef comes from Fukunaga in Shiga.',
      philosophy: 'Per Tabelog (the shop’s own text): meat cooked slowly over a distant fire, which some guests say "doesn’t tire you out."',
      specialty: 'Oka katsu; aged-meat steaks.',
      anecdotes: [
        { text: 'A September 2026 regular, dining with one other guest, found the chef growing more enthusiastic through the evening and grilling extra cuts.', source: R + 'B453202994/' },
        { text: 'A March 2025 regular notes that aged meat has a distinctive aroma that may be challenging for those not fond of it.', source: R + 'B525279825/' },
        { text: '"The service and customer care were good, but I felt it didn’t quite match the price." — September 2026.', source: R + 'B535041098/' },
      ],
      japanese_sources_summary: '食べログ: 牛料理・ステーキ、東山区祇園町南側577-3、祇園四条駅から徒歩5分、月木土日 12:00〜15:00・16:00〜18:30・19:00〜22:30、水金 16:00〜18:30・19:00〜22:30、火曜休み (不定休あり)、完全予約制、アレルギーは事前に、サービス料10％、カウンター8席、禁煙、カード可、肉焼き歴20年以上の Yoshitaka Oka 料理長、炭と薪の遠火で焼く熟成肉の肉懐石、Tajima の牛肉。口コミ (2024年8月〜2026年9月、英語): Omi の牛肉 (Shiga の Fukunaga)、Kobe の牛肉、Tokachi の70日熟成、おかカツ (シャトーブリアン)、京都の庭に見立てたタルタル、肉のお粥、熟成肉のステーキ、ディナー1人約30,000〜50,000円、2024年のランチ13,200円、日曜のファン向けランチ「Oka Shokudo」、英語の対応、もとは Shiga。',
      confidence: 'medium', sources: [TB, R + 'B453202994/', R + 'B460618376/', R + 'B489805260/', R + 'B492305842/', R + 'B492536201/', R + 'B492697607/', R + 'B501827944/', R + 'B505140594/', R + 'B510565726/', R + 'B514231074/', R + 'B525279825/', R + 'B535041098/'] },
    cultural_comfort: { level: 'english', note: 'Staff speak English (September 2026); reservation only; cards accepted.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks guests to tell it about allergies in advance.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側577-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003515, 135.774078); cross-checked: GSI 京都府京都市東山区祇園町南側577番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492536201/', R + 'B453202994/'],
    price_note: 'No current course prices read; dinner bills of about ¥30,000–50,000 a head in 2025–26 reviews; lunch course ¥13,200 in September 2024; plus 10% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Dinner meat kaiseki', 'about ¥30,000–50,000 a head', 'Course', 'ask', 'no', '2025–26 reviews.', 'dinner_course'),
      it('', '', 'Lunch course', '¥13,200', 'Course', 'ask', 'no', 'September 2024.', 'lunch_course'),
      it('', '', 'Oka katsu (Chateaubriand)', '', 'Course', 'no', 'no', '2025.', 'oka_katsu'),
    ] }, {
    cuisine: '炭と薪の遠火でじっくり焼く熟成肉の肉懐石 (食べログの店の紹介)・店の紹介では Tajima の牛肉、口コミでは Shiga の Fukunaga の Omi の牛肉、Kobe の牛肉、70日熟成の Tokachi の牛肉、Iwate の Kanzaki の牛肉 (2025年)・シャトーブリアンの「おかカツ」、京都の庭に見立てた Omi の牛肉のタルタル、湯葉と Omi の牛肉の冷しゃぶ、雪下熟成のじゃがいもと Omi の牛肉のお粥、熟成肉のステーキ、牛のコンソメ、パテ、辛いパスタ、カレー、季節のデザート (2024〜2026年の口コミ)・ディナーは1人約30,000〜50,000円、2024年のランチは13,200円、ときどき日曜にファン向けのランチ「Oka Shokudo」(チキンカツ、コロッケ、2026年8月)',
    neighborhood: '四条の南の祇園、Yayoi の小路。祇園四条駅から徒歩5分',
    gf_detail: '要確認。アレルギーは事前に伝えること (食べログ)。炭火の肉のほか、衣をつけた「おかカツ」、コロッケ、パスタ、カレーもある (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。熟成肉と炭火の牛肉の懐石 (食べログ、2024〜2026年の口コミ)。',
    notes: '[肉懐石・祇園、炭火の熟成肉] 祇園の路地のカウンター8席。肉を焼いて20年以上の Yoshitaka Oka 料理長が、熟成肉を炭と薪の遠火でじっくり焼く懐石。京都の庭に見立てた Omi の牛肉のタルタル、シャトーブリアンの「おかカツ」、産地の違う熟成肉のステーキが汁物や季節の小皿の間に続く。ディナーは1人約30,000〜50,000円にサービス料10％。完全予約制、火曜休み。熟成肉の香りは独特で、好みが分かれるという常連の声も。',
  });
}

// ================================================================ Gibier MIYAMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034466/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_gibier_miyama', name: 'Gibier MIYAMA', category: 'MOM_AND_POP',
    lat: 35.004238, lng: 135.776190, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Game dishes include spring rolls, fried tripe with Parmigiano, quiche, hamburg steak and house bread alongside grilled meats and hot pots; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a game-meat restaurant (venison, wild boar, bear, pheasant, duck) (2025–26 reviews).',
    hours_raw: '17:00–23:30, last seating 21:00, Monday–Saturday; closed Sunday; closed days vary by season; lunch for two or more by reservation (Tabelog). Reservation only (Tabelog); a no-show 15 minutes after the time counts as a cancellation; please avoid strong fragrances (Tabelog). 5% service charge (Tabelog). The meal takes about 3 hours or more (April 2026). 15 seats at a U-shaped counter; non-smoking; cards (Tabelog; March 2026). Gion north of Shijo; 5 min from Gion-Shijo Stn (Tabelog). (お料理 MIYAMA, the casual second shop, is kyoto_oryori_miyama; its record cites an August 2026 reviewer saying Gibier MIYAMA takes no reservations, which conflicts with Tabelog’s "reservation only".)',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Game-meat course: four set dishes chosen by the chef, then as much as you like from about 30 à la carte dishes for one price (2025–26 reviews) · course ¥28,000 or ¥32,340 with tax (April 2026); bills about ¥30,000–50,000 with drinks (2026 reviews) · venison (roast, tripe, summer venison hamburg), wild boar (loin, spring rolls, botan-nabe), black-bear pâté and hamburg, charcoal-grilled pheasant, mallard, fried tripe with Parmigiano · seasonal produce and wild vegetables from Miyama: sansho-pepper hot pot in spring, summer mushrooms, ayu with somen, eel and soft-shell turtle soup · house-baked bread, cheese and quiche · a wine cellar (2025–26 reviews)',
    website: null, gmaps: gm('Gibier MIYAMA 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Game · Gion, all the venison and bear you can order] A U-shaped counter in Gion where chef Futa Kanda, from the mountain town of Miyama, serves game: four set dishes, then as many of about 30 à la carte plates as you can manage, for one price (about ¥28,000–32,000 in 2026). Venison tripe, bear pâté, pheasant over charcoal, wild-boar spring rolls and botan-nabe come with Miyama's wild vegetables and house bread; reviewers say the meat has little gamey taste. Allow three hours — one December 2025 diner found service slow and the room cold. Reservation only; closed Sunday.",
    chef_bio: { chef_name: 'Futa Kanda', roles: ['Chef (April 2026 review; named in お料理 MIYAMA’s Tabelog text)'], origin: 'Miyama, Kyoto Prefecture (April 2026 review)',
      background: 'Per an April 2026 reviewer: run by chef Futa Kanda, born in 1989 in Miyama town, Kyoto, cooking seasonal game and wild vegetables from Miyama. Another April 2026 reviewer says the shop works with hunters to secure game and also wholesales it. The Tabelog text of the sister shop お料理 MIYAMA (kyoto_oryori_miyama) names the owner-chef as a RED U-35 Bronze Egg winner and Gibier MIYAMA as nominated for the Tabelog Award 2027.',
      philosophy: null, specialty: 'Game course with free à la carte.',
      anecdotes: [
        { text: 'A December 2025 diner found the system slow — à la carte plates were paced with the whole room — and the room too cold, and did not plan to return.', source: R + 'B519842294/' },
        { text: '"This restaurant offers all-you-can-eat a la carte, so whether you order one dish or try everything, the price remains the same." — March 2026.', source: R + 'B525177050/' },
        { text: 'An April 2026 diner was given some of the house bread to take home.', source: R + 'B526594160/' },
      ],
      japanese_sources_summary: '食べログ: ジビエ料理・イタリアン・イノベーティブ、東山区祇園町北側279-3、祇園四条駅から徒歩5分、月〜土 17:00〜23:30 (最終入店21:00)、日曜休み、季節により休み、昼は2名以上で予約可、完全予約制、15分連絡がないとキャンセル扱い、強い香水は控えて、サービス料5％、15席、禁煙、カード可。口コミ (2025年9月〜2026年7月、英語): Futa Kanda シェフ (1989年生まれ、Miyama 町出身)、最初の4品のあと約30品から食べ放題、コース28,000円・32,340円 (税込)、鹿、猪、熊、雉、鴨、ぼたん鍋、山椒の鍋、Miyama の山菜、自家製パン、ワインセラー、猟師と組んで卸も、提供が遅く寒かったという声。',
      confidence: 'medium', sources: [TB, R + 'B439397354/', R + 'B499382678/', R + 'B519682120/', R + 'B519684442/', R + 'B519842294/', R + 'B520105433/', R + 'B525177050/', R + 'B525716981/', R + 'B526594160/', R + 'B526859692/', R + 'B529723082/', R + 'B532874041/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; order freely after the first four dishes; no strong perfume; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側279-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004238, 135.776190); cross-checked: GSI 京都府京都市東山区祇園町北側279番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526859692/', R + 'B529723082/'],
    price_note: 'Course price from April 2026 reviews (¥28,000; ¥32,340 with tax); plus 5% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Game course: 4 set dishes, then free à la carte from about 30 dishes', '¥28,000–32,340', 'Course', 'ask', 'no', 'April 2026.', 'gibier_course'),
      it('', '', 'Botan-nabe (wild boar hot pot)', '', 'À la carte', 'ask', 'no', 'April 2026.', 'botan_nabe'),
      it('', '', 'Black-bear pâté', '', 'À la carte', 'ask', 'no', 'January 2026.', 'bear_pate'),
    ] }, {
    cuisine: 'ジビエのコース: シェフが選ぶ4品のあと、約30品のアラカルトから好きなだけ、値段は同じ (2025〜2026年の口コミ)・コース28,000円、税込32,340円 (2026年4月)、飲み物込みで1人約30,000〜50,000円 (2026年の口コミ)・鹿 (ロースト、トリッパ、夏鹿のハンバーグ)、猪 (ロース、春巻き、ぼたん鍋)、熊のパテとハンバーグ、雉の炭火焼き、真鴨、パルミジャーノのトリッパのフライ・Miyama の季節の食材と山菜: 春は山椒の鍋、夏のきのこ、鮎とそうめん、鰻とすっぽんのスープ・自家製のパン、チーズ、キッシュ・ワインセラー (2025〜2026年の口コミ)',
    neighborhood: '四条の北の祇園。祇園四条駅から徒歩5分',
    gf_detail: '要確認。ジビエの料理には春巻き、パルミジャーノのトリッパのフライ、キッシュ、ハンバーグ、自家製パンもあり、焼き物や鍋と並ぶ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ジビエの店 (鹿、猪、熊、雉、鴨) (2025〜2026年の口コミ)。',
    notes: '[ジビエ・祇園、鹿と熊を好きなだけ] 祇園の U字のカウンター。Miyama 町出身の Futa Kanda シェフがジビエを出す。最初の4品のあとは約30品のアラカルトから好きなだけ、一律の値段 (2026年は約28,000〜32,000円)。鹿のトリッパ、熊のパテ、雉の炭火焼き、猪の春巻きやぼたん鍋に、Miyama の山菜と自家製パン。口コミではくさみが少ないという。3時間ほど見ておくとよい。2025年12月の客は提供が遅く店内が寒かったと書く。完全予約制、日曜休み。',
  });
}

// ================================================================ 京都 いと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031706/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_kyoto_ito', name: '京都 いと (Kyoto Ito)', category: 'MOM_AND_POP',
    lat: 34.989438, lng: 135.758698, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki with dashi and organic soy sauce, French sauces and dairy, tempura and somen; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant states it cannot accommodate vegetarian menus because of the nature of its courses (Tabelog, shop text).',
    hours_raw: 'Lunch 12:00–14:00 and dinner 18:00–21:00, each course starting at a set time; closed irregularly (Tabelog). Reservation only (Tabelog). 5% service charge, no table charge (Tabelog). Lunch prices rose from October 2026 (September 2026). 16 seats: an 8-seat counter of a single 9 m board, and private rooms for 2–8, including upstairs (Tabelog; 2026 reviews). Non-smoking; cards (Tabelog). In a 100-year-old townhouse behind Shichijo-dori facing the moat of Higashi Hongan-ji; 5 min from Kyoto Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Facing the moat of Higashi Hongan-ji, behind Shichijo — 5 min from Kyoto Stn',
    cuisine: 'Kaiseki joining Kyoto cooking and French technique in a renovated townhouse; organic vegetables, rice and seasonings (Tabelog, shop text; September 2026) · signature seasonal salad (Tabelog) · dishes have included corn blancmange with dashi, fig jelly and purple sea urchin; Miwa somen with Manganji pepper, ashiaka shrimp, tomato, basil and anchovy; grilled eggplant with beer-braised wagyu; seared hamo and kinmedai sashimi; warm sushi of fried sawara with sea urchin; ashiaka shrimp and truffle chawanmushi; Kumamoto conger uzaku; Kumamoto beef roast; ayu kamameshi (2025–26 reviews) · dinner bills about ¥20,000–45,000 a head; lunch about ¥15,000–20,000 (2025–26 reviews) · sake, house-made liqueurs and French wines (Tabelog; December 2025)',
    website: null, gmaps: gm('京都 いと 東本願寺'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki · Kyoto Station, Kyoto–French in an old townhouse] A reservation-only kaiseki in a 100-year-old townhouse across the moat from Higashi Hongan-ji, five minutes from Kyoto Station. Chef Shohei Noguchi, from Fukushima and trained in France and at a sushi shop, mixes dashi, charcoal and rice with French sauces and organic vegetables: corn blancmange with sea urchin, Miwa somen dressed like pasta, ayu kamameshi to finish. Courses start together at 12:00 and 18:00; sit at the 9 m counter or in a private room. Dinner runs about ¥20,000–45,000; one October 2026 diner found it poor value.",
    chef_bio: { chef_name: 'Shohei Noguchi', roles: ['Head chef (Tabelog, shop text)'], origin: 'Fukushima Prefecture (September 2026 review)',
      background: 'Per a September 2026 reviewer: head chef Shohei Noguchi is from Fukushima; after culinary school the chef went to France in 2010 to train at a Michelin-starred restaurant, then worked at a Michelin-starred French restaurant in Osaka and trained in sushi at "Fuku Sushi Mori". A June 2026 reviewer says the shop received a Michelin star in 2019 under a different chef and that the current chef was born in 1990, with a young team aged 20s to 30s. Per Tabelog (the shop’s own text): organic seasonings such as soy sauce, salt and mirin, and gratitude to producers, fishermen and farmers.',
      philosophy: 'Per Tabelog (the shop’s own text): "To Producers, Fishermen, and Farmers: Elevating Gratitude for the Life of Food into Culinary Art."',
      specialty: 'Seasonal salad; Kyoto–French kaiseki.',
      anecdotes: [
        { text: 'A September 2026 family booked lunch quickly before a price rise from October, for a father who wanted to return after leaving hospital.', source: R + 'B521704377/' },
        { text: 'An October 2026 diner praised the staff’s warmth and humour but found the value for money poor for the ingredients.', source: R + 'B537318179/' },
        { text: '"In particular, the "Warm Sushi with Fried Sawara Tachi Fish Topped with Sea Urchin" was the most impressive sushi I have ever had in my life." — October 2025.', source: R + 'B515666671/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区中居町112-1、京都駅より徒歩5分、東本願寺のお堀の向かい、七条通りの裏、昼 12:00〜14:00・夜 18:00〜21:00、不定休、完全予約制、サービス料5％、チャージなし、16席 (カウンター8席、個室2〜8名)、禁煙、カード可、築100年の町家を改装した懐石、京料理とフランス料理、有機の醤油・塩・みりん、名物の季節のサラダ、コースの性質上ベジタリアンメニューは対応不可、Shohei Noguchi 料理長。口コミ (2025年8月〜2026年10月、英語): Fukushima 出身、2010年に渡仏、大阪のミシュラン星付きフレンチ、Fuku Sushi Mori で寿司の修業、2019年の星は前の料理長の時、1990年生まれの料理長、若いスタッフ、とうもろこしのブランマンジェ、Miwa の素麺、鱧、Kumamoto のうざく、鮎の釜飯、10月から昼の値上げ、コスパへの不満の声。',
      confidence: 'medium', sources: [TB, R + 'B511594827/', R + 'B514588318/', R + 'B515666671/', R + 'B520161400/', R + 'B521704377/', R + 'B521813512/', R + 'B522048206/', R + 'B528980767/', R + 'B534084250/', R + 'B535616979/', R + 'B536355333/', R + 'B537318179/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; staff explain each dish; many overseas guests (December 2025); cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区中居町112-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989438, 135.758698); cross-checked: GSI 京都府京都市下京区中居町112番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices read; bills from 2025–26 reviews; plus 5% service (Tabelog); lunch prices rose in October 2026.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase course (from 18:00)', 'about ¥20,000–45,000 a head', 'Course', 'ask', 'no', '2025–26 reviews.', 'dinner_course'),
      it('', '', 'Lunch omakase course (from 12:00)', 'about ¥15,000–20,000 a head', 'Course', 'ask', 'no', '2026 reviews.', 'lunch_course'),
      it('', '', 'Seasonal salad (signature)', '', 'Course', 'ask', 'no', 'Tabelog.', 'seasonal_salad'),
    ] }, {
    cuisine: '改装した町家で京料理とフランスの技を合わせた懐石。有機の野菜、米、調味料 (食べログの店の紹介、2026年9月)・名物の季節のサラダ (食べログ)・とうもろこしのブランマンジェと出汁、いちじくのジュレ、紫雲丹、万願寺唐辛子・赤足海老・トマト・バジル・アンチョビの Miwa の素麺、ビールで煮た和牛の焼き茄子、炙った鱧と金目鯛の刺身、揚げた鰆と雲丹の温かい寿司、赤足海老とトリュフの茶碗蒸し、Kumamoto のうざく、Kumamoto の牛肉のローストビーフ、鮎の釜飯 (2025〜2026年の口コミ)・夜は1人約20,000〜45,000円、昼は約15,000〜20,000円 (2025〜2026年の口コミ)・日本酒、自家製の果実酒、フランスワイン (食べログ、2025年12月)',
    neighborhood: '七条の裏、東本願寺のお堀の向かい。京都駅から徒歩5分',
    gf_detail: '要確認。出汁と有機の醤油の懐石に、フランスのソースや乳製品、天ぷら、そうめんもある。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースの性質上ベジタリアンメニューには対応できないと店が明記している (食べログの店の紹介)。',
    notes: '[懐石・京都駅、町家の京都とフランス] 京都駅から5分、東本願寺のお堀の向かいの築100年の町家にある完全予約制の懐石。Fukushima 出身で、フランスと寿司店で修業した Shohei Noguchi 料理長が、出汁、炭火、ご飯にフランスのソースと有機野菜を合わせる。紫雲丹のとうもろこしのブランマンジェ、パスタのような Miwa の素麺、締めは鮎の釜飯。昼12時と夜18時に一斉スタートで、9mのカウンターか個室で。夜は約20,000〜45,000円。2026年10月の客は値段に見合わないと書く。',
  });
}

save();
