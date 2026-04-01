import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
    alternates: { canonical: "/services/local-seo" },
    title: "Local SEO",
    description:
        "Local SEO support for Tri-Cities businesses, including on-page improvements, Google Business Profile work, and local search foundations.",
    openGraph: {
        url: "/services/local-seo",
        title: "Local SEO | Kennewick Web Design",
        description: "Local SEO support for Tri-Cities businesses, including on-page improvements, Google Business Profile work, and local search foundations.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Local SEO | Kennewick Web Design",
        description: "Local SEO for Tri-Cities businesses — on-page improvements, Google Business Profile, and local search foundations.",
    },
};

const CheckIcon = () => (
    <span style={{ color: "var(--color-accent)", marginRight: 8, fontWeight: "bold" }}>✦</span>
);

export default function LocalSEOPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge local-badge-gold">Local SEO</span>
                    <h1 className="mt-4">Local SEO for businesses that need to be easier to find.</h1>
                    <p>
                        Local SEO is about showing up where the right customer is already looking,
                        then giving them a clean path from search result to contact.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div className="card">
                            <h2 style={{ fontSize: "var(--font-size-3xl)", marginBottom: 16 }}>The Process</h2>
                            <div style={{ marginTop: 24 }}>
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{
                                        background: "var(--color-primary)",
                                        color: "var(--color-white)",
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "bold",
                                        flexShrink: 0
                                    }}>1</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Review & Strategy</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>We review your current site, local visibility, and the gaps competitors are exploiting.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>2</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>On-Page Optimization</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>Fixing headings, meta tags, and local keywords.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>3</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Google Business Profile</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>Optimizing your map listing for maximum visibility.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>4</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Monthly Growth</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>Building citations, managing reviews, and creating content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Stop making it easy for competitors to win the click.</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                A good-looking site is not enough if it is invisible in the searches that matter. Local SEO helps connect your service pages, Google Business Profile, and local signals so your business is easier to discover.
                            </p>
                            <h3 style={{ marginTop: 32, marginBottom: 16 }}>What&apos;s Included:</h3>
                            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Keyword Research (Kennewick & Tri-Cities focus)
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> Google Business Profile Setup & Management
                                </li>
                                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--color-glass-border)", display: "flex" }}>
                                    <CheckIcon /> On-Page SEO / Technical SEO
                                </li>
                                <li style={{ padding: "12px 0", display: "flex" }}>
                                    <CheckIcon /> Monthly Ranking & Traffic Reports
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Need help understanding your local search visibility?</h2>
                    <p>Reach out and we can review your current site, Google Business Profile, and local search opportunities.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            {site.primaryCtaLabel} <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
