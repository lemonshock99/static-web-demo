import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('The DesignCo Team'),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
