import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stfox.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/authentication/",
          "/pages/404",
          "/pages/500",
          "/pages/maintenance",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/authentication/",
          "/pages/404",
          "/pages/500",
          "/pages/maintenance",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/authentication/",
          "/pages/404",
          "/pages/500",
          "/pages/maintenance",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
