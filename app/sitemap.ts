import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/site";
import { publishedProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl() ?? "http://localhost:3000";
  const paths = [
    "",
    "/capabilities",
    "/portfolio",
    "/about",
    "/contact",
    ...publishedProjects.map((project) => `/portfolio/${project.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
