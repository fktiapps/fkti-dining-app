// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 35.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only; same-name count first.
//   Rulings carried from batch 34 (integrator, 2026-11-05): skip サルヴァトーレ クオモ, 侘家古暦堂, 焼肉 弘商店; count アジョシ
//   and 和牛とカニ myself — アジョシ: group size unconfirmed → skip; 和牛とカニ: 3 shops found with sources → drafted.
//   core:    + 寺町 大丈夫 Teramachi Daijoubu (one-person spice-curry bar on the Teramachi arcade, since 2015)
//            + アンティーブ Antibes (small European bistro-bar on Takatsuji)
//   notable: + 和牛とカニ 三条河原町店 (all-you-can-eat sukiyaki and king/snow crab; Hot Pot Tabelog 100 2026)
//            - 紫野和久傳 堺町店 26001888 skipped (和久傳, a large parent already in data)
//            + 浜作 新本店 Hamasaku (Japan's first itamae kappo, 1927; regular service ends March 2027)
//   None of the four added is in data/kyoto.json: grep by name (大丈夫/Daijobu, アンティーブ/Antibes, 和牛とカニ, 浜作 —
//   the 浜作 hits are a chef-history line in kyoto_* Italian records naming ぎをん浜作) and address (式部町249, 桝屋町460,
//   山崎町258-22, 六角町360) found none. Same-name counts: 大丈夫 1, アンティーブ 1, 浜作 1 (the restaurant moved from Gion;
//   its site calls itself 京ぎをん浜作), 和牛とカニ 3 (京都駅前店, 三条河原町店, 大阪の本町店; Tabelog crawl and gurunavi).
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001972', 'ザ キッチン サルヴァトーレ クオモ 京都: a national chain (The Kitchen Salvatore Cuomo; integrator ruling, 2026-11-05)');
skip('26000850', '侘家古暦堂 祇園花見小路本店: a sub-brand of the Malebranche (マールブランシュ) group — an October 2026 review says it belongs to the same group as Maruburanshu, and Tabelog names a sister shop, wabiya Takatsuji (integrator ruling, 2026-11-05)');
skip('26016840', '焼肉 弘商店 烏丸錦: same company as 京の焼肉処 弘, whose official site lists 8 shops plus the 京やきにく弘 and 弘商店 shops (integrator ruling, 2026-11-05); three 弘商店 shops appear in the Kyoto crawl (烏丸錦, 四条高倉, 京都駅西)');
skip('26041488', '京韓堂 アジョシ祇園本店: group size unconfirmed — at least four Ajoshi shops are named in sources (祇園本店; 三条タカセ店 on gurunavi; 韓国酒場 アジョシ 桂五条店 on tabiiro; a Toranomon shop in an October 2026 review), and search results describe several shops in Kyoto and Tokyo without a full list');
skip('26001888', '紫野和久傳 堺町店: a shop of 和久傳, a large parent with several ryotei and shops in Kyoto, Tokyo and Nagoya (integrator ruling on 白 HAKU, 2026-11-05); 室町和久傳 is already in data as kyoto_muromachi_wakuden');

// ================================================================ 寺町 大丈夫
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026878/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://teramachi-daijobu.com/';
  const H = day(['12:00', '15:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_teramachi_daijoubu', name: '寺町 大丈夫 (Teramachi Daijoubu)', category: 'OMNI',
    lat: 35.007056, lng: 135.766742, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; curries are served with Japanese rice, and how they are thickened is not described (2024–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable keema with lemon cream appears beside chicken, beef-tendon and keema curries (February 2025); dairy (cream, yogurt) is used in some.',
    hours_raw: 'Tabelog: every day 12:00–15:30 and 18:00–22:00; closed irregularly — check Instagram (November 2025). Bookings taken; private hire for 10 or more (Tabelog). Cash only: cards not accepted (Tabelog). 16 seats at tables, counter and sofas; smoking allowed (Tabelog). Opened 12 September 2015 as a café and bar (Tabelog). At the far end of the second floor of ふじ会館 on the Teramachi arcade, next to Three Coins; 7 min walk from Hankyu Kawaramachi Stn (Tabelog; 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi arcade north of Shijo — 7 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Original spice curries based on Indian cooking, blended with Japanese curry, made fresh daily; also a bar (Tabelog) · four standing curries and three seasonal ones (January 2025): Daijoubu spice curry (chicken) ¥1,080 (November 2025), beef-tendon korma, vegetable keema with lemon cream, butter curry, limited chicken keema plate ¥1,150–1,200 with achaar and side dishes · chicken tikka (2 pieces) ¥550; quail-egg achaar, miso cream cheese · beer, cocktails, sake, shochu, wine (2024–2025 reviews; Tabelog)',
    website: SITE, gmaps: gm('寺町 大丈夫 京都 カレー'), menu_url: TB,
    notes: "[Spice curry · Teramachi arcade, a one-person curry bar] A 16-seat café-bar at the back of a second floor off the Teramachi arcade, with a DJ booth, where the owner alone cooks Indian-based spice curries mixed with a Japanese touch: the house Daijoubu chicken curry (¥1,080 in 2025), beef-tendon korma, a lemon-cream vegetable keema and a changing plate with achaar and sides. Most reviewers find it warm and good value; one October 2025 diner felt the service cold. Cash only; smoking allowed. Lunch and dinner, closed irregularly.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) who runs the shop alone, per 2025 reviews'], origin: null,
      background: 'Tabelog’s introduction: original spice curries based on Indian food, aiming to blend Indian cooking with Japanese curry, made fresh every day, and a bar as well; opened 12 September 2015 under the earlier name カフェ&バー 大丈夫. Reviewers in 2025 describe a quiet, kind and stylish owner who runs the place solo (April and September 2025) and a DJ booth in the room (April 2025).',
      philosophy: 'Per Tabelog: balancing ease of eating with bold flavours, hoping guests fall in love with Indian food.',
      specialty: 'Daijoubu spice curry; keema plates.',
      anecdotes: [
        { text: '"Daijoubu" is such a kind phrase — a November 2025 diner was glad to see the sign, and was asked whether cilantro was all right.', source: R + 'B517012602/' },
        { text: 'An October 2025 diner was told to call out when ready, then had to shout the order to the kitchen, and found the service cold and the food unremarkable.', source: R + 'B516906861/' },
        { text: 'An April 2025 diner climbed past renovation boards in the building, unsure it was open, and found the shop at the very back of the second floor.', source: R + 'B504636037/' },
      ],
      japanese_sources_summary: '食べログ: インドカレー・カレー・バー、旧店名 カフェ&バー 大丈夫、中京区式部町249 ふじ会館 2F、毎日12:00〜15:30・18:00〜22:00、不定休、予約可、10名以上で貸切、カード不可、16席、喫煙可、2015年9月12日オープン、インド料理をベースにしたオリジナルのスパイスカレーを毎日手作り、日本のカレーとの融合、バーとしても。口コミ (2024年11月〜2025年11月、英語): 大丈夫スパイスカレー (チキン) 1,080円、牛すじのコルマ、野菜キーマのレモンクリーム、バターカレー、期間限定のチキンキーマプレート1,150〜1,200円、チキンティッカ2本550円、うずら卵のアチャール、味噌クリームチーズ、DJブース、店主ひとりで営業、不定休は Instagram で。',
      confidence: 'medium', sources: [TB, SITE, R + 'B496591957/', R + 'B498543302/', R + 'B501060959/', R + 'B504242892/', R + 'B504636037/', R + 'B506287187/', R + 'B510977361/', R + 'B514808981/', R + 'B516906861/', R + 'B517012602/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a curry from a short menu; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区式部町249 ふじ会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.007056, 135.766742); cross-checked: GSI 京都府京都市中京区式部町249番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517012602/', R + 'B498543302/'],
    price_note: 'No published menu; prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daijoubu spice curry (chicken)', '¥1,080', 'Curry', 'ask', 'no', 'November 2025.', 'daijoubu_curry'),
      it('', '', 'Chicken keema plate (limited)', '¥1,150', 'Curry', 'ask', 'no', 'January 2025.', 'keema_plate'),
      it('', '', 'Chicken tikka (2 pieces)', '¥550', 'Sides', 'ask', 'no', 'January 2025.', 'chicken_tikka'),
    ] }, {
    cuisine: 'インド料理をベースに日本のカレーと合わせたオリジナルのスパイスカレーを毎日手作り、バーとしても (食べログ)・定番4種と季節の3種 (2025年1月): 大丈夫スパイスカレー (チキン) 1,080円 (2025年11月)、牛すじのコルマ、野菜キーマのレモンクリーム、バターカレー、アチャールや副菜付きの期間限定チキンキーマプレート1,150〜1,200円・チキンティッカ2本550円、うずら卵のアチャール、味噌クリームチーズ・ビール、カクテル、日本酒、焼酎、ワイン (2024〜2025年の口コミ、食べログ)',
    neighborhood: '四条の北、寺町のアーケード。阪急京都河原町駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報はない。カレーは日本のご飯で、とろみの付け方は書かれていない (2024〜2025年の口コミ)。',
    vegan_detail: '要確認。チキン、牛すじ、キーマのカレーのほかに野菜キーマのレモンクリームもある (2025年2月) が、クリームやヨーグルトを使うものもある。',
    notes: '[スパイスカレー・寺町、ひとりで営むカレーバー] 寺町のアーケードから入ったビルの2階の奥、DJ ブースのある16席のカフェバー。店主がひとりで、インド料理をベースに日本風を合わせたスパイスカレーを作る。名物の大丈夫チキンカレー (2025年は1,080円)、牛すじのコルマ、レモンクリームの野菜キーマ、アチャールと副菜の付く日替わりのプレート。多くの客は温かく手頃と書くが、2025年10月の客は接客が冷たいと感じた。現金のみ、喫煙可。昼と夜、不定休。',
  });
}

// ================================================================ アンティーブ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013834/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_antibes_takatsuji', name: 'アンティーブ (Antibes)', category: 'OMNI',
    lat: 35.000078, lng: 135.766157, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu leans on pasta, pizza, lasagna, quiche and baguette with ajillo (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information; most dishes use cheese, cured meat, seafood or smoked mackerel (2022–2026 reviews).',
    hours_raw: 'Tabelog: every day 18:00–about 23:00 (last order about 22:00); closed irregularly. Bookings taken; a small room that can be full on weekdays, so book for three or more (2022–2024 reviews). The appetiser assortment must be ordered ahead (December 2023). 20 seats: counter, two larger tables and two small high tables; non-smoking; children welcome; English menu (Tabelog; reviews). Cards, iD/QUICPay and QR payments (Tabelog). On the ground floor of the 河道屋倖松庵ビル on Takatsuji; 6 min walk south from Hankyu Kawaramachi Stn (Tabelog; January 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takatsuji-dori between Kawaramachi and Kiyomizu-Gojo — 6 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'European and Italian small plates, pasta and pizza with wine in a small bar-bistro (Tabelog; reviews) · smoked mackerel and egg potato salad (a favourite), quiche, prosciutto, chicken neck in white-wine butter, shrimp and scallop ajillo ¥1,100 (March 2023), potage · amatriciana with house pancetta, squid-ink pescatore, bolognese, half-size lasagna, quattro formaggi and margherita pizza, steak (about ¥2,300, October 2024) · two reds and two whites by the glass at ¥700 (January 2025), Heartland and Guinness, sangria',
    website: TB, gmaps: gm('アンティーブ 京都 高辻'), menu_url: TB,
    notes: "[European bistro-bar · Takatsuji, a quiet corner] A 20-seat bar-bistro on Takatsuji between the Kawaramachi crowds and Kiyomizu-Gojo: the house smoked-mackerel potato salad, ajillo with baguette, amatriciana with home-made pancetta, squid-ink pasta and pizza, with glass wine at ¥700. About ¥4,000–5,000 a head (reviews). One October 2024 diner was let down by the steak; pasta and starters draw the praise. Evenings 18:00–23:00; book for groups.",
    chef_bio: { chef_name: null, roles: ['Kitchen and bar (no one named in the sources read)'], origin: null,
      background: 'Reviewers from 2022 to 2026 describe a stylish, casual small room a little away from the main restaurant streets, welcoming to solo diners from abroad as well as regulars (November 2024), with dishes such as the smoked-mackerel potato salad that a former Kyoto resident always ordered (October 2022).',
      philosophy: null,
      specialty: 'Smoked mackerel potato salad; pasta.',
      anecdotes: [
        { text: '"When I first visited, I was blown away by the taste of the \'Smoked Mackerel and Egg Potato Salad\'!" — October 2022.', source: R + 'B487552634/' },
        { text: 'An October 2024 diner loved the potato salad and squid-ink pasta but found the steak tasted off and the fries limp.', source: R + 'B494535071/' },
        { text: 'A May 2026 couple vowed to order the potage again and praised the pasta with rich tomato sauce.', source: R + 'B529206613/' },
      ],
      japanese_sources_summary: '食べログ: ヨーロッパ料理・バル・イタリアン、下京区桝屋町460 河道屋倖松庵ビル 1F、毎日18:00〜23:00頃 (L.O. 22:00頃)、不定休、予約可、20席、禁煙、子供可、英語メニュー、カード・iD・QUICPay・QR 可。口コミ (2022年3月〜2026年5月、英語): 燻製鯖と卵のポテトサラダ、キッシュ、生ハム、せせりの白ワインバター、海老と帆立のアヒージョ1,100円、ポタージュ、自家製パンチェッタのアマトリチャーナ、イカ墨のペスカトーレ、ボロネーゼ、ラザニアのハーフ、クアトロフォルマッジ、グラスワイン赤白2種ずつ700円、前菜盛り合わせは要予約。',
      confidence: 'low', sources: [TB, R + 'B448144977/', R + 'B477020960/', R + 'B480899151/', R + 'B487552634/', R + 'B494146684/', R + 'B494535071/', R + 'B495434985/', R + 'B500525400/', R + 'B503127498/', R + 'B529206613/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); à la carte plates to share; book for three or more.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区桝屋町460 河道屋倖松庵ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.000078, 135.766157); cross-checked: GSI 京都府京都市下京区桝屋町460番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480899151/', R + 'B500525400/'],
    price_note: 'No published menu; prices from 2023–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp and scallop ajillo', '¥1,100', 'Starters', 'no', 'no', 'March 2023; with baguette.', 'ajillo'),
      it('', '', 'Smoked mackerel and egg potato salad', '', 'Starters', 'ask', 'no', '', 'mackerel_potato_salad'),
      it('', '', 'Glass of wine', '¥700', 'Drinks', '', '', 'January 2025.', 'glass_wine'),
    ] }, {
    cuisine: '小さなバルビストロのヨーロッパとイタリアの小皿、パスタ、ピザとワイン (食べログ、口コミ)・燻製鯖と卵のポテトサラダ (人気)、キッシュ、生ハム、せせりの白ワインバター、海老と帆立のアヒージョ1,100円 (2023年3月)、ポタージュ・自家製パンチェッタのアマトリチャーナ、イカ墨のペスカトーレ、ボロネーゼ、ハーフのラザニア、クアトロフォルマッジやマルゲリータのピザ、ステーキ (2024年10月、約2,300円)・グラスワインは赤白2種ずつ700円 (2025年1月)、ハートランド、ギネス、サングリア',
    neighborhood: '河原町と清水五条の間の高辻通。阪急京都河原町駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報はない。パスタ、ピザ、ラザニア、キッシュ、アヒージョのバゲットが中心 (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報はない。ほとんどの料理にチーズ、生ハム、魚介、燻製鯖を使う (2022〜2026年の口コミ)。',
    notes: '[ヨーロッパのバルビストロ・高辻、静かな一角] 河原町のにぎわいと清水五条の間、高辻通の20席のバルビストロ。名物の燻製鯖のポテトサラダ、バゲット付きのアヒージョ、自家製パンチェッタのアマトリチャーナ、イカ墨のパスタ、ピザに、グラスワインは700円。1人4,000〜5,000円ほど (口コミ)。2024年10月の客はステーキが残念だったと書くが、パスタや前菜は好評。夜18時〜23時、グループは予約を。',
  });
}

// ================================================================ 和牛とカニ 三条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043762/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_wagyu_to_kani_sanjo', name: 'すき焼き ズワイガニ・タラバガニ食べ放題 和牛とカニ 三条河原町店 (Wagyu to Kani Sanjo Kawaramachi)', category: 'OMNI',
    lat: 35.007412, lng: 135.769878, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant says it cannot accommodate gluten-free requests (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: all-you-can-eat wagyu and pork sukiyaki with raw egg, and king and snow crab (2026 reviews). Guests with shellfish allergies are asked not to use the restaurant (Tabelog).',
    hours_raw: 'Tabelog: every day 16:00–24:00 (last order 23:30). Bookings taken; guests with a shellfish allergy are asked not to come, and gluten-free requests cannot be met (Tabelog). 120-minute all-you-can-eat-and-drink courses: ¥16,000 (with king crab, September–November 2026), ¥18,000 with grilled king crab (October 2026). Children: ages 1–4 ¥500, 5–11 half price (Tabelog). 38 seats; non-smoking; private hire for 20–50; English, Chinese and Korean menus, English-speaking staff, digital menu (Tabelog). Cards, IC, QR including Alipay and WeChat Pay (Tabelog). Opened 12 November 2025 (Tabelog). 3F of the SKI河原町六角ビル, no lift (October 2026); 5 min walk from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo — 5 min walk from Sanjo Stn',
    cuisine: 'All-you-can-eat sukiyaki and crab: Satsuma Nishiki black wagyu (rib, brisket) and Nankoku barley pork in sukiyaki with raw egg, boiled snow crab and king crab, grilled king crab on the top course (2026 reviews) · 120-minute eat-and-drink courses ¥16,000 and ¥18,000 · also unlimited: wagyu and crab hand-rolled sushi with ikura and uni, vegetables, fu, udon or Chinese noodles to finish, water dumplings, kimchi, edamame; yuzu sorbet and matcha or black-sesame ice cream ordered by QR (2026 reviews)',
    website: TB, gmaps: gm('和牛とカニ 三条河原町店'), menu_url: TB,
    notes: "[All-you-can-eat sukiyaki & crab · Kawaramachi-Sanjo, a 120-minute feast] A third-floor dining room, opened November 2025, where 120 minutes and about ¥16,000–18,000 buy unlimited black-wagyu and pork sukiyaki, boiled snow and king crab, wagyu-and-crab hand rolls with ikura and uni, noodles and drinks. Hot Pot Tabelog 100 2026. Not for shellfish allergies; no gluten-free. Multilingual menus and English-speaking staff. 16:00–24:00 daily; three-storey climb, no lift.",
    chef_bio: { chef_name: null, roles: ['Sanjo Kawaramachi branch of 和牛とカニ (operator not named in the sources read)'], origin: null,
      background: 'Tabelog gives the opening day as 12 November 2025. The brand also has a Kyoto Station (京都駅前店) and an Osaka Honmachi (本町店) shop (Tabelog crawl; gurunavi). Tabelog Hot Pot "Tabelog 100" 2026.',
      philosophy: null,
      specialty: 'All-you-can-eat wagyu sukiyaki with king and snow crab.',
      anecdotes: [
        { text: 'Three friends booked the ¥16,000 course and switched on the spot to the ¥18,000 one with grilled king crab; "there is no elevator, so you will need to climb the stairs to the third floor" — October 2026.', source: R + 'B537471940/' },
        { text: 'An October 2026 diner was too full for the unlimited sea-urchin and salmon-roe hand rolls.', source: R + 'B537499051/' },
      ],
      japanese_sources_summary: '食べログ: すき焼き・カニ・しゃぶしゃぶ、中京区河原町通三条下ル2丁目山崎町258-22 SKI河原町六角ビル 3F、毎日16:00〜24:00 (L.O. 23:30)、予約可、甲殻類アレルギーの方は利用不可、グルテンフリーには対応不可、38席、禁煙、貸切20〜50名、英語・繁体字・簡体字・韓国語のメニュー、英語の話せるスタッフ、子供は1〜4歳500円・5〜11歳は大人の半額、2025年11月12日オープン、すき焼き・しゃぶしゃぶ百名店 2026。口コミ (2026年9月〜11月、英語): 薩摩錦牛のリブロースとブリスケ、南国麦豚、ズワイガニとタラバガニ、120分食べ飲み放題16,000円、焼きタラバ付き18,000円、肉寿司と蟹の手巻き (いくら・雲丹)、うどんや中華麺で締め、柚子シャーベットと抹茶・黒ごまのアイス、エレベーターなし。',
      confidence: 'medium', sources: [TB, R + 'B536112999/', R + 'B536267616/', R + 'B536381413/', R + 'B536514238/', R + 'B537471940/', R + 'B537499051/', R + 'B538205147/', R + 'B538390632/', R + 'B538608837/', R + 'B538616270/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus and English-speaking staff (Tabelog); set 120-minute courses, booked ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル2丁目山崎町258-22 SKI河原町六角ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Hot Pot Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.007412, 135.769878); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 91m; kyoto_gaya_gaya is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538608837/', R + 'B537471940/'],
    price_note: 'No published menu; course prices from October–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '120-minute all-you-can-eat-and-drink: wagyu sukiyaki, king and snow crab', '¥16,000', 'Courses', 'no', 'no', 'October–November 2026.', 'course_16000'),
      it('', '', 'Same course with grilled king crab', '¥18,000', 'Courses', 'no', 'no', 'October 2026.', 'course_18000'),
    ] }, {
    cuisine: 'すき焼きとカニの食べ放題: 薩摩錦の黒毛和牛 (リブロース、ブリスケ) と南国麦豚のすき焼きを生卵で、ボイルのズワイガニとタラバガニ、上のコースは焼きタラバも (2026年の口コミ)・120分食べ飲み放題のコース16,000円・18,000円・ほかにも食べ放題: 和牛と蟹の手巻き寿司 (いくら、雲丹)、野菜、麩、締めのうどんや中華麺、水餃子、キムチ、枝豆、QR で頼む柚子シャーベットや抹茶・黒ごまのアイス (2026年の口コミ)',
    neighborhood: '三条の南の河原町。三条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: グルテンフリーには対応できないと店が案内している (食べログ)。',
    vegan_detail: 'ヴィーガン不可: 和牛と豚のすき焼き (生卵) とタラバガニ・ズワイガニの食べ放題 (2026年の口コミ)。甲殻類アレルギーの方は利用しないよう店が求めている (食べログ)。',
    notes: '[すき焼きとカニの食べ放題・三条河原町、120分の宴] 2025年11月開業のビル3階の店。120分16,000〜18,000円ほどで、黒毛和牛と豚のすき焼き、ボイルのズワイガニとタラバガニ、いくらと雲丹の和牛と蟹の手巻き、締めの麺、飲み物が食べ放題・飲み放題。すき焼き・しゃぶしゃぶ百名店 2026。甲殻類アレルギー不可、グルテンフリー不可。多言語メニューと英語のスタッフ。毎日16時〜24時、エレベーターなしで3階まで階段。',
  });
}

// ================================================================ 浜作 新本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036826/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hamasaku.kyoto/'; const OWNER = SITE + 'owner/'; const RSV = SITE + 'yoyakuinfo/'; const ACC = SITE + 'access/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_hamasaku_shinhonten', name: '浜作 新本店 (Hamasaku Shin-honten)', category: 'MOM_AND_POP',
    lat: 35.006686, lng: 135.756495, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; one set kappo course built on kombu dashi, with dishes such as fried Wakasa sole and somen (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of fish and seafood (sea bream, hamo, abalone, eel, sea urchin) built on dashi (2023–2026 reviews).',
    hours_raw: 'Official site: 17:00–22:00, closed irregularly; Tabelog lists 18:00–21:00 Monday, Tuesday, Thursday–Saturday, closed Wednesday and Sunday; courses start at 18:00 (July 2026). Reservation only: telephone first (075-223-8118 for bookings; 075-561-0330 the shop); the site says seats are heavily booked and dates are arranged after a call. Regular service ends at the end of March 2027, after a final "farewell" year from April 2026, marking the 100th year since the 1927 founding (official site). Dress: semi-formal, jackets for men (official site; Tabelog). An L-shaped counter; non-smoking; cards accepted (Tabelog; July 2026). About ¥100,000 a head per recent reviews. On Shinmachi-dori south of Rokkaku; about 10 min walk from Hankyu Karasuma, or tell a taxi “蛸薬師新町上る 浜作” (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-dori south of Rokkaku — about 10 min walk from Hankyu Karasuma Stn',
    cuisine: 'Japan’s first itamae kappo (counter cooking in front of the guest), founded in Gion in 1927 (official site) · one course a night, priced by the season (July 2026): yuba with kuzukiri, sea urchin and lily bulb, a clear soup of hamo, Awaji flatfish sashimi, hamo tataki, abalone, fried Wakasa sole (a house classic), simmered shrimp-potato, sea-bream sashimi, dashimaki, white-miso soup, grilled eel with somen; dashi of top-grade kombu (2023–2026 reviews) · about ¥100,000 a head (2025–2026 reviews)',
    website: SITE, gmaps: gm('浜作 新本店 新町六角'), menu_url: SITE,
    notes: "[Itamae kappo · Shinmachi-Rokkaku, the first of its kind] Hamasaku opened in Gion in 1927 as Japan's first itamae kappo — the chef cooking at the counter in front of guests — and served Kawabata Yasunari, Shiga Naoya and Princess Grace of Monaco among others (official site); the third-generation master Hiroyuki Morikawa now cooks at an L-shaped counter in the new main shop on Shinmachi. One seasonal course built on outstanding dashi, around ¥100,000 a head. Regular service ends in March 2027 after a farewell year. Reservation by phone; jackets for men. Mon, Tue, Thu–Sat evenings.",
    chef_bio: { chef_name: 'Hiroyuki Morikawa (森川裕之)', roles: ['Third-generation owner (浜作三代目店主) and president of 株式会社浜作, per the official site'], origin: 'Gion, Kyoto (born 1962)',
      background: 'Per the official site: 森川裕之 was born in Gion-machi, Kyoto, in 1962, spent student days in Tokyo at kabuki, classical concerts and opera, and took over as third generation in 1991 on the death of the father, the second-generation 武; the founder, the grandfather 森川榮 (森川栄), opened Hamasaku on 1 September 1927 (Showa 2) in Gion Tominaga-cho as Japan’s first itamae kappo. The cookery school 浜作料理教室, started around the same time, has run some 2,300 sessions for 30,000 people; in 2017 the master was honoured as a Contemporary Master Craftsman, the youngest in Kyoto cuisine; books include 和食の教科書 ぎをん献立帖 and 京料理の品格. Guests listed on the site include the Showa Emperor, Kawabata Yasunari, Shiga Naoya, Mukoda Kuniko, Robert De Niro and Princess Grace of Monaco. The site announces that regular service ends at the end of March 2027, the 100th year, fulfilling a promise to the late father, after the master returned to the counter from a nine-hour heart operation over the New Year. Facebook account: hiroyuki.morikawa.',
      philosophy: 'Per the official site: since the founder, choosing first-class ingredients and cooking "to create something delicious" — not by form, not for show.',
      specialty: 'Seasonal itamae kappo course; hamo; dashi.',
      anecdotes: [
        { text: '"Recently, it seems that Charles Chaplin visited, and his son came 90 years later and was so moved that he cried." — a regular of 20 visits, August 2026.', source: R + 'B459805224/' },
        { text: 'A September 2025 diner found the conger-eel and matsutake soup lacking in taste and the dishes below average, though stylish.', source: R + 'B513275021/' },
        { text: 'Jackets required, a July 2026 diner in the Gion Festival heat found folding screens on show in the building for the festival.', source: R + 'B532208187/' },
      ],
      japanese_sources_summary: '公式サイト (hamasaku.kyoto): 日本最初の板前割烹 京ぎをん浜作、昭和二年九月一日に祖父森川榮が京都祇園富永町で創業、今年で百周年、来年の三月末で通常営業を終える、三十六年前に父が亡くなり後を継いだ、二代目の父との約束、年末年始の九時間の心臓大手術を乗り越えカウンターに復帰、今年四月からの一年が本当の浜作さよなら営業、予約は二月二十三日から。三代目主人 森川裕之: 浜作三代目店主・株式会社浜作代表取締役、1962年京都・祇園町生まれ、東京での学生時代に歌舞伎・クラシック・オペラ、1991年に二代目の父・武の逝去で三代目を継承、初代森川栄以来「美味しいものを創る」、浜作料理教室 通算2300回・延べ3万人、平成29年「現代の名工」(京料理界最年少)、著書『和食の教科書 ぎをん献立帖』『京料理の品格』『名食決定盤』ほか、御贔屓: 昭和天皇、川端康成、志賀直哉、向田邦子、ロバート・デ・ニーロ、グレース モナコ大公妃ほか。ご予約: まずは電話で (新本店代表 075-561-0330、ご予約専用 075-223-8118)、ドレスコードはセミフォーマル、男性はジャケット着用。アクセス: 中京区新町通六角下ル六角町360、営業時間17:00〜22:00 (不定休)、タクシーで「蛸薬師新町上る 浜作まで」。食べログ: 日本料理、月・火・木〜土 18:00〜21:00、水・日休み、完全予約制、禁煙、カード可。口コミ (2023年1月〜2026年8月、英語): 1人10万円以上、L字のカウンター、鱧、湯葉の葛切り、若狭の魚の唐揚げ、鰻と素麺、昆布だし。',
      confidence: 'medium', sources: [TB, SITE, OWNER, RSV, ACC, R + 'B451642412/', R + 'B459805224/', R + 'B459925906/', R + 'B478597985/', R + 'B480052173/', R + 'B493089052/', R + 'B502040750/', R + 'B502807702/', R + 'B513275021/', R + 'B532208187/'] },
    cultural_comfort: { level: 'relay', note: 'Reservation by phone only, often booked far ahead — a hotel concierge or Japanese speaker helps; jackets for men; one set course.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通六角下ル六角町360',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (farewell-year notice: regular service ends end of March 2027) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006686, 135.756495); cross-checked: GSI 京都府京都市中京区六角町360番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532208187/', R + 'B502807702/'],
    price_note: 'No published prices; recent reviews give about ¥100,000 a head, and the course price varies (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal itamae kappo course', 'about ¥100,000', 'Course', 'ask', 'no', '2025–2026 reviews; price varies.', 'kappo_course'),
    ] }, {
    cuisine: '1927年に祇園で創業した日本最初の板前割烹 (公式サイト)・季節で値段の変わるコースのみ (2026年7月): 湯葉の葛切り、雲丹と百合根、鱧のお椀、淡路の鮃のお造り、鱧の焼き霜、鮑、若狭の魚の唐揚げ (名物)、海老芋の炊いたん、鯛のお造り、だし巻き、白味噌のお椀、鰻と素麺、最上の昆布のだし (2023〜2026年の口コミ)・1人10万円ほど (2025〜2026年の口コミ)',
    neighborhood: '六角の南の新町通。阪急烏丸駅から徒歩10分ほど',
    gf_detail: '予約時に要確認。グルテンの情報はない。昆布だしを基本にしたコースで、若狭の魚の唐揚げや素麺なども出る (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介 (鯛、鱧、鮑、鰻、雲丹) をだしで仕立てるコース (2023〜2026年の口コミ)。',
    notes: '[板前割烹・新町六角、日本最初の割烹] 1927年に祇園で、客の目の前で料理する日本最初の板前割烹として開いた浜作。川端康成、志賀直哉、グレース モナコ大公妃らが通った (公式サイト)。三代目の森川裕之さんが新町通の新本店の L 字のカウンターに立つ。見事なだしの季節のコースひとつで、1人10万円ほど。2027年3月末で通常営業を終え、それまでの1年がさよなら営業。予約は電話で、男性はジャケット着用。月・火・木〜土の夜。',
  });
}

save();
