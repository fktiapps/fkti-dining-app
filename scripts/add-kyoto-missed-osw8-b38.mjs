// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 38.
//   + 大龍亭 Dairyu Tei (couple-run local Chinese near Kyoto University Hospital; core list)
//   + 樹庵 Ki An (one-man 100% buckwheat soba counter by Shijo Omiya; core list)
//   + 京のつくね家 Kyo no Tsukune Ya (oyakodon and chicken dishes by Jingu-Marutamachi; notable list)
//   + 祇園 北川半兵衞 Gion Kitagawa Hanbee (tea house of an 1861 tea merchant in a Gion townhouse; notable list)
//   - 餃子の王将 府庁前店 26016613 (core): national chain.
//   - ヤキニク甲 26030731 (notable): chain — 甲 (KINOE) brand: ヤキニク甲, 焼肉ダイニング甲, 肉屋甲 and 囲炉裏焼肉甲 in our
//     crawls, plus 炭火焼肉KINOE already in data (kyoto_sumibi_yakiniku_kinoe); an August 2026 review calls it part of
//     "the KINOE group". Five shops of the brand, and a brand already in data.
//   Picked 2026-11-06 after batch 37. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: 26016613
//   (skipped), 大龍亭 26007151, 樹庵 26022925. `next notable 200`: 26030731 (skipped), 京のつくね家 26001085, 祇園 北川半兵衞
//   26030209. Same-name check, same brand or operator only: 大龍亭, 樹庵, 京のつくね家 — one each. 北川半兵衞 — two in our
//   crawls (Gion and Namba, Osaka); per the out-of-city rule a web search for the brand's shops ("祇園 北川半兵衞 店舗一覧")
//   found only these two (Namba opened as the second shop), so it is drafted. None of the four is in data/kyoto.json: grep
//   by name and address (聖護院西町18-2, 賀陽御所町22-1, 東丸太町8-3, 祇園町南側570-188) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26016613/', 'national chain: 餃子の王将');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26030731/', 'chain: 甲 (KINOE) — 4 甲 shops in our crawls plus 炭火焼肉KINOE in data; review calls it the KINOE group');

// ================================================================ 大龍亭 Dairyu Tei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007151/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_dairyu_tei_shogoin', name: '大龍亭 (Dairyu Tei)', category: 'OMNI',
    lat: 35.020238, lng: 135.778689, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat ramen, gyoza, spring rolls and fried dishes in soy-based sauces (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone ramen, fried chicken, mapo tofu with minced meat and gyoza (2023–2026 reviews).',
    hours_raw: 'Monday–Friday 12:00–14:00 (last order 13:45) and 18:00–21:00 (last order 20:45); closed Saturday and Sunday (Tabelog). Reservations accepted (Tabelog). No cover charge (Tabelog original チャージ料無し). Cash only (Tabelog). 32 seats at a counter, tables and tatami; non-smoking (Tabelog; January 2024). Rice can sell out late in a session (October 2023; January 2024). In Shogoin near Kyoto University Hospital; 1 min from the Konoe-dori bus stop, 10 min walk from Jingu-Marutamachi Stn (Tabelog; April 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin by Kyoto University Hospital — 10 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Local Chinese restaurant with set meals around ¥1,000, popular with students (2023–2025 reviews) · yurinchi (fried chicken in sweet-sour sauce with green onion), also as a mini; yurinchi set with ramen and rice ¥1,000–1,050 (2023–2024 reviews) · ramen with a sweetish pork-fat broth, seafood tonkotsu ramen ¥680, mapo tofu rice-bowl set with gyoza, fried chicken set, fried rice, spring rolls (2023–2026 reviews) · beer set of mini yurinchi, house roast pork and a beer (March 2025) · under ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('大龍亭 京都 聖護院'), menu_url: null,
    notes: '[Local Chinese · Shogoin, by Kyoto University Hospital] A weekday neighbourhood Chinese restaurant run by a hard-working couple, feeding students and hospital staff: the crispy yurinchi in sweet-sour sauce, a sweetish pork-fat ramen, mapo tofu and gyoza, mostly as sets of about ¥1,000 with ramen and rice. Quick, kind service. Cash only; closed weekends.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed): a man in the kitchen and a woman who helps there and on the floor (September 2024; March 2025)'], origin: null,
      background: 'Per Tabelog: a Chinese and ramen restaurant in Shogoin; registered as an official listing by the shop. Reviewers describe a couple running it efficiently (September 2024; March 2025), sets built by pairing a main dish with ramen and rice (May 2023), and an owner who offers a mini portion or fresh rice to guests (October 2023).',
      philosophy: null, specialty: 'Yurinchi; yurinchi set.',
      anecdotes: [
        { text: 'An October 2023 guest, told the rice was out, was later asked by the owner if fresh rice — just cooked — was wanted.', source: R + 'B472469229/' },
        { text: 'A May 2023 diner warns that the set names differ by one word between the version with ramen and rice and the one with plain rice.', source: R + 'B465188288/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・ラーメン、左京区聖護院西町18-2、市バス近衛通から徒歩1分、京阪丸太町駅から徒歩10分、月〜金 12:00〜14:00 (L.O.13:45)・18:00〜21:00 (L.O.20:45)、土日定休、予約可、チャージ料無し、カード・電子マネー・QR 不可、32席、座敷、禁煙。口コミ (2023年5月〜2026年2月、英語): 京大病院の近く、学生に人気、夫婦で営む、セットは1,000円ほど、油淋鶏 (ミニも)、油淋鶏とラーメンとご飯のセット1,000〜1,050円、豚の脂の甘みのあるラーメン、魚介豚骨ラーメン680円、麻婆丼と餃子のセット、唐揚げ定食、チャーハン、春巻き、ミニ油淋鶏と自家製チャーシューとビールのセット、ご飯が売り切れることも。',
      confidence: 'medium', sources: [TB, R + 'B465188288/', R + 'B472469229/', R + 'B475563845/', R + 'B478675496/', R + 'B482613247/', R + 'B491680462/', R + 'B491745369/', R + 'B493502575/', R + 'B504539195/', R + 'B522700217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Japanese menu of sets; quick and friendly; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院西町18-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through February 2026.' },
    pin_source: `Tabelog ${TB} (35.020238, 135.778689); cross-checked: GSI 京都府京都市左京区聖護院西町18番地 (lot) 30 m; nearest Kyoto record 65 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493502575/', R + 'B478675496/'],
    price_note: 'Prices from 2024 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Yurinchi set (yurinchi, ramen, rice)', '¥1,050', 'Sets', 'no', 'no', 'October 2024.', 'yurinchi_set'),
      it('', '', 'Seafood tonkotsu ramen', '¥680', 'Ramen', 'no', 'no', 'January 2024.', 'gyokai_tonkotsu'),
    ] }, {
    cuisine: '1,000円ほどのセットが学生に人気の町の中華 (2023〜2025年の口コミ)・油淋鶏 (甘酢とねぎの鶏の唐揚げ、ミニもある)、ラーメンとご飯の付く油淋鶏のセット1,000〜1,050円 (2023〜2024年の口コミ)・豚の脂でほんのり甘いラーメン、魚介豚骨ラーメン680円、餃子付きの麻婆丼のセット、唐揚げ定食、チャーハン、春巻き (2023〜2026年の口コミ)・ミニ油淋鶏と自家製チャーシューとビールのセット (2025年3月)・1,000〜2,000円未満 (食べログ)',
    neighborhood: '京大病院近くの聖護院。神宮丸太町駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。小麦のラーメン、餃子、春巻き、醤油系のたれの揚げ物 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚骨のラーメン、鶏の唐揚げ、ひき肉の麻婆豆腐、餃子 (2023〜2026年の口コミ)。',
    notes: '[町中華・聖護院、京大病院のそば] 働き者の夫婦が営む平日だけの町の中華。学生や病院の人でにぎわう: カリッとした甘酢の油淋鶏、ほんのり甘い豚の脂のラーメン、麻婆豆腐、餃子を、ラーメンとご飯付きの1,000円ほどのセットで。早くて親切。現金のみ、土日休み。',
  });
}

// ================================================================ 樹庵 Ki An
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26022925/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ki_an_soba_mibu', name: '樹庵 (Ki An)', category: 'OMNI',
    lat: 35.002496, lng: 135.746260, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari — 100% buckwheat, handmade (several 2026 reviews) — but the dipping sauce and broth are soy- and bonito-based and no gluten information is given; ask about the tsuyu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce and hot broth are bonito-based, and dashimaki is served (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–15:00 and 18:00–22:00, last order 30 minutes before closing; after 20:00 open until the soba sells out; closed Monday and the second Tuesday of the month (the next day if a holiday) (Tabelog). No reservations (Tabelog); a short wait at lunch (June 2026). Cash only (Tabelog). 12 seats; non-smoking (Tabelog). Mibu, near Shijo Omiya; 4–5 min walk from Shijo-Omiya or Omiya stations (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Mibu, near Shijo Omiya — 5 min walk from Omiya Stn',
    cuisine: 'Handmade juwari soba of freshly ground buckwheat, with sake (2026 reviews) · mori or zaru soba ¥950, large +¥600; oroshi soba with plenty of daikon; tororo soba; kake soba (May–September 2026) · a sharp bonito dipping sauce, real wasabi, finely cut green onion, and a thick, milky soba-yu to finish (2026 reviews) · soba-gaki, warm soba dumplings, dashimaki (June–September 2026) · evening sake, e.g. Jikon (June–July 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('樹庵 蕎麦 四条大宮'), menu_url: null,
    notes: '[Soba · Mibu by Shijo Omiya, 100% buckwheat] A twelve-seat soba shop where a single chef makes juwari soba by hand from freshly ground buckwheat: sweet, fragrant and firm, good even with just salt, with a sharp bonito tsuyu, real wasabi and a thick soba-yu. Try the soba-gaki or tororo soba, and sake in the evening. Some find the noodles a touch dry or short. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who runs the shop alone (September 2026 review)'], origin: null,
      background: 'Per Tabelog: a soba shop with a sake list near Shijo Omiya; registered as an official listing by the shop. Reviewers in 2026 describe 100% buckwheat soba handmade from freshly ground flour by a single chef (June and September 2026), with more sake to pair in the evenings (July 2026).',
      philosophy: null, specialty: 'Juwari soba; soba-gaki.',
      anecdotes: [
        { text: 'An April 2026 visitor had assumed the name was read "Ju-an" before learning it is "Ki An".', source: R + 'B525906686/' },
        { text: 'A seven-time regular, craving something cold in the summer heat, chose Ki An over chilled ramen (July 2026).', source: R + 'B434063702/' },
        { text: 'After the lunch rush in September 2026, a second-lunch guest finally got the soba-gaki that is hard to order when busy.', source: R + 'B536429296/' },
      ],
      japanese_sources_summary: '食べログ: そば、中京区壬生賀陽御所町22-1、阪急大宮駅から徒歩5分、嵐電四条大宮駅から徒歩4分、火〜日 11:30〜15:00・18:00〜22:00 (L.O.は閉店30分前、20時以降は売り切れまで)、月曜と第2火曜定休 (祝日なら翌日)、予約不可、カード・電子マネー・QR 不可、12席、終日禁煙、日本酒にこだわる。口コミ (2026年2月〜9月、英語): 十割そば (挽きたての手打ち)、もりそば950円、大盛り+600円、おろしそば、とろろそば、かけそば、鰹のつけ汁、本わさび、とろりとしたそば湯、そばがき、だし巻き、夜は Jikon などの日本酒、店主一人で営む、麺が短い・乾いているとの声も。',
      confidence: 'medium', sources: [TB, R + 'B201982102/', R + 'B404101832/', R + 'B434063702/', R + 'B522785215/', R + 'B525906686/', R + 'B529382028/', R + 'B529999501/', R + 'B530727268/', R + 'B535757683/', R + 'B536429296/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter-style room; order at your seat; cash only; may sell out after 20:00.' },
    safety: { ...SAFETY0, positives: ['Soba is juwari, 100% buckwheat (several 2026 reviews); the tsuyu is soy-based, so ask.'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区壬生賀陽御所町22-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002496, 135.746260); cross-checked: GSI 京都府京都市中京区壬生賀陽御所町22番地 (lot) 60 m; nearest Kyoto record 55 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B201982102/'],
    price_note: 'Prices from a May 2026 review, tax included; cash only.', last_checked: TODAY, items: [
      it('', '', 'Mori soba (juwari)', '¥950', 'Cold soba', 'ask', 'no', 'Large +¥600; May 2026.', 'mori_soba'),
      it('', '', 'Oroshi soba', '', 'Cold soba', 'ask', 'no', '2026 reviews.', 'oroshi_soba'),
      it('', '', 'Soba-gaki', '', 'Small dishes', 'ask', 'no', 'September 2026.', 'sobagaki'),
    ] }, {
    cuisine: '挽きたての手打ちの十割そばと日本酒 (2026年の口コミ)・もりそばやざるそば950円、大盛り+600円、大根たっぷりのおろしそば、とろろそば、かけそば (2026年5〜9月)・きりっとした鰹のつけ汁、本わさび、丁寧に刻んだねぎ、締めはとろりとしたそば湯 (2026年の口コミ)・そばがき、温かいそばのだんご、だし巻き (2026年6〜9月)・夜は Jikon などの日本酒 (2026年6〜7月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '四条大宮の近くの壬生。大宮駅から徒歩5分',
    gf_detail: '要確認。そばは十割 (そば粉100%) の手打ちとの口コミが複数あるが、つけ汁とかけ汁は醤油と鰹のだしで、グルテンの情報はない。つゆについて確認を (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。つけ汁とかけ汁は鰹だしで、だし巻きもある (2026年の口コミ)。',
    notes: '[そば・四条大宮近くの壬生、十割] 12席のそば屋。店主一人が挽きたてのそば粉で十割そばを手打ちする。甘く香り高くしっかりした麺は塩だけでもおいしく、鰹のきりっとしたつゆ、本わさび、とろりとしたそば湯。そばがきやとろろそば、夜は日本酒も。麺が少し乾いている、短いと感じる人もいる。現金のみ、月曜休み。',
  });
}

// ================================================================ 京のつくね家 Kyo no Tsukune Ya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001085/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://add.ubag.jp/kyono-tsukuneya/';
  const H = day(['11:30', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_kyo_no_tsukune_ya', name: '京のつくね家 (Kyo no Tsukune Ya)', category: 'OMNI',
    lat: 35.017858, lng: 135.772717, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oyakodon in a soy-and-dashi sauce, chicken katsu, chicken nanban, kara-age and duck nanban soba; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — oyakodon, tsukune, katsu and duck soba (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–14:00 and 17:00–20:00; closed Monday; hours may change (Tabelog). Reservations for dinner only (Tabelog). Cards (JCB, AMEX, Diners) and QR incl. PayPay; no e-money (Tabelog; July 2026). 36 seats: 20 at tables on the 1F and 16 on tatami upstairs; non-smoking (Tabelog). A machiya-style front on Kawabata-dori — the only entrance — with paid parking to the north; 5 min walk from Jingu-Marutamachi Stn (Tabelog; May 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori at Marutamachi — 5 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Long-established chicken restaurant known for oyakodon (2026 reviews) · oyakodon ¥1,500 with small sides and miso soup, soft egg with a deep-orange yolk, extra yolk +¥200; shichimi and fine sansho on the table (May–November 2026) · oyakodon and duck nanban soba set ¥1,700; mini oyakodon (July–September 2026) · tsukune, chicken nanban, chicken katsu with three sauces, a limited special kara-age set (2026 reviews) · chicken nabe (Tabelog) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('京のつくね家 東丸太町'), menu_url: null,
    notes: '[Oyakodon · Kawabata Marutamachi, near Kyoto University] A long-loved machiya-front chicken shop by Jingu-Marutamachi, its walls hung with signed boards: a soft, rich oyakodon under a deep-orange yolk, with fine sansho to shake on, plus tsukune, chicken nanban, katsu and duck soba sets. Packed with locals at lunch. One November 2026 guest found the dashi light and the chicken sparse. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: chicken dishes, oyakodon and nabe near Jingu-Marutamachi. Reviewers in 2026 call it a long-established chicken restaurant cherished by locals and repeat customers, featured in the media, with signed boards on the walls — one bearing a Nobel laureate\'s name, given the nearby university (May 2026) — and a lore that renowned doctors from the university hospital were regulars (September 2026).',
      philosophy: null, specialty: 'Oyakodon; tsukune.',
      anecdotes: [
        { text: 'A May 2026 visitor spotted a Nobel Prize winner\'s name among the signed boards on the walls.', source: R + 'B527446545/' },
        { text: 'In July 2026 a card-terminal fault meant cash only for the day, posted clearly outside so guests could check before entering.', source: R + 'B531832503/' },
        { text: 'A September 2026 father, worn out after Byodoin and Fushimi Inari, found the chicken katsu set "looked like a golden meadow".', source: R + 'B535944662/' },
      ],
      japanese_sources_summary: '食べログ: 鶏料理・親子丼・鍋、左京区東丸太町8-3、京阪神宮丸太町駅から徒歩5分、入口は川端通側のみ、北側に有料駐車場、火〜日 11:30〜14:00・17:00〜20:00、月曜定休、予約は夜のみ、カード (JCB・AMEX・Diners)・QR 可、電子マネー不可、36席 (1階テーブル20、2階座敷16)、禁煙。口コミ (2026年5月〜11月、英語): 京町家風の外観、老舗の鶏料理店、色紙がたくさん (ノーベル賞受賞者の名も)、親子丼1,500円 (小鉢と味噌汁付き)、卵黄追加+200円、七味と粉山椒、親子丼と鴨なんばのセット1,700円、ミニ親子丼、つくね、チキン南蛮、チキンカツ (3種のソース)、限定の特製唐揚げ定食、メディアで紹介、京大病院の医師が通ったという話、だしが薄く鶏が少なかったとの声 (2026年11月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B527446545/', R + 'B529503099/', R + 'B529674409/', R + 'B530591177/', R + 'B531832503/', R + 'B533141776/', R + 'B535842087/', R + 'B535944662/', R + 'B538140993/', R + 'B538311297/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; dinner bookings only; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東丸太町8-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017858, 135.772717); cross-checked: GSI 京都府京都市左京区東丸太町8番地 (lot) 31 m; nearest Kyoto record 75 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538140993/', R + 'B531832503/'],
    price_note: 'Prices from July and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon (with small sides and miso soup)', '¥1,500', 'Rice bowls', 'ask', 'no', 'November 2026; extra yolk +¥200.', 'oyakodon'),
      it('', '', 'Oyakodon and duck nanban soba set', '¥1,700', 'Sets', 'no', 'no', 'July 2026.', 'oyako_kamonanban'),
    ] }, {
    cuisine: '親子丼で知られる老舗の鶏料理店 (2026年の口コミ)・親子丼1,500円、小鉢と味噌汁付き、やわらかな卵と濃いオレンジの黄身、卵黄追加+200円、卓上に七味と細かい粉山椒 (2026年5〜11月)・親子丼と鴨なんばそばのセット1,700円、ミニ親子丼 (2026年7〜9月)・つくね、チキン南蛮、3種のソースのチキンカツ、限定の特製唐揚げ定食 (2026年の口コミ)・鶏の鍋 (食べログ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '丸太町の川端通。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。醤油とだしの親子丼、チキンカツ、チキン南蛮、唐揚げ、鴨なんばそば。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。親子丼、つくね、カツ、鴨のそばの鶏料理の店 (2026年の口コミ)。',
    notes: '[親子丼・川端丸太町、京大の近く] 神宮丸太町近くの京町家風の鶏料理の店。壁には色紙がずらり。濃いオレンジの黄身をのせたやわらかな濃厚な親子丼に細かい山椒を振って。つくね、チキン南蛮、カツ、鴨そばのセットも。昼は地元の人でいっぱい。2026年11月の客はだしが薄く鶏が少なめと感じた。月曜休み。',
  });
}

// ================================================================ 祇園 北川半兵衞 Gion Kitagawa Hanbee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030209/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.gion-kitagawahanbee.kyoto';
  const WK = day(['11:00', '18:00']); const WE = day(['11:00', '20:00']);
  put({
    id: 'kyoto_gion_kitagawa_hanbee', name: '祇園 北川半兵衞 (Gion Kitagawa Hanbee)', category: 'OMNI',
    lat: 35.002745, lng: 135.776493, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teas are naturally gluten-free, but the pairing sweets include cakes, cookies and parfaits; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain teas suit, but sweets and lattes use dairy, eggs and chocolate; no vegan information (2026 reviews).',
    hours_raw: 'Monday–Friday 11:00–18:00 (last order 17:30); Saturday–Sunday 11:00–20:00 (last order 19:30); closed on irregular days; hours may change (Tabelog). Reservations accepted and common (Tabelog; July and November 2026). Cards, e-money and QR (Tabelog). Counter on the 1F, sofa seats upstairs; non-smoking (Tabelog; July 2026). Staff speak fluent English (May 2026). A Gion townhouse over 120 years old; about 6 min walk from Gion-Shijo Stn (Tabelog; July 2026). Opened 11 January 2018 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — 6 min walk from Gion-Shijo Stn',
    cuisine: 'Japanese tea café of the tea merchant Kitagawa Hanbee, founded 1861 (Tabelog) · the "Chayomi" tasting ¥2,900: five teas — matcha, sencha, hojicha, Japanese oolong, Japanese black tea — each with a paired bite such as chocolate, nuts or matcha cake (July and October 2026) · matcha kakigori with a drink, tea parfait, matcha and hojicha drinks, cake sets about ¥1,900 (pistachio-cacao, chocolate, matcha rare cheesecake), green-tea latte, ice cream (May–November 2026) · sencha brewed twice, at 70 and 90 degrees (+¥100) (October 2026) · tea leaves to buy from ¥1,300 per 50 g (July 2026) · about ¥2,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('祇園 北川半兵衞'), menu_url: null,
    notes: '[Tea café · Gion townhouse, open into the evening] A hushed, earthen-walled tea house in a 120-year-old Gion townhouse, run by an 1861 tea merchant: the Chayomi tasting of five teas, each with a paired sweet, matcha kakigori, tea parfaits, and sencha brewed at two temperatures; sofa seats upstairs and English-speaking staff. Lovely space; some find it pricey and the pairing cakes uneven. Open to 20:00 at weekends.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 11 January 2018, a Japanese café specialising in tea from Kitagawa Hanbee, a tea merchant established in 1861, offering Japanese tea and sweets. Reviewers in 2026 describe a townhouse over 120 years old (July 2026), attentive staff who refill water and adjust the air conditioning unasked, and fluent English (May 2026).',
      philosophy: 'Japanese tea paired with sweets (Tabelog).', specialty: 'Chayomi tea tasting.',
      anecdotes: [
        { text: 'In May 2026 a staff member, seeing guests fanning away the heat, offered more water and to turn down the air conditioning.', source: R + 'B536836374/' },
        { text: 'An October 2026 visitor found the iced teas noticeably weaker than the hot ones, and some pairing sweets too strong for the tea.', source: R + 'B537766685/' },
        { text: 'A November 2026 couple, diverted from a closed cake shop on Hanamikoji, found the ¥1,900 cake sets hard and not worth the price.', source: R + 'B538450599/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・スイーツ、東山区祇園町南側570-188、京阪祇園四条駅から徒歩約6分、月〜金 11:00〜18:00 (L.O.17:30)、土日 11:00〜20:00 (L.O.19:30)、不定休、予約可、カード・電子マネー・QR 可、禁煙、2018年1月11日オープン、1861年創業の北川半兵衞のお茶の専門の和カフェ。口コミ (2026年5月〜11月、英語): 築120年以上の町家、土壁、1階はカウンター、2階はソファ席、「Chayomi」2,900円 (抹茶、煎茶、ほうじ茶、和烏龍茶、和紅茶の5種に一口の菓子)、抹茶のかき氷 (ドリンク付き)、茶缶パフェ、ケーキのセット1,900円ほど、抹茶のレアチーズケーキ、グリーンティーラテ、煎茶は70度と90度で2煎 (+100円)、茶葉は50g 1,300円から、英語が流暢なスタッフ、値段が高め・菓子が合わないとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B531348342/', R + 'B532021492/', R + 'B532302287/', R + 'B534718064/', R + 'B536836374/', R + 'B537692865/', R + 'B537766685/', R + 'B538265945/', R + 'B538450599/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff; booking advised; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-188',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002745, 135.776493); GSI matches only the large lot 京都府京都市東山区祇園町南側570番地, about 245 m away, so loc_precise false; kyoto_yamaguchi_gion is 19 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531348342/', R + 'B538450599/'],
    price_note: 'Prices from July–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chayomi: five teas with paired sweets', '¥2,900', 'Tea', 'ask', 'ask', 'July 2026.', 'chayomi'),
      it('', '', 'Cake set with tea', '¥1,900', 'Sweets', 'no', 'no', 'November 2026.', 'cake_set'),
      it('', '', 'Tea leaves (50 g)', '¥1,300', 'Shop', 'gf', 'vegan', 'From; July 2026.', 'tea_leaves'),
    ] }, {
    cuisine: '1861年創業の茶商、北川半兵衞の和カフェ (食べログ)・「Chayomi」2,900円: 抹茶、煎茶、ほうじ茶、和烏龍茶、和紅茶の5種に、チョコレート、ナッツ、抹茶のケーキなどの一口の菓子を合わせる (2026年7月・10月)・ドリンク付きの抹茶のかき氷、茶缶パフェ、抹茶やほうじ茶のドリンク、1,900円ほどのケーキのセット (ピスタチオとカカオ、チョコレート、抹茶のレアチーズ)、グリーンティーラテ、アイス (2026年5〜11月)・70度と90度で2煎淹れる煎茶 (+100円) (2026年10月)・茶葉は50g 1,300円から (2026年7月)・2,000〜3,000円ほど (食べログ)',
    neighborhood: '四条の南の祇園。祇園四条駅から徒歩6分',
    gf_detail: '要確認。お茶はグルテンを含まないが、合わせる菓子にケーキ、クッキー、パフェがある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。お茶だけなら合うが、菓子やラテには乳製品、卵、チョコレートを使う。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[茶カフェ・祇園の町家、夜まで] 築120年の祇園の町家、土壁の静かな茶房。1861年創業の茶商の店で、5種のお茶にそれぞれ菓子を合わせる「Chayomi」、抹茶のかき氷、茶のパフェ、2つの温度で淹れる煎茶。2階はソファ席、英語の話せるスタッフ。空間はすばらしいが、高めで菓子にむらがあると感じる人も。土日は20時まで。',
  });
}

save();
