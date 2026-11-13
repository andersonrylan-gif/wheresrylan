import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...nav.map((t) => t.href)].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
