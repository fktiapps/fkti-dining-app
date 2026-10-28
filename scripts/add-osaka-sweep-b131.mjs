// Osaka sweep (2-mile circle around Dotonbori), batch 131 — mom / small-shop phase (all OMNI).
//   + もんじゃ 麦 (Tsukishima-style monjayaki cooked at the table, mentaiko mochi cheese; to 5:00 on weekends; Higashi-Shinsaibashi 2F)
//   + 麓鳴館 (retro kissa in an alley off Shinsaibashi-suji, European-style curry with potatoes, egg and sausage) — same address as Onomichi Bunka Ramen
//   + 蛸焼とおでん 友の (clam-broth oden and made-to-order takoyaki until 5:00; by Namba exit 32)
//   + とり料理 とり匠 (chicken izakaya since 2011: yakitori, double-cheese tsukune, chicken sashimi, kamameshi; Higashi-Shinsaibashi 2F)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 131);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ もんじゃ 麦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27006530/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '02:00']); const WE = day(['17:00', '05:00']);
  put({
    id: 'osaka_monja_mugi_higashishinsaibashi', name: 'もんじゃ 麦 (Monja Mugi)', category: 'OMNI',
    lat: 34.673479, lng: 135.503272, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: monja batter is wheat flour; Baby Star and ramen toppings; yakisoba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi in the batter; mentaiko, meat and egg toppings; cheese.',
    hours_raw: 'Mon–Thu 17:00–02:00; Fri–Sat 17:00–05:00; Sun 17:00–24:00; closing days not fixed (Tabelog). Staff cook the monja at the table (2026). Cards and PayPay accepted; no e-money; smoking allowed (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: day(['17:00', '23:59']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-1, Kosumi Bldg 2F — 3 min from Shinsaibashi Stn',
    cuisine: 'Tsukishima-style monjayaki · Mugi Special (classic) · mentaiko mochi cheese monja · mentaiko, yuzu-kosho, gratin, Komtang, chicken ramen and Shin Ramyeon monja · toppings: chikuwa, corn, Baby Star, egg yolk · tonpei-yaki · okonomiyaki, yakisoba · sides: avocado sashimi, diced cucumber · 16 seats',
    website: null, gmaps: gm('もんじゃ 麦'), menu_url: null,
    notes: "[Monjayaki · Tsukishima-style monja cooked at your table, Higashi-Shinsaibashi] A lively second-floor monjayaki spot near Shinsaibashi that cooks in the Tsukishima, Tokyo style, rare in Osaka, with staff doing the work on the hot plate in front of you. The batter has a rich dashi base. The classic is the Mugi Special; the mentaiko mochi cheese is the other standby, best with crispy edges and an egg yolk stirred in. Customize with chikuwa, corn and Baby Star, or try rotating monja such as Komtang or Shin Ramyeon. Tonpei-yaki, okonomiyaki and simple sides (avocado sashimi, diced cucumber) fill the gaps. Open until 2:00, or 5:00 on Fridays and Saturdays. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Monjayaki restaurant (Tabelog; 2025–2026 reviews).', philosophy: 'Menu inspired by the monjayaki of Tsukishima, Tokyo (April 2025 review).', specialty: 'Monjayaki.',
      anecdotes: [
        { text: '"The staff skillfully cooked it right in front of us, making the waiting time enjoyable. The melting cheese paired perfectly with the umami of the mentaiko, and even the crispy edges were delicious until the very end." — July 2026, mentaiko cheese monja.', source: R + 'B532129696/' },
        { text: '"This restaurant offers authentic monja-yaki even in Osaka, and the staff prepares it efficiently, allowing us to simply enjoy the meal." — September 2026, Komtang monja.', source: R + 'B536389589/' },
      ],
      japanese_sources_summary: '食べログ: もんじゃ 麦、大阪市中央区東心斎橋1-17-1 コスミビル 2F、心斎橋駅から徒歩3分、長堀橋駅から徒歩5分、月〜木 17:00〜翌2:00、金・土 17:00〜翌5:00、日 17:00〜24:00、定休日不定、カード・PayPay 可、電子マネー不可、16席、20名まで貸切可、喫煙可。口コミ(2025年2月〜2026年9月): 東京・月島の味をもとにしたもんじゃ、だしの濃い生地、Mugi Special、Mentai Mochi Cheese、Mentaiko、Yuzu Kosho、グラタン、Komtang、Chicken Ramen、Shin Ramyeon のもんじゃ、トッピングにちくわ、コーン、Baby Star、卵黄、Tonpei-yaki、お好み焼き、焼きそば、アボカドの刺身、きゅうり、店の人が目の前で焼いてくれる、にぎやかな雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B502520419/', R + 'B531481305/', R + 'B532129696/', R + 'B532580963/', R + 'B534023209/', R + 'B536389589/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the table, so no technique needed (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-1 コスミビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番1号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502520419/', R + 'B532129696/', R + 'B536389589/'],
    price_note: 'No prices in the reviews; JPY 3,000–5,999 per person (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Mugi Special monja', '', 'Monja', 'no', 'no', 'September 2026.', 'mugi_sp'),
      it('', '', 'Mentaiko mochi cheese monja', '', 'Monja', 'no', 'no', 'July 2026.', 'mentai_mochi'),
      it('', '', 'Komtang monja', '', 'Monja', 'no', 'no', 'September 2026.', 'komtang'),
      it('', '', 'Tonpei-yaki', '', 'Teppan', 'no', 'no', 'September 2026.', 'tonpei'),
      it('', '', 'Avocado sashimi', '', 'Sides', 'ask', 'ask', 'September 2026.', 'avocado'),
      it('', '', 'Diced cucumber', '', 'Sides', 'ask', 'ask', 'August 2025.', 'kyuri'),
    ] }, {
    cuisine: '月島風のもんじゃ焼き・Mugi Special (定番)・Mentai Mochi Cheeseもんじゃ・Mentaiko、Yuzu Kosho、グラタン、Komtang、Chicken Ramen、Shin Ramyeon のもんじゃ・トッピング: ちくわ、コーン、Baby Star、卵黄・Tonpei-yaki・お好み焼き、焼きそば・アボカドの刺身、きゅうり・16席',
    neighborhood: '中央区東心斎橋1-17-1 コスミビル 2F。心斎橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。もんじゃの生地は小麦粉、Baby Star やラーメンのトッピング、焼きそば。',
    vegan_detail: 'ヴィーガンではありません。生地のだし、明太子・肉・卵のトッピング、チーズ。',
    notes: '[もんじゃ・東心斎橋、テーブルで焼いてくれる月島風もんじゃ] 心斎橋近くのビル2階のにぎやかなもんじゃの店で、大阪では珍しい東京・月島の流儀、鉄板で店の人が目の前で焼いてくれる。生地はだしが濃い。定番は Mugi Special、もう一つの定番はMentai Mochi Cheeseで、端のカリッとしたところと卵黄を混ぜてどうぞ。ちくわ、コーン、Baby Star で好みに、Komtang や Shin Ramyeon など入れ替わりのもんじゃも。Tonpei-yaki、お好み焼き、アボカドの刺身やきゅうりも。深夜2時まで、金・土は朝5時まで。喫煙可。',
  });
}

// ================================================================ 麓鳴館
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27039925/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_rokumeikan_shinsaibashi', name: '麓鳴館 (Rokumeikan)', category: 'OMNI',
    lat: 34.673819, lng: 135.501904, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: European-style curry roux is usually wheat-thickened — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sausage and egg in the curry.',
    hours_raw: 'Daily 14:00–19:00; hours may change (Tabelog). Reviews from November 2025 describe evening service from 21:00, running as a bar; check before going. Booth seats are mostly self-service (December 2025). Cash only (Tabelog).',
    hours: ALL(day(['14:00', '19:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-3-12, down an alley off the arcade — 206 m from Shinsaibashi Stn',
    cuisine: 'Retro kissa and curry · Rokumeikan curry ¥1,200: European-style, tangy with mild heat, whole potatoes, a soft-boiled egg and sausage, served with knife, fork and spoon · coffee brewed with care, in charming cups · drinks in the evening · counter and booth seats, 19 in all',
    website: null, gmaps: gm('麓鳴館'), menu_url: null,
    notes: "[Kissa · a retro coffee house with European-style curry, Shinsaibashi] An old kissa tucked into an alley just off Shinsaibashi-suji, easy to walk past, with a nostalgic, unhurried interior, a big speaker by the counter and pretty cups. The draw besides the coffee is the Rokumeikan curry (¥1,200): a tangy, gently spicy European-style curry with whole potatoes, a soft-boiled egg and sausage, eaten with knife and fork. One diner found the potato cold in the middle, and coffee on top brings it past ¥1,800. Booth seats are mostly self-service. Tabelog lists 14:00–19:00, but late-2025 reviews describe it opening at night as a bar, so check. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-running kissa (Tabelog; 2025–2026 reviews); featured over two pages in a book on Osaka coffee houses (September 2026 review).', philosophy: null, specialty: 'Coffee; European-style curry.',
      anecdotes: [
        { text: '"The curry comes with chunks of potato, a soft-boiled egg, and sausage… As for the flavor, it has a strong acidity and a hint of spiciness." — September 2026, Rokumeikan curry ¥1,200.', source: R + 'B535012342/' },
        { text: '"With its nostalgic atmosphere from a bygone era, the interior is incredibly calming." — December 2025.', source: R + 'B519690635/' },
      ],
      japanese_sources_summary: '食べログ: 麓鳴館、大阪市中央区心斎橋筋1-3-12、心斎橋から206m、毎日14:00〜19:00 (変更あり)、カード・電子マネー・QR不可、19席。口コミ(2025年11月〜2026年9月): 心斎橋筋から路地に入った懐かしい雰囲気の喫茶店、懐かしく落ち着いた店内、カウンター横の大きなスピーカー、かわいいカップ、丁寧に淹れたコーヒー、麓鳴館カレー1,200円 (欧風、酸味とほのかな辛さ、丸ごとのじゃがいも、半熟卵、ソーセージ、ナイフとフォークとスプーン)、じゃがいもの中が冷たかったという声、コーヒーを付けると1,800円以上、ボックス席はほぼセルフサービス、2025年11月は夜21時からバーとして営業していたという声、大阪の喫茶店の本に2ページで紹介。',
      confidence: 'medium', sources: [TB, R + 'B518745753/', R + 'B518872900/', R + 'B519690635/', R + 'B520755280/', R + 'B522226699/', R + 'B535012342/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet, old-fashioned kissa; self-service at the booths (December 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.673756, 135.501904); same address as Onomichi Bunka Ramen (osaka_onomichi_bunka_ramen_shinsaibashi), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区心斎橋筋一丁目3番12号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535012342/', R + 'B518872900/'],
    price_note: 'Prices from November 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rokumeikan curry', '¥1,200', 'Food', 'no', 'no', 'September 2026.', 'curry'),
      it('', '', 'Coffee', '', 'Drinks', 'ask', 'ask', 'February 2026.', 'coffee'),
    ] }, {
    cuisine: 'レトロな喫茶とカレー・麓鳴館のカレー1,200円: 欧風、酸味とほのかな辛さ、丸ごとのじゃがいも、半熟卵、ソーセージ、ナイフとフォークとスプーンで・丁寧に淹れたコーヒー、かわいいカップ・夜は酒も・カウンターとボックス席、計19席',
    neighborhood: '中央区心斎橋筋1-3-12、アーケードから路地を入る。心斎橋駅から206m',
    gf_detail: 'グルテンフリーではありません。欧風カレーのルウはふつう小麦でとろみをつけるので確認を。',
    vegan_detail: 'ヴィーガンではありません。カレーのソーセージと卵。',
    notes: '[喫茶・心斎橋、欧風カレーのあるレトロな喫茶店] 心斎橋筋から路地を入ったところにある古い喫茶店で、うっかり通り過ぎそうな佇まい、懐かしくゆったりした店内、カウンター横の大きなスピーカー、かわいいカップ。コーヒーのほかの目当ては麓鳴館のカレー(1,200円): 酸味とほのかな辛さの欧風カレーに丸ごとのじゃがいも、半熟卵、ソーセージ、ナイフとフォークで食べる。じゃがいもの中が冷たかったという声もあり、コーヒーを付けると1,800円を超える。ボックス席はほぼセルフサービス。食べログでは14時〜19時だが、2025年末の口コミでは夜にバーとして開いていたので確認を。現金のみ。',
  });
}

// ================================================================ 蛸焼とおでん 友の
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27110625/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_takoyaki_oden_tomono_namba', name: '蛸焼とおでん 友の (Takoyaki to Oden Tomono)', category: 'OMNI',
    lat: 34.665009, lng: 135.498256, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki batter; soy-based oden broth; fish cakes; mustard miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth throughout; octopus; fish cakes.',
    hours_raw: 'Daily 18:00–05:00 (last order 04:00); open year-round (Tabelog). Appetizer charge ¥440 (Tabelog). Busy; seats refill fast (February 2026). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: ALL(day(['18:00', '05:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 1-8-13 (Naniwa-ku) — 30 sec from Namba Stn exit 32',
    cuisine: 'Takoyaki and oden izakaya · oden in a clam broth, served in small portions, cut to share, with the broth clams on the side: pea shoots, bean sprouts, konnyaku with mustard miso and more · takoyaki grilled to order, eaten with salt, in a clam broth, or with other seasonings · mizudako (water octopus) · soft-shell turtle hot pot in season · ¥440 appetizer · 20 seats',
    website: null, gmaps: gm('蛸焼とおでん 友の'), menu_url: null,
    notes: "[Izakaya · clam-broth oden and fresh takoyaki until 5 am, Namba] A busy oden-and-takoyaki izakaya thirty seconds from Namba exit 32, open nightly from 18:00 to 5:00. The oden simmers in a clam broth, comes in small, shareable plates (staff will cut it for a group), and arrives with the plump broth clams themselves; the list runs to unusual picks like pea shoots and bean sprouts. The takoyaki is grilled only after you order, so it lands hot and gooey; try it with salt to taste the broth in the batter, or soaked in the clam broth. One diner rates it above a famous takoyaki shop. Easy solo, too. ¥440 appetizer charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 April 2019 (Tabelog); has a Shinsaibashi branch (October 2026 review).', background: 'Takoyaki and oden izakaya (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Clam-broth oden; made-to-order takoyaki.',
      anecdotes: [
        { text: '"All the oden is tasty, but the takoyaki is exceptional. The flavor of the broth is intense… When you eat it with salt, you can really taste it… [It is grilled] fresh after you order…" — July 2026.', source: R + 'B488678993/' },
        { text: '"The oden menu was extensive, featuring unique items like pea shoots and bean sprouts that I don\'t usually see…" — September 2026.', source: R + 'B534905143/' },
      ],
      japanese_sources_summary: '食べログ: 蛸焼とおでん 友の、大阪市浪速区難波中1-8-13、四つ橋線なんば駅32番出口から徒歩30秒、毎日18:00〜翌5:00 (L.O. 4:00)、年中無休、付き出し440円、カード・PayPay 可、電子マネー不可、20席、2019年4月26日開店。口コミ(2024年7月〜2026年10月): 貝出汁のおでん、少量で人数に合わせて切ってくれる、出汁をとった貝が付く、豆苗やもやしなど珍しい種、からし味噌のこんにゃく、注文を受けてから焼くたこ焼き、塩で食べるとだしの味がわかる、貝出汁をかけたたこ焼き、いろいろな味付け、水ダコ、冬はすっぽん鍋、席がすぐ埋まる人気、一人でも落ち着ける、心斎橋店もある、有名店より好きという声。',
      confidence: 'medium', sources: [TB, R + 'B488678993/', R + 'B506699922/', R + 'B534905143/', R + 'B534970482/', R + 'B535270844/', R + 'B535710248/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Comfortable solo; dishes served on separate plates for sharing (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-8-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; hours notice dated October 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目8番13号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B488678993/', R + 'B534905143/', R + 'B535270844/'],
    price_note: 'No prices in the reviews; JPY 3,000–5,999 per person (Tabelog; 2026 reviews); ¥440 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Oden in clam broth (by the piece)', '', 'Oden', 'no', 'no', 'September 2026.', 'oden'),
      it('', '', 'Konnyaku with mustard miso', '', 'Oden', 'no', 'no', 'September 2026.', 'konnyaku'),
      it('', '', 'Takoyaki (with salt or clam broth)', '', 'Takoyaki', 'no', 'no', 'July 2026.', 'takoyaki'),
      it('', '', 'Mizudako', '', 'Dishes', 'ask', 'no', 'February 2026.', 'mizudako'),
      it('', '', 'Soft-shell turtle hot pot (in season)', '', 'Hot pot', 'no', 'no', 'September 2026.', 'suppon'),
    ] }, {
    cuisine: 'たこ焼きとおでんの居酒屋・貝出汁のおでん、少量で人数に合わせて切ってくれ、出汁をとった貝が付く: 豆苗、もやし、からし味噌のこんにゃくなど・注文を受けてから焼くたこ焼き、塩で、貝出汁をかけて、ほかの味付けも・水ダコ・季節のすっぽん鍋・付き出し440円・20席',
    neighborhood: '浪速区難波中1-8-13。なんば駅32番出口から徒歩30秒',
    gf_detail: 'グルテンフリーではありません。たこ焼きの生地、醤油ベースのおでんのだし、練り物、からし味噌。',
    vegan_detail: 'ヴィーガンではありません。どれも貝出汁、タコ、練り物。',
    notes: '[居酒屋・なんば、朝5時まで開く貝出汁のおでんと焼きたてのたこ焼き] なんば駅32番出口から30秒、毎晩18時から朝5時まで開くにぎわうおでんとたこ焼きの居酒屋。おでんは貝出汁で炊き、少量ずつ取り分けやすい皿で (人数に合わせて切ってくれる)、出汁をとったふっくらした貝も付く。豆苗やもやしなど珍しい種も。たこ焼きは注文を受けてから焼くので熱々でとろとろ、生地のだしを味わうなら塩で、貝出汁に浸しても。有名店より上という声も。一人でも過ごしやすい。付き出し440円。',
  });
}

// ================================================================ とり料理 とり匠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27056602/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '00:30']);
  put({
    id: 'osaka_tori_ryori_torisho_higashishinsaibashi', name: 'とり料理 とり匠 (Tori Ryori Tori Sho)', category: 'OMNI',
    lat: 34.673871, lng: 135.50249, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sweet soy tare on the skewers; kamameshi seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; cheese tsukune; egg over rice.',
    hours_raw: 'Tue–Sun 18:00–00:30 (last order 24:00); closed Mon; hours may change (Tabelog). Kamameshi takes about 40 minutes; order early (October 2025). Appetizer charge ¥500 (Tabelog). Cards and e-money accepted; smoking allowed (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-20, Asorti Shinsaibashi 2F — 2 min from Shinsaibashi Stn exits 5–6',
    cuisine: 'Yakitori and chicken dishes · W (double) cheese tsukune · skin, crispy outside and fluffy within · liver, heart · fresh chicken sashimi · kamameshi, about 40 minutes · egg over rice to finish · cucumber · seasonal appetizers (lotus root) · Sapporo Black beer · ¥500 appetizer · 8 counter seats and tables for four',
    website: null, gmaps: gm('とり料理 とり匠'), menu_url: null,
    notes: "[Yakitori · chicken izakaya with double-cheese tsukune and kamameshi, Higashi-Shinsaibashi] A calm second-floor chicken restaurant near Shinsaibashi, open since 2011, with a counter and a few tables. Start with the W cheese tsukune, which looks nothing like what you expect, and the skin, grilled crisp outside but still fluffy. Liver and heart are rich, and the chicken sashimi is fresh and clean. Order the kamameshi when you sit down; it takes about 40 minutes. The skewers come with a sweet tare; finish with egg over rice. Staff are friendly and have helped stage a surprise celebration with a cake. ¥500 appetizer charge. Smoking allowed. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 April 2011 (Tabelog)', background: 'Yakitori and chicken-dish restaurant (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Yakitori; cheese tsukune; chicken sashimi; kamameshi.',
      anecdotes: [
        { text: '"And the skin! At most places, the fat is rendered out, leaving the skin dry and crispy, but here it\'s both crispy and fluffy, which is surprising." — October 2025.', source: R + 'B473432927/' },
        { text: '"The chicken sashimi was incredibly fresh, with a melt-in-your-mouth texture and no unpleasant odor… I heard that the kamameshi takes about 40 minutes to cook, so I ordered it right away." — October 2025.', source: R + 'B515890857/' },
      ],
      japanese_sources_summary: '食べログ: とり料理 とり匠、大阪市中央区東心斎橋1-18-20 アソルティ心斎橋 2F、心斎橋駅5・6番出口から徒歩2分、火〜日 18:00〜翌0:30 (L.O. 0:00)、月休み、お通し500円、カード・電子マネー可、20席 (カウンター8、4人掛けテーブル3)、20名まで貸切可、喫煙可、2011年4月11日開店。口コミ(2023年10月〜2026年6月): W Cheese Tsukune、外はカリッと中はふわっとした皮、新鮮な鶏刺し、40分ほどかかるKamameshi、レンコンの前菜、レバー、ハツ、きゅうり、甘めのたれ、締めの卵かけご飯、Sapporo Black Beer、気さくな店の人、サプライズのケーキに対応、落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B473432927/', R + 'B515890857/', R + 'B518729342/', R + 'B524468992/', R + 'B526929210/', R + 'B530114886/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter; helps with celebrations (October 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-20 アソルティ心斎橋 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番20号 (go) 10m; OSM とり匠 node/11381490955 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B473432927/', R + 'B515890857/', R + 'B530114886/'],
    price_note: 'No prices in the reviews; JPY 6,000–7,999 average (Tabelog); ¥500 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'W cheese tsukune', '', 'Skewers', 'no', 'no', 'October 2025.', 'cheese_tsukune'),
      it('', '', 'Chicken skin', '', 'Skewers', 'ask', 'no', 'October 2025.', 'kawa'),
      it('', '', 'Liver', '', 'Skewers', 'ask', 'no', 'March 2026.', 'reba'),
      it('', '', 'Heart', '', 'Skewers', 'ask', 'no', 'March 2026.', 'hatsu'),
      it('', '', 'Chicken sashimi', '', 'Dishes', 'ask', 'no', 'October 2025.', 'torisashi'),
      it('', '', 'Kamameshi (about 40 minutes)', '', 'Rice', 'no', 'no', 'October 2025.', 'kamameshi'),
      it('', '', 'Egg over rice', '', 'Rice', 'ask', 'no', 'June 2026.', 'tkg'),
    ] }, {
    cuisine: '焼き鳥と鶏料理・W Cheese Tsukune・外はカリッと中はふわっとした皮・レバー、ハツ・新鮮な鶏刺し・40分ほどかかるKamameshi・締めの卵かけご飯・きゅうり・季節の前菜 (レンコン)・Sapporo Black Beer・お通し500円・カウンター8席と4人掛けテーブル',
    neighborhood: '中央区東心斎橋1-18-20 アソルティ心斎橋 2F。心斎橋駅5・6番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。串の甘い醤油だれ、Kamameshiの味付け。',
    vegan_detail: 'ヴィーガンではありません。どれも鶏、チーズのつくね、卵かけご飯。',
    notes: '[焼き鳥・東心斎橋、W Cheese TsukuneとKamameshiの鶏料理店] 心斎橋近くのビル2階にある落ち着いた鶏料理の店で、2011年開店、カウンターとテーブルが少し。まずは見た目から予想を裏切る W Cheese Tsukuneと、外はカリッと中はふわっとした皮。レバーとハツは濃厚、鶏刺しは新鮮で臭みがない。Kamameshiは40分ほどかかるので座ったらすぐ注文を。串は甘めのたれ、締めは卵かけご飯。店の人は気さくで、ケーキを用意してサプライズのお祝いに協力してくれたことも。お通し500円。喫煙可。月曜休み。',
  });
}

save();
