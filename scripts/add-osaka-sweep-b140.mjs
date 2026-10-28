// Osaka sweep (2-mile circle around Dotonbori), batch 140 — mom / small-shop phase (all OMNI).
//   + 両忘 (Tabelog Yakitori WEST 100 2025 counter: Kumano jidori course with two clay-pot rices; Nishi-Shinsaibashi)
//   + ボタ (spice curry in an old wooden house down an alley; Sunday three-curry plate; Higashi-Shinsaibashi)
//   + とんかつ みな斗 (brand-pork tonkatsu fried low and slow, Myojin and Dorobuta; Shimanouchi)
//   + 黒門 三よ志 (teppan okonomiyaki and small garlicky gyoza by Kuromon Market; run by two people) — mom_and_pop
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 140);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 両忘
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135982/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']);
  put({
    id: 'osaka_ryobo_nishishinsaibashi', name: '両忘 (Ryobo)', category: 'OMNI',
    lat: 34.673665, lng: 135.498514, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on some skewers; baguette with the pâté; seasoned clay-pot rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout, incl. liver and tataki; soup.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat 12:00–23:00; Sun and public holidays 12:00–22:00; closing days not fixed (Tabelog). One course, ¥13,200 including tax, by reservation (September 2026). Dislikes asked first (2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['12:00', '23:00']), 6: day(['12:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-17, Shinsaibashi Roji Bldg 1F, at the back of a passage — 2 min from Shinsaibashi Stn exit 7',
    cuisine: 'Yakitori course · one course ¥13,200: appetizers such as wood-smoked Kumano jidori thigh tataki, breast tataki, Senshu fruit tomato in dashi, grilled eggplant, liver pâté with baguette, Donko shiitake; skewers of Kumano jidori and Date chicken: negima, heart, seseri, tsukune with mustard, Kinkan and liver, zuri (gizzard), thigh, furisode, chicken breast wrapped in ume and shiso · to finish: two clay-pot rices with refills, e.g. chicken soboro, and lotus root, hiratake and bell pepper (corn in July), with pickles, small dishes and soup · homemade lemon sour · L-shaped counter of 10',
    website: null, gmaps: gm('両忘'), menu_url: null,
    notes: "[Yakitori · a Kumano jidori course counter with two clay-pot rices, Nishi-Shinsaibashi] A calm, stylish ten-seat L-shaped counter at the back of a passage near Shinsaibashi, open since 2023 and named to Tabelog's Yakitori WEST 100 for 2025. There's one course (¥13,200) of Kumano jidori and Date chicken over charcoal, each skewer grilled and seasoned differently: crisp-and-juicy seseri, heart, tsukune with mustard, Kinkan with liver. Between skewers come plates like wood-smoked thigh tataki, sweet liver pâté on baguette and dashi-soaked tomato. It ends with two seasonal clay-pot rices, refills allowed, plus pickles and soup. One diner found the heart more burnt than smoky. Reserve; weekend lunch too.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2023 (Tabelog); Tabelog Yakitori WEST 100 2025 (September 2026 review).', background: 'Yakitori course counter, run by a head chef and two staff (September 2026 review).', philosophy: 'Kumano jidori from Mie and Date chicken from Fukushima (2026 reviews).', specialty: 'Yakitori course; seasonal clay-pot rice.',
      anecdotes: [
        { text: '"Each skewer has a different grilling technique and seasoning, allowing for a range of flavors to enjoy… To finish off, we had the clay pot rice." — October 2026.', source: R + 'B479767454/' },
        { text: '"Kumano Jidori Chicken Thigh Tataki: Smoked with wood, giving it a wonderful smoky flavor. This was the best dish of the day." — October 2026, course.', source: R + 'B536684740/' },
      ],
      japanese_sources_summary: '食べログ: 両忘、大阪市中央区西心斎橋1-10-17 心斎橋ロヂビル 1F、心斎橋駅7番出口から徒歩2分、四ツ橋駅から徒歩2分、月〜金 17:00〜23:00、土 12:00〜23:00、日・祝 12:00〜22:00、定休日不定、カード可、電子マネー・QR不可、カウンター10席、貸切可 (20名まで)、2023年4月29日開店。口コミ(2024年7月〜2026年10月): 食べログ 焼き鳥 WEST 百名店 2025、コースのみ13,200円、苦手なものを最初に聞く、Kumano の地鶏 (三重) と Date の鶏 (福島)、前菜にもものたたきの燻製、むねのたたき、Senshu のフルーツトマト、焼きなす、レバーパテとバゲット、Donko の椎茸、串はねぎま、ハツ、せせり、からしのつくね、Kinkan とレバー、砂ずり、もも、Furisode、梅しそ巻き、締めは土鍋ご飯2種 (鶏そぼろ、れんこん・Hiratake・ピーマン、7月はとうもろこし) をおかわりして、漬物、小鉢、汁物、自家製のレモンサワー、L字のカウンター、ハツが焦げた味だったという声、通路の奥の店、落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B479767454/', R + 'B535835474/', R + 'B536543238/', R + 'B536673021/', R + 'B536684740/', R + 'B536771284/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course; dislikes asked first; Tabelog reservations (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-17 心斎橋ロヂビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番17号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536673021/', R + 'B535835474/', R + 'B536684740/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course (appetizers, skewers, two clay-pot rices)', '¥13,200', 'Courses', 'no', 'no', 'September 2026.', 'course'),
      it('', '', 'Homemade lemon sour', '', 'Drinks', 'ask', 'ask', 'September 2026.', 'lemon_sour'),
    ] }, {
    cuisine: '焼き鳥のコース・コース13,200円のみ: 前菜にKumano の地鶏もものたたきの燻製、むねのたたき、だしに浸した Senshu のフルーツトマト、焼きなす、バゲットのレバーパテ、Donko の椎茸、Kumano の地鶏と Date の鶏の串: ねぎま、ハツ、せせり、からしのつくね、Kinkan とレバー、砂ずり、もも、Furisode、梅しそ巻き・締めはおかわりできる土鍋ご飯2種 (たとえば鶏そぼろ、れんこん・Hiratake・ピーマン、7月はとうもろこし)、漬物、小鉢、汁物・自家製のレモンサワー・L字のカウンター10席',
    neighborhood: '中央区西心斎橋1-10-17 心斎橋ロヂビル 1F、通路の奥。心斎橋駅7番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。一部の串のたれ、パテのバゲット、味付けした土鍋ご飯。',
    vegan_detail: 'ヴィーガンではありません。どれも鶏、レバーとたたきも、汁物。',
    notes: '[焼き鳥・西心斎橋、土鍋ご飯2種で締める Kumano の地鶏のコース] 心斎橋近くの通路の奥にある、落ち着いたおしゃれなL字のカウンター10席の店で、2023年開店、食べログ 焼き鳥 WEST 百名店 2025。コースは13,200円のひとつで、Kumano の地鶏と Date の鶏を炭火で、串ごとに焼き方と味付けを変える: カリッとジューシーなせせり、ハツ、からしのつくね、Kinkan とレバー。合間に燻したもものたたき、バゲットにのせた甘いレバーパテ、だしに浸したトマト。締めは季節の土鍋ご飯2種をおかわり自由で、漬物と汁物も。ハツは炭の香りより焦げた味だったという声も。予約を。週末は昼も。',
  });
}

// ================================================================ ボタ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000588/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.buttah.net';
  const FULL = day(['12:00', '15:30'], ['18:00', '21:00']);
  put({
    id: 'osaka_buttah_higashishinsaibashi', name: 'ボタ (Buttah)', category: 'OMNI',
    lat: 34.673913, lng: 135.50451, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not confirmed gluten-free: the reviews give no roux or ingredient details; ask about each curry and the sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter chicken, keema and shrimp curries; fried egg; raita. Dal and vegetable curries may be meat-free — ask.',
    hours_raw: 'Mon, Thu–Sun 12:00–15:30 (last order) and 18:00–21:00; Tue 12:00–15:30; closed Wed; call after 21:30 to confirm late service; hours may change (Tabelog). Sunday three-curry plate (2026). Cash only (Tabelog).',
    hours: { 0: FULL, 1: day(['12:00', '15:30']), 3: FULL, 4: FULL, 5: FULL, 6: FULL }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-8-20, an old wooden house in a back alley — 3 min from Nagahoribashi Stn',
    cuisine: 'Spice curry · curries change daily: eggplant keema, butter chicken, keema, shrimp coconut, pumpkin butter, squid green curry, vegetable coconut · two-curry combination at lunch · Sunday three-curry plate ¥1,380 with saffron or turmeric rice, dal, pickles; with fried egg and chai about ¥1,550–1,750 · sides: dal, achar, raita · iced chai with cardamom · 4 counter seats, three tables and a raised tatami area, 16 seats',
    website: OWN, gmaps: gm('ボタ'), menu_url: null,
    notes: "[Curry · spice curry in an old wooden house down a Higashi-Shinsaibashi alley] A curry house in a back-alley wooden house near Nagahoribashi, easy to miss, lit by bare bulbs and hung with cute illustrations and Asian odds and ends. The curries rotate daily: eggplant keema, butter chicken, shrimp coconut, pumpkin butter, squid green curry. Each is distinct, deep and well balanced rather than fiery, though you can ask for more heat. Lunch is a two-curry combination; on Sundays, a three-curry plate (¥1,380) comes with turmeric-scented rice, dal, raita and pickles. Add a fried egg and a cardamom chai. Cash only. Closed Wednesdays; Tuesday is lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Spice curry restaurant in an old wooden house (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Daily-changing spice curries; Sunday three-curry plate.',
      anecdotes: [
        { text: '"It had a familiar curry flavor base, enriched with the savory essence of minced meat and eggplant, delivering a robust taste. The crunchy texture of whole spices added a strong character." — October 2026, eggplant keema.', source: R + 'B537033588/' },
        { text: '"On Sundays, you can order either a la carte or a three-dish plate. I opted for the three-dish plate, which included squid green curry, keema, and pumpkin curry, served with saffron rice, pickles, and dal for JPY 1380." — October 2026.', source: R + 'B538035700/' },
      ],
      japanese_sources_summary: '食べログ: ボタ、大阪市中央区東心斎橋1-8-20、長堀橋駅から徒歩3分、月・木〜日 12:00〜15:30 (L.O.)・18:00〜、火 12:00〜15:30、水休み、21時半以降は電話で確認、カード・電子マネー・QR不可、16席 (カウンター4、2人掛け2、4人掛け1、小上がり4)、公式サイトあり。口コミ(2025年11月〜2026年10月): 路地の古い木造の家、裸電球、かわいいイラスト、アジアの雑貨、日替わりのカレー (なすキーマ、バターチキン、キーマ、エビのココナッツ、かぼちゃのバター、イカのグリーンカレー、野菜のココナッツ)、2種の合いがけ、日曜は3種のプレート1,380円 (サフランかターメリックのご飯、ダル、漬物)、目玉焼きとチャイ付きで1,550〜1,750円ほど、アチャール、ライタ、カルダモンのアイスチャイ、辛さを増やせる、辛すぎず食べやすい、現金のみ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B516477526/', R + 'B535286124/', R + 'B535583308/', R + 'B535688061/', R + 'B537033588/', R + 'B538035700/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed, cozy room; spice level adjustable (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-8-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目8番20号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516477526/', R + 'B538035700/', R + 'B537033588/'],
    price_note: 'Prices from November 2025–October 2026 reviews; curries change daily.', last_checked: TODAY, items: [
      it('', '', 'Sunday three-curry plate (rice, dal, pickles)', '¥1,380', 'Curry', 'ask', 'no', 'October 2026.', 'three'),
      it('', '', 'Two-curry combination (lunch)', '', 'Curry', 'ask', 'no', 'September 2026.', 'two'),
      it('', '', 'Eggplant keema', '', 'Curry', 'ask', 'no', 'October 2026.', 'nasu_keema'),
      it('', '', 'Butter chicken', '', 'Curry', 'ask', 'no', 'September 2026.', 'butter_chicken'),
      it('', '', 'Iced chai', '', 'Drinks', 'ask', 'no', 'October 2026.', 'chai'),
    ] }, {
    cuisine: 'スパイスカレー・日替わりのカレー: なすキーマ、バターチキン、キーマ、エビのココナッツ、かぼちゃのバター、イカのグリーンカレー、野菜のココナッツ・昼は2種の合いがけ・日曜は3種のプレート1,380円、サフランかターメリックのご飯、ダル、漬物、目玉焼きとチャイを付けて1,550〜1,750円ほど・アチャール、ライタ・カルダモンのアイスチャイ・カウンター4席、テーブル3卓、小上がり、計16席',
    neighborhood: '中央区東心斎橋1-8-20、路地の古い木造の家。長堀橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。口コミにルウや材料の情報がないので、カレーと付け合わせごとに確認を。',
    vegan_detail: 'ヴィーガンではありません。バターチキン、キーマ、エビのカレー、目玉焼き、ライタ。ダルや野菜のカレーは肉なしかもしれないので確認を。',
    notes: '[カレー・東心斎橋、路地の古い木造家屋のスパイスカレー] 長堀橋近くの路地にある見逃しそうな木造の家のカレー店で、裸電球、かわいいイラスト、アジアの雑貨。カレーは日替わりで、なすキーマ、バターチキン、エビのココナッツ、かぼちゃのバター、イカのグリーンカレーなど。それぞれ個性があって深く、辛すぎず釣り合いがよく、辛さは増やせる。昼は2種の合いがけ、日曜は3種のプレート (1,380円) にターメリックの香るご飯、ダル、ライタ、漬物。目玉焼きとカルダモンのチャイも。現金のみ。水曜休み、火曜は昼のみ。',
  });
}

// ================================================================ とんかつ みな斗
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141118/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.instagram.com/minato.tonkatsu';
  const D = day(['10:30', '14:50'], ['17:30', '20:50']);
  put({
    id: 'osaka_tonkatsu_minato_shimanouchi', name: 'とんかつ みな斗 (Tonkatsu Minato)', category: 'OMNI',
    lat: 34.669978, lng: 135.508222, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breadcrumb coating; tonkatsu sauces; somen in the summer soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork; dashi-based soups.',
    hours_raw: 'Daily 10:30–14:50 and 17:30–20:50 (Tabelog). Tabelog reservations (August 2026). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-9-26 1F — 9 min from Nipponbashi Stn',
    cuisine: 'Brand-pork tonkatsu · loin, tenderloin and hire of several brand pigs, fried at low temperature and well drained: Myojin pork from Mie (hirakatsu 120 g; rib loin 210 g), Dorobuta from Hokkaido (loin 175 g ¥5,500; loin and tenderloin ¥9,900) · rock salt, pink salt, wasabi and several sauces · glossy rice, cabbage · seasonal soup: canola-flower miso in spring, chilled dashi with yuba and nyumen in summer, red miso from September · 10 counter seats',
    website: OWN, gmaps: gm('とんかつ みな斗'), menu_url: null,
    notes: "[Tonkatsu · brand-pork tonkatsu fried low and slow, Shimanouchi] A clean, Japanese-modern ten-seat counter in Shimanouchi, open since 2024, serving tonkatsu of premium brand pigs fried at low temperature until rosy inside. Myojin pork from Mie comes out tender and juicy, the loin sweet with fat; Dorobuta from Hokkaido is richer still. Eat it first with rock salt and wasabi, then the sauces. The seasonal soup is a treat: canola-flower miso in spring, chilled dashi with yuba over nyumen in summer, red miso in autumn. It's expensive for tonkatsu, with Dorobuta loin at ¥5,500, but diners rate the quality highly; one wished for free cabbage refills.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 May 2024 (Tabelog)', background: 'Brand-pork tonkatsu counter (Tabelog; 2026 reviews).', philosophy: 'Brand pork fried at low temperature and drained carefully (August 2026 review).', specialty: 'Myojin and Dorobuta tonkatsu.',
      anecdotes: [
        { text: '"The beautiful rose-colored cross-section of the Hirakatsu immediately showcases the delicate cooking technique… When enjoyed with the accompanying rock salt and wasabi, the umami flavor becomes even more pronounced." — August 2026, Myojin pork hirakatsu 120 g.', source: R + 'B533258514/' },
        { text: '"The loin had a rich flavor with a delightful sweetness from the fat, and the coating was crispy… the tenderloin was surprisingly tender and moist…" — September 2026.', source: R + 'B526468071/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ みな斗、大阪市中央区島之内2-9-26 1F、日本橋駅から徒歩9分、長堀橋駅から徒歩10分、毎日10:30〜14:50・17:30〜20:50、カード・交通系IC・電子マネー・QR (Alipay、WeChat Pay を含む) 可、カウンター10席、2024年5月15日開店、Instagram あり。口コミ(2026年4〜9月): 銘柄豚のとんかつ、低温で揚げて油をよく切る、三重の Myojin の豚 (Hirakatsu 120g、リブロース210g)、北海道の Dorobuta (ロース175g 5,500円、ロースとヒレで9,900円)、ロゼ色の断面、岩塩、ピンクの塩、わさび、数種のソース、つやのあるご飯、キャベツ、季節の汁 (春は菜の花の味噌汁、夏は湯葉とにゅうめんの冷たいだし、9月から赤だし)、白木を使った清潔な和モダンの店内、食べログで予約、値段は高めという声、キャベツのおかわりがあればという声。',
      confidence: 'medium', sources: [TB, R + 'B526468071/', R + 'B533258514/', R + 'B534293966/', R + 'B534349040/', R + 'B534451935/', R + 'B536466301/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm counter; Tabelog reservations (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-9-26 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目9番26号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533258514/', R + 'B534451935/', R + 'B534349040/'],
    price_note: 'Prices from August 2026 reviews; other cuts not priced in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Myojin pork hirakatsu, 120 g', '', 'Tonkatsu', 'no', 'no', 'August 2026.', 'hirakatsu'),
      it('', '', 'Myojin pork rib loin, 210 g', '', 'Tonkatsu', 'no', 'no', 'August 2026.', 'rib_loin'),
      it('', '', 'Dorobuta loin, 175 g', '¥5,500', 'Tonkatsu', 'no', 'no', 'August 2026.', 'dorobuta_loin'),
      it('', '', 'Dorobuta loin and tenderloin', '¥9,900', 'Tonkatsu', 'no', 'no', 'August 2026.', 'dorobuta_mix'),
    ] }, {
    cuisine: '銘柄豚のとんかつ・数種の銘柄豚のロースとヒレを低温で揚げ、油をよく切る: 三重の Myojin の豚 (Hirakatsu 120g、リブロース210g)、北海道の Dorobuta (ロース175g 5,500円、ロースとヒレ9,900円)・岩塩、ピンクの塩、わさび、数種のソース・つやのあるご飯、キャベツ・季節の汁: 春は菜の花の味噌汁、夏は湯葉とにゅうめんの冷たいだし、9月から赤だし・カウンター10席',
    neighborhood: '中央区島之内2-9-26 1F。日本橋駅から徒歩9分',
    gf_detail: 'グルテンフリーではありません。パン粉の衣、とんかつソース、夏の汁のそうめん。',
    vegan_detail: 'ヴィーガンではありません。豚肉、だしの汁。',
    notes: '[とんかつ・島之内、低温でじっくり揚げる銘柄豚のとんかつ] 島之内にある清潔な和モダンのカウンター10席の店で、2024年開店、銘柄豚を低温で揚げて中はロゼ色に仕上げる。三重の Myojin の豚は柔らかくジューシーで、ロースは脂が甘く、北海道の Dorobuta はさらに濃厚。まずは岩塩とわさびで、それからソースを。季節の汁も楽しみで、春は菜の花の味噌汁、夏は湯葉とにゅうめんの冷たいだし、秋は赤だし。Dorobuta のロースが5,500円ととんかつとしては高いが、質を高く評価する声が多い。キャベツのおかわりが無料ならという声も。',
  });
}

// ================================================================ 黒門 三よ志
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000399/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_kuromon_miyoshi_nipponbashi', name: '黒門 三よ志 (Kuromon Miyoshi)', category: 'OMNI',
    lat: 34.666445, lng: 135.507705, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter; yakisoba; gyoza wrappers; sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, shrimp and chicken dishes; egg; dashi.',
    hours_raw: 'Tue, Wed, Fri, Sat 17:00–23:00 (last order 22:00); closed Sun, Mon, Thu and public holidays, plus two weeks in summer and over New Year; updates on Instagram and Google Maps (Tabelog). Reserve for groups (July 2026). Cash only (Tabelog). Run by two people (July and October 2026 reviews).',
    hours: { 1: D, 2: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 1-16-4, just off Kuromon Market, opposite a public bath — 3 min from Nipponbashi Stn exit 8',
    cuisine: 'Teppan okonomiyaki and gyoza · gyoza: small, thin-skinned, sweet cabbage and garlic, 6 for ¥450; frozen to take home at the same price · buta-tama, suji negi-tama, ebi-tama (eight plump shrimp, ¥900) · omusoba, yakisoba, tonpeiyaki with ketchup and mayo · stir-fried beef in soy, sauce or ponzu · dashimaki, grilled salmon, shishito with a sauce, garlic chives with meat, yakitori, chilled tomato · draft beer, highballs · counter and tables, 17 seats',
    website: null, gmaps: gm('黒門 三よ志'), menu_url: null,
    notes: "[Okonomiyaki · teppan okonomiyaki and garlicky mini gyoza by Kuromon Market] A homey teppan counter just off Kuromon Market, opposite a public bath, run by two people with the TV on, popular with people who live nearby and fairly priced for a touristy area (just under ¥3,000 a head). Start with the gyoza: small, thin-skinned and garlicky, good enough to have a reputation of their own (six for ¥450; frozen to take home too). Then the okonomiyaki, crisp outside and fluffy inside, served cut, or the ebi-tama with eight plump shrimp (¥900) and the suji negi-tama, plus stir-fried beef with ponzu. Evenings only, four days a week. Cash only; reserve for groups.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppan okonomiyaki restaurant run by two people (2026 reviews).', philosophy: null, specialty: 'Gyoza; okonomiyaki; teppan dishes.',
      anecdotes: [
        { text: '"The gyoza here is exceptionally delicious, and I highly recommend trying it. The skin is thin, and the filling is sweet, making it incredibly tasty." — June 2026.', source: R + 'B531017722/' },
        { text: '"The signature okonomiyaki had a crispy exterior and a fluffy texture inside. It was easy to eat…" — July 2026.', source: R + 'B532754387/' },
      ],
      japanese_sources_summary: '食べログ: 黒門 三よ志、大阪市中央区日本橋1-16-4、日本橋駅8番出口から徒歩3分、火・水・金・土 17:00〜23:00 (L.O. 22:00)、日・月・木・祝休み、夏休み2週間と年末年始、Instagram と Google マップで告知、カード・電子マネー・QR不可、17席、2020年4月から禁煙。口コミ(2026年3〜10月): 黒門市場を少し外れた銭湯の前、二人で営業、テレビのある家庭的な店、地元の客が多い、観光地の割に手頃 (1人3,000円弱)、餃子は小ぶりで皮が薄く、キャベツの甘みとにんにく、6個450円、冷凍の持ち帰りも同じ値段、豚玉、すじねぎ玉、えび玉 (ぷりぷりのエビ8つ、900円)、Omusoba、焼きそば、ケチャップとマヨのTonpei-yaki、牛肉の炒め (醤油、ソース、ポン酢)、だし巻き、焼き鮭、ししとうの炒め、ニラと肉の炒め、焼き鳥、冷やしトマト、生ビール、ハイボール、お好み焼きは外はカリッと中はふわっと切って出す、大人数は予約を。',
      confidence: 'medium', sources: [TB, R + 'B278771141/', R + 'B531017722/', R + 'B531921170/', R + 'B532631639/', R + 'B532754387/', R + 'B536671432/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Homey counter; easy solo (July 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-16-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目16番4号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536671432/', R + 'B531921170/', R + 'B532754387/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gyoza, 6 pieces (also frozen to take home)', '¥450', 'Dishes', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Buta-tama (pork okonomiyaki)', '', 'Okonomiyaki', 'no', 'no', 'October 2026.', 'butatama'),
      it('', '', 'Ebi-tama (shrimp omelet)', '¥900', 'Teppan', 'no', 'no', 'October 2026.', 'ebitama'),
      it('', '', 'Suji negi-tama', '', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'suji_negi'),
      it('', '', 'Omusoba', '', 'Teppan', 'no', 'no', 'July 2026.', 'omusoba'),
      it('', '', 'Stir-fried beef with ponzu', '', 'Teppan', 'no', 'no', 'July 2026.', 'beef_ponzu'),
      it('', '', 'Dashimaki', '', 'Teppan', 'no', 'no', 'October 2026.', 'dashimaki'),
    ] }, {
    cuisine: '鉄板のお好み焼きと餃子・餃子: 小ぶりで皮が薄く、キャベツの甘みとにんにく、6個450円、冷凍の持ち帰りも同じ値段・豚玉、すじねぎ玉、えび玉 (ぷりぷりのエビ8つ、900円)・Omusoba、焼きそば、ケチャップとマヨのTonpei-yaki・醤油かソースかポン酢の牛肉の炒め・だし巻き、焼き鮭、ししとうの炒め、ニラと肉の炒め、焼き鳥、冷やしトマト・生ビール、ハイボール・カウンターとテーブル、17席',
    neighborhood: '中央区日本橋1-16-4、黒門市場を少し外れた銭湯の前。日本橋駅8番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地、焼きそば、餃子の皮、ソース。',
    vegan_detail: 'ヴィーガンではありません。豚、牛、エビ、鶏の料理、卵、だし。',
    notes: '[お好み焼き・黒門市場近く、鉄板のお好み焼きとにんにくのきいた小さな餃子] 黒門市場を少し外れた銭湯の前にある家庭的な鉄板のカウンターで、二人で営業、テレビがついていて、近所の客が多く、観光地の割に手頃 (1人3,000円弱)。まずは餃子: 小ぶりで皮が薄く、にんにくがきいて、これだけで評判になるほど (6個450円、冷凍の持ち帰りも)。それから外はカリッと中はふわっとした、切って出すお好み焼き、ぷりぷりのエビが8つのえび玉 (900円)、すじねぎ玉、ポン酢の牛肉の炒め。夜のみ、週4日営業。現金のみ、大人数は予約を。',
  });
}

save();
