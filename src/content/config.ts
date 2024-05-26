import { z, defineCollection } from "astro:content";

const myProjects = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    blurb: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default("Joshua LaMorey-Salzmann"),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      // ogImage: image()
      //   .refine(img => img.width >= 1200 && img.height >= 630, {
      //     message: "OpenGraph image must be at least 1200 X 630 pixels!",
      //   })
      //   .or(z.string())
      //   .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = {
  projects: myProjects,
  blog: blog,
};
