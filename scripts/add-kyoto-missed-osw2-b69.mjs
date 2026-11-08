// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 69.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 月虹庵 Gekko An (Taisho-romance night café above ベーグル君とぱすたちゃん, near Shijo; since June 2026)
//   + 丸常蒲鉾 Marutsune Kamaboko (Nishiki Market fish-cake maker since 1947; its Daimaru counter was deferred here, osw9-73)
//   + 祇園 喜多八 Gion Kitahachi (family-run counter of fish dishes and sushi on Tominaga-cho, open to 3 am)
//   + 先斗町 焼肉やまかわ 本店 Pontocho Yakiniku Yamakawa Honten (butcher-run wagyu and Kobe-beef yakiniku; its Kawaramachi-Sanjo branch deferred here, osw9-73)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl:
//   osw9-73 deferred 丸常蒲鉾店 大丸京都店 and 河原町三条 焼肉ヤマカワ to these main shops.
//   Service charges: 月虹庵 ¥500 entrance charge with a complimentary bagel (June 2026).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 月虹庵 offset ~1 m off 鉄板焼DINING YANAGI (9 m), やまかわ ~5 m off 先斗町 魯ビン (4 m);
//   each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 月虹庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045121/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_gekko_an_cafe', name: '月虹庵 (Gekko An)', category: 'OMNI',
    lat: 35.002685, lng: 135.763946, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry rice, pasta, rice croquettes and a complimentary bagel; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat curry, Bolognese, cheese rice croquettes, roast beef (reviews).',
    hours_raw: '17:30–22:00 daily (food last order 21:00, drinks 21:30); closing days not fixed (Tabelog). Reservations taken; changes by the day before (Tabelog). Cards accepted; no e-money or QR (Tabelog). A ¥500 entrance charge that comes with a complimentary bagel (June 2026). 16 table seats; private hire up to 20; non-smoking (Tabelog). Up the stairs on the left inside ベーグル君とぱすたちゃん, just off Shijo, about 10 min from Karasuma Stn (Tabelog; June–July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just off Shijo — 10 min from Karasuma Stn',
    cuisine: 'Taisho-romance night café and studio, opened 25 June 2026 (2026 reviews) · Taisho-era curry rice, 10 a day, ¥1,200 (June and September 2026) · chirimen-sansho pasta ¥1,900, homemade Bolognese, rice croquettes with meat sauce and cheese, roast beef, caprese, prosciutto and sausages (2026) · cream sodas and floats in several colours, yuzu cream soda ¥950 (September 2026); bottled beer in cut glass, wine (2026)',
    website: null, gmaps: gm('月虹庵 京都 烏丸'), menu_url: TB,
    notes: "[Café · off Shijo, a Taisho-era night salon] A sixteen-seat evening café up a stair above a bagel shop, furnished with genuine antiques, red carpet and black telephones in Taisho-romance style. Taisho-recipe curry rice (10 a day, ¥1,200), rice croquettes and pasta, with jewel-coloured cream sodas. ¥500 entrance with a free bagel; 17:30–22:00.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (June–October 2026) describe a Taisho-romance café and rental studio that opened on 25 June 2026 on the 2nd floor above ベーグル君とぱすたちゃん, furnished by an owner who collected genuine antiques; staff wear Taisho-inspired uniforms.',
      philosophy: null,
      specialty: 'Taisho-era recipe curry rice.',
      anecdotes: [
        { text: 'A June 2026 guest came just after the opening for the Taisho curry and a cream soda float, noting the real antique furniture.', source: R + 'B531575060/' },
        { text: 'A July 2026 group held a girls’ night out and loved the cut-glass beer glasses.', source: R + 'B531697338/' },
        { text: 'An October 2026 early arrival had the room alone, though the 10-a-day curry had already sold out.', source: R + 'B537647330/' },
      ],
      japanese_sources_summary: '食べログ: 月虹庵、カフェ・喫茶店、京都市下京区相之町139 2F、烏丸駅から徒歩10分、毎日17:30〜22:00 (L.O.フード21:00、ドリンク21:30)、不定休、予約可、変更は前日までに電話、カード可、電子マネー・QR不可、テーブル16席、20名まで貸切可、禁煙。口コミ (2026年、英語): 2026年6月25日グランドオープン、大正ロマンのカフェ兼スタジオ、1階のベーグル君とぱすたちゃんの店内から左の階段で2階へ、本物のアンティーク家具、赤い絨毯、黒電話、大正時代のレシピのライスカレー (1日10食、1,200円)、ちりめん山椒のパスタ1,900円、自家製ボロネーゼ、ライスコロッケ、ローストビーフ、カプレーゼ、生ハムとソーセージ、クリームソーダ、柚子クリームソーダ950円、切子グラスの瓶ビール、入場料500円でベーグルのサービス、制服もかわいい。',
      confidence: 'low', sources: [TB, R + 'B530504492/', R + 'B530622289/', R + 'B531453233/', R + 'B531534074/', R + 'B531575060/', R + 'B531697338/', R + 'B532253582/', R + 'B534791015/', R + 'B536745005/', R + 'B537647330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; ¥500 entrance with a bagel.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区相之町139 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.002685, 135.763952), offset ~1m to clear 鉄板焼DINING YANAGI (9m); cross-checked: GSI 京都府京都市下京区相之町139番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530622289/', R + 'B531575060/', R + 'B536745005/'],
    price_note: 'Prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Taisho-era curry rice (10 a day)', '¥1,200', 'Food', 'ask', 'no', '', 'curry'),
      it('', '', 'Chirimen-sansho pasta', '¥1,900', 'Food', 'no', 'no', 'June 2026.', 'pasta'),
      it('', '', 'Rice croquettes (meat sauce and cheese)', '', 'Food', 'no', 'no', '', 'arancini'),
      it('', '', 'Yuzu cream soda', '¥950', 'Drink', 'ask', 'no', 'September 2026.', 'cream_soda'),
      it('', '', 'Entrance charge (with a complimentary bagel)', '¥500', 'Charge', 'no', 'ask', 'June 2026.', 'entrance'),
    ] }, {
    cuisine: '大正ロマンの夜のカフェ兼スタジオ、2026年6月25日開業 (2026年の口コミ)・大正時代のレシピのライスカレー、1日10食、1,200円 (2026年6月、9月)・ちりめん山椒のパスタ1,900円、自家製ボロネーゼ、肉のソースとチーズのライスコロッケ、ローストビーフ、カプレーゼ、生ハムとソーセージ (2026年)・色とりどりのクリームソーダとフロート、柚子クリームソーダ950円 (2026年9月)、切子グラスの瓶ビール、ワイン (2026年)',
    neighborhood: '四条通のすぐ脇。烏丸駅から徒歩10分',
    gf_detail: '要確認。カレーライス、パスタ、ライスコロッケ、サービスのベーグル。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のカレー、ボロネーゼ、チーズのライスコロッケ、ローストビーフ (口コミ)。',
    notes: '[カフェ・四条の脇、大正の夜のサロン] ベーグル屋の上、階段を上がった16席の夜のカフェ。本物のアンティーク、赤い絨毯、黒電話の大正ロマン。大正のレシピのライスカレー (1日10食、1,200円)、ライスコロッケ、パスタ、宝石のようなクリームソーダ。入場料500円でベーグル付き、17:30〜22:00。',
  });
}

// ================================================================ 丸常蒲鉾
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009061/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-nishiki.or.jp/omise/sozai/tenpo-039.html';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_marutsune_kamaboko_nishiki', name: '丸常蒲鉾 (Marutsune Kamaboko)', category: 'OMNI',
    lat: 35.0050516978709, lng: 135.76421130035982, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried fish-paste cakes (tempura-style), some with yuba, potato or yakisoba; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-paste products, some with bacon, butter or quail egg (reviews).',
    hours_raw: '09:00–18:00 daily; hours may change (Tabelog). Cash or QR payment; no cards or e-money (Tabelog). A take-away counter in Nishiki Market; freshly fried skewers can be eaten on the spot, served warm (2017 and November 2025 reviews). Very busy with visitors (2019 and 2025 reviews). In Nishiki Market just east of Yanagibaba, 4 min from Shijo (Karasuma Line) exit 2 and 6 min from Kawaramachi Stn exit 3 (Tabelog; January 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, east of Yanagibaba',
    cuisine: 'Nishiki Market kamaboko maker founded 1947, still grinding the paste in a stone mill from a blend of white fish such as pollock, eel and shiroguchi (Nishiki Market shop guide, quoted January 2025) · fried fish cakes on skewers: lily-bulb and yuba roll, potato-butter, onion-bacon (about ¥320–350), shinobi-ten with two quail eggs ¥400 (2019–2025) · onion, pickled-ginger and squid tempura; fish cake with yakisoba (2019–2025)',
    website: SITE, gmaps: gm('丸常蒲鉾 錦市場'), menu_url: TB,
    notes: "[Fish cakes · Nishiki Market, fried to eat on the spot] A Nishiki Market kamaboko maker since 1947 whose counter fries fish-cake skewers to eat warm as you walk: the lily-bulb and yuba roll, potato-butter or onion-bacon (about ¥350), or the quail-egg 'shinobi-ten' (¥400). Busy all day; cash or QR; 9:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Makers not named'], origin: null,
      background: 'A January 2025 reviewer quotes the Nishiki Market shop guide: founded in 1947, a long-established kamaboko shop that keeps the previous generation’s blending of fish such as pollock, eel and shiroguchi and still grinds the paste in a stone mill. A 2019 reviewer notes counters in Kansai department stores (such as 丸常蒲鉾店 大丸京都店).',
      philosophy: 'A stone mill rather than stainless steel, so the paste is mixed thoroughly (Nishiki Market shop guide, quoted January 2025).',
      specialty: 'Yurine-yuba-maki fried fish cake.',
      anecdotes: [
        { text: 'A November 2025 visitor enjoyed the quail-egg fish cake served warm while walking the market.', source: R + 'B516966250/' },
        { text: 'A September 2019 visitor had the lily-bulb and yuba roll after tea at Ippodo, on the way to Honnoji.', source: R + 'B84747228/' },
        { text: 'A January 2025 regular, on a 54th market visit, skipped the classics for two quail-egg skewers.', source: R + 'B89175997/' },
      ],
      japanese_sources_summary: '食べログ: 丸常蒲鉾、京都市中京区錦小路通柳馬場東入東魚屋町166、阪急河原町駅3番出口から徒歩6分、地下鉄四条駅2番出口から徒歩4分、毎日9:00〜18:00、予約不可、カード・電子マネー不可、QR可、禁煙、錦市場の店舗紹介ページへのリンク。口コミ (2017〜2025年、英語): 1947年創業の錦市場の老舗の蒲鉾屋、先代からの配合 (スケソウダラ、シログチなど)、石臼で練る、ゆり根湯葉巻天 (290〜350円)、じゃがバター天とオニオンベーコン天 (320円)、うずら卵2個のしのび天400円、玉ねぎ天、紅しょうが天、いか天、焼きそば入り、揚げたてをその場で、関西の百貨店にも出店、外国からの客が多い。',
      confidence: 'low', sources: [TB, SITE, R + 'B277320792/', R + 'B359439991/', R + 'B411033582/', R + 'B415752461/', R + 'B418664614/', R + 'B419788955/', R + 'B454341502/', R + 'B516966250/', R + 'B84747228/', R + 'B89175997/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point and buy at the counter; cash or QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通柳馬場東入東魚屋町166',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.005052, 135.764211); cross-checked: GSI 京都府京都市中京区東魚屋町166番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B419788955/', R + 'B454341502/', R + 'B89175997/'],
    price_note: 'Prices from 2019–2025 reviews; may have risen.', last_checked: TODAY, items: [
      it('', '', 'Lily-bulb and yuba roll fried fish cake', '¥350', 'Fish cakes', 'ask', 'no', 'September 2022.', 'yurine_yuba'),
      it('', '', 'Potato-butter fried fish cake', '¥320', 'Fish cakes', 'ask', 'no', '2019.', 'jaga_butter'),
      it('', '', 'Onion-bacon fried fish cake', '¥320', 'Fish cakes', 'ask', 'no', '2019.', 'onion_bacon'),
      it('', '', 'Shinobi-ten (two quail eggs)', '¥400', 'Fish cakes', 'ask', 'no', 'January 2025.', 'shinobi'),
    ] }, {
    cuisine: '1947年創業の錦市場の蒲鉾屋。今も石臼で練り、スケソウダラやシログチなどの白身魚を配合 (錦市場の店舗紹介、2025年1月の口コミより)・串に刺した揚げたての練り物: ゆり根湯葉巻、じゃがバター、オニオンベーコン (320〜350円ほど)、うずら卵2個のしのび天400円 (2019〜2025年)・玉ねぎ天、紅しょうが天、いか天、焼きそば入り (2019〜2025年)',
    neighborhood: '錦市場、柳馬場の東',
    gf_detail: '要確認。湯葉、じゃがいも、焼きそばなどを使った揚げた練り物。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の練り物で、ベーコン、バター、うずら卵入りもある (口コミ)。',
    notes: '[練り物・錦市場、その場で揚げたて] 1947年創業の錦市場の蒲鉾屋。揚げたての練り物を串で、歩きながら温かいうちに。ゆり根湯葉巻、じゃがバター、オニオンベーコン (350円ほど)、うずら卵の「しのび天」 (400円)。一日中にぎわう。現金かQR、9:00〜18:00。',
  });
}

// ================================================================ 祇園 喜多八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032239/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_gion_kitahachi', name: '祇園 喜多八 (Gion Kitahachi)', category: 'OMNI',
    lat: 35.00443480346289, lng: 135.77387038212447, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal fish dishes, sushi, simmered fish, fried dishes such as matsutake with Worcestershire sauce; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi and fish dishes (reviews).',
    hours_raw: '18:00–03:00 Monday–Saturday; closed Sunday and holidays; hours may change (Tabelog). Reservations taken, a la carte on the day too (Tabelog; July 2024). Cards: JCB and AMEX (Tabelog). About 7 counter seats; heated tobacco only in a designated area (Tabelog; June 2021). Bringing your own drinks is allowed, a May 2026 reviewer says. Down a narrow alley off Tominaga-cho in Gion, west of Kiritoshi (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho west of Kiritoshi — by Gion-Shijo',
    cuisine: 'Long-established Gion counter of seasonal fish dishes and sushi (2021–2026 reviews) · konowata sushi, ayu-buri sushi in sweetfish season, cucumber kappa-maki with a whole cucumber (2022–2025) · guji, large junsai, dobin-mushi in autumn, deep-fried matsutake with Worcestershire sauce (2021–2025) · yuba, sweet-simmered fish, fresh oysters, assorted sashimi (September 2026) · about ¥8,000–10,000 a person (Tabelog)',
    website: null, gmaps: gm('祇園 喜多八'), menu_url: TB,
    notes: "[Sushi & fish dishes · Gion Tominaga-cho, a family counter till 3 am] A seven-seat Showa-era counter down a Gion alley, run by a veteran chef with family, serving seasonal fish dishes and sushi until the small hours — konowata sushi, ayu sushi in summer, dobin-mushi in autumn. Some guests come on the word of a Gion bar master or a geiko. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef and family, not named'], origin: null,
      background: 'Reviewers (2021–2026) describe a long-established counter with a Showa-era feel, run by a veteran head chef (75, a September 2025 reviewer says) with the proprietress and a son, the young master, with the family’s grandchild sometimes passing through.',
      philosophy: null,
      specialty: 'Konowata sushi; seasonal fish dishes.',
      anecdotes: [
        { text: 'An October 2025 guest came on a geiko’s recommendation to try konowata sushi for the first time.', source: R + 'B517064667/' },
        { text: 'A September 2025 late visitor, sent by a Gion bar master, was greeted by the chef’s 5-year-old grandchild.', source: R + 'B497271696/' },
        { text: 'A September 2023 diner was surprised by deep-fried matsutake with Worcestershire sauce and a whole-cucumber kappa maki.', source: R + 'B471384037/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 喜多八、寿司・日本料理、京都市東山区富永町切通し西入ル北側109、月〜土 18:00〜翌3:00、日曜・祝日定休、予約可、カード (JCB・AMEX)、加熱式たばこのみの喫煙所、1人8,000〜10,000円ほど。口コミ (2021〜2026年、英語): 富永町の細い路地、カウンター7席ほど、昭和の雰囲気、大将 (75歳) と女将と息子の若大将、孫、このわた寿司、鮎の寿司、きゅうりまるごとのかっぱ巻、ぐじ、じゅんさい、土瓶蒸し、松茸のフライにウスターソース、湯葉、魚の甘煮、生牡蠣、刺身盛り合わせ、アラカルトは当日予約も可、飲み物の持ち込み可 (2026年5月)、祇園のバーのマスターや芸妓の紹介。',
      confidence: 'low', sources: [TB, R + 'B438389088/', R + 'B452440558/', R + 'B471384037/', R + 'B489253096/', R + 'B497086565/', R + 'B497271696/', R + 'B513805981/', R + 'B517064667/', R + 'B528740389/', R + 'B535448908/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; JCB or AMEX only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町切通し西入ル北側109',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004435, 135.773870); cross-checked: GSI 京都府京都市東山区富永町109番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published item prices; Tabelog reviews average about ¥8,000–10,000 a person.', last_checked: TODAY, items: [
      it('', '', 'Konowata sushi', '', 'Sushi', 'ask', 'no', '', 'konowata'),
      it('', '', 'Assorted sashimi', '', 'Fish', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Dobin-mushi (autumn)', '', 'Seasonal', 'ask', 'no', '', 'dobin'),
    ] }, {
    cuisine: '季節の魚料理と寿司の祇園の老舗のカウンター (2021〜2026年の口コミ)・このわた寿司、鮎の季節の鮎の寿司、きゅうりまるごとのかっぱ巻 (2022〜2025年)・ぐじ、大粒のじゅんさい、秋の土瓶蒸し、松茸のフライにウスターソース (2021〜2025年)・湯葉、魚の甘煮、生牡蠣、刺身盛り合わせ (2026年9月)・1人8,000〜10,000円ほど (食べログ)',
    neighborhood: '祇園、富永町の切通し西入ル。祇園四条の近く',
    gf_detail: '要確認。季節の魚料理、寿司、煮魚、松茸のフライにウスターソースなどの揚げ物。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、刺身、魚料理 (口コミ)。',
    notes: '[寿司と魚料理・祇園富永町、深夜3時までの家族のカウンター] 祇園の路地の奥、昭和の雰囲気の7席のカウンター。ベテランの大将と家族で営み、季節の魚料理と寿司を深夜まで: このわた寿司、夏は鮎の寿司、秋は土瓶蒸し。祇園のバーのマスターや芸妓の紹介で訪れる客も。日曜休み。',
  });
}

// ================================================================ 先斗町 焼肉やまかわ 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031987/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_yakiniku_yamakawa_pontocho', name: '先斗町 焼肉やまかわ 本店 (Pontocho Yakiniku Yamakawa Honten)', category: 'OMNI',
    lat: 35.007534, lng: 135.771157, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku of wagyu and Kobe beef with sauces; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (Tabelog).',
    hours_raw: '17:00–22:30 (last order 22:00), open all year (Tabelog). Reservations taken and confirmed the day before; bookings lapse 10 minutes after the time (Tabelog). Cards, e-money and QR (PayPay, Alipay, WeChat Pay) accepted (Tabelog). 36 seats: 12 downstairs, 24 upstairs, with private rooms for up to 4; non-smoking (Tabelog). Touch-panel ordering (review). Several 2022–2023 reviewers found the service brusque. On Pontocho near Sanjo, 3 min from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north end near Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Yakiniku of kuroge wagyu and Kobe beef from its own butcher, opened February 2019 (Tabelog; 2026 reviews) · rare cuts such as zabuton ¥2,980, sankaku ¥2,780, misuji and marushin ¥2,480 (Tabelog menu, July 2025) · Kobe beef sirloin 200 g ¥24,000, tenderloin 100 g ¥15,800, chateaubriand 100 g ¥19,800 (Tabelog menu) · the Yamakawa assorted platter; chuck-roll steak sliced at the table (March 2026) · courses, e.g. ¥5,000 (December 2025)',
    website: null, gmaps: gm('先斗町 焼肉やまかわ 本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Pontocho near Sanjo, a butcher's wagyu] A butcher-run yakiniku in a classic-modern Pontocho house, serving rare kuroge wagyu cuts from about ¥2,500 and Kobe beef steaks, with a ¥5,000 course that needs no extras. Many overseas guests; service has drawn some complaints. Open daily to 22:30.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in February 2019 (Tabelog). A March 2026 reviewer says the business buys about 300 head of kuroge wagyu a year through its own butcher shop. Its sister shop 河原町三条 焼肉ヤマカワ and a はなれ were deferred to this main shop by an earlier ruling (osw9-73).',
      philosophy: 'Show the real taste of wagyu, with carefully chosen premium wagyu and Kobe beef (Tabelog).',
      specialty: 'Kuroge wagyu rare cuts; Kobe beef.',
      anecdotes: [
        { text: 'A December 2025 first-timer found the ¥5,000 course needed no extra meat.', source: R + 'B520379628/' },
        { text: 'A March 2026 diner recommends the Yamakawa assorted platter and the chuck-roll steak sliced by staff.', source: R + 'B523927887/' },
        { text: 'A January 2023 visitor during the New Year rush found the counter seat cramped and the service rough.', source: R + 'B458975111/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町 焼肉やまかわ 本店、焼肉、京都市中京区若松町137-7、京阪三条駅から徒歩3分、毎日17:00〜22:30 (L.O.22:00)、年中無休、予約可、前日に確認の連絡、予約時間から10分で自動キャンセル、カード・電子マネー・QR (PayPay、Alipay、WeChat Pay) 可、36席 (1階12、2階24)、4名までの個室、禁煙、2019年2月21日オープン、厳選和牛と神戸ビーフ。メニュー (2025年7月): 神戸牛サーロイン200g 24,000円、ヒレ100g 15,800円、シャトーブリアン100g 19,800円、黒毛和牛ザブトン2,980円、三角2,780円、ミスジ・マルシン2,480円。口コミ (2019〜2026年、英語): 自社の精肉店から年間300頭を一頭買い、やまかわ盛り合わせ、ザブトンのステーキ、コース5,000円、タッチパネル注文、外国からの客が多い、接客が雑という声 (2022〜2023年)。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B414285444/', R + 'B419474694/', R + 'B455553913/', R + 'B458975111/', R + 'B459226287/', R + 'B469757213/', R + 'B495206337/', R + 'B520379628/', R + 'B523927887/', R + 'B537967375/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; QR and cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区若松町137-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated July 2025); reviews dated through March 2026. The website on Tabelog (yamakawa-meat.com) did not respond on 2026-11-07.' },
    pin_source: `Tabelog ${TB} (35.007547, 135.771102), offset ~5m to clear 先斗町 魯ビン (4m); cross-checked: GSI 京都府京都市中京区若松町137番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B520379628/'],
    price_note: 'Prices from the Tabelog menu (updated July 2025, tax included); course price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Kuroge wagyu zabuton', '¥2,980', 'Rare cuts', 'ask', 'no', '', 'zabuton'),
      it('', '', 'Kuroge wagyu misuji (top blade)', '¥2,480', 'Rare cuts', 'ask', 'no', '', 'misuji'),
      it('', '', 'Kobe beef sirloin, 200 g', '¥24,000', 'Kobe beef', 'ask', 'no', '', 'kobe_sirloin'),
      it('', '', 'Kobe beef tenderloin, 100 g', '¥15,800', 'Kobe beef', 'ask', 'no', '', 'kobe_fillet'),
      it('', '', 'Yakiniku course', '¥5,000', 'Courses', 'ask', 'no', 'December 2025.', 'course'),
    ] }, {
    cuisine: '自社の精肉店の黒毛和牛と神戸牛の焼肉、2019年2月開業 (食べログ、2026年の口コミ)・ザブトン2,980円、三角2,780円、ミスジとマルシン2,480円などの希少部位 (食べログのメニュー、2025年7月)・神戸牛サーロイン200g 24,000円、ヒレ100g 15,800円、シャトーブリアン100g 19,800円 (食べログのメニュー)・やまかわ盛り合わせ、目の前で切るザブトンのステーキ (2026年3月)・コース、たとえば5,000円 (2025年12月)',
    neighborhood: '先斗町の北、三条の近く。三条駅から徒歩3分',
    gf_detail: '要確認。タレで食べる和牛と神戸牛の焼肉。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (食べログ)。',
    notes: '[焼肉・先斗町の三条寄り、精肉店の和牛] 先斗町の町家風の店で精肉店が営む焼肉。黒毛和牛の希少部位が2,500円ほどから、神戸牛のステーキも。5,000円のコースで追加いらず。外国からの客が多く、接客には厳しい声も。毎日22:30まで。',
  });
}

save();
