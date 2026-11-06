// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 19.
//   + 京都ぎをんおむすび屋 さんかく Kyoto Gion Omusubi-ya Sankaku (four-seat onigiri counter by Yasaka Shrine; core list)
//   + 合法ユッケかたまり Goho Yukke Katamari (wagyu yukke bowls, Oagari group, GF and Muslim-friendly menus; core list)
//   + ムガール Mughal (Indian on Kiyamachi above Oike since 1987; notable list)
//   + 祇園迦陵 Gion Karyo (kaiseki on Hanamikoji opposite the Kobu Kaburenjo; notable list)
//   Picked 2026-11-05 after batch 18. `queue.mjs kyoto-missed next core 200`: さんかく 26038753, 合法ユッケかたまり 26042647.
//   `next notable 200`: ムガール 26000239, リベルテ・パティスリー・ブーランジェリー 京都店 26031295 (skipped, chain),
//   祇園迦陵 26002441. Same-name check first: no other ムガール, かたまり or 迦陵 in our crawls; the other さんかく shops
//   (CAFEさんかく旗, 地獄谷 餃子さんかく) are unrelated. かたまり is a sister concept of the small Oagari group (official site:
//   和牛火山おあがり 嵐山本店 and 祇園店, 合法ユッケかたまり, うしとさかな 狸小路), whose Arashiyama shop is in data as
//   ChIJNfzfEpKpAWAR6JgLmgrDRfY — drafted as a sister concept of a small group. None of the four is in data/kyoto.json: grep
//   by name and address (祇園町南側533, 537-2 祇園ヒロビル, アイル竹島ビル, 歌舞練場前) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031295', 'リベルテ・パティスリー・ブーランジェリー 京都店: a branch of the Paris bakery brand Liberté — web sources list five Paris shops (rue des Vinaigriers flagship, rue Poncelet, rue Saint-André-des-Arts, rue Saint-Dominique, rue Hippolyte Lebas) plus 吉祥寺 (first overseas shop, 2018) and this Kyoto shop (second in Japan), 5+ shops of one brand (Greg, 2026-11-05).');

// ================================================================ 京都ぎをんおむすび屋 さんかく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038753/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['08:00', '14:00']); const WE = day(['08:00', '16:00']);
  put({
    id: 'kyoto_gion_omusubi_sankaku', name: '京都ぎをんおむすび屋 さんかく (Omusubi-ya Sankaku)', category: 'OMNI',
    lat: 35.002952, lng: 135.776975, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice balls with fillings such as salt, ume, salmon, marinated tuna, chicken soboro, negi miso and salmon mayo, with miso soup; seasonings may contain wheat; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salt, ume and negi-miso rice balls appear, but the miso soup has been a meat-based broth (February 2024) and many fillings are fish or chicken (2023–2026 reviews).',
    hours_raw: 'Tuesday to Friday 8:00–14:00; Saturday and Sunday 8:00–16:00; closed Monday; hours may change (Tabelog). Reservations accepted, including through Instagram (Tabelog; December 2023); 30-minute seating; book ahead, as the four seats fill and fillings sell out (January–February 2024). Takeaway — ready-made rice balls on a shelf by the door; the shop calls if a takeaway order has a wait (Tabelog; December 2023). No cards or e-money; QR payments accepted (Tabelog). 4 counter seats; non-smoking; children welcome (Tabelog). English menu signs (May 2025). In Gion south of Shijo near Yasaka Shrine; 7 min walk from Gion-Shijo Stn (Tabelog; January 2024). Opened 17 December 2022 (Tabelog).',
    hours: { 1: WK, 2: WK, 3: WK, 4: WE, 5: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo, near Yasaka Shrine — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Four-seat breakfast counter of large omusubi from rice cooked in a clay pot, made to order in front of you (2023–2026 reviews) · eat-in sets of two rice balls with the day\'s miso soup, ¥1,100, some fillings +¥50 or +¥100 (January–February 2024) · fillings such as salt, ume, marinated tuna, salmon, chicken soboro, negi miso, salmon mayo — about ¥350 each (2023–2026 reviews) · a meat-broth miso soup (February 2024; May 2025)',
    website: null, gmaps: gm('京都ぎをんおむすび屋 さんかく'), menu_url: null,
    notes: '[Onigiri · Gion near Yasaka Shrine, breakfast at four seats] A tiny morning counter in Gion where two cooks shape big, loose rice balls from clay-pot rice to order: salt, ume, marinated tuna, salmon, negi miso. Sit-down sets of two with miso soup are about ¥1,100; rice balls to take away are about ¥350. Four seats and 30-minute sittings, so book (Instagram works) or take away. One 2023 guest found the room too quiet and close for conversation. QR pay, no cards. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Two cooks (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 17 December 2022 as a rice-ball shop with breakfast and takeaway. Reviewers describe two male staff shaping rice balls at the counter (December 2023, February 2024), warm and welcoming service (August 2026), and English signage (May 2025); a February 2026 visitor thought it "seems to be run by a couple".',
      philosophy: null, specialty: 'Clay-pot rice omusubi; salt and ume.',
      anecdotes: [
        { text: 'An October 2023 customer took four to go and was surprised, on unwrapping, at how big each one was.', source: R + 'B473004628/' },
        { text: '"As soon as you take a bite, it crumbles beautifully, releasing the wonderful aroma of the rice." — February 2026.', source: R + 'B522127797/' },
        { text: '"It\'s too quiet to have a conversation, and the staff are quite close by." — September 2023.', source: R + 'B503702523/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり、東山区祇園町南側533、祇園四条駅から徒歩約7分、火〜金 8:00〜14:00、土・日 8:00〜16:00、月曜休み、予約可、カード・電子マネー不可、QR 可、4席 (カウンター)、禁煙、子ども可、テイクアウト (待ち時間があれば電話)、朝食、2022年12月17日オープン。口コミ (2023年9月〜2026年8月、英語): 八坂神社の近く、土鍋で炊いたご飯の大きなおむすび、目の前で握る、イートインは2個と日替わりの味噌汁で1,100円、具によって+50円・+100円、1個350円ほど、塩、梅、漬けまぐろ、鮭、鶏そぼろ、ねぎ味噌、鮭マヨ、肉の出汁の味噌汁、30分制、インスタで予約、男性スタッフ二人、店内が静かで会話しづらいとの声 (2023年9月)、英語の表示。',
      confidence: 'medium', sources: [TB, R + 'B473004628/', R + 'B476239994/', R + 'B478608681/', R + 'B479748423/', R + 'B482152645/', R + 'B503702523/', R + 'B503946814/', R + 'B521819618/', R + 'B522127797/', R + 'B536486540/'] },
    cultural_comfort: { level: 'english', note: 'English signage (May 2025); point at the fillings; book a seat or take away; QR pay only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側533',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002952, 135.776975); cross-checked: GSI 京都府京都市東山区祇園町南側533番地 (lot) 53 m; kyoto_kameya_kiyonaga is 10 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B478608681/', R + 'B522127797/'],
    price_note: 'No menu read; prices from January 2024 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Eat-in set: two rice balls and miso soup', '¥1,100', 'Sets', 'ask', 'ask', 'January 2024; some fillings +¥50–100.', 'set'),
      it('', '', 'Rice ball (e.g. negi miso, salmon mayo)', '¥350', 'Omusubi', 'ask', 'ask', 'About ¥350 each, February 2026.', 'omusubi'),
      it('', '', 'Salt rice ball', '', 'Omusubi', 'ask', 'ask', '', 'shio'),
    ] }, {
    cuisine: '土鍋で炊いたご飯を目の前で握る、大きなおむすびの4席の朝ごはんのカウンター (2023〜2026年の口コミ)・イートインはおむすび2個と日替わりの味噌汁で1,100円、具によって+50円か+100円 (2024年1月〜2月)・具は塩、梅、漬けまぐろ、鮭、鶏そぼろ、ねぎ味噌、鮭マヨなど、1個350円ほど (2023〜2026年の口コミ)・肉の出汁の味噌汁 (2024年2月、2025年5月)',
    neighborhood: '四条の南の祇園、八坂神社の近く。祇園四条駅から徒歩7分',
    gf_detail: '要確認。塩、梅、鮭、漬けまぐろ、鶏そぼろ、ねぎ味噌、鮭マヨなどのおむすびと味噌汁。調味料に小麦が入る可能性がある。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。塩、梅、ねぎ味噌のおむすびはあるが、味噌汁は肉の出汁のことがあり (2024年2月)、具の多くは魚や鶏 (2023〜2026年の口コミ)。',
    notes: '[おむすび・八坂神社の近く、4席の朝ごはん] 祇園の小さな朝のカウンター。二人が土鍋のご飯で大きくふんわりしたおむすびを注文ごとに握る: 塩、梅、漬けまぐろ、鮭、ねぎ味噌など。2個と味噌汁のイートインは1,100円ほど、持ち帰りは1個350円ほど。4席で30分制なので予約 (インスタも可) か持ち帰りを。2023年の客は店内が静かで近く、会話しづらいと書いている。QR 決済のみ、カード不可。月曜休み。',
  });
}

// ================================================================ 合法ユッケかたまり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042647/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://oagari.com/home/katamari/'; const GF = 'https://oagari.com/our-gluten-free-commitment/'; const MF = 'https://oagari.com/our-muslim-friendly-definition/';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_goho_yukke_katamari', name: '合法ユッケかたまり (Goho Yukke Katamari)', category: 'OMNI',
    lat: 35.002976, lng: 135.777269, cuisine_type: 'donburi',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'GF options on request: the shop\'s page lists gluten-free among its food-diversity options, and the group\'s policy says its GF menu excludes wheat, barley, rye and non-GF oats, with seasonings checked against manufacturers\' labels. You must tell staff when ordering — the same dish is otherwise served with gluten. Shared kitchen; separate frying oil and pans (official site, 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a raw-beef specialist — wagyu yukke and steak bowls with egg yolk, ikura and sea urchin (official site; 2026 reviews).',
    hours_raw: 'Daily 11:30–15:00 and 17:30–21:00 (last order 20:30) (Tabelog; official site). Reservations accepted; bookings over 15 minutes late may be cancelled (Tabelog). An otoshi of ¥330 at dinner (Tabelog original ディナー営業、お通し料(330円)). 20 seats at eight two-person tables; private hire up to 20; non-smoking; children welcome, kids\' menu (Tabelog). Cards, iD/QUICPay and PayPay (Tabelog). Menus in English, Simplified Chinese and Korean, with photos (Tabelog). Muslim-friendly menu with halal-certified wagyu (official site). Second floor of 祇園ヒロビル near Yasaka Shrine; coin parking next door; 7 min walk from Gion-Shijo Stn (Tabelog). Opened 28 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo, near Yasaka Shrine, 2nd floor — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Yukke specialist with a licence to serve raw beef (Tabelog; October 2026) · temari yukke don of finely cut black wagyu blending lean and marbled meat, single ¥2,200 or double, e.g. with ikura ¥4,070; finish with Kyoto dashi poured over (official site; October 2026) · kinu-toro yukke of sirloin; black wagyu steak box (kuroge wagyu o-jū), also topped with yukke; sea urchin yukke bowl (official site; Tabelog; 2026 reviews) · sake and cocktails (Tabelog)',
    website: WEB, gmaps: gm('合法ユッケかたまり 祇園'), menu_url: null,
    notes: '[Yukke bowls · Gion by Yasaka Shrine, raw wagyu] A small second-floor room by Yasaka Shrine from the Oagari group, licensed to serve raw beef: the draw is the temari yukke don — a dome of finely cut black wagyu with egg yolk, ikura optional, finished as dashi chazuke — about ¥2,200–4,100, plus steak boxes and a sea urchin yukke bowl. GF on request (say so when ordering) and a Muslim-friendly menu with halal-certified wagyu. Photogenic; one diner preferred izakaya yukke. ¥330 otoshi at dinner. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff of the Oagari group (unnamed)'], origin: null,
      background: 'Per the official site: a yukke specialist of the Oagari group (おあがりグループ), which also runs 和牛火山おあがり in Arashiyama and Gion and うしとさかな in Sapporo; the group publishes a gluten-free policy and a Muslim-friendly policy (halal-certified wagyu, dedicated utensils, separate storage, staff training) that both name this shop. Per Tabelog: opened 28 March 2025.',
      philosophy: '"Food diversity" — options for allergies, religion and lifestyle so everyone can share a table (official site).', specialty: 'Temari yukke don; kinu-toro yukke.',
      anecdotes: [
        { text: 'An October 2026 regular on a third visit ate the double yukke bowl with ikura three ways: with the yolk, with condiments, then with the dashi poured over.', source: R + 'B528364648/' },
        { text: '"It was tasty, but I think the Yukke at local izakayas might be better." — October 2026.', source: R + 'B537556105/' },
        { text: '"Since it was still warm when I visited, it might be better to choose a different season to go." — October 2026, on a faint off-flavour.', source: R + 'B538436924/' },
      ],
      japanese_sources_summary: '公式サイト (おあがりグループ): 日本初のユッケ専門店 合法ユッケかたまり、黒毛和牛お重、黒毛和牛手毬ユッケ丼 (超極細のカット、赤身とサシの肉をブレンド)、絹トロユッケ (サーロイン)、Food Diversity (グルテンフリー、ハラール対応)、東山区祇園町南側537-2 祇園ヒロビル2F、11:30〜15:00・17:30〜21:00 (L.O.20:30)。グルテンフリーの取り組み: 小麦・大麦・ライ麦・グルテンフリーでないオート麦を使わない、調味料は成分表示を確認、同じ厨房だが揚げ油やフライパンは分ける、注文時に申告が必要。ムスリムフレンドリーの取り組み: ハラール認証の和牛、専用の調理器具、保管を分ける、スタッフ研修。食べログ: 肉バル・丼、毎日営業、予約可 (15分遅れで取消の場合あり)、ディナーはお通し料330円、20席、貸切20名まで、禁煙、子ども可、カード・電子マネー・PayPay 可、英語・中国語・韓国語のメニュー、2025年3月28日オープン。口コミ (2026年10月、英語): 手毬ユッケ丼シングル2,200円、ダブルいくらのせ4,070円、締めは出汁をかけて、生食用食肉の取扱い、写真映え、居酒屋のユッケの方がという声、季節を選んだ方がという声。',
      confidence: 'high', sources: [WEB, GF, MF, TB, R + 'B528364648/', R + 'B537049149/', R + 'B537308446/', R + 'B537413869/', R + 'B537556105/', R + 'B537949471/', R + 'B538024838/', R + 'B538181211/', R + 'B538261514/', R + 'B538436924/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean with photos (Tabelog); tell staff about GF or Muslim-friendly needs when ordering.' },
    safety: { ...SAFETY0, dedicated_fryer: true, confidence: 'medium',
      gf_cross_contamination: [
        { text: 'The group states gluten-free items are prepared in the same kitchen as dishes containing gluten, with separate frying oil and pans; other equipment is shared but washed before use. Trace cross-contact remains possible.', source: GF, verified: TODAY },
        { text: 'GF must be requested when ordering: without notice, the same menu item is served with gluten, and the shop takes no responsibility.', source: GF, verified: TODAY },
      ],
      soy_sauce_wheat: [
        { text: 'The GF policy excludes wheat, barley and rye and says seasoning labels are checked, but does not name the soy sauce used on yukke; standard soy sauce contains wheat, so confirm with staff.', source: GF, verified: TODAY },
      ],
      positives: [
        { text: 'The shop page lists gluten-free and halal-friendly options under its "Food Diversity" commitment, and both group policies name Wagyu Steak KATAMARI.', source: WEB, verified: TODAY },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側537-2 祇園ヒロビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (updated October 2026) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002976, 135.777269); cross-checked: GSI 京都府京都市東山区祇園町南側537番地 (lot) 101 m; vm_mimikou_kyo_no_curry_udo is 6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B537413869/', R + 'B537308446/'],
    price_note: 'Dishes from the official site; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('黒毛和牛手毬ユッケ丼', 'kuroge wagyu temari yukke don', 'Black wagyu temari yukke bowl (single)', '¥2,200', 'Bowls', 'ask', 'no', 'October 2026; ask for GF.', 'temari_yukke'),
      it('', '', 'Double yukke bowl with ikura', '¥4,070', 'Bowls', 'ask', 'no', 'October 2026, tax included.', 'double_ikura'),
      it('絹トロユッケ', 'kinu-toro yukke', 'Silky sirloin yukke', '', 'Yukke', 'ask', 'no', 'Official site.', 'kinu_toro'),
      it('黒毛和牛お重', 'kuroge wagyu o-jū', 'Black wagyu steak box', '', 'Bowls', 'ask', 'no', 'Official site.', 'steak_ju'),
    ] }, {
    cuisine: '生食用食肉の取扱いのあるユッケ専門店 (食べログ、2026年10月)・赤身とサシの黒毛和牛を極細に切った手毬ユッケ丼、シングル2,200円、ダブルのいくらのせ4,070円など、締めは京の出汁をかけて (公式サイト、2026年10月)・サーロインの絹トロユッケ、黒毛和牛お重 (ユッケのせも)、うにユッケ丼 (公式サイト、食べログ、2026年の口コミ)・日本酒、カクテル (食べログ)',
    neighborhood: '四条の南の祇園、八坂神社の近く、ビル2階。祇園四条駅から徒歩7分',
    gf_detail: '注文時に申告すればグルテンフリー対応あり: 店のページの Food Diversity にグルテンフリーがあり、グループの方針では小麦・大麦・ライ麦・グルテンフリーでないオート麦を使わず、調味料は成分表示を確認。申告がないと同じ料理でもグルテン入りで出る。厨房は共用、揚げ油とフライパンは別 (公式サイト、2026年)。',
    vegan_detail: 'ヴィーガン不可。卵黄、いくら、うにをのせた和牛のユッケとステーキの丼の、生肉の専門店 (公式サイト、2026年の口コミ)。',
    notes: '[ユッケ丼・八坂神社の近く、生の和牛] 八坂神社近くのビル2階、おあがりグループの小さな店で、生食用食肉の取扱いがある。名物は手毬ユッケ丼: 極細の黒毛和牛をドームのように盛り、卵黄、好みでいくら、最後は出汁茶漬けに。2,200〜4,100円ほど。ステーキのお重やうにユッケ丼も。グルテンフリーは注文時に申告を。ハラール認証の和牛のムスリムフレンドリーメニューもある。写真映え。居酒屋のユッケの方がという声も。夜はお通し330円。無休。',
  });
}

// ================================================================ ムガール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000239/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_mughal_kiyamachi', name: 'ムガール (Mughal)', category: 'OMNI',
    lat: 35.011811, lng: 135.770635, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s listing ticks gluten-free options, and basmati rice and many curries are served alongside naan, roti and papad, but no source says which dishes are gluten-free or how gluten-free food is kept apart (Tabelog; 2025–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: Tabelog lists vegan and vegetarian options, and the lunch thali comes in vegetarian and non-vegetarian versions with dals, sambar and vegetable curries; confirm ghee and dairy with staff (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:30) and dinner 18:00–23:00 (food last order 22:00, drinks 22:45); closed Tuesday (Tabelog). Reservations accepted; with children, give the number and ages of the children when booking, or entry may be refused (Tabelog); sometimes closed for private parties (March 2026). 40 seats: 36 at tables, 4 at the counter; private room for 10–20; non-smoking, smoking area by the entrance (Tabelog). Cards incl. UnionPay; QR incl. Alipay (Tabelog). English menu and English-speaking staff; takeaway and delivery; halal and Hindu options listed (Tabelog). Second floor of アイル竹島ビル on Kiyamachi north of Oike, up an apartment-style stair; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; January 2026). Founded 1987 (January 2026 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Oike, 2nd floor — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Long-running Indian restaurant and wine bar (Tabelog; 2026 reviews) · lunch sets: two curries ¥1,100 (October 2025); "The Full Thali" ¥2,530 with rasam, four curries of your choice, chicken and fish tikka, vegetarian or non-vegetarian (March–September 2026); weekend biryani set ¥1,760 (September 2026) · curries such as spinach and potato (daily special), mutton, chicken masala, dal fry, sambar, vindaloo, yogurt curry; tandoori chicken, seekh kebab (2025–2026 reviews) · naan, roti, basmati rice, papad, achar, mango chutney ¥350 (2026 reviews) · Kingfisher ¥900, wine and cocktails, lassi, masala chai (Tabelog; 2026 reviews) · dinner about ¥3,000–4,000 (Tabelog)',
    website: null, gmaps: gm('ムガール 京都 木屋町御池'), menu_url: null,
    notes: '[Indian · Kiyamachi above Oike, since 1987] A spacious second-floor Indian restaurant on Kiyamachi, open since 1987 and trusted by locals — one reviewer\'s Indian colleague called it the best curry ever. The lunch "Full Thali" (¥2,530, vegetarian or not) brings rasam, four curries, tikka and naan; two-curry sets start at ¥1,100, and biryani appears at weekends. Vegan, vegetarian, halal and Hindu options are listed; English spoken. Fast service. Open late. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A January 2026 regular says the restaurant was founded in 1987 and is among the most trusted in the area. Reviewers in 2025–2026 describe a spacious room with rich decor, well-mannered staff and very fast service; Tabelog lists English-speaking staff.',
      philosophy: null, specialty: 'The Full Thali; biryani; daily vegetable curry.',
      anecdotes: [
        { text: 'A July 2026 visitor came on the repeated recommendation of an Indian colleague who called it the best curry ever eaten, India included.', source: R + 'B531534372/' },
        { text: 'A March 2026 guest, turned away once by a private party, returned on a weekday and was surprised by a lightly cooked spinach-and-potato curry.', source: R + 'B524845464/' },
        { text: '"The sweet potato soup was almost entirely garlic-flavored. It was a valuable spice experience." — June 2026.', source: R + 'B531267735/' },
      ],
      japanese_sources_summary: '食べログ: インド料理・インドカレー・ワインバー、中京区木屋町御池上ル アイル竹島ビル2F、市役所前駅から徒歩5分、昼 12:00〜15:00 (L.O.14:30)、夜 18:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:45)、火曜休み、予約可 (子連れは人数と年齢を予約時に)、40席 (テーブル36、カウンター4)、個室10〜20名、禁煙 (入口近くに喫煙所)、カード (銀聯も)・QR (Alipay も) 可、英語メニュー・英語のスタッフ、テイクアウト・デリバリー、ヴィーガン・ベジタリアン・グルテンフリー・ハラール・ヒンドゥーの選択肢あり。口コミ (2025年10月〜2026年9月、英語): 1987年創業、2種カレーのランチ1,100円、フルターリー2,530円、週末のビリヤニセット1,760円、ほうれん草とじゃがいものカレー、マトン、ダール、サンバル、ビンダルー、タンドリーチキン、シークカバブ、キングフィッシャー900円、インド人の同僚が人生最高と、料理が出るのが速い。',
      confidence: 'medium', sources: [TB, R + 'B112525844/', R + 'B496934131/', R + 'B516275887/', R + 'B523740115/', R + 'B524845464/', R + 'B525809871/', R + 'B529564659/', R + 'B531267735/', R + 'B531534372/', R + 'B535546252/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); mention children when booking; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町御池上ル アイル竹島ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011811, 135.770635); the address has no town or lot (木屋町御池上ル) and GSI matches only the ward, so loc_precise false; kyoto_kappou_yamashita is 40 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523740115/', R + 'B535546252/', R + 'B516275887/'],
    price_note: 'No menu read; prices from October 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set with two curries', '¥1,100', 'Lunch', 'ask', 'ask', 'October 2025.', 'two_curry'),
      it('', '', 'The Full Thali (vegetarian or non-vegetarian)', '¥2,530', 'Lunch', 'ask', 'ask', 'March–September 2026.', 'full_thali'),
      it('', '', 'Biryani set (weekends)', '¥1,760', 'Lunch', 'ask', 'no', 'September 2026.', 'biryani'),
      it('', '', 'Kingfisher beer', '¥900', 'Drinks', 'no', 'ask', 'March 2026.', 'kingfisher'),
    ] }, {
    cuisine: '長く続くインド料理とワインバー (食べログ、2026年の口コミ)・ランチ: カレー2種のセット1,100円 (2025年10月)、ラッサム、好きなカレー4種、チキンとフィッシュのティッカの「フルターリー」2,530円、ベジとノンベジあり (2026年3月〜9月)、週末のビリヤニセット1,760円 (2026年9月)・ほうれん草とじゃがいも (日替わり)、マトン、チキンマサラ、ダールフライ、サンバル、ビンダルー、ヨーグルトのカレー、タンドリーチキン、シークカバブ (2025〜2026年の口コミ)・ナン、ロティ、バスマティライス、パパド、アチャール、マンゴーチャツネ350円 (2026年の口コミ)・キングフィッシャー900円、ワイン、カクテル、ラッシー、マサラチャイ (食べログ、2026年の口コミ)・夜は3,000〜4,000円ほど (食べログ)',
    neighborhood: '御池の北、木屋町のビル2階。市役所前駅から徒歩5分',
    gf_detail: '要確認。食べログではグルテンフリーの選択肢ありとなっていて、バスマティライスや多くのカレーもあるが、ナン、ロティ、パパドも出る。どの料理がグルテンフリーか、どう分けているかの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり: 食べログにヴィーガンとベジタリアンの選択肢があり、ランチのターリーにはベジとノンベジがあって、ダール、サンバル、野菜のカレーも。ギーや乳製品は店で確認を (食べログ、2026年の口コミ)。',
    notes: '[インド料理・御池の北の木屋町、1987年から] 木屋町のビル2階の広いインド料理店。1987年からと口コミにあり、地元で信頼されている。インド人の同僚に人生最高のカレーと勧められたという客も。ランチの「フルターリー」(2,530円、ベジもノンベジも) はラッサム、カレー4種、ティッカ、ナン付き。カレー2種のセットは1,100円から、週末はビリヤニも。ヴィーガン、ベジタリアン、ハラール、ヒンドゥーの選択肢あり。英語可。出てくるのが速い。夜遅くまで。火曜休み。',
  });
}

// ================================================================ 祇園迦陵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002441/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_karyo', name: '祇園迦陵 (Gion Karyo)', category: 'OMNI',
    lat: 35.001787, lng: 135.774576, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Monthly kaiseki courses with dashi, white and red miso, soy-based sauces and clay-pot rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki courses of fish, crab, oysters, duck and dashi (2025–2026 reviews).',
    hours_raw: '18:00–22:00, last order 19:30; closed Wednesday (Tabelog). Reservations accepted — and needed (Tabelog; July 2026). A 10% service charge from 1 November to 8 December 2026 (Tabelog original 2026/11/1〜12/8までの期間中サービス料10%頂戴いたします). A seasonal course changing monthly, about ¥15,000–20,000 in reviews (Tabelog). 38 seats: a 14-seat counter and a private room on the ground floor, table seating for 2–10 upstairs, one private and two semi-private rooms; non-smoking; free Wi-Fi; children welcome, kids\' menu (Tabelog). Cards (Tabelog). Dishes explained in English (December 2025; July 2026). On Hanamikoji directly opposite the Gion Kobu Kaburenjo; 5 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji, opposite the Gion Kobu Kaburenjo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kaiseki course changing monthly, with tradition and new techniques; rice cooked in a kamado and sashimi prepared at the counter (Tabelog) · e.g. yuzu-pot dish, white-miso soup, hassun, clay-pot rice with shirasu and mentaiko (January 2026); a rice bowl of chirimen sansho and egg yolk (January 2026); a choice of three takikomi rice (June 2026); Hokkaido hairy crab with shirouri, Awaji hamo, yuzu somen, Awaji flounder and Tsushima squid, Tokushima rock oysters, ayu sushi, duck, red miso soup (August 2026) · a changing aperitif (July 2026) · sake, shochu and wine (Tabelog)',
    website: null, gmaps: gm('祇園迦陵 花見小路'), menu_url: null,
    notes: '[Kaiseki · Hanamikoji, opposite the Kaburenjo] A long-established kaiseki house on Hanamikoji facing the Gion Kobu Kaburenjo, with a 14-seat counter where you watch the sashimi cut and the kamado rice cooked, and private rooms upstairs. Monthly courses of about ¥15,000–20,000 end with a choice of clay-pot rice — chirimen sansho or shirasu and mentaiko. Warm, unhurried service, with dishes explained in English; reviewers call it good value for Gion. 10% service from 1 Nov to 8 Dec 2026. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chefs at the counter (unnamed)', 'Floor staff'], origin: null,
      background: 'Per Tabelog: a seasonal course changing monthly, cherishing the traditions of Japanese cuisine while exploring new techniques and ingredients, with rice and sashimi prepared at the counter. A July 2026 regular since 2019 has watched the chefs grow and heard that one early chef has opened a Kyoto-kaiseki restaurant in Milan; a June 2026 family returned after several decades to find it unchanged.',
      philosophy: 'Tradition and innovation in Japanese cuisine (Tabelog).', specialty: 'Kamado rice; monthly hassun.',
      anecdotes: [
        { text: '"I often see the staff patiently explaining the dishes in English to foreign customers, and watching that is one of my personal joys of coming here." — July 2026.', source: R + 'B500533229/' },
        { text: 'A June 2026 family, back after several decades, found the interior and exterior unchanged — and chose the chirimen and mentaiko rice from three.', source: R + 'B531304968/' },
        { text: 'A December 2025 guest celebrated finishing a project with friends from Germany at the long counter, with each dish explained in English.', source: R + 'B519252006/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町南側 祇園甲部歌舞練場前、祇園四条駅から徒歩5分、花見小路を入って歌舞練場の正面、月・火・木〜日 18:00〜22:00 (L.O.19:30)、水曜休み、予約可、2026年11月1日〜12月8日はサービス料10%、38席 (1階カウンター14、個室1、2階テーブル)、個室1・半個室2、禁煙、Wi-Fi、子ども可・キッズメニュー、カード可、月替わりの季節のコース、伝統と新しい技法、かまどのご飯とお造りを目の前で。口コミ (2025年12月〜2026年8月、英語): 柚子釜、白味噌のお椀、八寸、しらすと明太子の土鍋ご飯、ちりめん山椒と卵黄の丼、3種から選ぶ炊き込みご飯、毛蟹、鱧、ひらめ、牡蠣、鮎寿司、鴨、英語で料理の説明、ミラノで京懐石を開いた元料理人の話、数十年ぶりでも変わらない。',
      confidence: 'medium', sources: [TB, R + 'B458450892/', R + 'B500533229/', R + 'B519252006/', R + 'B521380765/', R + 'B523486199/', R + 'B525307259/', R + 'B531304968/', R + 'B532973253/', R + 'B534292517/', R + 'B534737513/'] },
    cultural_comfort: { level: 'english', note: 'Dishes explained in English (2025–2026 reviews); book ahead; 10% service 1 Nov–8 Dec 2026; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側 祇園甲部歌舞練場前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a service-charge notice for November–December 2026; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001787, 135.774576); the address has no lot (祇園甲部歌舞練場前) and GSI matches only 京都府京都市東山区祇園町南側, so loc_precise false; kyoto_sottaku_tsukamoto_gion is 27 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523486199/', R + 'B534292517/'],
    price_note: 'No menu prices read; bills about ¥15,000–20,000 (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Monthly kaiseki course', '', 'Course', 'ask', 'no', '', 'course'),
      it('', '', 'Clay-pot rice (choice of three)', '', 'Course dish', 'ask', 'no', 'June 2026.', 'donabe'),
    ] }, {
    cuisine: '伝統と新しい技法の、月替わりの懐石コース。かまどのご飯とお造りを目の前で (食べログ)・例: 柚子釜、白味噌のお椀、八寸、しらすと明太子の土鍋ご飯 (2026年1月)、ちりめん山椒と卵黄の丼 (2026年1月)、3種から選ぶ炊き込みご飯 (2026年6月)、Hokkaido の毛蟹と白瓜、Awaji の鱧、柚子の素麺、Awaji のひらめと Tsushima のいか、Tokushima の岩牡蠣、鮎寿司、鴨、赤だし (2026年8月)・食前酒は毎回変わる (2026年7月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '花見小路、祇園甲部歌舞練場の正面。祇園四条駅から徒歩5分',
    gf_detail: '要確認。だし、白味噌と赤味噌、醤油系のたれ、土鍋ご飯の月替わりの懐石コース。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、牡蠣、鴨、だしの懐石コース (2025〜2026年の口コミ)。',
    notes: '[懐石・花見小路、歌舞練場の正面] 花見小路で祇園甲部歌舞練場に面した老舗の懐石の店。1階はカウンター14席で、お造りやかまどのご飯の支度を目の前で見られ、2階に個室。月替わりのコースは1万5千〜2万円ほどで、締めはちりめん山椒や、しらすと明太子などから選ぶ土鍋ご飯。ゆったり温かな接客で、英語で料理の説明もある。祇園にしては手頃という声。2026年11月1日〜12月8日はサービス料10%。水曜休み。',
  });
}

save();
