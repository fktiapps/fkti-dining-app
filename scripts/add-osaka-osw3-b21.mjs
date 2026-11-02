// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 21.
//   + 魚と煮込みとわら焼きと ととと (Tototo's second shop: straw-grilled fish, stews and oden courses in Queens Court)
//   + たこ八 道頓堀総本店 (Tako Hachi: Dotonbori takoyaki and konamon house founded in 1979)
//   + 喜多郎寿し なんば店 (Kitaro Zushi: ¥280 sushi until 02:00 in an Ura Namba townhouse)
//   + musi-vege+cafe なんばCITY店 (steamed-vegetable set meals in Namba City)
//   - skipped (chains of 5+): 27000374 つるとんたん, 27071462 だるま 心斎橋店, 27124410 牛ノ福, 27112970 シェイクシャック,
//     27012282 博多華味鳥, 27001542 龍の巣; (brand in data): 27101834 ヤキニクエン ニング
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 120` (2026-11-02, after batch 20), in order:
//   27000374 (skip), 27071462 (skip), 27124410 (skip), 27112970 (skip), 27150182, 27101834 (skip), 27076174,
//   27012282 (skip), 27082490, 27001542 (skip), 27123150.
//   None of the four is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: Tototo — a sister concept of 魚と炭と鉄板と ととと (osaka_sakana_sumi_teppan_tototo) in the same
//   building (reviews: "the second location", "the same group"); different format (straw grill and stews vs charcoal and
//   teppan). Tako Hachi — its site lists only the Dotonbori main shop. Kitaro Zushi — Ura Namba and Ohatsu Tenjin under
//   the 喜多郎寿し name, plus sushi-robata and kakuuchi formats (careermap), and a Thailand opening (June 2026) — under
//   five same-concept shops; small group. musi-vege — Namba City, Umeda (Diamor), Sakai Takashimaya, LaLaport Sakai — four
//   found; small group.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27000374', 'Chain (5+): つるとんたん runs 13 shops in Japan and abroad (2017 press release, https://kyodonewsprwire.jp/prwfile/release/M103836/201711168063/_prw_PR1fl_9SS2opy6.pdf)');
skip('27071462', 'Chain (5+): 元祖串かつ だるま, about 15 branches centred on Osaka (rurubu, https://rurubu.jp/andmore/spot/80027970); same brand as 27005918, skipped in osw3-20');
skip('27124410', 'Chain (5+): ビフテキ 牛ノ福 (SINGA) lists nine shops on its brand page — Hanshin Umeda, Kintetsu Uehonmachi B1 and B2, Crysta Nagahori, Tempozan, Saidaiji, Kintetsu Kusatsu 1F and 5F, Uehonmachi YUFURA (https://singa-inc.com/brand/ushinofuku/)');
skip('27112970', 'Chain (5+): Shake Shack had 12 shops in Japan by 2020 (https://ranking.net/rankings/best-shakeshack/matsubara_y)');
skip('27101834', 'Same-concept branch of a brand already in data: YAKINIKUEN 忍鬨 is osaka_yakiniku_en_ning_higashishinsaibashi2');
skip('27012282', 'Chain (5+): 博多華味鳥 (Torizen Dining) runs 31 shops in Japan and abroad as of 3 October 2025 (https://prtimes.jp/main/html/rd/p/000000035.000035646.html)');
skip('27001542', 'Chain (5+): 焼肉ホルモン 龍の巣 has Shinjuku Sanchome, Shinjuku Kabukicho, Umeda Honkan, Umeda Hanare and this Shinsaibashi main shop (Gnavi, https://r.gnavi.co.jp/k824200/, https://r.gnavi.co.jp/gghs101/, https://r.gnavi.co.jp/fe6ngztw0000/)');

// ================================================================ 魚と煮込みとわら焼きと ととと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27150182/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '23:30']);
  put({
    id: 'osaka_sakana_nikomi_warayaki_tototo', name: '魚と煮込みとわら焼きと ととと (Sakana to Nikomi to Warayaki to Tototo)', category: 'OMNI',
    lat: 34.670044, lng: 135.50207, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and the straw-grilled bonito with salt are the plainest; the oden and stews are in soy-based dashi, and the courses include tempura and fu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; oden and stews in dashi, and the courses include duck, chicken and beef tendon.',
    hours_raw: 'Daily 16:30–23:30 (last food order 22:30); closing days vary (Tabelog). Reservations; omakase course ¥5,800 Tuesday–Friday only, premium omakase course ¥8,800, seafood hot-pot course with whole abalone ¥9,980, all-you-can-drink +¥2,800 (Tabelog). Dishes from the sister teppan restaurant in the building can be ordered (May 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 21 seats: a counter facing the straw grill and tables; non-smoking, with a smoking area inside (Tabelog; October 2026). English menu; takeaway (Tabelog). Opened 17 July 2025 (Tabelog); the listing announced an "8/8 new open".',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-3-2, クイーンズコートビル本館 101 — 3 min from Namba Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Straw-grilled and charcoal-grilled seasonal fish, slow stews, oden and sashimi, with sake (Tabelog) · warayaki: bonito seared over burning straw at the counter and eaten with salt, including the rare belly "hara" (May–October 2026) · sashimi: bluefin tuna, amberjack, Mongolian squid with sea urchin or caviar, mikan sea bream, Shinshu salmon, flounder, seared golden-eye snapper (May–October 2026) · oden and stews: daikon with yuzu miso, thick fried tofu, beef tendon, bone-in chicken in white broth, burdock tempura cake; a whole tomato in chilled dashi; toroyuba; meat tofu (May–September 2026) · appetizer plates such as sesame tofu with kinako, mugwort fu, tomato jelly, simmered winter melon (June–October 2026) · kamameshi and salmon-roe rice to finish (May–July 2026) · courses ¥5,800–¥9,980 (Tabelog); sake such as Mimurosugi (August 2026)',
    website: null, gmaps: gm('魚と煮込みとわら焼きと ととと'), menu_url: null,
    notes: "[Izakaya · Shinsaibashi-suji, Tototo's second shop of straw-grilled fish and stews] The second Tototo, opened in 2025 on the ground floor of the old Queens Court building between Namba and Shinsaibashi, a calm 21-seat room with a counter facing the straw grill. Most diners take the ¥8,800 omakase: a basket of small appetizers, thick-cut sashimi, bonito seared in a burst of straw flame, oden and slow stews such as bone-in chicken in white broth, then rice. The sister charcoal-and-teppan Tototo is next door in the same building, and its dishes can be ordered here. Diners in 2026 were consistently delighted with the food and service. Evenings only.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: seasonal fish prepared with straw grilling and charcoal grilling, slow-cooked stews and fresh sashimi by skilled chefs, with sake to match; opened 17 July 2025. Per 2026 reviews: the second location of Tototo, whose 魚と炭と鉄板と ととと (osaka_sakana_sumi_teppan_tototo) is in the same building, part of the same group.',
      philosophy: null, specialty: 'Straw-grilled bonito; stews; oden.',
      anecdotes: [
        { text: '"The sister restaurant \'Sakana to Sumi to Teppan to Tototo\' in the same building is also delicious and popular! I had high expectations since they are part of the same group." — August 2026, the omakase premium course.', source: R + 'B533665653/' },
        { text: '"The flames and smoke rising dramatically in front of us made our hearts race." — October 2026, warayaki of rare bonito belly.', source: R + 'B537595219/' },
        { text: '"Additionally, you can also order from the menu of a nearby sister restaurant specializing in teppan-yaki." — May 2026, recommending the kamameshi.', source: R + 'B529092856/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 魚と煮込みとわら焼きと ととと、居酒屋・海鮮・おでん、心斎橋筋2-3-2 クイーンズコートビル本館 101、Namba 駅から徒歩3分、Shinsaibashi 駅から5分、毎日16:30〜23:30 (L.O.料理22:30)、休みは変動、予約可、おまかせコース5,800円 (火〜金のみ)、おまかせプレミアムコース8,800円、アワビ丸ごとの海鮮鍋コース9,980円、飲み放題は+2,800円、カード可、電子マネー・QR不可、21席、禁煙 (店内に喫煙所)、英語メニュー、テイクアウト、2025年7月17日オープン、旬の魚のわら焼きと炭火焼き、じっくり煮込んだ料理、刺身、日本酒。口コミ(2026年5月〜10月): ととと の2号店、同じビルに姉妹店、鰹のわら焼きを塩で、本マグロ、カンパチ、モンゴウイカ、みかん鯛、信州サーモン、大根の柚子味噌、厚揚げ、牛すじ、骨付き鶏の白湯煮、丸ごとトマトの出汁、とろゆば、釜飯、いくらご飯。',
      confidence: 'medium', sources: [TB, R + 'B528003060/', R + 'B529092856/', R + 'B529925363/', R + 'B530430589/', R + 'B531408544/', R + 'B531515221/', R + 'B533665653/', R + 'B534195732/', R + 'B535290850/', R + 'B535374184/', R + 'B535428399/', R + 'B537595219/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-2 クイーンズコートビル本館 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番2号 (go) 23m; osaka_sushi_akasu_shinsaibashi (same building, 2F) is 4.7 m away and the sister osaka_sakana_sumi_teppan_tototo 23 m, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), tax included.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (Tuesday–Friday)', '¥5,800', 'Courses', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Omakase premium course', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog; May–October 2026 reviews.', 'omakase_premium'),
      it('', '', 'Seafood hot-pot course with whole abalone', '¥9,980', 'Courses', 'ask', 'no', 'Tabelog; all-you-can-drink +¥2,800.', 'hotpot_course'),
      it('', '', 'Straw-grilled bonito with salt', '', 'Warayaki', 'ask', 'no', 'May–October 2026.', 'warayaki_katsuo'),
    ] }, {
    cuisine: '旬の魚のわら焼きと炭火焼き、じっくり煮込んだ料理、おでん、刺身と日本酒 (食べログ)・わら焼き: カウンターで燃えるわらで炙る鰹を塩で、希少な腹の部分も (2026年5〜10月)・刺身: 本マグロ、カンパチ、ウニやキャビアをのせたモンゴウイカ、みかん鯛、信州サーモン、ヒラメ、炙った金目鯛 (2026年5〜10月)・おでんと煮込み: 柚子味噌の大根、厚揚げ、牛すじ、骨付き鶏の白湯煮、ごぼう天。丸ごとトマトの冷やし出汁、とろゆば、肉豆腐 (2026年5〜9月)・きなこの胡麻豆腐、よもぎ麩、トマトのジュレ、冬瓜の炊いたんなどの前菜 (2026年6〜10月)・締めは釜飯やいくらご飯 (2026年5〜7月)・コースは5,800〜9,980円 (食べログ)、Mimurosugi などの日本酒 (2026年8月)',
    neighborhood: '心斎橋筋2-3-2 クイーンズコートビル本館 101。Namba 駅から徒歩3分、Shinsaibashi 駅から5分',
    gf_detail: '要確認。グルテンの情報なし。刺身と塩で食べる鰹のわら焼きがいちばんシンプル。おでんと煮込みは醤油の出汁で、コースには天ぷらや麩も。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、おでんや煮込みは出汁、コースには鴨、鶏、牛すじも。',
    notes: '[居酒屋・心斎橋筋、ととと2号店のわら焼きと煮込み] Namba と Shinsaibashi の間、クイーンズコートビルの1階に2025年にできた ととと の2号店で、わらの焼き場に向かうカウンターのある21席の落ち着いた店。多くの客は8,800円のおまかせで、かごに盛った小さな前菜、厚切りの刺身、わらの炎で一気に炙る鰹、おでん、骨付き鶏の白湯煮などの煮込み、締めのご飯。同じビルに炭火と鉄板の姉妹店の ととと があり、その料理もここで頼める。2026年の口コミは料理と接客ともに好評ばかり。夜だけの営業。',
  });
}

// ================================================================ たこ八 道頓堀総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27076174/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.takohachi.jp/';
  const H = day(['10:00', '22:30']);
  put({
    id: 'osaka_takohachi_dotonbori_sohonten', name: 'たこ八 道頓堀総本店 (Tako Hachi Doutonbori souhonten)', category: 'OMNI',
    lat: 34.668861, lng: 135.50333, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki, akashiyaki, okonomiyaki and yakisoba are wheat batter or noodles cooked on shared griddles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the takoyaki batter is made with dashi (Tabelog) and holds octopus.',
    hours_raw: 'Daily 10:00–22:30 (last order 21:30) (Tabelog). Takeaway takoyaki ordered and paid at the front, with sauce, mayonnaise and Akashi-style dashi at the first-floor counter (October 2026). Reservations recommended for the upper floors (Tabelog; October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay and WeChat Pay (Tabelog). 57 seats: a standing counter on the first floor, a counter on the second and tables on the third, up three flights of stairs (Tabelog; September 2026); non-smoking; free Wi-Fi and outlets; children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-5-10 — 5 min from exit 14 of Namba Stn (Midosuji Line)',
    cuisine: 'Takoyaki and Osaka konamon, with over 90 dishes (Tabelog) · takoyaki in a special dashi batter with big octopus, tenkasu, ginger and green onion, crisp outside and soft inside, six for ¥650 (Tabelog; October 2026); negi-mayo takoyaki (October 2026) · akashiyaki dipped in broth; a takoyaki and akashiyaki comparison set (August 2026) · okonomiyaki, yakisoba and omusoba (August–October 2026) · teppanyaki: domestic beef top sirloin, seafood, and a Tako Hachi teppanyaki deluxe set with steak, seafood, takoyaki, okonomiyaki and yakisoba (August–October 2026)',
    website: SITE, gmaps: gm('たこ八 道頓堀総本店'), menu_url: null,
    notes: "[Takoyaki · Dotonbori, the 1979 Tako Hachi main shop] The main shop of Tako Hachi, making takoyaki in Osaka since 1979, on the Dotonbori strip: grab six hot ones from the first-floor stand, or climb to the counter and table floors for okonomiyaki, yakisoba, akashiyaki in broth and teppanyaki sets. The batter is built on dashi, and some find they need little sauce. Diners in 2026 call it a favourite, better than the big chains; the upper floors fill up, so book, and it is up three flights of stairs. Open daily 10:00–22:30.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Tako Hachi, cherished in Osaka since 1979 (the header says 1978); takoyaki made with a special dashi, large octopus, tenkasu, ginger and green onion; over 90 menu items; three floors of seating. The official site lists the Dotonbori main shop and notes an appearance at a Japanese-artisan event in Kaohsiung, Taiwan.',
      philosophy: 'A flavour loved in Osaka for decades (Tabelog).', specialty: 'Takoyaki; akashiyaki.',
      anecdotes: [
        { text: '"The takoyaki is fluffy and creamy, and the batter infused with dashi is truly delicious!" — September 2026.', source: R + 'B536275679/' },
        { text: '"I made a reservation and was guided to the upper seating area, which required climbing three flights of stairs." — September 2026.', source: R + 'B536351631/' },
        { text: '"6 pieces for JPY 650 … It was even tastier than the famous chain takoyaki shops." — October 2026, a Dotonbori takoyaki comparison.', source: R + 'B536861536/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たこ八 道頓堀総本店、たこ焼き・お好み焼き・鉄板焼き、道頓堀1-5-10、Namba 駅14番出口から徒歩5分、毎日10:00〜22:30 (L.O.21:30)、予約可、カード・電子マネー・QR可、57席 (1階は立ち飲みカウンター、2階カウンター、3階テーブル)、禁煙、Wi-Fi、電源、子ども可、1979年創業 (見出しは1978年)、特製の出汁、大きなたこ、天かす、紅しょうが、ねぎのたこ焼き、外はかりっと中はふわとろ、90品以上。公式サイト (takohachi.jp): 道頓堀総本店、台湾・高雄のイベントに出店。口コミ(2026年8月〜10月): たこ焼き6個650円、ねぎマヨ、明石焼きとの食べ比べ、お好み焼き、焼きそば、オムそば、国産牛のステーキ、鉄板焼きのデラックスセット、3階まで階段、予約がおすすめ、チェーン店よりおいしいという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B308292983/', R + 'B534230545/', R + 'B534311335/', R + 'B534427616/', R + 'B536275679/', R + 'B536351631/', R + 'B536861536/', R + 'B537281557/', R + 'B537416651/', R + 'B538109771/', R + 'B538217743/', R + 'B538486944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay and WeChat Pay accepted (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-5-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目5番10号 (go) 8m; the Tabelog point is 3 m from osaka_bonkuraya_dotonbori next door, so moved 2 m west to sit 5 m from it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536861536/'],
    price_note: 'One price from an October 2026 review; no menu online.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (six)', '¥650', 'Takoyaki', 'no', 'no', 'October 2026.', 'takoyaki'),
      it('', '', 'Takoyaki and akashiyaki comparison set', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'compare_set'),
      it('', '', 'Tako Hachi teppanyaki deluxe set', '', 'Teppanyaki', 'no', 'no', 'October 2026.', 'deluxe_set'),
    ] }, {
    cuisine: 'たこ焼きと大阪の粉もんで、90品以上 (食べログ)・特製の出汁の生地に大きなたこ、天かす、紅しょうが、ねぎのたこ焼きは外はかりっと中はふわっと、6個650円 (食べログ、2026年10月)、ねぎマヨのたこ焼き (2026年10月)・出汁につける明石焼き、たこ焼きと明石焼きの食べ比べ (2026年8月)・お好み焼き、焼きそば、オムそば (2026年8〜10月)・鉄板焼き: 国産牛の上サーロイン、海鮮、ステーキと海鮮にたこ焼き、お好み焼き、焼きそばがつくたこ八鉄板焼きデラックスセット (2026年8〜10月)',
    neighborhood: '道頓堀1-5-10。Namba 駅 (Midosuji Line) 14番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。たこ焼き、明石焼き、お好み焼き、焼きそばは小麦の生地や麺で、共用の鉄板で焼く。',
    vegan_detail: 'ヴィーガンではありません。たこ焼きの生地は出汁を使い (食べログ)、たこが入る。',
    notes: '[たこ焼き・道頓堀、1979年からのたこ八の総本店] 1979年から大阪でたこ焼きを焼くたこ八の総本店で、道頓堀の真ん中。1階の立ち飲みカウンターで熱々の6個をつまむか、上の階のカウンターやテーブルでお好み焼き、焼きそば、出汁につける明石焼き、鉄板焼きのセットを。生地に出汁が効いていて、ソースが少なくてもおいしいという声も。2026年の口コミでは大手チェーンよりおいしい、お気に入りという声が多い。上の階は満席になりやすいので予約を、3階までは階段。毎日10時から22時30分。',
  });
}

// ================================================================ 喜多郎寿し なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27082490/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_kitaro_zushi_namba', name: '喜多郎寿し なんば店 (Kitaro Zushi Nanba ten)', category: 'OMNI',
    lat: 34.665026, lng: 135.504416, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is the place to start; sushi comes with soy sauce, and fried dishes and shrimp toast contain wheat. The shop asks guests to note allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood restaurant; a few vegetable rolls such as kanpyo and yam-burdock (September 2026).',
    hours_raw: 'Daily 17:00–02:00 (last orders 01:00; fried food to midnight); closed 31 December, 1 January and company holidays; may close early in bad weather (Tabelog). Reservations; note allergies or dislikes when booking; two hours when busy (Tabelog). Prices on the menu exclude tax (Tabelog). No desserts; bring your own cake, uncut, with notice (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 55 seats: a counter of 19 on the first floor and horigotatsu seats, a banquet hall and a private room for 10 upstairs; non-smoking, ashtray by the exit (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 3-5, a renovated townhouse in Ura Namba — about 7 min from Namba Stn',
    cuisine: 'Budget sushi until late, with fish from the Osaka central and local markets (Tabelog) · nigiri from ¥280 a plate (two pieces, before tax): negitoro, yellowtail, boiled shrimp, grilled eel with cucumber, uni, ikura, medium fatty tuna (Tabelog; 2026); hosomaki such as kanpyo and yam-burdock (September 2026) · special sashimi platter; assorted tuna; tuna with grated yam (August 2026) · à la carte: shrimp toast; soft roe grilled with salt or soy, or with ponzu ¥1,000; shell oysters with ponzu ¥1,000; water eggplant; fig wrapped in prosciutto; chilled daikon stew (August–October 2026) · single-serving hot pots in season (Tabelog) · drinks from ¥550; sake (Tabelog; July 2026)',
    website: null, gmaps: gm('喜多郎寿し なんば店'), menu_url: null,
    notes: "[Sushi · Ura Namba, cheap sushi in a townhouse until 2 am] A busy Ura Namba sushi bar in a renovated townhouse, counter downstairs and horigotatsu rooms up, serving two-piece plates from ¥280 and drinks from ¥550 until 2:00. The pieces are small, so order widely: negitoro, yellowtail, uni, eel with cucumber, then à la carte shrimp toast, grilled milt and seasonal oysters. Diners in 2026 praise the value, the speed and the late hours; some popular items sell out early. Part of the small Kitaro Zushi group.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: over 10 years in Ura Namba; sushi from ¥280 and drinks from ¥550; fish from the Osaka central market and local markets; a stylish sushi bar in a renovated traditional house; a sister robata restaurant. A June 2026 diner heard the group is opening in Thailand; job listings name Ura Namba, Ohatsu Tenjin, a Shinsaibashi sushi-and-robata shop and a Toganocho kakuuchi.',
      philosophy: null, specialty: 'Two-piece nigiri from ¥280.',
      anecdotes: [
        { text: '"After enjoying a delicious meal, I strolled around Dotonbori and headed to Kitaro Zushi Namba, just like always." — October 2026, a tenth visit, for negitoro.', source: R + 'B456622724/' },
        { text: '"While many places close around 11 PM, I was very grateful that this restaurant is open until 2 AM." — October 2026.', source: R + 'B538154521/' },
        { text: '"Although it was early, I was disappointed to find some items were sold out due to the restaurant\'s popularity" — October 2026.', source: R + 'B536931122/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 喜多郎寿し なんば店 (キタロウズシ)、寿司・海鮮・鍋、難波千日前3-5、Namba 駅から徒歩約7分、毎日17:00〜2:00 (L.O.1:00、揚げ物は0:00)、12月31日・1月1日と社休日は休み、予約可 (アレルギーは要望欄に)、混雑時は2時間、価格は税抜、デザートなし (ケーキの持ち込み可)、カード・PayPay可、電子マネー不可、55席 (1階カウンター19、2階は掘りごたつ、宴会場、10名の個室)、禁煙、寿司は全品280円から、ドリンクは550円から、大阪中央市場や地方の市場の魚、Ura Namba の古民家を改装したおしゃれな寿司店、10年以上、季節の1人鍋、姉妹店の炉端。口コミ(2026年6月〜10月): ネギトロ、ぶり、ボイル海老、うなきゅう、エビトースト、白子焼き、殻付き牡蠣ポン酢1,000円、白子ポン酢1,000円、水なす、いちじくの生ハム巻き、冷やし大根、マグロの盛り合わせ、山かけ、かんぴょうや山ごぼうの細巻き、タイへの出店、ネタは小ぶり、売り切れがあるという声も。',
      confidence: 'medium', sources: [TB, 'https://www.careermap.jp/jobs/283319', R + 'B456622724/', R + 'B522493730/', R + 'B532823074/', R + 'B533421153/', R + 'B533654713/', R + 'B533802552/', R + 'B534629728/', R + 'B535075469/', R + 'B535304101/', R + 'B535922068/', R + 'B536931122/', R + 'B538154521/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop asks guests to write allergies or disliked ingredients in the booking request (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前3番5号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538154521/'],
    price_note: 'Prices from Tabelog (before tax, read November 2026) and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Nigiri, two pieces (from)', '¥280', 'Sushi', 'ask', 'no', 'Tabelog; before tax.', 'nigiri'),
      it('', '', 'Drinks (from)', '¥550', 'Drinks', 'ask', 'ask', 'Tabelog.', 'drinks'),
      it('', '', 'Shell oysters with ponzu', '¥1,000', 'À la carte', 'ask', 'no', 'October 2026.', 'oysters'),
      it('', '', 'Cod milt with ponzu', '¥1,000', 'À la carte', 'ask', 'no', 'October 2026.', 'shirako'),
    ] }, {
    cuisine: '大阪中央市場や地方の市場の魚の、遅くまで開いている手頃な寿司 (食べログ)・握りは1皿2貫280円から (税抜): ネギトロ、ぶり、ボイル海老、うなきゅう、ウニ、いくら、中トロ (食べログ、2026年)。かんぴょうや山ごぼうの細巻き (2026年9月)・特選刺身盛り、マグロの盛り合わせ、山かけ (2026年8月)・一品: エビトースト、白子の塩焼きや醤油焼き、白子ポン酢1,000円、殻付き牡蠣のポン酢1,000円、水なす、いちじくの生ハム巻き、冷やし大根 (2026年8〜10月)・季節の1人鍋 (食べログ)・ドリンクは550円から、日本酒 (食べログ、2026年7月)',
    neighborhood: '難波千日前3-5、Ura Namba の古民家を改装した店。Namba 駅から徒歩約7分',
    gf_detail: '要確認。グルテンの情報なし。刺身から確認を。寿司は醤油で、揚げ物やエビトーストは小麦を含む。予約時にアレルギーを書くよう店は頼んでいる (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。寿司と海鮮の店で、野菜の巻物はかんぴょうや山ごぼうなど少し (2026年9月)。',
    notes: '[寿司・Ura Namba、夜2時までの古民家の手頃な寿司] Ura Namba の古民家を改装したにぎやかな寿司店で、1階はカウンター、2階は掘りごたつ。2貫で280円からの皿とドリンク550円からを、夜2時まで。ネタは小ぶりなのでいろいろ頼んで: ネギトロ、ぶり、ウニ、うなきゅう、一品のエビトースト、焼き白子、季節の牡蠣。2026年の口コミでは安さ、早さ、遅くまで開いていることが好評で、人気のネタが早く売り切れるという声も。小さな喜多郎寿しのグループの1軒。',
  });
}

// ================================================================ musi-vege+cafe なんばCITY店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27123150/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_musi_vege_cafe_namba_city', name: 'musi-vege+cafe なんばCITY店 (musi-vege+cafe Nanba CITY ten)', category: 'OMNI',
    lat: 34.663528, lng: 135.502207, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steamed vegetables with ponzu and multigrain rice are the plainest; the fried mains (Tatsuta chicken, yangnyeom chicken, shrimp mayo) and the sauces are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Every set comes with a plate of steamed vegetables and multigrain rice, but the mains are chicken, pork or shrimp and the soup is soy-milk miso, which may use dashi.',
    hours_raw: 'Daily 11:00–22:00, open straight through; closed when Namba City closes (Tabelog; September 2026). No reservations (Tabelog); a short wait at busy times (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, iD, QUICPay and QR (Tabelog). 68 seats with sofas and divided tables, easy for solo diners; non-smoking; takeaway (Tabelog; September 2026). Opened 14 April 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, なんばCITY 本館 1F — 5 min from Nankai Namba Stn',
    cuisine: 'Set meals built around a plate of steamed seasonal vegetables with dipping sauces, multigrain rice and soy-milk miso soup (2026 reviews) · mains, often Chinese-style: shrimp mayo with chili, yangnyeom chicken, grated-daikon Tatsuta fried chicken, black-vinegar chicken with eggplant and zucchini, pork loin and maitake with balsamic sauce; two mains ¥1,518 (October 2026) · grated-yam (tororo) multigrain rice; small side dishes (September–October 2026) · café sets such as yuzu squash and cheesecake, a little over ¥1,000 (October 2026)',
    website: null, gmaps: gm('musi-vege+cafe なんばCITY'), menu_url: null,
    notes: "[Café · Namba City, steamed-vegetable set meals] A roomy café-restaurant on the ground floor of Namba City, one of a few musi-vege branches, where every set comes with a big plate of steamed vegetables, multigrain rice and a soy-milk miso soup; pick one or two mains such as creamy shrimp mayo, yangnyeom chicken or black-vinegar chicken (about ¥1,500 for two). It stays open from 11:00 to 22:00 without a break, and the divided tables suit solo diners. Regulars return for the vegetables and the shrimp mayo; some found the side dishes ordinary, the pork a little tough or a sofa grubby.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café specialising in vegetable dishes in the Namba City main building, opened 14 April 2021. Other musi-vege+cafe branches are in Umeda (Diamor Osaka), Sakai Takashimaya and LaLaport Sakai; a September 2026 diner found the quality consistent across branches.',
      philosophy: null, specialty: 'Steamed vegetables; shrimp mayo.',
      anecdotes: [
        { text: '"As always, their steamed vegetables and soy milk soup are delicious and my favorites!" — October 2026, shrimp mayo chili and yangnyeom chicken ¥1,518.', source: R + 'B503932725/' },
        { text: '"I appreciate that they are open continuously for both lunch and dinner, making it convenient to visit even during odd hours." — September 2026.', source: R + 'B535645472/' },
        { text: '"However, the flavors of the side dishes were all quite ordinary." — October 2026, a third visit for the shrimp mayo.', source: R + 'B522775374/' },
      ],
      japanese_sources_summary: '食べログ: musi-vege+cafe なんばCITY店 (ムシベジプラスカフェ)、カフェ・野菜料理、難波5-1-60 なんばCITY 本館 1F、Nankai Namba 駅から徒歩5分、毎日11:00〜22:00、休みはなんばCITY に準ずる、予約不可、カード・電子マネー・QR可、68席、ソファ席、禁煙、テイクアウト、2021年4月14日オープン。口コミ(2026年9月〜10月): どのセットにも蒸し野菜、雑穀米、豆乳の味噌汁、エビマヨのチリ、ヤンニョムチキン、おろし竜田揚げ、黒酢の鶏となすとズッキーニ、豚ロースと舞茸のバルサミコ、メイン2品で1,518円、とろろの雑穀米、ゆずスカッシュとチーズケーキのセット、通しで営業、1人でも入りやすい、副菜は普通、ソファが汚れていたという声も。',
      confidence: 'medium', sources: [TB, R + 'B503932725/', R + 'B508774527/', R + 'B522775374/', R + 'B534982689/', R + 'B535040719/', R + 'B535086954/', R + 'B535645472/', R + 'B536454458/', R + 'B536859455/', R + 'B537732179/', R + 'B538275857/', R + 'B538447069/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '大阪府大阪市中央区難波5-1-60 なんばCITY 本館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 184m — the lot covers the whole Namba City / station complex, so GSI cannot place the shop; pin kept at the Tabelog point (Namba City main building), loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503932725/'],
    price_note: 'One set price from an October 2026 review; no menu online.', last_checked: TODAY, items: [
      it('', '', 'Set meal with two mains, steamed vegetables, multigrain rice and soup', '¥1,518', 'Set meals', 'ask', 'no', 'October 2026.', 'two_mains'),
      it('', '', 'Shrimp mayo with chili', '', 'Mains', 'no', 'no', 'October 2026.', 'shrimp_mayo'),
      it('', '', 'Black-vinegar chicken with eggplant and zucchini', '', 'Mains', 'ask', 'no', 'September–October 2026.', 'kurozu_chicken'),
    ] }, {
    cuisine: '旬の蒸し野菜とつけだれ、雑穀米、豆乳の味噌汁を軸にした定食 (2026年の口コミ)・メインは中華風が多い: エビマヨのチリ、ヤンニョムチキン、おろし竜田揚げ、黒酢の鶏となすとズッキーニ、豚ロースと舞茸のバルサミコ。メイン2品で1,518円 (2026年10月)・とろろの雑穀米、小鉢 (2026年9〜10月)・ゆずスカッシュとチーズケーキなどのカフェセット、1,000円ちょっと (2026年10月)',
    neighborhood: '難波5-1-60 なんばCITY 本館 1F。Nankai Namba 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ポン酢の蒸し野菜と雑穀米がいちばんシンプル。竜田揚げ、ヤンニョムチキン、エビマヨなどの揚げ物とソースの中身は書かれていない。',
    vegan_detail: '要確認。どのセットにも蒸し野菜と雑穀米がつくが、メインは鶏、豚、エビで、豆乳の味噌汁にも出汁を使うかもしれない。',
    notes: '[カフェ・なんばCITY、蒸し野菜の定食] なんばCITY の1階にある広いカフェレストランで、何店かある musi-vege の1軒。どのセットにも大皿の蒸し野菜、雑穀米、豆乳の味噌汁がつき、メインはクリーミーなエビマヨ、ヤンニョムチキン、黒酢の鶏などから1品か2品 (2品で1,500円ほど)。11時から22時まで通しで営業し、仕切りのある席は1人でも入りやすい。常連は野菜とエビマヨ目当てに通い、副菜は普通、豚が少し固い、ソファが汚れていたという声も。',
  });
}

save();
