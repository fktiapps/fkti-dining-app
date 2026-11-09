// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 83.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl, than.co.jp/brands and 株式会社WILL (will-food.com).
//   - 祇園ねいろ — no reviews (rest rule)
//   + BARCRAFT倶楽部京都 (cocktail bar in a Gion machiya with a lit garden; 2025–26 reviews)
//   - 東横INN 京都四条烏丸 — large parent: a 東横INN chain hotel (Greg 11-08 big-chain hotel ruling)
//   + ラ・ブークル La Boucle (game-meat bistro at Anekoji-Gokomachi; 2025–26 reviews)
//   - 餃子とどて煮 うさぎ屋 — large parent: a THAN brand (than.co.jp/brands)
//   - Shisha Cafe & Bar 1 moku mock GION — no reviews (rest rule)
//   + なんでもや 味勝 Nandemoya Ajikatsu (late-night Gion izakaya run by an older couple)
//   + 酌と野菜と小皿と。祇園とと◯ Gion Toto◯ (fisherman-direct fish izakaya, opened February 2026; not related to ととうお)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: BARCRAFT 10% and ¥700 charge (Tabelog).
//   Pins: Tabelog /en/ point, cross-checked with GSI; BARCRAFT is on the 祇園町南側570 lot (GSI 289 m) and marked approximate; 味勝 moved
//   ~3.5 m off kyoto_gaucho_churrasco (5.7 m); とと◯ ~4 m off kyoto_gion_kotobukiya (5.4 m); each 9 m+ from every pin on main, hidden
//   records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035875', '祇園ねいろ: no reviews on Tabelog (rest rule)');
skip('26021523', '東横INN 京都四条烏丸: large parent — a 東横INN chain business hotel (Greg 11-08 ruling on venues in big-chain hotels)');
skip('26042661', '餃子とどて煮 うさぎ屋: large parent — 餃子とどて煮 うさぎ屋 is a brand of 株式会社THAN (than.co.jp/brands)');
skip('26045535', 'Shisha Cafe & Bar 1 moku mock GION: no reviews on Tabelog (rest rule)');

// BARCRAFT倶楽部京都: drafted by the worker; converted to a skip by the integrator (CRAFT倶楽部 group, same ruling as 26043978).
skip('26034687', 'large parent: the CRAFT倶楽部 京都店 in 祇園町南側 listed on craft-club.jp alongside 神田, 祇園店 and 下総中山 and sister CafeBar/BakeryCafe shops (Tokyo operator 株式会社LUXURY); same ruling as 26043978');

// ================================================================ ラ・ブークル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028195/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_la_boucle_anekoji', name: 'ラ・ブークル (La Boucle)', category: 'OMNI',
    lat: 35.00990159033396, lng: 135.76651962979173, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French bistro dishes with sauces, pâté en croûte, bread and butter; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a game-meat and fish bistro; a reviewer wished for more vegetable dishes (April 2026).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30) and dinner 18:00–23:00 (last order 22:30); closed Tuesday (Tabelog). Courses by reservation only, otherwise à la carte; booking ahead recommended (Tabelog; March 2026). One drink per person (May 2024). Cards (VISA, Master, JCB, AMEX, Diners) and e-money; no service or table charge (Tabelog) — a May 2024 reviewer heard cards were only taken for bills over ¥10,000. 18 seats; non-smoking (Tabelog). ION Building 1F at the corner of Anekoji and Gokomachi, about 3 minutes from Kyoto Shiyakusho-mae (Tabelog; August 2024). Opened 1 November 2016 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Anekoji at Gokomachi, near Kyoto City Hall',
    cuisine: 'French bistro of seasonal dishes and hearty meat, especially game — venison, duck, wild boar (Tabelog shop text; 2024–2026 reviews) · lunch ¥2,200 (January 2026); full course ¥3,850 (May 2024) · venison pâté en croûte (August 2024); amberjack confit (February 2025) · duck and boar ham, corn mousse, rich fish soup, beef tartare with rock salt, venison steak (July 2026) · garlic-shrimp butter with the bread (January 2026); duck breast; pan-seared sea bream (2026) · wine by the glass to jazz (Tabelog shop text)',
    website: null, gmaps: gm('ラ・ブークル 京都 姉小路'), menu_url: TB,
    notes: "[French bistro · Anekoji-Gokomachi, game meat and jazz] A small jazz-playing bistro near City Hall that does game well — venison pâté en croûte, boar ham, venison steak — plus fish soup and a moreish garlic-shrimp butter. Lunch from ¥2,200; courses by reservation; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in November 2016 on the corner of Anekoji and Gokomachi (Tabelog). Reviewers (2018–2026) describe a calm room with jazz, a piano and guitar on display, and cooking that takes the gaminess out of game.',
      philosophy: 'Fresh seasonal vegetables and fish, hearty meat, and a glass of wine to music (Tabelog shop text).',
      specialty: 'Game meat.',
      anecdotes: [
        { text: 'An August 2024 diner recommended the venison pâté en croûte — just ask for bread.', source: R + 'B490118302/' },
        { text: 'A January 2026 lunch guest found the ¥2,200 lunch outstanding, especially the garlic-shrimp butter.', source: R + 'B521718540/' },
        { text: 'A July 2026 group of lunchtime drinkers returned for duck and boar ham, beef tartare and venison steak.', source: R + 'B520816745/' },
      ],
      japanese_sources_summary: '食べログ: ラ・ブークル、フレンチ・ダイニングバー・ビストロ、京都市中京区御幸町姉小路大文字町340-1 IONビル1F、月・水〜日 11:30〜15:00 (L.O.14:30)、18:00〜23:00 (L.O.22:30)、火曜定休、カード・電子マネー可、サービス料・チャージなし、18席、禁煙、2016年11月1日オープン、姉小路通と御幸町通の角のビストロ、アラカルト中心、コースは予約のみ、旬の野菜と魚、ボリュームのある肉料理、音楽とワイン。口コミ (2018〜2026年、英語): ジビエ (鹿、鴨、猪)、鹿のパテアンクルート、カンパチのコンフィ、鴨と猪のハム、とうもろこしのムース、魚のスープ、牛のタルタル、鹿のステーキ、小海老とにんにくのバター、鴨胸肉、真鯛のポワレ、ランチ2,200円、フルコース3,850円、1人1ドリンク、ジャズ、ピアノとギター、予約がおすすめ、カードは1万円以上のみと聞いたという声も。',
      confidence: 'low', sources: [TB, R + 'B484790921/', R + 'B490118302/', R + 'B501257057/', R + 'B520816745/', R + 'B521718540/', R + 'B524897245/', R + 'B526851671/', R + 'B527208291/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; one drink per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町姉小路大文字町340-1 IONビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009902, 135.766520); cross-checked: GSI 京都府京都市中京区大文字町340番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521718540/', R + 'B484790921/'],
    price_note: 'Prices from May 2024 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch', '¥2,200', 'Lunch', 'ask', 'no', 'January 2026.', 'lunch'),
      it('', '', 'Full course', '¥3,850', 'Courses', 'ask', 'no', 'May 2024; reservation only.', 'course'),
      it('', '', 'Venison pâté en croûte', '', 'Starters', 'no', 'no', '', 'pate'),
      it('', '', 'Venison steak', '', 'Mains', 'ask', 'no', '', 'venison'),
    ] }, {
    cuisine: '旬の料理とボリュームのある肉、とくにジビエ (鹿、鴨、猪) のビストロ (食べログの店舗紹介、2024〜2026年の口コミ)・ランチ2,200円 (2026年1月)、フルコース3,850円 (2024年5月)・鹿のパテアンクルート (2024年8月)、カンパチのコンフィ (2025年2月)・鴨と猪のハム、とうもろこしのムース、濃厚な魚のスープ、岩塩の牛タルタル、鹿のステーキ (2026年7月)・パンに小海老とにんにくのバター (2026年1月)、鴨胸肉、真鯛のポワレ (2026年)・音楽とグラスワイン (食べログの店舗紹介)',
    neighborhood: '姉小路御幸町、京都市役所の近く',
    gf_detail: '要確認。ソース、パテアンクルート、パンとバターのビストロ料理。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ジビエと魚のビストロ。野菜料理がもう少しあればという声も (2026年4月)。',
    notes: '[フレンチビストロ・姉小路御幸町、ジビエとジャズ] 市役所近くのジャズが流れる小さなビストロ。鹿のパテアンクルート、猪のハム、鹿のステーキなどジビエが得意で、魚のスープや小海老とにんにくのバターも。ランチは2,200円から、コースは予約のみ、火曜休み。',
  });
}

// ================================================================ なんでもや 味勝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26032647/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '03:00']);
  put({
    id: 'kyoto_nandemoya_ajikatsu', name: 'なんでもや 味勝 (Nandemoya Ajikatsu)', category: 'OMNI',
    lat: 35.005737, lng: 135.776607, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden, ponzu dishes, dashimaki and fried rice with dashi and soy; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, offal, fish and egg dishes (reviews).',
    hours_raw: '19:00–03:00 Monday–Saturday; closed Sunday and holidays (Tabelog). No e-money or QR (Tabelog). 10 seats: a 6-seat counter and two small raised tables; non-smoking (Tabelog). Ground floor, east of Hanamikoji on Shinbashi-dori, at the north end of Gion, down an atmospheric approach from the street (Tabelog; January 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north end near Shinbashi',
    cuisine: 'Late-night “anything” izakaya with a long menu on the walls (2023 reviews) · oden; mino with ponzu; tororo rice (January 2023) · watermelon-and-eggplant salad; katsuo tataki under a heap of onion salad; hamo; nama-fu; fresh karasumi; jako fried rice (May–June 2023) · mentaiko dashimaki (January 2025); “super spicy” mentaiko (October 2025)',
    website: null, gmaps: gm('なんでもや 味勝 祇園'), menu_url: TB,
    notes: "[Izakaya · north Gion, a late-night couple-run diner] A ten-seat Gion izakaya run by an older couple and open until 3 am, its walls lined with dishes — oden, katsuo tataki under onion salad, mentaiko dashimaki, jako fried rice. A favourite late stop of regulars; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner couple (not named)'], origin: null,
      background: 'Reviewers (2019–2026) describe a late-night izakaya run by an older couple whose warm smiles make it cosy; the owner and the owner’s wife do all the cooking, and regulars and other restaurateurs drop by after work.',
      philosophy: null,
      specialty: 'Oden and izakaya dishes, late.',
      anecdotes: [
        { text: 'A January 2023 visitor spotted the owner of another Gion restaurant there on a break.', source: R + 'B459669635/' },
        { text: 'A June 2023 diner was amused to find the katsuo tataki hidden under a mound of onion salad.', source: R + 'B467782896/' },
        { text: 'A May 2026 guest made it the fifth stop of the night.', source: R + 'B528306242/' },
      ],
      japanese_sources_summary: '食べログ: なんでもや 味勝、居酒屋、京都市東山区林下町422-83 サンピアザビル1F、月〜土 19:00〜翌3:00、日曜・祝日定休、電子マネー・QR決済不可、10席 (カウンター6、小上がり2人×2)、禁煙。口コミ (2019〜2026年、英語): 花見小路新橋東、祇園の北の端、通りからの路地の雰囲気、年配のご夫婦の店、壁の品書き、おでん、みのポン、とろろご飯、すいかとなすのサラダ、玉ねぎの下のかつおのたたき、鱧、生麩、生からすみ、じゃこ炒飯、明太だし巻き、激辛の明太子、深夜の食堂、常連が多い。',
      confidence: 'low', sources: [TB, R + 'B459669635/', R + 'B466144974/', R + 'B467782896/', R + 'B504018954/', R + 'B515984631/', R + 'B528306242/'] },
    cultural_comfort: { level: 'japanese', note: 'Ten-seat late-night counter; menu on the walls.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区林下町422-83 サンピアザビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026. mom_and_pop: “This charming izakaya is run by an elderly couple” (January 2025 review B504018954), which adds that the owner and the owner’s wife prepare everything.' },
    pin_source: `Tabelog ${TB} (35.005717, 135.776636), offset ~3.5m to clear kyoto_gaucho_churrasco (5.7m); cross-checked: GSI 京都府京都市東山区林下町422番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B466144974/'],
    price_note: 'No published prices; reviews report about ¥3,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', '', 'oden'),
      it('', '', 'Mentaiko dashimaki', '', 'Small plates', 'ask', 'no', '', 'dashimaki'),
      it('', '', 'Jako fried rice', '', 'Rice', 'ask', 'no', '', 'chahan'),
    ] }, {
    cuisine: '壁一面の品書きの深夜の「なんでもや」 (2023年の口コミ)・おでん、みのポン、とろろご飯 (2023年1月)・すいかとなすのサラダ、玉ねぎの下のかつおのたたき、鱧、生麩、生からすみ、じゃこ炒飯 (2023年5〜6月)・明太だし巻き (2025年1月)、激辛の明太子 (2025年10月)',
    neighborhood: '祇園の北の端、新橋の近く',
    gf_detail: '要確認。出汁と醤油のおでん、ポン酢の料理、だし巻き、炒飯。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでん、ホルモン、魚、卵の料理 (口コミ)。',
    notes: '[居酒屋・祇園の北、ご夫婦の深夜の食堂] 年配のご夫婦が営む深夜3時までの10席の祇園の居酒屋。壁に並ぶ品書きから、おでん、玉ねぎの下のかつおのたたき、明太だし巻き、じゃこ炒飯。常連の遅い時間の寄り道に、日曜休み。',
  });
}

// ================================================================ 酌と野菜と小皿と。祇園とと◯
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044863/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_gion_toto_maru', name: '酌と野菜と小皿と。祇園とと◯ (Gion Toto◯)', category: 'OMNI',
    lat: 35.004774, lng: 135.777018, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish-led izakaya dishes with soy, plus meats and vegetables; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; vegetables and rare greens are on the menu but alongside fish and meat (Tabelog).',
    hours_raw: '17:00–22:00 (last order 21:00) Tuesday–Saturday (Tabelog); Sunday and Monday are not stated. Cards, e-money and QR payments (Tabelog). 22 seats, including a raised area for up to 12 — call for parties of 9 or more; non-smoking (Tabelog). Ground floor on Gion-machi Kitagawa (Tabelog). Opened 5 February 2026 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo',
    cuisine: 'Casual izakaya built on fish sent direct by fishermen, bled and prepared on board; live sea urchin, wild sea pineapple, rare vegetables and quality meat (Tabelog shop text) · sashimi from a Miyazaki fishing boat — amberjack, horse mackerel, ishidai with its fin, sea grapes (May 2026) · seven-kind sashimi platter with chu-toro, abalone and jellyfish; red snapper shown whole first (August 2026) · Japanese sake (August 2026)',
    website: null, gmaps: gm('祇園とと◯ 酌と野菜と小皿と'), menu_url: TB,
    notes: "[Seafood izakaya · Gion north of Shijo, fisherman-direct fish] A friendly new (February 2026) Gion izakaya whose fish comes straight from fishermen, bled on the boat: generous sashimi platters with chu-toro and abalone, seared ishidai, live sea urchin and sea pineapple, with Japanese sake.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner not named'], origin: null,
      background: 'Opened in February 2026 (Tabelog) after long training, aiming to be a casual place for fisherman-direct fish (Tabelog shop text). Reviewers (2026) describe a calm, gentle room and a friendly head chef and owner; maiko have visited.',
      philosophy: 'Guests who chose this place out of thousands should leave fully satisfied (Tabelog shop text).',
      specialty: 'Fisherman-direct sashimi.',
      anecdotes: [
        { text: 'A May 2026 guest tried ishidai fin for the first time and loved the seared ishidai.', source: R + 'B528548756/' },
        { text: 'An August 2026 visitor was shown the whole red snapper before it went into the sashimi platter.', source: R + 'B533805536/' },
      ],
      japanese_sources_summary: '食べログ: 酌と野菜と小皿と。祇園とと◯、居酒屋・日本料理・海鮮、京都市東山区祇園町北側347-16 祇園東ビル1F、火〜土 17:00〜22:00 (L.O.21:00)、カード・電子マネー・QR決済可、22席 (小上がりは12名まで、9名以上は電話で)、禁煙、2026年2月5日オープン、漁師から直送の船上で血抜き・処理した魚、活け雲丹、天然のほや、珍しい野菜、上質な肉、修業を経て気軽な店に。口コミ (2026年、英語): 宮崎の漁船から直送の刺身 (かんぱち、あじ、石鯛、海ぶどう)、石鯛のひれ、炙りの石鯛、7種の刺身盛り (中トロ、鮑、くらげ)、丸ごとの真鯛を見せてから、日本酒、舞妓さんも来る、気さくな料理長と店主。',
      confidence: 'low', sources: [TB, R + 'B527710117/', R + 'B528548756/', R + 'B533805536/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Call for groups of 9 or more.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-16 祇園東ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 5 February 2026); reviews dated May and August 2026.' },
    pin_source: `Tabelog ${TB} (35.004774, 135.776974), offset ~4m to clear kyoto_gion_kotobukiya (5.4m); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 118m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥6,000–10,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Fisherman-direct sashimi platter', '', 'Sashimi', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Live sea urchin', '', 'Seafood', 'ask', 'no', '', 'uni'),
    ] }, {
    cuisine: '漁師から直送の、船上で血抜き・処理した魚が主役の気軽な居酒屋。活け雲丹、天然のほや、珍しい野菜、上質な肉も (食べログの店舗紹介)・宮崎の漁船から届く刺身、かんぱち、あじ、石鯛とそのひれ、海ぶどう (2026年5月)・中トロ、鮑、くらげの入った7種の刺身盛り、真鯛は丸ごと見せてから (2026年8月)・日本酒 (2026年8月)',
    neighborhood: '祇園、四条の北',
    gf_detail: '要確認。醤油を使う魚中心の居酒屋料理、肉や野菜も。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮の居酒屋。野菜や珍しい青物もあるが魚や肉と一緒 (食べログ)。',
    notes: '[海鮮居酒屋・祇園の四条北、漁師直送の魚] 2026年2月開業の気さくな祇園の居酒屋。船上で血抜きした漁師直送の魚を、中トロや鮑の入った刺身盛り、炙りの石鯛、活け雲丹やほやで、日本酒とともに。',
  });
}

save();
