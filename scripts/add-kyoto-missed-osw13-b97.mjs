// Kyoto priority (kyoto-missed), worker osw13, batch 97 — 桃屋 (re-opened per coordinator ruling) + lane mod 6 = 0, rest tier nearest-first.
// Drafts: 桃屋, 深夜食堂 こうちゃん, 和鉄板ぞろんぱ, よしむら 大丸京都別邸.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26005602', 'chain: モンロワール 大丸京都店 is a branch of the Kobe chocolatier モンロワール (official monloire.co.jp lists nine Kobe-area shops alone: 岡本坂本店, 三宮, 元町, 新神戸駅, 住吉, 六甲道, 垂水, Umieモザイク, 西神中央)');
skip('26039082', 'too thin to verify: 割烹 三千院の里 祇園本店 has six reviews, none after August 2024');
skip('26039358', 'large parent: 五の五 河原町三条店 is an SFP Holdings / Create Restaurants group izakaya (PR Times opening release, 18 May 2023; shop page on create-restaurants.co.jp), the group behind 磯丸水産');
skip('26043882', 'same-concept branch of a brand already in data: 鮨酒場スシトフジ 三条 — スシトフジ is in data as osaka_ura_namba_sushi_to_fuji (same ruling as 26038511)');
skip('26044578', 'large parent: 帝国ホテル 京都 is a hotel of the national Imperial Hotel group (Tabelog category: Hotel), under the hotel-group ruling for KIHARU Brasserie');

// ================================================================ 桃屋 (re-opened)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002212/'; const R = TB + 'dtlrvwlst/';
  const GROUP = 'https://daniels.jp/restaurant/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'kyoto_momoya_kushiage_nishiki', name: '桃屋 (Momoya)', category: 'OMNI',
    lat: 35.004967, lng: 135.762517, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu and karaage, cheese spring rolls, gyoza (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried meat and seafood skewers, sashimi, ankimo; obanzai not described as vegan (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun and holidays 11:30–22:00 (last order 21:30); closed Monday (Tuesday if Monday is a holiday). Lunch from 11:30, with drinks (October 2026). Reservations recommended — full some nights (February 2026). 30 seats: counter, tables, tatami; private rooms for 8–20. Smoking allowed (2026 reviews; one September 2026 diner minded it). Cards, e-money and QR (PayPay and others). Ground floor of グラマラスフードビル on Nishikikoji west of Takakura, behind Daimaru. Run by 株式会社グラマラスフード, which also runs the ダニエルズ Italian shops and 桃屋 錦 (daniels.jp).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikikoji west of Takakura, behind Daimaru — 2 min walk from Karasuma / Shijo',
    cuisine: 'A kushiage and obanzai izakaya by Nishiki Market, open from lunch (Tabelog; 2026 reviews) · signature six-skewer kushikatsu course ¥1,408 — angel shrimp, kisu in perilla, mozzarella, eel, chicken breast with wasabi and a surprise skewer (January 2026) · lunch: shio-koji young-chicken karaage set ¥1,100 (May 2026); obanzai and kushikatsu set, coffee +¥200 (October 2026); sashimi lunch (September 2026) · Nishiki fish: ankimo ponzu, sashimi of the day (2026) · yuba with wasabi; Camembert spring rolls; gyoza; spicy shaka-shaka potatoes (May–July 2026) · Kirin Lager; cheap highballs; a value draft-beer set with two skewers (January–August 2026)',
    website: GROUP, gmaps: gm('桃屋 錦 高倉 串揚げ'), menu_url: TB + 'dtlmenu/',
    notes: '[Kushiage izakaya · Nishiki behind Daimaru, skewers from lunchtime] A stylish, smoky little izakaya off Nishiki serving carefully fried skewers — a six-piece set is about ¥1,400 — with Nishiki-market sashimi, obanzai lunch sets and cheap highballs from 11:30. Popular; book at night. Smoking allowed. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Run by 株式会社グラマラスフード (daniels.jp), whose ダニエルズ Italian shops are hidden in this app as a chain; 桃屋 is a separate brand with two shops (桃屋 and 桃屋 錦), and January 2026 reviewers describe it as part of the Daniels group. Reviewers praise skewers "cooked with great care" (May 2026), value and friendly staff who remember regulars (February 2026); a September 2026 lunch guest was bothered by smokers.',
      philosophy: null,
      specialty: 'Kushiage; Nishiki seafood.',
      anecdotes: [
        { text: 'February 2026: "The staff remembered me and casually mentioned that many women come here alone to drink, which left a great impression on me."', source: R + 'B531576977/' },
        { text: 'August 2026: "In a time when Nishiki Market is seeing a surge of overpriced and low-quality establishments catering to tourists, \'Momoya\' stands out as a rare gem—affordable and tranquil."', source: R + 'B533399113/' },
      ],
      japanese_sources_summary: '食べログ: 桃屋、居酒屋・串揚げ・日本料理、中京区錦小路通高倉西入ル西魚屋町596 グラマラスフードビル 1F、烏丸駅・四条駅から徒歩、火〜日・祝 11:30〜22:00 (L.O. 21:30)、月曜休み (祝日なら翌火曜)、予約可、30席、座敷、個室 (8〜20名)、喫煙可、カード・電子マネー・QR可、法人会員。運営: 株式会社グラマラスフード (daniels.jp、ダニエルズ各店と桃屋・桃屋 錦)。口コミ (2026年1月〜10月、英語): 名物の串かつ6本コース1,408円 (海老、きすの大葉巻き、モッツァレラ、うなぎ、ささみのわさび、おまかせ)、若鶏の塩麹唐揚げ定食1,100円、おばんざいと串かつの定食・コーヒー200円、刺身のランチ、あん肝ポン酢、湯葉わさび、カマンベールの春巻き、餃子、シャカシャカポテト、キリンラガー、安いハイボール、お得な生ビールセット (串2本)、予約がおすすめ、喫煙可。',
      confidence: 'medium', sources: [TB, GROUP].concat(rv(R, ['B267573790', 'B520179367', 'B521848025', 'B527837152', 'B529017779', 'B531563844', 'B531576977', 'B532823446', 'B533399113', 'B534837527', 'B537909072', 'B538170368'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoking allowed; lunch from 11:30.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉西入ル西魚屋町596 グラマラスフードビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through October 2026; operator site lists the shop.' },
    pin_source: `Tabelog ${TB} (35.004967, 135.762451), offset 6m east because kyoto_daniels_nishiki (hidden chain record in the same グラマラスフードビル) sits 0.8m from the Tabelog point — now 6.4m from it; cross-checked: GSI 京都府京都市中京区西魚屋町596番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520179367/', R + 'B527837152/', R + 'B538170368/'],
    price_note: 'Prices from 2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Six-skewer kushikatsu course', '¥1,408', 'Kushiage', 'no', 'no', 'January 2026.', 'kushikatsu_course'),
      it('', '', 'Shio-koji young-chicken karaage set (lunch)', '¥1,100', 'Lunch', 'no', 'no', 'May 2026.', 'karaage_set'),
      it('', '', 'Obanzai and kushikatsu set (lunch)', null, 'Lunch', 'no', 'no', 'October 2026; coffee +¥200.', 'obanzai_kushi_set'),
    ] }, {
    cuisine: '錦市場そばの串揚げとおばんざいの居酒屋で、昼から開いている (食べログ、2026年の口コミ)・名物の串かつ6本コース1,408円: 海老、きすの大葉巻き、モッツァレラ、うなぎ、ささみのわさび、おまかせ1本 (2026年1月)・昼: 若鶏の塩麹唐揚げ定食1,100円 (2026年5月)、おばんざいと串かつの定食、コーヒーは200円 (2026年10月)、刺身のランチ (2026年9月)・錦の魚: あん肝ポン酢、日替わりの刺身 (2026年)・湯葉わさび、カマンベールの春巻き、餃子、辛いシャカシャカポテト (2026年5〜7月)・キリンラガー、安いハイボール、串2本付きのお得な生ビールセット (2026年1〜8月)',
    neighborhood: '錦小路高倉西入ル、大丸の裏。烏丸・四条から徒歩2分',
    gf_detail: 'グルテンフリーではない: 串かつ、唐揚げ、カマンベールの春巻き、餃子 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 肉や魚介の串揚げ、刺身、あん肝。おばんざいもヴィーガンとは書かれていない (2026年の口コミ)。',
    notes: '[串揚げ居酒屋・大丸裏の錦、昼から串揚げ] 錦から入ったおしゃれな小さな居酒屋で、丁寧に揚げた串 (6本で約1,400円)、錦の刺身、おばんざいの定食、安いハイボールを11時半から。人気なので夜は予約を。喫煙可。月曜休み。',
  });
}

// ================================================================ 深夜食堂 こうちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042052/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '28:00']);
  put({
    id: 'kyoto_shinya_shokudo_kochan_gion', name: '深夜食堂 こうちゃん (Shinya Shokudo Ko-chan)', category: 'OMNI',
    lat: 35.005203, lng: 135.77548, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: katsudon, crab cream croquettes, fried chikuwa, oden and soy-based dishes (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led late-night izakaya (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat and days before/after holidays 18:00–04:00; closed Sunday and holidays; irregular closures posted in Instagram stories. Reservations taken. 8 counter seats. Smoking allowed. Cards. Ground floor of セブンビル on Shinbashi-Hanamikoji (Seimoto-cho), north Gion.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinbashi side of Hanamikoji, north Gion — 5 min walk from Gion-Shijo exit 9',
    cuisine: 'An eight-seat late-night counter in Gion cooking home-style Japanese food until 4 am (2024–2026 reviews) · sashimi platter divided per person; homemade firefly squid in soy; grilled isaki with sake and salt (2025) · oden; bakudan; a recommended five-item platter (October 2025; October 2026) · braised tongue in red miso; grilled beef tongue; crab cream croquettes; Wagyu roast beef; koppe crab; chawanmushi (2024–2025) · katsudon and sake-lees soup late at night (May 2026); Ise-bay fried chikuwa (May 2025) · Sapporo Lager (Akaboshi); sake and shochu (2025)',
    website: null, gmaps: gm('深夜食堂 こうちゃん 祇園'), menu_url: null,
    notes: '[Late-night izakaya · north Gion, a one-man counter till 4 am] A Shinya Shokudo-style eight-seat counter off Hanamikoji where one young owner cooks sashimi, oden, braised tongue and late katsudon until 4 am. Busy nights mean a wait for food. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: 'Not from Kyoto (per an October 2026 review)',
      background: 'Reviewers say the counter is "run single-handedly by a young owner" (November 2024) and stays a one-person operation (October 2024; February 2026); an October 2026 diner adds that "even though he\'s not from Kyoto, the taste was authentically Kyoto". Regulars have come "since it opened" (October 2025). Criticism: dishes can take longer at busy times (December 2024) and flavours run strong (May 2025).',
      philosophy: null,
      specialty: 'Late-night home cooking; oden.',
      anecdotes: [
        { text: 'November 2024: "It\'s a hidden diner run single-handedly by a young owner! They are open until 4 AM. You can feel the vibe of the late-night diner from a certain drama here."', source: R + 'B496604517/' },
        { text: 'May 2026: "Eating Katsudon at midnight definitely feels like a guilty pleasure."', source: R + 'B527664429/' },
      ],
      japanese_sources_summary: '食べログ: 深夜食堂 こうちゃん、居酒屋、東山区清本町378 セブンビル 1F、京阪祇園四条駅9番出口から徒歩5分、月〜土・祝前日・祝後日 18:00〜翌4:00、日・祝休み、不定休あり (Instagram で告知)、予約可、カウンター8席、喫煙可、カード可。口コミ (2024年10月〜2026年10月、英語): 若い店主がひとりで営む深夜食堂、朝4時まで、刺身盛り合わせ (人数分に分ける)、自家製ほたるいかの醤油漬け、いさきの酒塩焼き、おでん、ばくだん、おすすめ5品盛り、牛タンの赤味噌煮込み、牛タン焼き、かにクリームコロッケ、和牛のローストビーフ、コッペがに、茶碗蒸し、カツ丼、粕汁、伊勢湾のちくわの天ぷら、サッポロラガー (赤星)、店主は京都出身ではない (2026年10月)、混むと料理に時間がかかる (2024年12月)、味が濃いめ (2025年5月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B494733531', 'B496604517', 'B501293747', 'B503882541', 'B507229589', 'B516041094', 'B523508939', 'B527664429', 'B528141129', 'B537585219'])) },
    cultural_comfort: { level: 'japanese', note: 'One-man counter; smoking allowed; late night.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区清本町378 セブンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005203, 135.775480); cross-checked: GSI 京都府京都市東山区清本町378番地 (lot) 12m; nearest pin mp_tempura_kyoboshi 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503882541/', R + 'B537585219/'],
    price_note: 'No item prices in the sources; reviewers spent ¥4,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', null, 'Sashimi', 'ask', 'no', '2024–2025 reviews.', 'sashimi'),
      it('', '', 'Oden', null, 'Oden', 'no', 'no', 'October 2025; October 2026.', 'oden'),
      it('', '', 'Katsudon', null, 'Rice', 'no', 'no', 'May 2026.', 'katsudon'),
    ] }, {
    cuisine: '朝4時まで家庭的な和食を出す祇園の8席の深夜のカウンター (2024〜2026年の口コミ)・人数分に分ける刺身盛り合わせ、自家製ほたるいかの醤油漬け、いさきの酒塩焼き (2025年)・おでん、ばくだん、おすすめの5品盛り (2025年10月、2026年10月)・牛タンの赤味噌煮込み、牛タン焼き、かにクリームコロッケ、和牛のローストビーフ、コッペがに、茶碗蒸し (2024〜2025年)・深夜のカツ丼と粕汁 (2026年5月)、伊勢湾のちくわの天ぷら (2025年5月)・サッポロラガー (赤星)、日本酒、焼酎 (2025年)',
    neighborhood: '花見小路の新橋側、祇園の北。祇園四条駅9番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: カツ丼、かにクリームコロッケ、ちくわの天ぷら、おでん、醤油の料理 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚中心の深夜の居酒屋 (2024〜2026年の口コミ)。',
    notes: '[深夜の居酒屋・祇園の北、朝4時までのひとりのカウンター] 花見小路近くの深夜食堂のような8席のカウンター。若い店主がひとりで、刺身、おでん、牛タンの煮込み、深夜のカツ丼を朝4時まで。混む夜は料理に時間がかかる。喫煙可。日曜休み。',
  });
}

// ================================================================ 和鉄板ぞろんぱ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023968/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_nagomi_teppan_zoronpa_sanjo', name: '和鉄板ぞろんぱ (Nagomi Teppan Zoronpa)', category: 'OMNI',
    lat: 35.007463, lng: 135.763928, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, chijimi, tonpei-yaki and soy-demi sauces from the teppan (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, steak, seafood and egg dishes (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:30–24:00 (last order 23:00); closed Wednesday and irregularly. Reservations taken. Appetizer ¥600 — Tabelog, Japanese original 「お通し代600円」. 40 seats with a counter, second-floor tatami and private rooms for 2–20. Non-smoking. Cards and PayPay; no e-money. On Yanaginobanba below Sanjo. Part of the Zoronpa group — 串鉄板ぞろんぱ 室町仏光寺店 is already in data, and Tabelog lists two other Zoronpa shops in Kyoto.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanaginobanba below Sanjo — 6 min walk from Karasuma',
    cuisine: 'A teppan izakaya for fresh fish and seasonal plates as well as teppan dishes, open late (2024–2026 reviews) · sashimi: hamo, red tuna, seared yellowtail, octopus; Taiza seiko-gani in season (2025) · teppan: tartar okonomiyaki, Tokyo-style okonomiyaki, tonpei-yaki, dashimaki, Kuroge Wagyu rump steak with yolk and soy demi-glace, sea-bream meunière (2024–2026) · skewers such as Brussels sprouts and buttered oysters (March 2026) · chijimi with chirimen and aosa; smoked-egg potato salad; spicy octopus salad; Kimagure Zoronpa salad (2024–2026) · sake and a wide drink list (2025–2026)',
    website: null, gmaps: gm('和鉄板ぞろんぱ 柳馬場三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppan izakaya · Yanaginobanba below Sanjo, okonomiyaki and fresh fish] A warm two-storey teppan izakaya with sashimi, Wagyu rump steak, fluffy tartar okonomiyaki and chijimi, plus private rooms upstairs; staff are chatty in a good way, reviewers say. ¥600 appetizer. Open till midnight; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A sister of 串鉄板ぞろんぱ 室町仏光寺店, which is already in this app; Tabelog lists Zoronpa shops elsewhere in Kyoto, and this one is a corporate-member listing. Reviewers in 2024–2026 praise fresh seafood, a long menu and warm, well-timed service ("You might think they are just chatty, but that\'s not the case", June 2026); one October 2024 diner expected cooking in front of the table but the dishes came from the kitchen.',
      philosophy: null,
      specialty: 'Tartar okonomiyaki; sashimi.',
      anecdotes: [
        { text: 'March 2026: "To finish, I had the famous tartar okonomiyaki, which was unbelievably fluffy and absolutely amazing!"', source: R + 'B523928328/' },
        { text: 'August 2024: "I had assumed it was just a teppanyaki place focusing on okonomiyaki, but it turned out to be a \'Teppanyaki & Izakaya\' offering fresh sashimi and seasonal daily specials."', source: R + 'B489666975/' },
      ],
      japanese_sources_summary: '食べログ: 和鉄板ぞろんぱ、居酒屋・魚介料理・鉄板焼き、中京区柳馬場三条下ル槌屋町102-1、阪急烏丸駅から徒歩6分、月・火・木〜日 17:30〜24:00 (L.O. 23:00)、水曜・不定休、予約可、原文で「お通し代600円」、40席、個室 (2〜20名)、禁煙、カード・PayPay可、電子マネー不可、法人会員。口コミ (2024年8月〜2026年6月、英語): 鉄板と居酒屋、刺身 (鱧、まぐろ赤身、ぶりのたたき、たこ)、Taiza のセコガニ、タルタルのお好み焼き、東京風お好み焼き、とん平焼き、だし巻き、黒毛和牛ランプのステーキ、鯛のムニエル、芽キャベツや牡蠣のバターの串、ちりめんとあおさのチヂミ、燻製卵のポテサラ、たこのピリ辛サラダ、気まぐれぞろんぱサラダ、2階の座敷、気さくで心地よい接客。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B489666975', 'B494034287', 'B512913892', 'B518651123', 'B523928328', 'B526983258', 'B527209987', 'B528328932', 'B528504749', 'B529287457', 'B530958406'])) },
    cultural_comfort: { level: 'japanese', note: 'Private rooms; ¥600 appetizer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場三条下ル槌屋町102-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.007463, 135.763928); cross-checked: GSI 京都府京都市中京区槌屋町102番地 (lot) 48m; nearest pin kyoto_tokishirazu_belgian_beer 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528504749/'],
    price_note: 'No item prices in the sources; reviewers spent about ¥3,000–8,000 a head; ¥600 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Tartar okonomiyaki', null, 'Teppan', 'no', 'no', 'March 2026.', 'okonomiyaki'),
      it('', '', 'Kuroge Wagyu rump steak', null, 'Teppan', 'no', 'no', 'May 2026.', 'rump_steak'),
      it('', '', 'Chijimi with chirimen and aosa', null, 'Teppan', 'no', 'no', '2024; May 2026.', 'chijimi'),
    ] }, {
    cuisine: '鉄板料理に新鮮な魚と季節の料理もある深夜までの鉄板居酒屋 (2024〜2026年の口コミ)・刺身: 鱧、まぐろ赤身、ぶりのたたき、たこ、旬にはTaiza のセコガニ (2025年)・鉄板: タルタルのお好み焼き、東京風お好み焼き、とん平焼き、だし巻き、卵黄と醤油デミの黒毛和牛ランプステーキ、鯛のムニエル (2024〜2026年)・芽キャベツやバターの牡蠣などの串 (2026年3月)・ちりめんとあおさのチヂミ、燻製卵のポテサラ、たこのピリ辛サラダ、気まぐれぞろんぱサラダ (2024〜2026年)・日本酒など豊富な飲み物 (2025〜2026年)',
    neighborhood: '柳馬場三条下ル。烏丸から徒歩6分',
    gf_detail: 'グルテンフリーではない: お好み焼き、チヂミ、とん平焼き、醤油デミのソース (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、ステーキ、魚介、卵の料理 (2024〜2026年の口コミ)。',
    notes: '[鉄板居酒屋・柳馬場三条下ル、お好み焼きと新鮮な魚] 2階建ての温かい鉄板居酒屋で、刺身、黒毛和牛のランプステーキ、ふわふわのタルタルお好み焼き、チヂミ、2階に個室。ほどよく話しかけてくれる接客という声。お通し600円。深夜0時まで、水曜休み。',
  });
}

// ================================================================ よしむら 大丸京都別邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040072/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yoshimura-gr.com/daimaru/';
  const H = day(['11:00', '16:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_yoshimura_daimaru_bettei', name: 'よしむら 大丸京都別邸 (Yoshimura Daimaru Kyoto Bettei)', category: 'OMNI',
    lat: 35.004301, lng: 135.76203, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a 100% buckwheat soba is mentioned (October 2026), but tsuyu is soy-based and tempura sets are common — confirm the day\'s soba and dipping sauce (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito-dashi tsuyu, tempura sets and tuna dishes (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–16:00 and 17:00–21:00; closed 1–2 January with the store; 14:30–16:00 a soba-sweets café with à la carte soba; special menus at peak seasons (cherry blossom, Golden Week, Gion Matsuri, Obon, autumn, year-end). Reservations taken; waits of about 20 minutes at Obon lunch (August 2026). 53 seats with a counter. Non-smoking; wheelchair access. Cards; no e-money or QR. On the 8th floor of Daimaru Kyoto, directly connected to Karasuma / Shijo. Part of the よしむら soba group (嵐山よしむら, 蕎麦の実 よしむら, 北之蔵 よしむら北山楼 — yoshimura-gr.com); opened about three years ago (October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto 8F, Shijo-Takakura — direct from Karasuma / Shijo',
    cuisine: 'The department-store branch of the Arashiyama-based よしむら handmade-soba group (official site; 2024–2026 reviews) · Daimaru Zen set of soba with a mini tendon and a small side ¥1,780 (October 2024; October 2026) · soba tasting of three kinds; limited Inaka soba; a 100% buckwheat soba; staff name the day\'s buckwheat origin, e.g. Akita (2024–2026) · warm shrimp-tempura soba with tempura and leeks served separately; tempura oroshi soba (September–October 2026) · soba-grain salad; tuna and yam with buckwheat groats (August–October 2026) · soba-sweets café 14:30–16:00; Kyoto yuzu soda with soba karinto (October 2026)',
    website: SITE, gmaps: gm('よしむら 大丸京都別邸'), menu_url: SITE,
    notes: '[Soba · Daimaru Kyoto 8F, the Arashiyama Yoshimura group\'s city branch] A calm department-store branch of the Arashiyama soba house: handmade soba with the day\'s buckwheat origin explained, a good-value Daimaru Zen set with mini tendon, a three-soba tasting, and soba sweets in the afternoon. Expect short queues at peak times. Open daily with the store.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Part of the よしむら group (yoshimura-gr.com), whose main shop is Arashiyama Yoshimura near Togetsukyo, with 蕎麦の実 よしむら (Karasuma Gojo) and 北之蔵 よしむら北山楼; an October 2026 reviewer says the Daimaru branch opened about three years ago. One August 2026 diner calls it "part of a famous chain" and found the soba more refined than strong; reviewers praise reasonable prices for central Kyoto and the soba-yu.',
      philosophy: null,
      specialty: 'Handmade soba; Daimaru Zen set.',
      anecdotes: [
        { text: 'October 2024: "The staff informed me, \'Today\'s soba is made from buckwheat flour sourced from Akita Prefecture.\'"', source: R + 'B494277029/' },
        { text: 'October 2026: "I also appreciate that the shrimp tempura and green onions are served on a separate plate."', source: R + 'B538448997/' },
      ],
      japanese_sources_summary: '食べログ: よしむら 大丸京都別邸、そば・居酒屋・スイーツ、下京区四条通高倉西入立売西町79 大丸京都店 8F、阪急烏丸駅・地下鉄四条駅から地下直結、毎日 11:00〜16:00・17:00〜21:00、1月1・2日休み、14:30〜16:00はそばスイーツのカフェと一品そば、繁忙期は特別メニュー、予約可、53席、禁煙、車椅子可、カード可、電子マネー・QR不可。公式サイト (よしむらグループ): 嵐山よしむら、蕎麦の実 よしむら、北之蔵 よしむら北山楼。口コミ (2024年10月〜2026年10月、英語): 大丸膳 (そば、ミニ天丼、小鉢) 1,780円、3種のそばの食べ比べ、限定の田舎そば、十割そば、その日のそば粉の産地 (秋田など) を教えてくれる、温かい海老天そば (天ぷらとねぎは別皿)、天おろしそば、そばの実のサラダ、まぐろとやまかけのそばの実、そばスイーツ、京都の柚子ソーダとそばかりんとう、開店から約3年 (2026年10月)、有名なチェーンの一つという声 (2026年8月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B494277029', 'B533919004', 'B534889838', 'B536262726', 'B536283833', 'B536509729', 'B537222466', 'B537336543', 'B537354015', 'B537506493', 'B538448997', 'B538480675'])) },
    cultural_comfort: { level: 'english', note: 'Department-store restaurant floor; short waits at peak times.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通高倉西入立売西町79 大丸京都店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and group site, with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004301, 135.762030); GSI resolves only to the town 京都府京都市下京区立売西町 (no lot), 70m away — marked approximate (Daimaru Kyoto 8F); nearest pin kyoto_fruits_nakazawa_daimaru 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537354015/', SITE],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Daimaru Zen (soba, mini tendon, small side)', '¥1,780', 'Set', 'no', 'no', 'October 2026.', 'daimaru_zen'),
      it('', '', 'Soba tasting (three kinds)', null, 'Soba', 'ask', 'no', 'September 2026.', 'soba_tasting'),
      it('', '', 'Warm shrimp-tempura soba', null, 'Soba', 'no', 'no', 'October 2026.', 'ebi_ten_soba'),
    ] }, {
    cuisine: '嵐山発の手打ちそばのよしむらグループの百貨店店 (公式サイト、2024〜2026年の口コミ)・そば、ミニ天丼、小鉢の大丸膳1,780円 (2024年10月、2026年10月)・3種のそばの食べ比べ、限定の田舎そば、十割そば。その日のそば粉の産地 (秋田など) を教えてくれる (2024〜2026年)・天ぷらとねぎを別皿で出す温かい海老天そば、天おろしそば (2026年9〜10月)・そばの実のサラダ、まぐろとやまかけのそばの実 (2026年8〜10月)・14時半〜16時のそばスイーツのカフェ、京都の柚子ソーダとそばかりんとう (2026年10月)',
    neighborhood: '大丸京都店8階、四条高倉。烏丸・四条から直結',
    gf_detail: '要確認: 十割そばもある (2026年10月) が、つゆは醤油で天ぷらのセットが多い。その日のそばとつゆを確認を (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かつおだしのつゆ、天ぷら、まぐろ (2024〜2026年の口コミ)。',
    notes: '[そば・大丸京都店8階、嵐山よしむらのまちなかの店] 嵐山のそば屋の百貨店店で、落ち着いた空間。その日のそば粉の産地を教えてくれる手打ちそば、ミニ天丼付きのお得な大丸膳、3種の食べ比べ、午後はそばスイーツ。混む時期は少し待つ。店の営業日に合わせ毎日。',
  });
}

save();
