// Osaka sweep (2-mile circle around Dotonbori), batch 80 — mom-and-pop phase (all OMNI).
//   + 焼鳥 無名 NO NAME (seven-seat Tajima-chicken yakitori counter, opened 2024)
//   + 魚肴 しま田 (seasonal fish counter in Higashi-Shinsaibashi)
//   + にほん酒や一路 (sake bar with simmered offal, daytime on weekends; same building as NO NAME)
//   + すてーきはうす寿々 (teppan counter on Dotonbori's quiet west end, opened 2009)
//   + 鮨 極 (sushi kaiseki omakase, opened 2021)
//   No source shows a lone owner, so mom_and_pop stays false throughout.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 80);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 焼鳥 無名 NO NAME
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27142182/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_yakitori_mumei_no_name', name: '焼鳥 無名 NO NAME (Yakitori Mumei NO NAME)', category: 'OMNI',
    lat: 34.67046, lng: 135.502895, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare on some skewers, fried tofu, bread with the pâté.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken course.',
    hours_raw: 'Mon, Tue and Thu–Sun and holidays 18:00–23:00 (food L.O. 22:30); closed Wednesday (Tabelog). Reservations a must: seven seats (April 2026); no-shows after 15 minutes are charged as a same-day cancellation (Tabelog). Service charge added (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-7-12, White Bldg 4F — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Charcoal yakitori of Tajima chicken · omakase course ¥9,000: 8 skewers, 3 appetizers and a finish · seared chicken thigh with fresh pepper · breast, gizzard, salt-grilled skin, heart, tsukune with rich egg, boned wing with zucchini, negima · liver pâté with bread · chicken-broth chawanmushi · homemade fried tofu · homemade pickles · finish of yakitori don, grilled rice-ball soup or chicken soboro don · à la carte too · 7 counter seats',
    website: null, gmaps: gm('焼鳥 無名 NO NAME 東心斎橋'), menu_url: null,
    notes: "[Yakitori · a seven-seat Tajima-chicken counter in Higashi-Shinsaibashi] A dark, grown-up yakitori counter on the fourth floor of a Higashi-Shinsaibashi building, open since 2024 behind an understated sign. Tajima chicken is grilled over charcoal in front of you with refined, light seasoning. The ¥9,000 omakase runs eight skewers, three appetizers and a finish. It opens on seared thigh with fresh pepper, then breast, crunchy gizzard, salt-crisped skin, heart in a sweet tare, tsukune with a rich egg, a boned wing with zucchini, and negima. In between come a liver pâté that won over one liver skeptic, a chicken-broth chawanmushi and homemade pickles. Finish with yakitori don, grilled rice-ball soup or soboro don. À la carte works too. Reserve; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2024 (Tabelog)', background: 'Charcoal yakitori counter using Tajima chicken (January 2026 review; Tabelog, staff-maintained).', philosophy: null, specialty: 'Tajima-chicken yakitori omakase.',
      anecdotes: [
        { text: '"The yakitori is made with Tajima chicken, and the smoky aroma from the charcoal is prominent… The seasoning is refined and not overly strong, making it a perfect match for drinks." — January 2026.', source: R + 'B520460441/' },
        { text: '"The appetizer \'Liver Pâté\' was surprisingly good. I usually dislike liver, but this had no off-putting smell and was quite tasty." — August 2026, ¥9,000 omakase.', source: R + 'B535252319/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 焼鳥 無名 NO NAME、大阪市中央区東心斎橋2-7-12 ホワイトビル 4F、心斎橋駅・なんば駅から徒歩5分、月・火・木〜日・祝18:00〜23:00(料理L.O.22:30)、水曜休み、カード・電子マネー・QR可、サービス料あり、7席、2024年4月1日開店、予約時間から15分連絡がなければ当日キャンセル扱い。口コミ(2026年1〜9月): 大人の雰囲気、控えめな看板、暗い色調でカウンター中心、目の前で炭火焼き、Tajimaの鶏、もも・ねぎま・レバー、創作串、上品な味付け、コースも一品も、ささみ、ズッキーニ、Kokoro no Kori、7席なので予約必須、もものたたきに生胡椒、黒七味と塩、かしわ、ずり、鶏皮の塩焼き、おまかせ串8本・前菜3品・〆1品のコース9,000円、ハツは甘めのたれ、つくねに濃厚な卵、レバーパテとパン、自家製の揚げ出し豆腐、骨を抜いた手羽とズッキーニ、鶏だしの茶碗蒸し、自家製の漬物、〆は焼き鳥丼・焼きおにぎりのスープ・鶏そぼろ丼から。',
      confidence: 'medium', sources: [TB, R + 'B520460441/', R + 'B535252319/', R + 'B526274643/', R + 'B534818983/', R + 'B536491615/', R + 'B536556109/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seven-seat counter; reservations needed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-12 ホワイトビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番12号 (go) 11m; same building as にほん酒や一路; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535252319/', R + 'B536491615/'],
    price_note: 'Course price from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course: 8 skewers, 3 appetizers, finish', '¥9,000', 'Courses', 'no', 'no', 'August–September 2026.', 'omakase'),
      it('', '', 'Seared chicken thigh with fresh pepper', '', 'Appetizers', 'ask', 'no', 'September 2026.', 'momo_tataki'),
      it('', '', 'Liver pâté with bread', '', 'Appetizers', 'no', 'no', 'August–September 2026.', 'pate'),
      it('', '', 'Yakitori don', '', 'Finish', 'no', 'no', 'August 2026.', 'yakitori_don'),
    ] }, {
    cuisine: 'Tajimaの鶏の炭火焼き鳥・おまかせ9,000円(串8本、前菜3品、〆)・生胡椒のもものたたき・ささみ、砂肝、塩焼きの皮、ハツ、濃厚な卵のつくね、骨を抜いた手羽とズッキーニ、ねぎま・レバーパテとパン・鶏だしの茶碗蒸し・自家製の揚げ出し豆腐・自家製の漬物・〆は焼き鳥丼、焼きおにぎりのスープ、鶏そぼろ丼・一品料理も・カウンター7席',
    neighborhood: '中央区東心斎橋2-7-12 ホワイトビル 4F。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。一部の串のたれ、揚げ出し豆腐、パテのパン。',
    vegan_detail: 'ヴィーガンではありません。鶏のコース。',
    notes: '[焼き鳥・東心斎橋のTajimaの鶏の7席のカウンター] 東心斎橋のビルの4階、控えめな看板の奥にある大人の雰囲気の焼き鳥カウンターで、2024年開店。Tajimaの鶏を目の前で炭火で焼き、味付けは上品で軽め。9,000円のおまかせは串8本、前菜3品、〆。生胡椒をのせたもものたたきに始まり、ささみ、こりこりの砂肝、塩でパリッと焼いた皮、甘めのたれのハツ、濃厚な卵のつくね、骨を抜いた手羽とズッキーニ、ねぎま。合間にはレバー嫌いも食べられたレバーパテ、鶏だしの茶碗蒸し、自家製の漬物。〆は焼き鳥丼、焼きおにぎりのスープ、そぼろ丼から。一品料理でも。予約を。水曜定休。',
  });
}

// ================================================================ 魚肴 しま田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27070589/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_sakana_shimada', name: '魚肴 しま田 (Sakana Shimada)', category: 'OMNI',
    lat: 34.670407, lng: 135.502983, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-glazed and miso-grilled fish, fried oysters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood counter.',
    hours_raw: 'Mon–Sat 17:00–23:00; closed Sundays and holidays (Tabelog). Courses need advance notice (Tabelog). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-7-11, Honma Bldg 3F — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Seasonal fish and small dishes · omakase courses from ¥10,000 (book ahead) or à la carte · assorted sashimi: kensaki squid, tuna, hamo, Wakayama octopus · large fresh oysters · grilled cod milt with soy · fried oysters · abalone · dobin mushi · miso-grilled fish · grilled broad beans · salmon kasujiru (January) · sake · 7 counter seats and a private room',
    website: null, gmaps: gm('魚肴 しま田 東心斎橋'), menu_url: null,
    notes: "[Japanese · a seasonal fish counter in Higashi-Shinsaibashi] A small, calm Japanese restaurant on a third floor in Higashi-Shinsaibashi, built around seasonal fish. The chef came from Asai, a well-known Osaka restaurant, and one diner felt a similar vibe. Order à la carte or book an omakase from ¥10,000 ahead. Sashimi might be kensaki squid, tuna, hamo and Wakayama octopus. A January visit brought soy-grilled cod milt, fried oysters and a salmon kasujiru; an August one, abalone, a fragrant dobin mushi and a miso-grilled fish to close. The small dishes are built for sake. The counter is intimate: with no other guests, one diner felt the chef was listening in. Guests are seen to the elevator. Reviewers spent about ¥10,000–30,000.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Chef previously worked at Asai, a well-known Osaka restaurant (June 2026 review). Seasonal fish counter (Tabelog, staff-maintained).', philosophy: null, specialty: 'Seasonal fish dishes.',
      anecdotes: [
        { text: '"The abalone was tender, the dobin mushi (teapot steamed dish) was fragrant, and the sashimi tuna was exquisite… The grilled fish at the end had a soft texture with a rich miso flavor." — August 2026.', source: R + 'B534103384/' },
        { text: '"We started with fresh oysters, and I was surprised by their impressive size, followed by a luxurious assortment of sashimi." — May 2026, omakase.', source: R + 'B529065920/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 魚肴 しま田、大阪市中央区東心斎橋2-7-11 ほんまビル 3F、心斎橋・なんば駅から徒歩5分ほど、月〜土17:00〜23:00、日祝休み、コースは事前に連絡を、カード可、電子マネー・QR不可、11席(カウンター7、2〜4人の個室)、禁煙。口コミ(2025年1月〜2026年8月): 落ち着いた清潔な大人の和食店、気さくな大将、季節の食材、コースも一品も、奥の個室、新ごぼうの炊いたん、鮭の粕汁、刺身の盛り合わせ、白子の醤油焼き、カキフライ、魚料理、カウンターで大将が近い、エレベーターまで見送り、日本酒に合う肴、生牡蠣、おまかせ、Asai出身の大将、カウンターと小上がり、コースは10,000円から、剣先イカ・マグロ・鱧・和歌山の蛸、焼きそら豆、鮑、土瓶蒸し、味噌の焼き魚、えんがわはなかった。',
      confidence: 'medium', sources: [TB, R + 'B534103384/', R + 'B529065920/', R + 'B500235111/', R + 'B523978299/', R + 'B526577418/', R + 'B530775920/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seven-seat counter and a private room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-11 ほんまビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530775920/', R + 'B534103384/'],
    price_note: 'Courses from ¥10,000 (June 2026); reviewers spent ¥10,000–29,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', 'from ¥10,000', 'Courses', 'no', 'no', 'Book ahead; June 2026.', 'omakase'),
      it('', '', 'Assorted sashimi', '', 'Seafood', 'ask', 'no', 'June 2026.', 'sashimi'),
      it('', '', 'Dobin mushi', '', 'Seasonal', 'ask', 'no', 'August 2026.', 'dobinmushi'),
      it('', '', 'Fried oysters', '', 'Fried', 'no', 'no', 'January 2025.', 'kaki_fry'),
    ] }, {
    cuisine: '旬の魚と肴・おまかせは10,000円から(要予約)か一品料理・刺身の盛り合わせ: 剣先イカ、マグロ、鱧、和歌山の蛸・大ぶりの生牡蠣・白子の醤油焼き・カキフライ・鮑・土瓶蒸し・味噌の焼き魚・焼きそら豆・鮭の粕汁(1月)・日本酒・カウンター7席と個室',
    neighborhood: '中央区東心斎橋2-7-11 ほんまビル 3F。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油焼きや味噌焼きの魚、カキフライ。',
    vegan_detail: 'ヴィーガンではありません。魚介のカウンター。',
    notes: '[和食・東心斎橋の旬の魚のカウンター] 東心斎橋のビルの3階にある、旬の魚が中心の小さく落ち着いた和食店。大将は大阪の名店Asaiの出身で、雰囲気が似ていると感じた人も。一品料理か、10,000円からのおまかせを事前に予約して。刺身は剣先イカ、マグロ、鱧、和歌山の蛸など。1月の訪問では白子の醤油焼き、カキフライ、鮭の粕汁、8月には鮑、香り高い土瓶蒸し、締めに味噌の焼き魚。肴は日本酒向き。カウンターは距離が近く、ほかに客がいないと大将に会話を聞かれている気がしたという声も。帰りはエレベーターまで見送ってくれる。予算は10,000〜30,000円ほど。',
  });
}

// ================================================================ にほん酒や一路
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27089755/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['19:00', '02:00']), WE = day(['14:00', '23:59']);
  put({
    id: 'osaka_nihonshuya_ichiro', name: 'にほん酒や一路 (Ichiro)', category: 'OMNI',
    lat: 34.670461, lng: 135.502895, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura and soy-simmered dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal, sardines and chashu among the snacks. Pumpkin tempura has been on the menu (March 2026); ask about the batter and frying oil.',
    hours_raw: 'Mon–Fri 19:00–2:00 am; Sat–Sun 14:00–24:00; closes irregularly; hours may change (Tabelog). Holidays open from 14:00 (September 2026). QR accepted; no cards or e-money (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-12, White Bldg 302 — between Tatamiya-cho and Kasaya-cho',
    cuisine: 'Sake bar · rotating sake by the masu, about 180 ml for ¥800–1,000 · Ishizuchi, Utsukushihime, a limited Kujiranami · Japanese whisky · simmered Saga beef offal · tamahimo-ni · simmered sardines · chashu · firefly squid and pumpkin tempura · counter and a table, standing when full · sports on the TV',
    website: null, gmaps: gm('にほん酒や一路 東心斎橋'), menu_url: null,
    notes: "[Bar · a sake bar behind an unmarked third-floor door] A sake bar on the third floor of the White Building, open since 2015 behind a door that shows nothing of the inside, a little daunting at first. Inside are a counter, a table and a warm welcome. Sake pours by the masu, about a full 180 ml for ¥800–1,000, from labels such as Ishizuchi, Utsukushihime and a limited Kujiranami. The snacks stand out: simmered Saga beef offal that won over a tripe skeptic, tamahimo-ni, simmered sardines, chashu, and tempura of firefly squid or pumpkin. Weekdays bring regulars, weekends overseas visitors, and the TV shows baseball or racing. Weekends and holidays it opens at 2 pm for daytime drinking. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 27 November 2015 (Tabelog)', background: 'Sake bar; regulars on weekdays, overseas visitors on weekends, per the owner (December 2025 review).', philosophy: null, specialty: 'Sake with simmered offal.',
      anecdotes: [
        { text: '"The simmered offal is absolutely fantastic! It seems to be made with Saga beef offal… Especially the honeycomb tripe, which is one type of offal I usually dislike, but this completely changed my perception." — October 2025.', source: R + 'B514665921/' },
        { text: '"With prices under JPY 1000 for 180ml of sake, the cost performance is excellent!" — September 2026.', source: R + 'B521341676/' },
      ],
      japanese_sources_summary: '食べログ: にほん酒や一路、大阪市中央区東心斎橋2-7-12 ホワイトビル302、月〜金19:00〜翌2:00、土日14:00〜24:00、不定休、QR可、カード・電子マネー不可、10席(満席時は立ち飲み)、喫煙可、2015年11月27日開店。口コミ(2025年10月〜2026年10月): ホワイトビル3階、畳屋町と笠屋町の間、入口にカウンター・奥にテーブル、野球中継、ハートランドの瓶ビール、日本酒いろいろ、ホタルイカとかぼちゃの天ぷら、日本酒の日、玉ひも煮、チャーシュー、Kujiranamiの限定酒、Sagaの牛ホルモンの煮込み、ハチノス、祝日の15時に先客4人、競馬中継、Ishizuchi、いわしの煮付けとUtsukushihime、常連と外国人客、平日は常連・週末は外国人が多いと店主、日本酒は800〜1,000円、枡で一合ほど、ウイスキーも、土日祝は14時開店、ドアが中の見えない作りで入りにくい、温かく迎えてくれる、コスパがいい、品揃えが素晴らしい。',
      confidence: 'medium', sources: [TB, R + 'B514665921/', R + 'B521341676/', R + 'B194374214/', R + 'B205630192/', R + 'B515354490/', R + 'B519613204/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Overseas visitors common on weekends (December 2025); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-12 ホワイトビル302',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番12号 (go) 11m; same building as 焼鳥 無名 NO NAME; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519613204/', R + 'B514665921/'],
    price_note: 'Sake prices from December 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sake by the masu (about 180 ml)', '¥800–1,000', 'Drinks', 'ask', 'vegan', 'December 2025–September 2026.', 'sake'),
      it('', '', 'Simmered beef offal', '', 'Snacks', 'no', 'no', 'October 2025.', 'motsuni'),
      it('', '', 'Tamahimo-ni', '', 'Snacks', 'no', 'no', 'October 2026.', 'tamahimo'),
      it('', '', 'Simmered sardines', '', 'Snacks', 'no', 'no', 'October 2026.', 'iwashi_ni'),
      it('', '', 'Pumpkin tempura', '', 'Snacks', 'no', 'ask', 'March 2026.', 'kabocha_ten'),
    ] }, {
    cuisine: '日本酒バー・枡で一合ほど800〜1,000円の日替わりの日本酒・Ishizuchi、Utsukushihime、限定のKujiranami・ウイスキーも・Sagaの牛ホルモンの煮込み・玉ひも煮・いわしの煮付け・チャーシュー・ホタルイカとかぼちゃの天ぷら・カウンターとテーブル、満席時は立ち飲み・テレビでスポーツ中継',
    neighborhood: '中央区東心斎橋2-7-12 ホワイトビル302。畳屋町と笠屋町の間',
    gf_detail: '実際にはグルテンフリーではありません。天ぷらや醤油の煮物。',
    vegan_detail: 'ヴィーガンではありません。ホルモン、いわし、チャーシューなど。かぼちゃの天ぷらがあったことも(2026年3月)。衣と揚げ油は要確認。',
    notes: '[バー・中の見えない3階のドアの奥の日本酒バー] ホワイトビル3階にある2015年開店の日本酒バーで、中の見えないドアは最初は少し入りにくい。中にはカウンターとテーブル、温かい出迎え。日本酒は枡でたっぷり一合ほど800〜1,000円、Ishizuchi、Utsukushihime、限定のKujiranamiなど。肴も評判で、ハチノスが苦手な人も考えを改めたSagaの牛ホルモンの煮込み、玉ひも煮、いわしの煮付け、チャーシュー、ホタルイカやかぼちゃの天ぷら。平日は常連、週末は海外の客が多く、テレビでは野球や競馬。土日祝は14時から開いて昼飲みも。喫煙可。',
  });
}

// ================================================================ すてーきはうす寿々
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27042245/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.steak-jyu-jyu.com/';
  const D = day(['17:00', '22:30']);
  put({
    id: 'osaka_steak_house_juju', name: 'すてーきはうす寿々 (Steak House Juju)', category: 'OMNI',
    lat: 34.668779, lng: 135.499603, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: garlic soy sauce and ponzu with the steak.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak and seafood teppan counter.',
    hours_raw: 'Mon–Sat 17:00–22:30 (L.O. 21:30); closed Sunday (Tabelog). 10% service charge at dinner (Tabelog). Courses tailored to budget and occasion on request (Tabelog). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 2-1-7, Sun Dotonbori Bldg B1F — just west of Midosuji, 3 min from Namba Stn exit 25',
    cuisine: 'Teppanyaki steak counter · courses, such as a kuruma-ebi course ¥13,000 (2023) · Kagoshima tenderloin and chateaubriand with butter-crisped garlic, homemade garlic soy and ponzu · ribeye · live kuruma ebi, sazae and abalone from the tank · grilled vegetables and tofu · Hokkaido caciocavallo · salad with two homemade dressings · wine · 11 teppan counter seats',
    website: OWN, gmaps: gm('すてーきはうす寿々 道頓堀'), menu_url: null,
    notes: "[Steak · a quiet teppan counter on Dotonbori's west end] A basement teppanyaki counter just west of Midosuji, open since 2009, quieter than its Dotonbori address suggests and used for celebrations. Behind a heavy door, a veteran chef grills at the 11-seat counter and chats as the courses unfold. Expect a salad with two homemade dressings, grilled vegetables and tofu, live kuruma ebi from the tank (head and legs crisped for the wine), sazae, with abalone in the tank too, and a grilled Hokkaido caciocavallo. The main is Kagoshima tenderloin, with paper-thin garlic crisped in butter, homemade garlic soy and ponzu; one diner prefers it to the fattier ribeye. Reviewers spent about ¥8,000–15,000. A 10% service charge applies. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 March 2009 (Tabelog)', background: 'Teppanyaki counter; the chef grills and talks with guests (2023–2025 reviews); official site steak-jyu-jyu.com.', philosophy: null, specialty: 'Teppan tenderloin; kuruma ebi.',
      anecdotes: [
        { text: '"The steak was served with thinly sliced garlic grilled with a generous amount of butter and low heat… It was served with homemade garlic soy sauce, ponzu, and coarsely ground black pepper." — March 2023, Kagoshima chateaubriand.', source: R + 'B491152352/' },
        { text: '"The ribeye has a good amount of fat, but I recommend the tenderloin." — April 2025.', source: R + 'B511365318/' },
      ],
      japanese_sources_summary: '公式 steak-jyu-jyu.com。食べログ(店舗会員): すてーきはうす寿々、大阪市中央区道頓堀2-1-7 サン道頓堀ビル B1F、なんば駅25番出口から徒歩3分、月〜土17:00〜22:30(L.O.21:30)、日曜休み、ディナーはサービス料10%、カード可、電子マネー・QR不可、鉄板カウンター11席、2009年3月3日開店、予算や目的に合わせたコース、誕生日や記念日、接待にも。口コミ(2022年11月〜2026年9月): 御堂筋の西側で静か、お祝いに、地下の重い扉、12席ほどの鉄板カウンター、車海老のコース13,000円、90年代の洋楽、自家製ドレッシング2種のサラダ、ベテランの料理人、エリンギ・豆腐・菜の花・れんこん、水槽の九州産天然の車海老、頭や脚はパリパリに、サザエ、黒鮑、Hokkaidoのカチョカヴァロ、Kagoshimaのシャトーブリアン、バターで焼いた薄切りのにんにく、自家製のにんにく醤油、ポン酢、リブロースより赤身がおすすめ、落ち着いた雰囲気、特別な日に。',
      confidence: 'medium', sources: [TB, OWN, R + 'B491152352/', R + 'B511365318/', R + 'B474177200/', R + 'B522018384/', R + 'B535711262/', R + 'B535880643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Teppan counter; the chef talks with guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-1-7 サン道頓堀ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目1番7号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491152352/', R + 'B511365318/'],
    price_note: 'One course price from a March 2023 review; recent reviewers spent ¥8,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Kuruma-ebi course', '¥13,000', 'Courses', 'no', 'no', 'March 2023; check current prices.', 'kurumaebi_course'),
      it('', '', 'Kagoshima tenderloin', '', 'Steak', 'ask', 'no', 'March 2023–April 2025.', 'fillet'),
      it('', '', 'Grilled caciocavallo', '', 'Teppan', 'ask', 'no', 'March 2023.', 'caciocavallo'),
    ] }, {
    cuisine: '鉄板焼きのステーキカウンター・コース(2023年は車海老のコース13,000円)・バターで焼いたにんにくチップ、自家製にんにく醤油、ポン酢で食べるKagoshimaのヒレとシャトーブリアン・リブロース・水槽の活き車海老、サザエ、鮑・焼き野菜と豆腐・Hokkaidoのカチョカヴァロ・自家製ドレッシング2種のサラダ・ワイン・鉄板カウンター11席',
    neighborhood: '中央区道頓堀2-1-7 サン道頓堀ビル B1F。御堂筋のすぐ西、なんば駅25番出口から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。ステーキににんにく醤油とポン酢。',
    vegan_detail: 'ヴィーガンではありません。ステーキと魚介の鉄板カウンター。',
    notes: '[ステーキ・道頓堀の西の静かな鉄板カウンター] 御堂筋のすぐ西にある地下の鉄板焼きカウンターで、2009年開店、道頓堀という住所のわりに静かでお祝いにも使われる。重い扉の奥の11席のカウンターで、ベテランの料理人が会話を交えながらコースを焼いていく。自家製ドレッシング2種のサラダ、焼き野菜と豆腐、水槽の活き車海老(頭や脚はパリパリでワインに)、サザエ(水槽には鮑も)、焼いたHokkaidoのカチョカヴァロ。メインはKagoshimaのヒレで、バターで焼いた薄切りのにんにく、自家製にんにく醤油とポン酢で。脂の多いリブロースより赤身をすすめる声も。予算は8,000〜15,000円ほど。サービス料10%。日曜定休。',
  });
}

// ================================================================ 鮨 極
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125330/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://susi-kiwami.com/';
  put({
    id: 'osaka_sushi_kiwami_higashishinsaibashi', name: '鮨 極 (Sushi Kiwami)', category: 'OMNI',
    lat: 34.670841, lng: 135.502683, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy sauce, tempura and a sukiyaki-style pot in the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi kaiseki course.',
    hours_raw: 'Daily 18:00–23:00; closes irregularly, see Instagram (Tabelog). 10% service charge (Tabelog). Reserve by phone (Tabelog). Cards accepted; no e-money or QR (Tabelog).',
    hours: ALL(day(['18:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-7-22, Nippo Silky Tower 1F (at the back) — 4 min from Shinsaibashi Stn',
    cuisine: 'Edomae sushi kaiseki · omakase ¥22,000, 15–18 items · fig tempura with ginger · kombu-cured flounder and botan shrimp · shima-aji · seared scallop roll in nori with sudachi · Hokkaido uni in a glass · kinmedai, nodoguro, toro, marinated akami · seasonal tempura · sukiyaki-style pot with cotton candy · toro-taku roll to finish · wasanbon pudding · counter and private tables · 14 seats',
    website: OWN, gmaps: gm('鮨 極 東心斎橋'), menu_url: null,
    notes: "[Sushi · a sushi kaiseki counter in Higashi-Shinsaibashi] A modern sushi counter at the back of a building's ground floor, open since 2021 behind a noren, with amber light on the counter and private tables with sliding doors. The ¥22,000 omakase runs 15 to 18 items, mixing Edomae sushi with kaiseki dishes. It opens with fig tempura and ginger. Then come kombu-cured flounder and botan shrimp, shima-aji, a fragrant seared scallop roll with sudachi, and Hokkaido uni served in a glass. Kinmedai, nodoguro, toro and marinated akami follow, with seasonal tempura and a sukiyaki-style pot where cotton candy melts in. It closes with a toro-taku roll and a wasanbon pudding. A 10% service charge applies. Hard to find; reserve by phone.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2021 (Tabelog)', background: 'Sushi kaiseki counter (Tabelog, staff-maintained); official site susi-kiwami.com.', philosophy: null, specialty: 'Omakase sushi kaiseki.',
      anecdotes: [
        { text: '"The sukiyaki-style hot pot was served with cotton candy to dissolve, adding a fun visual element to the experience." — September 2026, omakase.', source: R + 'B535376715/' },
        { text: '"The course offered not only sushi but also a variety of Japanese dishes, culminating in a homemade wasanbon pudding for dessert." — September 2026, ¥22,000 omakase.', source: R + 'B535836758/' },
      ],
      japanese_sources_summary: '公式 susi-kiwami.com。食べログ(店舗会員): 鮨 極、大阪市中央区東心斎橋2-7-22 日宝シルキータワー 1F、心斎橋駅から南へ徒歩4分、御堂筋の八幡町交差点を東へ200m、毎日18:00〜23:00、不定休(Instagramで確認)、サービス料10%、カード可、電子マネー・QR不可、14席、2021年9月1日開店、予約は電話で。口コミ(2026年9〜10月): ビル1階の奥の隠れ家、暖簾、和モダンの店内、琥珀色の照明のカウンター、襖で仕切れるテーブル席、おまかせ、季節の前菜、刺身2種、一品2品、握り10貫、特製うに丼、旬の天ぷら、すき焼き風の鍋に綿あめ、焼き帆立の海苔巻きにすだち、Hokkaidoの生うにをグラスで、金目鯛の炙り、トロ、漬けの赤身、トロたく巻き、おまかせ鮨懐石22,000円、無花果の天ぷらと生姜、平目の昆布締め、縞鯵、牡丹海老の昆布締め、紫うに、のどぐろ、ねぎとろ、和三盆のプリン、15〜18品。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535376715/', R + 'B535836758/', R + 'B506703113/', R + 'B535619697/', R + 'B537307574/', R + 'B537998967/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private tables; reserve by phone (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-22 日宝シルキータワー 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番22号 (go) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535619697/', R + 'B537998967/'],
    price_note: 'Course price from September–October 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase sushi kaiseki course', '¥22,000', 'Courses', 'no', 'no', 'September–October 2026.', 'omakase'),
      it('', '', 'Toro-taku roll', '', 'Sushi', 'ask', 'no', 'In the course; October 2026.', 'toro_taku'),
    ] }, {
    cuisine: '江戸前の鮨懐石・おまかせ22,000円、15〜18品・無花果の天ぷらと生姜・平目と牡丹海老の昆布締め・縞鯵・すだちを添えた焼き帆立の海苔巻き・グラスで出すHokkaidoのうに・金目鯛、のどぐろ、トロ、漬けの赤身・旬の天ぷら・綿あめを溶かすすき焼き風の鍋・締めはトロたく巻き・和三盆のプリン・カウンターと個室のテーブル・14席',
    neighborhood: '中央区東心斎橋2-7-22 日宝シルキータワー 1F奥。心斎橋駅から徒歩4分',
    gf_detail: '実際にはグルテンフリーではありません。コースに醤油、天ぷら、すき焼き風の鍋。',
    vegan_detail: 'ヴィーガンではありません。鮨懐石のコース。',
    notes: '[鮨・東心斎橋の鮨懐石のカウンター] ビル1階の奥、暖簾の向こうにある2021年開店の和モダンな鮨店で、琥珀色の照明のカウンターと襖で仕切れるテーブル席。22,000円のおまかせは15〜18品で、江戸前の握りと懐石の一品を織り交ぜる。無花果の天ぷらと生姜に始まり、平目と牡丹海老の昆布締め、縞鯵、すだちを添えた香ばしい焼き帆立の海苔巻き、グラスで出るHokkaidoのうに。続いて金目鯛、のどぐろ、トロ、漬けの赤身、旬の天ぷら、綿あめを溶かすすき焼き風の鍋。締めはトロたく巻きと和三盆のプリン。サービス料10%。わかりにくい場所なので、予約は電話で。',
  });
}

save();
