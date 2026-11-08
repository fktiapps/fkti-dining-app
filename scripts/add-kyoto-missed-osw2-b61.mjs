// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 61.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   - 居酒屋まるや 四条木屋町店 — thin (2025–26 reviews are one line each)
//   + バー アルケミスト Bar Alchemist (hidden-door cocktail bar at the Shijo end of Pontocho)
//   - イヅツカフェ — large parent (井筒八ッ橋本舗), as 井筒茶店
//   - カフェ ラ シエスタ — no review since 2019
//   + 居酒屋 フクロウ 先斗町 Izakaya Fukurou (obanzai, sushi and hot pots on Pontocho, open to 3 am; since 2024)
//   - 炭と海鮮と串焼きと肴 とっとっと 四条河原町店 — chain
//   - 京都焼肉 南大門 四条寺町店 — large parent (第一物産), as the earlier 南大門 ruling
//   - 焼肉食べ放題やる気 四条河原町店 — chain
//   - ひといき 京都木屋町店 — operator and name not established
//   - カイダンノソノサキ — thin (one review, 2024)
//   - 旬魚旬菜ダイニング 先斗町 あじ屋 — thin (the only 2025–26 review is empty)
//   + 喫茶 上ル Kissa Agaru (tatami tea room over the Takase River; mini dorayaki and shaved ice; since 2014)
//   + 京都鴨川倶楽部 Kyoto Kamogawa Club (Italian in a townhouse on Kiyamachi with a Kamo riverside yuka; chef Noriaki Mori)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: rulings followed for 南大門 and 井筒.
//   Service charges: Alchemist ¥800 charge; Fukurou ¥500 charge; Kamogawa Club 10% service and ¥1,000 riverside-floor charge (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only. Alchemist (town-level GSI only, approximate) offset ~3 m; 喫茶 上ル ~8 m off GYUMON Volcano (1 m);
//   京都鴨川倶楽部 ~9 m off 日本料理 とくを (same lot, 天王町151); each now 9 m+ from every pin on main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023479', '居酒屋まるや 四条木屋町店: too thin to verify — an all-you-can-eat party izakaya whose only 2025–26 reviews are one or two lines (February 2025, February 2026); sister 居酒屋 まるや was skipped as thin (osw1-58), operator not established');
skip('26022339', 'イヅツカフェ: café of the yatsuhashi maker 井筒八ッ橋本舗 (Tabelog links yatsuhashi.co.jp) — same large-parent ruling as 井筒茶店 (26025006)');
skip('26006793', 'カフェ ラ シエスタ: no 2025–26 review — the latest of 3 Tabelog reviews is from 2019');
skip('26042169', '炭と海鮮と串焼きと肴 とっとっと 四条河原町店: a chain — our Osaka crawl lists とっとっと at Namba Sennichimae, Umeda Higashi-dori and Umeda Ohatsu-tenjin');
skip('26030403', '京都焼肉 南大門 四条寺町店: a brand of a large parent — 株式会社第一物産, same ruling as the 南大門 shop skipped earlier (26031082)');
skip('26034531', '焼肉食べ放題やる気 四条河原町店: a chain — five やる気 yakiniku shops in our Kyoto crawl (Kyoto-ekimae, Ekimae-nishi PREMIUM, Hachijo-guchi, Karasuma-oike, Shijo-Kawaramachi)');
skip('26033571', 'ひといき 京都木屋町店: operator and name not established — reviewers found the same floor trading as "Tsubaki" (November 2022) and "Momiji" (June 2025); a party all-you-can-eat izakaya; not drafted');
skip('26041191', 'カイダンノソノサキ: thin — one Tabelog review (May 2024), no 2025–26 review');
skip('26012709', '旬魚旬菜ダイニング 先斗町 あじ屋: thin — the only 2025–26 review (June 2025) has no text; the rest date from 2013–2023');

// ================================================================ バー アルケミスト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029731/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '01:00']);
  put({
    id: 'kyoto_bar_alchemist_pontocho', name: 'バー アルケミスト (Bar Alchemist)', category: 'OMNI',
    lat: 35.004027, lng: 135.77097, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cocktails, gin and whisky; ingredients not published (reviews).',
    hours_raw: '15:00–01:00 daily; hours may change (Tabelog; a 2024 review says from 16:00). Reservations taken. Cards (JCB, AMEX, Diners) and PayPay accepted (Tabelog). ¥800 cover charge (Tabelog). 50 seats; smoking allowed (Tabelog). The entrance is a hidden door in a wall of bottles behind a tanuki statue — staff open it if you look lost (2023–2026 reviews). Many foreign guests (2024–2025 reviews). On the 2nd floor of the Katsuya Building at the Shijo entrance to Pontocho, about 100 m from Gion-Shijo Stn (Tabelog; 2024–2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, at the Shijo end — about 100 m from Gion-Shijo Stn',
    cuisine: 'Speakeasy-style cocktail bar with a library-like room (2023–2026 reviews) · cocktails from chosen spirits — e.g. a sansho-scented Hokkaido craft gin, a lemongrass cocktail, the yuzu "Sky Ball", pisco sour, mojito and shiso mojito (2024–2026) · rare whiskies such as GlenDronach and Springbank (December 2024) · four drinks with the charge came to ¥5,700 (March 2023)',
    website: null, gmaps: gm('Bar Alchemist 先斗町'), menu_url: TB,
    notes: "[Cocktail bar · Pontocho, through a hidden door] A speakeasy above the Shijo end of Pontocho: find the wall of bottles behind the tanuki and the door opens. Inside, a wood-panelled library room for careful cocktails from craft gins and rare whiskies. Open from mid-afternoon to 1 am; ¥800 charge; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Bartenders not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a hidden-door cocktail bar off Pontocho with a library-like interior and friendly bartenders; a January 2025 guest was told by a bartender that the same brand has several bars in Kyoto with different concepts.',
      philosophy: null,
      specialty: 'Cocktails from selected craft spirits.',
      anecdotes: [
        { text: 'A March 2023 visitor chatted with the owner, the manager and the head bartender, and found the bar easy for newcomers.', source: R + 'B466762907/' },
        { text: 'A December 2025 guest found the entrance behind a cute tanuki statue and felt transported abroad.', source: R + 'B520176506/' },
        { text: 'An August 2025 party crossed the street from a riverside dinner for an after-party in the library room.', source: R + 'B512428729/' },
      ],
      japanese_sources_summary: '食べログ: バー アルケミスト、バー、京都市中京区柏屋町170 かつやビル2F、祇園四条駅から105m、毎日15:00〜翌1:00、予約可、カード (JCB・AMEX・Diners)・PayPay可、チャージ800円、50席、喫煙可。口コミ (2023〜2026年、英語): 先斗町の四条側の入口近くのビル2階、ワインボトルの棚と狸の置物の奥の隠し扉、図書館のような内装、北海道積丹のクラフトジン、レモングラスのカクテル、柚子の「スカイボール」、ピスコサワー、モヒート、紫蘇モヒート、グレンドロナック、スプリングバンク、4杯とチャージで5,700円 (2023年3月)、外国からの客が多い、京都に同じブランドの店が数軒 (バーテンダーの話、2025年1月)。',
      confidence: 'low', sources: [TB, R + 'B432371020/', R + 'B466762907/', R + 'B489283956/', R + 'B494964781/', R + 'B498369489/', R + 'B500060769/', R + 'B512428729/', R + 'B515772917/', R + 'B520176506/', R + 'B522481085/'] },
    cultural_comfort: { level: 'english', note: 'Many foreign guests; cards accepted; ¥800 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区柏屋町170 かつやビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.004054, 135.770976), offset ~3m to clear とんかつ きんとん (6m); cross-checked: GSI 京都府京都市中京区柏屋町 (town only, no lot) 29m — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B432371020/', R + 'B489283956/', R + 'B522481085/'],
    price_note: 'No published drink prices; four drinks with the charge came to ¥5,700 in March 2023.', last_checked: TODAY, items: [
      it('', '', 'Sky Ball (yuzu gin and tonic)', '', 'Cocktails', 'ask', 'ask', '', 'sky_ball'),
      it('', '', 'Shiso mojito', '', 'Cocktails', 'ask', 'ask', '', 'shiso_mojito'),
      it('', '', 'Pisco sour', '', 'Cocktails', 'ask', 'ask', '', 'pisco_sour'),
    ] }, {
    cuisine: '図書館のような部屋の隠れ家風カクテルバー (2023〜2026年の口コミ)・選んだスピリッツのカクテル、たとえば山椒が香る北海道のクラフトジン、レモングラスのカクテル、柚子の「スカイボール」、ピスコサワー、モヒート、紫蘇モヒート (2024〜2026年)・グレンドロナックやスプリングバンクなど希少なウイスキー (2024年12月)・4杯とチャージで5,700円 (2023年3月)',
    neighborhood: '先斗町の四条側。祇園四条駅から100mほど',
    gf_detail: '要確認。カクテルとウイスキーのバー。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。カクテル、ジン、ウイスキー。材料は公開されていない (口コミ)。',
    notes: '[カクテルバー・先斗町、隠し扉の奥] 先斗町の四条側のビル2階の隠れ家バー。狸の置物の奥、ボトルの壁が扉になっている。中は木の図書館のような部屋で、クラフトジンや希少なウイスキーの丁寧なカクテル。午後から深夜1時まで、チャージ800円、喫煙可。',
  });
}

// ================================================================ 居酒屋 フクロウ 先斗町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040663/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '03:00']);
  put({
    id: 'kyoto_izakaya_fukurou_pontocho', name: '居酒屋 フクロウ 先斗町 (Izakaya Fukurou)', category: 'OMNI',
    lat: 35.004474987873415, lng: 135.77094089034932, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai with dashi and miso, sushi, sukiyaki and shabu-shabu; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, sushi and meat hot pots. Yuba sashimi and eggplant dishes are on the menu — ask about dashi (Tabelog menu).',
    hours_raw: '15:00–03:00 daily (Tabelog). Reservations taken. Cards accepted (Tabelog). ¥500 charge with an appetizer (Tabelog; May 2026). 80 seats: 70 at tables and 10 in semi-private rooms; heated-tobacco area only (Tabelog). QR-code ordering (October 2025). Window seats over the Takase River (March 2025). On the 3rd floor of the Forum Pontocho Building, reached by an old lift, north of Shijo (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — near Gion-Shijo Stn',
    cuisine: 'Kyoto obanzai izakaya with local sake from Fushimi and Shiga, opened March 2024 (Tabelog) · obanzai: yuba sashimi ¥780, fried eggplant in dashi ¥680, manganji peppers with shirasu ¥680, dashimaki ¥680 or with ikura ¥1,180 (Tabelog menu, August 2026) · sushi by the pair: bluefin akami ¥600, chutoro ¥1,000, salmon or sea bream ¥500; hand rolls from ¥500 (Tabelog menu) · wagyu sukiyaki and shabu-shabu, pork shabu-shabu ¥1,500, simmered eggplant (2025–2026 reviews) · courses, e.g. sushi course ¥6,000 (August 2025)',
    website: null, gmaps: gm('居酒屋 フクロウ 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Pontocho, obanzai and sushi till 3 am] A calm third-floor izakaya on Pontocho, some tables looking down on the Takase River, open from mid-afternoon to 3 am. Small Kyoto obanzai plates — yuba, eggplant, manganji peppers — from about ¥700, sushi by the pair, and sukiyaki or shabu-shabu pots, with Fushimi sake. ¥500 charge.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in March 2024 (Tabelog). The shop describes a Pontocho izakaya of obanzai using yuba and nama-fu, with local sake from Fushimi and Shiga (Tabelog). Reviewers (2024–2026) found a quiet room suited to conversation.',
      philosophy: null,
      specialty: 'Kyoto obanzai small plates.',
      anecdotes: [
        { text: 'A March 2025 diner had a window seat over the Takase River and tried both sukiyaki and shabu-shabu.', source: R + 'B503667472/' },
        { text: 'A November 2025 guest got lost in the old building’s lift before finding a warm room and a generous sukiyaki pot.', source: R + 'B517183912/' },
        { text: 'A May 2026 second-round visitor found the pork shabu-shabu broth gentle and good.', source: R + 'B527495995/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 フクロウ 先斗町、居酒屋・日本料理・鍋、京都市中京区先斗町四条上る鍋屋町220-1 フォーラム先斗町ビル3F、毎日15:00〜翌3:00、予約可、カード可、チャージ500円、80席 (テーブル70、半個室10)、加熱式たばこのみの喫煙所、2024年3月1日オープン、湯葉や生麩のおばんざい、伏見と滋賀の地酒。メニュー (2026年8月): 湯葉刺し780円、揚げ茄子の煮びたし680円、万願寺とうがらしとしらす680円、だし巻680円、いくらのせ1,180円、寿司2貫 (本鮪赤身600円、中トロ1,000円、サーモン・鯛500円)、手巻き500円から。口コミ (2024〜2026年、英語): 落ち着いた店内、高瀬川の見える窓際の席、すき焼きとしゃぶしゃぶ、豚しゃぶ1,500円、お通しは南蛮漬け、寿司のコース6,000円、QRコードで注文、古いビルのエレベーター。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B483072686/', R + 'B483387092/', R + 'B483492541/', R + 'B503667472/', R + 'B511487530/', R + 'B515916687/', R + 'B517183912/', R + 'B527495995/', R + 'B530913388/'] },
    cultural_comfort: { level: 'english', note: 'QR ordering; cards accepted; ¥500 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上る鍋屋町220-1 フォーラム先斗町ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated August 2026); reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004475, 135.770941); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated August 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Yuba (tofu skin) sashimi', '¥780', 'Obanzai', 'ask', 'ask', '', 'yuba'),
      it('', '', 'Fried eggplant in dashi', '¥680', 'Obanzai', 'ask', 'ask', '', 'nasu'),
      it('', '', 'Manganji peppers with shirasu and sansho', '¥680', 'Obanzai', 'ask', 'no', '', 'manganji'),
      it('', '', 'Dashimaki omelette with ikura', '¥1,180', 'Obanzai', 'ask', 'no', '', 'dashimaki_ikura'),
      it('', '', 'Bluefin tuna akami sushi, 2 pieces', '¥600', 'Sushi', 'ask', 'no', '', 'akami'),
      it('', '', 'Bluefin chutoro sushi, 2 pieces', '¥1,000', 'Sushi', 'ask', 'no', '', 'chutoro'),
      it('', '', 'Pork shabu-shabu', '¥1,500', 'Hot pot', 'ask', 'no', 'May 2026 review.', 'pork_shabu'),
    ] }, {
    cuisine: '伏見と滋賀の地酒とおばんざいの居酒屋、2024年3月開業 (食べログ)・おばんざい: 湯葉刺し780円、揚げ茄子の煮びたし680円、万願寺とうがらしとしらす680円、だし巻680円、いくらのせ1,180円 (食べログのメニュー、2026年8月)・寿司2貫: 本鮪赤身600円、中トロ1,000円、サーモン・鯛500円、手巻き500円から (食べログのメニュー)・和牛のすき焼きとしゃぶしゃぶ、豚しゃぶ1,500円、茄子の煮物 (2025〜2026年の口コミ)・コース、たとえば寿司のコース6,000円 (2025年8月)',
    neighborhood: '先斗町、四条の北。祇園四条駅の近く',
    gf_detail: '要確認。出汁や味噌のおばんざい、寿司、すき焼き、しゃぶしゃぶ。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、寿司、肉の鍋。湯葉刺しや茄子の料理はある、出汁は要確認 (食べログのメニュー)。',
    notes: '[居酒屋・先斗町、おばんざいと寿司を深夜3時まで] 先斗町のビル3階の落ち着いた居酒屋。高瀬川を見下ろす席も。午後から深夜3時まで。湯葉、茄子、万願寺とうがらしなどのおばんざいは700円ほどから、2貫ずつの寿司、すき焼きやしゃぶしゃぶの鍋、伏見の地酒と。チャージ500円。',
  });
}

// ================================================================ 喫茶 上ル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024409/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '18:00']);
  put({
    id: 'kyoto_kissa_agaru', name: '喫茶 上ル (Kissa Agaru)', category: 'OMNI',
    lat: 35.001197, lng: 135.769242, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mini dorayaki (a wheat pancake sweet), ice monaka in wafer shells, shaved ice and pudding; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Shaved ice, red bean paste and homemade ginger drinks are on the menu; milk drinks, ice cream and dorayaki are not vegan (reviews).',
    hours_raw: '11:45–18:00; closed Wednesday and Thursday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog; March 2025). About 10 seats, 6 along the window over the Takase River; shoes off, tatami; non-smoking (Tabelog; March 2025). A quiet café — a sign asks guests to keep voices down, and photos are limited (2024–2025 reviews). Can mean a wait in busy seasons; mini dorayaki sell out and are not made in summer (2023–2025 reviews). On Nishikiyamachi above Bukkoji, 5 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishikiyamachi above Bukkoji, on the Takase River — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Tatami tea room in a townhouse on the Takase River, opened 2014 (Tabelog) · mini dorayaki made to order (2024–2025) · ice monaka in matcha or milk ¥250, extra red bean paste ¥50 (June 2025) · finely shaved ice, e.g. strawberry milk (2023–2025) · homemade ginger syrup: ginger ale ¥650 (2023), hot ginger milk ¥700 (March 2025) · matcha au lait ¥750 (June 2025); freshly roasted coffee, café au lait, crème caramel',
    website: null, gmaps: gm('喫茶 上ル 西木屋町'), menu_url: TB,
    notes: "[Kissaten · Takase River, tatami and mini dorayaki] A tiny townhouse tea room on Nishikiyamachi where you take off your shoes and sit on tatami by a window over the Takase River (herons included). Mini dorayaki made to order, ice monaka (¥250), powder-fine shaved ice and homemade ginger drinks. Quiet, cash only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in May 2014 (Tabelog). Reviewers (2023–2025) describe a traditional townhouse café along the Takase River with tatami, a few riverside seats, a request for quiet and homemade ginger syrup.',
      philosophy: null,
      specialty: 'Mini dorayaki and ice monaka.',
      anecdotes: [
        { text: 'A January 2025 visitor hoped it would be open on New Year’s Day, and it was.', source: R + 'B498750991/' },
        { text: 'A June 2025 couple sharing one shaved ice were pleased to be given two spoons, and watched a heron outside.', source: R + 'B509218620/' },
        { text: 'A March 2025 solo reader found it the perfect place for a book.', source: R + 'B508324533/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶 上ル、喫茶店・カフェ、京都市下京区西木屋町通仏光寺上ル市之町260、阪急河原町駅から徒歩約5分、11:45〜18:00、水木定休、カード・電子マネー・QR不可、禁煙、2014年5月24日オープン。口コミ (2023〜2025年、英語): 高瀬川沿いの町家の喫茶、靴を脱いで畳に座る、川沿いの席が6席ほど、静かにという貼り紙、写真は控えめに、ミニどら焼き (夏はない、売り切れることも)、アイスもなか250円 (抹茶とミルク)、あんこ50円、ふわふわのかき氷 (いちごミルク)、自家製ジンジャーシロップのジンジャーエール650円、ホットジンジャーミルク700円、抹茶オレ750円、自家焙煎のコーヒー、カフェオレ、プリン、サギが見える。',
      confidence: 'low', sources: [TB, R + 'B138336947/', R + 'B467759190/', R + 'B471424347/', R + 'B489088523/', R + 'B498750991/', R + 'B503484742/', R + 'B508324533/', R + 'B509218620/', R + 'B515533998/', R + 'B527944794/'] },
    cultural_comfort: { level: 'japanese', note: 'Shoes off; tatami; cash only; keep quiet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町通仏光寺上ル市之町260',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2025. The website on Tabelog (agaru.coffee) did not respond on 2026-11-07.' },
    pin_source: `Tabelog ${TB} (35.001260, 135.769292), offset ~8m to clear GYUMON Volcano (1m); cross-checked: GSI 京都府京都市下京区市之町260番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B138336947/', R + 'B503484742/', R + 'B515533998/'],
    price_note: 'Prices from 2023 and 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mini dorayaki', '', 'Sweets', 'no', 'no', 'Not in summer; can sell out.', 'dorayaki'),
      it('', '', 'Ice monaka (matcha or milk)', '¥250', 'Sweets', 'ask', 'no', 'June 2025.', 'ice_monaka'),
      it('', '', 'Shaved ice (e.g. strawberry milk)', '', 'Sweets', 'ask', 'ask', '', 'kakigori'),
      it('', '', 'Homemade ginger ale', '¥650', 'Drink', 'ask', 'ask', '2023.', 'ginger_ale'),
      it('', '', 'Hot ginger milk', '¥700', 'Drink', 'ask', 'no', 'March 2025.', 'ginger_milk'),
      it('', '', 'Matcha au lait', '¥750', 'Drink', 'ask', 'no', 'June 2025.', 'matcha_aulait'),
    ] }, {
    cuisine: '高瀬川沿いの町家の畳の喫茶、2014年開業 (食べログ)・その場で焼くミニどら焼き (2024〜2025年)・抹茶かミルクのアイスもなか250円、あんこ追加50円 (2025年6月)・ふわふわのかき氷、たとえばいちごミルク (2023〜2025年)・自家製ジンジャーシロップのジンジャーエール650円 (2023年)、ホットジンジャーミルク700円 (2025年3月)・抹茶オレ750円 (2025年6月)、自家焙煎のコーヒー、カフェオレ、プリン',
    neighborhood: '西木屋町の仏光寺上ル、高瀬川沿い。京都河原町駅から徒歩5分',
    gf_detail: '要確認。ミニどら焼き (小麦の生地)、もなかの皮のアイスもなか、かき氷、プリン。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。かき氷、あんこ、自家製ジンジャーの飲み物がある。ミルクの飲み物、アイス、どら焼きはヴィーガン不可 (口コミ)。',
    notes: '[喫茶・高瀬川、畳とミニどら焼き] 西木屋町の小さな町家の喫茶。靴を脱いで畳に上がり、高瀬川を望む窓辺に座る (サギも来る)。その場で焼くミニどら焼き、アイスもなか (250円)、ふわふわのかき氷、自家製ジンジャーの飲み物。静かに、現金のみ、水木休み。',
  });
}

// ================================================================ 京都鴨川倶楽部
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006475/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kamogawaclub.com/';
  const H = day(['12:00', '14:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_kamogawa_club', name: '京都鴨川倶楽部 (Kyoto Kamogawa Club)', category: 'OMNI',
    lat: 35.001245, lng: 135.769743, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses built around two pastas and house bread; the site invites guests to tell the kitchen about allergies and dislikes when booking (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Italian courses with meat, fish and cheese (official site; reviews). Ask about requests when booking (official site).',
    hours_raw: 'Lunch 12:00–14:30 (book at least two days ahead); dinner 18:00–23:00 (last order 22:00); closed Wednesday (official site; Tabelog). Reservations by phone or booking sites; cancellation fees from two days before (official site). Cards, e-money and QR accepted (Tabelog). Dinner courses exclude a 10% service charge; ¥1,000 charge for the riverside yuka floor (official site; Tabelog). 36 seats: 1st-floor counter, a riverside yuka over the Kamo in season, and four private rooms for 4–12; shoes off at the entrance; non-smoking; Japanese and English menus (official site; Tabelog; January 2025). Blankets on cool yuka evenings (May 2026). Down a narrow stone path off Kiyamachi above Bukkoji, 3 min from Kyoto Kawaramachi Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi above Bukkoji, on the Kamo River — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Italian in a Kyoto townhouse, cooked by a chef trained in Tuscany and the Veneto (official site) · seasonal dinner courses of 6 dishes ¥9,000 and 8 dishes ¥12,000, plus service (official site; ¥10,000 for the 6-dish course from 1 December 2026) · lunch course of 5 dishes ¥4,500 (¥5,000 from 1 December 2026) (official site) · e.g. crab and Kujo green onion pasta, Tuscan lampredotto, Piedmontese veal, grilled ayu, hamo salad (2024–2026 reviews) · a la carte from vegetable sticks with anchovy fondue sauce ¥1,800 (official site) · 70+ wines and rare Japanese whiskies (official site)',
    website: SITE, gmaps: gm('京都鴨川倶楽部'), menu_url: SITE + 'dinner/',
    notes: "[Italian · Kiyamachi, a townhouse on the Kamo yuka] Down a lantern-lit stone path off Kiyamachi, a townhouse Italian whose summer tables sit on a yuka platform over the Kamo River. Chef Noriaki Mori, trained in Tuscany and the Veneto, cooks seasonal courses — two pastas, a meat main — from ¥9,000 at dinner, ¥4,500 at lunch (book two days ahead). Private rooms; closed Wednesday.",
    chef_bio: { chef_name: '森 法明 (Noriaki Mori)', roles: ['Head chef'], origin: null,
      background: 'The official site says Noriaki Mori set out to be a cook at 19, trained at 27 in Tuscany and at the Michelin-listed Ristorante La Peca in the Veneto, and became head chef of Kyoto Kamogawa Club in 2007; the cooking renders Italian flavours faithfully with Japanese touches. The restaurant is run by 株式会社シティビルサービス of Shimogyo (National Tax Agency invoice register T5130001014642).',
      philosophy: 'Orthodox Italian with Kyoto delicacy, built on seasonal ingredients; courses change with the season and the year (official site).',
      specialty: 'Seasonal Italian courses with two pastas.',
      anecdotes: [
        { text: 'An August 2024 guest from Shizuoka was taken to the riverside terrace by a partner for a birthday dinner.', source: R + 'B491742490/' },
        { text: 'A December 2024 lunch guest loved the crab and Kujo green onion pasta from the cover photo, though found portions small.', source: R + 'B497501625/' },
        { text: 'A September 2026 diner who had asked for the riverside was relieved that an indoor seat was also held in case of rain.', source: R + 'B536366278/' },
      ],
      japanese_sources_summary: '公式サイト: 京都鴨川倶楽部、木屋町の一角に佇む京の町家イタリアン、四条から木屋町を少し下がった小さな行燈と細い石畳のアプローチ、京都市下京区木屋町通仏光寺上ル天王町151番地、ランチ12:00〜14:30 (2日前までの予約制)、ディナー18:00〜23:00 (L.O.22:00)、水曜定休、36席 (個室4部屋、4〜12名)、日本語・英語メニュー、アレルギーや希望の食材は相談可、70種以上のワインと希少なジャパニーズウイスキー。料理長 森法明: 19歳で料理人を志し、27歳でイタリアのトスカーナ州、ヴェネト州のミシュラン掲載店「Ristorante La Peca」で研鑽、2007年に料理長。季節のディナーコース6品9,000円・8品12,000円 (税込・サ別)、ランチ5品コース4,500円、2026年12月1日から価格改定 (ランチ5品5,000円、ディナー6品10,000円)。アラカルト: 野菜スティックとアンチョビフォンデュのソース1,800円、トスカーナ風前菜盛り合わせ。食べログ: サービス料10%、床席料1,000円、カード・電子マネー・QR可、禁煙、インボイス T5130001014642 (株式会社シティビルサービス)。口コミ (2024〜2026年、英語): 鴨川の床、靴を脱ぐ、個室、蟹と九条ねぎのパスタ、ランプレドット、ピエモンテ産仔牛、鮎、鱧のサラダ、ワインペアリング、床では肌寒い夜に膝掛け。',
      confidence: 'medium', sources: [SITE, SITE + 'chef/', SITE + 'dinner/', SITE + 'a-la-carte/', SITE + '819/', TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001014642', R + 'B113129125/', R + 'B491742490/', R + 'B495060556/', R + 'B497501625/', R + 'B500098888/', R + 'B506856173/', R + 'B509307050/', R + 'B520812589/', R + 'B529297103/', R + 'B536366278/'] },
    cultural_comfort: { level: 'english', note: 'English menu; cards accepted; book ahead; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通仏光寺上ル天王町151',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (price notice dated 1 November 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001294, 135.769666), offset ~9m to clear 日本料理 とくを (same lot, 0.2m); cross-checked: GSI 京都府京都市下京区天王町151番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'dinner/', SITE + '819/', SITE + 'a-la-carte/'],
    price_note: 'Course prices from the official site (November 2026); dinner courses exclude 10% service. New prices from 1 December 2026.', last_checked: TODAY, items: [
      it('', '', 'Seasonal dinner course, 6 dishes (starters, two pastas, meat, dessert, bread, coffee)', '¥9,000', 'Dinner', 'ask', 'no', 'Plus service; ¥10,000 from 1 December 2026.', 'dinner6'),
      it('', '', 'Seasonal dinner course, 8 dishes', '¥12,000', 'Dinner', 'ask', 'no', 'Plus service.', 'dinner8'),
      it('', '', 'Lunch course, 5 dishes', '¥4,500', 'Lunch', 'ask', 'no', 'Book two days ahead; ¥5,000 from 1 December 2026.', 'lunch5'),
      it('野菜スティックとアンチョビフォンデュのソース', '', 'Vegetable sticks with anchovy fondue sauce', '¥1,800', 'A la carte', 'ask', 'no', '', 'veg_sticks'),
    ] }, {
    cuisine: 'トスカーナとヴェネトで修業した料理長の町家イタリアン (公式サイト)・季節のディナーコース6品9,000円、8品12,000円、サービス料別 (公式サイト。2026年12月1日から6品は10,000円)・ランチ5品コース4,500円 (2026年12月1日から5,000円) (公式サイト)・たとえば蟹と九条ねぎのパスタ、トスカーナのランプレドット、ピエモンテ産仔牛、鮎の焼き物、鱧のサラダ (2024〜2026年の口コミ)・アラカルトは野菜スティックとアンチョビフォンデュのソース1,800円から (公式サイト)・70種以上のワインと希少なジャパニーズウイスキー (公式サイト)',
    neighborhood: '木屋町の仏光寺上ル、鴨川沿い。京都河原町駅から徒歩3分',
    gf_detail: '要確認。パスタ2種と自家製パンのコース。アレルギーや苦手な食材は予約時に相談を (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。肉、魚、チーズのイタリアンのコース (公式サイト、口コミ)。希望は予約時に相談を (公式サイト)。',
    notes: '[イタリアン・木屋町、鴨川の床の町家] 木屋町の行燈と細い石畳の奥、夏は鴨川の床に席が出る町家のイタリアン。トスカーナとヴェネトで修業した森法明シェフの季節のコースは、パスタ2種と肉料理で夜9,000円から、昼4,500円から (2日前までに予約)。個室あり、水曜休み。',
  });
}

save();
