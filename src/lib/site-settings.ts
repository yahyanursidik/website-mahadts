import pengaturanBeranda from '../content/pengaturanBeranda/data.json';
import pengaturanHalaman from '../content/pengaturanHalaman/data.json';
import pengaturanUtama from '../content/pengaturanUtama/data.json';

export type SiteLink = { label: string; href: string };
export type PublicSiteSettings = {
  branding: { siteName: string; siteShortName: string; faviconUrl: string; logoUrl: string };
  header: { announcementEnabled: boolean; announcementText: string; announcementLinkLabel: string; announcementLink: string; spmbUrl: string; brochureUrl: string };
  hero: { headline: string; lede: string; posterUrl: string; videoUrl: string; primaryLabel: string; secondaryLabel: string; contactLabel: string; contactUrl: string };
  pages: { profileHeroUrl: string; smpHeroUrl: string; smaHeroUrl: string; spmbHeroUrl: string; historyImageUrl: string };
  footer: { description: string; address: string; phone: string; email: string; whatsappUrl: string; copyrightOwner: string };
  seo: { defaultTitle: string; defaultDescription: string; ogImageUrl: string; googleMapsUrl: string };
  navigation: { main: SiteLink[]; footer: SiteLink[] };
};

export const fallbackSiteSettings: PublicSiteSettings = {
  branding: { siteName: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah', siteShortName: 'MTQ Tarbiyah Sunnah', faviconUrl: pengaturanUtama.favicon || '/favicon.svg', logoUrl: pengaturanUtama.favicon || '/favicon.svg' },
  header: { announcementEnabled: true, announcementText: 'Penerimaan murid baru sedang dibuka.', announcementLinkLabel: 'Lihat informasi SPMB', announcementLink: pengaturanUtama.linkSpmb, spmbUrl: pengaturanUtama.linkSpmb, brochureUrl: pengaturanUtama.linkBrosur },
  hero: { headline: 'Mendidik generasi Qur’ani yang teguh dan mandiri.', lede: 'Pendidikan SMP dan SMA khusus putra yang memadukan tahfizh Al-Qur’an, ilmu diniyah, bahasa Arab, akademik formal, dan pembinaan adab dalam lingkungan asrama.', posterUrl: pengaturanBeranda.slideshow?.[0] || pengaturanHalaman.heroSmp, videoUrl: '/videos/classroom-school.mp4', primaryLabel: 'Daftar SPMB', secondaryLabel: 'Lihat brosur', contactLabel: 'Hubungi admin', contactUrl: 'https://wa.me/6281210001476' },
  pages: { profileHeroUrl: pengaturanHalaman.heroProfil, smpHeroUrl: pengaturanHalaman.heroSmp, smaHeroUrl: pengaturanHalaman.heroSma, spmbHeroUrl: pengaturanHalaman.heroSpmb, historyImageUrl: pengaturanHalaman.gambarSejarahProfil },
  footer: { description: 'Mendidik generasi Qur’ani yang berakidah lurus, beradab mulia, dan mandiri.', address: 'Desa Selacau, Kampung Lembur Tengah RT.01/RW.05, Batujajar, Bandung Barat', phone: '+62 812-1000-1476', email: 'mahad@tarbiyahsunnah.com', whatsappUrl: 'https://wa.me/6281210001476', copyrightOwner: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah' },
  seo: { defaultTitle: 'MTQ Tarbiyah Sunnah', defaultDescription: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah — pendidikan SMP dan SMA Tahfizh di Bandung Barat.', ogImageUrl: pengaturanBeranda.slideshow?.[0] || pengaturanHalaman.heroSmp, googleMapsUrl: pengaturanUtama.googleMapsUrl },
  navigation: { main: [{ label: 'Beranda', href: '/' }, { label: 'Profil', href: '/profil-mahad' }, { label: 'Program SMP', href: '/program/smp' }, { label: 'Program SMA', href: '/program/sma' }, { label: 'Artikel', href: '/artikel' }, { label: 'Kontak', href: '/hubungi-kami' }], footer: [{ label: 'Profil', href: '/profil-mahad' }, { label: 'SMP', href: '/program/smp' }, { label: 'SMA', href: '/program/sma' }, { label: 'Artikel', href: '/artikel' }, { label: 'Kontak', href: '/hubungi-kami' }] },
};

function isObject(value: unknown): value is Record<string, unknown> { return Boolean(value) && typeof value === 'object' && !Array.isArray(value); }
function merge(value: unknown): PublicSiteSettings {
  if (!isObject(value)) return fallbackSiteSettings;
  const section = <Key extends keyof PublicSiteSettings>(key: Key) => isObject(value[key]) ? value[key] : {};
  const navigation = section('navigation');
  return {
    branding: { ...fallbackSiteSettings.branding, ...section('branding') }, header: { ...fallbackSiteSettings.header, ...section('header') }, hero: { ...fallbackSiteSettings.hero, ...section('hero') }, pages: { ...fallbackSiteSettings.pages, ...section('pages') }, footer: { ...fallbackSiteSettings.footer, ...section('footer') }, seo: { ...fallbackSiteSettings.seo, ...section('seo') }, navigation: { main: Array.isArray(navigation.main) ? navigation.main as SiteLink[] : fallbackSiteSettings.navigation.main, footer: Array.isArray(navigation.footer) ? navigation.footer as SiteLink[] : fallbackSiteSettings.navigation.footer },
  };
}

let settingsRequest: Promise<PublicSiteSettings> | undefined;
export function getSiteSettings() {
  if (!settingsRequest) settingsRequest = (async () => {
    const baseUrl = import.meta.env.CMS_API_URL?.replace(/\/$/, '');
    if (!baseUrl) return fallbackSiteSettings;
    try {
      const response = await fetch(`${baseUrl}/api/settings`);
      if (!response.ok) return fallbackSiteSettings;
      const payload = await response.json() as { data?: unknown };
      return merge(payload.data);
    } catch { return fallbackSiteSettings; }
  })();
  return settingsRequest;
}
