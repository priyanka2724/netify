import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    data: z.string(),
    image: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
};
