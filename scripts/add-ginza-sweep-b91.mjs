// Ginza Station half-mile sweep (805 m), batch 91 — all-genre phase (all OMNI).
//   + 銀座寿司幸本店 (Edomae sushi since 1885; fourth-generation owner 杉山衛; three shops → OMNI)
//   + 銀座 道しるべ (Ginza Inz izakaya with stone-milled soba and chicken tsukesoba)
//   + 魚の中俣 銀座 (Nakamata nodoguro-group seafood izakaya, Higashi-Ginza)
//   + 原始炭焼 いろり家 東銀座店 (robatayaki izakaya; ikura "funajo-meshi" with a drum)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座寿司幸本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002573/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ginza-sushikou-honten.com/';
  const d = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ginza_sushiko_honten', name: '銀座寿司幸本店 (Ginza Sushi Ko Honten)', category: 'OMNI',
    lat: 35.671336, lng: 139.761146,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi eaten with soy sauce, including simmered toppings such as shiitake; whether wheat-free soy sauce is available is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Edomae fish sushi; the clear soup is not described.',
    hours_raw: 'Daily 12:00–14:00 (L.O. 13:00) and 17:00–22:00 (L.O. 20:00); no regular holiday; bookings through the official site (official site, Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme — 279 m from Ginza Stn',
    cuisine: 'Edomae sushi since 1885 · fourth-generation owner pioneered sushi-and-wine pairing · tuna, hoshi-garei, shinko, kohada · shima-aji and shiitake nigiri · 24-seat counter, three tatami rooms', cuisine_type: 'sushi',
    website: SITE, gmaps: gm('銀座寿司幸本店'), menu_url: null,
    notes: "[Sushi · Ginza's Edomae house since 1885] Founded in 1885 and now run by the fourth-generation owner 杉山衛 (Sugiyama), president since 1992, who is known for pioneering sushi with wine. Sugiyama's line is that the Ginza sushi counter is \"a place for courtship\". There are 40 seats: a white-wood counter of 24 (some upstairs) and three tatami rooms. The site highlights tuna, hoshi-garei (spotted flounder), shinko, kohada and sweet shrimp; reviewers single out an unusual shima-aji and shiitake nigiri and gentle classic rice. The owner chats warmly at the counter, easing the formality, and the wine pairing wins converts. It's also a stop for fans of the writer Ikenami Shōtarō. Dinner runs about ¥20,000–40,000. The group also has Marunouchi Building and Kōjun Building shops.",
    chef_bio: { chef_name: '杉山衛 (Sugiyama; fourth-generation owner)', roles: ['owner'], origin: 'Founded 1885 (Meiji 18) (official site)', background: 'Fourth-generation president since 1992 (official site). Three shops: Ginza honten, Marunouchi Building, Kōjun Building (official site).', philosophy: '"Tradition is not something to be preserved, but something to be created" (Tabelog listing).', specialty: 'Edomae sushi with wine pairing.',
      anecdotes: [
        { text: '"The nigiri with striped jack and shiitake mushrooms was particularly unique and hard to find elsewhere… I felt it was the best white wine I’ve ever had that pairs well with sushi." — July 2026, second-floor counter.', source: R + 'B532690547/' },
        { text: '"Founded in 1885, this is one of Tokyo\'s most renowned sushi restaurants, celebrating its 140th anniversary." — August 2026, lunch nigiri.', source: R + 'B533325602/' },
      ],
      japanese_sources_summary: '公式サイト(ginza-sushikou-honten.com): 銀座寿司幸本店、明治18年(1885年)創業の江戸前寿司、四代目主人・杉山衛(1992年に四代目代表取締役)、寿司とワインのマリアージュの先駆け、マグロ・星ガレイ・シンコなど日本近海の素材、白木のカウンターと個室で全40席、銀座本店・丸ビル店・交詢ビル店の3店舗、月〜日12:00〜14:00(L.O.13:00)・17:00〜22:00(L.O.20:00)、定休日なし、テイクアウト可、予約は公式サイトから。食べログ: 銀座6-3-8、カウンター24席と座敷個室3、紹介文「伝統は守るものではなく創るもの」。2026年の口コミ: 池波正太郎ゆかりの店、2階のカウンター、四代目は気さくに話しながら握る、シマアジと椎茸の握り、寿司に合う白ワイン、創業140年、若い職人も多い、昼の握り。',
      confidence: 'high', sources: [SITE, TB, R + 'B532690547/', R + 'B533325602/', R + 'B533933898/', R + 'B531678510/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via the official site.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing current; reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番8号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B532690547/'],
    price_note: 'No menu prices captured; spend ¥20,000–40,000 (Tabelog).', last_checked: TODAY, items: [
      it('おまかせ握り', '', 'Omakase nigiri', '', 'Sushi', 'ask', 'no', '', 'omakase'),
      it('シマアジと椎茸の握り', '', 'Shima-aji and shiitake nigiri', '', 'Sushi', 'ask', 'no', 'July 2026.', 'shimaaji_shiitake'),
      it('寿司とワインのペアリング', '', 'Sushi-and-wine pairing', '', 'Drinks', 'ask', 'no', '', 'wine_pairing'),
    ] }, {
    cuisine: '1885年創業の江戸前寿司・寿司とワインのペアリングの先駆けの四代目・マグロ、星ガレイ、シンコ、コハダ・シマアジと椎茸の握り・カウンター24席と座敷3室',
    neighborhood: '銀座六丁目。銀座駅から279m',
    gf_detail: '要確認。醤油で食べる江戸前寿司で、椎茸など煮たネタもあります。小麦を使わない醤油があるかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚の江戸前寿司。吸い物の内容は書かれていません。',
    notes: '[寿司・1885年からの銀座の江戸前] 1885年創業、今は1992年から代表を務める四代目主人・杉山衛のもとで、寿司とワインの組み合わせの先駆けとして知られます。銀座のカウンターは「口説きの場」というのが四代目の言葉。白木のカウンター24席(2階にも)と座敷の個室3つで全40席。公式サイトが挙げるのはマグロ、星ガレイ、シンコ、コハダ、甘海老で、口コミでは珍しいシマアジと椎茸の握りとやさしい昔ながらのシャリ。四代目がカウンターで気さくに話し、堅さをほぐしてくれ、ワインのペアリングに感心する客も。池波正太郎ゆかりの店として訪ねる人も。夜は2万〜4万円ほど。丸ビル店と交詢ビル店もあります。',
  });
}

// ================================================================ 銀座 道しるべ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13281179/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'tokyo_ginza_michishirube', name: '銀座 道しるべ (Ginza Michishirube)', category: 'OMNI',
    lat: 35.674632, lng: 139.764706,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: curry soba, shrimp tempura, fried kisu, and soba whose buckwheat ratio is not stated; the rich chicken dipping sauce is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-broth dipping soba, Ōyama chicken, tuna sashimi.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00 (L.O. 14:30) and 17:30–22:30 (food L.O. 21:30); closed Sundays (Tabelog). Evening otōshi charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Inz 2, 2F (Ginza-nishi 2-chōme) — 3 min from Yūrakuchō Stn, 2 min from Ginza Stn',
    cuisine: 'Soba izakaya · lunch rich chicken tsukesoba and curry soba · evening crispy Ōyama chicken, sashimi, stone-milled seiro soba (¥680) · sake, Ichiro’s Malt highball', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('銀座 道しるべ 銀座インズ2'), menu_url: null,
    notes: "[Soba · chicken tsukesoba by day, soba izakaya by night] A 40-seat second-floor shop in Ginza Inz 2 that began as a tsukesoba specialist and now doubles as an izakaya. At lunch, the draw is a labour-intensive rich chicken dipping soba (ramen-like but lighter), plus curry soba with shrimp tempura. At night there's crispy Ōyama chicken, good fatty tuna sashimi (about ¥1,500) and fried kisu with ume and shiso, finished with fragrant stone-milled seiro soba (¥680). Drinks include picked sake and an Ichiro's Malt highball. Friendly, quick staff; an otōshi charge applies in the evening; a few find it slightly pricey.",
    chef_bio: { chef_name: null, roles: [], origin: 'Formerly a tsukesoba shop (October 2026 review)', background: 'No source names the owner.', philosophy: null, specialty: 'Chicken tsukesoba; stone-milled soba.',
      anecdotes: [
        { text: '"It seems that it used to be a tsukesoba (dipping soba) shop, but it has now transformed into an izakaya that also serves chicken dishes and fresh seafood… The seiro soba was priced at JPY 680." — October 2026.', source: R + 'B537577250/' },
        { text: '"The rich dipping sauce was delicious, and it made me crave ramen! But since it was soba, it felt healthier." — September 2026.', source: R + 'B536154627/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 道しるべ、中央区銀座西2-2 銀座インズ2 2F、有楽町駅徒歩3分・銀座駅徒歩2分、40席、月〜土祝11:00〜15:00・17:30〜22:30、日休、お通しあり。店の紹介: 鶏と蕎麦と酒が自慢、昼は手間をかけた濃厚鶏つけそば、夜は大山鶏のパリパリ焼きなどの一品料理、厳選の日本酒、秩父のイチローズモルトのハイボール、締めの石臼挽きそば。2026年の口コミ: 濃厚なつけ汁、そば茶、親切で手際のよいスタッフ、カレーそばと海老天、もとはつけそば店で今は鶏料理や鮮魚も出す居酒屋、せいろ680円、マグロの刺身約1,500円で脂がのっている、キスの梅しそ揚げ、冷たく締まったせいろ、やや高めとの声。',
      confidence: 'medium', sources: [TB, R + 'B537577250/', R + 'B536154627/', R + 'B537270792/', R + 'B537897490/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Otōshi charge in the evening.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座西2-2 銀座インズ2 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI cannot resolve 銀座西 (Ginza Inz), so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537577250/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('濃厚鶏つけそば', '', 'Rich chicken dipping soba (lunch)', '', 'Lunch', 'no', 'no', '', 'tori_tsukesoba'),
      it('せいろ', 'seiro', 'Stone-milled seiro soba', '¥680', 'Soba', 'no', 'ask', 'October 2026.', 'seiro'),
      it('マグロの刺身', '', 'Tuna sashimi', '¥1,500', 'Evening', 'ask', 'no', 'About, October 2026.', 'maguro'),
      it('大山鶏のパリパリ焼き', '', 'Crispy-grilled Ōyama chicken', '', 'Evening', 'ask', 'no', '', 'oyama_chicken'),
    ] }, {
    cuisine: 'そば居酒屋・昼は濃厚鶏つけそばとカレーそば・夜は大山鶏のパリパリ焼き、刺身、石臼挽きのせいろ(680円)・日本酒、イチローズモルトのハイボール',
    neighborhood: '銀座インズ2の2F(銀座西二丁目)。有楽町駅から徒歩3分、銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。カレーそば、海老天、キスの揚げ物、割合の書かれていないそば。濃厚鶏のつけ汁の中身も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鶏だしのつけそば、大山鶏、マグロの刺身。',
    notes: '[そば・昼は鶏つけそば、夜はそば居酒屋] 銀座インズ2の2階にある40席の店で、つけそば専門から居酒屋も兼ねる形に。昼の目当ては手間をかけた濃厚な鶏のつけそば(ラーメンのようで軽め)、海老天をのせたカレーそばも。夜は大山鶏のパリパリ焼き、脂ののったマグロの刺身(約1,500円)、キスの梅しそ揚げなどに、締めは香りのよい石臼挽きのせいろ(680円)。酒は厳選の日本酒やイチローズモルトのハイボール。スタッフは親切で手際がよく、夜はお通し代あり、やや高めという声も。',
  });
}

// ================================================================ 魚の中俣 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13235780/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://nakamata-nodoguro.com/sakananonakamata/';
  const wd = day(['17:00', '23:00']); const sat = day(['17:00', '22:30']);
  put({
    id: 'tokyo_sakana_no_nakamata_ginza', name: '魚の中俣 銀座 (Sakana no Nakamata Ginza)', category: 'OMNI',
    lat: 35.670319, lng: 139.769604,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, salt-grilled or simmered nodoguro and clay-pot rice sit alongside tempura, satsuma-age and a negima hot pot finished with Inaniwa udon; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya (tuna, nodoguro, sea urchin, shrimp).',
    hours_raw: 'Mon–Fri 17:00–23:00 (L.O. 22:15); Sat 17:00–22:30 (L.O. 21:45); closed Sundays and holidays (Tabelog). 5% service charge; private rooms +10%; card only; seating about 3 h when busy; no strong perfume.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: sat }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, kobikissGINZa 2F, down a small alley — 2 min from Higashi-Ginza Stn exit 3',
    cuisine: 'Seafood izakaya from the Nakamata nodoguro group · five-kind sashimi with natural bluefin and botan shrimp · large nodoguro grilled or simmered · clay-pot rice · Nakamata shochu · courses ¥11,000–12,000', cuisine_type: 'izakaya',
    website: SITE, gmaps: gm('魚の中俣 銀座 kobikissGINZa'), menu_url: null,
    notes: "[Seafood izakaya · nodoguro and bluefin by Higashi-Ginza] A 41-seat seafood izakaya (11 at the counter) up a small alley in kobikissGINZa, from the Nakamata group known for nodoguro (blackthroat seaperch). Daily fish are shown on a big platter to choose from, and staff prepare natural bluefin, botan shrimp, sea urchin and big nodoguro in front of you; one table had its nodoguro served half simmered, half grilled. Courses at about ¥11,000–12,000 might run sashimi, homemade satsuma-age, salt-grilled nodoguro, a seafood or tuna negima hot pot with Inaniwa udon, and clay-pot rice, with Nakamata shochu sent direct from the distillery. A 16-visit regular loves it; one diner found the fried shrimp heads greasy. Card only; 5% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 July 2019 (Tabelog); a September 2026 visitor took it for newly opened', background: 'Nakamata group (nakamata-nodoguro.com).', philosophy: null, specialty: 'Nodoguro; bluefin.',
      anecdotes: [
        { text: '"Uminokawa Course… Salt-Grilled Nodoguro… Seafood Shabu-Shabu with Warasa, Broad Bean and Anago Clay Pot Rice… (At night) JPY 11,200 per person" — July 2026, 16th visit.', source: R + 'B419071192/' },
        { text: '"They showcase the daily specials in a large dish… I also tried the rare Nodoguro simmered dish, which was great as they served half of it simmered and half grilled!" — September 2026.', source: R + 'B535702300/' },
      ],
      japanese_sources_summary: '食べログ: 魚の中俣 銀座、銀座3-14-17 kobikissGINZa 202、東銀座駅3番出口徒歩2分、41席(カウンター11・テーブル30)、月〜金17:00〜23:00、土17:00〜22:30、日祝休、奉仕料5%、個室料10%、クレジットカードのみ、混雑時は約3時間制、強い香水は控えて、2019年7月8日開店、公式サイト nakamata-nodoguro.com。店の紹介: 天然本鮪や朝獲れのぼたん海老など鮮魚5種盛り、蔵元直送の「中俣焼酎」、大きなのどぐろや雲丹を目の前で。2026年の口コミ: 16回目の常連、海の幸のコース(鮪の中落ち、焼き野菜、刺身5種、自家製さつま揚げ、のどぐろ塩焼き、ワラサのしゃぶしゃぶ、そら豆と穴子の土鍋ご飯、わらび餅)で11,200円、12,000円のコース(前菜5種、刺身、天ぷら、のどぐろ、鮪のねぎま鍋、稲庭うどん)、大皿で本日の魚を選べる、のどぐろの半分煮付け半分焼き、雲丹とのどぐろが目玉、海老の頭の揚げ物は油っぽかったとの声。',
      confidence: 'medium', sources: [TB, R + 'B419071192/', R + 'B535702300/', R + 'B534346242/', R + 'B536994263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Card only; pick fish from the daily platter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-14-17 kobikissGINZa 202',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with October–November 2026 closure notices; reviews July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目14番17号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B419071192/', R + 'B534346242/'],
    price_note: 'Course prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('海の幸のコース', '', 'Seafood course (sashimi, satsuma-age, salt-grilled nodoguro, hot pot, clay-pot rice)', '¥11,200', 'Courses', 'ask', 'no', 'With drinks, July 2026.', 'course_11200'),
      it('コース', '', 'Course (appetizers, sashimi, tempura, nodoguro, tuna negima hot pot, Inaniwa udon)', '¥12,000', 'Courses', 'no', 'no', 'October 2026.', 'course_12000'),
      it('鮮魚5種盛り', '', 'Five-kind sashimi', '', 'Sashimi', 'ask', 'no', '', 'sashimi5'),
      it('のどぐろ塩焼き', '', 'Salt-grilled nodoguro', '', 'Grill', 'ask', 'no', '', 'nodoguro'),
    ] }, {
    cuisine: 'のどぐろの中俣グループの魚の居酒屋・天然本鮪とぼたん海老の刺身5種・大きなのどぐろを焼きか煮付けで・土鍋ご飯・中俣焼酎・コース11,000〜12,000円',
    neighborhood: '銀座三丁目、小さな路地を入ったkobikissGINZa 2F。東銀座駅3番出口から徒歩2分',
    gf_detail: '要確認。刺身、のどぐろの塩焼きや煮付け、土鍋ご飯のほか、天ぷら、さつま揚げ、稲庭うどんで締める鮪のねぎま鍋も。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋(鮪、のどぐろ、雲丹、海老)。',
    notes: '[魚の居酒屋・東銀座ののどぐろと本鮪] のどぐろで知られる中俣グループの、kobikissGINZaの路地を上がった41席(カウンター11)の魚の居酒屋。本日の魚を大皿で見せて選ばせてくれ、天然本鮪、ぼたん海老、雲丹、大きなのどぐろを目の前でさばきます。のどぐろを半分煮付け、半分焼きにしてもらった例も。コースは11,000〜12,000円ほどで、刺身、自家製さつま揚げ、のどぐろの塩焼き、稲庭うどんで締める魚介や鮪ねぎまの鍋、土鍋ご飯など、蔵元直送の中俣焼酎とともに。16回通う常連もいる一方、海老の頭の揚げ物が油っぽかったという声も。カードのみ、奉仕料5%。',
  });
}

// ================================================================ 原始炭焼 いろり家 東銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13032924/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['18:00', '03:00']); const we = day(['17:00', '23:00']);
  put({
    id: 'tokyo_iroriya_higashiginza', name: '原始炭焼 いろり家 東銀座店 (Genshi Sumiyaki Iroriya)', category: 'OMNI',
    lat: 35.670509, lng: 139.768357,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal robatayaki (such as thick shiitake), sashimi, simmered eggplant and an ikura rice bowl; no source mentions seasonings or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ikura rice bowl, sashimi; grilled shiitake and simmered eggplant are not described.',
    hours_raw: 'Mon–Fri 18:00–03:00 (L.O. 02:00); Sat, Sun and holidays 17:00–23:00 (L.O. 22:00); irregular closures; closed 31 Dec–5 Jan (Tabelog). Smoking allowed inside.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, Ginza Sanbankan 2 B1F (steep stairs) — 1 min from Higashi-Ginza Stn exit A7',
    cuisine: 'Charcoal robatayaki izakaya · "funajo-meshi" ikura rice bowl heaped at the table to a drumbeat · thick grilled shiitake · sashimi · open to 3 am weekdays · smoking allowed', cuisine_type: 'izakaya',
    website: 'http://www.iroriya.tokyo/', gmaps: gm('原始炭焼 いろり家 東銀座店'), menu_url: null,
    notes: "[Izakaya · charcoal robata and the ikura drum show] A lively 43-seat basement robatayaki izakaya near Higashi-Ginza (down steep stairs), with a counter, horigotatsu tables and private rooms under soft lighting. The signature is funajo-meshi, a rice bowl heaped high with salmon roe at the table while staff beat a drum. Charcoal-grilled thick shiitake, sashimi and simmered eggplant also win praise. Staff are friendly and loud with the kanpai, and large groups make it noisy. Open to 3 am on weekdays. Smoking is allowed inside, so it's not one for smoke-sensitive diners.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza branch (Tabelog listing name)', background: 'Multi-shop (iroriya.tokyo).', philosophy: null, specialty: 'Funajo-meshi (ikura bowl).',
      anecdotes: [
        { text: '"When the staff served the ikura rice bowl, they brought a drum to create a lively atmosphere, which was quite entertaining!" — September 2026.', source: R + 'B537013823/' },
        { text: '"The grilled, thick shiitake mushrooms were infused with umami, making me crave some Japanese sake!" — September 2026.', source: R + 'B536464655/' },
      ],
      japanese_sources_summary: '食べログ: 原始炭焼 いろり家 東銀座店、銀座3-11-11 銀座参番館2 B1F、東銀座駅A7出口徒歩1分、43席(6・8名個室、掘りごたつ、カウンター)、月〜金18:00〜翌3:00、土日祝17:00〜23:00、不定休、年末年始休、喫煙可、公式サイト iroriya.tokyo。店の紹介: 間接照明、新鮮な厳選食材、看板は温かいご飯にいくらをたっぷりのせる「船上めし」、平日は朝3時まで。2026年の口コミ: 満席、乾杯のときのスタッフの元気な声、肉厚の椎茸焼き、船上めしのパフォーマンス、いくらを目の前で山盛りに、太鼓で盛り上げる、刺身と茄子の煮びたし、団体客で騒がしいこともある、階段が急。',
      confidence: 'medium', sources: [TB, R + 'B537013823/', R + 'B536464655/', R + 'B536586330/', R + 'B536960361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed inside; steep stairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-11 銀座参番館2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番11号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537013823/'],
    price_note: 'No prices captured; spend ¥6,000–10,000 in reviews.', last_checked: TODAY, items: [
      it('船上めし', 'funajō meshi', 'Funajo-meshi: rice heaped with salmon roe at the table', '', 'Signature', 'ask', 'no', '', 'funajo_meshi'),
      it('椎茸焼き', '', 'Charcoal-grilled thick shiitake', '', 'Robata', 'ask', 'ask', 'September 2026.', 'shiitake'),
      it('茄子の煮びたし', '', 'Simmered eggplant', '', 'Small plates', 'ask', 'ask', 'September 2026.', 'nasu'),
    ] }, {
    cuisine: '炭火の炉端焼き居酒屋・太鼓に合わせて席でいくらを山盛りにする「船上めし」・肉厚の椎茸焼き・刺身・平日は朝3時まで・喫煙可',
    neighborhood: '銀座三丁目、銀座参番館2 B1F(階段が急)。東銀座駅A7出口から徒歩1分',
    gf_detail: '要確認。炭火の炉端焼き(肉厚の椎茸など)、刺身、茄子の煮びたし、いくら丼。味付けやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。いくら丼、刺身。椎茸焼きや茄子の煮びたしの味付けは書かれていません。',
    notes: '[居酒屋・炭火の炉端といくらの太鼓] 東銀座近く、急な階段を下りた地下の43席のにぎやかな炉端焼き居酒屋で、やわらかな照明の中にカウンター、掘りごたつ、個室。看板の「船上めし」は、スタッフが太鼓を叩くなか席でご飯にいくらを山盛りにするもの。炭火で焼く肉厚の椎茸、刺身、茄子の煮びたしも好評。スタッフは明るく乾杯の声も大きく、団体が入ると騒がしくなります。平日は朝3時まで。店内喫煙可なので、煙が苦手な人には向きません。',
  });
}

save();
