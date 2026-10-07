import type { MetadataRoute } from "next";
import { site, tiles } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...tiles.map((t) => t.href)].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
