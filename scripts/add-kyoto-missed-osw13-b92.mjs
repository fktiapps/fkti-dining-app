// Kyoto priority (kyoto-missed), worker osw13, batch 92 — 河道屋 noren-wake recheck (ids outside lane allowed) + lane mod 6 = 0, rest tier nearest-first.
// Drafts: 河道屋倖松庵 (26040067, re-opened), Cafe Lumen (26045334, re-opened), KIHARU Brasserie, TOTO.
// Recheck finding: no single operator runs 5+ 河道屋 shops. 総本家 河道屋 and 晦庵 河道屋 share one operator (kawamichiya.co.jp);
// 河道屋倖松庵 / Cafe Lumen are 有限会社河道屋倖松庵 (NTA invoice T4130002006904); 養老, 銀華 and 河新麺房 are separate noren-wake houses.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');
const NTA = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130002006904';
const MIYAGE = 'https://www.kyoto-miyage.gr.jp/shops/kawamichiya_koushoan';

// ================================================================ 河道屋倖松庵 (re-opened under the noren-wake ruling)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040067/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '20:30']);
  put({
    id: 'kyoto_kawamichiya_koshoan', name: '河道屋倖松庵 (Kawamichiya Koshoan)', category: 'OMNI',
    lat: 35.000486, lng: 135.766318, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with wheat, udon, tempura, curry soba thickened with starch and soy-based tsuyu (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito-dashi tsuyu; duck and tempura toppings (2024–2026 reviews).',
    hours_raw: 'Tabelog: Sat and Sun 18:00–20:30 (last order 20:00); closed weekdays and holidays; temporary closures possible. Daytime at the same address and phone now runs as Cafe Lumen (opened 8 June 2026; separate listing) — a June 2026 reviewer says the house opens as a café at lunchtime and keeps irregular weekend dinner hours, posted on Instagram. Reservations taken. 20 seats: a large sunken-kotatsu table and tables; shoes off at the door; garden view. Non-smoking; children welcome. Cards, e-money and PayPay. A renovated machiya on Gokomachi above Takatsuji. Opened at this address 1 November 2023 (Tabelog).',
    hours: { 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi above Takatsuji — 5 min walk from Kyoto-Kawaramachi exit 10',
    cuisine: 'A soba house of 1879 standing, now in a renovated machiya, with soba from its own noodle works (Kyoto Bussan association; 2024–2026 reviews) · duck nanban soba, large with rice ¥1,550 (May 2026); duck seiro (2025) · tempura soba hot or cold; à la carte tempura (2024–2025) · seasonal soba: summer-vegetable curry soba ¥1,400, small rice +¥100 (September 2024); Kyoto-style tanuki soba with fried tofu and Kujo leek in thick sauce (November 2025) · agedashi tofu; nama-fu miso dengaku (2025) · Japanese sake and beer (2025)',
    website: null, gmaps: gm('河道屋倖松庵 橘町'), menu_url: null,
    notes: '[Soba · Gokomachi above Takatsuji, a Kawamichiya noren-wake house] A shoes-off machiya soba house, a Kawamichiya branch family since 1879, serving duck nanban, tempura and Kyoto tanuki soba over a garden view. Since June 2026 the daytime trade runs here as Cafe Lumen; the Koshoan name now covers weekend evenings. Reviews are mixed — some found the broth flat or the soba lukewarm.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Run by 有限会社河道屋倖松庵 (NTA invoice register, via the Cafe Lumen listing at the same address). The Kyoto Bussan association says the house was founded in Meiji 12 (1879) when its first generation trained at 総本家 河道屋 and was granted the name (noren-wake), and that the fourth generation now runs it. It opened at this machiya on 1 November 2023 (Tabelog). Criticism: a broth tasting of "chemical seasonings" and overcooked soba (November 2024), wrong orders (July 2025), processed rather than fresh ginger (November 2025), and lukewarm soba with a long wait when short-staffed (May 2026).',
      philosophy: null,
      specialty: 'Duck nanban soba; tempura soba.',
      anecdotes: [
        { text: 'May 2026: "Kawamichiya is famous for its soba bouro. Be cautious, as the branches of the family lineage are so complex that discussing one branch in another can lead to cold responses."', source: R + 'B527516226/' },
        { text: 'January 2025: "Upon entering the establishment, removing your shoes is required. You can see the garden from inside, creating a spacious atmosphere."', source: R + 'B499821338/' },
      ],
      japanese_sources_summary: '食べログ: 河道屋倖松庵、そば・うどん・居酒屋、下京区橘町448、阪急京都河原町駅10番出口から徒歩5分、土・日 18:00〜20:30 (L.O. 20:00)、平日・祝日休み、予約可、20席、掘りごたつ、禁煙、子供可、カード・電子マネー・PayPay可、2023年11月1日オープン、町家を改装した空間でそば、おばんざい、日本酒。京都物産出品協会: (有)河道屋倖松庵、創業は明治十二年、初代が総本家・河道屋にて修行ののち暖簾分け、当代四代目。国税庁インボイス公表サイト: 有限会社河道屋倖松庵 (T4130002006904)。口コミ (2024年9月〜2026年5月、英語): 鴨なんばの大盛りとご飯1,550円、鴨せいろ、天ぷらそば、夏野菜のカレーそば1,400円、たぬきそば、揚げだし豆腐、生麩田楽、日本酒、靴を脱いで上がる、庭が見える、化学調味料の味 (2024年11月)、注文違い (2025年7月)、おろし生姜が既製品 (2025年11月)、そばがぬるい (2026年5月)。',
      confidence: 'medium', sources: [TB, MIYAGE, NTA].concat(rv(R, ['B492124543', 'B494793534', 'B495010520', 'B495836358', 'B496859941', 'B499821338', 'B502114928', 'B506608776', 'B510422055', 'B516660408', 'B519117169', 'B527516226'])) },
    cultural_comfort: { level: 'japanese', note: 'Shoes off; weekend evenings only under this name.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区橘町448',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (weekend-evening hours) with reviews through May 2026; daytime trade continues at the same address as Cafe Lumen.' },
    pin_source: `Tabelog ${TB} (35.000486, 135.766318); cross-checked: GSI 京都府京都市下京区橘町448番地 (lot) 20m; Cafe Lumen (same address) offset 6m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527516226/', R + 'B492124543/'],
    price_note: 'Prices from September 2024 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Duck nanban soba, large, with rice', '¥1,550', 'Soba', 'no', 'no', 'May 2026.', 'kamo_nanban'),
      it('', '', 'Summer-vegetable curry soba (seasonal)', '¥1,400', 'Soba', 'no', 'no', 'September 2024.', 'curry_soba'),
      it('', '', 'Tempura soba', null, 'Soba', 'no', 'no', '2024–2025 reviews.', 'tempura_soba'),
    ] }, {
    cuisine: '明治12年 (1879年) 創業のそば屋で、町家を改装した店。自家製麺所のそば (京都物産出品協会、2024〜2026年の口コミ)・鴨なんばの大盛りとご飯1,550円 (2026年5月)、鴨せいろ (2025年)・温かいか冷たい天ぷらそば、単品の天ぷら (2024〜2025年)・季節のそば: 夏野菜のカレーそば1,400円、小ご飯100円 (2024年9月)、きつねと九条ねぎのあんかけの京風たぬきそば (2025年11月)・揚げだし豆腐、生麩の味噌田楽 (2025年)・日本酒とビール (2025年)',
    neighborhood: '御幸町高辻上ル。京都河原町駅10番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の入るそば、うどん、天ぷら、とろみのカレーそば、醤油のつゆ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かつおだしのつゆ、鴨や天ぷら (2024〜2026年の口コミ)。',
    notes: '[そば・御幸町高辻上ル、河道屋の暖簾分けの店] 1879年から続く河道屋の暖簾分けの家の、靴を脱いで上がる町家のそば屋。庭を眺めながら鴨なんば、天ぷら、京風たぬきそば。2026年6月から昼は同じ場所で Cafe Lumen として営業し、倖松庵の名は週末の夜に。だしが物足りない、そばがぬるいなど評価は分かれる。',
  });
}

// ================================================================ Cafe Lumen (re-opened under the noren-wake ruling)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045334/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '18:00']); const E = day(['11:00', '17:00']);
  put({
    id: 'kyoto_cafe_lumen_takatsuji', name: 'Cafe Lumen', category: 'OMNI',
    lat: 35.000435, lng: 135.766292, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with wheat, tempura, omurice with demi-glace (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg omurice, bonito-dashi soba, gizzard confit (2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Fri 11:00–18:00 (food last order 17:00, drinks 17:30); Sat, Sun 11:00–17:00 (food last order 16:00, drinks 16:30); closed Wednesday and Thursday. Reservations taken (private parties by phone). 21 seats with sunken seating and a counter bench; shoes off. Non-smoking; English menu; mobile ordering; free Wi-Fi; children and strollers welcome. Cards, transit IC, iD, QUICPay and PayPay. Opened 8 June 2026 (Tabelog) as the daytime café of 河道屋倖松庵 in the same machiya — same address and phone; the soba comes from the family\'s Meiji-era noodle works (July 2026). Invoice holder 有限会社河道屋倖松庵 (Tabelog; NTA register).',
    hours: { 0: W, 1: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi above Takatsuji — 5 min walk from Kyoto-Kawaramachi exit 10',
    cuisine: 'A daytime café in the Kawamichiya Koshoan machiya pairing soba with omurice (2026 reviews) · omurice rolled to order, cut open at the table, demi-glace or ketchup ¥1,300 (June–August 2026) · soba: tempura ¥1,100, herring ¥1,100, zaru ¥800, tempura zaru ¥1,300 (July 2026); fried-eggplant oroshi soba ¥1,000 (July 2026); ume oroshi soba (August 2026) · sides: carrot rapée ¥350, grilled tofu ¥300, gizzard confit ¥450 (July 2026) · shirokuma-style shaved ice with fruit and bean paste, also to take away (July 2026)',
    website: null, gmaps: gm('Cafe Lumen 橘町'), menu_url: TB + 'dtlmenu/',
    notes: '[Café · Gokomachi above Takatsuji, soba and omurice in a Kawamichiya machiya] The daytime face of the Kawamichiya Koshoan soba house: a calm, grey-and-wood machiya café where you cut open a creamy omurice or have the family\'s soba with tempura or herring, plus shaved ice in summer. Shoes off; mobile ordering. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 8 June 2026 (Tabelog) in the machiya of 河道屋倖松庵, a soba house founded in Meiji 12 (1879) as a noren-wake of 総本家 河道屋 (Kyoto Bussan association). A July 2026 reviewer writes that the first generation "trained at the main branch of Kawadoya before branching out" and that the soba comes from the family\'s own noodle works; the Tabelog invoice number belongs to 有限会社河道屋倖松庵. Reviewers note a gentle grey-and-wood interior with vintage furniture; one found the soba "didn\'t seem to be handmade, but it was decent" (July 2026).',
      philosophy: null,
      specialty: 'Omurice; Kawamichiya soba.',
      anecdotes: [
        { text: 'August 2026: "There was a detailed explanation on how to open the omelet, and even as a novice, I was able to do it perfectly."', source: R + 'B533413381/' },
        { text: 'September 2026: "The soba was from Kawado-ya and exceeded my expectations in quality."', source: R + 'B536235997/' },
      ],
      japanese_sources_summary: '食べログ: Cafe Lumen、カフェ・そば・オムライス、下京区橘町448、阪急京都河原町駅10番出口から徒歩5分、月・火・金 11:00〜18:00 (料理 L.O. 17:00)、土・日 11:00〜17:00 (料理 L.O. 16:00)、水・木休み、予約可、21席、掘りごたつ、禁煙、英語メニュー、モバイルオーダー、Wi-Fi、子供・ベビーカー可、カード・交通系IC・iD・QUICPay・PayPay可、2026年6月8日オープン、インボイス登録 T4130002006904 (国税庁: 有限会社河道屋倖松庵)、法人会員。口コミ (2026年6月〜9月、英語): 河道屋倖松庵の昼のカフェ、明治からの自家製麺所のそば、オムライス (デミかケチャップ) 1,300円、天ぷらそば1,100円、にしんそば1,100円、ざるそば800円、天ざる1,300円、揚げなすおろしそば1,000円、梅おろしそば、キャロットラペ350円、焼き豆腐300円、砂肝のコンフィ450円、白くま風かき氷、手打ちではなさそうだが悪くないそば (2026年7月)。',
      confidence: 'medium', sources: [TB, NTA, MIYAGE].concat(rv(R, ['B531517612', 'B531580300', 'B531621889', 'B531860589', 'B532816577', 'B533413381', 'B536087361', 'B536235997'])) },
    cultural_comfort: { level: 'english', note: 'English menu; mobile ordering; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区橘町448',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing (opened June 2026) with reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000453, 135.766292), offset 2m south because 河道屋倖松庵 (same address, kyoto_kawamichiya_koshoan) sits 4.4m from the Tabelog point — now 6.2m from it; cross-checked: GSI 京都府京都市下京区橘町448番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531580300/', R + 'B531860589/'],
    price_note: 'Prices from June–August 2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Omurice (demi-glace or ketchup)', '¥1,300', 'Main', 'no', 'no', 'June–August 2026.', 'omurice'),
      it('', '', 'Tempura soba', '¥1,100', 'Soba', 'no', 'no', 'July 2026.', 'tempura_soba'),
      it('', '', 'Herring soba', '¥1,100', 'Soba', 'no', 'no', 'July 2026.', 'nishin_soba'),
      it('', '', 'Zaru soba', '¥800', 'Soba', 'no', 'no', 'July 2026.', 'zaru_soba'),
      it('', '', 'Fried-eggplant oroshi soba (cold)', '¥1,000', 'Soba', 'no', 'no', 'July 2026.', 'nasu_oroshi_soba'),
    ] }, {
    cuisine: '河道屋倖松庵の町家で、そばとオムライスを出す昼のカフェ (2026年の口コミ)・注文ごとに巻き、席で切り開くオムライス、デミかケチャップ1,300円 (2026年6〜8月)・そば: 天ぷら1,100円、にしん1,100円、ざる800円、天ざる1,300円 (2026年7月)、揚げなすおろしそば1,000円 (2026年7月)、梅おろしそば (2026年8月)・キャロットラペ350円、焼き豆腐300円、砂肝のコンフィ450円 (2026年7月)・果物とあんの白くま風かき氷、持ち帰りも (2026年7月)',
    neighborhood: '御幸町高辻上ル。京都河原町駅10番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の入るそば、天ぷら、デミグラスのオムライス (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵のオムライス、かつおだしのそば、砂肝のコンフィ (2026年の口コミ)。',
    notes: '[カフェ・御幸町高辻上ル、河道屋の町家でそばとオムライス] 河道屋倖松庵の昼の顔。グレーと木の落ち着いた町家のカフェで、席で切り開くとろとろのオムライスや、天ぷらやにしんの家のそば、夏はかき氷も。靴を脱いで上がる、モバイルオーダー。水・木休み。',
  });
}

// KIHARU Brasserie: drafted by the worker; converted to a skip by the integrator (large-parent hotel restaurant, same as Grand Cafe Fauchon).
skip('https://tabelog.com/en/kyoto/A2601/A260301/26031324/', 'sub-brand of a large parent: KIHARU Brasserie is the restaurant of Cross Hotel Kyoto, an ORIX Hotels & Resorts brand hotel (cross-kyoto.orixhotelsandresorts.com; ikyu restaurant/110632) — hotel restaurant of a national hotel group, as with Grand Cafe Fauchon');

// ================================================================ TOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26011908/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_toto_kissa_gion', name: 'TOTO', category: 'OMNI',
    lat: 35.004182, lng: 135.774682, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: coffee, café au lait, milk tea and lemon squash; no food described (2015–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee and lemon squash may suit; café au lait and milk tea do not (2015–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–18:00; hours may change. Cash only per Tabelog (no cards, e-money or QR). Non-smoking (January 2025). Counter and bench seats in a white room with light-green chairs (January 2016). At the end of a narrow alley off the north side of Shijo-dori in Gion, under a green "charcoal-brewed coffee" sign (2016–2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Alley off the north side of Shijo-dori, Gion — 5 min walk from Gion-Shijo',
    cuisine: 'An old-style kissa down a Gion alley, serving charcoal-roasted coffee from Kobe\'s Hagiwara Coffee (2016–2026 reviews) · blend coffee, ground fresh (January 2025; April 2026) · iced café au lait ¥700 (July 2025) · milk tea; lemon squash with hand-cut ice (2015; 2025)',
    website: null, gmaps: gm('TOTO 喫茶 祇園町北側'), menu_url: null,
    notes: '[Kissa · alley off Shijo, Gion, charcoal-roast coffee] A quiet retro coffee shop hidden at the end of a narrow alley off Shijo, behind a green door: Hagiwara charcoal-roast coffee, a good iced café au lait and regulars at the counter. Cash only; open daily 11:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers since 2011 describe a hidden café behind a green door at the end of an alley off Shijo, a white room with light-green chairs, regulars at the counter and freshly ground coffee from Hagiwara Coffee of Kobe (July 2025). It is non-smoking, unusual for its kind (January 2025).',
      philosophy: null,
      specialty: 'Charcoal-roasted coffee.',
      anecdotes: [
        { text: 'July 2025: "The atmosphere felt a bit like a snack bar… but I was pleasantly surprised to find they offered very delicious coffee! It seems they use coffee beans from Kobe\'s Hagiwara Coffee."', source: R + 'B511036005/' },
        { text: 'January 2016: "Deep into the long alley typical of Kyoto, you\'ll find a green door. Surrounded by mosaic glass, the outside world is completely shut out."', source: R + 'B138479354/' },
      ],
      japanese_sources_summary: '食べログ: TOTO、喫茶店、東山区祇園町北側263、祇園四条から261m、毎日 11:00〜18:00、時間は変わることがある、カード・電子マネー・QR不可、禁煙。口コミ (2011年4月〜2026年4月、英語): 四条通の北側の細い路地の奥、炭火のコーヒーの緑の看板と緑のドア、白い店内に薄緑の椅子、カウンターの常連、神戸の Hagiwara Coffee の豆、挽きたてのブレンド、アイスカフェオレ700円、ミルクティー、レモンスカッシュ、禁煙 (2025年1月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B104040097', 'B138479354', 'B273996863', 'B431369184', 'B504390806', 'B507185996', 'B511036005', 'B526053475'])) },
    cultural_comfort: { level: 'japanese', note: 'Hidden alley kissa; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側263',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April 2025, July 2025 and April 2026.' },
    pin_source: `Tabelog ${TB} (35.004182, 135.774682); cross-checked: GSI 京都府京都市東山区祇園町北側263番地 (lot) 16m; nearest pin kyoto_gion_shishishi 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511036005/'],
    price_note: 'One price from a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Iced café au lait', '¥700', 'Coffee', 'ask', 'no', 'July 2025.', 'iced_cafe_au_lait'),
      it('', '', 'Blend coffee', null, 'Coffee', 'ask', 'ask', 'January 2025; April 2026.', 'blend_coffee'),
    ] }, {
    cuisine: '祇園の路地奥の昔ながらの喫茶店で、神戸の Hagiwara Coffee の炭火焙煎の豆 (2016〜2026年の口コミ)・挽きたてのブレンド (2025年1月、2026年4月)・アイスカフェオレ700円 (2025年7月)・ミルクティー、手で割った氷のレモンスカッシュ (2015年、2025年)',
    neighborhood: '祇園、四条通の北側の路地。祇園四条から徒歩5分',
    gf_detail: '要確認: コーヒー、カフェオレ、ミルクティー、レモンスカッシュ。食べ物の記載なし (2015〜2026年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーやレモンスカッシュは合うかもしれないが、カフェオレやミルクティーは不可 (2015〜2026年の口コミ)。',
    notes: '[喫茶・祇園の四条通北側の路地、炭火焙煎のコーヒー] 四条から入った細い路地の奥、緑のドアの向こうの静かなレトロな喫茶店。Hagiwara Coffee の炭火焙煎のコーヒー、おいしいアイスカフェオレ、カウンターには常連。現金のみ、毎日11時〜18時。',
  });
}

save();
