// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 11.
//   + 京趣味 菱岩 Kyoshumi Hishiiwa (Gion caterer since 1829; bento to order by phone, takeaway only, plus a limited lunch in 2026)
//   + ぎをん 遠藤 Gion Endo (Kouta Endo's à la carte fish counter in the 楽宴小路 alley; since 2011)
//   + 祇園 きだ Gion Kida (Yasuo Kida's kaiseki counter, a Gion Sasaki alumnus; since 2016; reservation only, hard to book)
//   + ひつじ Hitsuji (natural-yeast donuts by owner Takahiro Shimomura; numbered tickets; since 2011)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four).
//   None is in data/kyoto.json: grep by name (菱岩/Hishiiwa, 遠藤/Endo, きだ/Kida, ひつじ/Hitsuji) and address (西之町213,
//   347-118, 570-192, 大炊町355) found nothing. Nearest records: mp_tempura_kyoboshi 6 m from Endo's Tabelog point (pin
//   offset 8 m south); kyoto_gion_sakagawa 18 m from Kida (no stacking). Chain check: single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京趣味 菱岩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000950/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hishiiwa.com/ja/';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_kyoshumi_hishiiwa', name: '京趣味 菱岩 (Kyoshumi Hishiiwa)', category: 'OMNI',
    lat: 35.006435, lng: 135.774509, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when ordering. No gluten information; set boxes of about 20 Kyoto dishes, simmered and grilled, with sushi and a fried item (official site; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kyoto cooking on dashi, with duck breast, eel, fish and shrimp (2025 reviews).',
    hours_raw: 'Orders and pickup 11:30–18:00; closed Sunday and the second and last Monday, and irregularly (official site; Tabelog lists 11:30–20:30). Bento by advance order only, by phone (075-561-0413) up to the day before; two days ahead is safer (April 2026 review); a day\'s numbers are limited (official site). Collect on the day and eat the same day (official site); delivery to nearby wards such as Higashiyama and Nakagyo (official site). June–September: sales generally stop for hygiene, except for bento eaten within about an hour of pickup (official site). No eating in (Tabelog), but in August–September 2026 the shop served a limited lunch, a hamo mabushi set, in a private room, booked by phone after an Instagram notice (2026 reviews). Cash only (Tabelog; November 2025 review). On Shinmonzen-dori, 7 min from Sanjo Stn (Tabelog; April 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmonzen-dori, Higashiyama, just past the Tatsumi Bridge — 7 min from Sanjo Stn',
    cuisine: 'Kyoto shidashi (catering) since 1829: boxed bento of Kyoto dishes to order (official site) · 梅 ¥3,780; 月 ¥4,860 (adds duck breast and bamboo-leaf sushi); 花 ¥6,480 (about 20 dishes, the best-loved); 松 ¥8,100; two-tier 白川 ¥11,880 (chirashi sushi, for about two), 八坂 ¥14,040 and 東山 ¥21,600 (for 3–4), limited numbers; 半月弁当 with a seasonal soup ¥4,320–5,940; 松花堂弁当 ¥7,020 and ¥8,640 (official site, tax included) · October 2025: sea bream sushi in bamboo leaf, dashi omelette, simmered shrimp, grilled Spanish mackerel, eel rolled Hachiman-style, roast duck breast, chicken matsukaze, sweet ayu with sansho, ginkgo · August–September 2026, limited lunch: hamo mabushi on rice with a fresh dashi omelette, shrimp shinjo soup, pickles and a grape jelly, ¥4,000–5,999',
    website: SITE, gmaps: gm('京趣味 菱岩'), menu_url: 'https://hishiiwa.com/ja/menu/',
    notes: "[Bento · Shinmonzen, Kyoto's benchmark bento since 1829] A caterer of nearly two hundred years, whose boxed bento are, to many reviewers, the best in Japan: some twenty small dishes — duck breast, a perfect dashi omelette, sushi in bamboo leaf, eel, simmered vegetables each seasoned on its own — that still taste right cold. There is no dining room: order by phone by the day before, collect on Shinmonzen-dori (or have it delivered nearby), and eat it the same day, at Minami-za, on the Shinkansen or in your hotel. From ¥3,780; the two-tier boxes feed two or more. Cash only, closed Sundays, and bento mostly pause June–September. In late summer 2026 it also served a limited sit-down lunch of hamo on rice.",
    chef_bio: { chef_name: null, roles: ['Catering house, run by the current head of the family (official site: "現当主", no name given)'], origin: null,
      background: 'Per the official site: founded in the first year of Tenpō (1829) as a neighbourhood caterer, carrying fish bought at market to nearby homes on a shoulder pole; the third-generation master, 松之助, created the half-moon 半月弁当; the house sees itself as "the customer\'s kitchen". The Tabelog Award 2020 Bronze (Tabelog). Reviewers note deliveries to the Minami-za theatre (December 2025) and sales through Takashimaya and Isetan by reservation (October 2025).',
      philosophy: 'Traditional Kyoto cooking made for the customer\'s pleasure, with the spirit of "the customer\'s kitchen" (official site).', specialty: 'Boxed bento (折詰弁当); half-moon bento.',
      anecdotes: [
        { text: '"Even after some time and carrying it around, I was surprised that everything inside was perfectly intact!" — October 2025.', source: R + 'B516338813/' },
        { text: '"They even deliver to Minami-za Theatre." — December 2025, eaten on the Shinkansen.', source: R + 'B200168346/' },
        { text: '"Since I was in a private room, I could enjoy my meal in peace and quiet." — August 2026, the limited lunch.', source: R + 'B534716147/' },
      ],
      japanese_sources_summary: '公式サイト (hishiiwa.com): 天保初年 (1829年) 創業の仕出し料理専門店、「お客様の台所」の心構え、3代目主人松之助が半月弁当を考案、折詰弁当は梅3,780円・月4,860円・花6,480円・松8,100円・白川11,880円・八坂14,040円・東山21,600円 (税込、白川・八坂・東山は数量限定)、半月弁当4,320〜5,940円、松花堂弁当7,020円・8,640円、注文は全て電話で前日までの完全予約制、販売・予約受付11:30〜18:00、当日中に食べる、東山区・中京区などへ配達、6〜9月は衛生を考え基本的に販売中止、日曜と第2・最終月曜定休。食べログ: 弁当、東山区西之町213、店内飲食不可、カード不可、The Tabelog Award 2020 Bronze。口コミ (2025年10月〜2026年9月、英語): 日本一の仕出し弁当、Minami-za への配達、期間限定の昼の hamo mabushi。',
      confidence: 'medium', sources: [SITE, 'https://hishiiwa.com/en/', 'https://hishiiwa.com/ja/about/', 'https://hishiiwa.com/ja/order/', 'https://hishiiwa.com/ja/menu/', TB, R + 'B200168346/', R + 'B23942303/', R + 'B516338813/', R + 'B520113851/', R + 'B525802740/', R + 'B533218463/', R + 'B534716147/', R + 'B534892204/', R + 'B535026824/', R + 'B536161193/'] },
    cultural_comfort: { level: 'relay', note: 'Orders by phone only, by the day before; the official English page says there are no English-speaking staff and suggests booking through your hotel concierge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新門前通大和大路東入西之町213',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menu and ordering rules; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006435, 135.774509); cross-checked: GSI 京都府京都市東山区西之町213番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: ['https://hishiiwa.com/ja/menu/'],
    price_note: 'Official menu, tax included (read November 2026); contents change with the season.', last_checked: TODAY, items: [
      it('折詰弁当 梅', '', 'Boxed bento "Ume", the most compact', '¥3,780', 'Bento', 'ask', 'no', 'Official site.', 'ume'),
      it('折詰弁当 月', '', 'Boxed bento "Tsuki", adds duck breast and bamboo-leaf sushi', '¥4,860', 'Bento', 'ask', 'no', 'Official site.', 'tsuki'),
      it('折詰弁当 花', '', 'Orizume bento Hana, about 20 dishes', '¥6,480', 'Bento', 'ask', 'no', 'Official site.', 'hana'),
      it('折詰弁当 松', '', 'Boxed bento "Matsu", the largest single tier', '¥8,100', 'Bento', 'ask', 'no', 'Official site.', 'matsu'),
      it('白川', '', 'Two-tier bento "Shirakawa" with chirashi sushi, for about two (limited)', '¥11,880', 'Bento', 'ask', 'no', 'Official site.', 'shirakawa'),
      it('八坂', '', 'Two-tier Orizume bento Yasaka, adds two kinds of sushi, for about two (limited)', '¥14,040', 'Bento', 'ask', 'no', 'Official site.', 'yasaka'),
      it('東山', '', 'Two-tier bento "Higashiyama", for 3–4 (limited)', '¥21,600', 'Bento', 'ask', 'no', 'Official site.', 'higashiyama'),
      it('半月弁当', '', 'Hangetsu (half-moon) bento with a seasonal soup', '¥4,320–5,940', 'Bento', 'ask', 'no', 'Official site.', 'hangetsu'),
      it('松花堂弁当', '', 'Shokado bento with a seasonal soup', '¥7,020 / ¥8,640', 'Bento', 'ask', 'no', 'Official site.', 'shokado'),
    ] }, {
    cuisine: '1829年からの京の仕出し。京料理の折詰弁当を予約で (公式サイト)・梅3,780円、月4,860円 (鴨ロースや笹巻寿司が加わる)、花6,480円 (20品ほど、いちばん親しまれている折詰)、松8,100円、二段の白川11,880円 (ちらし寿司、2人前ほど)、八坂14,040円、東山21,600円 (3〜4人前)、数量限定、季節のお椀付きの半月弁当4,320〜5,940円、松花堂弁当7,020円・8,640円 (公式サイト、税込)・2025年10月: 笹で包んだ鯛の寿司、dashimaki、海老の煮物、鰆の焼き物、Hachiman 風に巻いた鰻、鴨ロース、鶏の matsukaze、山椒の甘い ayu、銀杏・2026年8〜9月の期間限定の昼: ご飯に hamo mabushi、焼きたての dashimaki、海老の shinjo の椀、漬物、ぶどうのゼリー、4,000〜5,999円',
    neighborhood: '東山の新門前通、Tatsumi Bridge を渡ってすぐ。三条駅から徒歩7分',
    gf_detail: '注文時に要確認。グルテンの情報なし。煮物、焼き物、寿司、揚げ物など20品ほどの京料理の折詰 (公式サイト、2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台にした京料理で、鴨ロース、鰻、魚、海老を使う (2025年の口コミ)。',
    notes: '[弁当・新門前、1829年からの京の仕出し弁当] 祇園の仕出し屋で、口コミでは日本一の弁当という声が多い。鴨ロース、見事な dashimaki、笹巻寿司、鰻、一つずつ味を含ませた炊き合わせなど20品ほどが、冷めてもおいしい。店で食べる席はなく、前日までに電話で注文して新門前通で受け取り (近隣は配達も)、当日中に Minami-za で、新幹線で、ホテルの部屋で。3,780円から、二段は2人以上向け。現金のみ、日曜定休、6〜9月は基本的に販売休止。2026年の夏の終わりには、ご飯に hamo をのせた期間限定の昼ごはんを店内で出した。',
  });
}

// ================================================================ ぎをん 遠藤
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019418/'; const R = TB + 'dtlrvwlst/';
  const WARAKU = 'https://intojapanwaraku.com/travel/253602/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_gion_endo', name: 'ぎをん 遠藤 (Gion Endo)', category: 'MOM_AND_POP',
    lat: 35.005005, lng: 135.775658, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An à la carte menu of some 70 dishes, so sashimi, grilled fish and salt-grilled dishes can be chosen; the famous horse mackerel fry, fried oysters and tempura are breaded or battered (Waraku 2024; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kappo; vegetable dishes such as dashi-soaked eggplant rely on dashi (2026 reviews).',
    hours_raw: '18:00–24:00 Mon–Sat; closed Sunday (Tabelog); Waraku (2024) also gives public holidays as closed. Booking needed (Waraku 2024), by phone 075-551-7271 (Tabelog). 16 seats: 8 at the counter, 8 at tables (Tabelog). Non-smoking (Tabelog). Cards (JCB, AMEX, Diners) (Tabelog). Inside the 楽宴小路 alley off Hanamikoji, 381 m from Gion-Shijo Stn (Tabelog). Opened 25 November 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, inside the 楽宴小路 alley just off Hanamikoji — about 6 min from Gion-Shijo Stn',
    cuisine: 'A counter kappo of seasonal fish, ordered à la carte from a handwritten menu of about 70 dishes, from sashimi, grilled and simmered fish to salads, omelettes, rice bowls and fried rice (Waraku 2024; 2026 reviews) · signature: a thick, rare-fried horse mackerel fry with Worcester sauce and mayonnaise (Waraku 2024; 2025–2026 reviews) · sashimi of Akashi sea bream, striped jack and tuna; white-grilled anago; braised sea bream head · winter: drunken Matsuba crab in sake (January and March 2026), koppe crab and fried oysters (December 2025) · spring 2026: braised baby octopus with roe, Omba bamboo shoots, sake-steamed sea bream head, beef cutlet, ginger pork, sea urchin and salmon roe rice bowl, grilled rice ball · sake list · diners spend about ¥15,000–39,999; Waraku gave ¥10,000–15,000 a head in 2024',
    website: null, gmaps: gm('ぎをん 遠藤'), menu_url: null,
    notes: "[Kappo · Gion, the à la carte fish counter] Down a narrow alley off Hanamikoji, a calm counter where you order what your appetite wants from a handwritten board of about seventy dishes. Owner-chef Kouta Endo comes from a family of fishmongers who supply Kyoto's famous restaurants, so the fish is outstanding: Akashi sea bream and striped jack as sashimi, a thick horse mackerel fry still rare in the middle that diners call the best anywhere, drunken Matsuba crab in winter, and a grilled rice ball to finish. Regulars come as a first stop or a late second one; it is open to midnight. Book by phone; closed Sundays.",
    chef_bio: { chef_name: 'Kouta Endo (遠藤功太; reading こうた per Waraku; romaji from a June 2026 review)', roles: ['Owner-chef'], origin: null,
      background: 'Per Waraku (April–May 2024 issue, web reprint November 2024): opened in Gion in 2011 as a counter kappo of fish dishes where you eat what you like, as much as you like; the family business is a fish shop that supplies famous restaurants; the motto is to make the most of the finest ingredients quickly and deliciously. A June 2026 review adds that the family fish shop is now run by a brother and that simmered dishes are cooked first and seasoned after. Tabelog Award Bronze 2017–2020, 2025, 2026; Japanese cuisine WEST "Tabelog 100" 2025 (Tabelog).',
      philosophy: 'To make the most of the finest ingredients, quickly and deliciously (Waraku 2024).', specialty: 'Horse mackerel fry; sashimi; drunken crab in season.',
      anecdotes: [
        { text: '"The friendly owner creates a warm and inviting atmosphere." — January 2026.', source: R + 'B219233829/' },
        { text: '"Here, the dilemma isn’t about “what to choose” but rather “what to give up.”" — October 2025.', source: R + 'B518725489/' },
        { text: '"It’s fantastic that we can enjoy such high-quality fish a la carte until late at night." — March 2026.', source: R + 'B523950606/' },
      ],
      japanese_sources_summary: '和樂 (2024年4・5月号、web 2024年11月): ぎをん 遠藤、2011年に祇園にオープン、魚料理を中心に好きなものを好きなだけ楽しめるカウンター割烹、店主の遠藤功太 (こうた) さん、実家は有名店御用達の魚店、「最強の食材を活かすべく、手早くおいしく」がモットー、旬の魚のお造りや焼き物、煮物、サラダにオムレツ、丼からチャーハンまで70種ほど、「最強のアジフライ」はウスターソースとマヨネーズで、穴子の白焼き、明石の鯛のお造り、鯛のあら炊き、ひとり10,000〜15,000円が目安、18時〜、要予約、日曜・祝日休み。食べログ: 日本料理、祇園町北側347-118 楽宴小路内、月〜土18:00〜24:00、日曜休み、16席 (カウンター8、テーブル8)、カード可、2011年11月25日オープン、The Tabelog Award Bronze 2017〜2020・2025・2026、日本料理 WEST 百名店 2025。口コミ (2025年10月〜2026年8月、英語): アジフライ、Matsuba crab の酔っ払い蟹、気さくな大将。',
      confidence: 'medium', sources: [WARAKU, TB, R + 'B219233829/', R + 'B320356814/', R + 'B515610481/', R + 'B518501520/', R + 'B518725489/', R + 'B523335843/', R + 'B523950606/', R + 'B524551001/', R + 'B531251650/', R + 'B535323486/'] },
    cultural_comfort: { level: 'japanese', note: 'A handwritten Japanese menu ordered dish by dish; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-118 楽宴小路内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the 2026 Bronze award; reviews dated through August 2026; Waraku feature 2024.' },
    pin_source: `Tabelog ${TB} (35.005077, 135.775658), set 8 m south so as not to sit on mp_tempura_kyoboshi (6 m away); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WARAKU, R + 'B524551001/'],
    price_note: 'No published prices; Waraku (2024) gave ¥10,000–15,000 a head; a March 2026 meal of 15 dishes with drinks came to ¥23,000.', last_checked: TODAY, items: [
      it('アジフライ', '', 'Horse mackerel fry, thick and rare-fried', '', 'À la carte', 'no', 'no', 'Breaded; Waraku 2024 and 2025–2026 reviews.', 'aji_fry'),
      it('お造り', '', 'Sashimi of the day (sea bream, striped jack, tuna)', '', 'À la carte', 'ask', 'no', '2026 reviews.', 'sashimi'),
      it('', '', 'Drunken Matsuba crab (winter)', '', 'À la carte', 'ask', 'no', 'January and March 2026.', 'drunken_crab'),
      it('', '', 'Grilled rice ball', '', 'Rice', 'ask', 'ask', '2026 reviews.', 'yaki_onigiri'),
    ] }, {
    cuisine: '旬の魚のカウンター割烹。手書きの品書き70種ほどから一品ずつ、お造り、焼き物、煮物からサラダ、オムレツ、丼、チャーハンまで (和樂 2024年、2026年の口コミ)・名物: 中がレアの厚い「最強のアジフライ」をウスターソースとマヨネーズで (和樂 2024年、2025〜2026年の口コミ)・明石の鯛、shima aji、マグロのお造り、穴子の白焼き、鯛のあら炊き・冬: 日本酒に漬けた Matsuba crab の酔っ払い蟹 (2026年1月・3月)、koppe crab、牡蠣フライ (2025年12月)・2026年春: 子持ちの飯蛸、Omba の筍、鯛の頭の酒蒸し、ビフカツ、豚の生姜焼き、雲丹とイクラの丼、焼きおにぎり・日本酒・口コミの予算は約15,000〜39,999円、和樂 (2024年) ではひとり10,000〜15,000円が目安',
    neighborhood: '祇園、花見小路からすぐの楽宴小路の中。祇園四条駅から徒歩約6分',
    gf_detail: '要確認。70種ほどの一品料理なので、お造りや焼き魚などを選べる。名物のアジフライ、牡蠣フライ、天ぷらは衣付き (和樂 2024年、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚が中心の割烹で、揚げ茄子の煮浸しなどの野菜料理も出汁を使う (2026年の口コミ)。',
    notes: '[割烹・祇園、一品で頼む魚のカウンター] 花見小路から入った細い路地の、落ち着いたカウンター。手書きの品書き70種ほどから、その日の腹具合で好きなものを頼む。店主の遠藤功太さんの実家は京都の名店御用達の魚店で、魚は折り紙付き: 明石の鯛や shima aji のお造り、中がレアの厚いアジフライは「最強」と評判、冬は Matsuba crab の酔っ払い蟹、締めに焼きおにぎり。一軒目にも、夜遅い二軒目にも。24時まで営業。予約は電話で、日曜休み。',
  });
}

// ================================================================ 祇園 きだ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027783/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/restaurant/100001286147/';
  const MICHELIN = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/gion-kida';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_kida', name: '祇園 きだ (Gion Kida)', category: 'MOM_AND_POP',
    lat: 35.002501, lng: 135.776121, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a long omakase with soy-seasoned sushi, fried dishes and, at times, ramen or crab noodles (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki of crab, fugu, tuna, eel and beef (2025–2026 reviews).',
    hours_raw: 'Dinner from 18:00; closed irregularly (Tabelog); the Michelin Guide page gives 18:00–22:00. Reservation only, by phone 075-551-3923 (Tabelog); hard to book (October 2026 review). Omakase course ¥35,000 before tax and service (Tabelog); diners report ¥40,000–79,999 with drinks. Courses run over three hours (June 2025 review). Each December the shop turns into "Izakaya Kida", an à la carte month of about 84 dishes (December 2025 reviews). 14 seats: a counter of 8 and a private counter of 6 (Tabelog). Non-smoking (Tabelog). Cards (JCB, AMEX, Diners) (Tabelog). Photos allowed, but posting them online is not encouraged (Tabelog, May 2025). About 6 min from Gion-Shijo Stn (Tabelog). Opened 17 June 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a hideaway in the 祇園町南側 lanes east of Hanamikoji — about 6 min from Gion-Shijo Stn',
    cuisine: 'A generous Kyoto omakase with nigiri sushi, built on the idea of 因縁果, cause, condition and result (Michelin Guide; June 2025 review) · omakase ¥35,000 plus tax and service (Tabelog) · October 2026: Jin Goemon sweet potato with crab sauce, sweet sea bream from Yahatahama with Nara Matsutake soup, Miyazu sea bream, Kesennuma bonito, marinated tuna from Matsumae, Sakai anago, salmon roe and Muscat sushi, Kagoshima beef shabu-shabu, eel, mocha ice cream with Mont Blanc · November 2025: koppe crab omelette, fugu sashimi, eel and cucumber roll, crab hot pot in white miso, Matsuba crab fried rice, ¥59,000 with drinks · March 2026: sardine sushi, grilled eel · December only, "Izakaya Kida": oden, sashimi, sushi, grilled and fried dishes à la carte (¥32,800 for 19 dishes and 8 drinks, December 2025) · sake and wine',
    website: null, gmaps: gm('祇園 きだ'), menu_url: null,
    notes: "[Kaiseki · Gion, a Sasaki alumnus's generous counter] Yasuo Kida spent 27 years beside Hiroshi Sasaki at Gion Sasaki and was first head chef of its offshoot 楽味 before opening Gion Kida in 2016. Dinner is a long, lavish omakase — crab, fugu, Matsutake, marinated tuna sushi, Kagoshima beef — with portions diners call generous and a pace of three hours or more; each December the room turns into \"Izakaya Kida\", an à la carte feast of oden and sushi. Regulars praise the chef's warmth. Reservation only and hard to book; around ¥35,000 plus tax and service, more with drink.",
    chef_bio: { chef_name: 'Yasuo Kida (木田; romaji from a June 2025 review, surname in kanji from Retty reviews)', roles: ['Owner-chef'], origin: null,
      background: 'Per a June 2025 review: trained for 27 years under Hiroshi Sasaki of 祇園 さゝ木 and was the first head chef at 楽味, a restaurant Sasaki founded; opened Gion Kida in 2016; the review says it won a Michelin star in the Kyoto-Osaka guide. Retty reviews (2018–2019) call the chef the long-time right hand and first apprentice of Gion Sasaki who went independent after 楽味. Tabelog: opened 17 June 2016; Japanese cuisine WEST "Tabelog 100" 2021, 2023. The Michelin Guide page describes the 因縁果 approach of cooking each day\'s ingredients.',
      philosophy: '因縁果: the producer\'s land and care (cause), the season, technique and meeting with guests (condition), and the flavour that results (June 2025 review; Michelin Guide).', specialty: 'Crab dishes in season; marinated tuna sushi; December "Izakaya Kida".',
      anecdotes: [
        { text: '"Mr. Kida\'s warm personality makes every meal enjoyable." — June 2025, an eighth visit.', source: R + 'B472635494/' },
        { text: '"Gion Kida opens its limited-time Izakaya Kida every December!!" — December 2025.', source: R + 'B516444788/' },
        { text: '"An incredibly popular restaurant that\'s hard to book" — October 2026.', source: R + 'B537787047/' },
      ],
      japanese_sources_summary: 'Retty (祇園 きだ): 東山区祇園町南側570-192、2018年の口コミ「祇園さゝ木で長年右腕として働いていた木田さんが、楽味を経て一昨年独立して出されたお店」、2019年の口コミ「祇園ささきの一番弟子の木田さん」。ミシュランガイド (日本語ページ): 日本料理、一年の旬を七十二候に分ける、因縁果、18:00〜22:00。食べログ: 日本料理、予約のみ、18時から、不定休、おまかせコース35,000円 (税・サービス料別)、14席 (カウンター8、個室カウンター6)、カード可、写真は可だがネット掲載は好まれない (2025年5月時点)、2016年6月17日オープン、日本料理 WEST 百名店 2021・2023。口コミ (2025年6月〜2026年10月、英語): 佐々木浩さんのもとで27年、楽味の初代料理長、量の多いおまかせ、12月の「Izakaya Kida」、予約が取りにくい。',
      confidence: 'medium', sources: [TB, RETTY, MICHELIN, R + 'B438621754/', R + 'B472635494/', R + 'B509297203/', R + 'B515783091/', R + 'B516444788/', R + 'B519857524/', R + 'B525175916/', R + 'B531111579/', R + 'B537787047/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the counter; booking by phone only, so a hotel concierge may help.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-192',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Michelin Guide page.' },
    pin_source: `Tabelog ${TB} (35.002501, 135.776121); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 227m — the large 570 block, so the pin stays on the Tabelog point; kyoto_gion_sakagawa is 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B519857524/'],
    price_note: 'Course price from Tabelog (before tax and service); December à la carte total from a December 2025 review.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course', '¥35,000', 'Course', 'ask', 'no', 'Tabelog; tax and service extra.', 'omakase'),
      it('', '', '"Izakaya Kida" à la carte (December only)', '', 'À la carte', 'ask', 'no', 'December 2025 reviews: about 84 dishes.', 'izakaya_kida'),
    ] }, {
    cuisine: 'にぎり寿司も入るたっぷりの京都のおまかせ。因縁果の考え方で (ミシュランガイド、2025年6月の口コミ)・おまかせコース35,000円 (税・サービス料別、食べログ)・2026年10月: Jin Goemon のさつまいもの蟹あん、Yahatahama の甘鯛と Nara の Matsutake のお椀、Miyazu の鯛、Kesennuma の戻り鰹、Matsumae のマグロの漬け、Sakai の anago、イクラとマスカットの寿司、Kagoshima の牛の shabu-shabu、鰻、モカのアイスとモンブラン・2025年11月: koppe crab の玉子焼き、fugu sashimi、鰻と胡瓜の巻物、白味噌の蟹鍋、Matsuba crab の炒飯、飲み物込みで59,000円・2026年3月: 鰯の寿司、焼き鰻・12月だけの「Izakaya Kida」: oden、お造り、寿司、焼き物、揚げ物を一品で (2025年12月、19品と8杯で32,800円)・日本酒とワイン',
    neighborhood: '祇園、花見小路の東の祇園町南側の路地の隠れ家。祇園四条駅から徒歩約6分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油を使う寿司、揚げ物、時にはラーメンや蟹の麺もある長いおまかせ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、蟹、fugu、マグロ、鰻、牛を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・祇園、さゝ木出身の気前のいいカウンター] 店主の木田さんは祇園 さゝ木で佐々木浩さんのもとに27年、その店の楽味の初代料理長を経て、2016年に独立。夜は長く豪華なおまかせで、蟹、fugu、Matsutake、マグロの漬けの寿司、Kagoshima の牛と、量はたっぷり、3時間以上かけて進む。毎年12月は oden や寿司を一品で頼む「Izakaya Kida」に。常連は大将の温かさを褒める。予約のみで取りにくい。35,000円ほどに税とサービス料、飲み物は別。',
  });
}

// ================================================================ ひつじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018786/'; const R = TB + 'dtlrvwlst/';
  const Thu = day(['11:30', '18:00']); const Sat = day(['11:00', '18:00']);
  put({
    id: 'kyoto_hitsuji_donuts', name: 'ひつじ (Hitsuji)', category: 'MOM_AND_POP',
    lat: 35.015005, lng: 135.764952, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-dough donuts, including a whole-wheat donut (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Natural-yeast donuts in kinako, brown sugar and hojicha; no ingredient list is published, and the cream and chocolate-custard donuts are filled (2026 reviews).',
    hours_raw: 'Thu and Fri 11:30–18:00, Sat 11:00–18:00; closed Mon–Wed and Sun, plus occasional breaks including summer, announced on Facebook (Tabelog). A numbered-ticket system: on Saturdays people queue from before 9:30 and tickets for 15-minute slots are handed out from about 10:00; later in the day slots can run hours ahead (July–October 2026 reviews). Up to five donuts per ticket, made to order (October 2026 review). A small eat-in counter for about 3–4 (July 2026 reviews), though Tabelog notes the café closed in 2015. Electronic money accepted, no cards (Tabelog). About 7 min from Marutamachi Stn (Tabelog). Opened 25 September 2011 (Tabelog).',
    hours: { 3: Thu, 4: Thu, 5: Sat }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori near the Kyoto Imperial Palace, a white awning marked ひつじ — about 7 min from Marutamachi Stn',
    cuisine: 'Natural-yeast donuts fried to order, served warm (2026 reviews) · since September 2026 the donuts are all round, with brown sugar in place of wasanbon (October 2026 review) · examples: Tanba black bean kinako ¥330–367, Hateruma brown sugar ¥330, Ippodo hojicha ¥350–378, cinnamon, chocolate ¥410–442, cream donut ¥500, chocolate custard ¥529, whole-wheat kinako (July–October 2026 reviews) · drinks for the counter: café latte, tea, coffee ¥500 · Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022, 2023',
    website: null, gmaps: gm('ひつじ ドーナツ 京都'), menu_url: null,
    notes: "[Sweets · near the Imperial Palace, Kyoto's queued-for donuts] A small white-awninged shop where owner Takahiro Shimomura, once of the bakery Hohoemi, makes natural-yeast donuts: chewy, light, gently sweet, rolled in Tanba black bean kinako, brown sugar or hojicha, and best eaten warm. It is a numbered-ticket affair: on Saturdays the line starts before 9:30, tickets go out around 10:00 for timed slots, and each ticket buys up to five donuts, fried to order. A few counter seats let you eat one hot with a latte. Open Thursday to Saturday only; from about ¥330.",
    chef_bio: { chef_name: 'Takahiro Shimomura (October 2026 review: "the owner, Mr. Takahiro Shimomura")', roles: ['Owner, makes the donuts (October 2026 review: "all processes managed by the owner")'], origin: null,
      background: 'Per October 2026 reviews: the owner previously ran a bakery called "Hohoemi", now closed, and opened Hitsuji in September 2011; the name stands for something fluffy, gentle, warm and happy. In September 2026 the menu was renewed: round donuts only, brown sugar instead of wasanbon, and donuts made to order per ticket (October 2026). Tabelog Sweets WEST "Tabelog 100" 2018, 2019, 2020, 2022, 2023 (Tabelog). A September 2026 diner notes the shop Assemblage Plus next door.',
      philosophy: null, specialty: 'Natural-yeast donuts; Tanba black bean kinako.',
      anecdotes: [
        { text: '"With one ticket, you can purchase up to five donuts." — October 2026.', source: R + 'B531296956/' },
        { text: '"There are only four counter seats for dining in, so you might have to wait a bit." — July 2026.', source: R + 'B533649833/' },
        { text: '"The freshly made ones are the best, so I recommend eating them soon after purchase." — August 2026.', source: R + 'B533332759/' },
      ],
      japanese_sources_summary: '食べログ: ひつじ、ドーナツ・カフェ、中京区大炊町355-1、丸太町駅から徒歩約7分、木・金11:30〜18:00、土11:00〜18:00、月・火・水・日休み、夏休みなど臨時休業は Facebook で、9席、電子マネー可・カード不可、テイクアウト、2011年9月25日オープン、2015年9月29日でカフェは終了との記載、スイーツ WEST 百名店 2018・2019・2020・2022・2023。口コミ (2026年7〜10月、英語): 天然酵母のドーナツ、整理券制、1枚で5個まで、揚げたて、2026年9月から丸い形と黒糖に、店主の Takahiro Shimomura さん、小さなイートインのカウンター。',
      confidence: 'medium', sources: [TB, R + 'B144380013/', R + 'B383258647/', R + 'B531296956/', R + 'B531999563/', R + 'B532306578/', R + 'B533332759/', R + 'B533649833/', R + 'B535929497/', R + 'B536778010/', R + 'B537654340/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-buy with numbered tickets; come early on Saturdays.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大炊町355-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026, including the September 2026 menu change.' },
    pin_source: `Tabelog ${TB} (35.015005, 135.764952); cross-checked: GSI 京都府京都市中京区大炊町355番地 (lot) 67m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531296956/', R + 'B535929497/'],
    price_note: 'Prices from October and September 2026 reviews after the menu change; earlier reviews show slightly different prices.', last_checked: TODAY, items: [
      it('', '', 'Natural-yeast donut, Tanba black bean kinako', '¥330', 'Donuts', 'no', 'ask', 'October 2026.', 'kinako'),
      it('', '', 'Natural-yeast donut, Hateruma brown sugar', '¥330', 'Donuts', 'no', 'ask', 'October 2026.', 'brown_sugar'),
      it('', '', 'Natural-yeast donut, Ippodo hojicha', '¥350', 'Donuts', 'no', 'ask', 'October 2026; ¥378 in September.', 'hojicha'),
      it('', '', 'Chocolate donut', '¥420', 'Donuts', 'no', 'ask', 'October 2026.', 'chocolate'),
      it('', '', 'Cream donut', '¥500', 'Donuts', 'no', 'no', 'October 2026.', 'cream'),
    ] }, {
    cuisine: '注文ごとに揚げる天然酵母のドーナツを温かいうちに (2026年の口コミ)・2026年9月からすべて丸い形で、wasanbon の代わりに黒糖 (2026年10月の口コミ)・例: Tanba の黒豆 kinako 330〜367円、Hateruma の黒糖330円、Ippodo の hojicha 350〜378円、シナモン、チョコレート410〜442円、クリームドーナツ500円、チョコカスタード529円、全粒粉の kinako (2026年7〜10月の口コミ)・カウンターの飲み物: カフェラテ、紅茶、コーヒー500円・食べログ スイーツ WEST 百名店 2018〜2020・2022・2023',
    neighborhood: '京都御所の近くの Ebisugawa-dori、「ひつじ」の白い日よけが目印。丸太町駅から徒歩約7分',
    gf_detail: 'グルテンフリーではありません。小麦の生地のドーナツで、全粒粉のドーナツもある (2026年の口コミ)。',
    vegan_detail: '要確認。kinako、黒糖、hojicha の天然酵母のドーナツ。原材料は公開されておらず、クリームやチョコカスタードは中にクリーム入り (2026年の口コミ)。',
    notes: '[スイーツ・京都御所の近く、行列のドーナツ] 白い日よけの小さな店で、閉店したパン屋「Hohoemi」の店主だった Takahiro Shimomura さんが天然酵母のドーナツを揚げる。もちっと軽く、甘さ控えめ、Tanba の黒豆 kinako、黒糖、hojicha をまぶし、温かいうちが一番。整理券制で、土曜は9時半前から並び、10時ごろに時間帯ごとの券が配られ、券1枚で5個まで、注文してから揚げる。数席のカウンターでラテと揚げたてを。木〜土曜のみ営業、330円ほどから。',
  });
}

save();
