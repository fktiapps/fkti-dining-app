// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 103.
//   + 滝の家 Taki no Ie (teahouse inside the Kiyomizu-dera grounds by Otowa Falls: yudofu, udon, ohagi and matcha)
//   + ハットリー Hattory (coffee shop at Shijo-Omiya since 1947, third generation; smoking throughout)
//   + 孫右ェ門 Magoemon (nine-seat machiya café behind a gate near Karasuma-Oike; bar on weekend evenings)
//   + カメちゃん Kame Chan (local okonomiyaki and mambo-yaki near Kyoto Station)
//   - マメバコ, ひな野 京都市動物園店, 本家 西尾八ツ橋 熊野店, キャッスル ゲート: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032196 (skipped), 26002922,
//   26026136 (skipped), 26013122, 26025200, 26022362 (skipped), 26035226, 26007626 (skipped).
//   queue-status.jsonl grepped for each brand (マメバコ, 滝の家, ひな野, ハットリー, 孫右ェ門, 西尾八ツ橋, カメちゃん, キャッスル):
//   本家西尾八ッ橋 has an earlier large-parent ruling (26027207).
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or
//   address. 山本まんぼ (in data) sits 7.7 m from カメちゃん’s Tabelog point — a different shop; see pin note.
//   Same-name count: ひな野 — a national buffet chain of 40–50 shops founded in Sendai (travel articles); one shop each for
//   the four drafted; operators not found.
//   Service charges, checked against the Japanese original: キャッスル ゲート 表示料金に含まれてます; none listed for the
//   drafted shops.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-103');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032196', 'マメバコ: too thin — a coffee stand with one 2025–2026 review (May 2026)');
skip('26026136', 'ひな野 京都市動物園店: chain — ひな野, a national buffet chain of 40–50 shops founded in Sendai (travel articles; Tabelog name search, 2026-11-08)');
skip('26022362', '本家 西尾八ツ橋 熊野店: large parent — 本家西尾八ッ橋 lists about a dozen shops (same ruling as 26027207)');
skip('26007626', 'large parent: hotel bar — キャッスル ゲート is in the 京都全日空ホテル (Tabelog address), a hotel of the ANA hotel brand (big-chain-hotel ruling, Greg 2026-11-08); also no reviews dated 2025–2026');

// ================================================================ 滝の家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002922/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '16:30']);
  put({
    id: 'kyoto_takinoie_kiyomizudera', name: '滝の家 (Taki no Ie)', category: 'OMNI',
    lat: 34.994306, lng: 135.785187, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu with a bonito-flavoured soy dipping sauce, udon and soba, ohagi, amazake and shaved ice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the yudofu sauce is bonito-flavoured and the noodle broths are dashi; egg on tsukimi soba (2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 10:00–16:30; closed Thursday (Tabelog). Cash only: no cards or e-money (Tabelog; March 2026). 60 seats, incl. outdoor seats and window tables looking out on the Otowa Falls queue (Tabelog; February and December 2025). Non-smoking (Tabelog). Inside the Kiyomizu-dera grounds, near Otowa Falls (Tabelog; October 2026). Fills up soon after 10:00 (March 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-dera grounds — by Otowa Falls',
    cuisine: 'A historic teahouse within Kiyomizu-dera (March 2026) · yudofu with beer, the dipping sauce worth asking for more of (February and March 2026) · tsukimi soba (March 2026) · special udon and special soba (December 2025; March 2026) · matcha with ohagi; amazake (January and February 2026) · Uji kintoki milk shaved ice (August 2026)',
    website: null, gmaps: gm('滝の家 清水寺'), menu_url: TB,
    notes: '[Teahouse · inside Kiyomizu-dera, by Otowa Falls] A long-standing teahouse in the temple grounds, below the main hall by Otowa Falls: hot yudofu with beer, udon and soba, matcha with ohagi, amazake and summer shaved ice, at outdoor seats or windows facing the falls. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or history details were found; reviewers describe a historic teahouse in the temple grounds (March 2026).',
      philosophy: null, specialty: 'Yudofu.',
      anecdotes: [
        { text: 'A March 2026 regular admitted to visiting Kiyomizu-dera largely for the yudofu and beer here.', source: R + 'B345697757/' },
      ],
      japanese_sources_summary: '食べログ: 滝の家、うどん・豆腐料理・甘味処、東山区清水1-302 清水寺境内、月〜水・金〜日 10:00〜16:30、木曜定休、カード・電子マネー不可、60席、禁煙。口コミ (2025〜2026年、英語): 清水寺境内の歴史ある茶屋、湯豆腐とビール、鰹風味の醤油のつけだれ、月見そば、特製うどん・そば、抹茶とおはぎ、甘酒、宇治金時ミルクのかき氷、屋外の席、窓から音羽の滝の行列が見える、現金のみ、10時過ぎにすぐ満席。',
      confidence: 'low', sources: [TB, R + 'B345697757/', R + 'B521472850/', R + 'B521867081/', R + 'B522197862/', R + 'B523843101/', R + 'B525354033/', R + 'B529639348/', R + 'B531616596/', R + 'B533571736/', R + 'B537825149/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Temple teahouse; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1-302 清水寺境内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.994306, 135.785187); GSI places only 清水一丁目; OSM reverse gives the node 瀧の家 on 音羽道 — precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523843101/'],
    price_note: 'No prices found; cash only.', last_checked: TODAY, items: [
      it('', '', 'Yudofu', '', 'Tofu', 'ask', 'no', 'February, March and June 2026.', 'yudofu'),
      it('', '', 'Tsukimi soba', '', 'Noodles', 'no', 'no', 'March 2026.', 'tsukimi_soba'),
      it('', '', 'Matcha with ohagi', '', 'Sweets', 'ask', 'ask', 'January and February 2026.', 'matcha_ohagi'),
      it('', '', 'Uji kintoki milk shaved ice', '', 'Sweets', 'ask', 'no', 'August 2026.', 'kakigori'),
    ] }, {
    cuisine: '清水寺境内の歴史ある茶屋 (2026年3月)・湯豆腐とビール、おかわりしたくなるつけだれ (2026年2・3月)・月見そば (2026年3月)・特製うどん、特製そば (2025年12月、2026年3月)・抹茶とおはぎ、甘酒 (2026年1・2月)・宇治金時ミルクのかき氷 (2026年8月)',
    neighborhood: '清水寺境内。音羽の滝のそば',
    gf_detail: '要確認。鰹風味の醤油のつけだれの湯豆腐、うどん、そば、おはぎ、甘酒、かき氷。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。湯豆腐のたれは鰹風味、麺のつゆは出汁。月見そばには卵 (2026年の口コミ)。',
    notes: '[茶屋・清水寺境内、音羽の滝のそば] 本堂下の音羽の滝のそばにある、境内の昔からの茶屋。湯豆腐とビール、うどんやそば、抹茶とおはぎ、甘酒、夏はかき氷を、屋外の席や滝の見える窓辺で。現金のみ、木曜定休。',
  });
}

// ================================================================ ハットリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26013122/'; const R = TB + 'dtlrvwlst/';
  const HM = day(['07:30', '18:00']); const HT = day(['07:30', '20:00']); const HS = day(['08:00', '18:00']);
  put({
    id: 'kyoto_hattory_shijo_omiya', name: 'ハットリー (Hattory)', category: 'OMNI',
    lat: 35.003076, lng: 135.7491, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast and sandwich breakfast sets, omurice curry (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwiches, boiled-egg sets, omurice (2025–2026 reviews).',
    hours_raw: 'Monday 7:30–18:00; Tuesday–Saturday 7:30–20:00; Sundays and public holidays 8:00–18:00; breakfast until 11:00, lunch menu 11:00–14:00 and from 16:00 (Tabelog). Cash only (Tabelog, original 支払いは現金のみ対応). Smoking allowed at every seat, cigarettes included (September 2025; January and May 2026). Counter and table seats over two floors (Tabelog; December 2025). Right in front of Hankyu Omiya / Shijo-Omiya station (April 2025; January 2026). Founded 1947, run by a third generation (January 2026).',
    hours: { 0: HM, 1: HT, 2: HT, 3: HT, 4: HT, 5: HT, 6: HS }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-Omiya — in front of the station',
    cuisine: 'A long-established coffee shop with breakfast, lunch and coffee (2025–2026) · morning A set with toast (butter, jam or both), boiled egg and tea ¥620 (January 2026) · B set; egg toast sandwich with lettuce (May and September 2025) · daily lunch special (December 2025) · omurice curry (May 2026) · iced coffee ¥460 (April 2025)',
    website: null, gmaps: gm('ハットリー 四条大宮'), menu_url: TB,
    notes: '[Kissaten · Shijo-Omiya, since 1947] A traditional coffee shop facing Shijo-Omiya station, run by the third generation since 1947: toast-and-egg morning sets from 7:30, sandwiches, omurice curry and a daily lunch, in a calm, bar-like room where smoking is allowed everywhere. Cash only.',
    chef_bio: { chef_name: null, roles: ['Third-generation owners (unnamed)'], origin: 'Kyoto',
      background: 'A January 2026 reviewer describes Hattory as established in 1947 with a three-generation history. No operator details were found.',
      philosophy: null, specialty: 'Morning toast sets.',
      anecdotes: [
        { text: 'A May 2026 visitor noted smokers, short of places these days, contentedly puffing away over coffee and omurice curry.', source: R + 'B528489263/' },
      ],
      japanese_sources_summary: '食べログ: ハットリー、喫茶店・カレー・サンドイッチ、下京区大宮通四条下る四条大宮町18 1〜2F、月 7:30〜18:00、火〜土 7:30〜20:00、日・祝日 8:00〜18:00、モーニングは11時まで、ランチメニューは11:00〜14:00と16時から、支払いは現金のみ。口コミ (2025〜2026年、英語): 1947年創業、三代続く、阪急大宮駅の目の前、モーニングA (トースト・ゆで卵・紅茶) 620円、Bセット、卵とレタスのトーストサンド、日替わりランチ、オムライスカレー、アイスコーヒー460円、全席喫煙可 (紙巻きも)、バーのような落ち着いた雰囲気、カウンターとテーブル。',
      confidence: 'low', sources: [TB, R + 'B483089605/', R + 'B505598425/', R + 'B508455240/', R + 'B518193066/', R + 'B520710936/', R + 'B521547508/', R + 'B525500677/', R + 'B528489263/', R + 'B530973396/'] },
    cultural_comfort: { level: 'japanese', note: 'Smoking at every seat; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大宮通四条下る四条大宮町18 1～2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.003076, 135.7491); cross-checked: GSI 京都府京都市下京区四条大宮町18番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520710936/', R + 'B505598425/'],
    price_note: 'Prices from 2025–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Morning A set: toast, boiled egg, tea', '¥620', 'Morning', 'no', 'no', 'January 2026.', 'morning_a'),
      it('', '', 'Egg toast sandwich', '', 'Morning', 'no', 'no', 'September 2025.', 'egg_toast'),
      it('', '', 'Omurice curry', '', 'Lunch', 'no', 'no', 'May 2026.', 'omurice_curry'),
      it('', '', 'Iced coffee', '¥460', 'Drinks', 'gf', 'vegan', 'April 2025.', 'iced_coffee'),
    ] }, {
    cuisine: '朝食、昼食、コーヒーの老舗の喫茶店 (2025〜2026年)・トースト (バター、ジャム、両方)、ゆで卵、紅茶のモーニングAセット620円 (2026年1月)・Bセット、卵とレタスのトーストサンド (2025年5・9月)・日替わりランチ (2025年12月)・オムライスカレー (2026年5月)・アイスコーヒー460円 (2025年4月)',
    neighborhood: '四条大宮。駅の目の前',
    gf_detail: 'グルテンフリーではない。トーストやサンドイッチのモーニング、オムライスカレー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。卵のサンド、ゆで卵のセット、オムライス (2025〜2026年の口コミ)。',
    notes: '[喫茶・四条大宮、1947年創業] 四条大宮駅の向かい、1947年から三代続く昔ながらの喫茶店。7時半からトーストとゆで卵のモーニング、サンドイッチ、オムライスカレー、日替わりランチを、全席喫煙可の落ち着いたバーのような空間で。現金のみ。',
  });
}

// ================================================================ 孫右ェ門
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025200/'; const R = TB + 'dtlrvwlst/';
  const HD = day(['10:00', '16:30']); const HF = day(['10:00', '16:30'], ['19:00', '23:00']); const HSS = day(['19:00', '23:00']);
  put({
    id: 'kyoto_magoemon_machiya_cafe', name: '孫右ェ門 (Magoemon)', category: 'OMNI',
    lat: 35.016462, lng: 135.756985, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, ginger cocoa, Japanese black tea and homemade sweets such as chocolate tart and ice cream; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Japanese black tea and coffee are plant-only; the sweets are not described (2025–2026 reviews).',
    hours_raw: 'Café Monday–Friday 10:00–16:30; bar Friday–Sunday 19:00–23:00; days off irregular (Tabelog). Cards: AMEX (Tabelog). 9 seats with tatami and an engawa looking onto a garden (Tabelog; December 2025). Non-smoking (Tabelog). Through a temple-like gate and down a stone path in a quiet lane near Karasuma-Oike and Marutamachi (December 2025; April 2026). Open since 17 October 2012 (Tabelog).',
    hours: { 0: HD, 1: HD, 2: HD, 3: HD, 4: HF, 5: HSS, 6: HSS }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Karasuma-Oike and Marutamachi — a quiet back lane',
    cuisine: 'A quiet machiya café with homemade sweets, turning bar on weekend evenings (Tabelog; 2025–2026) · ginger cocoa; chocolate tart topped with coffee beans (December 2025) · domestic Yabukita-cultivar black tea; ice cream (April 2026)',
    website: null, gmaps: gm('孫右ェ門 京都'), menu_url: TB,
    notes: '[Machiya café · near Karasuma-Oike, garden and tatami] A nine-seat café in a traditional townhouse reached through a gate and along a stone path: tatami, an engawa over a small garden, ginger cocoa, Japanese black tea and homemade tarts, in near-silence. Café on weekdays; bar on Friday to Sunday evenings.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Open since October 2012 (Tabelog). No operator details were found.', philosophy: null, specialty: 'Homemade sweets; Japanese black tea.',
      anecdotes: [
        { text: 'An April 2026 mother and daughter stopped here after the Imperial Palace for domestic black tea and ice cream in the calm of the townhouse.', source: R + 'B527047435/' },
      ],
      japanese_sources_summary: '食べログ: 孫右ェ門、喫茶店・バー、中京区玉植町244-1、月〜木 10:00〜16:30、金 10:00〜16:30・19:00〜23:00、土日 19:00〜23:00、不定休、2012年10月17日オープン、カードはAMEX、9席、禁煙。口コミ (2025〜2026年、英語): 寺のような門から石畳を進む町家、縁側から庭、畳の香り、生姜のココア、コーヒー豆をのせたチョコレートタルト、やぶきた品種の国産紅茶、アイスクリーム、自家製の甘味、烏丸御池・丸太町の路地。',
      confidence: 'low', sources: [TB, R + 'B513564131/', R + 'B514407730/', R + 'B518963863/', R + 'B527047435/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet tatami café; small.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区玉植町244-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2025 to April 2026.' },
    pin_source: `Tabelog ${TB} (35.016462, 135.756985); cross-checked: GSI 京都府京都市中京区玉植町244番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518963863/'],
    price_note: 'No prices found.', last_checked: TODAY, items: [
      it('', '', 'Ginger cocoa', '', 'Drinks', 'ask', 'ask', 'December 2025.', 'ginger_cocoa'),
      it('', '', 'Chocolate tart', '', 'Sweets', 'no', 'no', 'December 2025.', 'tart'),
      it('', '', 'Japanese black tea (Yabukita)', '', 'Drinks', 'gf', 'vegan', 'April 2026.', 'wakocha'),
    ] }, {
    cuisine: '自家製の甘味の静かな町家のカフェ、週末の夜はバー (食べログ、2025〜2026年)・生姜のココア、コーヒー豆をのせたチョコレートタルト (2025年12月)・やぶきた品種の国産紅茶、アイスクリーム (2026年4月)',
    neighborhood: '烏丸御池・丸太町の近く。静かな路地',
    gf_detail: '要確認。コーヒー、生姜のココア、国産紅茶、チョコレートタルトやアイスなどの自家製の甘味。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。国産紅茶とコーヒーは植物性。甘味については書かれていない (2025〜2026年の口コミ)。',
    notes: '[町家カフェ・烏丸御池近く、庭と畳] 門をくぐり石畳を進む町家の9席のカフェ。畳、小さな庭に面した縁側、生姜のココア、国産紅茶、自家製のタルトを静けさの中で。平日はカフェ、金〜日の夜はバー。',
  });
}

// ================================================================ カメちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26035226/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '13:00'], ['16:00', '19:30']);
  put({
    id: 'kyoto_kamechan_okonomiyaki', name: 'カメちゃん (Kame Chan)', category: 'OMNI',
    lat: 34.988007, lng: 135.762818, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, mambo-yaki and yakisoba (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg, squid, beef tendon and pork (2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 10:30–13:00 and 16:00–19:30; closed Sunday and Monday (Tabelog). Cash only: no cards or e-money (Tabelog). Smoking allowed (Tabelog). The owner cooks everything on a central teppan (March 2025). On the ground floor of a housing block down a side street, about 8 min from Kyoto Station’s central exit (August 2025; January 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South of Shichijo — 8 min from Kyoto Station',
    cuisine: 'A local okonomiyaki shop in the neighbourhood’s okonomiyaki quarter (August 2025) · mambo-yaki (cabbage and yakisoba under an egg), large ¥1,100 (August 2025) · okonomiyaki ¥900; yakisoba ¥900, packed with cabbage (March 2025) · small mambo-yaki with extra squid and green onion; negiyaki with beef tendon; chive and egg (September 2026)',
    website: null, gmaps: gm('カメちゃん お好み焼き 京都'), menu_url: TB,
    notes: '[Okonomiyaki · near Kyoto Station, local] A no-frills neighbourhood okonomiyaki counter in a housing block south of Kyoto Station, where the owner turns out huge, cheap mambo-yaki, okonomiyaki and yakisoba on one big teppan. Short lunch and early-evening hours; cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A March 2025 reviewer describes the owner cooking every order on a central teppan and pressing each okonomiyaki at the end. No operator was found.',
      philosophy: null, specialty: 'Mambo-yaki.',
      anecdotes: [
        { text: 'A January 2026 visitor, struck by a sudden craving for greasy okonomiyaki at Kyoto Station, walked eight minutes here for a mambo-yaki.', source: R + 'B520698446/' },
      ],
      japanese_sources_summary: '食べログ: カメちゃん、お好み焼き、下京区小稲荷町61、火〜土 10:30〜13:00・16:00〜19:30、日・月曜定休、カード・電子マネー不可、喫煙可。口コミ (2025〜2026年、英語): 京都駅から徒歩5〜8分のお好み焼きの多い地域、公営住宅の1階、まんぼ焼き大1,100円、お好み焼き900円、焼きそば900円、キャベツたっぷり、店主が中央の鉄板で焼き最後に押さえる、まんぼ焼き小にイカとねぎ増し、牛すじのねぎ焼き、ニラ玉。',
      confidence: 'low', sources: [TB, R + 'B444001128/', R + 'B453470634/', R + 'B504359547/', R + 'B515043081/', R + 'B520698446/'] },
    cultural_comfort: { level: 'japanese', note: 'Local counter; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区小稲荷町61',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.988007, 135.762818); cross-checked: GSI 京都府京都市下京区小稲荷町61番地 (lot) 26m; 山本まんぼ (kyoto record, a different shop) is 7.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B444001128/', R + 'B504359547/'],
    price_note: 'Prices from 2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Mambo-yaki, large', '¥1,100', 'Okonomiyaki', 'no', 'no', 'August 2025.', 'manbo'),
      it('', '', 'Okonomiyaki', '¥900', 'Okonomiyaki', 'no', 'no', 'March 2025.', 'okonomiyaki'),
      it('', '', 'Yakisoba', '¥900', 'Noodles', 'no', 'no', 'March 2025.', 'yakisoba'),
      it('', '', 'Negiyaki with beef tendon', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'negiyaki'),
    ] }, {
    cuisine: 'お好み焼きの店が多い地域の近所のお好み焼き店 (2025年8月)・キャベツと焼きそばを卵で包むまんぼ焼き、大1,100円 (2025年8月)・お好み焼き900円、キャベツたっぷりの焼きそば900円 (2025年3月)・イカとねぎ増しのまんぼ焼き小、牛すじのねぎ焼き、ニラ玉 (2026年9月)',
    neighborhood: '七条の南。京都駅から徒歩8分',
    gf_detail: 'グルテンフリーではない。お好み焼き、まんぼ焼き、焼きそば (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。卵、イカ、牛すじ、豚 (2025〜2026年の口コミ)。',
    notes: '[お好み焼き・京都駅近く、地元の店] 京都駅の南の集合住宅の1階にある飾らない近所のお好み焼き店。店主が大きな鉄板一枚で、大きくて安いまんぼ焼き、お好み焼き、焼きそばを焼く。昼と夕方の短い営業、現金のみ、喫煙可。',
  });
}

save();
