// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 90.
//   + チャクラ Chakra (Bengali Indian curry house on Gojo-zaka by Otani Hombyo, since 2012)
//   + 洋食居酒屋 パリホンポ Yoshoku Izakaya Paris Honpo (12-seat counter in a machiya just off Sanjo-dori, since 2003)
//   - やよい軒 四条烏丸店, 柳桜園茶舗: skipped (reasons below).
//   + お好み焼 きらく 清水五条坂店 Okonomiyaki Kiraku (okonomiyaki and teppan izakaya on Higashioji north of Gojo, since 2007)
//   - 餅寅, モリー: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26021450, 26011748 (skipped), 26034884,
//   26007344 (skipped), 26017976 (skipped),
//   26028752 (skipped), 26010644. Next in lane: 26032610 町家猫喫茶 うたねこ堂 (fetched), 26023778 京都つぶら乃.
//   queue-status.jsonl grepped for each brand (チャクラ, やよい軒, パリホンポ, 柳桜園, 餅寅, モリー, きらく, 株式会社WILL /
//   will-food.com):
//   やよい軒 has earlier rulings (26011746, 26002611); 株式会社WILL is a large parent (26043489; coordinator 2026-11-08).
//   Data check (current main, hidden included): neither チャクラ nor パリホンポ is in data/kyoto.json by Tabelog id, name or
//   address; the hidden ORTO record is 23 m from パリホンポ.
//   Same-name count: チャクラ, パリホンポ — one shop each, operators unknown. お好み焼 きらく — a Tabelog name search shows
//   one other “Okonomiyaki Kiraku” (near Higashiyama station); no operator found; the 焼肉きらく chain (26041041) and the
//   きらく records in data are different businesses — drafted as a two-shop name, flagged. Not in data by id or address.
//   Retail ruling (Greg 2026-11-07) for 柳桜園茶舗: a tea merchant founded in 1875 (Serai), but no source on family ownership
//   or succession was read, and no GF or vegan options are sourced — skipped.
//   Service charges, checked against the Japanese original: none listed for チャクラ or パリホンポ.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26011748', 'やよい軒 四条烏丸店: chain — やよい軒, the national set-meal chain (same ruling as 26011746)');
skip('26007344', 'retail food shop (Greg 11-07 ruling): 柳桜園茶舗 is a tea-leaf shop (founded 1875 per Serai) with no sourced family ownership or succession and no GF or vegan options sourced');
skip('26017976', 'retail food shop (Greg 11-07 ruling): 餅寅 is a take-away town wagashi shop (¥200 manju and mochi); a July 2026 reviewer says it tends the Akechi Mitsuhide burial mound, but no founding date or family succession is sourced and no GF or vegan options are sourced');
skip('26028752', 'モリー: no reviews dated 2025–2026 (one review, February 2017)');

// ================================================================ チャクラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021450/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_chakra_gojozaka', name: 'チャクラ (Chakra)', category: 'OMNI',
    lat: 34.995139, lng: 135.776275, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries come with naan; samosa and fried dishes; biryani is on the menu; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but nothing is described as vegan; ask about ghee and dairy (Tabelog).',
    hours_raw: '11:00–22:00 daily (last orders 21:00): lunch to about 15:00, café time 15:00–17:00, dinner 17:00–22:00; open all year (Tabelog). À la carte only — the set lunch was dropped (May 2025). Cards; no e-money (Tabelog). 27 seats incl. a semi-private area for 8 (Tabelog). Non-smoking (Tabelog). Facing Gojo-zaka at the entrance to Otani Hombyo (June 2025). Open since 27 January 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-zaka — at the entrance to Otani Hombyo',
    cuisine: 'Bengali Indian cooking, rare in Kyoto (June 2025) · Bengali fish curry; samosa (June 2025) · chicken, fish and lamb curries; fried potatoes; a regional dessert (February 2026) · curry, crisp naan and biryani à la carte (May 2025) · plain round naan ¥400 (Tabelog menu) · vegetarian options (Tabelog)',
    website: null, gmaps: gm('チャクラ 五条坂'), menu_url: TB + 'dtlmenu/',
    notes: '[Indian · Gojo-zaka, Bengali curry] A small Indian restaurant on the slope up to Kiyomizu, cooking the Bengali dishes rarely found in Kyoto: fish curry, samosa, chicken and lamb curries, naan and biryani, with a regional dessert to finish. Kind, welcoming owner; open every day from 11:00 to 22:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Open since January 2012 (Tabelog). Reviewers describe a friendly owner who helps with the menu (May 2025; February 2026); the set lunch was dropped in favour of à la carte as overseas guests grew (May 2025). No operator was found.',
      philosophy: null, specialty: 'Bengali fish curry.',
      anecdotes: [
        { text: 'A February 2026 group shared chicken, fish and lamb curries after the owner explained the menu, and liked the fried potatoes best of all.', source: R + 'B522999541/' },
      ],
      japanese_sources_summary: '食べログ: チャクラ、インド料理・インドカレー・南アジア料理、東山区遊行前町558-6 クレサンテ五条坂 1F、清水五条駅から704m、毎日 11:00〜22:00 (L.O. 21:00)、ランチ〜15:00頃、カフェタイム 15:00〜17:00、ディナー 17:00〜22:00、年中無休、2012年1月27日オープン、カード可、電子マネー不可、27席 (半個室8席)、禁煙、ベジタリアンメニューあり、サダナン400円。口コミ (2025〜2026年、英語): ベンガル料理、ベンガルのフィッシュカレー、サモサ、大谷本廟の入口、ランチセットはやめてアラカルト、カレー・ナン・ビリヤニ、チキン・フィッシュ・ラムのカレー、ポテトの揚げ物、地方のデザート、店主は親切。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B507820246/', R + 'B508267275/', R + 'B522999541/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly owner explains the menu; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区遊行前町558-6 クレサンテ五条坂 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to February 2026.' },
    pin_source: `Tabelog ${TB} (34.995139, 135.776275); cross-checked: GSI 京都府京都市東山区遊行前町558番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B508267275/'],
    price_note: 'Only the naan price is listed; reviewers spent ¥1,000–¥1,999 at lunch (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Bengali fish curry', '', 'Curry', 'ask', 'no', 'June 2025.', 'fish_curry'),
      it('', '', 'Samosa', '', 'Starters', 'no', 'ask', 'June 2025.', 'samosa'),
      it('', '', 'Lamb curry', '', 'Curry', 'ask', 'no', 'February 2026.', 'lamb_curry'),
      it('', '', 'Plain round naan', '¥400', 'Bread', 'no', 'ask', 'Tabelog menu.', 'naan'),
    ] }, {
    cuisine: '京都では珍しいベンガルのインド料理 (2025年6月)・ベンガルのフィッシュカレー、サモサ (2025年6月)・チキン、フィッシュ、ラムのカレー、ポテトの揚げ物、地方のデザート (2026年2月)・カレー、パリッとしたナン、ビリヤニをアラカルトで (2025年5月)・丸いサダナン400円 (食べログのメニュー)・ベジタリアンメニューあり (食べログ)',
    neighborhood: '五条坂。大谷本廟の入口',
    gf_detail: '要確認。カレーにナン、サモサや揚げ物、ビリヤニもある。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューありとあるが、ヴィーガンと書かれた品はない。ギーや乳製品は確認を (食べログ)。',
    notes: '[インド料理・五条坂、ベンガルのカレー] 清水へ上る坂の小さなインド料理店で、京都では珍しいベンガル料理。フィッシュカレー、サモサ、チキンやラムのカレー、ナン、ビリヤニ、締めに地方のデザート。親切な店主が迎えてくれる。毎日11時から22時まで。',
  });
}

// ================================================================ 洋食居酒屋 パリホンポ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034884/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_paris_honpo_koromonotana', name: '洋食居酒屋 パリホンポ (Yoshoku Izakaya Paris Honpo)', category: 'OMNI',
    lat: 35.00796, lng: 135.757305, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, garlic toast and shumai alongside carpaccio-style sashimi, confit, roast pork and garlic rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, conger eel, pork and shrimp dishes; dashi in some sauces (2025–2026 reviews).',
    hours_raw: '17:00–23:00; closed Wednesday; open through Obon, with occasional longer breaks and temporary closures (Tabelog). Cash only: no cards, e-money or QR (Tabelog; December 2025). 12 counter seats; shoes off (Tabelog; December 2025). Non-smoking (Tabelog). Single portions on request (June 2026). Service can be slow (December 2025). In a machiya on a lane just off Sanjo-dori (August 2025; July 2026). Open since 15 February 2003 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Just off Sanjo-dori — 5 min from Karasuma-Oike',
    cuisine: 'Western-style izakaya cooking with Japanese touches, at a counter in a machiya (2025–2026) · carpaccio-style sashimi; shumai; pickled myoga (June 2026) · garlic toast (July 2025) · summer conger eel grilled with olive oil and salt, fried with tapenade, in risotto and pasta; kombu-cured sea bream; seasonal-fruit shochu highballs (August 2025) · lemon cream pasta (September 2025) · confit; hamo and Manganji pepper pasta (July 2025) · roast aged pork with mushrooms ¥1,900; garlic rice with shrimp and zucchini ¥1,500; mikan chuhai ¥900; sangria ¥650 (December 2025) · sakura shrimp and onion ajillo (July 2026)',
    website: null, gmaps: gm('洋食居酒屋 パリホンポ'), menu_url: TB,
    notes: '[Yoshoku izakaya · machiya off Sanjo-dori, since 2003] A 12-seat counter in a townhouse near Karasuma-Oike where a chatty owner cooks Western-style plates with a Kyoto touch: carpaccio-style sashimi, thick shumai, lemon cream pasta and, in summer, conger eel every way. Single portions for solo diners. Shoes off; cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Open since February 2003 (Tabelog). Reviewers describe a friendly, talkative owner cooking at the counter (June 2026). No operator was found.',
      philosophy: null, specialty: 'Carpaccio-style sashimi; summer conger eel.',
      anecdotes: [
        { text: 'An August 2025 regular comes every Kyoto visit for the conger eel — grilled, fried with tapenade, in risotto and in pasta — and paid about ¥15,000 after a big night.', source: R + 'B511924270/' },
        { text: 'A July 2025 diner arrived through the Gion Matsuri crowds and had hamo and Manganji pepper pasta.', source: R + 'B513884263/' },
      ],
      japanese_sources_summary: '食べログ: 洋食居酒屋 パリホンポ、洋食・居酒屋、中京区衣棚通六角上ル了頓図子町475、烏丸御池駅から384m、17:00〜23:00、水曜定休、お盆は営業、2003年2月15日オープン、カード・電子マネー・QR不可、カウンター12席、禁煙。口コミ (2025〜2026年、英語): 町家、カルパッチョ風の刺身、焼売、みょうがの甘酢漬け、ガーリックトースト、conger eel (英語の表記) のグリル・フライ・リゾット・パスタ、鯛の昆布締め、季節の果物の焼酎ハイボール、レモンクリームパスタ、コンフィ、鱧と万願寺のパスタ、熟成豚とキノコのロースト1,900円、海老とズッキーニのガーリックライス1,500円、みかんチューハイ900円、サングリア650円、桜海老と玉ねぎのアヒージョ、靴を脱ぐ、現金のみ、一人分も可。',
      confidence: 'low', sources: [TB, R + 'B498891379/', R + 'B510463937/', R + 'B511924270/', R + 'B513065554/', R + 'B513884263/', R + 'B519837830/', R + 'B531809628/'] },
    cultural_comfort: { level: 'japanese', note: 'Counter in a townhouse; shoes off; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区衣棚通六角上ル了頓図子町475',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.00796, 135.757305); cross-checked: GSI 京都府京都市中京区了頓図子町475番地 (lot) 4m; the hidden ORTO record is 23 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519837830/'],
    price_note: 'Prices from a December 2025 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Roast aged pork with mushrooms', '¥1,900', 'Mains', 'ask', 'no', 'December 2025.', 'roast_pork'),
      it('', '', 'Garlic rice with shrimp and zucchini', '¥1,500', 'Rice', 'ask', 'no', 'December 2025.', 'garlic_rice'),
      it('', '', 'Carpaccio-style sashimi, three kinds', '', 'Starters', 'ask', 'no', 'July 2025; June and July 2026.', 'sashimi'),
      it('', '', 'Shumai', '', 'Starters', 'no', 'no', 'July 2025; June and July 2026.', 'shumai'),
      it('', '', 'Lemon cream pasta', '', 'Pasta', 'no', 'no', 'September 2025.', 'lemon_pasta'),
    ] }, {
    cuisine: '和のひと工夫のある洋食居酒屋の料理を町家のカウンターで (2025〜2026年)・カルパッチョ風の刺身、焼売、みょうがの甘酢漬け (2026年6月)・ガーリックトースト (2025年7月)・夏の conger eel (英語の口コミの表記) をオリーブオイルと塩で焼き、タプナードで揚げ、リゾットやパスタにも。鯛の昆布締め、季節の果物の焼酎ハイボール (2025年8月)・レモンクリームパスタ (2025年9月)・コンフィ、鱧と万願寺のパスタ (2025年7月)・熟成豚とキノコのロースト1,900円、海老とズッキーニのガーリックライス1,500円、みかんチューハイ900円、サングリア650円 (2025年12月)・桜海老と玉ねぎのアヒージョ (2026年7月)',
    neighborhood: '三条通のすぐそば。烏丸御池から徒歩5分',
    gf_detail: '要確認。パスタ、ガーリックトースト、焼売のほか、カルパッチョ風の刺身、コンフィ、豚のロースト、ガーリックライス。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鱧、豚、海老の料理。ソースに出汁を使うものも (2025〜2026年の口コミ)。',
    notes: '[洋食居酒屋・三条通近くの町家、2003年から] 烏丸御池近くの町家のカウンター12席。話好きの店主が和の工夫をした洋風の皿を作る。カルパッチョ風の刺身、厚い焼売、レモンクリームパスタ、夏は conger eel (英語の口コミの表記) をいろいろな料理で。一人分にも対応。靴を脱いで上がる。現金のみ、水曜定休。',
  });
}

// ================================================================ お好み焼 きらく 清水五条坂店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26010644/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_okonomiyaki_kiraku_gojozaka', name: 'お好み焼 きらく 清水五条坂店 (Okonomiyaki Kiraku Shimizu Gojozaka)', category: 'OMNI',
    lat: 34.995238, lng: 135.777035, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and negiyaki batter, with sauce (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp okonomiyaki, beef-tendon stew, pork tonpei-yaki, cheese-yaki (2025 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–13:30 and 17:00–22:00; closed Monday (Tabelog). Cards (Tabelog). 36 seats incl. a counter; private hire for 20–50 (Tabelog). Non-smoking (Tabelog). Takeaway; children welcome (Tabelog). Busy after 20:00 on weekdays (November 2025). Open since 25 June 2007 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji north of Gojo — on the way down from Kiyomizu-dera',
    cuisine: 'Okonomiyaki and teppan small plates (Tabelog) · negiyaki; cheese-yaki; four bottled beers and two dishes for about ¥3,600 (August 2025) · shrimp okonomiyaki; beef-tendon stew; crisp grilled yam; tofu with miso; tonpei-yaki with ponzu, the most popular dish (November 2025)',
    website: null, gmaps: gm('お好み焼 きらく 清水五条坂店'), menu_url: TB,
    notes: '[Okonomiyaki · Higashioji-Gojo, since 2007] A roomy, good-value okonomiyaki and teppan place on Higashioji, handy on the way back from Kiyomizu-dera: shrimp okonomiyaki, negiyaki, tonpei-yaki with ponzu and a rich beef-tendon stew. Closed Monday. Flagged: shares its name with another Okonomiyaki Kiraku near Higashiyama station; link not established.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Open since June 2007 (Tabelog). No operator was found; Tabelog also lists an Okonomiyaki Kiraku near Higashiyama station, and no source links the two.',
      philosophy: null, specialty: 'Okonomiyaki; tonpei-yaki.',
      anecdotes: [
        { text: 'A November 2025 diner, back from Kiyomizu-dera, could not stop eating the shrimp okonomiyaki and rated the beef-tendon stew just as highly.', source: R + 'B517672208/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼 きらく 清水五条坂店、お好み焼き、東山区東大路五条上ル遊行前町562 ペラジオ京都清水 1F、火〜日 11:30〜13:30・17:00〜22:00、月曜定休、2007年6月25日オープン、カード可、36席、貸切20〜50名、禁煙、テイクアウト、子供可。口コミ (2025〜2026年、英語・日本語): ねぎ焼き、チーズ焼き、瓶ビール4本と2品で約3,600円、海老のお好み焼き、牛すじ煮込み、カリカリに焼いた芋 (yam)、豆腐田楽、とん平焼き (看板メニュー、ポン酢)。',
      confidence: 'low', sources: [TB, R + 'B512256845/', R + 'B517672208/', R + 'B520277012/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual and roomy; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路五条上ル遊行前町562 ペラジオ京都清水 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August 2025 to January 2026.' },
    pin_source: `Tabelog ${TB} (34.995238, 135.777035); cross-checked: GSI 京都府京都市東山区遊行前町562番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517672208/'],
    price_note: 'No menu prices found; an August 2025 pair paid about ¥3,600 for four beers and two dishes.', last_checked: TODAY, items: [
      it('', '', 'Shrimp okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'November 2025.', 'ebi_okonomi'),
      it('', '', 'Tonpei-yaki with ponzu', '', 'Teppan', 'ask', 'no', 'November 2025.', 'tonpei'),
      it('', '', 'Negiyaki', '', 'Okonomiyaki', 'no', 'no', 'August 2025.', 'negiyaki'),
      it('', '', 'Beef-tendon stew', '', 'Small plates', 'ask', 'no', 'November 2025.', 'gyusuji'),
    ] }, {
    cuisine: 'お好み焼きと鉄板の小皿 (食べログ)・ねぎ焼き、チーズ焼き、瓶ビール4本と2品で約3,600円 (2025年8月)・海老のお好み焼き、牛すじ煮込み、カリカリに焼いた芋 (yam)、豆腐の味噌焼き、一番人気のポン酢のとん平焼き (2025年11月)',
    neighborhood: '五条の北、東大路。清水寺からの帰り道',
    gf_detail: 'グルテンフリーではない。お好み焼きやねぎ焼きの生地、ソース (2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。海老のお好み焼き、牛すじ煮込み、豚のとん平焼き、チーズ焼き (2025年の口コミ)。',
    notes: '[お好み焼き・東大路五条、2007年から] 清水寺からの帰りに寄りやすい東大路の広くて手頃なお好み焼き・鉄板の店。海老のお好み焼き、ねぎ焼き、ポン酢のとん平焼き、こってりした牛すじ煮込み。月曜定休。東山駅近くの「お好み焼 きらく」と同じ名前 (関係は不明、要確認)。',
  });
}

save();
