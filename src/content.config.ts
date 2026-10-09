import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per region page: src/content/regions/<slug>.md
// The file name becomes the URL: /webdeveloper-<slug>/
const regions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/regions' }),
  schema: z.object({
    city: z.string(),
    title: z.string().max(65),
    description: z.string().min(70).max(160),
    intro: z.string(),
    // Drafts are not built, not linked and not in the sitemap.
    draft: z.boolean().default(true),
  }),
});

export const collections = { regions };
