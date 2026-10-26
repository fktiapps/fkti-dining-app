// Osaka sweep (2-mile circle around Dotonbori), batch 14 — vegan/GF. First batch to mix the Tabelog
// "Vegetarian options" flag (queue.mjs next vegan) with the FMGF seeds.
//   + MITHILA (Indian since 1999 on Dotonbori; Tabelog vegetarian flag) — Tabelog id, queue-status row
//   + W RETREAT CAFE (beauty-clinic-run vegan, organic café; FMGF dedicated GF) — vegan full, GF options, queue high
//   + RE-public by BASE ISLAND KITCHEN (Jamaican, 100% GF per FMGF; Kitahorie) — GF options, queue dedicated
//   + my bowl 北堀江店 (brunch café with a GF-marked menu) — GF options, not queued
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 14);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [] };

// ================================================================ MITHILA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001281/'; const R = TB + 'dtlrvwlst/';
  const din = day(['17:00', '23:00']), full = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_mithila_dotonbori', name: 'MITHILA (ミティラー)', category: 'OMNI',
    lat: 34.668795, lng: 135.501933, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani, rice and South Indian dosa are not wheat-based, but naan is, curry bases are not described, and staff speak mainly English (2024). No gluten-free claim from the restaurant.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options", and there are lentil and spinach curries, dosa with potato masala and tomato rasam. Ghee, butter and cream are not ruled out.',
    hours_raw: 'Mon–Tue 17:00–23:00; Wed–Sun 11:30–15:00 and 17:00–23:00; L.O. 22:00; no lunch Mon–Tue; dinner year-round (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: din, 1: din, 2: full, 3: full, 4: full, 5: full, 6: full }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-6-14, Hiramatsu Ōgiya Bldg 2F — a sign hidden among the neon near the Glico sign',
    cuisine: 'North and South Indian since 1999 · dosa with potato masala, tomato rasam · butter chicken, keema, lentil and spinach curries · chicken biryani (huge) · tandoori chicken · crispy naan · spice level 1–5 · Mithila set ¥1,650 · Kingfisher, mango lassi',
    website: null, gmaps: gm('MITHILA 道頓堀'), menu_url: null,
    notes: "[Indian · a 1999 Indian restaurant above Dotonbori] A long-running, 45-seat Indian restaurant up a flight of stairs on Dotonbori, its sign hidden among the neon near the Glico man. The staff are Indian and English works better than Japanese. Beyond the usual curries (butter chicken, keema, lentil, spinach) and crisp naan, there is South Indian cooking: a dosa wrapped round potato masala and a tangy tomato rasam. The chicken biryani is big enough for two, and the kitchen will pack leftovers. The Mithila set (two curries, naan, salad) was ¥1,650 in August 2025, up from ¥880. Choose spice 1–5, since the standard level is very mild. Tabelog flags vegetarian options. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 1999 (Tabelog)', background: 'An Indian-run restaurant; 2024 reviewers note the staff are Indian and mostly speak English.', philosophy: null, specialty: 'Biryani; South Indian dosa and rasam.',
      anecdotes: [
        { text: '"Dosa, a South Indian dish similar to a crepe, was served wrapped around potato masala… Rasam, a South Indian soup, had a base of tomato, offering a light broth." — December 2022.', source: R + 'B458421018/' },
        { text: '"The chicken biryani was more refined than what I had in Little India, Malaysia, and it was served in a large size, enough for two people." — September 2026.', source: R + 'B535609213/' },
      ],
      japanese_sources_summary: '食べログ: MITHILA(ミティラー)、大阪市中央区道頓堀1-6-14 平松扇屋ビル2F、45席、月火17:00〜23:00、水〜日11:30〜15:00・17:00〜23:00、L.O.22:00、月火はランチなし、ディナーは年中無休、喫煙可、カード可、1999年9月1日開店、こだわり: 野菜、健康・ヘルシーメニュー、ベジタリアンメニューあり。口コミ(2022年12月〜2026年9月): 南インド料理(ドーサとポテトマサラ、ラッサム)、キングフィッシャー、マサラチャイ、スタッフはインド人で英語が必要、バターチキン、パリパリのナン、辛さ1〜5、タンドリーチキン、ほうれん草カレー、チキンビリヤニのセット、ミティラーセット880円→1,650円(2025年8月)、豆カレー、キーマ、標準の辛さはほぼなし、塩気が強め、ビリヤニは2人分の量で持ち帰り可、パパド、マンゴーラッシー、マイルドなカレー。',
      confidence: 'medium', sources: [TB, R + 'B458421018/', R + 'B535609213/', R + 'B512090274/', R + 'B487039414/', R + 'B535917252/'] },
    cultural_comfort: { level: 'english', note: 'Indian staff; English works better than Japanese (June 2024).' },
    safety: { ...SAFETY0, confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-14 平松扇屋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番14号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512090274/', R + 'B458421018/'],
    price_note: 'One price from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Mithila set (two curries, naan, salad)', '¥1,650', 'Sets', 'no', 'ask', 'August 2025.', 'mithila_set'),
      it('', '', 'Chicken biryani', '', 'Rice', 'ask', 'no', 'September 2026.', 'biryani'),
      it('', '', 'Masala dosa (with potato masala)', '', 'South Indian', 'ask', 'ask', 'December 2022.', 'dosa'),
      it('', '', 'Rasam (tomato soup)', '', 'South Indian', 'ask', 'ask', 'December 2022.', 'rasam'),
      it('', '', 'Lentil curry', '', 'Curry', 'ask', 'ask', 'August 2025.', 'dal'),
      it('', '', 'Butter chicken curry', '', 'Curry', 'ask', 'no', 'June 2024.', 'butter_chicken'),
    ] }, {
    cuisine: '1999年からの北インドと南インド料理・ポテトマサラのドーサ、トマトのラッサム・バターチキン、キーマ、豆、ほうれん草のカレー・大盛りのチキンビリヤニ・タンドリーチキン・パリパリのナン・辛さ1〜5・ミティラーセット1,650円・キングフィッシャー、マンゴーラッシー',
    neighborhood: '道頓堀1-6-14 平松扇屋ビル2F、グリコの看板近くのネオンの中の小さな看板',
    gf_detail: '要確認。ビリヤニ、ご飯、南インドのドーサは小麦が主ではありませんが、ナンは小麦で、カレーのベースは書かれておらず、スタッフは主に英語(2024年)。店のグルテンフリーの表明はありません。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、豆やほうれん草のカレー、ポテトマサラのドーサ、トマトのラッサムがあります。ギー、バター、クリームが使われていないかは不明です。',
    notes: '[インド料理・道頓堀の1999年からのインド料理店] 道頓堀のビルの階段を上がった先にある45席の老舗のインド料理店で、看板はグリコの近くのネオンに埋もれています。スタッフはインド人で、日本語より英語のほうが通じます。定番のカレー(バターチキン、キーマ、豆、ほうれん草)やパリパリのナンのほか、南インドの料理も。ポテトマサラを包んだドーサや酸味のあるトマトのラッサム。チキンビリヤニは2人分ほどの量で、残りは持ち帰りに包んでくれます。ミティラーセット(カレー2種、ナン、サラダ)は2025年8月で1,650円(以前は880円)。標準の辛さはとてもマイルドなので、1〜5から選んで。食べログではベジタリアンメニューありの表示。喫煙可。',
  });
}

// ================================================================ W RETREAT CAFE
{
  const FM = 'https://www.findmeglutenfree.com/biz/w-holistic-retreat/4686981884149760';
  const OWN = 'https://wholisticretreat.life/', MENU = 'https://wholisticretreat.life/menu/', CONCEPT = 'https://wholisticretreat.life/concept/';
  put({
    id: 'osaka_w_retreat_cafe_shinsaibashi', name: 'W RETREAT CAFE (W Holistic Retreat)', category: 'BOTH',
    lat: 34.675423, lng: 135.49928, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'FindMeGlutenFree marks it "Reported to be dedicated gluten-free", and celiac reviewers (2025–October 2026) say the whole menu is gluten-free, including pizza, pasta, bread and desserts. The café tags itself #グルテンフリー on its concept page, but its menu page states only that it is vegan, with no explicit gluten-free statement. Confirm when booking.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'Fully vegan, per the café: no meat, seafood, eggs or dairy, only plant ingredients such as fresh vegetables, soy meat and soy milk (「お肉や魚介類、卵・乳製品をいっさい使用せず」). Organic ingredients.',
    hours_raw: 'Open days follow a monthly calendar on the official site; lunch, plus a dinner-only menu. Book via the official LINE. Ordering is online (June 2026).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-5-8, Raster On Shinsaibashi Bldg 10F — Shinsaibashi Stn exit 2 / Crysta Nagahori north stair 11',
    cuisine: 'Vegan, organic "gut-health" café run with a beauty clinic · monthly VEGAN gozen ¥3,000 (nine small organic dishes, mushroom kamameshi, miso soup) · organic salad ¥1,650 · GF pizza, pasta bolognese, bread, açaí bowls and desserts (FMGF) · dinner-only menu · 10th floor',
    website: OWN, gmaps: gm('W RETREAT CAFE 心斎橋'), menu_url: MENU,
    notes: '[Café · a vegan, organic retreat on a Shinsaibashi rooftop] A calm 10th-floor café overseen by the Shinsaibashi beauty clinic W CLINIC and built around gut health. Everything is vegan and organic, made only from plant ingredients. FMGF reviewers report the whole menu as gluten-free, a rare combination. The October 2026 monthly VEGAN gozen (¥3,000) brought nine small organic vegetable dishes, mushroom kamameshi and an autumn-vegetable miso soup. Celiac travellers praise the gluten-free pizza, bolognese pasta, bread, açaí bowls and desserts. Expect a dose of wellness messaging (hot water, brown-rice enzyme samples). Open days follow a calendar, so book through LINE, and one diner wrestled with the online ordering.',
    chef_bio: { chef_name: null, roles: [], origin: 'Raster On Shinsaibashi 10F', background: 'A café supervised by the beauty clinic W CLINIC in Shinsaibashi; menus planned with doctors, nurses, pharmacists and registered dietitians (official site).', philosophy: '「自然と、からだ想いの腸活カフェ」 — a gut-health café that cares for the body (official site).', specialty: 'Vegan organic gozen; gluten-free pizza and pasta.',
      anecdotes: [
        { text: '「お肉や魚介類、卵・乳製品をいっさい使用せず、新鮮な野菜と大豆ミートや豆乳など植物性の食材だけで美味しさにこだわったVeganランチ」 (official menu page).', source: MENU },
        { text: '"Excellent food and a diverse selection. The bolognese pasta was great! The gluten-free bread was great!" — FMGF review, March 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(wholisticretreat.life): W RETREAT CAFE、〒542-0081 大阪市中央区南船場4-5-8 ラスターオン心斎橋ビル10F、06-6755-8347、心斎橋駅2番・クリスタ長堀北11番階段、美容クリニック「W CLINIC」監修の腸活カフェ、ALL ORGANIC、お肉や魚介類、卵・乳製品をいっさい使用しない植物性のVeganランチ、10月の月替わり「VEGAN御膳」3,000円(有機野菜の小鉢9種、きのこ釜飯、秋野菜の味噌汁、有機大根の漬物)、季節野菜のオーガニックサラダ1,650円、ディナー限定メニュー、営業日カレンダー、予約は公式LINE、#グルテンフリーのタグ。FindMeGlutenFree: グルテンフリー専門と報告、ピザ、パスタ(ボロネーゼ)、パン、アサイーボウル、デザート、オンライン注文に苦労した客(2026年6月)、10階で見つけにくい。',
      confidence: 'medium', sources: [OWN, MENU, CONCEPT, FM] },
    cultural_comfort: { level: 'english', note: 'Popular with overseas gluten-free travellers; online ordering and LINE booking.' },
    safety: { ...SAFETY0,
      positives: [
        { text: 'Own statement: entirely plant-based, no meat, seafood, eggs or dairy (menu page); tagged #グルテンフリー (concept page).', source: CONCEPT },
        { text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; celiac reviewers 2025–2026.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0081 大阪府大阪市中央区南船場4-5-8 ラスターオン心斎橋ビル 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated October 2026; FMGF review October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区南船場四丁目5番8号 (go) 10m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [MENU, CONCEPT, FM],
    price_note: 'Prices from the official site, October 2026 monthly menu. GF flags follow FMGF reports; the café\'s own pages state vegan, and tag gluten-free only as a hashtag.', last_checked: TODAY, items: [
      it('VEGAN御膳', 'vegan gozen', 'Monthly VEGAN gozen: 9 organic small dishes, mushroom kamameshi, miso soup, pickles', '¥3,000', 'Lunch', 'ask', 'vegan', 'October 2026 monthly menu.', 'vegan_gozen'),
      it('季節野菜のオーガニックサラダ', '', 'Organic seasonal vegetable salad', '¥1,650', 'Salads', 'ask', 'vegan', 'Official site.', 'organic_salad'),
      it('', '', 'Gluten-free pizza', '', 'Mains', 'gf', 'vegan', 'FMGF, May 2026.', 'pizza'),
      it('', '', 'Pasta bolognese (soy meat)', '', 'Mains', 'gf', 'vegan', 'FMGF, March 2026.', 'bolognese'),
    ] }, {
    cuisine: '美容クリニック監修のヴィーガン・オーガニックの腸活カフェ・月替わりVEGAN御膳3,000円(有機野菜の小鉢9種、きのこ釜飯、味噌汁)・オーガニックサラダ1,650円・グルテンフリーのピザ、ボロネーゼ、パン、アサイーボウル、デザート(FMGF)・ディナー限定メニュー・10階',
    neighborhood: '南船場4-5-8 ラスターオン心斎橋ビル10F。心斎橋駅2番出口・クリスタ長堀北11番階段',
    gf_detail: 'FindMeGlutenFreeでは「グルテンフリー専門と報告」とされ、セリアック病の客(2025年〜2026年10月)はピザ、パスタ、パン、デザートを含めメニューはすべてグルテンフリーと書いています。店のコンセプトのページには#グルテンフリーのタグがありますが、メニューのページで明記しているのはヴィーガンであることだけで、グルテンフリーの明確な表明はありません。予約時に確認を。',
    vegan_detail: '店によると完全ヴィーガンで、「お肉や魚介類、卵・乳製品をいっさい使用せず」、新鮮な野菜、大豆ミート、豆乳など植物性の食材だけ。オーガニックの食材です。',
    notes: '[カフェ・心斎橋のビル10階のヴィーガン・オーガニックのカフェ] 心斎橋の美容クリニック「W CLINIC」が監修する、腸活がテーマの静かな10階のカフェ。すべてヴィーガンでオーガニック、植物性の食材だけで作り、FMGFの口コミではメニューはすべてグルテンフリーという珍しい組み合わせです。2026年10月の月替わり「VEGAN御膳」(3,000円)は有機野菜の小鉢9種、きのこ釜飯、秋野菜の味噌汁。セリアック病の旅行者はグルテンフリーのピザ、ボロネーゼ、パン、アサイーボウル、デザートを絶賛。白湯や玄米酵素など健康のメッセージも多めです。営業日はカレンダー制なのでLINEで予約を。オンライン注文に苦労した客も。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, CONCEPT, MENU],
    why: "Independent first-hand corroboration: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers 2025–October 2026 ('The entire menu is gluten free and vegan', GF pizza, pasta, bread, desserts). Own claim is weak: only a #グルテンフリー hashtag on the concept page; the menu page states vegan, not gluten-free. Ask before upgrading: are all flours, soy sauce, miso and soy meat gluten-free, and is anything with wheat used in the kitchen?",
  });
}

// ================================================================ RE-public by BASE ISLAND KITCHEN
{
  const FM = 'https://www.findmeglutenfree.com/biz/base-island-kitchen/6055975469056000';
  const FB = 'https://www.facebook.com/baseislandkitchen/';
  put({
    id: 'osaka_republic_base_island_kitchen_kitahorie', name: 'RE-public by BASE ISLAND KITCHEN', category: 'GF',
    lat: 34.674031, lng: 135.49525, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'FindMeGlutenFree marks it "Reported to be dedicated gluten-free", and celiac reviewers (2025–October 2026) call it 100% gluten-free, with a dedicated GF fryer reported and no symptoms. The owner flags the one exception: the beer is not gluten-free (January 2026). It is also dairy-free (2025). The restaurant\'s own pages (Facebook) were not reachable, so this rests on community reports.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Lots of vegan options. A 2025 reviewer describes "a vegan menu except a plate with chicken (no milk, no pork, no egg)". Jerk chicken is the signature, so check what else is on the plate.',
    hours_raw: 'Unpredictable; check Facebook or Instagram before going. Reviewers: open 12:00–18:00, sometimes later on Fridays (April 2026); found closed on a Wednesday and said to close Mondays and Tuesdays too (2025). Nachos sell out after the lunch rush.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-16-27, Nishi-ku',
    cuisine: 'Gluten-free Jamaican home cooking · jerk chicken plate with potato wedges · jerk chicken bean wrap · nachos (sell out early) · tapas · rice bowls · lemon-blueberry cake, cupcakes · lots of vegan dishes · dairy-free',
    website: FB, gmaps: gm('BASE ISLAND KITCHEN 北堀江'), menu_url: null,
    notes: '[Jamaican · gluten-free Jamaican cooking in Kitahorie] A tiny, cheerful Jamaican kitchen in Kitahorie. Celiac reviewers say it is 100% gluten-free, with a dedicated fryer, and it is also dairy-free with lots of vegan dishes. The owner cooks everything in view and is careful about gluten, even flagging that the beer isn\'t safe. Order the jerk chicken plate with crisp potato wedges (smoky, slightly spicy, well cooked), a jerk chicken bean wrap, tapas, or the popular nachos, which sell out after lunch. Save room for the cakes. Portions are big. Hours are unpredictable: 12–6 pm is typical, but several have arrived to find it shut, so check Facebook or Instagram first.',
    chef_bio: { chef_name: null, roles: [], origin: 'Kitahorie 1-chōme, Nishi-ku', background: 'An owner-run Jamaican kitchen (FMGF reviewers describe one woman cooking everything); no source names the owner.', philosophy: null, specialty: 'Gluten-free jerk chicken; nachos; cakes.',
      anecdotes: [
        { text: '"I went for the jerk chicken with potato wedges… packed with flavour, with that perfect smoky, slightly spicy jerk seasoning." — FMGF review, April 2026.', source: FM },
        { text: '"This place is 100% gluten free. Had jerk chicken bean wrap and fries… This place is open 12-6pm, sometimes later on a Friday. The nachos are popular and sell out early." — FMGF review, April 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: RE-public by BASE ISLAND KITCHEN、大阪市西区北堀江1-16-27、080-7013-5231、Facebook baseislandkitchen、グルテンフリー専門と報告、グルテンフリー専用フライヤーの報告。口コミ(2025年〜2026年10月): ジャマイカ料理、ジャークチキンとポテトウェッジ、ジャークチキンと豆のラップ、ナチョス(早く売り切れる)、タパス、レモンブルーベリーケーキ、量が多い、オーナーはグルテンに慎重でビールだけはグルテンフリーでないと伝えてくれた(2026年1月)、グルテンと乳製品不使用、チキンの皿以外はヴィーガンのメニュー(2025年)、12時〜18時(金曜は遅くまでのことも、2026年4月)、営業日が読めないのでFacebookやInstagramで確認、水曜に閉まっていて月火も休みとの声(2025年)。',
      confidence: 'medium', sources: [FM, FB] },
    cultural_comfort: { level: 'english', note: 'English-friendly owner; popular with overseas celiac travellers.' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [{ text: 'Only the beer is not gluten-free; the owner points it out (FMGF review, January 2026).', source: FM }],
      staff_allergy_handling: [{ text: '"The owner is also very careful about GF." — FMGF review, January 2026.', source: FM }],
      positives: [{ text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; dedicated GF fryer reported; celiac reviewers report no symptoms.', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-16-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF review from October 2026; hours unpredictable.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市西区北堀江一丁目16番27号 (go) 4m; OSM node/5469157521 「Base Island Kitchen」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured; dishes from 2025–2026 FMGF reviews. Reported 100% gluten-free except beer.', last_checked: TODAY, items: [
      it('', '', 'Jerk chicken plate with potato wedges', '', 'Mains', 'gf', 'no', 'April 2026.', 'jerk_chicken'),
      it('', '', 'Jerk chicken bean wrap with fries', '', 'Mains', 'gf', 'no', 'April 2026.', 'jerk_wrap'),
      it('', '', 'Nachos', '', 'Mains', 'gf', 'ask', 'Sell out early (April 2026).', 'nachos'),
      it('', '', 'Lemon-blueberry cake', '', 'Dessert', 'gf', 'ask', 'January 2026.', 'lemon_blueberry'),
      it('', '', 'Beer', '', 'Drinks', 'no', 'ask', 'Not gluten-free (January 2026).', 'beer'),
    ] }, {
    cuisine: 'グルテンフリーのジャマイカの家庭料理・ポテトウェッジ付きのジャークチキン・ジャークチキンと豆のラップ・ナチョス(早く売り切れる)・タパス・ライスボウル・レモンブルーベリーケーキ、カップケーキ・ヴィーガン料理が多い・乳製品不使用',
    neighborhood: '西区北堀江1-16-27',
    gf_detail: 'FindMeGlutenFreeでは「グルテンフリー専門と報告」とされ、セリアック病の客(2025年〜2026年10月)は100％グルテンフリー、専用フライヤーがあり症状もなかったと書いています。例外はビールで、オーナーが教えてくれます(2026年1月)。乳製品も使っていません(2025年)。店自身のページ(Facebook)は確認できず、利用者の報告に基づいています。',
    vegan_detail: 'ヴィーガンの料理が多く、2025年には「チキンの皿以外はヴィーガンのメニュー(乳製品、豚肉、卵なし)」という口コミ。看板はジャークチキンなので、ほかの皿の中身を確認を。',
    notes: '[ジャマイカ料理・北堀江のグルテンフリーのジャマイカ料理] 北堀江の小さく明るいジャマイカ料理の店。セリアック病の客によれば100％グルテンフリーで専用フライヤーがあり、乳製品も使わず、ヴィーガンの料理も多い。オーナーが目の前ですべて作り、グルテンには慎重で、ビールはグルテンフリーでないことまで教えてくれます。カリッとしたポテトウェッジ付きのジャークチキン(スモーキーで少し辛く、火の通りも見事)、ジャークチキンと豆のラップ、タパス、ランチ後には売り切れる人気のナチョスを。ケーキもぜひ。量は多め。営業時間は読みにくく、12時〜18時が多いものの閉まっていた客も多いので、先にFacebookかInstagramで確認を。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [FM, FB],
    why: "Independent first-hand corroboration: FindMeGlutenFree 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers 2025–October 2026 ('100% gluten free', no symptoms), dedicated GF fryer reported; the owner flags beer as the only non-GF item. No own statement captured (Facebook not fetched). Ask: is beer the only gluten-containing item on the premises, and are the jerk marinade and soy/stock bases gluten-free?",
  });
}

// ================================================================ my bowl 北堀江店
{
  const FM = 'https://www.findmeglutenfree.com/biz/my-bowl/6630428943712256';
  const IG = 'https://www.instagram.com/mybowljp/';
  put({
    id: 'osaka_my_bowl_kitahorie', name: 'my bowl 北堀江店', category: 'GF',
    lat: 34.673595, lng: 135.49539, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The menu marks gluten-free items: pancakes, banana bread, toast and avocado toast, açaí bowls, salads, smoothies. FMGF reviewers (2025–October 2026) praise the range. Cross-contact is a real risk. FMGF marks it NOT a dedicated facility, and in April 2026 a celiac found the GF granola is made in a factory that also processes wheat, and the staff did not understand celiac disease or cross-contamination. An October 2026 reviewer found the staff "very aware". Ask carefully.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Vegan, vegetarian, dairy and meat dishes all on one menu (October 2026). Ask which bowls and toasts are vegan.',
    hours_raw: 'No full hours found. A reviewer notes breakfast until 11:00 and lunch until 13:00 (April 2026). Check Instagram.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-11-8, Nishi-ku',
    cuisine: 'Brunch café · gluten-free pancakes and banana bread · avocado toast, salmon and cream-cheese toast on GF bread · açaí bowls · salads · smoothies · coffee · breakfast to 11:00, lunch to 13:00',
    website: IG, gmaps: gm('my bowl 北堀江'), menu_url: null,
    notes: '[Café · gluten-free brunch in Kitahorie] A small, quiet brunch café with a menu that marks its many gluten-free options: pancakes, banana bread, avocado toast and salmon-and-cream-cheese toast on good GF bread, açaí bowls, salads and smoothies, alongside vegan, vegetarian and meat dishes. Western breakfasts like these are rare in Japan, and gluten-free travellers love it ("the best pancakes, banana bread and coffee", October 2026). Portions are modest. Celiacs should be careful: it is not a dedicated GF kitchen, one diner found the GF granola made in a wheat-handling factory, and staff awareness varies. Breakfast runs until 11, lunch until 1 pm.',
    chef_bio: { chef_name: null, roles: [], origin: 'Kitahorie branch (FMGF listing name; Instagram @mybowljp)', background: 'No source names the operator.', philosophy: null, specialty: 'Gluten-free pancakes and bowls.',
      anecdotes: [
        { text: '"Avocado toast salmon and cream cheese toast salads that are very rare in Japan, western breakfast. There is dairy there is meat there is vegan gf vegetarian all under one roof!!!… Very aware of the gf needs. Great bread!" — FMGF review, October 2026.', source: FM },
        { text: '"The glutenfree granola is made in a factory where wheat is also being processed. I asked the waitresses about this and they didn\'t understand." — FMGF review, April 2026.', source: FM },
      ],
      japanese_sources_summary: 'FindMeGlutenFree: my bowl 北堀江店、大阪市西区北堀江1-11-8、Instagram @mybowljp、グルテンフリーのメニューあり、グルテンフリー専門ではない。口コミ(2025年〜2026年10月): パンケーキ、バナナブレッド、コーヒー、アボカドトースト、サーモンとクリームチーズのトースト、サラダ、アサイーボウル、スムージー、乳製品・肉・ヴィーガン・グルテンフリー・ベジタリアンが一緒、グルテンフリーへの理解があるという声(2026年10月)、朝食は11時まで・ランチは13時まで、量は少なめ、グルテンフリーのグラノーラは小麦も扱う工場で製造、スタッフがセリアック病やコンタミを理解していなかった(2026年4月)、メニューにGFの表示。',
      confidence: 'medium', sources: [FM, IG] },
    cultural_comfort: { level: 'english', note: 'GF items marked on the menu; staff understanding of celiac disease varies (2026).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [
        { text: 'GF granola made in a factory that also processes wheat; staff did not understand cross-contamination (FMGF review, April 2026).', source: FM },
        { text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility."', source: FM },
      ],
      positives: [{ text: 'Menu marked with GF items (FMGF reviews, 2025–2026); "very aware of the gf needs" (October 2026).', source: FM }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-11-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市西区北堀江一丁目11番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No prices captured; dishes from 2025–2026 FMGF reviews.', last_checked: TODAY, items: [
      it('', '', 'Gluten-free pancakes', '', 'Breakfast', 'gf', 'ask', 'October 2026.', 'pancakes'),
      it('', '', 'Gluten-free banana bread', '', 'Breakfast', 'gf', 'ask', 'October 2026.', 'banana_bread'),
      it('', '', 'Avocado toast / salmon and cream-cheese toast (GF bread)', '', 'Toast', 'gf', 'ask', 'October 2026.', 'toast'),
      it('', '', 'Açaí bowl', '', 'Bowls', 'ask', 'ask', 'GF granola made in a wheat-handling factory (April 2026).', 'acai'),
    ] }, {
    cuisine: 'ブランチカフェ・グルテンフリーのパンケーキとバナナブレッド・グルテンフリーのパンのアボカドトーストやサーモンとクリームチーズのトースト・アサイーボウル・サラダ・スムージー・コーヒー・朝食は11時まで、ランチは13時まで',
    neighborhood: '西区北堀江1-11-8',
    gf_detail: 'メニューにグルテンフリーの表示があります(パンケーキ、バナナブレッド、トースト、アボカドトースト、アサイーボウル、サラダ、スムージー)。FMGFの口コミ(2025年〜2026年10月)も品数の多さを評価。ただしコンタミのリスクがあります。FMGFではグルテンフリー専門ではないとされ、2026年4月にはセリアック病の客が、グルテンフリーのグラノーラが小麦も扱う工場で作られていること、スタッフがセリアック病やコンタミを理解していないことに気づいています。2026年10月には「とても理解がある」という声も。慎重に確認を。',
    vegan_detail: 'ヴィーガン、ベジタリアン、乳製品、肉の料理が同じメニューに(2026年10月)。どのボウルやトーストがヴィーガンか確認を。',
    notes: '[カフェ・北堀江のグルテンフリーのブランチ] 小さく静かなブランチカフェで、メニューにグルテンフリーの選択肢がたくさん表示されています。パンケーキ、バナナブレッド、おいしいグルテンフリーのパンのアボカドトーストやサーモンとクリームチーズのトースト、アサイーボウル、サラダ、スムージー、ヴィーガンやベジタリアン、肉の料理も。日本では珍しい洋風の朝食で、グルテンフリーの旅行者に人気(「最高のパンケーキとバナナブレッドとコーヒー」2026年10月)。量は控えめ。セリアック病の人は注意を。グルテンフリー専門ではなく、グルテンフリーのグラノーラが小麦を扱う工場製だった客もいて、スタッフの理解にもばらつきがあります。朝食は11時、ランチは13時まで。',
  });
}

save();
