// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 97.
//   + イタリア料理と自然派ワイン Lugol (barrier-free Italian and natural wine, Shinmachi north of Oike)
//   + たてや Tateya (Kyoto cooking and kaiseki on reservation, counter and upstairs, Shimogyo)
//   + はせがわ Hasegawa (eight-seat, signless, no-photo coffee counter run single-handed, Kawaramachi-Marutamachi)
//   + オッティモ ottimo (fresh-pasta Italian near Karasuma-Oike)
//   - THE KITCHEN KANRA, 鉄板料理 花六, 鶏卵問屋 中川幸商店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26000054, 26028170 (skipped),
//   26028194 (skipped), 26030426, 26016722 (skipped), 26043746, 26007542.
//   queue-status.jsonl grepped for each brand (Lugol, KANRA/カンラ, UDS, 花六, たてや, 中川幸, はせがわ, オッティモ): NOHGA and
//   other hotel-group rulings noted (26037084, 26031324); none for these shops.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name, site
//   or address.
//   Big-chain hotel (Greg 2026-11-08): THE KITCHEN KANRA and 鉄板料理 花六 are the restaurants of ホテル カンラ 京都
//   (烏丸通六条下る北町190), run by UDS株式会社 of the Odakyu group, which also runs other hotels (UDS press releases).
//   Same-name count: one shop each; operators not found.
//   Service charges, checked against the Japanese original: Lugol お1人様１ドリンクオーダー (one drink per person);
//   ottimo コペルトとして、お一人様330円 (¥330 coperto); none listed for たてや or はせがわ.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028170', 'large parent: UDS (Odakyu group) hotel — THE KITCHEN KANRA is the restaurant of ホテル カンラ 京都, run by UDS株式会社 (UDS press releases; big-chain-hotel ruling, Greg 2026-11-08)');
skip('26028194', 'large parent: UDS (Odakyu group) hotel — 鉄板料理 花六 is at ホテル カンラ 京都 (same address, 烏丸通六条下る北町190), run by UDS株式会社 (same ruling as 26028170)');
skip('26016722', 'retail food shop (Greg 11-07 ruling): 鶏卵問屋 中川幸商店 is an egg wholesaler selling take-away bento and ¥250 dashimaki; no founding date or family succession sourced and no GF or vegan options sourced');

// ================================================================ Lugol
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000054/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_lugol_shinmachi_oike', name: 'イタリア料理と自然派ワイン Lugol', category: 'OMNI',
    lat: 35.011217, lng: 135.756865, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza, pasta, focaccia and fritto alongside garlic rice and fried rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal Kyoto vegetables with bagna cauda and some pastas may suit, but nothing is described as vegan (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last orders 14:00), dinner 17:30–23:00 (last orders 22:00); usually closed Wednesday, days off otherwise irregular — check the shop’s social media (Tabelog). One drink order per person (Tabelog, original お1人様１ドリンクオーダーをお願いしております). Cards, IC and e-money, QR (Tabelog). 32 seats: 5 counter, 22 table, 5 sofa (Tabelog). Non-smoking; wheelchair accessible (Tabelog). Wide aisles for wheelchairs and strollers, accessible toilet, kids’ chairs, toys and changing table (March and July 2026). 5 min from Karasuma-Oike exit 2 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi north of Oike — 5 min from Karasuma-Oike',
    cuisine: 'Italian food with natural wine, by the Kyoto International Manga Museum (March 2026) · quattro formaggi pizza; miso carbonara (August 2026) · gorgonzola terrine; baked apple with honey and sansho; sake-lees gorgonzola gnocchi; Kyoto vegetables with bagna cauda (December 2025) · sakura-shrimp aglio e olio (March 2026) · garlic rice with foie gras and Nara pickles; wine-poached figs with mascarpone (July 2026) · lunch from ¥1,280, bacon carbonara ¥1,580; fried rice for children (March and July 2026) · anchovy-ajillo focaccia (September 2026)',
    website: null, gmaps: gm('Lugol 京都 新町御池'), menu_url: TB,
    notes: '[Italian and natural wine · Shinmachi-Oike, barrier-free] A spacious, relaxed Italian near Karasuma-Oike that makes room for everyone — wide aisles for wheelchairs and strollers, an accessible toilet, kids’ chairs and toys — with pizza, playful pastas like miso carbonara and foie-gras garlic rice, and a natural-wine list. One drink per person. Usually closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or chef details were found. Reviewers note families with small children both lunch and dinner (February and June 2026).',
      philosophy: null, specialty: 'Pizza and pasta with natural wine.',
      anecdotes: [
        { text: 'A March 2026 parent with a child who dislikes bread and noodles was relieved to find fried rice on the lunch menu — and an accessible toilet.', source: R + 'B525658257/' },
        { text: 'A July 2026 visitor from Tokyo booked ahead just to try the garlic rice with foie gras and Nara pickles.', source: R + 'B531569642/' },
      ],
      japanese_sources_summary: '食べログ: イタリア料理と自然派ワイン Lugol、イタリアン・パスタ・ピザ、中京区新町御池上ル中之町50-1 シェモア御池新町 1F、地下鉄烏丸御池駅2番出口から徒歩5分、11:30〜15:00 (L.O. 14:00)・17:30〜23:00 (L.O. 22:00)、不定休 (主に水曜)、お1人様1ドリンクオーダー、カード・電子マネー・QR可、32席 (カウンター5、テーブル22、ソファ5)、禁煙、車椅子可。口コミ (2025〜2026年、英語): 京都国際マンガミュージアムの近く、クアトロフォルマッジ、味噌のカルボナーラ、ゴルゴンゾーラのテリーヌ、焼きりんごと蜂蜜と山椒、酒粕ゴルゴンゾーラのニョッキ、京野菜のバーニャカウダ、桜海老のアーリオオーリオ、フォアグラと奈良漬けのガーリックライス、イチジクのワイン煮とマスカルポーネ、ランチ1,280円から、ベーコンのカルボナーラ1,580円、子供向けの炒飯、車椅子・ベビーカーで動ける広さ、多目的トイレ、子供椅子・おもちゃ・おむつ台、アンチョビのアヒージョのフォカッチャ。',
      confidence: 'low', sources: [TB, R + 'B431987906/', R + 'B475568839/', R + 'B523063516/', R + 'B525409230/', R + 'B525658257/', R + 'B530407349/', R + 'B531569642/', R + 'B532085161/', R + 'B535796361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Barrier-free; family-friendly; one drink per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町御池上ル中之町50-1 シェモア御池新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.011217, 135.756865); cross-checked: GSI 京都府京都市中京区中之町50番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532085161/'],
    price_note: 'Prices from a July 2026 review; one drink per person.', last_checked: TODAY, items: [
      it('', '', 'Bacon carbonara (lunch)', '¥1,580', 'Lunch', 'no', 'no', 'July 2026; lunch from ¥1,280.', 'carbonara'),
      it('', '', 'Miso carbonara', '', 'Pasta', 'no', 'no', 'August 2026.', 'miso_carbonara'),
      it('', '', 'Quattro formaggi pizza', '', 'Pizza', 'no', 'no', 'August 2026.', 'quattro'),
      it('', '', 'Garlic rice with foie gras and Nara pickles', '', 'Rice', 'ask', 'no', 'July 2026.', 'garlic_rice'),
      it('', '', 'Kyoto vegetables with bagna cauda', '', 'Antipasti', 'ask', 'ask', 'December 2025.', 'bagna_cauda'),
    ] }, {
    cuisine: '京都国際マンガミュージアム近くのイタリアンと自然派ワイン (2026年3月)・クアトロフォルマッジ、味噌のカルボナーラ (2026年8月)・ゴルゴンゾーラのテリーヌ、蜂蜜と山椒の焼きりんご、酒粕ゴルゴンゾーラのニョッキ、京野菜のバーニャカウダ (2025年12月)・桜海老のアーリオオーリオ (2026年3月)・フォアグラと奈良漬けのガーリックライス、イチジクのワイン煮とマスカルポーネ (2026年7月)・ランチは1,280円から、ベーコンのカルボナーラ1,580円、子供向けの炒飯 (2026年3・7月)・アンチョビのアヒージョのフォカッチャ (2026年9月)',
    neighborhood: '新町通、御池の北。烏丸御池から徒歩5分',
    gf_detail: '要確認。ピザ、パスタ、フォカッチャ、フリットのほか、ガーリックライスや炒飯も。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。京野菜のバーニャカウダや一部のパスタは合うかもしれないが、ヴィーガンと書かれた品はない (2025〜2026年の口コミ)。',
    notes: '[イタリアンと自然派ワイン・新町御池、バリアフリー] 烏丸御池近くの広くくつろげるイタリアン。車椅子やベビーカーで動ける通路、多目的トイレ、子供椅子やおもちゃもあり、誰でも入りやすい。ピザ、味噌のカルボナーラやフォアグラのガーリックライスなど遊び心のある料理と自然派ワイン。1人1ドリンク制。主に水曜定休。',
  });
}

// ================================================================ たてや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030426/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-tateya.com/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_tateya_shimogyo', name: 'たてや (Tateya)', category: 'OMNI',
    lat: 34.999125, lng: 135.754434, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses and à la carte with dashi, sashimi, fried dishes (incl. nama-fu) and mackerel sushi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, duck, hamo, cod and dashi throughout (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:30–23:00; closed Sunday (Tabelog; own site). Courses on advance reservation; à la carte otherwise (own site; October 2026). Cards: JCB, AMEX, Diners (Tabelog). A counter on the first floor and seating upstairs (January and October 2026). Non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimogyo, south of Shijo',
    cuisine: 'Refined Kyoto cooking: courses on reservation or à la carte (own site; 2025–2026) · year-end kaiseki: fried nama-fu with shuto; steamed turnip; Spanish mackerel, sea bream, seared bonito and squid sashimi; duck and leek hot pot; grilled silver cod; mackerel sushi; hamo with plum and fried taro (December 2025) · hamo and matsutake (October 2025) · sea-bream rice in a clay pot to finish (January 2026) · à la carte sashimi platter; small hot pot of hamo and matsutake; chestnut chips; fig dengaku (October 2026)',
    website: SITE, gmaps: gm('たてや 京都'), menu_url: SITE,
    notes: '[Kyoto cuisine · Shimogyo, counter and upstairs] A calm Japanese restaurant for elegant Kyoto cooking — book a kaiseki course with hamo and matsutake in autumn and a clay-pot sea-bream rice to finish, or drop in for sashimi and small hot pots à la carte. Counter downstairs, rooms upstairs. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'No operator or chef details were found.', philosophy: null, specialty: 'Seasonal Kyoto kaiseki.',
      anecdotes: [
        { text: 'An October 2026 group, arriving by taxi through heavy rain, settled upstairs with draft beer, a sashimi platter and a small hot pot of hamo and matsutake.', source: R + 'B508908731/' },
      ],
      japanese_sources_summary: '公式サイト: たてや、事前予約でコースも用意、日曜定休。食べログ: たてや、日本料理・居酒屋、下京区天神前町336-2、月〜土 17:30〜23:00、日曜定休、カードはJCB・AMEX・Diners、禁煙。口コミ (2025〜2026年、英語): 年末の会席 (生麩の揚げ物と酒盗、かぶら蒸し、鰆・鯛・鰹のたたき・烏賊の造り、鴨と葱の鍋、銀鱈の焼き物、鯖寿司、鱧の梅肉と里芋の揚げ物)、鱧と松茸、締めは鯛の土鍋ご飯、1階は美しいカウンター、2階の席、アラカルトの刺身の盛り合わせ、鱧と松茸の小鍋、栗チップス、イチジクの田楽。',
      confidence: 'low', sources: [SITE, TB, R + 'B503401564/', R + 'B508908731/', R + 'B516502275/', R + 'B520493595/'] },
    cultural_comfort: { level: 'japanese', note: 'Kyoto restaurant; courses need a reservation.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区天神前町336-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated October 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.999125, 135.754434); cross-checked: GSI 京都府京都市下京区天神前町336番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503401564/', R + 'B508908731/'],
    price_note: 'No prices found.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course (reservation)', '', 'Courses', 'ask', 'no', 'December 2025.', 'kaiseki'),
      it('', '', 'Small hot pot of hamo and matsutake', '', 'À la carte', 'ask', 'no', 'October 2026.', 'hamo_nabe'),
      it('', '', 'Sea-bream rice in a clay pot', '', 'Rice', 'ask', 'no', 'January 2026.', 'taimeshi'),
      it('', '', 'Fig dengaku', '', 'À la carte', 'ask', 'ask', 'October 2026.', 'ichijiku'),
    ] }, {
    cuisine: '品のある京料理。予約でコース、またはアラカルトで (公式サイト、2025〜2026年)・年末の会席: 生麩の揚げ物と酒盗、かぶら蒸し、鰆・鯛・鰹のたたき・烏賊の造り、鴨と葱の鍋、銀鱈の焼き物、鯖寿司、鱧の梅肉と里芋の揚げ物 (2025年12月)・鱧と松茸 (2025年10月)・締めの鯛の土鍋ご飯 (2026年1月)・アラカルトの刺身の盛り合わせ、鱧と松茸の小鍋、栗チップス、イチジクの田楽 (2026年10月)',
    neighborhood: '下京区、四条の南',
    gf_detail: '要確認。出汁、刺身、揚げ物 (生麩など)、鯖寿司のある京料理のコースとアラカルト。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、鴨、鱧、鱈、出汁を全体に使う (2025〜2026年の口コミ)。',
    notes: '[京料理・下京、カウンターと2階] 落ち着いた和食の店。秋は鱧と松茸、締めに鯛の土鍋ご飯の会席を予約で、または刺身や小鍋をアラカルトで気軽に。1階はカウンター、2階は席。日曜定休。',
  });
}

// ================================================================ はせがわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26043746/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hasegawa_kissa_marutamachi', name: 'はせがわ (Hasegawa)', category: 'OMNI',
    lat: 35.016397, lng: 135.77015, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee and hot chocolate with a few sweets (gâteau chocolat, far breton, amande chocolat, pudding, ice cream); no ingredient information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-only; the sweets and hot chocolate are not described (2026 reviews).',
    hours_raw: 'Monday, Friday and Saturday 14:00–20:00; Tuesday 14:00–22:00; Sunday 13:00–18:00; closed Wednesday and Thursday; days off otherwise irregular — check Instagram (Tabelog; January 2026). Cash only: no cards or e-money (Tabelog). 8 seats at an L-shaped counter (Tabelog). Non-smoking (Tabelog). House rules: no groups of three or more, no photography, no PCs or tablets, no strong perfume; quiet conversation (Tabelog; January 2026). No sign; a business card by the door marks the entrance down a narrow passage of a white apartment building near Kawaramachi-Marutamachi (January, March and June 2026). Opened 8 August 2025 (Tabelog).',
    hours: { 0: day(['14:00', '20:00']), 1: day(['14:00', '22:00']), 4: day(['14:00', '20:00']), 5: day(['14:00', '20:00']), 6: day(['13:00', '18:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi — an unsigned door off a narrow passage',
    cuisine: 'A dim, signless coffee counter with no menu: the owner explains the offerings (January and March 2026) · nel-drip coffee, light, medium or strong, e.g. dark-roast Ethiopian; hot chocolate; hot wine (January, March and May 2026) · gâteau chocolat, far breton, amande chocolat, two ice creams, pudding (January and June 2026)',
    website: null, gmaps: gm('はせがわ 河原町丸太町 喫茶'), menu_url: TB,
    notes: '[Coffee counter · Kawaramachi-Marutamachi, hidden and quiet] A dark, eight-seat counter with no sign and no menu, run single-handed: nel-drip coffee to your preferred strength, rich hot chocolate and a few French sweets, in near-silence. House rules: one or two guests only, no photos, no laptops, no strong perfume. Cash only; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; runs it alone)'], origin: null,
      background: 'Reviewers say the owner runs the café alone (January and March 2026), and a May 2026 reviewer links it to the Tokyo café Kabuki, whose approach it follows. Opened in August 2025 (Tabelog).',
      philosophy: 'A quiet space in the spirit of the tea ceremony (March 2026 reviewer’s impression).', specialty: 'Nel-drip coffee; hot chocolate.',
      anecdotes: [
        { text: 'A September 2026 regular arriving just before the 20:00 close was served hot chocolate automatically — the owner remembered that coffee at night keeps this guest awake.', source: R + 'B522657313/' },
      ],
      japanese_sources_summary: '食べログ: はせがわ、喫茶店、中京区末丸町541-16 アイリス鴨川 1F、月・金・土 14:00〜20:00、火 14:00〜22:00、日 13:00〜18:00、水・木定休、不定休、2025年8月8日オープン、カード・電子マネー不可、L字カウンター8席、禁煙、禁止事項 (3名以上での入店、店内撮影、PC・タブレットの使用、強い香水)。口コミ (2026年、英語): 看板なし、入口に名刺、白い建物の細い通路の奥、暗い店内、メニューはなく口頭で説明、ネルドリップのコーヒー (浅・中・深、エチオピアの深煎り)、ホットチョコレート、ホットワイン、ガトーショコラ、ファーブルトン、アマンドショコラ、アイス2種、プリン、店主が一人で営む、東京のカフェ Kabuki の流れ。',
      confidence: 'low', sources: [TB, R + 'B520136132/', R + 'B520469137/', R + 'B521113865/', R + 'B522657313/', R + 'B523489245/', R + 'B525219011/', R + 'B527887206/', R + 'B530260411/', R + 'B530698580/'] },
    cultural_comfort: { level: 'japanese', note: 'Strict house rules: one or two guests, no photos, quiet; no menu.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区末丸町541-16 アイリス鴨川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened August 2025; reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.016397, 135.77015); cross-checked: GSI 京都府京都市中京区末丸町541番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520469137/'],
    price_note: 'No prices found (no menu; offerings explained verbally). Cash only.', last_checked: TODAY, items: [
      it('', '', 'Nel-drip coffee (light, medium or strong)', '', 'Drinks', 'gf', 'vegan', 'January and March 2026.', 'coffee'),
      it('', '', 'Hot chocolate', '', 'Drinks', 'ask', 'ask', 'January, May and September 2026.', 'chocolat'),
      it('', '', 'Gâteau chocolat', '', 'Sweets', 'ask', 'no', 'January 2026.', 'gateau'),
      it('', '', 'Far breton', '', 'Sweets', 'no', 'no', 'January 2026.', 'far'),
    ] }, {
    cuisine: 'メニューのない、看板もない薄暗いコーヒーのカウンター。店主が口頭で説明 (2026年1・3月)・浅・中・深から選ぶネルドリップのコーヒー (エチオピアの深煎りなど)、ホットチョコレート、ホットワイン (2026年1・3・5月)・ガトーショコラ、ファーブルトン、アマンドショコラ、アイス2種、プリン (2026年1・6月)',
    neighborhood: '河原町丸太町。看板のない扉、細い通路の奥',
    gf_detail: '要確認。コーヒーとホットチョコレートに、少しの甘味 (ガトーショコラ、ファーブルトン、アマンドショコラ、プリン、アイス)。原材料の情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性だが、甘味やホットチョコレートについては書かれていない (2026年の口コミ)。',
    notes: '[喫茶・河原町丸太町、隠れた静かな店] 看板もメニューもない、店主一人の暗い8席のカウンター。好みの濃さのネルドリップのコーヒー、濃厚なホットチョコレート、少しのフランス菓子を、ほぼ静寂の中で。決まりごと: 1〜2名まで、撮影禁止、PC禁止、強い香水禁止。現金のみ、水・木定休。',
  });
}

// ================================================================ オッティモ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007542/'; const R = TB + 'dtlrvwlst/';
  const HL = day(['11:30', '14:00'], ['17:00', '22:00']); const HF = day(['17:00', '22:00']); const HSS = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ottimo_ryogaemachi', name: 'オッティモ (ottimo)', category: 'OMNI',
    lat: 35.013411, lng: 135.758682, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade fresh pasta, lasagna and bread with antipasti and soup; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pesto linguine and the daily soup may or may not suit; cacio e pepe and lasagna use cheese; nothing is described as vegan (2025–2026 reviews).',
    hours_raw: 'Monday, Wednesday and Thursday lunch 11:30–14:00 (last orders 13:00) and dinner 17:00–22:00 (last orders 21:00); Friday dinner only; Saturday, Sunday and public holidays lunch 11:30–15:00 (last orders 14:00) and dinner; closed Tuesday and the second and fourth Mondays, with occasional extra closures (Tabelog). Coperto ¥330 a person (Tabelog, original コペルトとして、お一人様330円). Cards; no e-money or QR (Tabelog). 22 seats: 5 at the counter, 16 at tables (Tabelog). Non-smoking; ashtray at the entrance (Tabelog). Often fully booked — reserve (April and June 2025). In a residential street near Karasuma-Oike (June 2026).',
    hours: { 0: HL, 2: HL, 3: HL, 4: HF, 5: HSS, 6: HSS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Nijo — near Karasuma-Oike',
    cuisine: 'Homely Italian with homemade fresh pasta (April 2025; June 2026) · signature pappardelle cacio e pepe under a snow of parmesan; linguine al pesto; squid aglio e olio (May 2025; November 2025; June 2026) · lasagna (March and September 2025) · pasta lunch ¥2,000, appetizer or soup +¥500, dessert +¥500 (April 2025) · lunch with antipasti, soup, bread, pasta and coffee ¥2,500 (March 2026) · seasonal dishes with wine at dinner (April and June 2025)',
    website: null, gmaps: gm('オッティモ 京都 両替町'), menu_url: TB,
    notes: '[Italian · near Karasuma-Oike, fresh pasta] A small, homely Italian in a quiet street near Karasuma-Oike, known for its homemade pappardelle cacio e pepe buried in parmesan, its lasagna and generous lunch sets from ¥2,000. ¥330 coperto. Book — tables fill up. Closed Tuesday and the second and fourth Mondays.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'No operator or chef details were found.', philosophy: null, specialty: 'Homemade pappardelle cacio e pepe; lasagna.',
      anecdotes: [
        { text: 'A May 2025 repeat visitor upsized the cacio e pepe the second time round, cheese “like powdered snow”.', source: R + 'B502202996/' },
      ],
      japanese_sources_summary: '食べログ: オッティモ、イタリアン・パスタ、中京区両替町通二条下がる金吹町480 今人館 1F、月・水・木 11:30〜14:00 (L.O. 13:00)・17:00〜22:00 (L.O. 21:00)、金は夜のみ、土日祝日 11:30〜15:00 (L.O. 14:00)・夜、火曜・第2・第4月曜定休、コペルト1人330円、カード可、電子マネー・QR不可、22席 (カウンター5、テーブル16)、禁煙 (入口に灰皿)。口コミ (2025〜2026年、英語): 自家製の生パスタ、パッパルデッレのカチョエペペ、ペストのリングイネ、イカのアーリオオーリオ、ラザニア、パスタランチ2,000円 (前菜かスープ+500円、デザート+500円)、前菜・スープ・パン・パスタ・コーヒーのランチ2,500円、予約で満席になることも、烏丸御池近くの住宅街。',
      confidence: 'low', sources: [TB, R + 'B502202996/', R + 'B503817363/', R + 'B505147649/', R + 'B505601762/', R + 'B508121752/', R + 'B514012984/', R + 'B519015583/', R + 'B523524477/', R + 'B529771330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and busy; ¥330 coperto.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通二条下がる金吹町480 今人館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (35.013411, 135.758682); cross-checked: GSI 京都府京都市中京区金吹町480番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505601762/', R + 'B523524477/'],
    price_note: 'Prices from 2025–2026 reviews; ¥330 coperto.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch', '¥2,000', 'Lunch', 'no', 'ask', 'April 2025; appetizer or soup +¥500, dessert +¥500.', 'pasta_lunch'),
      it('', '', 'Lunch with antipasti, soup, bread, pasta and coffee', '¥2,500', 'Lunch', 'no', 'no', 'March 2026.', 'lunch_full'),
      it('', '', 'Pappardelle cacio e pepe', '', 'Pasta', 'no', 'no', 'May and November 2025; June 2026.', 'cacio_pepe'),
      it('', '', 'Lasagna', '', 'Pasta', 'no', 'no', 'March and September 2025.', 'lasagna'),
    ] }, {
    cuisine: '自家製の生パスタの家庭的なイタリアン (2025年4月、2026年6月)・名物のパルミジャーノが雪のようにかかったパッパルデッレのカチョエペペ、ペストのリングイネ、イカのアーリオオーリオ (2025年5・11月、2026年6月)・ラザニア (2025年3・9月)・パスタランチ2,000円、前菜かスープ+500円、デザート+500円 (2025年4月)・前菜、スープ、パン、パスタ、コーヒーのランチ2,500円 (2026年3月)・夜は季節の料理とワイン (2025年4・6月)',
    neighborhood: '両替町通、二条の南。烏丸御池の近く',
    gf_detail: '要確認。自家製の生パスタ、ラザニア、パンに前菜やスープ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ペストのリングイネや日替わりのスープは合うかもわからない。カチョエペペやラザニアはチーズを使う。ヴィーガンと書かれた品はない (2025〜2026年の口コミ)。',
    notes: '[イタリアン・烏丸御池近く、生パスタ] 烏丸御池近くの静かな通りの小さく家庭的なイタリアン。パルミジャーノに埋もれた自家製パッパルデッレのカチョエペペ、ラザニア、2,000円からのたっぷりのランチで知られる。コペルト330円。満席が多いので予約を。火曜・第2・第4月曜定休。',
  });
}

save();
