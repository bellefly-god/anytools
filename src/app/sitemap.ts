import { MetadataRoute } from "next";
import { categories, tools } from "@/data/tools";
import { prompts } from "@/data/prompts";
import { githubTopicCollections } from "@/data/github-topics";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/prompts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/github`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  githubTopicCollections.forEach((topic) => {
    urls.push({
      url: `${SITE_URL}/github/${topic.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    });
  });

  prompts.forEach((prompt) => {
    urls.push({
      url: `${SITE_URL}/prompts/${prompt.id}`,
      lastModified: new Date(prompt.updatedAt || prompt.createdAt || new Date()),
      changeFrequency: "monthly",
      priority: prompt.hot ? 0.8 : 0.65,
    });
  });

  tools.slice(0, 150).forEach((tool) => {
    urls.push({
      url: `${SITE_URL}/tool/${tool.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: tool.featured ? 0.72 : 0.58,
    });
  });

  // Category pages
  categories.forEach((category) => {
    urls.push({
      url: `${SITE_URL}/category/${category.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  return urls;
}
