import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export const dynamic = "force-static";

const BASE = "https://grogan.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { url: `${BASE}/`, changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${BASE}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE}/services/web-design`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/services/local-seo`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/services/managed-hosting`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/services/ecommerce`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/pricing`, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${BASE}/industries`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/portfolio`, changeFrequency: "monthly" as const, priority: 0.6 },
        // City pages
        { url: `${BASE}/kennewick`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/pasco`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/richland`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/west-pasco`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE}/web-design-kennewick`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/seo-tri-cities`, changeFrequency: "monthly" as const, priority: 0.8 },
        // Niche pages
        { url: `${BASE}/web-design-for-contractors`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE}/winery-website-design`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/medical-website-design`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/restaurants`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/real-estate`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE}/professional-services`, changeFrequency: "monthly" as const, priority: 0.7 },
        // Legal
        { url: `${BASE}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
        { url: `${BASE}/terms`, changeFrequency: "yearly" as const, priority: 0.2 },
    ];

    const blogPages = blogPosts.map((post) => ({
        url: `${BASE}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
