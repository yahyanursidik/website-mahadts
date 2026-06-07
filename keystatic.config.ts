import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    pengaturanUtama: singleton({
      label: 'Pengaturan Utama',
      path: 'src/content/pengaturanUtama/data',
      format: { data: 'json' },
      schema: {
        favicon: fields.image({
          label: 'Favicon',
          directory: 'public/images/settings',
          publicPath: '/images/settings',
        }),
        googleMapsUrl: fields.text({
          label: 'Google Maps Embed URL',
          description: 'URL iframe untuk peta (ambil dari atribut src di Google Maps Embed)',
        }),
        linkBrosur: fields.text({
          label: 'Link Brosur SPMB',
          description: 'Tautan untuk mengunduh atau melihat brosur SPMB (misal: link Google Drive atau PDF)',
        }),
      },
    }),
    pengaturanBeranda: singleton({
      label: 'Pengaturan Beranda',
      path: 'src/content/pengaturanBeranda/data',
      format: { data: 'json' },
      schema: {
        slideshow: fields.array(
          fields.image({
            label: 'Gambar Slideshow',
            directory: 'public/images/slideshow',
            publicPath: '/images/slideshow',
          }),
          {
            label: 'Slideshow Beranda',
            itemLabel: props => 'Gambar',
          }
        ),
      },
    }),
    pengaturanHalaman: singleton({
      label: 'Gambar Hero Halaman',
      path: 'src/content/pengaturanHalaman/data',
      format: { data: 'json' },
      schema: {
        heroProfil: fields.image({
          label: 'Hero Profil Ma\'had',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroSmp: fields.image({
          label: 'Hero Program SMP',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroSma: fields.image({
          label: 'Hero Program SMA',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        heroSpmb: fields.image({
          label: 'Hero SPMB',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        gambarSejarahProfil: fields.image({
          label: 'Gambar Bagian Sejarah Profil',
          directory: 'public/images/halaman',
          publicPath: '/images/halaman',
        }),
      },
    }),
  },
  collections: {
    artikel: collection({
      label: 'Artikel & Wawasan',
      slugField: 'title',
      path: 'src/content/artikel/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul' } }),
        date: fields.date({
          label: 'Tanggal Publikasi',
          defaultValue: { kind: 'today' },
        }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Tahfizh', value: 'Tahfizh' },
            { label: 'Adab', value: 'Adab' },
            { label: 'Parenting', value: 'Parenting' },
            { label: 'Info Ma\'had', value: 'Info Ma\'had' },
          ],
          defaultValue: 'Info Ma\'had',
        }),
        coverImage: fields.image({
          label: 'Gambar Sampul',
          directory: 'public/images/artikel',
          publicPath: '/images/artikel',
        }),
        summary: fields.text({
          label: 'Ringkasan',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Konten',
        }),
      },
    }),
  },
});
