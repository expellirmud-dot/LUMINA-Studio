import type { MetadataRoute } from "next";
import { publicSiteUrl } from "../src/config/site";

export default function robots(): MetadataRoute.Robots {
  // Public preview deployments must not be indexed or treated as the released website.
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/story-spike", "/fastwork"],
    },
    sitemap: `${publicSiteUrl}/sitemap.xml`,
  };
}
