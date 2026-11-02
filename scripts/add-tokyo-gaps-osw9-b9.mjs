// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 9.
//   + 六本木 ちょっと Roppongi Chotto (couple-run Showa-style izakaya with a long menu; cash only)
//   + 薫風 Kunpu (100-seat "sosaku" dining with premium all-you-can-drink, growing glasses and fresh-baked bread)
//   + yelo (late-night kakigori bar, open to 2 or 5 am)
//   + 5坪 六本木店 Go Tsubo (one-man oyster bar: raw, steamed or grilled oysters at about ¥250; cash only)
//   Skipped: ゴーゴーカレー 六本木スタジアム 13128857 — Go Go Curry chain (a Tabelog review: first shop Shinjuku 2004,
//   Kanazawa main branch 2005, shops in New York and "quite a few" in Kanto); 一風堂 六本木店 13005378 — Ippudo chain,
//   osaka_ippudo_namba and osaka_ippudo_horie in data; ファラフェルブラザーズ 六本木店 13206494 — tokyo_falafel_brothers_shibuya
//   in data; すき家 六本木五丁目店 13131882 — national gyudon chain.
//   Chain check. Chotto, Yelo: one listing each (yelo.jp also runs the hot-dog counter Amber). Kunpu: its site
//   (yasaiya.tokyo/kunpuu/) shows one shop; its concept (growing glasses, fresh bread) resembles Hiizuru
//   (tokyo_hiizuru_roppongi), but no source read links them. Go Tsubo: the Tabelog name has "六本木店"; no other branch
//   found in the sources read. None is in data/tokyo.json by name, Tabelog id or address. Nearest records are 18 m or more
//   away (Go Tsubo is 18 m from Miyake Akira, 3-8-12, a different building). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13128857', 'ゴーゴーカレー 六本木スタジアム: Go Go Curry chain (Tabelog review: first shop Shinjuku 2004, Kanazawa main branch 2005, New York and many Kanto shops)');
skip('13005378', '一風堂 六本木店: Ippudo chain; osaka_ippudo_namba and osaka_ippudo_horie already in data');
skip('13206494', 'ファラフェルブラザーズ 六本木店: Falafel Brothers chain; tokyo_falafel_brothers_shibuya already in data');
skip('13131882', 'すき家 六本木五丁目店: Sukiya, national gyudon chain');

// ================================================================ 六本木 ちょっと
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13050994/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:15', '23:30']); const S = day(['18:30', '22:30']);
  put({
    id: 'tokyo_roppongi_chotto', name: '六本木 ちょっと (Roppongi Chotto)', category: 'OMNI',
    lat: 35.663889, lng: 139.731857, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The long menu includes homemade gyoza, fried fish, sweet-and-spicy konnyaku, butter-and-soy teppan vegetables and soy-grilled rice balls (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-skewer izakaya; vegetable dishes such as the mixed butter teppan use butter and soy, and the appetizer has been oden.',
    hours_raw: 'Mon–Fri 18:15–23:30; Sat 18:30–22:30; holidays 18:15–22:30; closed Sundays; hours may change (Tabelog). Cash only (Tabelog; July 2025). Book ahead — it is often full (June 2024, July 2025). Smoking allowed; no children (Tabelog). 20 seats, counter and tables, up an elevated floor reached by a small path (May 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-10-8, パーレットビル 2F, a minute from Roppongi crossing',
    cuisine: 'Showa-style izakaya with a long menu and daily specials (2024–2026 reviews) · October 2025 prices: homemade gyoza (six, on a hot plate) ¥800, fried mehikari ¥800, mixed butter teppan vegetables ¥800, grilled rice ball with soy ¥300 (miso also), small draft beer ¥400, highball ¥600 · fish and sashimi, shirako with ponzu, satsuma-age, smelt, eel-liver skewer, yakitori, spicy konnyaku, grilled eggplant with pork belly, pickles, oysters, grilled mackerel, pork and potatoes (2024–2026) · a homemade coffee liqueur kept for regulars (May 2026) · shochu served strong',
    website: null, gmaps: gm('六本木 ちょっと 六本木4-10-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Roppongi, a couple-run Showa izakaya] Up a narrow way to the second floor of an old building a minute from Roppongi crossing, a 20-seat izakaya that reviewers describe as run by a couple, with a retro Showa feel, a TV in the corner and a menu so long it is hard to choose. The cook — the elderly gentleman in the kitchen, as one January 2026 diner put it — makes almost everything single-handed: sizzling homemade gyoza on a hot plate, fried mehikari, butter-and-soy teppan vegetables, satsuma-age, eel-liver skewers, sashimi and daily specials, most around ¥800. Prices are low for Roppongi (about ¥3,500 a head in October 2025), the shochu is poured strong, and it fills with office workers, so book. Cash only; smoking allowed; no children; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Couple-run (unnamed)'], origin: null,
      background: 'Reviewers describe the izakaya as run by a couple: "A Showa-era style izakaya run by a couple" and the wife\'s enthusiastic service (July 2025); "this cozy izakaya run by a couple" (October 2025); "the elderly gentleman in the kitchen" (January 2026); "the chef prepares almost everything by himself" and a chat "with the master and the owner" (May 2026). No one is named in the sources read.',
      philosophy: null, specialty: 'Homemade gyoza; long Showa izakaya menu.',
      anecdotes: [
        { text: '"Six large gyoza filled with a generous amount of stuffing! Served sizzling hot on a teppan." — October 2025, homemade gyoza ¥800.', source: R + 'B517539663/' },
        { text: '"The coffee liqueur is homemade and usually only served to regular customers... I\'m grateful for that." — May 2026.', source: R + 'B528521543/' },
        { text: '"The retro Showa-style interior really lifts the spirits. It\'s like being in a theme park!" — June 2024.', source: R + 'B489679388/' },
      ],
      japanese_sources_summary: '食べログ: 六本木 ちょっと、港区六本木4-10-8 パーレットビル2F、六本木の交差点から74m、月〜金18:15〜23:30、土18:30〜22:30、祝18:15〜22:30、日曜休み、営業時間は変わることがある、カード・電子マネー・QR不可、20席、喫煙可、子ども不可。口コミ(2024年6月〜2026年5月): 夫婦で営む昭和の居酒屋、メニューが多い、本日のおすすめ、自家製餃子800円、めひかりの唐揚げ800円、ミックスバター800円、焼きおにぎり300円、生ビール小400円、白子ポン酢、さつま揚げ、うなぎの肝串、ピリ辛こんにゃく、常連向けの自家製コーヒーリキュール、予約がおすすめ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B487651073/', R + 'B489679388/', R + 'B497571841/', R + 'B502505230/', R + 'B507775960/', R + 'B510664686/', R + 'B510675110/', R + 'B517539663/', R + 'B520941494/', R + 'B528521543/'] },
    cultural_comfort: { level: 'japanese', note: 'A long Japanese menu and daily specials; no English menu is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木4-10-8 パーレットビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.663889, 139.731857); GSI 東京都港区六本木四丁目10番 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517539663/'],
    price_note: 'Prices from an October 2025 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Homemade gyoza (six, on a hot plate)', '¥800', 'Food', 'no', 'no', 'October 2025 review.', 'gyoza'),
      it('', '', 'Fried mehikari', '¥800', 'Food', 'no', 'no', 'October 2025 review.', 'mehikari'),
      it('', '', 'Mixed butter (teppan vegetables with butter and soy)', '¥800', 'Food', 'no', 'no', 'October 2025 review.', 'mixed_butter'),
      it('', '', 'Grilled rice ball, soy or miso', '¥300', 'Food', 'ask', 'ask', 'October 2025 review.', 'yaki_onigiri'),
    ] }, {
    cuisine: 'メニューの多い昭和風の居酒屋、本日のおすすめも (2024〜2026年の口コミ)・2025年10月の値段: 鉄板で出す自家製餃子 (6個) 800円、めひかりの唐揚げ800円、鉄板の野菜のミックスバター800円、焼きおにぎり (醤油、味噌も) 300円、生ビール小400円、ハイボール600円・刺身、白子ポン酢、さつま揚げ、わかさぎ、うなぎの肝串、焼き鳥、ピリ辛こんにゃく、焼き茄子と豚バラの鉄板、漬物、牡蠣、焼き鯖、肉じゃが (2024〜2026年)・常連向けの自家製コーヒーリキュール (2026年5月)・濃いめの焼酎',
    neighborhood: '六本木4-10-8 パーレットビル2F、六本木の交差点から1分',
    gf_detail: '要確認。グルテンフリーの説明はない。メニューは多く、自家製餃子、魚の揚げ物、甘辛いこんにゃく、バター醤油の鉄板野菜、醤油の焼きおにぎりなど (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と串の居酒屋で、ミックスバターなどの野菜料理もバターと醤油を使い、お通しにおでんが出たことも。',
    notes: '[居酒屋・六本木、夫婦で営む昭和の居酒屋] 六本木の交差点から1分、古いビルの2階へ細い道を上がると、口コミによれば夫婦で営む20席の居酒屋。昭和レトロな店内に隅のテレビ、迷うほど長いメニュー。厨房の年配の男性 (2026年1月の客) がほとんどの料理を一人で作り、鉄板でジュージューいう自家製餃子、めひかりの唐揚げ、バター醤油の鉄板野菜、さつま揚げ、うなぎの肝串、刺身、本日のおすすめと、多くは800円ほど。六本木にしては安く (2025年10月は1人約3,500円)、焼酎は濃いめ、会社員で埋まるので予約を。現金のみ、喫煙可、子ども不可、日曜休み。',
  });
}

// ================================================================ 薫風
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13024437/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yasaiya.tokyo/kunpuu/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'tokyo_kunpu_roppongi', name: '薫風 (Kunpu)', category: 'OMNI',
    lat: 35.664207, lng: 139.733574, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; every course ends with the house fresh-baked bread, and dishes have included chicken tempura, chijimi and a mapo tofu bowl (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options" and the shop invites you to name what you want to eat, but courses centre on fish, meat and cheese.',
    hours_raw: 'From 18:00, usually to about 24:00 (Tabelog says sometimes as late as 05:00; the official site says until 24:00, and earlier starts by arrangement). Closed Sundays and holidays (Tabelog); the official site also lists Saturdays as closed, with weekend and holiday hire for 20 or more. December: open every day until the 30th; reopens 3 January (Tabelog). No service charge. 100 seats, all semi-private, divided by roll screens (official site; a June 2026 diner could hear the next table); half the room (30 seats) can be hired for ¥30,000. Non-smoking. Cards and QR. Children welcome, with a kids\' menu. Opened 1 September 1999 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-8-3, 日栄ビル 2F–3F, on Roppongi-dori — 5 min from Roppongi Stn exit 6 (Oedo line)',
    cuisine: '"Sosaku" creative dining with drinks included in the courses (official site) · premium all-you-can-drink in the courses: Juyondai, Moriizo, Maou, Murao, Yamazaki, Hakushu and Ichiro\'s Malt among them; a ¥5,000 all-you-can-drink (December 2025); beer and highball glasses that grow with each order (official site; reviews) · signatures: a Caesar salad tossed at the table with shaved cheese, fresh-baked bread with honey or butter at the end of every course (official site; 2025–2026 reviews) · dishes in 2025–2026: carpaccio, grilled fish and collar, bone-in hamburg with tomato sauce, whole roast chicken, freshly made warm tofu, mapo tofu bowl; in July 2026 Oita produce — seki-aji and seki-saba, Bungo beef "manga meat" hamburg, goya champuru · nothing frozen or made ahead; message dishes, salt-crust dishes or "meat cakes" for celebrations (official site)',
    website: SITE, gmaps: gm('薫風 六本木4-8-3'), menu_url: SITE,
    notes: "[Izakaya · Roppongi, all-in courses with premium shochu and fresh bread] On the second floor along Roppongi-dori, a 100-seat restaurant of semi-private tables divided by roll screens, open since 1999. Courses include the drinks — and they are serious ones: Juyondai sake, Moriizo, Maou and Murao shochu, Yamazaki and Ichiro's Malt whisky — while beer and highball glasses grow bigger with every refill. The food is \"sosaku\" (creative) Japanese-Western cooking made fresh, with a Caesar salad tossed at the table under shaved cheese and fresh-baked bread with honey to finish every course; a July 2026 business dinner featured Oita fish and Bungo beef. Diners call the drinks a bargain; one in June 2026 found the food plainer than expected and the screens thin, and one notes the owner's strong personality. Mostly for groups; closed Sundays and holidays (and Saturdays, per the shop's site).",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 September 1999 (Tabelog). The official site promises nothing frozen or made in advance, premium drinks at nearly cost, and drinks you request a week ahead. A December 2025 reviewer mentions the owner\'s strong personality; a July 2026 diner notes turmeric drinks and tablets on the table. No one is named in the sources read.',
      philosophy: '"Tell us what you want to eat" — written on the menu since opening (official site).', specialty: 'Premium all-you-can-drink courses; table-side Caesar salad; fresh-baked bread.',
      anecdotes: [
        { text: '"To my surprise, they serve the renowned Junmai Daiginjo sake, Juyondai, in generous pours. The all-you-can-drink option at JPY 5,000 raises questions about how they can offer such value." — December 2025.', source: R + 'B519808199/' },
        { text: '"The signature dish here is the Caesar salad, prepared right in front of you." — May 2026.', source: R + 'B529812417/' },
        { text: '"The seating is separated by a curtain, so I could hear everything from the neighboring table quite clearly." — June 2026.', source: R + 'B530562968/' },
      ],
      japanese_sources_summary: '公式サイト (yasaiya.tokyo/kunpuu): 薫風、六本木の総作料理店、十四代、森伊蔵、山崎、イチローズモルトなどがコースにより飲み放題、総作料理と自家製パンが名物、すべての席が半個室 (ロールスクリーンで仕切る)、六本木駅から272m、コースだとビールやハイボールのグラスがどんどん成長する、プレミアムなお酒がほぼ原価、すべてのコースに焼きたてパン、冷凍や作り置きはしない、お祝いに文字メッセージ料理や塩釜、お肉のケーキ、店の半分30名の貸切は個室料3万円、六本木4-8-3 日栄ビル2F、18:00から24:00まで、土日祝休み (20名以上で貸切可)。食べログ: 日栄ビル2F・3F、大江戸線六本木駅6番出口から徒歩5分、日祝休み、遅いときは朝5時まで、100席、サービス料なし、禁煙、カード・QR可、子ども可、1999年9月1日オープン。口コミ(2025年2月〜2026年7月): 十四代、森伊蔵、Maou、Murao、飲み放題5,000円、目の前で和えるシーザーサラダ、焼きたてのパンと蜂蜜、骨付きハンバーグ、Oita の Seki-aji・Seki-saba、Bungo beef のハンバーグ、店主の個性が強いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B452980930/', R + 'B519808199/', R + 'B520968586/', R + 'B524583551/', R + 'B529812417/', R + 'B530562968/', R + 'B530922088/', R + 'B531762648/', R + 'B532111993/', R + 'B538092315/'] },
    cultural_comfort: { level: 'japanese', note: 'Course-based; no English menu is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-8-3 日栄ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.664207, 139.733574); GSI 東京都港区六本木四丁目8番 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519808199/', SITE],
    price_note: 'The only price in the sources read is a ¥5,000 all-you-can-drink (December 2025); courses include drinks (official site).', last_checked: TODAY, items: [
      it('', '', 'Course with premium all-you-can-drink (food and drinks), ends with fresh-baked bread', '', 'Course', 'ask', 'ask', 'Official site; reviews.', 'course'),
      it('', '', 'All-you-can-drink (incl. Juyondai)', '¥5,000', 'Drinks', '', '', 'December 2025 review.', 'nomihodai'),
    ] }, {
    cuisine: 'コースにお酒も含む総作料理 (公式サイト)・コースによって十四代、森伊蔵、Maou、Murao、山崎、Hakushu、イチローズモルトなどが飲み放題。飲み放題5,000円 (2025年12月)。ビールやハイボールは頼むたびにグラスが大きくなる (公式サイト、口コミ)・名物: 削ったチーズで目の前で和えるシーザーサラダ、どのコースも最後に蜂蜜やバターで食べる焼きたてのパン (公式サイト、2025〜2026年の口コミ)・2025〜2026年の料理: カルパッチョ、焼き魚とかま焼き、トマトソースの骨付きハンバーグ、丸鶏のロースト、作りたての温かい豆腐、麻婆丼。2026年7月は Oita の食材でSeki-aji・Seki-saba、Bungo beef の「Manga meat」ハンバーグ、ゴーヤチャンプルー・冷凍や作り置きをしない。お祝いには文字メッセージ料理、塩釜、お肉のケーキ (公式サイト)',
    neighborhood: '六本木4-8-3 日栄ビル2F〜3F、六本木通り沿い。六本木駅6番出口 (大江戸線) から徒歩5分',
    gf_detail: '要確認。グルテンフリーの説明はなく、どのコースも最後は焼きたてのパン。鶏天、チヂミ、麻婆丼が出たことも (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、店は食べたいものを言ってほしいとしているが、コースは魚、肉、チーズが中心。',
    notes: '[居酒屋・六本木、名酒の飲み放題と焼きたてパンのコース] 六本木通り沿いの2階、ロールスクリーンで仕切った半個室の100席の店で、1999年から営業。コースにはお酒が含まれ、それが本格的で、十四代、森伊蔵、Maou、Murao、山崎やイチローズモルトも。ビールやハイボールはおかわりのたびにグラスが大きくなる。料理は作りたての和洋の総作料理で、目の前で削ったチーズと和えるシーザーサラダ、どのコースも最後は蜂蜜を添えた焼きたてのパン。2026年7月の接待では Oita の魚と Bungo beef が出た。お酒がお得という声が多い一方、2026年6月の客は料理が思ったより簡素で仕切りが薄いと感じ、店主の個性が強いという声も。団体向き。日祝休み (店のサイトでは土曜も)。',
  });
}

// ================================================================ yelo
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13166459/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://yelo.jp/';
  const W = day(['11:00', '02:00']); const F = day(['11:00', '05:00']); const Sa = day(['11:30', '05:00']); const Su = day(['11:30', '02:00']);
  put({
    id: 'tokyo_yelo_roppongi', name: 'yelo', category: 'OMNI',
    lat: 35.662299, lng: 139.733341, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice with syrups and milk sauces may avoid wheat, but nothing is called gluten-free and toppings such as tiramisu (with cocoa and mascarpone) and the hot dogs are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the kakigori are built on fresh milk sauces, with mascarpone and cream toppings (official site; 2026 reviews).',
    hours_raw: 'Mon–Thu 11:00–02:00; Fri 11:00–05:00; Sat 11:30–05:00; Sun 11:30–02:00; to 05:00 on weekdays in summer; hours change by season — check the shop\'s X account (Tabelog; official site). No reservations; a paid TableCheck FastPass for priority entry in summer (official site); long summer queues (2020 review). 16 seats: 6 at the counter and five tables for two. Non-smoking. Cards, IC/e-money and QR. Children welcome. English menu. Self-service water and rooibos tea. Opened 1 April 2014 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: Sa, 6: Su }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 5-2-11, パティオ六本木 1F — 3 min from Roppongi Stn (Hibiya line)',
    cuisine: 'Kakigori all year, late into the night: finely shaved pure ice with house syrups and fresh milk sauces (official site) · tiramisu kakigori ¥1,300 with mascarpone espuma +¥200, pistachio ¥1,400 (September 2026); mango, strawberry, corn, mango yogurt; "night kakigori" with alcohol such as rum raisin (2026 reviews; official site) · hot dogs and hot sandwiches from the sister counter Amber, with sausages from a traditional German-style workshop and semi-hard bread (official site)',
    website: SITE, gmaps: gm('yelo 六本木5-2-11'), menu_url: SITE,
    notes: "[Kakigori · Roppongi, shaved ice until the small hours] A small kakigori bar three minutes from Roppongi Station that serves shaved ice all year and late into the night — to 2 am most days and 5 am at weekends. The ice is pure, temperature-controlled and shaved fine, under house syrups and fresh milk sauces; the tiramisu kakigori with extra mascarpone foam is the favourite (about ¥1,500 in 2026), with pistachio, mango and seasonal flavours, plus \"night kakigori\" spiked with alcohol such as rum raisin. The same shop runs Amber for hot dogs and hot sandwiches. Reviews in 2026 range from \"Japan's best\" to \"average\", and one late-night diner found the second bowl crunchy; summer brings queues (a paid FastPass is offered). Self-service water and rooibos.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 April 2014 (Tabelog). The official site presents yelo (kakigori) with Amber (hot dogs and hot sandwiches), whose sausages come from a workshop keeping to traditional German methods and whose bread was developed with a well-known baker.',
      philosophy: '"Light and healthy, yet as satisfying as any sweet" — pure ice kept at the right temperature for a fine, melting texture, with homemade syrups and fresh milk sauce, to enjoy all year (official site).', specialty: 'Tiramisu kakigori; night kakigori.',
      anecdotes: [
        { text: '"I\'ve visited over 50 kakigori shops across the country, and this one is truly the best!" — August 2026.', source: R + 'B538482287/' },
        { text: '"I visited around 1:30 AM and was surprised to find the place completely empty!… the second order of strawberry was quite crunchy." — September 2026.', source: R + 'B536187130/' },
        { text: '"I definitely recommend adding the espuma! For just JPY 200, it’s worth adding to everything." — September 2026, tiramisu ¥1,300 and pistachio ¥1,400.', source: R + 'B538376146/' },
      ],
      japanese_sources_summary: '公式サイト (yelo.jp): かき氷 yelo とホットドッグ・ホットサンドの Amber、良質な純氷の温度管理で細かく心地よい口どけ、自家製シロップとフレッシュなミルクソース、一年中楽しめる、NIGHT KAKIGORI、本場ドイツの伝統製法の老舗工房のソーセージと名店のパン職人と共同開発のセミハードブレッドのホットドッグ、営業時間は時期により変わり公式Xで案内、港区六本木5-2-11 パティオ六本木1F、夏季限定の有料の優先案内 (Table Check FastPass)。食べログ: 月〜木11:00〜翌2:00、金11:00〜翌5:00、土11:30〜翌5:00、日11:30〜翌2:00、夏は平日も朝5時まで、予約不可、16席、禁煙、カード・電子マネー・QR可、英語メニュー、水とルイボスティーはセルフ、2014年4月1日オープン。口コミ(2026年8月〜10月): ティラミス1,300円とエスプーマ200円、ピスタチオ1,400円、マンゴー、苺、ラムレーズン、深夜でも空いている、日本一という声と普通という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B373271181/', R + 'B536187130/', R + 'B536308930/', R + 'B536588816/', R + 'B537197144/', R + 'B537613291/', R + 'B538002176/', R + 'B538376146/', R + 'B538429445/', R + 'B538482287/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); order with the staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木5-2-11 パティオ六本木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662299, 139.733341); GSI 東京都港区六本木五丁目2番 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538376146/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tiramisu kakigori', '¥1,300', 'Kakigori', 'ask', 'no', 'September 2026 review; mascarpone espuma +¥200.', 'tiramisu'),
      it('', '', 'Pistachio kakigori', '¥1,400', 'Kakigori', 'ask', 'no', 'September 2026 review.', 'pistachio'),
    ] }, {
    cuisine: '一年中、夜遅くまで食べられるかき氷。良質な純氷を細かく削り、自家製シロップとフレッシュなミルクソースで (公式サイト)・ティラミス1,300円、マスカルポーネのエスプーマ+200円、ピスタチオ1,400円 (2026年9月)。マンゴー、苺、とうもろこし、マンゴーヨーグルト。ラムレーズンなどお酒入りの「NIGHT KAKIGORI」も (2026年の口コミ、公式サイト)・同じ店の Amber のホットドッグとホットサンド。ドイツの伝統製法を守る工房のソーセージとセミハードのパン (公式サイト)',
    neighborhood: '六本木5-2-11 パティオ六本木1F。六本木駅 (日比谷線) から徒歩3分',
    gf_detail: '要確認。シロップとミルクソースのかき氷なら小麦を使わないかもしれないが、グルテンフリーの説明はなく、ティラミス (ココア、マスカルポーネ) などのトッピングやホットドッグの説明もない。',
    vegan_detail: 'ヴィーガン不可。かき氷はフレッシュなミルクソースが基本で、マスカルポーネや生クリームのトッピングも (公式サイト、2026年の口コミ)。',
    notes: '[かき氷・六本木、夜更けまで食べられるかき氷] 六本木駅から3分の小さなかき氷のバーで、一年中、夜遅くまで営業 (たいてい深夜2時、週末は朝5時)。純氷を温度管理して細かく削り、自家製シロップとフレッシュなミルクソースをかける。人気はマスカルポーネのエスプーマを追加したティラミス (2026年は約1,500円)、ほかにピスタチオ、マンゴー、季節の味、ラムレーズンなどお酒入りの「NIGHT KAKIGORI」も。同じ店でホットドッグとホットサンドの Amber も営む。2026年の口コミは「日本一」から「普通」まで分かれ、深夜に来た客は2杯目の苺がシャリシャリしていたと書いた。夏は行列 (有料の優先案内もある)。水とルイボスティーはセルフ。',
  });
}

// ================================================================ 5坪 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13170532/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_go_tsubo_roppongi', name: '5坪 六本木店 (Go Tsubo Roppongi)', category: 'OMNI',
    lat: 35.663103, lng: 139.734486, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw, steamed and grilled oysters are served simply, but nothing is called gluten-free and side dishes include uni butter toast and a salted-cod-roe baked potato (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster bar; side dishes include bacon, mussels, cod roe and sea urchin.',
    hours_raw: 'From 18:00; closes when the day\'s oysters run out (July 2026); hours and closing days may change (Tabelog). The closing time here is a placeholder. Cash only (Tabelog; September 2026). A one-person operation — book by phone right after opening or later in the evening, say how many oysters you want, and order all at once (September 2026). No glasses for water; buy a bottle from the vending machine downstairs (September 2026). 14 counter seats; smoking allowed (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-8-10, じゃるだんビル 4F, on a back street — about 5 min from Roppongi Stn',
    cuisine: 'Oysters by the piece — raw, steamed or grilled — at about ¥250 each (July and September 2026; ¥230 in March 2026); Akkeshi oysters (July 2026) · side dishes from a crowded blackboard: uni butter toast, baked potato with salted cod roe, avocado with cod roe, smoked daikon with cream cheese, nagaimo kimchi, steamed mussels, thick-cut bacon, grilled broad beans, edamame, salad (2026 reviews) · wine by the bottle; no sours (July 2026)',
    website: null, gmaps: gm('5坪 六本木3-8-10'), menu_url: TB + 'dtlmenu/',
    notes: "[Oysters · Roppongi, a one-man oyster bar at ¥250 a piece] On the fourth floor of a back-street building, a 14-seat counter with doodles on the walls and a blackboard crammed with dishes, where the owner alone shucks, steams and grills oysters at about ¥250 apiece — Akkeshi oysters in July 2026, and one July 2026 diner ate about 20. Order them raw, steamed (the favourite of several reviewers) or grilled, add uni butter toast or a cod-roe baked potato, and drink wine by the bottle; around ¥6,000 a head with plenty of drinking. It is cash only, there are no water glasses (buy a bottle downstairs), smoking is allowed, and when the oysters run out the night is over — so book by phone, say how many oysters you want, and order everything early. One diner noted the view over a cemetery.",
    chef_bio: { chef_name: null, roles: ['Owner, working alone (unnamed)'], origin: null,
      background: 'A September 2026 reviewer who first came seven years earlier writes that "the owner manages everything by himself"; another September 2026 diner calls it "a one-person operation". No one is named in the sources read.',
      philosophy: null, specialty: 'Oysters raw, steamed or grilled at about ¥250 each; uni butter toast.',
      anecdotes: [
        { text: '"The oysters are only JPY 250 each and incredibly delicious, so it’s easy to overindulge!" — September 2026: 12 raw, 4 grilled and 14 steamed for the table.', source: R + 'B535317861/' },
        { text: '"When I asked for a chaser of water, I was told, \'We don’t have glasses, so please buy a bottle from the vending machine downstairs.\'" — September 2026.', source: R + 'B535374215/' },
        { text: '"Eating oysters while looking at the cemetery was an interesting experience." — July 2026.', source: R + 'B533051465/' },
      ],
      japanese_sources_summary: '食べログ: 5坪 六本木店、港区六本木3-8-10 じゃるだんビル4F、18:00から、営業時間と定休日は変わることがある、カード・電子マネー・QR不可、14席 (カウンター)、喫煙可。口コミ(2026年3月〜9月): 生、蒸し、焼きの牡蠣が1個約250円 (3月は230円)、Akkeshi の牡蠣、雲丹バタートースト、明太子のじゃがバター、アボカドと明太子、燻製大根とクリームチーズ、長芋キムチ、ムール貝の酒蒸し、厚切りベーコン、店主が一人で切り盛り、牡蠣がなくなったら閉店、予約時に牡蠣の数を、現金のみ、水のグラスはなく下の自販機で、墓地の見える窓。',
      confidence: 'medium', sources: [TB, R + 'B524955473/', R + 'B531464841/', R + 'B531625600/', R + 'B532923573/', R + 'B533037005/', R + 'B533051465/', R + 'B534997939/', R + 'B535317861/', R + 'B535374215/', R + 'B535526992/'] },
    cultural_comfort: { level: 'japanese', note: 'Blackboard menu in Japanese; one man runs the shop, so order early and all at once.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木3-8-10 じゃるだんビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663103, 139.734486); GSI 東京都港区六本木三丁目8番 (lot) 49m; Miyake Akira (tokyo_miyake_akira_roppongi, 3-8-12) is 18 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535317861/', R + 'B533037005/'],
    price_note: 'Oyster price from July and September 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Oyster, raw, steamed or grilled (each)', '¥250', 'Oysters', 'ask', 'no', 'July and September 2026 reviews; ¥230 in March 2026.', 'oyster'),
      it('', '', 'Uni butter toast', '', 'Sides', 'no', 'no', 'July and September 2026 reviews.', 'uni_toast'),
    ] }, {
    cuisine: '1個約250円の牡蠣を生、蒸し、焼きで (2026年7月、9月。3月は230円)。Akkeshi の牡蠣 (2026年7月)・びっしり書かれた黒板の一品: 雲丹バタートースト、明太子のじゃがバター、アボカドと明太子、燻製大根とクリームチーズ、長芋キムチ、ムール貝の酒蒸し、厚切りベーコン、空豆の焼き、枝豆、サラダ (2026年の口コミ)・ワインはボトルで。サワーはない (2026年7月)',
    neighborhood: '六本木3-8-10 じゃるだんビル4F、裏通り。六本木駅から徒歩約5分',
    gf_detail: '要確認。生、蒸し、焼きの牡蠣はシンプルだが、グルテンフリーの説明はなく、雲丹バタートーストや明太子のじゃがバターなどの一品もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牡蠣の店で、一品にはベーコン、ムール貝、明太子、雲丹も。',
    notes: '[牡蠣・六本木、店主一人の1個250円の牡蠣の店] 裏通りのビルの4階、壁に落書き、料理がびっしり書かれた黒板のある14席のカウンター。店主が一人で牡蠣をむき、蒸し、焼き、1個約250円。2026年7月は Akkeshi の牡蠣で、約20個食べた客も。生、蒸し (何人もの客のお気に入り)、焼きから選び、雲丹バタートーストや明太子のじゃがバターを添え、ワインはボトルで。たっぷり飲んで1人約6,000円。現金のみ、水のグラスはなく (下の自販機で買う)、喫煙可、牡蠣がなくなったら閉店。電話で予約し、牡蠣の数を伝え、注文は早めにまとめて。墓地の見える眺めを書いた客も。',
  });
}

save();
