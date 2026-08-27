export type DirectusFile = string | { id: string } | null;

export type SiteSettings = {
  spmb_url?: string | null;
  brochure_url?: string | null;
  whatsapp_url?: string | null;
};

export type PageSettings = {
  slug: string;
  status?: 'draft' | 'published';
  hero_eyebrow?: string | null;
  hero_title?: string | null;
  hero_description?: string | null;
  hero_image?: DirectusFile;
  hero_video?: DirectusFile;
  hero_overlay?: 'soft' | 'dark' | null;
  primary_cta_label?: string | null;
  primary_cta_url?: string | null;
  secondary_cta_label?: string | null;
  secondary_cta_url?: string | null;
  show_summary?: boolean | null;
  show_content?: boolean | null;
  show_cta?: boolean | null;
};

type DirectusResponse<T> = { data: T };

const directusUrl = import.meta.env.DIRECTUS_URL?.replace(/\/$/, '');
const directusToken = import.meta.env.DIRECTUS_TOKEN;

async function readDirectus<T>(path: string): Promise<T | null> {
  if (!directusUrl) return null;

  try {
    const response = await fetch(`${directusUrl}${path}`, {
      headers: directusToken ? { Authorization: `Bearer ${directusToken}` } : undefined,
    });

    if (!response.ok) return null;
    return (await response.json() as DirectusResponse<T>).data;
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return readDirectus<SiteSettings>('/items/site_settings?fields=spmb_url,brochure_url,whatsapp_url');
}

export async function getPageSettings(slug: string): Promise<PageSettings | null> {
  const params = new URLSearchParams({
    fields: 'slug,status,hero_eyebrow,hero_title,hero_description,hero_image,hero_video,hero_overlay,primary_cta_label,primary_cta_url,secondary_cta_label,secondary_cta_url,show_summary,show_content,show_cta',
    filter: JSON.stringify({ _and: [{ slug: { _eq: slug } }, { status: { _eq: 'published' } }] }),
    limit: '1',
  });
  const pages = await readDirectus<PageSettings[]>(`/items/page_settings?${params}`);
  return pages?.[0] ?? null;
}

export function directusAssetUrl(file: DirectusFile | undefined): string | undefined {
  if (!directusUrl || !file) return undefined;
  const id = typeof file === 'string' ? file : file.id;
  return id ? `${directusUrl}/assets/${encodeURIComponent(id)}` : undefined;
}
