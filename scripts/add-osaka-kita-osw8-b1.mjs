// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 1.
//   + 炭火焼鳥 小鉄 西中島店 Sumibi Yakitori Kotetsu Nishinakajima ten (20-seat yakitori over Kishu binchotan, jazz playing; opened about 2018)
//   + 中華料理 香満楼 Chinese Komandou (Chinese canteen and all-you-can-eat banquets off Nishinakajima, since May 2019)
//   + オレ達のタコ部屋 Ore Tachi no Tako Beya (taco and tequila bar since 2011, open until 5 a.m. on weekdays)
//   + Bella Locanda Italiana (Italian restaurant of the Holiday Inn & Suites Shin-Osaka, opened December 2025; afternoon tea)
//   Chain check: Kotetsu: the listing carries a branch suffix (西中島店), but web searches (2026-11-01) find no other 小鉄 yakitori
//   shop in Osaka, and the reviews describe an owner-chef working with the owner's wife and one young staff member; not a chain.
//   Komandou: one shop (Tabelog names no sister shop; a web search finds none). Ore Tachi no Tako Beya: one bar, moved from
//   Higashinakajima (Tabelog remarks); oretako2018.com shows no other shop. Bella Locanda Italiana: the one restaurant of the
//   Holiday Inn & Suites Shin-Osaka (Tabelog, "hotel restaurant"); the hotel brand is international, the restaurant is not a chain.
//   None is in data/osaka.json (grep by id, name and address 西中島 / 西宮原, 2026-11-01); no record within 100 m of any of the four.
//   Tabelog URLs copied from each listing.txt line 1. The hotel's restaurant page (hisuite-shinosaka.com/restaurant/) answered
//   503 "メンテナンス中" on 2026-11-01, so every Bella Locanda fact comes from Tabelog and its reviews.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭火焼鳥 小鉄 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27097781/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '00:00']);
  put({
    id: 'osaka_sumibi_yakitori_kotetsu_nishinakajima', name: '炭火焼鳥 小鉄 西中島店 (Sumibi Yakitori Kotetsu Nishinakajima ten)', category: 'OMNI',
    lat: 34.729369, lng: 135.496923, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori with sauces and seasonings not described, plus tempura (maitake, broccoli, chicken), fried dishes, chicken nanban, ramen and noodles to finish a hot pot.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; the finishing rice and soup are made with chicken soup (Tabelog). The cabbage starter comes with miso, but no vegan dish is named.',
    hours_raw: 'Mon–Sat 17:30–24:00; closed Sunday (Tabelog). Reservations accepted (Tabelog) and in practice needed: groups without a booking were turned away in August and September 2026, and a weekday at 18:00 was almost full (September 2026); a Saturday at opening was quiet because the nearby offices are closed (September 2026). Cards (VISA, Master, JCB, AMEX); no e-money (Tabelog). 20 seats: 6 at the counter and 14 at tables; no private rooms; whole-shop hire possible; smoking allowed at every seat (Tabelog; September 2026). The chicken-soup rice takes about 20 minutes, so order it early (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: [] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島6-3-32, ground floor of 第二新大阪ビル, behind wooden doors halfway between Shin-Osaka Stn and Nishinakajima-Minamigata Stn (Tabelog) — 7 min from either, or from Hankyu Minamikata',
    cuisine: 'Yakitori of Daisen jidori chicken grilled over Kishu binchotan, with sake and shochu (Tabelog; a June 2024 review also names Daisen jidori) · the shop\'s picks: sasami with wasabi and a liver "completely odorless" (Tabelog) · skewer prices (September 2026): neck ¥290, tail ¥290, heart ¥260, gizzard ¥260 · fried wings ¥340, fried chicken neck ¥620, cabbage with miso starter ¥440, chicken-soup rice ¥1,050, draft beer ¥600, oolong tea ¥340 (September 2026) · omakase of five skewers served one at a time: sasami with plum, gizzard, heart, thigh, neck (August 2026) · chicken sashimi and tataki, grilled liver, kombu-cured sasami, sasami with mentaiko, sasami cheese nanban, soup kamameshi and chicken soup (June–August 2026) · garlic potato salad, sasami tartare with lemon, broccoli tempura (May 2026) · chicken namero, chicken skin with ponzu, poached breast with green-onion sauce, deep-fried tofu (May 2026) · fish of the day as sashimi, hagatsuo in February 2026 · ramen to finish (August 2026) · finishing dishes made with chicken soup simmered five hours; a winter one-person iron pot (Tabelog) · courses with 90 minutes of drinks, 2–12 people: kamameshi course ¥5,500, hot pot course ¥6,000, starters, hot pot and yakitori ¥7,000; all-you-can-drink ¥4,500 (Tabelog, tax included) · about ¥4,000 a head if you don\'t drink much (September 2026); about ¥7,000 with drinks (June 2026)',
    website: null, gmaps: gm('炭火焼鳥 小鉄 西中島店'), menu_url: null,
    notes: "[Yakitori · Nishinakajima, a binchotan counter among offices] A 20-seat yakitori shop behind wooden doors in the office blocks between Shin-Osaka and Nishinakajima-Minamigata, open since about 2018 and full most weeknights, often with office parties. The chicken is Daisen jidori over Kishu binchotan, with jazz playing because the owner thought it \"fits the ambiance\" (September 2026). Skewers come one at a time, in order: sasami with wasabi or plum, neck, heart, gizzard, thigh, tsukune, about ¥260–290 each (2026). Around them, more than a yakitori shop needs: chicken sashimi and namero, a fish of the day, broccoli and maitake tempura, sasami cheese nanban, and a kamameshi cooked in chicken soup to finish (it takes 20 minutes, so order it first). A weekday visit means booking ahead; a Saturday is calmer. Every seat is smoking.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), at the grill', 'The owner\'s wife and a young staff member (September 2026 review)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: yakitori of fresh Daisen jidori chicken grilled slowly over Kishu binchotan, in a calm room with wooden doors and jazz, between Shin-Osaka and Nishinakajima-Minamigata. An April 2019 diner wrote that the shop "opened about a year ago". Per reviews: "The quiet chef is clearly a dedicated professional" (December 2019); "The owner is passionate about [the] work" (August 2026); "The chef handles everything alone, so the service may be a bit slow" (September 2026); on a September 2026 Saturday "the master was alone" at opening, and the owner\'s wife and a young staff member arrived before 18:00.',
      philosophy: '"A commitment to perfection in yakitori" (Tabelog).', specialty: 'Yakitori over binchotan; chicken sashimi; chicken-soup kamameshi.',
      anecdotes: [
        { text: '"I asked the master, \'Do you like JAZZ?\' and [the master] smiled, saying, \'I thought it fits the ambiance.\'" — September 2026, a Saturday at opening.', source: R + 'B535757731/' },
        { text: '"I ordered five skewers, and they were served one at a time, in the right order, allowing me to truly enjoy each one." — April 2026.', source: R + 'B522904635/' },
        { text: '"Every time I went to the restroom, a female staff member kindly brought me a new oshibori." — September 2026.', source: R + 'B534332964/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼鳥 小鉄 西中島店、焼鳥・居酒屋・日本料理、大阪市淀川区西中島6-3-32 第二新大阪ビル 1F、西中島南方駅・新大阪駅・Hankyu Minamikata 駅から徒歩7分、月〜土17:30〜24:00、日曜休み、予約可、カード可、電子マネー不可、20席 (カウンター6、テーブル14)、個室なし、貸切可、喫煙可。店の紹介: Daisen の地鶏を Kishu の備長炭でじっくり焼く、木の扉とジャズの落ち着いた空間、ささみわさびと臭みのないレバー、5時間煮込んだ鶏スープの締め、日本酒と焼酎、飲み放題4,500円、冬限定のひとり用の小さな鉄鍋。コース (90分飲み放題つき、税込): 釜飯のコース5,500円、鍋のコース6,000円、前菜と鍋と焼鳥のコース7,000円。口コミ(2019年4月〜2026年9月): 開店は約1年前 (2019年4月)、もの静かな大将 (2019年12月)、予約必須、平日はほぼ満席、土曜は空いている、ジャズ、大将の奥さんと若いスタッフ、串はひとつずつ順番に、セセリ、ささみ、砂肝、ハツ、もも、つくね、ぼんじり、つなぎ、鶏刺し、たたき、鶏のなめろう、鶏皮ポン酢、キャベツと味噌、ブロッコリーと舞茸の天ぷら、チキン南蛮、鶏スープの釜飯、ラーメン、その日の魚の刺身、全席喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B267546935/', R + 'B476567917/', R + 'B497778751/', R + 'B522904635/', R + 'B528004226/', R + 'B533163397/', R + 'B534332964/', R + 'B535757731/', R + 'B536267457/', R + 'B537532714/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small, busy shop; book by phone or on Tabelog. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-3-32 第二新大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目3番32号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535757731/', R + 'B497778751/'],
    price_note: 'Skewer and side prices from a September 2026 review; course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('セセリ', '', 'Chicken neck skewer', '¥290', 'Yakitori', 'ask', 'no', 'September 2026.', 'seseri'),
      it('', '', 'Chicken tail skewer', '¥290', 'Yakitori', 'ask', 'no', 'September 2026.', 'bonjiri'),
      it('', '', 'Heart skewer', '¥260', 'Yakitori', 'ask', 'no', 'September 2026.', 'hatsu'),
      it('', '', 'Gizzard skewer', '¥260', 'Yakitori', 'ask', 'no', 'September 2026.', 'sunagimo'),
      it('', '', 'Omakase of five skewers', '', 'Yakitori', 'ask', 'no', 'August 2026.', 'omakase_5'),
      it('', '', 'Fried chicken wings', '¥340', 'Side dishes', 'ask', 'no', 'September 2026.', 'tebasaki'),
      it('', '', 'Cabbage with miso (starter)', '¥440', 'Side dishes', 'ask', 'ask', 'September 2026.', 'miso_cabbage'),
      it('鶏のなめろう', '', 'Chicken namero', '', 'Side dishes', 'ask', 'no', 'May 2026.', 'tori_namero'),
      it('鶏皮ポン酢', '', 'Chicken skin with ponzu', '', 'Side dishes', 'ask', 'no', 'August 2026.', 'torikawa_ponzu'),
      it('', '', 'Chicken-soup rice (about 20 minutes)', '¥1,050', 'Rice', 'ask', 'no', 'September 2026.', 'kamameshi'),
      it('', '', 'Kamameshi course with 90 minutes of drinks (2–12 people)', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'kamameshi_course'),
    ] }, {
    cuisine: 'Daisen の地鶏を Kishu の備長炭で焼く焼鳥と、日本酒、焼酎 (食べログ。2024年6月の口コミにも Daisen の地鶏)・店のおすすめ: ささみわさびと、臭みのまったくないレバー (食べログ)・串の値段 (2026年9月): セセリ290円、ぼんじり290円、ハツ260円、砂肝260円・手羽先の揚げ物340円、セセリの揚げ物620円、お通しのキャベツと味噌440円、鶏スープのごはん1,050円、生ビール600円、ウーロン茶340円 (2026年9月)・ひとつずつ出てくるおまかせの串5本: ささみ梅、砂肝、ハツ、もも、セセリ (2026年8月)・鶏刺しとたたき、レバーの焼き、ささみの昆布じめ、ささみ明太、ささみのチーズ南蛮、スープの釜飯と鶏スープ (2026年6月〜8月)・ガーリックポテトサラダ、ささみのタルタル レモン風味、ブロッコリーの天ぷら (2026年5月)・鶏のなめろう、鶏皮ポン酢、むね肉のねぎソース、厚揚げ (2026年5月)・その日の魚の刺身、2026年2月はハガツオ・締めのラーメン (2026年8月)・5時間煮込んだ鶏スープの締め、冬はひとり用の小さな鉄鍋 (食べログ)・90分飲み放題つきのコース、2〜12名: 釜飯のコース5,500円、鍋のコース6,000円、前菜と鍋と焼鳥のコース7,000円、飲み放題4,500円 (食べログ、税込)・あまり飲まなければひとり約4,000円 (2026年9月)、飲んで約7,000円 (2026年6月)',
    neighborhood: '西中島6-3-32、第二新大阪ビルの1階、木の扉の店。新大阪駅と西中島南方駅のあいだ (食べログ)。どちらからも、Hankyu Minamikata 駅からも徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。焼鳥のたれや味つけの説明はなく、舞茸、ブロッコリー、鶏の天ぷら、揚げ物、チキン南蛮、ラーメン、鍋の締めの麺もある。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、締めのごはんとスープは鶏スープ (食べログ)。お通しのキャベツには味噌がつくが、ヴィーガンの料理はない。',
    notes: '[焼鳥・西中島、オフィス街の備長炭の店] 新大阪と西中島南方のあいだのオフィス街、木の扉の奥にある20席の焼鳥店で、2018年ごろから。平日の夜は会社の宴会などでほぼ満席。鶏は Daisen の地鶏で、Kishu の備長炭で焼く。ジャズが流れているのは、店の雰囲気に合うと思ったからだと大将 (2026年9月)。串はひとつずつ順番に出てくる: ささみのわさびや梅、セセリ、ハツ、砂肝、もも、つくね、1本約260〜290円 (2026年)。まわりの料理も焼鳥店以上で、鶏刺しやなめろう、その日の魚、ブロッコリーや舞茸の天ぷら、ささみのチーズ南蛮、締めは鶏スープで炊く釜飯 (20分かかるので最初に注文を)。平日は予約を。土曜は落ち着いている。全席喫煙可。',
  });
}

// ================================================================ 中華料理 香満楼
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27111519/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_chinese_komandou_nishinakajima', name: '中華料理 香満楼 (Chinese Komandou)', category: 'OMNI',
    lat: 34.729204, lng: 135.496989, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A Chinese menu of noodles, dumplings, spring rolls, fried chicken and sauced stir-fries; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese menu built on pork, beef, chicken, duck and seafood; no vegan dish is named.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30); closing days not fixed (Tabelog). Lunch set meals cannot be booked; book for the lunch all-you-can-eat course (Tabelog). Often a line at lunch (August 2026) and packed on a Friday night without a booking (October 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 48 seats; parties of 30–50 by reservation; smoking allowed, at the tables too (Tabelog; September 2026). Takeaway (Tabelog). Opened 28 May 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島6-4-17, a side street between Shin-Osaka and Nishinakajima-Minamigata — 5 min from either station (Tabelog)',
    cuisine: 'Chinese, from shrimp chili and mapo tofu to Peking duck and shark-fin soup (Tabelog) · lunch: a daily set ¥800, shark-fin-sauce fried rice set ¥1,050, only set meals or noodles a la carte (August 2026); sets around ¥800 (October 2026); rice changed to fried rice or a mini ramen added for ¥100 (March 2025) · dishes: Cantonese steamed chicken ¥450, Peking duck ¥1,980 (August 2026); tomato and egg, roast pork, spicy beef stir-fry, Taiwanese ramen (September 2026); hot and sour noodle soup with thin noodles; mapo hot pot set (March 2025); green pepper beef set and mapo tofu set (October 2026) · quick-drink set: a beer with one dish from mapo tofu, shrimp chili or spring rolls and one from dumplings or salad ¥1,200 (October 2026) · two-hour all-you-can-order buffets of 50 dishes (sweet and sour pork, soup dumplings, shrimp chili, twice-cooked pork …): with drinks ¥3,800 at dinner or ¥3,500 at lunch, food only ¥3,000; under-3s free, primary-school children ¥1,500 (Tabelog, tax included) · courses for four or more from ¥3,980 with abalone, shark fin and Peking duck (Tabelog)',
    website: null, gmaps: gm('中華料理 香満楼 西中島'), menu_url: null,
    notes: "[Chinese · Nishinakajima, a local Chinese canteen] A 48-seat Chinese restaurant on a side street between Shin-Osaka and Nishinakajima-Minamigata, open since 2019, with an eye-catching front and a staff from China, quick and friendly (2025). At lunch it fills up for set meals around ¥800, a mapo hot pot set or shark-fin-sauce fried rice, with fried rice or a mini ramen for ¥100 more; dishes come in about four minutes (March 2025). In the evening it turns into a banquet hall: a two-hour all-you-can-order buffet of 50 dishes with drinks for ¥3,800, booked out on Fridays (October 2026), or small plates like Cantonese steamed chicken (¥450) and Peking duck (¥1,980). Flavours run mild to fiery; one diner found the spicy beef stir-fry hot even for a chilli lover (September 2026). Smoking is allowed at the tables; one diner who dislikes smoke booked 17:30 on a Sunday (October 2026).",
    chef_bio: { chef_name: null, roles: ['Chinese chef (unnamed), over 10 years of experience (Tabelog)', 'Kitchen and floor staff from China (2025 reviews)'], origin: 'China (a "Chinese chef" per Tabelog; staff from China per 2025 reviews)',
      background: 'Per the shop-maintained Tabelog listing: authentic Chinese cooking by a Chinese chef with more than ten years of experience, for everyday meals and banquets; opened 28 May 2019. Per reviews: "All the staff are from China and very friendly" (May 2025); "the cooking and service are handled by staff from China. It took about 4 minutes from ordering to serving" (March 2025).',
      philosophy: '"Enjoy authentic Chinese cuisine with mild spice for everyday use" (Tabelog).', specialty: 'Set lunches; all-you-can-order Chinese buffet with drinks.',
      anecdotes: [
        { text: '"A woman who works nearby mentioned that there\'s often a line during lunch hours." — August 2026, a golf-school dinner on the all-you-can-eat plan.', source: R + 'B532880024/' },
        { text: '"The Cantonese-style steamed chicken is JPY 450! It\'s small, but incredibly delicious." — August 2026.', source: R + 'B534970347/' },
        { text: '"Initially, the online information stated that we would receive three dishes before placing additional orders, but … this had suddenly changed to five dishes." — October 2026, a Sunday at 17:30.', source: R + 'B538084875/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中華料理 香満楼、中華料理・居酒屋・ラーメン、大阪府淀川区西中島6-4-17、新大阪駅と西中島南方駅から徒歩5分、毎日11:00〜15:00 (L.O.14:30)、17:00〜23:00 (L.O.22:30)、不定休、ランチの定食は予約不可、カードと PayPay 可、電子マネー不可、48席 (30〜50名の貸切予約可)、喫煙可、テイクアウト、2019年5月28日オープン。店の紹介: 経験10年以上の中国人シェフの本格中華、エビチリ、麻婆豆腐、北京ダック、フカヒレスープ。プラン (税込): 50品の2時間オーダー食べ飲み放題3,800円、ランチは3,500円、食べ放題のみ3,000円、3歳未満無料、小学生以上1,500円、食べ残しは追加料金、4名以上のコース3,980円から (アワビ、フカヒレ、北京ダック)。口コミ(2025年3月〜2026年10月): スタッフは中国出身で親切、料理は約4分で出る、日替わりランチ800円、フカヒレあんかけチャーハン定食1,050円、ごはんをチャーハンに、またはミニラーメンを100円で、酸辣湯麺、麻婆鍋定食、ピーマンと牛肉の炒め物の定食、トマトと卵の炒め物、チャーシュー、台湾ラーメン、蒸し鶏450円、北京ダック1,980円、ちょい飲みセット1,200円、昼は行列、金曜は予約なしでは入れない、テーブルで喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B502494881/', R + 'B532880024/', R + 'B534470154/', R + 'B534970347/', R + 'B535625409/', R + 'B537398252/', R + 'B537420561/', R + 'B537963114/', R + 'B538084875/', R + 'B538121232/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff from China (2025 reviews); quick service. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-4-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目4番17号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534470154/', R + 'B534970347/', R + 'B537420561/'],
    price_note: 'Plan prices from the Tabelog listing (tax included); dish prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set', '¥800', 'Lunch', 'ask', 'no', 'August 2026.', 'daily_lunch'),
      it('', '', 'Shark-fin-sauce fried rice set', '¥1,050', 'Lunch', 'ask', 'no', 'August 2026.', 'fukahire_chahan_set'),
      it('', '', 'Cantonese steamed chicken', '¥450', 'Dishes', 'ask', 'no', 'August 2026.', 'steamed_chicken'),
      it('', '', 'Peking duck', '¥1,980', 'Dishes', 'ask', 'no', 'August 2026.', 'peking_duck'),
      it('', '', 'Quick-drink set: beer and two small dishes', '¥1,200', 'Drinks', 'ask', 'no', 'October 2026.', 'choinomi_set'),
      it('', '', 'Two-hour all-you-can-order buffet of 50 dishes with drinks', '¥3,800', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'buffet_drinks'),
      it('', '', 'Two-hour all-you-can-order buffet, food only', '¥3,000', 'Courses', 'ask', 'no', 'Tabelog.', 'buffet_food'),
    ] }, {
    cuisine: 'エビチリや麻婆豆腐から北京ダック、フカヒレスープまでの中華 (食べログ)・昼: 日替わり定食800円、フカヒレあんかけのチャーハン定食1,050円、昼は定食か単品の麺だけ (2026年8月)・定食は約800円 (2026年10月)・100円でごはんをチャーハンに、またはミニラーメンを追加 (2025年3月)・料理: 広東風の蒸し鶏450円、北京ダック1,980円 (2026年8月)・トマトと卵の炒め物、チャーシュー、牛肉と野菜の辛い炒め物、台湾ラーメン (2026年9月)・細麺の酸辣湯麺、麻婆鍋の定食 (2025年3月)・ピーマンと牛肉の炒め物の定食、麻婆豆腐の定食 (2026年10月)・ちょい飲みセット: ビールに、麻婆豆腐、エビチリ、春巻きからひとつ、サラダなどからひとつで1,200円 (2026年10月)・50品から選ぶ2時間のオーダー食べ放題 (酢豚、小籠包、エビチリ、回鍋肉など): 飲み放題つきで夜3,800円、昼3,500円、食べ放題のみ3,000円、3歳未満は無料、小学生以上は1,500円 (食べログ、税込)・4名以上のコースは3,980円から、アワビ、フカヒレ、北京ダック (食べログ)',
    neighborhood: '西中島6-4-17、新大阪と西中島南方のあいだの路地。どちらの駅からも徒歩5分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。麺、春巻き、揚げ物、たれをからめた炒め物などの中華で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛肉、鶏肉、鴨、魚介の中華で、ヴィーガンの料理はない。',
    notes: '[中華・西中島、町の中華] 新大阪と西中島南方のあいだの路地にある48席の中華料理店で、2019年から。目をひく外観で、スタッフは中国出身、早くて親切 (2025年)。昼は混み合い、約800円の定食や麻婆鍋の定食、フカヒレあんかけのチャーハンを食べる。100円でチャーハンかミニラーメンにでき、注文から約4分で出てくる (2025年3月)。夜は宴会の店になり、50品から選べる2時間の食べ飲み放題が3,800円で、金曜は予約なしでは入れない (2026年10月)。単品なら広東風の蒸し鶏 (450円) や北京ダック (1,980円) も。味はやさしいものからとても辛いものまであり、辛いもの好きでも牛肉の辛い炒め物は辛かったという人も (2026年9月)。テーブルでも喫煙可。煙が苦手な人が日曜の17:30に予約したという口コミも (2026年10月)。',
  });
}

// ================================================================ オレ達のタコ部屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27061605/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.oretako2018.com/';
  const WK = day(['18:00', '05:00']); const LW = day(['11:30', '14:00'], ['18:00', '05:00']);
  put({
    id: 'osaka_ore_tachi_no_tako_beya_nishinakajima', name: 'オレ達のタコ部屋 (Ore Tachi no Tako Beya)', category: 'OMNI',
    lat: 34.728653, lng: 135.500064, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tacos come on yellow or blue masa tortillas (July 2026), but the "premium tacos" use a fried tortilla of unstated make, and quesadillas, a Mexican dog, nachos and taco rice are also on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tacos with meat, sausages, mozzarella quesadillas and taco rice; no vegan dish is named.',
    hours_raw: 'Mon–Fri 18:00–05:00 (last order 04:30); Sat 18:00–03:00 (last order 02:30); Sun and holidays 18:00–01:00 (last order 00:30), with some food and drinks limited; lunch in November 2026 on Tuesday, Wednesday and Thursday 11:30–14:00, not on holidays, until sold out; closing days not fixed (Tabelog). The official site gives "18:00～LAST". Lunch was fully booked by office workers on a March 2026 day. Reservations accepted; parties of three or fewer should consult the bar before booking a table (Tabelog). Table charge ¥500 a head (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payment (Tabelog). 16 seats, parties up to 18; private rooms for 7–20 on the 3rd floor, over 30 with the 2nd floor; smoking allowed (Tabelog). English menu and photo menu (Tabelog). Takeaway tacos (January 2026). Opened 1 October 2011; moved here from 1-9-7 Higashinakajima, Higashiyodogawa-ku (Tabelog).',
    hours: { 0: WK, 1: LW, 2: LW, 3: LW, 4: WK, 5: day(['18:00', '03:00']), 6: day(['18:00', '01:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-8-8, 2nd floor of 新大阪京和ビル, just off Shin-Midosuji north of Nishinakajima-Minamigata Stn (July 2026) — about 5 min walk (Tabelog); the door at the back of the stairs is the restroom, not the bar (September 2026)',
    cuisine: 'Mexican bar food with tequila and mezcal (Tabelog) · the official site\'s top three: premium tacos, Oretako taco rice, quesadilla with plenty of mozzarella · premium tacos on a fried tortilla, crunchy and slightly sweet, with salsa and habanero (July and October 2026), bar hours only (June 2026) · Mexican taco set: two tacos on your choice of yellow or blue masa tortillas (July 2026) · mozzarella quesadilla with salsa and pickled jalapeños; toasted tortilla chips as the starter (July 2026) · Mexican dog (April 2026); sausages and meat dishes (June 2026); taco rice (September 2026) · a lunch plate, Tuesday to Thursday (June 2026) · late-night tacos from October (Tabelog) · over 600 Mexican spirits (Tabelog); Mexican cocktails (April 2026); a coffee and tequila cocktail (August 2026) · two-hour all-you-can-drink party plans for 4–18: ¥5,000 (nachos, premium tacos, quesadillas …), premium ¥6,000, after-party ¥4,500 (Tabelog, tax included) · a party plan with self-serve taco toppings and a row of hot sauces (July 2026)',
    website: SITE, gmaps: gm('オレ達のタコ部屋 西中島'), menu_url: null,
    notes: "[Mexican · Nishinakajima, a late-night taco and tequila bar] A second-floor bar off Shin-Midosuji, north of Nishinakajima-Minamigata, serving tacos and Mexican spirits since 2011; the owner is a certified Tequila Maestro and Mezcalero who explains the bottles well, and the back bar holds over 600 Mexican spirits (Tabelog; July 2026). An August 2025 diner wrote that it is known as the best tequila bar in western Japan. The food holds its own: \"premium tacos\" on a fried, slightly sweet tortilla, a taco set on yellow or blue masa, mozzarella quesadillas and taco rice, in portions people call large (March 2026), with mild spice you adjust with hot sauce. It stays open until 5 a.m. on weekdays, so it doubles as a last stop, and runs a weekday lunch Tuesday to Thursday. English menu; ¥500 table charge; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed): a certified Tequila Maestro (Tabelog) and Mezcalero (July 2026 review)', 'Bar staff, with a manager reviewers call very funny (August 2025)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a casual Mexican bar of tacos, developed through "extensive research", and over 600 Mexican spirits chosen by the owner, a certified Tequila Maestro; opened 1 October 2011 and moved here from 1-9-7 Higashinakajima, Higashiyodogawa-ku. Per a July 2026 review: "Established in 2011, it has become quite a well-known spot for tacos"; the owner is "certified as a Tequila Maestro and Mezcalero" and explains the drinks well. Per an August 2025 review: "known as the number one tequila bar in Western Japan"; "The manager is incredibly entertaining, and the staff are wonderful."',
      philosophy: null, specialty: 'Premium tacos; tequila and mezcal.',
      anecdotes: [
        { text: '"The owner is certified as a Tequila Maestro and Mezcalero, and [gives] excellent explanations about the drinks." — July 2026.', source: R + 'B532631924/' },
        { text: '"Be careful when climbing the stairs in the building; the door at the back is not the entrance to the restaurant, but the restroom." — September 2026, a late-night meal; taco rice.', source: R + 'B537225684/' },
        { text: '"It seems to be popular among office workers, as it was fully booked during lunch hours." — March 2026.', source: R + 'B534365367/' },
      ],
      japanese_sources_summary: '公式サイト: オレ達のタコ部屋、営業時間18:00〜LAST、50種類以上のドリンク、テキーラ、おすすめ No.1 プレミアムタコス、No.2 オレタコのタコライス、No.3 モッツァレラチーズたっぷりのケサディージャ。食べログ (店舗会員): メキシコ料理・バー・居酒屋、大阪市淀川区西中島5-8-8 新大阪京和ビル 2F、西中島南方駅から徒歩約5分、月〜金18:00〜翌5:00、土18:00〜翌3:00、日・祝18:00〜翌1:00、11月のランチは火・水・木11:30〜14:00 (祝日を除く、売り切れまで)、不定休、予約可、3名以下のテーブルは事前に相談、カード・電子マネー・QR 可、16席、3階に7〜20名の個室、2階とあわせて30名以上の貸切、喫煙可、英語メニュー、写真つきメニュー、2011年10月1日オープン、Higashinakajima 1-9-7, Higashiyodogawa-ku から移転、オーナーは Tequila Maestro、600種以上のメキシコのお酒、10月から深夜のタコス、2時間飲み放題の宴会プラン5,000円・6,000円、二次会プラン4,500円 (税込)。口コミ(2025年8月〜2026年10月): Shin-Midosuji からすぐのビルの2階、2011年創業、オーナーは Tequila Maestro と Mezcalero、トルティーヤチップス、モッツァレラのケサディージャ、黄色と青のトルティーヤを選べるタコスのセット、揚げたトルティーヤのプレミアムタコス、Mexican dog、タコライス、量が多い、ホットソースで辛さを調整、昼は会社員で満席、テーブルチャージ500円、階段の奥の扉はトイレ、コーヒーとテキーラのカクテル、テイクアウトのタコス。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530660687/', R + 'B531111726/', R + 'B532631924/', R + 'B532734653/', R + 'B533333028/', R + 'B534365367/', R + 'B534487740/', R + 'B534564539/', R + 'B537225684/', R + 'B537241423/'] },
    cultural_comfort: { level: 'english', note: 'English menu and photo menu (Tabelog); the owner explains the tequila and mezcal (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-8 新大阪京和ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November 2026 lunch notice, and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番8号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, SITE, R + 'B532631924/'],
    price_note: 'Plan prices from the Tabelog listing (tax included); dish prices not published; dishes from the official site and 2026 reviews.', last_checked: TODAY, items: [
      it('プレミアムタコス', '', 'Premium tacos (fried tortilla)', '', 'Tacos', 'ask', 'no', 'Official site; July and October 2026.', 'premium_tacos'),
      it('', '', 'Mexican taco set: two tacos on yellow or blue masa tortillas', '', 'Tacos', 'ask', 'no', 'July 2026.', 'taco_set'),
      it('オレタコのタコライス', '', 'Oretako taco rice', '', 'Rice', 'ask', 'no', 'Official site; September 2026.', 'taco_rice'),
      it('モッツァレラチーズたっぷりのケサディージャ', '', 'Quesadilla with plenty of mozzarella', '', 'Dishes', 'ask', 'no', 'Official site; July 2026.', 'quesadilla'),
      it('', '', 'Two-hour all-you-can-drink party plan (4–18 people)', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'party_plan'),
      it('', '', 'After-party plan with all-you-can-drink', '¥4,500', 'Courses', 'ask', 'no', 'Tabelog.', 'after_party_plan'),
    ] }, {
    cuisine: 'テキーラとメスカルに合うメキシコのバーの料理 (食べログ)・公式サイトのおすすめ3品: プレミアムタコス、オレタコのタコライス、モッツァレラチーズたっぷりのケサディージャ・プレミアムタコスは揚げたトルティーヤで、サクサクで少し甘く、サルサとハバネロ (2026年7月、10月)。バーの時間だけ (2026年6月)・メキシカンタコスのセット: 黄色か青のトルティーヤを選んでタコス2つ (2026年7月)・モッツァレラのケサディージャにサルサとハラペーニョのピクルス、お通しはトーストしたトルティーヤチップス (2026年7月)・Mexican dog (2026年4月)、ソーセージと肉料理 (2026年6月)、タコライス (2026年9月)・火〜木のランチのプレート (2026年6月)・10月から深夜のタコス (食べログ)・600種以上のメキシコのお酒 (食べログ)、メキシコのカクテル (2026年4月)、コーヒーとテキーラのカクテル (2026年8月)・2時間飲み放題の宴会プラン、4〜18名: 5,000円 (ナチョス、プレミアムタコス、ケサディージャなど)、プレミアム6,000円、二次会4,500円 (食べログ、税込)・タコスの具を自分でのせる宴会プランで、ホットソースがずらり (2026年7月)',
    neighborhood: '西中島5-8-8、新大阪京和ビルの2階。西中島南方駅の北、Shin-Midosuji からすぐ (2026年7月)。徒歩約5分 (食べログ)。階段の奥の扉はトイレで、店の入口ではない (2026年9月)',
    gf_detail: '要確認。グルテンの情報なし。タコスは黄色か青のトルティーヤ (2026年7月) だが、プレミアムタコスの揚げたトルティーヤの材料はわからず、ケサディージャ、Mexican dog、ナチョス、タコライスもある。',
    vegan_detail: 'ヴィーガンではありません。肉のタコス、ソーセージ、モッツァレラのケサディージャ、タコライスで、ヴィーガンの料理はない。',
    notes: '[メキシコ料理・西中島、深夜のタコスとテキーラのバー] 西中島南方の北、Shin-Midosuji からすぐのビルの2階にあるバーで、2011年からタコスとメキシコのお酒を出している。オーナーは Tequila Maestro と Mezcalero の資格を持ち、お酒の説明がうまい。棚には600種以上のメキシコのお酒 (食べログ、2026年7月)。西日本でいちばんのテキーラバーとして知られるという声も (2025年8月)。料理も負けておらず、揚げた少し甘いトルティーヤのプレミアムタコス、黄色か青のトルティーヤのタコスのセット、モッツァレラのケサディージャ、タコライス。量は多め (2026年3月)。辛さはひかえめで、ホットソースで調整する。平日は朝5時まで開いているので、最後の一軒にも。火〜木は昼のランチもある。英語メニューあり。テーブルチャージ500円。喫煙可。',
  });
}

// ================================================================ Bella Locanda Italiana
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27154623/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:30']);
  put({
    id: 'osaka_bella_locanda_italiana_shin_osaka', name: 'Bella Locanda Italiana', category: 'OMNI',
    lat: 34.733322, lng: 135.490053, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, pizza, focaccia, breads, scones and cakes run through every meal; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegan options" and "vegetarian options", and the October 2026 lunch buffet had a large salad bar and chili con carne made with soy meat, but no dish is described as vegan; the soups (corn potage, minestrone) and dressings are not described.',
    hours_raw: 'Daily 11:30–21:30 (last order 21:00) (Tabelog). The hotel restaurant also serves breakfast (Tabelog feature list; an October 2026 review: "serving meals from breakfast to dinner"). Cake set 14:00–17:30 (October 2026). Reservations accepted (Tabelog); one October 2026 family dinner found the room empty. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and e-money; no QR payment (Tabelog). 60 seats; whole-room hire for 20 to over 50; non-smoking; wheelchair accessible; free Wi-Fi; parking for vehicles under 1.5 m tall (Tabelog), too low for one family\'s SUV (October 2026). English menu and English-speaking staff; sommelier; children welcome, kids\' menu (Tabelog). Free hotel shuttle bus from Shin-Osaka Stn (July and October 2026), about every 20 minutes, with nine seats (October 2026). Opened 22 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西宮原1-7-31, ground floor of the Holiday Inn & Suites Shin-Osaka (ホリデイ･イン&スイーツ新大阪) — 10 min walk from exit 4 of Shin-Osaka Stn (Midosuji Line), or the hotel\'s free shuttle bus (Tabelog; 2026 reviews)',
    cuisine: 'Hotel Italian, with lunch buffets and afternoon tea (Tabelog) · half-buffet lunch: a main of your choice with all-you-can-eat vegetables and pizza and a drink bar ¥2,000 (Tabelog); mains in 2026 included pasta, a weekly special, pork and beef sirloin (June) and homemade sausage and burdock tagliatelle in cream sauce or salmon, mushroom and shiso spaghetti (October); the buffet: a salad bar of many leaves and roots with homemade dressings, potato dauphinoise, garlic mushrooms, chili con carne with soy meat, two soups, bagels, croissants, cinnamon rolls, focaccia (October 2026) · autumn afternoon teas ¥5,500 with free-flow coffee and tea: grape (muscat and Kyoho parfait, mousse, tart, prosciutto pinchos, quiche, scones) and chestnut, 18 October–30 November (Mont Blanc, pear, apple, pumpkin quiche, bruschetta); the signature is a "melty tiramisu" that spreads when the tube is lifted (October 2026) · cake set from the showcase with baked goods, ice cream and a drink ¥1,300 (October 2026) · dinner: "Hearty Italian Course" with two hours of drinks ¥6,000: prosciutto with buffalo mozzarella, bagna cauda, fresh pasta with shrimp cream, T-bone steak, cake (August 2026) · Christmas buffets 21–26 December 2026: lunch with desserts ¥3,000, dinner with roast beef and sweets ¥5,500 (Tabelog, tax included) · baked goods to take away (Tabelog)',
    website: 'https://hisuite-shinosaka.com/restaurant/', gmaps: gm('Bella Locanda Italiana ホリデイ・イン&スイーツ新大阪'), menu_url: null,
    notes: "[Italian · Shin-Osaka, a hotel restaurant with afternoon tea] The ground-floor restaurant of the Holiday Inn & Suites Shin-Osaka, opened in December 2025 in a bright, high-ceilinged room ten minutes' walk from the station, with a free shuttle bus. Three things draw people: a ¥2,000 half-buffet lunch, a main pasta or meat with a big salad bar, pizza and breads (featured on a TV show in October 2026); seasonal afternoon teas at ¥5,500, grape then chestnut in autumn 2026, built around a \"melty tiramisu\" and made from scratch in the hotel kitchen, with sweetness kept low; and a ¥1,300 cake set from the showcase. Dinner is Italian courses with free-flow drinks and a T-bone steak. Most diners loved it; one family found an empty room, small portions and a single server at dinner (October 2026). English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen: a chef (a woman, per an October 2026 review) and a pastry chef (unnamed)', 'Sommelier (Tabelog)'], origin: null,
      background: 'Per the Tabelog listing: the Italian restaurant of the Holiday Inn & Suites Shin-Osaka, opened 22 December 2025, serving a vegetable lunch buffet, seasonal afternoon tea, cakes and baked goods to take away, and Italian dinners. Per reviews: "Everything is homemade in the hotel kitchen" with no preservatives (October 2026); "the female chef makes everything from scratch without relying on pre-made products", and the sweetness is kept in check so the whole tea can be finished (October 2026); cakes "made by the hotel\'s pastry chef" (August 2026); the lunch was featured by the food blogger M Saburo on a TV show (October 2026).',
      philosophy: null, specialty: 'Half-buffet lunch; seasonal afternoon tea with melty tiramisu.',
      anecdotes: [
        { text: '"When the tube is removed, the cream spreads beautifully, allowing you to enjoy the rich chestnut flavor." — October 2026, the chestnut afternoon tea.', source: R + 'B538250883/' },
        { text: '"The female chef makes everything from scratch without relying on pre-made products." — October 2026, the grape afternoon tea.', source: R + 'B537510803/' },
        { text: '"The staff member was managing the floor alone and seemed overwhelmed, but [was] very pleasant." — October 2026, a family steak dinner.', source: R + 'B537725345/' },
      ],
      japanese_sources_summary: '食べログ: Bella Locanda Italiana、レストラン、大阪市淀川区西宮原1-7-31 ホリデイ･イン&スイーツ新大阪、新大阪駅 (Midosuji Line) の4番出口から徒歩10分、毎日11:30〜21:30 (L.O.21:00)、予約可、カード・電子マネー可、QR 不可、60席、貸切20〜50名以上、禁煙、駐車場 (高さ1.5mまで)、車いす可、Wi-Fi、英語メニュー、英語を話すスタッフ、ソムリエ、子ども可、お子様メニュー、ベジタリアンとヴィーガンのメニュー、朝食あり、テイクアウト、ホテルのレストラン、2025年12月22日オープン。プラン (税込): 野菜とピザの食べ放題とドリンクバーつきのハーフビュッフェランチ2,000円、クリスマスのランチビュッフェ3,000円、ディナーのローストビーフとスイーツのビュッフェ5,500円 (12月21日〜26日)。口コミ(2026年6月〜10月): 無料シャトルバス、アフタヌーンティー5,500円 (ぶどう、栗)、とろけるティラミス、ホテルのキッチンで手作り、ケーキセット1,300円、イタリアンのコースと飲み放題6,000円、T-bone ステーキ、テレビで紹介されたランチ、サラダバー、大豆ミートのチリコンカン、客が少なく量が少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B529686064/', R + 'B533097460/', R + 'B534395810/', R + 'B537013351/', R + 'B537410167/', R + 'B537510803/', R + 'B537687126/', R + 'B537725345/', R + 'B538148582/', R + 'B538250883/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); a hotel restaurant.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原1-7-31 ホリデイ･イン&スイーツ新大阪',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with plans for December 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原一丁目7番31号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534395810/', R + 'B537687126/', R + 'B538250883/'],
    price_note: 'Lunch and Christmas plan prices from the Tabelog listing (tax included); afternoon tea, cake set and dinner course from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Half-buffet lunch: a main with all-you-can-eat vegetables, pizza and drink bar', '¥2,000', 'Lunch', 'ask', 'ask', 'Tabelog; October 2026.', 'half_buffet_lunch'),
      it('', '', 'Seasonal afternoon tea with free-flow drinks', '¥5,500', 'Afternoon tea', 'ask', 'no', 'October 2026.', 'afternoon_tea'),
      it('', '', 'Cake set: cake from the showcase, baked goods, ice cream and a drink', '¥1,300', 'Cake', 'ask', 'no', 'October 2026.', 'cake_set'),
      it('', '', '"Hearty Italian Course" with two hours of drinks', '¥6,000', 'Dinner', 'ask', 'no', 'August 2026.', 'italian_course'),
      it('', '', 'Christmas dinner buffet: roast beef and sweets (21–26 December)', '¥5,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'xmas_dinner_buffet'),
    ] }, {
    cuisine: 'ホテルのイタリアンで、ランチビュッフェとアフタヌーンティーも (食べログ)・ハーフビュッフェのランチ: 選べるメインに、野菜とピザの食べ放題とドリンクバーで2,000円 (食べログ)。2026年のメインは、パスタ、週がわりの料理、豚肉と牛サーロイン (6月)、自家製ソーセージとごぼうのクリームソースのタリアテッレ、サーモンときのこと大葉のスパゲッティ (10月)。ビュッフェには、たくさんの葉もの野菜と根菜のサラダバーに自家製ドレッシング、じゃがいものドーフィノワ、きのこのガーリックソテー、大豆ミートのチリコンカン、スープ2種、ベーグル、クロワッサン、シナモンロール、フォカッチャ (2026年10月)・秋のアフタヌーンティー5,500円、コーヒーと紅茶はフリーフロー: ぶどう (マスカットと Kyoho のパフェ、ムース、タルト、生ハムのピンチョス、キッシュ、スコーン) と、10月18日〜11月30日の栗 (モンブラン、洋なし、りんご、かぼちゃのキッシュ、ブルスケッタ)。名物は筒をはずすと広がる「とろけるティラミス」 (2026年10月)・ショーケースから選ぶケーキに焼き菓子、アイス、飲み物のケーキセット1,300円 (2026年10月)・ディナー: 2時間飲み放題つきの「Hearty Italian Course」6,000円、生ハムとバッファローモッツァレラ、バーニャカウダ、エビのクリームの生パスタ、T-bone ステーキ、ケーキ (2026年8月)・クリスマスのビュッフェ (2026年12月21日〜26日): デザートつきのランチ3,000円、ローストビーフとスイーツのディナー5,500円 (食べログ、税込)・焼き菓子のテイクアウト (食べログ)',
    neighborhood: '西宮原1-7-31、ホリデイ･イン&スイーツ新大阪の1階。新大阪駅 (Midosuji Line) の4番出口から徒歩10分、またはホテルの無料シャトルバス (食べログ、2026年の口コミ)',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピザ、フォカッチャ、パン、スコーン、ケーキがどの食事にもあり、グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に、ヴィーガンとベジタリアンのメニューありとあり、2026年10月のランチビュッフェには大きなサラダバーと大豆ミートのチリコンカンがあったが、ヴィーガンと書かれた料理はない。スープ (コーンポタージュ、ミネストローネ) やドレッシングの説明もない。',
    notes: '[イタリアン・新大阪、アフタヌーンティーのあるホテルのレストラン] ホリデイ･イン&スイーツ新大阪の1階のレストランで、2025年12月に開いた。天井が高く明るい店で、駅から歩いて10分、無料のシャトルバスもある。人気は3つ。2,000円のハーフビュッフェのランチは、メインのパスタか肉に、大きなサラダバー、ピザ、パン (2026年10月にテレビで紹介)。季節のアフタヌーンティーは5,500円で、2026年秋はぶどう、そして栗。「とろけるティラミス」が中心で、ホテルのキッチンで一から作り、甘さはひかえめ。ショーケースから選ぶ1,300円のケーキセットも。夜は飲み放題つきのイタリアンのコースで、T-bone ステーキも。ほとんどの人が満足しているが、夜、客がほかにおらず、量が少なく、スタッフがひとりだったという家族も (2026年10月)。英語メニューと英語を話すスタッフあり。',
  });
}

save();
