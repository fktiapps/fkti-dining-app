// Osaka sweep (2-mile circle around Dotonbori), batch 26 — vegan/GF via the Tabelog listing flag, keeping
// listings whose reviews or official site show real vegan/GF evidence.
//   + Spys Oasis (yakuzen spice curry, "completely gluten-free" by its own site; a vegan curry line) — GF options, queue high
//   + Old Cairo Cafe (Egyptian: koshari, falafel, hummus; Tabelog vegan/halal flags) — vegan limited
//   + Crêperie Alcyon (Tabelog Sweets WEST 100 2023 & 2026; galettes and crêpes) — vegan ask, GF ask
//   + GREEN BAR 心斎橋店 (Urban Research smoothie-and-crêpe stand) — vegan ask
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 26);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ Spys Oasis
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134553/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://spys-oasis.com/';
  const wk = day(['11:30', '15:00'], ['18:00', '23:59']), su = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_spys_oasis_namba', name: '薬膳スパイスカレー＆グルテンフリーバル Spys Oasis', category: 'GF',
    lat: 34.667494, lng: 135.501902, cuisine_type: 'curry',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop describes itself as serving gluten-free food and drinks, and explains on its site that it does not use gluten (「グルテンは使わないんです」). Tabelog\'s introduction says "completely gluten-free dishes and drinks", and a September 2026 reviewer reports "all products are 100% gluten-free", with no dairy or white sugar. Gluten-free drinks are served even at the bar, for example a GF Red Eye. Tabelog notes allergy information is available. The shop\'s stated reason is health rather than celiac safety, and no cross-contact controls are described, so confirm if you are celiac.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'A separate vegan-and-gluten-free curry line on the official menu: root-vegetable curry, soy-mince and red-pepper salsa curry, and a pumpkin, banana, mango, corn and chickpea curry (¥1,700 each, ¥1,800 for two, ¥1,900 for three), with vegan toppings. The house three-curry set contains chicken, pork and mackerel, and the soup is made with chicken.',
    hours_raw: 'Mon–Wed, Fri–Sat: lunch 11:30–15:00, bar 18:00–24:00 (one-drink minimum); Sun and holidays 11:30–15:00 and 17:00–22:00; closed Thursdays; changes on social media (official site). Online booking only, no phone reservations (official site).',
    hours: { 0: wk, 1: wk, 2: wk, 3: [], 4: wk, 5: wk, 6: su }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-5-8, a few minutes south of Dotonbori',
    cuisine: 'Yakuzen (medicinal-herb) spice curry, gluten-free · three-curry "san-mi ittai" set: soy-milk tomato chicken, black-sesame red-miso pork-hijiki keema, mackerel and lotus-root green curry ¥1,600–3,880 · vegan curry line ¥1,700–1,900 · basmati and 15-grain rice · roast chicken leg ¥1,280 · GF bar drinks and natural wine · 14 seats',
    website: OWN, gmaps: gm('Spys Oasis 難波'), menu_url: OWN,
    notes: '[Curry · gluten-free yakuzen spice curry by Dotonbori] A 14-seat curry café and evening bar run on a "food as medicine" concept by a yakuzen (medicinal-cooking) specialist. Everything is gluten-free by the shop\'s own account. The signature is three curries to mix: a soy-milk, onion, tomato and ginger chicken-breast curry; a black-sesame and red-miso pork-and-hijiki keema; and a mackerel and lotus-root "green Popeye" curry. Each is tangy and spiced, and they come together into one flavour when mixed. They sit over basmati and 15-grain rice (Simple ¥1,600; Standard ¥2,000 with soup, salad and toppings). A separate vegan line covers root-vegetable, soy-mince salsa and tropical chickpea curries. At night it becomes a bar with GF drinks, natural wine and tapas. English menu; book online.',
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 February 2023 (Tabelog)', background: 'Official site: yakuzen spice curry made by a yakuzen meister (薬膳マイスター), on the principle 医食同源 ("food and medicine share one source").', philosophy: '「医食同源のコンセプトの元、栄養価はもちろん、身体に優しい食材を厳選」 (official site).', specialty: 'Gluten-free yakuzen spice curry.',
      anecdotes: [
        { text: '「スパイスオアシスは、薬膳マイスターが作る薬膳スパイスカレーとグルテンフリーのドリンクとフードが楽しめるお店です」 (official site).', source: OWN },
        { text: '"All products are 100% gluten-free, with no dairy, white sugar, or chemical seasonings and additives." — September 2026.', source: R + 'B536345792/' },
      ],
      japanese_sources_summary: '公式(spys-oasis.com): スパイスオアシス、〒542-0076 大阪市中央区難波1-5-8、06-6211-5115、薬膳マイスターの薬膳スパイスカレーとグルテンフリーのドリンクとフード、医食同源、三味一体(黄: 豆乳オニトマ生姜鶏胸肉、黒: 黒ゴマ赤ミソ豚ひじキーマ、緑: 鯖と蓮根グリーンポパイ)、低糖質・低GLのバスマティライスと15穀米、シンプル1,600円・スタンダード2,000円・ゴージャス3,180円・ラグジュアリー3,880円、ヴィーガン&グルテンフリーカレー(根菜、ソイミンチと赤パプリカのサルサ、かぼちゃ・バナナ・マンゴー・コーン・ひよこ豆、各1,700円、2種1,800円、3種1,900円)、トッピング各200円、ローストチキンレッグ1,280円、「グルテンは使わないんです」、月火水金土ランチ11:30〜15:00・バル18:00〜24:00(ワンドリンク制)、日祝11:30〜15:00・17:00〜22:00、木曜定休、電話予約不可・ネット予約。食べログ: 14席(1階カウンター7、2階テーブル7)、アレルギー情報あり、ヴィーガン・グルテンフリーメニューあり、2023年2月4日開店。',
      confidence: 'high', sources: [OWN, TB, R + 'B536345792/', R + 'B513107017/', R + 'B504197464/', R + 'B508210710/'] },
    cultural_comfort: { level: 'english', note: 'English menu; popular with overseas visitors (April 2025).' },
    safety: { ...SAFETY0, confidence: 'medium',
      positives: [
        { text: 'Own statement: gluten-free drinks and food; 「グルテンは使わないんです」 (official site).', source: OWN },
        { text: 'Tabelog: allergy information available; vegan and gluten-free options.', source: TB },
      ] },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0076 大阪府大阪市中央区難波1-5-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated August 2026; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [OWN],
    price_note: 'From the official site menu (2026). GF per the shop\'s statement that it does not use gluten.', last_checked: TODAY, items: [
      it('三味一体 シンプル', '', 'Three-curry yakuzen set, Simple', '¥1,600', 'Curry', 'gf', 'no', 'Chicken, pork and mackerel curries.', 'simple'),
      it('三味一体 スタンダード', '', 'Three-curry set, Standard (2 toppings, yakuzen soup, mini salad)', '¥2,000', 'Curry', 'gf', 'no', 'Soup made with chicken.', 'standard'),
      it('ザ・ルーツ', '', 'Vegan GF root-vegetable curry', '¥1,700', 'Vegan curry', 'gf', 'vegan', 'Official menu.', 'roots'),
      it('マジシャンズ・レッド', '', 'Vegan GF soy-mince and red-pepper salsa curry', '¥1,700', 'Vegan curry', 'gf', 'vegan', 'Official menu.', 'magicians_red'),
      it('ゴールド・エクスペリエンス', '', 'Vegan GF pumpkin, banana, mango, corn and chickpea curry', '¥1,700', 'Vegan curry', 'gf', 'vegan', 'Official menu.', 'gold_experience'),
      it('結束', '', 'Three vegan curries', '¥1,900', 'Vegan curry', 'gf', 'vegan', 'Official menu.', 'kessoku'),
      it('', '', 'Roast chicken leg', '¥1,280', 'Mains', 'gf', 'no', 'Official menu.', 'chicken_leg'),
    ] }, {
    cuisine: 'グルテンフリーの薬膳スパイスカレー・三味一体(豆乳オニトマ生姜鶏胸肉、黒ゴマ赤ミソ豚ひじキーマ、鯖と蓮根グリーンポパイ)1,600〜3,880円・ヴィーガンカレー1,700〜1,900円・バスマティライスと15穀米・ローストチキンレッグ1,280円・グルテンフリーのバルのドリンクとナチュールワイン・14席',
    neighborhood: '難波1-5-8、道頓堀から南へ数分',
    gf_detail: '店はグルテンフリーのドリンクとフードの店で、サイトで「グルテンは使わないんです」と説明しています。食べログの紹介にも「完全グルテンフリーの料理とドリンク」とあり、2026年9月の口コミでは「すべて100％グルテンフリー」で乳製品や白砂糖も使わないとのこと。バルでもグルテンフリーのレッドアイなどを出しています。食べログにはアレルギー情報ありとの記載。理由は健康のためで、セリアック病向けのコンタミ対策は書かれていないので、セリアック病の人は確認を。',
    vegan_detail: '公式メニューにヴィーガン&グルテンフリーのカレーが別にあります。根菜、ソイミンチと赤パプリカのサルサ、かぼちゃ・バナナ・マンゴー・コーン・ひよこ豆(各1,700円、2種1,800円、3種1,900円)、ヴィーガンのトッピングも。看板の三味一体には鶏、豚、鯖が入り、スープも鶏を使います。',
    notes: '[カレー・道頓堀近くのグルテンフリー薬膳スパイスカレー] 「医食同源」をコンセプトに薬膳マイスターが作る、14席のカレーカフェ兼夜のバル。店によるとすべてグルテンフリー。看板は3種を混ぜて食べる三味一体で、豆乳、玉ねぎ、トマト、生姜の鶏胸肉カレー、黒ゴマと赤味噌の豚ひじきキーマ、鯖と蓮根の「グリーンポパイ」。それぞれ酸味とスパイスが効き、混ぜると一つの味に。バスマティライスと15穀米で(シンプル1,600円、スープ・サラダ・トッピング付きのスタンダード2,000円)。根菜、ソイミンチのサルサ、南国のひよこ豆のヴィーガンカレーも別にあります。夜はグルテンフリーのドリンク、ナチュールワイン、タパスのバルに。英語メニュー、予約はネットで。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [OWN, TB, R + 'B536345792/'],
    why: "Own claim (spys-oasis.com): 「グルテンフリーのドリンクとフードが楽しめるお店」 and 「グルテンは使わないんです」; Tabelog introduction 'completely gluten-free dishes and drinks'; Tabelog allergy information available. Independent first-hand corroboration: a September 2026 reviewer reports 'All products are 100% gluten-free'; GF drinks at the bar. 'high' rather than 'dedicated': the stated motive is wellness, not celiac safety; no cross-contact procedures or ingredient-level checks (red miso, soy sauce in tapas) are described; no FMGF/celiac reviews captured. Ask: are miso, soy sauce and all drink bases (e.g. beer in the Red Eye) gluten-free?",
  });
}

// ================================================================ Old Cairo Cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122690/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_old_cairo_cafe', name: 'Old Cairo Cafe', category: 'OMNI',
    lat: 34.670264, lng: 135.499711, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Koshari contains macaroni and hummus comes with pita, but rice plates and grilled skewers may suit; nothing is described as gluten-free.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'Tabelog lists vegan, vegetarian and halal options. The Egyptian menu includes koshari (rice, macaroni and lentils with tomato sauce and fried onion), ta\'ameya falafel, hummus with pita and molokhia soup. None is described as vegan in reviews, so ask about ghee, stock and dairy.',
    hours_raw: 'Daily 12:00–17:00 (L.O. 16:30) and 18:00–1:00 (L.O. 0:30), but opening days, closures and private events are posted on Instagram; one reviewer found it closed several times (September 2026). QR payment only. Lunch non-smoking; dinner smoking allowed (shisha) (Tabelog).',
    hours: ALL(day(['12:00', '17:00'], ['18:00', '01:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-3-21, Yoshimoto Bldg 3F — Amerikamura',
    cuisine: 'Egyptian café and shisha bar · koshari · ta\'ameya (falafel) · hummus with pita · garlicky molokhia soup · shish tawook chicken plate ~¥1,600–1,800 · kahk and baklava · hibiscus juice, mint tea · shisha ¥2,200 · halal options · dance-show events',
    website: null, gmaps: gm('Old Cairo Cafe 西心斎橋'), menu_url: null,
    notes: "[Middle Eastern · an Egyptian café and shisha bar in Amemura] A moody, Egyptian-styled café on the 3rd floor of a building in Amerikamura that serves lunch and runs as a shisha bar at night, with occasional dance shows. Staff explain the dishes and share stories about Egypt. Order koshari, the national dish of rice, macaroni and lentils in tomato sauce under crisp fried onions, with garlic vinegar and chili oil to season. There's also ta'ameya (Egyptian falafel), hummus with pita, a rich, garlicky molokhia soup, and shish tawook chicken plates (about ¥1,600–1,800). Finish with baklava or kahk and hibiscus juice or mint tea. Tabelog lists vegan, vegetarian and halal options. Opening days vary, so check Instagram or book. On event nights, food can take an hour.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 August 2020 (Tabelog)', background: 'An Egyptian restaurant and shisha café; operating days announced on Instagram (Tabelog remarks). No source names the operator.', philosophy: null, specialty: 'Koshari; Egyptian home cooking.',
      anecdotes: [
        { text: '"I ordered koshari, Egypt\'s national dish… It consists of rice, macaroni, and lentils topped with tomato sauce. The generous amount of crispy fried onions added a delightful crunch." — September 2026.', source: R + 'B535444786/' },
        { text: '"We ordered: Koshari, Hummus with Pita Bread, Molokhia Soup, Ta\'ameya Falafel, Kahk, Baklava, Hibiscus Juice… The staff carefully explained each dish and shared interesting facts about Egypt." — August 2026.', source: R + 'B534643195/' },
      ],
      japanese_sources_summary: '食べログ: Old Cairo Cafe、大阪市中央区西心斎橋2-3-21 吉本ビル3F、30席、毎日12:00〜17:00(L.O.16:30)・18:00〜翌1:00(L.O.0:30)、営業日や貸切はInstagramで告知、カード・電子マネー不可、QR決済可、昼は禁煙(バルコニーに喫煙所)・夜は喫煙可、こだわり: 野菜・健康・ヴィーガン・ベジタリアン・ハラールメニュー、2020年8月23日開店。2024〜2026年の口コミ: エジプトの雰囲気のシーシャカフェ、シシタウク約1,600円、チキンプレート1,800円、シーシャ2,200円、コシャリ、ダンスショーで提供が遅れた日、ライス付きのランチプレート、万博グルメの雑誌で知った、モロヘイヤスープ、ターメイヤ(ファラフェル)、フムスとピタ、カハク、バクラヴァ、ハイビスカスジュース、何度か行っても閉まっていた、予約して夜に、ガーリックビネガーとチリオイル、ミントティー。',
      confidence: 'medium', sources: [TB, R + 'B535444786/', R + 'B534643195/', R + 'B492958076/', R + 'B531570309/', R + 'B536952109/'] },
    cultural_comfort: { level: 'english', note: 'Staff explain the Egyptian dishes (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-3-21 吉本ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目3番21号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492958076/', R + 'B534643195/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Koshari', '', 'Mains', 'no', 'ask', 'September 2026.', 'koshari'),
      it('', '', 'Ta\'ameya (Egyptian falafel)', '', 'Mains', 'ask', 'ask', 'August 2026.', 'taameya'),
      it('', '', 'Hummus with pita', '', 'Mezze', 'no', 'ask', 'August 2026.', 'hummus'),
      it('', '', 'Molokhia soup', '', 'Soups', 'ask', 'ask', 'August 2026.', 'molokhia'),
      it('', '', 'Shish tawook chicken plate', '¥1,600', 'Mains', 'ask', 'no', 'September 2026 (about).', 'shish_tawook'),
      it('', '', 'Shisha', '¥2,200', 'Shisha', 'ask', 'ask', 'September 2024.', 'shisha'),
    ] }, {
    cuisine: 'エジプト料理のカフェとシーシャバー・コシャリ・ターメイヤ(ファラフェル)・フムスとピタ・にんにくの効いたモロヘイヤスープ・シシタウクのチキンプレート約1,600〜1,800円・カハクとバクラヴァ・ハイビスカスジュース、ミントティー・シーシャ2,200円・ハラール対応・ダンスショーのイベント',
    neighborhood: '西心斎橋2-3-21 吉本ビル3F、アメリカ村',
    gf_detail: '要確認。コシャリにはマカロニ、フムスにはピタが付きますが、ライスプレートや串焼きは合うかもしれません。グルテンフリーと書かれた料理はありません。',
    vegan_detail: '食べログにはヴィーガン、ベジタリアン、ハラールメニューありとあります。エジプト料理にはコシャリ(米、マカロニ、レンズ豆にトマトソースと揚げ玉ねぎ)、ターメイヤ(ファラフェル)、ピタ付きのフムス、モロヘイヤスープなど。口コミでヴィーガンと書かれた料理はないので、ギー、スープの素、乳製品を確認して。',
    notes: '[中東料理・アメ村のエジプト料理とシーシャ] アメリカ村のビル3階にある、エジプト風のムードある店で、昼はランチ、夜はシーシャバー、ダンスショーの日も。スタッフが料理を説明し、エジプトの話もしてくれます。注文するならエジプトの国民食コシャリで、米、マカロニ、レンズ豆にトマトソース、たっぷりのカリカリの揚げ玉ねぎ、ガーリックビネガーとチリオイルで味を調えて。ターメイヤ(エジプトのファラフェル)、ピタ付きのフムス、にんにくの効いた濃厚なモロヘイヤスープ、シシタウクのチキンプレート(約1,600〜1,800円)も。締めはバクラヴァやカハクにハイビスカスジュースかミントティー。食べログにはヴィーガン、ベジタリアン、ハラールメニューありとあります。営業日が変わるのでInstagramで確認か予約を。イベントの夜は料理に1時間かかることも。',
  });
}

// ================================================================ クレープリー・アルション
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27003897/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_creperie_alcyon_namba', name: 'クレープリー・アルション (Crêperie Alcyon)', category: 'OMNI',
    lat: 34.667418, lng: 135.502265, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Savoury galettes are traditionally buckwheat, but no source says these are 100% buckwheat or wheat-free; the sweet crêpes use French wheat flour (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options", but crêpes and galettes use Échiré butter, eggs and cheese; no vegetarian dish is described.',
    hours_raw: 'Mon–Fri 11:30–21:30; Sat, Sun and holidays 11:00–21:30; L.O. 20:30. Lunch 11:30–15:00 (weekends 11:00–17:00), café and takeout to 20:30 (Tabelog). Cash only. No reservations for more than four. Steep stairs.',
    hours: { 0: day(['11:30', '21:30']), 1: day(['11:30', '21:30']), 2: day(['11:30', '21:30']), 3: day(['11:30', '21:30']), 4: day(['11:30', '21:30']), 5: day(['11:00', '21:30']), 6: day(['11:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 1-4-18, just south of Dotonbori — takeout window downstairs',
    cuisine: 'Tabelog Sweets WEST 100 (2023, 2026) · crisp-edged, chewy French crêpes with Échiré butter and sugar · daily galettes (beef stew, tandoori chicken) · crêperie lunch ¥2,200 · milk-jam crêpe set ¥1,480 · quiche · Mont Blanc · takeout queue · 50 seats · cash only',
    website: null, gmaps: gm('クレープリー・アルション 難波'), menu_url: null,
    notes: "[Sweets · Namba's famous crêpes and galettes] A 50-seat French crêperie up steep stairs just south of Dotonbori, named to Tabelog's Sweets WEST \"100\" in 2023 and 2026, with a takeout line downstairs. The crêpes, made with French flour, Échiré butter and salt, are crisp at the edge and chewy inside. The plain Échiré butter and sugar is the one regulars call the best they've had. At lunch, try a daily galette from the blackboard, say beef stew over mashed potato and cheese, or tandoori chicken, in the crêperie lunch (¥2,200, October 2026). There's also a milk-jam crêpe set with vanilla gelato (¥1,480), quiche and Mont Blanc. The takeout queue is about 10 minutes. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba 1-chōme (Tabelog)', background: 'Selected for Tabelog Sweets WEST "100" 2023 and 2026; Tabelog introduction: French flour, Échiré butter and salt.', philosophy: null, specialty: 'Crêpes and galettes.',
      anecdotes: [
        { text: '"Both were perfectly crispy and fragrant, and the batter itself was outstanding! The galette had beef stew underneath, with mashed potatoes and cheese hidden between the layers." — October 2026, crêperie lunch ¥2,200, cash only.', source: R + 'B537651226/' },
        { text: '"I had a crepe with Échiré butter and sugar. The takeout line took about 10 minutes… The outside was crispy while the inside was chewy and moist." — October 2026.', source: R + 'B522724945/' },
      ],
      japanese_sources_summary: '食べログ: クレープリー・アルション、大阪市中央区難波1-4-18、50席(5名以上の予約不可)、月〜金11:30〜21:30、土日祝11:00〜21:30、L.O.20:30、ランチ11:30〜15:00(土日祝11:00〜17:00)、カフェ・テイクアウトは20:30まで、カード・電子マネー・QR決済不可、禁煙、こだわり: 野菜・健康・ベジタリアンメニュー、食べログ スイーツ WEST 百名店2023・2026、フランス産小麦粉・エシレバター・塩。2025〜2026年の口コミ: アボカドと焼き豚のキッシュ、ミルクジャムのクレープセット1,480円、本日の前菜770円、エシレバターと砂糖のクレープ、テイクアウトは約10分待ち、外はパリッと中はもちもち、さつまいものクレームブリュレ、クレープリーランチ2,200円(黒板の本日のガレット、ビーフシチューとマッシュポテトとチーズ)、現金のみ、サラダセット、急な階段、タンドリーチキンのガレット、モンブラン。',
      confidence: 'medium', sources: [TB, R + 'B537651226/', R + 'B522724945/', R + 'B451259392/', R + 'B537855559/', R + 'B538107116/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; steep stairs; takeout window.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-4-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目4番18号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537651226/', R + 'B451259392/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Crêperie lunch (daily galette + crêpe)', '¥2,200', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch'),
      it('', '', 'Échiré butter and sugar crêpe', '', 'Crêpes', 'no', 'no', 'October 2026.', 'beurre_sucre'),
      it('', '', 'Milk-jam crêpe set (vanilla gelato, kirsch cream)', '¥1,480', 'Crêpes', 'no', 'no', 'October 2026.', 'milk_jam'),
      it('', '', 'Today\'s appetizer', '¥770', 'Starters', 'ask', 'ask', 'October 2026.', 'appetizer'),
      it('', '', 'Quiche (avocado and roast pork)', '', 'Savoury', 'no', 'no', 'October 2026.', 'quiche'),
    ] }, {
    cuisine: '食べログ スイーツ WEST 百名店(2023・2026)・エシレバターと砂糖のパリッともちもちのフランスのクレープ・本日のガレット(ビーフシチュー、タンドリーチキン)・クレープリーランチ2,200円・ミルクジャムのクレープセット1,480円・キッシュ・モンブラン・テイクアウトの列・50席・現金のみ',
    neighborhood: '難波1-4-18、道頓堀のすぐ南。1階にテイクアウトの窓口',
    gf_detail: '要確認。塩味のガレットは伝統的にそば粉ですが、ここのものがそば粉100％か小麦不使用かは書かれていません。甘いクレープはフランス産小麦粉(食べログ)。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とありますが、クレープやガレットにはエシレバター、卵、チーズを使い、ベジタリアンの料理は書かれていません。',
    notes: '[スイーツ・なんばの名店のクレープとガレット] 道頓堀のすぐ南、急な階段を上がった50席のフレンチのクレープリーで、食べログ スイーツ WEST 百名店に2023年と2026年に選出、下ではテイクアウトの列。フランス産小麦粉、エシレバター、塩のクレープは縁がパリッと中はもちもち。シンプルなエシレバターと砂糖が「今までで一番」という常連も。ランチは黒板の本日のガレットを、たとえばマッシュポテトとチーズの上にビーフシチュー、タンドリーチキンなど、クレープリーランチ(2,200円、2026年10月)で。バニラジェラートのミルクジャムのクレープセット(1,480円)、キッシュ、モンブランも。テイクアウトは約10分待ち。現金のみ。',
  });
}

// ================================================================ GREEN BAR 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27083075/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_green_bar_shinsaibashi', name: 'GREEN BAR 心斎橋店', category: 'OMNI',
    lat: 34.67077, lng: 135.501088, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Smoothies may suit, but crêpes and bagels are wheat-based and nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options". The green smoothie is komatsuna, apple and banana (May 2024), but milk and yoghurt bases are not ruled out.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:30), closed only on 1 January (Tabelog). Order at the kiosk; small eat-in space next door. Cards, e-money and QR accepted.',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-7-4, next to an Urban Research store on the shopping arcade',
    cuisine: 'Fresh smoothies (green komatsuna-apple-banana, seasonal peach) · matcha crêpe with shiratama ¥700 · café latte, hojicha latte · bagels · takeaway kiosk with a small eat-in space',
    website: null, gmaps: gm('GREEN BAR 心斎橋店'), menu_url: null,
    notes: "[Café · a healthy smoothie stand on Shinsaibashi-suji] A small café stand run by the apparel brand Urban Research, beside its store on the Shinsaibashi-suji arcade, with a tucked-away eat-in corner and a terrace. Smoothies are made to order from fresh vegetables and fruit, like the smooth green komatsuna, apple and banana, or a seasonal peach. There are also matcha crêpes with shiratama (¥700), lattes and bagels for a light bite. Service at the kiosk can be brisk when it's busy with overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 November 2014 (Tabelog)', background: 'Operated by the apparel company Urban Research (November 2023 review).', philosophy: null, specialty: 'Fresh smoothies.',
      anecdotes: [
        { text: '"I found a \'Green Smoothie\' made with komatsuna (Japanese mustard spinach), apple, and banana… It was pleasantly smooth without any gritty texture." — May 2024.', source: R + 'B485560319/' },
        { text: '"They mainly offer smoothies made with fresh vegetables and fruits… They also have light snacks like bagels." — April 2026.', source: R + 'B527168780/' },
      ],
      japanese_sources_summary: '食べログ: GREEN BAR 心斎橋店、大阪市中央区心斎橋筋2-7-4、20席、毎日11:00〜21:00(L.O.20:30)、1月1日のみ休み、禁煙、カード・電子マネー・QR決済可、こだわり: 野菜・健康・ベジタリアンメニュー、2014年11月14日開店。2023〜2026年の口コミ: アーバンリサーチが運営、抹茶クレープ700円(白玉)、カフェラテ、ほうじ茶ラテ、小松菜・りんご・バナナのグリーンスムージー、季節の桃のスムージー、1人で営業で待つことも、隠れ家のようなイートイン、レジの接客がそっけないとの声、新鮮な野菜と果物のスムージー、ベーグル、店内は狭く持ち帰り向き。',
      confidence: 'low', sources: [TB, R + 'B485560319/', R + 'B527168780/', R + 'B476562794/', R + 'B508879049/'] },
    cultural_comfort: { level: 'english', note: 'Kiosk ordering; busy with overseas shoppers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番4号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476562794/', R + 'B485560319/'],
    price_note: 'One price from a November 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Green smoothie (komatsuna, apple, banana)', '', 'Smoothies', 'gf', 'ask', 'May 2024.', 'green_smoothie'),
      it('', '', 'Matcha crêpe with shiratama', '¥700', 'Crêpes', 'no', 'ask', 'November 2023.', 'matcha_crepe'),
      it('', '', 'Bagels', '', 'Bakery', 'no', 'ask', 'April 2026.', 'bagel'),
    ] }, {
    cuisine: '作りたてのスムージー(小松菜・りんご・バナナのグリーン、季節の桃)・白玉の抹茶クレープ700円・カフェラテ、ほうじ茶ラテ・ベーグル・持ち帰りの窓口と小さなイートイン',
    neighborhood: '心斎橋筋2-7-4、心斎橋筋商店街のアーバンリサーチの隣',
    gf_detail: '要確認。スムージーは合うかもしれませんが、クレープやベーグルは小麦で、グルテンフリーと書かれたものはありません。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあります。グリーンスムージーは小松菜、りんご、バナナ(2024年5月)ですが、牛乳やヨーグルトを使うかは不明です。',
    notes: '[カフェ・心斎橋筋のヘルシーなスムージースタンド] アパレルのアーバンリサーチが運営する小さなカフェスタンドで、心斎橋筋商店街の店の隣、隠れ家のようなイートインとテラスも。スムージーは新鮮な野菜と果物で注文ごとに作り、なめらかな小松菜・りんご・バナナのグリーンや季節の桃など。白玉の抹茶クレープ(700円)、ラテ、軽く食べられるベーグルも。海外からの客で混むと窓口の接客はそっけないことも。',
  });
}

save();
