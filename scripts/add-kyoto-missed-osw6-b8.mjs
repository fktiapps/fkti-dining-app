// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 8.
//   + 黒兵衛 Kurobee (family-run takoyaki and okonomiyaki in an alley between Kiyamachi and Pontocho)
//   + 京都サムゲタン とっとり Kyoto Samgyetang Tottori (9-seat Korean counter in Gion's Donguri Kaikan)
//   + 京都宇治金時や Kyoto Uji Kintoki Ya (matcha kakigori, soft serve and kitsune udon on Gojo-zaka)
//   + 五山望 Gozan Nozomi (teppanyaki on the 15th floor of Hotel Granvia Kyoto; Steak WEST Tabelog 100 2025)
//   - skip 26034514 Anchor Kyoto: a sub-brand of a large parent (see skip() below)
//   Taken on 2026-11-05: `next core 200` gave 黒兵衛 26021860, Anchor Kyoto 26034514 (skipped), then とっとり 26038816;
//   `next notable 200` gave 宇治金時や 26036014 and 五山望 26001952.
//   None is in data/kyoto.json: grep by name (黒兵衛/Kurobee, サムゲタン/とっとり/Tottori, 宇治金時/Kintoki, 五山望/Gozan)
//   and address (下樵木町205, 六軒町206/どんぐり会館, 白糸町569, グランヴィア) found none. Neighbours: kyoto_pontocho_fujiwara
//   (address_ja "…下樵木町204-7") is 13 m and kyoto_pontocho_tabakoya ("…下樵木町202-3") 10 m from Kurobee.
//   Greg's 2026-11-05 rulings: Anchor skipped as a sub-brand; none of the others asks diners not to post it. 五山望 is
//   the hotel's own restaurant, not a multi-hotel brand. No remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034514', 'sub-brand of a large parent (Greg, 2026-11-05): "Anchor" is the restaurant brand of THE GATE HOTEL by HULIC (Hulic Hotel Management; 8 hotels listed in its May 2026 PR TIMES release) — Anchor Tokyo (THE GATE HOTEL 東京, Hitosara), Anchor Kyoto and Anchor Osaka (opened June 2026, PR TIMES 2026-05-15).');

// ================================================================ 黒兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021860/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kurobee', name: '黒兵衛 (Kurobee)', category: 'OMNI',
    lat: 35.005685, lng: 135.770852, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki, okonomiyaki and yakisoba are wheat-batter or wheat-noodle dishes with sauce (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: takoyaki with octopus and dashi batter, okonomiyaki with bonito flakes, squid butter and beef tendon (2025–26 reviews).',
    hours_raw: '17:00–24:00 daily per Tabelog; a January 2025 reviewer was told it opens every day of the year from 15:00 until after 23:00, New Year’s Day included — check before going. Reservations taken (Tabelog). No service charge (Tabelog). Smoking allowed (Tabelog; January 2025). 18 seats: 6 at the counter and three low tatami tables, not sunken (Tabelog; 2025–26 reviews). Cards (JCB, AMEX, Diners) (Tabelog). Down an alley between Kiyamachi and Pontocho north of Shijo, hard to find; 259 m from Gion-Shijo Stn (Tabelog; 2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley between Kiyamachi and Pontocho, north of Shijo — 4 min from Gion-Shijo Stn',
    cuisine: 'Old-style takoyaki and teppan shop (2025–26 reviews) · make-your-own takoyaki on a tabletop plate, 18 pieces, with staff showing first-timers how; soft, dashi-rich takoyaki in the street-stall style · okonomiyaki, yakisoba, a "modern" mixed platter that adds yakisoba noodles · squid butter, beef tendon with ponzu, homemade dashimaki · bottled beer, strong highballs and chuhai, shochu with hot water, nigori umeshu (2025–26 reviews)',
    website: null, gmaps: gm('黒兵衛 木屋町 たこ焼'), menu_url: null,
    notes: "[Takoyaki · Kiyamachi, a family shop down an alley] A small Showa-feeling takoyaki and okonomiyaki shop down an alley between Kiyamachi and Pontocho, with a counter and three low tatami tables. You can grill your own takoyaki at the table — staff show first-timers when to turn the heat on — or let the kitchen make soft, dashi-rich ones, then add okonomiyaki, yakisoba and squid butter with a strong highball. Cheap for the area. Smoking allowed. Open daily into the night.",
    chef_bio: { chef_name: null, roles: ['Family-run (no names in the sources)'], origin: null,
      background: 'Reviewers in 2026 describe the shop as run by an elderly couple (February and September 2026); a January 2025 reviewer described it as run by a mother and son, with old photos on the counter, and estimated that about 80% of customers were from overseas, with large groups arriving around 21:00.',
      philosophy: null, specialty: 'Takoyaki; okonomiyaki; squid butter.',
      anecdotes: [
        { text: '"Since it was my first time, they kindly taught me when to switch on the heat and the order of preparation." — November 2025.', source: R + 'B516981913/' },
        { text: '"It’s run by a lovely elderly couple, and despite that, the speed of service for food and drinks is quite good." — September 2026.', source: R + 'B536540175/' },
        { text: 'A February 2026 visitor found the low tatami seating, not a sunken kotatsu, hard on the legs.', source: R + 'B522165606/' },
      ],
      japanese_sources_summary: '食べログ: たこ焼き、中京区木屋町四条上ル下樵木町205、祇園四条駅から259m、毎日17:00〜24:00、予約可、サービス料なし、18席 (カウンター6、座敷4名×3卓)、喫煙可、カード (JCB・AMEX・Diners) 可。口コミ (2025〜2026年、英語): 木屋町と先斗町の間の路地、年配の夫婦が営む (2026年)、母と息子が営むという2025年1月の口コミ、毎日15時から23時過ぎまで営業との記述、自分で焼くたこ焼き18個、お好み焼き、焼きそば、いかバター、牛すじポン酢、だし巻き、濃いハイボール、安い。',
      confidence: 'medium', sources: [TB, R + 'B140522702/', R + 'B481152852/', R + 'B500165320/', R + 'B500646578/', R + 'B511340727/', R + 'B516981913/', R + 'B522165606/', R + 'B522274898/', R + 'B533803484/', R + 'B536000475/', R + 'B536540175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff show you how to grill takoyaki; shoes off for the tatami; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町四条上ル下樵木町205',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005685, 135.770852); cross-checked: GSI 京都府京都市中京区下樵木町205番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516981913/', R + 'B533803484/'],
    price_note: 'No prices read; bills of about ¥1,000–3,000 a head in 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Make-your-own takoyaki (18 pieces)', '', 'Teppan', 'no', 'no', 'November 2025.', 'takoyaki_diy'),
      it('', '', 'Okonomiyaki', '', 'Teppan', 'no', 'no', '2026.', 'okonomiyaki'),
      it('', '', 'Yakisoba', '', 'Teppan', 'no', 'no', '2026.', 'yakisoba'),
      it('', '', 'Squid butter', '', 'Small dishes', 'ask', 'no', 'August–September 2026.', 'ika_butter'),
    ] }, {
    cuisine: '昔ながらのたこ焼きと鉄板の店 (2025〜2026年の口コミ)・テーブルで自分で焼くたこ焼き18個、初めてなら店の人が焼き方を教えてくれる。屋台風のやわらかく出汁のきいたたこ焼き・お好み焼き、焼きそば、焼きそば入りの「モダン」のミックス・いかバター、牛すじポン酢、自家製のだし巻き・瓶ビール、濃いめのハイボールと酎ハイ、焼酎のお湯割り、にごり梅酒 (2025〜2026年の口コミ)',
    neighborhood: '四条の北、木屋町と先斗町の間の路地。祇園四条駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。たこ焼き、お好み焼き、焼きそばは小麦の生地や麺とソースの料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。たこと出汁の生地のたこ焼き、かつお節のお好み焼き、いかバター、牛すじ (2025〜2026年の口コミ)。',
    notes: '[たこ焼き・木屋町、路地の家族の店] 木屋町と先斗町の間の路地にある、昭和の空気の小さなたこ焼きとお好み焼きの店。カウンターと低い座敷のテーブル3卓。たこ焼きはテーブルで自分で焼け、初めてなら火を入れるタイミングを教えてくれる。店が焼く出汁のきいたやわらかいたこ焼きに、お好み焼き、焼きそば、いかバターを濃いハイボールと。このあたりでは安い。喫煙可。毎日夜遅くまで。',
  });
}

// ================================================================ 京都サムゲタン とっとり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038816/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_samgyetang_tottori', name: '京都サムゲタン とっとり (Kyoto Samgyetang Tottori)', category: 'OMNI',
    lat: 35.002014, lng: 135.771996, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soy-marinated crab and shrimp, chijimi pancakes, spring rolls, japchae and samgyetang with seasonings added at the table; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken samgyetang, marinated crab and shrimp, pork and beef dishes (Tabelog; 2025–26 reviews).',
    hours_raw: '17:00–22:00 (last order 21:00) daily; closing days may vary (Tabelog). Book ahead — a 9-seat counter that fills up; one reviewer booked a month ahead by Instagram (December 2025). Soy-marinated crab (ganjang gejang) must be reserved in advance (April and July 2026). Parties of 7 or more: an omakase course from ¥12,000 with free-flow drinks after 18:00; cancel by phone or a fee is charged (Tabelog). A February 2026 reviewer found dinner was a set omakase starting at 19:00; the shop says it switched from courses to à la carte in April (Tabelog). The menu board shows no prices (August 2026). Free-flow drinks ¥2,000 (July 2026). Heated tobacco only; cash only (Tabelog). 2nd floor of the Donguri Kaikan (どんぐり会館) in Gion, shared toilet; 1 min from Exit 1 of Gion-Shijo Stn (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo near the Kamo River — 1 min from Gion-Shijo Stn',
    cuisine: 'Samgyetang and creative Korean cooking by a former fishmonger (Tabelog, shop text) · samgyetang to finish, white (classic) or black, with garlic, seaweed, spice and vinegar to change the flavour (2025–26 reviews) · ganjang gejang (soy-marinated crab, reserve ahead) with rice in the shell, ganjang saeu (soy-marinated shrimp), kegani in season with uni and ikura (2025–26 reviews) · an appetizer plate of several small dishes, yukhoe bruschetta, steamed pork, cheese chijimi, spring rolls of crab cream or cod milt, firefly-squid japchae, grilled liver (2025–26 reviews) · makgeolli (white and pink), free-flow drinks ¥2,000 (July 2026)',
    website: null, gmaps: gm('京都サムゲタン とっとり 祇園'), menu_url: null,
    notes: "[Korean · Gion, samgyetang at a 9-seat counter] A retro-modern 9-seat counter upstairs in Gion's Donguri Kaikan, where a former fishmonger cooks samgyetang and seafood-led Korean dishes. Reserve the soy-marinated crab ahead and eat it with rice in the shell; then try the steamed pork or a cod-milt spring roll, and finish with samgyetang, white or black, seasoned your way. Free-flow drinks are ¥2,000 and makgeolli is the house pour. The board has no prices, but reviewers call the bill fair. Book early; cash only.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, a former fishmonger (Tabelog, shop text; unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): claims to be the best in Kyoto for samgyetang and creative Korean cooking; the owner-chef was formerly a fishmonger; the shop used to serve set courses only and switched to à la carte in April. Reviewers describe the owner as kind, explaining how to eat each dish and offering to reduce portions when diners are full (April 2026); a February 2026 reviewer found the room full of regulars.',
      philosophy: null, specialty: 'Samgyetang; ganjang gejang.',
      anecdotes: [
        { text: '"The owner even suggested that I could reduce the portions if I was feeling full" — April 2026.', source: R + 'B525759838/' },
        { text: '"The menu varies each time, and there are no posted prices on the board, so keep that in mind if you’re curious." — August 2026.', source: R + 'B534758334/' },
        { text: 'A December 2025 diner booked a month ahead by Instagram and requested the soy-marinated crab when booking.', source: R + 'B520065663/' },
      ],
      japanese_sources_summary: '食べログ: 韓国料理、東山区六軒町206-1 どんぐり会館 2F、祇園四条駅1番出口から徒歩約1分、毎日17:00〜22:00 (L.O. 21:00)、不定休、予約可 (7名以上は18時以降のおまかせコース12,000円〜飲み放題付き、キャンセルは電話で、キャンセル料あり)、カウンター9席、加熱式たばこのみ、カード・電子マネー・QR 不可、京都一のサムゲタンと創作韓国料理、元魚屋の店主、4月からアラカルトに。口コミ (2025年12月〜2026年10月、英語): カンジャンケジャン (要予約)、カンジャンセウ、毛蟹、白と黒のサムゲタン、前菜の盛り合わせ、ユッケのブルスケッタ、蒸し豚、チーズチヂミ、春巻き、マッコリ、飲み放題2,000円、値段のない黒板、カウンターのみ、要予約。',
      confidence: 'medium', sources: [TB, R + 'B501689671/', R + 'B519387967/', R + 'B520065663/', R + 'B523771374/', R + 'B525759838/', R + 'B526402435/', R + 'B526709404/', R + 'B529687378/', R + 'B531401432/', R + 'B531701211/', R + 'B534647164/', R + 'B534758334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Instagram or phone); reserve the crab; the owner explains how to eat each dish; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区六軒町206-1 どんぐり会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002014, 135.771996); cross-checked: GSI 京都府京都市東山区六軒町206番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531701211/'],
    price_note: 'The menu board shows no prices; free-flow drinks ¥2,000 (July 2026); bills of about ¥6,000–10,000 a head in 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Samgyetang (white or black)', '', 'Soup', 'ask', 'no', '2025–26.', 'samgyetang'),
      it('', '', 'Ganjang gejang (soy-marinated crab, reserve ahead)', '', 'Seafood', 'ask', 'no', '2025–26.', 'ganjang_gejang'),
      it('', '', 'Steamed pork', '', 'Dishes', 'ask', 'no', 'April–July 2026.', 'steamed_pork'),
      it('', '', 'Free-flow drinks', '¥2,000', 'Drinks', '', '', 'July 2026.', 'nomihodai'),
      it('', '', 'Omakase course with free-flow drinks (7 or more, after 18:00)', 'from ¥12,000', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_group'),
    ] }, {
    cuisine: '元魚屋の店主のサムゲタンと創作韓国料理 (食べログの店の紹介)・締めのサムゲタンは白 (定番) か黒。にんにく、海苔、辛味、酢で味を変える (2025〜2026年の口コミ)・カンジャンケジャン (要予約、甲羅にご飯)、カンジャンセウ、季節の毛蟹に雲丹といくら (2025〜2026年の口コミ)・数種の前菜の盛り合わせ、ユッケのブルスケッタ、蒸し豚、チーズチヂミ、蟹クリームや白子の春巻き、ホタルイカのチャプチェ、レバー焼き (2025〜2026年の口コミ)・マッコリ (白とピンク)、飲み放題2,000円 (2026年7月)',
    neighborhood: '祇園、四条の南の鴨川寄り。祇園四条駅から徒歩1分',
    gf_detail: '要確認。醤油漬けの蟹や海老、チヂミ、春巻き、チャプチェ、テーブルで味を足すサムゲタン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏のサムゲタン、漬けた蟹と海老、豚や牛の料理 (食べログ、2025〜2026年の口コミ)。',
    notes: '[韓国料理・祇園、9席のカウンターのサムゲタン] 祇園のどんぐり会館の2階、レトロモダンな9席のカウンター。元魚屋の店主がサムゲタンと魚介の韓国料理を作る。カンジャンケジャンは予約して、甲羅にご飯を入れて食べる。蒸し豚や白子の春巻きのあと、白か黒のサムゲタンを好みの味で締める。飲み放題は2,000円、マッコリが店のおすすめ。黒板に値段はないが、会計は手ごろという口コミ。早めの予約を。現金のみ。',
  });
}

// ================================================================ 京都宇治金時や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036014/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '21:30']);
  put({
    id: 'kyoto_uji_kintoki_ya', name: '京都宇治金時や (Kyoto Uji Kintoki Ya)', category: 'OMNI',
    lat: 34.994770, lng: 135.777498, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kakigori, matcha soft serve and red beans may be wheat-free, but the udon, tempura and fried tofu are not; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha kakigori without milk and red beans may suit, but the soft serve and milk ice are dairy, and the udon broth is likely dashi (2026 reviews).',
    hours_raw: '10:00–21:30 daily; hours may change irregularly (Tabelog). No reservations (Tabelog). Takeaway soft serve from the front; seats inside and on the 2nd floor, with a courtyard view; a May 2026 reviewer notes ¥200 extra to sit inside in the air conditioning. 12 seats; smoking allowed (Tabelog). Cards (VISA, Master), IC cards and iD (Tabelog); PayPay used in June 2026. On Gojo-zaka toward Kiyomizu-dera, near the Higashiyama-Gojo crossing; 12 min from Kiyomizu-Gojo Stn, 6 min from Kiyomizu-dera (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-zaka toward Kiyomizu-dera — 12 min from Kiyomizu-Gojo Stn',
    cuisine: 'Matcha kakigori, soft serve and udon (Tabelog; 2026 reviews) · Uji Kintoki kakigori with red beans ¥1,200 (September 2026); Uji matcha kakigori with shiratama; "special milk" Uji matcha; milk-free matcha with little sweetness (2026 reviews) · hojicha soft serve ¥700 (March 2026), matcha soft serve ¥800 (September 2026), matcha ice cream ¥700 (June 2026) · jumbo kitsune udon with homemade fried tofu ¥1,200–1,300 (September 2026, two reviews), wagyu udon with beef from Ginza Yoshizawa and udon from Kochi (May 2026), tempura udon, cold broth on hot days · warm hojicha with kakigori',
    website: null, gmaps: gm('京都宇治金時や 五条坂'), menu_url: null,
    notes: "[Kakigori & udon · Gojo-zaka, matcha on the way to Kiyomizu] A small shop on Gojo-zaka on the walk up to Kiyomizu-dera: grab a matcha or hojicha soft serve at the front (¥700–800), or sit upstairs over the courtyard for a fluffy Uji Kintoki kakigori (¥1,200) with warm hojicha. The owner talks matcha with real passion. It also serves udon — a jumbo kitsune with homemade fried tofu, or wagyu udon — which surprises dessert hunters. One reviewer noted a ¥200 charge to sit in the air-conditioned room. Open daily 10:00–21:30.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Reviewers in 2026 describe an owner who talks passionately about matcha and fluffy kakigori (September and October 2026), sources udon from Kochi and beef from Ginza Yoshizawa (May 2026), and served a hot-day customer cold broth, fresh water and ice to take away (July 2026). Tabelog Sweets WEST "Tabelog 100" 2022, 2023, 2026.',
      philosophy: null, specialty: 'Uji Kintoki kakigori; matcha soft serve; kitsune udon.',
      anecdotes: [
        { text: '"For an additional JPY 200, you can enjoy air conditioning inside." — May 2026.', source: R + 'B527367494/' },
        { text: '"They also provided me with freshly prepared cold water, and as I was leaving, they even gave me some ice to take with me." — July 2026.', source: R + 'B531999050/' },
        { text: 'A September 2026 visitor found the ice softer but less fluffy than hoped after the owner’s build-up, and the milk-free matcha barely sweet.', source: R + 'B535127431/' },
        { text: 'A September 2026 diner found the ¥1,300 jumbo kitsune udon pricey and the thick noodles a little undercooked.', source: R + 'B536089291/' },
      ],
      japanese_sources_summary: '食べログ: かき氷・ソフトクリーム・うどん、東山区白糸町569-10、清水五条駅から徒歩12分、清水寺から6分、毎日10:00〜21:30 (不定期に変更あり)、予約不可、12席、喫煙可、カード (VISA・Master)・交通系IC・iD 可、スイーツ WEST 百名店 2022・2023・2026。口コミ (2026年3〜10月、英語): 五条坂、宇治金時のかき氷1,200円、抹茶のかき氷と白玉、ほうじ茶ソフト700円、抹茶ソフト800円、抹茶アイス700円、ジャンボきつねうどん1,200〜1,300円、和牛うどん (Kochi のうどん、Ginza Yoshizawa の牛肉)、2階の席と中庭、店内の冷房は200円追加との記述、抹茶に情熱を持つ店主。',
      confidence: 'medium', sources: [TB, R + 'B524920731/', R + 'B527367494/', R + 'B528215135/', R + 'B529422971/', R + 'B530571935/', R + 'B531999050/', R + 'B535127431/', R + 'B535976830/', R + 'B536089291/', R + 'B538249453/', R + 'B538407649/', R + 'B538618600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order soft serve at the front or sit inside; cards and IC cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区白糸町569-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.994770, 135.777498); cross-checked: GSI 京都府京都市東山区白糸町569番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538618600/', R + 'B524920731/', R + 'B535976830/'],
    price_note: 'Prices from March–September 2026 reviews, dated per item; the jumbo kitsune udon was ¥1,200 in one September 2026 review and ¥1,300 in another.', last_checked: TODAY, items: [
      it('', '', 'Uji Kintoki kakigori', '¥1,200', 'Kakigori', 'ask', 'ask', 'September 2026.', 'uji_kintoki'),
      it('', '', 'Hojicha soft serve', '¥700', 'Soft serve', 'ask', 'no', 'March 2026.', 'hojicha_soft'),
      it('', '', 'Matcha soft serve', '¥800', 'Soft serve', 'ask', 'no', 'September 2026.', 'matcha_soft'),
      it('', '', 'Jumbo kitsune udon', '¥1,200–1,300', 'Udon', 'no', 'no', 'September 2026.', 'jumbo_kitsune'),
    ] }, {
    cuisine: '抹茶のかき氷、ソフトクリーム、うどん (食べログ、2026年の口コミ)・宇治金時のかき氷1,200円 (2026年9月)、白玉の Uji の抹茶のかき氷、特製ミルクの Uji の抹茶、甘さ控えめのミルクなしの抹茶 (2026年の口コミ)・ほうじ茶ソフト700円 (2026年3月)、抹茶ソフト800円 (2026年9月)、抹茶アイス700円 (2026年6月)・自家製の揚げのジャンボきつねうどん1,200〜1,300円 (2026年9月、2つの口コミ)、Ginza Yoshizawa の牛肉と Kochi のうどんの和牛うどん (2026年5月)、天ぷらうどん、暑い日は冷たい出汁・かき氷には温かいほうじ茶',
    neighborhood: '清水寺へ向かう五条坂。清水五条駅から徒歩12分',
    gf_detail: '要確認。かき氷、抹茶ソフト、小豆は小麦なしかもしれないが、うどん、天ぷら、揚げは小麦を使う。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ミルクなしの抹茶のかき氷と小豆は合うかもしれないが、ソフトクリームとミルクの氷は乳製品で、うどんの出汁はおそらく魚介 (2026年の口コミ)。',
    notes: '[かき氷とうどん・五条坂、清水寺への道の抹茶] 清水寺へ上る五条坂の小さな店。店先で抹茶やほうじ茶のソフト (700〜800円) を買うか、2階で中庭を眺めながらふわふわの宇治金時のかき氷 (1,200円) を温かいほうじ茶と。店主は抹茶について熱く語る。自家製の揚げのジャンボきつねうどんや和牛うどんもあり、甘味目当ての客を驚かせる。冷房の効いた店内は200円追加という口コミも。毎日10時〜21時30分。',
  });
}

// ================================================================ 五山望
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001952/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gozan_nozomi', name: '五山望 (Gozan Nozomi)', category: 'OMNI',
    lat: 34.985843, lng: 135.758805, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, and tell the restaurant in advance: it asks guests allergic to any of eight allergens, wheat included, to say so beforehand and will do its best for others (Tabelog). The courses include a monaka-shell starter, soy-based and miso sauces and garlic rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppanyaki courses of wagyu, lobster, abalone and scallops (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:30 (last order 14:30), dinner 17:30–22:00 (last order 21:00); open every day (Tabelog). Book online; for three or more guests a phone confirmation is needed (August 2026). 15% service charge (Tabelog). 26 seats, mostly at teppan counters facing Kyoto Tower; dessert may be served at a window table (2026 reviews). Non-smoking; cards, IC cards, e-money and QR payments including Alipay and WeChat Pay (Tabelog). 15th floor of Hotel Granvia Kyoto, directly connected to the central exit of JR Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, 15th floor of Hotel Granvia Kyoto',
    cuisine: 'Teppanyaki at counters facing Kyoto Tower, using Kyoto vegetables in the starters and sauces (2026 reviews) · lunch "Torii" course (most popular): appetizer such as wagyu rillettes in a rice-flour monaka or a beef "macaron", soup, lobster and scallops, domestic beef fillet 70 g with salt, wasabi, ponzu, garlic chips and red miso, grilled vegetables, sautéed thick tofu, garlic rice or rice with red miso soup and pickles, dessert, coffee (July–October 2026) · dinner: chef’s course with special black wagyu fillet and live lobster; a September 2026 course comparing Omi beef fillet and ribeye with matsutake and chicken kamameshi; abalone with Uji matcha sauce · lunch from over ¥10,000 (August 2026)',
    website: null, gmaps: gm('五山望 ホテルグランヴィア京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · Kyoto Station, wagyu with a view of Kyoto Tower] The teppanyaki restaurant on the 15th floor of Hotel Granvia Kyoto, straight off the JR Kyoto Station concourse, where chefs grill lobster, scallops and wagyu fillet in front of you with Kyoto Tower filling the windows. The popular Torii lunch course runs from starters to garlic rice; dinner courses bring black wagyu, live lobster and, in autumn, Omi beef and matsutake. Lunch starts above ¥10,000, plus 15% service. Tell them about allergies in advance. Open daily.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; no chef named in the sources'], origin: null,
      background: 'The teppanyaki restaurant of Hotel Granvia Kyoto (Tabelog). Reviewers in 2026 note starters that change monthly, a choice of soup, grilled vegetables and doneness, chefs who chat across the teppan, the day’s meat shown at the start (Ibaraki beef in September 2026), and a view of Kyoto Tower and the distant Mt Hiei. Tabelog Steak/Teppanyaki WEST "Tabelog 100" 2024, 2025.',
      philosophy: null, specialty: 'Wagyu fillet and lobster teppanyaki; garlic rice.',
      anecdotes: [
        { text: '"The appetizers change monthly, and you can choose the soup, grilled vegetables, and the doneness of the meat" — June 2026.', source: R + 'B530730737/' },
        { text: '"First, I was shown the ingredients of the day. The meat is sourced from Ibaraki Prefecture, and the origin changes daily." — September 2026.', source: R + 'B534846143/' },
        { text: 'An October 2026 weekend dinner guest had to wait in front of the restaurant until the booked time.', source: R + 'B537227586/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼き・ステーキ、下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 15F、JR京都駅直結、11:30〜15:30 (L.O. 14:30)・17:30〜22:00 (L.O. 21:00)、年中無休、予約可 (特定原材料8品目のアレルギーは事前に連絡、ほかのアレルギーもできる限り対応)、サービス料15％、26席、禁煙、カード・電子マネー・QR 可、ステーキ・鉄板焼き WEST 百名店 2024・2025。口コミ (2026年6〜10月、英語): 京都タワーの眺め、ランチの「Torii」コース (伊勢海老とホタテ、国産牛フィレ70g、ガーリックライス)、黒毛和牛フィレと活伊勢海老のディナー、Omi の牛のフィレとリブロースの食べ比べ、松茸と地鶏の釜飯、Uji の抹茶のソースの鮑、ランチは1万円超、3名以上は電話で確認。',
      confidence: 'medium', sources: [TB, R + 'B403000119/', R + 'B471894106/', R + 'B530730737/', R + 'B531634993/', R + 'B532271866/', R + 'B533216582/', R + 'B533227655/', R + 'B534565285/', R + 'B534846143/', R + 'B535688750/', R + 'B536715036/', R + 'B537227586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online (phone for 3 or more); chefs explain at the teppan; cards and QR payments.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks guests allergic to any of the eight specified allergens (egg, milk, wheat, buckwheat, peanut, shrimp, crab, walnut) to tell it in advance, and says it will do its best for other allergens.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 15F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Steak/Teppanyaki WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.985843, 135.758775), moved ~3 m east to 135.758805 because ChIJq_Gt7mUJAWARdOvjkos8A7s (UNO RAMEN – Kyoto Station, 34.985858, 135.758736) sat 3.9 m from that point; the listed address has no lot number, so GSI could not cross-check it (GSI only this round, no OSM); the point is in the Kyoto Station building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B403000119/', R + 'B533227655/'],
    price_note: 'No course prices read; lunch above ¥10,000 per an August 2026 review; plus 15% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Torii lunch course (lobster, scallops, beef fillet 70 g, garlic rice)', 'over ¥10,000', 'Course', 'ask', 'no', 'July–October 2026.', 'torii_course'),
      it('', '', 'Chef’s course with special black wagyu fillet and live lobster', '', 'Course', 'ask', 'no', 'July–August 2026.', 'chef_course'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'no', '2026.', 'garlic_rice'),
    ] }, {
    cuisine: '京都タワーを望むカウンターの鉄板焼き。前菜やソースに京野菜 (2026年の口コミ)・ランチの「Torii」コース (一番人気): 米粉のもなかに和牛のリエットや牛肉の「マカロン」などの前菜、スープ、伊勢海老とホタテ、塩・わさび・ポン酢・ガーリックチップ・赤味噌で食べる国産牛フィレ70g、焼き野菜、厚揚げのソテー、ガーリックライスかご飯と赤だしと香の物、デザート、コーヒー (2026年7〜10月)・夜: 特選黒毛和牛フィレと活伊勢海老のシェフのコース、2026年9月のOmi の牛のフィレとリブロースの食べ比べと松茸と地鶏の釜飯、Uji の抹茶のソースの鮑・ランチは1万円超 (2026年8月)',
    neighborhood: '京都駅、ホテルグランヴィア京都 15F',
    gf_detail: '要確認。事前に伝えること。小麦を含む特定原材料8品目のアレルギーは事前に知らせるよう店は案内し、ほかもできる限り対応するという (食べログ)。コースにはもなかの前菜、醤油や味噌のたれ、ガーリックライスがある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、伊勢海老、鮑、ホタテの鉄板焼きのコース (2026年の口コミ)。',
    notes: '[鉄板焼き・京都駅、京都タワーを眺める和牛] JR京都駅のコンコースからすぐ、ホテルグランヴィア京都15階の鉄板焼き。窓いっぱいの京都タワーを前に、目の前で伊勢海老、ホタテ、和牛フィレを焼く。人気のランチ「Torii」コースは前菜からガーリックライスまで。夜は黒毛和牛、活伊勢海老、秋は Omi の牛と松茸も。ランチは1万円超、サービス料15％。アレルギーは事前に。毎日営業。',
  });
}

save();
