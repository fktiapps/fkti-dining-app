// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 14.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 祇をん 麺や 凛々 Gion Menya Rinrin (8-seat clear-broth ramen counter on Kiritoshi; since October 2025)
//   + ひつじ食堂 Hitsuji Shokudo (lamb jingisukan counter near Karasuma; since 2016)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 祇をん う桶や う Uokeya U (Edo-style eel served in a cedar tub, west of Hanamikoji)
//   - モリタ屋 四条猪熊本店 (26000409) skipped: chain — 4 モリタ屋 restaurants in the Tabelog crawl (本店, 四条猪熊本店, 木屋町店,
//     JR京都伊勢丹店) plus 2 モリタ屋 food markets already in data/kyoto_grocery.json (本店, SUINA室町店) = 6 same-name shops.
//   + 三本木商店 Sanbongi Shoten (charcoal, natural wine and warm sake in a 100-year-old townhouse; since 2019)
//   None is in data/kyoto.json: grep by id, name (凛々/Rinrin, ひつじ食堂/Hitsuji Shokudo — the data ひつじ is a donut shop at
//   大炊町, う桶や/Uokeya, 三本木/Sanbongi) and address (清本町364, 十文字町432, 西花見小路, 真町478) found none.
//   Same-name counts (Samboa ruling): 凛々, ひつじ食堂, 三本木商店 — one listing each in the Tabelog crawl. う桶や う — one; its operator
//   株式会社やげん堀グループ (¥390 m sales) runs 6 Kyoto shops, two already in data (しぐれ茶屋 侘助, 御二九と八さい はちべー) — a small
//   group’s sister concept, drafted.
//   Service charges checked against Tabelog’s Japanese original: only う桶や う lists one, and its original reads なし (none).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000409', 'chain: 6 モリタ屋 shops — 4 restaurants in the Tabelog crawl (モリタ屋 本店, 四条猪熊本店, 木屋町店, JR京都伊勢丹店) plus 2 モリタ屋 Quality Food Market stores already in data/kyoto_grocery.json (本店, SUINA室町店)');

// ================================================================ 祇をん 麺や 凛々
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043861/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['17:00', '22:00']); const B = day(['11:00', '15:00'], ['17:00', '02:00']);
  put({
    id: 'kyoto_gion_menya_rinrin', name: '祇をん 麺や 凛々 (Gion Menya Rinrin)', category: 'OMNI',
    lat: 35.00496, lng: 135.77462, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in every bowl, and wheat gluten (fu) as a topping (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito, shellfish and chicken broths with chicken or pork chashu (2026 reviews).',
    hours_raw: '11:00–15:00 and 17:00–22:00 Monday and Sunday; 11:00–15:00 and 17:00–2:00 Tuesday to Saturday; open year-round (Tabelog). Tabelog lists reservations. About 10 people were queuing at 19:00 in January 2026. 8 counter seats in a room like a sushi or kaiseki counter; no condiments on the counter; paper bibs; non-smoking (Tabelog; September–October 2026). Cash only — no cards, e-money or QR (Tabelog; June and August 2026). At the back of the 1st floor of 切通しビル on Kiritoshi in Gion, behind a noren; 5 min from Gion-Shijo Stn (Tabelog; August–September 2026). Opened 17 October 2025 (Tabelog).',
    hours: { 0: A, 1: B, 2: B, 3: B, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiritoshi in Gion, between Shijo and Yasaka Shrine — 5 min from Gion-Shijo Stn',
    cuisine: 'Clear-broth ramen of bonito, shellfish or chicken (2026 reviews) · "Kiwami Katsuo" bonito ramen ¥1,680 (September 2026; ¥1,690 in August), its katsuo broth said to take over 8 hours · "Tori Tanrin" chicken ramen ¥1,390 · "Kai Tanrin" shellfish ramen ¥1,490 · toppings kept minimal: chicken chashu, fine white negi, fu or yuba · limited bowls such as a sea-bream shio ramen (October 2026) and cold seafood-kombu noodles (July 2026) · rice: "Yasaka don" of pork ¥780, "Shirakawa don" of chicken ¥580, seared-pork don ¥580, tamago-kake-gohan ¥420, rice ¥300 · chashu ¥350; seared-pork sushi, chicken skin with ponzu',
    website: null, gmaps: gm('祇をん 麺や 凛々 清本町'), menu_url: TB,
    notes: "[Ramen · Gion, golden bonito broth at an 8-seat counter] A tiny ramen counter at the back of a building on Gion's Kiritoshi, dressed like a sushi bar, with no condiments on the counter. Three bowls: 'Kiwami Katsuo' (¥1,680), a golden, clear bonito broth said to take over eight hours, with thin straight noodles neatly folded; chicken; and shellfish — topped only with chicken chashu, fine negi and a piece of fu. Most praise the clean umami; a few found it thin or salty for the price. Queues at dinner; cash only; open to 2:00 most nights.",
    chef_bio: { chef_name: null, roles: ['Owner not named; an August 2026 reviewer says it is run by the independent owner of the noodle shop "Men Tori Hyakutori"'], origin: null,
      background: 'Opened 17 October 2025 (Tabelog). An August 2026 reviewer says the shop is run by the owner who went independent from "Men Tori Hyakutori" and that the noodles come from "Menya Teigaku"; a June 2026 reviewer describes it as the new shop that replaced "Hyakkyo" in the same space. A September 2026 reviewer heard the bonito broth takes over 8 hours. Names known only from English reviews.',
      philosophy: null,
      specialty: 'Kiwami Katsuo bonito ramen; Yasaka pork rice bowl.',
      anecdotes: [
        { text: 'A September 2026 diner called it ramen as "the ultimate form of subtraction": a golden broth, folded thin noodles and just chicken chashu, negi and fu.', source: R + 'B535057870/' },
        { text: 'A May 2026 diner found the chicken broth thin and lacking depth, like high-end instant noodles for over ¥1,000, and thought it aimed at tourists.', source: R + 'B532994439/' },
        { text: 'An August 2026 reviewer noted many foreign customers and that prices had risen a lot compared with the owner’s earlier shop.', source: R + 'B533860996/' },
      ],
      japanese_sources_summary: '食べログ: 祇をん 麺や 凛々、ラーメン、東山区清本町364-5 切通しビル 1F、月・日 11:00〜15:00・17:00〜22:00、火〜土 11:00〜15:00・17:00〜翌2:00、無休、予約可、8席、禁煙、カード・電子マネー・QR 不可、2025年10月17日オープン。口コミ (2026年1〜10月、英語): Kiwami Katsuo 1,680円、Tori Tanrin 1,390円、Kai Tanrin 1,490円、Yasaka don 780円、Shirakawa don 580円、卵かけご飯420円、現金のみ、カウンター8席、卓上調味料なし、鰹だしは8時間以上、細いストレート麺、鶏チャーシュー、白ねぎ、麩。',
      confidence: 'medium', sources: [TB, R + 'B516250036/', R + 'B527943686/', R + 'B530487265/', R + 'B532994439/', R + 'B533860996/', R + 'B533971499/', R + 'B534196355/', R + 'B535057870/', R + 'B535370655/', R + 'B535583020/', R + 'B536144901/', R + 'B536439831/'] },
    ramen: {
      broth_base: ['gyokai', 'chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, folded in the bowl, firm with a good bite; from "Menya Teigaku" per an August 2026 reviewer; flat, chewy noodles in the cold summer bowl (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kiwami Katsuo bonito ramen ¥1,680 (September 2026).',
      chashu: 'Chicken chashu, two small pieces (September 2026); pork chuck in the cold noodles (July 2026).',
      notable_toppings: ['fine white negi', 'fu (wheat gluten)', 'yuba', 'chicken chashu'],
      gf: { status: 'no', note: 'Wheat noodles; fu topping.' },
      vegan: { status: 'no', note: 'Bonito, shellfish and chicken broths.' },
      pantheon: 'Gion’s sushi-bar ramen counter: a golden, eight-hour bonito broth served with almost nothing on top.',
      profile: { richness: 2, oiliness: 3, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B533971499/', '"The clear soup was light yet packed with umami" (August 2026); another found it "light and refreshing" (B536144901), one found it "too thin" (B532994439), one "rich and aromatic" (B535370655).'],
        oiliness: [R + 'B535370655/', '"It seemed to be coated in oil, allowing me to enjoy the hot broth until the very end" (September 2026).'],
        clarity: [R + 'B535057870/', '"The broth sparkles in a golden hue" (September 2026); "the clear soup" (B533971499).'],
        tare_strength: [R + 'B516250036/', '"The seafood flavor centered around the bonito came forward, beautifully balanced by the soy sauce" (January 2026); "a bit salty for my taste" (B530487265).'],
        noodle_firmness: [R + 'B516250036/', '"The noodles were straight and firm, with a nice bite" (January 2026); "slightly firm, medium-thin, and straight" (October 2026).'],
        aroma_punch: [R + 'B533971499/', '"The rich aroma of bonito that spread in my mouth the moment I tasted the broth" (August 2026); "the aroma of bonito filled the air" (B516250036).'],
      },
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; queue at dinner; 8 seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町364-5 切通しビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00496, 135.77462); cross-checked: GSI 京都府京都市東山区清本町364番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535057870/', R + 'B536439831/'],
    price_note: 'Prices from September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', 'Kiwami Katsuo', 'Bonito ramen', '¥1,680', 'Ramen', 'no', 'no', '¥1,690 in August 2026.', 'kiwami_katsuo'),
      it('', 'Tori Tanrin', 'Chicken ramen', '¥1,390', 'Ramen', 'no', 'no', '', 'tori_tanrin'),
      it('', 'Kai Tanrin', 'Shellfish ramen', '¥1,490', 'Ramen', 'no', 'no', '', 'kai_tanrin'),
      it('', 'Yasaka don', 'Pork rice bowl', '¥780', 'Rice', 'ask', 'no', '', 'yasaka_don'),
      it('卵かけご飯', 'tamago kake gohan', 'Raw-egg rice with seasoned yolk', '¥420', 'Rice', 'ask', 'no', '', 'tkg'),
    ] }, {
    cuisine: '鰹、貝、鶏の澄んだスープのラーメン (2026年の口コミ)・鰹の Kiwami Katsuo 1,680円 (2026年9月。8月は1,690円)、鰹だしは8時間以上かけるという・鶏の Tori Tanrin 1,390円・貝の Kai Tanrin 1,490円・具は鶏チャーシュー、細い白ねぎ、麩や湯葉と最小限・鯛の塩ラーメン (2026年10月) や魚介と昆布の冷たい麺 (2026年7月) などの限定・ご飯もの: 豚の Yasaka don 780円、鶏の Shirakawa don 580円、炙り豚丼580円、卵かけご飯420円、ご飯300円・チャーシュー350円、炙り豚の寿司、鶏皮ポン酢',
    neighborhood: '四条と八坂神社の間、祇園の切通し。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。どのラーメンも小麦の麺で、具に麩も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹、貝、鶏のスープに、鶏や豚のチャーシュー (2026年の口コミ)。',
    notes: '[ラーメン・祇園、8席のカウンターの金色の鰹だし] 祇園の切通しのビルの奥にある、寿司屋のような小さなラーメンのカウンター。卓上に調味料はない。ラーメンは3種: 8時間以上かけるという金色に澄んだ鰹だしに、細いストレート麺をきれいに折りたたんだ Kiwami Katsuo (1,680円)、鶏、貝。具は鶏チャーシュー、細い白ねぎ、麩だけ。澄んだうま味が好評だが、値段のわりに薄い、しょっぱいという声も。夜は行列、現金のみ、多くの日は2時まで。',
  });
}

// ================================================================ ひつじ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028417/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['17:00', '22:00']); const F = day(['17:00', '22:30']);
  put({
    id: 'kyoto_hitsuji_shokudo', name: 'ひつじ食堂 (Hitsuji Shokudo)', category: 'OMNI',
    lat: 35.006136, lng: 135.763773, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lamb is grilled with vegetables and eaten with a slightly sweet, garlicky sauce; sausages, keema curry and salads are on the menu, and no gluten information is published (Tabelog menu; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb jingisukan restaurant; the few vegetable sides (pickles, daikon kimchi, cucumber, grilled vegetables and mushrooms) have no published ingredients (Tabelog menu).',
    hours_raw: '17:00–22:00 (last order 21:30) Monday, Wednesday, Thursday, Saturday, Sunday and holidays; 17:00–22:30 Friday (last entry 21:00, last order 22:00); closed Tuesday (Tabelog). Bookings taken; same-day online booking may not be possible — a March 2026 diner phoned, was told it was full and got a cancellation call five minutes later. 18 seats with a counter where staff grill the meat; non-smoking; children welcome; cards and PayPay, no e-money (Tabelog; 2025–26 reviews). In Nakagyo, about 425 m from Karasuma Stn (Tabelog). Opened 18 December 2016 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: F, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nakagyo near Shijo-Karasuma — 6 min from Karasuma Stn',
    cuisine: 'Jingisukan (Genghis Khan) lamb grilled at the counter by staff (Tabelog; 2025–26 reviews) · lamb shoulder ¥1,080 · top lamb (chuck eye roll) ¥1,280 · tenderloin ¥1,480 · chuck eye roll steak ¥1,280 · spiced bone-in lamb chop ¥1,100 per 100 g · grilled vegetable set ¥550 · mushrooms ¥500 · three sausages (house lamb, pork, chorizo) ¥720 · potato salad with lamb bacon and cheese ¥550 · coleslaw ¥550 · smoked daikon with cream cheese ¥700 · pickles ¥480 · daikon kimchi ¥380 · "addictive" cucumber ¥380 (Tabelog menu, October 2025) · lamb tongue, nakaochi kalbi, lamb prosciutto, lamb keema curry to finish, peach sorbet in half a peach (2025–26 reviews) · a one-drink course (October 2026) · wines chosen to go with lamb',
    website: null, gmaps: gm('ひつじ食堂 十文字町'), menu_url: MENU,
    notes: "[Lamb jingisukan · Shijo-Karasuma, lamb grilled at the counter] One of few jingisukan (grilled lamb) places in central Kyoto: staff grill shoulder, chuck eye roll, tenderloin and lamb chops with bean sprouts and onion on the counter griddle, cuts from about ¥1,080. Reviewers stress the lamb has almost no gamey smell; the sauce is slightly sweet and garlicky. Finish with lamb keema curry. Sides of pickles, kimchi and lamb-bacon potato salad; wine to match. Some found service slow or portions small for the price. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found'], origin: null,
      background: 'Opened 18 December 2016 (Tabelog). The Tabelog menu (updated October 2025) lists lamb cuts cut and grilled by staff and house-made lamb sausage. Reviewers call it one of the few jingisukan restaurants in central Kyoto (2025–26).',
      philosophy: null,
      specialty: 'Lamb jingisukan; lamb keema curry.',
      anecdotes: [
        { text: 'An August 2025 diner wanted to eat the crispy fat left on the griddle, but it was taken away first.', source: R + 'B512393896/' },
        { text: 'A March 2026 diner was told by phone the shop was full, then got a call five minutes later offering a cancelled seat.', source: R + 'B523829616/' },
        { text: 'An August 2026 diner waited after being told staff would come to cut the meat, and the ordered sorbet was forgotten.', source: R + 'B534774698/' },
      ],
      japanese_sources_summary: '食べログ: ひつじ食堂、ジンギスカン、中京区十文字町432-7-2、烏丸駅から425m、月水木土日祝 17:00〜22:00 (L.O. 21:30)、金 17:00〜22:30 (最終入店21:00、L.O. 22:00)、火曜休み、予約可、18席、カウンター、禁煙、カード・PayPay 可、子ども可、2016年12月18日オープン、メニュー (2025年10月14日更新、税込、英語表示): ラム1,080円、上ラム1,280円、ヒレ1,480円、ステーキ1,280円、骨付きラム100g 1,100円、焼き野菜550円、きのこ500円、ソーセージ3種720円、ポテトサラダ550円、コールスロー550円、スモーク大根とクリームチーズ700円、ピクルス480円、大根キムチ380円、きゅうり380円。口コミ (2025年1月〜2026年10月、英語): 臭みのないラム、甘めのたれ、にんにく、キーマカレー、桃のシャーベット。',
      confidence: 'medium', sources: [TB, MENU, R + 'B500096198/', R + 'B512393896/', R + 'B519991945/', R + 'B523829616/', R + 'B524870215/', R + 'B526654311/', R + 'B530379084/', R + 'B530416985/', R + 'B532599586/', R + 'B533186567/', R + 'B534774698/', R + 'B537951832/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; staff grill the meat at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区十文字町432-7-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated October 2025); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006136, 135.763773); cross-checked: GSI 京都府京都市中京区十文字町432番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Tabelog menu, updated 14 October 2025 (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lamb shoulder', '¥1,080', 'Lamb', 'ask', 'no', '', 'lamb'),
      it('', '', 'Top lamb (chuck eye roll)', '¥1,280', 'Lamb', 'ask', 'no', '', 'top_lamb'),
      it('', '', 'Lamb tenderloin', '¥1,480', 'Lamb', 'ask', 'no', '', 'tenderloin'),
      it('', '', 'Grilled vegetable set', '¥550', 'Grill', 'ask', 'ask', '', 'veg_set'),
      it('', '', 'Daikon kimchi', '¥380', 'Sides', 'ask', 'ask', '', 'daikon_kimchi'),
    ] }, {
    cuisine: 'スタッフがカウンターで焼くラムのジンギスカン (食べログ、2025〜2026年の口コミ)・ラム肩1,080円・上ラム (肩ロース) 1,280円・ヒレ1,480円・肩ロースのステーキ1,280円・スパイスの骨付きラムチョップ100g 1,100円・焼き野菜550円・きのこ500円・ソーセージ3種 (自家製ラム、豚、チョリソー) 720円・ラムのベーコンとチーズのポテトサラダ550円・コールスロー550円・スモーク大根とクリームチーズ700円・ピクルス480円・大根キムチ380円・やみつききゅうり380円 (食べログのメニュー、2025年10月)・ラムタン、中落ちカルビ、ラムの生ハム、締めのラムキーマカレー、桃半分の桃のシャーベット (2025〜2026年の口コミ)・ワンドリンクのコース (2026年10月)・ラムに合うワイン',
    neighborhood: '四条烏丸に近い十文字町。烏丸駅から徒歩6分',
    gf_detail: '要確認。ラムを野菜と焼き、少し甘くにんにくの効いたたれで食べる。ソーセージ、キーマカレー、サラダもあり、グルテンの情報は公開されていない (食べログのメニュー、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ラムのジンギスカンの店。ピクルス、大根キムチ、きゅうり、焼き野菜、きのこなど少しの野菜の皿は原材料が公開されていない (食べログのメニュー)。',
    notes: '[ジンギスカン・四条烏丸、カウンターで焼くラム] 京都の中心部では数少ないジンギスカンの店。スタッフがカウンターの鉄板で、もやしや玉ねぎと一緒に肩、肩ロース、ヒレ、ラムチョップを焼く。肉は1,080円ほどから。ラムの臭みがほとんどないと口コミで評判で、たれは少し甘くにんにくが効く。締めはラムのキーマカレー。ピクルス、キムチ、ラムベーコンのポテトサラダ、ラムに合うワインも。サービスが遅い、値段のわりに量が少ないという声も。火曜休み。',
  });
}

// ================================================================ 祇をん う桶や う
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001387/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yagenbori.co.jp/shop/u/'; const CO = 'https://www.yagenbori.co.jp/company/'; const GRP = 'https://www.yagenbori.co.jp/';
  const H = day(['11:30', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_gion_uokeya_u', name: '祇をん う桶や う (Gion Uokeya U)', category: 'OMNI',
    lat: 35.002097, lng: 135.774372, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kabayaki, the tub rice and rice bowls use the house tare, and the menu has rolled omelettes and liver soup; plain shirayaki (white-grilled eel) is also offered, but no gluten information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant — every main is eel, with eel-liver soup or red miso soup (official menu).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 17:00–20:00, Tuesday to Sunday; closed Monday, other closures posted on the website (Tabelog). The official site gives lunch from 11:30 (last order 14:00) and dinner from 17:00 (last order 20:00). Bookings by phone up to the end of the following month, in Japanese only (official site); the "u-oke" tub serves 3 people or more. No service charge (Tabelog’s Japanese original: なし). 24 seats: tatami rooms (16) and tables (4) on the 2nd floor and more on the 1st; non-smoking; cards, no e-money or QR (Tabelog). Take-away available (official site). Live eels swim in a tank by the door (April and July 2026). Down a lane west of Hanamikoji, south of Shijo; 5–7 min from Gion-Shijo Stn (official site; Tabelog). Opened 1991 (operator history: 平成3).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Hanamikoji, south of Shijo in Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Edo-style eel — split from the back, white-grilled over high heat, steamed, then grilled with the secret tare (official site) · 名代「う桶」, eel laid like a raft over rice in a cedar tub, with liver soup or red miso: small (3 people) ¥12,600, medium (4) ¥16,800, large (5) ¥21,000 · eel bowl matsu ¥5,250, take ¥4,200 (with liver soup) · kabayaki matsu ¥4,700, take ¥3,700 · shirayaki ¥3,700 · eel tataki ¥1,900 · uzaku ¥1,800 · yawata-maki ¥2,100 · liver yakitori ¥850 · eel skewers (salt or tare) ¥1,050 · umaki ¥1,800 · dashimaki ¥1,300 (official menu) · original cold sake 佳風-カーフ- 300 ml ¥1,850',
    website: SITE, gmaps: gm('祇をん う桶や う'), menu_url: SITE,
    notes: "[Eel · Gion, eel in a cedar tub] A Gion eel house down a lane west of Hanamikoji, with live eels by the door and tatami rooms upstairs. The house dish is the u-oke: Edo-style eel — steamed, then grilled with tare, soft and lightly sweet — laid like a raft across rice in a cedar tub for three to five people (¥12,600–21,000), so groups serve as much as each likes. Smaller parties take an eel bowl (from ¥4,200), umaki or the yawata-maki. The shop dug its own well for the water. Tabelog Unagi 'Tabelog 100' 2018, 2019 and 2022. Closed Monday; phone bookings in Japanese.",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社やげん堀グループ (representative 岡本 美科); chef not named'], origin: null,
      background: 'Per the operator site: the やげんぼり group began with the eel shop 花遊小路 江戸川 (founded 明治37 / 1904) and opened う桶や う as an eel specialist in 1991 (平成3); it now runs 6 Kyoto shops — 花見小路やげんぼり, 出逢ひ茶屋おせん, しぐれ茶屋侘助, 祇をん う桶や う, 花遊小路 江戸川 and 御二九と八さい はちべー; company sales ¥390 m. Per the shop page: when opening, the first job was digging a well by hand among the teahouses of Nishi-Hanamikoji, near Kenninji, to secure well water for river fish; Edo-style eel follows the saying "開き五年、串打ち八年、焼き一生"; slimmer eels are used for the tub, soft and light. Tabelog Unagi "Tabelog 100" 2018, 2019 and 2022 (Tabelog).',
      philosophy: 'Per the shop page: "ぎをんう桶や「う」の味、ここに極まります" — water first, then the long craft of Edo-style grilling.',
      specialty: 'U-oke (eel over rice in a cedar tub); yawata-maki; umaki.',
      anecdotes: [
        { text: 'An April 2026 visitor took the thing in the water outside for decoration until it turned out to be a live eel.', source: R + 'B528169206/' },
        { text: 'An August 2026 diner booked a month ahead for the tub of kabayaki and shirayaki, about ¥4,000 a head, in a 2nd-floor tatami room.', source: R + 'B535288102/' },
        { text: 'A February 2026 diner found the eel fluffy and the sauce light, preferring a stronger grill, and noted many foreign visitors.', source: R + 'B523771889/' },
      ],
      japanese_sources_summary: '公式サイト (yagenbori.co.jp): 祇をん う桶や う、祇園名物 江戸焼 う桶、「開き五年、串打ち八年、焼き一生」、活鰻を背から開き、背びれ・尾びれ・向骨を取り除き竹串で刺し強火で白焼、天然水で打ち清め蒸し、秘伝のタレで焼き上げる、井戸掘り (西花見小路、建仁寺のそば)、杉桶に筏に並ぶ江戸焼きうなぎ、細目の鰻、名代「う桶」大 (5人前) 21,000円・中 (4人前) 16,800円・小 (3人前) 12,600円 (肝吸いまたは赤だし付き、持ち帰り可)、鰻丼 松5,250円・竹4,200円、鰻蒲焼 松4,700円・竹3,700円、鰻白焼き3,700円、鰻のタタキ1,900円、うざく1,800円、八幡巻き2,100円、きも焼き850円、鰻串焼き1,050円、う巻1,800円、だし巻1,300円、冷酒 佳風-カーフ- 300ml 1,850円、東山区祇園西花見小路四条下ル、昼11:30〜 (L.O. 14:00)・夜17:00〜 (L.O. 20:00)、月曜定休、予約は翌月末分まで (日本語対応のみ)、祇園四条駅徒歩7分。会社概要: 株式会社やげん堀グループ、代表 岡本 美科、年商3億9千万円、平成3年 う桶や う 開業、明治37年 花遊小路 江戸川 創業。食べログ: うなぎ・日本料理、火〜日 11:30〜14:00・17:00〜20:00、月曜休み、サービス料なし、24席 (2階 座敷16・テーブル4、1階にも席)、禁煙、カード可、テイクアウト、うなぎ百名店 2018・2019・2022。',
      confidence: 'medium', sources: [TB, SITE, CO, GRP, R + 'B520097087/', R + 'B521517182/', R + 'B523686046/', R + 'B523771889/', R + 'B524954075/', R + 'B528169206/', R + 'B529155588/', R + 'B529356587/', R + 'B532729907/', R + 'B532861387/', R + 'B533112989/', R + 'B535288102/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone bookings in Japanese only (official site); the tub needs 3 or more.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園西花見小路四条下ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 notice) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002097, 135.774372); GSI matched only the town (京都府京都市東山区祇園町南側, 132m) — the address has no lot number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official menu (undated).', last_checked: TODAY, items: [
      it('名代「う桶」小', 'u-oke', 'Eel over rice in a cedar tub, for 3', '¥12,600', 'U-oke', 'ask', 'no', 'Medium (4) ¥16,800, large (5) ¥21,000.', 'u_oke'),
      it('鰻丼 竹', 'unagi-don', 'Eel rice bowl (take) with liver soup', '¥4,200', 'Eel', 'ask', 'no', 'Matsu ¥5,250.', 'unadon'),
      it('鰻白焼き', 'shirayaki', 'White-grilled eel', '¥3,700', 'Eel', 'ask', 'no', '', 'shirayaki'),
      it('八幡巻き', 'yawata-maki', 'Eel rolled round burdock', '¥2,100', 'Eel', 'ask', 'no', '', 'yawatamaki'),
      it('う巻', 'umaki', 'Eel rolled omelette', '¥1,800', 'Eel', 'ask', 'no', '', 'umaki'),
    ] }, {
    cuisine: '江戸焼のうなぎ。背から開き、強火で白焼にして蒸し、秘伝のタレで焼き上げる (公式サイト)・名代「う桶」、杉桶のご飯に筏のように並べた鰻、肝吸いか赤だし付き: 小 (3人前) 12,600円、中 (4人前) 16,800円、大 (5人前) 21,000円・鰻丼 松5,250円、竹4,200円 (肝吸い付)・鰻蒲焼 松4,700円、竹3,700円・鰻白焼き3,700円・鰻のタタキ1,900円・うざく1,800円・八幡巻き2,100円・きも焼き850円・鰻串焼き (塩・タレ) 1,050円・う巻1,800円・だし巻1,300円 (公式メニュー)・オリジナルの冷酒 佳風-カーフ- 300ml 1,850円',
    neighborhood: '祇園、四条の南の花見小路の西。祇園四条駅から徒歩5分',
    gf_detail: '要確認。蒲焼、う桶、鰻丼は秘伝のタレを使い、う巻や肝吸いもある。白焼きもあるが、グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。鰻の店で、主な料理はすべて鰻、肝吸いか赤だし付き (公式メニュー)。',
    notes: '[うなぎ・祇園、杉桶の鰻] 花見小路の西の路地にある祇園の鰻屋。入口には生きた鰻が泳ぎ、2階は座敷。名物は「う桶」: 蒸してからタレで焼く柔らかくやさしい甘さの江戸焼の鰻を、杉桶のご飯に筏のように並べ、3〜5人で取り分ける (12,600〜21,000円)。少人数なら鰻丼 (4,200円から)、う巻、八幡巻き。店の水は自分たちで掘った井戸から。食べログ うなぎ 百名店 2018・2019・2022。月曜休み、電話予約は日本語のみ。',
  });
}

// ================================================================ 三本木商店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032695/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sanbongi-shoten.com/';
  const W = day(['17:00', '23:00']); const S = day(['16:00', '21:00']);
  put({
    id: 'kyoto_sanbongi_shoten', name: '三本木商店 (Sanbongi Shoten)', category: 'OMNI',
    lat: 35.018417, lng: 135.770091, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meat and fish with a changing handwritten menu of small plates, some fried or with bread, soy or miso; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcoal-grilled game, pork, chicken, duck and fish at the centre; a few vegetable plates (grilled zucchini, mushroom salad) have no published ingredients (official site; 2026 reviews).',
    hours_raw: '17:00–23:00 Wednesday to Saturday (last order 22:00); 16:00–21:00 Sunday and holidays (last order 20:00); closed Monday and Tuesday; charcoal dishes stop an hour before last order; closed irregularly (Tabelog). The official site gives Monday as the regular closing day plus irregular closures, and asks guests to phone for hours. Bookings by phone only; the opening calendar is posted on Instagram and lines are busy (April 2026). A Saturday party of four was served the first two dishes, including a starter platter, before ordering (April 2026). An August 2026 reviewer says non-drinkers are not admitted. 19 seats: a 9-seat counter and one large shared table of 10; non-smoking; cards, no e-money or QR (official site; Tabelog). In a renovated Kyoto townhouse over 100 years old, in the former Sanbongi pleasure quarter between the Imperial Palace and the Kamo River; 3 min from Jingu-Marutamachi Stn exit 3 (official site). Opened 28 March 2019 (Tabelog).',
    hours: { 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanbongi by the Kamo River, Kamigyo — 3 min from Jingu-Marutamachi Stn',
    cuisine: 'Izakaya of binchotan charcoal grilling, natural wine and warm sake (official site) · game such as boar and venison, Shinshu pasture pork, Kawamata shamo and Kyoto duck grilled over binchotan (official site) · from the handwritten menu (2026 reviews): starter platters, tuna carpaccio or toro-taku tartare, sawara sashimi with garlic-chive soy, clams steamed with lemongrass, young ayu and basil spring rolls, sakura-shrimp and seaweed chijimi with Parmigiano, white asparagus with ham and onsen egg, charcoal-grilled duck, Miyama venison (about 220 g), Kuroge wagyu tongue (120 g), steak, pork-wrapped manganji peppers, grilled butter-soy rice balls · natural wines from the cellar, sake such as Aramasa',
    website: SITE, gmaps: gm('三本木商店 真町'), menu_url: SITE,
    notes: "[Izakaya · Sanbongi, charcoal and natural wine in an old townhouse] A hard-to-book izakaya in a century-old townhouse near the Kamo River, with a nine-seat counter and one big shared table. The idea is charcoal and drink: binchotan-grilled boar, venison, duck and pasture pork, plus a long handwritten list of inventive small plates — lemongrass clams, ayu-and-basil spring rolls, tuna tartare — with natural wine from the cellar and warm sake. Book by phone once the calendar is out on Instagram; an August 2026 reviewer says non-drinkers are not admitted. About ¥8,000–15,000 a head. Tabelog izakaya WEST 'Tabelog 100' 2026.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found; an October 2026 reviewer says the staff moved here from Tokyo'], origin: null,
      background: 'Per the official site: an izakaya built on charcoal grilling with wine and sake — vin nature that reflects the land without chemical help, sake mainly served warm — and ingredients raised with passion by the producers, grilled over binchotan; in a renovated Kyoto townhouse more than 100 years old in Sanbongi, once a lively pleasure quarter. Opened 28 March 2019 (Tabelog). Tabelog izakaya WEST "Tabelog 100" 2026 (Tabelog). An August 2026 reviewer says the place was started as a sophisticated bar for wine and sake with good food.',
      philosophy: 'Per the official site: wines that reflect the land of origin, sake served warm, and producers’ ingredients grilled over binchotan.',
      specialty: 'Binchotan-grilled game and duck; natural wine.',
      anecdotes: [
        { text: 'A friend of an April 2026 diner phoned about 50 times before getting through to book.', source: R + 'B525611821/' },
        { text: 'An April 2026 couple with small appetites were served two dishes before ordering on a Saturday, one of which the couple would not have chosen.', source: R + 'B531653675/' },
        { text: 'An October 2026 visitor finally got in after three years of hitting closing days.', source: R + 'B537584751/' },
      ],
      japanese_sources_summary: '公式サイト (sanbongi-shoten.com): 京都市、丸太町の居酒屋 三本木商店、炭火焼とワイン・日本酒がメインの居酒屋、化学の力に頼らず土地の個性を反映したヴァンナチュール、日本酒は燗酒を中心、猪や鹿などのジビエ、信州の放牧豚、川俣シャモ、京鴨を備長炭で焼く、京都御所と鴨川の間、かつて花街として賑わった三本木、築100年以上の京町家をリノベーション、カウンター9席と大テーブル1卓 (10席、相席)、上京区真町478、営業時間は店舗に問い合わせ、月曜定休 (その他不定休)、神宮丸太町駅3番出口より徒歩3分。食べログ: 居酒屋、水〜土 17:00〜23:00 (L.O. 22:00)、日・祝 16:00〜21:00 (L.O. 20:00)、月・火休み、炭火焼は L.O. の1時間前まで、19席、禁煙、カード可、2019年3月28日オープン、居酒屋 WEST 百名店 2026。口コミ (2026年4〜11月、英語): 電話予約のみ、Instagram で営業カレンダー、お酒を飲まない客は不可という声、手書きのメニュー。',
      confidence: 'medium', sources: [TB, SITE, R + 'B525611821/', R + 'B528840625/', R + 'B530604619/', R + 'B530932206/', R + 'B531653675/', R + 'B533600425/', R + 'B534741143/', R + 'B535164350/', R + 'B535369075/', R + 'B537584751/', R + 'B538206163/', R + 'B538489894/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only; shared big table; drinkers only, per an August 2026 reviewer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区真町478',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.018417, 135.770091); cross-checked: GSI 京都府京都市上京区真町478番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B537584751/', R + 'B538489894/'],
    price_note: 'No prices published; dishes from the official site and October–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled game (boar or venison)', '', 'Charcoal', 'ask', 'no', 'Varies with supply.', 'game'),
      it('', '', 'Local clams steamed with lemongrass', '', 'Small plates', 'ask', 'no', 'October 2026.', 'clams'),
      it('', '', 'Young ayu and basil spring rolls', '', 'Small plates', 'no', 'no', 'November 2026.', 'ayu_rolls'),
    ] }, {
    cuisine: '備長炭の炭火焼、ヴァンナチュール、燗酒の居酒屋 (公式サイト)・猪や鹿などのジビエ、信州の放牧豚、川俣シャモ、京鴨を備長炭で (公式サイト)・手書きのメニューから (2026年の口コミ): 前菜の盛り合わせ、鮪のカルパッチョやとろたくのタルタル、鰆の刺身のニラ醤油、レモングラスの蛤の酒蒸し、稚鮎とバジルの春巻き、桜海老と生海苔とパルミジャーノのチヂミ、ホワイトアスパラとハムと温泉卵、鴨の炭火焼き、Miyama の鹿 (約220g)、黒毛和牛のタン (120g)、ステーキ、万願寺の豚巻き、バター醤油の焼きおにぎり・セラーのヴァンナチュール、Aramasa などの日本酒',
    neighborhood: '鴨川沿いの三本木、上京区。神宮丸太町駅から徒歩3分',
    gf_detail: '要確認。肉や魚の炭火焼と、手書きで変わる小皿の料理。揚げ物やパン、醤油や味噌を使う皿もあり、グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ジビエ、豚、鶏、鴨、魚の炭火焼が中心。ズッキーニのグリルやきのこのサラダなど少しの野菜の皿は原材料が公開されていない (公式サイト、2026年の口コミ)。',
    notes: '[居酒屋・三本木、古い町家の炭火とヴァンナチュール] 鴨川に近い築100年以上の町家にある予約の取りにくい居酒屋。カウンター9席と大きな相席のテーブル1卓。炭火と酒が主役で、備長炭で焼く猪、鹿、鴨、放牧豚に、レモングラスの蛤、稚鮎とバジルの春巻き、鮪のタルタルなど工夫のある小皿が手書きのメニューにずらり。セラーのヴァンナチュールと燗酒で。予約は Instagram で営業カレンダーが出てから電話で。2026年8月の口コミでは、お酒を飲まない客は不可。予算は8,000〜15,000円ほど。食べログ 居酒屋 WEST 百名店 2026。',
  });
}

save();
