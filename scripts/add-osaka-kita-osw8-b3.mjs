// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 3.
//   + おどりや 西中島店 Odoriya Nishinakajima ten (seafood and robata izakaya with market fish and hot-pot courses)
//   + ラーメン坐 裕冬 Ramenza Yuto (Jiro-style niboshi ramen and abura soba; no ramen block, see below)
//   + 手打ち麺 やす田 Teuchi Men Yasuda (one-man, seven-seat handmade-noodle shio ramen; Tabelog Ramen 100 2017–2025)
//   + vegecafe＋α Vege Cafe + α (vegetable lunch cafe with a rooftop garden and award-winning gelato; vegan options)
//   - skipped 麺や マルショウ 地下鉄新大阪店 27091131: its food hall, 新なにわ大食堂, closes at the end of November 2026 (November 2026 review);
//     also one of at least two Marusho shops (江坂店 on Tabelog).
//   - skipped 大衆酒場 フレンチマン 27119893: chain already in data (himeji: 大衆酒場 フレンチマン 姫路店); the listing names the Kyoto main shop,
//     Osaka Station Building No. 3 and No. 4, Namba and Toranomon (Tokyo) branches.
//   - skipped スターバックス・コーヒー 27060249 (international chain), らーめん 牛骨の王 アルデ新大阪店 27144523 (website kiou.co.jp, the
//     九州らーめん亀王 group, whose shop list names 17 shops incl. JR新大阪駅店 and Singapore), 卵と私 新大阪店 27051925 (omurice chain with
//     shops in Shibuya, Tennoji Mio, Koshigaya, Sogo Chiba, Sapporo and Sogo Hiroshima per a web search, 2026-11-01).
//   Chain check of the four added: Odoriya: no sister shop on Tabelog or in a web search (2026-11-01). Yuto: one shop (Tabelog).
//   Yasuda: one shop, owner alone since March 2019 (Tabelog remarks). Vege Cafe + α: one cafe with its own gelato counter (Tabelog).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). Yuto (西中島5-8-26) is 37–38 m from osaka_hira_nishinakajima and
//   osaka_ichadoru_korean_butadon_nishinakajima (both address_ja 西中島5-8-29 チサンマンション第3新大阪); different street number, no
//   shared-building claim. Tabelog URLs copied from each listing.txt line 1.
//   Yuto has no ramen block: reviews support richness, oiliness, tare, firmness and aroma, but nothing describes the broth's clarity,
//   so per the 2026-11-01 lesson the block is left off rather than guessed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27091131', '麺や マルショウ 地下鉄新大阪店: its food hall 新なにわ大食堂 closes at the end of November 2026 (November 2026 review B538482594); also one of at least two Marusho shops (江坂店)');
skip('27119893', 'chain already in data: 大衆酒場 フレンチマン (himeji record 大衆酒場 フレンチマン 姫路店); listing names Kyoto main shop, Osaka Ekimae Bldg 3 and 4, Namba and Toranomon branches');
skip('27060249', 'chain: Starbucks Coffee (JR Tokai Shin-Osaka station shop)');
skip('27144523', 'chain: らーめん 牛骨の王 is run by the 九州らーめん亀王 group (kiou.co.jp shop list: 17 shops incl. JR新大阪駅店 and Singapore)');
skip('27051925', 'chain: 卵と私 omurice shops in Tokyo, Osaka, Saitama, Chiba, Sapporo and Hiroshima (web search 2026-11-01)');

// ================================================================ おどりや 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27011833/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'osaka_odoriya_nishinakajima', name: 'おどりや 西中島店 (Odoriya Nishinakajima ten)', category: 'OMNI',
    lat: 34.729318, lng: 135.500441, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and nigiri come with soy sauce, and kara-age, tempura, chicken nanban, Taiwanese menchi katsu and cha soba are on the menu. One June 2026 group had its banquet course adjusted for dietary restrictions, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and robata izakaya with fish, meat and seafood hot pots. Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Mon–Sat 17:00–24:00 (food last order 23:00, drinks 23:30); holidays and the day before a holiday 17:00–24:00; closed Sunday, with substitute days off when a holiday falls; New Year opening from 5 January (Tabelog). Reservations accepted; walk-ins found room at 19:00 on a June 2026 night (half full). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 46 seats with a counter, tatami and sunken seating, semi-private seats for 2 to 30, whole hire for 20–50; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-7-19, ground floor of 第７新大阪ビル, between Shin-Osaka and Nishinakajima-Minamigata — 5 min from either (Tabelog)',
    cuisine: 'Seafood and robata izakaya; fish bought every morning at the central market (Tabelog) · the shop\'s signature: five-kind sashimi platter ¥748 a head, ordered by "almost 100%" of tables (Tabelog); ¥1,500 on an October 2026 night · courses with all-you-can-drink: "Odoriya Course" ¥6,500, "Ichiba no Utage Course" ¥5,300 (Tabelog, tax included); hamo suki nabe in season (Tabelog) · course hot pots with shrimp, clams and sea bream (July 2026) or soft roe (November 2025), a hot pot of mixed meats (June 2026), and a seafood maki roll to finish · grilled local fish, young-chicken kara-age, fries (June 2026) · single nigiri of squid, sea bream or horse mackerel ¥250 each, edamame ¥500, cold cha soba ¥700, Taiwanese menchi katsu (two) ¥600, Flamingo shochu on the rocks ¥600 (August 2026) · tsukune with raw egg, cheese tsukune, chanja with cream cheese, grilled lotus root, squid tempura (March–April 2026); roast duck and iburi-gakko (March 2026); baked turban shell (April 2026) · dried stingray fin, shrimp tempura, chicken nanban; about six sakes in generous pours (July 2026) · a lemon sour you sharpen yourself (June 2026)',
    website: null, gmaps: gm('おどりや 西中島店'), menu_url: null,
    notes: "[Izakaya · Nishinakajima, market fish and hot-pot banquets] A 46-seat seafood and robata izakaya between Shin-Osaka and Nishinakajima-Minamigata, with a counter for one and tatami rooms for office parties. The shop buys fish every morning at the central market, and its five-kind sashimi platter (¥748 a head) is on nearly every table. Banquet courses (¥5,300–6,500 with drinks) run sashimi, fried dishes and a hot pot of shrimp, clams and sea bream, then a big seafood maki roll; one June 2026 group had its course adjusted for dietary needs. Alone at the counter you can order single pieces of nigiri at ¥250 and a plate of Taiwanese menchi katsu (August 2026). Diners mention a homey feel and attentive staff (2026). Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: fresh seafood bought each morning at the central market, "We don\'t just rely on freshness; we carefully select ingredients every morning"; a five-kind sashimi platter ordered by almost every table; hamo suki nabe; private dining for 2 to 30. Per reviews: friendly staff and great service (April 2026); "the staff were quite attentive" (June 2026); "a very homey atmosphere" (October 2026).',
      philosophy: null, specialty: 'Five-kind sashimi platter; seafood hot-pot courses.',
      anecdotes: [
        { text: '"You can order just one piece of nigiri, and it was fresh and delicious." — August 2026, alone at the counter; squid, sea bream and horse mackerel at ¥250 each.', source: R + 'B534388192/' },
        { text: '"We enjoyed the All-You-Can-Drink Market Banquet Course, which was slightly modified due to some dietary restrictions." — June 2026.', source: R + 'B530967016/' },
        { text: '"Even though I was already full, the rolled sushi at the end was so delicious that I left feeling very happy!" — July 2026.', source: R + 'B517821727/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おどりや 西中島店、居酒屋・海鮮・鍋、大阪市淀川区西中島5-7-19 第７新大阪ビル 1F、新大阪駅と西中島南方駅から徒歩5分、月〜土17:00〜24:00 (料理 L.O.23:00、ドリンク L.O.23:30)、祝日・祝前日も営業、日曜休み、1月5日から営業、予約可、カード可、電子マネー・QR 不可、46席、半個室、座敷と掘りごたつ、貸切20〜50名、禁煙。店の紹介: 毎朝中央市場で仕入れる鮮魚、お造り5種盛り (1人748円、注文率ほぼ100%)、ハモすき鍋、「おどりやコース」6,500円、「市場の宴コース」5,300円 (税込)。口コミ(2025年11月〜2026年10月): おどりやお造り5種盛、鍋 (エビ、アサリ、鯛、白子)、締めの海鮮巻き、地魚の焼き物、唐揚げ、フライドポテト、つくねと生卵、チーズつくね、チャンジャとクリームチーズ、レンコン焼き、イカの天ぷら、鴨のロースト、いぶりがっこ、サザエのつぼ焼き、エイヒレ、エビの天ぷら、チキン南蛮、日本酒は約6種、酸っぱさを調整するレモンサワー、にぎり1貫250円、枝豆、冷たい茶そば、台湾メンチカツ、食事制限に合わせてコースを変更、家庭的な雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B517821727/', R + 'B524208641/', R + 'B524501338/', R + 'B526346307/', R + 'B529819342/', R + 'B530967016/', R + 'B533227517/', R + 'B534388192/', R + 'B536439265/', R + 'B537399757/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for one and tatami rooms for groups. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'A June 2026 banquet course was "slightly modified due to some dietary restrictions."', source: R + 'B530967016/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-7-19 第７新大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目7番19号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534388192/'],
    price_note: 'Course and platter prices from the Tabelog listing (tax included); single dishes from an August 2026 review.', last_checked: TODAY, items: [
      it('おどりやお造り5種盛', '', 'Odoriya five-kind sashimi platter (per person)', '¥748', 'Sashimi', 'ask', 'no', 'Tabelog; June and October 2026.', 'sashimi_5'),
      it('', '', 'Nigiri, one piece (squid, sea bream, horse mackerel)', '¥250', 'Sushi', 'ask', 'no', 'August 2026.', 'nigiri_1'),
      it('', '', 'Taiwanese menchi katsu, two pieces', '¥600', 'Fried dishes', 'no', 'no', 'August 2026.', 'taiwan_menchi'),
      it('', '', 'Cold cha soba', '¥700', 'Noodles', 'no', 'ask', 'August 2026.', 'cha_soba'),
      it('', '', 'Edamame', '¥500', 'Small plates', 'ask', 'ask', 'August 2026.', 'edamame'),
      it('', '', '"Ichiba no Utage" course with all-you-can-drink', '¥5,300', 'Courses', 'ask', 'no', 'Tabelog.', 'ichiba_course'),
      it('', '', '"Odoriya Course" with all-you-can-drink', '¥6,500', 'Courses', 'ask', 'no', 'Tabelog.', 'odoriya_course'),
    ] }, {
    cuisine: '海鮮と炉端の居酒屋。魚は毎朝中央市場で仕入れる (食べログ)・店の名物: お造り5種盛り、1人748円で、注文率は「ほぼ100%」(食べログ)。2026年10月のある夜は1,500円・飲み放題つきのコース: 「おどりやコース」6,500円、「市場の宴コース」5,300円 (食べログ、税込)。季節のハモすき鍋 (食べログ)・コースの鍋はエビ、アサリ、鯛 (2026年7月) や白子 (2025年11月)、いろいろな肉の鍋 (2026年6月)、締めは海鮮の巻き寿司・地魚の焼き物、若鶏の kara-age、フライドポテト (2026年6月)・にぎり1貫 (イカ、鯛、アジ) 各250円、枝豆500円、冷たい茶そば700円、台湾メンチカツ (2個) 600円、Flamingo の焼酎ロック600円 (2026年8月)・つくねと生卵、チーズつくね、チャンジャとクリームチーズ、レンコンの焼き物、イカの天ぷら (2026年3〜4月)。鴨のローストといぶりがっこ (2026年3月)。サザエのつぼ焼き (2026年4月)・エイヒレ、エビの天ぷら、チキン南蛮。日本酒は約6種で、たっぷり注いでくれる (2026年7月)・酸っぱさを自分で調整するレモンサワー (2026年6月)',
    neighborhood: '西中島5-7-19、第７新大阪ビルの1階。新大阪と西中島南方のあいだで、どちらからも徒歩5分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。刺身とにぎりは醤油で食べ、kara-age、天ぷら、チキン南蛮、台湾メンチカツ、茶そばもある。2026年6月には、食事制限に合わせて宴会のコースを変えてもらったグループがいたので、予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。魚、肉、海鮮の鍋の海鮮・炉端の居酒屋。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[居酒屋・西中島、市場の魚と鍋の宴会] 新大阪と西中島南方のあいだにある46席の海鮮・炉端の居酒屋で、ひとりで座れるカウンターと、会社の宴会向けの座敷がある。魚は毎朝中央市場で仕入れ、お造り5種盛り (1人748円) はほぼどのテーブルにも。宴会のコース (飲み放題つきで5,300〜6,500円) は刺身、揚げ物、エビやアサリや鯛の鍋、そして大きな海鮮の巻き寿司で締める。2026年6月には、食事制限に合わせてコースを変えてもらったグループも。カウンターなら、にぎりを1貫250円から頼めて、台湾メンチカツも (2026年8月)。家庭的な雰囲気で、スタッフがよく気がつくという声 (2026年)。日曜休み。',
  });
}

// ================================================================ ラーメン坐 裕冬
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27124101/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_ramenza_yuto_nishinakajima', name: 'ラーメン坐 裕冬 (Ramenza Yuto)', category: 'OMNI',
    lat: 34.72907, lng: 135.500903, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick or thin wheat noodles in a soy-based Jiro-style broth or abura soba sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi, bonito and tonkotsu broths with back fat and pork chashu.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:40) and 18:00–23:00 (last order 22:30); hours may change (Tabelog). Buy a ticket at the machine by the door; it took no new banknotes in July 2025. Cash only (Tabelog). 20 seats, all at tables (three for four, one for eight), shared at busy times; non-smoking (Tabelog). Lunch fills with office workers and lines form outside (September 2026); after 13:30 it is quiet (September 2026). The 10th of each month is "Yuto Day", with a voucher for the next visit (September 2026). Opened 22 June 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島5-8-26, among the restaurants near Nishinakajima-Minamigata Stn (September 2026) — about 10 min from Shin-Osaka Stn (April 2024)',
    cuisine: 'Jiro-style ramen built on niboshi, with abura soba (reviews) · niboshi ramen with seasoned egg ¥1,070, mini chashu rice bowl ¥400 (September 2026) · niboshi and bonito ramen with thick noodles ¥990 (September 2026) · tonkotsu ramen ¥1,040 (October 2026) · shoyu abura soba ¥990 (August 2026); shio abura soba with a raw egg ¥1,070, umeboshi on request (July 2025) · raw egg ¥80, rice ¥100 to finish the abura soba (September 2026) · choose noodle weight (a larger portion at no extra cost; 100 g earns a free seasoned egg), thick or thin noodles, and how much vegetables (bean sprouts and cabbage), back fat and sauce; garlic only on request (2021–2026 reviews) · cayenne pepper and vinegar on the table (2021, 2026)',
    website: null, gmaps: gm('ラーメン坐 裕冬 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima-Minamigata, Jiro-style niboshi bowls] A 20-seat ramen shop among the restaurants of Nishinakajima-Minamigata, open since 2021, serving Jiro-style bowls with a niboshi (dried sardine) or bonito broth: thick chewy noodles under a heap of bean sprouts and cabbage, back fat and grilled chashu, with noodle weight, vegetables, fat and sauce chosen when you hand over your ticket. Garlic is only added on request, and cayenne pepper on the table is the house twist. Bowls run about ¥1,000; the abura soba ends with rice and a raw egg in the bowl. One diner traced the bowl to a shop in Abeno Lucias that closed in January 2024 and found the same dish here (April 2024). Opinions split on the fish broth: \"strong niboshi flavor\" to one (September 2026), powdery to another (August 2026). Cash only; lunch lines form.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) and one floor staff member (July 2025, September 2026 reviews)'], origin: null,
      background: 'Per the Tabelog listing: opened 22 June 2021. Per reviews: "two staff members—one female and the owner—serving" (July 2025); "one busy chef in the kitchen and one male staff member managing the dining area" at a September 2026 lunch; a diner who had eaten the same niboshi Jiro-style bowl at a shop in the Abeno Lucias basement, closed 27 January 2024, found it here (April 2024 and September 2026 reviews).',
      philosophy: null, specialty: 'Jiro-style niboshi ramen; abura soba.',
      anecdotes: [
        { text: '"Halfway through, I sprinkled on some cayenne pepper, which is a unique feature of this shop." — September 2026.', source: R + 'B483202637/' },
        { text: '"The same dish I had at Lucias was served … it might just be a matter of crossing the Yodogawa River to get here instead." — April 2024.', source: R + 'B483202637/' },
        { text: '"Garlic is not included by default, so there\'s no need to worry about the smell. Perhaps that\'s why there were many salarymen dining here." — September 2026.', source: R + 'B534785487/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン坐 裕冬、ラーメン・油そば・まぜそば、大阪市淀川区西中島5-8-26、西中島南方駅から359m、毎日11:00〜15:00 (L.O.14:40)、18:00〜23:00 (L.O.22:30)、現金のみ、20席 (テーブルのみ)、禁煙、2021年6月22日オープン。口コミ(2021年12月〜2026年10月): 入口の券売機、麺の量、太麺か細麺、野菜 (もやしとキャベツ)、背脂、タレを選ぶ、ニンニクは希望で、卓上にカイエンペッパーと酢、煮干しラーメン味玉1,070円、ミニチャーシュー丼400円、煮干しカツオラーメン990円、豚骨ラーメン1,040円、醤油油そば990円、塩油そば、生卵80円、ライス100円、毎月10日は裕冬の日、昼は会社員で満席、Abeno Lucias の閉店した店と同じ味、煮干しが粉っぽいという声も。',
      confidence: 'medium', sources: [TB, R + 'B444160576/', R + 'B483202637/', R + 'B533835450/', R + 'B534051784/', R + 'B534276896/', R + 'B534785487/', R + 'B536174900/', R + 'B536983911/', R + 'B538172402/', R + 'B538461459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door, then choose noodles, vegetables, fat and sauce with the staff. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番26号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B444160576/', R + 'B534785487/', R + 'B536983911/'],
    price_note: 'Ticket prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Niboshi ramen with seasoned egg', '¥1,070', 'Ramen', 'no', 'no', 'September 2026.', 'niboshi_ajitama'),
      it('', '', 'Niboshi and bonito ramen', '¥990', 'Ramen', 'no', 'no', 'September 2026.', 'niboshi_katsuo'),
      it('', '', 'Tonkotsu ramen', '¥1,040', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu'),
      it('', '', 'Shoyu abura soba', '¥990', 'Abura soba', 'no', 'no', 'August 2026.', 'abura_soba'),
      it('ミニチャーシュー丼', '', 'Mini chashu rice bowl', '¥400', 'Rice', 'ask', 'no', 'September 2026.', 'mini_chashu_don'),
    ] }, {
    cuisine: '煮干しの二郎系ラーメンと油そば (口コミ)・煮干しラーメン味玉1,070円、ミニチャーシュー丼400円 (2026年9月)・太麺の煮干しカツオラーメン990円 (2026年9月)・豚骨ラーメン1,040円 (2026年10月)・醤油油そば990円 (2026年8月)。生卵つきの塩油そば1,070円、希望で梅干し (2025年7月)・生卵80円、油そばの締めのライス100円 (2026年9月)・麺の量 (多めでも追加料金なし、100gなら味玉のサービス)、太麺か細麺、野菜 (もやしとキャベツ)、背脂、タレの量を選べる。ニンニクは希望で (2021〜2026年の口コミ)・卓上にカイエンペッパーと酢 (2021年、2026年)',
    neighborhood: '西中島5-8-26、西中島南方駅の近くの飲食店の多いあたり (2026年9月)。新大阪駅から約10分 (2024年4月)',
    gf_detail: 'グルテンフリーではありません。太麺か細麺の小麦の麺で、醤油ベースの二郎系のスープか油そばのタレ。',
    vegan_detail: 'ヴィーガンではありません。煮干し、カツオ、豚骨のスープに背脂と豚のチャーシュー。',
    notes: '[ラーメン・西中島南方、煮干しの二郎系] 西中島南方の飲食店の多いあたりにある20席のラーメン店で、2021年から。煮干しかカツオのスープの二郎系で、もちもちの太麺に、もやしとキャベツの山、背脂、焼いたチャーシュー。食券を渡すときに麺の量、野菜、背脂、タレを選ぶ。ニンニクは希望したときだけで、卓上のカイエンペッパーがこの店ならでは。1杯約1,000円。油そばは最後にライスと生卵を入れて締める。Abeno Lucias で2024年1月に閉店した店と同じ味をここで見つけたという人も (2024年4月)。魚のスープの評価は分かれ、煮干しがしっかりという声 (2026年9月) も、粉っぽいという声 (2026年8月) も。現金のみ。昼は行列も。',
  });
}

// ================================================================ 手打ち麺 やす田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27060153/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'osaka_teuchi_men_yasuda_shin_osaka', name: '手打ち麺 やす田 (Teuchi Men Yasuda)', category: 'OMNI',
    lat: 34.732963, lng: 135.504028, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick handmade wheat noodles with kansui (October 2026), in a shio or shoyu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: iriko (dried sardine) and bonito broths with pork chashu.',
    hours_raw: 'Tue–Sun 11:30–14:30, until sold out; closed Monday, plus irregular days and frequent temporary closures (Tabelog). One November 2026 diner had found it closed several times; another found it open at 14:00 (October 2026), and one Saturday it opened at 11:19 with five already seated (October 2026). Expect a short wait at noon: 10–20 minutes in October 2026. Order by telling the owner and pay after (October 2026). Cash only (Tabelog). 7 counter seats; table seats closed since March 2019, when the owner began running the shop alone (Tabelog). Non-smoking, ashtray at the door (Tabelog). English menu (Tabelog). No large size; no tsukemen (October 2026; Tabelog). Opened 13 September 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1-21-2, 新大阪ハイツ 106 — 4 min from the east exit of Shin-Osaka Stn: left out of the exit, right at the FamilyMart on the corner, right at the next crossing, on the right (Tabelog)',
    cuisine: 'Tabelog Ramen 100 every year 2017–2025 (WEST to 2022, OSAKA from 2023) · handmade-noodle ramen (Tabelog) · shio ramen with iriko ¥900, the order most people make; shoyu ramen with katsuobushi (reviews) · extra chashu: shio with extra chashu ¥1,200 (October 2026) · rice on the side: katsuo rice ¥200 heaped with bonito flakes (October 2026), kombu rice, and a small chashu rice bowl with a sweet sauce (October 2026) · toppings: green onion, white onion, menma and two slices of pork-belly chashu (2025–2026)',
    website: null, gmaps: gm('手打ち麺 やす田 新大阪'), menu_url: null,
    notes: "[Ramen · Shin-Osaka east side, one man and seven seats] A seven-seat counter four minutes from the Shin-Osaka east exit, open since 2011 and in Tabelog's Ramen 100 every year from 2017 to 2025. Since 2019 the owner has run it alone, making the noodles by hand, cooking, serving and taking cash; one October 2026 diner wrote of \"respect\" for the solo operation. The noodles are the point: thick, curly and chewy, \"about the thickness of a disposable chopstick\" and close to udon (October 2026), in a clear, gentle shio broth of iriko, with green and white onion, menma and pork-belly chashu, ¥900. Add katsuo rice for ¥200. Lunch only, until the noodles run out, and it often closes without notice, so have a backup. Cash only; no large size.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), runs the shop alone since March 2019 (Tabelog)'], origin: null,
      background: 'Per the Tabelog listing (remarks): "Due to focusing on ramen, we are not serving tsukemen. We often have temporary closures. As of March 2019, the owner is handling everything alone, so we have closed the table seating and are only offering counter seating." Opened 13 September 2011; Tabelog Ramen 100 (WEST 2017–2022, OSAKA 2023–2025). Per reviews: "The owner operates the restaurant solo, skillfully handling the noodle draining, bowls, and toppings" (June 2025); "The owner was running the place solo" (October 2026).',
      philosophy: null, specialty: 'Handmade thick curly noodles; iriko shio ramen.',
      anecdotes: [
        { text: '"They are about the thickness of a disposable chopstick, making me wonder if they were udon … However, they seem to have kansui added, giving them a slight yellow tint." — October 2026, shio ramen ¥900 and katsuo rice ¥200.', source: R + 'B537733055/' },
        { text: '"I\'ve tried to come a few times before, but it was always closed for temporary reasons." — November 2026.', source: R + 'B538483437/' },
        { text: '"Although the opening time is supposed to be 11:30, [the shop] opened at 11:19, and there were already five customers seated at the counter." — October 2026, a Saturday.', source: R + 'B537529853/' },
      ],
      japanese_sources_summary: '食べログ: 手打ち麺 やす田、ラーメン、大阪市東淀川区東中島1-21-2 新大阪ハイツ106号、JR 新大阪駅東口から徒歩4分、火〜日11:30〜14:30 (売り切れまで)、月曜休み、不定休あり、臨時休業が多い、現金のみ、カウンター7席、禁煙 (入口に灰皿)、英語メニュー、2011年9月13日オープン、つけ麺はなし、2019年3月から店主ひとりで営業しテーブル席は休止、食べログ ラーメン百名店 (WEST 2017〜2022、OSAKA 2023〜2025)。口コミ(2025年6月〜2026年11月): 塩らあめん900円、塩らあめんのスープは魚の出汁が効いた透明タイプ、麺は極太の縮れ麺、カツオ飯200円は鰹節のはるか下にご飯、昆布飯、チャーシュー丼、醤油ラーメン、チャーシュー増し1,200円、口頭で注文してあと払い、大盛りなし、店主ひとりで手際よく、店内は暑い、何度か臨時休業で入れなかった。',
      confidence: 'high', sources: [TB, R + 'B322292983/', R + 'B508261593/', R + 'B537177543/', R + 'B537422425/', R + 'B537529853/', R + 'B537619490/', R + 'B537733055/', R + 'B538018059/', R + 'B538133333/', R + 'B538483437/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order by telling the owner, pay after.' },
    safety: SAFETY0,
    ramen: {
      broth_base: ['niboshi', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: true, notes: 'Handmade thick curly noodles with kansui, chewy and close to udon (October 2026); "a good bite due to the higher water content" (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi'],
      signature_bowl: 'Shio ramen with iriko (塩らあめん), ¥900 (October 2026).',
      chashu: 'Two slices of pork-belly chashu, tender with sweet fat (2025–2026); extra chashu available.',
      notable_toppings: ['green onion', 'white onion', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Iriko and bonito broth; pork chashu.' },
      pantheon: 'Shin-Osaka\'s one-man handmade-noodle counter: udon-thick curly noodles in a clear iriko shio.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537529853/', '"An overall gentle-tasting ramen" — placed low.'],
        oiliness: [R + 'B537177543/', '"The strength of the medium-thick hand-pulled noodles in this light broth" — placed low.'],
        clarity: [R + 'B537177543/', '"The broth had a high level of clarity"; a second diner\'s caption: 透明タイプ (B537733055).'],
        tare_strength: [R + 'B537422425/', '"The soup has a gentle saltiness."'],
        noodle_firmness: [R + 'B508261593/', '"A firm, chewy bite."'],
        aroma_punch: [R + 'B538133333/', '"A strong iriko flavor without any bitterness", against "a subtle aroma of iriko" (B322292983) — mid-scale between the two.'],
      },
    },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-21-2 新大阪ハイツ106号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Ramen 100 2025); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目21番2号 (go) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537733055/', R + 'B537529853/', R + 'B538133333/'],
    price_note: 'Prices from October–November 2026 reviews.', last_checked: TODAY, items: [
      it('塩らあめん', '', 'Shio ramen with iriko', '¥900', 'Ramen', 'no', 'no', 'October and November 2026.', 'shio_ramen'),
      it('', '', 'Shio ramen with extra chashu', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'shio_chashu'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu_ramen'),
      it('カツオ飯', '', 'Katsuo rice (rice under bonito flakes)', '¥200', 'Rice', 'ask', 'no', 'October 2026.', 'katsuo_meshi'),
    ] }, {
    cuisine: '食べログ ラーメン百名店に2017〜2025年の毎年選出 (2022年まで WEST、2023年から OSAKA)・手打ち麺のラーメン (食べログ)・いりこの塩らあめん900円、多くの人が頼む。鰹節の醤油ラーメン (口コミ)・チャーシュー増し: 塩のチャーシュー増し1,200円 (2026年10月)・ごはん: 鰹節を山盛りにしたカツオ飯200円 (2026年10月)、昆布飯、甘いタレの小さなチャーシュー丼 (2026年10月)・具: 青ねぎ、白ねぎ、メンマ、豚バラのチャーシュー2枚 (2025〜2026年)',
    neighborhood: '東中島1-21-2、新大阪ハイツ106号。新大阪駅の東口から徒歩4分: 東口を出て左、角のファミリーマートを右、次の交差点を右、右側 (食べログ)',
    gf_detail: 'グルテンフリーではありません。かんすいを使った小麦の太い手打ち麺 (2026年10月) に、塩か醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。いりこと鰹節のスープに豚のチャーシュー。',
    notes: '[ラーメン・新大阪の東側、店主ひとりの7席] 新大阪駅の東口から4分、7席のカウンターの店で、2011年から。食べログのラーメン百名店に2017年から2025年まで毎年選ばれている。2019年からは店主がひとりで切り盛りし、麺を手で打ち、作り、出し、会計までする。その姿に感心したという客も (2026年10月)。主役は麺で、太く縮れてもちもち、「割りばしくらいの太さ」でうどんに近い (2026年10月)。透明でやさしい、いりこの塩のスープに、青ねぎと白ねぎ、メンマ、豚バラのチャーシューで900円。200円のカツオ飯もぜひ。昼だけ、麺がなくなるまで。臨時休業が多いので、ほかの店も考えておくと安心。現金のみ、大盛りなし。',
  });
}

// ================================================================ vegecafe＋α
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27065715/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'osaka_vege_cafe_plus_alpha_nishinakajima', name: 'vegecafe＋α (Vege Cafe + α)', category: 'OMNI',
    lat: 34.728651, lng: 135.495412, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A December 2025 review shows a vegan soup-curry plate captioned as free of the 28 specified allergens and gluten-free (アレルギー特定原材料28品目不使用。グルテンフリー。), served with rice-flour bread, and the cafe serves rice-flour cookies (June 2026). But the shop\'s own text promises allergy-friendly gelato, not gluten-free food, and the cafe bakes wheat bread on site (whole-grain rolls, natural-yeast breads), so ask what is gluten-free today and how it is kept apart.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The shop says its gelato "caters to vegans and those with allergies" (Tabelog). A December 2025 review shows a vegan soup-curry plate with rice-flour bread. Lunch (fried fish, scrambled egg) and the breakfast sandwiches are not vegan; ask which gelato flavours are vegan that day.',
    hours_raw: 'Tue–Sat 09:00–17:00 (food last order 16:00, drinks 16:30); lunch 11:00–14:00 until sold out; closed Sunday, Monday and holidays (Tabelog). The limited "Vege Cafe Kago Gozen" lunch is best booked; at busy times a 90-minute limit (Tabelog). Walk-ins at 11:00 on a Saturday got in (May 2026). Cards (VISA, Master, JCB, AMEX) and e-money; no service charge (Tabelog). 49 seats: 6 at the counter, 43 at tables, a semi-private room for up to 15, whole hire for 20–50; non-smoking indoors, smoking only on the terrace (Tabelog). Pets on the open terrace only, not when it rains; children welcome, child-friendly dishes, no high chairs; free Wi-Fi; wheelchair accessible; English menu (Tabelog). A takeaway gelato and coffee window faces the street (May 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島6-9-20, ground floor of 新大阪GHビル, with a courtyard terrace across from a tableware shop (December 2025) — 7 min from Nishinakajima-Minamigata Stn, also reachable from Hankyu Minamikata and Shin-Osaka (Tabelog)',
    cuisine: 'Vegetable-led cafe with its own gelato; organic vegetables grown on the rooftop (Tabelog) · "Vege Cafe Kago Gozen" lunch basket ¥1,350, limited: a main of the day (fried horse mackerel with mustard tartar and rosemary in May 2026), three small sides, salad and vegetable soup, with a drink (May 2026; ¥1,790 with iced coffee) · vegan soup-curry plate with rice-flour bread (December 2025) · breakfast: prosciutto, lettuce and cheese sandwich on a Kiryu-yeast whole-grain roll ¥900, three natural-yeast breads of your choice ¥640, coffee set +¥400 (October 2026); a glass of red wine with breakfast +¥500 (December 2025) · Basque cheesecake (December 2025); rice-flour cookie with coffee (June 2026) · gelato made in house since July 2020, prized three years running at an Italian gelato competition (Tabelog; October 2026), e.g. organic apple balsamic and mascarpone (October 2026); a coffee float with gelato to take away (May 2026)',
    website: null, gmaps: gm('vegecafe＋α 新大阪GHビル'), menu_url: null,
    notes: "[Cafe · Nishinakajima, vegetables, bread and gelato] A roomy 49-seat cafe in the Nishinakajima office district, a seven-minute walk from Nishinakajima-Minamigata, that grows organic vegetables on its rooftop and makes its own gelato, prized three years running at an Italian competition (Tabelog). Mornings bring natural-yeast breads and sandwiches on whole-grain rolls; at lunch the limited \"Kago Gozen\" basket (¥1,350) sets a main of the day beside small vegetable sides, salad and soup, so book. The shop says its gelato suits vegans and people with allergies, and a December 2025 diner had a vegan soup-curry plate with rice-flour bread. Seasonal decorations, a mix of tables and chairs, a courtyard terrace where dogs are welcome. Closed Sundays, Mondays and holidays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a cafe focused on "food", "vegetables" and "space", with organic vegetables grown on the rooftop and a healthy, vegetable-rich menu; a gelato shop added in July 2020, whose gelato "caters to vegans and those with allergies" and "has won awards for three consecutive years at the world\'s most prestigious gelato competition". Per reviews: bread baked on site (October 2026); the staff speak "in a soothing manner" (October 2026); "the staff had a warm atmosphere" (July 2026).',
      philosophy: '"Everyone leaves with a smile" (Tabelog, of the gelato).', specialty: 'Kago Gozen vegetable lunch; house gelato.',
      anecdotes: [
        { text: '"Free of the 28 specified allergens. Gluten-free." — a December 2025 diner\'s caption for the vegan soup-curry plate (アレルギー特定原材料28品目不使用。グルテンフリー。).', source: R + 'B518799617/' },
        { text: '"When I asked if I could change it, [the staff] kindly accommodated my request." — May 2026, swapping the gelato in a takeaway coffee float.', source: R + 'B531862834/' },
        { text: '"This gelato is an award-winning flavor from the world\'s toughest gelato competition in Italy." — October 2026, organic apple balsamic and mascarpone.', source: R + 'B537551089/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): vegecafe＋α、カフェ・野菜料理・ジェラート、大阪市淀川区西中島6-9-20 新大阪GHビル 1F、西中島南方駅から徒歩7分、火〜土9:00〜17:00、ランチ11:00〜14:00 (売り切れまで)、日・月・祝休み、予約可、混雑時は1.5時間制、カード・電子マネー可、サービス料なし、49席、テラスのみ喫煙可、ペットはテラス席のみ、子ども可、Wi-Fi、英語メニュー。店の紹介: 屋上で無農薬の野菜を育てる、2020年7月からジェラートの店、ジェラートはヴィーガンやアレルギーの人にも、世界的なジェラートの大会で3年連続入賞。口コミ(2025年12月〜2026年10月): 桐生酵母全粒粉ロール使用 生ハムレタスチーズサンド900円、珈琲セット (+400円)、天然酵母パン3種640円、veganスープカレープレート (アレルギー特定原材料28品目不使用、グルテンフリー) と米粉パン、Kago Gozen 1,350円、アジフライとからしのタルタル、バスクチーズケーキ、米粉のクッキー、テイクアウトの窓口でコーヒーフロート、りんごのバルサミコとマスカルポーネのジェラート。',
      confidence: 'medium', sources: [TB, R + 'B518799617/', R + 'B527875623/', R + 'B528238056/', R + 'B528609952/', R + 'B529778895/', R + 'B531862834/', R + 'B535110759/', R + 'B535851927/', R + 'B537551089/', R + 'B538051115/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order with the call button at the table (December 2025).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'Wheat bread is baked on site (October 2026 review: "[The cafe bakes] bread on-site"; whole-grain rolls and natural-yeast breads).', source: R + 'B518799617/' }],
      positives: [
        { text: 'Shop text (Tabelog): "Our gelato caters to vegans and those with allergies."', source: TB },
        { text: 'December 2025 review: a "vegan soup curry plate" captioned アレルギー特定原材料28品目不使用。グルテンフリー。, served with rice-flour bread.', source: R + 'B518799617/' },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-9-20 新大阪GHビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目9番20号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518799617/', R + 'B528238056/', R + 'B538051115/'],
    price_note: 'Prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', '"Vege Cafe Kago Gozen" lunch basket with soup and a drink', '¥1,350', 'Lunch', 'ask', 'no', 'December 2025; May 2026.', 'kago_gozen'),
      it('veganスープカレープレート', '', 'Vegan soup-curry plate with rice-flour bread', '', 'Lunch', 'ask', 'vegan', 'December 2025; captioned gluten-free and free of 28 allergens.', 'vegan_soup_curry'),
      it('桐生酵母全粒粉ロール使用 生ハムレタスチーズサンド', '', 'Prosciutto, lettuce and cheese sandwich on a Kiryu-yeast whole-grain roll', '¥900', 'Breakfast', 'no', 'no', 'October 2026.', 'nama_ham_sand'),
      it('', '', 'Three natural-yeast breads', '¥640', 'Breakfast', 'no', 'ask', 'October 2026.', 'bread_3'),
      it('', '', 'House gelato', '', 'Gelato', 'ask', 'ask', 'Tabelog; October 2026.', 'gelato'),
    ] }, {
    cuisine: '野菜が主役のカフェで、ジェラートも自家製。屋上で無農薬の野菜を育てている (食べログ)・限定のランチ「Vege Cafe Kago Gozen」1,350円: 日替わりのメイン (2026年5月はアジフライ、からしとローズマリーのタルタル)、小鉢3品、サラダ、野菜のスープ、飲み物つき (2026年5月。アイスコーヒーで1,790円)・veganスープカレープレートと米粉パン (2025年12月)・朝: 桐生酵母全粒粉ロール使用 生ハムレタスチーズサンド900円、選べる天然酵母パン3種640円、珈琲セット+400円 (2026年10月)。朝の赤ワイン+500円 (2025年12月)・バスクチーズケーキ (2025年12月)。米粉のクッキーとコーヒー (2026年6月)・2020年7月から自家製のジェラート、イタリアのジェラートの大会で3年連続入賞 (食べログ、2026年10月)。たとえば、無農薬りんごのバルサミコとマスカルポーネ (2026年10月)。テイクアウトのジェラートのコーヒーフロート (2026年5月)',
    neighborhood: '西中島6-9-20、新大阪GHビルの1階。中庭のテラスの向かいに器の店 (2025年12月)。西中島南方駅から徒歩7分、Hankyu Minamikata 駅や新大阪駅からも (食べログ)',
    gf_detail: '要確認。2025年12月の口コミの写真に、veganスープカレープレートが「アレルギー特定原材料28品目不使用。グルテンフリー。」とあり、米粉パンがついていた。米粉のクッキーもある (2026年6月)。ただし店の紹介でアレルギーに配慮しているのはジェラートで、グルテンフリーの料理とは書かれておらず、店では小麦のパン (全粒粉ロール、天然酵母パン) も焼いているので、その日のグルテンフリーの料理と、分けて作っているかを確認して。',
    vegan_detail: '店によると、ジェラートはヴィーガンやアレルギーの人にも (食べログ)。2025年12月の口コミにveganスープカレープレートと米粉パン。ランチ (アジフライ、スクランブルエッグ) や朝のサンドはヴィーガンではない。その日のヴィーガンのジェラートを確認して。',
    notes: '[カフェ・西中島、野菜とパンとジェラート] 西中島のオフィス街、西中島南方から歩いて7分の広い49席のカフェで、屋上で無農薬の野菜を育て、ジェラートも自分で作る。ジェラートはイタリアの大会で3年連続入賞 (食べログ)。朝は天然酵母のパンや全粒粉ロールのサンド。昼は限定の「Kago Gozen」(1,350円) で、日替わりのメインに野菜の小鉢、サラダ、スープ。予約がおすすめ。店によるとジェラートはヴィーガンやアレルギーの人にも向いていて、2025年12月にはveganスープカレープレートと米粉パンを食べた人も。季節の飾り、いろいろな椅子、犬もOKな中庭のテラス。日・月・祝休み。',
  });
}

save();
