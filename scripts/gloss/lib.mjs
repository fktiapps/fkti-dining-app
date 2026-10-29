// Shared rules for the English-mode Japanese gloss (docs/ja-gloss.md).
import fs from 'node:fs';
import path from 'node:path';
import kuromoji from 'kuromoji';

// A "run" is a maximal stretch of Japanese script inside an English-mode string. Keep this
// pattern identical to JG_RUN in index.html, or the app will look up runs the build never made.
export const RUN = /[぀-ヿ㐀-鿿ｦ-ﾟ々〆「『（【][぀-ヿ㐀-鿿ｦ-ﾟ々〆　-〿！-～0-9・ー〜～]*/g;

// Fields that are Japanese by design (shown to drivers or kept as the original), or never
// shown in the English app. Matched against the dotted path with array indexes removed.
export const SKIP_FIELD = /(^|\.)(pin_source|address_ja|addr|enrich_note|existence|gf_review|ja|kana|romaji|merged_from|duplicate_aligned|chef_bio_flag|needs_owner_review|dcp|sources|source|url|website|menu_url|gmaps|id)(\.|$)/;

// The English-mode files of a city: the city file and its layers, never the .ja overlay.
export function cityFiles(city) {
  return fs.readdirSync('data').filter(f => f.endsWith('.json') && !f.startsWith('_') && !f.endsWith('.ja.json')
    && (f === `${city}.json` || f.startsWith(`${city}_`)));
}

// A string that is mostly Japanese (at least twice as many Japanese characters as Latin letters) is glossed as
// ONE unit: furigana over the whole string and a full English translation under it. Splitting
// it into runs would cut sentences wherever "100%" or a site name interrupts them.
// Japanese inside an English sentence is glossed run by run.
export function isJapaneseString(v) {
  const ja = (v.match(/[぀-ヿ㐀-鿿ｦ-ﾟ]/g) || []).length;
  const latin = (v.match(/[A-Za-z]/g) || []).length;
  // long summaries that name many sources in romaji still read as Japanese text
  return ja > 0 && (ja >= 2 * latin || (ja >= latin && v.length > 60));
}

// Calls fn(unit, wholeString, fieldPath, isWhole) for every displayed Japanese unit in a parsed
// file: the whole (trimmed) string when it is mostly Japanese, else each run.
export function eachRun(data, fn) {
  (function walk(v, p) {
    if (typeof v === 'string') {
      if (SKIP_FIELD.test(p)) return;
      if (!RUN.test(v)) { RUN.lastIndex = 0; return; }
      RUN.lastIndex = 0;
      if (isJapaneseString(v)) { if (!PRICE.test(v.trim())) fn(v.trim(), v, p, true); return; }
      for (const r of v.match(RUN)) if (HAS_JA.test(r) && !PRICE.test(r)) fn(r, v, p, false);
    } else if (Array.isArray(v)) v.forEach(x => walk(x, p));
    else if (v && typeof v === 'object') for (const k in v) walk(v[k], p ? `${p}.${k}` : k);
  })(data, '');
}

// Prices ("649円", "1,200円～", "円") are glossed by a rule in the app (→ ¥649), not the glossary.
export const PRICE = /^[約]?[0-9０-９,，.]*円[～〜~]?$/;
// A run needs a gloss only if it has kana or kanji of its own; a lone ・ or ー between Latin words does not.
const HAS_JA = /[぀-ゟァ-ヺヽ-ヿ㐀-鿿ｦ-ﾟ]/;

const kata2hira = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
export const HAS_KANJI = /[㐀-鿿々〆]/; // 〆 counts: it needs a reading (しめ)

let tokenizer = null;
export async function initTokenizer() {
  tokenizer ||= await new Promise((res, rej) =>
    kuromoji.builder({ dicPath: path.join('node_modules', 'kuromoji', 'dict') }).build((e, t) => e ? rej(e) : res(t)));
}

// Put the reading over the kanji only: 焼き/やき → [焼,や][き,'']; お造り/おつくり → [お,''][造,つく][り,''].
function okurigana(s, r) {
  let a = 0, b = 0;
  while (a < s.length && a < r.length && !HAS_KANJI.test(s[a]) && kata2hira(s[a]) === r[a]) a++;
  while (b < s.length - a && b < r.length - a && !HAS_KANJI.test(s[s.length - 1 - b]) && kata2hira(s[s.length - 1 - b]) === r[r.length - 1 - b]) b++;
  const out = [];
  if (a) out.push([s.slice(0, a), '']);
  out.push([s.slice(a, s.length - b), r.slice(a, r.length - b)]);
  if (b) out.push([s.slice(s.length - b), '']);
  return out;
}

// Reviewed readings that override kuromoji, longest first. Add a word here when the dictionary
// reads it wrong in context (米粉 is tagged as a proper noun because 米 = "America").
export const WORD_READINGS = {
  '国産米粉': 'こくさんこめこ', '米粉': 'こめこ', '米油': 'こめあぶら', '天日塩': 'てんぴじお',
  '鶏ガラ': 'とりがら', '冷製': 'れいせい', '月商': 'げっしょう', '堪能': 'たんのう', '豆板醤': 'とうばんじゃん', '埋門跡': 'うずみもんあと', '鶏肉': 'とりにく', '地鶏': 'じどり', '親鶏': 'おやどり', '令和': 'れいわ', '既に': 'すでに',
  // names whose reading a record gives (Ikkaku, Hyotei, Grill Tenpei)
  '一鶴': 'いっかく', '瓢亭': 'ひょうてい', '天平': 'てんぺい',
  // names the dictionary reads as ordinary words: leave unread ('')
  '千秋': '', '辰巳': '', '山上': '', '斎': '', '大麦粉': 'おおむぎこ', '九州': 'きゅうしゅう', '牛骨': 'ぎゅうこつ', '白砂糖': 'しろざとう', '生麩': 'なまふ', '車麩': 'くるまぶ', '日本': 'にほん', '自家製麺': 'じかせいめん', '縮れ麺': 'ちぢれめん', '細麺': 'ほそめん', '太麺': 'ふとめん', '豚骨': 'とんこつ', '処': 'どころ', '鶏白湯': 'とりぱいたん', '若鶏': 'わかどり', '練乳': 'れんにゅう', '海老': 'えび', '一汁三菜': 'いちじゅうさんさい', '五葷': 'ごくん', '串揚げ': 'くしあげ', '炭火焼': 'すみびやき', '窯焼き': 'かまやき', 'お米': 'おこめ', '焼あなご': 'やきあなご', '活〆': 'いけじめ', '〆': 'しめ', '唐揚げ': 'からあげ', '雑穀米': 'ざっこくまい', '玄米粉': 'げんまいこ', '薬膳': 'やくぜん', '小麦粉': 'こむぎこ', '小麦': 'こむぎ', '出汁': 'だし', '厚焼き': 'あつやき',
  // 乳 alone is にゅう on allergen lists (小麦・乳・卵); the compounds must come first
  '豆乳': 'とうにゅう', '牛乳': 'ぎゅうにゅう', '乳製品': 'にゅうせいひん', '乳酸菌': 'にゅうさんきん', '乳': 'にゅう',
  // Toba review (2026-10-29)
  '焙煎': 'ばいせん', '旬彩': 'しゅんさい', '明治': 'めいじ', '大正': 'たいしょう', '昭和': 'しょうわ', '平成': 'へいせい', '活魚': 'かつぎょ', '白身魚': 'しろみざかな', '御食事処': 'おしょくじどころ', 'お食事処': 'おしょくじどころ', '大あさり': 'おおあさり', '御食国': 'みけつくに', '真珠粉': 'しんじゅふん', '伊勢海老': 'いせえび', '伊勢えび': 'いせえび', '煮干し': 'にぼし', 'ごはん物': 'ごはんもの', '南館': 'みなみかん', '一膳入魂': 'いちぜんにゅうこん', '焼貝': 'やきがい', '節系': 'ぶしけい', '肝醤油': 'きもじょうゆ', '甘味': 'かんみ', '天津メン': 'てんしんめん', '天津飯': 'てんしんはん', '麻婆飯': 'まーぼーはん', '麻婆': 'まーぼー', '松阪牛': 'まつさかぎゅう', '拉麺': 'らーめん', '牛タン': 'ぎゅうたん', '三方焼': 'さんぽうやき', '三方氷': 'さんぽうごおり', '炙り刺': 'あぶりさし',
  '自家打': 'じかうち', '焙煎所': 'ばいせんじょ', '釜玉': 'かまたま', '紙・木': 'かみ・き', '帆立': 'ほたて', '開き': 'ひらき', '車海老': 'くるまえび', 'ご飯': 'ごはん', '地魚': 'じざかな', '真珠島': 'しんじゅしま', 'さわら刺': 'さわらさし', '粗濾': '',
  // place names whose reading the records give in romaji (Toba, Ise, Shima, Toshijima, Mie, Matsusaka)
  '鳥羽': 'とば', '伊勢': 'いせ', '志摩': 'しま', '答志島': 'とうしじま', '三重': 'みえ', '松阪': 'まつさか',
  // person and shop names inside passages: leave unread
  '藤原徹平': '', '西井崚人': '', '中村謙介': '', '浜口祐志': '', '御木本幸吉': '', '阿波幸': '', '味佐々': '', '樋の山': '', '里中定弘': '',
  // Nagano review (2026-10-29)
  '信州': 'しんしゅう', '長野': 'ながの', '善光寺': 'ぜんこうじ', '軽井沢': 'かるいざわ', '大門': 'だいもん', '門前': 'もんぜん', '権堂': 'ごんどう', '元善町': 'もとぜんちょう', '表参道': 'おもてさんどう', '小川村': 'おがわむら',
  '打ち粉': 'うちこ', '鶏': 'とり', '鶏卵': 'けいらん', '養鶏': 'ようけい', '野沢菜': 'のざわな', '永代': 'えいたい', '米味噌': 'こめみそ', '麩': 'ふ', '霧下': 'きりした', '鴨': 'かも', '売切': 'うりきれ', '肉刺し': 'にくさし', '丼物': 'どんぶりもの', '本枯節': 'ほんかれぶし', '淡麗': 'たんれい', '洗面所': 'せんめんじょ',
  '大塚せつ子': '', '松澤孝憲': '', '矢澤智子': '', '原康譲': '', '立川尚樹': '', '清水民蔵': '', '宮下祥次': '', '桑原倫子': '', '町田哲也': '', '戸隠': '',
  '製粉所': 'せいふんじょ', '無量寿': 'むりょうじゅ', '法飯': 'ほうはん', '焼味噌': 'やきみそ', '辛味大根': 'からみだいこん', '辛大根': 'からだいこん', 'かしわ天': 'かしわてん', '車麸': 'くるまぶ', '水・木': 'すい・もく', '梅甘露': 'うめかんろ', '七味家': 'しちみや', '京都': 'きょうと', '宗田節': 'そうだぶし', '細切り': 'ほそぎり', '信濃': 'しなの', '自家製粉': 'じかせいふん', '中力粉': 'ちゅうりきこ', '一汁八菜': 'いちじゅうはっさい', '肉厚': 'にくあつ', '大豆油': 'だいずゆ', '丸なす': 'まるなす', '香草': 'こうそう', '辛さ': 'からさ', '日用品': 'にちようひん', '地粉': 'じごな', '宇治': 'うじ',
  '春陽': '', '井崎才蔵': '', '藤澤浩一': '', '瀬下努': '', '小川真宏': '', '若麻績妙子': '', '君島登茂樹': '', '石坂康': '', '星博仁': '', '高野恵二': '', '望月仁美': '', '鈴木健太': '', '山田大輔': '', '平野 仁': '',
  '木鶏': 'もっけい', '美ヶ原': 'うつくしがはら', '挽き立て': 'ひきたて', '茹で立て': 'ゆでたて', '安曇野': 'あづみの', '月・火・金': 'げつ・か・きん', '旬花': 'しゅんか', '信大発': 'しんだいはつ', '沖縄': 'おきなわ', '大町': 'おおまち', '松本': 'まつもと', '中町': 'なかまち', '自社': 'じしゃ', '重篤': 'じゅうとく', '麺匠': 'めんしょう', '川の幸': 'かわのさち', '湯田中': 'ゆだなか', '北信五岳': 'ほくしんごがく', '穂高': 'ほたか', '無化調': 'むかちょう', 'こめ油': 'こめあぶら', '白馬': 'はくば',
  '高野圭司': '', '永岡祐二': '', '永岡佳奈': '', '清水明': '', '河本天志': '', '渡邉保之': '', '中村義信': '', '紗央里': '', '美佐里': '', '井上格': '', '小宮山敦': '', '松岡いづみ': '', '山田律子': '', '岩田俊介': '', '幸夫': '', '真武咲弥': '', '民藏': '', '木島平': '',
  '四柱神社': 'よはしらじんじゃ', '中太': 'ちゅうぶと', '酒菜': 'さかな', '檸檬': 'れもん', '全粒粉': 'ぜんりゅうふん', '長葱': 'ながねぎ', '小豆': 'あずき', '米麹': 'こめこうじ', '夏限定': 'なつげんてい', '進肴': 'すすめざかな', '台の物': 'だいのもの', '中盛': 'ちゅうもり', '大盛': 'おおもり', 'プレミアム牛': 'ぷれみあむぎゅう',
  '三宅': '', '七二会': '', '大宮康亘': '', '佐蔵': '', '政海': '', '真澄': '', '佐久の花': '', '水尾': '', '七笑': '',
  '甕': 'かめ', '淵之坊': 'ふちのぼう', '正月行事': 'しょうがつぎょうじ', '小菅亭': 'こすげてい', '粗挽き': 'あらびき', '善光寺下': 'ぜんこうじした', '長野県生': 'ながのけんうまれ', '年生・': 'ねんうまれ・', '三毛猫': 'みけねこ', '高山村': 'たかやまむら', '一味': 'いちみ', '看板犬': 'かんばんいぬ', '夜中': 'よなか', '三輪': 'みわ', '遺伝子組換': 'いでんしくみかえ', '夜営業': 'よるえいぎょう', '水休': 'すいやすみ', '酒肴': 'しゅこう', '木金土': 'もくきんど',
  '若麻績享則': '', '兄部坊': '', '七郎右衛門': '', '斎時記': '', '秋山白巌': '', '井筒屋鐵治': '', '石川浩幸': '', '片倉康雄': '', '伊藤博武': '', '眞倉博之': '', '志田重左衛門': '', '藤井大朝': '',
  // Nara review (2026-10-29)
  '奈良': 'なら', '奈良町': 'ならまち', '春日': 'かすが', '大和': 'やまと', '大和牛': 'やまとぎゅう', '大和肉鶏': 'やまとにくどり', '吉野': 'よしの', '本葛': 'ほんくず', '葛': 'くず', '近鉄': 'きんてつ', '鹿鳴': 'ろくめい', '古都華': 'ことか', '百夜月': 'ももよづき', '荷茶屋': 'にないぢゃや', '天迦久': 'あめのかく', '船橋': 'ふなはし', '東向': 'ひがしむき', '小西町': 'こにしちょう', '四季彩菜': 'しきさいさい', '三条': 'さんじょう', '印食': 'いんしょく', 'たかま家': 'たかまや',
  '米飴': 'こめあめ', '上生菓子': 'じょうなまがし', '素菜': 'そさい', '医食同源': 'いしょくどうげん', '温前菜': 'おんぜんさい', '御菓子司': 'おかしつかさ', '擂茶': 'れいちゃ', '水餃子': 'すいぎょうざ', '肉物': 'にくもの', '小上がり': 'こあがり', '町中華': 'まちちゅうか', '本生': 'ほんなま', '千壽': 'せんじゅ', '上ッ道': 'かみつみち', '大佛': 'だいぶつ', '大山どり': 'だいせんどり', '長屋': 'ながや',
  '村上義廣': '', '転害坊': '', '轉害坊': '', '白井祥雅': '', '丸内聡志': '', '喜多誠一郎': '', '村上力': '', '井田浩司': '', '石村由起子': '', '下田真弘': '', '中村一雄': '', '本間寛紹': '', '岩崎能久': '', '大西正人': '', '鶴野祐司': '', '日髙史隆': '', '小國真以': '', '三和子': '', '陽介': '',
  '七福': 'しちふく', '飯物': 'めしもの', '暦': 'こよみ', '碾茶': 'てんちゃ', '喜菜亭': 'きなてい', '萬御菓子誂處': 'よろずおんかしあつらえどころ', '樫舎': 'かしや', '寧楽': 'なら', '天極堂': 'てんぎょくどう', '豆腐庵': 'とうふあん', '奈良公園': 'ならこうえん', '喫茶南風': 'きっさなんぷう', '吟松': 'ぎんしょう', '京鴨': 'きょうがも', '招福庵': 'しょうふくあん', '茶論': 'さろん', '有精卵': 'ゆうせいらん', '東大寺': 'とうだいじ', '重乃井': 'しげのい', '中谷堂': 'なかたにどう', '中谷': 'なかたに', '淹れ': 'いれ', '新奈': 'にいな', '薬食処': 'やくしょくどころ', '土佐': 'とさ', '柚のす': 'ゆのす', '未完の美': 'みかんのび', '杉ヶ町': 'すぎがちょう', '維新蔵': 'いしんぐら', '濃蜜': 'のうみつ', '江戸川': 'えどがわ', '十津川': 'とつかわ', '飛天': 'ひてん', '寧奈': 'ねいな', '餅飯殿': 'もちいどの', '優月': 'ゆづき', '滴翠': 'てきすい', '祥瑞': 'しょんずい', '高畑': 'たかばたけ',
  '三浦雅之': '', '新子大輔': '', '平井薫': '', '山口雅可': '', '井岡美保': '', '井岡': '', '美保': '', '喜多和夫': '', '村上三和子': '', '中西与三郎': '', '津保井勇': '', '伊豫正純': '', '森田三和': '', '中森千賀子': '', '北口優衣': '', '上村政雄': '', '葉風泰夢': '', '夢風': '', '清澄の村': '',
  '菓匠': 'かしょう', '古代瓦': 'こだいがわら', '一穂二穂': 'いっぽにほ', '国産牛': 'こくさんぎゅう', '大阪': 'おおさか', '谷町': 'たにまち', '薬食同源': 'やくしょくどうげん', '大盛り': 'おおもり', '中盛り': 'ちゅうもり', '暖暖': 'のんのん', '飛鳥': 'あすか', '大仏焼': 'だいぶつやき', '年以上': 'ねんいじょう', '海の幸': 'うみのさち', '北海道': 'ほっかいどう', '月ヶ瀬': 'つきがせ', '魚万': 'うおまん', '吉田山': 'よしだやま', '中国': 'ちゅうごく', '猪肉': 'いのししにく', '油長': 'ゆちょう', '一条': 'いちじょう', '神奈寐': 'かむなび', '野菜盛': 'やさいもり', '元興寺': 'がんごうじ', '食育師': 'しょくいくし', '香音': 'かのん', '牛すじ': 'ぎゅうすじ', '出雲': 'いずも', '新大宮': 'しんおおみや', '世世': 'ぜぜ', '陰陽五行': 'いんようごぎょう', '大和橘': 'やまとたちばな', '瀋陽': 'しんよう', '酢鶏': 'すどり', '二十四節気': 'にじゅうしせっき', '四条大路': 'しじょうおおじ', '素味': 'そみ',
  '明星剛志': '', '角振町': '', '近東由紀子': '', '川端広樹': '', '元林院': '', '今御門町': '', '吉良': '', '慎一郎': '', '小川又兵衛': '', '藤岡知香': '', '俵谷顕': '', '早野晶恵': '', '松宮はなこ': '', '人見修司': '', '野澤明大': '', '井田弘': '', '千壽庵吉宗': '',
  '茨城': 'いばらき', '常陸': 'ひたち', '咖喱': 'かれー', '祇園': 'ぎおん', '明石': 'あかし', '卑弥呼': 'ひみこ', '一口': 'ひとくち', '豆蔵': 'まめくら', '和総菜': 'わそうざい', '南郷': 'なんごう', '衣掛茶屋': 'きぬがけぢゃや', '転害門': 'てがいもん', '萬勝堂': 'まんしょうどう', '京終': 'きょうばて', '和廣飯店': 'わこうはんてん', '花椒': 'ほあじゃお', '一途': 'いちず', '牛まぶし': 'ぎゅうまぶし', '近江牛': 'おうみぎゅう', '冷燻': 'れいくん', '元喜神': 'げんきしん', '春日大社': 'かすがたいしゃ', '鹿音': 'かおん', '桜座': 'おうざ', '下三条': 'しもさんじょう', '板焚屋': 'いただきや', '和が家': 'わがや', '水蕎麦': 'みずそば', '紀寺': 'きでら', '二条大路南': 'にじょうおおじみなみ', '不耐症': 'ふたいしょう', '西大寺': 'さいだいじ', '赤鶏': 'あかどり', '登美ヶ丘': 'とみがおか', '大通り': 'おおどおり', '生駒': 'いこま', '生米': 'なまごめ', '鴻ノ池': 'こうのいけ', '高の原': 'たかのはら', '高野豆腐': 'こうやどうふ', '醤油漬': 'しょうゆづけ', '和定食': 'わていしょく', '岩塩焼き': 'がんえんやき',
  '紫舟': '', '紺木': '', '邦廣': '', '坂本節夫': '', '山地淳一': '', '森杉健一': '', '境祐希': '', '廣岡夏主': '', '奈槻': '', '亮太郎': '', '奥谷美樹': '', '宏之': '', '豊澤': '',
  '素揚げ': 'すあげ', '茄子': 'なす', '身代わり申': 'みがわりざる', '吉野晒': 'よしのざらし', '大海人': 'おおあま', '入り口': 'いりぐち', '選りすぐり': 'よりすぐり', '濃茶': 'こいちゃ', '辛く': 'からく', '平城': 'へいじょう', '曲水の宴': 'きょくすいのえん', '和食器': 'わしょっき', '三国時代': 'さんごくじだい',
  '修司と妻・孝': '', '修司': '', '望月通陽': '', '中村好文': '', '浦辻': '', '真味有心': '', '實忠': '', '良辧': '', '田中徳松': '', '武田香織': '', '中林大樹': '', '岡部綾子': '', '杉森太郎': '', '福本': '', '山本哲也': '',
};
const WORDS_RE = new RegExp(Object.keys(WORD_READINGS).sort((a, b) => b.length - a.length).join('|'), 'g');
// After a number: 9月 = がつ, 28日 = にち, 2025年 = ねん, 3時 = じ (kuromoji splits the digits off).
const COUNTER = { '月': 'がつ', '日': 'にち', '年': 'ねん', '時': 'じ' };

// furi: [[surface, reading], …]. Reading '' where none is needed (kana, punctuation) and —
// per Greg's rule (2026-10-29, "only when sourced") — where kuromoji tags the token as a
// proper noun or does not know it: shop, person and place names often have several
// readings, so a dictionary guess would be a guessed reading. `needs` lists those tokens.
export function furiOf(text) {
  if (!tokenizer) throw new Error('call initTokenizer() first');
  const furi = [], needs = [];
  // split out the reviewed words first, tokenize only what lies between them
  const parts = []; let last = 0, m;
  WORDS_RE.lastIndex = 0;
  while ((m = WORDS_RE.exec(text))) { if (m.index > last) parts.push([text.slice(last, m.index), null]); parts.push([m[0], WORD_READINGS[m[0]]]); last = m.index + m[0].length; }
  if (last < text.length) parts.push([text.slice(last), null]);
  const tokens = [];
  for (const [chunk, reading] of parts) {
    if (reading !== null) tokens.push({ surface_form: chunk, reading, fixed: true });
    else tokens.push(...tokenizer.tokenize(chunk));
  }
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i], s = t.surface_form;
    if (!HAS_KANJI.test(s)) { furi.push([s, '']); continue; }
    if (t.fixed) { furi.push(...(t.reading ? okurigana(s, t.reading) : [[s, '']])); continue; }
    if (COUNTER[s] && i && /[0-9０-９]$/.test(tokens[i - 1].surface_form)) { furi.push([s, COUNTER[s]]); continue; }
    // 年 before a number (年15回, a run that starts 年6月 after "2026") is ねん, not とし
    if (s === '年' && /^[0-9０-９]/.test(tokens[i + 1]?.surface_form || '')) { furi.push([s, 'ねん']); continue; }
    if (t.pos_detail_1 === '固有名詞' || t.word_type === 'UNKNOWN' || !t.reading || t.reading === '*') { furi.push([s, '']); needs.push(s); continue; }
    // a suffix on an unread name (姫路|市, 柊|店) stays unread too: half a reading reads as a mistake
    if (t.pos_detail_1 === '接尾' && i && needs.includes(tokens[i - 1].surface_form)) { furi.push([s, '']); continue; }
    furi.push(...okurigana(s, kata2hira(t.reading)));
  }
  const out = []; // merge neighbouring unread segments so the app emits fewer nodes
  for (const [s, r] of furi) { const last = out[out.length - 1]; if (last && !r && !last[1]) last[0] += s; else out.push([s, r]); }
  return { furi: out, needs };
}

export const GLOSS_SRC = 'data/gloss/en.json';   // hand-reviewed: run → { en, furi?, name? }

export const COVERED = 'data/gloss/covered.json'; // cities whose every run must be glossed (lint)
export const readJson = (f, d) => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : d;
