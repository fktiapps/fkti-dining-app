// Kyoto priority (kyoto-missed), worker osw13, batch 80 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 深夜めし雑小屋, もつ田 河原町店, フルカ, The みます屋.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 深夜めし雑小屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26028282/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.zacoya.com/zacoya/detail.html?id=201';
  const H = day(['20:00', '29:00']);
  put({
    id: 'kyoto_shinya_meshi_zakoya', name: '深夜めし雑小屋 (Shinya Meshi Zakoya)', category: 'OMNI',
    lat: 35.005717, lng: 135.770668, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: scallop tempura, shrimp fried rice and soy-based seafood dishes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, seafood rice bowls, dried squid (2017–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 20:00–5:00; closed Monday (Retty lists 20:00–6:00, last order 5:00). No reservations. Smoking allowed (Tabelog; January 2025). Cards and e-money; no QR. Often one cook alone, so expect a wait when busy (February 2023). In a narrow alley between Kiyamachi and Pontocho, 1F of the Higashi-Kiyamachi Building.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi–Pontocho alley, Shijo — 4 min walk from Gion-Shijo',
    cuisine: 'A late-night seafood shokudo-izakaya, part of the Zakoya group of Kyoto fish bars, open till dawn (2017–2026 reviews) · "fisherman\'s meal" seafood rice bowl; assorted sashimi; toro-taku; tuna with wasabi sprouts (2017–2026) · scallop tempura; shrimp fried rice; "extreme" dried squid (2024–2026) · sake and shochu',
    website: SITE, gmaps: gm('深夜めし雑小屋 木屋町'), menu_url: null,
    notes: '[Late-night seafood · Kiyamachi alley, open till 5 a.m.] A tiny alley izakaya between Kiyamachi and Pontocho that only opens at 20:00 and runs till dawn, for market seafood when everything else has shut: seafood bowls, sashimi, scallop tempura and shrimp fried rice from a characterful cook. One diner found it cluttered with a grubby floor and smokers inside (January 2025). Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, not named in a source; part of the Zakoya (雑小屋) group'], origin: null,
      background: 'Reviewers from 2017 to 2026 describe a hidden alley shop and a quiet, attentive owner-cook with a strong presence who often runs it alone (February 2023; March 2024; August 2024), and call it the late-night shop of a group of Kyoto seafood izakaya with several Zakoya locations (January 2023; March 2024; January 2026). The group\'s size was not found.',
      philosophy: null,
      specialty: 'Late-night seafood rice bowls; sashimi.',
      anecdotes: [
        { text: 'February 2023: "Since the owner is managing everything by himself, let\'s keep in mind that there might be a slight wait during busy times."', source: R + 'B461538081/' },
        { text: 'January 2025: "The interior of the restaurant was quite cluttered with a lot of items, and the cleanliness of the floor was a bit concerning. Since this place allows smoking indoors, there were also people puffing away nearby."', source: R + 'B498495285/' },
      ],
      japanese_sources_summary: '食べログ: 深夜めし雑小屋、食堂、中京区下樵木町202-1 東木屋町ビル 1F、祇園四条から274m、火〜日 20:00〜翌5:00、月曜休み、予約不可、喫煙可、カード・電子マネー可、QR不可。Retty: 火〜日 20:00〜翌6:00 (L.O. 5:00)、市場直送の魚介。口コミ (2017年10月〜2026年8月、英語): 雑小屋グループの深夜の店、木屋町と先斗町の間の路地、漁師めし (海鮮丼)、刺身の盛り合わせ、トロたく、まぐろと芽わさび、ほたての天ぷら、海老チャーハン、するめ、焼酎、ひとりで切り盛りする存在感のある店主、店内が雑然として床が気になり喫煙者もいたという声、可もなく不可もなくという声。',
      confidence: 'low', sources: [TB, SITE, 'https://retty.me/theme/200247513/', R + 'B297683394/', R + 'B461538081/', R + 'B467058708/', R + 'B473730391/', R + 'B474462800/', R + 'B489495715/', R + 'B498495285/', R + 'B508527917/', R + 'B512949108/', R + 'B520503307/', R + 'B533590472/'] },
    cultural_comfort: { level: 'japanese', note: 'Late-night counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町202-1 東木屋町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005762, 135.770668); cross-checked: GSI 京都府京都市中京区下樵木町202番地 (lot) 16m; offset about 5 m south because kyoto_g_men_kiyamachi sits 2.3 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B297683394/', R + 'B474462800/'],
    price_note: 'No prices in the sources; about ¥2,000–4,000 a head (2023–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Fisherman\'s meal (seafood rice bowl)', null, 'Rice', 'ask', 'no', 'October 2017; January 2023.', 'kaisendon'),
      it('', '', 'Shrimp fried rice', null, 'Rice', 'no', 'no', 'April 2024.', 'fried_rice'),
    ] }, {
    cuisine: '雑小屋グループの深夜の海鮮の食堂・居酒屋で、明け方まで (2017〜2026年の口コミ)・海鮮丼の「漁師めし」、刺身の盛り合わせ、トロたく、まぐろと芽わさび (2017〜2026年)・ほたての天ぷら、海老チャーハン、するめ (2024〜2026年)・日本酒と焼酎',
    neighborhood: '木屋町と先斗町の間の路地、四条。祇園四条から徒歩4分',
    gf_detail: 'グルテンフリーではない: ほたての天ぷら、海老チャーハン、醤油の魚介料理 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、海鮮丼、するめの海鮮居酒屋 (2017〜2026年の口コミ)。',
    notes: '[深夜の海鮮・木屋町の路地、朝5時まで] 木屋町と先斗町の間の路地にある小さな居酒屋で、20時に開いて明け方まで。ほかが閉まった後に市場の魚を。海鮮丼、刺身、ほたての天ぷら、海老チャーハンを個性的な店主が。店内が雑然として床が汚く、喫煙者もいたという声も (2025年1月)。月曜休み。',
  });
}

// ================================================================ もつ田 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043390/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_motsuden_kawaramachi', name: 'もつ田 河原町店 (Motsuden Kawaramachi)', category: 'OMNI',
    lat: 35.006112, lng: 135.769831, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: motsu-suki in a soy sukiyaki sauce, white-miso motsu-nabe, motsu katsu, udon and champon finishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef offal hot pots, raw offal yukhoe, tongue (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 18:00–24:00; closing days vary. Reservations taken; groups of 9 or more confirm by phone. Fully booked by 19:00 on a November 2025 night. Order by QR code; pay at the register (July 2025). Motsu-suki for at least two servings when two or more dine, one serving allowed solo (August 2025). 30 seats; non-smoking; children welcome. Cards (incl. UnionPay) and PayPay; no e-money. 2F, above a horumon shop (August 2025). Opened 17 July 2025 (review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Shijo (Bizenjima-cho) — 5 min walk from Gion-Shijo',
    cuisine: 'A motsu (offal) hot-pot specialist opened in July 2025 (2025–2026 reviews) · "stamina motsu-sukiyaki" of five kinds of offal in a garlicky sukiyaki sauce; white-miso motsu-nabe (Hot Pepper; 2025–2026) · Motsuden yukhoe of mixed raw cuts; sliced heart; steamed tongue; sumotsu; tendon stew; motsu katsu (2025–2026) · udon or champon to finish; courses with all-you-can-drink (Tabelog; January 2026)',
    website: null, gmaps: gm('もつ田 河原町店'), menu_url: null,
    notes: '[Motsu-nabe · Kawaramachi, garlicky offal sukiyaki] A clean, stylish second-floor offal house near Kawaramachi, opened in July 2025: garlic-heavy motsu-sukiyaki and white-miso motsu-nabe, a mixed raw-offal yukhoe, tongue and motsu katsu, with QR ordering and courses that fill up by seven. Solo diners may order one serving. Open nightly to midnight.',
    chef_bio: { chef_name: null, roles: ['Owner, not named in a source'], origin: null,
      background: 'Opened 17 July 2025 (July 2025 review). Reviewers in 2025–2026 describe a clean, stylish room upstairs from a horumon shop, QR ordering, fast drinks, an owner who let a solo diner order one serving of motsu-suki (August 2025), and full houses by 19:00 (November 2025). Whether "河原町店" has sister shops was not found.',
      philosophy: null,
      specialty: 'Motsu-sukiyaki; Motsuden yukhoe.',
      anecdotes: [
        { text: 'August 2025: "the owner kindly told me that it\'s fine to order just one serving for a single guest… For two or more people, orders must be placed for at least two servings."', source: R + 'B511659625/' },
        { text: 'November 2025: "It\'s a popular spot that was fully booked by 7 PM today."', source: R + 'B517198877/' },
      ],
      japanese_sources_summary: '食べログ: もつ田 河原町店、もつ鍋・居酒屋、中京区備前島町309-1 2F、祇園四条駅から徒歩5分、毎日 18:00〜24:00、休みは変動、予約可 (9名以上は電話)、30席、禁煙、子供可、コース・飲み放題、カード・PayPay可、電子マネー不可。ホットペッパー: 五種類のホルモンをニンニクの効いた特製すき焼きタレで食べるもつすきやき、白味噌もつ鍋。口コミ (2025年7月〜2026年11月、英語): 2025年7月17日オープン、QRコードで注文、スタミナもつすき、もつ田ユッケ、ハツ刺し、蒸しタン、酢もつ、すじ煮込み、もつカツ、締めのうどんやちゃんぽん、一人でも1人前で注文可 (2人以上は2人前から)、19時に満席、清潔でおしゃれ、1階はホルモンの店。',
      confidence: 'medium', sources: [TB, 'https://www.hotpepper.jp/strJ004421260/', R + 'B510607255/', R + 'B511659625/', R + 'B512757246/', R + 'B515679005/', R + 'B517198877/', R + 'B521771233/', R + 'B523885213/', R + 'B526021289/', R + 'B529303157/', R + 'B538568095/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; one serving allowed for solo diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区備前島町309-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006112, 135.769831); cross-checked: GSI 京都府京都市中京区備前島町309番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523885213/'],
    price_note: 'No prices in the sources; about ¥3,000–5,000 a head (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Stamina motsu-sukiyaki (min. two servings for groups)', null, 'Hot pot', 'no', 'no', 'August 2025; May 2026.', 'motsunabe'),
      it('', '', 'Motsuden yukhoe (mixed raw offal)', null, 'Small plates', 'ask', 'no', 'January–September 2026.', 'yukhoe'),
    ] }, {
    cuisine: '2025年7月開店のもつ鍋の専門店 (2025〜2026年の口コミ)・5種のホルモンをにんにくの効いたすき焼きのたれで食べる「スタミナもつすき」、白味噌もつ鍋 (ホットペッパー、2025〜2026年)・いろいろな部位のもつ田ユッケ、ハツ刺し、蒸しタン、酢もつ、すじ煮込み、もつカツ (2025〜2026年)・締めはうどんかちゃんぽん。飲み放題付きのコース (食べログ、2026年1月)',
    neighborhood: '河原町、四条の北 (備前島町)。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: 醤油のすき焼きだれのもつすき、白味噌のもつ鍋、もつカツ、締めのうどんやちゃんぽん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛もつの鍋、生のもつのユッケ、タン (2025〜2026年の口コミ)。',
    notes: '[もつ鍋・河原町、にんにくのもつすき] 河原町近くのビル2階の清潔でおしゃれなもつの店で、2025年7月開店。にんにくの効いたもつすきや白味噌のもつ鍋、生のもつのユッケ、タン、もつカツを、QRコードで注文。コースは19時には満席に。一人なら1人前で注文可。毎日0時まで。',
  });
}

// ================================================================ フルカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043234/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_furuka_fuyacho', name: 'フルカ (Furuka)', category: 'OMNI',
    lat: 35.00445, lng: 135.765686, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog lists gluten-free options, but no safety detail is given; fried shrimp, pasta and pizza are on the menu (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options; the menu is otherwise meat, cheese and seafood (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tabelog: 16:00–24:00 (last orders food 23:00, drinks 23:30); closed Thursday. Reviewers mention afternoon drinking from 15:00 (June 2025; October 2026). Reservations taken; private hire for up to 20 seated or 30 standing by phone. No service charge — Tabelog, Japanese original 「なし」 (the English page says 10% is added). 28 seats: 8 at the counter, 20 at tables. Non-smoking. English menu; sommelier; school-age children welcome. Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. 1F on the east side of Fuyacho-dori just north of Shijo, in the former Lemon Sakaba premises. Opened 9 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho, north of Shijo — 5 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A green-themed Italian bar of wine and small plates, open from the afternoon (2025–2026 reviews) · chicken pâté; salami and prosciutto; Caprese; omelette; onion rings; crispy shrimp fritto (2026) · Margherita pizza; hamburg steak; wagyu steak; Neapolitan pasta (2026) · a wide wine list including sparkling, with a sommelier; desserts (Tabelog; 2025–2026)',
    website: null, gmaps: gm('フルカ 桝屋町 イタリアン'), menu_url: null,
    notes: '[Italian bar · Fuyacho by Shijo, afternoon wine and small plates] A green-hued Italian wine bar near Shijo that opens mid-afternoon: chicken pâté, salumi, Caprese, crispy shrimp, Margherita pizza and wagyu steak with a long wine list, at the counter or tables. Some found prices high for the portions (October 2025), choices of pasta and salad thin, and the restroom not clean (March 2026). No service charge. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 9 June 2025 (Tabelog) in the former premises of Lemon Sakaba (August 2025 review). Reviewers in 2025–2026 describe a calm, stylish room with mood lighting, friendly staff and a wine list they praised.',
      philosophy: null,
      specialty: 'Wine with Italian small plates.',
      anecdotes: [
        { text: 'October 2025: "the prices are a bit on the higher side. While the flavors are definitely reliable, the portion sizes give a somewhat overpriced impression."', source: R + 'B515326066/' },
        { text: 'March 2026: "The chicken pâté was exceptionally delicious!… The downsides are that the restroom wasn\'t very clean and the only pasta option was Neapolitan."', source: R + 'B524826324/' },
      ],
      japanese_sources_summary: '食べログ: フルカ、イタリアン・バル・ワインバー、中京区桝屋町514 コリスアルタス 1F、京都河原町駅から徒歩5分、木曜以外 16:00〜24:00 (料理 L.O. 23:00、ドリンク L.O. 23:30)、木曜休み、予約可 (貸切は電話)、原文でサービス料「なし」、28席 (カウンター8、テーブル20)、禁煙、英語メニュー、ソムリエ、小学生以上可、野菜にこだわり・ベジタリアン対応・グルテンフリー対応の表示、カード可、電子マネー・QR不可、2025年6月9日オープン。口コミ (2025年6月〜2026年10月、英語): 緑がテーマ、昼から飲める、レモン酒場の跡、鶏のパテ、サラミと生ハム、カプレーゼ、オムレツ、オニオンリング、海老のフリット、マルゲリータ、ハンバーグ、和牛ステーキ、ナポリタン、ワインが豊富、値段の割に量が少ないという声、サラダやパスタの種類が少ないという声、トイレが清潔でないという声。',
      confidence: 'medium', sources: [TB, R + 'B508981221/', R + 'B511825101/', R + 'B515326066/', R + 'B519724451/', R + 'B520273062/', R + 'B524826324/', R + 'B532223197/', R + 'B538072914/'] },
    cultural_comfort: { level: 'english', note: 'English menu; sommelier; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桝屋町514 コリスアルタス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004450, 135.765686); cross-checked: GSI 京都府京都市中京区桝屋町514番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538072914/'],
    price_note: 'No prices in the sources; about ¥5,000–8,000 a head (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Chicken pâté', null, 'Antipasti', 'ask', 'no', 'March 2026.', 'pate'),
      it('', '', 'Margherita pizza', null, 'Pizza', 'no', 'no', 'October 2026.', 'pizza'),
    ] }, {
    cuisine: '昼から開く、緑がテーマのワインと小皿のイタリアンバル (2025〜2026年の口コミ)・鶏のパテ、サラミと生ハム、カプレーゼ、オムレツ、オニオンリング、海老のフリット (2026年)・マルゲリータ、ハンバーグ、和牛ステーキ、ナポリタン (2026年)・スパークリングを含む豊富なワインとソムリエ、デザート (食べログ、2025〜2026年)',
    neighborhood: '麩屋町、四条の北。京都河原町駅から徒歩5分',
    gf_detail: '要確認: 食べログではグルテンフリー対応とあるが、安全面の説明はない。海老のフリット、パスタ、ピザもある (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応。ほかは肉、チーズ、魚介のメニュー (食べログ、2025〜2026年の口コミ)。',
    notes: '[イタリアンバル・四条の麩屋町、昼からのワインと小皿] 四条近くの緑が基調のイタリアンのワインバルで、午後から開く。鶏のパテ、サラミ、カプレーゼ、海老のフリット、マルゲリータ、和牛ステーキに豊富なワインを、カウンターかテーブルで。値段の割に量が少ないという声 (2025年10月)、パスタやサラダの種類が少なくトイレが清潔でないという声 (2026年3月) も。サービス料なし。木曜休み。',
  });
}

// ================================================================ The みます屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004114/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_the_mimasuya_pontocho', name: 'The みます屋 (The Mimasuya)', category: 'OMNI',
    lat: 35.005716, lng: 135.771189, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tofu dengaku, nama-fu, fried eggplant and chicken, saikyo-yaki and soy-based course dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, shrimp, sashimi and dashi in the courses (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00 (last orders food 22:00, drinks 22:30); open all year — check before visiting. Reservations taken; the Kamo-river terrace (noryo-yuka, summer) requires a course booking. Charge ¥300 incl. tax — Tabelog, Japanese original 「チャージ300円（税込）」. 120 seats: 90 upstairs and 30 downstairs, with tatami; shoes off upstairs (March 2026). Non-smoking. Sommelier; children welcome. Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. On Pontocho south of Sanjo, by the park.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, south of Sanjo — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'Creative Kyoto cooking and obanzai over the Kamo River, with a summer terrace (Tabelog; 2026 reviews) · "Takasegawa" course ¥6,380 with a drink and a terrace seat: Kyoto tofu dengaku, simmered shrimp, duck breast, sesame salad and more (May 2026); terrace courses well under the usual ¥10,000 (August 2026) · à la carte obanzai, tamagoyaki, fried eggplant and chicken, nama-fu, kanpachi sashimi, saikyo-yaki; Kyoto gozen (2026) · seasonal kaiseki (Tabelog); a broad sake list; Kyoto craft beer',
    website: 'http://www.the-la-mart.com/', gmaps: gm('The みます屋 先斗町'), menu_url: null,
    notes: '[Creative Kyoto · Pontocho, Kamo River views and a summer terrace] A big two-floor Pontocho restaurant with Kamo River windows and a summer riverside terrace: Kyoto obanzai, tofu dengaku, duck and seasonal kaiseki, with terrace courses from about ¥6,400 including a drink. One terrace diner found the course dry and cold (August 2026). ¥300 charge. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2026 describe a shoes-off second floor with round tables and glass windows on the Kamo River, a riverside terrace with attentive service, and prices reasonable for Pontocho. The みます屋 name is shared with みます屋 おくどはん on Sanjo, already in this app (kyoto_mimasuya_okudohan), and with listings for 先斗町 みます屋 本店 and Mimasuya Italiano on Pontocho (Hot Pepper; Tabelog) — four same-name shops in all, by these sources.',
      philosophy: null,
      specialty: 'Kyoto obanzai; terrace courses.',
      anecdotes: [
        { text: 'August 2026: "The course meal was a bit dry and cold, but I believe that\'s common for terrace dining. While most Japanese-style terrace courses tend to be around JPY 10,000, The Mimasu Ya offers…"', source: R + 'B533016992/' },
        { text: 'June 2026: "I was a bit worried that the staff might not notice me for additional orders since it was outdoors, but I was grateful for their attentive service."', source: R + 'B530494363/' },
      ],
      japanese_sources_summary: '食べログ: The みます屋、創作料理・日本料理・居酒屋、中京区先斗町通三条下ル松本町、阪急河原町駅から徒歩5分、京阪三条駅から徒歩6分、毎日 17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、年中無休、予約可、納涼床の席はコースの予約が必要、原文で「チャージ300円（税込）」、120席 (2階90、1階30)、座敷、禁煙、ソムリエ、子供可、カード可、電子マネー・QR不可、京の旬の食材の会席と鴨川の納涼床。口コミ (2026年3〜10月、英語): 2階は靴を脱いで上がり鴨川が見える、高瀬川コース6,380円 (1ドリンクと床の席、京風豆腐田楽、海老のうま煮、鴨ロース、胡麻のサラダなど)、床のコースとしては手頃、おばんざい、だし巻、なすと鶏の揚げ物、生麩、カンパチの刺身、西京焼き、京御膳、京都のビール、床のコースは冷めて乾いていたという声。',
      confidence: 'medium', sources: [TB, 'https://epark.jp/shopinfo/ozr655971/', R + 'B524854128/', R + 'B527424523/', R + 'B528168282/', R + 'B529361212/', R + 'B530133839/', R + 'B530494363/', R + 'B533016992/', R + 'B533771342/', R + 'B534380143/', R + 'B535115114/', R + 'B535648937/', R + 'B537796584/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off upstairs; terrace by course booking; ¥300 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町通三条下ル松本町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005716, 135.771189); cross-checked: GSI 京都府京都市中京区松本町 (town only; the address has no lot) 28m — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527424523/'],
    price_note: 'Course price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Takasegawa" course with one drink and a terrace seat', '¥6,380', 'Course', 'no', 'no', 'May 2026.', 'izakaya_course'),
    ] }, {
    cuisine: '鴨川を眺める創作の京料理とおばんざい。夏は床も (食べログ、2026年の口コミ)・1ドリンクと床の席付きの「高瀬川」コース6,380円は京風豆腐田楽、海老のうま煮、鴨ロース、胡麻のサラダなど (2026年5月)。床のコースとしては1万円を大きく下回る (2026年8月)・単品でおばんざい、だし巻、なすと鶏の揚げ物、生麩、カンパチの刺身、西京焼き、京御膳 (2026年)・季節の会席 (食べログ)。日本酒が豊富、京都のクラフトビール',
    neighborhood: '先斗町、三条の南。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 豆腐田楽、生麩、なすと鶏の揚げ物、西京焼き、醤油のコース料理 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: コースに鴨、海老、刺身、出汁 (2026年の口コミ)。',
    notes: '[創作京料理・先斗町、鴨川の眺めと夏の床] 鴨川に面した窓と夏の床がある先斗町の大きな2階建ての店。京のおばんざい、豆腐田楽、鴨、季節の会席を、ドリンク付きで6,400円ほどからの床のコースでも。床のコースは冷めて乾いていたという声も (2026年8月)。チャージ300円。毎日営業。',
  });
}

save();
