// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 75.
//   + 京都うまかもん 京都河原町店 Kyoto Umakamon (190-seat private-room izakaya with all-you-can-eat courses, Sanjo) — rest
//   + 京都祇園 川村 料理平 祇園北側店 Kawamura Ryorihei (kaiseki in a renovated Gion machiya) — rest
//   + 割烹 久久 Kappou Kyukyuu (eight-seat counter kappo with Chinese influences, Shijo) — rest
//   + 絵茶 Echa (art-themed café and night bar, Sanjo Kiyamachi) — rest
//   - skip 26044930 おうちごはん 中島家 三条木屋町 (same brand in data)
//   - skip 26036152 OMOカフェ OMO5京都三条 by 星野リゾート (large parent)
//   - skip 26019796 パパジョンズ 六角店 (same brand in data)
//   - skip 26020288 豆政 京都大丸店 (six 豆政 shops)
//   - skip 26045200 BONJIYA (thin: two reviews)
//   - skip 26018230 俵屋吉富 大丸京都店 (chain, earlier ruling 26018229)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: 俵屋吉富 is ruled a chain (26018229);
//   no rulings for うまかもん, 中島家, OMO, パパジョンズ, 豆政, 料理平/川村, BONJIYA, 久久 or 絵茶.
//   Same-name counts first (2026-11-07): 京都うまかもん — one Kyoto listing (the other Umakamon names on Tabelog are unrelated
//   Kyushu-style shops); operator not found. 川村 料理平 — one. 割烹 久久 — one. 絵茶 — one. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: うまかもん 「別途お通し代あり」; 料理平 「個室料10%」; 久久 「なし」; 絵茶 none listed. No
//   halal claims; no owner deaths; single-review remarks about other diners and staff left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044930', 'same-concept branch of a brand already in data: おうちごはん 中島家 — data has おうちごはん 中島家 (Ouchi Gohan Nakashima Ya) (https://tabelog.com/en/kyoto/A2601/A260202/26044930/).');
skip('26036152', 'large parent: OMO Cafe at OMO5 Kyoto Sanjo is run by Hoshino Resorts (https://tabelog.com/en/kyoto/A2601/A260202/26036152/).');
skip('26019796', 'same-concept branch of a brand already in data: パパジョンズ — data has パパジョンズ 今出川本店 (Papa Jon’s Imadegawa) (https://tabelog.com/en/kyoto/A2601/A260202/26019796/).');
skip('26020288', 'five or more same-name shops: Tabelog lists seven 豆政 shops (本店, 金閣寺境内売店, 大丸京都店, JR京都伊勢丹店, 昇龍苑店, 高島屋京都店, and a Kyoto Station Porta shop on hold) (https://tabelog.com/en/rstLst/?sw=%E8%B1%86%E6%94%BF).');
skip('26045200', 'thin: BONJIYA opened in July 2026 and Tabelog has two short reviews — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26045200/).');
skip('26018230', 'chain: 俵屋吉富 — five shops in our crawls, already ruled a chain at 26018229 (https://tabelog.com/en/kyoto/A2601/A260201/26018230/).');

// ================================================================ 京都うまかもん 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040784/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const FR = day(['17:00', '23:30']); const SA = day(['12:00', '23:30']); const SU = day(['12:00', '23:00']);
  put({
    id: 'kyoto_umakamon_kawaramachi', name: '京都うまかもん 京都河原町店 (Kyoto Umakamon Kawaramachi)', category: 'OMNI',
    lat: 35.009104, lng: 135.77024, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: monjayaki, takoyaki, gyoza and chicken nanban (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, yakitori, kara-age and chicken nanban (Tabelog; 2024–26 reviews).',
    hours_raw: 'Mon–Thu 17:00–23:00 (last orders food 22:00, drinks 22:30); Fri and the day before a holiday 17:00–23:30; Sat 12:00–23:30; Sun and holidays 12:00–23:00; closing days may vary (Tabelog). Appetizer charged separately (Tabelog, Japanese text: 「別途お通し代あり」). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 190 seats, all in private rooms, some with sunken kotatsu and doors (Tabelog; August 2025). Designated smoking area (Tabelog). aune Kyoto Sanjo 3F, Sanjo-Kawaramachi, 5 min from Hankyu Kawaramachi (Tabelog). Opened 1 March 2024 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Kawaramachi — Kyoto Kawaramachi',
    cuisine: 'Budget private-room izakaya with all-you-can-eat-and-drink plans: about 40 dishes for 3 hours ¥3,000, incl. salad, gyoza, seafood and yakitori; endless all-you-can-drink of about 100 drinks (Tabelog) · monjayaki or takoyaki you cook yourself (March 2024; January 2025) · all-you-can-eat-and-drink ¥3,000, +¥500 on Sundays (January 2025) · chicken nanban with kara-age, ¥1,000 at lunch (February 2026)',
    website: null, gmaps: gm('京都うまかもん 京都河原町店'), menu_url: TB,
    notes: '[Private-room izakaya · Sanjo-Kawaramachi] A huge third-floor izakaya by Sanjo-Kawaramachi where every table is a private room, built for groups on a budget: all-you-can-eat-and-drink plans from ¥3,000 with monjayaki or takoyaki to cook yourself, plus lunches such as chicken nanban for ¥1,000. Reviews are mixed on service speed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a 190-seat private-room izakaya opened in March 2024.',
      philosophy: null, specialty: 'All-you-can-eat-and-drink plans.',
      anecdotes: [
        { text: 'A January 2025 visitor after Ginkaku-ji had the ¥3,000 plan, paying ¥500 extra on a Sunday, and chose monjayaki.', source: R + 'B499146822/' },
        { text: 'An August 2025 group found the private room with a door and sunken kotatsu clean and comfortable.', source: R + 'B511382512/' },
        { text: 'A February 2026 lunch guest had chicken nanban with extra kara-age for ¥1,000.', source: R + 'B523354012/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・鍋、中京区三条河原町東入中島町90 aune京都三条 3F、阪急京都河原町駅1A出口から徒歩約5分、月〜木17:00〜23:00、金・祝日前日17:00〜23:30、土12:00〜23:30、日・祝日12:00〜23:00、不定休、お通し代別途、カード・電子マネー・QR 可、190席 (全席個室)、分煙、2024年3月1日オープン、3時間40品の食べ放題3,000円、約100種の飲み放題。口コミ (2024年3月〜2026年10月、英語): 食べ放題・飲み放題3,000円 (日曜は+500円)、自分で焼くもんじゃ焼きとたこ焼き、扉付きの掘りごたつの個室、昼のチキン南蛮とからあげ1,000円、提供の速さは賛否。',
      confidence: 'low', sources: [TB, R + 'B481975277/', R + 'B490112538/', R + 'B495860183/', R + 'B499146822/', R + 'B499784640/', R + 'B500152842/', R + 'B511382512/', R + 'B523354012/', R + 'B536871409/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a plan in advance; private rooms suit groups. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条河原町東入中島町90 aune京都三条 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009104, 135.770240); cross-checked: GSI 京都府京都市中京区中島町90番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B499146822/', R + 'B523354012/'],
    price_note: 'Plan prices from Tabelog and January 2025; lunch from February 2026; appetizer extra.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat and drink (3 hours, about 40 dishes)', '¥3,000', 'Plans', 'no', 'no', '+¥500 on Sundays (January 2025).', 'tabehodai'),
      it('', '', 'Chicken nanban with kara-age (lunch)', '¥1,000', 'Lunch', 'no', 'no', 'February 2026.', 'nanban'),
    ] }, {
    cuisine: '食べ放題・飲み放題のプランのある手頃な個室居酒屋。サラダ、餃子、海鮮、焼鳥など約40品3時間で3,000円、約100種の飲み放題 (食べログ)・自分で焼くもんじゃ焼きかたこ焼き (2024年3月、2025年1月)・食べ放題・飲み放題3,000円、日曜は+500円 (2025年1月)・昼のチキン南蛮とからあげ1,000円 (2026年2月)',
    neighborhood: '三条河原町。京都河原町',
    gf_detail: 'グルテンフリーではない。もんじゃ焼き、たこ焼き、餃子、チキン南蛮 (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮、焼鳥、からあげ、チキン南蛮 (食べログ、2024〜2026年の口コミ)。',
    notes: '[個室居酒屋・三条河原町] 三条河原町のビル3階の、全席個室の大きな居酒屋。手頃な食べ放題・飲み放題のプランは3,000円から、自分で焼くもんじゃ焼きやたこ焼き。昼はチキン南蛮1,000円など。提供の速さの評価は分かれる。',
  });
}

// ================================================================ 京都祇園 川村 料理平 祇園北側店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027248/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_kawamura_ryorihei_gion', name: '京都祇園 川村 料理平 祇園北側店 (Kyoto Gion Kawamura Ryorihei)', category: 'OMNI',
    lat: 35.005228, lng: 135.775887, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include yuba tempura and tofu-flower croquettes (January 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled kinmedai, meat sushi and dashi-simmered dishes (2024–26 reviews).',
    hours_raw: 'Daily 11:30–15:00 (last order 14:00) and 17:00–23:00 (last orders food 21:00, drinks 22:00); closed over New Year (Tabelog). Courses only — no à la carte additions (November 2025). Private-room charge 10% (Tabelog, Japanese text: 「個室料10%」). Cards; no e-money or QR (Tabelog). 49 seats: an 8-seat counter, tables and private rooms on two floors, joinable for up to 34 (Tabelog). Non-smoking (Tabelog). A renovated machiya at the end of a car-free alley east of Hanamikoji, next door south of 山玄茶 Sangencha (kyoto_sangencha_gion, which shares the 347-96 address; Tabelog’s English calls it Yamagencha) (Tabelog). Opened 15 April 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north side, east of Hanamikoji — Gion-Shijo',
    cuisine: 'Reasonably priced kaiseki in a renovated machiya with counter, tables and private rooms (Tabelog) · all-you-can-drink course with appetizers, sashimi, grilled fish and meat sushi (March 2024) · delicate Kyoto flavours (June 2024) · courses only; basic flavours (November 2025) · kaiseki of seasonal appetizers and sashimi, simmered fish and vegetables, yuba tempura and tofu-flower croquette, salt-grilled kinmedai, vegetable dengaku (January 2026)',
    website: null, gmaps: gm('京都祇園 川村 料理平'), menu_url: TB,
    notes: '[Kaiseki · Gion back alley, since 2016] A renovated machiya down a car-free lane east of Hanamikoji with a counter and private rooms, serving set kaiseki at moderate prices — sashimi, yuba tempura, salt-grilled kinmedai, vegetable dengaku — at lunch and dinner. Reviews are mixed on value and service; courses only. 10% private-room charge.',
    chef_bio: { chef_name: null, roles: ['Chef/owner (unnamed), described as welcoming (June 2024)'], origin: null,
      background: 'Per Tabelog: a kaiseki restaurant opened in April 2016 in a renovated machiya on a back alley of Gion, for business dinners, family gatherings and parties.',
      philosophy: null, specialty: 'Kaiseki courses in private rooms.',
      anecdotes: [
        { text: 'A January 2026 diner in a private room found the seasonal appetizers and sashimi already laid out, and singled out the yuba tempura and grilled kinmedai.', source: R + 'B520244331/' },
        { text: 'A June 2024 first-timer, arriving early, was welcomed warmly by the owner and found the place reserved for the group alone.', source: R + 'B487097780/' },
        { text: 'A November 2025 diner hoped to add à la carte dishes to the cheapest course but found only courses were offered.', source: R + 'B516421348/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・天ぷら、東山区祇園町北側347-96、京阪四条駅9番出口から花見小路を越え、車の入れない路地の突き当たりを左、山玄茶の南隣、毎日11:30〜15:00 (L.O. 14:00) と17:00〜23:00 (L.O. 料理21:00、ドリンク22:00)、年末年始休み、個室料10%、カード可、電子マネー・QR 不可、49席 (カウンター8、テーブル、個室、最大34名)、禁煙、2016年4月15日オープン、町家を改装した会席。口コミ (2016年5月〜2026年3月、英語): 飲み放題のコース、刺身、焼き魚、肉寿司、京の上品な味、コースのみ、湯葉の天ぷら、豆腐のコロッケ、金目鯛の塩焼き、野菜の田楽、静かで手頃。',
      confidence: 'medium', sources: [TB, R + 'B258524329/', R + 'B269937399/', R + 'B408723378/', R + 'B433614365/', R + 'B457800061/', R + 'B466346204/', R + 'B481559225/', R + 'B487097780/', R + 'B492330790/', R + 'B516421348/', R + 'B520244331/', R + 'B524090865/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course in advance; private rooms available. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-96',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.005228, 135.775887); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices in the sources; reviewers report ¥4,000–7,999 per person; 10% private-room charge.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', '', 'Courses', 'no', 'no', '2024–26 reviews.', 'kaiseki'),
    ] }, {
    cuisine: '町家を改装し、カウンター、テーブル、個室のある手頃な会席 (食べログ)・前菜、刺身、焼き魚、肉寿司の飲み放題のコース (2024年3月)・京都らしい上品な味 (2024年6月)・コースのみ、基本に忠実な味 (2025年11月)・季節の前菜と刺身、魚と野菜の炊き合わせ、湯葉の天ぷらと豆腐のコロッケ、金目鯛の塩焼き、野菜の田楽の会席 (2026年1月)',
    neighborhood: '祇園町北側、花見小路の東。祇園四条',
    gf_detail: 'グルテンフリーではない。コースに湯葉の天ぷらや豆腐のコロッケ (2026年1月)。',
    vegan_detail: 'ヴィーガン不可。刺身、金目鯛の塩焼き、肉寿司、出汁の炊き合わせ (2024〜2026年の口コミ)。',
    notes: '[会席・祇園の路地、2016年から] 花見小路の東、車の入れない路地の町家を改装した店。カウンターと個室で、刺身、湯葉の天ぷら、金目鯛の塩焼き、野菜の田楽などの手頃な会席を昼も夜も。値段やサービスの評価は分かれる。コースのみ。個室料10%。',
  });
}

// ================================================================ 割烹 久久
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033710/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kappo_kyukyu_shijo', name: '割烹 久久 (Kappou Kyukyuu)', category: 'OMNI',
    lat: 34.99991, lng: 135.763014, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the course has included a breaded pork cutlet, with soy-based seasoning (December 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: barracuda sashimi, pork cutlet, beef (December 2025).',
    hours_raw: 'Mon, Tue and Thu–Sun 18:00–22:00; closed Wednesday (Tabelog). Reservations accepted, incl. online (Tabelog; November 2021). No service charge (Tabelog, Japanese text: 「なし」). Cards (incl. UnionPay), e-money and PayPay (Tabelog). 8 counter seats (Tabelog). Non-smoking (Tabelog). Chinese spoken (July 2023; December 2025). 5 min from Shijo (Tabelog). Opened 2 February 2020 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Shijo-Karasuma — Shijo',
    cuisine: 'Counter kappo of seasonal Kyoto ingredients from specialist shops and wholesalers, shaped by aroma and texture, with spices and ideas from the chef\'s time in China (Tabelog) · six-dish omakase ¥8,000, adjusted for a small appetite (November 2021) · Kyoto cuisine with creative touches (July 2023) · pork cutlet with cranberry sauce; beef with fermented tofu; barracuda sashimi; a dessert in the style of rock-sugar pear (December 2025)',
    website: null, gmaps: gm('割烹 久久 京都'), menu_url: TB,
    notes: '[Counter kappo · Shijo, since 2020] An eight-seat counter near Shijo-Karasuma where the chef cooks seasonal Kyoto produce with spices and ideas from time in China — pork cutlet with cranberry, beef with fermented tofu, barracuda sashimi — and speaks Chinese. Omakase by reservation; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef/owner (unnamed); spent time in China (Tabelog); speaks Chinese (2023–25 reviews)'], origin: null,
      background: 'Per Tabelog: a counter kappo opened in February 2020, sourcing seasonal ingredients through Kyoto specialist shops and wholesalers and adding sensibilities from the chef’s time in China. A July 2023 visitor found it through the chef’s TikTok.',
      philosophy: 'Distinct flavours built on aroma and texture, letting the ingredients’ natural qualities show (Tabelog).', specialty: 'Kyoto kappo with Chinese influences.',
      anecdotes: [
        { text: 'A November 2021 diner who mentioned a small appetite was given a lighter six-dish omakase.', source: R + 'B443642085/' },
        { text: 'A July 2023 visitor came after watching the chef on TikTok.', source: R + 'B499771139/' },
        { text: 'A December 2025 diner noted Chinese touches throughout, from cranberry pork cutlet to a rock-sugar-pear-style dessert.', source: R + 'B518366941/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・海鮮、下京区泉正寺町465-1、地下鉄四条駅から徒歩5分、月・火・木〜日18:00〜22:00、水曜休み、サービス料なし、カード・電子マネー・PayPay 可、カウンター8席、禁煙、2020年2月2日オープン、京都の専門店や問屋から仕入れる季節の食材、香りと食感、中国で過ごした経験からの香辛料や発想。口コミ (2021年11月〜2025年12月、英語): おまかせ6品8,000円、京料理に創作、中国語が通じる、クランベリーソースの豚カツ、腐乳の牛肉、カマスの刺身。',
      confidence: 'low', sources: [TB, R + 'B443642085/', R + 'B460050755/', R + 'B462275364/', R + 'B479648608/', R + 'B499771139/', R + 'B518366941/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese is spoken (2023–25 reviews); mention appetite and dislikes when booking. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区泉正寺町465-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (34.999910, 135.763014); cross-checked: GSI 京都府京都市下京区泉正寺町465番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B443642085/'],
    price_note: 'One course price from November 2021; reviewers report ¥10,000–19,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (6 dishes)', '¥8,000', 'Courses', 'ask', 'no', 'November 2021.', 'omakase'),
    ] }, {
    cuisine: '京都の専門店や問屋から仕入れる季節の食材を香りと食感で仕立て、中国で過ごした経験からの香辛料や発想を加えるカウンターの割烹 (食べログ)・6品のおまかせ8,000円、少食にも対応 (2021年11月)・京料理に創作 (2023年7月)・クランベリーソースの豚カツ、腐乳の牛肉、カマスの刺身、氷砂糖と梨のデザートのような甘味 (2025年12月)',
    neighborhood: '四条烏丸の南。四条',
    gf_detail: 'グルテンフリーではない。コースに豚カツ、醤油の味付け (2025年12月)。',
    vegan_detail: 'ヴィーガン不可。カマスの刺身、豚カツ、牛肉 (2025年12月)。',
    notes: '[カウンター割烹・四条、2020年から] 四条烏丸近くのカウンター8席の割烹。中国で過ごした料理人が、京都の季節の食材に香辛料や発想を合わせる。クランベリーの豚カツ、腐乳の牛肉、カマスの刺身。中国語も通じる。おまかせは予約で。水曜休み。',
  });
}

// ================================================================ 絵茶
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045272/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '00:00']);
  put({
    id: 'kyoto_echa_art_cafe_sanjo', name: '絵茶 (Echa)', category: 'OMNI',
    lat: 35.009492, lng: 135.770297, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fondant chocolat, Basque cheesecake and cookies (2026 reviews); no gluten information on the drinks.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lattes and desserts use dairy, but sodas, Americano and some art drinks may suit (2026 reviews); no vegan information.',
    hours_raw: 'Mon, Tue and Thu–Sun 13:00–0:00; closed Wednesday (Tabelog). Café by day, bar with alcohol at night (June and August 2026). Reservations via Tabelog (October 2026). Cards (incl. UnionPay), e-money and QR (Tabelog). 24 seats incl. a counter (Tabelog; September 2026). Heated tobacco only, from 19:00 (Tabelog). USEN.X Building 3F, Ebisucho, near Sanjo-Kiyamachi (Tabelog; June 2026). Opened 1 June 2026 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Kiyamachi — Kyoto Shiyakusho-mae / Sanjo',
    cuisine: 'Art café and night bar: drinks inspired by famous paintings, each served with a book on the artist — Van Gogh "Sunflower Blessing" ¥1,200, Hokusai matcha float ¥1,100, Dalí "Melting Memory" latte with a chocolate clock ¥1,200, Munch "Scream Twilight" soda ¥950 (June 2026) · matcha Basque cheesecake (July and August 2026) · fondant chocolat with Americano as a discounted set (September 2026) · strawberry fondant chocolat with chocolate-pen ghost and seasonal cookies (October 2026) · alcohol-ink art and drawing workshops (August and September 2026)',
    website: null, gmaps: gm('絵茶 ECHA 京都'), menu_url: TB,
    notes: '[Art café and night bar · Sanjo, since 2026] A dim, star-lit third-floor café near Sanjo-Kiyamachi with antique furniture and walls of paintings, serving drinks themed on Van Gogh, Hokusai, Dalí and Munch — each brought with a book on the artist — plus matcha Basque cheesecake and fondant chocolat, and alcohol-ink art workshops. Café by afternoon, bar until midnight. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an art-themed café opened in June 2026, with an experience space for art activities and a regular café area.',
      philosophy: null, specialty: 'Art-inspired drinks and desserts.',
      anecdotes: [
        { text: 'A July 2026 pair tried the Dalí latte, with a melting chocolate clock on top, and the Hokusai matcha float.', source: R + 'B532419696/' },
        { text: 'An August 2026 visitor liked being lent a book on the artist while waiting for the drink.', source: R + 'B535444589/' },
        { text: 'An October 2026 guest’s fondant chocolat came with a chocolate-pen ghost and bat and pumpkin cookies.', source: R + 'B538213979/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー、中京区恵比須町534-31 USEN.Xビル 3F、地下鉄京都市役所前駅から徒歩7分、月・火・木〜日13:00〜24:00、水曜休み、カード・電子マネー・QR 可、24席、加熱式たばこのみ19時から、2026年6月1日オープン。口コミ (2026年6月〜10月、英語): 名画をモチーフにしたドリンクと画家の本 (ゴッホ1,200円、北斎の抹茶フロート1,100円、ダリのラテ1,200円、ムンクのソーダ950円)、抹茶のバスクチーズケーキ、フォンダンショコラ、夜はバー、アルコールインクアートの体験。',
      confidence: 'medium', sources: [TB, R + 'B530189310/', R + 'B530434224/', R + 'B532419696/', R + 'B533893296/', R + 'B534081235/', R + 'B535109620/', R + 'B535444589/', R + 'B535961373/', R + 'B536385585/', R + 'B537599379/', R + 'B538213979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick an art drink from the menu; counter seats suit solo visitors (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-31 USEN.Xビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009555, 135.770297), offset 7 m south: kyr_namae_no_nai_ramen_ya sat 2.2 m away; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530434224/'],
    price_note: 'Art-drink prices from June 2026.', last_checked: TODAY, items: [
      it('', '', 'Dalí "Melting Memory" latte', '¥1,200', 'Art drinks', 'ask', 'no', 'June 2026.', 'dali'),
      it('', '', 'Van Gogh "Sunflower Blessing"', '¥1,200', 'Art drinks', 'ask', 'ask', 'White-bean-paste sunflower; June 2026.', 'van_gogh'),
      it('', '', 'Hokusai matcha float', '¥1,100', 'Art drinks', 'ask', 'no', 'June 2026.', 'hokusai'),
      it('', '', 'Munch "Scream Twilight" soda', '¥950', 'Art drinks', 'ask', 'ask', 'June 2026.', 'munch'),
      it('', '', 'Matcha Basque cheesecake', '', 'Desserts', 'no', 'no', 'July and August 2026.', 'basque'),
    ] }, {
    cuisine: '名画をモチーフにしたドリンクを画家の本とともに出すアートカフェとバー。ゴッホの Sunflower Blessing 1,200円、北斎の抹茶フロート1,100円、チョコの時計をのせたダリの Melting Memory ラテ1,200円、ムンクの Scream Twilight ソーダ950円 (2026年6月)・抹茶のバスクチーズケーキ (2026年7・8月)・フォンダンショコラとアメリカーノのお得なセット (2026年9月)・チョコペンのおばけと季節のクッキーを添えたいちごのフォンダンショコラ (2026年10月)・アルコールインクアートや絵を描く体験 (2026年8・9月)',
    neighborhood: '三条木屋町。京都市役所前・三条',
    gf_detail: 'グルテンフリーではない。フォンダンショコラ、バスクチーズケーキ、クッキー (2026年の口コミ)。ドリンクのグルテンの情報はない。',
    vegan_detail: '要確認。ラテやデザートは乳製品を使うが、ソーダ、アメリカーノ、一部のアートドリンクは合うかもしれない (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[アートカフェとバー・三条、2026年から] 三条木屋町近くのビル3階、星と月の灯りの薄暗い店内にアンティークの家具と絵が並ぶ。ゴッホ、北斎、ダリ、ムンクをモチーフにしたドリンクを画家の本とともに。抹茶のバスクチーズケーキやフォンダンショコラ、アルコールインクアートの体験も。昼はカフェ、夜は深夜0時までバー。水曜休み。',
  });
}

save();
