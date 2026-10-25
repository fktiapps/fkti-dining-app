// Ginza Station half-mile sweep (805 m), batch 71 — the last five of the non-Japanese filter (all OMNI).
//   + ザ・グラン銀座 ギャラリー (GINZA SIX 13F banquet venue + café; Napoleon pie)
//   + サイゼリヤ 銀座インズ店 (Saizeriya chain)
//   + LA PIAZZETTA (EATALY GINZA, GINZA SIX 6F aperitivo and wine bar)
//   + フレッシュネスバーガー 汐留シティセンター店 (chain; weekdays only)
//   + 肉とパスタと酒 (Takasaki-style big pasta, Shiodome Yokochō food hall; opened 2026-07-16)
// With these, the non-Japanese mp_cache filter is exhausted.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ザ・グラン銀座 ギャラリー
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13225344/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_grand_ginza_gallery_six', name: 'ザ・グラン銀座 ギャラリー (The Grand Ginza Gallery)', category: 'OMNI',
    lat: 35.669703, lng: 139.763665,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the café signature is a puff-pastry Napoleon pie; banquet buffets and courses are not described in detail.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: cream and custard Napoleon pie, fish courses.',
    hours_raw: 'Daily 11:00–16:00 and 17:00–22:00 (Tabelog). Also used as a wedding and banquet hall.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'GINZA SIX 13F, Ginza 6-chōme — near Ginza Stn',
    cuisine: 'GINZA SIX 13th-floor café-restaurant and banquet venue · strawberry Napoleon pie · party buffets and full courses', cuisine_type: 'french',
    website: null, gmaps: gm('ザ・グラン銀座 GINZA SIX 13F'), menu_url: null,
    notes: "[French · GINZA SIX café and banquet venue] A spacious 13th-floor restaurant at GINZA SIX that doubles as a wedding and party hall. As a café, it's known for its Napoleon pie: crisp layers of pastry with fresh cream, custard and ripe strawberries, with milk tea. A weekend evening table was easy to get in May 2026. Families with small children have room to relax. At events it serves buffets and full courses; one October 2026 guest singled out the fish. A champagne toast is common, and one diner wished for non-alcoholic beer.",
    chef_bio: { chef_name: null, roles: [], origin: 'GINZA SIX 13F (opening date not given)', background: 'Banquet and wedding venue with a restaurant-café.', philosophy: null, specialty: 'Napoleon pie.',
      anecdotes: [
        { text: '"The Napoleon pie was wonderfully crispy, filled with fresh cream, custard, and sweet, ripe strawberries." — May 2026.', source: R + 'B531858638/' },
        { text: '"The restaurant is located on the 13th floor and is also used as a banquet hall for weddings." — September 2026.', source: R + 'B535529095/' },
      ],
      japanese_sources_summary: '食べログ: ザ・グラン銀座 ギャラリー、銀座6-10-1 GINZA SIX 13F、毎日11:00〜16:00・17:00〜22:00。2026年の口コミ: ナポレオンパイ(サクサクの生地、生クリーム、カスタード、苺)とミルクティー、週末の夜も入りやすかった、広くて子ども連れでもくつろげる、シャンパーニュで乾杯、ノンアルコールビールが欲しい、結婚式場や宴会場としても使われる、ビュッフェ、コースの魚料理が美味しい。',
      confidence: 'low', sources: [TB, R + 'B531858638/', R + 'B535529095/', R + 'B537760759/', R + 'B532592731/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Spacious; good with small children.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 13F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目10番1号 (go) 40m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531858638/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('ナポレオンパイ', 'naporeon pai', 'Strawberry Napoleon pie (puff pastry, cream, custard)', '', 'Café', 'no', 'no', 'May 2026.', 'napoleon_pie'),
    ] }, {
    cuisine: 'GINZA SIX 13階のカフェレストランと宴会場・苺のナポレオンパイ・パーティーのビュッフェやコース',
    neighborhood: 'GINZA SIX 13F、銀座六丁目。銀座駅の近く',
    gf_detail: '実際上グルテンフリーではありません。カフェの名物はパイ生地のナポレオンパイで、宴会のビュッフェやコースの内容は詳しく書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。生クリームとカスタードのナポレオンパイ、魚のコース。',
    notes: '[フレンチ・GINZA SIXのカフェと宴会場] GINZA SIXの13階、結婚式やパーティーの会場も兼ねる広いレストラン。カフェとしてはナポレオンパイが名物で、サクサクのパイ生地に生クリーム、カスタード、熟した苺を重ね、ミルクティーと。2026年5月は週末の夜でもすぐ入れたそう。小さな子ども連れでもゆったり過ごせます。イベントではビュッフェやコースで、2026年10月の客は魚料理を絶賛。シャンパーニュでの乾杯が定番で、ノンアルコールビールが欲しかったという声も。',
  });
}

// ================================================================ サイゼリヤ 銀座インズ店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13133664/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:15']);
  put({
    id: 'tokyo_saizeriya_ginza_inz', name: 'サイゼリヤ 銀座インズ店 (Saizeriya)', category: 'OMNI',
    lat: 35.673951, lng: 139.764268,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a pasta, pizza, doria and focaccia family restaurant; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: doria, cod-roe and squid-ink pasta, hamburg, chicken, escargot.',
    hours_raw: 'Daily 11:00–23:15 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Inz 1 2F, under the expressway — by Yūrakuchō Stn',
    cuisine: 'Italian family-restaurant chain · Milanese doria, pasta, Margherita, spicy chicken · cheap house wine by the decanter', cuisine_type: 'other',
    website: 'http://www.saizeriya.co.jp/', gmaps: gm('サイゼリヤ 銀座インズ店'), menu_url: null,
    notes: "[Family restaurant · budget Italian chain by Yūrakuchō] A Saizeriya on the second floor of Ginza Inz 1 by Yūrakuchō Station, open since 2011 and busy with visitors from around the world. Expect a 20-minute wait at peak. The classics are Milanese doria, squid-ink pasta, cod-roe spaghetti with nori, Margherita pizza, spicy chicken, shrimp salad, focaccia and escargot. A decanter of white wine and draft beer keep a group lunch for three at just over ¥5,000. Reviewers find some dishes bland or greasy, but the value is unbeatable.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 November 2011 (Tabelog); chain branch', background: 'Chain-run (Saizeriya).', philosophy: null, specialty: 'Milanese doria.',
      anecdotes: [
        { text: '"We ordered… the classic Milanese-style Doria, squid ink pasta, and a hamburger set, along with two pints of draft beer and a decanter of white wine. For three people… just a little over JPY 5,000!" — August 2026.', source: R + 'B535011073/' },
        { text: '"When I arrived, there were about 10 groups ahead of me, and I waited for around 20 minutes." — October 2026.', source: R + 'B537652525/' },
      ],
      japanese_sources_summary: '食べログ: サイゼリヤ 銀座インズ店、中央区銀座西3-1 銀座インズ1 2F、毎日11:00〜23:15、2011年11月17日開店。2026年の口コミ: ミラノ風ドリア、イカ墨のパスタ、ハンバーグ、生ビールと白ワインのデカンタで3人5,000円強、たらこソースのスパゲッティと刻み海苔、マルゲリータ、辛味チキン、小エビのサラダ、フォッカチオ、エスカルゴは油っぽい、イカ墨は味が薄いとの声、10組待ちで約20分、世界中の人が来る。',
      confidence: 'medium', sources: [TB, R + 'B535011073/', R + 'B537440399/', R + 'B537652525/', R + 'B536414431/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy chain; expect a short queue at peak.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座西3-1 銀座インズ1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matched only 東京都中央区銀座 (ward) — 銀座西 Inz address; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535011073/'],
    price_note: 'Group total from an August 2026 review; item prices not captured.', last_checked: TODAY, items: [
      it('ミラノ風ドリア', 'mirano fuu doria', 'Milanese-style doria', '', 'Mains', 'no', 'no', '', 'doria'),
      it('たらこソースのスパゲッティ', '', 'Cod-roe sauce spaghetti with nori', '', 'Pasta', 'no', 'no', '', 'tarako'),
      it('辛味チキン', 'karami chikin', 'Spicy chicken', '', 'Sides', 'ask', 'no', '', 'spicy_chicken'),
    ] }, {
    cuisine: 'イタリアンのファミリーレストランのチェーン・ミラノ風ドリア、パスタ、マルゲリータ、辛味チキン・デカンタの安いハウスワイン',
    neighborhood: '銀座インズ1 2F、高速道路の下。有楽町駅のそば',
    gf_detail: '実際上グルテンフリーではありません。パスタ、ピザ、ドリア、フォッカチオのファミリーレストランで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ドリア、たらこやイカ墨のパスタ、ハンバーグ、チキン、エスカルゴ。',
    notes: '[ファミリーレストラン・有楽町そばの手頃なイタリアンのチェーン] 有楽町駅そばの銀座インズ1の2階にあるサイゼリヤで、2011年開店。世界中から来た客でにぎわい、ピーク時は20分ほど待つことも。定番はミラノ風ドリア、イカ墨のパスタ、刻み海苔のたらこソースのスパゲッティ、マルゲリータ、辛味チキン、小エビのサラダ、フォッカチオ、エスカルゴ。白ワインのデカンタと生ビールで、3人の昼飲みが5,000円強。味が薄い、油っぽいという料理もありますが、お得さは抜群です。',
  });
}

// ================================================================ LA PIAZZETTA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13269376/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_la_piazzetta_eataly_ginza6', name: 'LA PIAZZETTA (ラ・ピアツェッタ)', category: 'OMNI',
    lat: 35.669677, lng: 139.763918,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An Eataly aperitivo bar with burgers, pasta, salads and layered desserts; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: chicken burger, seafood salad.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:00) (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'GINZA SIX 6F, inside EATALY GINZA — 255 m from Ginza Stn',
    cuisine: 'Eataly’s aperitivo and wine bar · Miyazaki hebesu cocktails and chicken burger · seafood salad, pasta · layered desserts', cuisine_type: 'other',
    website: 'https://www.eataly.co.jp/', gmaps: gm('LA PIAZZETTA EATALY GINZA SIX'), menu_url: null,
    notes: "[Italian · Eataly's aperitivo bar at GINZA SIX] One of three Italian dining options inside EATALY GINZA on the sixth floor of GINZA SIX, opened in 2021. At the entrance you choose between this aperitivo and wine bar, the pasta-and-pizza restaurant and the grill. The bar has a counter (good for solo diners), hanging greenery and a slightly different menu, so it often has no wait. In 2026 it featured hebesu citrus from Miyazaki: a hebesu gin and tonic, a gimlet, and a sautéed chicken burger with hebesu to squeeze over. Seafood salad, pasta, Italian beer and an eye-catching layered dessert are also on offer. Reasonably priced for GINZA SIX.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 August 2021 (Tabelog)', background: 'Part of EATALY (eataly.co.jp).', philosophy: null, specialty: 'Aperitivo; seasonal regional features.',
      anecdotes: [
        { text: '"Upon entering, you are asked to choose which restaurant you would like to visit… Since I was dining alone, I was advised that the counter seating at LA PIAZZETTA APERITIVO AND WINE BAR would be a good choice." — September 2026.', source: R + 'B535364497/' },
        { text: '"I enjoyed a Hebesu gin and tonic and a gimlet, both of which beautifully highlighted the aroma of the ingredients." — August 2026.', source: R + 'B533977771/' },
      ],
      japanese_sources_summary: '食べログ: LA PIAZZETTA(ラ・ピアツェッタ)、銀座6-10-1 GINZA SIX 6F、銀座駅から255m、毎日11:00〜21:00、2021年8月25日開店、公式サイト eataly.co.jp。2026年の口コミ: EATALY GINZA内、入口で3つの店(LA PIAZZETTA APERITIVO AND WINE BAR、LA PASTA e LA PIZZA、LA GRIGLIA)から選ぶ、一人ならカウンター、宮崎のへべすのジントニックとギムレット、へべすのチキンソテーバーガー、シーフードサラダ、イタリアのビール、層になったデザート、GINZA SIXにしては手頃。',
      confidence: 'medium', sources: [TB, R + 'B535364497/', R + 'B533977771/', R + 'B535417794/', R + 'B536426638/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick the bar at the Eataly entrance; counter for solo diners.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目10番1号 (go) 57m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535364497/', R + 'B533977771/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–6,000.', last_checked: TODAY, items: [
      it('へべすのジントニック', '', 'Miyazaki hebesu gin and tonic', '', 'Drinks', 'gf', 'ask', 'August 2026.', 'hebesu_gt'),
      it('へべすのチキンソテーバーガー', '', 'Sautéed chicken burger with Miyazaki hebesu', '', 'Food', 'no', 'no', 'September 2026.', 'chicken_burger'),
      it('シーフードサラダ', 'shiifuudo sarada', 'Seafood salad', '', 'Food', 'ask', 'no', '', 'seafood_salad'),
    ] }, {
    cuisine: 'EATALYのアペリティーヴォとワインバー・宮崎のへべすのカクテルとチキンバーガー・シーフードサラダ、パスタ・層のデザート',
    neighborhood: 'GINZA SIX 6F、EATALY GINZA内。銀座駅から255m',
    gf_detail: '要確認。バーガー、パスタ、サラダ、層のデザートなどのEATALYのアペリティーヴォバーで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。チキンバーガー、シーフードサラダ。',
    notes: '[イタリアン・GINZA SIXのEATALYのアペリティーヴォバー] GINZA SIX 6階のEATALY GINZAにある3つの店のひとつで、2021年開店。入口でこのアペリティーヴォとワインバー、パスタとピザの店、グリルの店から選びます。バーはカウンター(一人向き)と吊るされた緑が印象的で、メニューも少し違うので待たずに入れることが多いそう。2026年は宮崎のへべすを特集し、へべすのジントニックやギムレット、へべすを搾って食べるチキンソテーバーガーなど。シーフードサラダ、パスタ、イタリアのビール、見た目も華やかな層のデザートも。GINZA SIXにしては手頃です。',
  });
}

// ================================================================ フレッシュネスバーガー 汐留シティセンター店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13227650/'; const R = TB + 'dtlrvwlst/';
  const d = day(['08:00', '21:00']);
  put({
    id: 'tokyo_freshness_burger_shiodome', name: 'フレッシュネスバーガー 汐留シティセンター店 (FRESHNESS BURGER)', category: 'OMNI',
    lat: 35.665839, lng: 139.760958,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on buns; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Wagyu and avocado-cheese burgers; the garden salad burger is not described as plant-based.',
    hours_raw: 'Mon–Fri 8:00–21:00; closed Saturdays, Sundays and holidays (Tabelog). Happy hour with beer (2026 review).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shiodome City Center 1F food court, Higashi-Shimbashi — near Shiodome and Shimbashi Stns',
    cuisine: 'Burger chain · Wagyu burger, classic avocado cheese, garden salad burger · lotus-root fries · rosehip tea · weekdays only', cuisine_type: 'other',
    website: 'https://www.freshnessburger.co.jp/', gmaps: gm('フレッシュネスバーガー 汐留シティセンター'), menu_url: null,
    notes: "[Burgers · Shiodome City Center food court, weekdays only] A Freshness Burger in the ground-floor food court of Shiodome City Center, open since 2018 and closed on weekends. Seats are hard to find at 1 p.m., and the tables are all for two. 2026 orders included a Wagyu burger, a classic avocado cheese burger set with fries and cola (about ¥1,300 even with an app coupon), a garden salad burger on a soft, sweet bun, lotus-root and potato fries, and the chain's rosehip tea. Happy hour brings beer and fries. Condiments sit by the till.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 October 2018 (Tabelog); chain branch', background: 'Chain-run (Freshness Burger).', philosophy: null, specialty: 'Burgers.',
      anecdotes: [
        { text: '"Classic Avocado Cheese Burger Set with French Fries and Cola (Total: JPY 1,322)… it was disappointing that there were no available seats in the food court even during the 1 PM hour." — October 2026.', source: R + 'B536889222/' },
        { text: '"We shared the side dishes of lotus root fries and potato fries… I also love the rose hip tea from Freshness Burger." — October 2026.', source: R + 'B538008448/' },
      ],
      japanese_sources_summary: '食べログ: フレッシュネスバーガー 汐留シティセンター店、港区東新橋1-5-2 汐留シティセンター1F、平日8:00〜21:00、土日祝休、2018年10月9日開店。2026年の口コミ: ハッピーアワーにフライドポテトとビール(北海道ポテトは品切れ)、黒毛和牛のバーガー、クラシックアボカドチーズバーガーのセット1,322円(アプリのクーポン込み)、13時はフードコートの席が空かない、2人席ばかり、ガーデンサラダバーガー、れんこんのフライとポテト、ローズヒップティー。',
      confidence: 'medium', sources: [TB, R + 'B536889222/', R + 'B538008448/', R + 'B535907086/', R + 'B516135192/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter service; food-court seating.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0021 東京都港区東新橋1-5-2 汐留シティセンター 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区東新橋一丁目5番 (lot) 46m (large complex); 707 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536889222/'],
    price_note: 'Set price from an October 2026 review (with app coupon).', last_checked: TODAY, items: [
      it('クラシックアボカドチーズバーガーセット', '', 'Classic avocado cheese burger set with fries and cola', '¥1,322', 'Burgers', 'no', 'no', 'With app coupon, October 2026.', 'avocado_set'),
      it('黒毛和牛バーガー', '', 'Black Wagyu burger', '', 'Burgers', 'no', 'no', '', 'wagyu_burger'),
      it('れんこんフライ', 'renkon furai', 'Lotus-root fries', '', 'Sides', 'ask', 'ask', '', 'lotus_fries'),
    ] }, {
    cuisine: 'バーガーチェーン・黒毛和牛バーガー、クラシックアボカドチーズ、ガーデンサラダバーガー・れんこんフライ・ローズヒップティー・平日のみ',
    neighborhood: '汐留シティセンター1Fのフードコート、東新橋。汐留駅・新橋駅の近く',
    gf_detail: 'グルテンフリーではありません。バンズのバーガーで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。和牛やアボカドチーズのバーガー。ガーデンサラダバーガーも植物性とは書かれていません。',
    notes: '[バーガー・汐留シティセンターのフードコート、平日のみ] 汐留シティセンター1階のフードコートにあるフレッシュネスバーガーで、2018年開店、週末は休み。13時台は席を見つけにくく、テーブルは2人席ばかり。2026年の注文は、黒毛和牛のバーガー、ポテトとコーラ付きのクラシックアボカドチーズバーガーのセット(アプリのクーポンを使っても約1,300円)、ふんわり甘いバンズのガーデンサラダバーガー、れんこんとポテトのフライ、定番のローズヒップティーなど。ハッピーアワーにはビールとポテトも。調味料はレジ横に。',
  });
}

// ================================================================ 肉とパスタと酒
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13324758/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:00'], ['17:00', '22:30']), we = day(['11:00', '18:00']);
  put({
    id: 'tokyo_niku_pasta_sake_shiodome', name: '肉とパスタと酒 (Niku to Pasta to Sake)', category: 'OMNI',
    lat: 35.664886, lng: 139.762492,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Takasaki-style big-portion wheat pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meatball pasta.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:00–22:30; Sat, Sun and holidays 11:00–18:00 (Tabelog). Mobile ordering in the shared food hall.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Caretta Shiodome B2F, Shiodome Yokochō food hall — 4 min from Shiodome Stn, underground from Shimbashi',
    cuisine: 'Takasaki-style big pasta · 600 g meatball pasta ¥1,628 · in the Shiodome Yokochō food hall · opened July 2026', cuisine_type: 'other',
    website: null, gmaps: gm('肉とパスタと酒 カレッタ汐留 汐留横丁'), menu_url: null,
    notes: "[Pasta · Takasaki-style giant portions in Shiodome Yokochō] A pasta counter that opened on 16 July 2026 in the Shiodome Yokochō food hall, two floors below Caretta Shiodome, bringing the huge pasta portions of Takasaki in Gunma to Tokyo. The signature is the 'Shiawase no Meatball Pasta Haruna Mori': 600 g of pasta under a lighter-than-expected tomato sauce and meatballs, ¥1,628 with organic rooibos tea, served in about 10 minutes. You take a seat in the shared hall and order by phone from any of its shops; weekends are quiet.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 July 2026 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Meatball pasta, Takasaki style.',
      anecdotes: [
        { text: '"I ordered the \'Shiawase no Meatball Pasta Haruna Mori\' (600g) for JPY 1,628, which came with organic rooibos tea. It was served in just over 10 minutes." — July 2026.', source: R + 'B532360810/' },
        { text: '"I placed my order through mobile ordering. You can choose from various menus of different shops in the alley." — August 2026.', source: R + 'B533327458/' },
      ],
      japanese_sources_summary: '食べログ: 肉とパスタと酒、港区東新橋1-8-2 カレッタ汐留B2F 汐留横丁、平日11:30〜15:00・17:00〜22:30、土日祝11:00〜18:00、2026年7月16日開店。2026年の口コミ: 高崎のパスタを東京に(高崎は大盛りの文化)、Shiawase no Meatball Pasta Haruna Mori(英文の口コミの表記)600g 1,628円、有機ルイボスティー付き、約10分で提供、トマトソースは思ったより軽い、汐留横丁のフードホールでモバイルオーダー、週末はすいている、開店記念でミートボール増量(7月31日まで)。',
      confidence: 'medium', sources: [TB, R + 'B532360810/', R + 'B533327458/', R + 'B532678142/', R + 'B534590944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering from your food-hall seat.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-7090 東京都港区東新橋1-8-2 カレッタ汐留 B2F 汐留横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; opened July 2026; reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区東新橋一丁目8番 (lot) 42m; 770 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532360810/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('Shiawase no Meatball Pasta Haruna Mori', '', 'Meatball tomato pasta, 600 g, with organic rooibos tea', '¥1,628', 'Pasta', 'no', 'no', 'July 2026.', 'meatball_600'),
    ] }, {
    cuisine: '高崎スタイルの大盛りパスタ・600gのミートボールパスタ1,628円・汐留横丁のフードホール・2026年7月開店',
    neighborhood: 'カレッタ汐留B2F、汐留横丁。汐留駅から徒歩4分、新橋駅から地下通路で',
    gf_detail: 'グルテンフリーではありません。高崎スタイルの大盛りの小麦のパスタです。',
    vegan_detail: 'ヴィーガンではありません。ミートボールのパスタです。',
    notes: '[パスタ・汐留横丁で高崎流の大盛り] 2026年7月16日、カレッタ汐留地下2階のフードホール「汐留横丁」に開店したパスタの店で、群馬・高崎の大盛りパスタを東京に。名物は Shiawase no Meatball Pasta Haruna Mori(英文の口コミの表記)で、600gのパスタに思ったより軽いトマトソースとミートボール、有機ルイボスティー付きで1,628円、10分ほどで出てきます。ホールの共用席に座り、スマホでホール内のどの店からも注文できます。週末はすいています。',
  });
}

save();
