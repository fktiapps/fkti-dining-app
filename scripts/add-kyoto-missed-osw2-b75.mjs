// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 75.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 喫茶 農園 NOEN (retro kissaten at the Shijo–Hanamikoji corner, opened early Showa as a Western restaurant)
//   + 祇おん 江口 Gion Eguchi (Gion kaiseki with suppon all year, hamo and torafugu courses)
//   - WAGYU SUKIYAKI 極 Kyoto Kawaramachi — chain (株式会社GOKU), as 26044112
//   - 玄品 京都烏丸 — chain (関門海), as 26042669
//   + おこしやす おでんとおばんざい、ちょっと釜めし Okoshiyasu (Gion oden and obanzai counter; karaoke after 21:30)
//   - 串政 — no 2025–26 review (rest rule)
//   - 京都洋食 スター食堂 烏丸分店 — chain (スター食堂株式会社), as 26044932
//   + 京Apollo食堂 Kyo Apollo Shokudo (creative izakaya in a Miyagawa-cho townhouse; Apollo Group, a local multi-name group with Apollo+;
//     its other 京Apollo listing, 京Apollo 新町 26033333, is marked closed on Tabelog)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in
//   queue-status.jsonl: rulings followed for 極, 玄品 and スター食堂; Apollo+ (26002988) is the group's only shop in data.
//   Service charges: 江口 6% (Tabelog).
//   Pins: Tabelog /en/ point, cross-checked with GSI; おこしやす moved ~8 m east off こもれびのワインバー (1 m, likely the same building); each
//   9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042571', 'WAGYU SUKIYAKI 極 Kyoto Kawaramachi: chain — WAGYU SUKIYAKI 極〜GOKU〜 (株式会社GOKU), 24 shops in Japan plus Sydney (PR TIMES, 2026); same ruling as its Gion Shijo shop (26044112)');
skip('26043903', '玄品 京都烏丸 ふぐ・うなぎ・かに料理: chain — 玄品 (関門海), about 60 shops; same ruling as 26042669');

// ================================================================ 喫茶 農園 (NOEN)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020737/'; const R = TB + 'dtlrvwlst/';
  const GA = 'https://www.gion.or.jp/gion_shop_detail/%E5%96%AB%E8%8C%B6-%E8%BE%B2%E5%9C%92';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kissa_noen_gion', name: '喫茶 農園 (NOEN)', category: 'OMNI',
    lat: 35.003692037069804, lng: 135.7749607791768, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the food is toast, sandwiches, pancakes and cake; drinks only (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee, tea, juices, sodas and shaved ice; the food uses egg, cheese and butter (reviews).',
    hours_raw: '09:00–18:00; closed Tuesday (Gion shopping street association; Tabelog). No reservations (Tabelog). No cards or e-money; QR payments accepted (Tabelog). 38 seats, tables only; non-smoking; Wi-Fi (Tabelog; June 2026). At the south-west corner of Shijo and Hanamikoji, across from Ichiriki Chaya (Tabelog; October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo at Hanamikoji',
    cuisine: 'Retro kissaten, opened in the early Showa era as a Western-style restaurant (Gion shopping street association) · morning set B — toast, salad and coffee ¥650 (March 2026) · hot egg sandwich with salad and a drink ¥1,000; bacon-and-egg toast set about ¥1,000 (October 2026) · cheese-and-honey toast on thick bread; pancakes; cake (2026) · coffee ¥550; melon soda, lemon squash, banana juice; Blue Hawaii shaved ice ¥780 (2023–2026)',
    website: GA, gmaps: gm('喫茶 農園 祇園'), menu_url: null,
    notes: "[Kissaten · Shijo–Hanamikoji corner, a retro café since early Showa] An old-fashioned coffee shop on a busy Gion corner, calm inside, with breakfast sets from ¥650, a ¥1,000 hot egg sandwich set, thick honey-cheese toast and shaved ice in summer. No cards — QR pay accepted; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff not named'], origin: null,
      background: 'Opened in the early Showa era as a Western-style restaurant, then rare; now a coffee shop serving coffee and light meals, still aiming "to serve what customers find delicious" (Gion shopping street association). Reviewers (2014–2026) describe a nostalgic café with kind staff, local regulars reading newspapers and many overseas visitors.',
      philosophy: 'To serve what customers find delicious, as since the founding (Gion shopping street association).',
      specialty: 'Coffee and toast sets.',
      anecdotes: [
        { text: 'A March 2026 regular had the ¥650 morning set before a kabuki show at the Minamiza.', source: R + 'B471496227/' },
        { text: 'An October 2026 regular praised the hot egg sandwich set for not having raised the price.', source: R + 'B537167095/' },
        { text: 'A July 2026 Saturday visitor escaped the heat with a ¥780 Blue Hawaii shaved ice.', source: R + 'B532369118/' },
      ],
      japanese_sources_summary: '祇園商店街振興組合: 喫茶 農園、京都市東山区祇園町南側571、当時は珍しい西洋料理のレストランとして昭和初期に開業、現在はこだわりのコーヒーと軽食の喫茶店、「お客様に美味しいと思っていただけるものをお出ししたい」という想いは創業当時から、9:00〜18:00、火曜定休。食べログ: NOEN、カフェ・喫茶店、四条花見小路西南角、予約不可、カード・電子マネー不可、QR決済可、38席 (テーブルのみ)、禁煙。口コミ (2014〜2026年、英語): 南座の観劇前に、モーニングBセット (トースト、サラダ、コーヒー) 650円、コーヒー550円、ホットエッグサンドのサラダとドリンク付き1,000円、ベーコンエッグトーストのセット、チーズとはちみつの厚切りトースト、パンケーキ、ケーキ、メロンソーダ、レモンスカッシュ、バナナジュース、ブルーハワイのかき氷780円、レトロで落ち着いた店内、新聞を読む地元客、海外の客も多い、Wi-Fi、一力亭の向かい。',
      confidence: 'medium', sources: [GA, TB, R + 'B471496227/', R + 'B515091556/', R + 'B526318267/', R + 'B527206722/', R + 'B529335721/', R + 'B532369118/', R + 'B535900243/', R + 'B537167095/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in café, many overseas guests; no cards, QR pay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側571 四条花見小路西南角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Gion shopping street association page and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003692, 135.774961), at the Shijo–Hanamikoji corner as its address says; cross-checked: GSI 京都府京都市東山区祇園町南側571番地 (lot) 87m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B471496227/', R + 'B527206722/', R + 'B532369118/', R + 'B537167095/'],
    price_note: 'Prices from 2026 reviews; no published menu.', last_checked: TODAY, items: [
      it('', '', 'Morning set B (toast, salad, coffee)', '¥650', 'Morning', 'no', 'ask', 'March 2026.', 'morning_b'),
      it('', '', 'Hot egg sandwich with salad and a drink', '¥1,000', 'Food', 'no', 'no', 'October 2026.', 'egg_sando'),
      it('', '', 'Coffee', '¥550', 'Drinks', 'gf', 'vegan', 'April 2026.', 'coffee'),
      it('', '', 'Blue Hawaii shaved ice', '¥780', 'Sweets', 'ask', 'ask', 'July 2026.', 'kakigori'),
    ] }, {
    cuisine: '昭和初期に西洋料理のレストランとして開業したレトロな喫茶店 (祇園商店街振興組合)・モーニングBセット、トースト・サラダ・コーヒーで650円 (2026年3月)・ホットエッグサンドのサラダとドリンク付き1,000円、ベーコンエッグトーストのセットも1,000円ほど (2026年10月)・厚切りのチーズとはちみつのトースト、パンケーキ、ケーキ (2026年)・コーヒー550円、メロンソーダ、レモンスカッシュ、バナナジュース、ブルーハワイのかき氷780円 (2023〜2026年)',
    neighborhood: '祇園、四条花見小路の角',
    gf_detail: 'グルテンフリー不可。食べ物はトースト、サンド、パンケーキ、ケーキ。飲み物のみ可 (口コミ)。',
    vegan_detail: '要確認。コーヒー、紅茶、ジュース、ソーダ、かき氷。食べ物は卵、チーズ、バターを使う (口コミ)。',
    notes: '[喫茶・四条花見小路の角、昭和初期からのレトロ喫茶] 祇園のにぎやかな角にある、なかは落ち着いた昔ながらの喫茶店。650円からのモーニング、1,000円のホットエッグサンドのセット、厚切りのチーズはちみつトースト、夏はかき氷。カード不可、QR決済可、火曜休み。',
  });
}

// ================================================================ 祇おん 江口
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003319/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-eguchi.net/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_gion_eguchi', name: '祇おん 江口 (Gion Eguchi)', category: 'OMNI',
    lat: 35.00483172072055, lng: 135.77474445792453, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with dashi, soy and saikyo miso, suppon and fugu hot pots, sushi to finish; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki built on fish, suppon and dashi (official site; Tabelog).',
    hours_raw: '17:30–23:00 (last order 22:00); closed Sunday (official site). Tabelog gives 17:30–22:00 Monday–Saturday and holidays, last order 21:00 and last seating 19:30. Reservations taken, also online; cancellation 100% up to 3 days before, 50% 4–7 days before; at least one drink per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). Service charge 6% (Tabelog). 30 seats: a counter, tatami rooms and private rooms for 8 and 10–20; non-smoking except in the private rooms; children welcome (Tabelog; official site). Katsumi Building 1F on Kiyomoto-cho, also reached from the Kiritoshi side (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Kiyomoto-cho near Kiritoshi',
    cuisine: 'Seasonal Kyoto kaiseki; suppon served all year; wild hamo chosen by the owner (official site) · omakase courses of 8 dishes ¥8,500 and 9 dishes ¥9,500; 9 dishes with 90 minutes of shochu ¥13,000; suppon course, hamo shabu-shabu course and torafugu course (sashimi, hot pot, porridge) ¥10,800 each (Tabelog) · an opening plate dressed with flowers; hamo, saikyo-miso chicken, grilled ayu; red miso soup with rolled and pressed sushi (2025–2026) · about ¥10,000–15,000 a head (Tabelog reviews)',
    website: SITE, gmaps: gm('祇おん 江口'), menu_url: TB + 'party/',
    notes: "[Kaiseki · Gion Kiyomoto-cho, suppon all year] A calm Gion kaiseki house whose owner trained at Kyoto Kitcho: seasonal courses from ¥8,500 with a flower-dressed opening plate, plus suppon, hamo shabu-shabu and torafugu courses. Counter and private tatami rooms; closed Sunday.",
    chef_bio: { chef_name: '小林宏哉', roles: ['Owner-chef (店主)'], origin: null,
      background: 'The owner trained at Kyoto Kitcho and was head chef at two other restaurants before opening Gion Eguchi (September 2025 review). The official site, signed by owner 小林宏哉, describes choosing tableware and settings, wild hamo bought by the owner, suppon all year and menus that change with the seasons.',
      philosophy: 'Thoughtful hospitality: tableware chosen to suit, settings arranged with care, seasonal ingredients at the peak, each plate beautiful and easy to eat (official site).',
      specialty: 'Seasonal kaiseki; suppon.',
      anecdotes: [
        { text: 'A September 2025 guest returned after six years to the owner’s attentive service.', source: R + 'B513172496/' },
        { text: 'An April 2026 last-minute diner watched the head chef run the counter alone at an impressive pace.', source: R + 'B528478329/' },
        { text: 'A July 2026 business dinner had hamo twice, in a vinegared dish and a soup.', source: R + 'B532812209/' },
      ],
      japanese_sources_summary: '公式サイト: 祇おん 江口、京都市東山区清本町369 かつみビル1F、17:30〜23:00 (L.O.22時)、日曜定休、店主 小林宏哉、心を尽くすおもてなし、器の取り合わせとしつらい、旬の素材、すっぽん料理を通年で、鱧など天然物を店主が厳選、季節で変わる献立、カウンター席と完全個室、座敷、接待や宴会。食べログ: ぎおん えぐち、日本料理・ふぐ・すっぽん、月〜土・祝日 17:30〜22:00 (L.O.21:00、最終入店19:30)、日曜定休、カード可、PayPay可、電子マネー不可、サービス料6%、30席、個室 (8名、10〜20名)、個室のみ喫煙可、子供可、1人1ドリンク以上、キャンセル料は3日前から100%・4〜7日前は50%、コース: おまかせ8品8,500円、9品9,500円、焼酎の飲み放題90分付き9品13,000円、すっぽんコース10,800円、鱧しゃぶコース10,800円、とらふぐのコース (てっさ、てっちり、雑炊) 10,800円。口コミ (2022〜2026年、英語): 京都吉兆で修業し2店で料理長を務めた店主、花を添えた先付、鱧、鶏の西京焼き、鮎の焼き物、赤だし、巻き寿司と押し寿司、ひとりで切り盛りする日も、落ち着いた雰囲気、値段は祇園では手ごろ。',
      confidence: 'medium', sources: [SITE, SITE + 'greeting/', TB, TB + 'party/', R + 'B485371725/', R + 'B487403167/', R + 'B507168744/', R + 'B511061755/', R + 'B513172496/', R + 'B528478329/', R + 'B532812209/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; cancellation fees from 7 days; 6% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町369 かつみビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004832, 135.774744); cross-checked: GSI 京都府京都市東山区清本町369番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'party/'],
    price_note: 'Course prices from Tabelog (November 2026), tax included; online-booking prices are lower. Plus 6% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 8 dishes', '¥8,500', 'Courses', 'ask', 'no', '', 'omakase8'),
      it('', '', 'Omakase course, 9 dishes', '¥9,500', 'Courses', 'ask', 'no', '', 'omakase9'),
      it('', '', 'Suppon course, 7 dishes', '¥10,800', 'Courses', 'ask', 'no', '', 'suppon'),
      it('', '', 'Hamo shabu-shabu course, 6 dishes', '¥10,800', 'Courses', 'ask', 'no', '', 'hamo'),
      it('', '', 'Torafugu course: sashimi, hot pot, rice porridge', '¥10,800', 'Courses', 'ask', 'no', '', 'fugu'),
    ] }, {
    cuisine: '季節の京料理の会席。すっぽんは通年、鱧は店主が選ぶ天然物 (公式サイト)・おまかせ8品8,500円、9品9,500円、焼酎の飲み放題90分付き9品13,000円、すっぽんコース、鱧しゃぶコース、とらふぐのコース (てっさ、てっちり、雑炊) は各10,800円 (食べログ)・花を添えた先付、鱧、鶏の西京焼き、鮎の焼き物、赤だしと巻き寿司・押し寿司 (2025〜2026年)・1人10,000〜15,000円ほど (食べログの口コミ)',
    neighborhood: '祇園、清本町の切通しの近く',
    gf_detail: '要確認。出汁、醤油、西京味噌を使う京料理の会席、すっぽんやふぐの鍋、締めに寿司。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、すっぽん、出汁の会席 (公式サイト、食べログ)。',
    notes: '[会席・祇園清本町、通年のすっぽん] 京都吉兆で修業した店主の落ち着いた祇園の会席。花を添えた先付から始まる8,500円からの季節のコースに、すっぽん、鱧しゃぶ、とらふぐのコースも。カウンターと座敷の個室、日曜休み。',
  });
}

skip('26001357', '串政: no 2025–26 review — the latest of 35 Tabelog reviews is from November 2024 (rest rule)');
skip('26043087', '京都洋食 スター食堂 烏丸分店: chain — スター食堂株式会社 runs six スター食堂-named shops; same ruling as スター食堂 總本店 (26044932)');

// ================================================================ おこしやす おでんとおばんざい、ちょっと釜めし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037183/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '00:30']);
  put({
    id: 'kyoto_okoshiyasu_oden_gion', name: 'おこしやす おでんとおばんざい、ちょっと釜めし (Okoshiyasu)', category: 'OMNI',
    lat: 35.004335, lng: 135.775080, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden and obanzai in dashi and soy, kamameshi; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and obanzai in dashi; the kamameshi seen in reviews had bacon (October 2025).',
    hours_raw: '12:00–15:00 and 18:00–21:30 daily, then 21:30–00:30 as a karaoke bar; closing days vary (Tabelog; October 2025). Lunch: one set per diner — kamadaki oden set ¥1,980, Okoshiyasu lunch ¥1,650, obanzai and kamameshi lunch ¥2,420 (November 2025); kamameshi takes about 30 minutes (March 2026). Reservations taken (Tabelog). Cards, e-money and QR (PayPay, Alipay, WeChat Pay) accepted (Tabelog). A 13-seat counter; non-smoking; Wi-Fi (Tabelog). Hanami Kaikan 1F, Tominaga-cho, near Hanamikoji (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho near Hanamikoji',
    cuisine: 'Counter of oden, Kyoto obanzai laid out on the counter, and kamameshi cooked in front of you (Tabelog; reviews) · lunch sets ¥1,650–2,420 (November 2025) · kamameshi of sweet potato and bacon (October 2025) · after 21:30 a karaoke bar (October 2025) · school-trip student discounts on the menu (December 2023) · about ¥1,000–3,000 at lunch (Tabelog reviews)',
    website: null, gmaps: gm('おこしやす おでんとおばんざい 祇園'), menu_url: TB,
    notes: "[Oden & obanzai · Gion Tominaga-cho, lunch sets and late karaoke] A thirteen-seat counter lined with Kyoto obanzai, with oden and kamameshi cooked to order: lunch sets from ¥1,650, oden in the evening, and karaoke with the mama-san from 9:30 pm.",
    chef_bio: { chef_name: null, roles: ['Owner (mama-san) not named'], origin: null,
      background: 'Reviewers (2022–2026) describe a small counter where the owner chats with guests over oden and obanzai; one person can run lunch alone (November 2025), and from 21:30 the mama-san turns the place into a karaoke bar (October 2025).',
      philosophy: null,
      specialty: 'Oden, obanzai and kamameshi.',
      anecdotes: [
        { text: 'A January 2025 guest who left a hat behind had it posted home with a note and a maiko postcard.', source: R + 'B498853409/' },
        { text: 'An October 2025 party of four older guests had sweet-potato-and-bacon kamameshi cooked at the counter.', source: R + 'B515384411/' },
        { text: 'An October 2025 late wanderer arrived at 9:30 pm just as the sign changed to karaoke.', source: R + 'B516185130/' },
      ],
      japanese_sources_summary: '食べログ: おこしやす おでんとおばんざい、ちょっと釜めし、居酒屋・おでん、京都市東山区富永町123 花見会館1F、毎日 12:00〜15:00、18:00〜21:30、21:30〜0:30、定休日は不定、予約可、カード・電子マネー・QR決済可 (PayPay、Alipay、WeChat Pay)、13席、禁煙、Wi-Fi、1人でも入りやすい。口コミ (2022〜2026年、英語): おでんとおばんざい、目の前で炊く釜めし、さつまいもとベーコンの釜めし (2025年10月)、ランチは1人1セット、釜炊きおでんのセット1,980円、おこしやすランチ1,650円、おばんざいと釜めしのランチ2,420円 (2025年11月)、釜めしは30分ほどかかる、ランチはひとりで切り盛り、21時半からはママのカラオケ、忘れた帽子を舞妓のはがきを添えて送ってくれた、修学旅行生の割引、おばんざいに覆いがないのが気になるという声。',
      confidence: 'low', sources: [TB, R + 'B476561549/', R + 'B498853409/', R + 'B514891241/', R + 'B515384411/', R + 'B516185130/', R + 'B516488601/', R + 'B519924564/', R + 'B523809265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; one lunch set per diner; karaoke after 21:30.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町123 花見会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.004335, 135.774987), offset ~8m east to clear こもれびのワインバー (1m, likely the same building); cross-checked: GSI 京都府京都市東山区富永町123番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516488601/'],
    price_note: 'Lunch prices from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Okoshiyasu lunch (obanzai set)', '¥1,650', 'Lunch', 'ask', 'no', '', 'lunch_okoshiyasu'),
      it('', '', 'Kamadaki oden set', '¥1,980', 'Lunch', 'ask', 'no', '', 'lunch_oden'),
      it('', '', 'Obanzai and kamameshi lunch', '¥2,420', 'Lunch', 'ask', 'no', 'Kamameshi takes about 30 minutes.', 'lunch_kamameshi'),
    ] }, {
    cuisine: 'カウンターに並ぶおばんざい、おでん、目の前で炊く釜めしの店 (食べログ、口コミ)・ランチセットは1,650〜2,420円 (2025年11月)・さつまいもとベーコンの釜めし (2025年10月)・21時半からはカラオケバー (2025年10月)・メニューに修学旅行生の割引 (2023年12月)・ランチは1,000〜3,000円ほど (食べログの口コミ)',
    neighborhood: '祇園、富永町の花見小路の近く',
    gf_detail: '要確認。出汁と醤油のおでんとおばんざい、釜めし。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでんとおばんざい。口コミの釜めしにはベーコン入り (2025年10月)。',
    notes: '[おでんとおばんざい・祇園富永町、ランチと深夜のカラオケ] おばんざいの並ぶ13席のカウンター。おでんと釜めしは注文してから。ランチは1,650円から、夜はおでん、21時半からはママとカラオケ。',
  });
}

// ================================================================ 京Apollo食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031099/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kyo_apollo_shokudo_miyagawacho', name: '京Apollo食堂 (Kyo Apollo Shokudo)', category: 'OMNI',
    lat: 34.998577869739634, lng: 135.77042482683026, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative izakaya dishes with dashi; katsu sandwiches, gyoza and gratin are on the menu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, meat and dashi-based dishes (reviews).',
    hours_raw: '17:00–24:00; closed Tuesday (Tabelog). Reservations recommended (Tabelog; August 2026). Cards, e-money and PayPay accepted (Tabelog). 34 seats: counter, tables, a tatami private room for 6–8 and a private room for 8–12 (no children) upstairs; non-smoking (Tabelog). A renovated townhouse in Miyagawa-cho, east of Matsubara and Kawabata (Tabelog; March 2026). Opened 13 July 2018; sister shop of Apollo+ in the Apollo Group (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-cho, south of Gion',
    cuisine: 'Creative izakaya in a Miyagawa-cho townhouse, strong on fish and wine (Tabelog; 2026 reviews) · courses with free drinks from ¥6,600 (October 2025; April 2026); an ¥8,800 course with grilled-eggplant potage, rock-oyster gratin and a wagyu sirloin-cap katsu sandwich (November 2025) · à la carte: thick-cut sashimi platter, chicken liver simmered with ginger, ginger gyoza, fried eggplant, stuffed shiitake (March 2026) · beef katsu sandwich to take away (July 2026) · fresh-fruit sours and homemade fruit liqueurs (2025–2026)',
    website: null, gmaps: gm('京Apollo食堂 宮川町'), menu_url: TB,
    notes: "[Izakaya · Miyagawa-cho, creative dishes in a townhouse] A calm, renovated townhouse in the Miyagawa-cho geisha quarter serving inventive izakaya food — thick sashimi, ginger gyoza, a well-liked wagyu katsu sandwich — with fresh-fruit sours and a long wine list. Courses with free drinks from ¥6,600; book ahead; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in July 2018 as part of the Apollo Group, whose other open shop is Apollo+ near Sanjo (Tabelog). Reviewers (2025–2026) describe a calm Miyagawa-cho townhouse with attentive service and many overseas guests.',
      philosophy: null,
      specialty: 'Creative izakaya dishes; wagyu katsu sandwich.',
      anecdotes: [
        { text: 'A November 2025 diner singled out the rock-oyster gratin and wagyu katsu sandwich on the ¥8,800 course.', source: R + 'B518092203/' },
        { text: 'A July 2026 guest took the beef katsu sandwich home for breakfast.', source: R + 'B532268444/' },
        { text: 'An August 2026 regular had lost count of visits and finds booking essential.', source: R + 'B536088471/' },
      ],
      japanese_sources_summary: '食べログ: 京Apollo食堂 (京アポロ食堂)、ダイニングバー・居酒屋・海鮮、京都市東山区新宮川町通松原下ル西御門町444、月・水〜日 17:00〜24:00、火曜定休、カード・電子マネー・PayPay可、34席、個室 (2階に6〜8名の座敷、8〜12名の個室は子供不可)、禁煙、2018年7月13日オープン、アポログループ (アポロプラス)。口コミ (2025〜2026年、英語): 宮川町の町家を改装、飲み放題付きコース6,600円、8,800円のコースで焼き茄子のポタージュ、岩牡蠣のグラタン、和牛のカツサンド、刺身の盛り合わせ、鶏レバーの生姜煮、生姜餃子、揚げ茄子、椎茸の肉詰め、持ち帰りの牛カツサンド、フルーツたっぷりのサワーと自家製果実酒、ワインが充実、海外の客も多い、予約は必須、料理の間が空くという声、家庭的な味という声も。',
      confidence: 'low', sources: [TB, R + 'B516237213/', R + 'B516332336/', R + 'B517028909/', R + 'B518092203/', R + 'B525247894/', R + 'B525270802/', R + 'B526789459/', R + 'B528729870/', R + 'B532268444/', R + 'B536088471/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新宮川町通松原下ル西御門町444',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The official site (kyo-apollo.jp) now shows only a hosting placeholder.' },
    pin_source: `Tabelog ${TB} (34.998578, 135.770425); cross-checked: GSI 京都府京都市東山区西御門町444番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516332336/', R + 'B518092203/'],
    price_note: 'Course prices from October and November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with free drinks', '¥6,600', 'Courses', 'ask', 'no', 'October 2025.', 'course6600'),
      it('', '', 'Course (eggplant potage, oyster gratin, wagyu katsu sandwich)', '¥8,800', 'Courses', 'no', 'no', 'November 2025.', 'course8800'),
      it('', '', 'Beef katsu sandwich', '', 'Food', 'no', 'no', 'Can be taken away.', 'katsusando'),
    ] }, {
    cuisine: '宮川町の町家の創作居酒屋。魚とワインに力 (食べログ、2026年の口コミ)・飲み放題付きのコースは6,600円から (2025年10月、2026年4月)。8,800円のコースには焼き茄子のポタージュ、岩牡蠣のグラタン、和牛のカツサンド (2025年11月)・アラカルトは厚切りの刺身の盛り合わせ、鶏レバーの生姜煮、生姜餃子、揚げ茄子、椎茸の肉詰め (2026年3月)・牛カツサンドは持ち帰りも (2026年7月)・フルーツのサワーと自家製果実酒 (2025〜2026年)',
    neighborhood: '宮川町、祇園の南',
    gf_detail: '要確認。出汁を使う創作居酒屋の料理。カツサンド、餃子、グラタンも。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、肉、出汁の料理 (口コミ)。',
    notes: '[居酒屋・宮川町、町家の創作料理] 宮川町の花街の町家を改装した落ち着いた店。厚切りの刺身、生姜餃子、人気の和牛カツサンドに、フルーツのサワーと充実のワイン。飲み放題付きコースは6,600円から。予約を、火曜休み。',
  });
}

save();
