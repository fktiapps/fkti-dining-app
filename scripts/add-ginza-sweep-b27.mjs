// Ginza Station half-mile sweep (805 m), batch 27 — mom-and-pop discovery among Ginza's old family shops.
//   + 銀座鳥繁 (yakitori since 1931; founder 保立繁之助 and his wife なか ran a stall by the Kōjunsha; three generations,
//     one shop at 銀座6-9-15, 38 seats → MOM_AND_POP on the named founding family)
// Also in this run: 立ち呑み 庫裏 corrected to OMNI (scripts/fix-ginza-kuri-omni.mjs). Checked and not added: 明月庵 田中屋
// (has a Matsuya branch), 空也 (family company also runs the 空いろ brand), レストラン早川 / 千里軒 / 喫茶YOU (no named owner found).
// Sources: torishige.jp (home, about, menu; 2025 prices), Tabelog /en/ listing + 2026 reviews, Time Out Tokyo (2023).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

{
  const HP = 'https://torishige.jp/'; const AB = HP + 'about'; const MN = HP + 'menu';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002619/'; const R = TB + 'dtlrvwlst/';
  const TO = 'https://www.timeout.jp/tokyo/ja/レストラン/銀座鳥繁';
  const wk = day(['17:00', '22:00']);
  put({
    id: 'tokyo_ginza_torishige', name: '銀座鳥繁 (Ginza Torishige)', category: 'MOM_AND_POP',
    lat: 35.669965, lng: 139.763037,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Charcoal-grilled chicken comes both salt-grilled (shio) and with the house tare, and the meal ends with the signature dry curry. No source gives the ingredients of the tare or the dry curry. The shop asks guests to mention allergies when booking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. A chicken yakitori shop, and the courses are built around chicken and duck, but the à la carte list has charcoal-grilled vegetables (leek, shishitō, okra, ginkgo, shiitake, tomato, manganji pepper). Seasoning and shared grills are not described.',
    hours_raw: 'Mon–Fri 17:00–22:00; Sat 16:00–21:00; closed Sundays, holidays, fifth Saturdays, Golden Week, and summer and winter breaks (official site). Food L.O. around 20:00. Reservations are for courses only and online only; the phone line is closed. Cards, e-money and d Barai accepted (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['16:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme (6-9-15) — nearest exit Ginza Stn A2',
    cuisine: 'Charcoal yakitori since 1931 · big skewers, duck, winter wild fowl · the signature "dry curry" finish', cuisine_type: 'yakitori',
    website: HP, gmaps: gm('銀座鳥繁 銀座6-9-15'), menu_url: MN,
    notes: "[Mom & Pop · the 1931 yakitori stall] In 1931 the founder 保立繁之助, a trained kappō cook, and his wife なか pulled a yakitori stall out from behind the Kabukiza every night and set it up in the Kōjunsha's fuel yard, where kabuki actors and Ginza's cultural crowd ate. The stall became a shop in 1939, passed to the second generation, and moved to its present site in 1958. It is now in the third generation; the Tabelog shop page describes three generations 'showcasing the strong family bonds'. The skewers are large and grilled over charcoal: duck, chicken wings, tsukune both in tare and with salt, liver, skin (¥600–850 each), and from 15 November to 15 February wild duck, teal and moorhen. The famous finish is the dry curry. The founder first made it as a staff meal, with curry powder a customer brought as a gift, before curry rice was common. Staff ask about it with your first order so they know how much rice to cook. Sake is warmed in a pure-silver kettle and poured from a height. Courses are ¥8,600 (90th-anniversary) and ¥9,500 (duck loin) from January 2025. Dry curry with chicken soup is ¥1,000 and can be taken home.",
    chef_bio: {
      chef_name: '保立繁之助 (founder, with his wife なか); now run by the third generation', roles: ['founding family (3rd generation)'],
      origin: 'Yakitori stall from 1931 beside the Kōjunsha; shop from 1939; current site from 1958',
      background: 'The founder trained as a kappō cook. The second generation took over the shop and the third generation runs it now (official site).',
      philosophy: '「一切の手抜きをしない」 — the teaching handed down from the previous generations.',
      specialty: 'Large charcoal-grilled skewers; duck; dry curry.',
      anecdotes: [
        { text: '「初代 保立繁之助が妻・なかとともに、歌舞伎座の裏から毎夜屋台を引き出し、交詢社の燃料置き場（当時）に焼き鳥の屋台を出したのが始まりです」', source: AB },
        { text: 'The dry curry began as a staff meal made with curry powder a guest brought as a gift; it spread by word of mouth before it was on the menu.', source: HP },
        { text: '"The Japanese sake served from a kettle may seem like a mere performance due to the high pouring, but it actually aerates the sake." — October 2026.', source: R + 'B537333433/' },
      ],
      japanese_sources_summary: '公式サイト: 銀座鳥繁、昭和6年(1931)創業、初代 保立繁之助が妻・なかとともに歌舞伎座の裏から屋台を引き出し交詢社の燃料置き場に、割烹の板前だった初代、昭和14年に店を構え二代目へ、昭和33年に現在地、三代続く焼き鳥屋、「一切の手抜きをしない」、名物ドライカレーは客の土産のカレー粉で作った賄いから、純銀の薬缶の燗酒、九十周年記念コース8,600円・相鴨ロースコース9,500円(2025年1月から新価格)、ドライカレー＆鳥スープ1,000円、焼き鳥600〜850円、野鳥は11/15〜2/15、平日17:00〜22:00・土16:00〜21:00、日祝・第五土曜休、アレルギーは予約時に。食べログ: 38席、カード・電子マネー可、電話受付停止中でネット予約、店舗紹介に三代続く家族の店。',
      confidence: 'high', sources: [HP, AB, MN, TB, TO, R + 'B537333433/', R + 'B530872199/', R + 'B535422070/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; the site is in English, Chinese and Korean too. Say yes to the dry curry when asked at the first order. Cards accepted.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Courses are chicken and duck skewers with chicken soup.', source: MN }],
      staff_allergy_handling: [{ text: '「アレルギーや苦手な食材は、ご予約時にお知らせください」', source: HP }],
      positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-9-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site current (2025 prices, 95th year); Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目9番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'verified', confidence: 'high', sources: [MN, R + 'B530872199/'],
    price_note: 'Official menu, prices from January 2025, tax included.', last_checked: TODAY, items: [
      it('九十周年記念コース', 'kyuujuu shuunen kinen koosu', '90th-anniversary course: 8 skewers, dry curry, chicken soup, ice cream', '¥8,600', 'Courses', 'ask', 'no', '', 'course_90th'),
      it('相鴨ロースコース', 'aigamo roosu koosu', 'Duck-loin course: 8 dishes with vegetables, dry curry, dessert', '¥9,500', 'Courses', 'ask', 'no', '', 'course_duck'),
      it('相鴨焼', 'aigamo yaki', 'Grilled duck skewer', '¥800', 'Yakitori', 'ask', 'no', '', 'aigamo'),
      it('手羽先焼', 'tebasaki yaki', 'Chicken wing', '¥800', 'Yakitori', 'ask', 'no', '', 'tebasaki'),
      it('つくね焼', 'tsukune yaki', 'Tsukune (tare or salt)', '¥600', 'Yakitori', 'ask', 'no', '', 'tsukune'),
      it('かしわ焼', 'kashiwa yaki', 'Chicken thigh', '¥600', 'Yakitori', 'ask', 'no', '', 'kashiwa'),
      it('皮焼', 'kawa yaki', 'Chicken skin', '¥600', 'Yakitori', 'ask', 'no', '', 'kawa'),
      it('肝焼', 'kimo yaki', 'Liver (tare)', '¥600', 'Yakitori', 'ask', 'no', '', 'kimo'),
      it('もも焼', 'momo yaki', 'Chicken thigh (signature)', '¥3,300', 'Yakitori', 'ask', 'no', '', 'momo'),
      it('葱焼', 'negi yaki', 'Grilled leek', '¥450', 'Grilled vegetables', 'ask', 'ask', '', 'negi'),
      it('ぎんなん焼', 'ginnan yaki', 'Grilled ginkgo nuts', '¥550', 'Grilled vegetables', 'ask', 'ask', '', 'ginnan'),
      it('椎茸焼', 'shiitake yaki', 'Grilled shiitake', '¥700', 'Grilled vegetables', 'ask', 'ask', '', 'shiitake'),
      it('ドライカレー＆鳥スープ', 'dorai karee & tori suupu', 'Signature dry curry with chicken soup', '¥1,000', 'Rice', 'ask', 'no', 'Take-home box ¥2,200.', 'dry_curry'),
      it('銀座鳥繁の燗酒', 'kanzake', 'Warm sake from the silver kettle, glass', '¥950', 'Drinks', 'gf', 'ask', '', 'kanzake'),
    ] }, {
    cuisine: '1931年創業の炭火焼き鳥・大ぶりの串・鴨と冬の野鳥・名物〆のドライカレー',
    neighborhood: '銀座六丁目(6-9-15)。最寄りは銀座駅A2出口',
    gf_detail: '要確認。炭火の焼き鳥は塩焼きとタレ焼きがあり、〆は名物のドライカレー。タレやドライカレーの材料を記した情報はありません。アレルギーは予約時に伝えるよう店が案内しています。',
    vegan_detail: '要確認。鶏の焼き鳥店でコースは鶏と鴨が中心ですが、単品に炭火の野菜焼(葱・ししとう・オクラ・銀杏・椎茸・トマト・万願寺唐辛子)があります。味付けや焼き台の共用は書かれていません。',
    notes: '[個人店・1931年の焼き鳥の屋台] 昭和6年、割烹の板前だった初代・保立繁之助さんが妻・なかさんとともに、毎夜歌舞伎座の裏から屋台を引き出し、交詢社の燃料置き場で焼き鳥を始めたのが起こり。歌舞伎役者や銀座の文化人に愛されました。昭和14年に店を構えて二代目へ、昭和33年に現在地へ。いまは三代目で、食べログの店舗紹介でも三代続く家族の店とされています。炭火で焼く大ぶりの串は相鴨、手羽先、タレと塩のつくね、肝、皮など(1本600〜850円)、11月15日〜2月15日は真鴨・小鴨・鷭の野鳥も。名物の〆はドライカレーで、まだカレーライスが一般的でなかった頃、お客さんの土産のカレー粉で初代が作った賄いが始まり。炊飯量を決めるため最初の注文時に「〆のドライカレーは如何なさいますか？」と聞かれます。燗酒は純銀の薬缶から高い位置で注ぎます。コースは2025年1月から九十周年記念コース8,600円・相鴨ロースコース9,500円、ドライカレー＆鳥スープは1,000円で持ち帰りも可。',
  });
}

save();
