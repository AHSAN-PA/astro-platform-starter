import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((d) => new Date(d)),
    description: z.string(),
  }),
});

export const collections = { blog: blogCollection };
