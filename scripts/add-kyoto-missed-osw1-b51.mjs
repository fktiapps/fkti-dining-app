// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 51.
//   + ビカシューマハル 今出川店 Bikashu Mahal, Imadegawa (Indian and Nepalese, all day; cheese-naan lunches)
//   + 円町リバーブ Enmachi Reverb (one-person tandoor curry shop by Enmachi Station)
//   + タケリア・パチャンガ Taqueria Pachanga (taco stand-café by Mototanaka Station)
//   + NOVECCHIO 円町 (Italian with a stone-oven pizza by Enmachi Station)
//   Core list still had shops in this lane, so the batch comes from core (the rest list is for when core and notable
//   are exhausted). Picked on 2026-11-06 from `queue.mjs kyoto-missed next core 300`, lane ids in queue order 26027294,
//   26026544 (花うさぎ — left in the queue: address is only 銀閣寺参道, three short reviews), 26019536, 26002472, 26023142.
//   None of the four drafted is in data/kyoto.json by name (ビカシュ/Bikash, リバーブ/Reverb, パチャンガ/Pachanga,
//   NOVECCHIO) or address (元北小路町176, 西ノ京南円町135, 田中大久保町22, 西ノ京南円町101).
//   Same-name count (same brand or operator only): ビカシューマハル — one in our crawl; Tabelog's name search lists two
//   (Imadegawa, Senbon-Kitaoji) — a small group, flagged. NOVECCHIO — one in our crawl; Tabelog's name search lists two
//   (Enmachi, Saiin) — a small group, flagged. リバーブ, パチャンガ — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: NOVECCHIO サービス料なし・チャージ料なし; none listed for
//   the other three.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ビカシューマハル 今出川店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027294/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_bikashu_mahal_imadegawa', name: 'ビカシューマハル 今出川店 (Bikashu Mahal, Imadegawa)', category: 'OMNI',
    lat: 35.029968, lng: 135.747229, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry sets come with naan or basmati rice (rice can replace naan, June 2026); biryani and thukpa are also served; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a bean-and-spinach curry appears (October 2025), but the sets come with chicken soup and dairy is not described (2025–2026 reviews).',
    hours_raw: '11:00–22:00; lunch 11:00–15:00; open year-round (Tabelog). Reservations accepted; private hire for up to 20 (Tabelog). Cards and PayPay (Tabelog). 40 seats (Tabelog). Six spice levels (November 2025). Free Wi-Fi (February 2026). About 3 min on foot from the Imadegawa-Omiya bus stop (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishijin, Imadegawa-Omiya — 3 min from the bus stop',
    cuisine: 'Indian and Nepalese cooking by a Nepalese chef (Tabelog) · daily curry lunch with naan or rice, salad, soup and a drink ¥790 (January and October 2025) · cheese-naan lunch with two curries, salad, soup and a drink ¥1,190–1,290 (November 2025, February 2026); naan refill free (February 2026) · mutton biryani set ¥1,400 (October 2025); chicken biryani, keema with egg and basmati rice (2026) · chicken thukpa, Nepalese noodle soup (March 2026); palak prawn, Indian-style karaage (September 2025) · spinach curry with beans, chicken or mutton (February 2026) · pair set ¥3,850, draft beer ¥390 (February 2026) · mango lassi, chai (2025–2026)',
    website: null, gmaps: gm('ビカシューマハル 今出川店'), menu_url: null,
    notes: '[Indian and Nepalese · Nishijin, cheese-naan lunch] A big, cheerful Indian-Nepalese restaurant on Imadegawa near Omiya, open every day 11:00–22:00: ¥790 daily curry lunches with a huge naan, a much-loved cheese-naan set, biryani and Nepalese thukpa. Staff greet everyone with a warm “Namaste!”.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed, Nepalese)'], origin: 'Nepal (Tabelog)',
      background: 'Tabelog’s shop text promotes authentic Indian and Nepalese food by a Nepalese chef. Reviewers note a cheerful greeting of “Namaste!” at the door (December 2025) and smiling staff who thank guests all the way out (February 2026). Tabelog’s name search lists a second shop, at Senbon-Kitaoji.',
      philosophy: null, specialty: 'Cheese naan; biryani.',
      anecdotes: [
        { text: 'A February 2026 pair found the ¥3,850 pair set too much for two, and the staff offered to pack the leftovers.', source: R + 'B523058215/' },
        { text: 'A February 2026 group gave up on a long queue at a nearby ramen shop and called the spinach curry the best curry of a lifetime.', source: R + 'B523277333/' },
      ],
      japanese_sources_summary: '食べログ: ビカシューマハル 今出川店、インド料理・カフェ・居酒屋、上京区今出川通大宮西入元北小路町176 今出川ビューハイツ1F、今出川大宮バス停から徒歩3分、11:00〜22:00 (ランチ11:00〜15:00)、年中無休、予約可、カード・PayPay可、40席、ネパール人シェフのインド・ネパール料理、ベジタリアン対応のタグ。口コミ (2025〜2026年、英語): 日替わりカレーのランチ790円 (ナンかライス、サラダ、スープ、ドリンク)、チーズナンのランチ1,190〜1,290円、ナンのおかわり、マトンビリヤニのセット1,400円、トゥクパ、ほうれん草のカレー、ペアセット3,850円、生ビール390円、マンゴーラッシー、チャイ、辛さは6段階、元気な「ナマステ!」のあいさつ。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/rstLst/?sw=%E3%83%93%E3%82%AB%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%9E%E3%83%8F%E3%83%AB', R + 'B484114830/', R + 'B498511223/', R + 'B507042109/', R + 'B516219528/', R + 'B517935393/', R + 'B518394997/', R + 'B518538692/', R + 'B522086648/', R + 'B523058215/', R + 'B523277333/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly Indian-Nepalese staff; open every day.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通大宮西入元北小路町176 今出川ビューハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.029968, 135.747229); cross-checked: GSI 京都府京都市上京区元北小路町176番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498511223/', R + 'B517935393/', R + 'B516219528/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily curry lunch (naan or rice, salad, soup, drink)', '¥790', 'Lunch', 'ask', 'ask', 'January and October 2025.', 'daily_lunch'),
      it('', '', 'Cheese-naan lunch with two curries', '¥1,190–1,290', 'Lunch', 'no', 'no', 'November 2025, February 2026.', 'cheese_naan'),
      it('', '', 'Mutton biryani set', '¥1,400', 'Sets', 'ask', 'no', 'October 2025.', 'biryani'),
    ] }, {
    cuisine: 'ネパール人シェフのインド・ネパール料理 (食べログ)・日替わりカレーのランチ、ナンかライス、サラダ、スープ、ドリンク付き790円 (2025年1月・10月)・カレー2種のチーズナンのランチ、サラダ、スープ、ドリンク付き1,190〜1,290円 (2025年11月、2026年2月)。ナンのおかわり無料 (2026年2月)・マトンビリヤニのセット1,400円 (2025年10月)。チキンビリヤニ、卵入りキーマとバスマティライス (2026年)・ネパールの麺のチキントゥクパ (2026年3月)。パラクプラウン、インド風の唐揚げ (2025年9月)・豆、鶏、マトンから選ぶほうれん草のカレー (2026年2月)・ペアセット3,850円、生ビール390円 (2026年2月)・マンゴーラッシー、チャイ (2025〜2026年)',
    neighborhood: '西陣、今出川大宮。バス停から徒歩3分',
    gf_detail: '要確認。カレーのセットはナンかバスマティライス (ナンをライスに替えられる、2026年6月)。ビリヤニやトゥクパも。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応のタグがあり、豆とほうれん草のカレーもある (2025年10月) が、セットには鶏のスープが付き、乳製品については書かれていない (2025〜2026年の口コミ)。',
    notes: '[インド・ネパール料理・西陣、チーズナンのランチ] 今出川大宮近くの、毎日11時から22時まで開く大きくにぎやかなインド・ネパール料理店。大きなナンの790円の日替わりカレーランチ、人気のチーズナンのセット、ビリヤニ、ネパールのトゥクパ。店員はみんな元気な「ナマステ!」で迎えてくれる。',
  });
}

// ================================================================ 円町リバーブ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26019536/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:45'], ['18:00', '20:00']);
  put({
    id: 'kyoto_enmachi_reverb', name: '円町リバーブ (Enmachi Reverb)', category: 'OMNI',
    lat: 35.017408, lng: 135.732069, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry with rice and tandoor-grilled meat or seafood; a July 2026 reviewer describes a smooth curry made without flour, from onions, coconut milk and tomato — but the shop itself gives no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable curry is on the menu (July and September 2026), but its base and any dairy are not described.',
    hours_raw: 'Tuesday–Sunday 11:30–14:45 (L.O. 14:45) and 18:00–20:00 (L.O. 20:00); closed Monday; hours may change (Tabelog). No reservations (Tabelog). Cash only (Tabelog). Order and pay first; self-service water (2026 reviews). Run by one person, so service can be slow at busy times — a note at the ordering point says so (September 2025, February and May 2026). 12 seats: 6 at the counter and three tables for two (Tabelog). On the south side of JR Enmachi Station, about 150 m away (Tabelog; July 2026). Opened 14 February 2012 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Enmachi — south side of JR Enmachi Station',
    cuisine: 'Curry with meat and fish grilled over charcoal in a tandoor (February 2026) · tandoori seafood curry ¥950 — shrimp, squid and white fish (July 2026); tandoori chicken curry with a whole thigh ¥1,300 (July 2026); lamb keema curry ¥950 (October 2026) · Mix A, B and C combinations, e.g. lamb keema, vegetables, beef tendon and soft-boiled egg (2026) · chicken, vegetable and beef-tendon curries; chicken biryani, often sold out; half biryani as a side (2025–2026) · soft-boiled egg topping; lassi (2026) · medium spice is mild to moderate (2026)',
    website: null, gmaps: gm('円町リバーブ'), menu_url: null,
    notes: '[Curry · Enmachi Station, tandoor-grilled toppings] A small curry counter by JR Enmachi Station where one person grills chicken and seafood over charcoal in a tandoor to top smooth, coconut-and-tomato curries — tandoori seafood or lamb keema for ¥950. Order and pay first; cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe a shop run by one person (September 2025; February and May 2026). A sign at the entrance explains the name — “reverb”, the aftertaste — and the charcoal tandoor (February 2026).',
      philosophy: 'A lingering aftertaste — “reverb” — and charcoal-grilled tandoor meat and fish (sign at the entrance, February 2026).', specialty: 'Tandoori seafood curry; tandoori chicken curry.',
      anecdotes: [
        { text: 'A September 2025 regular plans visits for days with time to wait, since one person does everything.', source: R + 'B521687283/' },
        { text: 'A September 2026 visitor, back after about eight years, arrived before the 11:30 opening and waited ten minutes.', source: R + 'B535867942/' },
      ],
      japanese_sources_summary: '食べログ: 円町リバーブ、カレー・インドカレー、中京区西ノ京南円町135 コーポ円座104、JR円町駅から152m、火〜日 11:30〜14:45、18:00〜20:00、月曜定休、予約不可、現金のみ、12席 (カウンター6、2人席3)、2012年2月14日オープン。口コミ (2025〜2026年、英語): 炭火のタンドールで焼く肉と魚、タンドリーシーフードカレー950円、タンドリーチキンカレー (もも1枚) 1,300円、ラムキーマカレー950円、ミックスA・B・C、野菜、牛すじ、チキンビリヤニ、半熟卵、ラッシー、先払い、セルフサービスの水、ひとりで営む店、小麦粉を使わないなめらかなカレー (2026年7月の口コミ)。',
      confidence: 'medium', sources: [TB, R + 'B520290142/', R + 'B521687283/', R + 'B523233637/', R + 'B528692270/', R + 'B531049392/', R + 'B531126821/', R + 'B535156627/', R + 'B535867942/', R + 'B536809441/', R + 'B538512423/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay first; cash only; one person cooking.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西ノ京南円町135 コーポ円座104',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017408, 135.732069); cross-checked: GSI 京都府京都市中京区西ノ京南円町135番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536809441/', R + 'B531126821/', R + 'B538512423/'],
    price_note: 'Prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Tandoori seafood curry', '¥950', 'Curry', 'ask', 'no', 'July 2026.', 'seafood_curry'),
      it('', '', 'Tandoori chicken curry (whole thigh)', '¥1,300', 'Curry', 'ask', 'no', 'July 2026.', 'chicken_curry'),
      it('', '', 'Lamb keema curry', '¥950', 'Curry', 'ask', 'no', 'October 2026.', 'lamb_keema'),
    ] }, {
    cuisine: '炭火のタンドールで焼いた肉や魚をのせるカレー (2026年2月)・タンドリーシーフードカレー950円、エビ、イカ、白身魚 (2026年7月)。もも1枚のタンドリーチキンカレー1,300円 (2026年7月)。ラムキーマカレー950円 (2026年10月)・ラムキーマ、野菜、牛すじ、半熟卵などを合わせたミックスA・B・C (2026年)・チキン、野菜、牛すじのカレー。売り切れの多いチキンビリヤニ、サイドのハーフビリヤニ (2025〜2026年)・半熟卵のトッピング、ラッシー (2026年)・中辛はおだやかからほどほどの辛さ (2026年)',
    neighborhood: '円町。JR円町駅の南側',
    gf_detail: '要確認。ご飯にカレーと、タンドールで焼いた肉や魚。2026年7月の口コミは小麦粉を使わず玉ねぎ、ココナッツミルク、トマトで作るなめらかなカレーと書くが、店からのグルテンの情報はない。',
    vegan_detail: '要確認。野菜のカレーもある (2026年7月・9月) が、ベースや乳製品については書かれていない。',
    notes: '[カレー・円町駅、タンドールで焼くトッピング] JR円町駅そばの小さなカレーのカウンター。ひとりで炭火のタンドールで鶏や魚介を焼き、ココナッツとトマトのなめらかなカレーにのせる。タンドリーシーフードやラムキーマが950円。先に注文して支払い、現金のみ、月曜定休。',
  });
}

// ================================================================ タケリア・パチャンガ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002472/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_taqueria_pachanga', name: 'タケリア・パチャンガ (Taqueria Pachanga)', category: 'OMNI',
    lat: 35.035432, lng: 135.781261, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos on corn tortillas (July 2020), taco rice and guacamole; the fillings and sauces are not described for gluten (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Guacamole and a choice of taco fillings, but most described fillings are meat — Brazilian sausage, spicy chicken, chicken frijoles — and the taco rice has cheese (reviews).',
    hours_raw: '12:00–22:00 (lunch 12:00–14:00); closed Tuesday, open on holidays; hours may change (Tabelog). Occasional live performances, when the shop is closed to other guests (Tabelog). Reservations accepted; private hire for up to 20 (Tabelog). Cash only (Tabelog). 14 seats (Tabelog). Takeaway of tacos, guacamole and taco rice only (Tabelog). Children welcome (Tabelog). On the corner by Eizan Mototanaka Station, about 50 m away (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Mototanaka — by the Eizan station',
    cuisine: 'A small taqueria of long standing by Mototanaka Station (December 2023) · tacos from ¥350 with a choice of fillings — chicken frijoles with chopped cabbage and spicy sauce ¥350 (August 2026); Brazilian sausage (2023); spicy chicken · taco rice with lettuce and cottage cheese; guacamole (2023) · Corona with lime, mojitos (2023, October 2025) · books and records in a laid-back room (2023, October 2025)',
    website: null, gmaps: gm('タケリア・パチャンガ 元田中'), menu_url: null,
    notes: '[Tacos · Mototanaka Station, a laid-back corner taqueria] A tiny, easygoing taco shop on the corner by Eizan Mototanaka Station, with records and paperbacks: ¥350 tacos with a choice of fillings, taco rice, guacamole, Corona and mojitos, open all afternoon into the evening. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a long-running taco shop by Mototanaka Station (December 2023), with books and a record player that suit a slow afternoon (October 2025).',
      philosophy: null, specialty: 'Tacos; taco rice.',
      anecdotes: [
        { text: 'An August 2026 cyclist ended a Kyoto bike tour here, after finding it closed on an earlier try.', source: R + 'B533589106/' },
        { text: 'An October 2025 regular recommends bringing a paperback rather than a phone — taco rice and a mojito on a hot afternoon.', source: R + 'B516302006/' },
      ],
      japanese_sources_summary: '食べログ: タケリア・パチャンガ、タコス・メキシコ料理、左京区田中大久保町22、叡電元田中駅から47m、12:00〜22:00 (ランチ12:00〜14:00)、火曜定休 (祝日は営業)、ときどきライブがありその間は入店不可、予約可、現金のみ、14席、持ち帰りはタコス・ワカモレ・タコライスのみ。口コミ (2023〜2026年、英語): 元田中で長く続くタコスの店、タコス350円から、チキンフリホーレス350円、ブラジルのソーセージ、タコライス、ワカモレ、コロナビール、モヒート、本とレコードのあるゆったりした店内。',
      confidence: 'low', sources: [TB, R + 'B461904464/', R + 'B461978408/', R + 'B464542228/', R + 'B486567147/', R + 'B511735585/', R + 'B516302006/', R + 'B516753770/', R + 'B533589106/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual taco shop; cash only; closed during occasional live shows.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中大久保町22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.035432, 135.781261); cross-checked: GSI 京都府京都市左京区田中大久保町22番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533589106/'],
    price_note: 'Taco price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Taco (chicken frijoles)', '¥350', 'Tacos', 'ask', 'no', 'August 2026.', 'taco'),
      it('', '', 'Taco rice', '', 'Rice', 'ask', 'no', '2023; takeaway available.', 'taco_rice'),
      it('', '', 'Guacamole', '', 'Sides', 'ask', 'ask', '2023; takeaway available.', 'guacamole'),
    ] }, {
    cuisine: '元田中駅のそばで長く続く小さなタケリア (2023年12月)・具を選べるタコスは350円から。刻みキャベツと辛いソースのチキンフリホーレス350円 (2026年8月)。ブラジルのソーセージ (2023年)。スパイシーチキン・レタスとカッテージチーズのタコライス、ワカモレ (2023年)・ライムを添えたコロナ、モヒート (2023年、2025年10月)・本やレコードのあるゆったりした店内 (2023年、2025年10月)',
    neighborhood: '元田中。叡電の駅のそば',
    gf_detail: '要確認。コーントルティーヤのタコス (2020年7月)、タコライス、ワカモレ。具やソースのグルテンについては書かれていない (口コミ)。',
    vegan_detail: '要確認。ワカモレや具を選べるタコスはあるが、書かれている具はブラジルのソーセージ、スパイシーチキン、チキンフリホーレスなど肉が多く、タコライスにはチーズ (口コミ)。',
    notes: '[タコス・元田中駅、ゆったりした角のタケリア] 叡電元田中駅そばの角にある、レコードと文庫本の並ぶ小さな気取らないタコスの店。具を選べる350円のタコス、タコライス、ワカモレ、コロナやモヒートを昼から夜まで。現金のみ、火曜定休。',
  });
}

// ================================================================ NOVECCHIO 円町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023142/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:30']);
  put({
    id: 'kyoto_novecchio_enmachi', name: 'NOVECCHIO 円町', category: 'OMNI',
    lat: 35.017863, lng: 135.731380, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizza-and-pasta restaurant — stone-oven pizza, pasta and bread with every course (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads and vegetable dishes appear, but the pizzas, pastas and gratins described use cheese, cream, egg, meat or seafood (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–15:00 (L.O. 14:00) and 18:00–22:30 (L.O. 22:00); closed Monday (Tabelog). Reservations accepted, including online (Tabelog). No service charge and no cover charge (Tabelog, original サービス料なし・チャージ料なし). At dinner, at least one drink per person (February 2026). Cards (Visa, Master, Diners) and e-money (Tabelog). 40 seats, with a semi-private space for up to 10 at the back (Tabelog). On the second floor, above a bicycle park, a minute east of the JR Enmachi Station gate along the south road (Tabelog; 2021 and May 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Enmachi — 1 min from JR Enmachi Station',
    cuisine: 'Italian with stone-oven pizza and craft beer; the name joins “novità” and “vecchio” (Tabelog) · lunch ¥1,200 with salad and bread and a pasta or pizza; course ¥2,400 with a main, dessert and drink; dessert trio +¥300 (October 2026) · full lunch course — appetizer, soup, pasta, pizza, fish, meat, dessert — ¥3,000 (October 2026) · salad with pomegranate-vinegar foam (2026) · pizzas such as quattro formaggi and Margherita with a chewy crust; carbonara with egg, pumpkin cream pasta (2026) · rice croquettes, gratin, ajillo, marinated salmon, Kuroge Wagyu steak (2026)',
    website: null, gmaps: gm('NOVECCHIO 円町'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian · Enmachi Station, stone-oven pizza] A bright, high-ceilinged Italian on a second floor a minute from JR Enmachi Station: chewy stone-oven pizzas, pastas and good-value lunches from ¥1,200 to a ¥3,000 seven-part course, with craft beer at night. No service or cover charge; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text explains the name as a blend of the Italian “novità” (newness, creativity) and “vecchio” (old, well aged, like wine). Tabelog’s name search lists a second shop, at Saiin.',
      philosophy: 'Something new and something well aged (Tabelog).', specialty: 'Stone-oven pizza.',
      anecdotes: [
        { text: 'A February 2026 group of four classmates around fifty ordered more pizza and pasta after the first round.', source: R + 'B522144439/' },
        { text: 'An October 2026 party of five liked that staff took orders in person instead of by QR code.', source: R + 'B538248626/' },
      ],
      japanese_sources_summary: '食べログ: NOVECCHIO 円町、イタリアン・ダイニングバー・ワインバー、中京区西ノ京南円町101 2F、JR円町駅の改札を出て南の道を東へ1分、火〜日 11:30〜15:00 (L.O.14:00)、18:00〜22:30 (L.O.22:00)、月曜定休、予約可、サービス料なし・チャージ料なし、カード・電子マネー可、40席、奥に10名までの半個室、石窯のピザとクラフトビール、Novità と vecchio を合わせた店名。口コミ (2025〜2026年、英語): ランチ1,200円、コース2,400円、デザート3種+300円、フルコースのランチ3,000円、ざくろのビネガーの泡のサラダ、クアトロフォルマッジ、マルゲリータ、カルボナーラ、かぼちゃのクリームパスタ、ライスコロッケ、グラタン、アヒージョ、黒毛和牛のステーキ、夜は1人1ドリンク。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/rstLst/?sw=NOVECCHIO', R + 'B438179188/', R + 'B513388898/', R + 'B522144439/', R + 'B522573741/', R + 'B524049272/', R + 'B525162667/', R + 'B527692478/', R + 'B537118489/', R + 'B538234353/', R + 'B538248626/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual Italian; one drink per person at dinner; no cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京南円町101 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017863, 135.73138); cross-checked: GSI 京都府京都市中京区西ノ京南円町101番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538248626/', R + 'B537118489/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: pasta or pizza with salad and bread', '¥1,200', 'Lunch', 'no', 'ask', 'October 2026.', 'lunch'),
      it('', '', 'Lunch course with main, dessert and drink', '¥2,400', 'Lunch', 'no', 'ask', 'October 2026.', 'lunch_course'),
      it('', '', 'Full lunch course (7 parts)', '¥3,000', 'Lunch', 'no', 'no', 'October 2026.', 'full_course'),
    ] }, {
    cuisine: '石窯のピザとクラフトビールのイタリアン。店名は novità と vecchio を合わせたもの (食べログ)・サラダとパンにパスタかピザのランチ1,200円。メイン、デザート、ドリンク付きのコース2,400円、デザート3種+300円 (2026年10月)・前菜、スープ、パスタ、ピザ、魚、肉、デザートのフルコースのランチ3,000円 (2026年10月)・ざくろのビネガーの泡をのせたサラダ (2026年)・もちもちの生地のクアトロフォルマッジやマルゲリータ。卵のカルボナーラ、かぼちゃのクリームパスタ (2026年)・ライスコロッケ、グラタン、アヒージョ、サーモンのマリネ、黒毛和牛のステーキ (2026年)',
    neighborhood: '円町。JR円町駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。石窯のピザ、パスタ、コースにはパンも付くピザとパスタの店 (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。サラダや野菜の皿もあるが、書かれているピザ、パスタ、グラタンはチーズ、クリーム、卵、肉、魚介を使う (2025〜2026年の口コミ)。',
    notes: '[イタリアン・円町駅、石窯のピザ] JR円町駅から1分、天井の高い明るい2階のイタリアン。もちもちの石窯ピザとパスタ、1,200円から3,000円の7品のコースまでお得なランチ、夜はクラフトビールも。サービス料・チャージなし、月曜定休。',
  });
}

save();
