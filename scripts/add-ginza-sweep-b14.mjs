// Ginza Station half-mile sweep (805 m), batch 14 — vegan. Researched 2026-10-24.
//   + KOMEDA is □ 東銀座店 (Komeda Coffee's only all-plant-based café; vegan full, GF ask — pancakes now blend wheat)
// Dropped from the vegan/GF candidate list after checking: Howlin' (wine bar/Western), ETHICA (Mexican with game),
// KAZAN (seafood Italian) — no source shows vegan focus. Deferred: Bio c' Bon GINZA SIX and 弁才天 GINZA SIX (shop not
// confirmed at GINZA SIX), WithGreen 有楽町 (several Yūrakuchō shops; listing ambiguous).
// Sources: 日本食糧新聞 (2020), san-tatsu (January 2026), Tabelog /en/ listing + 2026 reviews. Pin: Tabelog geo + GSI + OSM.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const NS = 'https://news.nissyoku.co.jp/?p=657676'; const ST = 'https://san-tatsu.jp/articles/498848/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13248502/'; const R = TB + 'dtlrvwlst/';
  const a = day(['07:00', '22:00']);
  put({
    id: 'tokyo_komeda_is_higashi_ginza', name: 'KOMEDA is □ 東銀座店 (Komeda Is, Higashi-Ginza)', category: 'VEGAN',
    lat: 35.668436, lng: 139.769492,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "No gluten-free menu is described. The café was built around rice and soy, and in 2020 its pancake was 100% Japanese rice flour. By January 2026 the pancake was a blend of rice flour and wheat flour. The toast, burger buns, hot sandwiches and pasta are wheat-based, and the burger bun was described in 2020 as containing rice flour, not as free of wheat. Tabelog says allergy information is available, so ask the staff which items, if any, contain no wheat.",
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: "Fully plant-based. Komeda Coffee's only plant-based café serves a 100% plant-derived menu: soy-milk spread instead of butter on the morning toast, soy whip and soy butter on the pancakes, soy-meat burgers and Bolognese, and oat, almond or soy milk in the coffee. In 2020 the evening drinks were organic wine and beer made without animal-derived ingredients.",
    hours_raw: 'Daily 07:00–22:00 (food L.O. 21:30) (Tabelog). Morning toast is included with drinks in the morning. Cards, IC and QR accepted. Queue numbers via LINE at busy times.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tsukiji 1-chōme, Ginza Shōchiku Square 1F, near Kabuki-za — 1 min from Higashi-Ginza Stn exit 5',
    cuisine: 'Plant-based kissaten (Komeda Coffee) · morning toast · rice-flour pancakes · soy-meat burgers', cuisine_type: 'cafe',
    website: null, gmaps: gm('KOMEDA is 東銀座店 銀座松竹スクエア'), menu_url: null,
    notes: "[Fully vegan · Komeda's plant-based café] Komeda Coffee, which runs over 1,140 cafés nationwide, opened this one in July 2020 as its single plant-based outlet, under the slogan 「お肉を休む日を、つくろう。」 (make a day off from meat). The name puns on kome (rice) and daizu (soy), with the box □ for whatever the guest feels. The famous morning service is plant-based: toast with soy-milk spread, red-bean paste or sesame confit. In 2026 the coffee comes with oat, almond or soy milk, and the menu includes rice-and-wheat pancakes such as the salted one or fruit for ¥1,380, soy-meat burgers, soy-meat Bolognese, a soy-ham-katsu hot sandwich, an amazake smoothie and a coffee float. The bright, quiet room seats 68 and is popular for working. Expect a queue on weekends; you can take a number via LINE.",
    chef_bio: {
      chef_name: null, roles: ['new format of 株式会社コメダ (Komeda Coffee)'],
      origin: 'Opened July 2020 (Ginza Shōchiku Square 1F)',
      background: "Komeda Coffee created it as part of its sustainability work; it remained the brand's only plant-based shop as of January 2026.",
      philosophy: '「地球とくつろぐ喫茶店」 — a café for relaxing with the planet; 「お肉を休む日を、つくろう。」',
      specialty: 'Plant-based morning service; rice-flour pancakes; soy-meat burgers.',
      anecdotes: [
        { text: '店名の「コメダイズ」は、メニューの主原料であるコメ、大豆を表現するとともに、空欄の「□」には同店で過ごす時間でお客が感じる思いを込めた — the name explained at opening.', source: NS },
        { text: 'A September 2026 diner took a while to notice that everything was plant-based: "It seems like a great place to bring vegan friends."', source: R + 'B535926633/' },
      ],
      japanese_sources_summary: '日本食糧新聞(2020.8): コメダが植物由来100%メニューの新業態「KOMEDA is □(コメダイズ)」東銀座店をオープン、「地球とくつろぐ喫茶店」「お肉を休む日を、つくろう。」、モーニングに塗る豆乳クリーム、国産米粉100%のパンケーキ(当時)、米粉入りバンズと大豆ミートのバーガー、夜はビオワインと動物由来原料不使用のビール。さんたつ(2026.1): 全国1,140店舗のコメダで1店舗だけのプラントベース、ぬる豆乳のトースト、コメパンケーキ もっちりフルーツ1,380円(国産米粉と小麦粉のブレンド)、大豆パテのバーガー、大豆ミートのボロネーゼ、soyハムカツホットサンド。食べログ: 毎日7:00〜22:00、68席、アレルギー表示あり、ヴィーガン対応。',
      confidence: 'high', sources: [NS, ST, TB, R + 'B535926633/', R + 'B537216072/', R + 'B537546273/'],
    },
    cultural_comfort: { level: 'english', note: 'A large, bright café with counter and booth seating, power outlets and Wi-Fi; take a queue number via LINE at peak times. All payment types.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Pancakes blend domestic rice flour with wheat flour (2026); toast, buns and sandwiches are bread.', source: ST }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Tabelog lists "Allergy information available".', source: TB }],
      positives: [{ text: 'A 100% plant-derived menu (植物由来100%メニュー).', source: NS }],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0045 東京都中央区築地1-13-1 銀座松竹スクエア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Featured January 2026; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区築地一丁目13番1号 (go) 29m; OSM node 8088339156 「KOMEDA is □」 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, NS, R + 'B537216072/', R + 'B537546273/', R + 'B536109320/'],
    price_note: 'Prices from the January 2026 san-tatsu feature; other dishes from September–October 2026 reviews. Everything on the menu is plant-based.', last_checked: TODAY, items: [
      it('コメダブレンド', 'komeda burendo', 'Komeda Blend coffee (morning: comes with toast)', '¥700', 'Drinks', 'ask', 'vegan', 'Toast is wheat bread.', 'komeda_blend'),
      it('トーストと豆乳クリームチーズ', 'toosuto to tounyuu kuriimu chiizu', 'Toast with soy-milk cream cheese', '', 'Morning', 'no', 'vegan', '', 'toast_soy_cream_cheese'),
      it('コメパンケーキ もっちりフルーツ', 'kome pankeeki mocchiri furuutsu', 'Rice pancake with fruit (rice and wheat flour)', '¥1,380', 'Sweets', 'no', 'vegan', 'Contains wheat flour (2026).', 'rice_pancake_fruit'),
      it('', '', 'Shio (salted) pancakes', '', 'Sweets', 'no', 'vegan', 'Same rice-and-wheat batter. October 2026.', 'shio_pancake'),
      it('', '', 'Soy-patty burger', '', 'Mains', 'no', 'vegan', 'Bun contains rice flour (2020); assume wheat.', 'soy_burger'),
      it('大豆ミートのボロネーゼ', 'daizu miito no boroneeze', 'Soy-meat Bolognese', '', 'Mains', 'no', 'vegan', '', 'soy_bolognese'),
      it('soyハムカツホットサンド', 'soi hamukatsu hotto sando', 'Soy-ham katsu hot sandwich', '', 'Mains', 'no', 'vegan', '', 'soy_hamkatsu_sandwich'),
      it('', '', 'Strawberry amazake smoothie', '', 'Drinks', 'ask', 'vegan', 'September 2026.', 'amazake_smoothie'),
      it('', '', 'Coffee float (plant-based soft serve)', '', 'Drinks', 'ask', 'vegan', '', 'coffee_float'),
      it('', '', 'Oat / almond milk coffee', '', 'Drinks', 'ask', 'vegan', 'Oat milk may not be gluten-free.', 'plant_milk_coffee'),
    ] }, {
    cuisine: 'プラントベースの喫茶店(コメダ珈琲)・モーニング・米粉パンケーキ・大豆ミートのバーガー',
    neighborhood: '築地一丁目、歌舞伎座近くの銀座松竹スクエア1F。東銀座駅5番出口から徒歩1分',
    gf_detail: 'グルテンフリーのメニューは書かれていません。コメと大豆を軸にした店で、2020年のパンケーキは国産米粉100%でしたが、2026年1月時点では国産米粉と小麦粉のブレンドです。トースト、バーガーのバンズ、ホットサンド、パスタは小麦が基本で、バンズは2020年に「米粉入り」とされただけで小麦不使用とはされていません。食べログにはアレルギー表示ありとあるので、小麦を含まない品があるか店で確認してください。',
    vegan_detail: '完全プラントベース。コメダ珈琲店で唯一のプラントベース店で、植物由来100%のメニュー。モーニングのトーストにはバターの代わりにぬる豆乳、パンケーキには豆乳ホイップと豆乳バター、大豆ミートのバーガーやボロネーゼ、コーヒーのミルクはオーツ・アーモンド・豆乳から。2020年の時点で夜のお酒はビオワインと動物由来原料を使わないビールでした。',
    notes: '[完全ヴィーガン・コメダのプラントベース喫茶] 全国1,140店舗超のコメダ珈琲店が2020年7月に開いた、ここだけのプラントベース店。合言葉は「お肉を休む日を、つくろう。」。店名はコメと大豆、「□」には客がここで感じる思いを込めたといいます。名物のモーニングもプラントベースで、トーストにぬる豆乳や小倉あん、ごまコンフィ。2026年はコーヒーのミルクをオーツ・アーモンド・豆乳から選べ、米粉と小麦粉のパンケーキ(塩やフルーツ、もっちりフルーツ1,380円)、大豆パテのバーガー、大豆ミートのボロネーゼ、soyハムカツホットサンド、甘酒スムージー、コーヒーフロートなど。明るく静かな68席で、作業する人にも人気。週末は行列ができ、LINEで順番待ちができます。',
  });
}

save();
