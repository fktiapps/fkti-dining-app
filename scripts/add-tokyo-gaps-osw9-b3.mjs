// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 3.
//   + 六本木 かき心 Roppongi Kakishin (oyster specialist open to 4 am, ten years old in June 2026)
//   + 瓢嘻 六本木店 Hyoki Roppongi (Kyoto-style dashi shabu-shabu kaiseki, all private rooms; vegan courses offered)
//   + 天駆 Amakakeru (10-seat counter: à la carte creative Japanese, "more than an izakaya, less than kaiseki")
//   + 花郷 六本木店 Hanasato Roppongi (Yonezawa beef teppanyaki and Kyoto cuisine, 80 seats with garden rooms)
//   Chain check. Kakishin: one listing; its own site (kakishin.jp) did not respond on 2026-11-01. Hyoki: Gurunavi also lists
//   京都 瓢嘻 京橋店 and 京都 瓢嘻 西麻布店 — a small group, none in data. Amakakeru: one listing. Hanasato: the official site
//   (steak-hanasato.jp) lists two shops, 六本木店 and 祇園店; neither is in data/tokyo.json or data/kyoto.json.
//   None is in data/tokyo.json by name, Tabelog id or address (六本木3-10-11, 6-7-7, 7-14-16, 4-2-35). Nearest records:
//   Kakishin 47 m from tokyo_kyushu_satsuki_roppongi (different building, 3-11-10); Amakakeru 54 m from
//   tokyo_wagyu_yakiniku_tanjiro_roppongi (7-14-11, a different building from 7-14-16). Tabelog URLs copied from each
//   listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 六本木 かき心
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13196031/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '04:00']);
  put({
    id: 'tokyo_kakishin_roppongi', name: '六本木 かき心 (Roppongi Kakishin)', category: 'OMNI',
    lat: 35.66355, lng: 139.733414, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The signature is fried oysters in a coarse batter, the hot pot is a miso dote-nabe, and oyster rice has come with a shark-fin sauce (2026 reviews). Raw oysters with lemon or ponzu and salt-grilled fish are the plainest dishes; ponzu usually contains soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster house; courses add sashimi, Matsusaka beef and chicken.',
    hours_raw: 'Mon–Sat 18:00–04:00; closed Sundays and public holidays (Tabelog). Tables and private rooms go first to parties of three or more, and private rooms only to those ordering the omakase course (Tabelog). Busy late in the evening; book early (June 2026 review). 20 seats: counter, tables and private rooms for 2, 4 or 6, including a closed room with a sofa (Tabelog). Non-smoking; a September 2025 diner understood e-cigarettes were allowed only in the private rooms. No cover charge. Cards; no e-money or QR. A free whole cake for birthdays and anniversaries (2026 reviews). Opened 1 June 2016 (Tabelog); ten years old in June 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-10-11, 青木ビル B1F — 30 seconds from Roppongi Stn exit 5 (Oedo line), 1 min from exit 3 (Hibiya line)',
    cuisine: 'Oyster specialist with Matsusaka beef (Tabelog, tax included, read November 2026) · omakase of classics and the day\'s best, 9 dishes ¥16,500 (the most popular) · course with the "ultimate fried oysters" and an oyster and Matsusaka-beef hot pot ¥14,300 · fried oysters, two kinds of grilled oysters and an oyster dote-nabe with Saga Mitsuse chicken ¥11,000 · raw oysters chosen by season and region, e.g. Iwate (June 2026), Ehime (July 2026), Hokkaido (October 2026), served with lemon; the "ultimate fried oysters" breaded and fried to order, with salt and ponzu instead of tartare; grilled oysters plain or in a cream sauce; miso dote-nabe with fried tofu; oyster rice, in June 2026 with shark-fin sauce · also tuna, sea bream, scallop sashimi, salt-grilled ayu (summer), sanma and matsutake (autumn), A5 Matsusaka beef, watermelon to finish (summer) · sake and wine',
    website: 'http://kakishin.jp/', gmaps: gm('六本木 かき心 六本木3-10-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Oysters · Roppongi, an oyster specialist open till 4 am] In a basement 30 seconds from Roppongi Station, a 20-seat oyster house that turned ten in June 2026 and stays open until 4 am six nights a week. The shop says its owner comes from a long-established shop in Hiroshima and picks oysters by season and region (Iwate, Ehime, Hokkaido in 2026), along with A5 Matsusaka beef. The famous dish is the \"ultimate fried oysters\", breaded and fried to order and served with salt and ponzu rather than tartare; a Hiroshima-born diner in July 2026 called them the world's best. Most come for the ¥16,500 omakase — raw, grilled and fried oysters, sashimi, Matsusaka beef, a miso dote-nabe or oyster hot pot and oyster rice — and one diner was told when booking to come hungry. The walls carry celebrity autographs (a TV station is nearby, one diner noted), a regular praises the friendly owner, a June 2026 diner the manager who stayed for a drink, and birthdays get a free whole cake. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources read)'], origin: 'The owner comes from a long-established shop in Hiroshima (Tabelog shop text)',
      background: 'Per the Tabelog shop text: the owner, from a long-established shop in Hiroshima, selects seasonal oysters and Matsusaka beef; the staff have a background in event hosting; featured on the cover of a 2017 "adult banquet" guide. Opened 1 June 2016 (Tabelog; a June 2018 review marks the 2nd anniversary). Regulars in November 2025 and June 2026 mention a friendly owner and a manager who sat down for a drink with the table.',
      philosophy: 'To be the best oyster restaurant in Tokyo (Tabelog shop text).', specialty: '"Ultimate fried oysters"; oyster dote-nabe; oyster rice.',
      anecdotes: [
        { text: '"Instead of the usual tartar sauce, they are served with \'salt and ponzu,\' enhancing the natural flavors." — June 2026, omakase.', source: R + 'B355247075/' },
        { text: '"As someone from Hiroshima who is picky about oysters, I can confirm they were indeed delicious! They coat the oysters and fry them on the spot." — July 2026.', source: R + 'B531853249/' },
        { text: '"When I called to make the reservation, they mentioned, \'It’s quite filling, so come hungry!\'" — June 2026, ¥16,500 omakase.', source: R + 'B531218365/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 六本木 かき心、港区六本木3-10-11 青木ビルB1F、大江戸線六本木駅5番出口から約30秒、月〜土18:00〜翌4:00、日・祝休み、20席、個室 (2・4・6名)、禁煙、チャージなし、カード可、2016年6月1日オープン。店の紹介: 東京一の牡蠣料理店をめざす、Hiroshima の老舗出身のオーナーが旬の牡蠣とMatsusaka の牛肉を厳選。コース: おまかせ9品16,500円、「究極のカキフライ」と牡蠣とMatsusaka の牛肉の鍋14,300円、カキフライと焼き牡蠣2種と牡蠣の土手鍋11,000円。口コミ(2025年9月〜2026年10月): 生牡蠣、塩とポン酢のカキフライ、牡蠣のふかひれあんかけご飯、鮎の塩焼き、本鮪、10周年、有名人のサイン、誕生日にホールケーキ、気さくなオーナー、朝4時まで。',
      confidence: 'medium', sources: [TB, R + 'B355247075/', R + 'B514684997/', R + 'B517078462/', R + 'B524125439/', R + 'B526211544/', R + 'B530411235/', R + 'B530515941/', R + 'B531218365/', R + 'B531853249/', R + 'B531885796/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses make ordering easy; no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-10-11 青木ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. The shop\'s own site did not respond on 2026-11-01.' },
    pin_source: `Tabelog ${TB} (35.663550, 139.733414); GSI 東京都港区六本木三丁目10番 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B355247075/'],
    price_note: 'Course prices from Tabelog (tax included; read November 2026). Raw oysters à la carte at market price (June 2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 9 dishes', '¥16,500', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'omakase'),
      it('', '', 'Course with "ultimate fried oysters" and oyster and Matsusaka-beef hot pot, 8 dishes', '¥14,300', 'Course', 'no', 'no', 'Tabelog.', 'course_14300'),
      it('', '', 'Fried oysters, two grilled oysters and oyster dote-nabe with Saga Mitsuse chicken, 8 dishes', '¥11,000', 'Course', 'no', 'no', 'Tabelog.', 'course_11000'),
      it('', '', 'Raw oysters', 'market price', 'Oysters', 'ask', 'no', 'June 2026 review.', 'nama_kaki'),
    ] }, {
    cuisine: '牡蠣の専門店、Matsusaka の牛肉も (食べログ、税込み、2026年11月に確認)・定番とその日のおすすめのおまかせ9品16,500円 (一番人気)・「究極のカキフライ」と牡蠣とMatsusaka の牛肉の鍋のコース14,300円・カキフライ、焼き牡蠣2種、Saga の Mitsuse chicken と牡蠣の土手鍋のコース11,000円・旬と産地で選ぶ生牡蠣、たとえば Iwate (2026年6月)、Ehime (2026年7月)、Hokkaido (2026年10月)、レモン添え。注文を受けてから衣をつけて揚げる「究極のカキフライ」はタルタルの代わりに塩とポン酢で。焼き牡蠣はそのままかクリームソース。厚揚げ入りの味噌の土手鍋。牡蠣ご飯、2026年6月はふかひれのあんかけ・ほかに鮪、鯛、帆立の刺身、鮎の塩焼き (夏)、秋刀魚や松茸 (秋)、A5のMatsusaka の牛肉、締めのすいか (夏)・日本酒とワイン',
    neighborhood: '六本木3-10-11 青木ビルB1F。六本木駅5番出口 (大江戸線) から30秒、3番出口 (日比谷線) から1分',
    gf_detail: '要確認。グルテンフリーの説明はない。名物は粗めの衣のカキフライ、鍋は味噌の土手鍋、牡蠣ご飯にふかひれのあんをかけたことも (2026年の口コミ)。生牡蠣のレモンやポン酢、魚の塩焼きが一番シンプルだが、ポン酢にはふつう醤油が入る。',
    vegan_detail: 'ヴィーガン不可。牡蠣の店で、コースには刺身、Matsusaka の牛肉、鶏も。',
    notes: '[牡蠣・六本木、朝4時まで開く牡蠣の専門店] 六本木駅から30秒のビルの地下、20席の牡蠣の店で、2026年6月に10周年、週6日朝4時まで営業。店によればオーナーは Hiroshima の老舗の出身で、旬と産地で牡蠣を選び (2026年は Iwate、Ehime、Hokkaido など)、A5のMatsusaka の牛肉もそろえる。名物は注文を受けてから衣をつけて揚げる「究極のカキフライ」で、タルタルの代わりに塩とポン酢で食べる。2026年7月には Hiroshima 出身の客が世界一と書いた。多くの客は16,500円のおまかせで、生・焼き・揚げの牡蠣、刺身、Matsusaka の牛肉、味噌の土手鍋か牡蠣の鍋、牡蠣ご飯と続き、予約の電話で「お腹をすかせて来て」と言われた客も。壁には有名人のサインが並び (近くにテレビ局があるからと書いた客も)、常連は気さくなオーナーを、2026年6月の客は一緒に飲んだ店長をほめ、誕生日にはホールケーキのサービスも。日曜・祝日休み。',
  });
}

// ================================================================ 瓢嘻 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13194524/'; const R = TB + 'dtlrvwlst/';
  const GN_KYOBASHI = 'https://r.gnavi.co.jp/ddk4bwz90000/'; const GN_NISHIAZABU = 'https://r.gnavi.co.jp/e809602/';
  const W = day(['12:00', '15:00'], ['18:00', '23:00']); const S = day(['12:00', '15:00'], ['18:00', '22:30']);
  put({
    id: 'tokyo_hyoki_roppongi', name: '瓢嘻 六本木店 (Hyoki Roppongi)', category: 'OMNI',
    lat: 35.662105, lng: 139.732207, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The shop says ingredients can be changed to suit the guest (Tabelog), but nothing is called gluten-free: the shabu-shabu is cooked in a seasoned dashi, the course ends with udon (October 2026), and dishes include grilled mackerel sushi.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The shop says "Ingredients can be changed to suit the customer. Vegan courses are also available" (Tabelog). Book a vegan course in advance; the standard courses are pork or wagyu shabu-shabu in dashi, with fish dishes.',
    hours_raw: 'Mon–Sat 12:00–15:00 and 18:00–23:00; Sun 12:00–15:00 and 18:00–22:30; last booking 13:30 at lunch and 21:30 at dinner (Tabelog). Cashless only — no cash; cards, IC/e-money and QR (PayPay, Alipay, WeChat Pay and others). 10% service charge at all times. One course per person; some courses need advance booking; a two-hour limit may apply when busy; under-school-age children by arrangement; groups of 20+ sign a confirmation (Tabelog). Cancellation fees apply. 58 seats, all in private rooms, the largest for 28; tatami and sunken seats. Heated tobacco in some rooms, plus a covered outdoor smoking area. Opened 6 May 2016 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-7-7, MERCURY六本木 1F–2F, in a lane off the crossing — 2 min from Roppongi Stn exit 3',
    cuisine: 'Kyoto-style "dashi shabu" served as a seasonal kaiseki course, all in private rooms (Tabelog, tax included, read November 2026; 23 courses listed) · pork dashi-shabu course "Yura" ¥6,000 · pork course "Miyamazakura" ¥8,000 · wagyu and pork course "Suimei" ¥10,500 · the shabu-shabu is pork piled with green onion, dipped in dashi (October 2026) · course dishes in 2026: mackerel sushi seared at the table, conger eel, matsutake dobin-mushi (autumn), udon to finish with curry powder to change the flavour, matcha pudding · vegan courses on request · sake list; craft cola and ginger ale in the all-you-can-drink',
    website: null, gmaps: gm('瓢嘻 六本木店 六本木6-7-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Shabu-shabu · Roppongi, Kyoto dashi shabu in private rooms] Tucked in a lane off the Roppongi crossing, a 58-seat restaurant made entirely of private rooms that serves Kyoto-style \"dashi shabu\" as part of a seasonal kaiseki: sweet pork, or wagyu and pork, swished through a light dashi with a heap of green onion, after small seasonal dishes such as mackerel sushi seared at the table and, in autumn, a matsutake dobin-mushi, then udon in the broth and a matcha pudding. Courses start at ¥6,000; the shop offers vegan courses and will change ingredients on request. Diners in 2026 praise the broth and the attentive staff, and it suits business dinners and groups — one company brought overseas visitors in October 2026 — though an August diner found the meat thin and the service green, and one October guest found the cheapest course small. Cashless only, and a 10% service charge applies.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 6 May 2016 (Tabelog). The shop says its dashi is inherited from Kyoto (Tabelog). Gurunavi also lists 京都 瓢嘻 京橋店 and 京都 瓢嘻 西麻布店.',
      philosophy: 'Kyoto-style shabu-shabu kaiseki in a calm hideaway for adults; ingredients changed to suit each guest (Tabelog shop text).', specialty: 'Dashi shabu with pork and green onion; vegan courses on request.',
      anecdotes: [
        { text: '"In a place like this, the quality of the meat is expected, but the broth is truly what makes the difference. And that broth was absolutely delicious." — July 2026.', source: R + 'B533092332/' },
        { text: '"During the udon course, I was able to change the flavor with curry powder." — October 2026, farewell party.', source: R + 'B538219182/' },
        { text: '"We opted for the most affordable \'Yura Yura\' Dashi Shabu course at JPY 6,000, but I felt the portion was a bit small… it seemed the visitors from abroad enjoyed it." — October 2026.', source: R + 'B537153157/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 瓢嘻 六本木店、港区六本木6-7-7 MERCURY六本木1F・2F、六本木駅3番出口から徒歩2分、月〜土12:00〜15:00・18:00〜23:00、日12:00〜15:00・18:00〜22:30、全席個室58席 (大広間28名)、キャッシュレスのみで現金不可、サービス料10%、1人1コース、2016年5月6日オープン。京都から受け継いだ出汁の「出汁しゃぶ」の季節の懐石、ヴィーガンのコースもあり、食材の変更も可。コース: 豚の出汁しゃぶ6,000円、8,000円、和牛と豚10,500円。ぐるなび: 京都 瓢嘻 京橋店、京都 瓢嘻 西麻布店も。口コミ(2026年7月〜10月): 出汁がおいしい、ねぎをのせた豚、炙りの鯖寿司、松茸の土瓶蒸し、締めのうどんとカレー粉、抹茶プリン、丁寧な接客、肉が薄いという声も。',
      confidence: 'medium', sources: [TB, GN_KYOBASHI, GN_NISHIAZABU, R + 'B532464549/', R + 'B533092332/', R + 'B534783075/', R + 'B535303521/', R + 'B537153157/', R + 'B537171964/', R + 'B537191892/', R + 'B537483532/', R + 'B537995301/', R + 'B538219182/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in private rooms; an October 2026 group with overseas visitors was well looked after.' },
    safety: { ...SAFETY0,
      vegan_cross_contact: [{ text: 'Tabelog shop text: "Ingredients can be changed to suit the customer. Vegan courses are also available."', source: TB }],
      staff_allergy_handling: [{ text: 'Tabelog shop text: ingredients can be changed to suit the customer; some courses need advance booking.', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-7-7 MERCURY六本木 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662105, 139.732207); GSI 東京都港区六本木六丁目7番 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026), plus 10% service.', last_checked: TODAY, items: [
      it('', 'Yura', 'Pork dashi-shabu course "Yura", 6 dishes', '¥6,000', 'Course', 'ask', 'no', 'Tabelog.', 'yura'),
      it('', 'Miyamazakura', 'Pork dashi-shabu course "Miyamazakura", 6 dishes', '¥8,000', 'Course', 'ask', 'no', 'Tabelog.', 'miyamazakura'),
      it('', 'Suimei', 'Wagyu and pork dashi-shabu course "Suimei", 6 dishes', '¥10,500', 'Course', 'ask', 'no', 'Tabelog.', 'suimei'),
      it('', '', 'Vegan course (on request)', '', 'Course', 'ask', 'vegan', 'Tabelog shop text: "Vegan courses are also available."', 'vegan_course'),
    ] }, {
    cuisine: '京都の「出汁しゃぶ」を季節の懐石コースで、全席個室 (食べログ、税込み、2026年11月に確認、コースは23種)・豚の出汁しゃぶのコース「Yura」6,000円・豚のコース「Miyamazakura」8,000円・和牛と豚のコース「Suimei」10,500円・しゃぶしゃぶはねぎをたっぷりのせた豚を出汁にくぐらせる (2026年10月)・2026年のコースの料理: 席で炙る鯖寿司、conger eel、松茸の土瓶蒸し (秋)、カレー粉で味を変えられる締めのうどん、抹茶プリン・ヴィーガンのコースも相談可・日本酒、飲み放題にクラフトコーラとジンジャーエール',
    neighborhood: '六本木6-7-7 MERCURY六本木1F・2F、交差点そばの路地。六本木駅3番出口から徒歩2分',
    gf_detail: '予約時に要確認。店は食材をお客に合わせて変えられるとしているが (食べログ)、グルテンフリーの説明はない。しゃぶしゃぶは味のついた出汁で、締めはうどん (2026年10月)、炙りの鯖寿司も。',
    vegan_detail: '店は「食材の変更も可能、ヴィーガンのコースもご用意」としている (食べログ)。ヴィーガンのコースは事前に予約を。通常のコースは豚や和牛の出汁しゃぶで、魚の料理もある。',
    notes: '[しゃぶしゃぶ・六本木、個室で京都の出汁しゃぶ] 六本木の交差点そばの路地にある、全席個室の58席の店。京都の「出汁しゃぶ」を季節の懐石として出し、甘い豚、または和牛と豚を、ねぎをたっぷりのせて軽い出汁にくぐらせる。その前に席で炙る鯖寿司や秋の松茸の土瓶蒸しなどの小皿、あとに出汁で煮るうどんと抹茶プリン。コースは6,000円から。店はヴィーガンのコースも用意し、食材の変更にも応じる。2026年の口コミでは出汁と丁寧な接客が好評で、接待や団体にも向き、10月には海外からの客を連れた会社の集まりも。一方で8月の客は肉が薄くスタッフが不慣れと感じ、10月の客は一番安いコースは量が少ないと書いた。現金不可のキャッシュレスのみで、サービス料10%。',
  });
}

// ================================================================ 天駆
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13295365/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'tokyo_amakakeru_roppongi', name: '天駆 (Amakakeru)', category: 'OMNI',
    lat: 35.663441, lng: 139.731103, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Favourites include fried scallops, fried chicken, chicken breast and asparagus fry, sukiyaki in a sherry-based sauce, Hong Kong-style fried noodles with oyster sauce and beef-tendon curry (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, Hida beef and chicken lead the menu; even the "vegetable" Hong Kong-style yakisoba is seasoned with oyster sauce (December 2025).',
    hours_raw: 'Mon–Fri 18:00–24:00 (food last order 23:00, drinks 23:30); closed Saturdays, Sundays, holidays and over New Year (Tabelog). Counter charge ¥500 a person, plus 10% service; menu prices include tax. Groups of five or more may be asked to book a course. 10 seats at an L-shaped counter; non-smoking, with a smoking spot at the entrance. Cards; no e-money or QR. Children welcome. Please avoid strong perfume (Tabelog). Opened around August 2024 (an August 2024 diner found it newly opened); a July 2026 diner says it was members-only before opening to the public.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 7-14-16, 六本木FSビル 2F — 1 min from Roppongi Stn exit 4a (Hibiya line), 3 min from exit 7 (Oedo line)',
    cuisine: 'À la carte creative Japanese at the counter, "more than an izakaya, less than kaiseki" (Tabelog shop text) · courses: short chef\'s choice, 5 dishes, ¥6,600; Amakakeru course, 10 dishes, ¥12,100 (Tabelog, tax included) · à la carte in July 2026: fried chicken ¥1,400, ribeye sukiyaki (one slice can be ordered) ¥1,700, rare-fried scallops ¥2,400, Hong Kong-style fried noodles ¥1,000 · regular dishes: straw-seared bonito with house onion soy sauce, tuna and other sashimi, low-temperature chicken liver with egg-yolk sauce, Hida beef ribeye sukiyaki in a sherry sauce with fluffy egg, wild ayu from Gifu grilled with salt (summer), grilled eel Kansai style, soft roe, oysters with ponzu, mapo tofu with soft roe (January 2026), Hida beef tendon curry; closing dishes include yakisoba, TKG and Gifu specialities · sake (e.g. Hidakami, Hanamura, Saku, Kaze ga Fuku), Japanese wine and craft gin',
    website: null, gmaps: gm('天駆 六本木7-14-16'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Roppongi, a creative Japanese counter for grown-ups] Upstairs in a quiet building a minute from Roppongi Station, a ten-seat L-shaped counter where Chef Sakai (as two July 2026 reviewers name the chef) cooks à la carte Japanese with a few Chinese touches — the shop's line is \"more than an izakaya, less than kaiseki\". Most dishes are around ¥1,000–2,400, so it works for one plate and a drink or a long dinner. The hits: straw-seared bonito with house onion soy sauce, rare-fried scallops, Hida beef ribeye sukiyaki in a sherry sauce with fluffy egg (order a single slice), wild Gifu ayu in summer, a crisp Kansai-style grilled eel, and Hong Kong-style fried noodles with Sichuan pepper, best mixed with the leftover sukiyaki egg. Sake from small breweries, Japanese wine and craft gin. Weeknights only; a ¥500 counter charge and 10% service apply.",
    chef_bio: { chef_name: 'Sakai (surname only, as written in two July 2026 reviews)', roles: ['Chef at the counter (July 2026 reviews: "Chef Sakai")'], origin: null,
      background: 'Two July 2026 reviewers watched "Chef Sakai" cook at the counter. A December 2025 diner was told by the chef that the house onion soy sauce is made in-house and that the eel had been upgraded. Opened around August 2024; a July 2026 reviewer says it was a members-only hideaway before opening to the public. The sources read do not say who owns it.',
      philosophy: '"More than an izakaya, less than a kaiseki" — original Japanese-inspired dishes à la carte at a slightly upscale counter (Tabelog shop text).', specialty: 'Hida beef ribeye sukiyaki; rare-fried scallops; Hong Kong-style fried noodles.',
      anecdotes: [
        { text: '"The Hida beef ribeye sukiyaki was a standout dish, served with a broth made from sherry." — July 2026.', source: R + 'B532808368/' },
        { text: '"I appreciated that you can order just one slice." — July 2026, ribeye sukiyaki ¥1,700.', source: R + 'B533284909/' },
        { text: '"The flavor of Sichuan pepper and oyster sauce is addictive, and it was well-prepared!" — December 2025, Hong Kong-style fried noodles.', source: R + 'B495145303/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 天駆、港区六本木7-14-16 六本木FSビル2F、日比谷線六本木駅4a出口から徒歩1分、大江戸線7番出口から3分、月〜金18:00〜24:00 (フードL.O.23:00、ドリンクL.O.23:30)、土日祝と年末年始休み、カウンターチャージ500円、サービス料10%、10席、禁煙 (入口に喫煙所)、カード可、香りの強い香水は控えて。コンセプトは「居酒屋以上、懐石未満」、アラカルトの創作和食、コース6,600円・12,100円、締めに焼きそば、TKG、Gifu の名物。口コミ(2025年12月〜2026年7月): Sakai シェフ、藁焼きの鰹と自家製の玉ねぎ醤油、レアのホタテフライ、Hida の牛肉のリブロースのすき焼き (シェリーの割下)、Gifu の天然鮎、Kansai スタイルの鰻、Hong Kong スタイルの焼きそば、牛すじカレー、日本酒と日本ワイン。',
      confidence: 'medium', sources: [TB, R + 'B495145303/', R + 'B520410913/', R + 'B525898576/', R + 'B526294076/', R + 'B532327385/', R + 'B532808368/', R + 'B533284909/', R + 'B533655311/', R + 'B533826510/', R + 'B537530100/'] },
    cultural_comfort: { level: 'japanese', note: 'À la carte at a small counter; no English menu or English-speaking staff is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-14-16 六本木FSビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.663441, 139.731103); GSI 東京都港区六本木七丁目14番 (lot) 28m; Wagyu Yakiniku Tanjiro (tokyo_wagyu_yakiniku_tanjiro_roppongi, 六本木7-14-11) is 54 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533284909/'],
    price_note: 'Course prices from Tabelog (tax included); à la carte prices from a July 2026 review. ¥500 counter charge and 10% service on top.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s short course, 5 dishes', '¥6,600', 'Course', 'ask', 'no', 'Tabelog.', 'short_course'),
      it('', '', 'Amakakeru course, 10 dishes', '¥12,100', 'Course', 'ask', 'no', 'Tabelog.', 'amakakeru_course'),
      it('', '', 'Ribeye sukiyaki (Hida beef), per slice', '¥1,700', 'Food', 'ask', 'no', 'July 2026 review.', 'ribeye_sukiyaki'),
      it('', '', 'Rare-fried scallops', '¥2,400', 'Food', 'no', 'no', 'July 2026 review.', 'scallop_fry'),
      it('', '', 'Fried chicken', '¥1,400', 'Food', 'no', 'no', 'July 2026 review.', 'chicken_fry'),
      it('', '', 'Hong Kong-style fried noodles', '¥1,000', 'Food', 'no', 'no', 'July 2026 review; oyster sauce and Sichuan pepper (December 2025).', 'hk_yakisoba'),
    ] }, {
    cuisine: 'カウンターでアラカルトの創作和食、「居酒屋以上、懐石未満」(食べログの店の紹介)・コース: おまかせのショートコース5品6,600円、天駆コース10品12,100円 (食べログ、税込み)・2026年7月のアラカルト: 鶏の揚げ物1,400円、リブロースのすき焼き (1枚から) 1,700円、レアのホタテフライ2,400円、Hong Kong スタイルの焼きそば1,000円・定番: 藁焼きの鰹と自家製の玉ねぎ醤油、鮪などの刺身、鶏レバーの低温調理と卵黄のソース、シェリーの割下とふわふわの卵の Hida の牛肉のリブロースのすき焼き、Gifu の天然鮎の塩焼き (夏)、Kansai スタイルの鰻、白子、牡蠣のポン酢、白子の麻婆豆腐 (2026年1月)、Hida の牛肉の牛すじカレー。締めは焼きそば、TKG、Gifu の名物など・日本酒 (Hidakami、Hanamura、Saku、Kaze ga Fuku など)、日本ワイン、クラフトジン',
    neighborhood: '六本木7-14-16 六本木FSビル2F。六本木駅4a出口 (日比谷線) から徒歩1分、7番出口 (大江戸線) から3分',
    gf_detail: '要確認。グルテンフリーの説明はない。人気はホタテフライ、鶏の揚げ物、鶏むねとアスパラのフライ、シェリーの割下のすき焼き、オイスターソースのHong Kong スタイルの焼きそば、牛すじカレー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、Hida の牛肉、鶏が中心で、野菜のHong Kong スタイルの焼きそばもオイスターソースで味付けする (2025年12月)。',
    notes: '[居酒屋・六本木、大人の創作和食のカウンター] 六本木駅から1分の静かなビルの2階、L字カウンター10席。2026年7月の口コミ2件が Sakai シェフと書く料理人が、中華の要素も少し入ったアラカルトの和食を作る。店のうたい文句は「居酒屋以上、懐石未満」。多くの料理は1,000〜2,400円ほどで、一皿と一杯でも、ゆっくりした夕食にも使える。人気は自家製の玉ねぎ醤油で食べる藁焼きの鰹、レアのホタテフライ、シェリーの割下とふわふわの卵の Hida の牛肉のリブロースのすき焼き (1枚から注文可)、夏の Gifu の天然鮎、外はカリッとしたKansai スタイルの鰻、花椒のHong Kong スタイルの焼きそばで、残ったすき焼きの卵を混ぜるのがおすすめ。小さな蔵の日本酒、日本ワイン、クラフトジンも。平日のみの営業で、カウンターチャージ500円とサービス料10%。',
  });
}

// ================================================================ 花郷 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13138248/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://steak-hanasato.jp/';
  const W = day(['12:00', '15:00'], ['17:30', '22:00']); const E = day(['12:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_hanasato_roppongi', name: '花郷 六本木店 (Hanasato Roppongi)', category: 'OMNI',
    lat: 35.664547, lng: 139.733624, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies at reservation (Tabelog). Nothing is called gluten-free. Steaks come with charcoal salt, wasabi and ponzu, abalone with soy sauce and grated daikon, and courses end with garlic rice (June 2026); sauces are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Tabelog ticks "vegetarian options", but the courses centre on Yonezawa beef and seafood, and Kyoto-style dishes use dashi.',
    hours_raw: 'Mon–Fri 12:00–15:00 (food last order 14:00) and 17:30–22:00 (food last order 21:00); Sat, Sun and holidays 12:00–15:00 and 17:30–21:00 (food last order 20:00) (Tabelog). 10% service charge. Tell the shop about allergies when booking. 80 seats: private rooms for 2 to 20, salon dining, sunken kotatsu rooms, a kappo and teppan counter; garden view; non-smoking. Cards (incl. UnionPay), IC/e-money and QR (PayPay, Alipay, WeChat Pay and others). Children by prior arrangement. Opened 8 March 2012 (Tabelog). A sister shop is in Gion, Kyoto (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-2-35, VORT六本木Dual’s 1F, behind Mikawadai Park, across from the new Azabu Police Station — 3 min from Roppongi Stn exit 6',
    cuisine: 'Yonezawa beef teppanyaki and Kyoto cuisine (Tabelog; official site title "和牛鉄板焼と京料理") · lunch (September 2026 review, tax included): Yonezawa beef steak bowl 100 g ¥2,970 with salad, pickles, red miso soup and dessert; hamburg steak 200 g ¥2,750; Yonezawa pork steak ¥2,750; roast-beef bowl ¥2,750; roast beef and steak ¥4,180; Hanasato gozen ¥4,400; grilled-fish gozen ¥3,850; steak gozen ¥6,050 · lunch courses (Tabelog): teppan seafood, 5 dishes, ¥6,050; "Kamogawa", 6 dishes with an 80 g Yonezawa strip-loin steak, ¥7,700 · dinner ¥8,800 to ¥55,000 (the top teppan course has Yonezawa chateaubriand, live lobster, abalone and caviar, per a September 2026 review); a meat-lover\'s teppan course listed at ¥10,560 (from ¥17,600) · dishes in 2026: abalone and strip loin grilled in front of you, garlic rice, beef-tendon soup with Kujo green onion, soft-shelled turtle soup, eel, shiitake stuffed with filling, a dish steamed with hojicha · wine cellar of mainly French wine; sake',
    website: SITE, gmaps: gm('花郷 六本木店 六本木4-2-35'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · Roppongi, Yonezawa beef and Kyoto cooking with a garden view] Three minutes from Roppongi Station, behind Mikawadai Park and across from the new Azabu Police Station, an 80-seat restaurant laid out like a small museum: a wine cellar at the entrance, a garden view, private rooms, sunken kotatsu rooms and a counter where Yonezawa beef and abalone are grilled on the teppan. Lunch is the easy way in — a Yonezawa beef steak bowl for ¥2,970 with salad, soup and dessert, or set meals to ¥6,050 — while dinner courses run from ¥8,800 to ¥55,000. Diners in 2026 came for birthdays and business meals, praised the private rooms, the strip loin and a gentle beef-tendon soup with Kujo green onion, and one found a fish dish over-sauced and the service uneven. A sister shop is in Gion, Kyoto.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 8 March 2012 (Tabelog). The official site lists two shops, 六本木店 and 祇園店. A March 2026 diner notes the chef came out to greet the table.',
      philosophy: 'Yonezawa beef teppanyaki and Kyoto kaiseki in a setting that blends a Japanese garden with Western decor (Tabelog shop text).', specialty: 'Yonezawa beef teppanyaki; Kyoto-style courses.',
      anecdotes: [
        { text: '"The Yonezawa beef strip loin steak came with unique charcoal salt, wasabi, and ponzu sauce, offering plenty of options to change up the flavors." — June 2026, birthday lunch.', source: R + 'B529499025/' },
        { text: '"The star of the show was the beef tendon soup! Despite being a beef-based broth, it was not greasy at all." — June 2026.', source: R + 'B529554948/' },
        { text: '"While the skin of the fish dish was beautifully crisp, it was unfortunately drenched in sauce." — March 2026.', source: R + 'B524476653/' },
      ],
      japanese_sources_summary: '公式サイト: 花郷 和牛鉄板焼と京料理、六本木店と祇園店。食べログ (店舗会員): 花郷 六本木店、港区六本木4-2-35 VORT六本木Dual’s 1F、六本木駅6番出口から徒歩3分、新しい Azabu Police Station の向かい、月〜金12:00〜15:00・17:30〜22:00、土日祝12:00〜15:00・17:30〜21:00、サービス料10%、80席、個室、掘りごたつ、割烹と鉄板のカウンター、禁煙、カード・電子マネー・QR可、アレルギーは予約時に、2012年3月8日オープン。Yonezawa の牛肉の鉄板焼と京料理、ランチコース6,050円・7,700円。口コミ(2026年3月〜10月): Yonezawa の牛肉のステーキ丼2,970円などのランチ、ディナー8,800〜55,000円、鮑とサーロイン、ガーリックライス、Kujo ねぎの牛すじスープ、すっぽんのスープ、個室で誕生日、魚のソースが多すぎたという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B524476653/', R + 'B526848969/', R + 'B528060823/', R + 'B529269838/', R + 'B529499025/', R + 'B529554948/', R + 'B533738839/', R + 'B534879636/', R + 'B535773296/', R + 'B536932226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses; no English service is listed on Tabelog.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "If you have any allergies, please let us know when making your reservation."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-2-35 VORT六本木Dual’s 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664547, 139.733624); GSI 東京都港区六本木四丁目2番 (lot, large-block centroid) 138m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535773296/'],
    price_note: 'Lunch prices from a September 2026 review (tax included); courses from Tabelog (read November 2026). 10% service.', last_checked: TODAY, items: [
      it('', '', 'Yonezawa beef steak bowl, 100 g, with salad, pickles, red miso soup and dessert (lunch)', '¥2,970', 'Lunch', 'ask', 'no', 'September 2026 review.', 'steak_don'),
      it('', '', 'Yonezawa beef hamburg steak, 200 g (lunch)', '¥2,750', 'Lunch', 'ask', 'no', 'September 2026 review.', 'hamburg'),
      it('', '', 'Hanasato gozen (lunch)', '¥4,400', 'Lunch', 'ask', 'ask', 'September 2026 review.', 'hanasato_gozen'),
      it('', '', 'Teppan seafood lunch course, 5 dishes', '¥6,050', 'Course', 'ask', 'no', 'Tabelog.', 'seafood_lunch'),
      it('', 'Kamogawa', 'Teppan lunch course "Kamogawa", 6 dishes with 80 g Yonezawa strip loin', '¥7,700', 'Course', 'ask', 'no', 'Tabelog.', 'kamogawa'),
    ] }, {
    cuisine: 'Yonezawa の牛肉の鉄板焼と京料理 (食べログ、公式サイトの題「和牛鉄板焼と京料理」)・ランチ (2026年9月の口コミ、税込み): Yonezawa の牛肉のステーキ丼100g 2,970円 (サラダ、香の物、赤だし、デザート付き)、ハンバーグ200g 2,750円、Yonezawa の豚肉のステーキ2,750円、ローストビーフ丼2,750円、ローストビーフとステーキ4,180円、Hanasato gozen 4,400円、焼き魚のセット3,850円、ステーキのセット6,050円・ランチコース (食べログ): 鉄板の海鮮5品6,050円、80gの Yonezawa の牛肉のサーロインステーキ付き6品の「Kamogawa」7,700円・ディナーは8,800〜55,000円 (最上の鉄板コースは Yonezawa の牛肉のシャトーブリアン、活けオマール、鮑、キャビア、2026年9月の口コミ)。肉好きの鉄板コースは10,560円 (通常17,600円)・2026年の料理: 目の前で焼く鮑とサーロイン、ガーリックライス、Kujo ねぎの牛すじスープ、すっぽんのスープ、鰻、椎茸の詰め物、ほうじ茶で蒸した料理・フランス中心のワインセラー、日本酒',
    neighborhood: '六本木4-2-35 VORT六本木Dual’s 1F、Mikawadai Park の奥、新しい Azabu Police Station の向かい。六本木駅6番出口から徒歩3分',
    gf_detail: '予約時に要確認。アレルギーは予約時に伝えるよう店は求めている (食べログ)。グルテンフリーの説明はない。ステーキは炭の塩、わさび、ポン酢で、鮑は醤油と大根おろしで、締めはガーリックライス (2026年6月)。ソースの説明はない。',
    vegan_detail: '予約時に要確認。食べログには「ベジタリアンメニューあり」とあるが、コースは Yonezawa の牛肉と魚介が中心で、京料理には出汁を使う。',
    notes: '[鉄板焼・六本木、庭の見える Yonezawa の牛肉と京料理] 六本木駅から3分、Mikawadai Park の奥、新しい Azabu Police Station の向かいにある80席の店。入口にワインセラー、庭の眺め、個室、掘りごたつ、Yonezawa の牛肉や鮑を焼く鉄板のカウンターと、小さな美術館のようなつくり。ランチなら気軽で、Yonezawa の牛肉のステーキ丼がサラダ、汁物、デザート付きで2,970円、セットは6,050円まで。ディナーのコースは8,800〜55,000円。2026年の口コミでは誕生日や接待の客が個室、サーロイン、Kujo ねぎのやさしい牛すじスープをほめ、魚料理のソースが多すぎて接客にむらがあったという声も。Kyoto の祇園に姉妹店がある。',
  });
}

save();
