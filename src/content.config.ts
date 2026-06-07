import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const artikelCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc,mdx}", base: "./src/content/artikel" }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  'artikel': artikelCollection,
};
