import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    alternates: { canonical: "https://grogan.dev/services/local-seo" },
    title: "Local SEO Services — Kennewick & Tri-Cities",
    description:
        "Dominate local search results. Google Business Profile setup, on-page SEO, and citations for Tri-Cities businesses.",
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
                    <h1 className="mt-4">Dominate Local Search Results</h1>
                    <p>
                        When customers in Kennewick search for what you do, you need to be
                        at the top of the list. We get you there.
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
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Audit & Strategy</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>We analyze your current rankings and competitors.</p>
                                    </div>
                                </div>
                                {/* Process Steps 2-4 skipped for brevity in this component rewrite, but maintaining structural aesthetic */}
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
                            <h2>Stop Losing Jobs to Competitors</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                A beautiful website doesn&apos;t matter if nobody can find it. Local SEO is the engine that drives targeted, high-intent traffic to your business.
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
                    <h2>Find out why you aren&apos;t ranking</h2>
                    <p>Get a free SEO audit showing exactly where you stand against competitors.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free SEO Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
