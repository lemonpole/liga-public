import { defineCollection, z } from "astro:content";

const featuresCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

const howItWorksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  features: featuresCollection,
  "how-it-works": howItWorksCollection,
};
