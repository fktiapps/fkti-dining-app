// Kyoto priority (kyoto-missed), worker osw13, batch 130 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: IMO, Cafe NINIROOM, CantaCanta, Basis Kyoto. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; CantaCanta is run by the owners of fudo, which is in data — different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-130');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26033832', 'temporarily closed: プレマルシェ・オルタナティブ・ダイナー — Tabelog marks it "Temporarily closed", and the newest review is June 2025. Note for the coordinator: reviews (2021–2025) describe a vegan, vegetarian, halal and gluten-free-labelled menu (soy-meat burgers, a rice-flour vegan carrot cake) from the Premarché organic group behind vm_premarche_gelateria_kyot — worth re-checking if it reopens');
skip('26035626', 'big-chain hotel (Greg 11-08 ruling): 御宿 野乃 京都七条 is a Nono hotel of the Dormy Inn group (Kyoritsu Maintenance)');
skip('26026992', 'chain: どんぐり 四条大宮店 — one of the Kyoto okonomiyaki chain どんぐり (five+ shops; same call as 26002363 and 26021995)');

// ================================================================ IMO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023602/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']), S = day(['18:00', '21:00']);
  put({
    id: 'kyoto_imo_shichijo', name: 'IMO', category: 'OMNI',
    lat: 34.98902, lng: 135.763003, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizza bar — build-your-own pizzas, pasta, kara-age and tapas (2015–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese pizzas, cured meats, duck pastrami and seafood ajillo (2015–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat and public holidays 18:00–23:00 (food L.O. 22:00, drinks 22:30); Sun 18:00–21:00 (L.O. 20:00); closures on Instagram. Reservations taken (phone after 17:00). Charge 「330円」 (¥330 per person, Tabelog Japanese original). Cash only: no cards, e-money or QR codes. SMOKING ALLOWED (Tabelog). 30 seats including a counter. On Shichijo-dori between Kyoto Station and Keihan Shichijo, about 7 min from either.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shichijo-dori between Kyoto Station and Keihan Shichijo',
    cuisine: 'A casual pizzeria-bar known for build-your-own pizzas and cheap drinks near Kyoto Station (Tabelog; 2015–2026 reviews) · build-your-own "one-coin" pizza: choose a sauce (tomato, white, basil), a main and two side toppings, ¥500 before tax (2015–2019) · mushroom pizza with truffle sauce ¥880; green olives ¥330; duck pastrami with black pepper ¥330; Jim Beam highball ¥418 (January 2026) · prosciutto and salami platter; tapas; ajillo; tomato and basil salad; a few pastas (2015) · all-you-can-eat-and-drink plans (2017)',
    website: null, gmaps: gm('IMO 七条 ピザ'), menu_url: null,
    notes: '[Pizza bar · Shichijo near Kyoto Station, build-your-own pizza] A small, cheap and cheerful bar where you pick the sauce and toppings for a one-person pizza, with olives, cured meats and highballs from about ¥400. ¥330 charge. About ¥1,500–3,000. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers since 2015 describe a friendly manager chatting with counter regulars and staff who happily recommend toppings (2015–2019). Criticisms: average food and a frozen-tasting kara-age (November 2016), and the "one-coin" pizza being priced before tax (2015). Most reviews are older; the newest are April 2025 and January 2026.',
      philosophy: null,
      specialty: 'Build-your-own pizza.',
      anecdotes: [
        { text: 'January 2026: "I started with a Jim Beam Highball for JPY 418 and some olives for JPY 330… Finally, I had the mushroom pizza with truffle sauce for JPY 880. It was loaded with toppings."', source: R + 'B520115615/' },
        { text: 'August 2015: "For just 500 yen, you can choose a sauce (tomato/white/basil), one main topping (meat/shrimp, etc.), and two side toppings (onion/mushroom, etc.)."', source: R + 'B141026684/' },
        { text: 'November 2016: "The pizza was mediocre, costing JPY 500, so I guess that\'s about what to expect."', source: R + 'B230253331/' },
      ],
      japanese_sources_summary: '食べログ: IMO、イタリアン・ピザ・バル、下京区七条通間之町東入材木町483 第二マスイビル1F、京都駅・京阪七条から徒歩7分、月〜土・祝日18:00〜23:00 (料理L.O.22:00)、日18:00〜21:00、休みはInstagram、予約可 (電話は17時以降)、チャージ「330円」、30席、喫煙可、カード・電子マネー・QR不可。口コミ (2015年3月〜2026年1月、英語): ソース (トマト・白・バジル) とトッピングを選ぶワンコインピザ500円 (税抜)、トリュフソースのきのこのピザ880円、オリーブ330円、鴨のパストラミ330円、ハイボール418円 (2026年1月)、生ハムとサラミ、タパス、アヒージョ、食べ飲み放題 (2017年)、味は普通との声も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B141026684', 'B141409883', 'B230253331', 'B482482384', 'B505843860', 'B520115615', 'B90473362'])) },
    cultural_comfort: { level: 'friendly', note: 'Casual counter bar; cash only; smoking allowed; ¥330 charge.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通間之町東入材木町483 第二マスイビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April 2025 and January 2026.' },
    pin_source: `Tabelog ${TB} (34.98902, 135.763003); GSI lot 京都府京都市下京区材木町483番地 about 27m away; nearest pin kyoto_aotake_shichijo 8.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520115615/', R + 'B141026684/'],
    price_note: 'Prices from January 2026 (tax incl.) and 2015 (pizza, before tax); ¥330 charge.', last_checked: TODAY, items: [
      it('', '', 'Build-your-own pizza', '¥500 (before tax, 2015)', 'Pizza', 'no', 'no', '2015–2019.', 'one_coin_pizza'),
      it('', '', 'Mushroom pizza with truffle sauce', '¥880', 'Pizza', 'no', 'no', 'January 2026.', 'truffle_pizza'),
      it('', '', 'Duck pastrami', '¥330', 'Tapas', 'ask', 'no', 'January 2026.', 'duck_pastrami'),
      it('', '', 'Green olives', '¥330', 'Tapas', 'ask', 'ask', 'January 2026.', 'olives'),
    ] }, {
    cuisine: '京都駅近くの、自分で組み立てるピザと手頃な飲み物の気軽なピザバル (食べログ、2015〜2026年の口コミ)・ソース (トマト、白、バジル)、メイン1種とサブ2種のトッピングを選ぶ「ワンコイン」ピザ、税抜500円 (2015〜2019年)・トリュフソースのきのこのピザ880円、グリーンオリーブ330円、黒こしょうの鴨のパストラミ330円、ジムビームのハイボール418円 (2026年1月)・生ハムとサラミの盛り合わせ、タパス、アヒージョ、トマトとバジルのサラダ、パスタ数種 (2015年)・食べ放題・飲み放題 (2017年)',
    neighborhood: '七条通、京都駅と京阪七条の間',
    gf_detail: 'グルテンフリーではない: 自分で組み立てるピザ、パスタ、唐揚げ、タパスのピザバル (2015〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: チーズのピザ、生ハム・サラミ、鴨のパストラミ、魚介のアヒージョ (2015〜2026年の口コミ)。',
    notes: '[ピザバル・京都駅近くの七条、自分で選ぶピザ] ソースとトッピングを選んで1人用のピザを作れる、手頃で気さくな小さなバル。オリーブや生ハム、ハイボールは400円ほどから。チャージ330円。1,500〜3,000円ほど。現金のみ。喫煙可。',
  });
}

// ================================================================ Cafe NINIROOM
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031234/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_cafe_niniroom', name: 'Cafe NINIROOM', category: 'OMNI',
    lat: 35.018045, lng: 135.775133, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The keema curries (spicy, and a Koya-tofu version) come with rice and salad, but no gluten information is given; breakfast is toast and the set lunch changes weekly (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask — promising. Reviewers describe a vegan keema curry (March 2026) and a vegan-friendly Koya-tofu keema curry (2024–2025); the set lunches use chicken, fish and dairy.',
    hours_raw: 'Tabelog: daily 8:00–17:00 (L.O. 16:00): breakfast 8:00–11:30, lunch and sweets 11:30–16:00; open year-round. Reservations taken. Pay at the counter first (February 2026). 22 seats; non-smoking (smoking area outside the front). Cards and PayPay; no e-money. Wi-Fi and power outlets; a monthly baby-friendly day. On the ground floor of HOSTEL NINIROOM, open to non-guests, 4 min from Keihan Jingu-Marutamachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, east of Marutamachi — 4 min from Jingu-Marutamachi',
    cuisine: 'A friendly hostel café in a renovated printing-company building, serving breakfast, a weekly home-style lunch and keema curries, with locals and travellers side by side (Tabelog; 2023–2026 reviews) · weekday "one soup, four dishes" lunch ¥1,200, changing weekly (e.g. kara-age with yurinchi sauce, teriyaki chicken, potato salad, carrot rapé, miso soup) (2024–2026) · spicy keema curry ¥1,000; Koya-tofu keema curry ¥1,000, described as vegan (2024–2026) · breakfast plate ¥800 (June 2025) · cake sets; café latte; coffee +¥200 with lunch · New Year osechi breakfast (January 2023)',
    website: null, gmaps: gm('Cafe NINIROOM 京都'), menu_url: null,
    notes: '[Café · Jingu-Marutamachi, a hostel café with vegan keema] A relaxed, plant-filled café on the ground floor of a hostel: a weekly one-soup-four-dishes lunch for ¥1,200 and spiced keema curries, including a vegan Koya-tofu version, for ¥1,000. Good for laptops. Open daily 8–5.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The café of HOSTEL NINIROOM, in a former printing company\'s office and warehouse with its tiled walls kept (August 2025). Reviewers describe calm, kind staff, local events and a monthly baby-friendly day, and a mix of hostel guests and neighbours (2024–2026). One June 2025 diner found the ¥800 breakfast poor value.',
      philosophy: null,
      specialty: 'Weekly set lunch; keema curries.',
      anecdotes: [
        { text: 'March 2026: "I was drawn to the spicy options and chose the vegan keema curry… I don\'t usually order vegan dishes, but it was delicious."', source: R + 'B524751828/' },
        { text: 'December 2024: "There are three types of lunch menus: 1. One Soup and Four Sides Lunch (JPY 1,200) 2. Spicy Keema Curry (JPY 1,000) 3. Koya Tofu Keema Curry (JPY 1,000)."', source: R + 'B498564658/' },
        { text: 'June 2025: "It included a cold boiled egg, one slice of toast, a small amount of butter, one slice of ham… I think JPY 800 is too expensive for this!"', source: R + 'B508768338/' },
      ],
      japanese_sources_summary: '食べログ: Cafe NINIROOM、カフェ、左京区東丸太町30-3 HOSTEL NINIROOM 1F、京阪神宮丸太町から徒歩4分、毎日8:00〜17:00 (L.O.16:00、モーニング8:00〜11:30、ランチとスイーツ11:30〜16:00)、年中無休、予約可、22席、禁煙 (店の前に喫煙所)、カード・PayPay可、電子マネー不可。口コミ (2023年1月〜2026年10月、英語): ホステルの1階のカフェ、もと印刷会社の事務所と倉庫を改装 (2025年8月)、週替わりの一汁四菜の平日ランチ1,200円、スパイスキーマカレー1,000円、高野豆腐のキーマカレー1,000円 (ヴィーガン)、モーニング800円、ケーキセット、Wi-Fiと電源、月1回の赤ちゃん歓迎の日、宿泊客と地元の人が集う。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B459297906', 'B482493278', 'B498564658', 'B508768338', 'B513427524', 'B513463292', 'B524154203', 'B524751828', 'B538391239'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Hostel café used by overseas guests; pay at the counter; Wi-Fi and outlets.' },
    safety: { ...SAFETY0, positives: ['Vegan keema curry (March 2026 review); Koya-tofu keema described as vegan-friendly (August 2025).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東丸太町30-3 HOSTEL NINIROOM 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.018045, 135.775133); GSI lot 京都府京都市左京区東丸太町30番地 about 75m away; nearest pin kyoto_so_kawahigashi 107.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498564658/', R + 'B524751828/', R + 'B508768338/'],
    price_note: 'Prices from December 2024 – June 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'One soup, four dishes lunch (weekdays)', '¥1,200', 'Lunch', 'no', 'no', 'December 2024; changes weekly.', 'ichiju_yonsai'),
      it('', '', 'Koya-tofu keema curry (vegan)', '¥1,000', 'Curry', 'ask', 'ask', '2024–2026.', 'koya_keema'),
      it('', '', 'Spicy keema curry', '¥1,000', 'Curry', 'ask', 'no', '2024–2026.', 'spice_keema'),
      it('', '', 'Breakfast plate', '¥800', 'Breakfast', 'no', 'no', 'June 2025.', 'breakfast'),
    ] }, {
    cuisine: '印刷会社の建物を改装したホステルの気さくなカフェ。朝食、週替わりの家庭的なランチ、キーマカレー。地元の人と旅行者が隣り合う (食べログ、2023〜2026年の口コミ)・週替わりの平日の一汁四菜ランチ1,200円 (例: ゆうりんちーソースの唐揚げ、照り焼きチキン、ポテトサラダ、キャロットラペ、みそ汁) (2024〜2026年)・スパイスキーマカレー1,000円、ヴィーガンとされる高野豆腐のキーマカレー1,000円 (2024〜2026年)・朝食のプレート800円 (2025年6月)・ケーキセット、カフェラテ、ランチにコーヒー+200円・正月のおせちの朝食 (2023年1月)',
    neighborhood: '聖護院、丸太町の東。神宮丸太町から徒歩4分',
    gf_detail: '要確認: キーマカレー (スパイスと高野豆腐) はご飯とサラダ付きだが、グルテンの情報はない。朝食はトースト、ランチは週替わり (2024〜2026年の口コミ)。',
    vegan_detail: '要確認 (期待できる): 口コミにヴィーガンのキーマカレー (2026年3月) と、ヴィーガン対応の高野豆腐のキーマカレー (2024〜2025年)。定食は鶏、魚、乳製品を使う。',
    notes: '[カフェ・神宮丸太町、ヴィーガンのキーマのあるホステルカフェ] ホステルの1階の、緑のあるくつろげるカフェ。週替わりの一汁四菜のランチ1,200円と、ヴィーガンの高野豆腐のキーマを含むスパイスのキーマカレー1,000円。パソコン作業にも。毎日8〜17時。',
  });
}

// ================================================================ CantaCanta
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044746/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_canta_canta', name: 'CantaCanta', category: 'OMNI',
    lat: 35.017253, lng: 135.760327, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: choux made with durum semolina flour, rusks and canelés (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard made with local eggs, mascarpone and cream fillings (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–17:00; closing days vary. No reservations. Mostly TAKEAWAY: there are no seats, but a standing counter inside to eat at (June–August 2026). Seasonal flavours sell out by midday (June–July 2026). Cards, e-money and QR codes. Non-smoking. Opened April 2026, opposite the Kyoto Imperial Palace grounds, 106 m from Marutamachi Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of the Imperial Palace — 106 m from Marutamachi',
    cuisine: 'A cream-puff shop from the team behind the Italian restaurants fudo and To., with crunchy semolina choux filled to order and flavour-changing syrups in droppers (Tabelog; June–September 2026 reviews) · salted vanilla affogato with a caramel-espresso sauce ¥500 · mango purée with lime mascarpone ¥630 · super matcha with a limoncello sauce · seasonal: peach and Earl Grey with honey-lemon; fig and mascarpone with redcurrant (September 2026) · cream-puff ice, e.g. mascarpone lemon with rosemary syrup (July–August 2026) · lemon-shaped baked canelé; choux rusks · Japanese black tea ¥500; iced café latte ¥500; plum soda',
    website: null, gmaps: gm('CantaCanta シュークリーム 丸太町'), menu_url: null,
    notes: '[Cream puffs · Marutamachi, crunchy choux from an Italian kitchen] A tiny cream-puff stand opposite the palace grounds from the people behind fudo: semolina choux filled to order, each with a dropper of sauce — salted vanilla with espresso, mango-lime, super matcha. ¥500–630. Mostly take-away with a standing counter.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened in April 2026 (June 2026 review) by the owners of the Italian restaurants fudo (in this guide) and To., with recipes supervised by fudo\'s chef (June 2026). The choux uses durum semolina, and the custard eggs from a Kyoto farm (June 2026). Two friendly staff explain the flavours (July 2026); some find the puffs small for the price.',
      philosophy: null,
      specialty: 'Semolina cream puffs with flavour-changing sauces.',
      anecdotes: [
        { text: 'June 2026: "The texture is light yet crunchy, made from a special blend of durum semolina flour. The custard cream inside is made with a local chicken egg from Kyoto."', source: R + 'B532403150/' },
        { text: 'June 2026: "A popular Italian restaurant in Kyoto, run by the owners of [fudo] and [To.], offers delicious cream puffs… There\'s a counter where you can enjoy your treats while standing."', source: R + 'B529831125/' },
        { text: 'June 2026: "As expected from a cream puff specialty shop, the puffs are small and a bit pricey, but they are delicious."', source: R + 'B529503385/' },
      ],
      japanese_sources_summary: '食べログ: CantaCanta、シュークリーム、中京区光り堂町428 丸太町公栄ビル1F、丸太町から106m、毎日11:00〜17:00、不定休、予約不可、カード・電子マネー・QR可、禁煙。口コミ (2026年6〜9月、英語・日本語): 2026年4月開店、「TO.」「fudo」系列のシュークリーム専門店、セモリナ粉のザクザクの生地、京都の地鶏卵のカスタード、スポイトの味変ソース、塩バニラとアフォガード500円、マンゴーとライムマスカルポーネ630円、スーパー抹茶とリモンチェッロ、桃とアールグレイ、いちじくとマスカルポーネ、シューアイス、レモン形の焼きカヌレ、シューのラスク、立って食べられるカウンター、少し高いとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B529503385', 'B529831125', 'B531537411', 'B531673608', 'B531700570', 'B532403150', 'B533337352', 'B533444632', 'B535270951', 'B536172001', 'B537915670'])) },
    cultural_comfort: { level: 'friendly', note: 'Mostly take-away; standing counter; staff explain flavours.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区光り堂町428 丸太町公栄ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened April 2026) with reviews dated June to September 2026.' },
    pin_source: `Tabelog ${TB} (35.017253, 135.760327); GSI matched only the town 京都府京都市中京区光リ堂町 (about 17m), not the lot, so approximate; nearest pin kyoto_horin_marutamachi 50.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532403150/', R + 'B533337352/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salted vanilla affogato cream puff', '¥500', 'Sweets', 'no', 'no', 'June–August 2026.', 'salt_vanilla_puff'),
      it('', '', 'Mango purée and lime mascarpone cream puff', '¥630', 'Sweets', 'no', 'no', 'June 2026.', 'mango_puff'),
      it('', '', 'Super matcha cream puff', '', 'Sweets', 'no', 'no', 'June 2026.', 'matcha_puff'),
      it('', '', 'Iced café latte', '¥500', 'Drink', 'ask', 'no', 'June 2026.', 'iced_latte'),
    ] }, {
    cuisine: 'イタリアンのfudoとTo.のチームのシュークリームの店。注文後にクリームを詰めるザクザクのセモリナのシューと、スポイトの味変ソース (食べログ、2026年6〜9月の口コミ)・キャラメルエスプレッソソースの塩バニラとアフォガード500円・マンゴーのピューレとライムのマスカルポーネ630円・リモンチェッロソースのスーパー抹茶・季節: 桃とアールグレイにはちみつレモン、いちじくとマスカルポーネにレッドカラント (2026年9月)・シューアイス、例えばローズマリーのシロップのマスカルポーネレモン (2026年7〜8月)・レモン形の焼きカヌレ、シューのラスク・和紅茶500円、アイスカフェラテ500円、梅ソーダ',
    neighborhood: '御所の南。丸太町から106m',
    gf_detail: 'グルテンフリーではない: デュラムセモリナ粉のシュー、ラスク、カヌレ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 地元の卵のカスタード、マスカルポーネやクリームのフィリング (2026年の口コミ)。',
    notes: '[シュークリーム・丸太町、イタリアンの厨房のザクザクのシュー] fudoのチームによる、御所の向かいの小さなシュークリームの店。注文後に詰めるセモリナのシューに、塩バニラとエスプレッソ、マンゴーとライム、スーパー抹茶など、スポイトのソースを添えて。500〜630円。ほとんど持ち帰りで、立って食べるカウンターあり。',
  });
}

// ================================================================ Basis Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042622/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_basis_kyoto', name: 'Basis Kyoto', category: 'OMNI',
    lat: 34.988855, lng: 135.762594, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Courses are seafood-led with pasta and fried dishes among them (2025–2026 reviews); the chef handled one diner\'s many dislikes without hesitation (August 2026), but gluten is not mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on shellfish, fish, roe, horse meat and venison (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:30–22:00 (L.O. 21:30); closed Wednesday. Reservations only. Lunch by reservation at least two days ahead, one group per day. Courses: Basis Kyoto course ¥7,700; chef\'s special ¥12,000 (also ¥8,800 and ¥12,800 courses in 2026); à la carte possible. Service included (「サービス料込」, Tabelog Japanese original). 6 counter seats; the chef runs it alone (March 2026). Cards; no e-money or QR codes. Opened 20 February 2025. 6 min on foot from Kyoto Station (exit A5, east along Shiokoji, left at Takakura).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura north of Shiokoji — 6 min from Kyoto Station',
    cuisine: 'A six-seat counter where a much-travelled chef cooks genre-crossing courses from rare ingredients gathered across Japan and abroad, with talk about every one (Tabelog; 2025–2026 reviews) · Basis Kyoto course ¥7,700; chef\'s special ¥12,000; 8-dish course ¥12,800 (2025–2026) · sweet shrimp marinated in Shaoxing wine; abalone and top shell; fig with Biwa trout; rock oyster with Kamo eggplant and shellfish jelly; Mikawa eel with Kyoto cucumber; tuna, sea urchin and salmon roe (September 2025) · Caprese with mozzarella shipped from Naples; grouper fried whole; fresh horse meat and venison (2026) · creamy mushroom-cheese pasta; mussel pasta (2025–2026) · wine, much of it Austrian; sake',
    website: null, gmaps: gm('Basis Kyoto 京都駅'), menu_url: null,
    notes: '[Chef\'s counter · near Kyoto Station, six seats and endless stories] A one-chef, six-seat counter by Kyoto Station: course after course of rare seafood, game and pasta mixing French, Chinese and Japanese ideas, with the chef explaining each ingredient. Courses ¥7,700–12,800, service included. Reservations only; one lunch group a day. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; works alone)'], origin: null,
      background: 'Opened 20 February 2025 (February 2026 review). A September 2025 reviewer says the chef spent many years at Chinese restaurants in Shibuya and Ginza; a March 2026 reviewer describes a French-trained owner running the counter alone. Reviewers call him passionate and talkative, explaining ingredients for hours; one evening lasted four and a half hours (January 2026). He accommodated many dislikes for one diner (August 2026).',
      philosophy: 'Seasonal ingredients at their best; guests are encouraged to take the course (September 2025 review).',
      specialty: 'Chef\'s-choice seafood and game courses.',
      anecdotes: [
        { text: 'August 2026: "What I particularly appreciated was the attentive service, especially since I have many dislikes. They handled my requests without any hesitation."', source: R + 'B533800728/' },
        { text: 'March 2026: "With only a counter seating arrangement and the owner managing everything, it\'s a great spot for those who want to enjoy their meal at a leisurely pace."', source: R + 'B523854053/' },
        { text: 'March 2026: "I wish they had a few more reasonably priced drinks."', source: R + 'B524056163/' },
      ],
      japanese_sources_summary: '食べログ: Basis Kyoto、居酒屋、下京区小稲荷町85、京都駅から徒歩6分 (地下街A5出口から塩小路通を東へ、高倉で左)、月・火・木〜日17:30〜22:00 (L.O.21:30)、水曜休み、完全予約制、昼は2日前までの予約で1日1組、コース (Basis Kyotoコース7,700円・シェフの特別コース12,000円)、「サービス料込」、6席 (カウンター)、カード可、電子マネー・QR不可。口コミ (2025年4月〜2026年9月、英語): 2025年2月20日開店、東京の店から来た料理人 (渋谷・銀座の中国料理店で長年、2025年9月)、フレンチ出身の店主がひとりで切り盛り (2026年3月)、紹興酒漬けの甘えび、あわびとつぶ貝、いちじくとビワマス、岩牡蠣とKamoなす、Mikawaの鰻と京きゅうり、まぐろ・うに・いくら、ナポリ直送のモッツァレラ、馬肉と鹿、ムール貝のパスタ、オーストリアのワイン、苦手なものに快く対応 (2026年8月)、お酒の値段が高めとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B515020143', 'B515688052', 'B522166536', 'B523854053', 'B524056163', 'B525323610', 'B528486671', 'B529308408', 'B533800728', 'B535290507'])) },
    cultural_comfort: { level: 'friendly', note: 'Reservations only; long, talk-filled courses; tell the chef your dislikes.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['August 2026 review: the chef adjusted the course for a diner\'s many dislikes without hesitation.'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区小稲荷町85',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened February 2025) with reviews dated September 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.988855, 135.762594); GSI lot 京都府京都市下京区小稲荷町85番地 about 54m away; nearest pin kyoto_kozara_ryori_38_shichijo 27.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B515688052/', R + 'B523854053/'],
    price_note: 'Course prices from Tabelog and 2025–2026 reviews; service included.', last_checked: TODAY, items: [
      it('', '', 'Basis Kyoto course', '¥7,700', 'Course', 'ask', 'no', 'Tabelog; February 2026.', 'basis_course'),
      it('', '', 'Chef\'s special course', '¥12,000', 'Course', 'ask', 'no', 'Tabelog; September 2025.', 'special_course'),
      it('', '', 'Mussel pasta', '', 'Pasta', 'no', 'no', 'September 2025 and September 2026.', 'mussel_pasta'),
    ] }, {
    cuisine: '各地を渡り歩いた料理人が、国内外から集めた珍しい食材でジャンルを越えたコースを作り、ひとつひとつ語る6席のカウンター (食べログ、2025〜2026年の口コミ)・Basis Kyotoコース7,700円、シェフの特別コース12,000円、8品のコース12,800円 (2025〜2026年)・紹興酒漬けの甘えび、あわびとつぶ貝、いちじくとビワマス、岩牡蠣とKamoなすと貝のジュレ、Mikawaの鰻と京きゅうり、まぐろ・うに・いくら (2025年9月)・ナポリ直送のモッツァレラのカプレーゼ、ハタの仲間の丸揚げ、生の馬肉と鹿 (2026年)・きのことチーズのクリームパスタ、ムール貝のパスタ (2025〜2026年)・オーストリアが中心のワイン、日本酒',
    neighborhood: '高倉通、塩小路の北。京都駅から徒歩6分',
    gf_detail: '要確認 (予約時に): 魚介中心のコースにパスタや揚げ物も (2025〜2026年の口コミ)。苦手なものの多い客に快く対応した (2026年8月) が、グルテンの記載はない。',
    vegan_detail: 'ヴィーガン不可: 貝、魚、魚卵、馬肉、鹿のコース (2025〜2026年の口コミ)。',
    notes: '[料理人のカウンター・京都駅近く、6席と尽きない話] 京都駅近くの、料理人ひとりの6席のカウンター。珍しい魚介、ジビエ、パスタを、フレンチ、中華、和の発想で次々と、ひとつひとつの食材の話とともに。コースは7,700〜12,800円、サービス料込み。完全予約制、昼は1日1組。水曜休み。',
  });
}

save();
