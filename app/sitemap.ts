import type { MetadataRoute } from "next";

const SITE_URL = "https://orixendigital.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page site with anchor sections - each section gets its own URL entry
  // so search engines understand the structure
  const sections = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    {
      path: "#about",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "#services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "#showcase",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "#testimonials",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "#faq",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "#contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return sections.map((section) => ({
    url: `${SITE_URL}/${section.path}`,
    lastModified,
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }));
}
