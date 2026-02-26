import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    if (!post) {
        return { title: "Post Not Found" };
    }
    return {
        title: `${post.title} | Kennewick Web Design Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            {/* ── Article Header ── */}
            <section
                className="page-hero"
                style={{
                    paddingBottom: 60,
                    background: "linear-gradient(180deg, var(--color-dark) 0%, var(--color-dark-surface) 100%)",
                }}
            >
                <div className="bg-grid"></div>
                <div className="aurora-glow" style={{ top: "-20%", left: "20%", opacity: 0.15 }}></div>
                <div className="aurora-glow accent" style={{ top: "20%", right: "10%", opacity: 0.1 }}></div>
                <div
                    className="container"
                    style={{
                        position: "relative",
                        zIndex: 10,
                        maxWidth: 820,
                        textAlign: "left",
                    }}
                >
                    {/* Back link */}
                    <Link
                        href="/blog"
                        style={{
                            color: "var(--color-text-dim)",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 32,
                            fontWeight: 600,
                            fontSize: "var(--font-size-sm)",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                        }}
                    >
                        <span>←</span> Back to Blog
                    </Link>

                    {/* Badges */}
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 24 }}>
                        <span
                            style={{
                                background: "rgba(0, 71, 195, 0.25)",
                                padding: "4px 14px",
                                borderRadius: "var(--radius-full)",
                                fontSize: "var(--font-size-xs)",
                                fontWeight: 700,
                                color: "var(--color-primary)",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                            }}
                        >
                            {post.category}
                        </span>
                        <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)", fontWeight: 600 }}>
                            {post.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            marginBottom: 24,
                        }}
                    >
                        {post.title}
                    </h1>

                    {/* Subtitle / excerpt */}
                    <p
                        style={{
                            fontSize: "var(--font-size-xl)",
                            color: "var(--color-text-muted)",
                            lineHeight: 1.7,
                            marginBottom: 32,
                            maxWidth: 660,
                        }}
                    >
                        {post.excerpt}
                    </p>

                    {/* Author bar */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            padding: "18px 24px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid var(--color-glass-border)",
                            borderRadius: "var(--radius-lg)",
                        }}
                    >
                        {/* Avatar circle */}
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 800,
                                fontSize: "var(--font-size-sm)",
                                color: "var(--color-dark)",
                                flexShrink: 0,
                            }}
                        >
                            KW
                        </div>
                        <div>
                            <span style={{ fontWeight: 700, color: "var(--color-white)", display: "block", fontSize: "var(--font-size-sm)" }}>
                                {post.author}
                            </span>
                            <span style={{ color: "var(--color-text-dim)", fontSize: "var(--font-size-xs)" }}>
                                Published {post.date}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Article Body ── */}
            <section className="section" style={{ paddingTop: "var(--spacing-16)", paddingBottom: "var(--spacing-24)" }}>
                <div className="container" style={{ maxWidth: 820 }}>
                    <div className="article-content">
                        {post.content}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container" style={{ position: "relative", zIndex: 10 }}>
                    <h2>Ready to hire the right designer?</h2>
                    <p>
                        Book a free strategy call with Kennewick Web Design. We&apos;ll audit your current site and give you an honest breakdown — no jargon, no strings attached.
                    </p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Book a Strategy Call <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
