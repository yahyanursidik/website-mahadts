import pengaturanBeranda from '../content/pengaturanBeranda/data.json';
import pengaturanHalaman from '../content/pengaturanHalaman/data.json';
import pengaturanUtama from '../content/pengaturanUtama/data.json';

export type SiteLink = { label: string; href: string };
export type PageContent = {
  profile: { heroTitle: string; heroLede: string; historyTitle: string; historyBody: string; visionTitle: string; visionText: string; smpMissions: string; smaMissions: string; leadership: string };
  smp: { heroTitle: string; heroLede: string; curriculumTitle: string; curriculumLede: string; curriculum: string; graduateTitle: string; graduateText: string; outcomes: string; ctaTitle: string; ctaText: string };
  sma: { eyebrow: string; heroTitle: string; heroLede: string; targetTitle: string; targetLede: string; targets: string; focusEyebrow: string; focusTitle: string; focusText: string; focusItems: string; graduateTitle: string; graduateItems: string; ctaTitle: string };
  spmb: { eyebrow: string; heroTitle: string; heroLede: string; statusText: string; flowTitle: string; flowLede: string; steps: string; helpEyebrow: string; helpTitle: string; helpText: string };
  contact: { eyebrow: string; heroTitle: string; heroLede: string; directoryEyebrow: string; directoryTitle: string; directoryText: string; visitHours: string; visitHelp: string; mapTitle: string };
  articles: { eyebrow: string; title: string; lede: string; emptyText: string };
};
export type PublicSiteSettings = {
  branding: { siteName: string; siteShortName: string; faviconUrl: string; logoUrl: string };
  header: { announcementEnabled: boolean; announcementText: string; announcementLinkLabel: string; announcementLink: string; spmbUrl: string; brochureUrl: string };
  hero: { headline: string; lede: string; posterUrl: string; videoUrl: string; primaryLabel: string; secondaryLabel: string; contactLabel: string; contactUrl: string };
  pages: { profileHeroUrl: string; smpHeroUrl: string; smaHeroUrl: string; spmbHeroUrl: string; historyImageUrl: string };
  footer: { description: string; address: string; phone: string; email: string; whatsappUrl: string; copyrightOwner: string };
  seo: { defaultTitle: string; defaultDescription: string; ogImageUrl: string; googleMapsUrl: string };
  navigation: { main: SiteLink[]; footer: SiteLink[] };
  content: PageContent;
};

export const fallbackSiteSettings: PublicSiteSettings = {
  branding: { siteName: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah', siteShortName: 'MTQ Tarbiyah Sunnah', faviconUrl: pengaturanUtama.favicon || '/favicon.svg', logoUrl: pengaturanUtama.favicon || '/favicon.svg' },
  header: { announcementEnabled: true, announcementText: 'Penerimaan murid baru sedang dibuka.', announcementLinkLabel: 'Lihat informasi SPMB', announcementLink: pengaturanUtama.linkSpmb, spmbUrl: pengaturanUtama.linkSpmb, brochureUrl: pengaturanUtama.linkBrosur },
  hero: { headline: 'Mendidik generasi Qur’ani yang teguh dan mandiri.', lede: 'Pendidikan SMP dan SMA khusus putra yang memadukan tahfizh Al-Qur’an, ilmu diniyah, bahasa Arab, akademik formal, dan pembinaan adab dalam lingkungan asrama.', posterUrl: pengaturanBeranda.slideshow?.[0] || pengaturanHalaman.heroSmp, videoUrl: '/videos/classroom-school.mp4', primaryLabel: 'Daftar SPMB', secondaryLabel: 'Lihat brosur', contactLabel: 'Hubungi admin', contactUrl: 'https://wa.me/6281210001476' },
  pages: { profileHeroUrl: pengaturanHalaman.heroProfil, smpHeroUrl: pengaturanHalaman.heroSmp, smaHeroUrl: pengaturanHalaman.heroSma, spmbHeroUrl: pengaturanHalaman.heroSpmb, historyImageUrl: pengaturanHalaman.gambarSejarahProfil },
  footer: { description: 'Mendidik generasi Qur’ani yang berakidah lurus, beradab mulia, dan mandiri.', address: 'Desa Selacau, Kampung Lembur Tengah RT.01/RW.05, Batujajar, Bandung Barat', phone: '+62 812-1000-1476', email: 'mahad@tarbiyahsunnah.com', whatsappUrl: 'https://wa.me/6281210001476', copyrightOwner: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah' },
  seo: { defaultTitle: 'MTQ Tarbiyah Sunnah', defaultDescription: 'Ma’had Tahfizhul Qur’an Tarbiyah Sunnah — pendidikan SMP dan SMA Tahfizh di Bandung Barat.', ogImageUrl: pengaturanBeranda.slideshow?.[0] || pengaturanHalaman.heroSmp, googleMapsUrl: pengaturanUtama.googleMapsUrl },
  navigation: { main: [{ label: 'Beranda', href: '/' }, { label: 'Profil', href: '/profil-mahad' }, { label: 'Program SMP', href: '/program/smp' }, { label: 'Program SMA', href: '/program/sma' }, { label: 'Artikel', href: '/artikel' }, { label: 'Kontak', href: '/hubungi-kami' }], footer: [{ label: 'Profil', href: '/profil-mahad' }, { label: 'SMP', href: '/program/smp' }, { label: 'SMA', href: '/program/sma' }, { label: 'Artikel', href: '/artikel' }, { label: 'Kontak', href: '/hubungi-kami' }] },
  content: {
    profile: { heroTitle: 'Berakar pada Sunnah, tumbuh melalui ilmu.', heroLede: 'MTQ Tarbiyah Sunnah memadukan tradisi keilmuan Islam, tahfizh Al-Qur’an, pendidikan formal, dan pembinaan kehidupan berasrama.', historyTitle: 'Dari kaderisasi da’i menuju pendidikan berjenjang.', historyBody: 'Di bawah naungan Yayasan Tarbiyah Sunnah Bandung, Ma’had hadir untuk menghidupkan pendidikan Al-Qur’an melalui tahfizh, tajwid, talaqqi, dan pembinaan adab terhadap kalamullah.\n\nMa’had ini berkembang dari Tadribut Du’at, program kaderisasi yang menyiapkan para da’i dengan hafalan Al-Qur’an, dasar ilmu syar’i, bahasa Arab, adab, dan kesiapan berdakwah.\n\nSemangat tersebut kini diteruskan dalam pendidikan SMP dan SMA khusus putra, lengkap dengan pendidikan umum dan kehidupan asrama.', visionTitle: 'Visi yang menjaga arah.', visionText: '“Menjadi lembaga pendidikan Islam yang unggul dalam mencetak penghafal Al-Qur’an yang berakidah Ahlussunnah wal Jamaah, berakhlak mulia, mampu berbahasa Arab, berilmu, dan mandiri.”', smpMissions: 'Menanamkan akidah Ahlussunnah wal Jamaah serta membimbing adab dan akhlak Islami.\nMembimbing santri menghafal Al-Qur’an dengan target 20 juz.\nMemperkenalkan keterampilan bahasa Arab dan dasar-dasar ilmu syar’i.\nMemberikan pengetahuan umum serta membina disiplin dan tanggung jawab di asrama.', smaMissions: 'Menguatkan akidah, adab, akhlak Islami, dan pemahaman ilmu syar’i.\nMembimbing santri menghafal Al-Qur’an dengan target tambahan 10 juz.\nMeningkatkan kemampuan bahasa Arab serta kesiapan menjadi imam dan khatib.\nMembina kedewasaan, kemandirian, dan kesiapan studi ke jenjang berikutnya.', leadership: 'Ustadz Abu Haidar As-Sundawy | Pembina\nUstadz Mochammad Hilman Al Fiqhy, M.A. | Ketua Bidang Pendidikan\nUstadz Haidar Askarulqohar, Lc. | Mudir' },
    smp: { heroTitle: 'SMP Tahfizh untuk pondasi yang kokoh.', heroLede: 'Tahfizh Al-Qur’an intensif, dirosah islamiyah, bahasa Arab, dan pendidikan akademik formal dalam pembinaan asrama.', curriculumTitle: 'Kurikulum yang saling menguatkan.', curriculumLede: 'Ilmu syar’i dan akademik dipelajari sebagai satu bekal pendidikan santri.', curriculum: 'Tahfizh Al-Qur’an | Target hafalan mutqin minimal 20 juz melalui ziyadah dan muraja’ah yang terstruktur.\nDirosah Islamiyah | Aqidah, fiqih, sirah, dan adab berlandaskan pemahaman manhaj salafus shalih.\nBahasa Arab | Nahwu, shorof, dan muhadatsah sebagai dasar memahami literatur Islam.\nPendidikan Akademik | Kurikulum nasional untuk membekali santri melanjutkan pendidikan ke jenjang berikutnya.', graduateTitle: 'Profil lulusan SMP', graduateText: 'Lulusan disiapkan agar kuat dalam hafalan, lurus dalam akidah, memahami bahasa Arab dasar, dan siap melanjutkan pendidikan.', outcomes: 'Hafal 20 juz | Bacaan tartil dan mutqin sesuai kaidah tajwid.\nBerakidah lurus | Pemahaman agama sesuai manhaj salaful ummah.\nBahasa Arab dasar | Mampu memahami kaidah dan literatur syar’i dasar.\nIjazah formal SMP | Ijazah kelulusan yang diakui negara.', ctaTitle: 'Mulai dari informasi yang jelas.', ctaText: 'Pelajari alur pendaftaran, berkas, dan tahapan seleksi santri baru.' },
    sma: { eyebrow: 'Pendidikan menengah atas', heroTitle: 'SMA Tahfizh', heroLede: 'Membentuk pemuda Qur’ani yang matang dalam ilmu, fasih berbahasa Arab, dan siap menjadi teladan di tengah masyarakat.', targetTitle: 'Tiga bekal yang bertumbuh bersama', targetLede: 'Kurikulum dirancang agar hafalan, bahasa, dan pemahaman agama tidak berjalan sendiri-sendiri.', targets: 'Hafalan 10 juz | Hafalan dibangun secara mutqin—kuat, lancar, dan disertai upaya memahami makna ayat.\nBahasa Arab aktif | Muhadatsah, qira’ah, dan kitabah menjadi alat untuk mengakses literatur keislaman secara mandiri.\nIlmu syar’i mendalam | Aqidah, fikih, dan sirah dipelajari sebagai bekal bersikap dan beribadah dalam kehidupan nyata.', focusEyebrow: 'Program unggulan', focusTitle: 'Kaderisasi imam dan khatib', focusText: 'Santri dilatih menyampaikan kebaikan dengan hikmah dan hadir sebagai pribadi yang bermanfaat bagi lingkungannya.', focusItems: 'Keberanian dan retorika dakwah yang santun.\nPenguasaan fikih ibadah praktis kemasyarakatan.\nPraktik menjadi imam rawatib dan khatib Jumat.', graduateTitle: 'Siap melanjutkan perjalanan', graduateItems: 'Siap melanjutkan studi dengan bekal akademik dan hafalan Al-Qur’an.\nMampu memahami dasar agama dan teks syar’i secara lebih mandiri.\nMenunjukkan adab, kemandirian, dan tanggung jawab kepada diri serta umat.', ctaTitle: 'Kenali proses penerimaan santri baru.' },
    spmb: { eyebrow: 'Penerimaan murid baru', heroTitle: 'Satu alur yang jelas untuk memulai.', heroLede: 'Kenali tahapan pendaftaran Ma’had Tahfizhul Qur’an Tarbiyah Sunnah, lalu konsultasikan kebutuhan calon santri bersama admin.', statusText: 'Informasi pendaftaran tersedia', flowTitle: 'Tujuh tahap, dari informasi hingga daftar ulang.', flowLede: 'Urutan ini membantu keluarga menyiapkan setiap tahap tanpa melewatkan dokumen atau agenda penting.', steps: 'Informasi | Pelajari brosur, pilihan program, dan persyaratan pendaftaran.\nFormulir online | Lengkapi data calon santri melalui formulir resmi.\nBerkas | Siapkan dan unggah dokumen persyaratan yang diminta.\nSeleksi | Ikuti tes akademik serta tes kepesantrenan sesuai jadwal.\nWawancara | Calon santri dan orang tua mengikuti sesi wawancara.\nPengumuman | Hasil seleksi disampaikan melalui kanal resmi Ma’had.\nDaftar ulang | Selesaikan administrasi untuk mengamankan tempat belajar.', helpEyebrow: 'Butuh bantuan?', helpTitle: 'Pastikan informasi sebelum mengirim berkas.', helpText: 'Admin siap membantu menjelaskan persyaratan, program, serta jadwal yang berlaku.' },
    contact: { eyebrow: 'Hubungi Ma’had', heroTitle: 'Percakapan yang baik dimulai dari informasi yang jelas.', heroLede: 'Tanyakan program, proses SPMB, atau rencana kunjungan. Admin kami siap membantu melalui WhatsApp dan email.', directoryEyebrow: 'Direktori', directoryTitle: 'Pilih kanal yang paling nyaman.', directoryText: 'Untuk kunjungan, mohon lakukan konfirmasi paling lambat satu hari sebelum kedatangan.', visitHours: 'Senin–Sabtu, 08.00–15.00 WIB', visitHelp: 'Konfirmasi minimal H-1 sebelum kedatangan.', mapTitle: 'Temukan Ma’had di Batujajar.' },
    articles: { eyebrow: 'Catatan Ma’had', title: 'Artikel & wawasan', lede: 'Tulisan tentang tahfizh, adab, parenting Islami, serta kabar dari Ma’had Tahfizhul Qur’an Tarbiyah Sunnah.', emptyText: 'Belum ada artikel yang dipublikasikan.' },
  },
};

function isObject(value: unknown): value is Record<string, unknown> { return Boolean(value) && typeof value === 'object' && !Array.isArray(value); }
function mergeSection<T extends Record<string, unknown>>(fallback: T, value: unknown): T {
  if (!isObject(value)) return fallback;
  const result = { ...fallback };
  for (const [key, candidate] of Object.entries(value)) {
    if (candidate === null || candidate === undefined || (typeof candidate === 'string' && !candidate.trim())) continue;
    result[key as keyof T] = candidate as T[keyof T];
  }
  return result;
}
function validLinks(value: unknown, fallback: SiteLink[]) {
  if (!Array.isArray(value)) return fallback;
  const links = value.filter(isObject).map((link) => ({ label: String(link.label ?? '').trim(), href: String(link.href ?? '').trim() })).filter((link) => link.label && link.href);
  return links.length ? links : fallback;
}
function merge(value: unknown): PublicSiteSettings {
  if (!isObject(value)) return fallbackSiteSettings;
  const section = <Key extends keyof PublicSiteSettings>(key: Key) => isObject(value[key]) ? value[key] : {};
  const navigation = section('navigation');
  const content = section('content');
  return {
    branding: mergeSection(fallbackSiteSettings.branding, section('branding')), header: mergeSection(fallbackSiteSettings.header, section('header')), hero: mergeSection(fallbackSiteSettings.hero, section('hero')), pages: mergeSection(fallbackSiteSettings.pages, section('pages')), footer: mergeSection(fallbackSiteSettings.footer, section('footer')), seo: mergeSection(fallbackSiteSettings.seo, section('seo')), navigation: { main: validLinks(navigation.main, fallbackSiteSettings.navigation.main), footer: validLinks(navigation.footer, fallbackSiteSettings.navigation.footer) }, content: { profile: mergeSection(fallbackSiteSettings.content.profile, content.profile), smp: mergeSection(fallbackSiteSettings.content.smp, content.smp), sma: mergeSection(fallbackSiteSettings.content.sma, content.sma), spmb: mergeSection(fallbackSiteSettings.content.spmb, content.spmb), contact: mergeSection(fallbackSiteSettings.content.contact, content.contact), articles: mergeSection(fallbackSiteSettings.content.articles, content.articles) },
  };
}

let settingsRequest: Promise<PublicSiteSettings> | undefined;
export function getSiteSettings() {
  if (!settingsRequest) settingsRequest = (async () => {
    const baseUrl = import.meta.env.CMS_API_URL?.replace(/\/$/, '');
    if (!baseUrl) return fallbackSiteSettings;
    try {
      const response = await fetch(`${baseUrl}/api/settings`, { signal: AbortSignal.timeout(5000) });
      if (!response.ok) return fallbackSiteSettings;
      const payload = await response.json() as { data?: unknown };
      return merge(payload.data);
    } catch { return fallbackSiteSettings; }
  })();
  return settingsRequest;
}
