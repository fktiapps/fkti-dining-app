// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 86.
// Led by 26020361 (coordinator ruling 2026-11-08: Karasuma Kyoto Hotel is a local Kyoto company's own hotel, not a national
// or global brand — draft it, naming the operator), then the rest list nearest-first:
//   + からすま京都ホテル オリゾンテ Orizzonte (the hotel's 3rd-floor breakfast buffet) — operator 株式会社京都ホテル
//   + バー アンカー Bar Anchor (the same hotel's basement main bar) — same operator and ruling
//   - ホリーズカフェ 錦烏丸店 — chain: ホリーズカフェ (already ruled a chain, 26012977)
//   - きなこととろり 祇園本店 — retail food shop (Greg 11-07 ruling): a warabi-mochi shop whose only 2025–26 review is a
//     boxed take-home purchase; opened 2022, no sourced founding history or GF/vegan options
//   - パエリアレストラン バラッカ カフェ — branch of a brand already in data: パエリアレストラン バラッカ (kyoto_barraca_paella)
//   - 京菓匠 栗阿彌 高台寺店 — no 2025–26 review (latest December 2023)
//   + イタリア料理式 ricetta8.7 (ten-seat Italian in a Karasuma-Oike machiya) — sister of Rokkaku 887 (kyoto_rokkaku_887),
//     a local chef's own second concept, so drafted
//   Operator source for the hotel: マイナビ2027 company page "(株)京都ホテル【ホテルオークラ京都・からすま京都ホテル】" and the
//   株式会社京都ホテル press release on kyotohotel.co.jp (2021) for からすま京都ホテル; 株式会社京都ホテル (founded 1927) also runs
//   ホテルオークラ京都, and Hotel Okura has been its largest shareholder since 2005 (3rd-in.co.jp wiki) — stated in the records.
//   WILL check (株式会社WILL is now a large parent): none of the Tabelog listings carries WILL's invoice number
//   T4120001183828, and none of the names is a known WILL brand.
//   Brand checks: no オリゾンテ / アンカー / ricetta record in data (queue-status 26001498 is Hotel Okura Kyoto's own オリゾンテ,
//   skipped as a big-chain hotel venue — a different restaurant). None is a THAN brand.
//   Service charges from Tabelog's Japanese original: ricetta8.7 「サービス料10％」; the two hotel venues have no section.
//   Pins (checked against main, hidden records included): the hotel address has no lot number, so both hotel venues use the
//   Tabelog point with loc_approx 'single'; Bar Anchor's point is 6.5m from Orizzonte's; ricetta8.7 ≥ 15m from every record.
//   Reviews B518843264, B519258788 and B498959288 on the Orizzonte page describe a 17th-floor buffet with river views — Hotel
//   Okura Kyoto's restaurant — and are not used.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const OPS = ['https://job.mynavi.jp/27/pc/search/corp52800/outline.html', 'https://www.kyotohotel.co.jp/wp-content/uploads/sites/4/2021/03/20210317_KKHlongstay.pdf', 'https://pedia.3rd-in.co.jp/wiki/京都ホテル'];

skip('26036777', 'chain: ホリーズカフェ (already ruled a chain, 26012977 osw8-51: 16 shops in our crawls)');
skip('26036957', 'retail food shop (Greg 11-07 ruling): きなこととろり is a warabi-mochi shop; the only 2025–26 review (February 2025) is a boxed take-home purchase; opened January 2022; no sourced founding history and no sourced GF or vegan options');
skip('26039375', 'branch of a brand already in data: パエリアレストラン バラッカ (kyoto_barraca_paella)');
skip('26019497', 'no 2025–26 review (the latest fetched review is from December 2023)');

// ================================================================ からすま京都ホテル オリゾンテ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020361/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.hotel.kyoto/karasuma/banquet/orizzonte/';
  const D = day(['07:00', '10:00']);
  put({
    id: 'kyoto_orizzonte_karasuma_kyoto_hotel', name: 'からすま京都ホテル オリゾンテ (Orizzonte, Karasuma Kyoto Hotel)', category: 'OMNI',
    lat: 35.001895, lng: 135.759435, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Japanese and Western breakfast buffet with obanzai, yudofu, eggs and rice alongside croissants, fried dishes and curry (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Yudofu, vegetables, rice and obanzai (2025–26 reviews); dashi and egg are likely.',
    hours_raw: 'Breakfast buffet daily 7:00–10:00; hours may change (Tabelog). Cards (Tabelog). 140 seats; non-smoking (Tabelog). A multipurpose room on the 3rd floor of Karasuma Kyoto Hotel, on Karasuma south of Shijo, by Shijo Stn exit 6 (Tabelog; December 2025 review). Operator: 株式会社京都ホテル, which runs Karasuma Kyoto Hotel and Hotel Okura Kyoto (Mynavi company page; 株式会社京都ホテル press release); Hotel Okura has been its largest shareholder since 2005 (3rd-in.co.jp).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, south side — by Shijo Stn exit 6',
    cuisine: 'Hotel breakfast buffet, Japanese and Western: Kyoto obanzai and yudofu (December 2025); vegetables, eggs, sausages, meat sauce, rice, fried dishes, kinpira gobo, croissants and curry rice (January 2026); about ¥2,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('からすま京都ホテル'), menu_url: null,
    notes: '[Breakfast buffet · Shijo-Karasuma] The 3rd-floor breakfast room of Karasuma Kyoto Hotel, a local Kyoto company\'s hotel: a Japanese and Western buffet with obanzai and yudofu from 7 am. About ¥2,000–3,000.',
    chef_bio: { chef_name: null, roles: ['Restaurant of Karasuma Kyoto Hotel (operator 株式会社京都ホテル)'], origin: null,
      background: 'Opened 24 March 2012 (Tabelog). Karasuma Kyoto Hotel is run by 株式会社京都ホテル, a Kyoto company founded in 1927 that also runs Hotel Okura Kyoto; Hotel Okura has been its largest shareholder since 2005 (Mynavi; 株式会社京都ホテル press release; 3rd-in.co.jp).',
      philosophy: null,
      specialty: 'Japanese and Western breakfast buffet.',
      anecdotes: [
        { text: 'A January 2026 hotel guest worked through vegetables, eggs and sausages, then fried dishes, kinpira and curry rice, finishing with milk.', source: R + 'B525757104/' },
        { text: 'A December 2025 guest noted the room is a multipurpose space that becomes the breakfast hall each morning, with obanzai and yudofu.', source: R + 'B518870279/' },
      ],
      japanese_sources_summary: '食べログ: からすま京都ホテル オリゾンテ、ビュッフェ、下京区 からすま京都ホテル3F、地下鉄四条駅6番出口、毎日 7:00〜10:00、カード可、140席、禁煙、2012年3月24日オープン。運営は株式会社京都ホテル (ホテルオークラ京都とからすま京都ホテルを運営、マイナビ、プレスリリース)、2005年からホテルオークラが筆頭株主。口コミ (2025〜2026年、英語): 3階の多目的スペースの朝食、和洋のビュッフェ、おばんざい、湯豆腐、きんぴらごぼう、カレーライス。',
      confidence: 'medium', sources: [TB, WEB, ...OPS, R + 'B518870279/', R + 'B525757104/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; self-service buffet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通四条下ル からすま京都ホテル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the hotel\'s page; breakfast reviews dated December 2025 and January 2026.' },
    pin_source: `Tabelog ${TB} (35.001895, 135.759435); the address has no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published price found; Tabelog average ¥2,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Breakfast buffet (Japanese and Western)', '', 'Buffet', 'ask', 'ask', 'December 2025 and January 2026 reviews.', 'breakfast'),
    ] }, {
    cuisine: 'ホテルの和洋の朝食ビュッフェ: 京都のおばんざいと湯豆腐 (2025年12月)、野菜、卵、ソーセージ、ミートソース、ご飯、揚げ物、きんぴらごぼう、クロワッサン、カレーライス (2026年1月)、2,000〜3,000円ほど (食べログ)',
    neighborhood: '四条烏丸の南。四条駅6番出口すぐ',
    gf_detail: '要確認。おばんざい、湯豆腐、卵、ご飯とクロワッサン、揚げ物、カレーの和洋のビュッフェ (2025〜26年の口コミ)。',
    vegan_detail: '要確認。湯豆腐、野菜、ご飯、おばんざい (2025〜26年の口コミ)。出汁と卵を使う可能性が高い。',
    notes: '[朝食ビュッフェ・四条烏丸] 京都の会社のホテル、からすま京都ホテルの3階の朝食会場。朝7時からおばんざいや湯豆腐のある和洋のビュッフェ。2,000〜3,000円ほど。',
  });
}

// ================================================================ バー アンカー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020865/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.hotel.kyoto/karasuma/restaurant/anchor/';
  const D = day(['17:30', '24:00']);
  put({
    id: 'kyoto_bar_anchor_karasuma_kyoto_hotel', name: 'バー アンカー (Bar Anchor, Karasuma Kyoto Hotel)', category: 'OMNI',
    lat: 35.001839, lng: 135.759415, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar; food not described in reviews.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A cocktail bar; food not described in reviews.',
    hours_raw: 'Daily 17:30–24:00 (L.O. 23:30); hours may change (Tabelog). Cards, e-money and QR (Tabelog). 40 seats: 8 at the counter and 32 at tables (Tabelog). Basement of Karasuma Kyoto Hotel, by Shijo Stn exits 4 and 6 (Tabelog). Operator: 株式会社京都ホテル (Mynavi company page; 株式会社京都ホテル press release).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, south side — by Shijo Stn exits 4 and 6',
    cuisine: 'Classic hotel bar: cocktails, including seasonal originals such as an autumn persimmon-liqueur cocktail (December 2023); about ¥3,000–5,000 (2025–26 reviews)',
    website: WEB, gmaps: gm('からすま京都ホテル バー アンカー'), menu_url: null,
    notes: '[Hotel bar · Shijo-Karasuma] The calm, spacious basement main bar of Karasuma Kyoto Hotel: a long-established hotel bar for classic and seasonal cocktails, with staff who remember returning guests. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Bar of Karasuma Kyoto Hotel (operator 株式会社京都ホテル)'], origin: null,
      background: 'The main bar of Karasuma Kyoto Hotel, run by 株式会社京都ホテル (Mynavi; press release); described as a long-established hotel bar (December 2023 and March 2026 reviews).',
      philosophy: null,
      specialty: 'Classic and seasonal cocktails.',
      anecdotes: [
        { text: 'A March 2026 guest, back as a second stop after a first visit with a senior colleague, was surprised to be remembered.', source: R + 'B525316550/' },
        { text: 'An October 2025 visitor counted cocktails at this classic main bar among the memories of the trip.', source: R + 'B516288138/' },
      ],
      japanese_sources_summary: '食べログ: バー アンカー、バー、下京区 からすま京都ホテル B1F、地下鉄四条駅4・6番出口すぐ、毎日 17:30〜24:00 (L.O. 23:30)、カード・電子マネー・QR 可、40席 (カウンター8)。運営は株式会社京都ホテル (マイナビ、プレスリリース)。口コミ (2023〜2026年、英語): 老舗のホテルのバー、季節のオリジナルカクテル (柿のリキュール、2023年12月)、2回目で顔を覚えてくれた (2026年3月)。',
      confidence: 'low', sources: [TB, WEB, ...OPS.slice(0, 2), R + 'B475633296/', R + 'B516288138/', R + 'B525316550/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel bar.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通四条下る からすま京都ホテル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the hotel\'s page; reviews dated October 2025 and March 2026.' },
    pin_source: `Tabelog ${TB} (35.001839, 135.759415), 6.5m from Orizzonte in the same hotel; the address has no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475633296/'],
    price_note: 'No item prices found; reviews give ¥3,000–5,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Seasonal original cocktail', '', 'Cocktails', 'ask', 'ask', 'December 2023 review.', 'seasonal'),
    ] }, {
    cuisine: '昔ながらのホテルのバー: カクテル、季節のオリジナル (秋は柿のリキュールのカクテル、2023年12月)、3,000〜5,000円ほど (2025〜26年の口コミ)',
    neighborhood: '四条烏丸の南。四条駅4・6番出口すぐ',
    gf_detail: '要確認。カクテルのバー。料理の口コミなし。',
    vegan_detail: '要確認。カクテルのバー。料理の口コミなし。',
    notes: '[ホテルのバー・四条烏丸] からすま京都ホテルの地下の落ち着いた広いメインバー。老舗のホテルのバーで定番と季節のカクテルを。客の顔を覚えるスタッフ。3,000〜5,000円ほど。',
  });
}

// ================================================================ イタリア料理式 ricetta8.7
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037161/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.ricetta87.com/';
  const D = day(['12:00', '14:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_ricetta_87', name: 'イタリア料理式 ricetta8.7', category: 'OMNI',
    lat: 35.010041, lng: 135.76258, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A set course with handmade pasta, pizza and crostini (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of seafood, horse meat and beef (2025 reviews).',
    hours_raw: 'Lunch from 12:00 (12:00–14:30) and dinner 17:30–22:30 (L.O. 20:30); closing days not fixed; ten guests a day; course only, no seat-only bookings; a credit card must be registered to confirm a booking; call for same-day bookings (Tabelog). Service charge 10% (Tabelog Japanese original 「サービス料10％」). Cards, e-money (iD, QUICPay) and PayPay (Tabelog). 10 seats — a counter of 6 and a table of 4 in a tatami machiya; shoes off (Tabelog). 2 min from Karasuma-Oike (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike — 2 min from the station',
    cuisine: 'Creative Italian courses with ingredients from around Japan: shirasu and stracciatella bruschetta, Aizu horse tartare with caviar, Omi beef heart, eel braised with aubergine, handmade orecchiette with Spanish mackerel and bottarga (July 2025); the ¥24,200 all-inclusive course with free-flow pairing — crab and scallop chawanmushi, princess trout, wood-grilled Izumo red-beef sirloin, a high-hydration Margherita and tagliolini Bolognese (December 2025); about ¥20,000–30,000',
    website: WEB, gmaps: gm('ricetta8.7 京都'), menu_url: null,
    notes: '[Italian · Karasuma-Oike] Ten seats in a shoes-off machiya where a talkative, warm chef runs one lively counter: inventive Italian courses from top regional produce, homemade pasta and pizza, and an all-inclusive ¥24,200 course with endless pairing. Sister of Rokkaku 887.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 11 January 2022 (Tabelog). A chatty, warm chef whose counter sets the mood (2025 reviews); also behind the Kiyamachi standing bar Rokkaku 887 (kyoto_rokkaku_887).',
      philosophy: '"Simplicity is best" — a lot is done without overdoing it (July 2025 review).',
      specialty: 'All-inclusive course with pairing.',
      anecdotes: [
        { text: 'A July 2025 regular on a fifth visit, once a commute from Tokyo and now from Osaka, makes it a Friday solo night out.', source: R + 'B470292046/' },
        { text: 'A December 2025 party of three at the counter found the endless pairing generous enough to drink a little too much; the new pizza was a highlight.', source: R + 'B519800384/' },
      ],
      japanese_sources_summary: '食べログ: イタリア料理式 ricetta8.7、イタリアン・イノベーティブ、中京区、烏丸御池駅から徒歩2分、昼 12:00〜14:30、夜 17:30〜22:30 (L.O. 20:30)、不定休、1日10名、コースのみ、予約時にカード登録、サービス料10%、カード・電子マネー・PayPay 可、10席 (カウンター6、テーブル4)、町家で靴を脱ぐ、2022年1月11日オープン。口コミ (2025年、英語): 話好きで温かい料理人、全国の食材、自家製パスタとピザ、24,200円のオールインクルーシブのコース (2025年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B470292046/', R + 'B507059106/', R + 'B519436015/', R + 'B519800384/', R + 'B520951335/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Card registration needed to book; shoes off (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀甲屋町609',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.010041, 135.762580); cross-checked: GSI 京都府京都市中京区亀甲屋町609番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519436015/'],
    price_note: 'Course price from a December 2025 review; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'All-inclusive course with free-flow pairing', '¥24,200', 'Courses', 'no', 'no', 'December 2025 review.', 'all_inclusive'),
    ] }, {
    cuisine: '全国の食材の創作イタリアンのコース: しらすとストラッチャテッラのブルスケッタ、Aizu の馬肉のタルタルとキャビア、Omi の牛のハツ、鰻と茄子の煮込み、サワラとボッタルガの手打ちオレキエッテ (2025年7月)、ペアリング飲み放題の24,200円のオールインクルーシブのコース — 蟹と帆立の茶碗蒸し、ヒメマス、Izumo の赤牛のサーロインの薪焼き、加水の多いマルゲリータ、タリオリーニのボロネーゼ (2025年12月)、20,000〜30,000円ほど',
    neighborhood: '烏丸御池。駅から徒歩2分',
    gf_detail: '要確認。手打ちパスタ、ピザ、クロスティーニのあるコース (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、馬肉、牛肉のコース (2025年の口コミ)。',
    notes: '[イタリアン・烏丸御池] 靴を脱いで上がる町家の10席。話好きで温かい料理人がカウンターを盛り上げ、地方の食材の創作イタリアン、自家製パスタとピザ、ペアリング飲み放題の24,200円のコース。Rokkaku 887 の姉妹店。',
  });
}

save();
