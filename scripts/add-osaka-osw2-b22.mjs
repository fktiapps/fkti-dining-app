// Osaka sweep (2-mile circle around Dotonbori), core leftovers — worker osw2, batch 22 (lane: Tabelog id mod 4 = 1).
//   + 洋食&カフェ さかえ Cafe Sakae (Nipponbashi yoshoku café of over 70 years: ¥1,400 strip-loin steak and ebi-fry lunch; cash only)
//   + Cafe&Bar BACCANO (all-day café, Italian dining and bar on the APA Hotel & Resort Osaka Namba Ekimae Tower ground floor)
//   + おやじ最後の握り 心斎橋店 Oyaji Saigo no Nigiri Shinsaibashi (sushi izakaya with horse sashimi, open late)
//   + Monsieur Dior by Anne-Sophie Pic (French restaurant on the 4th floor of House of Dior Shinsaibashi, opened May 2026)
//   Skipped (core, lane order):
//   - 元祖 串しゃぶ専門店 まつたけ 心斎橋店 27134965 — same-concept branch of a brand in data: osaka_matsutake_kushishabu_doyama
//     ("元祖 串しゃぶ専門店 まつたけ 堂山店").
//   Chain and concept checks:
//   - おやじ最後の握り 心斎橋店: osw5 drafted 北新地 おやじ最後の握り 極 (osaka_oyaji_saigo_no_nigiri_kiwami_kitashinchi), cuisine "Sushi and
//     seasonal dishes at a tatami counter, with courses or à la carte". 心斎橋店 is a different format: a sushi izakaya (Tabelog
//     categories Sushi, Seafood, Izakaya) open from 17:00 into the night, with horse-meat dishes, e-cigarettes allowed and a separate
//     別邸 nearby for groups. Drafted as a sister concept per the coordinator's note; FLAGGED.
//   - Cafe Sakae: one shop (Tabelog; reviews).
//   - BACCANO: one shop, in an APA hotel (Tabelog); the official site gave no readable text.
//   - Monsieur Dior: the Japanese 「Monsieur Dior」 restaurant of House of Dior Shinsaibashi (dior.com); an October 2026 diner says
//     Anne-Sophie Pic also has places in Ginza and Daikanyama, of other names. None in data.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27134965', 'Chain in data: 元祖 串しゃぶ専門店 まつたけ is in data as osaka_matsutake_kushishabu_doyama (same concept).');

// ================================================================ さかえ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27089061/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_cafe_sakae_nipponbashi', name: 'さかえ (Cafe Sakae)', category: 'OMNI',
    lat: 34.665096, lng: 135.50621, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the set meals pair steak or hamburg with breaded fried shrimp and fried pumpkin and sweet potato (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, pork, chicken and fried-shrimp set meals.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00; closed Sunday; often closes before last order (Tabelog). No reservations. Cash only, paid after eating (Tabelog; October 2026 review). Smoking allowed (Tabelog). Self-service coffee, free refills (August 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-4-15 — 3 min from Nippombashi Stn (subway and Kintetsu)',
    cuisine: 'Old-style yoshoku café lunch: strip-loin steak and fried-shrimp set ¥1,400 (limited to 50), pork tenderloin, grilled chicken or wagyu hamburg each with fried shrimp ¥1,000, served with rice, miso soup, salad and fried pumpkin and sweet potato; large rice +¥100; self-service coffee (2026 reviews)',
    website: TB, gmaps: gm('喫茶 さかえ 日本橋'), menu_url: TB,
    notes: "[Yoshoku · Nipponbashi, steak-and-ebi-fry lunch for ¥1,400] A nostalgic yoshoku café near Nippombashi Station, said by a 2026 diner to be over 70 years old, open only for lunch. The draw is the ¥1,400 strip-loin steak with fried shrimp (limited to 50 a day), which diners call tender, served with bean sprouts, salad and fried pumpkin and sweet potato, and ¥1,000 sets of hamburg or pork with fried shrimp; coffee is self-service. It can be full at noon, and Tabelog warns it often closes before last order. Cash only; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (reviews)'], origin: null, background: 'An October 2026 diner calls Sakae a long-standing Western-style restaurant established over 70 years ago. Tabelog notes it often closes before last order.', philosophy: null, specialty: 'Strip-loin steak and fried shrimp set.',
      anecdotes: [
        { text: '"Established over 70 years ago, Sakae is a long-standing Western-style restaurant in Nipponbashi, Osaka." — October 2026.', source: R + 'B537809457/' },
        { text: '"I heard that coffee is self-service and available for all you can drink." — August 2026.', source: R + 'B535004550/' },
        { text: '"The shrimp tempura was a bit thin and lacked a strong shrimp flavor" — October 2026.', source: R + 'B538211923/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): さかえ (Cafe Sakae)、日本橋2-4-15、日本橋駅・近鉄日本橋駅から徒歩3分、月〜土・祝11:00〜15:00、日曜休み、ラストオーダー前に閉まることが多い、予約不可、現金のみ、喫煙可、喫茶・洋食・ラーメン。口コミ (2026年8月〜10月): 創業70年以上の洋食店という声、サーロインステーキとエビフライ1,400円 (50食限定)、ヘレ・チキン・和牛ハンバーグとエビフライ各1,000円、大盛り100円、かぼちゃとさつまいものフライ、もやし、サラダ、味噌汁付き、柔らかいステーキ、セルフのコーヒーはおかわり自由、後払いの現金のみ、昼は満席、エビフライが細いという声。',
      confidence: 'medium', sources: [TB, R + 'B535004550/', R + 'B535237552/', R + 'B536046690/', R + 'B536884392/', R + 'B537564817/', R + 'B537668196/', R + 'B537809457/', R + 'B538074872/', R + 'B538089891/', R + 'B538211923/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A September 2026 diner found the menu tailored to Japanese customers. No English menu found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-4-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目4番15号 (go) 1m. Nearest record (osaka_manryo_nipponbashi, "…日本橋2-5-5") is about 30 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536046690/', R + 'B538089891/'],
    price_note: 'No Tabelog menu; prices from 2026 reviews, tax included. Cash only. Diners report ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Strip-loin steak and fried shrimp set (50 a day)', '¥1,400', 'Lunch', 'no', 'no', 'October 2026.', 'steak_ebifry'),
      it('', '', 'Wagyu hamburg with fried shrimp', '¥1,000', 'Lunch', 'no', 'no', 'September 2026.', 'hamburg_ebifry'),
      it('', '', 'Pork tenderloin with fried shrimp', '¥1,000', 'Lunch', 'no', 'no', 'September 2026.', 'hire_ebifry'),
    ] }, {
    cuisine: '昔ながらの洋食喫茶のランチ: サーロインステーキとエビフライ1,400円 (50食限定)、ヘレ、チキン、和牛ハンバーグとエビフライ各1,000円、ご飯、味噌汁、サラダ、かぼちゃとさつまいものフライ付き、大盛り100円、セルフのコーヒー (2026年の口コミ)',
    neighborhood: '日本橋2-4-15。日本橋駅 (地下鉄、近鉄) から徒歩3分',
    gf_detail: 'グルテンフリーではありません。ステーキやハンバーグに衣のエビフライとかぼちゃ・さつまいものフライの定食 (口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、豚、鶏、エビフライの定食。',
    notes: '[洋食・日本橋、1,400円のステーキとエビフライ] 日本橋駅近くの懐かしい洋食喫茶で、2026年の客は創業70年以上と書く。営業は昼のみ。目当ては50食限定の1,400円のサーロインステーキとエビフライで、客は柔らかいと書き、もやし、サラダ、かぼちゃとさつまいものフライ付き。ハンバーグや豚とエビフライの1,000円のセットも。コーヒーはセルフ。昼は満席になることがあり、食べログはラストオーダー前に閉まることが多いと注意。現金のみ、喫煙可。',
  });
}

// ================================================================ Cafe&Bar BACCANO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27145093/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://cafe-bar-baccano.com';
  const H = day(['07:00', '23:00']);
  put({
    id: 'osaka_cafe_bar_baccano_minatomachi', name: 'Cafe&Bar BACCANO', category: 'OMNI',
    lat: 34.666231, lng: 135.495774, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten-free label; a June 2026 diner found options for those watching carbs or gluten (Greek yogurt, salad bowls) beside the sandwiches; lunch and dinner are Italian with pizza and pasta (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; breakfast sets carry egg and bacon.',
    hours_raw: 'Daily 7:00–23:00: breakfast 7:00–11:00, lunch 11:00–17:00, dinner 17:00–23:00, bar menu 21:30–23:00; happy hour daily from 16:00 (Tabelog). Reservations taken. Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay. Orders by QR or mobile (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minatomachi 1-2-13, APA Hotel & Resort Osaka Namba Ekimae Tower 1F (Naniwa-ku) — 1 min from JR Namba east exit and OCAT',
    cuisine: 'All-day café and Italian dining: breakfast of the classic bacon-and-egg sandwich plate, egg sandwich (16 a day), açaí bowl; lunch and dinner Italian with seasonal plans (truffle, porcini, purple sweet potato in autumn 2026); waffles and desserts; coffee; a summer beer-hall plan (Tabelog menu, April 2026; reviews)',
    website: SITE, gmaps: gm('Cafe&Bar BACCANO なんば'), menu_url: M,
    notes: "[Café · Minatomachi, all-day café in an APA hotel] A café, Italian dining room and bar on the ground floor of the APA Hotel & Resort Osaka Namba Ekimae Tower, opened in December 2024 and open from 7 AM to 11 PM. Breakfast sandwiches suit hotel guests and night-bus arrivals; afternoons bring waffles and happy hour, evenings Italian plates and a bar menu. Diners in 2026 call it calm and quiet for a hotel café and note many customers from abroad; one had no complaints except the silent service.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, an all-day dining café with seasonal plans and a daily happy hour from 4 PM, opened 2 December 2024 inside the APA Hotel & Resort tower.', philosophy: null, specialty: 'Breakfast sandwiches; all-day café.',
      anecdotes: [
        { text: '"After returning to Namba early in the morning by overnight bus, I visited this cafe since it opens at 7 AM for breakfast." — October 2026, egg sandwich set ¥1,240.', source: R + 'B536813402/' },
        { text: '"I have no complaints except for the service." — October 2026.', source: R + 'B538165730/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): Cafe&Bar BACCANO、浪速区湊町1-2-13 アパホテル&リゾート 大阪なんば駅前タワー 1F、JR難波駅東口・OCATから徒歩1分、2024年12月2日オープン、毎日7:00〜23:00 (朝7〜11時、昼11〜17時、夜17〜23時、21:30からバーメニュー)、毎日16時からハッピーアワー、秋はトリュフ、ポルチーニ、紫芋のプラン。メニュー (2026年4月): クラシックなベーコンエッグサンド1,100円、アサイーボウル、16食限定のたまごサンド。口コミ (2026年5月〜10月): ホテルの1階、朝7時から、たまごサンドとコーヒーのセット1,240円、QRコード・モバイル注文、ワッフル、ビアホールのプラン、外国からの客が多い、サービス以外は満足という声。',
      confidence: 'medium', sources: [TB, M, R + 'B510826516/', R + 'B527916602/', R + 'B530512488/', R + 'B530833906/', R + 'B532096691/', R + 'B533107006/', R + 'B534646593/', R + 'B536813402/', R + 'B537918117/', R + 'B538165730/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many customers from abroad (October 2026); orders by QR or mobile. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区湊町1-2-13 アパホテル&リゾート 大阪なんば駅前タワー 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an autumn 2026 plan; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (kept: on the hotel tower's ground floor; GSI 大阪府大阪市浪速区湊町一丁目2番13号 (go) gives the lot point 63 m away). Nearest record (osaka_teppanyaki_kobe_monterey_grasmere, "…湊町1-2-3") is about 51 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B536813402/'],
    price_note: 'Tabelog menu last updated April 2026, tax included. Diners report under ¥1,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'Classic bacon-and-egg sandwich plate', '¥1,100', 'Breakfast', 'no', 'no', 'With salad, soup and yogurt.', 'bacon_egg_sandwich'),
      it('', '', 'Egg sandwich and coffee set (16 a day)', '¥1,240', 'Breakfast', 'no', 'no', 'October 2026 review.', 'egg_sandwich'),
      it('', '', 'Açaí bowl (mango and berry)', '', 'Breakfast', 'ask', 'ask', '', 'acai_bowl'),
    ] }, {
    cuisine: '一日中のカフェとイタリアン: 朝はクラシックなベーコンエッグサンドのプレート、16食限定のたまごサンド、アサイーボウル。昼と夜はイタリアンと季節のプラン (2026年秋はトリュフ、ポルチーニ、紫芋)、ワッフルとデザート、コーヒー、夏のビアホールプラン (食べログのメニュー、2026年4月、口コミ)',
    neighborhood: '浪速区湊町1-2-13 アパホテル&リゾート 大阪なんば駅前タワー 1F。JR難波駅東口・OCATから徒歩1分',
    gf_detail: '要確認。グルテンフリーの表示はなし。2026年の客はサンドのほかに糖質やグルテンを控える人向けの選択肢 (ギリシャヨーグルト、サラダボウル) があったと書く。昼と夜はピザやパスタのイタリアン (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、朝のセットは卵とベーコン入り。',
    notes: '[カフェ・湊町、アパホテルの一日中のカフェ] アパホテル&リゾート 大阪なんば駅前タワーの1階、2024年12月オープンのカフェ、イタリアン、バーで、朝7時から夜11時まで。朝のサンドはホテルの宿泊客や夜行バスで着いた人向き、午後はワッフルとハッピーアワー、夜はイタリアンとバーメニュー。2026年の客はホテルのカフェらしく静かで落ち着くと言い、外国からの客が多いと書く。黙って配膳するサービス以外は満足という声も。',
  });
}

// ================================================================ おやじ最後の握り 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27127757/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_oyaji_saigo_no_nigiri_shinsaibashi', name: 'おやじ最後の握り 心斎橋店 (Oyaji Saigo no Nigiri Shinsaibashi ten)', category: 'OMNI',
    lat: 34.674355, lng: 135.50293, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi, sashimi and horse sashimi sit beside tempura, croquettes and chawanmushi in the courses (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and horse-meat izakaya.',
    hours_raw: 'Normally daily 17:00–03:00 (last order 02:30); from 16 September 2026 hours changed to 17:00–23:00, with updates promised (Tabelog). Reservations taken; 2-hour limit when busy (Tabelog). 10% service charge and ¥600 table charge (Tabelog). Cards, transport IC and other e-money, PayPay, d Barai, Rakuten Pay, au PAY. Counter with sunken seating, a tatami private room for up to 4 (¥1,500) and a semi-private room for 8; e-cigarettes allowed at all seats; children welcome; shoes off (Tabelog; October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-8, 日宝プロムナード心斎橋 1F — 3 min from Shinsaibashi Stn exit 5',
    cuisine: 'Sushi izakaya: nigiri by the piece (fatty tuna, kuruma-ebi, live kue, Himi yellowtail, sea urchin), red-vinegar rice, horse meat sent from Kumamoto (sakura basashi, horse tendon, smoked horse, horse croquette); courses such as "Heart" and "Kokoro" (¥5,000) with appetizers, sashimi, tempura, chawanmushi and five nigiri (Tabelog menu, August 2026; reviews) · whisky and sake',
    website: TB, gmaps: gm('おやじ最後の握り 心斎橋'), menu_url: M,
    notes: "[Sushi · Higashi-Shinsaibashi, sushi izakaya into the night] A casual sushi izakaya in Higashi-Shinsaibashi, opened in January 2022, where you take off your shoes and sit at a sunken counter while the 'Oyaji' chef makes red-vinegar nigiri; Kumamoto horse sashimi is a second specialty. It normally stays open until 3 AM, though hours were cut to 23:00 from mid-September 2026. Diners in 2026 like the late hours, the sea-urchin starters (Nemuro and Rishiri) and the warm send-off, and one diner was full from the small dishes before reaching the sushi; a separate 別邸 nearby takes groups. It is a different, more casual format from the brand's 北新地 おやじ最後の握り 極.",
    chef_bio: { chef_name: null, roles: ['Head chef ("Oyaji") unnamed (reviews)'], origin: null, background: 'Per Tabelog, the shop sends groups and private parties to its 別邸 a minute away, which has rooms for up to 15 and horse-meat dishes; opened 15 January 2022. Per Tabelog, the rice uses red vinegar and is served in small, firm portions; horse meat is sent from Kumamoto. Diners watch the "Oyaji" chef at the counter and mention a warm send-off.', philosophy: null, specialty: 'Late-night sushi; Kumamoto horse sashimi.',
      anecdotes: [
        { text: '"It\'s great that I can sit down and enjoy sushi even late at night." — September 2026.', source: R + 'B535427629/' },
        { text: '"It\'s quite rare these days to find a restaurant where you take off your shoes." — October 2026.', source: R + 'B537308422/' },
        { text: '"Although the portions were small, we ordered a lot and ended up feeling full, leaving little room for sushi." — August 2026.', source: R + 'B534480254/' },
        { text: '"While I enjoyed the upscale atmosphere of the restaurants in Kitashinchi, this izakaya offers a more casual way to savor sushi." — September 2026.', source: R + 'B535719132/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): おやじ最後の握り 心斎橋店、東心斎橋1-19-8 日宝プロムナード心斎橋 1F、心斎橋駅5番出口から徒歩3分、2022年1月15日オープン、通常は毎日17:00〜翌3:00、2026年9月16日から17:00〜23:00に変更、サービス料10%、お通し600円、全席電子たばこ可、子ども歓迎、座敷の個室 (4名、1,500円)、掘りごたつの半個室 (8名)、団体や貸切は1分の別邸へ (15名までの個室、馬肉料理)。メニュー (2026年8月): Kumamoto 直送の桜馬刺し、馬すじ、燻製の馬肉、馬肉コロッケ、にぎり (大とろ、中とろ、車海老、活くえ、氷見のぶり、うに)。口コミ (2026年8月〜10月): ハートコースや心コース (5,000円、前菜、刺身3種、天ぷら、にぎり5貫)、根室と利尻のうにの前菜、赤酢のシャリ、靴を脱ぐ、遅くまで開いている、最後まで見送ってくれる温かさ、北新地の店より気軽という声、小皿は量が少なめだが重ねると満腹。',
      confidence: 'medium', sources: [TB, M, R + 'B534480254/', R + 'B534636365/', R + 'B534875553/', R + 'B535427629/', R + 'B535437141/', R + 'B535719132/', R + 'B535777299/', R + 'B536335350/', R + 'B537308422/', R + 'B538015340/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off at the counter (October 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-8 日宝プロムナード心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a September 2026 notice and an August 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番8号 (go) 16m. Nearest records (osaka_stand_catenaccio_higashishinsaibashi and osaka_shinsaibashi_kawaguchi, both "…東心斎橋1-19-11", a different building) are about 23–25 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated August 2026, tax included; 10% service charge and ¥600 table charge. Diners report ¥3,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Sakura basashi (Kumamoto horse sashimi)', '¥2,980', 'Horse meat', 'ask', 'no', '', 'basashi'),
      it('', '', 'Fatty tuna nigiri, one piece', '¥980', 'Nigiri', 'ask', 'no', '', 'otoro'),
      it('', '', 'Live kue nigiri, one piece', '¥680', 'Nigiri', 'ask', 'no', '', 'kue'),
      it('', '', 'Horse-meat croquette', '¥780', 'Horse meat', 'no', 'no', '', 'horse_croquette'),
    ] }, {
    cuisine: '寿司居酒屋: 一貫ずつのにぎり (大とろ、車海老、活くえ、氷見のぶり、うに)、赤酢のシャリ、Kumamoto 直送の馬肉 (桜馬刺し、馬すじ、燻製の馬肉、馬肉コロッケ)、前菜、刺身、天ぷら、茶碗蒸し、にぎり5貫のハートコースや心コース (食べログのメニュー、2026年8月、口コミ)・ウイスキーと日本酒',
    neighborhood: '東心斎橋1-19-8 日宝プロムナード心斎橋 1F。心斎橋駅5番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。寿司、刺身、馬刺しのほか、コースには天ぷら、コロッケ、茶碗蒸しもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。寿司と馬肉の居酒屋。',
    notes: '[寿司・東心斎橋、夜遅くまでの寿司居酒屋] 東心斎橋の気軽な寿司居酒屋で、2022年1月オープン。靴を脱いで掘りごたつのカウンターに座り、「おやじ」が赤酢のにぎりを握る。Kumamoto の馬刺しももう一つの名物。通常は朝3時まで開くが、2026年9月半ばから23時までに短縮。2026年の客は遅くまで開いていること、うにの前菜、最後まで見送る温かさを褒め、小皿を重ねて寿司の前に満腹になったという声も。団体は近くの別邸へ。北新地の おやじ最後の握り 極 とは違う、より気軽な形の店。',
  });
}

// ================================================================ Monsieur Dior by Anne-Sophie Pic
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27156193/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.dior.com/ja_jp/fashion/boutique/house-of-dior-shinsaibashi/monsieur-dior-osaka-restaurant';
  const H = day(['11:30', '15:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_monsieur_dior_shinsaibashi', name: 'Monsieur Dior by Anne-Sophie Pic', category: 'OMNI',
    lat: 34.674698, lng: 135.500732, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information on the menu; the restaurant asks guests to state allergies and any ingredients to avoid when booking (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: courses are set by the kitchen; dietary needs are taken at booking (Tabelog). No vegan course is described.',
    hours_raw: 'Wed–Sun, holidays and the day before a holiday 11:30–15:00 (last food order 13:30) and 18:00–22:30 (last food order 20:00); closed Monday, Tuesday and the day after a holiday (Tabelog). Reservations taken; state allergies and message-plate requests when booking (Tabelog). 15% service charge (Tabelog). Cards (incl. UnionPay); no e-money or QR. Entrance through the boutique or a private entrance and lift (October 2026 reviews).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-9-17, House of Dior Shinsaibashi 4F — a short walk from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'French haute cuisine by Anne-Sophie Pic, "the most awarded female chef in Michelin history", reinterpreting Dior codes for this location, in a garden-inspired room by architect Peter Marino (Tabelog) · seasonal lunch courses (three or five courses, dishes chosen from appetizer to dessert) and dinner courses; tableware in the Dior style (reviews)',
    website: SITE, gmaps: gm('Monsieur Dior 心斎橋'), menu_url: TB,
    notes: "[French · Shinsaibashi, Anne-Sophie Pic at House of Dior] The restaurant on the 4th floor of House of Dior Shinsaibashi, opened in May 2026, with menus by Anne-Sophie Pic in a garden-inspired room by Peter Marino, Dior tableware throughout. Diners in October 2026 praise the elegant, feminine plates, the seasonal courses and the attentive staff; lunch courses were ¥14,000 and ¥17,000 in September 2026, and diners report ¥10,000–59,999 a head, plus a 15% service charge. The entrance is hard to find: ask at the boutique, which will escort you, or use the private entrance and lift.",
    chef_bio: { chef_name: 'Anne-Sophie Pic', roles: ['Menu creator (Tabelog)'], origin: null, background: 'Per Tabelog, the menu is crafted by Anne-Sophie Pic, "the most awarded female chef in Michelin history", who reinterprets the Dior codes for this location; the space by architect Peter Marino pays tribute to the garden. An October 2026 diner says Pic opened here after Ginza and Daikanyama; a September 2026 diner came on a Club Hiramatsu invitation.', philosophy: '"Haute cuisine by a star chef, inspired by Dior\'s aesthetics" (Tabelog).', specialty: 'Seasonal French courses.',
      anecdotes: [
        { text: '"I was able to select each dish from appetizers to dessert, which was a delightful feature." — October 2026, five-course lunch.', source: R + 'B537569228/' },
        { text: 'An October 2026 diner found the entrance hard to find and was escorted from the boutique to the restaurant.', source: R + 'B538518475/' },
        { text: '"The interior truly reflects the essence of Dior." — October 2026.', source: R + 'B537791609/' },
        { text: '"I visited Monsieur Dior, which opened in May this year, for the second time." — September 2026.', source: R + 'B532674836/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。dior.com: ハウス オブ ディオール 心斎橋のムッシュ ディオール レストラン (公式ページ)。食べログ (英語版): Monsieur Dior by Anne-Sophie Pic、心斎橋筋1-9-17 ハウス オブ ディオール 心斎橋 4F、心斎橋駅から徒歩すぐ、2026年5月21日オープン、水〜日・祝・祝前日11:30〜15:00 (料理L.O.13:30)・18:00〜22:30 (料理L.O.20:00)、月・火・祝翌日休み、サービス料15%、アレルギーやメッセージプレートは予約時に、Anne-Sophie Pic のメニュー、建築家 Peter Marino の庭をたたえる空間。口コミ (2026年9月〜10月): 秋のメニュー、3品と5品のランチ (2026年9月に14,000円と17,000円)、上品で女性らしい盛り付け、ディオールの器、スタッフの対応、ブティックで聞くと入口まで案内、専用の入口とエレベーター、Club Hiramatsu の招待、Ginza と Daikanyama に続く店という声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B532674836/', R + 'B535988522/', R + 'B536961837/', R + 'B537111329/', R + 'B537569228/', R + 'B537791609/', R + 'B537807706/', R + 'B538026720/', R + 'B538340096/', R + 'B538518475/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff escort guests from the boutique (October 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-9-17 ハウス オブ ディオール 心斎橋 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official dior.com restaurant page and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目9番17号 (go) 16m. Nearest record (osaka_sushi_okazaki_shinsaibashi, "…心斎橋筋1-10-12", a different building) is about 22 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535988522/', R + 'B537569228/'],
    price_note: 'No Tabelog menu; a September 2026 diner reports lunch courses of ¥14,000 and ¥17,000 (raised from ¥12,000 and ¥15,000). Tabelog budget: lunch ¥15,000–19,999, dinner ¥30,000–39,999; 15% service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch course, three courses', '¥14,000', 'Lunch', 'ask', 'ask', 'September 2026 review; a ¥17,000 lunch course also offered.', 'lunch_course'),
    ] }, {
    cuisine: 'Anne-Sophie Pic によるフランス料理で、この店のためにディオールのコードを解釈し直したメニュー、建築家 Peter Marino の庭をたたえる空間 (食べログ)・前菜からデザートまで選べる3品や5品の季節のランチコースとディナーコース、ディオールらしい器 (口コミ)',
    neighborhood: '心斎橋筋1-9-17 ハウス オブ ディオール 心斎橋 4F。心斎橋駅 (御堂筋線) からすぐ',
    gf_detail: '要確認。メニューにグルテンの情報なし。アレルギーや食べられない食材は予約時に伝えるよう案内 (食べログ)。',
    vegan_detail: '要確認。コースは店が決める。食事の制限は予約時に伝える (食べログ)。ヴィーガンのコースの説明はない。',
    notes: '[フレンチ・心斎橋、ハウス オブ ディオールの Anne-Sophie Pic] ハウス オブ ディオール 心斎橋の4階、2026年5月オープンのレストランで、Anne-Sophie Pic のメニューを Peter Marino が手がけた庭のような空間で、器もディオール。2026年10月の客は上品で女性らしい皿、季節のコース、気配りのあるスタッフを褒める。ランチのコースは2026年9月に14,000円と17,000円で、客の支払いは1人10,000〜59,999円、サービス料15%。入口はわかりにくく、ブティックで聞くと案内してくれるか、専用の入口とエレベーターから。',
  });
}

save();
