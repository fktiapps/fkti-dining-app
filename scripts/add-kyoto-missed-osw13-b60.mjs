// Kyoto priority (kyoto-missed), worker osw13, batch 60 — lane: Tabelog id mod 6 = 0.
// Core: 日本酒BAR ○△□, とおる蕎麦. Notable: 紅葉Koyo, アナザー シー.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020362', 'identity unresolved: ブリーク (Brique) — reviewers in May and November 2024 say the shop at this address now trades as "Gastrique" (Instagram @gastrique, "#FormerGreek"), and the 2025–2026 Tabelog entries have no text; could not confirm the current name, owner or menu, so skipped rather than drafted under an old name');

// ================================================================ 日本酒BAR ○△□
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031984/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-sake-bar.vercel.app/';
  const WD = day(['17:00', '24:00']); const SA = day(['15:00', '24:00']); const SU = day(['18:00', '24:00']);
  put({
    id: 'kyoto_nihonshu_bar_maru_sankaku_shikaku', name: '日本酒BAR ○△□ (Maru Sankaku Shikaku)', category: 'OMNI',
    lat: 35.006338, lng: 135.754984, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: sake itself is gluten-free, but snacks include a nori-butter sandwich, shuto pizza and fried dishes (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: snacks of sea urchin, ray fin, karasumi, shuto, squid shiokara (reviews).',
    hours_raw: 'Tabelog: Mon–Fri 17:00–24:00; Sat 15:00–24:00; Sun 18:00–24:00 (open on some Sundays only, per the shop blurb and an August 2026 diner). Book directly on the day — it gets crowded. Standing bar of about 10–12 places; only e-cigarettes inside (Tabelog). Cards, QUICPay and most QR. No service charge, cover or otoshi — Tabelog, Japanese original 「サービス料、チャージ、おとうし無し」. Opened 11 January 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin-Rokkaku, near Shijo-Karasuma — up a lane on the 2nd floor; 10 min walk from Shijo / Hankyu Karasuma Stn',
    cuisine: 'A standing sake bar of regional sake (Tabelog blurb): a flavour chart on the wall sorts sake by four types from dry to sweet (September 2025) · 90 ml glasses ¥600 (September 2025) or ¥700, rarer bottles priced apart (August 2026); tasting sets of three 30 ml ¥880 or 50 ml ¥1,500 (September 2025); all-you-can-drink of 15+ local sakes ¥3,000 for 50 minutes (August 2026); a Kyoto local-sake trio (April 2026) · labels seen include Jikon, Aramasa, Juyondai, Nabeshima, Senkin, Tazake (2022–2026 reviews) · snacks about ¥800 a plate: nori-butter sandwich, shuto pizza, grilled ray fin, karasumi, a trio of sake snacks, Yura sea urchin in season, grilled firefly squid over a spirit lamp (2022–2026 reviews)',
    website: SITE, gmaps: gm('日本酒BAR ○△□ 池須町'), menu_url: null,
    notes: '[Sake stand bar · Nishinotoin-Rokkaku, a flavour chart and a friendly master] A ten-odd-place standing bar up a lane near Shijo-Karasuma, pouring regional sake by the 90 ml glass (¥600–700), in tasting flights, or all-you-can-drink for 50 minutes at ¥3,000, with a wall chart to steer you and a master happy to recommend. Snacks like nori-butter sandwiches and shuto pizza. No cover charge. Open till midnight; afternoons from 15:00 on Saturdays.',
    chef_bio: { chef_name: null, roles: ['The master, not named; "friendly, kind, and attentive" (June 2026)'], origin: null,
      background: 'Opened 11 January 2019 (Tabelog), on the second floor of a lane of small eateries on Nishinotoin near Rokkaku and the Honnoji temple ruins (Tabelog blurb). It has been on TV Osaka and in a sake magazine, holds anniversary tastings each January, joins a yearly Sake Day event with Stand Sakaba Stem (kyoto_stand_sakaba_stem) and pops up at hotel markets (2022–2026 reviews). One reviewer has logged 27 visits since 2022.',
      philosophy: null,
      specialty: 'Regional sake by the glass; nori-butter sandwich.',
      anecdotes: [
        { text: 'September 2025: "a large \'Flavor Chart\' on the wall clearly displays the four types of sake… This thoughtful setup is friendly for first-time visitors."', source: R + 'B513204148/' },
        { text: 'An August 2026 regular: "Enjoy over 15 types of local sake with an all-you-can-drink option for 3,000 JPY for 50 minutes!"', source: R + 'B531265231/' },
        { text: 'January 2026: a 3 pm arrival found the 7th-anniversary event on, with rare sake at a fair price and talk with a regular from Osaka.', source: R + 'B520629881/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒BAR ○△□、居酒屋・日本酒バー・立ち飲み、中京区西洞院通六角下る池須町423-2 西洞院食彩ろぉじ六角の道 2F、四条駅・阪急烏丸駅から徒歩10分、月〜金 17:00〜24:00、土 15:00〜24:00、日 18:00〜24:00、当日予約は直接電話、立ち飲み12名、店内は電子たばこのみ、カード・QUICPay・QR可、サービス料・チャージ・おとうし無し、2019年1月11日オープン、本能寺跡近くの六角通、テレビ大阪や雑誌で紹介、全国の地酒、日曜は一部営業。口コミ (2022〜2026年、英語): 4タイプの味のチャート、90ml 600円 (2025年9月)・700円 (2026年8月)、飲み比べ30ml×3で880円・50ml×3で1,500円、地酒15種以上の50分飲み放題3,000円、京都の地酒3種、Jikon・Aramasa・Juyondai・Nabeshima・Senkin・Tazake など、つまみ1皿800円ほど、海苔バターサンド、酒盗ピザ、エイヒレ、からすみ、珍味3種盛り、由良の雲丹、ほたるいかのアルコールランプ焼き、明るく親切なマスター、毎年1月の周年イベント、ステムとの日本酒の日のイベント。',
      confidence: 'medium', sources: [TB, SITE, R + 'B446817127/', R + 'B497868019/', R + 'B507464233/', R + 'B513204148/', R + 'B520629881/', R + 'B524395643/', R + 'B526754103/', R + 'B529794936/', R + 'B531265231/', R + 'B534506557/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A wall chart sorts the sake by style; the master recommends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院通六角下る池須町423-2 西洞院食彩ろぉじ六角の道 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006392, 135.754984), moved 6m south to (35.006338, 135.754984) because the Tabelog point sat 2.8m from kyr_701_taresoba_kyoto in the same lane; now 8.7m from it; GSI 京都府京都市中京区池須町423番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513204148/', R + 'B531265231/', R + 'B534506557/'],
    price_note: 'Prices from 2025–2026 reviews; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Sake, 90 ml glass', '¥600–700', 'Sake', 'ask', 'ask', 'September 2025; August 2026.', 'sake'),
      it('', '', 'Tasting set, three 30 ml glasses', '¥880', 'Sake', 'ask', 'ask', 'September 2025; 50 ml ×3 ¥1,500.', 'sake_flight'),
      it('', '', 'All-you-can-drink local sake, 50 minutes', '¥3,000', 'Sake', 'ask', 'ask', 'August 2026.', 'nomihodai'),
      it('', '', 'Nori-butter sandwich', null, 'Snacks', 'no', 'no', 'March 2022; September 2025.', 'sandwich'),
    ] }, {
    cuisine: '全国の地酒の立ち飲みの日本酒バー (食べログの紹介文)。壁に辛口から甘口まで4タイプに分けた味のチャート (2025年9月)・90mlで600円 (2025年9月) か700円、珍しい酒は別料金 (2026年8月)。3種飲み比べは30mlで880円、50mlで1,500円 (2025年9月)。地酒15種以上の50分飲み放題3,000円 (2026年8月)。京都の地酒3種も (2026年4月)・口コミの銘柄は Jikon、Aramasa、Juyondai、Nabeshima、Senkin、Tazake など (2022〜2026年)・つまみは1皿800円ほど。海苔バターサンド、酒盗ピザ、エイヒレ、からすみ、珍味3種盛り、旬の由良の雲丹、アルコールランプで焼くほたるいか (2022〜2026年の口コミ)',
    neighborhood: '西洞院六角、四条烏丸の近く。路地の奥の2階。四条駅・阪急烏丸駅から徒歩10分',
    gf_detail: '要確認: 日本酒自体はグルテンフリーだが、つまみに海苔バターサンド、酒盗ピザ、揚げ物 (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 雲丹、エイヒレ、からすみ、酒盗、イカの塩辛などのつまみ (口コミ)。',
    notes: '[日本酒の立ち飲み・西洞院六角、味のチャートと気さくなマスター] 四条烏丸近くの路地の2階、10人ほどの立ち飲みの日本酒バー。地酒を90mlで600〜700円、飲み比べ、50分3,000円の飲み放題で。壁のチャートと気さくなマスターが選ぶのを手伝ってくれる。海苔バターサンドや酒盗ピザなどのつまみも。チャージなし。夜は0時まで、土曜は15時から。',
  });
}

// ================================================================ とおる蕎麦
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004786/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://torusoba.wixsite.com/mysite';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_toru_soba', name: '手打 とおる蕎麦 (Teuchi Toru Soba)', category: 'OMNI',
    lat: 35.013560, lng: 135.761159, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the soba is handmade juwari (all buckwheat), and diners in April and June 2026 say gluten-free orders are taken, but the dipping sauce is soy-based and the shop has not published how it handles this. Ask the owner.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce is bonito dashi (November 2025); tororo comes with egg (April 2026).',
    hours_raw: 'Tabelog: Thu–Sun 11:30–14:30; closed Monday to Wednesday; hours may change. The shop’s site posts closures — a holiday 9–18 November 2026 (Monday to Wednesday regular closing plus extra days off). No reservations; queues at noon, sometimes a 40-minute wait (November 2025), less after 13:30. 8 counter seats; non-smoking. Cash only — no cards, e-money or QR (Tabelog). Run single-handed by the owner (2025–2026 reviews).',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gosho-minami residential street — 7 min walk from Karasuma Oike Stn',
    cuisine: 'Handmade juwari soba (all buckwheat) with an Edo-style dashi dipping sauce (2025–2026 reviews) · zaru soba ¥1,200 regular (August 2026), 1.5× and double portions; grated-daikon (oroshi) soba, spicy oroshi, yamakake, a small bowl of tororo (2025–2026 reviews) · soba-gaki zenzai (sweet red-bean soup with buckwheat dumplings), cold ¥900 (August 2026) · soba-yu in a pot with extra dipping sauce; sake, shochu and beer (2026 reviews) · toshikoshi soba at year end (official site)',
    website: SITE, gmaps: gm('とおる蕎麦 松屋町'), menu_url: null,
    notes: '[Soba · Gosho-minami, handmade juwari by one man] An eight-seat counter on a quiet street near Karasuma Oike where the owner alone makes, boils and serves handmade juwari soba: firm, fragrant noodles with a bold bonito dip, big portions, and soba-gaki zenzai to finish. Lunch only, Thursday to Sunday; expect a queue at noon and many visitors from abroad. One diner found the dip too mild (April 2026). Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner, not named; runs the shop alone (2025–2026 reviews)'], origin: null,
      background: 'Reviewers in 2025–2026 describe an eight-seat counter in a residential street of Gosho-minami where one owner handles everything — drinks, boiling, serving and clearing — with a quick rhythm, handmade juwari soba compared to Edo or Echizen styles, generous portions, and lately many foreign customers. The shop’s own site and Instagram (toru_soba) post holidays.',
      philosophy: null,
      specialty: 'Juwari zaru soba; soba-gaki zenzai.',
      anecdotes: [
        { text: 'November 2025: "The restaurant has only eight counter seats and is run by a single master, which made the wait time unexpectedly long" — about 40 minutes in the rain.', source: R + 'B516887437/' },
        { text: 'An April 2026 diner found the soba short and the dipping sauce "quite subtle… Maybe it’s due to my hay fever."', source: R + 'B525665060/' },
        { text: 'A monthly regular, June 2026: "They also seem to accommodate gluten-free options."', source: R + 'B512996393/' },
      ],
      japanese_sources_summary: '公式サイト (torusoba.wixsite.com): 手打 とおる蕎麦 (Teuchi Toru Soba)、Instagram toru_soba、年越しそば、11月9日〜18日は定休日と臨時休業でお休み、7月の夏休み。食べログ: とおる蕎麦、そば、中京区二条通東洞院東入ル松屋町35-1、烏丸御池駅から徒歩7分、木〜日 11:30〜14:30、月〜水休み、予約不可、カウンター8席、禁煙、カード・電子マネー・QR不可。口コミ (2025年10月〜2026年10月、英語): 手打ちの十割そば、店主が一人で切り盛り、昼は行列 (40分待ちも)、ざるそば並1,200円、1.5倍や大盛り、おろしそば、辛味おろし、山かけ、とろろ小鉢、冷たいそばがきぜんざい900円、そば湯はポットで、つゆは鰹の江戸風、量が多い、グルテンフリーにも対応しているようだという声、つゆが薄く感じたという声 (2026年4月)、外国人客が多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B512996393/', R + 'B516887437/', R + 'B520921527/', R + 'B525665060/', R + 'B530387295/', R + 'B530396475/', R + 'B531329145/', R + 'B537180267/', R + 'B537599556/', R + 'B97356422/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside; counter only; many visitors from abroad (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区二条通東洞院東入ル松屋町35-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a November 2026 notice; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013560, 135.761159); cross-checked: GSI 京都府京都市中京区松屋町35番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512996393/'],
    price_note: 'Prices from August 2026.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba (juwari), regular', '¥1,200', 'Soba', 'ask', 'no', 'August 2026.', 'zaru_soba'),
      it('', '', 'Cold soba-gaki zenzai', '¥900', 'Sweets', 'ask', 'ask', 'August 2026.', 'soba_gaki'),
    ] }, {
    cuisine: '手打ちの十割そばに鰹出汁の江戸風のつゆ (2025〜2026年の口コミ)・ざるそば並1,200円 (2026年8月)、1.5倍や大盛り。おろしそば、辛味おろし、山かけ、とろろの小鉢 (2025〜2026年の口コミ)・冷たいそばがきぜんざい900円 (2026年8月)・そば湯はポットで、つゆの追加付き。日本酒、焼酎、ビール (2026年の口コミ)・年末は年越しそば (公式サイト)',
    neighborhood: '御所南の住宅街。烏丸御池駅から徒歩7分',
    gf_detail: '要確認: 手打ちの十割そばで、2026年4月・6月にはグルテンフリーの注文にも応じているという声。ただ、つゆは醤油ベースで、店としての対応は公表されていない。店主に確認を。',
    vegan_detail: 'ヴィーガン不可: つゆは鰹出汁 (2025年11月)。とろろには卵が付く (2026年4月)。',
    notes: '[そば・御所南、ひとりで打つ十割そば] 烏丸御池近くの静かな通りにある8席のカウンターで、店主がひとりで打ち、茹で、出す手打ちの十割そば。しっかりした香りの麺に鰹の効いたつゆ、量はたっぷりで、締めはそばがきぜんざい。昼のみ、木〜日。昼は行列ができ、海外からの客も多い。つゆが薄いという声も (2026年4月)。現金のみ。',
  });
}

// ================================================================ 紅葉Koyo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040792/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.dusit.com/dusitthani-kyoto/ja/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_koyo_dusit_thani', name: '紅葉 Koyo (Dusit Thani Kyoto)', category: 'OMNI',
    lat: 34.992015, lng: 135.755109, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: teppanyaki steak and vegetables can avoid wheat, but courses include focaccia, an Akashi-yaki-style wagyu and sushi (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-centred teppanyaki courses (reviews).',
    hours_raw: 'Tabelog: dinner 17:30–22:00 (last food order 20:00) Mon, Tue, Fri, Sat, Sun; closed Wednesday and Thursday; reviewers also describe lunch courses (June 2025 – May 2026). Service charge 15%, no cover (Tabelog, Japanese original 「サービス料：15％チャージ：なし」). 30 seats around the teppan, semi-private areas; sommelier; smart-casual dress code; no children under 6; wheelchair accessible; cards. In the basement of the Dusit Thani Kyoto hotel, entered from the garden side (May 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Nishi Honganji — 12 min walk from Kyoto Stn (inside Dusit Thani Kyoto)',
    cuisine: 'Teppanyaki with a French-trained chef’s touch (June 2025), in a hotel basement overlooking a Japanese garden · lunch course with domestic beef fillet ¥6,000 (June 2025): green-pea and grilled Kyoto vegetable salad, wagyu in Akashi-yaki style, soup, house focaccia, fillet, matcha sorbet with Tanba black beans · Chef’s Table teppan omakase lunch (January 2026) · sushi added after a change of head chef (December 2025); sirloin, cauliflower spread with the focaccia (May 2026) · Thai beer and a sommelier’s wine pairings (reviews)',
    website: SITE, gmaps: gm('紅葉 デュシタニ京都'), menu_url: null,
    notes: '[Teppanyaki · Dusit Thani Kyoto, a garden-view counter] The teppanyaki room of the Thai luxury hotel Dusit Thani Kyoto, near Nishi Honganji: thirty seats around the plate in a bright basement looking onto the garden, with Kyoto vegetables, wagyu fillet and house focaccia; lunch from about ¥6,000. 15% service charge, smart-casual dress, no children under 6. A new head chef and staff since late 2025.',
    chef_bio: { chef_name: null, roles: ['Head chef not named; a December 2025 diner says the head chef and staff were replaced'], origin: null,
      background: 'Reviewers in 2025–2026 place it in the basement of Dusit Thani Kyoto, built on the site of a former elementary school, with a bright room facing a Japanese garden, warm wood design, and many staff from Southeast Asia; a June 2025 diner says the menu is by a chef with a French background. In December 2025 a regular noted a new head chef, renewed staff and newly added sushi. No hotel-wide record exists in the data.',
      philosophy: null,
      specialty: 'Teppan wagyu fillet; house focaccia.',
      anecdotes: [
        { text: '"The head chef has changed, and the staff has been completely renewed!!" — December 2025.', source: R + 'B519017112/' },
        { text: 'A May 2026 diner in a T-shirt, jeans and jacket worried about the dress code, "but it turned out to be acceptable!" — and warned that hotel drink prices add up fast.', source: R + 'B529008802/' },
        { text: '"The flavors were a bit on the stronger side (perhaps because I have a Kyoto palate)." — September 2025.', source: R + 'B513839440/' },
      ],
      japanese_sources_summary: '食べログ: 紅葉Koyo、鉄板焼き、下京区西洞院通正面上ル西洞院町466、京都駅中央口から徒歩12分、月火金土日 17:30〜22:00 (料理 L.O. 20:00)、水木休み、サービス料15%・チャージなし、30席、半個室、ソムリエ、スマートカジュアル、6歳未満は利用不可、車椅子可、カード可、ホテルのレストラン、公式サイトはデュシタニ京都。口コミ (2025年6月〜2026年5月、英語): デュシタニ京都の地下、旧小学校の跡地、日本庭園が見える明るい店内、フレンチ出身のシェフ、ランチコース6,000円 (グリーンピースと京野菜のサラダ、和牛の明石焼き風、スープ、自家製フォカッチャ、国産牛フィレ、抹茶のソルベと丹波黒豆)、シェフズテーブルの鉄板おまかせランチ、料理長とスタッフが替わり寿司も、サーロイン、カリフラワーのスプレッド、タイのビール、ソムリエのワイン、東南アジア出身のスタッフ、味は濃いめという声、ドレスコード、ホテル価格。',
      confidence: 'medium', sources: [TB, SITE, R + 'B508882562/', R + 'B508949827/', R + 'B513839440/', R + 'B518052269/', R + 'B519017112/', R + 'B521429248/', R + 'B526771063/', R + 'B529008802/', R + 'B529134161/', R + 'B530776492/'] },
    cultural_comfort: { level: 'english', note: 'International hotel staff; dress code smart casual.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院通正面上ル西洞院町466',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (34.992015, 135.755109); cross-checked: GSI 京都府京都市下京区西洞院町466番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508949827/'],
    price_note: 'Price from June 2025; plus 15% service.', last_checked: TODAY, items: [
      it('', '', 'Teppan lunch course with domestic beef fillet', '¥6,000', 'Lunch', 'ask', 'no', 'June 2025.', 'teppanyaki'),
    ] }, {
    cuisine: 'フレンチ出身のシェフの手が入った鉄板焼き (2025年6月)。ホテルの地下で日本庭園を望む・ランチは国産牛フィレのコース6,000円 (2025年6月): グリーンピースと京野菜の焼き野菜のサラダ、和牛の明石焼き風、スープ、自家製フォカッチャ、フィレ、抹茶のソルベと丹波黒豆・シェフズテーブルの鉄板おまかせランチ (2026年1月)・料理長が替わってから寿司も (2025年12月)。サーロイン、フォカッチャにカリフラワーのスプレッド (2026年5月)・タイのビールやソムリエのワインのペアリング (口コミ)',
    neighborhood: '西洞院正面、西本願寺の近く。京都駅から徒歩12分 (デュシタニ京都の中)',
    gf_detail: '要確認: 鉄板のステーキや野菜は小麦なしにできそうだが、コースにフォカッチャ、明石焼き風の和牛、寿司 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛肉中心の鉄板焼きのコース (口コミ)。',
    notes: '[鉄板焼き・デュシタニ京都、庭を望むカウンター] 西本願寺近くのタイの高級ホテル、デュシタニ京都の鉄板焼き。庭に面した明るい地下の30席で、京野菜、和牛フィレ、自家製フォカッチャ。ランチは6,000円ほどから。サービス料15%、スマートカジュアル、6歳未満は不可。2025年末から料理長とスタッフが一新。',
  });
}

// ================================================================ アナザー シー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026548/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://another-c.com/ja';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_another_c', name: 'アナザー シー (Another C)', category: 'MOM_AND_POP',
    lat: 35.009108, lng: 135.770602, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include tempura, sushi and a small burger to finish (2023–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options, but the omakase leans on Satsuma kuroge wagyu, eel and fish with dashi (official site; reviews).',
    hours_raw: 'Official site: 18:00–23:00, reservations only; closed irregularly. Booking via TableCheck or by e-mail; changes by the day before; say when booking if you bring children (school age and up) (Tabelog). 8 counter seats; non-smoking; cards, e-money and QR. Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says 10% is added). Experiences offered: a Maiko dinner with a maiko’s performance and games, a Nishiki market tour and cooking classes (official site; July 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Kiyamachi corner — 3 min walk from Sanjo Stn and Kyoto Shiyakusho-mae Stn (4th floor)',
    cuisine: 'Omakase-only modern Japanese at an eight-seat counter, joining New York freedom with Kyoto technique: Kyoto vegetables and local sake, chosen seafood, Satsuma kuroge wagyu (official site) · seen: Satsuma wagyu strip loin with yuba and mibuna sauce to open, Aichi eel sushi, young-ayu tempura, chicken takikomi-gohan, saba-zushi (July 2025); tomato and sake soup with oysters and clams, grilled eel, simmered octopus, a sushi-rice onigiri (March 2023); a mini burger to finish (December 2023) · Chef’s Special Dinner; Maiko Dinner ¥30,000–39,999 a head (official site; 2025 reviews) · spend ¥20,000–39,999 (Tabelog)',
    website: SITE, gmaps: gm('Another C 三条木屋町'), menu_url: SITE,
    notes: '[Modern Japanese · Sanjo-Kiyamachi, a New York-raised chef’s counter] An eight-seat fourth-floor counter at Sanjo-Kiyamachi where chef 富永 暖, raised in New York and once head chef of MEGU in Tribeca, cooks an omakase of Kyoto produce and Satsuma wagyu — often starting with the meat — and chats across the counter. Popular with visitors from abroad; a Maiko Dinner can be booked. Reservations only; ¥20,000–40,000 a head. No service charge.',
    chef_bio: { chef_name: '富永 暖 (Dan Tominaga)', roles: ['Owner-chef (official site); cooks and serves alone (March 2023; November 2025)'], origin: 'Grew up in New York (official site)',
      background: 'Per the official site: grew up around cooking, moved to New York at 10 and helped at his parents’ food shop; after high school he returned to Japan alone to train in Japanese cuisine in Kyoto, at Michelin-starred restaurants including 貴船ひろや and 日本料理櫻川; went back to New York in 2004 as head chef of MEGU in Tribeca; returned in 2009 to lead the kitchen of 多伽羅 in Nishijin; then opened Another C. A July 2025 diner gives the name as Dan Tominaga. An August 2023 diner met "the chef and his wife."',
      philosophy: 'Official site: a hideaway where each guest is the star — borderless food and space, freer, more fun and more stylish.',
      specialty: 'Omakase of Kyoto produce and Satsuma wagyu; the Maiko Dinner.',
      anecdotes: [
        { text: 'March 2023: "Although it’s a small space with counter and table seating, I was astonished to see it run by just one person!"', source: R + 'B461557640/' },
        { text: 'A birthday in June 2023: "When it came time for the birthday cake, everyone joined in to celebrate."', source: R + 'B466522055/' },
        { text: 'October 2025: "It was a bit unexpected to have a meat dish… served as the first course, but it was absolutely perfect to enjoy it when I was really hungry!!"', source: R + 'B527154128/' },
      ],
      japanese_sources_summary: '公式サイト (another-c.com): Another C、京都モダンジャパニーズ、お客様が主役の隠れ家、カウンター8席のみ、シェフ 富永 暖、おまかせコースのみ、京野菜・地酒・厳選した海鮮・薩摩黒毛和牛の創作和食、舞妓ディナー・錦市場ツアー・料理教室、ニューヨークの自由な感性と京都の技、10歳でニューヨークへ移住し両親の食材店を手伝う、高校卒業後に単身帰国し京都で修業 (貴船ひろや、日本料理櫻川など)、2004年に再渡米しトライベッカの MEGU で Head Chef、2009年に帰国し西陣の多伽羅の料理長、18:00〜23:00 完全予約制、不定休、中京区中島町96-2 三条木屋町ビル4F。食べログ: 日本料理・創作料理・肉料理、8席、禁煙、ベジタリアン対応、子供は学童以上、カード・電子マネー・QR可、サービス料は原文で「なし」。口コミ (2023年3月〜2025年11月、英語): 一人で切り盛り、シェフと奥さん、海外からの客が多い、薩摩黒毛和牛のストリップロインと湯葉と壬生菜のソース、愛知の鰻寿司、稚鮎の天ぷら、鶏の炊き込みご飯、鯖寿司、牡蠣と蛤のトマトと酒のスープ、締めのミニバーガー、肉料理から始まるコース、舞妓ディナー、1人2〜4万円。',
      confidence: 'high', sources: [SITE, TB, R + 'B461557640/', R + 'B466522055/', R + 'B471265264/', R + 'B487981638/', R + 'B500950678/', R + 'B510479646/', R + 'B520514636/', R + 'B527154128/'] },
    cultural_comfort: { level: 'english', note: 'Chef raised in New York; many guests from abroad.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条通木屋町角中島町96 三条木屋町ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.009108, 135.770602); cross-checked: GSI 京都府京都市中京区中島町96番地 (lot) 43m; kyoto_neze_sanjo_kiyamachi is 6.8m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, TB],
    price_note: 'No course prices published; spend ¥20,000–39,999 a head (Tabelog; reviews).', last_checked: TODAY, items: [
      it('Chef’s Special Dinner', '', 'Chef’s Special Dinner (omakase)', null, 'Course', 'no', 'ask', 'Official site.', 'kaiseki_course'),
      it('舞妓ディナー', '', 'Maiko Dinner', null, 'Course', 'no', 'ask', 'Official site; ¥30,000–39,999 a head in 2025 reviews.', 'kaiseki_course'),
    ] }, {
    cuisine: 'ニューヨークの自由さと京都の技を合わせた、8席のカウンターのおまかせだけのモダンジャパニーズ。京野菜と地酒、厳選した海鮮、薩摩黒毛和牛 (公式サイト)・口コミでは最初に薩摩和牛のストリップロインと湯葉と壬生菜のソース、愛知の鰻寿司、稚鮎の天ぷら、鶏の炊き込みご飯、鯖寿司 (2025年7月)。牡蠣と蛤のトマトと酒のスープ、焼き穴子、蛸の煮物、酢飯のおにぎり (2023年3月)。締めにミニバーガー (2023年12月)・Chef’s Special Dinner と舞妓ディナー (1人3〜4万円) (公式サイト、2025年の口コミ)・1人2〜4万円 (食べログ)',
    neighborhood: '三条木屋町の角。三条駅・京都市役所前駅から徒歩3分 (4階)',
    gf_detail: 'グルテンフリーではない: コースに天ぷら、寿司、締めのミニバーガー (2023〜2025年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応とあるが、おまかせは薩摩黒毛和牛、鰻、魚と出汁が中心 (公式サイト、口コミ)。',
    notes: '[モダンジャパニーズ・三条木屋町、ニューヨーク育ちのシェフのカウンター] 三条木屋町のビル4階、8席のカウンター。ニューヨーク育ちで、トライベッカの MEGU で料理長を務めた富永 暖さんが、京都の食材と薩摩和牛のおまかせを (肉から始まることも)、カウンター越しの話とともに。海外からの客が多く、舞妓ディナーも予約できる。完全予約制、1人2〜4万円。サービス料なし。',
  });
}

save();
