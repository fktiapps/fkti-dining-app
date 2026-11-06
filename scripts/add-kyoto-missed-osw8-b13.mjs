// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 13.
//   + トラットリア ラパーチェ Trattoria La Pace (Italian off Nishiki Market, owner from Wakayama; core list)
//   + 祇園新橋 中谷 Gion Shinbashi Nakatani (kaiseki in an alley by Tatsumi Bridge; core list)
//   + メッシタ パーネ エ ヴィーノ Mescita Pane e Vino (one-man dry-aged beef and natural wine bar; notable list)
//   + 割烹 梅津 Kappou Umetsu (Gion kappo, à la carte from January 2026; notable list)
//   Picked 2026-11-05 after batch 12. `queue.mjs kyoto-missed next core 200`: いきなりステーキ 京都河原町三条店 26027557
//   (skipped, chain), トラットリア ラパーチェ 26013067, 黄桜 じろく亭 26001187 (skipped, Kizakura sub-brand), 祇園新橋 中谷
//   26026513. `next notable 200`: メッシタ パーネ エ ヴィーノ 26025955, 割烹 梅津 26018077. Same-name check first: no other
//   ラパーチェ, 祇園新橋 中谷, メッシタ or 割烹 梅津 in our crawls. None of the four is in data/kyoto.json: grep by name and
//   address (菊屋町531, 元吉町59, 天神山町277, 祇園町北側347-93) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027557', 'いきなりステーキ 京都河原町三条店: a national steak chain — our crawls alone hold 5 same-name いきなりステーキ shops (26027579, 26027557, 27110829, 13184812, 13171249); 5+ same-name shops count as a chain (Greg, 2026-11-05).');
skip('26001187', '黄桜 じろく亭: run directly by the Fushimi sake brewer Kizakura (Tabelog EN name "Kizakura Jiroku Tei", in the 黄桜木屋町ビル, Kizakura sake-lees courses; web: "黄桜の直営店", and a sake-lees soup supervised by the shop\'s head chef is sold nationally) — a sub-brand of a large parent counts as a chain (Greg, 2026-11-05).');

// ================================================================ トラットリア ラパーチェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26013067/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_trattoria_la_pace', name: 'トラットリア ラパーチェ (Trattoria La Pace)', category: 'OMNI',
    lat: 35.005259, lng: 135.763347, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A pasta-and-pizza trattoria: lunch sets pair appetisers with pasta or pizza, and the signature is a sea-urchin cream pasta; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled vegetables and vegetable appetisers appear, but the menu leans on cream sauces, cheese, seafood and chicken (2026 reviews).',
    hours_raw: 'Tuesday to Sunday and holidays 11:30–15:00 (last order 14:00) and 17:30–22:00 (last order 21:00); closed Monday, with some irregular closures (Tabelog). Reservations accepted; lunch fills — a day-ahead booking found one slot left (July 2026). 30 seats: 6 at the counter, 24 at tables; non-smoking; wheelchair accessible (Tabelog). Cards, e-money and QR (Tabelog). At the back of the ground floor of the O-ZONE building on Sakaimachi just north of Nishiki Market — easy to walk past; a camel tapestry marks it (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi just north of Nishiki Market — near Shijo and Karasuma stations',
    cuisine: 'Trattoria of Kyoto vegetables and of fish and vegetables sent from the owner’s home of Wakayama (Tabelog) · signature sea-urchin cream pasta (Tabelog; 2026 reviews) · lunch sets about ¥2,000 with a drink — assorted appetisers or grilled vegetables, then pasta or a whole pizza: shrimp and arugula cream, clam aglio e olio, tomato with eggplant and ricotta, Margherita, quattro formaggi (May–October 2026) · cassata for dessert (July 2026) · wine, cocktails and Wakayama craft beer (Tabelog) · dinner about ¥4,000–6,000 (Tabelog)',
    website: null, gmaps: gm('トラットリア ラパーチェ 京都 錦'), menu_url: null,
    notes: "[Italian · just off Nishiki Market, Wakayama produce] A cave-like trattoria tucked at the back of a building on Sakaimachi, a step north of Nishiki Market, cooking Kyoto vegetables with fish and produce from the owner's home of Wakayama. The draw is the sea-urchin cream pasta; lunch sets of about ¥2,000 bring a generous appetiser plate, pasta or a whole pizza and a drink (wine included). Some diners found the sauces on the salty side. Book lunch ahead. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), from Wakayama', 'A couple, per an August 2026 review'], origin: 'Wakayama (Tabelog: the owner was born and raised there).',
      background: 'Per Tabelog, the fish and vegetables come from Wakayama, where the owner was born and raised, alongside Kyoto vegetables. An August 2026 reviewer: "It seems to be run by a couple, with the husband working like a craftsman in the kitchen and the friendly wife providing excellent service."',
      philosophy: 'Ingredients from the owner’s home of Wakayama and from Kyoto (Tabelog).', specialty: 'Sea-urchin cream pasta.',
      anecdotes: [
        { text: '"It\'s the best cream pasta I\'ve ever had, truly the King of Cream." — August 2026.', source: R + 'B534611011/' },
        { text: 'Three friends sharing pasta and pizza in May 2026 were given six plates without asking.', source: R + 'B528176237/' },
        { text: '"The Uni Cream Sauce pasta had a strong uni flavor right from the first bite, but it was a bit too salty for my taste." — July 2026.', source: R + 'B531698224/' },
        { text: '"I was quite surprised that I could choose wine as my set drink for the lunch course without any additional charge!" — October 2026.', source: R + 'B537871692/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ・ピザ、中京区堺町錦小路上ル菊屋町531 O-ZONEビル1F、火〜日・祝 11:30〜15:00 (L.O.14:00)・17:30〜22:00 (L.O.21:00)、月曜休み、不定休あり、予約可、30席 (カウンター6、テーブル24)、禁煙、車椅子可、カード・電子マネー・QR 可、Wakayama 出身の店主が地元の魚と野菜、京野菜を使う、ウニのクリームパスタが人気、Wakayama のクラフトビール。口コミ (2026年5月〜10月、英語): 錦市場の北、ビルの奥で見つけにくい、ランチ2,000円 (前菜の盛り合わせか焼き野菜、パスタかピザ、ドリンク)、海老とルッコラのクリーム、あさりのアーリオオーリオ、マルゲリータ、クアトロフォルマッジ、カッサータ、夫婦で営んでいるよう (2026年8月)、塩味が強めとの声も。',
      confidence: 'medium', sources: [TB, R + 'B527641600/', R + 'B528176237/', R + 'B530237036/', R + 'B531495788/', R + 'B531698224/', R + 'B531738958/', R + 'B533247118/', R + 'B534611011/', R + 'B537797464/', R + 'B537871692/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Entrance at the back of the building; set lunch with a choice of pasta or pizza; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町錦小路上ル菊屋町531 O-ZONEビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005259, 135.763347); cross-checked: GSI 京都府京都市中京区菊屋町531番地 (lot) 29 m; mp_okuniya is 5.3 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527641600/', R + 'B533247118/', R + 'B537797464/'],
    price_note: 'No menu read; prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set B (assorted appetisers, pasta, drink)', '¥2,000', 'Lunch', 'no', 'ask', 'May and October 2026.', 'lunch_b'),
      it('', '', 'Lunch set with grilled vegetables and pizza', '¥2,000', 'Lunch', 'no', 'ask', 'July 2026.', 'lunch_grilled_veg'),
      it('', '', 'Sea-urchin cream pasta', '', 'Pasta', 'no', 'no', 'The signature; part of lunch set B.', 'uni_cream_pasta'),
    ] }, {
    cuisine: '京野菜と、店主の故郷 Wakayama から届く魚や野菜を使うトラットリア (食べログ)・名物はウニのクリームパスタ (食べログ、2026年の口コミ)・ランチはドリンク付き2,000円ほど: 前菜の盛り合わせか焼き野菜、パスタかピザ1枚 (海老とルッコラのクリーム、あさりのアーリオオーリオ、茄子とリコッタのトマトソース、マルゲリータ、クアトロフォルマッジ) (2026年5月〜10月)・デザートにカッサータ (2026年7月)・ワイン、カクテル、Wakayama のクラフトビール (食べログ)・夜は4,000〜6,000円ほど (食べログ)',
    neighborhood: '錦市場のすぐ北、堺町通。四条駅と烏丸駅の近く',
    gf_detail: '要確認。パスタとピザの店: ランチは前菜とパスタかピザ、名物はウニのクリームパスタ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。焼き野菜や野菜の前菜はあるが、クリームソース、チーズ、魚介、鶏が中心 (2026年の口コミ)。',
    notes: '[イタリアン・錦市場のすぐそば、Wakayama の食材] 錦市場のすぐ北、堺町通のビルの奥にある洞窟のようなトラットリア。京野菜と、店主の故郷 Wakayama の魚や野菜を料理する。名物はウニのクリームパスタ。2,000円ほどのランチは前菜の盛り合わせ、パスタかピザ1枚、ドリンク (ワインも可) 付き。ソースの塩味が強めという声もある。ランチは予約を。月曜休み。',
  });
}

// ================================================================ 祇園新橋 中谷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026513/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_gion_shinbashi_nakatani', name: '祇園新橋 中谷 (Gion Shinbashi Nakatani)', category: 'MOM_AND_POP',
    lat: 35.006007, lng: 135.774420, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses with dashi, ponzu, nama-fu, fried dishes and mackerel sushi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred kaiseki courses built on kombu dashi, sashimi, grilled fish and hot pots (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday to Saturday and holidays 11:30–13:30 (last entry) and 18:00–21:00; closed Sunday (Tabelog). Reservations accepted (Tabelog). Courses of about ¥9,000 and ¥13,000 (the latter at lunch), omakase ¥14,300 and ¥17,600 (2025–2026 reviews). 16 seats with a counter and a raised area of two 4-seat tables behind blinds; private hire up to 20; non-smoking (Tabelog). Cards and PayPay (Tabelog). Down a narrow alley off Gion Shinbashi near Tatsumi Bridge; 5 min walk from Gion-Shijo Stn (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinbashi near Tatsumi Bridge — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kaiseki courses of fish sent direct from Awaji and Wakasa and Kyoto vegetables bought from farmers (Tabelog) · e.g. appetiser, soup, seasonal sashimi, assorted dishes, grilled dish, small hot pot, rice and dessert (September 2025); ikura, fig with sesame, nama-fu, mackerel sushi (October 2025); bluefin tuna and yellowtail sashimi, Spanish mackerel soup, grouper with ponzu, fried gurnard, roast beef, clay-pot rice (December 2025); grilled scallops with Usui-bean tofu (April 2026); stuffed sweetfish from Takashima grilled on skewers, matsutake soup (September 2026) · leftover rice wrapped as onigiri to take home; mackerel sushi to take away (2025–2026 reviews) · a wide sake list (Tabelog)',
    website: null, gmaps: gm('祇園新橋 中谷 京都'), menu_url: null,
    notes: "[Kaiseki · Gion Shinbashi, a chef of 30 years in an alley] A quiet kaiseki restaurant at the end of a narrow alley off Gion Shinbashi, run by Ichirou Nakatani, a chef of over 30 years trained at a renowned Kyoto restaurant. Fish comes straight from Awaji and Wakasa, vegetables from Kyoto farmers, and the tableware draws on the family's pottery shop. Courses run from about ¥9,000 to ¥17,600; leftover clay-pot rice goes home as onigiri. Staff explain dishes in English. Closed Sunday.",
    chef_bio: { chef_name: 'Ichirou Nakatani', roles: ['Owner-chef'], origin: null,
      background: 'Per Tabelog: the owner is a chef with over 30 years in Japanese cuisine, trained at a renowned Kyoto restaurant (not named); fish is sourced from Awaji Island and Wakasa Bay and vegetables directly from local farmers. An October 2025 reviewer: "The chef\'s family runs a pottery shop, so the beautiful tableware was filled with thoughtful details." A January 2026 reviewer noted the staff\'s English.',
      philosophy: '"Choosing Ingredients Without Compromise, from Fish and Vegetables to Kombu Used for Broth" (Tabelog).', specialty: 'Seasonal hassun; mackerel sushi; clay-pot rice.',
      anecdotes: [
        { text: 'A September 2026 diner watched stuffed sweetfish from Takashima, Shiga, chilled in a glass bowl of ice, then skewered and grilled — "tender enough to bite into from the head."', source: R + 'B535255041/' },
        { text: 'A March 2026 diner\'s leftover rice came back as onigiri wrapped in foil "like a cute mini bag" to take home.', source: R + 'B522675012/' },
        { text: '"I can\'t forget the mackerel sushi—it was unforgettable! I loved it so much that I even bought some as a souvenir!" — October 2025.', source: R + 'B516105628/' },
        { text: '"The explanations of the dishes are clear, and the staff\'s proficiency in English is reassuring." — January 2026.', source: R + 'B521343415/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・魚介料理、東山区元吉町59-1、祇園四条駅から徒歩5分、月〜土・祝 11:30〜13:30 (最終入店)・18:00〜21:00、日曜休み、予約可、16席 (カウンター、小上がりに4名×2卓)、貸切20名まで、禁煙、カード・PayPay 可、料理人歴30年以上の店主 Ichirou Nakatani、京都の名店で修業、Awaji と Wakasa の魚、農家直送の京野菜、昆布まで吟味。口コミ (2025年9月〜2026年9月、英語): Tatsumi Bridge 近くの細い路地の奥、コース9,000円・13,000円 (昼)、おまかせ14,300円・17,600円、八寸、鯖寿司 (持ち帰りも)、土鍋ご飯の残りをおにぎりに、Takashima の子持ち鮎、松茸のお吸い物、実家が陶器店、スタッフが英語で説明。',
      confidence: 'medium', sources: [TB, R + 'B501020099/', R + 'B513814659/', R + 'B516105628/', R + 'B519936736/', R + 'B521343415/', R + 'B522675012/', R + 'B526932762/', R + 'B531401263/', R + 'B532256851/', R + 'B535255041/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; courses; English explanations; cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区元吉町59-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006007, 135.774420); cross-checked: GSI 京都府京都市東山区元吉町59番地 (lot) 59 m; kyoto_steak_house_shingo is 11.8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501020099/', R + 'B516105628/', R + 'B526932762/'],
    price_note: 'No menu read; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥9,900', 'Course', 'ask', 'no', 'July 2026, ¥9,000 before tax.', 'course_9000'),
      it('', '', 'Omakase course', '¥14,300', 'Course', 'ask', 'no', 'September 2025 to January 2026.', 'omakase'),
      it('', '', 'Omakase course', '¥17,600', 'Course', 'ask', 'no', 'April 2026, tax included.', 'omakase_premium'),
    ] }, {
    cuisine: 'Awaji と Wakasa から直送の魚と、農家から仕入れる京野菜の会席コース (食べログ)・例: 先付、お椀、季節のお造り、炊き合わせ、焼き物、小鍋、ご飯、甘味 (2025年9月)、いくら、無花果の胡麻和え、生麩、鯖寿司 (2025年10月)、本まぐろとぶりのお造り、さわらのお椀、厚切りの白身のポン酢、ほうぼうの唐揚げ、ローストビーフ、土鍋ご飯 (2025年12月)、焼き帆立とうすい豆の豆腐 (2026年4月)、Takashima の子持ち鮎の串焼き、松茸のお吸い物 (2026年9月)・残ったご飯はおにぎりにして持ち帰り、鯖寿司の持ち帰りも (2025〜2026年の口コミ)・日本酒が豊富 (食べログ)',
    neighborhood: 'Tatsumi Bridge の近く、祇園新橋。祇園四条駅から徒歩5分',
    gf_detail: '要確認。だし、ポン酢、生麩、揚げ物、鯖寿司のある会席コース。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。昆布だし、お造り、焼き魚、小鍋の魚中心の会席コース (食べログ、2025〜2026年の口コミ)。',
    notes: '[会席・祇園新橋、路地奥の料理人歴30年] 祇園新橋の細い路地の奥にある静かな会席の店。京都の名店で修業した料理人歴30年以上の Ichirou Nakatani が営む。魚は Awaji と Wakasa から直送、野菜は京都の農家から、器には実家の陶器店のものも。コースは9,000円ほどから17,600円まで。残った土鍋ご飯はおにぎりにして持ち帰れる。スタッフは英語で説明してくれる。日曜休み。',
  });
}

// ================================================================ メッシタ パーネ エ ヴィーノ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025955/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_mescita_pane_e_vino', name: 'メッシタ パーネ エ ヴィーノ (Mescita Pane e Vino)', category: 'OMNI',
    lat: 35.004901, lng: 135.757084, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled dry-aged beef seasoned with salt, alongside homemade wheat bread, spring rolls, cake salé and pasta; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steak restaurant that takes reservations only from guests who order a meat main (Tabelog).',
    hours_raw: 'Monday to Saturday 18:00–22:00, last entry 20:30; closed Sunday, with some irregular closures (Tabelog). Reservation only, and only for guests who order a meat main; parties of three or more take a course; no children under 15; foreign nationals must book online; the owner works alone and may not answer the phone (Tabelog). Expect waits when the room is full (May 2026). 16 seats: 6 at the counter, tables for 10 (Tabelog). Cards and Rakuten Pay (Tabelog). On Nishikikoji west of Muromachi; 3 min walk from exit 24 of Shijo / Karasuma stations (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikikoji west of Muromachi — 3 min walk from Shijo / Karasuma stations',
    cuisine: 'One-man steak and wine bar: dry-aged black wagyu from the Shiga butcher Sakaeya grilled slowly over binchotan, natural wine, organic vegetables from the owner’s family home in Shiga, and homemade natural-yeast bread of Hokkaido wheat (Tabelog) · a ¥6,800 course (May 2026), 250 g and three-cut tastings (June–July 2026) · appetisers such as Hikone pickles, cake salé, firefly squid, roasted onions, caprese, grilled new onions with Manganji-pepper cashew sauce, meat and cheese spring rolls, onion bread (2026 reviews) · pastas: fermented butter and sheep cheese, cheese, Cagliostro-style meatball (2026 reviews) · affogato (2026 reviews) · bills about ¥10,000–14,999 (Tabelog)',
    website: null, gmaps: gm('メッシタ パーネ エ ヴィーノ 京都'), menu_url: null,
    notes: "[Steak and natural wine · Nishikikoji, a one-man counter] A 16-seat room near Shijo Karasuma where the owner, working alone, grills dry-aged black wagyu from Shiga's Sakaeya over binchotan and pours natural wine. Appetisers, onion bread and a rich cheese pasta round out the meal; a course was ¥6,800 in May 2026 and most bills run ¥10,000–15,000. Reservation only — a meat main is required, no under-15s, and foreign nationals book online. With one person cooking, be ready to wait. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the shop alone'], origin: null,
      background: 'Per Tabelog: "Operated by a single owner, please note that there may be times when the phone is not answered"; dry-aged black wagyu from the Shiga butcher Sakaeya is grilled slowly over binchotan, with organic vegetables from the owner’s family home in Shiga and natural wines. Reviewers in 2026: "the owner runs the place alone" (May 2026), "the owner seems to be managing everything alone" (July 2026).',
      philosophy: null, specialty: 'Dry-aged beef over binchotan; cheese pasta.',
      anecdotes: [
        { text: 'A May 2026 diner asked about the steak knife and learned it was developed with a renowned product designer.', source: R + 'B518030199/' },
        { text: '"Since the owner runs the place alone, I think it’s best to go with a relaxed mindset and be prepared to wait a bit." — May 2026.', source: R + 'B527638270/' },
        { text: '"The onion bread that came afterward was especially amazing! (I ended up asking for a second helping.)" — June 2026.', source: R + 'B532332288/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ステーキ・ダイニングバー、中京区錦小路室町西入る天神山町277 K−an 1F、四条駅・烏丸駅24番出口から徒歩3分、月〜土 18:00〜22:00 (最終入店20:30)、日曜休み、不定休あり、完全予約制 (肉のメインを注文する客のみ)、3名以上はコースのみ、15歳未満不可、外国籍の客はオンライン予約、店主一人のため電話に出られないことも、16席 (カウンター6、テーブル10)、カード・楽天ペイ可、Shiga の Sakaeya の熟成黒毛和牛を備長炭で焼く、自然派ワイン、店主の実家 (Shiga) の有機野菜、Hokkaido 産小麦の自家製天然酵母パン。口コミ (2026年3月〜10月、英語): コース6,800円、3部位の食べ比べ、ケークサレ、ほたるいか、カプレーゼ、肉とチーズの春巻き、玉ねぎのパン、発酵バターと羊のチーズのパスタ、ミートボールのパスタ、アフォガート、一人営業で待つことも。',
      confidence: 'medium', sources: [TB, R + 'B481914181/', R + 'B518030199/', R + 'B526169391/', R + 'B527638270/', R + 'B529746972/', R + 'B530623530/', R + 'B532179182/', R + 'B532332288/', R + 'B535422835/', R + 'B538477010/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only — foreign nationals book online; a meat main is required; no under-15s; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区錦小路室町西入る天神山町277 K−an 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004901, 135.757084); cross-checked: GSI 京都府京都市中京区天神山町277番地 (lot) 14 m; kyoto_kentan_horibe is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518030199/', R + 'B529746972/'],
    price_note: 'No menu read; course price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course with dry-aged beef', '¥6,800', 'Course', 'ask', 'no', 'May 2026.', 'beef_course'),
      it('', '', 'Dry-aged beef, three-cut tasting', '', 'Meat', 'ask', 'no', '', 'three_cut'),
      it('', '', 'Fermented butter and sheep cheese pasta', '', 'Pasta', 'no', 'no', 'Half portions possible.', 'cheese_pasta'),
    ] }, {
    cuisine: '店主一人のステーキとワインの店: Shiga の精肉店 Sakaeya のドライエイジングの黒毛和牛を備長炭でじっくり焼き、自然派ワイン、店主の実家 (Shiga) の有機野菜、Hokkaido 産小麦の自家製天然酵母パン (食べログ)・6,800円のコース (2026年5月)、250gや3部位の食べ比べ (2026年6〜7月)・前菜: Hikone の漬物、ケークサレ、ほたるいか、焼き玉ねぎ、カプレーゼ、新玉ねぎのグリルに万願寺とうがらしのカシューナッツソース、肉とチーズの春巻き、玉ねぎのパン (2026年の口コミ)・パスタ: 発酵バターと羊のチーズ、チーズ、カリオストロ風ミートボール (2026年の口コミ)・アフォガート (2026年の口コミ)・会計は1万〜1万5千円ほど (食べログ)',
    neighborhood: '室町の西、錦小路通。四条駅・烏丸駅から徒歩3分',
    gf_detail: '要確認。塩で食べる備長炭焼きの熟成牛のほか、自家製の小麦のパン、春巻き、ケークサレ、パスタ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のメインを注文する客だけが予約できるステーキの店 (食べログ)。',
    notes: '[ステーキと自然派ワイン・錦小路、店主一人の店] 四条烏丸近くの16席の店。店主が一人で、Shiga の Sakaeya の熟成黒毛和牛を備長炭で焼き、自然派ワインを注ぐ。前菜、玉ねぎのパン、濃厚なチーズのパスタもあり、2026年5月のコースは6,800円、会計は1万〜1万5千円ほどが多い。完全予約制 (肉のメインが必須、15歳未満不可、外国籍の客はオンライン予約)。一人営業なので待つことも。日曜休み。',
  });
}

// ================================================================ 割烹 梅津
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018077/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kappo_umetsu_gion', name: '割烹 梅津 (Kappou Umetsu)', category: 'MOM_AND_POP',
    lat: 35.005232, lng: 135.775742, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo à la carte and omakase with dashi, sesame dressings, soba, fried conger eel, kakiage, beef cutlet and nama-fu; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kappo of sashimi, grilled river fish, shellfish, horse sashimi and dashi dishes (2025–2026 reviews).',
    hours_raw: 'Monday to Saturday and holidays 12:00–14:00 (lunch by reservation only) and 17:00–22:00; closed Sunday (Tabelog). Omakase of about 10 dishes, and à la carte from January 2026; for à la carte parties of four or more, appetisers and sashimi are prepared ahead (Tabelog). 21 seats: an 11-seat counter and private rooms upstairs, including a tatami room (room fee ¥1,000); private hire possible; non-smoking (Tabelog). Cards; no e-money or QR (Tabelog). Down a narrow alley in Gion north of Shijo; 4 min walk from exit 9 of Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, in an alley — 4 min walk from Gion-Shijo Stn',
    cuisine: 'Gion kappo cooking seasonal fish and vegetables over charcoal and in a brick oven, with a long sake list (Tabelog) · omakase of about 10 dishes, ¥11,500 in May 2025 — e.g. Kamigamo vegetables, firefly squid nuta, chawanmushi, toro and surf-clam sashimi, young Lake Biwa ayu (May 2025) · matsutake soup, sea urchin and octopus sashimi, salt-grilled ayu, soba with yuzu, fried conger eel, Kamo eggplant and charcoal-grilled wagyu fillet, chirimenjako rice with clam miso soup (August 2026) · à la carte: three-shellfish platter, horse sashimi, karasumi mochi, corn kakiage (July 2026), grilled shirako, beef cutlet (February 2026), honmoroko (April 2026), saba sushi, white-shrimp tempura (October 2026) · bills about ¥15,000–19,999 (Tabelog)',
    website: null, gmaps: gm('割烹 梅津 祇園'), menu_url: null,
    notes: "[Kappo · Gion alley, à la carte by the counter] A hidden kappo down a Gion alley, opened by chef Naoto Umetsu after heading the kitchen at Kappou Nakagawa in Gion. Seasonal fish and vegetables go over charcoal and into a brick oven, and horse sashimi nods to the owner's Kumamoto roots. Take the omakase of about ten dishes or, since January 2026, order à la carte at the 11-seat counter; rooms are upstairs. Regulars love it; one October 2025 visitor found it cool to outsiders and the food average. Lunch by reservation. Closed Sunday.",
    chef_bio: { chef_name: 'Naoto Umetsu', roles: ['Owner-chef', 'A second chef in the kitchen (October 2026)'], origin: 'Kumamoto (July 2026 review: "the owner is from Kumamoto").',
      background: 'An August 2026 reviewer: Naoto Umetsu, head chef at Kappou Nakagawa in Gion, opened this restaurant some years ago, and some tableware comes from a renowned kaiseki house. Per Tabelog, a special brick oven and charcoal are used for seasonal fish and vegetables; à la carte orders began in January 2026. An October 2026 diner saw two chefs in the kitchen, including the head chef.',
      philosophy: 'Seasonal fresh ingredients, cooked to bring out the natural flavour (Tabelog).', specialty: 'Charcoal-grilled fish; horse sashimi; clay-pot rice.',
      anecdotes: [
        { text: 'A July 2026 regular, on a 23rd visit, was touched that white rice was cooked in a clay pot just for a husband who loves rice to finish.', source: R + 'B11769385/' },
        { text: '"Choosing dishes through conversation rather than a menu is truly the best way to enjoy traditional Japanese cuisine. The chef secretly prepared the last of the season\'s Honmoroko" — April 2026.', source: R + 'B522904143/' },
        { text: '"Overall, I think it’s a decent izakaya, but it feels a bit unwelcoming to outsiders. The food is honestly just average." — October 2025.', source: R + 'B515832299/' },
        { text: 'An October 2026 diner found the head chef not very talkative but the service attentive, down to being seen out at the door.', source: R + 'B538413377/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町北側347-93、祇園四条駅9番出口から徒歩4分、月〜土・祝 12:00〜14:00 (昼は予約のみ)・17:00〜22:00、日曜休み、21席 (カウンター11、2階に個室と座敷、個室料1,000円)、貸切可、禁煙、カード可、電子マネー・QR 不可、レンガ窯と炭火で旬の魚と野菜、日本酒・焼酎・ワイン、2026年1月からアラカルトも、4名以上のアラカルトは先付とお造りを用意。口コミ (2025年5月〜2026年10月、英語): 店主 Naoto Umetsu は Kappou Nakagawa の料理長から独立、店主は Kumamoto 出身で馬刺し、おまかせ約10品11,500円 (2025年5月)、Kamigamo の野菜、稚鮎、松茸のお椀、鱧の唐揚げ、和牛ヒレの炭火焼き、ちりめんじゃこご飯、貝の三種盛り、からすみ餅、白子焼き、本もろこ、鯖寿司、常連が多い、よそ者には冷たく料理は普通との声 (2025年10月)。',
      confidence: 'medium', sources: [TB, R + 'B11384444/', R + 'B11658392/', R + 'B116684190/', R + 'B11769385/', R + 'B515832299/', R + 'B522564067/', R + 'B522904143/', R + 'B531979823/', R + 'B538413377/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (lunch by reservation only); omakase or à la carte at the counter; cards accepted, no e-money.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-93',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005232, 135.775742); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 51 m; mp_tempura_kyoboshi is 13.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B11384444/', R + 'B11769385/'],
    price_note: 'No menu prices read except the May 2025 omakase.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (about 10 dishes)', '¥11,500', 'Course', 'ask', 'no', 'May 2025.', 'omakase'),
      it('', '', 'Three-shellfish sashimi platter', '', 'À la carte', 'ask', 'no', 'July 2026.', 'shellfish_platter'),
      it('', '', 'Horse sashimi', '', 'À la carte', 'ask', 'no', 'July 2026.', 'basashi'),
      it('', '', 'Fried conger eel', '', 'À la carte', 'no', 'no', '2026 reviews.', 'hamo_karaage'),
    ] }, {
    cuisine: '旬の魚と野菜を炭火とレンガ窯で焼き、日本酒も豊富な祇園の割烹 (食べログ)・おまかせ約10品、2025年5月は11,500円: Kamigamo の野菜、ほたるいかのぬた、茶碗蒸し、トロや貝のお造り、Lake Biwa の稚鮎 (2025年5月)・松茸のお椀、ウニとたこのお造り、鮎の塩焼き、柚子のそば、鱧の唐揚げ、賀茂茄子と和牛ヒレの炭火焼き、ちりめんじゃこご飯と蛤の味噌汁 (2026年8月)・アラカルト: 貝の三種盛り、馬刺し、からすみ餅、とうもろこしのかき揚げ (2026年7月)、白子焼き、牛カツ (2026年2月)、本もろこ (2026年4月)、鯖寿司、白海老の天ぷら (2026年10月)・会計は1万5千〜2万円ほど (食べログ)',
    neighborhood: '四条の北、祇園の路地。祇園四条駅から徒歩4分',
    gf_detail: '要確認。だし、胡麻和え、そば、鱧の唐揚げ、かき揚げ、牛カツ、生麩のある割烹のアラカルトとおまかせ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、川魚の焼き物、貝、馬刺し、だしの料理の魚中心の割烹 (2025〜2026年の口コミ)。',
    notes: '[割烹・祇園の路地、カウンターでアラカルト] 祇園の路地の奥の隠れた割烹。Kappou Nakagawa の料理長だった Naoto Umetsu が独立して開いた。旬の魚と野菜を炭火とレンガ窯で焼き、馬刺しは店主の故郷 Kumamoto にちなむ。約10品のおまかせのほか、2026年1月からはカウンター11席でアラカルトも。2階に個室。常連に愛される一方、2025年10月の客はよそ者に冷たく料理は普通と書いている。昼は予約のみ。日曜休み。',
  });
}

save();
