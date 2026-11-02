// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 14.
//   + 串揚げ専門店 健串 Kushiage Senmonten Kenkushi (creative kushiage omakase, Shimanouchi)
//   + 空色COLOR Sorairo Color (Japanese dining bar and café with steamed-vegetable lunches, Hakuromachi)
//   + AVOCADO HOUSE NAMBA (Mexican bar built around avocado, Namba)
//   + 黒毛和牛焼肉 肉處 きっしゃん なんば店 Nikudokoro Kisshan Namba (wagyu yakiniku, Namba Dining Maison 8F)
//   Chain check (Greg's rulings 2026-11-02): 健串 has one other shop, 梅田中崎町店 (opened May 2024; tabiiro), not in
//   data. 空色COLOR and AVOCADO HOUSE: one shop found each. きっしゃん: the 西中島総本店 (gurunavi), a Tennoji shop
//   (Retty; a September 2026 reviewer mentions it too) and this one — a butcher-backed group founded 1995, not in data,
//   no sign of fast expansion; drafted and flagged. None of the four is in data/osaka.json (grep by name, Tabelog id
//   and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 健串
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27116275/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_kenkushi_shimanouchi', name: '串揚げ専門店 健串 (Kushiage Senmonten Kenkushi)', category: 'OMNI',
    lat: 34.672004, lng: 135.508312, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried skewers, including a mentaiko-mayo bread skewer and mini buns (October 2026), with sauces, ponzu, sesame mustard and salt.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The omakase mixes vegetable skewers (asparagus, taro, shiitake, tomato) with shrimp, crab, beef and eel; the shop asks about dislikes and allergies before the course (Tabelog; October 2026), but nothing is said about the batter or frying oil.',
    hours_raw: 'Tue–Sun and holidays 17:00–24:00; closed Mondays; irregular closures (Tabelog). Reservations recommended: full at 17:00 on an October 2026 Sunday. Vegetable charge ¥330 per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay and WeChat Pay (Tabelog). 28 seats: a 12-seat counter on the 1st floor (smoking allowed), tables for 10 on the 2nd floor (non-smoking) and a private room for 3–5 (Tabelog). Children welcome (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 1-12-17, behind a navy noren — 5 min from Nagahoribashi Stn',
    cuisine: 'Creative kushiage by a chef trained at a long-established restaurant; omakase of seasonal skewers served until you say stop, ¥110–570 a skewer; wine chosen by a sommelier and sake by a sake specialist (Tabelog shop text) · vegetable sticks with a special sauce as the opener (October 2026) · a typical October 2026 run: asparagus, beef fillet, mentaiko-mayo bread, homemade mapo tofu, natto, shiitake with shrimp mince, taro, eel and ginger, swordfish, tomato and mozzarella, konjac with roe, chicken and jako with sansho, angel shrimp, mini buns with potato croquette, crab legs · also head-on angel shrimp with miso, stuffed eggplant (August 2026), matsutake, sanma, ginkgo, abalone (September 2026), chestnut in yuba, penguin-shaped fried bread, chilled pumpkin soup (October 2026) · dips: three sauces and salt, ponzu, sesame mustard; mayo-miso extra (August–October 2026) · Asahi draft ¥600 (October 2026) · about ¥7,000 a head with drinks for 15–18 skewers (September 2026)',
    website: null, gmaps: gm('串揚げ専門店 健串'), menu_url: null,
    notes: '[Kushiage · Shimanouchi, creative skewers until you say stop] A chic, dark-toned kushiage counter near Nagahoribashi where the omakase brings seasonal and playful skewers — mapo tofu in an edible basket, penguin-shaped bread, eel with ginger — alongside classics like angel shrimp and beef fillet, until you call stop. Staff suggest a sauce for each skewer and ask about dislikes and allergies first. Expect about 15 skewers and ¥4,000–7,000 a head. Book: it is full at opening at weekends. Smoking is allowed at the ground-floor counter; the upstairs tables are non-smoking.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 4 February 2020, later reopened after a renewal; creative kushiage using techniques honed at a long-established restaurant. Per tabiiro: the owner trained at well-known Osaka restaurants and fries in front of guests; a second shop opened in Umeda Nakazakicho in May 2024.', philosophy: null, specialty: 'Creative omakase kushiage.',
      anecdotes: [
        { text: '"I was surprised by the innovative idea of the mapo tofu skewer, where even the basket it came in was edible!" — October 2026, a 15-skewer course.', source: R + 'B537806215/' },
        { text: '"The hospitality is exceptional" — August 2026, a reviewer noting that dislikes and allergies are carefully accommodated.', source: R + 'B534611844/' },
        { text: '"While the flavors were delicious, I felt that the overall dishes could have used a bit less oil." — October 2026.', source: R + 'B538012558/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串揚げ専門店 健串、串揚げ・居酒屋・魚介、大阪市中央区島之内1-12-17、長堀橋駅から徒歩5分、火〜日・祝17:00〜24:00、月曜休み、不定休、予約可、野菜代330円、カード・電子マネー・QR 決済可、28席 (1階カウンター12席は喫煙可、2階テーブル10席は禁煙、個室3〜5名)、子ども可、2020年2月4日オープン。老舗で磨いた技の創作串揚げ、旬の素材のおまかせをストップまで、1本110〜570円、ソムリエのワインと日本酒の専門家が選ぶ日本酒、苦手なものやアレルギーは事前に。口コミ(2026年8月〜10月): 野菜スティック、アスパラ、牛ヒレ、明太マヨのパン、自家製麻婆豆腐、納豆、エビのすり身のしいたけ、里芋、うなぎと生姜、カジキ、トマトとモッツァレラ、Angel shrimp、カニ、ペンギンの形のパン、ソース3種と塩、ポン酢、ごまからし、15〜18本と飲み物でひとり7,000円ほど、日曜17時に満席、油がもう少し少なくてもという声。',
      confidence: 'medium', sources: [TB, R + 'B503823008/', R + 'B506675412/', R + 'B507859724/', R + 'B508899923/', R + 'B520788965/', R + 'B534611844/', R + 'B535837117/', R + 'B536574370/', R + 'B537648013/', R + 'B537796714/', R + 'B537802025/', R + 'B537806215/', R + 'B538012558/', R + 'B538226890/', R + 'B538241238/', 'https://en.tabiiro.travel/gourmet/s/313667-osaka-kenshi/', 'https://en.tabiiro.travel/gourmet/s/314651-osaka-kenshi/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase until you say stop; staff recommend a sauce for each skewer and ask about dislikes and allergies (2026). An October 2026 reviewer calls it popular with foreigners. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks about dislikes and allergies before the omakase (Tabelog shop text; reviews August and October 2026).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-12-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目12番17号 (go) 6m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508899923/', R + 'B503823008/', TB],
    price_note: 'Per-skewer range from the Tabelog listing; drink and appetiser prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase kushiage, until you say stop', '¥110–570 a skewer', 'Omakase', 'no', 'ask', 'Tabelog listing; about 15 skewers is typical (2026).', 'omakase_kushiage'),
      it('', '', 'Vegetable charge (vegetable sticks)', '¥330', 'Starter', 'ask', 'ask', 'Tabelog listing; October 2026 review.', 'yasai_dai'),
      it('', '', 'Homemade mapo tofu skewer', '', 'Kushiage', 'no', 'ask', 'August–October 2026 reviews.', 'mabo_kushi'),
      it('', '', 'Angel shrimp skewer', '', 'Kushiage', 'no', 'no', '2026 reviews.', 'tenshi_ebi_kushi'),
      it('', '', 'Asahi draft beer', '¥600', 'Drinks', 'no', 'ask', 'October 2026 review.', 'draft_beer'),
    ] }, {
    cuisine: '老舗で磨いた技の創作串揚げ。旬の串のおまかせをストップと言うまで、1本110〜570円。ソムリエが選ぶワインと日本酒の専門家が選ぶ日本酒 (食べログの店の紹介)・最初は特製ソースの野菜スティック (2026年10月)・2026年10月の流れの例: アスパラ、牛ヒレ、明太マヨのパン、自家製の麻婆豆腐、納豆、エビのすり身のしいたけ、里芋、うなぎと生姜、カジキ、トマトとモッツァレラ、魚卵のこんにゃく、鶏とじゃこの山椒揚げ、Angel shrimp、ミニバンズのコロッケ、カニ・ほかに頭つきの Angel shrimp の味噌、なすの詰め物 (2026年8月)、松茸、さんま、銀杏、あわび (2026年9月)、栗の湯葉巻き、ペンギンの形の揚げパン、冷たいかぼちゃのスープ (2026年10月)・つけるのはソース3種と塩、ポン酢、ごまからし、マヨ味噌は別料金 (2026年8〜10月)・アサヒの生ビール600円 (2026年10月)・15〜18本と飲み物でひとり7,000円ほど (2026年9月)',
    neighborhood: '島之内1-12-17、紺ののれんの店。長堀橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げた串で、明太マヨのパンの串やミニバンズも (2026年10月)。ソース、ポン酢、ごまからし、塩で。',
    vegan_detail: '要確認。ヴィーガンの情報なし。おまかせは野菜の串 (アスパラ、里芋、しいたけ、トマト) とエビ、カニ、牛、うなぎが混ざる。苦手なものやアレルギーはコースの前に聞いてくれる (食べログ、2026年10月) が、衣や揚げ油の説明はない。',
    notes: '[串揚げ・島之内、ストップまで続く創作串] 長堀橋近くのシックで黒を基調にした串揚げのカウンター。おまかせは食べられるかごに入った麻婆豆腐、ペンギンの形のパン、うなぎと生姜など遊び心のある旬の串と、Angel shrimp や牛ヒレなどの定番を、ストップと言うまで。串ごとに合うソースを教えてくれて、苦手なものやアレルギーも最初に聞いてくれる。15本ほどでひとり4,000〜7,000円。週末は開店で満席になるので予約を。1階のカウンターは喫煙可、2階のテーブルは禁煙。',
  });
}

// ================================================================ 空色COLOR
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27077691/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'osaka_sorairo_color_hakuromachi', name: '空色COLOR (Sorairo Color)', category: 'OMNI',
    lat: 34.677956, lng: 135.499158, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options but no detail. The steamed-vegetable sets come with salt ponzu, koji-yuzu mayo and bonito salt sauces (August 2026); udon, tempura and fries are also on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options but no detail. The 12-vegetable steamer set came with bonito flakes and a bit of hamo (September 2026), and the dipping sauces include bonito salt, so ask for it without.',
    hours_raw: 'Tabelog gives daily 11:30–23:30 and, in its notes, Mon–Fri and Sat/holidays 11:30–23:00; open year-round. Lunch sets were still served after 16:00 on an August 2026 day. Reservations accepted, but not for café use; phone may be hard to reach at lunch (Tabelog). Menu and ordering, and payment, by smartphone (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD, QUICPay and QR payment; no cover charge (Tabelog). 60 seats: low sofas, a 10-seat counter, tatami tables and an enclosed terrace with kotatsu in winter (Tabelog; 2024–2026). Non-smoking (Tabelog). The entrance is easy to miss; staff let you in (2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakuromachi 4-3-1, west of Midosuji — 5 min from Shinsaibashi Stn',
    cuisine: 'Japanese dining bar and café with low sofas and greenery: seafood delivered daily, an assorted sashimi platter as the specialty, seasonal and fruity sake, desserts by a pastry chef, shaved ice (Tabelog shop text) · lunch: 12-vegetable steamer set ¥1,280 with a small hamo dish (September 2026); branded pork and vegetable steamer set ¥1,680 with sashimi and a small side, three homemade sauces — bonito salt, koji-yuzu mayo, salt ponzu (August 2026); fish steamer set (August 2026); grilled sanma set (August 2026); seafood yukke set with broth to pour over like hitsumabushi (October 2026); white or multigrain rice, large free (October 2026) · dinner: five-kind sashimi platter, hamo tempura, bone crackers, water eggplant, fries, spicy cucumber, mentaiko udon, kiwi sour (October 2026) · winter hot-pot courses: seasonal hot pot ¥3,000, yellowtail shabu-shabu ¥3,500, premium hot pot ¥4,000, +¥2,000 for all-you-can-drink (Tabelog) · organic drinks (September 2026)',
    website: 'https://www.sorairocolor.jp/', gmaps: gm('空色COLOR 博労町'), menu_url: null,
    notes: '[Japanese dining bar · Hakuromachi, steamed-vegetable lunches on sofas] A greenery-filled dining bar a few minutes west of Midosuji, with low sofas, tatami tables and an enclosed terrace (kotatsu in winter). At lunch, order a bamboo steamer of a dozen vegetables or pork with three homemade sauces for about ¥1,300–1,700; at night, sashimi, hamo tempura and mentaiko udon with seasonal sake. Order and pay on your phone. Reviews in 2026 also mention dated cleanliness and an over-hot terrace in September.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member) and website sorairocolor.jp: a Japanese dining bar and café with seafood delivered daily, sake from around Japan and desserts made by a pastry chef.', philosophy: null, specialty: 'Steamed-vegetable sets; sashimi platter.',
      anecdotes: [
        { text: '"The entrance is a bit tricky, and you need to be noticed by the staff inside to get in." — September 2026, a fourth visit.', source: R + 'B461580902/' },
        { text: '"The staff explained, \'You can enjoy the broth as a clear soup or pour it over rice like hitsumabushi\'" — October 2026, the seafood yukke set.', source: R + 'B536689758/' },
        { text: '"The cleanliness remains an issue, and the staff\'s friendliness was lacking as usual." — September 2026, a repeat visitor who otherwise liked the food.', source: R + 'B446812331/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 空色COLOR、ダイニングバー・魚介・カフェ、大阪市中央区博労町4-3-1、心斎橋駅から徒歩5分、毎日11:30〜23:30 (詳細では月〜金・土祝11:30〜23:00)、年中無休、予約可 (カフェ利用は不可)、カード・電子マネー・QR 決済可、チャージ料なし、60席 (ソファ、カウンター10席、座敷)、禁煙、ヴィーガン・ベジタリアン・グルテンフリーの対応ありと表示、公式 sorairocolor.jp。毎日直送の魚、刺身の盛り合わせ、季節の日本酒、パティシエの手作りデザート、かき氷、冬の鍋コース3,000円・3,500円・4,000円 (飲み放題+2,000円)。口コミ(2026年8月〜10月): 野菜12種のせいろの御膳1,280円、ブランド豚と野菜のせいろ1,680円、かつお塩・麹柚子マヨ・塩ポン酢のたれ、焼き魚の定食、海鮮ユッケの定食、白米か雑穀米、大盛り無料、スマホで注文と支払い、入口がわかりにくい、ハモの天ぷら、明太うどん、清潔さが気になるという声、テラスが暑かったという声。',
      confidence: 'medium', sources: [TB, 'https://www.sorairocolor.jp/', R + 'B446812331/', R + 'B461580902/', R + 'B500759459/', R + 'B532979888/', R + 'B534096104/', R + 'B534300783/', R + 'B534457117/', R + 'B535157923/', R + 'B536592167/', R + 'B536689758/', R + 'B536773284/', R + 'B537273954/', R + 'B537422341/', R + 'B537910091/', R + 'B538266953/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu, ordering and payment on your smartphone (2026); sofa and tatami seating. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町4-3-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町四丁目3番1号 (go) 11m. Nearest record: バー ラリティー (osaka_bar_rarity_bakuromachi, 4-6-17 B1F) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B461580902/', R + 'B537422341/', TB],
    price_note: 'Lunch prices from August–September 2026 reviews; hot-pot courses from the Tabelog listing (winter).', last_checked: TODAY, items: [
      it('', '', '12-vegetable steamer set', '¥1,280', 'Lunch', 'ask', 'ask', 'September 2026 review; comes with bonito flakes and a little hamo.', 'yasai_seiro'),
      it('', '', 'Branded pork and seasonal vegetable steamer set', '¥1,680', 'Lunch', 'ask', 'no', 'August 2026 review.', 'buta_seiro'),
      it('', '', 'Seafood yukke set', '', 'Lunch', 'ask', 'no', 'October 2026 review.', 'kaisen_yukke'),
      it('', '', 'Mentaiko udon', '', 'Dinner', 'no', 'no', 'October 2026 review.', 'mentai_udon'),
      it('', '', 'Winter yellowtail shabu-shabu course (food only)', '¥3,500', 'Course', 'ask', 'no', 'Tabelog listing; +¥2,000 for all-you-can-drink.', 'buri_shabu'),
    ] }, {
    cuisine: '低いソファと緑の和のダイニングバー兼カフェ: 毎日直送の魚、名物の刺身の盛り合わせ、季節のフルーティーな日本酒、パティシエの手作りデザート、かき氷 (食べログの店の紹介)・昼: 野菜12種のせいろの御膳1,280円、ハモの小鉢つき (2026年9月)、ブランド豚と季節の野菜のせいろ1,680円、刺身と小鉢つき、自家製のたれ3種 — かつお塩、麹柚子マヨ、塩ポン酢 (2026年8月)、魚のせいろ (2026年8月)、さんまの焼き魚の定食 (2026年8月)、だしをかけてひつまぶしのようにも食べる海鮮ユッケの定食 (2026年10月)、白米か雑穀米、大盛り無料 (2026年10月)・夜: 刺身5種盛り、ハモの天ぷら、骨せんべい、水茄子、フライドポテト、ピリ辛きゅうり、明太うどん、キウイのサワー (2026年10月)・冬の鍋コース: 季節の鍋3,000円、ブリしゃぶ3,500円、上の鍋4,000円、飲み放題は+2,000円 (食べログ)・オーガニックのドリンク (2026年9月)',
    neighborhood: '博労町4-3-1、御堂筋の西側。心斎橋駅から徒歩5分',
    gf_detail: '要確認。食べログにはグルテンフリーの対応ありとあるが詳細なし。せいろのセットは塩ポン酢、麹柚子マヨ、かつお塩のたれで (2026年8月)。うどん、天ぷら、フライドポテトもある。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアンの対応ありとあるが詳細なし。野菜12種のせいろにはかつお節とハモが少し (2026年9月)、たれにもかつお塩があるので、抜けるか確認を。',
    notes: '[和のダイニングバー・博労町、ソファで蒸し野菜のランチ] 御堂筋から西へ数分、緑いっぱいのダイニングバーで、低いソファ、座敷、囲いのあるテラス (冬はこたつ)。昼は野菜12種や豚のせいろを自家製のたれ3種で1,300〜1,700円ほど、夜は刺身、ハモの天ぷら、明太うどんと季節の日本酒。注文と支払いはスマホで。2026年の口コミには清潔さが気になる、9月のテラスが暑かったという声も。',
  });
}

// ================================================================ AVOCADO HOUSE NAMBA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27126239/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']), WE = day(['15:00', '24:00']);
  put({
    id: 'osaka_avocado_house_namba', name: 'AVOCADO HOUSE NAMBA', category: 'OMNI',
    lat: 34.666595, lng: 135.501837, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tacos and fajitas come with tortillas (type not stated); the menu also has fish and chips, onion rings, nachos, quesadillas and enchiladas.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Plain avocado, avocado tacos, salsa and chips and guacamole are on the menu (September–October 2026), but nothing is described as vegan; many dishes use cheese, meat or fish.',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat–Sun 15:00–24:00; closed 1 January and irregularly (Tabelog). Other listings give different hours (search results, 2026-11-02), so check. Reservations accepted (Tabelog). Mobile ordering (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, d Barai, Rakuten Pay and au PAY (Tabelog). 52 seats including an 8-seat counter; non-smoking, smoking area outside after 22:00; wheelchair accessible; children welcome, but late-night visits with children may be refused (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-3-4, 難波日大ビル 1F, pink frontage — 2 min from Namba Stn exit 19',
    cuisine: 'Mexican bar built around "Premium Rich Avocado" chosen for oil content, with chicken fajitas flamed at the table and fruit cocktails (Tabelog shop text) · courses with three hours of drinks and all-you-can-eat tacos: casual ¥4,000 (women) / ¥4,500 (men), gold ¥4,500, premium with 10 kinds of taco ¥5,000 (Tabelog, discounted prices) · September 2026 prices: premium rich avocado ¥913, avocado cheese gratin ¥1,298, wagyu hamburg steak teriyaki ¥2,178, Avocado House Caesar salad ¥1,628, avocado carpaccio ¥1,023, chili con carne ¥968, salsa and chips ¥495, chicken fajitas ¥2,420 (half size available), tacos ¥495–605 (pulled pork, avocado, roast beef and guacamole, jerk chicken), Corona ¥1,045, Sol ¥935, piña colada ¥880, highball ¥550 · also guacamole, quesadilla, nachos, chorizo, prosciutto and avocado, caprese with avocado, shrimp and avocado ceviche, fish and chips with avocado, onion rings, Kobe beef "sukiyaki" tacos, enchiladas (September–October 2026) · six Marie Sharp\'s habanero sauces on the table; mild by default (September–October 2026) · mocktails such as virgin mojito and pink lemonade (September 2026)',
    website: null, gmaps: gm('AVOCADO HOUSE NAMBA'), menu_url: null,
    notes: '[Mexican · Namba, avocado everything] A pink-fronted, mural-covered Mexican bar two minutes from Namba Station, where rich avocados go into almost every dish. Order the plain premium avocado (¥913), guacamole, a few tacos (¥495–605) and the chicken fajitas, flamed with tequila at the table; heat is mild, with six habanero sauces to add. The ¥4,000–5,000 courses bring three hours of drinks and unlimited tacos. Lively, with many international guests (September 2026); opens 15:00 at weekends.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 5 November 2021; avocados chosen by oil content; "authentic cuisine that satisfies Mexicans".', philosophy: null, specialty: 'Premium rich avocado; chicken fajitas.',
      anecdotes: [
        { text: '"There were many international guests, and the lively ambiance made it feel like I was abroad!" — September 2026.', source: R + 'B535460449/' },
        { text: '"The Chicken Fajitas ... are served sizzling on a teppan with spiced chicken and vegetables, flambéed with tequila right in front of you" — September 2026.', source: R + 'B536368080/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): AVOCADO HOUSE NAMBA、メキシコ料理・バル・カフェ、大阪市中央区難波3-3-4 難波日大ビル 1F、なんば駅19番出口から約2分、月〜金17:00〜24:00、土日15:00〜24:00、不定休と1月1日休み、予約可、カード・電子マネー・QR 決済可、52席 (カウンター8)、禁煙 (22時以降は店外に喫煙所)、深夜は子ども連れを断る場合あり、2021年11月5日オープン。油分で選んだ「Premium Rich Avocado」、炎の上がるチキンファヒータ、フルーツカクテル、3時間飲み放題とタコス食べ放題のコース4,000〜5,000円。口コミ(2026年9月〜10月): アボカド913円、アボカドのチーズグラタン1,298円、シーザーサラダ1,628円、チキンファヒータ2,420円、タコス495〜605円、チリコンカン968円、ハバネロソース6種、辛さは控えめ、外国人客が多くにぎやか、モバイルオーダー。',
      confidence: 'medium', sources: [TB, R + 'B529859458/', R + 'B535460449/', R + 'B535723652/', R + 'B535828747/', R + 'B536368080/', R + 'B536407931/', R + 'B536424443/', R + 'B536487778/', R + 'B536550672/', R + 'B536819712/', R + 'B537750851/', R + 'B537859616/', R + 'B538153028/', R + 'B538388373/', R + 'B538481878/', 'https://gurunavi.com/en/ke6a100/rst/', 'https://epark.jp/shopinfo/hit627605/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many international guests (September 2026); mobile ordering. No English-menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-3-4 難波日大ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目3番4号 (go) 19m. Nearest record: 金龍ラーメン 戎橋店 (osaka_kinryu_ramen_ebisubashi, 3-3) 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536368080/', R + 'B536407931/', TB],
    price_note: 'Prices from September 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Premium rich avocado (sliced)', '¥913', 'Avocado', 'ask', 'ask', 'September 2026 review.', 'premium_avocado'),
      it('', '', 'Chicken fajitas (flamed at the table, with tortillas)', '¥2,420', 'Mains', 'ask', 'no', 'September 2026 review; half size available.', 'chicken_fajitas'),
      it('', '', 'Tacos (avocado / pulled pork / roast beef & guacamole / jerk chicken)', '¥495–605', 'Tacos', 'ask', 'ask', 'September 2026 review.', 'tacos'),
      it('', '', 'Avocado House Caesar salad', '¥1,628', 'Salads', 'ask', 'no', 'September 2026 review.', 'caesar_salad'),
      it('', '', 'Avocado cheese gratin', '¥1,298', 'Avocado', 'ask', 'no', 'September 2026 review.', 'avocado_gratin'),
      it('', '', 'Premium course: 10 kinds of taco, unlimited fajitas, 3 hours of drinks', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing (discounted price).', 'premium_course'),
    ] }, {
    cuisine: '油分で選んだ「Premium Rich Avocado」が主役のメキシカンバー。テーブルで炎を上げるチキンファヒータとフルーツのカクテル (食べログの店の紹介)・3時間飲み放題とタコス食べ放題のコース: カジュアル4,000円 (女性)・4,500円 (男性)、ゴールド4,500円、10種のタコスのプレミアム5,000円 (食べログ、割引後)・2026年9月の値段: アボカド913円、アボカドのチーズグラタン1,298円、和牛ハンバーグの照り焼き2,178円、シーザーサラダ1,628円、アボカドのカルパッチョ1,023円、チリコンカン968円、サルサとチップス495円、チキンファヒータ2,420円 (ハーフあり)、タコス495〜605円 (プルドポーク、アボカド、ローストビーフとワカモレ、ジャークチキン)、コロナ1,045円、ソル935円、ピニャコラーダ880円、ハイボール550円・ほかにワカモレ、ケサディーヤ、ナチョス、チョリソ、生ハムとアボカド、アボカドのカプレーゼ、エビとアボカドのセビーチェ、アボカド入りのフィッシュアンドチップス、オニオンリング、Kobe beef の「すき焼き」タコス、エンチラーダ (2026年9〜10月)・テーブルに Marie Sharp\'s のハバネロソース6種、料理自体は辛さ控えめ (2026年9〜10月)・バージンモヒートやピンクレモネードなどノンアルコールも (2026年9月)',
    neighborhood: '難波3-3-4 難波日大ビル 1F、ピンクの外観。なんば駅19番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。タコスとファヒータはトルティーヤで (種類は不明)。フィッシュアンドチップス、オニオンリング、ナチョス、ケサディーヤ、エンチラーダも。',
    vegan_detail: '要確認。ヴィーガンの情報なし。アボカドそのもの、アボカドのタコス、サルサとチップス、ワカモレはある (2026年9〜10月) が、ヴィーガンの説明はなく、チーズ、肉、魚の料理が多い。',
    notes: '[メキシコ料理・なんば、なんでもアボカド] なんば駅から2分、ピンクの外観と壁画のメキシカンバーで、ほとんどの料理に濃厚なアボカド。アボカドそのもの (913円)、ワカモレ、タコスを何種か (495〜605円)、テーブルでテキーラの炎を上げるチキンファヒータを。辛さは控えめで、ハバネロソース6種で足せる。4,000〜5,000円のコースは3時間飲み放題とタコス食べ放題。にぎやかで外国人客も多い (2026年9月)。週末は15時から。',
  });
}

// ================================================================ 肉處 きっしゃん なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046915/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:30'], ['17:00', '23:00']), WE = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_nikudokoro_kisshan_namba', name: '黒毛和牛焼肉 肉處 きっしゃん なんば店 (Nikudokoro Kisshan Namba)', category: 'OMNI',
    lat: 34.664491, lng: 135.501975, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakiniku comes with sauces, the lunch hamburger with a Japanese-style sauce (September 2026), and the sukiyaki course ends with udon (September 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kuroge wagyu yakiniku, sukiyaki and shabu-shabu restaurant.',
    hours_raw: 'Mon–Fri 11:00–15:30 (last order 15:00) and 17:00–23:00; Sat–Sun 11:00–15:00 and 17:00–23:00; last order food 22:00, drinks 22:30; closed only when Takashimaya closes (Tabelog). An August 2025 reviewer was told the regular menu now runs on after lunch without a break. Reservations accepted; private rooms need booking (Tabelog); the Takumi course is for two or more (August 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), iD, QUICPay and QR payment (Tabelog). 51 seats at tables, private rooms for 2 to 24; non-smoking; smoke-free roasters; wheelchair access; children welcome (Tabelog). Takashimaya parking free for 2 hours with ¥3,000 spent (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Namba Dining Maison 8F (Takashimaya Osaka) — directly linked to Namba Stn, 3 min from Nankai Namba',
    cuisine: 'Kuroge wagyu yakiniku, shabu-shabu and sukiyaki from a group founded in 1995 and backed by a butcher in Osaka for 50 years; A5 wagyu, mostly heifers, from around Japan (Tabelog shop text) · courses: Kisshan course of 11 items ¥5,800 (¥7,000 with drinks), Takumi course of 13 items ¥7,200 (Tabelog); Hibiki course (July 2026); domestic beef sukiyaki course with udon and almond tofu (September 2026) · lunch: 150 g kuroge wagyu and outside skirt set (August and October 2026); 120 g service lunch (August 2026); horumon and lean-meat set with salad, kakuteki and soup refills, large rice free (September 2026); wagyu hamburger with Japanese-style sauce (September 2026); half cold noodles and half stone-grilled bibimbap ¥1,680 (September 2026) · à la carte: salted tongue, three-kind tongue platter, kalbi, outside skirt, maruchou, fresh spring rolls, cold noodles (2026); seared wagyu yukhoe with tobiko, 10-vegetable salad (August 2025)',
    website: null, gmaps: gm('肉處 きっしゃん なんば店'), menu_url: null,
    notes: '[Yakiniku · Namba, butcher-run wagyu in Takashimaya] A wagyu yakiniku restaurant on the 8th-floor dining floor of Takashimaya at Namba, from a butcher-backed group (founded 1995). The lunch sets are the value: 150 g of kuroge wagyu and skirt with rice, soup and salad, or a cold-noodle and bibimbap half-and-half at ¥1,680. Dinner courses run ¥5,800–7,200; private rooms are popular and must be booked. Reviews in 2026 split between attentive service and a sukiyaki course where a nearly full room outran the staff (September 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): founded in 1995, backed by a butcher shop in Osaka for 50 years; this shop opened 2 March 2010. Per gurunavi, the group\'s main shop is 西中島総本店; a Tennoji shop is mentioned on Retty and by a September 2026 reviewer.', philosophy: null, specialty: 'Kuroge wagyu yakiniku; lunch sets.',
      anecdotes: [
        { text: '"... a basket to place my belongings in, and after I put my bag inside ... a cloth to cover it." — September 2026, Saturday noon, alone.', source: R + 'B535806748/' },
        { text: '"I waited about 20 minutes without anything arriving. The hot pot was burning" — September 2026, the domestic beef sukiyaki course in a nearly full room.', source: R + 'B535124375/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 黒毛和牛焼肉 肉處 きっしゃん なんば店、焼肉・すき焼き・しゃぶしゃぶ、大阪市中央区難波5-1-18 なんばダイニングメゾン 8F (高島屋)、南海なんば駅から徒歩3分、月〜金11:00〜15:30 (L.O. 15:00)、17:00〜23:00、土日11:00〜15:00、17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、高島屋の休館日に準ずる、予約可、カード・電子マネー・QR 決済可、51席 (テーブル)、個室2〜24名、禁煙、無煙ロースター、子ども可、2010年3月2日オープン。1995年創業、大阪で50年の精肉店が母体、全国のA5の黒毛和牛 (おもに雌)、きっしゃんコース5,800円、Takumi のコース7,200円、ランチの和牛100%ハンバーグと焼肉ランチ。口コミ(2026年7月〜10月): 黒毛和牛とハラミの150gのランチ、冷麺と石焼ビビンバのハーフ&ハーフ1,680円、ホルモンと赤身のランチ、塩タン、カルビ、ハラミ、maruchou、荷物のかごと布、満席ですき焼きのコースの対応が遅かったという声。',
      confidence: 'medium', sources: [TB, R + 'B347393190/', R + 'B512669851/', R + 'B532814358/', R + 'B532829570/', R + 'B533252587/', R + 'B533695623/', R + 'B534016153/', R + 'B534851834/', R + 'B534877729/', R + 'B535082409/', R + 'B535124375/', R + 'B535220965/', R + 'B535333174/', R + 'B535806748/', R + 'B537116824/', 'https://r.gnavi.co.jp/k761100/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store dining floor with set lunches and courses; private rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.664491,135.501975 kept (GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 34.663612,135.502396 is the building centroid, 104 m away). Same building as other records on separate points: 浪花そば (osaka_naniwa_soba_namba_dining_maison, 7F) 12 m, 福太郎 (osaka_fukutaro_namba_dining_maison, 8F) 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535082409/', TB],
    price_note: 'Courses from the Tabelog listing; lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kisshan course, 11 items', '¥5,800', 'Course', 'ask', 'no', 'Tabelog listing; ¥7,000 with all-you-can-drink.', 'kisshan_course'),
      it('', '', 'Takumi yakiniku course, 13 items', '¥7,200', 'Course', 'ask', 'no', 'Tabelog listing; two or more (August 2026).', 'takumi_course'),
      it('', '', 'Lunch: 150 g kuroge wagyu and outside skirt', '', 'Lunch', 'ask', 'no', 'August and October 2026 reviews.', 'wagyu_harami_lunch'),
      it('', '', 'Lunch: half cold noodles and half stone-grilled bibimbap, with soup and salad', '¥1,680', 'Lunch', 'no', 'no', 'September 2026 review.', 'reimen_bibimbap'),
      it('', '', 'Lunch: 100% wagyu hamburger, Japanese-style sauce', '', 'Lunch', 'ask', 'no', 'Tabelog shop text; September 2026 review.', 'wagyu_hamburg'),
    ] }, {
    cuisine: '1995年創業、大阪で50年の精肉店が母体の黒毛和牛の焼肉、しゃぶしゃぶ、すき焼き。全国のA5の和牛、おもに雌 (食べログの店の紹介)・コース: きっしゃんコース11品5,800円 (飲み放題つき7,000円)、Takumi のコース13品7,200円 (食べログ)、Hibiki のコース (2026年7月)、うどんと杏仁豆腐つきの国産牛すき焼きのコース (2026年9月)・ランチ: 黒毛和牛とハラミの150g (2026年8月・10月)、120gのサービスランチ (2026年8月)、ホルモンと赤身のランチ、サラダ、カクテキ、スープはおかわり、ご飯大盛り無料 (2026年9月)、和風ソースの和牛ハンバーグ (2026年9月)、冷麺と石焼ビビンバのハーフ&ハーフ1,680円 (2026年9月)・単品: 塩タン、タン3種盛り、カルビ、ハラミ、maruchou、生春巻き、冷麺 (2026年)、とびこをのせた和牛の炙りユッケ、野菜10種のサラダ (2025年8月)',
    neighborhood: '難波5-1-18 なんばダイニングメゾン 8F (高島屋大阪店)。なんば駅直結、南海なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。焼肉はたれで、ランチのハンバーグは和風ソース (2026年9月)、すき焼きのコースの締めはうどん (2026年9月)。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉、すき焼き、しゃぶしゃぶの店。',
    notes: '[焼肉・なんば、高島屋の精肉店系の和牛] なんばの高島屋8階のレストラン街にある、精肉店が母体 (1995年創業) の和牛の焼肉店。お得なのはランチで、黒毛和牛とハラミ150gにご飯、スープ、サラダ、または冷麺と石焼ビビンバのハーフ&ハーフ1,680円。夜のコースは5,800〜7,200円、人気の個室は予約が必要。2026年の口コミは丁寧な接客という声と、満席ですき焼きのコースの対応が追いつかなかったという声 (2026年9月) に分かれる。',
  });
}

save();
