import { MetadataRoute } from "next";
import { categories, tools } from "@/data/tools";

const SITE_URL = "https://anytools.pagecleans.com";

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

  // Category pages
  categories.forEach((category) => {
    urls.push({
      url: `${SITE_URL}/category/${category.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Tool detail pages (featured tools get higher priority)
  tools.slice(0, 100).forEach((tool) => {
    urls.push({
      url: `${SITE_URL}/tool/${tool.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: tool.featured ? 0.7 : 0.5,
    });
  });

  return urls;
}