import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
