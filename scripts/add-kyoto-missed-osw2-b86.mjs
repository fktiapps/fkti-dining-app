// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 86.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   - 土井活鰻 祇園八坂店 — existence unconfirmed (not a 土井志ば漬本舗 shop: an independent eel business, see the skip reason; flagged)
//   + 豆乳とんしゃぶ 寅太郎 Torataro (soy-milk pork shabu-shabu; run by スター食堂株式会社 — a different-name sister concept, drafted on the
//     coordinator's instruction and flagged: Tabelog lists a dozen sister shops under the company)
//   - ソラリア西鉄ホテル 京都プレミア — large parent: a Nishitetsu hotel (Greg 11-08 big-chain hotel ruling)
//   + やきとり酒場 かづさ屋 Kazusaya (chicken-grill izakaya near Karasuma-Rokkaku, curry at lunch; 株式会社ドラゴンフライマジカルリンク)
//   + 祇園 あさくら Gion Asakura (eight-seat Italian-kaiseki counter north of Sanjo-Higashiyama; 2025–26 reviews)
//   - お好み焼はここやねん 三条高倉店 — chain, as 26033118
//   - そじ坊 京都ゼスト御池店 — chain, as 26005495
//   - Tempura Kappou Sagano (Hotel Nikko Princess Kyoto) — large parent: a restaurant inside a Nikko-brand hotel (Greg 11-08 ruling)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; かづさ屋 moved ~1 m to clear kyoto_mannaka_higashinotoin (8.0 m); each 9 m+ from every pin
//   on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035977', '土井活鰻 祇園八坂店: existence unconfirmed — not part of 土井志ば漬本舗 (an independent eel business founded in 2018 by a former river-fish wholesaler, with Fushimi Inari, Kinkaku-ji and Gion Yasaka shops); its official site is paused, Tabelog says its phone line is closed, and the latest review is March 2026; news reports (Kyodo, 2026-10-20) of the company president’s arrest over eel-origin labelling are flagged for Greg rather than acted on');
skip('26029269', 'ソラリア西鉄ホテル 京都プレミア: large parent — a hotel of the Nishitetsu (西鉄) hotel chain (Greg 11-08 ruling on venues in big-chain hotels)');
skip('26042721', 'お好み焼はここやねん 三条高倉店: chain — same ruling as お好み焼は ここやねん 四条河原町店 (26033118)');
skip('26005959', 'そじ坊 京都ゼスト御池店: chain — same ruling as 26005495');
skip('26014089', 'Tempura Kappou Sagano (Hotel Nikko Princess Kyoto): large parent — a restaurant inside a Nikko-brand chain hotel (Greg 11-08 ruling on venues in big-chain hotels)');

skip('26016597', '豆乳とんしゃぶ 寅太郎: large parent — a brand of スター食堂株式会社 (Kyoto, 1925), whose Tabelog page lists a dozen-plus shops incl. Isetan, Paris and a Kirin City franchise; its スター食堂-named shops were already skipped as a chain (integrator 11-08, THAN precedent)');

// ================================================================ やきとり酒場 かづさ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019153/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_yakitori_sakaba_kazusaya', name: 'やきとり酒場 かづさ屋 (Kazusaya)', category: 'OMNI',
    lat: 35.007240, lng: 135.761273, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled chicken with tare or salt, curry and kara-age; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken dishes and keema curry (reviews).',
    hours_raw: '17:00–23:30 (last order 23:00) Tuesday–Saturday (Tabelog); Sunday, holidays and Monday are not given. At lunch the room runs as Karasuma Curry Koya, a curry shop (July 2025). Since 3 June 2024 the chicken is no longer skewered but grilled Kyushu-style on a teppan (Tabelog shop text; June 2025). Cards, e-money and QR (Tabelog). 27 seats; non-smoking (Tabelog). Royal Plaza Building 2F, a building of several eateries, 5 minutes from Hankyu Karasuma (Tabelog; March 2026). Opened 27 June 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma',
    cuisine: 'Relaxed izakaya of Kyushu-style teppan-grilled chicken with tare or salt (Tabelog shop text; June 2025) · stir-fried chicken offal; pickled daikon; chicken breast with wasabi; kara-age and sausages (2024–2026) · rich keema curry with egg yolk to finish — the room is a curry shop at lunch (May 2024; July 2025) · courses with unlimited drinks, e.g. ¥5,000 (March 2026)',
    website: null, gmaps: gm('やきとり酒場 かづさ屋 烏丸'), menu_url: TB,
    notes: "[Izakaya · near Shijo-Karasuma, teppan chicken and curry] A cosy second-floor izakaya with a friendly owner, now grilling chicken Kyushu-style on the teppan rather than on skewers, with good side dishes and a keema curry worth finishing on (it is a curry shop at lunch). Free-drink courses from about ¥5,000.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in June 2011 (Tabelog), run by 株式会社ドラゴンフライマジカルリンク (NTA invoice register). A June 2025 reviewer met a friendly owner who had switched from ordinary yakitori to Kyushu-style teppan chicken; the curry comes from its lunchtime incarnation, Karasuma Curry Koya (July 2025).',
      philosophy: 'Relax and cozy: a fun, quiet hideaway for adults with plenty of side dishes and drinks (Tabelog shop text).',
      specialty: 'Teppan-grilled chicken; keema curry.',
      anecdotes: [
        { text: 'A May 2025 guest who came for yakitori learned there were no skewers any more and stayed for side dishes and beer.', source: R + 'B507732692/' },
        { text: 'A July 2025 business traveller found the closing keema curry the highlight — then learned it is a curry shop at lunch.', source: R + 'B510661330/' },
        { text: 'A March 2026 pair chose liver as the main of a ¥5,000 free-drink course.', source: R + 'B523715587/' },
      ],
      japanese_sources_summary: '食べログ: やきとり酒場 かづさ屋、居酒屋・焼き鳥、京都市中京区御射山町260 ロイヤルプラザビル2F、火〜土 17:00〜23:30 (L.O.23:00)、カード・電子マネー・QR決済可、27席、禁煙、2011年6月27日オープン、テーマは「ゆったりまったり」、2024年6月3日から焼き鳥のスタイルを串の炭火焼きから変更、インボイス T1130001060161 (株式会社ドラゴンフライマジカルリンク)。口コミ (2022〜2026年、英語): 気さくな店主、九州風の鉄板焼きの鶏、たれと塩、鶏ホルモン炒め、たくあん、ささみのわさび、唐揚げ、ソーセージ、卵黄をのせた濃厚なキーマカレー、昼はカレーの店 (Karasuma Curry Koya)、飲み放題付きコース5,000円、フードホールのようなビル。',
      confidence: 'low', sources: [TB, R + 'B479173168/', R + 'B486107653/', R + 'B507732692/', R + 'B508130133/', R + 'B510661330/', R + 'B523715587/', R + 'B525046343/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001060161'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on busy nights.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御射山町260 ロイヤルプラザビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.007248, 135.761269), offset ~1m to clear kyoto_mannaka_higashinotoin (8.0m); cross-checked: GSI 京都府京都市中京区御射山町260番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523715587/'],
    price_note: 'Course price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course with unlimited drinks', '¥5,000', 'Courses', 'ask', 'no', 'March 2026.', 'course'),
      it('', '', 'Keema curry with egg yolk', '', 'Rice', 'ask', 'no', '', 'keema'),
      it('', '', 'Stir-fried chicken offal', '', 'Small plates', 'ask', 'no', '', 'horumon'),
    ] }, {
    cuisine: '九州風の鉄板焼きの鶏をたれか塩でのくつろげる居酒屋 (食べログの店舗紹介、2025年6月)・鶏ホルモン炒め、たくあん、ささみのわさび、唐揚げ、ソーセージ (2024〜2026年)・締めに卵黄をのせた濃厚なキーマカレー、昼はカレーの店に (2024年5月、2025年7月)・飲み放題付きのコース、たとえば5,000円 (2026年3月)',
    neighborhood: '四条烏丸の近く',
    gf_detail: '要確認。たれや塩の鉄板焼きの鶏、カレー、唐揚げ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏料理とキーマカレー (口コミ)。',
    notes: '[居酒屋・四条烏丸の近く、鉄板の鶏とカレー] 気さくな店主のくつろげる2階の居酒屋。鶏は串ではなく九州風に鉄板で焼き、つまみも充実、締めのキーマカレーは絶品 (昼はカレーの店)。飲み放題付きのコースは5,000円ほどから。',
  });
}

// ================================================================ 祇園 あさくら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037477/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_gion_asakura_furunishi', name: '祇園 あさくら (Gion Asakura)', category: 'OMNI',
    lat: 35.007215387873494, lng: 135.77664865037295, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses are tailored to taste, but pasta, bread and sauces feature and no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Italian-kaiseki courses of seafood, meat and cheese (reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00) and dinner 17:30–23:00 Monday, Wednesday and Friday–Sunday, holidays, holiday eves and the day after a holiday (Tabelog); Tuesday and Thursday are not given. Often fully booked — reserve (February 2024). Cards (VISA, Master, JCB, AMEX, Diners) and QR; no e-money (Tabelog). An 8-seat counter; non-smoking (Tabelog). Down a narrow alley, 5 minutes from Keihan Sanjo Exit 1 (Tabelog; May 2025).',
    hours: { 0: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, north of Gion near Sanjo',
    cuisine: 'Italian cooking with a kaiseki sensibility at an eight-seat counter, adjusted to each guest’s taste and mood; signature sea-urchin cream pasta (Tabelog shop text) · dinner course ¥15,000, e.g. yokowa and isaki sashimi (July 2026); wine pairings (February 2025) · à la carte by request: escargot in garlic butter (November 2025); miso cheese; raclette over the meat (2025) · Italian lunch course of seasonal dishes (May 2025)',
    website: 'https://www.gionasakura.jp/', gmaps: gm('祇園 あさくら'), menu_url: TB,
    notes: "[Italian · north Gion near Sanjo, Italian-kaiseki counter] An eight-seat counter in a quiet alley serving Italian food with a kaiseki touch, cooked to your taste — sea-urchin cream pasta, escargot, raclette-topped meat — with wine pairings. Dinner course about ¥15,000; lunch courses too. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Reviewers (2022–2026) describe an intimate eight-seat counter, often fully booked, where the chef shapes each course around guests’ requests and seasonal ingredients.',
      philosophy: 'Courses prepared flexibly around seasonal ingredients and each guest’s preferences and mood (Tabelog shop text).',
      specialty: 'Sea-urchin cream pasta; Italian-kaiseki courses.',
      anecdotes: [
        { text: 'A February 2025 anniversary dinner paired every dish with wine, except the oysters, matched with sake.', source: R + 'B453130227/' },
        { text: 'A November 2025 regular always orders the escargot and mops up the butter with bread.', source: R + 'B494511182/' },
        { text: 'A July 2026 first dinner after several lunches began with yokowa and isaki sashimi on the ¥15,000 course.', source: R + 'B498340752/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 あさくら、イタリアン・日本料理・ワインバー、京都市東山区古西町317、月・水・金〜日・祝日・祝前日・祝日の翌日 11:30〜14:30 (L.O.14:00)、17:30〜23:00、カード・QR決済可、電子マネー不可、カウンター8席、禁煙、京阪三条駅1番出口から徒歩5分、懐石の要素を取り入れたイタリアン、好みに合わせて、名物の雲丹のクリームパスタ。口コミ (2022〜2026年、英語・日本語): ワインのペアリング、牡蠣は日本酒と、味噌チーズ、記念日のデザートプレート、エスカルゴ、ラクレットをのせた肉、イタリアンのランチコース、夜のコース15,000円 (よこわといさきのお造り)、細い路地の隠れ家、予約で埋まりやすい、雰囲気代がやや高いという声も。',
      confidence: 'low', sources: [TB, R + 'B453130227/', R + 'B478510436/', R + 'B479352195/', R + 'B494511182/', R + 'B497376030/', R + 'B498340752/', R + 'B506287061/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区古西町317',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.007215, 135.776649); cross-checked: GSI 京都府京都市東山区古西町317番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498340752/'],
    price_note: 'Dinner price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥15,000', 'Courses', 'ask', 'no', 'July 2026.', 'dinner'),
      it('', '', 'Sea-urchin cream pasta', '', 'Pasta', 'no', 'no', 'Signature.', 'uni_pasta'),
      it('', '', 'Escargot', '', 'À la carte', 'ask', 'no', '', 'escargot'),
    ] }, {
    cuisine: '8席のカウンターで、懐石の要素を取り入れたイタリアンを好みと気分に合わせて。名物は雲丹のクリームパスタ (食べログの店舗紹介)・夜のコース15,000円、たとえばよこわといさきのお造り (2026年7月)、ワインのペアリング (2025年2月)・リクエストでアラカルト、エスカルゴのガーリックバター (2025年11月)、味噌チーズ、肉にラクレット (2025年)・季節のイタリアンのランチコース (2025年5月)',
    neighborhood: '東山、三条近くの祇園の北',
    gf_detail: '要確認。好みに合わせて作るが、パスタ、パン、ソースを使い、グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、肉、チーズのイタリアンと懐石のコース (口コミ)。',
    notes: '[イタリアン・三条近くの祇園の北、イタリアンと懐石のカウンター] 静かな路地の8席のカウンター。懐石の趣のあるイタリアンを好みに合わせて、雲丹のクリームパスタ、エスカルゴ、ラクレットの肉、ワインのペアリング。夜のコースは15,000円ほど、ランチも。予約を。',
  });
}

save();
