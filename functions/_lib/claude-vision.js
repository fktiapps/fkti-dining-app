/**
 * Shared Claude vision call for the menu and label scanners.
 *
 * Why Claude Sonnet 5.5: same prompt, same test menus, 2026-10-14 — Sonnet 5.5 read
 * 12/12 dishes on the hard menu every run (Mistral Medium 9/12; Mistral Large and
 * Claude Haiku 4.5 invented dishes that were not on the menu), and never answered
 * GF "safe". ~1.5¢ a scan.
 *
 * Raw HTTP, not @anthropic-ai/sdk: this Pages project has no build step (the repo root
 * IS the site), so npm packages are never installed and an SDK import fails the deploy
 * — 1c48009 did exactly that. Same approach as the Mistral call beside it.
 *
 * Returns { parsed, engine } on success, or { error, status, detail } — the caller
 * falls back to Mistral on any error, so a Claude outage degrades rather than breaks.
 */
export const CLAUDE_MODEL = 'claude-sonnet-5-5';

export async function claudeVision(env, dataUrl, prompt, maxTokens) {
  const m = /^data:(image\/(?:jpe?g|png|webp));base64,(.*)$/s.exec(dataUrl || '');
  if (!m) return { error: 'no_image' };
  const media_type = m[1] === 'image/jpg' ? 'image/jpeg' : m[1];

  const headers = {
    'content-type': 'application/json',
    'x-api-key': env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
    // If a safety classifier declines, re-run server-side on Anthropic's recommended model.
    'anthropic-beta': 'server-side-fallback-2026-07-01',
  };
  // A user-level key (sk-ant-usr-…) has to name its workspace on every request.
  if (env.ANTHROPIC_WORKSPACE_ID) headers['anthropic-workspace-id'] = env.ANTHROPIC_WORKSPACE_ID;

  let res;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers,
      body: JSON.stringify({
        model: CLAUDE_MODEL,
        max_tokens: maxTokens,
        // Reading a menu is perception, not deep reasoning: low effort held 12/12 in testing.
        output_config: { effort: 'low' },
        fallbacks: 'default',
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type, data: m[2] } },
          { type: 'text', text: prompt },
        ] }],
      }),
    });
    if (r.status === 429) return { error: 'rate_limited', status: 429 };
    if (!r.ok) return { error: 'upstream', status: r.status, detail: (await r.text()).slice(0, 300) };
    res = await r.json();
  } catch (e) {
    return { error: 'network', detail: String(e).slice(0, 300) };
  }

  if (res.stop_reason === 'refusal') return { error: 'refusal', detail: res.stop_details?.category || '' };
  const text = (res.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  // tolerant parse: strip fences, then narrow to the outermost {...}
  let clean = text.replace(/```json|```/g, '').trim();
  const a = clean.indexOf('{'), b = clean.lastIndexOf('}');
  if (a > -1 && b > a) clean = clean.slice(a, b + 1);
  try {
    return { parsed: JSON.parse(clean), engine: res.model || CLAUDE_MODEL };
  } catch {
    return { error: 'parse', detail: `stop=${res.stop_reason} len=${text.length}` };
  }
}
