import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const BASE = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastBuild = new Date("2026-03-04");

    const staticPages = [
        { url: `${BASE}/`, lastModified: lastBuild, changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${BASE}/services`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE}/services/web-design`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/services/local-seo`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/services/managed-hosting`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/services/ecommerce`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/pricing`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE}/about`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/contact`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/blog`, lastModified: lastBuild, changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${BASE}/industries`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/portfolio`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.6 },
        // City pages
        { url: `${BASE}/kennewick`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/pasco`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/richland`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/west-pasco`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE}/web-design-kennewick`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/seo-tri-cities`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        // Niche pages
        { url: `${BASE}/web-design-for-contractors`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/winery-website-design`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/medical-website-design`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/restaurants`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/real-estate`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/professional-services`, lastModified: lastBuild, changeFrequency: "monthly" as const, priority: 0.7 },
        // Legal
        { url: `${BASE}/privacy`, lastModified: lastBuild, changeFrequency: "yearly" as const, priority: 0.2 },
        { url: `${BASE}/terms`, lastModified: lastBuild, changeFrequency: "yearly" as const, priority: 0.2 },
    ];

    const blogPages = blogPosts.map((post) => ({
        url: `${BASE}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
