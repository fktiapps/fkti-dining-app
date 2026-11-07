// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 56.
//   + 京の居酒屋 ぽんと Kyo no Izakaya Ponto (casual izakaya at the south end of Pontocho with a summer river deck)
//   + 大當両 Daitoryo (yuba kaiseki on Pontocho over the Kamo)
//   + とりとん Toriton (Kyoto Akadori chicken and Kyoto pork izakaya down a Pontocho alley)
//   + 京都伏見蔵 先斗町 南庵 Kyoto Fushimi Gura Pontocho Minami-an (duck dishes and Fushimi sake)
//   - だるま商店 京都木屋町, ラッキーシーバー, HIGUMA Doughnuts: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26003450, 26044670 (skipped),
//   26035442 (skipped), 26042792 (skipped), 26000708, 26042768 (TEA WAVE — left for a later batch), 26025332;
//   26039366 (とりとん, 259 m) drafted ahead of the chains between (但馬屋, 呼炉凪来, C.STAND — next batch).
//   None of the four drafted is in data/kyoto.json by name (ぽんと/Ponto, 大當両/Daitoryo, とりとん/Toriton, 南庵/Minami-an)
//   or address (鍋屋町232-13, 鍋屋町232-8, 鍋屋町209-5, 鍋屋町212-2).
//   Same-name count (same brand or operator only): one shop each in our crawl and in Tabelog's name search. 南庵: invoice
//   holder 有限会社シーアンドディー (Kyoto, NTA register), size not established — flagged.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 大當両 サービス料10％（5月～9月は13％）; 南庵 サービス料10％込み;
//   とりとん 付きだし500円(税込); ぽんと “Charge fee: 400 yen” in the shop's remarks (no Japanese original shown).
//   Other-diner remarks (Greg 2026-11-06): ぽんと — several 2025–2026 reviews say most customers were overseas visitors;
//   summarised and attributed. Single-review remarks elsewhere left out.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044670', 'だるま商店 京都木屋町: chain — Tabelog’s name search lists Daruma Shoten shops at Gifu Station, Shinsekai, Namba and elsewhere');
skip('26035442', 'ラッキーシーバー: too thin to verify — one review (April 2026); the listing’s own remarks tie it to a sister bar (“Barland”)');
skip('26042792', 'HIGUMA Doughnuts: chain — Tabelog’s name search lists HIGUMA Doughnuts at Tokyo Dome City, Gakugei-daigaku (honten), Sapporo Okuba, Fuji-Q Highland and more');

// ================================================================ 京の居酒屋 ぽんと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003450/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_kyo_no_izakaya_ponto', name: '京の居酒屋 ぽんと (Kyo no Izakaya Ponto)', category: 'OMNI',
    lat: 35.004372, lng: 135.771132, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya plates — nama-fu (wheat gluten) tempura and grilled nama-fu, yakitori and tsukune with sauce, karaage, croquettes, somen; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu salad and grilled nama-fu appear, but sauces and dashi are not described (2026 reviews).',
    hours_raw: '16:00–22:00 daily; hours may change (Tabelog). Charge ¥400 (Tabelog remarks). On the summer river deck (noryo-yuka), courses only, and lunch there is ¥2,500 with one drink (Tabelog remarks); the deck needs a reservation with a mini course and has a time limit (July and August 2026). QR payments only — no cards or e-money (Tabelog). 32 seats (Tabelog). At the south entrance of Pontocho, 2 min from Keihan Gion-Shijo or Hankyu Kawaramachi (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho south entrance — 2 min from Gion-Shijo / Kawaramachi',
    cuisine: 'A casual, reasonably priced izakaya with a summer deck over the Kamo (2025–2026 reviews) · nama-fu tempura and grilled nama-fu, the staff’s recommendation (July–August 2026) · yakitori and tsukune cooked on a teppan, with sauce (July and September 2026) · tofu salad, beef-kimchi somen, karaage, pumpkin croquettes (July 2026) · no sashimi or raw fish on the menu (July 2026)',
    website: null, gmaps: gm('京の居酒屋 ぽんと 先斗町'), menu_url: null,
    notes: '[Izakaya · Pontocho, an affordable river deck] A lively izakaya at the south end of Pontocho run by young staff, with one of the cheaper summer decks over the Kamo: nama-fu tempura, teppan yakitori, tofu salad and karaage, and a mini course on the deck. Several reviewers found the food ordinary but the riverside seat worth it. ¥400 charge; QR payment only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe young, friendly staff (July and September 2026) and a wall of celebrity autographs (July 2026). Several 2025–2026 reviewers say most of the customers were overseas visitors (July 2025, July, September and October 2026). Two July and October 2026 reviewers found the food ordinary for the price, while others enjoyed the nama-fu and fried dishes.',
      philosophy: null, specialty: 'Nama-fu tempura; the river deck.',
      anecdotes: [
        { text: 'An August 2026 pair dropped in on a busy holiday on a whim and still got a table outside.', source: R + 'B533735400/' },
        { text: 'An August 2026 diner liked it enough to recommend it to visitors from abroad on the way out.', source: R + 'B534332467/' },
      ],
      japanese_sources_summary: '食べログ: 京の居酒屋 ぽんと、居酒屋、中京区先斗町四条上ル鍋屋町232-13、京阪祇園四条駅・阪急河原町駅から徒歩2分、16:00〜22:00、チャージ400円 (備考)、納涼床はコースのみ、床の昼は1ドリンク付き2,500円、QR決済のみ、32席。口コミ (2025〜2026年、英語): 先斗町の入口、鴨川の床が手頃、生麩の天ぷらと焼き生麩、鉄板で焼く焼き鳥とつくね、豆腐サラダ、牛キムチそうめん、唐揚げ、かぼちゃのコロッケ、刺身はない、若い店員、海外からの客が多い、料理は値段なりという声も。',
      confidence: 'medium', sources: [TB, R + 'B509849171/', R + 'B531790372/', R + 'B531968875/', R + 'B532334552/', R + 'B533429190/', R + 'B533735400/', R + 'B534332467/', R + 'B534746022/', R + 'B536552547/', R + 'B536868280/'] },
    cultural_comfort: { level: 'english', note: 'Popular with overseas visitors (2025–2026 reviews); QR payment only; ¥400 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル鍋屋町232-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004372, 135.771132); cross-checked: GSI 京都府京都市中京区鍋屋町232番地 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the deck lunch and charge are published.', last_checked: TODAY, items: [
      it('', '', 'Deck lunch with one drink (summer)', '¥2,500', 'Deck', 'ask', 'ask', 'Tabelog remarks.', 'deck_lunch'),
      it('', '', 'Nama-fu tempura', '', 'À la carte', 'no', 'ask', '2026.', 'namafu'),
      it('', '', 'Charge', '¥400', 'Charges', '', '', 'Tabelog remarks.', 'charge'),
    ] }, {
    cuisine: '鴨川の床のある手頃な値段の気軽な居酒屋 (2025〜2026年の口コミ)・店員おすすめの生麩の天ぷらと焼き生麩 (2026年7〜8月)・鉄板で焼くたれの焼き鳥とつくね (2026年7月・9月)・豆腐サラダ、牛キムチそうめん、唐揚げ、かぼちゃのコロッケ (2026年7月)・刺身や生魚はない (2026年7月)',
    neighborhood: '先斗町の南の入口。祇園四条・河原町から徒歩2分',
    gf_detail: '要確認。生麩の天ぷらや焼き生麩、たれの焼き鳥とつくね、唐揚げ、コロッケ、そうめんなどの居酒屋料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。豆腐サラダや焼き生麩もあるが、たれや出汁については書かれていない (2026年の口コミ)。',
    notes: '[居酒屋・先斗町、手頃な川床] 先斗町の南の端、若い店員のにぎやかな居酒屋で、鴨川の夏の床が比較的手頃。生麩の天ぷら、鉄板の焼き鳥、豆腐サラダ、唐揚げ、床ではミニコース。料理は普通という声もあるが川沿いの席は価値あり。チャージ400円、支払いはQR決済のみ。',
  });
}

// ================================================================ 大當両
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000708/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://daitoryo.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_daitoryo_pontocho', name: '大當両 (Daitoryo)', category: 'OMNI',
    lat: 35.004691, lng: 135.771195, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yuba kaiseki — hassun, clear soup, yuba hot pot, sashimi, grilled eel with yuba, fried yuba, eggplant dengaku; no gluten information (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the yuba courses are built on dashi and include eel and fish (reviews).',
    hours_raw: '17:00–22:00 (L.O. food 20:30); closed Wednesday (Tabelog). Service charge 10%, 13% from May to September (Tabelog, original サービス料10％（5月～9月は13％）). Cards (Tabelog). 30 seats over two floors; private rooms for 6, 8 and 10–20; a summer deck over the Kamo (Tabelog; reviews). Children under 9: give ages and numbers when booking, and the restaurant may not always be able to accept children; from 9, adult meals; no diaper-changing facilities (Tabelog). On Pontocho, about 3 min from Hankyu Kawaramachi or Keihan Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho north of Shijo — over the Kamo',
    cuisine: 'Yuba and tofu kaiseki in a Pontocho house over the Kamo River, with a summer deck (Tabelog; reviews) · yuba course of hassun, clear soup, yuba hot pot, grilled eel with yuba and a vinegared dish (April 2026) · courses with soy-milk hot pot, grilled ayu, eggplant dengaku, fried yuba (2023) · yuba course from about ¥8,000 (September 2024) · hamo course in summer by reservation a day ahead (2023)',
    website: SITE, gmaps: gm('大當両 先斗町'), menu_url: SITE,
    notes: '[Yuba kaiseki · Pontocho over the Kamo] A Pontocho house serving yuba and tofu kaiseki — clear soups, a yuba hot pot in white dashi, grilled eel with yuba — in rooms and, in summer, on a deck above the Kamo. 10% service (13% May–September); children under 9 by arrangement; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a long-standing Pontocho restaurant for yuba kaiseki with river views and private rooms; only one review falls in 2025–2026 (April 2026).',
      philosophy: null, specialty: 'Yuba kaiseki; yuba hot pot.',
      anecdotes: [
        { text: 'An April 2026 guest called the river-view seat and the yuba course a cherished memory.', source: R + 'B526593656/' },
      ],
      japanese_sources_summary: '食べログ: 大當両、日本料理・豆腐料理・鍋、中京区先斗町通四条上ル鍋屋町232-8、阪急河原町駅・京阪祇園四条駅から徒歩3分、17:00〜22:00 (L.O.料理20:30)、水曜定休、サービス料10% (5〜9月は13%)、カード可、30席 (1階2人席4、2階2〜4人席5)、個室あり、9歳未満の子どもは予約時に人数と年齢を、9歳以上は大人の料理。口コミ (2023〜2026年、英語): 湯葉の会席、八寸、お吸い物、湯葉鍋、鰻と湯葉の焼き物、酢の物、豆乳鍋、鮎の塩焼き、賀茂なすの田楽、湯葉のコース8,000円ほど (2024年9月)、夏の床、鱧のコースは前日までに予約。',
      confidence: 'low', sources: [SITE, TB, R + 'B470152671/', R + 'B470334271/', R + 'B492037740/', R + 'B499565394/', R + 'B526593656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Service charge 10–13%; children under 9 by arrangement.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町232-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review April 2026.' },
    pin_source: `Tabelog ${TB} (35.004691, 135.771195); cross-checked: GSI 京都府京都市中京区鍋屋町232番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492037740/', R + 'B526593656/'],
    price_note: 'One course price from a September 2024 review; service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Yuba course', 'about ¥8,000', 'Courses', 'ask', 'no', 'September 2024.', 'yuba_course'),
      it('', '', 'Yuba hot pot (in the course)', '', 'Courses', 'ask', 'no', 'April 2026.', 'yuba_nabe'),
    ] }, {
    cuisine: '鴨川に面した先斗町の家で湯葉と豆腐の会席、夏は床も (食べログ、口コミ)・八寸、お吸い物、湯葉鍋、鰻と湯葉の焼き物、酢の物の湯葉のコース (2026年4月)・豆乳鍋、鮎の塩焼き、賀茂なすの田楽、湯葉の揚げ物のコース (2023年)・湯葉のコースは8,000円ほどから (2024年9月)・夏の鱧のコースは前日までに予約 (2023年)',
    neighborhood: '四条の北の先斗町。鴨川に面して',
    gf_detail: '要確認。八寸、お吸い物、湯葉鍋、刺身、鰻と湯葉の焼き物、湯葉の揚げ物、田楽の湯葉会席。グルテンの情報はない (口コミ)。',
    vegan_detail: 'ヴィーガンではない。湯葉のコースは出汁が基本で、鰻や魚も入る (口コミ)。',
    notes: '[湯葉会席・鴨川に面した先斗町] 先斗町の家で湯葉と豆腐の会席を。お吸い物、白い出汁の湯葉鍋、鰻と湯葉の焼き物を座敷で、夏は鴨川の床で。サービス料10% (5〜9月は13%)、9歳未満の子どもは要相談、水曜定休。',
  });
}

// ================================================================ とりとん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039366/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_toriton_pontocho', name: 'とりとん (Toriton)', category: 'OMNI',
    lat: 35.005228, lng: 135.770815, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken and pork izakaya dishes — chicken tataki, rare chicken-breast katsu, karaage, tsukune, white dashimaki, obanzai, TKG; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kyoto Akadori chicken and Kyoto pork izakaya; the dashimaki is made with dashi (Tabelog; reviews).',
    hours_raw: '17:00–24:00 (L.O. 23:00); days off vary (Tabelog). Reservations accepted (Tabelog). Tsukidashi ¥500 including tax (Tabelog, original 付きだし500円(税込)頂戴しております。). Happy hour until 19:00 with all drinks ¥400 (June 2026). Cards (Tabelog). 22 seats — counter, tables and a fully private room for up to 10, all with sunken kotatsu seating; shoes off (Tabelog; February 2026). Bring your own cake for celebrations; the restaurant will keep it chilled (Tabelog). Down Pontocho alley no. 21, 3 min from Hankyu Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho alley no. 21 — 3 min from Hankyu Kawaramachi',
    cuisine: 'A small izakaya for Kyoto pork and Kyoto Akadori chicken with fine sake (Tabelog) · white dashimaki of pearl eggs, the signature (Tabelog; 2024–2026) · chicken tataki, half breast and half thigh; rare chicken-breast katsu; chicken sashimi and yukhoe; egg-yolk rice (June 2026) · karaage, tsukune, chicken wings, pork-shabu salad, grilled pork (2024–2026) · obanzai, miso soup and tamago kake gohan (2024–2025); nikujaga (August 2026) · vegetables from partner farms (Tabelog)',
    website: null, gmaps: gm('とりとん 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: '[Chicken izakaya · Pontocho back alley, white dashimaki] A cosy townhouse izakaya down a narrow Pontocho alley, all sunken-kotatsu seats: Kyoto Akadori chicken as tataki, rare katsu and tsukune, a fluffy white dashimaki, obanzai and TKG, with ¥400 drinks until 19:00. ¥500 tsukidashi; shoes off.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes Kyoto pork and Kyo Akadori chicken, a course with white-dashi tamagoyaki of pearl eggs, and vegetables from partner farms. An August 2026 reviewer quotes the owner’s thank-you note on the wall to guests who chose Toriton among Kyoto’s many restaurants.',
      philosophy: null, specialty: 'White dashimaki; chicken tataki.',
      anecdotes: [
        { text: 'A February 2026 visitor slipped off shoes for the kotatsu counter and found a consommé cabbage roll as the tsukidashi.', source: R + 'B523373555/' },
        { text: 'A June 2026 guest made the most of happy hour, when every drink was ¥400 until 19:00.', source: R + 'B529766242/' },
      ],
      japanese_sources_summary: '食べログ: とりとん、居酒屋、中京区鍋屋町209-5 先斗町通り21番路地、阪急京都河原町駅から徒歩3分、17:00〜24:00 (L.O.23:00)、不定休、付きだし500円 (税込)、カード可、22席 (カウンター、テーブル、完全個室、全席掘りごたつ)、個室は10名まで、京都ポークと京赤地どり、パールエッグの白だし玉子焼き、契約農家の野菜、ケーキの持ち込み可。口コミ (2024〜2026年、英語): むね・ももの半々のたたき、レアのむねカツ、鶏刺し、ユッケ、卵黄ご飯、唐揚げ、つくね、手羽先、豚しゃぶサラダ、おばんざい、卵かけご飯、肉じゃが、19時までのハッピーアワーはドリンク400円、店主の感謝のことば。',
      confidence: 'medium', sources: [TB, R + 'B490424930/', R + 'B492384152/', R + 'B495582438/', R + 'B513341778/', R + 'B523373555/', R + 'B529766242/', R + 'B529953202/', R + 'B533046311/', R + 'B535226603/', R + 'B538775473/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; sunken kotatsu seats; ¥500 tsukidashi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町209-5 先斗町通り21番路地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005228, 135.770815); cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B529766242/'],
    price_note: 'Charge from Tabelog; happy-hour price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'White dashimaki (pearl eggs)', '', 'Signature', 'ask', 'no', 'Tabelog; reviews.', 'dashimaki'),
      it('', '', 'Chicken tataki, breast and thigh', '', 'Chicken', 'ask', 'no', 'June 2026.', 'tataki'),
      it('', '', 'Happy-hour drinks (until 19:00)', '¥400', 'Drinks', '', '', 'June 2026.', 'happy_hour'),
      it('', '', 'Tsukidashi', '¥500', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都ポークと京赤地どりと日本酒の小さな居酒屋 (食べログ)・名物はパールエッグの白だし巻き (食べログ、2024〜2026年)・むねとももの半々のたたき、レアのむねカツ、鶏刺しとユッケ、卵黄ご飯 (2026年6月)・唐揚げ、つくね、手羽先、豚しゃぶサラダ、豚の焼き物 (2024〜2026年)・おばんざい、味噌汁、卵かけご飯 (2024〜2025年)。肉じゃが (2026年8月)・契約農家の野菜 (食べログ)',
    neighborhood: '先斗町21番路地。阪急河原町から徒歩3分',
    gf_detail: '要確認。鶏のたたき、レアのむねカツ、唐揚げ、つくね、白だし巻き、おばんざい、卵かけご飯などの鶏と豚の居酒屋料理。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。京赤地どりと京都ポークの居酒屋で、だし巻きは出汁を使う (食べログ、口コミ)。',
    notes: '[鶏の居酒屋・先斗町の路地、白だし巻き] 先斗町の細い路地の奥、全席掘りごたつの居心地のよい町家の居酒屋。京赤地どりのたたき、レアのカツ、つくね、ふわふわの白だし巻き、おばんざい、卵かけご飯。19時まではドリンク400円。付きだし500円、靴を脱いで上がる。',
  });
}

// ================================================================ 京都伏見蔵 先斗町 南庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025332/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['16:30', '22:30']);
  put({
    id: 'kyoto_fushimigura_minamian', name: '京都伏見蔵 先斗町 南庵 (Kyoto Fushimi Gura Pontocho Minami-an)', category: 'OMNI',
    lat: 35.00489, lng: 135.77105, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck dishes in Japanese, Western and Chinese styles — duck hot pot, dobin-mushi, menchi, yukhoe, spring rolls, mini tantanmen — plus tempura and fish; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a duck-and-fish restaurant (Tabelog; reviews).',
    hours_raw: 'Lunch 12:00–15:00 (L.O. 14:30); dinner 16:30–22:30 (L.O. 22:00); open daily (Tabelog). Reservations accepted — for à la carte, book seats only rather than a course (Tabelog). Service charge 10% included in prices (Tabelog, original サービス料10％込み). Cards, Edy, iD and QR payments (Tabelog). 52 seats: a counter downstairs and private rooms upstairs (Tabelog; February 2026). On Pontocho, about 3 min from Hankyu Kawaramachi; lanterns mark the house (Tabelog; February 2026). Opened 20 March 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho north of Shijo — 3 min from Hankyu Kawaramachi',
    cuisine: 'Duck in Japanese, Western and Chinese styles, seasonal fish and Fushimi sake (Tabelog) · lunch Gin Shari gozen with house rice of Fushimi Hinohikari from ¥2,420 (Tabelog) · Kyoto duck hot pot course with free-flow drinks ¥7,260; Kyoto duck and fish course of 7 dishes ¥6,600 (Tabelog) · duck dobin-mushi, Kyoto duck with Kujo onion, duck menchi, yuba-and-cheese rolls (October 2025) · duck yukhoe, mini tantanmen, duck and summer-vegetable spring rolls (August 2026) · corn tempura (May 2025) · a long list of Fushimi sake, also in the free-flow plans (2025–2026)',
    website: null, gmaps: gm('京都伏見蔵 先斗町 南庵'), menu_url: TB + 'dtlmenu/',
    notes: '[Duck and sake · Pontocho, Fushimi sake] A lantern-lit Pontocho house with a counter downstairs and private rooms above, cooking duck every which way — hot pot, dobin-mushi, menchi, yukhoe — with seasonal fish and a long list of Fushimi sake, including free-flow course plans from ¥6,600. Lunch from ¥2,420; service included.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T7130002023987 is registered to 有限会社シーアンドディー, Kyoto (NTA register); how many restaurants it runs could not be established. Reviewers mention pleasant staff in the dining room (October 2025).',
      philosophy: null, specialty: 'Kyoto duck hot pot; Fushimi sake.',
      anecdotes: [
        { text: 'A March 2025 group warmed up on a chilly night with the duck hot pot and worked through the free-flow sake list.', source: R + 'B502592299/' },
        { text: 'An October 2025 party celebrated an old student-days senior’s retirement here.', source: R + 'B515609220/' },
      ],
      japanese_sources_summary: '食べログ: 京都伏見蔵 先斗町 南庵、居酒屋・日本料理・日本酒バー、中京区鍋屋町212-2、阪急河原町駅から徒歩3分、昼12:00〜15:00 (L.O.14:30)、夜16:30〜22:30 (L.O.22:00)、予約可 (アラカルトは席のみ予約)、サービス料10%込み、カード・電子マネー・QR決済可、52席、個室あり、2015年3月20日オープン、和洋中の鴨料理と旬の魚と伏見の地酒、伏見米ヒノヒカリの銀シャリ御膳2,420円から、京鴨鍋の飲み放題コース7,260円、京鴨と鮮魚のコース7品6,600円、適格請求書 T7130002023987 (有限会社シーアンドディー)。口コミ (2025〜2026年、英語): 鴨の土瓶蒸し、京鴨と九条ねぎ、鴨メンチ、湯葉チーズ巻き、鴨ユッケ、ミニ担々麺、鴨と夏野菜の春巻き、とうもろこしの天ぷら、伏見の酒の飲み放題、1階はカウンター、2階は個室。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130002023987', R + 'B502592299/', R + 'B508271425/', R + 'B515609220/', R + 'B515725025/', R + 'B519866300/', R + 'B522528571/', R + 'B525438781/', R + 'B533360927/', R + 'B533795288/', R + 'B534082671/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Service included; private rooms upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町212-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.00494, 135.77105), offset about 5.5 m south to (35.00489, 135.77105) because 柚子元 京都先斗町店 (kyoto_yuzugen_pontocho) sits within 1 m; cross-checked: GSI 京都府京都市中京区鍋屋町212番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course and lunch prices from Tabelog, tax included.', last_checked: TODAY, items: [
      it('', '', 'Gin Shari lunch gozen', 'from ¥2,420', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch'),
      it('', '', 'Kyoto duck hot pot course with free-flow drinks', '¥7,260', 'Courses', 'ask', 'no', 'Tabelog.', 'duck_nabe'),
      it('', '', 'Kyoto duck and fresh fish course (7 dishes)', '¥6,600', 'Courses', 'ask', 'no', 'Tabelog.', 'duck_fish'),
    ] }, {
    cuisine: '和洋中の鴨料理、旬の魚、伏見の地酒 (食べログ)・伏見米ヒノヒカリの自家製ご飯の銀シャリ御膳は昼2,420円から (食べログ)・飲み放題付きの京鴨鍋のコース7,260円。京鴨と鮮魚の7品のコース6,600円 (食べログ)・鴨の土瓶蒸し、京鴨と九条ねぎ、鴨メンチ、湯葉とチーズの巻き物 (2025年10月)・鴨ユッケ、ミニ担々麺、鴨と夏野菜の春巻き (2026年8月)・とうもろこしの天ぷら (2025年5月)・飲み放題にも入る伏見の酒の豊富な品ぞろえ (2025〜2026年)',
    neighborhood: '四条の北の先斗町。阪急河原町から徒歩3分',
    gf_detail: '要確認。鴨鍋、土瓶蒸し、メンチ、ユッケ、春巻き、ミニ担々麺などの和洋中の鴨料理、天ぷらや魚も。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鴨と魚の店 (食べログ、口コミ)。',
    notes: '[鴨と日本酒・先斗町、伏見の地酒] 提灯の目印の先斗町の家。1階はカウンター、2階は個室で、鍋、土瓶蒸し、メンチ、ユッケとあらゆる鴨料理を旬の魚とともに、伏見の酒をたっぷり。飲み放題付きのコースは6,600円から、昼は2,420円から。サービス料込み。',
  });
}

save();
