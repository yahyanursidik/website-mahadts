# Website Mahad Tarbiyah Sunnah

> Panduan bawaan Astro di bawah tetap berlaku untuk pengembangan lokal.

## Pengaturan dari CMS

Situs dapat membaca pengaturan publik dari CMS Refine pada saat proses build: identitas dan favicon, banner/header, hero beranda, gambar hero halaman, kontak/footer, menu, serta SEO.

Di Netlify project situs utama, buat environment variable berikut:

```text
CMS_API_URL=https://cms.mahadtarbiyahsunnah.com
```

Tidak ada rahasia atau kredensial yang disimpan di project situs. Setelah pengaturan di CMS disimpan, jalankan deploy ulang situs utama supaya nilai terbaru ikut diprerender. Jika `CMS_API_URL` belum diisi atau CMS tidak dapat dijangkau, situs tetap memakai pengaturan bawaan yang ada di repository.

---

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
