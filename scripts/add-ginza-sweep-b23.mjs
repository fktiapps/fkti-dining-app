// Ginza Station half-mile sweep (805 m), batch 23 — mom-and-pop discovery via ASCII.jp's "レトロさんぽ" series.
//   + 歌える居酒屋 本日開店 (karaoke izakaya; started ~60 years before 2024 by a sandwich-board man in the old すし屋横丁,
//     at the Kōtsū Kaikan since about 1967; run by second-generation master Abe Hisao and the mama → MOM_AND_POP)
// Checked and not added this batch: KOKO (1979 sandwich shop, owner unnamed; no Tabelog id found), 菊亭 (1951 tempura,
// owner unnamed; no Tabelog id found), インデアンカレー (chain, central kitchen), 立呑み きくのこ (2018, manager), 食堂チャチャチャ.
// Sources: ASCII.jp レトロさんぽ #16 (2024), Tabelog /en/ listing + 2023–2026 reviews.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const AS = 'https://ascii.jp/elem/000/004/223/4223923/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13052504/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '23:30']);
  put({
    id: 'tokyo_utaeru_izakaya_honjitsu_kaiten', name: '歌える居酒屋 本日開店 (Utaeru Izakaya Honjitsu Kaiten)', category: 'MOM_AND_POP',
    lat: 35.675154, lng: 139.764886,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Izakaya plates: fried chicken karaage and curry croquettes, sauce yakisoba, black mapo tofu, grilled stingray fin, oden. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described. Yakisoba with bacon, keema curry with minced meat, karaage, sashimi. Cold tofu and salads are on the menu, but their dressings and toppings are not described.',
    hours_raw: 'Mon–Fri 17:00–23:30 (L.O. 23:00); Sat 17:30–23:00 (L.O. 22:30); closed Sundays and holidays (Tabelog). Charge with appetiser ¥420. First glass half price until 18:00. Karaoke ¥200 a song. No cards or e-money (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yūrakuchō 2-chōme, at the far end of the Tokyo Kōtsū Kaikan basement — 1–2 min from Yūrakuchō Stn',
    cuisine: 'Karaoke izakaya (Shōwa snack-bar style) · home-cooked izakaya plates · sing-along with the regulars', cuisine_type: 'izakaya',
    website: null, gmaps: gm('歌える居酒屋 本日開店 東京交通会館'), menu_url: null,
    notes: "[Mom & Pop · the sing-along izakaya] At the very back of the Kōtsū Kaikan basement, a neon sign and a noren mark a family izakaya where everyone sings. It began about sixty years before 2024, when the current master's father, a sandwich-board man, opened a snack-bar-cum-pub in the 'sushiya yokochō' that once stood here, hence the karaoke. It moved into the Kōtsū Kaikan around 1967 and kept the name 'Honjitsu Kaiten', 'opening today', the line those sandwich boards always carried: \"so as not to forget where we started,\" master Abe Hisao suspects. He runs it with the mama. Regulars, mostly forty to sixty, sing Ōe Senri, YMO and Godiego and drift between tables. Most of them met here. The master, once a vocalist, will duet with you. The food is home-cooked: vegetable-heavy sauce yakisoba (¥780), black mapo tofu (¥620, or a bowl for ¥130 more), keema curry with chickpeas (¥750), karaage, curry croquettes, grilled stingray fin and oden (2024–2026). Songs cost ¥200 each. First-timers and solo drinkers are welcomed in.",
    chef_bio: {
      chef_name: '安倍久雄 (Abe Hisao, second-generation master) with the mama', roles: ['owner-master (2nd generation)', 'co-run with the mama'],
      origin: 'Founded about 60 years before 2024 in the former すし屋横丁; at the Kōtsū Kaikan since about 1967',
      background: "Abe's father was a sandwich-board man (サンドイッチマン) who opened the shop when that trade faded. Abe runs it with the mama; a 2025 diner says the owner used to be a vocalist.",
      philosophy: '「初心を忘れないために、この言葉を店名にしたんじゃないかな」 — on the name 本日開店.',
      specialty: 'Karaoke with the regulars; sauce yakisoba; black mapo tofu.',
      anecdotes: [
        { text: '「最近は一人カラオケも人気だけど、やっぱりここに来てみんなで歌ったほうが楽しいんだよね」 — a regular; most customers met each other here.', source: AS },
        { text: '"The owner, who used to be a vocalist, even did a duet with me! And I also enjoyed the singing of the lady in charge." — September 2025.', source: R + 'B514134907/' },
        { text: 'May 2026: the mapo tofu was made milder for a companion who doesn\'t like spice, then three hours of singing, highballs and yakisoba.', source: R + 'B528540203/' },
      ],
      japanese_sources_summary: 'ASCII.jp「レトロさんぽ」第16回(2024.9.27): 歌える居酒屋 本日開店、東京交通会館B1の奥、60年ほど前にサンドイッチマンだった父が「すし屋横丁」でスナック・パブのような店を開業、交通会館には1967年ころ、二代目マスター・安倍久雄さんがママと2人で切り盛り、店名は初心を忘れないため、40〜60代の常連、大江千里・YMO・ゴダイゴ、野菜たっぷりソース焼きそば780円、黒麻婆豆腐620円(+130円で丼)、ひよこ豆のキーマカレー750円、18時まで最初の1杯半額。食べログ: 月〜金17:00〜23:30、土17:30〜23:00、日祝休、チャージ+お通し420円、カード・電子マネー不可。2025–2026年の口コミ: 1曲200円、元ボーカリストのマスターとデュエット、エイヒレ、おでん、カレーコロッケ。',
      confidence: 'high', sources: [AS, TB, R + 'B514134907/', R + 'B505018548/', R + 'B517481544/', R + 'B528540203/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Loud and friendly: microphones go round the tables; first-timers and solo guests are pulled in. ¥420 charge; ¥200 per song; no cards or e-money.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Fried karaage and curry croquettes; sauce yakisoba.', source: R + 'B528540203/' }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Yakisoba with bacon.', source: AS }],
      staff_allergy_handling: [{ text: 'The kitchen made the mapo tofu milder on request (May 2026).', source: R + 'B528540203/' }],
      positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目10番 (lot) 53m — the Kōtsū Kaikan block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [AS, R + 'B505018548/', R + 'B517481544/', R + 'B528540203/'],
    price_note: 'Food prices from the September 2024 ASCII.jp feature; karaage, croquettes, stingray fin and oden from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('野菜たっぷりソース焼きそば', 'yasai tappuri soosu yakisoba', 'Vegetable-heavy sauce yakisoba (with bacon)', '¥780', 'Food', 'no', 'no', '2024.', 'yakisoba'),
      it('黒麻婆豆腐', 'kuro maabo doufu', 'Black (pepper) mapo tofu; +¥130 as a rice bowl', '¥620', 'Food', 'ask', 'ask', '2024.', 'black_mapo'),
      it('挽き肉とひよこ豆のキーマカレー', 'hikiniku to hiyokomame no kiima karee', 'Keema curry with minced meat and chickpeas', '¥750', 'Food', 'ask', 'no', '2024.', 'keema_curry'),
      it('若鶏の唐揚げ', 'wakadori no karaage', 'Chicken karaage', '', 'Food', 'no', 'no', '', 'karaage'),
      it('カレーコロッケ', 'karee korokke', 'Curry croquettes', '', 'Food', 'no', 'ask', '', 'curry_croquette'),
      it('エイヒレ', 'eihire', 'Grilled stingray fin', '', 'Snacks', 'ask', 'no', '', 'eihire'),
      it('おでん', 'oden', 'Oden', '', 'Food', 'ask', 'no', '', 'oden'),
      it('カラオケ', 'karaoke', 'Karaoke, per song', '¥200', 'Other', '', '', '', 'karaoke'),
    ] }, {
    cuisine: '歌える居酒屋(昭和のスナック風)・手作りの居酒屋料理・常連と合唱',
    neighborhood: '有楽町二丁目、東京交通会館地下のいちばん奥。有楽町駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。居酒屋の料理で、若鶏の唐揚げ、カレーコロッケ、ソース焼きそば、黒麻婆豆腐、エイヒレ、おでんなど。グルテンフリーとされるものはありません。',
    vegan_detail: '記述上はヴィーガンではありません。ベーコン入りの焼きそば、挽き肉のキーマカレー、唐揚げ、刺身など。冷や奴やサラダもありますが、ドレッシングや薬味は書かれていません。',
    notes: '[個人店・歌える居酒屋] 東京交通会館地下のいちばん奥、ネオンとのれんが目印の、みんなで歌う家族経営の居酒屋。2024年時点で60年ほど前、サンドイッチマンだった今のマスターの父が、かつてここにあった「すし屋横丁」でスナックのようなパブのような店を開いたのが始まりで、カラオケはその名残。1967年ころに交通会館へ移り、サンドイッチマンの看板によく書かれていた「本日開店」を店名に残しました。「初心を忘れないためじゃないかな」と二代目マスターの安倍久雄さん。ママと2人で店を切り盛りしています。40〜60代の常連が大江千里やYMO、ゴダイゴを歌い、席を移りながら盛り上がり、その多くはこの店で知り合ったそう。元ボーカリストのマスターがデュエットしてくれることも。料理は手作りで、野菜たっぷりソース焼きそば(780円)、黒麻婆豆腐(620円、+130円で丼)、ひよこ豆のキーマカレー(750円)、唐揚げ、カレーコロッケ、エイヒレ、おでん(2024〜2026年)。1曲200円。一見さんやひとり客も歓迎されます。',
  });
}

save();
