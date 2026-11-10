import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = "https://techroot-page.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
    ...projects.map((p) => ({
      url: `${base}/apps/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
