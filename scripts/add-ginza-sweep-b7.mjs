// Ginza Station half-mile sweep (805 m), batch 7 — vegan options (sweep placeholder researched).
//   ~ tokyo3_ta_im Ta-im 丸の内店 (Israeli home cooking; first branch of owner-chef Dan Zuckerman's Ebisu shop)
// Sources: ta-im.com (the branch's own page), Tabelog /en/ listing + October 2026 reviews. Pin: Tabelog geo
// (+ gnavi JSON-LD per the earlier enrich pass). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const OWN = 'https://www.ta-im.com/';
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130201/13228195/'; const R = TB + 'dtlrvwlst/';
  const w = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo3_ta_im', name: 'Ta-im 丸の内店 (Ta-im Marunouchi)', category: 'OMNI',
    lat: 35.677708, lng: 139.761744,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "No gluten-free information was found. The pita is wheat bread, and the falafel is deep-fried, but the source does not say whether in a shared fryer. Hummus, baba ghanoush, matbucha and the tahini grilled vegetables contain no wheat on their own, but their ingredients and preparation are not published. Ask about each dish and the fryer.",
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: "The restaurant says its hummus and falafel can be made vegan (ヴィーガンにも対応できる). 2026 diners order hummus, baba ghanoush, matbucha (spiced tomato), falafel and grilled vegetables with tahini. Lamb dishes are on the menu too. Tell the staff you are vegan so the dips and plates are made to suit.",
    hours_raw: 'Mon–Thu & Sat 11:00–15:00 (L.O. 14:30) and 17:30–22:00 (L.O. 21:00); Fri dinner to 22:30 (L.O. 21:30); closed Sundays (Tabelog). Cards, IC and QR payments accepted.',
    hours: { 0: w, 1: w, 2: w, 3: w, 4: day(['11:00', '15:00'], ['17:30', '22:30']), 5: w }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marunouchi 3-chōme, Marunouchi Nijūbashi Bldg B1F — near Hibiya and Nijūbashimae stations',
    cuisine: 'Israeli / Mediterranean home cooking · hummus, falafel, pita, lamb', cuisine_type: 'other',
    website: OWN, gmaps: gm('Ta-im 丸の内店 丸の内二重橋ビル'), menu_url: null,
    notes: "[Vegan options · Israeli] The first branch of owner-chef Dan Zuckerman's Israeli home-cooking restaurant, whose original is in Ebisu. It opened in November 2018 in the basement of the Marunouchi Nijūbashi Building. The room is blue like an Israeli sky, mostly counter seats, with staff close to the guests. The restaurant bills its spice- and herb-heavy hummus and falafel as able to be made vegan, and pours Israeli wine. 2026 diners order the trio of dips (hummus, baba ghanoush, matbucha), grilled vegetables in tahini, falafel pita, lamb plates and baklava. Lunch is pita sandwiches and plate sets.",
    chef_bio: {
      chef_name: 'Dan Zuckerman (ダン・ズッカーマン, owner-chef)', roles: ['owner-chef of Ta-im (Ebisu original)', 'Marunouchi is the first branch'],
      origin: 'Ebisu original; Marunouchi branch opened 8 November 2018',
      background: 'Owner-chef Dan Zuckerman runs Ta-im in Ebisu; Marunouchi was its first branch.',
      philosophy: null,
      specialty: 'Hummus and falafel with bold spices and herbs; Israeli home cooking; Israeli wine.',
      anecdotes: [
        { text: '「ヴィーガンにも対応できるスパイスやハーブを大胆に使ったこだわりの『フムス』や『ファラフェル』」 — the restaurant\'s own description.', source: OWN },
        { text: 'An October 2026 diner came for the hummus and baklava they had seen on the TV drama Kodoku no Gurume.', source: R + 'B537343090/' },
        { text: 'Half falafel pita with soup, ¥1,200 at lunch — "I could hear the pleasant sound of falafel being fried."', source: R + 'B537328575/' },
      ],
      japanese_sources_summary: '公式(ta-im.com): Ta-im 丸の内店 2018年11月8日オープン、恵比寿本店のオーナーシェフ ダン・ズッカーマン氏のイスラエル家庭料理の初支店、丸の内二重橋ビル地下1階、ヴィーガンにも対応できるフムス・ファラフェル、イスラエル産ワイン。食べログ: 月〜木・土 11:00〜15:00・17:30〜22:00、金は〜22:30、日休、カード・IC・QR可。2026年10月の口コミ: フムス・ババガヌーシュ・マトブーハ、タヒニのグリル野菜、ファラフェルピタ+スープ1,200円、ラムピタサンド1,700円。',
      confidence: 'medium', sources: [OWN, TB, R + 'B537162442/', R + 'B537164546/', R + 'B537328575/', R + 'B537836337/'],
    },
    cultural_comfort: { level: 'english', note: 'A homely, mostly-counter room; reservations are easy, including Saturday lunch. Cards and QR accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Pita (wheat) is served with most dishes; falafel is fried to order — fryer arrangement not stated.', source: R + 'B537328575/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Lamb plates and lamb pita are on the same menu.', source: R + 'B537518092/' }],
      staff_allergy_handling: [],
      positives: [{ text: 'The restaurant describes its hummus and falafel as vegan-capable (ヴィーガンにも対応できる).', source: OWN }],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内3-2-3 丸の内二重橋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: gnavi JSON-LD ~26m (earlier enrich pass); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537162442/', R + 'B537164546/', R + 'B537328575/', R + 'B537836337/', OWN],
    price_note: 'No menu was read. Dishes come from October 2026 Tabelog reviews, with two lunch prices.', last_checked: TODAY, items: [
      it('', '', 'Trio of dips: hummus, baba ghanoush, matbucha', '', 'Dips', 'ask', 'ask', 'Vegan-capable per the restaurant; confirm toppings.', 'dip_trio'),
      it('フムス', 'fumusu', 'Hummus (also with spicy roast tomato)', '', 'Dips', 'ask', 'ask', '', 'hummus'),
      it('ファラフェル', 'farafueru', 'Falafel', '', 'Mains', 'ask', 'ask', 'Vegan-capable per the restaurant; fryer not stated.', 'falafel'),
      it('', '', 'Half falafel pita and soup set (lunch)', '¥1,200', 'Lunch', 'no', 'ask', 'Pita is wheat. October 2026.', 'falafel_pita_set'),
      it('', '', 'Lamb pita sandwich (lunch)', '¥1,700', 'Lunch', 'no', 'no', 'October 2026.', 'lamb_pita'),
      it('', '', 'Grilled vegetables with tahini (cast-iron pan)', '', 'Mains', 'ask', 'ask', '', 'grilled_veg_tahini'),
      it('', '', 'Lamb plate with fries', '', 'Mains', 'ask', 'no', '', 'lamb_plate'),
      it('', '', 'Pita bread', '', 'Sides', 'no', 'ask', 'Wheat bread.', 'pita'),
      it('', '', 'Baklava', '', 'Dessert', 'no', 'ask', 'Filo pastry is wheat.', 'baklava'),
    ] }, {
    cuisine: 'イスラエル・地中海の家庭料理・フムス、ファラフェル、ピタ、ラム',
    neighborhood: '丸の内三丁目、丸の内二重橋ビルB1F。日比谷駅・二重橋前駅の近く',
    gf_detail: 'グルテンフリーの情報は見つかりませんでした。ピタは小麦のパンで、ファラフェルは揚げ物ですが、フライヤーの使い分けは書かれていません。フムス・ババガヌーシュ・マトブーハ・タヒニのグリル野菜はそれ自体に小麦を含みませんが、材料や調理は公表されていません。料理ごとにフライヤーも含めて確認してください。',
    vegan_detail: '店は、フムスとファラフェルを「ヴィーガンにも対応できる」としています。2026年の口コミでは、フムス・ババガヌーシュ・マトブーハ(スパイスのトマト)、ファラフェル、タヒニのグリル野菜が注文されています。ラムの料理もあるので、ヴィーガンであることを伝え、ディップや皿をそれに合わせてもらってください。',
    notes: '[ヴィーガンの選択肢あり・イスラエル料理] 恵比寿本店のオーナーシェフ、ダン・ズッカーマン氏のイスラエル家庭料理店の初の支店で、2018年11月に丸の内二重橋ビルの地下に開店しました。店内はイスラエルの空のようなブルーが基調で、カウンター中心、スタッフとの距離が近い空間です。スパイスとハーブを大胆に使ったフムスとファラフェルはヴィーガンにも対応でき、イスラエル産ワインもあります。2026年の口コミでは、3種のディップ(フムス・ババガヌーシュ・マトブーハ)、タヒニのグリル野菜、ファラフェルピタ、ラムのプレート、バクラヴァが頼まれています。ランチはピタサンドやプレートのセットです。',
  });
}

save();
