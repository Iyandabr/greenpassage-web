import type { MetadataRoute } from "next";
import { ALL_COUNTRIES } from "@/lib/all-countries";

const SITE_URL = "https://greenpassage-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const countryUrls = Object.values(ALL_COUNTRIES).map(c => ({
    url: `${SITE_URL}/countries/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL,                        lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${SITE_URL}/checker`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/jobs`,              lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/scholarships`,      lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/lottery`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/ai-coach`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/countries`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/posts`,             lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    ...countryUrls,
  ];
}
