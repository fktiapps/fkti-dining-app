// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 78 (2026-11-08).
//   Retail re-check under Greg's 2026-11-07 ruling ("Include particularly historic family owned shops, as well as GF and vegan
//   options"): a take-home food shop is drafted only if (a) particularly historic AND family-owned, with a sourced founding date
//   and family succession, or (b) it offers sourced GF or vegan options — and it has a 2025–26 review.
//   + 御所飴本舗 Gosho Ame Honpo (26014567) — (a): founded 大正元年 (1912) by 中西利一; the current head, 中西康拡, introduces
//     himself as 三代目 on the official site (goshoame.co.jp/?mode=f1, read 2026-11-08). Reviews February and October 2026.
//   + 山利商店 Yamari Shoten (26023555) — (b), vegan: a March 2021 reviewer's product list explains miso as soybeans + koji and
//     flags wheat or egg only in certain blends; a November 2023 reviewer describes the white miso as additive-free rice miso.
//     Review January 2025. GF left at "ask" (no product is stated wheat-free). Flagged for the coordinator as a judgement call.
//   Re-skipped:
//   - 島本海苔 26016547: retail food shop (Greg 11-07 ruling) — founded 昭和10年 (1935) by 島本伝二, president 島本裕次 since 1972
//     (shimamoto.kyoto/concept), but family succession is not stated; no sourced GF/vegan option. Flagged.
//   - 紙谷商店 26023717: retail food shop (Greg 11-07 ruling) — family-run pickle and side-dish shop, no sourced founding date.
//   - ガラムとマサラ 大丸京都店 26044147: large parent — a June 2026 review says it is run by 中部フーズ of the Valor supermarket
//     group; curry bread, opened December 2025; no GF/vegan option.
//   + 鶴清 Tsuruse (料理旅館 with kawadoko, Kiyamachi-Gojo; rest — a ryokan restaurant that takes outside diners)
//   + 中川酒店 木屋町店 Nakagawa Saketen (Okinawan dining bar, Kiyamachi-Oike; rest — two shops with 出町店)
//   Brand check: queue-status.jsonl grepped for 鶴清 and 中川酒店 — none. None of the four drafted is in data (main 97cb475a,
//   hidden records included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26016547/', 'retail food shop (Greg 11-07 ruling): Nishiki nori and dried-goods shop founded 1935 (shimamoto.kyoto); family succession not stated and no sourced GF/vegan option — flagged');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26023717/', 'retail food shop (Greg 11-07 ruling): family-run pickle and side-dish shop with no sourced founding date or GF/vegan option');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26044147/', 'large parent: ガラムとマサラ is run by 中部フーズ of the Valor supermarket group (June 2026 review); a curry-bread counter opened December 2025 with no GF/vegan option');

// ================================================================ 御所飴本舗 Gosho Ame Honpo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014567/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.goshoame.co.jp/'; const HIST = WEB + '?mode=f1';
  const W = day(['11:00', '20:00']); const E = day(['11:00', '21:00']);
  put({
    id: 'kyoto_gosho_ame_honpo', name: '御所飴本舗 (Gosho Ame Honpo)', category: 'OMNI',
    lat: 35.009043, lng: 135.770762, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hard candies are boiled from beet sugar and starch syrup (official site), but flavours vary — e.g. matcha milk; no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The base is beet sugar and syrup with no added flavourings or colourings (official site); some flavours, such as matcha milk, contain dairy.',
    hours_raw: 'Takeaway only — a candy shop with no seating. Monday–Friday 11:00–20:00; Saturday and Sunday 11:00–21:00; hours may change (Tabelog). Cards (JCB, AMEX), e-money and QR (Tabelog). Samples offered; extra candies with purchases over ¥2,000 (October 2026). Reopened in a refurbished shop in March 2024 (March 2024 review). By Sanjo Ohashi on Sanjo-dori, 3 min walk from Keihan Sanjo Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Ohashi, Sanjo-dori',
    cuisine: 'Kyoto candy maker founded in 1912, still boiling candy in copper pots over a kamado (official site) · kiri-ame, ginger, usucha and matcha-milk candies, "zeitaku" candy, yuzu, strawberry, Setouchi lemon, peppermint, sudachi, hojicha, salted shikwasa; mame-heito bean brittle including brown sugar and walnut — small bags ¥500–600, gift boxes of 3 for ¥2,250 or 6 for ¥4,600 (official site; October 2026) · takeaway only',
    website: WEB, gmaps: gm('御所飴本舗 三条'), menu_url: WEB,
    notes: '[Candy shop · Sanjo Ohashi, takeaway only, since 1912] A third-generation family candy maker by Sanjo bridge, boiling light, clean-tasting candies from beet sugar and syrup the old way — ginger, matcha, yuzu, the "zeitaku" candy — with no added flavourings or colourings. Staff hand out samples. No seating.',
    chef_bio: { chef_name: null, roles: ['Third-generation head (named on the official site)'], origin: null,
      background: 'Per the official site: founded in 1912 (Taisho 1) by the founder after training at a confectioner\'s, first under another trading name; closed during the war in 1941 and reopened in 1947; renamed 御所飴本舗 in 1951 with its main shop at the west end of Sanjo Ohashi; candies offered at the memorial rites for the Meiji and Taisho emperors in 1961. The current head, who signs the site, is the third generation of the same family name.',
      philosophy: 'Candy boiled at high heat in the old way, from carefully chosen beet sugar and syrup, light with a clean finish (official site).', specialty: 'Kiri-ame; ginger candy.',
      anecdotes: [
        { text: 'A February 2026 first-time shopper was given samples and careful recommendations, and learned the "zeitaku" candy is made with rice syrup.', source: R + 'B522472521/' },
        { text: 'An October 2026 regular came away with brown-sugar-walnut bean brittle and many extra wrapped candies given with a larger purchase.', source: R + 'B510386278/' },
        { text: 'A March 2024 visitor found the shop newly refurbished and bought ginger candy for ¥518, good for the throat.', source: R + 'B481768580/' },
      ],
      japanese_sources_summary: '公式サイト: 京都の老舗飴屋、香料・着色料不使用、三代目・中西康拡、厳選したてんさい糖と水飴を高温で炊き上げる昔ながらの手法、かまどと銅釜、大正元年に創業者中西利一が小枝屋商店を設立、昭和16年に戦時下で休業、昭和22年に再開、昭和26年に株式会社御所飴本舗を設立し三条大橋西詰に本店、昭和36年に明治天皇・大正天皇の両陛下御懸霊祭に献上、切飴、しょうが飴、薄茶飴、抹茶みるく飴、ぜいたく飴、ゆず飴、豆平糖 (黒糖胡桃) など小袋500〜600円、進物3個2,250円・6個4,600円。食べログ: 和菓子、中京区三条河原町東入ル中島町98、月〜金 11:00〜20:00、土・日 11:00〜21:00、予約不可、カード (JCB・AMEX)・電子マネー・QR 可、禁煙。口コミ (2023年2月〜2026年10月、英語): 試食とていねいな案内、ぜいたく飴は米飴を使う (2026年2月)、2,000円以上でおまけの飴 (2026年10月)、2024年3月に改装して再開。',
      confidence: 'medium', sources: [TB, WEB, HIST, R + 'B461572978/', R + 'B470634865/', R + 'B479504666/', R + 'B481768580/', R + 'B490955952/', R + 'B510386278/', R + 'B522472521/', R + 'B531235944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; samples offered; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条河原町東入ル中島町98',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009043, 135.770707) moved 5.0 m east to (35.009043, 135.770762): the Tabelog point is 3.0 m from kyoto_kyogamo_osoba_riku_sanjo; now 8.0 m from it and 9.1 m from kyoto_osake_no_jinja_sanjo (御所飴ビル 1F); GSI 京都府京都市中京区中島町98番地 (lot) 35 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB],
    price_note: 'Prices from the official online shop (read 2026-11-08), tax included.', last_checked: TODAY, items: [
      it('', '', 'Small bag of candy (e.g. ginger, yuzu, usucha)', '¥500', 'Candy', 'ask', 'ask', 'Official site.', 'small_bag'),
      it('', '', 'Kiri-ame, large bag', '¥900', 'Candy', 'ask', 'ask', 'Official site.', 'kiriame'),
      it('', '', 'Gift box of six', '¥4,600', 'Gifts', 'ask', 'ask', 'Official site.', 'gift6'),
    ] }, {
    cuisine: '1912年創業の京の飴屋で、今もかまどと銅釜で飴を炊く (公式サイト)・切飴、しょうが飴、薄茶飴、抹茶みるく飴、ぜいたく飴、ゆず、いちご、瀬戸内レモン、はっか、すだち、ほうじ茶、塩シークヮサー、黒糖胡桃などの豆平糖、小袋500〜600円、進物3個2,250円・6個4,600円 (公式サイト、2026年10月)・持ち帰りのみ',
    neighborhood: '三条大橋、三条通',
    gf_detail: '要確認。飴はてんさい糖と水飴を炊いたもの (公式サイト) だが、抹茶みるくなど味によって異なる。グルテンの情報はない。',
    vegan_detail: '要確認。基本はてんさい糖と水飴で香料・着色料不使用 (公式サイト)。抹茶みるくなど乳製品を含む味もある。',
    notes: '[飴屋・三条大橋、持ち帰りのみ、1912年創業] 三条大橋のそばの三代続く家族の飴屋。てんさい糖と水飴を昔ながらに炊いた、軽くあと口のよい飴 (しょうが、抹茶、ゆず、ぜいたく飴など)、香料・着色料は使わない。試食もある。席はない。',
  });
}

// ================================================================ 山利商店 Yamari Shoten
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023555/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '15:30']);
  put({
    id: 'kyoto_yamari_shoten', name: '山利商店 (Yamari Shoten)', category: 'OMNI',
    lat: 34.99696357787787, lng: 135.76995454027414, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A March 2021 reviewer\'s list from the shop flags wheat in the Hatcho-based dashi blend and the seasoned misos; the plain rice misos are not flagged, but none is stated to be wheat-free.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The white miso is described as homemade, additive-free rice miso (November 2023), and miso as soybeans plus koji (March 2021); egg is flagged only in the yuzu seasoned miso. Ask about each product.',
    hours_raw: 'Takeaway only — a miso maker\'s shop. Monday–Saturday 8:00–15:30; closed Sunday; hours may change (Tabelog). No cards or e-money (Tabelog). Sold by weight from 100 g (March 2021). 3 min walk from Keihan Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-Gojo, Yamada-cho',
    cuisine: 'Long-established Kyoto white-miso maker supplying well-known restaurants and confectioners (2017–2025 reviews) · the house white miso: sweet, low-salt (about 4.6%), briefly aged rice miso, about ¥1,500 per kg or ¥160 per 100 g; also a spicier white, inaka misos from ¥800 per kg, Hatcho-type bean miso, an Osaka-style red dashi miso, seasoned misos with red miso or yuzu, and moromi (March 2021–November 2023) · takeaway only',
    website: null, gmaps: gm('山利商店 京都 白味噌'), menu_url: null,
    notes: '[Miso shop · Kiyomizu-Gojo, takeaway only] The white-miso maker many Kyoto restaurants rely on: a sweet, low-salt, additive-free rice miso sold by weight from 100 g, plus inaka, Hatcho-style and seasoned misos. Some blends contain wheat or egg — ask. Cash only; closes 15:30; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a long-established miso shop near Kiyomizu-Gojo whose handmade white miso is used by many renowned Kyoto restaurants and sweet makers (2017–2025 reviews). No founding date in the sources.',
      philosophy: null, specialty: 'White miso.',
      anecdotes: [
        { text: 'A March 2021 visitor wrote down the shop\'s explanation of every product, from the house white miso to the yuzu seasoned miso.', source: R + 'B436353684/' },
        { text: 'A November 2023 regular has the white miso delivered, freezing it in portions because it is raw, low-salt miso.', source: R + 'B475259959/' },
        { text: 'An August 2023 visitor hurried over after lunch nearby to buy white miso just before the 15:30 close.', source: R + 'B479599198/' },
      ],
      japanese_sources_summary: '食べログ: その他・日本料理、東山区山田町499、京阪清水五条駅から徒歩3分、月〜土 8:00〜15:30、日曜休み、カード・電子マネー不可、禁煙。口コミ (2016年11月〜2025年1月、英語): 京の老舗の白味噌の店、有名料理店や和菓子店が使う、手作りで無添加・無着色・低塩 (約4.6%) の米味噌、熟成は2週間ほど (2023年11月)、白味噌1kg 1,500円 (100g 160円から)、田舎味噌800円、八丁味噌系の豆味噌、浪速の赤だし、合わせ味噌は小麦を含むものあり、柚子の味噌は小麦と卵を含む、もろみ (2021年3月)、15時半に閉まる (2023年8月)。',
      confidence: 'medium', sources: [TB, R + 'B186493696/', R + 'B227932942/', R + 'B436353684/', R + 'B475259959/', R + 'B479599198/', R + 'B500337308/', R + 'B96923845/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; cash only; closes 15:30.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区山田町499',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review January 2025.' },
    pin_source: `Tabelog ${TB} (34.996964, 135.769955); cross-checked: GSI 京都府京都市東山区山田町499番地 (lot) 13 m; nearest existing record 12.5 m (kyoto_petit_chalet_cheese); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B436353684/'],
    price_note: 'Prices from a March 2021 review, before tax; may have changed.', last_checked: TODAY, items: [
      it('', '', 'White miso, per kg', '¥1,500', 'Miso', 'ask', 'vegan', 'March 2021; ¥160 per 100 g.', 'white_miso'),
      it('', '', 'Inaka miso, per kg', '¥800', 'Miso', 'ask', 'vegan', 'March 2021.', 'inaka'),
      it('', '', 'Yuzu seasoned miso, 200 g', '¥800', 'Miso', 'no', 'no', 'March 2021; contains wheat and egg.', 'yuzu_miso'),
    ] }, {
    cuisine: '有名料理店や菓子店に白味噌を納める京の老舗の味噌の店 (2017〜2025年の口コミ)・看板の白味噌: 甘く低塩 (約4.6%)、熟成の短い米味噌、1kg 約1,500円 (100g 160円)、辛口の白味噌、1kg 800円からの田舎味噌、八丁味噌系の豆味噌、浪速の赤だし、赤だしや柚子の合わせ味噌、もろみ (2021年3月〜2023年11月)・持ち帰りのみ',
    neighborhood: '清水五条、山田町',
    gf_detail: '要確認。2021年3月の口コミの品書きでは八丁系の合わせ味噌と調合味噌に小麦の表示。米味噌には表示がないが、小麦不使用とは書かれていない。',
    vegan_detail: '白味噌は手作りで無添加の米味噌 (2023年11月)、味噌は大豆と麹 (2021年3月)。卵の表示は柚子の味噌のみ。品ごとに確認を。',
    notes: '[味噌の店・清水五条、持ち帰りのみ] 京都の多くの料理店が頼る白味噌の店。甘く低塩で無添加の米味噌を100gから量り売り、田舎味噌や八丁系、調合味噌も。小麦や卵を含む品もあるので確認を。現金のみ、15時半まで、日曜休み。',
  });
}

// ================================================================ 鶴清 Tsuruse
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003449/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.tsuruse.co.jp/';
  const H = day(['11:30', '21:30']);
  put({
    id: 'kyoto_tsuruse_ryokan', name: '鶴清 (Tsuruse)', category: 'OMNI',
    lat: 34.996764777877324, lng: 135.7678523902736, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with dashi, soy and tempura; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, hamo, sweetfish and eel courses (2026 reviews).',
    hours_raw: 'Daily 11:30–21:30 (last order 20:00); closing days irregular (Tabelog). Reservations accepted; kawadoko riverbank dining in season, from May (Tabelog; May–June 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 500 seats across a three-storey cypress building: a hall for up to 300, a kawadoko for up to 200, private rooms (Tabelog). Karaoke; bring-your-own drinks; children welcome (Tabelog). Maiko can be arranged for banquets (January 2026). Kiyamachi above Gojo, by the Kamo; near Keihan Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Gojo, Kamo riverside',
    cuisine: 'Kyoto kaiseki in a large three-storey cypress ryokan with one of the biggest kawadoko on the Kamo (Tabelog) · seasonal courses, e.g. a ¥10,000 summer kawadoko course with sweetfish, a hamo and new-onion hot pot, seafood grilled on a stone; winter fugu milt and steamed eel rice at New Year banquets (January–September 2026) · banquets of about ten dishes with drinks; beer ¥1,000 (January 2026) · lunch about ¥6,000–8,000, dinner about ¥10,000–15,000 (Tabelog)',
    website: WEB, gmaps: gm('料理旅館 鶴清'), menu_url: null,
    notes: '[Kaiseki ryokan · Kiyamachi-Gojo, kawadoko] A grand wooden ryokan by the Kamo, said to be over a century old, serving Kyoto kaiseki in private rooms and banquet halls — and from May one of the largest riverbank decks in the city, with sweetfish and hamo. Popular for parties, with maiko on request. Recent reviews are mixed on food and service.',
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)', 'Proprietress (okami, unnamed)'], origin: null,
      background: 'Per Tabelog: a three-storey ryokan built of cypress, serving Kyoto kaiseki of seasonal ingredients, with a kawadoko for up to 200 guests overlooking the Kamo and Higashiyama, a hall for 300 and rooms for weddings. An August 2026 reviewer calls it a ryokan of more than 100 years and praises the proprietress\'s warmth.',
      philosophy: 'Seasonal ingredients, carefully seasoned and presented (Tabelog).', specialty: 'Kawadoko kaiseki; banquets.',
      anecdotes: [
        { text: 'A May 2026 diner came on the first day of the kawadoko season; when the wind turned cold, the staff brought blankets, then moved the party to a private room.', source: R + 'B527384686/' },
        { text: 'A January 2026 guest at the tenth annual New Year party thanked the maiko and staff for the hospitality.', source: R + 'B520586633/' },
        { text: 'A July 2026 diner was disappointed by pre-grated daikon and badly boned hamo for the price.', source: R + 'B533648452/' },
      ],
      japanese_sources_summary: '食べログ: 旅館・日本料理、下京区木屋町五条上ル下材木町451 料理旅館 鶴清、清水五条から105m、毎日 11:30〜21:30 (L.O.20:00)、不定休、予約可、カード可、電子マネー・QR 不可、500席、個室、50名以上の貸切可、カラオケ、持ち込み可、子ども可、公式サイトあり、総檜造りの三階建ての旅館、季節の京懐石、夏は日本最大級の川床 (200名)、大広間 (300名)、宿泊と婚礼。口コミ (2026年1月〜9月、英語): 新年会 (ふぐの白子、鰻のせいろ蒸し)、舞妓のもてなし、10品ほどの宴会、ビール1,000円、3階の大広間、川床の1万円のコース (鮎)、鱧と新玉ねぎの小鍋、魚介の石焼き、100年以上の老舗との声と女将のもてなし (2026年8月)、料理が残念だったとの声 (2026年7月)、接客と虫が気になったとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B325012270/', R + 'B428082905/', R + 'B520586633/', R + 'B522385441/', R + 'B523657273/', R + 'B524385543/', R + 'B527384686/', R + 'B533648452/', R + 'B533915728/', R + 'B535899306/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ryokan dining for outside guests; book ahead; kawadoko in season; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町五条上ル下材木町451 料理旅館 鶴清',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.996765, 135.767852); cross-checked: GSI 京都府京都市下京区下材木町451番地 (lot) 20 m; nearest existing record 65.7 m (mp_kissa_kano); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523657273/'],
    price_note: 'Price from a June 2026 review, drinks extra.', last_checked: TODAY, items: [
      it('', '', 'Kawadoko kaiseki course', '¥10,000', 'Courses', 'ask', 'no', 'June 2026; seasonal.', 'kawadoko'),
    ] }, {
    cuisine: '鴨川沿いでも最大級の川床をもつ総檜造りの三階建ての旅館の京懐石 (食べログ)・季節のコース: 鮎、鱧と新玉ねぎの小鍋、魚介の石焼きの夏の川床1万円のコース、新年会のふぐの白子と鰻のせいろ蒸し (2026年1〜9月)・10品ほどの宴会と飲み物、ビール1,000円 (2026年1月)・昼6,000〜8,000円ほど、夜10,000〜15,000円ほど (食べログ)',
    neighborhood: '木屋町五条、鴨川沿い',
    gf_detail: '要確認。だし、醤油、天ぷらを使う京懐石。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鱧、鮎、鰻のコース (2026年の口コミ)。',
    notes: '[懐石の旅館・木屋町五条、川床] 鴨川沿いの、100年以上とも言われる大きな木造の旅館で、個室や大広間で京懐石。5月からは市内でも最大級の川床で鮎や鱧を。宴会に人気で舞妓も頼める。最近の口コミは料理と接客で評価が分かれる。',
  });
}

// ================================================================ 中川酒店 木屋町店 Nakagawa Saketen
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003623/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.nakagawasaketen.com/';
  const W = day(['18:00', '24:00']); const F = day(['18:00', '25:00']);
  put({
    id: 'kyoto_nakagawa_saketen_kiyamachi', name: '中川酒店 木屋町店 (Nakagawa Saketen)', category: 'OMNI',
    lat: 35.010263, lng: 135.770182, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: Okinawa soba, fu champuru, island gyoza and mozuku tempura (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-based Okinawan dishes and gyoza (2024–2025 reviews).',
    hours_raw: 'Monday, Wednesday, Thursday and Sunday 18:00–24:00; Friday and Saturday 18:00–1:00; closed Tuesday (Tabelog). Reservations accepted (Tabelog). Appetizer charge ¥300 (Tabelog original お付き出し300円). Cards (JCB, AMEX, Diners) and PayPay (Tabelog). 25 seats: 5 at the counter, 20 at tables, some by the window; private hire for 20–50 (Tabelog; 2013 reviews). Smoking allowed (Tabelog). 2F of the Radice Matsuya building on Kiyamachi south of Oike; near Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Oike — 2F',
    cuisine: 'Tropical, reggae-playing Okinawan dining bar with ingredients sent from Okinawa (2008–2025 reviews) · mozuku tempura, fu champuru, island gyoza, Okinawa croquettes, goya champuru, Okinawa soba (2008–2025 reviews) · Orion beer, a long counter of awamori with tasting notes on the menu, awamori cocktails (2024–2025 reviews) · about ¥2,000–4,000 (Tabelog; 2025 reviews)',
    website: WEB, gmaps: gm('中川酒店 木屋町店'), menu_url: null,
    notes: '[Okinawan dining bar · Kiyamachi-Oike, 2F] A dim, plant-filled second-floor bar playing reggae, run by a friendly couple: mozuku tempura, fu champuru, island gyoza and Okinawa soba with Orion beer and a wall of awamori. ¥300 appetizer; smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (husband)', 'Owner (wife)'], origin: null,
      background: 'Per reviewers: a long-running Okinawan dining bar despite the "saketen" (liquor shop) name, with a sister shop in Demachi, ingredients from Okinawa and a counter lined with awamori; a February 2025 guest found the owner couple both charming.',
      philosophy: null, specialty: 'Mozuku tempura; fu champuru.',
      anecdotes: [
        { text: 'A February 2025 visitor praised the owner couple and the menu\'s tasting notes for the many awamori, and especially the mozuku tempura.', source: R + 'B512600294/' },
        { text: 'A May 2024 Okinawa fan comes back for the mozuku tempura, fu champuru, island gyoza and Okinawa soba.', source: R + 'B487310294/' },
        { text: 'A February 2013 diner laughed that a place called "Saketen" turned out to be an Okinawan restaurant with a night view from the window tables.', source: R + 'B113820270/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・沖縄料理・居酒屋、中京区木屋町御池南入る下丸屋町421-5 ラディーチェ・マツヤビル 2F、市役所前から156m、月・水・木・日 18:00〜24:00、金・土 18:00〜翌1:00、火曜休み、予約可、お付き出し300円、カード (JCB・AMEX・Diners)・PayPay 可、25席 (カウンター5、テーブル20)、20〜50名で貸切可、喫煙可、公式サイトあり。口コミ (2008年11月〜2025年2月、英語): 「酒店」だが沖縄料理の店、レゲエと南国の雰囲気、沖縄から直送の食材、もずくの天ぷら、麩チャンプルー、島餃子、沖縄コロッケ、ゴーヤーチャンプルー、沖縄そば、オリオンビール、泡盛がずらり、泡盛のカクテル、店主夫婦が気さく (2025年2月)、窓際の席から夜景 (2013年)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B113820270/', R + 'B116739234/', R + 'B144600871/', R + 'B480355971/', R + 'B487310294/', R + 'B498539459/', R + 'B512600294/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥300 appetizer; smoking allowed; cards (JCB, AMEX, Diners) and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町御池南入る下丸屋町421-5 ラディーチェ・マツヤビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through February 2025.' },
    pin_source: `Tabelog ${TB} (35.010218, 135.770182) moved 5.0 m north to (35.010263, 135.770182): the Tabelog point is 1.7 m from kyoto_yakiyasai_isoya (same building, 1F), now 6.3 m; GSI 京都府京都市中京区下丸屋町421番地 (lot) 65 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the appetizer charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Mozuku tempura', '', 'Okinawan', 'no', 'no', 'May 2024; February 2025.', 'mozuku'),
      it('', '', 'Fu champuru', '', 'Okinawan', 'no', 'no', 'May 2024.', 'fu_champuru'),
      it('', '', 'Appetizer charge', '¥300', 'Charge', 'ask', 'no', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: '沖縄から直送の食材を使う、レゲエの流れる南国風の沖縄料理のダイニングバー (2008〜2025年の口コミ)・もずくの天ぷら、麩チャンプルー、島餃子、沖縄コロッケ、ゴーヤーチャンプルー、沖縄そば (2008〜2025年の口コミ)・オリオンビール、味の説明つきの豊富な泡盛、泡盛のカクテル (2024〜2025年の口コミ)・2,000〜4,000円ほど (食べログ、2025年の口コミ)',
    neighborhood: '木屋町、御池の南、2階',
    gf_detail: 'グルテンフリー不可。沖縄そば、麩チャンプルー、島餃子、もずくの天ぷら (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉中心の沖縄料理と餃子 (2024〜2025年の口コミ)。',
    notes: '[沖縄料理のダイニングバー・木屋町御池、2階] 夫婦で営む、緑の多い薄暗い2階の店でレゲエが流れる。もずくの天ぷら、麩チャンプルー、島餃子、沖縄そばにオリオンビールとずらりと並ぶ泡盛。お付き出し300円、喫煙可。火曜休み。',
  });
}

save();
