/**
 * POST /api/menu-scan
 * Body: { image: "data:image/jpeg;base64,...", name, cuisine, gf_detail, vegan_detail }
 * LIVE vision call. Provider: Mistral chat completions with a Pixtral vision model.
 *
 * Reads a photo of a Japanese restaurant menu and returns, for a gluten-free diner
 * AND a vegan diner, which items look safe / to ask about / to avoid — plus
 * ready-to-show Japanese questions to ask before ordering.
 *
 * Requires secret MISTRAL_API_KEY. No KV cache (every photo is unique).
 * Returns {wired:false} if the key is missing so the app shows graceful copy.
 */

const MODEL = 'pixtral-large-latest';   // Mistral vision model; reads Japanese menus

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.MISTRAL_API_KEY) return json({ wired: false, message: 'MISTRAL_API_KEY not set on this deployment.' });

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const image = body && body.image;
  if (!image || !/^data:image\/(jpe?g|png|webp);base64,/.test(image)) return json({ error: 'no_image' }, 400);

  const name = (body.name || '').slice(0, 120);
  const cuisine = (body.cuisine || '').slice(0, 80);
  const gfd = (body.gf_detail || '').slice(0, 300);
  const vgd = (body.vegan_detail || '').slice(0, 300);

  const prompt = `You are reading a photo of a restaurant MENU in Japan for a traveler. Context — restaurant: "${name}" (${cuisine}). Known notes: GF="${gfd}" vegan="${vgd}".

The menu is likely in Japanese — transcribe and translate the dish names yourself. List each visible dish ONCE, and for that dish give BOTH a gluten-free verdict and a vegan verdict. Be CONSERVATIVE and honest — decision-support, not a guarantee; you cannot see the kitchen.

Verdict values: "safe" | "ask" | "avoid".
Gluten: udon, ramen, soba (unless 十割/100% buckwheat), tempura, tonkatsu, fried/breaded, gyoza, okonomiyaki, wheat-soy-sauce dishes, wheat-thickened curry → avoid. Plain rice, sashimi, grilled fish/meat without sauce, salad → "ask" (soy sauce/marinade). Dashi broths → "ask".
Vegan: meat, fish, seafood, egg, dairy → avoid. Dashi/broth (usually bonito/fish) and miso soup → "ask" or avoid. Plain vegetables, rice, tofu, pickles → "ask" (check sauce).

BE TERSE to fit the response: at most ~24 dishes (prioritize the ones a GF/vegan diner most needs flagged); each "note" ≤ 8 words; don't invent dishes. If the photo is too blurry/cropped, set legible=false.

Also give 4–6 "questions to ask before ordering" — each with: en (English), ja (polite Japanese to SHOW staff), rj (Hepburn romaji with macrons ō/ū to say aloud).

Respond with ONLY minified JSON (no prose, no code fences, do not truncate), keys:
{"legible":true|false,"menu_language":"...","items":[{"name":"","gf":"safe|ask|avoid","vegan":"safe|ask|avoid","note":""}],"questions":[{"en":"","ja":"","rj":""}],"caveat":"..."}`;

  const reqBody = {
    model: MODEL,
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: image },
    ] }],
    response_format: { type: 'json_object' },
    temperature: 0.1,
    max_tokens: 8000,
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
  // tolerant parse: strip fences, then narrow to the outermost {...} in case of stray prose
  let clean = String(text).replace(/```json|```/g, '').trim();
  const a = clean.indexOf('{'), b = clean.lastIndexOf('}');
  if (a > 0 || (b > -1 && b < clean.length - 1)) clean = clean.slice(a, b + 1);
  let parsed;
  try { parsed = JSON.parse(clean); }
  catch {
    return json({ wired: true, error: 'parse', finish_reason: choice && choice.finish_reason, raw_len: text.length, raw: String(text).slice(-200) }, 502);
  }
  parsed.wired = true;
  return json(parsed);
}

// CORS preflight (the app POSTs JSON cross-safe same-origin, but keep it permissive)
export async function onRequestOptions() {
  return new Response(null, { headers: cors({ 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' }) });
}

function cors(h = {}) { return { 'access-control-allow-origin': '*', ...h }; }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: cors({ 'content-type': 'application/json' }) });
}
