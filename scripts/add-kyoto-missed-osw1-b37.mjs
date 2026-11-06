// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 37.
//   + 焼肉ダイスケ Yakiniku Daisuke (couple-run Wagyu yakiniku on Shijo-Aburanokoji)
//   + 鳳城 Hojo (family Chinese restaurant in a machiya off Oike since 1988; dandan noodles)
//   + 楽仙樓 Rakusenro (Chinese and hot pot near Shijo Karasuma since 1994; boiled dumplings)
//   + 京ダイニング八条 Kyo Dining Hachijo (beer dining by the Shinkansen Hachijo Exit, Kyoto Station)
//   - 鳥せい 京都タワーサンド店 (26028812): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26031584, 26007812; from `next notable
//   200`: 26000378, 26028812 (skipped), 26014490. None is in data/kyoto.json by name (ダイスケ/Daisuke — 京おでん だいすけ
//   is a different shop — 鳳城/Hojo, 楽仙樓/Rakusenro, 京ダイニング八条) or address (石井筒町518, 西横町170, 元悪王子町37,
//   東塩小路高倉町8-3 アスティロード).
//   Same-name count (same brand or operator only): 焼肉ダイスケ, 鳳城 — one shop each; 楽仙樓 — 楽仙樓株式会社, registered at
//   the shop's own address (NTA register); 京ダイニング八条 — one shop; operator not found. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 楽仙樓 — the English page says 10% is added, but the
//   original reads なし (none). Others none listed.
//   Halal (Greg 2026-11-06): no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028812', '鳥せい 京都タワーサンド店: a branch of a chain — a Tabelog Kyoto name search (2026-11-06) lists eleven 鳥せい shops (本店, 三条店, 西陣店, 清水店, 醍醐店, 淀店, 八幡店, 向日町店, 千代原口店, 京都競馬場店 and this one)');

// ================================================================ 焼肉ダイスケ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26031584/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakiniku-daisuke.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_daisuke', name: '焼肉ダイスケ (Yakiniku Daisuke)', category: 'OMNI',
    lat: 35.003568, lng: 135.75375, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu with a homemade secret sauce, salted tongue, yukhoe, kimchi and namul, Kujo green-onion tempura, clay-pot rice with shigure-ni; the sauce ingredients are not given (Tabelog shop text; 2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu yakiniku restaurant (Tabelog; 2024–2025 reviews).',
    hours_raw: '17:00–23:00 (L.O. 22:30); closed Tuesday (Tabelog). Reservations accepted; call if more than 10 minutes late or the booking may be cancelled; families with small children are asked to phone ahead; baby food can be brought (tell the shop when booking); one high chair (Tabelog). Cards; no e-money or QR (Tabelog). 20 seats: 4 at the counter, 16 at tables, with sofas; a second floor for about 8 opened by January 2025; private room up to 20 (Tabelog; January 2025). Non-smoking; smoking area outside; wheelchair accessible; English menu (Tabelog). On Shijo-dori east of Aburanokoji, 5 min from Hankyu Karasuma and Omiya Stns (Tabelog). Opened 17 October 2018 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-dori east of Aburanokoji — 5 min from Hankyu Omiya Stn',
    cuisine: 'Wagyu yakiniku of A4 grade or higher with a homemade secret sauce; house seasonal sours and ice cream (Tabelog shop text) · today’s omakase assortment of five cuts ¥3,800; Wagyu yukhoe ¥1,300; kimchi assortment ¥650 (August 2025) · tongue in several styles — tongue yukhoe, tongue with Kujo green onion, thick-cut tongue (2025) · thick-cut strip loin, Chateaubriand, misuji, outside skirt, thigh with “snow sauce”, shiitake (2025) · Kujo green-onion tempura to wrap with grilled meat (May 2025) · courses and free-drink plans; clay-pot rice with shigure-ni to finish (2024–2025)',
    website: SITE, gmaps: gm('焼肉ダイスケ 京都 四条油小路'), menu_url: null,
    notes: '[Yakiniku · Shijo-Aburanokoji, a couple’s Wagyu grill] A stylish, family-feeling yakiniku room on Shijo-dori run by a friendly owner couple (who also have a YouTube channel), serving A4-and-up Wagyu with a house sauce: tongue three ways, yukhoe, thick-cut strip loin, a five-cut omakase platter (¥3,800), and Kujo green-onion tempura to wrap around the meat. English menu; staff speak English. About ¥6,000–10,000 a head. Closed Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says guests are “welcomed by our friendly owner couple”; a January 2024 reviewer describes a restaurant “run by a couple who also have a YouTube channel”, and another (January 2024) a warm, family-run atmosphere. A May 2025 visitor found that all the staff could communicate in English and that prices were not inflated for tourists.',
      philosophy: 'High-quality Wagyu at reasonable prices (Tabelog shop text).', specialty: 'Wagyu tongue; omakase assortment; Kujo green-onion tempura.',
      anecdotes: [
        { text: 'A high-school club has held its year-end party here three years running (December 2024).', source: R + 'B500005631/' },
        { text: 'A May 2025 diner was shown how to spread the Kujo green-onion tempura, wrap it with green-onion paste, and grill it.', source: R + 'B506785794/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉ダイスケ、焼肉・ホルモン・居酒屋、下京区四条通油小路東入ル石井筒町518、阪急烏丸駅・大宮駅から徒歩5分、17:00〜23:00 (L.O.22:30)、火曜定休、予約可 (10分以上遅れる場合は電話を)、小さな子ども連れは電話で相談、離乳食の持ち込み可、カード可、20席 (カウンター4、テーブル16)、個室は20名まで、禁煙 (店外に喫煙所)、車椅子可、英語メニュー、2018年10月17日オープン。店の紹介: A4ランク以上の和牛を自家製の秘伝のたれで、季節のサワーやアイスもオリジナル、気さくなオーナー夫婦。口コミ (2024〜2025年、英語): YouTube もしている夫婦の店、タンのユッケ、九条ねぎのタン、厚切りタン、おまかせ5種盛り3,800円、和牛ユッケ1,300円、キムチ盛り650円、九条ねぎの天ぷら、土鍋のしぐれ煮ご飯、スタッフは英語で対応できる。',
      confidence: 'medium', sources: [TB, SITE, R + 'B488791650/', R + 'B500005631/', R + 'B502351769/', R + 'B504557595/', R + 'B506785794/', R + 'B508342938/', R + 'B511980316/', R + 'B514953534/', R + 'B519946974/', R + 'B524685625/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); staff communicate in English (May 2025). Families welcome with notice.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区四条通油小路東入ル石井筒町518',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.003568, 135.75375); cross-checked: GSI 京都府京都市下京区石井筒町518番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511980316/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Today’s omakase assortment (5 cuts)', '¥3,800', 'Beef', 'ask', 'no', 'August 2025.', 'omakase_moriawase'),
      it('', '', 'Wagyu yukhoe', '¥1,300', 'Beef', 'ask', 'no', 'August 2025.', 'yukhoe'),
      it('', '', 'Kimchi assortment', '¥650', 'Sides', 'ask', 'ask', 'August 2025.', 'kimchi'),
      it('', '', 'Kujo green-onion tempura', '', 'Sides', 'no', 'ask', 'May 2025.', 'negi_tempura'),
    ] }, {
    cuisine: 'A4ランク以上の和牛の焼肉、自家製の秘伝のたれ。季節のサワーやアイスもオリジナル (食べログの店の紹介)・本日のおまかせ5種盛り3,800円、和牛ユッケ1,300円、キムチ盛り合わせ650円 (2025年8月)・タンのユッケ、九条ねぎのタン、厚切りタン (2025年)・厚切りロース、シャトーブリアン、ミスジ、ハラミ、もも肉の雪のソース、椎茸 (2025年)・焼いた肉で巻く九条ねぎの天ぷら (2025年5月)・コースと飲み放題、締めは土鍋のしぐれ煮ご飯 (2024〜2025年)',
    neighborhood: '油小路の東の四条通。阪急大宮駅から徒歩5分',
    gf_detail: '要確認。自家製のたれの和牛、塩タン、ユッケ、キムチとナムル、九条ねぎの天ぷら、しぐれ煮の土鍋ご飯。たれの材料は書かれていない (食べログの店の紹介、2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉店 (食べログ、2024〜2025年の口コミ)。',
    notes: '[焼肉・四条油小路、夫婦の和牛焼肉] 四条通のおしゃれで家庭的な焼肉店。YouTube もしている気さくなオーナー夫婦が、A4以上の和牛を店のたれで。3種のタン、ユッケ、厚切りロース、5種のおまかせ盛り (3,800円)、肉で巻く九条ねぎの天ぷら。英語メニューがあり、スタッフも英語で対応。1人6,000〜10,000円ほど。火曜休み。',
  });
}

// ================================================================ 鳳城
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007812/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_hojo_chinese_oike', name: '鳳城 (Hojo)', category: 'OMNI',
    lat: 35.011088, lng: 135.756912, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese dishes with soy sauce and wheat noodles — dandan noodles, chashu ramen, fried rice, bone-in kara-age, sweet-and-sour meatballs; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese meat and seafood dishes; broths not described (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (L.O. 14:30), dinner 17:30–21:30 (food L.O. 20:30, drinks 21:00); closed Tuesday and irregular days (Tabelog; October 2026). Reservations accepted; online up to 6, larger parties by phone (Tabelog). Cash only (Tabelog; October 2026). Prices rose from 1 May 2026 (April 2026). 28 seats over two floors; private room up to 20 (Tabelog). Non-smoking; English menu; take-out; children welcome, one small chair (Tabelog). In a two-storey machiya on Oike-dori near Shinmachi, 5 min from Karasuma Oike Stn (Tabelog; 2026 reviews). Established 1988 (Tabelog shop text).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Oike-dori near Shinmachi — 5 min from Karasuma Oike Stn',
    cuisine: 'Kyoto-style Chinese with a light, delicate touch, in a machiya renovated in 1988 (Tabelog shop text) · signature “Atari Goma” dandan noodles: mild heat, rich sesame, a light soy broth with spinach and thin noodles, ¥900 (shop text; 2026 reviews) · mini fried rice set ¥450 with any à la carte dish; fried rice with a hint of plum (February and October 2026) · Chinese-style sea bream sashimi with nuts ¥1,200 (October 2026) · mapo tofu set ¥990 (June 2026) · chashu ramen; bone-in kara-age; course of jellyfish and chicken, white-skinned meat rolls, tamagoyaki, sweet-and-sour meatballs, eight-treasure stir-fry (2026 reviews) · draft beer under ¥500 (February 2026)',
    website: null, gmaps: gm('鳳城 京都 御池 中華'), menu_url: null,
    notes: '[Chinese · Oike near Shinmachi, a family machiya since 1988] A family-run Chinese restaurant in a two-storey machiya on Oike-dori with retro tables and a gentle, Kyoto-style touch. The draw is the sesame-rich, mildly spicy dandan noodles (¥900), with a mini fried rice set for ¥450; also sea bream sashimi Chinese-style, mapo tofu sets and old-school courses. Cash only; closed Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Family-run (unnamed); now the son runs the restaurant (February 2026)'], origin: null,
      background: 'Tabelog’s shop text: established in 1988 in a renovated townhouse, with Kyoto-style Chinese cooking refined after training at Sichuan restaurants and hotels. A February 2026 regular learned from the owner that the son has taken over, and was shown a plaque explaining the name: 鳳城, from Du Fu’s poem “Night”, is an elegant name for Chang’an (Xi’an), chosen for the friendship between Xi’an — sister city of Kyoto since 1974 — and Kyoto. An October 2026 reviewer calls it a long-established restaurant “run by a family in a historic Kyoto townhouse”; an April 2026 diner found the owner very attentive.',
      philosophy: null, specialty: 'Dandan noodles; fried rice.',
      anecdotes: [
        { text: 'An October 2026 solo diner liked that any à la carte dish can come with a rice or mini fried rice set.', source: R + 'B537459540/' },
        { text: 'A January 2026 diner, put off by how greasy the half fried rice looked, found it delicious.', source: R + 'B520249220/' },
      ],
      japanese_sources_summary: '食べログ: 鳳城、中華料理・ラーメン、中京区西横町170、烏丸御池駅から徒歩5分、昼11:30〜15:00 (L.O.14:30)、夜17:30〜21:30 (料理L.O.20:30)、火曜定休、予約可 (ネットは6名まで)、カード・電子マネー・QR不可、28席、個室20名まで、禁煙、英語メニュー、テイクアウト、子ども可。店の紹介: 1988年創業、町家を改装した中華料理店、四川料理店やホテルで修業した京風のやさしい中華、名物の Atari Goma (担々麺)。口コミ (2026年、英語): 担々麺900円、ミニ炒飯セット450円、鯛の中華風刺身1,200円、麻婆豆腐定食990円、チャーシュー麺、骨付き唐揚げ、家族で営む、息子が継いだ、店名は杜甫の詩にちなむ長安の雅称で、西安と京都の友好にちなむ。',
      confidence: 'medium', sources: [TB, R + 'B113260506/', R + 'B520249220/', R + 'B522667092/', R + 'B524273100/', R + 'B526217595/', R + 'B526438520/', R + 'B526991369/', R + 'B528267711/', R + 'B530148866/', R + 'B537459540/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); cash only; solo-friendly with set options.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西横町170',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011088, 135.756912); cross-checked: GSI 京都府京都市中京区西横町170番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537459540/', R + 'B530148866/'],
    price_note: 'Prices from June and October 2026 reviews; prices rose on 1 May 2026.', last_checked: TODAY, items: [
      it('', '', 'Atari Goma dandan noodles', '¥900', 'Noodles', 'no', 'no', 'October 2026.', 'dandan'),
      it('', '', 'Mini fried rice set (added to any dish)', '¥450', 'Rice', 'ask', 'no', 'October 2026.', 'mini_chahan'),
      it('', '', 'Chinese-style sea bream sashimi', '¥1,200', 'Appetizers', 'ask', 'no', 'October 2026.', 'tai_sashimi'),
      it('', '', 'Mapo tofu set', '¥990', 'Sets', 'ask', 'no', 'June 2026.', 'mapo_teishoku'),
    ] }, {
    cuisine: '1988年に町家を改装した店の、やさしい京風中華 (食べログの店の紹介)・名物 Atari Goma (担々麺): 辛さ控えめ、濃い胡麻の香り、ほうれん草と細麺のあっさりした醤油のスープ、900円 (店の紹介、2026年の口コミ)・どの一品にもつけられるミニ炒飯セット450円、梅の香りの炒飯 (2026年2月、10月)・ナッツをのせた鯛の中華風刺身1,200円 (2026年10月)・麻婆豆腐定食990円 (2026年6月)・チャーシュー麺、骨付き唐揚げ、くらげと鶏の前菜、白い皮の肉巻き、卵焼き、肉団子の甘酢、八宝菜のコース (2026年の口コミ)・生ビールは500円以下 (2026年2月)',
    neighborhood: '新町近くの御池通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。醤油と小麦の麺の中華。担々麺、チャーシュー麺、炒飯、骨付き唐揚げ、肉団子の甘酢。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉と魚介の中華。スープの中身は書かれていない (2026年の口コミ)。',
    notes: '[中華・御池新町、1988年からの家族の町家] 御池通の2階建ての町家で家族が営む中華。レトロなテーブルで、やさしい京風の味。名物は胡麻が濃く辛さ控えめの担々麺 (900円)、ミニ炒飯セットは450円。鯛の中華風刺身、麻婆豆腐の定食、昔ながらのコースも。現金のみ、火曜休み。',
  });
}

// ================================================================ 楽仙樓
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000378/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://rakusenroh.jp/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_rakusenro_shijo', name: '楽仙樓 (Rakusenro)', category: 'OMNI',
    lat: 35.00339, lng: 135.761014, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the specialty is boiled dumplings in wheat wrappers; noodle sets and fried dishes (official shop; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese meat and seafood dishes; hot pot with lamb courses (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:30–22:00; irregular closures (Tabelog). Reservations accepted, limited to two hours at busy times; cancel same-day by phone; full charge for no-shows on a booked course (Tabelog). No service charge (Tabelog, original なし; the English page’s “10% service charge” is a mistranslation). Cards, IC, e-money and many QR codes (Tabelog). Tablet ordering, with staff taking orders for anyone who prefers (September 2026). 38 seats: 10 at the counter, 12 at tables, two semi-private rooms for 6–8, 10 on the terrace; smoking only on the terrace; dogs welcome on the terrace (Tabelog; September 2026). Wheelchair accessible; free Wi-Fi (Tabelog). On Higashinotoin south of Shijo, 1 min from Hankyu Karasuma Stn exit 19 (Tabelog). Opened 1 August 1994 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin just south of Shijo — 1 min from Hankyu Karasuma Stn',
    cuisine: 'Long-running Chinese with chewy boiled dumplings (sui gyoza) as the specialty; sold also through an online shop (official site title; 2026 reviews) · weekday lunch sets ¥1,300–1,400: boiled dumplings with fried rice ¥1,400; sweet-and-sour pork set ¥1,400 (August–October 2026) · chilled Chinese noodles in summer (September 2025) · Chinese hot pot courses, including lamb, with refillable vegetables and a bar of condiments for dipping sauces; free-drink plans (August–October 2026) · shrimp balls; assorted three appetizers ¥1,200; stir-fried squid and peppers; pan-fried dumplings; Shaoxing wine by the bottle ¥3,200 (September 2026)',
    website: SITE, gmaps: gm('楽仙樓 京都 東洞院'), menu_url: null,
    notes: '[Chinese and hot pot · Higashinotoin-Shijo, since 1994] A busy, friendly Chinese restaurant a minute from Shijo Karasuma, known for chewy boiled dumplings. Weekday lunch sets around ¥1,400 (dumplings and fried rice, sweet-and-sour pork); at night Chinese hot pot courses — lamb included — with a condiment bar, plus classic plates and Shaoxing wine. A terrace takes dogs and smokers. Tablet ordering; no service charge.',
    chef_bio: { chef_name: null, roles: ['Operated by 楽仙樓株式会社'], origin: null,
      background: 'Tabelog’s invoice number T7130001028310 is registered to 楽仙樓株式会社 at the restaurant’s own address (NTA register); opened in August 1994 (Tabelog). The official online shop sells its boiled dumplings. Reviewers praise quick, friendly service (2026); an October 2026 diner came after seeing it on television.',
      philosophy: null, specialty: 'Boiled dumplings; Chinese hot pot.',
      anecdotes: [
        { text: 'A September 2026 regular brings a dog and sits on the terrace, which has a spot cooler and shade on hot days.', source: R + 'B450826062/' },
        { text: 'An October 2026 group of five ordered hot pot for the first time and never got to the noodles because the vegetables kept being refilled.', source: R + 'B458958056/' },
      ],
      japanese_sources_summary: '食べログ: 楽仙樓、中華料理・居酒屋・中華鍋、下京区東洞院通四条下ル元悪王子町37 豊元ビル1F、阪急烏丸駅19番出口から徒歩1分、昼11:30〜14:30、夜17:30〜22:00、不定休、予約可 (混雑時は2時間制、コースの無断キャンセルは全額)、サービス料なし、カード・電子マネー・QR可、38席 (カウンター10、テーブル12、半個室2、テラス10)、テラスのみ喫煙可、車椅子可、1994年8月1日オープン、適格請求書 T7130001028310 (楽仙樓株式会社)。公式通販: 名物水餃子と老舗本格中華。口コミ (2025〜2026年、英語): 水餃子、平日ランチ1,300〜1,400円、水餃子と炒飯のセット1,400円、酢豚定食1,400円、羊のコースもある中華鍋、薬味で作るたれ、海老団子、紹興酒、タブレット注文、テラスは犬と喫煙可。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001028310', R + 'B450826062/', R + 'B458958056/', R + 'B509545238/', R + 'B528081719/', R + 'B533173948/', R + 'B533944377/', R + 'B536021454/', R + 'B536851267/', R + 'B538258570/', R + 'B56562741/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering, or staff take orders in person; terrace welcomes dogs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通四条下ル元悪王子町37 豊元ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official online shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00339, 135.761014); cross-checked: GSI 京都府京都市下京区元悪王子町37番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533944377/', R + 'B56562741/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Boiled dumplings and fried rice set (lunch)', '¥1,400', 'Lunch', 'no', 'no', 'August 2026.', 'suigyoza_set'),
      it('', '', 'Sweet-and-sour pork set (lunch)', '¥1,400', 'Lunch', 'no', 'no', 'October 2026.', 'subuta_set'),
      it('', '', 'Assorted three appetizers', '¥1,200', 'Appetizers', 'ask', 'ask', 'September 2026.', 'zensai'),
      it('', '', 'Chinese hot pot course', '', 'Courses', 'ask', 'no', '2026 reviews.', 'hotpot_course'),
    ] }, {
    cuisine: '老舗の中華、名物はもちもちの水餃子。オンラインでも販売 (公式サイトの表題、2026年の口コミ)・平日のランチ1,300〜1,400円: 水餃子と炒飯のセット1,400円、酢豚定食1,400円 (2026年8〜10月)・夏は冷やし中華 (2025年9月)・羊のコースもある中華鍋、おかわりできる野菜、薬味でたれを作る、飲み放題も (2026年8〜10月)・海老団子、前菜3種1,200円、いかとピーマンの炒め、焼き餃子、紹興酒のボトル3,200円 (2026年9月)',
    neighborhood: '四条のすぐ南の東洞院通。阪急烏丸駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。名物は小麦の皮の水餃子。麺のセットや揚げ物も (公式通販、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉と魚介の中華、羊のコースもある中華鍋 (2026年の口コミ)。',
    notes: '[中華と鍋・東洞院四条、1994年から] 四条烏丸から1分の、にぎやかで感じのよい中華。名物はもちもちの水餃子。平日のランチは1,400円ほどのセット (水餃子と炒飯、酢豚)、夜は羊も選べる中華鍋のコースと薬味のたれ、定番の皿と紹興酒。テラスは犬と喫煙可。タブレットで注文、サービス料なし。',
  });
}

// ================================================================ 京ダイニング八条
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26014490/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_kyo_dining_hachijo', name: '京ダイニング八条 (Kyo Dining Hachijo)', category: 'OMNI',
    lat: 34.984731, lng: 135.759698, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative Western dishes with Kyoto ingredients — steak set, hamburg steak with fried shrimp, beef-cutlet curry, yuba and tofu salad; no gluten information (Tabelog shop text; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A fresh yuba and tofu salad is on the menu, but dressings and dashi are not described; most dishes are meat (2026 reviews).',
    hours_raw: '11:00–23:00 (L.O. 22:00) daily (Tabelog). Reservations accepted (Tabelog). Mobile ordering (October 2026). Cards, e-money and QR, PayPay (Tabelog; September 2026). 68 seats with a counter; private hire possible; non-smoking (Tabelog). In the Kyoto Omotenashi Koji restaurant row of ASTY Road, steps from the Shinkansen Hachijo Exit of JR Kyoto Station (Tabelog). Opened 13 November 2009 (Tabelog); formerly called Hachijo Diner (August 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station, ASTY Road by the Shinkansen Hachijo Exit',
    cuisine: 'Beer dining with creative Western dishes using local ingredients; exclusive drinks such as Hachijo Beer and a Kyoto Highball; lunch menu (Tabelog shop text) · handmade hamburg steak and fried shrimp lunch ¥2,380 (September 2026) · steak set meal; beef-cutlet curry (October 2026) · fresh yuba and tofu salad (August 2026) · Kyoto seasonal dishes with dashi (August 2026) · Premium Malts on draft (October 2026)',
    website: null, gmaps: gm('京ダイニング八条 京都駅'), menu_url: null,
    notes: '[Beer dining · Kyoto Station Hachijo Exit, a pre-Shinkansen stop] A machiya-fronted beer restaurant right by the Shinkansen gates, open 11:00–23:00: house Hachijo Beer and a Kyoto Highball with Western plates using local produce — hamburg and fried shrimp, steak sets, beef-cutlet curry, a yuba and tofu salad. One reviewer calls it a private “Shinkansen lounge” for a last beer in Kyoto.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed); operator not found'], origin: null,
      background: 'No operator or chef is named in the sources opened. An August 2026 regular remembers it under its old name, Hachijo Diner, and still takes the same counter seat.',
      philosophy: null, specialty: 'Hachijo Beer; Western dishes with Kyoto ingredients.',
      anecdotes: [
        { text: 'A September 2026 traveller, used to an airport-lounge beer, called it “my own little lounge” next to the Shinkansen ticket gate.', source: R + 'B536787288/' },
        { text: 'An August 2026 couple chose it for a proper dinner before an evening Shinkansen because it was not crowded.', source: R + 'B533332402/' },
      ],
      japanese_sources_summary: '食べログ: 京ダイニング八条、ビアホール・ビアバー・バー、下京区東塩小路高倉町8-3 JR京都駅構内アスティロードレストラン街1F、JR京都駅八条口から徒歩1分、毎日11:00〜23:00 (L.O.22:00)、予約可、カード・電子マネー・QR可、68席、貸切可、禁煙、2009年11月13日オープン。店の紹介: 京都駅新幹線八条口の Kyoto Omotenashi Koji のビアレストラン、町家風の外観と洋風の店内、地元の食材を取り入れた創作洋食、限定の Hachijo Beer と Kyoto Highball、ランチもある。口コミ (2026年、英語): 以前は Hachijo Diner、手ごねハンバーグとエビフライのランチ2,380円、ステーキ定食、ビーフカツカレー、生湯葉と豆腐のサラダ、新幹線の前の一杯。',
      confidence: 'medium', sources: [TB, R + 'B112996612/', R + 'B533332402/', R + 'B533619273/', R + 'B533852638/', R + 'B535047603/', R + 'B535283387/', R + 'B536787288/', R + 'B536832955/', R + 'B537795547/', R + 'B537859183/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station restaurant with mobile ordering; easy for travellers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路高倉町8-3 ＪＲ京都駅構内アスティロードレストラン街 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984731, 135.759698); GSI matched only the town (東塩小路高倉町), so cross-checked with OpenStreetMap restaurant 京ダイニング八条 (node 4391139768) at 34.984555, 135.7599995, about 34m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535283387/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Handmade hamburg steak and fried shrimp lunch', '¥2,380', 'Lunch', 'no', 'no', 'September 2026.', 'hamburg_ebifry'),
      it('', '', 'Hachijo Beer', '', 'Drinks', 'no', 'ask', 'Tabelog shop text; ask about ingredients.', 'hachijo_beer'),
      it('', '', 'Fresh yuba and tofu salad', '', 'À la carte', 'ask', 'ask', 'August 2026.', 'yuba_salad'),
    ] }, {
    cuisine: '地元の食材を取り入れた創作洋食のビアレストラン。限定の Hachijo Beer と Kyoto Highball、ランチもある (食べログの店の紹介)・手ごねハンバーグとエビフライのランチ2,380円 (2026年9月)・ステーキ定食、ビーフカツカレー (2026年10月)・生湯葉と豆腐のサラダ (2026年8月)・出汁を効かせた京都の季節の料理 (2026年8月)・Premium Malts の生 (2026年10月)',
    neighborhood: '京都駅、新幹線八条口のアスティロード',
    gf_detail: '要確認。京都の食材を使う創作洋食。ステーキ定食、ハンバーグとエビフライ、ビーフカツカレー、湯葉と豆腐のサラダ。グルテンの情報はない (食べログの店の紹介、2026年の口コミ)。',
    vegan_detail: '要確認。生湯葉と豆腐のサラダもあるが、ドレッシングや出汁は書かれていない。ほとんどは肉料理 (2026年の口コミ)。',
    notes: '[ビアダイニング・京都駅八条口、新幹線の前に] 新幹線の改札のすぐそば、町家風の外観のビアレストラン。11時〜23時。店の Hachijo Beer や Kyoto Highball に、地元の食材の洋食 (ハンバーグとエビフライ、ステーキ定食、ビーフカツカレー、湯葉と豆腐のサラダ)。京都での最後の一杯にと「新幹線のラウンジ」代わりに使う人も。',
  });
}

save();
