// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 34.
//   + KYOTO BISTRO (Park Hyatt Kyoto's all-day bistro and café on Ninenzaka)
//   + うえと Ueto (salon and bar from 14:00, sansho gin and tonics, by Higashiyama Stn)
//   + 食堂デイズ Shokudo Days (omurice at lunch, bistro and wine at night, Shijo Kawaramachi)
//   + 千本玉壽軒 Senbon Tamajuken (Nishijin wagashi maker since 1938, with a tea room next door)
//   - skip 26042704 神戸牛 鉄板焼き 先斗町 之いち (sub-brand of the 神戸牛 吉祥吉 group, about 50 shops)
//   - skip 26017642 白碗竹快樓 祇園店 (brand of the KIWA group, 267 directly run restaurants)
//   Same-name counts first, per brand or operator (2026-11-06): KYOTO BISTRO — one; Park Hyatt Kyoto has no hotel-wide
//   record (its teppanyaki 八坂 was drafted in osw6-33). うえと — one. 食堂デイズ — one. 千本玉壽軒 — one shop; per the official
//   site its founder trained at 本家玉壽軒 and set up independently in 1938, so the two are separate businesses (本家玉壽軒 is not
//   in data). 之いち — its site (kisshokichi-kyoto.com) belongs to 神戸牛 吉祥吉, "about 50 Kobe beef shops, mainly in Kobe,
//   Osaka and Tokyo", which also franchises; Tabelog shows two more Kyoto shops of the same naming. 白碗竹快樓 — its site sits
//   under kiwa-group.co.jp, whose company page lists 267 directly run restaurants (31 October 2025).
//   Taken on 2026-11-06: `next core 200` (lane) gave KYOTO BISTRO 26033428 and うえと 26017726; `next notable 200` (lane) gave
//   之いち 26042704 (skip), 白碗竹快樓 26017642 (skip), 食堂デイズ 26034760 and 千本玉壽軒 26003746. None is in data/kyoto.json:
//   grep by name and address (高台寺桝屋町360 — shared with kyoto_yasaka_park_hyatt — 今小路町91-1, 稲荷町330-3, 上善寺町96)
//   found none.
//   Service charges per Tabelog's Japanese original: KYOTO BISTRO 「なし」; 食堂デイズ 「サービス料、チャージ料なし」; うえと and
//   千本玉壽軒 none listed. No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042704', 'sub-brand of a large parent: the official site (https://kisshokichi-kyoto.com/pontochonoichi/) belongs to 神戸牛 吉祥吉, which describes itself as a group of about 50 Kobe beef shops, mainly in Kobe, Osaka and Tokyo, and recruits franchisees (https://kisshokichi-kyoto.com/).');
skip('26017642', 'brand of a large parent: 白碗竹快樓’s site sits under the KIWA group (https://kiwa-group.co.jp/baiwan_gion/), whose company page lists 267 directly run restaurants as of 31 October 2025 (https://kiwa-group.co.jp/company/); Tabelog also lists Akasaka and Futako-Tamagawa shops.');

// ================================================================ KYOTO BISTRO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033428/'; const R = TB + 'dtlrvwlst/';
  const HY = 'https://www.hyatt.com/ja-JP/hotel/japan/park-hyatt-kyoto/itmph/dining';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_kyoto_bistro_park_hyatt', name: 'KYOTO BISTRO (Park Hyatt Kyoto)', category: 'OMNI',
    lat: 34.998932, lng: 135.78088, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro menu with pasta, a katsu sandwich and cream puffs (2025–26 reviews); no gluten information. One July 2026 diner’s advance request to change sauces was not carried through, so confirm any request on the day.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; no vegan information.',
    hours_raw: 'Lunch 11:30–17:00, dinner 17:00–21:00 (last order 20:00), daily; breakfast 7:30–10:30 is for hotel guests only (Tabelog). Seating limits: 90 min at lunch, 60 min for coffee, 120 min at dinner (Tabelog). Reservations accepted (Tabelog). No service or cover charge (Tabelog, Japanese text: 「なし」; October 2026). Cards; no e-money or QR (Tabelog). 120 seats — 70 downstairs, 50 upstairs with private rooms at ¥20,000 (before tax) for 2 hours (Tabelog). Non-smoking; English menu; children, kids menu and strollers welcome; wheelchair accessible (Tabelog). On the Ninenzaka side of Park Hyatt Kyoto, 6 min from the Higashiyama Yasui bus stop; hotel valet parking ¥2,000 for up to 4 hours (Tabelog; June 2025). Opened 30 October 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ninenzaka, in Park Hyatt Kyoto — 6 min from Higashiyama Yasui bus stop',
    cuisine: 'All-day bistro and café of Park Hyatt Kyoto (Tabelog) · cream puffs from the showcase — matcha, pear, pumpkin, vanilla — ¥770 each; seafood linguine arrabbiata ¥3,300 (October 2025) · a katsu sandwich of Daye pork with house mustard, gazpacho (August 2025; January 2026) · a seasonal sakura lunch set (March 2026) · cheesecake with soft-serve (September 2025); olive bread (July 2026) · breakfast for hotel guests: Western or Japanese set, the Japanese one by Kyoyamato, plus a buffet, ¥7,180 (September 2025) · a guest-chef dinner with Stéphane Pantel (January–February 2026)',
    website: HY, gmaps: gm('KYOTO BISTRO Park Hyatt Kyoto'), menu_url: TB + 'dtlmenu/',
    notes: '[Hotel bistro and café · Ninenzaka, Park Hyatt Kyoto’s casual room] The Park Hyatt’s all-day bistro looking onto Ninenzaka, with kimono-clad strollers outside: cream puffs (¥770), a Daye-pork katsu sandwich, seafood linguine and bistro plates, with no service charge. Most guests are from overseas and many staff speak English. Seating is timed — 90 min at lunch. Reviewers find it casual for the hotel, with strong flavours. 11:30–21:00 daily.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: Park Hyatt Kyoto’s bistro, café and bar, opened 30 October 2019, facing Ninenzaka. A February 2026 review describes a four-day collaboration dinner in January–February 2026 with the guest chef Stéphane Pantel, whose own restaurant had closed the previous summer.',
      philosophy: null, specialty: 'Cream puffs; katsu sandwich.',
      anecdotes: [
        { text: 'A September 2025 visitor counted about 80% overseas guests and many staff fluent in English or several languages, though a soft-serve arrived melted after waiting by the kitchen.', source: R + 'B514200686/' },
        { text: 'A January 2026 visitor rated the katsu sandwich above Maisen’s and called the price unbelievable next to Tokyo.', source: R + 'B520166520/' },
        { text: 'A July 2026 group arranged sauce changes in advance for a guest who dislikes onions, and found the request was not carried through on the day.', source: R + 'B532960284/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・カフェ・バル、東山区高台寺桝屋町360 パーク ハイアット 京都、東山安井バス停から徒歩6分、朝食7:30〜10:30 (宿泊客のみ)、ランチ11:30〜17:00、ディナー17:00〜21:00 (L.O. 20:00)、無休、利用時間 (ランチ90分、カフェ60分、ディナー120分)、予約可、チャージなし、カード可、120席 (1階70、2階50と個室)、禁煙、英語メニュー、ベジタリアンメニューあり、子供可、車椅子可、2019年10月30日オープン。口コミ (2025年6月〜2026年10月、英語): Ninenzaka に面する、シュークリーム770円、シーフードのリングイネ3,300円、カツサンド、朝食7,180円、外国人の客が約8割、英語の話せる店員、味が濃いめとの声。',
      confidence: 'medium', sources: [TB, HY, R + 'B509425628/', R + 'B512873732/', R + 'B514087662/', R + 'B514200686/', R + 'B519839541/', R + 'B520166520/', R + 'B522431381/', R + 'B528257514/', R + 'B529172213/', R + 'B531610019/', R + 'B532960284/', R + 'B537557710/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many staff fluent in English or several languages (September 2025). Book for lunch or dinner; timed seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺桝屋町360 パーク ハイアット 京都',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (hotel restaurant); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998932, 135.780880); cross-checked: GSI 京都府京都市東山区桝屋町360番地 (lot; GSI does not know the 高台寺 prefix) 84m; kyoto_yasaka_park_hyatt in the same hotel is 12 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519839541/', R + 'B514087662/'],
    price_note: 'Prices from September and October 2025 reviews; no service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Cream puff (matcha, pear, pumpkin, vanilla)', '¥770', 'Café', 'no', 'no', 'October 2025.', 'cream_puff'),
      it('', '', 'Seafood linguine arrabbiata', '¥3,300', 'Lunch & dinner', 'no', 'no', 'October 2025.', 'seafood_linguine'),
      it('', '', 'Katsu sandwich (Daye pork)', '', 'Lunch & dinner', 'no', 'no', 'August 2025; January 2026.', 'katsu_sando'),
      it('', '', 'Breakfast (hotel guests only)', '¥7,180', 'Breakfast', 'ask', 'ask', 'Western or Japanese set and buffet (September 2025).', 'breakfast'),
    ] }, {
    cuisine: 'パーク ハイアット 京都の終日営業のビストロとカフェ (食べログ)・ショーケースのシュークリーム (抹茶、洋梨、かぼちゃ、バニラ) 各770円、シーフードのリングイネ・アラビアータ3,300円 (2025年10月)・Daye ポークのカツサンドと自家製マスタード、ガスパチョ (2025年8月、2026年1月)・季節の桜のランチセット (2026年3月)・ソフトクリーム添えのチーズケーキ (2025年9月)、オリーブのパン (2026年7月)・宿泊客の朝食: 洋食か和食のセット (和食は Kyoyamato による) とビュッフェ、7,180円 (2025年9月)・ゲストシェフ Stéphane Pantel とのディナー (2026年1月〜2月)',
    neighborhood: 'Ninenzaka、パーク ハイアット 京都の中。東山安井バス停から徒歩6分',
    gf_detail: '要確認。パスタ、カツサンド、シュークリームのあるビストロ (2025〜2026年の口コミ)。グルテンの情報はない。2026年7月には事前に頼んだソースの変更が当日守られなかったという声があり、当日も確認を。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり。ヴィーガンの情報はない。',
    notes: '[ホテルのビストロとカフェ・Ninenzaka、パーク ハイアット 京都の気軽な店] Ninenzaka に面した、ホテルの終日営業のビストロ。窓の外を着物姿の人が行き交う。シュークリーム (770円)、Daye ポークのカツサンド、シーフードのリングイネ、ビストロ料理を、サービス料なしで。客の多くは外国人で、英語を話す店員も多い。利用時間の制限あり (ランチ90分)。ホテルにしては気軽で、味は濃いめとの声。毎日11時半〜21時。',
  });
}

// ================================================================ うえと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017726/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['14:00', '18:00']); const WS = day(['14:00', '23:00']); const SU = day(['14:00', '22:00']);
  put({
    id: 'kyoto_ueto', name: 'うえと (Ueto)', category: 'OMNI',
    lat: 35.009212, lng: 135.780321, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar with a few snacks — pudding, a sansho tartar egg dog, dashimaki (2023–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Gin and tonics with sansho and herbs, natural wine and non-alcoholic cocktails; the snacks use egg (2023–26 reviews).',
    hours_raw: 'Mon 14:00–18:00; Wed–Sat 14:00–23:00; Sun 14:00–22:00; closed Tuesday (Tabelog). Reviewers note it opens in the afternoon (14:00 in February 2023 and January 2026; 15:00 in April 2025). Reservations accepted (Tabelog). Cards and QR, no e-money (Tabelog). 12 seats: 8 at the counter, 4 at a table, semi-private space; private hire up to 20 (Tabelog). Non-smoking (Tabelog). 1 min from Higashiyama Stn exit 1 (Tabelog). Opened 8 April 2011 (Tabelog).',
    hours: { 0: MO, 2: WS, 3: WS, 4: WS, 5: WS, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama Sanjo — 1 min from Higashiyama Stn',
    cuisine: 'A salon and bar open from the afternoon (February 2023) · gin and tonics with sansho infused into the gin — the sansho G&T, flower-sansho and kinome G&T, a new-ginger G&T, a Kajitani Farm herb G&T (2023–26 reviews) · fennel gin with water (November 2025) · mostly natural wines; hot wine in winter (February 2023; January 2026) · non-alcoholic cocktails such as strawberry and fig (April 2025) · pudding and a whisky "adult" pudding (February 2023), a sansho tartar egg dog (January 2025), dashimaki (January 2026) · drinks in antique glasses (September 2026)',
    website: 'http://www.ueto2011.com', gmaps: gm('うえと 東山'), menu_url: TB + 'dtlmenu/',
    notes: '[Bar · Higashiyama Sanjo, sansho gin and tonics from 2 pm] A calm, tea-house-like bar a minute from Higashiyama Stn that opens in the afternoon (from 14:00). Gin and tonics with fresh sansho infused into the gin, flower-sansho and kinome, natural wines, a pudding and a sansho tartar egg dog. The owner is reserved: one April 2024 regular felt talked down to, a July 2026 visitor found the owner hard to read but easy-going with tourists. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog: a bar, café and wine bar opened 8 April 2011. A February 2023 review calls it "Ueto salon & bar", with a tea-house-like interior and a woodworkers’ workshop space on the floor above.',
      philosophy: null, specialty: 'Sansho gin and tonic.',
      anecdotes: [
        { text: 'A June 2026 visitor was shown the bottle of gin with fresh sansho steeping in it, giving the G&T its spicy kick.', source: R + 'B530349600/' },
        { text: 'A January 2026 visitor, caught in snow after the Heian Shrine, found it open at 14:00 and warmed up with hot wine and dashimaki.', source: R + 'B520052556/' },
        { text: 'An April 2024 visitor who had come several times found the owner’s service discriminatory and condescending that day.', source: R + 'B484397109/' },
      ],
      japanese_sources_summary: '食べログ: バー・カフェ・ワインバー、東山区今小路町91-1、東山駅1番出口から徒歩1分、月14:00〜18:00、水〜土14:00〜23:00、日14:00〜22:00、火曜休み、予約可、カード・QR 可、12席 (カウンター8、テーブル4)、禁煙、2011年4月8日オープン。口コミ (2023年2月〜2026年9月、英語): 昼から開くバー、山椒を漬けたジンのジントニック、花山椒と木の芽のジントニック、新生姜のジントニック、フェンネルのジン、自然派ワイン、ホットワイン、ノンアルコールのカクテル、プリン、山椒のタルタルの卵サンド、だし巻き、アンティークのグラス、店主の接客に不満の声 (2024年4月)。',
      confidence: 'medium', sources: [TB, 'http://www.ueto2011.com', R + 'B461736092/', R + 'B477870909/', R + 'B484397109/', R + 'B485111006/', R + 'B499877210/', R + 'B504463066/', R + 'B504918555/', R + 'B520052556/', R + 'B530349600/', R + 'B531851461/', R + 'B532047962/', R + 'B535603936/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter from an intriguing drinks menu; the owner chats lightly with tourists (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区今小路町91-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009212, 135.780321); cross-checked: GSI 京都府京都市東山区今小路町91番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485111006/', R + 'B530349600/'],
    price_note: 'No item prices found.', last_checked: TODAY, items: [
      it('', '', 'Sansho gin and tonic', '', 'Cocktails', 'ask', 'ask', 'Fresh sansho infused into the gin (June 2026).', 'sansho_gt'),
      it('', '', 'Flower-sansho and kinome gin and tonic', '', 'Cocktails', 'ask', 'ask', '2023–26 reviews.', 'hanazansho_gt'),
      it('', '', 'Pudding', '', 'Snacks', 'ask', 'no', 'February 2023.', 'pudding'),
      it('', '', 'Sansho tartar egg dog', '', 'Snacks', 'ask', 'no', 'January 2025.', 'tamago_dog'),
    ] }, {
    cuisine: '昼から開くサロン兼バー (2023年2月)・山椒をジンに漬けたジントニック (山椒、花山椒と木の芽、新生姜、Kajitani Farm のハーブ) (2023〜2026年の口コミ)・フェンネルのジンの水割り (2025年11月)・自然派中心のワイン、冬はホットワイン (2023年2月、2026年1月)・苺といちじくなどのノンアルコールのカクテル (2025年4月)・プリンとウイスキーの大人のプリン (2023年2月)、山椒のタルタルの卵ドッグ (2025年1月)、だし巻き (2026年1月)・アンティークのグラスで (2026年9月)',
    neighborhood: '東山三条。東山駅から徒歩1分',
    gf_detail: '要確認。つまみはプリン、山椒のタルタルの卵ドッグ、だし巻きなど (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。山椒やハーブのジントニック、自然派ワイン、ノンアルコールのカクテル。つまみは卵を使う (2023〜2026年の口コミ)。',
    notes: '[バー・東山三条、昼2時から山椒のジントニック] 東山駅から1分、茶室のような落ち着いたバー。昼2時から開く。生の山椒をジンに漬けたジントニック、花山椒と木の芽、自然派ワイン、プリン、山椒のタルタルの卵ドッグ。店主は口数が少なく、2024年4月には見下された態度だったという常連の声、2026年7月には表情は読みにくいが観光客とも気さくに話していたとの声。火曜休み。',
  });
}

// ================================================================ 食堂デイズ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034760/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_shokudo_days', name: '食堂デイズ (Shokudo Days)', category: 'OMNI',
    lat: 35.002496, lng: 135.769822, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omurice of chicken rice with demi-glace (April 2026); the set adds macaroni salad (April 2026). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg-wrapped omurice with chicken rice, prosciutto salads and bistro meat dishes (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 13:30), dinner 18:00–21:30 (last order 20:30); closed Wednesday and Thursday (Tabelog). Reservations accepted and usually needed: lunch is booked in slots at 11:30, 11:45, 12:00 or 12:45–13:30, with about an hour per table when busy; call outside business hours (Tabelog; 2025–26 reviews). Walk-ins may be asked to come back later (July and October 2025). No service or cover charge (Tabelog, Japanese text: 「サービス料、チャージ料なし」). Cards and PayPay, no e-money (Tabelog). 23 seats: 20 at tables, 3 at the counter; non-smoking with a smoking room (Tabelog). 2nd floor of しきさい河原町ビル, south of Shijo on Kawaramachi; 3 min from Kyoto Kawaramachi Stn (Tabelog). Opened 20 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Omurice at lunch, bistro dishes and wine at night (June 2025) · "white" omurice of white-yolked eggs that runs when cut, over chicken rice with demi-glace, ¥1,760, and the classic omurice ¥1,760 (August and October 2025; April 2026) · potage and soft-drink set +¥650 (October 2025); soup and salad set with potato and macaroni salads (April 2026) · a night omurice with cheese (July 2026) · evening blackboard of small plates and mains with a wide wine list (June 2025) · salad with prosciutto and grated cheese (December 2025)',
    website: null, gmaps: gm('食堂デイズ 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Yoshoku · Shijo Kawaramachi, booked-out white omurice] A bright second-floor room just south of Shijo whose "white" omurice — pale eggs that run over demi-glace chicken rice, ¥1,760 — fills every lunch slot, so book (calls go through outside opening hours). At night it turns bistro, with blackboard plates and wine. The chef trained in hotels in Kobe and Kyoto. No cover charge. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), trained at top hotels in Kobe and Kyoto (October 2025 review)'], origin: null,
      background: 'Per an October 2025 review: the owner-chef, who runs omurice lunches and a Western-style izakaya at night, trained at top hotels in Kobe and Kyoto. A March 2026 visitor saw a male chef and a female staff member running the room together. Opened 20 September 2020 (Tabelog).',
      philosophy: null, specialty: 'White omurice.',
      anecdotes: [
        { text: 'An October 2025 visitor arrived without a booking, was told to come back two hours later at 13:30, and did.', source: R + 'B516233426/' },
        { text: 'An October 2026 visitor could not get through by phone until finding an Instagram post on the best times to call, then booked a week ahead.', source: R + 'B538221289/' },
        { text: 'A January 2026 visitor loved the flowing yolk but found the plain ketchup rice, without chicken, a little monotonous.', source: R + 'B523649622/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・居酒屋・バル、下京区河原町通四条下ル2丁目稲荷町330-3 しきさい河原町ビル 2F、京都河原町駅から徒歩3分、昼11:30〜14:30 (L.O. 13:30)、夜18:00〜21:30 (L.O. 20:30)、水木休み、予約可 (昼は時間枠、混雑時は約1時間)、営業時間外に電話を、サービス料・チャージ料なし、カード・PayPay 可、23席、禁煙 (喫煙室あり)、2020年9月20日オープン。口コミ (2025年6月〜2026年10月、英語): 白いオムライス1,760円、定番のオムライス1,760円、スープとドリンクのセット650円、夜はチーズのオムライス、黒板のビストロ料理とワイン、神戸と京都の一流ホテルで修業した店主 (2025年10月)、予約で満席が多い。',
      confidence: 'medium', sources: [TB, R + 'B509689827/', R + 'B511207465/', R + 'B513736808/', R + 'B515194085/', R + 'B516233426/', R + 'B519488126/', R + 'B523649622/', R + 'B525313452/', R + 'B526608329/', R + 'B532489565/', R + 'B532737656/', R + 'B538221289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone outside opening hours and arrive on time — lunch runs in slots (2025–26 reviews). Overseas guests also come (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2丁目稲荷町330-3 しきさい河原町ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002496, 135.769822); cross-checked: GSI 京都府京都市下京区稲荷町330番地 (lot) 66m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513736808/', R + 'B515194085/'],
    price_note: 'Prices from August and October 2025 reviews; dinner prices are higher (July 2026).', last_checked: TODAY, items: [
      it('', '', 'White omurice', '¥1,760', 'Lunch', 'ask', 'no', 'August and October 2025.', 'white_omurice'),
      it('', '', 'Classic omurice', '¥1,760', 'Lunch', 'ask', 'no', 'August 2025.', 'classic_omurice'),
      it('', '', 'Set B (potage and soft drink)', '+¥650', 'Lunch', 'ask', 'ask', 'October 2025.', 'set_b'),
      it('', '', 'Night omurice with cheese', '', 'Dinner', 'ask', 'no', 'July 2026.', 'night_omurice'),
    ] }, {
    cuisine: '昼はオムライス、夜はビストロ料理とワイン (2025年6月)・白い卵を使い、切ると黄身が流れる「白いオムライス」(チキンライスにデミグラス) 1,760円、定番のオムライス1,760円 (2025年8月・10月、2026年4月)・ポタージュとソフトドリンクのセット650円増し (2025年10月)、スープとポテトサラダ・マカロニサラダのセット (2026年4月)・夜はチーズのオムライス (2026年7月)・夜の黒板の小皿とメイン、豊富なワイン (2025年6月)・生ハムと削ったチーズのサラダ (2025年12月)',
    neighborhood: '四条の南の河原町通。京都河原町駅から徒歩3分',
    gf_detail: '要確認。チキンライスにデミグラスのオムライス (2026年4月)、セットにはマカロニサラダ (2026年4月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。卵で包むオムライスとチキンライス、生ハムのサラダ、夜のビストロの肉料理 (2025〜2026年の口コミ)。',
    notes: '[洋食・四条河原町、予約で埋まる白いオムライス] 四条のすぐ南、明るい2階の店。白い卵がデミグラスのチキンライスに流れる「白いオムライス」(1,760円) で昼の枠は毎日埋まるので予約を (電話は営業時間外に)。夜はビストロになり、黒板の料理とワインを。店主は神戸と京都のホテルで修業。チャージなし。水木休み。',
  });
}

// ================================================================ 千本玉壽軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003746/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://sentama.co.jp/';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_senbon_tamajuken', name: '千本玉壽軒 (Senbon Tamajuken)', category: 'OMNI',
    lat: 35.030478, lng: 135.742127, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagashi — namagashi, wasanbon dry sweets, warabi mochi, fu senbei (wheat-gluten crackers) and chimaki (2024–26 reviews); no ingredient list found.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and sugar sweets made from natural ingredients (official site), but no ingredient list; one spring sweet uses yam (March 2026).',
    hours_raw: 'Mon, Tue, Thu–Sun 8:30–17:00; closed Wednesday (Tabelog). Take-away shop; the tea room 茶寮SENTAMA, one door along, serves freshly made sweets to eat in (official site; September 2025, March 2026). No cards or e-money; QR accepted (Tabelog). Seasonal namagashi are handmade in limited numbers and can sell out (official site). Orders by phone (Tabelog). On Senbon north of Imadegawa, 1 min from the Senbon Imadegawa bus stop (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senbon Imadegawa, Nishijin — 1 min from Senbon Imadegawa bus stop',
    cuisine: 'Over 100 seasonal namagashi a year, made by hand for festivals, events and flower seasons (official site) · namagashi such as Chaku-matsu ¥540 and Akikaze ¥508 (September 2026), Harugasumi with kinako and yam (March 2026), Hojō for autumn (September 2025) · Nishijin Fumi, a confection modelled on Nishijin weaving — 5 pieces ¥1,404 (official site; September 2026) · Tsuki no Utage, wasanbon with bean paste, 6 for ¥972 (September 2024) · a gold-leafed wasanbon sweet sold at Kinkaku-ji (March 2026) · fu senbei, plain and brown sugar (April 2026) · at 茶寮SENTAMA: a Hina set ¥1,100 and matcha ¥700 (March 2026); kakigori in summer, kuzuyu and zenzai in winter (official site)',
    website: OF, gmaps: gm('千本玉壽軒'), menu_url: OF,
    notes: '[Wagashi · Senbon Imadegawa, a Nishijin confectioner since 1938] A wagashi house on the weaving streets of Nishijin, founded in 1938 and now run by the third generation, making over a hundred seasonal namagashi a year with the sweetness turned down for today’s tastes. Take home Nishijin Fumi or the day’s namagashi, or sit at the tea room 茶寮SENTAMA next door for a fresh sweet with matcha (¥700). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Third-generation owner (unnamed) (official site)'], origin: null,
      background: 'Per the official site: the 玉壽軒 name began in the late-Edo Kansei era with 井筒屋, a tapestry weaver just below the present site that sold penny sweets on the side; in the mid-Taisho era road widening moved the old shop to Imadegawa Omiya. The previous owner, who trained at 本家玉壽軒, set up independently in 1938 (昭和13年) on the original site as 千本玉壽軒; the third generation now runs it, keeping traditional methods and natural ingredients while lowering the sweetness. The tea room 茶寮SENTAMA opened next door in October 2020.',
      philosophy: 'Traditional methods with natural ingredients, adjusted to modern tastes (official site).', specialty: 'Seasonal namagashi; Nishijin Fumi.',
      anecdotes: [
        { text: 'A July 2024 regular praised the summer sweets inspired by the halberd (hoko).', source: R + 'B111221278/' },
        { text: 'A September 2024 buyer found the Tsuki no Utage wasanbon so hard it would not break in half, and let it dissolve instead.', source: R + 'B492959839/' },
        { text: 'A March 2026 visitor at 茶寮SENTAMA watched the sweets being made at the counter and found the renovated room spotless.', source: R + 'B524166154/' },
      ],
      japanese_sources_summary: '公式サイト: 千本今出川上ル 西陣の和菓子店、年間100種以上の季節の上生菓子 (手作りで数に限り)、玉壽軒の起こりは江戸後期の寛政年間の綴織の井筒屋の一文菓子、大正中頃に本家は今出川大宮へ、本家玉壽軒で修行した先代が昭和13年に独立し発祥の地で千本玉壽軒を創業、現在は三代目、自然素材と昔ながらの製法で甘さを控えめに、2020年10月に一軒挟んだ隣に茶寮SENTAMA、銘菓「西陣風味」。食べログ: 和菓子、上京区千本通今出川上ル上善寺町96、千本今出川バス停から徒歩1分、8:30〜17:00、水曜休み、テイクアウト、カード不可・QR 可。口コミ (2024年7月〜2026年9月、英語): 上生菓子540円・508円、西陣風味5個1,404円、Tsuki no Utage 6個972円、Kinkaku-ji の和三盆、麩せんべい、茶寮のひな祭りセット1,100円と抹茶700円。',
      confidence: 'medium', sources: [TB, OF, R + 'B111221278/', R + 'B469034215/', R + 'B492959839/', R + 'B494967455/', R + 'B514311546/', R + 'B520518774/', R + 'B523551538/', R + 'B524163981/', R + 'B524166154/', R + 'B527596172/', R + 'B528224282/', R + 'B535073699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the case to take away, or sit in the tea room next door; cash or QR, no cards. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区千本通今出川上ル上善寺町96',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.030478, 135.742127); cross-checked: GSI 京都府京都市上京区上善寺町96番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535073699/', R + 'B492959839/', R + 'B524166154/'],
    price_note: 'Prices from September 2026, March 2026 and September 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal namagashi', '¥508–540', 'Namagashi', 'ask', 'ask', 'September 2026.', 'namagashi'),
      it('', '', 'Nishijin Fumi (5 pieces)', '¥1,404', 'Signature', 'ask', 'ask', 'September 2026.', 'nishijin_fumi'),
      it('', '', 'Tsuki no Utage (6 pieces)', '¥972', 'Seasonal', 'ask', 'ask', 'September 2024.', 'tsuki_no_utage'),
      it('', '', 'Matcha at 茶寮SENTAMA', '¥700', 'Tea room', '', 'ask', 'March 2026.', 'matcha'),
    ] }, {
    cuisine: '行事や節句、花の見頃にあわせた年間100種以上の手作りの季節の上生菓子 (公式サイト)・上生菓子は Chaku-matsu 540円、Akikaze 508円 (2026年9月)、きな粉と山芋の Harugasumi (2026年3月)、秋の夕日の Hojō (2025年9月)・西陣織をモチーフにした西陣風味 5個1,404円 (公式サイト、2026年9月)・和三盆に餡を入れた Tsuki no Utage 6個972円 (2024年9月)・金箔をのせた Kinkaku-ji の和三盆 (2026年3月)・麩せんべい (プレーンと黒糖) (2026年4月)・茶寮SENTAMA ではひな祭りのセット1,100円と抹茶700円 (2026年3月)、夏はかき氷、冬は葛湯やぜんざい (公式サイト)',
    neighborhood: '西陣、千本今出川。千本今出川バス停から徒歩1分',
    gf_detail: '要確認。上生菓子、和三盆の干菓子、わらび餅、麩せんべい、ちまきなど (2024〜2026年の口コミ)。原材料の一覧は見つからない。',
    vegan_detail: '要確認。自然素材の餡と砂糖の菓子 (公式サイト) だが原材料の一覧はなく、春の菓子には山芋を使うものもある (2026年3月)。',
    notes: '[和菓子・千本今出川、昭和13年からの西陣の菓子屋] 織物の町西陣の和菓子屋。昭和13年創業で、今は三代目。年に100種以上の季節の上生菓子を、今の好みに合わせて甘さ控えめに作る。西陣風味やその日の上生菓子を持ち帰るか、隣の茶寮SENTAMA で作りたての菓子と抹茶 (700円) を。水曜休み。',
  });
}

save();
