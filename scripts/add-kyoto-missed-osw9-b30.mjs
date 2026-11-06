// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 30.
//   + オステリア・バスティーユ Osteria Bastille (Italian-French bistro of chef 山本 知 near Shijo-Karasuma; since 2003) [core]
//   + GRIDDLE FORCE 逸楽 Itsuraku (teppanyaki steak counter with a hidden private room near Karasuma; since 2015)   [core]
//   + 御幸町ささき Goko Machi Sasaki (Edo-style sesame-oil tempura izakaya near Kyoto City Hall; since 2024)        [notable]
//   + 酒処 四方 Sake Dokoro Shikata (machiya izakaya near Karasuma Oike, dote-ni and clay-pot rice)                [notable]
//   Same-name counts first (same brand or operator): バスティーユ 1; 逸楽 — the official site links one other
//   concept, 居酒屋いつらく (kushiyaki), neither in data, so a small group and this one drafted; 御幸町ささき 1 (no
//   source ties it to 祇園 さゝ木 or しゅん逢 紗々木); 酒処 四方 1 — no source found tying it to 四方食店
//   (kyoto_shikata_shokuten), so drafted and flagged.
//   Taken in queue order on 2026-11-05: core 26002067, 26017751; notable 26041505, 26034521. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: Bastille "なし" (a ¥440 seat-and-bread charge for
//   table-only bookings is listed separately); 逸楽 「席のみ予約のお客様には、お通し代として、500円頂いております。」;
//   ささき and 四方 have no section.
//   Pins: 逸楽 shares 一連社町298-2 with kyoto_sake_hall_masuya (5.6 m at the Tabelog point), so moved ~3.4 m north
//   to the GSI lot latitude (8.9 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ オステリア・バスティーユ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002067/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://bastille.jp/';
  const L = ['11:30', '15:00'];
  put({
    id: 'kyoto_osteria_bastille', name: 'オステリア・バスティーユ (Osteria Bastille)', category: 'MOM_AND_POP',
    lat: 35.006254, lng: 135.760787, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, bread and breaded dishes sit beside steak, game, carpaccio and salads; no gluten information (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the official site stresses organic vegetables from Kyoto and Shiga growers, but most dishes are meat or fish (Tabelog; official site; 2025–26 reviews).',
    hours_raw: 'Thu and Sun 11:30–15:00 (last order 14:00); Fri, Sat and holidays 11:30–15:00 and 18:00–22:00 (last order 21:00); closed Mon–Wed for dining, with catering and large take-away orders (Tabelog; official site, January 2025). Bookings advised — "Reservations are necessary" (October 2025 review); lunch courses can be booked, other lunches by phone from 10:00 (February 2026 review). Service charge: none — Tabelog\'s Japanese original says "なし"; a ¥440 seat-and-bread charge applies to table-only bookings (Tabelog). Lunch is cash only; cards (VISA, Master, JCB, AMEX) and PayPay at dinner (Tabelog). 22 seats, about five tables (March 2022 review); children welcome; non-smoking (Tabelog). 5 min from Shijo or Karasuma Stn (Tabelog).',
    hours: { 3: day(L), 4: day(L, ['18:00', '22:00']), 5: day(L, ['18:00', '22:00']), 6: day(L) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of Karasuma near Shijo-Karasuma — 5 min from Shijo / Karasuma Stn',
    cuisine: 'Italian × French bistro cooking: assorted appetizers, carpaccio of amberjack or sea bass, sakura-shrimp or anchovy pasta, warm gizzard-and-bacon salad, beef steak, venison braised in red wine, braised pork; lunch daily special ¥1,800 and pasta set ¥2,900 (August 2026); lunch course with soup, pasta, venison and three desserts (November 2025) (2025–26 reviews) · organic vegetables, catering and bento (official site)',
    website: SITE, gmaps: gm('オステリア・バスティーユ 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian-French bistro · near Shijo-Karasuma] A cosy, antique-filled osteria of about 22 years, mixing Italian and French: carpaccio, sakura-shrimp pasta, game such as venison braised in red wine, and generous lunch sets around ¥1,800–2,900. Lunch Thu–Sun, dinner Fri–Sat only; book ahead, and bring cash for lunch.",
    chef_bio: { chef_name: '山本 知 (Satoru Yamamoto)', roles: ['Chef'], origin: null,
      background: 'Per the official site: the chef draws on training abroad to take "the best of French and Italian"; the name comes from the Bastille quarter of Paris; the 22nd anniversary was marked in December 2025; in recent years the shop has added catering, markets and outdoor events. A long-time regular describes it as "run by a lovely couple" (August 2025 review), while the official site advertises for part-time staff.',
      philosophy: 'A "上質な日常" (a fine everyday) in a European room of antique furniture; safe food with clear origins, buying organic vegetables directly from Kyoto and Shiga growers (official site).',
      specialty: 'Italian-French bistro dishes; game in season.',
      anecdotes: [
        { text: 'A diner of nearly 20 years called it a warm restaurant whose gentle flavours reflect the owners\' kind personalities — August 2025.', source: R + 'B389721126/' },
        { text: 'In October 2025 a couple had the season\'s first venison, from Shiga, and found it remarkably tender.', source: R + 'B516132414/' },
        { text: 'Calling on a snowy February 2026 morning, two friends got a same-day table and said the meal "blew our taste buds away".', source: R + 'B522809960/' },
        { text: 'A September 2026 pair noted the pasta came split onto two plates unasked.', source: R + 'B534975120/' },
      ],
      japanese_sources_summary: '公式サイト: オステリア バスティーユ、中京区烏丸蛸薬師東入ル一蓮社町310 メゾン高見1F、シェフ 山本 知 (SATORU YAMAMOTO)、海外での修行を生かしたフレンチとイタリアンのいいとこ取り、京都・滋賀の生産者から仕入れる有機野菜、アンティーク家具の空間、ケータリング・ランチボックス・ネットショップ、月火水休み (ケータリング対応)・木日ランチのみ・金土ランチとディナー (2025年1月)、2025年12月に22周年、アルバイト募集中。食べログ (店舗会員): イタリアン・フレンチ・ダイニングバー、22席、サービス料なし、席のみ予約は席料・パン代440円、ランチは現金のみ。口コミ (2025年7月〜2026年9月、英語): 夫婦で営む温かい店、前菜盛り合わせ、カルパッチョ、桜海老のパスタ、砂肝とベーコンのサラダ、鹿肉、日替わり1,800円、パスタセット2,900円、予約推奨。',
      confidence: 'medium', sources: [TB, SITE, R + 'B389721126/', R + 'B422424829/', R + 'B505895977/', R + 'B515327375/', R + 'B516132414/', R + 'B516437179/', R + 'B522809960/', R + 'B523971369/', R + 'B524999291/', R + 'B534975120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bistro; book ahead; cash only at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師烏丸東入ル北側一蓮社町310-101 メゾン高見 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site (news dated April 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006254, 135.760787); cross-checked: GSI 京都府京都市中京区一蓮社町310番地 (lot) 41m; 6.7 m from kyr_mensho_takamatsu_honten; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B422424829/'],
    price_note: 'No menu read; lunch prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch daily special (e.g. pork loin braised in wine)', '¥1,800', 'Lunch', 'ask', 'no', 'August 2026 review.', 'lunch_special'),
      it('', '', 'Lunch Menu D: pasta set with appetizer', '¥2,900', 'Lunch', 'no', 'ask', 'August 2026 review; mizuna and shrimp pasta that day.', 'pasta_set'),
    ] }, {
    cuisine: 'イタリアン×フレンチのビストロ料理: 前菜盛り合わせ、カンパチやスズキのカルパッチョ、桜海老やアンチョビのパスタ、砂肝とベーコンの温かいサラダ、牛ステーキ、鹿肉の赤ワイン煮、豚の煮込み。ランチの日替わり1,800円、パスタセット2,900円 (2026年8月)、スープ、パスタ、鹿肉、デザート3種のランチコース (2025年11月) (2025〜26年の口コミ)・有機野菜、ケータリングとお弁当 (公式サイト)',
    neighborhood: '烏丸の東、蛸薬師。四条駅・烏丸駅から徒歩5分',
    gf_detail: '要確認。パスタ、パン、揚げ物と、ステーキ、ジビエ、カルパッチョ、サラダ。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、公式サイトは京都・滋賀の生産者の有機野菜を強調するが、料理の多くは肉か魚 (食べログ、公式サイト、2025〜26年の口コミ)。',
    notes: '[イタリアンとフレンチのビストロ・四条烏丸近くの蛸薬師] アンティークに囲まれた22年ほど続く居心地のよいオステリア。イタリアンとフレンチを合わせ、カルパッチョ、桜海老のパスタ、鹿肉の赤ワイン煮などのジビエ、量のある1,800〜2,900円ほどのランチ。ランチは木〜日、ディナーは金土のみ。予約がおすすめで、ランチは現金のみ。',
  });
}

// ================================================================ GRIDDLE FORCE 逸楽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017751/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-itsuraku.com/you_itsuraku.html';
  const H = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_griddle_force_itsuraku', name: 'GRIDDLE FORCE 逸楽 (GRIDDLE FORCE Itsuraku)', category: 'OMNI',
    lat: 35.006332, lng: 135.760360, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak with sauces, a curry to finish, croquettes and fried sets at lunch; no gluten information (Tabelog; official site; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a teppanyaki steak restaurant (Tabelog).',
    hours_raw: 'Tue–Sun 11:30–14:00 (last order 13:30; lunch ends when sold out) and 18:00–22:00 (last orders food 21:00, drinks 21:30); closed Monday (Tabelog). The official site gives dinner as 17:30–23:00 (last order 22:00). Bookings taken (Tabelog). Charge: Tabelog\'s Japanese original says 「席のみ予約のお客様には、お通し代として、500円頂いております。」 — a ¥500 appetizer charge for seat-only bookings. Lunch is cash only (August 2025 and October 2026 reviews); cards (VISA, Master, JCB, AMEX, Diners) and PayPay, Rakuten Pay, au PAY per Tabelog. 16 seats: 10 at the counter and a hidden private room for six reached by a side passage and an intercom at the back door (Tabelog; official site gives 12 + 6). Children at lunch; at dinner only in the private room (Tabelog). Free Wi-Fi; non-smoking. 5 min from Karasuma or Shijo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of Karasuma near Shijo-Karasuma — 5 min from Karasuma / Shijo Stn',
    cuisine: 'Teppanyaki steak counter: Kyoto beef fillet and sirloin, golden-eye snapper carpaccio, lamb tenderloin, seasonal Kyoto vegetables from the central market, the manager\'s mini curry instead of garlic rice to finish; 30–40 wines (Tabelog; official site) · lunch steak set in three sizes, medium (225 g) ¥1,400 (September 2026); Friday hamburg steak; dinner courses with lobster and wagyu (2025–26 reviews)',
    website: SITE, gmaps: gm('GRIDDLE FORCE 逸楽 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki steak · near Shijo-Karasuma] A ten-seat teppan counter with a secret private room behind, where the chef grills Kyoto beef in front of you and finishes with a small curry instead of garlic rice. The lunch steak set (about ¥1,400, cash only) is the draw; dinner courses with lobster and wagyu run ¥8,000–10,000. Closed Monday.",
    chef_bio: { chef_name: '吉田', roles: ['Manager (店長), maker of the finishing curry'], origin: null,
      background: 'Opened 19 November 2015 (Tabelog). The official site also links a sister izakaya, 居酒屋いつらく (kushiyaki).',
      philosophy: 'Kyoto beef fillet and sirloin, the day\'s best from a trusted Kyoto supplier, paired with wine (official site).',
      specialty: 'Teppan steak; 吉田\'s mini curry to finish.',
      anecdotes: [
        { text: 'An October 2025 lunch guest watched the chef grill lean beef on the teppan and cut it into bite-size pieces, at about ¥1,200.', source: R + 'B514950572/' },
        { text: 'A May 2026 diner loved the course and the private room but wished the staff were friendlier and the coffee deeper.', source: R + 'B527918333/' },
        { text: 'An October 2026 lunch guest was told to move to the end seat after choosing a seat, and that cards were not taken at lunch.', source: R + 'B536986097/' },
        { text: 'In October 2026 a guest left food and drinks to the chef and staff for a reunion dinner ending in the house curry.', source: R + 'B538282035/' },
      ],
      japanese_sources_summary: '公式サイト: GRIDDLE FORCE.逸楽、中京区一連社町298-2 染匠会館1F、京都牛のフィレとサーロイン、店長の吉田が作る〆のミニカレー、グラスワイン赤白各3種・ボトル20種以上、店内奥の完全個室 (6名、裏口のインターフォンから)、ランチ 11:30〜14:00、ディナー 17:30〜23:00 (L.O. 22:00)、月曜休み、18席、姉妹店の居酒屋いつらく。食べログ (店舗会員): 鉄板焼き・ステーキ、2015年11月19日オープン、火〜日 11:30〜14:00・18:00〜22:00、16席、席のみ予約はお通し代500円、金目鯛のカルパッチョ、仔羊フィレ。口コミ (2025年8月〜2026年10月、英語): ステーキランチ大中小、中225g 1,400円、ランチは現金のみ、ロブスターと和牛のコース。',
      confidence: 'medium', sources: [TB, SITE, 'http://www.kyoto-itsuraku.com/', R + 'B512305359/', R + 'B514950572/', R + 'B516780100/', R + 'B516911616/', R + 'B520678983/', R + 'B527918333/', R + 'B536017822/', R + 'B536986097/', R + 'B538282035/', R + 'B538655335/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating; cash only at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区一連社町298-2 YJK蛸薬師BLD',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006302, 135.760360) shares 一連社町298-2 with kyoto_sake_hall_masuya (5.6 m), so moved ~3.4 m north to 35.006332 (8.9 m from it); cross-checked: GSI 京都府京都市中京区一蓮社町298番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536017822/', R + 'B520678983/'],
    price_note: 'No menu read; lunch price from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Steak lunch set, medium (225 g), with rice and soup', '¥1,400', 'Lunch', 'ask', 'no', 'Large, medium and small sizes; September 2026 and August 2025 reviews.', 'steak_lunch'),
    ] }, {
    cuisine: '鉄板焼きステーキのカウンター: 京都牛のフィレとサーロイン、金目鯛のカルパッチョ、仔羊フィレ、中央市場の京野菜、〆はガーリックライスではなく店長のミニカレー。ワイン30〜40種 (食べログ、公式サイト)・ランチのステーキ定食は大中小、中 (225g) 1,400円 (2026年9月)、金曜はハンバーグ、ロブスターと和牛のディナーコース (2025〜26年の口コミ)',
    neighborhood: '烏丸の東、蛸薬師。烏丸駅・四条駅から徒歩5分',
    gf_detail: '要確認。たれのある鉄板ステーキ、〆のカレー、ランチのコロッケやフライ。グルテンの情報はない (食べログ、公式サイト、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鉄板焼きステーキの店 (食べログ)。',
    notes: '[鉄板焼きステーキ・四条烏丸近くの蛸薬師] 10席の鉄板カウンターと奥の隠れ家個室。目の前で京都牛を焼き、〆はガーリックライスではなく小さなカレー。お目当てはランチのステーキ定食 (1,400円ほど、現金のみ)。ロブスターと和牛のディナーコースは8千〜1万円ほど。月曜休み。',
  });
}

// ================================================================ 御幸町ささき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041505/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_goko_machi_sasaki', name: '御幸町ささき (Goko Machi Sasaki)', category: 'OMNI',
    lat: 35.012859, lng: 135.766387, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura izakaya; the batter is wheat. Sashimi and simmered dishes exist, but fryer and broth are shared (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and meat dishes; vegetable tempura is served with dashi-based broth (2026 reviews).',
    hours_raw: '15:00–22:00; closed Wednesday (Tabelog). Bookings taken online; parties of five or more by phone. "If you are unable to order from the Japanese menu, we will accommodate you with a course menu" (Tabelog). 16 seats: 8 at the counter, 8 at tables; children and strollers welcome; non-smoking, smoking area outside; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Goko Machi Street, in the former home of Umaimonya Issho (February 2026 review); 7 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Goko Machi Street near Kyoto City Hall — 7 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Edo-style tempura fried in sesame oil, rare in Kansai, with izakaya dishes: sashimi platters, obanzai, salads, fried chicken (Tabelog) · oyster tamayose ¥770, duck roast ¥1,100, rare-fried yellowtail cutlet ¥1,540 (February 2026); clam tempura in the shell with broth, Kamo eggplant and manganji pepper tempura, shrimp-and-celery spring rolls, shumai made to order; 15–20 sakes (2026 reviews; Tabelog)',
    website: null, gmaps: gm('御幸町ささき'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura izakaya · Goko Machi Street near Kyoto City Hall] A calm counter-and-table izakaya, opened 2024, frying Edo-style tempura in sesame oil to order — clams in the shell with broth, Kamo eggplant, lotus root — alongside sashimi, duck roast and good sake. Opens at 15:00 for an early drink; about ¥6,000–8,000. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Opened 27 June 2024 (Tabelog), in the former home of Umaimonya Issho (February 2026 review).',
      philosophy: 'Edo-style tempura in sesame oil that brings out the ingredients, with seasonal dishes from the morning market (Tabelog).',
      specialty: 'Sesame-oil Edo-style tempura.',
      anecdotes: [
        { text: 'A June 2026 diner found some drinks and dishes unavailable and the busy owner a bit unfriendly.', source: R + 'B530630432/' },
        { text: 'An August 2026 guest arriving at 16:30 was first in, followed by two older local couples; the ayu simmered with sansho sold out as the couples ordered it.', source: R + 'B534279878/' },
        { text: 'In October 2026 the master cooked alone; a pair ordered the clam tempura twice, and a staff member who came in later served a foreign family in fluent English.', source: R + 'B538410760/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 御幸町ささき、居酒屋・天ぷら、中京区御幸町通押小路上る山本町427、京都市役所前駅から徒歩7分、15:00〜22:00、水曜休み、2024年6月27日オープン、16席 (カウンター8・テーブル8)、子供可、禁煙 (店外に喫煙所)、カード可、関西では珍しい胡麻油の江戸前天ぷら、市場の旬の一品、刺身、おばんざい、日本酒15〜20種、日本語の品書きで注文できない方にはコースで対応。口コミ (2026年2〜10月、英語): 牡蠣の Tamayose 770円、鴨ロース1,100円、ぶりのレアカツ1,540円、蛤の天ぷら、なす、唐辛子、海老とセロリの春巻き、焼売、店主が一人で揚げる、英語の堪能なスタッフ、店主が忙しく無愛想という声。',
      confidence: 'medium', sources: [TB, R + 'B523033563/', R + 'B530034208/', R + 'B530630432/', R + 'B531599086/', R + 'B531726952/', R + 'B533141465/', R + 'B533777044/', R + 'B534279878/', R + 'B535621009/', R + 'B538410760/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Japanese menu; a course is offered to guests who cannot order from it (Tabelog); an English-speaking staff member was seen in October 2026.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通押小路上る山本町427',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012859, 135.766387); cross-checked: GSI 京都府京都市中京区山本町427番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523033563/'],
    price_note: 'No menu read; prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', 'kaki no tamayose', 'Oyster tamayose', '¥770', 'Dishes', 'ask', 'no', 'February 2026 review.', 'kaki_tamayose'),
      it('', '', 'Duck roast', '¥1,100', 'Dishes', 'ask', 'no', 'February 2026 review.', 'kamo_roast'),
      it('', '', 'Rare-fried yellowtail cutlet', '¥1,540', 'Dishes', 'no', 'no', 'February 2026 review.', 'buri_rare_katsu'),
    ] }, {
    cuisine: '関西では珍しい胡麻油の江戸前天ぷらと居酒屋の料理: 刺身の盛り合わせ、おばんざい、サラダ、唐揚げ (食べログ)・牡蠣の Tamayose 770円、鴨ロース1,100円、ぶりのレアカツ1,540円 (2026年2月)、殻付きの蛤の天ぷらに出汁、なすや唐辛子の天ぷら、海老とセロリの春巻き、注文後に包む焼売。日本酒15〜20種 (2026年の口コミ、食べログ)',
    neighborhood: '押小路の北の御幸町通。京都市役所前駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。天ぷらの居酒屋で、衣は小麦。刺身や煮物もあるが、揚げ油や出汁は共通 (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚や肉の料理が中心で、野菜の天ぷらも出汁で出る (2026年の口コミ)。',
    notes: '[天ぷらの居酒屋・京都市役所近くの御幸町] 2024年開店の、カウンターとテーブルの落ち着いた居酒屋。胡麻油の江戸前天ぷらを注文ごとに揚げる (殻付きの蛤に出汁、なす、蓮根)。刺身や鴨ロース、日本酒も。15時からの早い一杯に。6千〜8千円ほど。水曜休み。',
  });
}

// ================================================================ 酒処 四方
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034521/'; const R = TB + 'dtlrvwlst/';
  const HS = 'https://hitosara.com/0031422416/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sake_dokoro_shikata', name: '酒処 四方 (Sake Dokoro Shikata)', category: 'OMNI',
    lat: 35.008456, lng: 135.758034, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dote-ni and oden in soy-based broth, sashimi, clay-pot rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tendon dote-ni, fish and dashi dishes (2026 reviews).',
    hours_raw: '17:00–23:00 daily; hours may change, check before visiting (Tabelog). Hitosara gives 17:00–24:00 with irregular holidays. Bookings taken (Tabelog). Counter on the ground floor, tables upstairs with a dumbwaiter by the stairs (August and November 2026 reviews); children welcome; non-smoking; cards, e-money and PayPay (Tabelog). In a traditional Kyoto machiya (October 2026 review); about 300 m from Karasuma Oike Stn (Tabelog; October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South-west of Karasuma Oike — 5 min from Karasuma Oike Stn',
    cuisine: 'Creative izakaya in a machiya: the signature dote-ni (beef-tendon stew, also as a rice bowl), oden, motsu-ni, negitoro, potato salad with shime-saba, chicken-thigh tataki, white tofu with prosciutto, figs with white-sesame dressing and Shine Muscat, mascarpone and figs; clay-pot rice — leftovers wrapped as onigiri to take home; a seasonal menu, half portions for solo diners (2026 reviews)',
    website: null, gmaps: gm('酒処 四方 京都'), menu_url: null,
    notes: "[Machiya izakaya · near Karasuma Oike] A stylish townhouse izakaya, counter downstairs and tables up: the signature dote-ni, oden, seasonal small plates and a clay-pot rice whose leftovers come back as onigiri to take away. About ¥3,000–5,000 with drinks; portions suit two, and staff offer solo-size helpings. Daily from 17:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe friendly, attentive staff in a traditional Kyoto machiya, popular with a younger crowd (2026 reviews).',
      philosophy: null, specialty: 'Dote-ni; clay-pot rice.',
      anecdotes: [
        { text: 'An August 2026 first-timer was told up front that portions serve about two, which helped with ordering.', source: R + 'B532942029/' },
        { text: 'An October 2026 diner was disappointed by the lack of Japanese sake on the menu, while an October 2026 traveller praised the drinks list.', source: R + 'B538214868/' },
        { text: 'A November 2026 party found the ikura dishes sold out and the dumbwaiter beside the upstairs table noisy, but loved the dote and oden.', source: R + 'B538567194/' },
        { text: 'A salt-averse October 2026 diner found the oden and doteyaki strong in soy but delicious.', source: R + 'B537311178/' },
      ],
      japanese_sources_summary: '食べログ: 酒処 四方、居酒屋、中京区烏帽子屋町477、烏丸御池駅から302m、毎日17:00〜23:00 (変更あり)、予約可、禁煙、子供可、カード・電子マネー・PayPay 可。ヒトサラ: 17:00〜24:00、不定休。口コミ (2026年6〜11月、英語): 町家の居酒屋、1階カウンターと2階テーブル、名物の土手煮 (土手煮丼)、おでん、もつ煮、ねぎとろ、ポテサラとしめ鯖、鶏ももたたき、無花果の白ごまの和え物、土鍋ご飯の残りはおにぎりにして持ち帰り可、2人前ほどの量でおひとり様向けの量にも、日本酒がないという声と飲み物の品揃えを褒める声、2階の運搬機の音。四方食店 (姥柳町) との関係を示す資料は見つからなかった。',
      confidence: 'medium', sources: [TB, HS, R + 'B530623584/', R + 'B532942029/', R + 'B533610577/', R + 'B534114869/', R + 'B536511156/', R + 'B537283401/', R + 'B537311178/', R + 'B538214868/', R + 'B538449398/', R + 'B538567194/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff offer solo-size portions; book ahead at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏帽子屋町477',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008456, 135.758034); cross-checked: GSI 京都府京都市中京区烏帽子屋町477番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538449398/'],
    price_note: 'No menu or item prices read; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('土手煮', 'dote-ni', 'Dote-ni (beef-tendon stew), the signature', '', 'Dishes', 'ask', 'no', '2026 reviews.', 'doteni'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'ask', 'Leftovers made into onigiri to take home; 2026 reviews.', 'donabe_gohan'),
    ] }, {
    cuisine: '町家の創作居酒屋: 名物の土手煮 (丼にも)、おでん、もつ煮、ねぎとろ、ポテサラとしめ鯖、鶏もものたたき、白豆腐と生ハム、無花果とシャインマスカットの白ごまの和え物、マスカルポーネと無花果。土鍋ご飯は残りをおにぎりにして持ち帰り可。季節で変わる品書き、ひとり向けの量にも (2026年の口コミ)',
    neighborhood: '烏丸御池の南西。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。醤油の効いた土手煮やおでん、刺身、土鍋ご飯。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじの土手煮、魚や出汁の料理 (2026年の口コミ)。',
    notes: '[町家の居酒屋・烏丸御池近く] 1階カウンター、2階テーブルのおしゃれな町家の居酒屋。名物の土手煮、おでん、季節の小皿、土鍋ご飯 (残りはおにぎりにして持ち帰り)。飲んで3千〜5千円ほど。量は2人前ほどで、ひとり向けの量にもしてくれる。毎日17時から。',
  });
}

save();
