// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 105.
//   + おにぎり処 成いち (made-to-order onigiri counter on the Sanjo shopping street east of Omiya; opened April 2024)
//   + 肉酒屋 輪っか (meat-focused izakaya on Kamanza south of Marutamachi)
//   + お食事処 上田 (okonomiyaki and Manbo-yaki east of Kyoto Station, run by two women)
//   + 浜焼ボーイと串カツガール (table-grilled seafood and kushikatsu by Shijo-Omiya station)
//   - 匠 正阿弥, Meat136, 京つけもの長瀬: skipped (reasons below).
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042198 (お酒の美術館, skipped), 26041136, 26040350, 26042738 (囲 四条大宮駅前店 — NOT drafted and NOT
//   skipped: operator unresolved, see report), 26041646, 26026688 (skipped), 26040854 (skipped), 26030150 (skipped), 26034356.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or address;
//   none is in another worker's pending script (osw2-b94, osw6-b103, osw8-b105, osw9-b99, osw13-b133 grepped).
//   Romaji rule (integrator 2026-11-26): Tabelog's English names ("Onigiri Dokoro Nari Ichi", "Niku Sakaya Wakka",
//   "Oshokuji Dokoro Ueda", "Hamayaki Boy to Kushikatsu Girl") are machine romaji, not a source; no own site gives romaji,
//   so all four names are kanji/kana only, with whole-string name glosses.
//   Operator checks: 輪っか, 浜焼ボーイと串カツガール — Tabelog corporate members; no operator or sister shop found on Tabelog,
//   Hot Pepper or Gurunavi (one shop each found). 成いち, 上田 — one shop each.
//   Service charges: none listed on Tabelog for the four drafted.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天. Manbo-yaki and Okocchobo stay Latin in JA (known only from English reviews; the
//   kana spelling is not sourced).
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-105');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042198', 'お酒の美術館 烏丸七条店: chain — お酒の美術館 (株式会社NBG), 110 shops by April 2025 (same ruling as 26035481)');
skip('26026688', '匠 正阿弥: no 2025–2026 reviews (newest visit December 2020; Tabelog checked 2026-11-26)');
skip('26040854', 'Meat136: retail food shop (Greg 11-07 ruling) — a takeaway butcher-deli opened at the end of 2023; not historic, no GF or vegan options sourced');
skip('26030150', '京つけもの長瀬: retail food shop (Greg 11-07 ruling) — a pickle shop near Nanzenji; own site gives no founding date or family succession, and no GF or vegan options are sourced');

// ================================================================ おにぎり処 成いち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041136/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_onigiri_dokoro_sanjo_omiya', name: 'おにぎり処 成いち', category: 'OMNI',
    lat: 35.00862, lng: 135.74935, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Onigiri of rice and nori; the kara-age is coated in rice flour but seasoned with a garlic soy sauce, and the tenmusu holds shrimp tempura; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A spicy takana (mustard-leaf) onigiri is on the menu, but nothing is described as vegan; most fillings are fish, meat or egg (2024–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 11:00–17:00; closed Tuesday (Tabelog). Eat-in from 13:00 on weekends and public holidays (May 2026). Cash only: no cards, e-money or QR payments (Tabelog; June 2026). A counter of 4 or 5 seats (April 2024; February 2025); most customers take away (April 2024; September 2026). No restroom (May and July 2026). The egg-yolk and meat soboro onigiri needs ordering ahead (July 2026). Open since 6 April 2024 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo shopping street, east of Omiya — near Nijojo-mae',
    cuisine: 'Onigiri made to order, of Kyoto Nikomaru rice and Setouchi nori (October 2024) · fillings ¥250–390, e.g. spicy takana ¥250, tuna mayo ¥290, grilled salmon ¥310, grilled cod roe ¥310, mackerel with shiso ¥340, salmon with yuzu-pepper mayo ¥340, tenmusu ¥370 (2026 reviews) · rice-flour kara-age set ¥490 on top of two onigiri: kara-age, miso soup, dashi omelette, salad and pickles (April 2024; September 2026) · miso soup ¥220 (February 2026) · egg-yolk and meat soboro (April and May 2024; order ahead, July 2026)',
    website: null, gmaps: gm('おにぎり処 成いち 京都'), menu_url: TB,
    notes: '[Onigiri · Sanjo shopping street near Omiya, made to order] A tiny onigiri counter on the Sanjo shopping street, open since April 2024 and run by a couple (2025–2026 reviews): fluffy onigiri shaped to order around generous fillings, with a rice-flour kara-age set. Mostly takeaway, a few counter seats; no restroom. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'Reviewers describe the shop as run by a couple (February 2025; “a lovely couple”, September 2026). Open since April 2024 (Tabelog). The September 2026 reviewer says the onigiri can be made without salt on request.',
      philosophy: null, specialty: 'Onigiri made to order; rice-flour kara-age.',
      anecdotes: [
        { text: 'A February 2025 diner caught a counter seat just as someone left; a line formed straight after.', source: R + 'B502213375/' },
        { text: 'A diner who came four times between December 2025 and September 2026 noted that quite a few regulars seem to come for takeaway.', source: R + 'B520144096/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり処 成いち、おにぎり、中京区三条通大宮東入ル御供町284-4、二条城前駅から375m、月・水〜日 11:00〜17:00、火曜定休、カード・電子マネー・QR決済不可、2024年4月6日オープン。口コミ (2024〜2026年、英語): 三条の商店街のおにぎり専門店、京都産のNikomaruの米とSetouchiの海苔 (2024年10月)、注文を受けてから握る、ふんわりした米と具だくさん、ピリ辛高菜250円、ツナマヨ290円、焼き鮭310円、焼きたらこ310円、鯖と大葉340円、鮭の柚子胡椒マヨ340円、えびの天ぷらのおにぎり370円、米粉の唐揚げセット490円 (おにぎり2個に唐揚げ・味噌汁・だし巻き・サラダ・漬物)、唐揚げはにんにく醤油の味付け、味噌汁220円、卵黄そぼろは予約が必要 (2026年7月)、塩なしにもできる、カウンター4〜5席、持ち帰りが多い、トイレなし、土日祝日のイートインは13時から、現金のみ、夫婦で営む。',
      confidence: 'low', sources: [TB, R + 'B484532865/', R + 'B485923801/', R + 'B496609649/', R + 'B502213375/', R + 'B520144096/', R + 'B527988037/', R + 'B530686098/', R + 'B532713211/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small takeaway counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条通大宮東入ル御供町284-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated April 2024 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.0086195, 135.7493498); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520144096/', R + 'B530686098/', R + 'B532713211/'],
    price_note: 'Prices from 2025–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Grilled salmon onigiri', '¥310', 'Onigiri', 'ask', 'no', 'December 2025 to September 2026.', 'salmon'),
      it('', '', 'Spicy takana onigiri', '¥250', 'Onigiri', 'ask', 'ask', 'June 2026.', 'takana'),
      it('', '', 'Salmon with yuzu-pepper mayo onigiri', '¥340', 'Onigiri', 'ask', 'no', 'June 2026.', 'salmon_mayo'),
      it('', '', 'Mackerel with shiso onigiri', '¥340', 'Onigiri', 'ask', 'no', 'September 2026.', 'saba'),
      it('', '', 'Tenmusu (shrimp tempura onigiri)', '¥370', 'Onigiri', 'no', 'no', 'December 2025 to September 2026.', 'tenmusu'),
      it('', '', 'Rice-flour kara-age set (added to two onigiri)', '¥490', 'Sets', 'ask', 'no', 'Kara-age, miso soup, dashi omelette, salad, pickles; June and September 2026.', 'karaage_set'),
      it('', '', 'Miso soup', '¥220', 'Sides', 'ask', 'ask', 'February 2026.', 'miso_soup'),
    ] }, {
    cuisine: '注文を受けてから握るおにぎり、京都産のNikomaruの米とSetouchiの海苔 (2024年10月)・具は250〜390円、例えばピリ辛高菜250円、ツナマヨ290円、焼き鮭310円、焼きたらこ310円、鯖と大葉340円、鮭の柚子胡椒マヨ340円、えびの天ぷらのおにぎり370円 (2026年の口コミ)・おにぎり2個に490円で米粉の唐揚げセット: 唐揚げ、味噌汁、だし巻き、サラダ、漬物 (2024年4月、2026年9月)・味噌汁220円 (2026年2月)・卵黄そぼろ (2024年4・5月、予約が必要、2026年7月)',
    neighborhood: '大宮の東、三条の商店街。二条城前駅の近く',
    gf_detail: '要確認。米と海苔のおにぎり。唐揚げは米粉の衣だがにんにく醤油の味付け、えびの天ぷらのおにぎりもある。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ピリ辛高菜のおにぎりがあるが、ヴィーガンと書かれた品はない。具の多くは魚、肉、卵 (2024〜2026年の口コミ)。',
    notes: '[おにぎり・大宮近くの三条の商店街、注文してから握る] 三条の商店街にある、2024年4月開店の小さなおにぎりの店。夫婦で営む (2025〜2026年の口コミ)。注文を受けてから具だくさんのふんわりしたおにぎりを握り、米粉の唐揚げのセットも。持ち帰りが中心でカウンターは数席、トイレなし。現金のみ、火曜定休。',
  });
}

// ================================================================ 肉酒屋 輪っか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040350/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ003671016/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_nikusakaya_kamanza_marutamachi', name: '肉酒屋 輪っか', category: 'OMNI',
    lat: 35.016424, lng: 135.755735, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled wagyu, seared yukhoe, offal teppan-yaki and a beef-tendon curry; no gluten information (Hot Pepper; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat izakaya; every course dish but the edamame features meat (November 2026).',
    hours_raw: 'Monday and Wednesday–Sunday, incl. public holidays, 17:30–24:00 (food last orders 23:00, drinks 23:30); closed Tuesday (Tabelog; Hot Pepper). Cards (VISA, Master, JCB, AMEX), QUICPay, PayPay, d Barai, au PAY (Tabelog). 50 seats: 10 at the counter, 8 at tables, 12 in private rooms, 20 on tatami (Tabelog); private rooms for 10–20, buyouts for 20–50 — book rooms by phone (Tabelog). Non-smoking, with a smoking area outside (Tabelog). No parking (Tabelog). About 6 minutes from exit 5 of Marutamachi subway station (Hot Pepper). Courses with 120 or 180 minutes of all-you-can-drink, ¥4,500–7,500 tax incl. (Hot Pepper, updated 2026-06-11).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kamanza-dori just south of Marutamachi',
    cuisine: 'A meat izakaya (Tabelog; 2025–2026 reviews) · courses with 120 min all-you-can-drink: Ume ¥4,500 (8 dishes incl. mixed offal teppan-yaki, avocado and tomato salad), Take ¥5,500 (8 dishes incl. seared yukhoe, charcoal grill, house curry); Matsu ¥7,500 with 180 min (8 dishes incl. Kuroge wagyu steak), tax incl. (Hot Pepper, updated June 2026) · the ¥5,500 course: everything but the edamame is meat, ending with beef-tendon curry (November 2026) · charcoal-grilled lean Kuroge wagyu steak; seared wagyu with wasabi; harami teppan-yaki; wagyu roast beef; potato salad with a warm egg; a garlic rice heaped with meat to finish (June 2026) · seared wagyu yukhoe; avocado salad with mustard dressing; kanpachi sashimi (March 2026) · off-menu oden and sashimi (February 2025)',
    website: null, gmaps: gm('肉酒屋 輪っか 京都 丸太町'), menu_url: HP + 'course/',
    notes: '[Meat izakaya · Kamanza south of Marutamachi, wagyu and all-you-can-drink] A roomy izakaya near Marutamachi built around meat — charcoal-grilled wagyu steak, seared yukhoe, offal teppan-yaki, beef-tendon curry — plus everyday izakaya plates, with a counter, tatami and private rooms for groups. All-you-can-drink courses from ¥4,500 (Hot Pepper). Late; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a kind owner (October 2021) and a cheerful owner with a lovely smile (March 2026). Tabelog lists the shop as a corporate member; no operator was found.',
      philosophy: null, specialty: 'Wagyu dishes; seared yukhoe.',
      anecdotes: [
        { text: 'A March 2026 regular orders the avocado salad with mustard dressing and the seared wagyu yukhoe every visit.', source: R + 'B524294920/' },
      ],
      japanese_sources_summary: '食べログ: 肉酒屋 輪っか、居酒屋・肉料理、中京区釜座通竹屋町上る桝屋町163 エム\'ズ御所西 1F、丸太町駅から徒歩10分 (349m)、月・水〜日・祝日 17:30〜24:00 (料理L.O. 23:00、ドリンクL.O. 23:30)、火曜定休、カード・QUICPay・PayPay・d払い・au PAY可、50席 (カウンター10、テーブル8、個室12、座敷20)、個室は10〜20名、貸切20〜50名、禁煙 (店外に喫煙所)、駐車場なし。ホットペッパー (2026年6月11日更新): 丸太町にある肉好きが集う大人の隠れ家、梅コース (飲み放題120分付き、ホルモンMIX鉄板焼きなど全8品) 4,500円、竹コース (飲み放題120分付き、炙りユッケ、炭火焼き、特製カレーなど全8品) 5,500円、松コース (飲み放題180分付き、黒毛和牛ステーキなど全8品) 7,500円 (税込)。口コミ (2021〜2026年、英語): 親切な店主、明るく笑顔のすてきな店主、肉料理、黒毛和牛の赤身の炭火焼きステーキ、和牛の炙りとわさび、ハラミの鉄板焼き、和牛のローストビーフ、ポテトサラダ、締めのガーリックライス、炙りユッケ、アボカドのサラダ (マスタードのドレッシング)、カンパチの刺身、メニューにないおでんと刺身、牛すじカレー、飲み放題付きコース5,500円、個室で宴会向き。',
      confidence: 'low', sources: [TB, HP, HP + 'course/', R + 'B479043935/', R + 'B502083769/', R + 'B524294920/', R + 'B529927015/', R + 'B538149707/', R + 'B538823223/'] },
    cultural_comfort: { level: 'japanese', note: 'Neighbourhood izakaya; private rooms booked by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区釜座通竹屋町上る桝屋町163 エム\'ズ御所西 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); Hot Pepper course page updated 2026-06-11; reviews dated February 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0164241, 135.7557347); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [HP + 'course/', R + 'B538823223/'],
    price_note: 'Course prices tax included, from Hot Pepper (updated 2026-06-11).', last_checked: TODAY, items: [
      it('梅コース', '', 'Ume course, 8 dishes, 120 min all-you-can-drink', '¥4,500', 'Courses', 'ask', 'no', 'Hot Pepper; incl. mixed offal teppan-yaki.', 'ume'),
      it('竹コース', '', 'Take course, 8 dishes, 120 min all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', 'Hot Pepper; incl. seared yukhoe and house curry. November 2026 review.', 'take'),
      it('松コース', '', 'Matsu course, 8 dishes, 180 min all-you-can-drink', '¥7,500', 'Courses', 'ask', 'no', 'Hot Pepper; incl. Kuroge wagyu steak.', 'matsu'),
      it('', '', 'Seared wagyu yukhoe', '', 'À la carte', 'ask', 'no', 'March 2026.', 'yukhoe'),
      it('', '', 'Avocado salad with mustard dressing', '', 'À la carte', 'ask', 'ask', 'March 2026.', 'avocado_salad'),
      it('', '', 'Beef-tendon curry', '', 'À la carte', 'ask', 'no', 'November 2026 (in the course).', 'suji_curry'),
    ] }, {
    cuisine: '肉料理の居酒屋 (食べログ、2025〜2026年の口コミ)・120分飲み放題付きのコース: 梅コース4,500円 (全8品、ホルモンMIX鉄板焼き、アボカドとトマトのサラダなど)、竹コース5,500円 (全8品、炙りユッケ、炭火焼き、特製カレーなど)、180分飲み放題付きの松コース7,500円 (全8品、黒毛和牛ステーキなど)、税込 (ホットペッパー、2026年6月更新)・5,500円のコースは枝豆以外すべて肉の料理、締めは牛すじカレー (2026年11月)・黒毛和牛の赤身の炭火焼きステーキ、和牛の炙りとわさび、ハラミの鉄板焼き、和牛のローストビーフ、ポテトサラダ、締めに肉をのせたガーリックライス (2026年6月)・炙りユッケ、マスタードのドレッシングのアボカドのサラダ、カンパチの刺身 (2026年3月)・メニューにないおでんと刺身 (2025年2月)',
    neighborhood: '釜座通、丸太町のすぐ南',
    gf_detail: '要確認。和牛の炭火焼き、炙りユッケ、ホルモンの鉄板焼き、牛すじカレー。グルテンの情報はない (ホットペッパー、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉料理の居酒屋で、コースは枝豆以外すべて肉の料理 (2026年11月)。',
    notes: '[肉の居酒屋・丸太町の南の釜座通、和牛と飲み放題] 丸太町近くの広い居酒屋。黒毛和牛の炭火焼きステーキ、炙りユッケ、ホルモンの鉄板焼き、牛すじカレーなど肉料理が中心で、居酒屋の定番も。カウンター、座敷、宴会向きの個室。飲み放題付きコースは4,500円から (ホットペッパー)。深夜まで、火曜定休。',
  });
}

// ================================================================ お食事処 上田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041646/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00']; const D = ['17:30', '20:30'];
  put({
    id: 'kyoto_okonomiyaki_shimonocho_shichijo', name: 'お食事処 上田', category: 'OMNI',
    lat: 34.986675, lng: 135.765874, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, Manbo-yaki with soba or udon noodles, yakisoba and Okocchobo with tempura scraps — wheat batter and noodles (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, hoso (offal), aburakasu, egg, chikuwa and bonito flakes (2024–2026 reviews).',
    hours_raw: 'Tuesday and Thursday 11:00–14:00; Friday and Saturday 11:00–14:00 and 17:30–20:30; closed Monday, Wednesday and Sunday (Tabelog, which says hours may change). Cash only: no cards, e-money or QR payments (Tabelog; September 2024). Parking in front of the shop (Tabelog). About 20 seats at three teppan tables (December 2025; September 2026), in a former bar with high ceilings and Showa-era posters (September and October 2024). Sauce, mayonnaise, bonito flakes and aonori are self-serve; sweet or spicy sauce (October 2024). About 10 minutes on foot east of Kyoto Station (October 2024; December 2025). Open since 10 February 2020 (Tabelog).',
    hours: { 1: day(L), 3: day(L), 4: day(L, D), 5: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'East of Kyoto Station — near Shichijo (Keihan)',
    cuisine: 'Okonomiyaki and Manbo-yaki on the teppan (2024–2026 reviews) · Manbo-yaki — soba or udon with egg, pickled ginger and green onion: with pork ¥1,050 (October 2024), with extra hoso ¥1,150 (January 2025), large (more noodles) ¥1,250 (September 2024; March 2026) · okonomiyaki with pork ¥850 (March 2026) · hoso yakisoba ¥900, aburakasu topping ¥200 (September 2024) · Okocchobo, billed as a Kyoto-style okonomiyaki (December 2025): green onion, tempura scraps, pickled daikon, chikuwa, konnyaku and beans with soy sauce, shichimi and bonito flakes, ¥800, egg +¥100 (February and December 2025) · mayonnaise +¥50 (March 2026) · a daily set, e.g. pork belly (October 2024)',
    website: null, gmaps: gm('お食事処 上田 京都 下之町'), menu_url: TB,
    notes: '[Okonomiyaki · east of Kyoto Station, Manbo-yaki] A homely okonomiyaki lunch spot a 10-minute walk east of Kyoto Station, in a former bar with high ceilings and Showa posters, run by two women: huge Manbo-yaki crisping on the teppan, hoso yakisoba, and Okocchobo, a Kyoto-style okonomiyaki. Lunch Tuesday, Thursday, Friday, Saturday; dinner Friday and Saturday. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers say the shop is run by two older women (September 2024; January 2025), “two ladies” (December 2025), two women (September 2026). The owner remembered a returning diner (January 2025) and cut the okonomiyaki and recommended Kyoto souvenirs for another (March 2026). Open since February 2020 (Tabelog).',
      philosophy: null, specialty: 'Manbo-yaki.',
      anecdotes: [
        { text: 'In October 2024 the proprietress asked a first-time diner how the Manbo-yaki had been heard of — tourists often ask what it is.', source: R + 'B494274202/' },
        { text: 'A February 2025 group tried Okocchobo from the photo at the door, and read up on Ochobo, a Taisho-era children’s snack.', source: R + 'B500830657/' },
      ],
      japanese_sources_summary: '食べログ: お食事処 上田、お好み焼き、下京区下之町1-1-41、京阪七条から346m、京都駅から徒歩10分、火・木 11:00〜14:00、金・土 11:00〜14:00・17:30〜20:30、月・水・日曜定休、カード・電子マネー・QR決済不可、店の前に駐車可、2020年2月10日オープン。口コミ (2024〜2026年、英語): 年配の女性2人で営む、元はバーの天井の高い広い店内、昭和のレトロなポスター、鉄板のテーブル3卓・約20席、豚入りのManbo-yaki 1,050円、ホソ増し1,150円、大 (麺の量) 1,250円 (そばかうどん、卵・紅しょうが・ねぎ入り)、豚玉850円、ホソ焼きそば900円・油かすのトッピング200円、Okocchobo 800円・卵100円 (ねぎ、揚げ玉、たくあん、ちくわ、こんにゃく、豆、醤油・七味・かつお節)、マヨネーズ50円、日替わりの豚バラの定食、甘口と辛口のソース・マヨネーズ・かつお節・青のりはセルフ、現金のみ、観光客によくManbo-yakiとは何かと聞かれる。',
      confidence: 'low', sources: [TB, R + 'B492225391/', R + 'B492650261/', R + 'B494274202/', R + 'B500830657/', R + 'B519111873/', R + 'B523598861/', R + 'B535355818/'] },
    cultural_comfort: { level: 'japanese', note: 'Homely local okonomiyaki shop; cash only; tourists often ask what Manbo-yaki is (October 2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区下之町1-1-41',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated September 2024 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.9866749, 135.7658741); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B492225391/', R + 'B494274202/', R + 'B519111873/', R + 'B523598861/'],
    price_note: 'Prices from 2024–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Manbo-yaki, large (more noodles)', '¥1,250', 'Teppan', 'no', 'no', 'September 2024; March 2026.', 'manbo_large'),
      it('', '', 'Manbo-yaki with pork', '¥1,050', 'Teppan', 'no', 'no', 'October 2024.', 'manbo_pork'),
      it('', '', 'Okonomiyaki with pork', '¥850', 'Teppan', 'no', 'no', 'March 2026.', 'okonomiyaki'),
      it('', '', 'Hoso yakisoba', '¥900', 'Teppan', 'no', 'no', 'September 2024; aburakasu topping ¥200.', 'hoso_yakisoba'),
      it('', '', 'Okocchobo', '¥800', 'Teppan', 'no', 'no', 'December 2025; egg +¥100.', 'okocchobo'),
    ] }, {
    cuisine: '鉄板で焼くお好み焼きとManbo-yaki (2024〜2026年の口コミ)・Manbo-yaki (そばかうどん、卵・紅しょうが・ねぎ入り): 豚入り1,050円 (2024年10月)、ホソ増し1,150円 (2025年1月)、大 (麺の量が多い) 1,250円 (2024年9月、2026年3月)・豚のお好み焼き850円 (2026年3月)・ホソ焼きそば900円、油かすのトッピング200円 (2024年9月)・京都風のお好み焼きのOkocchobo (2025年12月): ねぎ、揚げ玉、たくあん、ちくわ、こんにゃく、豆に醤油・七味・かつお節、800円、卵+100円 (2025年2・12月)・マヨネーズ+50円 (2026年3月)・豚バラなどの日替わりの定食 (2024年10月)',
    neighborhood: '京都駅の東、京阪七条の近く',
    gf_detail: 'グルテンフリーではない。お好み焼き、そばやうどんのManbo-yaki、焼きそば、揚げ玉入りのOkocchobo。小麦の生地と麺 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚肉、ホソ、油かす、卵、ちくわ、かつお節 (2024〜2026年の口コミ)。',
    notes: '[お好み焼き・京都駅の東、Manbo-yaki] 京都駅から東へ徒歩10分の、家庭的なお好み焼きの店。元はバーの天井の高い店内に昭和のポスター、女性2人で営む。鉄板の上でカリッとなる大盛りのManbo-yaki、ホソ焼きそば、京都風のお好み焼きOkocchobo。昼は火・木・金・土、夜は金・土のみ。現金のみ。',
  });
}

// ================================================================ 浜焼ボーイと串カツガール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26034356/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/hz723e2b0000/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'kyoto_hamayaki_kushikatsu_shijo_omiya', name: '浜焼ボーイと串カツガール', category: 'OMNI',
    lat: 35.003776, lng: 135.74799, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a kushikatsu shop (battered, deep-fried skewers); the grilled turban shell is seasoned with soy sauce (July 2026); no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable kushikatsu (okra, pumpkin, sweet potato) are on the menu, but nothing is described as vegan; the rest is seafood, meat and offal (2026 reviews).',
    hours_raw: 'Daily 17:00–02:00 (last orders 01:30), open year-round (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); PayPay, d Barai, Rakuten Pay; no e-money (Tabelog). 42 seats: 10 at the counter, 32 at tables; buyouts for 20–50 (Tabelog). Seats booked online may be allocated to “a different location” than the one chosen; ask by phone for counter or table (Tabelog). Seating limited to 2 hours when busy (Tabelog). Non-smoking, with a smoking area outside (Tabelog). By exit 5 of Hankyu Omiya, a few seconds’ walk (Tabelog; Gurunavi). Open since 17 July 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — by Hankyu Omiya station',
    cuisine: 'Hamayaki — shellfish and seafood grilled at the table by the staff — and kushikatsu (Tabelog) · Hamayaki set of white clams, scallops, red shrimp and squid ¥3,980 (April 2026), ¥4,378 (June 2026); turban shell ¥680 (April 2026) · assorted sashimi ¥1,480 (April 2026), ¥1,628 (June 2026), e.g. Ehime bluefin tuna, salmon, grilled hamo, amberjack (July 2026) · ten assorted kushikatsu ¥1,680 (April 2026), ¥1,848 (June 2026), e.g. chicken with cheese, horse mackerel with shiso, shrimp, okra, pumpkin (July 2026) · salted offal stew with daikon (May and July 2026) · fried octopus ¥748 (June 2026) · banquet course with 90 min all-you-can-drink ¥6,800 tax incl. (Tabelog; May 2026); Hamayaki course with sashimi, food only ¥3,800 tax incl. (Tabelog)',
    website: null, gmaps: gm('浜焼ボーイと串カツガール 四条大宮'), menu_url: TB,
    notes: '[Seafood and kushikatsu · Shijo-Omiya, grilled at the table] A lively tavern steps from Hankyu Omiya where the staff grill clams, scallops, shrimp and squid at your table, with sashimi platters and crisp kushikatsu alongside. Counter seats for solo diners, tables for groups; open nightly until 02:00. Courses with all-you-can-drink from Tabelog.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog lists the shop as a corporate member and says online bookings may be seated at a different location than chosen; no operator or sister shop was found on Tabelog or Gurunavi. Open since July 2020 (Tabelog).',
      philosophy: null, specialty: 'Table-grilled seafood; kushikatsu.',
      anecdotes: [
        { text: 'A May 2026 diner on a booked course had to remind the staff of the course, the closing rice dish and a points discount, yet left calling it a very good seafood grill.', source: R + 'B528298745/' },
      ],
      japanese_sources_summary: '食べログ: 浜焼ボーイと串カツガール、居酒屋・海鮮・串揚げ、中京区錦大宮町154-5、阪急大宮駅から徒歩10秒、毎日 17:00〜翌2:00 (L.O. 1:30)、年中無休、カード・PayPay・d払い・楽天ペイ可、42席 (カウンター10、テーブル32)、貸切20〜50名、ネット予約の席は別の場所に案内される場合あり、混雑時は2時間制、禁煙 (店外に喫煙所)、2020年7月17日オープン、飲み放題90分付きの宴会コース6,800円 (税込)、刺身の盛り合わせ付きの浜焼コース (料理のみ) 3,800円 (税込)。ぐるなび: 錦大宮町154-5 1F、阪急大宮駅5番出口から徒歩1分。口コミ (2026年、英語): 店員がテーブルで焼く浜焼セット (白はまぐり、ホタテ、赤えび、イカ) 3,980円・4,378円、サザエ680円、刺身の盛り合わせ1,480円・1,628円 (Ehimeの本鮪、サーモン、焼いた鱧、ヒラマサ)、串カツ10本の盛り合わせ1,680円・1,848円 (鶏とチーズ、アジと大葉、えび、オクラ、かぼちゃ)、名物の塩もつ煮、たこの唐揚げ748円、二度づけ禁止。',
      confidence: 'low', sources: [TB, GN, R + 'B527301411/', R + 'B528298745/', R + 'B530764210/', R + 'B531250238/', R + 'B531689243/', R + 'B531847214/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively tavern; staff do the grilling at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦大宮町154-5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); Gurunavi listing; reviews dated April to July 2026.' },
    pin_source: `Tabelog ${TB} (35.0037756, 135.7479900); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B530764210/', R + 'B531250238/'],
    price_note: 'Course prices tax included (Tabelog); à la carte prices from April and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamayaki set: white clams, scallops, red shrimp, squid', '¥4,378', 'Hamayaki', 'ask', 'no', 'June 2026 (¥3,980 in April 2026).', 'hamayaki_set'),
      it('', '', 'Turban shell', '¥680', 'Hamayaki', 'ask', 'no', 'April 2026.', 'sazae'),
      it('', '', 'Assorted sashimi', '¥1,628', 'Seafood', 'ask', 'no', 'June 2026 (¥1,480 in April 2026).', 'sashimi'),
      it('', '', 'Ten assorted kushikatsu', '¥1,848', 'Kushikatsu', 'no', 'no', 'June 2026 (¥1,680 in April 2026).', 'kushikatsu'),
      it('', '', 'Fried octopus', '¥748', 'Small plates', 'no', 'no', 'June 2026.', 'tako_karaage'),
      it('', '', 'Banquet course, 90 min all-you-can-drink', '¥6,800', 'Courses', 'no', 'no', 'Tabelog; May 2026 review.', 'course'),
    ] }, {
    cuisine: '店員がテーブルで焼く貝や魚介の浜焼と串カツ (食べログ)・白はまぐり、ホタテ、赤えび、イカの浜焼セット3,980円 (2026年4月)、4,378円 (2026年6月)、サザエ680円 (2026年4月)・刺身の盛り合わせ1,480円 (2026年4月)、1,628円 (2026年6月)、例えばEhimeの本鮪、サーモン、焼いた鱧、ヒラマサ (2026年7月)・串カツ10本の盛り合わせ1,680円 (2026年4月)、1,848円 (2026年6月)、例えば鶏とチーズ、アジと大葉、えび、オクラ、かぼちゃ (2026年7月)・大根入りの塩もつ煮 (2026年5・7月)・たこの唐揚げ748円 (2026年6月)・飲み放題90分付きの宴会コース6,800円 (税込、食べログ、2026年5月)、刺身の盛り合わせ付きの浜焼コース (料理のみ) 3,800円 (税込、食べログ)',
    neighborhood: '四条大宮。阪急大宮駅のすぐそば',
    gf_detail: 'グルテンフリーではない。串カツの店 (衣を付けて揚げる串)。焼いたサザエは醤油の味付け (2026年7月)。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。野菜の串カツ (オクラ、かぼちゃ、いも) があるが、ヴィーガンと書かれた品はない。ほかは魚介、肉、もつ (2026年の口コミ)。',
    notes: '[海鮮と串カツ・四条大宮、テーブルで浜焼] 阪急大宮駅のすぐそばのにぎやかな酒場。はまぐり、ホタテ、えび、イカを店員がテーブルで焼き、刺身の盛り合わせやサクッとした串カツも。カウンターは一人でも、テーブルはグループで。毎晩翌2時まで。飲み放題付きコースあり (食べログ)。',
  });
}

save();
