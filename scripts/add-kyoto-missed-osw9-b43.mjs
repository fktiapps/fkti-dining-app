// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 43.
//   + FROMAGERIE Harmonie (basement cheese shop and cheesecake counter in Okazaki)                            [core]
//   + IMAYA Kyoto &COFFEE (Neapolitan-style café of a guesthouse near Oike, open from 6:00)                    [core]
//   + オールデイダイニング ラジョウ All Day Dining Rajou (Kyoto Century Hotel's buffet restaurant, by Kyoto Stn) [notable]
//   + ベジョータ ムチョ 室町店 Beyota Mucho (Spanish charcoal grill and jamón in a machiya near Shijo)          [notable]
//   Same-name counts first (same brand or operator): Harmonie 1; IMAYA 1; ラジョウ 1 — the hotel's own restaurant,
//   no hotel-wide record for the Kyoto Century Hotel; ベジョータ — ムアムア 烏丸三条店, コンチャ 富小路店 and this
//   ムチョ 室町店 (crawl), none in data, a small group, this one drafted.
//   Taken in queue order on 2026-11-06: core 26028629, 26029703; notable 26000879, 26018387. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ラジョウ 「サービス料15%※2025年4月1日のご利用より
//   サービス料をご利用額（税抜）の15%に改定させていただきます。」; ベジョータ "無し"; the others have no section.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ FROMAGERIE Harmonie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028629/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.harmonie-de-vin.com/';
  const L = day(['11:00', '17:30']); const S = day(['11:00', '16:30']);
  put({
    id: 'kyoto_fromagerie_harmonie', name: 'フロマージェリー アルモニー (FROMAGERIE Harmonie)', category: 'OMNI',
    lat: 35.013444, lng: 135.779803, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cheesecakes; crusts are not described (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese shop and cheesecake café (Tabelog).',
    hours_raw: 'Sat–Mon 11:00–17:30 (last order 17:00); Tue, Wed and Fri 11:00–16:30 (last order 16:00); closed Thursday (Tabelog). Cards, e-money and QR (Tabelog). 8 counter seats in a small basement room, often full; take-away cheesecakes and cheeses (Tabelog; 2025 reviews). Non-smoking. In the basement of a narrow building on Nijo-dori in Okazaki, near Miyako Messe and Heian Shrine; 7 min from Higashiyama Stn (Tabelog; 2025–26 reviews).',
    hours: { 0: L, 1: S, 2: S, 4: S, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, Nijo-dori near Heian Shrine — Higashiyama Stn',
    cuisine: 'A cheese shop with a cheesecake café: six kinds of cheesecake — ricotta, mascarpone, Gorgonzola with half the usual sugar, fresh caramel and Gouda ¥650 (December 2025) — in a cake set with a drink for ¥1,100; Ronnefeldt teas such as cream orange, served in a pot ¥490; cheeses to take home (2024–26 reviews)',
    website: SITE, gmaps: gm('FROMAGERIE Harmonie 京都'), menu_url: null,
    notes: "[Cheese shop & cheesecake · Okazaki] A tiny basement cheese shop off Nijo-dori with eight counter seats: six rich cheesecakes — try the Gorgonzola or ricotta — with Ronnefeldt tea for ¥1,100, and cheeses to take away. Handy after the museums. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: one of the few cheese specialists in Kyoto, with a cheesecake counter in the basement.',
      philosophy: null, specialty: 'Cheesecake.',
      anecdotes: [
        { text: 'A September 2025 visitor was told a ricotta cheesecake and cream orange tea "work well together" — and found the pairing worked.', source: R + 'B514075363/' },
        { text: 'Finding the eight seats full in September 2025, a visitor was about to leave when someone vacated a seat.', source: R + 'B514440151/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): FROMAGERIE Harmonie (フロマージェリー アルモニー)、カフェ・ケーキ、左京区岡崎成勝寺町1-8 B1F、東山駅から443m、土〜月 11:00〜17:30 (L.O. 17:00)、火水金 11:00〜16:30 (L.O. 16:00)、木曜休み、カード・電子マネー・QR 可、8席、禁煙。口コミ (2024年8月〜2026年6月、英語): 京都でも数少ないチーズ専門店、地下の小さなカウンター、チーズケーキ6種 (リコッタ、マスカルポーネ、甘さ半分のゴルゴンゾーラ、生キャラメルとゴーダ650円)、ケーキセット1,100円、ロンネフェルトの紅茶490円、持ち帰りのチーズ、満席になることも。',
      confidence: 'medium', sources: [TB, SITE, R + 'B505685776/', R + 'B508699157/', R + 'B514075363/', R + 'B514440151/', R + 'B518405985/', R + 'B527671409/', R + 'B529288103/', R + 'B535447274/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; staff suggest tea pairings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎成勝寺町1-8 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.013444, 135.779803); cross-checked: GSI 京都府京都市左京区岡崎成勝寺町1番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518405985/'],
    price_note: 'No menu read; prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Cake set (cheesecake and drink)', '¥1,100', 'Cafe', 'ask', 'no', 'December 2025 review.', 'cake_set'),
      it('', '', 'Fresh caramel and Gouda cheesecake', '¥650', 'Cakes', 'ask', 'no', 'December 2025 review.', 'gouda_caramel'),
    ] }, {
    cuisine: 'チーズケーキのカフェを併設したチーズ専門店: リコッタ、マスカルポーネ、甘さ半分のゴルゴンゾーラ、生キャラメルとゴーダ650円 (2025年12月) など6種のチーズケーキに、ドリンク付きのケーキセット1,100円。ポットで出すクリームオレンジなどのロンネフェルトの紅茶490円、持ち帰りのチーズ (2024〜26年の口コミ)',
    neighborhood: 'Heian Shrine 近くの二条通、岡崎。東山駅',
    gf_detail: '要確認。チーズケーキ。台の生地の説明はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズ専門店とチーズケーキのカフェ (食べログ)。',
    notes: '[チーズ専門店とチーズケーキ・岡崎] 二条通の小さな地下のチーズ専門店に8席のカウンター。濃厚なチーズケーキ6種 (ゴルゴンゾーラやリコッタを) にロンネフェルトの紅茶で1,100円、チーズの持ち帰りも。美術館帰りに。木曜休み。',
  });
}

// ================================================================ IMAYA Kyoto &COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029703/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.imaya.jp';
  const W = day(['06:00', '13:00'], ['16:00', '20:00']); const E = day(['06:00', '13:00']);
  put({
    id: 'kyoto_imaya_coffee', name: 'イマヤ ホステルキョウトプラスコーヒー (IMAYA Kyoto &COFFEE)', category: 'OMNI',
    lat: 35.011495, lng: 135.755816, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breakfast is toast or a hot sandwich (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: breakfast with egg, chicken, cheese and yogurt; milk coffees (2025–26 reviews).',
    hours_raw: 'Mon–Fri 6:00–13:00 and 16:00–20:00; Sat–Sun 6:00–13:00; hours may change (Tabelog). Bookings taken (Tabelog). Cards and PayPay (Tabelog). 15 seats with counter and sofas; non-smoking (Tabelog). Some staff speak English (November 2025 review). The café of the IMAYA guesthouse, in a renovated machiya near Okine Shrine; 5 min from Karasuma Oike Stn, near Nijojo-mae (Tabelog; 2025–26 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Okine Shrine — between Karasuma Oike and Nijojo-mae',
    cuisine: 'Neapolitan-style café: cappuccino ¥620 (March 2026) in Passalacqua cups, espresso; one breakfast set — a hot sandwich of chicken, cheese and lettuce with a soft-boiled egg ¥1,040 (June 2026), earlier toast, egg and yogurt; fresh orange juice from a Zummo press; Italian craft beers such as KBIRR\'s PullicenHell and still waters (2025–26 reviews)',
    website: SITE, gmaps: gm('IMAYA Kyoto &COFFEE'), menu_url: null,
    notes: "[Neapolitan café · near Oike] A bright machiya café attached to a guesthouse, open from 6:00: a creamy cappuccino reviewers call the best ever, a hot-sandwich breakfast (about ¥1,000), fresh orange juice and Neapolitan craft beer. Popular with Italian and other foreign visitors; English spoken.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who also runs a guesthouse'], origin: null,
      background: 'A June 2026 reviewer says the owner, passionate about coffee, also runs a guesthouse; an August 2026 regular of four years says the café was featured in the southern Italian paper Il Mattino and on Italian media, and draws ever more Italian visitors.',
      philosophy: null, specialty: 'Cappuccino.',
      anecdotes: [
        { text: 'A couple who loved this coffee in Naples came in July 2026 on a friend\'s tip and found the room full of the city\'s atmosphere.', source: R + 'B533584772/' },
        { text: 'A September 2026 guest who dislikes soft-boiled eggs had the egg cooked through on request.', source: R + 'B536679618/' },
      ],
      japanese_sources_summary: '食べログ: IMAYA Kyoto &COFFEE (イマヤ ホステルキョウトプラスコーヒー)、カフェ、中京区釜座通御池上ル下松屋町726-4、烏丸御池駅から357m、月〜金 6:00〜13:00・16:00〜20:00、土日 6:00〜13:00、予約可、カード・PayPay 可、15席、禁煙。口コミ (2025年11月〜2026年9月、英語): ナポリ風のカフェ、カプチーノ620円 (Passalacqua のカップ)、朝食セット (鶏とチーズのホットサンドと半熟卵1,040円)、Zummo の生オレンジジュース、イタリアのクラフトビール、ゲストハウスも営む店主、Il Mattino に掲載、外国人客やイタリア人客が多い、英語を話すスタッフ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B516592021/', R + 'B516950209/', R + 'B517763481/', R + 'B521455872/', R + 'B524283983/', R + 'B528231640/', R + 'B529763751/', R + 'B533584772/', R + 'B533967063/', R + 'B536679618/'] },
    cultural_comfort: { level: 'english', note: 'Some English-speaking staff (November 2025 review); many international guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区釜座通御池上ル下松屋町726-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011495, 135.755816); cross-checked: GSI 京都府京都市中京区下松屋町726番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524283983/', R + 'B529763751/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cappuccino', '¥620', 'Drinks', 'ask', 'no', 'March 2026 review.', 'cappuccino'),
      it('', '', 'Breakfast (hot sandwich, soft-boiled egg)', '¥1,040', 'Breakfast', 'no', 'no', 'June 2026 review.', 'breakfast'),
    ] }, {
    cuisine: 'ナポリ風のカフェ: Passalacqua のカップのカプチーノ620円 (2026年3月)、エスプレッソ。朝食は一種類で、鶏・チーズ・レタスのホットサンドと半熟卵1,040円 (2026年6月)、以前はトースト、ゆで卵、ヨーグルト。Zummo で搾る生オレンジジュース、KBIRR などのイタリアのクラフトビールとミネラルウォーター (2025〜26年の口コミ)',
    neighborhood: 'Okine Shrine 近く。烏丸御池と二条城前の間',
    gf_detail: 'グルテンフリー不可。朝食はトーストかホットサンド (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵、鶏、チーズ、ヨーグルトの朝食、ミルクのコーヒー (2025〜26年の口コミ)。',
    notes: '[ナポリ風カフェ・御池近く] ゲストハウス併設の明るい町家のカフェで、朝6時から。人生一とも評されるクリーミーなカプチーノ、ホットサンドの朝食 (千円ほど)、生オレンジジュース、ナポリのクラフトビール。イタリアなど海外の客が多く、英語も通じる。',
  });
}

// ================================================================ オールデイダイニング ラジョウ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000879/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.keihanhotels-resorts.co.jp/kyoto-centuryhotel/';
  const W = day(['11:30', '15:00'], ['17:30', '21:30']); const E = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_all_day_dining_rajou', name: 'オールデイダイニング ラジョウ (All Day Dining Rajou)', category: 'OMNI',
    lat: 34.986167, lng: 135.761617, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A buffet of Japanese, Western and Chinese dishes, grilled meats and desserts; dish labelling not described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads and vegetables among many meat, fish and dairy dishes (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 daily; dinner 17:30–21:30 on weekdays, 17:30–21:00 at weekends and holidays (Tabelog); a breakfast buffet also runs (September 2026 review). Bookings taken; 100% cancellation charge from two days before (Tabelog). Service charge: 15% — Tabelog\'s Japanese original says 「サービス料15%※2025年4月1日のご利用よりサービス料をご利用額（税抜）の15%に改定させていただきます。」. Cards, IC cards and QR (Tabelog). 90 seats under a six-storey atrium; non-smoking; parking 50 cars, ¥800 per 30 min with restaurant benefits (Tabelog). 2F of the Kyoto Century Hotel, 2 min east of Kyoto Station\'s central gate (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Century Hotel, east of Kyoto Station',
    cuisine: 'Hotel buffets under an atrium (Tabelog): "THE THEATER BUFFET" with a live kitchen — the "Meat Theater" rotating nine meat dishes in sets of three every 30 minutes, wagyu roast beef, wagyu yuan-yaki, meat pie — plus Japanese, Western and Chinese dishes, curry, pumpkin potage and desserts such as freshly shaved Mont Blanc; lunch with all-you-can-drink; a morning buffet with omelettes, Kyoto pickles, tofu and sake; seasonal sweets buffets, e.g. HELLO KITTY RIBBON RIBBON ¥7,200–8,500 (September–November 2026) (2026 reviews)',
    website: SITE, gmaps: gm('ラジョウ 京都センチュリーホテル'), menu_url: TB + 'dtlmenu/',
    notes: "[Hotel buffet · Kyoto Century Hotel by Kyoto Station] The hotel's bright atrium restaurant, two minutes from the station: a theatre-style buffet whose live kitchen rotates wagyu roast beef and other meats every half hour, plus breakfast and seasonal sweets buffets. Dinner about ¥6,000–9,000 before the 15% service charge.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the Kyoto Century Hotel (no person named)'], origin: null,
      background: 'Opened 11 August 2012 (Tabelog), in the Kyoto Century Hotel of Keihan Hotels & Resorts (official site). A long-time regular notes a significant renovation in 2026 (September 2026 review).',
      philosophy: null, specialty: 'Theatre-style buffet with live meat kitchen.',
      anecdotes: [
        { text: 'An August 2026 guest found the buffet tasty but narrow for a hotel, with meats ordered and grilled in turns so one could not eat much, and the value not great.', source: R + 'B536514148/' },
        { text: 'A September 2026 lunch guest found the all-you-can-drink service a little slow.', source: R + 'B535502570/' },
        { text: 'Before an October 2026 Shinkansen, a visitor enjoyed the weekday lunch with well-spaced tables.', source: R + 'B536587649/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): オールデイダイニング ラジョウ、レストラン・カフェ・洋食、下京区東塩小路町680 京都センチュリーホテル 2F、JR京都駅中央口から東へ徒歩2分、平日 11:30〜15:00・17:30〜21:30、土日祝 11:30〜15:00・17:30〜21:00、2日前から当日のキャンセルは100%、サービス料15% (2025年4月1日から税抜額の15%に改定)、90席、禁煙、駐車場50台、カード・電子マネー・QR 可、2012年8月11日オープン、6層吹き抜け、ライブキッチン「THE THEATER BUFFET」。公式サイト: 京阪ホテルズ&リゾーツの京都センチュリーホテル。口コミ (2026年7〜11月、英語): ミートシアター (9種の肉料理を30分ごとに3種ずつ)、和牛ローストビーフ、和牛の幽庵焼き、ミートパイ、和洋中、カレー、デザート、モンブラン、昼の飲み放題、朝食ブッフェ (オムレツ、京漬物、豆腐、日本酒)、HELLO KITTY のスイーツブッフェ7,200〜8,500円、品数が少なくコスパが良くないという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B438932578/', R + 'B532792744/', R + 'B532918757/', R + 'B535455631/', R + 'B535502570/', R + 'B535579253/', R + 'B536458572/', R + 'B536514148/', R + 'B536587649/', R + 'B538488411/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel buffet; point and serve.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町680 京都センチュリーホテル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the hotel; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.986167, 135.761617); cross-checked: GSI 京都府京都市下京区東塩小路町680番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536458572/'],
    price_note: 'No menu read; sweets-buffet prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal sweets buffet (standard / terrace)', '¥7,200 / ¥8,500', 'Buffets', 'no', 'no', 'September 2026 review; Sept–Nov 2026 weekends and holidays.', 'sweets_buffet'),
      it('', '', 'THE THEATER buffet (lunch or dinner)', '', 'Buffets', 'ask', 'ask', '2026 reviews.', 'theater_buffet'),
    ] }, {
    cuisine: '吹き抜けのホテルのブッフェ (食べログ): ライブキッチンの「THE THEATER BUFFET」。「ミートシアター」では9種の肉料理を30分ごとに3種ずつ (和牛ローストビーフ、和牛の幽庵焼き、ミートパイ)。和洋中の料理、カレー、かぼちゃのポタージュ、削りたてのモンブランなどのデザート。昼は飲み放題付きも。朝はオムレツ、京漬物、豆腐、日本酒の朝食ブッフェ。季節のスイーツブッフェ (例: HELLO KITTY RIBBON RIBBON 7,200〜8,500円、2026年9〜11月) (2026年の口コミ)',
    neighborhood: '京都駅の東、京都センチュリーホテル',
    gf_detail: '要確認。和洋中の料理、焼いた肉、デザートのブッフェ。表示の説明はない (2026年の口コミ)。',
    vegan_detail: '要確認。サラダや野菜もあるが、肉、魚、乳製品の料理が多い (2026年の口コミ)。',
    notes: '[ホテルのブッフェ・京都駅そばの京都センチュリーホテル] 駅から2分のホテルの明るい吹き抜けのレストラン。ライブキッチンが30分ごとに和牛ローストビーフなどを出すシアター型のブッフェ、朝食や季節のスイーツブッフェも。夜は6千〜9千円ほどにサービス料15%。',
  });
}

skip('26038511', 'chain: the ベジョータ group runs five shops in Kyoto and Osaka (retty.me/restaurant/100000038209; ムアムア, コンチャ, ムチョ, マス…), same ruling as ベジョータコンチャ (osw2-31) — integrator 2026-11-06');

save();
