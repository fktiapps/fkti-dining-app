// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 77.
//   + ワヤン バリ Wayang Bali (Balinese home cooking on a 7th floor by Kawaramachi-Sanjo, cash only)
//   + 酒菜米べゑ Sakana Bei Be (fish izakaya near Shijo-Karasuma, charcoal “primitive grill” skewers and kamameshi)
//   + 萬常 Mantsune (tempura lunches and a set dinner course just south of Yasaka Shrine; founded 1876 per a review)
//   - カラオケ BAR TREE 京都祇園, BAR ORLEANS: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26013974, 26030810, 26007464,
//   26043752 (skipped), 26038064 (skipped).
//   queue-status.jsonl grepped for each brand (ワヤン, べゑ, 萬常, TREE, ORLEANS): only an unrelated ARROW TREE ruling.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. ワヤン バリ shares 下丸屋町406 (グリントランド
//   ビル) with 焼鳥 ひさどり and ノスタルジア; 萬常 shares 祇園町南側533 with 京都ぎをんおむすび屋 さんかく.
//   Same-name count (same brand or operator only): one shop each; no invoice numbers on Tabelog. Large-parent list checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): single remarks about other guests at 萬常 (May and July 2026) left out.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full (coordinator, 2026-11-07).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043752', 'カラオケ BAR TREE 京都祇園: no reviews on Tabelog');
skip('26038064', 'BAR ORLEANS: no reviews on Tabelog');

// ================================================================ ワヤン バリ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013974/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_wayang_bali', name: 'ワヤン バリ (Wayang Bali)', category: 'OMNI',
    lat: 35.010085, lng: 135.768793, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Balinese and Indonesian dishes — nasi goreng, fried chicken, prawn crackers, banana fritters; no gluten information (Tabelog; March 2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan dishes are named; the dishes described are chicken, prawn and fried rice (March 2025).',
    hours_raw: 'Monday, Wednesday–Sunday 17:30–24:00; closed Tuesday (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 36 seats: 18 at tables, 10 at the counter, 8 on tatami; parties up to 35 (Tabelog). Smoking area; when busy, smoking only at the counter (Tabelog). On the 7th floor of グリントランドビル on Kawaramachi north of Sanjo, 3 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Sanjo, 7F — 3 min from subway Kyoto Shiyakusho-mae',
    cuisine: 'Balinese family recipes cooked by a chef from Bali with ingredients sent from the island, in a room decorated with pieces from Bali; all-you-can-drink plans and cocktails (Tabelog) · prawn crackers, salad, fried chicken, nasi goreng; banana fritters with ice cream; Balinese coffee (March 2025)',
    website: null, gmaps: gm('ワヤン バリ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Balinese · Kawaramachi-Sanjo, 7th floor] A museum-like room full of Balinese decor where a chef from Bali cooks family recipes — nasi goreng, fried chicken, prawn crackers, banana fritters with ice cream — with Balinese coffee and cocktails. Popular; book ahead. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef from Bali (unnamed)', 'Manager (unnamed)'], origin: 'Bali, Indonesia',
      background: 'Tabelog’s shop text says the dishes are cooked by a chef from Bali who recreates family recipes with ingredients sent directly from the island. A March 2025 regular praises a cheerful Indonesian manager who recommends dishes.',
      philosophy: null, specialty: 'Nasi goreng.',
      anecdotes: [
        { text: 'A March 2025 regular found it fully booked, with the manager still smiling through the rush, and finished with banana fritters and Balinese coffee.', source: R + 'B502791117/' },
      ],
      japanese_sources_summary: '食べログ: ワヤン バリ、インドネシア料理・アジア・エスニック・バル、中京区河原町通三条上ル下丸屋町406 グリントランドビル 7F、地下鉄京都市役所前駅から徒歩3分、月・水〜日 17:30〜24:00、火曜定休、カード・電子マネー・QR不可、36席 (テーブル18、カウンター10、座敷8)、喫煙所あり (混雑時はカウンターのみ喫煙可)、バリから取り寄せた装飾、バリ出身のシェフが島から直送の食材で家庭の味を再現、飲み放題プラン、カクテル。口コミ (2025年3月、英語): 明るいインドネシア人の店長、えびせん、サラダ、フライドチキン、ナシゴレン、バナナの天ぷらとアイス、バリコーヒー、満席。',
      confidence: 'low', sources: [TB, R + 'B502791117/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Indonesian staff; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル下丸屋町406 グリントランドビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review March 2025.' },
    pin_source: `Tabelog ${TB} (35.010035, 135.768793), offset about 5.5 m north to (35.010085, 135.768793) because 焼鳥 ひさどり (kyoto_yakitori_hisadori), in the same building, sits within 3 m; cross-checked: GSI 京都府京都市中京区下丸屋町406番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502791117/'],
    price_note: 'No menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Nasi goreng', '', 'Mains', 'ask', 'ask', 'March 2025.', 'nasigoreng'),
      it('', '', 'Fried chicken', '', 'Mains', 'ask', 'no', 'March 2025.', 'ayam'),
      it('', '', 'Banana fritters with ice cream', '', 'Dessert', 'no', 'no', 'March 2025.', 'pisang'),
    ] }, {
    cuisine: 'バリ出身のシェフが島から届く食材で作る家庭の味、バリから取り寄せた装飾。飲み放題とカクテル (食べログ)・えびせん、サラダ、フライドチキン、ナシゴレン、バナナの天ぷらとアイス、バリコーヒー (2025年3月)',
    neighborhood: '三条の北の河原町、7階。地下鉄京都市役所前から徒歩3分',
    gf_detail: '要確認。ナシゴレン、フライドチキン、えびせん、バナナの天ぷらなどバリとインドネシアの料理。グルテンの情報はない (食べログ、2025年3月)。',
    vegan_detail: '要確認。ヴィーガンの品は書かれておらず、鶏、海老、炒飯の料理 (2025年3月)。',
    notes: '[バリ料理・河原町三条、7階] バリの装飾に囲まれた博物館のような店。バリ出身のシェフが家庭の味を作る: ナシゴレン、フライドチキン、えびせん、バナナの天ぷらとアイス。バリコーヒーとカクテルも。人気なので予約を。現金のみ、火曜定休。',
  });
}

// ================================================================ 酒菜米べゑ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030810/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:30', '23:00']); const WE = day(['17:30', '23:30']);
  put({
    id: 'kyoto_sakana_bei_be', name: '酒菜米べゑ (Sakana Bei Be)', category: 'OMNI',
    lat: 35.004306, lng: 135.760863, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled fish skewers, sashimi, kamameshi, oden-style bero daikon and beef tendon, garlic toast; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya — skewers, sashimi, grilled collar, beef tendon (Tabelog menu; 2026 reviews).',
    hours_raw: 'Monday–Friday, holidays and days after holidays 17:30–23:00 (L.O. 22:00); Saturday, Sunday and days before holidays 17:30–23:30 (L.O. 22:30) (Tabelog). Reservations recommended — busy, e.g. on Gion Matsuri nights (July 2026). Cards; no e-money or QR (Tabelog). 54 seats: a U-shaped counter of 18, 8 at tables and sunken-kotatsu seating; a standing terrace outside (Tabelog). Non-smoking inside; e-cigarettes allowed per a July 2026 review; smoking space outside (Tabelog). On Higashinotoin north of Shijo, 2 min from Hankyu Karasuma (Tabelog). Opened 7 April 2018 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin north of Shijo — 2 min from Hankyu Karasuma',
    cuisine: 'The signature “primitive grill”: fish skewers stood round a heap of charcoal till crisp outside and juicy inside (Tabelog; July 2026) · skewers such as live shrimp ¥500, kuruma-ebi ¥500, toro iwashi ¥630, ayu ¥680, nodoguro ¥1,600, live eel ¥1,000 (Tabelog) · salt-seared bonito ¥900, aji sashimi ¥800; bero daikon and beef tendon ¥680 each (Tabelog) · assorted sashimi; kamameshi for two (July and August 2026) · salt-grilled collar (August 2026) · negitoro-avocado garlic toast (July 2026) · about 20 sakes (May 2026)',
    website: null, gmaps: gm('酒菜米べゑ'), menu_url: TB + 'dtlmenu/',
    notes: '[Fish izakaya · Shijo-Karasuma, charcoal “primitive grill”] A lively 54-seat izakaya near Shijo-Karasuma where fish skewers roast round a heap of charcoal before a U-shaped counter: nodoguro, ayu, live eel and shrimp, with fresh sashimi, kamameshi to share and about 20 sakes. Friendly, fast staff; a standing terrace outside. Book on busy nights.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes the signature primitive-style grilling of fish skewers around a stack of charcoal. Reviewers praise friendly, quick staff (May–September 2026). No operator was found.',
      philosophy: null, specialty: 'Primitive-grilled fish skewers; kamameshi.',
      anecdotes: [
        { text: 'A July 2026 diner, sent by a friend, had no idea how to read the name until told it was “Sakana Bei Be”.', source: R + 'B531699423/' },
        { text: 'On a Gion Matsuri night in July 2026 the place was packed, but food and drinks still came quickly; the kamameshi was the highlight.', source: R + 'B532634943/' },
      ],
      japanese_sources_summary: '食べログ: 酒菜米べゑ、居酒屋・海鮮・日本酒バー、中京区東洞院通四条上る阪東屋町664-25 西ビル 1F、阪急烏丸駅から徒歩2分、月〜金・祝日・祝日の翌日 17:30〜23:00 (L.O.22:00)、土日・祝日の前日 17:30〜23:30 (L.O.22:30)、カード可、54席 (コの字カウンター18、テーブル8、掘りごたつ)、立ち飲みのテラス、店内禁煙、2018年4月7日オープン、名物の原始焼き、活き海老・車海老500円、トロいわし630円、鮎680円、のどぐろ1,600円、活き鰻1,000円、鰹の塩たたき900円、鯵の刺身800円、べろ大根・牛すじ各680円。口コミ (2026年、英語): 約20種の日本酒、お造りの盛り合わせ、2人前の釜めし、カマの塩焼き、ねぎとろアボカドのガーリックトースト、手早く親切なスタッフ。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B528736183/', R + 'B530400210/', R + 'B531699423/', R + 'B532634943/', R + 'B533455396/', R + 'B533501045/', R + 'B536206880/', R + 'B536352502/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively counter; staff recommend the fish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通四条上る阪東屋町664-25 西ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004306, 135.760863); cross-checked: GSI 京都府京都市中京区阪東屋町664番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Primitive-grilled nodoguro skewer', '¥1,600', 'Primitive grill', 'ask', 'no', 'Tabelog.', 'nodoguro'),
      it('', '', 'Primitive-grilled ayu skewer', '¥680', 'Primitive grill', 'ask', 'no', 'Tabelog.', 'ayu'),
      it('', '', 'Primitive-grilled live eel', '¥1,000', 'Primitive grill', 'ask', 'no', 'Tabelog.', 'unagi'),
      it('', '', 'Salt-seared bonito', '¥900', 'Sashimi', 'ask', 'no', 'Tabelog.', 'katsuo'),
      it('', '', 'Bero daikon', '¥680', 'Small plates', 'ask', 'no', 'Tabelog.', 'berodaikon'),
      it('', '', 'Kamameshi (for two)', '', 'Rice', 'ask', 'no', 'July and August 2026.', 'kamameshi'),
    ] }, {
    cuisine: '名物の原始焼き: 炭を積んだ周りに魚の串を立て、外はかりっと中はふっくら (食べログ、2026年7月)・活き海老500円、車海老500円、トロいわし630円、鮎680円、のどぐろ1,600円、活き鰻1,000円などの串 (食べログ)・鰹の塩たたき900円、鯵の刺身800円、べろ大根と牛すじ各680円 (食べログ)・お造りの盛り合わせ、2人前の釜めし (2026年7・8月)・カマの塩焼き (2026年8月)・ねぎとろアボカドのガーリックトースト (2026年7月)・約20種の日本酒 (2026年5月)',
    neighborhood: '四条の北の東洞院。阪急烏丸から徒歩2分',
    gf_detail: '要確認。炭火の原始焼きの魚の串、刺身、釜めし、べろ大根と牛すじ、ガーリックトースト。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。串、刺身、カマ焼き、牛すじの魚の居酒屋 (食べログのメニュー、2026年の口コミ)。',
    notes: '[魚の居酒屋・四条烏丸、炭火の原始焼き] 四条烏丸近くのにぎやかな54席の居酒屋。コの字カウンターの前で炭を積んだ周りに魚の串を焼く: のどぐろ、鮎、活き鰻や海老。新鮮な刺身、分け合う釜めし、約20種の日本酒。親切で手早いスタッフ。外に立ち飲みのテラス。混む夜は予約を。',
  });
}

// ================================================================ 萬常
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007464/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_mantsune_gion', name: '萬常 (Mantsune)', category: 'OMNI',
    lat: 35.002965, lng: 135.777054, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the lunches are tempura and tempura bowls, with miso soup containing wheat gluten (fu) (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp and anago tempura, with dashi-based soups (2025–2026 reviews).',
    hours_raw: 'Monday–Wednesday, Friday and Saturday 11:30–15:00 and 18:00–20:00; closed Thursday and Sunday; hours may change (Tabelog). Dinner is a single course and is booked ahead (June 2026). Cash only: no cards, e-money or QR (Tabelog). 20 seats: two 6-mat tatami rooms (one with a sunken kotatsu), a table for 4 and 5 counter seats (Tabelog). Non-smoking (Tabelog). A minute south of the west gate of Yasaka Shrine (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of Yasaka Shrine’s west gate — 10 min from Keihan Gion-Shijo',
    cuisine: 'Tempura set lunch of shrimp, eggplant, nori, corn and red pepper, with pickles, fu miso soup and rice from a wooden tub to refill as you like (March 2025) · tempura bowl of shrimp, anago, nori, pepper, zucchini, eggplant and corn, with red miso soup and pickles (May 2026) · mini tempura bowl ¥1,200 with summer vegetables — shrimp, eggplant, zucchini, okra, corn (July 2026) · one dinner course, plus dashimaki on request (June 2026)',
    website: null, gmaps: gm('萬常 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Tempura · just south of Yasaka Shrine] A small, homely Gion shop with a counter and tatami rooms, where the owner, all Kyoto dialect and warmth, serves freshly fried tempura sets and bowls at lunch — a mini bowl from ¥1,200 — and one booked course at night. Cash only; closed Thursday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Kyoto',
      background: 'A March 2025 reviewer writes that the restaurant was founded in 1876. Reviewers describe an owner who greets guests with a natural smile and speaks gentle Kyoto dialect (March 2025, June and July 2026).',
      philosophy: null, specialty: 'Tempura lunch.',
      anecdotes: [
        { text: 'A June 2026 party booked three weeks ahead after a happy visit three years earlier, and was greeted with a smile right at 6 pm.', source: R + 'B467431301/' },
        { text: 'During the Gion Matsuri in July 2026 the owner handed out festival pamphlets and chatted with guests in easy Kyoto dialect.', source: R + 'B531906869/' },
      ],
      japanese_sources_summary: '食べログ: 萬常、日本料理・居酒屋、東山区祇園町南側533、京阪祇園四条駅から徒歩約10分 (八坂神社西楼門から南へ1分)、月・火・水・金・土 11:30〜15:00、18:00〜20:00、木・日定休、カード・電子マネー・QR不可、20席 (6畳の座敷2室 (うち1室は掘りごたつ)、テーブル4、カウンター5)、個室あり、禁煙。口コミ (2025〜2026年、英語): 1876年創業とのこと、天ぷら定食 (海老、茄子、海苔、とうもろこし、赤ピーマン)、漬物、麩の味噌汁、おひつのご飯はおかわり自由、天丼 (海老、穴子、海苔、ピーマン、ズッキーニ、茄子、とうもろこし) と赤だし、ミニ天丼1,200円、夜はコースひとつ、だし巻き、京言葉の店主。',
      confidence: 'medium', sources: [TB, R + 'B467431301/', R + 'B478035093/', R + 'B527312851/', R + 'B531906869/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm, homely service in Kyoto dialect; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側533',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002965, 135.776994), offset about 5.5 m east to (35.002965, 135.777054) because 京都ぎをんおむすび屋 さんかく (kyoto_gion_omusubi_sankaku), at the same lot, sits within 3 m; cross-checked: GSI 京都府京都市東山区祇園町南側533番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531906869/', R + 'B478035093/'],
    price_note: 'Mini tempura bowl price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tempura set lunch', '', 'Lunch', 'no', 'no', 'March 2025.', 'tenteishoku'),
      it('', '', 'Tempura bowl with red miso soup', '', 'Lunch', 'no', 'no', 'May 2026.', 'tendon'),
      it('', '', 'Mini tempura bowl', '¥1,200', 'Lunch', 'no', 'no', 'July 2026.', 'minitendon'),
      it('', '', 'Dinner course', '', 'Dinner', 'ask', 'no', 'June 2026.', 'course'),
    ] }, {
    cuisine: '海老、茄子、海苔、とうもろこし、赤ピーマンの天ぷら定食、漬物、麩の味噌汁、おひつのご飯はおかわり自由 (2025年3月)・海老、穴子、海苔、ピーマン、ズッキーニ、茄子、とうもろこしの天丼、赤だしと漬物 (2026年5月)・夏野菜のミニ天丼1,200円 (海老、茄子、ズッキーニ、オクラ、とうもろこし) (2026年7月)・夜はコースひとつ、だし巻きも頼める (2026年6月)',
    neighborhood: '八坂神社西楼門の南。京阪祇園四条から徒歩約10分',
    gf_detail: 'グルテンフリーではない。昼は天ぷらと天丼、味噌汁に麩 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。海老や穴子の天ぷら、出汁の汁物 (2025〜2026年の口コミ)。',
    notes: '[天ぷら・八坂神社のすぐ南] カウンターと座敷のある祇園の家庭的な小さな店。京言葉の温かい店主が、昼は揚げたての天ぷら定食や天丼 (ミニ天丼は1,200円から)、夜は予約のコースひとつ。現金のみ、木・日定休。',
  });
}

save();
