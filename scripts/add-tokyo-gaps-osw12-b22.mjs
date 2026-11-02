// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 22.
//   + Cafe＆Bar Cababre. (all-day café and bar in the Sotetsu Fresa Inn, Ueno-Hirokoji; opened December 2022)
//   + 鳥恵 上野広小路店 Torie Ueno Hirokoji (course yakitori, Tabelog Yakitori 100 2018–2025; three nearby shops)
//   + 関西風手打うどん いらっしゃい Irasshai (8-seat Kansai-style handmade udon near Iriya; Tabelog Udon 100 2020/2024)
//   + 寿し処 川 Sushi Dokoro Sen (Edomae sushi in Yushima, open to 2 am)
// Skipped (see skip()): 成吉思汗だるま 上野御徒町店 13296541, 天丼てんや 御徒町店 13053957, から揚げの天才 うぐいす谷店 13249478.
// Undecided (no put, no skip): あさが家, まつり屋, ビアバックス (as before); 鳥椿 鶯谷朝顔通り店 13132192 (branch suffix,
//   no other shop or count found); ルンビニ フード カフェ 東京鶯谷店 13176941 (a Hokkaido listing exists too; no count);
//   サルガム 不忍池前店 13114902 (branch suffix, no count); マ・シェリ 13061476 (a 2022 review calls the 1F bar "a separate
//   branch of the same chain"; no count).
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Torie: 湯島本店, 上野広小路店 and
//   上野黒門店 nearby (Retty/ikyu summaries); a September 2026 reviewer instead calls Ikebukuro the main branch — at most four,
//   none in data → drafted; flag. Cababre, Irasshai, Sen: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13296541', 'chain: 成吉思汗だるま runs six shops around Susukino, Sapporo (gendai.media / johnny88 summaries) plus 上野御徒町店 (2024) and 東京本店 (July 2026, 日本食糧新聞) — 5 or more.');
skip('13053957', 'national chain: 天丼てんや (Tenya); this is the 御徒町店.');
skip('13249478', 'national chain: から揚げの天才 (Karaage no Tensai); this is the うぐいす谷店.');

// ================================================================ Cafe＆Bar Cababre.
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13280539/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://cababre.jp/';
  const D = day(['11:00', '22:00']); const F = day(['11:00', '23:00']);
  put({
    id: 'tokyo_cafe_bar_cababre_ueno', name: 'Cafe＆Bar Cababre.', category: 'OMNI',
    lat: 35.707954, lng: 139.772537, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: pasta, pizza, bread and cakes make up most of the menu; the curry and Basque cheesecake are not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream pastas, cheese pizzas, chicken curry, cheesecake; no vegan dish is named.',
    hours_raw: 'Sun–Thu and holidays 11:00–22:00 (last order 21:30); Fri–Sat 11:00–23:00 (food last order 22:00, drinks 22:30); lunch 11:00–15:00, café 15:00–17:00, bar from 17:00; closed over New Year (Tabelog). Reservations taken, online too; a 90-minute limit when busy (July 2026). Weekday lunch salad-and-drink sets. 15 seats (6 at the counter, 10 at tables); some tables have power outlets. Non-smoking. Cards, e-money and QR. Free Wi-Fi (weak, per a September 2026 diner). Children welcome; strollers OK. Surplus bread on TABETE (September 2026). Opened 21 December 2022.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: F, 5: F, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 1-chōme, ground floor of 相鉄フレッサイン上野御徒町 — 1 min from Ueno-Hirokoji; 2 min from Ueno-Okachimachi; 3 min from JR Okachimachi North Exit',
    cuisine: 'Café by day and bar by night with a free-form menu (website; Tabelog) · menu (Tabelog, October 2026): chicken curry ¥1,300; pastas — Neapolitan, bacon and spinach lemon cream ¥1,300, cod-roe cream ¥1,400, shrimp and spinach tomato cream, pancetta arrabbiata ¥1,450, carbonara, pescatore ¥1,500; pizzas — Margherita ¥1,300, Bismarck ¥1,600; weekday lunch add-ons: salad and drink from ¥400, with dessert from ¥800 · cakes: Basque cheesecake, sweet-potato Basque cheesecake, carrot cake · coffee from Sarutahiko beans; wine, whisky, cocktails',
    website: WS, gmaps: gm('Cafe&Bar Cababre 上野1-20-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Café & bar · Ueno-Hirokoji, an all-day hideaway in a hotel lobby] A calm grey-toned café and bar on the ground floor of the Sotetsu Fresa Inn by Ueno-Hirokoji Station, open from 11:00 until 22:00 (23:00 at weekends). Lunch is pasta, pizza or a surprisingly spicy curry (¥1,300–1,600), afternoons are for Basque cheesecake and Sarutahiko coffee, and evenings bring wine and cocktails. Book online if you want a table — it fills at snack time and busy seats have a 90-minute limit; some tables have power outlets. Reviewers like it as a quiet place to meet in busy Ueno; one found the cream on the cheesecake heavy and the Wi-Fi weak.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2022 (Tabelog)', background: 'Tabelog official listing; the website describes a relaxing café and bar in busy Ueno with a menu not bound by form. No source names the operator.', philosophy: 'Website: 「カタチに捉われないメニュー造り」 — a menu not bound by convention.', specialty: 'Pasta; Basque cheesecake.',
      anecdotes: [
        { text: '"It has a layer of sweet potato paste at the bottom, making it sweet and rich like a sweet potato dessert!" — October 2026, sweet-potato Basque cheesecake.', source: R + 'B526978998/' },
        { text: '"The dry curry was surprisingly spicy and had an authentic flavor, which was delicious." — July 2026.', source: R + 'B531594251/' },
        { text: '"It was Saturday snack time, so the place was packed, and there was a 90-minute limit, which made it hard to relax." — July 2026.', source: R + 'B531594251/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): Cafe＆Bar Cababre.、上野1-20-8 相鉄フレッサイン上野御徒町 1F、上野広小路駅から徒歩1分、上野御徒町駅から2分、JR御徒町駅北口から3分、日〜木・祝11:00〜22:00 (L.O.21:30)、金土11:00〜23:00、ランチ11:00〜15:00、カフェ15:00〜17:00、バー17:00から、年末年始休み、予約可、15席 (カウンター6、テーブル10)、禁煙、カード・電子マネー・QR可、Wi-Fi、子ども可、2022年12月21日オープン。メニュー (2026年10月): チキンカレー1,300円、ナポリタン1,300円、明太子クリーム1,400円、カルボナーラ1,500円、マルゲリータ1,300円、平日ランチのサラダとドリンクのセット400円から。公式サイト: 賑やかな上野でくつろげる空間、カタチに捉われないメニュー。口コミ (2026年7〜10月): さつまいものバスクチーズケーキ、辛めのドライカレー、猿田彦の豆のコーヒー、混雑時は90分制、電源のある席、クリームが重い、Wi-Fiが弱いという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B524448008/', R + 'B526978998/', R + 'B531594251/', R + 'B532648300/', R + 'B533412984/', R + 'B535593163/', R + 'B535670107/', R + 'B536695826/', R + 'B537195677/', R + 'B537605268/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Digital menu; online booking; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野1-20-8 相鉄フレッサイン上野御徒町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野一丁目20番8号 (go) 16m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Chicken curry', '¥1,300', 'Lunch', 'ask', 'no', 'Tabelog menu, October 2026.', 'chicken_curry'),
      it('', '', 'Bacon and spinach lemon cream pasta', '¥1,300', 'Pasta', 'no', 'no', 'Tabelog menu, October 2026.', 'lemon_cream_pasta'),
      it('', '', 'Carbonara', '¥1,500', 'Pasta', 'no', 'no', 'Tabelog menu, October 2026.', 'carbonara'),
      it('', '', 'Margherita pizza', '¥1,300', 'Pizza', 'no', 'no', 'Tabelog menu, October 2026.', 'margherita'),
      it('', '', 'Weekday lunch add-on: salad and drink', 'from ¥400', 'Lunch', 'ask', 'ask', 'Tabelog menu, October 2026.', 'salad_drink_set'),
    ] }, {
    cuisine: 'カタチに捉われないメニューの、昼はカフェ、夜はバー (公式サイト、食べログ)・メニュー (食べログ、2026年10月): チキンカレー1,300円、パスタはナポリタン、ベーコンとほうれん草のレモンクリーム1,300円、明太子クリーム1,400円、海老とほうれん草のトマトクリーム、パンチェッタのアラビアータ1,450円、カルボナーラ、ペスカトーレ1,500円、ピザはマルゲリータ1,300円、ビスマルク1,600円、平日ランチはサラダとドリンク400円から、デザート付き800円から・ケーキ: バスクチーズケーキ、さつまいものバスクチーズケーキ、キャロットケーキ・猿田彦の豆のコーヒー、ワイン、ウイスキー、カクテル',
    neighborhood: '上野一丁目、相鉄フレッサイン上野御徒町の1階。上野広小路駅から徒歩1分、上野御徒町駅から2分、JR御徒町駅北口から3分',
    gf_detail: 'グルテンフリーは要確認。パスタ、ピザ、パン、ケーキがメニューの中心で、カレーやバスクチーズケーキもグルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。クリームのパスタ、チーズのピザ、チキンカレー、チーズケーキ。ヴィーガンの料理名はありません。',
    notes: '[カフェ&バー・上野広小路、ホテル1階の終日のくつろぎ] 上野広小路駅そばの相鉄フレッサインの1階にある、グレーを基調にした落ち着いたカフェ&バーで、11:00から22:00 (週末は23:00) まで。昼はパスタ、ピザ、意外と辛いカレー (1,300〜1,600円)、午後はバスクチーズケーキと猿田彦のコーヒー、夜はワインやカクテル。テーブルが欲しいならオンライン予約を。おやつの時間は混み、混雑時は90分制。電源のある席も。にぎやかな上野で落ち着いて待ち合わせできる店として好評で、チーズケーキのクリームが重い、Wi-Fiが弱いという声も。',
  });
}

// ================================================================ 鳥恵 上野広小路店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13128870/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '22:30']); const S = day(['17:00', '22:30']);
  put({
    id: 'tokyo_torie_ueno_hirokoji', name: '鳥恵 上野広小路店 (Torie Ueno Hirokoji)', category: 'OMNI',
    lat: 35.70789, lng: 139.772369, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: an omakase yakitori course with salt and glazed skewers, salads, liver pâté and an oyakodon to finish; nothing is described as gluten-free, so say so when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken course — skewers of several breeds, liver pâté, oyakodon.',
    hours_raw: 'Mon–Fri 17:30–22:30; Sat and holidays 17:00–22:30; Sun 17:00–22:00 (Sundays from 17 May 2026); closed New Year, Golden Week, Obon and some other days (Tabelog). Reservations taken and needed — harder to book lately (September 2026). Counter seats for junior-high age and up, who must order a course; small children only in private rooms (¥5,000 room fee). A shorter ¥8,000 course at 17:00 on weekends (October 2026). 20 seats: a U-shaped counter of 10 and private rooms for 4 and 6. Non-smoking. Cards and PayPay; no e-money.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S, 6: day(['17:00', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 栗田ビル 1F, an alley off Kasuga-dōri past the Sotetsu Fresa Inn — 1 min from Exit A4 of Ueno-Okachimachi / Ueno-Hirokoji; 3 min from Yushima and JR Okachimachi',
    cuisine: 'Course yakitori of several breeds of chicken over charcoal, with seasonal dishes and wine; Tabelog Yakitori 100 in 2018, 2019, 2021, 2022 and EAST 2023–2025 · Torie course or omakase course about ¥10,000 (September–October 2026); weekend 17:00 short course ¥8,000 (October 2026) · seasonal starters (grilled maitake, chestnuts, shungiku with sesame; turnip and persimmon), salads (baby greens from Hiroshima with figs; persimmon with white miso), skewers such as seseri, gizzard, tsukune and Shiga Omi chicken breast, liver pâté, oyakodon and dessert to finish · wine and sake',
    website: null, gmaps: gm('鳥恵 上野広小路店'), menu_url: null,
    notes: "[Yakitori · Ueno-Hirokoji, a Tabelog 100 course yakitori counter] A polished yakitori restaurant tucked in an alley off Kasuga-dōri, regularly in Tabelog's Yakitori 100, where you sit at a U-shaped wooden counter and watch the chef grill. Dinner is a course, about ¥10,000: seasonal starters and salads, then skewer after skewer from several chicken breeds — seseri, gizzard, tsukune, Omi chicken breast — with a liver pâté one October 2026 diner raved about with wine, and oyakodon and dessert to finish. On weekends a shorter ¥8,000 course starts at 17:00. It is part of a small Torie group nearby. Book ahead; counter seats are for junior-high age and up.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Part of the 鳥恵 group, with a 湯島本店 and a 上野黒門店 nearby, each using slightly different chicken breeds (Retty/ikyu summaries); a September 2026 reviewer instead calls Ikebukuro the main branch. No source names the chef.', philosophy: null, specialty: 'Course yakitori; liver pâté.',
      anecdotes: [
        { text: '"The yakitori that followed was enticing, served one skewer at a time on a plate." — October 2026, weekend ¥8,000 short course.', source: R + 'B533845030/' },
        { text: '"One dish that truly impressed me was the liver pâté! Its unforgettable taste paired perfectly with wine." — October 2026, omakase course.', source: R + 'B537861049/' },
        { text: '"Recently, it has become more difficult to make reservations due to the increase in foreign visitors." — September 2026, ¥10,000 course.', source: R + 'B498317041/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 鳥恵 上野広小路店、文京区湯島3-40-8 栗田ビル 1F、上野御徒町駅・上野広小路駅A4出口から徒歩1分、湯島駅・JR御徒町駅から3分、月〜金17:30〜22:30、土祝17:00〜22:30、日17:00〜22:00 (2026年5月17日から日曜も営業)、年末年始・GW・お盆休み、予約可、カウンターは中学生以上でコースの注文が必要、小さな子どもは個室のみ (個室料5,000円)、20席 (カウンター10、4名と6名の個室)、禁煙、カード・PayPay可、食べログ 焼鳥 百名店 2018・2019・2021・2022、EAST 2023〜2025。Retty・一休: 湯島本店、上野広小路店、上野黒門店が近くに3店舗、店ごとに鶏の銘柄が違う。口コミ (2026年9〜10月): 鳥恵コースやおまかせコース約10,000円、週末17時の短いコース8,000円、季節の前菜、サラダ、せせり、砂肝、つくね、近江の鶏むね、レバーパテ、締めの親子丼とデザート、ワイン、予約が取りにくくなった、池袋が本店という声も。',
      confidence: 'medium', sources: [TB, R + 'B498317041/', R + 'B506999637/', R + 'B533845030/', R + 'B535818394/', R + 'B536239010/', R + 'B536515389/', R + 'B537410543/', R + 'B537450001/', R + 'B537765088/', R + 'B537861049/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase course at the counter; book ahead; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-40-8 栗田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (Yakitori EAST 100, 2025); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目40番8号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535818394/', R + 'B533845030/'],
    price_note: 'Course prices from September–October 2026 reviews; no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Torie course', '¥10,000', 'Courses', 'ask', 'no', 'September 2026.', 'torie_course'),
      it('', '', 'Weekend 17:00 short course', '¥8,000', 'Courses', 'ask', 'no', 'October 2026.', 'short_course'),
    ] }, {
    cuisine: '数種類の銘柄鶏を炭火で焼くコースの焼き鳥に、季節の料理とワイン。食べログ 焼鳥 百名店 2018・2019・2021・2022、EAST 2023〜2025・鳥恵コースやおまかせコース約10,000円 (2026年9〜10月)、週末17時の短いコース8,000円 (2026年10月)・季節の前菜 (焼きまいたけ、栗、春菊の胡麻和え、かぶと柿)、サラダ (広島のベビーリーフといちじく、柿の白味噌和え)、せせり、砂肝、つくね、近江の鶏むねなどの串、レバーパテ、締めの親子丼とデザート・ワインと日本酒',
    neighborhood: '湯島三丁目 (文京区)、栗田ビル 1F、相鉄フレッサインの先で春日通りから入った路地。上野御徒町駅・上野広小路駅A4出口から徒歩1分、湯島駅・JR御徒町駅から3分',
    gf_detail: 'グルテンフリーは要確認。塩やタレの串、サラダ、レバーパテ、締めの親子丼のおまかせコースで、グルテンフリーの説明はないので予約時に伝えて。',
    vegan_detail: 'ヴィーガンではありません。鶏のコースで、数種類の銘柄鶏の串、レバーパテ、親子丼。',
    notes: '[焼き鳥・上野広小路、百名店のコースの焼き鳥] 春日通りから入った路地にある洗練された焼き鳥店で、食べログの焼鳥百名店の常連。木のU字カウンターでシェフが焼く様子を見ながら。夜はコースで約10,000円: 季節の前菜とサラダのあと、数種類の銘柄鶏の串が続き (せせり、砂肝、つくね、近江の鶏むね)、2026年10月にワインに合うと絶賛されたレバーパテ、締めは親子丼とデザート。週末は17時から8,000円の短いコースも。近くに数店舗ある鳥恵グループの一店。予約を、カウンターは中学生以上。',
  });
}

// ================================================================ 関西風手打うどん いらっしゃい
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13042758/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '13:30']);
  put({
    id: 'tokyo_kansai_udon_irasshai_shitaya', name: '関西風手打うどん いらっしゃい (Irasshai)', category: 'OMNI',
    lat: 35.720398, lng: 139.781677, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade wheat udon in dashi; tempura toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kansai-style dashi broth throughout; the menu has a vegetable udon, but it shares the broth.',
    hours_raw: 'Mon–Sat 11:30–13:30; Tue also 18:00–19:30; closed Sundays; closes when the noodles sell out (Tabelog). The listing itself warns the posted hours are "not very reliable". No reservations; a short queue at opening. Cash only. 8 counter seats in an L. Non-smoking. One person runs it (September 2026).',
    hours: { 0: L, 1: day(['11:30', '13:30'], ['18:00', '19:30']), 2: L, 3: L, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shitaya 1-chōme — 4 min from Iriya Stn; 5 min from JR Uguisudani',
    cuisine: 'Kansai-style handmade udon, uneven thick-and-thin noodles in a gentle dashi (reviews); Tabelog Udon TOKYO 100 2020, EAST 2024 · signature shippoku udon loaded with toppings including simmered shiitake; kitsune, kakiage, tanuki, plum, kombu, takana, mixed and vegetable udon, yuzu soba · menu (Tabelog, May 2021): kake ¥480, kitsune, kakiage, tanuki ¥550, mixed ¥600, plum, kombu, takana, shippoku, vegetable ¥650 · large sizes available',
    website: null, gmaps: gm('関西風手打うどん いらっしゃい 下谷1-13-10'), menu_url: TB + 'dtlmenu/',
    notes: "[Udon · Iriya, a one-man Kansai udon counter with a famous broth] A tiny, retro, Showa-feeling udon counter near Iriya, with eight seats and a single cook who opens the door, hangs the noren and does everything else. The noodles are cut by hand, so some are thick and some thin, sitting in a gentle Kansai dashi that a September 2026 reviewer called among the best ever. The favourite is shippoku udon, heaped with toppings and dashi-soaked shiitake; kitsune, kakiage and plum are close behind, at well under ¥1,000. It is in Tabelog's Udon 100. Lunch only except Tuesday evenings, and it closes when the noodles run out — the listing itself says the hours are not reliable. One August 2026 diner found it far from spotless.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing (Udon 100: TOKYO 2020, EAST 2024). A September 2026 diner saw the chef working alone. No source names the owner.', philosophy: null, specialty: 'Shippoku udon.',
      anecdotes: [
        { text: '"The retro Showa-era decor gives a comforting vibe." — October 2026, shippoku udon.', source: R + 'B536948962/' },
        { text: '"The broth was among the best I\'ve ever had—definitely at a legendary level." — September 2026, large mixed udon with tanuki.', source: R + 'B536103478/' },
        { text: '"The interior, with six counter seats, could hardly be described as clean." — August 2026.', source: R + 'B533730620/' },
      ],
      japanese_sources_summary: '食べログ: 関西風手打うどん いらっしゃい、下谷1-13-10、入谷駅から徒歩4分、JR鶯谷駅から5分、月〜土11:30〜13:30、火は18:00〜19:30も、日曜休み、麺がなくなり次第終了、営業時間はあまり当てにならない (店舗情報の備考)、予約不可、カード・電子マネー・QR不可、カウンター8席、禁煙、食べログ うどん 百名店 TOKYO 2020、EAST 2024。メニュー (2021年5月): かけ480円、きつね・かき揚げ・たぬき550円、五目600円、梅・昆布・高菜・しっぽく・野菜650円、ゆずそば650円。口コミ (2026年8〜10月): 名物のしっぽくうどん、手打ちで太さが不ぞろいの麺、関西風のやさしいだし、大盛り、店主一人、開店時に少し並ぶ、昭和レトロ、清潔とは言いがたいという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B495465349/', R + 'B532697714/', R + 'B533730620/', R + 'B534630423/', R + 'B536103478/', R + 'B536526521/', R + 'B536697720/', R + 'B536948962/', R + 'B537919097/', R + 'B538519400/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny one-person counter; menu on the wall; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区下谷1-13-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目13番10号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu dated May 2021; likely higher now.', last_checked: TODAY, items: [
      it('', '', 'Kake udon', '¥480', 'Udon', 'no', 'no', 'Tabelog menu, 2021.', 'kake'),
      it('', '', 'Kitsune udon', '¥550', 'Udon', 'no', 'no', 'Tabelog menu, 2021.', 'kitsune'),
      it('', '', 'Kakiage udon', '¥550', 'Udon', 'no', 'no', 'Tabelog menu, 2021.', 'kakiage'),
      it('', '', 'Shippoku udon', '¥650', 'Udon', 'no', 'no', 'Tabelog menu, 2021.', 'shippoku'),
    ] }, {
    cuisine: '関西風の手打ちうどん、太さが不ぞろいの麺にやさしいだし (口コミ)。食べログ うどん 百名店 TOKYO 2020、EAST 2024・名物は具だくさんでしいたけにだしがしみたしっぽくうどん。きつね、かき揚げ、たぬき、梅、昆布、高菜、五目、野菜うどん、ゆずそば・メニュー (食べログ、2021年5月): かけ480円、きつね、かき揚げ、たぬき550円、五目600円、梅、昆布、高菜、しっぽく、野菜650円・大盛りあり',
    neighborhood: '下谷一丁目。入谷駅から徒歩4分、JR鶯谷駅から5分',
    gf_detail: 'グルテンフリーではありません。手打ちの小麦のうどんにだし、天ぷらの具。',
    vegan_detail: 'ヴィーガンではありません。関西風のだしのつゆで、野菜うどんも同じつゆです。',
    notes: '[うどん・入谷、一人で営む関西うどんのカウンター、名物のだし] 入谷近くの小さな昭和レトロなうどんのカウンターで、8席、戸を開けてのれんを掛けるのもすべて一人の店主。手切りの麺は太いところも細いところもあり、2026年9月の口コミで最高クラスと言われたやさしい関西風のだしに浸かっています。人気はしっぽくうどんで、具だくさんにだしのしみたしいたけ。きつね、かき揚げ、梅も人気で、どれも1,000円をかなり下回ります。食べログのうどん百名店。昼のみ (火曜は夜も)、麺がなくなり次第終了で、店舗情報自体が営業時間は当てにならないと書いています。2026年8月には清潔とは言いがたいという声も。',
  });
}

// ================================================================ 寿し処 川
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13247353/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://sushidokoro-sen.com/';
  const D = day(['17:00', '02:00']);
  put({
    id: 'tokyo_sushi_dokoro_sen_yushima', name: '寿し処 川 (Sushi Dokoro Sen)', category: 'OMNI',
    lat: 35.708549, lng: 139.770874, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: nigiri and sashimi are brushed with soy-based sauces, and courses include simmered and grilled dishes; nothing is described as gluten-free, so tell the restaurant when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Edomae sushi and seafood courses.',
    hours_raw: 'Mon–Sat 17:00–2:00 (food last order 1:30); closed Sundays and the 1st and 3rd Wednesdays (Tabelog). Reservations taken. 16 seats (8 at the counter, 2 tables for four). Non-smoking. Cards and PayPay. English menu. Children welcome. BYO allowed.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), ATビル 1F, a back alley — 3 min from Yushima Stn Exit 2',
    cuisine: 'Edomae sushi carrying on the taste of the downtown sushi shop Kanpachi, per the listing (Tabelog) · courses: nigiri ¥15,000; appetizers and nigiri ¥17,000; à la carte too (Tabelog) · menu (Tabelog, April 2026): omakase sushi ¥5,000; late-night sets A and B ¥3,000 · seasonal extras such as shinko nigiri (about ¥4,000, July 2026); striped jack, sweet shrimp, boiled kuruma prawn, ikura bowl, eel; homemade gari; chilled chawanmushi in summer · a good sake list',
    website: WS, gmaps: gm('寿し処 川 湯島3-42-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Yushima, Edomae sushi until 2 am] A small Edomae sushi counter in a Yushima back alley that says it carries on the taste of Kanpachi, a well-known downtown sushi shop, and stays open until 2 am — handy after a late show or a night out. Dinner is usually a nigiri course (¥15,000, or ¥17,000 with appetizers), with seasonal treats such as shinko in summer and an ikura bowl; late at night there are ¥3,000 sets and a ¥5,000 omakase. Reviewers praise the homemade pickled ginger, the sake and flexible service — one party had the course reshaped with fewer pieces and more small dishes. A January 2025 diner found the seasoning too salty.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing (official information), authentic Edomae sushi that continues the taste of Kanpachi, a famous downtown restaurant. No source names the chef.', philosophy: null, specialty: 'Edomae nigiri; homemade gari.',
      anecdotes: [
        { text: '"Such thoughtful consideration is truly appreciated during a business dinner!" — August 2026, a course reshaped with fewer sushi and more small dishes.', source: R + 'B534411768/' },
        { text: '"The homemade gari (pickled ginger) was delicious." — April 2026, course.', source: R + 'B525767048/' },
        { text: '"This is just my personal opinion, but the saltiness was a bit too strong." — January 2025.', source: R + 'B499920884/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 寿し処 川、文京区湯島3-42-7 ATビル 1F、湯島駅2番出口から徒歩3分、月〜土17:00〜翌2:00 (料理L.O.1:30)、日曜と第1・第3水曜休み、予約可、16席 (カウンター8、4名テーブル2)、禁煙、カード・PayPay可、英語のメニュー、子ども可、持ち込み可、下町の名店「かんぱち」の味を受け継ぐ本格江戸前寿司、握りコース15,000円、つまみと握りのコース17,000円、アラカルトも。メニュー (2026年4月): おまかせ寿司5,000円、深夜の寄り道セットA・B 3,000円。口コミ (2025年1月〜2026年10月): 新子 (約4,000円の追加)、シマアジ、甘エビ、車海老、いくら丼、うなぎ、自家製のガリ、日本酒が豊富、コースの内容を調整してくれた、塩気が強いという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B499920884/', R + 'B502968785/', R + 'B506754954/', R + 'B511194662/', R + 'B512346309/', R + 'B525767048/', R + 'B527259761/', R + 'B532613269/', R + 'B534411768/', R + 'B538323081/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; counter omakase.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-42-7 ATビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated April 2026); reviews dated January 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目42番7号 (go) 10m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB, TB + 'dtlmenu/'],
    price_note: 'Course prices from the Tabelog listing; late-night sets from the Tabelog menu (April 2026).', last_checked: TODAY, items: [
      it('', '', 'Nigiri course', '¥15,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'nigiri_course'),
      it('', '', 'Appetizers and nigiri course', '¥17,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'tsumami_nigiri_course'),
      it('', '', 'Omakase sushi', '¥5,000', 'Sushi', 'ask', 'no', 'Tabelog menu, April 2026.', 'omakase_sushi'),
      it('', '', 'Late-night set A or B', '¥3,000', 'Late night', 'ask', 'no', 'Tabelog menu, April 2026.', 'late_night_set'),
    ] }, {
    cuisine: '下町の名店「かんぱち」の味を受け継ぐ江戸前寿司 (食べログ)・コース: 握り15,000円、つまみと握り17,000円、アラカルトも (食べログ)・メニュー (食べログ、2026年4月): おまかせ寿司5,000円、深夜の寄り道セットA・B 3,000円・季節の新子 (約4,000円、2026年7月)、シマアジ、甘エビ、ゆでた車海老、いくら丼、うなぎ、自家製のガリ、夏の冷たい茶碗蒸し・日本酒が豊富',
    neighborhood: '湯島三丁目 (文京区)、ATビル 1F、裏通り。湯島駅2番出口から徒歩3分',
    gf_detail: 'グルテンフリーは要確認。握りや刺身には醤油ベースのたれを塗り、コースには煮物や焼き物も。グルテンフリーの説明はないので予約時に伝えて。',
    vegan_detail: 'ヴィーガンではありません。江戸前寿司と魚介のコース。',
    notes: '[寿司・湯島、深夜2時までの江戸前寿司] 湯島の裏路地にある小さな江戸前寿司のカウンターで、下町の名店「かんぱち」の味を受け継ぐとし、深夜2時まで営業。遅い観劇や飲み会のあとに便利です。夜はたいてい握りのコース (15,000円、つまみ付き17,000円) で、夏の新子やいくら丼など季節のものも。深夜は3,000円のセットや5,000円のおまかせ。自家製のガリ、日本酒、柔軟な対応が好評で、握りを減らしてつまみを増やしてくれたという声も。2025年1月には味が塩辛いという声も。',
  });
}

save();
