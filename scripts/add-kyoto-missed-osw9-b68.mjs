// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 68.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 草風土 うしのほね — branch of a brand already in data (kyoto_ushinohone_anaza), as ruled for 26001079 (osw8-44)
//   + 居酒屋いいいろ Izakaya Ii Iro (Karasuma izakaya with Kagawa-style bone-in chicken; since 2024)
//   + ランス ジャポネ REIMS JAPONE (pasta, lunch sets and cakes on Gokomachi)
//   - ホルモン安東 — too thin to verify (the only 2025–26 review is one regular's list of dish names)
//   - 鳥せい 三条店 — chain (eleven 鳥せい shops in Kyoto, as ruled for 26028812)
//   - 要庵 西富家 — a ryokan: its 2025–26 reviews are repeat guests' stays; no sign the kitchen takes non-staying diners
//   + 幸福堂 Kofukudo (wagashi shop founded in Meiji 1, Matsubara main shop)
//   - PLEIN BIS 京都祇園 — PLEIN-brand counter French of the PLEIN group (9 shops in Tokyo and Kyoto; PLEIN 銀座本店 and
//     WINE BISTRO by plein 京都祇園 already in data); the group calls it a lighter take on PLEIN Ginza — treated as a branch
//   + 京都先斗町 かに侍別邸 Kanizamurai Bettei (Pontocho crab restaurant with a summer kawadoko; 2 shops)
//   Same-name counts first (data and queue-status.jsonl): うしのほね and 鳥せい have earlier rulings (followed); PLEIN in
//   Tokyo and Kyoto data; none for いいいろ, ランス ジャポネ, 安東, 西富家, 幸福堂 or かに侍. None drafted is in
//   data/kyoto.json by name or address.
//   Groups: 幸福堂 has two shops (松原本店 and 錦店, own site); かに侍 has two (先斗町 別邸 and 錦市場, own site);
//   none in data — drafted.
//   Service charges: no shop drafted here has a Tabelog service-charge section. かに侍 charges ¥500 a seat on the
//   kawadoko from May to October (Tabelog booking notes). PLEIN BIS (skipped) 「サービス料・チャージ料が含まれております。」
//   Pins (checked against main): かに侍's Tabelog point is 2.4 m from kyoto_futagoya_pontocho (same building, 2F) →
//   moved 4 m south-south-east (6.5 m clearance). The others are ≥ 22 m from any record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26029331', 'branch of a brand already in data: うしのほね (kyoto_ushinohone_anaza), as ruled for 26001079 (osw8-44)');
skip('26029541', 'too thin to verify: the only 2025–26 review is one regular\'s updated entry listing dish names (oyster kimchi, sliced heart, tongue) without description');
skip('26004911', 'chain: 鳥せい — eleven shops in Kyoto (as ruled for 26028812, 鳥せい 京都タワーサンド店)');
skip('26001155', 'a ryokan: the 2025–26 reviews are repeat guests\' stays (one without text, one describing a stay and breakfast); no evidence the kitchen serves non-staying diners');
skip('26044619', 'branch of a brand already in data: PLEIN BIS 京都祇園 is the PLEIN group\'s Kyoto counter French, described by the group as a lighter take on PLEIN 銀座本店 (tokyo_plein_ginza_honten); the group (9 shops) also has WINE BISTRO by plein 京都祇園 in data');

// ================================================================ 居酒屋いいいろ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042015/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_izakaya_iiiro_karasuma', name: '居酒屋いいいろ (Izakaya Ii Iro)', category: 'OMNI',
    lat: 35.002996, lng: 135.763409, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and dashimaki may suit, but kushi-age, gratin, spring rolls and soy-seasoned dishes are not (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, bone-in chicken, braised pork, seafood gratin (2025–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–24:00; closed Mondays, but groups can ask (Tabelog). Bookings taken; private hire by phone; no all-you-can-eat or drink as standard, but ask ahead (Tabelog). Cards and QR; no e-money (Tabelog). 28 seats, a tatami room; non-smoking; wheelchair accessible; English menu; children welcome (Tabelog). 1–3 min from Hankyu Karasuma / Shijo Stn, on Sakaimachi (Tabelog; August 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Sakaimachi — 1 min from Karasuma Stn',
    cuisine: 'Izakaya dishes and kushi-age: Kagawa-style bone-in chicken with garlic and black pepper ¥1,300 (January and August 2026), seafood gratin with homemade white sauce ¥900 (January 2026), unsweetened dashimaki ¥650, chikuwa with cucumber ¥380, draft beer ¥450, tea highball ¥600 (August 2026); sashimi platter of bonito, flying fish and flatfish from Obama, Fukui ¥1,200, fried sardines with plum, kakuni, fried aubergine (July 2025); edamame-and-cheese spring rolls, doteni (February 2025)',
    website: null, gmaps: gm('居酒屋いいいろ 烏丸'), menu_url: null,
    notes: '[Izakaya · Shijo-Karasuma] A casual izakaya a minute from Karasuma with oil-drum tables and 70s–80s music, cheap draft beer and Kagawa-style bone-in chicken, dashimaki, gratin and good-value sashimi, until midnight. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 1 August 2024 (Tabelog). A young owner, keen and careful, with music from the 1970s and 80s (February 2025 review). Tables made from oil drums (August 2026 review).',
      philosophy: null,
      specialty: 'Bone-in chicken; dashimaki.',
      anecdotes: [
        { text: 'After a live show nearby in July 2025, a group came around 9 pm and found the ¥1,200 sashimi platter of fish from Obama, Fukui the best value.', source: R + 'B509497004/' },
        { text: 'An August 2026 solo diner, alone in the room at 7 pm, paired the peppery bone-in chicken with a tea highball the house recommended.', source: R + 'B536735477/' },
        { text: 'A February 2025 diner of the 70s–80s generation enjoyed the music and the clean rooms.', source: R + 'B501721573/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋いいいろ、居酒屋・串揚げ、下京区小石町115-3 日宝堺町センタ1F、阪急烏丸駅・地下鉄四条駅から徒歩約1分、火〜日 17:00〜24:00、月曜休み (団体は相談可)、予約可、飲み放題・食べ放題は通常なし (事前に相談可)、カード・QR 可、電子マネー不可、28席、座敷、禁煙、車いす可、英語メニュー、子ども可、2024年8月1日オープン。口コミ (2025〜2026年、英語): Kagawa の骨付き鶏1,300円、自家製ホワイトソースの海鮮グラタン900円、甘くないだし巻き650円、ちくわきゅうり380円、生ビール450円、お茶のハイボール600円、Obama (Fukui) の魚の刺身盛り1,200円、梅ソースのいわしの揚げ物、角煮、揚げなす、枝豆とチーズの春巻き、doteni、若い店主、ドラム缶のテーブル。',
      confidence: 'medium', sources: [TB, R + 'B501721573/', R + 'B509497004/', R + 'B520115142/', R + 'B536735477/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区小石町115-3 日宝堺町センタ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002996, 135.763409); cross-checked: GSI 京都府京都市下京区小石町115番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536735477/', R + 'B520115142/', R + 'B509497004/'],
    price_note: 'Prices from July 2025 – August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bone-in chicken', '¥1,300', 'Grill', 'ask', 'no', 'January and August 2026 reviews.', 'honetsuki'),
      it('', '', 'Seafood gratin', '¥900', 'Plates', 'no', 'no', 'January 2026 review.', 'gratin'),
      it('', '', 'Dashimaki', '¥650', 'Plates', 'ask', 'no', 'August 2026 review.', 'dashimaki'),
      it('', '', 'Sashimi platter', '¥1,200', 'Sashimi', 'ask', 'no', 'July 2025 review.', 'sashimi'),
      it('', '', 'Draft beer', '¥450', 'Drinks', 'no', 'ask', 'August 2026 review.', 'beer'),
    ] }, {
    cuisine: '居酒屋料理と串揚げ: にんにくと黒胡椒のKagawa の骨付き鶏1,300円 (2026年1月・8月)、自家製ホワイトソースの海鮮グラタン900円 (2026年1月)、甘くないだし巻き650円、ちくわきゅうり380円、生ビール450円、お茶のハイボール600円 (2026年8月)、Obama (Fukui) のかつお・とびうお・ひらめの刺身盛り1,200円、梅ソースのいわしの揚げ物、角煮、揚げなす (2025年7月)、枝豆とチーズの春巻き、doteni (2025年2月)',
    neighborhood: '四条烏丸、堺町。烏丸駅から徒歩1分',
    gf_detail: '要確認。刺身やだし巻きは合う可能性があるが、串揚げ、グラタン、春巻き、醤油の料理は不可 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、骨付き鶏、角煮、海鮮グラタン (2025〜26年の口コミ)。',
    notes: '[居酒屋・四条烏丸] 烏丸駅から1分の気軽な居酒屋。ドラム缶のテーブルと70〜80年代の音楽、安い生ビール、Kagawa の骨付き鶏、だし巻き、グラタン、お得な刺身を深夜0時まで。3,000〜5,000円ほど。',
  });
}

// ================================================================ ランス ジャポネ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034995/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://gurunavi.com/en/kccz402/mp/rst';
  const D = day(['11:30', '17:00']);
  put({
    id: 'kyoto_reims_japone_gokomachi', name: 'ランス ジャポネ (REIMS JAPONE)', category: 'OMNI',
    lat: 35.007593, lng: 135.766389, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly pasta, tarts and cakes; a fish-and-shrimp rice set exists (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: carbonara, cream pasta, cheese tarts (2025–26 reviews).',
    hours_raw: 'Tabelog: daily 11:30–17:00 (food L.O. 16:00, drinks 16:30), closed Tuesdays. Gurunavi (undated): 11:30–22:00, Saturdays and the day before holidays to 23:00, closed Tuesdays; a June 2026 reviewer also found it open late. Bookings for meals; no online bookings for café use (Tabelog). One drink per person (September 2026 review). Cards, e-money and PayPay (Tabelog). 58 seats including a 7-seat terrace; smoking only on the terrace; children welcome (Tabelog). On Gokomachi south of Sanjo, 3 min from Kyoto-Kawaramachi exit 9 (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi, south of Sanjo — 3 min from Kawaramachi Stn',
    cuisine: 'Bistro-café: pasta lunches of about ¥1,000 with a free large portion on weekdays — bacon-heavy carbonara (2025–26), smoked-salmon cream tagliatelle ¥1,100 (June 2026); daily special ¥880 of tomato-stewed fish and kara-age (July 2026); fish-and-shrimp rice set with a tart and drink (June 2026); a case of cakes — cheese tart with a chocolate layer, apple tart, fig tart, cocoa–sweet potato–chestnut Mont Blanc (two cakes ¥1,040, September 2026); coffee in S, M or L (2026 reviews)',
    website: null, gmaps: gm('REIMS JAPONE 京都 御幸町'), menu_url: null,
    notes: '[Café & bistro · Gokomachi] A big, quirky-looking café-bistro on Gokomachi with a terrace: cheap filling pasta lunches, a counter full of tarts and cakes, and coffee by the size. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Hanging lamps each of a different design and a stylish counter at the back (September 2026 review).',
      philosophy: null,
      specialty: 'Carbonara; seasonal tarts.',
      anecdotes: [
        { text: 'A regular who eats a lot of fish comes back for the rich, bacon-heavy carbonara — six visits from 2025 to August 2026.', source: R + 'B481948967/' },
        { text: 'A July 2026 diner found the ¥880 daily special disappointing — two small soy kara-age, a little stewed fish — and suggested the free large pasta instead.', source: R + 'B531678957/' },
        { text: 'On 5 September 2026 a walker spotted a seasonal fig tart in the showcase and paired it with a bitter iced coffee.', source: R + 'B535037732/' },
      ],
      japanese_sources_summary: '食べログ: ランス ジャポネ (REIMS JAPONE)、ビストロ・カフェ・居酒屋、中京区御幸町通三条下ル八百屋町111、阪急京都河原町駅9番出口から徒歩約3分、11:30〜17:00 (料理 L.O. 16:00、ドリンク L.O. 16:30)、火曜休み、カフェ利用のネット予約不可、カード・電子マネー・PayPay 可、58席 (テラス7)、喫煙はテラスのみ、子ども可。ぐるなび (日付不明): 11:30〜22:00、土・祝前日は23:00まで、火曜休み。口コミ (2025〜2026年、英語): ベーコンたっぷりのカルボナーラ、スモークサーモンのクリームのタリアテッレ1,100円、日替わり880円、平日は大盛り無料、チーズタルト、アップルタルト、いちじくのタルト、モンブラン、ケーキ2個1,040円、飲み物は S・M・L、1人1ドリンク。',
      confidence: 'medium', sources: [TB, GN, R + 'B481948967/', R + 'B530489103/', R + 'B531018612/', R + 'B531678957/', R + 'B533482633/', R + 'B533695296/', R + 'B533789142/', R + 'B535037732/', R + 'B535143879/', R + 'B535146408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual café; children welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通三条下ル八百屋町111',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026. Evening hours disputed between Tabelog and Gurunavi.' },
    pin_source: `Tabelog ${TB} (35.007593, 135.766389); cross-checked: GSI 京都府京都市中京区八百屋町111番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531018612/', R + 'B531678957/', R + 'B535143879/'],
    price_note: 'Prices from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Smoked-salmon cream tagliatelle', '¥1,100', 'Pasta', 'no', 'no', 'June 2026 review.', 'salmon_tagliatelle'),
      it('', '', 'Carbonara', '', 'Pasta', 'no', 'no', '2025–26 reviews.', 'carbonara'),
      it('', '', 'Daily special lunch', '¥880', 'Lunch', 'ask', 'no', 'July 2026 review.', 'daily'),
      it('', '', 'Two cakes', '¥1,040', 'Cakes', 'no', 'no', 'September 2026 review.', 'cakes2'),
    ] }, {
    cuisine: 'ビストロカフェ: 平日は大盛り無料の1,000円ほどのパスタ (ベーコンたっぷりのカルボナーラ 2025〜26年、スモークサーモンのクリームのタリアテッレ1,100円 2026年6月)、魚のトマト煮と唐揚げの日替わり880円 (2026年7月)、タルトと飲み物つきの魚と海老のご飯のセット (2026年6月)、チョコの層があるチーズタルト、アップルタルト、いちじくのタルト、ココア・さつまいも・栗のモンブランなどのケーキ (2個1,040円、2026年9月)、S・M・L から選ぶコーヒー (2026年の口コミ)',
    neighborhood: '御幸町通、三条の南。河原町駅から徒歩3分',
    gf_detail: '要確認。パスタ、タルト、ケーキが中心。魚と海老のご飯のセットもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カルボナーラ、クリームパスタ、チーズタルト (2025〜26年の口コミ)。',
    notes: '[カフェ・ビストロ・御幸町] 御幸町通のテラスのある大きな個性的なカフェビストロ。安くてボリュームのあるパスタのランチ、ショーケースいっぱいのタルトやケーキ、サイズを選べるコーヒー。1,000〜2,000円ほど。',
  });
}

// ================================================================ 幸福堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007065/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://ko-fukudo.co.jp/';
  const D = day(['09:00', '18:30']);
  put({
    id: 'kyoto_kofukudo_matsubara', name: '幸福堂 (Kofukudo)', category: 'OMNI',
    lat: 34.999032, lng: 135.767411, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mochi, daifuku and dango are rice-based, but dorayaki, monaka and baked sweets are wheat (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste mochi and daifuku are often plant-based, but cream daifuku, dorayaki and some sweets use dairy or egg (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 9:00–18:30; closed Wednesdays (Tabelog); the shop\'s site gives the Matsubara main shop 9:00–18:00. No cards; e-money and PayPay (Tabelog). Takeaway; a place to eat at the entrance with free tea (November 2025 and March 2026 reviews). Non-smoking (Tabelog). Near Kawaramachi–Matsubara, about 7 min from Kyoto-Kawaramachi (July 2026 reviews).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara, west of Kawaramachi — 7 min from Kawaramachi Stn',
    cuisine: 'Kyoto wagashi made with the founding bean-paste method (own site): mame daifuku ¥220–230, hand-pounded yomogi daifuku ¥220, kuzumochi ¥230, hanami dango ¥230, strawberry daifuku ¥400, chocolate-strawberry, chocolate-banana and matcha-cream daifuku ¥400, minazuki ¥250, brown-sugar warabi ¥220, red rice and sansai rice ¥500, half-baked sweets ¥86 (June 2025); chestnut daifuku and dorayaki (September 2025); chestnut mochi ¥270, chestnut yokan ¥280, mandarin daifuku ¥400 (December 2025); sakura mochi and three-colour dango (March 2026); kuzukiri ice; goldfish han-nama sweet ¥90 (July 2026)',
    website: WEB, gmaps: gm('幸福堂 松原 京都'), menu_url: null,
    notes: '[Wagashi · Matsubara] A long-established wagashi shop near Kawaramachi–Matsubara, founded in 1868 and now in its fifth generation: stretchy mame daifuku, yomogi mochi, fruit daifuku, seasonal mochi and red rice, mostly ¥200–400 a piece, with tea offered if you eat in front. A second shop is in Nishiki Market.',
    chef_bio: { chef_name: '花川幸二郎 (founder)', roles: ['Founder (Meiji 1)'], origin: null,
      background: 'Founded in Meiji 1 (1868) by 花川幸二郎; the bean-paste method has been handed down to the fifth generation (own site). Two shops: the Matsubara main shop and a Nishiki shop at 錦小路通麩屋町西入ル (own site).',
      philosophy: 'Keeps the founding method of making bean paste (own site).',
      specialty: 'Mame daifuku and seasonal mochi.',
      anecdotes: [
        { text: 'A June 2025 passer-by, drawn by a crowd, noted that overseas visitors especially like the ¥86 half-baked sweets, and chose kuzumochi for the heat.', source: R + 'B508010861/' },
        { text: 'A former neighbour who used to buy New Year mochi here came back in December 2025 and liked the mandarin daifuku best.', source: R + 'B519437126/' },
        { text: 'A March 2026 walker who asked to eat on the spot was offered tea with a sakura mochi and three-colour dango.', source: R + 'B525165515/' },
      ],
      japanese_sources_summary: '食べログ: 幸福堂、和菓子、下京区松原通河原町西入松川町388-2、清水五条駅から347m、月・火・木〜日 9:00〜18:30、水曜休み、カード不可、電子マネー・PayPay 可、禁煙、テイクアウト。公式サイト: 明治元年に初代 花川幸二郎が創業、五代目まで餡の製法を受け継ぐ、松原本店 (9:00〜18:00) と錦店 (中京区錦小路通麩屋町西入ル梅屋町501、10:00〜17:00)。口コミ (2025〜2026年、英語): 豆大福220〜230円、手打ちよもぎ大福220円、くずもち230円、いちご大福400円、半生菓子86円、栗大福とどら焼き、栗餅270円、栗羊羹280円、みかん大福400円、桜餅、三色団子、くずきりのアイス、金魚の半生菓子90円、店先で食べるとお茶のサービス。',
      confidence: 'medium', sources: [TB, WEB, R + 'B508010861/', R + 'B513652794/', R + 'B516944345/', R + 'B519437126/', R + 'B525165515/', R + 'B527019022/', R + 'B527661939/', R + 'B530762428/', R + 'B531560939/', R + 'B532200520/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point-and-buy wagashi counter; popular with overseas visitors (June 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通河原町西入松川町388-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999032, 135.767411); cross-checked: GSI 京都府京都市下京区松川町388番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508010861/', R + 'B519437126/', R + 'B532200520/'],
    price_note: 'Prices from June 2025 – July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mame daifuku', '¥220–230', 'Daifuku', 'ask', 'ask', 'November 2025 and July 2026 reviews.', 'mame_daifuku'),
      it('', '', 'Hand-pounded yomogi daifuku', '¥220', 'Daifuku', 'ask', 'ask', 'June 2025 review.', 'yomogi'),
      it('', '', 'Strawberry daifuku', '¥400', 'Daifuku', 'ask', 'ask', 'June 2025 review.', 'ichigo'),
      it('', '', 'Kuzumochi', '¥230', 'Seasonal', 'ask', 'ask', 'June 2025 review.', 'kuzumochi'),
      it('', '', 'Red rice', '¥500', 'Rice', 'ask', 'ask', 'June 2025 review.', 'sekihan'),
    ] }, {
    cuisine: '創業以来の製法の餡の京の和菓子 (公式サイト): 豆大福220〜230円、手打ちよもぎ大福220円、くずもち230円、花見団子230円、いちご大福400円、チョコいちご・チョコバナナ・抹茶クリームの大福400円、minazuki 250円、黒糖と餡のわらび餅220円、赤飯と山菜ご飯500円、半生菓子86円 (2025年6月)、栗大福とどら焼き (2025年9月)、栗餅270円、栗羊羹280円、みかん大福400円 (2025年12月)、桜餅と三色団子 (2026年3月)、くずきりのアイス、金魚の半生菓子90円 (2026年7月)',
    neighborhood: '松原通、河原町の西。河原町駅から徒歩7分',
    gf_detail: '要確認。餅、大福、団子は米が主だが、どら焼き、最中、焼き菓子は小麦 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。餡の餅や大福は植物性のことが多いが、クリーム大福やどら焼きなどは乳や卵を使う (2025〜26年の口コミ)。',
    notes: '[和菓子・松原] 河原町松原近くの老舗の和菓子店。明治元年 (1868年) 創業、五代目。よく伸びる豆大福、よもぎ餅、フルーツ大福、季節の餅や赤飯がだいたい1個200〜400円。店先で食べるとお茶のサービス。錦市場にも店がある。',
  });
}

// ================================================================ 京都先斗町 かに侍別邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042513/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kanizamurai.com/';
  const N = day(['17:00', '22:30']); const W = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kanizamurai_bettei_pontocho', name: '京都先斗町 かに侍別邸 (Kanizamurai Bettei)', category: 'OMNI',
    lat: 35.007768, lng: 135.771251, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Boiled crab and sashimi may suit, but tempura, cream croquettes, shumai and fried crab are wheat (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab restaurant (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon–Fri and the days around holidays 17:00–22:30; Sat, Sun and holidays 11:30–15:00 and 17:00–22:30; food L.O. 21:30, drinks 22:00 (Tabelog); no weekday lunch in July and August 2026 (Tabelog notice). Bookings taken; a ¥500 seat charge on the kawadoko from May to October (Tabelog). Cards; no e-money or QR (Tabelog). 30 seats: sunken kotatsu, tables and private rooms for up to 6; non-smoking; English menu and English-speaking staff; children welcome (Tabelog). On Pontocho near Sanjo, 5 min from Keihan Sanjo (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, near Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Crab: an all-you-can-eat king crab course with buckets of boiled crab and about ten other dishes — crab cream croquettes, crab tempura, crab miso, crab zosui; children under 4 free and half price to 12 (February 2025); crab sashimi (July 2025); à la carte king-crab butter steak, thick roll, fried crab, crab shumai (August 2025); courses with taraba crab added (January 2026)',
    website: WEB, gmaps: gm('京都先斗町 かに侍別邸'), menu_url: null,
    notes: '[Crab · Pontocho] A Pontocho crab restaurant known for its all-you-can-eat king crab course, with sunken-kotatsu rooms and a summer kawadoko over the Kamo River (¥500 a seat). English menu. About ¥6,000–15,000 at dinner.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Sister of 京都錦市場 かに侍 (own site). Staff service praised in February 2025; staff recommend arriving early on the kawadoko for the sunset (August 2025 review).',
      philosophy: null,
      specialty: 'All-you-can-eat king crab.',
      anecdotes: [
        { text: 'A February 2025 diner on the all-you-can-eat course got three buckets of boiled crab, croquettes, tempura, crab miso and zosui, and was a little scared of crab afterwards.', source: R + 'B501200099/' },
        { text: 'On the August 2025 kawadoko a diner ordered king-crab butter steak and crab shumai, and took the staff\'s advice to come early for the sunset.', source: R + 'B511222662/' },
        { text: 'With everywhere else booked over the January 2026 holidays, a diner found a same-day table here and added taraba crab to a course.', source: R + 'B521739154/' },
      ],
      japanese_sources_summary: '食べログ: 京都先斗町 かに侍別邸、かに、中京区先斗町通橋下町133-1 エメラルド会館1F、京阪三条駅から徒歩5分、平日・祝前後日 17:00〜22:30、土日祝 11:30〜15:00・17:00〜22:30 (料理 L.O. 21:30、ドリンク L.O. 22:00)、2026年7〜8月は平日の昼の営業なし、予約可、5〜10月の川床は1席500円、カード可、電子マネー・QR 不可、30席 (掘りごたつ16、テーブル8、個室6)、禁煙、英語メニュー・英語対応、子ども可。公式サイト: 姉妹店は京都錦市場 かに侍。口コミ (2025〜2026年、英語): タラバガニ食べ放題のコース、ゆでがにのバケツ、かにクリームコロッケ、かにの天ぷら、かに味噌、かに雑炊、4歳以下無料・12歳まで半額、かにの刺身、タラバガニのバターステーキ、太巻き、かにシュウマイ、川床と夕日。',
      confidence: 'medium', sources: [TB, WEB, R + 'B500725684/', R + 'B501200099/', R + 'B510848479/', R + 'B511222662/', R + 'B521739154/', R + 'B522140383/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通橋下町133-1 エメラルド会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (July–August 2026 notice) and own site; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.007801, 135.771234), 2.4 m from kyoto_futagoya_pontocho (same building, 2F) — moved 4 m south-south-east to (35.007768, 135.771251), 6.5 m clearance; cross-checked: GSI 京都府京都市中京区橋下町133番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B500725684/', R + 'B511222662/'],
    price_note: 'No item prices found; reviews give ¥5,000–15,000 a head; kawadoko seat ¥500 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat king crab course', '', 'Courses', 'ask', 'no', 'February 2025 reviews.', 'aye_crab'),
      it('', '', 'King crab butter steak', '', 'A la carte', 'ask', 'no', 'August 2025 review.', 'butter_steak'),
      it('', '', 'Kawadoko seat charge (May–October)', '¥500', 'Charge', 'ask', 'ask', 'Tabelog.', 'kawadoko'),
    ] }, {
    cuisine: 'かに: ゆでがにのバケツとかにクリームコロッケ、かにの天ぷら、かに味噌、かに雑炊など約10品のタラバガニ食べ放題コース (4歳以下無料、12歳まで半額、2025年2月)、かにの刺身 (2025年7月)、アラカルトのタラバガニのバターステーキ、太巻き、かにフライ、かにシュウマイ (2025年8月)、タラバガニを追加したコース (2026年1月)',
    neighborhood: '先斗町、三条の近く。三条駅から徒歩5分',
    gf_detail: '要確認。ゆでがにや刺身は合う可能性があるが、天ぷら、クリームコロッケ、シュウマイ、かにフライは小麦 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。かにの店 (食べログ、2025〜26年の口コミ)。',
    notes: '[かに・先斗町] タラバガニ食べ放題のコースで知られる先斗町のかにの店。掘りごたつの部屋、夏は鴨川の川床 (1席500円)。英語メニュー。夜は6,000〜15,000円ほど。',
  });
}

save();
