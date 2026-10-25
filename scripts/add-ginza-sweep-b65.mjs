// Ginza Station half-mile sweep (805 m), batch 65 — the four fetched in b64 (all OMNI).
//   + パパミラノ 東京国際フォーラム店 (Dynac chain; QR ordering; pre-show lunches)
//   + マイアミ・ヴィッラ 有楽町イトシアプラザ店 (Miami Garden chain; 90-min limit)
//   + イタリアンダイニングDONA 有楽町店 (towafood-net chain; homemade fresh pasta; ¥1,000 wine + appetizer set)
//   + oasis GRILL & ITALIAN (Nordic-style old house, all private/semi-private rooms; late night)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ パパミラノ 東京国際フォーラム店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13010970/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_papa_milano_forum', name: 'パパミラノ 東京国際フォーラム店 (Papa Milano)', category: 'OMNI',
    lat: 35.676759, lng: 139.76346,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, pizza, lasagna and doria lead the menu, alongside a green salad, ajillo and fritto; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood doria, shrimp dishes, chicken fritto, cheese pastas; the green salad is the only plant-based dish described.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog). QR-code ordering (paper menu on request).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo International Forum B1F, Marunouchi 3-chōme — by Yūrakuchō Stn',
    cuisine: 'Casual Italian chain · pasta, half-and-half pizza, seafood doria, cold pasta · open all day · ¥2,000–3,000', cuisine_type: 'other',
    website: 'https://www.dynacjapan.com/brands/papamilano/shops/kokusai-folum/', gmaps: gm('パパミラノ 東京国際フォーラム'), menu_url: null,
    notes: "[Italian · Tokyo International Forum basement] A 60-seat branch of the long-running Papa Milano chain in the basement of the Tokyo International Forum, open all day and busy before shows. There's a queue before opening on concert days, so book. You order by QR code (paper menu on request), and a large central table suits solo diners. In August 2026 a regular paid ¥748 for a green salad, ¥1,078 for shrimp, eryngii and sun-dried-tomato ajillo with baguette, ¥1,628 for shrimp and avocado Genovese cream pasta and ¥1,738 for a half-and-half pizza. Others had the seafood doria, a summer cold pasta with espuma, lasagna, chicken fritto, an Italian omelette and eggplant and stracciatella tomato spaghetti.",
    chef_bio: { chef_name: null, roles: [], origin: 'Chain branch (opening date not given)', background: 'Chain-run (Dynac).', philosophy: null, specialty: 'Pasta; pizza.',
      anecdotes: [
        { text: '"Shrimp, Eringi Mushrooms, and Sun-Dried Tomato Ajillo (served with 2 slices of baguette) JPY 1,078… Half & Half Pizza JPY 1,738." — August 2026.', source: R + 'B436990978/' },
        { text: '"I visited before a performance at the International Forum… many people were lined up even before opening, so I was glad I made a reservation." — August 2026.', source: R + 'B534427700/' },
      ],
      japanese_sources_summary: '食べログ: パパミラノ 東京国際フォーラム店、千代田区丸の内3-5-1 東京国際フォーラムB1F、60席、毎日11:00〜22:00、運営 Dynac(dynacjapan.com)。2026年の口コミ: グリーンサラダ748円、海老とエリンギとドライトマトのアヒージョ(バゲット2枚)1,078円、海老とアボカドのジェノベーゼクリーム1,628円、ハーフ&ハーフのピザ1,738円、魚介のドリア、エスプーマの冷製パスタ、ラザニア、鶏のフリット、イタリアンオムレツ、茄子とストラッチャテッラのトマトスパゲッティ、QRコードで注文(紙のメニューも)、公演前は開店前から行列。',
      confidence: 'medium', sources: [TB, R + 'B436990978/', R + 'B534427700/', R + 'B534073769/', R + 'B536901731/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; book before Forum events.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内3-5-1 東京国際フォーラム B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内三丁目5番 (lot) 38m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B436990978/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('グリーンサラダ', 'guriin sarada', 'Green salad', '¥748', 'Salads', 'ask', 'ask', 'August 2026.', 'green_salad'),
      it('海老とエリンギとドライトマトのアヒージョ', '', 'Shrimp, eryngii and sun-dried-tomato ajillo with baguette', '¥1,078', 'Appetizers', 'no', 'no', 'August 2026.', 'ajillo'),
      it('海老とアボカドのジェノベーゼクリーム', '', 'Shrimp and avocado Genovese cream pasta', '¥1,628', 'Pasta', 'no', 'no', 'August 2026.', 'genovese_cream'),
      it('ハーフ&ハーフピザ', '', 'Half-and-half pizza', '¥1,738', 'Pizza', 'no', 'no', 'August 2026.', 'half_pizza'),
    ] }, {
    cuisine: '気軽なイタリアンのチェーン・パスタ、ハーフ&ハーフのピザ、魚介のドリア、冷製パスタ・通し営業・2,000〜3,000円',
    neighborhood: '東京国際フォーラムB1F、丸の内三丁目。有楽町駅のそば',
    gf_detail: '要確認。パスタ、ピザ、ラザニア、ドリアが中心で、グリーンサラダ、アヒージョ、フリットもありますが、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介のドリア、海老の料理、鶏のフリット、チーズのパスタ。植物性の料理として書かれているのはグリーンサラダだけです。',
    notes: '[イタリアン・東京国際フォーラムの地下] 老舗チェーン、パパミラノの東京国際フォーラム地下の60席の店で、通し営業。公演前は混み、コンサートの日は開店前から行列ができるので予約がおすすめ。注文はQRコード(紙のメニューも)、中央の大テーブルは一人でも座りやすい。2026年8月の常連の注文は、グリーンサラダ748円、バゲット付きの海老とエリンギとドライトマトのアヒージョ1,078円、海老とアボカドのジェノベーゼクリーム1,628円、ハーフ&ハーフのピザ1,738円。ほかに魚介のドリア、夏のエスプーマの冷製パスタ、ラザニア、鶏のフリット、イタリアンオムレツ、茄子とストラッチャテッラのトマトスパゲッティなど。',
  });
}

// ================================================================ マイアミ・ヴィッラ 有楽町イトシアプラザ店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13055172/'; const R = TB + 'dtlrvwlst/';
  const a = day(['09:00', '21:00']), b = day(['09:00', '22:00']);
  put({
    id: 'tokyo_miami_villa_itocia', name: 'マイアミ・ヴィッラ 有楽町イトシアプラザ店 (Miami Villa)', category: 'OMNI',
    lat: 35.674315, lng: 139.763415,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: pasta sets and pizza; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: bacon pastas and salads, mozzarella; no vegan option is mentioned.',
    hours_raw: 'Mon–Thu and Sun 9:00–21:00; Fri–Sat 9:00–22:00 (Tabelog). 90-minute limit (2026 review). Terrace seating.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: b, 5: b, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō Itocia 1F (Itocia Plaza) — 1 min from JR Yūrakuchō central exit',
    cuisine: 'Casual Italian chain · ¥1,500 pasta lunch sets with salad and coffee · pizza · from 9 a.m.', cuisine_type: 'other',
    website: 'http://miami-garden.jp/', gmaps: gm('マイアミ・ヴィッラ 有楽町イトシア'), menu_url: null,
    notes: "[Italian · Yūrakuchō station-front chain] A 60-seat branch of the Miami Garden group's Italian chain, with a terrace, right outside Yūrakuchō Station. It opens at 9 a.m. and is often nearly full at weekday lunch. Lunch sets of about ¥1,500 include salad and coffee. 2026 diners had a salty, soupy Japanese-style pasta, a takana and bacon soy pasta, tomato and mozzarella pasta, Margherita pizza and spinach and bacon salad. Reviewers call the food average for the location. There's a 90-minute limit, and service ranges from quick and efficient to cool.",
    chef_bio: { chef_name: null, roles: [], origin: 'Chain branch (opening date not given)', background: 'Chain-run (miami-garden.jp).', philosophy: null, specialty: 'Pasta lunch sets.',
      anecdotes: [
        { text: '"The lunch set, which included coffee and salad, was around JPY 1500. The service was quick." — August 2026.', source: R + 'B534554032/' },
        { text: '"The atmosphere inside is calming, but please note that there is a 90-minute time limit." — September 2026.', source: R + 'B536154422/' },
      ],
      japanese_sources_summary: '食べログ: マイアミ・ヴィッラ 有楽町イトシアプラザ店、千代田区有楽町2-7-1 有楽町イトシア1F、JR有楽町駅中央口から徒歩1分、60席(テラス席あり)、月〜木・日9:00〜21:00、金土9:00〜22:00、公式サイト miami-garden.jp。2026年の口コミ: サラダとコーヒー付きのランチセット約1,500円、和風パスタ(しょっぱめでスープパスタに近い)、高菜とベーコンの醤油、トマトとモッツァレラのパスタ、マルゲリータ、ほうれん草とベーコンのサラダ、平日昼もほぼ満席、90分制、味はふつう、接客は手際よい・愛想がないと分かれる。',
      confidence: 'low', sources: [TB, R + 'B534554032/', R + 'B536154422/', R + 'B535853182/', R + 'B530213212/'] },
    cultural_comfort: { level: 'konnichiwa', note: '90-minute limit; quick chain lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-7-1 有楽町イトシア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目7番 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534554032/'],
    price_note: 'Lunch price from an August 2026 review.', last_checked: TODAY, items: [
      it('パスタのランチセット', '', 'Pasta lunch set with salad and coffee', '¥1,500', 'Lunch', 'no', 'no', 'About ¥1,500, August 2026.', 'pasta_lunch'),
      it('マルゲリータ', 'marugeriita', 'Margherita pizza', '', 'Pizza', 'no', 'no', '', 'margherita'),
    ] }, {
    cuisine: '気軽なイタリアンのチェーン・サラダとコーヒー付きのパスタランチ1,500円・ピザ・朝9時から',
    neighborhood: '有楽町イトシア1F(イトシアプラザ)。JR有楽町駅中央口から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。パスタのセットとピザで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ベーコンのパスタやサラダ、モッツァレラで、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・有楽町駅前のチェーン] 有楽町駅前、マイアミガーデン系列のテラス席もある60席のイタリアンで、朝9時から営業。平日の昼もほぼ満席。ランチセットは約1,500円でサラダとコーヒー付き。2026年の客は、しょっぱめでスープパスタに近い和風パスタ、高菜とベーコンの醤油、トマトとモッツァレラのパスタ、マルゲリータ、ほうれん草とベーコンのサラダなど。味は場所相応にふつうという声。90分制で、接客は手際よいという声と愛想がないという声があります。',
  });
}

// ================================================================ イタリアンダイニングDONA 有楽町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13046017/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:30']);
  put({
    id: 'tokyo_dona_yurakucho', name: 'イタリアンダイニングDONA 有楽町店', category: 'OMNI',
    lat: 35.674151, lng: 139.76322,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the draw is house-made fresh wheat pasta; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: cod-roe, squid, sea-urchin pastas, pâté, salmon, mozzarella.',
    hours_raw: 'Daily 11:00–22:30 (L.O. 22:00); closures follow Yūrakuchō Itocia (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō Itocia B1F — 1 min from JR Yūrakuchō',
    cuisine: 'Fresh-pasta chain · chewy house-made pasta with domestic vegetables · lunch with soup or salad and drink · ¥1,000 wine + appetizer set', cuisine_type: 'other',
    website: 'https://www.towafood-net.co.jp/shop/dona/', gmaps: gm('イタリアンダイニングDONA 有楽町イトシア'), menu_url: null,
    notes: "[Italian · fresh-pasta chain] A 71-seat branch of the Dona chain in the basement of Yūrakuchō Itocia, open since 2007, with a checkered interior. Fresh pasta is made at the company's own facility and delivered to the shop. Lunch adds salad or soup (pumpkin potage in October 2026) and a drink. 2026 diners had squid, shiso and nori tarako pasta (¥1,150), a mushroom and shiso soy pasta made spicy, and a sea-urchin and asparagus tomato pasta with tiramisu. The ¥1,000 wine set lets you pick appetizers such as tomato and mozzarella, pâté and salmon. One diner noticed dust by the windows.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 October 2007 (Tabelog); chain branch', background: 'Chain-run (towafood-net.co.jp).', philosophy: 'Healthy fresh pasta with domestic vegetables (Tabelog listing).', specialty: 'Fresh pasta.',
      anecdotes: [
        { text: '"Squid, Shiso, and Nori (Tarako) JPY 1150… The fresh pasta had a nice chewy texture." — October 2026.', source: R + 'B535110256/' },
        { text: '"One surprising highlight here is the wine and appetizer set. You can choose each appetizer individually… All of this for just JPY 1,000!" — October 2026.', source: R + 'B537412308/' },
      ],
      japanese_sources_summary: '食べログ: イタリアンダイニングDONA 有楽町店、千代田区有楽町2-7-1 有楽町イトシアB1F、71席、毎日11:00〜22:30、休みはイトシアに準ずる、2007年10月12日開店、運営 towafood-net.co.jp。店の紹介: もちもちの自家製生パスタを店舗へ直送、国産野菜たっぷり、手頃なワインと小皿、生ハム。2026年の口コミ: ランチはサラダかスープとドリンク付き(かぼちゃのポタージュ)、イカと大葉と海苔のたらこ1,150円、キノコと大葉の醤油を辛めに、雲丹とアスパラのトマトソースとティラミス、ワインと前菜のセット1,000円(トマトとモッツァレラ、パテ、サーモン)、チェック柄の内装、窓際にほこりとの声も。',
      confidence: 'medium', sources: [TB, R + 'B535110256/', R + 'B537412308/', R + 'B521023667/', R + 'B536500348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick chain; solo friendly.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-7-1 有楽町イトシア B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目7番 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535110256/', R + 'B537412308/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('イカと大葉と海苔のたらこ', '', 'Squid, shiso and nori tarako fresh pasta', '¥1,150', 'Pasta', 'no', 'no', 'October 2026.', 'squid_tarako'),
      it('ワインと前菜のセット', '', 'Wine with choice of appetizers (tomato-mozzarella, pâté, salmon…)', '¥1,000', 'Sets', 'ask', 'no', 'October 2026.', 'wine_set'),
      it('雲丹とアスパラのトマトソース', '', 'Sea-urchin and asparagus tomato fresh pasta', '', 'Pasta', 'no', 'no', '', 'uni_asparagus'),
    ] }, {
    cuisine: '生パスタのチェーン・国産野菜たっぷりのもちもち自家製生パスタ・スープかサラダとドリンク付きのランチ・ワインと前菜のセット1,000円',
    neighborhood: '有楽町イトシアB1F。JR有楽町駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。売りは小麦の自家製生パスタで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。たらこ、イカ、雲丹のパスタ、パテ、サーモン、モッツァレラ。',
    notes: '[イタリアン・生パスタのチェーン] 有楽町イトシア地下、チェック柄の内装の71席のDONAチェーンの店で、2007年開店。生パスタは自社で作って店舗に直送。ランチはサラダかスープ(2026年10月はかぼちゃのポタージュ)とドリンク付き。2026年の客は、イカと大葉と海苔のたらこ(1,150円)、辛めにしたキノコと大葉の醤油、雲丹とアスパラのトマトソースとティラミスなど。ワインのセット(1,000円)はトマトとモッツァレラ、パテ、サーモンなどの前菜を選べます。窓際にほこりが気になったという声も。',
  });
}

// ================================================================ oasis GRILL & ITALIAN
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13051665/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '02:00']);
  put({
    id: 'tokyo_oasis_grill_italian_ginza1', name: 'oasis GRILL & ITALIAN (オアシス グリル＆イタリアン)', category: 'OMNI',
    lat: 35.674914, lng: 139.766633,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled Wakahime beef and angel shrimp sit beside Italian courses; no source describes the dishes or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: grilled beef and shrimp courses.',
    hours_raw: 'Mon–Thu 18:00–02:00 (food L.O. 24:00); Fri 18:00–03:00; Sat 18:00–23:00; closed Sundays and holidays; summer closure 8–16 August (Tabelog). No lunch. Two-hour limit when busy.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: day(['18:00', '03:00']), 5: day(['18:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 1-chōme, 1-4-8 1F, down an alley — near Ginza-itchōme Stn',
    cuisine: 'Grill and Italian in a Nordic-style old house · every table in a private or semi-private room · free-flow party courses · late night', cuisine_type: 'other',
    website: null, gmaps: gm('oasis GRILL & ITALIAN 銀座1-4-8'), menu_url: null,
    notes: "[Grill and Italian · hideaway house down a Ginza 1-chōme alley] A whole old house fitted out in Nordic folk style, down a hard-to-find alley, open since 1999. Every booking gets a private or semi-private room, 72 seats in all, including a basement room good for loud groups, though tall diners found it low and warm. The menu features tender Wakahime beef, angel shrimp and hearty grilled dishes, mostly as courses with free-flow drinks (¥12,100 for three hours in October 2026) and customisable drinks. Portions are generous, and staff warn you if the next dish will take a while. Dinner only, open late.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 November 1999 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Grilled beef; private-room parties.',
      anecdotes: [
        { text: '"The all-you-can-drink course for JPY 12,100 for three hours is fantastic." — October 2026, basement private room.', source: R + 'B537089858/' },
        { text: '"The entrance is tucked away down an alley, giving it a hidden gem vibe… they would let us know if there might be a bit of a wait for the next dish." — September 2026.', source: R + 'B535064168/' },
      ],
      japanese_sources_summary: '食べログ: oasis GRILL & ITALIAN(オアシス グリル＆イタリアン)、銀座1-4-8 1F、72席(混雑時は2時間制)、月〜木18:00〜翌2:00、金は翌3:00まで、土18:00〜23:00、日祝休、8月8日〜16日は夏季休業、ランチなし、1999年11月19日開店。店の紹介: 北欧風の古民家を一軒まるごと、予約は全て個室か半個室、若姫牛、天使の海老、グリル料理。2026年の口コミ: 路地の奥で見つけにくい、地下の個室は天井が低く暑かった、飲み放題付きのコース、3時間飲み放題のコース12,100円、ドリンクをカスタマイズ、量が多い、料理の待ち時間を教えてくれる、大人数の人数変更にも柔軟。',
      confidence: 'low', sources: [TB, R + 'B537089858/', R + 'B535064168/', R + 'B534863656/', R + 'B536485546/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; hard to find — use the map.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-4-8 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目4番8号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537089858/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('3時間飲み放題付きコース', '', 'Course with 3-hour free-flow', '¥12,100', 'Courses', 'ask', 'no', 'October 2026.', 'course_3h'),
    ] }, {
    cuisine: '北欧風の古民家のグリル&イタリアン・全席個室か半個室・飲み放題付きの宴会コース・深夜営業',
    neighborhood: '銀座一丁目、1-4-8 1F、路地の奥。銀座一丁目駅の近く',
    gf_detail: '要確認。若姫牛や天使の海老のグリルとイタリアンのコースですが、料理の内容やグルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。牛肉や海老のグリルのコースです。',
    notes: '[グリル&イタリアン・銀座一丁目の路地奥の隠れ家] 見つけにくい路地の奥、古民家を一軒まるごと北欧の民家風にした店で、1999年開店。予約は全て個室か半個室で計72席。地下の個室は騒いでも気にならず大人数向きですが、背の高い客には天井が低く暑かったそう。若姫牛、天使の海老、ボリュームのあるグリル料理を、主に飲み放題付きのコースで(2026年10月は3時間12,100円)、ドリンクはカスタマイズも可能。量はたっぷりで、料理に時間がかかるときは前もって教えてくれます。夜のみ、深夜まで営業。',
  });
}

save();
