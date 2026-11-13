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

// One Markdown file per knowledge base article: src/content/kennisbank/<slug>.md
// The file name becomes the URL: /kennisbank/<slug>/
const kennisbank = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kennisbank' }),
  schema: z.object({
    // <title> tag, keep it under ~60 characters including the brand suffix.
    title: z.string().max(65),
    // Visible H1, may be longer and more natural than the <title>.
    heading: z.string(),
    description: z.string().min(70).max(160),
    // Short answer-first summary shown at the top. Search engines and AI
    // assistants quote these lines, so make each one a complete statement.
    summary: z.array(z.string()).min(2).max(5),
    category: z.enum(['Craft CMS', 'AI en websites', 'SEO', 'Website beheer']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // Primary sources the article builds on, shown at the bottom and in structured data.
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { regions, kennisbank };
