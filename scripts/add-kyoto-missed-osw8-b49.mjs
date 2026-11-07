// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 49.
//   + おそば処 葵 Osoba Dokoro Aoi (soba and udon in the Kintetsu Miyakomichi arcade, Kyoto Station Hachijo side)
//   + 鉄板と煮込み どんぴしゃ Teppan to Nikomi Donpisha (teppanyaki and stew izakaya in a Shijo Karasuma machiya)
//   + 和食 浮橋 Washoku Ukihashi (Kyoto cuisine at Hotel Granvia Kyoto, breakfast to dinner; hotel-own restaurant)
//   + 輝庭 Kagayaki Tei (large Japanese izakaya under the Shijo Karasuma building)
//   - 二条城 蕎麦 たつ市 26034553: brand of a large parent. The shop site names the operator (運営会社：トラオム株式会社); the
//     Tabelog invoice number T1120001160730 matches that company; en-japan lists 93 shops across 10 brands (FC 鳥貴族 included).
//   - ハイライト 百万遍店 26003803: chain — Walkerplus (2018) says the shop grew to five shops in Kyoto (京都に5店舗を展開).
//   - 黒毛和牛一頭買い焼肉と炊き立て土鍋ご飯 市場小路 烏丸店 26003035: brand already in data (市場小路 寺町本店); four 市場小路 shops in crawls.
//   - ikariya523 26024617 and イカリヤ365 26031451: five same-brand shops (イカリヤ食堂, Ikariya Beika — both in data — チンクエ
//     イカリヤ, イカリヤ365, ikariya523) — chain.
//   Picked 2026-11-06 after batch 48. The core list (mod 6 = 1) is exhausted (all remaining entries are earlier skips), so all
//   four picks come from `queue.mjs kyoto-missed next notable 200`, in order after the skips above; 輝庭 fills the slot left by
//   たつ市. Same-name check, same brand or operator only: 葵 — one in our crawls; a web search found no operator or other shops
//   (an unrelated 蕎麦処 葵 is in Yao, Osaka). どんぴしゃ — one; a web search found no sister shops. 浮橋 — one; a hotel-own
//   restaurant of Hotel Granvia Kyoto (drafted, like Le Temps and Kyorinsen). 輝庭 — one; the operator 株式会社バル・コーポレーション
//   lists five restaurants of four different names (輝庭, 源輝家, クアトロ x2, 蔵) — a small group, so drafted. None of the four is in
//   data/kyoto.json by name or address (釜殿町31-1, 高材木町221-4, Granvia M3F, 水銀屋町612).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260203/26034553/', 'brand of a large parent: operator トラオム株式会社 (shop site; Tabelog invoice no. T1120001160730), 93 shops across 10 brands per en-japan');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26003803/', 'chain: ハイライト has five shops in Kyoto (Walkerplus 2018)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26003035/', 'brand already in data: 市場小路 (kyoto teramachi honten record); four 市場小路 shops in crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26024617/', 'chain: five Ikariya-brand shops (イカリヤ食堂 and Ikariya Beika in data, チンクエ イカリヤ, イカリヤ365, ikariya523)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26031451/', 'chain: five Ikariya-brand shops (イカリヤ食堂 and Ikariya Beika in data, チンクエ イカリヤ, イカリヤ365, ikariya523)');

// ================================================================ おそば処 葵 Osoba Dokoro Aoi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002945/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_osoba_dokoro_aoi_miyakomichi', name: 'おそば処 葵 (Osoba Dokoro Aoi)', category: 'OMNI',
    lat: 34.98451952788153, lng: 135.75663059015776, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soba and udon (including half-and-half zaru), tempura, nama-fu; no information on the soba flour blend (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based broths, herring, chicken and egg bowls (2026 reviews).',
    hours_raw: 'Daily 11:00–21:00, last order 20:30; hours and closing days may change (Tabelog). No reservations (Tabelog). Cards (JCB, AMEX, Diners) and e-money; no QR (Tabelog). 63 seats; non-smoking (Tabelog). In the Kintetsu Meitengai Miyakomichi arcade on the Hachijo (south) side of Kyoto Station (Tabelog; September–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hachijo side — Kintetsu Miyakomichi arcade',
    cuisine: 'Soba and udon shop for travellers at Kyoto Station, quick to seat and serve (2024–2026 reviews) · e.g. Kyoto-style tanuki udon with thick sauce and ginger ¥1,060; zaru of half soba and half udon ¥880; tori nanba, yuba, Kujo negi and tempura soba; chilled herring soba set with obanzai and seasoned rice (May 2024–October 2026) · oyakodon set with warm soba ¥1,730 (September 2026) · drinking snacks such as itawasa, miso cucumber, nama-fu dengaku and yuba vegetable rolls, with beer and shochu (October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('おそば処 葵 京都駅 みやこみち'), menu_url: null,
    notes: '[Soba · Kyoto Station, Hachijo side] A roomy soba and udon shop in the Miyakomichi arcade on the shinkansen side of Kyoto Station, where reviewers mostly got a table without waiting, even when the station was crowded. Herring soba, yuba soba, Kyoto tanuki udon and oyakodon sets come out fast — handy before a train. One diner liked the broth but not the udon noodles. Open daily till 21:00.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a soba restaurant and izakaya in the Kintetsu Meitengai Miyakomichi arcade at Kyoto Station. Reviewers in 2024–2026 describe quick seating and service, attentive staff and a relaxed room.',
      philosophy: null, specialty: 'Herring soba; oyakodon set.',
      anecdotes: [
        { text: 'A September 2026 diner who took out medicine after the meal was brought a glass of water before asking.', source: R + 'B535806764/' },
        { text: 'A September 2026 reviewer timed the order-to-table wait as remarkably short and called it a lifesaver before a train.', source: R + 'B536299961/' },
        { text: 'A September 2026 late diner liked the tanuki udon broth but not the noodles, and planned soba next time.', source: R + 'B484798195/' },
      ],
      japanese_sources_summary: '食べログ: そば・居酒屋、下京区東塩小路釜殿町31-1 近鉄名店街みやこみち、京都駅から230m、毎日 11:00〜21:00 (L.O.20:30)、営業時間・定休日は変わることあり、予約不可、カード (JCB・AMEX・Diners)・電子マネー可、QR 不可、63席、禁煙。口コミ (2024年5月〜2026年10月、英語): 京都駅八条口側、すぐ座れて提供が早い、たぬきうどん1,060円、ざるのそばとうどんの合い盛り880円、親子丼の定食1,730円、冷やしにしんそばのセット、鳥なんばそば、湯葉そば、九条ねぎそば、天ぷらそば、板わさ、味噌きゅうり、生麩田楽、湯葉の野菜巻き、気配りのある店員、うどんの麺は好みでなかったとの声。',
      confidence: 'medium', sources: [TB, R + 'B484798195/', R + 'B535806764/', R + 'B536299961/', R + 'B536440169/', R + 'B537153261/', R + 'B537715506/', R + 'B537991643/', R + 'B538325936/', R + 'B538368035/', R + 'B538418262/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in station eatery, quick service; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路釜殿町31-1 近鉄名店街みやこみち',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984520, 135.756631); GSI 京都府京都市下京区東塩小路釜殿町31番地 (lot) is 186 m away — a large station lot — so loc_precise false; nearest Kyoto record 80 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484798195/', R + 'B536299961/'],
    price_note: 'Prices from May 2024 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tanuki udon', '¥1,060', 'Noodles', 'no', 'no', 'September 2026.', 'tanuki_udon'),
      it('', '', 'Zaru, half soba and half udon', '¥880', 'Noodles', 'no', 'no', 'May 2024.', 'zaru_aimori'),
      it('', '', 'Oyakodon set with warm soba', '¥1,730', 'Sets', 'no', 'no', 'September 2026.', 'oyakodon_set'),
    ] }, {
    cuisine: '京都駅の旅行者向けのそばとうどんの店、すぐ座れて提供が早い (2024〜2026年の口コミ)・例: あんかけで生姜をのせた京風のたぬきうどん1,060円、そばとうどんの合い盛りのざる880円、鳥なんば、湯葉、九条ねぎ、天ぷらのそば、おばんざいと味ご飯付きの冷やしにしんそばのセット (2024年5月〜2026年10月)・温かいそば付きの親子丼の定食1,730円 (2026年9月)・板わさ、味噌きゅうり、生麩田楽、湯葉の野菜巻きなどのつまみに、ビールや焼酎 (2026年10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '京都駅の八条口側、近鉄名店街みやこみち',
    gf_detail: 'グルテンフリー不可。そばとうどん (合い盛りのざるも)、天ぷら、生麩。そば粉の割合の情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、にしん、鶏と卵の丼 (2026年の口コミ)。',
    notes: '[そば・京都駅八条口側] 京都駅の新幹線側、みやこみちの広いそばとうどんの店。駅が混んでいてもたいていすぐ座れたという口コミが多い。にしんそば、湯葉そば、京風のたぬきうどん、親子丼のセットがすぐ出てきて、電車の前に便利。つゆはよいがうどんの麺は好みでないという客も。毎日21時まで。',
  });
}

// ================================================================ 鉄板と煮込み どんぴしゃ Teppan to Nikomi Donpisha
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039329/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const WE = day(['16:00', '23:00']);
  put({
    id: 'kyoto_teppan_nikomi_donpisha', name: '鉄板と煮込み どんぴしゃ (Teppan to Nikomi Donpisha)', category: 'OMNI',
    lat: 35.002888607871746, lng: 135.76256056033915, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soy- and miso-based stews, demi-glace pork stew, fried broccoli and cheese, crêpe; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tendon and offal stews, pork steak, dashi with bonito, prosciutto starter (2024–2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–23:00; Saturday–Sunday 16:00–23:00; closed 31 December–3 January and some irregular days (Tabelog). Reservations accepted and advised — nearly full at 19:00 on a weekday (Tabelog; September 2026). Appetizer charge ¥450 incl. tax (Tabelog original お通し：450円（税込み）). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 46 seats: 14 at the counter, tables, and an 8-person private room; non-smoking; English menu (Tabelog). A renovated machiya with a red noren, the 2F for private bookings with a sunken kotatsu room (2024–2026 reviews). 2 min walk from Hankyu Karasuma Stn exit 15 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura south of Shijo — 2 min walk from Hankyu Karasuma Stn',
    cuisine: 'Teppanyaki and nikomi (stews) izakaya in a machiya, opened May 2023 (Tabelog; 2024–2026 reviews) · red nikomi of beef tendon in a sweet soy base ¥650; white nikomi of offal in chicken dashi ¥650; three dashi nikomi (daikon, egg, konnyaku) finished with shaved bonito ¥900; pork stew ¥1,300 (September 2026) · Donpisha tonteki of low-temperature domestic pork with mashed potato ¥1,900; wagyu tendon garlic rice ¥1,250; white tomato caprese ¥900 (September 2026) · desserts: hojicha pudding ¥650, vanilla ice cream with salt and olive oil ¥500 (September 2026) · all-you-can-drink with no time limit ¥2,850, with organic wines, cold-pressed sours, Kyoto sake and highballs (September 2026) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('鉄板と煮込み どんぴしゃ 烏丸'), menu_url: null,
    notes: '[Izakaya · Shijo Karasuma, teppan and stews] A stylish renovated machiya behind a red noren serving beef-tendon and offal stews, oden-style dashi stews topped with shaved bonito, and a juicy low-temperature pork steak, with a no-time-limit drinks plan of organic wines and fresh-pressed sours. One October 2026 reviewer credits the menu to a chef from a well-known Osaka French restaurant. Open till 23:00; book ahead.',
    chef_bio: { chef_name: null, roles: ['Chef and staff at a semi-open kitchen (unnamed)'], origin: null,
      background: 'Per Tabelog: a teppanyaki and stew izakaya opened 10 May 2023, registered as an official listing by the operator. An October 2026 reviewer writes that the dishes are crafted by a renowned chef from a famous French restaurant in Osaka (not named).',
      philosophy: 'Reasonable teppanyaki and stews (Tabelog).', specialty: 'Donpisha tonteki; red and white nikomi.',
      anecdotes: [
        { text: 'An October 2026 reviewer credits the menu to a renowned chef from a famous French restaurant in Osaka.', source: R + 'B536819443/' },
        { text: 'Several reviewers describe shaved bonito added to the bubbling stone-pot dashi stews at the table (2024–2026).', source: R + 'B537949377/' },
        { text: 'A September 2026 weekday visitor found the place nearly full at 19:00 and advises booking.', source: R + 'B537818209/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鉄板焼き、下京区高倉通四条下る高材木町221-4、阪急烏丸駅15番出口から徒歩2分、月〜金 17:00〜23:00、土日 16:00〜23:00、年末年始 (12月31日〜1月3日)・不定休、予約可、お通し450円 (税込)、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、46席 (カウンター14、テーブル、個室8名)、禁煙、英語メニュー、2023年5月10日開店。口コミ (2024年6月〜2026年10月、英語): 町家を改装、赤いのれん、2階は貸切、掘りごたつの個室、牛すじの赤煮込み650円、鶏だしのホルモンの白煮込み650円、だし煮込み3種900円 (かつお節を削る)、豚の煮込み1,300円、どんぴしゃトンテキ1,900円、和牛すじのガーリックライス1,250円、白トマトのカプレーゼ900円、ほうじ茶プリン650円、時間無制限の飲み放題2,850円 (オーガニックワイン、コールドプレスのサワー)、大阪の有名フレンチ出身のシェフとの声、平日19時にほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B486229961/', R + 'B536572810/', R + 'B536819443/', R + 'B536917358/', R + 'B537353705/', R + 'B537779085/', R + 'B537818209/', R + 'B537949377/', R + 'B538522167/', R + 'B538680149/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter seating; ¥450 appetizer charge; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通四条下る高材木町221-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002889, 135.762561); cross-checked: GSI 京都府京都市下京区高材木町221番地 (lot) 20 m; nearest Kyoto record 14 m away (different lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537818209/'],
    price_note: 'Prices from a September 2026 review; plus a ¥450 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Red nikomi (beef tendon stew)', '¥650', 'Stews', 'no', 'no', 'September 2026.', 'aka_nikomi'),
      it('', '', 'White nikomi (offal in chicken dashi)', '¥650', 'Stews', 'no', 'no', 'September 2026.', 'shiro_nikomi'),
      it('', '', 'Three dashi nikomi', '¥900', 'Stews', 'ask', 'no', 'September 2026.', 'dashi_nikomi'),
      it('', '', 'Donpisha tonteki (pork steak)', '¥1,900', 'Teppan', 'no', 'no', 'September 2026.', 'tonteki'),
      it('', '', 'Wagyu tendon garlic rice', '¥1,250', 'Teppan', 'no', 'no', 'September 2026.', 'garlic_rice'),
      it('', '', 'Premium all-you-can-drink, no time limit', '¥2,850', 'Drinks', 'ask', 'ask', 'September 2026.', 'nomihodai'),
    ] }, {
    cuisine: '町家の鉄板焼きと煮込みの居酒屋、2023年5月開店 (食べログ、2024〜2026年の口コミ)・甘辛い醤油の牛すじの赤煮込み650円、鶏だしのホルモンの白煮込み650円、かつお節を削る大根・卵・こんにゃくのだし煮込み3種900円、豚の煮込み1,300円 (2026年9月)・低温調理の国産豚にマッシュポテトのどんぴしゃトンテキ1,900円、和牛すじのガーリックライス1,250円、白トマトのカプレーゼ900円 (2026年9月)・デザート: ほうじ茶プリン650円、塩とオリーブオイルのバニラアイス500円 (2026年9月)・時間無制限の飲み放題2,850円、オーガニックワイン、コールドプレスのサワー、京都の日本酒、ハイボール (2026年9月)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条の南の高倉通。阪急烏丸駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。醤油や味噌の煮込み、デミグラスの豚の煮込み、ブロッコリーとチーズのフライ、クレープ。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじやホルモンの煮込み、トンテキ、かつおのだし、生ハムのお通し (2024〜2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸、鉄板と煮込み] 赤いのれんのおしゃれな改装町家で、牛すじやホルモンの煮込み、かつお節を削るおでん風のだし煮込み、ジューシーな低温調理のトンテキを。オーガニックワインや搾りたてのサワーの時間無制限の飲み放題も。2026年10月の口コミは、大阪の有名フレンチ出身のシェフの料理と書く。23時まで。予約がおすすめ。',
  });
}

// ================================================================ 和食 浮橋 Washoku Ukihashi (Hotel Granvia Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001871/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.granvia-kyoto.co.jp/restaurant/ukihashi/';
  const H = day(['07:00', '10:00'], ['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ukihashi_granvia', name: '和食 浮橋 (Washoku Ukihashi, Hotel Granvia Kyoto)', category: 'OMNI',
    lat: 34.98581178788153, lng: 135.75921680016899, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The hotel says it handles the eight labelled allergens, wheat included, but cooks in a shared kitchen with shared utensils, so it cannot guarantee removal and may decline to serve; guests may bring food from home with advance notice (Tabelog). Allergies are checked before a course (July 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kyoto cuisine with bonito dashi, fish, Kyoto beef and egg (2026 reviews).',
    hours_raw: 'Daily: breakfast 7:00–10:00; lunch 11:30–15:00 (last order 14:00); dinner 17:00–22:00 (last order 21:00); open all year (Tabelog). Service charge 15% (Tabelog original サービス料15％). Smart casual; men are asked not to wear sleeveless shirts or sandals (Tabelog). Reservations accepted; breakfast is open to non-guests (Tabelog; October 2026). Cards, e-money and QR (Tabelog). 94 seats: 40 at the counter, a 22-seat dining area and 4 private rooms; non-smoking; wheelchair accessible; parking validation at the JR Kyoto Station Building car park (Tabelog). Mezzanine 3F of Hotel Granvia Kyoto, inside JR Kyoto Station; 1 min from the central gate (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside JR Kyoto Station — Hotel Granvia Kyoto, mezzanine 3F',
    cuisine: 'The hotel Kyoto-cuisine restaurant in a modern machiya-style room, opened September 1997 (Tabelog) · Kyo no Asagohan breakfast: dashi and juice to start, six small dishes such as yuba tofu, Kyoto beef and sashimi, dashimaki of Kyoto eggs, saikyo-miso black cod, yudofu, rice or rice porridge, pickles, chirimen sansho and a matcha warabi-mochi pudding (May and September 2026) · Hanakago lunch sets of seasonal small dishes with corn rice or chirimen sansho rice, and kaiseki lunches (April–August 2026) · kids menu (October 2026) · dinner about ¥6,000–10,000, lunch about ¥3,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('和食 浮橋 ホテルグランヴィア京都'), menu_url: null,
    notes: '[Kyoto cuisine · Hotel Granvia, inside Kyoto Station] The Granvia hotel Japanese restaurant, a calm machiya-style room with kimono-clad staff and views of Kyoto Tower. Its set Kyoto breakfast — saikyo-miso cod, yudofu, dashimaki, porridge — is open to non-guests, plus seasonal lunch sets and kaiseki. One breakfast guest found it decent but short of the high price. 15% service charge; smart casual.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and kimono-clad floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant of Hotel Granvia Kyoto (in the JR Kyoto Station building), opened 11 September 1997, offering seasonal Kyoto ingredients in a machiya-style space for anniversaries, meetings and family occasions; registered as an official listing by the hotel.',
      philosophy: 'Seasonal Kyoto ingredients and hotel hospitality (Tabelog).', specialty: 'Kyo no Asagohan breakfast.',
      anecdotes: [
        { text: 'A May 2026 hotel guest had the Western buffet at Le Temps one morning and the Kyo no Asagohan here the next, choosing rice porridge with a sweet bekko-an glaze.', source: R + 'B528756857/' },
        { text: 'A July 2026 family meeting found the private rooms quiet, with small cloakrooms, and noted that allergies were checked in advance.', source: R + 'B532188369/' },
        { text: 'An October 2026 drop-in breakfast guest found one set on offer, decent but not matching the high price.', source: R + 'B536765995/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・寿司、下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 M3F、JR京都駅中央改札から徒歩1分、毎日 7:00〜10:00、11:30〜15:00 (L.O.14:00)、17:00〜22:00 (L.O.21:00)、年中無休、サービス料15％、スマートカジュアル (男性はノースリーブとサンダル不可)、予約可、カード・電子マネー・QR 可、94席 (カウンター40、ダイニング22、個室4)、禁煙、車椅子可、JR京都駅ビル駐車場の割引、1997年9月11日開店。アレルギー: 特定原材料8品目 (小麦を含む) に対応、同じ厨房と器具で調理するため完全な除去は保証できず、提供を断ることもある、事前に伝えれば持ち込み可。口コミ (2026年4月〜10月、英語): 京の朝ごはん (だしとジュース、小鉢6品、京都の卵のだし巻き、銀だらの西京焼き、湯豆腐、白ご飯かお粥、べっこうあん、ちりめん山椒、漬物、抹茶のわらび餅プリン)、花かごの昼の御膳、とうもろこしご飯、懐石の昼、着物の店員、京都タワーが見える、個室、子ども用メニュー、朝食は値段のわりに期待ほどではなかったとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B514763965/', R + 'B526890534/', R + 'B528756857/', R + 'B532056988/', R + 'B532188369/', R + 'B533487044/', R + 'B534360136/', R + 'B536765995/', R + 'B537581029/', R + 'B538400001/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; smart casual; 15% service charge; cards, IC and QR.' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'The hotel notice says food is prepared in the same kitchen as allergens, with shared utensils and cleaning equipment, so cross-contamination is possible.', source: TB, verified: TODAY }],
      staff_allergy_handling: [
        { text: 'The hotel says it handles the eight labelled allergens (egg, milk, wheat, buckwheat, peanut, shrimp, crab, walnut), cannot guarantee complete removal, may decline to serve, and allows guests to bring food from home with advance notice.', source: TB, verified: TODAY },
        { text: 'A July 2026 reviewer notes that food allergies were checked thoroughly in advance of a private-room course.', source: R + 'B532188369/', verified: TODAY },
      ] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル ＪＲ京都駅中央口 ホテルグランヴィア京都 M3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing by the hotel; hotel website; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985812, 135.759217); the address has no lot number, so loc_precise false; inside Hotel Granvia Kyoto, 13 m from kyoto_kyorinsen_granvia and 21 m from kyoto_kotoshieru_granvia; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514763965/', R + 'B526890534/', R + 'B533487044/'],
    price_note: 'No set prices in the reviews; Tabelog gives about ¥6,000–7,999 for dinner and ¥3,000–3,999 for lunch; plus 15% service.', last_checked: TODAY, items: [
      it('', '', 'Kyo no Asagohan (Kyoto breakfast set)', '', 'Breakfast', 'ask', 'no', 'May and September 2026.', 'kyo_asagohan'),
      it('', '', 'Hanakago lunch set', '', 'Lunch', 'ask', 'no', 'April and August 2026.', 'hanakago_gozen'),
    ] }, {
    cuisine: '1997年9月開店、モダンな町家風の空間のホテルの京料理の店 (食べログ)・京の朝ごはん: 最初にだしとジュース、湯葉豆腐や京都の牛肉やお造りなど小鉢6品、京都の卵のだし巻き、銀だらの西京焼き、湯豆腐、白ご飯かお粥、漬物、ちりめん山椒、抹茶のわらび餅プリン (2026年5月・9月)・季節の小鉢にとうもろこしご飯やちりめん山椒ご飯の花かごの昼の御膳、懐石の昼 (2026年4〜8月)・子ども用メニュー (2026年10月)・夜6,000〜10,000円ほど、昼3,000〜6,000円ほど (食べログ)',
    neighborhood: 'JR京都駅の中、ホテルグランヴィア京都 M3F',
    gf_detail: '要確認。ホテルは小麦を含む特定原材料8品目に対応するが、同じ厨房と器具で調理するため完全な除去は保証できず、提供を断ることもある。事前に伝えれば持ち込み可 (食べログ)。コースの前にアレルギーを確認 (2026年7月)。',
    vegan_detail: 'ヴィーガン不可。かつおのだし、魚、京都の牛肉、卵の京料理 (2026年の口コミ)。',
    notes: '[京料理・ホテルグランヴィア、京都駅の中] グランヴィアの和食の店。着物の店員がいる落ち着いた町家風の部屋で、京都タワーも見える。銀だらの西京焼き、湯豆腐、だし巻き、お粥の京の朝ごはんは宿泊客以外も利用できる。季節の昼の御膳や懐石も。朝食はよいが値段ほどではないと感じた客も。サービス料15％、スマートカジュアル。',
  });
}

// ================================================================ 輝庭 Kagayaki Tei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000743/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.bal-flower.co.jp/fd/kagayakitei.html';
  const H = day(['11:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kagayaki_tei_shijo_karasuma', name: '輝庭 (Kagayaki Tei)', category: 'OMNI',
    lat: 35.003500117870274, lng: 135.7591473403477, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kara-age, kushiage, tempura, chicken nanban and soy-seasoned dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred Japanese izakaya with dashi, fried chicken and sashimi (2025–2026 reviews).',
    hours_raw: 'Daily 11:00–14:30 (last order 14:00) and 17:00–22:30 (last order 22:00); irregular closing days (Tabelog). Reservations accepted; 2-hour limit when busy (Tabelog). Appetizer charge ¥380, ¥418 incl. tax (Tabelog original お通し380円(税込418円)). Cards, e-money and QR (Tabelog). 126 seats with counter, sofa seats and many private rooms for 2 to 16; parties up to 44; non-smoking with smoking rooms; free Wi-Fi; English and Simplified Chinese menus; kids meals at lunch only (Tabelog). B1F of the Shijo Karasuma Building, directly linked to Hankyu Karasuma Stn exit 23 and Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Karasuma — B1F, directly linked to Shijo and Karasuma stations',
    cuisine: 'Large Japanese izakaya for groups and set lunches, with fish and produce bought direct from growing areas (operator site; 2025–2026 reviews) · lunch from ¥1,000 with rice, miso soup and a side: kara-age, chicken nanban, daily specials, a seafood bowl (September–November 2026) · weekend and holiday mini kaiseki lunch ¥2,800 (August 2026) · evening dishes such as sashimi, nasu dengaku, kushiage, Kujo negi dashimaki, lotus-root manju, kara-age, seasonal tempura and saba oshizushi (October 2025) · courses with all-you-can-drink ending in bara-zushi (September 2026) · lunch about ¥1,000–2,000, dinner about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('輝庭 四条烏丸ビル'), menu_url: null,
    notes: '[Izakaya · Shijo Karasuma, underground] A big, calm Japanese izakaya below the Shijo Karasuma crossing, reached without going outside, with semi-private rooms for groups and banquets. Value set lunches of kara-age or chicken nanban from ¥1,000, a weekend mini kaiseki, and fish-led dishes and courses at night. One August 2026 group found the kaiseki portions small and some drinks never came. Open till 22:30.',
    chef_bio: { chef_name: null, roles: ['Cooks at an open kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the operator, 株式会社バル・コーポレーション (Bal Corporation): a Kyoto-style seasonal restaurant with an open kitchen, a banquet hall for up to 42 and semi-private rooms; fish and mountain produce are bought direct from producing areas and the cooks judge freshness and flavour (鮮度、旨みは料理人が目利きしております). The operator lists five restaurants. A reviewer notes the menu changed over six years (October 2025).',
      philosophy: 'Freshness and flavour judged by the cooks (operator site).', specialty: 'Set lunches; banquet courses.',
      anecdotes: [
        { text: 'An August 2026 organiser of social gatherings relies on it as one of few Kyoto places that take large groups, and liked that draft beer came in individual mugs.', source: R + 'B535112528/' },
        { text: 'An August 2026 weekend mini kaiseki lunch (¥2,800) was fish-centred and tasty, but the portions were small and some drinks ordered were never served.', source: R + 'B534613312/' },
        { text: 'A September 2026 work party was glad not to need an umbrella on a rainy day, thanks to the direct station link.', source: R + 'B538612669/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区水銀屋町612 四条烏丸ビル B1F、阪急烏丸駅23番出口・地下鉄四条駅に直結、毎日 11:00〜14:30 (L.O.14:00)、17:00〜22:30 (L.O.22:00)、不定休、予約可、混雑時は2時間制、お通し380円 (税込418円)、カード・電子マネー・QR 可、126席、個室多数、最大44名、禁煙 (喫煙室あり)、無料 Wi-Fi、英語・中国語 (簡体字) メニュー、お子様ランチは昼のみ。運営: 株式会社バル・コーポレーション (公式サイト、5店舗)、産地直送の魚と山の幸、オープンキッチン、宴会場は42名まで。口コミ (2025年10月〜2026年11月、英語): 昼は1,000円から (唐揚げ、チキン南蛮、日替わり、ご飯・味噌汁・小鉢付き)、海鮮丼、土日祝のミニ懐石2,800円、夜は刺身、なす田楽、串揚げ、九条ねぎのだし巻き、れんこん饅頭、季節の天ぷら、鯖の押し寿司、飲み放題付きのコースとばら寿司、大人数の宴会に便利、量が少なめで頼んだ飲み物が来なかったとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B420963808/', R + 'B534613312/', R + 'B535112528/', R + 'B535435295/', R + 'B535568824/', R + 'B535770869/', R + 'B537956738/', R + 'B538612669/', R + 'B538793515/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus (Tabelog); private rooms; ¥418 appetizer charge; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区水銀屋町612 四条烏丸ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and operator page; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003500, 135.759147); cross-checked: GSI 京都府京都市下京区水銀屋町612番地 (lot) 48 m; nearest Kyoto record 29 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534613312/', R + 'B538793515/'],
    price_note: 'Prices from August and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (kara-age, chicken nanban or daily special)', '¥1,000', 'Lunch', 'no', 'no', 'From ¥1,000; November 2026.', 'lunch_set'),
      it('', '', 'Mini kaiseki lunch (weekends and holidays)', '¥2,800', 'Lunch', 'ask', 'no', 'August 2026.', 'mini_kaiseki'),
    ] }, {
    cuisine: '産地直送の魚と野菜の、宴会と昼の定食の大きな和の居酒屋 (運営会社のサイト、2025〜2026年の口コミ)・昼は1,000円から、ご飯・味噌汁・小鉢付き: 唐揚げ、チキン南蛮、日替わり、海鮮丼 (2026年9〜11月)・土日祝のミニ懐石の昼2,800円 (2026年8月)・夜は刺身、なす田楽、串揚げ、九条ねぎのだし巻き、れんこん饅頭、唐揚げ、季節の天ぷら、鯖の押し寿司など (2025年10月)・飲み放題付きのコース、締めはばら寿司 (2026年9月)・昼1,000〜2,000円ほど、夜4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸、四条駅と烏丸駅に直結の地下1階',
    gf_detail: 'グルテンフリー不可。唐揚げ、串揚げ、天ぷら、チキン南蛮、醤油の料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心の和の居酒屋で、だし、唐揚げ、刺身 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸の地下] 四条烏丸の交差点の地下、外に出ずに行ける大きく落ち着いた和の居酒屋。宴会向けの半個室も。唐揚げやチキン南蛮の1,000円からのお得な昼の定食、週末のミニ懐石、夜は魚中心の料理とコース。2026年8月の団体客はミニ懐石の量が少なく、頼んだ飲み物が来なかったという。22時半まで。',
  });
}

save();
