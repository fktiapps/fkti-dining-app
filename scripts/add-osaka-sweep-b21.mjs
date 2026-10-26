// Osaka sweep (2-mile circle around Dotonbori), batch 21 — ramen phase, nearest first (all OMNI).
//   + 珉珉 南千日前本店 (Osaka's old-line gyoza and Chinese set-meal house — filed 'gyoza', no ramen block)
//   + ラー麺 ずんどう屋 心斎橋店 (Himeji tonkotsu, 24 h)
//   + 三田製麺所 なんば店 (thick-noodle tsukemen chain, free extra noodles to 500 g)
//   + ホルモンラーメン 8910 ヨーロッパ通店 (offal ramen and spicy horumon mazesoba, 24 h; mixed reviews)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 21);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const H24 = day(['00:00', '23:59']);

// ================================================================ 珉珉 南千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27017315/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.minminhonten.com/';
  put({
    id: 'osaka_minmin_minami_sennichimae_honten', name: '珉珉 南千日前本店 (Minmin Minami-Sennichimae Honten)', category: 'OMNI',
    lat: 34.666218, lng: 135.502896, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, noodles, soy-based Chinese sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, sweet-and-sour pork, crab tofu, liver.',
    hours_raw: 'Daily 11:30–23:00 (L.O. 22:30), open year-round (Tabelog). Counter on the 1st floor, tables on the 2nd and 3rd.',
    hours: ALL(day(['11:30', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-11-25 — 3 min from Namba Stn (Osaka Metro), near NGK',
    cuisine: 'Long-running Osaka gyoza house · crisp pan-fried gyoza with crunchy cabbage ¥450 · beer set (gyoza, mapo tofu, draft) ¥1,600 · shoyu ramen and gyoza set ¥990 · sweet-and-sour pork set · mapo tofu, twice-cooked pork, liver with chives · crab tofu stew · 60 seats on 3 floors',
    website: OWN, gmaps: gm('珉珉 南千日前本店'), menu_url: null,
    notes: "[Gyoza · Minmin's old-line gyoza house by NGK] The Minami-Sennichimae main shop of Minmin, with a cramped first-floor counter and table floors above. Regulars have been coming back for decades for gyoza and beer. The pan-fried gyoza (¥450) are crisp with crunchy cabbage inside, and a beer set brings gyoza, mapo tofu and a draft for ¥1,600. The shoyu ramen and gyoza set (¥990, September 2026) has a clear amber broth with thin straight noodles, and the sweet-and-sour pork set is generous. Also on the menu: twice-cooked pork, liver with garlic chives and a crab-and-tofu stew. Service is brisk to dry, and staff often speak Chinese among themselves. Handy before or after a show at NGK.",
    chef_bio: { chef_name: null, roles: [], origin: 'Minami-Sennichimae main shop (Tabelog listing name)', background: 'Minmin (minminhonten.com); reviewers describe decades of visits (2026).', philosophy: null, specialty: 'Pan-fried gyoza.',
      anecdotes: [
        { text: '"I ordered a large bottle of Sapporo Black Label beer and, of course, the gyoza (JPY 450). I love the crunchy texture of the cabbage in the gyoza." — October 2026.', source: R + 'B512821568/' },
        { text: '"I ordered the Shoyu Ramen and Gyoza Set (JPY 990, tax included). The Shoyu Ramen features a strikingly clear amber broth… The thin, straight noodles are smooth." — September 2026.', source: R + 'B535171278/' },
      ],
      japanese_sources_summary: '食べログ: 珉珉 南千日前本店、大阪市中央区千日前2-11-25、06-6641-6088、60席(1階カウンター、2階・3階テーブル)、毎日11:30〜23:00(L.O.22:30)、年中無休、禁煙、カード可、公式 minminhonten.com。2025〜2026年の口コミ: 餃子とビール、餃子450円、キャベツのシャキシャキ感、かにの豆腐煮込み、醤油ラーメンと餃子のセット990円(澄んだ琥珀色のスープ、細ストレート麺)、ビールセット1,600円(餃子、麻婆豆腐、生ビール)、20年以上前の思い出、狭いカウンター、酢豚定食、そっけない接客、スタッフ同士は中国語、NGKの前に、餃子2人前900円と瓶ビール670円、麻婆豆腐、回鍋肉、ニラレバ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B512821568/', R + 'B535171278/', R + 'B537963445/', R + 'B537233053/', R + 'B536259477/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Brisk service; tight counter downstairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-11-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目11番25号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512821568/', R + 'B535171278/', R + 'B535255294/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('餃子', 'gyōza', 'Pan-fried gyoza', '¥450', 'Gyoza', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Beer set (gyoza, mapo tofu, draft beer)', '¥1,600', 'Sets', 'no', 'no', 'September 2026.', 'beer_set'),
      it('', '', 'Shoyu ramen and gyoza set', '¥990', 'Sets', 'no', 'no', 'September 2026.', 'ramen_set'),
      it('', '', 'Sweet-and-sour pork set meal', '', 'Set meals', 'no', 'no', 'September 2026.', 'subuta'),
      it('麻婆豆腐', 'mābō dōfu', 'Mapo tofu', '¥750', 'Mains', 'no', 'no', 'September 2026.', 'mapo'),
    ] }, {
    cuisine: '老舗の大阪の餃子の店・キャベツがシャキシャキの焼き餃子450円・ビールセット(餃子、麻婆豆腐、生ビール)1,600円・醤油ラーメンと餃子のセット990円・酢豚定食・麻婆豆腐、回鍋肉、ニラレバ・かにの豆腐煮込み・3フロア60席',
    neighborhood: '千日前2-11-25。なんば駅(大阪メトロ)から徒歩3分、NGKの近く',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、麺、醤油ベースの中華のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、酢豚、かにの豆腐、レバー。',
    notes: '[餃子・NGK近くの老舗の珉珉] 珉珉の南千日前本店で、1階は狭いカウンター、上の階はテーブル席。何十年も通う常連が餃子とビールに戻ってきます。焼き餃子(450円)はパリッとして中のキャベツがシャキシャキ。ビールセットは餃子、麻婆豆腐、生ビールで1,600円。醤油ラーメンと餃子のセット(990円、2026年9月)は澄んだ琥珀色のスープに細ストレート麺、酢豚定食はボリュームたっぷり。回鍋肉、ニラレバ、かにと豆腐の煮込みも。接客は手早くそっけないこともあり、スタッフ同士はよく中国語で話しています。NGKの前後に便利。',
  });
}

// ================================================================ ラー麺 ずんどう屋 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27056247/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_zundoya_shinsaibashi', name: 'ラー麺 ずんどう屋 心斎橋店 (Ramen Zundoya Shinsaibashi)', category: 'OMNI',
    lat: 34.67208, lng: 135.501998, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone broth; fried rice, gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth and back fat; the vegetable ramen uses the same broth.',
    hours_raw: 'Open 24 hours, year-round; lunch sets 11:00–16:00; once a month 11:00–3:00 for maintenance (Tabelog). Ticket machine at the entrance. Tabelog says smoking allowed; a September 2026 reviewer found it non-smoking.',
    hours: ALL(H24), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-5-7, Sēna Bldg 1F, with terrace seats — the northern end of Shinsaibashi',
    cuisine: 'Himeji-born tonkotsu · choose thin or curly noodles, back fat (light to extra rich) and firmness · ajitama ramen · vegetable ramen · lunch sets with small fried rice ¥1,400 · garlic fried rice · table garlic, pickled ginger · 32 seats, 24 h',
    website: 'http://www.zundouya.com/', gmaps: gm('ラー麺 ずんどう屋 心斎橋店'), menu_url: null,
    notes: "[Ramen · Zundoya's 24-hour Shinsaibashi branch] A 32-seat, round-the-clock Zundoya at the northern end of Shinsaibashi, with a few terrace seats. The chain began in Himeji. You tailor the bowl: thin or curly noodles, back fat from light to extra rich, firmness from soft to very firm. The rich, fatty tonkotsu clings to thin, firm noodles, and with extra back fat it is heavy at 8 am. Load it with table garlic, pickled ginger and pepper. The garlic fried rice is a standout. Lunch, 11 to 4, is set meals only, for example vegetable ramen with a small fried rice for ¥1,400 in October 2026. Buy a ticket at the entrance. Friendly, energetic staff.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 April 2011 (Tabelog)', background: 'Zundoya chain (zundouya.com), which an October 2026 reviewer notes began in Himeji.', philosophy: null, specialty: 'Himeji-style tonkotsu.',
      anecdotes: [
        { text: '"I chose extra back fat and firm noodles. The broth is a rich tonkotsu with a generous amount of back fat, making it quite heavy. Perhaps I should have opted for regular back fat for breakfast?" — October 2026, just past 8 am.', source: R + 'B428214074/' },
        { text: '"You can choose between thin noodles or curly noodles. For the back fat, you can select from light, medium, rich, or extra rich." — October 2026, lunch set ¥1,400.', source: R + 'B536588540/' },
      ],
      japanese_sources_summary: '食べログ: ラー麺 ずんどう屋 心斎橋店、大阪市中央区心斎橋筋1-5-7 セーナビル1F、32席(カウンター17、テーブル3、ボックス席)、24時間営業(ランチ11:00〜16:00、月1回のメンテナンス日は11:00〜翌3:00)、年中無休、喫煙可と記載、カード可、2011年4月8日開店、公式 zundouya.com。2026年の口コミ(8〜10月): 朝8時のラーメン、テラス席、味玉ラーメン、背脂多め・麺かため、濃厚な豚骨で重め、細くて硬い麺、卓上のにんにく・紅生姜・胡椒、ふわふわの炒飯、深夜まで開いている、入口の券売機、にんにく炒飯がおすすめ、禁煙だったとの声(9月)、ランチはセットのみで味玉付き、野菜ラーメンと小炒飯で1,400円、細麺かちぢれ麺、背脂はあっさり・普通・こってり・超こってり、硬さはやわらかめ・普通・かため・バリかた、姫路発祥。',
      confidence: 'medium', sources: [TB, R + 'B428214074/', R + 'B536588540/', R + 'B533857992/', R + 'B535446715/', R + 'B537818623/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin or curly noodles; firmness soft to very firm (October 2026).' },
      regional_style: ['Himeji tonkotsu'], sub_genre: ['ramen'],
      signature_bowl: 'Ajitama ramen (2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['back fat (adjustable)', 'seasoned egg', 'table garlic', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu.' },
      pantheon: 'Zundoya\'s 24-hour Shinsaibashi counter: Himeji tonkotsu dialled from light to extra-rich back fat, with garlic fried rice on the side.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533857992/', '"A rich, fatty tonkotsu broth that clung perfectly to the thin noodles."'],
        oiliness: [R + 'B428214074/', '"A generous amount of back fat, making it quite heavy"; adjustable from light (' + R + 'B536588540/).'],
        clarity: [R + 'B533857992/', 'Fatty tonkotsu — opaque.'],
        tare_strength: [R + 'B535446715/', '"The ramen is rich and consistently delicious" — mid-scale.'],
        noodle_firmness: [R + 'B428214074/', '"The noodles are thin and firm, providing a nice bite."'],
        aroma_punch: [R + 'B428214074/', 'Generous table garlic added; garlic fried rice (' + R + 'B535446715/).'],
      },
      confidence: 'medium', sources: [R + 'B533857992/', R + 'B428214074/', R + 'B536588540/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; choose noodles, fat and firmness.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-5-7 セーナビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目5番7号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536588540/', R + 'B428214074/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ajitama ramen', '', 'Ramen', 'no', 'no', 'August–October 2026.', 'ajitama'),
      it('', '', 'Vegetable ramen and small fried rice (lunch set)', '¥1,400', 'Sets', 'no', 'no', 'October 2026.', 'lunch_set'),
      it('', '', 'Garlic fried rice', '', 'Rice', 'no', 'no', 'September 2026.', 'garlic_chahan'),
    ] }, {
    cuisine: '姫路発祥の豚骨・細麺かちぢれ麺、背脂(あっさり〜超こってり)、硬さを選べる・味玉ラーメン・野菜ラーメン・ランチは小炒飯付きのセット1,400円・にんにく炒飯・卓上のにんにく、紅生姜・32席、24時間',
    neighborhood: '心斎橋筋1-5-7 セーナビル1F、テラス席あり。心斎橋の北側',
    gf_detail: 'グルテンフリーではありません。豚骨スープに小麦の麺。炒飯、餃子も。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープと背脂。野菜ラーメンも同じスープ。',
    notes: '[ラーメン・ずんどう屋の24時間の心斎橋店] 心斎橋の北側にある32席の24時間営業のずんどう屋で、テラス席も少し。チェーンは姫路発祥。細麺かちぢれ麺、背脂はあっさりから超こってり、硬さはやわらかめからバリかたまで選べます。濃厚で脂の多い豚骨が細くて硬い麺に絡み、背脂多めだと朝8時には重め。卓上のにんにく、紅生姜、胡椒をたっぷり。にんにく炒飯がおすすめ。11時から16時のランチはセットのみで、2026年10月は野菜ラーメンと小炒飯で1,400円。入口の券売機で食券を。元気で親切なスタッフ。',
  });
}

// ================================================================ 三田製麺所 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27066893/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mita_seimenjo_namba', name: '三田製麺所 なんば店 (Mita Seimenjo Namba)', category: 'OMNI',
    lat: 34.666197, lng: 135.503127, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy and fish dipping sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-seafood dipping sauce, chashu, egg.',
    hours_raw: 'Daily 10:00–3:00 (food L.O. 2:30) (Tabelog). QR ordering at the table; self-service water. Limited menu right after opening (October 2026).',
    hours: ALL(day(['10:00', '03:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-11-3, Higuchi Bldg 1F — near Amza and NGK',
    cuisine: 'Thick-noodle tsukemen chain · free noodle upsizing to 500 g · rich seafood-pork dip · black-bonito tsukemen · limited niboshi chuka soba ¥1,100 and niboshi tsukemen · chilled sea-bream shio tsukemen ¥1,340 (all toppings) · cold spicy soy-milk tantanmen ¥1,150 · soup-wari · katsuobushi salt and garlic shichimi · 54 seats',
    website: 'https://mita-seimen.jp/', gmaps: gm('三田製麺所 なんば店'), menu_url: null,
    notes: "[Tsukemen · Mita Seimenjo's thick-noodle tsukemen by Amza] A 54-seat branch of the Mita Seimenjo tsukemen chain near Amza, open from 10 am to 3 am and busy at lunch. The classic is thick, chewy noodles with a rich dip, and you can upsize free to 500 g. Season with katsuobushi salt or garlic shichimi, and finish with soup-wari. Limited specials rotate: a black-bonito tsukemen with a strong katsuo hit, a niboshi chuka soba (¥1,100, October 2026) so intense it tastes like \"liquid niboshi\", and in summer a chilled sea-bream shio tsukemen (¥1,340 with everything) and a cold soy-milk tantanmen (¥1,150) heaped with Sichuan pepper. Order by QR code at the table.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 July 2012 (Tabelog)', background: 'Mita Seimenjo tsukemen chain (mita-seimen.jp).', philosophy: null, specialty: 'Thick-noodle tsukemen.',
      anecdotes: [
        { text: '"I had the limited edition niboshi (dried sardine) chuka soba at Mita Seimenjo for JPY 1,100, with an extra niboshi boost for JPY 200… making me feel like I was eating liquid niboshi." — October 2026.', source: R + 'B450838967/' },
        { text: '"I opted for the maximum free noodle refill of 500 grams. Adding katsuobushi salt and garlic shichimi for flavor enhancement made it even better." — October 2026, just after 10 am.', source: R + 'B537419336/' },
      ],
      japanese_sources_summary: '食べログ: 三田製麺所 なんば店、大阪市中央区千日前2-11-3 樋口建物1F、54席(カウンター24、テーブル30)、毎日10:00〜翌3:00(料理L.O.2:30)、禁煙、カード・電子マネー可、2012年7月21日開店、公式 mita-seimen.jp。2026年の口コミ(8〜10月): 限定の煮干し中華そば1,100円と煮干し増し200円、塩辛く濃い煮干し、やわらかめの太麺、冷やし辛担々麺(豆乳スープ)1,150円、QRコードで注文、水菜・メンマ・鶏・卵黄・ナッツ、花椒、冷やし鯛塩つけ麺全部のせ1,340円(麺500g)、チェーン店、昼は混む、セルフの水、黒鰹つけ麺、濃いつけ汁、スープ割り、開店直後は限定メニュー、麺は500gまで無料、鰹節塩とにんにく七味、限定の煮干しつけ麺、アムザの近く。',
      confidence: 'medium', sources: [TB, R + 'B450838967/', R + 'B537419336/', R + 'B536209441/', R + 'B512491155/', R + 'B489530460/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy noodles; free up to 500 g (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'niboshi'],
      signature_bowl: 'Tsukemen (free up to 500 g); limited black-bonito and niboshi tsukemen (2026).',
      chashu: 'Chashu (on "all toppings").',
      notable_toppings: ['menma', 'nori', 'soft-boiled egg', 'katsuobushi salt', 'garlic shichimi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-seafood dip.' },
      pantheon: 'Mita Seimenjo by Amza: thick, chewy tsukemen with a dense seafood-pork dip, free to 500 g, plus rotating niboshi and bonito specials.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536209441/', '"Since the dipping sauce was thick, I didn\'t experience the common issue of it becoming diluted halfway through."'],
        oiliness: [R + 'B536209441/', 'Oil not described — mid-scale (inferred).'],
        clarity: [R + 'B536209441/', 'Thick dipping sauce — opaque.'],
        tare_strength: [R + 'B450838967/', '"The saltiness was quite strong" (niboshi special); "bold" black-bonito dip (' + R + 'B536209441/).'],
        noodle_firmness: [R + 'B536209441/', '"The noodles were firm and satisfying"; one found the niboshi ramen noodles too soft (' + R + 'B450838967/).'],
        aroma_punch: [R + 'B536209441/', '"The rich dipping sauce had a strong bonito flavor."'],
      },
      confidence: 'medium', sources: [R + 'B536209441/', R + 'B450838967/', R + 'B537419336/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'QR ordering at the table.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-11-3 樋口建物 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目11番3号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B450838967/', R + 'B512491155/', R + 'B489530460/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen (free up to 500 g)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Black-bonito tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'kurokatsuo'),
      it('', '', 'Limited niboshi chuka soba', '¥1,100', 'Ramen', 'no', 'no', 'October 2026; extra niboshi +¥200.', 'niboshi_chuka'),
      it('', '', 'Chilled sea-bream shio tsukemen, all toppings', '¥1,340', 'Seasonal', 'no', 'no', 'August 2026.', 'tai_shio'),
      it('', '', 'Cold spicy soy-milk tantanmen', '¥1,150', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi_tantan'),
    ] }, {
    cuisine: '太麺のつけ麺チェーン・麺は500gまで無料・濃厚な魚介豚骨のつけ汁・黒鰹つけ麺・限定の煮干し中華そば1,100円と煮干しつけ麺・冷やし鯛塩つけ麺(全部のせ1,340円)・冷やし豆乳辛担々麺1,150円・スープ割り・鰹節塩とにんにく七味・54席',
    neighborhood: '千日前2-11-3 樋口建物1F、アムザやNGKの近く',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油と魚介のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。豚骨魚介のつけ汁、チャーシュー、卵。',
    notes: '[つけ麺・アムザ近くの三田製麺所の太麺つけ麺] 三田製麺所のつけ麺チェーンのアムザ近くの54席の店で、朝10時から深夜3時まで、昼は混雑。定番はもちもちの太麺に濃厚なつけ汁で、500gまで無料で増量できます。鰹節塩やにんにく七味で味を変え、締めはスープ割り。限定も入れ替わり、鰹がガツンと来る黒鰹つけ麺、「液体の煮干し」のような濃さの煮干し中華そば(1,100円、2026年10月)、夏は冷やし鯛塩つけ麺(全部のせ1,340円)や花椒たっぷりの冷やし豆乳担々麺(1,150円)。注文は席でQRコードから。',
  });
}

// ================================================================ ホルモンラーメン 8910 ヨーロッパ通店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27133665/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_horumon_ramen_8910_europe_dori', name: 'ホルモンラーメン 8910 ヨーロッパ通店 (Horumon Ramen 8910 Europe-dōri)', category: 'OMNI',
    lat: 34.6721, lng: 135.502473, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal, beef, meat broth.',
    hours_raw: 'Open 24 hours (Tabelog). E-money accepted; no cards or QR (Tabelog). Set meals even on Saturdays (March 2026).',
    hours: ALL(H24), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-16-17, Ōkini Kinikini Bldg 1F, on Europe-dōri',
    cuisine: 'Spicy horumon mazesoba ¥1,280 (large free) with thick curly noodles and yakiniku-size offal · shoyu ramen ¥1,050 · spicy kalbi ramen ¥990 · beef-bone white soup · 24 h · counter',
    website: 'http://8910.sunlar333-pinoko.com/', gmaps: gm('ホルモンラーメン 8910 ヨーロッパ通店'), menu_url: null,
    notes: "[Ramen · offal mazesoba on Europe-dōri, round the clock] The Europe-dōri branch of Horumon Ramen 8910, open 24 hours. The draw is the limited spicy horumon mazesoba (¥1,280, October 2026; the large is the same price): thick, curly, chewy noodles in a fiery sauce with offal chunks like a yakiniku restaurant's, plus lots of fried onion. It is much spicier than expected, so stir in an egg. There's also a slightly sweet shoyu ramen (¥1,050) and a spicy kalbi ramen (¥990). Reviews are mixed: several found the regular ramen and beef-bone white soup underwhelming, and it is often quiet. Staff are polite.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2023 (Tabelog)', background: 'Horumon Ramen 8910 chain (8910.sunlar333-pinoko.com).', philosophy: null, specialty: 'Horumon mazesoba.',
      anecdotes: [
        { text: '"The thick, curly noodles have a satisfying chewiness, and the rich spicy sauce is delicious… The Horumon pieces are substantial, almost like what you\'d find at a yakiniku restaurant." — October 2026, spicy horumon mazesoba ¥1,280.', source: R + 'B502926691/' },
        { text: '"I expected the \'spicy\' to be mild, but it was much spicier than I anticipated, so I added an egg halfway through." — October 2026, around 8 am.', source: R + 'B537584709/' },
      ],
      japanese_sources_summary: '食べログ: ホルモンラーメン 8910 ヨーロッパ通店、大阪市中央区東心斎橋1-16-17 おおきにキニキニビル1F、24時間営業、禁煙、電子マネー可、カード・QR決済不可、2023年4月1日開店。口コミ(2025年3月〜2026年10月): 限定の辛ホルモンまぜそば1,280円(大盛も同じ値段)、太いちぢれ麺、焼肉店のようなホルモン、揚げ玉ねぎ、醤油ラーメン1,050円(ほのかな甘み)、インスタントのような味という声、辛カルビラーメン990円(細麺、量は少なめ)、土曜も定食あり、海外のラーメンのようという声、外国人スタッフは丁寧、牛骨白湯は物足りないという声、胡椒と七味で調整、朝8時、想像より辛く卵を足した。',
      confidence: 'medium', sources: [TB, R + 'B502926691/', R + 'B537584709/', R + 'B525100440/', R + 'B531722122/', R + 'B525219602/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: false, notes: 'Thick, curly noodles in the mazesoba (October 2026); thin in the kalbi ramen (March 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Spicy horumon mazesoba ¥1,280 (October 2026).',
      chashu: null,
      notable_toppings: ['horumon (offal)', 'fried onion', 'egg (add-in)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Offal.' },
      pantheon: 'Europe-dōri\'s 24-hour offal mazesoba: thick curly noodles, yakiniku-size horumon and a fiery sauce best tamed with an egg.',
      profile: { richness: 4, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537584709/', '"This one felt relatively rich due to the use of Horumon and the strong flavors of spice."'],
        oiliness: [R + 'B502926691/', 'Sauce soaked up by fried onions — mid-scale (inferred).'],
        clarity: [R + 'B502926691/', 'Soupless mazesoba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B502926691/', '"The rich spicy sauce is delicious."'],
        noodle_firmness: [R + 'B502926691/', '"The thick, curly noodles have a satisfying chewiness."'],
        aroma_punch: [R + 'B537584709/', '"It was much spicier than I anticipated."'],
      },
      confidence: 'medium', sources: [R + 'B502926691/', R + 'B537584709/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; polite overseas staff.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-17 おおきにキニキニビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番17号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502926691/', R + 'B525100440/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Spicy horumon mazesoba (limited; large same price)', '¥1,280', 'Mazesoba', 'no', 'no', 'October 2026.', 'kara_horumon_maze'),
      it('', '', 'Shoyu ramen', '¥1,050', 'Ramen', 'no', 'no', 'March 2025.', 'shoyu'),
      it('', '', 'Spicy kalbi ramen', '¥990', 'Ramen', 'no', 'no', 'March 2026.', 'kara_kalbi'),
    ] }, {
    cuisine: '太いちぢれ麺と焼肉のようなホルモンの辛ホルモンまぜそば1,280円(大盛無料)・醤油ラーメン1,050円・辛カルビラーメン990円・牛骨白湯・24時間・カウンター',
    neighborhood: '東心斎橋1-16-17 おおきにキニキニビル1F、ヨーロッパ通り',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。ホルモン、牛肉、肉のスープ。',
    notes: '[ラーメン・ヨーロッパ通りの24時間のホルモンまぜそば] ホルモンラーメン8910のヨーロッパ通店で、24時間営業。お目当ては限定の辛ホルモンまぜそば(1,280円、2026年10月、大盛も同じ値段)で、もちもちの太いちぢれ麺に辛いたれ、焼肉店のような大きなホルモン、たっぷりの揚げ玉ねぎ。想像以上に辛いので卵を混ぜて。ほのかに甘い醤油ラーメン(1,050円)や辛カルビラーメン(990円)も。評価は分かれ、普通のラーメンや牛骨白湯は物足りないという声が複数あり、空いていることも多い店。スタッフは丁寧です。',
  });
}

save();
