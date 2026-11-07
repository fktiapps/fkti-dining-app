// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 63.
//   + ナカニシ Nakanishi (Russian vodka bar with matryoshka in the window, Pontocho; rest)
//   + ぎをん関屋 Gion Sekiya (counter kappo run by one chef, Gion Tominaga-cho; rest)
//   + いも松 北別館 Imo Matsu Kita Bekkan (all-you-can-eat-and-drink izakaya, Kiyamachi-Sanjo; rest)
//   + おでんと鉄板焼きスタンド きとま Kitoma (oden, teppan and gyoza with self-serve drinks, Ayanokoji; rest)
//   Rest list (mod 6 = 1) after batch 62, nearest-first — skipped:
//   - 食べ飲み放題 居酒屋 六角酒場ちゃぶちゃぶ 26005675: sub-brand of a large parent — Tabelog's website link is kichiri.co.jp
//     (KICHIRI, a multi-brand restaurant group); Tabelog also notes it closes from 20 September.
//   - うしのほね 本店 26001079: already skipped in an earlier batch.
//   - SNOOPY 茶屋 京都・錦店 26027875: chain (licensed character cafe brand).
//   Brand check: queue-status.jsonl grepped for every crawl id of each name (ナカニシ, 関屋, いも松, きとま) — no earlier skip or
//   done entries. Same-name check, same brand or operator only: ナカニシ — one. 関屋 — one. いも松 — two in our crawls (木屋町店,
//   北別館); a web search found no operator or shop list — drafted with a doubt. きとま — one; it is upstairs from ざきやま
//   (kyoto_yofu_izakaya_zakiyama, in data) at the same address, with no shared operator found. None is a duplicate in
//   data/kyoto.json (main b77d8936) by name or address (若松町138-4; 富永町132 草園ビル 2F — おかる in data is a different shop at
//   132; 材木町181-2 ニュー京都ビル B1F — あおい in data is on the 1F; 綾材木町201-2 日宝綾小路センター 2F).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26005675/', 'sub-brand of a large parent: KICHIRI (kichiri.co.jp); closing from 20 September per Tabelog');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26027875/', 'chain: SNOOPY 茶屋 licensed character cafe');

// ================================================================ ナカニシ Nakanishi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004757/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_vodka_bar_nakanishi_pontocho', name: 'ナカニシ (Nakanishi)', category: 'OMNI',
    lat: 35.00738193787162, lng: 135.77110126037854, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Vodka bar snacks such as pirozhki (wheat dough), raisin-butter sandwiches, oil sardines and crackers; no gluten information (2011–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: snacks include pirozhki, butter sandwiches and oil sardines (2011–2025 reviews).',
    hours_raw: 'Tuesday–Sunday 18:00–23:00; closed Monday; hours may change (Tabelog). Cards (JCB, AMEX, Diners) and e-money (Tabelog). A small counter of about eight seats; smoking allowed (Tabelog; May 2011). On Pontocho south of Sanjo, east side, with matryoshka dolls in the window; the Pontocho Kaburenjo is just north (2010–2014 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo, east side',
    cuisine: 'Long-running Russian vodka bar: walls of vodka bottles, matryoshka dolls and kirie prints (2008–2015 reviews) · vodkas, vodka martinis and standards; drinks around ¥1,400 (June 2011) · Russian snacks: pirozhki (autumn to spring — paused in summer heat), raisin-butter sandwiches, oil sardines with crackers (2011–2025 reviews) · about ¥2,000–5,000 (2011–2025 reviews)',
    website: null, gmaps: gm('ナカニシ 先斗町 ウォッカ'), menu_url: null,
    notes: '[Vodka bar · Pontocho, matryoshka in the window] A tiny, long-standing Russian vodka bar on Pontocho: rows of vodka and matryoshka behind a counter of about eight, a lively master who once worked at Tokyo\'s Russian restaurant Kieff, and snacks like pirozhki (not in high summer) and raisin-butter sandwiches. A grown-up bar with grown-up prices. Smoking allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Per reviews (2008–2025): Vodka Bar Nakanishi, a Pontocho counter bar devoted to vodka; an October 2015 reviewer learned the master worked at Kieff in Tokyo, known for Russian cooking.',
      philosophy: null, specialty: 'Vodka; pirozhki.',
      anecdotes: [
        { text: 'A May 2011 guest back after seven years found the room and the master unchanged, and the raisin-butter sandwiches as good as remembered.', source: R + 'B113824509/' },
        { text: 'A June 2019 visitor met a sign: pirozhki finished for the hot season, back from October.', source: R + 'B302378059/' },
        { text: 'A June 2011 reviewer thought ¥1,400 a drink made it a place for adults and connoisseurs.', source: R + 'B117260613/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区先斗町通三条下ル若松町138-4、火〜日 18:00〜23:00、月曜休み、営業時間は変わることあり、カード (JCB・AMEX・Diners)・電子マネー可、喫煙可。口コミ (2008年11月〜2025年12月、英語): ウォッカバー・ナカニシ、窓にマトリョーシカ、歌舞練場の南の東側、ウォッカの瓶がずらり、切り絵の額、8席ほどのカウンター、元気なマスター (東京のロシア料理店 Kieff で働いていたとの声)、ウォッカマティーニ、1杯1,400円ほど (2011年6月)、ピロシキ (夏は休み、10月から)、レーズンバターサンド、オイルサーディンとクラッカー。',
      confidence: 'medium', sources: [TB, R + 'B111307910/', R + 'B113708617/', R + 'B113824509/', R + 'B117260613/', R + 'B117875185/', R + 'B122315990/', R + 'B18246986/', R + 'B302378059/', R + 'B452216168/', R + 'B516620959/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter bar; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル若松町138-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (35.007382, 135.771101); cross-checked: GSI 京都府京都市中京区若松町138番地 (lot) 32 m; nearest Kyoto record 19 m away; checked against main b77d8936; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B117260613/'],
    price_note: 'Price from a June 2011 review — likely higher now.', last_checked: TODAY, items: [
      it('', '', 'Vodka (glass)', '¥1,400', 'Drinks', 'ask', 'vegan', 'June 2011.', 'vodka'),
      it('', '', 'Pirozhki (autumn to spring)', '', 'Snacks', 'no', 'no', '2014 and 2019 reviews.', 'pirozhki'),
    ] }, {
    cuisine: 'ウォッカの瓶、マトリョーシカ、切り絵の額が並ぶ昔からのロシアのウォッカバー (2008〜2015年の口コミ)・ウォッカ、ウォッカマティーニ、定番のカクテル、1杯1,400円ほど (2011年6月)・ロシアのつまみ: ピロシキ (秋から春、真夏は休み)、レーズンバターサンド、オイルサーディンとクラッカー (2011〜2025年の口コミ)・2,000〜5,000円ほど (2011〜2025年の口コミ)',
    neighborhood: '三条の南の先斗町、東側',
    gf_detail: '要確認。ピロシキ (小麦の生地)、レーズンバターサンド、オイルサーディンとクラッカーなどのつまみ。グルテンの情報はない (2011〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。つまみはピロシキ、バターのサンド、オイルサーディン (2011〜2025年の口コミ)。',
    notes: '[ウォッカバー・先斗町、窓にマトリョーシカ] 先斗町の昔からの小さなロシアのウォッカバー。8席ほどのカウンターの奥にウォッカとマトリョーシカ、東京のロシア料理店 Kieff で働いていたという元気なマスター、ピロシキ (真夏は休み) やレーズンバターサンド。大人の店で値段も大人。喫煙可、月曜休み。',
  });
}

// ================================================================ ぎをん関屋 Gion Sekiya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030449/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://gionsekiya.com/';
  put({
    id: 'kyoto_gion_sekiya', name: 'ぎをん関屋 (Gion Sekiya)', category: 'OMNI',
    lat: 35.00422067787457, lng: 135.77405374034456, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese courses and à la carte — sashimi, smoked fish, simmered dishes; no gluten information (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred kappo (2022–2025 reviews).',
    hours_raw: 'Dinner from 17:30 until late; lunch by reservation only; irregular closing days — call before visiting (Tabelog). Reservations accepted, and the owner tries to accommodate bookings outside regular hours (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 8 counter seats plus a semi-private room; run by the owner alone (Tabelog; March 2023). Room 202 on the 2F of the Kusaoen building, Tominaga-cho in north Gion; 2–5 min walk from Gion-Shijo Stn (Tabelog; March 2023). Opened 26 March 2018 (Tabelog).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North Gion, Tominaga-cho — 2–5 min walk from Gion-Shijo Stn',
    cuisine: 'Counter kappo where the owner cooks alone, with courses or à la carte — casual Japanese cooking for Gion, per the shop (Tabelog; 2022–2025 reviews) · colourful seasonal appetisers, e.g. smoked fish and sweet kumquat, or spring presentations with cherry blossom; omakase sashimi by the piece; a complimentary sake-lees soup in winter (December 2022–December 2024) · about ¥8,000–15,000 (Tabelog; 2022–2024 reviews)',
    website: WEB, gmaps: gm('ぎをん関屋 祇園'), menu_url: null,
    notes: '[Kappo · north Gion, counter] An eight-seat counter on the second floor of a Gion dining building, run single-handed by the owner: beautiful seasonal appetisers, sashimi by the piece and a choice of course or à la carte, at gentler prices than many Gion kappo. Lunch by reservation; dinner from 17:30 into the night; call ahead.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, working alone (unnamed)'], origin: null,
      background: 'Per Tabelog: GION SEKIYA, opened 26 March 2018 on the 2F of the Kusaoen building, reflecting the owner\'s wish to offer casual Japanese cuisine in Gion. A March 2023 reviewer notes the owner runs it alone.',
      philosophy: 'Casual Japanese cuisine in Gion (Tabelog).', specialty: 'Seasonal appetisers; sashimi platter.',
      anecdotes: [
        { text: 'A December 2022 visitor drawn by the à la carte option was handed a warm sake-lees soup on the house while choosing.', source: R + 'B458034643/' },
        { text: 'A March 2023 diner found the spring appetisers, with cherry-blossom touches, luxurious, and noted the owner runs the counter alone.', source: R + 'B463013956/' },
        { text: 'A December 2024 party of five on a third visit ordered à la carte, with omakase sashimi one serving at a time.', source: R + 'B497031493/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区富永町132 草園ビル 2F 202、京阪祇園四条駅から徒歩5分ほど、昼は予約のみ、夜は17:30〜深夜、予約に応じて営業時間外も対応、不定休 (来店前に電話を)、予約可、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、カウンター8席と半個室、2018年3月26日開店、祇園で気軽な和食をという店主の思い、公式サイト gionsekiya.com。口コミ (2020年2月〜2025年12月、英語): 祇園北側のビルの2階、店主が1人で営む、コースとアラカルト、彩りの前菜 (燻製の魚、金柑の甘煮、春は桜の演出)、おまかせの刺身、冬のサービスの粕汁、大人の隠れ家。',
      confidence: 'medium', sources: [TB, WEB, R + 'B390522801/', R + 'B424481824/', R + 'B457039073/', R + 'B458034643/', R + 'B463013956/', R + 'B478773097/', R + 'B486874785/', R + 'B497031493/', R + 'B506576772/', R + 'B523661973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter; call ahead; cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区富永町132 草園ビル 2F 202',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through December 2025.' },
    pin_source: `Tabelog ${TB} (35.004221, 135.774054); cross-checked: GSI 京都府京都市東山区富永町132番地 (lot) 34 m; kyoto_gion_okaru (132, a different shop) is 13.1 m away; checked against main b77d8936; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497031493/'],
    price_note: 'No prices given in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '', 'Course', 'ask', 'no', '2024 reviews.', 'course'),
      it('', '', 'Omakase sashimi', '', 'À la carte', 'ask', 'no', 'December 2024.', 'sashimi'),
    ] }, {
    cuisine: '店主が1人で料理するカウンターの割烹。コースもアラカルトも。祇園で気軽な和食をという店 (食べログ、2022〜2025年の口コミ)・燻製の魚と金柑の甘煮、春は桜をあしらうなど彩りの季節の前菜、1切れずつのおまかせの刺身、冬はサービスの粕汁 (2022年12月〜2024年12月)・8,000〜15,000円ほど (食べログ、2022〜2024年の口コミ)',
    neighborhood: '祇園の北、富永町。祇園四条駅から徒歩2〜5分',
    gf_detail: '要確認。季節の和食のコースとアラカルト: 刺身、燻製の魚、煮物。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心の割烹 (2022〜2025年の口コミ)。',
    notes: '[割烹・祇園の北、カウンター] 祇園の飲食ビルの2階の8席のカウンターを店主が1人で切り盛り。美しい季節の前菜、1切れずつの刺身、コースかアラカルトを、祇園の割烹としては手ごろに。昼は予約のみ、夜は17時半から深夜まで。来店前に電話を。',
  });
}

// ================================================================ いも松 北別館 Imo Matsu Kita Bekkan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038339/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '25:00']); const F = day(['17:00', '27:00']); const S = day(['17:00', '25:00']);
  put({
    id: 'kyoto_imo_matsu_kita_bekkan', name: 'いも松 北別館 (Imo Matsu Kita Bekkan)', category: 'OMNI',
    lat: 35.00768416787126, lng: 135.77058806038198, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: an all-you-can-eat izakaya menu with hot pots finished with udon, fried dishes and desserts (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab hot pot, chicken sukiyaki, sushi and izakaya dishes (2023–2026 reviews).',
    hours_raw: 'Monday–Thursday 18:00–1:00 (last order 24:00); Friday, Saturday and the day before a holiday 17:00–3:00 (last order 2:00); Sunday and holidays 17:00–1:00 (last order 24:00); irregular closing days (Tabelog). Reservations accepted and advised, even on Sundays (Tabelog; March 2025). Cards (VISA, Master, JCB, AMEX), but not for courses; no e-money or QR (Tabelog). 86 seats; private hire possible; food ordered from staff, drinks by QR code; weak phone signal in the basement but Wi-Fi provided (Tabelog; 2025–2026 reviews). B1F of the New Kyoto building, Kiyamachi south of Sanjo; 4 min walk from Keihan Sanjo Stn (Tabelog). Opened 1 November 2022 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo — 4 min walk from Sanjo Stn',
    cuisine: 'All-you-can-eat-and-drink izakaya, popular for parties (2023–2026 reviews) · courses from ¥3,600; a ¥5,000 all-you-can-eat-and-drink; a premium course where any dish can be ordered; an all-you-can-eat crab hot pot with udon and zosui to finish (December 2023–September 2026) · e.g. dashimaki, a chicken sukiyaki and hand-rolled sushi set, pudding and other desserts (2025–2026 reviews) · a wide shochu list, served on the rocks, with water, hot water or soda (May 2025) · about ¥3,000–6,000 (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('いも松 北別館 木屋町'), menu_url: null,
    notes: '[Izakaya · Kiyamachi-Sanjo, all you can eat and drink] A big basement izakaya built for groups, with all-you-can-eat-and-drink courses from about ¥3,600 — crab hot pot with udon and zosui in winter, dashimaki, chicken sukiyaki and hand-rolled sushi, plenty of shochu — of better quality than the price suggests, per reviewers. Dishes can be slow for big parties. Open late; book ahead.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya, seafood and hot-pot restaurant of 86 seats opened 1 November 2022; a いも松 木屋町店 also appears in our crawls. Reviewers in 2023–2026 describe quick, well-trained service and all-you-can-eat courses of good quality.',
      philosophy: null, specialty: 'All-you-can-eat crab hot pot.',
      anecdotes: [
        { text: 'A December 2023 group on the all-you-can-eat crab course finished with both udon and zosui, and praised the well-trained staff.', source: R + 'B476026885/' },
        { text: 'A March 2025 diner, wary of suspiciously cheap all-you-can-eat places, found the dashimaki and pudding genuinely good from ¥3,600.', source: R + 'B503994964/' },
        { text: 'A September 2026 party on the premium course ordered food from staff and drinks by QR code, and found dishes a little slow for a big group.', source: R + 'B536266672/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・鍋、中京区材木町181-2 ニュー京都ビル B1F、京阪三条駅から徒歩4分、月〜木 18:00〜翌1:00 (L.O.24:00)、金・土・祝前日 17:00〜翌3:00 (L.O.2:00)、日・祝 17:00〜翌1:00 (L.O.24:00)、不定休、予約可、カード (VISA・Master・JCB・AMEX) 可だがコースは不可、電子マネー・QR 不可、86席、貸切可、2022年11月1日開店。口コミ (2023年12月〜2026年9月、英語): 食べ飲み放題3,600円から、5,000円の食べ飲み放題、全品注文できるプレミアムコース、かに鍋の食べ放題 (締めにうどんと雑炊)、だし巻き、鶏すき焼きと手巻き寿司のセット、プリンなどのデザート、焼酎が豊富 (ロック、水割り、お湯割り、ソーダ割り)、料理は口頭、飲み物は QR で注文、地下で電波が弱いが Wi-Fi あり、大人数だと料理が遅いとの声、日曜でも予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B476026885/', R + 'B490261645/', R + 'B503994964/', R + 'B506227543/', R + 'B515549609/', R + 'B528221312/', R + 'B534327862/', R + 'B536212134/', R + 'B536266672/', R + 'B536281209/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group-friendly; drinks by QR code; courses not payable by card.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町181-2 ニュー京都ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007684, 135.770588); cross-checked: GSI 京都府京都市中京区材木町181番地 (lot) 18 m; kyoto_aoi_obanzai (same building, 1F) is 8.8 m away; checked against main b77d8936; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503994964/', R + 'B490261645/'],
    price_note: 'Prices from March and August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat-and-drink course', '¥3,600', 'Courses', 'no', 'no', 'From ¥3,600; March 2025.', 'tabenomi'),
      it('', '', 'All-you-can-eat-and-drink course', '¥5,000', 'Courses', 'no', 'no', 'August 2025.', 'tabenomi_5000'),
    ] }, {
    cuisine: '宴会に人気の食べ飲み放題の居酒屋 (2023〜2026年の口コミ)・3,600円からのコース、5,000円の食べ飲み放題、全品注文できるプレミアムコース、締めにうどんと雑炊のかに鍋の食べ放題 (2023年12月〜2026年9月)・例: だし巻き、鶏すき焼きと手巻き寿司のセット、プリンなどのデザート (2025〜2026年の口コミ)・豊富な焼酎、ロック、水割り、お湯割り、ソーダ割り (2025年5月)・3,000〜6,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '三条の南の木屋町。三条駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。締めにうどんの鍋、揚げ物、デザートのある食べ放題の居酒屋 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。かに鍋、鶏すき焼き、寿司、居酒屋料理 (2023〜2026年の口コミ)。',
    notes: '[居酒屋・木屋町三条、食べ飲み放題] 宴会向けの大きな地下の居酒屋。3,600円ほどからの食べ飲み放題で、冬は締めにうどんと雑炊のかに鍋、だし巻き、鶏すき焼きと手巻き寿司、焼酎もたっぷり。口コミでは値段以上の質。大人数だと料理が遅いことも。深夜まで、予約がおすすめ。',
  });
}

// ================================================================ きとま Kitoma
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040175/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_oden_teppan_kitoma', name: 'おでんと鉄板焼きスタンド きとま (Kitoma)', category: 'OMNI',
    lat: 35.0026, lng: 135.76357993033514, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in dashi alongside gyoza, teppan dishes and fried items; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi, lamb gyoza, shrimp dishes (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:00–23:00, last order 22:30; closed Sunday — on a Saturday-to-Monday long weekend it opens Sunday and closes Monday (Tabelog). Reservations accepted; private hire for 20–30 by phone (Tabelog). Appetizer charge ¥330 incl. tax (Tabelog original お通し代330円(税込)を頂戴しております。). Cards, iD and QR (Tabelog). Two tables and a counter up a steep staircase; drinks are self-service from the fridge at one price — spill and you pay double (September 2024). 2F of the Nichiho Ayanokoji Center, upstairs from ざきやま; 5 min walk from Karasuma or Kawaramachi Stn (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji between Karasuma and Kawaramachi — upstairs',
    cuisine: 'Small izakaya of year-round oden, teppan dishes and gyoza, with self-service drinks at a flat price (Tabelog; 2024–2026 reviews) · oden in a gentle broth, e.g. tomato oden; lamb and celery gyoza; Kujo negi ankake dashimaki; shrimp with miso mayo, sake-steamed shrimp; potato salad (2025–2026 reviews) · self-serve sake, beer and canned shochu highballs; about twelve seasonal sakes; red eye ¥750 (Tabelog; 2025–2026 reviews) · about ¥2,000–5,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('おでんと鉄板焼きスタンド きとま'), menu_url: null,
    notes: '[Oden izakaya · Ayanokoji, self-serve drinks] A friendly little upstairs izakaya where you help yourself to sake, beer and highballs from the fridge at one price — careful, a spill costs double — and order oden in a gentle broth all year, lamb and celery gyoza, tomato oden and Kujo-negi dashimaki. Run by a couple, per a 2024 review. ¥330 appetizer; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed; a couple, per a September 2024 review)'], origin: null,
      background: 'Per Tabelog: an oden, teppanyaki and gyoza izakaya on the 2F of the Nichiho Ayanokoji Center, with around twelve seasonal sakes and self-service drinks. A September 2024 reviewer describes a friendly couple running it; a February 2025 reviewer found it run that night by one person, still quick.',
      philosophy: null, specialty: 'Lamb and celery gyoza; oden.',
      anecdotes: [
        { text: 'A September 2024 visitor warned that drinks come self-service from the fridge — spill a drop and you pay for two.', source: R + 'B492891408/' },
        { text: 'A December 2025 girls\' night started with a whole shrimp as the appetizer, then tomato oden and miso-mayo shrimp.', source: R + 'B528172137/' },
        { text: 'A July 2026 visitor came for oden in summer with chilled sake and the lamb and celery gyoza.', source: R + 'B532014807/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん・餃子、下京区綾材木町201-2 日宝綾小路センター 2F、阪急烏丸駅・河原町駅・地下鉄四条駅から徒歩5分、月〜土 17:00〜23:00 (L.O.22:30)、日曜休み (土〜月の3連休は日曜営業・月曜休み)、予約可、貸切20〜30名は電話で、お通し代330円 (税込)、カード・iD・QR 可、季節の日本酒12種ほど、一部セルフサービスの飲み物。口コミ (2024年9月〜2026年8月、英語): ざきやまの2階、急な階段、テーブル2つとカウンター、気さくなご夫婦 (2024年9月)、冷蔵庫から取る均一料金のセルフの日本酒・ビール・缶チューハイ、こぼすと2杯分、やさしいだしのおでん、トマトおでん、ラムとセロリの焼き餃子、九条ねぎのあんかけだし巻き、海老のみそマヨ、海老の酒蒸し、ポテトサラダ、レッドアイ750円。',
      confidence: 'medium', sources: [TB, R + 'B492891408/', R + 'B500747863/', R + 'B501085059/', R + 'B502713670/', R + 'B521170653/', R + 'B528172137/', R + 'B532014807/', R + 'B532790958/', R + 'B532943092/', R + 'B534608626/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve drinks; steep stairs; ¥330 appetizer; cards, iD and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区綾材木町201-2 日宝綾小路センター 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002564, 135.763580) is 2.2 m from kyoto_yofu_izakaya_zakiyama (same building, 1F), so moved ~4 m north to 35.002600 (4.7 m from it); cross-checked: GSI 京都府京都市下京区綾材木町201番地 (lot) 13 m; checked against main b77d8936; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532943092/', TB],
    price_note: 'Prices from an August 2026 review and Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Red eye', '¥750', 'Drinks', 'no', 'vegan', 'August 2026.', 'red_eye'),
      it('', '', 'Lamb and celery gyoza', '', 'Gyoza', 'no', 'no', '2025–2026 reviews.', 'lamb_gyoza'),
      it('', '', 'Appetizer charge', '¥330', 'Charge', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '一年中のおでん、鉄板焼き、餃子の小さな居酒屋。飲み物は均一料金のセルフサービス (食べログ、2024〜2026年の口コミ)・やさしいだしのおでん、例: トマトおでん、ラムとセロリの餃子、九条ねぎのあんかけだし巻き、海老のみそマヨ、海老の酒蒸し、ポテトサラダ (2025〜2026年の口コミ)・セルフの日本酒、ビール、缶チューハイ、季節の日本酒12種ほど、レッドアイ750円 (食べログ、2025〜2026年の口コミ)・2,000〜5,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '烏丸と河原町の間の綾小路、2階',
    gf_detail: '要確認。だしのおでんのほか、餃子、鉄板焼き、揚げ物。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでん、ラムの餃子、海老の料理 (2024〜2026年の口コミ)。',
    notes: '[おでんの居酒屋・綾小路、セルフの飲み物] 気さくな2階の小さな居酒屋。日本酒やビール、チューハイを冷蔵庫から自分で取る均一料金 (こぼすと2杯分なので注意)。一年中のやさしいだしのおでん、ラムとセロリの餃子、トマトおでん、九条ねぎのだし巻き。2024年の口コミではご夫婦の店。お通し330円、日曜休み。',
  });
}

save();
