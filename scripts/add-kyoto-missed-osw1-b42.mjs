// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 42.
//   + chicken & tacos 雷鳥神社 Raicho Jinja (chicken and tacos near Shichijo, with a shrine inside)
//   + ブランブリュン BRUNBRUN (chocolate maker and café south of the Imperial Palace since 1935)
//   + 豆腐料理とおばんざい まるたけえびす豆八 京都 先斗町 Mamehachi (tofu and obanzai on Pontocho)
//   + 肉もん 河原町竹屋町店 NIKUMON (Wagyu yakiniku in a 100-year-old machiya; second shop of NIKUMON)
//   - まんざら亭 NISHIKI (26000954): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26038202, 26000126; from `next notable
//   200`: 26021180, 26000954 (skipped), 26040878. None of the four drafted is in data/kyoto.json by name (雷鳥/Raicho,
//   ブランブリュン/BRUNBRUN, 豆八/Mamehachi, 肉もん/NIKUMON) or address (新日吉町132-6, 三本木町462, 四条通先斗町上ル
//   西側22, 大文字町242-3).
//   Same-name count (same brand or operator only): 雷鳥神社 — invoice holder 株式会社ＡＦＬＯ・ＸＬ (NTA register); no
//   other shop found. ブランブリュン — one shop. 豆八 — a small group: this shop, 豆八 本店 and MAMEHACHI CHAYA on Tabelog
//   (invoice holder 有限会社プロスパー, NTA register); none in data. 肉もん — two shops (四条大宮本店 and this one; Tabelog
//   name search; an October 2026 review calls this the second branch). Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 豆八 お通し代として550円. Others none listed.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000954', 'まんざら亭 NISHIKI: same-name shops of five or more — a Tabelog Kyoto name search (2026-11-06) lists seven Manzara shops (Manzara Honten, Manzara Tei Pontocho, Manzara Tei Sanjo Takakura, Manzara Tei NISHIKI, Manzara Donguribashi, Manzara Ekiyoko Kushi to Sake and its Shijo Karasuma shop; Tabelog English names)');

// ================================================================ chicken & tacos 雷鳥神社
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038202/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '25:00']);
  put({
    id: 'kyoto_chicken_tacos_raicho_jinja', name: 'chicken & tacos 雷鳥神社 (Raicho Jinja)', category: 'OMNI',
    lat: 34.989375, lng: 135.765295, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos on homemade tortillas (corn or wheat not stated), chicken over rice with butter rice, Sri Lankan curry, fried chicken and fries (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A “Kyoto vegetable original” taco is on the menu, but fillings and tortillas are not described; most dishes are chicken or pork (2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00, dinner 18:00–1:00 (L.O. 23:30); closed Wednesday (Tabelog). Lunch is a set menu only, paid in advance, ordered downstairs before going up to the second floor (April–May 2026). Reservations accepted (Tabelog). Cards, IC, e-money and QR (Tabelog). 30 seats: 10 at the counter and five tables for four; the second floor can be hired for 20–30 (Tabelog). Smoking allowed on the first floor (Tabelog; August 2026). Free Wi-Fi; sports viewing (Tabelog). A small shrine inside; guests may write on ema plaques (April and October 2026). 3 min from Keihan Shichijo Stn, 7 min from Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shichijo-dori, between Kyoto Station and Shichijo Stn',
    cuisine: 'Chicken and tacos: nine kinds of tacos — Kyoto vegetable original, pork guacamole, pork beans, carnitas, chipotle — on homemade tortillas (January and April 2026) · chicken over rice with breast or thigh, butter rice or tortillas, yogurt sauce (February–April 2026) · lunch A: chicken with Sri Lankan curry or tortilla and a large salad (May 2026) · crispy chicken thigh with fries, cut with scissors (May 2026); tulip chicken (October 2026) · pink potato salad (January 2026) · stamped boiled eggs (October 2026)',
    website: null, gmaps: gm('chicken&tacos 雷鳥神社 七条'), menu_url: null,
    notes: '[Chicken and tacos · near Shichijo, a shrine inside] A cheerful, graffiti-walled chicken-and-taco bar near Keihan Shichijo with its own little shrine and ema to write on: nine kinds of tacos on homemade tortillas, chicken over rice, crisp chicken thigh with fries, and a spicy Sri Lankan curry at lunch. Open late (to 1:00); smoking allowed downstairs. Closed Wednesdays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Invoice T1130001051904 is registered to 株式会社ＡＦＬＯ・ＸＬ (NTA register). Reviewers describe friendly staff and a homey atmosphere (2026); a January 2026 diner found the fillings mild, as if tailored for Japanese tastes, but praised the tortillas.',
      philosophy: null, specialty: 'Tacos; chicken over rice.',
      anecdotes: [
        { text: 'An April 2026 diner was surprised to find a shrine inside the restaurant.', source: R + 'B526869542/' },
        { text: 'An October 2026 first-timer at a Mexican restaurant was allowed to write on an ema plaque.', source: R + 'B537296114/' },
      ],
      japanese_sources_summary: '食べログ: chicken & tacos 雷鳥神社、メキシコ料理・タコス、下京区新日吉町132-6、京阪七条駅から徒歩3分、京都駅から徒歩7分、昼12:00〜15:00、夜18:00〜翌1:00 (L.O.23:30)、水曜定休、予約可、カード・電子マネー・QR可、30席 (カウンター10、4人卓5)、2階は貸切可、1階は喫煙可、適格請求書 T1130001051904 (株式会社ＡＦＬＯ・ＸＬ)。口コミ (2026年、英語): タコス9種 (京野菜のオリジナル、ポークのワカモレ、カルニタス、チポトレ)、自家製トルティーヤ、チキンオーバーライス (むねかもも、バターライスかトルティーヤ、ヨーグルトソース)、スリランカカレーのランチ、もも肉のフライとポテト、店内に神社と絵馬、昼は前払いでセットのみ。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001051904', R + 'B520799243/', R + 'B522956617/', R + 'B523550679/', R + 'B526229763/', R + 'B526869542/', R + 'B527260009/', R + 'B527464855/', R + 'B533876678/', R + 'B537296114/', R + 'B537660419/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay first at lunch; smoking allowed on the ground floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新日吉町132-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989375, 135.765295); cross-checked: GSI 京都府京都市下京区新日吉町132番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read; reviewers spend ¥1,000–2,000 at lunch and ¥4,000–5,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Chicken over rice (breast or thigh)', '', 'Chicken', 'ask', 'no', '2026 reviews.', 'chicken_over_rice'),
      it('', '', 'Kyoto vegetable original taco', '', 'Tacos', 'ask', 'ask', 'April 2026.', 'kyoyasai_taco'),
      it('', '', 'Lunch A (chicken with Sri Lankan curry or tortilla)', '', 'Lunch', 'ask', 'no', 'May 2026.', 'lunch_a'),
    ] }, {
    cuisine: 'チキンとタコス: 自家製トルティーヤのタコス9種 (京野菜のオリジナル、ポークのワカモレ、ポークビーンズ、カルニタス、チポトレ) (2026年1月、4月)・むねかもも、バターライスかトルティーヤ、ヨーグルトソースのチキンオーバーライス (2026年2〜4月)・ランチA: スリランカカレーかトルティーヤのチキンにたっぷりのサラダ (2026年5月)・はさみで切るカリカリのもも肉とポテト (2026年5月)、チューリップ (2026年10月)・ピンクのポテトサラダ (2026年1月)・刻印入りのゆで卵 (2026年10月)',
    neighborhood: '七条通の近く、京都駅と七条駅の間',
    gf_detail: '要確認。自家製トルティーヤのタコス (とうもろこしか小麦かは書かれていない)、バターライスのチキンオーバーライス、スリランカカレー、鶏のフライとポテト (2026年の口コミ)。',
    vegan_detail: '要確認。「京野菜のオリジナル」のタコスもあるが、具やトルティーヤの中身は書かれておらず、ほとんどは鶏か豚 (2026年の口コミ)。',
    notes: '[チキンとタコス・七条近く、店の中に神社] 京阪七条近くの、落書きの壁に小さな神社と絵馬がある陽気なチキンとタコスの店。自家製トルティーヤのタコス9種、チキンオーバーライス、カリカリのもも肉とポテト、昼は辛いスリランカカレー。深夜1時まで、1階は喫煙可。水曜休み。',
  });
}

// ================================================================ ブランブリュン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000126/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.brunbrun.co.jp/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_brunbrun_marutamachi', name: 'ブランブリュン (BRUNBRUN)', category: 'OMNI',
    lat: 35.01634, lng: 135.760778, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chocolates, cakes (New York cheesecake, Mont Blanc, apple cake) and baked goods made upstairs, a weekday lunch, and chocolate kakigori in summer; ingredients are not described (Tabelog shop text; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cakes and kakigori use dairy (cream cheese, condensed milk); the chocolates are not described (2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 10:00–17:30 (L.O. 17:00); holidays 10:00–17:00 (L.O. 16:00); closed Sunday and Monday; lunch 11:30–13:30 (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats with sofas in an eat-in area behind the shop (Tabelog; July 2025). Non-smoking; strollers welcome (Tabelog; May 2025). On the corner of Higashinotoin and Takeyamachi, 2 min from Marutamachi Stn exit 5 (Tabelog). Founded 10 April 1935 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashinotoin at Takeyamachi, south of the Imperial Palace — 2 min from Marutamachi Stn',
    cuisine: 'A chocolate maker since 1935 — making chocolate before the war, when it was still rare — with cakes and baked goods made one by one in the workshop upstairs, and a café with classical music (Tabelog shop text) · cake set, choosing from the showcase: Mont Blanc, apple cake (May 2025); dense New York cheesecake (July 2025) · chocolate kakigori, May–September: chocolate-laced ice with fresh chocolate, chocolate bars and sauce, condensed milk (2025) · a weekday lunch (March 2025)',
    website: SITE, gmaps: gm('ブランブリュン 京都 竹屋町'), menu_url: null,
    notes: '[Chocolate and café · south of the Imperial Palace, since 1935] An old Kyoto chocolatier — making chocolate since before the war — with a showcase of cakes made upstairs and a quiet sofa café at the back with classical music. Locals come for a cake set or, May to September, a towering chocolate kakigori. A short lunch too. Cash only; closed Sundays and Mondays.',
    chef_bio: { chef_name: null, roles: ['Pastry workshop (unnamed)'], origin: null,
      background: 'Tabelog’s shop text: established in 1935 (Showa 10) and making and selling chocolate since before the war, when chocolate was still uncommon; cakes and baked goods are made one by one in the factory on the building’s second floor. A February 2026 regular returned after years and found the same comforting flavours, with a room full of locals.',
      philosophy: null, specialty: 'Chocolate; chocolate kakigori.',
      anecdotes: [
        { text: 'An August 2025 passer-by, ducking in from the heat for shaved ice, only then learned the shop is famous for chocolate.', source: R + 'B511268779/' },
        { text: 'A May 2025 visitor wanted the Mont Blanc, found it sold out, and chose the apple cake from the showcase.', source: R + 'B506159181/' },
      ],
      japanese_sources_summary: '食べログ: ブランブリュン、チョコレート・ケーキ・喫茶店、中京区竹屋町通東洞院西入ル三本木町462、丸太町駅5番出口から東へ徒歩2分、火〜土 10:00〜17:30 (L.O.17:00)、祝日 10:00〜17:00、日・月定休、ランチ11:30〜13:30、予約不可、現金のみ、20席 (ソファ席)、禁煙、1935年4月10日創業。店の紹介: 昭和10年創業、戦前のチョコレートが珍しかった頃からチョコレートを製造販売、ケーキと焼き菓子は2階の工房でひとつずつ手作り、クラシック音楽の流れるカフェ。口コミ (2025〜2026年、英語): ケーキセット、モンブラン、りんごのケーキ、ニューヨークチーズケーキ、5〜9月のチョコレートのかき氷、地元の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B503696024/', R + 'B506159181/', R + 'B508112952/', R + 'B510911106/', R + 'B511268779/', R + 'B513433010/', R + 'B513729947/', R + 'B522891514/', R + 'B524253497/', R + 'B533021151/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick cakes from the showcase; cash only; a quiet local café.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通東洞院西入ル三本木町462',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.01634, 135.760778); cross-checked: GSI 京都府京都市中京区三本木町462番地 (lot) 55m; 11.7m from kyr_kyoto_tori_paitan_soba_j; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read; reviewers spend ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Cake set (choose from the showcase)', '', 'Café', 'no', 'no', '2025 reviews.', 'cake_set'),
      it('', '', 'Chocolate kakigori (May–September)', '', 'Seasonal', 'ask', 'no', '2025 reviews.', 'choco_kakigori'),
      it('', '', 'New York cheesecake', '', 'Cakes', 'ask', 'no', 'July 2025.', 'ny_cheesecake'),
    ] }, {
    cuisine: '1935年からのチョコレート店。戦前のチョコレートが珍しかった頃から製造し、ケーキと焼き菓子は2階の工房でひとつずつ手作り、クラシックの流れるカフェ (食べログの店の紹介)・ショーケースから選ぶケーキセット: モンブラン、りんごのケーキ (2025年5月)、濃厚なニューヨークチーズケーキ (2025年7月)・5〜9月のチョコレートのかき氷: チョコレート入りの氷に生チョコ、板チョコ、チョコソース、練乳 (2025年)・平日のランチ (2025年3月)',
    neighborhood: '御所の南、東洞院と竹屋町の角。丸太町駅から徒歩2分',
    gf_detail: '要確認。チョコレート、ケーキ (ニューヨークチーズケーキ、モンブラン、りんごのケーキ)、2階で作る焼き菓子、平日のランチ、夏のチョコレートのかき氷。材料は書かれていない (食べログの店の紹介、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ケーキとかき氷は乳製品 (クリームチーズ、練乳) を使う。チョコレートの中身は書かれていない (2025〜2026年の口コミ)。',
    notes: '[チョコレートとカフェ・御所の南、1935年から] 戦前からチョコレートを作る京都の老舗。2階で作るケーキのショーケースと、奥にクラシックの流れる静かなソファのカフェ。地元の人がケーキセットや、5〜9月のチョコレートのかき氷に通う。短いランチも。現金のみ、日・月休み。',
  });
}

// ================================================================ まるたけえびす豆八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021180/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_mamehachi_pontocho', name: '豆腐料理とおばんざい まるたけえびす豆八 京都 先斗町 (Marutakeebisu Mamehachi, Pontocho)', category: 'OMNI',
    lat: 35.005104, lng: 135.771047, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu and yuba dishes with dashi and soy, soy-milk white-miso oden, nama-fu dengaku (wheat gluten), yuba tempura and fried tofu, koji-marinated meat and fish (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Much of the menu is tofu, yuba and vegetables, but dashi is used (fried eggplant and yuba in dashi) and fish, chicken and sake-lees fish appear in the courses (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (L.O. 14:30), dinner 17:00–22:00 (L.O. 21:30); irregular closures for maintenance days (Tabelog). Reservations accepted (Tabelog). Otoshi ¥550 per person (Tabelog, original お通し代として550円頂いております。). Cards and QR (PayPay, Alipay); no e-money (Tabelog). 36 seats: counter, tables and private rooms for 4–8; parties up to 20 (Tabelog). Non-smoking (Tabelog). On Pontocho, just north of Shijo on the west side, 3 min from Hankyu Kawaramachi Stn exit 1A (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, just north of Shijo — 3 min from Hankyu Kawaramachi Stn',
    cuisine: 'Tofu dishes and obanzai, Kyoto style (Tabelog) · Marutake Course ¥5,500 (September 2026); Marutake lunch with a soy-milk hot pot and dessert; obanzai lunch (August and November 2026) · fresh yuba sashimi, five kinds of tofu, fried eggplant and yuba in dashi, yuba tempura, burdock with black honey, two-colour nama-fu dengaku, sake-lees grilled fish, soy-milk white-miso oden, chirimen-sansho chazuke (September 2026) · crispy thick fried tofu (July 2026) · koji-marinated mackerel and chicken (October 2026) · sake from Sasaki Shuzo, the family brewery of actor Kuranosuke Sasaki, served since autumn 2025 (June 2026)',
    website: null, gmaps: gm('まるたけえびす豆八 先斗町'), menu_url: null,
    notes: '[Tofu and obanzai · Pontocho by Shijo] A small tofu restaurant at the Shijo end of Pontocho with a counter and private rooms: yuba sashimi, soy-milk white-miso oden, nama-fu dengaku, yuba tempura and obanzai, as a ¥5,500 course or lunch sets with a soy-milk hot pot. Gentle flavours that suit older guests; sake from Sasaki Shuzo. ¥550 otoshi. Staff are largely students; service can be slow when busy.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Invoice T5130002012752 is registered to 有限会社プロスパー (NTA register). Tabelog also lists 豆八 本店 and MAMEHACHI CHAYA. Reviewers note the staff were largely university students (September–October 2026) and that a young server from abroad was attentive (July 2026); a June 2026 diner found dishes came slowly but was satisfied.',
      philosophy: null, specialty: 'Yuba sashimi; soy-milk white-miso oden.',
      anecdotes: [
        { text: 'A July 2026 diner in the forties brought a mother in the seventies, who left very happy.', source: R + 'B531500747/' },
        { text: 'A May 2026 host used a private room for guests from afar, and even the older guests ate heartily.', source: R + 'B529246715/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理とおばんざい まるたけえびす豆八 京都 先斗町、日本料理・豆腐料理・居酒屋、中京区四条通先斗町上ル西側22、阪急河原町駅1A出口から徒歩3分、昼11:30〜15:00 (L.O.14:30)、夜17:00〜22:00 (L.O.21:30)、不定休、予約可、お通し代550円、カード・QR可、36席 (カウンター、テーブル、個室4〜8名)、禁煙、適格請求書 T5130002012752 (有限会社プロスパー)。口コミ (2026年、英語): まるたけコース5,500円、豆乳鍋のまるたけランチ、おばんざいランチ、汲み上げ湯葉の刺身、豆腐5種、湯葉の天ぷら、二色の生麩田楽、粕漬けの焼き魚、豆乳白味噌のおでん、ちりめん山椒の茶漬け、麹漬けの鯖と鶏、佐々木酒造の酒、スタッフは大学生が多い。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130002012752', R + 'B523131040/', R + 'B529246715/', R + 'B529997942/', R + 'B531500747/', R + 'B531553192/', R + 'B535551575/', R + 'B537657914/', R + 'B538127948/', R + 'B538216793/', R + 'B538696831/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pontocho restaurant with many overseas visitors on the street; private rooms; ¥550 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区四条通先斗町上ル西側22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005104, 135.771047); the address (四条通先斗町上ル西側22) has no town-and-lot form GSI can match and OpenStreetMap has no node for the shop, so the pin is marked approximate; 12m from kyoto_pontocho_asari; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535551575/'],
    price_note: 'One price from a September 2026 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Marutake Course', '¥5,500', 'Courses', 'ask', 'ask', 'September 2026.', 'marutake_course'),
      it('', '', 'Fresh yuba sashimi', '', 'À la carte', 'ask', 'ask', '2026 reviews.', 'yuba_sashimi'),
      it('', '', 'Soy-milk white-miso oden (5 items)', '', 'À la carte', 'ask', 'ask', 'July 2026.', 'tonyu_oden'),
      it('', '', 'Otoshi', '¥550', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都の豆腐料理とおばんざい (食べログ)・まるたけコース5,500円 (2026年9月)、豆乳鍋と甘味のまるたけランチ、おばんざいランチ (2026年8月、11月)・汲み上げ湯葉の刺身、5種の豆腐、揚げ茄子と湯葉の煮浸し、湯葉の天ぷら、ごぼうの黒蜜、二色の生麩田楽、粕漬けの焼き魚、豆乳白味噌のおでん、ちりめん山椒の茶漬け (2026年9月)・カリカリの厚揚げ (2026年7月)・麹漬けの鯖と鶏 (2026年10月)・2025年秋から、俳優 Kuranosuke Sasaki の実家の Sasaki Shuzo の酒も (2026年6月)',
    neighborhood: '先斗町、四条のすぐ北。阪急河原町駅から徒歩3分',
    gf_detail: '要確認。出汁と醤油の豆腐や湯葉の料理、豆乳白味噌のおでん、生麩田楽 (小麦のグルテン)、湯葉の天ぷらや厚揚げ、麹漬けの肉や魚 (2026年の口コミ)。',
    vegan_detail: '要確認。豆腐、湯葉、野菜が多いが、出汁を使い (揚げ茄子と湯葉の煮浸し)、コースには魚、鶏、粕漬けの魚も入る (2026年の口コミ)。',
    notes: '[豆腐とおばんざい・四条の先斗町] 先斗町の四条側の、カウンターと個室のある小さな豆腐料理の店。湯葉の刺身、豆乳白味噌のおでん、生麩田楽、湯葉の天ぷら、おばんざいを、5,500円のコースか豆乳鍋のランチで。年配の人にもうれしいやさしい味。Sasaki Shuzo の酒も。お通し550円。スタッフは学生が多く、混むと料理が遅いことも。',
  });
}

// ================================================================ 肉もん 河原町竹屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040878/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_nikumon_kawaramachi', name: '肉もん 河原町竹屋町店 (NIKUMON Kawaramachi Takeyamachi)', category: 'OMNI',
    lat: 35.015815, lng: 135.76875, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu yakiniku with table sauces and rock salt, offal, motsunabe, bibimbap, steak bowls; sauce ingredients not given (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu yakiniku and offal restaurant (2026 reviews).',
    hours_raw: '11:00–23:00 (L.O. 22:30) daily; closed the second and fourth Thursdays (Tabelog). Reservations accepted (Tabelog). Cards and QR; no e-money (Tabelog). 36 seats including counter and sofa seating; private rooms from 2 to 20 (Tabelog). Non-smoking; wheelchair accessible; children welcome, birthday plates, take-out (Tabelog). “Meat Day” specials on the 29th (October 2026). In a 100-year-old townhouse on Kawaramachi north of Takeyamachi, 5 min from Jingu-Marutamachi and Kyoto Shiyakusho-mae Stns (Tabelog; October 2026). Opened 5 March 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi north of Takeyamachi — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'Carefully chosen Kuroge Wagyu yakiniku and offal; Manyo beef (2026 reviews) · special Wagyu assortment ¥2,980; thick-cut assortment ¥3,580; outside skirt for two ¥1,280; white omasum ¥780; premium yukhoe ¥1,580; Omi beef hoso with spicy noodles ¥1,180; kimchi assortment ¥880; matcha crème brûlée ¥480 (September 2026) · premium tongue; Wagyu sashimi with kombu (August 2026) · thin-sliced hosomaki with a dipping sauce (November 2026) · motsunabe in season (November 2026) · lunch: Wagyu rice bowl, yakiniku set, bibimbap, spicy onsen-egg sauce with rice; “Ran Ichi” or top-sirloin steak bowl on the 29th (2026)',
    website: null, gmaps: gm('肉もん 河原町竹屋町店'), menu_url: null,
    notes: '[Yakiniku · Kawaramachi-Takeyamachi, a machiya grill] The second shop of the Shijo-Omiya yakiniku NIKUMON, in a 100-year-old townhouse on Kawaramachi: Kuroge Wagyu and Manyo beef, offal such as omasum and Omi beef hoso, yukhoe and a premium tongue, with good-value lunch bowls and bibimbap and motsunabe in the cold months. Open 11:00–23:00; meat-day specials on the 29th. About ¥5,000–8,000 at dinner.',
    chef_bio: { chef_name: null, roles: ['Young staff (unnamed)'], origin: null,
      background: 'An October 2026 reviewer calls this the second branch of NIKUMON, “thriving in Shijo Omiya for 10 years”, opened in March 2024 in a 100-year-old traditional house. Another October 2026 diner found the young staff polite and efficient.',
      philosophy: null, specialty: 'Kuroge Wagyu; Omi beef offal.',
      anecdotes: [
        { text: 'An October 2026 regular came back nine days after a visit for the 29th “Meat Day” steak bowl and found rock salt the best match.', source: R + 'B537847673/' },
        { text: 'A September 2026 regular on an eighth visit chose the spiciness of the overflowing onsen-egg sauce at lunch.', source: R + 'B482107903/' },
      ],
      japanese_sources_summary: '食べログ: 肉もん 河原町竹屋町店、焼肉・もつ鍋・ホルモン、中京区河原町通竹屋町上ル大文字町242-3、神宮丸太町駅・京都市役所前駅から徒歩約5分、11:00〜23:00 (L.O.22:30)、第2・第4木曜休み、予約可、カード・QR可、36席、個室2〜20名、禁煙、車椅子可、子ども可、2024年3月5日オープン。口コミ (2026年、英語): 四条大宮で10年の「肉もん」の2号店、築100年の町家、黒毛和牛と Manyo 牛、特選和牛盛り2,980円、厚切り盛り3,580円、ハラミ1,280円、白センマイ780円、特上ユッケ1,580円、近江牛ホソと辛い麺1,180円、ほそ巻き、もつ鍋、昼の和牛丼やビビンバ、29日の肉の日。',
      confidence: 'medium', sources: [TB, R + 'B482107903/', R + 'B525447150/', R + 'B533556778/', R + 'B534008771/', R + 'B534444474/', R + 'B537582437/', R + 'B537847673/', R + 'B538275599/', R + 'B538335831/', R + 'B538645305/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-friendly yakiniku with private rooms; lunch sets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通竹屋町上ル大文字町242-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.015815, 135.76875); GSI matched a different 大文字町 about 2 km away, so cross-checked with OpenStreetMap restaurant 肉もん (node 13479176501) at 35.0158124, 135.7687854, about 3m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534008771/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Special Wagyu assortment', '¥2,980', 'Beef', 'ask', 'no', 'September 2026.', 'wagyu_moriawase'),
      it('', '', 'Thick-cut assortment', '¥3,580', 'Beef', 'ask', 'no', 'September 2026.', 'atsugiri'),
      it('', '', 'Premium yukhoe', '¥1,580', 'Beef', 'ask', 'no', 'September 2026.', 'yukhoe'),
      it('', '', 'Omi beef hoso with spicy noodles', '¥1,180', 'Offal', 'no', 'no', 'September 2026.', 'hoso_noodles'),
      it('', '', 'Matcha crème brûlée', '¥480', 'Dessert', 'ask', 'no', 'September 2026.', 'creme_brulee'),
    ] }, {
    cuisine: '厳選した黒毛和牛の焼肉とホルモン、Manyo 牛 (2026年の口コミ)・特選和牛盛り2,980円、厚切り盛り3,580円、ハラミ2人前1,280円、白センマイ780円、特上ユッケ1,580円、近江牛ホソと辛い麺1,180円、キムチ盛り880円、抹茶のクレームブリュレ480円 (2026年9月)・特上タン、昆布を添えた和牛の刺身 (2026年8月)・たれにくぐらせるほそ巻き (2026年11月)・季節のもつ鍋 (2026年11月)・昼は和牛丼、焼肉定食、ビビンバ、温玉の辛いたれとご飯、29日は Ran Ichi やランプのステーキ丼 (2026年)',
    neighborhood: '竹屋町の北の河原町通。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。卓上のたれや岩塩で食べる和牛の焼肉、ホルモン、もつ鍋、ビビンバ、ステーキ丼。たれの材料は書かれていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉とホルモンの店 (2026年の口コミ)。',
    notes: '[焼肉・河原町竹屋町、町家の焼肉] 四条大宮の焼肉「肉もん」の2号店。河原町通の築100年の町家で、黒毛和牛と Manyo 牛、センマイや近江牛ホソなどのホルモン、ユッケ、特上タン。昼はお得な丼やビビンバ、寒い時期はもつ鍋。11時〜23時、29日は肉の日の限定。夜は5,000〜8,000円ほど。',
  });
}

save();
