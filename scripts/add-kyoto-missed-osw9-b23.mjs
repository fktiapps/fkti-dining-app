// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 23.
//   + LA RISOTTERIA (Milanese risotto bar on Daimaru Kyoto 8F; an Il Viale group concept)                       [core]
//   + おそば宝来 Osoba Horai (late-night soba and small plates in Gion, to 2 am; sister of 和食 宝来)            [core]
//   + 京氷菓 つらら Kyo Hyoka Tsurara (creative kakigori near Nijo, booked online two weeks ahead)               [notable]
//   + 野菜と魚 en Yasai to Sakana en (vegetable-and-fish izakaya off Ayanokoji; sister of 野菜酒場あしおと)       [notable]
//   - 麺屋キラメキ 京都三条 26029157 skipped (Kirameki group, 20+ shops)
//   - 京懐石 美濃吉 竹茂楼 ホテルグランヴィア京都店 26035757 skipped (美濃吉 chain)
//   - 鮨麻布 東山 26041607 skipped (Tabelog marks it relocated; the listing is pre-move)
//   - 東大 京都店 26014547 skipped (branch of 徳島ラーメン東大, in data)
//   - おめん 銀閣寺本店 26001803 skipped (same-concept flagship of a brand in data)
//   Same-name counts first (across concepts): RISOTTERIA 1 — one of five Il Viale shops of differently named concepts
//   (kyoto_ca_del_viale in data lists them), a local group, so drafted; キラメキ — 4 in our crawls, 4 in data, see skip;
//   宝来 — おそば宝来 1 in Kyoto (宝来 in Tokyo and 宝来亭 in Osaka are Chinese restaurants); 美濃吉 — 8 in our crawls;
//   鮨麻布 — 2 (東山 and 麻布台); 東大 — 東大 京都店 1 here, 徳島ラーメン東大 東京駅店 in data/tokyo.json; おめん —
//   銀閣寺本店 here, おめんNIPPON 四条先斗町店 in data, and a New York shop on the official site; つらら 1; 野菜と魚 en 1
//   (its sister 野菜酒場あしおと is not in data).
//   Taken in queue order on 2026-11-05: core 26040317, 26029157 (skip), 26040683; notable 26035757 (skip),
//   26041607 (skip), 26014547 (skip), 26001803 (skip), 26032721, 26042909. None of the four drafted is in
//   data/kyoto.json by name; 野菜と魚 en shares 永原町153 with mp_kuchibashi_modan (57 m apart, a different shop).
//   Service charges: none of the four drafted listings has a service-charge section.
//   Pins: Tabelog points; LA RISOTTERIA's GSI match is town-only (立売西町), so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029157', '麺屋キラメキ 京都三条: a shop of the Kirameki ramen group, a chain — kyr_kirameki_japan in data describes キラメキノ未来株式会社 as "a Kansai group that has grown to more than twenty ramen shops across Kyoto, Osaka, Shiga and Nara"; four Kirameki shops are already in data (kyr_kirameki_no_tori, kyr_komugi_no_kirameki_komug, kyr_kirameki_japan, kyr_kirameki_no_aozora)');
skip('26035757', '京懐石 美濃吉 竹茂楼 ホテルグランヴィア京都店: a branch of the 美濃吉 chain — our crawls list eight 美濃吉 shops (美濃吉本店 竹茂楼, 四条河原町店, 烏丸四条店, ジェイアール京都伊勢丹店, 竹茂楼 ホテル阪急インターナショナル店, 新阪急ホテル店, 心斎橋御堂筋店, 阪急うめだ本店) besides this one');
skip('26041607', '鮨麻布 東山: Tabelog marks the listing "Relocated" — "This is information from before the relocation." — and gives no new address; it is also a branch of the AZABU sushi brand (New York, Miami Beach; 鮨麻布 in Tokyo, 13291176)');
skip('26014547', '東大 京都店: a same-concept branch of a brand already in data — 徳島ラーメン東大 東京駅店 (tokyo3__8 in data/tokyo.json); Tokushima ramen');
skip('26001803', 'おめん 銀閣寺本店: the same-concept flagship of a brand already in data — vm_omen_nippon_shijo_pontoc (おめんNIPPON 四条先斗町店); the official site (omen.co.jp) lists 銀閣寺, 四条先斗町 and New York. Flagged: the integrator may prefer the honten over the branch');

// ================================================================ LA RISOTTERIA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040317/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_la_risotteria_daimaru', name: 'LA RISOTTERIA', category: 'OMNI',
    lat: 35.003921, lng: 135.762151, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options and risotto is rice-based, but pasta, pizza and bread are also served; no detail on how (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the signature risotto alla milanese comes with ossobuco and most risotti use stock and cheese (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 11:00–15:00, café 15:00–17:00, dinner 17:00–22:00 (last order 21:00); closing days follow Daimaru Kyoto (Tabelog). Bookings taken (Tabelog). Happy hour with ¥500 drinks (July 2026). 32 seats incl. sofa seats and a counter; English and Simplified Chinese menus with photos; children welcome with kids\' menu; wheelchair accessible; non-smoking, smoking area on the floor; cards and QR (Tabelog). On the 8th floor of the Daimaru Kyoto store, linked underground to Karasuma and Shijo Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto 8F, Shijo-Karasuma — linked to Karasuma and Shijo Stns',
    cuisine: 'Milanese risotto bar using aged Italian rice, with ossobuco on saffron risotto as the specialty (Tabelog) · lunch A (pasta or risotto, dessert, drink) ¥2,200, porcini risotto +¥1,100; lunch B with appetizer plate and soup (2026 reviews) · dinner pair set of appetizers, a risotto and a pasta for two with a drink each ¥8,800; ossobuco alla milanese ¥6,600; Bolognese, Margherita pizza (2026 reviews)',
    website: null, gmaps: gm('LA RISOTTERIA 大丸京都店'), menu_url: TB + 'dtlmenu/',
    notes: "[Risotto · Daimaru Kyoto 8F] A department-store-top Italian specialising in Milanese risotto of aged Italian rice — the ossobuco on saffron risotto is the dish — with good-value lunch sets from ¥2,200 and a ¥500 happy hour. Part of the local Il Viale group. Open daily with Daimaru's hours.",
    chef_bio: { chef_name: null, roles: ['Run by the eldest son of a sister restaurant\'s owner, Milan-trained, per a July 2026 review'], origin: null,
      background: 'Opened 29 October 2023 (Tabelog). One of the five shops of the Il Viale group named in our record kyoto_ca_del_viale ("Ca’ del Viale, TAVERNA il Viale, the gluten-free deli AL CAMINO, PANINOTECA and LA RISOTTERIA in the Daimaru Kyoto store"). A July 2026 reviewer writes it is run by the eldest son of a sister restaurant\'s owner, who trained in Milan.',
      philosophy: null, specialty: 'Ossobuco with saffron risotto.',
      anecdotes: [
        { text: 'A September 2026 lunch guest found the porcini risotto (+¥1,100) short on porcini aroma and "just average" for ¥3,300.', source: R + 'B535234741/' },
        { text: 'A September 2026 diner savoured the bone marrow of the ¥6,600 ossobuco and the firmly cooked Italian rice.', source: R + 'B536519750/' },
        { text: 'A May 2026 regular noticed the pasta lunch had gone, leaving risotto lunches only.', source: R + 'B528426246/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): LA RISOTTERIA、イタリアン、下京区四条通高倉西入立売西町79 大丸京都店 8F、阪急烏丸駅・地下鉄四条駅から直結、ランチ11:00〜15:00、カフェ15:00〜17:00、ディナー17:00〜22:00 (L.O. 21:00)、大丸京都店に準ずる、32席、英語・簡体字のメニュー、ベジタリアン・グルテンフリーの対応あり、子供可、2023年10月29日オープン、イタリアの熟成米のリゾット、仔牛すね肉の煮込みとミラノ風サフランのリゾット。口コミ (2026年5〜10月、英語): ランチ A 2,200円、ポルチーニ +1,100円、ディナーのペアセット8,800円、オッソブーコ6,600円、ハッピーアワーのドリンク500円、ミラノで修業した姉妹店のオーナーの長男。',
      confidence: 'medium', sources: [TB, R + 'B526629547/', R + 'B528426246/', R + 'B530088940/', R + 'B532033469/', R + 'B532434360/', R + 'B533613523/', R + 'B535234741/', R + 'B535821400/', R + 'B536519750/', R + 'B537156840/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus with photos (Tabelog); department-store setting.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通高倉西入立売西町79 大丸京都店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003921, 135.762151); GSI matched only the town (京都府京都市下京区立売西町), so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535234741/', R + 'B530088940/', R + 'B536519750/'],
    price_note: 'No menu read; prices from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch A: pasta or risotto, dessert, drink', '¥2,200', 'Lunch', 'ask', 'ask', 'September 2026 review.', 'lunch_a'),
      it('', '', 'Dinner pair set (appetizers, risotto, pasta, a drink each)', '¥8,800', 'Dinner', 'ask', 'no', 'June 2026 review.', 'pair_set'),
      it('', '', 'Ossobuco alla milanese with saffron risotto', '¥6,600', 'Mains', 'ask', 'no', 'September 2026 review.', 'ossobuco'),
    ] }, {
    cuisine: 'イタリアの熟成米を使うミラノのリゾットの店で、名物はサフランのリゾットにのせたオッソブーコ (食べログ)・ランチ A (パスタかリゾット、デザート、ドリンク) 2,200円、ポルチーニのリゾットは +1,100円。前菜の盛り合わせとスープ付きのランチ B (2026年の口コミ)・前菜、リゾット、パスタと各1杯のドリンクのディナーのペアセット8,800円、オッソブーコ6,600円、ボロネーゼ、マルゲリータ (2026年の口コミ)',
    neighborhood: '四条烏丸の大丸京都店8階。烏丸駅・四条駅から直結',
    gf_detail: '要確認。食べログにはグルテンフリー対応ありとあり、リゾットは米だが、パスタ、ピッツァ、パンもある。詳しい対応は不明 (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応ありとあるが、名物のミラノ風リゾットはオッソブーコ付きで、多くのリゾットはブロードやチーズを使う (食べログ、2026年の口コミ)。',
    notes: '[リゾット・大丸京都店8階] 百貨店の上階のイタリアンで、イタリアの熟成米のミラノ風リゾットが専門。サフランのリゾットにのせたオッソブーコが看板で、2,200円からのランチセットや500円のハッピーアワーも。地元の Il Viale グループの一軒。大丸の営業日に準じて毎日営業。',
  });
}

// ================================================================ おそば宝来
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040683/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_osoba_horai', name: 'おそば宝来 (Osoba Horai)', category: 'OMNI',
    lat: 35.004318, lng: 135.776014, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A September 2026 reviewer says the soba is 100% buckwheat, but the broths, tempura and small dishes are not described for gluten; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba in dashi broths, duck, beef tendon, sashimi and tempura (2026 reviews).',
    hours_raw: 'Mon–Sat 18:00–2:00 (last order 1:00); closed Sunday and on about two other days a month (Tabelog). Bookings taken, also same-day and after midnight by phone (2026 reviews). À la carte only per a September 2026 regular; an omakase course is also possible (February 2026). 15 seats: an L-shaped 9-seat counter and a room upstairs with a sunken table for 6; half portions of soba on request; designated smoking area; children welcome; cards (Tabelog; 2026 reviews). In a narrow alley in Gion north of Shijo (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, in a narrow alley — 5 min from Gion-Shijo Stn',
    cuisine: 'Late-night soba and small plates from the 和食 宝来 group: juwari (100% buckwheat) soba — mori soba, duck soba with kabosu, cold duck soba, beef tendon and Kujo negi soba, green curry soba, white sweet potato and ginger-sauce soba, kake soba (2026 reviews) · sashimi (bonito, hamo, squid), tender simmered octopus, saba sushi, karasumi mochi, fried white shrimp, kisu tempura, duck roast, sansho-grilled chicken, fugu and oysters in season; sake such as Hidakami (2026 reviews)',
    website: null, gmaps: gm('おそば宝来 祇園'), menu_url: null,
    notes: "[Soba · Gion, open to 2 am] A late-night counter in a Gion alley for 100% buckwheat soba and sake snacks — simmered octopus, karasumi mochi, sashimi — and surprises like green-curry soba. Sister of the popular 和食 宝来. About ¥5,000–15,000 depending on how far you go. Open until 2 am; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Operator: the 和食 宝来 group (no person named)'], origin: null,
      background: 'Opened 16 January 2024 (Tabelog) as a sister restaurant of 和食 宝来 (Tabelog remarks: "Washoku Horai Group of Restaurants"; September 2026 review). A January 2026 reviewer finds the main Horai better for soba but often fully booked.',
      philosophy: null, specialty: 'Juwari soba late at night.',
      anecdotes: [
        { text: 'A nine-time regular phoned after midnight in September 2026 and was eating by 12:30 am.', source: R + 'B478689715/' },
        { text: 'An April 2026 late-night diner found the green curry soba "surprisingly" well matched to the broth.', source: R + 'B526747356/' },
        { text: 'A February 2026 party of three spent ¥57,000 on the omakase course with a bottle of champagne in the upstairs room.', source: R + 'B522902260/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おそば宝来、そば、東山区祇園町北側338-4、月〜土 18:00〜翌2:00 (L.O. 1:00)、日曜休み、月2回ほど不定休、15席 (カウンター9、個室6)、分煙、子供可、2024年1月16日オープン、和食宝来グループ。口コミ (2026年1〜10月、英語): 和食宝来の姉妹店、深夜0時過ぎの電話予約、十割そば、鴨とかぼすのそば、牛すじと九条ねぎのそば、グリーンカレーそば、蛸の柔らか煮、からすみ餅、白海老の唐揚げ、鯖寿司、ふぐや牡蠣、2階の掘りごたつ、半量のそば。',
      confidence: 'medium', sources: [TB, R + 'B478689715/', R + 'B498402687/', R + 'B508521323/', R + 'B521154455/', R + 'B521280972/', R + 'B522902260/', R + 'B526747356/', R + 'B527722200/', R + 'B536212222/', R + 'B537207397/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night counter; book by phone, even same day.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側338-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004318, 135.776014); cross-checked: GSI 京都府京都市東山区祇園町北側338番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521154455/', R + 'B536212222/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Mori soba (cold juwari soba)', '', 'Soba', 'ask', 'ask', '', 'mori_soba'),
      it('', '', 'Duck soba with kabosu', '', 'Soba', 'ask', 'no', '', 'kamo_soba'),
      it('', '', 'Green curry soba', '', 'Soba', 'ask', 'no', '', 'green_curry_soba'),
    ] }, {
    cuisine: '和食宝来グループの深夜のそばと一品: 十割そば。もりそば、鴨とかぼすのそば、冷たい鴨そば、牛すじと九条ねぎのそば、グリーンカレーそば、白い薩摩芋と生姜のあんのそば、かけそば (2026年の口コミ)・刺身 (鰹、鱧、剣先イカ)、蛸の柔らか煮、鯖寿司、からすみ餅、白海老の唐揚げ、鱚の天ぷら、鴨ロース、鶏の山椒焼き、季節のふぐや牡蠣。日本酒は Hidakami など (2026年の口コミ)',
    neighborhood: '四条の北の祇園、細い路地。祇園四条駅から徒歩5分',
    gf_detail: '要確認。2026年9月の口コミではそばは十割だが、つゆ、天ぷら、一品の小麦は不明。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆのそば、鴨、牛すじ、刺身、天ぷら (2026年の口コミ)。',
    notes: '[そば・祇園、深夜2時まで] 祇園の路地にある深夜のカウンターで、十割そばと酒の肴 (蛸の柔らか煮、からすみ餅、刺身) に、グリーンカレーそばなどの変わり種も。人気の和食宝来の姉妹店。頼み方次第で5千〜1万5千円ほど。深夜2時まで、日曜休み。',
  });
}

// ================================================================ 京氷菓 つらら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032721/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://airrsv.net/kyototsurara/calendar';
  const W = day(['11:00', '19:00']), E = day(['10:30', '19:30']);
  put({
    id: 'kyoto_kyo_hyoka_tsurara', name: '京氷菓 つらら (Kyo Hyoka Tsurara)', category: 'OMNI',
    lat: 35.015015, lng: 135.739227, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice is naturally wheat-free, but toppings include pie, granola and tiramisu-style creams; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: most kakigori carry cream, mascarpone, milk or cheese (2025–26 reviews).',
    hours_raw: 'Mon, Wed–Fri 11:00–19:00 (last order 18:30); Sat, Sun and holidays 10:30–19:30 (last order 19:00); closed Tuesday, open on holiday Tuesdays (Tabelog). Bookings online only, opening at midnight two weeks ahead (Tabelog); walk-ins can wait in an air-conditioned waiting room nearby (September 2026), and in October booking was not needed (October 2026). Warm tea served with the ice (September 2026). 40 seats; children welcome; non-smoking; no cards — e-money and PayPay (Tabelog). 10 min from JR Nijo Stn; 3 min from the Senbon Kyu-Nijo bus stop (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinokyo west of Nijo Castle — 10 min from JR Nijo Stn',
    cuisine: 'Kakigori with seasonal fruit syrups and creams, changing through the year: chestnut caramel pie and Japanese chestnut hojicha milk, persimmon or grape with gorgonzola, fig and sansho cream cheese, strawberry mascarpone, tiramisu, peach and muscat in season, a pumpkin Halloween special (2025–26 reviews) · about ¥1,700 a bowl (September 2026)',
    website: SITE, gmaps: gm('京氷菓 つらら 京都'), menu_url: null,
    notes: "[Kakigori · near Nijo Castle] Kyoto's cult shaved-ice shop: fluffy ice built up with seasonal fruit, creams and surprising savoury notes — gorgonzola with grapes, fig with sansho cream cheese, chestnut caramel pie. About ¥1,700 a bowl, with warm tea. Book online two weeks ahead in summer. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 25 July 2019 (Tabelog). The menu changes with the seasons (2025–26 reviews).',
      philosophy: null, specialty: 'Seasonal fruit kakigori with cheese creams.',
      anecdotes: [
        { text: 'A 27-time visitor in October 2026 found the pumpkin flavour of the Halloween special weak and wanted more cassis sauce.', source: R + 'B476561340/' },
        { text: 'One visitor waited 30 minutes the previous August; booking online for September 2026 meant walking straight in at opening.', source: R + 'B535836711/' },
        { text: '"This is the place that got me hooked on shaved ice" — September 2026.', source: R + 'B536713836/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京氷菓 つらら、かき氷、中京区西ノ京内畑町22、JR二条駅から徒歩10分、月水木金 11:00〜19:00 (L.O. 18:30)、土日祝 10:30〜19:30 (L.O. 19:00)、火曜休み (祝日は営業)、予約はネットのみで2週間前の0時から、40席、カード不可・電子マネーと PayPay 可、2019年7月25日オープン。口コミ (2025年10月〜2026年10月、英語): 和栗のほうじ茶ミルク、栗のキャラメルパイ、柿や葡萄とゴルゴンゾーラ、無花果と山椒のクリームチーズ、苺のマスカルポーネ、ティラミス、かぼちゃ、温かいお茶、1,700円ほど。',
      confidence: 'medium', sources: [TB, R + 'B432424181/', R + 'B476561340/', R + 'B512210207/', R + 'B535148381/', R + 'B535836711/', R + 'B536117251/', R + 'B536365303/', R + 'B536713836/', R + 'B537340019/', R + 'B537392506/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online two weeks ahead in season; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京内畑町22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and its online booking calendar; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015015, 135.739227); cross-checked: GSI 京都府京都市中京区西ノ京内畑町22番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535836711/'],
    price_note: 'No menu read; about ¥1,700 a bowl per a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chestnut caramel pie kakigori', '¥1,700', 'Kakigori', 'no', 'no', 'September 2026 review.', 'chestnut_pie'),
      it('', '', 'Japanese chestnut hojicha milk kakigori', '', 'Kakigori', 'ask', 'no', 'October 2026 review.', 'waguri_hojicha'),
    ] }, {
    cuisine: '一年を通して替わる旬の果物のシロップとクリームのかき氷: 栗のキャラメルパイと和栗のほうじ茶ミルク、柿や葡萄とゴルゴンゾーラ、無花果と山椒のクリームチーズ、苺のマスカルポーネ、ティラミス、季節の桃やマスカット、ハロウィンのかぼちゃ (2025〜26年の口コミ)・1杯1,700円ほど (2026年9月)',
    neighborhood: '二条城の西の西ノ京。JR二条駅から徒歩10分',
    gf_detail: '要確認。氷自体に小麦はないが、パイ、グラノーラ、ティラミス風のクリームなどもある。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。多くのかき氷にクリーム、マスカルポーネ、ミルク、チーズ (2025〜26年の口コミ)。',
    notes: '[かき氷・二条城近く] 京都の人気かき氷店。ふわふわの氷に旬の果物やクリーム、意外な塩気を重ねる。葡萄とゴルゴンゾーラ、無花果と山椒のクリームチーズ、栗のキャラメルパイなど。1杯1,700円ほどで温かいお茶付き。夏は2週間前からネットで予約を。火曜休み。',
  });
}

// ================================================================ 野菜と魚 en
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042909/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '22:30']);
  put({
    id: 'kyoto_yasai_to_sakana_en', name: '野菜と魚 en (Yasai to Sakana en)', category: 'OMNI',
    lat: 35.002008, lng: 135.763812, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tempura, fried dishes, spring rolls and ponzu; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables are half the concept, but dishes often pair them with fish, salmon miso or bonito; only one or two meat dishes (Tabelog; August 2026).',
    hours_raw: '16:30–22:30 daily, closing days may vary (Tabelog). Cash only; two-hour limit; cancellations and party-size changes by the day before (Tabelog). Courses ¥5,000 and ¥6,000 with optional all-you-can-drink (Tabelog). 35 seats: a U-shaped counter of about 15 on the ground floor, tables for 20 upstairs; non-smoking (Tabelog; October 2026). In a renovated machiya south of Ayanokoji; 5 min from Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ayanokoji near Shijo-Karasuma, in a machiya alley — 5 min from Shijo Stn',
    cuisine: 'A "slightly more adult" izakaya of seasonal vegetables and fish: charcoal-grilled salmon potato salad, straw-smoked bonito with onions from an Awaji farm, tempura with house lemon pepper, namero, spring rolls of Aomori apple and sweet potato with Kumamoto ricotta, served on Shigaraki and antique ware (Tabelog) · in reviews: Awaji pepper with salmon miso, bonito tataki in ponzu jelly, nameko tempura, a whole warm eggplant, eel claypot rice (leftovers made into onigiri to take home), lemongrass sour (2026 reviews)',
    website: null, gmaps: gm('野菜と魚 en 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Vegetable-and-fish izakaya · near Shijo-Karasuma] The grown-up sister of 野菜酒場あしおと: a stylish machiya with a U-shaped counter, cooking seasonal vegetables and fish with care — straw-smoked bonito, lemon-pepper tempura — and claypot rice to finish (leftovers come back as onigiri). About ¥4,000–6,000. Cash only; book.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 17 April 2025 (Tabelog). Per the operator: born as a sister of あしおと (野菜酒場あしおと, a few doors away per reviewers), aimed at diners aged 30 to 50.',
      philosophy: null, specialty: 'Seasonal vegetables with fish; claypot rice.',
      anecdotes: [
        { text: 'Two August 2026 diners who could not finish the claypot rice were given the rest as onigiri to take home.', source: R + 'B534747627/' },
        { text: 'One August 2026 diner missed a wanted dish after an order mix-up, but was satisfied overall.', source: R + 'B534747627/' },
        { text: 'A September 2026 fan of the sister shop next door found the menu a little limited.', source: R + 'B537360391/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 野菜と魚 en、居酒屋、下京区綾小路柳馬場下ル永原町153-10、四条駅から徒歩5分、16:30〜22:30、休みは変動あり、現金のみ、2時間制、キャンセルと人数変更は前日まで、35席 (1階カウンター約15、2階テーブル20)、2025年4月17日オープン、あしおとの姉妹店、30〜50代向けの少し大人の酒場、鮭の炭火焼きポテサラ、藁焼きの戻り鰹と淡路島の玉ねぎ、自家製レモンペッパーの天ぷら、なめろう、青森の林檎と薩摩芋と熊本のリコッタの春巻き、信楽焼と骨董の器、5,000円と6,000円のコース。口コミ (2026年8〜10月、英語): 鮭味噌、鰹のたたきのポン酢ジュレ、なめこの天ぷら、焼き茄子、鰻の土鍋ご飯、残りはおにぎりに、レモングラスサワー。',
      confidence: 'medium', sources: [TB, R + 'B534686965/', R + 'B534747627/', R + 'B535433696/', R + 'B536158099/', R + 'B536346890/', R + 'B536629269/', R + 'B537199266/', R + 'B537360391/', R + 'B538082838/', R + 'B538143783/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; two-hour limit; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路柳馬場下ル永原町153-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002008, 135.763812); cross-checked: GSI 京都府京都市下京区永原町153番地 (lot) 20m; 57 m from mp_kuchibashi_modan (also 永原町153); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog\'s shop text; à la carte prices not read.', last_checked: TODAY, items: [
      it('', '', 'Course (with optional all-you-can-drink)', '¥5,000', 'Courses', 'ask', 'no', '¥6,000 course also offered.', 'course_5000'),
      it('', '', 'Charcoal-grilled salmon potato salad', '', 'Small plates', 'ask', 'no', 'Tabelog.', 'salmon_potesara'),
    ] }, {
    cuisine: '「少し大人の酒場」の旬の野菜と魚: 鮭の炭火焼きポテトサラダ、淡路島の農園の玉ねぎと藁で燻した鰹、自家製レモンペッパーの天ぷら、なめろう、青森の林檎と薩摩芋と熊本のリコッタの春巻き。信楽焼や骨董の器で (食べログ)・口コミの料理: 淡路島のピーマンと鮭味噌、鰹のたたきのポン酢ジュレ、なめこの天ぷら、丸ごとの焼き茄子、鰻の土鍋ご飯 (残りはおにぎりにして持ち帰り)、レモングラスサワー (2026年の口コミ)',
    neighborhood: '四条烏丸に近い綾小路、町家の路地。四条駅から徒歩5分',
    gf_detail: '要確認。天ぷら、揚げ物、春巻き、ポン酢。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。野菜が主役のひとつだが、魚、鮭味噌、鰹と合わせる皿が多い。肉料理は1〜2品 (食べログ、2026年8月)。',
    notes: '[野菜と魚の居酒屋・四条烏丸近く] 野菜酒場あしおとの大人向けの姉妹店。U字のカウンターのあるおしゃれな町家で、旬の野菜と魚を丁寧に料理する。藁で燻した鰹、レモンペッパーの天ぷら、締めの土鍋ご飯 (残りはおにぎりに)。4千〜6千円ほど。現金のみ、予約を。',
  });
}

save();
