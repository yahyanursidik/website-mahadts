export type CmsArticle = { id: string; slug: string; title: string; summary: string; body: string; category: string; coverImage: string; date: string };

function isObject(value: unknown): value is Record<string, unknown> { return Boolean(value) && typeof value === 'object' && !Array.isArray(value); }
function absoluteMedia(value: string, baseUrl: string) { return value.startsWith('/api/media') ? `${baseUrl}${value}` : value; }

export async function getCmsArticles(): Promise<CmsArticle[] | null> {
  const baseUrl = import.meta.env.CMS_API_URL?.replace(/\/$/, '');
  if (!baseUrl) return null;
  try {
    const response = await fetch(`${baseUrl}/api/content?resource=articles`);
    if (!response.ok) return null;
    const payload = await response.json() as { data?: unknown };
    if (!Array.isArray(payload.data)) return null;
    return payload.data.filter(isObject).map((item) => {
      const metadata = isObject(item.metadata) ? item.metadata : {};
      return { id: String(item.id ?? ''), slug: String(item.slug ?? ''), title: String(item.title ?? ''), summary: String(item.summary ?? ''), body: String(item.body ?? ''), category: String(metadata.category ?? 'Artikel'), coverImage: absoluteMedia(String(metadata.coverImage ?? ''), baseUrl), date: String(item.updated_at ?? new Date().toISOString()) };
    }).filter((article) => article.slug && article.title);
  } catch { return null; }
}

function escapeHtml(value: string) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
function safeUrl(value: unknown, baseUrl: string) {
  const url = absoluteMedia(String(value ?? ''), baseUrl);
  return /^(https?:\/\/|mailto:|tel:|\/)/i.test(url) ? url : '';
}

export function renderTiptapDocument(value: string) {
  const baseUrl = import.meta.env.CMS_API_URL?.replace(/\/$/, '') ?? '';
  try {
    const document = JSON.parse(value) as unknown;
    return renderNode(document, baseUrl);
  } catch { return `<p>${escapeHtml(value)}</p>`; }
}

function renderNode(value: unknown, baseUrl: string): string {
  if (!isObject(value)) return '';
  const content = Array.isArray(value.content) ? value.content.map((node) => renderNode(node, baseUrl)).join('') : '';
  const marks = Array.isArray(value.marks) ? value.marks.filter(isObject) : [];
  if (value.type === 'text') {
    let text = escapeHtml(String(value.text ?? ''));
    for (const mark of marks) {
      if (mark.type === 'bold') text = `<strong>${text}</strong>`;
      if (mark.type === 'italic') text = `<em>${text}</em>`;
      if (mark.type === 'strike') text = `<s>${text}</s>`;
      if (mark.type === 'link') { const href = safeUrl(isObject(mark.attrs) ? mark.attrs.href : '', baseUrl); if (href) text = `<a href="${escapeHtml(href)}" rel="noopener noreferrer">${text}</a>`; }
    }
    return text;
  }
  if (value.type === 'doc') return content;
  if (value.type === 'paragraph') return `<p>${content}</p>`;
  if (value.type === 'heading') { const level = isObject(value.attrs) && [2, 3].includes(Number(value.attrs.level)) ? Number(value.attrs.level) : 2; return `<h${level}>${content}</h${level}>`; }
  if (value.type === 'bulletList') return `<ul>${content}</ul>`;
  if (value.type === 'orderedList') return `<ol>${content}</ol>`;
  if (value.type === 'listItem') return `<li>${content}</li>`;
  if (value.type === 'blockquote') return `<blockquote>${content}</blockquote>`;
  if (value.type === 'hardBreak') return '<br>';
  if (value.type === 'image') { const attrs = isObject(value.attrs) ? value.attrs : {}; const src = safeUrl(attrs.src, baseUrl); return src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(String(attrs.alt ?? ''))}" loading="lazy">` : ''; }
  return content;
}
