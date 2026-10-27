// Osaka sweep (2-mile circle around Dotonbori), batch 59 — mom phase (≤20 seats), nearest first.
//   + たこ家道頓堀くくる 宗右衛門町店 (20-seat sit-down takoyaki in a basement — filed 'okonomiyaki' like other takoyaki)
//   + 炭火やきとり愛之助 道頓堀店 (binchotan yakitori, wing kara-age in three flavors, English menu — filed 'yakitori')
//   + 鉄板Osaka (teppanyaki to 3 am; the listing says it can handle allergies and vegetarian requests → GF/vegan 'ask' — filed 'other')
//   + 大阪焼肉 ヒロミヤ (5-seat yakiniku counter with half portions — filed 'other')
// Skips: 鮨処 なかたに 27084853 (newest review May 2025, not staff-maintained), こなもん天国 27077150 (newest review August 2025, thin).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 59);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27084853', 'Sushi Dokoro Nakatani: newest review May 2025; listing not staff-maintained');
skip('27077150', 'Konamon Tengoku: newest review August 2025; too little recent evidence');

// ================================================================ たこ家道頓堀くくる 宗右衛門町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27094907/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://dotonbori-kukuru.com/';
  put({
    id: 'osaka_takoya_kukuru_souemoncho', name: 'たこ家道頓堀くくる 宗右衛門町店 (Takoya Dotonbori Kukuru Souemonchou)', category: 'OMNI',
    lat: 34.669324, lng: 135.503162, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour takoyaki batter; takoyaki sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus, egg in the batter, bonito flakes.',
    hours_raw: 'Daily 11:00–18:00 (Tabelog). Buy a ticket at the machine in front, then wait for your number (May and August 2026). No reservations. Cards, e-money and QR accepted. Take-out available.',
    hours: ALL(day(['11:00', '18:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Souemoncho 7-18, B1F — by the Dotonbori river, about 10 min from Nippombashi Stn',
    cuisine: 'Takoyaki from the Kukuru chain, eaten sitting down · fluffy outside, gooey inside, decent pieces of octopus · up to 12 pieces · sauce, mayonnaise, aonori and bonito flakes, extra on request · takoyaki-and-beer set in an octopus-shaped tray · lemon sour · 20 seats',
    website: OWN, gmaps: gm('たこ家道頓堀くくる 宗右衛門町店'), menu_url: null,
    notes: "[Takoyaki · a sit-down Kukuru takoyaki shop by the Dotonbori river] A basement branch of the well-known Kukuru takoyaki chain on the Souemoncho side of the Dotonbori river, with 20 seats so you can eat sitting down instead of queuing at a street stall. Buy a ticket at the machine out front and wait for your number, which can be hard to hear. The takoyaki come fast off a very hot griddle: fluffy outside, gooey and piping hot inside, with decent pieces of octopus. Ask for extra mayonnaise and aonori if you like. The largest order is 12 pieces, and there's a takoyaki-and-beer set served in a cute octopus-shaped tray. It's busy with visitors from abroad, and one diner found the service a little perfunctory. Open daily 11 am to 6 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Souemoncho branch (Tabelog)', background: 'Kukuru takoyaki chain, with shops in Kanto as well (August 2026 review); official site dotonbori-kukuru.com.', philosophy: null, specialty: 'Takoyaki.',
      anecdotes: [
        { text: '"Freshly made, they were piping hot, so I waited about 3 minutes before taking a big bite. The outside was fluffy while the inside was gooey! And there were decent-sized pieces of octopus inside." — August 2026, 12 pieces.', source: R + 'B534214231/' },
        { text: '"I bought a ticket from the vending machine in front of the shop and ordered a lemon sour and takoyaki. I took my order to a table in the back." — August 2026.', source: R + 'B534221337/' },
      ],
      japanese_sources_summary: '公式 dotonbori-kukuru.com。食べログ: たこ家道頓堀くくる 宗右衛門町店、大阪市中央区宗右衛門町7-18 ピジェブラン宗右衛門町ビルB1F、地下鉄日本橋駅から徒歩10分、毎日11:00〜18:00、予約不可、カード・電子マネー・QR可、20席、禁煙、テイクアウト可、スタンプカードは2023年3月31日で終了。口コミ(2026年5〜9月): ふわふわでとろとろ、番号で呼ばれるが聞こえにくい、外国人に人気、大盛り、ふわっとクリーミー、道頓堀川沿い、たこ焼きとビールのセット、タコの形の容器、関東にも出店しているくくる、早い時間で店内に座れた、12個、マヨと青のり多めを頼める、外はふわっと中はとろっと、タコも大きめ、店頭の券売機でレモンサワー、奥のテーブル、少し甘めのソースとマヨとかつお節、観光客が多く接客は少しなおざりという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534214231/', R + 'B534221337/', R + 'B529317616/', R + 'B529381842/', R + 'B532309910/', R + 'B536374038/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; numbers called when ready.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-18 ピジェブラン宗右衛門町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番18号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534214231/', R + 'B532309910/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (12 pieces)', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'tako12'),
      it('', '', 'Takoyaki and beer set', '', 'Sets', 'no', 'no', 'July 2026.', 'beer_set'),
    ] }, {
    cuisine: 'くくるのたこ焼きを座って・外はふわっと中はとろっと、タコも大きめ・最大12個・ソース、マヨ、青のり、かつお節は多めも頼める・タコの形の容器のたこ焼きとビールのセット・レモンサワー・20席',
    neighborhood: '宗右衛門町7-18 B1F。道頓堀川沿い、日本橋駅から徒歩約10分',
    gf_detail: 'グルテンフリーではありません。小麦粉のたこ焼きの生地、たこ焼きソース。',
    vegan_detail: 'ヴィーガンではありません。タコ、生地の卵、かつお節。',
    notes: '[たこ焼き・道頓堀川沿いの座って食べられるくくる] 道頓堀川の宗右衛門町側にある、有名なたこ焼きチェーン・くくるの地下の店で、20席あるので屋台に並ばず座って食べられます。店頭の券売機で食券を買い、番号で呼ばれるのを待ちますが、聞き取りにくいことも。とても熱い鉄板で手早く焼かれ、外はふわっと、中はとろとろで熱々、タコも大きめ。マヨや青のりは多めも頼めます。いちばん多いのは12個で、タコの形のかわいい容器のたこ焼きとビールのセットも。海外からの客でにぎわい、接客が少しなおざりと感じた人も。毎日11時から18時まで。',
  });
}

// ================================================================ 炭火やきとり愛之助 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27092253/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://grilledchicken.co.jp/';
  put({
    id: 'osaka_sumibi_yakitori_ainosuke_dotonbori', name: '炭火やきとり愛之助 道頓堀店 (Sumibi Yakitori Ainosuke Doutonbori)', category: 'OMNI',
    lat: 34.668799, lng: 135.503207, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried wing tips, spring rolls, yakitori ramen; soy-sauce kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; egg and cheese on the rice balls.',
    hours_raw: 'Daily 17:00–24:00; closed irregularly (Tabelog). Reservations accepted. Appetizer charge ¥385, a bowl of grated daikon with free refills (Tabelog; May 2026). Heated tobacco only in a designated area. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-2, B1F — on the main Dotonbori street, about 5 min from Namba Stn',
    cuisine: 'Binchotan yakitori from fresh chicken · chicken-thigh tataki ¥858 · skewers from ¥297: seseri, harami, negima, breast, heart, wings, liver, boiled egg, shiitake, cherry tomato · wing-tip kara-age from ¥165 in soy, yangnyeom and tartar nanban · chicken-breast and shiso spring rolls ¥385 · grilled rice ball with egg yolk and cheese ¥528 · yakitori ramen with a whole skewer · English, Chinese and Korean menus · 20 seats',
    website: OWN, gmaps: gm('炭火やきとり愛之助 道頓堀'), menu_url: null,
    notes: "[Yakitori · binchotan yakitori in a Dotonbori basement] A basement yakitori bar on Dotonbori's main street, open since 2016, grilling fresh chicken over binchotan. Dinner starts with a ¥385 bowl of grated daikon that's refilled for free. The signature is chicken-thigh tataki (¥858), crisp skin over a rare, tender center. Skewers start at ¥297, and the neck, skirt and liver get the praise, along with heart, wings and vegetables like shiitake and cherry tomato. Don't skip the wing-tip kara-age in three flavors: soy, sweet-spicy yangnyeom and tartar nanban. Finish with the rich grilled rice ball under egg yolk and shaved cheese, or a yakitori ramen with a whole skewer on top. The menu comes in English, Chinese and Korean. Open nightly until midnight.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2016 (Tabelog)', background: 'Binchotan yakitori bar; official site grilledchicken.co.jp (Tabelog).', philosophy: 'Freshly sourced chicken over binchotan (May 2026 reviews).', specialty: 'Chicken-thigh tataki; wing-tip kara-age.',
      anecdotes: [
        { text: '"The signature dish, chicken thigh tataki, features crispy, fragrant skin and a rare, tender interior." — May 2026, ¥858.', source: R + 'B528574824/' },
        { text: '"The soy sauce version is a classic and delicious choice, the Yangnyeom has a sweet and spicy sauce that\'s addictive, and the Tartar Nanban is generously topped with rich tartar sauce." — May 2026, chicken wing kara-age.', source: R + 'B529001714/' },
      ],
      japanese_sources_summary: '公式 grilledchicken.co.jp。食べログ: 炭火やきとり愛之助 道頓堀店、大阪市中央区道頓堀1-6-2 櫓ビルB1F、地下鉄なんば駅・日本橋駅から徒歩5分、毎日17:00〜24:00、不定休、予約可、お通し385円、カード・電子マネー・QR可、20席、加熱式たばこのみ喫煙エリア、英語・中国語・韓国語のメニュー、2016年6月1日開店。口コミ(2023年12月〜2026年8月): 炭の香り、外はカリッと中はジューシー、提供が早い、道頓堀の中心、お通しの大根おろしはおかわり自由、看板のもも肉のたたき858円、串297円〜(せせり、ハラミ、ねぎま、ささみ、ハツ、ゆで卵、しいたけ、ミニトマト)、手羽先唐揚げ165円〜(醤油、ヤンニョム、チキン南蛮)、ささみと大葉の春巻き385円、卵黄とチーズの特製焼きおにぎり528円、串が丸ごとのる焼き鳥ラーメン、レバー、手羽、ピーマン、クマの形のマヨ、のれん。',
      confidence: 'medium', sources: [TB, OWN, R + 'B528574824/', R + 'B529001714/', R + 'B529127140/', R + 'B529196580/', R + 'B529939942/', R + 'B477087235/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-2 櫓ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528574824/', R + 'B529127140/'],
    price_note: 'Prices from May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-thigh tataki', '¥858', 'Small plates', 'ask', 'no', 'May 2026.', 'tataki'),
      it('', '', 'Yakitori skewers', 'from ¥297', 'Skewers', 'ask', 'no', 'May 2026.', 'kushi'),
      it('', '', 'Wing-tip kara-age (soy, yangnyeom, tartar nanban)', 'from ¥165', 'Fried', 'no', 'no', 'May 2026.', 'tebasaki'),
      it('', '', 'Chicken-breast and shiso spring roll', '¥385', 'Fried', 'no', 'no', 'May 2026.', 'harumaki'),
      it('', '', 'Special grilled rice ball (egg yolk, cheese)', '¥528', 'Rice', 'no', 'no', 'May 2026.', 'yakionigiri'),
      it('', '', 'Yakitori ramen', '', 'Noodles', 'no', 'no', 'May 2026.', 'ramen'),
    ] }, {
    cuisine: '新鮮な鶏の備長炭の焼き鳥・もも肉のたたき858円・串297円〜(せせり、ハラミ、ねぎま、ささみ、ハツ、手羽、レバー、ゆで卵、しいたけ、ミニトマト)・手羽先唐揚げ165円〜(醤油、ヤンニョム、タルタル南蛮)・ささみと大葉の春巻き385円・卵黄とチーズの焼きおにぎり528円・串が丸ごとのる焼き鳥ラーメン・英語、中国語、韓国語のメニュー・20席',
    neighborhood: '道頓堀1-6-2 櫓ビルB1F。道頓堀の大通り沿い、なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。手羽先の唐揚げ、春巻き、焼き鳥ラーメン、醤油味の唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏料理が中心、焼きおにぎりに卵とチーズ。',
    notes: '[焼き鳥・道頓堀の地下の備長炭の焼き鳥] 道頓堀の大通りに面したビルの地下にある焼き鳥の店で、2016年開店、新鮮な鶏を備長炭で焼きます。お通しは385円の大根おろしで、おかわり自由。看板はもも肉のたたき(858円)で、皮はパリッと中はレアでやわらか。串は297円からで、せせり、ハラミ、レバーの評判がよく、ハツ、手羽、しいたけやミニトマトも。手羽先の唐揚げは醤油、甘辛いヤンニョム、タルタル南蛮の3種でぜひ。締めは卵黄と削ったチーズがのった濃厚な焼きおにぎりか、串が丸ごとのった焼き鳥ラーメンを。メニューは英語、中国語、韓国語も。毎晩深夜0時まで。',
  });
}

// ================================================================ 鉄板Osaka
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27118221/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'osaka_teppan_osaka_souemoncho', name: '鉄板Osaka (Teppan Osaka)', category: 'OMNI',
    lat: 34.670225, lng: 135.502386, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The staff-maintained Tabelog listing says the shop "can accommodate allergies and vegetarian options"; nothing describes how gluten is handled on the shared teppan. Steaks come with salt, wasabi, soy sauce, garlic chips and truffle oil (September 2026), so request salt or wasabi rather than soy.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing offers vegetarian options; vegan is not mentioned, and the menu centers on wagyu and seafood.',
    hours_raw: 'Mon–Sat and holidays 18:00–3:00 am (L.O. food 2:00, drinks 2:30); closed Sunday (Tabelog). Reservations accepted; the listing says allergies and vegetarian requests can be accommodated. Cards and QUICPay accepted; no QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Souemoncho 6-26 — opposite Queens Court, about 6 min from Namba Stn',
    cuisine: 'Casual teppanyaki to 3 am · limited domestic black-wagyu filet (an A5 chateaubriand in July 2026), seared then finished with rosemary and mashed potatoes · wagyu ichibo roast beef · Hokkaido scallop and asparagus in butter soy · seafood yakisoba with squid and scallop · Camembert fondue · white fish with Genoa sauce · courses with truffle salad, appetizers and sirloin cap and filet · 11 counter seats and tables, 19 in all',
    website: null, gmaps: gm('鉄板Osaka 宗右衛門町'), menu_url: null,
    notes: "[Teppanyaki · casual wagyu teppanyaki in Souemoncho, open to 3 am] A 19-seat teppanyaki counter opposite Queens Court in Souemoncho, open since 2020 and serving until 3 am. The star is a limited domestic black-wagyu filet; in July 2026 it was an A5 chateaubriand, seared on the teppan and rested to medium-rare with rosemary; an August diner had it with mashed potatoes. Beyond steak there's wagyu ichibo roast beef, Hokkaido scallop and asparagus in butter soy, a seafood yakisoba, Camembert fondue and white fish with Genoa sauce. Courses add a truffle-scented salad and a pairing of sirloin cap and filet, with wasabi, salt, soy, garlic chips and truffle oil to dip. Reviewers spent ¥5,000–15,000. The shop says on Tabelog that it can handle allergies and vegetarian requests, so say what you need when booking. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 June 2020 (Tabelog)', background: 'Casual teppanyaki in Souemoncho (Tabelog).', philosophy: 'Selected ingredients at reasonable prices; allergies and vegetarian options accommodated (Tabelog).', specialty: 'Black-wagyu filet steak.',
      anecdotes: [
        { text: '"I had the Japanese Black Wagyu A5 Filet Steak, and to my surprise, it was made with the rare cut, Chateaubriand!" — July 2026; it was cooked evenly, then rested on a plate to finish in its own heat.', source: R + 'B532990753/' },
        { text: '"For the main course, the sirloin cap and filet steak were cooked to perfection… I enjoyed them with wasabi, salt, soy sauce, garlic chips, and truffle oil." — September 2026, course.', source: R + 'B536556861/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板Osaka、大阪市中央区宗右衛門町6-26、大阪難波駅・なんば駅・心斎橋駅から徒歩6分、月〜土・祝18:00〜翌3:00(L.O.料理2:00・ドリンク2:30)、日曜休み、予約可(アレルギーやベジタリアンにも対応できますとの記載)、カード・QUICPay可、QR不可、19席(カウンター11、4人テーブル2)、2020年6月29日開店、人気1位は数量限定の国産黒毛和牛フィレステーキ、2位は黒毛和牛イチボのローストビーフ、3位は北海道産帆立とアスパラの濃厚バター醤油。口コミ(2026年5〜9月): 女子2人でカウンター、値段が手頃、フィレを2種のソースで、カマンベールのフォンデュ、白身魚、A5のシャトーブリアン、ローズマリー、余熱で仕上げる、イカと帆立の海鮮焼きそば、イチボのローストビーフ、鉄板とオーブンでじっくり、マッシュポテト、クインズコートの前、肉も魚も、トリュフ香るサラダ、前菜(海老の刺身、ローストビーフ、長芋キムチ、もやしのナムル)、白身魚のジェノバソース、イチボとフィレ、わさび・塩・醤油・ガーリックチップ・トリュフオイル。',
      confidence: 'medium', sources: [TB, R + 'B532990753/', R + 'B536556861/', R + 'B529917078/', R + 'B534386340/', R + 'B534715654/', R + 'B529348984/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; state allergies when booking.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Staff-maintained Tabelog listing: "We can accommodate allergies and vegetarian options." No detail on gluten or the shared teppan.', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町6-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町6番26号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B532990753/', R + 'B536556861/'],
    price_note: 'No prices captured; reviewers spent ¥5,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Domestic black-wagyu filet steak (limited)', '', 'Steak', 'ask', 'no', 'Tabelog; July–August 2026.', 'filet'),
      it('', '', 'Black-wagyu ichibo roast beef', '', 'Small plates', 'ask', 'no', 'Tabelog; July 2026.', 'ichibo'),
      it('', '', 'Hokkaido scallop and asparagus in butter soy', '', 'Teppan', 'no', 'no', 'Tabelog.', 'hotate'),
      it('', '', 'Seafood yakisoba (squid, scallop)', '', 'Teppan', 'no', 'no', 'July 2026.', 'yakisoba'),
      it('', '', 'Camembert fondue', '', 'Small plates', 'ask', 'ask', 'June 2026.', 'camembert'),
    ] }, {
    cuisine: '朝3時までのカジュアルな鉄板焼き・数量限定の国産黒毛和牛フィレ(2026年7月はA5のシャトーブリアン)を焼いてローズマリーと余熱で仕上げ、マッシュポテト添え・黒毛和牛イチボのローストビーフ・北海道産帆立とアスパラのバター醤油・イカと帆立の海鮮焼きそば・カマンベールのフォンデュ・白身魚のジェノバソース・トリュフ香るサラダ、前菜、イチボとフィレのコース・カウンター11席とテーブルで19席',
    neighborhood: '宗右衛門町6-26。クインズコートの向かい、なんば駅から徒歩約6分',
    gf_detail: '要確認。食べログの店舗情報(店側が管理)に「アレルギーやベジタリアンにも対応できます」とありますが、共有の鉄板でのグルテンの扱いは不明。ステーキは塩、わさび、醤油、ガーリックチップ、トリュフオイルで食べるので(2026年9月)、醤油ではなく塩やわさびを頼んで。',
    vegan_detail: '要確認。ベジタリアン対応の記載はありますがヴィーガンについては不明で、メニューは和牛と魚介が中心。',
    notes: '[鉄板焼き・宗右衛門町の朝3時までの和牛の鉄板焼き] 宗右衛門町のクインズコートの向かいにある19席の鉄板焼きのカウンターで、2020年開店、朝3時まで営業。主役は数量限定の国産黒毛和牛フィレで、2026年7月はA5のシャトーブリアンを鉄板で焼き、ローズマリーと余熱でミディアムレアに。8月にはマッシュポテト添えで食べた人も。ステーキ以外にも黒毛和牛イチボのローストビーフ、北海道産帆立とアスパラのバター醤油、海鮮焼きそば、カマンベールのフォンデュ、白身魚のジェノバソース。コースにはトリュフ香るサラダやイチボとフィレの食べ比べがあり、わさび、塩、醤油、ガーリックチップ、トリュフオイルで。予算は5,000〜15,000円ほど。食べログの店舗情報にアレルギーやベジタリアンにも対応できるとあるので、予約時に伝えて。日曜定休。',
  });
}

// ================================================================ 大阪焼肉 ヒロミヤ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27041595/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_yakiniku_hiromiya_souemoncho', name: '大阪焼肉 ヒロミヤ (Osaka Yakiniku Hiromiya)', category: 'OMNI',
    lat: 34.67019, lng: 135.502445, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: yakiniku marinades and dipping sauces; fried rice, cold noodles and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and offal.',
    hours_raw: 'Mon–Sat and holidays 18:00–2:00 am; closed Sunday (by arrangement) and irregularly (Tabelog). Reservations strongly advised with only five seats (2019–2024 reviews). Smoking allowed (Tabelog). Cards, e-money and QR accepted. English menu (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Souemoncho 6-25 — in a narrow alley, about 5 min from Namba Stn',
    cuisine: 'Tiny yakiniku counter · half portions so solo diners can try more · salted tongue, cheek, premium loin, kalbi, outside skirt, omasum, tetchan intestine, liver · off-menu ajillo, grilled rice balls and miso pasta · fried rice and cold noodles to finish · around ¥3,000–5,000 · 5 counter seats',
    website: null, gmaps: gm('大阪焼肉 ヒロミヤ 宗右衛門町'), menu_url: null,
    notes: "[Yakiniku · a five-seat yakiniku counter in a Souemoncho alley] A five-seat yakiniku counter tucked into a narrow Souemoncho alley, cramped enough that you'll be elbow to elbow, and the kind of casual, affordable solo spot that's getting rare in Minami. A new owner took over in 2025, and a returning diner in July 2026 felt the meat had improved since the change. Everything comes in half portions, so one person can work through salted tongue, cheek, premium loin and kalbi. Omasum, tetchan intestine and liver have fans too. Ask about the off-menu ajillo, grilled rice balls and miso pasta, and finish with fried rice or cold noodles. Expect about ¥3,000–5,000. Book ahead. Smoking is allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Souemoncho 6-chōme alley (Tabelog)', background: 'New owner from April 2025 (August 2025 review); "the manager changed" (July 2026 review).', philosophy: null, specialty: 'Half-portion yakiniku.',
      anecdotes: [
        { text: '"This was my first visit since the manager changed. Everything was served in half sizes… I felt like the quality of the meat has improved." — July 2026.', source: R + 'B474926716/' },
        { text: '"There are 5 counter seats… you will definitely be in close proximity to the person next to you." — December 2025.', source: R + 'B519858258/' },
      ],
      japanese_sources_summary: '食べログ: 大阪焼肉 ヒロミヤ、大阪市中央区宗右衛門町6-25 日宝富士センタービル、各線なんば駅から徒歩5分、月〜土・祝18:00〜翌2:00、日曜休み(相談可)・不定休、予約可、カード・電子マネー・QR可、5席(立ち6人)、喫煙可、英語メニューあり。口コミ(2019年3月〜2026年7月): 細い路地のカウンター5席、2025年4月に新しい店主に、新鮮なセンマイ、塩タン、上ロース、ハラミ、テッチャン、ひとりでも気軽な焼肉は東心斎橋では少ない、上ロース・バラ・ツラミ、予約がおすすめ、ハーフサイズで塩タン・ツラミ・上ロース・カルビ、肉の質が上がった、裏メニューのアヒージョ・焼きおにぎり・味噌のパスタ、レバー、カルビ、締めの炒飯と冷麺、6人目も入れるがかなり近い、カジュアル。',
      confidence: 'medium', sources: [TB, R + 'B474926716/', R + 'B519858258/', R + 'B412757587/', R + 'B484999030/', R + 'B509806318/', R + 'B412924479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Five seats; English menu listed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町6-25 日宝富士センタービル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町6番25号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B474926716/', R + 'B484999030/', R + 'B509806318/'],
    price_note: 'No prices captured; reviewers spent ¥3,000–5,999.', last_checked: TODAY, items: [
      it('', '', 'Salted tongue (half portion available)', '', 'Yakiniku', 'ask', 'no', 'July 2026.', 'shio_tan'),
      it('', '', 'Premium loin', '', 'Yakiniku', 'ask', 'no', 'July 2026.', 'jo_rosu'),
      it('', '', 'Kalbi', '', 'Yakiniku', 'no', 'no', 'July 2026.', 'kalbi'),
      it('', '', 'Cheek', '', 'Yakiniku', 'ask', 'no', 'July 2026.', 'tsurami'),
      it('', '', 'Fried rice', '', 'Finish', 'no', 'no', 'July 2025.', 'chahan'),
      it('', '', 'Cold noodles', '', 'Finish', 'no', 'no', 'July 2025.', 'reimen'),
    ] }, {
    cuisine: '小さな焼肉のカウンター・ひとりでもいろいろ頼めるハーフサイズ・塩タン、ツラミ、上ロース、カルビ、ハラミ、センマイ、テッチャン、レバー・裏メニューのアヒージョ、焼きおにぎり、味噌のパスタ・締めの炒飯と冷麺・予算3,000〜5,000円ほど・カウンター5席',
    neighborhood: '宗右衛門町6-25。細い路地の中、なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。焼肉のたれやつけだれ、炒飯、冷麺、パスタ。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモン。',
    notes: '[焼肉・宗右衛門町の路地の5席の焼肉カウンター] 宗右衛門町の細い路地にある5席の焼肉のカウンターで、隣と肩が触れるほどの狭さ。ミナミでは少なくなった、ひとりでも気軽で手頃な焼肉の店です。2025年に店主が代わり、2026年7月に久しぶりに来た人は肉の質が上がったと感じたそう。どれもハーフサイズがあるので、ひとりでも塩タン、ツラミ、上ロース、カルビといろいろ頼めます。センマイ、テッチャン、レバーのファンも。裏メニューのアヒージョ、焼きおにぎり、味噌のパスタを聞いてみて、締めは炒飯か冷麺。予算は3,000〜5,000円ほど。予約がおすすめ。喫煙可。日曜定休。',
  });
}

save();
