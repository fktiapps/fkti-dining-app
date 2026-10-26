// Osaka sweep (2-mile circle around Dotonbori), batch 5 — first vegan/GF batch, seeded from
// FindMeGlutenFree (scripts/sweep/osaka/vegan-seeds.jsonl), nearest first. None of the four has a
// Tabelog id in hand, so pins are the FMGF point cross-checked by GSI on the shop's own address,
// and no queue-status rows are written (the Tabelog queue is untouched).
//   + 松阪牛焼肉M 法善寺店 はなれ (yakiniku; every dish can be made GF with notice) — GF options, queue high
//   + 源氏蕎麦 法善寺参道店 (100% buckwheat soba, dedicated GF fryer for tempura) — GF options, queue high
//   + Naki vegan sweets (vegan, gluten-free sweets shop) — vegan full, GF options, queue dedicated
//   + Gluten-Free Vegan OKONOMIYAKI Vim (six-seat GF okonomiyaki) — GF options, queue dedicated
// FMGF review dates are relative on the page ("3 months ago", read 2026-10-26) and are given here as months.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 5);
const NOTE = 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.';

// ================================================================ 松阪牛焼肉M 法善寺店 はなれ
{
  const FM = 'https://www.findmeglutenfree.com/biz/matsusakagyu-yakiniku-m/5349996281593856';
  const OWN = 'https://matsusaka-projects.com/shop/houzenji-hanare/';
  const wk = day(['12:00', '15:00'], ['17:00', '23:00']), we = day(['12:00', '23:00']);
  put({
    id: 'osaka_matsusakagyu_yakiniku_m_hozenji_hanare', name: '松阪牛焼肉M 法善寺店 はなれ (Matsusakagyu Yakiniku M Hozenji Hanare)', category: 'GF',
    lat: 34.667802, lng: 135.502183, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The restaurant tells FindMeGlutenFree that every food item can be made gluten-free on request, but asks for notice when you book: "Advance reservation required for gluten-free dining." It makes its own gluten-free sauces, including soy sauce and ponzu. Celiac reviewers on FMGF (14 recent ratings) describe staff who confirm gluten-free at the table, swap single items in a set and change the grill between gluten-free and regular dishes. One 2025 diner was brought regular sauces by a different server and caught it by asking. It is not a gluten-free kitchen. Say you are celiac when you book and again when you sit down.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'A Matsusaka-beef yakiniku house. Replying on FMGF, the manager says it also offers vegan menu options, but no vegan dish is described anywhere. Ask when booking.',
    hours_raw: 'Weekdays 12:00–15:00 (L.O. 14:30) and 17:00–23:00 (L.O. 22:30); weekends and holidays 12:00–23:00; no fixed holiday (official page, hours from 21 June 2026). Book ahead; gluten-free needs advance notice.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-5-24, Daruma Bldg 2F, by Hōzenji Yokochō — a few minutes south of Dotonbori',
    cuisine: 'Matsusaka-beef yakiniku · grill it yourself · house gluten-free soy sauce and ponzu · every dish can be made GF with notice · set courses and omakase · shoes off, semi-private tables',
    website: OWN, gmaps: gm('松阪牛焼肉M 法善寺店 はなれ'), menu_url: null,
    notes: '[Yakiniku · gluten-free Matsusaka beef by Hōzenji] The "hanare" annex of Yakiniku M\'s Hōzenji branch: a second-floor room off Hōzenji Yokochō where you take your shoes off at the door, with seven tables, six of them semi-private and one a private room. Matsusaka beef is grilled at the table. It is a celiac favourite: the restaurant says any dish can be made gluten-free with notice, and it makes its own gluten-free soy sauce, ponzu and dipping sauces, so the marinated beef and garlic rice can be done too. Celiac reviewers rave about the staff ("Best GF meal we\'ve had in Japan"). It is pricey: one diner put it at ¥8,800–12,000 a head, another had the ¥12,000 premium course. When it was full, staff walked guests to another branch nearby. Book and mention gluten-free when you do.',
    chef_bio: { chef_name: null, roles: ['branch of Matsusakagyu Yakiniku M (matsusaka-projects.com)'], origin: 'Hōzenji branch annex ("hanare"), Namba 1-chōme', background: 'Part of the Matsusakagyu Yakiniku M group of Osaka yakiniku restaurants (official site); one FMGF reviewer counted four locations.', philosophy: null, specialty: 'Matsusaka beef; house gluten-free sauces.',
      anecdotes: [
        { text: '"I explained I am a coeliac and also have a garlic intolerance and they were able to substitute sauces and provide recommendations." — FMGF review, October 2026.', source: FM },
        { text: '"After countless yakiniku meals, this is the first time I\'ve ever been able to have GF sauce at one." — FMGF review, June 2026; the manager\'s reply credits "our homemade gluten-free sauces".', source: FM },
        { text: '"They gave me gluten free soy sauce to dip and swapped out the grill between gluten free and gluten dishes." — FMGF review, 2024.', source: FM },
      ],
      japanese_sources_summary: '公式(matsusaka-projects.com): 松阪牛焼肉M 法善寺店 はなれ、大阪市中央区難波1-5-24 だるまビル2F、06-6211-2904。2026年6月21日から平日12:00〜15:00(L.O.14:30)・17:00〜23:00(L.O.22:30)、土日祝12:00〜23:00、定休日なし。入口で靴を脱ぐ、テーブル7(半個室6、個室1)、「グルテンフリー」のタグ。FindMeGlutenFree: 店の説明「グルテンフリーは事前予約が必要。すべての料理をグルテンフリーにできる」、予約時に申告を。セリアック病の客の口コミ: 自家製のグルテンフリーのたれ、醤油、ポン酢、席でも何度も確認、網を替える、別のスタッフが通常のたれを持ってきたことが一度(2025年)、1人8,800〜12,000円、プレミアムコース12,000円、満席のとき近くの別店舗に案内。マネージャーの返信: ヴィーガンメニューもある。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'english', note: 'FMGF reviewers describe English-speaking staff used to overseas celiac guests; book online or by phone.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: '"One time a different waitres brought new sauces, which were not gf. But I asked before I ate them…" — FMGF review, 2025.', source: FM },
        { text: 'A shared yakiniku kitchen: regular soy sauce and marinades are in use alongside the gluten-free versions.', source: FM },
      ],
      soy_sauce_wheat: [{ text: 'Regular soy sauce and sauces contain wheat; ask for the house gluten-free soy sauce, ponzu and dipping sauces.', source: FM }],
      vegan_cross_contact: [],
      staff_allergy_handling: [
        { text: '"Advance reservation required for gluten-free dining. All food menu items can be prepared gluten-free upon request." — the restaurant, on FMGF.', source: FM },
        { text: '"Advance notice allows us to prepare gluten-free alternatives whenever possible and take extra precautions to minimize cross-contact." — the restaurant, on FMGF.', source: FM },
      ],
      positives: [
        { text: 'Celiac reviewers repeatedly report no symptoms; staff ask about allergies on arrival and confirm gluten-free dishes at the table.', source: FM },
        { text: 'The official branch page tags the restaurant グルテンフリー (gluten-free).', source: OWN },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0076 大阪府大阪市中央区難波1-5-24 だるまビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official branch page current (hours from 21 June 2026); FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番24号 (go) 7m; OSM node/2361419122 「松阪牛焼肉M」 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No menu captured; prices from FMGF reviews (2025). Every food item can be made gluten-free with notice, per the restaurant.', last_checked: TODAY, items: [
      it('', '', 'Premium course', '¥12,000', 'Courses', 'ask', 'no', 'Per person, FMGF review, 2025.', 'premium_course'),
      it('', '', 'Set course (grill-your-own Matsusaka beef)', '', 'Courses', 'ask', 'no', 'Reviewers swapped single items for gluten-free versions.', 'set_course'),
      it('', '', 'Garlic rice with bacon', '', 'Rice', 'ask', 'no', 'Made with gluten-free sauce on request (FMGF, 2025).', 'garlic_rice'),
    ] }, {
    cuisine: '松阪牛の焼肉・自分で焼く・自家製のグルテンフリー醤油とポン酢・予約時に伝えれば全品グルテンフリーに・コースとおまかせ・靴を脱ぐ半個室',
    neighborhood: '難波1-5-24 だるまビル2F、法善寺横丁のそば。道頓堀から南へ数分',
    gf_detail: '店はFindMeGlutenFreeで、事前に伝えればすべての料理をグルテンフリーにできるとしていますが、「グルテンフリーは事前予約が必要」とのこと。グルテンフリーの醤油やポン酢などのたれを自家製で用意しています。FMGFのセリアック病の客(最近の評価14件)は、席でもグルテンフリーを確認してくれる、セットの一品だけ差し替えてくれる、グルテンフリーと通常の料理で網を替えてくれると書いています。2025年には別のスタッフが通常のたれを持ってきて、客が尋ねて気づいたことも。グルテンフリーの厨房ではありません。予約時と着席時にセリアック病であることを伝えてください。',
    vegan_detail: '松阪牛の焼肉店です。FMGFでマネージャーがヴィーガンメニューもあると返信していますが、具体的な料理はどこにも書かれていません。予約時に確認を。',
    notes: '[焼肉・法善寺のグルテンフリー松阪牛] 焼肉Mの法善寺店の「はなれ」で、法善寺横丁そばのビル2階。入口で靴を脱ぎ、テーブルは7つ(半個室6、個室1)。松阪牛を席で焼きます。セリアック病の客に人気の焼肉店で、事前に伝えればどの料理もグルテンフリーにでき、醤油、ポン酢、つけだれを自家製のグルテンフリーで用意するので、味付け肉やガーリックライスも食べられます。セリアック病の客の評価は非常に高い(「日本で一番のグルテンフリーの食事」)。値段は高めで、1人8,800〜12,000円という客も、12,000円のプレミアムコースの客も。満席のときはスタッフが近くの別店舗まで案内してくれたことも。予約を、その際にグルテンフリーを伝えて。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [FM, OWN],
    why: "Own claim on FMGF: 'Advance reservation required for gluten-free dining. All food menu items can be prepared gluten-free upon request', plus a stated cross-contact routine with advance notice; homemade gluten-free soy sauce, ponzu and dipping sauces; the official branch page tags it グルテンフリー. Independent first-hand corroboration: FindMeGlutenFree, 14 recent ratings, celiac reviewers 2024–October 2026 reporting no symptoms, the grill changed between GF and gluten dishes, and GF confirmed at the table. 'high' rather than 'dedicated': a shared yakiniku kitchen where regular soy sauce and marinades are in use; one 2025 review of a server bringing non-GF sauces (caught by asking); GF depends on notice when booking. Questions for the restaurant: separate grill nets and tongs every time? Are the marinades for GF orders made separately?",
  });
}

// ================================================================ 源氏蕎麦 法善寺参道店
{
  const FM = 'https://www.findmeglutenfree.com/biz/genji-soba/4535891866025984';
  const ABOUT = 'https://genjisoba.co.jp/about', MENU = 'https://genjisoba.co.jp/menu', INFO = 'https://genjisoba.co.jp/info';
  const d = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'osaka_genji_soba_hozenji_sando', name: '源氏蕎麦 法善寺参道店 (Genji Soba)', category: 'GF',
    lat: 34.667906, lng: 135.502979, cuisine_type: 'udon_soba',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The soba is hand-made from 100% buckwheat (juwari). The menu marks gluten-free dishes, and celiac reviewers on FindMeGlutenFree (101 recent ratings) describe a separate, celiac-labelled section. On the official menu, the tempura is made with buckwheat and rice flour and "Fried in a Dedicated Gluten-Free Fryer". Gluten-free dipping sauce and soy sauce are made for gluten-free orders, while the regular sauces are also in use, so ask. FMGF flags that it is NOT a dedicated gluten-free facility. Several reviewers say the celiac-safe tempura and menu are dinner only. Staff ask whether you are celiac. Tell them, and reserve the set courses ahead.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'The set courses note: "Gluten-Free & Vegan options are available upon advance request." There is a vegan soba on the à la carte menu, but in September 2026 a reviewer was asked whether egg was OK after ordering it, so it may only be vegetarian. Ask about the dashi and egg.',
    hours_raw: '11:30–21:30 (L.O. 21:30), break 14:30–17:00; closed some Wednesdays (水曜不定休) (official site). Lunch and dinner set courses by reservation, upstairs. Reviewers say the celiac-safe tempura is dinner only. The original shop at Namba 4-5-8 is closed for now; this Hōzenji Sandō shop opened in March 2026.',
    hours: { 0: d, 1: d, 2: [], 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-2-19 on the Hōzenji Sandō approach, a stone-paved lane off Dotonbori — 7 min from Namba Stn',
    cuisine: '100% buckwheat soba, hand-cut in the window · cold zaru and hot soba · prawn and vegetable tempura from a dedicated GF fryer · beef and duck soba · lunch and dinner set courses (¥3,300 / ¥4,800) · since 1929',
    website: 'https://genjisoba.co.jp/', gmaps: gm('源氏蕎麦 法善寺参道'), menu_url: MENU,
    notes: '[Soba · 100% buckwheat and gluten-free tempura on Hōzenji Sandō] A soba house founded in 1929 that moved in March 2026 into a new shop on the stone-paved Hōzenji approach; the old shop is closed for now. The noodles are hand-made from 100% buckwheat (you can watch them being cut in the front window), which makes it a celiac favourite. The menu marks gluten-free and celiac-safe dishes, and the prawn and vegetable tempura is made with buckwheat and rice flour in a dedicated gluten-free fryer. The classic order is cold zaru soba with a big wild prawn and vegetable tempura (¥2,950). There are also grated-daikon, yam and Tamba black-bean natto soba, beef and duck soba, a two-soba lunch (¥1,850), and set courses upstairs by reservation. Some find the broth fishy. You order by QR code at the table, and dinner waits can stretch at busy times.',
    chef_bio: { chef_name: '鳥倉 荘一', roles: [], origin: 'Founded 1929 (official site)', background: 'Genji Soba ran at Namba 4-5-8; in March 2026 it opened on Hōzenji Sandō, and the new-shop letter is signed 「源氏蕎麦法善寺参道本店 鳥倉 荘一」. The site describes soba-making demonstrations in Melbourne (2023) and Canberra (2024–2026) and soba sold through Takashimaya and other department stores.', philosophy: '「変わらぬ手打ちと、蕎麦本来の味を大切に、日本の文化を食べるお店として」 (new-shop letter, March 2026).', specialty: 'Hand-made 100% buckwheat soba; gluten-free tempura.',
      anecdotes: [
        { text: '"We sat at the bar, where we could watch the food being prepared, while the noodles were being hand made in the front window." — FMGF review, October 2026.', source: FM },
        { text: '"Celiac-friendly Tempura is available, which has been the only place we\'ve come across in Japan that offers Tempura that\'s fried separately to be celiac safe." — FMGF review, December 2025.', source: FM },
        { text: '"The waitress asked me if egg was ok after I order the vegan soba so I think it was just vegetarian." — FMGF review, September 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(genjisoba.co.jp): 源氏蕎麦、大阪市中央区難波1-2-19 法善寺参道、06-6633-5402、地下鉄なんば駅徒歩7分、11:30〜21:30(L.O.21:30)、14:30〜17:00は休憩、水曜不定休、1,300〜3,000円、禁煙。現在は新店舗(法善寺参道店)で営業、旧店舗(難波4-5-8)はしばらく休業(完全移転ではない)。2026年3月の新店舗のお知らせ、創業1929年、源氏蕎麦法善寺参道本店 鳥倉 荘一。メニュー: お昼の源氏御膳3,300円・夜の源氏御膳4,800円(予約制、2階席、グルテンフリー・ヴィーガンは事前リクエストで対応)、十割ざるそば1,300円、親田大根辛み十割蕎麦1,620円、とろろ十割蕎麦1,920円、丹波黒豆納豆十割蕎麦1,620円、法善寺Aランチ1,850円(十割蕎麦2種、小どんぶり、サラダ、香の物、豆乳プリン)、天然大海老と野菜の天ざる十割蕎麦2,950円(蕎麦粉と米粉の衣、グルテンフリー専用フライヤー)。FindMeGlutenFree(最近の評価101件): グルテンフリーの表示、セリアック向けの欄、専用フライヤーの報告30件、セリアック向けは夜だけという声、QRコードで注文、窓で蕎麦打ち、だしが魚っぽいとの声、ヴィーガン蕎麦で卵を確認された(2026年9月)。',
      confidence: 'high', sources: [ABOUT, MENU, INFO, FM] },
    cultural_comfort: { level: 'english', note: 'English menu descriptions, QR-code ordering; staff ask about celiac disease.' },
    safety: {
      dedicated_fryer: true,
      gf_cross_contamination: [
        { text: 'FMGF: "This establishment is NOT a dedicated gluten-free facility"; regular dipping sauces are also served — "make sure that you ask" (FMGF review, June 2026).', source: FM },
        { text: '"Their menu states that celiac safe option is only available during dinner time." — FMGF tip, November 2025; "GF tempura is only available at night" (February 2026).', source: FM },
      ],
      soy_sauce_wheat: [{ text: 'Gluten-free soy sauce and dashi dipping sauce are provided for gluten-free orders (FMGF reviews); the regular sauces are not described as wheat-free.', source: FM }],
      vegan_cross_contact: [{ text: 'A vegan soba order prompted a question about egg (September 2026), so it may be vegetarian rather than vegan; the dashi is usually fish-based.', source: FM }],
      staff_allergy_handling: [{ text: '"The staff is very well informed and asks if you have celiacs specifically since they take extra precautions." — FMGF review, October 2026.', source: FM }],
      positives: [
        { text: 'Official menu: the tempura is "Made with Buckwheat & Rice Flour" and "Fried in a Dedicated Gluten-Free Fryer".', source: MENU },
        { text: 'Soba is hand-made from 100% buckwheat (十割蕎麦).', source: MENU },
        { text: 'FMGF: dedicated gluten-free fryer reported 30 times; many celiac reviewers report no symptoms.', source: FM },
      ],
      confidence: 'high', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'high', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-2-19 法善寺参道',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site current (new Hōzenji Sandō shop since March 2026; old shop at Namba 4-5-8 closed for now); FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番19号 (go) 7m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [MENU],
    price_note: "From the official menu page, read 2026-10-26. GF flags follow the shop's own labels (100% buckwheat soba; GF tempura from a dedicated fryer); ask for the gluten-free dipping sauce.", last_checked: TODAY, items: [
      it('十割ざるそば', 'jūwari zaru soba', 'Cold 100% buckwheat soba (zaru)', '¥1,300', 'Soba', 'gf', 'ask', 'Ask for the gluten-free dipping sauce; regular sauce is also served.', 'juwari_zaru'),
      it('親田大根辛み十割蕎麦', '', '100% buckwheat soba with spicy Oyada daikon', '¥1,620', 'Soba', 'ask', 'ask', '', 'karami_daikon'),
      it('とろろ十割蕎麦', '', '100% buckwheat soba with grated yam', '¥1,920', 'Soba', 'ask', 'ask', '', 'tororo'),
      it('丹波黒豆納豆十割蕎麦', '', '100% buckwheat soba with Tamba black-bean natto', '¥1,620', 'Soba', 'ask', 'ask', '', 'kuromame_natto'),
      it('天然大海老と野菜の天ざる十割蕎麦', '', 'Cold 100% buckwheat soba with wild jumbo prawn and vegetable tempura', '¥2,950', 'Soba', 'gf', 'no', 'Official menu: buckwheat and rice-flour batter, dedicated GF fryer. Reviewers say the celiac-safe tempura is dinner only.', 'tenzaru'),
      it('身体に優しい法善寺Aランチ', '', 'Hōzenji A lunch: two 100% buckwheat sobas, small rice bowl, salad, pickles, soy-milk pudding', '¥1,850', 'Lunch', 'ask', 'ask', '', 'a_lunch'),
      it('お昼の源氏御膳', '', 'Lunch Genji gozen course (by reservation, upstairs)', '¥3,300', 'Courses', 'ask', 'ask', 'GF and vegan on advance request.', 'lunch_gozen'),
      it('夜の源氏御膳', '', 'Dinner Genji gozen course with sashimi (by reservation, upstairs)', '¥4,800', 'Courses', 'ask', 'no', 'GF and vegan on advance request.', 'dinner_gozen'),
    ] }, {
    cuisine: '窓で手打ちする十割蕎麦・冷たいざると温かい蕎麦・グルテンフリー専用フライヤーの海老と野菜の天ぷら・牛や鴨の蕎麦・昼と夜の御膳(3,300円/4,800円)・創業1929年',
    neighborhood: '難波1-2-19、道頓堀から入る石畳の法善寺参道。なんば駅から徒歩7分',
    gf_detail: '蕎麦は十割の手打ちです。メニューにはグルテンフリーの表示があり、FindMeGlutenFreeのセリアック病の客(最近の評価101件)はセリアック向けの欄もあると書いています。公式メニューによると天ぷらは蕎麦粉と米粉の衣で、グルテンフリー専用のフライヤーで揚げています。グルテンフリーの注文にはグルテンフリーのつゆや醤油を出しますが、通常のつゆも使っているので確認を。FMGFはグルテンフリー専門の店ではないと注意しています。セリアック向けの天ぷらとメニューは夜だけという声が複数あります。スタッフがセリアック病かどうか尋ねてくれるので伝え、御膳は事前に予約を。',
    vegan_detail: '御膳には「グルテンフリー・ヴィーガンは事前リクエストで対応」とあります。単品にヴィーガン蕎麦もありますが、2026年9月に注文した客が卵は大丈夫かと聞かれており、ベジタリアン止まりかもしれません。だしと卵を確認してください。',
    notes: '[蕎麦・法善寺参道の十割蕎麦とグルテンフリーの天ぷら] 1929年創業の蕎麦屋で、2026年3月に石畳の法善寺参道に新店を構えました。旧店舗はしばらく休業中。蕎麦は十割の手打ち(表の窓で蕎麦打ちが見られます)で、セリアック病の旅行者に人気です。メニューにはグルテンフリーとセリアック向けの表示があり、海老と野菜の天ぷらは蕎麦粉と米粉の衣をグルテンフリー専用のフライヤーで揚げます。定番は天然大海老と野菜の天ざる十割蕎麦(2,950円)。親田大根辛み、とろろ、丹波黒豆納豆の十割蕎麦、牛や鴨の蕎麦、十割蕎麦2種の法善寺Aランチ(1,850円)、2階で予約制の御膳も。だしが魚っぽいと感じる客も。注文は席のQRコードで、混む時間は夜の待ち時間が長くなることも。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [MENU, FM],
    why: "Own claims (genjisoba.co.jp/menu): hand-made 100% buckwheat soba; tempura 'Made with Buckwheat & Rice Flour' and 'Fried in a Dedicated Gluten-Free Fryer'; GF and vegan on advance request for set courses. Independent first-hand corroboration: FindMeGlutenFree, 101 recent ratings, 30 reports of a dedicated GF fryer, GF-marked menu with a celiac section, many celiac 'no symptoms' reports through October 2026. 'high' rather than 'dedicated': FMGF marks it NOT a dedicated facility; regular dipping sauces are in use; several reviewers say the celiac-safe tempura and menu are dinner only; most reviews predate the March 2026 move to the Hōzenji Sandō shop. Questions for the shop: is the dedicated fryer and celiac menu in place at the new shop at lunch too? Is the GF tsuyu made in separate pots?",
  });
}

// ================================================================ Naki vegan sweets
{
  const FM = 'https://www.findmeglutenfree.com/biz/naki-vegan-sweets/4595867529379840';
  const OWN = 'https://naki-vegansweets.com/';
  put({
    id: 'osaka_naki_vegan_sweets', name: 'Naki vegan sweets', category: 'BOTH',
    lat: 34.667478, lng: 135.502173, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop calls itself a specialist in vegan, gluten-free sweets: 「ヴィーガングルテンフリースイーツの専門店」. FindMeGlutenFree marks it "Reported to be dedicated gluten-free", and celiac reviewers (30 recent ratings) report no symptoms. Reviewers mention rice flour, coconut oil and almond crusts. One caveat: in January 2026 a reviewer found the oat milk for drinks labelled "may contain gluten" and switched to soy milk. Ask about the milk in drinks.',
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'Fully vegan. The shop says it uses no eggs, dairy or other animal ingredients, only selected plant ingredients (「卵・乳製品など動物性の食材を使用せずに厳選した植物性食材で作る」).',
    hours_raw: 'Not listed on the official site. An FMGF reviewer (August 2026) found it open 13:00–20:00. Check before going. About four seats; takeaway available; also sells online.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-5-5, on a side street just south of Dotonbori',
    cuisine: 'Vegan, gluten-free cakes, tarts and cookies · mango, berry, chocolate-pistachio and matcha tarts (~¥1,000) · cashew cream, almond crusts · rice-flour cookies · espresso · four seats, takeaway',
    website: OWN, gmaps: gm('Naki vegan sweets 難波'), menu_url: null,
    notes: '[Sweets · vegan and gluten-free tarts off Dotonbori] A tiny, quiet cake shop on a Namba side street with about four seats. Everything is vegan and gluten-free, and it is a celiac favourite (FMGF marks it reported dedicated gluten-free). Expect small tarts and cakes, around ¥1,000 each: mango, mixed berry cheesecake, chocolate pistachio, matcha and white chocolate, strawberry chocolate. Reviewers single out the cashew cream on a coarse almond crust, and the rice-flour and coconut-oil cookies, which one family bought to take home after being given some free. There is Italian espresso and peach cream soda. Service is gentle, once by a host in a kimono, though one 2026 diner found it unfriendly. Takeaway, and an online shop.',
    chef_bio: { chef_name: null, roles: [], origin: 'Namba 1-chōme', background: 'A vegan, gluten-free sweets specialist with an online shop (naki-vegansweets.com); no source names the owner or pastry chef.', philosophy: '「誰でも食べられる優しいお菓子」 — gentle sweets anyone can eat (official site).', specialty: 'Vegan, gluten-free tarts and cookies.',
      anecdotes: [
        { text: '"The cashew cream was especially good, paired with the coarse almond crust. Then after we finished our cake, they brought out free cookies! They had great texture (rice flour and coconut oil)." — FMGF review, July 2026.', source: FM },
        { text: '"Dedicated gluten free and vegan cafe. Everything tasted amazing - a bit expensive though (1 tart was ¥1000)… Seating is limited to four but takeout is an option." — FMGF review, September 2026.', source: FM },
      ],
      japanese_sources_summary: '公式(naki-vegansweets.com): 「誰でも食べられる優しいお菓子」、卵・乳製品など動物性の食材を使用せずに厳選した植物性食材で作るヴィーガン・グルテンフリースイーツの専門店、ケーキ・クッキー・焼き菓子、オンラインショップ。FindMeGlutenFree(最近の評価30件): 大阪市中央区難波1-5-5、080-6217-5050、グルテンフリー専門と報告、席は4つほど、持ち帰り可、タルト1個1,000円(2026年9月)、マンゴー、ミックスベリーのチーズケーキ、チョコピスタチオ、抹茶とホワイトチョコ、カシューナッツのクリームとアーモンドの生地、米粉とココナッツオイルのクッキー、イタリアのエスプレッソ、13時〜20時に営業していた(2026年8月)、着物の接客、オーツミルクに「グルテンを含む可能性」の表示があり豆乳に変えた(2026年1月)、無愛想だったとの声(2026年4月)。',
      confidence: 'medium', sources: [OWN, FM] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter shop; point at the case.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '"If ordering a drink double check what milk, as the oat milk was labeled a may contain gluten, so I ordered soy milk." — FMGF review, January 2026.', source: FM }],
      soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [],
      positives: [
        { text: 'Own description: a vegan, gluten-free sweets specialist (ヴィーガングルテンフリースイーツの専門店) using no animal ingredients.', source: OWN },
        { text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; celiac reviewers report no symptoms.', source: FM },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'medium', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-5-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; FMGF reviews from October 2026.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No menu captured; one price from a September 2026 FMGF review. All items are vegan and gluten-free per the shop.', last_checked: TODAY, items: [
      it('', '', 'Tart (mango, mixed berry, chocolate pistachio …)', '¥1,000', 'Cakes', 'gf', 'vegan', 'September 2026.', 'tart'),
      it('', '', 'Matcha and white chocolate cake', '', 'Cakes', 'gf', 'vegan', 'April 2026.', 'matcha_cake'),
      it('', '', 'Rice-flour and coconut-oil cookies', '', 'Cookies', 'gf', 'vegan', 'July 2026; sold to take away.', 'cookies'),
      it('', '', 'Espresso / drinks', '', 'Drinks', 'ask', 'vegan', 'Ask which plant milk; one oat milk was labelled may contain gluten (January 2026).', 'drinks'),
    ] }, {
    cuisine: 'ヴィーガン・グルテンフリーのケーキ、タルト、クッキー・マンゴー、ベリー、チョコピスタチオ、抹茶のタルト(約1,000円)・カシューナッツのクリーム、アーモンドの生地・米粉のクッキー・エスプレッソ・席は4つ、持ち帰り可',
    neighborhood: '難波1-5-5、道頓堀のすぐ南の路地',
    gf_detail: '店は「ヴィーガングルテンフリースイーツの専門店」としています。FindMeGlutenFreeでは「グルテンフリー専門と報告」とされ、セリアック病の客(最近の評価30件)は症状がなかったと報告しています。米粉、ココナッツオイル、アーモンドの生地との口コミも。注意点として、2026年1月に飲み物のオーツミルクに「グルテンを含む可能性」の表示があり、豆乳に変えた客がいます。飲み物のミルクは確認を。',
    vegan_detail: '完全ヴィーガン。店は「卵・乳製品など動物性の食材を使用せずに厳選した植物性食材で作る」としています。',
    notes: '[スイーツ・道頓堀裏のヴィーガン・グルテンフリーのタルト] 難波の路地にある、席が4つほどの小さく静かなケーキ店。すべてヴィーガンかつグルテンフリーで、セリアック病の旅行者に人気です(FMGFではグルテンフリー専門と報告)。小さなタルトやケーキは1個1,000円前後で、マンゴー、ミックスベリーのチーズケーキ、チョコピスタチオ、抹茶とホワイトチョコ、苺とチョコなど。粗めのアーモンドの生地にカシューナッツのクリーム、米粉とココナッツオイルのクッキーが評判で、サービスでもらったクッキーを持ち帰りに買った家族も。イタリアのエスプレッソやピーチクリームソーダも。着物での丁寧な接客という声も、2026年には無愛想だったという声も。持ち帰りとオンラインショップあり。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [OWN, FM],
    why: "Own claim (naki-vegansweets.com): 「卵・乳製品など動物性の食材を使用せずに厳選した植物性食材で作るヴィーガングルテンフリースイーツの専門店」 — a vegan, gluten-free sweets specialist. Independent first-hand corroboration: FindMeGlutenFree, 30 recent ratings, 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers through October 2026 reporting no symptoms; rice-flour cookies, almond crusts. Open questions before 'dedicated': the shop's claim is product-level, with no facility statement; a January 2026 review found drink oat milk labelled 'may contain gluten'. Ask: is every product and drink ingredient gluten-free, oats included?",
  });
}

// ================================================================ Gluten-Free Vegan OKONOMIYAKI Vim
{
  const FM = 'https://www.findmeglutenfree.com/biz/vim/6480324991516672';
  const OWN = 'http://nanbavim.biz-option.com/';
  put({
    id: 'osaka_vim_gf_vegan_okonomiyaki', name: 'Gluten-Free Vegan OKONOMIYAKI Vim', category: 'GF',
    lat: 34.667419, lng: 135.502502, cuisine_type: 'okonomiyaki',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'A gluten-free okonomiyaki restaurant. FindMeGlutenFree marks it "Reported to be dedicated gluten-free", and celiac reviewers (through October 2026) call it entirely gluten-free and safe for coeliacs, with Kirin gluten-free and organic gluten-free beer. Reported features include a dedicated gluten-free fryer and kitchen. The restaurant itself publishes nothing beyond its name, so this rests on community reports. Confirm when you book.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'Despite "Vegan" in its name, the menu also has meat and seafood: reviewers ate pork-belly okonomiyaki, grilled scallops, fried chicken and pork noodles. The vegan options include battered tofu and rice balls ("some vegan options"). Ask whether the batter, sauce and dashi for the vegan dishes are plant-based.',
    hours_raw: 'No hours published. Reviewers: opens at 17:00 (June 2026); closed Thursdays (April 2026); once closed an hour early (October 2026). About six seats. Reservation strongly advised (booking online needs a Japanese phone number); queue before opening otherwise. No children under 18 (FMGF tip, June 2026). One meal and one drink per person (May 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-3-13, up a tiny alley just off Dotonbori',
    cuisine: 'Gluten-free okonomiyaki (pork belly and vegan) · stir-fried noodles and pasta · oyster mushrooms · battered tofu · grilled scallops · fried chicken · Kirin gluten-free beer · six seats',
    website: OWN, gmaps: gm('Vim 難波 グルテンフリー お好み焼き'), menu_url: null,
    notes: '[Okonomiyaki · gluten-free okonomiyaki off Dotonbori] A tiny gluten-free okonomiyaki spot up a narrow alley off Dotonbori, with a counter downstairs and one table upstairs (about six seats). For celiac travellers it is a rare safe way to eat Osaka\'s signature dish. Reviewers order pork-belly okonomiyaki, stir-fried noodles and pasta, oyster mushrooms, tempura, battered tofu with rice balls, grilled scallops and fried chicken, with a Kirin gluten-free beer. The name says vegan, but meat and seafood are on the menu, so ask. Book ahead (online booking needs a Japanese phone number) or queue before the 5 pm opening. Several were turned away. Portions are small and prices high, one meal and one drink per person is expected, under-18s are not admitted, and it is reported closed on Thursdays. One reviewer mentions a sister restaurant around the corner.',
    chef_bio: { chef_name: null, roles: [], origin: 'Namba 1-chōme', background: 'A gluten-free okonomiyaki restaurant; the official page (nanbavim.biz-option.com) gives only its name, phone and links. One reviewer names the host-chef as Miyo.', philosophy: null, specialty: 'Gluten-free okonomiyaki.',
      anecdotes: [
        { text: '"Tiny restaurant with a counter downstairs and a single table upstairs… oyster mushrooms, stir fried pasta, and of course the okonomiyaki." — FMGF review, October 2026.', source: FM },
        { text: '"First time trying Okonomiyaki, and it was delicious! Miyo was a great host (and chef!). We had the Pork Belly Okonomiyaki, grilled scallops and fried chicken." — FMGF review, June 2026.', source: FM },
        { text: '"I had the battered tofu which is like a chicken equivalent with the rice balls." — FMGF review, March 2026.', source: FM },
      ],
      japanese_sources_summary: '公式ページ(nanbavim.biz-option.com): 「【公式】Gluten-Free Vegan OKONOMIYAKI Vim」、電話、Instagram、HappyCowへのリンクのみ。FindMeGlutenFree: 大阪市中央区難波1-3-13、06-4963-3034、グルテンフリー専門と報告。セリアック病の客の口コミ(2026年): 1階カウンターと2階に1テーブル、約6席、エリンギ、焼きパスタ、お好み焼き、豚バラのお好み焼き、ホタテ焼き、唐揚げ、揚げ豆腐とおにぎり、キリンのグルテンフリービール、予約必須(オンライン予約には日本の電話番号が必要)、17時開店で開店前から満席、木曜定休との声、1時間早く閉まった、18歳未満は入店不可、1人1品1ドリンク、量が少なく高い、近くに姉妹店、すべてベジタリアンという声と肉やシーフードがあるという声の食い違い。',
      confidence: 'medium', sources: [FM, OWN] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny and often full; overseas celiac guests are the core crowd. Booking is hard without a Japanese phone number.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Meat and seafood (pork belly, scallops, fried chicken) are cooked in the same small kitchen as the vegan dishes.', source: FM }],
      staff_allergy_handling: [],
      positives: [
        { text: 'FMGF: "Reported to be dedicated gluten-free and celiac friendly"; reported dedicated GF fryer and kitchen; celiac reviewers through October 2026.', source: FM },
        { text: '"I appreciate it being entirely gluten free and coeliac safe." — FMGF review, May 2026.', source: FM },
      ],
      confidence: 'low', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'osaka dotonbori sweep', date: TODAY, confidence: 'low', note: NOTE },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-3-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'FMGF reviews from October 2026; official page live.' },
    pin_source: `FindMeGlutenFree ${FM} point; cross-checked: GSI 大阪府大阪市中央区難波一丁目3番13号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FM],
    price_note: 'No menu or prices captured; dishes from 2026 FMGF reviews. The restaurant is reported to be entirely gluten-free.', last_checked: TODAY, items: [
      it('', '', 'Pork-belly okonomiyaki', '', 'Okonomiyaki', 'gf', 'no', 'June 2026.', 'pork_okonomiyaki'),
      it('', '', 'Stir-fried noodles / pasta', '', 'Noodles', 'gf', 'ask', 'October 2026.', 'stir_fried_noodles'),
      it('', '', 'Battered tofu with rice balls', '', 'Mains', 'gf', 'ask', 'March 2026.', 'battered_tofu'),
      it('', '', 'Grilled scallops', '', 'Grill', 'gf', 'no', 'June 2026.', 'scallops'),
      it('', '', 'Fried chicken', '', 'Mains', 'gf', 'no', 'June 2026.', 'fried_chicken'),
      it('', '', 'Kirin gluten-free beer', '', 'Drinks', 'gf', 'ask', 'June 2026.', 'gf_beer'),
    ] }, {
    cuisine: 'グルテンフリーのお好み焼き(豚バラ、ヴィーガン)・焼きそば、焼きパスタ・エリンギ・揚げ豆腐・ホタテ焼き・唐揚げ・キリンのグルテンフリービール・約6席',
    neighborhood: '難波1-3-13、道頓堀からすぐの細い路地の奥',
    gf_detail: 'グルテンフリーのお好み焼き店。FindMeGlutenFreeでは「グルテンフリー専門と報告」とされ、セリアック病の客(2026年10月まで)は、すべてグルテンフリーでセリアック病でも安全と書き、キリンのグルテンフリービールやオーガニックのグルテンフリービールも。専用フライヤーや厨房の報告があります。店自身は店名以外の情報を出しておらず、利用者の報告に基づいています。予約時に確認を。',
    vegan_detail: '店名に「Vegan」とありますが、肉や魚介もあります。豚バラのお好み焼き、ホタテ焼き、唐揚げ、豚肉の焼きそばの口コミも。ヴィーガンの選択肢は揚げ豆腐とおにぎりなど(「いくつかヴィーガンの選択肢」)。ヴィーガン料理の生地、ソース、だしが植物性か確認してください。',
    notes: '[お好み焼き・道頓堀裏のグルテンフリーのお好み焼き] 道頓堀から入った細い路地の奥にある、1階カウンターと2階に1テーブル(約6席)だけの小さなグルテンフリーのお好み焼き店。セリアック病の旅行者が大阪名物を安全に食べられる数少ない店です。豚バラのお好み焼き、焼きそばや焼きパスタ、エリンギ、天ぷら、揚げ豆腐とおにぎり、ホタテ焼き、唐揚げに、キリンのグルテンフリービール。店名にヴィーガンとありますが肉や魚介もあるので確認を。予約を(オンライン予約には日本の電話番号が必要)、または17時の開店前に並んで。断られる客も多数。量は少なめで値段は高め、1人1品1ドリンク、18歳未満は入店不可、木曜休みとの報告。近くに姉妹店があるという客も。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [FM, OWN],
    why: "Own claim: the restaurant's name and official page title, 'Gluten-Free Vegan OKONOMIYAKI Vim' (nothing more is published). Independent first-hand corroboration: FindMeGlutenFree, 'Reported to be dedicated gluten-free and celiac friendly', celiac reviewers March–October 2026 calling it entirely gluten-free and coeliac safe; reported dedicated GF fryer and kitchen; GF beer. Weaknesses: no statement from the restaurant beyond its name; the 'vegan' in the name is contradicted by meat and seafood on the menu, so the name alone is not a reliable claim. Ask: are every flour, sauce (okonomiyaki sauce is usually wheat-based), soy sauce and dashi gluten-free? Is anything with gluten ever brought into the kitchen?",
  });
}

save();
