// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 34.
//   + つるや Tsuruya (handmade soba and fish behind the Ritz-Carlton, since 2005)
//   + 白川 京とみ Shirakawa Kyotomi (tempura bowls by the Shirakawa near Higashiyama Stn)
//   + Dough (small takeaway bakery south of the Imperial Palace, three days a week)
//   + 京菜味のむら 烏丸本店 Kyosaimi Nomura (obanzai breakfast and lunch from 7:00 near Shijo Karasuma)
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26004776, 26029076; from `next notable
//   200`: 26025140, 26025764. None is in data/kyoto.json by name (つるや/Tsuruya, 京とみ/Kyotomi, Dough, のむら/Nomura) or
//   address (鉾田町299-3, 石泉院町393-3, 舟屋町424, 橋弁慶町224).
//   Same-name count (same brand or operator only): つるや, 京とみ, Dough — one shop each in the sources opened. 京菜味のむら
//   — two shops on Tabelog (烏丸本店 and 錦店; Tabelog Kyoto name search, 2026-11-06), operator nomurafoods.jp (site under
//   maintenance); not on the brief's large-parent list.
//   Service charges, checked against Tabelog's Japanese original: のむら チャージなし (「なし。」). Others none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ つるや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004776/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_tsuruya_soba_hokoda', name: 'つるや (Tsuruya)', category: 'OMNI',
    lat: 35.01496, lng: 135.769867, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A ju-wari (100% buckwheat) ishikurumi soba is on the menu alongside Sarashina soba, but the dipping sauce is soy-and-dashi, and tempura, tendon and fried dishes share the kitchen (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based soba sauce and broth; fish tempura, sashimi and dashimaki (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30, dinner 18:00–21:00 (L.O. 20:30); closed Thursday (Tabelog). Reservations for dinner only (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 8 seats: a counter and a tatami area (Tabelog; January 2026). Private dinners for a group of 11 have been held (March 2025). Non-smoking (Tabelog). In a quiet residential street on Dotemachi north of Ebisugawa, behind the Ritz-Carlton, about 415 m from Jingu-Marutamachi Stn (Tabelog; 2026 reviews). Opened 7 July 2005 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Dotemachi north of Ebisugawa, behind the Ritz-Carlton — 6 min from Jingu-Marutamachi Stn',
    cuisine: 'Handmade thin soba — Sarashina and ju-wari ishikurumi — with a light, dashi-forward dipping sauce (2025–2026 reviews) · lunch sets: a fish tempura bowl (the day’s fish, e.g. yellowtail, rockfish, eel or wrasse) with a small hot or cold soba and pickles; ten-nan set; oyakodon set (2025–2026) · tempura zaru soba, corn tempura, soba-tea pudding (August 2025) · evenings: obanzai, sashimi often from the owner’s own catch (the owner is described as a fishing master), myoga tempura, dashimaki, crab, grilled dishes, with rare sakes, finishing with soba (2025–2026 reviews)',
    website: null, gmaps: gm('つるや 蕎麦 京都 土手町'), menu_url: null,
    notes: '[Soba · behind the Ritz-Carlton, a fisherman’s soba house] An eight-seat counter-and-tatami soba shop on a quiet residential street, loved by locals and recommended by hotels. Lunch is a fish tempura bowl with a small bowl of fine handmade soba; at night it turns into a sake-and-small-plates spot with sashimi of fish the owner often catches, ending with Sarashina or ju-wari soba. Cash only; dinner by reservation; closed Thursdays.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'An October 2026 regular on a twelfth visit calls the chef a “fishing Meijin” whose own catch often makes it onto the menu. A September 2026 diner learned of the shop from a book by the author Akira Nagai; a May 2026 visitor came on a hotel’s recommendation. A July 2026 diner found the staff unfriendly — a parting thanks went unanswered.',
      philosophy: null, specialty: 'Handmade Sarashina and ju-wari soba; fish tempura bowls.',
      anecdotes: [
        { text: 'A January 2026 solo diner, offered the tatami, asked for the counter instead and the staff cleared a seat.', source: R + 'B430491014/' },
        { text: 'A May 2025 regular came in after a morning run and a public bath for the ten-nan set.', source: R + 'B501309856/' },
      ],
      japanese_sources_summary: '食べログ: つるや、そば、中京区土手町通夷川上ル鉾田町299-3、神宮丸太町駅から415m、昼12:00〜14:30、夜18:00〜21:00 (L.O.20:30)、木曜定休、予約は夜のみ、カード・電子マネー・QR不可、8席 (カウンター、座敷)、禁煙、2005年7月7日オープン。口コミ (2025〜2026年、英語): Ritz-Carlton の裏、手打ちの細いそば (更科と十割の Ishikurumi)、日替わりの魚の天丼と小そばのセット、天ざる、とうもろこしの天ぷら、そば茶のプリン、夜は造り、だし巻き、蟹など、珍しい日本酒、店主は釣りの名人で自分で釣った魚も出る、店員が無愛想との声も。',
      confidence: 'medium', sources: [TB, R + 'B430491014/', R + 'B439828692/', R + 'B501309856/', R + 'B501877781/', R + 'B513776256/', R + 'B521537347/', R + 'B523959353/', R + 'B532102206/', R + 'B535460604/', R + 'B536310992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny local soba shop; cash only; dinner by reservation. Recommended by hotels to guests (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区土手町通夷川上ル鉾田町299-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.01496, 135.769867); cross-checked: GSI 京都府京都市中京区鉾田町299番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No dish prices read; reviewers spend ¥1,000–2,999 at lunch, ¥3,000 or more at night.', last_checked: TODAY, items: [
      it('', '', 'Fish tempura bowl with small soba', '', 'Lunch', 'no', 'no', '2025–2026 reviews.', 'sakana_tendon_set'),
      it('', '', 'Ju-wari ishikurumi soba', '', 'Soba', 'ask', 'no', 'March 2026; dipping sauce is soy and dashi.', 'juwari_soba'),
      it('', '', 'Tempura zaru soba', '', 'Soba', 'no', 'no', 'August 2025.', 'ten_zaru'),
    ] }, {
    cuisine: '手打ちの細いそば、更科と十割の Ishikurumi。出汁の効いたやさしいつゆ (2025〜2026年の口コミ)・昼のセット: その日の魚 (ぶり、rockfish、eel、wrasse など) の天丼に小さな温かいか冷たいそばと漬物、Ten Nan セット、親子丼セット (2025〜2026年)・天ざるそば、とうもろこしの天ぷら、そば茶のプリン (2025年8月)・夜はおばんざい、店主が自分で釣ることも多い魚の造り (店主は釣りの名人とのこと)、茗荷の天ぷら、だし巻き、蟹、焼き物と珍しい日本酒、締めにそば (2025〜2026年の口コミ)',
    neighborhood: '夷川の北の土手町通、Ritz-Carlton の裏。神宮丸太町駅から徒歩6分',
    gf_detail: '要確認。十割の Ishikurumi そばもあるが、つゆは醤油と出汁で、天ぷら、天丼、揚げ物と同じ厨房 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のつゆ、魚の天ぷら、造り、だし巻き (2025〜2026年の口コミ)。',
    notes: '[そば・Ritz-Carlton の裏、釣り好きのそば屋] 静かな住宅街の通りにある、カウンターと座敷の8席のそば屋。地元に愛され、ホテルもすすめる。昼は魚の天丼と細い手打ちそばの小鉢、夜は店主が釣ることも多い魚の造りと日本酒、締めに更科か十割。現金のみ、夜は予約制、木曜休み。',
  });
}

// ================================================================ 白川 京とみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029076/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_shirakawa_kyotomi', name: '白川 京とみ (Shirakawa Kyotomi)', category: 'OMNI',
    lat: 35.00991, lng: 135.78083, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-battered tempura over rice; nyumen of wheat noodles (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, conger eel and hamo tempura, dashimaki, dashi broths (2025–2026 reviews).',
    hours_raw: '11:00–15:00 (L.O. 14:30), Tuesday–Sunday; closed Monday and the second Tuesday of the month (Tabelog). Reservations accepted per Tabelog, but not at lunch (April 2026); waits of 30–40 minutes at peak, slow turnover (April 2026). Cards (AMEX) and e-money; no QR (Tabelog). 20 seats: a counter and 14 at tables; a private room (Tabelog). Non-smoking (Tabelog). By the Shirakawa, 142 m from Higashiyama Stn (Tabelog). Opened 1 February 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Shirakawa near Higashiyama Stn',
    cuisine: 'Tempura rice bowls, served on the rice or with the tempura on a separate plate (2025–2026 reviews) · shrimp and anago tempura bowl with dashimaki ¥1,980 (February and July 2026) · shrimp and hamo tempura bowl with dashimaki ¥2,580 (July 2025); hamo tempura bowl (October 2026) · seasonal tempura set with conger eel and shrimp (May 2026) · nyumen with yuba and tempura (December 2025) · light, crisp batter; vegetable tempura · a small dessert — sorbet, strawberry ice cream or yellow watermelon (2025–2026) · dashimaki sells out early (April and July 2026)',
    website: null, gmaps: gm('白川 京とみ 東山'), menu_url: null,
    notes: '[Tempura bowls · Shirakawa by Higashiyama Stn] A calm lunch-only room steps from Higashiyama Station, handy before Heian Shrine or the KYOCERA Museum: light, crisp tempura bowls of shrimp, anago or hamo, with the tempura on the rice or on its own plate, a fluffy dashimaki (it sells out) and a little sorbet to finish, about ¥2,000–2,600. No lunch bookings; expect a wait at noon. Closed Mondays.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'No owner or chef is named in the sources read. Reviewers describe an older local clientele and a calm, slightly formal room (July 2025).',
      philosophy: null, specialty: 'Tempura bowls; dashimaki.',
      anecdotes: [
        { text: 'A July 2026 diner meant to go to the soba shop next door, saw its line, and came here instead — and got the last dashimaki.', source: R + 'B533565058/' },
        { text: 'A July 2025 guest was served a rare yellow watermelon after the meal.', source: R + 'B510114895/' },
      ],
      japanese_sources_summary: '食べログ: 白川 京とみ、天丼、東山区石泉院町393-3、東山駅から142m、火〜日 11:00〜15:00 (L.O.14:30)、月曜と第2火曜定休、予約可、カード (AMEX)・電子マネー可、20席 (カウンター、テーブル14)、個室あり、禁煙、2017年2月1日オープン。口コミ (2025〜2026年、英語): 海老と穴子の天丼とだし巻き1,980円、海老と鱧の天丼とだし巻き2,580円、天ぷらとご飯を別盛りにもできる、ゆばのにゅうめん、軽い衣、デザートにシャーベット、昼は予約不可で行列、だし巻きは早く売り切れる。',
      confidence: 'medium', sources: [TB, R + 'B510114895/', R + 'B510208322/', R + 'B515742436/', R + 'B519457687/', R + 'B522506147/', R + 'B526071946/', R + 'B527102287/', R + 'B528752573/', R + 'B533565058/', R + 'B537713277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the tempura sets; ask for the tempura served separately if you prefer. Queue at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区石泉院町393-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00991, 135.78083); cross-checked: GSI 京都府京都市東山区石泉院町393番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522506147/', R + 'B510208322/'],
    price_note: 'Prices from July 2025 and February–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp and anago tempura bowl with dashimaki', '¥1,980', 'Tempura bowls', 'no', 'no', 'February and July 2026.', 'ebi_anago_tendon'),
      it('', '', 'Shrimp and hamo tempura bowl with dashimaki', '¥2,580', 'Tempura bowls', 'no', 'no', 'July 2025.', 'ebi_hamo_tendon'),
      it('', '', 'Nyumen with yuba and tempura', '', 'Sets', 'no', 'no', 'December 2025.', 'nyumen_set'),
    ] }, {
    cuisine: '天丼。ご飯にのせても、天ぷらを別皿にしても (2025〜2026年の口コミ)・海老と穴子の天丼とだし巻き1,980円 (2026年2月、7月)・海老と鱧の天丼とだし巻き2,580円 (2025年7月)、鱧の天丼 (2026年10月)・穴子と海老の季節の天ぷらセット (2026年5月)・湯葉のにゅうめんと天ぷら (2025年12月)・軽くさっくりした衣、野菜の天ぷら・小さなデザート (シャーベット、苺のアイス、黄色いすいか) (2025〜2026年)・だし巻きは早めに売り切れ (2026年4月、7月)',
    neighborhood: '東山駅近くの白川沿い',
    gf_detail: 'グルテンフリーではない。小麦の衣の天ぷらとご飯、小麦のにゅうめん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。海老、穴子、鱧の天ぷら、だし巻き、出汁 (2025〜2026年の口コミ)。',
    notes: '[天丼・東山駅近くの白川沿い] 東山駅のすぐ近く、昼だけの落ち着いた店。平安神宮や京セラ美術館の前に。海老、穴子、鱧の軽くさっくりした天丼 (天ぷらは別皿にも)、ふんわりのだし巻き (売り切れあり)、締めに小さなシャーベットで2,000〜2,600円ほど。昼は予約不可、正午は待つことも。月曜休み。',
  });
}

// ================================================================ Dough
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025140/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00']);
  put({
    id: 'kyoto_dough_bakery', name: 'Dough', category: 'OMNI',
    lat: 35.016771, lng: 135.766, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — sourdough, ciabatta, pizza bianca and rossa, brioche maritozzi, doughnuts, scones (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain hard breads such as sourdough and pizza bianca may be plant-based, but no ingredient list is published; many items use cheese, cream, eggs or butter (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday and Saturday 11:00–16:00; closed Wednesday, Thursday and Sunday; extra closures announced on social media (Tabelog). Reviewers describe three opening days a week — check Instagram before going (August 2025; June and July 2026). Takeaway only; the shop fits one or two customers at a time (July 2026). Items can be reserved for pickup, and some made to order; on Thursdays and Sundays the team is at the workshop and answers the phone; nationwide shipping on request (Tabelog). No cards; e-money and QR accepted (Tabelog). Often sells out early (May 2026). South of the Imperial Palace off Marutamachi on Fuyacho, about 7 min from Marutamachi Stn (2026 reviews; Tabelog). Opened 23 January 2015 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho just south of Marutamachi, below the Imperial Palace — 7 min from Marutamachi Stn',
    cuisine: 'Takeaway European-style hard breads and American bakes (May and July 2026 reviews) · sourdough; blue cheese and walnut ciabatta ¥350–380; pizza bianca alla romana ¥280; pizza rossa; Welsh cheese toast ¥390; frittata sandwich (2025–2026) · tiramisu maritozzo ¥330–350; cinnamon-sugar and glazed doughnuts ¥260–290; cinnamon rolls; apple-cranberry crumble; muffins, carrot cake, scones (2025–2026)',
    website: null, gmaps: gm('Dough ベーカリー 京都 丸太町'), menu_url: null,
    notes: '[Bakery · Fuyacho below the Imperial Palace, three days a week] A tiny takeaway bakery — room for one or two customers — selling serious hard breads (sourdough, blue-cheese ciabatta, Roman pizza bianca) alongside American sweets: cinnamon doughnuts, a tiramisu maritozzo, crumbles. Open only Monday, Tuesday, Friday and Saturday from 11:00, often sold out early; reserve by phone. No cards.',
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed)'], origin: null,
      background: 'A May 2026 reviewer writes that the bakery began in 2003 as “BREAD ROOM” and moved and renamed itself Dough at this address in 2015 (Tabelog gives an opening date of January 2015).',
      philosophy: null, specialty: 'Hard breads; cinnamon doughnuts; tiramisu maritozzo.',
      anecdotes: [
        { text: 'An August 2025 shopper arrived after 16:00 and found the shop still open because customers with reservations had not yet collected.', source: R + 'B512293907/' },
        { text: 'A December 2025 regular wants every resident of Kyoto to try the cinnamon doughnut.', source: R + 'B519254415/' },
      ],
      japanese_sources_summary: '食べログ: Dough、パン、中京区舟屋町424、丸太町駅から589m、月・火・金・土 11:00〜16:00、水・木・日定休 (臨時休業はSNSで案内)、取り置き予約可、木・日は工房で仕込み中のため電話対応、全国発送も相談可、カード不可、電子マネー・QR可、テイクアウト、2015年1月23日オープン。口コミ (2025〜2026年、英語): 1〜2人しか入れない小さな店、サワードウ、ブルーチーズとくるみのチャバタ、ピッツァ・ビアンカ、ティラミスのマリトッツォ、シナモンドーナツ、2003年に「BREAD ROOM」として開業し2015年に移転・改名との声、売り切れが早い。',
      confidence: 'medium', sources: [TB, R + 'B499942845/', R + 'B512293907/', R + 'B514341974/', R + 'B519245959/', R + 'B519254415/', R + 'B528630052/', R + 'B529243271/', R + 'B533483419/', R + 'B534324094/', R + 'B536691621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny takeaway counter; point at the breads. Check opening days on Instagram; reserve by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区舟屋町424',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016771, 135.766); cross-checked: GSI 京都府京都市中京区舟屋町424番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529243271/', R + 'B512293907/', R + 'B499942845/'],
    price_note: 'Prices from August 2025 to June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Blue cheese and walnut ciabatta', '¥380', 'Bread', 'no', 'no', 'June 2026.', 'ciabatta'),
      it('', '', 'Pizza bianca alla romana', '¥280', 'Bread', 'no', 'ask', 'August 2025.', 'pizza_bianca'),
      it('', '', 'Tiramisu maritozzo', '¥350', 'Sweets', 'no', 'no', 'June 2026.', 'maritozzo'),
      it('', '', 'Cinnamon-sugar doughnut', '¥260', 'Sweets', 'no', 'ask', 'January 2026.', 'cinnamon_donut'),
    ] }, {
    cuisine: '持ち帰りのヨーロッパ風のハード系パンとアメリカの焼き菓子 (2026年5月、7月の口コミ)・サワードウ、ブルーチーズとくるみのチャバタ350〜380円、ピッツァ・ビアンカ280円、ピッツァ・ロッサ、ウェルシュチーズトースト390円、フリッタータのサンド (2025〜2026年)・ティラミスのマリトッツォ330〜350円、シナモンシュガーとグレーズのドーナツ260〜290円、シナモンロール、りんごとクランベリーのクランブル、マフィン、キャロットケーキ、スコーン (2025〜2026年)',
    neighborhood: '御所の南、丸太町のすぐ南の麩屋町。丸太町駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。小麦のパン屋。サワードウ、チャバタ、ピッツァ、ブリオッシュのマリトッツォ、ドーナツ、スコーン (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。サワードウやピッツァ・ビアンカなどのハード系は植物性の可能性もあるが原材料は公開されていない。チーズ、クリーム、卵、バターを使う品が多い (2025〜2026年の口コミ)。',
    notes: '[パン・御所の南の麩屋町、週に数日] 1〜2人で満員の小さな持ち帰りのパン屋。サワードウ、ブルーチーズのチャバタ、ローマ風のピッツァ・ビアンカなど本格的なハード系と、シナモンドーナツ、ティラミスのマリトッツォ、クランブルなどアメリカの焼き菓子。営業は月・火・金・土の11時からで、早めに売り切れることも。電話で取り置きを。カード不可。',
  });
}

// ================================================================ 京菜味のむら 烏丸本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025764/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '14:00']);
  put({
    id: 'kyoto_kyosaimi_nomura_karasuma', name: '京菜味のむら 烏丸本店 (Kyosaimi Nomura, Karasuma)', category: 'OMNI',
    lat: 35.006055, lng: 135.758727, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pick-your-own obanzai from a showcase — simmered, grilled and dressed dishes, many in soy and dashi (teriyaki mackerel, ganmo, hijiki) — with rice, miso soup and a yuba rice bowl; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many of the obanzai are vegetables, beans, tofu and yuba, but dashi and fish or meat dishes (mackerel, duck, pork belly) are mixed in, and the broths are not described (2026 reviews).',
    hours_raw: '7:00–14:00 daily; may close early when food runs out; open year-round, New Year by inquiry (Tabelog). No reservations — first come, first served (Tabelog). Order at a touch-panel ticket machine, then choose obanzai at the showcase (October 2026). No cover or charge (Tabelog, original 「なし。」). Cards (VISA), IC and e-money, QR (Tabelog). 36 seats: 10 at the counter, 26 at tables; wheelchair access; free Wi-Fi; children welcome (Tabelog). Rice refills not offered (October 2026). The Miyabi Gozen is limited and can sell out (Tabelog). On Takoyakushi just west of Karasuma, 3 min from Shijo / Karasuma Stns exit 22 (Tabelog). Opened 12 June 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi just west of Karasuma — 3 min from Shijo Stn',
    cuisine: 'Obanzai breakfast and lunch from 7:00 (Tabelog; 2026 reviews) · six obanzai of your choice with white or multigrain rice and miso soup, about ¥850 (September–October 2026) · six obanzai with a yuba rice bowl, about ¥1,000; an 18-dish set with yuba bowl (October–November 2026) · Miyabi Gozen of twelve obanzai, with a small Heartland beer as an “alcohol set” ¥1,800 (October 2026) · obanzai seen: teriyaki mackerel, creamy cauliflower stew, simmered beans, ganmo, simmered shredded vegetables, spinach with tuna, hijiki and burdock, namasu, kombu rolls, braised pork belly, duck (October 2026)',
    website: 'https://www.nomurafoods.jp/shops/karasuma/', gmaps: gm('京菜味のむら 烏丸本店'), menu_url: null,
    notes: '[Obanzai · Shijo Karasuma, breakfast from 7:00] A bright counter-and-table room just off Karasuma where you buy a ticket and pick six (or twelve, or eighteen) small dishes of Kyoto home cooking from a showcase, with rice and miso soup — about ¥850, or ¥1,000 with a yuba rice bowl. A good early Japanese breakfast before sightseeing. No bookings; busy with tourists at times. A second shop is in Nishiki.',
    chef_bio: { chef_name: null, roles: ['Operated by the Nomura company (nomurafoods.jp)'], origin: null,
      background: 'An October 2026 reviewer notes that the company supplies its dishes to department stores. A September 2026 diner thought the dishes looked aimed at international guests and suspected the miso soup and sides were pre-made; other 2026 reviewers praise the gentle, home-style flavours.',
      philosophy: null, specialty: 'Pick-your-own obanzai sets; yuba rice bowl.',
      anecdotes: [
        { text: 'An October 2026 visitor arrived at 7:10 to find two groups already eating, with more coming in.', source: R + 'B537409158/' },
        { text: 'An October 2026 diner wished the rice could be refilled, the obanzai being so good with it.', source: R + 'B537694303/' },
      ],
      japanese_sources_summary: '食べログ: 京菜味のむら 烏丸本店、日本料理・カフェ・豆腐料理、中京区蛸薬師通烏丸西入橋弁慶町224、四条駅・烏丸駅22番出口から徒歩3分、毎日7:00〜14:00、材料がなくなり次第終了、年中無休、予約不可 (先着順)、チャージなし、カード (VISA)・電子マネー・QR可、36席 (カウンター10、テーブル26)、車椅子可、子ども可、2015年6月12日オープン、「Miyabi Gozen」は数量限定。食べログ京都の店名検索では錦店もある。口コミ (2026年、英語): 券売機で選び、ショーケースからおばんざいを6品、白米か雑穀米と味噌汁で約850円、湯葉丼付き約1,000円、12品の Miyabi Gozen とビールのセット1,800円、朝食向き、百貨店にも卸しているとのこと。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/kyoto/rstLst/?sw=%E4%BA%AC%E8%8F%9C%E5%91%B3%E3%81%AE%E3%82%80%E3%82%89', R + 'B536586800/', R + 'B536628923/', R + 'B537007567/', R + 'B537177087/', R + 'B537333194/', R + 'B537409158/', R + 'B537694303/', R + 'B537797929/', R + 'B538492387/', R + 'B538528839/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine and point-to-choose showcase; easy without Japanese. Popular with inbound tourists (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通烏丸西入橋弁慶町224',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; official site under maintenance on 2026-11-06.' },
    pin_source: `Tabelog ${TB} (35.006055, 135.758727); cross-checked: GSI 京都府京都市中京区橋弁慶町224番地 (lot) 23m; 7.9m from kyr_kyoto_toripaitan_soba_ju, no offset needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537333194/', R + 'B537177087/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Six obanzai with rice and miso soup', '¥850', 'Sets', 'ask', 'ask', 'October 2026.', 'obanzai6'),
      it('', '', 'Six obanzai with yuba rice bowl', '', 'Sets', 'ask', 'ask', 'October 2026; about ¥1,000.', 'obanzai_yuba_don'),
      it('', '', 'Miyabi Gozen alcohol set (12 obanzai, small beer)', '¥1,800', 'Sets', 'ask', 'no', 'October 2026.', 'miyabi_gozen'),
    ] }, {
    cuisine: '朝7時からのおばんざいの朝食と昼食 (食べログ、2026年の口コミ)・好きなおばんざい6品に白米か雑穀米と味噌汁で約850円 (2026年9〜10月)・6品と湯葉丼で約1,000円、18品と湯葉丼のセットも (2026年10〜11月)・12品の「Miyabi Gozen」に小瓶のビールをつけたセット1,800円 (2026年10月)・おばんざいの例: 鯖の照り焼き、カリフラワーのクリーム煮、煮豆、がんも、切り干しの煮物、ほうれん草とツナ、ひじきとごぼう、なます、昆布巻き、豚の角煮、鴨 (2026年10月)',
    neighborhood: '烏丸のすぐ西の蛸薬師通。四条駅から徒歩3分',
    gf_detail: '要確認。ショーケースから選ぶおばんざい (鯖の照り焼き、がんも、ひじきなど醤油と出汁のものが多い) とご飯、味噌汁、湯葉丼。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜、豆、豆腐、湯葉のおばんざいが多いが、出汁や魚、肉 (鯖、鴨、豚の角煮) の皿もあり、出汁の中身は書かれていない (2026年の口コミ)。',
    notes: '[おばんざい・四条烏丸、朝7時から] 烏丸のすぐ近くの明るい店。券売機で買って、ショーケースから京都の家庭料理の小鉢を6品 (12品、18品も) 選び、ご飯と味噌汁で約850円、湯葉丼付きで約1,000円。観光前の早い和朝食にちょうどよい。予約不可、観光客で混むことも。錦にも店がある。',
  });
}

save();
