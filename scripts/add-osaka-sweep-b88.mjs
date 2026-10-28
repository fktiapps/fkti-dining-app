// Osaka sweep (2-mile circle around Dotonbori), batch 88 — ramen phase (all OMNI).
//   + 麺や ずずずいーと (Ibuki iriko seafood shio, house noodles, charcoal chashu; opened March 2026; Matsuyamachi)
//   + 鶏ガラ醤油らーめん じゅうじせい (chicken-and-niboshi shoyu with tuna bonito; open past midnight; Honmachi)
//   + 四川式担々麺 だるま 船場店 (tantanmen, hot-and-sour noodles, ¥50 half fried rice; Senba Center Bldg B2F)
//   + 麺屋 やまひで 堺筋本町店 (Taiwan mazesoba with oi-meshi; open to 02:00 weekdays)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 88);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺や ずずずいーと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27154935/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:30', '21:00']), WE = day(['11:00', '15:00']);
  put({
    id: 'osaka_menya_zuzuzuito_bakuromachi', name: '麺や ずずずいーと (Menya Zuzuzuito)', category: 'OMNI',
    lat: 34.678526, lng: 135.510626, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made Hokkaido-wheat noodles, wonton wrappers, soy tare in the shoyu bowls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and mackerel-flake broth, pork and chicken chashu, wontons.',
    hours_raw: 'Tue–Fri 11:30–15:00 and 17:30–21:00; Sat, Sun and holidays 11:00–15:00; closed Mondays; temporary changes on Instagram (Tabelog, staff-maintained). PayPay accepted; no cards or e-money (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 1-1-7, by the Yokobori River — 5–7 min from Matsuyamachi Stn',
    cuisine: 'Seafood shio ramen ¥950: Ibuki iriko, mackerel flakes, kombu and dried shiitake with a special salt tare and a shellfish oil · special shio ¥1,380 with four chashu cuts (pork belly, shoulder, thigh and chicken thigh) · shio wonton ¥1,280 · shoyu ramen with two soy sauces, shoyu wonton · seasoned egg ¥150 · house-made thin straight Hokkaido-wheat noodles · thick menma, yuzu peel, fried green onion · charcoal-grilled chashu rice bowl ¥500 · chilled shio or shoyu in summer ¥1,200 · additive-free, per the shop · 6 counter seats, 2 tables for two',
    website: null, gmaps: gm('麺や ずずずいーと 博労町'), menu_url: null,
    notes: "[Ramen · clear iriko shio and charcoal chashu by Matsuyamachi] A small, wood-toned shop by the Yokobori River, open since March 2026 and already featured in Ramen Walker, with a posted note about its additive-free cooking. The shio ramen (¥950) is the lead: a clear dashi of Ibuki iriko, mackerel flakes, kombu and dried shiitake, finished with salt tare and a shellfish oil, light but full of seafood umami. House-made thin straight noodles of Hokkaido wheat are chewy; chashu is grilled over charcoal on a shichirin. The special shio (¥1,380) brings four chashu cuts, and the wontons (shio wonton ¥1,280) are plump and juicy; one diner ranks them among the best in Osaka. The shoyu blends two soy sauces; one diner found it less striking than the shio. Weekday waits were short; Sunday afternoon was packed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 March 2026 (Tabelog)', background: 'Ramen shop (Tabelog, staff-maintained); featured in Ramen Walker (October 2026 review).', philosophy: 'No additives, per the shop\'s posted note (October 2026 review).', specialty: 'Seafood shio ramen; wontons.',
      anecdotes: [
        { text: '"The broth was a delightful seafood soup made from Ibuki iriko, upper mackerel flakes, genuine kombu, and domestic dried shiitake mushrooms, combined with a special salt sauce. The soup was light yet packed with the umami of seafood, enhanced by fried green onions and yuzu." — October 2026, shio wonton ¥1,280.', source: R + 'B530156012/' },
        { text: '"The chashu, grilled over charcoal in a shichirin (Japanese grill), is exceptional, offering a live cooking experience along with a delightful smokiness and concentrated flavor." — October 2026, special shio ¥1,380.', source: R + 'B538114187/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺や ずずずいーと、大阪市中央区博労町1-1-7、松屋町駅から371m、火〜金11:30〜15:00・17:30〜21:00、土日祝11:00〜15:00、月曜定休、臨時休業はInstagram、PayPay可、カード・電子マネー不可、10席(カウンター6、2人掛け2卓)、禁煙、2026年3月30日開店。口コミ(2026年7〜10月): 塩ワンタン麺1,280円、味玉150円、伊吹いりこ、上鯖節、真昆布、国産干し椎茸の魚介スープに特製の塩だれ、揚げねぎと柚子、北海道産小麦の自家製細麺、太いメンマ、七輪の炭火焼きチャーシュー、ワンタン4個、夏の冷やし塩1,200円(塩か醤油、レモン酢)、低温調理の鶏胸と豚のレアチャーシュー、昆布の佃煮、LINEのアンケートでトッピング無料クーポン、塩ラーメン950円、柔らかいメンマ、特製醤油、日曜午後は満席、ラーメンWalkerに掲載、特製塩1,380円、炭火焼きチャーシュー丼500円、貝の香味油、中細麺、豚バラ・肩・モモ・鶏モモ、横堀川沿い、無添加、醤油ワンタン麺、2種の醤油、ワンタンは大阪屈指という声、醤油は物足りないという声。',
      confidence: 'medium', sources: [TB, R + 'B530156012/', R + 'B538114187/', R + 'B537382200/', R + 'B532008065/', R + 'B536850565/', R + 'B537759352/'] },
    ramen: {
      broth_base: ['niboshi', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: ['shellfish oil'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made thin straight noodles of Hokkaido wheat, chewy (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi'],
      signature_bowl: 'Special shio ramen, ¥1,380 (October 2026); shio ramen ¥950.',
      chashu: 'Charcoal-grilled on a shichirin; four cuts in the special (October 2026).',
      notable_toppings: ['wontons', 'thick menma', 'yuzu peel', 'fried green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi and mackerel broth.' },
      pantheon: 'Matsuyamachi\'s new iriko shio: a clear sardine-and-mackerel broth with shichirin-grilled chashu.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B530156012/', '"The soup was light yet packed with the umami of seafood" — placed low.'],
        oiliness: [R + 'B532008065/', '"The broth was light and refreshing" — placed low.'],
        clarity: [R + 'B530156012/', '"The seafood salt clear soup."'],
        tare_strength: [R + 'B538114187/', '"Lingering salt broth" — mid-scale.'],
        noodle_firmness: [R + 'B537382200/', '"Cooked to a perfect firmness, featuring a delightful texture with a nice bite."'],
        aroma_punch: [R + 'B537382200/', '"The initial flavor is dominated by the taste of Ibuki iriko" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B530156012/', R + 'B537382200/', R + 'B538114187/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-1-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目1番7号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530156012/', R + 'B532008065/', R + 'B537382200/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Special shio ramen', '¥1,380', 'Ramen', 'no', 'no', 'Four chashu cuts; October 2026.', 'tokusei_shio'),
      it('', '', 'Shio wonton ramen', '¥1,280', 'Ramen', 'no', 'no', 'October 2026.', 'shio_wonton'),
      it('', '', 'Shoyu wonton ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu_wonton'),
      it('', '', 'Charcoal-grilled chashu rice bowl', '¥500', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '魚介の塩ラーメン950円: 伊吹いりこ、鯖節、昆布、干し椎茸に特製の塩だれと貝の香味油・豚バラ、肩、モモ、鶏モモの4種のチャーシューの特製塩1,380円・塩ワンタン麺1,280円・2種の醤油の醤油ラーメン、醤油ワンタン麺・味玉150円・北海道産小麦の自家製細ストレート麺・太いメンマ、柚子皮、揚げねぎ・炭火焼きチャーシュー丼500円・夏は冷やしの塩か醤油1,200円・店の説明では無添加・カウンター6席、2人掛けテーブル2卓',
    neighborhood: '中央区博労町1-1-7、横堀川沿い。松屋町駅から徒歩5〜7分',
    gf_detail: 'グルテンフリーではありません。北海道産小麦の自家製麺、ワンタンの皮、醤油ラーメンの醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。煮干しと鯖節のスープ、豚と鶏のチャーシュー、ワンタン。',
    notes: '[ラーメン・松屋町近く、澄んだいりこ塩と炭火チャーシュー] 横堀川沿いにある木の温もりの小さな店で、2026年3月開店、早くもラーメンWalkerに掲載、無添加へのこだわりを店の説明に掲げる。主役は塩ラーメン(950円)で、伊吹いりこ、鯖節、昆布、干し椎茸の澄んだだしに塩だれと貝の香味油、軽いが魚介の旨味たっぷり。北海道産小麦の自家製細ストレート麺はもちもち、チャーシューは七輪の炭火で焼く。特製塩(1,380円)はチャーシュー4種、ワンタン(塩ワンタン麺1,280円)はぷりぷりでジューシー、大阪でも屈指という声も。醤油は2種の醤油を合わせるが、塩ほどの印象はなかったという声も。平日は待ちが少なく、日曜午後は満席だった。',
  });
}

// ================================================================ 鶏ガラ醤油らーめん じゅうじせい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27137722/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['19:00', '00:30']);
  put({
    id: 'osaka_torigara_shoyu_juujisei_minamihonmachi', name: '鶏ガラ醤油らーめん じゅうじせい (Torigara Shoyu Ramen Juujisei)', category: 'OMNI',
    lat: 34.682312, lng: 135.501943, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; kara-age and fried rice sides.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and niboshi broth, tuna bonito flakes, chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 19:00–00:30; Sun 11:30–15:00 and 19:00–24:00; closed Saturdays; hours may change (Tabelog). Ticket machine inside; the listing says cash only, but one diner paid by card and mobile at the machine (September 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 6: day(['11:30', '15:00'], ['19:00', '23:59']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamihonmachi 3-3-10 — about 4 min from Honmachi Stn',
    cuisine: 'Chicken-bone shoyu ramen · white-shoyu tuna-bonito (maguro-bushi) ramen ¥1,030, the default: chicken bones and niboshi with tuna flakes, wood-ear mushroom, green onion and bean sprouts · yuzu ramen · chilled salt-shoyu with lemon-pickled onion and prosciutto ¥800 in summer · medium-thin straight noodles · extra chashu, seasoned egg · kara-age and half fried rice set ¥600 · katsuobushi to add halfway · counter only',
    website: null, gmaps: gm('じゅうじせい 南本町'), menu_url: null,
    notes: "[Ramen · a light chicken shoyu with tuna bonito, open past midnight in Honmachi] A small counter shop near Honmachi, open since 2023, that serves lunch and then reopens at 19:00 until after midnight, handy after drinks. The default bowl is the white-shoyu maguro-bushi ramen (¥1,030): a light soy broth of chicken bones and niboshi lifted with tuna-bonito flakes, with medium-thin straight noodles, chashu and a generous heap of crunchy wood-ear mushroom, green onion and bean sprouts; add katsuobushi halfway to change the flavor. The yuzu ramen is lighter still. In summer there was a chilled salt-shoyu with lemon-pickled onion and prosciutto (¥800). Portions are modest, so pair it with the kara-age and half fried rice set (¥600). Buy a ticket at the machine. Closed Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 January 2023 (Tabelog)', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'White-shoyu tuna-bonito ramen.',
      anecdotes: [
        { text: '"The broth was a light soy flavor made from chicken bones and niboshi (dried sardines), combined with bonito flakes, resulting in a refreshing taste that was perfect for a late-night meal after drinks. The noodles were medium-thin and straight." — September 2026, white-shoyu maguro-bushi ramen ¥1,030.', source: R + 'B534768161/' },
        { text: '"The bowl was refreshingly chilled, featuring straight thin noodles, onion pickles, prosciutto, and black pepper." — August 2026, chilled salt-shoyu ramen ¥800.', source: R + 'B534523279/' },
      ],
      japanese_sources_summary: '食べログ: 鶏ガラ醤油らーめん じゅうじせい、大阪市中央区南本町3-3-10、本町駅から292m、月〜金11:00〜15:00・19:00〜翌0:30、日11:30〜15:00・19:00〜24:00、土曜定休、カード・電子マネー・QR不可(掲載情報)、2023年1月5日開店。口コミ(2026年8〜9月): 冷やし塩醤油ラーメン レモン汁の漬物800円、ストレート細麺、玉ねぎの漬物、生ハム、黒胡椒、チャーハン、白醤油鮪節ラーメン1,030円、鶏ガラと煮干しにかつお節のあっさり醤油、中細ストレート麺、きくらげ、ねぎ、もやし、唐揚げと半チャーハンのセット600円、柚子ラーメン、肉増しと味玉、22時半に一人、カウンターのみ、券売機でカードやスマホ決済が使えたという声、途中でかつお節を足して味変、量は多くない、鶏ガラの深い味わい、醤油のバランス。',
      confidence: 'medium', sources: [TB, R + 'B534768161/', R + 'B534523279/', R + 'B534813718/', R + 'B535358781/', R + 'B535810169/', R + 'B536083191/'] },
    ramen: {
      broth_base: ['chicken', 'niboshi', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'White-shoyu maguro-bushi ramen, ¥1,030 (September 2026).',
      chashu: 'Chashu; extra meat available (September 2026).',
      notable_toppings: ['wood-ear mushroom', 'green onion', 'bean sprouts', 'katsuobushi (add-in)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken and fish broth.' },
      pantheon: 'Honmachi\'s late-night light shoyu: chicken and niboshi lifted with tuna-bonito flakes.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534768161/', '"A light soy flavor" — placed low.'],
        oiliness: [R + 'B536083191/', '"I could enjoy it without feeling heavy until the last bite" — placed low.'],
        clarity: [R + 'B534768161/', 'Light soy broth, "refreshing" — placed high.'],
        tare_strength: [R + 'B536083191/', '"The soy sauce flavor was just right" — mid-scale.'],
        noodle_firmness: [R + 'B534768161/', 'Medium-thin straight, "easy to slurp down" — mid-scale.'],
        aroma_punch: [R + 'B535810169/', '"The bonito flavor from the tuna is rich" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534768161/', R + 'B536083191/', R + 'B535810169/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町3-3-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町三丁目3番10号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534768161/', R + 'B534523279/', R + 'B534813718/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White-shoyu maguro-bushi ramen', '¥1,030', 'Ramen', 'no', 'no', 'September 2026.', 'shiro_shoyu'),
      it('', '', 'Yuzu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'yuzu'),
      it('', '', 'Chilled salt-shoyu ramen with lemon pickles', '¥800', 'Seasonal', 'no', 'no', 'Summer; August 2026.', 'hiyashi'),
      it('', '', 'Kara-age and half fried rice set', '¥600', 'Sets', 'no', 'no', 'September 2026.', 'karaage_set'),
    ] }, {
    cuisine: '鶏ガラ醤油らーめん・定番の白醤油鮪節ラーメン1,030円: 鶏ガラと煮干しに鮪節、きくらげ、ねぎ、もやし・柚子ラーメン・夏はレモン漬けの玉ねぎと生ハムの冷やし塩醤油800円・中細ストレート麺・肉増し、味玉・唐揚げと半チャーハンのセット600円・途中でかつお節を足して・カウンターのみ',
    neighborhood: '中央区南本町3-3-10。本町駅から徒歩4分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げとチャーハン。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと煮干しのスープ、鮪節、チャーシュー。',
    notes: '[ラーメン・本町、深夜まで営業のあっさり鶏醤油と鮪節] 本町近くの小さなカウンターの店で、2023年開店、昼のあと19時から深夜0時過ぎまで営業し、飲んだあとにも便利。定番は白醤油鮪節ラーメン(1,030円)で、鶏ガラと煮干しのあっさり醤油に鮪節が香り、中細ストレート麺、チャーシュー、たっぷりのシャキシャキのきくらげ、ねぎ、もやし。途中でかつお節を足して味変を。柚子ラーメンはさらに軽い。夏はレモン漬けの玉ねぎと生ハムの冷やし塩醤油(800円)も。量は多くないので、唐揚げと半チャーハンのセット(600円)を合わせて。券売機で食券を。土曜定休。',
  });
}

// ================================================================ 四川式担々麺 だるま 船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27140849/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_shisen_tantanmen_daruma_senba', name: '四川式担々麺 だるま 船場店 (Shisen Shiki Tantan-men Daruma Senba)', category: 'OMNI',
    lat: 34.682066, lng: 135.500826, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and doubanjiang seasoning; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat in the tantanmen; meat broth not ruled out.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 17:00–22:00; closed Sundays; hours may change (Tabelog). E-money and QR accepted; no cards (Tabelog). Follow the shop\'s Instagram for a free seasoned egg (September 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 3-3-9, Senba Center Bldg No. 9, B2F — 187 m from Honmachi Stn',
    cuisine: 'Sichuan-style tantanmen in four kinds, spice level to choose · white sesame tantanmen (new, mild) ¥950 · dry (shiru-nashi) tantanmen with rice · hot-and-sour suanla noodles · half fried rice or mapo rice bowl +¥50 with noodles · pan-fried gyoza',
    website: null, gmaps: gm('四川式担々麺 だるま 船場店'), menu_url: null,
    notes: "[Ramen · Sichuan tantanmen and ¥50 fried rice under the Senba Center Building] A tantanmen specialist two floors down in the Senba Center Building, open since 2024 and packed at weekday lunch, quieter on Saturdays. Four kinds of tantanmen with adjustable heat: the new white sesame (¥950) is rich in sesame with a strong Sichuan-spice note, labelled mild but hot enough for one diner; there's also a dry tantanmen that comes with rice. A regular swears by the hot-and-sour noodles, tangy and numbing more than fiery. The deal that people write about is the ¥50 add-on with any noodle: half fried rice or a mapo rice bowl. Pan-fried gyoza are good too, and staff are friendly. Follow the Instagram for a free seasoned egg. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 March 2024 (Tabelog)', background: 'Tantanmen specialist (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Sichuan-style tantanmen; hot-and-sour noodles.',
      anecdotes: [
        { text: '"The hot and sour noodles are delicious every time I have them; they\'re not overly spicy, but the tanginess and numbing sensation are irresistible." — July 2026, fourth visit.', source: R + 'B529388482/' },
        { text: '"The tantanmen… was incredibly delicious, with a rich sesame flavor and a strong hint of Sichuan spices. The balance of moderate spiciness and umami was perfect." — October 2026.', source: R + 'B536747498/' },
      ],
      japanese_sources_summary: '食べログ: 四川式担々麺 だるま 船場店、大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F、本町駅から187m、月〜土11:00〜15:00・17:00〜22:00、日曜定休、電子マネー・QR可、カード不可、2024年3月1日開店。口コミ(2026年6〜10月): 酸辣麺がいつもの一杯、満席でも回転が早い、辛すぎず酸味としびれ、半チャーハン、ライチ、週1で通う、汁なし担々麺はご飯付き、麺はやや硬め、麻婆丼、担々麺は4種類で辛さを選べる、白胡麻担々麺(新味)950円、半チャーハン50円、Instagramのフォローで味玉、マイルドでも辛い、焼き餃子、スタッフが親切、土曜は空いている、セットのご飯ものは50円、濃厚な胡麻と四川の香辛料、ひき肉。',
      confidence: 'medium', sources: [TB, R + 'B529388482/', R + 'B536747498/', R + 'B534829625/', R + 'B536069112/', R + 'B536218523/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles a little firm in the dry tantanmen (July 2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'shiru_nashi_tantanmen'],
      signature_bowl: 'White sesame tantanmen, ¥950 (September 2026).',
      chashu: 'Minced meat (October 2026).',
      notable_toppings: ['minced meat', 'free seasoned egg (Instagram follow)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Senba\'s basement tantanmen counter: rich sesame, Sichuan numbing, and fried rice for ¥50.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536747498/', '"A rich sesame flavor" — placed high.'],
        oiliness: [R + 'B536069112/', '"Incredibly easy to eat" — mid-scale.'],
        clarity: [R + 'B536747498/', 'Sesame tantanmen broth — placed low.'],
        tare_strength: [R + 'B529388482/', '"It\'s probably high in salt" (hot-and-sour) — placed high.'],
        noodle_firmness: [R + 'B529388482/', 'Dry tantanmen noodles "a bit firmer than usual" — mid-scale.'],
        aroma_punch: [R + 'B536747498/', '"A strong hint of Sichuan spices" — placed high.'],
      },
      confidence: 'low', sources: [R + 'B536747498/', R + 'B529388482/', R + 'B536069112/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff (September 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央3-3-9 船場センタービル9号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区船場中央三丁目3番9号 (go) 42m — long building, Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534829625/', R + 'B536218523/', R + 'B529388482/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White sesame tantanmen', '¥950', 'Tantanmen', 'no', 'no', 'Mild; September 2026.', 'shiro_goma'),
      it('', '', 'Dry tantanmen with rice', '', 'Tantanmen', 'no', 'no', 'July 2026.', 'shirunashi'),
      it('', '', 'Hot-and-sour noodles', '', 'Noodles', 'no', 'no', 'September 2026.', 'suanla'),
      it('', '', 'Half fried rice or mapo rice bowl (with noodles)', '+¥50', 'Sides', 'no', 'no', 'September 2026.', 'han_chahan'),
      it('', '', 'Pan-fried gyoza', '', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '四川式担々麺4種、辛さを選べる・新味の白胡麻担々麺(マイルド)950円・ご飯付きの汁なし担々麺・酸辣麺・麺と一緒なら半チャーハンか麻婆丼が+50円・焼き餃子',
    neighborhood: '中央区船場中央3-3-9 船場センタービル9号館 B2F。本町駅から187m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や豆板醤の味付け、餃子。',
    vegan_detail: 'ヴィーガンではありません。担々麺にひき肉、肉のスープの可能性も。',
    notes: '[ラーメン・船場センタービル地下の四川担々麺と50円チャーハン] 船場センタービルの地下2階にある担々麺専門店で、2024年開店、平日昼は満席、土曜は空いている。担々麺は4種類で辛さを選べ、新味の白胡麻(950円)は胡麻が濃く四川の香辛料がしっかり、マイルドでも辛かったという声も。ご飯付きの汁なし担々麺も。常連が推すのは酸辣麺で、辛さより酸味としびれ。話題は麺と一緒なら50円の半チャーハンか麻婆丼。焼き餃子もおいしく、スタッフは親切。Instagramをフォローすると味玉。日曜定休。',
  });
}

// ================================================================ 麺屋 やまひで 堺筋本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27091402/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '02:00']);
  put({
    id: 'osaka_menya_yamahide_sakaisuji_honmachi', name: '麺屋 やまひで 堺筋本町店 (Menya Yamahide Sakaisuji Honmachi)', category: 'OMNI',
    lat: 34.681353, lng: 135.507352, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Taiwan-style minced pork, egg, chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 18:00–02:00 (L.O. 01:30); Sat 11:30–14:30; closed Sundays and holidays; updates on Instagram (Tabelog, staff-maintained). Ticket machine; cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:30', '14:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kyutaromachi 1-9-2, Eight Bldg 1F — 1 min from Sakaisuji-Hommachi Stn exit 6',
    cuisine: 'Taiwan mazesoba ¥900, regular or small, garlic to taste: spicy Taiwan-style minced pork, green onion, garlic chives, garlic, chili and egg on thick chewy noodles · oi-meshi rice ¥50 to mix with the last of the sauce · kombu vinegar to change the flavor · spicy ramen with grilled chashu and menma · counter seats',
    website: null, gmaps: gm('麺屋 やまひで 堺筋本町店'), menu_url: null,
    notes: "[Ramen · Taiwan mazesoba with oi-meshi, open late by Sakaisuji-Honmachi] A small counter a minute from Sakaisuji-Hommachi exit 6, open since 2016 and part of a brand that also has a Nara shop. The draw is the Taiwan mazesoba (¥900, regular or small, garlic to taste): spicy Taiwan-style minced pork with green onion, garlic chives, garlic and chili, balanced by egg, on thick chewy noodles that hold the toppings. Mix hard, change it up with kombu vinegar, then follow the house routine for oi-meshi: leave the spoon in your empty bowl, set it on the counter, and ask for rice (¥50) to mop up the rest. There's also a spicy ramen with grilled chashu that one diner found lighter than it looks. The master is friendly. Open until 02:00 on weeknights; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 April 2016 (Tabelog)', background: 'Taiwan mazesoba shop (Tabelog, staff-maintained); the brand also has a Nara shop (October 2026 review).', philosophy: null, specialty: 'Taiwan mazesoba.',
      anecdotes: [
        { text: '"The combination of green onions, garlic chives, garlic, and chili peppers, along with the Taiwanese minced meat, creates a spicy yet mellow flavor that is beautifully balanced by the egg. The noodles are thick and have a nice chew." — September 2026.', source: R + 'B535106351/' },
        { text: '"I place my empty bowl, with the spoon still in it, on the counter and ask for the \'oi-meshi\' (extra rice). I mix the remaining broth with the rice and savor every bite." — September 2026.', source: R + 'B535106351/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺屋 やまひで 堺筋本町店、大阪市中央区久太郎町1-9-2 エイトビル 1F、堺筋本町駅6番出口から徒歩1分、月〜金11:00〜15:00(L.O.14:30)・18:00〜翌2:00(L.O.1:30)、土11:30〜14:30、日祝休み、Instagramで告知、カード・電子マネー・QR不可、カウンター席、2016年4月15日開店。口コミ(2026年6〜10月): 台湾まぜそば、明るく気さくな店主、店内は清潔、辛いスープは見た目より重くない、炙りチャーシューとメンマ、台湾まぜそば900円は並か小、にんにく少なめ、追い飯50円、ねぎ、ニラ、にんにく、唐辛子と台湾ミンチ、卵、太くもちもちの麺、空の器にレンゲを入れてカウンターに置き追い飯、奈良の店にもよく行く、追い飯は有料に、昆布酢で味変、いつもより軽め。',
      confidence: 'medium', sources: [TB, R + 'B535106351/', R + 'B535076289/', R + 'B537101771/', R + 'B530138152/', R + 'B530342330/', R + 'B536747554/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy noodles that hold the toppings (September 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Taiwan mazesoba, ¥900 (September 2026).',
      chashu: 'Grilled chashu in the spicy ramen (June 2026).',
      notable_toppings: ['Taiwan-style minced pork', 'egg', 'garlic chives', 'garlic', 'oi-meshi rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced pork.' },
      pantheon: 'Sakaisuji-Honmachi\'s late-night Taiwan mazesoba, with the spoon-in-bowl oi-meshi ritual.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B535106351/', '"A spicy yet mellow flavor… balanced by the egg" — placed high.'],
        oiliness: [R + 'B537101771/', '"It felt a bit lighter than usual" — mid-scale.'],
        clarity: [R + 'B535106351/', 'Soupless mazesoba — placed low.'],
        tare_strength: [R + 'B535106351/', 'Spicy minced-meat sauce enough to season rice — placed high.'],
        noodle_firmness: [R + 'B535106351/', '"The noodles are thick and have a nice chew."'],
        aroma_punch: [R + 'B535106351/', 'Green onion, garlic chives, garlic and chili — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B535106351/', R + 'B535076289/', R + 'B537101771/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; friendly master (June, September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区久太郎町1-9-2 エイトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained) with October closure notices; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区久太郎町一丁目9番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535076289/', R + 'B537101771/', R + 'B535106351/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Taiwan mazesoba (regular or small)', '¥900', 'Mazesoba', 'no', 'no', 'September 2026.', 'taiwan_mazesoba'),
      it('', '', 'Oi-meshi rice', '¥50', 'Sides', 'no', 'no', 'October 2026.', 'oimeshi'),
      it('', '', 'Spicy ramen with grilled chashu', '', 'Ramen', 'no', 'no', 'June 2026.', 'kara_ramen'),
    ] }, {
    cuisine: '台湾まぜそば900円、並か小、にんにくの量を選べる: 辛い台湾ミンチ、ねぎ、ニラ、にんにく、唐辛子、卵を太いもちもち麺に・残ったたれに混ぜる追い飯50円・昆布酢で味変・炙りチャーシューとメンマの辛いラーメン・カウンター席',
    neighborhood: '中央区久太郎町1-9-2 エイトビル 1F。堺筋本町駅6番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺。',
    vegan_detail: 'ヴィーガンではありません。台湾ミンチ、卵、チャーシュー。',
    notes: '[ラーメン・堺筋本町、深夜まで営業の台湾まぜそばと追い飯] 堺筋本町駅6番出口から1分の小さなカウンターの店で、2016年開店、奈良にも店がある。看板は台湾まぜそば(900円、並か小、にんにくの量を選べる)で、辛い台湾ミンチにねぎ、ニラ、にんにく、唐辛子を卵がまろやかにまとめ、具をよく絡める太いもちもち麺。よく混ぜ、昆布酢で味変し、最後は店の作法で追い飯を: 空の器にレンゲを入れてカウンターに置き、ご飯(50円)を頼んで残りのたれと混ぜる。炙りチャーシューの辛いラーメンもあり、見た目より重くないという声。店主は気さく。平日は深夜2時まで、現金のみ。',
  });
}

save();
