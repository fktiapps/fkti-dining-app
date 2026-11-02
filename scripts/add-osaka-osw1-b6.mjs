// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 6.
//   + 鮨和食 紅炉庵 なんば Sushi Washoku Kouroan Nanba (Edomae sushi and modern washoku by Namba Stn exit 12, 2022)
//   + 寿司 はせ川 心斎橋本店 Sushi Hasegawa Shinsaibashi honten (sushi kaiseki in private rooms, Higashi-Shinsaibashi, 2005)
//   + 蟹かに城 Kani Kani Jo (crab courses in private rooms by Nippombashi, 2024)
//   + まえだ家 Maeda Ya (seafood izakaya in a basement, open to 2 a.m., 2017)
//   - skip 27155920 ニューベイブ 難波・道頓堀店 (chain already in data: osaka_new_babe_namba), 27064420 エルク (elk pancake chain:
//     Osaka, Kyoto, Hiroshima, Fukuoka per cafe-elk.com), 27002336 りくろーおじさんの店 なんば本店 (cheesecake chain, about 15 shops on
//     rikuro.co.jp/shoplist), 27130460 サカバダアレグロ (Allegro chain: DD House, 4ビル and Piccola cucina shops opened 2025 per
//     restaurant-bank.jp). Lane order: 27155920, 27064420, 27130348, 27004056, 27144240, 27002336, 27130460, 27099032.
//   Chain check: Kouroan is one restaurant (no other 紅炉庵) of Operation Factory, which runs about 30 differently named restaurants and
//   hotel dining rooms (opefac.com); Hasegawa is the head shop of 株式会社はせ川 (6 shops: sushi in Shinsaibashi and Nishi-Azabu,
//   Kyoto-style teppan and a bar in Shinsaibashi, Japanese yakiniku in Tokyo; hasegawa-group.jp/company/); Maeda Ya has a sister
//   Bettei and JAZZ BERRY (Tabelog); Kani Kani Jo, no operator found. None is in data/osaka.json (grep by name, romaji and address,
//   2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27155920', 'ニューベイブ 難波・道頓堀店: branch of the New Babe tonkatsu chain already in data (osaka_new_babe_namba).');
skip('27064420', 'エルク (elk pancake & cafe): chain with shops in Osaka, Kyoto (Kawaramachi), Hiroshima and Fukuoka (cafe-elk.com shop list, read 2026-11-01).');
skip('27002336', 'りくろーおじさんの店 なんば本店: cheesecake chain with about 15 shops (rikuro.co.jp/shoplist, read 2026-11-01).');
skip('27130460', 'サカバダアレグロ: Allegro chain of Restaurant Bank, which opened サカバダアレグロDDハウス, サカバダアレグロ4ビル店 and Piccola cucina da Allegro in 2025 (restaurant-bank.jp, read 2026-11-01).');

// ================================================================ 鮨和食 紅炉庵 なんば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27130348/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.opefac.com/restaurant/kouroan/';
  const WD = day(['11:30', '15:30'], ['17:00', '23:00']); const SU = day(['11:30', '15:30'], ['17:00', '22:30']);
  put({
    id: 'osaka_kouroan_namba', name: '鮨和食 紅炉庵 なんば (Sushi Washoku Kouroan Nanba)', category: 'OMNI',
    lat: 34.665996, lng: 135.49948, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the Tabelog listing says the restaurant does not accommodate allergies (for seat-only bookings), and the menu is sushi with soy sauce, tempura, kara-age, fugu nanban with tartare and a monaka shell.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, fish hot pots in dashi, wagyu and chicken.',
    hours_raw: 'Mon–Sat 11:30–15:30 (food last order 14:00) and 17:00–23:00 (food last order 21:30); Sun and holidays the same lunch, dinner 17:00–22:30 (food last order 21:00); closed over New Year; phone enquiries 14:00–18:00 (Tabelog). Seat-only bookings: 2-hour limit, ¥600 cover charge, allergies not accommodated (Tabelog). Lunch can be booked only for two or more (October 2026); lunch was a 90-minute sitting for one October 2026 party. Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 42 seats: a 10-seat sushi counter, seven tables for 4, a private room for 6, sofa seating; non-smoking (Tabelog). Formerly named 料理屋 紅炉庵 (Tabelog). Opened 30 June 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 4-3-21, 1F of the ZAナンバビル — 1 min from Namba Stn exit 12 (Midosuji Line and Nankai)',
    cuisine: 'Edomae sushi and seasonal modern washoku, with sake chosen by three sake sommeliers (Tabelog) · lunch: Hanakago lunch of small dishes with a choice of main and a kamameshi ¥2,790 on weekdays (¥200 off; October 2026); a "triple main" lunch of straw-seared bonito, fugu nanban with tartare and lava-grilled black wagyu, with kamameshi, ¥2,390 weekdays and ¥2,990 at weekends (October 2026); salmon-roe and avocado tartare in a monaka ¥200 (October 2026) · dinner: sushi and washoku course of nine dishes with five Edomae nigiri, seared wagyu sushi and a small hot pot of winter yellowtail in golden dashi ¥6,000 before tax (Tabelog); a sea-bream rice course (September 2026) · winter à la carte: snow crab, winter yellowtail, milt, fugu, raw oysters (Tabelog) · about 12 sakes, a four-sake all-you-can-drink, a Yoshino cedar highball (Tabelog)',
    website: SITE, gmaps: gm('鮨和食 紅炉庵 なんば'), menu_url: SITE,
    notes: "[Sushi and washoku · Namba, a minute from exit 12] A dark, Japanese-modern room of black and brown wood a minute from Namba Station, with a ten-seat sushi counter, partitioned tables and sofa seats, run by Operation Factory, which manages restaurants and hotel dining rooms. Lunch is the draw and books out even on weekdays: the Hanakago lunch of small dishes with a main and a pot of kamameshi (¥2,790 on weekdays), or the 'triple main' of straw-seared bonito, fugu nanban and lava-grilled black wagyu (¥2,390 on weekdays, ¥2,990 at weekends), both with a small hot pot of yellowtail in golden dashi in October 2026. Dinner centres on a ¥6,000 course of nine dishes ending in Edomae nigiri, with sake picked by the house's three sake sommeliers. Diners in 2026 liked the dashi and the setting; one found the food ordinary for the price, another a sushi slightly fishy. Lunch bookings are for two or more; allergies are not accommodated.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs at the counter (unnamed); three sake sommeliers (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: Edomae sushi, modern Japanese cuisine and local sake from a sake master; formerly named 料理屋 紅炉庵; opened 30 June 2022, with a fourth-anniversary lunch in 2026. Operated by Operation Factory, inc., which lists about thirty restaurants and hotel dining rooms and takes on hotel and restaurant management (opefac.com, read 2026-11-01).', philosophy: null, specialty: 'Hanakago lunch with kamameshi; Edomae sushi course; golden-dashi yellowtail hot pot.',
      anecdotes: [
        { text: '"Appetizer: Ikura and Avocado Tartare in a Monaka shell / Small Pot: Autumn Buri (Yellowtail) in Golden Dashi Shabu" — October 2026, the triple-main lunch ¥2,390 on a weekday.', source: R + 'B537760520/' },
        { text: '"Surprisingly, the restaurant was fully booked even on a weekday. I recommend making a reservation before you go." — October 2026, Hanakago lunch ¥2,790.', source: R + 'B538157430/' },
        { text: '"While the variety, tableware, and interior were top-notch, it felt like I was paying for the ambiance rather than the food." — September 2026, a weekday dinner.', source: R + 'B536553005/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨和食 紅炉庵 なんば (旧店名 料理屋 紅炉庵)、和食・寿司・居酒屋、大阪市中央区難波4-3-21 ZAナンバビル 1F、なんば駅12番出口から徒歩1分、月〜土11:30〜15:30・17:00〜23:00、日・祝11:30〜15:30・17:00〜22:30、年末年始休み、席のみの予約は2時間制・チャージ600円・アレルギー対応不可、カード・PayPay 可、42席 (カウンター10、4人テーブル7)、6名の個室、禁煙、2022年6月30日オープン。江戸前寿司、季節の天ぷら、モダンな和食、利き酒師が3人、12種ほどの日本酒、4種の日本酒飲み放題、Yoshino の杉のハイボール、寿司和食コース9品6,000円 (税抜)、冬はズワイガニ、寒ぶり、白子、ふぐ、生牡蠣。運営は Operation Factory (opefac.com)。口コミ(2026年9月〜10月): Hanakago ランチ平日2,790円、トリプルメインのランチ平日2,390円・土日祝2,990円、いくらとアボカドの最中200円、黄金のだしのぶりのしゃぶしゃぶ、釜飯、平日も満席、ランチの予約は2名から、雰囲気にお金を払っている感じという声、寿司が少し生臭かったという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B503347232/', R + 'B536510422/', R + 'B536553005/', R + 'B537024714/', R + 'B537290458/', R + 'B537760520/', R + 'B537769730/', R + 'B537868583/', R + 'B538062545/', R + 'B538157430/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses; book online for two or more (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing (seat-only reservations): "We do not accommodate allergies."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-3-21 ZAナンバビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and operator site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目3番21号 (go) 14m. 焼鳥と釜飯 なかもと (osaka_yakitori_kamameshi_nakamoto) is next door at 難波4-3-23, a different house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537760520/', R + 'B538157430/'],
    price_note: 'Course price from the Tabelog listing (before tax); lunch prices from October 2026 reviews, which differ by weekday and weekend.', last_checked: TODAY, items: [
      it('', '', 'Hanakago lunch (choice of main and kamameshi), weekdays', '¥2,790', 'Lunch', 'no', 'no', 'October 2026 reviews.', 'hanakago_lunch'),
      it('', '', 'Triple-main lunch, weekdays (¥2,990 at weekends)', '¥2,390', 'Lunch', 'no', 'no', 'October 2026 review; Tabelog.', 'triple_main_lunch'),
      it('', '', 'Sushi and washoku course, 9 dishes (before tax)', '¥6,000', 'Courses', 'no', 'no', 'Tabelog listing.', 'sushi_washoku_course'),
      it('', '', 'Salmon-roe and avocado tartare in a monaka', '¥200', 'Small dishes', 'no', 'no', 'October 2026 review.', 'tartare_monaka'),
    ] }, {
    cuisine: '江戸前寿司と季節のモダンな和食、利き酒師3人が選ぶ日本酒 (食べログ)・ランチ: 小鉢に好きなメインと釜飯の Hanakago ランチ、平日2,790円 (200円引き、2026年10月)。わら焼きのかつお、ふぐの南蛮のタルタル、溶岩焼きの黒毛和牛の「トリプルメイン」に釜飯、平日2,390円、土日祝2,990円 (2026年10月)。いくらとアボカドのタルタルの最中200円 (2026年10月)・夜: 江戸前のにぎり5貫、炙り和牛の寿司、寒ぶりの黄金のだしの小鍋など9品の寿司和食コース6,000円 (税抜、食べログ)。鯛めしのコース (2026年9月)・冬のアラカルト: ズワイガニ、寒ぶり、白子、ふぐ、生牡蠣 (食べログ)・日本酒12種ほど、日本酒4種の飲み放題、Yoshino の杉のハイボール (食べログ)',
    neighborhood: '難波4-3-21、ZAナンバビルの1階。なんば駅12番出口 (御堂筋線・南海) から徒歩1分',
    gf_detail: 'グルテンフリーではありません。食べログには (席のみの予約は) アレルギー対応不可とあり、料理は醤油の寿司、天ぷら、唐揚げ、タルタルのふぐの南蛮、最中など。',
    vegan_detail: 'ヴィーガンではありません。寿司、だしの魚の鍋、和牛、鶏。',
    notes: '[寿司・和食・なんば、12番出口から1分] なんば駅から1分、黒と茶の木の和モダンな店で、10席の寿司カウンター、仕切りのあるテーブル、ソファ席。レストランやホテルのダイニングを運営する Operation Factory の店。人気は平日も満席になるランチで、小鉢に好きなメインと釜飯の Hanakago ランチ (平日2,790円)、わら焼きのかつお、ふぐの南蛮、溶岩焼きの黒毛和牛の「トリプルメイン」(平日2,390円、土日2,990円)。2026年10月はどちらにも黄金のだしのぶりの小鍋がついた。夜は江戸前のにぎりで終わる9品6,000円のコースが中心で、日本酒は3人の利き酒師が選ぶ。2026年の口コミではだしと雰囲気が好評な一方、値段のわりに料理は普通という人、寿司が少し生臭かったという人も。ランチの予約は2名から、アレルギー対応はなし。',
  });
}

// ================================================================ 寿司 はせ川 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004056/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sushi-hasegawa.com/'; const CO = 'https://www.hasegawa-group.jp/company/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_hasegawa_shinsaibashi', name: '寿司 はせ川 心斎橋本店 (Sushi Hasegawa Shinsaibashi honten)', category: 'OMNI',
    lat: 34.672265, lng: 135.502582, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The kaiseki courses include wheat gluten (fu), miso-glazed fish and sushi with soy sauce; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and kaiseki of fish, shellfish and duck, in dashi.',
    hours_raw: 'Daily 17:00–23:00, last order 22:00; closed on some days (Tabelog). Reservations accepted, also online (official site). Service charge ¥1,200 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, Alipay and WeChat Pay; no e-money (Tabelog). 84 seats: a counter and private rooms for 2 up to 24, with sunken seating, and table rooms for 4–12; private hire up to 20; non-smoking with a smoking spot at the entrance; free Wi-Fi; children welcome with a kids menu; takeaway (Tabelog; official site). Reopened after renovation in March 2024 (official site news). Celebrating its 21st year in November 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-16-20, 4F of the ステージアビル — 5 min from Shinsaibashi Stn exit 6',
    cuisine: 'Sushi with kaiseki courses of natural fish from around Japan, served on tableware by the ceramicist 内田鋼一 (official site) · Genji course ¥15,000 (October 2026): corn tofu, an autumn assortment (matsutake and wheat-gluten salad, fugu-skin jelly, hamo with plum, chestnuts, lotus chips, rolled omelette), dobin mushi, five sashimi, sanma sushi, Spanish mackerel grilled with miso and steamed with lotus, roast Kawachi duck, five nigiri (sea bream, white fish, lean tuna, red squid, sea urchin and salmon roe), red miso soup, Takara Farm soft-serve · the top course ¥30,000 (September 2026) · a limited luxury course of Ise lobster, abalone, matsutake and nodoguro (October 2026) · seasonal night courses (July 2026) · à la carte welcome, extra nigiri to order (Tabelog; October 2026) · takeaway sushi set for three (48 pieces and 3 rolls) ¥30,000; New Year osechi (Tabelog) · service charge ¥1,200',
    website: SITE, gmaps: gm('寿司 はせ川 心斎橋本店'), menu_url: SITE,
    notes: "[Sushi kaiseki · Higashi-Shinsaibashi, private rooms on the 4th floor] The head shop of a small sushi and Japanese-yakiniku group, on the fourth floor of a building off the Shinsaibashi crowds, marking 21 years in November 2026 (Tabelog): a counter and private rooms with sunken seating for two up to 24, laid out like a Kyoto stone lane, with dishes by the ceramicist 内田鋼一. Sushi comes inside a kaiseki course of natural fish from around Japan: the ¥15,000 Genji course in October 2026 ran from corn tofu and an autumn platter through dobin mushi, five sashimi, Spanish mackerel two ways and roast Kawachi duck to five nigiri and a soft-serve from Takara Farm that diners rave about. Families come for birthdays and the staff join in. One diner found only five pieces of sushi in the ¥30,000 course too few for a sushi house (September 2026), so add nigiri à la carte. Service ¥1,200.",
    chef_bio: { chef_name: null, roles: ['Head shop of 株式会社はせ川; representative director 古塚建一 (company site)'], origin: null, background: 'Per the company site (hasegawa-group.jp): 株式会社はせ川, founded in Kyoto in October 2001, head office at 東心斎橋1-16-20, 6 shops and about 100 staff: 寿司はせ川 心斎橋本店, 京風鉄板 はせ川 and BAR HASEGAWA in the same block, 寿司はせ川 西麻布店 in Tokyo, and 日本焼肉はせ川 in Tokyo (銀座本店, 表参道店, 別亭 銀座店). Its philosophy: "carry on the good old culture of Japan while evolving it"; a sushi house that also serves kaiseki, tableware by noted Japanese potters and late-Edo antiques, walls by a leading plasterer. Per the shop site: seasonal sushi and traditional kaiseki, a counter and private rooms for 2–24, tableware by 内田鋼一, a space evoking Kyoto\'s stone paving; renovated and reopened March 2024. Tabelog: 21st anniversary in November 2026, with a special course on 1–3 November.', philosophy: '"To pass on the spirit of hospitality" (おもてなしの心を伝えたい; official site).', specialty: 'Sushi kaiseki courses; seasonal natural fish; soft-serve dessert.',
      anecdotes: [
        { text: '"The grilled kamasu (barracuda) with dengaku miso was particularly memorable" — October 2026, the Genji course.', source: R + 'B536721069/' },
        { text: '"At the end, they surprised us with a birthday celebration along with dessert, and the soft serve ice cream might just be the best I\'ve ever had." — October 2026, in a private room with family.', source: R + 'B537737575/' },
        { text: '"I opted for the most expensive course at JPY 30,000. The sushi itself was delicious, but after quite a wait, I only received five pieces." — September 2026.', source: R + 'B536864951/' },
      ],
      japanese_sources_summary: '公式サイト: 寿司はせ川 心斎橋本店、大阪市中央区東心斎橋1-16-20 ステージアビル4F、極上の旬の素材による寿司と日本伝統の技を大切にした懐石料理、臨場感あふれるカウンター、2〜24名の完全個室、こだわりの器 (陶芸家 内田鋼一)、京の石畳を思わせる空間、季節の設え、2024年3月にリニューアルオープン、おせちとお取り寄せ鍋セット、BAR HASEGAWA で飲み放題の貸し切りプラン。会社 (hasegawa-group.jp): 株式会社はせ川、平成13年10月設立、代表取締役 古塚建一、店舗数6、寿司はせ川 心斎橋本店、京風鉄板 はせ川、BAR HASEGAWA、寿司はせ川 西麻布店、日本焼肉はせ川 銀座本店・表参道店・別亭 銀座店、「日本の古き良き文化を継承しながら、さらに進化させていく」、著名な陶芸家の器や江戸末期の骨董品、日本を代表する左官屋の内装。食べログ (店舗会員): 毎日17:00〜23:00 (L.O.22:00)、不定休、サービス料1,200円、カード・QR可、84席、掘りごたつの個室2〜24名、テーブル4〜12名、禁煙、Wi-Fi、子ども・キッズメニュー可、テイクアウト、11月で21周年、持ち帰りの寿司セット (3人前48貫と巻物3本) 30,000円、おせち。口コミ(2026年6月〜10月): Genji コース15,000円、とうもろこし豆腐、松茸と麩のサラダ、ふぐの皮の煮こごり、梅肉の鱧、dobin mushi、お造り5種、サンマの寿司、鰆の味噌焼き、Kawachi の鴨、にぎり5貫、赤だし、Takara Farm のソフトクリーム、いちばん高い30,000円のコースは寿司が5貫だけという声、伊勢海老・あわび・松茸の限定コース、誕生日のお祝い。',
      confidence: 'high', sources: [TB, SITE, CO, 'https://www.hasegawa-group.jp/', R + 'B530132938/', R + 'B532030406/', R + 'B532276578/', R + 'B533653297/', R + 'B534826602/', R + 'B536721069/', R + 'B536864951/', R + 'B537121355/', R + 'B537578630/', R + 'B537737575/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English version; private rooms and set courses (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋1-16-20 ステージアビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site with a September 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番20号 (go) 21m. 岡﨑 (osaka_okazaki_higashishinsaibashi) is on 2F of the same building (心斎橋ステージアビル) with a pin about 8 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537121355/', R + 'B536864951/'],
    price_note: 'Course prices from September and October 2026 reviews; takeaway set from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Genji course (kaiseki with five nigiri)', '¥15,000', 'Courses', 'ask', 'no', 'October 2026 reviews.', 'genji_course'),
      it('', '', 'Top course', '¥30,000', 'Courses', 'ask', 'no', 'September 2026 review.', 'top_course'),
      it('', '', 'Takeaway sushi set for three (48 pieces, 3 rolls)', '¥30,000', 'Takeaway', 'ask', 'no', 'Tabelog listing.', 'takeaway_sushi'),
    ] }, {
    cuisine: '日本各地の天然の魚の寿司と懐石のコース、器は陶芸家 内田鋼一の作品 (公式サイト)・Genji コース15,000円 (2026年10月): とうもろこし豆腐、秋の前菜 (松茸と麩のサラダ、ふぐの皮の煮こごり、梅肉の鱧、栗、れんこんチップス、だし巻き)、dobin mushi、お造り5種、サンマの寿司、鰆の味噌焼きと蒸し物、Kawachi の鴨のロースト、にぎり5貫 (鯛、白身、赤身、イカ、うにといくら)、赤だし、Takara Farm のソフトクリーム・いちばん高いコース30,000円 (2026年9月)・伊勢海老、あわび、松茸、のどぐろの限定コース (2026年10月)・季節の夜のコース (2026年7月)・アラカルトも歓迎、にぎりの追加も (食べログ、2026年10月)・持ち帰りの寿司セット3人前 (48貫と巻物3本) 30,000円、おせち (食べログ)・サービス料1,200円',
    neighborhood: '東心斎橋1-16-20、ステージアビルの4階。心斎橋駅6番出口から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。懐石のコースには麩、魚の味噌焼き、醤油で食べる寿司が入る。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、鴨の寿司と懐石で、だしを使う。',
    notes: '[寿司懐石・東心斎橋、4階の個室] 心斎橋のにぎわいから少し離れたビルの4階、2026年11月で21周年 (食べログ) の、寿司と日本焼肉の小さなグループの本店。カウンターと、2名から24名までの掘りごたつの個室があり、京の石畳を思わせる空間に、陶芸家 内田鋼一の器。寿司は日本各地の天然の魚の懐石のコースの中で出てくる。2026年10月の15,000円の Genji コースは、とうもろこし豆腐と秋の前菜から、dobin mushi、お造り5種、鰆の2品、Kawachi の鴨のロースト、にぎり5貫、そして評判の Takara Farm のソフトクリームまで。家族の誕生日にも使われ、スタッフも一緒に祝ってくれる。30,000円のコースで寿司が5貫だけでは寿司屋としては物足りないという人もいたので (2026年9月)、にぎりはアラカルトで追加を。サービス料1,200円。',
  });
}

// ================================================================ 蟹かに城
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144240/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kanikanijo.com/';
  const H = day(['16:00', '23:30']);
  put({
    id: 'osaka_kani_kani_jo_nipponbashi', name: '蟹かに城 (Kani Kani Jo)', category: 'OMNI',
    lat: 34.664415, lng: 135.505535, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Crab courses include crab tempura, a hot pot in crab broth, rice porridge and crab gratin; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab, fugu and eel specialist.',
    hours_raw: 'Winter (October–March) daily 16:00–23:30, last order 22:30; summer (April–September) 11:30–14:00 and 17:00–22:00; December weekends and 24–30 December 15:00–23:30; 31 December–3 January 15:00–21:00; open year-round (Tabelog). No eel dishes in December and January (Tabelog). Book through the shop\'s website; online bookings need a course for everyone, limited courses up to two days ahead; 2-hour limit; 10% service charge from 31 December to 3 January (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, Alipay and WeChat Pay (Tabelog). 46 seats, all in private rooms over two floors, up to 20 in one; non-smoking (Tabelog). A tank of live crabs and fugu at the entrance (September 2026). Opened 30 September 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-6-15, near Namba Grand Kagetsu — 5 min from Nippombashi Stn exit 5',
    cuisine: 'Crab in many styles, with fugu and, in season, conger eel and eel (Tabelog) · Hokkai course of snow crab, seven dishes: crab jelly, crab sashimi, crab miso with cucumber, crab tempura, crab hot pot, rice porridge, ice cream, ¥7,980 (September–October 2026; ¥7,900 in one September 2026 review) · the Shell course of crab sashimi, crab miso, grilled crab, tempura and hot pot (Tabelog) · live snow crab from the tank cooked two ways of your choice: sashimi, boiled or hot pot (Tabelog) · branded crabs at higher prices (September 2026) · crab gratin ¥1,500, draft beer ¥680 (September 2026) · summer hitsumabushi of eel (September 2026) · crab sake, roasted crab legs steeped in hot sake (Tabelog)',
    website: SITE, gmaps: gm('蟹かに城 日本橋'), menu_url: SITE,
    notes: "[Crab · Nippombashi, private rooms] A crab house of private rooms on two floors near Namba Grand Kagetsu, opened in 2024, with a tank of live crabs and fugu by the door. The entry course is the one to know: the ¥7,980 Hokkai course of snow crab, seven dishes from crab jelly and sweet, firm sashimi through crab miso with cucumber and crisp tempura to a hot pot whose broth turns into a rice porridge at the end. Higher courses and branded crabs cost more, and the tank crabs can be cooked two ways of your choice. In summer it serves eel hitsumabushi instead. Diners in September and October 2026 found the course good value and the rooms calm. Book on the shop's website, and note the 2-hour limit.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a crab specialist serving crab as sashimi, tempura, charcoal-grilled and sukiyaki; snow crab moults more than ten times over eight to ten years; all private rooms; opened 30 September 2024. No operator or chef named in the sources read.', philosophy: null, specialty: 'Snow-crab courses; crab hot pot with rice porridge.',
      anecdotes: [
        { text: '"Upon entering the restaurant, the first thing that caught my eye was a large aquarium filled with swimming crabs and fugu." — September 2026, the Hokkai course ¥7,980.', source: R + 'B535520962/' },
        { text: '"The rich crab miso was served with cucumber for dipping!" — October 2026.', source: R + 'B538182960/' },
        { text: '"For the third serving, I topped it with wasabi and poured dashi (broth) over it to make eel ochazuke" — September 2026, the summer hitsumabushi.', source: R + 'B535367684/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 蟹かに城、かに・ふぐ・鍋、大阪市中央区日本橋2-6-15、日本橋駅5番出口から徒歩5分、冬 (10月〜3月) 16:00〜23:30 (L.O.22:30)、夏 (4月〜9月) 11:30〜14:00・17:00〜22:00、12月の土日と12月24〜30日は15:00〜23:30、12月31日〜1月3日は15:00〜21:00、年中無休、12月と1月はうなぎなし、予約は公式サイトから、ネット予約はコースのみ、2時間制、年末年始はサービス料10%、カード・QR可、46席、全席個室 (1階と2階)、禁煙、2024年9月30日オープン。店の紹介 (英訳): ズワイガニは卵から10回以上脱皮して8〜10年、いけすの活がにを刺身・ゆで・鍋から2つの調理法で、刺身・かにみそ・焼きがに・天ぷら・鍋のコース、かにの脚を焼いて熱燗に浸したかに酒。口コミ(2026年9月〜10月): 北海コース7,900円 (かにグラタン1,500円、生ビール680円、煮こごり、天ぷら、〆は雑炊、銘柄がにも)、北海コース7,980円 (煮こごり、刺身、かにみそ、天ぷら、かに鍋、雑炊、アイス)、かにとふぐのいけす、夏のひつまぶし、全席個室で落ち着く、Namba Grand Kagetsu の近く。',
      confidence: 'medium', sources: [TB, R + 'B520300416/', R + 'B535367684/', R + 'B535520962/', R + 'B536058354/', R + 'B536117338/', R + 'B537440229/', R + 'B537815752/', R + 'B537994734/', R + 'B538028075/', R + 'B538182960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set crab courses in private rooms; book on the website (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-6-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目6番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537815752/', R + 'B520300416/'],
    price_note: 'Prices from September and October 2026 reviews (tax included); one September review gives ¥7,900 for the Hokkai course.', last_checked: TODAY, items: [
      it('北海コース', '', 'Hokkai course of snow crab (7 dishes)', '¥7,980', 'Courses', 'no', 'no', 'September and October 2026 reviews.', 'hokkai_course'),
      it('かにグラタン', '', 'Crab gratin', '¥1,500', 'À la carte', 'no', 'no', 'September 2026 review.', 'kani_gratin'),
      it('', '', 'Eel hitsumabushi (summer)', '', 'Seasonal', 'ask', 'no', 'September 2026 review.', 'hitsumabushi'),
    ] }, {
    cuisine: 'いろいろな調理法のかに、ふぐ、季節には鱧とうなぎも (食べログ)・ズワイガニの北海コース7品: 煮こごり、かにの刺身、きゅうりを添えたかにみそ、かにの天ぷら、かに鍋、雑炊、アイス、7,980円 (2026年9月〜10月。2026年9月の口コミでは7,900円)・刺身、かにみそ、焼きがに、天ぷら、鍋のコース (食べログ)・いけすの活ズワイガニを刺身、ゆで、鍋から好きな2つの調理法で (食べログ)・銘柄がには高め (2026年9月)・かにグラタン1,500円、生ビール680円 (2026年9月)・夏はうなぎのひつまぶし (2026年9月)・かにの脚を焼いて熱燗に浸したかに酒 (食べログ)',
    neighborhood: '日本橋2-6-15、Namba Grand Kagetsu の近く。日本橋駅5番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。かにのコースにはかにの天ぷら、かにのだしの鍋、雑炊、かにグラタンも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。かに、ふぐ、うなぎの専門店。',
    notes: '[かに・日本橋、全席個室] Namba Grand Kagetsu の近くにある、2フロアが全部個室のかにの店で、2024年オープン。入口には活きたかにとふぐのいけす。覚えておきたいのは入門のコースで、ズワイガニの北海コース7,980円は、煮こごり、甘くしっかりした刺身から、きゅうりで食べるかにみそ、さくさくの天ぷら、そして最後は雑炊になるかに鍋まで7品。上のコースや銘柄がには値段も上がり、いけすのかには好きな2つの調理法で。夏はうなぎのひつまぶしも。2026年9月と10月の口コミでは、コースはお得で個室は落ち着くという声。予約は店のサイトから、2時間制。',
  });
}

// ================================================================ まえだ家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099032/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://osaka-maedaya.com/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_maedaya_higashishinsaibashi', name: 'まえだ家 (Maeda Ya)', category: 'OMNI',
    lat: 34.674609, lng: 135.503705, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is offered with soy sauce, salt or liver soy sauce; the menu also has tempura, tuna katsu, shrimp mayonnaise and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the chawanmushi, tempura and rice bowls are built on fish, shellfish and egg.',
    hours_raw: 'Daily 17:00–02:00, last order 02:00; open year-round (Tabelog). Reservations accepted, with a 2-hour stay; phone bookings take priority over online ones; parties of 2–3 may be seated at the counter; seat-only bookings get a sashimi platter for the table; depending on bookings you may be seated at the sister shop Bettei, two minutes away (Tabelog). Table charge ¥500 a person, included in courses; school-age children pay the charge and order a drink (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 29 seats with a 12-seat counter and tables; private hire for 20–50; non-smoking, ashtray outside; free Wi-Fi (Tabelog). In a basement that can be hard to find (October 2026). Opened 13 July 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-12-19, basement of the エイトビルヂング — 3 min from Shinsaibashi Stn',
    cuisine: 'Seafood izakaya: fish from the central market each day, by a cook from a former fish shop, with creative obanzai (Tabelog) · the signature assorted sashimi, some pieces lightly seared, to eat with soy sauce, salt or liver soy sauce (August–September 2026) · course ¥6,500 (August–September 2026): appetizers such as salt-boiled raw peanuts, marinated bonito and fish in sweet vinegar; salad with cheese and prosciutto; assorted sashimi; salt-grilled ayu; tempura of autumn eel and Senshu water eggplant; roast venison from Itoshima, Fukuoka; a small bowl of sakura shrimp and shirasu; dessert · à la carte: chilled chawanmushi with salmon roe, shrimp mayonnaise, bonito tataki, fried tofu, sake-steamed clams, rare tuna katsu, shrimp chili with egg, butternut squash soup, a small salmon-roe bowl, fried rice (2026 reviews) · more than 30 sakes, awamori, about 10 Italian and Sicilian wines (Tabelog) · table charge ¥500',
    website: SITE, gmaps: gm('まえだ家 東心斎橋'), menu_url: null,
    notes: "[Seafood izakaya · Higashi-Shinsaibashi, sashimi until 2 a.m.] A hidden basement izakaya three minutes from Shinsaibashi Station, run as an independent shop by a cook who came from a fish shop, buying at the central market every day. The thing to order is the assorted sashimi, some pieces lightly seared, which staff suggest eating with salt or liver soy sauce as well as plain soy; then pick from a long list of small plates (chilled chawanmushi, sake-steamed clams, rare tuna katsu, shrimp chili with egg) or take the ¥6,500 course, which in September 2026 ran to salt-grilled ayu, eel and water-eggplant tempura and Itoshima venison. Over 30 sakes and Sicilian wines. Open every night until 2 a.m. Diners praise the freshness and the friendly staff; one found three dishes and three drinks over ¥10,000 (October 2026). Table charge ¥500.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed) from a former fish shop (Tabelog)'], origin: null, background: 'Per the shop-maintained Tabelog listing: seafood dishes and creative obanzai by a professional cook from a former fish shop, fresh seasonal ingredients from the market every day, an independent shop happy to take requests; sister shops まえだ家 別邸 (東心斎橋1-14-23 住吉ビル B1F, two minutes away) and JAZZ BERRY (北堀江1-9-18). Opened 13 July 2017.', philosophy: '"Confident in fish" (Tabelog).', specialty: 'Assorted sashimi; seasonal seafood small plates; sake.',
      anecdotes: [
        { text: '"They recommend various ways to enjoy it, not just with soy sauce, but also with salt and liver soy sauce." — August 2026, the assorted sashimi.', source: R + 'B534104481/' },
        { text: '"It has been my favorite place for the past three years, and I keep coming back." — September 2026.', source: R + 'B535905716/' },
        { text: '"Three dishes, two soft drinks, and one chuhai cost over JPY 10,000." — October 2026.', source: R + 'B537670621/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): まえだ家、魚介料理・居酒屋・鍋、大阪市中央区東心斎橋1-12-19 エイトビルヂング B1F、心斎橋駅から徒歩3分、毎日17:00〜翌2:00、年中無休、予約可 (2時間制、電話の予約が優先、2〜3名はカウンターのことも、席のみの予約は人数分の盛り合わせ、予約状況により本店か別邸へ案内)、チャージ1人500円 (コースは込み)、小学生以上はチャージとワンドリンク、カード・PayPay 可、29席 (カウンター12、テーブル)、貸切20〜50名、禁煙 (店の外に灰皿)、Wi-Fi、2017年7月13日オープン。店の紹介 (英訳): 元魚屋のプロの料理人による魚介料理と創作おばんざい、毎日市場から仕入れる旬の食材、日本酒30種以上、泡盛、Italy と Sicily のワイン約10種、個人店なので要望にお応え、姉妹店 まえだ家 別邸 (東心斎橋1-14-23 住吉ビル B1F) と JAZZ BERRY (北堀江1-9-18)。口コミ(2026年8月〜10月): 名物のお造りの盛り合わせ (塩や肝醤油でも)、6,500円のコース (落花生の塩ゆで、かつおの漬け、魚の甘酢漬け、チーズと生ハムのサラダ、お造り、鮎の塩焼き、秋のうなぎと Senshu の水なすの天ぷら、Itoshima の鹿のロースト、桜えびとしらすの小丼、デザート)、冷たい茶碗蒸し、エビマヨ、かつおのたたき、あさりの酒蒸し、レアのマグロカツ、卵のエビチリ、いくらの小丼、チャーハン、スタッフが親切、3品と3杯で1万円を超えたという声。',
      confidence: 'medium', sources: [TB, R + 'B534049549/', R + 'B534104481/', R + 'B534435760/', R + 'B535397556/', R + 'B535401739/', R + 'B535905716/', R + 'B535970139/', R + 'B536386389/', R + 'B537670621/', R + 'B537693543/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A long à la carte list and a set course; staff give recommendations (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋1-12-19 エイトビルヂング B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目12番19号 (go) 11m. 鳥焼酒場 暁 (osaka_toriyaki_sakaba_akatsuki) is on 1F of the same building (エイトビルヂング) with a pin about 2 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535401739/'],
    price_note: 'Course price from August and September 2026 reviews; table charge from the Tabelog listing. Sashimi prices are not given.', last_checked: TODAY, items: [
      it('', '', 'Course (8 dishes)', '¥6,500', 'Courses', 'ask', 'no', 'August and September 2026 reviews.', 'course_6500'),
      it('', '', 'Assorted sashimi (signature)', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'sashimi_moriawase'),
      it('', '', 'Chilled chawanmushi', '', 'Small dishes', 'ask', 'no', 'August and September 2026 reviews.', 'hiyashi_chawanmushi'),
      it('', '', 'Table charge (per person)', '¥500', 'Charge', '', '', 'Tabelog listing.', 'table_charge'),
    ] }, {
    cuisine: '魚介の居酒屋: 元魚屋の料理人が毎日中央市場から仕入れる魚、創作おばんざいも (食べログ)・名物のお造りの盛り合わせ、軽く炙ったものもあり、醤油のほか塩や肝醤油でも (2026年8月〜9月)・6,500円のコース (2026年8月〜9月): 落花生の塩ゆで、かつおの漬け、魚の甘酢漬けなどの前菜、チーズと生ハムのサラダ、お造りの盛り合わせ、鮎の塩焼き、秋のうなぎと Senshu の水なすの天ぷら、Itoshima (Fukuoka) の鹿のロースト、桜えびとしらすの小丼、デザート・アラカルト: いくらをのせた冷たい茶碗蒸し、エビマヨ、かつおのたたき、揚げ豆腐、あさりの酒蒸し、レアのマグロカツ、卵のエビチリ、バターナッツかぼちゃのスープ、いくらの小丼、チャーハン (2026年の口コミ)・日本酒30種以上、泡盛、Italy と Sicily のワイン約10種 (食べログ)・チャージ500円',
    neighborhood: '東心斎橋1-12-19、エイトビルヂングの地下1階。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。刺身は醤油、塩、肝醤油で食べ、メニューには天ぷら、マグロカツ、エビマヨ、チャーハンもある。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、茶碗蒸し、天ぷら、丼も魚、貝、卵が中心。',
    notes: '[魚介の居酒屋・東心斎橋、夜2時まで刺身] 心斎橋駅から3分、地下の隠れ家のような居酒屋。元魚屋の料理人が個人店として営み、毎日中央市場で仕入れる。頼むならお造りの盛り合わせで、軽く炙ったものもあり、醤油だけでなく塩や肝醤油でもすすめてくれる。あとは長いメニューから小皿を (冷たい茶碗蒸し、あさりの酒蒸し、レアのマグロカツ、卵のエビチリ)、または6,500円のコースを。2026年9月のコースは鮎の塩焼き、うなぎと水なすの天ぷら、Itoshima の鹿まで。日本酒は30種以上、Sicily のワインも。毎晩夜2時まで。新鮮さと親切なスタッフが好評で、3品と3杯で1万円を超えたという人も (2026年10月)。チャージ500円。',
  });
}

save();
