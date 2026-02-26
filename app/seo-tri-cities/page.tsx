import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://grogan.dev/seo-tri-cities" },
    title: "SEO Tri-Cities — Local Search Optimization for Kennewick, Pasco & Richland",
    description:
        "Local SEO services for Tri-Cities businesses. Rank on Google for Kennewick, Pasco, & Richland searches. Free SEO audit from your local expert.",
};

export default function SEOTriCitiesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="aurora-glow accent" style={{ top: "0%", left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}></div>
                <div className="container z-above">
                    <span className="local-badge">Tri-Cities, WA</span>
                    <h1 className="mt-4">SEO for Tri-Cities Businesses</h1>
                    <p>
                        Get found on Google when Kennewick, Pasco, and Richland customers
                        search for what you do. Local SEO from a local expert.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <div>
                            <h2>Local SEO That Gets You Found</h2>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                When someone in the Tri-Cities searches for &ldquo;plumber near
                                me&rdquo; or &ldquo;dentist Kennewick,&rdquo; you need to be in
                                the top results. If you&apos;re not, your competitors are getting
                                those calls.
                            </p>
                            <p style={{ marginTop: 12, color: "var(--color-text-muted)" }}>
                                We focus specifically on local search optimization for
                                Kennewick, Pasco, Richland, and the surrounding Tri-Cities area.
                                No national campaigns, no fluff — just the exact work needed to
                                get your business in front of local buyers.
                            </p>
                            <div className="btn-group" style={{ marginTop: 32 }}>
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    Get Your Free SEO Audit <span className="icon-arrow">→</span>
                                </Link>
                                <Link href="/services/local-seo" className="btn btn-outline btn-lg">
                                    Learn More About Our SEO
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 24 }}>Our SEO Process</h3>
                            <div className="card">
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>1</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Audit</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", margin: 0 }}>We analyze your current rankings, website, and competitors.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>2</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Optimize</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", margin: 0 }}>On-page SEO, Google Business Profile, schema markup, and content.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>3</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Build</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", margin: 0 }}>Local citations, review strategy, and quality backlinks.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: 16 }}>
                                    <div style={{ background: "var(--color-primary)", color: "var(--color-white)", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>4</div>
                                    <div>
                                        <h4 style={{ fontSize: "var(--font-size-lg)", marginBottom: 8, color: "var(--color-white)" }}>Report</h4>
                                        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)", margin: 0 }}>Monthly ranking reports so you see exactly what&apos;s working.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="bg-grid"></div>
                <div className="container z-above">
                    <h2>Stop Losing Customers to Competitors on Google</h2>
                    <p>Get a free SEO audit and see exactly where you stand.</p>
                    <div className="btn-group" style={{ justifyContent: "center" }}>
                        <Link href="/contact" className="btn btn-accent btn-lg">
                            Get Your Free Tri-Cities SEO Audit <span className="icon-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
