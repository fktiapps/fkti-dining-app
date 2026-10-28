// Osaka sweep (2-mile circle around Dotonbori), batch 146 — mom / small-shop phase (all OMNI).
//   + おでんのハチマル (9-seat oden counter with a light Osaka broth and freshly fried fish cakes; Nipponbashi)
//   + 釜上げうどん 二葉 (noodle-factory udon shop by Kuromon Market: kamaage udon under bonito flakes; limited days)
//   + マイティルゥ (spice curry by day, bar by night; chicken curry and lentil curries; Kozu)
//   + MARL 鍋とおばんざい (set meals of a main plus three obanzai; Kitahorie by Yotsubashi; same address as Ramen Shion, offset)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 146);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おでんのハチマル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131909/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_oden_no_hachimal_nipponbashi', name: 'おでんのハチマル (Oden no Hachimal)', category: 'OMNI',
    lat: 34.665432, lng: 135.507918, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fish cakes and shumai usually contain wheat; tempura; soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-based oden broth; fish cakes, beef tendon, egg and duck.',
    hours_raw: 'Daily 18:00–01:00 (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Smartphone ordering; tell staff if an order does not arrive (July 2026). Reservations taken (August 2026).',
    hours: ALL(day(['18:00', '01:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 1-23-33 — 3 min from Kintetsu Nippombashi Stn',
    cuisine: 'Oden in a light, drinkable Osaka-style broth · assorted five-piece oden platter: daikon, beef tendon, egg, thick fried tofu, mochi pouch · also fresh yuba, corn, duck, green onion pouch, shirataki, sea bream with salt and lemon, shiitake, takoyaki · shumai floating in the broth with black pepper · freshly fried fish cakes (e.g. with wood ear mushroom) · dashimaki wrapped in cherry leaves · ginger tempura, corn tempura · firefly squid in soy · chilled Chinese noodles or chazuke to finish · seasonal sake; apple vinegar sour · 9 seats: 7 at the counter',
    website: null, gmaps: gm('おでんのハチマル'), menu_url: null,
    notes: "[Oden · a small oden counter with freshly fried fish cakes, Nipponbashi] A calm, clean nine-seat oden shop near Kintetsu Nippombashi, sister to a fish-cake maker, so the freshly fried fish cakes are the thing to order: chewy and full of umami. The broth is the light Osaka kind you can drink, and it soaks into a daikon tender enough to cut with chopsticks; start with the five-piece platter, then try shumai floating in the broth with black pepper. Beyond oden there's dashimaki wrapped in cherry leaves and chilled Chinese noodles or chazuke to finish. Orders go through your phone; check with staff if anything goes missing. Good for solo diners. Open until 1:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sister shop of a fish-cake maker, Hachimal Kamaboko (August 2026 review).', background: 'Oden shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Oden; freshly fried fish cakes.',
      anecdotes: [
        { text: '"The Japanese radish was so tender it could be cut with chopsticks, thoroughly infused with the broth… the shumai floating in the broth was exquisite." — August 2026, assorted platter of 5 types of oden.', source: R + 'B533207681/' },
        { text: '"The freshly fried fish cakes had a delightful chewy texture and a strong umami flavor; the taste of the dishes was impeccable." — July 2026.', source: R + 'B531641187/' },
      ],
      japanese_sources_summary: '食べログ: おでんのハチマル、大阪市中央区日本橋1-23-33、近鉄日本橋駅から徒歩3分、毎日18:00〜翌1:00、カード・電子マネー・PayPay 可、9席 (カウンター7、テーブル2)、禁煙 (店外に灰皿)。口コミ(2026年4〜8月): 練り物の店 Hachimal Kamaboko の姉妹店、飲めるようなやさしい大阪のおでんのだし、5種の盛り合わせ (大根、牛すじ、卵、厚揚げ、もちの巾着)、yuba、とうもろこし、鴨、ねぎの巾着、shirataki、塩とレモンの鯛、shiitake、takoyaki、だしに浮かべた shumai と黒こしょう、揚げたての練り物 (きくらげ入りなど)、桜の葉で巻いた dashimaki、しょうがの天ぷら、とうもろこしの天ぷら、ホタルイカの醤油漬け、締めの冷やし中華や chazuke、季節の日本酒、りんご酢のサワー、スマホで注文 (届かない注文があったという声)、落ち着いた清潔な店、ひとりでも。',
      confidence: 'medium', sources: [TB, R + 'B525962041/', R + 'B531072422/', R + 'B531641187/', R + 'B532954986/', R + 'B533207681/', R + 'B534700277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone ordering; friendly staff (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-23-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目23番33号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531072422/', R + 'B533207681/', R + 'B531641187/'],
    price_note: 'No dish prices in the reviews; JPY 2,000–3,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted oden, five pieces', '', 'Oden', 'no', 'no', 'July–August 2026.', 'moriawase'),
      it('', '', 'Freshly fried fish cakes', '', 'Fish cakes', 'no', 'no', 'July 2026.', 'agekama'),
      it('', '', 'Shumai in oden broth', '', 'Oden', 'no', 'no', 'August 2026.', 'shumai'),
      it('', '', 'Dashimaki wrapped in cherry leaves', '', 'Dishes', 'ask', 'no', 'July 2026.', 'dashimaki'),
      it('', '', 'Chilled Chinese noodles', '', 'Finish', 'no', 'no', 'August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '飲めるようなやさしい大阪風のだしのおでん・5種のおでんの盛り合わせ: 大根、牛すじ、卵、厚揚げ、もちの巾着・ほかに yuba、とうもろこし、鴨、ねぎの巾着、shirataki、塩とレモンの鯛、shiitake、takoyaki・だしに浮かべて黒こしょうをふる shumai・揚げたての練り物 (きくらげ入りなど)・桜の葉で巻いた dashimaki・しょうがの天ぷら、とうもろこしの天ぷら・ホタルイカの醤油漬け・締めに冷やし中華か chazuke・季節の日本酒、りんご酢のサワー・9席: カウンター7席',
    neighborhood: '中央区日本橋1-23-33。近鉄日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。練り物や shumai はふつう小麦を含む、天ぷら、醤油のだし。',
    vegan_detail: 'ヴィーガンではありません。魚のだしのおでん、練り物、牛すじ、卵、鴨。',
    notes: '[おでん・日本橋、揚げたての練り物もある小さなおでんのカウンター] 近鉄日本橋近くの落ち着いた清潔な9席のおでん店で、練り物の店の姉妹店なので、頼むべきはもちもちでうまみの強い揚げたての練り物。だしは飲めるようなやさしい大阪のおでんで、箸で切れる大根にしみている。まず5種の盛り合わせ、それからだしに浮かべて黒こしょうをふる shumai を。おでんのほかに桜の葉で巻いた dashimaki、締めは冷やし中華か chazuke。注文はスマホで、届かないものがあれば店の人に確認を。ひとりでも入りやすい。深夜1時まで。',
  });
}

// ================================================================ 釜上げうどん 二葉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000406/'; const R = TB + 'dtlrvwlst/';
  const TT = day(['11:30', '15:30'], ['18:30', '21:00']);
  put({
    id: 'osaka_kamaage_udon_futaba_nipponbashi', name: '釜上げうどん 二葉 (Kamaage Udon Futaba)', category: 'OMNI',
    lat: 34.664461, lng: 135.507323, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and kishimen; soy sauce; tenkasu. Soba is on the menu but likely contains wheat — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito flakes over the kamaage udon; dashi; mentaiko and meat toppings.',
    hours_raw: 'Tue and Thu 11:30–15:30 and 18:30–21:00; Wed 11:30–15:00; Sat 11:30–15:30; closed Mon, Fri, Sun (Tabelog). Cash only (Tabelog). Waits at peak lunch (2026).',
    hours: { 1: TT, 2: day(['11:30', '15:00']), 3: TT, 5: day(['11:30', '15:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-12-27, just outside Kuromon Market — 5 min from Nipponbashi Stn',
    cuisine: 'Udon from a noodle maker in business since 1910 · signature kamaage udon ¥680: thin homemade noodles in their hot water under a heap of bonito flakes, seasoned yourself with Yuasa soy sauce and ground sesame · cold mentaiko nama-shoyu udon ¥830 with shiso and nori · grated daikon udon, plain dashi udon, curry udon, meat udon; soba too · noodles thin, extra thin, thick or kishimen; sizes up to 1.5 · small rice balls; weekly rice, e.g. bamboo shoot rice · free homemade tenkasu and green onion on the table · 16 seats',
    website: null, gmaps: gm('釜上げうどん 二葉'), menu_url: null,
    notes: "[Udon · a noodle factory's own udon shop by Kuromon Market] A clean, calm little udon shop just outside Kuromon Market, run by a noodle maker founded in 1910, open only a few days a week. The thing to order is the kamaage udon (¥680): thin homemade noodles in their own hot water, buried under bonito flakes, which you season with Yuasa soy sauce and fresh-ground sesame — a dish that began as the factory's staff meal. The cold mentaiko nama-shoyu udon (¥830) is a good summer choice, and you can pick thin, extra-thin or thick noodles or kishimen. Add the free homemade tenkasu and green onion. Cash only; open Tuesday, Wednesday, Thursday and Saturday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Run by the Futaba Seimenjo noodle factory, founded 1910 (May–July 2026 reviews).', background: 'Udon shop of a noodle maker (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kamaage udon.',
      anecdotes: [
        { text: '"Unlike typical kamaage udon, here you enjoy the noodles by adding soy sauce to the hot water they are served in… The hot water was filled with plenty of bonito flakes." — May 2026, kamaage udon ¥680.', source: R + 'B528142175/' },
        { text: '"On the table, there was a jar filled with green onions and… homemade tenkasu (tempura scraps), which I could add freely." — August 2026, Mentaiko Nama Shoyu Udon (cold) ¥830.', source: R + 'B533122835/' },
      ],
      japanese_sources_summary: '食べログ: 釜上げうどん 二葉、大阪市中央区日本橋2-12-27、日本橋駅から徒歩5分、火・木 11:30〜15:30・18:30〜21:00、水 11:30〜15:00、土 11:30〜15:30、月・金・日休み、カード・電子マネー・QR不可、16席 (4名テーブル2、カウンター8)。口コミ(2026年4〜8月): 黒門市場のすぐ外、1910年創業の製麺所 Futaba Seimenjo の店、看板の釜上げうどん680円 (細い自家製麺をゆで湯ごと、たっぷりのかつお節、Yuasa の醤油とすりごまで)、もとは製麺所のまかない、冷たい mentaiko の生醤油うどん830円 (大葉とのり)、大根おろしのうどん、だしのうどん、カレーうどん、肉うどん、そばも、麺は細麺・極細・太麺・kishimen から、1.5玉も、小さなおにぎり、週替わりのご飯 (筍ご飯)、卓上の自家製 tenkasu とねぎは自由に、清潔で落ち着いた店。',
      confidence: 'medium', sources: [TB, R + 'B527241991/', R + 'B528142175/', R + 'B528246310/', R + 'B529559820/', R + 'B532799035/', R + 'B533122835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple udon menu; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-12-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目12番27号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528142175/', R + 'B533122835/', R + 'B528246310/'],
    price_note: 'Prices from May and August 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Kamaage udon', '¥680', 'Udon', 'no', 'no', 'May 2026.', 'kamaage'),
      it('', '', 'Mentaiko nama-shoyu udon (cold)', '¥830', 'Udon', 'no', 'no', 'August 2026.', 'mentai'),
      it('', '', 'Curry udon', '', 'Udon', 'no', 'no', 'April 2026.', 'curry'),
      it('', '', 'Meat udon', '', 'Udon', 'no', 'no', 'April 2026.', 'niku'),
      it('', '', 'Small rice balls (three)', '', 'Rice', 'ask', 'ask', 'May 2026.', 'onigiri'),
    ] }, {
    cuisine: '1910年創業の製麺所のうどん・看板の釜上げうどん680円: 細い自家製麺をゆで湯ごと、山盛りのかつお節の下に。Yuasa の醤油とすりごまで自分で味をつける・大葉とのりの冷たい mentaiko の生醤油うどん830円・大根おろしのうどん、だしのうどん、カレーうどん、肉うどん、そばも・麺は細麺、極細、太麺、kishimen から、1.5玉まで・小さなおにぎり、週替わりのご飯 (たとえば筍ご飯)・卓上の自家製 tenkasu とねぎは自由に・16席',
    neighborhood: '中央区日本橋2-12-27、黒門市場のすぐ外。日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のうどんと kishimen、醤油、tenkasu。そばもあるが小麦を含みそうなので確認を。',
    vegan_detail: 'ヴィーガンではありません。釜上げうどんにかつお節、だし、mentaiko や肉。',
    notes: '[うどん・黒門市場のそば、製麺所のうどん店] 黒門市場のすぐ外にある清潔で落ち着いた小さなうどん店で、1910年創業の製麺所の店、開くのは週に数日だけ。頼むべきは釜上げうどん (680円): 細い自家製麺をゆで湯ごと、かつお節に埋もれるほどのせ、Yuasa の醤油とすりたてのごまで自分で味をつける。もとは製麺所のまかない。夏は冷たい mentaiko の生醤油うどん (830円) もよく、麺は細麺・極細・太麺・kishimen から選べる。卓上の自家製 tenkasu とねぎも自由に。現金のみ。火・水・木・土曜営業。',
  });
}

// ================================================================ マイティルゥ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27068586/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_mighty_luu_kozu', name: 'マイティルゥ (Mighty Luu)', category: 'OMNI',
    lat: 34.666289, lng: 135.509097, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hamburger steak usually has breadcrumbs; whether the curries use flour is unknown — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and salmon curries and hamburger steak; the lentil and spinach curry may be meat-free — ask about stock and ghee.',
    hours_raw: 'Tue–Sun 11:30–15:00 (lunch last order 14:30) and 18:00–23:00; closed Mon (Tabelog). Curry at lunch, a bar at night (2025–2026). Cards accepted; no e-money or QR (Tabelog). Designated smoking area; one diner noticed smoke at lunch (June 2026).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kozu 3-2-20, a short walk from the National Bunraku Theatre — 5 min from Nipponbashi Stn',
    cuisine: 'Spice curry at lunch, bar at night · chicken curry ¥880 (medium; small, medium or large), slow-cooked chicken, light with tomato acidity, spice level adjustable · lentil curry; lentil and spinach curry; salmon and potato curry · combination sets A, B, C, e.g. B = chicken curry with a hamburger steak; hamburger steak as a topping · 18 seats at the counter and tables',
    website: null, gmaps: gm('マイティルゥ'), menu_url: null,
    notes: "[Curry · a spice-curry lunch that turns into a bar at night, Kozu] A small Nipponbashi-side curry shop near the National Bunraku Theatre that serves spice curry at lunch and becomes a bar in the evening. The chicken curry (¥880 for a medium) is the one to try: tender slow-cooked chicken in a light, tomato-tinged spice sauce that builds a gentle sweat by the end, with the spice level adjustable. Lentil and spinach or salmon and potato curries round out the menu, and combination sets add a hamburger steak. Three sizes. One diner noticed cigarette smoke at lunch. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Curry shop by day, bar by night (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Spice chicken curry.',
      anecdotes: [
        { text: '"It was a refreshing spice chicken curry with a hint of tomato acidity, which paired well with the rice. Unlike heavy European-style curries, this one was light and easy to enjoy." — May 2026, Chicken Curry (medium) ¥880.', source: R + 'B529168216/' },
        { text: '"The slow-cooked chicken was incredibly tender, perfectly blending with the spiced curry." — March 2025.', source: R + 'B511007558/' },
      ],
      japanese_sources_summary: '食べログ: マイティルゥ、大阪市中央区高津3-2-20、日本橋駅から徒歩5分、火〜日 11:30〜15:00・18:00〜23:00、月曜休み、カード可、電子マネー・QR不可、18席、喫煙スペースあり。口コミ(2025年2月〜2026年6月): 昼はカレー、夜はバー、チキンカレー880円 (並、小・並・大)、じっくり煮込んだやわらかい鶏、トマトの酸味の軽いスパイスカレー、辛さは控えめにもできる、レンズ豆のカレー、レンズ豆とほうれん草のカレー、鮭とじゃがいものカレー、A・B・C の組み合わせ (B はチキンカレーとハンバーグ)、ハンバーグのトッピング、昼のラストオーダー14:30、国立文楽劇場の近く、昼にたばこのにおいが気になったという声。',
      confidence: 'medium', sources: [TB, R + 'B502469112/', R + 'B511007558/', R + 'B514732030/', R + 'B519788699/', R + 'B529168216/', R + 'B529478728/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick size and spice level (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津3-2-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津三丁目2番20号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529168216/', R + 'B514732030/', R + 'B529478728/'],
    price_note: 'Price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken curry (medium)', '¥880', 'Curry', 'ask', 'no', 'May 2026; small and large also.', 'chicken'),
      it('', '', 'Lentil and spinach curry', '', 'Curry', 'ask', 'ask', 'June 2026.', 'lentil'),
      it('', '', 'Salmon and potato curry', '', 'Curry', 'ask', 'no', 'June 2026.', 'salmon'),
      it('', '', 'Set B: chicken curry and hamburger steak', '', 'Sets', 'no', 'no', 'October 2025.', 'set_b'),
    ] }, {
    cuisine: '昼はスパイスカレー、夜はバー・チキンカレー880円 (並。小・並・大)、じっくり煮込んだ鶏、トマトの酸味の軽い味、辛さは調整できる・レンズ豆のカレー、レンズ豆とほうれん草のカレー、鮭とじゃがいものカレー・A、B、C の組み合わせ、たとえば B はチキンカレーとハンバーグ、ハンバーグのトッピングも・カウンターとテーブルで18席',
    neighborhood: '中央区高津3-2-20、国立文楽劇場から歩いてすぐ。日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ハンバーグにはふつうパン粉、カレーに小麦粉を使うかは不明なので確認を。',
    vegan_detail: 'ヴィーガンではありません。チキンと鮭のカレー、ハンバーグ。レンズ豆とほうれん草のカレーは肉なしかもしれないので、スープやギーを確認。',
    notes: '[カレー・高津、昼はスパイスカレー、夜はバー] 国立文楽劇場近く、日本橋寄りの小さなカレー店で、昼はスパイスカレー、夜はバーになる。食べるならチキンカレー (並880円): じっくり煮込んだやわらかい鶏に、トマトの酸味がほんのりの軽いスパイスのソースで、食べ終わるころにうっすら汗をかく。辛さは調整できる。レンズ豆とほうれん草、鮭とじゃがいものカレーもあり、組み合わせのセットにはハンバーグも。サイズは3つ。昼にたばこのにおいが気になったという声も。月曜休み。',
  });
}

// ================================================================ MARL 鍋とおばんざい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27127511/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '16:00'];
  put({
    id: 'osaka_marl_kitahorie', name: 'MARL 鍋とおばんざい (MARL Nabe to Obanzai)', category: 'OMNI',
    lat: 34.674548, lng: 135.496637, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: chicken nanban is battered and fried; soy-based obanzai and miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish mains; dashi in the side dishes and miso soup.',
    hours_raw: 'Mon 11:30–16:00; Tue–Thu 11:30–16:00 and 18:00–22:00; Fri 11:30–16:00 and 17:00–23:00; Sat 12:00–17:00; public holidays 12:00–16:00; closed Sun; occasional temporary closures, daily menu on Instagram stories (Tabelog). Lunch lines at opening; reserve (September 2026). Cards and PayPay accepted (Tabelog).',
    hours: { 0: day(L), 1: day(L, ['18:00', '22:00']), 2: day(L, ['18:00', '22:00']), 3: day(L, ['18:00', '22:00']), 4: day(L, ['17:00', '23:00']), 5: day(['12:00', '17:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-6-4, Oshukan Bldg 2F, a little hard to find — 1 min from Yotsubashi Stn exit 4',
    cuisine: 'Set meals of a main with three obanzai · lunch ¥1,300: choose a main (e.g. shrimp mayo; chicken nanban with homemade tartar; fish on fish days), with three obanzai, rice in your size, miso soup, salad and lightly salted homemade pickles (bitter melon, daikon, onion) · evening: similar sets at lunch-like prices, plus obanzai, a sashimi platter and sake; seasonal sets of vegetables and fish on Fridays from 17:00 · 14 seats: 8 at the counter and sofa tables',
    website: null, gmaps: gm('MARL 鍋とおばんざい'), menu_url: null,
    notes: "[Teishoku · obanzai set meals by Yotsubashi, Kitahorie] A busy second-floor set-meal spot a minute from Yotsubashi Station, a little hard to find, that fills right after opening. Lunch is a good deal at ¥1,300: pick a main such as big, juicy shrimp mayo or chicken nanban with homemade tartar, and it comes with three obanzai, rice in your choice of size, miso soup, salad and lightly salted homemade pickles. Evenings keep similar prices for set meals and add obanzai, a sashimi platter and sake. Staff kindly moved one solo diner to a more comfortable seat. Reserve for lunch; check Instagram stories for the day's menu. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Obanzai set-meal restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Set meals with three obanzai.',
      anecdotes: [
        { text: '"Choosing a main dish comes with three types of obanzai, rice, miso soup, salad, and pickles for just JPY 1300, which is quite a bargain!" — May 2026, shrimp mayo.', source: R + 'B529084515/' },
        { text: '"The popular chicken nanban came with a homemade tartar sauce that was incredibly delicious and satisfying!" — September 2026, lunch set with obanzai.', source: R + 'B535049504/' },
      ],
      japanese_sources_summary: '食べログ: MARL 鍋とおばんざい、大阪市西区北堀江1-6-4 欧州館ビル 2F、四ツ橋駅4番出口から徒歩1分、月 11:30〜16:00、火〜木 11:30〜16:00・18:00〜22:00、金 11:30〜16:00・17:00〜23:00、土 12:00〜17:00、祝 12:00〜16:00、日曜休み、臨時休業あり、日替わりメニューは Instagram のストーリーズで、金曜は17:00から野菜と魚の季節の定食、カード・PayPay 可、14席 (カウンター8、テーブル)。口コミ(2026年5〜10月): 昼はメインを選んでおばんざい3種、ご飯 (量を選べる)、味噌汁、サラダ、自家製の漬物 (ゴーヤ、大根、玉ねぎ、塩分控えめ) で1,300円、エビマヨ、自家製タルタルの chicken nanban、魚の日も、夜も昼と同じくらいの値段、おばんざい・刺身の盛り合わせ・日本酒、開店前から行列、予約を、少しわかりにくい場所、ひとりでも気づかいのある接客。',
      confidence: 'medium', sources: [TB, R + 'B529084515/', R + 'B531150281/', R + 'B535049504/', R + 'B536198800/', R + 'B537442490/', R + 'B537692202/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Considerate with solo diners (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-4 欧州館ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.674485, 135.496637); same address as Ramen Shion Horie (osaka_ramen_shion_horie), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市西区北堀江一丁目6番4号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529084515/', R + 'B535049504/'],
    price_note: 'Lunch price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: main, three obanzai, rice, miso soup, salad, pickles', '¥1,300', 'Sets', 'no', 'no', 'May 2026.', 'lunch'),
      it('エビマヨ', '', 'Shrimp mayo (main)', '', 'Mains', 'no', 'no', 'May 2026.', 'ebimayo'),
      it('', '', 'Chicken nanban with homemade tartar (main)', '', 'Mains', 'no', 'no', 'September 2026.', 'nanban'),
    ] }, {
    cuisine: 'メインとおばんざい3種の定食・昼は1,300円: メイン (たとえばエビマヨ、自家製タルタルの chicken nanban、魚の日は魚) におばんざい3種、量を選べるご飯、味噌汁、サラダ、塩分控えめの自家製の漬物 (ゴーヤ、大根、玉ねぎ)・夜も昼と同じくらいの値段の定食に、おばんざい、刺身の盛り合わせ、日本酒、金曜は17:00から野菜と魚の季節の定食・14席: カウンター8席とソファのテーブル',
    neighborhood: '西区北堀江1-6-4 欧州館ビル 2F、少しわかりにくい。四ツ橋駅4番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。chicken nanban は衣をつけて揚げる、醤油のおばんざいと味噌汁。',
    vegan_detail: 'ヴィーガンではありません。肉や魚のメイン、おばんざいと味噌汁にだし。',
    notes: '[定食・北堀江、四ツ橋そばのおばんざい定食] 四ツ橋駅から1分、少しわかりにくいビル2階の定食の店で、開店してすぐ満席になる。昼は1,300円とお得: 大きくぷりぷりのエビマヨや自家製タルタルの chicken nanban などメインを選ぶと、おばんざい3種、量を選べるご飯、味噌汁、サラダ、塩分控えめの自家製の漬物がつく。夜も定食は同じくらいの値段で、おばんざい、刺身の盛り合わせ、日本酒も。ひとりでも気づかいのある接客。昼は予約を、その日のメニューは Instagram のストーリーズで。日曜休み。',
  });
}

save();
