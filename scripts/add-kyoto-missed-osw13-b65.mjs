// Kyoto priority (kyoto-missed), worker osw13, batch 65 — lane: Tabelog id mod 6 = 0.
// Core: 焼肉 にくしま, 冬夏. Notable: ベトナム料理コムゴン 京都, 萬重 ポルタ店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26008998', 'brand already in data: ハマムラ 近鉄名店街 みやこみち店 is a branch of ハマムラ, already in kyoto.json as kyr_kyoto_chuka_hamamura_fuc (京都中華 ハマムラ 府庁前店); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');
skip('26021778', 'brand already in data: ぎょうざ処 亮昌 京都タワーサンド店 is a branch of 亮昌, already in kyoto.json as kyr_gyoza_dokoro_takatsuji_s (ぎょうざ処 高辻 亮昌 本店); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');
skip('26038122', 'chain: 串かつだるま 京都ポルタ店 is a branch of the Osaka Shinsekai kushikatsu chain 串かつだるま, which had 12 shops in Kansai by January 2015 (FamilyMart news release, family.co.jp 20150421); 5+ same-name = chain (Greg ruling 2026-11-05)');

// ================================================================ 焼肉 にくしま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025954/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_yakiniku_nikushima', name: '焼肉 にくしま (Yakiniku Nikushima)', category: 'OMNI',
    lat: 35.016867, lng: 135.759727, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare is brought even when not ordered (May 2026); marinated cuts and kimchi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku and offal house (Tabelog; reviews).',
    hours_raw: 'Tabelog: 17:30–24:00 (last order 23:00); closed Wednesday. Booking advised — near full at peak (December 2025); Hot Pepper booking (May 2026). Ground floor 15 seats: a 6-seat counter and two small tables (for 2 and 4); the 2nd floor (25 seats, larger tables) is for members only, or reserved use by members (Tabelog; August 2026); members also get rooftop events (January 2026). Non-smoking; cards, no e-money. Opened 7 July 2015; moved and reopened 26 July 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Marutamachi — 1 min walk from Marutamachi Stn exit 3',
    cuisine: 'A small local yakiniku known for fresh tongue and offal (2025–2026 reviews) · beef-tongue platter and tongue sashimi, negi-salt tongue, special outside skirt, special premium loin (under ¥2,000 for the special cuts, October 2026), thin-sliced premium tripe, liver, "legal" yukhoe, thigh with green onion (2025–2026 reviews) · choregi salad, octopus kimchi, a set course, free-refill oolong tea; lemon ¥50 (2026 reviews)',
    website: null, gmaps: gm('焼肉 にくしま 大倉町'), menu_url: null,
    notes: '[Yakiniku · Karasuma-Marutamachi, fresh tongue by the station] A cosy, cramped yakiniku a minute from Marutamachi Station, prized for fresh tongue — as sashimi or grilled — and tender outside skirt at fair prices. The upstairs room is for members only. One group of four was squeezed by the cold entrance (March 2026); another diner tasted something like chemical seasoning in the broth (August 2026). Open till midnight; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 7 July 2015 and reopened at this address on 26 July 2019 (Tabelog). Reviewers in 2025–2026 describe a small ground floor of six counter seats and two little tables, an upstairs for members with larger tables, membership perks including rooftop events, and a crowd of locals.',
      philosophy: null,
      specialty: 'Beef tongue; special outside skirt.',
      anecdotes: [
        { text: 'March 2026: "I wish they had told me there were no tables for four" — the group was seated at a cramped table by the entrance, "and it was freezing," and the group left before getting full.', source: R + 'B523991717/' },
        { text: 'August 2026: "there was something lingering in my mouth... (perhaps it was a chemical seasoning?) Especially noticeable in the broth."', source: R + 'B533792208/' },
        { text: 'January 2026: "It seems that if you become a member, there are special activities available on the rooftop."', source: R + 'B521495563/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 にくしま、焼肉・ホルモン・居酒屋、中京区烏丸通丸田町下る大倉町207-2、丸太町駅3番出口から徒歩約1分、17:30〜24:00 (L.O. 23:00)、水曜休み、15席 (2階25席は会員限定・会員の貸切利用)、禁煙、カード可、電子マネー不可、2015年7月7日オープン、2019年7月26日移転リニューアル。口コミ (2025年12月〜2026年10月、英語): 牛タンの盛り合わせとタン刺し、ネギ塩タン、特選ハラミ、特上ロース (特選部位でも2,000円以下)、上ミノの薄切り、レバー、ユッケ、ネギ付きのもも、チョレギサラダ、タコキムチ、おすすめコース、烏龍茶はおかわり自由、レモン50円、1階はカウンター6席と小さなテーブル2つ、会員は屋上のイベントも、4人で狭い入口の席で寒かったという声、化学調味料のような後味という声。',
      confidence: 'medium', sources: [TB, R + 'B521495563/', R + 'B523641058/', R + 'B523991717/', R + 'B524338741/', R + 'B528127557/', R + 'B528494756/', R + 'B533116394/', R + 'B533792208/', R + 'B534242402/', R + 'B537160114/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local room; the upstairs is members-only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通丸田町下る大倉町207-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016867, 135.759727); cross-checked: GSI 京都府京都市中京区大倉町207番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537160114/', R + 'B533116394/'],
    price_note: 'Few prices in the sources; spend ¥4,000–9,999 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Beef-tongue platter / tongue sashimi', null, 'Meat', 'ask', 'no', 'May and August 2026.', 'gyutan'),
      it('', '', 'Special outside skirt', 'under ¥2,000', 'Meat', 'ask', 'no', 'October 2026.', 'yakiniku'),
    ] }, {
    cuisine: '新鮮なタンとホルモンで知られる小さな街の焼肉店 (2025〜2026年の口コミ)・牛タンの盛り合わせとタン刺し、ネギ塩タン、特選ハラミ、特上ロース (特選部位でも2,000円以下、2026年10月)、上ミノの薄切り、レバー、ユッケ、ネギ付きのもも (2025〜2026年の口コミ)・チョレギサラダ、タコキムチ、おすすめのコース、おかわり自由の烏龍茶、レモン50円 (2026年の口コミ)',
    neighborhood: '烏丸丸太町。丸太町駅3番出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: 頼まなくてもたれが出てくる (2026年5月)。味付けの肉やキムチも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛の焼肉とホルモンの店 (食べログ、口コミ)。',
    notes: '[焼肉・烏丸丸太町、駅前の新鮮なタン] 丸太町駅から1分の狭くて居心地のよい焼肉店。刺身でも焼きでも新鮮なタン、柔らかい特選ハラミが手頃な値段で。2階は会員限定。4人で入口の寒い狭い席だったという声 (2026年3月) や、スープに化学調味料のような後味という声 (2026年8月) も。0時まで、水曜休み。',
  });
}

// ================================================================ 冬夏
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26029260/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tokaseisei.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_tearoom_toka', name: '冬夏 (tearoom toka)', category: 'OMNI',
    lat: 35.018933, lng: 135.768158, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: organic tea is the point; the sweets (chocolate, wagashi, cake) are not described for wheat (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options; teas are plant-based, sweets vary (Tabelog; reviews).',
    hours_raw: 'Tabelog: 11:00–18:00 (last order 17:30); closed Tuesday; hours may change. Booking via TableCheck — choose date, time, guests and course (March 2024; March 2025). 6 counter seats; shoes off at the entrance; no photographs in the tea room (2022–2025 reviews); non-smoking; English menu; children welcome; cards (Visa, JCB) and QR. No coffee or food — tea and sweets only; tea leaves and cocoa for sale (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of the Kyoto Imperial Palace — 7 min walk from Jingu-Marutamachi Stn; 3 min from the palace’s southeast corner',
    cuisine: 'A tea room of single-origin organic Japanese tea, served brew by brew at a counter (2022–2025 reviews) · courses of one tea and one sweet ("Hajime") or two of each (2022 reviews); about thirteen teas to smell from test tubes before choosing — single-origin sencha from Wazuka, kamairicha from Gokase in Miyazaki, gyokuro, yabukita kabuse (2022–2024 reviews) · sweets: chocolates of rare cocoa, fresh wagashi, red-bean sweets, a cake for +¥300 (2020–2025 reviews) · sencha, roasted tea, herbal tea; tea leaves and cocoa to take home (Tabelog)',
    website: SITE, gmaps: gm('tearoom toka 信富町 nichinichi'), menu_url: null,
    notes: '[Tea room · east of the Imperial Palace, single-origin organic tea] A six-seat counter tea room inside the gallery nichinichi, in a Taisho-era house that was once a Nihonga painter’s home: smell a dozen single-origin organic teas from test tubes, then take each one brew by brew with a chocolate or wagashi. Book online; shoes off; no photos in the tea room. Allow about an hour. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Run by food director Fumie Okumura, per a June 2022 review'], origin: null,
      background: 'Reviewers from 2020 to 2025 describe a tea room sharing a roughly 100-year-old Taisho-era house with the gallery nichinichi, once the home of the Nihonga painter Go Un Nishimura (June 2022), east of the Kyoto Imperial Palace; a June 2022 diner says it is owned by food director Fumie Okumura. Tea leaves, tea tools and cocoa are sold in the same space; the paper bag reads "tea is a work of art" (March 2024).',
      philosophy: 'From its shop bag (March 2024): "tea is a work of art."',
      specialty: 'Single-origin organic sencha tasted brew by brew.',
      anecdotes: [
        { text: 'March 2024: "This time, I chose from 13 types of tea. The tea leaves were presented in test tubes, allowing me to smell them before placing my order."', source: R + 'B476700281/' },
        { text: '"No photography is allowed inside the tearoom. It’s a rule, so there’s nothing we can do about it, but it’s a shame." — March 2025.', source: R + 'B504112560/' },
        { text: 'December 2022: tea and sweets take time — "plan for about an hour… but it’s also fine to stay for over two hours if you wish."', source: R + 'B457821865/' },
      ],
      japanese_sources_summary: '食べログ: tearoom toka (冬夏)、カフェ・チョコレート、上京区信富町298 gallery nichinichi、神宮丸太町駅3番出口から徒歩約7分、京都御苑の南東角から徒歩約3分、11:00〜18:00 (L.O. 17:30)、火曜休み、カウンター6席、玄関で靴を脱ぐ、禁煙、英語メニュー、子供可、カード (VISA・JCB)・QR可、ベジタリアン対応、煎茶・焙じ茶・ハーブティーと菓子のセット、茶葉とカカオの販売、コーヒーと食事はなし。口コミ (2020年12月〜2025年3月、英語): フードディレクターの Fumie Okumura さんの店、大正時代の築約100年の家、日本画家 Go Un Nishimura の旧宅、TableCheck で予約、茶室内は撮影不可、試験管で香りを確かめて選ぶ約13種、和束のシングルオリジンの煎茶、宮崎五ヶ瀬の釜炒り茶、玉露、やぶきたのかぶせ、一煎目は少量の熱めの湯で、1茶1菓の「はじめ」コース、希少なカカオのチョコレート、生菓子、ケーキ+300円、「tea is a work of art」、1時間ほどかかる。',
      confidence: 'medium', sources: [SITE, TB, R + 'B310299805/', R + 'B446559024/', R + 'B450189168/', R + 'B455047736/', R + 'B457821865/', R + 'B462127883/', R + 'B476700281/', R + 'B484100072/', R + 'B504112560/', R + 'B531114225/'] },
    cultural_comfort: { level: 'english', note: 'English menu; online booking; shoes off; no photos in the tea room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区信富町298 gallery nichinichi',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing; latest reviews dated March 2025; booking site linked from Tabelog.' },
    pin_source: `Tabelog ${TB} (35.018933, 135.768158); cross-checked: GSI 京都府京都市上京区信富町298番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504112560/', R + 'B455047736/'],
    price_note: 'Spend ¥1,000–5,999 a head (2022–2025 reviews).', last_checked: TODAY, items: [
      it('', '', 'Tea course: one tea and one sweet ("Hajime")', null, 'Tea', 'ask', 'ask', 'September 2022.', 'japanese_tea'),
      it('', '', 'Cake (add-on)', '+¥300', 'Sweets', 'ask', 'ask', 'March 2025.', 'cake'),
    ] }, {
    cuisine: 'シングルオリジンの有機日本茶を一煎ずつカウンターで味わう茶房 (2022〜2025年の口コミ)・1茶1菓の「はじめ」と2茶2菓のコース (2022年の口コミ)。試験管で香りを確かめて約13種から選ぶ。和束のシングルオリジン煎茶、宮崎五ヶ瀬の釜炒り茶、玉露、やぶきたのかぶせ (2022〜2024年の口コミ)・菓子は希少なカカオのチョコレート、生菓子、あんこの菓子、ケーキ+300円 (2020〜2025年の口コミ)・煎茶、焙じ茶、ハーブティー。茶葉とカカオの販売も (食べログ)',
    neighborhood: '京都御所の東。神宮丸太町駅から徒歩7分、御苑の南東角から3分',
    gf_detail: '要確認: 主役は有機の日本茶。菓子 (チョコレート、和菓子、ケーキ) の小麦については書かれていない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応とある。お茶は植物性で、菓子は品によって異なる (食べログ、口コミ)。',
    notes: '[茶房・御所の東、シングルオリジンの有機茶] 日本画家の旧宅だった大正時代の家にあるギャラリー nichinichi の中の、6席のカウンターの茶房。十数種の有機のシングルオリジン茶を試験管で香りを確かめて選び、チョコレートや和菓子とともに一煎ずつ。予約はオンラインで、靴を脱いで上がり、茶室内は撮影不可。1時間ほどのゆとりを。火曜休み。',
  });
}

// ================================================================ ベトナム料理コムゴン 京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019324/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://comngonkyoto.com';
  const H = day(['11:30', '15:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_com_ngon', name: 'ベトナム料理コムゴン 京都 (Com Ngon Kyoto)', category: 'OMNI',
    lat: 35.006273, lng: 135.760573, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: pho and bun are rice noodles, but fried spring rolls, soy-based sauces and shrimp chips are shared kitchen items (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and chicken broths, pork, shrimp, fish sauce (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–15:30 (last order 15:00) and 17:30–22:30 (last orders food 21:30, drinks 22:00); open all year. Reservations through the official site. 40 seats including a counter and upstairs; non-smoking; children welcome; cards, e-money and QR. No service charge — Tabelog, Japanese original 「無し」. Opened 16 December 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma — 3 min walk from Shijo / Hankyu Karasuma Stn',
    cuisine: 'Vietnamese, with about twelve lunch sets (2026 reviews) · pho bo set with braised pork rice and shrimp-chip salad; pho ga ¥1,000; bun cha ¥1,100 (April 2026) and ¥1,250 (September 2026); bun bo Hue; hu tieu and dry hu tieu kho with egg soup; "Com lunch" with fried and fresh spring rolls (2026 reviews) · coriander served on the side; fresh chillies and lime (2026 reviews) · dinner of small plates and drinks (September 2026)',
    website: SITE, gmaps: gm('コムゴン 一蓮社町'), menu_url: SITE,
    notes: '[Vietnamese · Shijo-Karasuma, pho and bun cha lunches] A popular Vietnamese restaurant near Shijo-Karasuma since 2011, open every day: pho bo and pho ga, bun cha and bun bo Hue in lunch sets with spring rolls and salad, coriander on the side for the shy. One diner noted rising prices (November 2026); another found the bun bo Hue’s heat fixed and mild (August 2026). No service charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 16 December 2011 (Tabelog). Reviewers in 2026 describe a quiet, popular lunch spot with many solo women diners, seats upstairs, Bat Trang pottery, welcoming staff, coriander served separately, and a lunch menu of about a dozen noodle and rice sets.',
      philosophy: null,
      specialty: 'Pho bo; bun cha.',
      anecdotes: [
        { text: 'August 2026: the bun bo Hue was milder than promised; "I was informed that the spiciness of the broth couldn’t be adjusted," and the bottled chilli sauce changed the flavour instead.', source: R + 'B495991678/' },
        { text: 'A returning diner in November 2026: "It was obvious that prices have increased since my last visit."', source: R + 'B494058512/' },
      ],
      japanese_sources_summary: '食べログ: ベトナム料理コムゴン 京都、ベトナム料理、中京区一蓮社町304、四条駅・阪急烏丸駅から徒歩3分、毎日 11:30〜15:30 (L.O. 15:00)・17:30〜22:30 (料理 L.O. 21:30、ドリンク L.O. 22:00)、年中無休、予約は公式サイトから、40席、禁煙、子供可、カード・電子マネー・QR可、サービス料は原文で「無し」、2011年12月16日オープン。口コミ (2024年10月〜2026年11月、英語): フォーボーのセット (豚の甘辛煮のご飯、海老せんのサラダ)、フォーガー1,000円、ブンチャー1,100円・1,250円、ブンボーフエ、フーティウ、汁なしのフーティウコー と卵スープ、揚げ春巻と生春巻、パクチーは別皿、生唐辛子とライム、ランチは12種ほど、2階席、バッチャン焼きの器、女性の一人客が多い、値上がりしたという声、ブンボーフエの辛さは調整できないという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B355333418/', R + 'B494058512/', R + 'B495991678/', R + 'B506351221/', R + 'B533959283/', R + 'B535343287/', R + 'B535630065/', R + 'B536876686/', R + 'B537907207/', R + 'B538270935/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking; coriander on the side.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区一蓮社町304',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006273, 135.760573); cross-checked: GSI 京都府京都市中京区一蓮社町304番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506351221/', R + 'B536876686/'],
    price_note: 'Prices from 2026 reviews; rising (November 2026).', last_checked: TODAY, items: [
      it('', '', 'Bun cha lunch', '¥1,100–1,250', 'Lunch', 'ask', 'no', 'April and September 2026.', 'bun_cha'),
      it('', '', 'Pho ga, à la carte', '¥1,000', 'Noodles', 'ask', 'no', 'September 2026.', 'pho'),
    ] }, {
    cuisine: 'ランチセットが12種ほどあるベトナム料理 (2026年の口コミ)・フォーボーのセットに豚の甘辛煮のご飯と海老せんのサラダ、フォーガー1,000円、ブンチャー1,100円 (2026年4月)・1,250円 (2026年9月)、ブンボーフエ、フーティウ、汁なしのフーティウコーと卵スープ、揚げ春巻と生春巻の「コムランチ」(2026年の口コミ)・パクチーは別皿、生唐辛子とライム (2026年の口コミ)・夜は小皿と飲み物 (2026年9月)',
    neighborhood: '四条烏丸。四条駅・阪急烏丸駅から徒歩3分',
    gf_detail: '要確認: フォーやブンは米の麺だが、揚げ春巻、醤油系のたれ、海老せんも同じ厨房 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛や鶏のスープ、豚、海老、魚醤 (2026年の口コミ)。',
    notes: '[ベトナム料理・四条烏丸、フォーとブンチャーのランチ] 2011年から四条烏丸近くにある人気のベトナム料理店で、年中無休。フォーボーやフォーガー、ブンチャー、ブンボーフエを春巻やサラダ付きのランチセットで。パクチーは別皿。値上がりしたという声 (2026年11月) や、ブンボーフエの辛さが調整できず物足りないという声 (2026年8月) も。サービス料なし。',
  });
}

// ================================================================ 萬重 ポルタ店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007276/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoryori-manshige.co.jp';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_manshige_porta', name: '萬重 ポルタ店 (Manshige Porta)', category: 'OMNI',
    lat: 34.986488, lng: 135.759399, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried nama-fu (wheat gluten), nama-fu dengaku and soy-seasoned dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi soups, sashimi, duck, fish (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–22:00, closing days follow the Porta underground mall. No reservations — full by about 11:30 on a weekday (September 2026), so arrive at opening. Counter seats; non-smoking; children welcome; cards, transit IC, e-money and most QR. Branch of the Nishijin Kyoto-cuisine house 萬重 (26001533) in the Porta mall under Kyoto Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Porta underground mall — 5 min walk',
    cuisine: 'Kyoto cuisine sets from a long-established Nishijin house, in the station mall (2026 reviews) · Manshige bento ¥2,200: duck roast with sansho, sashimi, yuba tofu, nama-fu dengaku, clear soup with yuba and fu (October 2026); Kyoto yuba set ¥2,200 with a yuba rice bowl and yuba salad (October 2026); "Orihime" and "Nishijin" ¥3,300 sets (September–October 2026); matsutake dobin-mushi in autumn, +¥660 as an upgrade · à la carte: yuba noodle soup, Kyoto-style fried nama-fu in four colours, three-colour nama-fu dengaku ¥500 (2026 reviews) · a sake flight from the Kyoto brewer 佐々木酒造, including Jurakudai (October 2026)',
    website: SITE, gmaps: gm('萬重 ポルタ店'), menu_url: null,
    notes: '[Kyoto cuisine · Kyoto Station Porta, a Nishijin house’s station branch] The Porta-mall outpost of the Nishijin Kyoto-cuisine house Manshige: ¥2,200 bento of duck, sashimi, yuba and nama-fu, a yuba set, matsutake dobin-mushi in autumn, and a sake flight from Sasaki brewery — a calm Kyoto lunch under the station. No bookings; it fills by 11:30. One diner’s dessert bean paste had melted (September 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source; a branch of 萬重, a long-established Nishijin Kyoto-cuisine house (October 2026 review; crawl)'], origin: null,
      background: 'Reviewers in 2026 describe a calm room with a counter in the Porta mall under Kyoto Station, staff who greet guests in Kyoto dialect, quick service and tea refills, and a mix of tourists, solo diners and local regulars; one local has known Manshige since childhood as the family’s place for gatherings and memorials (October 2026). The main restaurant, 萬重, is in Nishijin.',
      philosophy: null,
      specialty: 'Manshige bento; yuba set.',
      anecdotes: [
        { text: '"I was also comforted by the staff’s warm greeting of \'O-koshi-yasu~\' which is typical of Kyoto." — October 2026.', source: R + 'B537527156/' },
        { text: 'September 2026: "Unfortunately, the red bean paste in the dessert had melted, but the flavors of the dishes and the hospitality were great."', source: R + 'B502978460/' },
      ],
      japanese_sources_summary: '食べログ: 萬重 ポルタ店、日本料理、下京区東塩小路町902 京都駅前地下街ポルタ内、京都駅から徒歩5分、毎日 11:00〜22:00、休みはポルタに準じる、予約不可、カウンター席、禁煙、子供可、カード・交通系IC・電子マネー・QR可、公式サイトは京料理 萬重。口コミ (2025年3月〜2026年10月、英語): 萬重弁当2,200円 (鴨ロースの山椒、お造り、湯葉豆腐、生麩田楽、湯葉と麩のお吸い物)、京ゆば膳2,200円 (湯葉丼、湯葉サラダ)、織姫、西陣3,300円、秋の松茸の土瓶蒸し (+660円で変更)、湯葉の煮麺、京風の生麩の揚げ物4色、三色生麩田楽500円、佐々木酒造の飲み比べ (聚楽第)、西陣の老舗、京言葉の「おこしやす」、11時半には満席、デザートの餡が溶けていたという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B500490668/', R + 'B502978460/', R + 'B536549388/', R + 'B537527156/', R + 'B537551187/', R + 'B537787169/', R + 'B537806426/', R + 'B537857193/', R + 'B538125511/', R + 'B538448285/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; arrive at opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町902 京都駅前地下街ポルタ内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.986488, 135.759399); cross-checked: GSI 京都府京都市下京区東塩小路町902番地 (lot) 106m — the lot spans the station block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500490668/', R + 'B537857193/', R + 'B537551187/'],
    price_note: 'Prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('萬重弁当', '', 'Manshige bento', '¥2,200', 'Set', 'no', 'no', 'October 2026.', 'bento'),
      it('', '', 'Kyoto yuba set', '¥2,200', 'Set', 'ask', 'no', 'October 2026.', 'yuba'),
      it('', '', 'Three-colour nama-fu dengaku', '¥500', 'À la carte', 'no', 'ask', 'October 2026.', 'namafu'),
      it('', '', '"Nishijin" set with matsutake dobin-mushi', '¥3,300', 'Set', 'no', 'no', 'October 2026.', 'kaiseki_course'),
    ] }, {
    cuisine: '西陣の老舗の京料理を駅の地下街で (2026年の口コミ)・萬重弁当2,200円は山椒の鴨ロース、お造り、湯葉豆腐、生麩田楽、湯葉と麩のお吸い物 (2026年10月)。京ゆば膳2,200円は湯葉丼と湯葉サラダ (2026年10月)。「織姫」や「西陣」3,300円の膳 (2026年9〜10月)。秋は松茸の土瓶蒸しで、+660円で変更も・単品は湯葉の煮麺、4色の京風生麩の揚げ物、三色生麩田楽500円 (2026年の口コミ)・佐々木酒造の飲み比べ、聚楽第など (2026年10月)',
    neighborhood: '京都駅、ポルタの地下街。徒歩5分',
    gf_detail: 'グルテンフリーではない: 生麩の揚げ物や田楽、醤油で味付けした料理 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 出汁のお吸い物、お造り、鴨、魚 (2026年の口コミ)。',
    notes: '[京料理・京都駅ポルタ、西陣の老舗の駅の店] 西陣の京料理の老舗、萬重のポルタ店。鴨、お造り、湯葉、生麩の萬重弁当2,200円、京ゆば膳、秋は松茸の土瓶蒸し、佐々木酒造の飲み比べも。駅の下で落ち着いて京都の昼ごはんを。予約不可で11時半には満席。デザートの餡が溶けていたという声も (2026年9月)。',
  });
}

save();
