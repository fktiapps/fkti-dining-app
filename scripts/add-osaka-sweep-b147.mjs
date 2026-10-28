// Osaka sweep (2-mile circle around Dotonbori), batch 147 — mom / small-shop phase (all OMNI).
//   + 帆洲 (kushiage skewer courses and ¥1,200 fried lunch sets by Yotsubashi; same address as Ramen Shion and MARL, offset)
//   + 鮨 よつ葉 (8-seat Edomae sushi counter with a wine cellar; Kitahorie)
//   + 好呷 (Taiwanese ji pai fried-chicken bento and lu rou fan; Shimanouchi)
//   + 浪花オムライス (6-seat omurice counter: demi-glace omurice topped with dote-ni; Minami-Senba; same building as IKR51, offset)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 147);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 帆洲
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27005906/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:00', '14:00'], ['17:00', '22:50']); const DN = day(['17:00', '22:50']);
  put({
    id: 'osaka_hanshu_kitahorie', name: '帆洲 (Hanshu)', category: 'OMNI',
    lat: 34.674477, lng: 135.496708, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer and cutlet is battered in flour and breadcrumbs.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat skewers; egg in the batter likely — ask.',
    hours_raw: 'Mon, Tue, Wed, Fri 11:00–14:00 and 17:00–22:50; Thu and Sat 17:00–22:50; closed Sun; public holidays dinner only, irregular (Tabelog). Last entry 21:00–21:30, last order 22:25 (Tabelog). Thursday lunch paused from 2025 (Tabelog). Reservations online or by phone (Tabelog). Cards and QR (PayPay, Alipay and others) accepted (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: DN, 4: LD, 5: DN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-6-4, Abite Yotsubashi, under a big shrimp sign — 50 m south of Yotsubashi Stn exit 4',
    cuisine: 'Kushiage (fried skewers) · courses of 10 or 15 skewers, changeable as you go: e.g. conger eel, shrimp, squid, tomato and cheese, sausage, chicken breast with shiso, pork, beef, chicken wings, whiting, a takoyaki skewer in broth, dessert skewers; an omakase course of creative kushiage · table condiments: sauce, ponzu, rock salt, ketchup, mustard, lemon · lunch sets: Set A large fried shrimp and tenderloin cutlet ¥1,200; pork loin cutlet set ¥1,200 with rice, miso soup, chilled tofu and pickles; a limited ¥800 service lunch · counter and private rooms for 2–8; 20 seats',
    website: null, gmaps: gm('帆洲'), menu_url: null,
    notes: "[Kushiage · fried skewer courses and big-shrimp lunches by Yotsubashi] A quiet, modern kushiage restaurant under a big shrimp sign just south of Yotsubashi Station. At night, order a course of 10 or 15 small, carefully fried skewers (you can change the count along the way): seasonal conger eel, juicy shrimp, tomato with cheese, chicken with shiso, beef, even a takoyaki skewer in broth and dessert skewers, paced to how fast you eat, with six condiments from sauce to rock salt. Lunch is a fried-food bargain: a huge shrimp and a tenderloin cutlet for ¥1,200, or a crisp pork loin cutlet set watched from the counter. Private rooms. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kushiage restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kushiage courses; fried lunch sets.',
      anecdotes: [
        { text: '"Seasonal conger eel, the obligatory shrimp, and squid. This was my first time trying conger eel skewers! They were fluffy and delicious." — June 2026, 10-piece course changed to 15.', source: R + 'B530401067/' },
        { text: '"The pork loin cutlet was coated in finely ground breadcrumbs, giving it a classic finish, with a crispy and light texture." — June 2026, Pork Loin Cutlet Set Meal ¥1,200.', source: R + 'B531068158/' },
      ],
      japanese_sources_summary: '食べログ: 帆洲、大阪市西区北堀江1-6-4 アビテ四ツ橋、四ツ橋駅4番出口から南へ50m、月・火・水・金 11:00〜14:00・17:00〜22:50、木・土 17:00〜22:50、日曜休み、祝日は夜のみ (不定)、入店は21:00〜21:30まで、L.O. 22:25、2025年から木曜の昼は休み、予約はネットか電話、カード・QR (PayPay、Alipay など) 可、20席、2〜8名の個室。口コミ(2026年6〜9月): 大きな海老の看板、10本か15本の串のコース (途中で変更可)、季節の穴子、海老、イカ、トマトとチーズ、ソーセージ、大葉の鶏むね、豚、牛、手羽、だしの takoyaki の串、デザートの串、キス、創作の串揚げのおまかせ、卓上にソース・ポン酢・岩塩・ケチャップ・からし・レモン、食べる速さに合わせて出す、昼は大海老とヒレかつの A セット1,200円、ロースかつ定食1,200円 (ご飯、味噌汁、冷ややっこ、漬物)、限定のサービスランチ800円、静かでモダンな店。',
      confidence: 'medium', sources: [TB, R + 'B530401067/', R + 'B530469589/', R + 'B531068158/', R + 'B533528929/', R + 'B533561828/', R + 'B536607153/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses can be changed as you go; pace adjusted (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-4 アビテ四ツ橋',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.674477, 135.496631); same address as Ramen Shion Horie and MARL (osaka_ramen_shion_horie, osaka_marl_kitahorie), pin offset ~7 m east so the three do not stack; GSI 大阪府大阪市西区北堀江一丁目6番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530469589/', R + 'B531068158/', R + 'B533561828/'],
    price_note: 'Lunch prices from June–August 2026 reviews; course prices not given.', last_checked: TODAY, items: [
      it('', '', 'Kushiage course, 10 or 15 skewers', '', 'Courses', 'no', 'no', 'June 2026.', 'course'),
      it('', '', 'Set A: large fried shrimp and tenderloin cutlet', '¥1,200', 'Lunch', 'no', 'no', 'June 2026.', 'set_a'),
      it('', '', 'Pork loin cutlet set', '¥1,200', 'Lunch', 'no', 'no', 'June 2026.', 'rosu'),
      it('', '', 'Limited service lunch', '¥800', 'Lunch', 'no', 'no', 'August 2026.', 'service'),
    ] }, {
    cuisine: '串揚げ・10本か15本のコース、途中で変更できる: たとえば穴子、海老、イカ、トマトとチーズ、ソーセージ、大葉の鶏むね、豚、牛、手羽、キス、だしの takoyaki の串、デザートの串。創作の串揚げのおまかせも・卓上にソース、ポン酢、岩塩、ケチャップ、からし、レモン・昼のセット: 大海老とヒレかつの A セット1,200円、ご飯・味噌汁・冷ややっこ・漬物つきのロースかつ定食1,200円、限定のサービスランチ800円・カウンターと2〜8名の個室、20席',
    neighborhood: '西区北堀江1-6-4 アビテ四ツ橋、大きな海老の看板。四ツ橋駅4番出口から南へ50m',
    gf_detail: 'グルテンフリーではありません。どの串もかつも小麦粉とパン粉の衣。',
    vegan_detail: 'ヴィーガンではありません。魚介と肉の串、衣に卵を使っていそうなので確認を。',
    notes: '[串揚げ・四ツ橋、串揚げのコースと大海老の昼] 四ツ橋駅のすぐ南、大きな海老の看板の下にある静かでモダンな串揚げ店。夜はていねいに揚げた小ぶりの串を10本か15本のコースで (途中で本数を変えられる): 季節の穴子、ぷりぷりの海老、トマトとチーズ、大葉の鶏、牛、だしの takoyaki の串やデザートの串まで、食べる速さに合わせて出てきて、ソースから岩塩まで6種の調味料で。昼は揚げ物がお得で、大きな海老とヒレかつで1,200円、カウンターから揚げる様子を見ながらさくさくのロースかつ定食も。個室あり。日曜休み。',
  });
}

// ================================================================ 鮨 よつ葉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139716/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_yotsuba_kitahorie', name: '鮨 よつ葉 (Sushi Yotsuba)', category: 'OMNI',
    lat: 34.673484, lng: 135.494537, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce on the nigiri; chawanmushi dashi. Tell the restaurant when booking and ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase; egg in the chawanmushi.',
    hours_raw: 'Tue–Sun 18:00–23:00, last entry 20:30; closed Mon; Sat–Sun lunch seatings at 12:00 and 12:30 (end time not listed), with irregular weekend closings (Tabelog). Reserve at your own start time (August 2026). Cards (VISA, Master, JCB, AMEX) accepted; no e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-15-9, Kiei Bldg 1F — 3 min from Yotsubashi Stn exit 6',
    cuisine: 'Edomae sushi omakase · weekend lunch omakase nigiri ¥6,600 with chawanmushi · dinner omakase · precise knife work · a wall-to-wall wine cellar; sake and wine to pair · 8 counter seats',
    website: null, gmaps: gm('鮨 よつ葉'), menu_url: null,
    notes: "[Sushi · an eight-seat Edomae counter with a wine cellar, Kitahorie] A clean, elegant eight-seat sushi counter in Kitahorie, part of a small group of sushi shops, known for good value and careful Edomae technique. You book your own start time rather than a fixed sitting. The knife work stands out, changing how each piece of fish feels and melts, and a wall of wine faces the counter, so wine and sake pair easily with the nigiri. Weekend lunch is the gentle way in at ¥6,600 for omakase nigiri. Conversation at the counter is relaxed and friendly. One diner found the rice a bit dry and one the chawanmushi weak. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Part of a group with Sushi Shinnosuke (Sakaisuji Honmachi) and Homura (August 2026 reviews).', background: 'Edomae sushi counter (Tabelog; 2026 reviews).', philosophy: 'Care at every step, from choosing fish to rice, serving order and knife work (August 2026 review citing the shop).', specialty: 'Edomae nigiri omakase.',
      anecdotes: [
        { text: '"While eating the nigiri, I noticed how beautifully the knife work was done… the way they were cut made a significant difference in texture and how they melted in my mouth." — August 2026, lunch omakase nigiri ¥6,600.', source: R + 'B536301650/' },
        { text: '"Upon entering, I was amazed by the impressive wall-to-wall wine cellar." — August 2026.', source: R + 'B534859191/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 よつ葉、大阪市西区北堀江1-15-9 輝栄ビル 1F、四ツ橋駅6番出口から徒歩3分、火〜日 18:00〜23:00 (最終入店20:30)、月曜休み、土・日は不定休で昼は12:00・12:30から、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR不可、8席。口コミ(2026年8〜10月): 堺筋本町の Sushi Shinnosuke や Homura と同じグループ、江戸前の握り、好きな時間に予約できる、昼のおまかせの握り6,600円と茶碗蒸し、ていねいな包丁仕事、壁一面のワインセラー、日本酒とワイン、清潔で上品な店、気さくなカウンター、シャリが少し乾いていた・茶碗蒸しが物足りないという声、お得感。',
      confidence: 'medium', sources: [TB, R + 'B533825442/', R + 'B534226093/', R + 'B534859191/', R + 'B535707923/', R + 'B536301650/', R + 'B537999261/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed counter conversation (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-15-9 輝栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目15番9号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534226093/', R + 'B536301650/'],
    price_note: 'Lunch price from August 2026 reviews; dinner JPY 15,000–19,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch omakase nigiri', '¥6,600', 'Courses', 'no', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Dinner omakase', '', 'Courses', 'no', 'no', 'August–October 2026.', 'dinner'),
    ] }, {
    cuisine: '江戸前鮨のおまかせ・週末の昼のおまかせの握り6,600円と茶碗蒸し・夜のおまかせ・ていねいな包丁仕事・壁一面のワインセラー、合わせる日本酒とワイン・カウンター8席',
    neighborhood: '西区北堀江1-15-9 輝栄ビル 1F。四ツ橋駅6番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。握りに醤油、茶碗蒸しのだし。予約の際に伝えて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚のおまかせ、茶碗蒸しに卵。',
    notes: '[鮨・北堀江、ワインセラーのある8席の江戸前のカウンター] 北堀江の清潔で上品な8席の鮨カウンターで、いくつかの鮨店のグループのひとつ、お得感とていねいな江戸前の仕事で知られる。予約は好きな時間に入れられる。包丁仕事が際立ち、魚の食感やとろけ方が変わる。カウンターの向かいは壁一面のワインで、握りにワインも日本酒も合わせやすい。入りやすいのは週末の昼で、おまかせの握り6,600円。カウンターの会話は気さくで和やか。シャリが少し乾いていた、茶碗蒸しが物足りないという声も。月曜休み。',
  });
}

// ================================================================ 好呷
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27082084/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:30', '21:30']); const WE = day(['11:30', '21:30']);
  put({
    id: 'osaka_ho_ja_shimanouchi', name: '好呷 (Ho ja)', category: 'OMNI',
    lat: 34.671761, lng: 135.509902, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the ji pai is coated in tapioca flour (2018 review), but marinades, the special sauce, soy-based lu rou and fried sides are unconfirmed.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork and squid mains; the fried king oyster mushrooms and salt-pepper broccoli may be meat-free — ask.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:30–21:30; Sat, Sun and public holidays 11:30–21:30; open year-round (Tabelog). QR ordering at the table; takeout and delivery (2026). No cards; e-money and PayPay accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-6-33, on Suomachi-dori at the edge of Shimanouchi — about 10 min from Nagahoribashi Stn',
    cuisine: 'Taiwanese street food and bento · ji pai, the big Taiwanese fried chicken cutlet of pounded breast in a thin coating, with salt-pepper or the sweet special sauce · ji pai bento in an aluminium box with rice (large free) and sides such as cabbage, bean sprouts, thick fried tofu and a boiled egg · lu rou fan; steamed chicken & lu rou bento ¥1,230 · fried squid · Taiwanese kara-age on a long skewer · thigh kara-age set · radish cake · fried king oyster mushrooms; salt-pepper broccoli ¥400 · Taiwanese-style yakitori · tapioca milk tea, Taiwanese apple soda ¥390, iced Dong Ding oolong ¥380 · 10 seats: a table for four and a wall counter',
    website: null, gmaps: gm('好呷'), menu_url: null,
    notes: "[Taiwanese · Taiwanese fried-chicken bento and lu rou fan, Shimanouchi] A small, cute Taiwanese street-food shop on the edge of Shimanouchi, done up like a Taiwanese school lunchroom, with aluminium bento boxes and a menu in the style of a school notebook. The order is ji pai, a big, thin cutlet of pounded chicken breast fried crisp and juicy, in salt-pepper or the sweet special sauce, as a bento over rice with lightly seasoned vegetables, thick fried tofu and egg. The shredded-pork lu rou fan is just as good, and the radish cake and apple soda round it out. Order by QR code; lots of takeout and delivery. Open every day.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Taiwanese street-food and bento shop (Tabelog; 2022–2026 reviews).', philosophy: null, specialty: 'Ji pai; lu rou fan.',
      anecdotes: [
        { text: '"The decor is inspired by Taiwanese elementary school students, with lunch boxes used as dishes and a cute Asian-themed menu designed like a school notebook." — September 2022.', source: R + 'B454217451/' },
        { text: '"The Lu Rou is not greasy at all and is shredded, making it easier to eat than cubed meat. When paired with pickled cabbage and daikon, it adds a refreshing touch…" — June 2026.', source: R + 'B529968567/' },
      ],
      japanese_sources_summary: '食べログ: 好呷、大阪市中央区島之内2-6-33、月〜金 11:30〜14:30・17:30〜21:30、土・日・祝 11:30〜21:30、年中無休、カード不可、電子マネー・PayPay 可、10席、喫煙可。口コミ(2022年9月〜2026年10月): 周防町通の島之内のはずれ、台湾の小学校の給食のような内装、アルミの弁当箱、ノートのようなメニュー、薄くのばした鶏むねの大きな ji pai (塩こしょうか甘い特製のたれ)、ご飯 (大盛り無料) とキャベツ・もやし・厚揚げ・ゆで卵の弁当、lu rou fan、蒸し鶏と lu rou の弁当1,230円、イカのフライ、長い串の台湾の kara-age、もも肉の kara-age のセット、大根餅、エリンギのフライ、塩こしょうのブロッコリー400円、台湾風の焼き鳥、タピオカミルクティー、台湾のりんごのソーダ390円、Dong Ding の烏龍茶380円、テーブルの QR で注文、持ち帰りと配達も、敷かれたシートが可愛い、店の名前は台湾語で「おいしい」という意味だという声。',
      confidence: 'medium', sources: [TB, R + 'B365530290/', R + 'B454217451/', R + 'B529968567/', R + 'B532744888/', R + 'B536399602/', R + 'B538040389/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; friendly staff (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-6-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目6番33号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538040389/', R + 'B454217451/', R + 'B365530290/'],
    price_note: 'Prices from 2023–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ji pai bento, special sauce', '', 'Bento', 'ask', 'no', 'September 2026.', 'jipai_sauce'),
      it('', '', 'Ji pai, salt and pepper', '', 'Fried chicken', 'ask', 'no', 'April 2026.', 'jipai_salt'),
      it('', '', 'Steamed chicken & lu rou bento', '¥1,230', 'Bento', 'ask', 'no', 'October 2026.', 'lurou_bento'),
      it('', '', 'Lu rou fan', '', 'Rice', 'ask', 'no', 'June 2026.', 'lurou'),
      it('', '', 'Radish cake', '', 'Sides', 'ask', 'ask', 'July 2026.', 'radish'),
      it('', '', 'Taiwanese apple soda', '¥390', 'Drinks', 'ask', 'ask', 'April 2026.', 'apple'),
    ] }, {
    cuisine: '台湾の屋台料理と弁当・ji pai: たたいてのばした鶏むねを薄い衣で揚げた大きな台湾のフライドチキン、塩こしょうか甘い特製のたれ・アルミの弁当箱の ji pai 弁当、ご飯 (大盛り無料) とキャベツ、もやし、厚揚げ、ゆで卵など・lu rou fan、蒸し鶏と lu rou の弁当1,230円・イカのフライ・長い串の台湾の kara-age・もも肉の kara-age のセット・大根餅・エリンギのフライ、塩こしょうのブロッコリー400円・台湾風の焼き鳥・タピオカミルクティー、台湾のりんごのソーダ390円、冷たいDong Ding の烏龍茶380円・10席: 4名のテーブルと壁沿いのカウンター',
    neighborhood: '中央区島之内2-6-33、周防町通の島之内のはずれ。長堀橋駅から10分ほど',
    gf_detail: '確認を。ji pai の衣はタピオカ粉 (2018年の口コミ) だが、下味、特製のたれ、醤油の lu rou、揚げ物のサイドは未確認。',
    vegan_detail: 'ヴィーガンではありません。鶏、豚、イカのメイン。エリンギのフライと塩こしょうのブロッコリーは肉なしかもしれないので確認を。',
    notes: '[台湾料理・島之内、台湾のフライドチキンの弁当と lu rou fan] 島之内のはずれにある小さくてかわいい台湾の屋台料理の店で、台湾の小学校の給食のような内装に、アルミの弁当箱とノートのようなメニュー。頼むのは ji pai: たたいてのばした鶏むねをさくっとジューシーに揚げた大きなかつで、塩こしょうか甘い特製のたれ、やさしい味の野菜と厚揚げと卵のご飯の弁当で。細切りの豚の lu rou fan も負けずおいしく、大根餅やりんごのソーダも。注文はテーブルの QR で、持ち帰りや配達も多い。年中無休。',
  });
}

// ================================================================ 浪花オムライス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27057271/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_naniwa_omurice_minamisenba', name: '浪花オムライス (Naniwa Omurice)', category: 'OMNI',
    lat: 34.676515, lng: 135.501092, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: demi-glace sauce is usually flour-based; hamburg steak with breadcrumbs.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg omurice with beef-tendon dote-ni; meat in the demi-glace likely.',
    hours_raw: 'Mon 11:00–15:00 and 17:30–22:00; Tue 12:00–16:00 and 18:00–22:30; Wed 11:00–16:00 and 17:00–22:00; Thu 12:00–16:00 and 17:00–23:00; Fri–Sat 12:00–15:00 and 18:00–21:00; Sun 12:00–20:00 (Tabelog). Cash only (Tabelog). Short waits at weekend lunch (September 2026).',
    hours: { 0: day(['11:00', '15:00'], ['17:30', '22:00']), 1: day(['12:00', '16:00'], ['18:00', '22:30']), 2: day(['11:00', '16:00'], ['17:00', '22:00']), 3: day(['12:00', '16:00'], ['17:00', '23:00']), 4: day(['12:00', '15:00'], ['18:00', '21:00']), 5: day(['12:00', '15:00'], ['18:00', '21:00']), 6: day(['12:00', '20:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-11-27, Nippo Silver Bldg 1F, on a back street — 2 min from Shinsaibashi Stn exit 1',
    cuisine: 'Osaka-style omurice · the signature Naniwa Omurice: soft egg over rice in demi-glace, topped with slow-cooked beef-tendon dote-ni and green onion · with cheese · sizes SS, S and regular (even SS is filling); rice amount and toppings to choose · dote-ni on the side, large size · handmade hamburg steak; beef steak when available · 6 counter seats',
    website: null, gmaps: gm('浪花オムライス'), menu_url: null,
    notes: "[Omurice · demi-glace omurice topped with dote-ni, Minami-Senba] A tiny six-seat counter on a back street near Shinsaibashi that puts an Osaka spin on omurice. The Naniwa Omurice sets fluffy egg in a rich demi-glace and crowns it with tender, slow-cooked beef-tendon dote-ni and green onion, so the sweet egg, deep sauce and savory tendon melt together. Add cheese if you like, choose your rice amount and toppings, and note that even the SS size fills you up. There's a handmade hamburg steak and a side of dote-ni too. Busy at lunch; expect a short wait. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Omurice counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Omurice with dote-ni.',
      anecdotes: [
        { text: '"Golden eggs float in a sea of rich demi-glace sauce, topped with tender, slow-cooked beef tendon and a sprinkle of green onions." — August 2026.', source: R + 'B456540558/' },
        { text: '"I thought it would be more Japanese-style, but surprisingly, the base was a Western-style demi-glace that paired well with the Dote-ni!" — July 2026, Naniwa Omurice.', source: R + 'B531963408/' },
      ],
      japanese_sources_summary: '食べログ: 浪花オムライス、大阪市中央区南船場3-11-27 日宝シルバービル1F、心斎橋駅1番出口から徒歩2分、月 11:00〜15:00・17:30〜22:00、火 12:00〜16:00・18:00〜22:30、水 11:00〜16:00・17:00〜22:00、木 12:00〜16:00・17:00〜23:00、金・土 12:00〜15:00・18:00〜21:00、日 12:00〜20:00、現金のみ、カウンター6席。口コミ(2026年7〜10月): 裏通りの店、看板の浪花オムライス (ふわふわの卵、濃いデミグラス、じっくり煮た牛すじの dote-ni とねぎ)、チーズ入りも、SS・S・並のサイズ (SS でも満腹)、ご飯の量とトッピングを選べる、dote-ni の単品 (大)、手ごねハンバーグ、牛ステーキは売り切れのことも、昼は混む、週末は少し待つ。',
      confidence: 'medium', sources: [TB, R + 'B220702492/', R + 'B456540558/', R + 'B531963408/', R + 'B532201807/', R + 'B534998341/', R + 'B534998351/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose size and toppings (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-11-27 日宝シルバービル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.676578, 135.501092); same building as IKR51 (osaka_ikr51_minamisenba), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区南船場三丁目11番27号 (go) 15m; OSM 浪花オムライス node/10570379433 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B220702492/', R + 'B531963408/'],
    price_note: 'No prices in the reviews; JPY 1,000–2,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('浪花オムライス', '', 'Naniwa Omurice (demi-glace, dote-ni)', '', 'Omurice', 'no', 'no', 'July–August 2026; sizes SS, S, regular.', 'naniwa'),
      it('', '', 'Naniwa Omurice with cheese', '', 'Omurice', 'no', 'no', 'October 2026.', 'cheese'),
      it('', '', 'Dote-ni, large', '', 'Sides', 'ask', 'no', 'October 2026.', 'doteni'),
      it('', '', 'Handmade hamburg steak', '', 'Sides', 'no', 'no', 'October 2026.', 'hamburg'),
    ] }, {
    cuisine: '大阪風のオムライス・看板の浪花オムライス: ご飯にやわらかい卵、デミグラス、じっくり煮た牛すじの dote-ni とねぎ・チーズ入りも・サイズは SS、S、並 (SS でも満腹)、ご飯の量とトッピングを選べる・dote-ni の単品 (大)・手ごねハンバーグ、ある日は牛ステーキ・カウンター6席',
    neighborhood: '中央区南船場3-11-27 日宝シルバービル1F、裏通り。心斎橋駅1番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。デミグラスはふつう小麦粉を使う、ハンバーグにパン粉。',
    vegan_detail: 'ヴィーガンではありません。卵のオムライスに牛すじの dote-ni、デミグラスにも肉を使っていそう。',
    notes: '[オムライス・南船場、dote-ni をのせたデミグラスのオムライス] 心斎橋近くの裏通りにある6席だけの小さなカウンターで、オムライスを大阪風に。浪花オムライスはふわふわの卵を濃いデミグラスに浮かべ、じっくり煮たやわらかい牛すじの dote-ni とねぎをのせたもので、卵の甘さとソースのコクと牛すじのうまみがとけ合う。好みでチーズを足し、ご飯の量とトッピングも選べるが、SS でも満腹になる。手ごねハンバーグや dote-ni の単品も。昼は混むので少し待つことも。現金のみ。',
  });
}

save();
