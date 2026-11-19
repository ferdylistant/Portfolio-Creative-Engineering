import type { MetadataRoute } from "next";
import { journalPosts } from "@/data/journal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/journal", "/contact", "/resume"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  return [
    ...staticRoutes,
    ...projects.map((project) => ({ url: `${site.url}/projects/${project.slug}` })),
    ...journalPosts.map((post) => ({
      url: `${site.url}/journal/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
