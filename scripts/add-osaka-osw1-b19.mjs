// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 19.
//   + TERRACE & DINING ZERO (weekend breakfast and lunch buffet in Cross Hotel Osaka, 3F)
//   + 海鮮お好み焼きとおでん 友の tomono (seafood okonomiyaki, yakisoba and clam-dashi oden near Namba, 2024)
//   + 道頓堀てらす Dotonbori Terasu (small okonomiyaki, kushikatsu and takoyaki shop, Namba 1-chome)
//   + 炉端焼き一新 難波 Robata Yaki Isshin (robatayaki with straw-seared fish and vegetable-wrapped pork skewers, 2022)
//   - skip(): 吾曲茶 (no reviews), こてこて (reviews from 2013), 磯丸水産 (chain), 個室和食 鳥魚 御堂筋店 (same-concept branch of
//     a group in data), 3・6・5酒場 (chain).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 (still undecided), 27115444 skip,
//   27111816 +, 27070544 skip, 27083104 skip, 27146108 +, 27136320 +, 27092728 skip, 27122332 skip, 27132624 +.
//   Chain check for the four kept: ZERO is a hotel restaurant (Cross Hotel Osaka; zero.crosshotel.com); 友の and 道頓堀てらす are
//   single shops in shops.jsonl; 炉端焼き 一新 has two robata shops (難波 and 東梅田 27153231) plus a different-format sister,
//   個室焼肉 和牛ホルモン一新 (27129151). None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27115444', 'No Tabelog reviews; nothing to source a record from.');
skip('27070544', 'No reviews in 2025–26: the three Tabelog reviews are all from 2013.');
skip('27083104', 'Chain: 磯丸水産 has 13 shops in shops.jsonl alone (道頓堀, 千日前通, なんばセンター街, 梅田, Kyoto …).');
skip('27092728', 'Same-concept branch of a group already in data: 鳥魚 (osaka_toriuo_soemoncho, the 宗右衛門町 izakaya, added in osw1 b17).');
skip('27122332', 'Chain: 格安ビールと鉄鍋餃子 3・6・5酒場 has six shops in shops.jsonl (難波, 梅田HEP通り, 新大阪, 京都河原町, 赤坂 1号 and 2号).');

// ================================================================ TERRACE & DINING ZERO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111816/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://zero.crosshotel.com/';
  const WE = day(['07:00', '10:30'], ['11:30', '15:00']);
  put({
    id: 'osaka_terrace_dining_zero_cross_hotel', name: 'TERRACE & DINING ZERO', category: 'OMNI',
    lat: 34.669758, lng: 135.500828, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the restaurant says it cannot accommodate allergy requests (Tabelog), and the buffet centres on pasta, pizza and desserts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: allergy and dietary requests are not accommodated (Tabelog); a buffet of meat, pasta and desserts.',
    hours_raw: 'Sat, Sun and holidays only: breakfast 7:00–10:30 (last order 10:00) and lunch 11:30–15:00 (last order 13:30, buffet ends 14:30); closed Monday to Friday (Tabelog). It used to open on Fridays (October 2026). Reservations accepted; no allergy or seating requests (Tabelog). Cards, e-money and QR payments (Tabelog). 128 seats with sofas and a terrace; non-smoking, smoking room on the floor; wheelchair accessible (Tabelog). Smart-casual dress code (Tabelog). No time limit at lunch (May–June 2026). Opened 28 June 2019 (Tabelog).',
    hours: { 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-5-15, 3F of Cross Hotel Osaka — 2–3 min from Namba Stn exit 14',
    cuisine: 'Hotel restaurant with a weekend buffet among indoor plants (Tabelog) · lunch: choose a main or a pasta (for example cold conger eel and plum pasta, July 2026), with a buffet of salads served in parfait glasses, soup curry, pizza and many desserts; coffee jelly topped with soft-serve; a drink bar with Osaka mixed juice and machine coffee; courses around ¥3,000–3,700 (May–October 2026) · breakfast buffet with beef-tendon doteyaki in miso and fresh fruit (September–October 2026)',
    website: SITE, gmaps: gm('TERRACE & DINING ZERO クロスホテル大阪'), menu_url: null,
    notes: "[Buffet · Shinsaibashi-suji, a weekend hotel lunch] The third-floor restaurant of Cross Hotel Osaka, a plant-filled room with sofas and a terrace, now open only at weekends and holidays. Lunch pairs a main or a pasta chosen at the table with an untimed buffet: salads you build in parfait glasses, soup curry, a long dessert spread, soft-serve over coffee jelly, and a drink bar with Osaka mixed juice. Courses ran about ¥3,000–3,700 in 2026; most diners found it good value for a hotel, one thought ¥3,000 a stretch. A breakfast buffet regular comes back for the beef-tendon doteyaki. It cannot handle allergy requests. Book ahead; smart-casual dress.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: the hotel restaurant of Cross Hotel Osaka (3F), casual yet authentic dishes from selected ingredients in a room full of greenery, a wine-centred drink list, a seasonal lunch; opened 28 June 2019. The hotel\'s ground-floor café is osaka_tables_cafe_cross_hotel.', philosophy: null, specialty: 'Weekend lunch buffet with a choice of main or pasta; breakfast buffet.',
      anecdotes: [
        { text: '"I absolutely love their Dote-yaki and come here just to enjoy it!" — September 2026, the breakfast buffet.', source: R + 'B534933557/' },
        { text: '"Despite being located in a hotel, the prices are reasonable. Plus, it\'s a buffet with unlimited time" — June 2026.', source: R + 'B530785154/' },
        { text: '"The flavors are good, but after dining, I felt that at JPY 3000, it might not feel like the best value for money." — August 2026.', source: R + 'B535606094/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): TERRACE & DINING ZERO、ビュッフェ、大阪市中央区心斎橋筋2-5-15 クロスホテル大阪 3F、なんば駅から徒歩3分、心斎橋駅から5分、土日祝のみ 朝7:00〜10:30 (L.O.10:00)・昼11:30〜15:00 (L.O.13:30、ビュッフェは14:30まで)、月〜金休み、予約可、アレルギーや席の希望には対応できない、カード・電子マネー・QR 可、128席、テラス、禁煙 (同じ階に喫煙室)、車いす可、ドレスコードはスマートカジュアル、2019年6月28日オープン。店の紹介 (英訳): 緑の多い落ち着いた店で、素材を選んだカジュアルで本格的な料理、ワイン中心の飲み物、季節のランチ。口コミ(2026年5月〜10月): メインかパスタを選び前菜とデザートはビュッフェ、パフェのグラスのサラダ、スープカレー、ピザ、デザートが多い、コーヒーゼリーにソフトクリーム、ミックスジュースのドリンクバー、コースは3,000〜3,700円ほど、ランチは時間制限なし、朝食のビュッフェのどて焼き、以前は金曜も営業、3,000円は割高という声も、客の多くは女性。',
      confidence: 'medium', sources: [TB, SITE, R + 'B527165291/', R + 'B528810157/', R + 'B529560084/', R + 'B530785154/', R + 'B533643328/', R + 'B533817668/', R + 'B534933557/', R + 'B535606094/', R + 'B537652576/', R + 'B538023950/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel buffet; choose a main at the table and serve yourself. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-5-15 クロスホテル大阪 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the hotel restaurant site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目5番15号 (go) 24m. Same building as osaka_tables_cafe_cross_hotel (address_ja "大阪府大阪市中央区心斎橋筋2-5-15 クロスホテル大阪 1F"), pinned 5 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533643328/', R + 'B535606094/'],
    price_note: 'Course prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch course (main or pasta with buffet)', '¥3,000–3,700', 'Lunch', 'no', 'no', 'August 2026 reviews.', 'lunch_buffet'),
      it('', '', 'Breakfast buffet (with doteyaki)', '', 'Breakfast', 'no', 'no', 'September–October 2026 review.', 'breakfast_buffet'),
    ] }, {
    cuisine: '緑の多い店で週末にビュッフェを出すホテルのレストラン (食べログ)・ランチはテーブルでメインかパスタを選び (2026年7月は穴子と梅の冷製パスタなど)、パフェのグラスで作るサラダ、スープカレー、ピザ、たくさんのデザートはビュッフェ。コーヒーゼリーにソフトクリーム、大阪のミックスジュースとマシンのコーヒーのドリンクバー。コースは3,000〜3,700円ほど (2026年5月〜10月)・朝食のビュッフェには牛すじのみそのどて焼きと新鮮な果物 (2026年9月〜10月)',
    neighborhood: '心斎橋筋2-5-15、クロスホテル大阪の3階。なんば駅14番出口から2〜3分',
    gf_detail: 'グルテンフリーではありません。店はアレルギーの希望に対応できないとしていて (食べログ)、ビュッフェはパスタ、ピザ、デザートが中心。',
    vegan_detail: 'ヴィーガンではありません。アレルギーや食事の希望には対応しておらず (食べログ)、肉、パスタ、デザートのビュッフェ。',
    notes: '[ビュッフェ・心斎橋筋、週末のホテルのランチ] クロスホテル大阪の3階の、植物の多いソファーとテラスのレストランで、今は土日祝のみの営業。ランチはテーブルで選ぶメインかパスタに、時間制限のないビュッフェがつく。パフェのグラスで作るサラダ、スープカレー、たくさんのデザート、コーヒーゼリーにのせるソフトクリーム、大阪のミックスジュースのあるドリンクバー。2026年のコースは3,000〜3,700円ほどで、ホテルにしてはお得という声が多く、3,000円は割高という人も。朝食のビュッフェの常連は牛すじのどて焼きを目当てに通う。アレルギーの希望には対応できない。予約がおすすめで、服装はスマートカジュアル。',
  });
}

// ================================================================ 海鮮お好み焼きとおでん 友の
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146108/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '24:00']);
  put({
    id: 'osaka_tomono_namba', name: '海鮮お好み焼きとおでん 友の (tomono)', category: 'OMNI',
    lat: 34.66794, lng: 135.501505, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, yakisoba noodles, takoyaki and kushikatsu are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood okonomiyaki and oden in clam dashi.',
    hours_raw: 'Daily 13:00–24:00 (food last order 23:00, drinks 23:30) (Tabelog). Reservations accepted; call for groups over 20 (Tabelog). Starter ¥418 (Tabelog); one-drink minimum, shown on signs in English, Korean and Chinese (May 2026). Cards including UnionPay, PayPay and Alipay; no e-money (Tabelog). 51 seats: 9 at the counter and 42 at tables, tatami seating; non-smoking (Tabelog). Dishes are cooked and brought to the table (May 2026). The toilet is upstairs on a steep staircase (October 2026). English menu descriptions (October 2026). Opened 27 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-6-10 — about 5 min from Namba Stn, near the Shochikuza',
    cuisine: 'Seafood teppanyaki shop: seafood okonomiyaki with a house-blended sauce, oden in clam dashi, kushikatsu, dashi-wari sake (Tabelog) · seafood okonomiyaki with kimchi and an egg yolk; double pork okonomiyaki; spinach and scallop okonomiyaki (May–October 2026) · yakisoba: seafood kimchi, salt lemon seafood, sukiyaki yakisoba, a sauce yakisoba on an oval iron plate (May–October 2026) · takoyaki cooked in view; oden of daikon, egg and thick fried tofu with clams in the broth (May–October 2026)',
    website: null, gmaps: gm('海鮮お好み焼きとおでん 友の 難波'), menu_url: null,
    notes: "[Okonomiyaki · Namba, seafood teppan and clam-dashi oden] A friendly, traditional-feeling okonomiyaki house five minutes from Namba Station, opened at the end of 2024 and open from 1 p.m. to midnight, handy for a meal between Shochikuza shows. Seafood is the theme: okonomiyaki loaded with squid under an egg yolk, salt-lemon or kimchi seafood yakisoba served sizzling on an iron plate, and oden whose broth is made with clams. Kushikatsu and takoyaki round out the Osaka set. There is a one-drink minimum (¥418 starter too), which one lunch diner found steep. English descriptions on the menu. Toilet up a steep stair.",
    chef_bio: { chef_name: null, roles: ['Teppan cooks and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a seafood teppanyaki shop full of Osaka charm, seafood teppanyaki with a homemade blended sauce, oden in asari (clam) dashi, kushikatsu, dashi-wari sake; opened 27 December 2024.', philosophy: null, specialty: 'Seafood okonomiyaki; clam-dashi oden.',
      anecdotes: [
        { text: '"During my visit to the Osaka Shochikuza to see a Kabuki performance, I stopped by for some okonomiyaki during the 1.5-hour break" — May 2026; about ¥2,000 each.', source: R + 'B528218855/' },
        { text: '"The oden was delicious, especially the broth, and I loved that it came with clams!" — October 2026.', source: R + 'B538318718/' },
        { text: '"If you come in expecting a casual lunch, you might be disappointed by the one-drink requirement." — May 2026.', source: R + 'B528510983/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 海鮮お好み焼きとおでん 友の、おでん・お好み焼き・麺類、大阪市中央区難波1-6-10、なんば駅から徒歩5分ほど、毎日13:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、予約可、お通し418円、カード (銀聯も)・PayPay・Alipay 可、電子マネー不可、51席 (カウンター9、テーブル42)、座敷、禁煙、2024年12月27日オープン。店の紹介 (英訳): 大阪の魅力の詰まった海鮮の鉄板焼きの店、自家製の合わせソース、あさりのだしのおでん、串カツ、だし割り。口コミ(2026年5月〜10月): 卵黄とキムチの海鮮お好み焼き、W豚玉、ほうれん草とほたてのお好み焼き、海鮮キムチ焼きそば、塩レモンの海鮮焼きそば、すき焼き焼きそば、楕円の鉄板の焼きそば、目の前で焼くたこ焼き、大根・卵・厚揚げのおでんとあさり、1人1ドリンク制 (英語・韓国語・中国語の掲示)、松竹座の幕間に、メニューに英語の説明、トイレは2階で階段が急。',
      confidence: 'medium', sources: [TB, R + 'B528218855/', R + 'B528510983/', R + 'B528545911/', R + 'B528757776/', R + 'B532868631/', R + 'B537985897/', R + 'B537986446/', R + 'B537986572/', R + 'B538318718/', R + 'B538432068/'] },
    cultural_comfort: { level: 'english', note: 'English descriptions on the menu (October 2026); signs in English, Korean and Chinese (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番10号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B528218855/'],
    price_note: 'Only the starter charge is listed; a May 2026 diner paid about ¥2,000 for okonomiyaki or yakisoba with a drink.', last_checked: TODAY, items: [
      it('', '', 'Seafood okonomiyaki with kimchi and egg yolk', '', 'Okonomiyaki', 'no', 'no', 'October 2026 reviews.', 'kaisen_okonomiyaki'),
      it('', '', 'Salt lemon seafood yakisoba', '', 'Yakisoba', 'no', 'no', 'August 2026 review.', 'shio_lemon_yakisoba'),
      it('', '', 'Oden in clam dashi', '', 'Oden', 'ask', 'no', 'October 2026 reviews.', 'oden'),
    ] }, {
    cuisine: '海鮮の鉄板焼きの店: 自家製の合わせソースの海鮮お好み焼き、あさりのだしのおでん、串カツ、だし割り (食べログ)・卵黄とキムチの海鮮お好み焼き、W豚玉、ほうれん草とほたてのお好み焼き (2026年5月〜10月)・焼きそば: 海鮮キムチ、塩レモンの海鮮、すき焼き焼きそば、楕円の鉄板のソース焼きそば (2026年5月〜10月)・目の前で焼くたこ焼き。大根、卵、厚揚げのおでんはだしにあさり (2026年5月〜10月)',
    neighborhood: '難波1-6-10、なんば駅から5分ほど、松竹座の近く',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地、焼きそばの麺、たこ焼き、串カツは小麦。',
    vegan_detail: 'ヴィーガンではありません。海鮮のお好み焼きと、あさりのだしのおでん。',
    notes: '[お好み焼き・なんば、海鮮の鉄板とあさりのだしのおでん] なんば駅から5分の、昔ながらの雰囲気の気さくなお好み焼きの店で、2024年末にできた。午後1時から深夜0時まで開いていて、松竹座の幕間の食事にも便利。テーマは海鮮で、いかがたっぷりで卵黄をのせたお好み焼き、鉄板でじゅうじゅう出る塩レモンやキムチの海鮮焼きそば、あさりでだしをとったおでん。串カツとたこ焼きで大阪の名物がそろう。1人1ドリンク制 (お通し418円も) で、ランチの客には高く感じた人も。メニューには英語の説明。トイレは急な階段の上。',
  });
}

// ================================================================ 道頓堀てらす
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136320/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://dotonboriterrace.com/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'osaka_dotonbori_terasu_namba', name: '道頓堀てらす (Dotonbori Terasu)', category: 'OMNI',
    lat: 34.667963, lng: 135.502094, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki (on a yam-based batter with tenkasu), yakisoba, takoyaki and kushikatsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki contains egg and the menu centres on pork and seafood.',
    hours_raw: 'Tue, Thu, Fri 17:00–23:00; Sat–Sun 12:00–23:00; closed Monday and Wednesday (official site). Reservations accepted (official site). No cards; e-money and QR (au PAY, Rakuten Pay, PayPay) (official site). 18 seats: 12 at tables and 6 at the counter; non-smoking (official site; February 2026). One-drink policy (December 2025). Queues at peak times (May and December 2025). Moved here from a former site along Dotonbori (July 2024).',
    hours: { 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-6-5, TMビル 1F, a hard-to-spot entrance near Dotonbori — 5 min from Namba Stn',
    cuisine: 'Okonomiyaki, yakisoba, kushikatsu and takoyaki in one place, with some unusual variations (official site) · okonomiyaki on a yam-based batter, moist, topped with tenkasu for crunch (official site); mixed okonomiyaki ¥1,540 (December 2025); pork okonomiyaki, a tomato and avocado okonomiyaki, a yakisoba omelette with pink sauce, house mayonnaise (2024–2026 reviews) · kushikatsu with dipping sauce, tonpei-yaki, pork kimchi, grilled yam (2024–2026 reviews) · courses (official site)',
    website: SITE, gmaps: gm('道頓堀てらす 難波'), menu_url: null,
    notes: "[Okonomiyaki · Namba, a small all-in-one Osaka spot] A small okonomiyaki shop of 18 seats in a building just off Dotonbori, easy to miss from the street, where you can have okonomiyaki, yakisoba, kushikatsu and takoyaki in one sitting. The okonomiyaki uses a yam-based batter, moist inside, with tenkasu scattered on top for crunch; the mixed one was ¥1,540 in December 2025, and there are oddities like a tomato-and-avocado version and a yakisoba omelette with pink sauce. Staff are kind, and food is brought cooked to the table. Lines form at peak times and many guests are from overseas. One drink each; no cards. Closed Mondays and Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null, background: 'Official site (dotonboriterrace.com): a shop near Dotonbori where Osaka specialities, okonomiyaki, yakisoba, kushikatsu and takoyaki, can be had at once; the okonomiyaki batter is yam-based, with tenkasu added after cooking. A July 2024 review: reopened here after moving from a former site along Dotonbori.', philosophy: '"Moist and crisp" okonomiyaki (official site).', specialty: 'Okonomiyaki; kushikatsu.',
      anecdotes: [
        { text: '"I\'m so happy that it has reopened after moving from the previous location along Dotonbori!" — July 2024.', source: R + 'B488872255/' },
        { text: '"Mixed Okonomiyaki - JPY 1540 It was indeed packed with ingredients and absolutely delicious." — December 2025.', source: R + 'B519765540/' },
        { text: '"The restaurant was free of smoke, and the restroom was clean, making for a comfortable dining experience." — February 2026.', source: R + 'B523290827/' },
      ],
      japanese_sources_summary: '公式サイト (dotonboriterrace.com): 道頓堀てらす、大阪市中央区難波1-6-5 TMビル1F、御堂筋線なんば駅から徒歩5分、火・木・金17:00〜23:00、土日12:00〜23:00、月曜・水曜定休、予約可、カード不可、電子マネー (auPAY、楽天PAY、PAYPAY) 可、18席 (テーブル12、カウンター6)、店内禁煙、昼1,000〜1,999円、夜2,000〜2,999円、お好み焼き・焼きそば・串カツ・たこ焼きを一度に、山芋をベースにしたしっとりした生地と後のせの天かすでサクサク、コースあり。食べログ: 道頓堀てらす、お好み焼き・串揚げ・焼きそば。口コミ(2024年3月〜2026年2月): 道頓堀沿いから移転して再開、入口がわかりにくい、ミックスのお好み焼き1,540円、豚玉、トマトとアボカド、ピンクのソースの焼きそばのオムレツ、自家製のマヨネーズ、串カツとソース、とん平焼き、豚キムチ、山芋の鉄板焼き、1ドリンク制、混む時間は行列、海外の客が多い、スタッフが親切。',
      confidence: 'medium', sources: [TB, SITE, R + 'B482102852/', R + 'B488872255/', R + 'B490897437/', R + 'B497985893/', R + 'B498361098/', R + 'B506508132/', R + 'B519318261/', R + 'B519765540/', R + 'B523290827/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (2024–2025). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区難波1-6-5 TMビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current hours; Tabelog reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番5号 (go) 5m. Same building as osaka_kokopelli_namba (address_ja "大阪府大阪市中央区難波1-6-5 TMビル 1F"), pinned 5 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519765540/', SITE],
    price_note: 'One dated price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Mixed okonomiyaki', '¥1,540', 'Okonomiyaki', 'no', 'no', 'December 2025 review.', 'mix_okonomiyaki'),
      it('', '', 'Yakisoba omelette with pink sauce', '', 'Teppan', 'no', 'no', 'December 2024 review.', 'omusoba'),
      it('', '', 'Kushikatsu', '', 'Kushikatsu', 'no', 'no', '2024–2025 reviews.', 'kushikatsu'),
    ] }, {
    cuisine: 'お好み焼き、焼きそば、串カツ、たこ焼きを一度に、変わり種も (公式サイト)・山芋をベースにしたしっとりした生地に、後のせの天かすでサクサクのお好み焼き (公式サイト)。ミックスのお好み焼き1,540円 (2025年12月)。豚玉、トマトとアボカドのお好み焼き、ピンクのソースの焼きそばのオムレツ、自家製のマヨネーズ (2024〜2026年の口コミ)・ソースで食べる串カツ、とん平焼き、豚キムチ、山芋の鉄板焼き (2024〜2026年の口コミ)・コースも (公式サイト)',
    neighborhood: '難波1-6-5、TMビル1階、道頓堀のそばのわかりにくい入口。なんば駅から5分',
    gf_detail: 'グルテンフリーではありません。山芋ベースの生地と天かすのお好み焼き、焼きそば、たこ焼き、串カツ。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きには卵を使い、豚や魚介が中心。',
    notes: '[お好み焼き・なんば、大阪の名物がそろう小さな店] 道頓堀のすぐそばのビルの、通りから見つけにくい18席の小さなお好み焼きの店で、お好み焼き、焼きそば、串カツ、たこ焼きを一度に楽しめる。お好み焼きは山芋ベースの生地で中はしっとり、上に天かすをのせてサクサクに。2025年12月はミックスが1,540円で、トマトとアボカドやピンクのソースの焼きそばのオムレツなど変わり種も。スタッフは親切で、焼いてテーブルに運んでくれる。混む時間は行列ができ、海外の客も多い。1人1ドリンク制、カード不可。月曜と水曜休み。',
  });
}

// ================================================================ 炉端焼き一新 難波
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132624/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']); const WE = day(['15:00', '23:30']);
  put({
    id: 'osaka_robata_isshin_namba', name: '炉端焼き一新 難波 (Robata Yaki Isshin)', category: 'OMNI',
    lat: 34.667924, lng: 135.500981, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Grilled fish and skewers are seasoned with salt, ponzu or soy; tempura, yakisoba and grilled rice balls are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and meat robatayaki; even the vegetable skewers are wrapped in pork.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat, Sun and holidays 15:00–23:30; irregular closing days (Tabelog). Reservations accepted; private rooms for four or more (Tabelog). Cards, e-money and QR payments (Tabelog). 30 seats with a counter and private rooms; smoking allowed throughout, including cigarettes (Tabelog; September 2026). Half portions of many dishes (September 2026). Opened 21 December 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-7-6, ニュー豊楽ビル 2F — 1 min from Namba Stn exit 14',
    cuisine: 'Robatayaki of fish delivered daily from around Japan, charcoal and straw grilling, and vegetable-wrapped pork skewers (Tabelog) · straw-seared bonito tataki with garlic salt, half portions available; whole grilled mackerel ¥1,980; whole grilled squid; butter-soy grilled clams; botan shrimp and wild bluefin sashimi; toro (July–September 2026) · pork belly wrapped round green onion and lettuce, whole robata-grilled zucchini, chicken neck with ponzu, wagyu namerō, select wagyu tenderloin, beef and tofu salad (Tabelog; July–September 2026) · conger eel tempura, fried kinme and water eggplant, charcoal-grilled yakisoba, dashimaki, grilled rice balls (June–September 2026) · a wide sake list and Japanese whisky; seasonal robata course ¥6,600 with two hours of drinks, local sake +¥1,650 (Tabelog)',
    website: null, gmaps: gm('炉端焼き一新 難波'), menu_url: null,
    notes: "[Robatayaki · Namba, straw-seared fish a minute from the station] A second-floor robatayaki a minute from Namba Station exit 14, with a counter where you watch fish seared over burning straw, and private rooms behind. The fish comes in daily from around Japan: straw-seared bonito with garlic salt (half portions for two), a fatty whole mackerel (¥1,980 in September 2026), botan shrimp and wild bluefin. The other draw is the skewers of pork belly rolled round green onion and lettuce. Finish with grilled rice balls or the smoky charcoal yakisoba. Prices are on the high side but diners call them fair. Every seat allows smoking, cigarettes included.",
    chef_bio: { chef_name: null, roles: ['Robata cooks and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: charcoal-grilled fresh fish and skewers, fish delivered daily from around Japan, select wagyu tenderloin and limited vegetable-wrapped pork skewers, a drinks list up to Japanese whisky, private rooms; opened 21 December 2022. A sister robata shop in Higashi-Umeda (27153231) and a different-format yakiniku, 個室焼肉 和牛ホルモン一新 (27129151), are in shops.jsonl.', philosophy: null, specialty: 'Straw-seared bonito; vegetable-wrapped pork skewers.',
      anecdotes: [
        { text: '"The restaurant features impressive live grilling with straw, creating a vibrant atmosphere as you watch your food being prepared right in front of you." — September 2026.', source: R + 'B535007537/' },
        { text: '"my favorite was the pork belly wrapped with green onion and lettuce." — August 2026.', source: R + 'B535794702/' },
        { text: '"Please note that the entire restaurant allows smoking, so if that\'s a concern for you, be aware." — September 2026.', source: R + 'B536037054/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炉端焼き一新 難波、炉端焼き・居酒屋・海鮮、大阪市中央区難波1-7-6 ニュー豊楽ビル 2F、なんば駅14番出口から徒歩1分、月〜金17:00〜23:30、土日祝15:00〜23:30、不定休、予約可 (個室は4名から)、カード・電子マネー・QR 可、30席、個室、喫煙可、2022年12月21日オープン、季節の炉端のコース6,600円 (2時間飲み放題、地酒は1,650円追加)。店の紹介 (英訳): 全国から毎日届く鮮魚と串、炭火焼き、厳選の和牛ヒレと数量限定の野菜巻き串、日本のウイスキーまでの飲み物、個室。口コミ(2026年6月〜9月): わら焼き、にんにく塩のかつおのたたき (ハーフもできる)、さばの丸焼き1,980円、いかの丸焼き、はまぐりのバター醤油焼き、ぼたんえび、天然の本まぐろ、トロ、ねぎとレタスの豚バラ巻き、ズッキーニの丸焼き、せせりのポン酢、和牛のなめろう、牛肉と豆腐のサラダ、穴子の天ぷら、きんめと水なすの揚げ物、炭火の焼きそば、だし巻き、焼きおにぎり、日本酒が多い、全席喫煙で紙たばこも可。',
      confidence: 'medium', sources: [TB, R + 'B529531441/', R + 'B530545115/', R + 'B531674812/', R + 'B531976202/', R + 'B535007537/', R + 'B535794702/', R + 'B536037054/', R + 'B536217706/', R + 'B536359989/', R + 'B538515914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private rooms; overseas guests noted (July 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-6 ニュー豊楽ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535007537/'],
    price_note: 'Prices from the Tabelog listing and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal robata course with two hours of drinks (4+ people)', '¥6,600', 'Courses', 'ask', 'no', 'Tabelog listing.', 'robata_course'),
      it('', '', 'Whole grilled mackerel', '¥1,980', 'Robata', 'ask', 'no', 'September 2026 review.', 'saba_maruyaki'),
      it('', '', 'Straw-seared bonito tataki with garlic salt', '', 'Robata', 'ask', 'no', 'July and September 2026 reviews.', 'katsuo_warayaki'),
      it('', '', 'Pork belly wrapped round green onion and lettuce', '', 'Skewers', 'ask', 'no', 'August 2026 review.', 'yasai_maki'),
    ] }, {
    cuisine: '全国から毎日届く魚の炉端焼きで、炭火とわらで焼き、野菜巻きの豚の串も (食べログ)・にんにく塩で食べるかつおのわら焼きのたたき、ハーフもできる。さばの丸焼き1,980円、いかの丸焼き、はまぐりのバター醤油焼き、ぼたんえびと天然の本まぐろの刺身、トロ (2026年7月〜9月)・ねぎとレタスを巻いた豚バラ、炉端で焼くズッキーニの丸焼き、せせりのポン酢、和牛のなめろう、厳選の和牛ヒレ、牛肉と豆腐のサラダ (食べログ、2026年7月〜9月)・穴子の天ぷら、きんめと水なすの揚げ物、炭火の焼きそば、だし巻き、焼きおにぎり (2026年6月〜9月)・日本酒が多く日本のウイスキーも。2時間飲み放題つきの季節の炉端のコース6,600円、地酒は1,650円追加 (食べログ)',
    neighborhood: '難波1-7-6、ニュー豊楽ビル2階。なんば駅14番出口から1分',
    gf_detail: '要確認。グルテンの情報なし。焼き魚や串は塩、ポン酢、醤油で、天ぷら、焼きそば、焼きおにぎりもある。',
    vegan_detail: 'ヴィーガンではありません。魚と肉の炉端焼きで、野菜の串も豚で巻いている。',
    notes: '[炉端焼き・なんば、駅から1分のわら焼きの魚] なんば駅14番出口から1分のビルの2階の炉端焼きで、カウンターからはわらの炎で魚を焼くのが見え、奥には個室。魚は全国から毎日届き、にんにく塩のかつおのわら焼き (2人ならハーフも)、脂ののったさばの丸焼き (2026年9月は1,980円)、ぼたんえびや天然の本まぐろ。もうひとつの名物は、ねぎとレタスを豚バラで巻いた串。締めは焼きおにぎりか、炭火の香りの焼きそば。値段は高めだが妥当という声。全席喫煙可で、紙たばこもよい。',
  });
}

save();
