// Kyoto priority (kyoto-missed), worker osw13, batch 112 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Leads with 焼肉 soya (integrator correction to osw13-111), then 萬治郎, non tea ceremony, スモーク＆グリル ロータス.
// Brands checked against than.co.jp/brands (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-112');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26011746', 'chain: やよい軒 烏丸御池店 is a branch of the national set-meal chain やよい軒 — twelve やよい軒 shops in our crawls');
skip('26003268', 'chain: スターバックス・コーヒー 京都三条烏丸ビル店 — スターバックス already ruled a chain (skip 26003270: 21 shops in our crawl)');

// ================================================================ 焼肉 soya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040354/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_soya', name: '焼肉 soya (Yakiniku soya)', category: 'OMNI',
    lat: 35.002552, lng: 135.757842, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku with sweet-spicy miso and soy-based sauces, beef-tendon ramen, cold noodles and bibimbap (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku shop — tongue, kalbi, yukhoe, beef bowls (2023–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–14:00 (L.O. 13:30) and 17:00–22:00 (L.O. 21:30); open all year apart from special closures such as New Year (check the reservation calendar). Lunch also at weekends (2025 reviews). Reservations taken; lunch can be fully booked (September 2025). Cards and PayPay. 28 seats with counter seating. Non-smoking. The toilet is outside, so the door lets in a draught (May 2025). Ayanokoji-dori just west of Muromachi, 3 min from Karasuma or Shijo exit 26 (Tabelog; 2025 reviews). Opened 12 December 2023. Run by 有限会社MASUICHI (NTA invoice register); reviewers call it a shop of the 益市 (Masuichi) yakiniku group.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji west of Muromachi, Shijo-Karasuma — 3 min walk from Shijo or Karasuma',
    cuisine: 'A casual yakiniku and izakaya near Shijo-Karasuma serving raw tongue and health-department-approved raw yukhoe, with cheap yakiniku bowls at lunch (Tabelog; 2023–2026 reviews) · green-onion-salt beef-tongue bowl ¥980 with soup and kimchi, free large rice (2025–2026) · beef-tongue bowl with sweet-spicy miso ¥980; kalbi lunch ¥980; yakiniku lunch set ¥2,200 (2025) · kalbi rice bowl ¥1,280 (April 2026) · stone-grilled rare-beef bibimbap (September 2025) · salted beef-tendon ramen (November 2025) · yukhoe; tongue; outside skirt; cold noodles (2025) · ¥200 highballs and suigin soda at lunch (August 2025)',
    website: null, gmaps: gm('焼肉 soya 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Ayanokoji near Shijo-Karasuma, a casual grill with lunch bowls] A clean, casual yakiniku room from the Masuichi people: raw tongue and approved raw yukhoe at night, and some of the best-value lunches in the area — tongue or kalbi bowls about ¥1,000 with free large rice. Dinner about ¥4,000–5,000. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)', 'Operator: 有限会社MASUICHI (NTA invoice register)'], origin: null,
      background: 'Opened 12 December 2023 (Tabelog). The invoice registration is 有限会社MASUICHI, and four 2025–2026 reviewers call it part of the long-established 益市 (Masuichi) yakiniku group; the group\'s 焼き肉家 益市 堺町錦店 record lists it among the group\'s other-named shops. Reviewers describe attentive staff, a clean room, solo diners and an app with points. Criticism: a pricey outside skirt (June 2025); too little meat at lunch (2025); soft ramen noodles and little tendon (November 2025).',
      philosophy: null,
      specialty: 'Raw tongue; yukhoe; yakiniku bowls at lunch.',
      anecdotes: [
        { text: 'May 2025: "Overall, everything was tasty, but the yukhoe and tongue were particularly exceptional! The texture of the yukhoe and the tenderness of the tongue were simply exquisite."', source: R + 'B506790817/' },
        { text: 'April 2026: "This restaurant is a casual yakiniku spot operated by the long-established \'Masuichi\' group… For lunch, there are many menu options available in the JPY 1,000 range."', source: R + 'B525559566/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 soya、焼肉・居酒屋・ホルモン、下京区善長寺町153 和優館ビル1F、阪急烏丸駅・地下鉄四条駅26番出口から徒歩3分、毎日11:30〜14:00 (L.O.13:30)・17:00〜22:00 (L.O.21:30)、年中無休 (年末年始など特別休業あり)、予約可、カード・PayPay可、28席、禁煙、2023年12月12日オープン、生タンと保健所の許可を得た生ユッケ。インボイス登録は有限会社MASUICHI (国税庁)。口コミ (2023年12月〜2026年8月、英語・日本語): ねぎ塩牛たん丼980円 (スープ・キムチ付き、ご飯大盛り無料)、甘辛味噌の牛たん丼980円、カルビランチ980円、焼肉ランチ2,200円、カルビ丼1,280円 (2026年4月)、石焼ビビンバ、牛すじ塩ラーメン、ユッケ、タン、ハラミ、冷麺、昼の200円ハイボール、益市グループの店との記載 (2025〜2026年)、トイレは店外 (2025年5月)、ハラミが高めとの声 (2025年6月)、ランチの肉が少なめとの声。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130002022509'].concat(rv(R, ['B498980696', 'B503766986', 'B506790817', 'B507720376', 'B511891047', 'B513566138', 'B516572655', 'B520015603', 'B525559566', 'B529677981', 'B531832254', 'B534551695'])) },
    cultural_comfort: { level: 'japanese', note: 'Casual and solo-friendly; lunch fills up — book.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区善長寺町153 和優館ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June, July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.002552, 135.757842); GSI lot 京都府京都市下京区善長寺町153番地 about 44m away; nearest pin kyoto_dernier_bar 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511891047/', R + 'B525559566/', R + 'B503766986/'],
    price_note: 'Lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Green-onion-salt beef-tongue bowl (lunch, with soup and kimchi)', '¥980', 'Lunch', 'no', 'no', '2025–2026.', 'negi_tan_don'),
      it('', '', 'Kalbi rice bowl (lunch)', '¥1,280', 'Lunch', 'no', 'no', 'April 2026.', 'kalbi_don'),
      it('', '', 'Yakiniku lunch set', '¥2,200', 'Lunch', 'no', 'no', 'September 2025.', 'yakiniku_lunch'),
      it('', '', 'Raw yukhoe (health-department approved)', null, 'Yakiniku', 'ask', 'no', '2023–2025.', 'nama_yukhoe'),
    ] }, {
    cuisine: '四条烏丸近くの気軽な焼肉・居酒屋。生タンと保健所の許可を得た生ユッケ、昼は手頃な焼肉丼 (食べログ、2023〜2026年の口コミ)・ねぎ塩牛たん丼980円、スープ・キムチ付き、ご飯大盛り無料 (2025〜2026年)・甘辛味噌の牛たん丼980円、カルビランチ980円、焼肉ランチセット2,200円 (2025年)・カルビ丼1,280円 (2026年4月)・レアな牛肉の石焼ビビンバ (2025年9月)・牛すじの塩ラーメン (2025年11月)・ユッケ、タン、ハラミ、冷麺 (2025年)・昼の200円のハイボールやSuiジンソーダ (2025年8月)',
    neighborhood: '四条烏丸、室町の西の綾小路。四条・烏丸から徒歩3分',
    gf_detail: 'グルテンフリーではない: 甘辛味噌やしょうゆベースのたれの焼肉、牛すじラーメン、冷麺、ビビンバ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 焼肉店。タン、カルビ、ユッケ、牛丼 (2023〜2026年の口コミ)。',
    notes: '[焼肉・四条烏丸近くの綾小路、ランチ丼もある気軽な焼肉] 益市のグループによる清潔で気軽な焼肉店。夜は生タンや許可を得た生ユッケ、昼はこのあたりで屈指の手頃さで、タンやカルビの丼が1,000円ほど、ご飯大盛り無料。夜は4,000〜5,000円ほど。毎日営業。',
  });
}

// ================================================================ 萬治郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006112/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '20:00']);
  put({
    id: 'kyoto_manjiro_kodaiji', name: '萬治郎 (Manjiro)', category: 'OMNI',
    lat: 35.00172, lng: 135.780114, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kaiseki built around nama-fu (wheat gluten) — fu dengaku, fu noodles, fu manju — with tempura and soy-based dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include sashimi, buri daikon, Omi-beef steak and chirashi sushi (2025–2026 reviews), though yuba and fu feature heavily — ask.',
    hours_raw: 'Tabelog: daily 11:30–14:00 and 17:30–20:00; closed on irregular days. Reservations taken. Prices include tax, service charge 10% extra — Tabelog, Japanese original 「税込・サービス料10％別」. Private rooms for 2–30 with lunch kaiseki from ¥7,000 or dinner kaiseki at ¥11,000 (Tabelog). 50 seats: tables on the 1st floor, tatami and sunken private rooms upstairs with a courtyard view. Designated smoking area. Cards and WeChat Pay. An old townhouse on Kodaiji Kitamon-mae-dori east of Shimogawara, between Yasaka Shrine and Kodaiji (2025 reviews); 10 min from Keihan Gion-Shijo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji Kitamon-mae, between Yasaka Shrine and Kodaiji — 10 min walk from Gion-Shijo',
    cuisine: 'A townhouse kaiseki restaurant by Kodaiji with yuba and nama-fu at the centre of its courses, said by a reviewer to be a sister of Gion\'s Hanazaki (Tabelog; 2023–2026 reviews) · Mini Kaiseki "Nene Gozen" lunch ¥5,500, nine dishes: sashimi of tuna, sea bream and yuba, grilled nama-fu and small potatoes, buri daikon, fu noodles, tempura, chirashi sushi, fu manju (December 2025) · lunch set with nama-yuba sashimi, grilled fu, purple-sweet-potato sesame tofu, chirashi and red miso (December 2025) · New Year lunch kaiseki with white-miso zoni (January 2026) · kaiseki with Omi-beef steak (February 2026) · aged sashimi (April 2026)',
    website: 'http://www.kyoto-manjiro.com/', gmaps: gm('萬治郎 高台寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Kodaiji, an old townhouse with private rooms] A comfortable townhouse between Yasaka Shrine and Kodaiji serving gentle Kyoto courses built on yuba and nama-fu — fu noodles, fu dengaku, fu manju — with a ¥5,500 lunch "Nene Gozen" and private rooms upstairs. 10% service. Open daily.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'A December 2025 reviewer calls it a sister restaurant of Hanazaki in Gion (romaji as given). Reviewers describe a long-standing old building, polite and friendly staff who see guests off and help with photos, regulars who return every New Year, and private rooms with a courtyard view. Criticism: a menu much like last year\'s (February 2026); no standout dish for the price (March 2026); flavors that did not leave a strong impression (December 2025).',
      philosophy: null,
      specialty: 'Yuba and nama-fu kaiseki; "Nene Gozen" lunch.',
      anecdotes: [
        { text: 'December 2025: "I ordered the Mini Kaiseki Nene Gozen for lunch, priced at JPY 5,500. This course includes a total of 9 dishes… offering great value!"', source: R + 'B520169474/' },
        { text: 'January 2025: "Every year, we visit after receiving a purification ritual at Yasaka Shrine. Our New Year starts here."', source: R + 'B499092415/' },
      ],
      japanese_sources_summary: '食べログ: 萬治郎、日本料理、東山区高台寺北門前通下河原東入鷲尾町518、京阪祇園四条駅から徒歩10分、毎日11:30〜14:00・17:30〜20:00、不定休、予約可、原文で「税込・サービス料10％別」、50席、個室 (2〜30名、昼は7,000円以上・夜は11,000円の会席で利用可)、分煙、カード・WeChat Pay可、公式サイト kyoto-manjiro.com。口コミ (2023年1月〜2026年10月、英語・日本語): 湯葉と生麩の会席、ミニ会席「ねね御膳」5,500円 (9品、2025年12月)、まぐろ・鯛・湯葉の刺身、生麩と小芋の焼き物、鰤大根、麩の麺、天ぷら、ちらし寿司、麩まんじゅう、生湯葉の刺身、紫芋のごま豆腐、正月の白味噌雑煮 (2026年1月)、近江牛のステーキの会席 (2026年2月)、熟成の刺身 (2026年4月)、祇園Hanazakiの姉妹店との記載 (2025年12月)、2階の個室、毎年通う常連、献立が昨年と似ていたとの声 (2026年2月)。',
      confidence: 'medium', sources: [TB, 'http://www.kyoto-manjiro.com/'].concat(rv(R, ['B499092415', 'B501248982', 'B503407856', 'B505929730', 'B518563863', 'B519009098', 'B519167102', 'B520169474', 'B520185378', 'B526414038', 'B527227726', 'B538122061'])) },
    cultural_comfort: { level: 'some_english', note: 'Popular with overseas visitors (December 2025); private tatami rooms or ground-floor tables; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺北門前通下河原東入鷲尾町518',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March, April and October 2026.' },
    pin_source: `Tabelog ${TB} (35.00172, 135.780114); GSI lot 京都府京都市東山区鷲尾町518番地 about 118m away; nearest pin kyoto_entokuin_amex_lounge 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520169474/', TB],
    price_note: 'Lunch price from a December 2025 review; private-room kaiseki minimums from Tabelog; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Mini Kaiseki "Nene Gozen" (lunch, 9 dishes)', '¥5,500', 'Course', 'no', 'no', 'December 2025; April 2026.', 'nene_gozen'),
      it('', '', 'Lunch kaiseki in a private room', 'from ¥7,000', 'Course', 'no', 'no', 'Tabelog listing.', 'lunch_kaiseki'),
      it('', '', 'Dinner kaiseki in a private room', '¥11,000', 'Course', 'no', 'no', 'Tabelog listing.', 'dinner_kaiseki'),
    ] }, {
    cuisine: '湯葉と生麩を中心にした、高台寺そばの町家の会席料理店。祇園Hanazakiの姉妹店との口コミあり (食べログ、2023〜2026年の口コミ)・ミニ会席「ねね御膳」5,500円、9品: まぐろ・鯛・湯葉の刺身、生麩と小芋の焼き物、鰤大根、麩の麺、天ぷら、ちらし寿司、麩まんじゅう (2025年12月)・生湯葉の刺身、焼き麩、紫芋のごま豆腐、ちらし、赤だしの昼のセット (2025年12月)・白味噌雑煮の正月の昼の会席 (2026年1月)・近江牛のステーキの会席 (2026年2月)・熟成の刺身 (2026年4月)',
    neighborhood: '八坂神社と高台寺の間の高台寺北門前。祇園四条から徒歩10分',
    gf_detail: 'グルテンフリーではない: 生麩 (小麦グルテン) が中心の会席。麩田楽、麩の麺、麩まんじゅう、天ぷら、しょうゆベースの料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、鰤大根、近江牛のステーキ、ちらし寿司のコース (2025〜2026年の口コミ)。湯葉と麩が多いので要相談。',
    notes: '[京料理の会席・高台寺、個室のある古い町家] 八坂神社と高台寺の間の居心地のよい町家で、湯葉と生麩を中心にしたやさしい京料理のコース。麩の麺、麩田楽、麩まんじゅう、昼の「ねね御膳」は5,500円、2階に個室。サービス料10%。毎日営業。',
  });
}

// ================================================================ non tea ceremony
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045136/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_non_tea_ceremony', name: 'non tea ceremony', category: 'OMNI',
    lat: 34.997971, lng: 135.778104, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog\'s listing marks gluten-free options, but the three reviews (July–September 2026) describe only a lemon-themed afternoon tea and do not say which items are gluten-free. Reservation only — ask when booking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog\'s listing marks vegan options; reviewers describe a lemon-themed afternoon tea with Japanese black tea (July–September 2026) without saying which items are vegan. Ask when booking.',
    hours_raw: 'Tabelog: Mon–Wed, Fri–Sun and holidays 11:00–18:00; closed Thursday. Reservation only — contact them by Instagram DM if running late. Cards, IC and e-money. 12 seats. Non-smoking. 13 min walk from Gion-Shijo, at 星野町 in Higashiyama. Opened 5 June 2026.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, south of Gion — 13 min walk from Gion-Shijo',
    cuisine: 'A small reservation-only afternoon-tea salon opened in June 2026, with vegan and gluten-free options listed on Tabelog (Tabelog; July–September 2026 reviews) · afternoon tea with free-flowing drinks, a lemon-rich summer menu and Japanese black tea (July 2026) · "an elegant afternoon tea featuring an abundance of lemon" (September 2026)',
    website: null, gmaps: gm('non tea ceremony 京都 東山区星野町'), menu_url: TB + 'dtlmenu/',
    notes: '[Afternoon tea · Higashiyama, a quiet 12-seat salon] A calm, reservation-only tea room for a seasonal afternoon tea with free-flowing Japanese black tea — lemon-themed in summer — at about ¥5,000–8,000. Tabelog lists vegan and gluten-free options: ask when you book. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 5 June 2026 (Tabelog). The three reviews so far (July–September 2026) describe a calm, quiet room, free-flowing drinks and ingredients chosen with care. Thin evidence: three short reviews.',
      philosophy: null,
      specialty: 'Seasonal afternoon tea with Japanese black tea.',
      anecdotes: [
        { text: 'July 2026: "The afternoon tea featured a menu rich in lemon, which was refreshing during the hot summer and paired wonderfully with the Japanese black tea."', source: R + 'B531470420/' },
        { text: 'July 2026: "The deliciousness clearly reflected their commitment to quality ingredients… I was able to spend a relaxing time in a calm and quiet atmosphere."', source: R + 'B532458181/' },
      ],
      japanese_sources_summary: '食べログ: non tea ceremony、カフェ・スイーツ、東山区星野町92-9、祇園四条駅から徒歩13分、月〜水・金〜日・祝日11:00〜18:00、木曜休み、完全予約制 (遅れる場合はInstagramのDMなどで連絡を)、交通系IC・電子マネー可、12席、禁煙、ヴィーガン・グルテンフリーの対応あり、2026年6月5日オープン。口コミ (2026年7月〜9月、英語、3件): ドリンクおかわり自由のアフタヌーンティー、夏はレモンをたっぷり使った内容と和紅茶、静かで落ち着いた空間。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B531470420', 'B532458181', 'B535295052'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; quiet room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区星野町92-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 5 June 2026) with reviews dated July and September 2026.' },
    pin_source: `Tabelog ${TB} (34.997971, 135.778104); GSI lot 京都府京都市東山区星野町92番地 about 14m away; nearest pin kyoto_waku_higashiyama 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531470420/'],
    price_note: 'No item prices; reviewers spent ¥6,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Afternoon tea with free-flowing drinks (seasonal)', null, 'Set', 'ask', 'ask', 'July–September 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: '2026年6月にできた小さな完全予約制のアフタヌーンティーのサロン。食べログにはヴィーガン・グルテンフリーの対応あり (食べログ、2026年7〜9月の口コミ)・ドリンクおかわり自由のアフタヌーンティー、夏はレモンたっぷりの内容と和紅茶 (2026年7月)・「レモンをふんだんに使った上品なアフタヌーンティー」(2026年9月)',
    neighborhood: '東山の星野町。祇園四条から徒歩13分',
    gf_detail: '要確認: 食べログにはグルテンフリーの対応ありとあるが、3件の口コミ (2026年7〜9月) はレモンのアフタヌーンティーについてで、どれがグルテンフリーかは書かれていない。完全予約制なので予約時に確認を。',
    vegan_detail: '要確認: 食べログにはヴィーガンの対応ありとあるが、口コミはレモンのアフタヌーンティーと和紅茶の話で (2026年7〜9月)、どれがヴィーガンかは書かれていない。予約時に確認を。',
    notes: '[アフタヌーンティー・東山、12席の静かなサロン] 落ち着いた完全予約制のティールーム。季節のアフタヌーンティーを、おかわり自由の和紅茶とともに。夏はレモンが主役で、5,000〜8,000円ほど。食べログにはヴィーガン・グルテンフリー対応あり、予約時に相談を。木曜休み。',
  });
}

// ================================================================ スモーク＆グリル ロータス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006718/'; const R = TB + 'dtlrvwlst/';
  const D = ['18:00', '25:00']; const WD = day(['11:30', '15:00'], D); const WE = day(D);
  put({
    id: 'kyoto_smoke_grill_lotus', name: 'スモーク＆グリル ロータス (LOTUS)', category: 'OMNI',
    lat: 35.004324, lng: 135.757458, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ajillo with baguette, bruschetta, katsu curry, shrimp fry, chicken tenders with tartar (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: smoked bacon, mackerel, chicken ham, steak, hamburg, liver (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 11:30–15:00 (lunch, as "Cafe Lotus", weekdays only) and 18:00–1:00; Sat and Sun 18:00–1:00; L.O. 23:30; open all year apart from occasional breaks (a summer break in August 2026). Reservations taken. Cards and PayPay. 32 seats: 8 at the counter, 24 at tables. Smoking: e-cigarettes only until 22:00, then a designated smoking area (Tabelog); a 2026 reviewer smoked at lunch. BYO allowed. 2nd floor of the 道家商事ビル down a winding alley near Shijo-Karasuma, 3 min from Karasuma or Shijo. Opened 10 June 2008. Sister restaurants Charcoal and Stem (May 2026 review).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Shinmachi back alley, west of Karasuma — 3 min walk from Shijo or Karasuma',
    cuisine: 'A smoked-and-grilled Italian bar in a back alley since 2008, with weekday lunch sets as "Cafe Lotus" (Tabelog; 2025–2026 reviews) · "Potato Salad Mountain" with smoked iburi-gakko and a smoked egg, crushed at the table ¥880 (January 2026) · smoked plates ¥380–660: chicken ham, bacon, giant crab stick, mackerel, spicy cod roe, fig butter, umeboshi · chicken-liver confit ¥880; choose-three ajillo ¥1,100; baguette ¥330; beef steak and fries ¥3,190 (January 2026) · smoked salmon bruschetta; smoked tongue (September 2026) · lunch: beef curry ¥1,100; curry hamburg ¥1,300; demi-glace hamburg; fried chicken breast with grated daikon; chicken tenders with tartar (2025–2026)',
    website: 'http://www.lotus0610.com/', gmaps: gm('スモーク＆グリル ロータス 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Smoked dishes & Italian bar · back alley by Shijo-Karasuma, open to 1 am] An alley bar devoted to the smoker and the grill — the theatrical smoked-egg "Potato Salad Mountain", smoked mackerel and bacon, ajillo, steak — with good wine until 1 am, and hearty weekday lunch sets around ¥1,100–1,300 with mountains of salad. Smoking area after 22:00.',
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed)'], origin: null,
      background: 'Opened 10 June 2008 (Tabelog); lunch as "Cafe Lotus" began in 2025 (June 2025 review). Reviewers describe a friendly manager, staff who adjust portions to the group, and a smoker-friendly room; a May 2026 reviewer mentions sister restaurants Charcoal and Stem. Criticism: an inedibly tough Angus steak and slow service (December 2025); drink mix-ups on all-you-can-drink and a disappointing sangria (2025); a bad katsu (2026).',
      philosophy: null,
      specialty: 'Smoked dishes; "Potato Salad Mountain"; weekday lunch sets.',
      anecdotes: [
        { text: 'January 2026: "We started with the famous \'Potato Salad Mountain.\' Hidden inside is a smoked boiled egg, and the staff crushes it right in front of you for a fun presentation!"', source: R + 'B520319570/' },
        { text: 'December 2025: "Angus Beef ▶︎ Unbelievable… I couldn\'t even chew it, let alone cut it with a knife."', source: R + 'B519102801/' },
      ],
      japanese_sources_summary: '食べログ: LOTUS (スモーク＆グリル ロータス)、イタリアン・居酒屋・バル、中京区観音堂町470 道家商事ビル2F、阪急烏丸駅・地下鉄四条駅から徒歩3分、月〜金11:30〜15:00 (平日のみのランチ「Cafe Lotus」)・18:00〜翌1:00、土・日18:00〜翌1:00、L.O.23:30、年中無休、予約可、カード・PayPay可、32席 (カウンター8・テーブル24)、22時までは電子たばこのみ、持ち込み可、2008年6月10日オープン、公式サイト lotus0610.com。口コミ (2025年2月〜2026年9月、英語): いぶりがっこと燻製卵の「ポテサラマウンテン」880円、燻製 (鶏ハム、ベーコン、カニカマ、鯖、明太子、いちじくバター、梅干し) 380〜660円、鶏レバーのオイル煮880円、アヒージョ1,100円、バゲット330円、牛ステーキとフライドポテト3,190円 (2026年1月)、スモークサーモンのブルスケッタ、燻製タン、昼はビーフカレー1,100円、カレーハンバーグ1,300円、デミグラスハンバーグ、鶏むね肉のおろし、チキンのタルタル、姉妹店CharcoalとStem (2026年5月)、アンガス牛が硬すぎたとの声 (2025年12月)、飲み放題のミス (2025年)。',
      confidence: 'medium', sources: [TB, 'http://www.lotus0610.com/'].concat(rv(R, ['B501927092', 'B507790303', 'B515376295', 'B519102801', 'B520319570', 'B520808922', 'B521036306', 'B528288084', 'B529258799', 'B530182935', 'B533623557', 'B535809967'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoker-friendly (e-cigarettes only until 22:00); lunch on weekdays only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音堂町470 道家商事ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June, August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.004324, 135.757392) sits 2.0m from kyr_torisoba_ayam_ya_karasum and 5.1m from kyoto_yumcha_bar_sinsin (same 道家商事ビル, 1F), so moved about 6m east to (35.004324, 135.757458), at least 6.7m from every pin; GSI lot 京都府京都市中京区観音堂町470番地 about 9m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520319570/', R + 'B530182935/', R + 'B521036306/'],
    price_note: 'Prices from January–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Potato Salad Mountain" (smoked egg, iburi-gakko)', '¥880', 'Small plate', 'ask', 'no', 'January and September 2026.', 'potato_salad_mountain'),
      it('', '', 'Smoked plates (mackerel, bacon, chicken ham…)', '¥380–660', 'Smoked', 'ask', 'no', 'January 2026.', 'smoked_plates'),
      it('', '', 'Choose-three ajillo', '¥1,100', 'Small plate', 'ask', 'no', 'January 2026.', 'ajillo'),
      it('', '', 'Beef curry (weekday lunch)', '¥1,100', 'Lunch', 'no', 'no', 'June 2026.', 'beef_curry'),
    ] }, {
    cuisine: '2008年からの路地裏の燻製とグリルのイタリアンバル。平日の昼は「Cafe Lotus」のランチ (食べログ、2025〜2026年の口コミ)・いぶりがっこと燻製卵を卓でくずす「ポテサラマウンテン」880円 (2026年1月)・燻製の小皿380〜660円: 鶏ハム、ベーコン、カニカマ、鯖、明太子、いちじくバター、梅干し・鶏レバーのオイル煮880円、具を3つ選ぶアヒージョ1,100円、バゲット330円、牛ステーキとフライドポテト3,190円 (2026年1月)・スモークサーモンのブルスケッタ、燻製タン (2026年9月)・昼: ビーフカレー1,100円、カレーハンバーグ1,300円、デミグラスハンバーグ、鶏むね肉のおろし、チキンのタルタル (2025〜2026年)',
    neighborhood: '烏丸の西、四条新町の路地裏。四条・烏丸から徒歩3分',
    gf_detail: 'グルテンフリーではない: バゲット付きのアヒージョ、ブルスケッタ、カツカレー、エビフライ、チキンのタルタル (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 燻製のベーコン、鯖、鶏ハム、ステーキ、ハンバーグ、レバー (2025〜2026年の口コミ)。',
    notes: '[燻製料理とイタリアンバル・四条烏丸の路地裏、深夜1時まで] 燻製とグリルの路地裏のバル。燻製卵を崩す「ポテサラマウンテン」、燻製の鯖やベーコン、アヒージョ、ステーキにワインで深夜1時まで。平日の昼はサラダたっぷりのランチが1,100〜1,300円ほど。22時以降は喫煙可。',
  });
}

save();
