// Kyoto priority (kyoto-missed), worker osw13, batch 85 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 富之上 祇園本店, まとゐ鮨, とらふぐ茶屋 山福, 京いざかや くぼ田.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043252', 'large parent: 神戸牛 鉄板焼き 祇園縄手 之いち belongs to the 神戸牛 吉祥吉 group, which says it runs about 50 Kobe-beef shops nationwide, five of them in Kyoto (吉祥吉 京都本店, 三条河原町, 祇園 千久いち, 先斗町 之いち, 祇園縄手 之いち) — kisshokichi-kyoto.com');
skip('26041494', 'chain: 京はやしや 京都店 is one of 5+ same-name 京はやしや shops (official shop list kyo-hayashiya.jp/shoplist: Kyoto, Harumi, Takashimaya Times Square, Seibu Ikebukuro, Sogo Yokohama, Sogo Omiya, Hong Kong; Tabelog group G02389)');
skip('26045334', 'chain: Cafe Lumen is the daytime café of 河道屋倖松庵 at the same address (橘町448; a July 2026 review says the soba house "has been renovated into a café" serving soba from its Meiji-era noodle works); 河道屋倖松庵 26040067 was skipped as part of the 5+ same-name 河道屋 group (osw8-9)');

// ================================================================ 富之上 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043438/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tominojo.com/shop/gionhonten/'; const GROUP = 'https://tominojo.com/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_tominojo_gion_honten', name: '京都和牛すき焼きしゃぶしゃぶ 富之上 祇園本店 (Tominojo Gion Honten)', category: 'OMNI',
    lat: 35.004916, lng: 135.772897, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki warishita, shabu-shabu dipping sauces and udon in the sets; Tabelog notes allergy information is available — ask (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu sukiyaki and shabu-shabu sets with raw egg (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–23:00 (food last order 22:00). Reservations taken; 120-minute limit; same-day cancellations or changes may incur a fee; more than 10 minutes late may be treated as a cancellation. 21 counter seats; non-smoking; free Wi-Fi. Menus in English, Chinese and Korean; English-speaking staff; children welcome. Cards, e-money and QR. Opened 1 September 2025 (Tabelog). One of four 富之上 shops (official site: 祇園本店, 三条河原町店, 祇園八坂店, 匠 祇園四条店).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata at Shijo, east bank of the Kamo — 4 min walk from Gion-Shijo exit 7',
    cuisine: 'A counter-only Wagyu sukiyaki and shabu-shabu house where staff slice the meat from the block in front of you (Tabelog; 2025–2026 reviews) · sets from ¥3,300 (September 2025); Kuroge Wagyu chuck eye roll 140 g, sukiyaki or shabu-shabu ¥4,400 (September 2025; February 2026); Kobe beef chuck eye roll 140 g ¥6,600 (September 2026) · sets come with vegetables, grilled tofu, rice and egg; extra domestic beef 100 g ¥1,600 (September 2026) · one pot per person; free rice refills, a second egg for sukiyaki, udon to finish (2025–2026) · rice cooked in a pot (September 2025); a free printed photo (2025–2026)',
    website: SITE, gmaps: gm('富之上 祇園本店 常盤町'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu sukiyaki & shabu-shabu · Kamo riverbank at Shijo, meat carved at the counter] A modern 21-seat counter where staff carve Wagyu off the block in front of you for one-person sukiyaki or shabu-shabu pots, from about ¥3,300 to ¥6,600 for Kobe beef, with free rice refills. Reviewers call it good value; some find it tourist-oriented and average. Open daily 11:00–23:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 September 2025 (Tabelog) as the first of four 富之上 shops; the group opened its second shop in December 2025 and its third in April 2026 (official site). Reviewers praise the theatre of slicing at the counter, cheerful staff and the price; criticism covers early operations that "were still a bit lacking" (September 2025), "a very average impression" (March 2026), meat "a bit too fatty" and an inbound-tourist feel (May 2026), and in September 2026 a group "Yoi Sho!" call at the carving, staff who struggled to follow requests, and dry rice.',
      philosophy: null,
      specialty: 'Wagyu sukiyaki and shabu-shabu sets.',
      anecdotes: [
        { text: 'February 2026: "I had actually made a reservation at another location, but I mistakenly came to this restaurant. They kindly contacted the other branch and changed my reservation for me."', source: R + 'B529343586/' },
        { text: 'September 2026: "During the performance of cutting the meat, the whole restaurant was encouraged to say \'Yoi Sho!\' together, but I wondered if that was really necessary."', source: R + 'B536004361/' },
      ],
      japanese_sources_summary: '食べログ: 京都和牛すき焼きしゃぶしゃぶ 富之上 祇園本店、すき焼き・しゃぶしゃぶ・鍋、東山区常盤町161-1、京阪祇園四条駅7番出口から徒歩4分、毎日 11:00〜23:00 (料理 L.O. 22:00)、予約可、120分制、当日のキャンセル料あり、10分遅れで取消のことも、21席 (カウンター)、禁煙、多言語メニュー、英語のスタッフ、カード・電子マネー・QR可、2025年9月1日オープン。公式サイト: 祇園本店、三条河原町店、祇園八坂店、匠 祇園四条店。口コミ (2025年8月〜2026年9月、英語): 目の前で塊から切る和牛、3,300円から、黒毛和牛140gのすき焼き・しゃぶしゃぶ4,400円、神戸牛140g 6,600円、国産牛100g追加1,600円、ひとり鍋、ご飯おかわり無料、すき焼きは卵1個追加可、締めのうどん、写真のプリントの無料サービス、開店直後は運営が不慣れ、普通、脂が多い、インバウンド向け、掛け声、ご飯がかたい (2026年9月)。',
      confidence: 'medium', sources: [TB, SITE, GROUP, R + 'B514467730/', R + 'B518124105/', R + 'B518273744/', R + 'B519761462/', R + 'B524526392/', R + 'B525938712/', R + 'B528952576/', R + 'B529343586/', R + 'B534287419/', R + 'B536004361/', R + 'B536073446/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町161-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site, with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004916, 135.772897); cross-checked: GSI 京都府京都市東山区常盤町161番地 (lot) 35m; nearest pin kyoto_ristorante_dei_cacciatori 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514467730/', R + 'B529343586/', R + 'B536004361/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu or sukiyaki set, Kuroge Wagyu chuck eye roll 140 g', '¥4,400', 'Set', 'no', 'no', 'September 2025; February 2026.', 'wagyu_set'),
      it('', '', 'Sukiyaki set, Kobe beef chuck eye roll 140 g', '¥6,600', 'Set', 'no', 'no', 'September 2026.', 'kobe_sukiyaki_set'),
      it('', '', 'Extra domestic beef chuck eye roll 100 g', '¥1,600', 'Add-on', 'ask', 'no', 'September 2026.', 'beef_extra'),
    ] }, {
    cuisine: 'カウンターだけの和牛すき焼き・しゃぶしゃぶの店で、目の前で塊から肉を切る (食べログ、2025〜2026年の口コミ)・3,300円から (2025年9月)、黒毛和牛140gのすき焼きかしゃぶしゃぶ4,400円 (2025年9月、2026年2月)、神戸牛140g 6,600円 (2026年9月)・野菜、焼き豆腐、ご飯、卵付き。国産牛100gの追加1,600円 (2026年9月)・ひとり鍋、ご飯のおかわり無料、すき焼きは卵1個追加、締めのうどん (2025〜2026年)・釜で炊くご飯 (2025年9月)、写真のプリントの無料サービス (2025〜2026年)',
    neighborhood: '四条の鴨川東岸の川端。祇園四条駅7番出口から徒歩4分',
    gf_detail: 'グルテンフリーではない: すき焼きの割下、しゃぶしゃぶのたれ、セットのうどん。食べログによるとアレルギー情報ありなので相談を (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛のすき焼き・しゃぶしゃぶに生卵 (2025〜2026年の口コミ)。',
    notes: '[和牛すき焼き・しゃぶしゃぶ・四条の鴨川沿い、カウンターで切る肉] 21席のモダンなカウンターで、目の前で塊から切る和牛をひとり鍋のすき焼きかしゃぶしゃぶで。3,300円ほどから神戸牛の6,600円まで、ご飯はおかわり無料。値段の割によいという声と、観光客向けで普通という声。毎日11時〜23時。',
  });
}

// ================================================================ まとゐ鮨
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000274/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gionmatoi.jp/';
  const H = day(['17:00', '26:30']);
  put({
    id: 'kyoto_matoi_zushi_gion', name: 'まとゐ鮨 (Matoi Zushi)', category: 'OMNI',
    lat: 35.00448, lng: 135.773089, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-marinated tuna and ikura, soy and ponzu throughout, glazed conger and eel (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi bar (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon–Sat 17:00–26:30 (2:30 am); delivery 16:30–26:30; closed Sunday, public holidays, New Year and Obon. Reservations taken. 36 seats: a counter downstairs and a tatami room upstairs for groups; private rooms. Smoking allowed — an October 2026 reviewer calls this "the big issue". Cards; no e-money. Take-away. Down a narrow lane off Shijo above Nawate, east of the first turning. The official site (gionmatoi.jp) was under maintenance on 7 November 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Lane off Shijo above Nawate, Gion — 3 min walk from Gion-Shijo exit 7',
    cuisine: 'A decades-old Edo-mae sushi bar in a Gion lane, open until 2:30 am (Tabelog; 2025–2026 reviews) · omakase: jellyfish with ponzu; sashimi of sea bream, striped jack, sardine, seared bonito and squid; grilled conger; nigiri of sea bream, mackerel, sweet shrimp, soy-marinated ikura, Nemuro bafun uni, chu-toro; toro-taku and Matoi rolls; chawanmushi and clear soup (June 2026) · marinated tuna, seared red snapper, white shrimp (December 2025); fatty mackerel, octopus, colourful futomaki (April 2026); herring roe (September 2026) · take-away rolls (December 2025) · banquets upstairs with self-serve sake and shochu (October 2026)',
    website: SITE, gmaps: gm('まとゐ鮨 祇園'), menu_url: null,
    notes: '[Sushi · Gion lane off Shijo, Edo-mae till 2:30 am] A long-running, lively Edo-mae sushi counter tucked down a lane by Shijo-Nawate, where chatty chefs keep the nigiri coming until 2:30 am — a Gion after-party favourite at fair prices for the area. Smoking is allowed, which a 2026 diner calls the big drawback. Closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers describe a sushi shop that "has been in Gion for decades" (May 2026), "a long-established Edo-mae sushi restaurant embodying the essence of the geisha district" (June 2026), with lively chefs who chat with regulars and keep making sushi "without missing a beat" late at night (November 2026). Prices are not shown on the sushi menu (June 2026); reviewers still call them reasonable for Gion.',
      philosophy: null,
      specialty: 'Edo-mae nigiri, late at night.',
      anecdotes: [
        { text: 'May 2026: "Rather than the quiet, tense atmosphere of high-end sushi, it gives off the vibe of a lively, traditional sushi shop."', source: R + 'B535073988/' },
        { text: 'May 2026: "As the rain got heavier, they kindly offered me an umbrella."', source: R + 'B528635179/' },
        { text: 'October 2026: "While the food was decent, the big issue was that smoking was allowed in a sushi restaurant."', source: R + 'B537711564/' },
      ],
      japanese_sources_summary: '食べログ: まとゐ鮨、寿司、東山区四条通縄手上ル一筋目東入ル、京阪祇園四条駅7番出口から徒歩3分、月〜土 17:00〜翌2:30、出前 16:30〜翌2:30、日曜・祝日・正月・お盆休み、予約可、36席、個室あり、喫煙可、カード可、電子マネー不可、テイクアウト、サイト gionmatoi.jp (2026年11月7日はメンテナンス中)。口コミ (2025年12月〜2026年11月、英語): 祇園で何十年も続く江戸前鮨、にぎやかな板前と常連の会話、深夜まで営業で二次会向き、くらげのポン酢、刺身 (鯛、しまあじ、いわし、かつおのたたき、いか)、焼き穴子、にぎり (鯛、さば、甘えび、いくら醤油漬け、根室のエゾバフンウニ、中トロ)、トロたく巻、まとゐ巻、茶碗蒸し、お吸い物、づけまぐろ、たこ、太巻き、数の子、持ち帰りの巻き寿司、2階の座敷で宴会、すし屋で喫煙可なのが問題 (2026年10月)、値段の表示なし (2026年6月)。',
      confidence: 'medium', sources: [TB, R + 'B518577087/', R + 'B520104610/', R + 'B521236593/', R + 'B525696656/', R + 'B528635179/', R + 'B530087315/', R + 'B530262761/', R + 'B534804907/', R + 'B534968505/', R + 'B535073988/', R + 'B537711564/', R + 'B538780766/'] },
    cultural_comfort: { level: 'japanese', note: 'Lively counter; smoking allowed; no prices on the sushi menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区四条通縄手上ル一筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004480, 135.773089); address has no town or lot (四条通縄手上ル一筋目東入ル) — GSI resolves only to the ward, so marked approximate; nearest pin kyoto_kyoshun_ichie_gion 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530262761/'],
    price_note: 'No prices in the sources; reviewers paid about ¥5,000–20,000 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase sashimi and nigiri', null, 'Omakase', 'no', 'no', 'June 2026.', 'omakase'),
      it('', '', 'Matoi roll', null, 'Rolls', 'no', 'no', 'June 2026.', 'house_roll'),
      it('', '', 'Chawanmushi', null, 'Side', 'ask', 'no', 'June and September 2026.', 'chawanmushi'),
    ] }, {
    cuisine: '祇園の路地で何十年も続く江戸前鮨、深夜2時半まで (食べログ、2025〜2026年の口コミ)・おまかせ: くらげのポン酢、鯛・しまあじ・いわし・かつおのたたき・いかの刺身、焼き穴子、鯛・さば・甘えび・いくら醤油漬け・根室のエゾバフンウニ・中トロのにぎり、トロたく巻とまとゐ巻、茶碗蒸しとお吸い物 (2026年6月)・づけまぐろ、炙り真鯛、白えび (2025年12月)、脂ののったさば、たこ、色とりどりの太巻き (2026年4月)、数の子 (2026年9月)・持ち帰りの巻き寿司 (2025年12月)・2階で宴会、日本酒と焼酎は自分で注ぐ (2026年10月)',
    neighborhood: '四条縄手上ルの路地、祇園。祇園四条駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: づけまぐろ、いくら醤油漬け、醤油やポン酢、たれを塗った穴子やうなぎ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚のすし店 (食べログ、口コミ)。',
    notes: '[鮨・四条縄手の路地、深夜2時半までの江戸前] 四条縄手の路地にある老舗の江戸前鮨。話好きの板前が深夜2時半までにぎりを握り続ける、祇園の二次会の定番で、祇園にしては手頃。喫煙可で、それが大きな難点という声も (2026年)。日曜・祝日休み。',
  });
}

// ================================================================ とらふぐ茶屋 山福
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019102/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.fugu-yamafuku.com/'; const MENU = 'https://www.fugu-yamafuku.com/menu/index.html'; const ACCESS = 'https://www.fugu-yamafuku.com/access/index.html';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_torafugu_chaya_yamafuku', name: 'とらふぐ茶屋 山福 (Torafugu Chaya Yamafuku)', category: 'OMNI',
    lat: 35.005696, lng: 135.772388, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fugu karaage, tempura and ponzu-dipped tetchiri; fugu sashimi with ponzu — ask (official menu; 2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tiger-pufferfish restaurant (official site).',
    hours_raw: 'Official site: 16:00–22:00 (last order 21:00) all year since 15 January 2025; closing days irregular. Tabelog still lists 16:00–23:00, closed Tuesday. Reservations taken. 32 seats in tatami and sunken-kotatsu rooms; private rooms; private hire. Non-smoking. Cards (Mastercard, UC, Amex, JCB, Visa); no e-money or QR. On the Seseragi path along the Kamo River above Shijo (Kawabata Shijo-agaru), ground floor of ゼラジオ鴨川; a tank of live fugu by the entrance.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Seseragi path by the Kamo River, north of Shijo — 2 min walk from Gion-Shijo',
    cuisine: 'A tiger-fugu specialist by the Kamo River serving fish live from its tank (official site; 2022–2026 reviews) · courses (official menu, tax included): chunky-cut tessa course ¥6,600; large-platter tessa course ¥7,150; fugu zanmai course with charcoal-grilled fugu ¥9,240; Dai-ara VIP course with fugu shabu and fugu sushi ¥11,440 — each with appetizer, tetchiri, karaage, zosui and dessert · fugu grilled yourself over charcoal; tetchiri with fish "still moving" (2025–2026) · fugu skin with ponzu; fin sake; soft roe for the hotpot; yuzu sorbet (2023–2025) · an older ¥5,500 course (February 2023)',
    website: SITE, gmaps: gm('とらふぐ茶屋 山福 祇園'), menu_url: MENU,
    notes: '[Fugu · Kamo riverside above Shijo, live tiger fugu and big portions] A tatami-room fugu house on the riverside Seseragi path, with live tiger fugu from the tank at the door served as sashimi, charcoal-grilled and in tetchiri, then zosui. Courses ¥6,600–11,440; one November 2025 reviewer calls the portions the biggest of any fugu course tried. Farmed fugu, per one reviewer. Open daily from 16:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'The official site calls it a specialist in tora-fugu, the highest grade of pufferfish eaten in Japan. Reviewers from 2022 to 2026 praise fresh fish from the live tank, good value and attentive, mostly young staff; one November 2025 diner notes the fugu is farmed and calls the portions "the largest portions by far" of any fugu course tried. Criticism: dust on the walls and picture frames (June 2025), and staff "quite eager to clear as many dishes as possible" (October 2026). No source links it to the あごつゆしゃぶしゃぶ 山福 shabu-shabu house on Kiyamachi.',
      philosophy: null,
      specialty: 'Tiger-fugu tetchiri; charcoal-grilled fugu.',
      anecdotes: [
        { text: 'November 2025: "We decided to share one serving of zosui, which was also quite large, equivalent to about four bowls of rice, so we ended up leaving quite a bit behind."', source: R + 'B517512225/' },
        { text: 'October 2025: "To my surprise, the very fugu that had been swimming energetically in the tank just moments ago was now served on my plate… I offered a moment of respect."', source: R + 'B515851766/' },
        { text: 'July 2023: for a mother\'s birthday, "many restaurants switch to dishes featuring sweetfish in the summer, so Yamafuku is a rare gem that still serves fugu."', source: R + 'B469283575/' },
      ],
      japanese_sources_summary: '公式サイト: とらふぐ茶屋 山福、京都市東山区大和大路通三条下る弁財天町6-6-1 (川端通り四条上る・せせらぎの道沿い)、16:00〜22:00 (L.O 21:00、2025年1月15日から通年)、不定休、32席、カード可、とらふぐの専門店、山福ぶつ切りてっさコース6,600円、山福大皿てっさコース7,150円、特選山福ふぐ三昧コース9,240円、特選山福大アラＶＩＰコース11,440円 (税込)。食べログ: 山福、ふぐ、ゼラジオ鴨川 1F、16:00〜23:00、火曜休み、予約可、座敷・掘りごたつ、個室、貸切可、禁煙、電子マネー・QR不可。口コミ (2022年3月〜2026年10月、英語): 入口の生け簀、泳ぎてっちり、炭火焼きふぐ、てっさ、唐揚げ、ひれ酒、白子、雑炊、柚子シャーベット、量が多い、養殖のとらふぐ (2025年11月)、壁のほこり (2025年6月)、皿を下げるのが早い (2026年10月)。',
      confidence: 'medium', sources: [SITE, MENU, ACCESS, TB, R + 'B452055590/', R + 'B460758799/', R + 'B469283575/', R + 'B475557569/', R + 'B476750546/', R + 'B479192776/', R + 'B508145325/', R + 'B515851766/', R + 'B517512225/', R + 'B522845043/', R + 'B528279082/', R + 'B538067005/'] },
    cultural_comfort: { level: 'japanese', note: 'Tatami rooms; courses; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通三条下ル弁財天町6-6-1 ゼラジオ鴨川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005658, 135.772435), offset 6m north-west because kyoto_kamo_ryori_hokusai (弁財天町11) sits 1.9m from the Tabelog point — now 5.7m from it; cross-checked: GSI 京都府京都市東山区弁財天町6番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Course prices from the official menu page (tax included).', last_checked: TODAY, items: [
      it('山福ぶつ切りてっさコース', '', 'Chunky-cut tessa course', '¥6,600', 'Course', 'no', 'no', 'Official menu.', 'fugu_course'),
      it('山福大皿てっさコース', '', 'Large-platter tessa course', '¥7,150', 'Course', 'no', 'no', 'Official menu.', 'fugu_course_platter'),
      it('特選山福ふぐ三昧コース', '', 'Fugu zanmai course (with charcoal-grilled fugu)', '¥9,240', 'Course', 'no', 'no', 'Official menu.', 'fugu_course_zanmai'),
      it('特選山福大アラＶＩＰコース', '', 'Dai-ara VIP course (fugu shabu, fugu sushi)', '¥11,440', 'Course', 'no', 'no', 'Official menu.', 'fugu_course_vip'),
    ] }, {
    cuisine: '鴨川沿いのとらふぐ専門店で、生け簀の活きたふぐを出す (公式サイト、2022〜2026年の口コミ)・コース (公式のお品書き、税込): 山福ぶつ切りてっさコース6,600円、山福大皿てっさコース7,150円、炭火焼きふぐ付きの特選山福ふぐ三昧コース9,240円、ふぐ身しゃぶとふぐ寿司付きの特選山福大アラＶＩＰコース11,440円。いずれも付きだし、泳ぎてっちり、ふぐ唐揚げ、雑炊、デザート付き・自分で焼く炭火焼きふぐ、まだ動くふぐのてっちり (2025〜2026年)・ふぐ皮のポン酢、ひれ酒、鍋用の白子、柚子シャーベット (2023〜2025年)・以前は5,500円のコースも (2023年2月)',
    neighborhood: '四条の北、鴨川沿いのせせらぎの道。祇園四条から徒歩2分',
    gf_detail: 'グルテンフリーではない: ふぐの唐揚げ、天ぷら、ポン酢のてっちり。ポン酢で食べるてっさは要確認 (公式のお品書き、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: とらふぐの店 (公式サイト)。',
    notes: '[ふぐ・四条上ルの鴨川沿い、活きたとらふぐとたっぷりの量] せせらぎの道沿いの座敷のふぐ料理店。入口の生け簀のとらふぐをてっさ、炭火焼き、てっちりにして、締めは雑炊。コースは6,600〜11,440円で、量はどこよりも多いという声 (2025年11月)。養殖のふぐという口コミも。毎日16時から。',
  });
}

// ================================================================ 京いざかや くぼ田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043084/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-kubota.jp/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyo_izakaya_kubota_pontocho', name: '京いざかや くぼ田 (Kyo Izakaya Kubota)', category: 'OMNI',
    lat: 35.006764, lng: 135.77113, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and udon in the sets, and white-miso and red-miso dishes in the courses (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, temari sushi with fish, chicken jibu-ni and dashi throughout; some temari use mushroom, myoga or yuba (official menu; October 2026).',
    hours_raw: 'Official site and Tabelog: daily 11:00–14:30 (food last order 14:00) and 17:00–22:00 (food last order 21:00); closing days irregular. Reservations taken. Riverside noryo-doko (summer deck) seats carry a ¥1,000-a-person service charge — Tabelog, Japanese original 「・納涼床席の場合：サービス料 一人1,000円」; the deck is for middle-schoolers and up, indoors if it rains. Children under school age only in private rooms. 91 seats: counter, tatami, private rooms for 2–8. Non-smoking. Cards and PayPay; no e-money. A renovated townhouse in Pontocho south of Sanjo, facing the Kamo River and Higashiyama. Opened 2 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho south of Sanjo, on the Kamo River — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'A Pontocho townhouse izakaya by the Kamo River for temari sushi and Kyoto tempura, with a summer noryo-doko deck (official site; 2026 reviews) · lunch (official menu, tax included): obanzai, 15 temari sushi and udon ¥3,300; plus Kyoto tempura ¥4,400; plus three kinds of sashimi ¥5,500 · dinner courses ¥6,050 (Ume), ¥7,700 (Take) and ¥9,350 (Matsu): obanzai, sashimi, jibu-ni of Kyoto red jidori chicken, low-temperature Spanish mackerel with white-miso espuma, five to eight kinds of tempura, a vinegared dish, temari sushi, red miso soup, sweets; Matsu adds Kyoto beef stew (official menu) · temari with hamo, yuba, mushroom and myoga, seasoned so no soy is needed (July–October 2026); hojicha pudding (August 2026)',
    website: SITE, gmaps: gm('京いざかや くぼ田 先斗町'), menu_url: SITE,
    notes: '[Izakaya · Pontocho on the Kamo River, temari sushi and tempura] A renovated Pontocho townhouse with a summer deck over the Kamo River, serving pretty 15-piece temari sushi sets with Kyoto tempura at lunch (¥3,300–5,500) and fuller courses at night. The deck costs ¥1,000 extra a head. Some diners found service slow or shaky (2026). Open daily, lunch and dinner.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 2 June 2025 (Tabelog) in a Kyoto townhouse in Pontocho; the official site promises temari sushi and Kyoto tempura with views of the Kamo River and the Higashiyama hills. No source names the operator or says whether it has sister shops. Reviewers in 2026 praise the jibu-ni, the white-miso espuma and the temari; criticism covers slow drinks and so-so service (July 2026), a refusal to split receipts for a group until they protested (September 2026), a new staff member\'s thin menu explanations (September 2026) and more food than one diner could finish (October 2026).',
      philosophy: null,
      specialty: 'Temari sushi; Kyoto tempura.',
      anecdotes: [
        { text: 'October 2026: "As October has arrived and the nights have become a bit chilly, I appreciated the thoughtful gesture of providing knee blankets for the women."', source: R + 'B536686916/' },
        { text: 'August 2026: "A reservation at 18:30 is ideal, allowing you to enjoy both the bright Kamo River and its evening ambiance."', source: R + 'B534186646/' },
        { text: 'September 2026: "when we requested separate receipts, they insisted they could only provide one receipt for the total amount… After some protest, they finally agreed to issue separate receipts."', source: R + 'B535086157/' },
      ],
      japanese_sources_summary: '公式サイト: 京いざかや くぼ田、京都市中京区先斗町三条下ル若松町141、11:00〜14:30 (L.O.料理 14:00)・17:00〜22:00 (L.O.料理 21:00)、不定休、京町屋、鴨川と東山の眺め、手毬寿司と京天ぷら、納涼床、コース「梅」税込6,050円・「竹」7,700円・「松」9,350円 (おばんざい盛合せ、お造り盛合わせ、京赤地鶏の治部煮、鰆の低温焼き 白味噌のエスプーマ、天ぷら、酢肴、手毬寿司、赤出汁、甘味、松は京都牛のビーフシチュー)、ランチ税込3,300円・4,400円・5,500円 (手毬寿司15貫、おうどん)。食べログ: 天ぷら・寿司、原文で「・納涼床席の場合：サービス料 一人1,000円」、91席、個室、禁煙、カード・PayPay可、2025年6月2日オープン、法人会員。口コミ (2026年7月〜10月、英語): 納涼床、鱧や湯葉の手毬寿司、治部煮、ほうじ茶プリン、ひざ掛け、飲み物が遅い、領収書の分割を断られた (2026年9月)、新人の説明不足、量が多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B531300892/', R + 'B533647984/', R + 'B534186646/', R + 'B534201513/', R + 'B534747336/', R + 'B535086157/', R + 'B535153276/', R + 'B536017806/', R + 'B536686916/', R + 'B536830204/', R + 'B537185372/', R + 'B538269520/'] },
    cultural_comfort: { level: 'japanese', note: 'Riverside deck in summer (¥1,000 service); courses; young children in private rooms only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル若松町141',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006764, 135.771130); cross-checked: GSI 京都府京都市中京区若松町141番地 (lot) 50m; nearest pin kyoto_pontocho_shiki_yoshina 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site (tax included).', last_checked: TODAY, items: [
      it('手毬寿司ランチ', '', 'Temari sushi lunch (obanzai, 15 temari, udon)', '¥3,300', 'Lunch', 'no', 'no', 'Official site.', 'temari_lunch'),
      it('京天ぷらと手毬寿司ランチ', '', 'Kyoto tempura and temari sushi lunch', '¥4,400', 'Lunch', 'no', 'no', 'Official site.', 'tempura_temari_lunch'),
      it('くぼ田特製ランチ', '', 'Kubota special lunch (adds sashimi)', '¥5,500', 'Lunch', 'no', 'no', 'Official site.', 'special_lunch'),
      it('「竹」', '', 'Take course', '¥7,700', 'Course', 'no', 'no', 'Official site.', 'course_take'),
      it('「松」', '', 'Matsu course (adds Kyoto beef stew)', '¥9,350', 'Course', 'no', 'no', 'Official site.', 'course_matsu'),
    ] }, {
    cuisine: '鴨川沿いの先斗町の町家の居酒屋で、手毬寿司と京天ぷら、夏は納涼床 (公式サイト、2026年の口コミ)・ランチ (公式、税込): おばんざい、手毬寿司15貫、おうどんで3,300円、京天ぷら付き4,400円、お造り三種盛り付き5,500円・夜のコース「梅」6,050円、「竹」7,700円、「松」9,350円: おばんざい、お造り、京赤地鶏の治部煮、鰆の低温焼き 白味噌のエスプーマ、天ぷら5〜8種、酢肴、手毬寿司、赤出汁、甘味、松は京都牛のビーフシチュー付き (公式のお品書き)・鱧、湯葉、きのこ、みょうがの手毬寿司は味付き済みで醤油いらず (2026年7〜10月)、ほうじ茶プリン (2026年8月)',
    neighborhood: '先斗町三条下ルの鴨川沿い。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: セットに天ぷらとうどん、コースに白味噌や赤出汁の料理 (公式のお品書き)。',
    vegan_detail: 'ヴィーガン不可: 刺身、魚の手毬寿司、鶏の治部煮、だし。きのこ、みょうが、湯葉の手毬寿司もある (公式のお品書き、2026年10月)。',
    notes: '[居酒屋・鴨川沿いの先斗町、手毬寿司と天ぷら] 夏は鴨川に納涼床を出す先斗町の改装町家。かわいい手毬寿司15貫に京天ぷらの昼のセット (3,300〜5,500円) と、夜のコース。床席はひとり1,000円のサービス料。サービスが遅い、不慣れという声も (2026年)。毎日、昼と夜。',
  });
}

save();
