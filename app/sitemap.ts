import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
