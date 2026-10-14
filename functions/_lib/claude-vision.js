/**
 * Shared Claude vision call for the menu and label scanners.
 *
 * Why Claude Sonnet 5.5: same prompt, same test menus, 2026-10-14 — Sonnet 5.5 read
 * 12/12 dishes on the hard menu every run (Mistral Medium 9/12; Mistral Large and
 * Claude Haiku 4.5 invented dishes that were not on the menu), and never answered
 * GF "safe". ~1.5¢ a scan.
 *
 * Returns { parsed, engine } on success, or { error, status, detail } — the caller
 * falls back to Mistral on any error, so a Claude outage degrades rather than breaks.
 */
import Anthropic from '@anthropic-ai/sdk';

export const CLAUDE_MODEL = 'claude-sonnet-5-5';

export async function claudeVision(env, dataUrl, prompt, maxTokens) {
  const m = /^data:(image\/(?:jpe?g|png|webp));base64,(.*)$/s.exec(dataUrl || '');
  if (!m) return { error: 'no_image' };
  const media_type = m[1] === 'image/jpg' ? 'image/jpeg' : m[1];

  const client = new Anthropic({
    apiKey: env.ANTHROPIC_API_KEY,
    // A user-level key (sk-ant-usr-…) has to name its workspace on every request.
    defaultHeaders: env.ANTHROPIC_WORKSPACE_ID ? { 'anthropic-workspace-id': env.ANTHROPIC_WORKSPACE_ID } : {},
    maxRetries: 1,
    timeout: 45_000,
  });

  let res;
  try {
    res = await client.beta.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: maxTokens,
      // Reading a menu is perception, not deep reasoning: low effort held 12/12 in testing.
      output_config: { effort: 'low' },
      // If a safety classifier declines, re-run server-side on Anthropic's recommended model.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      messages: [{ role: 'user', content: [
        { type: 'image', source: { type: 'base64', media_type, data: m[2] } },
        { type: 'text', text: prompt },
      ] }],
    });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return { error: 'rate_limited', status: 429 };
    if (e instanceof Anthropic.APIError) return { error: 'upstream', status: e.status, detail: String(e.message).slice(0, 300) };
    return { error: 'network', detail: String(e).slice(0, 300) };
  }

  if (res.stop_reason === 'refusal') return { error: 'refusal', detail: res.stop_details?.category || '' };
  const text = res.content.filter(b => b.type === 'text').map(b => b.text).join('');
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
