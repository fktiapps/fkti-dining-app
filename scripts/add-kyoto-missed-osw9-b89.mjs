// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 89.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 京都 中勢以 月 Kyoto Nakasei Nikuzuki (aged-beef restaurant of the butcher 京都中勢以 on the Shirakawa, run by a couple)
//   + かっちゃんの間借り食堂 Kacchan no Magari Shokudo (lunch-only chashu-and-egg set in a bar by City Hall)
//   + 海鮮と炭焼 凪 Nagi (seafood and charcoal-grill izakaya near Shijo-Karasuma; since January 2025)
//   - どんぶりどん 室町店 — retail food shop (Greg 11-07 ruling): a take-out bento and side-dish shop; no sourced founding history
//     or GF/vegan options
//   + 日本酒とおばんざいの京酒場 みとき Mitoki (basement obanzai and sake bar off Muromachi; since 2007)
//   - Shuba Bihani 烏丸御池店 — branch of a brand already in data: スバビハニ (kyoto_subabibani_shiyakusho)
//   Brand checks: no 中勢以 restaurant in data (two records mention 京都中勢以 only as a meat supplier); かっちゃんの間借り食堂 is
//   not 餃子のかっちゃん (a chain skipped in queue-status 26039539 — different food, a lunch pop-up in Bar Hit Point); a Tabelog
//   search for 海鮮と炭焼 凪 finds only this shop; みとき's own site links one sister shop (kensui nishiki), a local second
//   concept. None is a THAN or WILL brand. None is in a hotel.
//   Service charges from Tabelog's Japanese original: みとき 「お付き出し：324円」; the other three have no section.
//   Pins (checked against main, hidden records included): かっちゃん moved 6m SE (1.3m from kyoto_yakitori_kyoto_tachibana in the
//   same building); みとき moved 7m SE (0.0m from kyoto_dernier_bar); 中勢以 月 and 凪 ≥ 6m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26012681', 'retail food shop (Greg 11-07 ruling): どんぶりどん 室町店 is a take-out bento and side-dish shop (bentos about ¥580–640, 2025–26 reviews); no sourced founding history and no sourced GF or vegan options');
skip('26041463', 'branch of a brand already in data: スバビハニ (Shuba Bihani; kyoto_subabibani_shiyakusho); further shops at Marutamachi and Research Park');

// ================================================================ 京都 中勢以 月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026433/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.kyotonakasei.jp/nikuduki/';
  const D = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_nakasei_nikuzuki', name: '京都 中勢以 月 (Kyoto Nakasei Nikuzuki)', category: 'OMNI',
    lat: 35.007307, lng: 135.778648, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The lunch is aged beef simmered sukiyaki-style (soy-based) on rice (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an aged-beef restaurant run by a butcher (2024–26 reviews).',
    hours_raw: 'Mon, Thu–Sun 11:30–15:00 (L.O. 14:00) and 18:00–22:00 (L.O. 21:00); closed Tuesdays and Wednesdays; Monday holidays open, closed the next day (Tabelog). Dinner by reservation only, at least two days ahead (Tabelog). Without a booking, lunch is the aged-beef set only; the hamburg steak needs a reservation (October 2025 and May 2026 reviews). Cards and QR; no e-money (Tabelog). 24 seats: 20 at tables and 4 at the counter; non-smoking (Tabelog). On the Shirakawa near Ipponbashi, 7 min from Higashiyama Stn exit 2 through Furukawa-cho arcade (Tabelog; October 2025 review).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shirakawa by Furukawa-cho arcade — 7 min from Higashiyama Stn',
    cuisine: 'Aged Tajima beef from the butcher 京都中勢以: the lunch set of aged beef simmered sukiyaki-style with onion, soup, Ohara pickles and Tanba-Sasayama Koshihikari rice, ¥1,300 plus ¥150 for an onsen egg (2024–26), finished with Hararyokaku black shichimi (2025–26); steak, hamburg steak and other yoshoku at dinner, about ¥10,000–15,000 (Tabelog)',
    website: WEB, gmaps: gm('京都 中勢以 月'), menu_url: null,
    notes: '[Aged beef · Shirakawa] The restaurant of Kyoto aged-meat butcher 京都中勢以, beside the Shirakawa: a ¥1,450 sukiyaki-style aged Tajima beef lunch with onsen egg, and steak and hamburg dinners by reservation. Run by a warm couple.',
    chef_bio: { chef_name: null, roles: ['Couple running the restaurant (unnamed)'], origin: null,
      background: 'The restaurant of 京都中勢以, a butcher that buys whole Tajima beef and ages it (December 2024 and August 2025 reviews). A couple runs the room and explains each dish (November 2025 and August 2026 reviews). A diner first came over a decade ago, when the lunch menu was wider (October 2025 review).',
      philosophy: 'Bring out the full potential of the meat through ageing (August 2025 review).',
      specialty: 'Aged-beef sukiyaki-style set; hamburg steak.',
      anecdotes: [
        { text: 'An October 2025 guest was shown three ways to eat the beef — over rice, with black pepper, then with the sauce poured on — and the owner quietly suggested a better seat once the table behind had left.', source: R + 'B518224654/' },
        { text: 'A September 2025 diner, greeted by two smiling staff, watched the Shirakawa flow past and gave it five stars.', source: R + 'B514071995/' },
      ],
      japanese_sources_summary: '食べログ: 京都中勢以の店 (Nikuzuki)、洋食・ステーキ、東山区、地下鉄東山駅2番出口から商店街を通って徒歩7分、月・木〜日 11:30〜15:00 (L.O. 14:00)・18:00〜22:00 (L.O. 21:00)、火・水曜休み、夜は予約制、カード・QR 可、電子マネー不可、24席、禁煙。口コミ (2024〜2026年、英語): 精肉店の京都中勢以の店、但馬牛の熟成肉、すき焼き風の熟成肉の御膳1,300円と温玉 (+150円)、白川沿い、夫婦で営む (2025年11月、2026年8月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B501123011/', R + 'B511049129/', R + 'B514071995/', R + 'B518224654/', R + 'B519566106/', R + 'B528148187/', R + 'B534206168/', R + 'B534497837/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with visitors; dishes explained (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区稲荷町北組573',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007307, 135.778648); cross-checked: GSI 京都府京都市東山区稲荷町北組573番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501123011/', R + 'B514071995/'],
    price_note: 'Lunch prices from December 2024 and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aged-beef set (sukiyaki-style, lunch)', '¥1,300', 'Lunch', 'ask', 'no', 'December 2024 and November 2025 reviews; onsen egg +¥100–150.', 'aged_beef_set'),
      it('', '', 'Hamburg steak (reservation)', '', 'Yoshoku', 'ask', 'no', 'October 2025 and May 2026 reviews.', 'hamburg'),
    ] }, {
    cuisine: '精肉店の京都中勢以の熟成した但馬牛: すき焼き風に玉ねぎと煮た熟成肉、汁物、Ohara の漬物、Tanba-Sasayama のコシヒカリの昼の御膳1,300円、温玉 +150円 (2024〜26年)、Hararyokaku の黒七味で (2025〜26年)、夜はステーキやハンバーグなどの洋食、10,000〜15,000円ほど (食べログ)',
    neighborhood: '白川、古川町商店街のそば。東山駅から徒歩7分',
    gf_detail: '要確認。昼は醤油味のすき焼き風の熟成肉とご飯 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。精肉店の熟成肉の店 (2024〜26年の口コミ)。',
    notes: '[熟成肉・白川] 熟成肉の精肉店、京都中勢以の白川沿いの店。昼は温玉つきのすき焼き風の但馬牛の熟成肉の御膳1,450円、夜は予約制のステーキとハンバーグ。夫婦があたたかく迎える。',
  });
}

// ================================================================ かっちゃんの間借り食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043773/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kacchan_magari_shokudo', name: 'かっちゃんの間借り食堂 (Kacchan no Magari Shokudo)', category: 'OMNI',
    lat: 35.012013, lng: 135.766057, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soy-simmered chashu with a seasoning of fried onion and tempura bits (May 2026 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork chashu and egg (2026 reviews).',
    hours_raw: 'Lunch only; hours and days are not given on Tabelog (2026 reviews describe weekday lunches). A daytime pop-up in Bar Hit Point, which is a bar at night (April, May and October 2026 reviews). Order and pay at the counter (July 2026 review). 4th floor of the Bain Oak Aiina building, by elevator at the back; only an easel sign on the street; west of City Hall on Oshikoji (Tabelog; 2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of City Hall — 276 m from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Chashu and egg set meals: the pork and egg set ¥1,000 with pork belly and shoulder chashu, a fried egg and pickled ginger, free large rice (2026); the large set with double chashu (May 2026); a house seasoning of fried onion and tempura bits, mayonnaise to add (May 2026)',
    website: null, gmaps: gm('かっちゃんの間借り食堂'), menu_url: null,
    notes: '[Shokudo · City Hall] A lunch-only pop-up in a 4th-floor bar behind City Hall serving one thing well: tender belly and shoulder chashu with a fried egg over rice, ¥1,000 with free extra rice.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A lunch pop-up (magari shokudo, "borrowed-room diner") in Bar Hit Point, a bar at night (2026 reviews).',
      philosophy: null,
      specialty: 'Pork and egg (chashu tamago) set.',
      anecdotes: [
        { text: 'An October 2026 diner, unsure at the "Bar Hit Point" sign by the lift, opened the door to a warm welcome.', source: R + 'B538701480/' },
        { text: 'A June 2026 regular back on chashu after starting cholesterol medication found the pickled ginger balanced the rich belly.', source: R + 'B532992123/' },
      ],
      japanese_sources_summary: '食べログ: かっちゃんの間借り食堂、食堂、中京区橘町612 バインオークAiina 4F、京都市役所前駅から276m。口コミ (2026年、英語): 昼だけの間借り、夜は Bar Hit Point、豚バラと肩ロースのチャーシューと目玉焼きの定食1,000円、ご飯大盛り無料、チャーシュー倍の大盛り、揚げ玉ねぎと揚げ玉の自家製スパイス、マヨネーズ。',
      confidence: 'low', sources: [TB, R + 'B522203505/', R + 'B526676308/', R + 'B528328484/', R + 'B528387651/', R + 'B529456071/', R + 'B532578649/', R + 'B532992123/', R + 'B538701480/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find: 4th floor by the back elevator (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橘町612 バインオークAiina 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012051, 135.766010), moved 6m SE to clear kyoto_yakitori_kyoto_tachibana (1.3m, same building); cross-checked: GSI 京都府京都市中京区橘町612番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529456071/', R + 'B532578649/'],
    price_note: 'Price from May and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork and egg set (chashu tamago teishoku)', '¥1,000', 'Set meals', 'ask', 'no', 'May–October 2026 reviews.', 'chashu_tamago'),
      it('', '', 'Large pork and egg set (double chashu)', '', 'Set meals', 'ask', 'no', 'May 2026 review.', 'large'),
    ] }, {
    cuisine: 'チャーシューと卵の定食: 豚バラと肩ロースのチャーシュー、目玉焼き、紅しょうがの定食1,000円、ご飯大盛り無料 (2026年)、チャーシュー倍の大盛り (2026年5月)、揚げ玉ねぎと揚げ玉の自家製スパイス、マヨネーズも (2026年5月)',
    neighborhood: '市役所の西。京都市役所前駅から276m',
    gf_detail: '要確認。醤油で煮たチャーシュー、揚げ玉ねぎと揚げ玉のスパイス (2026年5月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚のチャーシューと卵 (2026年の口コミ)。',
    notes: '[食堂・市役所] 市役所の裏のビル4階のバーを昼だけ借りた食堂。やわらかい豚バラと肩ロースのチャーシューに目玉焼きをのせた定食ひとつ、1,000円でご飯大盛り無料。',
  });
}

// ================================================================ 海鮮と炭焼 凪
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042417/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']); const WE = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kaisen_sumiyaki_nagi', name: '海鮮と炭焼 凪 (Seafood to Sumiyaki Nagi)', category: 'OMNI',
    lat: 35.001397, lng: 135.758278, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and charcoal-grilled fish and meat may suit; fried dishes are on the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and charcoal-grill izakaya (2025–26 reviews).',
    hours_raw: 'Mon–Thu, Sun, holidays and the day after 17:00–23:30 (food L.O. 22:30, drinks 23:00); Fri, Sat and the day before a holiday 17:00–24:00 (L.O. 23:00); irregular closures (Tabelog). Ordering by smartphone (QR or LINE) (November 2025 and April 2026 reviews). Cards and QR; no e-money (Tabelog). 50 seats: counter, tatami and sunken-kotatsu rooms; heated tobacco only in a smoking area (Tabelog). Tucked down an alley west of Karasuma-Bukkoji, 2–3 min from Shijo (Tabelog; May 2026 review).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Bukkoji, south of Shijo — 2–3 min from Shijo Stn',
    cuisine: 'Fresh fish from ports around Japan and charcoal grilling: thick-cut sashimi platters of about seven kinds with chutoro, rare fish such as anago sashimi, seafood carpaccio (2026); charcoal-grilled fish, yakitori, outside skirt and chicken neck (2026); grilled vegetables; changing appetizers; about ¥4,000–5,000',
    website: null, gmaps: gm('海鮮と炭焼 凪 烏丸'), menu_url: null,
    notes: '[Seafood izakaya · Shijo-Karasuma] A lively alley izakaya, open since January 2025, with thick-cut sashimi of fish from ports around Japan, charcoal-grilled fish and yakitori, sunken-kotatsu rooms for groups and smartphone ordering. About ¥4,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 25 January 2025 (Tabelog). The chef cuts sashimi at the counter and chats with guests (May and July 2026 reviews).',
      philosophy: null,
      specialty: 'Assorted sashimi; charcoal grill.',
      anecdotes: [
        { text: 'A May 2026 trio shared a seven-kind sashimi platter, and the staff added a third chicken wing to a two-piece order.', source: R + 'B528745856/' },
        { text: 'A May 2026 counter guest watched the sashimi being cut and rated the chutoro best.', source: R + 'B528050166/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮と炭焼 凪、居酒屋・魚介料理、下京区烏丸通仏光寺西入ル釘隠町232、地下鉄四条駅から2〜3分、月〜木・日・祝日・祝日の翌日 17:00〜23:30、金・土・祝日の前日 17:00〜24:00、不定休、カード・QR 可、電子マネー不可、50席、掘りごたつ、加熱式たばこのみ喫煙所、2025年1月25日オープン。口コミ (2025〜2026年、英語): 各地の港の新鮮な刺身、魚と焼き鳥の炭火焼き、スマホで注文、路地の隠れ家。',
      confidence: 'medium', sources: [TB, R + 'B518080899/', R + 'B522074355/', R + 'B526734251/', R + 'B527179423/', R + 'B528050166/', R + 'B528745856/', R + 'B531273218/', R + 'B531298010/', R + 'B533294880/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通仏光寺西入ル釘隠町232',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.001397, 135.758278); cross-checked: GSI 京都府京都市下京区釘隠町232番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528745856/'],
    price_note: 'No item prices in reviews; Tabelog average ¥4,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (about 7 kinds)', '', 'Sashimi', 'ask', 'no', 'May 2026 reviews.', 'sashimi'),
      it('', '', 'Charcoal-grilled fish and yakitori', '', 'Charcoal grill', 'ask', 'no', 'May 2026 review.', 'sumiyaki'),
    ] }, {
    cuisine: '全国の港の新鮮な魚と炭火焼き: 中トロなど約7種の厚切りの刺身の盛り合わせ、穴子の刺身などの珍しい魚、海鮮のカルパッチョ (2026年)、炭火焼きの魚、焼き鳥、ハラミ、せせり (2026年)、焼き野菜、日替わりの先付、4,000〜5,000円ほど',
    neighborhood: '烏丸仏光寺、四条の南。四条駅から徒歩2〜3分',
    gf_detail: '要確認。刺身と炭火焼きの魚や肉は合う可能性がある。揚げ物もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介と炭火焼きの居酒屋 (2025〜26年の口コミ)。',
    notes: '[海鮮居酒屋・四条烏丸] 2025年1月オープンの路地のにぎやかな居酒屋。全国の港の魚の厚切りの刺身、炭火焼きの魚と焼き鳥、掘りごたつの個室、スマホで注文。4,000〜5,000円ほど。',
  });
}

// ================================================================ 日本酒とおばんざいの京酒場 みとき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004953/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.mitoki.net/';
  const D = day(['17:00', '25:00']);
  put({
    id: 'kyoto_kyosakaba_mitoki', name: '日本酒とおばんざいの京酒場 みとき (Mitoki)', category: 'OMNI',
    lat: 35.002519, lng: 135.758039, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai are simmered in dashi and soy; nama-fu (wheat gluten) dengaku is on the menu (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable obanzai such as fried aubergine in broth, simmered potatoes, dried radish, lotus root and thick fried tofu (March 2026), but dashi is likely.',
    hours_raw: 'Daily 17:00–01:00 (food L.O. 24:00, drinks 00:30); open year-round (Tabelog). Cover ¥324 (Tabelog Japanese original 「お付き出し：324円」). Phone bookings from 15:00 (Tabelog). Tablet ordering (2025–26 reviews). Cards; no e-money (Tabelog). 31 seats: 6 at the counter, sunken-kotatsu and tatami private rooms and a loft; smoking allowed (Tabelog). Down a stone-paved stair to the basement of the Kawamoto building on Muromachi-Ayanokoji, 2 min from Shijo (Tabelog; 2025–26 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi-Ayanokoji — 2 min from Shijo Stn',
    cuisine: 'Kyoto obanzai and sake: a three- or six-item obanzai starter (2025–26), fried aubergine in broth, simmered potatoes, dried radish, lotus root and thick fried tofu (March 2026), nama-fu dengaku and sushi heaped with tobiko (June 2026), simmered sea-bream head, napa cabbage and pork with ginger (November 2025), sashimi, jako rice and clear soup (July 2026); chilled and warm sake; about ¥4,000–6,000',
    website: WEB, gmaps: gm('京酒場 みとき 室町'), menu_url: null,
    notes: '[Obanzai & sake · Shijo-Karasuma] A long-running basement sake bar reached by a lit stone stair, with homey Kyoto obanzai, creative dishes, private rooms and late hours to 1 am. About ¥4,000–6,000; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 19 June 2007 (Tabelog). The shop\'s site links a sister shop (own site).',
      philosophy: null,
      specialty: 'Obanzai with Japanese sake.',
      anecdotes: [
        { text: 'A March 2026 diner, dining with a colleague from years abroad, said no money buys Kyoto obanzai overseas.', source: R + 'B524525844/' },
        { text: 'A June 2026 guest in a mezzanine private room found the tobiko sushi heaped higher than the tablet photo, served with pickled gourd.', source: R + 'B530788060/' },
      ],
      japanese_sources_summary: '食べログ: みとき、居酒屋・日本料理、下京区、室町綾小路、カワモトビル B1F、阪急烏丸駅・地下鉄四条駅から徒歩2分、毎日 17:00〜翌1:00、年中無休、お付き出し324円、カード可、電子マネー不可、31席、個室あり、喫煙可、2007年6月19日オープン。口コミ (2025〜2026年、英語): おばんざいの盛り合わせ、なすの揚げびたし、小芋の煮物、切り干し大根、生麩の田楽、鯛のあら炊き、日本酒、タブレットで注文。',
      confidence: 'medium', sources: [TB, WEB, R + 'B513612052/', R + 'B517429082/', R + 'B517456602/', R + 'B520967349/', R + 'B524525844/', R + 'B524618151/', R + 'B530788060/', R + 'B531445233/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; smoking allowed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通綾小路西入ル鶏鉾町501 カワモトビル Ｂ１Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002563, 135.757985), moved 7m SE to clear kyoto_dernier_bar (0.0m); cross-checked: GSI 京都府京都市下京区鶏鉾町501番地 (lot) 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531445233/'],
    price_note: 'No item prices; Tabelog average ¥3,000–3,999 (reviews ¥4,000–6,000); ¥324 cover.', last_checked: TODAY, items: [
      it('', '', 'Assorted obanzai (three or six)', '', 'Obanzai', 'ask', 'ask', '2025–26 reviews.', 'obanzai'),
      it('', '', 'Nama-fu dengaku', '', 'A la carte', 'no', 'ask', 'June 2026 review.', 'namafu'),
    ] }, {
    cuisine: '京都のおばんざいと日本酒: 3品か6品のおばんざい (2025〜26年)、なすの揚げびたし、小芋の煮物、切り干し大根、れんこん、厚揚げ (2026年3月)、生麩の田楽、とびこを山盛りの寿司 (2026年6月)、鯛のあら炊き、白菜と豚の生姜 (2025年11月)、刺身、じゃこご飯と吸い物 (2026年7月)、冷酒と燗酒、4,000〜6,000円ほど',
    neighborhood: '室町綾小路。四条駅から徒歩2分',
    gf_detail: '要確認。おばんざいは出汁と醤油で煮る。生麩の田楽もある (2025〜26年の口コミ)。',
    vegan_detail: '要確認。なすの揚げびたし、小芋、切り干し大根、れんこん、厚揚げなど野菜のおばんざい (2026年3月) があるが、出汁を使う可能性が高い。',
    notes: '[おばんざいと日本酒・四条烏丸] 灯りのともる石畳の階段を下りる地下の老舗の日本酒の店。家庭的な京都のおばんざい、創作料理、個室、深夜1時まで。4,000〜6,000円ほど、喫煙可。',
  });
}

save();
