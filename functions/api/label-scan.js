/**
 * POST /api/label-scan
 * Body: { image: "data:image/jpeg;base64,..." }
 * Reads a photo of a Japanese PACKAGED-FOOD ingredient/allergen label (原材料名 / アレルギー表示)
 * and returns a translated ingredient list + gluten & animal (vegan) verdicts for a celiac/vegan traveler.
 * Requires secret MISTRAL_API_KEY. Returns {wired:false} if missing.
 */
const MODEL = 'pixtral-large-latest';

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.MISTRAL_API_KEY) return json({ wired: false, message: 'MISTRAL_API_KEY not set on this deployment.' });

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const image = body && body.image;
  if (!image || !/^data:image\/(jpe?g|png|webp);base64,/.test(image)) return json({ error: 'no_image' }, 400);

  const prompt = `You are reading a photo of a JAPANESE PACKAGED-FOOD label for a traveler who is GLUTEN-FREE (celiac) and/or VEGAN. Focus on the ingredients panel (原材料名), the additives (添加物), and the allergen statement (アレルギー表示 / 「一部に〜を含む」). Transcribe and translate it yourself. Be CONSERVATIVE and honest — decision-support, not a guarantee.

GLUTEN flags (→ contains): 小麦 / 小麦粉 (wheat), 大麦 (barley), ライ麦 (rye), 麦芽 (malt), グルテン, 醤油/しょうゆ (soy sauce — normally wheat), 麩, パン粉, 麺. If none seen but soy sauce/dashi/uncertain processing → "unclear".
ANIMAL flags (not vegan): 肉/豚/鶏/牛/ハム/ベーコン, 魚/魚介/えび/かに/いか, かつお・鰹・かつおぶし・bonito, 煮干し, だし (usually fish), 卵/たまご (egg), 乳/牛乳/バター/チーズ/脱脂粉乳 (dairy), ゼラチン (gelatin), はちみつ (honey), 動物性. Plant-only (野菜/米/大豆/植物油/砂糖/塩) → vegan-ok.

Read the mandatory/【含む】 allergen list if present (Japan's 8: 小麦 wheat, 卵 egg, 乳 milk, えび shrimp, かに crab, そば buckwheat, 落花生 peanut, くるみ walnut — plus any others shown).

Respond with ONLY minified JSON (no prose, no code fences), keys:
{"legible":true|false,"product":"name if visible else \\"\\"","ingredients":[{"ja":"","en":"","flag":"gluten|animal|additive|ok"}],"gluten":{"status":"contains|likely|unclear|free","note":"≤14 words"},"vegan":{"status":"animal|likely|unclear|vegan","note":"≤14 words"},"allergens":["wheat","egg",...],"caveat":"≤16 words"}
List at most ~20 ingredients (the ones that matter most for the two diets). If the label is too blurry/cropped to read, set legible=false.`;

  const reqBody = {
    model: MODEL,
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: image },
    ] }],
    response_format: { type: 'json_object' },
    temperature: 0.1,
    max_tokens: 4000,
  };

  let data;
  try {
    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': 'Bearer ' + env.MISTRAL_API_KEY },
      body: JSON.stringify(reqBody),
    });
    if (!r.ok) {
      if (r.status === 429) {
        const retryAfter = Math.max(30, parseInt(r.headers.get('Retry-After') || '30', 10));
        return json({ wired: true, error: 'rate_limited', retry_after: retryAfter }, 429);
      }
      return json({ wired: true, error: 'upstream', status: r.status, detail: (await r.text()).slice(0, 300) }, 502);
    }
    data = await r.json();
  } catch (e) {
    return json({ wired: true, error: 'network', detail: String(e) }, 502);
  }

  const choice = data && data.choices && data.choices[0];
  const text = (choice && choice.message && choice.message.content) || '';
  let clean = String(text).replace(/```json|```/g, '').trim();
  const a = clean.indexOf('{'), b = clean.lastIndexOf('}');
  if (a > 0 || (b > -1 && b < clean.length - 1)) clean = clean.slice(a, b + 1);
  let parsed;
  try { parsed = JSON.parse(clean); }
  catch { return json({ wired: true, error: 'parse', finish_reason: choice && choice.finish_reason, raw: String(text).slice(-200) }, 502); }
  parsed.wired = true;
  return json(parsed);
}

export async function onRequestOptions() {
  return new Response(null, { headers: cors({ 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' }) });
}
function cors(h = {}) { return { 'access-control-allow-origin': '*', ...h }; }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: cors({ 'content-type': 'application/json' }) });
}
