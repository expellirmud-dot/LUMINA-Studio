import type { MetadataRoute } from "next";
import { publicSiteUrl } from "../src/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === "preview") return [];

  // Only the public homepage is in the approved Phase 1 sitemap.
  return [{ url: publicSiteUrl, changeFrequency: "monthly", priority: 1 }];
}
