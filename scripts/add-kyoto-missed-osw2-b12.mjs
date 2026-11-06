// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 12.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 四川料理と酒Yuan (Sichuan to Sake Yuan; 19-seat Sichuan kitchen in the 鍵屋小路会館, since January 2026)
//   + BISTRO MAUMU (late-night Paris-style wine bistro off Ayakoji near Karasuma; since May 2024)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - FUKUNAGA901 (26030973) skipped: chain — a café brand of 株式会社フクナガ (founded 1930; 151 staff, ¥6.02 bn sales in 2025),
//     whose 名代とんかつ かつくら alone has 4 Kyoto branches in the Tabelog crawl (京都ポルタ店, 四条寺町店, 四条東洞院店,
//     銀閣寺店) plus 枚方モール店 on katsukura.jp — 5+ shops of the parent’s main brand; sub-brand of a large parent.
//   + 鳥の木珈琲 Torinoki Coffee (11-seat coffee house near the Imperial Palace; since 2014)
//   + 韓国料理 先斗町 李南河 (Rinanha; Korean on the Kamo River in Pontocho; Kyoto since 2009)
//   None is in data/kyoto.json: grep by id, name (Yuan/ゆえん, MAUMU/マウム, トリノキ/鳥の木/Torinoki, 李南河/Rinanha/Linamha,
//   水剌間) and address (鍵屋町219, 綾材木町199, 山中町542, 鍋屋町232) found none (the Yuan hits are other shops).
//   Same-name counts (Samboa ruling): Yuan, 鳥の木珈琲 — one listing each in the Tabelog crawl. MAUMU — 4 マウム shops in the
//   crawl (焼肉マウム, 焼肉 マウム 京都木屋町店, 居酒屋 マウム, BISTRO MAUMU), all of 株式会社ＧＭＩ (invoice T6130001067887;
//   head office at the 焼肉マウム Gion address) — under 5, a small Kyoto group, drafted. 李南河 — 2 (代官山 and 京都) on the
//   operator’s list of 9 restaurants (grate-ful.co.jp) — under 5, a small group, drafted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030973', 'chain: FUKUNAGA901 is a café brand of 株式会社フクナガ (founded 1930; 151 staff, ¥6.02 bn sales in 2025, fukunaga-tf.com), whose 名代とんかつ かつくら has 4 Kyoto branches in the Tabelog crawl (京都ポルタ店, 四条寺町店, 四条東洞院店, 銀閣寺店) plus 枚方モール店 (katsukura.jp) — sub-brand of a large parent');

// ================================================================ 四川料理と酒Yuan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044359/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://gurunavi.com/en/kerx800/rst';
  const A = day(['17:30', '23:00']); const S = day(['17:30', '21:30']);
  put({
    id: 'kyoto_sichuan_yuan', name: '四川料理と酒Yuan (Sichuan to Sake Yuan)', category: 'MOM_AND_POP',
    lat: 34.999877, lng: 135.765276, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sichuan dishes built on chili oil, bean pastes and sauces, with gyoza, buns, noodles and fried rice; no gluten information is published (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly meat and seafood (mapo tofu, twice-cooked pork, chili shrimp); a few vegetable plates such as steamed eggplant with leek and Sichuan pepper sauce and two Sichuan potato salads, but no ingredient list is published (2026 reviews).',
    hours_raw: '17:30–23:00 Tuesday to Saturday (last food order 22:00, drinks 22:30); 17:30–21:30 Sunday (last food order 20:30, drinks 21:00); closed Monday (Tabelog; Gurunavi gives Tuesday–Sunday, closed Monday). 10% service charge after 22:00 (Tabelog). Bookings taken; recommended at weekends (August 2026). 19 seats: a counter of 6 facing the kitchen, tables and a 5-seat private room; non-smoking; cards accepted, no e-money or QR (Tabelog); cash and cards (January 2026). Tabelog lists BYO drinks. At the back of the 1st floor of the 鍵屋小路会館, a multi-tenant building on the west side of Fuyacho-dori just south of Takatsuji; look for the door with an upside-down 福 beside a big fridge (Tabelog; September 2026). 10 min from Kyoto-Kawaramachi Stn (Tabelog). Opened 21 January 2026 (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho-dori south of Takatsuji, in a multi-tenant building — 10 min from Kyoto-Kawaramachi Stn',
    cuisine: 'À la carte Sichuan cooking with drinks (Tabelog) · assorted appetizers ¥1,980 (January–February 2026) or ¥3,200 for two (September 2026): saliva chicken of Kyoto red jidori, spicy jellyfish, Sichuan potato salad, octopus with salt, lemon and Sichuan pepper, zha cai with green onion in chili oil, century egg with white sesame tofu · mapo tofu ¥1,650 (January and August 2026; ¥1,600 in September 2026) · Yuan-style Sichuan chili shrimp ¥1,900 · special black-vinegar sweet-and-sour pork on the bone ¥3,200 · Yuan-style twice-cooked pork ¥1,760 · crab-sauce fried rice ¥1,760–1,800 · chewy grilled gyoza ¥660 · shrimp shumai ¥660 · master’s dan dan noodles ¥1,320 · bang bang chicken cold noodles (limited) ¥1,800 · lu rou fan ¥1,210 · "dangerous" custard buns 2 for ¥800 · almond tofu ¥660; half portions offered to solo diners (2026 reviews) · Shaoxing wine soda ¥880–900, chenpi mojito ¥900–980, Sichuan-pepper beer ¥1,300',
    website: null, gmaps: gm('四川料理と酒Yuan 麩屋町'), menu_url: TB,
    notes: "[Sichuan · Fuyacho, a new hidden Sichuan kitchen] A 19-seat Sichuan restaurant at the far end of the ground floor of a multi-tenant building on Fuyacho-dori, opened in January 2026 by chef Keiichi Hara, who trained at well-known restaurants and in China per an opening-day reviewer. Order à la carte: a six-item appetizer plate, mapo tofu, a celery-and-bitter-melon chili shrimp, black-vinegar sweet-and-sour pork on the bone and crab fried rice, with Shaoxing-wine sodas — numbing and hot but refined, say reviewers; solo diners are offered half portions. Most spend ¥6,000–8,000. Closed Monday.",
    chef_bio: { chef_name: 'Keiichi Hara', roles: ['Chef (named in a January 2026 review); a September 2026 reviewer calls the chef the owner'], origin: null,
      background: 'Per a January 2026 opening-day reviewer: chef Keiichi Hara trained at renowned restaurants and in China before opening this Sichuan restaurant, which mixes traditional flavours with a modern sensibility. Another January 2026 reviewer came because a favourite chef had opened a shop and enjoyed this chef’s Sichuan cooking again after a long time. A September 2026 diner found three people running the room and an open kitchen. Opened 21 January 2026 (Tabelog). Name written only in Latin letters in the source.',
      philosophy: null,
      specialty: 'Mapo tofu; Yuan-style chili shrimp; black-vinegar pork on the bone.',
      anecdotes: [
        { text: 'An opening-day reviewer in January 2026 found many congratulatory flowers from well-known food lovers at the door and only one seat left.', source: R + 'B521175042/' },
        { text: 'An August 2026 regular watched the staff help a family of tourists from abroad who were in trouble, speaking fluently and kindly.', source: R + 'B521175042/' },
        { text: 'A September 2026 diner who disliked century egg was assured the century-egg white tofu would suit even people who dislike it, and was won over.', source: R + 'B535630656/' },
        { text: 'A September 2026 solo diner found the owner tough-looking at first but gentle when talking, explaining Chinese cooking and serving half portions.', source: R + 'B535757584/' },
      ],
      japanese_sources_summary: '食べログ: 四川料理と酒Yuan (ゆえん)、四川料理・中華料理・居酒屋、下京区麩屋町通高辻下る鍵屋町219 鍵屋小路会館 E号、麩屋町高辻の交差点から南へ10m 西側、鍵屋小路会館1階の奥、京都河原町駅から徒歩10分、火〜土 17:30〜23:00 (L.O. 料理22:00・ドリンク22:30)、日 17:30〜21:30、月曜休み、22時以降サービス料10%、予約可、19席 (カウンター6、テーブル2×4、個室5)、禁煙、カード可、電子マネー・QR 不可、持ち込み可、2026年1月21日オープン。ぐるなび: 鍵屋小路会館内、京都河原町駅から徒歩6分、火〜日、月曜定休、19席。口コミ (2026年9月、日本語): 前菜盛り合わせ (2人前) 3,200円 (クラゲの麻辣和え、京赤地鶏のよだれ鶏、四川風ポテサラ、タコの塩レモン山椒風、搾菜と葱の辣油和え、ピータンの白和え)、ゆえん式・四川のエビチリ 1,900円、麻婆豆腐 1,600円、別格・黒酢豚 3,200円、蟹あんかけチャーハン 1,800円、爽 (紹興酒ソーダ) 900円、山椒ビール 1,300円、調理場の前のカウンター、「逆さ福」の扉。英語の口コミ (2026年1〜10月): Keiichi Hara シェフ、名店と中国で修業。',
      confidence: 'medium', sources: [TB, GN, R + 'B520905736/', R + 'B521175042/', R + 'B531628733/', R + 'B533632354/', R + 'B534491749/', R + 'B535104510/', R + 'B535224025/', R + 'B535630656/', R + 'B535757584/', R + 'B536045910/', R + 'B537346712/', R + 'B538313382/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead at weekends; the shop is at the back of a building and hard to find on the map; 10% service after 22:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区麩屋町通高辻下る鍵屋町219 鍵屋小路会館 E号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and Gurunavi listings; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999877, 135.765276); cross-checked: GSI 京都府京都市下京区鍵屋町219番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520905736/', R + 'B535104510/'],
    price_note: 'Prices from 2026 reviews (January–September); some differ between visits.', last_checked: TODAY, items: [
      it('前菜盛り合わせ', '', 'Assorted appetizers for two (6 kinds)', '¥3,200', 'Appetizers', 'ask', 'no', 'September 2026.', 'appetizers'),
      it('麻婆豆腐', 'mābō dōfu', 'Mapo tofu', '¥1,600', 'Mains', 'ask', 'no', '¥1,650 in January and August 2026.', 'mapo_tofu'),
      it('ゆえん式・四川のエビチリ', '', 'Yuan-style Sichuan chili shrimp', '¥1,900', 'Mains', 'ask', 'no', 'September 2026.', 'chili_shrimp'),
      it('別格・黒酢豚', '', 'Special black-vinegar sweet-and-sour pork on the bone', '¥3,200', 'Mains', 'ask', 'no', 'September 2026.', 'black_vinegar_pork'),
      it('蟹あんかけチャーハン', '', 'Crab-sauce fried rice', '¥1,800', 'Rice & noodles', 'ask', 'no', 'September 2026.', 'crab_fried_rice'),
    ] }, {
    cuisine: 'お酒と楽しむアラカルトの四川料理 (食べログ)・前菜盛り合わせ1,980円 (2026年1〜2月)、2人前3,200円 (2026年9月): 京赤地鶏のよだれ鶏、クラゲの麻辣和え、四川風ポテサラ、タコの塩レモン山椒風、搾菜と葱の辣油和え、ピータンの白和え・麻婆豆腐1,650円 (2026年1月と8月。9月は1,600円)・ゆえん式・四川のエビチリ1,900円・別格・黒酢豚 (骨付き) 3,200円・Yuan 風の回鍋肉1,760円・蟹あんかけチャーハン1,760〜1,800円・焼き餃子660円・海老焼売660円・担々麺1,320円・限定の棒棒鶏の冷やし麺1,800円・魯肉飯1,210円・カスタードまん2個800円・杏仁豆腐660円。一人客にはハーフサイズも (2026年の口コミ)・爽 (紹興酒ソーダ) 880〜900円、陳皮のモヒート900〜980円、山椒ビール1,300円',
    neighborhood: '高辻の南の麩屋町通、複数の店が入る会館の中。京都河原町駅から徒歩10分',
    gf_detail: '要確認。辣油、醤や各種のたれを使う四川料理で、餃子、まん、麺、チャーハンもある。グルテンの情報は公開されていない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。ほとんどが肉や魚介 (麻婆豆腐、回鍋肉、エビチリ)。蒸し茄子の葱と山椒のソースや2種の四川風ポテサラなど野菜の皿もあるが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[四川料理・麩屋町、隠れた新しい四川料理店] 麩屋町通の会館の1階のいちばん奥にある19席の四川料理店。2026年1月開店、オープン日の口コミによると名店と中国で修業した Keiichi Hara シェフの店。アラカルトで、6種の前菜盛り合わせ、麻婆豆腐、セロリやゴーヤ入りのエビチリ、骨付きの黒酢豚、蟹あんかけチャーハンを紹興酒ソーダと。痺れて辛いが上品だと評判で、一人客にはハーフサイズも。予算は6,000〜8,000円ほど。月曜休み。',
  });
}

// ================================================================ BISTRO MAUMU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041305/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bistromaumu.com/'; const ABOUT = SITE + 'about'; const MENU = SITE + 'menus';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=6130001067887';
  const H = day(['17:00', '01:30']); const W = day(['17:00', '23:00']);
  put({
    id: 'kyoto_bistro_maumu', name: 'BISTRO MAUMU', category: 'OMNI',
    lat: 35.002716, lng: 135.763234, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bistro menu of croquettes, fritters, gratin soup, pasta, gnocchi and bread; a few plates such as carpaccio, burrata with fruit and steak may suit, but no gluten information is published (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the menu is mostly meat, fish, cheese and egg, with a tofu-and-tomato caprese and truffle-mayo fries among the few meat-free plates (Tabelog; official menu).',
    hours_raw: '17:00–1:30 (official site); Tabelog gives 17:00–1:00 Monday, Tuesday and Thursday to Sunday and holidays, 17:00–23:00 Wednesday; a September 2026 review gives 17:00–25:00 (Wednesday to 23:00) and irregular closures. Bookings taken; include the date and message when booking a celebration cake (Tabelog). 25 seats: a wooden counter round the kitchen on the 1st floor and about seven tables for two on the 2nd (Tabelog; September 2026); non-smoking; cards, e-money and QR (Tabelog). English, Chinese and Korean menus; staff and chef speak English (Tabelog; October 2026). Green door down a small alley on Ayakoji west of Yanaginobamba; 2 min from Hankyu Karasuma Stn exit 15 (Tabelog). Opened 31 May 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: W, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayakoji west of Yanaginobamba — 2 min from Hankyu Karasuma Stn',
    cuisine: 'Paris-style wine bistro with French classics plus Italian and Spanish plates (official site; Tabelog) · burrata with seasonal fruit ¥1,800 · seasonal fish carpaccio ¥1,800 · Kyoto tofu and fruit-tomato caprese ¥1,480 · jamón serrano ¥1,380 · pâté de campagne ¥1,280 · chilled Kyoto duck loin ¥1,280 · œuf mayo ¥680 · crab cream croquette with crab miso and white miso ¥1,180 · French onion gratin soup ¥1,300 · fried chicken with gazpacho sauce ¥980 · steak frites ¥3,200 · wagyu steak Rossini with foie gras ¥5,800 · porchetta ¥1,580 · spicy roast chicken ¥1,500 · seasonal pasta ¥1,950 · seared-cheese Bolognese ¥1,880 · Parmesan-cream gnocchi ¥1,650 · crème brûlée ¥600 (official menu) · courses ¥6,000 and ¥9,000 (official site); celebration French course ¥6,600 (September 2026) · wines chosen by the sommelier, sangria, gin and tonic',
    website: SITE, gmaps: gm('BISTRO MAUMU 綾小路'), menu_url: MENU,
    notes: "[French bistro · Karasuma, a late-night wine bistro] A two-floor bistro behind a green door in an alley off Ayakoji, styled on Paris back streets, with a wooden counter round the kitchen downstairs and small tables upstairs. The menu sticks to bistro classics — steak frites, French onion gratin soup, pâté, crab croquettes — plus burrata with whatever fruit is in season, a torched-cheese Bolognese and Parmesan gnocchi, with wines picked by the sommelier. Reviewers like the late hours and the English-speaking staff; one solo diner was given a smaller pasta portion. Open until 1:30 (to 23:00 on Wednesday).",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社ＧＭＩ (Gion; invoice T6130001067887), which also runs 焼肉マウム and 居酒屋 マウム; chef not named'], origin: null,
      background: 'Per the official site: Bistro Maumu does not chase trends and loves the unchanging scene of Paris bistros — steak frites, a daily pasta, honest food at the end of the day — with a resident sommelier choosing classic French and Italian bottles and New World wines. Opened 31 May 2024 (Tabelog). The invoice number belongs to 株式会社ＧＭＩ, whose head office is at the 焼肉マウム address in Gion (NTA corporate-number site; Tabelog).',
      philosophy: 'Per the official site: "We make food that makes people happy" — a place to reset after work, not a special place you visit stiffly.',
      specialty: 'Steak frites; burrata with seasonal fruit; Parmesan-cream gnocchi.',
      anecdotes: [
        { text: 'An October 2026 solo diner was given a smaller pasta portion by the chef, with an offer to add more if it was not enough.', source: R + 'B537517384/' },
        { text: 'Staff told an October 2026 diner that the team has visited the Hokkaido oyster area three times.', source: R + 'B537517384/' },
        { text: 'A September 2026 diner watched the staff torch the cheese on the Bolognese at the table.', source: R + 'B536592135/' },
      ],
      japanese_sources_summary: '公式サイト (bistromaumu.com): 京都四条烏丸のフレンチビストロ、深夜営業、パリのビストロ、ステックフリット、日替わりのパスタ、専属のソムリエ、深夜1時半まで、Dinner 17:00〜1:30、メニュー: 前菜盛り合わせ2,980円、ブラータチーズと季節のフルーツ1,800円、旬魚のカルパッチョ1,800円、濃厚豆富とフルーツトマトのカプレーゼ1,480円、スペインの生ハム1,380円、パテドカンパーニュ1,280円、京鴨ロースの冷製1,280円、平飼い卵のウフマヨ680円、濃厚カニクリームコロッケ1,180円、オニオングラタンスープ1,300円、鶏のフリット ガスパチョソース980円、和牛ステック ロッシーニスタイル5,800円、ステックフリット3,200円、豚バラのポルケッタ1,580円、季節のパスタ1,950円、炙りチーズのボロネーゼ1,880円、パルメザンクリームのニョッキ1,650円、クレームブリュレ600円、9000円コース・6000円コース。食べログ: ビストロ・バル・イタリアン、下京区綾小路通柳馬場西入綾材木町199-4、阪急烏丸駅15番出口から徒歩2分、月火木金土日祝 17:00〜翌1:00、水曜 17:00〜23:00、25席、禁煙、カード・電子マネー・QR 可、英語・中国語・韓国語のメニュー、英語を話すスタッフ、ベジタリアンメニュー、2024年5月31日オープン、インボイス T6130001067887 (株式会社ＧＭＩ、本店は東山区祇園町北側270-4)。口コミ (2026年9〜11月、英語)。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, CORP, R + 'B535266010/', R + 'B535277473/', R + 'B535659878/', R + 'B536082630/', R + 'B536592135/', R + 'B536757388/', R + 'B537517384/', R + 'B537749437/', R + 'B537758996/', R + 'B537822070/', R + 'B538469013/', R + 'B538601015/'] },
    cultural_comfort: { level: 'english', note: 'English menu; staff and chef speak English (Tabelog; October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通柳馬場西入綾材木町199-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002716, 135.763234); cross-checked: GSI 京都府京都市下京区綾材木町199番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (undated); September 2026 reviews give the same prices excluding tax.', last_checked: TODAY, items: [
      it('ブラータチーズと季節のフルーツ', '', 'Burrata with seasonal fruit', '¥1,800', 'Cold appetizers', 'ask', 'no', '', 'burrata'),
      it('オニオングラタンスープ', '', 'French onion gratin soup', '¥1,300', 'Hot appetizers', 'no', 'no', '', 'onion_soup'),
      it('ステックフリット', '', 'Steak frites', '¥3,200', 'Mains', 'ask', 'no', '', 'steak_frites'),
      it('パルメザンクリームのニョッキ', '', 'Gnocchi with Parmesan cream', '¥1,650', 'Pasta', 'no', 'no', '', 'gnocchi'),
      it('クレームブリュレ', '', 'Crème brûlée', '¥600', 'Desserts', 'ask', 'no', '', 'creme_brulee'),
    ] }, {
    cuisine: 'パリの路地裏のようなワインビストロ。フランスの定番にイタリアやスペインの皿も (公式サイト、食べログ)・ブラータチーズと季節のフルーツ1,800円・旬魚のカルパッチョ1,800円・濃厚豆富とフルーツトマトのカプレーゼ1,480円・スペインの生ハム1,380円・パテドカンパーニュ1,280円・京鴨ロースの冷製1,280円・平飼い卵のウフマヨ680円・蟹味噌と白味噌の濃厚カニクリームコロッケ1,180円・オニオングラタンスープ1,300円・鶏のフリット ガスパチョソース980円・ステックフリット3,200円・フォアグラ添えの和牛ステック ロッシーニスタイル5,800円・豚バラのポルケッタ1,580円・スパイシーチキンのオーブン焼き1,500円・季節のパスタ1,950円・炙りチーズのボロネーゼ1,880円・パルメザンクリームのニョッキ1,650円・クレームブリュレ600円 (公式メニュー)・コース6,000円と9,000円 (公式サイト)、お祝いのフレンチコース6,600円 (2026年9月)・ソムリエが選ぶワイン、サングリア、ジントニック',
    neighborhood: '柳馬場の西の綾小路。阪急烏丸駅から徒歩2分',
    gf_detail: '要確認。コロッケ、フリット、グラタンスープ、パスタ、ニョッキ、パンのビストロ料理。カルパッチョ、ブラータとフルーツ、ステーキなど合いそうな皿もあるが、グルテンの情報は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありだが、メニューは肉、魚、チーズ、卵がほとんど。肉を使わない皿は豆富とトマトのカプレーゼ、トリュフマヨのポテトフライなど少し (食べログ、公式メニュー)。',
    notes: '[フレンチビストロ・烏丸、深夜までのワインビストロ] 綾小路から入る路地の緑の扉の奥、パリの路地裏をイメージした2階建てのビストロ。1階は厨房を囲む木のカウンター、2階は小さなテーブル席。ステックフリット、オニオングラタンスープ、パテ、カニクリームコロッケなどビストロの定番に、旬のフルーツを合わせたブラータ、炙りチーズのボロネーゼ、パルメザンのニョッキ、ソムリエが選ぶワイン。遅くまで開いていることと英語が通じるスタッフが好評で、一人客にはパスタを少なめに出してくれた例も。1時半まで (水曜は23時まで)。',
  });
}

// ================================================================ 鳥の木珈琲
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023725/'; const R = TB + 'dtlrvwlst/';
  const MAP = 'https://www.mapple.net/spot/26015488/';
  const A = day(['11:00', '17:00']); const T = day(['12:00', '17:00']);
  put({
    id: 'kyoto_torinoki_coffee', name: '鳥の木珈琲 (Torinoki Coffee)', category: 'OMNI',
    lat: 35.014933, lng: 135.761316, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hand-dripped coffee, juices and a few sweets (custard pudding, nougat glacé); no ingredient or gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, shiso soda and the ginger drink look plant-based, but the pudding is egg custard and there is a milk coffee; no ingredient list is published (2026 reviews).',
    hours_raw: '11:00–17:00 Monday, Tuesday, Friday, Saturday and Sunday; 12:00–17:00 Thursday (last order 16:30); opens at 12:00 the day after a holiday; closed Wednesday and the third Sunday of each month (Tabelog). No bookings; no groups of more than 5 (Tabelog). The pudding cannot be ordered on its own (May 2026). 11 seats: 8 at tables and 3 at the counter (Tabelog; a May 2026 reviewer counted 12); non-smoking; no cards, e-money and QR accepted (Tabelog); PayPay was not working for an August 2026 diner, who paid cash. On the ground floor of モア御所南 on Ebisugawa-dori east of Higashinotoin; 6 min from Marutamachi Stn (Tabelog). Opened 26 April 2014 (Tabelog).',
    hours: { 0: A, 1: A, 3: T, 4: A, 5: A, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori south of the Imperial Palace — 6 min from Marutamachi Stn',
    cuisine: 'Small coffee house of hand-dripped coffee and homemade sweets (2026 reviews) · blend ¥550 (Kenyan base with Guatemala and Mandheling) · coffee of the day ¥600 (El Salvador in May 2026) · custard pudding with bitter caramel ¥450, also with vanilla ice cream · nougat glacé about ¥500 · shiso soda (summer) ¥650 · homemade ginger drink · "adult" mixed juice · a milk coffee (2026 reviews)',
    website: null, gmaps: gm('鳥の木珈琲 夷川通'), menu_url: TB,
    notes: "[Café · Ebisugawa, pudding and hand-drip coffee] An eleven-seat coffee house on Ebisugawa-dori south of the Imperial Palace, all warm wood, antique-style lamps, a bookshelf and mismatched cups. The owner explains the coffee of the day; the blend (¥550) is Kenya-based and the soft, silky pudding (¥450) with bitter caramel is the reason most come — it must be ordered with a drink. Tabelog Cafe 'Tabelog 100' 2021 and WEST 2025. Small and quiet: no groups over five. Closed Wednesday and the third Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (not named) who serves and explains the coffee (2026 reviews)'], origin: null,
      background: 'Opened 26 April 2014 (Tabelog). Selected for Tabelog Cafe "Tabelog 100" 2021 and Cafe WEST "Tabelog 100" 2025 (Tabelog). The listed website, coffeeplease.jimdo.com, no longer answers.',
      philosophy: null,
      specialty: 'Custard pudding; Kenya-based blend coffee.',
      anecdotes: [
        { text: 'A May 2026 diner heard another customer ask the owner what goes into the "adult" mixed juice, and noted that every question was answered with care.', source: R + 'B527551692/' },
        { text: 'A May 2026 diner was told the characteristics of the El Salvador coffee of the day by the owner and noted that every cup has a different design.', source: R + 'B529029527/' },
        { text: 'A June 2026 visitor came back after finding the café temporarily closed on a first try.', source: R + 'B530307543/' },
      ],
      japanese_sources_summary: '食べログ: 鳥の木珈琲 (トリノキコーヒー)、カフェ、中京区夷川通東洞院東入る山中町542 モア御所南 1F、丸太町駅から徒歩6分、月火金土日 11:00〜17:00、木曜 12:00〜17:00 (L.O. 16:30)、祝日の翌日は12時から、水曜と第3日曜休み、予約不可、5名を超えるグループ不可、11席 (テーブル8、カウンター3)、禁煙、カード不可、電子マネー・QR 可、2014年4月26日オープン、カフェ 百名店 2021・カフェ WEST 百名店 2025。まっぷる: 鳥の木珈琲、夷川通東洞院東入ル山中町542 モア御所南1階。口コミ (2026年5〜9月、英語): ブレンド550円 (ケニアがベース、グアテマラとマンデリン)、本日のコーヒー600円、プリン450円 (単品不可)、しそソーダ650円、自家製ジンジャー、大人のミックスジュース、ヌガーグラッセ。',
      confidence: 'medium', sources: [TB, MAP, R + 'B527551692/', R + 'B528209548/', R + 'B528817041/', R + 'B529029527/', R + 'B529258110/', R + 'B529716755/', R + 'B530307543/', R + 'B532710700/', R + 'B532762605/', R + 'B533983476/', R + 'B535299611/', R + 'B535593354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet, small room; no groups over five; pudding only with a drink.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通東洞院東入る山中町542 モア御所南 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.014933, 135.761316); cross-checked: GSI 京都府京都市中京区山中町542番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529029527/', R + 'B529258110/', R + 'B532710700/'],
    price_note: 'Prices from May–July 2026 reviews.', last_checked: TODAY, items: [
      it('ブレンド', '', 'Blend coffee (hand-dripped)', '¥550', 'Coffee', '', 'vegan', 'Black.', 'blend'),
      it('本日のコーヒー', '', 'Coffee of the day', '¥600', 'Coffee', '', 'vegan', 'Black; May 2026.', 'coffee_of_day'),
      it('プリン', 'purin', 'Custard pudding with caramel', '¥450', 'Sweets', 'ask', 'no', 'Only with a drink.', 'pudding'),
      it('しそソーダ', '', 'Shiso soda (summer)', '¥650', 'Drinks', '', 'ask', 'July–August 2026.', 'shiso_soda'),
    ] }, {
    cuisine: 'ハンドドリップのコーヒーと手作りの甘いものの小さな喫茶 (2026年の口コミ)・ブレンド550円 (ケニアがベースにグアテマラとマンデリン)・本日のコーヒー600円 (2026年5月はエルサルバドル)・苦めのカラメルのプリン450円、バニラアイスのせも・ヌガーグラッセ500円ほど・夏のしそソーダ650円・自家製ジンジャー・大人のミックスジュース・ミルクのコーヒー (2026年の口コミ)',
    neighborhood: '御所の南の夷川通。丸太町駅から徒歩6分',
    gf_detail: '要確認。ハンドドリップのコーヒー、ジュース、少しの甘いもの (プリン、ヌガーグラッセ)。原材料やグルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒー、しそソーダ、ジンジャーは植物性に見えるが、プリンは卵のカスタードで、ミルクのコーヒーもある。原材料は公開されていない (2026年の口コミ)。',
    notes: '[カフェ・夷川、プリンとハンドドリップのコーヒー] 御所の南、夷川通にある11席の喫茶。木の温もり、アンティーク風の照明、本棚、ひとつずつ違うカップ。店主が本日のコーヒーを説明してくれる。ケニアがベースのブレンド (550円) と、苦めのカラメルのなめらかなプリン (450円) がお目当てで、プリンは飲み物と一緒に注文する。食べログ カフェ 百名店 2021、WEST 2025。小さく静かな店で、5名を超えるグループは不可。水曜と第3日曜休み。',
  });
}

// ================================================================ 韓国料理 先斗町 李南河
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034537/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://linamha-pontocho.com/'; const HIST = SITE + 'history/'; const COURSE = SITE + 'course/'; const FOOD = SITE + 'food/'; const TABLE = SITE + 'table/';
  const CO = 'https://grate-ful.co.jp/company/'; const BIZ = 'https://grate-ful.co.jp/business/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_linamha_pontocho', name: '韓国料理 先斗町 李南河 (Rinanha)', category: 'OMNI',
    lat: 35.004769, lng: 135.771164, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Korean dishes with marinades, gochujang and soy-based sauces, pancakes, dumplings and noodles; no gluten information is published (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly wagyu, pork, chicken and seafood; a vegetable bibimbap, namul and seasonal vegetable plates are on the menu, but no ingredient list is published (official menu).',
    hours_raw: '17:00–23:00 Monday to Friday; 12:00–15:00 and 17:00–23:00 Saturday, Sunday and holidays (last orders 14:00 and 22:00); closed irregularly (official site; Tabelog). Courses need booking ahead (official site). 10% service charge; private rooms for 4–6 cost an extra ¥6,000 (¥6,000–8,000 on the course page) (official site; Tabelog). 50 seats: a counter round the kitchen, tables on the 2nd floor facing the Kamo River and private rooms facing Pontocho (official site; August–September 2026); non-smoking; cards, no e-money or QR (Tabelog). On Pontocho north of Shijo; 2 min from Gion-Shijo or Kyoto-Kawaramachi Stn (Tabelog). Kyoto shop opened July 2009 in a renovated old house in a Pontocho back alley, later moved to the riverside within Pontocho (operator site; official site).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho north of Shijo, on the Kamo River — 2 min from Gion-Shijo Stn',
    cuisine: 'Korean cooking with Japanese seasonal produce and Kyoto-market wagyu (official site) · house (李家) kimchi platter ¥2,000 · seasonal bossam kimchi ¥2,500 · namul ¥1,500 · japchae ¥1,800 · tteokbokki ¥1,500 · Kujo-negi chijimi ¥1,800, seafood or beef-tendon chijimi ¥2,500 · raw tripe with green chili ¥1,650 · wagyu yukhoe ¥2,000 · wagyu by weight from ¥5,000 (120 g) · Shinshu wagyu bulgogi for two ¥7,500 · Omi-beef skirt shabu-shabu hot pot for two ¥7,500 · jidori dakhanmari ¥5,000 · samgyetang ¥5,000 (book ahead) · kimchi or soft-tofu jjigae ¥1,800 · vegetable bibimbap ¥1,800 · gimbap ¥1,500 · house (李家) naengmyeon ¥1,600 (official menu) · set courses: jidori dakhanmari or Kagoshima black-pork samgyeopsal ¥7,000, ¥10,000 with 2 hours of drinks (5+ people); seasonal Korean set with a choice of main ¥9,500; November omakase ¥12,000 (official course page) · Korean liquors, makgeolli, house fruit liqueurs, Korean teas, wine',
    website: SITE, gmaps: gm('韓国料理 先斗町 李南河'), menu_url: FOOD,
    notes: "[Korean · Pontocho, wagyu and kimchi over the Kamo River] The Kyoto branch of an Osaka-born chef's Korean restaurant that began in Daikanyama in 2000, here since 2009 and now in a stone-and-wood building on Pontocho with a counter round the kitchen and second-floor tables over the Kamo River. Courses open with a seasonal porridge and the house kimchi, then chijimi of Kyoto Kujo-negi, japchae and a main such as dakhanmari, bulgogi hot pot or black-pork samgyeopsal (¥7,000–12,000); à la carte runs to wagyu by the gram and bossam kimchi with seasonal fruit. 10% service. Tabelog Asian/Ethnic WEST 'Tabelog 100' 2026.",
    chef_bio: { chef_name: '李 南河', roles: ['Owner-chef of the operator group (grate-ful.co.jp); the shop carries the chef’s own name'], origin: 'Osaka (official site).',
      background: 'Per the official site: in 2000 the Osaka-born cook 李 南河 opened 代官山 李南河 in Tokyo, naming it after the chef in the hope that guests feel as if eating at home; the Kyoto sister shop opened in a renovated old house in a Pontocho back alley and later moved to the riverside within Pontocho; the owner-chef visits producers and markets and buys wagyu at the Kyoto meat market; selected by ZAGAT and as a best Korean restaurant by the Korean Food Foundation; the bulgogi shop SURAGAN (Ebisu) followed in 2005. The operator グレイトフル株式会社 lists 9 restaurants and delis in Tokyo, Kanagawa and Kyoto, two named 李南河, and dates the Kyoto opening to July 2009 (grate-ful.co.jp). The invoice holder is the group company グレイトフルオペレーション株式会社 (Tabelog; NTA).',
      philosophy: 'Per the official site: to keep trying new things with carefully chosen seasonal ingredients so people learn how good Korean food is.',
      specialty: 'Bossam kimchi with seasonal fruit; Kujo-negi chijimi; dakhanmari and bulgogi hot pots.',
      anecdotes: [
        { text: 'An August 2026 host whose guest disliked green onion was given seafood chijimi in place of the Kujo-negi one at no extra charge; the private room faced Pontocho, not the river.', source: R + 'B534152100/' },
        { text: 'A September 2026 diner who arrived far too early was still welcomed and given a 2nd-floor seat over the Kamo River.', source: R + 'B536136173/' },
        { text: 'A September 2026 regular plans to come back every two months, finishing with fig compote and vanilla ice cream.', source: R + 'B511543639/' },
      ],
      japanese_sources_summary: '公式サイト (linamha-pontocho.com): 京都 李南河 (りなんは)、鴨川を一望できる上質な和牛の韓国料理店、2000年に大阪出身の料理人・李南河が代官山 李南河を開店、自らの名前を店名に、京都では先斗町の路地裏の古民家を改装して姉妹店、現在は先斗町内の鴨川沿いに移転、京都食肉市場の和牛、自家製果実酒、ZAGAT SURVEY・韓食財団のベスト韓国レストラン、2005年にプルコギ専門店 SURAGAN (恵比寿)、中京区先斗町通四条上る鍋屋町232、月〜金17:00〜23:00 (L.O. 22:00)、土日祝12:00〜15:00 (L.O. 14:00)・17:00〜23:00、不定休、個室料6,000円、コース: 地鶏タッカンマリ定食・黒豚サムギョプサル定食 各7,000円 (2時間飲み放題付き10,000円、5名から)、旬で自由な韓定食9,500円、11月のお任せコース12,000円、アラカルト: 李家キムチ盛り合わせ2,000円、季節のポッサムキムチ2,500円、京都九条ネギのチヂミ1,800円、信州プレミアム和牛特選プルコギ (2人前) 7,500円、近江牛特選ハラミしゃぶしゃぶ辛味鍋 (2人前) 7,500円、地鶏タッカンマリ5,000円、野菜のビビンバ1,800円、李家冷麺1,600円、サービス料10%。グレイトフル株式会社: オーナーシェフ 李 南河、2009年7月 京都 李南河 オープン、9店舗。食べログ: 韓国料理・ステーキ、50席、禁煙、カード可、インボイス T5011001151289 (グレイトフルオペレーション株式会社)、アジア・エスニック WEST 百名店 2026。口コミ (2025〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, HIST, COURSE, FOOD, TABLE, CO, BIZ, R + 'B505302864/', R + 'B511543639/', R + 'B533253936/', R + 'B533307401/', R + 'B533337497/', R + 'B533977762/', R + 'B534152100/', R + 'B535388987/', R + 'B535859944/', R + 'B536136173/', R + 'B536665278/', R + 'B538069332/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses ahead; ask for a 2nd-floor river seat; 10% service and a private-room fee.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上る鍋屋町232',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 course notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004769, 135.771164); cross-checked: GSI 京都府京都市中京区鍋屋町232番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, COURSE],
    price_note: 'Official site menu and course page (course prices include tax; 10% service extra).', last_checked: TODAY, items: [
      it('李家キムチ盛り合わせ', '', 'house (李家) kimchi platter', '¥2,000', 'Appetizers', 'ask', 'ask', '', 'kimchi_platter'),
      it('京都九条ネギのチヂミ', '', 'Kyoto Kujo-negi chijimi', '¥1,800', 'Chijimi', 'no', 'ask', '', 'negi_chijimi'),
      it('信州プレミアム和牛特選プルコギ', '', 'Shinshu wagyu bulgogi (for two)', '¥7,500', 'Hot pots', 'ask', 'no', '', 'bulgogi'),
      it('地鶏タッカンマリ', '', 'Jidori dakhanmari', '¥5,000', 'Hot pots', 'ask', 'no', '', 'dakhanmari'),
      it('野菜のビビンバ', '', 'Vegetable bibimbap', '¥1,800', 'Rice & noodles', 'ask', 'ask', '', 'veg_bibimbap'),
      it('', '', 'Jidori dakhanmari or black-pork samgyeopsal set course', '¥7,000', 'Course', 'ask', 'no', '¥10,000 with 2 hours of drinks (5+ people).', 'set_course'),
    ] }, {
    cuisine: '日本の旬の食材と京都食肉市場の和牛を使う韓国料理 (公式サイト)・李家キムチ盛り合わせ2,000円・季節のポッサムキムチ2,500円・ナムル盛り合わせ1,500円・チャプチェ1,800円・トッポギ1,500円・京都九条ネギのチヂミ1,800円、海鮮チヂミと牛すじチヂミ2,500円・上ミノのお刺身 青唐辛子とポン酢1,650円・和牛赤身の炙りユッケ2,000円・和牛は120g 5,000円から・信州プレミアム和牛特選プルコギ (2人前) 7,500円・近江牛特選ハラミしゃぶしゃぶ辛味鍋 (2人前) 7,500円・地鶏タッカンマリ5,000円・参鶏湯5,000円 (要予約)・キムチチゲや純豆富チゲ1,800円・野菜のビビンバ1,800円・キンパ1,500円・李家冷麺1,600円 (公式メニュー)・コース: 地鶏タッカンマリ定食か黒豚サムギョプサル定食7,000円、2時間飲み放題付き10,000円 (5名から)、メインを選べる旬で自由な韓定食9,500円、11月のお任せコース12,000円 (公式サイトのコース)・韓国酒、マッコリ、自家製果実酒、韓国茶、ワイン',
    neighborhood: '四条の北の先斗町、鴨川沿い。祇園四条駅から徒歩2分',
    gf_detail: '要確認。たれ、コチュジャン、醤油ベースのソース、チヂミ、餃子、麺がある韓国料理。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: '要確認。和牛、豚、鶏、魚介がほとんど。野菜のビビンバ、ナムル、旬の野菜の皿もあるが、原材料は公開されていない (公式メニュー)。',
    notes: '[韓国料理・先斗町、鴨川の上の和牛とキムチ] 大阪出身の料理人が2000年に代官山で始めた韓国料理店の京都店。2009年から京都にあり、今は先斗町の石と木の店で、厨房を囲むカウンターと鴨川に面した2階のテーブル席。コースは季節のお粥と自家製キムチに始まり、京都九条ネギのチヂミ、チャプチェ、タッカンマリ、プルコギ鍋、黒豚サムギョプサルなどのメイン (7,000〜12,000円)。アラカルトでは和牛のグラム売りや季節のフルーツ入りのポッサムキムチも。サービス料10%。食べログ アジア・エスニック WEST 百名店 2026。',
  });
}

save();
