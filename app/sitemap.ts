import type { MetadataRoute } from "next";
import { INDEXABLE_PAGES } from "@/lib/pages";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site-config";

// /domain is intentionally absent: it is noindex and not part of the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: CONTENT_UPDATED,
  }));
}
