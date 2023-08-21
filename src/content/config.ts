import { date } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      imagePath: image(),
      createdAt: z.date(),
      league: z.string(),
      shortenDescription: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
