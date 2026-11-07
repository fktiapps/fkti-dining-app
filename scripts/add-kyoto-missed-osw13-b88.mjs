// Kyoto priority (kyoto-missed), worker osw13, batch 88 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 肉重 北斎, ソリレス, 邦匠, 花たぬき 河原町店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001036', 'chain: 西利 祇園店 is one of about 11 Kyoto shops of 京つけもの西利 (本店 at Nishi-Honganji, 祇園, 清水, 嵐山 昇龍苑, 嵯峨天龍寺門前, 亰, Porta ×3, 近鉄京都駅, MOMOテラス — Kyoto school-trip navi listing; Porta shop guide; @kyoto_nishiri)');
skip('26043300', 'large parent: 百炉まん is run by 株式会社ファンインターナショナル — its Tabelog website field is fun-no1.com/business/restrant/hyakuroman/, and that page (title "100種小皿料理と炉端 百炉まん – 株式会社ファンインターナショナル", fetched 7 November 2026) calls it the third of the 炉まん series after 炭炉まん and 鮨炉まん; same ruling as 炭炉まん (osw13-71)');

// ================================================================ 肉重 北斎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040738/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'kyoto_nikujuu_hokusai_kawaramachi', name: '肉重 北斎 (Nikujuu Hokusai)', category: 'OMNI',
    lat: 35.007583, lng: 135.769315, cuisine_type: 'donburi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sweet soy sauce on the yakiniku and sukiyaki bowls; wasabi soy sauce on the side (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and pork rice boxes topped with egg yolk (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–22:00 (last order 21:30); closing days not fixed; may close over New Year. Reservations taken — more than 15 minutes late counts as a cancellation; one dish per person. Buy a meal ticket at the entrance (February 2026). Rice small, regular or large at the same price (April 2026). 28 seats: 6 at the counter downstairs; tables for two and a 14-seat counter upstairs. Non-smoking. Cards, e-money and QR (PayPay, d Barai, au PAY). On Kawaramachi below Sanjo. Opened 3 February 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi below Sanjo — 5–10 min walk from Keihan Sanjo',
    cuisine: 'A meat rice-box (niku-juu) shop using its own-farm "Shiwase" beef, Kobe beef and rice from the Kyoto rice house Hachidaime Gihei (Tabelog; 2025–2026 reviews) · Kobe beef rare-steak juu with egg yolk, salt, wasabi and black shichimi ¥1,880 (August 2025), ¥1,840 (February 2026) · hamburg-steak juu, three 130 g patties ¥1,800 (August 2025) · sukiyaki lunch ¥1,100 (November 2025); sukiyaki bowl, sometimes sold out by early afternoon (May 2026) · pork chuck yakiniku juu ¥1,180 (September 2026) · a grilled-meat bowl only on the 29th of the month (August 2025); weekday-only limited bowls (December 2025)',
    website: null, gmaps: gm('肉重 北斎 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu rice boxes · Kawaramachi below Sanjo, steak bowls under ¥2,000] A two-floor meat-bowl counter on Kawaramachi serving rare Kobe-beef steak, sukiyaki and yakiniku over Hachidaime Gihei rice with a raw yolk on top, mostly ¥1,100–1,900. Buy a ticket at the door. Very popular with overseas visitors; one January 2026 diner called it average and priced for tourists. Open daily from 11:30.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 3 February 2024 (Tabelog). The Tabelog highlights name its own-farm "Shiwase Beef", Kobe beef and Hachidaime Gihei rice. Reviewers in 2025–2026 note mostly overseas customers, quick turnover and generous rice; criticism: "just \'average\'" with "somewhat aggressive" pricing (January 2026), and a sukiyaki that was "somewhat mild" (November 2025). No source links it to the duck restaurant 京の鴨料理 北斎 in Higashiyama.',
      philosophy: null,
      specialty: 'Kobe-beef rare-steak juu.',
      anecdotes: [
        { text: 'August 2025: "The meat changes color as it absorbs heat from the rice over time, so be sure to take photos quickly!"', source: R + 'B512694274/' },
        { text: 'January 2026: "about 90% of the customers in the restaurant were international tourists."', source: R + 'B521241884/' },
      ],
      japanese_sources_summary: '食べログ: 肉重 北斎、肉料理、中京区山崎町234-5、京阪三条駅から徒歩5〜10分、毎日 11:30〜22:00 (L.O. 21:30)、不定休、年末年始は休みのことも、予約可 (15分遅れで取消)、1人1品、28席 (1階カウンター6、2階テーブルとカウンター)、禁煙、カード・電子マネー・QR可、2024年2月3日オープン、自社牧場の「Shiwase Beef」と神戸牛、Hachidaime Gihei の米、法人会員。口コミ (2025年8月〜2026年9月、英語): 神戸牛のレアステーキ重1,880円・1,840円、ハンバーグ重1,800円、すき焼きランチ1,100円、豚の肩ロース焼肉重1,180円、29日限定の肉焼き重、平日限定、卵黄、塩・わさび醤油・黒七味、ご飯の量は同じ値段、食券制、海外の客が多い、普通で観光客向けの値段との声 (2026年1月)。',
      confidence: 'medium', sources: [TB, R + 'B512694274/', R + 'B512860603/', R + 'B513709320/', R + 'B514598652/', R + 'B516714022/', R + 'B518737223/', R + 'B519235833/', R + 'B521241884/', R + 'B522723188/', R + 'B526645912/', R + 'B527638598/', R + 'B536565323/'] },
    cultural_comfort: { level: 'japanese', note: 'Meal-ticket machine at the entrance; mostly overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町234-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007583, 135.769249), offset 6m east because kyoto_umezono_kawaramachi (山崎町234-4) sits 3.5m from the Tabelog point — now 5.9m from it; cross-checked: GSI 京都府京都市中京区山崎町234番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512694274/', R + 'B516714022/', R + 'B536565323/'],
    price_note: 'Prices from 2025–2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Kobe beef rare-steak juu', '¥1,840', 'Rice box', 'no', 'no', 'February 2026; ¥1,880 in August 2025.', 'steak_juu'),
      it('', '', 'Hamburg-steak juu (three 130 g patties)', '¥1,800', 'Rice box', 'no', 'no', 'August 2025.', 'hamburg_juu'),
      it('', '', 'Sukiyaki lunch', '¥1,100', 'Rice box', 'no', 'no', 'November 2025.', 'sukiyaki_juu'),
      it('', '', 'Pork chuck yakiniku juu', '¥1,180', 'Rice box', 'no', 'no', 'September 2026.', 'pork_yakiniku_juu'),
    ] }, {
    cuisine: '自社牧場の「Shiwase Beef」、神戸牛、京都の米屋 Hachidaime Gihei の米を使う肉重の店 (食べログ、2025〜2026年の口コミ)・卵黄、塩、わさび、黒七味で食べる神戸牛のレアステーキ重1,880円 (2025年8月)、1,840円 (2026年2月)・130gのハンバーグ3個のハンバーグ重1,800円 (2025年8月)・すき焼きランチ1,100円 (2025年11月)、昼過ぎに売り切れることもあるすき焼き重 (2026年5月)・豚の肩ロース焼肉重1,180円 (2026年9月)・毎月29日だけの肉焼き重 (2025年8月)、平日限定の重 (2025年12月)',
    neighborhood: '河原町三条下ル。京阪三条駅から徒歩5〜10分',
    gf_detail: 'グルテンフリーではない: 焼肉やすき焼きの重に甘い醤油だれ、わさび醤油も (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵黄をのせた牛肉と豚肉の重 (2025〜2026年の口コミ)。',
    notes: '[和牛の肉重・河原町三条下ル、2,000円以下のステーキ重] 河原町の2階建ての肉重の店で、神戸牛のレアステーキ、すき焼き、焼肉をHachidaime Gihei のご飯にのせ、卵黄を添える。多くは1,100〜1,900円。入口で食券を。海外の客が多く、普通で観光客向けの値段という声も (2026年1月)。毎日11時半から。',
  });
}

// ================================================================ ソリレス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023548/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_sot_l_y_laisse_kawaramachi', name: 'ソリレス (Sot-l\'y-laisse)', category: 'OMNI',
    lat: 34.999449, lng: 135.767991, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: karaage, fries, mixed noodles and chicken miso alongside the grill platters; ask about salted cuts (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a grill-it-yourself chicken and offal izakaya (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 18:00–24:00 (food last order 23:00, drinks 23:30); closing days not fixed. Reservations recommended — it fills up (April 2023; September 2026). 30 seats: tables and counter, some standing-bar style. Smoking allowed. Pets welcome; take-away. Cards and PayPay; no e-money. Ground floor of フジヨシビル on Kawaramachi above Matsubara. Opened 15 April 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi above Matsubara — 5 min walk from Kawaramachi or Kiyomizu-Gojo',
    cuisine: 'A dim, stylish chicken izakaya where you grill that morning\'s chicken yourself on a shichirin (Tabelog; 2023–2026 reviews) · assorted platter of 10+ cuts, thigh and wing to liver and heart, ¥2,500 for two (November 2025); with or without offal (September 2026) · Kara-age Mao Zedong ¥650; Sot-l\'y-laisse potato salad with chicken and soft egg ¥650; edamame aglio e olio ¥550; avocado with salt kombu; coriander fries (2023–2026) · soboro rice with egg yolk; mixed noodles to finish (January 2026) · seasonal fresh-fruit sours, e.g. persimmon ¥900 (November 2025; October 2026) · ¥5,000 course with all-you-can-drink (February and June 2026)',
    website: null, gmaps: gm('ソリレス 河原町松原'), menu_url: TB + 'dtlmenu/',
    notes: '[Grill-your-own yakitori · Kawaramachi-Matsubara, shichirin and fruit sours] A dim, stylish izakaya where you grill the day\'s chicken yourself over a shichirin — a 10-cut platter is ¥2,500 for two — with odd, good sides like Mao Zedong karaage and seasonal fresh-fruit sours. Book ahead; open till midnight. One reviewer found it too dark to judge doneness. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 15 April 2014 (Tabelog); the name is the French for the chicken "oyster" cut. Reviewers from 2023 to 2026 praise value, the unusual side dishes, friendly staff who recommend sake and wine, and seasonal fruit sours; criticism: dim light makes it "somewhat difficult to gauge the cooking level" and portions may be light for big eaters (February 2026), and some chairs near the entrance lacked backs (November 2025).',
      philosophy: null,
      specialty: 'Self-grilled chicken platters; fruit sours.',
      anecdotes: [
        { text: 'June 2026: "I didn\'t have a reservation, but they kindly allowed me to stay for 30 minutes… we left after just a little over 30 minutes."', source: R + 'B530610140/' },
        { text: 'January 2026: "Everything was so delicious that I ordered too much and ran out of time, so I took the mixed noodles to go!"', source: R + 'B522152261/' },
      ],
      japanese_sources_summary: '食べログ: ソリレス、居酒屋、下京区河原町松原上ル清水町284 フジヨシビル 1F、阪急河原町駅・京阪清水五条駅から徒歩5分、毎日 18:00〜24:00 (料理 L.O. 23:00、ドリンク L.O. 23:30)、不定休、予約可、30席、立ち飲み、喫煙可、ペット可、テイクアウト、カード・PayPay可、電子マネー不可、2014年4月15日オープン、朝しめた鶏を七輪で焼く焼き鳥、90分飲み放題のコース、法人会員。口コミ (2023年4月〜2026年10月、英語): 部位の盛り合わせ2人前2,500円、ホルモン入りとなし、唐揚げ「Mao Zedong」650円、ソリレスのポテサラ650円、枝豆のアーリオオーリオ550円、アボカドの塩昆布、パクチーのフライドポテト、そぼろご飯、締めの混ぜ麺、季節の生フルーツサワー (柿900円)、飲み放題コース5,000円、薄暗くて焼き加減がわかりにくい (2026年2月)、背もたれのない椅子 (2025年11月)、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B464446955/', R + 'B515326341/', R + 'B517024882/', R + 'B517112772/', R + 'B522152261/', R + 'B522745194/', R + 'B523246997/', R + 'B524919243/', R + 'B530610140/', R + 'B530772741/', R + 'B534040501/', R + 'B537489585/'] },
    cultural_comfort: { level: 'japanese', note: 'Grill-it-yourself; smoking allowed; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町松原上ル清水町284 フジヨシビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999449, 135.767991); cross-checked: GSI 京都府京都市下京区清水町284番地 (lot) 20m; nearest pin kyoto_ramen_taishi_kawaramachi 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522745194/', R + 'B530772741/'],
    price_note: 'Prices from November 2025 and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted chicken and offal platter (for two)', '¥2,500', 'Grill', 'ask', 'no', 'November 2025.', 'grill_platter'),
      it('', '', 'Kara-age Mao Zedong', '¥650', 'Fried', 'no', 'no', 'November 2025.', 'karaage'),
      it('', '', 'Sot-l\'y-laisse potato salad', '¥650', 'Side', 'ask', 'no', 'November 2025.', 'potato_salad'),
      it('', '', 'Edamame aglio e olio', '¥550', 'Side', 'ask', 'ask', 'November 2025.', 'edamame'),
      it('', '', 'Persimmon fresh-fruit sour', '¥900', 'Drink', 'ask', 'ask', 'November 2025.', 'fruit_sour'),
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'February and June 2026.', 'course_nomihodai'),
    ] }, {
    cuisine: '朝しめた鶏を七輪で自分で焼く、薄暗くおしゃれな鶏の居酒屋 (食べログ、2023〜2026年の口コミ)・10種以上の部位の盛り合わせ、ももや手羽からレバー、ハツまで2人前2,500円 (2025年11月)、ホルモン入りとなし (2026年9月)・唐揚げ「Mao Zedong」650円、鶏と半熟卵のソリレスのポテサラ650円、枝豆のアーリオオーリオ550円、アボカドの塩昆布、パクチーのフライドポテト (2023〜2026年)・卵黄のそぼろご飯、締めの混ぜ麺 (2026年1月)・季節の生フルーツサワー、柿900円など (2025年11月、2026年10月)・飲み放題付きコース5,000円 (2026年2月・6月)',
    neighborhood: '河原町松原上ル。河原町駅・清水五条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 盛り合わせのほかに唐揚げ、フライドポテト、混ぜ麺、鶏味噌。塩の部位は要確認 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏とホルモンを自分で焼く居酒屋 (食べログ、口コミ)。',
    notes: '[七輪で焼く焼き鳥・河原町松原、七輪とフルーツサワー] 薄暗くおしゃれな居酒屋で、その日の鶏を七輪で自分で焼く。10種の盛り合わせは2人で2,500円、唐揚げ「Mao Zedong」などの変わったつまみと季節の生フルーツサワー。予約を、深夜0時まで。暗くて焼き加減がわかりにくいという声も。喫煙可。',
  });
}

// ================================================================ 邦匠
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023164/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '27:00']);
  put({
    id: 'kyoto_kunisho_kawaramachi_sanjo', name: '邦匠 (Kunisho)', category: 'OMNI',
    lat: 35.007578, lng: 135.769738, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sauce-grilled offal, fried lung and soy-based dips (2019–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef offal and raw-meat counter (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 17:30–27:00 (3 am; last order 26:00); closed the third Sunday and Monday of each month and the fifth Sunday. An August 2025 blog review gives 17:30–01:00. Reservations taken; private hire for 5 or more by arrangement. 10 seats: 5 at the counter and a table for 5. Smoking allowed. BYO drinks allowed (Tabelog). Cards and Rakuten Pay; no e-money. 2nd floor of 六角ビル on Kawaramachi below Sanjo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi below Sanjo — 5 min walk from Keihan Sanjo exit 6',
    cuisine: 'A ten-seat late-night horumon (beef offal) counter run by its owner (2013–2026 reviews) · fresh white omasum with ginger soy ¥1,000; omelette with fried pork fat ¥1,000; agi (cheek) ¥800; fried lung ¥500 (August 2025) · meat sashimi; heart sashimi with mustard soy; sauce-grilled hoso (small intestine) (August 2026) · blanched tripe with a chewy bite (January 2019); tail soup; mixed horumon grill; simmered beef tendon; oden (December 2024) · omakase on request (2023; 2023)',
    website: null, gmaps: gm('邦匠 河原町三条 六角ビル'), menu_url: null,
    notes: '[Horumon counter · Kawaramachi below Sanjo, offal and raw meat till 3 am] A ten-seat upstairs counter where a talkative ex-rugby-player owner serves very fresh beef offal — white omasum, heart sashimi, sauce-grilled hoso, tail soup — until 3 am, often as omakase. Not cheap, and the room is a bit worn. Smoking allowed. Closed the third Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A September 2023 reviewer writes that "the restaurant is run solely by a charming owner, a former rugby player", and later reviewers praise the owner\'s talk and omakase (December 2024; November 2023). Reviewers rate the freshness of the offal and raw meat; one December 2024 diner calls the room "a bit unkempt" but with "the charm of a long-established eatery", and a February 2026 diner says prices "are not exactly cheap" but justified.',
      philosophy: null,
      specialty: 'Fresh horumon; raw meat.',
      anecdotes: [
        { text: 'January 2019: "It may seem like just hot water blanched tripe, but oh, the texture!"', source: R + 'B411318833/' },
        { text: 'November 2023: "I couldn\'t get into any of the famous and popular yakiniku restaurants… after letting the owner choose various dishes for me, everything was delicious."', source: R + 'B537978979/' },
      ],
      japanese_sources_summary: '食べログ: 邦匠、ホルモン・居酒屋・ダイニングバー、中京区河原町三条下ル二丁目山崎町236 六角ビル 2F、京阪三条駅6番出口から徒歩5分、毎日 17:30〜翌3:00 (L.O. 翌2:00)、毎月第3日曜・月曜と第5日曜休み、予約可、5名以上で貸切相談可、10席 (カウンター5、テーブル5)、喫煙可、持ち込み可、カード・楽天ペイ可、電子マネー不可、法人会員。口コミ (2013年12月〜2026年8月、英語): 元ラガーマンの店主がひとりで営む (2023年9月)、生センマイ1,000円、揚げた脂かすの卵焼き1,000円、アギ800円、フワの唐揚げ500円、肉刺し、ハツ刺し、ホソのたれ焼き、湯がいたミノ、テールスープ、ホルモンのミックス焼き、牛すじ煮込み、おでん、おまかせ、少し雑然としている (2024年12月)、安くはないが納得の値段 (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B115919333/', R + 'B411318833/', R + 'B474040803/', R + 'B497131430/', R + 'B514295558/', R + 'B523097046/', R + 'B528230579/', R + 'B537978979/'] },
    cultural_comfort: { level: 'japanese', note: 'Ten-seat counter; smoking allowed; raw meat on the menu.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下ル二丁目山崎町236 六角ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007578, 135.769738); cross-checked: GSI 京都府京都市中京区山崎町236番地 (lot) 3m; nearest pin kyoto_kyokara_kiyamachi 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514295558/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Fresh white omasum', '¥1,000', 'Horumon', 'ask', 'no', 'August 2025.', 'senmai'),
      it('', '', 'Omelette with fried fat scraps', '¥1,000', 'Teppan', 'ask', 'no', 'August 2025.', 'aburakasu_omelette'),
      it('', '', 'Agi (beef cheek)', '¥800', 'Horumon', 'ask', 'no', 'August 2025.', 'agi'),
      it('', '', 'Fried lung', '¥500', 'Fried', 'no', 'no', 'August 2025.', 'fried_lung'),
    ] }, {
    cuisine: '店主が営む10席の深夜のホルモンのカウンター (2013〜2026年の口コミ)・生の白センマイのしょうが醤油1,000円、揚げた脂かすの卵焼き1,000円、アギ800円、フワの唐揚げ500円 (2025年8月)・肉刺し、からし醤油のハツ刺し、ホソのたれ焼き (2026年8月)・歯ごたえのある湯がいたミノ (2019年1月)、テールスープ、ホルモンのミックス焼き、牛すじ煮込み、おでん (2024年12月)・頼めばおまかせ (2023年)',
    neighborhood: '河原町三条下ル。京阪三条駅6番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: たれ焼きのホルモン、フワの唐揚げ、醤油のたれ (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛のホルモンと生肉のカウンター (食べログ、口コミ)。',
    notes: '[ホルモン・河原町三条下ル、深夜3時までのホルモンと生肉] 2階の10席のカウンターで、話好きの元ラガーマンの店主が、白センマイ、ハツ刺し、ホソのたれ焼き、テールスープなど新鮮な牛ホルモンを深夜3時まで、おまかせでも。安くはなく、店内は少し雑然。喫煙可。第3日曜・月曜休み。',
  });
}

// ================================================================ 花たぬき 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013018/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hanatanuki.jp/';
  const H = day(['12:00', '23:00']);
  put({
    id: 'kyoto_hanatanuki_kawaramachi', name: '花たぬき 河原町店 (Hana Tanuki Kawaramachi)', category: 'OMNI',
    lat: 35.007592, lng: 135.768121, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: flour-batter betayaki, okonomiyaki, monjayaki and yakisoba (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: betayaki with aburakasu, pork, beef and seafood (official site; reviews).',
    hours_raw: 'Tabelog: daily 12:00–23:00 (food last order 22:00, drinks 22:30); open all year. Reservations taken (Tabelog bookings for two or more). Service charge 5% from 1 October 2026, courses excepted — Tabelog, Japanese original 「2026年10月1日より、サービス料として５％頂戴します（コース料理は除く）」. 52 seats with tall partitions and three private tables for 2–4; private hire 20–50. Non-smoking. Smartphone ordering; free Wi-Fi; take-away. Cards, e-money and QR (PayPay, Rakuten Pay). Off Shinkyogoku below Sanjo. One of four 花たぬき shops (official site: 河原町店, 京都駅前店, 御池店, 梅津店).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Shinkyogoku below Sanjo — 5 min walk from Keihan Sanjo or Hankyu Kawaramachi',
    cuisine: 'A Kyoto okonomiyaki house specialising in thin "betayaki" and teppan dishes (official site; 2025–2026 reviews) · special tanuki-yaki with homemade aburakasu, with soba or udon (Tabelog) — ¥1,490 (November 2025) · Happy Creamy Cheese teppan-yaki ¥1,590; Wagyu furoshiki teppan-yaki, seared with a burner at the table ¥2,690 (November 2025) · Kujo-leek okonomiyaki; buttered grilled oysters; beef skirt stamina teppan with whole garlic (February 2026) · monjayaki cooked for you by staff (August 2025; February 2026); okonomiyaki and monjayaki all-you-can-eat ¥2,500 (February 2025), ¥2,900 (January 2026) · dashi omelette; grilled tongue with leeks; potato salad (2025)',
    website: SITE, gmaps: gm('花たぬき 河原町店'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki · Shinkyogoku below Sanjo, Kyoto betayaki and monja] A roomy, partitioned teppan house near Shinkyogoku for Kyoto-style betayaki — the house tanuki-yaki with aburakasu — cheese and Wagyu teppan dishes, and monjayaki cooked at your table, plus all-you-can-eat courses. Open noon to 11 pm daily; 5% service from October 2026. One of four local shops.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'The official site calls 花たぬき a specialist in Kyoto\'s flour dish "betayaki" and lists four shops, of which this is one. Reviewers in 2025–2026 praise friendly, fluent staff who cook monjayaki for you, big portions and value; criticism: an hour\'s wait for one teppan dish (August 2025), garlic-heavy grilled horumon (September 2025), an okonomiyaki that "didn\'t feel particularly special" (February 2026) and a warm room (October 2025).',
      philosophy: null,
      specialty: 'Tanuki-yaki betayaki with aburakasu.',
      anecdotes: [
        { text: 'February 2025: "Making okonomiyaki was challenging... it ended up looking like just stir-fried vegetables."', source: R + 'B485591444/' },
        { text: 'February 2026: "Since there are few places to enjoy monjayaki in Kyoto, I highly recommend this spot."', source: R + 'B523728826/' },
      ],
      japanese_sources_summary: '公式サイト: 花たぬき、京都の粉もん「べた焼」の専門店、お好み焼・鉄板焼・焼きそば、店舗は河原町店・京都駅前店・御池店・梅津店。食べログ: 花たぬき 河原町店、お好み焼き・居酒屋・鉄板焼き、中京区新京極通三条下ル東入ル松ヶ枝町456-6、毎日 12:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、無休、予約可、原文で「2026年10月1日より、サービス料として５％頂戴します（コース料理は除く）」、52席、個室席3、貸切20〜50名、禁煙、カード・電子マネー・QR可、テイクアウト、名物は自家製あぶらかすの特製たぬき焼 (そばかうどん)。口コミ (2025年2月〜2026年2月、英語): たぬき焼1,490円、クリームチーズの鉄板焼1,590円、和牛で包んだ鉄板焼2,690円、九条ねぎのお好み焼き、牡蠣のバター焼き、ハラミのスタミナ鉄板焼、店員が焼くもんじゃ、食べ放題2,500円・2,900円、だし巻き、ねぎタン、ポテサラ、スマホで注文、鉄板焼で1時間待ち (2025年8月)、にんにくが強い (2025年9月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B485591444/', R + 'B511611844/', R + 'B512863289/', R + 'B515370510/', R + 'B516678949/', R + 'B516894890/', R + 'B519158123/', R + 'B522398725/', R + 'B523728826/', R + 'B526951112/'] },
    cultural_comfort: { level: 'japanese', note: 'Smartphone ordering; staff cook monjayaki at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通三条下ル東入ル松ヶ枝町456-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (service-charge notice for October 2026) with reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.007592, 135.768121); cross-checked: GSI 京都府京都市中京区松ケ枝町456番地 (lot) 15m; nearest pin kyr_kyo_tsukemen_tsurukame_r 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516678949/', R + 'B516894890/'],
    price_note: 'Prices from 2025–2026 reviews; 5% service from October 2026 (courses excepted).', last_checked: TODAY, items: [
      it('特製たぬき焼', '', 'Special tanuki-yaki (betayaki with aburakasu)', '¥1,490', 'Betayaki', 'no', 'no', 'November 2025.', 'tanuki_yaki'),
      it('', '', 'Happy Creamy Cheese teppan-yaki', '¥1,590', 'Teppan', 'no', 'no', 'November 2025.', 'cheese_teppan'),
      it('', '', 'Wagyu furoshiki teppan-yaki', '¥2,690', 'Teppan', 'no', 'no', 'November 2025.', 'wagyu_teppan'),
      it('', '', 'Okonomiyaki and monjayaki all-you-can-eat', '¥2,900', 'Course', 'no', 'no', 'January 2026; ¥2,500 in February 2025.', 'tabehodai'),
    ] }, {
    cuisine: '薄い「べた焼」と鉄板料理の京都のお好み焼き店 (公式サイト、2025〜2026年の口コミ)・自家製あぶらかすの特製たぬき焼、そばかうどん (食べログ)、1,490円 (2025年11月)・クリームチーズの鉄板焼1,590円、目の前でバーナーで炙る和牛で包んだ鉄板焼2,690円 (2025年11月)・九条ねぎのお好み焼き、牡蠣のバター焼き、にんにく丸ごとのハラミのスタミナ鉄板焼 (2026年2月)・店員が焼いてくれるもんじゃ (2025年8月、2026年2月)、お好み焼きともんじゃの食べ放題2,500円 (2025年2月)、2,900円 (2026年1月)・だし巻き、ねぎタン、ポテサラ (2025年)',
    neighborhood: '新京極三条下ル東入ル。京阪三条駅・阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 粉の生地のべた焼、お好み焼き、もんじゃ、焼きそば (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: あぶらかす入りのべた焼、豚、牛、魚介 (公式サイト、口コミ)。',
    notes: '[お好み焼き・新京極三条下ル、京のべた焼ともんじゃ] 新京極近くの仕切りのある広い鉄板の店。名物のあぶらかすのたぬき焼などの京風べた焼、チーズや和牛の鉄板焼、席で焼いてくれるもんじゃ、食べ放題も。毎日12時〜23時、2026年10月からサービス料5%。市内4店のひとつ。',
  });
}

save();
