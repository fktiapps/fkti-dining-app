// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 62.
//   + chi chi (croissant-cone soft serve and natural wine from the ekaki team, Ayanokoji) — rest
//   + たんしゃぶ しんじょう Tanshabu Shinjo (beef-tongue shabu-shabu and Kyoto sukiyaki, Gion Dangurio) — rest
//   + kabura (Italian bistro and natural wine, Kyoto turnip pasta, Takoyakushi) — rest
//   + 田中鶏卵 Tanaka Keiran (dashimaki egg shop in Nishiki Market) — rest
//   - skip 26026108 デービッド オットー ジュース (no 2025–26 review)
//   - skip 26044702 Qoo (no reviews)
//   - skip 26043838 祇園カントリークラブ (not enough sourced detail)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: "kabura" matched only
//   祇園 かぶら屋 (26001441, a different shop); ekaki (chi chi's sister) is in data (kyoto_ekaki, osw8-2); no other rulings.
//   Same-name counts first (2026-11-07): chi chi — one; reviews describe it as part of the local ekaki group, already in data,
//   so drafted as a sister concept. たんしゃぶ しんじょう — one. kabura — one in Kyoto (other "Kabura" are unrelated); reviews
//   say Shusaku Toba (SIO) supervises the menu. 田中鶏卵 — one. None of the four is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: しんじょう 「500円」 (the English says service charge); the others none.
//   No halal claims; no owner deaths; no single-review remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026108', 'no 2025–26 review: DAVID OTTO JUICE in BAL Kyoto has no Tabelog review later than June 2022 (https://tabelog.com/en/kyoto/A2601/A260203/26026108/).');
skip('26044702', 'no reviews: Qoo, a buffet listing, has no Tabelog reviews to source from (https://tabelog.com/en/kyoto/A2601/A260301/26044702/).');
skip('26043838', 'not enough sourced detail: Gion Country Club, a screen-golf bar, has one Tabelog review (April 2026) (https://tabelog.com/en/kyoto/A2601/A260301/26043838/).');

// ================================================================ chi chi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037058/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://chichi.storeinfo.jp/';
  const H = day(['13:00', '21:30']);
  put({
    id: 'kyoto_chi_chi_ayanokoji', name: 'chi chi', category: 'OMNI',
    lat: 35.002502, lng: 135.764714, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soft serve served in a croissant cone (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dairy soft serve in a butter croissant (2025–26 reviews).',
    hours_raw: 'Daily 13:00–21:30; closed irregularly; hours may change (Tabelog). An August 2026 visitor found it opening only at 17:00 that day. No reservations (Tabelog). Cards and QR accepted; no e-money (Tabelog). Non-smoking (Tabelog). k3building 2F, near Ayanokoji, about 8 min from Karasuma (Tabelog; August 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji, between Karasuma and Kawaramachi',
    cuisine: 'Soft serve in a flaky croissant cone with natural wine — a dessert spot from the team behind the bistro ekaki (2025–26 reviews) · choose cone, flavour and toppings; free decorative picks and a bear-shaped topping (August 2025; August 2026) · flavours such as pistachio, strawberry, vanilla, raspberry, chocolate, azuki vanilla (2025–26 reviews) · vanilla pudding and chocolate-pistachio croissant soft serve; parfaits (August 2026)',
    website: OF, gmaps: gm('chi chi 京都 ソフトクリーム'), menu_url: OF,
    notes: '[Dessert and wine · Ayanokoji, croissant soft serve] A second-floor dessert bar from the ekaki bistro team, serving soft serve piled into a flaky croissant cone — pick flavours, toppings and cute picks for the photo — with natural wine for a sweet night-café stop. Eat quickly; it is messy and melts fast. Hours can shift, so check before going.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a soft-serve shop. Reviews in 2025–26 describe it as part of the ekaki group, pairing croissant soft serve with natural wine.',
      philosophy: null, specialty: 'Croissant-cone soft serve.',
      anecdotes: [
        { text: 'A June 2025 visitor found the croissant cone crumbly, and the staff said the mess was no problem and brought water for a coughing friend.', source: R + 'B515545492/' },
        { text: 'A February 2026 visitor came for the unusual pairing of wine with soft serve.', source: R + 'B523382930/' },
        { text: 'An August 2026 visitor arrived at the listed 13:00 opening to find it opening at 17:00.', source: R + 'B533432628/' },
      ],
      japanese_sources_summary: '食べログ: ソフトクリーム、下京区塩屋町62-1 k3building 2F、京都河原町駅から約380m、毎日13:00〜21:30、不定休、予約不可、カード・QR 可、禁煙。口コミ (2025年6月〜2026年8月、英語): ekaki の系列、クロワッサンのコーンのソフトクリームと自然派ワイン、コーンと味とトッピングを選べる、ピックやクマの飾り、ピスタチオ、いちご、バニラ、ラズベリー、チョコ、あずきバニラ、プリン、パフェ、崩れやすく溶けやすい、17時開店の日も。',
      confidence: 'medium', sources: [TB, OF, R + 'B508045956/', R + 'B508487639/', R + 'B515545492/', R + 'B515855684/', R + 'B516242688/', R + 'B521444533/', R + 'B523382930/', R + 'B526004991/', R + 'B533432628/', R + 'B534069270/', R + 'B534092338/', R + 'B535037809/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a cone, flavour and toppings at the counter; check the day\'s hours first. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区塩屋町62-1 k3building 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002502, 135.764714); cross-checked: GSI 京都府京都市下京区塩屋町62番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534069270/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Croissant-cone soft serve', '', 'Soft serve', 'no', 'no', '2025–26 reviews.', 'croissant_soft'),
      it('', '', 'Natural wine', '', 'Drinks', 'ask', 'ask', 'June 2025; February 2026.', 'natural_wine'),
    ] }, {
    cuisine: 'サクサクのクロワッサンのコーンのソフトクリームと自然派ワイン。ビストロ ekaki の系列のデザートの店 (2025〜2026年の口コミ)・コーン、味、トッピングを選べ、飾りのピックやクマのトッピングも (2025年8月、2026年8月)・ピスタチオ、いちご、バニラ、ラズベリー、チョコ、あずきバニラなど (2025〜2026年の口コミ)・バニラプリンやチョコとピスタチオのクロワッサンソフト、パフェ (2026年8月)',
    neighborhood: '綾小路、烏丸と河原町の間',
    gf_detail: 'グルテンフリーではない。クロワッサンのコーンのソフトクリーム (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。乳製品のソフトクリームとバターのクロワッサン (2025〜2026年の口コミ)。',
    notes: '[デザートとワイン・綾小路、クロワッサンのソフト] ビストロ ekaki の系列の2階のデザートバー。サクサクのクロワッサンのコーンにソフトクリームを盛り、味やトッピング、写真用のピックを選んで、自然派ワインと夜カフェに。崩れやすく溶けやすいので早めに。営業時間は変わることがあるので確認を。',
  });
}

// ================================================================ たんしゃぶ しんじょう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021068/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.gionshinjo.com/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_tanshabu_shinjo', name: 'たんしゃぶ しんじょう (Tanshabu Shinjo)', category: 'OMNI',
    lat: 35.001469, lng: 135.772527, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Beef-tongue shabu-shabu in a house dashi with ponzu, sukiyaki, sashimi and fried dishes (2017–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tongue shabu-shabu and wagyu sukiyaki (Tabelog; 2024–25 reviews).',
    hours_raw: 'Mon–Sat and holidays 18:00–23:00 (last order 22:00); closed Sunday; may close on holidays (Tabelog). Reservations accepted; 100% fee for same-day cancellation (Tabelog). Charge ¥500 (Tabelog, Japanese text: 「500円」). Cards and QR incl. PayPay; no e-money (Tabelog). 29 seats: a counter of 7, a table for 4 and a private room for 6–12 (Tabelog). Designated smoking area (Tabelog). On Yamato-oji south of Dangurio, 5 min from Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji, south of Shijo — Gion-Shijo',
    cuisine: 'Beef-tongue shabu-shabu ("tanshabu") in a house dashi, including Omi-beef tongue, and top-grade wagyu Kyoto-style sukiyaki, with courses (Tabelog) · thin-sliced tongue dipped in hot broth, then ponzu (May and October 2025) · omakase course (December 2025) · sashimi of three kinds and fried dishes (February 2017) · menchi-katsu during the Toka Ebisu festival (January 2023)',
    website: OF, gmaps: gm('たんしゃぶ しんじょう 祇園'), menu_url: OF,
    notes: '[Beef-tongue shabu-shabu · Gion, south of Shijo] A casual Gion izakaya specialising in tanshabu — paper-thin beef tongue, including Omi beef, swished in a house dashi and dipped in ponzu — plus wagyu Kyoto-style sukiyaki and courses, at a counter or in a private room. ¥500 charge; book ahead and note the same-day cancellation fee. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a restaurant specialising in beef-tongue shabu-shabu in its own dashi and top-grade wagyu Kyoto-style sukiyaki, with plans featuring Omi-beef tongue.',
      philosophy: null, specialty: 'Beef-tongue shabu-shabu.',
      anecdotes: [
        { text: 'An October 2025 repeat visitor found the tongue so light in the hot pot that it seemed possible to eat endlessly.', source: R + 'B515505788/' },
        { text: 'A December 2025 first-timer booked the omakase on others\' recommendation.', source: R + 'B520474379/' },
        { text: 'An October 2018 diner was unconvinced by tanshabu and did not plan to return.', source: R + 'B366533171/' },
      ],
      japanese_sources_summary: '食べログ: しゃぶしゃぶ・居酒屋・ホルモン、東山区大和大路団栗下る博多町73、祇園四条駅から徒歩5分、月〜土・祝18:00〜23:00 (L.O. 22:00)、日曜休み、予約可、当日キャンセルは100%、チャージ500円、カード・QR 可、29席 (カウンター7、4人席、個室6〜12名)、分煙、自家製の出汁の牛タンしゃぶしゃぶ、Omi 牛のタン、極上和牛の京風すき焼き、コース。口コミ (2017年2月〜2025年12月、英語): たんしゃぶをポン酢で、おまかせのコース、刺身3種、揚げ物、Toka Ebisuのメンチカツ、気軽な居酒屋の雰囲気。',
      confidence: 'medium', sources: [TB, OF, R + 'B247038027/', R + 'B260782462/', R + 'B315590304/', R + 'B323991004/', R + 'B366533171/', R + 'B411387218/', R + 'B484936489/', R + 'B504393494/', R + 'B515505788/', R + 'B519234873/', R + 'B520474379/', R + 'B523321854/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a tanshabu course; same-day cancellations are charged in full; ¥500 charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路団栗下る博多町73',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.001469, 135.772527); cross-checked: GSI 京都府京都市東山区博多町73番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; Tabelog budget ¥6,000–7,999; ¥500 charge.', last_checked: TODAY, items: [
      it('', '', 'Beef-tongue shabu-shabu (tanshabu)', '', 'Hot pots', 'ask', 'no', '2025 reviews.', 'tanshabu'),
      it('', '', 'Kyoto-style wagyu sukiyaki', '', 'Hot pots', 'ask', 'no', 'Tabelog.', 'sukiyaki'),
      it('', '', 'Charge', '¥500', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '自家製の出汁の牛タンのしゃぶしゃぶ「たんしゃぶ」(Omi 牛のタンも) と極上和牛の京風すき焼き、コース (食べログ)・薄切りのタンを熱い出汁にくぐらせポン酢で (2025年5月・10月)・おまかせのコース (2025年12月)・刺身3種と揚げ物 (2017年2月)・Toka Ebisuのころのメンチカツ (2023年1月)',
    neighborhood: '大和大路、四条の南。祇園四条駅',
    gf_detail: '要確認。出汁とポン酢の牛タンのしゃぶしゃぶ、すき焼き、刺身、揚げ物 (2017〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。牛タンのしゃぶしゃぶと和牛のすき焼き (食べログ、2024〜2025年の口コミ)。',
    notes: '[牛タンしゃぶしゃぶ・祇園、四条の南] Omi 牛を含む薄切りの牛タンを自家製の出汁にくぐらせポン酢で食べる「たんしゃぶ」専門の気軽な居酒屋。和牛の京風すき焼きやコースも、カウンターか個室で。チャージ500円、予約を、当日キャンセルは全額。日曜休み。',
  });
}

// ================================================================ kabura
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040874/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['17:00', '22:30']); const H = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kabura_takoyakushi', name: 'kabura', category: 'OMNI',
    lat: 35.006128, lng: 135.765744, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pasta-led Italian bistro with bruschetta and bread (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: whitebait, liver, pâté, wagyu fillet, bottarga pasta (2026 reviews).',
    hours_raw: 'Mon–Tue 17:00–22:30; Wed–Sun 11:30–15:00 and 17:00–22:30 (last orders 14:00 and 21:45); closed over New Year (Tabelog). Reservations accepted and advised — walk-ins often turned away (Tabelog; April 2026). Cards incl. QR (PayPay, Alipay, WeChat Pay) and e-money (Tabelog). About 24 seats incl. a street-facing counter and a terrace; standing room (Tabelog; June 2026). Non-smoking (Tabelog). Glass-fronted, on Takoyakushi near Fuyacho, 5 min from Kyoto-Kawaramachi (Tabelog; April 2026). Opened 29 March 2024 (Tabelog).',
    hours: { 0: MT, 1: MT, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi, near Fuyacho — Kyoto-Kawaramachi',
    cuisine: 'A casual Italian bistro of natural wine and meat dishes, named after the Kyoto turnip that goes into its signature pasta (Tabelog) · lunch pasta set, e.g. spring cabbage and clam aglio e olio with salad and baguette (April 2026) · whitebait and tomato bruschetta ¥300; wagyu fillet (May 2026) · bottarga pasta; cacio e pepe; fig butter (April and September 2026) · white-liver bruschetta with raisin bread, Kyoto water-eggplant frittata, pâté (October 2026)',
    website: null, gmaps: gm('kabura 京都 蛸薬師'), menu_url: TB,
    notes: '[Italian bistro · Takoyakushi, natural wine and Kyoto turnip pasta] A bright, glass-fronted bistro with a terrace, serving pasta — including its namesake Kyoto turnip — small plates like ¥300 whitebait bruschetta and white-liver toast, and meat dishes with natural wine; lunch pasta sets Wednesday to Sunday. Reviews say Shusaku Toba (SIO) supervises the menu. Book ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a casual Italian restaurant opened in March 2024, named after kabura, a Kyoto turnip used in its signature pasta. Reviews in April and June 2026 say the menu is supervised by chef Shusaku Toba of SIO.',
      philosophy: null, specialty: 'Kyoto turnip pasta; natural wine.',
      anecdotes: [
        { text: 'An April 2026 neighbour who had missed it for two years found it now opens at lunch, with R&B playing on an analog system.', source: R + 'B525436438/' },
        { text: 'An April 2026 walk-in found it hard to get a table and was turned away on a second try without a booking.', source: R + 'B532011302/' },
        { text: 'A June 2026 diner at the street-facing counter felt awkward meeting passers-by\'s eyes.', source: R + 'B530043765/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・バル・立ち飲み、中京区蛸屋町151 カッソーナアレックスビル 1F、阪急河原町駅から徒歩5分、月火17:00〜22:30、水〜日11:30〜15:00と17:00〜22:30 (L.O. 14:00、21:45)、年末年始休み、予約可、カード・電子マネー・QR 可、約24席とテラス、立ち飲み、禁煙、2024年3月29日オープン、自然派ワインと肉料理の気軽なイタリアン、京野菜の kabura のパスタが名物。口コミ (2026年4月〜10月、英語): Shusaku Toba (SIO) の監修、春キャベツとあさりのアーリオオーリオのランチ、しらすとトマトのブルスケッタ300円、和牛フィレ、からすみのパスタ、カチョエペペ、いちじくバター、白レバーのブルスケッタ、京都の水なすのフリッタータ、パテ、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B525436438/', R + 'B525996363/', R + 'B527060748/', R + 'B528934587/', R + 'B529203506/', R + 'B530043765/', R + 'B531974126/', R + 'B532011302/', R + 'B534301020/', R + 'B534897158/', R + 'B536416229/', R + 'B538044459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; lunch Wednesday to Sunday; ask for a table rather than the street-facing counter if you prefer. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸屋町151 カッソーナアレックスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006128, 135.765744); cross-checked: GSI 京都府京都市中京区蛸屋町151番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528934587/'],
    price_note: 'One price from May 2026.', last_checked: TODAY, items: [
      it('', '', 'Whitebait and tomato bruschetta', '¥300', 'Small plates', 'no', 'no', 'May 2026.', 'shirasu_bruschetta'),
      it('', '', 'Lunch pasta set (with salad and baguette)', '', 'Lunch', 'no', 'ask', 'April 2026.', 'lunch_pasta'),
      it('', '', 'Bottarga pasta', '', 'Pasta', 'no', 'no', 'April 2026.', 'bottarga'),
    ] }, {
    cuisine: '自然派ワインと肉料理の気軽なイタリアンのビストロ。店名は名物のパスタに使う京野菜の kabura から (食べログ)・春キャベツとあさりのアーリオオーリオなどのランチのパスタ、サラダとバゲット付き (2026年4月)・しらすとトマトのブルスケッタ300円、和牛のフィレ (2026年5月)・からすみのパスタ、カチョエペペ、いちじくバター (2026年4月・9月)・白レバーのブルスケッタとレーズンパン、京都の水なすのフリッタータ、パテ (2026年10月)',
    neighborhood: '蛸薬師、麩屋町の近く。京都河原町駅',
    gf_detail: 'グルテンフリーではない。パスタが中心でブルスケッタやパンもあるイタリアンのビストロ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。しらす、レバー、パテ、和牛のフィレ、からすみのパスタ (2026年の口コミ)。',
    notes: '[イタリアンのビストロ・蛸薬師、自然派ワインと kabura のパスタ] テラスもあるガラス張りの明るいビストロ。店名の kabura のパスタ、300円のしらすのブルスケッタや白レバーのトースト、肉料理を自然派ワインと。水〜日は昼のパスタセットも。口コミではShusaku Toba (SIO) の監修。予約を。',
  });
}

// ================================================================ 田中鶏卵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006098/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.kyoto-nishiki.or.jp/stores/tanakakeiran/';
  const WD = day(['09:00', '17:00']); const WE = day(['09:00', '18:00']);
  put({
    id: 'kyoto_tanaka_keiran_nishiki', name: '田中鶏卵 (Tanaka Keiran)', category: 'OMNI',
    lat: 35.005055, lng: 135.764798, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashimaki made with dashi, with a dashimaki sandwich also sold (2022–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg rolled with fish dashi (2022–26 reviews).',
    hours_raw: 'Mon–Fri 9:00–17:00; Sat–Sun 9:00–18:00; open all year except New Year; hours may change (Tabelog). Year-end orders not available (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Take-away, with a spot in front to eat — eating while walking is not allowed in the market (September 2025). Popular sizes can sell out; the rolls are made behind glass (January 2024). On Nishiki Market west of Tominokoji (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, west of Tominokoji',
    cuisine: 'Dashimaki tamago from an egg shop in Nishiki Market (2018–26 reviews) · original thick dashimaki ¥850 (January 2024); medium dashimaki ¥950 (November 2025); small sizes (March 2026) · dashimaki sandwich with a hint of sansho, ¥1,000 (December 2022) · dashimaki on a skewer and cut pieces to eat at the shop (2019; September 2025) · umaki, a New Year favourite (December 2018)',
    website: OF, gmaps: gm('田中鶏卵 錦市場'), menu_url: OF,
    notes: '[Dashimaki · Nishiki Market, an egg shop] A Nishiki Market egg shop rolling fluffy, dashi-soaked dashimaki tamago behind glass: thick original rolls from about ¥850, small and medium sizes, cut pieces to eat on the spot, a sansho-scented dashimaki sandwich and umaki. A New Year stalwart for regulars. Cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the Nishiki Market site: an egg shop in Nishiki Market. A December 2018 regular had been buying its dashimaki and umaki for New Year since 2008.',
      philosophy: null, specialty: 'Dashimaki tamago.',
      anecdotes: [
        { text: 'A December 2018 regular has bought the dashimaki and umaki for New Year every year since 2008.', source: R + 'B67777224/' },
        { text: 'A January 2024 visitor waited ten minutes for a sold-out thick roll, watching it made through the glass.', source: R + 'B478801434/' },
        { text: 'A September 2025 first-timer to Nishiki ate the cut pieces at the shop front, since eating while walking is banned.', source: R + 'B514033542/' },
      ],
      japanese_sources_summary: '食べログ: その他、中京区錦小路通富小路西入東魚屋町185、地下鉄四条駅20番出口から徒歩10分、月〜金9:00〜17:00、土日9:00〜18:00、年末年始以外は無休、予約可 (年末は不可)、現金のみ、禁煙。公式 (錦市場): 田中鶏卵。口コミ (2018年12月〜2026年5月、英語): 出汁のきいただし巻き、元祖の厚焼き850円、中950円、小、山椒の香るだし巻きサンド1,000円、串のだし巻き、店先で食べる、売り切れることも、ガラス越しに焼くところを見られる、正月の定番のumaki。',
      confidence: 'medium', sources: [TB, OF, R + 'B421553709/', R + 'B454298426/', R + 'B457506747/', R + 'B473549532/', R + 'B478801434/', R + 'B512230468/', R + 'B514033542/', R + 'B517536586/', R + 'B524411127/', R + 'B527799005/', R + 'B528942011/', R + 'B67777224/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the size you want; cash only; eat at the shop front, not while walking. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通富小路西入東魚屋町185',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Nishiki Market site; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005055, 135.764798); cross-checked: GSI 京都府京都市中京区東魚屋町185番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B478801434/', R + 'B517536586/', R + 'B457506747/'],
    price_note: 'Prices from 2022–25 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Original thick dashimaki', '¥850', 'Dashimaki', 'ask', 'no', 'January 2024.', 'atsuyaki'),
      it('', '', 'Dashimaki (medium)', '¥950', 'Dashimaki', 'ask', 'no', 'November 2025.', 'dashimaki_m'),
      it('', '', 'Dashimaki sandwich', '¥1,000', 'Sandwiches', 'no', 'no', 'December 2022.', 'sando'),
      it('', '', 'Umaki', '', 'Dashimaki', 'ask', 'no', 'December 2018.', 'umaki'),
    ] }, {
    cuisine: '錦市場の卵の店のだし巻き (2018〜2026年の口コミ)・元祖の厚焼きだし巻き850円 (2024年1月)、中950円 (2025年11月)、小 (2026年3月)・山椒がほのかに香るだし巻きサンド1,000円 (2022年12月)・串のだし巻きや店先で食べられる切ったもの (2019年、2025年9月)・正月の定番のumaki (2018年12月)',
    neighborhood: '錦市場、富小路の西',
    gf_detail: '要確認。出汁のだし巻き、だし巻きサンドもある (2022〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚の出汁で巻いた卵 (2022〜2026年の口コミ)。',
    notes: '[だし巻き・錦市場、卵の店] 錦市場の卵の店。ガラス越しに焼く、出汁がしみたふわふわのだし巻き。厚焼きは約850円から、小と中、店先で食べられる切ったもの、山椒の香るだし巻きサンドやumakiも。常連の正月の定番。現金のみ。',
  });
}

save();
