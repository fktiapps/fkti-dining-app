// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 14.
//   + 中国料理 ファンファン Chinese Fan Fan (27111425, taken by id at the coordinator's request though outside the core list: the famous main shop,
//     clay-pot Sichuan chen mapo tofu near Shin-Osaka since 1988; its sister 煌彩酒家 ファンファン 27109413 stays skipped as a branch)
//   + なにわのお好み焼 じろー Naniwa no Okonomiyaki Jiro (celebrity-signed okonomiyaki house in Higashi-Mikuni, open to midnight daily)
//   + はす亭 Hasu Tei (Italian-Western house restaurant by Hankyu Mikuni since 1986, run by a father and son)
//   + 喫茶ランプティラ Kissa Lamptila (natural-yeast bread and simple sweets kissa between Nishinakajima-Minamigata and Juso, since 2010)
//   Chain check: Fan Fan has the one sister shop (site fanfan-osaka.com, read 2026-11-02); Jiro, Hasu Tei and Lamptila are single shops
//     (Tabelog; web search for じろー 2026-11-02; Lamptila site).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); no record within 60 m of any of the four.
//   open_late per the brief: Jiro to 24:00 set true; Fan Fan 22:30, Hasu Tei 22:00 and Lamptila 18:15 set false.
//   Fan Fan owner 田中 敏文 is named by the shop site; no reading is given anywhere, so the name stays in kanji with no romaji.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中国料理 ファンファン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27111425/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.fanfan-osaka.com/';
  const H = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_chinese_fan_fan_shinosaka', name: '中国料理 ファンファン (Chinese Fan Fan)', category: 'OMNI',
    lat: 34.735744, lng: 135.495733, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the mapo tofu is seasoned with soy sauce and the shop’s own fermented black-bean paste, on chicken stock thickened with starch (shop recipe); dumplings, shumai, fried noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu is made with beef mince and chicken stock (shop recipe); shrimp, pork and chicken dishes.',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:30) and 17:00–22:30 (food last order 21:30, drinks 21:45); closed Sunday and the third Monday (Tabelog; shop site). From 1 July to 30 September weekday lunch is 11:30–14:30 (site). Lunch queue: a line forms before opening (2026); an EPARK sign-up now replaces much of the waiting (August 2026). Dinner: book 1–2 weeks ahead online; strict 2-hour seating (September 2026). Cards, e-money and QR including Alipay and WeChat Pay (Tabelog). 60 seats, sofa and table seating, rooms for parties of 6–16 and around 20 (site); non-smoking, smoking area outside; no parking (Tabelog). Children welcome with notice; kids menu; takeaway and delivery (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '宮原4-3-39 新大阪NKビル 1F, 5 min from Shin-Osaka on the Midosuji Line, 7 min from JR Shin-Osaka (Tabelog)',
    cuisine: 'Sichuan, Cantonese and Taiwanese cooking adapted to Japanese tastes (shop site) · the signature Sichuan chen mapo tofu, served bubbling in a clay pot so it stays hot and the sauce does not thin as the tofu releases water (site); seasoned with the shop’s own fermented black-bean miso (site); spicy, regular or mild, and a sweet-miso version (2026) · chen mapo tofu set ¥1,350 with pickled mustard greens and free rice refills; the first customers (about 30) can take fried rice as a refill (2026) · daily lunch set such as shrimp mayo (September 2026) · five-ingredient ankake fried noodles; big shrimp in the shop’s mayo sauce; shrimp and seasonal vegetables in chili sauce (site) · twice-cooked pork, spring rolls, Shanghai crab-miso shumai, garlic-chive water dumplings, century egg, gyoza, yurinchi, almond tofu, sesame balls (2026) · banquet course with all-you-can-drink ¥6,800 (September 2026) · happy hour 17:00–18:00, a pint of draft beer ¥350 (September 2026) · the black-bean miso (100 g ¥750) and sweet bean sauce (190 g ¥1,080) are sold to take home (site)',
    website: SITE, gmaps: gm('中国料理 ファンファン 新大阪 宮原'), menu_url: SITE + 'menu',
    notes: '[Chinese · Shin-Osaka, the clay-pot chen mapo tofu with a queue at lunch] A 60-seat Chinese restaurant five minutes from Shin-Osaka, founded in 1988 and known across Osaka for its Sichuan chen mapo tofu, served still boiling in a clay pot with a black-bean miso the kitchen makes itself. At lunch the ¥1,350 mapo set with endless rice draws a line before opening (2026); the first customers can take fried rice as a refill, and you are handed an apron against the splashes. Evenings bring banquet courses, twice-cooked pork, crab-miso shumai and a ¥350 happy-hour pint, but book a week or two ahead. Closed Sundays and the third Monday.',
    chef_bio: { chef_name: '田中 敏文', roles: ['Owner and representative director (shop site)', 'Head chefs (unnamed)'], origin: null,
      background: 'Per the shop site (fanfan-osaka.com, read 2026-11-02): owner 田中 敏文 graduated from あべの辻調理師学校, cooked at 南国酒家 and 泰南飯店 in Harajuku, Tokyo, and in July 1988, aged 25, founded Fan Fan with cooks from the Hotel Nikko Osaka who were [the owner’s] seniors from 南国酒家; has also produced the food and drink at a resort hotel on Kohama Island in Okinawa and several Osaka bars and restaurants. The mapo tofu was developed about 20 years ago, with the shop’s own seasonings and a near-authentic taste, served in a clay pot, which was rare then and spread by word of mouth; the head chefs pooled ideas to reach the current taste, still updated in its 37th year. The name: 璠 means a beautiful jewel, and 璠房 "a room of beautiful jewels"; guests should feel as if finding a treasure. Sister shop 煌彩酒家 璠房 in Higashi-Mikuni. Per reviews: celebrity autographs inside, and regular TV and YouTube features (September–October 2026); the shop has moved and been renovated (September–October 2026; Tabelog gives an opening date of 21 May 2019); one September 2026 diner found the mapo pre-made and oily.',
      philosophy: '"Basics and creation", repeated, so that guests feel "surprise and delight"; seasonings are made in-house; tell the kitchen how you like it seasoned (site, translated).', specialty: 'Sichuan chen mapo tofu in a clay pot.',
      anecdotes: [
        { text: 'The clay pot was chosen so the mapo stays "always bubbling hot, and the flavour does not thin even as the tofu releases water" (shop site, translated).', source: SITE + 'concept' },
        { text: '"You can enjoy unlimited rice refills, but only the first 30 customers can choose fried rice for [the] second refill." — September 2026.', source: R + 'B535328525/' },
        { text: '"I had been given a large apron beforehand, and seeing the dish confirmed why." — October 2026.', source: R + 'B537839042/' },
      ],
      japanese_sources_summary: '店のサイト (fanfan-osaka.com): 中国料理 璠房 (ファンファン)、本店、運営は有限会社ファンファン、代表取締役 田中 敏文、あべの辻調理師学校を卒業、東京原宿の南国酒家、泰南飯店をへて、昭和63年7月、25歳で大阪日航ホテルの料理人 (南国酒家の先輩) とファンファンを立ち上げる、麻婆豆腐は約20年前に研究を重ね、独自の調味料と本場に近い味つけで土鍋での提供を考案、当時は珍しく口コミで広まった、四川料理と広東料理が得意、名物の四川陳麻婆豆腐、自社オリジナルの豆鼓味噌、37年目、五目あんかけ焼そば、海老のマヨネーズ和え、海老と季節野菜のチリソース煮、豉汁 (トーチー味噌) 100g 750円、甜麺醤190g 1,080円、11:30〜15:00、17:00〜22:30、日曜と第3月曜休み、60席、全席禁煙、姉妹店は東三国の煌彩酒家 璠房、璠は美しい玉。食べログ: 中国料理 ファンファン、中華料理・四川料理・飲茶・点心、大阪市淀川区宮原4-3-39 新大阪NKビル 1F、カード・電子マネー・QR 可。口コミ (2025年〜2026年10月): 四川陳麻婆豆腐のセット1,350円、ごはんおかわり自由、最初の約30人はおかわりにチャーハンも、エプロン、開店前から行列、EPARK、夜は1〜2週間前に予約、2時間制、ハッピーアワーの生ビール350円、飲み放題つきコース6,800円、回鍋肉、春巻き、上海蟹みそ焼売、Nira Bakudan の水餃子、ピータン、杏仁豆腐、芸能人のサイン、移転と改装。',
      confidence: 'high', sources: [SITE + 'information', SITE + 'concept', SITE + 'specialty', TB, R + 'B465994815/', R + 'B487266984/', R + 'B517202588/', R + 'B529270775/', R + 'B534938993/', R + 'B535328525/', R + 'B535655973/', R + 'B535784875/', R + 'B536067112/', R + 'B537731176/', R + 'B537798876/', R + 'B537839042/', R + 'B538373779/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos; Alipay and WeChat Pay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原4-3-39 新大阪NKビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with 2025–2026 notices and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原四丁目3番39号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537434441/', R + 'B535784875/', R + 'B517202588/', SITE + 'concept'],
    price_note: 'Prices from 2026 reviews and the shop site.', last_checked: TODAY, items: [
      it('四川陳麻婆豆腐セット', '', 'Sichuan chen mapo tofu set, rice refills free', '¥1,350', 'Lunch', 'no', 'no', 'October 2026.', 'chen_mapo_set'),
      it('', '', 'Banquet course with all-you-can-drink', '¥6,800', 'Courses', 'no', 'no', 'September 2026.', 'nomihodai_course'),
      it('五目あんかけ焼そば', '', 'Five-ingredient ankake crispy fried noodles', '', 'Noodles', 'no', 'no', 'Shop site.', 'gomoku_ankake_yakisoba'),
      it('', '', 'Draft beer, pint, happy hour 17:00–18:00', '¥350', 'Drinks', 'no', 'ask', 'September 2026.', 'happy_hour_beer'),
      it('豉汁 (トーチー味噌)', '', 'House fermented black-bean miso to take home, 100 g', '¥750', 'Retail', 'no', 'ask', 'Shop site.', 'touchi_miso'),
    ] }, {
    cuisine: '四川、広東、台湾の料理を日本人の口に合わせた本格中華 (店のサイト)・名物の四川陳麻婆豆腐は土鍋でぐつぐつのまま出し、豆腐の水分が出ても味が薄まらない (店のサイト)。味つけは自社オリジナルの豆鼓味噌 (店のサイト)。辛口、普通、マイルドに甘味噌の麻婆も (2026年)・陳麻婆豆腐のセット1,350円、漬物つき、ごはんおかわり自由。最初の約30人はおかわりにチャーハンも選べる (2026年)・エビマヨなどの日替わりランチ (2026年9月)・五目あんかけ焼そば、大海老の特製マヨソース和え、海老と季節野菜のチリソース煮 (店のサイト)・回鍋肉、春巻き、上海蟹みそ焼売、Nira Bakudan の水餃子、ピータン、餃子、油淋鶏、杏仁豆腐、ごま団子 (2026年)・飲み放題つきの宴会コース6,800円 (2026年9月)・17:00〜18:00のハッピーアワー、生ビールのパイント350円 (2026年9月)・豉汁 (トーチー味噌) 100g 750円と甜麺醤190g 1,080円は持ち帰り用に販売 (店のサイト)',
    neighborhood: '宮原4-3-39 新大阪NKビル 1F、Midosuji Line の新大阪駅から5分、JR 新大阪駅から7分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。麻婆豆腐は醤油と自家製の豆鼓味噌で味をつけ、鶏ガラスープを片栗粉でとろみづけ (店のレシピ)。餃子、焼売、焼そばも。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐は牛ひき肉と鶏ガラスープ (店のレシピ)。エビ、豚、鶏の料理。',
    notes: '[中華・新大阪、昼に行列の土鍋の陳麻婆豆腐] 新大阪から5分、60席の中華料理店で、1988年創業。厨房で作る豆鼓味噌の四川陳麻婆豆腐を、煮えたぎる土鍋のまま出すことで大阪じゅうに知られる。昼は1,350円の麻婆セット (ごはんおかわり自由) に開店前から行列ができ (2026年)、早い客はおかわりにチャーハンも選べ、はね防止のエプロンを渡される。夜は宴会コース、回鍋肉、上海蟹みそ焼売、350円のハッピーアワーのパイントも。予約は1〜2週間前に。日曜と第3月曜休み。',
  });
}

// ================================================================ なにわのお好み焼 じろー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27005361/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '00:00']);
  put({
    id: 'osaka_naniwa_no_okonomiyaki_jiro_higashimikuni', name: 'なにわのお好み焼 じろー (Naniwa no Okonomiyaki Jiro)', category: 'OMNI',
    lat: 34.744378, lng: 135.498469, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, yakisoba and modern-yaki noodles, with sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, seafood and egg throughout; katsuobushi on top. Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Daily 11:30–24:00 (last order 23:30), open year-round; may close 15:00–17:00 when it is quiet; closed 31 December–3 January (Tabelog). Reservations for those spending ¥2,000 or more; a 2-hour limit at weekends, Obon and year-end; cancellation fees on the day, or the day before for groups of 8 or more (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 44 seats, all at tables, up to 50; two semi-private tables for four; non-smoking, smoking outside (Tabelog; August 2026). Affiliated paid parking on Shin-Midosuji, with a discount voucher over ¥3,500; room for large buses next door (Tabelog). Takeaway of everything (July and October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国2-32-14 モンテ新大阪 1F, 3 min north along the side road from exit 1 of Higashi-Mikuni on the Midosuji Line; 5 min by taxi from Shin-Osaka (Tabelog)',
    cuisine: 'Osaka okonomiyaki and teppanyaki (Tabelog) · cook it yourself or have the staff cook it, about 15 minutes; sweet, spicy, extra-spicy or soy-based sauce, with mayonnaise, katsuobushi and aonori on the table (2025–2026) · the signature "Jiro Jiro-yaki" of pork, bean sprouts, two eggs and cheese, ¥1,380 (August 2026) · "Abeno Mix" okonomiyaki, pork, beef, shrimp, squid, scallops, tuna, konnyaku and green onion, linked to former Prime Minister Abe: ¥2,500–2,860 (2026) · "Jiro Special" ¥2,673; Osaka modern-yaki with pork ¥1,298; salt yakisoba with pork ¥1,078; tonpei-yaki with cheese ¥913; salt-grilled squid legs ¥583 (July 2026) · triple-cheese okonomiyaki, beef-tendon cheese okonomiyaki, Yamato yam tororo-yaki, negiyaki, omusoba, braised beef and Kujo green-onion yaki (2025–2026) · teppanyaki of wagyu and seafood, an assorted teppan platter DX with ponzu, beef tendon stew (2026) · "Osaka Okonomiyaki Experience Course" and all-you-can-drink, from lunchtime (2026)',
    website: null, gmaps: gm('なにわのお好み焼 じろー 東三国'), menu_url: null,
    notes: '[Okonomiyaki · Higashi-Mikuni, the okonomiyaki house on the celebrity circuit, open to midnight] A 44-seat okonomiyaki house three minutes from Higashi-Mikuni and five by taxi from Shin-Osaka, its walls covered in photos and signatures from former Prime Minister Abe to idols and bands (2026). Grill it yourself or let the staff cook it: the "Abeno Mix" is a heavy pile of pork, beef, seafood and tuna (about ¥2,500–2,860), while the house "Jiro Jiro-yaki" is pork, bean sprouts, egg and cheese for ¥1,380 (2026). Choose sweet, spicy or soy sauce. Open daily from 11:30 to midnight, with tables for groups and a coach park next door; PayPay, no cards.',
    chef_bio: { chef_name: null, roles: ['Teppan staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: open year-round to midnight, aimed partly at Shinkansen travellers ("You can enjoy an okonomiyaki party until 9 PM and still catch the last Nozomi train to Tokyo"), travel-agency groups and coaches, and lunch after Katsuo-ji Temple; private hire on weekdays for up to 50. Per reviews: "a beloved establishment that has been cherished by locals and many famous personalities for over 50 years" (August 2026); photos and signatures of former Prime Minister Abe, Satomi Ishihara, Nogizaka46, BUMP OF CHICKEN, Roland and others on the walls (June 2026); a party arriving an hour late in traffic had its seats kept (March 2026).',
      philosophy: null, specialty: 'Jiro Jiro-yaki; Abeno Mix okonomiyaki.',
      anecdotes: [
        { text: '"They blend sweet and spicy sauces together, then stylishly drizzle mayonnaise in a wave pattern." — March 2026.', source: R + 'B524511925/' },
        { text: '"Despite the delay, [the staff] kindly kept our reserved seats (thank you!)." — March 2026, arriving an hour late.', source: R + 'B523920125/' },
        { text: '"Yamato Tororo-yaki ... Light soy sauce base, super fluffy! It’s a bit pricey, but I think it’s the top recommendation!" — June 2026.', source: R + 'B529362622/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): なにわのお好み焼 じろー、お好み焼き・鉄板焼き・居酒屋、大阪市淀川区東三国2-32-14 モンテ新大阪 1F、Midosuji Line の東三国駅1番出口から北へ徒歩3分、新大阪駅から車で5分、年中無休11:30〜24:00 (L.O.23:30)、15:00〜17:00は閉めることも、12月31日〜1月3日休み、予約は2,000円以上から、週末などは2時間制、カード・電子マネー不可、PayPay 可、44席 (最大50)、半個室2卓、禁煙、提携の有料駐車場、大型バス可、新幹線の客や旅行会社の団体、勝尾寺のあとのランチにも。口コミ (2025年12月〜2026年10月): 自分で焼くか店で焼いてもらうか、甘口・辛口・大辛・醤油のソース、名物の Jiro Jiro-yaki 1,380円、Abeno Mix のお好み焼き2,500〜2,860円、Jiro Special 2,673円、豚のモダン焼き1,298円、塩焼きそば1,078円、チーズのとん平焼き913円、ゲソの塩焼き583円、三種チーズ、牛すじチーズ、Yamato のとろろ焼き、ねぎ焼、オムそば、和牛と海鮮の鉄板焼き、牛すじ煮込み、昼から飲み放題、安倍元首相をはじめ有名人の写真とサイン、50年以上。',
      confidence: 'medium', sources: [TB, R + 'B518995694/', R + 'B523357168/', R + 'B523920125/', R + 'B524511925/', R + 'B525475402/', R + 'B529362622/', R + 'B530668206/', R + 'B532258706/', R + 'B533038543/', R + 'B533220984/', R + 'B536791071/', R + 'B537497399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff will cook at the table; set up for groups and coach tours (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国2-32-14 モンテ新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国二丁目32番14号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532258706/', R + 'B533220984/', R + 'B533038543/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Jiro Jiro-yaki": pork, bean sprouts, egg and cheese', '¥1,380', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'jiro_jiro_yaki'),
      it('', '', '"Abeno Mix" okonomiyaki', '¥2,500–2,860', 'Okonomiyaki', 'no', 'no', 'June–August 2026.', 'abeno_mix'),
      it('', '', '"Jiro Special"', '¥2,673', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'jiro_special'),
      it('', '', 'Osaka modern-yaki with pork', '¥1,298', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'modern_yaki'),
      it('', '', 'Salt yakisoba with pork', '¥1,078', 'Yakisoba', 'no', 'no', 'July 2026.', 'shio_yakisoba'),
    ] }, {
    cuisine: '大阪のお好み焼きと鉄板焼き (食べログ)・自分で焼くか店で焼いてもらうか、約15分。ソースは甘口、辛口、大辛、醤油、テーブルにマヨネーズ、かつお節、青のり (2025〜2026年)・名物の Jiro Jiro-yaki は豚、もやし、卵2個、チーズで1,380円 (2026年8月)・Abeno Mix のお好み焼きは豚、牛、エビ、イカ、ホタテ、マグロ、こんにゃく、ねぎで、安倍元首相ゆかり、2,500〜2,860円 (2026年)・Jiro Special 2,673円。豚のモダン焼き1,298円。豚の塩焼きそば1,078円。チーズのとん平焼き913円。ゲソの塩焼き583円 (2026年7月)・三種チーズのお好み焼き、牛すじチーズのお好み焼き、Yamato のとろろ焼き、ねぎ焼、オムそば、煮込んだ牛肉と Kujo ねぎの焼き物 (2025〜2026年)・和牛と海鮮の鉄板焼き、ポン酢で食べる鉄板焼きの盛り合わせ DX、牛すじ煮込み (2026年)・Osaka Okonomiyaki Experience Course、昼からの飲み放題 (2026年)',
    neighborhood: '東三国2-32-14 モンテ新大阪 1F、Midosuji Line の東三国駅1番出口から側道を北へ3分、新大阪からタクシーで5分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地、焼きそばやモダン焼きの麺にソース。',
    vegan_detail: 'ヴィーガンではありません。豚、牛、海鮮、卵ばかりで、かつお節も。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[お好み焼き・東三国、有名人が通う深夜0時までのお好み焼き] 東三国から3分、新大阪からタクシーで5分、44席のお好み焼き店で、壁には安倍元首相からアイドル、バンドまで写真とサインがいっぱい (2026年)。自分で焼いても、店で焼いてもらってもいい。Abeno Mix は豚、牛、海鮮、マグロがどっさり (約2,500〜2,860円)、店の名物 Jiro Jiro-yaki は豚、もやし、卵、チーズで1,380円 (2026年)。ソースは甘口、辛口、醤油から。毎日11:30から深夜0時まで、団体のテーブル、となりにバスの駐車場。PayPay 可、カード不可。',
  });
}

// ================================================================ はす亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27018141/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'];
  put({
    id: 'osaka_hasu_tei_mikuni', name: 'はす亭 (Hasu Tei)', category: 'OMNI',
    lat: 34.735466, lng: 135.484103, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, gratin, cutlets and bread; ask about the grilled mains.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish mains, cheese, homemade bacon. Tabelog ticks "vegetarian options" and the kitchen is known for vegetables; ask.',
    hours_raw: 'Mon 11:30–14:00 (last order 13:30) and evening listed as 17:03–22:00; Wed–Sat 11:30–14:00 (last order 13:30) and 17:30–22:00 (last order 21:00); Sun 17:30–22:00; closed Tuesday and the 1st and 3rd Mondays; may close early when sold out (Tabelog). The Monday evening start of 17:03 is copied as listed. Lunch sells out by about 13:00 (2024–2025). Reservations accepted; tatami tables worth booking for 4–5 (Tabelog; June 2022). No cards, e-money or QR; no service charge (Tabelog). 18 seats: 8 at the counter and two sunken-kotatsu tables for five; private hire up to 20; non-smoking; wheelchair accessible; BYO drinks; children welcome (Tabelog). Opened 29 April 1986 (Tabelog).',
    hours: { 0: day(L, ['17:03', '22:00']), 2: day(L, ['17:30', '22:00']), 3: day(L, ['17:30', '22:00']), 4: day(L, ['17:30', '22:00']), 5: day(L, ['17:30', '22:00']), 6: day(['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '三国本町2-17-5, 3 min south of Hankyu Mikuni, at the north-east corner of the first street past the first light (Tabelog)',
    cuisine: 'Creative Italian with seasonal ingredients and Japanese influence (Tabelog); "country-style Western cuisine" on the sign (May 2024) · lunch: two daily sets, A (a meat main with rice) and B (pasta), with soup, salad and many small sides; ¥800 (2020), ¥950 (2024), ¥1,000 (2025); large rice +¥100 · lunch mains seen: grilled young chicken, chicken sautéed with marinara, pork loin vegetable roll cutlet, pork cutlet with demi-glace, salt-miso roast pork tenderloin, hamburg steak; pastas such as squid and tomato, pork ragu, Norwegian salmon and tomato (2023–2025) · homemade additive-free dressing, sold to take home (2023) · dinner: assorted appetisers, homemade bacon and vegetable peperoncino, gratin of shrimp and Iwatsu negi, eggplant, minced meat and cheese bake, Akashi octopus with caponata, whitebait and nanohana salad, spinach potage, chicken liver pâté, pasta with homemade karasumi, tarte tatin (2022–2025)',
    website: null, gmaps: gm('はす亭 三国本町 イタリアン'), menu_url: null,
    notes: '[Italian · Hankyu Mikuni, a 1986 father-and-son house restaurant with vegetable-heavy lunch plates] An 18-seat house restaurant three minutes south of Hankyu Mikuni, open since 1986, with a counter and two sunken-kotatsu tables that feel like a grandmother’s house (2025). A father and son cook, and regulars fill it at noon for two daily sets, a meat plate or a pasta, piled with small sides and vegetables, for ¥1,000 (2025); both can sell out by one o’clock. Evenings turn to seasonal Italian with a Japanese touch: homemade bacon peperoncino, Akashi octopus caponata, liver pâté, homemade karasumi pasta. Cash only; closed Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Owner-chef and a son (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 29 April 1986; "Hidden Italian Gem in the Downtown", creative Italian with seasonal ingredients and a blend of Japanese and Western influences; particular about vegetables and fish. Per reviews: "In the past, both a father and son were involved in cooking, while the mother took care of service, but now it’s just the father and son" (March 2023); "The owner and [the owner’s] son manage the place together" and "The owner-chef, coming from a famous hotel background, is truly skilled at preparing authentic Italian cuisine" (August 2025); many regulars chatting with the owner (April 2025); "I’ve lived in Mikuni for over 20 years and have always been curious about Hasu Tei" (November 2024).',
      philosophy: null, specialty: 'Daily lunch plates with vegetables; seasonal Italian at night.',
      anecdotes: [
        { text: '"The salad dressing is homemade and also available for purchase." — March 2023.', source: R + 'B111365788/' },
        { text: '"I understand that providing so many sides for lunch must be quite a hassle for the restaurant, but I was so happy to have so many vegetables!" — March 2024, ¥950 pork loin vegetable roll cutlet.', source: R + 'B482216105/' },
        { text: '"The interior feels warm and inviting, like visiting a grandmother’s house." — March 2025.', source: R + 'B503150663/' },
      ],
      japanese_sources_summary: '食べログ: はす亭、イタリアン・ヨーロッパ料理、大阪市淀川区三国本町2-17-5、阪急三国駅から南へ徒歩3分、月11:30〜14:00、夜は17:03〜22:00と掲載、水〜土11:30〜14:00、17:30〜22:00、日17:30〜22:00、火曜と第1・第3月曜休み、売り切れで早じまいも、予約可、カード・電子マネー・QR 不可、サービス料・チャージなし、18席 (カウンター8、掘りごたつの5人席2)、貸切20名まで、禁煙、車いす可、持ち込み可、1986年4月29日オープン、季節の素材で和と洋をとり入れた創作イタリアン。口コミ (2020年〜2026年4月): 父と息子が料理、昔は母がサービス、店主は有名ホテル出身、昼はAとBの2種で800〜1,000円、ごはん大盛り100円、若鶏のグリル、ロースの野菜巻きカツ、ハンバーグ、パスタ、自家製の無添加ドレッシングは販売も、夜は前菜の盛り合わせ、自家製ベーコンのペペロンチーノ、エビと Iwatsu ねぎのグラタン、Akashi のタコとカポナータ、鶏レバーのパテ、自家製からすみのパスタ、タルトタタン、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B111365788/', R + 'B423692109/', R + 'B463700130/', R + 'B482216105/', R + 'B496727741/', R + 'B503150663/', R + 'B504823704/', R + 'B504841443/', R + 'B512350905/', R + 'B514965212/', R + 'B517003057/', R + 'B525867248/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tatami seating; daily lunch on a board outside (2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区三国本町2-17-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区三国本町二丁目17番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B504841443/', R + 'B504823704/', R + 'B482216105/'],
    price_note: 'Lunch prices from 2024–2025 reviews; no dinner prices found.', last_checked: TODAY, items: [
      it('', '', 'Lunch A: meat main with soup, rice and sides', '¥1,000', 'Lunch', 'ask', 'no', 'April 2025.', 'lunch_a'),
      it('', '', 'Lunch B: daily pasta with soup and salad', '¥1,000', 'Lunch', 'no', 'no', '2023–2025.', 'lunch_b'),
    ] }, {
    cuisine: '季節の素材に和をとり入れた創作イタリアン (食べログ)。看板には Country-Style Western Cuisine とも (2024年5月)・昼: 日替わりのAセット (肉料理とごはん) とBセット (パスタ)、スープ、サラダ、小さな付け合わせがたくさん。800円 (2020年)、950円 (2024年)、1,000円 (2025年)、ごはん大盛り100円増し・昼の料理の例: 若鶏のグリル、若鶏のソテーのマリナーラ、ロースの野菜巻きカツ、ロースカツのデミグラス、塩味噌のローストポーク、ハンバーグ。パスタはイカとトマト、豚のラグー、ノルウェーサーモンとトマトなど (2023〜2025年)・自家製の無添加ドレッシングは持ち帰りも (2023年)・夜: 前菜の盛り合わせ、自家製ベーコンと野菜のペペロンチーノ、エビと Iwatsu ねぎのグラタン、なすとひき肉とチーズの焼き物、Akashi のタコとカポナータ、しらすと菜の花のサラダ、ほうれん草のポタージュ、鶏レバーのパテ、自家製からすみのパスタ、タルトタタン (2022〜2025年)',
    neighborhood: '三国本町2-17-5、阪急三国駅から南へ3分、最初の信号を過ぎた最初の通りの北東の角 (食べログ)',
    gf_detail: 'グルテンフリーではありません。パスタ、グラタン、カツ、パン。グリルの料理は確認を。',
    vegan_detail: 'ヴィーガンではありません。肉と魚の料理、チーズ、自家製ベーコン。食べログの特徴にベジタリアンメニューありとあり、野菜で知られる店なので確認を。',
    notes: '[イタリアン・阪急三国、1986年からの父と息子の店、野菜たっぷりの昼のプレート] 阪急三国駅の南3分、1986年からの18席の一軒家の店で、カウンターと掘りごたつの2卓は、おばあちゃんの家のよう (2025年)。料理は父と息子で、昼は常連で埋まり、肉料理かパスタの日替わり2種に付け合わせと野菜がたっぷりで1,000円 (2025年)。13時ごろには売り切れることも。夜は和をとり入れた季節のイタリアン: 自家製ベーコンのペペロンチーノ、Akashi のタコのカポナータ、レバーのパテ、自家製からすみのパスタ。現金のみ。火曜休み。',
  });
}

// ================================================================ 喫茶ランプティラ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27051615/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lamptira-kissa.shopinfo.jp/';
  const H = day(['11:30', '18:15']);
  put({
    id: 'osaka_kissa_lamptila_kikawahigashi', name: '喫茶ランプティラ (Kissa Lamptila)', category: 'OMNI',
    lat: 34.722876, lng: 135.491478, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: natural-yeast wheat and rye breads, toast, sandwiches, scones and cakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter, egg-rich puddings, cream, cheesecakes, chicken ham and bacon.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–18:15 (last order 18:00), staying open to 19:00 if guests are still having tea; closed Wednesday plus extra days announced monthly on the site and Instagram (shop site; Tabelog). No reservations (Tabelog). Tabelog lists AMEX, but two 2026 diners say cash only (June and October 2026). 13 seats with a counter; non-smoking; one parking space (Tabelog). Takeaway bread; by closing time much of it is sold out (2024–2025). A note asks guests to keep voices down (December 2024). Opened 23 June 2010 (Tabelog); a regular has come "since before the name change" (December 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '木川東1-11-15 長島ビル 1F, on Yodogawa-dori between Nishinakajima-Minamigata (7 min) and Hankyu Juso (10 min) (Tabelog; February 2026)',
    cuisine: 'A kissa of natural-yeast bread and simple sweets (shop site) · bread to take away, ¥250–420 a piece, such as walnut cheese, orange and melon bread (May 2025) · natural-yeast bread set with vegetables and soup, under ¥1,000 (September 2026); the "Hug Bread Plate"; a bagel plate (2024) · sandwiches: chicken ham mixed sandwich on whole-grain and rye bread ¥930 (April 2026); focaccia with egg and bacon (2024); a winter toast sandwich of homemade pickled turnip, nori, butter, soy sauce and black sesame ¥740 (January 2025, seasonal) · cinnamon-sugar toast, French toast, scones (2023–2024) · daily sweets: caramel pudding ¥560, pumpkin pudding ¥550, "Fairy’s Step" lemon drizzle cake with yogurt ice cream ¥700, black cheesecake with peach compote ¥900, strawberry roll cake ¥720, sweet potato cheesecake, coffee jelly (2025–2026) · drinks: coffee ¥520, "Utsuroi Blend" ¥550, masala chai ¥600, Assam milk tea ¥630, herbal and ginger teas (2024–2026)',
    website: SITE, gmaps: gm('喫茶ランプティラ 木川東'), menu_url: null,
    notes: '[Kissa · Nishinakajima-Minamigata, a quiet natural-yeast bread café] A 13-seat café on Yodogawa-dori between Nishinakajima-Minamigata and Juso, open since 2010, baking its own natural-yeast bread and simple sweets. Come for a bread plate with soup and vegetables (under ¥1,000, 2026) or a chicken-ham sandwich on rye, then a rich caramel pudding or the "Fairy’s Step" lemon cake with spiced chai. In winter, regulars return each year for a toast sandwich of pickled turnip and nori. It is calm, with a note asking for quiet voices, and popular with solo guests. Bread sells out by evening; cash only per 2026 diners; closed Wednesdays.',
    chef_bio: { chef_name: null, roles: ['Baker and staff (unnamed)'], origin: null,
      background: 'Per the shop site (lamptira-kissa.shopinfo.jp, read 2026-11-02): "a kissa of natural-yeast bread and simple sweets"; 11:30 to about 18:15, extended to 19:00 while guests are still at tea; closed Wednesday plus days posted monthly. Per Tabelog: opened 23 June 2010. Per reviews: "I’ve been coming here since before the name change" (December 2024); "There’s a note asking guests to keep the noise down, whether you’re dining alone or with someone else" (December 2024); freshly baked bread not yet on the shelves can be asked for (May 2025); "many solo female diners" (February 2026); tea leaves can be chosen for the iced milk tea (February 2026).',
      philosophy: null, specialty: 'Natural-yeast bread; puddings and cakes.',
      anecdotes: [
        { text: '"The combination of pickles and bread is surprisingly harmonious, enhanced by a subtle addition of seaweed and butter." — February 2026, the seasonal turnip and seaweed toast.', source: R + 'B25682828/' },
        { text: '"I was informed that [the shop] had freshly baked items that were not yet displayed on the shelves, so I could ask for them directly." — May 2025.', source: R + 'B507547208/' },
        { text: '"The classic pudding is made with a higher proportion of egg yolks." — June 2026, caramel pudding ¥560.', source: R + 'B517345962/' },
      ],
      japanese_sources_summary: '店のサイト (lamptira-kissa.shopinfo.jp): Lamptira、天然酵母パンとシンプルな菓子の喫茶店、大阪市淀川区木川東1-11-15 長島ビル、11:30〜18:15ごろ (L.O.18:00)、喫茶中のお客がいれば19時まで延長、水曜休みと毎月お知らせする休み。食べログ: 喫茶ランプティラ、カフェ・パン・ケーキ、阪急十三駅から徒歩10分、西中島南方駅から7分、予約不可、カードは AMEX と掲載、13席、禁煙、駐車場1台、テイクアウト、2010年6月23日オープン。口コミ (2023年〜2026年10月): パン1個250〜420円、天然酵母パンのセット (野菜とスープ) 1,000円以下、Hug Bread Plate、ベーグルのプレート、チキンハムのミックスサンド930円、卵とベーコンのフォカッチャ、冬限定のかぶと海苔のトーストサンド740円、シナモンシュガートースト、スコーン、プリン560円、かぼちゃプリン550円、Fairy’s Step のレモンケーキとヨーグルトアイス700円、Black Cheesecake 900円、いちごのロールケーキ720円、マサラチャイ600円、アッサムのミルクティー630円、店名が変わる前から通う常連、静かにという張り紙、現金のみという声 (2026年)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B25682828/', R + 'B473434563/', R + 'B479610931/', R + 'B496206291/', R + 'B499664160/', R + 'B503305645/', R + 'B507547208/', R + 'B517345962/', R + 'B526802450/', R + 'B536308552/', R + 'B536803819/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet room suited to solo guests (2024–2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区木川東1-11-15 長島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with September 2026 notices; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区木川東一丁目11番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517345962/', R + 'B526802450/', R + 'B536803819/', R + 'B496206291/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Natural-yeast bread set with vegetables and soup', 'under ¥1,000', 'Bread', 'no', 'no', 'September 2026.', 'bread_set'),
      it('', '', 'Chicken ham mixed sandwich', '¥930', 'Sandwiches', 'no', 'no', 'April 2026.', 'chicken_ham_sandwich'),
      it('', '', 'Caramel pudding', '¥560', 'Sweets', 'ask', 'no', 'June 2026.', 'caramel_pudding'),
      it('', '', '"Fairy’s Step" lemon drizzle cake with yogurt ice cream', '¥700', 'Sweets', 'no', 'no', 'June 2026.', 'lemon_drizzle'),
      it('', '', 'Masala chai', '¥600', 'Drinks', 'ask', 'ask', 'April 2026.', 'masala_chai'),
    ] }, {
    cuisine: '天然酵母パンとシンプルな菓子の喫茶店 (店のサイト)・持ち帰りのパンは1個250〜420円、くるみチーズ、オレンジ、メロンパンなど (2025年5月)・天然酵母パンのセットに野菜とスープで1,000円以下 (2026年9月)。Hug Bread Plate、ベーグルのプレート (2024年)・サンド: 全粒粉とライ麦のパンのチキンハムのミックスサンド930円 (2026年4月)。卵とベーコンのフォカッチャ (2024年)。冬限定の、自家製のかぶの漬物、海苔、バター、醤油、黒ごまのトーストサンド740円 (2025年1月)・シナモンシュガートースト、フレンチトースト、スコーン (2023〜2024年)・日替わりの菓子: プリン560円、かぼちゃプリン550円、Fairy’s Step のレモンケーキとヨーグルトアイス700円、Black Cheesecake と桃のコンポート900円、いちごのロールケーキ720円、さつまいものチーズケーキ、コーヒーゼリー (2025〜2026年)・飲み物: コーヒー520円、Utsuroi Blend 550円、マサラチャイ600円、アッサムのミルクティー630円、ハーブティー、しょうがのお茶 (2024〜2026年)',
    neighborhood: '木川東1-11-15 長島ビル 1F、淀川通り沿い、西中島南方駅から7分、阪急十三駅から10分 (食べログ、2026年2月)',
    gf_detail: 'グルテンフリーではありません。天然酵母の小麦とライ麦のパン、トースト、サンド、スコーン、ケーキ。',
    vegan_detail: 'ヴィーガンではありません。バター、卵の多いプリン、クリーム、チーズケーキ、チキンハム、ベーコン。',
    notes: '[喫茶・西中島南方、静かな天然酵母パンの喫茶店] 淀川通り沿い、西中島南方と十三のあいだにある13席の喫茶店で、2010年から。天然酵母のパンとシンプルな菓子を自分の店で焼く。スープと野菜のつくパンのプレート (1,000円以下、2026年) や、ライ麦パンのチキンハムのサンドに、卵黄の多いプリンや Fairy’s Step のレモンケーキとチャイを。冬は、かぶの漬物と海苔のトーストサンドを毎年食べに来る常連も。静かな店で、声をひそめてという張り紙があり、ひとり客が多い。パンは夕方には売り切れ。現金のみという声 (2026年)。水曜休み。',
  });
}

save();
