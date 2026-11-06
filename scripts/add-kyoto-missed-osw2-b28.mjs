// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 28.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + Cafe ふふふあん Fufufuan (半兵衛麸’s fu-and-yuba café above the Kamo at Gojo; here since 2022) — sister concept of 茶房 半兵衛
//     (vm_vm, already in data; the same company’s restaurant at the main store across the street); drafted and flagged.
//   - 梅の花 京都烏丸店 (26003079): chain — 梅の花 is a national tofu-kaiseki chain (branches in Kyoto and Osaka in the crawl alone).
//   + 本家 重兵衛 Honke Jubei (Kyoto-style sushi house founded 1936 in Gion, at Nishiki-Muromachi since 2011)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 焼肉ダイニング甲 (26021205): chain — the group flagship of KINOE (甲), which lists five 甲 yakiniku shops (焼肉ダイニング甲,
//     ヤキニク甲, 肉屋甲, 岩倉焼肉甲, 囲炉裏焼肉甲) plus sister brands (official site); kyoto_sumibi_yakiniku_kinoe is already in data.
//   + 中国饗膳 粋廉 Suiren (shark-fin specialist near Nijo Stn) — not 宮川町 水簾 (kyoto_miyagawacho_suiren), an unrelated kappo.
//   - まとの (26000391): existence not confirmed — the newest Tabelog review is September 2023 and no 2024–2026 source was found.
//   + ristorante DONO (vegetable-led Italian by Heian Shrine; Michelin Green Star; since 2024)
//   None of the four drafted is in data/kyoto.json: grep by id, name (ふふふあん/Fufufuan, 重兵衛/Jubei, 粋廉, DONO/ドーノ) and address
//   (上人町433, 占出山町310-6, 西ノ京職司町76, 岡崎円勝寺町62) found none.
//   Service charges: ふふふあん, 重兵衛, 粋廉 — none listed on Tabelog; DONO — official prices 税サ込 (tax and service included).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003079', 'chain: 梅の花 is a national tofu-kaiseki chain (Kyoto and Osaka branches in the crawl alone)');
skip('26021205', 'chain: flagship of the KINOE (甲) group, five 甲 yakiniku shops plus sister brands (kinoe-yd.com); kyoto_sumibi_yakiniku_kinoe already in data');
skip('26000391', 'existence not confirmed: newest Tabelog review September 2023; no 2024–2026 source found (2026-11-06)');

// ================================================================ Cafe ふふふあん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037471/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://fufufuand.jp/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001009591';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_cafe_fufufuan', name: 'Cafe ふふふあん (Cafe Fufufuan, 半兵衛麸)', category: 'OMNI',
    lat: 34.995330827878476, lng: 135.76860469025857, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the café is built around nama-fu, which is wheat gluten, along with yuba, muffins and pizza (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The café says its dishes contain no meat, but some use dairy and some use fish in the broth (Tabelog, restaurant’s own note).',
    hours_raw: '10:00–17:00 (last order 16:30); closed Wednesday (open on some Wednesday holidays) and 29 December–4 January (Tabelog). No service charge listed (Tabelog). Lunch and tea times can mean a short wait (July–August 2026). 63 seats, including window counters and sofas; groups up to 12; non-smoking; children welcome; cards (VISA, Master, JCB, AMEX, Diners), transit IC, iD, QUICPay and QR including PayPay, Alipay and WeChat Pay (Tabelog; 2026 reviews). On the 3rd floor of the 半兵衛麸 Gojo Building above the shop, with a glass wall over the Kamo River, 83 m from Kiyomizu-Gojo Stn (Tabelog). Moved here from across the street from the 半兵衛麸 main store; opened 28 April 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, by the Kamo River — 83 m from Kiyomizu-Gojo Stn',
    cuisine: 'Café of the fu maker 半兵衛麸, cooking with its fresh nama-fu and nama-yuba (Tabelog) · lunch: Benkei, nama-fu and nama-yuba in a savoury ankake over rice or noodles, with okara salad and a fu manju; Ichihime; pizza; nama-yuba dengaku +¥500 (Tabelog; 2026 reviews) · nama-fu dengaku of five kinds with seasonal toppings · sweets: fu-mochi zenzai in winter, cold zenzai with three-colour nama-fu, chimaki-fu with matcha for the Gion Festival, the seasonal Seseragi, matcha kakigori, nama-fu matcha parfait with Tsujiri matcha ice cream, kinako muffin (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('Cafe ふふふあん 半兵衛麸 五条'), menu_url: TB,
    notes: "[Café · Gojo by the Kamo River, sweets and lunch of fresh fu] The bright upstairs café of 半兵衛麸, Kyoto's old maker of fu (wheat gluten), with a glass wall looking over the Kamo River at Gojo. Come for nama-fu dengaku with sweet miso, Benkei (fu and yuba in a savoury sauce over rice) at lunch, or chewy fu in zenzai and a matcha parfait. Meat-free, though some dishes use dairy or fish broth. Shop for fu downstairs. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社半兵衛麸 (invoice holder); no chef named'], origin: null,
      background: 'Per Tabelog: a café produced by the fu maker 半兵衛麸, serving dishes and sweets of freshly made nama-fu and nama-yuba; moved from across the street from the 半兵衛麸 main store and opened on 28 April 2022 (pre-opening 15 April). The invoice number belongs to 株式会社半兵衛麸. The company’s restaurant at the main store, 茶房 半兵衛, is a separate record.',
      philosophy: null,
      specialty: 'Nama-fu dengaku; Benkei of fu and yuba.',
      anecdotes: [
        { text: 'An August 2026 family found the nama-yuba rice bowl such a hit with the child in the party that it was nearly finished.', source: R + 'B535056848/' },
        { text: 'A September 2026 visitor heading to Ichihime Shrine stopped for lunch and nama-fu dengaku.', source: R + 'B535180278/' },
        { text: 'A June 2026 guest came for coffee and a kinako muffin straight after a fu lunch at the main store.', source: R + 'B530087998/' },
      ],
      japanese_sources_summary: '食べログ: Cafe ふふふあん、カフェ・日本料理・甘味、東山区問屋町通五条下る上人町433 半兵衛麸五条ビル3F、清水五条駅から83m、10:00〜17:00 (L.O. 16:30)、水曜定休・年末年始 (12月29日〜1月4日)、63席、禁煙、カード・電子マネー・QR 可、2022年4月28日オープン (半兵衛麸本店の向かいから移転、半兵衛麸プロデュース)、インボイス T6130001009591 (株式会社半兵衛麸)。お店の情報: 肉を使わない料理、一部に乳製品や魚 (出汁) を含む。公式紹介: 生麩と生湯葉の甘味、冬の麩もちぜんざい、夏の祇園祭の粽麩と抹茶、昼の「弁慶」(生麩と生湯葉のあんかけご飯)。口コミ (2026年6〜9月、英語): 鴨川の眺め、生麩田楽5種、生湯葉田楽+500円、一姫、ピザ、おからサラダ、麩まんじゅう、冷やしぜんざい、抹茶かき氷、都路里の抹茶アイスの生麩パフェ、きなこマフィン。',
      confidence: 'medium', sources: [TB, SITE, INV, R + 'B530087998/', R + 'B530889500/', R + 'B532306485/', R + 'B532356615/', R + 'B533349791/', R + 'B533608586/', R + 'B534835793/', R + 'B534852064/', R + 'B535056848/', R + 'B535180278/', R + 'B536073087/', R + 'B536190839/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy with visitors at lunch; the shop downstairs sells fu to take home.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区問屋町通五条下る上人町433 半兵衛麸五条ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the café’s own vegan note; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995331, 135.768605); cross-checked: GSI 京都府京都市東山区上人町433番地 (lot) 49m; 14m from vm_vm (茶房 半兵衛, the same company’s restaurant across the street); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535056848/', R + 'B536190839/'],
    price_note: 'Dishes from Tabelog and 2026 reviews; prices not published apart from the +¥500 yuba dengaku.', last_checked: TODAY, items: [
      it('弁慶', '', 'Benkei: nama-fu and nama-yuba in ankake over rice or noodles', '', 'Lunch', 'no', 'ask', '', 'benkei'),
      it('', '', 'Nama-fu dengaku, five kinds', '', 'Dishes', 'no', 'ask', '', 'fu_dengaku'),
      it('', '', 'Nama-yuba dengaku (add-on)', '¥500', 'Dishes', 'ask', 'ask', '', 'yuba_dengaku'),
      it('', '', 'Nama-fu matcha parfait', '', 'Sweets', 'no', 'no', '', 'fu_parfait'),
      it('', '', 'Zenzai with nama-fu', '', 'Sweets', 'no', 'ask', 'Hot in winter, cold in summer.', 'fu_zenzai'),
    ] }, {
    cuisine: '麩屋の半兵衛麸のカフェで、作りたての生麩と生湯葉を使う (食べログ)・昼: 生麩と生湯葉のあんかけをご飯か麺にかけた「弁慶」、おからサラダと麩まんじゅう付き。一姫、ピザ。生湯葉田楽+500円 (食べログ、2026年の口コミ)・季節の具をのせた5種の生麩田楽・甘味: 冬の麩もちぜんざい、3色の生麩の冷やしぜんざい、祇園祭の粽麩と抹茶、季節の Seseragi、抹茶かき氷、都路里の抹茶アイスの生麩パフェ、きなこマフィン (食べログ、2026年の口コミ)',
    neighborhood: '五条、鴨川沿い。清水五条駅から83m',
    gf_detail: 'グルテンフリー不可。小麦のグルテンである生麩が中心で、湯葉、マフィン、ピザも (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。肉を使わない料理だが、一部に乳製品や魚の出汁を使う (食べログ、店の情報)。',
    notes: '[カフェ・五条の鴨川沿い、生麩の甘味と昼ごはん] 京都の老舗の麩屋、半兵衛麸の明るいカフェ。ガラス張りの壁から五条の鴨川を望む。甘い味噌の生麩田楽、昼の「弁慶」(麩と湯葉のあんかけご飯)、もちもちの生麩のぜんざいや抹茶パフェを。肉は使わないが、一部に乳製品や魚の出汁を使う。下の店で麩を買って帰れる。水曜休み。',
  });
}

// ================================================================ 本家 重兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017551/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://sushijubei.jp/'; const GREET = SITE + 'greeting/'; const MENU = SITE + 'menu/'; const CONCEPT = SITE + 'concept/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_honke_jubei', name: '本家 重兵衛 (Honke Jubei)', category: 'MOM_AND_POP',
    lat: 35.00453650786953, lng: 135.75886394035837, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style sushi seasoned with soy-simmered toppings, rice cooked in kombu dashi, and kappo dishes; no gluten information is published; allergies can be raised when booking omakase (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi house; the rice is cooked in kombu dashi, but the menu is built on fish (official site).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:15–13:30); dinner 17:30–22:00 (last order 21:00); closed Tuesday and irregularly (official site); Tabelog shows dinner to 21:00 daily. Takeout of most sushi at slightly lower prices (official menu). Bookings welcome for both; omakase needs booking, with likes, dislikes, allergies and budget given in advance (official site). No service charge listed (Tabelog). 10 counter seats; non-smoking; cards (VISA, JCB, AMEX, Diners), no QR; paid parking nearby (Tabelog). English, Chinese and Korean menus online (official site). In the 占出山 float district on Nishikikoji east of Muromachi, 2 min from exit 22 of Shijo or Karasuma Stn (official site). Founded 1936 in Gion (Nawate-Shinbashi); moved here in March 2011 (official site; Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, Nishikikoji-Muromachi — 2 min from Shijo Stn',
    cuisine: 'Kyoto (Kansai) sushi and kappo: rice of aged Kyoto or Omi rice cooked in kombu dashi; mostly wild fish from the Kyoto market, Tsuruga and Ise; 40-plus toppings, from one piece (official site) · lunch sets: nigiri ¥2,420–6,600, chirashi ¥2,090–4,950, Kyo-chirashi with no raw fish ¥1,980, maki from ¥1,650 · house specialities: 名物 磯巻 ¥1,430, 京好み おぼろ巻 ¥1,210, mackerel sushi ¥2,750 (whole roll for two ¥5,500), box sushi ¥2,420, small sea-bream suzume-zushi ¥2,530, anago bo-zushi ¥1,760 · omakase: sushi only or dishes only from ¥9,900, sushi and dishes from ¥14,300 (official menu)',
    website: SITE, gmaps: gm('本家 重兵衛 錦小路 室町'), menu_url: MENU,
    notes: "[Sushi · Nishiki-Muromachi, Kyoto-style sushi since 1936] A ten-seat counter keeping old Kyoto sushi alive: rice cooked in kombu dashi and seasoned to stand up to the fish, and house classics like the 磯巻 roll, sweet おぼろ巻 and mackerel bo-zushi, all available to take away. Lunch sets start around ¥2,000; evenings bring omakase of nigiri and kappo dishes from ¥9,900. Founded in Gion in 1936 by a master of decorative sushi, now run by the third generation. Closed Tuesday.",
    chef_bio: { chef_name: '荒木 一雄', roles: ['Third-generation owner (店主)'], origin: null,
      background: 'Per the official site: founded in 1936 in Gion (Nawate, above Shinbashi) by 荒木 信次, a leading craftsman of decorative sushi who spread the technique nationwide and wrote a sushi textbook; the second generation, 照雄, held senior posts in the sushi trade association; the third, 荒木 一雄, built today’s "sushi and kappo" style. The shop moved to the 占出山 float district in March 2011. A May 2025 reviewer recalls seven or eight 重兵衛 in Gion some 30 years ago, including one at the now-closed Fujita Hotel.',
      philosophy: 'Per the official site: gratitude to guests, to ingredients and to the trade; as a Kyoto-sushi house the rice comes first — aged Kyoto or Omi rice cooked in kombu dashi so it tastes deeper the more you chew.',
      specialty: '名物 磯巻; 名代 鯖寿し; omakase of sushi and kappo dishes.',
      anecdotes: [
        { text: 'A March 2024 omakase guest was asked at the start about favourite and least favourite ingredients.', source: R + 'B480963483/' },
        { text: 'A May 2025 customer remembered eating at the 重兵衛 in the Fujita Hotel decades ago and found the Kyoto box sushi unchanged.', source: R + 'B506883514/' },
        { text: 'A September 2024 visitor found the owner quiet and the fish excellent, and noted a rare Muraza beef on the menu.', source: R + 'B492087434/' },
      ],
      japanese_sources_summary: '公式サイト (sushijubei.jp): 京の寿し処 割烹 本家 重兵衛、初代 荒木信次が昭和11年に祇園 (縄手新橋上ル) で開業、細工寿司の第一人者、二代目 照雄は寿司同業組合の要職、三代目 一雄が「寿しと料理」の形に、平成23年3月に山鉾町 (占出山) へ移転、店主 荒木一雄。すし飯は京都米や江州米の古米を昆布出汁で炊く、天然ものが中心、京都卸売市場と敦賀・伊勢などから直送、京野菜提供店・京都米提供店、40種以上のネタを1個から。昼11:30〜14:00、夜17:30〜22:00 (L.O. 21:00)、火曜定休・不定休、四条駅・烏丸駅22番出口から徒歩2分。昼: 梅にぎり2,420円〜特上6,600円、ちらし2,090円〜、京ちらし1,980円、名物 磯巻1,430円、京好み おぼろ巻1,210円、名代 鯖寿し2,750円、箱寿し2,420円、小鯛雀寿し2,530円、穴子棒寿し1,760円、持ち帰り可。夜のおまかせ: 寿司のみ・一品料理のみ9,900円より、寿司と一品料理14,300円より。食べログ: カウンター10席、禁煙、カード可。',
      confidence: 'high', sources: [TB, SITE, GREET, MENU, CONCEPT, R + 'B244955228/', R + 'B380824142/', R + 'B389034604/', R + 'B466500057/', R + 'B480963483/', R + 'B492087434/', R + 'B506883514/', R + 'B520083404/'] },
    cultural_comfort: { level: 'english', note: 'English menu online (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通室町東入占出山町310-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menu and Tabelog listing; most recent review December 2025.' },
    pin_source: `Tabelog ${TB} (35.004537, 135.758864); cross-checked: GSI 京都府京都市中京区占出山町310番地 (lot) 24m; 15m from kyoto_urayama_kyoshoku; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu (dine-in prices; takeout slightly lower), checked November 2026.', last_checked: TODAY, items: [
      it('梅にぎり', '', 'Nigiri set (ume)', '¥2,420', 'Lunch', 'ask', 'no', '', 'ume_nigiri'),
      it('特上にぎり', '', 'Nigiri set (tokujo)', '¥6,600', 'Lunch', 'ask', 'no', '', 'tokujo_nigiri'),
      it('京ちらし', '', 'Kyo-chirashi with no raw fish', '¥1,980', 'Lunch', 'ask', 'no', '', 'kyo_chirashi'),
      it('名物 磯巻', '', 'House speciality roll (名物)', '¥1,430', 'Kyoto sushi', 'ask', 'no', '', 'meibutsu_maki'),
      it('京好み おぼろ巻', '', 'Oboro roll, Kyoto style', '¥1,210', 'Kyoto sushi', 'ask', 'no', '', 'oboro_maki'),
      it('名代 鯖寿し（1人前 6切）', '', 'Mackerel bo-zushi, 6 pieces', '¥2,750', 'Kyoto sushi', 'ask', 'no', '', 'saba_zushi'),
      it('', '', 'Omakase, sushi and dishes (from)', '¥14,300', 'Dinner', 'ask', 'no', 'Sushi only or dishes only from ¥9,900.', 'omakase'),
    ] }, {
    cuisine: '京寿し (関西寿し) と割烹: 京都米や江州米の古米を昆布出汁で炊いたすし飯、京都の市場や敦賀・伊勢からの天然ものが中心、40種以上のネタを1個から (公式サイト)・昼のセット: にぎり2,420〜6,600円、ちらし2,090〜4,950円、生ものを使わない京ちらし1,980円、巻寿し1,650円から・名物: 磯巻1,430円、京好み おぼろ巻1,210円、名代 鯖寿し2,750円 (2人前の姿寿し5,500円)、箱寿し2,420円、小鯛雀寿し2,530円、穴子棒寿し1,760円・おまかせ: 寿司のみか一品料理のみ9,900円より、寿司と一品料理14,300円より (公式メニュー)',
    neighborhood: '四条烏丸、錦小路室町。四条駅から徒歩2分',
    gf_detail: '要確認。醤油で炊いたネタを使う京寿し、昆布出汁で炊くすし飯、割烹料理。グルテンの情報は公開されていない。おまかせは予約時にアレルギーを伝えられる (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。寿司の店で、すし飯は昆布出汁で炊くが、料理は魚が中心 (公式サイト)。',
    notes: '[寿司・錦小路室町、昭和11年からの京寿し] 昔ながらの京寿しを守る10席のカウンター。昆布出汁で炊いて味を含ませたすし飯に、名物の磯巻、甘いおぼろ巻、鯖の棒寿しなど、ほとんど持ち帰りもできる。昼のセットは2,000円ほどから、夜は握りと割烹料理のおまかせが9,900円から。1936年に細工寿司の名人が祇園で創業し、今は三代目。火曜休み。',
  });
}

// ================================================================ 中国饗膳 粋廉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26005971/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '13:30'], ['18:00', '19:00']);
  put({
    id: 'kyoto_chugoku_kyozen_suiren', name: '中国饗膳 粋廉 (China Kyosen Suiren)', category: 'OMNI',
    lat: 35.010866127860886, lng: 135.7443302404325, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shark-fin sauce over ramen or rice, spring rolls and dim sum; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a shark-fin specialist (2026 reviews).',
    hours_raw: 'Lunch 12:00–13:30 and dinner 18:00–19:00 (times as listed by Tabelog, likely the last entries); closed Monday and Tuesday; hours may change (Tabelog). Reservations essential: since a celebrity YouTube feature, lunch is booked a month or more ahead, though same-day lunch slots sometimes open (January–September 2026). A notice in the restroom asks first-time guests to wait about six months before booking again (July 2026). No service charge listed (Tabelog). Cards (JCB, AMEX, Diners), no e-money or QR (Tabelog). A calm dining room 238 m from Nijo Stn (Tabelog; 2026 reviews).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo — 238 m from Nijo Stn',
    cuisine: 'Chinese with shark fin at the centre (2026 reviews) · lunch: four courses, e.g. the second at ¥4,500 with three appetizers, spring rolls, rice, pickles and shark-fin ramen; the Ichinozen set with a clear soup, fresh spring rolls and shark-fin sauce, sizzling on a hot plate, over ramen (with a mini rice) or over rice, with rice refills; almond jelly; black vinegar on the table (January–September 2026) · dinner courses, about ¥10,000–15,000 per Tabelog’s budget',
    website: null, gmaps: gm('中国饗膳 粋廉 二条'), menu_url: TB,
    notes: "[Chinese · Nijo, sizzling shark-fin ramen] A quiet restaurant near Nijo Station known for one thing: a rich, slightly sweet shark-fin sauce poured sizzling over ramen or rice. The lunch sets (about ¥3,500–4,500) add a clear soup, crisp spring rolls and dim sum; dinners are full courses. A celebrity YouTube visit made it hard to book — plan a month ahead, and expect to wait about six months before a second booking. Closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Per 2026 reviews: a shark-fin specialist near Nijo; a long-time local regular says it has become very hard to book after celebrity coverage on YouTube and in a magazine, and that a restroom notice now asks first-time guests to wait about six months before rebooking (July 2026).',
      philosophy: null,
      specialty: 'Shark-fin sauce ramen; shark-fin sauce rice on a hot plate.',
      anecdotes: [
        { text: 'A July 2026 regular since the opening missed the warmer, homelier service of earlier years but still praised the food.', source: R + 'B251107041/' },
        { text: 'A February 2026 guest booked a month ahead for a Saturday and still missed the preferred date.', source: R + 'B523655353/' },
        { text: 'A July 2026 diner added black vinegar halfway through the shark-fin ramen to sharpen it.', source: R + 'B531843785/' },
      ],
      japanese_sources_summary: '食べログ: 中国饗膳 粋廉、中華料理、中京区西ノ京職司町76、二条駅から238m、水〜日 12:00〜13:30・18:00〜19:00、月・火定休、カード可 (JCB・AMEX・Diners)、電子マネー・QR 不可、予算は夜1万〜1万5千円、昼3千〜4千円。口コミ (2026年1〜9月、英語): フカヒレラーメン、鉄板で出すフカヒレあんかけご飯、春巻、スープ、ランチコース4種 (2番目4,500円)、ご飯のおかわり、黒酢、有名人の YouTube で予約困難に、1か月以上前の予約が必要、初回のあとは半年後の予約を、というトイレの貼り紙 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B251107041/', R + 'B520778523/', R + 'B523655353/', R + 'B525539481/', R + 'B526736041/', R + 'B528597321/', R + 'B529665345/', R + 'B530857760/', R + 'B531059364/', R + 'B531843785/', R + 'B535173685/', R + 'B536290152/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book well ahead; lunch sets need no Japanese beyond the basics.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京職司町76',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010866, 135.74433); cross-checked: GSI 京都府京都市中京区西ノ京職司町76番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520778523/', R + 'B536290152/', R + 'B523655353/'],
    price_note: 'From 2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Lunch course no. 2: three appetizers, spring rolls, rice, pickles and shark-fin ramen', '¥4,500', 'Lunch', 'no', 'no', 'January 2026.', 'lunch_course_2'),
      it('', '', 'Ichinozen lunch set with shark-fin sauce over ramen or rice', '', 'Lunch', 'ask', 'no', '', 'ichinozen'),
      it('', '', 'Shark-fin sauce fried rice on a hot plate', '', 'Lunch', 'ask', 'no', '', 'fukahire_rice'),
    ] }, {
    cuisine: 'フカヒレが中心の中華 (2026年の口コミ)・昼: コース4種、たとえば2番目は4,500円で前菜3種、春巻、ご飯、漬物、フカヒレラーメン。Ichinozen のセットはスープ、揚げたての春巻、鉄板でぐつぐつのフカヒレあんをラーメン (ミニご飯付き) かご飯で、ご飯はおかわり可。杏仁豆腐。卓上に黒酢 (2026年1〜9月)・夜はコース、食べログの予算では1万〜1万5千円ほど',
    neighborhood: '二条。二条駅から238m',
    gf_detail: '要確認。フカヒレあんのラーメンやご飯、春巻、点心。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。フカヒレの専門店 (2026年の口コミ)。',
    notes: '[中華・二条、鉄板のフカヒレラーメン] 二条駅近くの静かな店。名物は少し甘く濃厚なフカヒレあんを、熱々でラーメンやご飯にかけたもの。昼のセット (3,500〜4,500円ほど) にはスープ、揚げたての春巻、点心が付き、夜はコース。有名人の YouTube で予約困難に: 1か月前には予約を。2回目の予約は半年ほどあけるよう求められる。月火休み。',
  });
}

// ================================================================ ristorante DONO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041065/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://dono-kyoto.com/'; const MICHELIN = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/ristorante-dono';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3810181797047';
  const TU = day(['17:00', '20:00']); const WS = day(['12:00', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_ristorante_dono', name: 'ristorante DONO (リストランテ ドーノ)', category: 'MOM_AND_POP',
    lat: 35.011604367872536, lng: 135.78240578041326, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include fresh pasta (tagliolini), wood-fired bread, tarts and lasagna; no gluten information is published (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-led courses that also include fish, venison, wagyu and dairy; nothing vegan is offered on the published menus (official site).',
    hours_raw: 'Dinner 17:00–20:00, Tuesday–Saturday; lunch 12:00–14:00, Wednesday–Saturday; closed Sunday and Monday (official site). Fully booked by reservation only; tables are turned after two hours; a confirmation call two days ahead, without which the booking may be cancelled; cancellation 50% the day before, 100% on the day; private room for 6 at an extra charge (official site). Course prices include tax and service (税サ込). 24 seats; private hire for 20–50; non-smoking; cards, no e-money or QR (Tabelog). On the 2nd floor of the ボーパサージュ京都岡崎 building, looking out on the great torii of Heian Shrine, 365 m from Higashiyama Stn (Tabelog; 2026 reviews). Opened April 2024 (official site; Tabelog 18 April).',
    hours: { 1: TU, 2: WS, 3: WS, 4: WS, 5: WS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, facing the Heian Shrine torii — 365 m from Higashiyama Stn',
    cuisine: 'Italian built on vegetables and wild plants the chef gathers and grows each morning, with wood-fired cooking (Tabelog; official site) · Alta course ¥14,500; Bassa course, lunch only, ¥12,000; autumn matsutake course ¥35,000 (official site, tax and service included) · October 2026 menu, e.g. pinzimonio of mountain gifts, carrot with a river sauce, butternut squash, leaf minestra, matsutake tagliolini, Biwa trout with makomotake, venison with wild grape, budino and a chestnut Mont Blanc · also mentioned: a salad of 11 freshly picked vegetables, heshiko cream with wood-fired bread, bamboo-shoot lasagna, red bean with olive oil, house herbal tea (2026 reviews)',
    website: SITE, gmaps: gm('ristorante DONO 岡崎'), menu_url: SITE,
    notes: "[Italian · Okazaki, a forager's vegetable Italian by Heian Shrine] Big windows onto the Heian Shrine torii and the scent of a wood fire: chef Toshifumi Nakahigashi, son of the family behind 草喰 なかひがし, picks wild plants and vegetables every morning as the heart of Italian courses — leaf minestra, matsutake tagliolini, venison with wild grape, herbal tea to close. Lunch ¥12,000, dinner from ¥14,500, tax and service included. Michelin Green Star. Reservations only; closed Sunday and Monday.",
    chef_bio: { chef_name: 'Toshifumi Nakahigashi (中東 俊文)', roles: ['Chef-owner'], origin: 'Born 1982 and raised in Kyoto',
      background: 'Per the official site: born and raised in Kyoto in 1982; the father runs 草喰 なかひがし at Ginkakuji and a cousin runs 美山荘 in Hanase. Went to Italy alone at 18 and cooked mains at the two-star Ristorante Arnolfo in Tuscany, then trained at Villa Fiordaliso on Lake Garda (one star) and Alain Ducasse au Plaza Athénée in Paris (three stars). Back in Japan, head chef of Prinz in Ichijoji, then opening chef for The St. Regis Osaka from 2010; opened erba da nakahigashi in Nishi-Azabu, Tokyo, in 2016, renamed it 草片 cusavilla on 22 February 2021 with a stronger vegetable focus, and opened ristorante DONO in Okazaki, Kyoto, in April 2024. Listed with a Michelin Green Star in the Michelin Guide Kyoto–Osaka 2025 (official site). A May 2026 reviewer names the chef Toshifumi Nakahigashi, second son of the Nakahigashi family; the invoice registration is in the chef’s own name.',
      philosophy: 'Per Tabelog’s official introduction: "Dono" means sharing in Italian — to share nature’s gifts, gathered from the mountains and fields every morning, with guests.',
      specialty: 'Vegetable and wild-plant courses; matsutake tagliolini in autumn.',
      anecdotes: [
        { text: 'A February 2026 diner heard that the ingredients are gathered from the mountains every day and found the owner friendly and full of stories.', source: R + 'B522731414/' },
        { text: 'An August 2026 lunch party was seen off at the door by the chef.', source: R + 'B535996507/' },
        { text: 'An October 2026 guest who had often eaten at the father’s restaurant found the same love of vegetables here in Italian form.', source: R + 'B537847564/' },
      ],
      japanese_sources_summary: '公式サイト (dono-kyoto.com): ristorante DONO、シェフ 中東俊文、1982年京都生まれ、父は銀閣寺「草喰 なかひがし」、従兄は花背「美山荘」、18歳で単身イタリアへ、トスカーナの Arnolfo (二ツ星) でメイン担当、ガルダ湖畔の Villa Fiordaliso (一ツ星)、パリの Alain Ducasse au Plaza Athénée (三ツ星)、帰国後 一乗寺 Prinz 料理長、2010年 St. Regis Osaka 立ち上げシェフ、2016年 西麻布 erba da nakahigashi、2021年2月22日 草片 cusavilla に改称、2024年4月 京都岡崎に ristorante DONO。ミシュランガイド京都・大阪2025 グリーンスター。Alta コース14,500円、Bassa コース (ランチのみ) 12,000円、秋の松茸尽くし35,000円 (税サ込)、2時間制、2日前に確認の電話、キャンセル料 前日50%・当日100%、個室は使用料、全席禁煙・完全予約制、ディナー火〜土17:00〜20:00、ランチ水〜土12:00〜14:00、日月定休、左京区岡崎円勝寺町62 ボーパサージュ京都岡崎2階。2026年10月31日でショートコース (6,500円) 終了。食べログ: イタリアン・オーガニック・イノベーティブ、24席、2024年4月18日オープン、インボイス T3810181797047 (中東俊文)。口コミ (2026年1〜10月、英語): 平安神宮の大鳥居が見える、毎朝畑と山から、薪の香り、ハーブティー。',
      confidence: 'high', sources: [TB, SITE, MICHELIN, INV, R + 'B522731414/', R + 'B522844070/', R + 'B526220470/', R + 'B527619719/', R + 'B528203094/', R + 'B528657991/', R + 'B529500672/', R + 'B534873146/', R + 'B535705683/', R + 'B535996507/', R + 'B537762006/', R + 'B537847564/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations only; a confirmation call comes two days before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町62 ボーパサージュ京都岡崎 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 menu and news) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011604, 135.782406); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町62番地 (lot) 51m; 15m from kyoto_pizzeria_da_yuki; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official course prices (tax and service included), October 2026 menu.', last_checked: TODAY, items: [
      it('Altaコース', '', 'Alta course', '¥14,500', 'Course', 'ask', 'ask', '', 'alta'),
      it('Bassaコース', '', 'Bassa course (lunch only)', '¥12,000', 'Lunch', 'ask', 'ask', '', 'bassa'),
      it('秋の山の恵み松茸尽くしコース', '', 'Autumn matsutake course', '¥35,000', 'Course', 'ask', 'no', 'Seasonal.', 'matsutake'),
    ] }, {
    cuisine: 'シェフが毎朝山と畑で摘み育てる野菜と野草を軸にしたイタリアン、薪火の料理 (食べログ、公式サイト)・Alta コース14,500円、Bassa コース (ランチのみ) 12,000円、秋の松茸尽くしコース35,000円 (公式サイト、税サ込)・2026年10月の献立の例: 山からの恵みのピンツィモーニオ、人参と川の恵みのソース、バターナッツ、葉野菜のミネストラ、松茸のタリオリーニ、琵琶鱒とマコモタケ、鹿とエビヅル、ブディーノと栗のモンブラン・ほかに11種の摘みたて野菜のサラダ、へしこのクリームと薪焼きのパン、筍のラザニア、小豆とオリーブオイル、自家製ハーブティー (2026年の口コミ)',
    neighborhood: '岡崎、平安神宮の大鳥居の前。東山駅から365m',
    gf_detail: '要確認。生パスタ (タリオリーニ)、薪焼きのパン、タルト、ラザニアがコースに入る。グルテンの情報は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。野菜が中心のコースだが、魚、鹿、和牛、乳製品も使う。公開されているメニューにヴィーガンの用意はない (公式サイト)。',
    notes: '[イタリアン・岡崎、平安神宮そばの野菜と野草のイタリアン] 大きな窓の向こうに平安神宮の大鳥居、店内には薪の香り。草喰 なかひがしの家に生まれたシェフ中東俊文が毎朝野草や野菜を摘み、それを軸にイタリアンのコースを組む: 葉野菜のミネストラ、松茸のタリオリーニ、鹿とエビヅル、締めにハーブティー。昼12,000円、夜14,500円から、税サ込。ミシュラングリーンスター。完全予約制、日月休み。',
  });
}

save();
