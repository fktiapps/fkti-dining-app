// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 81.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl, than.co.jp/brands and 株式会社WILL (will-food.com).
//   - 新 — existence unconfirmed: 和牛一乃音 (opened May 2026) now in the same basement
//   - 鼓月 大丸京都店 — chain, as 鼓月 四条烏丸店 (26027966)
//   - 百圓寿司スタンドえにし 三条河原町店 — large parent: a THAN brand (than.co.jp/brands)
//   + うゑ柳 Ueyanagi (Kyoto kaiseki above the ochaya まん; chef trained at 高台寺土井; July 2025 review, site news to September 2025)
//   + BAR NEXT (cocktail and whisky bar north of Sanjo; 2025 reviews)
//   - FIESTA フィエスタ河原町 — no reviews at all (rest rule)
//   + 祇園 匠庵 Gion Shoan (Kyoto-style oden and Hida beef shabu-shabu, with a plant-based Kyoto course)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: うゑ柳 10% at night (Tabelog; official site, plus tax); BAR NEXT ¥300 charge (Tabelog); 匠庵 included in course prices.
//   Pins: Tabelog /en/ point, cross-checked with GSI; BAR NEXT moved ~4 m off kyoto_au_bon_morceau (5 m); each 9 m+ from every pin on main,
//   hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020881', '鼓月 大丸京都店: chain — 鼓月, a Kyoto confectionery brand with many shops and department-store counters; same ruling as 鼓月 四条烏丸店 (26027966)');
skip('26044899', '百圓寿司スタンドえにし 三条河原町店: large parent — 百圓寿司スタンド えにし is a brand of 株式会社THAN (than.co.jp/brands)');
skip('26043507', 'FIESTA フィエスタ河原町: no reviews on Tabelog (rest rule)');

skip('26018643', '新: existence unconfirmed — its latest review is December 2025, and 和牛一乃音 (kyoto_wagyu_ichinone, Tabelog: opened 1 May 2026) now occupies the same basement, 祇園ファーストビル B1F, also closed Tuesdays with an 8-seat counter; Tabelog does not mark 新 closed, so revisit if a 2026 review or the shop confirms it is still open');

// ================================================================ うゑ柳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004045/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://ueyanagi.com/';
  const H = day(['12:00', '22:30']);
  put({
    id: 'kyoto_ueyanagi_gion', name: 'うゑ柳 (Ueyanagi)', category: 'OMNI',
    lat: 35.00476917787492, lng: 135.77624636034855, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with dashi, vinegar dressings and hand-made soba (buckwheat; ask whether it is pure buckwheat); no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, eel, suppon and chicken (official site).',
    hours_raw: '12:00–22:30 (last order 22:00); closed Sunday (official site). Tabelog gives 12:00–14:00 and 17:30–22:30 (last order 21:30) Monday–Saturday. Service 10% and tax 10% on top of menu prices (official site; Tabelog lists 10% at night). Cards accepted; no e-money (Tabelog). 17 seats with private rooms for 2–8; smoking allowed (Tabelog). On the third floor above the ochaya まん, reached by a stone path and a lift; interior by the designer 森田恭通; maiko and geiko can entertain in the zashiki (official site). Gion-machi Kitagawa, about 5 minutes from Yasaka Shrine (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Yasaka Shrine',
    cuisine: 'Traditional Kyoto kaiseki with new ideas: colourful soups and hand-made soba of hand-ground buckwheat (official site) · mini kaiseki from ¥8,000 — e.g. hamo tataki, kinmedai and torigai salad, grilled amadai and kuruma prawn hassun, jidori-chicken dashi chazuke, house cheesecake (official site) · evening omakase ¥25,000 and ¥30,000; special courses from ¥30,000; suppon from ¥25,000; hamo from ¥20,000; wild fugu from ¥25,000; all plus 10% service and tax (official site) · takeaway: the ochaya cheesecake 無垢 and other omotase (official site) · Akita matsutake and Nagasaki beef in autumn (October 2023)',
    website: SITE, gmaps: gm('うゑ柳 祇園'), menu_url: SITE + 'dining/',
    notes: "[Kaiseki · Gion north of Shijo, above an ochaya] A designer kaiseki room on the third floor of a Gion ochaya building, where a chef trained at a classic Kyoto kaiseki house cooks Kyoto courses with playful touches — bright soups, hand-cut soba — and maiko can join the party. Mini kaiseki from ¥8,000; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Head chef (料理長), not named', 'Okami'], origin: 'Kyoto (official site)',
      background: 'Born in Kyoto, the son of a sushi shop; trained for many years at the old Kyoto kaiseki house 高台寺土井; became head chef of うゑ柳 in 2006 through a chance connection with the okami, and works with two young apprentices (official site). The restaurant sits on the third floor above the ochaya まん (official site).',
      philosophy: 'To cook for every guest as for a loved one or family; the guest, not the chef, is the star (official site).',
      specialty: 'Kyoto kaiseki; hand-made soba.',
      anecdotes: [
        { text: 'An October 2023 guest called it the most luxurious meal of a lifetime, with Akita matsutake and Nagasaki beef.', source: R + 'B472615683/' },
      ],
      japanese_sources_summary: '公式サイト: 京都祇園 うゑ柳、モダンなビルの1・2階が「お茶屋 まん」、3階が「うゑ柳」、石畳のアプローチとエレベーター、インテリアデザイナー森田恭通氏の設計、舞妓・芸妓のおもてなし、12:00〜22:30 (L.O.22:00)、日曜定休、京都市東山区祇園町北側347、伝統を受け継いだ本格的な京料理と独創的な料理、料理長は寿司店の息子として京都に生まれ、高台寺土井で長年修行、2006年にうゑ柳の料理長、2人の若い弟子、ミニ会席8,000円から (先附、向附、焼八寸、地鶏叩きの出汁茶漬け、自家製チーズケーキなど)、夜のおまかせ25,000円・30,000円、特別コース30,000円から、すっぽん25,000円から、はも20,000円から、天然ふぐ25,000円から、サービス料10%・消費税10%別、色鮮やかなスープ、手挽きのそば粉の手打ちそば、お茶屋はんのチーズケーキ「無垢」、お知らせ (2025年9月 祇園をどり)。食べログ: うゑ柳、日本料理・海鮮、月〜土 12:00〜14:00、17:30〜22:30 (L.O.21:30)、夜はサービス料10%、カード可、電子マネー不可、17席、個室 (2〜8名)、喫煙可。口コミ (2007〜2025年、英語): 秋田の松茸、長崎の牛肉 (2023年10月)。',
      confidence: 'medium', sources: [SITE, SITE + 'about/', SITE + 'dining/', TB, R + 'B472615683/', R + 'B510746479/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; 10% service and tax extra; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with news to September 2025; Tabelog reviews through July 2025.' },
    pin_source: `Tabelog ${TB} (35.004769, 135.776246); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'dining/'],
    price_note: 'Prices from the official site (November 2026); plus 10% service and 10% tax.', last_checked: TODAY, items: [
      it('ミニ会席', '', 'Mini kaiseki', '¥8,000', 'Courses', 'ask', 'no', 'From.', 'mini'),
      it('夜のおまかせ', '', 'Evening omakase', '¥25,000', 'Courses', 'ask', 'no', 'Also ¥30,000.', 'omakase'),
      it('すっぽんコース', '', 'Suppon course', '¥25,000', 'Courses', 'ask', 'no', 'From.', 'suppon'),
      it('はもコース', '', 'Hamo course', '¥20,000', 'Courses', 'ask', 'no', 'From.', 'hamo'),
      it('ふぐコース（天然）', '', 'Wild fugu course', '¥25,000', 'Courses', 'ask', 'no', 'From.', 'fugu'),
    ] }, {
    cuisine: '伝統を受け継ぎ、新しい切り口にも挑む京料理。色鮮やかなスープ、手挽きのそば粉の手打ちそば (公式サイト)・ミニ会席は8,000円から、たとえば鱧叩き、金目鯛と鳥貝のサラダ仕立て、甘鯛と車海老の焼八寸、地鶏叩きの出汁茶漬け、自家製チーズケーキ (公式サイト)・夜のおまかせ25,000円・30,000円、特別コース30,000円から、すっぽん25,000円から、はも20,000円から、天然ふぐ25,000円から、いずれもサービス料10%と消費税別 (公式サイト)・持ち帰りにお茶屋はんのチーズケーキ「無垢」など (公式サイト)・秋は秋田の松茸と長崎の牛肉 (2023年10月)',
    neighborhood: '祇園、四条の北、八坂神社の近く',
    gf_detail: '要確認。出汁、合わせ酢、手打ちそば (そば粉。十割かどうかは確認を) の京料理。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。魚、鰻、すっぽん、地鶏の会席 (公式サイト)。',
    notes: '[会席・祇園の四条北、お茶屋の上] お茶屋のビルの3階、森田恭通氏設計の京料理。高台寺土井で修業した料理長が、色鮮やかなスープや手打ちそばなど遊び心のある京料理を。舞妓さんとのお座敷も。ミニ会席は8,000円から、日曜休み。',
  });
}

// ================================================================ BAR NEXT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001249/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.barnext.jp/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_bar_next_kawaramachi', name: 'バー ネクスト (BAR NEXT)', category: 'OMNI',
    lat: 35.009600, lng: 135.770066, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cocktails, whisky and wine; whisky and most spirits are distilled, but beer and some liqueurs are not GF and no food information is published (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh-fruit cocktails and spirits; snacks such as raisin butter contain dairy (reviews).',
    hours_raw: '17:00–24:00 daily (official site; Tabelog). Table charge ¥300 (Tabelog). Cards (JCB, AMEX), e-money and QR payments (Tabelog). 28 seats; smoking allowed (Tabelog). English menu (official site); an English-speaking staff member helped a September 2023 guest. Ground floor of a building in the second lane north of Sanjo, east of Kawaramachi (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Sanjo',
    cuisine: 'Cocktail and whisky bar: classic cocktails and seasonal fresh-fruit cocktails such as fig and grape; whiskies including many old bottles from around the 1980s; wine (Tabelog shop text; official site; September 2023) · Laphroaig soda (August 2025); salty dog with raisin butter (February 2024) · rare whiskies at fair prices (December 2025)',
    website: SITE, gmaps: gm('BAR NEXT 京都 河原町'), menu_url: SITE,
    notes: "[Bar · Kawaramachi north of Sanjo, fruit cocktails and old whisky] A relaxed grown-up bar off Kawaramachi with seasonal fresh-fruit cocktails (fig, grape) and a shelf of 1980s-era whisky bottles at fair prices. English menu; ¥300 charge; smoking allowed; open nightly to midnight.",
    chef_bio: { chef_name: null, roles: ['Master and bartenders not named'], origin: null,
      background: 'A Kawaramachi bar reviewed since 2013 (Tabelog). Reviewers describe a gentlemanly master, an English-speaking staff member and a cosy, adult atmosphere.',
      philosophy: null,
      specialty: 'Fresh-fruit cocktails; old-bottle whisky.',
      anecdotes: [
        { text: 'A September 2023 guest liked the fresh fig cocktail enough to follow it with a fresh grape one.', source: R + 'B472244592/' },
        { text: 'A December 2025 visitor discovered whiskies that taste of brandy and others of iodine.', source: R + 'B518840979/' },
      ],
      japanese_sources_summary: '公式サイト: BAR NEXT (バーネクスト)、ウイスキー・カクテル・ワイン、京都市中京区河原町通三条2筋目上る東入る ステラム1階、17:00〜0:00、英語メニュー。食べログ: バー ネクスト、バー、恵比須町534-18、毎日 17:00〜0:00、カード (JCB、AMEX)・電子マネー・QR決済可、チャージ300円、28席、喫煙可、スタンダードから季節のフレッシュフルーツまでのカクテル、1980年代ごろのオールドボトルを含むウイスキー。口コミ (2013〜2025年、英語): いちじくやぶどうのフレッシュカクテル、英語が話せるスタッフ、紳士的なマスター、ソルティドッグとレーズンバター、ラフロイグのソーダ割り、珍しいウイスキーを手ごろに。',
      confidence: 'low', sources: [SITE, TB, R + 'B472244592/', R + 'B480037671/', R + 'B512533248/', R + 'B518840979/'] },
    cultural_comfort: { level: 'english', note: 'English menu (official site); ¥300 charge; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条二筋上ル東入ル恵比須町534-18 ステラム 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.009591, 135.770023), offset ~4m to clear kyoto_au_bon_morceau (5.0m); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published drink prices; ¥300 table charge; Tabelog budget ¥2,000–3,000.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fresh-fruit cocktail', '', 'Cocktails', 'ask', 'ask', '', 'fruit'),
      it('', '', 'Table charge', '¥300', 'Charge', 'gf', 'vegan', '', 'charge'),
    ] }, {
    cuisine: 'カクテルとウイスキーのバー: スタンダードから、いちじくやぶどうなど季節のフレッシュフルーツのカクテル、1980年代ごろのオールドボトルを含むウイスキー、ワイン (食べログの店舗紹介、公式サイト、2023年9月)・ラフロイグのソーダ割り (2025年8月)、ソルティドッグとレーズンバター (2024年2月)・珍しいウイスキーを手ごろに (2025年12月)',
    neighborhood: '河原町、三条の北',
    gf_detail: '要確認。カクテル、ウイスキー、ワイン。蒸留酒は多くが問題ないが、ビールや一部のリキュールは不可。食べ物の情報はない (食べログ、口コミ)。',
    vegan_detail: '要確認。フルーツのカクテルと蒸留酒。つまみのレーズンバターなどは乳製品 (口コミ)。',
    notes: '[バー・河原町の三条北、フルーツカクテルとオールドボトル] 河原町から入った落ち着いた大人のバー。いちじくやぶどうの季節のフレッシュカクテル、1980年代ごろのウイスキーのオールドボトルを手ごろに。英語メニューあり、チャージ300円、喫煙可、毎晩0時まで。',
  });
}

// ================================================================ 祇園 匠庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035179/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://shouan.co.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_shoan_oden', name: '祇園 匠庵 (Gion Shoan)', category: 'OMNI',
    lat: 35.00530134787458, lng: 135.77625198035392, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden and shabu-shabu in a kombu-and-katsuobushi dashi; the sets end with a fried banana-fu doughnut, and the vegan course’s nama-fu contains wheat (official site).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a plant-based Kyoto course, “Ohara” (¥6,800), of yuba, nama-fu and seasonal Kyoto vegetables with no animal ingredients — book by noon on the day (official site). The regular oden dashi uses katsuobushi.',
    hours_raw: 'Lunch from 11:30 by reservation only; dinner 17:00–22:00; irregular closing days (official site). Tabelog lists 11:30–15:00 and 17:00–22:00 daily. A breakfast set of oden and Hida beef is also offered (official site). Booking through TableCheck on the official site includes a free welcome drink (official site). Cards (VISA, Master, JCB, AMEX); no e-money or QR; charges included in course prices (Tabelog). 12 seats: an 8-seat counter and a table for 4; non-smoking; English menu (Tabelog; official site). Ground floor of a building tucked away north of Shijo in Gion (Tabelog; 2023 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo',
    cuisine: 'Kyoto-style oden in a long-simmered dashi, and wagyu shabu-shabu dipped in the same broth, each guest with an own pot or grill (official site; Tabelog) · sets with a large platter of obanzai, oden, rice and pickles, a fried banana-fu doughnut with ice cream and organic coffee or tea: Kyoto oden set ¥5,800; Hida beef shabu-shabu and oden ¥8,800; Hida beef yaki-shabu and oden ¥8,800; nama-fu, tofu and Kyoto-vegetable shabu-shabu and oden ¥8,800; Hida beef shabu-shabu and yaki-shabu ¥12,800; special-grade ¥14,800 (official site) · plant-based Kyoto course “Ohara” ¥6,800 (official site) · ramen to finish (December 2023)',
    website: SITE, gmaps: gm('祇園 匠庵 おでん'), menu_url: SITE + 'menu/dinner/',
    notes: "[Oden & wagyu · Gion north of Shijo, a hidden counter] A twelve-seat Gion hideaway where the okami serves Kyoto-style oden and Hida beef shabu-shabu in the same long-simmered dashi, after a colourful obanzai platter. Sets from ¥5,800, plus a plant-based course (¥6,800, book by noon). English menu.",
    chef_bio: { chef_name: null, roles: ['Okami and chef not named'], origin: null,
      background: 'A Gion hideaway where the okami welcomes guests with seasonal food (official site). Reviewers (2023–2025) describe a warm, wood-scented room, an owner who reheats the oden at the counter, and at times a single person running the whole service.',
      philosophy: 'A long-loved oden dashi of carefully chosen kombu and katsuobushi, used to bring out wagyu in shabu-shabu (official site).',
      specialty: 'Kyoto-style oden; Hida beef shabu-shabu.',
      anecdotes: [
        { text: 'An April 2023 couple were won over by the big platter of seasonal side dishes before the oden.', source: R + 'B463420426/' },
        { text: 'A May 2025 guest had the ¥8,800 set ending with a fried banana doughnut and coffee.', source: R + 'B507027569/' },
        { text: 'An August 2025 diner enjoyed the oden reheated at the counter.', source: R + 'B511934633/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園匠庵 京風おでんと和牛、ヴィーガン京料理コース「大原」6,800円 (湯葉・生麩・旬の京野菜、動物性食材を使わない、当日12時までに要予約、生麩に小麦を使用)、特選飛騨牛ひとりしゃぶしゃぶ・焼きしゃぶとおでんセット14,800円、飛騨牛ひとりしゃぶしゃぶ・焼きしゃぶとおでんセット12,800円、飛騨牛焼きしゃぶとおでんセット8,800円、飛騨牛しゃぶしゃぶとおでんセット8,800円、生麩・豆腐・京野菜しゃぶしゃぶとおでんセット8,800円、京風おでんセット5,800円 (大皿盛り、ごはんと香の物、バナナ麩の揚げドーナツアイス添え、京風オーガニック珈琲か日本茶付き)、昆布と鰹節の出汁、女将のおもてなし、朝食御膳 (おでんと飛騨牛)、公式予約 (TableCheck) で乾杯ドリンク1杯サービス、英語メニュー、昼11:30〜 (完全予約制)、夜17:00〜22:00、不定休。食べログ: 祇園 匠庵、おでん・日本料理、京都市東山区祇園町北側347-87 彩和ビル1F、11:30〜15:00、17:00〜22:00、カード可、電子マネー・QR決済不可、チャージはコース料金に含む、12席 (カウンター8、4人卓)、禁煙。口コミ (2020〜2025年、英語): 大皿のおばんざい、おでん、締めのラーメン、目の前で温め直すおでん、ひとりで切り盛り、気さくな店主。',
      confidence: 'medium', sources: [SITE, SITE + 'menu/dinner/', SITE + 'concept/', SITE + 'access/', TB, R + 'B463420426/', R + 'B469122550/', R + 'B476632085/', R + 'B507027569/', R + 'B510349977/', R + 'B511934633/'] },
    cultural_comfort: { level: 'english', note: 'English menu (official site); lunch by reservation.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-87 彩和ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current courses and Tabelog listing; reviews dated through August 2025.' },
    pin_source: `Tabelog ${TB} (35.005301, 135.776252); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 78m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/dinner/'],
    price_note: 'Prices from the official site (November 2026), tax included.', last_checked: TODAY, items: [
      it('ヴィーガン京料理コース', '', 'Plant-based Kyoto course “Ohara”', '¥6,800', 'Courses', 'no', 'vegan', 'Book by noon; nama-fu contains wheat.', 'vegan_ohara'),
      it('京風おでんセット', '', 'Kyoto-style oden set', '¥5,800', 'Sets', 'ask', 'no', '', 'oden_set'),
      it('飛騨牛しゃぶしゃぶとおでんセット', '', 'Hida beef shabu-shabu and oden set', '¥8,800', 'Sets', 'ask', 'no', '', 'shabu_set'),
      it('生麩・豆腐・京野菜しゃぶしゃぶとおでんセット', '', 'Nama-fu, tofu and Kyoto-vegetable shabu-shabu and oden set', '¥8,800', 'Sets', 'no', 'no', 'Oden dashi uses katsuobushi.', 'veg_shabu'),
      it('特選飛騨牛ひとりしゃぶしゃぶ・焼きしゃぶとおでんセット', '', 'Special-grade Hida beef shabu-shabu, yaki-shabu and oden set', '¥14,800', 'Sets', 'ask', 'no', '', 'special'),
    ] }, {
    cuisine: 'じっくり引いた出汁の京風おでんと、同じ出汁でいただく和牛しゃぶしゃぶ。1人ずつの鍋や焼き台で (公式サイト、食べログ)・おばんざいの大皿、おでん、ごはんと香の物、バナナ麩の揚げドーナツ、オーガニック珈琲か日本茶付きのセット: 京風おでん5,800円、飛騨牛しゃぶしゃぶとおでん8,800円、飛騨牛焼きしゃぶとおでん8,800円、生麩・豆腐・京野菜しゃぶしゃぶとおでん8,800円、飛騨牛しゃぶしゃぶ・焼きしゃぶ12,800円、特選14,800円 (公式サイト)・動物性食材を使わないヴィーガン京料理コース「大原」6,800円 (公式サイト)・締めのラーメン (2023年12月)',
    neighborhood: '祇園、四条の北',
    gf_detail: '要確認。昆布と鰹節の出汁のおでんとしゃぶしゃぶ。セットの締めはバナナ麩の揚げドーナツ、ヴィーガンコースの生麩は小麦を使用 (公式サイト)。',
    vegan_detail: 'ヴィーガンの選択肢あり。湯葉、生麩、旬の京野菜の動物性食材を使わない京料理コース「大原」(6,800円)、当日12時までに予約を (公式サイト)。ふだんのおでんの出汁には鰹節を使う。',
    notes: '[おでんと和牛・祇園の四条北、隠れ家のカウンター] 12席の祇園の隠れ家。女将のもてなしで、おばんざいの大皿のあと、同じ出汁の京風おでんと飛騨牛のしゃぶしゃぶを。セットは5,800円から、ヴィーガンのコースも (6,800円、当日12時までに予約)。英語メニューあり。',
  });
}

save();
