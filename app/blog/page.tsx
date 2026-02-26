import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/blog" },
    title: "Blog — Web Design & SEO Tips for Kennewick Businesses",
    description:
        "Web design, SEO, and digital marketing tips for Kennewick & Tri-Cities businesses. Actionable advice from your local web expert.",
};

export default function BlogPage() {
    const featured = blogPosts[0];

    return (
        <>
            {/* ── Hero ── */}
            <section className="page-hero" style={{ paddingBottom: 48 }}>
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.25 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Resources</span>
                    <h1 style={{ marginTop: 16, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>The Kennewick Growth Blog</h1>
                    <p>
                        No-fluff guides on web design, SEO, and digital marketing — written for real Tri-Cities business owners.
                    </p>
                </div>
            </section>

            {/* ── Featured Article Card ── */}
            <section className="section" style={{ paddingTop: "var(--spacing-16)", paddingBottom: "var(--spacing-24)" }}>
                <div className="container" style={{ maxWidth: 960 }}>
                    <Link
                        href={`/blog/${featured.slug}`}
                        style={{ textDecoration: "none", color: "inherit", display: "block" }}
                    >
                        <article
                            className="card card-hover"
                            style={{
                                padding: 0,
                                overflow: "hidden",
                                border: "1px solid rgba(59, 130, 246, 0.35)",
                                boxShadow:
                                    "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Accent stripe */}
                            <div
                                style={{
                                    height: 4,
                                    background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                                }}
                            ></div>

                            <div style={{ padding: "3rem 3rem 2.5rem", position: "relative" }}>
                                <div className="aurora-glow accent" style={{ top: "-60%", right: "-30%", opacity: 0.1, pointerEvents: "none" }}></div>

                                {/* Badges row */}
                                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 28, zIndex: 2, position: "relative" }}>
                                    <span className="local-badge local-badge-gold" style={{ marginBottom: 0 }}>Featured</span>
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
                                        {featured.category}
                                    </span>
                                    <span
                                        style={{
                                            marginLeft: "auto",
                                            fontSize: "var(--font-size-xs)",
                                            color: "var(--color-text-dim)",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {featured.readTime}
                                    </span>
                                </div>

                                {/* Title & excerpt */}
                                <div style={{ maxWidth: 700, zIndex: 2, position: "relative" }}>
                                    <h2
                                        style={{
                                            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                                            marginBottom: 20,
                                            lineHeight: 1.15,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {featured.title}
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "var(--font-size-lg)",
                                            color: "var(--color-text-muted)",
                                            lineHeight: 1.7,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {featured.excerpt}
                                    </p>
                                </div>

                                {/* Footer bar */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 16,
                                        marginTop: 32,
                                        paddingTop: 24,
                                        borderTop: "1px solid var(--color-glass-border)",
                                        zIndex: 2,
                                        position: "relative",
                                    }}
                                >
                                    {/* Author + date */}
                                    <div>
                                        <span style={{ fontWeight: 700, color: "var(--color-white)", display: "block", fontSize: "var(--font-size-sm)" }}>
                                            {featured.author}
                                        </span>
                                        <span style={{ color: "var(--color-text-dim)", fontSize: "var(--font-size-xs)" }}>
                                            {featured.date}
                                        </span>
                                    </div>

                                    {/* CTA */}
                                    <span
                                        style={{
                                            marginLeft: "auto",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 8,
                                            fontWeight: 800,
                                            fontSize: "var(--font-size-sm)",
                                            color: "var(--color-accent)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        Read the full guide <span className="icon-arrow">→</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* ── Table of Contents Preview ── */}
                    <div
                        className="card"
                        style={{
                            marginTop: "var(--spacing-8)",
                            padding: "2rem 2.5rem",
                            background: "rgba(255,255,255,0.015)",
                        }}
                    >
                        <h3 style={{ fontSize: "var(--font-size-lg)", marginBottom: 20, color: "var(--color-text-muted)" }}>
                            What You&apos;ll Learn
                        </h3>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: 12,
                            }}
                        >
                            {[
                                "What SEO actually means",
                                "Lighthouse scores explained",
                                "Headers, footers & navigation",
                                "Cookies & privacy banners",
                                "Performance & page speed",
                                "Mobile-first design",
                                "SSL certificates",
                                "Domain & hosting ownership",
                                "What to expect from a designer",
                                "Red flags to watch for",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        padding: "10px 14px",
                                        background: "rgba(255,255,255,0.025)",
                                        borderRadius: "var(--radius-md)",
                                        border: "1px solid var(--color-glass-border)",
                                    }}
                                >
                                    <span style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "var(--font-size-sm)" }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span style={{ color: "var(--color-text-main)", fontSize: "var(--font-size-sm)", fontWeight: 500 }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── More Articles ── */}
            {blogPosts.length > 1 && (
                <section className="section-alt" style={{ paddingTop: "var(--spacing-16)", paddingBottom: "var(--spacing-24)" }}>
                    <div className="container" style={{ maxWidth: 960 }}>
                        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--spacing-8)" }}>
                            More Articles
                        </h2>
                        <div className="grid-2">
                            {blogPosts.slice(1).map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <article
                                        className="card"
                                        style={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            padding: "2rem",
                                        }}
                                    >
                                        {/* Category + read time */}
                                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                                            <span
                                                style={{
                                                    background: "rgba(0, 71, 195, 0.25)",
                                                    padding: "3px 12px",
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
                                            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)", fontWeight: 600, marginLeft: "auto" }}>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{ fontSize: "var(--font-size-xl)", lineHeight: 1.25, marginBottom: 16 }}>
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", lineHeight: 1.7, flex: 1 }}>
                                            {post.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--color-glass-border)", paddingTop: 16, marginTop: 20 }}>
                                            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)" }}>{post.date}</span>
                                            <span style={{ fontWeight: 700, fontSize: "var(--font-size-xs)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                                                Read Article →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Want to skip the research?</h2>
                    <p>
                        Get a free website audit and find out exactly where your current site stands — no jargon, no pressure.
                    </p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
