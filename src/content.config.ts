import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    techStack: z.array(z.string()),
    keyFeatures: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string().default('Project hero image'),
    github_link: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = { projects, articles };