// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 93 (2026-11-08).
//   + 天ぷら 富美 Tempura Tomi (tempura counter and courses near Gojo; rest)
//   + 左阿彌 Saami (ryotei above Maruyama Park, a restaurant since 1849; rest)
//   + イノツチ洋食店 Inotsuchi Yoshoku Ten (teppan hamburg and cutlet yoshoku, Nijo near Okazaki; rest)
//   + 烏丸酒場 祭り Karasuma Sakaba Matsuri (kushikatsu and Kansai konamon izakaya by Gojo Stn; rest)
//   + Furlan (eight-seat Friulian-leaning Italian counter, Ebisugawa-Teramachi; rest)
//   Rest list (mod 6 = 1) after batch 92, nearest-first — skipped:
//   - 京うな和本店 清水はなれ 26042299: chain — 京うな和本店, five or more shops (same call as 26034563, 26041736, 26045207).
//   - ズーセス ヴェゲトゥス 26035915: retail food shop (Greg 11-07 ruling) — takeaway-only Baumkuchen shop; not historic,
//     no sourced GF or vegan options.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. None of the five is in
//   data (main d2ccc070, hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26042299/', 'chain: 京うな和本店 — five or more うな和 shops (same call as 26034563, 26041736, 26045207)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26035915/', 'retail food shop (Greg 11-07 ruling): takeaway-only Baumkuchen shop; not historic, no sourced GF or vegan options');

// ================================================================ 天ぷら 富美 Tempura Tomi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040613/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_tempura_tomi_gojo', name: '天ぷら 富美 (Tempura Tomi)', category: 'OMNI',
    lat: 34.994108987876835, lng: 135.76102977025155, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura in wheat batter is the core of the courses (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura, sashimi and sushi (2024–2025 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 17:00–22:30 (last food order 21:30); closed Monday (Tabelog). Reservations accepted and advised for the small room (Tabelog; January 2024). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 14 seats: 6 at the 1F counter and an 8-seat tatami room upstairs; non-smoking; children welcome (Tabelog). In a former sushi shop, 3 min walk from Gojo Stn exit 5 (Tabelog; December 2024). Opened 12 January 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Karasuma',
    cuisine: 'Tempura counter with courses at ¥5,500 and ¥8,800 (January 2024) · seasonal vegetable and seafood tempura fried in front of you (May 2024) · courses that also bring grilled dishes, sashimi and a little sushi to finish (January–June 2025) · about ¥10,000–15,000 (Tabelog)',
    website: null, gmaps: gm('天ぷら 富美 五条'), menu_url: null,
    notes: '[Tempura · near Gojo Stn] A small, smart tempura counter in a former sushi shop: courses of seasonal vegetables and seafood fried before you, with sashimi, grilled dishes and a bite of sushi at the end, and a friendly chef. Book. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef / manager (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a tempura restaurant opened 12 January 2024 in a former sushi shop near Gojo, run by a smiling, attentive chef who asks whether each drink is as the guest likes it (January–December 2024; October 2026).',
      philosophy: null, specialty: 'Tempura course.',
      anecdotes: [
        { text: 'A diner on only the second day after opening in January 2024 found two courses, ¥5,500 and ¥8,800, and a friendly, approachable chef.', source: R + 'B478026063/' },
        { text: 'A December 2024 group of five had the counter to themselves; the manager checked the strength of a shochu mix.', source: R + 'B498763564/' },
        { text: 'A January 2025 diner was pleased to be offered sushi after the tempura.', source: R + 'B500399381/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら、下京区橋詰町133-4、五条駅5番出口から3分、火〜日・祝日 17:00〜22:30 (L.O.料理21:30)、月曜休み、予約可、カード (VISA・Master・JCB・AMEX・Diners・銀聯) 可、電子マネー・QR 不可、14席 (1階カウンター6席、2階8名の座敷)、禁煙、子ども可、2024年1月12日開店。口コミ (2024年1月〜2026年10月、英語): 5,500円と8,800円のコース (2024年1月)、目の前で揚げる旬の野菜と魚介の天ぷら、焼き物や刺身、最後に寿司 (2025年1月)、元は寿司屋、笑顔の店主の気配り。',
      confidence: 'low', sources: [TB, R + 'B478026063/', R + 'B494271832/', R + 'B498763564/', R + 'B500399381/', R + 'B509037161/', R + 'B538152161/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区橋詰町133-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.994109, 135.761030); cross-checked: GSI 京都府京都市下京区橋詰町133番地 (lot) 15 m; nearest existing record 48.6 m (kyoto_m_and_maison_gojo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B478026063/'],
    price_note: 'Prices from a January 2024 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Tempura course', '¥5,500', 'Courses', 'no', 'no', 'January 2024; also ¥8,800.', 'course'),
    ] }, {
    cuisine: '5,500円と8,800円のコースの天ぷらのカウンター (2024年1月)・目の前で揚げる旬の野菜と魚介の天ぷら (2024年5月)・焼き物、刺身、しめに少し寿司も出るコース (2025年1〜6月)・10,000〜15,000円ほど (食べログ)',
    neighborhood: '五条烏丸',
    gf_detail: 'グルテンフリー不可。コースの中心は小麦の衣の天ぷら (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の天ぷら、刺身、寿司 (2024〜2025年の口コミ)。',
    notes: '[天ぷら・五条駅の近く] 元寿司屋の小さくしゃれた天ぷらのカウンター。目の前で揚げる旬の野菜と魚介のコースに、刺身、焼き物、最後にひと口の寿司、気さくな店主。予約を。月曜休み。',
  });
}

// ================================================================ 左阿彌 Saami
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001343/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.saami.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_saami_maruyama', name: '左阿彌 (Saami)', category: 'OMNI',
    lat: 35.00362943787773, lng: 135.78280515033245, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki with dashi and soy throughout (official site; 2024–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish and dashi, e.g. hamo and matsutake dobin-mushi (2024–2026 reviews).',
    hours_raw: 'Daily 11:30–15:00 (last order 13:30) and 17:00–21:30 (last order 19:30); closed over the New Year (Tabelog). The official site lists the lunch Hana Gozen from 11:00 to 14:00. Reservations accepted (Tabelog). Official prices include tax and service charge (official site). Cards (VISA, Master, JCB, AMEX, Diners) and QR; no e-money (Tabelog). 300 seats in private rooms from 2 to 30+ with tatami and sunken seating; wheelchair accessible; non-smoking; children welcome with a kids’ menu; parking for about 2 cars (Tabelog). Above Maruyama Park, east of Yasaka Shrine (Tabelog; 2025 reviews). A November 2026 guest heard the management had changed.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, Higashiyama',
    cuisine: 'Tea-ceremony-rooted Kyoto kaiseki in a ryotei above Maruyama Park, in rooms looking over the city (official site; Tabelog; 2024–2026 reviews) · lunch Hana Gozen ¥11,385; lunch kaiseki from ¥13,915; Kyoto kaiseki ¥16,445–63,250; wedding and memorial menus (Shinobu Gozen from ¥16,445) — tax and service included (official site) · seasonal courses such as hamo and matsutake dobin-mushi with sashimi, grilled, simmered and steamed dishes (October 2026) · ceremonies such as okuizome and memorial meals (October 2025; October 2026)',
    website: WEB, gmaps: gm('左阿彌 円山公園'), menu_url: WEB,
    notes: '[Kaiseki ryotei · above Maruyama Park] A historic ryotei up the hill from Yasaka Shrine — a hermitage from 1615, a restaurant since 1849 — serving seasonal Kyoto kaiseki in private rooms with views over the city and the autumn leaves. Popular for family ceremonies. Prices include tax and service.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Kitchen (unnamed)'], origin: null,
      background: 'Per the official site: the 左阿彌 hermitage dates to Genna 1 (1615), and it became a ryotei in Kaei 2 (1849); the site tells how 織田頼長, son of 織田有楽斎 (Oda Nagamasu), retired here as a tea practitioner. Reviewers describe being greeted by the owner (October 2024) and, in November 2026, hearing that the management had changed.',
      philosophy: 'Kaiseki rooted in the tea ceremony (Tabelog).', specialty: 'Seasonal kaiseki.',
      anecdotes: [
        { text: 'An October 2025 grandparent returned after two years for a second grandchild’s okuizome, glad of a roomy space for a toddler to run in.', source: R + 'B515837621/' },
        { text: 'An October 2026 party came after a memorial service at Otani Sobyo for the Shinobu Gozen and autumn leaves from the window.', source: R + 'B536712834/' },
        { text: 'A March 2024 guest delayed by traffic was given extra time so the party could still catch the train home.', source: R + 'B482744682/' },
      ],
      japanese_sources_summary: '公式サイト: 「東山の庵に左阿彌が誕生したのは、元和元年のこと」、「左阿彌が料亭を始めたのは嘉永二年。」、織田頼長は「織田信長の弟である織田長益（有楽斎）の第２子（嫡子）」、お昼の華御膳 (午前11時より午後2時まで) 11,385円、お昼の京懐石13,915円から、京懐石16,445〜63,250円、披露宴の膳、ご法事 偲ぶ御膳、「※料金は税・サービス料込です。」。食べログ: 日本料理、東山区八坂鳥居前東入ル円山町7-3 (円山公園内)、毎日 11:30〜15:00 (L.O.13:30)、17:00〜21:30 (L.O.19:30)、年末年始休み、予約可、カード (VISA・Master・JCB・AMEX・Diners)・QR 可、300席、個室、車いす可、禁煙、子ども可・子どもメニュー、駐車場2台ほど。口コミ (2024年3月〜2026年11月、英語): 嘉永2年 (1849年) 創業、円山公園の上、市内と紅葉の眺め、お食い初め、法事、土瓶蒸し (鱧と松茸)、経営が変わったとの声 (2026年11月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B482744682/', R + 'B483072422/', R + 'B493549112/', R + 'B497703833/', R + 'B499914437/', R + 'B510561048/', R + 'B515837621/', R + 'B536712834/', R + 'B537363159/', R + 'B538920174/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; private rooms; prices include service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂鳥居前東入ル円山町7-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003629, 135.782805); GSI 京都府京都市東山区円山町7番地 (lot) is 128 m off — a large hillside estate — so the Tabelog pin is kept; nearest existing record 81.9 m (kyoto_mizai_maruyama); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB],
    price_note: 'Official prices, tax and service included.', last_checked: TODAY, items: [
      it('', '', 'Hana Gozen (lunch)', '¥11,385', 'Lunch', 'ask', 'no', '11:00–14:00.', 'hanagozen'),
      it('', '', 'Lunch kaiseki', '¥13,915', 'Lunch', 'ask', 'no', 'From.', 'lunchkaiseki'),
      it('', '', 'Kyoto kaiseki', '¥16,445', 'Kaiseki', 'ask', 'no', '¥16,445–63,250.', 'kaiseki'),
    ] }, {
    cuisine: '円山公園の上の料亭で、市内を望む座敷の茶の湯に根ざした京懐石 (公式サイト、食べログ、2024〜2026年の口コミ)・お昼の華御膳11,385円、お昼の京懐石13,915円から、京懐石16,445〜63,250円、披露宴や法事の御膳 (偲ぶ御膳16,445円から)、税・サービス料込み (公式サイト)・鱧と松茸の土瓶蒸し、刺身、焼き物、煮物、蒸し物の季節のコース (2026年10月)・お食い初めや法事などの席 (2025年10月、2026年10月)',
    neighborhood: '円山公園、東山',
    gf_detail: '予約時に要確認。だしと醤油を使う京懐石 (公式サイト、2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚とだしの懐石 (鱧と松茸の土瓶蒸しなど) (2024〜2026年の口コミ)。',
    notes: '[懐石の料亭・円山公園の上] 八坂神社から坂を上る歴史ある料亭。元和元年の庵に始まり、嘉永二年から料亭に。市内と紅葉を望む個室で旬の京懐石。家族の集まりや法事にも。料金は税・サービス料込み。',
  });
}

// ================================================================ イノツチ洋食店 Inotsuchi Yoshoku Ten
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044045/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:30']);
  put({
    id: 'kyoto_inotsuchi_yoshoku', name: 'イノツチ洋食店 (Inotsuchi Yoshoku Ten)', category: 'OMNI',
    lat: 35.01344304099356, lng: 135.77583924829912, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: hamburg steak (usually bound with breadcrumbs), breaded cutlets, fried shrimp and demi-glace (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat and fried-food yoshoku lunch (2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 11:00–15:30 (last order 15:00); closed Tuesday; hours may change (Tabelog). Lunch only. Reservations accepted (Tabelog). No cards; e-money and QR accepted (Tabelog). Ordering by smartphone (June 2026). Counter and tables; non-smoking (Tabelog; July 2026). Moved across Nijo-dori to the south side, entrance at the side of the building, opening here on 24 November 2025 (Tabelog; June–October 2026). Near Okazaki, about 7 min walk from Sanjo Keihan.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo, near Okazaki',
    cuisine: 'Owner-run yoshoku lunch house (2026 reviews) · teppan hamburg steak set ¥1,500 with a choice of sauces — demi-glace +¥200, teriyaki, honey mustard or grated daikon — and a fried egg +¥200 (May–September 2026) · fried shrimp and fillet-cutlet set; fillet cutlet plate ¥1,800; hamburg with chicken nanban (June–October 2026) · sets come with a soup such as chilled carrot-potato, pumpkin or potato potage; homemade shiso juice (June–October 2026) · about ¥1,500–2,500 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('イノツチ洋食店 二条'), menu_url: null,
    notes: '[Yoshoku · Nijo near Okazaki, lunch only] A friendly owner-run yoshoku lunch spot, newly moved across Nijo-dori: sizzling teppan hamburg with your choice of sauce, fillet cutlets and fried shrimp, each with a soup, and a homemade shiso juice. Handy before the Okazaki museums. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a yoshoku restaurant whose owner runs the kitchen, reopened on 24 November 2025 in a larger room on the south side of Nijo-dori after moving from across the road; its teppan hamburg was featured on a Kansai TV programme (May 2026).',
      philosophy: null, specialty: 'Teppan hamburg steak.',
      anecdotes: [
        { text: 'A June 2026 diner came after seeing the teppan hamburg on a Kansai information programme the month before, with a chilled carrot-potato soup.', source: R + 'B530132059/' },
        { text: 'An October 2026 visitor on the way to the Ghibli exhibition at the Kyocera Museum loved the homemade shiso juice, which is not sold separately.', source: R + 'B537745023/' },
        { text: 'A June 2026 pair reunited over the fried shrimp and fillet-cutlet set, impressed by the roomier new shop.', source: R + 'B535768430/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、左京区新間之町通二条下ル頭町337-79 忍性寺北棟、三条京阪から490m、月・水〜日 11:00〜15:30 (L.O.15:00)、火曜休み、予約可、カード不可、電子マネー・QR 可、カウンター、禁煙、2025年11月24日開店。口コミ (2026年5〜10月、英語): 二条通の向かいから南側へ移転、入口は建物の横、店主が厨房、スマートフォンで注文、鉄板ハンバーグ定食1,500円 (デミグラス200円、照り焼き、ハニーマスタード、おろし、目玉焼き200円)、エビフライとヒレカツの定食、ヒレカツプレート1,800円、ハンバーグとチキン南蛮、冷たいにんじんとじゃがいものスープ・かぼちゃ・じゃがいものポタージュ、自家製のしそジュース、関西のテレビで紹介 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B527457482/', R + 'B528916145/', R + 'B530132059/', R + 'B531691057/', R + 'B533008887/', R + 'B535768430/', R + 'B537350764/', R + 'B537511258/', R + 'B537745023/', R + 'B537912236/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering; no cards (e-money and QR OK); lunch only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区新間之町通二条下ル頭町337-79 忍性寺北棟',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reopened here November 2025; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013443, 135.775839); cross-checked: GSI 京都府京都市左京区頭町337番地 (lot) 65 m; nearest existing record 87.8 m (kyoto_donabe_saizen_toyoake); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530132059/', R + 'B537511258/'],
    price_note: 'Prices from June and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Teppan hamburg steak set', '¥1,500', 'Lunch', 'no', 'no', 'June 2026; demi-glace +¥200.', 'hamburg'),
      it('', '', 'Fillet cutlet plate', '¥1,800', 'Lunch', 'no', 'no', 'October 2026.', 'hirekatsu'),
    ] }, {
    cuisine: '店主が厨房に立つ昼の洋食屋 (2026年の口コミ)・ソースを選べる鉄板ハンバーグ定食1,500円 (デミグラス200円、照り焼き、ハニーマスタード、おろし)、目玉焼き200円 (2026年5〜9月)・エビフライとヒレカツの定食、ヒレカツプレート1,800円、ハンバーグとチキン南蛮 (2026年6〜10月)・冷たいにんじんとじゃがいものスープ、かぼちゃやじゃがいものポタージュ付き、自家製のしそジュース (2026年6〜10月)・1,500〜2,500円ほど (食べログ、2026年の口コミ)',
    neighborhood: '二条、岡崎の近く',
    gf_detail: 'グルテンフリー不可。ハンバーグ (ふつうパン粉のつなぎ)、衣のカツ、エビフライ、デミグラス (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と揚げ物の洋食の昼 (2026年の口コミ)。',
    notes: '[洋食・二条 岡崎の近く、昼のみ] 二条通の向かいから移った店主の営む洋食屋。ソースを選べる熱々の鉄板ハンバーグ、ヒレカツやエビフライにスープ付き、自家製のしそジュース。岡崎の美術館の前にも。火曜休み。',
  });
}

// ================================================================ 烏丸酒場 祭り Karasuma Sakaba Matsuri
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041693/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_karasuma_sakaba_matsuri', name: '烏丸酒場 祭り (Karasuma Sakaba Matsuri)', category: 'OMNI',
    lat: 34.99491649787585, lng: 135.75952152026076, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kushikatsu, okonomiyaki, yakisoba and kara-age (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-heavy izakaya menu, motsu-ni and fried skewers (2025 reviews).',
    hours_raw: 'Monday–Saturday and holidays 17:00–24:00 (last orders food 23:00, drinks 23:30); closed Sunday; may close on the last day of long holidays (Tabelog). Reservations accepted; all-you-can-drink party courses from ¥3,500 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 36 seats at the counter and tables; smoking allowed — reviewers found the smoke strong (Tabelog; March 2026). Free Wi-Fi (Tabelog). 1 min walk from Gojo Stn exit 6. Opened 2 May 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Karasuma',
    cuisine: 'Casual Kansai izakaya of kushikatsu, okonomiyaki and yakisoba at low prices (Tabelog) · all-you-can-drink courses from ¥3,500 (Tabelog); a ¥4,000 course of salad, kushikatsu, motsu-ni and yakisoba (December 2025) · chicken-heavy party menus with kara-age (December 2025; September 2026) · sashimi, grilled and fried classics (March 2026) · about ¥2,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('烏丸酒場 祭り'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · by Gojo Stn, smoking allowed] A lively, good-value Kansai izakaya a minute from Gojo station: kushikatsu, yakisoba, motsu-ni and kara-age, with all-you-can-drink party courses from ¥3,500 and chatty staff. Smoky. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a Kansai-style izakaya opened 2 May 2024 by Gojo station, popular for parties and with overseas visitors, where friendly staff remember returning guests (April–November 2025).',
      philosophy: null, specialty: 'Kushikatsu; party courses.',
      anecdotes: [
        { text: 'Two friends back in November 2025 were remembered by the chef and enjoyed chatting at the counter.', source: R + 'B499010608/' },
        { text: 'A December 2025 group on the ¥4,000 all-you-can-drink course watched an empty room fill up fast.', source: R + 'B519300622/' },
        { text: 'A March 2026 diner liked every dish but found the cigarette smoke too strong to stay long.', source: R + 'B524500143/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・創作料理・揚げ物、下京区大坂町392 豊栄ビル 1F、五条駅6番出口から徒歩1分、月〜土・祝日 17:00〜24:00 (L.O.料理23:00、飲み物23:30)、日曜休み (連休最終日は休みの場合あり)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR 可、36席 (カウンター・テーブル)、喫煙可、Wi-Fi、飲み放題付きコース3,500円から、2024年5月2日開店、紹介文 (英訳): 串カツ、お好み焼き、焼きそばなど関西の味を手ごろに。口コミ (2025年1月〜2026年9月、英語): 飲み放題の4,000円のコース (サラダ、串カツ、もつ煮、焼きそば)、鶏料理が多い、唐揚げ、刺身や焼き物、海外の客も多い、たばこの煙が強いとの声、気さくなスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B499010608/', R + 'B508235429/', R + 'B512765057/', R + 'B519300622/', R + 'B520257218/', R + 'B524500143/', R + 'B528008489/', R + 'B530912436/', R + 'B535413550/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed (smoky); cards and QR; party courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大坂町392 豊栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.994916, 135.759522); cross-checked: GSI 京都府京都市下京区大坂町392番地 (lot) 26 m; nearest existing record 80.4 m (kyoto_imanishi_ken); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519300622/'],
    price_note: 'Price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥4,000', 'Courses', 'no', 'no', 'December 2025; from ¥3,500 per Tabelog.', 'course'),
    ] }, {
    cuisine: '串カツ、お好み焼き、焼きそばの手ごろな関西の居酒屋 (食べログ)・飲み放題付きコース3,500円から (食べログ)、サラダ・串カツ・もつ煮・焼きそばの4,000円のコース (2025年12月)・唐揚げなど鶏料理の多い宴会コース (2025年12月、2026年9月)・刺身、焼き物、揚げ物の定番 (2026年3月)・2,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '五条烏丸',
    gf_detail: 'グルテンフリー不可。串カツ、お好み焼き、焼きそば、唐揚げ (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏料理の多い居酒屋、もつ煮、串揚げ (2025年の口コミ)。',
    notes: '[居酒屋・五条駅すぐ、喫煙可] 五条駅から1分のにぎやかで手ごろな関西の居酒屋。串カツ、焼きそば、もつ煮、唐揚げに、3,500円からの飲み放題のコース、気さくなスタッフ。煙は多め。日曜休み。',
  });
}

// ================================================================ Furlan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040085/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:30', '21:00']);
  put({
    id: 'kyoto_furlan_ebisugawa', name: 'Furlan', category: 'OMNI',
    lat: 35.01492378786544, lng: 135.76675855045778, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — Tabelog asks guests to state allergies with the reservation. Courses include pasta, choux pastry and bread (Tabelog; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Courses are vegetable-rich but include cheese, cream, meat and fish (2024–2026 reviews).',
    hours_raw: 'Friday–Wednesday 11:30–14:00 (last order 13:00) and 18:30–21:00; closed Thursday (Tabelog). Reservations accepted, practically required for eight seats; state allergies when booking; requests made online may not always be met (Tabelog; July 2025). Service charge 5% (Tabelog original サービス料5％頂いております). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats; non-smoking (Tabelog). Behind large glass windows next to a select shop on Ebisugawa-dori west of Teramachi; the door is easy to miss (February–April 2025). Opened 1 September 2023 (November 2024 review).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-Teramachi, Goshominami',
    cuisine: 'Eight-seat counter of seasonal Italian with dishes from Friuli, light-handed and Japanese-leaning, cooked solo by owner-chef Kenta Mizutani (Tabelog; 2024–2026 reviews) · lunch course about ¥3,500: cabbage and ricotta éclair, a heaped salad with salmon, two pasta choices, gelato (November 2024–May 2026) · dinner courses: cauliflower mousse with ume or citrus, horse tartare on bread, spring vegetable soup with Yoro pork, sakura shrimp pasta (March–June 2026) · lunch about ¥4,000–5,000, dinner about ¥10,000–15,000 (Tabelog)',
    website: null, gmaps: gm('Furlan 京都 夷川 イタリアン'), menu_url: null,
    notes: '[Italian · Ebisugawa-Teramachi, 8 seats] A tiny counter where chef Kenta Mizutani, trained in Trieste, cooks delicate seasonal Italian with Friulian touches — savoury éclairs, heaped salads, fine pastas — solo and with charm. Book; tell allergies when reserving. 5% service. Closed Thursday.',
    chef_bio: { chef_name: 'Kenta Mizutani', roles: ['Owner-chef'], origin: null,
      background: 'Per Tabelog and reviewers: owner-chef Kenta Mizutani trained in Trieste and named the restaurant after the Friulian language; it opened on 1 September 2023 and the chef cooks, serves and changes cutlery for each course single-handed (November 2024; October 2025; June 2026).',
      philosophy: 'Bring out ingredients’ natural flavours with light seasoning (Tabelog; June 2026).', specialty: 'Chef’s-choice course; savoury éclair.',
      anecdotes: [
        { text: 'A July 2025 pair turned away elsewhere wandered in from the select shop next door without a booking, and the chef kindly fitted the pair in.', source: R + 'B510379368/' },
        { text: 'A February 2025 visitor who mistook it for a café was shown to the counter on a cold day and served warm jasmine tea.', source: R + 'B501987028/' },
        { text: 'A March 2026 first dinner found all seven counter seats full for a course from cauliflower mousse to sakura-shrimp pasta.', source: R + 'B523516970/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区夷川通寺町西入ル丸屋町693 ハオスハウゼ 1F、市役所前駅から徒歩10分、金〜水 11:30〜14:00 (L.O.13:00)、18:30〜21:00、木曜休み、予約可 (アレルギーは予約時に)、サービス料5％頂いております、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、カウンター8席、禁煙、紹介文 (英訳): 旬の食材のイタリアンと店名の由来のフリウリの料理、おまかせのコース。口コミ (2024年11月〜2026年6月、英語): Kenta Mizutani シェフ、トリエステで修業、2023年9月1日開店、一人で調理と給仕、昼のコース3,500円ほど (キャベツとリコッタのエクレア、サーモンののった山盛りサラダ、2種のパスタ、ジェラート)、夜はカリフラワーのムース、馬肉のタルタル、Yoro 豚の春野菜のスープ、桜えびのパスタ。',
      confidence: 'medium', sources: [TB, R + 'B495029705/', R + 'B501316864/', R + 'B501987028/', R + 'B505720203/', R + 'B510379368/', R + 'B515651237/', R + 'B523516970/', R + 'B523537826/', R + 'B529459830/', R + 'B534957293/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book; state allergies when reserving; 5% service charge.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog asks guests to state allergies when booking'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区夷川通寺町西入ル丸屋町693 ハオスハウゼ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.014924, 135.766759); cross-checked: GSI 京都府京都市中京区丸屋町693番地 (lot) 12 m; nearest existing record 14.9 m (kyoto_sushi_fukagawa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495029705/'],
    price_note: 'Price from a November 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥3,500', 'Lunch', 'ask', 'ask', 'November 2024.', 'lunch'),
    ] }, {
    cuisine: 'Kenta Mizutani シェフが一人で作る、旬のイタリアンとフリウリの料理のカウンター8席、薄味で和に寄った味 (食べログ、2024〜2026年の口コミ)・昼のコース3,500円ほど: キャベツとリコッタのエクレア、サーモンののった山盛りのサラダ、2種から選ぶパスタ、ジェラート (2024年11月〜2026年5月)・夜のコース: 梅や柑橘のカリフラワーのムース、パンにのせた馬肉のタルタル、Yoro 豚の春野菜のスープ、桜えびのパスタ (2026年3〜6月)・昼4,000〜5,000円ほど、夜10,000〜15,000円ほど (食べログ)',
    neighborhood: '夷川寺町、御所南',
    gf_detail: '予約時に要確認。食べログはアレルギーを予約時に伝えるよう案内。コースにパスタ、シュー生地、パン (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: '予約時に要確認。野菜の多いコースだが、チーズ、クリーム、肉、魚も (2024〜2026年の口コミ)。',
    notes: '[イタリアン・夷川寺町、8席] トリエステで修業した Kenta Mizutani シェフが一人で営む小さなカウンター。フリウリの香る旬の繊細なイタリアン (エクレア、山盛りのサラダ、パスタ)。予約を、アレルギーは予約時に。サービス料5%。木曜休み。',
  });
}

save();
